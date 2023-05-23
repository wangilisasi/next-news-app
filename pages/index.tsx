import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import { NewsArticle, NewsResponse } from '@/models/NewsArticle'
import { GetServerSideProps } from 'next'
import { json } from 'stream/consumers'
import NewsArticleEntry from '@/components/NewsArticleEntry'
import NewsArticlesGrid from '@/components/NewsArticlesGrid'
import { Alert } from 'react-bootstrap'

interface BreakingNewsPageProps{
  newsArticles:NewsArticle[],
}

export const getServerSideProps: GetServerSideProps<BreakingNewsPageProps> =async () => {
  const response = await fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=" + process.env.NEWS_API_KEY);
  const newsResponse:NewsResponse = await response.json();
  return {
    props:{newsArticles:newsResponse.articles}
  }

  //Let error go to 500 page
  
}

export default function BreakingNewsPage({newsArticles}:BreakingNewsPageProps) {
  return (
    <>
    <Head>
      <title key="title">Breaking News - Next Js News App</title>
    </Head>
      <main >
        <h1>Breaking News</h1>
        <Alert>
          This page uses <strong>getServerSideProps</strong> to fetch data server-side. This allows SEO better performance
        </Alert>
        <NewsArticlesGrid articles={newsArticles}/>
      </main>
    </>
  )
}
