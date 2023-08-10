// components
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

import Link from 'next/link'

export function SignUpForm() {
  return(
    <div className="flex flex-col w-full h-full items-center justify-center gap-10">
      <div className="flex flex-col gap-0">
        <p className="text-2xl font-medium">Cadastre-se 📝</p>
        <p className="text-sm mt-2 text-slate-500 tracking-normal">
          Preencha os dados abaixo:
        </p>

        <form className="flex flex-col min-w-[20rem] gap-3 mt-6">
          <Input id="fullname" placeholder="Nome Completo" />

          <Input id="email" placeholder="E-mail" type="email" />

          <Input id="password" placeholder="Senha" type="password" />

          <Input id="password" placeholder="Confirmar Senha" type="password" />

          <Button className="bg-teal-500 hover:bg-teal-600">
            Cadastrar
          </Button>

          <section className="flex flex-1 justify-center mt-2">
            <p className="text-sm font-normal text-slate-500 hover:text-slate-600">
              Já possui conta? {' '}
              <Link href="/" className="font-semibold text-teal-500 hover:text-teal-600">
                Voltar
              </Link>
            </p>
          </section>
        </form>
      </div>
    </div>
  )
}
