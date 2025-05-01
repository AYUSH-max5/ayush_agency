import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Briefcase,
  ArrowRight,
  Users,
  Laptop,
  Menu,
  X,
} from "lucide-react";
import "../App.css";
import rightImage from "../assets/image.png";
import image2 from "../assets/image2.png";

// Utility
const cn = (...args: any[]) => {
  return args.filter(Boolean).join(" ");
};

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const CustomButton = ({
    variant = "default",
    className,
    children,
    ...props
  }: {
    variant?: "default" | "outline";
    className?: string;
    children: React.ReactNode;
    [key: string]: any;
  }) => {
    return (
      <button
        className={cn(
          "px-6 py-3 rounded-full",
          variant === "default" &&
            "bg-purple-500 hover:bg-purple-600 text-white",
          variant === "outline" &&
            "text-white border-purple-500 hover:bg-purple-500/20 hover:border-purple-400",
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  };

  return (
    <div className="bg-[#0f172a] text-white font-sans">
      {/* Header */}
      <header className="py-6 px-6 md:px-16 flex items-center justify-between relative">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src={image2} className="w-6 h-6" alt="" />
          <h4
            className="text-xl font-bold text-white"
            style={{ fontFamily: "Epilogue" }}
          >
            Agency
          </h4>
        </div>

        {/* Desktop Nav */}
        <nav
          className="hidden md:flex gap-12"
          style={{ fontFamily: "Epilogue" }}
        >
          {["About", "Services", "Pricing", "Blog"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="hover:text-gray-300 transition-colors text-gray-300"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Contact button (desktop) */}
        <div className="hidden md:block">
          <button
            className="text-white border border-gray-300 rounded px-4 py-2"
            style={{ backgroundColor: "transparent", fontFamily: "Epilogue" }}
          >
            Contact
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="absolute top-full left-0 w-full bg-[#1e293b] flex flex-col items-start px-6 py-4 space-y-4 z-50 md:hidden">
            {["About", "Services", "Pricing", "Blog"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-white hover:text-gray-300"
              >
                {item}
              </a>
            ))}
            <button className="mt-2 text-white border border-gray-300 rounded px-4 py-2">
              Contact
            </button>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="py-16 md:py-24 px-6 md:px-16 flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Left */}
        <div className="md:w-1/2 space-y-6 items-start">
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            style={{ fontFamily: "Epilogue", letterSpacing: "3px" }}
            className="block text-sm text-[#ab5cf6] text-start"
          >
            MODERN STUDIO
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-3xl md:text-6xl font-bold text-start leading-tight"
          >
            We&apos;re Help To Build Your Dream Project
          </motion.h2>

          <p className="text-gray-300 text-start">
            Agency provides a full service range including technical <br />
            skills, design, business understanding.
          </p>

          <div className="flex flex-row sm:flex-row gap-4">
            <button
              style={{ fontFamily: "Epilogue", backgroundColor: "#ef6d58" }}
              className="font-bold text-white rounded-full flex items-center gap-2 px-6 py-3"
            >
              HOW WE WORK <ArrowRight className="w-5 h-5" />
            </button>
            <button
              style={{ fontFamily: "Epilogue" }}
              className="text-white border border-gray-300 rounded-full px-6 py-3"
            >
              Contact Us
            </button>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-8 flex items-center gap-4"
          >
            <Users className="w-8 h-8 text-gray-400" />
            <p className="text-gray-300 text-sm">
              &quot;Put themselves in the merchant&apos;s shoes&quot; -{" "}
              <span className="font-semibold">Meta Inc.</span>
            </p>
          </motion.div>
        </div>

        {/* Right */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="md:w-1/2 flex justify-center"
        >
          <img
            src={rightImage}
            alt="Hero"
            className="w-full max-w-[570px] h-auto"
          />
        </motion.div>
      </section>
    </div>
  );
};

export default Header;
