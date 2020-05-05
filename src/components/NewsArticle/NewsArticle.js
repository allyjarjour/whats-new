import React from 'react';
import './NewsArticle.css';

const NewsArticle = (props) => {
    const {imgURL, description, headline, articleURL } = props;
    return (
        <div className="news-article">
            <img className="article-pic" src={imgURL} alt={description} />
            <h2>{headline}</h2>
            <p>{description}</p>
            <p><a href={articleURL}>Read full article here</a></p>
        </div>
    )
}

export default NewsArticle;