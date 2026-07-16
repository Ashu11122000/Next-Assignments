/* =============================================================================
   Portfolio Website
   =============================================================================
   File: src/components/home/EducationTimeline.tsx
   -----------------------------------------------------------------------------
   Education Timeline
   -----------------------------------------------------------------------------

   Responsibilities
   ----------------
   • Display academic qualifications in a premium timeline.
   • Showcase education history in chronological order.
   • Match the dashboard design language.
   • Reuse the shared Card component.
   • Responsive and accessible.

   Notes
   -----
   • Server Component
   • Production-ready
   • Education data can later be moved to src/data/education.ts
   =============================================================================
*/

import {
  GraduationCap,
  CalendarDays,
  School,
  Award,
} from "lucide-react";

import { Card } from "@/components/ui/Card";

type Education = {
  institution: string;
  degree: string;
  duration: string;
  score: string;
};

const education: Education[] = [
  {
    institution: "Chandigarh University",
    degree: "Master of Computer Applications (Cloud Computing & DevOps)",
    duration: "Aug 2021 – Jul 2023",
    score: "CGPA: 6.8 / 10",
  },
  {
    institution: "Panjab University",
    degree: "Bachelor of Computer Applications",
    duration: "Jul 2018 – Jun 2021",
    score: "CGPA: 6.9 / 10",
  },
  {
    institution: "Manu Vatika Day Boarding Senior Secondary School",
    degree: "Class XII (Non-Medical)",
    duration: "2018",
    score: "57.2%",
  },
  {
    institution: "D.A.V. Model Senior Secondary School",
    degree: "Class X",
    duration: "2016",
    score: "CGPA: 8.6",
  },
];

export default function EducationTimeline() {
  return (
    <section className="space-y-8">
      {/* --------------------------------------------------------------------
          Section Header
      --------------------------------------------------------------------- */}
      <div className="flex items-center gap-4">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-violet-600 text-white shadow-lg shadow-cyan-500/20">
          <GraduationCap className="h-7 w-7" />
        </div>

        <div>
          <h2 className="text-3xl font-bold text-white">
            Education
          </h2>

          <p className="mt-2 text-zinc-400">
            Academic journey that built the foundation for my software
            engineering career.
          </p>

          <div className="mt-3 h-1 w-20 rounded-full bg-gradient-to-r from-cyan-500 to-violet-500" />
        </div>
      </div>

      {/* --------------------------------------------------------------------
          Timeline
      --------------------------------------------------------------------- */}
      <div className="relative ml-4 border-l border-cyan-500/20 pl-8">
        {education.map((item, index) => (
          <div
            key={item.institution}
            className={index !== education.length - 1 ? "mb-8" : ""}
          >
            {/* Timeline Dot */}
            <div className="absolute -left-[11px] flex h-5 w-5 items-center justify-center rounded-full border-4 border-slate-950 bg-cyan-500" />

            <Card
              variant="glass"
              padding="lg"
              radius="lg"
              className="border-white/10"
            >
              <div className="flex flex-col gap-5">
                {/* Institution */}
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-semibold text-white">
                      {item.degree}
                    </h3>

                    <div className="mt-3 flex flex-wrap gap-4 text-sm text-zinc-300">
                      <div className="flex items-center gap-2">
                        <School className="h-4 w-4 text-cyan-400" />

                        <span>{item.institution}</span>
                      </div>

                      <div className="flex items-center gap-2">
                        <CalendarDays className="h-4 w-4 text-cyan-400" />

                        <span>{item.duration}</span>
                      </div>
                    </div>
                  </div>

                  <Award className="h-6 w-6 shrink-0 text-cyan-400" />
                </div>

                {/* Score */}
                <div className="inline-flex w-fit rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-300">
                  {item.score}
                </div>
              </div>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
}