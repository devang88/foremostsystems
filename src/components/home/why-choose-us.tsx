import { Container, Text, Title } from "@mantine/core";
import ChooseBox from "./choose-box";

const WhyChooseUs = () => {
  return (
    <section className="bg-white py-12 overflow-hidden">
      <Container size="lg" className="text-center">
        <Title order={2} className="text-gray-800 text-3xl font-bold">
          Why Choose Us
        </Title>
        <Text className="text-gray-500 mt-2 mb-2">
          Our satisfied customers are one of the most important priorities.
        </Text>

        <ChooseBox />
      </Container>
    </section>
  );
};

export default WhyChooseUs;
