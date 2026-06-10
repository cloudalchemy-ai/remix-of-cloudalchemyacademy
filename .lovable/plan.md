# Set up Resend email for "Book a training" form

Replace the current `mailto:` submission in `ContactModal` with a real email send via Resend, using `contact@cloudalchemy.uk` (sender domain `contact.cloudalchemy.uk`).

## Steps

1. **Add Resend API key as a secret**
   - Use the secrets tool to request `RESEND_API_KEY` from you.

2. **Create server function** `src/lib/send-training-enquiry.functions.ts`
   - `createServerFn({ method: "POST" })` from `@tanstack/react-start`.
   - Zod-validate input: `name`, `company`, `email`, `area`, `message` (trim + length limits, valid email).
   - POST to `https://api.resend.com/emails` with `Authorization: Bearer ${process.env.RESEND_API_KEY}`.
   - From: `Cloud Alchemy <noreply@contact.cloudalchemy.uk>`
   - To: `contact@cloudalchemy.uk`
   - Reply-To: submitter's email
   - Subject: `Training enquiry — {company || name}`
   - HTML + plain-text body containing all form fields.
   - Return `{ ok: true }` or throw on failure.

3. **Update `ContactModal` in `src/routes/index.tsx`**
   - Replace `mailto:` redirect in `handleSubmit` with `useServerFn(sendTrainingEnquiry)` call.
   - Add `submitting` state, disable button while sending, show inline error on failure.
   - Keep existing success view ("Thanks — …"), reworded to "Thanks — we'll be in touch shortly."

4. **DNS / domain note (you handle outside code)**
   - In Resend, verify `contact.cloudalchemy.uk` as a sending domain and add the SPF/DKIM/DMARC records they provide at your DNS registrar. Emails will only deliver once verification is green.

## Notes
- No Lovable Cloud needed; calling Resend directly from a server function is sufficient.
- No new packages required (uses `fetch`).
- Form validation done both client- and server-side via Zod.
