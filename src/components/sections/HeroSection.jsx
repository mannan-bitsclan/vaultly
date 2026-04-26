import { useState, useEffect } from "react";
import { CardVisual } from "../common";
import { useResponsive } from "../../hooks";

const GOOGLE_SHEET_URL =
  "https://script.google.com/macros/s/AKfycbxD9ebiDPwWhr5CT_TbvBPrUTp8px188h3KQgJ49VWxAXtMxYGlTwHh1CmAF3cshtF03w/exec";

// Floating testimonial card component
function FloatingCard({ style, children, delay = 0 }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), delay * 1000);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div
      style={{
        position: "absolute",
        background: "var(--white)",
        borderRadius: 16,
        padding: "14px 18px",
        boxShadow: "0 20px 40px rgba(0, 0, 0, 0.08), 0 0 0 1px rgba(0, 0, 0, 0.04)",
        opacity: mounted ? 1 : 0,
        transform: mounted ? "translateY(0) scale(1)" : "translateY(20px) scale(0.9)",
        transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
        ...style,
      }}
    >
      {children}
    </div>
  );
}

// Star rating component
function Stars({ count = 5, size = 14 }) {
  return (
    <div style={{ display: "flex", gap: 2 }}>
      {[...Array(count)].map((_, i) => (
        <svg key={i} width={size} height={size} viewBox="0 0 24 24" fill="#4949f2">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

// Animated counter component
function AnimatedCounter({ value, duration = 2000, delay = 0 }) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const visibilityTimer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(visibilityTimer);
  }, [delay]);

  useEffect(() => {
    if (!isVisible) return;
    const numericValue = parseInt(value.replace(/[^0-9]/g, ""), 10);
    const startTime = Date.now();

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easeOut * numericValue));
      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, [isVisible, value, duration]);

  const prefix = value.startsWith("$") ? "$" : "";
  const suffix = value.includes("+") ? "+" : "";

  return (
    <span style={{ opacity: isVisible ? 1 : 0, transition: "opacity 0.6s ease" }}>
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  );
}

export function HeroSection({ supporterCount, setSupporterCount }) {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { isMobile, isTablet, isDesktop } = useResponsive();

  useEffect(() => {
    setMounted(true);
  }, []);

  const submitEmail = async () => {
    if (!email || submitting) return;
    setSubmitting(true);
    try {
      let country = "", city = "";
      try {
        const r = await fetch("https://ipinfo.io/json").then((d) => d.json());
        if (r.country) {
          country = new Intl.DisplayNames(["en"], { type: "region" }).of(r.country) || r.country;
          city = r.city || "";
        }
      } catch {}
      await fetch(GOOGLE_SHEET_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, timestamp: new Date().toISOString(), country, city }),
      });
    } catch {}
    setSubmitting(false);
    setDone(true);
    setSupporterCount((c) => c + 1);
  };

  return (
    <section
      id="section-hero"
      style={{
        minHeight: "100svh",
        padding: isMobile ? "140px 5% 80px" : isTablet ? "160px 5% 100px" : "140px 5% 120px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        background: "linear-gradient(180deg, var(--gray-50) 0%, var(--white) 50%, var(--gray-50) 100%)",
      }}
    >
      {/* Background gradient orbs */}
      <div
        style={{
          position: "absolute",
          top: "10%",
          left: "20%",
          width: isMobile ? 300 : 500,
          height: isMobile ? 300 : 500,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(73, 73, 242, 0.08) 0%, transparent 60%)",
          filter: "blur(60px)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "20%",
          right: "15%",
          width: isMobile ? 250 : 450,
          height: isMobile ? 250 : 450,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(139, 92, 246, 0.06) 0%, transparent 60%)",
          filter: "blur(50px)",
          pointerEvents: "none",
        }}
      />

      {/* Floating testimonial cards & Debit Cards - Desktop only */}
      {isDesktop && (
        <>
          {/* Left side - Debit Card */}
          <div
            style={{
              position: "absolute",
              top: "32%",
              left: "3%",
              transform: "rotate(-8deg)",
              opacity: mounted ? 1 : 0,
              transition: "all 1s cubic-bezier(0.16, 1, 0.3, 1) 0.8s",
              animation: mounted ? "cardFloat1 8s ease-in-out infinite" : "none",
              zIndex: 1,
            }}
          >
            <CardVisual type="shield" />
          </div>

          {/* Right side - Debit Cards stacked */}
          <div
            style={{
              position: "absolute",
              top: "15%",
              right: "2%",
              transform: "rotate(6deg)",
              opacity: mounted ? 1 : 0,
              transition: "all 1s cubic-bezier(0.16, 1, 0.3, 1) 1s",
              animation: mounted ? "cardFloat2 9s ease-in-out infinite 0.5s" : "none",
              zIndex: 1,
            }}
          >
            <CardVisual type="fortress" />
          </div>

          <div
            style={{
              position: "absolute",
              top: "52%",
              right: "8%",
              transform: "rotate(-4deg)",
              opacity: mounted ? 1 : 0,
              transition: "all 1s cubic-bezier(0.16, 1, 0.3, 1) 1.2s",
              animation: mounted ? "cardFloat3 7s ease-in-out infinite 1s" : "none",
              zIndex: 0,
            }}
          >
            <CardVisual type="kill" />
          </div>

          {/* Left side testimonial cards */}
          <FloatingCard
            delay={1.2}
            style={{
              top: "12%",
              left: "6%",
              animation: "float 6s ease-in-out infinite",
              zIndex: 3,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <div
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 12,
                  background: "linear-gradient(135deg, #4949f2, #7c3aed)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white",
                  fontWeight: 700,
                  fontSize: 16,
                }}
              >
                S
              </div>
              <div>
                <div style={{ fontWeight: 600, fontSize: 14, color: "var(--gray-900)", marginBottom: 2 }}>
                  Sarah M.
                </div>
                <Stars count={5} size={12} />
              </div>
            </div>
            <p style={{ fontSize: 13, color: "var(--gray-600)", marginTop: 10, maxWidth: 180, lineHeight: 1.5 }}>
              "Saved $420 in my first month!"
            </p>
          </FloatingCard>

          <FloatingCard
            delay={1.5}
            style={{
              bottom: "18%",
              left: "4%",
              animation: "float 7s ease-in-out infinite 1s",
              zIndex: 3,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <div
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: 10,
                  background: "linear-gradient(135deg, #10b981, #06b6d4)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <div>
                <div style={{ fontWeight: 700, fontSize: 18, color: "var(--gray-900)" }}>12</div>
                <div style={{ fontSize: 11, color: "var(--gray-500)" }}>Charges Blocked</div>
              </div>
            </div>
          </FloatingCard>

          <FloatingCard
            delay={1.8}
            style={{
              bottom: "12%",
              right: "5%",
              animation: "float 6s ease-in-out infinite 2s",
              zIndex: 3,
            }}
          >
            <div style={{ textAlign: "center" }}>
              <div style={{ fontWeight: 800, fontSize: 24, color: "var(--primary)", fontFamily: "'Poppins', sans-serif" }}>
                $4.2M+
              </div>
              <div style={{ fontSize: 12, color: "var(--gray-500)", marginTop: 2 }}>Total Saved</div>
            </div>
          </FloatingCard>

          <FloatingCard
            delay={1.4}
            style={{
              bottom: "28%",
              left: "10%",
              animation: "float 7s ease-in-out infinite 0.8s",
              zIndex: 3,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <Stars count={5} size={16} />
              <span style={{ fontWeight: 700, fontSize: 15, color: "var(--gray-900)" }}>4.9</span>
            </div>
            <div style={{ fontSize: 12, color: "var(--gray-500)", marginTop: 4 }}>2,400+ reviews</div>
          </FloatingCard>
        </>
      )}

      {/* Tablet - Single card */}
      {isTablet && !isMobile && (
        <div
          style={{
            position: "absolute",
            top: "50%",
            right: "2%",
            transform: "translateY(-50%) rotate(6deg)",
            opacity: mounted ? 0.9 : 0,
            transition: "all 1s ease 1s",
            animation: mounted ? "cardFloat1 8s ease-in-out infinite" : "none",
          }}
        >
          <CardVisual type="fortress" />
        </div>
      )}

      {/* Main content - Centered */}
      <div
        style={{
          textAlign: "center",
          maxWidth: 900,
          margin: "0 auto",
          position: "relative",
          zIndex: 2,
        }}
      >
        {/* Badge */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 10,
            background: "var(--white)",
            border: "1px solid var(--gray-200)",
            borderRadius: 100,
            padding: "10px 20px",
            marginBottom: 28,
            boxShadow: "0 4px 20px rgba(0, 0, 0, 0.04)",
            opacity: mounted ? 1 : 0,
            transform: mounted ? "translateY(0)" : "translateY(20px)",
            transition: "all 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.2s",
          }}
        >
          <span
            style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              background: "#10b981",
              animation: "pulse 2s ease-in-out infinite",
            }}
          />
          <span style={{ fontSize: isMobile ? 13 : 14, fontWeight: 600, color: "var(--gray-700)" }}>
            Now Building · Early Access Open
          </span>
        </div>

        {/* Main Headline */}
        <h1
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontSize: isMobile ? "2.5rem" : isTablet ? "3.5rem" : "clamp(3.8rem, 6vw, 5rem)",
            fontWeight: 800,
            lineHeight: 1.1,
            letterSpacing: isMobile ? -1 : -2.5,
            color: "var(--gray-900)",
            marginBottom: 24,
            opacity: mounted ? 1 : 0,
            transform: mounted ? "translateY(0)" : "translateY(30px)",
            transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.4s",
          }}
        >
          Stop Losing{" "}
          <span
            style={{
              background: "linear-gradient(135deg, var(--primary) 0%, #8b5cf6 50%, var(--primary) 100%)",
              backgroundSize: "200% auto",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              animation: "gradientShift 4s ease infinite",
            }}
          >
            $8,400+
          </span>
          <br />
          to Ghost Charges
        </h1>

        {/* Subheadline */}
        <p
          style={{
            fontSize: isMobile ? 17 : 20,
            lineHeight: 1.7,
            color: "var(--gray-600)",
            maxWidth: 650,
            margin: "0 auto 40px",
            opacity: mounted ? 1 : 0,
            transform: mounted ? "translateY(0)" : "translateY(30px)",
            transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.6s",
          }}
        >
          Programmable smart cards that{" "}
          <strong style={{ color: "var(--gray-900)", fontWeight: 700 }}>
            block unauthorized charges in 200ms
          </strong>{" "}
          and recover{" "}
          <strong style={{ color: "var(--primary)", fontWeight: 700 }}>
            92% of wasted spend
          </strong>{" "}
          automatically.
        </p>

        {/* Email Form - Centered */}
        <div
          style={{
            display: "flex",
            gap: 12,
            flexDirection: isMobile ? "column" : "row",
            justifyContent: "center",
            alignItems: "center",
            maxWidth: 560,
            margin: "0 auto 32px",
            opacity: mounted ? 1 : 0,
            transform: mounted ? "translateY(0)" : "translateY(30px)",
            transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.8s",
          }}
        >
          <div style={{ flex: 1, width: isMobile ? "100%" : "auto", minWidth: isMobile ? "auto" : 300 }}>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your work email"
              type="email"
              style={{
                width: "100%",
                background: "var(--white)",
                border: "2px solid var(--gray-200)",
                color: "var(--gray-900)",
                padding: "18px 24px",
                borderRadius: 14,
                fontSize: 16,
                outline: "none",
                transition: "all 0.3s ease",
                fontFamily: "'Inter', sans-serif",
                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.04)",
              }}
              onFocus={(e) => {
                e.currentTarget.style.borderColor = "var(--primary)";
                e.currentTarget.style.boxShadow = "0 4px 24px rgba(73, 73, 242, 0.15)";
              }}
              onBlur={(e) => {
                e.currentTarget.style.borderColor = "var(--gray-200)";
                e.currentTarget.style.boxShadow = "0 4px 20px rgba(0, 0, 0, 0.04)";
              }}
            />
          </div>
          <button
            onClick={submitEmail}
            disabled={submitting}
            style={{
              background: "linear-gradient(135deg, var(--primary) 0%, #6366f1 100%)",
              color: "var(--white)",
              padding: "18px 36px",
              borderRadius: 14,
              fontSize: 16,
              fontWeight: 700,
              border: "none",
              cursor: submitting ? "wait" : "pointer",
              transition: "all 0.3s ease",
              whiteSpace: "nowrap",
              fontFamily: "'Inter', sans-serif",
              boxShadow: "0 8px 30px rgba(73, 73, 242, 0.35)",
              width: isMobile ? "100%" : "auto",
            }}
            onMouseEnter={(e) => {
              if (!submitting) {
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow = "0 12px 40px rgba(73, 73, 242, 0.45)";
              }
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 8px 30px rgba(73, 73, 242, 0.35)";
            }}
          >
            {submitting ? "Joining..." : done ? "You're In!" : "Get Early Access →"}
          </button>
        </div>

        {done && (
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              background: "rgba(16, 185, 129, 0.1)",
              border: "1px solid rgba(16, 185, 129, 0.3)",
              borderRadius: 12,
              padding: "14px 24px",
              marginBottom: 24,
              animation: "bounceIn 0.6s ease",
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2.5">
              <polyline points="20 6 9 17 4 12" />
            </svg>
            <span style={{ color: "#10b981", fontWeight: 600, fontSize: 14 }}>
              Welcome aboard! Check your inbox for next steps.
            </span>
          </div>
        )}

        {/* Trust badges */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: isMobile ? 12 : 20,
            flexWrap: "wrap",
            opacity: mounted ? 1 : 0,
            transform: mounted ? "translateY(0)" : "translateY(20px)",
            transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 1s",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
            <span style={{ fontSize: 13, color: "var(--gray-600)", fontWeight: 500 }}>Bank-grade Security</span>
          </div>
          <div style={{ width: 4, height: 4, borderRadius: "50%", background: "var(--gray-300)" }} />
          <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2">
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
            <span style={{ fontSize: 13, color: "var(--gray-600)", fontWeight: 500 }}>Setup in 2 mins</span>
          </div>
          <div style={{ width: 4, height: 4, borderRadius: "50%", background: "var(--gray-300)" }} />
          <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="2">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
            <span style={{ fontSize: 13, color: "var(--gray-600)", fontWeight: 500 }}>4.9/5 Rating</span>
          </div>
        </div>
      </div>

      {/* Mobile card display */}
      {isMobile && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: 48,
            position: "relative",
            zIndex: 2,
            opacity: mounted ? 1 : 0,
            transform: mounted ? "scale(1)" : "scale(0.9)",
            transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 1s",
          }}
        >
          <div style={{ animation: "cardFloat1 8s ease-in-out infinite" }}>
            <CardVisual type="fortress" small />
          </div>
        </div>
      )}

      {/* Stats cards row - Below main content */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : isTablet ? "repeat(3, 1fr)" : "repeat(4, 1fr)",
          gap: isMobile ? 16 : 20,
          maxWidth: 900,
          width: "100%",
          margin: isMobile ? "32px auto 0" : "72px auto 0",
          position: "relative",
          zIndex: 2,
          opacity: mounted ? 1 : 0,
          transform: mounted ? "translateY(0)" : "translateY(40px)",
          transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 1.2s",
        }}
      >
        {[
          { value: supporterCount.toLocaleString(), label: "Early Supporters", icon: "users", color: "#4949f2" },
          { value: "$348", label: "Avg. Saved/Month", icon: "dollar", color: "#10b981" },
          { value: "200ms", label: "Block Speed", icon: "zap", color: "#f59e0b" },
          ...(isMobile ? [] : [{ value: "92%", label: "Recovery Rate", icon: "chart", color: "#8b5cf6" }]),
        ].map((stat, i) => (
          <div
            key={stat.label}
            style={{
              background: "var(--white)",
              borderRadius: 20,
              padding: isMobile ? "20px 24px" : "24px 28px",
              border: "1px solid var(--gray-200)",
              boxShadow: "0 4px 24px rgba(0, 0, 0, 0.04)",
              display: "flex",
              alignItems: "center",
              gap: 16,
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-4px)";
              e.currentTarget.style.boxShadow = "0 12px 32px rgba(0, 0, 0, 0.08)";
              e.currentTarget.style.borderColor = `${stat.color}30`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 4px 24px rgba(0, 0, 0, 0.04)";
              e.currentTarget.style.borderColor = "var(--gray-200)";
            }}
          >
            <div
              style={{
                width: 48,
                height: 48,
                borderRadius: 14,
                background: `${stat.color}15`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              {stat.icon === "users" && (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={stat.color} strokeWidth="2">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              )}
              {stat.icon === "dollar" && (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={stat.color} strokeWidth="2">
                  <line x1="12" y1="1" x2="12" y2="23" />
                  <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                </svg>
              )}
              {stat.icon === "zap" && (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={stat.color} strokeWidth="2">
                  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                </svg>
              )}
              {stat.icon === "chart" && (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={stat.color} strokeWidth="2">
                  <line x1="18" y1="20" x2="18" y2="10" />
                  <line x1="12" y1="20" x2="12" y2="4" />
                  <line x1="6" y1="20" x2="6" y2="14" />
                </svg>
              )}
            </div>
            <div>
              <div
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: isMobile ? "1.5rem" : "1.75rem",
                  fontWeight: 700,
                  color: "var(--gray-900)",
                  lineHeight: 1,
                }}
              >
                {stat.value.includes("$") || stat.value.includes("%") || stat.value.includes("ms") ? (
                  stat.value
                ) : (
                  <AnimatedCounter value={stat.value} delay={1400 + i * 200} />
                )}
              </div>
              <div style={{ fontSize: 13, color: "var(--gray-500)", marginTop: 4, fontWeight: 500 }}>
                {stat.label}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Scroll indicator */}
      {isDesktop && (
        <div
          style={{
            position: "absolute",
            bottom: 40,
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 8,
            opacity: mounted ? 0.6 : 0,
            transition: "opacity 1s ease 2s",
          }}
        >
          <span style={{ fontSize: 12, color: "var(--gray-500)", fontWeight: 500 }}>Scroll to explore</span>
          <div
            style={{
              width: 24,
              height: 40,
              borderRadius: 12,
              border: "2px solid var(--gray-300)",
              display: "flex",
              justifyContent: "center",
              paddingTop: 8,
            }}
          >
            <div
              style={{
                width: 4,
                height: 8,
                borderRadius: 2,
                background: "var(--primary)",
                animation: "scrollBounce 2s ease-in-out infinite",
              }}
            />
          </div>
        </div>
      )}

      {/* Animations */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-12px); }
        }
        @keyframes cardFloat1 {
          0%, 100% { transform: translateY(0) rotate(-8deg); }
          50% { transform: translateY(-15px) rotate(-6deg); }
        }
        @keyframes cardFloat2 {
          0%, 100% { transform: translateY(0) rotate(6deg); }
          50% { transform: translateY(-12px) rotate(8deg); }
        }
        @keyframes cardFloat3 {
          0%, 100% { transform: translateY(0) rotate(-4deg); }
          50% { transform: translateY(-10px) rotate(-2deg); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.1); }
        }
        @keyframes gradientShift {
          0% { background-position: 0% center; }
          50% { background-position: 100% center; }
          100% { background-position: 0% center; }
        }
        @keyframes scrollBounce {
          0%, 100% { transform: translateY(0); opacity: 1; }
          50% { transform: translateY(8px); opacity: 0.5; }
        }
        @keyframes bounceIn {
          0% { transform: scale(0.9); opacity: 0; }
          50% { transform: scale(1.02); }
          100% { transform: scale(1); opacity: 1; }
        }
      `}</style>
    </section>
  );
}
