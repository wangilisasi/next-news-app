import { NewsArticle } from "@/models/NewsArticle";
import Image from "next/image";
import { Card } from "react-bootstrap";
import placeHolderImage from "@/assets/images/placeholder.jpg"
import styles from "@/styles/NewsArticleEntry.module.css"

interface NewsArticleEntryProps{
    article:NewsArticle,
}

const NewsArticleEntry = ({article:{title,description,url,urlToImage}}:NewsArticleEntryProps) => {
    const validUrl = (urlToImage?.startsWith("http://")||urlToImage?.startsWith("https://"))? urlToImage:undefined;


    return ( 
        <a href={url}>
            <Card className="h-100">
                {/* This uses the normal html image under the hood */}
                {/* <Card.Img
                    variant="top"
                    src={validUrl}
                /> */}
                {/* tHis uses next image that is optimized */}
                <Image 
                    src={validUrl || placeHolderImage} 
                    width={500}
                    height={200}
                    alt="News article image"
                    // className="card-img-top"
                    className={`card-img-top ${styles.imga}`}
                />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                </Card.Body>
                <Card.Text>{description}</Card.Text>
            </Card>
        </a>
     );
}
 
export default NewsArticleEntry;