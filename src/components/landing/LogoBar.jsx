/**
 * [INPUT]: 依赖 framer-motion 的 motion，依赖 lib/motion 的 variants
 * [OUTPUT]: 对外提供 LogoBar 信任背书组件
 * [POS]: components/landing/ 的社会证明组件，被 LandingPage 消费
 * [PROTOCOL]: 变更时更新此头部，然后检查 CLAUDE.md
 */

import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '@/lib/motion'

const platforms = [
  { name: 'App Store', icon: '🍎' },
  { name: 'Google Play', icon: '🤖' },
  { name: 'Product Hunt', icon: '🚀' },
  { name: 'TechCrunch', icon: '💻' },
  { name: 'WIRED', icon: '📰' },
]

export function LogoBar() {
  return (
    <section className="border-y bg-muted/30">
      <div className="container px-4 py-12">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="text-center"
        >
          <motion.p
            variants={fadeInUp}
            className="text-sm font-medium text-muted-foreground mb-8"
          >
            被全球美食家信赖
          </motion.p>

          <motion.div
            variants={staggerContainer}
            className="flex flex-wrap items-center justify-center gap-8 md:gap-12"
          >
            {platforms.map((platform, index) => (
              <motion.div
                key={platform.name}
                variants={fadeInUp}
                className="flex items-center gap-2 text-xl font-semibold text-muted-foreground opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
              >
                <span className="text-2xl">{platform.icon}</span>
                <span>{platform.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
