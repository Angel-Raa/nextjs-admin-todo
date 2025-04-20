import { CiLogout } from "react-icons/ci";
import { SidebarItem } from "./SidebarItem";
import {
  IoCalendarOutline,
  IoCheckboxOutline,
  IoCodeOutline,
  IoListOutline,
  IoPrintOutline,
} from "react-icons/io5";

const menuItems = [
  {
    icon: <IoCalendarOutline size={50} />,
    path: "/dashboard",
    title: "DASHBOARD",
  },
  {
    icon: <IoCheckboxOutline size={50} />,
    path: "/dashboard/rest-todos",
    title: "REST - TODOS",
  },
  {
    icon: <IoListOutline size={50} />,
    path: "/dashboard/server-actions",
    title: "SERVER ACTONS",
  },
  {
    icon: <IoCodeOutline size={50} />,
    path: "/dashboard/cookies",
    title: "COOKIES",
  },
  {
    icon: <IoPrintOutline size={50} />,
    path: "/dashboard/products",
    title: "PRODUCTOS - SERVER ACTIONS",
  },
];
export const Sidebar = () => {
  return (
    <>
      <aside className="ml-[-100%] fixed z-10 top-0 pb-3 px-6 w-full flex flex-col justify-between h-screen border-r bg-white transition duration-300 md:w-4/12 lg:ml-0 lg:w-[25%] xl:w-[20%] 2xl:w-[15%]">
        <div>
          <div className="mt-8 text-center">
            <h5 className="hidden mt-4 text-xl font-semibold text-gray-600 lg:block">
              Angel Aguero
            </h5>
          </div>

          <ul className="space-y-2 tracking-wide mt-8">
            {/* TODO: src/components <SidebarItem /> */}
            {/* Active className: text-white bg-gradient-to-r from-sky-600 to-cyan-400 */}
            {menuItems.map((item) => (
              <SidebarItem key={item.path} {...item} />
            ))}
          </ul>
        </div>

        <div className="px-6 -mx-6 pt-4 flex justify-between items-center border-t">
          <button className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group">
            <CiLogout />
            <span className="group-hover:text-gray-700">Logout</span>
          </button>
        </div>
      </aside>
    </>
  );
};
