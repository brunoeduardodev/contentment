import type { ComponentProps } from "react";

type Props = { label: string } & ComponentProps<"input">;

export const TextField = ({ label, name, ...props }: Props) => {
  return (
    <fieldset className="flex flex-col gap-2 text-white">
      <label className="font-bold text-white" htmlFor={name}>
        {label}
      </label>
      <input
        id={name}
        className="rounded-md bg-black/20 px-4 py-3 text-white outline-white/50 placeholder:text-white/50 focus-visible:outline"
        {...props}
      />
    </fieldset>
  );
};
