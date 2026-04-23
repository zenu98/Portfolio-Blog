import ProductList from "@/components/shared/data/product-list";
import {
  getMainProjects,
  getSideProjects,
} from "@/lib/actions/product.actions";

const OverviewPage = async () => {
  const mainProjects = await getMainProjects();
  const sideProjects = await getSideProjects();
  return <ProductList title="Asd" />;
};

export default OverviewPage;
