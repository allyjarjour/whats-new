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
      searchInput: '',
      filteredSelection: null
    }
  }

  filterSelection = (searchTerm) => {
    let filtered = null;
    let selectedTheme = this.state.selected
    if (searchTerm.length) {
      filtered = this.state[selectedTheme].filter(story => {
        return story.headline.toLowerCase().includes(searchTerm.toLowerCase())
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
    this.handleReset();  
  }

  handleSearch = (input) => {
    this.setState({
      searchInput: input
    }) 
    this.filterSelection(input);
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
          searchInput={this.state.searchInput} 
          handleSearch={this.handleSearch}
          handleReset={this.handleReset}
        />
        <Menu 
          selected={this.state.selected} 
          handleSelection={this.handleSelection} 
        />
        <NewsContainer 
          selectedTheme={this.state[selectedTheme]} 
          filteredSelection={this.state.filteredSelection} 
          searchInput={this.state.searchInput} 
        />
      </div>
    );
  }
}

export default App;
