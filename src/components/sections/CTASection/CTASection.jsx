import { useState } from "react";
import { Reveal } from "../../common";
import { useResponsive } from "../../../hooks";
import "./CTASection.css";

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

  const sectionClasses = [
    "cta-section",
    isMobile ? "cta-section--mobile" : "cta-section--desktop",
  ].join(" ");

  const layoutClasses = [
    "cta-section__layout",
    isDesktop ? "cta-section__layout--desktop" : "cta-section__layout--mobile",
  ].join(" ");

  const titleClasses = [
    "cta-section__title",
    isMobile && "cta-section__title--mobile",
  ].filter(Boolean).join(" ");

  const subtitleClasses = [
    "cta-section__subtitle",
    isMobile && "cta-section__subtitle--mobile",
  ].filter(Boolean).join(" ");

  const statsClasses = [
    "cta-section__stats d-flex flex-wrap",
    isMobile && "cta-section__stats--mobile",
  ].filter(Boolean).join(" ");

  const cardClasses = [
    "cta-section__card",
    isMobile ? "cta-section__card--mobile" : "cta-section__card--desktop",
  ].join(" ");

  const cardTitleClasses = [
    "cta-section__card-title",
    isMobile && "cta-section__card-title--mobile",
  ].filter(Boolean).join(" ");

  return (
    <section id="section-cta" className={sectionClasses}>
      {/* Grid pattern */}
      <svg className="cta-section__grid" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid2" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M40 0 L0 0 0 40" fill="none" stroke="var(--primary)" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid2)" />
      </svg>

      {/* Gradient glow */}
      <div className="cta-section__glow" />

      <div className="cta-section__container mx-auto">
        <div className={layoutClasses}>
          <Reveal>
            <div>
              <div className="cta-section__badge">Become a Trusted Supporter</div>
              <h2 className={titleClasses}>
                We're building this
                <br />
                for you.
                <br />
                <span className="text-primary">Be part of it.</span>
              </h2>
              <p className={subtitleClasses}>
                Vaultly is in active development. Drop your email to become one of our trusted
                early supporters. You'll be the first to know when we're ready.
              </p>
              <div className="cta-section__discount d-inline-flex align-items-center">
                <span className="cta-section__discount-tag">10% OFF</span>
                <span className="cta-section__discount-text">
                  Early supporters lock in 10% off forever
                </span>
              </div>
              <div className={statsClasses}>
                {[
                  [supporterCount.toLocaleString(), "trusted supporters"],
                  ["Early", "supporter perks"],
                  ["100%", "free to start"],
                ].map(([val, label]) => (
                  <div key={label}>
                    <div className={`cta-section__stat-value${isMobile ? " cta-section__stat-value--mobile" : ""}`}>
                      {val}
                    </div>
                    <div className="cta-section__stat-label">{label}</div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className={cardClasses}>
              {!done ? (
                <>
                  <h3 className={cardTitleClasses}>Become a Trusted Supporter</h3>
                  <p className="cta-section__card-subtitle">
                    Enter your email below to join our circle of early supporters. No spam, ever.
                  </p>
                  <div className="cta-section__form d-flex flex-column">
                    <input
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Your email address"
                      type="email"
                      className="cta-section__input"
                    />
                    <button onClick={submitEmail} className="cta-section__submit">
                      {submitting ? "Saving..." : "Count Me In"}
                    </button>
                  </div>
                  <div className="cta-section__privacy d-flex align-items-center">
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
                <div className="cta-section__success text-center">
                  <div className="cta-section__success-icon d-flex align-items-center justify-content-center">
                    ✦
                  </div>
                  <div className="cta-section__success-title">You're one of us now!</div>
                  <p className="cta-section__success-text">
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
