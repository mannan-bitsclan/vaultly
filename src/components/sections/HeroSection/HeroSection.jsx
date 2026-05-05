import { useState, useEffect } from "react";
import { CardVisual } from "../../common";
import { useResponsive } from "../../../hooks";
import "./HeroSection.css";

const GOOGLE_SHEET_URL =
  "https://script.google.com/macros/s/AKfycbxD9ebiDPwWhr5CT_TbvBPrUTp8px188h3KQgJ49VWxAXtMxYGlTwHh1CmAF3cshtF03w/exec";

// Floating testimonial card component
function FloatingCard({ className, children, delay = 0 }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), delay * 1000);
    return () => clearTimeout(timer);
  }, [delay]);

  const classes = [
    "hero-section__testimonial",
    mounted && "hero-section__testimonial--mounted",
    className,
  ].filter(Boolean).join(" ");

  return <div className={classes}>{children}</div>;
}

// Star rating component
function Stars({ count = 5, size = 14 }) {
  return (
    <div className="d-flex" style={{ gap: 2 }}>
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
  const { isMobile, isTablet, isLargeDesktop, isSmallDesktop, width } = useResponsive();

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
      } catch { }
      await fetch(GOOGLE_SHEET_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, timestamp: new Date().toISOString(), country, city }),
      });
    } catch { }
    setSubmitting(false);
    setDone(true);
    setSupporterCount((c) => c + 1);
  };

  // Section classes
  const sectionClasses = [
    "hero-section d-flex flex-column align-items-center justify-content-center",
    isMobile ? "hero-section--mobile" : isTablet ? "hero-section--tablet" : isSmallDesktop ? "hero-section--small-desktop" : "hero-section--large-desktop",
  ].join(" ");

  // Content classes
  const contentClasses = [
    "hero-section__content",
    isMobile ? "hero-section__content--mobile" : isTablet ? "hero-section__content--tablet" : isSmallDesktop ? "hero-section__content--small-desktop" : "hero-section__content--large-desktop",
  ].join(" ");

  // Badge classes
  const badgeClasses = [
    "hero-section__badge d-inline-flex align-items-center",
    mounted && "hero-section__badge--mounted",
    isMobile ? "hero-section__badge--mobile" : "hero-section__badge--desktop",
  ].filter(Boolean).join(" ");

  // Headline classes
  const headlineClasses = [
    "hero-section__headline",
    mounted && "hero-section__headline--mounted",
    isMobile ? "hero-section__headline--mobile" : isTablet ? "hero-section__headline--tablet" : isSmallDesktop ? "hero-section__headline--small-desktop" : "hero-section__headline--large-desktop",
  ].filter(Boolean).join(" ");

  // Subheadline classes
  const subheadlineClasses = [
    "hero-section__subheadline",
    mounted && "hero-section__subheadline--mounted",
    isMobile ? "hero-section__subheadline--mobile" : isTablet ? "hero-section__subheadline--tablet" : "hero-section__subheadline--desktop",
  ].filter(Boolean).join(" ");

  // Form classes
  const formClasses = [
    "hero-section__form d-flex justify-content-center align-items-center",
    mounted && "hero-section__form--mounted",
    isMobile ? "hero-section__form--mobile" : isTablet ? "hero-section__form--tablet" : "hero-section__form--desktop",
  ].filter(Boolean).join(" ");

  // Input classes
  const inputClasses = [
    "hero-section__input",
    isMobile ? "hero-section__input--mobile" : isTablet ? "hero-section__input--tablet" : "hero-section__input--desktop",
  ].join(" ");

  // Submit classes
  const submitClasses = [
    "hero-section__submit",
    isMobile ? "hero-section__submit--mobile" : isTablet ? "hero-section__submit--tablet" : "hero-section__submit--desktop",
  ].join(" ");

  // Trust classes
  const trustClasses = [
    "hero-section__trust d-flex align-items-center justify-content-center flex-wrap",
    mounted && "hero-section__trust--mounted",
    isMobile ? "hero-section__trust--mobile" : isTablet ? "hero-section__trust--tablet" : "hero-section__trust--desktop",
  ].filter(Boolean).join(" ");

  // Stats classes
  const statsClasses = [
    "hero-section__stats",
    mounted && "hero-section__stats--mounted",
    isMobile ? "hero-section__stats--mobile" : isTablet ? "hero-section__stats--tablet" : isSmallDesktop ? "hero-section__stats--small-desktop" : "hero-section__stats--large-desktop",
  ].filter(Boolean).join(" ");

  const stats = [
    { value: supporterCount.toLocaleString(), label: "Early Supporters", icon: "users", color: "#4949f2" },
    { value: "$4176", label: "Avg. Saved/Yearly", icon: "dollar", color: "#10b981" },
    { value: "200ms", label: "Block Speed", icon: "zap", color: "#f59e0b" },
    { value: "$4.2M+", label: "Total Saved", icon: "chart", color: "#8b5cf6" },
  ];

  const renderStatIcon = (icon, color) => {
    switch (icon) {
      case "users":
        return (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
          </svg>
        );
      case "dollar":
        return (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2">
            <line x1="12" y1="1" x2="12" y2="23" />
            <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
          </svg>
        );
      case "zap":
        return (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2">
            <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
          </svg>
        );
      case "chart":
        return (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2">
            <line x1="18" y1="20" x2="18" y2="10" />
            <line x1="12" y1="20" x2="12" y2="4" />
            <line x1="6" y1="20" x2="6" y2="14" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <section id="section-hero" className={sectionClasses}>
      {/* Background gradient orbs */}
      <div className={`hero-section__orb hero-section__orb--left${isMobile ? " hero-section__orb--left-mobile" : ""}`} />
      <div className={`hero-section__orb hero-section__orb--right${isMobile ? " hero-section__orb--right-mobile" : ""}`} />

      {/* Floating testimonial cards & Debit Cards - Large Desktop only (1280px+) */}
      {isLargeDesktop && (
        <>
          {/* Left side - Debit Card */}
          <div
            className={`hero-section__floating-card hero-section__floating-card--left-lg${mounted ? " hero-section__floating-card--mounted" : ""}`}
            style={{
              left: width >= 1440 ? "3%" : "1%",
              transform: `rotate(-8deg) scale(${width >= 1440 ? 1 : 0.85})`,
              transitionDelay: "0.8s",
            }}
          >
            <CardVisual type="shield" />
          </div>

          {/* Right side - Debit Card */}
          <div
            className={`hero-section__floating-card hero-section__floating-card--right-lg${mounted ? " hero-section__floating-card--mounted" : ""}`}
            style={{
              right: width >= 1440 ? "3%" : "1%",
              transform: `rotate(6deg) scale(${width >= 1440 ? 1 : 0.85})`,
              transitionDelay: "1s",
            }}
          >
            <CardVisual type="fortress" />
          </div>

          {/* Left side testimonial - Sarah M. */}
          <FloatingCard
            delay={1.2}
            className="hero-section__testimonial--left"
            style={{ left: width >= 1440 ? "6%" : "2%", transform: width >= 1440 ? "scale(1)" : "scale(0.9)" }}
          >
            <div className="d-flex align-items-center" style={{ gap: 12 }}>
              <div
                className="hero-section__testimonial-avatar d-flex align-items-center justify-content-center"
                style={{ background: "linear-gradient(135deg, #4949f2, #7c3aed)" }}
              >
                S
              </div>
              <div>
                <div className="hero-section__testimonial-name">Sarah M.</div>
                <Stars count={5} size={12} />
              </div>
            </div>
            <p className="hero-section__testimonial-text">"Saved $420 in my first month!"</p>
          </FloatingCard>

          {/* Right side testimonial - Marcus T. */}
          <FloatingCard
            delay={1.4}
            className="hero-section__testimonial--right"
            style={{ right: width >= 1440 ? "5%" : "2%", transform: width >= 1440 ? "scale(1)" : "scale(0.9)" }}
          >
            <div className="d-flex align-items-center" style={{ gap: 12 }}>
              <div
                className="hero-section__testimonial-avatar d-flex align-items-center justify-content-center"
                style={{ background: "linear-gradient(135deg, #10b981, #059669)" }}
              >
                M
              </div>
              <div>
                <div className="hero-section__testimonial-name">Marcus T.</div>
                <Stars count={5} size={12} />
              </div>
            </div>
            <p className="hero-section__testimonial-text">"Finally, full control over my cards!"</p>
          </FloatingCard>
        </>
      )}

      {/* Small Desktop (1024-1280px) - Show only one card on each side */}
      {isSmallDesktop && (
        <>
          <div
            className={`hero-section__floating-card hero-section__floating-card--left-sm${mounted ? " hero-section__floating-card--mounted" : ""}`}
            style={{ opacity: mounted ? 0.9 : 0, transitionDelay: "0.8s" }}
          >
            <CardVisual type="shield" />
          </div>
          <div
            className={`hero-section__floating-card hero-section__floating-card--right-sm${mounted ? " hero-section__floating-card--mounted" : ""}`}
            style={{ opacity: mounted ? 0.9 : 0, transitionDelay: "1s" }}
          >
            <CardVisual type="fortress" />
          </div>
        </>
      )}

      {/* Tablet - Single card only on larger tablets (768px+) */}
      {isTablet && !isMobile && width >= 768 && (
        <div
          className={`hero-section__floating-card hero-section__floating-card--tablet${mounted ? " hero-section__floating-card--mounted" : ""}`}
          style={{
            transform: `translateY(-50%) rotate(6deg) scale(${width >= 900 ? 0.7 : 0.55})`,
            opacity: mounted ? 0.7 : 0,
            transitionDelay: "1s",
          }}
        >
          <CardVisual type="fortress" />
        </div>
      )}

      {/* Main content - Centered */}
      <div className={contentClasses}>
        {/* Badge */}
        <div className={badgeClasses}>
          <span className={`hero-section__badge-dot${isMobile ? " hero-section__badge-dot--mobile" : " hero-section__badge-dot--desktop"}`} />
          <span className={`hero-section__badge-text${isMobile ? " hero-section__badge-text--mobile" : " hero-section__badge-text--desktop"}`}>
            Now Building · Early Access Open
          </span>
        </div>

        {/* Main Headline */}
        <h1 className={headlineClasses}>
          Stop <span className="highlighted-text">Losing</span>{" "}
          <span className="hero-section__headline-gradient">$8,400+ / yr</span>
          <br />
          to Ghost Charges
        </h1>

        {/* Subheadline */}
        <p className={subheadlineClasses}>
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
        <div className={formClasses}>
          <div style={{ flex: 1, width: isMobile ? "100%" : "auto", minWidth: isMobile ? "auto" : isTablet ? 240 : 280 }}>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your work email"
              type="email"
              className={inputClasses}
            />
          </div>
          <button
            onClick={submitEmail}
            disabled={submitting}
            className={submitClasses}
            style={{ cursor: submitting ? "wait" : "pointer" }}
          >
            {submitting ? "Joining..." : done ? "You're In!" : "Get Early Access →"}
          </button>
        </div>

        {done && (
          <div className="hero-section__success d-inline-flex align-items-center">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2.5">
              <polyline points="20 6 9 17 4 12" />
            </svg>
            <span className="hero-section__success-text">
              Welcome aboard! Check your inbox for next steps.
            </span>
          </div>
        )}

        {/* Trust badges */}
        <div className={trustClasses}>
          <div className={`hero-section__trust-item d-flex align-items-center${isMobile ? " hero-section__trust-item--mobile" : ""}`}>
            <svg width={isMobile ? 14 : 16} height={isMobile ? 14 : 16} viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
            <span className={`hero-section__trust-text${isMobile ? " hero-section__trust-text--mobile" : " hero-section__trust-text--desktop"}`}>Bank-grade Security</span>
          </div>
          {!isMobile && <div className="hero-section__trust-dot" />}
          <div className={`hero-section__trust-item d-flex align-items-center${isMobile ? " hero-section__trust-item--mobile" : ""}`}>
            <svg width={isMobile ? 14 : 16} height={isMobile ? 14 : 16} viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2">
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
            <span className={`hero-section__trust-text${isMobile ? " hero-section__trust-text--mobile" : " hero-section__trust-text--desktop"}`}>Setup in 2 mins</span>
          </div>
          {!isMobile && <div className="hero-section__trust-dot" />}
          <div className={`hero-section__trust-item d-flex align-items-center${isMobile ? " hero-section__trust-item--mobile" : ""}`}>
            <svg width={isMobile ? 14 : 16} height={isMobile ? 14 : 16} viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="2">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
            <span className={`hero-section__trust-text${isMobile ? " hero-section__trust-text--mobile" : " hero-section__trust-text--desktop"}`}>4.9/5 Rating</span>
          </div>
        </div>
      </div>

      {/* Mobile card display */}
      {isMobile && (
        <div className={`hero-section__mobile-card d-flex justify-content-center${mounted ? " hero-section__mobile-card--mounted" : ""}`}>
          <div style={{ animation: "cardFloat1 8s ease-in-out infinite" }}>
            <CardVisual type="fortress" small />
          </div>
        </div>
      )}

      {/* Stats cards row - Below main content */}
      <div className={statsClasses}>
        {stats.map((stat, i) => {
          const cardClasses = [
            "hero-section__stat-card d-flex align-items-center",
            isMobile ? "hero-section__stat-card--mobile" : isTablet ? "hero-section__stat-card--tablet" : isSmallDesktop ? "hero-section__stat-card--small-desktop" : "hero-section__stat-card--large-desktop",
          ].join(" ");

          const iconClasses = [
            "hero-section__stat-icon d-flex align-items-center justify-content-center",
            isSmallDesktop ? "hero-section__stat-icon--small" : "hero-section__stat-icon--large",
          ].join(" ");

          const valueClasses = [
            "hero-section__stat-value",
            isMobile ? "hero-section__stat-value--mobile" : isTablet ? "hero-section__stat-value--tablet" : isSmallDesktop ? "hero-section__stat-value--small-desktop" : "hero-section__stat-value--large-desktop",
          ].join(" ");

          const labelClasses = [
            "hero-section__stat-label",
            isSmallDesktop ? "hero-section__stat-label--small" : "hero-section__stat-label--large",
          ].join(" ");

          return (
            <div
              key={stat.label}
              className={cardClasses}
              style={{ "--stat-color": stat.color }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = `${stat.color}30`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--gray-200)";
              }}
            >
              <div className={iconClasses} style={{ background: `${stat.color}15` }}>
                {renderStatIcon(stat.icon, stat.color)}
              </div>
              <div>
                <div className={valueClasses}>
                  {stat.value.includes("$") || stat.value.includes("%") || stat.value.includes("ms") ? (
                    stat.value
                  ) : (
                    <AnimatedCounter value={stat.value} delay={1400 + i * 200} />
                  )}
                </div>
                <div className={labelClasses}>{stat.label}</div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Scroll indicator */}
      {isLargeDesktop && (
        <div className={`hero-section__scroll d-flex flex-column align-items-center${mounted ? " hero-section__scroll--mounted" : ""}`}>
          <span className="hero-section__scroll-text">Scroll to explore</span>
          <div className="hero-section__scroll-indicator d-flex justify-content-center">
            <div className="hero-section__scroll-dot" />
          </div>
        </div>
      )}
    </section>
  );
}
