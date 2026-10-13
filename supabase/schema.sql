-- Initial relational schema proposal for SammyNex. Review before production.
create extension if not exists pgcrypto;

create type public.app_role as enum ('owner','admin','instructor','student');
create type public.course_status as enum ('draft','published','archived');
create type public.enrollment_status as enum ('pending','active','completed','revoked');
create type public.payment_status as enum ('pending','succeeded','failed','refunded');

create table public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  full_name text not null default '',
  email text not null default '',
  phone text,
  avatar_url text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.user_roles (
  user_id uuid not null references public.profiles(id) on delete cascade,
  role public.app_role not null default 'student',
  granted_by uuid references public.profiles(id),
  created_at timestamptz not null default now(),
  primary key (user_id, role)
);

create table public.courses (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  title text not null,
  summary text not null default '',
  description text not null default '',
  category text not null default 'General',
  level text not null default 'Beginner',
  price_ngn integer not null default 0 check (price_ngn >= 0),
  status public.course_status not null default 'draft',
  lifetime_access boolean not null default true,
  created_by uuid references public.profiles(id),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.course_instructors (
  course_id uuid not null references public.courses(id) on delete cascade,
  instructor_id uuid not null references public.profiles(id) on delete cascade,
  assigned_by uuid references public.profiles(id),
  primary key(course_id, instructor_id)
);

create table public.lessons (
  id uuid primary key default gen_random_uuid(),
  course_id uuid not null references public.courses(id) on delete cascade,
  title text not null,
  body_markdown text not null default '',
  video_url text,
  sort_order integer not null default 0,
  is_preview boolean not null default false,
  created_at timestamptz not null default now()
);

create table public.enrollments (
  id uuid primary key default gen_random_uuid(),
  student_id uuid not null references public.profiles(id) on delete cascade,
  course_id uuid not null references public.courses(id) on delete cascade,
  status public.enrollment_status not null default 'pending',
  enrolled_at timestamptz,
  completed_at timestamptz,
  unique(student_id, course_id)
);

create table public.lesson_progress (
  student_id uuid not null references public.profiles(id) on delete cascade,
  lesson_id uuid not null references public.lessons(id) on delete cascade,
  completed_at timestamptz,
  last_position_seconds integer not null default 0,
  updated_at timestamptz not null default now(),
  primary key(student_id, lesson_id)
);

create table public.payments (
  id uuid primary key default gen_random_uuid(),
  student_id uuid not null references public.profiles(id),
  course_id uuid not null references public.courses(id),
  provider text not null,
  provider_reference text unique not null,
  amount_ngn integer not null check (amount_ngn >= 0),
  status public.payment_status not null default 'pending',
  verified_at timestamptz,
  created_at timestamptz not null default now()
);

create table public.assignments (
  id uuid primary key default gen_random_uuid(),
  course_id uuid not null references public.courses(id) on delete cascade,
  title text not null,
  instructions text not null default '',
  due_at timestamptz,
  max_score numeric not null default 100 check(max_score > 0),
  created_by uuid references public.profiles(id)
);

create table public.submissions (
  id uuid primary key default gen_random_uuid(),
  assignment_id uuid not null references public.assignments(id) on delete cascade,
  student_id uuid not null references public.profiles(id) on delete cascade,
  submission_text text,
  submission_url text,
  file_url text,
  score numeric,
  feedback text,
  submitted_at timestamptz not null default now(),
  graded_at timestamptz,
  graded_by uuid references public.profiles(id)
);

create table public.certificates (
  id uuid primary key default gen_random_uuid(),
  student_id uuid not null references public.profiles(id),
  course_id uuid not null references public.courses(id),
  verification_code text unique not null default encode(gen_random_bytes(12),'hex'),
  issued_at timestamptz not null default now(),
  unique(student_id, course_id)
);

create table public.organizations (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  contact_name text not null default '',
  contact_email text not null default '',
  contact_phone text,
  notes text not null default '',
  created_at timestamptz not null default now()
);

create table public.organization_enrollments (
  organization_id uuid not null references public.organizations(id) on delete cascade,
  student_id uuid not null references public.profiles(id) on delete cascade,
  course_id uuid not null references public.courses(id) on delete cascade,
  assigned_by uuid references public.profiles(id),
  created_at timestamptz not null default now(),
  primary key(organization_id, student_id, course_id)
);

create table public.inquiries (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  phone text,
  inquiry_type text not null,
  message text not null,
  status text not null default 'new',
  follow_up_at timestamptz,
  internal_notes text not null default '',
  created_at timestamptz not null default now()
);

create table public.audit_logs (
  id uuid primary key default gen_random_uuid(),
  actor_id uuid references public.profiles(id),
  action text not null,
  target_type text not null,
  target_id text,
  metadata jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now()
);

-- RLS is intentionally enabled. Add and test precise policies before using live data.
alter table public.profiles enable row level security;
alter table public.user_roles enable row level security;
alter table public.courses enable row level security;
alter table public.course_instructors enable row level security;
alter table public.lessons enable row level security;
alter table public.enrollments enable row level security;
alter table public.lesson_progress enable row level security;
alter table public.payments enable row level security;
alter table public.assignments enable row level security;
alter table public.submissions enable row level security;
alter table public.certificates enable row level security;
alter table public.organizations enable row level security;
alter table public.organization_enrollments enable row level security;
alter table public.inquiries enable row level security;
alter table public.audit_logs enable row level security;

-- Example safe public-read policy for published course metadata only.
create policy "Published courses are public"
on public.courses for select
using (status = 'published');

-- NOTE: Because RLS is enabled and policies are not yet complete, other tables
-- are intentionally inaccessible until their policies are reviewed and added.
-- Do not disable RLS to make the app "work". Build policies per role and test them.
