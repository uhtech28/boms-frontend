"use client";

import { useState } from "react";

type Notification = {
  id: number;
  title: string;
  message: string;
  read: boolean;
};

export default function NotificationBell() {
  const [open, setOpen] = useState(false);

  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: 1,
      title: "Task Assigned",
      message: "You have a new task.",
      read: false,
    },
    {
      id: 2,
      title: "Report Ready",
      message: "Your report is available.",
      read: false,
    },
    {
      id: 3,
      title: "System Update",
      message: "System maintenance tonight.",
      read: true,
    },
  ]);

  const unreadCount = notifications.filter((n) => !n.read).length;

  const markAllRead = () => {
    setNotifications(notifications.map((n) => ({ ...n, read: true })));
  };

  return (
    <div className="relative">
      {/* Bell */}
      <button
        onClick={() => setOpen(!open)}
        className="relative text-xl"
      >
        🔔
        {unreadCount > 0 && (
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-red-600 rounded-full"></span>
        )}
      </button>

      {/* Dropdown */}
      {open && (
        <div className="absolute right-0 mt-3 w-80 bg-white shadow-lg rounded-lg overflow-hidden z-50">
          <div className="flex justify-between items-center px-4 py-3 border-b">
            <p className="font-bold text-gray-900">Notifications</p>
            <button
              onClick={markAllRead}
              className="text-sm text-blue-600 font-medium"
            >
              Mark all read
            </button>
          </div>

          <div className="max-h-72 overflow-y-auto">
            {notifications.map((n) => (
              <div
                key={n.id}
                className={`px-4 py-3 border-b ${
                  n.read ? "bg-white" : "bg-gray-100"
                }`}
              >
                <p className="font-semibold text-gray-900">
                  {n.title}
                </p>
                <p className="text-sm text-gray-700">
                  {n.message}
                </p>
              </div>
            ))}
          </div>

          {notifications.length === 0 && (
            <div className="p-6 text-center text-gray-700">
              No notifications
            </div>
          )}
        </div>
      )}
    </div>
  );
}
