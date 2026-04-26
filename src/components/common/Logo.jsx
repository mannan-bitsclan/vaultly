import logoImg from "../../assets/logo.png";

export function Logo({ dark = false, compact = false }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: compact ? 8 : 10,
      }}
    >
      <img
        src={logoImg}
        alt="Vaultly"
        style={{
          width: compact ? 36 : 48,
          height: compact ? 36 : 48,
          borderRadius: 8,
        }}
      />
      <span
        style={{
          fontFamily: "'Poppins', sans-serif",
          fontSize: compact ? 22 : 28,
          fontWeight: 700,
          letterSpacing: -0.5,
          color: dark ? "var(--white)" : "var(--gray-900)",
        }}
      >
        Vaultly
      </span>
    </div>
  );
}
