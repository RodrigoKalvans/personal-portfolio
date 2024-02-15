import Link from "next/link";
import React from "react";

type ProjectProps = {
    title: string;
    url?: string;
    rel?: string;
    children: React.ReactNode;
};

export default function Project({
    title,
    url = "",
    rel = "external",
    children,
}: ProjectProps) {
    return (
        <Link href={url} target="_blank" rel={rel}>
            <section className="flex flex-col rounded-xl mt-2 p-2 bg-black min-h-[8rem] shadow-xl">
                <h2 className="text-lg underline">{title}</h2>
                <div className="mt-1">{children}</div>
            </section>
        </Link>
    );
}
