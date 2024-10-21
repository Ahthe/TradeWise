import React from 'react'
import { Button, ButtonProps } from '@/components/ui/button'
import { MovingBorder } from '@/components/ui/moving-border'
import { cn } from '@/lib/utils'

interface ButtonWithMovingBorderProps extends ButtonProps {
  borderRadius?: string
  duration?: number
  borderClassName?: string
}

export const ButtonWithMovingBorder = React.forwardRef<
  HTMLButtonElement,
  ButtonWithMovingBorderProps
>(
  (
    {
      children,
      className,
      borderRadius = '1.75rem',
      duration,
      borderClassName,
      ...props
    },
    ref
  ) => {
    return (
      <div
        className={cn('relative inline-flex', className)}
        style={{
          borderRadius: borderRadius
        }}
      >
        <MovingBorder duration={duration} rx="30%" ry="30%">
          <div
            className={cn(
              'h-20 w-20 opacity-[0.8] bg-[radial-gradient(var(--sky-500)_40%,transparent_60%)]',
              borderClassName
            )}
          />
        </MovingBorder>
        <Button ref={ref} className="relative z-10" {...props}>
          {children}
        </Button>
      </div>
    )
  }
)

ButtonWithMovingBorder.displayName = 'ButtonWithMovingBorder'
