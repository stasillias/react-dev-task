import React, { Component } from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { HashRouter } from 'react-router-dom';
import { Main } from './components/main/Main';

class App extends Component {
  render() {
    return (
        <MuiThemeProvider>
          <HashRouter>
            <Main/>
          </HashRouter>
        </MuiThemeProvider>
    );
  }
}

export default App;
