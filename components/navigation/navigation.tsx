import MenuItem from "./menuItems"
import DarkModeToggle from "./darkModeToggle"

const links = [
    {name: "Home", to: "/", id: 1 },
    {name: "Projects", to: "/", id: 2},
    {name: "Writing", to: "/writings", id: 3},
    {name: "Resume", to: "/", id: 4},
]

const Navigation = () => {
    return (
        <>
            <div className="flex flex-row justify-between items-center">
                <div className={`text-xs py-4 space-x-5 font-sans text-foreground dark:text-darkforeground-50 font-semibold flex text-center justify-left md:text-xl lg:space-x-10 lg:space-y-0`}>
                    {links.map(({ name, to, id }) => (
                        <MenuItem key={id} name={name} to={to} />
                    ))}
                </div>
                <DarkModeToggle />
            </div>
            <hr className="dark:border-darkforeground-100"/>
        </>
    )
}

export default Navigation