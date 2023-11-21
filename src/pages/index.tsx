import Contact from "@/components/Contact";
import Project from "@/components/Project";
import ContactForm from "@/components/ContactForm";
import Head from "next/head";
import Image from "next/image";

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

            {/* <article>
                resume
            </article> */}

            <article>
                <b>Introduction</b>
                <p>
                    Hi, my name is Rodrigo Kalvans. I am a fourth-year Software
                    Engineering student at Saxion University in Deventer,
                    Netherlands. Currently I&apos;m working as a software
                    engineer and product developer at Heartland Finance in
                    Amsterdam, Netherlands.
                </p>
                <p>
                    I am also a cook and in my spare time I play billiards,
                    scuba dive and travel!
                </p>
                <p>
                    Professionally, I mostly work on full-stack web
                    applications. Aside from my company I also work on freelance
                    projects in my spare time. If there is something you would
                    like to collaborate on - send me a message! You can find my
                    contacts below.
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
                        Simplistic personal site built with NextJS.
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

            <article>
                <b>Reach out directly!</b>
                <ContactForm />
            </article>
        </>
    );
}
