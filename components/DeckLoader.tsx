"use client";

import dynamic from "next/dynamic";

const DeckController = dynamic(() => import("./DeckController"), {
  ssr: false,
  loading: () => (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "#080808",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          fontSize: "9px",
          letterSpacing: "0.5em",
          color: "rgba(201,168,76,0.6)",
          textTransform: "uppercase",
        }}
      >
        Loading…
      </div>
    </div>
  ),
});

export default function DeckLoader() {
  return <DeckController />;
}
