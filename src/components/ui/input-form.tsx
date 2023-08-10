import { Input, InputProps } from "@/components/ui/input";
import { UseFormRegisterReturn } from "react-hook-form";

export interface InputFormProps extends InputProps {
  error?: string;
  register: UseFormRegisterReturn<string>;
}

export function InputForm({ error, register, ...rest }: InputFormProps) {
  return (
    <div>
      <Input {...register} {...rest}/>
      {!!error && <p className={"text-xs italic text-red-500 mt-2"}>{error}</p>}
    </div>
  );
}
