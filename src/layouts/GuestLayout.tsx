import { PropsWithChildren } from "react"

export function GuestLayout({ children }: PropsWithChildren) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-200">
      <div className='w-[1200px] min-h-[700px] grid grid-cols-app drop-shadow-md rounded-xl'>
        {children}
      </div>
    </div>
  )
}
