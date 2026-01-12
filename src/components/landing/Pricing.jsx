/**
 * [INPUT]: 依赖 framer-motion 的 motion，依赖 lib/motion 的 variants，依赖 shadcn/ui 的 Card/Button/Badge/Check
 * [OUTPUT]: 对外提供 Pricing 定价组件
 * [POS]: components/landing/ 的定价组件，被 LandingPage 消费
 * [PROTOCOL]: 变更时更新此头部，然后检查 CLAUDE.md
 */

import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { Card, Button, Badge } from '@/components/ui'
import { fadeInUp, staggerContainer } from '@/lib/motion'

const plans = [
  {
    name: '月度会员',
    price: '$9',
    period: '/月',
    description: '适合刚开始尝试的用户',
    features: [
      '无限拍照识别',
      'AI 营养分析',
      '美食地图记录',
      '基础数据统计',
    ],
    cta: '开始使用',
    highlighted: false,
  },
  {
    name: '年度会员',
    price: '$99',
    period: '/年',
    description: '最受欢迎的选择，省 17%',
    features: [
      '无限拍照识别',
      'AI 营养分析',
      '美食地图记录',
      '高级数据统计',
      '营养趋势报告',
      '优先客服支持',
    ],
    cta: '开始使用',
    highlighted: true,
  },
  {
    name: '终身会员',
    price: '$999',
    period: '一次付款',
    description: '终身享受所有功能',
    features: [
      '所有月度/年度功能',
      '终身免费更新',
      '专属客服通道',
      '早期功能体验',
      '社区徽章',
      '数据导出功能',
    ],
    cta: '立即购买',
    highlighted: false,
  },
]

export function Pricing() {
  return (
    <section className="py-20 md:py-28 lg:py-32 bg-muted/30">
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
              简单透明的定价
            </h2>
            <p className="text-xl text-muted-foreground">
              选择最适合您的方案，随时可以取消
            </p>
          </motion.div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                custom={index}
                className={plan.highlighted ? 'md:-mt-4 md:mb-4' : ''}
              >
                <Card
                  className={`h-full p-8 relative ${
                    plan.highlighted
                      ? 'ring-2 ring-primary shadow-xl scale-105'
                      : ''
                  }`}
                >
                  {/* Popular Badge */}
                  {plan.highlighted && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <Badge className="px-4 py-1">最受欢迎</Badge>
                    </div>
                  )}

                  {/* Plan Name */}
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-muted-foreground mb-6">{plan.description}</p>

                  {/* Price */}
                  <div className="mb-6">
                    <div className="flex items-baseline gap-1">
                      <span className="text-5xl font-bold">{plan.price}</span>
                      <span className="text-xl text-muted-foreground">
                        {plan.period}
                      </span>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <Button
                    className="w-full mb-8"
                    variant={plan.highlighted ? 'default' : 'outline'}
                    size="lg"
                  >
                    {plan.cta}
                  </Button>

                  {/* Features */}
                  <ul className="space-y-4">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
