/* =============================================================================
   Portfolio Website
   =============================================================================
   File: src/data/education.ts

   Description
   -----------------------------------------------------------------------------
   Static education data used throughout the portfolio.

   Used By
   -----------------------------------------------------------------------------
   ✓ EducationTimeline
   ✓ Education Page
   ✓ Home Page
   =============================================================================
*/

export interface Education {
  readonly id: string;
  readonly degree: string;
  readonly institution: string;
  readonly location: string;
  readonly duration: string;
  readonly scoreLabel: string;
  readonly score: string;
  readonly description: string;
  readonly coursework: readonly string[];
  readonly featured?: boolean;
}

export const education: readonly Education[] = [
  {
    id: "mca",

    degree: "Master of Computer Applications (Cloud Computing & DevOps)",

    institution: "Chandigarh University",

    location: "Mohali, Punjab",

    duration: "Aug 2021 – Jul 2023",

    scoreLabel: "CGPA",

    score: "6.8 / 10",

    description:
      "Completed postgraduate studies with a specialization in Cloud Computing and DevOps, focusing on modern software development, cloud technologies, virtualization, networking, databases, and distributed systems.",

    coursework: [
      "Cloud Computing",
      "DevOps",
      "Docker",
      "Operating Systems",
      "Computer Networks",
      "Database Management Systems",
      "Software Engineering",
      "Data Structures",
      "Web Technologies",
    ],

    featured: true,
  },

  {
    id: "bca",

    degree: "Bachelor of Computer Applications",

    institution: "Panjab University",

    location: "Chandigarh",

    duration: "Jul 2018 – Jun 2021",

    scoreLabel: "CGPA",

    score: "6.9 / 10",

    description:
      "Built strong foundations in programming, database management, software engineering, web development, and computer science fundamentals.",

    coursework: [
      "Programming in C/C++",
      "Java",
      "Database Management",
      "Computer Fundamentals",
      "Software Engineering",
      "Web Development",
      "Object-Oriented Programming",
    ],
  },

  {
    id: "class-12",

    degree: "Senior Secondary Education (Non-Medical)",

    institution: "Manu Vatika Day Boarding Senior Secondary School",

    location: "Punjab",

    duration: "2018",

    scoreLabel: "Percentage",

    score: "57.2%",

    description:
      "Completed higher secondary education with a Non-Medical stream, studying Mathematics, Physics, and Chemistry.",

    coursework: [
      "Mathematics",
      "Physics",
      "Chemistry",
    ],
  },

  {
    id: "class-10",

    degree: "Secondary Education",

    institution: "D.A.V. Model Senior Secondary School",

    location: "Punjab",

    duration: "2016",

    scoreLabel: "CGPA",

    score: "8.6 / 10",

    description:
      "Completed secondary education with a strong academic foundation across science, mathematics, and computer fundamentals.",

    coursework: [
      "Science",
      "Mathematics",
      "English",
      "Computer Science",
    ],
  },
] as const;

export default education;