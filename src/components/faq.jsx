import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqItems = [
  {
    question: "A digital agency is a business",
    answer:
      "Digital marketing efforts, instead of handling in-house. They can provide your business with a variety of digital solutions to promote your product or service online and help you hit your marketing goals and grow your business.",
  },
  {
    question: "Hire to outsource your digital",
    answer: "",
  },
  {
    question: "Marketing efforts",
    answer: "",
  },
  {
    question: "Can provide your business",
    answer: "",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="bg-[#fef0e9] px-8 py-16 md:px-16 flex flex-col md:flex-row gap-12">
      {/* Left Side */}
      <div className="max-w-md">
        <p className="text-xs tracking-widest text-[#f1634c] mb-2">FAQ</p>
        <h2 className="text-4xl font-bold text-[#3b1e1e] leading-tight mb-4">
          Frequently Asked <br /> Questions
        </h2>
        <p className="text-[#6f5e5e] mb-4 leading-relaxed">
          A digital agency is a business you hire to outsource your digital
          marketing efforts, instead of handling in-house.
        </p>
        <a href="#" className="text-[#3b1e1e] font-semibold">
          Contact Us
        </a>
      </div>

      {/* Right Side - Accordion */}
      <div
        className="w-full max-w-xl overflow-hidden rounded border border-[#f1ded4]"
        style={{ backgroundColor: "white" }}
      >
        {faqItems.map((item, index) => (
          <div
            key={index}
            className="border-b last:border-b-0 bg-white border-[#f1ded4]"
            style={{ backgroundColor: "white" }}
          >
            <button
              onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
              className={`w-full flex justify-between items-center px-6 py-5 text-left  ${
                openIndex === index ? "bg-white" : "bg-[#fef0e9]"
              }`}
            >
              <span
                className="font-semibold text-white text-[17px]"
                
              >
                {item.question}
              </span>
              {openIndex === index ? (
                <ChevronUp className="text-[#f1634c]" />
              ) : (
                <ChevronDown className="text-[#f1634c]" />
              )}
            </button>

            {openIndex === index && item.answer && (
              <div className="bg-white px-6 pb-6 text-[#6f5e5e] text-sm leading-relaxed">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
