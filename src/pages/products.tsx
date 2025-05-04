// src/pages/Products.jsx

import Footer from "../components/footer";
import ServicesSection from "../components/home/product";

export default function Products() {
  return (
    <div className="bg-[#F9F9F9]">
      {/* Hero Section */}
      <section className="bg-[rgba(0,0,0,0.78)] text-white py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="text-green-500">Our Products</span>
        </h1>
        <p className="text-gray-300 max-w-2xl mx-auto text-lg">
          Discover a comprehensive range of smart and reliable security
          solutions tailored for residential, commercial, and industrial needs.
        </p>
      </section>

      {/* Product Listings */}
      <ServicesSection />

      {/* Optional Footer Note */}
      <section className="bg-white py-12">
        <div className="max-w-4xl mx-auto px-4 text-center text-gray-700">
          <p className="text-lg">
            Every product we offer combines advanced technology with practical
            design, ensuring peace of mind and long-term value.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
