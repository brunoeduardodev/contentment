import type { PropsWithChildren } from "react";

type Props = {
  grow?: number;
};

export const Column = ({ children, grow = 1 }: PropsWithChildren<Props>) => {
  return (
    <div className={`flex flex-grow-[${grow}] items-center gap-4 md:gap-6`}>
      {children}
    </div>
  );
};
