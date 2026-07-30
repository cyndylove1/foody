"use client";

import ShopNavbar from "../components/ui/shopNavbar";
import Deals from "../components/ui/deals";
import Cta from "../components/ui/cta";
import Footer from "../components/ui/footer";
import RetailSection from "../components/ui/retailSection";
import RetailBanner from "../components/ui/retailBanner";

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
        <Deals />
        <Cta />
        <Footer />
      </div>
    </section>
  );
}
