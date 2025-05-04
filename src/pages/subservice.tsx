import { useParams } from "react-router-dom";
import { Title } from "@mantine/core";
import { subServiceData } from "../components/subproduct";
import Footer from "../components/footer";

export default function SubService() {
  const { category } = useParams<{ category: string }>();
  const decodedTitle = decodeURIComponent(category ?? "");
  const data = subServiceData[decodedTitle];

  if (!data) return <p>Service not found</p>;

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-[rgba(0,0,0,0.78)] text-white py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="text-green-500">{data.title}</span>
        </h1>
        <p className="text-gray-300 max-w-2xl mx-auto text-lg">
          {data.subline}
        </p>
      </section>

      {/* SubProducts Section */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {data.subProducts.map((product, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl shadow-md hover:shadow-lg transition duration-300 overflow-hidden"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-50 object-cover"
              />
              <div className="p-4">
                <Title order={4} className="mb-2">
                  {product.name}
                </Title>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Descriptions Section */}
      <section className="py-12 px-6 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-green-600 mb-4">
          About This Products
        </h2>
        {data.descriptions.map((desc, idx) => (
          <p className="text-lg leading-relaxed mb-4" key={idx}>
            {desc}
          </p>
        ))}
      </section>

      <Footer />
    </div>
  );
}
