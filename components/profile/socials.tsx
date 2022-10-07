import { NextPage } from "next"
import Link from "next/link";
import { FaGithubAlt, FaLinkedin } from 'react-icons/fa';
import { MdAlternateEmail } from 'react-icons/md'

const Socials: NextPage = () => {
    const size = 25;
    return (
        <div className="flex flex-row space-x-5 justify-start pt-4">
            <Link href="https://linkedin.com/in/r-jin01" >
                <a>
                    <FaLinkedin size={size} />
                </a>
            </Link>
            <Link href="https://github.com/R-Jin">
                <a>
                    <FaGithubAlt size={size} />
                </a>
            </Link>
            <Link href="mailto:ryanjin007@gmail.com">
                <a>
                    <MdAlternateEmail size={size} />
                </a>
            </Link>
        </div>
    )
}

export default Socials