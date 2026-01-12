/**
 * [INPUT]: 依赖 framer-motion 的 motion，依赖 lib/motion 的 variants，依赖 shadcn/ui 的 Card
 * [OUTPUT]: 对外提供 FeaturesSection 功能组件
 * [POS]: components/landing/ 的功能展示组件，被 LandingPage 消费
 * [PROTOCOL]: 变更时更新此头部，然后检查 CLAUDE.md
 */

import { motion } from 'framer-motion'
import { Camera, Brain, Map, TrendingUp, Users, Zap } from 'lucide-react'
import { Card } from '@/components/ui'
import { fadeInUp, staggerContainer } from '@/lib/motion'

const features = [
  {
    icon: Camera,
    title: '拍照识别',
    description: '一键拍摄菜品，AI 自动识别菜名、食材、烹饪方式',
    color: 'from-blue-400 to-blue-600',
  },
  {
    icon: Brain,
    title: 'AI 营养分析',
    description: '自动计算卡路里、蛋白质、维生素等营养成分',
    color: 'from-purple-400 to-purple-600',
  },
  {
    icon: Map,
    title: '美食地图',
    description: '自动标注餐厅位置，形成个人专属美食探索地图',
    color: 'from-green-400 to-green-600',
  },
  {
    icon: TrendingUp,
    title: '营养趋势',
    description: '追踪长期饮食习惯，可视化展示营养摄入趋势',
    color: 'from-orange-400 to-orange-600',
  },
  {
    icon: Users,
    title: '美食社区',
    description: '分享美食发现，与全球美食家交流经验',
    color: 'from-pink-400 to-pink-600',
  },
  {
    icon: Zap,
    title: '智能推荐',
    description: '基于口味偏好和营养需求，推荐适合的菜品',
    color: 'from-yellow-400 to-yellow-600',
  },
]

export function FeaturesSection() {
  return (
    <section className="py-20 md:py-28 lg:py-32">
      <div className="container px-4">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="mx-auto max-w-6xl"
        >
          {/* Header */}
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              让每一口都有意义
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              强大的功能，记录您的美食旅程
            </p>
          </motion.div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                custom={index}
              >
                <Card className="h-full p-6 hover:shadow-lg transition-shadow">
                  <div className={`h-14 w-14 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4`}>
                    <feature.icon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
