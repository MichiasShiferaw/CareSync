"use client";
import React, { FC, ReactNode, useEffect, useState } from "react";
import Sidebar from "../_components/dashboard/navigation/sidebar";
import MobileNav from "../_components/dashboard/navigation/mobileNav";
import Header from "../_components/dashboard/header";

interface LayoutProps {
  children: ReactNode;
  className?: string;
}

const Layout: FC<LayoutProps> = ({ children, className = "" }) => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Adjust the breakpoint as needed
    };

    handleResize(); // Set initial value
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={`flex flex-col h-screen md:flex-row ${className}`}>
      {isMobile ? <MobileNav /> : <Sidebar />}

      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        {/* <div className="hidden lg:block"><Breadcrumb/></div> */}
        <main className="my-3 mx-2 bg-white rounded-md p-4 flex-1 overflow-x-hidden overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;