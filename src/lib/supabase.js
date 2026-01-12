/**
 * [INPUT]: 依赖 @supabase/supabase-js 的 createClient，依赖环境变量 VITE_SUPABASE_URL/VITE_SUPABASE_ANON_KEY
 * [OUTPUT]: 对外提供 supabase 客户端实例（数据库、认证、存储）
 * [POS]: lib/ 的 Supabase 客户端模块，被全项目消费
 * [PROTOCOL]: 变更时更新此头部，然后检查 CLAUDE.md
 */

import { createClient } from '@supabase/supabase-js'

export const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
)
