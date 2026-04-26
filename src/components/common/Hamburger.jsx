export function Hamburger({ open, onClick }) {
  return (
    <button
      onClick={onClick}
      aria-label="Toggle menu"
      style={{
        background: "none",
        border: "none",
        cursor: "pointer",
        padding: "8px 4px",
        display: "flex",
        flexDirection: "column",
        gap: 5,
        zIndex: 210,
      }}
    >
      <span
        style={{
          display: "block",
          width: 22,
          height: 2,
          background: "var(--gray-900)",
          borderRadius: 2,
          transition: "all 0.3s",
          transform: open ? "rotate(45deg) translate(5px,5px)" : "none",
        }}
      />
      <span
        style={{
          display: "block",
          width: 22,
          height: 2,
          background: "var(--gray-900)",
          borderRadius: 2,
          transition: "all 0.3s",
          opacity: open ? 0 : 1,
        }}
      />
      <span
        style={{
          display: "block",
          width: 22,
          height: 2,
          background: "var(--gray-900)",
          borderRadius: 2,
          transition: "all 0.3s",
          transform: open ? "rotate(-45deg) translate(5px,-5px)" : "none",
        }}
      />
    </button>
  );
}
