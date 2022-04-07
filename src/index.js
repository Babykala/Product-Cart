import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import Form from './component/Form'

import App from './App';
import Crud from './crud';
//import PricingTable from './pricingTable';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
    {/* <Cart /> */}
    {/* <PricingTable /> */}
    {/* <Form /> */}
    {/* <Crud /> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


