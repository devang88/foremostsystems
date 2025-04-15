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
    <section className="bg-white py-12 overflow-hidden">
      <Container size="lg" className="text-center">
        <Title order={2} className="text-gray-800 text-3xl font-bold">
          Product Brands we Deal with
        </Title>
        <Text className="text-gray-500 mt-2 mb-2">
          Trusted Brands, Superior Quality
        </Text>

        <div
          className="py-3 md:py-5 flex animate-marquee w-fit items-center space-x-10"
          style={{
            display: "flex",
            animation: "marquee 20s linear infinite",
            width: "fit-content",
          }}
        >
          {[...productLogos, ...productLogos].map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt={`Brand ${idx + 1}`}
              className="h-12 md:h-16 w-auto object-contain  hover:grayscale transition duration-300"
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ProductBanner;
