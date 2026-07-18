-- Site-wide daily quota for the craftmadeby.com contact form (100/day).
-- Apply to the PROD project (madeby / yudqqdnpyguyekqcjvhr).
--
-- The form calls contact_form_ticket() with the public anon key:
--   * p_check_only => true : "is there room today?" (no ticket consumed) —
--     used on page load to show the "come back tomorrow" panel.
--   * p_check_only => false: consume one ticket right before sending.
-- Rows are timestamps only — no message content or PII is stored.

create table if not exists public.contact_submissions (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now()
);

alter table public.contact_submissions enable row level security;
-- No policies on purpose: only the SECURITY DEFINER function below writes.

create or replace function public.contact_form_ticket(p_check_only boolean default false)
returns boolean
language plpgsql
security definer
set search_path to ''
as $$
declare
  used integer;
begin
  select count(*) into used
    from public.contact_submissions
   where created_at >= date_trunc('day', now());
  if used >= 100 then
    return false;
  end if;
  if not p_check_only then
    insert into public.contact_submissions default values;
  end if;
  return true;
end;
$$;

revoke execute on function public.contact_form_ticket(boolean) from public;
grant execute on function public.contact_form_ticket(boolean) to anon, authenticated;
