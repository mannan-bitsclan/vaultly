import { useState, useEffect } from "react";
import { Reveal } from "../../common";
import { TESTIMONIALS } from "../../../data";
import { useResponsive } from "../../../hooks";
import "./TestimonialsSection.css";

const AVATAR_COLORS = [
  "linear-gradient(135deg, #4949f2 0%, #7c3aed 100%)",
  "linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)",
  "linear-gradient(135deg, #8b5cf6 0%, #d946ef 100%)",
  "linear-gradient(135deg, #f59e0b 0%, #ef4444 100%)",
  "linear-gradient(135deg, #10b981 0%, #06b6d4 100%)",
];

const TIME_AGO = ["2 weeks ago", "1 month ago", "3 weeks ago", "5 days ago", "2 months ago"];

function StarRating({ rating = 5 }) {
  return (
    <div className="d-flex" style={{ gap: 3 }}>
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill={i < rating ? "#4949f2" : "#e5e7eb"}
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

function TestimonialCard({ testimonial, index, isMobile }) {
  const cardClasses = [
    "testimonials-section__card d-flex flex-column",
    isMobile ? "testimonials-section__card--mobile" : "testimonials-section__card--desktop",
  ].join(" ");

  return (
    <div className={cardClasses}>
      {/* Top accent line */}
      <div className="testimonials-section__card-accent" />

      {/* Header with avatar and info */}
      <div className="testimonials-section__card-header d-flex align-items-center">
        {/* Avatar */}
        <div
          className="testimonials-section__card-avatar d-flex align-items-center justify-content-center"
          style={{ background: AVATAR_COLORS[index % AVATAR_COLORS.length] }}
        >
          {testimonial.name.charAt(0)}
        </div>

        {/* Name and role */}
        <div className="testimonials-section__card-info">
          <div className="testimonials-section__card-name-row d-flex align-items-center">
            <span className="testimonials-section__card-name">{testimonial.name}</span>
            {/* Verified badge */}
            <div className="testimonials-section__card-verified d-flex align-items-center justify-content-center">
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
          </div>
          <div className="testimonials-section__card-role">{testimonial.role}</div>
        </div>

        {/* Rating */}
        <div className="testimonials-section__card-stars">
          <StarRating rating={5} />
        </div>
      </div>

      {/* Quote */}
      <div className="testimonials-section__card-quote-wrapper">
        <svg className="testimonials-section__card-quote-icon" width="40" height="40" viewBox="0 0 24 24" fill="var(--primary)">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
        <p className="testimonials-section__card-quote">{testimonial.text}</p>
      </div>

      {/* Footer */}
      <div className="testimonials-section__card-footer d-flex align-items-center justify-content-between">
        <span className="testimonials-section__card-time">{TIME_AGO[index % 5]}</span>
        <div className="testimonials-section__card-helpful d-flex align-items-center">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" />
          </svg>
          Helpful
        </div>
      </div>
    </div>
  );
}

function MainTestimonialCard({ testimonial, isMobile, isTablet }) {
  const getAvatarColor = (name) => {
    const index = name.charCodeAt(0) % AVATAR_COLORS.length;
    return AVATAR_COLORS[index];
  };

  const cardClasses = [
    "testimonials-section__main-card d-flex flex-column justify-content-center",
    isMobile ? "testimonials-section__main-card--mobile" : isTablet ? "testimonials-section__main-card--tablet" : "testimonials-section__main-card--desktop",
  ].join(" ");

  const quoteClasses = [
    "testimonials-section__main-card-quote",
    isMobile ? "testimonials-section__main-card-quote--mobile" : isTablet ? "testimonials-section__main-card-quote--tablet" : "testimonials-section__main-card-quote--desktop",
  ].join(" ");

  return (
    <div className={cardClasses}>
      {/* Background pattern */}
      <div className="testimonials-section__main-card-bg" />

      {/* Decorative shapes */}
      <div className="testimonials-section__main-card-circle testimonials-section__main-card-circle--top" />
      <div className="testimonials-section__main-card-circle testimonials-section__main-card-circle--bottom" />

      <div className="testimonials-section__main-card-content">
        {/* Quote icon */}
        <div className="testimonials-section__main-card-icon d-flex align-items-center justify-content-center">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
        </div>

        {/* Quote text */}
        <p className={quoteClasses}>"{testimonial.text}"</p>

        {/* Author info */}
        <div className="testimonials-section__main-card-author d-flex align-items-center">
          <div
            className="testimonials-section__main-card-avatar d-flex align-items-center justify-content-center"
            style={{ background: getAvatarColor(testimonial.name) }}
          >
            {testimonial.name.charAt(0)}
          </div>
          <div>
            <div className="d-flex align-items-center" style={{ gap: 10, marginBottom: 4 }}>
              <span className="testimonials-section__main-card-name">{testimonial.name}</span>
              <div className="testimonials-section__main-card-verified d-flex align-items-center">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span className="testimonials-section__main-card-verified-text">Verified</span>
              </div>
            </div>
            <span className="testimonials-section__main-card-role">{testimonial.role}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function SideSliderCard({ testimonial, index }) {
  return (
    <div className="testimonials-section__side-card d-flex flex-column justify-content-center">
      {/* Background decorative number */}
      <div className="testimonials-section__side-card-bg-number">
        {String(index + 1).padStart(2, "0")}
      </div>

      <div className="testimonials-section__side-card-content">
        {/* Quote icon */}
        <div className="testimonials-section__side-card-icon d-flex align-items-center justify-content-center">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="#4949f2">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
        </div>

        {/* Quote text */}
        <p className="testimonials-section__side-card-quote">"{testimonial.text}"</p>

        {/* Author info */}
        <div className="testimonials-section__side-card-author d-flex align-items-center">
          <div
            className="testimonials-section__side-card-avatar d-flex align-items-center justify-content-center"
            style={{ background: AVATAR_COLORS[index % AVATAR_COLORS.length] }}
          >
            {testimonial.name.charAt(0)}
          </div>
          <div>
            <div className="d-flex align-items-center" style={{ gap: 8, marginBottom: 2 }}>
              <span className="testimonials-section__side-card-name">{testimonial.name}</span>
              <div className="testimonials-section__side-card-verified d-flex align-items-center justify-content-center">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
            </div>
            <span className="testimonials-section__side-card-role">{testimonial.role}</span>
          </div>
        </div>

        {/* Star rating */}
        <div className="testimonials-section__side-card-stars d-flex">
          {[...Array(5)].map((_, i) => (
            <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#4949f2">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
          ))}
        </div>
      </div>
    </div>
  );
}

function StatIcon({ icon }) {
  const icons = {
    users: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4949f2" strokeWidth="2">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    dollar: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4949f2" strokeWidth="2">
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
    check: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4949f2" strokeWidth="2">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
    support: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4949f2" strokeWidth="2">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
  };
  return icons[icon] || null;
}

const STATS = [
  { value: "2,400+", label: "Happy Users", icon: "users" },
  { value: "$4.2M", label: "Total Saved", icon: "dollar" },
  { value: "99.9%", label: "Uptime", icon: "check" },
  { value: "24/7", label: "Support", icon: "support" },
];

export function TestimonialsSection() {
  const { isMobile, isTablet } = useResponsive();
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const sideIndex = (activeIndex + 1) % TESTIMONIALS.length;

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const sectionClasses = [
    "testimonials-section position-relative overflow-hidden",
    isMobile ? "testimonials-section--mobile" : isTablet ? "testimonials-section--tablet" : "testimonials-section--desktop",
  ].join(" ");

  const headerClasses = [
    "testimonials-section__header",
    isMobile ? "testimonials-section__header--mobile" : "",
    isMobile ? "flex-column align-items-start" : "flex-row align-items-end justify-content-between",
    "d-flex",
  ].filter(Boolean).join(" ");

  const titleClasses = [
    "testimonials-section__title",
    isMobile ? "testimonials-section__title--mobile" : isTablet ? "testimonials-section__title--tablet" : "",
  ].filter(Boolean).join(" ");

  const subtitleClasses = [
    "testimonials-section__subtitle",
    isMobile && "testimonials-section__subtitle--mobile",
  ].filter(Boolean).join(" ");

  const sliderClasses = [
    "testimonials-section__slider",
    isMobile && "testimonials-section__slider--mobile",
  ].filter(Boolean).join(" ");

  const gridClasses = [
    "testimonials-section__grid",
    isMobile ? "testimonials-section__grid--mobile" : isTablet ? "testimonials-section__grid--tablet" : "testimonials-section__grid--desktop",
  ].join(" ");

  return (
    <section className={sectionClasses}>
      {/* Background gradient */}
      <div className="testimonials-section__bg-gradient" />

      <div className="testimonials-section__container mx-auto">
        {/* Header */}
        <Reveal>
          <div className={headerClasses} style={{ gap: 24 }}>
            <div className="testimonials-section__header-content">
              <div className="testimonials-section__badge d-inline-flex align-items-center">
                <div className="testimonials-section__badge-dot" />
                <span className="testimonials-section__badge-text">Trusted by 2,400+ early backers</span>
              </div>

              <h2 className={titleClasses}>
                What our early adopters
                <br />
                <span className="text-gradient-primary">are saying</span>
              </h2>

              <p className={subtitleClasses}>
                Real stories from real people who've experienced the difference.
              </p>
            </div>

            {/* Rating summary */}
            {!isMobile && (
              <div className="testimonials-section__rating-box d-flex align-items-center">
                <div className="testimonials-section__rating-number">4.9</div>
                <div>
                  <div className="testimonials-section__rating-stars d-flex">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} width="18" height="18" viewBox="0 0 24 24" fill="#4949f2">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    ))}
                  </div>
                  <div className="testimonials-section__rating-text">Based on 2,400+ reviews</div>
                </div>
              </div>
            )}
          </div>
        </Reveal>

        {/* Main Slider Section */}
        <Reveal>
          <div
            className={sliderClasses}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className={`testimonials-section__slider-grid ${!isMobile && !isTablet ? "testimonials-section__slider-grid--desktop" : ""}`}>
              {/* Main testimonial */}
              <MainTestimonialCard
                key={`main-${activeIndex}`}
                testimonial={TESTIMONIALS[activeIndex]}
                isMobile={isMobile}
                isTablet={isTablet}
              />

              {/* Side testimonial */}
              {!isMobile && !isTablet && (
                <SideSliderCard
                  key={`side-${sideIndex}`}
                  testimonial={TESTIMONIALS[sideIndex]}
                  index={sideIndex}
                />
              )}
            </div>

            {/* Navigation */}
            <div className="testimonials-section__nav d-flex align-items-center justify-content-center">
              <button onClick={handlePrev} className="testimonials-section__nav-btn d-flex align-items-center justify-content-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4949f2" strokeWidth="2">
                  <polyline points="15 18 9 12 15 6" />
                </svg>
              </button>

              <div className="testimonials-section__dots d-flex">
                {TESTIMONIALS.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveIndex(i)}
                    className={`testimonials-section__dot ${activeIndex === i ? "testimonials-section__dot--active" : "testimonials-section__dot--inactive"}`}
                  />
                ))}
              </div>

              <button onClick={handleNext} className="testimonials-section__nav-btn d-flex align-items-center justify-content-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4949f2" strokeWidth="2">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </button>
            </div>
          </div>
        </Reveal>

        {/* Bottom testimonials grid */}
        <div className={gridClasses}>
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <TestimonialCard testimonial={t} index={i} isMobile={isMobile} />
            </Reveal>
          ))}
        </div>

        {/* Bottom stats bar */}
        <Reveal delay={0.2}>
          {isMobile ? (
            <div className="testimonials-section__stats-bar testimonials-section__stats-bar--mobile">
              {STATS.map((stat) => (
                <div
                  key={stat.label}
                  className="testimonials-section__stat-item testimonials-section__stat-item--mobile d-flex align-items-center"
                >
                  <div className="testimonials-section__stat-icon d-flex align-items-center justify-content-center">
                    <StatIcon icon={stat.icon} />
                  </div>
                  <div>
                    <div className="testimonials-section__stat-value testimonials-section__stat-value--mobile">
                      {stat.value}
                    </div>
                    <div className="testimonials-section__stat-label">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="testimonials-section__stats-bar">
              {STATS.map((stat, idx) => (
                <div
                  key={stat.label}
                  className={`testimonials-section__stat-item d-flex align-items-center ${idx < 3 ? "testimonials-section__stat-item--bordered" : ""}`}
                >
                  <div className="testimonials-section__stat-icon d-flex align-items-center justify-content-center">
                    <StatIcon icon={stat.icon} />
                  </div>
                  <div>
                    <div className="testimonials-section__stat-value">{stat.value}</div>
                    <div className="testimonials-section__stat-label">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </Reveal>
      </div>
    </section>
  );
}
