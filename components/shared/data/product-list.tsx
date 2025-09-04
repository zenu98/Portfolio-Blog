import { Product, Project } from "@/types";
import DataCard from "./data-card";

const ProductList = ({
  main,
  side,
  title,
  limit,
}: {
  main: Project[];
  side: Project[];
  title?: string;
  limit?: number;
}) => {
  const limitedData = limit ? main.slice(0, limit) : main;
  const limitedSideData = limit ? side.slice(0, limit) : side;

  return (
    <div className="my-10 wrapper">
      <h2 className="h2-bold mb-4">Main</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {limitedData.map((project: Project) => (
          <DataCard key={project.slug} data={project} />
        ))}
      </div>
      <h2 className="h2-bold mb-4">Side</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {limitedSideData.map((project: Project) => (
          <DataCard key={project.slug} data={project} />
        ))}
      </div>
      {main.length === 0 && side.length === 0 && <div>no-data</div>}
    </div>
  );
};

export default ProductList;
