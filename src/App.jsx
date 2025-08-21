import React, { useState } from "react"; // <-- added useState
import { motion } from "framer-motion";
import {
  FaUsers,
  FaLightbulb,
  FaRocket,
  FaCogs,
  FaDiscord,
  FaTwitter,
  FaLinkedin,
  FaTelegram,
  FaBars,   // <-- added
  FaTimes,  // <-- added
} from "react-icons/fa";
import "./App.css";

const App = () => {
  const [isOpen, setIsOpen] = useState(false); // <-- mobile menu state
  const pillars = [
    {
      icon: <FaLightbulb className="text-orange-500 w-12 h-12 mb-4" />,
      title: "Strategic Growth Marketing",
      desc: "Global awareness campaigns, Web3 education drives, and influencer activations.",
    },
    {
      icon: <FaCogs className="text-blue-500 w-12 h-12 mb-4" />,
      title: "Tech Partnerships & Integrations",
      desc: "Alliances with EdTech, Blockchain networks, DAOs, and creator communities.",
    },
    {
      icon: <FaRocket className="text-green-500 w-12 h-12 mb-4" />,
      title: "Creator & Developer Ecosystem",
      desc: "Onboard innovators, fund experiments, and co-develop new utilities.",
    },
    {
      icon: <FaUsers className="text-purple-500 w-12 h-12 mb-4" />,
      title: "Blockchain Adoption Catalyst",
      desc: "Accelerate mainstream adoption through education, onboarding programs, and integration.",
    },
  ];

  const programs = [
    {
      icon: <FaUsers className="text-blue-500 w-10 h-10 mb-2" />,
      title: "Partnership Program",
      desc: "Join our curated network of Web3 innovators, EdTech platforms, and blockchain pioneers.",
    },
    {
      icon: <FaLightbulb className="text-green-500 w-10 h-10 mb-2" />,
      title: "Developer Hub",
      desc: "Accelerate your Web3 project with funding, mentorship, and technical support.",
    },
    {
      icon: <FaRocket className="text-orange-500 w-10 h-10 mb-2" />,
      title: "Web3 Academy",
      desc: "Comprehensive education programs for individuals and organizations entering Web3.",
    },
    {
      icon: <FaCogs className="text-purple-500 w-10 h-10 mb-2" />,
      title: "Global Summit Series",
      desc: "Annual conferences bringing together Web3 leaders, innovators, and investors.",
    },
  ];

  const news = [
    {
      type: "Partnership",
      title: "Major EdTech Integration Announced",
      date: "Dec 15, 2024",
      desc: "TekCentra partners with leading educational platforms to bring Web3 curriculum to over 1 million students worldwide.",
    },
    {
      type: "Event",
      title: "Web3 Innovation Summit 2025",
      date: "Jan 20, 2025",
      desc: "Join industry leaders in Singapore for our flagship conference featuring 100+ speakers and breakthrough technology demonstrations.",
    },
    {
      type: "Research",
      title: "State of Web3 Adoption Report",
      date: "Dec 1, 2024",
      desc: "Comprehensive analysis revealing key trends and projections for Web3 technology adoption across global markets.",
    },
  ];

  return (
    <div className="w-full font-sans text-white bg-black overflow-x-hidden">
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-black bg-opacity-80 backdrop-blur-md p-6 flex justify-between items-center">
        <div className="text-2xl font-bold">
          <span className="text-blue-500">Tek</span>Centra
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 font-semibold">
          <a href="#about" className="hover:text-orange-500 transition">About</a>
          <a href="#pillars" className="hover:text-orange-500 transition">Pillars</a>
          <a href="#programs" className="hover:text-orange-500 transition">Programs</a>
          <a href="#news" className="hover:text-orange-500 transition">News</a>
          <a href="#contact" className="hover:text-orange-500 transition">Contact</a>
          <a href="#get-involved" className="hover:text-orange-500 transition">Get Involved</a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <FaTimes className="text-white w-6 h-6" />
            ) : (
              <FaBars className="text-white w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="absolute top-full left-0 w-full bg-black bg-opacity-95 flex flex-col items-center py-4 md:hidden overflow-hidden"
        >
          <a href="#about" className="py-2 text-white hover:text-orange-500 transition" onClick={() => setIsOpen(false)}>About</a>
          <a href="#pillars" className="py-2 text-white hover:text-orange-500 transition" onClick={() => setIsOpen(false)}>Pillars</a>
          <a href="#programs" className="py-2 text-white hover:text-orange-500 transition" onClick={() => setIsOpen(false)}>Programs</a>
          <a href="#news" className="py-2 text-white hover:text-orange-500 transition" onClick={() => setIsOpen(false)}>News</a>
          <a href="#contact" className="py-2 text-white hover:text-orange-500 transition" onClick={() => setIsOpen(false)}>Contact</a>
          <a href="#get-involved" className="py-2 text-white hover:text-orange-500 transition" onClick={() => setIsOpen(false)}>Get Involved</a>
        </motion.div>
      </nav>

      {/* Hero Section */}
      <section className="w-full min-h-screen flex flex-col items-center justify-center text-center px-4 bg-gradient-to-r from-[#1E90FF] to-[#00C896] relative">
        <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1}}>
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-white font-montserrat">
            TekCentra
          </h1>
          <p className="text-xl md:text-2xl font-semibold mt-5 mb-5 font-roboto">
            The Center of Tech-Driven Collaborations
          </p>
        </motion.div>

        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="max-w-3xl mb-8 text-lg md:text-xl text-white font-roboto"
        >
          An independent tech-forward strategic platform designed to drive global adoption, growth, and
          innovation around emerging Web3 ecosystems.
        </motion.p>

        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex gap-4 flex-wrap justify-center"
        >
          <a
            href="#get-involved"
            className="px-6 py-3 bg-white text-white rounded-full font-bold font-roboto hover:bg-[#FF7A3D] hover:text-[#FF7A3D] transition-all transform hover:scale-105"
          >
            Join Our Community
          </a>
          <a
            href="#contact"
            className="px-6 py-3 bg-white text-white rounded-full font-bold font-roboto hover:bg-[#FF7A3D] hover:text-[#00C896] transition-all transform hover:scale-105"
          >
            Become a Partner
          </a>
        </motion.div>
      </section>


      {/* About Section */}
      <section id="about" className="py-24 px-4 md:px-20 text-center bg-gray-800">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-6 text-blue-500"
        >
          About TekCentra
        </motion.h2>
        <p className="max-w-4xl mx-auto mb-6 text-gray-300">
          TekCentra serves as the official growth and partnership engine behind tech innovations, focusing on building meaningful collaborations, fueling tech adoption, and accelerating the reach of next-gen digital education.
        </p>
        <p className="max-w-4xl mx-auto text-gray-300">
          Our Mission: To accelerate Web3 adoption through strategic partnerships, innovative education, and ecosystem building that connects visionary projects with global markets.
        </p>
      </section>

      {/* Pillars Section */}
      <section id="pillars" className="py-24 px-4 md:px-20 bg-gray-900 text-center">
        <h2 className="text-4xl font-bold mb-12 text-blue-500">Our Pillars</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((pillar, idx) => (
            <motion.div
              key={idx}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:scale-105 transform transition"
            >
              {pillar.icon}
              <h3 className="text-xl font-semibold mt-4">{pillar.title}</h3>
              <p className="text-gray-300 mt-2">{pillar.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Programs & Initiatives */}
      <section id="programs" className="py-24 px-4 md:px-20 text-center bg-gray-800">
        <h2 className="text-4xl font-bold mb-12 text-orange-500">Programs & Initiatives</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {programs.map((program, idx) => (
            <motion.div
              key={idx}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              className="bg-gray-700 p-6 rounded-2xl shadow-lg hover:scale-105 transform transition"
            >
              {program.icon}
              <h3 className="text-xl font-semibold mt-4">{program.title}</h3>
              <p className="text-gray-300 mt-2">{program.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Get Involved Section */}
      <section
        id="get-involved"
        className="scroll-mt-28 py-24 px-4 md:px-20 text-center bg-gradient-to-r from-[#1E90FF] to-[#00C896]"
      >
        <h2 className="text-4xl font-bold mb-6 font-montserrat">Get Involved</h2>
        <p className="max-w-2xl mx-auto mb-12 font-roboto">
          Join the TekCentra ecosystem and help shape the future of Web3 innovation.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {[
            { title: "Creators", desc: "Build, innovate, and monetize your Web3 creations with our support.", cta: "Join as Creator" },
            { title: "Partners", desc: "Collaborate with industry leaders to accelerate mutual growth.", cta: "Become Partner" },
            { title: "Developers", desc: "Access tools, funding, and mentorship to build the next big thing.", cta: "Start Building" },
            { title: "Investors", desc: "Discover and invest in promising Web3 projects and startups.", cta: "Explore Deals" },
          ].map((card, i) => (
            <div key={i} className="bg-black/50 p-6 rounded-2xl shadow">
              <h3 className="font-semibold text-[#FF7A3D] mb-2 font-montserrat">{card.title}</h3>
              <p className="text-white/80 text-sm font-roboto">{card.desc}</p>
              <button className="mt-4 px-4 py-2 bg-white text-black rounded-full hover:bg-black hover:text-[#FF7A3D] transition font-roboto">
                {card.cta}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* News & Updates */}
      <section id="news" className="py-24 px-4 md:px-20 text-center bg-gray-900">
        <h2 className="text-4xl font-bold mb-12 text-blue-500">News & Updates</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {news.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:scale-105 transform transition text-left"
            >
              <span className="text-orange-500 font-bold">{item.type}</span>
              <h3 className="text-xl font-semibold mt-2">{item.title}</h3>
              <p className="text-gray-300 mt-2 text-sm">{item.date}</p>
              <p className="text-gray-300 mt-2">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Apply to Partner Form */}
      <section id="contact" className="scroll-mt-28 py-24 px-4 md:px-20 bg-gray-800">
  <h2 className="text-4xl font-bold text-[#FF7A3D] mb-4 font-montserrat text-center">
    Apply to Partner
  </h2>
  <p className="text-gray-300 mb-12 max-w-2xl mx-auto font-roboto">
    Partner with TekCentra to drive innovation and adoption. Fill out the form and our team will get back to you within 48 hours.
  </p>

  <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-start">
    {/* Left: Form */}
    <form className="bg-gray-900 p-8 rounded-2xl shadow-lg space-y-6">
      <input
        type="text"
        placeholder="Full Name"
        className="w-full p-4 rounded-lg bg-white text-black focus:outline-none focus:ring-2 focus:ring-[#1E90FF]"
      />
      <input
        type="email"
        placeholder="Email"
        className="w-full p-4 rounded-lg bg-white text-black focus:outline-none focus:ring-2 focus:ring-[#1E90FF]"
      />
      <input
        type="text"
        placeholder="Company / Project"
        className="w-full p-4 rounded-lg bg-white text-black focus:outline-none focus:ring-2 focus:ring-[#1E90FF]"
      />
      <input
        type="text"
        placeholder="Partnership Type"
        className="w-full p-4 rounded-lg bg-white text-black focus:outline-none focus:ring-2 focus:ring-[#1E90FF]"
      />
      <textarea
        placeholder="Project Description"
        className="w-full p-4 h-32 rounded-lg bg-white text-black focus:outline-none focus:ring-2 focus:ring-[#1E90FF]"
      ></textarea>
      <button className="w-full py-3 bg-gradient-to-r from-[#1E90FF] to-[#00C896] text-white font-bold rounded-full hover:opacity-90 transition">
        Submit Application
      </button>
    </form>

    {/* Right: Info */}
    <div className="text-left space-y-6">
      <h3 className="text-2xl font-semibold text-[#1E90FF] font-montserrat">
        Why Partner with Us?
      </h3>
      <p className="text-gray-300 font-roboto">
        TekCentra provides access to a global network of innovators, funding opportunities, and strategic growth programs. 
        Together, we can accelerate adoption and make your project thrive.
      </p>
      <ul className="space-y-3 text-gray-300 font-roboto">
        <li>✅ Global visibility through our network</li>
        <li>✅ Access to Web3 education and resources</li>
        <li>✅ Co-marketing & ecosystem growth support</li>
      </ul>
    </div>
  </div>
</section>


      {/* Footer */}
      <footer className="bg-black py-12 text-gray-400 text-center px-4">
        <div className="flex justify-center gap-6 mb-6">
          <FaDiscord className="w-6 h-6 hover:text-blue-500 transition cursor-pointer" />
          <FaTwitter className="w-6 h-6 hover:text-blue-400 transition cursor-pointer" />
          <FaLinkedin className="w-6 h-6 hover:text-blue-700 transition cursor-pointer" />
          <FaTelegram className="w-6 h-6 hover:text-blue-300 transition cursor-pointer" />
        </div>
        <p>© 2024 TekCentra. All rights reserved. Empowering the future of Web3 collaboration.</p>
      </footer>
    </div>
  );
};

export default App;
