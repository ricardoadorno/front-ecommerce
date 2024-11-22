import Footer from "@/components/sections/footer";
import Navbar from "@/components/sections/navbar";
import { Outlet } from "react-router-dom";

export default function DefaultLayout() {
  return (
    <div className="container relative mx-auto min-h-screen max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
      <Navbar />
      <main >
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
