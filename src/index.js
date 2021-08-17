import React from 'react';
import ReactDOM from 'react-dom';

const title = React.createElement('h1', null, 'Ahmad Hannan')
const secondElement = React.createElement('p', null, 'My Paragraph')

ReactDOM.render(
    secondElement,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals