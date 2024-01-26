import { cn } from "@/lib/utils";
import FlapLogo from "@/components/flaplogo";
import { SidebarRoutes } from "./sidebar-routes";
import { FcMindMap } from "react-icons/fc";

import { Montserrat } from "next/font/google";
const font = Montserrat({ weight: "600", subsets: ["latin"] });

export const Sidebar = () => {
  return (
    <div className="h-full flex flex-col overflow-y-auto shadow-sm bg-transparent w">
      <div className="p-3">
        <FlapLogo />
        {/* <Logo /> */}
        <h1
          className={cn(
            "text-2xl flex font-bold text-black gap-x-1 items-center",
            font.className
          )}
        >
          {/* <div className="truncate">Sknow</div> */}
        </h1>
      </div>
      <div className="flex flex-col w-ful bg-red">
        <SidebarRoutes />
      </div>
    </div>
  );
};
