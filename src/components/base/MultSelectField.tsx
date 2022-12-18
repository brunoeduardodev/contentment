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
  error?: string;
};

export const MultiSelectField = ({
  label,
  name,
  options,
  containerClass,
  defaultOption,
  error,
}: Props) => {
  return null;
};
