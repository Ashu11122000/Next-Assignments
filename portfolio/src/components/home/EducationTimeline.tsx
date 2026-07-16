/* =============================================================================
   Portfolio Website
   =============================================================================
   File: src/components/home/EducationTimeline.tsx
   -----------------------------------------------------------------------------
   Education Timeline

   Ultra Premium UI
   -----------------------------------------------------------------------------
   • Glassmorphism cards
   • Responsive timeline
   • Desktop + Mobile optimized
   • Premium spacing
   • Smooth hover effects
   • Modern dashboard design
   • No business logic changes
   =============================================================================
*/

import {
  Award,
  CalendarDays,
  GraduationCap,
  School,
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
    degree:
      "Master of Computer Applications (Cloud Computing & DevOps)",
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
    institution:
      "Manu Vatika Day Boarding Senior Secondary School",
    degree: "Class XII (Non-Medical)",
    duration: "2018",
    score: "57.2%",
  },
  {
    institution:
      "D.A.V. Model Senior Secondary School",
    degree: "Class X",
    duration: "2016",
    score: "CGPA: 8.6",
  },
];

export default function EducationTimeline() {
  return (
    <section className="relative space-y-12">

      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-0 top-24 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-violet-500/10 blur-3xl" />
      </div>

      {/* ===========================================================
          Section Header
      ============================================================ */}

      <div className="flex flex-col gap-6 sm:flex-row sm:items-center">

        <div
          className="
            flex
            h-16
            w-16
            shrink-0
            items-center
            justify-center
            rounded-2xl
            border
            border-cyan-400/20
            bg-gradient-to-br
            from-cyan-500
            via-sky-500
            to-violet-600
            text-white
            shadow-xl
            shadow-cyan-500/20
          "
        >
          <GraduationCap className="h-8 w-8" />
        </div>

        <div className="min-w-0">

          <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
            Education
          </h2>

          <p className="mt-3 max-w-2xl text-[15px] leading-8 text-zinc-400">
            My academic journey laid the foundation for building scalable
            software systems, modern web applications, cloud-native solutions,
            and continuously learning new technologies.
          </p>

          <div className="mt-5 h-1.5 w-24 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500" />

        </div>

      </div>

      {/* ===========================================================
          Timeline
      ============================================================ */}

      <div className="relative">

        {/* Vertical Timeline */}
        <div
          className="
            absolute
            left-5
            top-3
            bottom-3
            w-px
            bg-gradient-to-b
            from-cyan-500/60
            via-cyan-400/30
            to-transparent
            lg:left-1/2
            lg:-translate-x-1/2
          "
        />

        <div className="space-y-10 lg:space-y-14">

          {education.map((item, index) => {

            const isLeft = index % 2 === 0;

            return (

              <div
                key={item.institution}
                className={`
                  relative
                  flex
                  w-full
                  items-start
                  ${
                    isLeft
                      ? "lg:flex-row"
                      : "lg:flex-row-reverse"
                  }
                `}
              >

                {/* Timeline Node */}

                <div
                  className="
                    absolute
                    left-5
                    top-10
                    z-20
                    flex
                    h-5
                    w-5
                    -translate-x-1/2
                    items-center
                    justify-center
                    rounded-full
                    border-4
                    border-slate-950
                    bg-cyan-400
                    shadow-lg
                    shadow-cyan-500/50
                    lg:left-1/2
                  "
                >
                  <div className="h-2 w-2 rounded-full bg-white" />
                </div>

                {/* Card Wrapper */}

                <div
                  className={`
                    w-full
                    pl-14
                    lg:w-1/2
                    ${
                      isLeft
                        ? "lg:pr-12 lg:pl-0"
                        : "lg:pl-12"
                    }
                  `}
                >

                                    <Card
                    variant="glass"
                    padding="lg"
                    radius="xl"
                    className="
                      group
                      relative
                      overflow-hidden
                      border
                      border-white/10
                      bg-white/[0.03]
                      backdrop-blur-xl
                      transition-all
                      duration-500
                      hover:-translate-y-1
                      hover:border-cyan-400/30
                      hover:bg-white/[0.05]
                      hover:shadow-[0_20px_60px_rgba(34,211,238,0.10)]
                    "
                  >
                    {/* Card Glow */}
                    <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-cyan-500/10 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                    <div className="relative flex flex-col gap-6">

                      {/* Degree + Award */}

                      <div className="flex items-start justify-between gap-5">

                        <div className="min-w-0 flex-1">

                          <h3 className="text-xl font-bold leading-8 text-white">
                            {item.degree}
                          </h3>

                          <div className="mt-5 flex flex-wrap gap-4">

                            <div className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2">

                              <School className="h-4 w-4 text-cyan-400" />

                              <span className="text-sm font-medium text-zinc-300">
                                {item.institution}
                              </span>

                            </div>

                            <div className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2">

                              <CalendarDays className="h-4 w-4 text-cyan-400" />

                              <span className="text-sm font-medium text-zinc-300">
                                {item.duration}
                              </span>

                            </div>

                          </div>

                        </div>

                        <div
                          className="
                            flex
                            h-12
                            w-12
                            shrink-0
                            items-center
                            justify-center
                            rounded-2xl
                            border
                            border-cyan-500/20
                            bg-cyan-500/10
                            transition-all
                            duration-300
                            group-hover:rotate-6
                            group-hover:scale-110
                          "
                        >
                          <Award className="h-6 w-6 text-cyan-400" />
                        </div>

                      </div>

                      {/* Divider */}

                      <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                      {/* Score */}

                      <div className="flex flex-wrap items-center justify-between gap-4">

                        <div
                          className="
                            inline-flex
                            items-center
                            gap-2
                            rounded-full
                            border
                            border-cyan-500/20
                            bg-cyan-500/10
                            px-5
                            py-2.5
                            text-sm
                            font-semibold
                            text-cyan-300
                            transition-all
                            duration-300
                            group-hover:border-cyan-400/40
                            group-hover:bg-cyan-500/15
                          "
                        >
                          <Award className="h-4 w-4" />

                          {item.score}

                        </div>

                      </div>

                    </div>

                  </Card>

                </div>

              </div>

            );

          })}

        </div>

      </div>

    </section>
  );
}
