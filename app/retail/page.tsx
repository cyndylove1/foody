"use client";

import ShopNavbar from "../components/ui/shopNavbar";
import Cta from "../components/ui/cta";
import Footer from "../components/ui/footer";
import RetailBanner from "../components/ui/retailBanner";
import ProductCatalog from "../components/ui/productCatalog";

import RetailSwitch from "../components/ui/retailSwitch";
import  ExploreRetail  from "../components/ui/exploreRetail";

export default function Retail() {
  return (
    <section className="">
      <ShopNavbar />
      <div className=" bg-white">
        <RetailBanner />
        <RetailSwitch />
        <ExploreRetail />
        {/* <Popular /> */}

        <ProductCatalog productType="retail" />
        <Cta />
        <Footer />
      </div>
    </section>
  );
}
