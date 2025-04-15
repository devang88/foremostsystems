import { Button, Container } from "@mantine/core";
import cameraImg from "../../assets/camera.png"; // update this with your actual image path

const Hero = () => {
  return (
    <div className="bg-[rgba(0,0,0,0.78)] text-white w-full pt-24 pb-16">
      <Container
        size="xl"
        className="flex flex-col md:flex-row items-center justify-around"
      >
        {/* Text Content */}
        <div className="max-w-xl space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Professional Security <br />
            <span className="text-green-500">Cameras You Can Trust</span>
          </h1>
          <p className="text-gray-300 text-sm md:text-base">
            Where to grow your business as a photographer: site or social media?
          </p>
          <Button
            size="md"
            radius="md"
            className="bg-[#4CAF4F] hover:text-[#E4E1E1] hover:bg-[#60A362] transition-all duration-300 px-6 py-3 text-sm md:text-base font-semibold color-[#FFFFFF] rounded-md"
          >
            Whatsup Now
          </Button>
        </div>

        {/* Camera Image */}
        <div className="mt-10 md:mt-0 md:ml-12">
          <img
            src={cameraImg}
            alt="Security Camera"
            className="w-[300px] md:w-[400px] object-contain"
          />
        </div>
      </Container>
    </div>
  );
};

export default Hero;
