webpackJsonp([35783957827783,0x86b78faebbec],{103:function(t,e){"use strict";var r={childContextTypes:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,mixins:!0,propTypes:!0,type:!0},n={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},o=Object.defineProperty,a=Object.getOwnPropertyNames,s=Object.getOwnPropertySymbols,i=Object.getOwnPropertyDescriptor,u=Object.getPrototypeOf,c=u&&u(Object);t.exports=function t(e,l,f){if("string"!=typeof l){if(c){var d=u(l);d&&d!==c&&t(e,d,f)}var p=a(l);s&&(p=p.concat(s(l)));for(var h=0;h<p.length;++h){var y=p[h];if(!(r[y]||n[y]||f&&f[y])){var v=i(l,y);try{o(e,y,v)}catch(t){}}}return e}return e}},81:function(t,e){},61:function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}e.__esModule=!0;var i=r(5),u=n(i);r(42);r(81);var c=function(t){function e(){return o(this,e),a(this,t.apply(this,arguments))}return s(e,t),e.prototype.render=function(){return u.default.createElement("div",{className:"fadeInTransition"},this.props.children)},e}(i.Component);e.default=c,t.exports=e.default},82:function(t,e){},62:function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}e.__esModule=!0;var i=r(5),u=n(i),c=r(!function(){var t=new Error('Cannot find module "react-hammerjs"');throw t.code="MODULE_NOT_FOUND",t}()),l=n(c),f=r(61),d=n(f);r(82);var p=function(t){function e(){o(this,e);var r=a(this,t.call(this));return r.getVirtualSlides=function(){var t=r.state,e=t.assets,n=t.virtualIndexArray,o=[],a=r.state.current;o=n.length?n.map(function(t,r){var o=n[a];return r===a?t:r===a-1?o-1>=0?o-1:e.length-1:r===a+1?o+1<=e.length-1?o+1:0:0===r?o+1<=e.length-1?o+1:0:r===n.length-1?o-1>=0?o-1:e.length-1:r!==a-1||r!==a+1?t:void 0}):Array.from(Array(4),function(t,r){return e[a]&&3!==r?a++:e.length-1}),r.setState({virtualIndexArray:o},function(){return r.canMove=!0})},r.handleSwipe=function(t){var e=t.offsetDirection;if(!r.canMove)return!1;r.canMove=!1;var n={2:"left",4:"right"};r.moveSlideX(n[e])},r.canMove=!0,r.transitionAdded=!1,r.moveDeg=90,r.state={assets:[],rotateStatus:{rotateX:0,rotateY:0,rotateZ:0},current:0,virtualIndexArray:[]},r}return s(e,t),e.prototype.componentWillMount=function(){var t=this;setTimeout(function(){t.setState({assets:[{src:"asset0"},{src:"asset1"},{src:"asset2"},{src:"asset3"},{src:"asset4"},{src:"asset5"},{src:"assset6"}]},function(){return t.getVirtualSlides()})},3e3)},e.prototype.componentWillUnmount=function(){this.slider.removeEventListener("transitionend",this.getVirtualSlides,!1)},e.prototype.componentDidUpdate=function(){this.transitionAdded||(this.transitionAdded=!0,this.slider.addEventListener("transitionend",this.getVirtualSlides,!1))},e.prototype.addCubeClasses=function(t){switch(t){case 0:return"firstSlide";case 1:return"secondSlide";case 2:return"thirdSlide";case 3:return"fourSlide";default:return"none"}},e.prototype.setCurrent=function(t){var e=this.state,r=e.current,n=e.virtualIndexArray;return r-t<0?n.length-1:r-t>n.length-1?0:r-t},e.prototype.moveSlideX=function(t){var e=this.state.rotateStatus.rotateY,r="left"===t?-1:1;this.setState({dirNumber:r,direction:t,rotateStatus:{rotateX:0,rotateY:e+r*this.moveDeg,rotateZ:0},current:this.setCurrent(r)})},e.prototype.getRotateDeg=function(){var t=this.state,e=t.rotateStatus,r=t.direction,n=e.rotateY;if(!r)return{};var o=0,a=1,s=0;return"rotate3d("+o+", "+a+", "+s+", "+n+"deg)"},e.prototype.renderSlides=function(){var t=this,e=this.state,r=e.assets,n=e.virtualIndexArray;return u.default.createElement(d.default,null,u.default.createElement("div",{className:"slider",style:{transform:this.getRotateDeg()},ref:function(e){return t.slider=e}},n.map(function(e,n){return u.default.createElement("div",{key:n,className:"slide "+t.addCubeClasses(n)},r.find(function(t,r){t.src;return e===r}).src)})))},e.prototype.render=function(){return u.default.createElement("div",{className:"Carousel"},u.default.createElement("header",{className:"Carousel-header"},u.default.createElement("h1",{className:"Carousel-title"},"Carousel In React")),u.default.createElement(l.default,{onSwipe:this.handleSwipe},u.default.createElement("div",{className:"slider-wrapper"},this.state.assets.length>0&&this.renderSlides())))},e}(i.Component);e.default=p,t.exports=e.default},178:function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0;var o=r(62),a=n(o);e.default=a.default,t.exports=e.default}});
//# sourceMappingURL=component---src-pages-index-js-53815ebb84c2315a9d48.js.map