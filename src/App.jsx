import React from "react";
import Header from "./components/Header";
import LandingPage from "./components/LandingPage";
import NextSection from "./components/NextSection";
import SmileSection from "./components/SmileSection";
import Sponsors from "./components/Sponsors";
import StorySection from "./components/StorySection";
import EmpowermentSection from "./components/EmpowermentSection";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <LandingPage />
      <NextSection />
      <SmileSection />
      <Sponsors />
      <StorySection />
      <EmpowermentSection />
      <Footer />
    </>
  );
}

export default App;
