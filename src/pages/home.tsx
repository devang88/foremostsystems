import Footer from "../components/footer";
import AboutUs from "../components/home/about-us";
import ContactUsSection from "../components/home/contact-us";
import Hero from "../components/home/hero";
import MonitorWork from "../components/home/moniter-work";
import ServicesSection from "../components/home/product";
import ProductBanner from "../components/home/product-benner";
import WhyChooseUs from "../components/home/why-choose-us";
import WorkingProcess from "../components/home/working-process";

// src/pages/Home.jsx
export default function Home() {
  return (
    <div className="bg-[#F2F2F2]">
      <Hero />
      <ProductBanner />
      <WhyChooseUs />
      <AboutUs />
      <MonitorWork />
      <WorkingProcess />
      <ServicesSection />
      <ContactUsSection />
      <Footer />
    </div>
  );
}
