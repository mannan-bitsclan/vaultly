import { Reveal } from "../../common";
import { useResponsive } from "../../../hooks";
import "./SetupCompleteCTA.css";

function PhonePreview({ isMobile }) {
  const previewClasses = [
    "phone-preview",
    isMobile ? "phone-preview--mobile" : "phone-preview--desktop",
  ].join(" ");

  return (
    <div className={previewClasses}>
      {/* Glow behind phone */}
      <div className="phone-preview__glow" />

      {/* Phone frame */}
      <div className="phone-preview__frame">
        <div className="phone-preview__screen">
          {/* Dynamic Island */}
          <div className="phone-preview__island d-flex justify-content-center">
            <div className="phone-preview__island-inner d-flex align-items-center justify-content-center">
              <div className="phone-preview__island-dot" />
            </div>
          </div>

          {/* Status bar */}
          <div className="phone-preview__statusbar d-flex justify-content-between align-items-center">
            <span className="phone-preview__time">9:41</span>
            <div className="d-flex align-items-center" style={{ gap: 6 }}>
              <div className="d-flex align-items-end" style={{ gap: 2 }}>
                {[5, 7, 9, 11].map((h, k) => (
                  <div
                    key={k}
                    className="phone-preview__signal-bar"
                    style={{ width: 3, height: h }}
                  />
                ))}
              </div>
              <div className="phone-preview__battery">
                <div className="phone-preview__battery-fill" />
              </div>
            </div>
          </div>

          {/* App content */}
          <div className="phone-preview__content">
            {/* Success header */}
            <div className="text-center" style={{ marginBottom: 24 }}>
              <div className="phone-preview__success-icon d-flex align-items-center justify-content-center">
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
              <p className="phone-preview__success-eyebrow">All Protected</p>
              <p className="phone-preview__success-title">$4,200+ Saved</p>
            </div>

            {/* Stats cards */}
            <div className="phone-preview__stats d-flex flex-column">
              {[
                { label: "Active Cards", value: "4", icon: "💳", color: "#4949f2" },
                { label: "Blocked Charges", value: "12", icon: "🛡️", color: "#ef4444" },
                { label: "Monthly Savings", value: "$350", icon: "💰", color: "#a78bfa" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="phone-preview__stat-card d-flex align-items-center justify-content-between"
                >
                  <div className="d-flex align-items-center" style={{ gap: 12 }}>
                    <div
                      className="phone-preview__stat-icon d-flex align-items-center justify-content-center"
                      style={{ background: `${item.color}15` }}
                    >
                      {item.icon}
                    </div>
                    <span className="phone-preview__stat-label">{item.label}</span>
                  </div>
                  <span
                    className="phone-preview__stat-value"
                    style={{
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
            <div className="phone-preview__cta-btn text-center">
              <span className="phone-preview__cta-text">View Full Dashboard →</span>
            </div>
          </div>

          {/* Home indicator */}
          <div className="phone-preview__home-indicator d-flex justify-content-center">
            <div className="phone-preview__home-bar" />
          </div>
        </div>
      </div>

      {/* Floating elements */}
      <div className="phone-preview__float phone-preview__float--fortress">
        <div className="phone-preview__float-content d-flex align-items-center">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
            <polyline points="22 4 12 14.01 9 11.01" />
          </svg>
          <span className="phone-preview__float-text">Fortress Active</span>
        </div>
      </div>

      <div className="phone-preview__float phone-preview__float--blocked">
        <div className="phone-preview__float-content d-flex align-items-center">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2">
            <circle cx="12" cy="12" r="10" />
            <line x1="15" y1="9" x2="9" y2="15" />
            <line x1="9" y1="9" x2="15" y2="15" />
          </svg>
          <span className="phone-preview__float-text">$99 Blocked</span>
        </div>
      </div>

      <div className="phone-preview__float phone-preview__float--saved">
        <div className="phone-preview__float-content d-flex align-items-center">
          <span style={{ fontSize: 16 }}>💰</span>
          <span className="phone-preview__float-text">+$350 Saved</span>
        </div>
      </div>
    </div>
  );
}

export function SetupCompleteCTA() {
  const { isMobile, isTablet } = useResponsive();

  const sectionClasses = [
    "setup-cta",
    isMobile ? "setup-cta--mobile" : isTablet ? "setup-cta--tablet" : "setup-cta--desktop",
  ].join(" ");

  const layoutClasses = [
    "setup-cta__layout",
    isMobile ? "setup-cta__layout--mobile" : isTablet ? "setup-cta__layout--tablet" : "setup-cta__layout--desktop",
  ].join(" ");

  const contentClasses = [
    "setup-cta__content",
    isMobile || isTablet ? "setup-cta__content--mobile" : "setup-cta__content--desktop",
  ].join(" ");

  const eyebrowClasses = [
    "setup-cta__eyebrow",
    isMobile && "setup-cta__eyebrow--mobile",
  ].filter(Boolean).join(" ");

  const titleClasses = [
    "setup-cta__title",
    isMobile ? "setup-cta__title--mobile" : isTablet ? "setup-cta__title--tablet" : "",
  ].filter(Boolean).join(" ");

  const subtitleClasses = [
    "setup-cta__subtitle",
    isMobile && "setup-cta__subtitle--mobile",
  ].filter(Boolean).join(" ");

  const statsClasses = [
    "setup-cta__stats d-flex flex-wrap",
    isMobile && "setup-cta__stats--mobile",
  ].filter(Boolean).join(" ");

  const buttonsClasses = [
    "setup-cta__buttons d-flex",
    isMobile && "setup-cta__buttons--mobile",
  ].filter(Boolean).join(" ");

  const phoneWrapperClasses = [
    "setup-cta__phone-wrapper",
    !isMobile && !isTablet && "setup-cta__phone-wrapper--desktop",
  ].filter(Boolean).join(" ");

  const stats = [
    { value: "$4,200+", label: "Saved Yearly", color: "#4949f2" },
    { value: "92%", label: "Recovered", color: "#a78bfa" },
    { value: "<200ms", label: "Block Speed", color: "#6366f1" },
  ];

  return (
    <section className={sectionClasses}>
      {/* Background decorations */}
      <div className="setup-cta__bg-glow-left" />
      <div className="setup-cta__bg-glow-right" />

      {/* Glowing grid pattern */}
      <svg className="setup-cta__grid" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="setupGridDark" width="60" height="60" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="1" fill="#4949f2" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#setupGridDark)" />
      </svg>

      {/* Top gradient line */}
      <div className="setup-cta__line-top" />

      <div className="setup-cta__container mx-auto">
        <div className={layoutClasses}>
          {/* Left content */}
          <Reveal>
            <div className={contentClasses}>
              <h2 className={eyebrowClasses}>Setup Complete</h2>

              {/* Heading */}
              <h3 className={titleClasses}>
                Start Saving <br />
                <span className="text-primary">$8400 / year </span> <br/>
                In Just 4 Steps
              </h3>

              {/* Description */}
              <p className={subtitleClasses}>
                Every subscription monitored. Every unauthorized charge blocked.
                Every dollar accounted for — automatically. Join thousands already saving.
              </p>

              {/* Stats row */}
              <div className={statsClasses}>
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className={`setup-cta__stat${isMobile ? " setup-cta__stat--mobile" : ""}`}
                    style={{ "--stat-color": stat.color }}
                  >
                    <div
                      className={`setup-cta__stat-value${isMobile ? " setup-cta__stat-value--mobile" : ""}`}
                      style={{
                        color: stat.color,
                        textShadow: `0 0 30px ${stat.color}50`,
                      }}
                    >
                      {stat.value}
                    </div>
                    <div className="setup-cta__stat-label">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* CTA buttons */}
              <div className={buttonsClasses}>
                <button className={`setup-cta__btn-primary d-inline-flex align-items-center justify-content-center${isMobile ? " setup-cta__btn-primary--mobile" : ""}`}>
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

                <button className={`setup-cta__btn-secondary d-inline-flex align-items-center justify-content-center${isMobile ? " setup-cta__btn-secondary--mobile" : ""}`}>
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
              <div className="setup-cta__trust d-flex align-items-center">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="var(--primary)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
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
            <div className={phoneWrapperClasses}>
              <PhonePreview isMobile={isMobile} />
            </div>
          </Reveal>
        </div>
      </div>

      {/* Bottom gradient line */}
      <div className="setup-cta__line-bottom" />
    </section>
  );
}
