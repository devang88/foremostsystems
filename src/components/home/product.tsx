import { Card, Grid, Text, Title, Button, Container } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useState } from "react";

const services = [
  {
    title: "Biometric Attendance System & Machines",
    description:
      "We bring the right people together to challenge established thinking and drive transform in 2020",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path d="M12 11c0-1.1-.9-2-2-2s-2 .9-2 2 .9 2 2 2 2-.9 2-2zm6 0c0-1.1-.9-2-2-2s-2 .9-2 2 .9 2 2 2 2-.9 2-2z" />
        <path d="M10 14h4M4 6h16M4 10h16M4 18h16" />
      </svg>
    ),
  },
  {
    title: "Smart Door Locks",
    description:
      "We bring the right people together to challenge established thinking and drive transform in 2020",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path d="M12 17a2 2 0 100-4 2 2 0 000 4z" />
        <path d="M6 10V8a6 6 0 1112 0v2" />
        <rect x="6" y="10" width="12" height="10" rx="2" />
      </svg>
    ),
  },
  {
    title: "CCTV Cameras",
    description:
      "We bring the right people together to challenge established thinking and drive transform in 2020",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path d="M2 8l10 6 10-6" />
        <path d="M2 8v8l10 6 10-6V8" />
      </svg>
    ),
  },
  {
    title: "Wireless Cameras",
    description:
      "We bring the right people together to challenge established thinking and drive transform in 2020",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a8 8 0 10-14.8 0" />
      </svg>
    ),
  },
  {
    title: "Wireless CCTV Kit",
    description:
      "We bring the right people together to challenge established thinking and drive transform in 2020",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path d="M7 17V3h10v14" />
        <path d="M5 21h14" />
      </svg>
    ),
  },
  {
    title: "Access Control",
    description:
      "We bring the right people together to challenge established thinking and drive transform in 2020",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path d="M12 11V7a4 4 0 10-8 0v4" />
        <rect x="4" y="11" width="16" height="10" rx="2" />
      </svg>
    ),
  },
  {
    title: "Entrance Product",
    description:
      "We bring the right people together to challenge established thinking and drive transform in 2020",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path d="M3 21h18M3 7h18M12 3v18" />
      </svg>
    ),
  },
  {
    title: "Hotel Lock System",
    description:
      "We bring the right people together to challenge established thinking and drive transform in 2020",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <circle cx="12" cy="7" r="4" />
        <path d="M5.5 20a7.5 7.5 0 0113 0" />
      </svg>
    ),
  },
  {
    title: "Video Door Phone",
    description:
      "We bring the right people together to challenge established thinking and drive transform in 2020",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    ),
  },
  {
    title: "IP Multi Door Phone Apartments Solution",
    description:
      "We bring the right people together to challenge established thinking and drive transform in 2020",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    ),
  },
  {
    title: "Thermal Monitoring Products",
    description:
      "We bring the right people together to challenge established thinking and drive transform in 2020",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path d="M12 2a4 4 0 00-4 4v10a4 4 0 008 0V6a4 4 0 00-4-4z" />
      </svg>
    ),
  },
  {
    title: "Intrusion Alarm",
    description:
      "We bring the right people together to challenge established thinking and drive transform in 2020",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path d="M13 16h-1v-4h-1m1 4v-4" />
        <circle cx="12" cy="12" r="10" />
      </svg>
    ),
  },
  {
    title: "Anti Theft Solution",
    description:
      "We bring the right people together to challenge established thinking and drive transform in 2020",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path d="M3 12h18M3 6h18M3 18h18" />
      </svg>
    ),
  },
  {
    title: "Networking & Accessories",
    description:
      "We bring the right people together to challenge established thinking and drive transform in 2020",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <circle cx="12" cy="12" r="4" />
        <path d="M2 12h4m12 0h4" />
      </svg>
    ),
  },
  {
    title: "Storage",
    description:
      "We bring the right people together to challenge established thinking and drive transform in 2020",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <path d="M4 10h16" />
      </svg>
    ),
  },
  {
    title: "Cards",
    description:
      "We bring the right people together to challenge established thinking and drive transform in 2020",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <rect x="2" y="6" width="20" height="12" rx="2" />
        <path d="M2 10h20" />
      </svg>
    ),
  },
  {
    title: "Smart Home",
    description:
      "We bring the right people together to challenge established thinking and drive transform in 2020",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path d="M3 12l9-9 9 9" />
        <path d="M4 10v10h16V10" />
      </svg>
    ),
  },
  {
    title: "4G Router",
    description:
      "We bring the right people together to challenge established thinking and drive transform in 2020",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path d="M2 12h20M12 2v20" />
      </svg>
    ),
  },
  {
    title: "Fiber Products",
    description:
      "We bring the right people together to challenge established thinking and drive transform in 2020",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    ),
  },
  {
    title: "Queue Manager",
    description:
      "We bring the right people together to challenge established thinking and drive transform in 2020",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    ),
  },
];

const ServicesSection = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 1.2,
      spacing: 16,
    },
  });

  const [visibleCount, setVisibleCount] = useState(6);
  const handleLoadMore = () => {
    setVisibleCount(services.length); // show all
  };

  const visibleServices = services.slice(0, visibleCount);

  if (isMobile) {
    return (
      <div className="py-12">
        <Title order={2} align="center" className="mb-6">
          Our Services
        </Title>
        <div ref={sliderRef} className="keen-slider px-2 mt-4">
          {services.map((item, idx) => (
            <div className="keen-slider__slide p-2" key={idx}>
              <Card
                shadow="sm"
                radius="md"
                padding="xl"
                className="text-center hover:shadow-md transition h-full flex flex-col"
              >
                <div className="bg-green-100 w-fit mx-auto rounded-full p-3 mb-4">
                  {item.icon}
                </div>

                <div className="flex-grow flex flex-col">
                  <Title order={4} className="mb-2">
                    {item.title}
                  </Title>
                  <Text
                    size="sm"
                    color="dimmed"
                    className="mb-4 text-center line-clamp-2"
                  >
                    {item.description}
                  </Text>
                  <div className="mt-auto">
                    <Button size="xs" variant="filled" color="dark">
                      Learn more
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <section className="py-8 md:py-12 overflow-hidden w-full bg-[#F5F7FA]">
      <Container size="lg">
        <Title order={2} align="center" className="mb-10">
          We Provide The Best Services
        </Title>

        <Grid gutter="xl" className="mt-8">
          {visibleServices.map((item, idx) => (
            <Grid.Col key={idx} span={{ base: 12, sm: 6, md: 4 }}>
              <Card
                shadow="sm"
                radius="md"
                padding="xl"
                className="text-center hover:shadow-md transition h-full flex flex-col"
              >
                <div className="bg-green-100 w-fit mx-auto rounded-full p-3 mb-4">
                  {item.icon}
                </div>

                <div className="flex-grow flex flex-col">
                  <Title order={4} className="mb-2">
                    {item.title}
                  </Title>
                  <Text
                    size="sm"
                    color="dimmed"
                    className="mb-4 text-center line-clamp-2"
                  >
                    {item.description}
                  </Text>
                </div>
                <div className="mt-6">
                  <Button size="xs" variant="filled" color="dark">
                    Learn more
                  </Button>
                </div>
              </Card>
            </Grid.Col>
          ))}
        </Grid>

        {/* Load More Button */}
        {visibleCount < services.length && (
          <div className="flex justify-center mt-10">
            <Button
              onClick={handleLoadMore}
              className="bg-[#4CAF4F] hover:text-[#E4E1E1] hover:bg-[#60A362] transition-all duration-300 px-6 py-3 text-sm md:text-base font-semibold color-[#FFFFFF] rounded-md"
              color="#4CAF4F"
            >
              Load More
            </Button>
          </div>
        )}
      </Container>
    </section>
  );
};

export default ServicesSection;
