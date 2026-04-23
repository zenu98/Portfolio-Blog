import HomeClient from "@/components/home-client";
import ProductList from "@/components/shared/data/product-list";
import IntroPage from "@/components/shared/profile/intro";
import MyProfile from "@/components/shared/profile/my-profile";
import Techs from "@/components/shared/profile/techs";

const Homepage = () => {
  return (
    <>
      <HomeClient>
        <IntroPage />
        <Techs />
        <ProductList title="Asd" />
      </HomeClient>
    </>
  );
};

export default Homepage;
