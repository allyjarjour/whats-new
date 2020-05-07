import React, { Component } from 'react';
import './SearchForm.css';
import PropTypes from 'prop-types';


class SearchForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            searchInput: ''
        }
    }
    handleChange = (e) => {
        let {value} = e.target   
        this.setState({
            searchInput: value
        }) 
    }
    searchUpdate = (e) => {
        if (e.target.id === 'search-btn') {
            this.props.handleSearch(this.state.searchInput);
        }
        if (e.target.id === 'reset-btn') {    
            this.props.handleReset();
            this.setState({
                searchInput: ''
            }) 
        }
    }
    render () {
        return (
            <section className="search-form">
                <input type="text" className="search-input" name="search" placeholder="search through articles..." value={this.state.searchInput} onChange={this.handleChange}/>
                <button id="search-btn" onClick={this.searchUpdate} className={this.props.searchInput.length ? "hide" : undefined}>Search</button>
                <button id="reset-btn" onClick={this.searchUpdate} className={!this.props.searchInput.length ? "hide" : undefined}>Reset</button>
            </section>
        )
    }
}

SearchForm.propTypes = {
    selected: PropTypes.array,
    searchInput: PropTypes.string,
    handleSearch: PropTypes.func,
    handleReset: PropTypes.func
}


export default SearchForm;