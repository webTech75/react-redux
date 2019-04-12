import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom'
import MainComponent from './components/MainComponent';
import './App.css';
import { Provider } from 'react-redux';
import { ConfigStore } from './containers/configStore';

const store = ConfigStore();

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <MainComponent />
          </div>
        </BrowserRouter>
      </Provider>


    );
  }
}

export default App;