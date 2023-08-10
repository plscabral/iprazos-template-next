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

const signUpFormSchema = z.object({
  nomeCompleto: z.string().nonempty("Infome seu nome completo"),
  email: z.string().email("Informe um e-mail válido."),
  senha: z.string().min(6, "Informe uma senha com no mínimo 6 caracteres."),
  confirmarSenha: z.string().min(6, "Informe uma senha com no mínimo 6 caracteres.")
}).refine((data) => data.senha === data.confirmarSenha, {
  message: "As senhas precisam ser iguais!",
  path: ["confirmarSenha"]
});

type SignUpFormData = z.infer<typeof signUpFormSchema>;

// ----------------------------------------------------------------------------------

export function SignUpForm() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<SignUpFormData>({
    resolver: zodResolver(signUpFormSchema),
    defaultValues: {
      nomeCompleto: "",
      email: "",
      senha: "",
      confirmarSenha: "",
    }
  });

  async function handleSignUp(data: SignUpFormData) {
    console.log(data);
    reset({});
  }

  return (
    <div className="flex flex-col w-full h-full items-center justify-center gap-10">
      <div className="flex flex-col gap-0">
        <p className="text-2xl font-medium">Cadastre-se 📝</p>
        <p className="text-sm mt-2 text-slate-500 tracking-normal">
          Preencha os dados abaixo:
        </p>

        <form
          className="flex flex-col min-w-[20rem] gap-3 mt-6"
          onSubmit={handleSubmit(handleSignUp)}
        >
          <InputForm
            id="nomeCompleto"
            placeholder="Nome Completo"
            error={errors.nomeCompleto && (errors.nomeCompleto as FieldError).message}
            register={register("nomeCompleto")}
          />

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

          <InputForm
            id="confirmarSenha"
            placeholder="Confirmar Senha"
            type="password"
            error={errors.confirmarSenha && (errors.confirmarSenha as FieldError).message}
            register={register("confirmarSenha")}
          />

          <Button type='submit' className="bg-teal-500 hover:bg-teal-600">
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
