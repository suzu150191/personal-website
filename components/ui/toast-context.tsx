"use client"

import * as React from "react"

type Toast = {
  id: string
  title?: React.ReactNode
  description?: React.ReactNode
  action?: React.ReactNode
  duration?: number
  variant?: "default" | "destructive"
}

type ToastContextProps = {
  toasts: Toast[]
  toast: (toast: Omit<Toast, "id">) => void
  dismiss: (id: string) => void
}

const ToastContext = React.createContext<ToastContextProps>({
  toasts: [],
  toast: () => {},
  dismiss: () => {},
})

const generateId = () => Math.random().toString(36).substring(2)

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = React.useState<Toast[]>([])

  const toast = (newToast: Omit<Toast, "id">) => {
    const id = generateId()
    setToasts([...toasts, { id, ...newToast }])

    if (newToast.duration !== 0) {
      setTimeout(() => dismiss(id), newToast.duration || 3000)
    }
  }

  const dismiss = (id: string) => {
    setToasts(toasts.filter((toast) => toast.id !== id))
  }

  const contextValue: ToastContextProps = {
    toasts,
    toast,
    dismiss,
  }

  return <ToastContext.Provider value={contextValue}>{children}</ToastContext.Provider>
}

export function useToast() {
  return React.useContext(ToastContext)
}

export type { Toast }
