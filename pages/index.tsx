import type { NextPage } from 'next';
import { GetStaticProps } from "next";
import { getSortedPostsData } from '../lib/posts';
import Layout from '../components/layout';
import Profile from '../components/profile/profile';
import LatestPosts from '../components/posts/latestPosts';

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
        <div className='my-32'>
          <h1 className='text-4xl font-sans font-bold pb-2'>About</h1>
          <p className='font-serif text-lg'>
              Currently, I&apos;m focused on <span className='dark:text-darkAccent'>simulation models</span>, 
              <span className='dark:text-darkAccent'> web development</span> and topics related 
              to <span className='dark:text-darkAccent'>Linux</span>.
          </p>
        </div>
        <LatestPosts allPostsData={allPostsData}/>
      </Layout>
  )
}

export default Home