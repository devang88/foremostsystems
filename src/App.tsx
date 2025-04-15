import { lazy, Suspense } from "react";
import { MantineProvider } from "@mantine/core";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";

const Home = lazy(() => import("./pages/home"));

function App() {
  return (
    <MantineProvider>
      <Router basename="/foremostsystems">
        <Navbar />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Suspense>
      </Router>
    </MantineProvider>
  );
}

export default App;
