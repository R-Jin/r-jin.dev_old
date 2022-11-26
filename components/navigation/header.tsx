import type { NextPage } from 'next'

import Navigation from "./navigation"


const Header: NextPage = () => {
    return (

        <nav className="sticky top-0 px-8 md:px-[150px] lg:px-[250px] xl:px-[375px] 2xl:px-[400px] 3xl:px-[640px] bg-background dark:bg-darkBackground z-10 transition-colors duration-200 ease-linear">
            <Navigation />
        </nav>
    )
}

export default Header