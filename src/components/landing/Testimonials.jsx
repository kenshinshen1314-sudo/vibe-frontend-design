/**
 * [INPUT]: 依赖 framer-motion 的 motion，依赖 lib/motion 的 variants，依赖 shadcn/ui 的 Card/Avatar
 * [OUTPUT]: 对外提供 Testimonials 用户评价组件
 * [POS]: components/landing/ 的评价组件，被 LandingPage 消费
 * [PROTOCOL]: 变更时更新此头部，然后检查 CLAUDE.md
 */

import { motion } from 'framer-motion'
import { Star } from 'lucide-react'
import { Card, Avatar, AvatarFallback } from '@/components/ui'
import { fadeInUp, staggerContainer } from '@/lib/motion'

const testimonials = [
  {
    quote: '终于找到了能帮我记录每餐营养的工具！现在我知道自己每天摄入多少卡路里了。',
    author: '王小美',
    role: '健身教练',
    company: 'FitLife 健身',
    initials: '王',
  },
  {
    quote: '作为美食博主，这个应用帮我整理了所有探店记录。AI 识别太准了，强烈推荐！',
    author: '李大厨',
    role: '美食博主',
    company: '3M+ 粉丝',
    initials: '李',
  },
  {
    quote: '出国旅行时用它记录当地美食，回家后还能根据地图复刻那些美好回忆。',
    author: '张旅行',
    role: '旅行达人',
    company: '环球探索者',
    initials: '张',
  },
]

export function Testimonials() {
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
              美食家们的真实评价
            </h2>
            <p className="text-xl text-muted-foreground">
              加入 10,000+ 满意用户的行列
            </p>
          </motion.div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                custom={index}
              >
                <Card className="h-full p-6 flex flex-col">
                  {/* Stars */}
                  <div className="flex mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className="h-5 w-5 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-foreground mb-6 flex-1">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarFallback className="bg-gradient-to-br from-primary to-primary/60 text-primary-foreground">
                        {testimonial.initials}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-semibold">{testimonial.author}</div>
                      <div className="text-sm text-muted-foreground">
                        {testimonial.role} · {testimonial.company}
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
