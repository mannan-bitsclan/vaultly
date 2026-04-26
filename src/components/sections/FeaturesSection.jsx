import { Reveal } from "../common";
import { FEATURES } from "../../data";
import { useResponsive } from "../../hooks";

export function FeaturesSection() {
  const { isMobile, isTablet } = useResponsive();

  return (
    <section
      id="section-arsenal"
      style={{
        padding: isMobile ? "72px 5%" : isTablet ? "88px 5%" : "108px 5%",
        background: "var(--white)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Subtle gradient background */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          width: "90%",
          height: "80%",
          background: "radial-gradient(ellipse at center, var(--primary-glow) 0%, transparent 65%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          position: "relative",
          zIndex: 2,
        }}
      >
        <Reveal>
          <div
            style={{
              display: "flex",
              flexDirection: isMobile ? "column" : "row",
              justifyContent: "space-between",
              alignItems: isMobile ? "flex-start" : "flex-end",
              gap: isMobile ? 14 : 36,
              marginBottom: isMobile ? 36 : 64,
            }}
          >
            <div>
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
                Our Solution
              </p>
              <h2
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: isMobile
                    ? "1.65rem"
                    : isTablet
                      ? "2.2rem"
                      : "clamp(2rem,3.4vw,2.8rem)",
                  fontWeight: 700,
                  letterSpacing: isMobile ? -0.5 : -1.5,
                  lineHeight: 1.15,
                  color: "var(--gray-900)",
                }}
              >
                Four Smart Cards That{" "}
                <span style={{ color: "var(--primary)" }}>Save You $4,200+</span>
                <br />
                In Wasted Subscriptions Every Year
              </h2>
            </div>
            {!isMobile && (
              <p
                style={{
                  color: "var(--gray-600)",
                  fontSize: 15,
                  maxWidth: 280,
                  lineHeight: 1.75,
                  textAlign: isTablet ? "left" : "right",
                  flexShrink: 0,
                }}
              >
                Every card carries programmable logic that executes in real time
                — before any merchant sees approval.
              </p>
            )}
          </div>
        </Reveal>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: isMobile ? 20 : 28,
          }}
        >
          {FEATURES.map((feat, i) => {
            const alignRight = i % 2 !== 0;
            return (
              <Reveal key={i} delay={i * 0.09}>
                <div
                  style={{
                    width: isMobile ? "100%" : isTablet ? "88%" : "75%",
                    marginLeft: alignRight ? "auto" : 0,
                    marginRight: alignRight ? 0 : "auto",
                    background: "var(--white)",
                    border: "1px solid var(--gray-200)",
                    borderRadius: 20,
                    padding: isMobile ? "24px 20px" : "36px 40px",
                    position: "relative",
                    overflow: "hidden",
                    transition: "border-color 0.35s, box-shadow 0.35s, transform 0.35s",
                    boxShadow: "0 4px 24px rgba(0, 0, 0, 0.04)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = `${feat.accent}60`;
                    e.currentTarget.style.transform = "translateY(-4px)";
                    e.currentTarget.style.boxShadow = `0 20px 50px rgba(0, 0, 0, 0.08), 0 0 0 1px ${feat.accent}20`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "var(--gray-200)";
                    e.currentTarget.style.transform = "";
                    e.currentTarget.style.boxShadow = "0 4px 24px rgba(0, 0, 0, 0.04)";
                  }}
                >
                  {/* Accent border */}
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      left: alignRight ? "auto" : 0,
                      right: alignRight ? 0 : "auto",
                      bottom: 0,
                      width: 4,
                      background: `linear-gradient(180deg, ${feat.accent}, ${feat.accent}40)`,
                      borderRadius: alignRight ? "0 20px 20px 0" : "20px 0 0 20px",
                    }}
                  />

                  {/* Background number */}
                  <div
                    style={{
                      position: "absolute",
                      bottom: -20,
                      right: -10,
                      fontFamily: "'Poppins', sans-serif",
                      fontSize: isMobile ? 80 : 160,
                      fontWeight: 900,
                      color: `${feat.accent}08`,
                      lineHeight: 1,
                      userSelect: "none",
                      pointerEvents: "none",
                    }}
                  >
                    {feat.num}
                  </div>

                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: isMobile ? "1fr" : "160px 1fr",
                      gap: isMobile ? 16 : 0,
                      alignItems: "center",
                      position: "relative",
                    }}
                  >
                    <div
                      style={{
                        textAlign: isMobile ? "left" : "center",
                        paddingRight: isMobile ? 0 : 32,
                        borderRight: isMobile ? "none" : `1px solid ${feat.accent}20`,
                      }}
                    >
                      <div
                        style={{
                          fontFamily: "'Poppins', sans-serif",
                          fontSize: isMobile ? "2rem" : "clamp(2.4rem,3.5vw,3.2rem)",
                          fontWeight: 900,
                          color: feat.accent,
                          lineHeight: 1,
                          letterSpacing: -1,
                        }}
                      >
                        {feat.stat}
                      </div>
                      <div
                        style={{
                          fontSize: isMobile ? 11 : 12,
                          color: "var(--gray-500)",
                          marginTop: 8,
                          letterSpacing: 1,
                          textTransform: "uppercase",
                          lineHeight: 1.5,
                        }}
                      >
                        {feat.statLabel}
                      </div>
                    </div>
                    <div style={{ paddingLeft: isMobile ? 0 : 32 }}>
                      <h3
                        style={{
                          fontFamily: "'Poppins', sans-serif",
                          fontWeight: 700,
                          fontSize: isMobile ? "1.5rem" : "clamp(1.5rem,2.5vw,2rem)",
                          color: "var(--gray-900)",
                          lineHeight: 1.2,
                          letterSpacing: -0.5,
                          marginBottom: 8,
                        }}
                      >
                        {feat.title}
                      </h3>
                      <p
                        style={{
                          fontSize: isMobile ? 13 : 15,
                          color: feat.accent,
                          fontWeight: 700,
                          letterSpacing: 1.5,
                          textTransform: "uppercase",
                          marginBottom: 14,
                          opacity: 0.9,
                        }}
                      >
                        {feat.tagline}
                      </p>
                      <p
                        style={{
                          color: "var(--gray-600)",
                          fontSize: isMobile ? 15 : 17,
                          lineHeight: 1.75,
                        }}
                      >
                        {feat.desc}
                      </p>
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
