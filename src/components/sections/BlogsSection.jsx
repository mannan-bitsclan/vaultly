import { useState } from "react";
import { Link } from "react-router-dom";
import { Reveal } from "../common";
import { BLOGS } from "../../data";
import { useResponsive } from "../../hooks";

const CATEGORY_COLORS = {
  "Ghost Charges": "#4949f2",
  "Security Cascade": "#a78bfa",
  "Fronting Tax": "#10b981",
  "Zombie Tools": "#f59e0b",
};

function ModernBlogCard({ blog, isMobile }) {
  const [isHovered, setIsHovered] = useState(false);
  const color = CATEGORY_COLORS[blog.category] || "#4949f2";

  return (
    <Link
      to={`/blog/${blog.slug}`}
      style={{ textDecoration: "none", display: "block" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        style={{
          position: "relative",
          background: "var(--white)",
          borderRadius: 12,
          overflow: "hidden",
          border: `1.5px solid ${isHovered ? color : "var(--gray-200)"}`,
          boxShadow: isHovered
            ? `0 20px 40px -12px rgba(0, 0, 0, 0.18), 0 0 0 1px ${color}30`
            : "0 2px 12px rgba(0, 0, 0, 0.06)",
          transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
          transform: isHovered ? "translateY(-6px)" : "none",
          height: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Gradient accent bar */}
        <div
          style={{
            height: 5,
            background: `linear-gradient(90deg, ${color}, ${color}cc)`,
            transition: "all 0.3s ease",
          }}
        />

        {/* Content */}
        <div
          style={{
            padding: isMobile ? "24px 20px 28px" : "28px 24px 32px",
            display: "flex",
            flexDirection: "column",
            flex: 1,
          }}
        >
          {/* Category & Read Time */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: 18,
            }}
          >
            <span
              style={{
                fontSize: 11,
                fontWeight: 700,
                color: color,
                letterSpacing: 1.2,
                textTransform: "uppercase",
                background: `${color}12`,
                padding: "6px 12px",
                borderRadius: 8,
              }}
            >
              {blog.category}
            </span>
            <span
              style={{
                fontSize: 12,
                color: "var(--gray-500)",
                fontWeight: 500,
              }}
            >
              {blog.readTime}
            </span>
          </div>

          {/* Title - LARGER and more prominent */}
          <h3
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: isMobile ? "1.15rem" : "1.25rem",
              fontWeight: 700,
              color: "var(--gray-900)",
              lineHeight: 1.35,
              letterSpacing: -0.3,
              marginBottom: 14,
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
            }}
          >
            {blog.title}
          </h3>

          {/* Excerpt - Better contrast and larger */}
          <p
            style={{
              fontSize: isMobile ? 14 : 15,
              color: "#000000",
              lineHeight: 1.7,
              marginBottom: 24,
              display: "-webkit-box",
              WebkitLineClamp: 3,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
              flex: 1,
            }}
          >
            {blog.excerpt}
          </p>

          {/* Read more - More prominent */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              color: isHovered ? color : "var(--gray-500)",
              transition: "all 0.3s ease",
              marginTop: "auto",
            }}
          >
            <span style={{ fontSize: 14, fontWeight: 600 }}>Read article</span>
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
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
    </Link>
  );
}

function FeaturedCard({ blog, isMobile, isTablet }) {
  const [isHovered, setIsHovered] = useState(false);
  const color = CATEGORY_COLORS[blog.category] || "#4949f2";

  return (
    <Link
      to={`/blog/${blog.slug}`}
      style={{ textDecoration: "none", display: "block" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        style={{
          position: "relative",
          background: `linear-gradient(135deg, ${color} 0%, ${color}dd 100%)`,
          borderRadius: 12,
          overflow: "hidden",
          boxShadow: isHovered
            ? `0 30px 60px -12px ${color}50`
            : `0 20px 40px -12px ${color}30`,
          transition: "all 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
          transform: isHovered ? "translateY(-6px) scale(1.01)" : "none",
        }}
      >
        {/* Decorative elements */}
        <div
          style={{
            position: "absolute",
            top: -100,
            right: -100,
            width: 300,
            height: 300,
            borderRadius: "50%",
            background: "rgba(255, 255, 255, 0.1)",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -50,
            left: -50,
            width: 200,
            height: 200,
            borderRadius: "50%",
            background: "rgba(255, 255, 255, 0.05)",
            pointerEvents: "none",
          }}
        />

        {/* Content */}
        <div
          style={{
            position: "relative",
            padding: isMobile ? "32px 24px" : isTablet ? "40px 32px" : "48px 40px",
            zIndex: 1,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              marginBottom: 24,
            }}
          >
            <span
              style={{
                fontSize: 12,
                fontWeight: 700,
                color: "rgba(255, 255, 255, 0.95)",
                letterSpacing: 1.5,
                textTransform: "uppercase",
                background: "rgba(255, 255, 255, 0.2)",
                padding: "8px 14px",
                borderRadius: 8,
                backdropFilter: "blur(10px)",
              }}
            >
              Featured
            </span>
            <span
              style={{
                fontSize: 13,
                color: "rgba(255, 255, 255, 0.8)",
                fontWeight: 500,
              }}
            >
              {blog.readTime} read
            </span>
          </div>

          <h3
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: isMobile ? "1.6rem" : isTablet ? "1.85rem" : "2.5rem",
              fontWeight: 600,
              color: "white",
              lineHeight: 1.2,
              letterSpacing: 1.5,
              marginBottom: 18,
              maxWidth: 750,
            }}
          >
            {blog.title}
          </h3>

          <p
            style={{
              fontSize: isMobile ? 15 : 17,
              color: "rgba(255, 255, 255, 0.9)",
              lineHeight: 1.75,
              marginBottom: 32,
              maxWidth: 580,
            }}
          >
            {blog.excerpt}
          </p>

          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              background: "white",
              color: color,
              padding: "15px 28px",
              borderRadius: 12,
              fontSize: 15,
              fontWeight: 700,
              boxShadow: "0 8px 24px rgba(0, 0, 0, 0.15)",
              transition: "all 0.3s ease",
              transform: isHovered ? "translateX(4px)" : "none",
            }}
          >
            Read Full Article
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </div>
        </div>
      </div>
    </Link>
  );
}

export function BlogsSection() {
  const { isMobile, isTablet } = useResponsive();

  // Show first 4 blogs from different categories for variety
  const displayBlogs = [
    BLOGS[0], // Ghost Charges
    BLOGS[4], // Security Cascade
    BLOGS[8], // Fronting Tax
    BLOGS[12], // Zombie Tools
  ];

  const featuredBlog = BLOGS[0];
  const gridBlogs = isMobile ? displayBlogs.slice(0, 3) : displayBlogs;

  return (
    <section
      id="section-blog"
      style={{
        padding: isMobile ? "72px 5%" : isTablet ? "80px 5%" : "80px 5%",
        background: "var(--white)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Subtle background gradient */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "50%",
          background: "linear-gradient(180deg, var(--gray-50) 0%, transparent 100%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative", zIndex: 2 }}>
        {/* Header */}
        <Reveal>
          <div
            style={{
              textAlign: "center",
              marginBottom: isMobile ? 40 : 56,
            }}
          >
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                background: "linear-gradient(135deg, var(--primary) 0%, #6366f1 100%)",
                borderRadius: 12,
                padding: "8px 18px",
                marginBottom: 20,
              }}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
              >
                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
              </svg>
              <span
                style={{
                  fontSize: 12,
                  letterSpacing: 1.5,
                  textTransform: "uppercase",
                  color: "white",
                  fontWeight: 700,
                }}
              >
                Insights
              </span>
            </div>

            <h2
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: isMobile ? "1.75rem" : isTablet ? "2.2rem" : "2.75rem",
                fontWeight: 800,
                letterSpacing: -1,
                lineHeight: 1.15,
                color: "var(--gray-900)",
                marginBottom: 16,
              }}
            >
              The Problems{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, var(--primary), #a78bfa)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Nobody Talks About
              </span>
            </h2>

            <p
              style={{
                color: "var(--gray-600)",
                fontSize: isMobile ? 15 : 17,
                lineHeight: 1.7,
                maxWidth: 550,
                margin: "0 auto",
              }}
            >
              Deep dives into the hidden costs draining your budget. Real numbers, real solutions.
            </p>
          </div>
        </Reveal>

        {/* Featured blog - Desktop only */}
        {!isMobile && (
          <Reveal delay={0.1}>
            <div style={{ marginBottom: 32 }}>
              <FeaturedCard
                blog={featuredBlog}
                isMobile={isMobile}
                isTablet={isTablet}
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
                ? "repeat(2, 1fr)"
                : "repeat(4, 1fr)",
            gap: isMobile ? 20 : 24,
          }}
        >
          {gridBlogs.map((blog, i) => (
            <Reveal key={blog.id} delay={0.1 + i * 0.05}>
              <ModernBlogCard
                blog={blog}
                isMobile={isMobile}
              />
            </Reveal>
          ))}
        </div>

        {/* View all button */}
        <Reveal delay={0.3}>
          <div style={{ textAlign: "center", marginTop: isMobile ? 36 : 52 }}>
            <Link
              to="/blog"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                background: "linear-gradient(135deg, var(--gray-900) 0%, var(--gray-800) 100%)",
                color: "white",
                padding: "16px 32px",
                borderRadius: 14,
                fontSize: 15,
                fontWeight: 600,
                textDecoration: "none",
                transition: "all 0.3s ease",
                fontFamily: "'Inter', sans-serif",
                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.15)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-3px)";
                e.currentTarget.style.boxShadow = "0 8px 30px rgba(0, 0, 0, 0.2)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "";
                e.currentTarget.style.boxShadow = "0 4px 20px rgba(0, 0, 0, 0.15)";
              }}
            >
              Explore All 16 Articles
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
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
