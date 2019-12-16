import React, { Component } from 'react';
import { render } from 'react-dom';
import Test from '../src/index';
import './assets/scss/index.scss';

class App extends Component {
  render() {
    return (
      <div className="examples">
        <Test />
      </div>
    );
  }
}

render(<App />, document.querySelector('#app'));
