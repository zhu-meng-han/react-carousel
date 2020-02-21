import React, { Component } from 'react';
import { render } from 'react-dom';
import classnames from 'classnames';
import Carousel from '../src/index';
import './assets/scss/index.scss';

const { Item } = Carousel;
class App extends Component {
  state = {
    activeIndex: 0
  };

  onChange = (index, isNext) => {
    // console.log(index, isNext);
    this.setState({
      activeIndex: index
    });
  };

  render() {
    const { activeIndex } = this.state;
    return (
      <div className="examples">
        <Carousel
          initialIndex={activeIndex}
          height={200}
          type="card"
          autoplay={false}
          onChange={this.onChange}>
          {[1, 2, 3, 4, 5, 6, 7].map((item, index) => (
            <Item key={index}>
              <div
                className={classnames('carousel-item', {
                  'carousel-item-active': activeIndex === index
                })}>
                {item}/{activeIndex}/{index}
              </div>
            </Item>
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
