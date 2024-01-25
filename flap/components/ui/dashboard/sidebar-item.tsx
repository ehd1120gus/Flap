"use client";

import { LucideIcon } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

import { cn } from "@/lib/utils";

interface SidebarItemProps {
  icon: LucideIcon;
  label: string;
  href: string;
}

export const SidebarItem = ({ icon: Icon, label, href }: SidebarItemProps) => {
  const pathname = usePathname();
  const router = useRouter();

  const isActive =
    (pathname === "/" && href === "/") ||
    pathname === href ||
    pathname?.startsWith(`${href}/`);

  const onClick = () => {
    router.push(href);
  };

  return (
    <div className="flex">
      <span
        className={cn(
          "rounded-sm opacity-0 border-2 ml-2 border-sky-700 h-full inline-block",
          isActive && "opacity-100"
        )}
      />
      <span className="inline-block h-full justify-center w-full mr-6">
        <button
          onClick={onClick}
          type="button"
          className={cn(
            "flex w-full items-center gap-x-2 text-sm font-md pl-6 mx-2 btn-invisible",
            isActive &&
              "text-sky-700 bg-sky-200/20 hover:bg-sky-200/20 hover:text-sky-700"
          )}
        >
          <div className="flex items-center gap-x-2 py-2">
            <Icon
              size={15}
              className={cn("text-slate-500", isActive && "text-sky-700")}
            />
            {label}
          </div>
        </button>
      </span>
    </div>
  );
};
