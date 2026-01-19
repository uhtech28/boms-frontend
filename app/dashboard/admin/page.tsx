"use client";

import { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const revenueData = [
  { month: "Jan", revenue: 4000 },
  { month: "Feb", revenue: 3000 },
  { month: "Mar", revenue: 5000 },
  { month: "Apr", revenue: 4200 },
  { month: "May", revenue: 6200 },
  { month: "Jun", revenue: 7200 },
];

const userData = [
  { name: "Mon", users: 40 },
  { name: "Tue", users: 30 },
  { name: "Wed", users: 50 },
  { name: "Thu", users: 45 },
  { name: "Fri", users: 60 },
  { name: "Sat", users: 80 },
  { name: "Sun", users: 70 },
];

const taskData = [
  { name: "Completed", value: 60 },
  { name: "Pending", value: 25 },
  { name: "Overdue", value: 15 },
];

const COLORS = ["#00d4ff", "#ffaa00", "#ff4d4f"];

export default function AdminDashboard() {
  return (
    <div className="page-enter space-y-10">
      <h2 className="text-xl font-medium opacity-80 mb-6 ml-4">
        Dashboard Overview
      </h2>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <AnimatedCard title="Users" value={124} icon="👥" />
        <AnimatedCard title="Tasks" value={560} icon="📋" />
        <AnimatedCard title="Overdue" value={12} icon="⚠️" danger />
        <AnimatedCard title="Revenue" value={8420} icon="💰" prefix="$" />
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Revenue */}
        <div className="dashboard-card p-6">
          <h3 className="mb-4 opacity-80">Revenue Growth</h3>
          <ResponsiveContainer width="100%" height={260}>
            <LineChart data={revenueData}>
              <XAxis dataKey="month" stroke="#aaa" />
              <YAxis stroke="#aaa" />
              <Tooltip contentStyle={{ background: "#020617", border: "1px solid #00d4ff" }} />
              <Line
                type="monotone"
                dataKey="revenue"
                stroke="#00d4ff"
                strokeWidth={3}
                dot={{ r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Users */}
        <div className="dashboard-card p-6">
          <h3 className="mb-4 opacity-80">New Users</h3>
          <ResponsiveContainer width="100%" height={260}>
            <BarChart data={userData}>
              <XAxis dataKey="name" stroke="#aaa" />
              <YAxis stroke="#aaa" />
              <Tooltip contentStyle={{ background: "#020617", border: "1px solid #00d4ff" }} />
              <Bar dataKey="users" fill="#00d4ff" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Tasks */}
        <div className="dashboard-card p-6 lg:col-span-2">
          <h3 className="mb-4 opacity-80">Task Distribution</h3>
          <ResponsiveContainer width="100%" height={260}>
            <PieChart>
              <Pie
                data={taskData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={90}
              >
                {taskData.map((_, index) => (
                  <Cell key={index} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip contentStyle={{ background: "#020617", border: "1px solid #00d4ff" }} />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

/* ========================= */

function AnimatedCard({
  title,
  value,
  icon,
  danger,
  prefix = "",
}: {
  title: string;
  value: number;
  icon: string;
  danger?: boolean;
  prefix?: string;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 700;
    const step = Math.max(1, Math.floor(value / 30));

    const interval = setInterval(() => {
      start += step;
      if (start >= value) {
        start = value;
        clearInterval(interval);
      }
      setCount(start);
    }, duration / 30);

    return () => clearInterval(interval);
  }, [value]);

  return (
    <div
      className={`dashboard-card p-6 rounded-xl
      bg-gradient-to-br from-[#0a1020] to-[#05070f]
      border border-cyan-400/30
      shadow-[0_0_20px_rgba(0,180,255,0.2)]
      hover:shadow-[0_0_40px_rgba(0,180,255,0.4)]
      hover:-translate-y-1
      transition-all duration-300
      ${danger ? "animate-pulse" : ""}`}
    >
      <div className="flex items-center justify-between mb-3">
        <h4 className="text-sm uppercase tracking-wide opacity-70">
          {title}
        </h4>

        <span className="text-2xl shadow-[0_0_12px_rgba(0,180,255,0.8)]">
          {icon}
        </span>
      </div>

      <p
        className={`text-3xl font-bold ${
          danger ? "text-red-400" : "text-white"
        }`}
      >
        {prefix}
        {count.toLocaleString()}
      </p>
    </div>
  );
}
