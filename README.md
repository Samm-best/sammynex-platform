# SammyNex Platform — MVP Starter

A modular Next.js + TypeScript + Tailwind starter for SammyNex: personal portfolio, course catalog, student/admin sign-in entry points, and a branded dashboard shell.

## Important scope note
This is a runnable MVP foundation, not a finished production LMS/payment system. Real authentication, role enforcement, payments, email, video hosting, certificates, and organization reporting must be connected and tested before public launch. Never put secret keys in client code.

## Requirements
- Node.js 20 or newer
- npm

## Run locally
1. Extract the ZIP.
2. Open the `sammynex-platform` folder in VS Code.
3. Open Terminal → New Terminal.
4. Run:
   ```bash
   npm install
   npm run dev
   ```
5. Open http://localhost:3000

## Environment setup
Copy `.env.example` to `.env.local`. The public website runs without Supabase credentials; authentication/database features remain placeholders until configured.

## Recommended next build steps
1. Create a Supabase project and configure `.env.local`.
2. Apply `supabase/schema.sql` in the Supabase SQL Editor.
3. Implement server-side auth + role checks before exposing admin/instructor routes.
4. Integrate Paystack or another eligible payment provider with server-verified webhooks.
5. Add course content, assignments, live sessions, email, certificates, backups, and legal review.


## Design update
The starter now uses a bright, responsive light theme and includes bundled studio profile photos in `public/images/` so the main profile images work without an external image service. Replace these files with your preferred updated portraits whenever needed.
