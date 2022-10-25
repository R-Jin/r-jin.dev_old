import type { NextPage } from 'next'

import Navigation from "./navigation"


const Header: NextPage = () => {
    return (

        <nav className="sticky top-0 bg-darkBackground z-10">
            <Navigation />
            {/* Add theme toggle switch */}
        </nav>
    )
}

export default Header