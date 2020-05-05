import React from 'react';
import './NewsContainer.css'
import NewsArticle from '../NewsArticle/NewsArticle.js'

const NewsContainer = (props) => {
    return (
        <section className="news-container">
            {props.allData.map(prop => {
                return <NewsArticle 
                    key={prop.id}
                    articleID={prop.id} 
                    headline={prop.headline} 
                    imgURL={prop.img} 
                    description={prop.description} 
                    articleURL={prop.url} />
            })}
        </section>
    );
}

export default NewsContainer;