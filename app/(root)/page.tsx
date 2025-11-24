import ProductList from "@/components/shared/data/product-list";
import MyProfile from "@/components/shared/profile/my-profile";
import sampleData from "@/db/sample-data";
import {
  getLatestProducts,
  getAllProjects,
  getMainProjects,
  getSideProjects,
  getTechsByType,
} from "@/lib/actions/product.actions";

const Homepage = async () => {
  const latestProducts = await getLatestProducts();
  const allProjects = await getAllProjects();
  const mainProjects = await getMainProjects();
  const sideProjects = await getSideProjects();
  const techs = await getTechsByType();

  return (
    <>
      <MyProfile tech={techs} />
      <ProductList main={mainProjects} side={sideProjects} title="Asd" />
    </>
  );
};

export default Homepage;
