"use client";

import { useEffect } from "react";

const VENUES = [
  {
    name: "Grand Atrium",
    type: "Flagship Event Space",
    sqft: "35,000 sq ft",
    capacity: "10,000 standing",
    best: "Concerts · product launches · press events · brand activations",
  },
  {
    name: "Performing Arts Center",
    type: "World-Class Theater",
    sqft: "45,000 sq ft",
    capacity: "2,500 seats",
    best: "Broadway tours · award shows · galas · corporate showcases",
  },
  {
    name: "Exposition Center",
    type: "Convention & Trade Show",
    sqft: "150,000 sq ft",
    capacity: "Flexible layout",
    best: "Trade shows · conventions · consumer expos · B2B summits",
  },
  {
    name: "East Rutherford Terrace",
    type: "Outdoor Activation",
    sqft: "25,000 sq ft",
    capacity: "5,000 outdoor",
    best: "Outdoor concerts · festivals · seasonal pop-ups · food markets",
  },
];

const INFRASTRUCTURE = [
  "In-house A/V production team",
  "4K LED screens & full rigging grid",
  "Green room & artist hospitality suites",
  "Broadcast-ready fiber uplink",
  "Dedicated loading docks (8 bays)",
  "26,000 free parking spaces on-site",
  "On-site catering & F&B coordination",
  "24/7 security & event operations",
];

const EVENT_TYPES = [
  "Concerts & Live Music",
  "Corporate Events & Summits",
  "Brand Activations",
  "Trade Shows & Expos",
  "Film & TV Productions",
  "Galas & Award Shows",
  "Pop-up Retail & Launches",
  "Private & Social Events",
];

export default function EventGuide() {
  useEffect(() => {
    if (new URLSearchParams(globalThis.location.search).get("print") === "1") {
      const t = setTimeout(() => globalThis.print(), 600);
      return () => clearTimeout(t);
    }
  }, []);

  return (
    <>
      {/* Print trigger button — hidden on print */}
      <div className="no-print fixed top-4 right-4 z-50 flex gap-2">
        <button
          onClick={() => globalThis.print()}
          style={{
            background: "#c9a84c",
            color: "#000",
            border: "none",
            padding: "10px 20px",
            fontSize: "11px",
            fontWeight: 700,
            letterSpacing: "0.25em",
            textTransform: "uppercase",
            cursor: "pointer",
            borderRadius: "2px",
          }}
        >
          Save as PDF
        </button>
        <a
          href="/"
          style={{
            background: "transparent",
            color: "#666",
            border: "1px solid #333",
            padding: "10px 20px",
            fontSize: "11px",
            fontWeight: 700,
            letterSpacing: "0.25em",
            textTransform: "uppercase",
            textDecoration: "none",
            borderRadius: "2px",
            display: "inline-block",
          }}
        >
          ← Back to Deck
        </a>
      </div>

      <main
        style={{
          background: "#fff",
          color: "#111",
          fontFamily:
            "var(--font-geist-sans), -apple-system, BlinkMacSystemFont, system-ui, sans-serif",
          minHeight: "100vh",
          padding: "64px 80px",
          maxWidth: "900px",
          margin: "0 auto",
        }}
      >
        {/* Header */}
        <div
          style={{
            borderBottom: "3px solid #c9a84c",
            paddingBottom: "32px",
            marginBottom: "48px",
          }}
        >
          <p
            style={{
              fontSize: "10px",
              letterSpacing: "0.5em",
              textTransform: "uppercase",
              color: "#c9a84c",
              marginBottom: "12px",
              fontWeight: 600,
            }}
          >
            American Dream · East Rutherford, NJ
          </p>
          <h1
            style={{
              fontSize: "48px",
              fontWeight: 900,
              letterSpacing: "-0.03em",
              lineHeight: 1,
              marginBottom: "16px",
              color: "#080808",
            }}
          >
            Events &amp; Venues
            <br />
            <span style={{ color: "#c9a84c" }}>Guide</span>
          </h1>
          <p
            style={{
              fontSize: "15px",
              color: "#555",
              maxWidth: "520px",
              lineHeight: 1.6,
            }}
          >
            200+ events annually. Four world-class venues. Every infrastructure
            you need — under one roof in the New York metro.
          </p>
        </div>

        {/* Key stats */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "24px",
            marginBottom: "48px",
          }}
        >
          {[
            ["200+", "Events / Year"],
            ["10,000", "Max Capacity"],
            ["255K sq ft", "Total Event Space"],
            ["40M+", "Annual Property Visitors"],
          ].map(([num, label]) => (
            <div
              key={label}
              style={{
                borderLeft: "2px solid #c9a84c",
                paddingLeft: "16px",
              }}
            >
              <div
                style={{
                  fontSize: "26px",
                  fontWeight: 900,
                  color: "#080808",
                  letterSpacing: "-0.02em",
                }}
              >
                {num}
              </div>
              <div
                style={{
                  fontSize: "10px",
                  color: "#888",
                  textTransform: "uppercase",
                  letterSpacing: "0.18em",
                  marginTop: "4px",
                }}
              >
                {label}
              </div>
            </div>
          ))}
        </div>

        {/* Venues */}
        <h2
          style={{
            fontSize: "11px",
            fontWeight: 700,
            letterSpacing: "0.45em",
            textTransform: "uppercase",
            color: "#999",
            marginBottom: "20px",
          }}
        >
          Venue Specifications
        </h2>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            marginBottom: "48px",
          }}
        >
          {VENUES.map((v) => (
            <div
              key={v.name}
              style={{
                border: "1px solid #e8e8e8",
                borderRadius: "8px",
                padding: "24px",
                display: "grid",
                gridTemplateColumns: "1fr auto",
                gap: "24px",
                alignItems: "start",
              }}
            >
              <div>
                <div
                  style={{
                    fontSize: "9px",
                    letterSpacing: "0.4em",
                    textTransform: "uppercase",
                    color: "#c9a84c",
                    marginBottom: "6px",
                    fontWeight: 600,
                  }}
                >
                  {v.type}
                </div>
                <div
                  style={{
                    fontSize: "20px",
                    fontWeight: 800,
                    color: "#080808",
                    marginBottom: "8px",
                  }}
                >
                  {v.name}
                </div>
                <div style={{ fontSize: "13px", color: "#666" }}>{v.best}</div>
              </div>
              <div style={{ textAlign: "right", flexShrink: 0 }}>
                <div
                  style={{
                    fontSize: "18px",
                    fontWeight: 800,
                    color: "#080808",
                  }}
                >
                  {v.sqft}
                </div>
                <div style={{ fontSize: "12px", color: "#888", marginTop: "4px" }}>
                  {v.capacity}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Two columns: Event types + Infrastructure */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "48px",
            marginBottom: "48px",
          }}
        >
          <div>
            <h2
              style={{
                fontSize: "11px",
                fontWeight: 700,
                letterSpacing: "0.45em",
                textTransform: "uppercase",
                color: "#999",
                marginBottom: "16px",
              }}
            >
              Event Types
            </h2>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "10px" }}
            >
              {EVENT_TYPES.map((e) => (
                <div
                  key={e}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    fontSize: "13px",
                    color: "#333",
                  }}
                >
                  <div
                    style={{
                      width: "5px",
                      height: "5px",
                      borderRadius: "50%",
                      background: "#c9a84c",
                      flexShrink: 0,
                    }}
                  />
                  {e}
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2
              style={{
                fontSize: "11px",
                fontWeight: 700,
                letterSpacing: "0.45em",
                textTransform: "uppercase",
                color: "#999",
                marginBottom: "16px",
              }}
            >
              Included Infrastructure
            </h2>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "10px" }}
            >
              {INFRASTRUCTURE.map((item) => (
                <div
                  key={item}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    fontSize: "13px",
                    color: "#333",
                  }}
                >
                  <div
                    style={{
                      width: "14px",
                      height: "14px",
                      borderRadius: "50%",
                      background: "#f0f9f4",
                      border: "1.5px solid #2ecc71",
                      flexShrink: 0,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "9px",
                      color: "#2ecc71",
                      fontWeight: 700,
                    }}
                  >
                    ✓
                  </div>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Contact footer */}
        <div
          style={{
            borderTop: "1px solid #e8e8e8",
            paddingTop: "32px",
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gap: "24px",
          }}
        >
          {[
            { label: "Book a Venue", value: "events@americandream.com" },
            { label: "Phone", value: "+1 (201) 531-2000" },
            { label: "Address", value: "1 American Dream Way, East Rutherford, NJ 07073" },
          ].map((c) => (
            <div key={c.label}>
              <div
                style={{
                  fontSize: "9px",
                  letterSpacing: "0.35em",
                  textTransform: "uppercase",
                  color: "#aaa",
                  marginBottom: "6px",
                }}
              >
                {c.label}
              </div>
              <div style={{ fontSize: "12px", color: "#333", fontWeight: 500 }}>
                {c.value}
              </div>
            </div>
          ))}
        </div>
      </main>

      <style>{`
        @media print {
          .no-print { display: none !important; }
          body { background: #fff !important; }
          @page { margin: 1cm; size: A4; }
        }
      `}</style>
    </>
  );
}
