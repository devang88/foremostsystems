// src/pages/ContactUs.jsx

import Footer from "../components/footer";
import ContactUsSection from "../components/home/contact-us";
import WhyChooseUs from "../components/home/why-choose-us";

function ContactUs() {
  return (
    <div className="bg-[#F9F9F9]">
      {/* Hero / Header Section */}
      <section className="bg-[rgba(0,0,0,0.78)] text-white py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="text-green-500">Contact Us</span>
        </h1>
        <p className="text-gray-300 max-w-2xl mx-auto text-lg">
          We'd love to hear from you. Reach out with your questions, feedback,
          or service inquiries.
        </p>
      </section>

      {/* Contact Form Section */}
      <ContactUsSection />

      <WhyChooseUs />

      {/* Additional Info Section */}
      <section className="bg-white py-16">
        <div className="max-w-5xl mx-auto px-4 text-gray-800 space-y-10">
          <h2 className="text-2xl font-bold text-green-600">
            Why Contact Foremost Systems?
          </h2>
          <p className="text-lg leading-relaxed">
            We are committed to providing top-tier support and consultation in
            the field of security and surveillance. Whether you're looking for
            smart home integration, CCTV systems, or enterprise-grade access
            control solutions, our team is ready to help.
          </p>
          <ul className="list-disc list-inside space-y-2 text-base text-gray-700">
            <li>Free security consultations tailored to your needs</li>
            <li>Quick turnaround and installation services</li>
            <li>Expert guidance on the latest surveillance technology</li>
            <li>Dedicated customer support available 7 days a week</li>
          </ul>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default ContactUs;
