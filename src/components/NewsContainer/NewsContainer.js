import React from 'react';
import './NewsContainer.css'
import NewsArticle from '../NewsArticle/NewsArticle.js'
import PropTypes from 'prop-types';


const NewsContainer = (props) => {
    const loadContent = (articles) => articles.map(article => {
        return <NewsArticle 
            {...article}
            key={article.id}
            />
    })
    return (
        <section className="news-container">
            {!props.searchInput.length ? loadContent(props.selectedTheme) : 
            loadContent(props.filteredSelection)}
        </section>
    );
}

NewsContainer.propTypes = {
    selectedTheme: PropTypes.array,
    filteredSelection: PropTypes.array,
    searchInput: PropTypes.string
}

export default NewsContainer;