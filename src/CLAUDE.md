L2 模块地图

# src/
> L2 | 父级: /CLAUDE.md

成员清单
main.jsx                          - 应用入口，React 挂载，StrictMode 包裹
App.jsx                           - 根组件，react-router-dom 路由配置
index.css                         - TailwindCSS v4 + amethyst-haze 主题，CSS 变量定义

components/ui/                    - shadcn/ui 组件库（30+ 组件，微拟物光影质感升级）
components/ui/button.jsx          - 渐变背景 + 立体阴影 + 微交互，8 种变体
components/ui/card.jsx            - 凸起/内凹/default 三种变体，hover:scale-[1.01]
components/ui/input.jsx           - 内凹效果，focus 时阴影增强
components/ui/badge.jsx           - 渐变背景，4 种变体
components/ui/switch.jsx          - 渐变轨道 + 立体滑块
components/ui/progress.jsx        - 内凹轨道 + 渐变进度条
components/layout/Header.jsx      - 顶部导航栏，Logo + 导航菜单 + CTA
components/layout/Hero.jsx        - 首屏英雄区，标题 + 描述 + CTA + 技术栈展示
components/layout/Footer.jsx      - 底部页脚，品牌 + 链接 + 社媒图标

components/landing/               - Bellybook胃之书落地页 Section 组件
components/landing/Hero.jsx       - 首屏英雄区，Badge + 标题 + CTA + App Preview + 浮动元素
components/landing/LogoBar.jsx    - 信任背书条，展示平台 Logo
components/landing/ProblemSection.jsx - 痛点展示，3 个痛点卡片
components/landing/FeaturesSection.jsx - 功能展示，6 个功能卡片，网格布局
components/landing/HowItWorks.jsx - 步骤说明，3 个步骤，连接线
components/landing/Testimonials.jsx - 用户评价，3 条评价，网格布局
components/landing/Pricing.jsx    - 定价方案，3 个方案（月度/年度/终身）
components/landing/FAQ.jsx        - 常见问题，Accordion 组件，6 个问题
components/landing/FinalCTA.jsx   - 最终 CTA，渐变背景 + 双按钮

pages/Home.jsx                    - 首页，Header + Hero + 特性卡片 + Footer
pages/DesignSystem.jsx            - 设计系统展示页，含微拟物设计区块
pages/LandingPage.jsx             - Bellybook胃之书落地页，组合所有 Section 组件

lib/                              - 工具函数库（cn() + Apple Spring 动画系统）
lib/utils.js                      - cn() 函数，clsx + tailwind-merge 合并类名
lib/motion.js                     - Apple 风格 Spring 动画配置库（预设、variants、缓动曲线）

> lib/CLAUDE.md                   - lib/ 模块详细文档（motion.js 设计哲学、Spring 参数）

法则: 成员完整·一行一文件·父级链接·技术词前置
**一切设计来自设计系统**：使用 shadcn/ui 组件和 CSS 变量颜色
**微拟物光影质感**：渐变 + 立体阴影 + 微交互，禁止 backdrop-blur/0 0 Npx 发光/硬编码颜色
[PROTOCOL]: 变更时更新此头部，然后检查 CLAUDE.md
