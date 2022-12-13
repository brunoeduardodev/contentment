import type { ComponentProps } from "react";
import type { Path, UseFormRegister } from "react-hook-form";
import type { ZodType } from "zod";

type Props<FormSchema extends ZodType> = {
  register?: UseFormRegister<any>;
  name: string;

  error?: string;
  label: string;
} & ComponentProps<"input">;

export const Input = <FormSchema extends ZodType>({
  register,
  name,
  label,
  error,

  ...props
}: Props<FormSchema>) => {
  if (!register) return null;

  return (
    <fieldset className="flex flex-col gap-1 text-white">
      <label className="text-md font-bold" htmlFor={name}>
        {label}
      </label>
      <input
        className="rounded-md py-2 px-3 text-black"
        id={name}
        {...props}
        {...register(name)}
      />

      {error && (
        <small className="text-sm font-bold text-red-500">{error}</small>
      )}
    </fieldset>
  );
};
