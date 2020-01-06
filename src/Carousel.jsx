import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Transition, View } from '@/libs';
import { addResizeListener, removeResizeListener } from '@/libs/utils/resize-event';

class Carousel extends Component {
  static childContextTypes = {
    component: PropTypes.any
  };

  state = {
    hover: false,
    activeIndex: -1,
    items: []
  };

  getChildContext() {
    return {
      component: this
    };
  }

  componentDidMount() {
    const { initialIndex } = this.props;
    const { length } = this.state.items;
    if (initialIndex < length && initialIndex >= 0) {
      this.setState({
        activeIndex: initialIndex
      });
    }
    this.startTimer();
  }

  componentDidUpdate(nextProp, nextState) {
    const { activeIndex } = this.state;
    addResizeListener(this.carouselRef, this.resetItemPosition);

    if (nextState.activeIndex !== activeIndex) {
      this.resetItemPosition(nextState.activeIndex);
    }
  }

  componentWillUnmount() {
    removeResizeListener(this.carouselRef, this.resetItemPosition);
    this.pauseTimer();
  }

  get isCard() {
    const { type } = this.props;
    if (type) {
      return type === 'card';
    }
    return false;
  }

  get cardWidth() {
    const { type, activeCardScale } = this.props;
    return type === 'card' ? activeCardScale : '100%';
  }

  prev = () => {
    const { activeIndex } = this.state;
    this.setActiveItem(activeIndex - 1, false);
  };

  next = () => {
    const { activeIndex } = this.state;
    this.setActiveItem(activeIndex + 1, true);
  };

  startTimer = () => {
    const { interval, autoplay } = this.props;
    if (interval <= 0 || !autoplay) return;
    this.timer = setInterval(this.playSlides, Number(interval));
  };

  pauseTimer = () => {
    clearInterval(this.timer);
  };

  playSlides = () => {
    let { activeIndex, items } = this.state;

    if (activeIndex < items.length - 1) {
      activeIndex += 1;
    } else {
      activeIndex = 0;
    }

    this.setState({ activeIndex });
  };

  handleMouseEnter = () => {
    const { arrow } = this.props;
    if (arrow !== 'never') {
      this.setState({
        hover: true
      });
    }
    this.pauseTimer();
  };

  handleMouseLeave = () => {
    const { arrow } = this.props;
    if (arrow !== 'never') {
      this.setState({
        hover: false
      });
    }
    this.startTimer();
  };

  handleThrottleArrow = isNext => {
    const { activeIndex } = this.state;
    const index = isNext ? activeIndex + 1 : activeIndex - 1;

    this.setActiveItem(index, isNext);
  };

  addItem = item => {
    this.state.items.push(item);
    this.setActiveItem(0);
  };

  removeItem = component => {
    const { items } = this.state;
    this.setState({
      items: [...items.filter(item => item !== component)]
    });
    this.setActiveItem(0);
  };

  setActiveItem = (index, isNext) => {
    const { items } = this.state;
    const { length } = items;
    let activeIndex = index;
    if (index < 0) {
      activeIndex = length - 1;
    } else if (index >= length) {
      activeIndex = 0;
    }
    this.setState({ activeIndex });
    if (this.props.onChange && isNext !== undefined) {
      this.props.onChange(activeIndex, isNext);
    }
  };

  resetItemPosition = oldIndex => {
    const { activeIndex } = this.state;
    this.state.items.forEach((item, index) => {
      item.translateItem(index, activeIndex, oldIndex);
    });
  };

  // 点击面板指示点
  handleDotClick = index => {
    this.setState({
      activeIndex: index
    });
  };

  handleDotHover(index) {
    const { trigger } = this.props;
    const { activeIndex } = this.state;
    if (trigger === 'hover' && index !== activeIndex) {
      this.setState({
        activeIndex: index
      });
    }
  }

  render() {
    const { height, arrow, dots, dotPosition } = this.props;
    const { hover, items, activeIndex } = this.state;
    const isShow = arrow === 'always' || hover;
    return (
      <div
        ref={node => {
          this.carouselRef = node;
        }}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
        className={classnames('el-carousel', {
          'el-carousel--card': this.isCard
        })}>
        <div className="el-carousel__container" style={{ height }}>
          <Transition name="el-carousel__arrow--left">
            {arrow !== 'never' && (
              <View show={isShow}>
                <button
                  className={classnames('el-carousel__arrow', 'el-carousel__arrow--left')}
                  onClick={() => this.handleThrottleArrow(false)}>
                  <i className="el-carousel__arrow--icon" />
                </button>
              </View>
            )}
          </Transition>
          <Transition name="el-carousel__arrow--right">
            {arrow !== 'never' && (
              <View show={isShow}>
                <button
                  className={classnames('el-carousel__arrow', 'el-carousel__arrow--right')}
                  onClick={() => this.handleThrottleArrow(true)}>
                  <i className="el-carousel__arrow--icon" />
                </button>
              </View>
            )}
          </Transition>
          {this.props.children}
        </div>
        {dots && (
          <ul
            className={classnames('el-carousel__dots', {
              'el-carousel__dots--outside': dotPosition === 'outside' || this.isCard
            })}>
            {items.map((item, index) => (
              <li
                key={index}
                className={classnames('el-carousel__dot', {
                  'is-active': index === activeIndex
                })}
                onMouseEnter={() => this.handleDotHover(index)}
                onClick={() => this.handleDotClick(index)}>
                <button className="el-carousel__button" />
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}

Carousel.propTypes = {
  initialIndex: PropTypes.number,
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  trigger: PropTypes.string,
  autoplay: PropTypes.bool,
  interval: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  dotPosition: PropTypes.string,
  dots: PropTypes.bool,
  indicator: PropTypes.bool,
  arrow: PropTypes.string,
  activeCardScale: PropTypes.number,
  type: PropTypes.oneOf(['card']),
  onChange: PropTypes.func
};

Carousel.defaultProps = {
  initialIndex: 0,
  trigger: 'hover',
  autoplay: true,
  interval: 10000,
  indicator: true,
  arrow: 'hover',
  dots: true,
  activeCardScale: 0.6
};

export default Carousel;
