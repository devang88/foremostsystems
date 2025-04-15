// import "./App.css";
import { lazy } from "react";
import { MantineProvider } from "@mantine/core";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";

const Home = lazy(() => import("./pages/home"));

function App() {
  return (
    <MantineProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </MantineProvider>
  );
}

export default App;
