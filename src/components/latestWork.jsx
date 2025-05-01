import React from "react";
import illu from "../assets/illu.png";
import girl from "../assets/girl.png";
import image1 from "../assets/a07f7fcaf6cde479f514ff2b778d3992269b0b18.png";
import image2 from "../assets/98b5cbbf0bd3afb547694b02ae9ae19830eb5ced.png";
import image3 from "../assets/47fcb2809a7a9ccb42478d355694f22ecd72dfed.png";
import image4 from "../assets/8e90b276e42fc0cfdf94f4dd264acda895fbf972.png";
const portfolioItems = [
  {
    title: "SOFA",
    category: "Design",
    image:
      "https://th.bing.com/th/id/OIP.KbLVFX8kcHVuMV9bX2gQhAHaHa?rs=1&pid=ImgDetMain",
  },
  {
    title: "KeyBoard",
    category: "Branding",
    image: "https://images.unsplash.com/photo-1618220179428-227d1fc0e1fd",
  },
  {
    title: "Work Media",
    category: "Illustration",
    image: "https://images.unsplash.com/photo-1600104538968-0676b7dbfe3a",
  },
  {
    title: "DDDone",
    category: "Motion",
    image: "https://images.unsplash.com/photo-1621570071056-8392160a2f08",
  },
];

const LatestWork = () => {
  return (
    <div className="bg-[#28293e] text-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div className="text-center mb-12">
          <p className="text-sm tracking-widest text-[#e77c6d] uppercase">
            Portfolio
          </p>
          <h2 className="text-4xl font-bold mt-2">Latest Work</h2>

          {/* Filters */}
          <div className="flex flex-wrap justify-center mt-6 gap-4 text-sm text-gray-300">
            <span className="cursor-pointer hover:text-white">
              Show All <sup>14</sup>
            </span>
            <span className="cursor-pointer hover:text-white">
              Design <sup>6</sup>
            </span>
            <span className="cursor-pointer hover:text-white">
              Branding <sup>4</sup>
            </span>
            <span className="cursor-pointer hover:text-white">
              Illustration <sup>3</sup>
            </span>
            <span className="cursor-pointer hover:text-white">
              Motion <sup>1</sup>
            </span>
          </div>
        </div>

        {/* Portfolio Grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {portfolioItems.map((item, index) => (
            <div
              key={index}
              className="relative rounded-md overflow-hidden group aspect-[4/3] bg-gray-800"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-40 transition-all" />
              <div className="absolute bottom-4 left-4">
                <span className="bg-white text-black text-xs font-semibold px-3 py-1 rounded-full">
                  {item.category}
                </span>
                <h3 className="text-xl font-bold mt-2">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* Explore More Button */}
        <div className="text-center mt-12">
          <button className="border px-6 py-2 rounded-md text-sm font-semibold hover:bg-white hover:text-black transition">
            Explore More
          </button>
        </div>
      </div>

      {/* <!-- Banner Section --> */}
      <div class="bg-transparent py-16 px-4 sm:px-6 lg:px-8 text-white">
        <div class="max-w-7xl mx-auto">
          <div class="bg-[#FCEBE5] p-10 rounded-xl relative flex flex-col md:flex-row items-center justify-between overflow-hidden">
            {/* <!-- Left Content --> */}
            <div class="z-10 max-w-lg">
              <p class="uppercase text-sm text-red-400 font-semibold mb-2">
                Get Started
              </p>
              <h2 class="text-2xl font-bold text-[#1C1C3A] mb-4">
                We Help Companies Move Faster
              </h2>
              <h2 class="bg-[#EF6D58] block text-white px-6 py-2 rounded-lg font-medium shadow-md hover:bg-[#e0522f] transition">
                Contact Us
              </h2>
            </div>

            {/* <!-- Illustration --> */}
            <div class=" absolute left-1/2 top-1/2 transform -translate-x-1/2 md:translate-x-0 md:left-1/3 md:top-1/2 md:-translate-y-1/2 z-0 opacity-80">
              <img
                src={illu}
                alt="Illustration"
                class="w-[350px] drop-shadow-xl"
              />
            </div>

            {/* <!-- Right Image --> */}
            <div class="z-10 mt-8 md:mt-0 md:absolute md:bottom-0 md:right-0">
              <img src={girl} alt="Person" class="h-[300px] object-contain" />
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Team Section --> */}
      <div class="bg-transparent py-16 px-4 sm:px-6 lg:px-8 text-white">
        <div class="max-w-7xl mx-auto">
          <h4 class="text-sm text-red-400 uppercase tracking-wider mb-2">
            Our Team
          </h4>
          <h2 class="text-4xl font-extrabold mb-12">
            Team of Designers
            <br />
            and Developers
          </h2>

          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {/* <!-- Team Member 1 --> */}
            <div class="bg-transparent p-6 rounded-2xl text-center">
              <img
                class="mx-auto mb-4 rounded-full w-24 h-24 object-cover"
                src={image2}
                alt="Azah Anyeni"
              />
              <h3 class="font-bold text-lg">Azah Anyeni</h3>
              <p class="text-sm text-gray-400">Designer</p>
            </div>

            {/* <!-- Team Member 2 --> */}
            <div class="bg-transparent p-6 rounded-2xl text-center">
              <img
                class="mx-auto mb-4 rounded-full w-24 h-24 object-cover"
                src={image1}
                alt="Roelof Bekkenenks"
              />
              <h3 class="font-bold text-lg">Roelof Bekkenenks</h3>
              <p class="text-sm text-gray-400">React Developer</p>
            </div>

            {/* <!-- Team Member 3 --> */}
            <div class="bg-transparent p-6 rounded-2xl text-center">
              <img
                class="mx-auto mb-4 rounded-full w-24 h-24 object-cover"
                src={image3}
                alt="Leonardo Oliveira"
              />
              <h3 class="font-bold text-lg">Leonardo Oliveira</h3>
              <p class="text-sm text-gray-400">Illustrator</p>
            </div>

            {/* <!-- Team Member 4 --> */}
            <div class="bg-transparent p-6 rounded-2xl text-center">
              <img
                class="mx-auto mb-4 rounded-full w-24 h-24 object-cover"
                src={image4}
                alt="Izabella Tabakova"
              />
              <h3 class="font-bold text-lg">Izabella Tabakova</h3>
              <p class="text-sm text-gray-400">Product Designer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestWork;
