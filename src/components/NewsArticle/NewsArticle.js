import React from 'react';
import './NewsArticle.css';
import PropTypes from 'prop-types';

const NewsArticle = (props) => {
    const {url, description, headline, img } = props;
    return (
        <div className="news-article">
            <img className="article-pic" src={img} alt={description} />
            <h2>{headline}</h2>
            <p>{description}</p>
            <p><a href={url}>Read full article here</a></p>
        </div>
    )
}

NewsArticle.propTypes = {
    id: PropTypes.number,
    url: PropTypes.string,
    description: PropTypes.string,
    headline: PropTypes.string,
    img: PropTypes.string
}

export default NewsArticle;