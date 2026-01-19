"use client";

import { useState } from "react";
import ThemeToggle from "@/app/components/ui/ThemeToggle";

export default function Navbar({
  toggleSidebar,
}: {
  toggleSidebar: () => void;
}) {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar flex items-center justify-between px-6">
      {/* Left */}
      <div className="flex items-center gap-4 ml-4">
        <button
          onClick={toggleSidebar}
          className="md:hidden text-xl hover:opacity-80 transition"
        >
          ☰
        </button>
        <h1 className="text-lg font-semibold tracking-wide ml-4">
          Admin Dashboard
        </h1>
      </div>

      {/* Right */}
      <div className="flex items-center gap-4">
        {/* Bell */}
        <div className="relative">
          <button
            onClick={() => setOpen(!open)}
            className="px-3 py-2 rounded-lg 
            bg-cyan-400/20 text-cyan-300
            shadow-[0_0_12px_rgba(0,180,255,0.6)]
            hover:shadow-[0_0_20px_rgba(0,180,255,1)]
            transition"
          >
            🔔
          </button>

          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">
            3
          </span>

          {open && (
            <div
              className="absolute right-0 mt-4 w-64 
              bg-[#020617] text-white 
              rounded-xl shadow-2xl 
              border border-cyan-400/20 
              p-4 z-50"
            >
              <h3 className="font-semibold mb-3">Notifications</h3>
              <div className="space-y-2 text-sm">
                <div className="p-2 rounded hover:bg-cyan-400/10 cursor-pointer">
                  🔹 New user registered
                </div>
                <div className="p-2 rounded hover:bg-cyan-400/10 cursor-pointer">
                  ⚠️ 2 tasks overdue
                </div>
                <div className="p-2 rounded hover:bg-cyan-400/10 cursor-pointer">
                  📊 Monthly report ready
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Theme */}
        <div
          className="px-3 py-2 rounded-lg
          bg-cyan-400/20 text-cyan-300
          shadow-[0_0_12px_rgba(0,180,255,0.6)]
          hover:shadow-[0_0_20px_rgba(0,180,255,1)]
          transition"
        >
          <ThemeToggle />
        </div>

        <span className="font-medium opacity-80">Utkarsh</span>

        {/* Logout */}
        <button
          className="px-4 py-2 rounded-md text-black font-semibold
          bg-gradient-to-r from-cyan-400 to-blue-500
          shadow-[0_0_14px_rgba(0,180,255,0.8)]
          hover:shadow-[0_0_24px_rgba(0,180,255,1)]
          transition"
        >
          Logout
        </button>
      </div>
    </header>
  );
}
