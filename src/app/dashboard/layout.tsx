"use client";
import isAuth from "@/lib/actions/CheckAuth";
import { sidebarLinks } from "@/lib/staticData/sideBarDasboardArray";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

const DashboardLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(true);
  const pathname = usePathname();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex h-screen ">
      {/* Sidebar */}
      <div
        className={` bg-slate-700 relative w-60 transition-transform duration-300 ${
          isSidebarOpen ? "block " : "hidden"
        }`}
      >
        <span
          className={`material-symbols-outlined cursor-pointer absolute right-5 top-2 text-white`}
          onClick={toggleSidebar}
        >
          close
        </span>
        <nav className="p-4 mt-10">
          <ul className="flex flex-col space-y-2">
            {/* Map over sidebarLinks array to create links */}
            {sidebarLinks.map((link, index) => (
              <li key={index}>
                <Link
                  href={link.path}
                  className={`cursor-pointer hover:text-gray-300 ${
                    pathname === link.path.toLowerCase()
                      ? "font-semibold text-white"
                      : ""
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Main Content */}
      <div className={`flex flex-col flex-1 `}>
        {/* Header */}
        <header className="bg-gray-800 text-white py-4 px-6 flex justify-between items-center z-50">
          <div className="flex items-center gap-2">
            {!isSidebarOpen && (
              <span
                className={`material-symbols-outlined cursor-pointer`}
                onClick={toggleSidebar}
              >
                menu
              </span>
            )}

            <h1 className="text-lg font-semibold">Dashboard</h1>
          </div>
          <div className="hidden md:block">
            <p>Welcome, User!</p>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 p-6 overflow-y-auto">{children}</main>

        {/* Footer
        <footer className="bg-gray-800 text-white py-4 px-6 flex justify-between items-center">
          <p>© {new Date().getFullYear()} Dashboard App</p>
          <p>All Rights Reserved.</p>
        </footer> */}
      </div>
    </div>
  );
};

export default isAuth(DashboardLayout);
