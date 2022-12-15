import type { ComponentProps } from "react";

type Props = { label: string } & ComponentProps<"input">;

export const TextField = ({ label, name, ...props }: Props) => {
  return (
    <fieldset>
      <label htmlFor={name}>{label}</label>
      <input id={name} className="px-4 py-3" {...props} />
    </fieldset>
  );
};
