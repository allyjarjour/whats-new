import React from 'react';
import './NewsContainer.css'
import NewsArticle from '../NewsArticle/NewsArticle.js'
import PropTypes from 'prop-types';


const NewsContainer = (props) => {
    const loadContent = (content) => content.map(prop => {
        return <NewsArticle 
            key={prop.id}
            articleID={prop.id} 
            headline={prop.headline} 
            imgURL={prop.img} 
            description={prop.description} 
            articleURL={prop.url} />
    })
    return (
        <section className="news-container">
            {props.searchInput.length === 0 ? loadContent(props.selectedTheme) : 
            loadContent(props.filteredSelection)}
        </section>
    );
}

NewsContainer.propsTypes = {
    selectedTheme: PropTypes.array
}

export default NewsContainer;