import Link from "next/link";

export default function AllProjects({allProjectsData}: {
    allProjectsData: {
        metaDesc: string
        date: string
        title: string
        id: string
        tags: string[]
    }[]
}) {
    return (
            <ul className="mt-20">
                {allProjectsData.map((project) => (
                    <div key={project.id}>
                        <Link href={`/projects/${project.id}`}>
                            <a>
                                <li>
                                    <h1 className="font-sans text-2xl font-extrabold text-darkAccent">
                                        {project.title}
                                    </h1>
                                    <small className="font-serif text-sm">
                                        {project.date}
                                    </small>
                                    <p className="font-serif text-sm pt-1">
                                        {project.metaDesc}
                                    </p>
                                    <ul className="grid grid-cols-3 w-1/2 md:w-1/3 pt-3">
                                        {project.tags.map((tag) => (
                                            <li key={tag} className="font-serif text-xs underline pt-1">
                                                {tag}
                                            </li>
                                        ))}
                                    </ul>
                                </li>
                            </a>
                        </Link>
                        <hr className="text-darkforeground-100 my-8"/>
                    </div>
                ))}
            </ul>
    )
}
