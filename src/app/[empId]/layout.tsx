"use client";
import { Outlet } from "react-router-dom";
import React, { useState } from "react";
import Sidebar from "../_components/dashboard/navigation/sidebar";
import MobileNav from "../_components/dashboard/navigation/mobileNav";
import Header from "../_components/dashboard/header";
import Link from "next/link";
import { ChevronDown } from "../_components/icons/icons";
import Breadcrumb from "../_components/breadcrumb/breadcrumb";

const Layout = ({ children, className = "" }) => {
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
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
