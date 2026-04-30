import React from "react";
import { motion } from "framer-motion";
import { FaArrowLeft, FaBolt, FaClock, FaTwitter, FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

const scrollToId = (id) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
};

const YouTubeEmbed = ({ videoId, title }) => (
  <div className="w-full max-w-3xl mx-auto rounded-2xl overflow-hidden shadow-lg" style={{ position: "relative", paddingBottom: "56.25%", height: 0 }}>
    <iframe
      src={`https://www.youtube.com/embed/${videoId}`}
      title={title}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
    />
  </div>
);

const SectionDivider = () => (
  <div className="flex items-center gap-4 py-12 max-w-3xl mx-auto px-6">
    <div className="flex-1" style={{ height: "1px", background: "#e2e8f0" }} />
    <FaBolt className="text-blue-600" style={{ width: "12px", height: "12px", transform: "rotate(45deg)" }} />
    <div className="flex-1" style={{ height: "1px", background: "#e2e8f0" }} />
  </div>
);

function WeFiHeader() {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const navLinks = [
    ["wefi-s1", "The Industry"],
    ["wefi-s2", "The Opportunities"],
    ["wefi-s3", "WeFi Opportunity"],
    ["wefi-start", "Get Started"],
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link to="/" style={{ textDecoration: "none" }} className="flex items-center gap-2">
          <span className="relative flex items-center">
            <span className="absolute -left-3 -top-2 h-2 w-2 rounded-full bg-blue-500" />
            <span className="absolute -right-2 -bottom-3 h-2 w-2 rounded-full bg-emerald-400" />
            <span className="text-2xl font-extrabold tracking-tight text-slate-900 flex items-center gap-1">
              Tek<span className="text-blue-600">Centra</span>
            </span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-5">
          {navLinks.map(([id, label]) => (
            <button
              key={id}
              onClick={() => scrollToId(id)}
              className="text-sm font-semibold text-slate-800 px-2 py-1 transition-colors duration-200 hover:text-blue-600 focus:outline-none"
            >
              {label}
            </button>
          ))}
          <Link
            to="/"
            style={{ textDecoration: "none" }}
            className="ml-2 inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-800 shadow transition hover:border-slate-400"
          >
            <FaArrowLeft style={{ width: "12px", height: "12px" }} /> Back to Home
          </Link>
        </nav>

        <button
          className="md:hidden flex items-center justify-center w-10 h-10 rounded hover:bg-blue-50 transition"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Open menu"
        >
          <svg width="24" height="24" fill="none" stroke="currentColor" className="text-blue-600">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileOpen ? "M6 18L18 6M6 6l12 12" : "M4 8h16M4 16h16"} />
          </svg>
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-white/95 border-t border-slate-200 shadow-lg">
          <div className="flex flex-col items-center gap-2 py-4">
            {navLinks.map(([id, label]) => (
              <button
                key={id}
                onClick={() => { scrollToId(id); setMobileOpen(false); }}
                className="w-full text-base font-medium text-slate-700 px-4 py-2 rounded transition hover:bg-blue-50 hover:text-blue-600"
              >
                {label}
              </button>
            ))}
            <Link
              to="/"
              style={{ textDecoration: "none" }}
              className="mt-2 inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-4 py-2 text-base font-semibold text-slate-800 shadow transition hover:border-slate-400"
            >
              <FaArrowLeft style={{ width: "12px", height: "12px" }} /> Back to Home
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

const WeFiFooter = () => (
  <footer className="border-t border-slate-200 bg-white py-10">
    <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 md:flex-row">
      <div className="text-center md:text-left">
        <div className="text-xl font-extrabold text-slate-900">
          Tek<span className="text-blue-600">Centra</span>
        </div>
        <p className="mt-1 text-sm text-slate-500">© 2024 WeFi — Building Wealth Beyond Borders</p>
      </div>
      <div className="flex items-center gap-5 text-slate-500">
        <a href="https://x.com/tekcentra?s=21&t=sbMUrJf2d3swpnhJx-YttQ" aria-label="Twitter" className="transition hover:text-slate-900"><FaTwitter /></a>
        <a href="https://www.facebook.com/share/16tBABCKV8/?mibextid=wwXIfr" aria-label="Facebook" className="transition hover:text-slate-900"><FaFacebook /></a>
        <a href="https://www.instagram.com/tekcentra" aria-label="Instagram" className="transition hover:text-slate-900"><FaInstagram /></a>
        <a href="https://youtube.com/@tekcentra" aria-label="YouTube" className="transition hover:text-slate-900"><FaYoutube /></a>
      </div>
      <p className="text-center text-sm text-slate-500 md:text-right">
        © {new Date().getFullYear()} TekCentra. All rights reserved.
      </p>
    </div>
  </footer>
);

export default function WeFiPage() {
  return (
    <div className="scroll-smooth font-sans text-slate-700 bg-white">
      <WeFiHeader />
      <main className="pt-20">

        {/* ── Hero ── */}
        <section className="bg-gradient-to-br from-blue-50 via-white to-emerald-50 py-20 px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <p className="text-xs font-semibold tracking-widest text-slate-500 uppercase mb-6">
              The Technology · The Value · The Business
            </p>
            <h1 className="text-5xl md:text-7xl font-extrabold text-blue-600 leading-tight mb-6">
              The WeFi<br />Opportunity
            </h1>
            <p className="text-lg text-slate-600 max-w-xl mx-auto mb-14">
              How to make the most of what WeFi has brought to the table — explained in three detailed sections.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { num: "01", title: "The Industry", sub: "WeFi is disrupting", id: "wefi-s1" },
              { num: "02", title: "The Opportunities", sub: "That exist within", id: "wefi-s2" },
              { num: "03", title: "The WeFi Opportunity", sub: "Your path to wealth", id: "wefi-s3" },
            ].map((card, i) => (
              <motion.div
                key={i}
                onClick={() => scrollToId(card.id)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                whileHover={{ y: -4, scale: 1.02 }}
                className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm text-center transition hover:shadow-lg cursor-pointer w-full"
              >
                <div className="text-3xl font-bold text-blue-400 mb-3">{card.num}</div>
                <div className="text-lg font-semibold text-slate-900">{card.title}</div>
                <div className="text-sm text-slate-500 mt-1">{card.sub}</div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ── Video 1 ── */}
        <section className="py-14 px-6 bg-white">
          <YouTubeEmbed videoId="xZiF_IPg3pQ" title="Wefi Deobank | Can This DeFi Super App Lead the Next Crypto Bank" />
        </section>

        <SectionDivider />

        {/* ── Section 01 ── */}
        <section id="wefi-s1" className="py-16 px-6 bg-white">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              <div className="w-8 mb-4" style={{ height: "3px", background: "#2563eb" }} />
              <h2 className="text-3xl font-extrabold text-slate-900 mb-10 flex items-baseline gap-3">
                <span className="text-blue-600">01</span> The Industry WeFi is Disrupting
              </h2>
            </motion.div>

            <div className="space-y-7">
              {[
                "Doesn't it bother you that you have assets at your disposal but when you need cash with collateral as a stake — you get turned down by your bank?",
                "Doesn't it bother you that every year the banks declare their profits realized and even though your money in the bank contributes to the revenue realized by the bank, you don't get a piece of the pie?",
                "Have you thought about what it could mean for you if you could access loans to execute your great ideas and build your business efficiently — without the rejections and the back and forth that goes with it?",
                "Or is loan access designed for a particular set of people?",
              ].map((quote, i) => (
                <motion.blockquote
                  key={i}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="border-l-4 border-blue-500 pl-5 text-slate-700 text-base leading-relaxed"
                >
                  {quote}
                </motion.blockquote>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5 }}
              className="mt-8 space-y-4 text-slate-700 text-base leading-relaxed"
            >
              <p>
                What would it mean for you if you're in business with a{" "}
                <span className="text-blue-600 font-semibold">regulated and licensed financial system that is boundless?</span>
              </p>
              <p>
                This is the difference between those using the banking industry to redefine how they create wealth — and those who don't.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ── Quote Box ── */}
        <section className="py-12 px-6 bg-slate-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto rounded-2xl border border-slate-200 bg-white p-10 shadow-sm text-center"
          >
            <p className="text-lg md:text-xl text-slate-700 italic leading-relaxed">
              "As we move forward we will talk about the WeFi ecosystem and the opportunity the platform has created for everyone — and how the technology of blockchain has made it possible for you to{" "}
              <span className="text-blue-600 font-semibold not-italic">build wealth beyond borders.</span>"
            </p>
          </motion.div>
        </section>

        {/* ── Video 2 ── */}
        <section className="py-14 px-6 bg-white">
          <YouTubeEmbed videoId="jQ6W2JvyBdQ" title="Your Guide to WeFi" />
        </section>

        <SectionDivider />

        {/* ── Section 02 ── */}
        <section id="wefi-s2" className="py-16 px-6 bg-white">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              <div className="w-8 mb-4" style={{ height: "3px", background: "#2563eb" }} />
              <h2 className="text-3xl font-extrabold text-slate-900 mb-10 flex items-baseline gap-3">
                <span className="text-blue-600">02</span> The Opportunities Within That Industry
              </h2>
            </motion.div>

            <div className="space-y-6 text-slate-700 text-base leading-relaxed">
              <motion.p initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.5 }}>
                WeFi is not only a bank but also a financial movement. As the world's first decentralized OnChain banking platform, the possibilities of what you can do on the WeFi platform are limitless — from ownership stake to quick easy loan access, there are no boundaries.
              </motion.p>
              <motion.p initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.5, delay: 0.1 }}>
                WeFi sits as the next-generation banking platform where anyone regardless of experience can save, spend and grow their money in both crypto and fiat in one of the most credible ways possible. Giving you a mix of traditional payment services and digital payment tools.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-wrap gap-3 my-8"
            >
              {["Visa Cards", "ATM Access", "Apple Pay", "Google Pay"].map((p) => (
                <span key={p} className="rounded-full border border-slate-200 bg-white px-5 py-2 text-sm font-medium text-blue-600 shadow-sm">
                  {p}
                </span>
              ))}
            </motion.div>

            <div className="space-y-5 text-slate-700 text-base leading-relaxed">
              <motion.p initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.5 }}>
                Now imagine a financial system that can do what your traditional banks can do, what your digital banks can do, as well as effectively interact with your cryptocurrency wallet — while operating under complete compliance and regulations with{" "}
                <span className="text-blue-600 font-semibold">Canada MSB, St. Vincent & Grenadines, Czech VASP, Hong Kong and UAE Payment solutions.</span>
              </motion.p>
              <motion.p initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.5, delay: 0.1 }}>
                Meaning you can conveniently move your crypto to your bank account without complexities — that's one of the solutions WeFi provides. And on this same platform, access loans that neither your bank accounts nor your crypto accounts can provide.
              </motion.p>
            </div>
          </div>
        </section>

        {/* ── Video 3 ── */}
        <section className="py-14 px-6 bg-slate-50">
          <YouTubeEmbed videoId="nwsuurSzB5Y" title="WeFi - Bridging Web2 & Web3 Finance" />
        </section>

        <SectionDivider />

        {/* ── Section 03 ── */}
        <section id="wefi-s3" className="py-16 px-6 bg-white">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              <div className="w-8 mb-4" style={{ height: "3px", background: "#2563eb" }} />
              <h2 className="text-3xl font-extrabold text-slate-900 mb-6 flex items-baseline gap-3">
                <span className="text-blue-600">03</span> The WeFi Opportunity
              </h2>
            </motion.div>

            <p className="text-slate-500 mb-6 text-base">Now this is where your opportunities exist.</p>

            <div className="space-y-6 text-slate-700 text-base leading-relaxed">
              <motion.p initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.5 }}>
                WeFi is positioned to attract over{" "}
                <span className="text-blue-600 font-semibold">1.4 billion unbanked</span> as well as crypto users, and for business-minded people, this is where your opportunity exists. You can effectively be a co-owner of this banking service — the same way you buy into shares of traditional banks and earn dividends — by simply buying into the{" "}
                <span className="text-blue-600 font-semibold">ITO (Initial Technology Offering).</span>
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5 }}
                className="rounded-2xl border border-slate-200 bg-slate-50 overflow-hidden shadow-sm"
                style={{ divide: "y" }}
              >
                <div className="p-6 border-b border-slate-200">
                  <h4 className="font-semibold text-slate-900 mb-2">As a User</h4>
                  <p className="text-sm text-slate-600">All you need is to create an account, complete your KYC, and you're set to start using the platform.</p>
                </div>
                <div className="p-6">
                  <h4 className="font-semibold text-slate-900 mb-2">As a Business-Minded Person</h4>
                  <p className="text-sm text-slate-600">You'll want to get an ITO — which is basically what gives you an added edge over a regular user.</p>
                </div>
              </motion.div>

              {[
                <React.Fragment key={0}>The <span className="text-blue-600 font-semibold">ITO</span> qualifies you to have a technology that produces WeFi tokens, as well as an ownership stake of the bank. With the WeFi tokens currently at over <span className="text-blue-600 font-semibold">$2 a piece</span> with more upside potential.</React.Fragment>,
                <React.Fragment key={1}>This also gives you the opportunity to get a loan from the bank while using your WeFi assets as collateral. Of course, the more ownership of <span className="text-blue-600">ITO</span> you have, the more <span className="text-blue-600">dividends</span> you get to enjoy. And as the value of the token goes up, so does your financial balance — since you're earning in WeFi tokens.</React.Fragment>,
                <React.Fragment key={2}>Not only that, you have the opportunity to begin building a user base of people who would use the WeFi platform for transactions globally. With no limit to the number of users you can onboard, you can earn from all the transactions they do on the WeFi ecosystem — whether they are <span className="text-blue-600">saving, sending</span> and receiving money, making payments, or even taking loans. WeFi will split the transaction charges with you.</React.Fragment>,
              ].map((para, i) => (
                <motion.p key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.5, delay: i * 0.1 }}>
                  {para}
                </motion.p>
              ))}
            </div>
          </div>
        </section>

        {/* ── Video 4 ── */}
        <section className="py-14 px-6 bg-slate-50">
          <YouTubeEmbed videoId="aFq1iiofPA0" title="WeFi Global Crypto Banking and SO MUCH MORE" />
        </section>

        {/* ── Time-Sensitive Callout ── */}
        <section className="py-12 px-6 bg-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto rounded-2xl border border-blue-200 bg-blue-50 p-8 shadow-sm"
          >
            <div className="flex items-center gap-3 mb-3">
              <FaClock className="text-blue-600" style={{ width: "20px", height: "20px" }} />
              <h4 className="font-bold text-blue-700 text-lg">Time-Sensitive Opportunity</h4>
            </div>
            <p className="text-slate-700 text-sm leading-relaxed">
              Some of these benefits won't exist forever — they are time-bound. As the halvings happen, the dividends that come with them also reduce over time. Taking hold of the opportunity early is the real gold mine. Because there will always be a first-mover advantage — just like those that had BTC at the early stage versus those having it now after multiple halvings.
            </p>
          </motion.div>
        </section>

        <SectionDivider />

        {/* ── How to Get Started ── */}
        <section id="wefi-start" className="py-20 px-6 bg-gradient-to-br from-blue-50 via-white to-emerald-50">
          <div className="max-w-3xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6 }}
              className="text-3xl font-extrabold text-center text-blue-600 mb-12"
            >
              How to Get Started
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
              {[
                { step: "Step 1", desc: "Create a free account & complete your KYC" },
                { step: "Step 2", desc: "Get an ITO Immediately — buy as much as you can possibly afford" },
                { step: "Step 3", desc: "Start utilising the platform as a mobile digital asset" },
              ].map((s, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  whileHover={{ y: -4, scale: 1.02 }}
                  className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm text-center"
                >
                  <div
                    className="inline-flex items-center justify-center rounded-xl bg-blue-50 text-blue-600 font-bold text-sm mb-4 mx-auto"
                    style={{ height: "40px", width: "40px", boxShadow: "inset 0 0 0 1px #bfdbfe" }}
                  >
                    {i + 1}
                  </div>
                  <div className="font-semibold text-blue-600 mb-2">{s.step}</div>
                  <p className="text-sm text-slate-600">{s.desc}</p>
                </motion.div>
              ))}
            </div>

            <YouTubeEmbed videoId="CzYH8PUebNg" title="Tutorial 1 - How to Join the WeFi App" />
          </div>
        </section>

      </main>
      <WeFiFooter />
    </div>
  );
}
