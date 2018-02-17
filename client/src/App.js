import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
class App extends Component {
  state = {users: [],
          less: [] }
  componentDidMount() {
    fetch('/api')
      .then(res => res.json())
      .then(data => this.setState({ users:data.result.ongoing,less:data.result.upcoming }));
  }

  render() {
    return (
      <div>
        <div className="hell">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React Calendar</h1>
          </header>
          {this.state.users.map(e => (
                        <p>{e.Name}</p>
                    ))}

        </div>
        <div className="App">
        {this.state.less.map(e => (
                        <p>{e.Name}</p>
                    ))}
      </div>
    </div>
    );
  }
}

export default App;
