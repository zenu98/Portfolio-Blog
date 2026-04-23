import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import ProductPrice from "./data-price";
import { Product, Project } from "@/types";
import { Badge } from "@/components/ui/badge";

const DataCard = ({ data }: { data: Project }) => {
  return (
    <Link href={`/post/${data.slug}`}>
      <div className="group w-full h-full [perspective:1000px]">
        <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
          <CardTitle className="text-xl">{data.title}</CardTitle>

          <div className="absolute inset-0 [backface-visibility:hidden] overflow-hidden">
            <Image
              src={data.images[0]}
              alt={data.slug}
              fill
              className="object-cover"
              priority={true}
            />
            <div className="absolute inset-0 bg-black/85" />

            <div className="absolute inset-0 flex flex-col justify-end p-4">
              <CardTitle className="text-xl text-white">{data.slug}</CardTitle>
            </div>
          </div>

          {/* 뒷면 - 내용 */}
          <div className="absolute inset-0 bg-black/85 [backface-visibility:hidden] [transform:rotateY(180deg)] rounded-xl overflow-hidden  flex flex-col justify-between p-6">
            <div>
              <CardDescription>
                {data.isOngoing ? "진행중..." : data.period}
              </CardDescription>
            </div>
            <div className="flex flex-wrap gap-1">
              {data.skills.map((skill, index) => (
                <Badge key={index} variant="secondary" className="text-sm">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default DataCard;
