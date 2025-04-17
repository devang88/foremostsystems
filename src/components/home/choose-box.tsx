import { Card, Grid, Text, Title } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

const features = [
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.518 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.977 2.89a1 1 0 00-.364 1.118l1.518 4.674c.3.921-.755 1.688-1.54 1.118l-3.978-2.89a1 1 0 00-1.176 0l-3.977 2.89c-.785.57-1.84-.197-1.54-1.118l1.518-4.674a1 1 0 00-.364-1.118l-3.977-2.89c-.783-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.518-4.674z"
        />
      </svg>
    ),
    title: "17 Years Experience",
    description:
      "We are 17-years experienced with strong expertise in Voice, Video, and Data. Completed more than 300+ projects across India.",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    title: "24/7 Support",
    description:
      "Foremost Systems has established the network for after sales service & support all over the distribution channel...",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M7 11l5-5 5 5M7 13l5 5 5-5"
        />
      </svg>
    ),
    title: "Industry Certified",
    description:
      "Foremost Systems is ISO:9001, BIS, ROHS, CE, and FCC certified. Our high-quality products are trusted worldwide.",
  },
];

const ChooseBox = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 1.2,
      spacing: 16,
    },
  });

  if (isMobile) {
    return (
      <div ref={sliderRef} className="keen-slider py-8">
        {features.map((item, idx) => (
          <div className="keen-slider__slide" key={idx}>
            <Card
              shadow="sm"
              radius="md"
              padding="xl"
              className="text-center mx-2 min-h-[250px] flex flex-col items-center justify-center"
            >
              <div className="bg-green-100 w-fit mx-auto rounded-full p-3 mb-4 text-black">
                {item.icon}
              </div>
              <Title order={4} className="mb-2">
                {item.title}
              </Title>
              <Text size="sm" color="dimmed">
                {item.description}
              </Text>
            </Card>
          </div>
        ))}
      </div>
    );
  }

  // Desktop Grid
  return (
    <Grid gutter="xl" py="xl">
      {features.map((item, idx) => (
        <Grid.Col key={idx} span={{ base: 12, md: 4 }}>
          <Card
            shadow="sm"
            radius="md"
            padding="xl"
            className="text-center hover:shadow-md transition min-h-[250px] flex flex-col items-center justify-center"
          >
            <div className="bg-green-100 w-fit mx-auto rounded-full p-3 mb-4 text-black">
              {item.icon}
            </div>
            <Title order={4} className="mb-2">
              {item.title}
            </Title>
            <Text size="sm" color="dimmed">
              {item.description}
            </Text>
          </Card>
        </Grid.Col>
      ))}
    </Grid>
  );
};

export default ChooseBox;
