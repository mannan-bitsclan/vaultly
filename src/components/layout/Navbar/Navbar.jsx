import { useState, useEffect } from "react";
import { Logo, Hamburger } from "../../common";
import { NAV_LINKS } from "../../../data";
import { useResponsive } from "../../../hooks";
import { scrollTo } from "../../../utils/scroll";
import "./Navbar.css";

export function Navbar() {
  const [scrollY, setScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const { isMobile, isTablet, isDesktop } = useResponsive();

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isDesktop) setMenuOpen(false);
  }, [isDesktop]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const handleNav = (id) => {
    setMenuOpen(false);
    setTimeout(() => scrollTo(id), 320);
  };

  const navClasses = [
    "navbar",
    "d-flex",
    "justify-content-between",
    "align-items-center",
    isMobile && "navbar--mobile",
    (scrollY > 40 || menuOpen) && "navbar--scrolled",
    menuOpen && "navbar--menu-open",
  ]
    .filter(Boolean)
    .join(" ");

  const mobileMenuClasses = [
    "navbar__mobile-menu",
    "d-flex",
    "flex-column",
    isMobile ? "navbar__mobile-menu--mobile" : "navbar__mobile-menu--tablet",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <>
      <nav className={navClasses}>
        <Logo compact={isMobile} />
        {isDesktop && (
          <div className="navbar__links d-flex">
            {NAV_LINKS.map(({ label, id }) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className="navbar__link"
              >
                {label}
              </button>
            ))}
          </div>
        )}
        {(isTablet || isMobile) && (
          <Hamburger open={menuOpen} onClick={() => setMenuOpen((o) => !o)} />
        )}
      </nav>

      {menuOpen && !isDesktop && (
        <div className={mobileMenuClasses}>
          {NAV_LINKS.map(({ label, id }, i) => (
            <button
              key={id}
              onClick={() => handleNav(id)}
              className="navbar__mobile-link d-flex align-items-center justify-content-between"
              style={{ animationDelay: `${i * 0.05}s` }}
            >
              {label}
              <span className="navbar__mobile-link-arrow">→</span>
            </button>
          ))}
        </div>
      )}
    </>
  );
}
