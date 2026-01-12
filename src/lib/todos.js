/**
 * [INPUT]: 依赖 lib/supabase 的 supabase 客户端
 * [OUTPUT]: 对外提供 todos 表的 CRUD 操作（getTodos/addTodo/toggleTodo/deleteTodo）
 * [POS]: lib/ 的 todos 数据库操作模块，被全项目消费
 * [PROTOCOL]: 变更时更新此头部，然后检查 CLAUDE.md
 */

import { supabase } from './supabase'

/**
 * 获取当前用户的所有 todos
 * @returns {Promise<Array>}
 */
export const getTodos = async () => {
  const { data, error } = await supabase
    .from('todos')
    .select('*')
    .order('created_at', { ascending: false })

  if (error) throw error
  return data
}

/**
 * 添加新的 todo
 * @param {string} title - Todo 标题
 * @returns {Promise<Object>}
 */
export const addTodo = async (title) => {
  const { data: { user } } = await supabase.auth.getUser()

  const { data, error } = await supabase
    .from('todos')
    .insert({ title, user_id: user.id })
    .select()
    .single()

  if (error) throw error
  return data
}

/**
 * 切换 todo 完成状态
 * @param {string} id - Todo ID
 * @param {boolean} completed - 完成状态
 * @returns {Promise<void>}
 */
export const toggleTodo = async (id, completed) => {
  const { error } = await supabase
    .from('todos')
    .update({ completed })
    .eq('id', id)

  if (error) throw error
}

/**
 * 删除 todo
 * @param {string} id - Todo ID
 * @returns {Promise<void>}
 */
export const deleteTodo = async (id) => {
  const { error } = await supabase
    .from('todos')
    .delete()
    .eq('id', id)

  if (error) throw error
}
