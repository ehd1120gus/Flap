import { Menu } from "lucide-react";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Sidebar } from "./sidebar";

export const SidebarHidden = () => {
  return (
    <Sheet>
      <SheetTrigger className="hover:opacity-75 transition">
        <div className="flex h-8 w-8 items-center justify-center btn-secondary">
          <Menu className="h-5 w-5 text-neutral-400 " />
        </div>
      </SheetTrigger>
      <SheetContent side="left" className="p-0 bg-secondary">
        <Sidebar />
      </SheetContent>
    </Sheet>
  );
};
