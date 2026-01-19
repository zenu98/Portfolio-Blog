import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="wrapper flex flex-col w-full min-h-120 gap-8">
      <div className="justify-start">
        <Skeleton className="w-[177px] h-[236px]" />
      </div>

      <div className="pt-6 pb-6 dark:bg-[oklch(0.208_0.042_265.755)] rounded-lg">
        <div className="space-y-6 border-t-4 pt-6 sm:border-t-0 sm:border-l-4 sm:pt-0 sm:pl-6 ">
          <div className="space-y-5">
            <Skeleton className="h-6 w-full" />
            <Skeleton className="h-6 w-4/5" />
          </div>
          <div className="space-y-5">
            <Skeleton className="h-5 w-full" />
            <Skeleton className="h-5 w-full" />
            <Skeleton className="h-5 w-3/4" />
          </div>
        </div>
      </div>

      <div>
        <Skeleton className="h-10 w-40 mb-4" />
        <div className="space-y-4 py-4">
          <div className="space-y-2">
            <Skeleton className="h-6 w-full" />
            <Skeleton className="h-6 w-full" />
            <Skeleton className="h-6 w-full" />
            <Skeleton className="h-6 w-4/5" />
            <Skeleton className="h-6 w-3/5" />
          </div>
        </div>
      </div>

      {/* 학력 + 인적정보 */}
      <div className="flex flex-col gap-8">
        <div className="flex flex-col sm:flex-row gap-4">
          {/* 학력 */}
          <div className="space-y-4 flex-1">
            <Skeleton className="h-8 w-32" /> {/* 제목: 📚 학력 */}
            <div className="border border-gray-200 dark:border-none dark:bg-[oklch(0.208_0.042_265.755)] rounded-lg p-6 space-y-3">
              <Skeleton className="h-6 w-3/4" /> {/* 학교명 */}
              <Skeleton className="h-5 w-1/2" /> {/* 졸업 정보 */}
              <Skeleton className="h-4 w-2/3" /> {/* 위치 */}
            </div>
          </div>

          {/* 인적정보 */}
          <div className="space-y-4 flex-1">
            <Skeleton className="h-8 w-32" /> {/* 제목: 🏢 인적정보 */}
            <div className="border border-gray-200 dark:border-none dark:bg-[oklch(0.208_0.042_265.755)] rounded-lg p-6 space-y-4">
              <div className="space-y-3">
                <Skeleton className="h-5 w-full" />
                <Skeleton className="h-5 w-full" />
                <Skeleton className="h-5 w-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
