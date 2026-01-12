/**
 * [INPUT]: className, variant（raised/inset/default）
 * [OUTPUT]: 对外提供 Card 组件及子组件，微拟物光影质感（凸起/内凹变体）
 * [POS]: components/ui/ 的展示组件，被全项目消费
 * [PROTOCOL]: 变更时更新此头部，然后检查 CLAUDE.md
 */

import * as React from "react"
import { cn } from "@/lib/utils"

/* ========================================
   微拟物设计语言 - Card 样式配置
   ======================================== */

const CARD_STYLES = {
  raised: {
    boxShadow: '0 8px 24px color-mix(in srgb, var(--primary) 25%, transparent), inset 0 1px 0 rgba(255,255,255,0.15), inset 0 -1px 0 rgba(0,0,0,0.05)',
    hoverBoxShadow: '0 12px 32px color-mix(in srgb, var(--primary) 35%, transparent), inset 0 1px 0 rgba(255,255,255,0.2), inset 0 -1px 0 rgba(0,0,0,0.08)',
  },
  inset: {
    boxShadow: 'inset 0 2px 8px rgba(0,0,0,0.15), inset 0 1px 0 rgba(0,0,0,0.05)',
    hoverBoxShadow: 'inset 0 2px 12px rgba(0,0,0,0.2), inset 0 1px 0 rgba(0,0,0,0.08)',
  },
  default: {
    boxShadow: '0 4px 12px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.1), inset 0 -1px 0 rgba(0,0,0,0.05)',
    hoverBoxShadow: '0 6px 16px rgba(0,0,0,0.15), inset 0 1px 0 rgba(255,255,255,0.15), inset 0 -1px 0 rgba(0,0,0,0.08)',
  },
}

/* ========================================
   Card 组件实现
   ======================================== */

const Card = React.forwardRef(({
  className,
  variant = "default",
  ...props
}, ref) => {
  const [isHovered, setIsHovered] = React.useState(false)
  const styleConfig = CARD_STYLES[variant] || CARD_STYLES.default

  return (
    <div
      ref={ref}
      data-slot="card"
      data-variant={variant}
      className={cn(
        "bg-card text-card-foreground flex flex-col gap-6 rounded-2xl border py-6 transition-all duration-200 hover:scale-[1.01]",
        className
      )}
      style={{
        boxShadow: isHovered ? styleConfig.hoverBoxShadow : styleConfig.boxShadow,
      }}
      onMouseEnter={(e) => { setIsHovered(true); props.onMouseEnter?.(e) }}
      onMouseLeave={(e) => { setIsHovered(false); props.onMouseLeave?.(e) }}
      {...props}
    />
  )
})
Card.displayName = "Card"

const CardHeader = React.forwardRef(({
  className,
  ...props
}, ref) => {
  return (
    <div
      ref={ref}
      data-slot="card-header"
      className={cn(
        "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
        className
      )}
      {...props} />
  )
})
CardHeader.displayName = "CardHeader"

const CardTitle = React.forwardRef(({
  className,
  ...props
}, ref) => {
  return (
    <div
      ref={ref}
      data-slot="card-title"
      className={cn("leading-none font-semibold", className)}
      {...props} />
  )
})
CardTitle.displayName = "CardTitle"

const CardDescription = React.forwardRef(({
  className,
  ...props
}, ref) => {
  return (
    <div
      ref={ref}
      data-slot="card-description"
      className={cn("text-muted-foreground text-sm", className)}
      {...props} />
  )
})
CardDescription.displayName = "CardDescription"

const CardAction = React.forwardRef(({
  className,
  ...props
}, ref) => {
  return (
    <div
      ref={ref}
      data-slot="card-action"
      className={cn(
        "col-start-2 row-span-2 row-start-1 self-start justify-self-end",
        className
      )}
      {...props} />
  )
})
CardAction.displayName = "CardAction"

const CardContent = React.forwardRef(({
  className,
  ...props
}, ref) => {
  return (
    <div
      ref={ref}
      data-slot="card-content"
      className={cn("px-6", className)}
      {...props} />
  )
})
CardContent.displayName = "CardContent"

const CardFooter = React.forwardRef(({
  className,
  ...props
}, ref) => {
  return (
    <div
      ref={ref}
      data-slot="card-footer"
      className={cn("flex items-center px-6 [.border-t]:pt-6", className)}
      {...props} />
  )
})
CardFooter.displayName = "CardFooter"

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
}
