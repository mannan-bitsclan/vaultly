import { useResponsive } from "../../hooks";

export function SurveyPopup({ onClose }) {
  const { isMobile } = useResponsive();

  const handleClick = () => {
    sessionStorage.setItem("vaultly_survey_clicked", "1");
    onClose();
    window.location.href = "https://tally.so/r/EkP7bN";
  };

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 500,
        background: "rgba(0, 0, 0, 0.6)",
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
        animation: "menuDrop 0.3s ease both",
      }}
    >
      <div
        style={{
          background: "var(--black)",
          border: "1px solid rgba(73, 73, 242, 0.2)",
          borderRadius: 12,
          padding: isMobile ? "32px 24px 28px" : "44px 48px 40px",
          maxWidth: 500,
          width: "100%",
          position: "relative",
          boxShadow: "0 40px 100px rgba(0,0,0,0.5), 0 0 0 1px rgba(73, 73, 242, 0.1)",
          animation: "menuDrop 0.35s cubic-bezier(.16,1,.3,1) both",
        }}
      >
        {/* Decorative corner */}
        <div
          style={{
            position: "absolute",
            top: 20,
            left: 20,
            width: 36,
            height: 36,
            borderTop: "1px solid rgba(73, 73, 242, 0.2)",
            borderLeft: "1px solid rgba(73, 73, 242, 0.2)",
            borderRadius: "4px 0 0 0",
            pointerEvents: "none",
          }}
        />

        {/* Close button */}
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: 16,
            right: 16,
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: 8,
            color: "var(--gray-500)",
            transition: "color 0.2s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "var(--white)")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "var(--gray-500)")}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {/* Icon */}
        <div
          style={{
            width: 56,
            height: 56,
            borderRadius: 12,
            background: "var(--primary-glow)",
            border: "1px solid rgba(73, 73, 242, 0.3)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 22,
            boxShadow: "0 0 32px rgba(73, 73, 242, 0.15)",
          }}
        >
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
        <p
          style={{
            fontSize: 10,
            letterSpacing: 3,
            textTransform: "uppercase",
            color: "var(--primary)",
            fontWeight: 700,
            marginBottom: 10,
          }}
        >
          Quick Survey
        </p>

        {/* Headline */}
        <h3
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontSize: isMobile ? "1.5rem" : "1.75rem",
            fontWeight: 700,
            color: "var(--white)",
            lineHeight: 1.2,
            letterSpacing: -0.5,
            marginBottom: 12,
          }}
        >
          Help Us Build the Right Product
        </h3>

        {/* Body */}
        <p
          style={{
            color: "var(--gray-400)",
            fontSize: isMobile ? 14 : 15,
            lineHeight: 1.75,
            marginBottom: 8,
          }}
        >
          We're validating Vaultly before launch. Your honest opinion directly
          shapes what we build — and who we build it for.
        </p>
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 6,
            background: "var(--primary-glow)",
            border: "1px solid rgba(73, 73, 242, 0.2)",
            borderRadius: 100,
            padding: "5px 14px",
            marginBottom: 28,
          }}
        >
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
          <span style={{ fontSize: 12, color: "var(--primary)", fontWeight: 600 }}>
            Takes only 2–3 minutes
          </span>
        </div>

        {/* CTA */}
        <button
          onClick={handleClick}
          style={{
            display: "block",
            width: "100%",
            background: "linear-gradient(135deg, var(--primary) 0%, var(--primary-light) 100%)",
            color: "var(--white)",
            padding: "14px 24px",
            borderRadius: 12,
            fontSize: 15,
            fontWeight: 700,
            textAlign: "center",
            border: "none",
            cursor: "pointer",
            transition: "opacity 0.2s, transform 0.2s",
            boxShadow: "0 8px 24px rgba(73, 73, 242, 0.3)",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.opacity = "0.9";
            e.currentTarget.style.transform = "translateY(-1px)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.opacity = "1";
            e.currentTarget.style.transform = "";
          }}
        >
          Fill the Survey →
        </button>
      </div>
    </div>
  );
}
