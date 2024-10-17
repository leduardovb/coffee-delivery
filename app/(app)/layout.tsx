import { Header } from "@/components/header";

export default function AppLayout({ children }: React.PropsWithChildren) {
  return (
    <div className="flex h-full flex-col">
      <Header />
      <main>{children}</main>
    </div>
  );
}
