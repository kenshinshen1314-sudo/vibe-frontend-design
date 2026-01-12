/**
 * [INPUT]: className（通过 props 传递）
 * [OUTPUT]: 对外提供 Switch 组件，微拟物光影质感（渐变 + 立体阴影）
 * [POS]: components/ui/ 的表单组件，被全项目消费
 * [PROTOCOL]: 变更时更新此头部，然后检查 CLAUDE.md
 */

"use client"

import * as React from "react"
import * as SwitchPrimitive from "@radix-ui/react-switch"
import { cn } from "@/lib/utils"

/* ========================================
   微拟物设计语言 - Switch 样式配置
   ======================================== */

const SWITCH_STYLES = {
  unchecked: {
    background: 'linear-gradient(135deg, var(--input) 0%, color-mix(in srgb, var(--input) 90%, black) 100%)',
    boxShadow: 'inset 0 2px 6px rgba(0,0,0,0.2), inset 0 1px 0 rgba(0,0,0,0.1)',
  },
  checked: {
    background: 'linear-gradient(135deg, var(--primary) 0%, color-mix(in srgb, var(--primary) 85%, black) 100%)',
    boxShadow: '0 2px 8px color-mix(in srgb, var(--primary) 35%, transparent), inset 0 1px 0 rgba(255,255,255,0.2)',
  },
}

/* ========================================
   Switch 组件实现
   ======================================== */

const Switch = React.forwardRef(({
  className,
  ...props
}, ref) => {
  const [isChecked, setIsChecked] = React.useState(props.checked || props.defaultChecked || false)

  React.useEffect(() => {
    setIsChecked(props.checked || false)
  }, [props.checked])

  return (
    <SwitchPrimitive.Root
      ref={ref}
      data-slot="switch"
      className={cn(
        "peer inline-flex h-6 w-11 shrink-0 items-center rounded-full border-2 border-transparent transition-all duration-200 outline-none",
        "focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        "disabled:cursor-not-allowed disabled:opacity-50",
        "active:scale-[0.97]",
        className
      )}
      style={
        isChecked
          ? SWITCH_STYLES.checked
          : SWITCH_STYLES.unchecked
      }
      onCheckedChange={(checked) => {
        setIsChecked(checked)
        props.onCheckedChange?.(checked)
      }}
      {...props}>
      <SwitchPrimitive.Thumb
        data-slot="switch-thumb"
        className={cn(
          "pointer-events-none block h-5 w-5 rounded-full bg-background shadow-md transition-transform duration-200",
          "data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0",
          isChecked && "shadow-[0_2px_6px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.3)]"
        )}
      />
    </SwitchPrimitive.Root>
  )
})
Switch.displayName = "Switch"

export { Switch }
