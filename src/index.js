import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import Office from '../src/pages/Office';
import Magicbox from '../src/pages/Magicbox';
import 'antd/dist/antd.css';

class RouteApp extends Component {
  constructor(props) {
    super(props);
    this.state = ({

    });
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/office" component={Office} />
            <Route path="/products/magicbox" component={Magicbox} />
            <Redirect from='/home' to='/' />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

ReactDOM.render((
  <RouteApp />
), document.getElementById('root'));
