import Head from "next/head"
import React, {ReactNode} from "react";
import Header from "./navigation/header";
import { motion } from "framer-motion";

interface Props {
    children?:ReactNode
}

const variants = {
    hidden: { opacity: 0, x: -100, y: 0},
    enter: { opacity: 1, x: 0, y: 0},
    exit: { opacity: 0, x: 0, y: -100},
};

export default function Layout({ children }: Props) {
    return (
        <div className="px-8 md:px-[100px] lg:px-[200px] xl:px-[300px] 2xl:px-[400px] 3xl:px-[650px] bg-background dark:bg-darkBackground min-h-screen dark:text-darkforeground-50">
            <Head>
                <title>Layouts Example</title>
            </Head>
            
            <Header />
            <motion.main
                variants={variants}
                initial={false}
                animate="enter"
                exit="exit"
                transition={{type: 'linear'}}
            >
                {children}
            </motion.main>
        </div>
    )
}