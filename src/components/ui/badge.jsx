/**
 * [INPUT]: variant, className（通过 props 传递）
 * [OUTPUT]: 对外提供 Badge 组件，微拟物光影质感（渐变背景）
 * [POS]: components/ui/ 的展示组件，被全项目消费
 * [PROTOCOL]: 变更时更新此头部，然后检查 CLAUDE.md
 */

import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva } from "class-variance-authority"
import { cn } from "@/lib/utils"

/* ========================================
   微拟物设计语言 - Badge 渐变配置
   ======================================== */

const BADGE_STYLES = {
  default: {
    background: 'linear-gradient(135deg, var(--primary) 0%, color-mix(in srgb, var(--primary) 85%, black) 100%)',
    boxShadow: '0 2px 6px color-mix(in srgb, var(--primary) 30%, transparent), inset 0 1px 0 rgba(255,255,255,0.2)',
  },
  secondary: {
    background: 'linear-gradient(135deg, var(--secondary) 0%, color-mix(in srgb, var(--secondary) 90%, black) 100%)',
    boxShadow: '0 1px 4px rgba(0,0,0,0.15), inset 0 1px 0 rgba(255,255,255,0.15)',
  },
  destructive: {
    background: 'linear-gradient(135deg, var(--destructive) 0%, color-mix(in srgb, var(--destructive) 85%, black) 100%)',
    boxShadow: '0 2px 6px color-mix(in srgb, var(--destructive) 30%, transparent), inset 0 1px 0 rgba(255,255,255,0.2)',
  },
  outline: {
    background: 'transparent',
    boxShadow: '0 1px 2px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.05)',
  },
}

/* ========================================
   Badge 组件实现
   ======================================== */

const badgeVariants = cva(
  [
    "inline-flex items-center justify-center rounded-full border px-3 py-1 text-xs font-medium w-fit whitespace-nowrap shrink-0",
    "[&>svg]:size-3 gap-1 [&>svg]:pointer-events-none",
    "transition-all duration-200",
    "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
    "hover:scale-[1.05] active:scale-[0.98]",
  ].join(" "),
  {
    variants: {
      variant: {
        default: "border-transparent text-primary-foreground",
        secondary: "border-transparent text-secondary-foreground",
        destructive: "border-transparent text-destructive-foreground",
        outline: "text-foreground border-border",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

const Badge = React.forwardRef(({
  className,
  variant = "default",
  asChild = false,
  style,
  ...props
}, ref) => {
  const Comp = asChild ? Slot : "span"
  const [isHovered, setIsHovered] = React.useState(false)

  const styleConfig = BADGE_STYLES[variant] || BADGE_STYLES.default
  const needsCustomStyle = variant !== 'outline'

  const combinedStyle = needsCustomStyle ? {
    background: styleConfig.background,
    boxShadow: isHovered
      ? styleConfig.boxShadow.replace('30%, transparent', '40%, transparent').replace('15%,', '20%,')
      : styleConfig.boxShadow,
    ...style,
  } : style

  return (
    <Comp
      ref={ref}
      data-slot="badge"
      data-variant={variant}
      className={cn(badgeVariants({ variant }), className)}
      style={combinedStyle}
      onMouseEnter={(e) => { setIsHovered(true); props.onMouseEnter?.(e) }}
      onMouseLeave={(e) => { setIsHovered(false); props.onMouseLeave?.(e) }}
      {...props}
    />
  )
})
Badge.displayName = "Badge"

export { Badge, badgeVariants }
