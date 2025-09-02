import {
    GOODREADS,
    CONTACTS,
    EXPERIENCE,
    PROJECTS,
    EDUCATION,
} from "@/utils/const";

import {
    AiOutlineMail as Email,
    AiFillLinkedin as LinkedIn,
    AiFillGithub as GitHub,
    AiOutlineBook as Goodreads,
    AiOutlineBranches as ExternalLink,
} from "react-icons/ai";

export default function Home() {
    return (
        <main className="min-h-screen bg-gradient-to-b dark:from-slate-950 dark:to-slate-900 dark:text-slate-100">
            {/* Header */}
            <header className="sticky top-0 z-40 backdrop-blur border-slate-800/60/60 bg-slate-900/60">
                <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
                    <a href="#home" className="font-semibold tracking-tight">
                        Rodrigo Kalvāns
                    </a>
                    <nav className="hidden md:flex items-center gap-6 text-sm">
                        <a href="#experience" className="hover:underline">
                            Experience
                        </a>
                        <a href="#projects" className="hover:underline">
                            Projects
                        </a>
                        <a href="#education" className="hover:underline">
                            Education
                        </a>
                        <a href="#reading" className="hover:underline">
                            Reading
                        </a>
                        <a href="#contact" className="hover:underline">
                            Contact
                        </a>
                    </nav>
                    <div className="flex items-center gap-3">
                        <a
                            href="/rodrigo-kalvans-resume.pdf"
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 rounded-2xl border px-3 py-1.5 text-sm hover:shadow-sm border-slate-700"
                        >
                            Resume
                        </a>
                    </div>
                </div>
            </header>

            {/* Hero */}
            <section id="home" className="max-w-5xl mx-auto px-4 pt-12">
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="md:col-span-2">
                        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-tight">
                            Rodrigo Kalvāns
                        </h1>
                        <p className="mt-3 mb-10 text-lg md:text-xl text-slate-300">
                            Business Analyst @ Wallet79
                        </p>
                    </div>
                </div>
            </section>

            {/* Bio */}
            <div className="max-w-5xl mx-auto px-4 space-y-12 pb-24">
                <section id="about" title="About">
                    <div className="prose prose-slate dark:prose-invert max-w-none">
                        <p>
                            I’m Rodrigo — a Software Engineering grad who’s
                            comfortable selling and negotiating as much as
                            coding. I believe in the power of empathy and
                            storytelling to motivate teams and shape products.
                            Outside work, I am a pool player, scuba diver, cook
                            and traveler — with recent trips across Peru and
                            Colombia, including a week camping in the Amazon.
                            Now - I reside in Phnom Penh, Cambodia.
                        </p>
                    </div>
                </section>

                {/* Experience */}
                <section id="experience" title="Experience">
                    <div className="text-[1.5rem] font-bold">
                        <span className="text-[#f44336]">*</span> Experience
                    </div>
                    <ol className="space-y-6">
                        {EXPERIENCE.map((experience) => (
                            <li
                                key={experience.org}
                                className="rounded-2xl border bg-slate-950 border-slate-800 p-5"
                            >
                                <div className="flex flex-wrap items-baseline justify-between gap-2">
                                    <h3 className="text-lg md:text-xl font-semibold">
                                        {experience.role} ·{" "}
                                        <span className="font-normal opacity-90">
                                            {experience.org}
                                        </span>
                                    </h3>
                                    <span className="text-sm opacity-80">
                                        {experience.period}
                                    </span>
                                </div>
                                <ul className="mt-3 list-disc pl-5 text-sm leading-6">
                                    {experience.bullets.map((b, i) => (
                                        <li key={i}>{b}</li>
                                    ))}
                                </ul>
                            </li>
                        ))}
                    </ol>
                </section>

                {/* Projects */}
                <section id="projects" title="Projects">
                    <div className="text-[1.5rem] font-bold">
                        <span className="text-[#f44336]">*</span> Projects
                    </div>
                    <div className="grid md:grid-cols-2 gap-y-2">
                        {PROJECTS.map((project) => (
                            <article
                                key={project.title}
                                className="rounded-2xl border bg-slate-950 border-slate-800 p-5 mx-2 hover:shadow-sm transition-shadow"
                            >
                                <header className="mb-2 flex items-baseline justify-between gap-2">
                                    <h3 className="font-semibold text-lg">
                                        {project.title}
                                    </h3>
                                    <span className="text-xs opacity-80">
                                        {project.period}
                                    </span>
                                </header>
                                <p className="text-sm text-slate-300">
                                    {project.summary}
                                </p>
                                <div className="mt-3 flex flex-wrap gap-2 text-xs">
                                    {project.tech.map((t) => (
                                        <span
                                            key={t}
                                            className="rounded-full border px-2 py-1 border-slate-700"
                                        >
                                            {t}
                                        </span>
                                    ))}
                                </div>
                                {project.link && (
                                    <a
                                        className="mt-4 inline-flex items-center gap-1 text-sm underline"
                                        href={project.link}
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        Visit{" "}
                                        <ExternalLink className="h-4 w-4" />
                                    </a>
                                )}
                            </article>
                        ))}
                    </div>
                </section>

                {/* Education */}
                <section id="education" title="Education">
                    <div className="text-[1.5rem] font-bold">
                        <span className="text-[#f44336]">*</span> Education
                    </div>
                    <ul className="space-y-2">
                        {EDUCATION.map((education) => (
                            <li
                                key={education.school}
                                className="rounded-2xl border bg-slate-950 border-slate-800 p-5"
                            >
                                <div className="flex flex-wrap items-baseline justify-between gap-2">
                                    <h3 className="font-medium">
                                        {education.school}
                                    </h3>
                                    <span className="text-sm opacity-80">
                                        {education.period}
                                    </span>
                                </div>
                                <p className="text-sm opacity-90">
                                    {education.program}
                                </p>
                            </li>
                        ))}
                    </ul>
                </section>

                {/* Reading */}
                <section id="reading" title="What I’m Reading">
                    <div className="text-[1.5rem] font-bold">
                        <span className="text-[#f44336]">*</span> Reading
                    </div>
                    <div className="rounded-2xl border bg-slate-950 border-slate-800 p-5">
                        <p className="text-sm">
                            I keep my reading lists on Goodreads. Have a
                            recommendation? I’d love to hear it.
                        </p>
                        <a
                            href={GOODREADS}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-1 underline"
                        >
                            View reading lists <Goodreads className="h-4 w-4" />
                        </a>
                    </div>
                </section>

                {/* Contacts */}
                <section id="contact" title="Contact">
                    <div className="text-[1.5rem] font-bold">
                        <span className="text-[#f44336]">*</span> Contact
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="rounded-2xl border bg-slate-950 border-slate-800 p-5">
                            <h3 className="font-semibold mb-2">Reach out</h3>
                            <ul className="text-sm space-y-2">
                                <li className="flex items-center gap-2">
                                    <Email className="h-4 w-4" />
                                    <a
                                        className="underline"
                                        href={`mailto:${CONTACTS.EMAIL}`}
                                    >
                                        {CONTACTS.EMAIL}
                                    </a>
                                </li>
                                <li className="flex items-center gap-2">
                                    <GitHub className="h-4 w-4" />
                                    <a
                                        className="underline"
                                        href={CONTACTS.GITHUB}
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        GitHub
                                    </a>
                                </li>
                                <li className="flex items-center gap-2">
                                    <LinkedIn className="h-4 w-4" />
                                    <a
                                        className="underline"
                                        href={CONTACTS.LINKEDIN}
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        LinkedIn
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="rounded-2xl border bg-slate-950 border-slate-800 p-5">
                            <h3 className="font-semibold mb-2">Resume</h3>
                            <p className="text-sm">
                                Download a recent copy of my resume (PDF, 2
                                pages).
                            </p>
                            <a
                                href={"/rodrigo-kalvans-resume.pdf"}
                                target="_blank"
                                rel="noreferrer"
                                className="mt-3 inline-flex items-center gap-2 rounded-2xl border px-3 py-1.5 text-sm hover:shadow-sm border-slate-700"
                            >
                                Download resume
                            </a>
                        </div>
                    </div>
                </section>
            </div>

            {/* Footer */}
            <footer className="py-10 border-t border-slate-800/60">
                <div className="max-w-5xl mx-auto px-4 text-sm opacity-80">
                    © {new Date().getFullYear()} Rodrigo Kalvāns. Built with
                    React & Tailwind.
                </div>
            </footer>
        </main>
    );
}
