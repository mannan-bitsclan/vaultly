import { useState } from "react";
import { PLATFORMS, PLATFORMS_ROW2 } from "../../../data";
import "./PlatformTicker.css";

function PlatformCard({ platform }) {
  return (
    <div
      className="platform-card d-flex align-items-center"
      style={{
        "--platform-color": platform.color,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = `${platform.color}50`;
        e.currentTarget.style.boxShadow = `0 8px 32px ${platform.color}20`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.08)";
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      <div
        className="platform-card__icon d-flex align-items-center justify-content-center"
        style={{
          background: `linear-gradient(135deg, ${platform.color}20 0%, ${platform.color}10 100%)`,
          border: `1px solid ${platform.color}30`,
          color: platform.color,
        }}
        dangerouslySetInnerHTML={{
          __html: platform.icon.replace(
            "<svg",
            '<svg style="width: 24px; height: 24px;"'
          ),
        }}
      />
      <span className="platform-card__name">{platform.name}</span>
    </div>
  );
}

export function PlatformTicker() {
  const [pausedRow, setPausedRow] = useState(null);

  return (
    <div className="platform-ticker">
      {/* Subtle grid pattern */}
      <svg className="platform-ticker__grid" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="tickerGrid" width="32" height="32" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="1" fill="var(--primary)" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#tickerGrid)" />
      </svg>

      {/* Gradient fades */}
      <div className="platform-ticker__fade platform-ticker__fade--left" />
      <div className="platform-ticker__fade platform-ticker__fade--right" />

      {/* Section Header */}
      <div className="platform-ticker__header text-center">
        <h2 className="platform-ticker__eyebrow">Seamless Integration</h2>
        <h3 className="platform-ticker__title">
          Works With Your <span className="highlighted-text">Favorite Tools</span>
        </h3>
      </div>

      {/* Ticker Rows */}
      {[PLATFORMS, PLATFORMS_ROW2].map((row, rowIndex) => {
        const trackClasses = [
          "platform-ticker__track",
          "d-flex",
          rowIndex === 0 ? "platform-ticker__track--left" : "platform-ticker__track--right",
          pausedRow === rowIndex && "platform-ticker__track--paused",
        ]
          .filter(Boolean)
          .join(" ");

        return (
          <div
            key={rowIndex}
            className={`platform-ticker__row${rowIndex === 0 ? " platform-ticker__row--first" : ""}`}
            onMouseEnter={() => setPausedRow(rowIndex)}
            onMouseLeave={() => setPausedRow(null)}
          >
            <div className={trackClasses}>
              {[...row, ...row].map((platform, index) => (
                <PlatformCard key={`${platform.name}-${index}`} platform={platform} />
              ))}
            </div>
          </div>
        );
      })}

      {/* Bottom accent glow */}
      <div className="platform-ticker__accent" />
    </div>
  );
}
