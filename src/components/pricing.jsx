import React from "react";
import FAQSection from "./faq";

export default function PricingSection() {
  return (
    <section className="bg-[#FDF1EC] py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-12 text-center sm:text-left">
          <p className="uppercase text-sm text-[#F86338] font-semibold tracking-widest">
            Pricing
          </p>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#1E1E1E] leading-tight mt-2">
            Check Our
            <br className="hidden sm:block" />
            Pricing Plans
          </h2>
        </div>

        {/* Pricing Cards */}
        <div className="flex flex-col sm:flex-row sm:flex-wrap sm:justify-center gap-6 overflow-x-auto sm:overflow-visible snap-x sm:snap-none scroll-pl-4 pb-4 sm:pb-0">
          {/* Card 1 */}
          <div className="flex-shrink-0 w-[100%] sm:w-[391px] snap-start border border-[#F5D3C2] rounded-[6px] bg-transparent px-6 sm:px-8 py-10">
            <p className="uppercase text-sm text-[#F86338] font-semibold tracking-widest mb-2">
              Consultation
            </p>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-[#1E1E1E] mb-4">
              Free
            </h3>
            <p className="text-[#5F5F5F] text-sm leading-relaxed mb-6">
              Your digital marketing efforts,
              <br />
              instead of handling in-house.
            </p>
            <ul className="space-y-3 mb-8 text-sm">
              <li className="text-[#F86338] font-medium">✚ Brand Design</li>
              <li className="text-[#C4C4C4]">◯ Market Analysis</li>
              <li className="text-[#C4C4C4]">◯ Production</li>
            </ul>
            <button style={{backgroundColor:"white"}} className="bg-white text-black font-bold text-sm px-6 py-2 rounded shadow-md w-full sm:w-auto">
              CONTACT US
            </button>
          </div>

          {/* Card 2 (Popular) */}
          <div className="flex-shrink-0 relative z-10 w-[100%] sm:w-[391px] bg-white px-6 sm:px-8 py-10 rounded-t border border-[#E5E7EB] shadow-md snap-start">
            <span className="absolute -top-4 left-6 sm:left-8 bg-[#F86338] text-white text-xs px-4 py-1 rounded-full font-semibold shadow-md">
              Popular
            </span>
            <p className="uppercase text-sm text-[#F86338] font-semibold tracking-widest mb-2">
              Design
            </p>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-[#1E1E1E] mb-4">
              $1500
            </h3>
            <p className="text-[#5F5F5F] text-sm leading-relaxed mb-6 underline">
              Provide your business with a variety
              <br />
              of digital solutions to promote.
            </p>
            <ul className="space-y-3 mb-8 text-sm">
              <li className="text-[#F86338] font-medium">✚ Brand Design</li>
              <li className="text-[#F86338] font-medium">✚ Market Analysis</li>
              <li className="text-[#C4C4C4]">◯ Production</li>
            </ul>
            <button style={{backgroundColor:"#F86338"}} className="bg-[#F86338] text-white font-bold text-sm px-6 py-2 rounded shadow-md w-full sm:w-auto hover:bg-[#e0522f] transition">
              CONTACT US
            </button>
          </div>

          {/* Card 3 */}
          <div className="flex-shrink-0 w-[100%] sm:w-[391px] border border-[#F5D3C2] rounded-[6px] bg-transparent px-6 sm:px-8 py-10 snap-start">
            <p className="uppercase text-sm text-[#F86338] font-semibold tracking-widest mb-2">
              Design + Code
            </p>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-[#1E1E1E] mb-4">
              $2900
            </h3>
            <p className="text-[#5F5F5F] text-sm leading-relaxed mb-6">
              Help you hit your marketing goals and
              <br />
              grow your business.
            </p>
            <ul className="space-y-3 mb-8 text-sm">
              <li className="text-[#F86338] font-medium">✚ Brand Design</li>
              <li className="text-[#F86338] font-medium">✚ Market Analysis</li>
              <li className="text-[#F86338] font-medium">✚ Production</li>
            </ul>
            <button
              style={{ backgroundColor: "white" }}
              className="bg-white text-black font-bold text-sm px-6 py-2 rounded shadow-md w-full sm:w-auto"
            >
              CONTACT US
            </button>
          </div>
        </div>

        <div className="mt-16">
          <FAQSection />
        </div>
      </div>
    </section>
  );
}
