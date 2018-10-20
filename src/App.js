import React, { Component } from 'react';
import './App.css';
import Layout from './components/layout/layout';
import { BrowserRouter } from 'react-router-dom';
class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div>
        <Layout/>
        
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
