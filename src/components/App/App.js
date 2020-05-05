import React, { Component } from 'react';
import local from '../../data/local';
import technology from '../../data/technology';
import science from '../../data/technology';
import health from '../../data/health';
import entertainment from '../../data/entertainment';
import './App.css';
import NewsContainer from '../NewsContainer/NewsContainer'
import Menu from '../Menu/Menu'

class App extends Component {
  constructor() {
    super();
    this.state = {
      local,
      technology,
      science,
      health,
      entertainment,
      selected: 'local'
    }
  }

  handleSelection = (e) => {
    let {value} = e.target   
    this.setState({
      selected: value
    })    
  }

  render () {
    return (
      <div className="app">
        <Menu selected={this.state.selected} handleSelection={this.handleSelection} />
        <NewsContainer allData={this.state.local} />
      </div>
    );
  }
}

export default App;
