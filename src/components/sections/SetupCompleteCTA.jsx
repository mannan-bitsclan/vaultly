import { Reveal } from "../common";
import { useResponsive } from "../../hooks";

function PhonePreview({ isMobile }) {
  return (
    <div
      style={{
        position: "relative",
        width: isMobile ? 260 : 300,
        margin: "0 auto",
      }}
    >
      {/* Glow behind phone */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "140%",
          height: "100%",
          background: "radial-gradient(ellipse at center, rgba(73, 73, 242, 0.35) 0%, transparent 60%)",
          filter: "blur(60px)",
          pointerEvents: "none",
        }}
      />

      {/* Phone frame */}
      <div
        style={{
          position: "relative",
          background: "linear-gradient(145deg, #2a2d3a, #1a1c25)",
          borderRadius: 44,
          padding: 4,
          boxShadow: "0 50px 100px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(73, 73, 242, 0.3), 0 0 60px rgba(73, 73, 242, 0.15)",
        }}
      >
        <div
          style={{
            background: "linear-gradient(180deg, #0f1117, #080a0f)",
            borderRadius: 40,
            overflow: "hidden",
            border: "1px solid rgba(73, 73, 242, 0.2)",
          }}
        >
          {/* Dynamic Island */}
          <div style={{ padding: "14px 20px 0", display: "flex", justifyContent: "center" }}>
            <div
              style={{
                width: 100,
                height: 32,
                background: "#000",
                borderRadius: 20,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 0 20px rgba(73, 73, 242, 0.15)",
              }}
            >
              <div
                style={{
                  width: 10,
                  height: 10,
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, #4949f2, #6366f1)",
                  boxShadow: "0 0 12px #4949f2",
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
              padding: "10px 24px 0",
            }}
          >
            <span style={{ fontSize: 12, fontWeight: 600, color: "#e5e7eb" }}>9:41</span>
            <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
              <div style={{ display: "flex", gap: 2, alignItems: "flex-end" }}>
                {[5, 7, 9, 11].map((h, k) => (
                  <div
                    key={k}
                    style={{
                      width: 3,
                      height: h,
                      borderRadius: 1,
                      background: "#e5e7eb",
                    }}
                  />
                ))}
              </div>
              <div
                style={{
                  width: 24,
                  height: 12,
                  borderRadius: 4,
                  border: "2px solid #4949f2",
                  position: "relative",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: 2,
                    left: 2,
                    bottom: 2,
                    width: "80%",
                    background: "#4949f2",
                    borderRadius: 2,
                  }}
                />
              </div>
            </div>
          </div>

          {/* App content */}
          <div style={{ padding: "24px 20px 20px" }}>
            {/* Success header */}
            <div style={{ textAlign: "center", marginBottom: 24 }}>
              <div
                style={{
                  width: 64,
                  height: 64,
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, #4949f2, #6366f1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 16px",
                  boxShadow: "0 0 50px rgba(73, 73, 242, 0.5)",
                }}
              >
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#fff"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <p
                style={{
                  fontSize: 10,
                  letterSpacing: 2,
                  textTransform: "uppercase",
                  color: "#4949f2",
                  fontWeight: 700,
                  marginBottom: 6,
                }}
              >
                All Protected
              </p>
              <p
                style={{
                  fontSize: 18,
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: 700,
                  color: "#fff",
                }}
              >
                $4,200+ Saved
              </p>
            </div>

            {/* Stats cards */}
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {[
                { label: "Active Cards", value: "4", icon: "💳", color: "#4949f2" },
                { label: "Blocked Charges", value: "12", icon: "🛡️", color: "#ef4444" },
                { label: "Monthly Savings", value: "$350", icon: "💰", color: "#a78bfa" },
              ].map((item) => (
                <div
                  key={item.label}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    background: "rgba(255, 255, 255, 0.04)",
                    border: "1px solid rgba(255, 255, 255, 0.08)",
                    borderRadius: 14,
                    padding: "14px 16px",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <div
                      style={{
                        width: 36,
                        height: 36,
                        borderRadius: 10,
                        background: `${item.color}15`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: 16,
                      }}
                    >
                      {item.icon}
                    </div>
                    <span style={{ fontSize: 13, color: "rgba(255, 255, 255, 0.7)" }}>
                      {item.label}
                    </span>
                  </div>
                  <span
                    style={{
                      fontSize: 16,
                      fontWeight: 700,
                      color: item.color,
                      textShadow: `0 0 20px ${item.color}40`,
                    }}
                  >
                    {item.value}
                  </span>
                </div>
              ))}
            </div>

            {/* Bottom CTA */}
            <div
              style={{
                marginTop: 20,
                background: "linear-gradient(135deg, #4949f2, #6366f1)",
                borderRadius: 14,
                padding: "14px 20px",
                textAlign: "center",
                boxShadow: "0 8px 24px rgba(73, 73, 242, 0.3)",
              }}
            >
              <span style={{ fontSize: 14, fontWeight: 700, color: "#fff" }}>
                View Full Dashboard →
              </span>
            </div>
          </div>

          {/* Home indicator */}
          <div style={{ padding: "16px 0 12px", display: "flex", justifyContent: "center" }}>
            <div
              style={{
                width: 130,
                height: 5,
                background: "linear-gradient(90deg, transparent, rgba(73, 73, 242, 0.5), transparent)",
                borderRadius: 4,
              }}
            />
          </div>
        </div>
      </div>

      {/* Floating elements */}
      <div
        style={{
          position: "absolute",
          top: 60,
          left: -40,
          background: "linear-gradient(135deg, #4949f2, #6366f1)",
          borderRadius: 16,
          padding: "12px 16px",
          boxShadow: "0 20px 40px rgba(73, 73, 242, 0.4), 0 0 20px rgba(73, 73, 242, 0.2)",
          animation: "float 3s ease-in-out infinite",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
            <polyline points="22 4 12 14.01 9 11.01" />
          </svg>
          <span style={{ fontSize: 12, fontWeight: 700, color: "#fff" }}>Fortress Active</span>
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          top: 180,
          right: -50,
          background: "linear-gradient(135deg, #ef4444, #f87171)",
          borderRadius: 16,
          padding: "12px 16px",
          boxShadow: "0 20px 40px rgba(239, 68, 68, 0.4), 0 0 20px rgba(239, 68, 68, 0.2)",
          animation: "float 3s ease-in-out infinite 1s",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2">
            <circle cx="12" cy="12" r="10" />
            <line x1="15" y1="9" x2="9" y2="15" />
            <line x1="9" y1="9" x2="15" y2="15" />
          </svg>
          <span style={{ fontSize: 12, fontWeight: 700, color: "#fff" }}>$99 Blocked</span>
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          bottom: 100,
          left: -30,
          background: "linear-gradient(135deg, #a78bfa, #c4b5fd)",
          borderRadius: 16,
          padding: "12px 16px",
          boxShadow: "0 20px 40px rgba(167, 139, 250, 0.4), 0 0 20px rgba(167, 139, 250, 0.2)",
          animation: "float 3s ease-in-out infinite 0.5s",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <span style={{ fontSize: 16 }}>💰</span>
          <span style={{ fontSize: 12, fontWeight: 700, color: "#fff" }}>+$350 Saved</span>
        </div>
      </div>

      {/* Animation styles */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
      `}</style>
    </div>
  );
}

export function SetupCompleteCTA() {
  const { isMobile, isTablet } = useResponsive();

  return (
    <section
      style={{
        padding: isMobile ? "72px 5%" : isTablet ? "88px 5%" : "80px 5%",
        background: "var(--black)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background decorations */}
      <div
        style={{
          position: "absolute",
          top: "10%",
          left: "5%",
          width: 500,
          height: 500,
          background: "radial-gradient(circle, rgba(73, 73, 242, 0.15) 0%, transparent 60%)",
          pointerEvents: "none",
          filter: "blur(40px)",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "5%",
          right: "10%",
          width: 600,
          height: 600,
          background: "radial-gradient(circle, rgba(167, 139, 250, 0.1) 0%, transparent 60%)",
          pointerEvents: "none",
          filter: "blur(50px)",
        }}
      />

      {/* Glowing grid pattern */}
      <svg
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          opacity: 0.15,
          pointerEvents: "none",
        }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="setupGridDark" width="60" height="60" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="1" fill="#4949f2" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#setupGridDark)" />
      </svg>

      {/* Top gradient line */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: "20%",
          right: "20%",
          height: 1,
          background: "linear-gradient(90deg, transparent, rgba(73, 73, 242, 0.5), transparent)",
        }}
      />

      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          position: "relative",
          zIndex: 2,
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : isTablet ? "1fr" : "1fr 1fr",
            gap: isMobile ? 48 : 64,
            alignItems: "center",
          }}
        >
          {/* Left content */}
          <Reveal>
            <div style={{ order: isMobile || isTablet ? 2 : 1 }}>
              {/* Badge */}
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  background: "rgba(73, 73, 242, 0.15)",
                  border: "1px solid rgba(73, 73, 242, 0.3)",
                  borderRadius: 100,
                  padding: "8px 18px",
                  marginBottom: 24,
                  backdropFilter: "blur(10px)",
                }}
              >
                <div
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    background: "var(--primary)",
                    boxShadow: "0 0 12px var(--primary)",
                    animation: "pulse 2s ease-in-out infinite",
                  }}
                />
                <span
                  style={{
                    fontSize: 12,
                    letterSpacing: 2,
                    textTransform: "uppercase",
                    color: "var(--primary)",
                    fontWeight: 700,
                  }}
                >
                  Setup Complete
                </span>
              </div>

              {/* Heading */}
              <h2
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: isMobile ? "1.85rem" : isTablet ? "2.4rem" : "clamp(2.4rem,4vw,3.2rem)",
                  fontWeight: 700,
                  letterSpacing: isMobile ? -0.5 : -1.5,
                  lineHeight: 1.1,
                  color: "var(--white)",
                  marginBottom: 20,
                }}
              >
                Start Saving{" "}
                <span
                  style={{
                    background: "linear-gradient(135deg, var(--primary), #a78bfa)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  $4200/year
                </span>
                <br />
                In Just 4 Steps
              </h2>

              {/* Description */}
              <p
                style={{
                  color: "var(--gray-400)",
                  fontSize: isMobile ? 16 : 18,
                  lineHeight: 1.75,
                  marginBottom: 32,
                  maxWidth: 480,
                }}
              >
                Every subscription monitored. Every unauthorized charge blocked.
                Every dollar accounted for — automatically. Join thousands already saving.
              </p>

              {/* Stats row */}
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: isMobile ? 16 : 20,
                  marginBottom: 36,
                }}
              >
                {[
                  { value: "$4,200+", label: "Saved Yearly", color: "#4949f2" },
                  { value: "92%", label: "Recovered", color: "#a78bfa" },
                  { value: "<200ms", label: "Block Speed", color: "#6366f1" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    style={{
                      background: "rgba(255, 255, 255, 0.03)",
                      border: "1px solid rgba(255, 255, 255, 0.08)",
                      borderRadius: 12,
                      padding: isMobile ? "16px 20px" : "20px 28px",
                      backdropFilter: "blur(10px)",
                      transition: "all 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = `${stat.color}50`;
                      e.currentTarget.style.transform = "translateY(-2px)";
                      e.currentTarget.style.background = `rgba(255, 255, 255, 0.05)`;
                      e.currentTarget.style.boxShadow = `0 20px 40px rgba(0, 0, 0, 0.3), 0 0 30px ${stat.color}15`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.08)";
                      e.currentTarget.style.transform = "";
                      e.currentTarget.style.background = "rgba(255, 255, 255, 0.03)";
                      e.currentTarget.style.boxShadow = "";
                    }}
                  >
                    <div
                      style={{
                        fontFamily: "'Poppins', sans-serif",
                        fontSize: isMobile ? "1.5rem" : "1.8rem",
                        fontWeight: 700,
                        color: stat.color,
                        lineHeight: 1,
                        textShadow: `0 0 30px ${stat.color}50`,
                      }}
                    >
                      {stat.value}
                    </div>
                    <div
                      style={{
                        fontSize: 12,
                        color: "var(--gray-500)",
                        marginTop: 6,
                        fontWeight: 500,
                      }}
                    >
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA buttons */}
              <div
                style={{
                  display: "flex",
                  flexDirection: isMobile ? "column" : "row",
                  gap: 14,
                }}
              >
                <button
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 10,
                    background: "linear-gradient(135deg, var(--primary), var(--primary-light))",
                    color: "#fff",
                    fontWeight: 700,
                    border: "none",
                    padding: isMobile ? "16px 28px" : "18px 36px",
                    borderRadius: 14,
                    fontSize: 16,
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    boxShadow: "0 8px 30px rgba(73, 73, 242, 0.4), 0 0 40px rgba(73, 73, 242, 0.2)",
                    fontFamily: "'Inter', sans-serif",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-2px)";
                    e.currentTarget.style.boxShadow = "0 12px 40px rgba(73, 73, 242, 0.5), 0 0 60px rgba(73, 73, 242, 0.3)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "";
                    e.currentTarget.style.boxShadow = "0 8px 30px rgba(73, 73, 242, 0.4), 0 0 40px rgba(73, 73, 242, 0.2)";
                  }}
                >
                  Get Started Free
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </button>

                <button
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 10,
                    background: "rgba(255, 255, 255, 0.05)",
                    color: "var(--gray-300)",
                    fontWeight: 600,
                    border: "1px solid rgba(255, 255, 255, 0.15)",
                    padding: isMobile ? "16px 28px" : "18px 36px",
                    borderRadius: 14,
                    fontSize: 16,
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    fontFamily: "'Inter', sans-serif",
                    backdropFilter: "blur(10px)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "rgba(73, 73, 242, 0.5)";
                    e.currentTarget.style.color = "var(--primary)";
                    e.currentTarget.style.background = "rgba(73, 73, 242, 0.1)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.15)";
                    e.currentTarget.style.color = "var(--gray-300)";
                    e.currentTarget.style.background = "rgba(255, 255, 255, 0.05)";
                  }}
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <polygon points="10 8 16 12 10 16 10 8" fill="currentColor" />
                  </svg>
                  Watch Demo
                </button>
              </div>

              {/* Trust note */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  marginTop: 24,
                  color: "var(--gray-500)",
                  fontSize: 13,
                }}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="var(--primary)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ filter: "drop-shadow(0 0 8px rgba(73, 73, 242, 0.5))" }}
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  <polyline points="9 12 11 14 15 10" />
                </svg>
                <span>No credit card required · Cancel anytime · Bank-grade security</span>
              </div>
            </div>
          </Reveal>

          {/* Right - Phone Preview */}
          <Reveal delay={0.2}>
            <div style={{ order: isMobile || isTablet ? 1 : 2 }}>
              <PhonePreview isMobile={isMobile} />
            </div>
          </Reveal>
        </div>
      </div>

      {/* Bottom gradient line */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: "20%",
          right: "20%",
          height: 1,
          background: "linear-gradient(90deg, transparent, rgba(73, 73, 242, 0.3), transparent)",
        }}
      />

      {/* Pulse animation */}
      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.1); }
        }
      `}</style>
    </section>
  );
}
