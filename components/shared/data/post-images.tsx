"use client";
import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

const PostImages = ({ images }: { images: string[] }) => {
  const [current, setCurrent] = useState(0);

  const isGif = (url: string) => {
    return url.toLowerCase().endsWith(".gif");
  };
  return (
    <div className="flex flex-col items-center gap-4">
      <Image
        src={images[current]}
        alt="project image"
        width={1000}
        height={1000}
        unoptimized={isGif(images[current])}
        className="w-full max-w-4xl object-contain max-h-[80vh] sm:h-[70vh]"
      />
      <div className="w-full overflow-x-auto sm:overflow-x-visible pb-4 md:pb-0">
        <div className="flex gap-2 justify-start sm:justify-center sm:flex-wrap min-w-max sm:min-w-0 px-4 sm:px-0">
          {images.map((image, index) => (
            <div
              key={image}
              className={cn(
                "relative border cursor-pointer hover:border-orange-600 flex-shrink-0",
                "w-16 h-16 sm:w-20 sm:h-20 md:w-[100px] md:h-[100px]",
                current === index && "border-orange-500"
              )}
              onClick={() => setCurrent(index)}
            >
              <Image
                src={image}
                alt="image"
                fill
                className="object-cover"
                unoptimized={isGif(image)}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PostImages;
