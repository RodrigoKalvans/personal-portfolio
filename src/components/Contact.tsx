import Link from "next/link";
import {IconType} from "react-icons";

type ContactProps = {
    Icon: IconType;
    link: string;
    contact: string;
};

export default function Contact({Icon, link, contact}: ContactProps) {
    return (
        <section className="flex flex-row gap-2 items-center text-sm md:text-md underline hover:no-underline w-fit">
            <Icon className="text-2xl" />
            <Link href={link} target="_blank">
                {contact}
            </Link>
        </section>
    );
}
