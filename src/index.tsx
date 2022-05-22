import React from 'react';
import ReactDOM from 'react-dom';
import { reduceEachLeadingCommentRange } from 'typescript';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//const element = <p className="text">Hello React</p>;

//const textElement = React.createElement(
//'p',
//{ className: 'text' },
//'Hello React'
//);

//const wrapper = React.createElement(
//'div',
//{
//style: { backgroundColor: 'red', padding: '50px' },
//},
//textElement
//);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  //textElement,
  //wrapper,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
