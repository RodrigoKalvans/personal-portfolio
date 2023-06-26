import Link from "next/link"
import { IconType } from "react-icons"

type ContactProps = {
  icon: IconType,
  link: string,
  contact: string,
}

export default function Contact(props: ContactProps) {
  return (
    <div className="flex flex-row gap-2  items-center text-sm md:text-md underline hover:no-underline w-fit">
      <props.icon className="text-2xl" /> <Link href={props.link} target="_blank">{props.contact}</Link>
    </div>
  )
}