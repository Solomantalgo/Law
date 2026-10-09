import { useEffect, useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import Header from './Header';
import Footer from './Footer';
import { contactEnquiryNotice, firmContact, practiceAreas } from '../data/siteData';

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function ContactPage({ menuOpen, setMenuOpen }) {
  const [errors, setErrors] = useState({});
  const [formState, submitToFormspree, resetForm] = useForm('mppqdbrr');
  const hasProviderError = (field) => Boolean(formState.errors?.getFieldErrors?.(field)?.length);

  useEffect(() => {
    if (window.location.hash !== '#consultation') return undefined;
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth';
    let secondFrame;
    const firstFrame = window.requestAnimationFrame(() => { secondFrame = window.requestAnimationFrame(() => {
      const target = document.getElementById('consultation');
      if (!target) return;
      const headerHeight = document.querySelector('.site-header')?.getBoundingClientRect().height || 0;
      const top = target.getBoundingClientRect().top + window.scrollY - headerHeight - 18;
      window.scrollTo({ top, behavior: motion });
    }); });
    return () => { window.cancelAnimationFrame(firstFrame); if (secondFrame) window.cancelAnimationFrame(secondFrame); };
  }, []);

  function handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const nextErrors = {};
    const fullName = String(data.get('fullName') || '').trim();
    const email = String(data.get('email') || '').trim();
    const message = String(data.get('message') || '').trim();
    const privacyAcknowledged = data.has('privacyAcknowledged');
    if (!fullName) nextErrors.fullName = 'Enter your full name.';
    if (!email) nextErrors.email = 'Enter your email address.';
    else if (!emailPattern.test(email)) nextErrors.email = 'Enter an email address in a valid format.';
    if (!message) nextErrors.message = 'Add a brief message so the team knows how to direct your enquiry.';
    if (!privacyAcknowledged) nextErrors.privacyAcknowledged = 'Please acknowledge the note above before sending.';
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length) {
      document.getElementById(Object.keys(nextErrors)[0])?.focus();
      return;
    }
    setErrors({});
    submitToFormspree(event);
  }

  return <>
    <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    <main className="contact-page">
      <section className="contact-intro">
        <div className="contact-shell">
          <p className="eyebrow dark">R. MACKAY ADVOCATES, KAMPALA</p>
          <h1>Contact <em>the firm</em></h1>
          <p>Send an initial enquiry or contact us directly.</p>
        </div>
      </section>

      <section className="contact-main contact-shell" aria-label="Contact details and enquiry form">
        <aside className="contact-details" aria-labelledby="contact-details-title">
          <p className="eyebrow dark">GET IN TOUCH</p>
          <h2 id="contact-details-title">Speak with our team.</h2>
          <p className="contact-detail-intro">For an initial enquiry, email or call us.</p>
          <dl className="contact-detail-list">
            <div><dt>Office address</dt><dd>{firmContact.address.map((line) => <span key={line}>{line}</span>)}</dd></div>
            <div><dt>Telephone</dt><dd><a href={`tel:${firmContact.phone.replace(/\s/g, '')}`}>{firmContact.phone}</a></dd></div>
            <div><dt>Email</dt><dd><a href={`mailto:${firmContact.email}`}>{firmContact.email}</a></dd></div>
          </dl>
        </aside>

        <section id="consultation" className="contact-form-section" aria-labelledby="contact-form-title">
          <p className="eyebrow dark">INITIAL ENQUIRY</p>
          <h2 id="contact-form-title">Send an Enquiry</h2>
          <p className="contact-form-intro">Briefly describe how we can direct your enquiry.</p>
          <div className="contact-notice" role="note">{contactEnquiryNotice.text}</div>
          {formState.succeeded ? (
            <div className="contact-confirmation" role="status" aria-live="polite">
              <h3>Enquiry received</h3>
              <p>Thank you. Your enquiry has been submitted to the firm.</p>
              <button className="line-link" type="button" onClick={resetForm}>Send another enquiry</button>
            </div>
          ) : <form className="contact-form" onSubmit={handleSubmit} noValidate aria-busy={formState.submitting}>
            <div className="contact-form-grid">
              <div className="contact-field">
                <label htmlFor="fullName">Full name <span aria-hidden="true">*</span></label>
                <input id="fullName" name="fullName" autoComplete="name" required aria-required="true" aria-invalid={Boolean(errors.fullName || hasProviderError('fullName'))} aria-describedby={errors.fullName ? 'fullName-error' : hasProviderError('fullName') ? 'fullName-formspree-error' : undefined} onChange={() => setErrors((current) => ({ ...current, fullName: undefined }))} />
                {errors.fullName && <span id="fullName-error" className="contact-field-error">{errors.fullName}</span>}
                <ValidationError id="fullName-formspree-error" className="contact-field-error" field="fullName" errors={formState.errors} />
              </div>
              <div className="contact-field">
                <label htmlFor="email">Email address <span aria-hidden="true">*</span></label>
                <input id="email" name="email" type="email" autoComplete="email" required aria-required="true" aria-invalid={Boolean(errors.email || hasProviderError('email'))} aria-describedby={errors.email ? 'email-error' : hasProviderError('email') ? 'email-formspree-error' : undefined} onChange={() => setErrors((current) => ({ ...current, email: undefined }))} />
                {errors.email && <span id="email-error" className="contact-field-error">{errors.email}</span>}
                <ValidationError id="email-formspree-error" className="contact-field-error" field="email" errors={formState.errors} />
              </div>
              <div className="contact-field">
                <label htmlFor="telephone">Telephone <span className="contact-optional">Optional</span></label>
                <input id="telephone" name="telephone" type="tel" autoComplete="tel" />
              </div>
              <div className="contact-field">
                <label htmlFor="matterCategory">Legal matter category <span className="contact-optional">Optional</span></label>
                <select id="matterCategory" name="matterCategory" defaultValue="">
                  <option value="">Select a category</option>
                  {practiceAreas.map((area) => <option key={area.slug} value={area.slug}>{area.title}</option>)}
                </select>
              </div>
              <div className="contact-field">
                <label htmlFor="preferredContact">Preferred contact method <span className="contact-optional">Optional</span></label>
                <select id="preferredContact" name="preferredContact" defaultValue="">
                  <option value="">No preference</option><option value="email">Email</option><option value="telephone">Telephone</option>
                </select>
              </div>
              <div className="contact-field contact-field-message">
                <label htmlFor="message">Brief message <span aria-hidden="true">*</span></label>
                <textarea id="message" name="message" rows="4" maxLength="2000" required aria-required="true" aria-invalid={Boolean(errors.message || hasProviderError('message'))} aria-describedby={`message-hint${errors.message ? ' message-error' : hasProviderError('message') ? ' message-formspree-error' : ''}`} onChange={() => setErrors((current) => ({ ...current, message: undefined }))} />
                <span id="message-hint" className="contact-field-hint">Keep your message brief and avoid confidential or time-sensitive details. Maximum 2,000 characters.</span>
                {errors.message && <span id="message-error" className="contact-field-error">{errors.message}</span>}
                <ValidationError id="message-formspree-error" className="contact-field-error" field="message" errors={formState.errors} />
              </div>
            </div>

            <div className="contact-honeypot" aria-hidden="true"><label htmlFor="gotcha">Leave this field blank</label><input id="gotcha" name="_gotcha" type="text" tabIndex="-1" autoComplete="off" /></div>
            <div className="contact-consent-wrap">
              <label className="contact-consent" htmlFor="privacyAcknowledged"><input id="privacyAcknowledged" name="privacyAcknowledged" type="checkbox" value="acknowledged" required aria-required="true" aria-invalid={Boolean(errors.privacyAcknowledged)} aria-describedby={errors.privacyAcknowledged ? 'privacyAcknowledged-error' : undefined} onChange={() => setErrors((current) => ({ ...current, privacyAcknowledged: undefined }))} /><span>I understand this is an initial enquiry and agree to be contacted about it.</span></label>
              {errors.privacyAcknowledged && <span id="privacyAcknowledged-error" className="contact-field-error">{errors.privacyAcknowledged}</span>}
            </div>

            <ValidationError className="contact-form-status is-error" errors={formState.errors} role="alert" aria-live="polite" />
            <button className="button button-dark contact-submit" type="submit" disabled={formState.submitting}>{formState.submitting ? 'Sending' : 'Send enquiry'}</button>
          </form>}
        </section>
      </section>
    </main>
    <Footer />
  </>;
}
