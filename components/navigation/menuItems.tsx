import Link from "next/link"

interface Item {
    name: string,
    to: string,
}

const MenuItem = ({name, to}: Item) => {
    return (
        <Link href={to} scroll={false} className=" text-foreground">
            <a>{name}</a>
        </Link>
    )
}

export default MenuItem