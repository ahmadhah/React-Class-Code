import React from 'react';
import ReactDOM from 'react-dom';

const title = React.createElement('h1', null, 'Ahmad Hannan')
const secondElement = React.createElement('p', null, 'My Paragraph')

//? Rendering on DOM

ReactDOM.render(
    secondElement,
    document.getElementById('root')
);