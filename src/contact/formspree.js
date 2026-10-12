import { useForm } from '@formspree/react';

// Keep the existing provider integration available during verification of /api/contact.
// Never submit to this provider as an automatic fallback.
export const FORMSPREE_FORM_ID = 'mppqdbrr';
export function useFormspreeContact() {
  return useForm(FORMSPREE_FORM_ID);
}
