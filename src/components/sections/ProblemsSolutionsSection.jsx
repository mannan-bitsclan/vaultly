import { Reveal } from "../common";
import { useResponsive } from "../../hooks";

const BLUE_COLOR = "#4949f2";

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
  },
];

function ProblemCard({ problem, isMobile, isTablet }) {
  return (
    <div
      style={{
        background: "var(--white)",
        border: "1px solid var(--gray-200)",
        borderRadius: 16,
        padding: isMobile ? "32px 24px" : isTablet ? "36px 32px" : "52px 48px",
        position: "relative",
        overflow: "hidden",
        height: "100%",
        minHeight: isMobile ? "auto" : isTablet ? "auto" : 380,
        transition: "all 0.35s cubic-bezier(0.16, 1, 0.3, 1)",
        boxShadow: "0 4px 24px rgba(0, 0, 0, 0.06)",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = `${BLUE_COLOR}50`;
        e.currentTarget.style.transform = "translateY(-4px)";
        e.currentTarget.style.boxShadow = `0 20px 50px rgba(0, 0, 0, 0.1)`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "var(--gray-200)";
        e.currentTarget.style.transform = "";
        e.currentTarget.style.boxShadow = "0 4px 24px rgba(0, 0, 0, 0.06)";
      }}
    >
      {/* Background letter */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          right: isMobile ? 10 : 20,
          transform: "translateY(-50%)",
          fontFamily: "'Poppins', sans-serif",
          fontSize: isMobile ? 160 : isTablet ? 200 : 240,
          fontWeight: 900,
          color: `${BLUE_COLOR}06`,
          lineHeight: 1,
          userSelect: "none",
          pointerEvents: "none",
        }}
      >
        {problem.letter}
      </div>

      {/* Content wrapper with flex for stat on right */}
      <div
        style={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          justifyContent: "space-between",
          alignItems: isMobile ? "flex-start" : "center",
          gap: isMobile ? 28 : 36,
          height: "100%",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Left content */}
        <div style={{ flex: 1 }}>
          {/* Problem badge */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              background: `${BLUE_COLOR}10`,
              border: `1px solid ${BLUE_COLOR}25`,
              borderRadius: 100,
              padding: "10px 18px",
              marginBottom: 24,
            }}
          >
            <div
              style={{
                width: 10,
                height: 10,
                borderRadius: "50%",
                background: BLUE_COLOR,
              }}
            />
            <span
              style={{
                fontSize: 13,
                fontWeight: 700,
                color: BLUE_COLOR,
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
              fontSize: isMobile ? "1.4rem" : isTablet ? "1.6rem" : "1.85rem",
              fontWeight: 700,
              fontStyle: "italic",
              color: "var(--gray-900)",
              marginBottom: 20,
              letterSpacing: -0.3,
              lineHeight: 1.35,
            }}
          >
            {problem.title}
          </h3>

          <p
            style={{
              color: "var(--gray-600)",
              fontSize: isMobile ? 16 : 18,
              lineHeight: 1.8,
            }}
          >
            {problem.body}
          </p>
        </div>

        {/* Right side - Stat */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: isMobile ? "flex-start" : "flex-end",
            textAlign: isMobile ? "left" : "right",
            flexShrink: 0,
          }}
        >
          <div
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: isMobile ? "3rem" : isTablet ? "3.5rem" : "4.2rem",
              fontWeight: 900,
              color: BLUE_COLOR,
              lineHeight: 1,
              letterSpacing: -2,
            }}
          >
            {problem.stat}
          </div>
          <span
            style={{
              fontSize: 12,
              color: "var(--gray-500)",
              letterSpacing: 1.2,
              textTransform: "uppercase",
              lineHeight: 1.4,
              marginTop: 10,
            }}
          >
            {problem.statDesc}
          </span>
        </div>
      </div>
    </div>
  );
}

function SolutionCard({ solution, isMobile, isTablet }) {
  return (
    <div
      style={{
        background: `linear-gradient(135deg, ${BLUE_COLOR}08 0%, ${BLUE_COLOR}03 100%)`,
        border: `1px solid ${BLUE_COLOR}20`,
        borderRadius: 16,
        padding: isMobile ? "32px 24px" : isTablet ? "36px 32px" : "52px 48px",
        position: "relative",
        overflow: "hidden",
        height: "100%",
        minHeight: isMobile ? "auto" : isTablet ? "auto" : 380,
        transition: "all 0.35s cubic-bezier(0.16, 1, 0.3, 1)",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = `${BLUE_COLOR}50`;
        e.currentTarget.style.transform = "translateY(-4px)";
        e.currentTarget.style.boxShadow = `0 20px 50px ${BLUE_COLOR}15`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = `${BLUE_COLOR}20`;
        e.currentTarget.style.transform = "";
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      {/* Background number */}
      <div
        style={{
          position: "absolute",
          bottom: -30,
          right: isMobile ? 10 : 20,
          fontFamily: "'Poppins', sans-serif",
          fontSize: isMobile ? 160 : isTablet ? 200 : 240,
          fontWeight: 900,
          color: `${BLUE_COLOR}08`,
          lineHeight: 1,
          userSelect: "none",
          pointerEvents: "none",
        }}
      >
        {solution.num}
      </div>

      {/* Content wrapper with flex for stat on right */}
      <div
        style={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          justifyContent: "space-between",
          alignItems: isMobile ? "flex-start" : "center",
          gap: isMobile ? 28 : 36,
          height: "100%",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Left content */}
        <div style={{ flex: 1 }}>
          {/* Solution badge */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              background: BLUE_COLOR,
              borderRadius: 100,
              padding: "10px 18px",
              marginBottom: 24,
            }}
          >
            <svg
              width="16"
              height="16"
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
                fontSize: 13,
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
              fontSize: isMobile ? "1.6rem" : isTablet ? "1.85rem" : "2.2rem",
              fontWeight: 700,
              color: "var(--gray-900)",
              marginBottom: 10,
              letterSpacing: -0.3,
              lineHeight: 1.25,
            }}
          >
            {solution.title}
          </h3>

          <p
            style={{
              fontSize: isMobile ? 14 : 15,
              color: BLUE_COLOR,
              fontWeight: 700,
              letterSpacing: 1,
              textTransform: "uppercase",
              marginBottom: 20,
            }}
          >
            {solution.tagline}
          </p>

          <p
            style={{
              color: "var(--gray-600)",
              fontSize: isMobile ? 16 : 18,
              lineHeight: 1.8,
            }}
          >
            {solution.desc}
          </p>
        </div>

        {/* Right side - Stat */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: isMobile ? "flex-start" : "flex-end",
            textAlign: isMobile ? "left" : "right",
            flexShrink: 0,
          }}
        >
          <div
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: isMobile ? "3rem" : isTablet ? "3.5rem" : "4.2rem",
              fontWeight: 900,
              color: BLUE_COLOR,
              lineHeight: 1,
              letterSpacing: -2,
            }}
          >
            {solution.stat}
          </div>
          <span
            style={{
              fontSize: 12,
              color: "var(--gray-500)",
              letterSpacing: 1.2,
              textTransform: "uppercase",
              lineHeight: 1.4,
              marginTop: 10,
            }}
          >
            {solution.statLabel}
          </span>
        </div>
      </div>
    </div>
  );
}

function Arrow({ isMobile }) {
  if (isMobile) {
    // Vertical arrow for mobile
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "24px 0",
        }}
      >
        <div
          style={{
            width: 2,
            height: 60,
            background: `linear-gradient(180deg, ${BLUE_COLOR}60, ${BLUE_COLOR})`,
            borderRadius: 2,
          }}
        />
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke={BLUE_COLOR}
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
        padding: "0 24px",
        minWidth: 120,
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <div
          style={{
            width: 70,
            height: 3,
            background: `linear-gradient(90deg, ${BLUE_COLOR}40, ${BLUE_COLOR})`,
            borderRadius: 2,
          }}
        />
        <svg
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke={BLUE_COLOR}
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

export function ProblemsSolutionsSection() {
  const { isMobile, isTablet, width } = useResponsive();

  // Use vertical layout for screens below 1100px (mobile + tablet + small screens)
  const useVerticalLayout = width < 1100;

  return (
    <section
      id="section-problems-solutions"
      style={{
        padding: isMobile ? "64px 5%" : isTablet ? "80px 5%" : "100px 5%",
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
          maxWidth: 1400,
          margin: "0 auto",
          position: "relative",
          zIndex: 2,
        }}
      >
        <Reveal>
          <div
            style={{
              textAlign: "center",
              marginBottom: isMobile ? 48 : 80,
            }}
          >
            <p
              style={{
                fontSize: isMobile ? 11 : 13,
                letterSpacing: 3,
                textTransform: "uppercase",
                color: "var(--primary)",
                fontWeight: 700,
                marginBottom: 16,
              }}
            >
              Problems → Solutions
            </p>
            <h2
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: isMobile
                  ? "1.75rem"
                  : isTablet
                    ? "2.4rem"
                    : "clamp(2.2rem,3.6vw,3rem)",
                fontWeight: 700,
                color: "var(--gray-900)",
                letterSpacing: isMobile ? -0.5 : -1.5,
                lineHeight: 1.15,
                maxWidth: 900,
                margin: "0 auto",
              }}
            >
              Four Problems.{" "}
              <span style={{ color: "var(--primary)" }}>Four Smart Solutions.</span>
              <br />
              $4,200+ Saved Every Year.
            </h2>
            <p
              style={{
                color: "var(--gray-600)",
                fontSize: isMobile ? 16 : 18,
                lineHeight: 1.7,
                maxWidth: 650,
                margin: "20px auto 0",
              }}
            >
              Every silent drain has a programmable solution. See how each
              Vaultly card eliminates a specific problem.
            </p>
          </div>
        </Reveal>

        {/* All Problem-Solution Pairs */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: isMobile ? 32 : useVerticalLayout ? 40 : 56,
          }}
        >
          {PROBLEMS_SOLUTIONS.map((item, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div
                style={{
                  position: "relative",
                }}
              >
                {useVerticalLayout ? (
                  /* Mobile/Tablet: Vertical layout */
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <ProblemCard
                      problem={item.problem}
                      isMobile={isMobile}
                      isTablet={isTablet}
                    />
                    <Arrow isMobile={useVerticalLayout} />
                    <SolutionCard
                      solution={item.solution}
                      isMobile={isMobile}
                      isTablet={isTablet}
                    />
                  </div>
                ) : (
                  /* Desktop: Horizontal layout - Problem left, Solution right */
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr auto 1fr",
                      alignItems: "stretch",
                      gap: 0,
                    }}
                  >
                    <ProblemCard
                      problem={item.problem}
                      isMobile={isMobile}
                      isTablet={isTablet}
                    />
                    <Arrow isMobile={useVerticalLayout} />
                    <SolutionCard
                      solution={item.solution}
                      isMobile={isMobile}
                      isTablet={isTablet}
                    />
                  </div>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
