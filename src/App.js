import React, { Component } from 'react';
import { database } from './firebase';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null
    };
  }

  componentDidMount() {
    database.ref().on('value', (snap) => {
      this.setState({
        data: snap.val()
      });
    });
  }

  render() {
    const { data } = this.state;

    return (
      <div className="App">
        <div className="App--header">
          <h2>Welcome to React and Firebase</h2>
        </div>
        <pre className="App--data">
          { data === null ? '' : JSON.stringify(data, null, 2) }
        </pre>
      </div>
    );
  }
}

export default App;
