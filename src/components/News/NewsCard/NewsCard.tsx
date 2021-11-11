import React from 'react';
import {SourceType} from "../../../api/news_api";
import s from "./NewsCard.module.css"

export type NewsCardType = {
    source: SourceType
    author: string,
    title: string,
    description: string,
    url: string,
    urlToImage: string,
    publishedAt: string
    content: string
}



const NewsCard = ({source,author, title, description,url,urlToImage, publishedAt,content}:NewsCardType)=>{
    return (
        <div className={s.wrapperContainer}>
            <div className={s.image}>
                <img src={urlToImage} alt="image"/>
            </div>
            <div className={s.container}>
                <div className={s.title}>{title}</div>
                <div className={s.subtitle}>
                    <div>{author}</div>
                    <div>{source.name}</div>
                    <div>{publishedAt}</div>
                </div>
                <div className={s.description}>{description}</div>
                <a href={url}/>
                <div>{content}</div>
            </div>
        </div>
    );
};

export default NewsCard;