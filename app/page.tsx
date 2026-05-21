"use client";

import dynamic from "next/dynamic";

const DeckController = dynamic(() => import("@/components/DeckController"), {
  ssr: false,
  loading: () => (
    <div style={{ position: "fixed", inset: 0, background: "#080808" }} />
  ),
});

export default function Home() {
  return <DeckController />;
}
