/**
 * [INPUT]: 无外部依赖，纯配置导出
 * [OUTPUT]: 对外提供 Framer Motion Apple 风格 Spring variants 预设
 * [POS]: lib/ 的动画配置模块，被全项目消费
 * [PROTOCOL]: 变更时更新此头部，然后检查 CLAUDE.md
 */

/* ========================================
   Apple 风格 Spring 配置
   核心哲学：Spring 弹簧 + 阻尼落定 + 物理惯性
   ======================================== */

// 标准 Spring 预设
export const spring = {
  // 标准交互 - 按钮、卡片 hover
  snappy: { type: "spring", stiffness: 400, damping: 30 },
  // 柔和过渡 - 面板展开、模态框
  gentle: { type: "spring", stiffness: 300, damping: 35 },
  // 弹性强调 - 成功反馈、关键元素
  bouncy: { type: "spring", stiffness: 500, damping: 25, mass: 0.8 },
  // 优雅落定 - 页面过渡、大元素移动
  smooth: { type: "spring", stiffness: 200, damping: 40, mass: 1.2 },
  // 惯性滑动 - 列表、轮播
  inertia: { type: "spring", stiffness: 150, damping: 20, mass: 0.5 },
}

/* ========================================
   Apple 缓动曲线（非 Spring 场景）
   ======================================== */

export const appleEase = [0.25, 0.1, 0.25, 1.0] // iOS 标准曲线
export const appleEaseOut = [0.22, 1, 0.36, 1] // iOS 弹出曲线
export const appleDecelerate = [0, 0, 0.2, 1] // iOS 减速曲线

/* ========================================
   基础动画 Variants（Spring 版）
   ======================================== */

export const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 30
    }
  }
}

export const fadeInDown = {
  hidden: { opacity: 0, y: -24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 30
    }
  }
}

export const fadeInLeft = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 30
    }
  }
}

export const fadeInRight = {
  hidden: { opacity: 0, x: 30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 30
    }
  }
}

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 25
    }
  }
}

export const slideInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 35
    }
  }
}

export const slideInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 35
    }
  }
}

/* ========================================
   序列进场（带阻尼）
   ======================================== */

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.1
    }
  }
}

export const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 350,
      damping: 30
    }
  }
}

/* ========================================
   Viewport Hook 配置
   ======================================== */

export const viewportConfig = {
  once: true,
  margin: '-100px'
}

/* ========================================
   交互动画 Variants
   ======================================== */

// 悬浮提升（Apple Card 效果）
export const hoverLift = {
  rest: {
    scale: 1,
    y: 0,
  },
  hover: {
    scale: 1.02,
    y: -4,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 25
    }
  }
}

// 点击反馈（弹性回弹）
export const tapScale = {
  tap: { scale: 0.96 }
}

/* ========================================
   页面路由过渡
   ======================================== */

export const pageTransition = {
  initial: { opacity: 0, x: 20 },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 40
    }
  },
  exit: {
    opacity: 0,
    x: -20,
    transition: { duration: 0.2 }
  }
}

/* ========================================
   Float Animation（Hero CTA）
   ======================================== */

export const floatAnimation = {
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: 'easeInOut'
    }
  }
}

/* ========================================
   模态框动画
   ======================================== */

export const modalOverlay = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.2 }
  }
}

export const modalContent = {
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 35
    }
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    transition: { duration: 0.15 }
  }
}
