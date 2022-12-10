import type { VariantProps } from "class-variance-authority";
import { cva } from "class-variance-authority";
import type { ComponentProps } from "react";
import type { IconType } from "react-icons";

const buttonStyles = cva(
  "flex flex-col items-center justify-center text-white outline-white focus-visible:outline-1 transition-colors duration-300 ease-in-out focus-visible:bg-white/10 hover:bg-white/10 active:bg-white/20 rounded-full",
  {
    variants: {
      size: {
        sm: "h-8 w-8",
        md: "h-10 w-10",
        lg: "h-12 w-12",
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
);

const iconStyles = cva("text-white", {
  variants: {
    size: {
      sm: "h-4 w-4",
      md: "h-5 w-5",
      lg: "h-7 w-7",
    },
  },
});

type Props = { Icon: IconType } & ComponentProps<"button"> &
  VariantProps<typeof buttonStyles>;

export const IconButton = ({ size, className, Icon, ...props }: Props) => {
  return (
    <button className={buttonStyles({ size }) + ` ${className}`} {...props}>
      <Icon className={iconStyles({ size })} />
    </button>
  );
};
