import { Product, Project } from "@/types";
import DataCard from "./data-card";
import {
  getMainProjects,
  getSideProjects,
} from "@/lib/actions/product.actions";
import SpiralGallery from "@/components/spiral";
import PortfolioText from "../portfolio-text";

const ProductList = async ({ limit }: { title?: string; limit?: number }) => {
  const mainProjects = await getMainProjects();
  const sideProjects = await getSideProjects();
  const allImages = [
    ...mainProjects.map((p) => p.images),
    ...sideProjects.map((p) => p.images),
  ]
    .flat()
    .filter(Boolean);

  const limitedData = limit ? mainProjects.slice(0, limit) : mainProjects;
  const limitedSideData = limit ? sideProjects.slice(0, limit) : sideProjects;
  const letters = [
    { char: "P", scaleY: 1.3 },
    { char: "O", scaleY: 1.4 },
    { char: "R", scaleY: 1.5 },
    { char: "T", scaleY: 1.5 },
    { char: "F", scaleY: 1.5 },
    { char: "O", scaleY: 1.4 },
    { char: "L", scaleY: 1.3 },
    { char: "I", scaleY: 1.2 },
    { char: "O", scaleY: 1.2 },
  ];
  return (
    <div className="flex flex-col page-container bg-[#e76f51] ">
      <div className="w-full h-[120svh] relative ">
        <PortfolioText />

        <div className="absolute inset-0">
          <SpiralGallery images={allImages} />
        </div>
      </div>
      <div className="w-full flex flex-col lg:flex-row mt-25 border-t-1 border-white/30">
        <div className="w-full lg:w-1/2 p-8 leading-none font-black font-english text-[200px] sm:text-[300px] lg:text-[400px]">
          <p>MAIN</p>
        </div>

        <div className="w-full lg:w-1/2 flex items-center justify-center border-t-1 lg:border-t-0 lg:border-l-1 border-white/30 p-8">
          <div className="grid grid-cols-2 gap-5 w-full max-w-lg p-8">
            {limitedData.map((project: Project) => (
              <div key={project.slug} className="aspect-[3/4] w-full">
                <DataCard data={project} />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col lg:flex-row mt-25 border-t-1 border-white/30">
        <div className="w-full lg:w-1/2 flex items-center justify-center border-t-1 border-r-1 lg:border-t-0 lg:border-l-1 border-white/30 p-8">
          <div className="grid grid-cols-2 gap-5 w-full max-w-lg p-8">
            {limitedSideData.map((project: Project) => (
              <div key={project.slug} className="aspect-[3/4] w-full">
                <DataCard data={project} />
              </div>
            ))}
          </div>
        </div>
        <div className="w-full lg:w-1/2 p-8 leading-none font-black font-english text-[200px] sm:text-[300px] lg:text-[400px]">
          <p>SIDE</p>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
