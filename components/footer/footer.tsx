import { NextPage } from "next";
import Socials from "../profile/socials";

const Footer: NextPage = () => {
    return (
        <footer className="p-4 flex flex-col items-center text-darkforeground-50 text-xs space-y-4">
            <Socials />
            <p className="center">Made by Ryan Jin, Powered by Vercel</p>
        </footer>
    )
}

export default Footer;