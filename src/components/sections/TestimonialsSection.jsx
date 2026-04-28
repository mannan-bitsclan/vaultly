import { useState, useEffect } from "react";
import { Reveal } from "../common";
import { TESTIMONIALS } from "../../data";
import { useResponsive } from "../../hooks";

function StarRating({ rating = 5 }) {
  return (
    <div style={{ display: "flex", gap: 3 }}>
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
  const [isHovered, setIsHovered] = useState(false);

  const avatarColors = [
    "linear-gradient(135deg, #4949f2 0%, #7c3aed 100%)",
    "linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)",
    "linear-gradient(135deg, #8b5cf6 0%, #d946ef 100%)",
    "linear-gradient(135deg, #f59e0b 0%, #ef4444 100%)",
    "linear-gradient(135deg, #10b981 0%, #06b6d4 100%)",
  ];

  return (
    <div
      style={{
        background: "var(--white)",
        borderRadius: 12,
        padding: isMobile ? 24 : 28,
        border: `1px solid ${isHovered ? "rgba(73, 73, 242, 0.2)" : "var(--gray-200)"}`,
        boxShadow: isHovered
          ? "0 24px 48px -12px rgba(0, 0, 0, 0.12)"
          : "0 4px 16px rgba(0, 0, 0, 0.04)",
        transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
        transform: isHovered ? "translateY(-4px)" : "none",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        position: "relative",
        cursor: "default",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Top accent line */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 24,
          right: 24,
          height: 3,
          background: isHovered
            ? "linear-gradient(90deg, #4949f2, #a78bfa)"
            : "transparent",
          borderRadius: "0 0 4px 4px",
          transition: "all 0.3s ease",
        }}
      />

      {/* Header with avatar and info */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 14,
          marginBottom: 20,
        }}
      >
        {/* Avatar */}
        <div
          style={{
            width: 52,
            height: 52,
            borderRadius: 12,
            background: avatarColors[index % avatarColors.length],
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 700,
            color: "white",
            fontSize: 20,
            flexShrink: 0,
            boxShadow: isHovered
              ? "0 8px 24px rgba(73, 73, 242, 0.25)"
              : "0 4px 12px rgba(0, 0, 0, 0.1)",
            transition: "box-shadow 0.3s ease",
          }}
        >
          {testimonial.name.charAt(0)}
        </div>

        {/* Name and role */}
        <div style={{ flex: 1, minWidth: 0 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              marginBottom: 2,
            }}
          >
            <span
              style={{
                fontWeight: 600,
                fontSize: 15,
                color: "var(--gray-900)",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              {testimonial.name}
            </span>
            {/* Verified badge */}
            <div
              style={{
                width: 18,
                height: 18,
                borderRadius: "50%",
                background: "#4949f2",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <svg
                width="10"
                height="10"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
          </div>
          <div
            style={{
              fontSize: 13,
              color: "var(--gray-500)",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {testimonial.role}
          </div>
        </div>

        {/* Rating */}
        <div style={{ flexShrink: 0 }}>
          <StarRating rating={5} />
        </div>
      </div>

      {/* Quote */}
      <div style={{ position: "relative", flex: 1 }}>
        {/* Quote mark */}
        <svg
          style={{
            position: "absolute",
            top: -4,
            left: -4,
            opacity: 0.08,
          }}
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="var(--primary)"
        >
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
        <p
          style={{
            fontSize: 15,
            lineHeight: 1.7,
            color: "var(--gray-700)",
            position: "relative",
            zIndex: 1,
          }}
        >
          {testimonial.text}
        </p>
      </div>

      {/* Footer - time ago */}
      <div
        style={{
          marginTop: 20,
          paddingTop: 16,
          borderTop: "1px solid var(--gray-100)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <span style={{ fontSize: 12, color: "var(--gray-400)" }}>
          {["2 weeks ago", "1 month ago", "3 weeks ago", "5 days ago", "2 months ago"][index % 5]}
        </span>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 4,
            fontSize: 12,
            color: "var(--gray-400)",
          }}
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" />
          </svg>
          Helpful
        </div>
      </div>
    </div>
  );
}

function MainTestimonialCard({ testimonial, isMobile, isTablet }) {
  const avatarColors = [
    "linear-gradient(135deg, #4949f2 0%, #7c3aed 100%)",
    "linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)",
    "linear-gradient(135deg, #8b5cf6 0%, #d946ef 100%)",
  ];

  const getAvatarColor = (name) => {
    const index = name.charCodeAt(0) % avatarColors.length;
    return avatarColors[index];
  };

  return (
    <div
      style={{
        background: "linear-gradient(135deg, #4949f2 0%, #6366f1 50%, #8b5cf6 100%)",
        borderRadius: 16,
        padding: isMobile ? 32 : isTablet ? 40 : 48,
        position: "relative",
        overflow: "hidden",
        height: "100%",
        minHeight: isMobile ? "auto" : 380,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      {/* Background pattern */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `radial-gradient(circle at 20% 80%, rgba(255,255,255,0.1) 0%, transparent 50%),
                           radial-gradient(circle at 80% 20%, rgba(255,255,255,0.08) 0%, transparent 40%)`,
          pointerEvents: "none",
        }}
      />

      {/* Decorative shapes */}
      <div
        style={{
          position: "absolute",
          top: -60,
          right: -60,
          width: 200,
          height: 200,
          borderRadius: "50%",
          border: "1px solid rgba(255, 255, 255, 0.1)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: -40,
          left: -40,
          width: 150,
          height: 150,
          borderRadius: "50%",
          border: "1px solid rgba(255, 255, 255, 0.08)",
          pointerEvents: "none",
        }}
      />

      <div style={{ position: "relative", zIndex: 2 }}>
        {/* Quote icon */}
        <div
          style={{
            width: 56,
            height: 56,
            borderRadius: 14,
            background: "rgba(255, 255, 255, 0.15)",
            backdropFilter: "blur(10px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 28,
          }}
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
        </div>

        {/* Quote text */}
        <p
          style={{
            fontSize: isMobile ? 20 : isTablet ? 24 : 28,
            fontWeight: 500,
            lineHeight: 1.5,
            color: "white",
            marginBottom: 32,
            fontFamily: "'Poppins', sans-serif",
          }}
        >
          "{testimonial.text}"
        </p>

        {/* Author info */}
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 14,
              background: getAvatarColor(testimonial.name),
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 700,
              color: "white",
              fontSize: 24,
              border: "3px solid rgba(255, 255, 255, 0.3)",
            }}
          >
            {testimonial.name.charAt(0)}
          </div>
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                marginBottom: 4,
              }}
            >
              <span
                style={{
                  fontWeight: 600,
                  fontSize: 20,
                  color: "white",
                }}
              >
                {testimonial.name}
              </span>
              <div
                style={{
                  background: "rgba(255, 255, 255, 0.2)",
                  borderRadius: 100,
                  padding: "5px 10px",
                  display: "flex",
                  alignItems: "center",
                  gap: 5,
                }}
              >
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2.5"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span style={{ fontSize: 11, color: "white", fontWeight: 500 }}>
                  Verified
                </span>
              </div>
            </div>
            <span style={{ fontSize: 15, color: "rgba(255, 255, 255, 0.7)" }}>
              {testimonial.role}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

function SideSliderCard({ testimonial, index, isMobile }) {
  const avatarColors = [
    "linear-gradient(135deg, #4949f2 0%, #7c3aed 100%)",
    "linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)",
    "linear-gradient(135deg, #8b5cf6 0%, #d946ef 100%)",
  ];

  return (
    <div
      style={{
        background: "var(--white)",
        borderRadius: 16,
        padding: 28,
        border: "1px solid var(--gray-200)",
        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.06)",
        height: "100%",
        minHeight: isMobile ? "auto" : 380,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background decorative number */}
      <div
        style={{
          position: "absolute",
          bottom: -20,
          right: 10,
          fontFamily: "'Poppins', sans-serif",
          fontSize: 180,
          fontWeight: 900,
          color: "rgba(73, 73, 242, 0.04)",
          lineHeight: 1,
          userSelect: "none",
          pointerEvents: "none",
        }}
      >
        {String(index + 1).padStart(2, "0")}
      </div>

      <div style={{ position: "relative", zIndex: 1 }}>
        {/* Quote icon */}
        <div
          style={{
            width: 48,
            height: 48,
            borderRadius: 12,
            background: "linear-gradient(135deg, rgba(73, 73, 242, 0.1), rgba(139, 92, 246, 0.1))",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 24,
          }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="#4949f2">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
        </div>

        {/* Quote text */}
        <p
          style={{
            fontSize: 16,
            fontWeight: 500,
            lineHeight: 1.7,
            color: "var(--gray-700)",
            marginBottom: 28,
          }}
        >
          "{testimonial.text}"
        </p>

        {/* Author info */}
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div
            style={{
              width: 48,
              height: 48,
              borderRadius: 12,
              background: avatarColors[index % avatarColors.length],
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 700,
              color: "white",
              fontSize: 20,
            }}
          >
            {testimonial.name.charAt(0)}
          </div>
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                marginBottom: 2,
              }}
            >
              <span
                style={{
                  fontWeight: 600,
                  fontSize: 16,
                  color: "var(--gray-900)",
                }}
              >
                {testimonial.name}
              </span>
              <div
                style={{
                  width: 18,
                  height: 18,
                  borderRadius: "50%",
                  background: "#4949f2",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="3"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
            </div>
            <span style={{ fontSize: 13, color: "var(--gray-500)" }}>
              {testimonial.role}
            </span>
          </div>
        </div>

        {/* Star rating */}
        <div style={{ marginTop: 20, display: "flex", gap: 4 }}>
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

export function TestimonialsSection() {
  const { isMobile, isTablet } = useResponsive();
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Get the next testimonial index for the side card
  const sideIndex = (activeIndex + 1) % TESTIMONIALS.length;

  // Auto-slide
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

  return (
    <section
      style={{
        padding: isMobile ? "72px 5%" : isTablet ? "88px 5%" : "100px 5%",
        background: "var(--gray-50)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background elements */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 400,
          background: "linear-gradient(180deg, var(--white) 0%, var(--gray-50) 100%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: 1400, margin: "0 auto", position: "relative", zIndex: 2 }}>
        {/* Header */}
        <Reveal>
          <div
            style={{
              display: "flex",
              flexDirection: isMobile ? "column" : "row",
              alignItems: isMobile ? "flex-start" : "flex-end",
              justifyContent: "space-between",
              gap: 24,
              marginBottom: isMobile ? 36 : 56,
            }}
          >
            <div style={{ maxWidth: 600 }}>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  background: "var(--white)",
                  border: "1px solid var(--gray-200)",
                  borderRadius: 12,
                  padding: "8px 16px",
                  marginBottom: 16,
                  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.04)",
                }}
              >
                <div
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    background: "#10b981",
                  }}
                />
                <span
                  style={{
                    fontSize: 13,
                    fontWeight: 600,
                    color: "var(--gray-700)",
                  }}
                >
                  Trusted by 2,400+ early backers
                </span>
              </div>

              <h2
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: isMobile ? "1.85rem" : isTablet ? "2.4rem" : "clamp(2.4rem,4vw,3rem)",
                  fontWeight: 700,
                  letterSpacing: -1,
                  lineHeight: 1.15,
                  color: "var(--gray-900)",
                  marginBottom: 12,
                }}
              >
                What our early adopters
                <br />
                <span
                  style={{
                    background: "linear-gradient(135deg, #4949f2, #8b5cf6)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  are saying
                </span>
              </h2>

              <p
                style={{
                  color: "var(--gray-600)",
                  fontSize: isMobile ? 15 : 17,
                  lineHeight: 1.7,
                }}
              >
                Real stories from real people who've experienced the difference.
              </p>
            </div>

            {/* Rating summary */}
            {!isMobile && (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 16,
                  background: "var(--white)",
                  borderRadius: 12,
                  padding: "20px 28px",
                  border: "1px solid var(--gray-200)",
                  boxShadow: "0 4px 16px rgba(0, 0, 0, 0.04)",
                }}
              >
                <div
                  style={{
                    fontSize: 48,
                    fontWeight: 700,
                    fontFamily: "'Poppins', sans-serif",
                    color: "var(--gray-900)",
                    lineHeight: 1,
                  }}
                >
                  4.9
                </div>
                <div>
                  <div style={{ display: "flex", gap: 3, marginBottom: 4 }}>
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} width="18" height="18" viewBox="0 0 24 24" fill="#4949f2">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    ))}
                  </div>
                  <div style={{ fontSize: 13, color: "var(--gray-500)" }}>
                    Based on 2,400+ reviews
                  </div>
                </div>
              </div>
            )}
          </div>
        </Reveal>

        {/* Main Slider Section - 70% / 30% layout */}
        <Reveal>
          <div
            style={{
              marginBottom: isMobile ? 32 : 48,
            }}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: isMobile ? "1fr" : isTablet ? "1fr" : "70% 30%",
                gap: 24,
              }}
            >
              {/* Main testimonial - 70% */}
              <MainTestimonialCard
                key={`main-${activeIndex}`}
                testimonial={TESTIMONIALS[activeIndex]}
                isMobile={isMobile}
                isTablet={isTablet}
              />

              {/* Side testimonial - 30% */}
              {!isMobile && !isTablet && (
                <SideSliderCard
                  key={`side-${sideIndex}`}
                  testimonial={TESTIMONIALS[sideIndex]}
                  index={sideIndex}
                  isMobile={isMobile}
                />
              )}
            </div>

            {/* Navigation */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 20,
                marginTop: 32,
              }}
            >
              {/* Prev button */}
              <button
                onClick={handlePrev}
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: "50%",
                  background: "var(--white)",
                  border: "1px solid var(--gray-200)",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "all 0.3s ease",
                  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.06)",
                }}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#4949f2"
                  strokeWidth="2"
                >
                  <polyline points="15 18 9 12 15 6" />
                </svg>
              </button>

              {/* Dots */}
              <div style={{ display: "flex", gap: 10 }}>
                {TESTIMONIALS.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveIndex(i)}
                    style={{
                      width: activeIndex === i ? 32 : 10,
                      height: 10,
                      borderRadius: 100,
                      background: activeIndex === i ? "#4949f2" : "var(--gray-300)",
                      border: "none",
                      cursor: "pointer",
                      transition: "all 0.3s ease",
                      padding: 0,
                    }}
                  />
                ))}
              </div>

              {/* Next button */}
              <button
                onClick={handleNext}
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: "50%",
                  background: "var(--white)",
                  border: "1px solid var(--gray-200)",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "all 0.3s ease",
                  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.06)",
                }}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#4949f2"
                  strokeWidth="2"
                >
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </button>
            </div>
          </div>
        </Reveal>

        {/* Bottom testimonials grid - Priya S testimonials */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : isTablet ? "1fr 1fr" : "repeat(3, 1fr)",
            gap: 24,
          }}
        >
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <TestimonialCard
                testimonial={t}
                index={i}
                isMobile={isMobile}
              />
            </Reveal>
          ))}
        </div>

        {/* Bottom stats bar */}
        <Reveal delay={0.2}>
          {isMobile ? (
            /* Mobile: 2x2 grid with 4 separate boxes */
            <div
              style={{
                marginTop: 40,
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 12,
              }}
            >
              {[
                { value: "2,400+", label: "Happy Users", icon: "users" },
                { value: "$4.2M", label: "Total Saved", icon: "dollar" },
                { value: "99.9%", label: "Uptime", icon: "check" },
                { value: "24/7", label: "Support", icon: "support" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  style={{
                    background: "var(--white)",
                    borderRadius: 12,
                    border: "1px solid var(--gray-200)",
                    padding: "20px 16px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                    gap: 12,
                    boxShadow: "0 4px 24px rgba(0, 0, 0, 0.04)",
                  }}
                >
                  <div
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: 12,
                      background: "linear-gradient(135deg, rgba(73, 73, 242, 0.1), rgba(139, 92, 246, 0.1))",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    {stat.icon === "users" && (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4949f2" strokeWidth="2">
                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                        <circle cx="9" cy="7" r="4" />
                        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                      </svg>
                    )}
                    {stat.icon === "dollar" && (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4949f2" strokeWidth="2">
                        <line x1="12" y1="1" x2="12" y2="23" />
                        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                      </svg>
                    )}
                    {stat.icon === "check" && (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4949f2" strokeWidth="2">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                        <polyline points="22 4 12 14.01 9 11.01" />
                      </svg>
                    )}
                    {stat.icon === "support" && (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4949f2" strokeWidth="2">
                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                      </svg>
                    )}
                  </div>
                  <div>
                    <div
                      style={{
                        fontFamily: "'Poppins', sans-serif",
                        fontSize: "1.25rem",
                        fontWeight: 700,
                        color: "var(--gray-900)",
                        lineHeight: 1,
                      }}
                    >
                      {stat.value}
                    </div>
                    <div
                      style={{
                        fontSize: 13,
                        color: "var(--gray-500)",
                        marginTop: 4,
                      }}
                    >
                      {stat.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            /* Desktop/Tablet: Single box with 4 columns */
            <div
              style={{
                marginTop: 56,
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
                gap: 0,
                background: "var(--white)",
                borderRadius: 12,
                border: "1px solid var(--gray-200)",
                overflow: "hidden",
                boxShadow: "0 4px 24px rgba(0, 0, 0, 0.04)",
              }}
            >
              {[
                { value: "2,400+", label: "Happy Users", icon: "users" },
                { value: "$4.2M", label: "Total Saved", icon: "dollar" },
                { value: "99.9%", label: "Uptime", icon: "check" },
                { value: "24/7", label: "Support", icon: "support" },
              ].map((stat, idx) => (
                <div
                  key={stat.label}
                  style={{
                    padding: "28px 24px",
                    display: "flex",
                    alignItems: "center",
                    gap: 16,
                    borderRight: idx < 3 ? "1px solid var(--gray-100)" : "none",
                    justifyContent: "center",
                  }}
                >
                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: 12,
                    background: "linear-gradient(135deg, rgba(73, 73, 242, 0.1), rgba(139, 92, 246, 0.1))",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  {stat.icon === "users" && (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4949f2" strokeWidth="2">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                  )}
                  {stat.icon === "dollar" && (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4949f2" strokeWidth="2">
                      <line x1="12" y1="1" x2="12" y2="23" />
                      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                    </svg>
                  )}
                  {stat.icon === "check" && (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4949f2" strokeWidth="2">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                      <polyline points="22 4 12 14.01 9 11.01" />
                    </svg>
                  )}
                  {stat.icon === "support" && (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4949f2" strokeWidth="2">
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                    </svg>
                  )}
                </div>
                <div>
                  <div
                    style={{
                      fontFamily: "'Poppins', sans-serif",
                      fontSize: "1.5rem",
                      fontWeight: 700,
                      color: "var(--gray-900)",
                      lineHeight: 1,
                    }}
                  >
                    {stat.value}
                  </div>
                  <div
                    style={{
                      fontSize: 13,
                      color: "var(--gray-500)",
                      marginTop: 4,
                    }}
                  >
                    {stat.label}
                  </div>
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
