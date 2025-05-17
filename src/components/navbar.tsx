import { Container, Image, Burger } from "@mantine/core";
import { Link } from "react-router-dom";
import logo from "../assets/foremost_logo.png";
import { useDisclosure } from "@mantine/hooks";

const Navbar = () => {
  const [opened, { toggle }] = useDisclosure();

  return (
    <div className="bg-[#F5F7FA] w-full z-50 shadow-sm animate-slideDown text-md">
      <Container
        size="xl"
        className="flex items-center justify-between py-4 px-4 md:px-6"
      >
        <Link to="/" className="flex items-center">
          <Image
            src={logo}
            alt="Logo"
            width={135}
            height={150}
            className="ml-2"
          />
        </Link>

        {/* Burger icon on mobile */}
        <div className="flex md:hidden">
          <Burger
            opened={opened}
            onClick={toggle}
            aria-label="Toggle navigation"
          />
        </div>

        {/* Desktop nav */}
        <div className="hidden md:flex gap-8 text-base font-medium text-gray-900">
          <Link to="/" className="hover:text-[#4CAF4F]">
            Home
          </Link>

          <a href="/products" className="hover:text-[#4CAF4F]">
            Product
          </a>
          <a href="/contact-us" className="hover:text-[#4CAF4F]">
            Contact Us
          </a>
          <a href="/about-us" className="hover:text-[#4CAF4F]">
            About Us
          </a>
          <a href="/faqs" className="hover:text-[#4CAF4F]">
            FAQ
          </a>
        </div>
      </Container>

      {/* Mobile Menu */}
      <div
        className={`${
          opened ? "block" : "hidden"
        } md:hidden bg-white px-6 pb-4 shadow-md`}
      >
        <div className="space-y-3 text-gray-900 font-medium text-base pt-2">
          <Link
            to="/"
            onClick={toggle}
            className="block hover:text-[#4CAF4F] flex items-center gap-2"
          >
            <i className="fas fa-home"></i> Home
          </Link>
          <a
            href="#service"
            onClick={toggle}
            className="block hover:text-[#4CAF4F] flex items-center gap-2"
          >
            <i className="fas fa-concierge-bell"></i> Service
          </a>
          <a
            href="#feature"
            onClick={toggle}
            className="block hover:text-[#4CAF4F] flex items-center gap-2"
          >
            <i className="fas fa-star"></i> Feature
          </a>
          <a
            href="#product"
            onClick={toggle}
            className="block hover:text-[#4CAF4F] flex items-center gap-2"
          >
            <i className="fas fa-box"></i> Product
          </a>
          <a
            href="#testimonial"
            onClick={toggle}
            className="block hover:text-[#4CAF4F] flex items-center gap-2"
          >
            <i className="fas fa-comment"></i> Testimonial
          </a>
          <a
            href="#faq"
            onClick={toggle}
            className="block hover:text-[#4CAF4F] flex items-center gap-2"
          >
            <i className="fas fa-question-circle"></i> FAQ
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
