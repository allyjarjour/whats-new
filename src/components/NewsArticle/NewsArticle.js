import React from 'react';
import './NewsArticle.css';

const NewsArticle = (props) => {
    return (
        <div className="news-article">
            <img className="article-pic" src={props.imgURL} alt={props.description} />
            <h2>{props.headline}</h2>
            <p>{props.description}</p>
            <p><a href={props.articleURL}>Read full article here</a></p>
        </div>
    )
}

export default NewsArticle;