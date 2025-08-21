import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  FaArrowRight,
  FaBolt,
  FaBookOpen,
  FaDiscord,
  FaGlobe,
  FaHandshake,
  FaLinkedin,
  FaNetworkWired,
  FaPaperPlane,
  FaRocket,
  FaShapes,
  FaTelegram,
  FaTwitter,
  FaUsers,
} from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./App.css";
import img1 from "./assets/images/img1.jpeg";
import img2 from "./assets/images/img2.jpeg";
import img3 from "./assets/images/img3.JPG";
import img4 from "./assets/images/img4.JPG";
import img5 from "./assets/images/img5.JPG";
import img6 from "./assets/images/img6.JPG";
import img7 from "./assets/images/img7.JPG";
import img8 from "./assets/images/img8.JPG";
import img9 from "./assets/images/img9.JPG";
import img10 from "./assets/images/img10.JPG";
import img11 from "./assets/images/img11.jpeg";
import img12 from "./assets/images/img12.png";

// ---------- Utility: simple counter hook ----------
function useCounter(target = 0, duration = 1200) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    let start = 0;
    const startTime = performance.now();
    let raf;
    const step = (now) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // easeOutCubic
      const next = Math.floor(start + (target - start) * eased);
      setValue(next);
      if (progress < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [target, duration]);
  return value;
}

// ---------- Smooth scroll helper ----------
const scrollToId = (id) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
};

// ---------- Decorative: Animated Nodes Background ----------
const NodesBG = () => (
  <svg
    aria-hidden
    className="absolute inset-0 -z-10 h-full w-full opacity-30"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="none"
  >
    <defs>
      <linearGradient id="g1" x1="0" x2="1" y1="0" y2="1">
        <stop offset="0%" stopColor="#93C5FD" />
        <stop offset="100%" stopColor="#6EE7B7" />
      </linearGradient>
    </defs>
    <g stroke="url(#g1)" strokeWidth="1" fill="none">
      {Array.from({ length: 16 }).map((_, r) => (
        <motion.path
          key={r}
          d={`M0 ${r * 80} L2000 ${r * 80}`}
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 4, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay: r * 0.2 }}
          opacity={(6 - r / 3) / 10}
        />
      ))}
    </g>
    <g fill="url(#g1)">
      {Array.from({ length: 40 }).map((_, i) => (
        <motion.circle
          key={i}
          cx={(i * 97) % 1400}
          cy={60 + ((i * 137) % 10) * 60}
          r={(i % 3) + 2}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay: i * 0.1 }}
          opacity=".55"
        />
      ))}
    </g>
  </svg>
);

// ---------- NAVBAR Component ----------
const navLinks = [
  ["about", "About"],
  ["programs", "Programs"],
  ["pillars", "Our Pillars"], // <-- Add this line
  ["news", "News"],
  ["involved", "Get Involved"],
  ["contact", "Contact"],
];

function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <span className="relative flex items-center">
            <span className="absolute -left-3 -top-2 h-2 w-2 rounded-full bg-blue-500" />
            <span className="absolute -right-2 -bottom-3 h-2 w-2 rounded-full bg-emerald-400" />
            <span className="text-2xl font-extrabold tracking-tight text-slate-900 flex items-center gap-1">
              Tek<span className="text-blue-600">Centra</span>
            </span>
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks
            .filter(([id]) => id !== "involved")
            .map(([id, label]) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={e => {
                  e.preventDefault();
                  scrollToId(id);
                }}
                className="relative text-lg font-semibold text-slate-800 no-underline visited:text-slate-800 px-2 py-1 transition-colors duration-200
                hover:text-blue-600 focus:outline-none
                  after:absolute after:left-0 after:right-0 after:-bottom-1 after:h-0.5 after:bg-blue-600 after:scale-x-0 after:transition-transform after:duration-200 after:origin-left
                  hover:after:scale-x-100 after:content-['']"
                style={{ position: "relative" }}
              >
                {label}
              </a>
            ))}
          <button
            onClick={() => scrollToId("involved")}
            className="ml-2 inline-flex items-center gap-2 rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow transition hover:bg-emerald-500 focus:outline-none"
          >
            Get Involved <FaArrowRight />
          </button>
        </nav>

        {/* Mobile Hamburger */}
        <a
          className="md:hidden flex items-center justify-center w-10 h-10 rounded hover:bg-blue-50 transition"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Open menu"
        >
          <svg width="24" height="24" fill="none" stroke="currentColor" className="text-blue-600">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileOpen ? "M6 18L18 6M6 6l12 12" : "M4 8h16M4 16h16"} />
          </svg>
        </a>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white/95 border-t border-slate-200 shadow-lg">
          <div className="flex flex-col items-center gap-2 py-4">
            {navLinks.map(([id, label]) => (
              <a
                key={id}
                onClick={() => {
                  scrollToId(id);
                  setMobileOpen(false);
                }}
                className="w-full text-base font-medium text-slate-700 px-4 py-2 rounded transition hover:bg-blue-50 hover:text-blue-600"
              >
                {label}
              </a>
            ))}
            <button
              onClick={() => {
                scrollToId("involved");
                setMobileOpen(false);
              }}
              className="mt-2 inline-flex items-center gap-2 rounded-full bg-blue-600 px-4 py-2 text-base font-semibold text-white shadow transition hover:bg-emerald-500"
            >
              Get Involved <FaArrowRight />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

// ---------- HERO Section Component ----------
const Hero = () => (
  <section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden pt-24 mt-5 bg-gradient-to-br from-blue-50 via-white to-emerald-50">
    <NodesBG />
    <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center md:text-left"
      >
        <p className="mb-3 inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700 ring-1 ring-inset ring-blue-200">
          Bridging Innovation and Adoption
        </p>
        <h2 className="text-4xl font-extrabold leading-tight text-slate-900 md:text-5xl">
          The Center of Tech-Driven Collaborations
        </h2>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-600">
          TekCentra is the premium growth engine for emerging tech—offering end-to-end adoption architecture that takes
          projects from concept to real-world market use.
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3 md:justify-start">
          <motion.button
            onClick={() => scrollToId("programs")}
            className="rounded-full bg-emerald-500 px-6 py-3 text-sm font-semibold text-slate-800 shadow-md transition hover:bg-emerald-600"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore Programs
          </motion.button>
          <motion.button
            onClick={() => scrollToId("about")}
            className="rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-800 transition hover:border-slate-400"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Learn More
          </motion.button>
        </div>
        <div className="mt-6 grid max-w-lg grid-cols-2 gap-4 text-sm">
          <div className="flex items-center justify-center gap-3 rounded-xl border border-slate-200 bg-white p-3 shadow-sm md:justify-start">
            <FaNetworkWired className="text-blue-600 w-7 h-7" />
            <span>Web3 • Blockchain • Fintech</span>
          </div>
          <div className="flex items-center justify-center gap-3 rounded-xl border border-slate-200 bg-white p-3 shadow-sm md:justify-start">
            <FaHandshake className="text-emerald-500 w-7 h-7" />
            <span>Partnerships & Ecosystem Growth</span>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="relative"
      >
        <img
          src= {img5} 
          alt="Futuristic team meeting"
          className="relative z-10 rounded-3xl border border-slate-200 shadow-2xl"
        />
      </motion.div>
    </div>
  </section>
);

// ---------- ABOUT / MISSION Section Component ----------
const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="about" className="relative py-20">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 md:grid-cols-2">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, x: -24 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <img
            src= {img1}
            alt="Modern workspace"
            className="rounded-3xl border border-slate-200 shadow-2xl"
          />
        </motion.div>
        <div>
          <h3 className="text-3xl font-extrabold text-slate-900">About TekCentra</h3>
          <p className="mt-4 text-slate-600">
            TekCentra serves as the official growth and partnership engine behind tech innovations, focusing on building
            meaningful collaborations, fueling tech adoption, and accelerating the reach of next‑gen digital education.
            Our mission is to accelerate Web3 adoption through strategic partnerships, innovative education, and
            ecosystem building that connects visionary projects with global markets.
          </p>
          <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
            {[
              { icon: <FaBolt />, text: "Confident" },
              { icon: <FaRocket />, text: "Futuristic" },
              { icon: <FaUsers />, text: "Collaborative" },
              { icon: <FaBookOpen />, text: "Inspiring" },
            ].map((v, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-3 shadow-sm"
              >
                <span className="text-blue-600">{v.icon}</span>
                <span className="font-medium">{v.text}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// ---------- PROGRAMS Section Component ----------
const Programs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section id="programs" className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h3 className="text-3xl font-extrabold text-slate-900">Programs & Initiatives</h3>
          <p className="mt-3 text-slate-600">
            We take tech from idea to adoption through growth marketing, tech partnerships, developer onboarding, and
            utility creation.
          </p>
        </div>
        <motion.div
          ref={ref}
          className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
        >
          {[
            {
              title: "Strategic Growth Marketing",
              desc: "Global awareness campaigns, Web3 education drives, and influencer activations.",
              icon: <FaRocket />,
            },
            {
              title: "Tech Partnerships & Integrations",
              desc: "Alliances with EdTech, Blockchain networks, DAOs, and creator communities.",
              icon: <FaGlobe />,
            },
            {
              title: "Creator & Developer Ecosystem",
              desc: "Onboard innovators, fund experiments, and co‑develop new utilities.",
              icon: <FaShapes />,
            },
            {
              title: "Blockchain Adoption Catalyst",
              desc: "Accelerate adoption through education, onboarding programs, and integration.",
              icon: <FaNetworkWired />,
            },
          ].map((p, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              whileHover={{ scale: 1.05, rotate: 1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-xl"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600 ring-1 ring-inset ring-blue-200">
                {p.icon}
              </div>
              <h4 className="text-lg font-semibold text-slate-900">{p.title}</h4>
              <p className="mt-2 text-sm text-slate-600">{p.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

// ---------- IMPACT Section Component ----------
const Impact = () => {
  const statProjects = useCounter(54, 1500);
  const statUsers = useCounter(1200000, 1700);
  const statPartners = useCounter(36, 1600);

  return (
    <section className="relative overflow-hidden py-20">
      <NodesBG />
      <div className="mx-auto max-w-7xl px-6 text-center">
        <blockquote className="mx-auto max-w-3xl text-2xl font-semibold text-slate-900">
          “Without adoption, innovation dies.”
        </blockquote>
        <p className="mt-3 text-slate-600">
          Adoption is the currency of the future. We design adoption architectures that convert breakthrough ideas into
          mainstream impact.
        </p>
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm"
          >
            <div className="text-4xl font-extrabold text-blue-600">{statProjects}+</div>
            <div className="mt-1 text-sm text-slate-600">Projects & pilots scaled</div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm"
          >
            <div className="text-4xl font-extrabold text-emerald-600">
              {(statUsers / 1000000).toFixed(1)}M+
            </div>
            <div className="mt-1 text-sm text-slate-600">Users reached / onboarded</div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm"
          >
            <div className="text-4xl font-extrabold text-purple-600">{statPartners}+</div>
            <div className="mt-1 text-sm text-slate-600">Strategic partnerships</div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// ---------- OUR PILLERS Section Component ----------
const pillars = [
  {
    icon: <FaRocket className="text-blue-500 w-8 h-8" />,
    title: "Strategic Growth Marketing",
    desc: "Executes global awareness campaigns, Web3 education drives, and influencer-led activations to amplify project reach and adoption.",
  },
  {
    icon: <FaGlobe className="text-emerald-500 w-8 h-8" />,
    title: "Tech Partnerships & Integrations",
    desc: "Forms strategic alliances with EdTech platforms, Blockchain networks, DAOs, and creator communities to expand ecosystem reach.",
  },
  {
    icon: <FaShapes className="text-purple-500 w-8 h-8" />,
    title: "Creator & Developer Ecosystem",
    desc: "Onboards innovators, funds experiments, and co-develops new utilities around breakthrough tech projects.",
  },
  {
    icon: <FaNetworkWired className="text-pink-500 w-8 h-8" />,
    title: "Blockchain Adoption Catalyst",
    desc: "Accelerates mainstream adoption through education, onboarding programs, and seamless integration solutions.",
  },
  {
    icon: <FaBookOpen className="text-yellow-500 w-8 h-8" />,
    title: "Thought Leadership",
    desc: "Hosts summits, publishes research, and collaborates with top minds in Web3 education and decentralized innovation to shape the future of technology.",
  },
];

function OurPillars() {
  return (
    <section id="pillars" className="py-20 bg-gradient-to-br from-blue-50 via-white to-emerald-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-center text-slate-900 mb-2 font-sans">Our Pillars</h2>
        <p className="text-center text-lg text-slate-600 mb-12 font-sans">
          Five core areas that drive our mission to accelerate Web3 adoption and innovation
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-gradient-to-br from-blue-50 via-white to-emerald-50 border border-slate-200 rounded-2xl p-8 shadow hover:shadow-lg transition-all"
            >
              <div className="mb-4">{pillar.icon}</div>
              <h3 className="text-xl font-bold text-slate-900 mb-2 font-sans">{pillar.title}</h3>
              <p className="text-slate-600 font-sans">{pillar.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------- NEWS Section Component ----------
const News = () => {
  const newsItems = useMemo(
    () => [
      {
        type: "Partnership",
        title: "Major EdTech Integration Announced",
        date: "Dec 15, 2024",
        desc: "TekCentra partners with leading educational platforms to bring Web3 curriculum to over 1 million students worldwide.",
        img: "https://images.unsplash.com/photo-1513258496099-48168024aec0?q=80&w=1600&auto=format&fit=crop",
      },
      {
        type: "Event",
        title: "Web3 Innovation Summit 2025",
        date: "Jan 20, 2025",
        desc: "Join industry leaders in Singapore for our flagship conference featuring 100+ speakers and breakthrough technology demonstrations.",
        img: img11
      },
      {
        type: "Research",
        title: "State of Web3 Adoption Report",
        date: "Dec 1, 2024",
        desc: "Comprehensive analysis revealing key trends and projections for Web3 technology adoption across global markets.",
        img: img12
      },
    ],
    []
  );

  return (
    <section id="news" className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-8 max-w-3xl text-center">
          <h3 className="text-3xl font-extrabold text-slate-900">News & Updates</h3>
          <p className="mt-3 text-slate-600">
            Insights, partnerships, events, and research shaping Web3, fintech, blockchain and tokenized ecosystems.
          </p>
        </div>
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          spaceBetween={24}
          slidesPerView={1}
          breakpoints={{ 768: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}
        >
          {newsItems.map((item, i) => (
            <SwiperSlide key={i}>
              <motion.article
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5 }}
                className="h-full overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
              >
                <img src={item.img} alt={item.title} className="h-48 w-full object-cover" />
                <div className="p-6">
                  <span className="text-xs font-semibold text-emerald-600">{item.type}</span>
                  <h4 className="mt-2 text-lg font-semibold text-slate-900">{item.title}</h4>
                  <p className="mt-1 text-xs text-slate-500">{item.date}</p>
                  <p className="mt-3 text-sm text-slate-600">{item.desc}</p>
                </div>
              </motion.article>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

// ---------- GET INVOLVED Section Component ----------
const GetInvolved = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    show: { opacity: 1, y: 0, scale: 1 },
  };

  return (
    <section id="involved" className="relative overflow-hidden py-20">
      <NodesBG />
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h3 className="text-3xl font-extrabold text-slate-900">Get Involved</h3>
          <p className="mt-3 text-slate-600">
            Join the TekCentra ecosystem and help shape the future of Web3 innovation.
          </p>
        </div>
        <motion.div
          ref={ref}
          className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
        >
          {[
            {
              title: "Creators",
              desc: "Build, innovate, and monetize your Web3 creations with our support.",
              cta: "Join as Creator",
            },
            {
              title: "Partners",
              desc: "Collaborate with industry leaders to accelerate mutual growth.",
              cta: "Become Partner",
            },
            {
              title: "Developers",
              desc: "Access tools, funding, and mentorship to build the next big thing.",
              cta: "Start Building",
            },
            {
              title: "Investors",
              desc: "Discover and invest in promising Web3 projects and startups.",
              cta: "Explore Deals",
            },
          ].map((card, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <div>
                <h4 className="text-lg font-semibold text-slate-900">{card.title}</h4>
                <p className="mt-2 text-sm text-slate-600">{card.desc}</p>
              </div>
              <motion.button
                className="mt-5 inline-flex w-max items-center gap-2 rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-800 transition hover:border-slate-400"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {card.cta}
              </motion.button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

// ---------- OUR JOURNEY Section Component ----------
function OurJourney() {
  const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-emerald-50 text-slate-900">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-10">Our Journey</h2>
        <p className="text-center text-slate-600 mb-10 max-w-2xl mx-auto">
          TekCentra started with a vision to make Web3 and fintech accessible. From empowering startups to partnering with enterprises, we’ve grown into a trusted name driving innovation for the digital generation.
        </p>
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 3000 }}
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <img
                src={image}
                alt={`Journey slide ${index + 1}`}
                className="rounded-2xl shadow-lg w-full h-64 object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

// ---------- HOW IT WORKS Section Component ----------
const HowItWorks = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h3 className="text-3xl font-extrabold text-slate-900">How TekCentra Works</h3>
          <p className="mt-3 text-slate-600">
            End‑to‑end adoption architecture that takes projects from concept to real‑world market use.
          </p>
        </div>
        <motion.div
          ref={ref}
          className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-4"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
        >
          {[
            { step: "1", title: "Concept", desc: "Clarify value, audience, and go‑to‑market." },
            { step: "2", title: "Infrastructure", desc: "Integrations, security, and dev tooling." },
            { step: "3", title: "Growth", desc: "Education campaigns and ecosystem partnerships." },
            { step: "4", title: "Adoption", desc: "Onboarding, utility creation, real‑world usage." },
          ].map((s, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className="relative rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <span className="absolute -top-3 left-6 inline-flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white shadow">
                {s.step}
              </span>
              <h4 className="mt-4 text-lg font-semibold text-slate-900">{s.title}</h4>
              <p className="mt-2 text-sm text-slate-600">{s.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

// ---------- TESTIMONIALS Section Component ----------
const testimonialData = [
  {
    quote: "TekCentra’s adoption architecture turned our pilot into a product used by thousands in months.",
    name: "Ava",
    role: "DeFi Founder",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    quote: "Their education drives demystified crypto for our users and boosted retention across markets.",
    name: "Ken",
    role: "Fintech PM",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    quote: "The developer onboarding program made integrations seamless for our Web3 stack.",
    name: "Liu",
    role: "Protocol Advocate",
    avatar: "https://randomuser.me/api/portraits/men/65.jpg",
  },
];

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-emerald-50">
      <div className="mx-auto max-w-4xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h3 className="text-3xl font-extrabold text-slate-900">What Our Partners Say</h3>
          <p className="mt-3 text-slate-600">Real words from innovators, builders, and educators we collaborate with.</p>
        </div>
        <div className="mt-12">
          <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            spaceBetween={32}
            slidesPerView={1}
            breakpoints={{ 768: { slidesPerView: 2 } }}
          >
            {testimonialData.map((t, i) => (
              <SwiperSlide key={i}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5 }}
                  className="flex flex-col items-center bg-white/90 border border-slate-200 rounded-2xl shadow-lg p-8 mx-2 h-full"
                >
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-16 h-16 rounded-full border-4 border-blue-100 shadow mb-4 object-cover"
                  />
                  <p className="text-slate-700 text-lg italic mb-4">“{t.quote}”</p>
                  <div className="mt-auto text-center">
                    <div className="font-semibold text-slate-900">{t.name}</div>
                    <div className="text-sm text-slate-500">{t.role}</div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

// ---------- CONTACT Section Component ----------
const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const formVariants = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const socialVariants = {
    hidden: { opacity: 0, x: -20 },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.5,
      },
    },
  };

  return (
    <section id="contact" className="relative overflow-hidden py-20">
      <NodesBG />
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          <div ref={ref}>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="text-3xl font-extrabold text-slate-900"
            >
              Apply to Partner
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-3 text-slate-600"
            >
              Partner with TekCentra to drive innovation and adoption. Fill out the form and our team will get back to you
              within 48 hours.
            </motion.p>
            <motion.ul
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-6 space-y-3 text-sm text-slate-600"
            >
              <li className="flex items-center gap-3"><FaCheck /> Global visibility through our network</li>
              <li className="flex items-center gap-3"><FaCheck /> Access to Web3 education and resources</li>
              <li className="flex items-center gap-3"><FaCheck /> Co‑marketing & ecosystem growth support</li>
            </motion.ul>
            <motion.div
              className="mt-8 flex items-center gap-4 text-slate-500"
              variants={socialVariants}
              initial="hidden"
              animate={isInView ? "show" : "hidden"}
            >
              <motion.a variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }} href="#" aria-label="Twitter" className="transition hover:text-slate-900"><FaTwitter /></motion.a>
              <motion.a variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }} href="#" aria-label="LinkedIn" className="transition hover:text-slate-900"><FaLinkedin /></motion.a>
              <motion.a variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }} href="#" aria-label="Telegram" className="transition hover:text-slate-900"><FaTelegram /></motion.a>
              <motion.a variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }} href="#" aria-label="Discord" className="transition hover:text-slate-900"><FaDiscord /></motion.a>
            </motion.div>
          </div>

          <motion.form
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            variants={formVariants}
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
          >
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <input
                type="text"
                placeholder="Full Name"
                className="rounded-lg border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-400"
              />
              <input
                type="email"
                placeholder="Email"
                className="rounded-lg border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-400"
              />
            </div>
            <input
              type="text"
              placeholder="Company / Project"
              className="mt-4 w-full rounded-lg border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-400"
            />
            <input
              type="text"
              placeholder="Partnership Type"
              className="mt-4 w-full rounded-lg border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-400"
            />
            <textarea
              placeholder="Project Description"
              rows={5}
              className="mt-4 w-full rounded-lg border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-400"
            />
            <button
              type="button"
              className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white shadow-sm transition hover:bg-blue-700"
            >
              Submit Application <FaPaperPlane />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

// ---------- FOOTER Component ----------
const Footer = () => (
  <footer className="border-t border-slate-200 bg-white py-10">
    <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 md:flex-row">
      <div className="text-center md:text-left">
        <div className="text-xl font-extrabold text-slate-900">
          Tek<span className="text-blue-600">Centra</span>
        </div>
        <p className="mt-1 text-sm text-slate-500">Adoption is the currency of the future.</p>
      </div>
      <div className="flex items-center gap-5 text-slate-500">
        <a href="#" aria-label="Twitter" className="transition hover:text-slate-900"><FaTwitter /></a>
        <a href="#" aria-label="LinkedIn" className="transition hover:text-slate-900"><FaLinkedin /></a>
        <a href="#" aria-label="Telegram" className="transition hover:text-slate-900"><FaTelegram /></a>
        <a href="#" aria-label="Discord" className="transition hover:text-slate-900"><FaDiscord /></a>
      </div>
      <p className="text-center text-sm text-slate-500 md:text-right">
        © {new Date().getFullYear()} TekCentra. All rights reserved.
      </p>
    </div>
  </footer>
);

// ---------- Main App Component ----------
export default function App() {
  return (
    <div className="scroll-smooth font-sans text-slate-700 bg-white">
      <Header />
      <main>
        <Hero />
        <About />
        <Programs />
        <Impact />
        <OurPillars /> {/* <-- Add here */}
        <News />
        <GetInvolved />
        <OurJourney />
        <HowItWorks />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

function FaCheck(props) {
  return <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4 text-emerald-500" {...props}>
    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-7.25 7.25a1 1 0 01-1.414 0l-3-3A1 1 0 016.707 9.293l2.293 2.293 6.543-6.543a1 1 0 011.414 0z" clipRule="evenodd" />
  </svg>;
}