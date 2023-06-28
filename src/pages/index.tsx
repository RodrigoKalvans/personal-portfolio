import Contact from "@/components/Contact"
import Project from "@/components/Project"
import Head from "next/head"
import Image from "next/image"

import {
  AiOutlineMail as Email,
  AiFillLinkedin as LinkedIn,
  AiFillGithub as GitHub,
} from "react-icons/ai"

export default function Home() {
  return (
    <>
    <Head>
      <title>Rodrigo Kalvans</title>
    </Head>

    <article className="flex flex-row gap-4 md:gap-8 justify-center items-center sticky">
      <Image
        src="/icon.png"
        alt="icon"
        width={50}
        height={50}
        className="md:[80px] aspect-square"
      />
      <b className="text-[1.75rem] md:text-[2rem]">Rodrigo Kalvans</b>
    </article>
    
    <article>
      <b>Introduction</b>
      <p>Hi, my name is Rodrigo Kalvans. I am a third-year Software Engineering student at Saxion University in Deventer, Netherlands. Currently I&apos;m working as a developer at a company called Heartland Finance in Amsterdam.</p>
      <p>My hobbies include travel, playing billiards and cooking exotic meals!</p>
      <p>Professionally, I mostly work on full-stack web applications. Aside from my company I also work on freelance projects in my spare time. If there is something you would like to collaborate on - send me a message! You can find my contacts below.</p>
    </article>

    <article>
      <b>Projects</b>
      <div className="flex flex-wrap gap-2 justify-center md:justify-around">
        <Project title="TCorvus" url="https://main.d12aaacbrok4tp.amplifyapp.com/">
          Social media platform built using NextJS and MongoDB. Key features include payments, authentication, account management, automated email notifications and image uploads to S3.
        </Project>
        <Project title="personal-portfolio" url="https://fascinating-llama-8e5d96.netlify.app/">
          Simplistic personal site built with NextJS.
        </Project>
      </div>
    </article>

    <article>
      <b>Contacts</b>
      <Contact icon={GitHub} link="https://github.com/RodrigoKalvans" contact="RodrigoKalvans" />
      <Contact icon={LinkedIn} link="https://www.linkedin.com/in/rodrigo-kalvans/" contact="rodrigo-kalvans" />
      <Contact icon={Email} link="mailto:kalvans.rodrigo@gmail.com" contact="kalvans.rodrigo@gmail.com" />
    </article>

    {/* <article>
      <b>Reach out</b>
      <p>nodemailer coming soon</p>
    </article> */}
      
    </>
  )
}