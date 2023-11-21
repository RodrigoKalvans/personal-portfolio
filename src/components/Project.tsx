import Link from "next/link";
import React from "react";

type ProjectProps = {
    title: string;
    url: string;
    rel?: string;
    children: React.ReactNode;
};

export default function Project({
    title,
    url,
    rel = "external",
    children,
}: ProjectProps) {
    return (
        <Link href={url} target="_blank" rel={rel}>
            <section className="flex flex-col bg-black rounded-xl p-2 w-[20rem] aspect-square">
                <b className="text-lg">{title}</b>
                <div className="text-[0.6rem]">{url}</div>
                <div className="mt-4">{children}</div>
            </section>
        </Link>
    );
}
