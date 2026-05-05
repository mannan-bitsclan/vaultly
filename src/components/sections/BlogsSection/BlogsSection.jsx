import { useState } from "react";
import { Link } from "react-router-dom";
import { Reveal } from "../../common";
import { BLOGS } from "../../../data";
import { useResponsive } from "../../../hooks";
import { categoryToSlug } from "../../../utils";
import "./BlogsSection.css";

const CATEGORY_COLORS = {
  "Ghost Charges": "#4949f2",
  "Security Cascade": "#a78bfa",
  "Fronting Tax": "#10b981",
  "Zombie Tools": "#f59e0b",
};

function ModernBlogCard({ blog, isMobile }) {
  const [isHovered, setIsHovered] = useState(false);
  const color = CATEGORY_COLORS[blog.category] || "#4949f2";

  const contentClasses = [
    "blog-card__content d-flex flex-column",
    isMobile && "blog-card__content--mobile",
  ].filter(Boolean).join(" ");

  const titleClasses = [
    "blog-card__title",
    isMobile && "blog-card__title--mobile",
  ].filter(Boolean).join(" ");

  const excerptClasses = [
    "blog-card__excerpt",
    isMobile && "blog-card__excerpt--mobile",
  ].filter(Boolean).join(" ");

  return (
    <Link
      to={`/blog/${categoryToSlug(blog.category)}/${blog.slug}`}
      className="blog-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className="blog-card__inner d-flex flex-column"
        style={{
          borderColor: isHovered ? color : undefined,
          boxShadow: isHovered
            ? `0 20px 40px -12px rgba(0, 0, 0, 0.18), 0 0 0 1px ${color}30`
            : undefined,
        }}
      >
        {/* Gradient accent bar */}
        <div
          className="blog-card__accent"
          style={{
            background: `linear-gradient(90deg, ${color}, ${color}cc)`,
          }}
        />

        {/* Content */}
        <div className={contentClasses}>
          {/* Category & Read Time */}
          <div className="blog-card__meta d-flex align-items-center justify-content-between">
            <span
              className="blog-card__category"
              style={{
                color: color,
                background: `${color}12`,
              }}
            >
              {blog.category}
            </span>
            <span className="blog-card__read-time">{blog.readTime}</span>
          </div>

          {/* Title */}
          <h3 className={titleClasses}>{blog.title}</h3>

          {/* Excerpt */}
          <p className={excerptClasses}>{blog.excerpt}</p>

          {/* Read more */}
          <div
            className="blog-card__read-more d-flex align-items-center"
            style={{ color: isHovered ? color : undefined }}
          >
            <span>Read article</span>
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
          </div>
        </div>
      </div>
    </Link>
  );
}

function FeaturedCard({ blog, isMobile, isTablet }) {
  const [isHovered, setIsHovered] = useState(false);
  const color = CATEGORY_COLORS[blog.category] || "#4949f2";

  const contentClasses = [
    "featured-card__content",
    isMobile ? "featured-card__content--mobile" : isTablet ? "featured-card__content--tablet" : "featured-card__content--desktop",
  ].join(" ");

  const titleClasses = [
    "featured-card__title",
    isMobile ? "featured-card__title--mobile" : isTablet ? "featured-card__title--tablet" : "",
  ].filter(Boolean).join(" ");

  const excerptClasses = [
    "featured-card__excerpt",
    isMobile && "featured-card__excerpt--mobile",
  ].filter(Boolean).join(" ");

  return (
    <Link
      to={`/blog/${categoryToSlug(blog.category)}/${blog.slug}`}
      className="featured-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className="featured-card__inner"
        style={{
          background: `linear-gradient(135deg, ${color} 0%, ${color}dd 100%)`,
          boxShadow: isHovered
            ? `0 30px 60px -12px ${color}50`
            : `0 20px 40px -12px ${color}30`,
        }}
      >
        {/* Decorative elements */}
        <div className="featured-card__circle-lg" />
        <div className="featured-card__circle-sm" />

        {/* Content */}
        <div className={contentClasses}>
          <div className="featured-card__meta d-flex align-items-center">
            <span className="featured-card__badge">Featured</span>
            <span className="featured-card__read-time">{blog.readTime} read</span>
          </div>

          <h3 className={titleClasses}>{blog.title}</h3>

          <p className={excerptClasses}>{blog.excerpt}</p>

          <div
            className="featured-card__cta d-inline-flex align-items-center"
            style={{ color: color }}
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

  const sectionClasses = [
    "blogs-section",
    isMobile ? "blogs-section--mobile" : isTablet ? "blogs-section--tablet" : "blogs-section--desktop",
  ].join(" ");

  const headerClasses = [
    "blogs-section__header text-center",
    isMobile && "blogs-section__header--mobile",
  ].filter(Boolean).join(" ");

  const eyebrowClasses = [
    "blogs-section__eyebrow",
    isMobile && "blogs-section__eyebrow--mobile",
  ].filter(Boolean).join(" ");

  const titleClasses = [
    "blogs-section__title",
    isMobile ? "blogs-section__title--mobile" : isTablet ? "blogs-section__title--tablet" : "",
  ].filter(Boolean).join(" ");

  const subtitleClasses = [
    "blogs-section__subtitle",
    isMobile && "blogs-section__subtitle--mobile",
  ].filter(Boolean).join(" ");

  const gridClasses = [
    "blogs-section__grid",
    isMobile ? "blogs-section__grid--mobile" : isTablet ? "blogs-section__grid--tablet" : "blogs-section__grid--desktop",
  ].join(" ");

  const viewAllClasses = [
    "blogs-section__view-all text-center",
    isMobile && "blogs-section__view-all--mobile",
  ].filter(Boolean).join(" ");

  return (
    <section id="section-blog" className={sectionClasses}>
      {/* Subtle background gradient */}
      <div className="blogs-section__bg-gradient" />

      <div className="blogs-section__container mx-auto">
        {/* Header */}
        <Reveal>
          <div className={headerClasses}>
            <h2 className={eyebrowClasses}>Our Insights</h2>

            <h3 className={titleClasses}>
              The Problems{" "}
              <span className="highlighted-text">Nobody Talks About</span>
            </h3>

            <p className={subtitleClasses}>
              Deep dives into the hidden costs draining your budget. Real numbers, real solutions.
            </p>
          </div>
        </Reveal>

        {/* Featured blog - Desktop only */}
        {!isMobile && (
          <Reveal delay={0.1}>
            <div className="blogs-section__featured">
              <FeaturedCard
                blog={featuredBlog}
                isMobile={isMobile}
                isTablet={isTablet}
              />
            </div>
          </Reveal>
        )}

        {/* Blog grid */}
        <div className={gridClasses}>
          {gridBlogs.map((blog, i) => (
            <Reveal key={blog.id} delay={0.1 + i * 0.05}>
              <ModernBlogCard blog={blog} isMobile={isMobile} />
            </Reveal>
          ))}
        </div>

        {/* View all button */}
        <Reveal delay={0.3}>
          <div className={viewAllClasses}>
            <Link to="/blog" className="blogs-section__view-all-btn d-inline-flex align-items-center">
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
