import { useState } from "react";
import { Reveal } from "../common";
import { BLOGS } from "../../data";
import { useResponsive } from "../../hooks";

const FILTER_OPTIONS = [
  { label: "All", color: "var(--primary)" },
  { label: "Ghost Charges", color: "#4949f2" },
  { label: "Security Cascade", color: "#a78bfa" },
  { label: "Fronting Tax", color: "#10b981" },
  { label: "Zombie Tools", color: "#f59e0b" },
];

const CATEGORY_ICONS = {
  "Ghost Charges": (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
      <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
      <line x1="12" y1="17" x2="12.01" y2="17" />
    </svg>
  ),
  "Security Cascade": (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <line x1="12" y1="8" x2="12" y2="12" />
      <line x1="12" y1="16" x2="12.01" y2="16" />
    </svg>
  ),
  "Fronting Tax": (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" y1="1" x2="12" y2="23" />
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </svg>
  ),
  "Zombie Tools": (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <line x1="15" y1="9" x2="9" y2="15" />
      <line x1="9" y1="9" x2="15" y2="15" />
    </svg>
  ),
};

function BlogCard({ blog, isMobile, isTablet, isFeatured = false }) {
  const [isHovered, setIsHovered] = useState(false);

  if (isFeatured) {
    return (
      <div
        style={{
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
          gap: isMobile ? 0 : 0,
          background: "var(--white)",
          borderRadius: 28,
          overflow: "hidden",
          border: "1px solid var(--gray-200)",
          boxShadow: "0 20px 60px rgba(0, 0, 0, 0.08)",
          transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "translateY(-6px)";
          e.currentTarget.style.boxShadow = `0 30px 80px rgba(0, 0, 0, 0.12), 0 0 0 1px ${blog.color}30`;
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "";
          e.currentTarget.style.boxShadow = "0 20px 60px rgba(0, 0, 0, 0.08)";
        }}
      >
        {/* Image/Visual area */}
        <div
          style={{
            background: `linear-gradient(135deg, ${blog.color}15, ${blog.color}05)`,
            padding: isMobile ? "40px 30px" : "60px 50px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
            overflow: "hidden",
            minHeight: isMobile ? 200 : 300,
          }}
        >
          {/* Decorative circles */}
          <div
            style={{
              position: "absolute",
              top: -50,
              right: -50,
              width: 200,
              height: 200,
              borderRadius: "50%",
              background: `${blog.color}10`,
              pointerEvents: "none",
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: -30,
              left: -30,
              width: 150,
              height: 150,
              borderRadius: "50%",
              background: `${blog.color}08`,
              pointerEvents: "none",
            }}
          />

          {/* Icon */}
          <div
            style={{
              width: 100,
              height: 100,
              borderRadius: 28,
              background: `linear-gradient(135deg, ${blog.color}, ${blog.color}cc)`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              marginBottom: 24,
              boxShadow: `0 20px 40px ${blog.color}40`,
            }}
          >
            <div style={{ transform: "scale(1.8)" }}>
              {CATEGORY_ICONS[blog.category]}
            </div>
          </div>

          {/* Problem badge */}
          <div
            style={{
              background: "var(--white)",
              borderRadius: 100,
              padding: "10px 24px",
              boxShadow: "0 8px 24px rgba(0, 0, 0, 0.1)",
            }}
          >
            <span
              style={{
                fontSize: 14,
                fontWeight: 700,
                color: blog.color,
                letterSpacing: 1,
              }}
            >
              Problem {blog.problem} · Part {blog.part}
            </span>
          </div>
        </div>

        {/* Content area */}
        <div
          style={{
            padding: isMobile ? "32px 28px" : "48px 44px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          {/* Category tag */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: `${blog.color}10`,
              border: `1px solid ${blog.color}25`,
              borderRadius: 100,
              padding: "6px 14px",
              marginBottom: 20,
              width: "fit-content",
            }}
          >
            <div
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: blog.color,
              }}
            />
            <span
              style={{
                fontSize: 11,
                fontWeight: 700,
                color: blog.color,
                letterSpacing: 1,
                textTransform: "uppercase",
              }}
            >
              {blog.category}
            </span>
          </div>

          <h3
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: isMobile ? "1.4rem" : "1.65rem",
              fontWeight: 700,
              color: "var(--gray-900)",
              lineHeight: 1.3,
              letterSpacing: -0.5,
              marginBottom: 16,
            }}
          >
            {blog.title}
          </h3>

          <p
            style={{
              fontSize: isMobile ? 14 : 16,
              color: "var(--gray-600)",
              lineHeight: 1.75,
              marginBottom: 28,
            }}
          >
            {blog.excerpt}
          </p>

          {/* Footer */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
              }}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="var(--gray-400)"
                strokeWidth="2"
              >
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
              <span style={{ fontSize: 13, color: "var(--gray-500)", fontWeight: 500 }}>
                {blog.readTime} read
              </span>
            </div>

            <button
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                background: blog.color,
                color: "white",
                border: "none",
                padding: "12px 24px",
                borderRadius: 12,
                fontSize: 14,
                fontWeight: 700,
                cursor: "pointer",
                transition: "all 0.3s ease",
                boxShadow: `0 8px 20px ${blog.color}30`,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow = `0 12px 28px ${blog.color}40`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "";
                e.currentTarget.style.boxShadow = `0 8px 20px ${blog.color}30`;
              }}
            >
              Read Article
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      style={{
        background: isHovered ? "var(--white)" : "var(--gray-50)",
        borderRadius: 24,
        overflow: "hidden",
        border: `1px solid ${isHovered ? `${blog.color}30` : "var(--gray-200)"}`,
        boxShadow: isHovered
          ? `0 24px 50px rgba(0, 0, 0, 0.12), 0 0 0 1px ${blog.color}15`
          : "0 4px 20px rgba(0, 0, 0, 0.03)",
        transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
        transform: isHovered ? "translateY(-8px)" : "none",
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Thumbnail area */}
      <div
        style={{
          background: `linear-gradient(135deg, ${blog.color}12, ${blog.color}05)`,
          padding: "28px 24px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Decorative element */}
        <div
          style={{
            position: "absolute",
            top: -30,
            right: -30,
            width: 100,
            height: 100,
            borderRadius: "50%",
            background: `${blog.color}10`,
            transition: "transform 0.4s ease",
            transform: isHovered ? "scale(1.5)" : "scale(1)",
          }}
        />

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            position: "relative",
            zIndex: 2,
          }}
        >
          {/* Icon */}
          <div
            style={{
              width: 52,
              height: 52,
              borderRadius: 14,
              background: isHovered
                ? `linear-gradient(135deg, ${blog.color}, ${blog.color}cc)`
                : `${blog.color}20`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: isHovered ? "white" : blog.color,
              transition: "all 0.3s ease",
              boxShadow: isHovered ? `0 12px 24px ${blog.color}35` : "none",
            }}
          >
            {CATEGORY_ICONS[blog.category]}
          </div>

          {/* Problem badge */}
          <div
            style={{
              background: "var(--white)",
              borderRadius: 100,
              padding: "6px 14px",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
            }}
          >
            <span
              style={{
                fontSize: 11,
                fontWeight: 700,
                color: blog.color,
                letterSpacing: 0.5,
              }}
            >
              Problem {blog.problem}
            </span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div
        style={{
          padding: "24px 24px 28px",
          display: "flex",
          flexDirection: "column",
          flex: 1,
        }}
      >
        {/* Category & Part */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: 14,
          }}
        >
          <span
            style={{
              fontSize: 10,
              fontWeight: 700,
              color: blog.color,
              letterSpacing: 1,
              textTransform: "uppercase",
            }}
          >
            {blog.category}
          </span>
          <span
            style={{
              fontSize: 10,
              color: "var(--gray-400)",
              fontFamily: "'DM Mono', monospace",
            }}
          >
            Part {blog.part}
          </span>
        </div>

        {/* Title */}
        <h3
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontSize: isMobile ? "1.05rem" : "1.1rem",
            fontWeight: 700,
            color: "var(--gray-900)",
            lineHeight: 1.4,
            letterSpacing: -0.3,
            marginBottom: 12,
            flex: 1,
          }}
        >
          {blog.title}
        </h3>

        {/* Excerpt */}
        <p
          style={{
            fontSize: 13,
            color: "var(--gray-500)",
            lineHeight: 1.7,
            marginBottom: 20,
            display: "-webkit-box",
            WebkitLineClamp: 3,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {blog.excerpt}
        </p>

        {/* Footer */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            paddingTop: 16,
            borderTop: `1px solid ${isHovered ? `${blog.color}20` : "var(--gray-200)"}`,
            transition: "border-color 0.3s ease",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 6,
            }}
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="var(--gray-400)"
              strokeWidth="2"
            >
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
            <span style={{ fontSize: 12, color: "var(--gray-500)", fontWeight: 500 }}>
              {blog.readTime}
            </span>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 6,
              color: isHovered ? blog.color : "var(--gray-400)",
              transition: "color 0.3s ease",
              cursor: "pointer",
            }}
          >
            <span style={{ fontSize: 12, fontWeight: 600 }}>Read more</span>
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              style={{
                transition: "transform 0.3s ease",
                transform: isHovered ? "translateX(4px)" : "none",
              }}
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export function BlogsSection() {
  const [blogFilter, setBlogFilter] = useState("All");
  const { isMobile, isTablet } = useResponsive();

  const filteredBlogs = BLOGS.filter(
    (b) => blogFilter === "All" || b.category === blogFilter
  );

  // First blog as featured when showing all
  const featuredBlog = blogFilter === "All" ? filteredBlogs[0] : null;
  const gridBlogs = blogFilter === "All" ? filteredBlogs.slice(1, 9) : filteredBlogs.slice(0, 8);

  return (
    <section
      id="section-blog"
      style={{
        padding: isMobile ? "72px 5%" : isTablet ? "88px 5%" : "110px 5%",
        background: "linear-gradient(180deg, var(--gray-50) 0%, var(--white) 50%, var(--gray-50) 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background decorations */}
      <div
        style={{
          position: "absolute",
          top: "5%",
          right: "10%",
          width: 400,
          height: 400,
          background: "radial-gradient(circle, var(--primary-glow) 0%, transparent 70%)",
          pointerEvents: "none",
          opacity: 0.5,
        }}
      />

      {/* Subtle pattern */}
      <svg
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          opacity: 0.3,
          pointerEvents: "none",
        }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="blogDots" width="40" height="40" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1" fill="var(--gray-300)" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#blogDots)" />
      </svg>

      <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative", zIndex: 2 }}>
        {/* Header */}
        <Reveal>
          <div
            style={{
              textAlign: "center",
              marginBottom: isMobile ? 36 : 56,
            }}
          >
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                background: "var(--primary-glow)",
                border: "1px solid rgba(73, 73, 242, 0.2)",
                borderRadius: 100,
                padding: "8px 18px",
                marginBottom: 18,
              }}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="var(--primary)"
                strokeWidth="2"
              >
                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
              </svg>
              <span
                style={{
                  fontSize: 12,
                  letterSpacing: 2,
                  textTransform: "uppercase",
                  color: "var(--primary)",
                  fontWeight: 700,
                }}
              >
                The Vaultly Brief
              </span>
            </div>

            <h2
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: isMobile ? "1.75rem" : isTablet ? "2.2rem" : "clamp(2.2rem,3.5vw,3rem)",
                fontWeight: 700,
                letterSpacing: isMobile ? -0.5 : -1.5,
                lineHeight: 1.15,
                color: "var(--gray-900)",
                marginBottom: 16,
              }}
            >
              16 Problems. 4 Patterns.
              <br />
              <span
                style={{
                  background: "linear-gradient(135deg, var(--primary), #a78bfa)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Every One Costs Real Money.
              </span>
            </h2>

            <p
              style={{
                color: "var(--gray-600)",
                fontSize: isMobile ? 15 : 17,
                lineHeight: 1.7,
                maxWidth: 600,
                margin: "0 auto",
              }}
            >
              Each of the four problems we're solving is bigger than it looks.
              These articles break down the mechanics, the cost, and the fix.
            </p>
          </div>
        </Reveal>

        {/* Filter tabs */}
        <Reveal delay={0.08}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: isMobile ? 8 : 12,
              flexWrap: "wrap",
              marginBottom: isMobile ? 36 : 52,
            }}
          >
            {FILTER_OPTIONS.map((f) => {
              const active = blogFilter === f.label;
              return (
                <button
                  key={f.label}
                  onClick={() => setBlogFilter(f.label)}
                  style={{
                    padding: isMobile ? "10px 18px" : "12px 24px",
                    borderRadius: 100,
                    border: `2px solid ${active ? f.color : "var(--gray-200)"}`,
                    background: active ? f.color : "var(--white)",
                    color: active ? "white" : "var(--gray-600)",
                    fontSize: isMobile ? 13 : 14,
                    fontWeight: 600,
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    whiteSpace: "nowrap",
                    fontFamily: "'Inter', sans-serif",
                    boxShadow: active ? `0 8px 20px ${f.color}30` : "0 2px 8px rgba(0, 0, 0, 0.04)",
                  }}
                  onMouseEnter={(e) => {
                    if (!active) {
                      e.currentTarget.style.borderColor = f.color;
                      e.currentTarget.style.color = f.color;
                      e.currentTarget.style.transform = "translateY(-2px)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!active) {
                      e.currentTarget.style.borderColor = "var(--gray-200)";
                      e.currentTarget.style.color = "var(--gray-600)";
                      e.currentTarget.style.transform = "";
                    }
                  }}
                >
                  {f.label}
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* Featured blog */}
        {featuredBlog && !isMobile && (
          <Reveal>
            <div style={{ marginBottom: 32 }}>
              <BlogCard
                blog={featuredBlog}
                isMobile={isMobile}
                isTablet={isTablet}
                isFeatured={true}
              />
            </div>
          </Reveal>
        )}

        {/* Blog grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: isMobile
              ? "1fr"
              : isTablet
                ? "1fr 1fr"
                : "repeat(4, 1fr)",
            gap: isMobile ? 20 : 24,
          }}
        >
          {gridBlogs.map((blog, i) => (
            <Reveal key={blog.id} delay={i * 0.05}>
              <BlogCard
                blog={blog}
                isMobile={isMobile}
                isTablet={isTablet}
              />
            </Reveal>
          ))}
        </div>

        {/* View all button */}
        {filteredBlogs.length > 8 && (
          <Reveal delay={0.3}>
            <div style={{ textAlign: "center", marginTop: isMobile ? 36 : 52 }}>
              <button
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 10,
                  background: "var(--white)",
                  color: "var(--gray-700)",
                  border: "2px solid var(--gray-200)",
                  padding: "14px 32px",
                  borderRadius: 14,
                  fontSize: 15,
                  fontWeight: 600,
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  fontFamily: "'Inter', sans-serif",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "var(--primary)";
                  e.currentTarget.style.color = "var(--primary)";
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--gray-200)";
                  e.currentTarget.style.color = "var(--gray-700)";
                  e.currentTarget.style.transform = "";
                }}
              >
                View All Articles
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </button>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}
