import { Link } from "react-router-dom";
import { Logo } from "../common";
import { useResponsive } from "../../hooks";

export function Footer() {
  const { isMobile } = useResponsive();

  return (
    <footer
      style={{
        background: "var(--black)",
        padding: isMobile ? "32px 5%" : "44px 5%",
        borderTop: "1px solid rgba(73, 73, 242, 0.1)",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          justifyContent: "space-between",
          alignItems: isMobile ? "flex-start" : "center",
          gap: isMobile ? 18 : 20,
          flexWrap: "wrap",
        }}
      >
        <Logo dark />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            flexWrap: "wrap",
          }}
        >
          <Link
            to="/privacy"
            style={{
              color: "var(--gray-500)",
              fontSize: 12,
              fontWeight: 500,
              transition: "color 0.2s",
              fontFamily: "'Inter', sans-serif",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--primary)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--gray-500)")}
          >
            Privacy Policy
          </Link>
          <span style={{ color: "var(--gray-700)", fontSize: 11 }}>|</span>
          <p style={{ color: "var(--gray-500)", fontSize: 11, margin: 0 }}>
            © 2026 Vaultly Inc. · Built on licensed payment infrastructure
          </p>
        </div>
      </div>
    </footer>
  );
}
