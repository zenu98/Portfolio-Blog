// components/PostImagesSkeleton.tsx
import { Skeleton } from "@/components/ui/skeleton";

const PostImagesSkeleton = () => {
  return (
    <div className="wrapper flex flex-col items-center gap-4">
      <Skeleton className="w-full max-w-4xl h-[60vh] " />

      <div className="w-full overflow-x-auto sm:overflow-x-visible pb-4 md:pb-0">
        <div className="flex gap-2 justify-start sm:justify-center sm:flex-wrap min-w-max sm:min-w-0 px-4 sm:px-0">
          {Array.from({ length: 4 }).map((_, index) => (
            <Skeleton
              key={index}
              className="w-16 h-16 sm:w-20 sm:h-20 md:w-[100px] md:h-[100px] flex-shrink-0 "
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PostImagesSkeleton;
