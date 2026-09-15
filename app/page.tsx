
import Cta from "./components/ui/cta";
import Footer from "./components/ui/footer";
import Hero from "./components/ui/hero";
import Navbar from "./components/ui/navbar";
import FeaturedProduct from "./components/ui/featuredproduct";
import Category from "./components/ui/category";
import Collection from "./components/ui/collection";
import RetailWholesale from "./components/ui/retailWholesale";



export default function Home() {
  return (
    <div>
      <Navbar />
      <RetailWholesale />
      <Hero />
      <Collection />
      <Category />
      <FeaturedProduct />
      <Cta />
      <Footer />
    </div>
  );
}
