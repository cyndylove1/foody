"use client";

import ShopNavbar from "../components/ui/shopNavbar";
import Cta from "../components/ui/cta";
import Footer from "../components/ui/footer";
import RetailSection from "../components/ui/retailSection";
import RetailBanner from "../components/ui/retailBanner";
import ProductCatalog from "../components/ui/productCatalog";

import RetailSwitch from "../components/ui/retailSwitch";

export default function Retail() {
  return (
    <section className="">
      <ShopNavbar />
      <div className=" bg-white">
        <RetailBanner />
        <RetailSwitch />
        <RetailSection />
        {/* <Popular /> */}

        <ProductCatalog productType="retail" />
        <Cta />
        <Footer />
      </div>
    </section>
  );
}
