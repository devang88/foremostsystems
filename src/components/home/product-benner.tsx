import React from "react";
import { Title, Text, Container } from "@mantine/core";
import logo_1 from "../../assets/logos/logo_1.png";
import logo_2 from "../../assets/logos/logo_2.png";
import logo_3 from "../../assets/logos/logo_3.png";
import logo_4 from "../../assets/logos/logo_4.png";
import logo_5 from "../../assets/logos/logo_5.png";
import logo_6 from "../../assets/logos/logo_6.png";
import logo_7 from "../../assets/logos/logo_7.png";
import logo_8 from "../../assets/logos/logo_8.png";
import logo_9 from "../../assets/logos/logo_9.png";
import logo_10 from "../../assets/logos/logo_10.png";
import logo_11 from "../../assets/logos/logo_11.png";
import logo_12 from "../../assets/logos/logo_12.png";
import logo_13 from "../../assets/logos/logo_13.png";
import logo_14 from "../../assets/logos/logo_14.png";
import logo_15 from "../../assets/logos/logo_15.png";
import logo_16 from "../../assets/logos/logo_16.png";
import logo_17 from "../../assets/logos/logo_17.png";
import logo_18 from "../../assets/logos/logo_18.png";

const productLogos = [
  logo_1,
  logo_2,
  logo_3,
  logo_4,
  logo_5,
  logo_6,
  logo_7,
  logo_8,
  logo_9,
  logo_10,
  logo_11,
  logo_12,
  logo_13,
  logo_14,
  logo_15,
  logo_16,
  logo_17,
  logo_18,
];

const ProductBanner: React.FC = () => {
  return (
    <section className="bg-white py-8 md:py-12 overflow-hidden w-full">
      {/* Centered heading inside container */}
      <Container size="lg" className="text-center">
        <Title
          order={2}
          className="text-gray-800 text-2xl md:text-3xl font-bold"
        >
          Product Brands we Deal with
        </Title>
        <Text className="text-gray-500 mt-2 mb-4 text-sm md:text-base">
          Trusted Brands, Superior Quality
        </Text>
      </Container>

      {/* Full width marquee outside the Container */}
      <div className="w-full overflow-x-hidden mt-8">
        <div
          className="flex w-max animate-marquee space-x-6 md:space-x-10 px-4"
          style={{ animation: "marquee 30s linear infinite" }}
        >
          {[...productLogos, ...productLogos].map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt={`Brand ${idx + 1}`}
              className="h-8 md:h-14 w-auto max-w-[180px] max-h-[50px] object-contain hover:grayscale transition duration-300"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductBanner;
