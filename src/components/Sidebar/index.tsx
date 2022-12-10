import Link from "next/link";
import { FiChevronLeft, FiHome } from "react-icons/fi";
import { IconButton } from "../base/IconButton";

const items = [
  {
    name: "Dashboard",
    href: "/",
    Icon: FiHome,
  },
  {
    name: "Posts",
    href: "/posts",
    Icon: FiHome,
  },
];

export const Sidebar = () => {
  return (
    <aside className="min-w-[320px] bg-black/20 p-5 pt-8 text-white">
      <div className="mb-8 flex items-center justify-between">
        <h3 className="text-2xl font-bold">Contentment</h3>
        <IconButton size="lg" Icon={FiChevronLeft} />
      </div>

      <ul className="flex flex-col gap-6 px-1">
        {items.map((item) => (
          <li key={item.name} className="">
            <Link href={item.href} className="flex items-center gap-4">
              <item.Icon className="h-6 w-6" />
              <span className="text-lg">{item.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
};
