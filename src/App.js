import React, { Component } from 'react';
import logo from './logo.svg';
import './styles/application.scss';

import Header from './views/Header'
import Hero from './views/Hero'
import Footer from './views/Footer'
import Loading from './views/Loading'

import Main from './containers/Main'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checkout: {},
      error: false,
      init: false
    }
  }
  componentDidMount() {
    this.props.client.checkout.create().then((checkout) => {
      // Do something with the checkout
      this.setState({
        checkout,
        error: false,
        init: true
      })
    }, (error) => {
      this.setState({checkout: {}, error: true, init: false })
    });
  }
  render() {
    return (
      <div>
        <Header />
        <Hero />
        {
          this.state.init &&
          (<Main {...this.state} />)
        }
        {
          (!this.state.init && !this.state.error) && (<Loading />)
        }
        {
          this.state.error && (<p>We seem to be having problems :( </p>)
        }
        <Footer />
      </div>
    );
  }
}

export default App;
