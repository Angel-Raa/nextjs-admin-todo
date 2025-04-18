"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
  icon: React.ReactNode;
  path: string;
  title: string;
}

const baseClass =
  "relative px-4 py-3 flex items-center space-x-4 rounded-xl text-black";
const activeClass = "bg-gradient-to-r from-sky-600 to-cyan-400";
const inactiveClass = "hover:bg-sky-800";
export const SidebarItem = ({ icon, path, title }: Props) => {
  const pathName = usePathname();
  const isActive = pathName === path;
  const linkClass = `${baseClass} ${isActive ? activeClass : inactiveClass}`;
  return (
    <li>
      <Link href={path} className={linkClass}>
        {icon}
        <span className="-mr-1 font-medium">{title}</span>
      </Link>
    </li>
  );
};
