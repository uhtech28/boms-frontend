"use client";

import { useEffect, useState } from "react";
import AuthGuard from "../../../components/AuthGuard";
import SkeletonTable from "../../../components/ui/SkeletonTable";
import EmptyState from "../../../components/ui/EmptyState";
import { apiRequest } from "../../../utils/api";

type User = {
  id: number;
  name: string;
  email: string;
  role: "Admin" | "Staff" | "Client";
};

export default function UsersPage() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const data = await apiRequest("/users");
        setUsers(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const filteredUsers = users.filter(
    (u) =>
      u.name.toLowerCase().includes(search.toLowerCase()) ||
      u.email.toLowerCase().includes(search.toLowerCase()) ||
      u.role.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <AuthGuard role="admin">
      <div className="space-y-6">
        <h1 className="text-3xl font-bold text-gray-900">Users</h1>

        <input
          type="text"
          placeholder="Search users..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full px-4 py-2 border-2 border-gray-400 rounded-md text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-black"
        />

        {loading && <SkeletonTable rows={6} />}
        {error && <EmptyState title="Error" description={error} />}

        {!loading && !error && (
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <table className="w-full">
              <thead className="bg-gray-200">
                <tr>
                  <th className="px-6 py-3 text-left text-gray-900 font-bold">
                    Name
                  </th>
                  <th className="px-6 py-3 text-left text-gray-900 font-bold">
                    Email
                  </th>
                  <th className="px-6 py-3 text-left text-gray-900 font-bold">
                    Role
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredUsers.map((u, i) => (
                  <tr
                    key={u.id}
                    className={`${i % 2 === 0 ? "bg-white" : "bg-gray-50"} border-t`}
                  >
                    <td className="px-6 py-4 text-gray-900 font-medium">
                      {u.name}
                    </td>
                    <td className="px-6 py-4 text-gray-800">
                      {u.email}
                    </td>
                    <td className="px-6 py-4 text-gray-900 font-semibold">
                      {u.role}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {filteredUsers.length === 0 && (
              <EmptyState
                title="No users found"
                description="Try adjusting your search."
              />
            )}
          </div>
        )}
      </div>
    </AuthGuard>
  );
}
