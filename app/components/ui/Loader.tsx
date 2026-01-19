export default function Loader({ label = "Loading..." }: { label?: string }) {
  return (
    <div className="flex flex-col items-center justify-center py-10">
      <div className="w-8 h-8 border-4 border-gray-300 border-t-black rounded-full animate-spin"></div>
      <p className="mt-3 text-gray-900 font-medium">{label}</p>
    </div>
  );
}
