import { useEffect, useRef, useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import { contactEnquiryNotice, firmContact, practiceAreas } from '../data/siteData';

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function ContactPage({ menuOpen, setMenuOpen }) {
  const [errors, setErrors] = useState({});
  const [submissionState, setSubmissionState] = useState('idle');
  const [submissionError, setSubmissionError] = useState('');
  const successHeadingRef = useRef(null);
  const formHeadingRef = useRef(null);
  const focusFormHeadingRef = useRef(false);
  const handledSuccessHeadingRef = useRef(null);

  useEffect(() => {
    document.title = 'Contact | R. Mackay Advocates';
  }, []);

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

  useEffect(() => {
    if (submissionState === 'success') {
      const heading = successHeadingRef.current;
      if (!heading || handledSuccessHeadingRef.current === heading) return undefined;
      handledSuccessHeadingRef.current = heading;
      const frame = window.requestAnimationFrame(() => {
        if (successHeadingRef.current !== heading) return;
        heading.focus({ preventScroll: true });
        const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        heading.scrollIntoView({ behavior: reducedMotion ? 'instant' : 'smooth', block: 'start' });
      });
      return () => window.cancelAnimationFrame(frame);
    }

    handledSuccessHeadingRef.current = null;
    if (focusFormHeadingRef.current && submissionState === 'idle') {
      focusFormHeadingRef.current = false;
      const frame = window.requestAnimationFrame(() => formHeadingRef.current?.focus({ preventScroll: true }));
      return () => window.cancelAnimationFrame(frame);
    }
    return undefined;
  }, [submissionState]);

  async function handleSubmit(event) {
    event.preventDefault();
    if (submissionState === 'submitting') return;
    setSubmissionError('');
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
    setSubmissionError('');
    setSubmissionState('submitting');
    const payload = {
      fullName,
      email,
      telephone: String(data.get('telephone') || '').trim(),
      matterCategory: String(data.get('matterCategory') || '').trim(),
      preferredContact: String(data.get('preferredContact') || '').trim(),
      message,
      privacyAcknowledged: privacyAcknowledged ? 'acknowledged' : '',
      website: String(data.get('website') || '').trim(),
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(payload),
      });
      let result;
      try { result = await response.json(); }
      catch { throw new Error('The enquiry service returned an unreadable response. Please contact the firm before sending the enquiry again.'); }

      if (!response.ok || result?.ok !== true) {
        const fieldMessages = {
          fullName: 'Enter your full name.',
          email: 'Enter a valid email address.',
          message: 'Add a brief message.',
          privacyAcknowledged: 'Please acknowledge the note above before sending.',
          matterCategory: 'Choose a listed legal matter category.',
          preferredContact: 'Choose a listed contact method.',
        };
        if (result?.field && fieldMessages[result.field]) {
          setErrors({ [result.field]: fieldMessages[result.field] });
          document.getElementById(result.field)?.focus();
        } else {
          setSubmissionError(result?.error || 'The enquiry could not be sent. Please try again later or contact the firm directly.');
        }
        setSubmissionState('error');
        return;
      }
      setSubmissionState('success');
    } catch (error) {
      const message = error instanceof Error && error.message.startsWith('The enquiry service returned')
        ? error.message
        : 'We could not reach the enquiry service. Please try again later or contact the firm directly.';
      setSubmissionError(message);
      setSubmissionState('error');
    }
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
          <h2 id="contact-form-title" ref={formHeadingRef} tabIndex={-1}>Send an Enquiry</h2>
          <p className="contact-form-intro">Briefly describe how we can direct your enquiry.</p>
          <div className="contact-notice" role="note">{contactEnquiryNotice.text}</div>
          {submissionState === 'success' ? (
            <div className="contact-confirmation" role="status" aria-live="polite">
              <h3 ref={successHeadingRef} tabIndex={-1}>Enquiry received</h3>
              <p>Thank you. Your enquiry has been submitted to the firm.</p>
              <button className="line-link" type="button" onClick={() => { focusFormHeadingRef.current = true; setSubmissionState('idle'); setSubmissionError(''); setErrors({}); }}>Send another enquiry</button>
            </div>
          ) : <form className="contact-form" onSubmit={handleSubmit} noValidate aria-busy={submissionState === 'submitting'}>
            <div className="contact-form-grid">
              <div className="contact-field">
                <label htmlFor="fullName">Full name <span aria-hidden="true">*</span></label>
                <input id="fullName" name="fullName" autoComplete="name" maxLength="120" required aria-required="true" aria-invalid={Boolean(errors.fullName)} aria-describedby={errors.fullName ? 'fullName-error' : undefined} onChange={() => setErrors((current) => ({ ...current, fullName: undefined }))} />
                {errors.fullName && <span id="fullName-error" className="contact-field-error">{errors.fullName}</span>}
              </div>
              <div className="contact-field">
                <label htmlFor="email">Email address <span aria-hidden="true">*</span></label>
                <input id="email" name="email" type="email" autoComplete="email" maxLength="254" required aria-required="true" aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? 'email-error' : undefined} onChange={() => setErrors((current) => ({ ...current, email: undefined }))} />
                {errors.email && <span id="email-error" className="contact-field-error">{errors.email}</span>}
              </div>
              <div className="contact-field">
                <label htmlFor="telephone">Telephone <span className="contact-optional">Optional</span></label>
                <input id="telephone" name="telephone" type="tel" autoComplete="tel" maxLength="40" />
              </div>
              <div className="contact-field">
                <label htmlFor="matterCategory">Legal matter category <span className="contact-optional">Optional</span></label>
                <select id="matterCategory" name="matterCategory" defaultValue="" aria-invalid={Boolean(errors.matterCategory)} aria-describedby={errors.matterCategory ? 'matterCategory-error' : undefined} onChange={() => setErrors((current) => ({ ...current, matterCategory: undefined }))}>
                  <option value="">Select a category</option>
                  {practiceAreas.map((area) => <option key={area.slug} value={area.slug}>{area.title}</option>)}
                </select>
                {errors.matterCategory && <span id="matterCategory-error" className="contact-field-error">{errors.matterCategory}</span>}
              </div>
              <div className="contact-field">
                <label htmlFor="preferredContact">Preferred contact method <span className="contact-optional">Optional</span></label>
                <select id="preferredContact" name="preferredContact" defaultValue="" aria-invalid={Boolean(errors.preferredContact)} aria-describedby={errors.preferredContact ? 'preferredContact-error' : undefined} onChange={() => setErrors((current) => ({ ...current, preferredContact: undefined }))}>
                  <option value="">No preference</option><option value="email">Email</option><option value="telephone">Telephone</option>
                </select>
                {errors.preferredContact && <span id="preferredContact-error" className="contact-field-error">{errors.preferredContact}</span>}
              </div>
              <div className="contact-field contact-field-message">
                <label htmlFor="message">Brief message <span aria-hidden="true">*</span></label>
                <textarea id="message" name="message" rows="4" maxLength="2000" required aria-required="true" aria-invalid={Boolean(errors.message)} aria-describedby={errors.message ? 'message-hint message-error' : 'message-hint'} onChange={() => setErrors((current) => ({ ...current, message: undefined }))} />
                <span id="message-hint" className="contact-field-hint">Keep your message brief and avoid confidential or time-sensitive details. Maximum 2,000 characters.</span>
                {errors.message && <span id="message-error" className="contact-field-error">{errors.message}</span>}
              </div>
            </div>

            <div className="contact-honeypot" aria-hidden="true"><label htmlFor="website">Leave this field blank</label><input id="website" name="website" type="text" tabIndex="-1" autoComplete="off" /></div>
            <div className="contact-consent-wrap">
              <label className="contact-consent" htmlFor="privacyAcknowledged"><input id="privacyAcknowledged" name="privacyAcknowledged" type="checkbox" value="acknowledged" required aria-required="true" aria-invalid={Boolean(errors.privacyAcknowledged)} aria-describedby={errors.privacyAcknowledged ? 'privacyAcknowledged-error' : undefined} onChange={() => setErrors((current) => ({ ...current, privacyAcknowledged: undefined }))} /><span>I understand this is an initial enquiry and agree to be contacted about it.</span></label>
              {errors.privacyAcknowledged && <span id="privacyAcknowledged-error" className="contact-field-error">{errors.privacyAcknowledged}</span>}
            </div>

            {submissionError && <p className="contact-form-status is-error" role="alert" aria-live="polite">{submissionError}</p>}
            <button className="button button-dark contact-submit" type="submit" disabled={submissionState === 'submitting'}>{submissionState === 'submitting' ? 'Sending' : 'Send enquiry'}</button>
          </form>}
        </section>
      </section>
    </main>
    <Footer />
  </>;
}
