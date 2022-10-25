import type { NextPage } from 'next';
import { GetStaticProps } from "next";
import { getSortedPostsData } from '../lib/posts';
import Layout from '../components/layout';
import Profile from '../components/profile/profile';
import LatestPosts from '../components/latestPosts/latestPosts';

export const getStaticProps: GetStaticProps = async () => {
    const allPostsData = getSortedPostsData()
    return {
        props: {
            allPostsData
        }
    }
}

const Home: NextPage = ({allPostsData}: any) => {
  return (
      <Layout>
        <Profile />
        <LatestPosts allPostsData={allPostsData}/>
      </Layout>
  )
}

export default Home