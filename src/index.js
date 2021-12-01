import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';

class RouteApp extends Component {
  constructor(props) {
    super(props);
    this.state = ({

    });
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Redirect from='/home' to='/' />
          <Route exact path="/" component={Home}></Route>
        </Switch>
      </BrowserRouter>
    )
  }
}

ReactDOM.render((
  <RouteApp />
), document.getElementById('root'));
