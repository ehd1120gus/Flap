import Header from "@/components/header";
import { SidebarHidden } from "@/components/ui/dashboard/sidebarhidden";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-full">
      <div className="pl-14 fixed inset-y-0 w-full z-50">
        <Header />
      </div>
      <div className="h-16 w-16 fixed inset-y-0 z-50 border-b">
        <div className="p-4 boarder-b h-full flex items-center bg-secondary">
          <SidebarHidden />
        </div>
      </div>
      <main className="pt-16 h-full">{children}</main>
    </div>
  );
}
