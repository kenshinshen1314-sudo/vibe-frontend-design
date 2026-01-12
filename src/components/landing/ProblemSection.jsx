/**
 * [INPUT]: 依赖 framer-motion 的 motion，依赖 lib/motion 的 variants，依赖 shadcn/ui 的 Card
 * [OUTPUT]: 对外提供 ProblemSection 痛点组件
 * [POS]: components/landing/ 的痛点组件，被 LandingPage 消费
 * [PROTOCOL]: 变更时更新此头部，然后检查 CLAUDE.md
 */

import { motion } from 'framer-motion'
import { X, AlertCircle } from 'lucide-react'
import { Card } from '@/components/ui'
import { fadeInUp, staggerContainer } from '@/lib/motion'

const painPoints = [
  {
    icon: X,
    title: '忘记吃过什么',
    description: '每周都在思考"今天/这周吃什么"，却回忆不起上周的美食体验',
  },
  {
    icon: AlertCircle,
    title: '营养不均衡',
    description: '不知道每顿饭的营养成分，卡路里、蛋白质、维生素摄入全靠猜',
  },
  {
    icon: X,
    title: '美食地图空白',
    description: '去过那么多餐厅，却无法形成个人美食地图，难以复刻美好体验',
  },
]

export function ProblemSection() {
  return (
    <section className="py-20 md:py-28 lg:py-32 bg-muted/30">
      <div className="container px-4">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="mx-auto max-w-5xl"
        >
          {/* Header */}
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              还在为这些烦恼困扰？
            </h2>
            <p className="text-xl text-muted-foreground">
              每个美食家都遇到的痛点
            </p>
          </motion.div>

          {/* Pain Points Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {painPoints.map((point, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                custom={index}
              >
                <Card className="h-full p-6 border-destructive/20 hover:border-destructive/40 transition-colors">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-12 w-12 rounded-full bg-destructive/10 flex items-center justify-center">
                      <point.icon className="h-6 w-6 text-destructive" />
                    </div>
                    <h3 className="text-xl font-semibold">{point.title}</h3>
                  </div>
                  <p className="text-muted-foreground">{point.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
