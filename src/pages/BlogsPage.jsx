import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Logo, Reveal } from "../components/common";
import { BLOGS } from "../data";
import { useResponsive } from "../hooks";

const FILTER_OPTIONS = [
  { label: "All", color: "var(--primary)", icon: "grid" },
  { label: "Ghost Charges", color: "#4949f2", icon: "ghost" },
  { label: "Security Cascade", color: "#a78bfa", icon: "shield" },
  { label: "Fronting Tax", color: "#10b981", icon: "dollar" },
  { label: "Zombie Tools", color: "#f59e0b", icon: "zombie" },
];

const CATEGORY_COLORS = {
  "Ghost Charges": "#4949f2",
  "Security Cascade": "#a78bfa",
  "Fronting Tax": "#10b981",
  "Zombie Tools": "#f59e0b",
};

function BlogCard({ blog, isMobile }) {
  const [isHovered, setIsHovered] = useState(false);
  const color = CATEGORY_COLORS[blog.category] || "#4949f2";

  return (
    <Link
      to={`/blog/${blog.slug}`}
      style={{ textDecoration: "none", display: "block", height: "100%" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        style={{
          position: "relative",
          background: "var(--white)",
          borderRadius: 20,
          overflow: "hidden",
          border: `1px solid ${isHovered ? `${color}40` : "var(--gray-200)"}`,
          boxShadow: isHovered
            ? `0 25px 50px -12px rgba(0, 0, 0, 0.15), 0 0 0 1px ${color}20`
            : "0 4px 6px -1px rgba(0, 0, 0, 0.05)",
          transition: "all 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
          transform: isHovered ? "translateY(-8px) scale(1.01)" : "none",
          height: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Gradient header */}
        <div
          style={{
            height: 100,
            background: `linear-gradient(135deg, ${color}15, ${color}05)`,
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: -30,
              right: -30,
              width: 100,
              height: 100,
              borderRadius: "50%",
              background: `${color}15`,
              transition: "transform 0.4s ease",
              transform: isHovered ? "scale(1.5)" : "scale(1)",
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: 16,
              left: 20,
              display: "flex",
              alignItems: "center",
              gap: 12,
            }}
          >
            <div
              style={{
                width: 44,
                height: 44,
                borderRadius: 12,
                background: isHovered
                  ? `linear-gradient(135deg, ${color}, ${color}cc)`
                  : color,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                fontFamily: "'Poppins', sans-serif",
                fontSize: 16,
                fontWeight: 800,
                boxShadow: `0 8px 20px ${color}40`,
              }}
            >
              {blog.problem}
            </div>
            <div>
              <span
                style={{
                  fontSize: 10,
                  fontWeight: 700,
                  color: color,
                  letterSpacing: 1,
                  textTransform: "uppercase",
                }}
              >
                {blog.category}
              </span>
              <div
                style={{
                  fontSize: 11,
                  color: "var(--gray-500)",
                  marginTop: 2,
                }}
              >
                Part {blog.part}
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div
          style={{
            padding: "20px 20px 24px",
            display: "flex",
            flexDirection: "column",
            flex: 1,
          }}
        >
          <h3
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: isMobile ? "1rem" : "1.05rem",
              fontWeight: 700,
              color: "var(--gray-900)",
              lineHeight: 1.4,
              letterSpacing: -0.3,
              marginBottom: 10,
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
            }}
          >
            {blog.title}
          </h3>

          <p
            style={{
              fontSize: 13,
              color: "var(--gray-500)",
              lineHeight: 1.65,
              marginBottom: 16,
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
              flex: 1,
            }}
          >
            {blog.excerpt}
          </p>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              paddingTop: 16,
              borderTop: "1px solid var(--gray-100)",
            }}
          >
            <span
              style={{
                fontSize: 12,
                color: "var(--gray-400)",
                fontWeight: 500,
              }}
            >
              {blog.readTime}
            </span>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 6,
                color: isHovered ? color : "var(--gray-400)",
                transition: "all 0.3s ease",
              }}
            >
              <span style={{ fontSize: 12, fontWeight: 600 }}>Read</span>
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                style={{
                  transition: "transform 0.3s ease",
                  transform: isHovered ? "translateX(3px)" : "none",
                }}
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default function BlogsPage() {
  const [blogFilter, setBlogFilter] = useState("All");
  const { isMobile, isTablet } = useResponsive();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredBlogs = BLOGS.filter(
    (b) => blogFilter === "All" || b.category === blogFilter
  );

  return (
    <div
      style={{
        background: "var(--white)",
        minHeight: "100vh",
      }}
    >
      {/* Navigation */}
      <nav
        style={{
          padding: isMobile ? "12px 5%" : "16px 5%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          background: "rgba(255, 255, 255, 0.95)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          borderBottom: "1px solid var(--gray-100)",
          position: "sticky",
          top: 0,
          zIndex: 100,
        }}
      >
        <Link to="/">
          <Logo compact={isMobile} />
        </Link>
        <Link
          to="/"
          style={{
            fontSize: isMobile ? 13 : 14,
            fontWeight: 600,
            color: "var(--gray-600)",
            display: "flex",
            alignItems: "center",
            gap: 6,
            padding: "10px 18px",
            borderRadius: 10,
            background: "var(--gray-100)",
            transition: "all 0.2s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "var(--primary)";
            e.currentTarget.style.color = "white";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "var(--gray-100)";
            e.currentTarget.style.color = "var(--gray-600)";
          }}
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
            <polyline points="9 22 9 12 15 12 15 22" />
          </svg>
          {!isMobile && "Home"}
        </Link>
      </nav>

      {/* Hero Section */}
      <section
        style={{
          padding: isMobile ? "48px 5% 32px" : isTablet ? "64px 5% 40px" : "80px 5% 48px",
          background: "linear-gradient(180deg, var(--gray-50) 0%, var(--white) 100%)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "20%",
            left: "10%",
            width: 300,
            height: 300,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(73, 73, 242, 0.08) 0%, transparent 60%)",
            filter: "blur(40px)",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "30%",
            right: "15%",
            width: 250,
            height: 250,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(167, 139, 250, 0.08) 0%, transparent 60%)",
            filter: "blur(40px)",
            pointerEvents: "none",
          }}
        />

        <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center", position: "relative" }}>
          <Reveal>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                background: "linear-gradient(135deg, var(--primary) 0%, #6366f1 100%)",
                borderRadius: 100,
                padding: "8px 18px",
                marginBottom: 24,
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
                  fontWeight: 700,
                  color: "white",
                  letterSpacing: 1.5,
                  textTransform: "uppercase",
                }}
              >
                The Vaultly Brief
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <h1
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: isMobile ? "2rem" : isTablet ? "2.75rem" : "3.25rem",
                fontWeight: 800,
                letterSpacing: -1.5,
                color: "var(--gray-900)",
                marginBottom: 16,
                lineHeight: 1.1,
              }}
            >
              16 Problems.{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, var(--primary) 0%, #a78bfa 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                4 Patterns.
              </span>
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <p
              style={{
                color: "var(--gray-600)",
                fontSize: isMobile ? 15 : 18,
                lineHeight: 1.7,
                maxWidth: 550,
                margin: "0 auto",
              }}
            >
              Each problem we're solving is bigger than it looks. These articles break down the mechanics, the cost, and the fix.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Filter & Content */}
      <section
        style={{
          padding: isMobile ? "32px 5% 64px" : isTablet ? "40px 5% 80px" : "48px 5% 100px",
        }}
      >
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          {/* Filter tabs */}
          <Reveal delay={0.1}>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: isMobile ? 6 : 10,
                flexWrap: "wrap",
                marginBottom: isMobile ? 32 : 48,
                padding: "0 10px",
              }}
            >
              {FILTER_OPTIONS.map((f) => {
                const active = blogFilter === f.label;
                return (
                  <button
                    key={f.label}
                    onClick={() => setBlogFilter(f.label)}
                    style={{
                      padding: isMobile ? "10px 16px" : "12px 22px",
                      borderRadius: 12,
                      border: "none",
                      background: active
                        ? `linear-gradient(135deg, ${f.color}, ${f.color}dd)`
                        : "var(--gray-100)",
                      color: active ? "white" : "var(--gray-600)",
                      fontSize: isMobile ? 12 : 13,
                      fontWeight: 600,
                      cursor: "pointer",
                      transition: "all 0.3s ease",
                      whiteSpace: "nowrap",
                      fontFamily: "'Inter', sans-serif",
                      boxShadow: active ? `0 8px 24px ${f.color}35` : "none",
                      transform: active ? "scale(1.02)" : "scale(1)",
                    }}
                    onMouseEnter={(e) => {
                      if (!active) {
                        e.currentTarget.style.background = "var(--gray-200)";
                        e.currentTarget.style.transform = "scale(1.02)";
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!active) {
                        e.currentTarget.style.background = "var(--gray-100)";
                        e.currentTarget.style.transform = "scale(1)";
                      }
                    }}
                  >
                    {f.label}
                  </button>
                );
              })}
            </div>
          </Reveal>

          {/* Results count */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: 24,
              padding: "0 4px",
            }}
          >
            <p style={{ color: "var(--gray-500)", fontSize: 14, fontWeight: 500 }}>
              {filteredBlogs.length} article{filteredBlogs.length !== 1 ? "s" : ""}
            </p>
            {blogFilter !== "All" && (
              <button
                onClick={() => setBlogFilter("All")}
                style={{
                  fontSize: 13,
                  color: "var(--primary)",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  fontWeight: 600,
                  display: "flex",
                  alignItems: "center",
                  gap: 4,
                }}
              >
                Clear filter
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            )}
          </div>

          {/* Blog grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: isMobile
                ? "1fr"
                : isTablet
                  ? "repeat(2, 1fr)"
                  : "repeat(3, 1fr)",
              gap: isMobile ? 16 : 24,
            }}
          >
            {filteredBlogs.map((blog, i) => (
              <Reveal key={blog.id} delay={i * 0.03}>
                <BlogCard blog={blog} isMobile={isMobile} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        style={{
          background: "var(--gray-900)",
          padding: isMobile ? "32px 5%" : "48px 5%",
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            justifyContent: "space-between",
            alignItems: isMobile ? "flex-start" : "center",
            gap: isMobile ? 20 : 24,
          }}
        >
          <Logo dark />
          <div
            style={{
              display: "flex",
              flexDirection: isMobile ? "column" : "row",
              alignItems: isMobile ? "flex-start" : "center",
              gap: isMobile ? 12 : 24,
            }}
          >
            <Link
              to="/"
              style={{
                fontSize: 13,
                color: "var(--gray-400)",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--white)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--gray-400)")}
            >
              Home
            </Link>
            <span
              style={{
                width: 4,
                height: 4,
                borderRadius: "50%",
                background: "var(--gray-700)",
                display: isMobile ? "none" : "block",
              }}
            />
            <p style={{ color: "var(--gray-500)", fontSize: 13 }}>
              © 2026 Vaultly Inc.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
