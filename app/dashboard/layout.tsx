"use client";

import { useState } from "react";
import Sidebar from "@/app/components/Sidebar";
import Navbar from "@/app/components/Navbar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(true);

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside
        className={`sidebar transition-transform duration-300
        ${open ? "translate-x-0" : "-translate-x-full"}
        md:translate-x-0`}
      >
        <Sidebar />
      </aside>

      {/* Overlay (mobile only) */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-30 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Main */}
      <div
        className={`flex-1 flex flex-col transition-all duration-300
        ${open ? "md:ml-[256px]" : "md:ml-0"}`}
      >
        <Navbar toggleSidebar={() => setOpen(!open)} />
        <main className="p-8">{children}</main>
      </div>
    </div>
  );
}
