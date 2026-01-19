export default function Card({
  title,
  children,
}: {
  title?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-white rounded-xl shadow p-6">
      {title && (
        <h2 className="text-lg font-bold text-gray-900 mb-2">{title}</h2>
      )}
      {children}
    </div>
  );
}
