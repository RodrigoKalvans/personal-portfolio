import Head from "next/head";
import Image from "next/image";
import Contact from "@/components/Contact";
import Project from "@/components/Project";
import Footer from "@/components/Footer";

import {TCORVUS, PORTFOLIO, GITHUB, LINKEDIN, EMAIL} from "@/utils/const";

import {
    AiOutlineMail as Email,
    AiFillLinkedin as LinkedIn,
    AiFillGithub as GitHub,
} from "react-icons/ai";

export default function Home() {
    return (
        <>
            <Head>
                <title>Rodrigo Kalvans</title>
            </Head>

            <section className="flex flex-row gap-4 md:gap-8 justify-center items-center sticky">
                <Image
                    src="/icon.png"
                    alt="icon"
                    width={50}
                    height={50}
                    className="md:[80px] aspect-square"
                />
                <b className="text-[1.75rem] md:text-[2rem]">Rodrigo Kalvans</b>
            </section>

            <article>
                <div className="flex justify-center">
                    <a
                        href="/rodrigo-kalvans-resume.pdf"
                        download={"resume"}
                        className="py-3 px-5 bg-purple-900 rounded-full"
                    >
                        Download my resume
                    </a>
                </div>
            </article>

            <article>
                <b>Introduction</b>
                <p>
                    Hi, my name is Rodrigo Kalvans. I am a fourth-year Software
                    Engineering student at Saxion University in the Netherlands.
                    Currently working as a software engineer and product
                    developer at a startup called Heartland Finance in
                    Amsterdam, Netherlands.
                </p>
                <p>
                    I am also a cook and in my spare time I play billiards,
                    scuba dive and travel. Most recently this took me to South
                    America where I visited Peru and Colombia. From ocean to
                    jungle to mountain; I went everywhere I could and even spent
                    over a week camping out in the Amazon rainforest.
                </p>
                <p>
                    While I may be an engineer in school and work, selling and
                    negotiating are where I am most comfortable and adept. I
                    understand the power of storytelling and empathy and how
                    they can help motivate others. Because of this, I take on
                    roles where I can practice these skills alongside
                    engineering. Public speaking, pitching, debate and writing.
                    I want to do it all.
                </p>
                <p>
                    If you are thinking of reaching out - do not hesitate. My
                    contact details are below
                </p>
            </article>

            <article>
                <b>Projects</b>
                <div className="flex flex-wrap gap-2 justify-center md:justify-around">
                    <Project title="TCorvus" url={TCORVUS}>
                        Social media platform built using NextJS and MongoDB.
                        Key features include payments, authentication, account
                        management, automated email notifications and image
                        uploads to S3.
                    </Project>
                    <Project
                        title="personal-portfolio"
                        url={PORTFOLIO}
                        rel="cononical"
                    >
                        Simple personal site built with NextJS.
                    </Project>
                </div>
            </article>

            <article>
                <b>Contacts</b>
                <Contact Icon={GitHub} link={GITHUB} contact="RodrigoKalvans" />
                <Contact
                    Icon={LinkedIn}
                    link={LINKEDIN}
                    contact="rodrigo-kalvans"
                />
                <Contact
                    Icon={Email}
                    link={`mailto:${EMAIL}`}
                    contact={EMAIL}
                />
            </article>

            {/* <article>
                <b>Reach out directly!</b>
                <ContactForm />
            </article> */}

            <Footer />
        </>
    );
}
