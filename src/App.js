import React, { Component } from 'react';
import { database } from './firebase';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      newData: '',
    };

    this.dataRef = null;

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.dataRef = database.ref('AMAZING-NEW-DATA/cool/stuff')
    
    database.ref().on('value', (snap) => {
        this.setState({
        data: snap.val()
      });
    });
  }

  handleChange(e) {
    const newData = e.target.value;
    this.setState({
      newData
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.dataRef.push(this.state.newData);
    
    this.setState({ newData: '' });
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
        <form className="App--form" onSubmit={ this.handleSubmit }>
          <input type="text" value={ this.state.newData } onChange={ this.handleChange } />
          <input type="submit"/>
        </form>
      </div>
    );
  }
}

export default App;
