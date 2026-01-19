export function BarChart() {
  const data = [40, 70, 55, 90, 60];

  return (
    <div className="flex items-end gap-3 h-40 mt-6">
      {data.map((value, i) => (
        <div
          key={i}
          className="bg-black w-8 rounded-t-md"
          style={{ height: `${value}%` }}
        />
      ))}
    </div>
  );
}

export function LineChart() {
  return (
    <div className="mt-6 h-40 flex items-center justify-center border border-gray-300 rounded-md text-gray-900 font-semibold">
      Line Chart Placeholder
    </div>
  );
}
