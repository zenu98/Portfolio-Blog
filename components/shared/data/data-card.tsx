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
      <Card className="flex flex-row w-full h-50  hover:shadow-lg hover:scale-105 transition-all duration-200 cursor-pointer">
        <CardHeader className="p-0 flex-[1] relative overflow-hidden border border-gray-100 dark:border-gray-700">
          <Image
            src={data.images[0]}
            alt={data.slug}
            fill
            className="object-cover"
            priority={true}
          />
        </CardHeader>
        <CardContent className="flex-[2] flex flex-col justify-between py-6">
          <div>
            <CardTitle className="text-xl">{data.title}</CardTitle>
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

          {/* <div className="flex-between gap-4">
          <p>{data.rating} Stars</p>
          {data.stock > 0 ? (
            <ProductPrice value={+data.price} />
          ) : (
            <p className="text-destructive">품절</p>
          )}
        </div> */}
        </CardContent>
      </Card>
    </Link>
  );
};

export default DataCard;
