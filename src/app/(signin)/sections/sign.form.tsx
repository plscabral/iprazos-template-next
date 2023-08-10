// components
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

import Link from 'next/link'

export function SignInForm() {
  return (
    <div className="flex flex-col w-full h-full items-center justify-center gap-10">
      <div className="flex flex-col gap-0">
        <p className="text-2xl font-medium">Bem-vindo 😊</p>
        <p className="text-sm mt-2 text-slate-500 tracking-normal">
          Entre com os dados da conta para continuar
        </p>

        <form className="flex flex-col min-w-[20rem] gap-3 mt-6">
          <Input id="email" placeholder="E-mail" type="email" />

          <Input id="password" placeholder="Senha" type="password" />

          <section className="flex flex-1 justify-end">
            <Link href="" className="text-sm font-normal text-slate-500 hover:text-slate-700">
              Esqueceu sua senha?
            </Link>
          </section>

          <Button className="bg-teal-500 hover:bg-teal-600">
            Entrar
          </Button>

          <section className="flex flex-1 justify-center mt-2">
            <p className="text-sm font-normal text-slate-500 hover:text-slate-600">
              Não possui conta? {' '}
              <Link href="/signup" className="font-semibold text-teal-500 hover:text-teal-600">
                Crie sua conta
              </Link>
            </p>
          </section>
        </form>
      </div>
    </div>
  )
}
