import { Reveal } from "../../common";
import { FEATURES } from "../../../data";
import { useResponsive } from "../../../hooks";
import "./FeaturesSection.css";

export function FeaturesSection() {
  const { isMobile, isTablet } = useResponsive();

  const sectionClasses = [
    "features-section",
    isMobile ? "features-section--mobile" : isTablet ? "features-section--tablet" : "features-section--desktop",
  ].join(" ");

  const headerClasses = [
    "features-section__header d-flex justify-content-between",
    isMobile ? "features-section__header--mobile" : "features-section__header--desktop align-items-end",
  ].join(" ");

  const titleClasses = [
    "features-section__title",
    isMobile ? "features-section__title--mobile" : isTablet ? "features-section__title--tablet" : "",
  ].filter(Boolean).join(" ");

  const descClasses = [
    "features-section__description",
    isTablet ? "features-section__description--tablet" : "features-section__description--desktop",
  ].join(" ");

  const listClasses = [
    "features-section__list d-flex flex-column",
    isMobile && "features-section__list--mobile",
  ].filter(Boolean).join(" ");

  return (
    <section id="section-arsenal" className={sectionClasses}>
      {/* Subtle gradient background */}
      <div className="features-section__bg-gradient" />

      <div className="features-section__container mx-auto">
        <Reveal>
          <div className={headerClasses}>
            <div>
              <h2 className="features-section__eyebrow">Our Solution</h2>
              <h3 className={titleClasses}>
                Four Smart Cards That{" "}
                <span className="text-primary">Save You $4,200+</span>
                <br />
                In Wasted Subscriptions Every Year
              </h3>
            </div>
            {!isMobile && (
              <p className={descClasses}>
                Every card carries programmable logic that executes in real time
                — before any merchant sees approval.
              </p>
            )}
          </div>
        </Reveal>

        <div className={listClasses}>
          {FEATURES.map((feat, i) => {
            const alignRight = i % 2 !== 0;

            const cardClasses = [
              "feature-card",
              isMobile ? "feature-card--mobile" : isTablet ? "feature-card--tablet" : "feature-card--desktop",
              alignRight ? "feature-card--align-right" : "feature-card--align-left",
            ].join(" ");

            const accentClasses = [
              "feature-card__accent",
              alignRight ? "feature-card__accent--right" : "feature-card__accent--left",
            ].join(" ");

            const bgNumberClasses = [
              "feature-card__bg-number",
              isMobile && "feature-card__bg-number--mobile",
            ].filter(Boolean).join(" ");

            const layoutClasses = [
              "feature-card__layout",
              isMobile ? "feature-card__layout--mobile" : "feature-card__layout--desktop",
            ].join(" ");

            const statSectionClasses = [
              "feature-card__stat-section",
              isMobile ? "feature-card__stat-section--mobile" : "feature-card__stat-section--desktop",
            ].join(" ");

            const statClasses = [
              "feature-card__stat",
              isMobile && "feature-card__stat--mobile",
            ].filter(Boolean).join(" ");

            const statLabelClasses = [
              "feature-card__stat-label",
              isMobile && "feature-card__stat-label--mobile",
            ].filter(Boolean).join(" ");

            const contentClasses = [
              "feature-card__content",
              isMobile && "feature-card__content--mobile",
            ].filter(Boolean).join(" ");

            const cardTitleClasses = [
              "feature-card__title",
              isMobile && "feature-card__title--mobile",
            ].filter(Boolean).join(" ");

            const taglineClasses = [
              "feature-card__tagline",
              isMobile && "feature-card__tagline--mobile",
            ].filter(Boolean).join(" ");

            const descriptionClasses = [
              "feature-card__desc",
              isMobile && "feature-card__desc--mobile",
            ].filter(Boolean).join(" ");

            return (
              <Reveal key={i} delay={i * 0.09}>
                <div
                  className={cardClasses}
                  style={{ "--accent-color": feat.accent }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = `${feat.accent}60`;
                    e.currentTarget.style.boxShadow = `0 20px 50px rgba(0, 0, 0, 0.08), 0 0 0 1px ${feat.accent}20`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "var(--gray-200)";
                    e.currentTarget.style.boxShadow = "0 4px 24px rgba(0, 0, 0, 0.04)";
                  }}
                >
                  {/* Accent border */}
                  <div
                    className={accentClasses}
                    style={{
                      background: `linear-gradient(180deg, ${feat.accent}, ${feat.accent}40)`,
                    }}
                  />

                  {/* Background number */}
                  <div
                    className={bgNumberClasses}
                    style={{ color: `${feat.accent}08` }}
                  >
                    {feat.num}
                  </div>

                  <div className={layoutClasses}>
                    <div
                      className={statSectionClasses}
                      style={{ borderColor: isMobile ? "transparent" : `${feat.accent}20` }}
                    >
                      <div className={statClasses} style={{ color: feat.accent }}>
                        {feat.stat}
                      </div>
                      <div className={statLabelClasses}>{feat.statLabel}</div>
                    </div>
                    <div className={contentClasses}>
                      <h3 className={cardTitleClasses}>{feat.title}</h3>
                      <p className={taglineClasses} style={{ color: feat.accent }}>
                        {feat.tagline}
                      </p>
                      <p className={descriptionClasses}>{feat.desc}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
