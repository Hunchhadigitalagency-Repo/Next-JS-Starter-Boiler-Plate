"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Dispatch, SetStateAction } from "react";
import { Icons } from "./icons";
import { NavItem } from "@/types/dashboard";

interface DashboardNavProps {
  items: NavItem[];
  setOpen?: Dispatch<SetStateAction<boolean>>;
}

export function DashboardNav({ items, setOpen }: DashboardNavProps) {
  const path = usePathname();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleMenu = (index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  if (!items?.length) {
    return null;
  }

  return (
    <nav className="grid items-start gap-2">
      {items.map((item, index) => {
        const Icon = Icons[item.icon || "arrowRight"];
        return (
          <div key={index}>
            {item.items ? (
              // Render dropdown menu
              <div className="relative group">
                <span
                  className={cn(
                    "flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground cursor-pointer",
                    path === item.href ? "bg-accent" : "transparent",
                    item.disabled && "cursor-not-allowed opacity-80"
                  )}
                  onClick={() => {
                    if (setOpen) setOpen(false);
                    toggleMenu(index);
                  }}
                >
                  <Icon className="mr-2 h-4 w-4" />
                  <div className="flex justify-between w-full">
                    <span>{item.title}</span>
                    {openIndex === index ? (
                      <span className="material-symbols-outlined">
                        arrow_drop_up
                      </span>
                    ) : (
                      <span className="material-symbols-outlined">
                        arrow_drop_down
                      </span>
                    )}
                  </div>
                </span>
                <div
                  className={cn(
                    "overflow-hidden transition-all duration-300",
                    openIndex === index ? "block" : "hidden"
                  )}
                >
                  {item.items.map((subItem, subIndex) => (
                    <Link key={subIndex} href={subItem.href || "/"} passHref>
                      <span
                        className={cn(
                          "block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer",
                          path === subItem.href
                            ? "bg-accent text-accent-foreground"
                            : ""
                        )}
                        onClick={() => {
                          if (setOpen) setOpen(false);
                        }}
                      >
                        {subItem.title}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              // Render regular link
              item.href && (
                <Link
                  key={index}
                  href={item.disabled ? "/" : item.href}
                  onClick={() => {
                    if (setOpen) setOpen(false);
                  }}
                >
                  <span
                    className={cn(
                      "flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground cursor-pointer",
                      path === item.href ? "bg-accent" : "transparent",
                      item.disabled && "cursor-not-allowed opacity-80"
                    )}
                  >
                    <Icon className="mr-2 h-4 w-4" />
                    <span>{item.title}</span>
                  </span>
                </Link>
              )
            )}
          </div>
        );
      })}
    </nav>
  );
}
