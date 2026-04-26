import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import logoImg from "../assets/logo.png";

function useInView(threshold = 0.1) {
  const ref = useRef(null);
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const ob = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVis(true); }, { threshold });
    if (ref.current) ob.observe(ref.current);
    return () => ob.disconnect();
  }, []);
  return [ref, vis];
}

function useWindowWidth() {
  const [w, setW] = useState(typeof window !== "undefined" ? window.innerWidth : 1200);
  useEffect(() => {
    const h = () => setW(window.innerWidth);
    window.addEventListener("resize", h);
    return () => window.removeEventListener("resize", h);
  }, []);
  return w;
}

function Reveal({ children, delay = 0, style = {} }) {
  const [ref, vis] = useInView();
  return (
    <div ref={ref} style={{ opacity: vis ? 1 : 0, transform: vis ? "translateY(0)" : "translateY(22px)", transition: `opacity 0.75s cubic-bezier(.16,1,.3,1) ${delay}s, transform 0.75s cubic-bezier(.16,1,.3,1) ${delay}s`, ...style }}>{children}</div>
  );
}

function Logo({ dark = false }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
      <img src={logoImg} alt="Vaultly" style={{ width: 48, height: 48, borderRadius: 8 }} />
      <span style={{ fontFamily: "'Playfair Display',serif", fontSize: 28, fontWeight: 700, letterSpacing: -0.5, color: dark ? "#f5f0e8" : "#1a150a" }}>Vaultly</span>
    </div>
  );
}

const hFont = "'Zodiak',serif";
const hWeight = 700;

const POLICY_SECTIONS = [
  {
    title: "1. Who We Are",
    body: "Vaultly Inc. ('Vaultly', 'we', 'us', or 'our') is a pre-launch fintech company building a programmable virtual card platform designed to eliminate unauthorised subscription charges, ghost billing, and shared payment friction. We are currently in active development and have not yet launched our product. This privacy policy governs all data we collect during this pre-launch phase — including email signups, supporter registrations, and survey responses — as well as the data we intend to collect once our product goes live.",
  },
  {
    title: "2. What We Currently Collect (Pre-Launch)",
    body: "At this stage, Vaultly is collecting email addresses submitted voluntarily through our landing page by people who wish to join our early supporter list. When you submit your email, we record your email address and the date and time of submission. We store this data in a secure Google Sheets document accessible only to the Vaultly founding team. We also offer an optional survey (hosted on Tally.so) to gather feedback on the problems we are solving. If you complete the survey, Tally may collect your responses and any voluntary contact details you provide — their privacy policy governs that data. We do not run advertising trackers, third-party analytics, or use cookies on our landing page.",
  },
  {
    title: "3. What We Will Collect at Launch",
    body: "When Vaultly launches its full product, we will collect the following categories of data necessary to operate our virtual card services: (a) Identity data — full name, email address, phone number, date of birth, and government-issued ID documents for KYC identity verification. KYC documents are processed by our identity verification partner and deleted within 30 days of successful confirmation. (b) Card and transaction data — virtual card numbers (tokenised, never stored in plain text), merchant names, charge amounts, transaction timestamps, and approval or block status. (c) Allowlist data — your Fortress Card's approved merchant list, which we store to enforce real-time charge blocking. (d) Device and usage data — device model, operating system, IP address, and in-app interaction patterns used to detect fraud and improve the product.",
  },
  {
    title: "4. How We Use Your Information",
    body: "Pre-launch: We use your email address solely to send you updates about Vaultly's development progress, notify you when we are ready to onboard early supporters, and share relevant product announcements. We will never send unsolicited marketing from third parties. You can unsubscribe from our emails at any time by replying with 'unsubscribe' or contacting us directly. At launch: We will use your data to issue and manage your virtual cards; enforce your Fortress Card merchant allowlist in real time; block unauthorised charges within 200 milliseconds; process Trial Shield verification gates and renewal blocks; facilitate Social Top-Up group payment settlements; execute Kill Switch card voidings; and send real-time transaction notifications.",
  },
  {
    title: "5. Data Sharing",
    body: "We do not sell, rent, or trade your personal information — ever. Pre-launch, your email address is stored in Google Sheets (governed by Google's privacy policy) and is accessible only to Vaultly's founding team. At launch, we will share data only with the service providers strictly necessary to operate Vaultly: our licensed payment infrastructure partner (who receives tokenised card data under PCI DSS Level 1 compliance), our KYC identity verification provider, and our cloud infrastructure host. All third-party partners are bound by data processing agreements that prohibit them from using your data for any purpose other than providing their service to Vaultly.",
  },
  {
    title: "6. Data Security",
    body: "We take the security of your data seriously. Your email address is stored in a restricted-access Google Sheet with two-factor authentication enforced on all team accounts. At launch, all data transmitted between the Vaultly app and our servers will be encrypted using AES-256 encryption and TLS 1.3. Sensitive actions — such as issuing new cards, activating Kill Switch, and viewing card details — will require biometric authentication (Face ID or fingerprint). We will conduct regular third-party security audits and penetration testing before and after launch. If a data breach occurs that affects your personal information, we will notify you within 72 hours in compliance with applicable data protection law.",
  },
  {
    title: "7. Data Retention",
    body: "Pre-launch: We retain early supporter email addresses until you request removal or until we shut down our pre-launch operations, whichever comes first. At launch: Active account data will be retained for the duration of your Vaultly membership. Transaction records will be retained for 7 years to comply with financial services regulations. KYC documents will be deleted within 30 days of successful identity verification. If you close your account, all virtual cards will be immediately voided, your merchant allowlists will be erased, and your personal data will be purged from our systems within 30 days — except where retention is required by applicable law.",
  },
  {
    title: "8. Your Rights",
    body: "You have the right to access the personal data we hold about you, request its correction or deletion, withdraw consent to marketing communications at any time, and request that we restrict or stop processing your data. If you are located in the EU, EEA, or UK, you have additional rights under the GDPR and UK GDPR, including the right to data portability and the right to lodge a complaint with your local supervisory authority. To exercise any of these rights, contact us at privacy@vaultly.io. We will respond to all requests within 30 days.",
  },
  {
    title: "9. Cookies & Tracking",
    body: "Our current landing page does not use cookies, tracking pixels, or third-party analytics scripts. We do not profile visitors or use retargeting advertising. At launch, our app may use essential session cookies required for authentication and security. We will update this policy before introducing any analytics or non-essential tracking and will obtain your consent where required by law.",
  },
  {
    title: "10. Children's Privacy",
    body: "Vaultly is a financial services platform intended for users aged 18 and above. We do not knowingly collect personal information from anyone under 18. If we become aware that a minor has submitted their email address or created an account, we will delete that data immediately. If you believe a minor has provided us with personal information, please contact us at privacy@vaultly.io.",
  },
  {
    title: "11. Changes to This Policy",
    body: "As Vaultly moves from pre-launch to a live product, this privacy policy will be updated to reflect the data we actually collect and process. We will notify all registered supporters by email at least 14 days before any material changes take effect. The date at the top of this page will always reflect when the policy was last revised. Continued use of our services after a policy update constitutes acceptance of the revised terms.",
  },
  {
    title: "12. Contact Us",
    body: "If you have any questions about this privacy policy, want to exercise your data rights, or simply want to know more about how we handle your information, please reach out to us at privacy@vaultly.io. We are a small founding team and we read every message personally.",
  },
];

export default function PrivacyPolicy() {
  const w = useWindowWidth();
  const isMobile = w < 640;

  useEffect(() => { window.scrollTo(0, 0); }, []);

  const css = `
    @import url('https://api.fontshare.com/v2/css?f[]=zodiak@400,500,600,700&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600&display=swap');
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    html { scroll-behavior: smooth; }
    body { background: #f5f0e8; color: #1a150a; font-family: 'DM Sans', sans-serif; overflow-x: hidden; }
    ::-webkit-scrollbar { width: 3px; }
    ::-webkit-scrollbar-track { background: #f5f0e8; }
    ::-webkit-scrollbar-thumb { background: #C9A84C60; border-radius: 2px; }
    a { text-decoration: none; color: inherit; }
  `;

  return (
    <div style={{ background: "#f5f0e8", minHeight: "100vh" }}>
      <style>{css}</style>

      {/* Nav */}
      <nav style={{ padding: isMobile ? "14px 5%" : "16px 5%", display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid #e8e0d0" }}>
        <Link to="/"><Logo /></Link>
        <Link to="/" style={{ fontSize: 14, fontWeight: 500, color: "#5a4f3f", transition: "color 0.2s" }}>← Back to Home</Link>
      </nav>

      {/* Content */}
      <section style={{ padding: isMobile ? "64px 5%" : "100px 5%" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <Reveal>
            <p style={{ fontSize: 11, letterSpacing: 3, textTransform: "uppercase", color: "#C9A84C", fontWeight: 600, marginBottom: 10 }}>Legal</p>
            <h1 style={{ fontFamily: hFont, fontSize: isMobile ? "1.8rem" : "clamp(2rem,4vw,3rem)", fontWeight: hWeight, letterSpacing: -1.5, marginBottom: 14 }}>
              Privacy <span style={{ color: "#C9A84C" }}>Policy</span>
            </h1>
            <p style={{ color: "#8a7a65", fontSize: 13, marginBottom: isMobile ? 32 : 48 }}>Last updated: April 2026 · Pre-launch version</p>
          </Reveal>

          {POLICY_SECTIONS.map((item, i) => (
            <Reveal key={i} delay={i * 0.04}>
              <div style={{ marginBottom: isMobile ? 24 : 32 }}>
                <h3 style={{ fontFamily: hFont, fontSize: isMobile ? 16 : 18, fontWeight: hWeight, color: "#1a150a", marginBottom: 8, letterSpacing: -0.5 }}>{item.title}</h3>
                <p style={{ color: "#5a4f3f", fontSize: isMobile ? 13 : 14, lineHeight: 1.8 }}>{item.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer style={{ background: "#120e07", padding: isMobile ? "32px 5%" : "44px 5%", borderTop: "1px solid #2d2415" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", flexDirection: isMobile ? "column" : "row", justifyContent: "space-between", alignItems: isMobile ? "flex-start" : "center", gap: isMobile ? 18 : 20, flexWrap: "wrap" }}>
          <Logo dark />
          <p style={{ color: "#3a3025", fontSize: 11 }}>© 2026 Vaultly Inc. · Built on licensed payment infrastructure</p>
        </div>
      </footer>
    </div>
  );
}
