/**
 * [INPUT]: 依赖 shadcn/ui 的 Button/DropdownMenu 组件，依赖 lucide-react 的 User/LogOut 图标，依赖 lib/auth 的 signOut，依赖 contexts/AuthContext 的 useAuth
 * [OUTPUT]: 对外提供 UserMenu 用户菜单组件
 * [POS]: components/auth/ 的用户菜单模块，被 Header 消费
 * [PROTOCOL]: 变更时更新此头部，然后检查 CLAUDE.md
 */

import { useState } from 'react'
import { Button } from '@/components/ui'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui'
import { User, LogOut } from 'lucide-react'
import { signOut } from '@/lib/auth'
import { useAuth } from '@/contexts/AuthContext'

export function UserMenu() {
  const { user } = useAuth()
  const [isLoading, setIsLoading] = useState(false)

  const handleSignOut = async () => {
    setIsLoading(true)
    const { error } = await signOut()
    setIsLoading(false)

    if (error) {
      console.error('登出失败:', error)
    }
  }

  const userName = user?.user_metadata?.name || user?.user_metadata?.full_name || '用户'
  const userInitial = userName?.[0]?.toUpperCase() || 'U'

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative h-10 w-10 rounded-full">
          <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center font-semibold text-primary">
            {userInitial}
          </div>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <div className="flex flex-col space-y-1.5 p-2">
          <p className="text-sm font-medium leading-none">{userName}</p>
          <p className="text-xs leading-none text-muted-foreground">
            {user?.email}
          </p>
        </div>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={handleSignOut} disabled={isLoading}>
          <LogOut className="mr-2 h-4 w-4" />
          <span>{isLoading ? '登出中...' : '登出'}</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
