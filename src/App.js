import React, { Component } from 'react';
import NavBar from './components/navbar';
import Posts from './components/posts';
import './App.css';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar/>
        <main className="container">
          <div className="row">
            <div className="col-3"></div>
            <div className="col-6">
              <Posts />
            </div>
            <div className="col-3"></div>
          </div>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
