import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Logo, Reveal } from "../components/common";
import { BLOGS } from "../data";
import { useResponsive } from "../hooks";

const CATEGORY_COLORS = {
  "Ghost Charges": "#4949f2",
  "Security Cascade": "#a78bfa",
  "Fronting Tax": "#10b981",
  "Zombie Tools": "#f59e0b",
};

export default function BlogDetailPage() {
  const { slug } = useParams();
  const { isMobile, isTablet } = useResponsive();

  const blog = BLOGS.find((b) => b.slug === slug);
  const currentIndex = BLOGS.findIndex((b) => b.slug === slug);
  const prevBlog = currentIndex > 0 ? BLOGS[currentIndex - 1] : null;
  const nextBlog = currentIndex < BLOGS.length - 1 ? BLOGS[currentIndex + 1] : null;

  // Related blogs from same category
  const relatedBlogs = BLOGS.filter(
    (b) => b.category === blog?.category && b.id !== blog?.id
  ).slice(0, 3);

  const color = blog ? (CATEGORY_COLORS[blog.category] || "#4949f2") : "#4949f2";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!blog) {
    return (
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "40px 5%",
          textAlign: "center",
          background: "var(--gray-50)",
        }}
      >
        <div
          style={{
            width: 80,
            height: 80,
            borderRadius: 20,
            background: "var(--gray-100)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 24,
          }}
        >
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--gray-400)" strokeWidth="1.5">
            <circle cx="12" cy="12" r="10" />
            <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
            <line x1="12" y1="17" x2="12.01" y2="17" />
          </svg>
        </div>
        <h1
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontSize: "2rem",
            fontWeight: 700,
            color: "var(--gray-900)",
            marginBottom: 12,
          }}
        >
          Article not found
        </h1>
        <p style={{ color: "var(--gray-600)", marginBottom: 32, fontSize: 16, lineHeight: 1.6 }}>
          The article you're looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/blog"
          style={{
            background: "var(--primary)",
            color: "white",
            padding: "14px 28px",
            borderRadius: 12,
            fontSize: 15,
            fontWeight: 600,
            textDecoration: "none",
            transition: "all 0.3s ease",
            boxShadow: "0 4px 16px rgba(73, 73, 242, 0.25)",
          }}
        >
          View All Articles
        </Link>
      </div>
    );
  }

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
          padding: isMobile ? "14px 5%" : "18px 5%",
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
          to="/blog"
          style={{
            fontSize: isMobile ? 13 : 14,
            fontWeight: 600,
            color: "var(--gray-700)",
            display: "flex",
            alignItems: "center",
            gap: 8,
            padding: "10px 18px",
            borderRadius: 10,
            background: "var(--gray-50)",
            border: "1px solid var(--gray-200)",
            transition: "all 0.2s ease",
            textDecoration: "none",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "var(--gray-100)";
            e.currentTarget.style.borderColor = "var(--gray-300)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "var(--gray-50)";
            e.currentTarget.style.borderColor = "var(--gray-200)";
          }}
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="19" y1="12" x2="5" y2="12" />
            <polyline points="12 19 5 12 12 5" />
          </svg>
          All Articles
        </Link>
      </nav>

      {/* Hero Header */}
      <header
        style={{
          background: `linear-gradient(135deg, ${color}08 0%, ${color}04 50%, var(--gray-50) 100%)`,
          borderBottom: "1px solid var(--gray-100)",
        }}
      >
        <div
          style={{
            padding: isMobile ? "48px 5% 40px" : isTablet ? "64px 5% 56px" : "80px 5% 72px",
            maxWidth: 900,
            margin: "0 auto",
          }}
        >
          <Reveal>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                marginBottom: 28,
                flexWrap: "wrap",
              }}
            >
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  background: `${color}15`,
                  border: `1.5px solid ${color}30`,
                  borderRadius: 100,
                  padding: "8px 16px",
                }}
              >
                <div
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    background: color,
                  }}
                />
                <span
                  style={{
                    fontSize: 12,
                    fontWeight: 700,
                    color: color,
                    letterSpacing: 1,
                    textTransform: "uppercase",
                  }}
                >
                  {blog.category}
                </span>
              </div>

              <span
                style={{
                  fontSize: 13,
                  color: "var(--gray-500)",
                  fontWeight: 500,
                  background: "var(--white)",
                  padding: "6px 12px",
                  borderRadius: 8,
                  border: "1px solid var(--gray-200)",
                }}
              >
                Problem {blog.problem} · Part {blog.part}
              </span>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                  marginLeft: isMobile ? 0 : "auto",
                  background: "var(--white)",
                  padding: "6px 12px",
                  borderRadius: 8,
                  border: "1px solid var(--gray-200)",
                }}
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="var(--gray-500)"
                  strokeWidth="2"
                >
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
                <span style={{ fontSize: 13, color: "var(--gray-600)", fontWeight: 500 }}>
                  {blog.readTime} read
                </span>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <h1
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: isMobile ? "1.85rem" : isTablet ? "2.5rem" : "3rem",
                fontWeight: 800,
                letterSpacing: -1.5,
                color: "var(--gray-900)",
                lineHeight: 1.15,
                marginBottom: 24,
              }}
            >
              {blog.title}
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <p
              style={{
                fontSize: isMobile ? 17 : 20,
                color: "var(--gray-600)",
                lineHeight: 1.7,
                maxWidth: 720,
              }}
            >
              {blog.excerpt}
            </p>
          </Reveal>
        </div>
      </header>

      {/* Article Content */}
      <article
        style={{
          padding: isMobile ? "40px 5% 56px" : "56px 5% 72px",
          maxWidth: 900,
          margin: "0 auto",
        }}
      >
        <Reveal delay={0.3}>
          <div
            style={{
              background: "var(--white)",
              borderRadius: 20,
              border: "1px solid var(--gray-150)",
              padding: isMobile ? "36px 24px" : isTablet ? "48px 40px" : "56px 64px",
              boxShadow: "0 4px 30px rgba(0, 0, 0, 0.03), 0 1px 3px rgba(0, 0, 0, 0.02)",
            }}
          >
            {blog.content?.map((block, i) => {
              if (block.type === "heading") {
                return (
                  <h2
                    key={i}
                    style={{
                      fontFamily: "'Poppins', sans-serif",
                      fontSize: isMobile ? "1.35rem" : "1.65rem",
                      fontWeight: 700,
                      color: "var(--gray-900)",
                      marginTop: i === 0 ? 0 : 44,
                      marginBottom: 20,
                      letterSpacing: -0.5,
                      display: "flex",
                      alignItems: "flex-start",
                      gap: 16,
                      lineHeight: 1.3,
                    }}
                  >
                    <span
                      style={{
                        width: 5,
                        minHeight: 28,
                        borderRadius: 3,
                        background: `linear-gradient(180deg, ${color}, ${color}88)`,
                        flexShrink: 0,
                        marginTop: 4,
                      }}
                    />
                    {block.text}
                  </h2>
                );
              }

              return (
                <p
                  key={i}
                  style={{
                    fontSize: isMobile ? 16 : 18,
                    color: "var(--gray-700)",
                    lineHeight: 1.9,
                    marginBottom: 24,
                    fontFamily: "'Inter', sans-serif",
                  }}
                >
                  {block.text}
                </p>
              );
            })}
          </div>
        </Reveal>

        {/* Article Navigation */}
        <Reveal delay={0.4}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
              gap: 16,
              marginTop: 40,
            }}
          >
            {prevBlog && (
              <Link
                to={`/blog/${prevBlog.slug}`}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 16,
                  padding: "24px",
                  background: "var(--white)",
                  borderRadius: 16,
                  border: "1.5px solid var(--gray-150)",
                  textDecoration: "none",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = CATEGORY_COLORS[prevBlog.category] || "var(--primary)";
                  e.currentTarget.style.transform = "translateY(-3px)";
                  e.currentTarget.style.boxShadow = "0 12px 24px rgba(0, 0, 0, 0.08)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--gray-150)";
                  e.currentTarget.style.transform = "";
                  e.currentTarget.style.boxShadow = "";
                }}
              >
                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: 12,
                    background: "var(--gray-50)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="var(--gray-500)"
                    strokeWidth="2"
                  >
                    <line x1="19" y1="12" x2="5" y2="12" />
                    <polyline points="12 19 5 12 12 5" />
                  </svg>
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 12, color: "var(--gray-400)", marginBottom: 6, textTransform: "uppercase", letterSpacing: 1, fontWeight: 600 }}>
                    Previous
                  </div>
                  <div
                    style={{
                      fontSize: 15,
                      fontWeight: 600,
                      color: "var(--gray-900)",
                      display: "-webkit-box",
                      WebkitLineClamp: 1,
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                      lineHeight: 1.4,
                    }}
                  >
                    {prevBlog.title}
                  </div>
                </div>
              </Link>
            )}

            {nextBlog && (
              <Link
                to={`/blog/${nextBlog.slug}`}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-end",
                  gap: 16,
                  padding: "24px",
                  background: "var(--white)",
                  borderRadius: 16,
                  border: "1.5px solid var(--gray-150)",
                  textDecoration: "none",
                  transition: "all 0.3s ease",
                  marginLeft: !prevBlog && !isMobile ? "auto" : 0,
                  gridColumn: !prevBlog && !isMobile ? "2" : "auto",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = CATEGORY_COLORS[nextBlog.category] || "var(--primary)";
                  e.currentTarget.style.transform = "translateY(-3px)";
                  e.currentTarget.style.boxShadow = "0 12px 24px rgba(0, 0, 0, 0.08)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--gray-150)";
                  e.currentTarget.style.transform = "";
                  e.currentTarget.style.boxShadow = "";
                }}
              >
                <div style={{ textAlign: "right", flex: 1 }}>
                  <div style={{ fontSize: 12, color: "var(--gray-400)", marginBottom: 6, textTransform: "uppercase", letterSpacing: 1, fontWeight: 600 }}>
                    Next
                  </div>
                  <div
                    style={{
                      fontSize: 15,
                      fontWeight: 600,
                      color: "var(--gray-900)",
                      display: "-webkit-box",
                      WebkitLineClamp: 1,
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                      lineHeight: 1.4,
                    }}
                  >
                    {nextBlog.title}
                  </div>
                </div>
                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: 12,
                    background: "var(--gray-50)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="var(--gray-500)"
                    strokeWidth="2"
                  >
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </div>
              </Link>
            )}
          </div>
        </Reveal>
      </article>

      {/* Related Articles */}
      {relatedBlogs.length > 0 && (
        <section
          style={{
            padding: isMobile ? "56px 5%" : "72px 5%",
            background: "var(--gray-50)",
            borderTop: "1px solid var(--gray-100)",
          }}
        >
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <Reveal>
              <div style={{ textAlign: "center", marginBottom: 40 }}>
                <span
                  style={{
                    display: "inline-block",
                    fontSize: 11,
                    fontWeight: 700,
                    color: color,
                    letterSpacing: 1.5,
                    textTransform: "uppercase",
                    background: `${color}12`,
                    padding: "6px 14px",
                    borderRadius: 8,
                    marginBottom: 16,
                  }}
                >
                  Related Articles
                </span>
                <h2
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: isMobile ? "1.6rem" : "2rem",
                    fontWeight: 700,
                    color: "var(--gray-900)",
                    letterSpacing: -0.5,
                  }}
                >
                  More on{" "}
                  <span style={{ color: color }}>{blog.category}</span>
                </h2>
              </div>
            </Reveal>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: isMobile ? "1fr" : isTablet ? "1fr 1fr" : "repeat(3, 1fr)",
                gap: 24,
              }}
            >
              {relatedBlogs.map((relatedBlog, i) => (
                <Reveal key={relatedBlog.id} delay={i * 0.1}>
                  <Link
                    to={`/blog/${relatedBlog.slug}`}
                    style={{
                      display: "block",
                      background: "var(--white)",
                      borderRadius: 16,
                      padding: 28,
                      border: "1.5px solid var(--gray-150)",
                      textDecoration: "none",
                      transition: "all 0.3s ease",
                      height: "100%",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = relatedBlog.color;
                      e.currentTarget.style.transform = "translateY(-5px)";
                      e.currentTarget.style.boxShadow = `0 16px 32px rgba(0, 0, 0, 0.1)`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = "var(--gray-150)";
                      e.currentTarget.style.transform = "";
                      e.currentTarget.style.boxShadow = "";
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        marginBottom: 16,
                      }}
                    >
                      <span
                        style={{
                          fontSize: 11,
                          fontWeight: 700,
                          color: relatedBlog.color,
                          letterSpacing: 1,
                          textTransform: "uppercase",
                          background: `${relatedBlog.color}12`,
                          padding: "5px 10px",
                          borderRadius: 6,
                        }}
                      >
                        Part {relatedBlog.part}
                      </span>
                      <span
                        style={{
                          fontSize: 12,
                          color: "var(--gray-500)",
                          fontWeight: 500,
                        }}
                      >
                        {relatedBlog.readTime}
                      </span>
                    </div>
                    <h3
                      style={{
                        fontFamily: "'Poppins', sans-serif",
                        fontSize: "1.1rem",
                        fontWeight: 700,
                        color: "var(--gray-900)",
                        lineHeight: 1.4,
                        marginBottom: 12,
                        display: "-webkit-box",
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                      }}
                    >
                      {relatedBlog.title}
                    </h3>
                    <p
                      style={{
                        fontSize: 14,
                        color: "var(--gray-600)",
                        lineHeight: 1.6,
                        marginBottom: 20,
                        display: "-webkit-box",
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                      }}
                    >
                      {relatedBlog.excerpt}
                    </p>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 8,
                        color: relatedBlog.color,
                        fontSize: 13,
                        fontWeight: 600,
                      }}
                    >
                      Read article
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <polyline points="12 5 19 12 12 19" />
                      </svg>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section
        style={{
          padding: isMobile ? "56px 5%" : "72px 5%",
          background: "var(--white)",
        }}
      >
        <Reveal>
          <div
            style={{
              maxWidth: 850,
              margin: "0 auto",
              background: `linear-gradient(135deg, ${color} 0%, ${color}dd 100%)`,
              borderRadius: 24,
              padding: isMobile ? "40px 24px" : "56px 48px",
              textAlign: "center",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Decorative elements */}
            <div
              style={{
                position: "absolute",
                top: -60,
                right: -60,
                width: 200,
                height: 200,
                borderRadius: "50%",
                background: "rgba(255, 255, 255, 0.1)",
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
                background: "rgba(255, 255, 255, 0.08)",
                pointerEvents: "none",
              }}
            />

            <h3
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: isMobile ? "1.65rem" : "2.25rem",
                fontWeight: 800,
                color: "white",
                marginBottom: 16,
                position: "relative",
                letterSpacing: -0.5,
              }}
            >
              Ready to stop the leaks?
            </h3>
            <p
              style={{
                color: "rgba(255, 255, 255, 0.9)",
                fontSize: isMobile ? 16 : 18,
                marginBottom: 32,
                maxWidth: 520,
                margin: "0 auto 32px",
                lineHeight: 1.7,
                position: "relative",
              }}
            >
              Join early supporters getting access to programmable smart cards
              that block unauthorized charges automatically.
            </p>
            <Link
              to="/#section-hero"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                background: "white",
                color: color,
                padding: "16px 32px",
                borderRadius: 14,
                fontSize: 16,
                fontWeight: 700,
                textDecoration: "none",
                transition: "all 0.3s ease",
                boxShadow: "0 8px 24px rgba(0, 0, 0, 0.15)",
                position: "relative",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-3px)";
                e.currentTarget.style.boxShadow = "0 12px 32px rgba(0, 0, 0, 0.2)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "";
                e.currentTarget.style.boxShadow = "0 8px 24px rgba(0, 0, 0, 0.15)";
              }}
            >
              Get Early Access
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
          </div>
        </Reveal>
      </section>

      {/* Footer */}
      <footer
        style={{
          background: "var(--gray-900)",
          padding: isMobile ? "36px 5%" : "52px 5%",
          borderTop: "1px solid var(--gray-800)",
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
            gap: isMobile ? 24 : 24,
          }}
        >
          <Logo dark />
          <div
            style={{
              display: "flex",
              flexDirection: isMobile ? "column" : "row",
              alignItems: isMobile ? "flex-start" : "center",
              gap: isMobile ? 16 : 28,
            }}
          >
            <Link
              to="/"
              style={{
                fontSize: 14,
                color: "var(--gray-400)",
                transition: "color 0.2s",
                textDecoration: "none",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--white)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--gray-400)")}
            >
              Home
            </Link>
            <Link
              to="/blog"
              style={{
                fontSize: 14,
                color: "var(--gray-400)",
                transition: "color 0.2s",
                textDecoration: "none",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--white)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--gray-400)")}
            >
              Articles
            </Link>
            <Link
              to="/privacy"
              style={{
                fontSize: 14,
                color: "var(--gray-400)",
                transition: "color 0.2s",
                textDecoration: "none",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--white)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--gray-400)")}
            >
              Privacy
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
            <p style={{ color: "var(--gray-500)", fontSize: 14 }}>
              © 2026 Vaultly Inc.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
