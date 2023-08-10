// sections
import { SignUpForm } from './sections/signup.form'

import Image from 'next/image'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'IPrazos - Cadastre-se',
}

export default function SignUp() {
  return (
    <>
      <section className="bg-white rounded-l-lg p-8">
        <div className="h-full">
          <div className="flex flex-col h-full">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-black"></span>
              <h1 className="font-semibold">IPrazos</h1>
            </div>

            <SignUpForm />
          </div>
        </div>
      </section>

      <section className="bg-slate-100 rounded-r-lg flex justify-center items-center">
        <Image
          src="/illustrations/signup.svg"
          width={300}
          height={300}
          alt="Ilustração"
        />
      </section>
    </>
  )
}
