import { Menu } from "lucide-react";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Sidebar } from "./sidebar";

export const SidebarHidden = () => {
  return (
    <Sheet>
      <SheetTrigger className="hover:opacity-75 transition ">
        <div className="flex h-8 w-8 items-center justify-center  btn-secondary">
          <Menu className="h-5 w-5 " />
        </div>
      </SheetTrigger>
      <SheetContent
        side="left"
        className="p-0 rounded-tr-[20px] rounded-br-[20px] shadow-lg w-[320px]"
      >
        <Sidebar />
      </SheetContent>
    </Sheet>
  );
};
