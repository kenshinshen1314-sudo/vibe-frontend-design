/**
 * [INPUT]: 依赖 react-router-dom 的 BrowserRouter/Routes/Route，依赖 framer-motion 的 MotionConfig，依赖 pages/ 的所有页面
 * [OUTPUT]: 对外提供 App 根组件，配置路由系统 + Apple 级动画可访问性支持
 * [POS]: src/ 的根组件，路由配置入口，被 main.jsx 消费
 * [PROTOCOL]: 变更时更新此头部，然后检查 CLAUDE.md
 */

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { MotionConfig } from 'framer-motion'
import { Home } from '@/pages/Home'
import { DesignSystem } from '@/pages/DesignSystem'
import { LandingPage } from '@/pages/LandingPage'
import { TestPage } from '@/pages/TestPage'
import { About } from '@/pages/About'

function App() {
  return (
    <MotionConfig reducedMotion="user">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/design-system" element={<DesignSystem />} />
          <Route path="/bellybook" element={<LandingPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/test" element={<TestPage />} />
        </Routes>
      </BrowserRouter>
    </MotionConfig>
  )
}

export default App
