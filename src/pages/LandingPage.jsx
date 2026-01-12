/**
 * [INPUT]: 依赖 components/landing/ 的所有 Section 组件，依赖 components/layout/Footer
 * [OUTPUT]: 对外提供 LandingPage 落地页组合页面
 * [POS]: pages/ 的落地页，被 react-router 消费
 * [PROTOCOL]: 变更时更新此头部，然后检查 CLAUDE.md
 */

import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Hero } from '@/components/landing/Hero'
import { LogoBar } from '@/components/landing/LogoBar'
import { ProblemSection } from '@/components/landing/ProblemSection'
import { FeaturesSection } from '@/components/landing/FeaturesSection'
import { HowItWorks } from '@/components/landing/HowItWorks'
import { Testimonials } from '@/components/landing/Testimonials'
import { Pricing } from '@/components/landing/Pricing'
import { FAQ } from '@/components/landing/FAQ'
import { FinalCTA } from '@/components/landing/FinalCTA'

export function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header Navigation */}
      <Header />

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero />

        {/* Logo Bar / Trust Strip */}
        <LogoBar />

        {/* Problem Section */}
        <ProblemSection />

        {/* Features Section */}
        <FeaturesSection />

        {/* How It Works */}
        <HowItWorks />

        {/* Testimonials */}
        <Testimonials />

        {/* Pricing */}
        <Pricing />

        {/* FAQ */}
        <FAQ />

        {/* Final CTA */}
        <FinalCTA />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}
