!function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=1)}([function(e,t){e.exports=React},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=n(0),a=function(e){return e&&e.__esModule?e:{default:e}}(c),l=n(2),f=function(e){function t(e){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return u(t,e),i(t,[{key:"render",value:function(){var e=this,t=this.props.checklistvalue.map(function(t,n){return a.default.createElement("li",{key:t.toString(),onClick:function(){return e.props.deleteItem(n)}},t)});return a.default.createElement("div",{style:{backgroundColor:"#355E7C"}},a.default.createElement("h2",null,"React"),a.default.createElement("ul",null,t),a.default.createElement("button",{onClick:this.props.customEvent},"Click me to increment by 100"),a.default.createElement("p",null,"Counter = ",this.props.countervalue))}}]),t}(a.default.Component);(0,l.register)(f,"react-hello-world",["countervalue","checklistvalue"],{customEvent:function(){return new Event("custom-event",{bubbles:!0})},deleteItem:function(e){return new CustomEvent("delete-item",{bubbles:!0,detail:[e]})}})},function(e,t,n){!function(t,r){e.exports=r(n(0),n(3))}(0,function(e,t){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=3)}([function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u=(t.pipe=function(e,t){return function(n){return t(e(n))}},t.objectFromArray=function(e,t){return t.reduce(function(t,n){return o({},t,r({},n,e(n)))},{})},t.mapObject=function(e,t){return Object.keys(t).reduce(function(n,u){return o({},n,r({},u,e(t[u],u,t)))},{})},t.mapObjectKeys=function(e,t){return Object.keys(t).reduce(function(n,u){return o({},n,r({},e(u),t[u]))},{})},/^!!/),i=/\(\)$/;t.isBoolConvention=function(e){return u.test(e)},t.isHandlerConvention=function(e){return i.test(e)},t.sanitizeAttributeName=function(e){return e.replace(u,"").replace(i,"")},t.setBooleanAttribute=function(e,t,n){n?e.setAttribute(t,""):e.removeAttribute(t)}},function(t,n){t.exports=e},function(e,n){e.exports=t},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function c(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{useShadowDOM:!0},c=function(e){return(0,d.objectFromArray)(w,e)},a=function(e){return(0,d.mapObjectKeys)(d.sanitizeAttributeName,e)},s=(0,d.pipe)(c,a)(t),b=Object.keys(s).map(function(e){return e.toLowerCase()}),h=function(e){return function(t){return function(){var n=t.apply(void 0,arguments);n&&e.dispatchEvent(n)}}},y=function(t){var o=f({},O(t,s),(0,d.mapObject)(h(t),n)),u=r.useShadowDOM?t.shadowRoot:t;v.default.render(p.default.createElement(e,o,p.default.createElement("slot")),u)},m=function(e){function t(){o(this,t);var e=u(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return r.useShadowDOM&&e.attachShadow({mode:"open"}),e}return i(t,e),l(t,null,[{key:"observedAttributes",get:function(){return b}}]),l(t,[{key:"connectedCallback",value:function(){y(this)}},{key:"attributeChangedCallback",value:function(){y(this)}},{key:"disconnectedCallback",value:function(){var e=r.useShadowDOM?this.shadowRoot:this;v.default.unmountComponentAtNode(e)}}]),t}(HTMLElement);return j(m,s),m}function a(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{useShadowDOM:!0};return customElements.define(t,c(e,n,r,o))}Object.defineProperty(t,"__esModule",{value:!0}),t.convert=t.register=void 0;var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s=n(1),p=r(s),b=n(2),v=r(b),d=n(0),h={bool:"bool",event:"event",json:"json"},y=function(e,t){return null===e[t]?void 0:e[t]},m=function(e,t){var n=e[t];return function(){for(var r=arguments.length,o=Array(r),u=0;u<r;u++)o[u]=arguments[u];var i=new CustomEvent(t,{bubbles:!0,cancelable:!0,detail:o});e.dispatchEvent(i),"function"==typeof n&&n.call(e,i)}},O=function(e,t){var n=function(t,n){return t===h.event?m(e,n):y(e,n)};return(0,d.mapObject)(n,t)},g=function(e,t){var n={enumerable:!0,configurable:!0};if(t===h.event){var r=void 0;return f({},n,{get:function(){if(void 0!==r)return r;var t=this.getAttribute(e);if(null===t)return null;try{return new Function(t)}catch(e){return null}},set:function(e){r="function"==typeof e?e:null,this.attributeChangedCallback()}})}return t===h.bool?f({},n,{get:function(){return this.hasAttribute(e)},set:function(t){(0,d.setBooleanAttribute)(this,e,t)}}):f({},n,{get:function(){var t=this.getAttribute(e);try{return JSON.parse(t)}catch(e){return t}},set:function(t){var n="string"==typeof t?t:JSON.stringify(t);this.setAttribute(e,n)}})},j=function(e,t){Object.keys(t).forEach(function(n){var r=t[n];Object.defineProperty(e.prototype,n,g(n,r))})},w=function(e){return(0,d.isBoolConvention)(e)?h.bool:(0,d.isHandlerConvention)(e)?h.event:h.json};t.default={register:a,convert:c},t.register=a,t.convert=c}])})},function(e,t){e.exports=ReactDOM}]);