/**
 * [INPUT]: 依赖 framer-motion 的 motion，依赖 lib/motion 的 variants，依赖 shadcn/ui 的 Button
 * [OUTPUT]: 对外提供 FinalCTA 最终行动召唤组件
 * [POS]: components/landing/ 的 CTA 组件，被 LandingPage 消费
 * [PROTOCOL]: 变更时更新此头部，然后检查 CLAUDE.md
 */

import { motion } from 'framer-motion'
import { ArrowRight, Camera } from 'lucide-react'
import { Button } from '@/components/ui'
import { fadeInUp, staggerContainer } from '@/lib/motion'

export function FinalCTA() {
  return (
    <section className="relative py-20 md:py-28 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/80 to-primary/60" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:24px_24px]" />

      {/* Content */}
      <div className="container px-4 relative">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="mx-auto max-w-4xl text-center text-primary-foreground"
        >
          {/* Headline */}
          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          >
            准备好开启美食之旅了吗？
          </motion.h2>

          {/* Subheadline */}
          <motion.p
            variants={fadeInUp}
            className="text-xl md:text-2xl mb-10 text-primary-foreground/90 max-w-2xl mx-auto"
          >
            加入 10,000+ 美食家，用 Bellybook 记录每一道美味
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button
              size="xl"
              className="bg-background text-foreground hover:bg-background/90 group"
            >
              <Camera className="mr-2 h-5 w-5" />
              免费开始使用
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              size="xl"
              variant="outline"
              className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10"
            >
              查看演示视频
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
