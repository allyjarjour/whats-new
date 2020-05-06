import React from 'react';
import './SearchForm.css';

const SearchForm = (props) => {
    const searchUpdate = (e) => {
        if (e.target.id === 'search-btn') {
            document.getElementById("reset-btn").classList.remove('hide');
            e.target.classList.add('hide')
            props.handleSearch(e);
        }
        if (e.target.id === 'reset-btn') {            
            document.getElementById("search-input").value = ''
            e.target.classList.add('hide')
            document.getElementById("search-btn").classList.remove('hide');
            props.handleReset(e);
        }
    }
    return (
        <section className="search-form">
            <input className="search-input" id="search-input" type="text" placeholder="search articles here" />
            <button id="search-btn" onClick={searchUpdate}>Search</button>
            <button id="reset-btn" onClick={searchUpdate} className="hide">Reset</button>
        </section>
    )
}



export default SearchForm;