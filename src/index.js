import React from 'react';
import ReactDOM from 'react-dom';
//import './Demo.css';
import App from './App';
//import Demo from './Demo';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<div><App/></div>,document.getElementById('root'));
serviceWorker.unregister();
