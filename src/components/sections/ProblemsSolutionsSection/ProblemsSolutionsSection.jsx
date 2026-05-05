import { Reveal } from "../../common";
import { useResponsive } from "../../../hooks";
import "./ProblemsSolutionsSection.css";

const BLUE_COLOR = "#4949f2";

const PROBLEMS_SOLUTIONS = [
  {
    problem: {
      letter: "A",
      title: '"Who approved this — and why is it still running?"',
      stat: "$1200 / yr",
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
  const cardClasses = [
    "ps-problem-card",
    isMobile ? "ps-problem-card--mobile" : isTablet ? "ps-problem-card--tablet" : "ps-problem-card--desktop",
  ].join(" ");

  const bgLetterClasses = [
    "ps-problem-card__bg-letter",
    isMobile ? "ps-problem-card__bg-letter--mobile" : isTablet ? "ps-problem-card__bg-letter--tablet" : "ps-problem-card__bg-letter--desktop",
  ].join(" ");

  const contentClasses = [
    "ps-problem-card__content d-flex justify-content-between",
    isMobile ? "ps-problem-card__content--mobile" : "ps-problem-card__content--desktop",
  ].join(" ");

  const statWrapperClasses = [
    "ps-problem-card__stat-wrapper d-flex flex-column",
    isMobile ? "ps-problem-card__stat-wrapper--mobile" : "ps-problem-card__stat-wrapper--desktop",
  ].join(" ");

  const statClasses = [
    "ps-problem-card__stat",
    isMobile ? "ps-problem-card__stat--mobile" : isTablet ? "ps-problem-card__stat--tablet" : "ps-problem-card__stat--desktop",
  ].join(" ");

  const titleClasses = [
    "ps-problem-card__title",
    isMobile ? "ps-problem-card__title--mobile" : isTablet ? "ps-problem-card__title--tablet" : "ps-problem-card__title--desktop",
  ].join(" ");

  return (
    <div className={cardClasses}>
      {/* Background letter */}
      <div className={bgLetterClasses}>{problem.letter}</div>

      {/* Content wrapper */}
      <div className={contentClasses}>
        {/* Left content */}
        <div style={{ flex: 1 }}>
          {/* Problem badge */}
          <div className="ps-problem-card__badge-wrapper">
            <div className="ps-problem-card__badge d-inline-flex align-items-center">
              <div className="ps-problem-card__badge-dot" />
              <span className="ps-problem-card__badge-text">Problem {problem.letter}</span>
            </div>

            <div className={statWrapperClasses}>
              <div className={statClasses}>{problem.stat}</div>
              <span className="ps-problem-card__stat-desc">{problem.statDesc}</span>
            </div>
          </div>

          <h3 className={titleClasses}>{problem.title}</h3>
          <p className="ps-problem-card__body">{problem.body}</p>
        </div>
      </div>
    </div>
  );
}

function SolutionCard({ solution, isMobile, isTablet }) {
  const cardClasses = [
    "ps-solution-card",
    isMobile ? "ps-solution-card--mobile" : isTablet ? "ps-solution-card--tablet" : "ps-solution-card--desktop",
  ].join(" ");

  const bgNumberClasses = [
    "ps-solution-card__bg-number",
    isMobile ? "ps-solution-card__bg-number--mobile" : isTablet ? "ps-solution-card__bg-number--tablet" : "ps-solution-card__bg-number--desktop",
  ].join(" ");

  const contentClasses = [
    "ps-solution-card__content d-flex justify-content-between",
    isMobile ? "ps-solution-card__content--mobile" : "ps-solution-card__content--desktop",
  ].join(" ");

  const titleClasses = [
    "ps-solution-card__title",
    isMobile ? "ps-solution-card__title--mobile" : isTablet ? "ps-solution-card__title--tablet" : "ps-solution-card__title--desktop",
  ].join(" ");

  const taglineClasses = [
    "ps-solution-card__tagline",
    isMobile && "ps-solution-card__tagline--mobile",
  ].filter(Boolean).join(" ");

  const descClasses = [
    "ps-solution-card__desc",
    isMobile && "ps-solution-card__desc--mobile",
  ].filter(Boolean).join(" ");

  const statWrapperClasses = [
    "ps-solution-card__stat-wrapper d-flex flex-column",
    isMobile ? "ps-solution-card__stat-wrapper--mobile" : "ps-solution-card__stat-wrapper--desktop",
  ].join(" ");

  const statClasses = [
    "ps-solution-card__stat",
    isMobile ? "ps-solution-card__stat--mobile" : isTablet ? "ps-solution-card__stat--tablet" : "ps-solution-card__stat--desktop",
  ].join(" ");

  return (
    <div className={cardClasses}>
      {/* Background number */}
      <div className={bgNumberClasses}>{solution.num}</div>

      {/* Content wrapper */}
      <div className={contentClasses}>
        {/* Left content */}
        <div style={{ flex: 1 }}>
          {/* Solution badge */}
          <div className="ps-solution-card__badge d-inline-flex align-items-center">
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
            <span className="ps-solution-card__badge-text">Solution {solution.num}</span>
          </div>

          <h3 className={titleClasses}>{solution.title}</h3>
          <p className={taglineClasses}>{solution.tagline}</p>
          <p className={descClasses}>{solution.desc}</p>
        </div>

        {/* Right side - Stat */}
        <div className={statWrapperClasses}>
          <div className={statClasses}>{solution.stat}</div>
          <span className="ps-solution-card__stat-label">{solution.statLabel}</span>
        </div>
      </div>
    </div>
  );
}

function Arrow({ isVertical }) {
  if (isVertical) {
    return (
      <div className="ps-arrow ps-arrow--vertical d-flex flex-column align-items-center">
        <div className="ps-arrow__line ps-arrow__line--vertical" />
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

  return (
    <div className="ps-arrow d-flex align-items-center justify-content-center">
      <div className="d-flex align-items-center">
        <div className="ps-arrow__line ps-arrow__line--horizontal" />
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

  const sectionClasses = [
    "ps-section",
    isMobile ? "ps-section--mobile" : isTablet ? "ps-section--tablet" : "ps-section--desktop",
  ].join(" ");

  const headerClasses = [
    "ps-section__header text-center",
    isMobile && "ps-section__header--mobile",
  ].filter(Boolean).join(" ");

  const eyebrowClasses = [
    "ps-section__eyebrow",
    isMobile && "ps-section__eyebrow--mobile",
  ].filter(Boolean).join(" ");

  const titleClasses = [
    "ps-section__title",
    isMobile ? "ps-section__title--mobile" : isTablet ? "ps-section__title--tablet" : "",
  ].filter(Boolean).join(" ");

  const subtitleClasses = [
    "ps-section__subtitle",
    isMobile && "ps-section__subtitle--mobile",
  ].filter(Boolean).join(" ");

  const pairsClasses = [
    "ps-section__pairs d-flex flex-column",
    isMobile ? "ps-section__pairs--mobile" : useVerticalLayout ? "ps-section__pairs--tablet" : "",
  ].filter(Boolean).join(" ");

  return (
    <section id="section-problems-solutions" className={sectionClasses}>
      {/* Subtle gradient background */}
      <div className="ps-section__bg-gradient" />

      <div className="ps-section__container mx-auto">
        <Reveal>
          <div className={headerClasses}>
            <h2 className={eyebrowClasses}>Problems → Solutions</h2>
            <h3 className={titleClasses}>
              Four Problems.{" "}
              <span className="text-primary">Four Smart Solutions.</span>
              <br />
              $8400+ Saved Every Year.
            </h3>
            <p className={subtitleClasses}>
              Every silent drain has a programmable solution. See how each
              Vaultly card eliminates a specific problem.
            </p>
          </div>
        </Reveal>

        {/* All Problem-Solution Pairs */}
        <div className={pairsClasses}>
          {PROBLEMS_SOLUTIONS.map((item, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div className="position-relative">
                {useVerticalLayout ? (
                  /* Mobile/Tablet: Vertical layout */
                  <div className="ps-section__pair-vertical d-flex">
                    <ProblemCard
                      problem={item.problem}
                      isMobile={isMobile}
                      isTablet={isTablet}
                    />
                    <Arrow isVertical />
                    <SolutionCard
                      solution={item.solution}
                      isMobile={isMobile}
                      isTablet={isTablet}
                    />
                  </div>
                ) : (
                  /* Desktop: Horizontal layout - Problem left, Solution right */
                  <div className="ps-section__pair-horizontal">
                    <ProblemCard
                      problem={item.problem}
                      isMobile={isMobile}
                      isTablet={isTablet}
                    />
                    <Arrow isVertical={false} />
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
