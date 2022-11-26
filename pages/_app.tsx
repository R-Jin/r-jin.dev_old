import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { AnimatePresence } from 'framer-motion';
import Header from '../components/navigation/header';
import Footer from '../components/footer/footer';
import "../styles/globals.css"
import { ThemeProvider } from 'next-themes';

function MyApp({ Component, pageProps, router }: AppProps) {
  const url = `https://r-jin.xyz${router.route}`;

  return (
    <ThemeProvider attribute='class'>
      <Header />
      <div className="flex flex-col min-h-screen px-8 md:px-[150px] lg:px-[250px] xl:px-[375px] 2xl:px-[400px] 3xl:px-[640px] dark:text-darkforeground-50 text-foreground">
          <AnimatePresence mode="wait" >
            <Component {...pageProps} canonical={url} key={url} />
          </AnimatePresence>
      </div>
      <Footer />
    </ThemeProvider>
  )
}

export default MyApp
