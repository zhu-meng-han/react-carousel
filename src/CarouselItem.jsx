import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { View } from '@/libs';

const SCALE = 0.8;
const DENOMINATOR = 4;
class CarouselItem extends Component {
  state = {
    scale: 1,
    translate: 0,
    ready: false,
    active: false,
    inStage: false,
    animating: false
  };

  componentDidMount() {
    this.parent.addItem(this);
  }

  componentWillUnmount() {
    this.parent.removeItem(this);
  }

  get parent() {
    return this.context.component;
  }

  translateItem = (index, activeIndex, oldIndex) => {
    const { carouselRef = {}, state, isCard } = this.parent;
    const { length } = state.items;
    const { offsetWidth: parentWidth = 0 } = carouselRef;
    const params = {
      ready: true
    };
    let newIndex = index;
    if (!isCard && oldIndex !== undefined) {
      params.animating = index === activeIndex || index === oldIndex;
    }

    if (index !== activeIndex && length > 2) {
      newIndex = this.processIndex(index, activeIndex, length);
    }
    if (isCard) {
      params.inStage = Math.round(Math.abs(newIndex - activeIndex)) <= 1;
      params.active = newIndex === activeIndex;
      params.translate = this.calculateTranslate(
        newIndex,
        activeIndex,
        parentWidth,
        Math.round(Math.abs(newIndex - activeIndex))
      );
      params.scale = newIndex === activeIndex ? 1 : SCALE;
    } else {
      params.active = newIndex === activeIndex;
      params.translate = parentWidth * (newIndex - activeIndex);
    }
    this.setState({
      ...params
    });
    this.forceUpdate();
  };

  processIndex = (index, activeIndex, length) => {
    let newIndex = index;
    if (activeIndex === 0 && index === length - 1) {
      newIndex = -1;
    } else if (activeIndex === length - 1 && index === 0) {
      newIndex = length;
    } else if (index < activeIndex - 1 && activeIndex - index >= length / 2) {
      newIndex = length + 1;
    } else if (index > activeIndex + 1 && index - activeIndex >= length / 2) {
      newIndex = -2;
    }
    return newIndex;
  };

  calculateTranslate = (index, activeIndex, parentWidth, inStage) => {
    const { cardWidth } = this.parent;
    if (inStage <= 1) {
      return inStage
        ? (parentWidth * ((2 - SCALE) * (index - activeIndex) + 1)) / DENOMINATOR
        : ((1 - cardWidth) * parentWidth) / 2;
    }
    if (index < activeIndex) {
      return (-(1 + SCALE) * parentWidth) / DENOMINATOR;
    }
    return ((DENOMINATOR - 1 + SCALE) * parentWidth) / DENOMINATOR;
  };

  handleItem = () => {
    const { isCard, state, setActiveItem } = this.parent;
    if (isCard) {
      const index = state.items.indexOf(this);
      setActiveItem(index);
    }
  };

  render() {
    const { scale, translate, ready, active, inStage, animating } = this.state;
    const { isCard, cardWidth } = this.parent;
    let width = 100;
    if (isCard) {
      width = active ? cardWidth * 100 : 50;
    }
    return (
      <View show={ready}>
        <div
          className={classnames('el-carousel__item', {
            'is-active': active,
            'el-carousel__item--card': this.parent.isCard,
            'is-in-stage': inStage,
            'is-animating': animating
          })}
          onClick={this.handleItem}
          style={{
            width: `${width}%`,
            msTransform: `translateX(${translate}px) scale(${scale})`,
            WebkitTransform: `translateX(${translate}px) scale(${scale})`,
            transform: `translateX(${translate}px) scale(${scale})`
          }}>
          {this.parent.isCard && (
            <View show={!active}>
              <div className="el-carousel__mask" />
            </View>
          )}
          {this.props.children}
        </div>
      </View>
    );
  }
}

CarouselItem.contextTypes = {
  component: PropTypes.any
};

export default CarouselItem;
