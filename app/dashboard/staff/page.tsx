"use client";

import AuthGuard from "../../components/AuthGuard";
import { getUser } from "../../utils/auth";

export default function StaffDashboard() {
  const user = getUser();

  return (
    <AuthGuard role="staff">
      <div className="space-y-8">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            Staff Dashboard
          </h1>
          <p className="text-gray-700 mt-1">
            Welcome, <span className="font-semibold">{user?.name}</span>
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <StatCard title="Assigned Tasks" value="18" />
          <StatCard title="In Progress" value="6" />
          <StatCard title="Completed" value="9" />
          <StatCard title="Overdue" value="3" danger />
        </div>

        {/* Task List */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            My Tasks
          </h2>

          <table className="w-full">
            <thead className="bg-gray-200">
              <tr>
                <th className="text-left px-4 py-3 text-gray-900 font-bold">
                  Task
                </th>
                <th className="text-left px-4 py-3 text-gray-900 font-bold">
                  Status
                </th>
                <th className="text-left px-4 py-3 text-gray-900 font-bold">
                  Deadline
                </th>
                <th className="text-left px-4 py-3 text-gray-900 font-bold">
                  Priority
                </th>
              </tr>
            </thead>
            <tbody>
              <TaskRow
                name="Prepare monthly report"
                status="In Progress"
                deadline="Jan 20, 2026"
                priority="High"
              />
              <TaskRow
                name="Client onboarding"
                status="Completed"
                deadline="Jan 15, 2026"
                priority="Medium"
              />
              <TaskRow
                name="Bug fixing"
                status="Overdue"
                deadline="Jan 10, 2026"
                priority="High"
                danger
              />
            </tbody>
          </table>
        </div>
      </div>
    </AuthGuard>
  );
}

function StatCard({
  title,
  value,
  danger,
}: {
  title: string;
  value: string;
  danger?: boolean;
}) {
  return (
    <div className="bg-white rounded-xl p-6 shadow">
      <p className="text-gray-700 font-medium">{title}</p>
      <h3
        className={`text-3xl font-bold mt-2 ${
          danger ? "text-red-600" : "text-gray-900"
        }`}
      >
        {value}
      </h3>
    </div>
  );
}

function TaskRow({
  name,
  status,
  deadline,
  priority,
  danger,
}: {
  name: string;
  status: string;
  deadline: string;
  priority: string;
  danger?: boolean;
}) {
  return (
    <tr className={`border-t hover:bg-gray-100 ${danger ? "bg-red-50" : ""}`}>
      <td className="px-4 py-3 text-gray-900 font-medium">{name}</td>
      <td
        className={`px-4 py-3 font-semibold ${
          status === "Completed"
            ? "text-green-600"
            : status === "Overdue"
            ? "text-red-600"
            : "text-gray-900"
        }`}
      >
        {status}
      </td>
      <td className="px-4 py-3 text-gray-800">{deadline}</td>
      <td
        className={`px-4 py-3 font-semibold ${
          priority === "High"
            ? "text-red-600"
            : priority === "Medium"
            ? "text-yellow-600"
            : "text-gray-900"
        }`}
      >
        {priority}
      </td>
    </tr>
  );
}
