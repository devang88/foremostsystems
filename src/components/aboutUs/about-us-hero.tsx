import { Button, Container } from "@mantine/core";
import cameraImg from "../../assets/camera.png"; // update this with your actual image path

const AboutHero = () => {
  return (
    <div className="bg-[rgba(0,0,0,0.78)] text-white w-full pt-24 pb-16">
      <Container
        size="xl"
        className="flex flex-col md:flex-row   justify-around"
      >
        {/* Text Content */}
        <div className="max-w-xl space-y-6 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-center md:text-left">
            <span className="text-green-500">About Us</span>
          </h1>
          <p className="text-gray-300 text-md md:text-base text-center md:text-left">
            Excellent Standards in Smart Intelligent Integrated Security
            Products is the synonym of Foremost Systems.
          </p>
          <Button
            size="md"
            radius="md"
            className="bg-[#4CAF4F] hover:text-[#E4E1E1] hover:bg-[#60A362] transition-all duration-300 px-6 py-3 text-sm md:text-base font-semibold color-[#FFFFFF] rounded-md"
            color="#4CAF4F"
            leftSection={<i className="fab fa-whatsapp"></i>}
          >
            Whatsup Now
          </Button>
        </div>

        {/* Camera Image */}
        <div className="mt-10 md:mt-0 md:ml-12">
          <img
            src={cameraImg}
            alt="Security Camera"
            className="w-[240px] md:w-[300px] md:w-[300px] object-contain"
          />
        </div>
      </Container>
    </div>
  );
};

export default AboutHero;
