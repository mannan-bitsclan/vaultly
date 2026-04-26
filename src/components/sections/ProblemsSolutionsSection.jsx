import { Reveal } from "../common";
import { useResponsive } from "../../hooks";

const PROBLEMS_SOLUTIONS = [
  {
    problem: {
      letter: "A",
      title: '"Who approved this — and why is it still running?"',
      stat: "$99",
      statDesc: "AVG. SILENT CHARGE",
      body: "Free trials that quietly convert into recurring charges. Nobody approved it. Nobody noticed.",
    },
    solution: {
      num: "01",
      title: "Fortress Card",
      tagline: "One card. Total control.",
      desc: "Every merchant must be on your approved list. Unauthorized charges? Blocked instantly.",
      stat: "100%",
      statLabel: "Blocked",
    },
    color: "#4949f2",
  },
  {
    problem: {
      letter: "B",
      title: '"One card gets stolen and my entire stack is exposed."',
      stat: "11",
      statDesc: "TOOLS COMPROMISED",
      body: "Using one card for everything means one breach exposes your entire subscription stack.",
    },
    solution: {
      num: "02",
      title: "Trial Shield",
      tagline: "Sign up. Never get charged.",
      desc: "A card with a $1 ceiling. Clears trial gates, blocks all renewal charges permanently.",
      stat: "$0",
      statLabel: "Surprise Fees",
    },
    color: "#2D6A4F",
  },
  {
    problem: {
      letter: "C",
      title: '"I\'m paying a senior person to chase $400 in Slack threads."',
      stat: "3",
      statDesc: "WEEKS CHASING",
      body: "Team members fronting shared costs and spending weeks recovering money from teammates.",
    },
    solution: {
      num: "03",
      title: "Social Top-Up",
      tagline: "The group pays you first.",
      desc: "Share a link. Friends settle directly into the card. No fronting. No awkward follow-ups.",
      stat: "4×",
      statLabel: "Faster",
    },
    color: "#C0392B",
  },
  {
    problem: {
      letter: "D",
      title: '"Someone who left is still costing us money."',
      stat: "$2,400+",
      statDesc: "WASTED YEARLY",
      body: "Subscriptions tied to departed employees billing silently for months. No alert. No flag.",
    },
    solution: {
      num: "04",
      title: "Kill Switch",
      tagline: "Cancel without calling anyone.",
      desc: "One tap voids the card. Merchant loses billing access immediately. You're just done.",
      stat: "1",
      statLabel: "Tap to Cancel",
    },
    color: "#6d28d9",
  },
];

function ProblemCard({ problem, color, isMobile }) {
  return (
    <div
      style={{
        background: "var(--white)",
        border: "1px solid var(--gray-200)",
        borderRadius: 20,
        padding: isMobile ? "24px 20px" : "28px 28px",
        position: "relative",
        overflow: "hidden",
        height: "100%",
        transition: "all 0.35s cubic-bezier(0.16, 1, 0.3, 1)",
        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.04)",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = `${color}50`;
        e.currentTarget.style.transform = "translateY(-4px)";
        e.currentTarget.style.boxShadow = `0 20px 50px rgba(0, 0, 0, 0.1)`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "var(--gray-200)";
        e.currentTarget.style.transform = "";
        e.currentTarget.style.boxShadow = "0 4px 20px rgba(0, 0, 0, 0.04)";
      }}
    >
      {/* Background letter */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          right: 10,
          transform: "translateY(-50%)",
          fontFamily: "'Poppins', sans-serif",
          fontSize: isMobile ? 100 : 140,
          fontWeight: 900,
          color: `${color}06`,
          lineHeight: 1,
          userSelect: "none",
          pointerEvents: "none",
        }}
      >
        {problem.letter}
      </div>

      {/* Problem badge */}
      <div
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 8,
          background: `${color}10`,
          border: `1px solid ${color}25`,
          borderRadius: 100,
          padding: "6px 14px",
          marginBottom: 16,
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
            fontSize: 11,
            fontWeight: 700,
            color: color,
            letterSpacing: 1.5,
            textTransform: "uppercase",
          }}
        >
          Problem {problem.letter}
        </span>
      </div>

      <h3
        style={{
          fontFamily: "'Poppins', sans-serif",
          fontSize: isMobile ? "1.1rem" : "1.25rem",
          fontWeight: 700,
          fontStyle: "italic",
          color: "var(--gray-900)",
          marginBottom: 14,
          letterSpacing: -0.3,
          lineHeight: 1.35,
          position: "relative",
        }}
      >
        {problem.title}
      </h3>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 12,
          marginBottom: 14,
          position: "relative",
        }}
      >
        <div
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontSize: isMobile ? "1.8rem" : "2.2rem",
            fontWeight: 900,
            color: color,
            lineHeight: 1,
            letterSpacing: -1,
          }}
        >
          {problem.stat}
        </div>
        <span
          style={{
            fontSize: 10,
            color: "var(--gray-500)",
            letterSpacing: 1,
            textTransform: "uppercase",
            lineHeight: 1.4,
          }}
        >
          {problem.statDesc}
        </span>
      </div>

      <p
        style={{
          color: "var(--gray-600)",
          fontSize: isMobile ? 13 : 14,
          lineHeight: 1.7,
          position: "relative",
        }}
      >
        {problem.body}
      </p>
    </div>
  );
}

function SolutionCard({ solution, color, isMobile }) {
  return (
    <div
      style={{
        background: `linear-gradient(135deg, ${color}08 0%, ${color}03 100%)`,
        border: `1px solid ${color}20`,
        borderRadius: 20,
        padding: isMobile ? "24px 20px" : "28px 28px",
        position: "relative",
        overflow: "hidden",
        height: "100%",
        transition: "all 0.35s cubic-bezier(0.16, 1, 0.3, 1)",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = `${color}50`;
        e.currentTarget.style.transform = "translateY(-4px)";
        e.currentTarget.style.boxShadow = `0 20px 50px ${color}15`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = `${color}20`;
        e.currentTarget.style.transform = "";
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      {/* Background number */}
      <div
        style={{
          position: "absolute",
          bottom: -20,
          right: 10,
          fontFamily: "'Poppins', sans-serif",
          fontSize: isMobile ? 100 : 140,
          fontWeight: 900,
          color: `${color}08`,
          lineHeight: 1,
          userSelect: "none",
          pointerEvents: "none",
        }}
      >
        {solution.num}
      </div>

      {/* Solution badge */}
      <div
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 8,
          background: color,
          borderRadius: 100,
          padding: "6px 14px",
          marginBottom: 16,
        }}
      >
        <svg
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="20 6 9 17 4 12" />
        </svg>
        <span
          style={{
            fontSize: 11,
            fontWeight: 700,
            color: "white",
            letterSpacing: 1.5,
            textTransform: "uppercase",
          }}
        >
          Solution {solution.num}
        </span>
      </div>

      <h3
        style={{
          fontFamily: "'Poppins', sans-serif",
          fontSize: isMobile ? "1.3rem" : "1.5rem",
          fontWeight: 700,
          color: "var(--gray-900)",
          marginBottom: 6,
          letterSpacing: -0.3,
          lineHeight: 1.25,
          position: "relative",
        }}
      >
        {solution.title}
      </h3>

      <p
        style={{
          fontSize: isMobile ? 12 : 13,
          color: color,
          fontWeight: 700,
          letterSpacing: 1,
          textTransform: "uppercase",
          marginBottom: 14,
        }}
      >
        {solution.tagline}
      </p>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 12,
          marginBottom: 14,
          position: "relative",
        }}
      >
        <div
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontSize: isMobile ? "1.8rem" : "2.2rem",
            fontWeight: 900,
            color: color,
            lineHeight: 1,
            letterSpacing: -1,
          }}
        >
          {solution.stat}
        </div>
        <span
          style={{
            fontSize: 10,
            color: "var(--gray-500)",
            letterSpacing: 1,
            textTransform: "uppercase",
            lineHeight: 1.4,
          }}
        >
          {solution.statLabel}
        </span>
      </div>

      <p
        style={{
          color: "var(--gray-600)",
          fontSize: isMobile ? 13 : 14,
          lineHeight: 1.7,
          position: "relative",
        }}
      >
        {solution.desc}
      </p>
    </div>
  );
}

function Arrow({ direction, color, isMobile }) {
  if (isMobile) {
    // Vertical arrow for mobile
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "16px 0",
        }}
      >
        <div
          style={{
            width: 2,
            height: 40,
            background: `linear-gradient(180deg, ${color}60, ${color})`,
            borderRadius: 2,
          }}
        />
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke={color}
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ marginTop: -2 }}
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </div>
    );
  }

  // Horizontal arrow for desktop
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "0 8px",
        minWidth: 80,
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          transform: direction === "left" ? "scaleX(-1)" : "none",
        }}
      >
        <div
          style={{
            width: 50,
            height: 2,
            background: `linear-gradient(90deg, ${color}40, ${color})`,
            borderRadius: 2,
          }}
        />
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke={color}
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ marginLeft: -4 }}
        >
          <polyline points="9 6 15 12 9 18" />
        </svg>
      </div>
    </div>
  );
}

function TimelineConnector({ isLast, color, isMobile }) {
  if (isMobile || isLast) return null;

  return (
    <div
      style={{
        position: "absolute",
        left: "50%",
        bottom: -40,
        transform: "translateX(-50%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: 2,
          height: 40,
          background: `linear-gradient(180deg, ${color}30, transparent)`,
        }}
      />
    </div>
  );
}

export function ProblemsSolutionsSection() {
  const { isMobile, isTablet } = useResponsive();

  return (
    <section
      id="section-problems-solutions"
      style={{
        padding: isMobile ? "64px 5%" : isTablet ? "80px 5%" : "110px 5%",
        background: "var(--gray-50)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Subtle gradient background */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "radial-gradient(ellipse at 30% 20%, var(--primary-glow) 0%, transparent 50%)",
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
              textAlign: "center",
              marginBottom: isMobile ? 48 : 72,
            }}
          >
            <p
              style={{
                fontSize: isMobile ? 11 : 12,
                letterSpacing: 3,
                textTransform: "uppercase",
                color: "var(--primary)",
                fontWeight: 700,
                marginBottom: 14,
              }}
            >
              Problems → Solutions
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
                maxWidth: 800,
                margin: "0 auto",
              }}
            >
              Four Problems.{" "}
              <span style={{ color: "var(--primary)" }}>Four Smart Cards.</span>
              <br />
              $4,200+ Saved Every Year.
            </h2>
            <p
              style={{
                color: "var(--gray-600)",
                fontSize: isMobile ? 15 : 17,
                lineHeight: 1.7,
                maxWidth: 600,
                margin: "16px auto 0",
              }}
            >
              Every silent drain has a programmable solution. See how each
              Vaultly card eliminates a specific problem.
            </p>
          </div>
        </Reveal>

        {/* Zig-zag Timeline */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: isMobile ? 24 : 48,
          }}
        >
          {PROBLEMS_SOLUTIONS.map((item, i) => {
            const isEven = i % 2 === 0;
            const isLast = i === PROBLEMS_SOLUTIONS.length - 1;

            return (
              <Reveal key={i} delay={i * 0.1}>
                <div
                  style={{
                    position: "relative",
                  }}
                >
                  {/* Desktop: Horizontal zig-zag layout */}
                  {!isMobile ? (
                    <div
                      style={{
                        display: "grid",
                        gridTemplateColumns: isEven
                          ? "1fr auto 1fr"
                          : "1fr auto 1fr",
                        alignItems: "stretch",
                        gap: 0,
                      }}
                    >
                      {isEven ? (
                        <>
                          <ProblemCard
                            problem={item.problem}
                            color={item.color}
                            isMobile={isMobile}
                          />
                          <Arrow
                            direction="right"
                            color={item.color}
                            isMobile={isMobile}
                          />
                          <SolutionCard
                            solution={item.solution}
                            color={item.color}
                            isMobile={isMobile}
                          />
                        </>
                      ) : (
                        <>
                          <SolutionCard
                            solution={item.solution}
                            color={item.color}
                            isMobile={isMobile}
                          />
                          <Arrow
                            direction="left"
                            color={item.color}
                            isMobile={isMobile}
                          />
                          <ProblemCard
                            problem={item.problem}
                            color={item.color}
                            isMobile={isMobile}
                          />
                        </>
                      )}
                    </div>
                  ) : (
                    /* Mobile: Vertical layout */
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      <ProblemCard
                        problem={item.problem}
                        color={item.color}
                        isMobile={isMobile}
                      />
                      <Arrow
                        direction="down"
                        color={item.color}
                        isMobile={isMobile}
                      />
                      <SolutionCard
                        solution={item.solution}
                        color={item.color}
                        isMobile={isMobile}
                      />
                    </div>
                  )}

                  <TimelineConnector
                    isLast={isLast}
                    color={item.color}
                    isMobile={isMobile}
                  />
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
