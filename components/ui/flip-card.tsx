"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface FlipCardProps {
  className?: string;
  front: React.ReactNode; // 이미지
  back: React.ReactNode; // 내용
}

function FlipCard({ className, front, back }: FlipCardProps) {
  return (
    <div className={cn("group w-full h-full perspective-[1000px]", className)}>
      <div className="relative w-full h-full transition-transform duration-700 transform-style-3d group-hover:[transform:rotateY(180deg)]">
        {/* 앞면 - 이미지 */}
        <div className="absolute inset-0 backface-hidden rounded-xl overflow-hidden">
          {front}
        </div>
        {/* 뒷면 - 내용 */}
        <div className="absolute inset-0 backface-hidden rounded-xl overflow-hidden [transform:rotateY(180deg)]">
          {back}
        </div>
      </div>
    </div>
  );
}

export { FlipCard };
