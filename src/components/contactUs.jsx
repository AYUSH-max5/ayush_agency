import { ChevronDown } from "lucide-react";

export default function ContactSection() {
  return (
    <div className="w-full">
      {/* Map Section */}
      <div className="relative w-full h-[500px]">
  {/* Embedded Google Map */}
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119065.02905821706!2d78.99010830856791!3d21.161065902018567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c0a5a31faf13%3A0x19b37d06d0bb3e2b!2sNagpur%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1746002250369!5m2!1sen!2sin"
    width="100%"
    height="100%"
    style={{ border: 0 }}
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
    className="absolute inset-0 w-full h-full"
  ></iframe>

  {/* Contact Form Overlay */}
  <div className="absolute left-10 top-10 md:left-20 md:top-20 bg-white shadow-lg rounded p-8 w-[350px]">
    <h3 className="text-xl font-semibold text-[#3b1e1e] mb-6">Get In Touch</h3>
    <form className="space-y-4">
      <input
        type="email"
        placeholder="Your email"
        className="w-full border border-[#f1ded4] px-4 py-3 text-sm rounded outline-none"
      />
      <div className="relative">
        <select
          className="appearance-none w-full border border-[#f1ded4] px-4 py-3 text-sm rounded text-[#3b1e1e] outline-none"
        >
          <option>Subject</option>
          <option>Support</option>
          <option>Sales</option>
        </select>
        <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-[#f1634c]" size={18} />
      </div>
      <textarea
        rows="3"
        placeholder="Message"
        className="w-full border border-[#f1ded4] px-4 py-3 text-sm rounded outline-none"
      ></textarea>
      <button
        type="submit"
        className="bg-[#f1634c] hover:bg-[#e2533b] text-white px-6 py-2 rounded font-semibold text-xs"
      >
        SUBMIT NOW
      </button>
    </form>
  </div>
</div>


      {/* Footer Section */}
      <footer className="bg-[#fef0e9]  px-10 py-12">
        <div className="items-center justify-center flex max-w-6xl mx-auto flex-col sm:grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo/Agency */}
          <div>
            <h3 className="text-lg font-bold text-[#3b1e1e]">Agency</h3>
          </div>

          {/* Menu */}
          <div>
            <h4 className="text-xs text-[#f1634c] font-medium mb-3 tracking-wider">MENU</h4>
            <ul className="space-y-2 text-sm text-[#3b1e1e]">
              <li>About</li>
              <li>Services</li>
              <li>Blog</li>
              <li>Contact</li>
            </ul>
          </div>

          {/* Service */}
          <div>
            <h4 className="text-xs text-[#f1634c] font-medium mb-3 tracking-wider">SERVICE</h4>
            <ul className="space-y-2 text-sm text-[#3b1e1e]">
              <li>Design</li>
              <li>Development</li>
              <li>Marketing</li>
              <li>See More</li>
            </ul>
          </div>

          {/* Social Icons */}
          <div className="flex items-start gap-4">
            {["facebook", "twitter", "instagram"].map((name, idx) => (
              <div
                key={idx}
                className="bg-[#f1634c] text-white rounded-full w-9 h-9 flex items-center justify-center"
              >
                <i className={`fab fa-${name}`}></i>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 flex justify-between text-xs text-[#6f5e5e] border-t border-[#ecd9d0] pt-6">
          <span>Copyright © 2022 Laaqiq. All Rights Reserved.</span>
          <div className="flex gap-6">
            <span>Terms of Use</span>
            <span>Privacy Policy</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
