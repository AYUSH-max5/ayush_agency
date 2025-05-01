import React from "react";
import digitalSide from "../assets/digitalSide.png";
import Vortex from "../assets/Vortex.png";
import TRAVELEXPLORER from "../assets/TRAVELEXPLORER.png";
import FUZION from "../assets/FUZION.png";
import MediaFury from "../assets/MediaFury.png";
import expRightImage from "../assets/expRightImage.png";

const ExperienceDesignAgency = () => {
  return (
    <div className="bg-[#fdf0e9] py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Logos Row */}
        <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-12">
          <img src={digitalSide} alt="Digital Side" className="h-8 md:h-10" />
          <img src={Vortex} alt="Vortex" className="h-8 md:h-10" />
          <img src={TRAVELEXPLORER} alt="Travel Explorer" className="h-8 md:h-10" />
          <img src={FUZION} alt="Fuzion" className="h-8 md:h-10" />
          <img src={MediaFury} alt="Media Fury" className="h-8 md:h-10" />
        </div>

        {/* Main Content Section */}
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
          {/* Left Image */}
          <div className="relative w-full md:w-1/2">
            <div className="absolute top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 md:w-40 md:h-40 rounded-full bg-purple-300/50 blur-3xl"></div>
            <img
              src={expRightImage}
              alt="Experience"
              className="rounded-lg shadow-lg relative z-10 w-full max-w-[566px] h-auto"
            />
          </div>

          {/* Text Section */}
          <div className="w-full md:w-1/2">
            <h5 className="text-sm text-[#EF6D58] mb-4 tracking-widest font-medium uppercase">
              About
            </h5>
            <h2 className="text-[32px] md:text-[56px] font-extrabold text-[#391400] mb-6 leading-tight md:leading-[64px]">
              An Experience <br />
              Design Agency
            </h2>
            <p className="text-[#391400] text-base md:text-lg mb-4 leading-relaxed">
              Provides a full service range.
            </p>
            <p className="text-[#391400A3] text-sm md:text-base leading-relaxed mb-6">
              Ability to put themselves in the merchant&apos;s shoes. It is meant to
              partner on the long run, and work as an extension of the
              merchant&apos;s team.
            </p>
            <button style={{backgroundColor :"white"}} className="text-[#391400] bg-white px-6 py-3 mt-2 uppercase font-extrabold text-sm tracking-wide rounded shadow-md">
              About Us
            </button>
          </div>
        </div>

        {/* Statistics Section */}
        <div className="mt-16 flex flex-col md:flex-row text-center border border-[#f2dcd0] bg-[#fef1ea] rounded-md divide-y md:divide-y-0 md:divide-x divide-[#f2dcd0]">
          <div className="flex-1 p-6">
            <h2 className="text-3xl font-bold text-[#431d05]">42%</h2>
            <p className="mt-2 text-[#431d05] text-sm">Years of experience</p>
          </div>
          <div className="flex-1 p-6">
            <h2 className="text-3xl font-bold text-[#431d05]">73+</h2>
            <p className="mt-2 text-[#431d05] text-sm">Agency members</p>
          </div>
          <div className="flex-1 p-6">
            <h2 className="text-3xl font-bold text-[#431d05]">5.000</h2>
            <p className="mt-2 text-[#431d05] text-sm">Projects complete</p>
          </div>
        </div>

        {/* How We Work Section */}
        <div className="bg-[#fef1ea] px-4 md:px-8 py-12 mt-20">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start border-b border-[#f2dcd0] pb-10">
            {/* Left Section */}
            <div className="md:w-1/2 mb-10 md:mb-0">
              <p className="uppercase text-sm text-[#e77c6d] tracking-widest mb-3">
                How we work
              </p>
              <h2 className="text-2xl md:text-3xl font-bold text-[#431d05] leading-snug mb-4">
                Making Your Projects <br /> Look Awesome
              </h2>
              <p className="text-[#431d05] mb-4 text-base leading-relaxed">
                Technical skills, design, business understanding, ability to put
                themselves in the merchant's shoes.
              </p>
              <a href="#" className="text-[#431d05] font-medium underline">
                Read More
              </a>
            </div>

            {/* Steps Section */}
            <div className="md:w-1/2 space-y-6">
              {[1, 2, 3].map((num) => (
                <div className="flex items-start" key={num}>
                  <span className="text-2xl font-bold text-[#431d05] mr-4">{num}</span>
                  <p className="text-[#431d05] font-medium">
                    {num === 1 && "Full service range including"}
                    {num === 2 && "Technical skills, design, business"}
                    {num === 3 && "Themselves in the merchant's"}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Video Section */}
        <div className="bg-[#fef1ea] px-4 md:px-8 py-16">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
            {/* Video Thumbnail */}
            <div className="w-full md:w-1/2 relative">
              <div className="relative w-full h-64 md:h-80 rounded-md overflow-hidden shadow-md">
                <img
                  src="https://images.unsplash.com/photo-1603297631954-cda4ac633ee6"
                  alt="Video Reel"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="w-16 h-16 rounded-full border border-white bg-white bg-opacity-10 flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M6 4l10 6-10 6V4z" />
                    </svg>
                  </button>
                </div>
                <div className="absolute bottom-2 left-2 bg-black text-white text-xs px-2 py-0.5 rounded">
                  1:45
                </div>
              </div>
            </div>

            {/* Text Section */}
            <div className="w-full md:w-1/2">
              <p className="uppercase text-sm text-[#e77c6d] tracking-widest mb-2">
                Video Reel
              </p>
              <h2 className="text-2xl md:text-3xl font-bold text-[#431d05] leading-snug mb-4">
                Unlock The Greatest <br /> Value Possible
              </h2>
              <p className="text-[#431d05] max-w-md text-base leading-relaxed">
                Design, business understanding, ability to put themselves in the
                merchant's shoes meant to partner.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceDesignAgency;
