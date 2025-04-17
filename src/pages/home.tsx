import Hero from "../components/home/hero";
import ProductBanner from "../components/home/product-benner";
import WhyChooseUs from "../components/home/why-choose-us";

// src/pages/Home.jsx
export default function Home() {
  return (
    <div className="bg-[#F2F2F2]">
      <Hero />
      <ProductBanner />
      <WhyChooseUs />
    </div>
  );
}
