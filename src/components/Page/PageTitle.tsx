import type { ComponentProps } from "react";

type Props = ComponentProps<"h1">;

export const PageTitle = ({ children, className, ...props }: Props) => {
  return (
    <h1 className={`text-2xl font-bold text-white ${className}`} {...props}>
      {children}
    </h1>
  );
};
