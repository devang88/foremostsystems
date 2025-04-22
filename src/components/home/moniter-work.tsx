import { Container } from "@mantine/core";
import cameraTwo from "../../assets/cemera-2.png"; // update this with your actual image path

const MonitorWork = () => {
  return (
    <section className="py-8 md:py-12 overflow-hidden w-full bg-[#F5F7FA]">
      <Container
        size="lg"
        className="flex flex-col md:flex-row items-center justify-around"
      >
        <div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight  md:text-left">
            Monitor the Workplace <br />
            <span className="text-green-500">From your Phone</span>
          </h1>

          <p className="text-gray-600 text-md md:text-base text-center md:text-left mt-4 max-w-xl">
            Monitor the Workplace From your Phone Keep an eye on your workplace
            using just your phone! Our advanced systems make it super easy. Stay
            connected and make sure your business is safe, all from the
            convenience of your mobile. Your workplace security, now in the palm
            of your hand!
          </p>
        </div>

        <div className="mt-10 md:mt-0 md:ml-12">
          <img
            src={cameraTwo}
            alt="Security Camera"
            className="w-[240px] md:w-[300px] md:w-[300px] object-contain"
          />
        </div>
      </Container>
    </section>
  );
};
export default MonitorWork;
