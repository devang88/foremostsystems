import { Button, Container, Title } from "@mantine/core";
import aboutUsImg from "../../assets/about_us.png";

const AboutUs = () => {
  return (
    <section className="bg-white py-8 md:py-12 overflow-hidden w-full">
      <Container
        size="lg"
        className="text-center flex flex-col md:flex-row items-center justify-around"
      >
        <div className="">
          <img
            src={aboutUsImg}
            alt="About Us"
            className="w-[350px] md:w-[500px] md:w-[300px] object-contain"
          />
        </div>

        <div className="mt-8 md:mt-0">
          <Title
            order={2}
            className="text-gray-800 text-2xl md:text-3xl font-bold "
          >
            About Us
          </Title>
          <p className="text-gray-500 mt-2 mb-4 text-sm md:text-base max-w-xl">
            Foremost Systems is one of the leading System Integrator & Service
            Provider in Industry since 2007 in the field of security products.
            We are expert in providing cutting edge technology in security &
            surveillance domain. Our product ranges from closed circuit cameras
            to biometrics and entrance security products to access control
            systems.
          </p>

          <Button
            size="md"
            radius="md"
            className="mt-3 bg-[#4CAF4F] hover:text-[#E4E1E1] hover:bg-[#60A362] transition-all duration-300 px-6 py-3 text-sm md:text-base font-semibold color-[#FFFFFF] rounded-md"
            color="#4CAF4F"
            leftSection={<i className="fab fa-whatsapp"></i>}
          >
            Whatsup Now
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default AboutUs;
