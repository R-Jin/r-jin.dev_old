import type { NextPage } from 'next'
import Layout from '../components/layout'
import Profile from '../components/profile/profile'
import LatestPosts from '../components/latestPosts/latestPosts'

const Home: NextPage = () => {
  return (
    <Layout>
      <Profile />
      <LatestPosts />
    </Layout>
  )
}

export default Home
