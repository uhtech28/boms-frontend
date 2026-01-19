"use client";

export default function Toast({
  message,
  type = "success",
  onClose,
}: {
  message: string;
  type?: "success" | "error" | "info";
  onClose: () => void;
}) {
  const colors = {
    success: "bg-green-600",
    error: "bg-red-600",
    info: "bg-blue-600",
  };

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 px-5 py-3 rounded-lg shadow-lg text-white flex items-center gap-3 ${colors[type]}`}
    >
      <span>{message}</span>
      <button
        onClick={onClose}
        className="ml-3 text-white/80 hover:text-white"
      >
        ✕
      </button>
    </div>
  );
}
