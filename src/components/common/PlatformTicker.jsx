import { useState } from "react";
import { PLATFORMS, PLATFORMS_ROW2 } from "../../data";

function PlatformCard({ platform }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 14,
        background: "rgba(255, 255, 255, 0.03)",
        border: "1px solid rgba(255, 255, 255, 0.08)",
        borderRadius: 16,
        padding: "16px 24px",
        whiteSpace: "nowrap",
        transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
        cursor: "default",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = "rgba(255, 255, 255, 0.08)";
        e.currentTarget.style.borderColor = `${platform.color}50`;
        e.currentTarget.style.transform = "scale(1.02)";
        e.currentTarget.style.boxShadow = `0 8px 32px ${platform.color}20`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = "rgba(255, 255, 255, 0.03)";
        e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.08)";
        e.currentTarget.style.transform = "scale(1)";
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      {/* Big Icon */}
      <div
        style={{
          width: 44,
          height: 44,
          borderRadius: 12,
          background: `linear-gradient(135deg, ${platform.color}20 0%, ${platform.color}10 100%)`,
          border: `1px solid ${platform.color}30`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
          color: platform.color,
          transition: "all 0.3s ease",
        }}
        dangerouslySetInnerHTML={{
          __html: platform.icon.replace(
            "<svg",
            '<svg style="width: 24px; height: 24px;"'
          ),
        }}
      />
      <span
        style={{
          fontSize: 15,
          fontWeight: 600,
          color: "var(--gray-200)",
          fontFamily: "'Inter', sans-serif",
          letterSpacing: 0.3,
        }}
      >
        {platform.name}
      </span>
    </div>
  );
}

export function PlatformTicker() {
  const [pausedRow, setPausedRow] = useState(null);

  return (
    <div
      style={{
        padding: "48px 0 56px",
        position: "relative",
        overflow: "hidden",
        background: "var(--black)",
      }}
    >
      {/* Subtle grid pattern */}
      <svg
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          opacity: 0.03,
          pointerEvents: "none",
        }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="tickerGrid" width="32" height="32" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="1" fill="var(--primary)" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#tickerGrid)" />
      </svg>

      {/* Left gradient fade */}
      <div
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          bottom: 0,
          width: 150,
          background: "linear-gradient(to right, var(--black), transparent)",
          zIndex: 3,
          pointerEvents: "none",
        }}
      />
      {/* Right gradient fade */}
      <div
        style={{
          position: "absolute",
          right: 0,
          top: 0,
          bottom: 0,
          width: 150,
          background: "linear-gradient(to left, var(--black), transparent)",
          zIndex: 3,
          pointerEvents: "none",
        }}
      />

      {/* Section Header */}
      <div
        style={{
          textAlign: "center",
          marginBottom: 36,
          position: "relative",
          zIndex: 2,
        }}
      >
        <p
          style={{
            fontSize: 12,
            letterSpacing: 3,
            textTransform: "uppercase",
            color: "var(--primary)",
            fontWeight: 600,
            marginBottom: 10,
          }}
        >
          Seamless Integration
        </p>
        <h3
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontSize: "clamp(1.5rem, 3vw, 2rem)",
            fontWeight: 700,
            color: "var(--white)",
            letterSpacing: -0.5,
          }}
        >
          Works With Your <span style={{ color: "var(--primary)" }}>Favorite Tools</span>
        </h3>
      </div>

      {/* Ticker Rows */}
      {[PLATFORMS, PLATFORMS_ROW2].map((row, rowIndex) => (
        <div
          key={rowIndex}
          style={{
            overflow: "hidden",
            marginBottom: rowIndex === 0 ? 16 : 0,
            position: "relative",
            zIndex: 2,
          }}
          onMouseEnter={() => setPausedRow(rowIndex)}
          onMouseLeave={() => setPausedRow(null)}
        >
          <div
            style={{
              display: "flex",
              gap: 16,
              width: "max-content",
              animation: `${rowIndex === 0 ? "tickerLeft" : "tickerRight"} ${rowIndex === 0 ? "35s" : "40s"} linear infinite`,
              animationPlayState: pausedRow === rowIndex ? "paused" : "running",
            }}
          >
            {[...row, ...row].map((platform, index) => (
              <PlatformCard key={`${platform.name}-${index}`} platform={platform} />
            ))}
          </div>
        </div>
      ))}

      {/* Bottom accent glow */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "60%",
          height: 1,
          background: "linear-gradient(90deg, transparent, var(--primary), transparent)",
          opacity: 0.3,
        }}
      />
    </div>
  );
}
