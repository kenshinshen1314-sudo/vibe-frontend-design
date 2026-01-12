/**
 * [INPUT]: 依赖 lib/supabase 的 supabase 客户端
 * [OUTPUT]: 对外提供认证相关函数（Google 登录、登出、获取当前用户）
 * [POS]: lib/ 的认证工具模块，被全项目消费
 * [PROTOCOL]: 变更时更新此头部，然后检查 CLAUDE.md
 */

import { supabase } from './supabase'

/**
 * Google OAuth 登录
 * @returns {Promise<{data: any, error: any}>}
 */
export const signInWithGoogle = async () => {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'google',
    options: {
      redirectTo: `${window.location.origin}/`
    }
  })

  if (error) {
    console.error('登录失败:', error.message)
  }

  return { data, error }
}

/**
 * 登出
 * @returns {Promise<{error: any}>}
 */
export const signOut = async () => {
  const { error } = await supabase.auth.signOut()

  if (error) {
    console.error('登出失败:', error.message)
  }

  return { error }
}

/**
 * 获取当前登录用户
 * @returns {Promise<any>}
 */
export const getCurrentUser = async () => {
  const { data: { user } } = await supabase.auth.getUser()
  return user
}
