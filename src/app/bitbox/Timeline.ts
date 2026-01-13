export type TimelineType = {
  id: number;
  title: string;
  description: string;
  date: string;
  icon: string;
};

export const TimeLineDetails: TimelineType[] = [
  {
    id: 1,
    title: "Registrations Open",
    description: "Participants can register for BITBOX 6.0 through the official portal.",
    date: "2026-02-01",
    icon: "📝",
  },
  {
    id: 2,
    title: "Idea Submission",
    description: "Teams submit their problem statements and project ideas for shortlisting.",
    date: "2026-02-10",
    icon: "💡",
  },
  {
    id: 3,
    title: "Shortlisted Teams Announced",
    description: "Selected teams are announced and invited to participate in the on-site hackathon.",
    date: "2026-02-15",
    icon: "✅",
  },
  {
    id: 4,
    title: "Hackathon Kickoff",
    description: "Opening ceremony, problem briefing, and team onboarding.",
    date: "2026-03-01",
    icon: "🚀",
  },
  {
    id: 5,
    title: "Coding Phase",
    description: "24-hour coding sprint where teams build, test, and refine their solutions.",
    date: "2026-03-01",
    icon: "💻",
  },
  {
    id: 6,
    title: "Mentorship Sessions",
    description: "Industry mentors guide teams with technical and product insights.",
    date: "2026-03-02",
    icon: "🎯",
  },
  {
    id: 7,
    title: "Final Submissions",
    description: "Teams submit their final projects and pitch decks for evaluation.",
    date: "2026-03-02",
    icon: "📤",
  },
  {
    id: 8,
    title: "Project Demos",
    description: "Live demonstrations of projects in front of judges and audience.",
    date: "2026-03-03",
    icon: "🎤",
  },
  {
    id: 9,
    title: "Results & Awards",
    description: "Winners are announced and prizes are distributed.",
    date: "2026-03-03",
    icon: "🏆",
  },
];
