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
  const width = small ? 240 : 320;
  const height = small ? 150 : 200;

  return (
    <div
      style={{
        width,
        height,
        borderRadius: small ? 16 : 20,
        background: config.gradient,
        border: `1px solid ${config.border}30`,
        padding: small ? "18px 20px" : "24px 28px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        boxShadow: animate
          ? `0 0 40px ${config.glow}, 0 25px 50px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255,255,255,0.1)`
          : `0 25px 50px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255,255,255,0.1)`,
        fontFamily: "'DM Mono', 'SF Mono', monospace",
        position: "relative",
        overflow: "hidden",
        transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
      }}
    >
      {/* Shimmer effect */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: "-100%",
          width: "200%",
          height: "100%",
          background: `linear-gradient(90deg, transparent, rgba(255,255,255,0.05), transparent)`,
          animation: animate ? "shimmer 3s ease-in-out infinite" : "none",
          pointerEvents: "none",
        }}
      />

      {/* Top glow accent */}
      <div
        style={{
          position: "absolute",
          top: -50,
          right: -50,
          width: 150,
          height: 150,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${config.border}15 0%, transparent 70%)`,
          pointerEvents: "none",
        }}
      />

      {/* Card network pattern */}
      <div
        style={{
          position: "absolute",
          bottom: 10,
          right: 10,
          opacity: 0.1,
          pointerEvents: "none",
        }}
      >
        <svg width="60" height="40" viewBox="0 0 60 40" fill="none">
          <circle cx="20" cy="20" r="18" stroke={config.border} strokeWidth="1" />
          <circle cx="40" cy="20" r="18" stroke={config.border} strokeWidth="1" />
        </svg>
      </div>

      {/* Header */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
        }}
      >
        <div>
          <div
            style={{
              fontSize: small ? 8 : 9,
              letterSpacing: 3,
              color: "rgba(255, 255, 255, 0.5)",
              textTransform: "uppercase",
              fontWeight: 500,
            }}
          >
            {config.label}
          </div>
          <div
            style={{
              fontSize: small ? 11 : 13,
              color: config.border,
              marginTop: 4,
              fontWeight: 500,
              letterSpacing: 0.5,
            }}
          >
            {config.sub}
          </div>
        </div>

        {/* Vaultly Logo */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 6,
          }}
        >
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
          style={{
            width: small ? 36 : 44,
            height: small ? 26 : 32,
            background: config.chip,
            borderRadius: 6,
            marginBottom: small ? 12 : 16,
            position: "relative",
            overflow: "hidden",
            boxShadow: `0 4px 12px ${config.border}30`,
          }}
        >
          {/* Chip lines */}
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "10%",
              width: "80%",
              height: 1,
              background: "rgba(255,255,255,0.3)",
            }}
          />
          <div
            style={{
              position: "absolute",
              top: "30%",
              left: "50%",
              width: 1,
              height: "40%",
              background: "rgba(255,255,255,0.3)",
            }}
          />
        </div>

        {/* Card number and badge */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
          }}
        >
          <div>
            <div
              style={{
                fontSize: small ? 11 : 13,
                letterSpacing: 3,
                color: "rgba(255, 255, 255, 0.6)",
                fontWeight: 400,
              }}
            >
              •••• •••• •••• 7821
            </div>
            <div
              style={{
                fontSize: small ? 9 : 10,
                color: "rgba(255, 255, 255, 0.35)",
                marginTop: 4,
                letterSpacing: 1,
              }}
            >
              VALID THRU 03/28
            </div>
          </div>
          <div
            style={{
              background: config.badge.bg,
              border: `1px solid ${config.border}40`,
              borderRadius: 100,
              padding: small ? "3px 10px" : "4px 12px",
              fontSize: small ? 7 : 8,
              color: config.badge.color,
              letterSpacing: 1.5,
              fontWeight: 600,
              textTransform: "uppercase",
              backdropFilter: "blur(8px)",
            }}
          >
            {config.badge.text}
          </div>
        </div>
      </div>
    </div>
  );
}
