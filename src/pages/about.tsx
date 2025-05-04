// pages/about-us.tsx
import AboutHero from "../components/aboutUs/about-us-hero";
import Footer from "../components/footer";

export default function AboutUsPage() {
  return (
    <div className="bg-[#F2F2F2]">
      <AboutHero />

      {/* Additional Content Section */}
      <div className="bg-white py-16">
        <div className="max-w-5xl mx-auto px-4 text-gray-800 space-y-10">
          <h2 className="text-2xl font-bold text-green-600 mb-4">
            Foremost Systems is a Leading System Integrator & Service Provider
            in Industry
          </h2>
          <p className="text-lg leading-relaxed">
            Foremost Systems is one of the leading System Integrator & Service
            Provider in Industry since 2007 in the field of security products.
            We are expert in providing cutting edge technology in security &
            surveillance domain. Our product ranges from closed circuit cameras
            to biometrics and entrance security products to access control
            systems.
          </p>

          <div>
            <h2 className="text-2xl font-bold text-green-600 mb-4">
              Our Core Values That Make Us Professional
            </h2>
            <p className="text-lg leading-relaxed">
              Foremost Systems provides affordability and flexibility with
              growing in-home technologies from Video Door Phone to Alarm Panel.
              Opening the way for future-proof scalability and Structured
              Living.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
