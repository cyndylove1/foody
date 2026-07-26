"use client";
import Cta from "../components/ui/cta";
import Deals from "../components/ui/deals";
import ExploreWholesale from "../components/ui/exploreWholesale";
import Footer from "../components/ui/footer";
import ShopNavbar from "../components/ui/shopNavbar";
import WholeSaleBanner from "../components/ui/wholesaleBanner";
import WholesaleSection from "../components/ui/wholesaleSection";

export default function Wholesale() {
  return (
    <>
      <ShopNavbar />
      <div className="bg-[#fff1e1]/60">
        <WholeSaleBanner />
        <WholesaleSection />
        <ExploreWholesale />
        <Deals />
        <Cta />
        <Footer />
      </div>
    </>
  );
}
