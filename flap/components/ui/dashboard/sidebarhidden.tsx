import { Menu } from "lucide-react";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Sidebar } from "./sidebar";

export const SidebarHidden = () => {
  return (
    <Sheet>
      <SheetTrigger className="hover:opacity-75 transition">
        <div className="flex h-8 w-8 bg-transparent rounded-md flex-col border border-neutral-700 hover:border-neutral-400 cursor-pointer items-center justify-center">
          <Menu className="h-5 w-5 text-neutral-400" />
        </div>
      </SheetTrigger>
      <SheetContent side="left" className="p-0 bg-white">
        <Sidebar />
      </SheetContent>
    </Sheet>
  );
};
