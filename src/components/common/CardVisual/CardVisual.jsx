import "./CardVisual.css";

const cardConfigs = {
  fortress: {
    gradient: "linear-gradient(145deg, #0f0f0f 0%, #1a1a2e 50%, #16213e 100%)",
    border: "#4949f2",
    glow: "rgba(73, 73, 242, 0.4)",
    label: "FORTRESS CARD",
    sub: "All subscriptions · Unknowns blocked",
    badge: { text: "ALLOWLIST ACTIVE", bg: "rgba(73, 73, 242, 0.15)", color: "#818cf8" },
    chip: "linear-gradient(135deg, #4949f2 0%, #6366f1 100%)",
    accent: "#4949f2",
  },
  shield: {
    gradient: "linear-gradient(145deg, #0a1612 0%, #0d2818 50%, #134e28 100%)",
    border: "#10b981",
    glow: "rgba(16, 185, 129, 0.4)",
    label: "TRIAL SHIELD",
    sub: "Maximum charge: $1.00",
    badge: { text: "RENEWALS BLOCKED", bg: "rgba(16, 185, 129, 0.15)", color: "#34d399" },
    chip: "linear-gradient(135deg, #059669 0%, #10b981 100%)",
    accent: "#10b981",
  },
  kill: {
    gradient: "linear-gradient(145deg, #150a1c 0%, #2d1a3e 50%, #4c1d95 100%)",
    border: "#a855f7",
    glow: "rgba(168, 85, 247, 0.4)",
    label: "KILL SWITCH",
    sub: "Void in one tap",
    badge: { text: "CARD VOIDED", bg: "rgba(168, 85, 247, 0.15)", color: "#c084fc" },
    chip: "linear-gradient(135deg, #7c3aed 0%, #a855f7 100%)",
    accent: "#a855f7",
  },
  social: {
    gradient: "linear-gradient(145deg, #1a0a0a 0%, #3d1515 50%, #7f1d1d 100%)",
    border: "#ef4444",
    glow: "rgba(239, 68, 68, 0.4)",
    label: "SOCIAL TOP-UP",
    sub: "Friends settle their share",
    badge: { text: "COLLECTING", bg: "rgba(239, 68, 68, 0.15)", color: "#f87171" },
    chip: "linear-gradient(135deg, #dc2626 0%, #ef4444 100%)",
    accent: "#ef4444",
  },
};

export function CardVisual({ type, small = false, animate = true }) {
  const config = cardConfigs[type] || cardConfigs.fortress;

  const cardClasses = [
    "card-visual",
    "d-flex",
    "flex-column",
    "justify-content-between",
    small ? "card-visual--small" : "card-visual--default",
  ].join(" ");

  const shimmerClasses = [
    "card-visual__shimmer",
    animate && "card-visual__shimmer--animate",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div
      className={cardClasses}
      style={{
        background: config.gradient,
        border: `1px solid ${config.border}30`,
        boxShadow: animate
          ? `0 0 40px ${config.glow}, 0 25px 50px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255,255,255,0.1)`
          : `0 25px 50px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255,255,255,0.1)`,
      }}
    >
      {/* Shimmer effect */}
      <div className={shimmerClasses} />

      {/* Top glow accent */}
      <div
        className="card-visual__glow"
        style={{
          background: `radial-gradient(circle, ${config.border}15 0%, transparent 70%)`,
        }}
      />

      {/* Card network pattern */}
      <div className="card-visual__network">
        <svg width="60" height="40" viewBox="0 0 60 40" fill="none">
          <circle cx="20" cy="20" r="18" stroke={config.border} strokeWidth="1" />
          <circle cx="40" cy="20" r="18" stroke={config.border} strokeWidth="1" />
        </svg>
      </div>

      {/* Header */}
      <div className="d-flex justify-content-between align-items-start">
        <div>
          <div className={`card-visual__label${small ? " card-visual__label--small" : ""}`}>
            {config.label}
          </div>
          <div
            className={`card-visual__sub${small ? " card-visual__sub--small" : ""}`}
            style={{ color: config.border }}
          >
            {config.sub}
          </div>
        </div>

        {/* Vaultly Logo */}
        <div className="d-flex align-items-center" style={{ gap: 6 }}>
          <svg width={small ? 18 : 22} height={small ? 18 : 22} viewBox="0 0 28 28" fill="none">
            <rect x="2" y="6" width="24" height="18" rx="3" stroke={config.border} strokeWidth="1.5" fill="none" />
            <circle cx="14" cy="15" r="4" stroke={config.border} strokeWidth="1.5" fill="none" />
            <path d="M14 11V8" stroke={config.border} strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </div>
      </div>

      {/* Card body */}
      <div>
        {/* Chip */}
        <div
          className={`card-visual__chip${small ? " card-visual__chip--small" : ""}`}
          style={{
            background: config.chip,
            boxShadow: `0 4px 12px ${config.border}30`,
          }}
        >
          <div className="card-visual__chip-line-h" />
          <div className="card-visual__chip-line-v" />
        </div>

        {/* Card number and badge */}
        <div className="d-flex justify-content-between align-items-end">
          <div>
            <div className={`card-visual__number${small ? " card-visual__number--small" : ""}`}>
              •••• •••• •••• 7821
            </div>
            <div className={`card-visual__expiry${small ? " card-visual__expiry--small" : ""}`}>
              VALID THRU 03/28
            </div>
          </div>
          <div
            className={`card-visual__badge${small ? " card-visual__badge--small" : ""}`}
            style={{
              background: config.badge.bg,
              border: `1px solid ${config.border}40`,
              color: config.badge.color,
            }}
          >
            {config.badge.text}
          </div>
        </div>
      </div>
    </div>
  );
}
