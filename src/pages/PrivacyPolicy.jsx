import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Logo, Reveal } from "../components/common";
import { useResponsive } from "../hooks";

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
  const { isMobile, isTablet } = useResponsive();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div
      style={{
        background: "linear-gradient(180deg, var(--gray-50) 0%, var(--white) 30%, var(--white) 100%)",
        minHeight: "100vh",
      }}
    >
      {/* Navigation */}
      <nav
        style={{
          padding: isMobile ? "12px 5%" : "16px 5%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          background: "rgba(255, 255, 255, 0.9)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          borderBottom: "1px solid var(--gray-200)",
          position: "sticky",
          top: 0,
          zIndex: 100,
        }}
      >
        <Link to="/">
          <Logo compact={isMobile} />
        </Link>
        <Link
          to="/"
          style={{
            fontSize: isMobile ? 13 : 14,
            fontWeight: 500,
            color: "var(--gray-600)",
            display: "flex",
            alignItems: "center",
            gap: 6,
            padding: "8px 16px",
            borderRadius: 8,
            background: "var(--gray-100)",
            transition: "all 0.2s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "var(--gray-200)";
            e.currentTarget.style.color = "var(--gray-900)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "var(--gray-100)";
            e.currentTarget.style.color = "var(--gray-600)";
          }}
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="19" y1="12" x2="5" y2="12" />
            <polyline points="12 19 5 12 12 5" />
          </svg>
          Back to Home
        </Link>
      </nav>

      {/* Hero Section */}
      <section
        style={{
          padding: isMobile ? "48px 5% 32px" : isTablet ? "64px 5% 40px" : "80px 5% 48px",
          textAlign: "center",
          position: "relative",
        }}
      >
        {/* Background gradient orb */}
        <div
          style={{
            position: "absolute",
            top: "0%",
            left: "50%",
            transform: "translateX(-50%)",
            width: isMobile ? 300 : 500,
            height: isMobile ? 200 : 300,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(73, 73, 242, 0.06) 0%, transparent 60%)",
            filter: "blur(60px)",
            pointerEvents: "none",
          }}
        />

        <Reveal>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: "var(--white)",
              border: "1px solid var(--gray-200)",
              borderRadius: 100,
              padding: "8px 16px",
              marginBottom: 20,
              boxShadow: "0 4px 20px rgba(0, 0, 0, 0.04)",
            }}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="var(--primary)"
              strokeWidth="2"
            >
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
            <span
              style={{
                fontSize: 13,
                fontWeight: 600,
                color: "var(--gray-700)",
              }}
            >
              Legal
            </span>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <h1
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: isMobile ? "2rem" : isTablet ? "2.5rem" : "3rem",
              fontWeight: 800,
              letterSpacing: -1.5,
              color: "var(--gray-900)",
              marginBottom: 16,
              lineHeight: 1.1,
            }}
          >
            Privacy{" "}
            <span
              style={{
                background: "linear-gradient(135deg, var(--primary) 0%, #8b5cf6 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Policy
            </span>
          </h1>
        </Reveal>

        <Reveal delay={0.2}>
          <p
            style={{
              color: "var(--gray-500)",
              fontSize: isMobile ? 13 : 14,
              fontWeight: 500,
            }}
          >
            Last updated: April 2026 · Pre-launch version
          </p>
        </Reveal>
      </section>

      {/* Content */}
      <section
        style={{
          padding: isMobile ? "0 5% 64px" : isTablet ? "0 5% 80px" : "0 5% 100px",
        }}
      >
        <div
          style={{
            maxWidth: 800,
            margin: "0 auto",
            background: "var(--white)",
            borderRadius: 24,
            border: "1px solid var(--gray-200)",
            padding: isMobile ? "32px 24px" : isTablet ? "40px 36px" : "48px 56px",
            boxShadow: "0 4px 40px rgba(0, 0, 0, 0.04)",
          }}
        >
          {POLICY_SECTIONS.map((item, i) => (
            <Reveal key={i} delay={i * 0.03}>
              <div
                style={{
                  marginBottom: i === POLICY_SECTIONS.length - 1 ? 0 : isMobile ? 28 : 36,
                  paddingBottom: i === POLICY_SECTIONS.length - 1 ? 0 : isMobile ? 28 : 36,
                  borderBottom:
                    i === POLICY_SECTIONS.length - 1 ? "none" : "1px solid var(--gray-100)",
                }}
              >
                <h3
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: isMobile ? 16 : 18,
                    fontWeight: 700,
                    color: "var(--gray-900)",
                    marginBottom: 12,
                    letterSpacing: -0.3,
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                  }}
                >
                  <span
                    style={{
                      width: 6,
                      height: 6,
                      borderRadius: "50%",
                      background: "var(--primary)",
                      flexShrink: 0,
                    }}
                  />
                  {item.title}
                </h3>
                <p
                  style={{
                    color: "var(--gray-600)",
                    fontSize: isMobile ? 14 : 15,
                    lineHeight: 1.8,
                    fontFamily: "'Inter', sans-serif",
                    paddingLeft: 16,
                  }}
                >
                  {item.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Contact Card */}
        <Reveal delay={0.4}>
          <div
            style={{
              maxWidth: 800,
              margin: "40px auto 0",
              background: "linear-gradient(135deg, var(--primary) 0%, #6366f1 100%)",
              borderRadius: 20,
              padding: isMobile ? "28px 24px" : "36px 48px",
              display: "flex",
              flexDirection: isMobile ? "column" : "row",
              alignItems: isMobile ? "flex-start" : "center",
              justifyContent: "space-between",
              gap: 20,
            }}
          >
            <div>
              <h4
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: isMobile ? 18 : 20,
                  fontWeight: 700,
                  color: "var(--white)",
                  marginBottom: 6,
                }}
              >
                Have questions?
              </h4>
              <p
                style={{
                  color: "rgba(255, 255, 255, 0.8)",
                  fontSize: 14,
                }}
              >
                We're here to help. Reach out anytime.
              </p>
            </div>
            <a
              href="mailto:privacy@vaultly.io"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                background: "var(--white)",
                color: "var(--primary)",
                padding: "14px 24px",
                borderRadius: 12,
                fontSize: 14,
                fontWeight: 600,
                transition: "all 0.2s ease",
                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.15)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow = "0 8px 30px rgba(0, 0, 0, 0.2)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 4px 20px rgba(0, 0, 0, 0.15)";
              }}
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              privacy@vaultly.io
            </a>
          </div>
        </Reveal>
      </section>

      {/* Footer */}
      <footer
        style={{
          background: "var(--gray-900)",
          padding: isMobile ? "32px 5%" : "48px 5%",
          borderTop: "1px solid var(--gray-800)",
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            justifyContent: "space-between",
            alignItems: isMobile ? "flex-start" : "center",
            gap: isMobile ? 20 : 24,
          }}
        >
          <Logo dark />
          <div
            style={{
              display: "flex",
              flexDirection: isMobile ? "column" : "row",
              alignItems: isMobile ? "flex-start" : "center",
              gap: isMobile ? 12 : 24,
            }}
          >
            <Link
              to="/"
              style={{
                fontSize: 13,
                color: "var(--gray-400)",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--white)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--gray-400)")}
            >
              Home
            </Link>
            <span
              style={{
                width: 4,
                height: 4,
                borderRadius: "50%",
                background: "var(--gray-700)",
                display: isMobile ? "none" : "block",
              }}
            />
            <p style={{ color: "var(--gray-500)", fontSize: 13 }}>
              © 2026 Vaultly Inc. · Built on licensed payment infrastructure
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
