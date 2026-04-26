import { useState } from "react";
import { Reveal } from "../common";
import { FAQS } from "../../data";
import { useResponsive } from "../../hooks";

export function FAQSection() {
  const [openFaq, setOpenFaq] = useState(null);
  const { isMobile, isTablet } = useResponsive();

  return (
    <section
      id="section-faq"
      style={{
        padding: isMobile ? "72px 5%" : isTablet ? "88px 5%" : "108px 5%",
        background: "var(--gray-50)",
        borderTop: "1px solid var(--gray-100)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Dot grid pattern */}
      <svg
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          opacity: 0.4,
          pointerEvents: "none",
        }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="faqDots" width="32" height="32" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="1" fill="var(--gray-300)" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#faqDots)" />
      </svg>

      <div
        style={{
          maxWidth: 860,
          margin: "0 auto",
          position: "relative",
          zIndex: 2,
        }}
      >
        <Reveal>
          <div
            style={{
              marginBottom: isMobile ? 36 : 56,
              textAlign: isMobile ? "left" : "center",
            }}
          >
            <p
              style={{
                fontSize: 12,
                letterSpacing: 3,
                textTransform: "uppercase",
                color: "var(--primary)",
                fontWeight: 600,
                marginBottom: 12,
              }}
            >
              Got Questions?
            </p>
            <h2
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: isMobile ? "1.65rem" : "clamp(2rem,3.4vw,2.8rem)",
                fontWeight: 700,
                letterSpacing: isMobile ? -0.5 : -1.5,
                lineHeight: 1.15,
                color: "var(--gray-900)",
                marginBottom: 14,
              }}
            >
              Frequently Asked <span style={{ color: "var(--primary)" }}>Questions</span>
            </h2>
            <p
              style={{
                color: "var(--gray-600)",
                fontSize: isMobile ? 15 : 17,
                lineHeight: 1.7,
                maxWidth: 520,
                margin: isMobile ? "0" : "0 auto",
              }}
            >
              Everything you need to know about Vaultly. Can't find an answer? Drop us a line.
            </p>
          </div>
        </Reveal>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: isMobile ? 10 : 12,
          }}
        >
          {FAQS.map((faq, i) => {
            const isOpen = openFaq === i;
            return (
              <Reveal key={i} delay={i * 0.05}>
                <div
                  style={{
                    background: "var(--white)",
                    border: `1.5px solid ${isOpen ? "rgba(73, 73, 242, 0.3)" : "var(--gray-200)"}`,
                    borderRadius: 16,
                    overflow: "hidden",
                    transition: "border-color 0.3s, box-shadow 0.3s",
                    boxShadow: isOpen
                      ? "0 8px 32px rgba(73, 73, 242, 0.1)"
                      : "0 2px 8px rgba(0, 0, 0, 0.03)",
                  }}
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                    style={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      padding: isMobile ? "18px 20px" : "22px 28px",
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      textAlign: "left",
                      gap: 16,
                      fontFamily: "'Poppins', sans-serif",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "'Poppins', sans-serif",
                        fontSize: isMobile ? "1rem" : "1.1rem",
                        fontWeight: 700,
                        color: "var(--gray-900)",
                        lineHeight: 1.3,
                      }}
                    >
                      {faq.q}
                    </span>
                    <div
                      style={{
                        width: 28,
                        height: 28,
                        borderRadius: "50%",
                        flexShrink: 0,
                        background: isOpen ? "var(--primary)" : "var(--primary-glow)",
                        border: `1px solid ${isOpen ? "var(--primary)" : "rgba(73, 73, 242, 0.2)"}`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        transition: "background 0.3s, transform 0.3s",
                        transform: isOpen ? "rotate(45deg)" : "none",
                      }}
                    >
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
                    <div
                      style={{
                        padding: isMobile ? "0 20px 20px" : "0 28px 24px",
                        borderTop: "1px solid var(--gray-100)",
                      }}
                    >
                      <p
                        style={{
                          color: "var(--gray-600)",
                          fontSize: isMobile ? 14 : 16,
                          lineHeight: 1.8,
                          paddingTop: 16,
                          margin: 0,
                        }}
                      >
                        {faq.a}
                      </p>
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
