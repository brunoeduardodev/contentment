import { useState } from "react";
import {
  FiChevronLeft,
  FiChevronRight,
  FiHome,
  FiPaperclip,
} from "react-icons/fi";
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
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside
      className={`${
        collapsed ? "max-w-[80px]" : "max-w-[320px]"
      } w-full bg-black/20 pt-8 text-white`}
    >
      <div className="mb-8 flex items-center justify-between px-4">
        <h3 className={`text-2xl font-bold ${collapsed && "hidden"}`}>
          Contentment
        </h3>
        <IconButton
          size="lg"
          Icon={collapsed ? FiChevronRight : FiChevronLeft}
          onClick={() => setCollapsed(!collapsed)}
        />
      </div>

      <ul className="flex flex-col gap-2">
        {items.map((item) => (
          <li
            key={item.name}
            className={`flex ${collapsed && "justify-center"}`}
          >
            {collapsed ? (
              <IconButton size="md" Icon={item.Icon} />
            ) : (
              <LinkButton LeftIcon={item.Icon} size={"md"} href={item.href}>
                {item.name}
              </LinkButton>
            )}
          </li>
        ))}
      </ul>
    </aside>
  );
};
