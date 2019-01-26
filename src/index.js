import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router
} from "react-router-dom";

import './styles/application.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';

import Client from 'shopify-buy'

const client = Client.buildClient({
     domain: 'boxandchips.myshopify.com',
     storefrontAccessToken: '6cf7a128b93447a827356e7616555921'
   });
ReactDOM.render(<Router><App client={client} /></Router>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
