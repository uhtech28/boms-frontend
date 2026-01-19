"use client";

import AuthGuard from "../../components/AuthGuard";
import { getUser } from "../../utils/auth";

export default function ClientDashboard() {
  const user = getUser();

  return (
    <AuthGuard role="client">
      <div className="space-y-8">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            Client Dashboard
          </h1>
          <p className="text-gray-700 mt-1">
            Welcome, <span className="font-semibold">{user?.name}</span>
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <StatCard title="Total Requests" value="12" />
          <StatCard title="In Progress" value="4" />
          <StatCard title="Completed" value="7" />
          <StatCard title="Overdue" value="1" danger />
        </div>

        {/* Requests Table */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            My Requests
          </h2>

          <table className="w-full">
            <thead className="bg-gray-200">
              <tr>
                <th className="text-left px-4 py-3 text-gray-900 font-bold">
                  Request
                </th>
                <th className="text-left px-4 py-3 text-gray-900 font-bold">
                  Status
                </th>
                <th className="text-left px-4 py-3 text-gray-900 font-bold">
                  Submitted
                </th>
                <th className="text-left px-4 py-3 text-gray-900 font-bold">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              <RequestRow
                name="Website Update"
                status="In Progress"
                date="Jan 12, 2026"
              />
              <RequestRow
                name="Invoice Correction"
                status="Completed"
                date="Jan 05, 2026"
              />
              <RequestRow
                name="Bug Report"
                status="Overdue"
                date="Dec 28, 2025"
                danger
              />
            </tbody>
          </table>
        </div>

        {/* Downloads */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            Downloads
          </h2>

          <ul className="space-y-3">
            <DownloadItem name="Invoice_Jan_2026.pdf" />
            <DownloadItem name="Project_Report.pdf" />
            <DownloadItem name="Service_Agreement.pdf" />
          </ul>
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

function RequestRow({
  name,
  status,
  date,
  danger,
}: {
  name: string;
  status: string;
  date: string;
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
      <td className="px-4 py-3 text-gray-800">{date}</td>
      <td className="px-4 py-3">
        <button className="bg-black text-white px-3 py-1 rounded-md hover:bg-gray-900">
          View
        </button>
      </td>
    </tr>
  );
}

function DownloadItem({ name }: { name: string }) {
  return (
    <li className="flex justify-between items-center border px-4 py-3 rounded-md">
      <span className="text-gray-900 font-medium">{name}</span>
      <button className="bg-black text-white px-3 py-1 rounded-md hover:bg-gray-900">
        Download
      </button>
    </li>
  );
}
