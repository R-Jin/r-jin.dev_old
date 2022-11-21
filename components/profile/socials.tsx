import { NextPage } from "next"
import Link from "next/link";
import { FaGithubAlt, FaLinkedin } from 'react-icons/fa';
import { MdAlternateEmail } from 'react-icons/md'

const Socials: NextPage = () => {
    const size = 24;
    return (
        <div className="flex flex-row space-x-5 justify-start pt-4">
            <Link href="https://linkedin.com/in/r-jin01">
                <a className=" dark:text-darkforeground-50/80 hover:dark:text-darkforeground-50 text-foreground/80 hover:text-foreground transition-colors duration-300">
                    <FaLinkedin size={size} />
                </a>
            </Link>
            <Link href="https://github.com/R-Jin">
                <a className=" dark:text-darkforeground-50/80 hover:dark:text-darkforeground-50 text-foreground/80 hover:text-foreground transition-colors duration-300">
                    <FaGithubAlt size={size} />
                </a>
            </Link>
            <Link href="mailto:ryanjin007@gmail.com">
                <a className=" dark:text-darkforeground-50/80 hover:dark:text-darkforeground-50 text-foreground/80 hover:text-foreground transition-colors duration-300">
                    <MdAlternateEmail size={size} />
                </a>
            </Link>
        </div>
    )
}

export default Socials