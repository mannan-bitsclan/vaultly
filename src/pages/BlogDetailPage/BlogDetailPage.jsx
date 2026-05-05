import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Logo, Reveal } from "../../components/common";
import { BLOGS } from "../../data";
import { useResponsive } from "../../hooks";
import { categoryToSlug } from "../../utils";
import "./BlogDetailPage.css";

const CATEGORY_COLORS = {
  "Ghost Charges": "#4949f2",
  "Security Cascade": "#a78bfa",
  "Fronting Tax": "#10b981",
  "Zombie Tools": "#f59e0b",
};

export default function BlogDetailPage() {
  const { category: categorySlug, slug } = useParams();
  const { isMobile, isTablet } = useResponsive();
  const [shareMessage, setShareMessage] = useState("");

  const blog = BLOGS.find((b) => b.slug === slug);

  // Share functionality
  const handleShare = async () => {
    const shareUrl = window.location.href;
    const shareTitle = blog?.title || "Vaultly Blog";
    const shareText = blog?.excerpt || "";

    // Try native share API first (mobile)
    if (navigator.share) {
      try {
        await navigator.share({
          title: shareTitle,
          text: shareText,
          url: shareUrl,
        });
        return;
      } catch (err) {
        // User cancelled or error, fall through to clipboard
        if (err.name === "AbortError") return;
      }
    }

    // Fallback to clipboard
    try {
      await navigator.clipboard.writeText(shareUrl);
      setShareMessage("Link copied!");
      setTimeout(() => setShareMessage(""), 2000);
    } catch (err) {
      setShareMessage("Failed to copy");
      setTimeout(() => setShareMessage(""), 2000);
    }
  };
  const currentIndex = BLOGS.findIndex((b) => b.slug === slug);
  const prevBlog = currentIndex > 0 ? BLOGS[currentIndex - 1] : null;
  const nextBlog = currentIndex < BLOGS.length - 1 ? BLOGS[currentIndex + 1] : null;

  const relatedBlogs = BLOGS.filter(
    (b) => b.category === blog?.category && b.id !== blog?.id
  ).slice(0, 3);

  const color = blog ? (CATEGORY_COLORS[blog.category] || "#4949f2") : "#4949f2";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!blog) {
    return (
      <div className="blog-detail-page__not-found d-flex flex-column align-items-center justify-content-center">
        <div className="blog-detail-page__not-found-icon d-flex align-items-center justify-content-center">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--gray-400)" strokeWidth="1.5">
            <circle cx="12" cy="12" r="10" />
            <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
            <line x1="12" y1="17" x2="12.01" y2="17" />
          </svg>
        </div>
        <h1 className="blog-detail-page__not-found-title">Article not found</h1>
        <p className="blog-detail-page__not-found-text">
          The article you're looking for doesn't exist or has been moved.
        </p>
        <Link to="/blog" className="blog-detail-page__not-found-btn">
          View All Articles
        </Link>
      </div>
    );
  }

  const navClasses = [
    "blog-detail-page__nav d-flex justify-content-between align-items-center",
    isMobile ? "blog-detail-page__nav--mobile" : "blog-detail-page__nav--desktop",
  ].join(" ");

  const headerContentClasses = [
    "blog-detail-page__header-content",
    isMobile ? "blog-detail-page__header-content--mobile" : isTablet ? "blog-detail-page__header-content--tablet" : "blog-detail-page__header-content--desktop",
  ].join(" ");

  const titleClasses = [
    "blog-detail-page__title",
    isMobile ? "blog-detail-page__title--mobile" : isTablet ? "blog-detail-page__title--tablet" : "blog-detail-page__title--desktop",
  ].join(" ");

  const excerptClasses = [
    "blog-detail-page__excerpt",
    isMobile ? "blog-detail-page__excerpt--mobile" : "blog-detail-page__excerpt--desktop",
  ].join(" ");

  const articleClasses = [
    "blog-detail-page__article",
    isMobile ? "blog-detail-page__article--mobile" : "blog-detail-page__article--desktop",
  ].join(" ");

  const articleCardClasses = [
    "blog-detail-page__article-card",
    isMobile ? "blog-detail-page__article-card--mobile" : isTablet ? "blog-detail-page__article-card--tablet" : "blog-detail-page__article-card--desktop",
  ].join(" ");

  const relatedClasses = [
    "blog-detail-page__related",
    isMobile ? "blog-detail-page__related--mobile" : "blog-detail-page__related--desktop",
  ].join(" ");

  const relatedGridClasses = [
    "blog-detail-page__related-grid",
    isMobile ? "blog-detail-page__related-grid--mobile" : isTablet ? "blog-detail-page__related-grid--tablet" : "blog-detail-page__related-grid--desktop",
  ].join(" ");

  const footerClasses = [
    "blog-detail-page__footer",
    isMobile ? "blog-detail-page__footer--mobile" : "blog-detail-page__footer--desktop",
  ].join(" ");

  return (
    <div className="blog-detail-page">
      {/* Navigation */}
      <nav className={navClasses}>
        <Link to="/">
          <Logo compact={isMobile} />
        </Link>
        <Link
          to="/blog"
          className={`blog-detail-page__nav-back d-flex align-items-center ${isMobile ? "blog-detail-page__nav-back--mobile" : "blog-detail-page__nav-back--desktop"}`}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="19" y1="12" x2="5" y2="12" />
            <polyline points="12 19 5 12 12 5" />
          </svg>
          All Articles
        </Link>
      </nav>

      {/* Hero Header */}
      <header
        className="blog-detail-page__header"
        style={{ background: `linear-gradient(135deg, ${color}08 0%, ${color}04 50%, var(--gray-50) 100%)` }}
      >
        <div className={headerContentClasses}>
          <Reveal>
            <div className="blog-detail-page__meta d-flex align-items-center">
              <div
                className="blog-detail-page__category-badge d-inline-flex align-items-center"
                style={{ background: `${color}15`, border: `1.5px solid ${color}30` }}
              >
                <div className="blog-detail-page__category-dot" style={{ background: color }} />
                <span className="blog-detail-page__category-text" style={{ color }}>{blog.category}</span>
              </div>

              <div className="blog-detail-page__time-badge d-flex align-items-center">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--gray-500)" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
                <span className="blog-detail-page__time-text">{blog.readTime} read</span>
              </div>

              <button
                onClick={handleShare}
                className="blog-detail-page__share-btn d-flex align-items-center"
                style={{
                  marginLeft: isMobile ? 0 : "auto",
                  background: shareMessage ? `${color}15` : undefined,
                  borderColor: shareMessage ? `${color}30` : undefined,
                }}
              >
                {shareMessage ? (
                  <>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span style={{ color }}>{shareMessage}</span>
                  </>
                ) : (
                  <>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="18" cy="5" r="3" />
                      <circle cx="6" cy="12" r="3" />
                      <circle cx="18" cy="19" r="3" />
                      <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
                      <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
                    </svg>
                    <span>Share</span>
                  </>
                )}
              </button>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className={titleClasses}>{blog.title}</h1>
          </Reveal>

          <Reveal delay={0.2}>
            <p className={excerptClasses}>{blog.excerpt}</p>
          </Reveal>
        </div>
      </header>

      {/* Article Content */}
      <article className={articleClasses}>
        <Reveal delay={0.3}>
          <div className={articleCardClasses}>
            {blog.content?.map((block, i) => {
              if (block.type === "heading") {
                return (
                  <h2
                    key={i}
                    className={`blog-detail-page__content-heading d-flex align-items-start ${isMobile ? "blog-detail-page__content-heading--mobile" : "blog-detail-page__content-heading--desktop"}`}
                    style={{ marginTop: i === 0 ? 0 : 44 }}
                  >
                    <span
                      className="blog-detail-page__content-heading-bar"
                      style={{ background: `linear-gradient(180deg, ${color}, ${color}88)` }}
                    />
                    {block.text}
                  </h2>
                );
              }
              return (
                <p
                  key={i}
                  className={`blog-detail-page__content-paragraph ${isMobile ? "blog-detail-page__content-paragraph--mobile" : "blog-detail-page__content-paragraph--desktop"}`}
                >
                  {block.text}
                </p>
              );
            })}
          </div>
        </Reveal>

        {/* Article Navigation */}
        <Reveal delay={0.4}>
          <div className={`blog-detail-page__nav-links ${isMobile ? "blog-detail-page__nav-links--mobile" : "blog-detail-page__nav-links--desktop"}`}>
            {prevBlog && (
              <Link
                to={`/blog/${categoryToSlug(prevBlog.category)}/${prevBlog.slug}`}
                className="blog-detail-page__nav-link d-flex align-items-center"
                style={{ "--link-color": CATEGORY_COLORS[prevBlog.category] || "var(--primary)" }}
              >
                <div className="blog-detail-page__nav-link-icon d-flex align-items-center justify-content-center">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--gray-500)" strokeWidth="2">
                    <line x1="19" y1="12" x2="5" y2="12" />
                    <polyline points="12 19 5 12 12 5" />
                  </svg>
                </div>
                <div style={{ flex: 1 }}>
                  <div className="blog-detail-page__nav-link-label">Previous</div>
                  <div className="blog-detail-page__nav-link-title">{prevBlog.title}</div>
                </div>
              </Link>
            )}

            {nextBlog && (
              <Link
                to={`/blog/${categoryToSlug(nextBlog.category)}/${nextBlog.slug}`}
                className="blog-detail-page__nav-link d-flex align-items-center justify-content-end"
                style={{
                  "--link-color": CATEGORY_COLORS[nextBlog.category] || "var(--primary)",
                  marginLeft: !prevBlog && !isMobile ? "auto" : 0,
                  gridColumn: !prevBlog && !isMobile ? "2" : "auto",
                }}
              >
                <div style={{ textAlign: "right", flex: 1 }}>
                  <div className="blog-detail-page__nav-link-label">Next</div>
                  <div className="blog-detail-page__nav-link-title">{nextBlog.title}</div>
                </div>
                <div className="blog-detail-page__nav-link-icon d-flex align-items-center justify-content-center">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--gray-500)" strokeWidth="2">
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
        <section className={relatedClasses}>
          <div className="blog-detail-page__related-container">
            <Reveal>
              <div className="blog-detail-page__related-header">
                <span
                  className="blog-detail-page__related-badge d-inline-block"
                  style={{ color, background: `${color}12` }}
                >
                  Related Articles
                </span>
                <h2 className={`blog-detail-page__related-title ${isMobile ? "blog-detail-page__related-title--mobile" : "blog-detail-page__related-title--desktop"}`}>
                  More on <span style={{ color }}>{blog.category}</span>
                </h2>
              </div>
            </Reveal>

            <div className={relatedGridClasses}>
              {relatedBlogs.map((relatedBlog, i) => (
                <Reveal key={relatedBlog.id} delay={i * 0.1}>
                  <Link
                    to={`/blog/${categoryToSlug(relatedBlog.category)}/${relatedBlog.slug}`}
                    className="blog-detail-page__related-card d-block"
                    style={{ "--card-color": relatedBlog.color }}
                  >
                    <div className="blog-detail-page__related-card-header d-flex align-items-center justify-content-between">
                      <span
                        className="blog-detail-page__related-card-part"
                        style={{ color: relatedBlog.color, background: `${relatedBlog.color}12` }}
                      >
                        Part {relatedBlog.part}
                      </span>
                      <span className="blog-detail-page__related-card-time">{relatedBlog.readTime}</span>
                    </div>
                    <h3 className="blog-detail-page__related-card-title">{relatedBlog.title}</h3>
                    <p className="blog-detail-page__related-card-excerpt">{relatedBlog.excerpt}</p>
                    <div className="blog-detail-page__related-card-link d-flex align-items-center" style={{ color: relatedBlog.color }}>
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
      <section className={`blog-detail-page__cta ${isMobile ? "blog-detail-page__cta--mobile" : ""}`}>
        <Reveal>
          <div
            className={`blog-detail-page__cta-card ${isMobile ? "blog-detail-page__cta-card--mobile" : "blog-detail-page__cta-card--desktop"}`}
            style={{ background: `linear-gradient(135deg, ${color} 0%, ${color}dd 100%)` }}
          >
            <div className="blog-detail-page__cta-circle blog-detail-page__cta-circle--top" />
            <div className="blog-detail-page__cta-circle blog-detail-page__cta-circle--bottom" />

            <h3 className={`blog-detail-page__cta-title ${isMobile ? "blog-detail-page__cta-title--mobile" : "blog-detail-page__cta-title--desktop"}`}>
              Ready to stop the leaks?
            </h3>
            <p className={`blog-detail-page__cta-text ${isMobile ? "blog-detail-page__cta-text--mobile" : "blog-detail-page__cta-text--desktop"}`}>
              Join early supporters getting access to programmable smart cards
              that block unauthorized charges automatically.
            </p>
            <Link
              to="/#section-hero"
              className="blog-detail-page__cta-btn d-inline-flex align-items-center"
              style={{ color }}
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
      <footer className={footerClasses}>
        <div className={`blog-detail-page__footer-content d-flex ${isMobile ? "flex-column align-items-start" : "flex-row justify-content-between align-items-center"}`} style={{ gap: isMobile ? 24 : 24 }}>
          <Logo dark />
          <div className={`d-flex ${isMobile ? "flex-column align-items-start" : "flex-row align-items-center"} ${isMobile ? "blog-detail-page__footer-links--mobile" : "blog-detail-page__footer-links"}`}>
            <Link to="/" className="blog-detail-page__footer-link">Home</Link>
            <Link to="/blog" className="blog-detail-page__footer-link">Articles</Link>
            <Link to="/privacy" className="blog-detail-page__footer-link">Privacy</Link>
            {!isMobile && <span className="blog-detail-page__footer-dot" />}
            <p className="blog-detail-page__footer-copyright">© 2026 Vaultly Inc.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
