import type { LeadFormData } from '../types';

const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit';

interface Web3FormsResponse {
  success: boolean;
  message?: string;
}

export const submitLead = async (data: LeadFormData, botcheck: string): Promise<void> => {
  const accessKey = import.meta.env.VITE_WEB3FORMS_KEY;
  if (!accessKey) {
    throw new Error('VITE_WEB3FORMS_KEY is not configured');
  }

  const response = await fetch(WEB3FORMS_ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify({
      access_key: accessKey,
      subject: `New lead: ${data.inquiry} — ${data.name}`,
      from_name: 'Qowi Portfolio',
      name: data.name,
      email: data.email,
      inquiry: data.inquiry,
      botcheck,
    }),
  });

  const result = (await response.json()) as Web3FormsResponse;
  if (!response.ok || !result.success) {
    throw new Error(result.message ?? 'Lead submission failed');
  }
};
