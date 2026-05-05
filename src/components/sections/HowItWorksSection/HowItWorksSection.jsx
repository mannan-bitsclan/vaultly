import { Reveal } from "../../common";
import { useResponsive } from "../../../hooks";
import "./HowItWorksSection.css";

const STEPS = [
  {
    n: "01",
    title: "Connect & Verify",
    desc: "Sign up and verify your identity in under 60 seconds through our secure KYC process. Bank-grade AES-256 encryption protects your data end-to-end.",
    detail: "Instant verification via Plaid",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
    accent: "#4949f2",
    screen: {
      title: "Identity Verified",
      items: [
        { l: "Full Name", v: "Marcus T.", c: "#e5e7eb" },
        { l: "Email", v: "marcus@studio.co", c: "#e5e7eb" },
        { l: "KYC Status", v: "Verified ✓", c: "#10b981" },
        { l: "Encryption", v: "AES-256", c: "#4949f2" },
      ],
    },
  },
  {
    n: "02",
    title: "Issue Your Smart Cards",
    desc: "Generate purpose-built virtual cards in seconds. Each card type carries its own programmable logic — spending limits, merchant restrictions, auto-expiry.",
    detail: "Unlimited virtual cards, zero fees",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
        <line x1="1" y1="10" x2="23" y2="10" />
      </svg>
    ),
    accent: "#a78bfa",
    screen: {
      title: "Your Cards",
      items: [
        { l: "Fortress Card", v: "Active · 6 subs", c: "#4949f2" },
        { l: "Trial Shield", v: "$1.00 limit", c: "#10b981" },
        { l: "Social Card", v: "3 members", c: "#a78bfa" },
        { l: "Kill Switch", v: "Ready", c: "#f59e0b" },
      ],
    },
  },
  {
    n: "03",
    title: "Build Your Allowlist",
    desc: "Use your Fortress Card at Netflix, Adobe, Spotify — every approved merchant gets added automatically. Unknown merchants get blocked instantly.",
    detail: "Auto-learns approved merchants",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 11l3 3L22 4" />
        <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
      </svg>
    ),
    accent: "#10b981",
    screen: {
      title: "Allowlist",
      items: [
        { l: "Netflix", v: "–$15.99/mo", c: "#e5e7eb" },
        { l: "Spotify", v: "–$9.99/mo", c: "#e5e7eb" },
        { l: "Adobe CC", v: "–$54.99/mo", c: "#e5e7eb" },
        { l: "Unknown Vendor", v: "BLOCKED", c: "#ef4444" },
      ],
    },
  },
  {
    n: "04",
    title: "You're Protected",
    desc: "Real-time webhooks monitor every authorization request. Suspicious charges are intercepted in under 200ms — before the merchant ever receives approval.",
    detail: "200ms interception speed",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
    accent: "#f59e0b",
    screen: {
      title: "Live Monitor",
      items: [
        { l: "Charges Today", v: "3 approved", c: "#10b981" },
        { l: "Blocked", v: "1 attempt", c: "#ef4444" },
        { l: "Saved This Month", v: "$348.00", c: "#4949f2" },
        { l: "Response Time", v: "<200ms", c: "#a78bfa" },
      ],
    },
  },
];

function PhoneMockup({ step, isMobile, isTablet }) {
  const phoneClasses = [
    "how-section__phone",
    isMobile ? "how-section__phone--mobile" : isTablet ? "how-section__phone--tablet" : "how-section__phone--desktop",
  ].join(" ");

  return (
    <div
      className={phoneClasses}
      style={{
        background: `linear-gradient(145deg, ${step.accent}30, ${step.accent}10)`,
        boxShadow: `0 30px 80px ${step.accent}25, 0 0 0 1px ${step.accent}30`,
      }}
    >
      <div
        className="how-section__phone-screen"
        style={{ border: `1px solid ${step.accent}20` }}
      >
        {/* Dynamic Island */}
        <div className="how-section__phone-island d-flex justify-content-center">
          <div
            className="how-section__phone-island-inner d-flex align-items-center justify-content-center"
            style={{ boxShadow: `0 0 20px ${step.accent}20` }}
          >
            <div
              className="how-section__phone-island-dot"
              style={{
                background: `linear-gradient(135deg, ${step.accent}, ${step.accent}80)`,
                boxShadow: `0 0 8px ${step.accent}`,
              }}
            />
          </div>
        </div>

        {/* Status bar */}
        <div className="how-section__phone-status d-flex justify-content-between align-items-center">
          <span className="how-section__phone-time">9:41</span>
          <div className="d-flex align-items-center" style={{ gap: 5 }}>
            <div className="d-flex align-items-end" style={{ gap: 1 }}>
              {[4, 6, 8, 10].map((h, k) => (
                <div
                  key={k}
                  className="how-section__phone-signal-bar"
                  style={{
                    height: h,
                    background: k < 3 ? "#e5e7eb" : "#4b5563",
                  }}
                />
              ))}
            </div>
            <div className="how-section__phone-battery">
              <div
                className="how-section__phone-battery-fill"
                style={{ background: step.accent }}
              />
              <div className="how-section__phone-battery-cap" />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="how-section__phone-content">
          <div className="how-section__phone-header d-flex align-items-center">
            <div
              className="how-section__phone-logo-icon d-flex align-items-center justify-content-center"
              style={{
                background: `linear-gradient(135deg, ${step.accent}30, ${step.accent}10)`,
                border: `1px solid ${step.accent}40`,
                color: step.accent,
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
            </div>
            <div>
              <p className="how-section__phone-brand" style={{ color: step.accent }}>
                Vaultly
              </p>
              <p className="how-section__phone-title">{step.screen.title}</p>
            </div>
          </div>

          {step.screen.items.map((item, j) => (
            <div
              key={j}
              className="how-section__phone-item d-flex justify-content-between align-items-center"
              style={{ border: `1px solid ${step.accent}15` }}
            >
              <span className="how-section__phone-item-label">{item.l}</span>
              <span
                className="how-section__phone-item-value"
                style={{
                  color: item.c,
                  textShadow: item.c !== "#e5e7eb" ? `0 0 10px ${item.c}50` : "none",
                }}
              >
                {item.v}
              </span>
            </div>
          ))}
        </div>

        {/* Home indicator */}
        <div className="how-section__phone-home d-flex justify-content-center">
          <div
            className="how-section__phone-home-bar"
            style={{ background: `linear-gradient(90deg, transparent, ${step.accent}40, transparent)` }}
          />
        </div>
      </div>
    </div>
  );
}

function StepCard({ step, index, isMobile }) {
  const isEven = index % 2 === 0;

  const cardClasses = [
    "how-section__step-card d-flex flex-column",
    isMobile ? "how-section__step-card--mobile" : "how-section__step-card--desktop",
  ].join(" ");

  const bgNumberClasses = [
    "how-section__step-card-bg-number",
    isMobile ? "how-section__step-card-bg-number--mobile" : "how-section__step-card-bg-number--desktop",
  ].join(" ");

  const titleClasses = [
    "how-section__step-card-title",
    isMobile ? "how-section__step-card-title--mobile" : "how-section__step-card-title--desktop",
  ].join(" ");

  const descClasses = [
    "how-section__step-card-desc",
    isMobile && "how-section__step-card-desc--mobile",
  ].filter(Boolean).join(" ");

  return (
    <div
      className={cardClasses}
      style={{
        borderColor: `${step.accent}20`,
        "--step-accent": step.accent,
      }}
    >
      {/* Gradient accent line */}
      <div
        className={`how-section__step-card-accent ${isEven ? "how-section__step-card-accent--left" : "how-section__step-card-accent--right"}`}
        style={{ background: `linear-gradient(180deg, ${step.accent}, ${step.accent}20)` }}
      />

      {/* Glowing orb background */}
      <div
        className="how-section__step-card-orb"
        style={{ background: `radial-gradient(circle, ${step.accent}15 0%, transparent 70%)` }}
      />

      {/* Background number */}
      <div
        className={bgNumberClasses}
      >
        {step.n}
      </div>

      <div className="how-section__step-card-content">
        {/* Icon and Step badge */}
        <div className="how-section__step-card-header d-flex align-items-center">
          <div
            className="how-section__step-card-icon d-flex align-items-center justify-content-center"
            style={{
              background: `linear-gradient(135deg, ${step.accent}25, ${step.accent}10)`,
              border: `1px solid ${step.accent}40`,
              color: step.accent,
              boxShadow: `0 0 30px ${step.accent}20`,
            }}
          >
            {step.icon}
          </div>
          <div
            className="how-section__step-card-badge d-flex align-items-center"
            style={{
              background: `${step.accent}15`,
              border: `1px solid ${step.accent}30`,
            }}
          >
            <div
              className="how-section__step-card-badge-circle d-flex align-items-center justify-content-center"
              style={{
                background: step.accent,
                boxShadow: `0 0 15px ${step.accent}50`,
              }}
            >
              <span className="how-section__step-card-badge-text">{step.n}</span>
            </div>
            <span
              className="how-section__step-card-step-text"
              style={{ color: step.accent }}
            >
              Step
            </span>
          </div>
        </div>

        <h3 className={titleClasses}>{step.title}</h3>

        <p className={descClasses}>{step.desc}</p>

        {/* Detail badge */}
        <div className="how-section__step-card-detail d-inline-flex align-items-center">
          <div
            className="how-section__step-card-detail-dot"
            style={{
              background: step.accent,
              boxShadow: `0 0 10px ${step.accent}`,
            }}
          />
          <span className="how-section__step-card-detail-text">{step.detail}</span>
        </div>
      </div>
    </div>
  );
}

export function HowItWorksSection() {
  const { isMobile, isTablet, width } = useResponsive();

  // Use mobile layout for screens below 992px
  const useMobileLayout = width < 992;

  const sectionClasses = [
    "how-section position-relative overflow-hidden",
    isMobile ? "how-section--mobile" : useMobileLayout ? "how-section--small-tablet" : isTablet ? "how-section--tablet" : "how-section--desktop",
  ].join(" ");

  const headerClasses = [
    "how-section__header text-center",
    isMobile && "how-section__header--mobile",
  ].filter(Boolean).join(" ");

  const eyebrowClasses = [
    "how-section__eyebrow",
    isMobile && "how-section__eyebrow--mobile",
  ].filter(Boolean).join(" ");

  const titleClasses = [
    "how-section__title",
    isMobile ? "how-section__title--mobile" : useMobileLayout ? "how-section__title--small-tablet" : isTablet ? "how-section__title--tablet" : "",
  ].filter(Boolean).join(" ");

  const subtitleClasses = [
    "how-section__subtitle mx-auto",
    isMobile && "how-section__subtitle--mobile",
  ].filter(Boolean).join(" ");

  const stepsClasses = [
    "how-section__steps d-flex flex-column position-relative",
    useMobileLayout && "how-section__steps--mobile",
  ].filter(Boolean).join(" ");

  return (
    <section id="section-how" className={sectionClasses}>
      {/* Animated gradient background */}
      <div className="how-section__bg-gradient" />

      {/* Grid pattern */}
      <svg className="how-section__grid" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="howGrid" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="var(--primary)" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#howGrid)" />
      </svg>

      <div className="how-section__container mx-auto">
        {/* Header */}
        <Reveal>
          <div className={headerClasses}>
            <h2 className={eyebrowClasses}>How It Works</h2>

            <p className={titleClasses}>
              Four Steps to{" "}
              <span className="text-gradient-primary">Financial Freedom</span>
            </p>

            <p className={subtitleClasses}>
              No bank switching. No complex setup. Just follow the path and start saving $4,200+ every year.
            </p>
          </div>
        </Reveal>

        {/* Steps */}
        <div className={stepsClasses}>
          {/* Vertical timeline line */}
          {!useMobileLayout && <div className="how-section__timeline" />}

          {STEPS.map((step, i) => {
            const isEven = i % 2 === 0;

            const rowClasses = [
              "how-section__step-row",
              useMobileLayout ? "how-section__step-row--mobile" : "how-section__step-row--desktop",
            ].join(" ");

            return (
              <Reveal key={i} delay={i * 0.12}>
                <div className={rowClasses}>
                  {/* Left side */}
                  {!useMobileLayout && isEven && (
                    <StepCard step={step} index={i} isMobile={isMobile} />
                  )}
                  {!useMobileLayout && !isEven && (
                    <div className="d-flex justify-content-end">
                      <PhoneMockup step={step} isMobile={isMobile} isTablet={isTablet} />
                    </div>
                  )}

                  {/* Center number indicator */}
                  {!useMobileLayout && (
                    <div
                      className="how-section__center-indicator d-flex align-items-center justify-content-center"
                      style={{
                        background: `linear-gradient(135deg, ${step.accent}20, ${step.accent}05)`,
                        border: `2px solid ${step.accent}40`,
                        boxShadow: `0 0 40px ${step.accent}20`,
                      }}
                    >
                      <div
                        className="how-section__center-indicator-inner d-flex align-items-center justify-content-center"
                        style={{ border: `2px solid ${step.accent}60` }}
                      >
                        <span
                          className="how-section__center-indicator-number"
                          style={{
                            color: step.accent,
                            textShadow: `0 0 20px ${step.accent}50`,
                          }}
                        >
                          {step.n}
                        </span>
                      </div>

                      {/* Glowing ring */}
                      <div
                        className="how-section__center-indicator-ring"
                        style={{ border: `1px solid ${step.accent}30` }}
                      />
                    </div>
                  )}

                  {/* Right side */}
                  {!useMobileLayout && isEven && (
                    <PhoneMockup step={step} isMobile={isMobile} isTablet={isTablet} />
                  )}
                  {!useMobileLayout && !isEven && (
                    <StepCard step={step} index={i} isMobile={isMobile} />
                  )}

                  {/* Mobile layout (used for screens below 992px) */}
                  {useMobileLayout && (
                    <>
                      {/* Step number for mobile */}
                      <div className="how-section__mobile-step-number d-flex align-items-center">
                        <div
                          className="how-section__mobile-step-circle d-flex align-items-center justify-content-center"
                          style={{
                            background: `linear-gradient(135deg, ${step.accent}30, ${step.accent}10)`,
                            border: `2px solid ${step.accent}50`,
                            boxShadow: `0 0 25px ${step.accent}25`,
                          }}
                        >
                          <span
                            style={{
                              fontFamily: "'Poppins', sans-serif",
                              fontSize: 16,
                              fontWeight: 800,
                              color: step.accent,
                            }}
                          >
                            {step.n}
                          </span>
                        </div>
                        <div
                          className="how-section__mobile-step-line"
                          style={{ background: `linear-gradient(90deg, ${step.accent}50, transparent)` }}
                        />
                      </div>
                      <StepCard step={step} index={i} isMobile={useMobileLayout} />
                    </>
                  )}
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
