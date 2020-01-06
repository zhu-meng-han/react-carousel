## Installation

**npm**

```bash
npm install tmaito-carousel --save
```
**yarn**

```bash
yarn add tmaito-carousel
```

* Also install tmaito-carousel for css

```bash
import "tmaito-carousel/libs/index.css";
```

### Example


```js
import React, { Component } from 'react';
import Carousel from 'tmaito-carousel'
import 'tmaito-carousel/libs/index.css';

const { item } = Carousel;

class CarouselDemo extends Component {
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
export default CarouselDemo;
```

### Carousel Attributes
| 参数         | 说明                                  | 类型    | 可选值                                  | 默认值 |
| ------------ | ------------------------------------- | ------- | --------------------------------------- | ------ |
| height       | 走马灯的高度                          | number  | —                                       | 300    |
| initialIndex | 初始状态激活的幻灯片的索引，从 0 开始 | number  | —                                       | 0      |
| trigger      | 指示器的触发方式                      | string  | click/hover                             | hover  |
| autoplay     | 是否自动切换                          | boolean | —                                       | true   |
| interval     | 自动切换的时间间隔，单位为毫秒        | number  | —                                       | 3000   |
| dotPosition  | 面板指示点的位置                      | string  | `outside` `top` `bottom` `left` `right` | —      |
| dots         | 是否显示面板指示点                    | boolean | false                                   | true   |
| arrow        | 切换箭头的显示时机                    | string  | always/hover/never                      | hover  |
| type         | 走马灯的类型                          | string  | card                                    | —      |
| activeCardScale         | 主卡片宽度比例，走马灯的类型为card时生效                          | number  | 0 - 1                                    | 0.6     |

### Carousel Events
| 事件名称 | 说明             | 回调参数                               |
| -------- | ---------------- | -------------------------------------- |
| onChange | 幻灯片切换时触发，目前激活的幻灯片的索引，上一面板 or 下一面板 | (activeIndex, isNext) |

### Carousel Methods
| 方法名        | 说明           | 参数                              |
| ------------- | -------------- | --------------------------------- |
| setActiveItem | 切换到指定面板 | 需要切换的幻灯片的索引，从 0 开始 |
| prev          | 切换至上一面板 | —                                 |
| next          | 切换至下一面板 | —                                 |
