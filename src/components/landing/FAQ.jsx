/**
 * [INPUT]: 依赖 framer-motion 的 motion，依赖 lib/motion 的 variants，依赖 shadcn/ui 的 Accordion
 * [OUTPUT]: 对外提供 FAQ 常见问题组件
 * [POS]: components/landing/ 的 FAQ 组件，被 LandingPage 消费
 * [PROTOCOL]: 变更时更新此头部，然后检查 CLAUDE.md
 */

import { motion } from 'framer-motion'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui'
import { fadeInUp, staggerContainer } from '@/lib/motion'

const faqs = [
  {
    question: 'Bellybook 支持哪些语言？',
    answer: '目前支持中文、英文、日文三种语言的菜品识别。我们正在持续添加更多语言支持，敬请期待。',
  },
  {
    question: 'AI 识别的准确率有多高？',
    answer: '在我们的测试中，AI 识别常见菜品的准确率超过 95%。对于特色菜品或罕见菜系，准确率可能会有所降低，但我们会持续优化算法。',
  },
  {
    question: '我的数据会被用于训练 AI 吗？',
    answer: '不会。您的所有数据都经过加密存储，仅在您的设备上处理。我们严格遵守隐私保护法规，绝不会将您的数据用于训练或商业用途。',
  },
  {
    question: '可以离线使用吗？',
    answer: '基础拍照和记录功能可以离线使用，但 AI 识别和云端同步需要网络连接。我们正在开发离线识别功能，预计下个版本推出。',
  },
  {
    question: '如何取消订阅？',
    answer: '您可以随时在 App Store 或 Google Play 的订阅管理中取消订阅。取消后，您仍可使用当前付费周期结束前的所有功能。',
  },
  {
    question: '数据可以导出吗？',
    answer: '终身会员支持数据导出功能，可以导出为 CSV 或 JSON 格式。月度和年度会员可以通过升级来获得此功能。',
  },
]

export function FAQ() {
  return (
    <section className="py-20 md:py-28 lg:py-32">
      <div className="container px-4">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="mx-auto max-w-3xl"
        >
          {/* Header */}
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              常见问题
            </h2>
            <p className="text-xl text-muted-foreground">
              快速找到您关心的答案
            </p>
          </motion.div>

          {/* FAQ Accordion */}
          <Accordion type="single" collapsible>
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                custom={index}
              >
                <AccordionItem value={`item-${index}`} className="border-b">
                  <AccordionTrigger className="text-left hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}
