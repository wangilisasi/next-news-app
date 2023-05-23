export interface NewsArticle{
    author: string,
    title: string,
    description:string,
    urlToImage?:string,
    url:string,
    publishedAt:string,
    content:string
}

export interface NewsResponse{
    articles:NewsArticle[],
}