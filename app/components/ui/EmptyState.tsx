export default function EmptyState({
  title = "No data",
  description = "Nothing to show here.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <div className="text-center py-12">
      <p className="text-xl font-bold text-gray-900">{title}</p>
      <p className="text-gray-700 mt-1">{description}</p>
    </div>
  );
}
