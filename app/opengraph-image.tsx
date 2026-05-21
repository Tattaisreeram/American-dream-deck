import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#080808",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "system-ui, -apple-system, sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Radial glow */}
        <div
          style={{
            position: "absolute",
            top: -120,
            left: "50%",
            transform: "translateX(-50%)",
            width: 900,
            height: 600,
            borderRadius: "50%",
            background:
              "radial-gradient(ellipse at center, rgba(201,168,76,0.14) 0%, transparent 70%)",
          }}
        />

        {/* Location tag */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            marginBottom: 36,
            color: "rgba(201,168,76,0.75)",
            fontSize: 14,
            letterSpacing: "0.38em",
            textTransform: "uppercase",
          }}
        >
          <div
            style={{
              width: 6,
              height: 6,
              borderRadius: "50%",
              background: "#c9a84c",
            }}
          />
          East Rutherford, New Jersey
        </div>

        {/* AMERICAN */}
        <div
          style={{
            fontSize: 108,
            fontWeight: 900,
            color: "#ffffff",
            letterSpacing: "-0.03em",
            lineHeight: 1,
            marginBottom: 4,
          }}
        >
          AMERICAN
        </div>

        {/* DREAM — gold */}
        <div
          style={{
            fontSize: 108,
            fontWeight: 900,
            color: "#c9a84c",
            letterSpacing: "-0.03em",
            lineHeight: 1,
            marginBottom: 52,
          }}
        >
          DREAM
        </div>

        {/* Divider */}
        <div
          style={{
            width: 48,
            height: 1,
            background: "rgba(201,168,76,0.4)",
            marginBottom: 48,
          }}
        />

        {/* Stats row */}
        <div style={{ display: "flex", gap: 72 }}>
          {[
            ["40M+", "Annual Visitors"],
            ["3M sq ft", "Retail Space"],
            ["9", "World-Class Attractions"],
          ].map(([num, label]) => (
            <div
              key={label}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 6,
              }}
            >
              <div
                style={{
                  fontSize: 30,
                  fontWeight: 900,
                  color: "#ffffff",
                  letterSpacing: "-0.02em",
                }}
              >
                {num}
              </div>
              <div
                style={{
                  fontSize: 11,
                  color: "rgba(255,255,255,0.35)",
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                }}
              >
                {label}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom label */}
        <div
          style={{
            position: "absolute",
            bottom: 32,
            display: "flex",
            alignItems: "center",
            gap: 8,
            color: "rgba(255,255,255,0.2)",
            fontSize: 11,
            letterSpacing: "0.3em",
            textTransform: "uppercase",
          }}
        >
          Partner Presentation
        </div>
      </div>
    ),
    { ...size }
  );
}
