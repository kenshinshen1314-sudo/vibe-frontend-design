/**
 * [INPUT]: type, className（通过 props 传递）
 * [OUTPUT]: 对外提供 Input 组件，微拟物光影质感（内凹效果）
 * [POS]: components/ui/ 的表单组件，被全项目消费
 * [PROTOCOL]: 变更时更新此头部，然后检查 CLAUDE.md
 */

import * as React from "react"
import { cn } from "@/lib/utils"

/* ========================================
   微拟物设计语言 - Input 内凹效果
   ======================================== */

const INPUT_STYLES = {
  boxShadow: 'inset 0 2px 6px rgba(0,0,0,0.12), inset 0 1px 0 rgba(0,0,0,0.05)',
  focusBoxShadow: 'inset 0 2px 8px rgba(0,0,0,0.18), inset 0 1px 0 rgba(0,0,0,0.08), 0 0 0 3px color-mix(in srgb, var(--ring) 30%, transparent)',
}

/* ========================================
   Input 组件实现
   ======================================== */

const Input = React.forwardRef(({
  className,
  type,
  style,
  ...props
}, ref) => {
  const [isFocused, setIsFocused] = React.useState(false)

  return (
    <input
      ref={ref}
      type={type}
      data-slot="input"
      className={cn(
        "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground",
        "border-input h-10 w-full min-w-0 rounded-2xl border bg-background px-5 py-2.5 text-base",
        "transition-all duration-200",
        "focus-visible:outline-none",
        "disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
        "active:scale-[0.99]",
        className
      )}
      style={{
        boxShadow: isFocused ? INPUT_STYLES.focusBoxShadow : INPUT_STYLES.boxShadow,
        ...style,
      }}
      onFocus={(e) => { setIsFocused(true); props.onFocus?.(e) }}
      onBlur={(e) => { setIsFocused(false); props.onBlur?.(e) }}
      {...props}
    />
  )
})
Input.displayName = "Input"

export { Input }
