import React, { Component, Fragment } from 'react';
import localForage from 'localforage'

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
      init: false,
      initProducts: false,
      collections: {},
      productsError: false
    }
    this.addItemToCart = this.addItemToCart.bind(this)
    this.fetchCheckout = this.fetchCheckout.bind(this)
    this.createCheckout = this.createCheckout.bind(this)
    this.removeCartItem = this.removeCartItem.bind(this)
  }
  componentDidMount() {
    localForage.getItem('HUB_CHECKOUT_ID').then((value) => {
      if (value) {
        this.fetchCheckout(value)
      } else {
        this.createCheckout()
      }
    }).catch((error) => {
      console.log("There's an error", error)
      // fetch new checkout
      this.createCheckout()
    })

    this.props.client.collection.fetchAllWithProducts().then((collections) => {
      // Do something with the collections
      this.setState({
        collections,
        productsError: false,
        initProducts: true
      })
      console.log(collections);
      console.log(collections[0].products);
    }).catch((error) => {
      this.setState({
        collections: {},
        initProducts: false,
        productsError: error
      })
    });
  }

  fetchCheckout(checkoutId) {
    this.props.client.checkout.fetch(checkoutId).then((checkout) => {
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

  createCheckout() {
    this.props.client.checkout.create().then((checkout) => {
      // Do something with the checkout
      this.setState({
        checkout,
        error: false,
        init: true
      })

      localForage.setItem('HUB_CHECKOUT_ID', checkout.id).catch(function (error) {
        // we got an error
        console.log('Error while saving newly created checkout id in disk', error)
      });
    }, (error) => {
      this.setState({checkout: {}, error: true, init: false })
    });
  }
  addItemToCart(lineItem) {
    // Add an item to the checkout
    this.props.client.checkout.addLineItems(this.state.checkout.id, lineItem).then((checkout) => {
      // Do something with the updated checkout
      console.log(checkout.lineItems); // Array with one additional line
      this.setState({
        checkout
      })
    });
  }
  removeCartItem(lineItem) {

  }
  render() {
    return (
      <div>
        {
          this.state.init && (
            <Fragment>
              <Header checkout={this.state.checkout} />
              <Hero />
            </Fragment>)
        }
        {
          this.state.init && (<Main {...this.state} addItemToCart={this.addItemToCart} />)
        }
        {
          (!this.state.init && !this.state.error) && (<p> Loading </p>)
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
