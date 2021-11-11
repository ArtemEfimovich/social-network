import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getNewsTC} from "../../redux/news-reducer";
import {AppStateType} from "../../redux/redux-store";
import {ArticlesType} from "../../api/news_api";
import NewsCard from "./NewsCard/NewsCard";


function News() {

    const dispatch = useDispatch()

    const articles = useSelector<AppStateType, ArticlesType[]>(state => state.news.articles)


    useEffect(() => {
        dispatch(getNewsTC())
    }, [])

    return (
        <div>
            {articles.map(({source,
                               author,
                               title,
                               description,
                               url,
                               urlToImage,
                               publishedAt,
                               content
                           }) => {
                return (<div key={title}>
                    <NewsCard source={source}
                              author={author}
                              title={title}
                              description={description}
                              url={url}
                              urlToImage={urlToImage}
                              publishedAt={publishedAt}
                              content={content}/>
                </div>)
            })}
        </div>
    )
}


export default News;