import type { ComponentProps } from "react";
import type { FieldValues, Path, UseFormRegister } from "react-hook-form";

type Props<FormSchema extends FieldValues> = {
  register: UseFormRegister<FormSchema>;
  name: Path<FormSchema>;
} & ComponentProps<"input">;

export const Input = <TFieldValues extends FieldValues>({
  register,
  name,
  ...props
}: Props<TFieldValues>) => {
  return <input {...register(name)} {...props} />;
};
