"use client"

import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastViewport,
  ToastTitle,
} from "@/components/ui/toast"
import { useToast } from "@/hooks/use-toast"
import * as ToastPrimitives from "@radix-ui/react-toast"

export function Toaster() {
  const { toasts } = useToast()

  return (
    <ToastPrimitives.Provider>
      {toasts.map(function ({ id, title, description, action, ...props }) {
        return (
          <Toast key={id} {...props}>
            <div className="grid gap-1">
              {title && <ToastTitle>{title}</ToastTitle>}
              {description && (
                <ToastDescription>{description}</ToastDescription>
              )}
            </div>
            {action}
            <ToastClose />
          </Toast>
        )
      })}
      <ToastViewport />
    </ToastPrimitives.Provider>
  )
}
