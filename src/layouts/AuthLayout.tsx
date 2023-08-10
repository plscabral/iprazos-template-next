import { PropsWithChildren } from "react"

export function AuthLayout({ children }: PropsWithChildren) {
  return (
    <div>
      <h1>AuthLayout</h1>
      {children}
    </div>
  )
}
