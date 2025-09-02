export const CONTACTS = {
    GITHUB: "https://github.com/RodrigoKalvans",
    LINKEDIN: "https://www.linkedin.com/in/rodrigo-kalvans/",
    EMAIL: "kalvans.rodrigo@gmail.com",
};

export const GOODREADS =
    "https://www.goodreads.com/user/show/130179905-rodrigo";

export const EXPERIENCE = [
    {
        role: "Business Analyst",
        org: "Wallet79 — Phnom Penh, Cambodia",
        period: "11.2024 – present",
        bullets: [
            "Led early‑stage operations, product development, and aspects of company strategy.",
            "Handled project planning, interviewing & hiring, software development, partner outreach, budgeting.",
        ],
        link: "https://www.wallet79.com",
    },
    {
        role: "Software Engineer",
        org: "Monflo (digital asset investment platform) — Amsterdam / Apeldoorn, NL",
        period: "06.2023 – 07.2024",
        bullets: [
            "Led the Exchange feature: vendor research, partnerships, proof‑of‑concept, and production integration to enable multi‑provider digital‑asset trading.",
        ],
        link: "https://www.monflo.com",
    },
    {
        role: "Software Engineer Intern",
        org: "Monflo — Amsterdam / Apeldoorn, NL",
        period: "01.2023 – 06.2023",
        bullets: [
            "Led KYT/AML transaction‑monitoring project: vendor research, stakeholder coordination, PoC, and final system implementation.",
        ],
        link: "https://www.monflo.com",
    },
];

export const PROJECTS = [
    {
        title: "TCorvus — Tutor/Student Social Platform",
        period: "01.2023 – 07.2023",
        summary:
            "Social platform connecting tutors and students. Implemented payments, auth, account management, email notifications, and S3 image uploads. Deployed on AWS.",
        tech: ["Next.js", "MongoDB", "AWS", "S3", "Stripe"],
        link: "https://tcorvus.vercel.app/",
    },
    {
        title: "Conneqt — Mobile Port (Epartment)",
        period: "10.2023 – 02.2024",
        summary:
            "With a team of 4, ported Epartment's Conneqt inventory/merchant dashboard to mobile over 8 weeks — planning, design, and implementation.",
        tech: ["Ionic", "Capacitor", "Vue.js"],
        link: "https://www.conneqt.io/",
    },
    {
        title: "P&ID Diagram Tool (Witteveen+Bos)",
        period: "04.2022 – 07.2022",
        summary:
            "Proof‑of‑concept web tool to improve version control for P&ID diagrams used in large infrastructure projects.",
        tech: ["TypeScript", "Svelte", "FastAPI"],
        link: undefined,
    },
    {
        title: "House Party Planner (Mobile)",
        period: "08.2023 – 10.2023",
        summary:
            "React Native app to post/share parties, manage invites, and set guest requirements. Backend with Spring Boot; deployed on AWS.",
        tech: ["React Native", "Spring Boot", "AWS"],
        link: undefined,
    },
];

export const EDUCATION = [
    {
        school: "Saxion University of Applied Sciences — Deventer, NL",
        program: "BSc Software Engineering (Blockchain Honors)",
        period: "2020 – 2024",
    },
    {
        school: "University of Wisconsin–Stout — Wisconsin, USA",
        program: "Exchange Semester: Networks, OS, Cybersecurity, Game Dev",
        period: "2022",
    },
    {
        school: "International School of Riga — Riga, Latvia",
        program: "A‑Levels: Physics, Chemistry, Computer Science",
        period: "2012 – 2020",
    },
];
