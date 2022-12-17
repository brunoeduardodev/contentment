import type { ComponentProps } from "react";

export const Row = ({
  children,
  className,
  ...props
}: ComponentProps<"div">) => {
  return (
    <div
      className={`flex w-full items-center gap-4 md:gap-6 ${className ?? ""}`}
      {...props}
    >
      {children}
    </div>
  );
};
