import { Card } from "@/components/ui/card";
import { RefreshCcw, ShoppingCart } from "lucide-react";
import { Outlet } from "react-router-dom";

export default function PublicLayout() {
  return (
    <div className="flex h-screen items-center justify-center">
      <Card className="flex h-3/4 w-3/4 md:w-2/3">
        <aside className="hidden flex-1 items-center justify-center border-r bg-primary/5 md:flex">
          <ShoppingCart className="size-1/2 -rotate-12 text-primary" />
        </aside>
        <main className="flex-1 p-4 lg:px-12 lg:py-10">
          <Outlet />
        </main>
      </Card>
    </div>
  );
}
