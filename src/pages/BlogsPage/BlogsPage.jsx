import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Logo, Reveal } from "../../components/common";
import { BLOGS } from "../../data";
import { useResponsive } from "../../hooks";
import { categoryToSlug } from "../../utils";
import "./BlogsPage.css";

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
  const color = CATEGORY_COLORS[blog.category] || "#4949f2";

  const titleClasses = [
    "blogs-page__card-title",
    isMobile ? "blogs-page__card-title--mobile" : "blogs-page__card-title--desktop",
  ].join(" ");

  return (
    <Link
      to={`/blog/${categoryToSlug(blog.category)}/${blog.slug}`}
      className="blogs-page__card d-flex flex-column"
      style={{
        "--card-color": color,
        borderColor: `${color}40`,
        boxShadow: `0 25px 50px -12px rgba(0, 0, 0, 0.15), 0 0 0 1px ${color}20`,
      }}
    >
      {/* Gradient header */}
      <div
        className="blogs-page__card-header"
        style={{ background: `linear-gradient(135deg, ${color}15, ${color}05)` }}
      >
        <div
          className="blogs-page__card-header-circle"
          style={{ background: `${color}15` }}
        />
        <div className="blogs-page__card-header-content d-flex align-items-center">
          <div
            className="blogs-page__card-icon d-flex align-items-center justify-content-center"
            style={{
              background: color,
              boxShadow: `0 8px 20px ${color}40`,
            }}
          >
            {blog.problem}
          </div>
          <div>
            <span className="blogs-page__card-category" style={{ color }}>
              {blog.category}
            </span>
            <div className="blogs-page__card-part">Part {blog.part}</div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="blogs-page__card-content d-flex flex-column">
        <h3 className={titleClasses}>{blog.title}</h3>
        <p className="blogs-page__card-excerpt">{blog.excerpt}</p>

        <div className="blogs-page__card-footer d-flex align-items-center justify-content-between">
          <span className="blogs-page__card-time">{blog.readTime}</span>
          <div className="blogs-page__card-read d-flex align-items-center" style={{ color }}>
            <span>Read</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
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

  const navClasses = [
    "blogs-page__nav d-flex justify-content-between align-items-center",
    isMobile ? "blogs-page__nav--mobile" : "blogs-page__nav--desktop",
  ].join(" ");

  const heroClasses = [
    "blogs-page__hero position-relative overflow-hidden",
    isMobile ? "blogs-page__hero--mobile" : isTablet ? "blogs-page__hero--tablet" : "blogs-page__hero--desktop",
  ].join(" ");

  const titleClasses = [
    "blogs-page__hero-title",
    isMobile ? "blogs-page__hero-title--mobile" : isTablet ? "blogs-page__hero-title--tablet" : "blogs-page__hero-title--desktop",
  ].join(" ");

  const subtitleClasses = [
    "blogs-page__hero-subtitle",
    isMobile ? "blogs-page__hero-subtitle--mobile" : "blogs-page__hero-subtitle--desktop",
  ].join(" ");

  const filterSectionClasses = [
    "blogs-page__filter-section",
    isMobile ? "blogs-page__filter-section--mobile" : isTablet ? "blogs-page__filter-section--tablet" : "",
  ].filter(Boolean).join(" ");

  const filtersClasses = [
    "blogs-page__filters d-flex",
    isMobile ? "blogs-page__filters--mobile" : "blogs-page__filters--desktop",
  ].join(" ");

  const gridClasses = [
    "blogs-page__grid",
    isMobile ? "blogs-page__grid--mobile" : isTablet ? "blogs-page__grid--tablet" : "blogs-page__grid--desktop",
  ].join(" ");

  const footerClasses = [
    "blogs-page__footer",
    isMobile ? "blogs-page__footer--mobile" : "blogs-page__footer--desktop",
  ].join(" ");

  return (
    <div className="blogs-page">
      {/* Navigation */}
      <nav className={navClasses}>
        <Link to="/">
          <Logo compact={isMobile} />
        </Link>
        <Link
          to="/"
          className={`blogs-page__nav-home d-flex align-items-center ${isMobile ? "blogs-page__nav-home--mobile" : "blogs-page__nav-home--desktop"}`}
          style={{ gap: 6 }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
            <polyline points="9 22 9 12 15 12 15 22" />
          </svg>
          {!isMobile && "Home"}
        </Link>
      </nav>

      {/* Hero Section */}
      <section className={heroClasses}>
        <div className="blogs-page__hero-orb blogs-page__hero-orb--left" />
        <div className="blogs-page__hero-orb blogs-page__hero-orb--right" />

        <div className="blogs-page__hero-content position-relative">
          <Reveal>
            <div className="blogs-page__hero-badge d-inline-flex align-items-center">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
              </svg>
              <span className="blogs-page__hero-badge-text">The Vaultly Brief</span>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className={titleClasses}>
              16 Problems.{" "}
              <span className="text-gradient-primary">4 Patterns.</span>
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <p className={subtitleClasses}>
              Each problem we're solving is bigger than it looks. These articles break down the mechanics, the cost, and the fix.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Filter & Content */}
      <section className={filterSectionClasses}>
        <div className="blogs-page__filter-container">
          {/* Filter tabs */}
          <Reveal delay={0.1}>
            <div className={filtersClasses}>
              {FILTER_OPTIONS.map((f) => {
                const active = blogFilter === f.label;
                return (
                  <button
                    key={f.label}
                    onClick={() => setBlogFilter(f.label)}
                    className={`blogs-page__filter-btn ${isMobile ? "blogs-page__filter-btn--mobile" : "blogs-page__filter-btn--desktop"} ${active ? "blogs-page__filter-btn--active" : "blogs-page__filter-btn--inactive"}`}
                    style={active ? {
                      background: `linear-gradient(135deg, ${f.color}, ${f.color}dd)`,
                      boxShadow: `0 8px 24px ${f.color}35`,
                      transform: "scale(1.02)",
                    } : {}}
                  >
                    {f.label}
                  </button>
                );
              })}
            </div>
          </Reveal>

          {/* Results count */}
          <div className="blogs-page__results d-flex align-items-center justify-content-between">
            <p className="blogs-page__results-count">
              {filteredBlogs.length} article{filteredBlogs.length !== 1 ? "s" : ""}
            </p>
            {blogFilter !== "All" && (
              <button
                onClick={() => setBlogFilter("All")}
                className="blogs-page__clear-btn d-flex align-items-center"
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
          <div className={gridClasses}>
            {filteredBlogs.map((blog, i) => (
              <Reveal key={blog.id} delay={i * 0.03}>
                <BlogCard blog={blog} isMobile={isMobile} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={footerClasses}>
        <div className={`blogs-page__footer-content d-flex ${isMobile ? "flex-column align-items-start" : "flex-row justify-content-between align-items-center"}`} style={{ gap: isMobile ? 20 : 24 }}>
          <Logo dark />
          <div className={`d-flex ${isMobile ? "flex-column align-items-start" : "flex-row align-items-center"}`} style={{ gap: isMobile ? 12 : 24 }}>
            <Link to="/" className="blogs-page__footer-link">Home</Link>
            {!isMobile && <span className="blogs-page__footer-dot" />}
            <p className="blogs-page__footer-copyright">© 2026 Vaultly Inc.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
