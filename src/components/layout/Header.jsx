/**
 * [INPUT]: 依赖 react-router-dom 的 Link，依赖 lucide-react 的 Menu/LogIn 图标，依赖 shadcn/ui 的 Button，依赖 contexts/AuthContext 的 useAuth，依赖 auth/LoginModal 和 auth/UserMenu
 * [OUTPUT]: 对外提供 Header 布局组件，包含登录按钮和用户菜单
 * [POS]: components/layout/ 的顶部导航栏，被 App/Router 消费
 * [PROTOCOL]: 变更时更新此头部，然后检查 CLAUDE.md
 */

import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, LogIn } from 'lucide-react'
import { Button } from '@/components/ui'
import { useAuth } from '@/contexts/AuthContext'
import { LoginModal } from '@/components/auth/LoginModal'
import { UserMenu } from '@/components/auth/UserMenu'

export function Header() {
  const { user, loading } = useAuth()
  const [loginModalOpen, setLoginModalOpen] = useState(false)

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-lg bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">
              B
            </div>
            <span className="font-bold text-xl">Bellybook</span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-sm font-medium transition-colors hover:text-primary">
              首页
            </Link>
            <Link to="/design-system" className="text-sm font-medium transition-colors hover:text-primary">
              设计系统
            </Link>
            <Link to="/about" className="text-sm font-medium transition-colors hover:text-primary">
              关于
            </Link>
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            {!loading && (
              <>
                {user ? (
                  <UserMenu />
                ) : (
                  <Button
                    variant="default"
                    size="sm"
                    className="hidden md:inline-flex"
                    onClick={() => setLoginModalOpen(true)}
                  >
                    <LogIn className="mr-2 h-4 w-4" />
                    登录
                  </Button>
                )}
              </>
            )}
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </header>

      {/* Login Modal */}
      <LoginModal open={loginModalOpen} onOpenChange={setLoginModalOpen} />
    </>
  )
}
