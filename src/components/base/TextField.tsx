import type { ComponentProps } from "react";

type Props = {
  label: string;
  containerClass?: string;
} & ComponentProps<"input">;

export const TextField = ({
  label,
  name,
  className,
  containerClass,
  ...props
}: Props) => {
  return (
    <fieldset
      className={`flex w-full flex-col gap-2 text-white ${
        containerClass ?? ""
      }`}
    >
      <label className="font-bold text-white" htmlFor={name}>
        {label}
      </label>
      <input
        id={name}
        className={`w-full rounded-md bg-black/20 px-4 py-3 text-white outline-white/50 placeholder:text-white/50 focus-visible:outline ${className}`}
        {...props}
      />
    </fieldset>
  );
};