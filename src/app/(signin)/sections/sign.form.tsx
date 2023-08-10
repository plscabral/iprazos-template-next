"use client"

import Link from 'next/link'

// components
import { InputForm } from '@/components/ui/input-form'
import { Button } from '@/components/ui/button'

// form
import { useForm, FieldError } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

// ----------------------------------------------------------------------------------

const signInFormSchema = z.object({
  email: z.string().email("Informe um e-mail válido."),
  senha: z.string().min(6, "Informe uma senha com no mínimo 6 caracteres."),
});

type SignInFormData = z.infer<typeof signInFormSchema>;

// ----------------------------------------------------------------------------------

export function SignInForm() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<SignInFormData>({
    resolver: zodResolver(signInFormSchema),
    defaultValues: {
      email: "",
      senha: ""
    }
  });

  async function handleSignIn(data: SignInFormData) {
    console.log(data);
    reset({});
  }

  return (
    <div className="flex flex-col w-full h-full items-center justify-center gap-10">
      <div className="flex flex-col gap-0">
        <p className="text-2xl font-medium">Bem-vindo 😊</p>
        <p className="text-sm mt-2 text-slate-500 tracking-normal">
          Entre com os dados da conta para continuar
        </p>

        <form
          className="flex flex-col min-w-[20rem] gap-3 mt-6"
          onSubmit={handleSubmit(handleSignIn)}
        >
          <InputForm
            id="email"
            placeholder="E-mail"
            type="email"
            error={errors.email && (errors.email as FieldError).message}
            register={register("email")}
          />

          <InputForm
            id="senha"
            placeholder="Senha"
            type="password"
            error={errors.senha && (errors.senha as FieldError).message}
            register={register("senha")}
          />

          <section className="flex flex-1 justify-end">
            <Link href="" className="text-sm font-normal text-slate-500 hover:text-slate-700">
              Esqueceu sua senha?
            </Link>
          </section>

          <Button type='submit' className="bg-teal-500 hover:bg-teal-600">
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
