create table if not exists public.portfolio_visitors (
  visitor_id uuid primary key,
  first_seen timestamptz not null default now(),
  last_seen timestamptz not null default now(),
  last_visit_date date not null default current_date
);

alter table public.portfolio_visitors enable row level security;

revoke all on table public.portfolio_visitors from anon, authenticated;

create or replace function public.record_portfolio_visit(visitor_id uuid)
returns table (
  total_visitors bigint,
  today_visitors bigint,
  live_visitors bigint
)
language plpgsql
security definer
set search_path = public
as $$
begin
  if visitor_id is null then
    raise exception 'visitor_id is required';
  end if;

  insert into public.portfolio_visitors (
    visitor_id,
    first_seen,
    last_seen,
    last_visit_date
  )
  values (
    visitor_id,
    now(),
    now(),
    current_date
  )
  on conflict (visitor_id) do update
    set last_seen = now(),
        last_visit_date = case
          when portfolio_visitors.last_visit_date < current_date
            then current_date
          else portfolio_visitors.last_visit_date
        end;

  return query
  select
    (select count(*) from public.portfolio_visitors),
    (select count(*)
       from public.portfolio_visitors
      where last_visit_date = current_date),
    (select count(*)
       from public.portfolio_visitors
      where last_seen >= now() - interval '5 minutes');
end;
$$;

revoke all on function public.record_portfolio_visit(uuid) from public;
grant execute on function public.record_portfolio_visit(uuid) to anon, authenticated;
