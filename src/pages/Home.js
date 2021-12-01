import React, { Component } from 'react';
import NavigationBar from '../components/NavigationBar';
import Footer from '../components/Footer';
import Body from '../components/Body';

export default class Home extends Component {
  render() {
    console.log('home this.props', this.props);
    return (
      <div>
        <NavigationBar />
        <Body history={this.props.history} />
        <Footer />
      </div>
    )
  }
}