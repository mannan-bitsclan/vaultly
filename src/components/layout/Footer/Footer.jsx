import { Link } from "react-router-dom";
import { Logo } from "../../common";
import { useResponsive } from "../../../hooks";
import "./Footer.css";

export function Footer() {
  const { isMobile } = useResponsive();

  const footerClasses = [
    "footer",
    isMobile ? "footer--mobile" : "footer--desktop",
  ].join(" ");

  const containerClasses = [
    "footer__container",
    "mx-auto",
    "d-flex",
    "flex-wrap",
    isMobile ? "flex-column align-items-start" : "flex-row justify-content-between align-items-center",
  ].join(" ");

  const linksClasses = [
    "footer__links",
    "d-flex",
    "align-items-center",
    "flex-wrap",
  ].join(" ");

  return (
    <footer className={footerClasses}>
      <div className={containerClasses} style={{ gap: isMobile ? 18 : 20 }}>
        <Logo />
        <div className={linksClasses}>
          <Link to="/privacy" className="footer__link">
            Privacy Policy
          </Link>
          <span className="footer__divider">|</span>
          <p className="footer__copyright">
            © 2026 Vaultly Inc. · Built on licensed payment infrastructure
          </p>
        </div>
      </div>
    </footer>
  );
}
