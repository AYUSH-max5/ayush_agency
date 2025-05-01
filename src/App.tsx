import React from "react";
import { motion } from "framer-motion";
import { Briefcase, ArrowRight, Users, Laptop } from "lucide-react";
import "./App.css";
import Header from "./components/header.tsx";
import ExperienceDesignAgency from "./components/exp.jsx";
import LatestWork from "./components/latestWork.jsx";
import PricingSection from "./components/pricing.jsx";
import ContactSection from "./components/contactUs.jsx";

const cn = (...args: any[]) => {
  return args.filter(Boolean).join(" ");
};

const App = () => {
  return (
    <>
      <Header />
      <ExperienceDesignAgency />
      <LatestWork />
      <PricingSection/>
      <ContactSection/>
    </>
  );
};

export default App;
