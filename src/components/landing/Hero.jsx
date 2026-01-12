/**
 * [INPUT]: 依赖 framer-motion 的 motion，依赖 lib/motion 的 variants，依赖 shadcn/ui 的 Button/Badge
 * [OUTPUT]: 对外提供 Hero Section 组件（首屏英雄区）
 * [POS]: components/landing/ 的首屏组件，被 LandingPage 消费
 * [PROTOCOL]: 变更时更新此头部，然后检查 CLAUDE.md
 */

import { motion } from 'framer-motion'
import { ArrowRight, Camera, Sparkles } from 'lucide-react'
import { Button, Badge } from '@/components/ui'
import { fadeInUp, staggerContainer, floatAnimation } from '@/lib/motion'

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      </div>

      {/* Content */}
      <div className="container px-4 py-20 md:py-32">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="mx-auto max-w-5xl text-center"
        >
          {/* Badge */}
          <motion.div variants={fadeInUp} className="inline-flex mb-8">
            <Badge className="px-4 py-2 text-sm">
              <Sparkles className="mr-2 h-4 w-4" />
              全球美食家的美食护照
            </Badge>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={fadeInUp}
            className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6"
          >
            搅拌您的
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              美食回忆
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={fadeInUp}
            className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-3xl mx-auto"
          >
            解锁全球菜系。拍照识别菜品，AI 自动分析营养成分。
            <span className="block mt-2 font-medium text-foreground">让每一口都有意义。</span>
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
            <Button size="lg" className="group">
              <Camera className="mr-2 h-5 w-5" />
              开始记录
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button size="lg" variant="outline">
              查看演示
            </Button>
          </motion.div>

          {/* Social Proof */}
          <motion.div
            variants={fadeInUp}
            className="flex items-center justify-center gap-2 text-sm text-muted-foreground"
          >
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="h-8 w-8 rounded-full bg-gradient-to-br from-primary to-primary/60 border-2 border-background flex items-center justify-center text-xs font-medium text-primary-foreground"
                >
                  {i}
                </div>
              ))}
            </div>
            <span>已有 10,000+ 美食家加入</span>
          </motion.div>
        </motion.div>

        {/* Hero Visual */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="mt-16 relative"
        >
          <div className="relative mx-auto max-w-4xl">
            {/* Mock Phone Frame */}
            <div className="relative mx-auto rounded-3xl bg-gradient-to-b from-muted to-muted/50 p-8 shadow-2xl">
              <div className="aspect-[9/16] rounded-2xl bg-gradient-to-br from-primary/20 via-background to-primary/10 border overflow-hidden">
                {/* App Preview Content */}
                <div className="p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="h-8 w-32 rounded-lg bg-primary/20" />
                    <div className="h-8 w-8 rounded-full bg-primary/20" />
                  </div>
                  <div className="aspect-video rounded-xl bg-gradient-to-br from-primary/10 to-primary/5" />
                  <div className="space-y-2">
                    <div className="h-4 w-full rounded bg-muted/50" />
                    <div className="h-4 w-3/4 rounded bg-muted/50" />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="aspect-square rounded-lg bg-primary/10" />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <motion.div
              {...floatAnimation}
              className="absolute -top-6 -left-6 rounded-2xl bg-background border p-4 shadow-lg"
            >
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-green-400 to-green-600" />
                <div>
                  <div className="text-sm font-medium">营养分析完成</div>
                  <div className="text-xs text-muted-foreground">卡路里: 320</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              {...floatAnimation}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -bottom-4 -right-4 rounded-2xl bg-background border p-4 shadow-lg"
            >
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-orange-400 to-orange-600" />
                <div>
                  <div className="text-sm font-medium">新菜品已识别</div>
                  <div className="text-xs text-muted-foreground">宫保鸡丁</div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
