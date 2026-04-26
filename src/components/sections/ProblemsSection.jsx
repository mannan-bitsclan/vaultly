import { Reveal } from "../common";
import { useResponsive } from "../../hooks";

const PROBLEMS = [
  {
    letter: "A",
    color: "#4949f2",
    title: '"Who approved this — and why is it still running?"',
    stat: "$99",
    statSub: null,
    statDesc: "AVG. SILENT CHARGE PER INCIDENT",
    body: (
      <span>
        I was reviewing last quarter's expenses and found three charges nobody
        on my team could explain. One traced back to a free trial from eight
        months ago.{" "}
        <strong style={{ color: "var(--gray-900)" }}>
          It had been billing us ever since. Nobody noticed. Nobody approved it
          continuing.
        </strong>
      </span>
    ),
  },
  {
    letter: "B",
    color: "#a78bfa",
    title: '"One card gets stolen and my entire stack is exposed."',
    stat: "1",
    statSub: "breach",
    statDesc: "EXPOSES EVERY LINKED SUBSCRIPTION",
    body: (
      <span>
        We use one card across GitHub, Figma, AWS, everything. One breach and{" "}
        <strong style={{ color: "var(--gray-900)" }}>
          eleven tools were compromised at once.
        </strong>{" "}
        Re-linking took two full days. Using a single card for the whole stack
        was the real mistake.
      </span>
    ),
  },
  {
    letter: "C",
    color: "#10b981",
    title: '"I\'m paying a senior person to chase $400 in Slack threads."',
    stat: "3",
    statSub: "weeks",
    statDesc: "CHASING REIMBURSEMENTS INTERNALLY",
    body: (
      <span>
        My head of product fronts shared tool costs every month and spends weeks
        recovering it from teammates.{" "}
        <strong style={{ color: "var(--gray-900)" }}>
          A senior hire shouldn't be doing internal debt collection
        </strong>{" "}
        for four software subscriptions.
      </span>
    ),
  },
  {
    letter: "D",
    color: "#f59e0b",
    title: '"Someone who left over a year ago is still costing us money."',
    stat: "$2,400+",
    statSub: null,
    statDesc: "WASTED ON ZOMBIE TOOLS PER TEAM/YEAR",
    body: (
      <span>
        We ran a manual audit in December. Found $2,100 in subscriptions tied to
        people who had already left.{" "}
        <strong style={{ color: "var(--gray-900)" }}>
          Some had been billing us for over a year after their last day.
        </strong>{" "}
        No alert. No flag. Just money leaving quietly every month.
      </span>
    ),
  },
];

export function ProblemsSection() {
  const { isMobile, isTablet } = useResponsive();

  return (
    <section
      id="section-problems"
      style={{
        padding: isMobile ? "64px 5%" : isTablet ? "80px 5%" : "110px 5%",
        background: "var(--gray-50)",
        position: "relative",
        overflow: "hidden",
      }}
    >
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
              textAlign: "center",
              marginBottom: isMobile ? 40 : 64,
            }}
          >
            <p
              style={{
                fontSize: isMobile ? 13 : 15,
                letterSpacing: 3,
                textTransform: "uppercase",
                color: "var(--primary)",
                fontWeight: 700,
                marginBottom: 14,
              }}
            >
              The Problems We're Solving
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
                color: "var(--gray-900)",
                letterSpacing: isMobile ? -0.5 : -1.5,
                lineHeight: 1.15,
                maxWidth: 900,
                margin: "0 auto",
              }}
            >
              Four Silent Problems That
              <br />
              <span style={{ color: "var(--primary)" }}>Drain Thousands</span> From
              Teams Every Year
            </h2>
            <p
              style={{
                color: "var(--gray-600)",
                fontSize: isMobile ? 15 : 17,
                lineHeight: 1.7,
                maxWidth: 640,
                margin: "14px auto 0",
                textAlign: "center",
              }}
            >
              Not metaphorically. Every month, these four patterns silently
              drain business accounts. This is exactly why we're building
              Vaultly.
            </p>
          </div>
        </Reveal>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
            gap: isMobile ? 16 : 20,
          }}
        >
          {PROBLEMS.map((p, i) => (
            <Reveal key={i} delay={i * 0.06}>
              <div
                style={{
                  textAlign: "center",
                  background: "var(--white)",
                  border: "1px solid var(--gray-200)",
                  borderRadius: 20,
                  overflow: "hidden",
                  padding: isMobile
                    ? "24px 16px"
                    : isTablet
                      ? "28px 22px"
                      : "32px 26px",
                  transition: "border-color 0.3s, box-shadow 0.3s, transform 0.3s",
                  boxShadow: "0 2px 12px rgba(0, 0, 0, 0.03)",
                  position: "relative",
                  height: "100%",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = `${p.color}50`;
                  e.currentTarget.style.boxShadow = `0 16px 50px rgba(0, 0, 0, 0.08)`;
                  e.currentTarget.style.transform = "translateY(-4px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--gray-200)";
                  e.currentTarget.style.boxShadow = "0 2px 12px rgba(0, 0, 0, 0.03)";
                  e.currentTarget.style.transform = "";
                }}
              >
                {/* Background letter */}
                <div
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%,-50%)",
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: isMobile ? 70 : 140,
                    fontWeight: 900,
                    color: `${p.color}08`,
                    lineHeight: 1,
                    userSelect: "none",
                    pointerEvents: "none",
                  }}
                >
                  {p.letter}
                </div>

                <div
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: isMobile ? "1.1rem" : "clamp(1.1rem,2vw,1.4rem)",
                    fontWeight: 700,
                    letterSpacing: isMobile ? 2 : 3,
                    color: p.color,
                    textTransform: "uppercase",
                    marginBottom: 6,
                    position: "relative",
                  }}
                >
                  Problem {p.letter}
                </div>

                <h3
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: isMobile ? "1.2rem" : "clamp(1.2rem,2vw,1.55rem)",
                    fontWeight: 700,
                    fontStyle: "italic",
                    color: "var(--gray-900)",
                    marginBottom: 14,
                    letterSpacing: -0.5,
                    lineHeight: 1.3,
                    position: "relative",
                  }}
                >
                  {p.title}
                </h3>

                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 10,
                    marginBottom: 14,
                    position: "relative",
                  }}
                >
                  <div>
                    <div
                      style={{
                        fontFamily: "'Poppins', sans-serif",
                        fontSize: isMobile ? "1.8rem" : "clamp(2rem,3vw,2.4rem)",
                        fontWeight: 900,
                        color: p.color,
                        lineHeight: 1,
                        letterSpacing: -1,
                      }}
                    >
                      {p.stat}
                    </div>
                    {p.statSub && (
                      <div
                        style={{
                          fontFamily: "'Poppins', sans-serif",
                          fontSize: isMobile ? "1.8rem" : "clamp(2rem,3vw,2.4rem)",
                          fontWeight: 900,
                          color: p.color,
                          lineHeight: 1,
                          letterSpacing: -1,
                        }}
                      >
                        {p.statSub}
                      </div>
                    )}
                  </div>
                  <span
                    style={{
                      fontSize: isMobile ? 10 : 11,
                      color: "var(--gray-500)",
                      letterSpacing: 1,
                      textTransform: "uppercase",
                      maxWidth: 90,
                      lineHeight: 1.5,
                      textAlign: "left",
                    }}
                  >
                    {p.statDesc}
                  </span>
                </div>

                <p
                  style={{
                    color: "var(--gray-600)",
                    fontSize: isMobile ? 13 : 14,
                    lineHeight: 1.75,
                    maxWidth: 400,
                    margin: "0 auto",
                    position: "relative",
                  }}
                >
                  {p.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
