"use client";
import Link from "next/link";
import useDrawer from "@/hooks/useDrawer";
import { navArray } from "@/lib/staticData/navArray";

const Header = () => {
  const { isOpen, toggleDrawer, drawerRef } = useDrawer();

  return (
    <header className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex justify-between items-center relative">
        <div className="md:hidden ml-8">
          <span className="material-symbols-outlined" onClick={toggleDrawer}>
            menu
          </span>
        </div>
        <div
          ref={drawerRef}
          className={`fixed top-0 left-0 h-full w-72 bg-gray-800 text-white transition-transform duration-300 transform ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <span
            className="material-symbols-outlined absolute right-10 top-4"
            onClick={toggleDrawer}
          >
            close
          </span>
          <nav className="p-4">
            <ul className="flex flex-col space-y-2">
              {navArray.map((item, index) => (
                <li key={index}>
                  <Link href={item.link}>
                    <span className="cursor-pointer hover:text-gray-300">
                      {item.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="hidden md:flex justify-between w-full items-center">
          {/* Right side of navbar */}

          <Link href="/">
            <span className="text-lg font-semibold cursor-pointer">
              Next.js Starter
            </span>
          </Link>
          <nav>
            <ul className="flex space-x-4">
              {navArray.map((item, index) => (
                <li key={index}>
                  <Link href={item.link}>
                    <span className="hover:text-gray-300">{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
