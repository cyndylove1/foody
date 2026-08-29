"use client";
import Cta from "../components/ui/cta";
import Deals from "../components/ui/deals";
import ExploreWholesale from "../components/ui/exploreWholesale";
import Footer from "../components/ui/footer";
import ShopNavbar from "../components/ui/shopNavbar";
import WholeSaleBanner from "../components/ui/wholesaleBanner";
import WholesaleSwitch from "../components/ui/wholesaleSwitch";

export default function Wholesale() {
  return (
    <>
      <ShopNavbar />
      <div className="bg-white">
        <WholeSaleBanner />
        <WholesaleSwitch />
        <ExploreWholesale />
        <Deals 
        type="wholesale" 
        title="Todays Best Deals For You!" 
      />
        <Cta />
        <Footer />
      </div>
    </>
  );
}
