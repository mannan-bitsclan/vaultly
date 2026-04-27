import { useState, useEffect } from "react";
import { Logo, Hamburger } from "../common";
import { NAV_LINKS } from "../../data";
import { useResponsive } from "../../hooks";
import { scrollTo } from "../../utils/scroll";

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

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 200,
          padding: isMobile ? "8px 5%" : "10px 5%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          background:
            scrollY > 40 || menuOpen
              ? "rgba(255, 255, 255, 0.95)"
              : "rgba(255, 255, 255, 0.8)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          borderBottom:
            scrollY > 40 || menuOpen
              ? "1px solid var(--gray-200)"
              : "1px solid transparent",
          transition: "background 0.35s, border-color 0.35s",
        }}
      >
        <Logo compact={isMobile} />
        {isDesktop && (
          <div style={{ display: "flex", gap: 32 }}>
            {NAV_LINKS.map(({ label, id }) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                style={{
                  background: "none",
                  border: "none",
                  fontSize: 14,
                  
                  color: "#000000",
                  letterSpacing: '1px',
                  fontWeight: 500,
                  cursor: "pointer",
                  padding: 0,
                  transition: "color 0.2s",
                  fontFamily: "'Inter', sans-serif",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--primary)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--gray-600)")}
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
        <div
          style={{
            position: "fixed",
            top: isMobile ? 56 : 62,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 190,
            background: "rgba(255, 255, 255, 0.98)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            padding: "8px 5% 32px",
            display: "flex",
            flexDirection: "column",
            animation: "menuDrop 0.25s ease both",
            overflowY: "auto",
          }}
        >
          {NAV_LINKS.map(({ label, id }, i) => (
            <button
              key={id}
              onClick={() => handleNav(id)}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                background: "none",
                border: "none",
                borderBottom: "1px solid var(--gray-100)",
                padding: "20px 0",
                fontSize: 17,
                fontWeight: 500,
                color: "var(--gray-900)",
                cursor: "pointer",
                textAlign: "left",
                fontFamily: "'Inter', sans-serif",
                animation: `menuDrop 0.25s ease ${i * 0.05}s both`,
              }}
            >
              {label}
              <span style={{ color: "var(--primary)", fontSize: 18 }}>→</span>
            </button>
          ))}
        </div>
      )}
    </>
  );
}
