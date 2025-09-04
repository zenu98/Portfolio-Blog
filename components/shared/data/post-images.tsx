"use client";
import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

const PostImages = ({ images }: { images: string[] }) => {
  const [current, setCurrent] = useState(0);
  return (
    <div className="flex flex-col items-center gap-2">
      <Image
        src={images[current]}
        alt="project image"
        width={1000}
        height={1000}
        className="w-9/10 object-contain max-h-[70vh]"
      />
      <div className="flex gap-2 justify-center">
        {images.map((image, index) => (
          <div
            key={image}
            className={cn(
              "relative bg-indigo-400 w-[100px] h-[100px] border",
              "cursor-pointer hover:border-orange-600",
              current === index && "border-orange-500"
            )}
            onClick={() => setCurrent(index)}
          >
            <Image src={image} alt="image" fill className="object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostImages;
