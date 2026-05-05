import "./Hamburger.css";

export function Hamburger({ open, onClick }) {
  const barClasses = (position) =>
    [
      "hamburger__bar",
      `hamburger__bar--${position}`,
      open && "hamburger__bar--open",
    ]
      .filter(Boolean)
      .join(" ");

  return (
    <button
      onClick={onClick}
      aria-label="Toggle menu"
      className="hamburger d-flex flex-column"
    >
      <span className={barClasses("top")} />
      <span className={barClasses("middle")} />
      <span className={barClasses("bottom")} />
    </button>
  );
}
