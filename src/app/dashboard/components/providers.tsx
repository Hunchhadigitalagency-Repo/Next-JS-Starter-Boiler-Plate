"use client";
import React from "react";
import ThemeProvider from "./ThemeToggle/theme-provider";
export default function UIProviders({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        {children}
      </ThemeProvider>
    </>
  );
}
