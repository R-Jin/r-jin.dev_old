import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { AnimatePresence } from 'framer-motion';
import Header from '../components/navigation/header';
import Footer from '../components/footer/footer';

function MyApp({ Component, pageProps, router }: AppProps) {
  const url = `https://r-jin.xyz${router.route}`;

  return (
    <div className="flex flex-col min-h-screen px-8 md:px-[100px] lg:px-[200px] xl:px-[300px] 2xl:px-[400px] 3xl:px-[640px] bg-background dark:bg-darkBackground dark:text-darkforeground-50">
      <Header />
        <AnimatePresence mode="wait" >
          <Component {...pageProps} canonical={url} key={url} />
        </AnimatePresence>
        <Footer />
    </div>
  )
}

export default MyApp
