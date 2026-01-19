"use client";

import { useState } from "react";
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
  { month: "Jan", revenue: 4200 },
  { month: "Feb", revenue: 3800 },
  { month: "Mar", revenue: 5100 },
  { month: "Apr", revenue: 4600 },
  { month: "May", revenue: 6200 },
  { month: "Jun", revenue: 7200 },
];

const userData = [
  { name: "Mon", users: 30 },
  { name: "Tue", users: 45 },
  { name: "Wed", users: 60 },
  { name: "Thu", users: 55 },
  { name: "Fri", users: 70 },
  { name: "Sat", users: 90 },
  { name: "Sun", users: 80 },
];

const taskData = [
  { name: "Completed", value: 65 },
  { name: "Pending", value: 20 },
  { name: "Overdue", value: 15 },
];

const COLORS = ["#38bdf8", "#22d3ee", "#f87171"];

export default function ReportsPage() {
  const [range, setRange] = useState("7d");

  return (
    <div className="page-enter space-y-10">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h2 className="text-2xl font-semibold">Reports & Analytics</h2>
          <p className="opacity-70">Business performance overview</p>
        </div>

        {/* Filters */}
        <div className="flex gap-3">
          <select
            className="input w-40"
            value={range}
            onChange={(e) => setRange(e.target.value)}
          >
            <option value="7d">Last 7 Days</option>
            <option value="30d">Last 30 Days</option>
            <option value="90d">Last 3 Months</option>
            <option value="1y">Last 1 Year</option>
          </select>

          <button className="btn">Export</button>
        </div>
      </div>

      {/* Metrics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card title="Revenue" value="$12,480" icon="💰" />
        <Card title="New Users" value="48" icon="👥" />
        <Card title="Tasks Done" value="1,204" icon="📋" />
        <Card title="Overdue" value="12" icon="⚠️" danger />
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Revenue Chart */}
        <Panel title="Monthly Revenue">
          <ResponsiveContainer width="100%" height={260}>
            <LineChart data={revenueData}>
              <XAxis dataKey="month" stroke="#94a3b8" />
              <YAxis stroke="#94a3b8" />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="revenue"
                stroke="#38bdf8"
                strokeWidth={3}
              />
            </LineChart>
          </ResponsiveContainer>
        </Panel>

        {/* User Growth */}
        <Panel title="User Growth">
          <ResponsiveContainer width="100%" height={260}>
            <BarChart data={userData}>
              <XAxis dataKey="name" stroke="#94a3b8" />
              <YAxis stroke="#94a3b8" />
              <Tooltip />
              <Bar dataKey="users" fill="#22d3ee" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </Panel>
      </div>

      {/* Task Distribution */}
      <Panel title="Task Distribution">
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={taskData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={100}
            >
              {taskData.map((_, index) => (
                <Cell
                  key={index}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </Panel>
    </div>
  );
}

/* ---------------------------------- */

function Card({
  title,
  value,
  icon,
  danger,
}: {
  title: string;
  value: string;
  icon: string;
  danger?: boolean;
}) {
  return (
    <div className="dashboard-card card-animate">
      <div className="flex items-center justify-between mb-3">
        <h4 className="uppercase tracking-wide opacity-70 text-sm">
          {title}
        </h4>
        <span className="text-2xl">{icon}</span>
      </div>

      <p className={`text-3xl font-bold ${danger ? "text-red-400" : ""}`}>
        {value}
      </p>
    </div>
  );
}

function Panel({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="dashboard-card">
      <h3 className="mb-4 opacity-80">{title}</h3>
      {children}
    </div>
  );
}
