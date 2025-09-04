import ProductList from "@/components/shared/data/product-list";
import MyProfile from "@/components/shared/profile/my-profile";
import sampleData from "@/db/sample-data";
import {
  getLatestProducts,
  getAllProjects,
  getMainProjects,
  getSideProjects,
} from "@/lib/actions/product.actions";

const Homepage = async () => {
  const latestProducts = await getLatestProducts();
  const allProjects = await getAllProjects();
  const mainProjects = await getMainProjects();
  const sideProjects = await getSideProjects();
  // console.log(sampleData);
  return (
    <>
      <MyProfile />
      <ProductList
        main={mainProjects}
        side={sideProjects}
        title="Asd"
        limit={4}
      />
    </>
  );
};

export default Homepage;
