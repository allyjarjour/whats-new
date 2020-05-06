import React, { Component } from 'react';
import local from '../../data/local';
import technology from '../../data/technology';
import science from '../../data/science';
import health from '../../data/health';
import entertainment from '../../data/entertainment';
import './App.css';
import NewsContainer from '../NewsContainer/NewsContainer'
import Menu from '../Menu/Menu'
import SearchForm from '../SearchForm/SearchForm'

class App extends Component {
  constructor() {
    super();
    this.state = {
      local,
      technology,
      science,
      health,
      entertainment,
      selected: 'local',
      //add items to display, this will replace the topics
      searchInput: '',
      filteredSelection: null
    }
  }

  filterSelection = (searchTerm) => {
    let filtered = null;
    let selectedTheme = this.state.selected
    if (searchTerm.length > 0) {
      console.log('cats');
      filtered = this.state[selectedTheme].filter(story => {
        if (story.headline.includes(searchTerm)) {
          return story
        }
      })
      this.setState({
        filteredSelection: filtered
      })
    }
  }

  handleSelection = (e) => {
    let {value} = e.target   
    this.setState({
      selected: value
    })    
  }

  handleSearch = (e) => {
    const searchTerm = e.target.parentNode.childNodes[0].value;
    this.setState({
      searchInput: searchTerm
    }) 
    this.filterSelection(searchTerm);
  }

  handleReset = () => {
      this.setState({
        searchInput: ''
      }) 
  }

  render () {
    let selectedTheme = this.state.selected
    return (
      <div className="app">
        <SearchForm 
          articleTheme={this.state.selected} 
          handleSearch={this.handleSearch}
          handleReset={this.handleReset}
          searchInput={this.state.searchInput} 
        />
        <Menu 
          selected={this.state.selected} 
          handleSelection={this.handleSelection} 
        />
        <NewsContainer 
          selectedTheme={this.state[selectedTheme]} 
          filteredSelection={this.state.filteredSelection} 
          // switch above out with return from filter function
          searchInput={this.state.searchInput} 
        />
      </div>
    );
  }
}

export default App;
