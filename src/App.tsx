import { lazy, Suspense } from "react";
import { Loader, MantineProvider } from "@mantine/core";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Navbar from "./components/navbar";
import "@mantine/core/styles.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "keen-slider/keen-slider.min.css";

const Home = lazy(() => import("./pages/home"));
const FAQS = lazy(() => import("./pages/faqs"));
const AboutUs = lazy(() => import("./pages/about"));
const ContactUs = lazy(() => import("./pages/contact"));
const Products = lazy(() => import("./pages/products"));
const SubService = lazy(() => import("./pages/subservice"));

function App() {
  return (
    <MantineProvider>
      <Router basename="/">
        <Navbar />
        <ToastContainer />
        <Suspense
          fallback={
            <div className="flex items-center justify-center h-screen">
              <Loader color="green" type="dots" />
            </div>
          }
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/faqs" element={<FAQS />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/products" element={<Products />} />
            <Route path="/services/:category" element={<SubService />} />
          </Routes>
        </Suspense>
      </Router>
    </MantineProvider>
  );
}

export default App;
