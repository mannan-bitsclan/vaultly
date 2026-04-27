import { Reveal } from "../common";
import { useResponsive } from "../../hooks";

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
  return (
    <div
      style={{
        width: isMobile ? 200 : isTablet ? 220 : 250,
        background: `linear-gradient(145deg, ${step.accent}30, ${step.accent}10)`,
        borderRadius: 40,
        padding: "3px",
        boxShadow: `0 30px 80px ${step.accent}25, 0 0 0 1px ${step.accent}30`,
        margin: isMobile ? "0 auto" : undefined,
        transform: "perspective(1000px) rotateY(-5deg)",
        transition: "transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "perspective(1000px) rotateY(0deg) scale(1.02)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "perspective(1000px) rotateY(-5deg)";
      }}
    >
      <div
        style={{
          background: "linear-gradient(180deg, #0a0a0f, #050508)",
          borderRadius: 38,
          padding: "0",
          border: `1px solid ${step.accent}20`,
          overflow: "hidden",
        }}
      >
        {/* Dynamic Island */}
        <div style={{ padding: "12px 16px 0", display: "flex", justifyContent: "center" }}>
          <div
            style={{
              width: 90,
              height: 28,
              background: "#000",
              borderRadius: 20,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 8,
              boxShadow: `0 0 20px ${step.accent}20`,
            }}
          >
            <div
              style={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                background: `linear-gradient(135deg, ${step.accent}, ${step.accent}80)`,
                boxShadow: `0 0 8px ${step.accent}`,
              }}
            />
          </div>
        </div>

        {/* Status bar */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "8px 20px 0",
          }}
        >
          <span style={{ fontSize: 10, fontWeight: 600, color: "#e5e7eb" }}>9:41</span>
          <div style={{ display: "flex", gap: 5, alignItems: "center" }}>
            <div style={{ display: "flex", gap: 1, alignItems: "flex-end" }}>
              {[4, 6, 8, 10].map((h, k) => (
                <div
                  key={k}
                  style={{
                    width: 3,
                    height: h,
                    borderRadius: 1,
                    background: k < 3 ? "#e5e7eb" : "#4b5563",
                  }}
                />
              ))}
            </div>
            <div
              style={{
                width: 20,
                height: 10,
                borderRadius: 3,
                border: "1.5px solid #6b7280",
                position: "relative",
                marginLeft: 4,
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: 2,
                  left: 2,
                  bottom: 2,
                  width: "60%",
                  background: step.accent,
                  borderRadius: 1,
                }}
              />
              <div
                style={{
                  position: "absolute",
                  right: -4,
                  top: 3,
                  width: 2,
                  height: 4,
                  background: "#6b7280",
                  borderRadius: "0 2px 2px 0",
                }}
              />
            </div>
          </div>
        </div>

        {/* Content */}
        <div style={{ padding: "20px 18px 14px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              marginBottom: 16,
            }}
          >
            <div
              style={{
                width: 32,
                height: 32,
                borderRadius: 10,
                background: `linear-gradient(135deg, ${step.accent}30, ${step.accent}10)`,
                border: `1px solid ${step.accent}40`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: step.accent,
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
            </div>
            <div>
              <p
                style={{
                  fontSize: 8,
                  color: step.accent,
                  letterSpacing: 1.5,
                  textTransform: "uppercase",
                  fontWeight: 700,
                  marginBottom: 2,
                }}
              >
                Vaultly
              </p>
              <p
                style={{
                  fontSize: 14,
                  color: "#e5e7eb",
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: 700,
                }}
              >
                {step.screen.title}
              </p>
            </div>
          </div>

          {step.screen.items.map((item, j) => (
            <div
              key={j}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                background: `linear-gradient(135deg, rgba(255,255,255,0.04), rgba(255,255,255,0.01))`,
                border: `1px solid ${step.accent}15`,
                borderRadius: 12,
                padding: "14px 16px",
                marginBottom: 8,
                transition: "all 0.3s ease",
              }}
            >
              <span style={{ color: "rgba(229, 231, 235, 0.6)", fontSize: 11, fontWeight: 500 }}>
                {item.l}
              </span>
              <span
                style={{
                  fontSize: 11,
                  fontWeight: 700,
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
        <div style={{ padding: "12px 0 10px", display: "flex", justifyContent: "center" }}>
          <div
            style={{
              width: 120,
              height: 5,
              background: `linear-gradient(90deg, transparent, ${step.accent}40, transparent)`,
              borderRadius: 4,
            }}
          />
        </div>
      </div>
    </div>
  );
}

function StepCard({ step, index, isMobile, isTablet }) {
  const isEven = index % 2 === 0;

  return (
    <div
      style={{
        background: "linear-gradient(135deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        borderRadius: 12,
        padding: isMobile ? "28px 22px" : "74px 70px",
        border: `1px solid ${step.accent}20`,
        boxShadow: `0 20px 60px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255,255,255,0.05)`,
        display: "flex",
        flexDirection: "column",
        transition: "all 0.4s cubic-bezier(.16,1,.3,1)",
        overflow: "hidden",
        position: "relative",
        height: "100%",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-8px)";
        e.currentTarget.style.boxShadow = `0 30px 80px rgba(0, 0, 0, 0.4), 0 0 40px ${step.accent}15, inset 0 1px 0 rgba(255,255,255,0.1)`;
        e.currentTarget.style.borderColor = `${step.accent}40`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "";
        e.currentTarget.style.boxShadow = "0 20px 60px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255,255,255,0.05)";
        e.currentTarget.style.borderColor = `${step.accent}20`;
      }}
    >
      {/* Gradient accent line */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: isEven ? 0 : "auto",
          right: isEven ? "auto" : 0,
          bottom: 0,
          width: 3,
          background: `linear-gradient(180deg, ${step.accent}, ${step.accent}20)`,
          borderRadius: isEven ? "24px 0 0 24px" : "0 24px 24px 0",
        }}
      />

      {/* Glowing orb background */}
      <div
        style={{
          position: "absolute",
          top: -50,
          right: -50,
          width: 200,
          height: 200,
          background: `radial-gradient(circle, ${step.accent}15 0%, transparent 70%)`,
          pointerEvents: "none",
        }}
      />

      {/* Background number */}
      <div
        style={{
          position: "absolute",
          bottom: -30,
          right: 10,
          fontFamily: "'Poppins', sans-serif",
          fontSize: isMobile ? 120 : 160,
          fontWeight: 900,
          background: `linear-gradient(180deg, ${step.accent}15, transparent)`,
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          lineHeight: 1,
          userSelect: "none",
          pointerEvents: "none",
        }}
      >
        {step.n}
      </div>

      <div style={{ position: "relative", zIndex: 2 }}>
        {/* Icon and Step badge */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
            marginBottom: 22,
          }}
        >
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 16,
              background: `linear-gradient(135deg, ${step.accent}25, ${step.accent}10)`,
              border: `1px solid ${step.accent}40`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: step.accent,
              boxShadow: `0 0 30px ${step.accent}20`,
            }}
          >
            {step.icon}
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              background: `${step.accent}15`,
              border: `1px solid ${step.accent}30`,
              borderRadius: 100,
              padding: "6px 14px 6px 10px",
            }}
          >
            <div
              style={{
                width: 24,
                height: 24,
                borderRadius: "50%",
                background: step.accent,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: `0 0 15px ${step.accent}50`,
              }}
            >
              <span
                style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: 10,
                  fontWeight: 700,
                  color: "#ffffff",
                }}
              >
                {step.n}
              </span>
            </div>
            <span
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: 11,
                fontWeight: 700,
                color: step.accent,
                letterSpacing: 1,
                textTransform: "uppercase",
              }}
            >
              Step
            </span>
          </div>
        </div>

        <h3
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 700,
            fontSize: isMobile ? "1.5rem" : "clamp(1.5rem,2.5vw,1.9rem)",
            color: "var(--white)",
            marginBottom: 14,
            lineHeight: 1.2,
            letterSpacing: -0.5,
          }}
        >
          {step.title}
        </h3>

        <p
          style={{
            color: "var(--gray-400)",
            fontSize: isMobile ? 14 : 16,
            lineHeight: 1.8,
            marginBottom: 24,
            flex: 1,
          }}
        >
          {step.desc}
        </p>

        {/* Detail badge */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 10,
            background: "rgba(255, 255, 255, 0.05)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            borderRadius: 100,
            padding: "10px 18px",
          }}
        >
          <div
            style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              background: step.accent,
              boxShadow: `0 0 10px ${step.accent}`,
              animation: "pulse 2s infinite",
            }}
          />
          <span style={{ fontSize: 13, color: "var(--gray-300)", fontWeight: 600 }}>
            {step.detail}
          </span>
        </div>
      </div>
    </div>
  );
}

export function HowItWorksSection() {
  const { isMobile, isTablet } = useResponsive();

  return (
    <section
      id="section-how"
      style={{
        padding: isMobile ? "80px 5% 64px" : isTablet ? "80px 5% 80px" : "80px 5% 80px",
        background: "var(--black)",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Animated gradient background */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "radial-gradient(ellipse at 20% 0%, rgba(73, 73, 242, 0.15) 0%, transparent 50%), radial-gradient(ellipse at 80% 100%, rgba(167, 139, 250, 0.1) 0%, transparent 50%)",
          pointerEvents: "none",
        }}
      />

      {/* Grid pattern */}
      <svg
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          opacity: 0.03,
          pointerEvents: "none",
        }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="howGrid" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="var(--primary)" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#howGrid)" />
      </svg>

      <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative", zIndex: 2 }}>
        {/* Header */}
        <Reveal>
          <div
            style={{
              textAlign: "center",
              marginBottom: isMobile ? 56 : 80,
            }}
          >
            <p
              style={{
                fontSize: isMobile ? 11 : 13,
                letterSpacing: 3,
                textTransform: "uppercase",
                color: "var(--primary)",
                fontWeight: 700,
                marginBottom: 16,
              }}
            >
              How It Works
            </p>

            <h2
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: isMobile ? "1.75rem" : isTablet ? "2.4rem" : "clamp(2.2rem,4vw,3.2rem)",
                fontWeight: 700,
                letterSpacing: isMobile ? -0.5 : -1.5,
                lineHeight: 1.1,
                color: "var(--white)",
                marginBottom: 18,
              }}
            >
              Four Steps to{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, var(--primary), #a78bfa)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Financial Freedom
              </span>
            </h2>

            <p
              style={{
                color: "var(--gray-400)",
                fontSize: isMobile ? 15 : 18,
                lineHeight: 1.7,
                maxWidth: 550,
                margin: "0 auto",
              }}
            >
              No bank switching. No complex setup. Just follow the path and start saving $4,200+ every year.
            </p>
          </div>
        </Reveal>

        {/* Steps */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: isMobile ? 32 : 48,
            position: "relative",
          }}
        >
          {/* Vertical timeline line */}
          {!isMobile && (
            <div
              style={{
                position: "absolute",
                left: "50%",
                top: 0,
                bottom: 0,
                width: 2,
                transform: "translateX(-50%)",
                background: "linear-gradient(180deg, transparent, var(--primary) 10%, var(--primary) 90%, transparent)",
                opacity: 0.3,
                pointerEvents: "none",
              }}
            />
          )}

          {STEPS.map((step, i) => {
            const isEven = i % 2 === 0;

            return (
              <Reveal key={i} delay={i * 0.12}>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: isMobile ? "1fr" : "1fr auto 1fr",
                    gap: isMobile ? 24 : 40,
                    alignItems: "center",
                  }}
                >
                  {/* Left side */}
                  {!isMobile && isEven && (
                    <StepCard step={step} index={i} isMobile={isMobile} isTablet={isTablet} />
                  )}
                  {!isMobile && !isEven && (
                    <div style={{ display: "flex", justifyContent: "flex-end" }}>
                      <PhoneMockup step={step} isMobile={isMobile} isTablet={isTablet} />
                    </div>
                  )}

                  {/* Center number indicator */}
                  {!isMobile && (
                    <div
                      style={{
                        width: 80,
                        height: 80,
                        borderRadius: "50%",
                        background: `linear-gradient(135deg, ${step.accent}20, ${step.accent}05)`,
                        border: `2px solid ${step.accent}40`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        position: "relative",
                        boxShadow: `0 0 40px ${step.accent}20`,
                      }}
                    >
                      <div
                        style={{
                          width: 60,
                          height: 60,
                          borderRadius: "50%",
                          background: "var(--black)",
                          border: `2px solid ${step.accent}60`,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <span
                          style={{
                            fontFamily: "'Poppins', sans-serif",
                            fontSize: 22,
                            fontWeight: 800,
                            color: step.accent,
                            textShadow: `0 0 20px ${step.accent}50`,
                          }}
                        >
                          {step.n}
                        </span>
                      </div>

                      {/* Glowing ring */}
                      <div
                        style={{
                          position: "absolute",
                          inset: -4,
                          borderRadius: "50%",
                          border: `1px solid ${step.accent}30`,
                          animation: "pulse 3s infinite",
                        }}
                      />
                    </div>
                  )}

                  {/* Right side */}
                  {!isMobile && isEven && (
                    <PhoneMockup step={step} isMobile={isMobile} isTablet={isTablet} />
                  )}
                  {!isMobile && !isEven && (
                    <StepCard step={step} index={i} isMobile={isMobile} isTablet={isTablet} />
                  )}

                  {/* Mobile layout */}
                  {isMobile && (
                    <>
                      {/* Step number for mobile */}
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: 16,
                          marginBottom: 8,
                        }}
                      >
                        <div
                          style={{
                            width: 48,
                            height: 48,
                            borderRadius: "50%",
                            background: `linear-gradient(135deg, ${step.accent}30, ${step.accent}10)`,
                            border: `2px solid ${step.accent}50`,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
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
                          style={{
                            flex: 1,
                            height: 2,
                            background: `linear-gradient(90deg, ${step.accent}50, transparent)`,
                            borderRadius: 1,
                          }}
                        />
                      </div>
                      <StepCard step={step} index={i} isMobile={isMobile} isTablet={isTablet} />
                    </>
                  )}
                </div>
              </Reveal>
            );
          })}
        </div>


      </div>

      {/* CSS for animations */}
      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.05); }
        }
      `}</style>
    </section>
  );
}
