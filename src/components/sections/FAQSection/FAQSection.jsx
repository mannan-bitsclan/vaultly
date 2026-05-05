import { useState } from "react";
import { Reveal } from "../../common";
import { FAQS } from "../../../data";
import { useResponsive } from "../../../hooks";
import "./FAQSection.css";

export function FAQSection() {
  const [openFaq, setOpenFaq] = useState(null);
  const { isMobile, isTablet } = useResponsive();

  const sectionClasses = [
    "faq-section",
    isMobile ? "faq-section--mobile" : isTablet ? "faq-section--tablet" : "faq-section--desktop",
  ].join(" ");

  const headerClasses = [
    "faq-section__header",
    isMobile ? "faq-section__header--mobile" : "text-center",
  ].join(" ");

  const titleClasses = [
    "faq-section__title",
    isMobile && "faq-section__title--mobile",
  ].filter(Boolean).join(" ");

  const subtitleClasses = [
    "faq-section__subtitle",
    isMobile ? "faq-section__subtitle--mobile" : "faq-section__subtitle--desktop",
  ].join(" ");

  const listClasses = [
    "faq-section__list d-flex flex-column",
    isMobile && "faq-section__list--mobile",
  ].filter(Boolean).join(" ");

  return (
    <section id="section-faq" className={sectionClasses}>
      {/* Dot grid pattern */}
      <svg className="faq-section__grid" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="faqDots" width="32" height="32" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="1" fill="var(--gray-300)" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#faqDots)" />
      </svg>

      <div className="faq-section__container mx-auto">
        <Reveal>
          <div className={headerClasses}>
            <h2 className="faq-section__eyebrow">Got Questions?</h2>
            <h3 className={titleClasses}>
              Frequently Asked <span className="text-primary">Questions</span>
            </h3>
            <p className={subtitleClasses}>
              Everything you need to know about Vaultly. Can't find an answer? Drop us a line.
            </p>
          </div>
        </Reveal>

        <div className={listClasses}>
          {FAQS.map((faq, i) => {
            const isOpen = openFaq === i;

            const itemClasses = [
              "faq-item",
              isOpen && "faq-item--open",
            ].filter(Boolean).join(" ");

            const buttonClasses = [
              "faq-item__button d-flex justify-content-between align-items-center",
              isMobile && "faq-item__button--mobile",
            ].filter(Boolean).join(" ");

            const questionClasses = [
              "faq-item__question",
              isMobile && "faq-item__question--mobile",
            ].filter(Boolean).join(" ");

            const iconClasses = [
              "faq-item__icon d-flex align-items-center justify-content-center",
              isOpen && "faq-item__icon--open",
            ].filter(Boolean).join(" ");

            const contentClasses = [
              "faq-item__content",
              isMobile && "faq-item__content--mobile",
            ].filter(Boolean).join(" ");

            const answerClasses = [
              "faq-item__answer",
              isMobile && "faq-item__answer--mobile",
            ].filter(Boolean).join(" ");

            return (
              <Reveal key={i} delay={i * 0.05}>
                <div className={itemClasses}>
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                    className={buttonClasses}
                  >
                    <span className={questionClasses}>{faq.q}</span>
                    <div className={iconClasses}>
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <line
                          x1="6"
                          y1="1"
                          x2="6"
                          y2="11"
                          stroke={isOpen ? "var(--white)" : "var(--primary)"}
                          strokeWidth="1.8"
                          strokeLinecap="round"
                        />
                        <line
                          x1="1"
                          y1="6"
                          x2="11"
                          y2="6"
                          stroke={isOpen ? "var(--white)" : "var(--primary)"}
                          strokeWidth="1.8"
                          strokeLinecap="round"
                        />
                      </svg>
                    </div>
                  </button>
                  {isOpen && (
                    <div className={contentClasses}>
                      <p className={answerClasses}>{faq.a}</p>
                    </div>
                  )}
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
