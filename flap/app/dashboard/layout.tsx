import Header from "@/components/header";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col h-screen w-full">
      <div className="w-full">
        <Header />
      </div>
      <main className="">{children}</main>
    </div>
  );
}
