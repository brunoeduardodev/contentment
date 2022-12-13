import { zodResolver } from "@hookform/resolvers/zod";
import type { FC, ReactElement, ReactNode } from "react";
import React from "react";
import type { FieldValues, Path, UseFormRegister } from "react-hook-form";
import { useForm } from "react-hook-form";
import type { ZodSchema, ZodType } from "zod";

type FormProps<Schema extends ZodSchema, Values extends FieldValues> = {
  schema: Schema;
  onSubmit: (data: Values) => void;
  children: ReactElement<{
    register?: UseFormRegister<Values>;
    name: Path<Values>;
    error?: string;
  }>[];
  defaultValues?: Values;
};

export const Form = <TSchema extends ZodType>({
  schema,
  onSubmit,
  children,
  defaultValues,
}: FormProps<TSchema, TSchema["_input"]>) => {
  const { register, handleSubmit, formState, watch } = useForm<
    TSchema["_input"]
  >({
    resolver: zodResolver(schema),
    defaultValues,
    reValidateMode: "onChange",
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
      {React.Children.map(children, (child) => {
        return React.createElement(child.type, {
          ...{
            ...child.props,
            register,
            key: child.props.name,
            error: formState.errors[child.props.name]?.message,
          },
        });

        return "";
        // if (typeof child !== "object" || !child) return child;
        // if (!("props" in child)) return child;
        // if (!child.props.name) return child;
        // return React.createElement(child.type, {
        //   ...{
        //     ...child.props,
        //     register: register,
        //     key: child.props.name,
        //   },
        // });
      })}
    </form>
  );
};
