import { useResponsive } from "../../../hooks";
import "./SurveyPopup.css";

export function SurveyPopup({ onClose }) {
  const { isMobile } = useResponsive();

  const handleClick = () => {
    sessionStorage.setItem("vaultly_survey_clicked", "1");
    onClose();
    window.location.href = "https://api.leadconnectorhq.com/widget/survey/KhdizKHJ37fwYLrzWOyj";
  };

  const cardClasses = [
    "survey-popup__card",
    isMobile ? "survey-popup__card--mobile" : "survey-popup__card--desktop",
  ].join(" ");

  const titleClasses = [
    "survey-popup__title",
    isMobile ? "survey-popup__title--mobile" : "survey-popup__title--desktop",
  ].join(" ");

  const bodyClasses = [
    "survey-popup__body",
    isMobile ? "survey-popup__body--mobile" : "survey-popup__body--desktop",
  ].join(" ");

  return (
    <div className="survey-popup d-flex align-items-center justify-content-center">
      <div className={cardClasses}>
        {/* Decorative corner */}
        <div className="survey-popup__corner" />

        {/* Close button */}
        <button onClick={onClose} className="survey-popup__close">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {/* Icon */}
        <div className="survey-popup__icon d-flex align-items-center justify-content-center">
          <svg
            width="26"
            height="26"
            viewBox="0 0 24 24"
            fill="none"
            stroke="var(--primary)"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M9 11l3 3L22 4" />
            <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
          </svg>
        </div>

        {/* Eyebrow */}
        <h2 className="survey-popup__eyebrow">Quick Survey</h2>

        {/* Headline */}
        <h3 className={titleClasses}>Help Us Build the Right Product</h3>

        {/* Body */}
        <p className={bodyClasses}>
          We're validating Vaultly before launch. Your honest opinion directly
          shapes what we build — and who we build it for.
        </p>
        <div className="survey-popup__time-badge d-inline-flex align-items-center">
          <svg
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="var(--primary)"
            strokeWidth="2"
            strokeLinecap="round"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M12 6v6l4 2" />
          </svg>
          <span className="survey-popup__time-text">Takes only 2–3 minutes</span>
        </div>

        {/* CTA */}
        <button onClick={handleClick} className="survey-popup__cta">
          Fill the Survey →
        </button>
      </div>
    </div>
  );
}
