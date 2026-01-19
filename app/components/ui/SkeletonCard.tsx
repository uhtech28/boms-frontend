import Skeleton from "./Skeleton";

export default function SkeletonCard() {
  return (
    <div className="bg-white rounded-xl shadow p-6 space-y-3">
      <Skeleton className="h-4 w-1/3" />
      <Skeleton className="h-8 w-2/3" />
    </div>
  );
}

