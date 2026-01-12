L1 项目宪法

# Bellybook - React 19 + Vite 6 + TailwindCSS v4 + shadcn/ui 前端应用
React 19.1.0 + Vite 6.2.3 + TailwindCSS 4.0.0 + shadcn/ui + react-router-dom 7.x

<directory>
src/                      - 源代码目录 (4 子目录: components/, lib/, pages/)
src/components/ui/        - shadcn/ui 组件库（30+ 组件，自动生成）
src/components/layout/    - 布局组件（Header/Hero/Footer）
src/components/landing/   - 落地页 Section 组件（Hero/Features/Pricing 等 10 个）
src/pages/                - 页面组件（Home/DesignSystem/LandingPage）
src/lib/                  - 工具函数（utils.js cn() 函数 + motion.js Apple Spring 动画系统）
</directory>

<config>
package.json              - 项目配置、依赖定义、脚本入口
vite.config.js            - Vite 构建配置、插件配置、路径别名
jsconfig.json             - JavaScript 路径别名配置 (@/* → ./src/*)
components.json           - shadcn/ui 配置（组件路径、样式路径、别名）
eslint.config.js          - ESLint 代码规范配置
index.html                - HTML 入口、root 挂载点
.gitignore                - Git 忽略规则
</config>

技术栈
- 核心: React 19.1.0 (并发渲染、Actions、useOptimistic)
- 构建: Vite 6.2.3 (ESM、HMR、原生 ESM)
- 样式: TailwindCSS 4.0.0 (@tailwindcss/vite、CSS 变量、amethyst-haze 主题)
- 组件库: shadcn/ui (30+ 组件，基于 Radix UI + Tailwind)
- 路由: react-router-dom 7.x (BrowserRouter、Routes、Route)
- 动效: framer-motion 11.15.0 (AnimatePresence、motion、layout animation)
- 图标: lucide-react 0.474.0 (系统图标) + react-icons 5.5.0 (Si社媒图标)
- 工具: clsx 2.1.1 + tailwind-merge 3.4.0 + tailwind-variants 0.3.1

设计原则
- 组件短小、单一职责、Props 只读
- **一切设计来自设计系统**：颜色使用 CSS 变量（--primary, --secondary...），组件使用 shadcn/ui
- **微拟物光影质感**：渐变背景 + 立体阴影 + 微交互，禁止 backdrop-blur/0 0 Npx 发光/硬编码颜色
- **Apple Spring 动效系统**：Spring 物理引擎优先（stiffness 150-500, damping 20-40），自然启动 + 优雅落定，支持 prefers-reduced-motion
- **样式零自由度**：Tailwind 约束一切，禁止 style 属性，禁止硬编码颜色
- **动效意图驱动**：过渡动画必须承载交互语义，非装饰
- 代码坏味零容忍：发现即询问，重构即进化

微拟物设计语言
- 渐变背景：linear-gradient(135deg, var(--primary) 0%, color-mix(in srgb, var(--primary) 85%, black) 50%, color-mix(in srgb, var(--primary) 70%, black) 100%)
- 立体阴影：三层结构（外投影 + 顶部高光 inset + 底部暗边 inset）
- 微交互：hover:scale-[1.02] + active:scale-[0.97] + transition-all duration-200
- 圆角规范：sm:16px | default:20px | lg:24px | xl:32px

Apple 动画系统
- Spring 物理引擎：所有动画默认 type: "spring"，stiffness（刚度 150-500）、damping（阻尼 20-40）、mass（质量 0.5-1.2）
- 预设场景：snappy（标准交互）、gentle（柔和过渡）、bouncy（弹性强调）、smooth（优雅落定）、inertia（惯性滑动）
- 页面过渡：AnimatePresence + pageTransition（opacity + x 轴位移），自然进出
- 交互反馈：hoverLift（Card scale 1.02 y -4）、tapScale（Button scale 0.96），Spring 驱动
- 可访问性：MotionConfig reducedMotion="user"，尊重用户偏好设置
- 语义驱动：进场（initial→animate）、退场（exit）、交互（hover/tap/whileInView），承载明确交互语义

法则: 极简·稳定·导航·版本精确
[PROTOCOL]: 变更时更新此头部，然后检查子模块 CLAUDE.md
