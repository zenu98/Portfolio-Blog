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
  console.log("제목 : ", data);
  return (
    <Link href={`/post/${data.slug}`}>
      <Card className="w-full h-100 max-w-sm hover:shadow-lg hover:scale-105 transition-all duration-200 cursor-pointer">
        <CardHeader className="p-0 flex-[2] relative overflow-hidden">
          <Image
            src={data.images[0]}
            alt={data.slug}
            fill
            className="object-cover"
            priority={true}
          />
        </CardHeader>
        <CardContent className="p-2 flex-[1] flex flex-col gap-2 justify-evenly">
          <CardTitle>{data.title}</CardTitle>
          <div className="flex flex-wrap gap-1">
            {data.skills.map((skill, index) => (
              <Badge key={index} variant="outline">
                {skill}
              </Badge>
            ))}
          </div>
          <CardDescription>{data.period}</CardDescription>

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
