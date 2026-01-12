/**
 * [INPUT]: 依赖 react-router-dom 的 Link，依赖 lucide-react 的社媒图标
 * [OUTPUT]: 对外提供 Footer 底部组件
 * [POS]: components/layout/ 的底部页脚，被 App/Router 消费
 * [PROTOCOL]: 变更时更新此头部，然后检查 CLAUDE.md
 */

import { Link } from 'react-router-dom'
import { Github, X, MessageSquare } from 'lucide-react'

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-lg bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">
                B
              </div>
              <span className="font-bold text-xl">Bellybook</span>
            </div>
            <p className="text-sm text-muted-foreground">
              设计系统驱动的现代化前端应用模板。
            </p>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-semibold mb-4">产品</h3>
            <ul className="space-y-3 text-sm">
              <li><Link to="/features" className="text-muted-foreground hover:text-foreground transition-colors">功能特性</Link></li>
              <li><Link to="/pricing" className="text-muted-foreground hover:text-foreground transition-colors">价格</Link></li>
              <li><Link to="/changelog" className="text-muted-foreground hover:text-foreground transition-colors">更新日志</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold mb-4">资源</h3>
            <ul className="space-y-3 text-sm">
              <li><Link to="/docs" className="text-muted-foreground hover:text-foreground transition-colors">文档</Link></li>
              <li><Link to="/design-system" className="text-muted-foreground hover:text-foreground transition-colors">设计系统</Link></li>
              <li><Link to="/blog" className="text-muted-foreground hover:text-foreground transition-colors">博客</Link></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-semibold mb-4">关注我们</h3>
            <div className="flex space-x-4">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                <X className="h-5 w-5" />
              </a>
              <a href="https://discord.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                <MessageSquare className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Bellybook. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
