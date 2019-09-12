import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ApolloClient from 'apollo-boost';

const client = new ApolloClient({
  uri: 'http://',
});

ReactDOM.render(<App />, document.getElementById('root'));
