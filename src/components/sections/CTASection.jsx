import { useState } from "react";
import { Reveal } from "../common";
import { useResponsive } from "../../hooks";

const GOOGLE_SHEET_URL =
  "https://script.google.com/macros/s/AKfycbxD9ebiDPwWhr5CT_TbvBPrUTp8px188h3KQgJ49VWxAXtMxYGlTwHh1CmAF3cshtF03w/exec";

export function CTASection({ supporterCount, setSupporterCount }) {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const { isMobile, isDesktop } = useResponsive();

  const submitEmail = async () => {
    if (!email || submitting) return;
    setSubmitting(true);
    try {
      let country = "",
        city = "";
      try {
        const r = await fetch("https://ipinfo.io/json").then((d) => d.json());
        if (r.country) {
          country =
            new Intl.DisplayNames(["en"], { type: "region" }).of(r.country) ||
            r.country;
          city = r.city || "";
        }
      } catch {}

      await fetch(GOOGLE_SHEET_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          timestamp: new Date().toISOString(),
          country,
          city,
        }),
      });
    } catch {}
    setSubmitting(false);
    setDone(true);
    setSupporterCount((c) => c + 1);
  };

  return (
    <section
      id="section-cta"
      style={{
        padding: isMobile ? "80px 5%" : "120px 5%",
        background: "var(--black)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Grid pattern */}
      <svg
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          opacity: 0.1,
          pointerEvents: "none",
        }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="grid2" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M40 0 L0 0 0 40" fill="none" stroke="var(--primary)" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid2)" />
      </svg>

      {/* Gradient glow */}
      <div
        style={{
          position: "absolute",
          top: "0",
          left: "50%",
          transform: "translateX(-50%)",
          width: "80%",
          height: "60%",
          background: "radial-gradient(ellipse at center, rgba(73, 73, 242, 0.15) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: 1000,
          margin: "0 auto",
          position: "relative",
          zIndex: 2,
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: isDesktop ? "1fr 1fr" : "1fr",
            gap: isDesktop ? 64 : 40,
            alignItems: "center",
          }}
        >
          <Reveal>
            <div>
              <div
                style={{
                  display: "inline-block",
                  background: "var(--primary-glow)",
                  border: "1px solid rgba(73, 73, 242, 0.3)",
                  borderRadius: 100,
                  padding: "5px 14px",
                  fontSize: 11,
                  color: "var(--primary)",
                  fontWeight: 600,
                  letterSpacing: 2,
                  textTransform: "uppercase",
                  marginBottom: 22,
                }}
              >
                Become a Trusted Supporter
              </div>
              <h2
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: isMobile ? "1.65rem" : "clamp(2rem,3.4vw,2.8rem)",
                  fontWeight: 700,
                  letterSpacing: isMobile ? -0.5 : -1.5,
                  color: "var(--white)",
                  lineHeight: 1.15,
                  marginBottom: 18,
                }}
              >
                We're building this
                <br />
                for you.
                <br />
                <span style={{ color: "var(--primary)" }}>Be part of it.</span>
              </h2>
              <p
                style={{
                  color: "var(--gray-400)",
                  fontSize: isMobile ? 15 : 17,
                  lineHeight: 1.7,
                  marginBottom: 18,
                  maxWidth: 440,
                }}
              >
                Vaultly is in active development. Drop your email to become one of our trusted
                early supporters. You'll be the first to know when we're ready.
              </p>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  background: "var(--primary-glow)",
                  border: "1px solid rgba(73, 73, 242, 0.3)",
                  borderRadius: 100,
                  padding: "6px 16px 6px 7px",
                  marginBottom: 28,
                }}
              >
                <span
                  style={{
                    background: "var(--primary)",
                    color: "var(--white)",
                    padding: "2px 9px",
                    borderRadius: 100,
                    fontSize: 10,
                    fontWeight: 700,
                    letterSpacing: 0.5,
                  }}
                >
                  10% OFF
                </span>
                <span style={{ color: "var(--white)", fontSize: 12, fontWeight: 500 }}>
                  Early supporters lock in 10% off forever
                </span>
              </div>
              <div
                style={{
                  display: "flex",
                  gap: isMobile ? 24 : 36,
                  flexWrap: "wrap",
                }}
              >
                {[
                  [supporterCount.toLocaleString(), "trusted supporters"],
                  ["Early", "supporter perks"],
                  ["100%", "free to start"],
                ].map(([val, label]) => (
                  <div key={label} style={{ minWidth: 0 }}>
                    <div
                      style={{
                        fontFamily: "'Poppins', sans-serif",
                        fontSize: isMobile ? "1.3rem" : 28,
                        fontWeight: 800,
                        color: "var(--primary)",
                        lineHeight: 1,
                      }}
                    >
                      {val}
                    </div>
                    <div style={{ fontSize: 11, color: "var(--gray-500)", marginTop: 4 }}>
                      {label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div
              style={{
                background: "rgba(255, 255, 255, 0.03)",
                border: "1px solid rgba(73, 73, 242, 0.2)",
                borderRadius: 20,
                padding: isMobile ? "28px 22px" : "36px 32px",
                backdropFilter: "blur(10px)",
              }}
            >
              {!done ? (
                <>
                  <h3
                    style={{
                      fontFamily: "'Poppins', sans-serif",
                      fontSize: isMobile ? 18 : 22,
                      fontWeight: 700,
                      color: "var(--white)",
                      marginBottom: 6,
                    }}
                  >
                    Become a Trusted Supporter
                  </h3>
                  <p
                    style={{
                      color: "var(--gray-400)",
                      fontSize: 13,
                      lineHeight: 1.6,
                      marginBottom: 24,
                    }}
                  >
                    Enter your email below to join our circle of early supporters. No spam, ever.
                  </p>
                  <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                    <input
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Your email address"
                      type="email"
                      style={{
                        width: "100%",
                        background: "rgba(255, 255, 255, 0.05)",
                        border: "1px solid rgba(255, 255, 255, 0.1)",
                        color: "var(--white)",
                        padding: "14px 16px",
                        borderRadius: 12,
                        fontSize: 14,
                        outline: "none",
                        transition: "border-color 0.2s",
                        fontFamily: "'Inter', sans-serif",
                      }}
                      onFocus={(e) => (e.currentTarget.style.borderColor = "rgba(73, 73, 242, 0.5)")}
                      onBlur={(e) =>
                        (e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.1)")
                      }
                    />
                    <button
                      onClick={submitEmail}
                      style={{
                        width: "100%",
                        background: "linear-gradient(135deg, var(--primary) 0%, var(--primary-light) 100%)",
                        color: "var(--white)",
                        fontWeight: 700,
                        border: "none",
                        padding: "14px",
                        borderRadius: 12,
                        fontSize: 15,
                        cursor: "pointer",
                        transition: "opacity 0.2s, transform 0.2s",
                        fontFamily: "'Inter', sans-serif",
                        boxShadow: "0 8px 24px rgba(73, 73, 242, 0.3)",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.opacity = "0.9";
                        e.currentTarget.style.transform = "translateY(-1px)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.opacity = "1";
                        e.currentTarget.style.transform = "translateY(0)";
                      }}
                    >
                      {submitting ? "Saving..." : "Count Me In"}
                    </button>
                  </div>
                  <div
                    style={{
                      marginTop: 14,
                      color: "var(--gray-500)",
                      fontSize: 11,
                      display: "flex",
                      alignItems: "center",
                      gap: 6,
                    }}
                  >
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="var(--primary)"
                      strokeWidth="2"
                    >
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg>
                    We respect your privacy. Unsubscribe anytime.
                  </div>
                </>
              ) : (
                <div style={{ textAlign: "center", padding: "20px 0" }}>
                  <div
                    style={{
                      width: 56,
                      height: 56,
                      borderRadius: "50%",
                      background: "var(--primary-glow)",
                      border: "1px solid rgba(73, 73, 242, 0.3)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      margin: "0 auto 16px",
                      fontSize: 26,
                      color: "var(--primary)",
                    }}
                  >
                    ✦
                  </div>
                  <div
                    style={{
                      fontFamily: "'Poppins', sans-serif",
                      fontSize: 22,
                      fontWeight: 700,
                      color: "var(--primary)",
                      marginBottom: 8,
                    }}
                  >
                    You're one of us now!
                  </div>
                  <p
                    style={{
                      color: "var(--gray-400)",
                      fontSize: 14,
                      lineHeight: 1.6,
                      maxWidth: 320,
                      margin: "0 auto",
                    }}
                  >
                    Thank you for placing your trust in us. We're building Vaultly for people like
                    you — and we won't let you down.
                  </p>
                </div>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
