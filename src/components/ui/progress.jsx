/**
 * [INPUT]: value, className（通过 props 传递）
 * [OUTPUT]: 对外提供 Progress 组件，微拟物光影质感（内凹轨道 + 渐变进度条）
 * [POS]: components/ui/ 的反馈组件，被全项目消费
 * [PROTOCOL]: 变更时更新此头部，然后检查 CLAUDE.md
 */

"use client"

import * as React from "react"
import * as ProgressPrimitive from "@radix-ui/react-progress"
import { cn } from "@/lib/utils"

/* ========================================
   微拟物设计语言 - Progress 样式配置
   ======================================== */

const PROGRESS_STYLES = {
  track: {
    boxShadow: 'inset 0 2px 6px rgba(0,0,0,0.15), inset 0 1px 0 rgba(0,0,0,0.05)',
  },
  indicator: {
    background: 'linear-gradient(90deg, var(--primary) 0%, color-mix(in srgb, var(--primary) 85%, black) 50%, color-mix(in srgb, var(--primary) 75%, black) 100%)',
    boxShadow: '0 1px 3px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.3)',
  },
}

/* ========================================
   Progress 组件实现
   ======================================== */

const Progress = React.forwardRef(({
  className,
  value,
  ...props
}, ref) => {
  return (
    <ProgressPrimitive.Root
      ref={ref}
      data-slot="progress"
      className={cn(
        "relative h-3 w-full overflow-hidden rounded-full bg-muted",
        "transition-all duration-200",
        className
      )}
      style={PROGRESS_STYLES.track}
      {...props}>
      <ProgressPrimitive.Indicator
        data-slot="progress-indicator"
        className="h-full w-full rounded-full transition-all duration-300 ease-out"
        style={{
          transform: `translateX(-${100 - (value || 0)}%)`,
          ...PROGRESS_STYLES.indicator,
        }}
      />
    </ProgressPrimitive.Root>
  )
})
Progress.displayName = "Progress"

export { Progress }
