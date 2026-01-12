/**
 * [INPUT]: 依赖 components/layout 的 Header/Footer，依赖 framer-motion 的 motion，依赖 lib/motion 的 staggerContainer/staggerItem
 * [OUTPUT]: 对外提供 About 关于页面，带 Apple 级进场动画
 * [POS]: pages/ 的关于页面，被 react-router 消费
 * [PROTOCOL]: 变更时更新此头部，然后检查 CLAUDE.md
 */

import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui'
import { motion } from 'framer-motion'
import { staggerContainer, staggerItem } from '@/lib/motion'

export function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 container px-4 py-12">
        <motion.div
          className="max-w-4xl mx-auto"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <motion.h1 variants={staggerItem} className="text-4xl font-bold mb-8">
            关于 Bellybook
          </motion.h1>

          <motion.div variants={staggerItem}>
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>项目简介</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Bellybook 是一个基于现代化技术栈构建的前端应用模板。
                  采用 React 19、Vite 6、TailwindCSS 4 和 shadcn/ui 构建，
                  提供完整的设计系统和微拟物视觉风格。
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={staggerItem}>
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>技术栈</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• React 19.1.0 - 并发渲染、Actions、useOptimistic</li>
                  <li>• Vite 6.2.3 - ESM、HMR、原生 ESM 构建</li>
                  <li>• TailwindCSS 4.0.0 - CSS 变量、amethyst-haze 主题</li>
                  <li>• shadcn/ui - 30+ 基于 Radix UI 的组件</li>
                  <li>• framer-motion 11.15.0 - Apple 级 Spring 动画</li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={staggerItem}>
            <Card>
              <CardHeader>
                <CardTitle>设计理念</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• 一切设计来自设计系统 - CSS 变量 + shadcn/ui 组件</li>
                  <li>• 微拟物光影质感 - 渐变背景 + 立体阴影 + 微交互</li>
                  <li>• Apple Spring 动效 - Spring 物理引擎优先，自然优雅</li>
                  <li>• 样式零自由度 - Tailwind 约束一切，禁止硬编码颜色</li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </main>

      <Footer />
    </div>
  )
}
