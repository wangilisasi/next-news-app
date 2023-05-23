import 'bootstrap/dist/css/bootstrap.min.css';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { Inter} from 'next/font/google';
import Head from 'next/head';
import { Container } from 'react-bootstrap';
import styles from '@/styles/App.module.css'
import NavBar from '@/components/NavBar';
import NextNProgess from "nextjs-progressbar"

const inter = Inter({ subsets: ['latin'] })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={inter.className}>
       <Head>
        <title key="title">Next Js News App</title>
        <meta name="description" key="description" content="A cool news app from the News API" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NextNProgess/>
      <NavBar />
      <Container className={styles.pageContainer}>
        <Component {...pageProps} />
      </Container>
      
  
    </div>
  );
}
