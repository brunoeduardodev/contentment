import { FiArrowLeft, FiPlus } from "react-icons/fi";
import { LinkButton, LinkIconButton } from "../base";
import { PageTitle } from "./PageTitle";

type Props = {
  title: string;

  backTo?: string;

  action?: {
    text: string;
    href: string;
  };
};

export const PageHeader = ({ title, backTo, action }: Props) => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        {backTo && (
          <LinkIconButton size="lg" Icon={FiArrowLeft} href={backTo} />
        )}
        <PageTitle>{title}</PageTitle>
      </div>

      {action && (
        <LinkButton
          LeftIcon={FiPlus}
          size="sm"
          href={action.href}
          color="semitransparent"
        >
          {action.text}
        </LinkButton>
      )}
    </div>
  );
};
