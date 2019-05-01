import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';

import Header from './Header';
import Home from './Home';
import Dashboard from './Dashboard';

function App() {
  return (
    <BrowserRouter>
      <div className={"container"}>
        <div>
          <Header />
          <div className="body">
            <Route path="/home" component={Home} />
            <Route path="/dashboard" component={Dashboard} />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
