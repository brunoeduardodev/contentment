import type { VariantProps } from "class-variance-authority";
import { cva } from "class-variance-authority";
import Link from "next/link";
import type { ComponentProps } from "react";
import type { IconType } from "react-icons";

const buttonStyles = cva(
  "text-white flex items-center outline-white focus-visible:outline-1 transition-colors duration-300 ease-in-out ",
  {
    variants: {
      color: {
        transparent:
          "disabled:bg-black/10 focus-visible:bg-white/10 hover:bg-white/10 active:bg-white/20",
        semitransparent:
          "disabled:bg-transparent bg-white/10 hover:bg-white/20 active:bg-white/30 ",
      },
      size: {
        sm: "px-4 py-3 rounded gap-1 text-sm",
        md: "px-5 py-4 rounded gap-2 text-md",
        lg: "px-6 py-4 rounded gap-3 text-lg",
      },
    },
    defaultVariants: {
      color: "transparent",
      size: "md",
    },
  }
);

const iconStyles = cva("text-white", {
  variants: {
    size: {
      sm: "w-4 h-4",
      md: "w-5 h-5",
      lg: "w-6 h-6",
    },
  },
});

type Props = {
  LeftIcon: IconType;
} & ComponentProps<"button"> &
  VariantProps<typeof buttonStyles>;

export const Button = ({
  LeftIcon,
  size,
  color,
  className,
  children,
}: Props) => {
  return (
    <button className={`${buttonStyles({ size, color })} ${className}`}>
      {LeftIcon && <LeftIcon className={iconStyles({ size })} />}
      {children}
    </button>
  );
};

type LinkButtonProps = {
  LeftIcon?: IconType;
  href: string;
} & ComponentProps<typeof Link> &
  VariantProps<typeof buttonStyles>;

export const LinkButton = ({
  LeftIcon,
  size,
  color,
  children,
  className,
  href,
}: LinkButtonProps) => {
  return (
    <Link
      href={href}
      className={`${buttonStyles({ size, color })} ${className}`}
    >
      {LeftIcon && <LeftIcon className={iconStyles({ size })} />}
      {children}
    </Link>
  );
};
