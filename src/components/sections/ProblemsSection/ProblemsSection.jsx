import { Reveal } from "../../common";
import { useResponsive } from "../../../hooks";
import "./ProblemsSection.css";

const PROBLEMS = [
  {
    letter: "A",
    color: "#4949f2",
    title: '"Who approved this — and why is it still running?"',
    stat: "$1200 / yr",
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

  const sectionClasses = [
    "problems-section",
    isMobile ? "problems-section--mobile" : isTablet ? "problems-section--tablet" : "problems-section--desktop",
  ].join(" ");

  const headerClasses = [
    "problems-section__header text-center",
    isMobile && "problems-section__header--mobile",
  ].filter(Boolean).join(" ");

  const eyebrowClasses = [
    "problems-section__eyebrow",
    isMobile && "problems-section__eyebrow--mobile",
  ].filter(Boolean).join(" ");

  const titleClasses = [
    "problems-section__title",
    isMobile ? "problems-section__title--mobile" : isTablet ? "problems-section__title--tablet" : "",
  ].filter(Boolean).join(" ");

  const subtitleClasses = [
    "problems-section__subtitle text-center",
    isMobile && "problems-section__subtitle--mobile",
  ].filter(Boolean).join(" ");

  const gridClasses = [
    "problems-section__grid",
    isMobile ? "problems-section__grid--mobile" : "problems-section__grid--desktop",
  ].join(" ");

  return (
    <section id="section-problems" className={sectionClasses}>
      <div className="problems-section__container mx-auto">
        <Reveal>
          <div className={headerClasses}>
            <h2 className={eyebrowClasses}>The Problems We're Solving</h2>
            <h3 className={titleClasses}>
              Four Silent Problems That
              <br />
              <span className="text-primary">Drain Thousands</span> From
              Teams Every Year
            </h3>
            <p className={subtitleClasses}>
              Not metaphorically. Every month, these four patterns silently
              drain business accounts. This is exactly why we're building
              Vaultly.
            </p>
          </div>
        </Reveal>

        <div className={gridClasses}>
          {PROBLEMS.map((p, i) => {
            const cardClasses = [
              "problem-card text-center",
              isMobile ? "problem-card--mobile" : isTablet ? "problem-card--tablet" : "problem-card--desktop",
            ].join(" ");

            const bgLetterClasses = [
              "problem-card__bg-letter",
              isMobile && "problem-card__bg-letter--mobile",
            ].filter(Boolean).join(" ");

            const labelClasses = [
              "problem-card__label",
              isMobile && "problem-card__label--mobile",
            ].filter(Boolean).join(" ");

            const titleCardClasses = [
              "problem-card__title",
              isMobile && "problem-card__title--mobile",
            ].filter(Boolean).join(" ");

            const statClasses = [
              "problem-card__stat",
              isMobile && "problem-card__stat--mobile",
            ].filter(Boolean).join(" ");

            const statDescClasses = [
              "problem-card__stat-desc",
              isMobile && "problem-card__stat-desc--mobile",
            ].filter(Boolean).join(" ");

            const bodyClasses = [
              "problem-card__body",
              isMobile && "problem-card__body--mobile",
            ].filter(Boolean).join(" ");

            return (
              <Reveal key={i} delay={i * 0.06}>
                <div
                  className={cardClasses}
                  style={{ "--card-color": p.color }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = `${p.color}50`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "var(--gray-200)";
                  }}
                >
                  {/* Background letter */}
                  <div
                    className={bgLetterClasses}
                    style={{ color: `${p.color}08` }}
                  >
                    {p.letter}
                  </div>

                  <div className={labelClasses} style={{ color: p.color }}>
                    Problem {p.letter}
                  </div>

                  <h3 className={titleCardClasses}>{p.title}</h3>

                  <div className="problem-card__stat-wrapper d-inline-flex align-items-center">
                    <div>
                      <div className={statClasses} style={{ color: p.color }}>
                        {p.stat}
                      </div>
                      {p.statSub && (
                        <div className={statClasses} style={{ color: p.color }}>
                          {p.statSub}
                        </div>
                      )}
                    </div>
                    <span className={statDescClasses}>{p.statDesc}</span>
                  </div>

                  <p className={bodyClasses}>{p.body}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
