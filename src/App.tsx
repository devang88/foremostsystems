import { lazy, Suspense } from "react";
import { Loader, MantineProvider } from "@mantine/core";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import "@mantine/core/styles.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "keen-slider/keen-slider.min.css";

const Home = lazy(() => import("./pages/home"));

function App() {
  return (
    <MantineProvider>
      <Router basename="/foremostsystems">
        <Navbar />
        <Suspense
          fallback={
            <div className="flex items-center justify-center h-screen">
              <Loader color="green" type="dots" />
            </div>
          }
        >
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Suspense>
      </Router>
    </MantineProvider>
  );
}

export default App;
