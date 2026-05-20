export interface SlideConfig {
  id: string;
  label: string;
  shortLabel: string;
  /** True when the slide uses slide-wrapper-scroll (content may overflow vertically) */
  scrollable?: boolean;
}

export const SLIDES: SlideConfig[] = [
  { id: "hero",          label: "Opening",           shortLabel: "Opening" },
  { id: "hub",           label: "Overview",           shortLabel: "Overview" },
  { id: "why",           label: "Why American Dream", shortLabel: "Why Us" },
  { id: "retail",        label: "Retail Leasing",     shortLabel: "Retail" },
  { id: "luxury",        label: "The Avenue",         shortLabel: "Luxury" },
  { id: "dining",        label: "Dining & Lifestyle",  shortLabel: "Dining",        scrollable: true },
  { id: "entertainment", label: "Entertainment",       shortLabel: "Entertainment" },
  { id: "events",        label: "Events & Venues",    shortLabel: "Events",        scrollable: true },
];
