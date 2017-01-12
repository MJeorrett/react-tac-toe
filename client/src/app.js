var React = require('react');
var ReactDOM = require('react-dom');

import Main from './containers/Main';

window.onload = function(){
  ReactDOM.render(
    <div id="app-container">
      <h1>React Tac Toe</h1>
      <Main />
    </div>,
    document.getElementById('app')
  );
}
