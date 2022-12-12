import { FiPlus } from "react-icons/fi";
import { LinkButton } from "../base";
import { PageTitle } from "./PageTitle";

type Props = {
  title: string;

  action?: {
    text: string;
    href: string;
  };
};

export const PageHeader = ({ title, action }: Props) => {
  return (
    <div className="flex items-center justify-between">
      <PageTitle>{title}</PageTitle>

      {action && (
        <LinkButton LeftIcon={FiPlus} size="md" href={action.href}>
          {action.text}
        </LinkButton>
      )}
    </div>
  );
};
