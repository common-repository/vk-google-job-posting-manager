/*! For license information please see react-jsx-runtime.js.LICENSE.txt */
!function(){"use strict";var r={20:function(r,e,t){var o=t(609),n=Symbol.for("react.element"),f=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,s=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function a(r,e,t){var o,f={},a=null,c=null;for(o in void 0!==t&&(a=""+t),void 0!==e.key&&(a=""+e.key),void 0!==e.ref&&(c=e.ref),e)i.call(e,o)&&!u.hasOwnProperty(o)&&(f[o]=e[o]);if(r&&r.defaultProps)for(o in e=r.defaultProps)void 0===f[o]&&(f[o]=e[o]);return{$$typeof:n,type:r,key:a,ref:c,props:f,_owner:s.current}}e.Fragment=f,e.jsx=a,e.jsxs=a},848:function(r,e,t){r.exports=t(20)},609:function(r){r.exports=window.React}},e={},t=function t(o){var n=e[o];if(void 0!==n)return n.exports;var f=e[o]={exports:{}};return r[o](f,f.exports,t),f.exports}(848);window.ReactJSXRuntime=t}();