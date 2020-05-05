import React, { Component } from 'react';
import local from '../../data/local';
// import technology from '../../data/technology';
// import science from '../../data/technology';
// import health from '../../data/health';
// import entertainment from '../../data/entertainment';
import './App.css';
import NewsContainer from '../NewsContainer/NewsContainer'
import Menu from '../Menu/Menu'

class App extends Component {
  constructor() {
    super();
    this.state = {
      local
    }
  }

  handleSelection() {
    console.log('hi');
    
  }

  render () {
    return (
      <div className="app">
        <Menu onChange={this.handleSelection} />
        <NewsContainer allData={this.state.local}/>
      </div>
    );
  }
}

export default App;
