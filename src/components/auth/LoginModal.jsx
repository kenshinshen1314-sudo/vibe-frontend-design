/**
 * [INPUT]: 依赖 shadcn/ui 的 Dialog/Button 组件，依赖 lucide-react 的 X 图标，依赖 lib/auth 的 signInWithGoogle，依赖 contexts/AuthContext 的 useAuth
 * [OUTPUT]: 对外提供 LoginModal 登录弹窗组件
 * [POS]: components/auth/ 的登录弹窗模块，被 Header 消费
 * [PROTOCOL]: 变更时更新此头部，然后检查 CLAUDE.md
 */

import { useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui'
import { Button } from '@/components/ui'
import { X } from 'lucide-react'
import { signInWithGoogle } from '@/lib/auth'
import { useAuth } from '@/contexts/AuthContext'

export function LoginModal({ open, onOpenChange }) {
  const { user } = useAuth()
  const [isLoading, setIsLoading] = useState(false)

  const handleGoogleLogin = async () => {
    setIsLoading(true)
    const { error } = await signInWithGoogle()
    setIsLoading(false)

    if (error) {
      console.error('Google 登录失败:', error)
    } else {
      // 登录成功，关闭 Modal
      onOpenChange(false)
    }
  }

  // 如果已登录，显示用户信息
  if (user) {
    return (
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>欢迎回来</DialogTitle>
            <DialogDescription>
              您已成功登录
            </DialogDescription>
          </DialogHeader>
          <div className="flex flex-col items-center gap-4 py-4">
            <div className="h-20 w-20 rounded-full bg-primary/10 flex items-center justify-center">
              <span className="text-3xl font-bold text-primary">
                {user.user_metadata?.name?.[0]?.toUpperCase() || 'U'}
              </span>
            </div>
            <div className="text-center">
              <p className="font-semibold text-lg">
                {user.user_metadata?.name || user.user_metadata?.full_name || '用户'}
              </p>
              <p className="text-sm text-muted-foreground">
                {user.email}
              </p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    )
  }

  // 未登录，显示登录选项
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>登录 Bellybook</DialogTitle>
          <DialogDescription>
            选择一种方式登录，开始您的美食之旅
          </DialogDescription>
        </DialogHeader>

        <div className="flex flex-col gap-4 py-4">
          {/* Google 登录按钮 */}
          <Button
            variant="outline"
            className="w-full relative"
            onClick={handleGoogleLogin}
            disabled={isLoading}
          >
            {isLoading ? (
              <span>登录中...</span>
            ) : (
              <>
                <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24">
                  <path
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    fill="#4285F4"
                  />
                  <path
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    fill="#34A853"
                  />
                  <path
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    fill="#EA4335"
                  />
                </svg>
                使用 Google 继续
              </>
            )}
          </Button>

          {/* 其他登录方式（占位） */}
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">
                或
              </span>
            </div>
          </div>

          <p className="text-xs text-center text-muted-foreground">
            登录即表示您同意我们的服务条款和隐私政策
          </p>
        </div>
      </DialogContent>
    </Dialog>
  )
}
