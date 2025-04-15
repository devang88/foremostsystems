import { Container, Group, Image } from "@mantine/core";
import { Link } from "react-router-dom";
import logo from "../assets/foremost_logo.png";

const Navbar = () => {
  return (
    <div className="bg-[#F5F7FA]  w-full z-50 shadow-sm animate-slideDown">
      <Container
        size="xl"
        className="flex flex-wrap items-center justify-between py-4 px-6"
      >
        <Image
          src={logo}
          alt="Logo"
          width={135}
          height={150}
          className="ml-2"
        />

        <Group className="text-base font-medium flex text-gray-900 gap-8">
          <Link to="/" className="hover:text-[#4CAF4F]">
            Home
          </Link>
          <a href="#service" className="hover:text-[#4CAF4F]">
            Service
          </a>
          <a href="#feature" className="hover:text-[#4CAF4F]">
            Feature
          </a>
          <a href="#product" className="hover:text-[#4CAF4F]">
            Product
          </a>
          <a href="#testimonial" className="hover:text-[#4CAF4F]">
            Testimonial
          </a>
          <a href="#faq" className="hover:text-[#4CAF4F]">
            FAQ
          </a>
        </Group>
      </Container>
    </div>
  );
};

export default Navbar;
