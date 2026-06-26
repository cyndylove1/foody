import Category from "./components/ui/category";
import Collection from "./components/ui/collection";
import Cta from "./components/ui/cta";
import Footer from "./components/ui/footer";
import Hero from "./components/ui/hero";
import TrendingProduct from "./components/ui/trendingproduct";
import Testimonial from "./components/ui/testimonial";

export default function Home() {
  return (
    <div>
      <Hero />
      <Category />
      <Collection />
      <TrendingProduct />
      <Cta />
      <Footer/>
    </div>
  );
}
