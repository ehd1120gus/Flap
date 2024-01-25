import Header from "@/components/header";
import { SidebarHidden } from "@/components/ui/dashboard/sidebarhidden";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-full">
      <div className="md:pl-16 fixed inset-y-0 w-full z-50">
        <Header />
      </div>
      <div className=" h-16 w-16 fixed inset-y-0 z-50">
        <div className="p-4 boarder-b h-full flex items-center bg-white shadow-sm">
          <SidebarHidden />
        </div>
      </div>
      <main className="md:pl-56 pt-[80px] h-full">{children}</main>
    </div>
  );
}
