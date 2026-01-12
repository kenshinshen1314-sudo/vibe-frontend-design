-- ========================================
-- 创建 todos 表
-- ========================================

-- 创建 todos 表
create table public.todos (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references auth.users(id) on delete cascade,
  title text not null,
  completed boolean default false,
  created_at timestamptz default now()
);

-- 启用 RLS
alter table public.todos enable row level security;

-- 用户只能查看自己的 todos
create policy "用户查看自己的 todos"
  on public.todos for select
  using (auth.uid() = user_id);

-- 用户只能插入自己的 todos
create policy "用户插入自己的 todos"
  on public.todos for insert
  with check (auth.uid() = user_id);

-- 用户只能更新自己的 todos
create policy "用户更新自己的 todos"
  on public.todos for update
  using (auth.uid() = user_id);

-- 用户只能删除自己的 todos
create policy "用户删除自己的 todos"
  on public.todos for delete
  using (auth.uid() = user_id);
