import { zodResolver } from "@hookform/resolvers/zod";
import type { ReactNode } from "react";
import React from "react";
import { useForm } from "react-hook-form";
import type { ZodType } from "zod";

export const Form = <TSchema extends ZodType>({
  schema,
  onSubmit,
  children,
  defaultValues,
}: {
  schema: TSchema;
  onSubmit: (data: TSchema["_input"]) => void;
  children: ReactNode[];
  defaultValues?: TSchema["_input"];
}) => {
  const { register, handleSubmit } = useForm<TSchema["_input"]>({
    resolver: zodResolver(schema),
    defaultValues,
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {React.Children.map(children, (child) => {
        if (typeof child !== "object" || !child) return child;
        if (!("props" in child)) return child;
        if (!child.props.name) return child;

        return React.createElement(child.type, {
          ...{
            ...child.props,
            register: register,
            key: child.props.name,
          },
        });
      })}
    </form>
  );
};
