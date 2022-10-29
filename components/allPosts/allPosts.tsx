import Link from "next/link";

export default function AllPosts({allPostsData}: {
    allPostsData: {
        metaDesc: string
        date: string
        title: string
        id: string
        tags: string[]
    }[]
}) {
    return (
            <ul className="mt-20">
                {allPostsData.map((post) => (
                    <>
                        <Link href={`/posts/${post.id}`} key={post.id}>
                            <a>
                                <li>
                                    <h1 className="font-sans text-2xl font-extrabold text-darkAccent">
                                        {post.title}
                                    </h1>
                                    <small className="font-serif text-sm">
                                        {post.date}
                                    </small>
                                    <p className="font-serif text-sm pt-1">
                                        {post.metaDesc}
                                    </p>
                                    <ul className="grid grid-cols-4 w-1/3 pt-3">
                                        {post.tags.map((tag) => (
                                            <li key={tag} className="font-serif text-xs underline">
                                                {tag}
                                            </li>
                                        ))}
                                    </ul>
                                </li>
                            </a>
                        </Link>
                        <hr className="text-darkforeground-100 my-8 last:hidden"/>
                    </>
                ))}
            </ul>
    )
}
