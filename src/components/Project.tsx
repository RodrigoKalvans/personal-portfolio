import Link from "next/link"

type ProjectProps = {
  title: string,
  url: string,
  children: React.ReactNode,
}

export default function Project(props: ProjectProps) {
  return (
    <Link href={props.url} target="_blank">
      <section className="flex flex-col bg-black rounded-xl p-2 w-[20rem] aspect-square">
        <b className="text-lg">{props.title}</b>
        <div className="text-[0.6rem]">{props.url}</div>
        <div className="mt-4">{props.children}</div>
      </section>
    </Link>
  )
}