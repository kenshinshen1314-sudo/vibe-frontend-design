/**
 * [INPUT]: 依赖 framer-motion 的 motion，依赖 shadcn/ui 的 Button
 * [OUTPUT]: 对外提供 Hero 首屏展示组件
 * [POS]: components/layout/ 的首屏英雄区，被 Home 页面消费
 * [PROTOCOL]: 变更时更新此头部，然后检查 CLAUDE.md
 */

import { motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-primary/5 via-background to-background">
      <div className="container px-4 py-24 md:py-32">
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1.5 text-sm text-primary mb-8"
          >
            <Sparkles className="mr-2 h-4 w-4" />
            设计系统驱动 · 组件优先
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl font-bold tracking-tight sm:text-6xl md:text-7xl mb-6"
          >
            用设计系统构建
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              下一代 Web 应用
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mx-auto max-w-2xl text-lg text-muted-foreground mb-10"
          >
            基于 React 19 + Vite 6 + TailwindCSS 4 + shadcn/ui 构建的现代化前端模板。
            一切设计来自设计系统，一切组件可复用可组合。
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button size="lg" className="group">
              开始使用
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="/design-system">查看设计系统</a>
            </Button>
          </motion.div>

          {/* Tech Stack */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-16 pt-16 border-t"
          >
            <p className="text-sm text-muted-foreground mb-4">技术栈</p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              {['React 19', 'Vite 6', 'TailwindCSS 4', 'shadcn/ui', 'Framer Motion'].map((tech) => (
                <span
                  key={tech}
                  className="inline-flex items-center rounded-md bg-muted px-3 py-1 text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10 opacity-30">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      </div>
    </section>
  )
}
