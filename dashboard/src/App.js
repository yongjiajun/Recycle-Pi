import React, {Component} from 'react';
import logo from './logo.svg';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Login>
          <Dashboard />
        </Login>
      </div>
    );
  }
}

export default App;
