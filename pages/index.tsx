import type { NextPage } from 'next';
import { GetStaticProps } from "next";
import Head from 'next/head';
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
        <Head>
          <title>Home</title>
        </Head>
        <Profile />
        <div className='my-20'>
          <h1 className='text-3xl font-sans font-bold pb-2'>About Me</h1>
          <p className='font-serif text-lg'>
              Currently, I&apos;m focused on <span className='text-blueAccent dark:text-darkAccent'> web development </span> 
               and <span className='text-blueAccent dark:text-darkAccent'>3D Graphics</span>. 
              In my free time I enjoy playing badminton, reading and exploring the field of computer science.           
          </p>
        </div>
        <LatestPosts allPostsData={allPostsData}/>
      </Layout>
  )
}

export default Home