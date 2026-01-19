"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();

  const linkClass = (path: string) =>
    `sidebar-link ${pathname === path ? "active" : ""}`;

  return (
    <aside className="sidebar p-6 flex flex-col gap-8">
      <div>
        <h1 className="text-2xl font-bold tracking-wide">BOMS</h1>
        <p className="text-sm opacity-60">Admin Panel</p>
      </div>

      <nav className="flex flex-col gap-3">
        <Link href="/dashboard/admin" className={linkClass("/dashboard/admin")}>
          <span className="text-xl">🏠</span>
          <span>Dashboard</span>
        </Link>

        <Link
          href="/dashboard/admin/users"
          className={linkClass("/dashboard/admin/users")}
        >
          <span className="text-xl">👥</span>
          <span>Users</span>
        </Link>

        <Link
          href="/dashboard/admin/reports"
          className={linkClass("/dashboard/admin/reports")}
        >
          <span className="text-xl">📄</span>
          <span>Reports</span>
        </Link>
      </nav>
    </aside>
  );
}
