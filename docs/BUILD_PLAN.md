# SammyNex build plan

## Included in this starter
- Premium dark/navy landing page and responsive navigation
- About, project category, service and contact sections
- Five planned course cards and detail pages
- Sign-in placeholder with security guidance
- Supabase relational schema proposal
- Environment variable template and setup guide

## Remaining production modules
1. Supabase Auth: email verification, password reset, optional Google sign-in.
2. RBAC: Owner, Admin, Instructor, Student; server-side checks and tested RLS policies.
3. Admin CMS: profile, projects, services, blog, pricing, CV upload and media management.
4. LMS: lessons, progress, quizzes, assignment submissions, grading, feedback, announcements.
5. Payments: server-side initialization and webhook verification, receipts, refunds, duplicate-event protection.
6. Certificates: completion rules, 70% threshold, required technical final project, public verification.
7. Live classes: scheduling, timezone display, reminders, attendance, recording consent and access.
8. Organization training: admin-managed organization records, staff enrolments and agreed reports.
9. Contact CRM: validation, spam protection, inquiry statuses, notes and follow-ups.
10. Email notifications, audit logs, monitoring, backups and restore tests.
11. Privacy, terms, refunds, cookie/analytics notices and professional legal review.
12. Automated tests, accessibility, performance and deployment configuration.

## Role rules
- Owner has platform-wide control.
- Admin has only explicitly granted operational permissions.
- Instructor can access assigned courses and learners for those courses.
- Student can access only active entitled courses and their own learning records.
- Organizations are managed by authorized administrators; there is no separate organization-manager login role.

## Launch safety
- Never trust a payment success redirect or screenshot; verify with provider server-side.
- Do not expose service-role or payment secrets to the browser.
- Keep RLS enabled and test it.
- Do not claim certificates are externally accredited unless accreditation is earned.
- Add only real project evidence and verified biography details.
