import { NextPage } from "next";
import Socials from "../profile/socials";

const Footer: NextPage = () => {
    return (
        <footer className="p-4 flex flex-col items-center text-darkforeground-50 text-xs">
            <p className="center">Made by Ryan Jin</p>
        </footer>
    )
}

export default Footer;