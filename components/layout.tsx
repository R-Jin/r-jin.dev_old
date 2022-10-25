import Head from "next/head"
import React, {ReactNode} from "react";
import Header from "./navigation/header";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";

interface Props {
    children?:ReactNode
}

const variants = {
    hidden: { opacity: 0, x: -200, y: 0},
    enter: { opacity: 1, x: 0, y: 0},
    exitState: { opacity: 0, x: 0, y: -100},
};

export default function Layout({ children }: Props) {
    return (
        <>
            <motion.main
                initial="hidden"
                animate="enter"
                exit={{opacity: 0, x:0, y: -100}}
                variants={variants}
                transition={{
                    type: 'linear',
                    duration: 0.3,
                }}
                className="flex-1 mb-10"
            >
                {children}
            </motion.main>
        </>
    )
}