import Link from "next/link";

export default function  LatestPosts({allPostsData}: {
    allPostsData: {
        metaDesc: string
        date: string
        title: string
        id: string
        tags: string[]
    }[]
}) {
    return (
        <>
            <h1 className="text-4xl font-sans font-bold pb-5">Latest Posts</h1>

            <ul>
                {allPostsData.slice(0, 3).map((post) => (
                    <div key={post.id}>
                        <Link href={`/posts/${post.id}`} >
                            <a>
                                <li key={post.id}>
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
                        <hr className="text-darkforeground-100 my-8"/>
                    </div>
                ))}
            </ul>
        </>
    )
}
