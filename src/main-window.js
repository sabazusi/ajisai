import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/Root';

window.onload = () => {
  ReactDOM.render(<Root onLoaded={() => {}} />, document.getElementById('root'));
};
