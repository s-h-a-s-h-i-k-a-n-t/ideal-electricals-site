import { useState } from "react";
import "./App.css";

type Client = { name: string; logo?: string };

// ——— Poster content ———
const industries = [
  "Oil & Gas",
  "Refinery",
  "Petrochemicals",
  "Power & Utilities",
  "Pharmaceuticals",
  "Chemicals & Fertilizers",
];

const services = [
  "Electrical & Instrumentation Turnkey Projects",
  "Electrical Liaisoning Services",
  "Shutdown & Annual Maintenance Contract",
  "Deputation of Skilled Manpower",
  "Lighting Systems, CCTV Systems & Fire Alarm Systems",
  "System Integration with OEM’s backup",
  "Installation, Loop Checking, Pre-Commissioning & Commissioning",
  "Project Management",
  "Supply of Project Materials",
  "Basic Engineering",
  "Erection & Commissioning",
];

// ——— Clients (use your actual files; names fallback if image missing) ———
const clients: Client[] = [
  { name: "Adani", logo: "/images/logos/Adani.png" },
  { name: "Amul", logo: "/images/logos/amul.png" },
  { name: "Coromandel", logo: "/images/logos/coromandel.png" },
  { name: "Deepak Nitrite", logo: "/images/logos/deepak-nitrite.png" },
  { name: "Filatex", logo: "/images/logos/filatex.png" },
  { name: "Glenmark", logo: "/images/logos/glenmark.png" },
  { name: "GNFC", logo: "/images/logos/gnfc.png" },
  // filename includes spaces in your folder – use %20 to be safe:
  {
    name: "Gujarat Insecticides",
    logo: "/images/logos/gujarat%20insecticides%20ltd.jpeg",
  },
  { name: "Heubach", logo: "/images/logos/heubach.png" },
  { name: "Jubilant", logo: "/images/logos/jubilant.png" },
  { name: "PI Industries", logo: "/images/logos/pi-industries.png" },
  { name: "Sajjan India", logo: "/images/logos/sajjan-india-ltd.jpg" },
  { name: "UPL", logo: "/images/logos/upl.png" },

  // Extra clients visible on posters (add logo files later if you want)
  { name: "ONGC", logo: "/images/logos/ongc.png" },
  { name: "Hikal", logo: "/images/logos/hikal.png" },
  { name: "BEL", logo: "/images/logos/bel.png" },
  { name: "Ion Exchange", logo: "/images/logos/ion-exchange.png" },
  { name: "Gharda Chemicals", logo: "/images/logos/gharda.png" },
  { name: "Detox", logo: "/images/logos/detox.png" },
  { name: "Isagro", logo: "/images/logos/isagro.png" },
  { name: "Neubach", logo: "/images/logos/neubach.png" },
];

export default function App() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <>
      {/* Header */}
      <header className="siteHeader">
        <div className="container navBar">
          <a className="brand" href="#">
            <span className="brand__logo">IE</span>
            <span className="brand__name">
              Ideal Electrical Solutions Pvt. Ltd.
            </span>
          </a>
          <nav className="navLinks">
            <a href="#industries">Industries</a>
            <a href="#services">Services</a>
            <a href="#clients">Clients</a>
            <a href="#contact" className="ctaBtn">
              Get Quote
            </a>
          </nav>
          <button
            className="burger"
            onClick={() => setNavOpen((v) => !v)}
            aria-label="Menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
        {navOpen && (
          <div className="container mobileMenu">
            <a href="#industries" onClick={() => setNavOpen(false)}>
              Industries
            </a>
            <a href="#services" onClick={() => setNavOpen(false)}>
              Services
            </a>
            <a href="#clients" onClick={() => setNavOpen(false)}>
              Clients
            </a>
            <a
              href="#contact"
              className="ctaBtn"
              onClick={() => setNavOpen(false)}
            >
              Get Quote
            </a>
          </div>
        )}
      </header>

      {/* Full-width hero banner from your poster logo */}
      <section className="hero">
        <div className="hero__banner">
          <img src="/images/hero.png" alt="Ideal Electrical – Banner" />
        </div>
        <div className="hero__content container">
          <h1>Electrical & Instrumentation Contractors</h1>
          <p>
            Trusted E&I installation across India – Oil & Gas, Petrochemicals,
            Power, Pharma, and more.
          </p>
          <div className="hero__cta">
            <a href="#contact" className="ctaBtn">
              Request a Callback
            </a>
            <a href="#clients" className="ghostBtn">
              View Clients
            </a>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section id="industries">
        <div className="container">
          <h2 className="section__title">Industries We Serve</h2>
          <ul className="pillGrid">
            {industries.map((i) => (
              <li className="pill" key={i}>
                {i}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Services we offer – like the flyer, two neat columns with small bullets */}
      <section id="services">
        <div className="container">
          <h2 className="section__title">Services We Offer</h2>
          <ul className="serviceGrid">
            {services.map((s) => (
              <li key={s}>
                <span className="dot" aria-hidden>
                  •
                </span>
                <span>{s}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Clients – small uniform icon size, label under each (like poster) */}
      <section id="clients">
        <div className="container">
          <h2 className="section__title">Our Clients</h2>
          <div className="clients">
            {clients.map((c) => (
              <div className="client" key={c.name} title={c.name}>
                {c.logo ? (
                  <img
                    className="clientLogo"
                    src={c.logo}
                    alt={c.name}
                    onError={(e) => {
                      // If the image can’t be loaded, hide it and show the text fallback
                      const img = e.currentTarget;
                      img.style.display = "none";
                      const name = img.nextElementSibling as HTMLElement | null;
                      if (name) name.style.display = "block";
                    }}
                  />
                ) : null}
                <div
                  className="clientName"
                  style={{ display: c.logo ? ("none" as const) : "block" }}
                >
                  {c.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact (from poster footer) */}
      <section id="contact">
        <div className="container contactGrid">
          <div className="card contactCard">
            <strong>Ideal Electrical Solutions Pvt. Ltd.</strong>
            <div>
              TF-27, Omkar-2 Complex, Near Bus Stand, GIDC, Ankleshwar, Gujarat
              – 393002
            </div>
            <div>+91 95129 99905 / 70 • +91 78743 73839</div>
            <div>idealelectrical1416@gmail.com</div>
            <div>www.idealelectrical.in</div>
          </div>
          <form
            className="card form"
            onSubmit={(e) => {
              e.preventDefault();
              alert("Thanks! We'll reach out soon.");
            }}
          >
            <input className="input" placeholder="Your Name" required />
            <input className="input" placeholder="Phone" required />
            <input className="input" placeholder="Email (optional)" />
            <textarea className="textarea" placeholder="Message" />
            <button className="submit" type="submit">
              Submit
            </button>
          </form>
        </div>
      </section>

      <footer>
        <div className="container foot">
          <div>
            © {new Date().getFullYear()} Ideal Electrical Solutions Pvt. Ltd.
            All Rights Reserved.
          </div>
          <div>
            Website by{" "}
            <a
              href="https://www.linkedin.com/in/shashi-kant-5b8105220/"
              target="_blank"
              rel="noreferrer"
            >
              Shashi Kant
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
