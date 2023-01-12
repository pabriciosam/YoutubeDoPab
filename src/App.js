import React, { Component } from 'react'
import './App.css';
import { Provider } from 'react-redux'

import store from './store'
import SearchBar from './Componentes/SearchBar';
import VideoList from './Componentes/VideoList';
import VideoPlayer from './Componentes/VideoPlayer';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="container">
          <SearchBar></SearchBar>
          <VideoList></VideoList>
          <VideoPlayer></VideoPlayer>
        </div>
      </Provider>
    );
  }
}

export default App;
