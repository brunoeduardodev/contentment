import type { ComponentProps } from "react";

type Props = ComponentProps<"form">;

export const Form = ({ className, children, ...props }: Props) => {
  return (
    <form className={`flex flex-col gap-4 md:gap-6 ${className}`} {...props}>
      {children}
    </form>
  );
};
