import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';

import Header from './Header';
import Home from './Home';
import Dashboard from './Dashboard';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: null,
      auth: null
    }
  }

  componentDidMount() {
    fetch("/api/current_user", { method: "GET" })
      .then(res => {
        console.log(res);
        return res.json()
      })
      .then(userInfo => {
        console.log("fetched");
        console.log(userInfo);
        if (userInfo.userID) {
          console.log("auth: true");
          this.setState({
            userInfo: userInfo,
            auth: true
          })
        } else {
          console.log("auth: false");
          this.setState({
            auth: false
          })
        }
      })
      .catch(error => {
        this.setState({
          auth: false
        })
        console.log(error);
      })
  }

  render() {
    if (this.state.auth) {
      return (
        <BrowserRouter>
          <div className={"container"}>
            <div>
              <Header auth={this.state.auth} />
              <div className="body">
                <Route exact path="/" component={Home} />
                <Route exact path="/home" component={Home} />
                <Route exact path="/dashboard" component={() => (<Dashboard userInfo={this.state.userInfo} />)} />
              </div>
            </div>
          </div>
        </BrowserRouter>
      );
    } else {
      return (
        <BrowserRouter>
          <div className={"container"}>
            <div>
              <Header auth={this.state.auth} />
              <div className="body">
                <Route exact path="/" component={Home} />
                <Route exact path="/home" component={Home} />
              </div>
            </div>
          </div>
        </BrowserRouter>
      )
    }
  }
}

export default App;
