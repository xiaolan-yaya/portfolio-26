// Edit this list to add, remove or reorder case studies.
// Each `slug` becomes a page at /work/<slug>.
export type Project = {
  slug: string;
  title: string;
  summary: string;
  role: string;
  year: string;
  tags: string[];
  cover?: string; // e.g. "/images/pill-buddies.png" (put files in public/images)
};

export const projects: Project[] = [
  {
    slug: "discord-notifications",
    title: "Discord Notification Redesign",
    summary: "Helps non-technical Discord users catch up on important updates without feeling overwhelmed.",
    role: "UX Designer",
    year: "2025",
    tags: ["UX/UI", "Product Strategy", "User Research", "Prototyping"],
  },
  {
    slug: "pill-buddies",
    title: "Pill Buddies",
    summary: "Redesigning the add/edit medication flow for a medication-tracking app.",
    role: "UX/UI Designer",
    year: "2026",
    tags: ["Mobile", "UX", "Handoff"],
  },
  {
    slug: "netflix-gen-z",
    title: "Gen Z on Netflix",
    summary: "Field research into how Gen Z discovers and watches on streaming platforms.",
    role: "UX Researcher",
    year: "2026",
    tags: ["Research", "Field study"],
  },
];
