!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t(require("react"),require("prop-types"),require("react-dom"));else if("function"==typeof define&&define.amd)define(["react","prop-types","react-dom"],t);else{var n="object"==typeof exports?t(require("react"),require("prop-types"),require("react-dom")):t(e.react,e["prop-types"],e["react-dom"]);for(var r in n)("object"==typeof exports?exports:e)[r]=n[r]}}(window,(function(e,t,n){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=22)}([function(t,n){t.exports=e},function(e,n){e.exports=t},function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},function(e,t){function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}e.exports=function(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}},function(e,t,n){var r=n(16),i=n(2);e.exports=function(e,t){return!t||"object"!==r(t)&&"function"!=typeof t?i(e):t}},function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(t)}e.exports=n},function(e,t,n){var r=n(17);e.exports=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}},function(e,t,n){var r;
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/!function(){"use strict";var n={}.hasOwnProperty;function i(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var o=typeof r;if("string"===o||"number"===o)e.push(r);else if(Array.isArray(r)&&r.length){var a=i.apply(null,r);a&&e.push(a)}else if("object"===o)for(var s in r)n.call(r,s)&&r[s]&&e.push(s)}}return e.join(" ")}e.exports?(i.default=i,e.exports=i):void 0===(r=function(){return i}.apply(t,[]))||(e.exports=r)}()},function(e,t,n){(function(t){for(var r=n(19),i="undefined"==typeof window?t:window,o=["moz","webkit"],a="AnimationFrame",s=i["request"+a],c=i["cancel"+a]||i["cancelRequest"+a],l=0;!s&&l<o.length;l++)s=i[o[l]+"Request"+a],c=i[o[l]+"Cancel"+a]||i[o[l]+"CancelRequest"+a];if(!s||!c){var u=0,f=0,d=[];s=function(e){if(0===d.length){var t=r(),n=Math.max(0,1e3/60-(t-u));u=n+t,setTimeout((function(){var e=d.slice(0);d.length=0;for(var t=0;t<e.length;t++)if(!e[t].cancelled)try{e[t].callback(u)}catch(e){setTimeout((function(){throw e}),0)}}),Math.round(n))}return d.push({handle:++f,callback:e,cancelled:!1}),f},c=function(e){for(var t=0;t<d.length;t++)d[t].handle===e&&(d[t].cancelled=!0)}}e.exports=function(e){return s.call(i,e)},e.exports.cancel=function(){c.apply(i,arguments)},e.exports.polyfill=function(e){e||(e=i),e.requestAnimationFrame=s,e.cancelAnimationFrame=c}}).call(this,n(18))},function(e,t){e.exports=n},function(e,t,n){var r=n(13),i=n(14),o=n(15);e.exports=function(e){return r(e)||i(e)||o()}},function(e,t){e.exports=function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}},function(e,t){e.exports=function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}},function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}},function(e,t){function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function r(t){return"function"==typeof Symbol&&"symbol"===n(Symbol.iterator)?e.exports=r=function(e){return n(e)}:e.exports=r=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":n(e)},r(t)}e.exports=r},function(e,t){function n(t,r){return e.exports=n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},n(t,r)}e.exports=n},function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t,n){(function(t){(function(){var n,r,i,o,a,s;"undefined"!=typeof performance&&null!==performance&&performance.now?e.exports=function(){return performance.now()}:null!=t&&t.hrtime?(e.exports=function(){return(n()-a)/1e6},r=t.hrtime,o=(n=function(){var e;return 1e9*(e=r())[0]+e[1]})(),s=1e9*t.uptime(),a=o-s):Date.now?(e.exports=function(){return Date.now()-i},i=Date.now()):(e.exports=function(){return(new Date).getTime()-i},i=(new Date).getTime())}).call(this)}).call(this,n(20))},function(e,t){var n,r,i=e.exports={};function o(){throw new Error("setTimeout has not been defined")}function a(){throw new Error("clearTimeout has not been defined")}function s(e){if(n===setTimeout)return setTimeout(e,0);if((n===o||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:o}catch(e){n=o}try{r="function"==typeof clearTimeout?clearTimeout:a}catch(e){r=a}}();var c,l=[],u=!1,f=-1;function d(){u&&c&&(u=!1,c.length?l=c.concat(l):f=-1,l.length&&p())}function p(){if(!u){var e=s(d);u=!0;for(var t=l.length;t;){for(c=l,l=[];++f<t;)c&&c[f].run();f=-1,t=l.length}c=null,u=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===a||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function h(e,t){this.fun=e,this.array=t}function m(){}i.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];l.push(new h(e,t)),1!==l.length||u||s(p)},h.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=m,i.addListener=m,i.once=m,i.off=m,i.removeListener=m,i.removeAllListeners=m,i.emit=m,i.prependListener=m,i.prependOnceListener=m,i.listeners=function(e){return[]},i.binding=function(e){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(e){throw new Error("process.chdir is not supported")},i.umask=function(){return 0}},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var r=n(12),i=n.n(r),o=n(4),a=n.n(o),s=n(5),c=n.n(s),l=n(6),u=n.n(l),f=n(7),d=n.n(f),p=n(2),h=n.n(p),m=n(8),v=n.n(m),y=n(3),g=n.n(y),_=n(0),w=n.n(_),b=n(1),x=n.n(b),E=n(9),T=n.n(E),L=n(11),O=n.n(L),C=n(10),S=n.n(C),k=function(e){function t(e){var n;a()(this,t),n=u()(this,d()(t).call(this,e));var r=e.children;return n.state={children:r&&n.enhanceChildren(r)},n.didEnter=n.didEnter.bind(h()(n)),n.didLeave=n.didLeave.bind(h()(n)),n}return v()(t,e),c()(t,[{key:"UNSAFE__componentWillReceiveProps",value:function(e){var t=w.a.isValidElement(this.props.children)&&w.a.Children.only(this.props.children),n=w.a.isValidElement(e.children)&&w.a.Children.only(e.children);e.name?this.isViewComponent(n)?this.setState({children:this.enhanceChildren(n,{show:!t||t.props.show})}):n&&this.setState({children:this.enhanceChildren(n)}):this.setState({children:n})}},{key:"componentDidUpdate",value:function(e){if(this.props.name){var t=w.a.isValidElement(this.props.children)&&w.a.Children.only(this.props.children),n=w.a.isValidElement(e.children)&&w.a.Children.only(e.children);this.isViewComponent(t)?n&&n.props.show||!t.props.show?n&&n.props.show&&!t.props.show&&this.toggleHidden():this.toggleVisible():!n&&t?this.toggleVisible():n&&!t&&this.toggleHidden()}}},{key:"enhanceChildren",value:function(e,t){var n=this;return w.a.cloneElement(e,Object.assign({ref:function(e){n.el=e}},t))}},{key:"isViewComponent",value:function(e){return e&&"View"===e.type._typeName}},{key:"animateElement",value:function(e,t,n,r){e.classList.add(n);var i=getComputedStyle(e),o=parseFloat(i.animationDuration)||parseFloat(i.transitionDuration);if(e.classList.add(t),0===o){var a=getComputedStyle(e),s=parseFloat(a.animationDuration)||parseFloat(a.transitionDuration);clearTimeout(this.timeout),this.timeout=setTimeout((function(){r()}),1e3*s)}e.classList.remove(t,n)}},{key:"didEnter",value:function(e){var t=O.a.findDOMNode(this.el);if(e&&e.target===t){var n=this.props.onAfterEnter,r=this.transitionClass,i=r.enterActive,o=r.enterTo;t.classList.remove(i,o),t.removeEventListener("transitionend",this.didEnter),t.removeEventListener("animationend",this.didEnter),n&&n()}}},{key:"didLeave",value:function(e){var t=this,n=O.a.findDOMNode(this.el);if(e&&e.target===n){var r=this.props,i=r.onAfterLeave,o=r.children,a=this.transitionClass,s=a.leaveActive,c=a.leaveTo;new Promise((function(e){t.isViewComponent(o)?(n.removeEventListener("transitionend",t.didLeave),n.removeEventListener("animationend",t.didLeave),S()((function(){n.style.display="none",n.classList.remove(s,c),S()(e)}))):t.setState({children:null},e)})).then((function(){i&&i()}))}}},{key:"toggleVisible",value:function(){var e=this,t=this.props.onEnter,n=this.transitionClass,r=n.enter,i=n.enterActive,o=n.enterTo,a=n.leaveActive,s=n.leaveTo,c=O.a.findDOMNode(this.el);c.addEventListener("transitionend",this.didEnter),c.addEventListener("animationend",this.didEnter),S()((function(){c.classList.contains(a)&&(c.classList.remove(a,s),c.removeEventListener("transitionend",e.didLeave),c.removeEventListener("animationend",e.didLeave)),c.style.display="",c.classList.add(r,i),t&&t(),S()((function(){c.classList.remove(r),c.classList.add(o)}))}))}},{key:"toggleHidden",value:function(){var e=this,t=this.props.onLeave,n=this.transitionClass,r=n.leave,i=n.leaveActive,o=n.leaveTo,a=n.enterActive,s=n.enterTo,c=O.a.findDOMNode(this.el);c.addEventListener("transitionend",this.didLeave),c.addEventListener("animationend",this.didLeave),S()((function(){c.classList.contains(a)&&(c.classList.remove(a,s),c.removeEventListener("transitionend",e.didEnter),c.removeEventListener("animationend",e.didEnter)),c.classList.add(r,i),t&&t(),S()((function(){c.classList.remove(r),c.classList.add(o)}))}))}},{key:"render",value:function(){return this.state.children||null}},{key:"transitionClass",get:function(){var e=this.props.name;return{enter:"".concat(e,"-enter"),enterActive:"".concat(e,"-enter-active"),enterTo:"".concat(e,"-enter-to"),leave:"".concat(e,"-leave"),leaveActive:"".concat(e,"-leave-active"),leaveTo:"".concat(e,"-leave-to")}}}]),t}(_.Component);k.propTypes={name:x.a.string,onEnter:x.a.func,onAfterEnter:x.a.func,onLeave:x.a.func,onAfterLeave:x.a.func};var A=k;function I(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function j(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?I(n,!0).forEach((function(t){g()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):I(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var P=function(e){function t(){return a()(this,t),u()(this,d()(t).apply(this,arguments))}return v()(t,e),c()(t,[{key:"render",value:function(){var e=[],t=this.props,n=t.show,r=void 0===n||n,i=t.className,o=void 0===i?"":i,a=t.children,s={style:j({},a.props.style)};return r||(s.style.display="none"),a.props.className&&e.push(a.props.className),o&&e.push(o),s.className=e.join(" "),w.a.cloneElement(w.a.Children.only(a),s)}}]),t}(_.Component);P.propTypes={show:x.a.any},P._typeName="View";var z=P,D="undefined"==typeof window,N=function(){if(!D){var e=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||function(e){return window.setTimeout(e,20)};return function(t){return e(t)}}}(),M=function(){if(!D){var e=window.cancelAnimationFrame||window.mozCancelAnimationFrame||window.webkitCancelAnimationFrame||window.clearTimeout;return function(t){return e(t)}}}(),F=function(e){var t=e.__resizeTrigger__,n=t.firstElementChild,r=t.lastElementChild,i=n.firstElementChild;r.scrollLeft=r.scrollWidth,r.scrollTop=r.scrollHeight,i.style.width="".concat(n.offsetWidth+1,"px"),i.style.height="".concat(n.offsetHeight+1,"px"),n.scrollLeft=n.scrollWidth,n.scrollTop=n.scrollHeight},q=function(e){var t=this;F(this),this.__resizeRAF__&&M(this.__resizeRAF__),this.__resizeRAF__=N((function(){var n;((n=t).offsetWidth!==n.__resizeLast__.width||n.offsetHeight!==n.__resizeLast__.height)&&(t.__resizeLast__.width=t.offsetWidth,t.__resizeLast__.height=t.offsetHeight,t.__resizeListeners__.forEach((function(n){n.call(t,e)})))}))},R=D?{}:document.attachEvent,W="Webkit Moz O ms".split(" "),V="webkitAnimationStart animationstart oAnimationStart MSAnimationStart".split(" "),H=!1,U="",X="animationstart";if(!R&&!D){var B=document.createElement("fakeelement");if(void 0!==B.style.animationName&&(H=!0),!1===H)for(var G="",J=0;J<W.length;J+=1)if(void 0!==B.style["".concat(W[J],"AnimationName")]){G=W[J],U="-".concat(G.toLowerCase(),"-"),X=V[J],H=!0;break}}var K=!1,Q=function(e,t){if(!D)if(R)e.attachEvent("onresize",t);else{if(!e.__resizeTrigger__){"static"===getComputedStyle(e).position&&(e.style.position="relative"),function(){if(!K&&!D){var e="@".concat(U,"keyframes ").concat("resizeanim"," { from { opacity: 0; } to { opacity: 0; } } "),t="".concat(U,"animation: 1ms ").concat("resizeanim",";"),n="".concat(e,"\n      .resize-triggers { ").concat(t,' visibility: hidden; opacity: 0; }\n      .resize-triggers, .resize-triggers > div, .contract-trigger:before { content: " "; display: block; position: absolute; top: 0; left: 0; height: 100%; width: 100%; overflow: hidden; }\n      .resize-triggers > div { background: #eee; overflow: auto; }\n      .contract-trigger:before { width: 200%; height: 200%; }'),r=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css",i.styleSheet?i.styleSheet.cssText=n:i.appendChild(document.createTextNode(n)),r.appendChild(i),K=!0}}(),e.__resizeLast__={},e.__resizeListeners__=[];var n=e.__resizeTrigger__=document.createElement("div");n.className="resize-triggers",n.innerHTML='<div class="expand-trigger"><div></div></div><div class="contract-trigger"></div>',e.appendChild(n),F(e),e.addEventListener("scroll",q,!0),X&&n.addEventListener(X,(function(t){"resizeanim"===t.animationName&&F(e)}))}e.__resizeListeners__.push(t)}},Y=function(e){function t(){var e,n;a()(this,t);for(var r=arguments.length,o=new Array(r),s=0;s<r;s++)o[s]=arguments[s];return n=u()(this,(e=d()(t)).call.apply(e,[this].concat(o))),g()(h()(n),"state",{hover:!1,activeIndex:-1,items:[]}),g()(h()(n),"prev",(function(){var e=n.state.activeIndex;n.setActiveItem(e-1,!1)})),g()(h()(n),"next",(function(){var e=n.state.activeIndex;n.setActiveItem(e+1,!0)})),g()(h()(n),"startTimer",(function(){var e=n.props,t=e.interval,r=e.autoplay;t<=0||!r||(n.timer=setInterval(n.playSlides,Number(t)))})),g()(h()(n),"pauseTimer",(function(){clearInterval(n.timer)})),g()(h()(n),"playSlides",(function(){var e=n.state,t=e.activeIndex;t<e.items.length-1?t+=1:t=0,n.setState({activeIndex:t})})),g()(h()(n),"handleMouseEnter",(function(){"never"!==n.props.arrow&&n.setState({hover:!0}),n.pauseTimer()})),g()(h()(n),"handleMouseLeave",(function(){"never"!==n.props.arrow&&n.setState({hover:!1}),n.startTimer()})),g()(h()(n),"handleThrottleArrow",(function(e){var t=n.state.activeIndex,r=e?t+1:t-1;n.setActiveItem(r,e)})),g()(h()(n),"addItem",(function(e){n.state.items.push(e),n.setActiveItem(0)})),g()(h()(n),"removeItem",(function(e){var t=n.state.items;n.setState({items:i()(t.filter((function(t){return t!==e})))}),n.setActiveItem(0)})),g()(h()(n),"setActiveItem",(function(e,t){var r=n.state.items.length,i=e;e<0?i=r-1:e>=r&&(i=0),n.setState({activeIndex:i}),n.props.onChange&&void 0!==t&&n.props.onChange(i,t)})),g()(h()(n),"resetItemPosition",(function(e){var t=n.state.activeIndex;n.state.items.forEach((function(n,r){n.translateItem(r,t,e)}))})),g()(h()(n),"handleDotClick",(function(e){n.setState({activeIndex:e})})),n}return v()(t,e),c()(t,[{key:"getChildContext",value:function(){return{component:this}}},{key:"componentDidMount",value:function(){var e=this.props.initialIndex;e<this.state.items.length&&e>=0&&this.setState({activeIndex:e}),this.startTimer()}},{key:"componentDidUpdate",value:function(e,t){var n=this.state.activeIndex;Q(this.carouselRef,this.resetItemPosition),t.activeIndex!==n&&this.resetItemPosition(t.activeIndex)}},{key:"componentWillUnmount",value:function(){var e,t;e=this.carouselRef,t=this.resetItemPosition,R?e.detachEvent("onresize",t):e.__resizeListeners__&&(e.__resizeListeners__.splice(e.__resizeListeners__.indexOf(t),1),e.__resizeListeners__.length||(e.removeEventListener("scroll",q),e.__resizeTrigger__=!e.removeChild(e.__resizeTrigger__))),this.pauseTimer()}},{key:"handleDotHover",value:function(e){var t=this.props.trigger,n=this.state.activeIndex;"hover"===t&&e!==n&&this.setState({activeIndex:e})}},{key:"render",value:function(){var e=this,t=this.props,n=t.height,r=t.arrow,i=t.dots,o=t.dotPosition,a=this.state,s=a.hover,c=a.items,l=a.activeIndex,u="always"===r||s;return w.a.createElement("div",{ref:function(t){e.carouselRef=t},onMouseEnter:this.handleMouseEnter,onMouseLeave:this.handleMouseLeave,className:T()("el-carousel",{"el-carousel--card":this.isCard})},w.a.createElement("div",{className:"el-carousel__container",style:{height:n}},w.a.createElement(A,{name:"el-carousel__arrow--left"},"never"!==r&&w.a.createElement(z,{show:u},w.a.createElement("button",{className:T()("el-carousel__arrow","el-carousel__arrow--left"),onClick:function(){return e.handleThrottleArrow(!1)}},w.a.createElement("i",{className:"el-carousel__arrow--icon"})))),w.a.createElement(A,{name:"el-carousel__arrow--right"},"never"!==r&&w.a.createElement(z,{show:u},w.a.createElement("button",{className:T()("el-carousel__arrow","el-carousel__arrow--right"),onClick:function(){return e.handleThrottleArrow(!0)}},w.a.createElement("i",{className:"el-carousel__arrow--icon"})))),this.props.children),i&&w.a.createElement("ul",{className:T()("el-carousel__dots",{"el-carousel__dots--outside":"outside"===o||this.isCard})},c.map((function(t,n){return w.a.createElement("li",{key:n,className:T()("el-carousel__dot",{"is-active":n===l}),onMouseEnter:function(){return e.handleDotHover(n)},onClick:function(){return e.handleDotClick(n)}},w.a.createElement("button",{className:"el-carousel__button"}))}))))}},{key:"isCard",get:function(){var e=this.props.type;return!!e&&"card"===e}},{key:"cardWidth",get:function(){var e=this.props,t=e.type,n=e.activeCardScale;return"card"===t?n:"100%"}},{key:"activeIndex",get:function(){return this.state.activeIndex}}]),t}(_.Component);g()(Y,"childContextTypes",{component:x.a.any}),Y.propTypes={initialIndex:x.a.number,height:x.a.oneOfType([x.a.number,x.a.string]),trigger:x.a.string,autoplay:x.a.bool,interval:x.a.oneOfType([x.a.number,x.a.string]),dotPosition:x.a.string,dots:x.a.bool,indicator:x.a.bool,arrow:x.a.string,activeCardScale:x.a.number,type:x.a.oneOf(["card"]),onChange:x.a.func},Y.defaultProps={initialIndex:0,trigger:"hover",autoplay:!0,interval:5e3,height:200,indicator:!0,arrow:"hover",dots:!0,activeCardScale:.6};var Z=Y;function $(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var ee=.8,te=4,ne=function(e){function t(){var e,n;a()(this,t);for(var r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];return n=u()(this,(e=d()(t)).call.apply(e,[this].concat(i))),g()(h()(n),"state",{scale:1,translate:0,ready:!1,active:!1,inStage:!1,animating:!1}),g()(h()(n),"translateItem",(function(e,t,r){var i=n.parent,o=i.carouselRef,a=void 0===o?{}:o,s=i.state,c=i.isCard,l=s.items.length,u=a.offsetWidth,f=void 0===u?0:u,d={ready:!0},p=e;c||void 0===r||(d.animating=e===t||e===r),e!==t&&l>2&&(p=n.processIndex(e,t,l)),c?(d.inStage=Math.round(Math.abs(p-t))<=1,d.active=p===t,d.translate=n.calculateTranslate(p,t,f,Math.round(Math.abs(p-t))),d.scale=p===t?1:ee):(d.active=p===t,d.translate=f*(p-t)),n.setState(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?$(n,!0).forEach((function(t){g()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):$(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},d)),n.forceUpdate()})),g()(h()(n),"processIndex",(function(e,t,n){var r=e;return 0===t&&e===n-1?r=-1:t===n-1&&0===e?r=n:e<t-1&&t-e>=n/2?r=n+1:e>t+1&&e-t>=n/2&&(r=-2),r})),g()(h()(n),"calculateTranslate",(function(e,t,r,i){var o=n.parent.cardWidth;return i<=1?i?r*((2-ee)*(e-t)+1)/te:(1-o)*r/2:e<t?-(1+ee)*r/te:(te-1+ee)*r/te})),g()(h()(n),"handleItem",(function(){var e=n.parent,t=e.isCard,r=e.state,i=e.setActiveItem,o=e.activeIndex,a=r.items.length,s=r.items.indexOf(h()(n));if(t&&s!==o){i(s,0===o?s!==a-1:o===a-1?0===s:s>o)}})),n}return v()(t,e),c()(t,[{key:"componentDidMount",value:function(){this.parent.addItem(this)}},{key:"componentWillUnmount",value:function(){this.parent.removeItem(this)}},{key:"render",value:function(){var e=this.state,t=e.scale,n=e.translate,r=e.ready,i=e.active,o=e.inStage,a=e.animating,s=this.parent,c=s.isCard,l=s.cardWidth,u=100;return c&&(u=i?100*l:50),w.a.createElement(z,{show:r},w.a.createElement("div",{className:T()("el-carousel__item",{"is-active":i,"el-carousel__item--card":this.parent.isCard,"is-in-stage":o,"is-animating":a}),onClick:this.handleItem,style:{width:"".concat(u,"%"),msTransform:"translateX(".concat(n,"px) scale(").concat(t,")"),WebkitTransform:"translateX(".concat(n,"px) scale(").concat(t,")"),transform:"translateX(".concat(n,"px) scale(").concat(t,")")}},this.parent.isCard&&w.a.createElement(z,{show:!i},w.a.createElement("div",{className:"el-carousel__mask"})),this.props.children))}},{key:"parent",get:function(){return this.context.component}}]),t}(_.Component);ne.contextTypes={component:x.a.any};var re=ne;n(21);Z.Item=re;t.default=Z}])}));