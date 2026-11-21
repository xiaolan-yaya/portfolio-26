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
    slug: "pill-buddies",
    title: "Pill Buddies",
    summary: "Redesigning the add/edit medication flow for a medication-tracking app.",
    role: "UX/UI Designer",
    year: "2026",
    tags: ["Mobile", "UX", "Handoff"],
  },
  {
    slug: "discord-notifications",
    title: "Discord Notification Inbox",
    summary: "Rethinking the notification inbox and whitelist so people see what matters.",
    role: "UX Designer",
    year: "2026",
    tags: ["Product", "Research"],
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
