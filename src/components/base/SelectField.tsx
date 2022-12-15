import type { ComponentProps } from "react";

type Option = {
  label: string;
  value: string;
};

type Props = {
  defaultOption?: Option;
  options: Option[];
  name: string;
  label: string;
  containerClass?: string;
} & ComponentProps<"select">;

export const SelectField = ({
  label,
  name,
  containerClass,
  className,
  options,
  defaultOption,
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
      <select
        id={name}
        className={`w-full rounded-md bg-black/20 px-4 py-3 text-white outline-white/50 focus-visible:outline ${className}`}
        defaultValue={defaultOption?.value}
        {...props}
      >
        {!defaultOption && <option>Select</option>}

        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </fieldset>
  );
};
