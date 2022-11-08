import { NextPage } from "next";
import Layout from "../components/layout";
import Socials from "../components/profile/socials";
import { GetStaticProps } from "next";
import { getSortedProjectsData } from "../lib/projects";
import AllProjects from "../components/projects/allProjects";

export const getStaticProps: GetStaticProps = async () => {
    const allProjectsData = getSortedProjectsData()
    return {
        props: {
            allProjectsData
        }
    }
}

const Projects: NextPage = ({allProjectsData}: any) => {
    return (
        <Layout>
            <h1 className="text-2xl mt-10 md:text-6xl font-extrabold md:mt-20">
                Projects
            </h1>
            <p className="text-lg mt-5 md:text-2xl font-serif">
                A selection of projects I&apos;ve developed, during my free time.
            </p>
            <Socials />

            <AllProjects allProjectsData={allProjectsData} />
        </Layout>
    )
}

export default Projects