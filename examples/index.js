import React, { Component } from 'react';
import { render } from 'react-dom';
import Carousel from '../src/index';
import './assets/scss/index.scss';

const { Item } = Carousel;
class App extends Component {
  render() {
    return (
      <div className="examples">
        <Carousel height={200} type="card" autoplay={false}>
          {[1, 2, 3, 4].map(item => (
            <Item key={item}>{item}</Item>
          ))}
        </Carousel>
      </div>
    );
  }
}

render(<App />, document.querySelector('#app'));
