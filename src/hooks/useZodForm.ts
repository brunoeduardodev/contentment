import { zodResolver } from "@hookform/resolvers/zod";
import type { UseFormProps } from "react-hook-form";
import { useForm } from "react-hook-form";
import type { ZodSchema } from "zod";

export const useZodForm = <TSchema extends ZodSchema>(
  props: Omit<UseFormProps<TSchema["_output"]>, "resolver"> & {
    schema: TSchema;
  }
) => {
  const form = useForm<TSchema["_output"]>({
    ...props,
    resolver: zodResolver(props.schema, undefined),
  });

  return form;
};
