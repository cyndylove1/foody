import Category from "./components/ui/category";
import Collection from "./components/ui/collection";
import Cta from "./components/ui/cta";
import Footer from "./components/ui/footer";
import Hero from "./components/ui/hero";
import FeaturedProduct from "./components/ui/featuredproduct";

export default function Home() {
  return (
    <div>
      <Hero />
      <Category />
      <Collection />
      <FeaturedProduct />
      <Cta />
      <Footer />
    </div>
  );
}
