L3 模块地图

# src/lib/
> L3 | 父级: src/CLAUDE.md

成员清单
utils.js                          - cn() 函数，clsx + tailwind-merge 合并类名
motion.js                         - Apple 风格 Spring 动画配置库（framer-motion variants）

法则: 成员完整·一行一文件·父级链接·技术词前置

---

## motion.js - Apple Spring 动画系统

**INPUT**: 无外部依赖，纯配置导出
**OUTPUT**: 对外提供 Framer Motion Apple 风格 Spring variants 预设
**POS**: lib/ 的动画配置模块，被全项目消费（App.jsx PageWrapper、各类组件）

### Spring 预设配置

```javascript
export const spring = {
  snappy:   { type: "spring", stiffness: 400, damping: 30 },       // 标准交互 - 按钮、卡片 hover
  gentle:   { type: "spring", stiffness: 300, damping: 35 },       // 柔和过渡 - 面板展开、模态框
  bouncy:   { type: "spring", stiffness: 500, damping: 25, mass: 0.8 },  // 弹性强调 - 成功反馈、关键元素
  smooth:   { type: "spring", stiffness: 200, damping: 40, mass: 1.2 },  // 优雅落定 - 页面过渡、大元素移动
  inertia:  { type: "spring", stiffness: 150, damping: 20, mass: 0.5 },  // 惯性滑动 - 列表、轮播
}
```

### 核心动画 Variants

**进场动画**（Spring 驱动）
- `fadeInUp`    - 淡入上移，opacity: 0→1, y: 24→0
- `fadeInDown`  - 淡入下移，opacity: 0→1, y: -24→0
- `fadeInLeft`  - 淡入左移，opacity: 0→1, x: -30→0
- `fadeInRight` - 淡入右移，opacity: 0→1, x: 30→0
- `scaleIn`     - 缩放进场，opacity: 0→1, scale: 0.9→1
- `slideInLeft` - 左滑进场，opacity: 0→1, x: -50→0
- `slideInRight`- 右滑进场，opacity: 0→1, x: 50→0

**序列动画**
- `staggerContainer` - 容器，staggerChildren: 0.06, delayChildren: 0.1
- `staggerItem`      - 子项，opacity: 0→1, y: 20→0

**交互动画**
- `hoverLift` - Apple Card 悬浮效果（scale: 1→1.02, y: 0→-4）
- `tapScale`  - 点击反馈（scale: 1→0.96）

**场景动画**
- `pageTransition`   - 页面路由过渡（initial: opacity 0 x 20 → animate: opacity 1 x 0 → exit: opacity 0 x -20）
- `modalOverlay`     - 模态框遮罩（opacity: 0→1）
- `modalContent`     - 模态框内容（opacity 0 scale 0.95 y 20 → opacity 1 scale 1 y 0）
- `floatAnimation`   - Hero CTA 浮动效果（y: [0, -10, 0], infinite loop）

### Apple 缓动曲线

```javascript
export const appleEase        = [0.25, 0.1, 0.25, 1.0]   // iOS 标准曲线
export const appleEaseOut     = [0.22, 1, 0.36, 1]       // iOS 弹出曲线
export const appleDecelerate  = [0, 0, 0.2, 1]           // iOS 减速曲线
```

### Viewport Hook 配置

```javascript
export const viewportConfig = {
  once: true,        // 只触发一次
  margin: '-100px'   // 提前 100px 触发
}
```

### 设计哲学

**Spring 物理引擎优先**
- 所有动画默认使用 Spring（type: "spring"），非 linear/tween
- 核心参数：stiffness（刚度 150-500）、damping（阻尼 20-40）、mass（质量 0.5-1.2）
- 自然启动 + 优雅落定 + 物理惯性

**可访问性**
- MotionConfig reducedMotion="user"（App.jsx 全局配置）
- 尊重用户系统偏好设置

**语义驱动**
- 每个动画承载明确交互语义（非装饰）
-进场（initial→animate）、退场（exit）、交互（hover/tap）

---

## utils.js - 样式工具函数

**INPUT**: 依赖 clsx + tailwind-merge
**OUTPUT**: 对外提供 cn() 函数
**POS**: lib/ 的工具函数模块，被全项目消费（所有组件）

```javascript
import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}
```

**用途**: 合并 Tailwind 类名，后置覆盖前置冲突

[PROTOCOL]: 变更时更新此头部，然后检查 src/CLAUDE.md
