"use client";
import Cta from "../components/ui/cta";
import ExploreWholesale from "../components/ui/exploreWholesale";
import Footer from "../components/ui/footer";
import ShopNavbar from "../components/ui/shopNavbar";
import WholeSaleBanner from "../components/ui/wholesaleBanner";
import WholesaleSwitch from "../components/ui/wholesaleSwitch";
import ProductCatalog from "../components/ui/productCatalog";

export default function Wholesale() {
  return (
    <>
      <ShopNavbar />
      <div className="bg-white">
        <WholeSaleBanner />
        <WholesaleSwitch />
        <ExploreWholesale />
        <ProductCatalog productType="wholesale" />
        <Cta />
        <Footer />
      </div>
    </>
  );
}
