import type { PropsWithChildren } from "react";

type Props = {
  grow?: 1 | 2 | 3 | 4 | 5;
};

const growStyles = [
  "grow-[1]",
  "grow-[2]",
  "grow-[3]",
  "grow-[4]",
  "grow-[5]",
] as const;

export const Column = ({ children, grow = 1 }: PropsWithChildren<Props>) => {
  return (
    <div className={`flex ${growStyles[grow - 1]} items-center gap-4 md:gap-6`}>
      {children}
    </div>
  );
};
