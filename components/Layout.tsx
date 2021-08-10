import { ReactNode } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar.tsx";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
