/**
 * [INPUT]: 依赖 components/layout 的 Header/Hero/Footer，依赖 framer-motion 的 motion，依赖 lib/motion 的 fadeInUp/staggerContainer/staggerItem
 * [OUTPUT]: 对外提供 Home 首页组件，带 Apple 级进场动画
 * [POS]: pages/ 的首页，被 react-router 消费
 * [PROTOCOL]: 变更时更新此头部，然后检查 CLAUDE.md
 */

import { Header } from '@/components/layout/Header'
import { Hero } from '@/components/layout/Hero'
import { Footer } from '@/components/layout/Footer'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { motion } from 'framer-motion'
import { staggerContainer, staggerItem } from '@/lib/motion'

export function Home() {
  const features = [
    {
      title: '设计系统驱动',
      description: '一切颜色和组件来自设计系统，确保视觉一致性',
    },
    {
      title: '组件优先',
      description: '基于 shadcn/ui 的可复用组件，快速构建 UI',
    },
    {
      title: '现代化技术栈',
      description: 'React 19 + Vite 6 + TailwindCSS 4 + Framer Motion',
    },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Hero />

      {/* Features Section */}
      <section className="container px-4 py-24">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <motion.div variants={staggerItem} className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">为什么选择 Bellybook</h2>
            <p className="text-lg text-muted-foreground">
              设计系统驱动的现代化前端开发体验
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
                custom={index}
              >
                <Card className="border-primary/20 hover:border-primary/50 transition-colors h-full">
                  <CardHeader>
                    <CardTitle>{feature.title}</CardTitle>
                    <CardDescription>{feature.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      利用设计系统的颜色变量和 shadcn/ui 组件库，快速构建一致的 UI。
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <Footer />
    </div>
  )
}
