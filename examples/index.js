import React, { Component } from 'react';
import { render } from 'react-dom';
import Carousel from '../src/index';
import './assets/scss/index.scss';

const { Item } = Carousel;
class App extends Component {
  onChange = (index, isNext) => {
    console.log(index, isNext);
  };

  render() {
    return (
      <div className="examples">
        <Carousel height={200} type="card" autoplay={false} onChange={this.onChange}>
          {[1, 2, 3, 4, 5, 6, 7].map(item => (
            <Item key={item}> {item} </Item>
          ))}
        </Carousel>
        {/* <Carousel height={200} autoplay={false} onChange={this.onChange}>
          {[1, 2, 3, 4, 5, 6, 7].map(item => (
            <Item key={item}> {item} </Item>
          ))}
          </Carousel> */}
        {/*
        <div className="" style={{ height: '10px' }} />
        <Carousel height={200} autoplay={false} onChange={this.onChange}>
          {[1, 2].map(item => (
            <Item key={item}> {item} </Item>
          ))}
        </Carousel>
        <div className="" style={{ height: '10px' }} />
        <Carousel height={200} autoplay={false} onChange={this.onChange}>
          {[1, 2, 3].map(item => (
            <Item key={item}> {item} </Item>
          ))}
          </Carousel> */}
      </div>
    );
  }
}

render(<App />, document.querySelector('#app'));
