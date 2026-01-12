/**
 * [INPUT]: 依赖 framer-motion 的 motion，依赖 lib/motion 的 variants，依赖 shadcn/ui 的 Card
 * [OUTPUT]: 对外提供 HowItWorks 步骤组件
 * [POS]: components/landing/ 的步骤展示组件，被 LandingPage 消费
 * [PROTOCOL]: 变更时更新此头部，然后检查 CLAUDE.md
 */

import { motion } from 'framer-motion'
import { Camera, Brain, MapPin } from 'lucide-react'
import { Card } from '@/components/ui'
import { fadeInUp, staggerContainer } from '@/lib/motion'

const steps = [
  {
    number: 1,
    icon: Camera,
    title: '拍摄美食',
    description: '打开应用，对准菜肴拍照，系统自动捕获图像',
  },
  {
    number: 2,
    icon: Brain,
    title: 'AI 识别分析',
    description: 'AI 自动识别菜名、食材，计算营养成分',
  },
  {
    number: 3,
    icon: MapPin,
    title: '保存到地图',
    description: '自动保存餐厅位置，构建个人美食地图',
  },
]

export function HowItWorks() {
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
              简单三步，开启美食之旅
            </h2>
            <p className="text-xl text-muted-foreground">
              无需复杂操作，拍照即可记录
            </p>
          </motion.div>

          {/* Steps */}
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                custom={index}
                className="relative"
              >
                {/* Step Number Badge */}
                <div className="absolute -top-4 -left-4 h-12 w-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold shadow-lg">
                  {step.number}
                </div>

                {/* Connector Line (not on last item) */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 -right-4 w-8 h-0.5 bg-gradient-to-r from-primary to-transparent" />
                )}

                <Card className="h-full p-6 pt-8">
                  <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center mb-4 mx-auto">
                    <step.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-center mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-center">{step.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
