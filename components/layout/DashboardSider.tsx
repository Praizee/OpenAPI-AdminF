"use client";

import Image from "next/image";
import logo from "@/assets/logo.svg";
import { useLayoutEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { activeKeys, sidebarData1, sidebarData2 } from "./DashData";
import { CustomMenu as Menu } from "@/lib/AntdComponents";

const DashboardSider = () => {
  const pathName = usePathname();
  const [activePath, setActivePath] = useState("");
  useLayoutEffect(() => {
    setActivePath(activeKeys.filter((value) => pathName.includes(value))[0]);
  }, [pathName]);

  return (
    <div className="drawer-side z-10 ">
      <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
      <aside className="flex flex-col space-y-4 w-[15rem]  h-screen overflow-hidden  shadow-xl bg-white border-r border-r-gray-300 py-2 overflow-y-scroll">
        <Image src={logo} alt="logo" className="mx-auto" />
        <div className=" border border-gray-200 mt-6" />
        <div className=" overflow-y-scroll space-y-5">
          <Menu
            selectedKeys={[activePath]}
            items={sidebarData1}
            className="!space-y-4 !w-full"
            mode="inline"
          />
          <div className=" border border-gray-200 mt-6" />

          <Menu
            selectedKeys={[activePath]}
            items={sidebarData2}
            className="!space-y-4 !w-full"
            mode="inline"
          />
        </div>
      </aside>
    </div>
  );
};

export default DashboardSider;
