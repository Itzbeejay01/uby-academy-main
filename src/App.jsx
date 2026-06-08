import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Mastery from "./components/Mastery";
import Instruments from "./components/Instruments";
import Performance from "./components/Performance";
import GlobalStage from "./components/GlobalStage";
import AuditionBanner from "./components/AuditionBanner";
import Footer from "./components/Footer";
import Heritage from "./components/Heritage";
import Admissions from "./components/Admissions";

function HomePage() {
  return (
    <>
      <Hero />
      <Mastery />
      <Instruments />
      <Performance />
      <GlobalStage />
      <AuditionBanner />
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-us" element={<Heritage />} />
        <Route path="/admissions" element={<Admissions />} />
      </Routes>
    </BrowserRouter>
  );
}
