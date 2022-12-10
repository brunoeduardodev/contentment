import { FiChevronLeft, FiHome, FiPaperclip } from "react-icons/fi";
import { IconButton, LinkButton } from "../base";

const items = [
  {
    name: "Dashboard",
    href: "/",
    Icon: FiHome,
  },
  {
    name: "Posts",
    href: "/posts",
    Icon: FiPaperclip,
  },
];

export const Sidebar = () => {
  return (
    <aside className="min-w-[320px] bg-black/20 pt-8 text-white">
      <div className="mb-8 flex items-center justify-between px-4">
        <h3 className="text-2xl font-bold">Contentment</h3>
        <IconButton size="lg" Icon={FiChevronLeft} />
      </div>

      <ul className="flex flex-col gap-1">
        {items.map((item) => (
          <li key={item.name} className="">
            <LinkButton LeftIcon={item.Icon} size={"md"} href={item.href}>
              {item.name}
            </LinkButton>
          </li>
        ))}
      </ul>
    </aside>
  );
};
