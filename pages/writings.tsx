import { NextPage } from "next";
import AllPosts from "../components/posts/allPosts";
import Layout from "../components/layout";
import Socials from "../components/profile/socials";
import { GetStaticProps } from "next";
import { getSortedPostsData } from "../lib/posts";
import Head from "next/head";

export const getStaticProps: GetStaticProps = async () => {
    const allPostsData = getSortedPostsData()
    return {
        props: {
            allPostsData
        }
    }
}

const Writings: NextPage = ({allPostsData}: any) => {
    return (
        <Layout>
            <Head>
                <title>Writings</title>
            </Head>
            <h1 className="text-3xl mt-20 md:text-6xl font-extrabold md:mt-20">
                Writings
            </h1>
            <p className="text-lg mt-5 md:text-2xl font-serif">
                Here I will write about anything I find interesting throughout my 
                day-to-day life. 
            </p>
            <Socials />

            <AllPosts allPostsData={allPostsData}/>
        </Layout>
    )
}

export default Writings