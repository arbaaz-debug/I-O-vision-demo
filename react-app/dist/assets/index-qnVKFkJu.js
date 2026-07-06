var kv=Object.defineProperty;var Ov=(t,e,n)=>e in t?kv(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var Ie=(t,e,n)=>Ov(t,typeof e!="symbol"?e+"":e,n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();var Rm={exports:{}},Rl={},Pm={exports:{}},ze={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Oo=Symbol.for("react.element"),zv=Symbol.for("react.portal"),Bv=Symbol.for("react.fragment"),Hv=Symbol.for("react.strict_mode"),Vv=Symbol.for("react.profiler"),Gv=Symbol.for("react.provider"),Wv=Symbol.for("react.context"),jv=Symbol.for("react.forward_ref"),Xv=Symbol.for("react.suspense"),$v=Symbol.for("react.memo"),Yv=Symbol.for("react.lazy"),ph=Symbol.iterator;function qv(t){return t===null||typeof t!="object"?null:(t=ph&&t[ph]||t["@@iterator"],typeof t=="function"?t:null)}var Lm={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Nm=Object.assign,Dm={};function Ls(t,e,n){this.props=t,this.context=e,this.refs=Dm,this.updater=n||Lm}Ls.prototype.isReactComponent={};Ls.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Ls.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Im(){}Im.prototype=Ls.prototype;function Hd(t,e,n){this.props=t,this.context=e,this.refs=Dm,this.updater=n||Lm}var Vd=Hd.prototype=new Im;Vd.constructor=Hd;Nm(Vd,Ls.prototype);Vd.isPureReactComponent=!0;var mh=Array.isArray,Um=Object.prototype.hasOwnProperty,Gd={current:null},Fm={key:!0,ref:!0,__self:!0,__source:!0};function km(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Um.call(e,i)&&!Fm.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:Oo,type:t,key:s,ref:o,props:r,_owner:Gd.current}}function Kv(t,e){return{$$typeof:Oo,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Wd(t){return typeof t=="object"&&t!==null&&t.$$typeof===Oo}function Zv(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var gh=/\/+/g;function Ql(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Zv(""+t.key):e.toString(36)}function Da(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Oo:case zv:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+Ql(o,0):i,mh(r)?(n="",t!=null&&(n=t.replace(gh,"$&/")+"/"),Da(r,e,n,"",function(c){return c})):r!=null&&(Wd(r)&&(r=Kv(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(gh,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",mh(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+Ql(s,a);o+=Da(s,e,n,l,r)}else if(l=qv(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+Ql(s,a++),o+=Da(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Yo(t,e,n){if(t==null)return t;var i=[],r=0;return Da(t,i,"","",function(s){return e.call(n,s,r++)}),i}function Qv(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Kt={current:null},Ia={transition:null},Jv={ReactCurrentDispatcher:Kt,ReactCurrentBatchConfig:Ia,ReactCurrentOwner:Gd};function Om(){throw Error("act(...) is not supported in production builds of React.")}ze.Children={map:Yo,forEach:function(t,e,n){Yo(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Yo(t,function(){e++}),e},toArray:function(t){return Yo(t,function(e){return e})||[]},only:function(t){if(!Wd(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ze.Component=Ls;ze.Fragment=Bv;ze.Profiler=Vv;ze.PureComponent=Hd;ze.StrictMode=Hv;ze.Suspense=Xv;ze.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Jv;ze.act=Om;ze.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=Nm({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Gd.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)Um.call(e,l)&&!Fm.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:Oo,type:t.type,key:r,ref:s,props:i,_owner:o}};ze.createContext=function(t){return t={$$typeof:Wv,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Gv,_context:t},t.Consumer=t};ze.createElement=km;ze.createFactory=function(t){var e=km.bind(null,t);return e.type=t,e};ze.createRef=function(){return{current:null}};ze.forwardRef=function(t){return{$$typeof:jv,render:t}};ze.isValidElement=Wd;ze.lazy=function(t){return{$$typeof:Yv,_payload:{_status:-1,_result:t},_init:Qv}};ze.memo=function(t,e){return{$$typeof:$v,type:t,compare:e===void 0?null:e}};ze.startTransition=function(t){var e=Ia.transition;Ia.transition={};try{t()}finally{Ia.transition=e}};ze.unstable_act=Om;ze.useCallback=function(t,e){return Kt.current.useCallback(t,e)};ze.useContext=function(t){return Kt.current.useContext(t)};ze.useDebugValue=function(){};ze.useDeferredValue=function(t){return Kt.current.useDeferredValue(t)};ze.useEffect=function(t,e){return Kt.current.useEffect(t,e)};ze.useId=function(){return Kt.current.useId()};ze.useImperativeHandle=function(t,e,n){return Kt.current.useImperativeHandle(t,e,n)};ze.useInsertionEffect=function(t,e){return Kt.current.useInsertionEffect(t,e)};ze.useLayoutEffect=function(t,e){return Kt.current.useLayoutEffect(t,e)};ze.useMemo=function(t,e){return Kt.current.useMemo(t,e)};ze.useReducer=function(t,e,n){return Kt.current.useReducer(t,e,n)};ze.useRef=function(t){return Kt.current.useRef(t)};ze.useState=function(t){return Kt.current.useState(t)};ze.useSyncExternalStore=function(t,e,n){return Kt.current.useSyncExternalStore(t,e,n)};ze.useTransition=function(){return Kt.current.useTransition()};ze.version="18.3.1";Pm.exports=ze;var Me=Pm.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ex=Me,tx=Symbol.for("react.element"),nx=Symbol.for("react.fragment"),ix=Object.prototype.hasOwnProperty,rx=ex.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,sx={key:!0,ref:!0,__self:!0,__source:!0};function zm(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)ix.call(e,i)&&!sx.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:tx,type:t,key:s,ref:o,props:r,_owner:rx.current}}Rl.Fragment=nx;Rl.jsx=zm;Rl.jsxs=zm;Rm.exports=Rl;var _=Rm.exports,au={},Bm={exports:{}},gn={},Hm={exports:{}},Vm={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(N,K){var ee=N.length;N.push(K);e:for(;0<ee;){var ae=ee-1>>>1,we=N[ae];if(0<r(we,K))N[ae]=K,N[ee]=we,ee=ae;else break e}}function n(N){return N.length===0?null:N[0]}function i(N){if(N.length===0)return null;var K=N[0],ee=N.pop();if(ee!==K){N[0]=ee;e:for(var ae=0,we=N.length,Oe=we>>>1;ae<Oe;){var q=2*(ae+1)-1,re=N[q],fe=q+1,de=N[fe];if(0>r(re,ee))fe<we&&0>r(de,re)?(N[ae]=de,N[fe]=ee,ae=fe):(N[ae]=re,N[q]=ee,ae=q);else if(fe<we&&0>r(de,ee))N[ae]=de,N[fe]=ee,ae=fe;else break e}}return K}function r(N,K){var ee=N.sortIndex-K.sortIndex;return ee!==0?ee:N.id-K.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],d=1,h=null,f=3,m=!1,y=!1,S=!1,p=typeof setTimeout=="function"?setTimeout:null,u=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(N){for(var K=n(c);K!==null;){if(K.callback===null)i(c);else if(K.startTime<=N)i(c),K.sortIndex=K.expirationTime,e(l,K);else break;K=n(c)}}function M(N){if(S=!1,g(N),!y)if(n(l)!==null)y=!0,j(P);else{var K=n(c);K!==null&&Y(M,K.startTime-N)}}function P(N,K){y=!1,S&&(S=!1,u(R),R=-1),m=!0;var ee=f;try{for(g(K),h=n(l);h!==null&&(!(h.expirationTime>K)||N&&!E());){var ae=h.callback;if(typeof ae=="function"){h.callback=null,f=h.priorityLevel;var we=ae(h.expirationTime<=K);K=t.unstable_now(),typeof we=="function"?h.callback=we:h===n(l)&&i(l),g(K)}else i(l);h=n(l)}if(h!==null)var Oe=!0;else{var q=n(c);q!==null&&Y(M,q.startTime-K),Oe=!1}return Oe}finally{h=null,f=ee,m=!1}}var b=!1,T=null,R=-1,D=5,x=-1;function E(){return!(t.unstable_now()-x<D)}function U(){if(T!==null){var N=t.unstable_now();x=N;var K=!0;try{K=T(!0,N)}finally{K?B():(b=!1,T=null)}}else b=!1}var B;if(typeof v=="function")B=function(){v(U)};else if(typeof MessageChannel<"u"){var O=new MessageChannel,$=O.port2;O.port1.onmessage=U,B=function(){$.postMessage(null)}}else B=function(){p(U,0)};function j(N){T=N,b||(b=!0,B())}function Y(N,K){R=p(function(){N(t.unstable_now())},K)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(N){N.callback=null},t.unstable_continueExecution=function(){y||m||(y=!0,j(P))},t.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):D=0<N?Math.floor(1e3/N):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(N){switch(f){case 1:case 2:case 3:var K=3;break;default:K=f}var ee=f;f=K;try{return N()}finally{f=ee}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(N,K){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var ee=f;f=N;try{return K()}finally{f=ee}},t.unstable_scheduleCallback=function(N,K,ee){var ae=t.unstable_now();switch(typeof ee=="object"&&ee!==null?(ee=ee.delay,ee=typeof ee=="number"&&0<ee?ae+ee:ae):ee=ae,N){case 1:var we=-1;break;case 2:we=250;break;case 5:we=1073741823;break;case 4:we=1e4;break;default:we=5e3}return we=ee+we,N={id:d++,callback:K,priorityLevel:N,startTime:ee,expirationTime:we,sortIndex:-1},ee>ae?(N.sortIndex=ee,e(c,N),n(l)===null&&N===n(c)&&(S?(u(R),R=-1):S=!0,Y(M,ee-ae))):(N.sortIndex=we,e(l,N),y||m||(y=!0,j(P))),N},t.unstable_shouldYield=E,t.unstable_wrapCallback=function(N){var K=f;return function(){var ee=f;f=K;try{return N.apply(this,arguments)}finally{f=ee}}}})(Vm);Hm.exports=Vm;var ox=Hm.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ax=Me,mn=ox;function se(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Gm=new Set,mo={};function Cr(t,e){gs(t,e),gs(t+"Capture",e)}function gs(t,e){for(mo[t]=e,t=0;t<e.length;t++)Gm.add(e[t])}var pi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),lu=Object.prototype.hasOwnProperty,lx=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,vh={},xh={};function cx(t){return lu.call(xh,t)?!0:lu.call(vh,t)?!1:lx.test(t)?xh[t]=!0:(vh[t]=!0,!1)}function ux(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function dx(t,e,n,i){if(e===null||typeof e>"u"||ux(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Zt(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Ft={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ft[t]=new Zt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ft[e]=new Zt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ft[t]=new Zt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ft[t]=new Zt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ft[t]=new Zt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ft[t]=new Zt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ft[t]=new Zt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ft[t]=new Zt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ft[t]=new Zt(t,5,!1,t.toLowerCase(),null,!1,!1)});var jd=/[\-:]([a-z])/g;function Xd(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(jd,Xd);Ft[e]=new Zt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(jd,Xd);Ft[e]=new Zt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(jd,Xd);Ft[e]=new Zt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ft[t]=new Zt(t,1,!1,t.toLowerCase(),null,!1,!1)});Ft.xlinkHref=new Zt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ft[t]=new Zt(t,1,!1,t.toLowerCase(),null,!0,!0)});function $d(t,e,n,i){var r=Ft.hasOwnProperty(e)?Ft[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(dx(e,n,r,i)&&(n=null),i||r===null?cx(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var _i=ax.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,qo=Symbol.for("react.element"),Yr=Symbol.for("react.portal"),qr=Symbol.for("react.fragment"),Yd=Symbol.for("react.strict_mode"),cu=Symbol.for("react.profiler"),Wm=Symbol.for("react.provider"),jm=Symbol.for("react.context"),qd=Symbol.for("react.forward_ref"),uu=Symbol.for("react.suspense"),du=Symbol.for("react.suspense_list"),Kd=Symbol.for("react.memo"),Ci=Symbol.for("react.lazy"),Xm=Symbol.for("react.offscreen"),_h=Symbol.iterator;function Os(t){return t===null||typeof t!="object"?null:(t=_h&&t[_h]||t["@@iterator"],typeof t=="function"?t:null)}var ht=Object.assign,Jl;function Qs(t){if(Jl===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Jl=e&&e[1]||""}return`
`+Jl+t}var ec=!1;function tc(t,e){if(!t||ec)return"";ec=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{ec=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Qs(t):""}function fx(t){switch(t.tag){case 5:return Qs(t.type);case 16:return Qs("Lazy");case 13:return Qs("Suspense");case 19:return Qs("SuspenseList");case 0:case 2:case 15:return t=tc(t.type,!1),t;case 11:return t=tc(t.type.render,!1),t;case 1:return t=tc(t.type,!0),t;default:return""}}function fu(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case qr:return"Fragment";case Yr:return"Portal";case cu:return"Profiler";case Yd:return"StrictMode";case uu:return"Suspense";case du:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case jm:return(t.displayName||"Context")+".Consumer";case Wm:return(t._context.displayName||"Context")+".Provider";case qd:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Kd:return e=t.displayName||null,e!==null?e:fu(t.type)||"Memo";case Ci:e=t._payload,t=t._init;try{return fu(t(e))}catch{}}return null}function hx(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return fu(e);case 8:return e===Yd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function ji(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function $m(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function px(t){var e=$m(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ko(t){t._valueTracker||(t._valueTracker=px(t))}function Ym(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=$m(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Ja(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function hu(t,e){var n=e.checked;return ht({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function yh(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=ji(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function qm(t,e){e=e.checked,e!=null&&$d(t,"checked",e,!1)}function pu(t,e){qm(t,e);var n=ji(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?mu(t,e.type,n):e.hasOwnProperty("defaultValue")&&mu(t,e.type,ji(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Sh(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function mu(t,e,n){(e!=="number"||Ja(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Js=Array.isArray;function as(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+ji(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function gu(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(se(91));return ht({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Mh(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(se(92));if(Js(n)){if(1<n.length)throw Error(se(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:ji(n)}}function Km(t,e){var n=ji(e.value),i=ji(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Eh(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Zm(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function vu(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Zm(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Zo,Qm=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Zo=Zo||document.createElement("div"),Zo.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Zo.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function go(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var io={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},mx=["Webkit","ms","Moz","O"];Object.keys(io).forEach(function(t){mx.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),io[e]=io[t]})});function Jm(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||io.hasOwnProperty(t)&&io[t]?(""+e).trim():e+"px"}function eg(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=Jm(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var gx=ht({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function xu(t,e){if(e){if(gx[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(se(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(se(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(se(61))}if(e.style!=null&&typeof e.style!="object")throw Error(se(62))}}function _u(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var yu=null;function Zd(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Su=null,ls=null,cs=null;function wh(t){if(t=Ho(t)){if(typeof Su!="function")throw Error(se(280));var e=t.stateNode;e&&(e=Il(e),Su(t.stateNode,t.type,e))}}function tg(t){ls?cs?cs.push(t):cs=[t]:ls=t}function ng(){if(ls){var t=ls,e=cs;if(cs=ls=null,wh(t),e)for(t=0;t<e.length;t++)wh(e[t])}}function ig(t,e){return t(e)}function rg(){}var nc=!1;function sg(t,e,n){if(nc)return t(e,n);nc=!0;try{return ig(t,e,n)}finally{nc=!1,(ls!==null||cs!==null)&&(rg(),ng())}}function vo(t,e){var n=t.stateNode;if(n===null)return null;var i=Il(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(se(231,e,typeof n));return n}var Mu=!1;if(pi)try{var zs={};Object.defineProperty(zs,"passive",{get:function(){Mu=!0}}),window.addEventListener("test",zs,zs),window.removeEventListener("test",zs,zs)}catch{Mu=!1}function vx(t,e,n,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(d){this.onError(d)}}var ro=!1,el=null,tl=!1,Eu=null,xx={onError:function(t){ro=!0,el=t}};function _x(t,e,n,i,r,s,o,a,l){ro=!1,el=null,vx.apply(xx,arguments)}function yx(t,e,n,i,r,s,o,a,l){if(_x.apply(this,arguments),ro){if(ro){var c=el;ro=!1,el=null}else throw Error(se(198));tl||(tl=!0,Eu=c)}}function Rr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function og(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Th(t){if(Rr(t)!==t)throw Error(se(188))}function Sx(t){var e=t.alternate;if(!e){if(e=Rr(t),e===null)throw Error(se(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return Th(r),t;if(s===i)return Th(r),e;s=s.sibling}throw Error(se(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(se(189))}}if(n.alternate!==i)throw Error(se(190))}if(n.tag!==3)throw Error(se(188));return n.stateNode.current===n?t:e}function ag(t){return t=Sx(t),t!==null?lg(t):null}function lg(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=lg(t);if(e!==null)return e;t=t.sibling}return null}var cg=mn.unstable_scheduleCallback,Ah=mn.unstable_cancelCallback,Mx=mn.unstable_shouldYield,Ex=mn.unstable_requestPaint,_t=mn.unstable_now,wx=mn.unstable_getCurrentPriorityLevel,Qd=mn.unstable_ImmediatePriority,ug=mn.unstable_UserBlockingPriority,nl=mn.unstable_NormalPriority,Tx=mn.unstable_LowPriority,dg=mn.unstable_IdlePriority,Pl=null,qn=null;function Ax(t){if(qn&&typeof qn.onCommitFiberRoot=="function")try{qn.onCommitFiberRoot(Pl,t,void 0,(t.current.flags&128)===128)}catch{}}var Bn=Math.clz32?Math.clz32:Rx,bx=Math.log,Cx=Math.LN2;function Rx(t){return t>>>=0,t===0?32:31-(bx(t)/Cx|0)|0}var Qo=64,Jo=4194304;function eo(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function il(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=eo(a):(s&=o,s!==0&&(i=eo(s)))}else o=n&~r,o!==0?i=eo(o):s!==0&&(i=eo(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-Bn(e),r=1<<n,i|=t[n],e&=~r;return i}function Px(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Lx(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Bn(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=Px(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function wu(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function fg(){var t=Qo;return Qo<<=1,!(Qo&4194240)&&(Qo=64),t}function ic(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function zo(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Bn(e),t[e]=n}function Nx(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-Bn(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function Jd(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-Bn(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var it=0;function hg(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var pg,ef,mg,gg,vg,Tu=!1,ea=[],Ui=null,Fi=null,ki=null,xo=new Map,_o=new Map,Pi=[],Dx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function bh(t,e){switch(t){case"focusin":case"focusout":Ui=null;break;case"dragenter":case"dragleave":Fi=null;break;case"mouseover":case"mouseout":ki=null;break;case"pointerover":case"pointerout":xo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":_o.delete(e.pointerId)}}function Bs(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Ho(e),e!==null&&ef(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function Ix(t,e,n,i,r){switch(e){case"focusin":return Ui=Bs(Ui,t,e,n,i,r),!0;case"dragenter":return Fi=Bs(Fi,t,e,n,i,r),!0;case"mouseover":return ki=Bs(ki,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return xo.set(s,Bs(xo.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,_o.set(s,Bs(_o.get(s)||null,t,e,n,i,r)),!0}return!1}function xg(t){var e=fr(t.target);if(e!==null){var n=Rr(e);if(n!==null){if(e=n.tag,e===13){if(e=og(n),e!==null){t.blockedOn=e,vg(t.priority,function(){mg(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ua(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Au(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);yu=i,n.target.dispatchEvent(i),yu=null}else return e=Ho(n),e!==null&&ef(e),t.blockedOn=n,!1;e.shift()}return!0}function Ch(t,e,n){Ua(t)&&n.delete(e)}function Ux(){Tu=!1,Ui!==null&&Ua(Ui)&&(Ui=null),Fi!==null&&Ua(Fi)&&(Fi=null),ki!==null&&Ua(ki)&&(ki=null),xo.forEach(Ch),_o.forEach(Ch)}function Hs(t,e){t.blockedOn===e&&(t.blockedOn=null,Tu||(Tu=!0,mn.unstable_scheduleCallback(mn.unstable_NormalPriority,Ux)))}function yo(t){function e(r){return Hs(r,t)}if(0<ea.length){Hs(ea[0],t);for(var n=1;n<ea.length;n++){var i=ea[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Ui!==null&&Hs(Ui,t),Fi!==null&&Hs(Fi,t),ki!==null&&Hs(ki,t),xo.forEach(e),_o.forEach(e),n=0;n<Pi.length;n++)i=Pi[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Pi.length&&(n=Pi[0],n.blockedOn===null);)xg(n),n.blockedOn===null&&Pi.shift()}var us=_i.ReactCurrentBatchConfig,rl=!0;function Fx(t,e,n,i){var r=it,s=us.transition;us.transition=null;try{it=1,tf(t,e,n,i)}finally{it=r,us.transition=s}}function kx(t,e,n,i){var r=it,s=us.transition;us.transition=null;try{it=4,tf(t,e,n,i)}finally{it=r,us.transition=s}}function tf(t,e,n,i){if(rl){var r=Au(t,e,n,i);if(r===null)hc(t,e,i,sl,n),bh(t,i);else if(Ix(r,t,e,n,i))i.stopPropagation();else if(bh(t,i),e&4&&-1<Dx.indexOf(t)){for(;r!==null;){var s=Ho(r);if(s!==null&&pg(s),s=Au(t,e,n,i),s===null&&hc(t,e,i,sl,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else hc(t,e,i,null,n)}}var sl=null;function Au(t,e,n,i){if(sl=null,t=Zd(i),t=fr(t),t!==null)if(e=Rr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=og(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return sl=t,null}function _g(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(wx()){case Qd:return 1;case ug:return 4;case nl:case Tx:return 16;case dg:return 536870912;default:return 16}default:return 16}}var Di=null,nf=null,Fa=null;function yg(){if(Fa)return Fa;var t,e=nf,n=e.length,i,r="value"in Di?Di.value:Di.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return Fa=r.slice(t,1<i?1-i:void 0)}function ka(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function ta(){return!0}function Rh(){return!1}function vn(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?ta:Rh,this.isPropagationStopped=Rh,this}return ht(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ta)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ta)},persist:function(){},isPersistent:ta}),e}var Ns={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},rf=vn(Ns),Bo=ht({},Ns,{view:0,detail:0}),Ox=vn(Bo),rc,sc,Vs,Ll=ht({},Bo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:sf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Vs&&(Vs&&t.type==="mousemove"?(rc=t.screenX-Vs.screenX,sc=t.screenY-Vs.screenY):sc=rc=0,Vs=t),rc)},movementY:function(t){return"movementY"in t?t.movementY:sc}}),Ph=vn(Ll),zx=ht({},Ll,{dataTransfer:0}),Bx=vn(zx),Hx=ht({},Bo,{relatedTarget:0}),oc=vn(Hx),Vx=ht({},Ns,{animationName:0,elapsedTime:0,pseudoElement:0}),Gx=vn(Vx),Wx=ht({},Ns,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),jx=vn(Wx),Xx=ht({},Ns,{data:0}),Lh=vn(Xx),$x={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Yx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},qx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Kx(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=qx[t])?!!e[t]:!1}function sf(){return Kx}var Zx=ht({},Bo,{key:function(t){if(t.key){var e=$x[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=ka(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Yx[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:sf,charCode:function(t){return t.type==="keypress"?ka(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ka(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Qx=vn(Zx),Jx=ht({},Ll,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Nh=vn(Jx),e_=ht({},Bo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:sf}),t_=vn(e_),n_=ht({},Ns,{propertyName:0,elapsedTime:0,pseudoElement:0}),i_=vn(n_),r_=ht({},Ll,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),s_=vn(r_),o_=[9,13,27,32],of=pi&&"CompositionEvent"in window,so=null;pi&&"documentMode"in document&&(so=document.documentMode);var a_=pi&&"TextEvent"in window&&!so,Sg=pi&&(!of||so&&8<so&&11>=so),Dh=" ",Ih=!1;function Mg(t,e){switch(t){case"keyup":return o_.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Eg(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Kr=!1;function l_(t,e){switch(t){case"compositionend":return Eg(e);case"keypress":return e.which!==32?null:(Ih=!0,Dh);case"textInput":return t=e.data,t===Dh&&Ih?null:t;default:return null}}function c_(t,e){if(Kr)return t==="compositionend"||!of&&Mg(t,e)?(t=yg(),Fa=nf=Di=null,Kr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Sg&&e.locale!=="ko"?null:e.data;default:return null}}var u_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Uh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!u_[t.type]:e==="textarea"}function wg(t,e,n,i){tg(i),e=ol(e,"onChange"),0<e.length&&(n=new rf("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var oo=null,So=null;function d_(t){Ug(t,0)}function Nl(t){var e=Jr(t);if(Ym(e))return t}function f_(t,e){if(t==="change")return e}var Tg=!1;if(pi){var ac;if(pi){var lc="oninput"in document;if(!lc){var Fh=document.createElement("div");Fh.setAttribute("oninput","return;"),lc=typeof Fh.oninput=="function"}ac=lc}else ac=!1;Tg=ac&&(!document.documentMode||9<document.documentMode)}function kh(){oo&&(oo.detachEvent("onpropertychange",Ag),So=oo=null)}function Ag(t){if(t.propertyName==="value"&&Nl(So)){var e=[];wg(e,So,t,Zd(t)),sg(d_,e)}}function h_(t,e,n){t==="focusin"?(kh(),oo=e,So=n,oo.attachEvent("onpropertychange",Ag)):t==="focusout"&&kh()}function p_(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Nl(So)}function m_(t,e){if(t==="click")return Nl(e)}function g_(t,e){if(t==="input"||t==="change")return Nl(e)}function v_(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Vn=typeof Object.is=="function"?Object.is:v_;function Mo(t,e){if(Vn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!lu.call(e,r)||!Vn(t[r],e[r]))return!1}return!0}function Oh(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function zh(t,e){var n=Oh(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Oh(n)}}function bg(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?bg(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Cg(){for(var t=window,e=Ja();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Ja(t.document)}return e}function af(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function x_(t){var e=Cg(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&bg(n.ownerDocument.documentElement,n)){if(i!==null&&af(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=zh(n,s);var o=zh(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var __=pi&&"documentMode"in document&&11>=document.documentMode,Zr=null,bu=null,ao=null,Cu=!1;function Bh(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Cu||Zr==null||Zr!==Ja(i)||(i=Zr,"selectionStart"in i&&af(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),ao&&Mo(ao,i)||(ao=i,i=ol(bu,"onSelect"),0<i.length&&(e=new rf("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Zr)))}function na(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Qr={animationend:na("Animation","AnimationEnd"),animationiteration:na("Animation","AnimationIteration"),animationstart:na("Animation","AnimationStart"),transitionend:na("Transition","TransitionEnd")},cc={},Rg={};pi&&(Rg=document.createElement("div").style,"AnimationEvent"in window||(delete Qr.animationend.animation,delete Qr.animationiteration.animation,delete Qr.animationstart.animation),"TransitionEvent"in window||delete Qr.transitionend.transition);function Dl(t){if(cc[t])return cc[t];if(!Qr[t])return t;var e=Qr[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Rg)return cc[t]=e[n];return t}var Pg=Dl("animationend"),Lg=Dl("animationiteration"),Ng=Dl("animationstart"),Dg=Dl("transitionend"),Ig=new Map,Hh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function qi(t,e){Ig.set(t,e),Cr(e,[t])}for(var uc=0;uc<Hh.length;uc++){var dc=Hh[uc],y_=dc.toLowerCase(),S_=dc[0].toUpperCase()+dc.slice(1);qi(y_,"on"+S_)}qi(Pg,"onAnimationEnd");qi(Lg,"onAnimationIteration");qi(Ng,"onAnimationStart");qi("dblclick","onDoubleClick");qi("focusin","onFocus");qi("focusout","onBlur");qi(Dg,"onTransitionEnd");gs("onMouseEnter",["mouseout","mouseover"]);gs("onMouseLeave",["mouseout","mouseover"]);gs("onPointerEnter",["pointerout","pointerover"]);gs("onPointerLeave",["pointerout","pointerover"]);Cr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Cr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Cr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Cr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Cr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Cr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var to="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),M_=new Set("cancel close invalid load scroll toggle".split(" ").concat(to));function Vh(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,yx(i,e,void 0,t),t.currentTarget=null}function Ug(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;Vh(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;Vh(r,a,c),s=l}}}if(tl)throw t=Eu,tl=!1,Eu=null,t}function at(t,e){var n=e[Du];n===void 0&&(n=e[Du]=new Set);var i=t+"__bubble";n.has(i)||(Fg(e,t,2,!1),n.add(i))}function fc(t,e,n){var i=0;e&&(i|=4),Fg(n,t,i,e)}var ia="_reactListening"+Math.random().toString(36).slice(2);function Eo(t){if(!t[ia]){t[ia]=!0,Gm.forEach(function(n){n!=="selectionchange"&&(M_.has(n)||fc(n,!1,t),fc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[ia]||(e[ia]=!0,fc("selectionchange",!1,e))}}function Fg(t,e,n,i){switch(_g(e)){case 1:var r=Fx;break;case 4:r=kx;break;default:r=tf}n=r.bind(null,e,n,t),r=void 0,!Mu||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function hc(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=fr(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}sg(function(){var c=s,d=Zd(n),h=[];e:{var f=Ig.get(t);if(f!==void 0){var m=rf,y=t;switch(t){case"keypress":if(ka(n)===0)break e;case"keydown":case"keyup":m=Qx;break;case"focusin":y="focus",m=oc;break;case"focusout":y="blur",m=oc;break;case"beforeblur":case"afterblur":m=oc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=Ph;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=Bx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=t_;break;case Pg:case Lg:case Ng:m=Gx;break;case Dg:m=i_;break;case"scroll":m=Ox;break;case"wheel":m=s_;break;case"copy":case"cut":case"paste":m=jx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=Nh}var S=(e&4)!==0,p=!S&&t==="scroll",u=S?f!==null?f+"Capture":null:f;S=[];for(var v=c,g;v!==null;){g=v;var M=g.stateNode;if(g.tag===5&&M!==null&&(g=M,u!==null&&(M=vo(v,u),M!=null&&S.push(wo(v,M,g)))),p)break;v=v.return}0<S.length&&(f=new m(f,y,null,n,d),h.push({event:f,listeners:S}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",f&&n!==yu&&(y=n.relatedTarget||n.fromElement)&&(fr(y)||y[mi]))break e;if((m||f)&&(f=d.window===d?d:(f=d.ownerDocument)?f.defaultView||f.parentWindow:window,m?(y=n.relatedTarget||n.toElement,m=c,y=y?fr(y):null,y!==null&&(p=Rr(y),y!==p||y.tag!==5&&y.tag!==6)&&(y=null)):(m=null,y=c),m!==y)){if(S=Ph,M="onMouseLeave",u="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(S=Nh,M="onPointerLeave",u="onPointerEnter",v="pointer"),p=m==null?f:Jr(m),g=y==null?f:Jr(y),f=new S(M,v+"leave",m,n,d),f.target=p,f.relatedTarget=g,M=null,fr(d)===c&&(S=new S(u,v+"enter",y,n,d),S.target=g,S.relatedTarget=p,M=S),p=M,m&&y)t:{for(S=m,u=y,v=0,g=S;g;g=Nr(g))v++;for(g=0,M=u;M;M=Nr(M))g++;for(;0<v-g;)S=Nr(S),v--;for(;0<g-v;)u=Nr(u),g--;for(;v--;){if(S===u||u!==null&&S===u.alternate)break t;S=Nr(S),u=Nr(u)}S=null}else S=null;m!==null&&Gh(h,f,m,S,!1),y!==null&&p!==null&&Gh(h,p,y,S,!0)}}e:{if(f=c?Jr(c):window,m=f.nodeName&&f.nodeName.toLowerCase(),m==="select"||m==="input"&&f.type==="file")var P=f_;else if(Uh(f))if(Tg)P=g_;else{P=p_;var b=h_}else(m=f.nodeName)&&m.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(P=m_);if(P&&(P=P(t,c))){wg(h,P,n,d);break e}b&&b(t,f,c),t==="focusout"&&(b=f._wrapperState)&&b.controlled&&f.type==="number"&&mu(f,"number",f.value)}switch(b=c?Jr(c):window,t){case"focusin":(Uh(b)||b.contentEditable==="true")&&(Zr=b,bu=c,ao=null);break;case"focusout":ao=bu=Zr=null;break;case"mousedown":Cu=!0;break;case"contextmenu":case"mouseup":case"dragend":Cu=!1,Bh(h,n,d);break;case"selectionchange":if(__)break;case"keydown":case"keyup":Bh(h,n,d)}var T;if(of)e:{switch(t){case"compositionstart":var R="onCompositionStart";break e;case"compositionend":R="onCompositionEnd";break e;case"compositionupdate":R="onCompositionUpdate";break e}R=void 0}else Kr?Mg(t,n)&&(R="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(R="onCompositionStart");R&&(Sg&&n.locale!=="ko"&&(Kr||R!=="onCompositionStart"?R==="onCompositionEnd"&&Kr&&(T=yg()):(Di=d,nf="value"in Di?Di.value:Di.textContent,Kr=!0)),b=ol(c,R),0<b.length&&(R=new Lh(R,t,null,n,d),h.push({event:R,listeners:b}),T?R.data=T:(T=Eg(n),T!==null&&(R.data=T)))),(T=a_?l_(t,n):c_(t,n))&&(c=ol(c,"onBeforeInput"),0<c.length&&(d=new Lh("onBeforeInput","beforeinput",null,n,d),h.push({event:d,listeners:c}),d.data=T))}Ug(h,e)})}function wo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function ol(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=vo(t,n),s!=null&&i.unshift(wo(t,s,r)),s=vo(t,e),s!=null&&i.push(wo(t,s,r))),t=t.return}return i}function Nr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Gh(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=vo(n,s),l!=null&&o.unshift(wo(n,l,a))):r||(l=vo(n,s),l!=null&&o.push(wo(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var E_=/\r\n?/g,w_=/\u0000|\uFFFD/g;function Wh(t){return(typeof t=="string"?t:""+t).replace(E_,`
`).replace(w_,"")}function ra(t,e,n){if(e=Wh(e),Wh(t)!==e&&n)throw Error(se(425))}function al(){}var Ru=null,Pu=null;function Lu(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Nu=typeof setTimeout=="function"?setTimeout:void 0,T_=typeof clearTimeout=="function"?clearTimeout:void 0,jh=typeof Promise=="function"?Promise:void 0,A_=typeof queueMicrotask=="function"?queueMicrotask:typeof jh<"u"?function(t){return jh.resolve(null).then(t).catch(b_)}:Nu;function b_(t){setTimeout(function(){throw t})}function pc(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),yo(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);yo(e)}function Oi(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Xh(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Ds=Math.random().toString(36).slice(2),Yn="__reactFiber$"+Ds,To="__reactProps$"+Ds,mi="__reactContainer$"+Ds,Du="__reactEvents$"+Ds,C_="__reactListeners$"+Ds,R_="__reactHandles$"+Ds;function fr(t){var e=t[Yn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[mi]||n[Yn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Xh(t);t!==null;){if(n=t[Yn])return n;t=Xh(t)}return e}t=n,n=t.parentNode}return null}function Ho(t){return t=t[Yn]||t[mi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Jr(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(se(33))}function Il(t){return t[To]||null}var Iu=[],es=-1;function Ki(t){return{current:t}}function ct(t){0>es||(t.current=Iu[es],Iu[es]=null,es--)}function st(t,e){es++,Iu[es]=t.current,t.current=e}var Xi={},Gt=Ki(Xi),nn=Ki(!1),yr=Xi;function vs(t,e){var n=t.type.contextTypes;if(!n)return Xi;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function rn(t){return t=t.childContextTypes,t!=null}function ll(){ct(nn),ct(Gt)}function $h(t,e,n){if(Gt.current!==Xi)throw Error(se(168));st(Gt,e),st(nn,n)}function kg(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(se(108,hx(t)||"Unknown",r));return ht({},n,i)}function cl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Xi,yr=Gt.current,st(Gt,t),st(nn,nn.current),!0}function Yh(t,e,n){var i=t.stateNode;if(!i)throw Error(se(169));n?(t=kg(t,e,yr),i.__reactInternalMemoizedMergedChildContext=t,ct(nn),ct(Gt),st(Gt,t)):ct(nn),st(nn,n)}var ai=null,Ul=!1,mc=!1;function Og(t){ai===null?ai=[t]:ai.push(t)}function P_(t){Ul=!0,Og(t)}function Zi(){if(!mc&&ai!==null){mc=!0;var t=0,e=it;try{var n=ai;for(it=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}ai=null,Ul=!1}catch(r){throw ai!==null&&(ai=ai.slice(t+1)),cg(Qd,Zi),r}finally{it=e,mc=!1}}return null}var ts=[],ns=0,ul=null,dl=0,yn=[],Sn=0,Sr=null,ci=1,ui="";function or(t,e){ts[ns++]=dl,ts[ns++]=ul,ul=t,dl=e}function zg(t,e,n){yn[Sn++]=ci,yn[Sn++]=ui,yn[Sn++]=Sr,Sr=t;var i=ci;t=ui;var r=32-Bn(i)-1;i&=~(1<<r),n+=1;var s=32-Bn(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,ci=1<<32-Bn(e)+r|n<<r|i,ui=s+t}else ci=1<<s|n<<r|i,ui=t}function lf(t){t.return!==null&&(or(t,1),zg(t,1,0))}function cf(t){for(;t===ul;)ul=ts[--ns],ts[ns]=null,dl=ts[--ns],ts[ns]=null;for(;t===Sr;)Sr=yn[--Sn],yn[Sn]=null,ui=yn[--Sn],yn[Sn]=null,ci=yn[--Sn],yn[Sn]=null}var pn=null,hn=null,ut=!1,Fn=null;function Bg(t,e){var n=wn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function qh(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,pn=t,hn=Oi(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,pn=t,hn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Sr!==null?{id:ci,overflow:ui}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=wn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,pn=t,hn=null,!0):!1;default:return!1}}function Uu(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Fu(t){if(ut){var e=hn;if(e){var n=e;if(!qh(t,e)){if(Uu(t))throw Error(se(418));e=Oi(n.nextSibling);var i=pn;e&&qh(t,e)?Bg(i,n):(t.flags=t.flags&-4097|2,ut=!1,pn=t)}}else{if(Uu(t))throw Error(se(418));t.flags=t.flags&-4097|2,ut=!1,pn=t}}}function Kh(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;pn=t}function sa(t){if(t!==pn)return!1;if(!ut)return Kh(t),ut=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Lu(t.type,t.memoizedProps)),e&&(e=hn)){if(Uu(t))throw Hg(),Error(se(418));for(;e;)Bg(t,e),e=Oi(e.nextSibling)}if(Kh(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(se(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){hn=Oi(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}hn=null}}else hn=pn?Oi(t.stateNode.nextSibling):null;return!0}function Hg(){for(var t=hn;t;)t=Oi(t.nextSibling)}function xs(){hn=pn=null,ut=!1}function uf(t){Fn===null?Fn=[t]:Fn.push(t)}var L_=_i.ReactCurrentBatchConfig;function Gs(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(se(309));var i=n.stateNode}if(!i)throw Error(se(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(se(284));if(!n._owner)throw Error(se(290,t))}return t}function oa(t,e){throw t=Object.prototype.toString.call(e),Error(se(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Zh(t){var e=t._init;return e(t._payload)}function Vg(t){function e(u,v){if(t){var g=u.deletions;g===null?(u.deletions=[v],u.flags|=16):g.push(v)}}function n(u,v){if(!t)return null;for(;v!==null;)e(u,v),v=v.sibling;return null}function i(u,v){for(u=new Map;v!==null;)v.key!==null?u.set(v.key,v):u.set(v.index,v),v=v.sibling;return u}function r(u,v){return u=Vi(u,v),u.index=0,u.sibling=null,u}function s(u,v,g){return u.index=g,t?(g=u.alternate,g!==null?(g=g.index,g<v?(u.flags|=2,v):g):(u.flags|=2,v)):(u.flags|=1048576,v)}function o(u){return t&&u.alternate===null&&(u.flags|=2),u}function a(u,v,g,M){return v===null||v.tag!==6?(v=Mc(g,u.mode,M),v.return=u,v):(v=r(v,g),v.return=u,v)}function l(u,v,g,M){var P=g.type;return P===qr?d(u,v,g.props.children,M,g.key):v!==null&&(v.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===Ci&&Zh(P)===v.type)?(M=r(v,g.props),M.ref=Gs(u,v,g),M.return=u,M):(M=Wa(g.type,g.key,g.props,null,u.mode,M),M.ref=Gs(u,v,g),M.return=u,M)}function c(u,v,g,M){return v===null||v.tag!==4||v.stateNode.containerInfo!==g.containerInfo||v.stateNode.implementation!==g.implementation?(v=Ec(g,u.mode,M),v.return=u,v):(v=r(v,g.children||[]),v.return=u,v)}function d(u,v,g,M,P){return v===null||v.tag!==7?(v=_r(g,u.mode,M,P),v.return=u,v):(v=r(v,g),v.return=u,v)}function h(u,v,g){if(typeof v=="string"&&v!==""||typeof v=="number")return v=Mc(""+v,u.mode,g),v.return=u,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case qo:return g=Wa(v.type,v.key,v.props,null,u.mode,g),g.ref=Gs(u,null,v),g.return=u,g;case Yr:return v=Ec(v,u.mode,g),v.return=u,v;case Ci:var M=v._init;return h(u,M(v._payload),g)}if(Js(v)||Os(v))return v=_r(v,u.mode,g,null),v.return=u,v;oa(u,v)}return null}function f(u,v,g,M){var P=v!==null?v.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return P!==null?null:a(u,v,""+g,M);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case qo:return g.key===P?l(u,v,g,M):null;case Yr:return g.key===P?c(u,v,g,M):null;case Ci:return P=g._init,f(u,v,P(g._payload),M)}if(Js(g)||Os(g))return P!==null?null:d(u,v,g,M,null);oa(u,g)}return null}function m(u,v,g,M,P){if(typeof M=="string"&&M!==""||typeof M=="number")return u=u.get(g)||null,a(v,u,""+M,P);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case qo:return u=u.get(M.key===null?g:M.key)||null,l(v,u,M,P);case Yr:return u=u.get(M.key===null?g:M.key)||null,c(v,u,M,P);case Ci:var b=M._init;return m(u,v,g,b(M._payload),P)}if(Js(M)||Os(M))return u=u.get(g)||null,d(v,u,M,P,null);oa(v,M)}return null}function y(u,v,g,M){for(var P=null,b=null,T=v,R=v=0,D=null;T!==null&&R<g.length;R++){T.index>R?(D=T,T=null):D=T.sibling;var x=f(u,T,g[R],M);if(x===null){T===null&&(T=D);break}t&&T&&x.alternate===null&&e(u,T),v=s(x,v,R),b===null?P=x:b.sibling=x,b=x,T=D}if(R===g.length)return n(u,T),ut&&or(u,R),P;if(T===null){for(;R<g.length;R++)T=h(u,g[R],M),T!==null&&(v=s(T,v,R),b===null?P=T:b.sibling=T,b=T);return ut&&or(u,R),P}for(T=i(u,T);R<g.length;R++)D=m(T,u,R,g[R],M),D!==null&&(t&&D.alternate!==null&&T.delete(D.key===null?R:D.key),v=s(D,v,R),b===null?P=D:b.sibling=D,b=D);return t&&T.forEach(function(E){return e(u,E)}),ut&&or(u,R),P}function S(u,v,g,M){var P=Os(g);if(typeof P!="function")throw Error(se(150));if(g=P.call(g),g==null)throw Error(se(151));for(var b=P=null,T=v,R=v=0,D=null,x=g.next();T!==null&&!x.done;R++,x=g.next()){T.index>R?(D=T,T=null):D=T.sibling;var E=f(u,T,x.value,M);if(E===null){T===null&&(T=D);break}t&&T&&E.alternate===null&&e(u,T),v=s(E,v,R),b===null?P=E:b.sibling=E,b=E,T=D}if(x.done)return n(u,T),ut&&or(u,R),P;if(T===null){for(;!x.done;R++,x=g.next())x=h(u,x.value,M),x!==null&&(v=s(x,v,R),b===null?P=x:b.sibling=x,b=x);return ut&&or(u,R),P}for(T=i(u,T);!x.done;R++,x=g.next())x=m(T,u,R,x.value,M),x!==null&&(t&&x.alternate!==null&&T.delete(x.key===null?R:x.key),v=s(x,v,R),b===null?P=x:b.sibling=x,b=x);return t&&T.forEach(function(U){return e(u,U)}),ut&&or(u,R),P}function p(u,v,g,M){if(typeof g=="object"&&g!==null&&g.type===qr&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case qo:e:{for(var P=g.key,b=v;b!==null;){if(b.key===P){if(P=g.type,P===qr){if(b.tag===7){n(u,b.sibling),v=r(b,g.props.children),v.return=u,u=v;break e}}else if(b.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===Ci&&Zh(P)===b.type){n(u,b.sibling),v=r(b,g.props),v.ref=Gs(u,b,g),v.return=u,u=v;break e}n(u,b);break}else e(u,b);b=b.sibling}g.type===qr?(v=_r(g.props.children,u.mode,M,g.key),v.return=u,u=v):(M=Wa(g.type,g.key,g.props,null,u.mode,M),M.ref=Gs(u,v,g),M.return=u,u=M)}return o(u);case Yr:e:{for(b=g.key;v!==null;){if(v.key===b)if(v.tag===4&&v.stateNode.containerInfo===g.containerInfo&&v.stateNode.implementation===g.implementation){n(u,v.sibling),v=r(v,g.children||[]),v.return=u,u=v;break e}else{n(u,v);break}else e(u,v);v=v.sibling}v=Ec(g,u.mode,M),v.return=u,u=v}return o(u);case Ci:return b=g._init,p(u,v,b(g._payload),M)}if(Js(g))return y(u,v,g,M);if(Os(g))return S(u,v,g,M);oa(u,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,v!==null&&v.tag===6?(n(u,v.sibling),v=r(v,g),v.return=u,u=v):(n(u,v),v=Mc(g,u.mode,M),v.return=u,u=v),o(u)):n(u,v)}return p}var _s=Vg(!0),Gg=Vg(!1),fl=Ki(null),hl=null,is=null,df=null;function ff(){df=is=hl=null}function hf(t){var e=fl.current;ct(fl),t._currentValue=e}function ku(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function ds(t,e){hl=t,df=is=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(tn=!0),t.firstContext=null)}function bn(t){var e=t._currentValue;if(df!==t)if(t={context:t,memoizedValue:e,next:null},is===null){if(hl===null)throw Error(se(308));is=t,hl.dependencies={lanes:0,firstContext:t}}else is=is.next=t;return e}var hr=null;function pf(t){hr===null?hr=[t]:hr.push(t)}function Wg(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,pf(e)):(n.next=r.next,r.next=n),e.interleaved=n,gi(t,i)}function gi(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Ri=!1;function mf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function jg(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function hi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function zi(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,qe&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,gi(t,n)}return r=i.interleaved,r===null?(e.next=e,pf(i)):(e.next=r.next,r.next=e),i.interleaved=e,gi(t,n)}function Oa(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Jd(t,n)}}function Qh(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function pl(t,e,n,i){var r=t.updateQueue;Ri=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var d=t.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==o&&(a===null?d.firstBaseUpdate=c:a.next=c,d.lastBaseUpdate=l))}if(s!==null){var h=r.baseState;o=0,d=c=l=null,a=s;do{var f=a.lane,m=a.eventTime;if((i&f)===f){d!==null&&(d=d.next={eventTime:m,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var y=t,S=a;switch(f=e,m=n,S.tag){case 1:if(y=S.payload,typeof y=="function"){h=y.call(m,h,f);break e}h=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=S.payload,f=typeof y=="function"?y.call(m,h,f):y,f==null)break e;h=ht({},h,f);break e;case 2:Ri=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,f=r.effects,f===null?r.effects=[a]:f.push(a))}else m={eventTime:m,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(c=d=m,l=h):d=d.next=m,o|=f;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;f=a,a=f.next,f.next=null,r.lastBaseUpdate=f,r.shared.pending=null}}while(!0);if(d===null&&(l=h),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=d,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Er|=o,t.lanes=o,t.memoizedState=h}}function Jh(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(se(191,r));r.call(i)}}}var Vo={},Kn=Ki(Vo),Ao=Ki(Vo),bo=Ki(Vo);function pr(t){if(t===Vo)throw Error(se(174));return t}function gf(t,e){switch(st(bo,e),st(Ao,t),st(Kn,Vo),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:vu(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=vu(e,t)}ct(Kn),st(Kn,e)}function ys(){ct(Kn),ct(Ao),ct(bo)}function Xg(t){pr(bo.current);var e=pr(Kn.current),n=vu(e,t.type);e!==n&&(st(Ao,t),st(Kn,n))}function vf(t){Ao.current===t&&(ct(Kn),ct(Ao))}var dt=Ki(0);function ml(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var gc=[];function xf(){for(var t=0;t<gc.length;t++)gc[t]._workInProgressVersionPrimary=null;gc.length=0}var za=_i.ReactCurrentDispatcher,vc=_i.ReactCurrentBatchConfig,Mr=0,ft=null,wt=null,Pt=null,gl=!1,lo=!1,Co=0,N_=0;function kt(){throw Error(se(321))}function _f(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Vn(t[n],e[n]))return!1;return!0}function yf(t,e,n,i,r,s){if(Mr=s,ft=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,za.current=t===null||t.memoizedState===null?F_:k_,t=n(i,r),lo){s=0;do{if(lo=!1,Co=0,25<=s)throw Error(se(301));s+=1,Pt=wt=null,e.updateQueue=null,za.current=O_,t=n(i,r)}while(lo)}if(za.current=vl,e=wt!==null&&wt.next!==null,Mr=0,Pt=wt=ft=null,gl=!1,e)throw Error(se(300));return t}function Sf(){var t=Co!==0;return Co=0,t}function jn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Pt===null?ft.memoizedState=Pt=t:Pt=Pt.next=t,Pt}function Cn(){if(wt===null){var t=ft.alternate;t=t!==null?t.memoizedState:null}else t=wt.next;var e=Pt===null?ft.memoizedState:Pt.next;if(e!==null)Pt=e,wt=t;else{if(t===null)throw Error(se(310));wt=t,t={memoizedState:wt.memoizedState,baseState:wt.baseState,baseQueue:wt.baseQueue,queue:wt.queue,next:null},Pt===null?ft.memoizedState=Pt=t:Pt=Pt.next=t}return Pt}function Ro(t,e){return typeof e=="function"?e(t):e}function xc(t){var e=Cn(),n=e.queue;if(n===null)throw Error(se(311));n.lastRenderedReducer=t;var i=wt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var d=c.lane;if((Mr&d)===d)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var h={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=h,o=i):l=l.next=h,ft.lanes|=d,Er|=d}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,Vn(i,e.memoizedState)||(tn=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,ft.lanes|=s,Er|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function _c(t){var e=Cn(),n=e.queue;if(n===null)throw Error(se(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);Vn(s,e.memoizedState)||(tn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function $g(){}function Yg(t,e){var n=ft,i=Cn(),r=e(),s=!Vn(i.memoizedState,r);if(s&&(i.memoizedState=r,tn=!0),i=i.queue,Mf(Zg.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Pt!==null&&Pt.memoizedState.tag&1){if(n.flags|=2048,Po(9,Kg.bind(null,n,i,r,e),void 0,null),Lt===null)throw Error(se(349));Mr&30||qg(n,e,r)}return r}function qg(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ft.updateQueue,e===null?(e={lastEffect:null,stores:null},ft.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Kg(t,e,n,i){e.value=n,e.getSnapshot=i,Qg(e)&&Jg(t)}function Zg(t,e,n){return n(function(){Qg(e)&&Jg(t)})}function Qg(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Vn(t,n)}catch{return!0}}function Jg(t){var e=gi(t,1);e!==null&&Hn(e,t,1,-1)}function ep(t){var e=jn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ro,lastRenderedState:t},e.queue=t,t=t.dispatch=U_.bind(null,ft,t),[e.memoizedState,t]}function Po(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=ft.updateQueue,e===null?(e={lastEffect:null,stores:null},ft.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function e0(){return Cn().memoizedState}function Ba(t,e,n,i){var r=jn();ft.flags|=t,r.memoizedState=Po(1|e,n,void 0,i===void 0?null:i)}function Fl(t,e,n,i){var r=Cn();i=i===void 0?null:i;var s=void 0;if(wt!==null){var o=wt.memoizedState;if(s=o.destroy,i!==null&&_f(i,o.deps)){r.memoizedState=Po(e,n,s,i);return}}ft.flags|=t,r.memoizedState=Po(1|e,n,s,i)}function tp(t,e){return Ba(8390656,8,t,e)}function Mf(t,e){return Fl(2048,8,t,e)}function t0(t,e){return Fl(4,2,t,e)}function n0(t,e){return Fl(4,4,t,e)}function i0(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function r0(t,e,n){return n=n!=null?n.concat([t]):null,Fl(4,4,i0.bind(null,e,t),n)}function Ef(){}function s0(t,e){var n=Cn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&_f(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function o0(t,e){var n=Cn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&_f(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function a0(t,e,n){return Mr&21?(Vn(n,e)||(n=fg(),ft.lanes|=n,Er|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,tn=!0),t.memoizedState=n)}function D_(t,e){var n=it;it=n!==0&&4>n?n:4,t(!0);var i=vc.transition;vc.transition={};try{t(!1),e()}finally{it=n,vc.transition=i}}function l0(){return Cn().memoizedState}function I_(t,e,n){var i=Hi(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},c0(t))u0(e,n);else if(n=Wg(t,e,n,i),n!==null){var r=qt();Hn(n,t,i,r),d0(n,e,i)}}function U_(t,e,n){var i=Hi(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(c0(t))u0(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,Vn(a,o)){var l=e.interleaved;l===null?(r.next=r,pf(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=Wg(t,e,r,i),n!==null&&(r=qt(),Hn(n,t,i,r),d0(n,e,i))}}function c0(t){var e=t.alternate;return t===ft||e!==null&&e===ft}function u0(t,e){lo=gl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function d0(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Jd(t,n)}}var vl={readContext:bn,useCallback:kt,useContext:kt,useEffect:kt,useImperativeHandle:kt,useInsertionEffect:kt,useLayoutEffect:kt,useMemo:kt,useReducer:kt,useRef:kt,useState:kt,useDebugValue:kt,useDeferredValue:kt,useTransition:kt,useMutableSource:kt,useSyncExternalStore:kt,useId:kt,unstable_isNewReconciler:!1},F_={readContext:bn,useCallback:function(t,e){return jn().memoizedState=[t,e===void 0?null:e],t},useContext:bn,useEffect:tp,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Ba(4194308,4,i0.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Ba(4194308,4,t,e)},useInsertionEffect:function(t,e){return Ba(4,2,t,e)},useMemo:function(t,e){var n=jn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=jn();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=I_.bind(null,ft,t),[i.memoizedState,t]},useRef:function(t){var e=jn();return t={current:t},e.memoizedState=t},useState:ep,useDebugValue:Ef,useDeferredValue:function(t){return jn().memoizedState=t},useTransition:function(){var t=ep(!1),e=t[0];return t=D_.bind(null,t[1]),jn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=ft,r=jn();if(ut){if(n===void 0)throw Error(se(407));n=n()}else{if(n=e(),Lt===null)throw Error(se(349));Mr&30||qg(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,tp(Zg.bind(null,i,s,t),[t]),i.flags|=2048,Po(9,Kg.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=jn(),e=Lt.identifierPrefix;if(ut){var n=ui,i=ci;n=(i&~(1<<32-Bn(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=Co++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=N_++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},k_={readContext:bn,useCallback:s0,useContext:bn,useEffect:Mf,useImperativeHandle:r0,useInsertionEffect:t0,useLayoutEffect:n0,useMemo:o0,useReducer:xc,useRef:e0,useState:function(){return xc(Ro)},useDebugValue:Ef,useDeferredValue:function(t){var e=Cn();return a0(e,wt.memoizedState,t)},useTransition:function(){var t=xc(Ro)[0],e=Cn().memoizedState;return[t,e]},useMutableSource:$g,useSyncExternalStore:Yg,useId:l0,unstable_isNewReconciler:!1},O_={readContext:bn,useCallback:s0,useContext:bn,useEffect:Mf,useImperativeHandle:r0,useInsertionEffect:t0,useLayoutEffect:n0,useMemo:o0,useReducer:_c,useRef:e0,useState:function(){return _c(Ro)},useDebugValue:Ef,useDeferredValue:function(t){var e=Cn();return wt===null?e.memoizedState=t:a0(e,wt.memoizedState,t)},useTransition:function(){var t=_c(Ro)[0],e=Cn().memoizedState;return[t,e]},useMutableSource:$g,useSyncExternalStore:Yg,useId:l0,unstable_isNewReconciler:!1};function In(t,e){if(t&&t.defaultProps){e=ht({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Ou(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:ht({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var kl={isMounted:function(t){return(t=t._reactInternals)?Rr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=qt(),r=Hi(t),s=hi(i,r);s.payload=e,n!=null&&(s.callback=n),e=zi(t,s,r),e!==null&&(Hn(e,t,r,i),Oa(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=qt(),r=Hi(t),s=hi(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=zi(t,s,r),e!==null&&(Hn(e,t,r,i),Oa(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=qt(),i=Hi(t),r=hi(n,i);r.tag=2,e!=null&&(r.callback=e),e=zi(t,r,i),e!==null&&(Hn(e,t,i,n),Oa(e,t,i))}};function np(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!Mo(n,i)||!Mo(r,s):!0}function f0(t,e,n){var i=!1,r=Xi,s=e.contextType;return typeof s=="object"&&s!==null?s=bn(s):(r=rn(e)?yr:Gt.current,i=e.contextTypes,s=(i=i!=null)?vs(t,r):Xi),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=kl,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function ip(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&kl.enqueueReplaceState(e,e.state,null)}function zu(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},mf(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=bn(s):(s=rn(e)?yr:Gt.current,r.context=vs(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Ou(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&kl.enqueueReplaceState(r,r.state,null),pl(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Ss(t,e){try{var n="",i=e;do n+=fx(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function yc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Bu(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var z_=typeof WeakMap=="function"?WeakMap:Map;function h0(t,e,n){n=hi(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){_l||(_l=!0,Ku=i),Bu(t,e)},n}function p0(t,e,n){n=hi(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){Bu(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Bu(t,e),typeof i!="function"&&(Bi===null?Bi=new Set([this]):Bi.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function rp(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new z_;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=J_.bind(null,t,e,n),e.then(t,t))}function sp(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function op(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=hi(-1,1),e.tag=2,zi(n,e,1))),n.lanes|=1),t)}var B_=_i.ReactCurrentOwner,tn=!1;function $t(t,e,n,i){e.child=t===null?Gg(e,null,n,i):_s(e,t.child,n,i)}function ap(t,e,n,i,r){n=n.render;var s=e.ref;return ds(e,r),i=yf(t,e,n,i,s,r),n=Sf(),t!==null&&!tn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,vi(t,e,r)):(ut&&n&&lf(e),e.flags|=1,$t(t,e,i,r),e.child)}function lp(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!Lf(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,m0(t,e,s,i,r)):(t=Wa(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Mo,n(o,i)&&t.ref===e.ref)return vi(t,e,r)}return e.flags|=1,t=Vi(s,i),t.ref=e.ref,t.return=e,e.child=t}function m0(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(Mo(s,i)&&t.ref===e.ref)if(tn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(tn=!0);else return e.lanes=t.lanes,vi(t,e,r)}return Hu(t,e,n,i,r)}function g0(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},st(ss,fn),fn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,st(ss,fn),fn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,st(ss,fn),fn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,st(ss,fn),fn|=i;return $t(t,e,r,n),e.child}function v0(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Hu(t,e,n,i,r){var s=rn(n)?yr:Gt.current;return s=vs(e,s),ds(e,r),n=yf(t,e,n,i,s,r),i=Sf(),t!==null&&!tn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,vi(t,e,r)):(ut&&i&&lf(e),e.flags|=1,$t(t,e,n,r),e.child)}function cp(t,e,n,i,r){if(rn(n)){var s=!0;cl(e)}else s=!1;if(ds(e,r),e.stateNode===null)Ha(t,e),f0(e,n,i),zu(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=bn(c):(c=rn(n)?yr:Gt.current,c=vs(e,c));var d=n.getDerivedStateFromProps,h=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&ip(e,o,i,c),Ri=!1;var f=e.memoizedState;o.state=f,pl(e,i,o,r),l=e.memoizedState,a!==i||f!==l||nn.current||Ri?(typeof d=="function"&&(Ou(e,n,d,i),l=e.memoizedState),(a=Ri||np(e,n,a,i,f,l,c))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,jg(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:In(e.type,a),o.props=c,h=e.pendingProps,f=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=bn(l):(l=rn(n)?yr:Gt.current,l=vs(e,l));var m=n.getDerivedStateFromProps;(d=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||f!==l)&&ip(e,o,i,l),Ri=!1,f=e.memoizedState,o.state=f,pl(e,i,o,r);var y=e.memoizedState;a!==h||f!==y||nn.current||Ri?(typeof m=="function"&&(Ou(e,n,m,i),y=e.memoizedState),(c=Ri||np(e,n,c,i,f,y,l)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,y,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,y,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=y),o.props=i,o.state=y,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),i=!1)}return Vu(t,e,n,i,s,r)}function Vu(t,e,n,i,r,s){v0(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&Yh(e,n,!1),vi(t,e,s);i=e.stateNode,B_.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=_s(e,t.child,null,s),e.child=_s(e,null,a,s)):$t(t,e,a,s),e.memoizedState=i.state,r&&Yh(e,n,!0),e.child}function x0(t){var e=t.stateNode;e.pendingContext?$h(t,e.pendingContext,e.pendingContext!==e.context):e.context&&$h(t,e.context,!1),gf(t,e.containerInfo)}function up(t,e,n,i,r){return xs(),uf(r),e.flags|=256,$t(t,e,n,i),e.child}var Gu={dehydrated:null,treeContext:null,retryLane:0};function Wu(t){return{baseLanes:t,cachePool:null,transitions:null}}function _0(t,e,n){var i=e.pendingProps,r=dt.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),st(dt,r&1),t===null)return Fu(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Bl(o,i,0,null),t=_r(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Wu(n),e.memoizedState=Gu,t):wf(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return H_(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Vi(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=Vi(a,s):(s=_r(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?Wu(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Gu,i}return s=t.child,t=s.sibling,i=Vi(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function wf(t,e){return e=Bl({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function aa(t,e,n,i){return i!==null&&uf(i),_s(e,t.child,null,n),t=wf(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function H_(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=yc(Error(se(422))),aa(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Bl({mode:"visible",children:i.children},r,0,null),s=_r(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&_s(e,t.child,null,o),e.child.memoizedState=Wu(o),e.memoizedState=Gu,s);if(!(e.mode&1))return aa(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(se(419)),i=yc(s,i,void 0),aa(t,e,o,i)}if(a=(o&t.childLanes)!==0,tn||a){if(i=Lt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,gi(t,r),Hn(i,t,r,-1))}return Pf(),i=yc(Error(se(421))),aa(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=ey.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,hn=Oi(r.nextSibling),pn=e,ut=!0,Fn=null,t!==null&&(yn[Sn++]=ci,yn[Sn++]=ui,yn[Sn++]=Sr,ci=t.id,ui=t.overflow,Sr=e),e=wf(e,i.children),e.flags|=4096,e)}function dp(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),ku(t.return,e,n)}function Sc(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function y0(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if($t(t,e,i.children,n),i=dt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&dp(t,n,e);else if(t.tag===19)dp(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(st(dt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&ml(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Sc(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&ml(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Sc(e,!0,n,null,s);break;case"together":Sc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Ha(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function vi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Er|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(se(153));if(e.child!==null){for(t=e.child,n=Vi(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Vi(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function V_(t,e,n){switch(e.tag){case 3:x0(e),xs();break;case 5:Xg(e);break;case 1:rn(e.type)&&cl(e);break;case 4:gf(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;st(fl,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(st(dt,dt.current&1),e.flags|=128,null):n&e.child.childLanes?_0(t,e,n):(st(dt,dt.current&1),t=vi(t,e,n),t!==null?t.sibling:null);st(dt,dt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return y0(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),st(dt,dt.current),i)break;return null;case 22:case 23:return e.lanes=0,g0(t,e,n)}return vi(t,e,n)}var S0,ju,M0,E0;S0=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};ju=function(){};M0=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,pr(Kn.current);var s=null;switch(n){case"input":r=hu(t,r),i=hu(t,i),s=[];break;case"select":r=ht({},r,{value:void 0}),i=ht({},i,{value:void 0}),s=[];break;case"textarea":r=gu(t,r),i=gu(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=al)}xu(n,i);var o;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(mo.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(mo.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&at("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};E0=function(t,e,n,i){n!==i&&(e.flags|=4)};function Ws(t,e){if(!ut)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Ot(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function G_(t,e,n){var i=e.pendingProps;switch(cf(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ot(e),null;case 1:return rn(e.type)&&ll(),Ot(e),null;case 3:return i=e.stateNode,ys(),ct(nn),ct(Gt),xf(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(sa(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Fn!==null&&(Ju(Fn),Fn=null))),ju(t,e),Ot(e),null;case 5:vf(e);var r=pr(bo.current);if(n=e.type,t!==null&&e.stateNode!=null)M0(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(se(166));return Ot(e),null}if(t=pr(Kn.current),sa(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[Yn]=e,i[To]=s,t=(e.mode&1)!==0,n){case"dialog":at("cancel",i),at("close",i);break;case"iframe":case"object":case"embed":at("load",i);break;case"video":case"audio":for(r=0;r<to.length;r++)at(to[r],i);break;case"source":at("error",i);break;case"img":case"image":case"link":at("error",i),at("load",i);break;case"details":at("toggle",i);break;case"input":yh(i,s),at("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},at("invalid",i);break;case"textarea":Mh(i,s),at("invalid",i)}xu(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&ra(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&ra(i.textContent,a,t),r=["children",""+a]):mo.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&at("scroll",i)}switch(n){case"input":Ko(i),Sh(i,s,!0);break;case"textarea":Ko(i),Eh(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=al)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Zm(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[Yn]=e,t[To]=i,S0(t,e,!1,!1),e.stateNode=t;e:{switch(o=_u(n,i),n){case"dialog":at("cancel",t),at("close",t),r=i;break;case"iframe":case"object":case"embed":at("load",t),r=i;break;case"video":case"audio":for(r=0;r<to.length;r++)at(to[r],t);r=i;break;case"source":at("error",t),r=i;break;case"img":case"image":case"link":at("error",t),at("load",t),r=i;break;case"details":at("toggle",t),r=i;break;case"input":yh(t,i),r=hu(t,i),at("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=ht({},i,{value:void 0}),at("invalid",t);break;case"textarea":Mh(t,i),r=gu(t,i),at("invalid",t);break;default:r=i}xu(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?eg(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Qm(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&go(t,l):typeof l=="number"&&go(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(mo.hasOwnProperty(s)?l!=null&&s==="onScroll"&&at("scroll",t):l!=null&&$d(t,s,l,o))}switch(n){case"input":Ko(t),Sh(t,i,!1);break;case"textarea":Ko(t),Eh(t);break;case"option":i.value!=null&&t.setAttribute("value",""+ji(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?as(t,!!i.multiple,s,!1):i.defaultValue!=null&&as(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=al)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Ot(e),null;case 6:if(t&&e.stateNode!=null)E0(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(se(166));if(n=pr(bo.current),pr(Kn.current),sa(e)){if(i=e.stateNode,n=e.memoizedProps,i[Yn]=e,(s=i.nodeValue!==n)&&(t=pn,t!==null))switch(t.tag){case 3:ra(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ra(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[Yn]=e,e.stateNode=i}return Ot(e),null;case 13:if(ct(dt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ut&&hn!==null&&e.mode&1&&!(e.flags&128))Hg(),xs(),e.flags|=98560,s=!1;else if(s=sa(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(se(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(se(317));s[Yn]=e}else xs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Ot(e),s=!1}else Fn!==null&&(Ju(Fn),Fn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||dt.current&1?Tt===0&&(Tt=3):Pf())),e.updateQueue!==null&&(e.flags|=4),Ot(e),null);case 4:return ys(),ju(t,e),t===null&&Eo(e.stateNode.containerInfo),Ot(e),null;case 10:return hf(e.type._context),Ot(e),null;case 17:return rn(e.type)&&ll(),Ot(e),null;case 19:if(ct(dt),s=e.memoizedState,s===null)return Ot(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)Ws(s,!1);else{if(Tt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=ml(t),o!==null){for(e.flags|=128,Ws(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return st(dt,dt.current&1|2),e.child}t=t.sibling}s.tail!==null&&_t()>Ms&&(e.flags|=128,i=!0,Ws(s,!1),e.lanes=4194304)}else{if(!i)if(t=ml(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Ws(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ut)return Ot(e),null}else 2*_t()-s.renderingStartTime>Ms&&n!==1073741824&&(e.flags|=128,i=!0,Ws(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=_t(),e.sibling=null,n=dt.current,st(dt,i?n&1|2:n&1),e):(Ot(e),null);case 22:case 23:return Rf(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?fn&1073741824&&(Ot(e),e.subtreeFlags&6&&(e.flags|=8192)):Ot(e),null;case 24:return null;case 25:return null}throw Error(se(156,e.tag))}function W_(t,e){switch(cf(e),e.tag){case 1:return rn(e.type)&&ll(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return ys(),ct(nn),ct(Gt),xf(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return vf(e),null;case 13:if(ct(dt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(se(340));xs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ct(dt),null;case 4:return ys(),null;case 10:return hf(e.type._context),null;case 22:case 23:return Rf(),null;case 24:return null;default:return null}}var la=!1,Vt=!1,j_=typeof WeakSet=="function"?WeakSet:Set,ve=null;function rs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){mt(t,e,i)}else n.current=null}function Xu(t,e,n){try{n()}catch(i){mt(t,e,i)}}var fp=!1;function X_(t,e){if(Ru=rl,t=Cg(),af(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,d=0,h=t,f=null;t:for(;;){for(var m;h!==n||r!==0&&h.nodeType!==3||(a=o+r),h!==s||i!==0&&h.nodeType!==3||(l=o+i),h.nodeType===3&&(o+=h.nodeValue.length),(m=h.firstChild)!==null;)f=h,h=m;for(;;){if(h===t)break t;if(f===n&&++c===r&&(a=o),f===s&&++d===i&&(l=o),(m=h.nextSibling)!==null)break;h=f,f=h.parentNode}h=m}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Pu={focusedElem:t,selectionRange:n},rl=!1,ve=e;ve!==null;)if(e=ve,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,ve=t;else for(;ve!==null;){e=ve;try{var y=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var S=y.memoizedProps,p=y.memoizedState,u=e.stateNode,v=u.getSnapshotBeforeUpdate(e.elementType===e.type?S:In(e.type,S),p);u.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var g=e.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(se(163))}}catch(M){mt(e,e.return,M)}if(t=e.sibling,t!==null){t.return=e.return,ve=t;break}ve=e.return}return y=fp,fp=!1,y}function co(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&Xu(e,n,s)}r=r.next}while(r!==i)}}function Ol(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function $u(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function w0(t){var e=t.alternate;e!==null&&(t.alternate=null,w0(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Yn],delete e[To],delete e[Du],delete e[C_],delete e[R_])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function T0(t){return t.tag===5||t.tag===3||t.tag===4}function hp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||T0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Yu(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=al));else if(i!==4&&(t=t.child,t!==null))for(Yu(t,e,n),t=t.sibling;t!==null;)Yu(t,e,n),t=t.sibling}function qu(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(qu(t,e,n),t=t.sibling;t!==null;)qu(t,e,n),t=t.sibling}var It=null,Un=!1;function Si(t,e,n){for(n=n.child;n!==null;)A0(t,e,n),n=n.sibling}function A0(t,e,n){if(qn&&typeof qn.onCommitFiberUnmount=="function")try{qn.onCommitFiberUnmount(Pl,n)}catch{}switch(n.tag){case 5:Vt||rs(n,e);case 6:var i=It,r=Un;It=null,Si(t,e,n),It=i,Un=r,It!==null&&(Un?(t=It,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):It.removeChild(n.stateNode));break;case 18:It!==null&&(Un?(t=It,n=n.stateNode,t.nodeType===8?pc(t.parentNode,n):t.nodeType===1&&pc(t,n),yo(t)):pc(It,n.stateNode));break;case 4:i=It,r=Un,It=n.stateNode.containerInfo,Un=!0,Si(t,e,n),It=i,Un=r;break;case 0:case 11:case 14:case 15:if(!Vt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Xu(n,e,o),r=r.next}while(r!==i)}Si(t,e,n);break;case 1:if(!Vt&&(rs(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){mt(n,e,a)}Si(t,e,n);break;case 21:Si(t,e,n);break;case 22:n.mode&1?(Vt=(i=Vt)||n.memoizedState!==null,Si(t,e,n),Vt=i):Si(t,e,n);break;default:Si(t,e,n)}}function pp(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new j_),e.forEach(function(i){var r=ty.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Pn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:It=a.stateNode,Un=!1;break e;case 3:It=a.stateNode.containerInfo,Un=!0;break e;case 4:It=a.stateNode.containerInfo,Un=!0;break e}a=a.return}if(It===null)throw Error(se(160));A0(s,o,r),It=null,Un=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){mt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)b0(e,t),e=e.sibling}function b0(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Pn(e,t),Wn(t),i&4){try{co(3,t,t.return),Ol(3,t)}catch(S){mt(t,t.return,S)}try{co(5,t,t.return)}catch(S){mt(t,t.return,S)}}break;case 1:Pn(e,t),Wn(t),i&512&&n!==null&&rs(n,n.return);break;case 5:if(Pn(e,t),Wn(t),i&512&&n!==null&&rs(n,n.return),t.flags&32){var r=t.stateNode;try{go(r,"")}catch(S){mt(t,t.return,S)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&qm(r,s),_u(a,o);var c=_u(a,s);for(o=0;o<l.length;o+=2){var d=l[o],h=l[o+1];d==="style"?eg(r,h):d==="dangerouslySetInnerHTML"?Qm(r,h):d==="children"?go(r,h):$d(r,d,h,c)}switch(a){case"input":pu(r,s);break;case"textarea":Km(r,s);break;case"select":var f=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var m=s.value;m!=null?as(r,!!s.multiple,m,!1):f!==!!s.multiple&&(s.defaultValue!=null?as(r,!!s.multiple,s.defaultValue,!0):as(r,!!s.multiple,s.multiple?[]:"",!1))}r[To]=s}catch(S){mt(t,t.return,S)}}break;case 6:if(Pn(e,t),Wn(t),i&4){if(t.stateNode===null)throw Error(se(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(S){mt(t,t.return,S)}}break;case 3:if(Pn(e,t),Wn(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{yo(e.containerInfo)}catch(S){mt(t,t.return,S)}break;case 4:Pn(e,t),Wn(t);break;case 13:Pn(e,t),Wn(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(bf=_t())),i&4&&pp(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(Vt=(c=Vt)||d,Pn(e,t),Vt=c):Pn(e,t),Wn(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!d&&t.mode&1)for(ve=t,d=t.child;d!==null;){for(h=ve=d;ve!==null;){switch(f=ve,m=f.child,f.tag){case 0:case 11:case 14:case 15:co(4,f,f.return);break;case 1:rs(f,f.return);var y=f.stateNode;if(typeof y.componentWillUnmount=="function"){i=f,n=f.return;try{e=i,y.props=e.memoizedProps,y.state=e.memoizedState,y.componentWillUnmount()}catch(S){mt(i,n,S)}}break;case 5:rs(f,f.return);break;case 22:if(f.memoizedState!==null){gp(h);continue}}m!==null?(m.return=f,ve=m):gp(h)}d=d.sibling}e:for(d=null,h=t;;){if(h.tag===5){if(d===null){d=h;try{r=h.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Jm("display",o))}catch(S){mt(t,t.return,S)}}}else if(h.tag===6){if(d===null)try{h.stateNode.nodeValue=c?"":h.memoizedProps}catch(S){mt(t,t.return,S)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;d===h&&(d=null),h=h.return}d===h&&(d=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Pn(e,t),Wn(t),i&4&&pp(t);break;case 21:break;default:Pn(e,t),Wn(t)}}function Wn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(T0(n)){var i=n;break e}n=n.return}throw Error(se(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(go(r,""),i.flags&=-33);var s=hp(t);qu(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=hp(t);Yu(t,a,o);break;default:throw Error(se(161))}}catch(l){mt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function $_(t,e,n){ve=t,C0(t)}function C0(t,e,n){for(var i=(t.mode&1)!==0;ve!==null;){var r=ve,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||la;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||Vt;a=la;var c=Vt;if(la=o,(Vt=l)&&!c)for(ve=r;ve!==null;)o=ve,l=o.child,o.tag===22&&o.memoizedState!==null?vp(r):l!==null?(l.return=o,ve=l):vp(r);for(;s!==null;)ve=s,C0(s),s=s.sibling;ve=r,la=a,Vt=c}mp(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,ve=s):mp(t)}}function mp(t){for(;ve!==null;){var e=ve;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Vt||Ol(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Vt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:In(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Jh(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Jh(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var h=d.dehydrated;h!==null&&yo(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(se(163))}Vt||e.flags&512&&$u(e)}catch(f){mt(e,e.return,f)}}if(e===t){ve=null;break}if(n=e.sibling,n!==null){n.return=e.return,ve=n;break}ve=e.return}}function gp(t){for(;ve!==null;){var e=ve;if(e===t){ve=null;break}var n=e.sibling;if(n!==null){n.return=e.return,ve=n;break}ve=e.return}}function vp(t){for(;ve!==null;){var e=ve;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Ol(4,e)}catch(l){mt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){mt(e,r,l)}}var s=e.return;try{$u(e)}catch(l){mt(e,s,l)}break;case 5:var o=e.return;try{$u(e)}catch(l){mt(e,o,l)}}}catch(l){mt(e,e.return,l)}if(e===t){ve=null;break}var a=e.sibling;if(a!==null){a.return=e.return,ve=a;break}ve=e.return}}var Y_=Math.ceil,xl=_i.ReactCurrentDispatcher,Tf=_i.ReactCurrentOwner,An=_i.ReactCurrentBatchConfig,qe=0,Lt=null,Et=null,Ut=0,fn=0,ss=Ki(0),Tt=0,Lo=null,Er=0,zl=0,Af=0,uo=null,en=null,bf=0,Ms=1/0,oi=null,_l=!1,Ku=null,Bi=null,ca=!1,Ii=null,yl=0,fo=0,Zu=null,Va=-1,Ga=0;function qt(){return qe&6?_t():Va!==-1?Va:Va=_t()}function Hi(t){return t.mode&1?qe&2&&Ut!==0?Ut&-Ut:L_.transition!==null?(Ga===0&&(Ga=fg()),Ga):(t=it,t!==0||(t=window.event,t=t===void 0?16:_g(t.type)),t):1}function Hn(t,e,n,i){if(50<fo)throw fo=0,Zu=null,Error(se(185));zo(t,n,i),(!(qe&2)||t!==Lt)&&(t===Lt&&(!(qe&2)&&(zl|=n),Tt===4&&Li(t,Ut)),sn(t,i),n===1&&qe===0&&!(e.mode&1)&&(Ms=_t()+500,Ul&&Zi()))}function sn(t,e){var n=t.callbackNode;Lx(t,e);var i=il(t,t===Lt?Ut:0);if(i===0)n!==null&&Ah(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Ah(n),e===1)t.tag===0?P_(xp.bind(null,t)):Og(xp.bind(null,t)),A_(function(){!(qe&6)&&Zi()}),n=null;else{switch(hg(i)){case 1:n=Qd;break;case 4:n=ug;break;case 16:n=nl;break;case 536870912:n=dg;break;default:n=nl}n=F0(n,R0.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function R0(t,e){if(Va=-1,Ga=0,qe&6)throw Error(se(327));var n=t.callbackNode;if(fs()&&t.callbackNode!==n)return null;var i=il(t,t===Lt?Ut:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Sl(t,i);else{e=i;var r=qe;qe|=2;var s=L0();(Lt!==t||Ut!==e)&&(oi=null,Ms=_t()+500,xr(t,e));do try{Z_();break}catch(a){P0(t,a)}while(!0);ff(),xl.current=s,qe=r,Et!==null?e=0:(Lt=null,Ut=0,e=Tt)}if(e!==0){if(e===2&&(r=wu(t),r!==0&&(i=r,e=Qu(t,r))),e===1)throw n=Lo,xr(t,0),Li(t,i),sn(t,_t()),n;if(e===6)Li(t,i);else{if(r=t.current.alternate,!(i&30)&&!q_(r)&&(e=Sl(t,i),e===2&&(s=wu(t),s!==0&&(i=s,e=Qu(t,s))),e===1))throw n=Lo,xr(t,0),Li(t,i),sn(t,_t()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(se(345));case 2:ar(t,en,oi);break;case 3:if(Li(t,i),(i&130023424)===i&&(e=bf+500-_t(),10<e)){if(il(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){qt(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Nu(ar.bind(null,t,en,oi),e);break}ar(t,en,oi);break;case 4:if(Li(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-Bn(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=_t()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*Y_(i/1960))-i,10<i){t.timeoutHandle=Nu(ar.bind(null,t,en,oi),i);break}ar(t,en,oi);break;case 5:ar(t,en,oi);break;default:throw Error(se(329))}}}return sn(t,_t()),t.callbackNode===n?R0.bind(null,t):null}function Qu(t,e){var n=uo;return t.current.memoizedState.isDehydrated&&(xr(t,e).flags|=256),t=Sl(t,e),t!==2&&(e=en,en=n,e!==null&&Ju(e)),t}function Ju(t){en===null?en=t:en.push.apply(en,t)}function q_(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!Vn(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Li(t,e){for(e&=~Af,e&=~zl,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Bn(e),i=1<<n;t[n]=-1,e&=~i}}function xp(t){if(qe&6)throw Error(se(327));fs();var e=il(t,0);if(!(e&1))return sn(t,_t()),null;var n=Sl(t,e);if(t.tag!==0&&n===2){var i=wu(t);i!==0&&(e=i,n=Qu(t,i))}if(n===1)throw n=Lo,xr(t,0),Li(t,e),sn(t,_t()),n;if(n===6)throw Error(se(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,ar(t,en,oi),sn(t,_t()),null}function Cf(t,e){var n=qe;qe|=1;try{return t(e)}finally{qe=n,qe===0&&(Ms=_t()+500,Ul&&Zi())}}function wr(t){Ii!==null&&Ii.tag===0&&!(qe&6)&&fs();var e=qe;qe|=1;var n=An.transition,i=it;try{if(An.transition=null,it=1,t)return t()}finally{it=i,An.transition=n,qe=e,!(qe&6)&&Zi()}}function Rf(){fn=ss.current,ct(ss)}function xr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,T_(n)),Et!==null)for(n=Et.return;n!==null;){var i=n;switch(cf(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&ll();break;case 3:ys(),ct(nn),ct(Gt),xf();break;case 5:vf(i);break;case 4:ys();break;case 13:ct(dt);break;case 19:ct(dt);break;case 10:hf(i.type._context);break;case 22:case 23:Rf()}n=n.return}if(Lt=t,Et=t=Vi(t.current,null),Ut=fn=e,Tt=0,Lo=null,Af=zl=Er=0,en=uo=null,hr!==null){for(e=0;e<hr.length;e++)if(n=hr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}hr=null}return t}function P0(t,e){do{var n=Et;try{if(ff(),za.current=vl,gl){for(var i=ft.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}gl=!1}if(Mr=0,Pt=wt=ft=null,lo=!1,Co=0,Tf.current=null,n===null||n.return===null){Tt=1,Lo=e,Et=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Ut,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,d=a,h=d.tag;if(!(d.mode&1)&&(h===0||h===11||h===15)){var f=d.alternate;f?(d.updateQueue=f.updateQueue,d.memoizedState=f.memoizedState,d.lanes=f.lanes):(d.updateQueue=null,d.memoizedState=null)}var m=sp(o);if(m!==null){m.flags&=-257,op(m,o,a,s,e),m.mode&1&&rp(s,c,e),e=m,l=c;var y=e.updateQueue;if(y===null){var S=new Set;S.add(l),e.updateQueue=S}else y.add(l);break e}else{if(!(e&1)){rp(s,c,e),Pf();break e}l=Error(se(426))}}else if(ut&&a.mode&1){var p=sp(o);if(p!==null){!(p.flags&65536)&&(p.flags|=256),op(p,o,a,s,e),uf(Ss(l,a));break e}}s=l=Ss(l,a),Tt!==4&&(Tt=2),uo===null?uo=[s]:uo.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var u=h0(s,l,e);Qh(s,u);break e;case 1:a=l;var v=s.type,g=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(Bi===null||!Bi.has(g)))){s.flags|=65536,e&=-e,s.lanes|=e;var M=p0(s,a,e);Qh(s,M);break e}}s=s.return}while(s!==null)}D0(n)}catch(P){e=P,Et===n&&n!==null&&(Et=n=n.return);continue}break}while(!0)}function L0(){var t=xl.current;return xl.current=vl,t===null?vl:t}function Pf(){(Tt===0||Tt===3||Tt===2)&&(Tt=4),Lt===null||!(Er&268435455)&&!(zl&268435455)||Li(Lt,Ut)}function Sl(t,e){var n=qe;qe|=2;var i=L0();(Lt!==t||Ut!==e)&&(oi=null,xr(t,e));do try{K_();break}catch(r){P0(t,r)}while(!0);if(ff(),qe=n,xl.current=i,Et!==null)throw Error(se(261));return Lt=null,Ut=0,Tt}function K_(){for(;Et!==null;)N0(Et)}function Z_(){for(;Et!==null&&!Mx();)N0(Et)}function N0(t){var e=U0(t.alternate,t,fn);t.memoizedProps=t.pendingProps,e===null?D0(t):Et=e,Tf.current=null}function D0(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=W_(n,e),n!==null){n.flags&=32767,Et=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Tt=6,Et=null;return}}else if(n=G_(n,e,fn),n!==null){Et=n;return}if(e=e.sibling,e!==null){Et=e;return}Et=e=t}while(e!==null);Tt===0&&(Tt=5)}function ar(t,e,n){var i=it,r=An.transition;try{An.transition=null,it=1,Q_(t,e,n,i)}finally{An.transition=r,it=i}return null}function Q_(t,e,n,i){do fs();while(Ii!==null);if(qe&6)throw Error(se(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(se(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(Nx(t,s),t===Lt&&(Et=Lt=null,Ut=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ca||(ca=!0,F0(nl,function(){return fs(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=An.transition,An.transition=null;var o=it;it=1;var a=qe;qe|=4,Tf.current=null,X_(t,n),b0(n,t),x_(Pu),rl=!!Ru,Pu=Ru=null,t.current=n,$_(n),Ex(),qe=a,it=o,An.transition=s}else t.current=n;if(ca&&(ca=!1,Ii=t,yl=r),s=t.pendingLanes,s===0&&(Bi=null),Ax(n.stateNode),sn(t,_t()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(_l)throw _l=!1,t=Ku,Ku=null,t;return yl&1&&t.tag!==0&&fs(),s=t.pendingLanes,s&1?t===Zu?fo++:(fo=0,Zu=t):fo=0,Zi(),null}function fs(){if(Ii!==null){var t=hg(yl),e=An.transition,n=it;try{if(An.transition=null,it=16>t?16:t,Ii===null)var i=!1;else{if(t=Ii,Ii=null,yl=0,qe&6)throw Error(se(331));var r=qe;for(qe|=4,ve=t.current;ve!==null;){var s=ve,o=s.child;if(ve.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(ve=c;ve!==null;){var d=ve;switch(d.tag){case 0:case 11:case 15:co(8,d,s)}var h=d.child;if(h!==null)h.return=d,ve=h;else for(;ve!==null;){d=ve;var f=d.sibling,m=d.return;if(w0(d),d===c){ve=null;break}if(f!==null){f.return=m,ve=f;break}ve=m}}}var y=s.alternate;if(y!==null){var S=y.child;if(S!==null){y.child=null;do{var p=S.sibling;S.sibling=null,S=p}while(S!==null)}}ve=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,ve=o;else e:for(;ve!==null;){if(s=ve,s.flags&2048)switch(s.tag){case 0:case 11:case 15:co(9,s,s.return)}var u=s.sibling;if(u!==null){u.return=s.return,ve=u;break e}ve=s.return}}var v=t.current;for(ve=v;ve!==null;){o=ve;var g=o.child;if(o.subtreeFlags&2064&&g!==null)g.return=o,ve=g;else e:for(o=v;ve!==null;){if(a=ve,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Ol(9,a)}}catch(P){mt(a,a.return,P)}if(a===o){ve=null;break e}var M=a.sibling;if(M!==null){M.return=a.return,ve=M;break e}ve=a.return}}if(qe=r,Zi(),qn&&typeof qn.onPostCommitFiberRoot=="function")try{qn.onPostCommitFiberRoot(Pl,t)}catch{}i=!0}return i}finally{it=n,An.transition=e}}return!1}function _p(t,e,n){e=Ss(n,e),e=h0(t,e,1),t=zi(t,e,1),e=qt(),t!==null&&(zo(t,1,e),sn(t,e))}function mt(t,e,n){if(t.tag===3)_p(t,t,n);else for(;e!==null;){if(e.tag===3){_p(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Bi===null||!Bi.has(i))){t=Ss(n,t),t=p0(e,t,1),e=zi(e,t,1),t=qt(),e!==null&&(zo(e,1,t),sn(e,t));break}}e=e.return}}function J_(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=qt(),t.pingedLanes|=t.suspendedLanes&n,Lt===t&&(Ut&n)===n&&(Tt===4||Tt===3&&(Ut&130023424)===Ut&&500>_t()-bf?xr(t,0):Af|=n),sn(t,e)}function I0(t,e){e===0&&(t.mode&1?(e=Jo,Jo<<=1,!(Jo&130023424)&&(Jo=4194304)):e=1);var n=qt();t=gi(t,e),t!==null&&(zo(t,e,n),sn(t,n))}function ey(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),I0(t,n)}function ty(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(se(314))}i!==null&&i.delete(e),I0(t,n)}var U0;U0=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||nn.current)tn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return tn=!1,V_(t,e,n);tn=!!(t.flags&131072)}else tn=!1,ut&&e.flags&1048576&&zg(e,dl,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Ha(t,e),t=e.pendingProps;var r=vs(e,Gt.current);ds(e,n),r=yf(null,e,i,t,r,n);var s=Sf();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,rn(i)?(s=!0,cl(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,mf(e),r.updater=kl,e.stateNode=r,r._reactInternals=e,zu(e,i,t,n),e=Vu(null,e,i,!0,s,n)):(e.tag=0,ut&&s&&lf(e),$t(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Ha(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=iy(i),t=In(i,t),r){case 0:e=Hu(null,e,i,t,n);break e;case 1:e=cp(null,e,i,t,n);break e;case 11:e=ap(null,e,i,t,n);break e;case 14:e=lp(null,e,i,In(i.type,t),n);break e}throw Error(se(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:In(i,r),Hu(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:In(i,r),cp(t,e,i,r,n);case 3:e:{if(x0(e),t===null)throw Error(se(387));i=e.pendingProps,s=e.memoizedState,r=s.element,jg(t,e),pl(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Ss(Error(se(423)),e),e=up(t,e,i,n,r);break e}else if(i!==r){r=Ss(Error(se(424)),e),e=up(t,e,i,n,r);break e}else for(hn=Oi(e.stateNode.containerInfo.firstChild),pn=e,ut=!0,Fn=null,n=Gg(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(xs(),i===r){e=vi(t,e,n);break e}$t(t,e,i,n)}e=e.child}return e;case 5:return Xg(e),t===null&&Fu(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,Lu(i,r)?o=null:s!==null&&Lu(i,s)&&(e.flags|=32),v0(t,e),$t(t,e,o,n),e.child;case 6:return t===null&&Fu(e),null;case 13:return _0(t,e,n);case 4:return gf(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=_s(e,null,i,n):$t(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:In(i,r),ap(t,e,i,r,n);case 7:return $t(t,e,e.pendingProps,n),e.child;case 8:return $t(t,e,e.pendingProps.children,n),e.child;case 12:return $t(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,st(fl,i._currentValue),i._currentValue=o,s!==null)if(Vn(s.value,o)){if(s.children===r.children&&!nn.current){e=vi(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=hi(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?l.next=l:(l.next=d.next,d.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),ku(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(se(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),ku(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}$t(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,ds(e,n),r=bn(r),i=i(r),e.flags|=1,$t(t,e,i,n),e.child;case 14:return i=e.type,r=In(i,e.pendingProps),r=In(i.type,r),lp(t,e,i,r,n);case 15:return m0(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:In(i,r),Ha(t,e),e.tag=1,rn(i)?(t=!0,cl(e)):t=!1,ds(e,n),f0(e,i,r),zu(e,i,r,n),Vu(null,e,i,!0,t,n);case 19:return y0(t,e,n);case 22:return g0(t,e,n)}throw Error(se(156,e.tag))};function F0(t,e){return cg(t,e)}function ny(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function wn(t,e,n,i){return new ny(t,e,n,i)}function Lf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function iy(t){if(typeof t=="function")return Lf(t)?1:0;if(t!=null){if(t=t.$$typeof,t===qd)return 11;if(t===Kd)return 14}return 2}function Vi(t,e){var n=t.alternate;return n===null?(n=wn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Wa(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")Lf(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case qr:return _r(n.children,r,s,e);case Yd:o=8,r|=8;break;case cu:return t=wn(12,n,e,r|2),t.elementType=cu,t.lanes=s,t;case uu:return t=wn(13,n,e,r),t.elementType=uu,t.lanes=s,t;case du:return t=wn(19,n,e,r),t.elementType=du,t.lanes=s,t;case Xm:return Bl(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Wm:o=10;break e;case jm:o=9;break e;case qd:o=11;break e;case Kd:o=14;break e;case Ci:o=16,i=null;break e}throw Error(se(130,t==null?t:typeof t,""))}return e=wn(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function _r(t,e,n,i){return t=wn(7,t,i,e),t.lanes=n,t}function Bl(t,e,n,i){return t=wn(22,t,i,e),t.elementType=Xm,t.lanes=n,t.stateNode={isHidden:!1},t}function Mc(t,e,n){return t=wn(6,t,null,e),t.lanes=n,t}function Ec(t,e,n){return e=wn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function ry(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ic(0),this.expirationTimes=ic(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ic(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Nf(t,e,n,i,r,s,o,a,l){return t=new ry(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=wn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},mf(s),t}function sy(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Yr,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function k0(t){if(!t)return Xi;t=t._reactInternals;e:{if(Rr(t)!==t||t.tag!==1)throw Error(se(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(rn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(se(171))}if(t.tag===1){var n=t.type;if(rn(n))return kg(t,n,e)}return e}function O0(t,e,n,i,r,s,o,a,l){return t=Nf(n,i,!0,t,r,s,o,a,l),t.context=k0(null),n=t.current,i=qt(),r=Hi(n),s=hi(i,r),s.callback=e??null,zi(n,s,r),t.current.lanes=r,zo(t,r,i),sn(t,i),t}function Hl(t,e,n,i){var r=e.current,s=qt(),o=Hi(r);return n=k0(n),e.context===null?e.context=n:e.pendingContext=n,e=hi(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=zi(r,e,o),t!==null&&(Hn(t,r,o,s),Oa(t,r,o)),o}function Ml(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function yp(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Df(t,e){yp(t,e),(t=t.alternate)&&yp(t,e)}function oy(){return null}var z0=typeof reportError=="function"?reportError:function(t){console.error(t)};function If(t){this._internalRoot=t}Vl.prototype.render=If.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(se(409));Hl(t,e,null,null)};Vl.prototype.unmount=If.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;wr(function(){Hl(null,t,null,null)}),e[mi]=null}};function Vl(t){this._internalRoot=t}Vl.prototype.unstable_scheduleHydration=function(t){if(t){var e=gg();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Pi.length&&e!==0&&e<Pi[n].priority;n++);Pi.splice(n,0,t),n===0&&xg(t)}};function Uf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Gl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Sp(){}function ay(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=Ml(o);s.call(c)}}var o=O0(e,i,t,0,null,!1,!1,"",Sp);return t._reactRootContainer=o,t[mi]=o.current,Eo(t.nodeType===8?t.parentNode:t),wr(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=Ml(l);a.call(c)}}var l=Nf(t,0,!1,null,null,!1,!1,"",Sp);return t._reactRootContainer=l,t[mi]=l.current,Eo(t.nodeType===8?t.parentNode:t),wr(function(){Hl(e,l,n,i)}),l}function Wl(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=Ml(o);a.call(l)}}Hl(e,o,t,r)}else o=ay(n,e,t,r,i);return Ml(o)}pg=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=eo(e.pendingLanes);n!==0&&(Jd(e,n|1),sn(e,_t()),!(qe&6)&&(Ms=_t()+500,Zi()))}break;case 13:wr(function(){var i=gi(t,1);if(i!==null){var r=qt();Hn(i,t,1,r)}}),Df(t,1)}};ef=function(t){if(t.tag===13){var e=gi(t,134217728);if(e!==null){var n=qt();Hn(e,t,134217728,n)}Df(t,134217728)}};mg=function(t){if(t.tag===13){var e=Hi(t),n=gi(t,e);if(n!==null){var i=qt();Hn(n,t,e,i)}Df(t,e)}};gg=function(){return it};vg=function(t,e){var n=it;try{return it=t,e()}finally{it=n}};Su=function(t,e,n){switch(e){case"input":if(pu(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Il(i);if(!r)throw Error(se(90));Ym(i),pu(i,r)}}}break;case"textarea":Km(t,n);break;case"select":e=n.value,e!=null&&as(t,!!n.multiple,e,!1)}};ig=Cf;rg=wr;var ly={usingClientEntryPoint:!1,Events:[Ho,Jr,Il,tg,ng,Cf]},js={findFiberByHostInstance:fr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},cy={bundleType:js.bundleType,version:js.version,rendererPackageName:js.rendererPackageName,rendererConfig:js.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:_i.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=ag(t),t===null?null:t.stateNode},findFiberByHostInstance:js.findFiberByHostInstance||oy,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ua=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ua.isDisabled&&ua.supportsFiber)try{Pl=ua.inject(cy),qn=ua}catch{}}gn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ly;gn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Uf(e))throw Error(se(200));return sy(t,e,null,n)};gn.createRoot=function(t,e){if(!Uf(t))throw Error(se(299));var n=!1,i="",r=z0;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Nf(t,1,!1,null,null,n,!1,i,r),t[mi]=e.current,Eo(t.nodeType===8?t.parentNode:t),new If(e)};gn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(se(188)):(t=Object.keys(t).join(","),Error(se(268,t)));return t=ag(e),t=t===null?null:t.stateNode,t};gn.flushSync=function(t){return wr(t)};gn.hydrate=function(t,e,n){if(!Gl(e))throw Error(se(200));return Wl(null,t,e,!0,n)};gn.hydrateRoot=function(t,e,n){if(!Uf(t))throw Error(se(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=z0;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=O0(e,null,t,1,n??null,r,!1,s,o),t[mi]=e.current,Eo(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Vl(e)};gn.render=function(t,e,n){if(!Gl(e))throw Error(se(200));return Wl(null,t,e,!1,n)};gn.unmountComponentAtNode=function(t){if(!Gl(t))throw Error(se(40));return t._reactRootContainer?(wr(function(){Wl(null,null,t,!1,function(){t._reactRootContainer=null,t[mi]=null})}),!0):!1};gn.unstable_batchedUpdates=Cf;gn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Gl(n))throw Error(se(200));if(t==null||t._reactInternals===void 0)throw Error(se(38));return Wl(t,e,n,!1,i)};gn.version="18.3.1-next-f1338f8080-20240426";function B0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(B0)}catch(t){console.error(t)}}B0(),Bm.exports=gn;var uy=Bm.exports,Mp=uy;au.createRoot=Mp.createRoot,au.hydrateRoot=Mp.hydrateRoot;const dy={hardhat:'<path d="M2 18h20"/><path d="M4 18a8 8 0 0 1 16 0"/><path d="M10 6h4v4"/><path d="M10 8a3 3 0 0 0-3 3"/>',person:'<circle cx="12" cy="4" r="2"/><path d="M12 6v8"/><path d="m8 20 4-6 4 6"/><path d="M8 9h8"/>',flask:'<path d="M9 3h6"/><path d="M10 3v6l-5 9a2 2 0 0 0 2 3h10a2 2 0 0 0 2-3l-5-9V3"/><path d="M6.5 15h11"/>',flame:'<path d="M12 3c3 4 5 6 5 9a5 5 0 0 1-10 0c0-1 .5-2 1.5-3C9 10 10 8 12 3Z"/>',users:'<circle cx="9" cy="8" r="3"/><path d="M3 20a6 6 0 0 1 12 0"/><path d="M16 6a3 3 0 0 1 0 6"/><path d="M18 14a6 6 0 0 1 3 6"/>',userx:'<circle cx="9" cy="8" r="3"/><path d="M3 20a6 6 0 0 1 12 0"/><path d="m16 8 5 5"/><path d="m21 8-5 5"/>',shirt:'<path d="M8 3 4 6l2 3 2-1v10h8V8l2 1 2-3-4-3-2 2H10Z"/>',shield:'<path d="M12 3 5 6v5c0 4 3 7 7 9 4-2 7-5 7-9V6Z"/><path d="M12 9v3"/><path d="M12 15h.01"/>',back:'<path d="m15 18-6-6 6-6"/>',bell:'<path d="M6 9a6 6 0 0 1 12 0c0 5 2 6 2 6H4s2-1 2-6"/><path d="M10 20a2 2 0 0 0 4 0"/>',search:'<circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/>',clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',arrowRight:'<path d="M5 12h14"/><path d="m13 6 6 6-6 6"/>',camera:'<path d="M3 7h4l2-2h6l2 2h4v12H3Z"/><circle cx="12" cy="13" r="3"/>',check:'<path d="M20 6 9 17l-5-5"/>',triangleAlert:'<path d="M12 3 2 20h20L12 3Z"/><path d="M12 10v4"/><path d="M12 17h.01"/>',play:'<path d="m7 5 11 7-11 7Z"/>',belt:'<rect x="2" y="9" width="20" height="6" rx="3"/><circle cx="6.5" cy="12" r="1.1"/><circle cx="12" cy="12" r="1.1"/><circle cx="17.5" cy="12" r="1.1"/>',grid:'<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>',chevronLeft:'<path d="m15 18-6-6 6-6"/>',chevronRight:'<path d="m9 18 6-6-6-6"/>',rewind:'<polygon points="11 19 2 12 11 5 11 19"/><polygon points="22 19 13 12 22 5 22 19"/>',pause:'<rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/>',x:'<path d="M18 6 6 18"/><path d="m6 6 12 12"/>',download:'<path d="M12 3v11"/><path d="m7 10 5 5 5-5"/><path d="M4 20h16"/>',video:'<rect x="2" y="6" width="14" height="12" rx="2"/><path d="m16 10 6-3v10l-6-3Z"/>',pin:'<path d="M12 21s7-6.3 7-11a7 7 0 1 0-14 0c0 4.7 7 11 7 11Z"/><circle cx="12" cy="10" r="2.5"/>'};function je({name:t,size:e=18,strokeWidth:n=1.6}){return _.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:n,strokeLinecap:"round",strokeLinejoin:"round",dangerouslySetInnerHTML:{__html:dy[t]??""}})}function fy({title:t,showBack:e,onBack:n}){return _.jsxs("header",{className:"flex items-center justify-between border-b border-[#E5E7EB] bg-white px-6 py-3",children:[_.jsxs("div",{className:"flex items-center gap-3",children:[e&&_.jsx("button",{type:"button",className:"flex h-9 w-9 items-center justify-center rounded-full border border-[#E5E7EB] text-[#0F172A] hover:bg-[#F1F5F9]",onClick:()=>n(),"aria-label":"Back",children:_.jsx(je,{name:"back",size:18})}),_.jsx("h1",{className:"text-[20px] font-semibold text-[#0F172A]",children:t})]}),_.jsxs("div",{className:"flex items-center gap-4",children:[_.jsxs("div",{className:"relative text-[#475569]",children:[_.jsx(je,{name:"bell",size:20}),_.jsx("span",{className:"absolute -right-1.5 -top-1.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-[#EF4444] px-1 text-[10px] font-semibold text-white",children:"0"})]}),_.jsx("div",{className:"relative h-9 w-9 rounded-full bg-gradient-to-br from-[#475569] to-[#0F172A]",children:_.jsx("span",{className:"absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full border-2 border-white bg-[#22C55E]"})})]})]})}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ff="169",hy=0,Ep=1,py=2,H0=1,kf=2,si=3,$i=0,on=1,li=2,Gi=0,hs=1,wp=2,Tp=3,Ap=4,my=5,ur=100,gy=101,vy=102,xy=103,_y=104,yy=200,Sy=201,My=202,Ey=203,ed=204,td=205,wy=206,Ty=207,Ay=208,by=209,Cy=210,Ry=211,Py=212,Ly=213,Ny=214,nd=0,id=1,rd=2,Es=3,sd=4,od=5,ad=6,ld=7,V0=0,Dy=1,Iy=2,Wi=0,Uy=1,Fy=2,ky=3,Of=4,Oy=5,zy=6,By=7,G0=300,ws=301,Ts=302,cd=303,ud=304,jl=306,dd=1e3,mr=1001,fd=1002,Tn=1003,Hy=1004,da=1005,kn=1006,wc=1007,gr=1008,xi=1009,W0=1010,j0=1011,No=1012,zf=1013,Tr=1014,di=1015,Go=1016,Bf=1017,Hf=1018,As=1020,X0=35902,$0=1021,Y0=1022,zn=1023,q0=1024,K0=1025,ps=1026,bs=1027,Z0=1028,Vf=1029,Q0=1030,Gf=1031,Wf=1033,ja=33776,Xa=33777,$a=33778,Ya=33779,hd=35840,pd=35841,md=35842,gd=35843,vd=36196,xd=37492,_d=37496,yd=37808,Sd=37809,Md=37810,Ed=37811,wd=37812,Td=37813,Ad=37814,bd=37815,Cd=37816,Rd=37817,Pd=37818,Ld=37819,Nd=37820,Dd=37821,qa=36492,Id=36494,Ud=36495,J0=36283,Fd=36284,kd=36285,Od=36286,Vy=3200,Gy=3201,ev=0,Wy=1,Ni="",Xn="srgb",Qi="srgb-linear",jf="display-p3",Xl="display-p3-linear",El="linear",lt="srgb",wl="rec709",Tl="p3",Dr=7680,bp=519,jy=512,Xy=513,$y=514,tv=515,Yy=516,qy=517,Ky=518,Zy=519,Cp=35044,Rp="300 es",fi=2e3,Al=2001;class Is{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const zt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Pp=1234567;const ho=Math.PI/180,Do=180/Math.PI;function Us(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(zt[t&255]+zt[t>>8&255]+zt[t>>16&255]+zt[t>>24&255]+"-"+zt[e&255]+zt[e>>8&255]+"-"+zt[e>>16&15|64]+zt[e>>24&255]+"-"+zt[n&63|128]+zt[n>>8&255]+"-"+zt[n>>16&255]+zt[n>>24&255]+zt[i&255]+zt[i>>8&255]+zt[i>>16&255]+zt[i>>24&255]).toLowerCase()}function Yt(t,e,n){return Math.max(e,Math.min(n,t))}function Xf(t,e){return(t%e+e)%e}function Qy(t,e,n,i,r){return i+(t-e)*(r-i)/(n-e)}function Jy(t,e,n){return t!==e?(n-t)/(e-t):0}function po(t,e,n){return(1-n)*t+n*e}function e1(t,e,n,i){return po(t,e,1-Math.exp(-n*i))}function t1(t,e=1){return e-Math.abs(Xf(t,e*2)-e)}function n1(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*(3-2*t))}function i1(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*t*(t*(t*6-15)+10))}function r1(t,e){return t+Math.floor(Math.random()*(e-t+1))}function s1(t,e){return t+Math.random()*(e-t)}function o1(t){return t*(.5-Math.random())}function a1(t){t!==void 0&&(Pp=t);let e=Pp+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function l1(t){return t*ho}function c1(t){return t*Do}function u1(t){return(t&t-1)===0&&t!==0}function d1(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function f1(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function h1(t,e,n,i,r){const s=Math.cos,o=Math.sin,a=s(n/2),l=o(n/2),c=s((e+i)/2),d=o((e+i)/2),h=s((e-i)/2),f=o((e-i)/2),m=s((i-e)/2),y=o((i-e)/2);switch(r){case"XYX":t.set(a*d,l*h,l*f,a*c);break;case"YZY":t.set(l*f,a*d,l*h,a*c);break;case"ZXZ":t.set(l*h,l*f,a*d,a*c);break;case"XZX":t.set(a*d,l*y,l*m,a*c);break;case"YXY":t.set(l*m,a*d,l*y,a*c);break;case"ZYZ":t.set(l*y,l*m,a*d,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function $r(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function jt(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const p1={DEG2RAD:ho,RAD2DEG:Do,generateUUID:Us,clamp:Yt,euclideanModulo:Xf,mapLinear:Qy,inverseLerp:Jy,lerp:po,damp:e1,pingpong:t1,smoothstep:n1,smootherstep:i1,randInt:r1,randFloat:s1,randFloatSpread:o1,seededRandom:a1,degToRad:l1,radToDeg:c1,isPowerOfTwo:u1,ceilPowerOfTwo:d1,floorPowerOfTwo:f1,setQuaternionFromProperEuler:h1,normalize:jt,denormalize:$r};class Xe{constructor(e=0,n=0){Xe.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Yt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ke{constructor(e,n,i,r,s,o,a,l,c){ke.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){const d=this.elements;return d[0]=e,d[1]=r,d[2]=a,d[3]=n,d[4]=s,d[5]=l,d[6]=i,d[7]=o,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],d=i[4],h=i[7],f=i[2],m=i[5],y=i[8],S=r[0],p=r[3],u=r[6],v=r[1],g=r[4],M=r[7],P=r[2],b=r[5],T=r[8];return s[0]=o*S+a*v+l*P,s[3]=o*p+a*g+l*b,s[6]=o*u+a*M+l*T,s[1]=c*S+d*v+h*P,s[4]=c*p+d*g+h*b,s[7]=c*u+d*M+h*T,s[2]=f*S+m*v+y*P,s[5]=f*p+m*g+y*b,s[8]=f*u+m*M+y*T,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8];return n*o*d-n*a*c-i*s*d+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8],h=d*o-a*c,f=a*l-d*s,m=c*s-o*l,y=n*h+i*f+r*m;if(y===0)return this.set(0,0,0,0,0,0,0,0,0);const S=1/y;return e[0]=h*S,e[1]=(r*c-d*i)*S,e[2]=(a*i-r*o)*S,e[3]=f*S,e[4]=(d*n-r*l)*S,e[5]=(r*s-a*n)*S,e[6]=m*S,e[7]=(i*l-c*n)*S,e[8]=(o*n-i*s)*S,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(Tc.makeScale(e,n)),this}rotate(e){return this.premultiply(Tc.makeRotation(-e)),this}translate(e,n){return this.premultiply(Tc.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Tc=new ke;function nv(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function bl(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function m1(){const t=bl("canvas");return t.style.display="block",t}const Lp={};function Ka(t){t in Lp||(Lp[t]=!0,console.warn(t))}function g1(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}function v1(t){const e=t.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function x1(t){const e=t.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Np=new ke().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Dp=new ke().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Xs={[Qi]:{transfer:El,primaries:wl,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t,fromReference:t=>t},[Xn]:{transfer:lt,primaries:wl,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[Xl]:{transfer:El,primaries:Tl,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.applyMatrix3(Dp),fromReference:t=>t.applyMatrix3(Np)},[jf]:{transfer:lt,primaries:Tl,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.convertSRGBToLinear().applyMatrix3(Dp),fromReference:t=>t.applyMatrix3(Np).convertLinearToSRGB()}},_1=new Set([Qi,Xl]),et={enabled:!0,_workingColorSpace:Qi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!_1.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=Xs[e].toReference,r=Xs[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return Xs[t].primaries},getTransfer:function(t){return t===Ni?El:Xs[t].transfer},getLuminanceCoefficients:function(t,e=this._workingColorSpace){return t.fromArray(Xs[e].luminanceCoefficients)}};function ms(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Ac(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Ir;class y1{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ir===void 0&&(Ir=bl("canvas")),Ir.width=e.width,Ir.height=e.height;const i=Ir.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Ir}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=bl("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=ms(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(ms(n[i]/255)*255):n[i]=ms(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let S1=0;class iv{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:S1++}),this.uuid=Us(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(bc(r[o].image)):s.push(bc(r[o]))}else s=bc(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function bc(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?y1.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let M1=0;class an extends Is{constructor(e=an.DEFAULT_IMAGE,n=an.DEFAULT_MAPPING,i=mr,r=mr,s=kn,o=gr,a=zn,l=xi,c=an.DEFAULT_ANISOTROPY,d=Ni){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:M1++}),this.uuid=Us(),this.name="",this.source=new iv(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Xe(0,0),this.repeat=new Xe(1,1),this.center=new Xe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==G0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case dd:e.x=e.x-Math.floor(e.x);break;case mr:e.x=e.x<0?0:1;break;case fd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case dd:e.y=e.y-Math.floor(e.y);break;case mr:e.y=e.y<0?0:1;break;case fd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}an.DEFAULT_IMAGE=null;an.DEFAULT_MAPPING=G0;an.DEFAULT_ANISOTROPY=1;class gt{constructor(e=0,n=0,i=0,r=1){gt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],d=l[4],h=l[8],f=l[1],m=l[5],y=l[9],S=l[2],p=l[6],u=l[10];if(Math.abs(d-f)<.01&&Math.abs(h-S)<.01&&Math.abs(y-p)<.01){if(Math.abs(d+f)<.1&&Math.abs(h+S)<.1&&Math.abs(y+p)<.1&&Math.abs(c+m+u-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const g=(c+1)/2,M=(m+1)/2,P=(u+1)/2,b=(d+f)/4,T=(h+S)/4,R=(y+p)/4;return g>M&&g>P?g<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(g),r=b/i,s=T/i):M>P?M<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(M),i=b/r,s=R/r):P<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(P),i=T/s,r=R/s),this.set(i,r,s,n),this}let v=Math.sqrt((p-y)*(p-y)+(h-S)*(h-S)+(f-d)*(f-d));return Math.abs(v)<.001&&(v=1),this.x=(p-y)/v,this.y=(h-S)/v,this.z=(f-d)/v,this.w=Math.acos((c+m+u-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class E1 extends Is{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new gt(0,0,e,n),this.scissorTest=!1,this.viewport=new gt(0,0,e,n);const r={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:kn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new an(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new iv(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ar extends E1{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class rv extends an{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Tn,this.minFilter=Tn,this.wrapR=mr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class w1 extends an{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Tn,this.minFilter=Tn,this.wrapR=mr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Wo{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],d=i[r+2],h=i[r+3];const f=s[o+0],m=s[o+1],y=s[o+2],S=s[o+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=d,e[n+3]=h;return}if(a===1){e[n+0]=f,e[n+1]=m,e[n+2]=y,e[n+3]=S;return}if(h!==S||l!==f||c!==m||d!==y){let p=1-a;const u=l*f+c*m+d*y+h*S,v=u>=0?1:-1,g=1-u*u;if(g>Number.EPSILON){const P=Math.sqrt(g),b=Math.atan2(P,u*v);p=Math.sin(p*b)/P,a=Math.sin(a*b)/P}const M=a*v;if(l=l*p+f*M,c=c*p+m*M,d=d*p+y*M,h=h*p+S*M,p===1-a){const P=1/Math.sqrt(l*l+c*c+d*d+h*h);l*=P,c*=P,d*=P,h*=P}}e[n]=l,e[n+1]=c,e[n+2]=d,e[n+3]=h}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],d=i[r+3],h=s[o],f=s[o+1],m=s[o+2],y=s[o+3];return e[n]=a*y+d*h+l*m-c*f,e[n+1]=l*y+d*f+c*h-a*m,e[n+2]=c*y+d*m+a*f-l*h,e[n+3]=d*y-a*h-l*f-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),d=a(r/2),h=a(s/2),f=l(i/2),m=l(r/2),y=l(s/2);switch(o){case"XYZ":this._x=f*d*h+c*m*y,this._y=c*m*h-f*d*y,this._z=c*d*y+f*m*h,this._w=c*d*h-f*m*y;break;case"YXZ":this._x=f*d*h+c*m*y,this._y=c*m*h-f*d*y,this._z=c*d*y-f*m*h,this._w=c*d*h+f*m*y;break;case"ZXY":this._x=f*d*h-c*m*y,this._y=c*m*h+f*d*y,this._z=c*d*y+f*m*h,this._w=c*d*h-f*m*y;break;case"ZYX":this._x=f*d*h-c*m*y,this._y=c*m*h+f*d*y,this._z=c*d*y-f*m*h,this._w=c*d*h+f*m*y;break;case"YZX":this._x=f*d*h+c*m*y,this._y=c*m*h+f*d*y,this._z=c*d*y-f*m*h,this._w=c*d*h-f*m*y;break;case"XZY":this._x=f*d*h-c*m*y,this._y=c*m*h-f*d*y,this._z=c*d*y+f*m*h,this._w=c*d*h+f*m*y;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],d=n[6],h=n[10],f=i+a+h;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(d-l)*m,this._y=(s-c)*m,this._z=(o-r)*m}else if(i>a&&i>h){const m=2*Math.sqrt(1+i-a-h);this._w=(d-l)/m,this._x=.25*m,this._y=(r+o)/m,this._z=(s+c)/m}else if(a>h){const m=2*Math.sqrt(1+a-i-h);this._w=(s-c)/m,this._x=(r+o)/m,this._y=.25*m,this._z=(l+d)/m}else{const m=2*Math.sqrt(1+h-i-a);this._w=(o-r)/m,this._x=(s+c)/m,this._y=(l+d)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Yt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,d=n._w;return this._x=i*d+o*a+r*c-s*l,this._y=r*d+o*l+s*a-i*c,this._z=s*d+o*c+i*l-r*a,this._w=o*d-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-n;return this._w=m*o+n*this._w,this._x=m*i+n*this._x,this._y=m*r+n*this._y,this._z=m*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),d=Math.atan2(c,a),h=Math.sin((1-n)*d)/c,f=Math.sin(n*d)/c;return this._w=o*h+this._w*f,this._x=i*h+this._x*f,this._y=r*h+this._y*f,this._z=s*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class z{constructor(e=0,n=0,i=0){z.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Ip.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Ip.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),d=2*(a*n-s*r),h=2*(s*i-o*n);return this.x=n+l*c+o*h-a*d,this.y=i+l*d+a*c-s*h,this.z=r+l*h+s*d-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Cc.copy(this).projectOnVector(e),this.sub(Cc)}reflect(e){return this.sub(Cc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Yt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Cc=new z,Ip=new Wo;class jo{constructor(e=new z(1/0,1/0,1/0),n=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Ln.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Ln.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Ln.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Ln):Ln.fromBufferAttribute(s,o),Ln.applyMatrix4(e.matrixWorld),this.expandByPoint(Ln);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),fa.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),fa.copy(i.boundingBox)),fa.applyMatrix4(e.matrixWorld),this.union(fa)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ln),Ln.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter($s),ha.subVectors(this.max,$s),Ur.subVectors(e.a,$s),Fr.subVectors(e.b,$s),kr.subVectors(e.c,$s),Mi.subVectors(Fr,Ur),Ei.subVectors(kr,Fr),er.subVectors(Ur,kr);let n=[0,-Mi.z,Mi.y,0,-Ei.z,Ei.y,0,-er.z,er.y,Mi.z,0,-Mi.x,Ei.z,0,-Ei.x,er.z,0,-er.x,-Mi.y,Mi.x,0,-Ei.y,Ei.x,0,-er.y,er.x,0];return!Rc(n,Ur,Fr,kr,ha)||(n=[1,0,0,0,1,0,0,0,1],!Rc(n,Ur,Fr,kr,ha))?!1:(pa.crossVectors(Mi,Ei),n=[pa.x,pa.y,pa.z],Rc(n,Ur,Fr,kr,ha))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ln).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ln).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ei[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ei[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ei[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ei[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ei[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ei[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ei[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ei[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ei),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ei=[new z,new z,new z,new z,new z,new z,new z,new z],Ln=new z,fa=new jo,Ur=new z,Fr=new z,kr=new z,Mi=new z,Ei=new z,er=new z,$s=new z,ha=new z,pa=new z,tr=new z;function Rc(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){tr.fromArray(t,s);const a=r.x*Math.abs(tr.x)+r.y*Math.abs(tr.y)+r.z*Math.abs(tr.z),l=e.dot(tr),c=n.dot(tr),d=i.dot(tr);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>a)return!1}return!0}const T1=new jo,Ys=new z,Pc=new z;class $f{constructor(e=new z,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):T1.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ys.subVectors(e,this.center);const n=Ys.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Ys,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Pc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ys.copy(e.center).add(Pc)),this.expandByPoint(Ys.copy(e.center).sub(Pc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ti=new z,Lc=new z,ma=new z,wi=new z,Nc=new z,ga=new z,Dc=new z;class A1{constructor(e=new z,n=new z(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ti)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=ti.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(ti.copy(this.origin).addScaledVector(this.direction,n),ti.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Lc.copy(e).add(n).multiplyScalar(.5),ma.copy(n).sub(e).normalize(),wi.copy(this.origin).sub(Lc);const s=e.distanceTo(n)*.5,o=-this.direction.dot(ma),a=wi.dot(this.direction),l=-wi.dot(ma),c=wi.lengthSq(),d=Math.abs(1-o*o);let h,f,m,y;if(d>0)if(h=o*l-a,f=o*a-l,y=s*d,h>=0)if(f>=-y)if(f<=y){const S=1/d;h*=S,f*=S,m=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=s,h=Math.max(0,-(o*f+a)),m=-h*h+f*(f+2*l)+c;else f=-s,h=Math.max(0,-(o*f+a)),m=-h*h+f*(f+2*l)+c;else f<=-y?(h=Math.max(0,-(-o*s+a)),f=h>0?-s:Math.min(Math.max(-s,-l),s),m=-h*h+f*(f+2*l)+c):f<=y?(h=0,f=Math.min(Math.max(-s,-l),s),m=f*(f+2*l)+c):(h=Math.max(0,-(o*s+a)),f=h>0?s:Math.min(Math.max(-s,-l),s),m=-h*h+f*(f+2*l)+c);else f=o>0?-s:s,h=Math.max(0,-(o*f+a)),m=-h*h+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(Lc).addScaledVector(ma,f),m}intersectSphere(e,n){ti.subVectors(e.center,this.origin);const i=ti.dot(this.direction),r=ti.dot(ti)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,d=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),d>=0?(s=(e.min.y-f.y)*d,o=(e.max.y-f.y)*d):(s=(e.max.y-f.y)*d,o=(e.min.y-f.y)*d),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,ti)!==null}intersectTriangle(e,n,i,r,s){Nc.subVectors(n,e),ga.subVectors(i,e),Dc.crossVectors(Nc,ga);let o=this.direction.dot(Dc),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;wi.subVectors(this.origin,e);const l=a*this.direction.dot(ga.crossVectors(wi,ga));if(l<0)return null;const c=a*this.direction.dot(Nc.cross(wi));if(c<0||l+c>o)return null;const d=-a*wi.dot(Dc);return d<0?null:this.at(d/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class vt{constructor(e,n,i,r,s,o,a,l,c,d,h,f,m,y,S,p){vt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,d,h,f,m,y,S,p)}set(e,n,i,r,s,o,a,l,c,d,h,f,m,y,S,p){const u=this.elements;return u[0]=e,u[4]=n,u[8]=i,u[12]=r,u[1]=s,u[5]=o,u[9]=a,u[13]=l,u[2]=c,u[6]=d,u[10]=h,u[14]=f,u[3]=m,u[7]=y,u[11]=S,u[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new vt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/Or.setFromMatrixColumn(e,0).length(),s=1/Or.setFromMatrixColumn(e,1).length(),o=1/Or.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),d=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const f=o*d,m=o*h,y=a*d,S=a*h;n[0]=l*d,n[4]=-l*h,n[8]=c,n[1]=m+y*c,n[5]=f-S*c,n[9]=-a*l,n[2]=S-f*c,n[6]=y+m*c,n[10]=o*l}else if(e.order==="YXZ"){const f=l*d,m=l*h,y=c*d,S=c*h;n[0]=f+S*a,n[4]=y*a-m,n[8]=o*c,n[1]=o*h,n[5]=o*d,n[9]=-a,n[2]=m*a-y,n[6]=S+f*a,n[10]=o*l}else if(e.order==="ZXY"){const f=l*d,m=l*h,y=c*d,S=c*h;n[0]=f-S*a,n[4]=-o*h,n[8]=y+m*a,n[1]=m+y*a,n[5]=o*d,n[9]=S-f*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const f=o*d,m=o*h,y=a*d,S=a*h;n[0]=l*d,n[4]=y*c-m,n[8]=f*c+S,n[1]=l*h,n[5]=S*c+f,n[9]=m*c-y,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const f=o*l,m=o*c,y=a*l,S=a*c;n[0]=l*d,n[4]=S-f*h,n[8]=y*h+m,n[1]=h,n[5]=o*d,n[9]=-a*d,n[2]=-c*d,n[6]=m*h+y,n[10]=f-S*h}else if(e.order==="XZY"){const f=o*l,m=o*c,y=a*l,S=a*c;n[0]=l*d,n[4]=-h,n[8]=c*d,n[1]=f*h+S,n[5]=o*d,n[9]=m*h-y,n[2]=y*h-m,n[6]=a*d,n[10]=S*h+f}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(b1,e,C1)}lookAt(e,n,i){const r=this.elements;return un.subVectors(e,n),un.lengthSq()===0&&(un.z=1),un.normalize(),Ti.crossVectors(i,un),Ti.lengthSq()===0&&(Math.abs(i.z)===1?un.x+=1e-4:un.z+=1e-4,un.normalize(),Ti.crossVectors(i,un)),Ti.normalize(),va.crossVectors(un,Ti),r[0]=Ti.x,r[4]=va.x,r[8]=un.x,r[1]=Ti.y,r[5]=va.y,r[9]=un.y,r[2]=Ti.z,r[6]=va.z,r[10]=un.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],d=i[1],h=i[5],f=i[9],m=i[13],y=i[2],S=i[6],p=i[10],u=i[14],v=i[3],g=i[7],M=i[11],P=i[15],b=r[0],T=r[4],R=r[8],D=r[12],x=r[1],E=r[5],U=r[9],B=r[13],O=r[2],$=r[6],j=r[10],Y=r[14],N=r[3],K=r[7],ee=r[11],ae=r[15];return s[0]=o*b+a*x+l*O+c*N,s[4]=o*T+a*E+l*$+c*K,s[8]=o*R+a*U+l*j+c*ee,s[12]=o*D+a*B+l*Y+c*ae,s[1]=d*b+h*x+f*O+m*N,s[5]=d*T+h*E+f*$+m*K,s[9]=d*R+h*U+f*j+m*ee,s[13]=d*D+h*B+f*Y+m*ae,s[2]=y*b+S*x+p*O+u*N,s[6]=y*T+S*E+p*$+u*K,s[10]=y*R+S*U+p*j+u*ee,s[14]=y*D+S*B+p*Y+u*ae,s[3]=v*b+g*x+M*O+P*N,s[7]=v*T+g*E+M*$+P*K,s[11]=v*R+g*U+M*j+P*ee,s[15]=v*D+g*B+M*Y+P*ae,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],d=e[2],h=e[6],f=e[10],m=e[14],y=e[3],S=e[7],p=e[11],u=e[15];return y*(+s*l*h-r*c*h-s*a*f+i*c*f+r*a*m-i*l*m)+S*(+n*l*m-n*c*f+s*o*f-r*o*m+r*c*d-s*l*d)+p*(+n*c*h-n*a*m-s*o*h+i*o*m+s*a*d-i*c*d)+u*(-r*a*d-n*l*h+n*a*f+r*o*h-i*o*f+i*l*d)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8],h=e[9],f=e[10],m=e[11],y=e[12],S=e[13],p=e[14],u=e[15],v=h*p*c-S*f*c+S*l*m-a*p*m-h*l*u+a*f*u,g=y*f*c-d*p*c-y*l*m+o*p*m+d*l*u-o*f*u,M=d*S*c-y*h*c+y*a*m-o*S*m-d*a*u+o*h*u,P=y*h*l-d*S*l-y*a*f+o*S*f+d*a*p-o*h*p,b=n*v+i*g+r*M+s*P;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/b;return e[0]=v*T,e[1]=(S*f*s-h*p*s-S*r*m+i*p*m+h*r*u-i*f*u)*T,e[2]=(a*p*s-S*l*s+S*r*c-i*p*c-a*r*u+i*l*u)*T,e[3]=(h*l*s-a*f*s-h*r*c+i*f*c+a*r*m-i*l*m)*T,e[4]=g*T,e[5]=(d*p*s-y*f*s+y*r*m-n*p*m-d*r*u+n*f*u)*T,e[6]=(y*l*s-o*p*s-y*r*c+n*p*c+o*r*u-n*l*u)*T,e[7]=(o*f*s-d*l*s+d*r*c-n*f*c-o*r*m+n*l*m)*T,e[8]=M*T,e[9]=(y*h*s-d*S*s-y*i*m+n*S*m+d*i*u-n*h*u)*T,e[10]=(o*S*s-y*a*s+y*i*c-n*S*c-o*i*u+n*a*u)*T,e[11]=(d*a*s-o*h*s-d*i*c+n*h*c+o*i*m-n*a*m)*T,e[12]=P*T,e[13]=(d*S*r-y*h*r+y*i*f-n*S*f-d*i*p+n*h*p)*T,e[14]=(y*a*r-o*S*r-y*i*l+n*S*l+o*i*p-n*a*p)*T,e[15]=(o*h*r-d*a*r+d*i*l-n*h*l-o*i*f+n*a*f)*T,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,d=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,d*a+i,d*l-r*o,0,c*l-r*a,d*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,d=o+o,h=a+a,f=s*c,m=s*d,y=s*h,S=o*d,p=o*h,u=a*h,v=l*c,g=l*d,M=l*h,P=i.x,b=i.y,T=i.z;return r[0]=(1-(S+u))*P,r[1]=(m+M)*P,r[2]=(y-g)*P,r[3]=0,r[4]=(m-M)*b,r[5]=(1-(f+u))*b,r[6]=(p+v)*b,r[7]=0,r[8]=(y+g)*T,r[9]=(p-v)*T,r[10]=(1-(f+S))*T,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=Or.set(r[0],r[1],r[2]).length();const o=Or.set(r[4],r[5],r[6]).length(),a=Or.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Nn.copy(this);const c=1/s,d=1/o,h=1/a;return Nn.elements[0]*=c,Nn.elements[1]*=c,Nn.elements[2]*=c,Nn.elements[4]*=d,Nn.elements[5]*=d,Nn.elements[6]*=d,Nn.elements[8]*=h,Nn.elements[9]*=h,Nn.elements[10]*=h,n.setFromRotationMatrix(Nn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=fi){const l=this.elements,c=2*s/(n-e),d=2*s/(i-r),h=(n+e)/(n-e),f=(i+r)/(i-r);let m,y;if(a===fi)m=-(o+s)/(o-s),y=-2*o*s/(o-s);else if(a===Al)m=-o/(o-s),y=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=d,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=y,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=fi){const l=this.elements,c=1/(n-e),d=1/(i-r),h=1/(o-s),f=(n+e)*c,m=(i+r)*d;let y,S;if(a===fi)y=(o+s)*h,S=-2*h;else if(a===Al)y=s*h,S=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*d,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=S,l[14]=-y,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Or=new z,Nn=new vt,b1=new z(0,0,0),C1=new z(1,1,1),Ti=new z,va=new z,un=new z,Up=new vt,Fp=new Wo;class Qn{constructor(e=0,n=0,i=0,r=Qn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],d=r[9],h=r[2],f=r[6],m=r[10];switch(n){case"XYZ":this._y=Math.asin(Yt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-d,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Yt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Yt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Yt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Yt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-Yt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-d,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Up.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Up,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Fp.setFromEuler(this),this.setFromQuaternion(Fp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Qn.DEFAULT_ORDER="XYZ";class sv{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let R1=0;const kp=new z,zr=new Wo,ni=new vt,xa=new z,qs=new z,P1=new z,L1=new Wo,Op=new z(1,0,0),zp=new z(0,1,0),Bp=new z(0,0,1),Hp={type:"added"},N1={type:"removed"},Br={type:"childadded",child:null},Ic={type:"childremoved",child:null};class Nt extends Is{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:R1++}),this.uuid=Us(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Nt.DEFAULT_UP.clone();const e=new z,n=new Qn,i=new Wo,r=new z(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new vt},normalMatrix:{value:new ke}}),this.matrix=new vt,this.matrixWorld=new vt,this.matrixAutoUpdate=Nt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Nt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new sv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return zr.setFromAxisAngle(e,n),this.quaternion.multiply(zr),this}rotateOnWorldAxis(e,n){return zr.setFromAxisAngle(e,n),this.quaternion.premultiply(zr),this}rotateX(e){return this.rotateOnAxis(Op,e)}rotateY(e){return this.rotateOnAxis(zp,e)}rotateZ(e){return this.rotateOnAxis(Bp,e)}translateOnAxis(e,n){return kp.copy(e).applyQuaternion(this.quaternion),this.position.add(kp.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Op,e)}translateY(e){return this.translateOnAxis(zp,e)}translateZ(e){return this.translateOnAxis(Bp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ni.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?xa.copy(e):xa.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),qs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ni.lookAt(qs,xa,this.up):ni.lookAt(xa,qs,this.up),this.quaternion.setFromRotationMatrix(ni),r&&(ni.extractRotation(r.matrixWorld),zr.setFromRotationMatrix(ni),this.quaternion.premultiply(zr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Hp),Br.child=e,this.dispatchEvent(Br),Br.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(N1),Ic.child=e,this.dispatchEvent(Ic),Ic.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ni.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ni.multiply(e.parent.matrixWorld)),e.applyMatrix4(ni),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Hp),Br.child=e,this.dispatchEvent(Br),Br.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qs,e,P1),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qs,L1,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),d=o(e.images),h=o(e.shapes),f=o(e.skeletons),m=o(e.animations),y=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),d.length>0&&(i.images=d),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),m.length>0&&(i.animations=m),y.length>0&&(i.nodes=y)}return i.object=r,i;function o(a){const l=[];for(const c in a){const d=a[c];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Nt.DEFAULT_UP=new z(0,1,0);Nt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Nt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Dn=new z,ii=new z,Uc=new z,ri=new z,Hr=new z,Vr=new z,Vp=new z,Fc=new z,kc=new z,Oc=new z,zc=new gt,Bc=new gt,Hc=new gt;class On{constructor(e=new z,n=new z,i=new z){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Dn.subVectors(e,n),r.cross(Dn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Dn.subVectors(r,n),ii.subVectors(i,n),Uc.subVectors(e,n);const o=Dn.dot(Dn),a=Dn.dot(ii),l=Dn.dot(Uc),c=ii.dot(ii),d=ii.dot(Uc),h=o*c-a*a;if(h===0)return s.set(0,0,0),null;const f=1/h,m=(c*l-a*d)*f,y=(o*d-a*l)*f;return s.set(1-m-y,y,m)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,ri)===null?!1:ri.x>=0&&ri.y>=0&&ri.x+ri.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,ri)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,ri.x),l.addScaledVector(o,ri.y),l.addScaledVector(a,ri.z),l)}static getInterpolatedAttribute(e,n,i,r,s,o){return zc.setScalar(0),Bc.setScalar(0),Hc.setScalar(0),zc.fromBufferAttribute(e,n),Bc.fromBufferAttribute(e,i),Hc.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(zc,s.x),o.addScaledVector(Bc,s.y),o.addScaledVector(Hc,s.z),o}static isFrontFacing(e,n,i,r){return Dn.subVectors(i,n),ii.subVectors(e,n),Dn.cross(ii).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Dn.subVectors(this.c,this.b),ii.subVectors(this.a,this.b),Dn.cross(ii).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return On.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return On.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return On.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return On.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return On.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;Hr.subVectors(r,i),Vr.subVectors(s,i),Fc.subVectors(e,i);const l=Hr.dot(Fc),c=Vr.dot(Fc);if(l<=0&&c<=0)return n.copy(i);kc.subVectors(e,r);const d=Hr.dot(kc),h=Vr.dot(kc);if(d>=0&&h<=d)return n.copy(r);const f=l*h-d*c;if(f<=0&&l>=0&&d<=0)return o=l/(l-d),n.copy(i).addScaledVector(Hr,o);Oc.subVectors(e,s);const m=Hr.dot(Oc),y=Vr.dot(Oc);if(y>=0&&m<=y)return n.copy(s);const S=m*c-l*y;if(S<=0&&c>=0&&y<=0)return a=c/(c-y),n.copy(i).addScaledVector(Vr,a);const p=d*y-m*h;if(p<=0&&h-d>=0&&m-y>=0)return Vp.subVectors(s,r),a=(h-d)/(h-d+(m-y)),n.copy(r).addScaledVector(Vp,a);const u=1/(p+S+f);return o=S*u,a=f*u,n.copy(i).addScaledVector(Hr,o).addScaledVector(Vr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const ov={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ai={h:0,s:0,l:0},_a={h:0,s:0,l:0};function Vc(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Ye{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Xn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,et.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=et.workingColorSpace){return this.r=e,this.g=n,this.b=i,et.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=et.workingColorSpace){if(e=Xf(e,1),n=Yt(n,0,1),i=Yt(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=Vc(o,s,e+1/3),this.g=Vc(o,s,e),this.b=Vc(o,s,e-1/3)}return et.toWorkingColorSpace(this,r),this}setStyle(e,n=Xn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Xn){const i=ov[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ms(e.r),this.g=ms(e.g),this.b=ms(e.b),this}copyLinearToSRGB(e){return this.r=Ac(e.r),this.g=Ac(e.g),this.b=Ac(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Xn){return et.fromWorkingColorSpace(Bt.copy(this),e),Math.round(Yt(Bt.r*255,0,255))*65536+Math.round(Yt(Bt.g*255,0,255))*256+Math.round(Yt(Bt.b*255,0,255))}getHexString(e=Xn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=et.workingColorSpace){et.fromWorkingColorSpace(Bt.copy(this),n);const i=Bt.r,r=Bt.g,s=Bt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const d=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=d<=.5?h/(o+a):h/(2-o-a),o){case i:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-i)/h+2;break;case s:l=(i-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,n=et.workingColorSpace){return et.fromWorkingColorSpace(Bt.copy(this),n),e.r=Bt.r,e.g=Bt.g,e.b=Bt.b,e}getStyle(e=Xn){et.fromWorkingColorSpace(Bt.copy(this),e);const n=Bt.r,i=Bt.g,r=Bt.b;return e!==Xn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Ai),this.setHSL(Ai.h+e,Ai.s+n,Ai.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Ai),e.getHSL(_a);const i=po(Ai.h,_a.h,n),r=po(Ai.s,_a.s,n),s=po(Ai.l,_a.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Bt=new Ye;Ye.NAMES=ov;let D1=0;class Fs extends Is{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:D1++}),this.uuid=Us(),this.name="",this.type="Material",this.blending=hs,this.side=$i,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ed,this.blendDst=td,this.blendEquation=ur,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ye(0,0,0),this.blendAlpha=0,this.depthFunc=Es,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=bp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Dr,this.stencilZFail=Dr,this.stencilZPass=Dr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==hs&&(i.blending=this.blending),this.side!==$i&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==ed&&(i.blendSrc=this.blendSrc),this.blendDst!==td&&(i.blendDst=this.blendDst),this.blendEquation!==ur&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Es&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==bp&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Dr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Dr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Dr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class av extends Fs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ye(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qn,this.combine=V0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const St=new z,ya=new Xe;class Zn{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Cp,this.updateRanges=[],this.gpuType=di,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)ya.fromBufferAttribute(this,n),ya.applyMatrix3(e),this.setXY(n,ya.x,ya.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)St.fromBufferAttribute(this,n),St.applyMatrix3(e),this.setXYZ(n,St.x,St.y,St.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)St.fromBufferAttribute(this,n),St.applyMatrix4(e),this.setXYZ(n,St.x,St.y,St.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)St.fromBufferAttribute(this,n),St.applyNormalMatrix(e),this.setXYZ(n,St.x,St.y,St.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)St.fromBufferAttribute(this,n),St.transformDirection(e),this.setXYZ(n,St.x,St.y,St.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=$r(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=jt(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=$r(n,this.array)),n}setX(e,n){return this.normalized&&(n=jt(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=$r(n,this.array)),n}setY(e,n){return this.normalized&&(n=jt(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=$r(n,this.array)),n}setZ(e,n){return this.normalized&&(n=jt(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=$r(n,this.array)),n}setW(e,n){return this.normalized&&(n=jt(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=jt(n,this.array),i=jt(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=jt(n,this.array),i=jt(i,this.array),r=jt(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=jt(n,this.array),i=jt(i,this.array),r=jt(r,this.array),s=jt(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Cp&&(e.usage=this.usage),e}}class lv extends Zn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class cv extends Zn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class At extends Zn{constructor(e,n,i){super(new Float32Array(e),n,i)}}let I1=0;const _n=new vt,Gc=new Nt,Gr=new z,dn=new jo,Ks=new jo,Rt=new z;class Gn extends Is{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:I1++}),this.uuid=Us(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(nv(e)?cv:lv)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new ke().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return _n.makeRotationFromQuaternion(e),this.applyMatrix4(_n),this}rotateX(e){return _n.makeRotationX(e),this.applyMatrix4(_n),this}rotateY(e){return _n.makeRotationY(e),this.applyMatrix4(_n),this}rotateZ(e){return _n.makeRotationZ(e),this.applyMatrix4(_n),this}translate(e,n,i){return _n.makeTranslation(e,n,i),this.applyMatrix4(_n),this}scale(e,n,i){return _n.makeScale(e,n,i),this.applyMatrix4(_n),this}lookAt(e){return Gc.lookAt(e),Gc.updateMatrix(),this.applyMatrix4(Gc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Gr).negate(),this.translate(Gr.x,Gr.y,Gr.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new At(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new jo);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];dn.setFromBufferAttribute(s),this.morphTargetsRelative?(Rt.addVectors(this.boundingBox.min,dn.min),this.boundingBox.expandByPoint(Rt),Rt.addVectors(this.boundingBox.max,dn.max),this.boundingBox.expandByPoint(Rt)):(this.boundingBox.expandByPoint(dn.min),this.boundingBox.expandByPoint(dn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new $f);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new z,1/0);return}if(e){const i=this.boundingSphere.center;if(dn.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];Ks.setFromBufferAttribute(a),this.morphTargetsRelative?(Rt.addVectors(dn.min,Ks.min),dn.expandByPoint(Rt),Rt.addVectors(dn.max,Ks.max),dn.expandByPoint(Rt)):(dn.expandByPoint(Ks.min),dn.expandByPoint(Ks.max))}dn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Rt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Rt));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,d=a.count;c<d;c++)Rt.fromBufferAttribute(a,c),l&&(Gr.fromBufferAttribute(e,c),Rt.add(Gr)),r=Math.max(r,i.distanceToSquared(Rt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Zn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let R=0;R<i.count;R++)a[R]=new z,l[R]=new z;const c=new z,d=new z,h=new z,f=new Xe,m=new Xe,y=new Xe,S=new z,p=new z;function u(R,D,x){c.fromBufferAttribute(i,R),d.fromBufferAttribute(i,D),h.fromBufferAttribute(i,x),f.fromBufferAttribute(s,R),m.fromBufferAttribute(s,D),y.fromBufferAttribute(s,x),d.sub(c),h.sub(c),m.sub(f),y.sub(f);const E=1/(m.x*y.y-y.x*m.y);isFinite(E)&&(S.copy(d).multiplyScalar(y.y).addScaledVector(h,-m.y).multiplyScalar(E),p.copy(h).multiplyScalar(m.x).addScaledVector(d,-y.x).multiplyScalar(E),a[R].add(S),a[D].add(S),a[x].add(S),l[R].add(p),l[D].add(p),l[x].add(p))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let R=0,D=v.length;R<D;++R){const x=v[R],E=x.start,U=x.count;for(let B=E,O=E+U;B<O;B+=3)u(e.getX(B+0),e.getX(B+1),e.getX(B+2))}const g=new z,M=new z,P=new z,b=new z;function T(R){P.fromBufferAttribute(r,R),b.copy(P);const D=a[R];g.copy(D),g.sub(P.multiplyScalar(P.dot(D))).normalize(),M.crossVectors(b,D);const E=M.dot(l[R])<0?-1:1;o.setXYZW(R,g.x,g.y,g.z,E)}for(let R=0,D=v.length;R<D;++R){const x=v[R],E=x.start,U=x.count;for(let B=E,O=E+U;B<O;B+=3)T(e.getX(B+0)),T(e.getX(B+1)),T(e.getX(B+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Zn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let f=0,m=i.count;f<m;f++)i.setXYZ(f,0,0,0);const r=new z,s=new z,o=new z,a=new z,l=new z,c=new z,d=new z,h=new z;if(e)for(let f=0,m=e.count;f<m;f+=3){const y=e.getX(f+0),S=e.getX(f+1),p=e.getX(f+2);r.fromBufferAttribute(n,y),s.fromBufferAttribute(n,S),o.fromBufferAttribute(n,p),d.subVectors(o,s),h.subVectors(r,s),d.cross(h),a.fromBufferAttribute(i,y),l.fromBufferAttribute(i,S),c.fromBufferAttribute(i,p),a.add(d),l.add(d),c.add(d),i.setXYZ(y,a.x,a.y,a.z),i.setXYZ(S,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,m=n.count;f<m;f+=3)r.fromBufferAttribute(n,f+0),s.fromBufferAttribute(n,f+1),o.fromBufferAttribute(n,f+2),d.subVectors(o,s),h.subVectors(r,s),d.cross(h),i.setXYZ(f+0,d.x,d.y,d.z),i.setXYZ(f+1,d.x,d.y,d.z),i.setXYZ(f+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Rt.fromBufferAttribute(e,n),Rt.normalize(),e.setXYZ(n,Rt.x,Rt.y,Rt.z)}toNonIndexed(){function e(a,l){const c=a.array,d=a.itemSize,h=a.normalized,f=new c.constructor(l.length*d);let m=0,y=0;for(let S=0,p=l.length;S<p;S++){a.isInterleavedBufferAttribute?m=l[S]*a.data.stride+a.offset:m=l[S]*d;for(let u=0;u<d;u++)f[y++]=c[m++]}return new Zn(f,d,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Gn,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let d=0,h=c.length;d<h;d++){const f=c[d],m=e(f,i);l.push(m)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let h=0,f=c.length;h<f;h++){const m=c[h];d.push(m.toJSON(e.data))}d.length>0&&(r[l]=d,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const c in r){const d=r[c];this.setAttribute(c,d.clone(n))}const s=e.morphAttributes;for(const c in s){const d=[],h=s[c];for(let f=0,m=h.length;f<m;f++)d.push(h[f].clone(n));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,d=o.length;c<d;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Gp=new vt,nr=new A1,Sa=new $f,Wp=new z,Ma=new z,Ea=new z,wa=new z,Wc=new z,Ta=new z,jp=new z,Aa=new z;class Mt extends Nt{constructor(e=new Gn,n=new av){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Ta.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const d=a[l],h=s[l];d!==0&&(Wc.fromBufferAttribute(h,e),o?Ta.addScaledVector(Wc,d):Ta.addScaledVector(Wc.sub(n),d))}n.add(Ta)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Sa.copy(i.boundingSphere),Sa.applyMatrix4(s),nr.copy(e.ray).recast(e.near),!(Sa.containsPoint(nr.origin)===!1&&(nr.intersectSphere(Sa,Wp)===null||nr.origin.distanceToSquared(Wp)>(e.far-e.near)**2))&&(Gp.copy(s).invert(),nr.copy(e.ray).applyMatrix4(Gp),!(i.boundingBox!==null&&nr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,nr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,d=s.attributes.uv1,h=s.attributes.normal,f=s.groups,m=s.drawRange;if(a!==null)if(Array.isArray(o))for(let y=0,S=f.length;y<S;y++){const p=f[y],u=o[p.materialIndex],v=Math.max(p.start,m.start),g=Math.min(a.count,Math.min(p.start+p.count,m.start+m.count));for(let M=v,P=g;M<P;M+=3){const b=a.getX(M),T=a.getX(M+1),R=a.getX(M+2);r=ba(this,u,e,i,c,d,h,b,T,R),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=p.materialIndex,n.push(r))}}else{const y=Math.max(0,m.start),S=Math.min(a.count,m.start+m.count);for(let p=y,u=S;p<u;p+=3){const v=a.getX(p),g=a.getX(p+1),M=a.getX(p+2);r=ba(this,o,e,i,c,d,h,v,g,M),r&&(r.faceIndex=Math.floor(p/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let y=0,S=f.length;y<S;y++){const p=f[y],u=o[p.materialIndex],v=Math.max(p.start,m.start),g=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let M=v,P=g;M<P;M+=3){const b=M,T=M+1,R=M+2;r=ba(this,u,e,i,c,d,h,b,T,R),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=p.materialIndex,n.push(r))}}else{const y=Math.max(0,m.start),S=Math.min(l.count,m.start+m.count);for(let p=y,u=S;p<u;p+=3){const v=p,g=p+1,M=p+2;r=ba(this,o,e,i,c,d,h,v,g,M),r&&(r.faceIndex=Math.floor(p/3),n.push(r))}}}}function U1(t,e,n,i,r,s,o,a){let l;if(e.side===on?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===$i,a),l===null)return null;Aa.copy(a),Aa.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(Aa);return c<n.near||c>n.far?null:{distance:c,point:Aa.clone(),object:t}}function ba(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,Ma),t.getVertexPosition(l,Ea),t.getVertexPosition(c,wa);const d=U1(t,e,n,i,Ma,Ea,wa,jp);if(d){const h=new z;On.getBarycoord(jp,Ma,Ea,wa,h),r&&(d.uv=On.getInterpolatedAttribute(r,a,l,c,h,new Xe)),s&&(d.uv1=On.getInterpolatedAttribute(s,a,l,c,h,new Xe)),o&&(d.normal=On.getInterpolatedAttribute(o,a,l,c,h,new z),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new z,materialIndex:0};On.getNormal(Ma,Ea,wa,f.normal),d.face=f,d.barycoord=h}return d}class Pr extends Gn{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],d=[],h=[];let f=0,m=0;y("z","y","x",-1,-1,i,n,e,o,s,0),y("z","y","x",1,-1,i,n,-e,o,s,1),y("x","z","y",1,1,e,i,n,r,o,2),y("x","z","y",1,-1,e,i,-n,r,o,3),y("x","y","z",1,-1,e,n,i,r,s,4),y("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new At(c,3)),this.setAttribute("normal",new At(d,3)),this.setAttribute("uv",new At(h,2));function y(S,p,u,v,g,M,P,b,T,R,D){const x=M/T,E=P/R,U=M/2,B=P/2,O=b/2,$=T+1,j=R+1;let Y=0,N=0;const K=new z;for(let ee=0;ee<j;ee++){const ae=ee*E-B;for(let we=0;we<$;we++){const Oe=we*x-U;K[S]=Oe*v,K[p]=ae*g,K[u]=O,c.push(K.x,K.y,K.z),K[S]=0,K[p]=0,K[u]=b>0?1:-1,d.push(K.x,K.y,K.z),h.push(we/T),h.push(1-ee/R),Y+=1}}for(let ee=0;ee<R;ee++)for(let ae=0;ae<T;ae++){const we=f+ae+$*ee,Oe=f+ae+$*(ee+1),q=f+(ae+1)+$*(ee+1),re=f+(ae+1)+$*ee;l.push(we,Oe,re),l.push(Oe,q,re),N+=6}a.addGroup(m,N,D),m+=N,f+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Pr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Cs(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function Xt(t){const e={};for(let n=0;n<t.length;n++){const i=Cs(t[n]);for(const r in i)e[r]=i[r]}return e}function F1(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function uv(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:et.workingColorSpace}const k1={clone:Cs,merge:Xt};var O1=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,z1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Yi extends Fs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=O1,this.fragmentShader=z1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Cs(e.uniforms),this.uniformsGroups=F1(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class dv extends Nt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new vt,this.projectionMatrix=new vt,this.projectionMatrixInverse=new vt,this.coordinateSystem=fi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const bi=new z,Xp=new Xe,$p=new Xe;class Mn extends dv{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Do*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ho*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Do*2*Math.atan(Math.tan(ho*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){bi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(bi.x,bi.y).multiplyScalar(-e/bi.z),bi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(bi.x,bi.y).multiplyScalar(-e/bi.z)}getViewSize(e,n){return this.getViewBounds(e,Xp,$p),n.subVectors($p,Xp)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(ho*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Wr=-90,jr=1;class B1 extends Nt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Mn(Wr,jr,e,n);r.layers=this.layers,this.add(r);const s=new Mn(Wr,jr,e,n);s.layers=this.layers,this.add(s);const o=new Mn(Wr,jr,e,n);o.layers=this.layers,this.add(o);const a=new Mn(Wr,jr,e,n);a.layers=this.layers,this.add(a);const l=new Mn(Wr,jr,e,n);l.layers=this.layers,this.add(l);const c=new Mn(Wr,jr,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const c of n)this.remove(c);if(e===fi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Al)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,d]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),y=e.xr.enabled;e.xr.enabled=!1;const S=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=S,e.setRenderTarget(i,5,r),e.render(n,d),e.setRenderTarget(h,f,m),e.xr.enabled=y,i.texture.needsPMREMUpdate=!0}}class fv extends an{constructor(e,n,i,r,s,o,a,l,c,d){e=e!==void 0?e:[],n=n!==void 0?n:ws,super(e,n,i,r,s,o,a,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class H1 extends Ar{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new fv(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:kn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Pr(5,5,5),s=new Yi({name:"CubemapFromEquirect",uniforms:Cs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:on,blending:Gi});s.uniforms.tEquirect.value=n;const o=new Mt(r,s),a=n.minFilter;return n.minFilter===gr&&(n.minFilter=kn),new B1(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}const jc=new z,V1=new z,G1=new ke;class lr{constructor(e=new z(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=jc.subVectors(i,n).cross(V1.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(jc),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||G1.getNormalMatrix(e),r=this.coplanarPoint(jc).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ir=new $f,Ca=new z;class Yf{constructor(e=new lr,n=new lr,i=new lr,r=new lr,s=new lr,o=new lr){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=fi){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],d=r[5],h=r[6],f=r[7],m=r[8],y=r[9],S=r[10],p=r[11],u=r[12],v=r[13],g=r[14],M=r[15];if(i[0].setComponents(l-s,f-c,p-m,M-u).normalize(),i[1].setComponents(l+s,f+c,p+m,M+u).normalize(),i[2].setComponents(l+o,f+d,p+y,M+v).normalize(),i[3].setComponents(l-o,f-d,p-y,M-v).normalize(),i[4].setComponents(l-a,f-h,p-S,M-g).normalize(),n===fi)i[5].setComponents(l+a,f+h,p+S,M+g).normalize();else if(n===Al)i[5].setComponents(a,h,S,g).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ir.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),ir.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ir)}intersectsSprite(e){return ir.center.set(0,0,0),ir.radius=.7071067811865476,ir.applyMatrix4(e.matrixWorld),this.intersectsSphere(ir)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Ca.x=r.normal.x>0?e.max.x:e.min.x,Ca.y=r.normal.y>0?e.max.y:e.min.y,Ca.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ca)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function hv(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function W1(t){const e=new WeakMap;function n(a,l){const c=a.array,d=a.usage,h=c.byteLength,f=t.createBuffer();t.bindBuffer(l,f),t.bufferData(l,c,d),a.onUploadCallback();let m;if(c instanceof Float32Array)m=t.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?m=t.HALF_FLOAT:m=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=t.SHORT;else if(c instanceof Uint32Array)m=t.UNSIGNED_INT;else if(c instanceof Int32Array)m=t.INT;else if(c instanceof Int8Array)m=t.BYTE;else if(c instanceof Uint8Array)m=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,l,c){const d=l.array,h=l.updateRanges;if(t.bindBuffer(c,a),h.length===0)t.bufferSubData(c,0,d);else{h.sort((m,y)=>m.start-y.start);let f=0;for(let m=1;m<h.length;m++){const y=h[f],S=h[m];S.start<=y.start+y.count+1?y.count=Math.max(y.count,S.start+S.count-y.start):(++f,h[f]=S)}h.length=f+1;for(let m=0,y=h.length;m<y;m++){const S=h[m];t.bufferSubData(c,S.start*d.BYTES_PER_ELEMENT,d,S.start,S.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const d=e.get(a);(!d||d.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}class Rs extends Gn{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,d=l+1,h=e/a,f=n/l,m=[],y=[],S=[],p=[];for(let u=0;u<d;u++){const v=u*f-o;for(let g=0;g<c;g++){const M=g*h-s;y.push(M,-v,0),S.push(0,0,1),p.push(g/a),p.push(1-u/l)}}for(let u=0;u<l;u++)for(let v=0;v<a;v++){const g=v+c*u,M=v+c*(u+1),P=v+1+c*(u+1),b=v+1+c*u;m.push(g,M,b),m.push(M,P,b)}this.setIndex(m),this.setAttribute("position",new At(y,3)),this.setAttribute("normal",new At(S,3)),this.setAttribute("uv",new At(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Rs(e.width,e.height,e.widthSegments,e.heightSegments)}}var j1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,X1=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,$1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Y1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,q1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,K1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Z1=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Q1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,J1=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,eS=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,tS=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,nS=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,iS=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,rS=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,sS=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,oS=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,aS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,lS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,cS=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,uS=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,dS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,fS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,hS=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,pS=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,mS=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,gS=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,vS=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,xS=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,_S=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,yS=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,SS="gl_FragColor = linearToOutputTexel( gl_FragColor );",MS=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ES=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,wS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,TS=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,AS=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,bS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,CS=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,RS=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,PS=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,LS=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,NS=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,DS=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,IS=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,US=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,FS=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,kS=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,OS=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,zS=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,BS=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,HS=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,VS=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,GS=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,WS=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,jS=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,XS=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,$S=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,YS=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,qS=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,KS=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ZS=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,QS=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,JS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,eM=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,tM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,nM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,iM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,rM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,sM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,oM=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,aM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,lM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,cM=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,uM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,dM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,fM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,hM=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,pM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,mM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,gM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,vM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,xM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,_M=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,yM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,SM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,MM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,EM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,wM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,TM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,AM=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,bM=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,CM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,RM=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,PM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,LM=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,NM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,DM=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,IM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,UM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,FM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,kM=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,OM=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,zM=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,BM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,HM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,VM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,GM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const WM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,jM=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,XM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$M=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,YM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,KM=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,ZM=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,QM=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,JM=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,eE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,tE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nE=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,iE=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,rE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,sE=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,oE=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,aE=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lE=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,cE=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,uE=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,dE=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,fE=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,hE=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pE=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,mE=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gE=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,vE=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xE=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,_E=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,yE=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,SE=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ME=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,EE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Fe={alphahash_fragment:j1,alphahash_pars_fragment:X1,alphamap_fragment:$1,alphamap_pars_fragment:Y1,alphatest_fragment:q1,alphatest_pars_fragment:K1,aomap_fragment:Z1,aomap_pars_fragment:Q1,batching_pars_vertex:J1,batching_vertex:eS,begin_vertex:tS,beginnormal_vertex:nS,bsdfs:iS,iridescence_fragment:rS,bumpmap_pars_fragment:sS,clipping_planes_fragment:oS,clipping_planes_pars_fragment:aS,clipping_planes_pars_vertex:lS,clipping_planes_vertex:cS,color_fragment:uS,color_pars_fragment:dS,color_pars_vertex:fS,color_vertex:hS,common:pS,cube_uv_reflection_fragment:mS,defaultnormal_vertex:gS,displacementmap_pars_vertex:vS,displacementmap_vertex:xS,emissivemap_fragment:_S,emissivemap_pars_fragment:yS,colorspace_fragment:SS,colorspace_pars_fragment:MS,envmap_fragment:ES,envmap_common_pars_fragment:wS,envmap_pars_fragment:TS,envmap_pars_vertex:AS,envmap_physical_pars_fragment:kS,envmap_vertex:bS,fog_vertex:CS,fog_pars_vertex:RS,fog_fragment:PS,fog_pars_fragment:LS,gradientmap_pars_fragment:NS,lightmap_pars_fragment:DS,lights_lambert_fragment:IS,lights_lambert_pars_fragment:US,lights_pars_begin:FS,lights_toon_fragment:OS,lights_toon_pars_fragment:zS,lights_phong_fragment:BS,lights_phong_pars_fragment:HS,lights_physical_fragment:VS,lights_physical_pars_fragment:GS,lights_fragment_begin:WS,lights_fragment_maps:jS,lights_fragment_end:XS,logdepthbuf_fragment:$S,logdepthbuf_pars_fragment:YS,logdepthbuf_pars_vertex:qS,logdepthbuf_vertex:KS,map_fragment:ZS,map_pars_fragment:QS,map_particle_fragment:JS,map_particle_pars_fragment:eM,metalnessmap_fragment:tM,metalnessmap_pars_fragment:nM,morphinstance_vertex:iM,morphcolor_vertex:rM,morphnormal_vertex:sM,morphtarget_pars_vertex:oM,morphtarget_vertex:aM,normal_fragment_begin:lM,normal_fragment_maps:cM,normal_pars_fragment:uM,normal_pars_vertex:dM,normal_vertex:fM,normalmap_pars_fragment:hM,clearcoat_normal_fragment_begin:pM,clearcoat_normal_fragment_maps:mM,clearcoat_pars_fragment:gM,iridescence_pars_fragment:vM,opaque_fragment:xM,packing:_M,premultiplied_alpha_fragment:yM,project_vertex:SM,dithering_fragment:MM,dithering_pars_fragment:EM,roughnessmap_fragment:wM,roughnessmap_pars_fragment:TM,shadowmap_pars_fragment:AM,shadowmap_pars_vertex:bM,shadowmap_vertex:CM,shadowmask_pars_fragment:RM,skinbase_vertex:PM,skinning_pars_vertex:LM,skinning_vertex:NM,skinnormal_vertex:DM,specularmap_fragment:IM,specularmap_pars_fragment:UM,tonemapping_fragment:FM,tonemapping_pars_fragment:kM,transmission_fragment:OM,transmission_pars_fragment:zM,uv_pars_fragment:BM,uv_pars_vertex:HM,uv_vertex:VM,worldpos_vertex:GM,background_vert:WM,background_frag:jM,backgroundCube_vert:XM,backgroundCube_frag:$M,cube_vert:YM,cube_frag:qM,depth_vert:KM,depth_frag:ZM,distanceRGBA_vert:QM,distanceRGBA_frag:JM,equirect_vert:eE,equirect_frag:tE,linedashed_vert:nE,linedashed_frag:iE,meshbasic_vert:rE,meshbasic_frag:sE,meshlambert_vert:oE,meshlambert_frag:aE,meshmatcap_vert:lE,meshmatcap_frag:cE,meshnormal_vert:uE,meshnormal_frag:dE,meshphong_vert:fE,meshphong_frag:hE,meshphysical_vert:pE,meshphysical_frag:mE,meshtoon_vert:gE,meshtoon_frag:vE,points_vert:xE,points_frag:_E,shadow_vert:yE,shadow_frag:SE,sprite_vert:ME,sprite_frag:EE},le={common:{diffuse:{value:new Ye(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ke}},envmap:{envMap:{value:null},envMapRotation:{value:new ke},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ke},normalScale:{value:new Xe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ye(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ye(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0},uvTransform:{value:new ke}},sprite:{diffuse:{value:new Ye(16777215)},opacity:{value:1},center:{value:new Xe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}}},$n={basic:{uniforms:Xt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.fog]),vertexShader:Fe.meshbasic_vert,fragmentShader:Fe.meshbasic_frag},lambert:{uniforms:Xt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new Ye(0)}}]),vertexShader:Fe.meshlambert_vert,fragmentShader:Fe.meshlambert_frag},phong:{uniforms:Xt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new Ye(0)},specular:{value:new Ye(1118481)},shininess:{value:30}}]),vertexShader:Fe.meshphong_vert,fragmentShader:Fe.meshphong_frag},standard:{uniforms:Xt([le.common,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.roughnessmap,le.metalnessmap,le.fog,le.lights,{emissive:{value:new Ye(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Fe.meshphysical_vert,fragmentShader:Fe.meshphysical_frag},toon:{uniforms:Xt([le.common,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.gradientmap,le.fog,le.lights,{emissive:{value:new Ye(0)}}]),vertexShader:Fe.meshtoon_vert,fragmentShader:Fe.meshtoon_frag},matcap:{uniforms:Xt([le.common,le.bumpmap,le.normalmap,le.displacementmap,le.fog,{matcap:{value:null}}]),vertexShader:Fe.meshmatcap_vert,fragmentShader:Fe.meshmatcap_frag},points:{uniforms:Xt([le.points,le.fog]),vertexShader:Fe.points_vert,fragmentShader:Fe.points_frag},dashed:{uniforms:Xt([le.common,le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Fe.linedashed_vert,fragmentShader:Fe.linedashed_frag},depth:{uniforms:Xt([le.common,le.displacementmap]),vertexShader:Fe.depth_vert,fragmentShader:Fe.depth_frag},normal:{uniforms:Xt([le.common,le.bumpmap,le.normalmap,le.displacementmap,{opacity:{value:1}}]),vertexShader:Fe.meshnormal_vert,fragmentShader:Fe.meshnormal_frag},sprite:{uniforms:Xt([le.sprite,le.fog]),vertexShader:Fe.sprite_vert,fragmentShader:Fe.sprite_frag},background:{uniforms:{uvTransform:{value:new ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Fe.background_vert,fragmentShader:Fe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ke}},vertexShader:Fe.backgroundCube_vert,fragmentShader:Fe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Fe.cube_vert,fragmentShader:Fe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Fe.equirect_vert,fragmentShader:Fe.equirect_frag},distanceRGBA:{uniforms:Xt([le.common,le.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Fe.distanceRGBA_vert,fragmentShader:Fe.distanceRGBA_frag},shadow:{uniforms:Xt([le.lights,le.fog,{color:{value:new Ye(0)},opacity:{value:1}}]),vertexShader:Fe.shadow_vert,fragmentShader:Fe.shadow_frag}};$n.physical={uniforms:Xt([$n.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ke},clearcoatNormalScale:{value:new Xe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ke},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ke},sheen:{value:0},sheenColor:{value:new Ye(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ke},transmissionSamplerSize:{value:new Xe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ke},attenuationDistance:{value:0},attenuationColor:{value:new Ye(0)},specularColor:{value:new Ye(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ke},anisotropyVector:{value:new Xe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ke}}]),vertexShader:Fe.meshphysical_vert,fragmentShader:Fe.meshphysical_frag};const Ra={r:0,b:0,g:0},rr=new Qn,wE=new vt;function TE(t,e,n,i,r,s,o){const a=new Ye(0);let l=s===!0?0:1,c,d,h=null,f=0,m=null;function y(v){let g=v.isScene===!0?v.background:null;return g&&g.isTexture&&(g=(v.backgroundBlurriness>0?n:e).get(g)),g}function S(v){let g=!1;const M=y(v);M===null?u(a,l):M&&M.isColor&&(u(M,1),g=!0);const P=t.xr.getEnvironmentBlendMode();P==="additive"?i.buffers.color.setClear(0,0,0,1,o):P==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||g)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function p(v,g){const M=y(g);M&&(M.isCubeTexture||M.mapping===jl)?(d===void 0&&(d=new Mt(new Pr(1,1,1),new Yi({name:"BackgroundCubeMaterial",uniforms:Cs($n.backgroundCube.uniforms),vertexShader:$n.backgroundCube.vertexShader,fragmentShader:$n.backgroundCube.fragmentShader,side:on,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(P,b,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(d)),rr.copy(g.backgroundRotation),rr.x*=-1,rr.y*=-1,rr.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(rr.y*=-1,rr.z*=-1),d.material.uniforms.envMap.value=M,d.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=g.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(wE.makeRotationFromEuler(rr)),d.material.toneMapped=et.getTransfer(M.colorSpace)!==lt,(h!==M||f!==M.version||m!==t.toneMapping)&&(d.material.needsUpdate=!0,h=M,f=M.version,m=t.toneMapping),d.layers.enableAll(),v.unshift(d,d.geometry,d.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new Mt(new Rs(2,2),new Yi({name:"BackgroundMaterial",uniforms:Cs($n.background.uniforms),vertexShader:$n.background.vertexShader,fragmentShader:$n.background.fragmentShader,side:$i,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,c.material.toneMapped=et.getTransfer(M.colorSpace)!==lt,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(h!==M||f!==M.version||m!==t.toneMapping)&&(c.material.needsUpdate=!0,h=M,f=M.version,m=t.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null))}function u(v,g){v.getRGB(Ra,uv(t)),i.buffers.color.setClear(Ra.r,Ra.g,Ra.b,g,o)}return{getClearColor:function(){return a},setClearColor:function(v,g=1){a.set(v),l=g,u(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(v){l=v,u(a,l)},render:S,addToRenderList:p}}function AE(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=f(null);let s=r,o=!1;function a(x,E,U,B,O){let $=!1;const j=h(B,U,E);s!==j&&(s=j,c(s.object)),$=m(x,B,U,O),$&&y(x,B,U,O),O!==null&&e.update(O,t.ELEMENT_ARRAY_BUFFER),($||o)&&(o=!1,M(x,E,U,B),O!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(O).buffer))}function l(){return t.createVertexArray()}function c(x){return t.bindVertexArray(x)}function d(x){return t.deleteVertexArray(x)}function h(x,E,U){const B=U.wireframe===!0;let O=i[x.id];O===void 0&&(O={},i[x.id]=O);let $=O[E.id];$===void 0&&($={},O[E.id]=$);let j=$[B];return j===void 0&&(j=f(l()),$[B]=j),j}function f(x){const E=[],U=[],B=[];for(let O=0;O<n;O++)E[O]=0,U[O]=0,B[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:E,enabledAttributes:U,attributeDivisors:B,object:x,attributes:{},index:null}}function m(x,E,U,B){const O=s.attributes,$=E.attributes;let j=0;const Y=U.getAttributes();for(const N in Y)if(Y[N].location>=0){const ee=O[N];let ae=$[N];if(ae===void 0&&(N==="instanceMatrix"&&x.instanceMatrix&&(ae=x.instanceMatrix),N==="instanceColor"&&x.instanceColor&&(ae=x.instanceColor)),ee===void 0||ee.attribute!==ae||ae&&ee.data!==ae.data)return!0;j++}return s.attributesNum!==j||s.index!==B}function y(x,E,U,B){const O={},$=E.attributes;let j=0;const Y=U.getAttributes();for(const N in Y)if(Y[N].location>=0){let ee=$[N];ee===void 0&&(N==="instanceMatrix"&&x.instanceMatrix&&(ee=x.instanceMatrix),N==="instanceColor"&&x.instanceColor&&(ee=x.instanceColor));const ae={};ae.attribute=ee,ee&&ee.data&&(ae.data=ee.data),O[N]=ae,j++}s.attributes=O,s.attributesNum=j,s.index=B}function S(){const x=s.newAttributes;for(let E=0,U=x.length;E<U;E++)x[E]=0}function p(x){u(x,0)}function u(x,E){const U=s.newAttributes,B=s.enabledAttributes,O=s.attributeDivisors;U[x]=1,B[x]===0&&(t.enableVertexAttribArray(x),B[x]=1),O[x]!==E&&(t.vertexAttribDivisor(x,E),O[x]=E)}function v(){const x=s.newAttributes,E=s.enabledAttributes;for(let U=0,B=E.length;U<B;U++)E[U]!==x[U]&&(t.disableVertexAttribArray(U),E[U]=0)}function g(x,E,U,B,O,$,j){j===!0?t.vertexAttribIPointer(x,E,U,O,$):t.vertexAttribPointer(x,E,U,B,O,$)}function M(x,E,U,B){S();const O=B.attributes,$=U.getAttributes(),j=E.defaultAttributeValues;for(const Y in $){const N=$[Y];if(N.location>=0){let K=O[Y];if(K===void 0&&(Y==="instanceMatrix"&&x.instanceMatrix&&(K=x.instanceMatrix),Y==="instanceColor"&&x.instanceColor&&(K=x.instanceColor)),K!==void 0){const ee=K.normalized,ae=K.itemSize,we=e.get(K);if(we===void 0)continue;const Oe=we.buffer,q=we.type,re=we.bytesPerElement,fe=q===t.INT||q===t.UNSIGNED_INT||K.gpuType===zf;if(K.isInterleavedBufferAttribute){const de=K.data,De=de.stride,Re=K.offset;if(de.isInstancedInterleavedBuffer){for(let Ve=0;Ve<N.locationSize;Ve++)u(N.location+Ve,de.meshPerAttribute);x.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let Ve=0;Ve<N.locationSize;Ve++)p(N.location+Ve);t.bindBuffer(t.ARRAY_BUFFER,Oe);for(let Ve=0;Ve<N.locationSize;Ve++)g(N.location+Ve,ae/N.locationSize,q,ee,De*re,(Re+ae/N.locationSize*Ve)*re,fe)}else{if(K.isInstancedBufferAttribute){for(let de=0;de<N.locationSize;de++)u(N.location+de,K.meshPerAttribute);x.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let de=0;de<N.locationSize;de++)p(N.location+de);t.bindBuffer(t.ARRAY_BUFFER,Oe);for(let de=0;de<N.locationSize;de++)g(N.location+de,ae/N.locationSize,q,ee,ae*re,ae/N.locationSize*de*re,fe)}}else if(j!==void 0){const ee=j[Y];if(ee!==void 0)switch(ee.length){case 2:t.vertexAttrib2fv(N.location,ee);break;case 3:t.vertexAttrib3fv(N.location,ee);break;case 4:t.vertexAttrib4fv(N.location,ee);break;default:t.vertexAttrib1fv(N.location,ee)}}}}v()}function P(){R();for(const x in i){const E=i[x];for(const U in E){const B=E[U];for(const O in B)d(B[O].object),delete B[O];delete E[U]}delete i[x]}}function b(x){if(i[x.id]===void 0)return;const E=i[x.id];for(const U in E){const B=E[U];for(const O in B)d(B[O].object),delete B[O];delete E[U]}delete i[x.id]}function T(x){for(const E in i){const U=i[E];if(U[x.id]===void 0)continue;const B=U[x.id];for(const O in B)d(B[O].object),delete B[O];delete U[x.id]}}function R(){D(),o=!0,s!==r&&(s=r,c(s.object))}function D(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:R,resetDefaultState:D,dispose:P,releaseStatesOfGeometry:b,releaseStatesOfProgram:T,initAttributes:S,enableAttribute:p,disableUnusedAttributes:v}}function bE(t,e,n){let i;function r(c){i=c}function s(c,d){t.drawArrays(i,c,d),n.update(d,i,1)}function o(c,d,h){h!==0&&(t.drawArraysInstanced(i,c,d,h),n.update(d,i,h))}function a(c,d,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,d,0,h);let m=0;for(let y=0;y<h;y++)m+=d[y];n.update(m,i,1)}function l(c,d,h,f){if(h===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let y=0;y<c.length;y++)o(c[y],d[y],f[y]);else{m.multiDrawArraysInstancedWEBGL(i,c,0,d,0,f,0,h);let y=0;for(let S=0;S<h;S++)y+=d[S];for(let S=0;S<f.length;S++)n.update(y,i,f[S])}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function CE(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(T){return!(T!==zn&&i.convert(T)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){const R=T===Go&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==xi&&i.convert(T)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==di&&!R)}function l(T){if(T==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const d=l(c);d!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);const h=n.logarithmicDepthBuffer===!0,f=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(f===!0){const T=e.get("EXT_clip_control");T.clipControlEXT(T.LOWER_LEFT_EXT,T.ZERO_TO_ONE_EXT)}const m=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),y=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=t.getParameter(t.MAX_TEXTURE_SIZE),p=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),u=t.getParameter(t.MAX_VERTEX_ATTRIBS),v=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),g=t.getParameter(t.MAX_VARYING_VECTORS),M=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),P=y>0,b=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:f,maxTextures:m,maxVertexTextures:y,maxTextureSize:S,maxCubemapSize:p,maxAttributes:u,maxVertexUniforms:v,maxVaryings:g,maxFragmentUniforms:M,vertexTextures:P,maxSamples:b}}function RE(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new lr,a=new ke,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const m=h.length!==0||f||i!==0||r;return r=f,i=h.length,m},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){n=d(h,f,0)},this.setState=function(h,f,m){const y=h.clippingPlanes,S=h.clipIntersection,p=h.clipShadows,u=t.get(h);if(!r||y===null||y.length===0||s&&!p)s?d(null):c();else{const v=s?0:i,g=v*4;let M=u.clippingState||null;l.value=M,M=d(y,f,g,m);for(let P=0;P!==g;++P)M[P]=n[P];u.clippingState=M,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function d(h,f,m,y){const S=h!==null?h.length:0;let p=null;if(S!==0){if(p=l.value,y!==!0||p===null){const u=m+S*4,v=f.matrixWorldInverse;a.getNormalMatrix(v),(p===null||p.length<u)&&(p=new Float32Array(u));for(let g=0,M=m;g!==S;++g,M+=4)o.copy(h[g]).applyMatrix4(v,a),o.normal.toArray(p,M),p[M+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=S,e.numIntersection=0,p}}function PE(t){let e=new WeakMap;function n(o,a){return a===cd?o.mapping=ws:a===ud&&(o.mapping=Ts),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===cd||a===ud)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new H1(l.height);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",r),n(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class qf extends dv{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=d*this.view.offsetY,l=a-d*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const os=4,Yp=[.125,.215,.35,.446,.526,.582],dr=20,Xc=new qf,qp=new Ye;let $c=null,Yc=0,qc=0,Kc=!1;const cr=(1+Math.sqrt(5))/2,Xr=1/cr,Kp=[new z(-cr,Xr,0),new z(cr,Xr,0),new z(-Xr,0,cr),new z(Xr,0,cr),new z(0,cr,-Xr),new z(0,cr,Xr),new z(-1,1,-1),new z(1,1,-1),new z(-1,1,1),new z(1,1,1)];class Zp{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){$c=this._renderer.getRenderTarget(),Yc=this._renderer.getActiveCubeFace(),qc=this._renderer.getActiveMipmapLevel(),Kc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=em(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Jp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget($c,Yc,qc),this._renderer.xr.enabled=Kc,e.scissorTest=!1,Pa(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===ws||e.mapping===Ts?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),$c=this._renderer.getRenderTarget(),Yc=this._renderer.getActiveCubeFace(),qc=this._renderer.getActiveMipmapLevel(),Kc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:kn,minFilter:kn,generateMipmaps:!1,type:Go,format:zn,colorSpace:Qi,depthBuffer:!1},r=Qp(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Qp(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=LE(s)),this._blurMaterial=NE(s,e,n)}return r}_compileMaterial(e){const n=new Mt(this._lodPlanes[0],e);this._renderer.compile(n,Xc)}_sceneToCubeUV(e,n,i,r){const a=new Mn(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,f=d.toneMapping;d.getClearColor(qp),d.toneMapping=Wi,d.autoClear=!1;const m=new av({name:"PMREM.Background",side:on,depthWrite:!1,depthTest:!1}),y=new Mt(new Pr,m);let S=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,S=!0):(m.color.copy(qp),S=!0);for(let u=0;u<6;u++){const v=u%3;v===0?(a.up.set(0,l[u],0),a.lookAt(c[u],0,0)):v===1?(a.up.set(0,0,l[u]),a.lookAt(0,c[u],0)):(a.up.set(0,l[u],0),a.lookAt(0,0,c[u]));const g=this._cubeSize;Pa(r,v*g,u>2?g:0,g,g),d.setRenderTarget(r),S&&d.render(y,a),d.render(e,a)}y.geometry.dispose(),y.material.dispose(),d.toneMapping=f,d.autoClear=h,e.background=p}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===ws||e.mapping===Ts;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=em()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Jp());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Mt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Pa(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,Xc)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Kp[(r-s-1)%Kp.length];this._blur(e,s-1,s,o,a)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,h=new Mt(this._lodPlanes[r],c),f=c.uniforms,m=this._sizeLods[i]-1,y=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*dr-1),S=s/y,p=isFinite(s)?1+Math.floor(d*S):dr;p>dr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${dr}`);const u=[];let v=0;for(let T=0;T<dr;++T){const R=T/S,D=Math.exp(-R*R/2);u.push(D),T===0?v+=D:T<p&&(v+=2*D)}for(let T=0;T<u.length;T++)u[T]=u[T]/v;f.envMap.value=e.texture,f.samples.value=p,f.weights.value=u,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:g}=this;f.dTheta.value=y,f.mipInt.value=g-i;const M=this._sizeLods[r],P=3*M*(r>g-os?r-g+os:0),b=4*(this._cubeSize-M);Pa(n,P,b,3*M,2*M),l.setRenderTarget(n),l.render(h,Xc)}}function LE(t){const e=[],n=[],i=[];let r=t;const s=t-os+1+Yp.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-os?l=Yp[o-t+os-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),d=-c,h=1+c,f=[d,d,h,d,h,h,d,d,h,h,d,h],m=6,y=6,S=3,p=2,u=1,v=new Float32Array(S*y*m),g=new Float32Array(p*y*m),M=new Float32Array(u*y*m);for(let b=0;b<m;b++){const T=b%3*2/3-1,R=b>2?0:-1,D=[T,R,0,T+2/3,R,0,T+2/3,R+1,0,T,R,0,T+2/3,R+1,0,T,R+1,0];v.set(D,S*y*b),g.set(f,p*y*b);const x=[b,b,b,b,b,b];M.set(x,u*y*b)}const P=new Gn;P.setAttribute("position",new Zn(v,S)),P.setAttribute("uv",new Zn(g,p)),P.setAttribute("faceIndex",new Zn(M,u)),e.push(P),r>os&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function Qp(t,e,n){const i=new Ar(t,e,n);return i.texture.mapping=jl,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Pa(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function NE(t,e,n){const i=new Float32Array(dr),r=new z(0,1,0);return new Yi({name:"SphericalGaussianBlur",defines:{n:dr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Kf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Gi,depthTest:!1,depthWrite:!1})}function Jp(){return new Yi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Kf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Gi,depthTest:!1,depthWrite:!1})}function em(){return new Yi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Kf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Gi,depthTest:!1,depthWrite:!1})}function Kf(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function DE(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===cd||l===ud,d=l===ws||l===Ts;if(c||d){let h=e.get(a);const f=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return n===null&&(n=new Zp(t)),h=c?n.fromEquirectangular(a,h):n.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const m=a.image;return c&&m&&m.height>0||d&&m&&r(m)?(n===null&&(n=new Zp(t)),h=c?n.fromEquirectangular(a):n.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",s),h.texture):null}}}return a}function r(a){let l=0;const c=6;for(let d=0;d<c;d++)a[d]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function IE(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&Ka("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function UE(t,e,n,i){const r={},s=new WeakMap;function o(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const y in f.attributes)e.remove(f.attributes[y]);for(const y in f.morphAttributes){const S=f.morphAttributes[y];for(let p=0,u=S.length;p<u;p++)e.remove(S[p])}f.removeEventListener("dispose",o),delete r[f.id];const m=s.get(f);m&&(e.remove(m),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,n.memory.geometries--}function a(h,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,n.memory.geometries++),f}function l(h){const f=h.attributes;for(const y in f)e.update(f[y],t.ARRAY_BUFFER);const m=h.morphAttributes;for(const y in m){const S=m[y];for(let p=0,u=S.length;p<u;p++)e.update(S[p],t.ARRAY_BUFFER)}}function c(h){const f=[],m=h.index,y=h.attributes.position;let S=0;if(m!==null){const v=m.array;S=m.version;for(let g=0,M=v.length;g<M;g+=3){const P=v[g+0],b=v[g+1],T=v[g+2];f.push(P,b,b,T,T,P)}}else if(y!==void 0){const v=y.array;S=y.version;for(let g=0,M=v.length/3-1;g<M;g+=3){const P=g+0,b=g+1,T=g+2;f.push(P,b,b,T,T,P)}}else return;const p=new(nv(f)?cv:lv)(f,1);p.version=S;const u=s.get(h);u&&e.remove(u),s.set(h,p)}function d(h){const f=s.get(h);if(f){const m=h.index;m!==null&&f.version<m.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:d}}function FE(t,e,n){let i;function r(f){i=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function l(f,m){t.drawElements(i,m,s,f*o),n.update(m,i,1)}function c(f,m,y){y!==0&&(t.drawElementsInstanced(i,m,s,f*o,y),n.update(m,i,y))}function d(f,m,y){if(y===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,m,0,s,f,0,y);let p=0;for(let u=0;u<y;u++)p+=m[u];n.update(p,i,1)}function h(f,m,y,S){if(y===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let u=0;u<f.length;u++)c(f[u]/o,m[u],S[u]);else{p.multiDrawElementsInstancedWEBGL(i,m,0,s,f,0,S,0,y);let u=0;for(let v=0;v<y;v++)u+=m[v];for(let v=0;v<S.length;v++)n.update(u,i,S[v])}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=d,this.renderMultiDrawInstances=h}function kE(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function OE(t,e,n){const i=new WeakMap,r=new gt;function s(o,a,l){const c=o.morphTargetInfluences,d=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=d!==void 0?d.length:0;let f=i.get(a);if(f===void 0||f.count!==h){let x=function(){R.dispose(),i.delete(a),a.removeEventListener("dispose",x)};var m=x;f!==void 0&&f.texture.dispose();const y=a.morphAttributes.position!==void 0,S=a.morphAttributes.normal!==void 0,p=a.morphAttributes.color!==void 0,u=a.morphAttributes.position||[],v=a.morphAttributes.normal||[],g=a.morphAttributes.color||[];let M=0;y===!0&&(M=1),S===!0&&(M=2),p===!0&&(M=3);let P=a.attributes.position.count*M,b=1;P>e.maxTextureSize&&(b=Math.ceil(P/e.maxTextureSize),P=e.maxTextureSize);const T=new Float32Array(P*b*4*h),R=new rv(T,P,b,h);R.type=di,R.needsUpdate=!0;const D=M*4;for(let E=0;E<h;E++){const U=u[E],B=v[E],O=g[E],$=P*b*4*E;for(let j=0;j<U.count;j++){const Y=j*D;y===!0&&(r.fromBufferAttribute(U,j),T[$+Y+0]=r.x,T[$+Y+1]=r.y,T[$+Y+2]=r.z,T[$+Y+3]=0),S===!0&&(r.fromBufferAttribute(B,j),T[$+Y+4]=r.x,T[$+Y+5]=r.y,T[$+Y+6]=r.z,T[$+Y+7]=0),p===!0&&(r.fromBufferAttribute(O,j),T[$+Y+8]=r.x,T[$+Y+9]=r.y,T[$+Y+10]=r.z,T[$+Y+11]=O.itemSize===4?r.w:1)}}f={count:h,texture:R,size:new Xe(P,b)},i.set(a,f),a.addEventListener("dispose",x)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let y=0;for(let p=0;p<c.length;p++)y+=c[p];const S=a.morphTargetsRelative?1:1-y;l.getUniforms().setValue(t,"morphTargetBaseInfluence",S),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",f.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",f.size)}return{update:s}}function zE(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,d=l.geometry,h=e.get(l,d);if(r.get(h)!==c&&(e.update(h),r.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==c&&(f.update(),r.set(f,c))}return h}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:o}}class pv extends an{constructor(e,n,i,r,s,o,a,l,c,d=ps){if(d!==ps&&d!==bs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&d===ps&&(i=Tr),i===void 0&&d===bs&&(i=As),super(null,r,s,o,a,l,d,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:Tn,this.minFilter=l!==void 0?l:Tn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const mv=new an,tm=new pv(1,1),gv=new rv,vv=new w1,xv=new fv,nm=[],im=[],rm=new Float32Array(16),sm=new Float32Array(9),om=new Float32Array(4);function ks(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=nm[r];if(s===void 0&&(s=new Float32Array(r),nm[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function bt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Ct(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function $l(t,e){let n=im[e];n===void 0&&(n=new Int32Array(e),im[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function BE(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function HE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(bt(n,e))return;t.uniform2fv(this.addr,e),Ct(n,e)}}function VE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(bt(n,e))return;t.uniform3fv(this.addr,e),Ct(n,e)}}function GE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(bt(n,e))return;t.uniform4fv(this.addr,e),Ct(n,e)}}function WE(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(bt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Ct(n,e)}else{if(bt(n,i))return;om.set(i),t.uniformMatrix2fv(this.addr,!1,om),Ct(n,i)}}function jE(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(bt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Ct(n,e)}else{if(bt(n,i))return;sm.set(i),t.uniformMatrix3fv(this.addr,!1,sm),Ct(n,i)}}function XE(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(bt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Ct(n,e)}else{if(bt(n,i))return;rm.set(i),t.uniformMatrix4fv(this.addr,!1,rm),Ct(n,i)}}function $E(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function YE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(bt(n,e))return;t.uniform2iv(this.addr,e),Ct(n,e)}}function qE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(bt(n,e))return;t.uniform3iv(this.addr,e),Ct(n,e)}}function KE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(bt(n,e))return;t.uniform4iv(this.addr,e),Ct(n,e)}}function ZE(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function QE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(bt(n,e))return;t.uniform2uiv(this.addr,e),Ct(n,e)}}function JE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(bt(n,e))return;t.uniform3uiv(this.addr,e),Ct(n,e)}}function ew(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(bt(n,e))return;t.uniform4uiv(this.addr,e),Ct(n,e)}}function tw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(tm.compareFunction=tv,s=tm):s=mv,n.setTexture2D(e||s,r)}function nw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||vv,r)}function iw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||xv,r)}function rw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||gv,r)}function sw(t){switch(t){case 5126:return BE;case 35664:return HE;case 35665:return VE;case 35666:return GE;case 35674:return WE;case 35675:return jE;case 35676:return XE;case 5124:case 35670:return $E;case 35667:case 35671:return YE;case 35668:case 35672:return qE;case 35669:case 35673:return KE;case 5125:return ZE;case 36294:return QE;case 36295:return JE;case 36296:return ew;case 35678:case 36198:case 36298:case 36306:case 35682:return tw;case 35679:case 36299:case 36307:return nw;case 35680:case 36300:case 36308:case 36293:return iw;case 36289:case 36303:case 36311:case 36292:return rw}}function ow(t,e){t.uniform1fv(this.addr,e)}function aw(t,e){const n=ks(e,this.size,2);t.uniform2fv(this.addr,n)}function lw(t,e){const n=ks(e,this.size,3);t.uniform3fv(this.addr,n)}function cw(t,e){const n=ks(e,this.size,4);t.uniform4fv(this.addr,n)}function uw(t,e){const n=ks(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function dw(t,e){const n=ks(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function fw(t,e){const n=ks(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function hw(t,e){t.uniform1iv(this.addr,e)}function pw(t,e){t.uniform2iv(this.addr,e)}function mw(t,e){t.uniform3iv(this.addr,e)}function gw(t,e){t.uniform4iv(this.addr,e)}function vw(t,e){t.uniform1uiv(this.addr,e)}function xw(t,e){t.uniform2uiv(this.addr,e)}function _w(t,e){t.uniform3uiv(this.addr,e)}function yw(t,e){t.uniform4uiv(this.addr,e)}function Sw(t,e,n){const i=this.cache,r=e.length,s=$l(n,r);bt(i,s)||(t.uniform1iv(this.addr,s),Ct(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||mv,s[o])}function Mw(t,e,n){const i=this.cache,r=e.length,s=$l(n,r);bt(i,s)||(t.uniform1iv(this.addr,s),Ct(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||vv,s[o])}function Ew(t,e,n){const i=this.cache,r=e.length,s=$l(n,r);bt(i,s)||(t.uniform1iv(this.addr,s),Ct(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||xv,s[o])}function ww(t,e,n){const i=this.cache,r=e.length,s=$l(n,r);bt(i,s)||(t.uniform1iv(this.addr,s),Ct(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||gv,s[o])}function Tw(t){switch(t){case 5126:return ow;case 35664:return aw;case 35665:return lw;case 35666:return cw;case 35674:return uw;case 35675:return dw;case 35676:return fw;case 5124:case 35670:return hw;case 35667:case 35671:return pw;case 35668:case 35672:return mw;case 35669:case 35673:return gw;case 5125:return vw;case 36294:return xw;case 36295:return _w;case 36296:return yw;case 35678:case 36198:case 36298:case 36306:case 35682:return Sw;case 35679:case 36299:case 36307:return Mw;case 35680:case 36300:case 36308:case 36293:return Ew;case 36289:case 36303:case 36311:case 36292:return ww}}class Aw{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=sw(n.type)}}class bw{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=Tw(n.type)}}class Cw{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const Zc=/(\w+)(\])?(\[|\.)?/g;function am(t,e){t.seq.push(e),t.map[e.id]=e}function Rw(t,e,n){const i=t.name,r=i.length;for(Zc.lastIndex=0;;){const s=Zc.exec(i),o=Zc.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){am(n,c===void 0?new Aw(a,t,e):new bw(a,t,e));break}else{let h=n.map[a];h===void 0&&(h=new Cw(a),am(n,h)),n=h}}}class Za{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);Rw(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function lm(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const Pw=37297;let Lw=0;function Nw(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}function Dw(t){const e=et.getPrimaries(et.workingColorSpace),n=et.getPrimaries(t);let i;switch(e===n?i="":e===Tl&&n===wl?i="LinearDisplayP3ToLinearSRGB":e===wl&&n===Tl&&(i="LinearSRGBToLinearDisplayP3"),t){case Qi:case Xl:return[i,"LinearTransferOETF"];case Xn:case jf:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function cm(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+Nw(t.getShaderSource(e),o)}else return r}function Iw(t,e){const n=Dw(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function Uw(t,e){let n;switch(e){case Uy:n="Linear";break;case Fy:n="Reinhard";break;case ky:n="Cineon";break;case Of:n="ACESFilmic";break;case zy:n="AgX";break;case By:n="Neutral";break;case Oy:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const La=new z;function Fw(){et.getLuminanceCoefficients(La);const t=La.x.toFixed(4),e=La.y.toFixed(4),n=La.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function kw(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(no).join(`
`)}function Ow(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function zw(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function no(t){return t!==""}function um(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function dm(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Bw=/^[ \t]*#include +<([\w\d./]+)>/gm;function zd(t){return t.replace(Bw,Vw)}const Hw=new Map;function Vw(t,e){let n=Fe[e];if(n===void 0){const i=Hw.get(e);if(i!==void 0)n=Fe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return zd(n)}const Gw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function fm(t){return t.replace(Gw,Ww)}function Ww(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function hm(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function jw(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===H0?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===kf?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===si&&(e="SHADOWMAP_TYPE_VSM"),e}function Xw(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case ws:case Ts:e="ENVMAP_TYPE_CUBE";break;case jl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function $w(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Ts:e="ENVMAP_MODE_REFRACTION";break}return e}function Yw(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case V0:e="ENVMAP_BLENDING_MULTIPLY";break;case Dy:e="ENVMAP_BLENDING_MIX";break;case Iy:e="ENVMAP_BLENDING_ADD";break}return e}function qw(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function Kw(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=jw(n),c=Xw(n),d=$w(n),h=Yw(n),f=qw(n),m=kw(n),y=Ow(s),S=r.createProgram();let p,u,v=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(p=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y].filter(no).join(`
`),p.length>0&&(p+=`
`),u=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y].filter(no).join(`
`),u.length>0&&(u+=`
`)):(p=[hm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+d:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(no).join(`
`),u=[hm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+d:"",n.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Wi?"#define TONE_MAPPING":"",n.toneMapping!==Wi?Fe.tonemapping_pars_fragment:"",n.toneMapping!==Wi?Uw("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Fe.colorspace_pars_fragment,Iw("linearToOutputTexel",n.outputColorSpace),Fw(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(no).join(`
`)),o=zd(o),o=um(o,n),o=dm(o,n),a=zd(a),a=um(a,n),a=dm(a,n),o=fm(o),a=fm(a),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,u=["#define varying in",n.glslVersion===Rp?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Rp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const g=v+p+o,M=v+u+a,P=lm(r,r.VERTEX_SHADER,g),b=lm(r,r.FRAGMENT_SHADER,M);r.attachShader(S,P),r.attachShader(S,b),n.index0AttributeName!==void 0?r.bindAttribLocation(S,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(S,0,"position"),r.linkProgram(S);function T(E){if(t.debug.checkShaderErrors){const U=r.getProgramInfoLog(S).trim(),B=r.getShaderInfoLog(P).trim(),O=r.getShaderInfoLog(b).trim();let $=!0,j=!0;if(r.getProgramParameter(S,r.LINK_STATUS)===!1)if($=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,S,P,b);else{const Y=cm(r,P,"vertex"),N=cm(r,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(S,r.VALIDATE_STATUS)+`

Material Name: `+E.name+`
Material Type: `+E.type+`

Program Info Log: `+U+`
`+Y+`
`+N)}else U!==""?console.warn("THREE.WebGLProgram: Program Info Log:",U):(B===""||O==="")&&(j=!1);j&&(E.diagnostics={runnable:$,programLog:U,vertexShader:{log:B,prefix:p},fragmentShader:{log:O,prefix:u}})}r.deleteShader(P),r.deleteShader(b),R=new Za(r,S),D=zw(r,S)}let R;this.getUniforms=function(){return R===void 0&&T(this),R};let D;this.getAttributes=function(){return D===void 0&&T(this),D};let x=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=r.getProgramParameter(S,Pw)),x},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(S),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=Lw++,this.cacheKey=e,this.usedTimes=1,this.program=S,this.vertexShader=P,this.fragmentShader=b,this}let Zw=0;class Qw{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new Jw(e),n.set(e,i)),i}}class Jw{constructor(e){this.id=Zw++,this.code=e,this.usedTimes=0}}function e2(t,e,n,i,r,s,o){const a=new sv,l=new Qw,c=new Set,d=[],h=r.logarithmicDepthBuffer,f=r.reverseDepthBuffer,m=r.vertexTextures;let y=r.precision;const S={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(x){return c.add(x),x===0?"uv":`uv${x}`}function u(x,E,U,B,O){const $=B.fog,j=O.geometry,Y=x.isMeshStandardMaterial?B.environment:null,N=(x.isMeshStandardMaterial?n:e).get(x.envMap||Y),K=N&&N.mapping===jl?N.image.height:null,ee=S[x.type];x.precision!==null&&(y=r.getMaxPrecision(x.precision),y!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",y,"instead."));const ae=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,we=ae!==void 0?ae.length:0;let Oe=0;j.morphAttributes.position!==void 0&&(Oe=1),j.morphAttributes.normal!==void 0&&(Oe=2),j.morphAttributes.color!==void 0&&(Oe=3);let q,re,fe,de;if(ee){const Jt=$n[ee];q=Jt.vertexShader,re=Jt.fragmentShader}else q=x.vertexShader,re=x.fragmentShader,l.update(x),fe=l.getVertexShaderID(x),de=l.getFragmentShaderID(x);const De=t.getRenderTarget(),Re=O.isInstancedMesh===!0,Ve=O.isBatchedMesh===!0,Ze=!!x.map,Ge=!!x.matcap,I=!!N,Wt=!!x.aoMap,Be=!!x.lightMap,We=!!x.bumpMap,Pe=!!x.normalMap,rt=!!x.displacementMap,Ce=!!x.emissiveMap,C=!!x.metalnessMap,w=!!x.roughnessMap,V=x.anisotropy>0,Q=x.clearcoat>0,ie=x.dispersion>0,Z=x.iridescence>0,_e=x.sheen>0,H=x.transmission>0,J=V&&!!x.anisotropyMap,Ee=Q&&!!x.clearcoatMap,te=Q&&!!x.clearcoatNormalMap,ce=Q&&!!x.clearcoatRoughnessMap,be=Z&&!!x.iridescenceMap,ye=Z&&!!x.iridescenceThicknessMap,me=_e&&!!x.sheenColorMap,He=_e&&!!x.sheenRoughnessMap,Ue=!!x.specularMap,tt=!!x.specularColorMap,L=!!x.specularIntensityMap,ue=H&&!!x.transmissionMap,X=H&&!!x.thicknessMap,ne=!!x.gradientMap,he=!!x.alphaMap,ge=x.alphaTest>0,$e=!!x.alphaHash,yt=!!x.extensions;let Qt=Wi;x.toneMapped&&(De===null||De.isXRRenderTarget===!0)&&(Qt=t.toneMapping);const Ke={shaderID:ee,shaderType:x.type,shaderName:x.name,vertexShader:q,fragmentShader:re,defines:x.defines,customVertexShaderID:fe,customFragmentShaderID:de,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:y,batching:Ve,batchingColor:Ve&&O._colorsTexture!==null,instancing:Re,instancingColor:Re&&O.instanceColor!==null,instancingMorph:Re&&O.morphTexture!==null,supportsVertexTextures:m,outputColorSpace:De===null?t.outputColorSpace:De.isXRRenderTarget===!0?De.texture.colorSpace:Qi,alphaToCoverage:!!x.alphaToCoverage,map:Ze,matcap:Ge,envMap:I,envMapMode:I&&N.mapping,envMapCubeUVHeight:K,aoMap:Wt,lightMap:Be,bumpMap:We,normalMap:Pe,displacementMap:m&&rt,emissiveMap:Ce,normalMapObjectSpace:Pe&&x.normalMapType===Wy,normalMapTangentSpace:Pe&&x.normalMapType===ev,metalnessMap:C,roughnessMap:w,anisotropy:V,anisotropyMap:J,clearcoat:Q,clearcoatMap:Ee,clearcoatNormalMap:te,clearcoatRoughnessMap:ce,dispersion:ie,iridescence:Z,iridescenceMap:be,iridescenceThicknessMap:ye,sheen:_e,sheenColorMap:me,sheenRoughnessMap:He,specularMap:Ue,specularColorMap:tt,specularIntensityMap:L,transmission:H,transmissionMap:ue,thicknessMap:X,gradientMap:ne,opaque:x.transparent===!1&&x.blending===hs&&x.alphaToCoverage===!1,alphaMap:he,alphaTest:ge,alphaHash:$e,combine:x.combine,mapUv:Ze&&p(x.map.channel),aoMapUv:Wt&&p(x.aoMap.channel),lightMapUv:Be&&p(x.lightMap.channel),bumpMapUv:We&&p(x.bumpMap.channel),normalMapUv:Pe&&p(x.normalMap.channel),displacementMapUv:rt&&p(x.displacementMap.channel),emissiveMapUv:Ce&&p(x.emissiveMap.channel),metalnessMapUv:C&&p(x.metalnessMap.channel),roughnessMapUv:w&&p(x.roughnessMap.channel),anisotropyMapUv:J&&p(x.anisotropyMap.channel),clearcoatMapUv:Ee&&p(x.clearcoatMap.channel),clearcoatNormalMapUv:te&&p(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ce&&p(x.clearcoatRoughnessMap.channel),iridescenceMapUv:be&&p(x.iridescenceMap.channel),iridescenceThicknessMapUv:ye&&p(x.iridescenceThicknessMap.channel),sheenColorMapUv:me&&p(x.sheenColorMap.channel),sheenRoughnessMapUv:He&&p(x.sheenRoughnessMap.channel),specularMapUv:Ue&&p(x.specularMap.channel),specularColorMapUv:tt&&p(x.specularColorMap.channel),specularIntensityMapUv:L&&p(x.specularIntensityMap.channel),transmissionMapUv:ue&&p(x.transmissionMap.channel),thicknessMapUv:X&&p(x.thicknessMap.channel),alphaMapUv:he&&p(x.alphaMap.channel),vertexTangents:!!j.attributes.tangent&&(Pe||V),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!j.attributes.uv&&(Ze||he),fog:!!$,useFog:x.fog===!0,fogExp2:!!$&&$.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:f,skinning:O.isSkinnedMesh===!0,morphTargets:j.morphAttributes.position!==void 0,morphNormals:j.morphAttributes.normal!==void 0,morphColors:j.morphAttributes.color!==void 0,morphTargetsCount:we,morphTextureStride:Oe,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:x.dithering,shadowMapEnabled:t.shadowMap.enabled&&U.length>0,shadowMapType:t.shadowMap.type,toneMapping:Qt,decodeVideoTexture:Ze&&x.map.isVideoTexture===!0&&et.getTransfer(x.map.colorSpace)===lt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===li,flipSided:x.side===on,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:yt&&x.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(yt&&x.extensions.multiDraw===!0||Ve)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Ke.vertexUv1s=c.has(1),Ke.vertexUv2s=c.has(2),Ke.vertexUv3s=c.has(3),c.clear(),Ke}function v(x){const E=[];if(x.shaderID?E.push(x.shaderID):(E.push(x.customVertexShaderID),E.push(x.customFragmentShaderID)),x.defines!==void 0)for(const U in x.defines)E.push(U),E.push(x.defines[U]);return x.isRawShaderMaterial===!1&&(g(E,x),M(E,x),E.push(t.outputColorSpace)),E.push(x.customProgramCacheKey),E.join()}function g(x,E){x.push(E.precision),x.push(E.outputColorSpace),x.push(E.envMapMode),x.push(E.envMapCubeUVHeight),x.push(E.mapUv),x.push(E.alphaMapUv),x.push(E.lightMapUv),x.push(E.aoMapUv),x.push(E.bumpMapUv),x.push(E.normalMapUv),x.push(E.displacementMapUv),x.push(E.emissiveMapUv),x.push(E.metalnessMapUv),x.push(E.roughnessMapUv),x.push(E.anisotropyMapUv),x.push(E.clearcoatMapUv),x.push(E.clearcoatNormalMapUv),x.push(E.clearcoatRoughnessMapUv),x.push(E.iridescenceMapUv),x.push(E.iridescenceThicknessMapUv),x.push(E.sheenColorMapUv),x.push(E.sheenRoughnessMapUv),x.push(E.specularMapUv),x.push(E.specularColorMapUv),x.push(E.specularIntensityMapUv),x.push(E.transmissionMapUv),x.push(E.thicknessMapUv),x.push(E.combine),x.push(E.fogExp2),x.push(E.sizeAttenuation),x.push(E.morphTargetsCount),x.push(E.morphAttributeCount),x.push(E.numDirLights),x.push(E.numPointLights),x.push(E.numSpotLights),x.push(E.numSpotLightMaps),x.push(E.numHemiLights),x.push(E.numRectAreaLights),x.push(E.numDirLightShadows),x.push(E.numPointLightShadows),x.push(E.numSpotLightShadows),x.push(E.numSpotLightShadowsWithMaps),x.push(E.numLightProbes),x.push(E.shadowMapType),x.push(E.toneMapping),x.push(E.numClippingPlanes),x.push(E.numClipIntersection),x.push(E.depthPacking)}function M(x,E){a.disableAll(),E.supportsVertexTextures&&a.enable(0),E.instancing&&a.enable(1),E.instancingColor&&a.enable(2),E.instancingMorph&&a.enable(3),E.matcap&&a.enable(4),E.envMap&&a.enable(5),E.normalMapObjectSpace&&a.enable(6),E.normalMapTangentSpace&&a.enable(7),E.clearcoat&&a.enable(8),E.iridescence&&a.enable(9),E.alphaTest&&a.enable(10),E.vertexColors&&a.enable(11),E.vertexAlphas&&a.enable(12),E.vertexUv1s&&a.enable(13),E.vertexUv2s&&a.enable(14),E.vertexUv3s&&a.enable(15),E.vertexTangents&&a.enable(16),E.anisotropy&&a.enable(17),E.alphaHash&&a.enable(18),E.batching&&a.enable(19),E.dispersion&&a.enable(20),E.batchingColor&&a.enable(21),x.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reverseDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.alphaToCoverage&&a.enable(20),x.push(a.mask)}function P(x){const E=S[x.type];let U;if(E){const B=$n[E];U=k1.clone(B.uniforms)}else U=x.uniforms;return U}function b(x,E){let U;for(let B=0,O=d.length;B<O;B++){const $=d[B];if($.cacheKey===E){U=$,++U.usedTimes;break}}return U===void 0&&(U=new Kw(t,E,x,s),d.push(U)),U}function T(x){if(--x.usedTimes===0){const E=d.indexOf(x);d[E]=d[d.length-1],d.pop(),x.destroy()}}function R(x){l.remove(x)}function D(){l.dispose()}return{getParameters:u,getProgramCacheKey:v,getUniforms:P,acquireProgram:b,releaseProgram:T,releaseShaderCache:R,programs:d,dispose:D}}function t2(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function r(o,a,l){t.get(o)[a]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function n2(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function pm(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function mm(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(h,f,m,y,S,p){let u=t[e];return u===void 0?(u={id:h.id,object:h,geometry:f,material:m,groupOrder:y,renderOrder:h.renderOrder,z:S,group:p},t[e]=u):(u.id=h.id,u.object=h,u.geometry=f,u.material=m,u.groupOrder=y,u.renderOrder=h.renderOrder,u.z=S,u.group=p),e++,u}function a(h,f,m,y,S,p){const u=o(h,f,m,y,S,p);m.transmission>0?i.push(u):m.transparent===!0?r.push(u):n.push(u)}function l(h,f,m,y,S,p){const u=o(h,f,m,y,S,p);m.transmission>0?i.unshift(u):m.transparent===!0?r.unshift(u):n.unshift(u)}function c(h,f){n.length>1&&n.sort(h||n2),i.length>1&&i.sort(f||pm),r.length>1&&r.sort(f||pm)}function d(){for(let h=e,f=t.length;h<f;h++){const m=t[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:d,sort:c}}function i2(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new mm,t.set(i,[o])):r>=s.length?(o=new mm,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function r2(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new z,color:new Ye};break;case"SpotLight":n={position:new z,direction:new z,color:new Ye,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new z,color:new Ye,distance:0,decay:0};break;case"HemisphereLight":n={direction:new z,skyColor:new Ye,groundColor:new Ye};break;case"RectAreaLight":n={color:new Ye,position:new z,halfWidth:new z,halfHeight:new z};break}return t[e.id]=n,n}}}function s2(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let o2=0;function a2(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function l2(t){const e=new r2,n=s2(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new z);const r=new z,s=new vt,o=new vt;function a(c){let d=0,h=0,f=0;for(let D=0;D<9;D++)i.probe[D].set(0,0,0);let m=0,y=0,S=0,p=0,u=0,v=0,g=0,M=0,P=0,b=0,T=0;c.sort(a2);for(let D=0,x=c.length;D<x;D++){const E=c[D],U=E.color,B=E.intensity,O=E.distance,$=E.shadow&&E.shadow.map?E.shadow.map.texture:null;if(E.isAmbientLight)d+=U.r*B,h+=U.g*B,f+=U.b*B;else if(E.isLightProbe){for(let j=0;j<9;j++)i.probe[j].addScaledVector(E.sh.coefficients[j],B);T++}else if(E.isDirectionalLight){const j=e.get(E);if(j.color.copy(E.color).multiplyScalar(E.intensity),E.castShadow){const Y=E.shadow,N=n.get(E);N.shadowIntensity=Y.intensity,N.shadowBias=Y.bias,N.shadowNormalBias=Y.normalBias,N.shadowRadius=Y.radius,N.shadowMapSize=Y.mapSize,i.directionalShadow[m]=N,i.directionalShadowMap[m]=$,i.directionalShadowMatrix[m]=E.shadow.matrix,v++}i.directional[m]=j,m++}else if(E.isSpotLight){const j=e.get(E);j.position.setFromMatrixPosition(E.matrixWorld),j.color.copy(U).multiplyScalar(B),j.distance=O,j.coneCos=Math.cos(E.angle),j.penumbraCos=Math.cos(E.angle*(1-E.penumbra)),j.decay=E.decay,i.spot[S]=j;const Y=E.shadow;if(E.map&&(i.spotLightMap[P]=E.map,P++,Y.updateMatrices(E),E.castShadow&&b++),i.spotLightMatrix[S]=Y.matrix,E.castShadow){const N=n.get(E);N.shadowIntensity=Y.intensity,N.shadowBias=Y.bias,N.shadowNormalBias=Y.normalBias,N.shadowRadius=Y.radius,N.shadowMapSize=Y.mapSize,i.spotShadow[S]=N,i.spotShadowMap[S]=$,M++}S++}else if(E.isRectAreaLight){const j=e.get(E);j.color.copy(U).multiplyScalar(B),j.halfWidth.set(E.width*.5,0,0),j.halfHeight.set(0,E.height*.5,0),i.rectArea[p]=j,p++}else if(E.isPointLight){const j=e.get(E);if(j.color.copy(E.color).multiplyScalar(E.intensity),j.distance=E.distance,j.decay=E.decay,E.castShadow){const Y=E.shadow,N=n.get(E);N.shadowIntensity=Y.intensity,N.shadowBias=Y.bias,N.shadowNormalBias=Y.normalBias,N.shadowRadius=Y.radius,N.shadowMapSize=Y.mapSize,N.shadowCameraNear=Y.camera.near,N.shadowCameraFar=Y.camera.far,i.pointShadow[y]=N,i.pointShadowMap[y]=$,i.pointShadowMatrix[y]=E.shadow.matrix,g++}i.point[y]=j,y++}else if(E.isHemisphereLight){const j=e.get(E);j.skyColor.copy(E.color).multiplyScalar(B),j.groundColor.copy(E.groundColor).multiplyScalar(B),i.hemi[u]=j,u++}}p>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=le.LTC_FLOAT_1,i.rectAreaLTC2=le.LTC_FLOAT_2):(i.rectAreaLTC1=le.LTC_HALF_1,i.rectAreaLTC2=le.LTC_HALF_2)),i.ambient[0]=d,i.ambient[1]=h,i.ambient[2]=f;const R=i.hash;(R.directionalLength!==m||R.pointLength!==y||R.spotLength!==S||R.rectAreaLength!==p||R.hemiLength!==u||R.numDirectionalShadows!==v||R.numPointShadows!==g||R.numSpotShadows!==M||R.numSpotMaps!==P||R.numLightProbes!==T)&&(i.directional.length=m,i.spot.length=S,i.rectArea.length=p,i.point.length=y,i.hemi.length=u,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=g,i.pointShadowMap.length=g,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=g,i.spotLightMatrix.length=M+P-b,i.spotLightMap.length=P,i.numSpotLightShadowsWithMaps=b,i.numLightProbes=T,R.directionalLength=m,R.pointLength=y,R.spotLength=S,R.rectAreaLength=p,R.hemiLength=u,R.numDirectionalShadows=v,R.numPointShadows=g,R.numSpotShadows=M,R.numSpotMaps=P,R.numLightProbes=T,i.version=o2++)}function l(c,d){let h=0,f=0,m=0,y=0,S=0;const p=d.matrixWorldInverse;for(let u=0,v=c.length;u<v;u++){const g=c[u];if(g.isDirectionalLight){const M=i.directional[h];M.direction.setFromMatrixPosition(g.matrixWorld),r.setFromMatrixPosition(g.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(p),h++}else if(g.isSpotLight){const M=i.spot[m];M.position.setFromMatrixPosition(g.matrixWorld),M.position.applyMatrix4(p),M.direction.setFromMatrixPosition(g.matrixWorld),r.setFromMatrixPosition(g.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(p),m++}else if(g.isRectAreaLight){const M=i.rectArea[y];M.position.setFromMatrixPosition(g.matrixWorld),M.position.applyMatrix4(p),o.identity(),s.copy(g.matrixWorld),s.premultiply(p),o.extractRotation(s),M.halfWidth.set(g.width*.5,0,0),M.halfHeight.set(0,g.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),y++}else if(g.isPointLight){const M=i.point[f];M.position.setFromMatrixPosition(g.matrixWorld),M.position.applyMatrix4(p),f++}else if(g.isHemisphereLight){const M=i.hemi[S];M.direction.setFromMatrixPosition(g.matrixWorld),M.direction.transformDirection(p),S++}}}return{setup:a,setupView:l,state:i}}function gm(t){const e=new l2(t),n=[],i=[];function r(d){c.camera=d,n.length=0,i.length=0}function s(d){n.push(d)}function o(d){i.push(d)}function a(){e.setup(n)}function l(d){e.setupView(n,d)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function c2(t){let e=new WeakMap;function n(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new gm(t),e.set(r,[a])):s>=o.length?(a=new gm(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}class u2 extends Fs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Vy,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class d2 extends Fs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const f2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,h2=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function p2(t,e,n){let i=new Yf;const r=new Xe,s=new Xe,o=new gt,a=new u2({depthPacking:Gy}),l=new d2,c={},d=n.maxTextureSize,h={[$i]:on,[on]:$i,[li]:li},f=new Yi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Xe},radius:{value:4}},vertexShader:f2,fragmentShader:h2}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const y=new Gn;y.setAttribute("position",new Zn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const S=new Mt(y,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=H0;let u=this.type;this.render=function(b,T,R){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||b.length===0)return;const D=t.getRenderTarget(),x=t.getActiveCubeFace(),E=t.getActiveMipmapLevel(),U=t.state;U.setBlending(Gi),U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const B=u!==si&&this.type===si,O=u===si&&this.type!==si;for(let $=0,j=b.length;$<j;$++){const Y=b[$],N=Y.shadow;if(N===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;r.copy(N.mapSize);const K=N.getFrameExtents();if(r.multiply(K),s.copy(N.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(s.x=Math.floor(d/K.x),r.x=s.x*K.x,N.mapSize.x=s.x),r.y>d&&(s.y=Math.floor(d/K.y),r.y=s.y*K.y,N.mapSize.y=s.y)),N.map===null||B===!0||O===!0){const ae=this.type!==si?{minFilter:Tn,magFilter:Tn}:{};N.map!==null&&N.map.dispose(),N.map=new Ar(r.x,r.y,ae),N.map.texture.name=Y.name+".shadowMap",N.camera.updateProjectionMatrix()}t.setRenderTarget(N.map),t.clear();const ee=N.getViewportCount();for(let ae=0;ae<ee;ae++){const we=N.getViewport(ae);o.set(s.x*we.x,s.y*we.y,s.x*we.z,s.y*we.w),U.viewport(o),N.updateMatrices(Y,ae),i=N.getFrustum(),M(T,R,N.camera,Y,this.type)}N.isPointLightShadow!==!0&&this.type===si&&v(N,R),N.needsUpdate=!1}u=this.type,p.needsUpdate=!1,t.setRenderTarget(D,x,E)};function v(b,T){const R=e.update(S);f.defines.VSM_SAMPLES!==b.blurSamples&&(f.defines.VSM_SAMPLES=b.blurSamples,m.defines.VSM_SAMPLES=b.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new Ar(r.x,r.y)),f.uniforms.shadow_pass.value=b.map.texture,f.uniforms.resolution.value=b.mapSize,f.uniforms.radius.value=b.radius,t.setRenderTarget(b.mapPass),t.clear(),t.renderBufferDirect(T,null,R,f,S,null),m.uniforms.shadow_pass.value=b.mapPass.texture,m.uniforms.resolution.value=b.mapSize,m.uniforms.radius.value=b.radius,t.setRenderTarget(b.map),t.clear(),t.renderBufferDirect(T,null,R,m,S,null)}function g(b,T,R,D){let x=null;const E=R.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(E!==void 0)x=E;else if(x=R.isPointLight===!0?l:a,t.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const U=x.uuid,B=T.uuid;let O=c[U];O===void 0&&(O={},c[U]=O);let $=O[B];$===void 0&&($=x.clone(),O[B]=$,T.addEventListener("dispose",P)),x=$}if(x.visible=T.visible,x.wireframe=T.wireframe,D===si?x.side=T.shadowSide!==null?T.shadowSide:T.side:x.side=T.shadowSide!==null?T.shadowSide:h[T.side],x.alphaMap=T.alphaMap,x.alphaTest=T.alphaTest,x.map=T.map,x.clipShadows=T.clipShadows,x.clippingPlanes=T.clippingPlanes,x.clipIntersection=T.clipIntersection,x.displacementMap=T.displacementMap,x.displacementScale=T.displacementScale,x.displacementBias=T.displacementBias,x.wireframeLinewidth=T.wireframeLinewidth,x.linewidth=T.linewidth,R.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const U=t.properties.get(x);U.light=R}return x}function M(b,T,R,D,x){if(b.visible===!1)return;if(b.layers.test(T.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&x===si)&&(!b.frustumCulled||i.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,b.matrixWorld);const B=e.update(b),O=b.material;if(Array.isArray(O)){const $=B.groups;for(let j=0,Y=$.length;j<Y;j++){const N=$[j],K=O[N.materialIndex];if(K&&K.visible){const ee=g(b,K,D,x);b.onBeforeShadow(t,b,T,R,B,ee,N),t.renderBufferDirect(R,null,B,ee,b,N),b.onAfterShadow(t,b,T,R,B,ee,N)}}}else if(O.visible){const $=g(b,O,D,x);b.onBeforeShadow(t,b,T,R,B,$,null),t.renderBufferDirect(R,null,B,$,b,null),b.onAfterShadow(t,b,T,R,B,$,null)}}const U=b.children;for(let B=0,O=U.length;B<O;B++)M(U[B],T,R,D,x)}function P(b){b.target.removeEventListener("dispose",P);for(const R in c){const D=c[R],x=b.target.uuid;x in D&&(D[x].dispose(),delete D[x])}}}const m2={[nd]:id,[rd]:ad,[sd]:ld,[Es]:od,[id]:nd,[ad]:rd,[ld]:sd,[od]:Es};function g2(t){function e(){let L=!1;const ue=new gt;let X=null;const ne=new gt(0,0,0,0);return{setMask:function(he){X!==he&&!L&&(t.colorMask(he,he,he,he),X=he)},setLocked:function(he){L=he},setClear:function(he,ge,$e,yt,Qt){Qt===!0&&(he*=yt,ge*=yt,$e*=yt),ue.set(he,ge,$e,yt),ne.equals(ue)===!1&&(t.clearColor(he,ge,$e,yt),ne.copy(ue))},reset:function(){L=!1,X=null,ne.set(-1,0,0,0)}}}function n(){let L=!1,ue=!1,X=null,ne=null,he=null;return{setReversed:function(ge){ue=ge},setTest:function(ge){ge?fe(t.DEPTH_TEST):de(t.DEPTH_TEST)},setMask:function(ge){X!==ge&&!L&&(t.depthMask(ge),X=ge)},setFunc:function(ge){if(ue&&(ge=m2[ge]),ne!==ge){switch(ge){case nd:t.depthFunc(t.NEVER);break;case id:t.depthFunc(t.ALWAYS);break;case rd:t.depthFunc(t.LESS);break;case Es:t.depthFunc(t.LEQUAL);break;case sd:t.depthFunc(t.EQUAL);break;case od:t.depthFunc(t.GEQUAL);break;case ad:t.depthFunc(t.GREATER);break;case ld:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}ne=ge}},setLocked:function(ge){L=ge},setClear:function(ge){he!==ge&&(t.clearDepth(ge),he=ge)},reset:function(){L=!1,X=null,ne=null,he=null}}}function i(){let L=!1,ue=null,X=null,ne=null,he=null,ge=null,$e=null,yt=null,Qt=null;return{setTest:function(Ke){L||(Ke?fe(t.STENCIL_TEST):de(t.STENCIL_TEST))},setMask:function(Ke){ue!==Ke&&!L&&(t.stencilMask(Ke),ue=Ke)},setFunc:function(Ke,Jt,Jn){(X!==Ke||ne!==Jt||he!==Jn)&&(t.stencilFunc(Ke,Jt,Jn),X=Ke,ne=Jt,he=Jn)},setOp:function(Ke,Jt,Jn){(ge!==Ke||$e!==Jt||yt!==Jn)&&(t.stencilOp(Ke,Jt,Jn),ge=Ke,$e=Jt,yt=Jn)},setLocked:function(Ke){L=Ke},setClear:function(Ke){Qt!==Ke&&(t.clearStencil(Ke),Qt=Ke)},reset:function(){L=!1,ue=null,X=null,ne=null,he=null,ge=null,$e=null,yt=null,Qt=null}}}const r=new e,s=new n,o=new i,a=new WeakMap,l=new WeakMap;let c={},d={},h=new WeakMap,f=[],m=null,y=!1,S=null,p=null,u=null,v=null,g=null,M=null,P=null,b=new Ye(0,0,0),T=0,R=!1,D=null,x=null,E=null,U=null,B=null;const O=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let $=!1,j=0;const Y=t.getParameter(t.VERSION);Y.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(Y)[1]),$=j>=1):Y.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),$=j>=2);let N=null,K={};const ee=t.getParameter(t.SCISSOR_BOX),ae=t.getParameter(t.VIEWPORT),we=new gt().fromArray(ee),Oe=new gt().fromArray(ae);function q(L,ue,X,ne){const he=new Uint8Array(4),ge=t.createTexture();t.bindTexture(L,ge),t.texParameteri(L,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(L,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let $e=0;$e<X;$e++)L===t.TEXTURE_3D||L===t.TEXTURE_2D_ARRAY?t.texImage3D(ue,0,t.RGBA,1,1,ne,0,t.RGBA,t.UNSIGNED_BYTE,he):t.texImage2D(ue+$e,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,he);return ge}const re={};re[t.TEXTURE_2D]=q(t.TEXTURE_2D,t.TEXTURE_2D,1),re[t.TEXTURE_CUBE_MAP]=q(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),re[t.TEXTURE_2D_ARRAY]=q(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),re[t.TEXTURE_3D]=q(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),fe(t.DEPTH_TEST),s.setFunc(Es),Be(!1),We(Ep),fe(t.CULL_FACE),I(Gi);function fe(L){c[L]!==!0&&(t.enable(L),c[L]=!0)}function de(L){c[L]!==!1&&(t.disable(L),c[L]=!1)}function De(L,ue){return d[L]!==ue?(t.bindFramebuffer(L,ue),d[L]=ue,L===t.DRAW_FRAMEBUFFER&&(d[t.FRAMEBUFFER]=ue),L===t.FRAMEBUFFER&&(d[t.DRAW_FRAMEBUFFER]=ue),!0):!1}function Re(L,ue){let X=f,ne=!1;if(L){X=h.get(ue),X===void 0&&(X=[],h.set(ue,X));const he=L.textures;if(X.length!==he.length||X[0]!==t.COLOR_ATTACHMENT0){for(let ge=0,$e=he.length;ge<$e;ge++)X[ge]=t.COLOR_ATTACHMENT0+ge;X.length=he.length,ne=!0}}else X[0]!==t.BACK&&(X[0]=t.BACK,ne=!0);ne&&t.drawBuffers(X)}function Ve(L){return m!==L?(t.useProgram(L),m=L,!0):!1}const Ze={[ur]:t.FUNC_ADD,[gy]:t.FUNC_SUBTRACT,[vy]:t.FUNC_REVERSE_SUBTRACT};Ze[xy]=t.MIN,Ze[_y]=t.MAX;const Ge={[yy]:t.ZERO,[Sy]:t.ONE,[My]:t.SRC_COLOR,[ed]:t.SRC_ALPHA,[Cy]:t.SRC_ALPHA_SATURATE,[Ay]:t.DST_COLOR,[wy]:t.DST_ALPHA,[Ey]:t.ONE_MINUS_SRC_COLOR,[td]:t.ONE_MINUS_SRC_ALPHA,[by]:t.ONE_MINUS_DST_COLOR,[Ty]:t.ONE_MINUS_DST_ALPHA,[Ry]:t.CONSTANT_COLOR,[Py]:t.ONE_MINUS_CONSTANT_COLOR,[Ly]:t.CONSTANT_ALPHA,[Ny]:t.ONE_MINUS_CONSTANT_ALPHA};function I(L,ue,X,ne,he,ge,$e,yt,Qt,Ke){if(L===Gi){y===!0&&(de(t.BLEND),y=!1);return}if(y===!1&&(fe(t.BLEND),y=!0),L!==my){if(L!==S||Ke!==R){if((p!==ur||g!==ur)&&(t.blendEquation(t.FUNC_ADD),p=ur,g=ur),Ke)switch(L){case hs:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case wp:t.blendFunc(t.ONE,t.ONE);break;case Tp:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Ap:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case hs:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case wp:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case Tp:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Ap:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}u=null,v=null,M=null,P=null,b.set(0,0,0),T=0,S=L,R=Ke}return}he=he||ue,ge=ge||X,$e=$e||ne,(ue!==p||he!==g)&&(t.blendEquationSeparate(Ze[ue],Ze[he]),p=ue,g=he),(X!==u||ne!==v||ge!==M||$e!==P)&&(t.blendFuncSeparate(Ge[X],Ge[ne],Ge[ge],Ge[$e]),u=X,v=ne,M=ge,P=$e),(yt.equals(b)===!1||Qt!==T)&&(t.blendColor(yt.r,yt.g,yt.b,Qt),b.copy(yt),T=Qt),S=L,R=!1}function Wt(L,ue){L.side===li?de(t.CULL_FACE):fe(t.CULL_FACE);let X=L.side===on;ue&&(X=!X),Be(X),L.blending===hs&&L.transparent===!1?I(Gi):I(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),s.setFunc(L.depthFunc),s.setTest(L.depthTest),s.setMask(L.depthWrite),r.setMask(L.colorWrite);const ne=L.stencilWrite;o.setTest(ne),ne&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),rt(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?fe(t.SAMPLE_ALPHA_TO_COVERAGE):de(t.SAMPLE_ALPHA_TO_COVERAGE)}function Be(L){D!==L&&(L?t.frontFace(t.CW):t.frontFace(t.CCW),D=L)}function We(L){L!==hy?(fe(t.CULL_FACE),L!==x&&(L===Ep?t.cullFace(t.BACK):L===py?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):de(t.CULL_FACE),x=L}function Pe(L){L!==E&&($&&t.lineWidth(L),E=L)}function rt(L,ue,X){L?(fe(t.POLYGON_OFFSET_FILL),(U!==ue||B!==X)&&(t.polygonOffset(ue,X),U=ue,B=X)):de(t.POLYGON_OFFSET_FILL)}function Ce(L){L?fe(t.SCISSOR_TEST):de(t.SCISSOR_TEST)}function C(L){L===void 0&&(L=t.TEXTURE0+O-1),N!==L&&(t.activeTexture(L),N=L)}function w(L,ue,X){X===void 0&&(N===null?X=t.TEXTURE0+O-1:X=N);let ne=K[X];ne===void 0&&(ne={type:void 0,texture:void 0},K[X]=ne),(ne.type!==L||ne.texture!==ue)&&(N!==X&&(t.activeTexture(X),N=X),t.bindTexture(L,ue||re[L]),ne.type=L,ne.texture=ue)}function V(){const L=K[N];L!==void 0&&L.type!==void 0&&(t.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function Q(){try{t.compressedTexImage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ie(){try{t.compressedTexImage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Z(){try{t.texSubImage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function _e(){try{t.texSubImage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function H(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function J(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ee(){try{t.texStorage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function te(){try{t.texStorage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ce(){try{t.texImage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function be(){try{t.texImage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ye(L){we.equals(L)===!1&&(t.scissor(L.x,L.y,L.z,L.w),we.copy(L))}function me(L){Oe.equals(L)===!1&&(t.viewport(L.x,L.y,L.z,L.w),Oe.copy(L))}function He(L,ue){let X=l.get(ue);X===void 0&&(X=new WeakMap,l.set(ue,X));let ne=X.get(L);ne===void 0&&(ne=t.getUniformBlockIndex(ue,L.name),X.set(L,ne))}function Ue(L,ue){const ne=l.get(ue).get(L);a.get(ue)!==ne&&(t.uniformBlockBinding(ue,ne,L.__bindingPointIndex),a.set(ue,ne))}function tt(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),c={},N=null,K={},d={},h=new WeakMap,f=[],m=null,y=!1,S=null,p=null,u=null,v=null,g=null,M=null,P=null,b=new Ye(0,0,0),T=0,R=!1,D=null,x=null,E=null,U=null,B=null,we.set(0,0,t.canvas.width,t.canvas.height),Oe.set(0,0,t.canvas.width,t.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:fe,disable:de,bindFramebuffer:De,drawBuffers:Re,useProgram:Ve,setBlending:I,setMaterial:Wt,setFlipSided:Be,setCullFace:We,setLineWidth:Pe,setPolygonOffset:rt,setScissorTest:Ce,activeTexture:C,bindTexture:w,unbindTexture:V,compressedTexImage2D:Q,compressedTexImage3D:ie,texImage2D:ce,texImage3D:be,updateUBOMapping:He,uniformBlockBinding:Ue,texStorage2D:Ee,texStorage3D:te,texSubImage2D:Z,texSubImage3D:_e,compressedTexSubImage2D:H,compressedTexSubImage3D:J,scissor:ye,viewport:me,reset:tt}}function vm(t,e,n,i){const r=v2(i);switch(n){case $0:return t*e;case q0:return t*e;case K0:return t*e*2;case Z0:return t*e/r.components*r.byteLength;case Vf:return t*e/r.components*r.byteLength;case Q0:return t*e*2/r.components*r.byteLength;case Gf:return t*e*2/r.components*r.byteLength;case Y0:return t*e*3/r.components*r.byteLength;case zn:return t*e*4/r.components*r.byteLength;case Wf:return t*e*4/r.components*r.byteLength;case ja:case Xa:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case $a:case Ya:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case pd:case gd:return Math.max(t,16)*Math.max(e,8)/4;case hd:case md:return Math.max(t,8)*Math.max(e,8)/2;case vd:case xd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case _d:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case yd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Sd:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Md:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Ed:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case wd:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case Td:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case Ad:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case bd:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case Cd:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case Rd:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case Pd:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case Ld:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case Nd:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case Dd:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case qa:case Id:case Ud:return Math.ceil(t/4)*Math.ceil(e/4)*16;case J0:case Fd:return Math.ceil(t/4)*Math.ceil(e/4)*8;case kd:case Od:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function v2(t){switch(t){case xi:case W0:return{byteLength:1,components:1};case No:case j0:case Go:return{byteLength:2,components:1};case Bf:case Hf:return{byteLength:2,components:4};case Tr:case zf:case di:return{byteLength:4,components:1};case X0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}function x2(t,e,n,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Xe,d=new WeakMap;let h;const f=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(C,w){return m?new OffscreenCanvas(C,w):bl("canvas")}function S(C,w,V){let Q=1;const ie=Ce(C);if((ie.width>V||ie.height>V)&&(Q=V/Math.max(ie.width,ie.height)),Q<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const Z=Math.floor(Q*ie.width),_e=Math.floor(Q*ie.height);h===void 0&&(h=y(Z,_e));const H=w?y(Z,_e):h;return H.width=Z,H.height=_e,H.getContext("2d").drawImage(C,0,0,Z,_e),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ie.width+"x"+ie.height+") to ("+Z+"x"+_e+")."),H}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ie.width+"x"+ie.height+")."),C;return C}function p(C){return C.generateMipmaps&&C.minFilter!==Tn&&C.minFilter!==kn}function u(C){t.generateMipmap(C)}function v(C,w,V,Q,ie=!1){if(C!==null){if(t[C]!==void 0)return t[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let Z=w;if(w===t.RED&&(V===t.FLOAT&&(Z=t.R32F),V===t.HALF_FLOAT&&(Z=t.R16F),V===t.UNSIGNED_BYTE&&(Z=t.R8)),w===t.RED_INTEGER&&(V===t.UNSIGNED_BYTE&&(Z=t.R8UI),V===t.UNSIGNED_SHORT&&(Z=t.R16UI),V===t.UNSIGNED_INT&&(Z=t.R32UI),V===t.BYTE&&(Z=t.R8I),V===t.SHORT&&(Z=t.R16I),V===t.INT&&(Z=t.R32I)),w===t.RG&&(V===t.FLOAT&&(Z=t.RG32F),V===t.HALF_FLOAT&&(Z=t.RG16F),V===t.UNSIGNED_BYTE&&(Z=t.RG8)),w===t.RG_INTEGER&&(V===t.UNSIGNED_BYTE&&(Z=t.RG8UI),V===t.UNSIGNED_SHORT&&(Z=t.RG16UI),V===t.UNSIGNED_INT&&(Z=t.RG32UI),V===t.BYTE&&(Z=t.RG8I),V===t.SHORT&&(Z=t.RG16I),V===t.INT&&(Z=t.RG32I)),w===t.RGB_INTEGER&&(V===t.UNSIGNED_BYTE&&(Z=t.RGB8UI),V===t.UNSIGNED_SHORT&&(Z=t.RGB16UI),V===t.UNSIGNED_INT&&(Z=t.RGB32UI),V===t.BYTE&&(Z=t.RGB8I),V===t.SHORT&&(Z=t.RGB16I),V===t.INT&&(Z=t.RGB32I)),w===t.RGBA_INTEGER&&(V===t.UNSIGNED_BYTE&&(Z=t.RGBA8UI),V===t.UNSIGNED_SHORT&&(Z=t.RGBA16UI),V===t.UNSIGNED_INT&&(Z=t.RGBA32UI),V===t.BYTE&&(Z=t.RGBA8I),V===t.SHORT&&(Z=t.RGBA16I),V===t.INT&&(Z=t.RGBA32I)),w===t.RGB&&V===t.UNSIGNED_INT_5_9_9_9_REV&&(Z=t.RGB9_E5),w===t.RGBA){const _e=ie?El:et.getTransfer(Q);V===t.FLOAT&&(Z=t.RGBA32F),V===t.HALF_FLOAT&&(Z=t.RGBA16F),V===t.UNSIGNED_BYTE&&(Z=_e===lt?t.SRGB8_ALPHA8:t.RGBA8),V===t.UNSIGNED_SHORT_4_4_4_4&&(Z=t.RGBA4),V===t.UNSIGNED_SHORT_5_5_5_1&&(Z=t.RGB5_A1)}return(Z===t.R16F||Z===t.R32F||Z===t.RG16F||Z===t.RG32F||Z===t.RGBA16F||Z===t.RGBA32F)&&e.get("EXT_color_buffer_float"),Z}function g(C,w){let V;return C?w===null||w===Tr||w===As?V=t.DEPTH24_STENCIL8:w===di?V=t.DEPTH32F_STENCIL8:w===No&&(V=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===Tr||w===As?V=t.DEPTH_COMPONENT24:w===di?V=t.DEPTH_COMPONENT32F:w===No&&(V=t.DEPTH_COMPONENT16),V}function M(C,w){return p(C)===!0||C.isFramebufferTexture&&C.minFilter!==Tn&&C.minFilter!==kn?Math.log2(Math.max(w.width,w.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?w.mipmaps.length:1}function P(C){const w=C.target;w.removeEventListener("dispose",P),T(w),w.isVideoTexture&&d.delete(w)}function b(C){const w=C.target;w.removeEventListener("dispose",b),D(w)}function T(C){const w=i.get(C);if(w.__webglInit===void 0)return;const V=C.source,Q=f.get(V);if(Q){const ie=Q[w.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&R(C),Object.keys(Q).length===0&&f.delete(V)}i.remove(C)}function R(C){const w=i.get(C);t.deleteTexture(w.__webglTexture);const V=C.source,Q=f.get(V);delete Q[w.__cacheKey],o.memory.textures--}function D(C){const w=i.get(C);if(C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(w.__webglFramebuffer[Q]))for(let ie=0;ie<w.__webglFramebuffer[Q].length;ie++)t.deleteFramebuffer(w.__webglFramebuffer[Q][ie]);else t.deleteFramebuffer(w.__webglFramebuffer[Q]);w.__webglDepthbuffer&&t.deleteRenderbuffer(w.__webglDepthbuffer[Q])}else{if(Array.isArray(w.__webglFramebuffer))for(let Q=0;Q<w.__webglFramebuffer.length;Q++)t.deleteFramebuffer(w.__webglFramebuffer[Q]);else t.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&t.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&t.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let Q=0;Q<w.__webglColorRenderbuffer.length;Q++)w.__webglColorRenderbuffer[Q]&&t.deleteRenderbuffer(w.__webglColorRenderbuffer[Q]);w.__webglDepthRenderbuffer&&t.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const V=C.textures;for(let Q=0,ie=V.length;Q<ie;Q++){const Z=i.get(V[Q]);Z.__webglTexture&&(t.deleteTexture(Z.__webglTexture),o.memory.textures--),i.remove(V[Q])}i.remove(C)}let x=0;function E(){x=0}function U(){const C=x;return C>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+r.maxTextures),x+=1,C}function B(C){const w=[];return w.push(C.wrapS),w.push(C.wrapT),w.push(C.wrapR||0),w.push(C.magFilter),w.push(C.minFilter),w.push(C.anisotropy),w.push(C.internalFormat),w.push(C.format),w.push(C.type),w.push(C.generateMipmaps),w.push(C.premultiplyAlpha),w.push(C.flipY),w.push(C.unpackAlignment),w.push(C.colorSpace),w.join()}function O(C,w){const V=i.get(C);if(C.isVideoTexture&&Pe(C),C.isRenderTargetTexture===!1&&C.version>0&&V.__version!==C.version){const Q=C.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Oe(V,C,w);return}}n.bindTexture(t.TEXTURE_2D,V.__webglTexture,t.TEXTURE0+w)}function $(C,w){const V=i.get(C);if(C.version>0&&V.__version!==C.version){Oe(V,C,w);return}n.bindTexture(t.TEXTURE_2D_ARRAY,V.__webglTexture,t.TEXTURE0+w)}function j(C,w){const V=i.get(C);if(C.version>0&&V.__version!==C.version){Oe(V,C,w);return}n.bindTexture(t.TEXTURE_3D,V.__webglTexture,t.TEXTURE0+w)}function Y(C,w){const V=i.get(C);if(C.version>0&&V.__version!==C.version){q(V,C,w);return}n.bindTexture(t.TEXTURE_CUBE_MAP,V.__webglTexture,t.TEXTURE0+w)}const N={[dd]:t.REPEAT,[mr]:t.CLAMP_TO_EDGE,[fd]:t.MIRRORED_REPEAT},K={[Tn]:t.NEAREST,[Hy]:t.NEAREST_MIPMAP_NEAREST,[da]:t.NEAREST_MIPMAP_LINEAR,[kn]:t.LINEAR,[wc]:t.LINEAR_MIPMAP_NEAREST,[gr]:t.LINEAR_MIPMAP_LINEAR},ee={[jy]:t.NEVER,[Zy]:t.ALWAYS,[Xy]:t.LESS,[tv]:t.LEQUAL,[$y]:t.EQUAL,[Ky]:t.GEQUAL,[Yy]:t.GREATER,[qy]:t.NOTEQUAL};function ae(C,w){if(w.type===di&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===kn||w.magFilter===wc||w.magFilter===da||w.magFilter===gr||w.minFilter===kn||w.minFilter===wc||w.minFilter===da||w.minFilter===gr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(C,t.TEXTURE_WRAP_S,N[w.wrapS]),t.texParameteri(C,t.TEXTURE_WRAP_T,N[w.wrapT]),(C===t.TEXTURE_3D||C===t.TEXTURE_2D_ARRAY)&&t.texParameteri(C,t.TEXTURE_WRAP_R,N[w.wrapR]),t.texParameteri(C,t.TEXTURE_MAG_FILTER,K[w.magFilter]),t.texParameteri(C,t.TEXTURE_MIN_FILTER,K[w.minFilter]),w.compareFunction&&(t.texParameteri(C,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(C,t.TEXTURE_COMPARE_FUNC,ee[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===Tn||w.minFilter!==da&&w.minFilter!==gr||w.type===di&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||i.get(w).__currentAnisotropy){const V=e.get("EXT_texture_filter_anisotropic");t.texParameterf(C,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,r.getMaxAnisotropy())),i.get(w).__currentAnisotropy=w.anisotropy}}}function we(C,w){let V=!1;C.__webglInit===void 0&&(C.__webglInit=!0,w.addEventListener("dispose",P));const Q=w.source;let ie=f.get(Q);ie===void 0&&(ie={},f.set(Q,ie));const Z=B(w);if(Z!==C.__cacheKey){ie[Z]===void 0&&(ie[Z]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,V=!0),ie[Z].usedTimes++;const _e=ie[C.__cacheKey];_e!==void 0&&(ie[C.__cacheKey].usedTimes--,_e.usedTimes===0&&R(w)),C.__cacheKey=Z,C.__webglTexture=ie[Z].texture}return V}function Oe(C,w,V){let Q=t.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(Q=t.TEXTURE_2D_ARRAY),w.isData3DTexture&&(Q=t.TEXTURE_3D);const ie=we(C,w),Z=w.source;n.bindTexture(Q,C.__webglTexture,t.TEXTURE0+V);const _e=i.get(Z);if(Z.version!==_e.__version||ie===!0){n.activeTexture(t.TEXTURE0+V);const H=et.getPrimaries(et.workingColorSpace),J=w.colorSpace===Ni?null:et.getPrimaries(w.colorSpace),Ee=w.colorSpace===Ni||H===J?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,w.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,w.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ee);let te=S(w.image,!1,r.maxTextureSize);te=rt(w,te);const ce=s.convert(w.format,w.colorSpace),be=s.convert(w.type);let ye=v(w.internalFormat,ce,be,w.colorSpace,w.isVideoTexture);ae(Q,w);let me;const He=w.mipmaps,Ue=w.isVideoTexture!==!0,tt=_e.__version===void 0||ie===!0,L=Z.dataReady,ue=M(w,te);if(w.isDepthTexture)ye=g(w.format===bs,w.type),tt&&(Ue?n.texStorage2D(t.TEXTURE_2D,1,ye,te.width,te.height):n.texImage2D(t.TEXTURE_2D,0,ye,te.width,te.height,0,ce,be,null));else if(w.isDataTexture)if(He.length>0){Ue&&tt&&n.texStorage2D(t.TEXTURE_2D,ue,ye,He[0].width,He[0].height);for(let X=0,ne=He.length;X<ne;X++)me=He[X],Ue?L&&n.texSubImage2D(t.TEXTURE_2D,X,0,0,me.width,me.height,ce,be,me.data):n.texImage2D(t.TEXTURE_2D,X,ye,me.width,me.height,0,ce,be,me.data);w.generateMipmaps=!1}else Ue?(tt&&n.texStorage2D(t.TEXTURE_2D,ue,ye,te.width,te.height),L&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,te.width,te.height,ce,be,te.data)):n.texImage2D(t.TEXTURE_2D,0,ye,te.width,te.height,0,ce,be,te.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){Ue&&tt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ue,ye,He[0].width,He[0].height,te.depth);for(let X=0,ne=He.length;X<ne;X++)if(me=He[X],w.format!==zn)if(ce!==null)if(Ue){if(L)if(w.layerUpdates.size>0){const he=vm(me.width,me.height,w.format,w.type);for(const ge of w.layerUpdates){const $e=me.data.subarray(ge*he/me.data.BYTES_PER_ELEMENT,(ge+1)*he/me.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,X,0,0,ge,me.width,me.height,1,ce,$e,0,0)}w.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,X,0,0,0,me.width,me.height,te.depth,ce,me.data,0,0)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,X,ye,me.width,me.height,te.depth,0,me.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ue?L&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,X,0,0,0,me.width,me.height,te.depth,ce,be,me.data):n.texImage3D(t.TEXTURE_2D_ARRAY,X,ye,me.width,me.height,te.depth,0,ce,be,me.data)}else{Ue&&tt&&n.texStorage2D(t.TEXTURE_2D,ue,ye,He[0].width,He[0].height);for(let X=0,ne=He.length;X<ne;X++)me=He[X],w.format!==zn?ce!==null?Ue?L&&n.compressedTexSubImage2D(t.TEXTURE_2D,X,0,0,me.width,me.height,ce,me.data):n.compressedTexImage2D(t.TEXTURE_2D,X,ye,me.width,me.height,0,me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ue?L&&n.texSubImage2D(t.TEXTURE_2D,X,0,0,me.width,me.height,ce,be,me.data):n.texImage2D(t.TEXTURE_2D,X,ye,me.width,me.height,0,ce,be,me.data)}else if(w.isDataArrayTexture)if(Ue){if(tt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ue,ye,te.width,te.height,te.depth),L)if(w.layerUpdates.size>0){const X=vm(te.width,te.height,w.format,w.type);for(const ne of w.layerUpdates){const he=te.data.subarray(ne*X/te.data.BYTES_PER_ELEMENT,(ne+1)*X/te.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,ne,te.width,te.height,1,ce,be,he)}w.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,te.width,te.height,te.depth,ce,be,te.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,ye,te.width,te.height,te.depth,0,ce,be,te.data);else if(w.isData3DTexture)Ue?(tt&&n.texStorage3D(t.TEXTURE_3D,ue,ye,te.width,te.height,te.depth),L&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,te.width,te.height,te.depth,ce,be,te.data)):n.texImage3D(t.TEXTURE_3D,0,ye,te.width,te.height,te.depth,0,ce,be,te.data);else if(w.isFramebufferTexture){if(tt)if(Ue)n.texStorage2D(t.TEXTURE_2D,ue,ye,te.width,te.height);else{let X=te.width,ne=te.height;for(let he=0;he<ue;he++)n.texImage2D(t.TEXTURE_2D,he,ye,X,ne,0,ce,be,null),X>>=1,ne>>=1}}else if(He.length>0){if(Ue&&tt){const X=Ce(He[0]);n.texStorage2D(t.TEXTURE_2D,ue,ye,X.width,X.height)}for(let X=0,ne=He.length;X<ne;X++)me=He[X],Ue?L&&n.texSubImage2D(t.TEXTURE_2D,X,0,0,ce,be,me):n.texImage2D(t.TEXTURE_2D,X,ye,ce,be,me);w.generateMipmaps=!1}else if(Ue){if(tt){const X=Ce(te);n.texStorage2D(t.TEXTURE_2D,ue,ye,X.width,X.height)}L&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ce,be,te)}else n.texImage2D(t.TEXTURE_2D,0,ye,ce,be,te);p(w)&&u(Q),_e.__version=Z.version,w.onUpdate&&w.onUpdate(w)}C.__version=w.version}function q(C,w,V){if(w.image.length!==6)return;const Q=we(C,w),ie=w.source;n.bindTexture(t.TEXTURE_CUBE_MAP,C.__webglTexture,t.TEXTURE0+V);const Z=i.get(ie);if(ie.version!==Z.__version||Q===!0){n.activeTexture(t.TEXTURE0+V);const _e=et.getPrimaries(et.workingColorSpace),H=w.colorSpace===Ni?null:et.getPrimaries(w.colorSpace),J=w.colorSpace===Ni||_e===H?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,w.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,w.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,J);const Ee=w.isCompressedTexture||w.image[0].isCompressedTexture,te=w.image[0]&&w.image[0].isDataTexture,ce=[];for(let ne=0;ne<6;ne++)!Ee&&!te?ce[ne]=S(w.image[ne],!0,r.maxCubemapSize):ce[ne]=te?w.image[ne].image:w.image[ne],ce[ne]=rt(w,ce[ne]);const be=ce[0],ye=s.convert(w.format,w.colorSpace),me=s.convert(w.type),He=v(w.internalFormat,ye,me,w.colorSpace),Ue=w.isVideoTexture!==!0,tt=Z.__version===void 0||Q===!0,L=ie.dataReady;let ue=M(w,be);ae(t.TEXTURE_CUBE_MAP,w);let X;if(Ee){Ue&&tt&&n.texStorage2D(t.TEXTURE_CUBE_MAP,ue,He,be.width,be.height);for(let ne=0;ne<6;ne++){X=ce[ne].mipmaps;for(let he=0;he<X.length;he++){const ge=X[he];w.format!==zn?ye!==null?Ue?L&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,he,0,0,ge.width,ge.height,ye,ge.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,he,He,ge.width,ge.height,0,ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ue?L&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,he,0,0,ge.width,ge.height,ye,me,ge.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,he,He,ge.width,ge.height,0,ye,me,ge.data)}}}else{if(X=w.mipmaps,Ue&&tt){X.length>0&&ue++;const ne=Ce(ce[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,ue,He,ne.width,ne.height)}for(let ne=0;ne<6;ne++)if(te){Ue?L&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,ce[ne].width,ce[ne].height,ye,me,ce[ne].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,He,ce[ne].width,ce[ne].height,0,ye,me,ce[ne].data);for(let he=0;he<X.length;he++){const $e=X[he].image[ne].image;Ue?L&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,he+1,0,0,$e.width,$e.height,ye,me,$e.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,he+1,He,$e.width,$e.height,0,ye,me,$e.data)}}else{Ue?L&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,ye,me,ce[ne]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,He,ye,me,ce[ne]);for(let he=0;he<X.length;he++){const ge=X[he];Ue?L&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,he+1,0,0,ye,me,ge.image[ne]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,he+1,He,ye,me,ge.image[ne])}}}p(w)&&u(t.TEXTURE_CUBE_MAP),Z.__version=ie.version,w.onUpdate&&w.onUpdate(w)}C.__version=w.version}function re(C,w,V,Q,ie,Z){const _e=s.convert(V.format,V.colorSpace),H=s.convert(V.type),J=v(V.internalFormat,_e,H,V.colorSpace);if(!i.get(w).__hasExternalTextures){const te=Math.max(1,w.width>>Z),ce=Math.max(1,w.height>>Z);ie===t.TEXTURE_3D||ie===t.TEXTURE_2D_ARRAY?n.texImage3D(ie,Z,J,te,ce,w.depth,0,_e,H,null):n.texImage2D(ie,Z,J,te,ce,0,_e,H,null)}n.bindFramebuffer(t.FRAMEBUFFER,C),We(w)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Q,ie,i.get(V).__webglTexture,0,Be(w)):(ie===t.TEXTURE_2D||ie>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ie<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,Q,ie,i.get(V).__webglTexture,Z),n.bindFramebuffer(t.FRAMEBUFFER,null)}function fe(C,w,V){if(t.bindRenderbuffer(t.RENDERBUFFER,C),w.depthBuffer){const Q=w.depthTexture,ie=Q&&Q.isDepthTexture?Q.type:null,Z=g(w.stencilBuffer,ie),_e=w.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,H=Be(w);We(w)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,H,Z,w.width,w.height):V?t.renderbufferStorageMultisample(t.RENDERBUFFER,H,Z,w.width,w.height):t.renderbufferStorage(t.RENDERBUFFER,Z,w.width,w.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,_e,t.RENDERBUFFER,C)}else{const Q=w.textures;for(let ie=0;ie<Q.length;ie++){const Z=Q[ie],_e=s.convert(Z.format,Z.colorSpace),H=s.convert(Z.type),J=v(Z.internalFormat,_e,H,Z.colorSpace),Ee=Be(w);V&&We(w)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Ee,J,w.width,w.height):We(w)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Ee,J,w.width,w.height):t.renderbufferStorage(t.RENDERBUFFER,J,w.width,w.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function de(C,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,C),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),O(w.depthTexture,0);const Q=i.get(w.depthTexture).__webglTexture,ie=Be(w);if(w.depthTexture.format===ps)We(w)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,Q,0,ie):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,Q,0);else if(w.depthTexture.format===bs)We(w)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,Q,0,ie):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function De(C){const w=i.get(C),V=C.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==C.depthTexture){const Q=C.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),Q){const ie=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,Q.removeEventListener("dispose",ie)};Q.addEventListener("dispose",ie),w.__depthDisposeCallback=ie}w.__boundDepthTexture=Q}if(C.depthTexture&&!w.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");de(w.__webglFramebuffer,C)}else if(V){w.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)if(n.bindFramebuffer(t.FRAMEBUFFER,w.__webglFramebuffer[Q]),w.__webglDepthbuffer[Q]===void 0)w.__webglDepthbuffer[Q]=t.createRenderbuffer(),fe(w.__webglDepthbuffer[Q],C,!1);else{const ie=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Z=w.__webglDepthbuffer[Q];t.bindRenderbuffer(t.RENDERBUFFER,Z),t.framebufferRenderbuffer(t.FRAMEBUFFER,ie,t.RENDERBUFFER,Z)}}else if(n.bindFramebuffer(t.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=t.createRenderbuffer(),fe(w.__webglDepthbuffer,C,!1);else{const Q=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ie=w.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,ie),t.framebufferRenderbuffer(t.FRAMEBUFFER,Q,t.RENDERBUFFER,ie)}n.bindFramebuffer(t.FRAMEBUFFER,null)}function Re(C,w,V){const Q=i.get(C);w!==void 0&&re(Q.__webglFramebuffer,C,C.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),V!==void 0&&De(C)}function Ve(C){const w=C.texture,V=i.get(C),Q=i.get(w);C.addEventListener("dispose",b);const ie=C.textures,Z=C.isWebGLCubeRenderTarget===!0,_e=ie.length>1;if(_e||(Q.__webglTexture===void 0&&(Q.__webglTexture=t.createTexture()),Q.__version=w.version,o.memory.textures++),Z){V.__webglFramebuffer=[];for(let H=0;H<6;H++)if(w.mipmaps&&w.mipmaps.length>0){V.__webglFramebuffer[H]=[];for(let J=0;J<w.mipmaps.length;J++)V.__webglFramebuffer[H][J]=t.createFramebuffer()}else V.__webglFramebuffer[H]=t.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){V.__webglFramebuffer=[];for(let H=0;H<w.mipmaps.length;H++)V.__webglFramebuffer[H]=t.createFramebuffer()}else V.__webglFramebuffer=t.createFramebuffer();if(_e)for(let H=0,J=ie.length;H<J;H++){const Ee=i.get(ie[H]);Ee.__webglTexture===void 0&&(Ee.__webglTexture=t.createTexture(),o.memory.textures++)}if(C.samples>0&&We(C)===!1){V.__webglMultisampledFramebuffer=t.createFramebuffer(),V.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let H=0;H<ie.length;H++){const J=ie[H];V.__webglColorRenderbuffer[H]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,V.__webglColorRenderbuffer[H]);const Ee=s.convert(J.format,J.colorSpace),te=s.convert(J.type),ce=v(J.internalFormat,Ee,te,J.colorSpace,C.isXRRenderTarget===!0),be=Be(C);t.renderbufferStorageMultisample(t.RENDERBUFFER,be,ce,C.width,C.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+H,t.RENDERBUFFER,V.__webglColorRenderbuffer[H])}t.bindRenderbuffer(t.RENDERBUFFER,null),C.depthBuffer&&(V.__webglDepthRenderbuffer=t.createRenderbuffer(),fe(V.__webglDepthRenderbuffer,C,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(Z){n.bindTexture(t.TEXTURE_CUBE_MAP,Q.__webglTexture),ae(t.TEXTURE_CUBE_MAP,w);for(let H=0;H<6;H++)if(w.mipmaps&&w.mipmaps.length>0)for(let J=0;J<w.mipmaps.length;J++)re(V.__webglFramebuffer[H][J],C,w,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+H,J);else re(V.__webglFramebuffer[H],C,w,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+H,0);p(w)&&u(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(_e){for(let H=0,J=ie.length;H<J;H++){const Ee=ie[H],te=i.get(Ee);n.bindTexture(t.TEXTURE_2D,te.__webglTexture),ae(t.TEXTURE_2D,Ee),re(V.__webglFramebuffer,C,Ee,t.COLOR_ATTACHMENT0+H,t.TEXTURE_2D,0),p(Ee)&&u(t.TEXTURE_2D)}n.unbindTexture()}else{let H=t.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(H=C.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(H,Q.__webglTexture),ae(H,w),w.mipmaps&&w.mipmaps.length>0)for(let J=0;J<w.mipmaps.length;J++)re(V.__webglFramebuffer[J],C,w,t.COLOR_ATTACHMENT0,H,J);else re(V.__webglFramebuffer,C,w,t.COLOR_ATTACHMENT0,H,0);p(w)&&u(H),n.unbindTexture()}C.depthBuffer&&De(C)}function Ze(C){const w=C.textures;for(let V=0,Q=w.length;V<Q;V++){const ie=w[V];if(p(ie)){const Z=C.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,_e=i.get(ie).__webglTexture;n.bindTexture(Z,_e),u(Z),n.unbindTexture()}}}const Ge=[],I=[];function Wt(C){if(C.samples>0){if(We(C)===!1){const w=C.textures,V=C.width,Q=C.height;let ie=t.COLOR_BUFFER_BIT;const Z=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,_e=i.get(C),H=w.length>1;if(H)for(let J=0;J<w.length;J++)n.bindFramebuffer(t.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+J,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,_e.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+J,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,_e.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,_e.__webglFramebuffer);for(let J=0;J<w.length;J++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(ie|=t.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(ie|=t.STENCIL_BUFFER_BIT)),H){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,_e.__webglColorRenderbuffer[J]);const Ee=i.get(w[J]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Ee,0)}t.blitFramebuffer(0,0,V,Q,0,0,V,Q,ie,t.NEAREST),l===!0&&(Ge.length=0,I.length=0,Ge.push(t.COLOR_ATTACHMENT0+J),C.depthBuffer&&C.resolveDepthBuffer===!1&&(Ge.push(Z),I.push(Z),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,I)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,Ge))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),H)for(let J=0;J<w.length;J++){n.bindFramebuffer(t.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+J,t.RENDERBUFFER,_e.__webglColorRenderbuffer[J]);const Ee=i.get(w[J]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,_e.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+J,t.TEXTURE_2D,Ee,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,_e.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){const w=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[w])}}}function Be(C){return Math.min(r.maxSamples,C.samples)}function We(C){const w=i.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function Pe(C){const w=o.render.frame;d.get(C)!==w&&(d.set(C,w),C.update())}function rt(C,w){const V=C.colorSpace,Q=C.format,ie=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||V!==Qi&&V!==Ni&&(et.getTransfer(V)===lt?(Q!==zn||ie!==xi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),w}function Ce(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=U,this.resetTextureUnits=E,this.setTexture2D=O,this.setTexture2DArray=$,this.setTexture3D=j,this.setTextureCube=Y,this.rebindTextures=Re,this.setupRenderTarget=Ve,this.updateRenderTargetMipmap=Ze,this.updateMultisampleRenderTarget=Wt,this.setupDepthRenderbuffer=De,this.setupFrameBufferTexture=re,this.useMultisampledRTT=We}function _2(t,e){function n(i,r=Ni){let s;const o=et.getTransfer(r);if(i===xi)return t.UNSIGNED_BYTE;if(i===Bf)return t.UNSIGNED_SHORT_4_4_4_4;if(i===Hf)return t.UNSIGNED_SHORT_5_5_5_1;if(i===X0)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===W0)return t.BYTE;if(i===j0)return t.SHORT;if(i===No)return t.UNSIGNED_SHORT;if(i===zf)return t.INT;if(i===Tr)return t.UNSIGNED_INT;if(i===di)return t.FLOAT;if(i===Go)return t.HALF_FLOAT;if(i===$0)return t.ALPHA;if(i===Y0)return t.RGB;if(i===zn)return t.RGBA;if(i===q0)return t.LUMINANCE;if(i===K0)return t.LUMINANCE_ALPHA;if(i===ps)return t.DEPTH_COMPONENT;if(i===bs)return t.DEPTH_STENCIL;if(i===Z0)return t.RED;if(i===Vf)return t.RED_INTEGER;if(i===Q0)return t.RG;if(i===Gf)return t.RG_INTEGER;if(i===Wf)return t.RGBA_INTEGER;if(i===ja||i===Xa||i===$a||i===Ya)if(o===lt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===ja)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Xa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===$a)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ya)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===ja)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Xa)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===$a)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ya)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===hd||i===pd||i===md||i===gd)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===hd)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===pd)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===md)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===gd)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===vd||i===xd||i===_d)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===vd||i===xd)return o===lt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===_d)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===yd||i===Sd||i===Md||i===Ed||i===wd||i===Td||i===Ad||i===bd||i===Cd||i===Rd||i===Pd||i===Ld||i===Nd||i===Dd)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===yd)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Sd)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Md)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Ed)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===wd)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Td)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Ad)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===bd)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Cd)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Rd)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Pd)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Ld)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Nd)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Dd)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===qa||i===Id||i===Ud)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===qa)return o===lt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Id)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Ud)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===J0||i===Fd||i===kd||i===Od)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===qa)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Fd)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===kd)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Od)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===As?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}class y2 extends Mn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Ht extends Nt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const S2={type:"move"};class Qc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ht,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ht,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ht,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const S of e.hand.values()){const p=n.getJointPose(S,i),u=this._getHandJoint(c,S);p!==null&&(u.matrix.fromArray(p.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=p.radius),u.visible=p!==null}const d=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=d.position.distanceTo(h.position),m=.02,y=.005;c.inputState.pinching&&f>m+y?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=m-y&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(S2)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Ht;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const M2=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,E2=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class w2{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new an,s=e.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new Yi({vertexShader:M2,fragmentShader:E2,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Mt(new Rs(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class T2 extends Is{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,d=null,h=null,f=null,m=null,y=null;const S=new w2,p=n.getContextAttributes();let u=null,v=null;const g=[],M=[],P=new Xe;let b=null;const T=new Mn;T.layers.enable(1),T.viewport=new gt;const R=new Mn;R.layers.enable(2),R.viewport=new gt;const D=[T,R],x=new y2;x.layers.enable(1),x.layers.enable(2);let E=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let re=g[q];return re===void 0&&(re=new Qc,g[q]=re),re.getTargetRaySpace()},this.getControllerGrip=function(q){let re=g[q];return re===void 0&&(re=new Qc,g[q]=re),re.getGripSpace()},this.getHand=function(q){let re=g[q];return re===void 0&&(re=new Qc,g[q]=re),re.getHandSpace()};function B(q){const re=M.indexOf(q.inputSource);if(re===-1)return;const fe=g[re];fe!==void 0&&(fe.update(q.inputSource,q.frame,c||o),fe.dispatchEvent({type:q.type,data:q.inputSource}))}function O(){r.removeEventListener("select",B),r.removeEventListener("selectstart",B),r.removeEventListener("selectend",B),r.removeEventListener("squeeze",B),r.removeEventListener("squeezestart",B),r.removeEventListener("squeezeend",B),r.removeEventListener("end",O),r.removeEventListener("inputsourceschange",$);for(let q=0;q<g.length;q++){const re=M[q];re!==null&&(M[q]=null,g[q].disconnect(re))}E=null,U=null,S.reset(),e.setRenderTarget(u),m=null,f=null,h=null,r=null,v=null,Oe.stop(),i.isPresenting=!1,e.setPixelRatio(b),e.setSize(P.width,P.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){s=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){a=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return h},this.getFrame=function(){return y},this.getSession=function(){return r},this.setSession=async function(q){if(r=q,r!==null){if(u=e.getRenderTarget(),r.addEventListener("select",B),r.addEventListener("selectstart",B),r.addEventListener("selectend",B),r.addEventListener("squeeze",B),r.addEventListener("squeezestart",B),r.addEventListener("squeezeend",B),r.addEventListener("end",O),r.addEventListener("inputsourceschange",$),p.xrCompatible!==!0&&await n.makeXRCompatible(),b=e.getPixelRatio(),e.getSize(P),r.renderState.layers===void 0){const re={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,n,re),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),v=new Ar(m.framebufferWidth,m.framebufferHeight,{format:zn,type:xi,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let re=null,fe=null,de=null;p.depth&&(de=p.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,re=p.stencil?bs:ps,fe=p.stencil?As:Tr);const De={colorFormat:n.RGBA8,depthFormat:de,scaleFactor:s};h=new XRWebGLBinding(r,n),f=h.createProjectionLayer(De),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),v=new Ar(f.textureWidth,f.textureHeight,{format:zn,type:xi,depthTexture:new pv(f.textureWidth,f.textureHeight,fe,void 0,void 0,void 0,void 0,void 0,void 0,re),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),Oe.setContext(r),Oe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function $(q){for(let re=0;re<q.removed.length;re++){const fe=q.removed[re],de=M.indexOf(fe);de>=0&&(M[de]=null,g[de].disconnect(fe))}for(let re=0;re<q.added.length;re++){const fe=q.added[re];let de=M.indexOf(fe);if(de===-1){for(let Re=0;Re<g.length;Re++)if(Re>=M.length){M.push(fe),de=Re;break}else if(M[Re]===null){M[Re]=fe,de=Re;break}if(de===-1)break}const De=g[de];De&&De.connect(fe)}}const j=new z,Y=new z;function N(q,re,fe){j.setFromMatrixPosition(re.matrixWorld),Y.setFromMatrixPosition(fe.matrixWorld);const de=j.distanceTo(Y),De=re.projectionMatrix.elements,Re=fe.projectionMatrix.elements,Ve=De[14]/(De[10]-1),Ze=De[14]/(De[10]+1),Ge=(De[9]+1)/De[5],I=(De[9]-1)/De[5],Wt=(De[8]-1)/De[0],Be=(Re[8]+1)/Re[0],We=Ve*Wt,Pe=Ve*Be,rt=de/(-Wt+Be),Ce=rt*-Wt;if(re.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(Ce),q.translateZ(rt),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),De[10]===-1)q.projectionMatrix.copy(re.projectionMatrix),q.projectionMatrixInverse.copy(re.projectionMatrixInverse);else{const C=Ve+rt,w=Ze+rt,V=We-Ce,Q=Pe+(de-Ce),ie=Ge*Ze/w*C,Z=I*Ze/w*C;q.projectionMatrix.makePerspective(V,Q,ie,Z,C,w),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function K(q,re){re===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(re.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(r===null)return;let re=q.near,fe=q.far;S.texture!==null&&(S.depthNear>0&&(re=S.depthNear),S.depthFar>0&&(fe=S.depthFar)),x.near=R.near=T.near=re,x.far=R.far=T.far=fe,(E!==x.near||U!==x.far)&&(r.updateRenderState({depthNear:x.near,depthFar:x.far}),E=x.near,U=x.far);const de=q.parent,De=x.cameras;K(x,de);for(let Re=0;Re<De.length;Re++)K(De[Re],de);De.length===2?N(x,T,R):x.projectionMatrix.copy(T.projectionMatrix),ee(q,x,de)};function ee(q,re,fe){fe===null?q.matrix.copy(re.matrixWorld):(q.matrix.copy(fe.matrixWorld),q.matrix.invert(),q.matrix.multiply(re.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(re.projectionMatrix),q.projectionMatrixInverse.copy(re.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Do*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(f===null&&m===null))return l},this.setFoveation=function(q){l=q,f!==null&&(f.fixedFoveation=q),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=q)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(x)};let ae=null;function we(q,re){if(d=re.getViewerPose(c||o),y=re,d!==null){const fe=d.views;m!==null&&(e.setRenderTargetFramebuffer(v,m.framebuffer),e.setRenderTarget(v));let de=!1;fe.length!==x.cameras.length&&(x.cameras.length=0,de=!0);for(let Re=0;Re<fe.length;Re++){const Ve=fe[Re];let Ze=null;if(m!==null)Ze=m.getViewport(Ve);else{const I=h.getViewSubImage(f,Ve);Ze=I.viewport,Re===0&&(e.setRenderTargetTextures(v,I.colorTexture,f.ignoreDepthValues?void 0:I.depthStencilTexture),e.setRenderTarget(v))}let Ge=D[Re];Ge===void 0&&(Ge=new Mn,Ge.layers.enable(Re),Ge.viewport=new gt,D[Re]=Ge),Ge.matrix.fromArray(Ve.transform.matrix),Ge.matrix.decompose(Ge.position,Ge.quaternion,Ge.scale),Ge.projectionMatrix.fromArray(Ve.projectionMatrix),Ge.projectionMatrixInverse.copy(Ge.projectionMatrix).invert(),Ge.viewport.set(Ze.x,Ze.y,Ze.width,Ze.height),Re===0&&(x.matrix.copy(Ge.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),de===!0&&x.cameras.push(Ge)}const De=r.enabledFeatures;if(De&&De.includes("depth-sensing")){const Re=h.getDepthInformation(fe[0]);Re&&Re.isValid&&Re.texture&&S.init(e,Re,r.renderState)}}for(let fe=0;fe<g.length;fe++){const de=M[fe],De=g[fe];de!==null&&De!==void 0&&De.update(de,re,c||o)}ae&&ae(q,re),re.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:re}),y=null}const Oe=new hv;Oe.setAnimationLoop(we),this.setAnimationLoop=function(q){ae=q},this.dispose=function(){}}}const sr=new Qn,A2=new vt;function b2(t,e){function n(p,u){p.matrixAutoUpdate===!0&&p.updateMatrix(),u.value.copy(p.matrix)}function i(p,u){u.color.getRGB(p.fogColor.value,uv(t)),u.isFog?(p.fogNear.value=u.near,p.fogFar.value=u.far):u.isFogExp2&&(p.fogDensity.value=u.density)}function r(p,u,v,g,M){u.isMeshBasicMaterial||u.isMeshLambertMaterial?s(p,u):u.isMeshToonMaterial?(s(p,u),h(p,u)):u.isMeshPhongMaterial?(s(p,u),d(p,u)):u.isMeshStandardMaterial?(s(p,u),f(p,u),u.isMeshPhysicalMaterial&&m(p,u,M)):u.isMeshMatcapMaterial?(s(p,u),y(p,u)):u.isMeshDepthMaterial?s(p,u):u.isMeshDistanceMaterial?(s(p,u),S(p,u)):u.isMeshNormalMaterial?s(p,u):u.isLineBasicMaterial?(o(p,u),u.isLineDashedMaterial&&a(p,u)):u.isPointsMaterial?l(p,u,v,g):u.isSpriteMaterial?c(p,u):u.isShadowMaterial?(p.color.value.copy(u.color),p.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(p,u){p.opacity.value=u.opacity,u.color&&p.diffuse.value.copy(u.color),u.emissive&&p.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(p.map.value=u.map,n(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,n(u.alphaMap,p.alphaMapTransform)),u.bumpMap&&(p.bumpMap.value=u.bumpMap,n(u.bumpMap,p.bumpMapTransform),p.bumpScale.value=u.bumpScale,u.side===on&&(p.bumpScale.value*=-1)),u.normalMap&&(p.normalMap.value=u.normalMap,n(u.normalMap,p.normalMapTransform),p.normalScale.value.copy(u.normalScale),u.side===on&&p.normalScale.value.negate()),u.displacementMap&&(p.displacementMap.value=u.displacementMap,n(u.displacementMap,p.displacementMapTransform),p.displacementScale.value=u.displacementScale,p.displacementBias.value=u.displacementBias),u.emissiveMap&&(p.emissiveMap.value=u.emissiveMap,n(u.emissiveMap,p.emissiveMapTransform)),u.specularMap&&(p.specularMap.value=u.specularMap,n(u.specularMap,p.specularMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest);const v=e.get(u),g=v.envMap,M=v.envMapRotation;g&&(p.envMap.value=g,sr.copy(M),sr.x*=-1,sr.y*=-1,sr.z*=-1,g.isCubeTexture&&g.isRenderTargetTexture===!1&&(sr.y*=-1,sr.z*=-1),p.envMapRotation.value.setFromMatrix4(A2.makeRotationFromEuler(sr)),p.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=u.reflectivity,p.ior.value=u.ior,p.refractionRatio.value=u.refractionRatio),u.lightMap&&(p.lightMap.value=u.lightMap,p.lightMapIntensity.value=u.lightMapIntensity,n(u.lightMap,p.lightMapTransform)),u.aoMap&&(p.aoMap.value=u.aoMap,p.aoMapIntensity.value=u.aoMapIntensity,n(u.aoMap,p.aoMapTransform))}function o(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,u.map&&(p.map.value=u.map,n(u.map,p.mapTransform))}function a(p,u){p.dashSize.value=u.dashSize,p.totalSize.value=u.dashSize+u.gapSize,p.scale.value=u.scale}function l(p,u,v,g){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.size.value=u.size*v,p.scale.value=g*.5,u.map&&(p.map.value=u.map,n(u.map,p.uvTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,n(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function c(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.rotation.value=u.rotation,u.map&&(p.map.value=u.map,n(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,n(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function d(p,u){p.specular.value.copy(u.specular),p.shininess.value=Math.max(u.shininess,1e-4)}function h(p,u){u.gradientMap&&(p.gradientMap.value=u.gradientMap)}function f(p,u){p.metalness.value=u.metalness,u.metalnessMap&&(p.metalnessMap.value=u.metalnessMap,n(u.metalnessMap,p.metalnessMapTransform)),p.roughness.value=u.roughness,u.roughnessMap&&(p.roughnessMap.value=u.roughnessMap,n(u.roughnessMap,p.roughnessMapTransform)),u.envMap&&(p.envMapIntensity.value=u.envMapIntensity)}function m(p,u,v){p.ior.value=u.ior,u.sheen>0&&(p.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),p.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(p.sheenColorMap.value=u.sheenColorMap,n(u.sheenColorMap,p.sheenColorMapTransform)),u.sheenRoughnessMap&&(p.sheenRoughnessMap.value=u.sheenRoughnessMap,n(u.sheenRoughnessMap,p.sheenRoughnessMapTransform))),u.clearcoat>0&&(p.clearcoat.value=u.clearcoat,p.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(p.clearcoatMap.value=u.clearcoatMap,n(u.clearcoatMap,p.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,n(u.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(p.clearcoatNormalMap.value=u.clearcoatNormalMap,n(u.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===on&&p.clearcoatNormalScale.value.negate())),u.dispersion>0&&(p.dispersion.value=u.dispersion),u.iridescence>0&&(p.iridescence.value=u.iridescence,p.iridescenceIOR.value=u.iridescenceIOR,p.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(p.iridescenceMap.value=u.iridescenceMap,n(u.iridescenceMap,p.iridescenceMapTransform)),u.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=u.iridescenceThicknessMap,n(u.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),u.transmission>0&&(p.transmission.value=u.transmission,p.transmissionSamplerMap.value=v.texture,p.transmissionSamplerSize.value.set(v.width,v.height),u.transmissionMap&&(p.transmissionMap.value=u.transmissionMap,n(u.transmissionMap,p.transmissionMapTransform)),p.thickness.value=u.thickness,u.thicknessMap&&(p.thicknessMap.value=u.thicknessMap,n(u.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=u.attenuationDistance,p.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(p.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(p.anisotropyMap.value=u.anisotropyMap,n(u.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=u.specularIntensity,p.specularColor.value.copy(u.specularColor),u.specularColorMap&&(p.specularColorMap.value=u.specularColorMap,n(u.specularColorMap,p.specularColorMapTransform)),u.specularIntensityMap&&(p.specularIntensityMap.value=u.specularIntensityMap,n(u.specularIntensityMap,p.specularIntensityMapTransform))}function y(p,u){u.matcap&&(p.matcap.value=u.matcap)}function S(p,u){const v=e.get(u).light;p.referencePosition.value.setFromMatrixPosition(v.matrixWorld),p.nearDistance.value=v.shadow.camera.near,p.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function C2(t,e,n,i){let r={},s={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,g){const M=g.program;i.uniformBlockBinding(v,M)}function c(v,g){let M=r[v.id];M===void 0&&(y(v),M=d(v),r[v.id]=M,v.addEventListener("dispose",p));const P=g.program;i.updateUBOMapping(v,P);const b=e.render.frame;s[v.id]!==b&&(f(v),s[v.id]=b)}function d(v){const g=h();v.__bindingPointIndex=g;const M=t.createBuffer(),P=v.__size,b=v.usage;return t.bindBuffer(t.UNIFORM_BUFFER,M),t.bufferData(t.UNIFORM_BUFFER,P,b),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,g,M),M}function h(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(v){const g=r[v.id],M=v.uniforms,P=v.__cache;t.bindBuffer(t.UNIFORM_BUFFER,g);for(let b=0,T=M.length;b<T;b++){const R=Array.isArray(M[b])?M[b]:[M[b]];for(let D=0,x=R.length;D<x;D++){const E=R[D];if(m(E,b,D,P)===!0){const U=E.__offset,B=Array.isArray(E.value)?E.value:[E.value];let O=0;for(let $=0;$<B.length;$++){const j=B[$],Y=S(j);typeof j=="number"||typeof j=="boolean"?(E.__data[0]=j,t.bufferSubData(t.UNIFORM_BUFFER,U+O,E.__data)):j.isMatrix3?(E.__data[0]=j.elements[0],E.__data[1]=j.elements[1],E.__data[2]=j.elements[2],E.__data[3]=0,E.__data[4]=j.elements[3],E.__data[5]=j.elements[4],E.__data[6]=j.elements[5],E.__data[7]=0,E.__data[8]=j.elements[6],E.__data[9]=j.elements[7],E.__data[10]=j.elements[8],E.__data[11]=0):(j.toArray(E.__data,O),O+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,U,E.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function m(v,g,M,P){const b=v.value,T=g+"_"+M;if(P[T]===void 0)return typeof b=="number"||typeof b=="boolean"?P[T]=b:P[T]=b.clone(),!0;{const R=P[T];if(typeof b=="number"||typeof b=="boolean"){if(R!==b)return P[T]=b,!0}else if(R.equals(b)===!1)return R.copy(b),!0}return!1}function y(v){const g=v.uniforms;let M=0;const P=16;for(let T=0,R=g.length;T<R;T++){const D=Array.isArray(g[T])?g[T]:[g[T]];for(let x=0,E=D.length;x<E;x++){const U=D[x],B=Array.isArray(U.value)?U.value:[U.value];for(let O=0,$=B.length;O<$;O++){const j=B[O],Y=S(j),N=M%P,K=N%Y.boundary,ee=N+K;M+=K,ee!==0&&P-ee<Y.storage&&(M+=P-ee),U.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=M,M+=Y.storage}}}const b=M%P;return b>0&&(M+=P-b),v.__size=M,v.__cache={},this}function S(v){const g={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(g.boundary=4,g.storage=4):v.isVector2?(g.boundary=8,g.storage=8):v.isVector3||v.isColor?(g.boundary=16,g.storage=12):v.isVector4?(g.boundary=16,g.storage=16):v.isMatrix3?(g.boundary=48,g.storage=48):v.isMatrix4?(g.boundary=64,g.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),g}function p(v){const g=v.target;g.removeEventListener("dispose",p);const M=o.indexOf(g.__bindingPointIndex);o.splice(M,1),t.deleteBuffer(r[g.id]),delete r[g.id],delete s[g.id]}function u(){for(const v in r)t.deleteBuffer(r[v]);o=[],r={},s={}}return{bind:l,update:c,dispose:u}}class _v{constructor(e={}){const{canvas:n=m1(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=o;const m=new Uint32Array(4),y=new Int32Array(4);let S=null,p=null;const u=[],v=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Xn,this.toneMapping=Wi,this.toneMappingExposure=1;const g=this;let M=!1,P=0,b=0,T=null,R=-1,D=null;const x=new gt,E=new gt;let U=null;const B=new Ye(0);let O=0,$=n.width,j=n.height,Y=1,N=null,K=null;const ee=new gt(0,0,$,j),ae=new gt(0,0,$,j);let we=!1;const Oe=new Yf;let q=!1,re=!1;const fe=new vt,de=new vt,De=new z,Re=new gt,Ve={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ze=!1;function Ge(){return T===null?Y:1}let I=i;function Wt(A,F){return n.getContext(A,F)}try{const A={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:h};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Ff}`),n.addEventListener("webglcontextlost",ne,!1),n.addEventListener("webglcontextrestored",he,!1),n.addEventListener("webglcontextcreationerror",ge,!1),I===null){const F="webgl2";if(I=Wt(F,A),I===null)throw Wt(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let Be,We,Pe,rt,Ce,C,w,V,Q,ie,Z,_e,H,J,Ee,te,ce,be,ye,me,He,Ue,tt,L;function ue(){Be=new IE(I),Be.init(),Ue=new _2(I,Be),We=new CE(I,Be,e,Ue),Pe=new g2(I),We.reverseDepthBuffer&&Pe.buffers.depth.setReversed(!0),rt=new kE(I),Ce=new t2,C=new x2(I,Be,Pe,Ce,We,Ue,rt),w=new PE(g),V=new DE(g),Q=new W1(I),tt=new AE(I,Q),ie=new UE(I,Q,rt,tt),Z=new zE(I,ie,Q,rt),ye=new OE(I,We,C),te=new RE(Ce),_e=new e2(g,w,V,Be,We,tt,te),H=new b2(g,Ce),J=new i2,Ee=new c2(Be),be=new TE(g,w,V,Pe,Z,f,l),ce=new p2(g,Z,We),L=new C2(I,rt,We,Pe),me=new bE(I,Be,rt),He=new FE(I,Be,rt),rt.programs=_e.programs,g.capabilities=We,g.extensions=Be,g.properties=Ce,g.renderLists=J,g.shadowMap=ce,g.state=Pe,g.info=rt}ue();const X=new T2(g,I);this.xr=X,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const A=Be.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=Be.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(A){A!==void 0&&(Y=A,this.setSize($,j,!1))},this.getSize=function(A){return A.set($,j)},this.setSize=function(A,F,G=!0){if(X.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}$=A,j=F,n.width=Math.floor(A*Y),n.height=Math.floor(F*Y),G===!0&&(n.style.width=A+"px",n.style.height=F+"px"),this.setViewport(0,0,A,F)},this.getDrawingBufferSize=function(A){return A.set($*Y,j*Y).floor()},this.setDrawingBufferSize=function(A,F,G){$=A,j=F,Y=G,n.width=Math.floor(A*G),n.height=Math.floor(F*G),this.setViewport(0,0,A,F)},this.getCurrentViewport=function(A){return A.copy(x)},this.getViewport=function(A){return A.copy(ee)},this.setViewport=function(A,F,G,W){A.isVector4?ee.set(A.x,A.y,A.z,A.w):ee.set(A,F,G,W),Pe.viewport(x.copy(ee).multiplyScalar(Y).round())},this.getScissor=function(A){return A.copy(ae)},this.setScissor=function(A,F,G,W){A.isVector4?ae.set(A.x,A.y,A.z,A.w):ae.set(A,F,G,W),Pe.scissor(E.copy(ae).multiplyScalar(Y).round())},this.getScissorTest=function(){return we},this.setScissorTest=function(A){Pe.setScissorTest(we=A)},this.setOpaqueSort=function(A){N=A},this.setTransparentSort=function(A){K=A},this.getClearColor=function(A){return A.copy(be.getClearColor())},this.setClearColor=function(){be.setClearColor.apply(be,arguments)},this.getClearAlpha=function(){return be.getClearAlpha()},this.setClearAlpha=function(){be.setClearAlpha.apply(be,arguments)},this.clear=function(A=!0,F=!0,G=!0){let W=0;if(A){let k=!1;if(T!==null){const oe=T.texture.format;k=oe===Wf||oe===Gf||oe===Vf}if(k){const oe=T.texture.type,pe=oe===xi||oe===Tr||oe===No||oe===As||oe===Bf||oe===Hf,xe=be.getClearColor(),Se=be.getClearAlpha(),Le=xe.r,Ne=xe.g,Te=xe.b;pe?(m[0]=Le,m[1]=Ne,m[2]=Te,m[3]=Se,I.clearBufferuiv(I.COLOR,0,m)):(y[0]=Le,y[1]=Ne,y[2]=Te,y[3]=Se,I.clearBufferiv(I.COLOR,0,y))}else W|=I.COLOR_BUFFER_BIT}F&&(W|=I.DEPTH_BUFFER_BIT,I.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),G&&(W|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",ne,!1),n.removeEventListener("webglcontextrestored",he,!1),n.removeEventListener("webglcontextcreationerror",ge,!1),J.dispose(),Ee.dispose(),Ce.dispose(),w.dispose(),V.dispose(),Z.dispose(),tt.dispose(),L.dispose(),_e.dispose(),X.dispose(),X.removeEventListener("sessionstart",oh),X.removeEventListener("sessionend",ah),Ji.stop()};function ne(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function he(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;const A=rt.autoReset,F=ce.enabled,G=ce.autoUpdate,W=ce.needsUpdate,k=ce.type;ue(),rt.autoReset=A,ce.enabled=F,ce.autoUpdate=G,ce.needsUpdate=W,ce.type=k}function ge(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function $e(A){const F=A.target;F.removeEventListener("dispose",$e),yt(F)}function yt(A){Qt(A),Ce.remove(A)}function Qt(A){const F=Ce.get(A).programs;F!==void 0&&(F.forEach(function(G){_e.releaseProgram(G)}),A.isShaderMaterial&&_e.releaseShaderCache(A))}this.renderBufferDirect=function(A,F,G,W,k,oe){F===null&&(F=Ve);const pe=k.isMesh&&k.matrixWorld.determinant()<0,xe=Dv(A,F,G,W,k);Pe.setMaterial(W,pe);let Se=G.index,Le=1;if(W.wireframe===!0){if(Se=ie.getWireframeAttribute(G),Se===void 0)return;Le=2}const Ne=G.drawRange,Te=G.attributes.position;let nt=Ne.start*Le,ot=(Ne.start+Ne.count)*Le;oe!==null&&(nt=Math.max(nt,oe.start*Le),ot=Math.min(ot,(oe.start+oe.count)*Le)),Se!==null?(nt=Math.max(nt,0),ot=Math.min(ot,Se.count)):Te!=null&&(nt=Math.max(nt,0),ot=Math.min(ot,Te.count));const pt=ot-nt;if(pt<0||pt===1/0)return;tt.setup(k,W,xe,G,Se);let ln,Qe=me;if(Se!==null&&(ln=Q.get(Se),Qe=He,Qe.setIndex(ln)),k.isMesh)W.wireframe===!0?(Pe.setLineWidth(W.wireframeLinewidth*Ge()),Qe.setMode(I.LINES)):Qe.setMode(I.TRIANGLES);else if(k.isLine){let Ae=W.linewidth;Ae===void 0&&(Ae=1),Pe.setLineWidth(Ae*Ge()),k.isLineSegments?Qe.setMode(I.LINES):k.isLineLoop?Qe.setMode(I.LINE_LOOP):Qe.setMode(I.LINE_STRIP)}else k.isPoints?Qe.setMode(I.POINTS):k.isSprite&&Qe.setMode(I.TRIANGLES);if(k.isBatchedMesh)if(k._multiDrawInstances!==null)Qe.renderMultiDrawInstances(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount,k._multiDrawInstances);else if(Be.get("WEBGL_multi_draw"))Qe.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{const Ae=k._multiDrawStarts,Dt=k._multiDrawCounts,Je=k._multiDrawCount,Rn=Se?Q.get(Se).bytesPerElement:1,Lr=Ce.get(W).currentProgram.getUniforms();for(let cn=0;cn<Je;cn++)Lr.setValue(I,"_gl_DrawID",cn),Qe.render(Ae[cn]/Rn,Dt[cn])}else if(k.isInstancedMesh)Qe.renderInstances(nt,pt,k.count);else if(G.isInstancedBufferGeometry){const Ae=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,Dt=Math.min(G.instanceCount,Ae);Qe.renderInstances(nt,pt,Dt)}else Qe.render(nt,pt)};function Ke(A,F,G){A.transparent===!0&&A.side===li&&A.forceSinglePass===!1?(A.side=on,A.needsUpdate=!0,$o(A,F,G),A.side=$i,A.needsUpdate=!0,$o(A,F,G),A.side=li):$o(A,F,G)}this.compile=function(A,F,G=null){G===null&&(G=A),p=Ee.get(G),p.init(F),v.push(p),G.traverseVisible(function(k){k.isLight&&k.layers.test(F.layers)&&(p.pushLight(k),k.castShadow&&p.pushShadow(k))}),A!==G&&A.traverseVisible(function(k){k.isLight&&k.layers.test(F.layers)&&(p.pushLight(k),k.castShadow&&p.pushShadow(k))}),p.setupLights();const W=new Set;return A.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;const oe=k.material;if(oe)if(Array.isArray(oe))for(let pe=0;pe<oe.length;pe++){const xe=oe[pe];Ke(xe,G,k),W.add(xe)}else Ke(oe,G,k),W.add(oe)}),v.pop(),p=null,W},this.compileAsync=function(A,F,G=null){const W=this.compile(A,F,G);return new Promise(k=>{function oe(){if(W.forEach(function(pe){Ce.get(pe).currentProgram.isReady()&&W.delete(pe)}),W.size===0){k(A);return}setTimeout(oe,10)}Be.get("KHR_parallel_shader_compile")!==null?oe():setTimeout(oe,10)})};let Jt=null;function Jn(A){Jt&&Jt(A)}function oh(){Ji.stop()}function ah(){Ji.start()}const Ji=new hv;Ji.setAnimationLoop(Jn),typeof self<"u"&&Ji.setContext(self),this.setAnimationLoop=function(A){Jt=A,X.setAnimationLoop(A),A===null?Ji.stop():Ji.start()},X.addEventListener("sessionstart",oh),X.addEventListener("sessionend",ah),this.render=function(A,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),X.enabled===!0&&X.isPresenting===!0&&(X.cameraAutoUpdate===!0&&X.updateCamera(F),F=X.getCamera()),A.isScene===!0&&A.onBeforeRender(g,A,F,T),p=Ee.get(A,v.length),p.init(F),v.push(p),de.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),Oe.setFromProjectionMatrix(de),re=this.localClippingEnabled,q=te.init(this.clippingPlanes,re),S=J.get(A,u.length),S.init(),u.push(S),X.enabled===!0&&X.isPresenting===!0){const oe=g.xr.getDepthSensingMesh();oe!==null&&Yl(oe,F,-1/0,g.sortObjects)}Yl(A,F,0,g.sortObjects),S.finish(),g.sortObjects===!0&&S.sort(N,K),Ze=X.enabled===!1||X.isPresenting===!1||X.hasDepthSensing()===!1,Ze&&be.addToRenderList(S,A),this.info.render.frame++,q===!0&&te.beginShadows();const G=p.state.shadowsArray;ce.render(G,A,F),q===!0&&te.endShadows(),this.info.autoReset===!0&&this.info.reset();const W=S.opaque,k=S.transmissive;if(p.setupLights(),F.isArrayCamera){const oe=F.cameras;if(k.length>0)for(let pe=0,xe=oe.length;pe<xe;pe++){const Se=oe[pe];ch(W,k,A,Se)}Ze&&be.render(A);for(let pe=0,xe=oe.length;pe<xe;pe++){const Se=oe[pe];lh(S,A,Se,Se.viewport)}}else k.length>0&&ch(W,k,A,F),Ze&&be.render(A),lh(S,A,F);T!==null&&(C.updateMultisampleRenderTarget(T),C.updateRenderTargetMipmap(T)),A.isScene===!0&&A.onAfterRender(g,A,F),tt.resetDefaultState(),R=-1,D=null,v.pop(),v.length>0?(p=v[v.length-1],q===!0&&te.setGlobalState(g.clippingPlanes,p.state.camera)):p=null,u.pop(),u.length>0?S=u[u.length-1]:S=null};function Yl(A,F,G,W){if(A.visible===!1)return;if(A.layers.test(F.layers)){if(A.isGroup)G=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(F);else if(A.isLight)p.pushLight(A),A.castShadow&&p.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Oe.intersectsSprite(A)){W&&Re.setFromMatrixPosition(A.matrixWorld).applyMatrix4(de);const pe=Z.update(A),xe=A.material;xe.visible&&S.push(A,pe,xe,G,Re.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Oe.intersectsObject(A))){const pe=Z.update(A),xe=A.material;if(W&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Re.copy(A.boundingSphere.center)):(pe.boundingSphere===null&&pe.computeBoundingSphere(),Re.copy(pe.boundingSphere.center)),Re.applyMatrix4(A.matrixWorld).applyMatrix4(de)),Array.isArray(xe)){const Se=pe.groups;for(let Le=0,Ne=Se.length;Le<Ne;Le++){const Te=Se[Le],nt=xe[Te.materialIndex];nt&&nt.visible&&S.push(A,pe,nt,G,Re.z,Te)}}else xe.visible&&S.push(A,pe,xe,G,Re.z,null)}}const oe=A.children;for(let pe=0,xe=oe.length;pe<xe;pe++)Yl(oe[pe],F,G,W)}function lh(A,F,G,W){const k=A.opaque,oe=A.transmissive,pe=A.transparent;p.setupLightsView(G),q===!0&&te.setGlobalState(g.clippingPlanes,G),W&&Pe.viewport(x.copy(W)),k.length>0&&Xo(k,F,G),oe.length>0&&Xo(oe,F,G),pe.length>0&&Xo(pe,F,G),Pe.buffers.depth.setTest(!0),Pe.buffers.depth.setMask(!0),Pe.buffers.color.setMask(!0),Pe.setPolygonOffset(!1)}function ch(A,F,G,W){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[W.id]===void 0&&(p.state.transmissionRenderTarget[W.id]=new Ar(1,1,{generateMipmaps:!0,type:Be.has("EXT_color_buffer_half_float")||Be.has("EXT_color_buffer_float")?Go:xi,minFilter:gr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:et.workingColorSpace}));const oe=p.state.transmissionRenderTarget[W.id],pe=W.viewport||x;oe.setSize(pe.z,pe.w);const xe=g.getRenderTarget();g.setRenderTarget(oe),g.getClearColor(B),O=g.getClearAlpha(),O<1&&g.setClearColor(16777215,.5),g.clear(),Ze&&be.render(G);const Se=g.toneMapping;g.toneMapping=Wi;const Le=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),p.setupLightsView(W),q===!0&&te.setGlobalState(g.clippingPlanes,W),Xo(A,G,W),C.updateMultisampleRenderTarget(oe),C.updateRenderTargetMipmap(oe),Be.has("WEBGL_multisampled_render_to_texture")===!1){let Ne=!1;for(let Te=0,nt=F.length;Te<nt;Te++){const ot=F[Te],pt=ot.object,ln=ot.geometry,Qe=ot.material,Ae=ot.group;if(Qe.side===li&&pt.layers.test(W.layers)){const Dt=Qe.side;Qe.side=on,Qe.needsUpdate=!0,uh(pt,G,W,ln,Qe,Ae),Qe.side=Dt,Qe.needsUpdate=!0,Ne=!0}}Ne===!0&&(C.updateMultisampleRenderTarget(oe),C.updateRenderTargetMipmap(oe))}g.setRenderTarget(xe),g.setClearColor(B,O),Le!==void 0&&(W.viewport=Le),g.toneMapping=Se}function Xo(A,F,G){const W=F.isScene===!0?F.overrideMaterial:null;for(let k=0,oe=A.length;k<oe;k++){const pe=A[k],xe=pe.object,Se=pe.geometry,Le=W===null?pe.material:W,Ne=pe.group;xe.layers.test(G.layers)&&uh(xe,F,G,Se,Le,Ne)}}function uh(A,F,G,W,k,oe){A.onBeforeRender(g,F,G,W,k,oe),A.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),k.onBeforeRender(g,F,G,W,A,oe),k.transparent===!0&&k.side===li&&k.forceSinglePass===!1?(k.side=on,k.needsUpdate=!0,g.renderBufferDirect(G,F,W,k,A,oe),k.side=$i,k.needsUpdate=!0,g.renderBufferDirect(G,F,W,k,A,oe),k.side=li):g.renderBufferDirect(G,F,W,k,A,oe),A.onAfterRender(g,F,G,W,k,oe)}function $o(A,F,G){F.isScene!==!0&&(F=Ve);const W=Ce.get(A),k=p.state.lights,oe=p.state.shadowsArray,pe=k.state.version,xe=_e.getParameters(A,k.state,oe,F,G),Se=_e.getProgramCacheKey(xe);let Le=W.programs;W.environment=A.isMeshStandardMaterial?F.environment:null,W.fog=F.fog,W.envMap=(A.isMeshStandardMaterial?V:w).get(A.envMap||W.environment),W.envMapRotation=W.environment!==null&&A.envMap===null?F.environmentRotation:A.envMapRotation,Le===void 0&&(A.addEventListener("dispose",$e),Le=new Map,W.programs=Le);let Ne=Le.get(Se);if(Ne!==void 0){if(W.currentProgram===Ne&&W.lightsStateVersion===pe)return fh(A,xe),Ne}else xe.uniforms=_e.getUniforms(A),A.onBeforeCompile(xe,g),Ne=_e.acquireProgram(xe,Se),Le.set(Se,Ne),W.uniforms=xe.uniforms;const Te=W.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Te.clippingPlanes=te.uniform),fh(A,xe),W.needsLights=Uv(A),W.lightsStateVersion=pe,W.needsLights&&(Te.ambientLightColor.value=k.state.ambient,Te.lightProbe.value=k.state.probe,Te.directionalLights.value=k.state.directional,Te.directionalLightShadows.value=k.state.directionalShadow,Te.spotLights.value=k.state.spot,Te.spotLightShadows.value=k.state.spotShadow,Te.rectAreaLights.value=k.state.rectArea,Te.ltc_1.value=k.state.rectAreaLTC1,Te.ltc_2.value=k.state.rectAreaLTC2,Te.pointLights.value=k.state.point,Te.pointLightShadows.value=k.state.pointShadow,Te.hemisphereLights.value=k.state.hemi,Te.directionalShadowMap.value=k.state.directionalShadowMap,Te.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Te.spotShadowMap.value=k.state.spotShadowMap,Te.spotLightMatrix.value=k.state.spotLightMatrix,Te.spotLightMap.value=k.state.spotLightMap,Te.pointShadowMap.value=k.state.pointShadowMap,Te.pointShadowMatrix.value=k.state.pointShadowMatrix),W.currentProgram=Ne,W.uniformsList=null,Ne}function dh(A){if(A.uniformsList===null){const F=A.currentProgram.getUniforms();A.uniformsList=Za.seqWithValue(F.seq,A.uniforms)}return A.uniformsList}function fh(A,F){const G=Ce.get(A);G.outputColorSpace=F.outputColorSpace,G.batching=F.batching,G.batchingColor=F.batchingColor,G.instancing=F.instancing,G.instancingColor=F.instancingColor,G.instancingMorph=F.instancingMorph,G.skinning=F.skinning,G.morphTargets=F.morphTargets,G.morphNormals=F.morphNormals,G.morphColors=F.morphColors,G.morphTargetsCount=F.morphTargetsCount,G.numClippingPlanes=F.numClippingPlanes,G.numIntersection=F.numClipIntersection,G.vertexAlphas=F.vertexAlphas,G.vertexTangents=F.vertexTangents,G.toneMapping=F.toneMapping}function Dv(A,F,G,W,k){F.isScene!==!0&&(F=Ve),C.resetTextureUnits();const oe=F.fog,pe=W.isMeshStandardMaterial?F.environment:null,xe=T===null?g.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:Qi,Se=(W.isMeshStandardMaterial?V:w).get(W.envMap||pe),Le=W.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Ne=!!G.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Te=!!G.morphAttributes.position,nt=!!G.morphAttributes.normal,ot=!!G.morphAttributes.color;let pt=Wi;W.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(pt=g.toneMapping);const ln=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,Qe=ln!==void 0?ln.length:0,Ae=Ce.get(W),Dt=p.state.lights;if(q===!0&&(re===!0||A!==D)){const xn=A===D&&W.id===R;te.setState(W,A,xn)}let Je=!1;W.version===Ae.__version?(Ae.needsLights&&Ae.lightsStateVersion!==Dt.state.version||Ae.outputColorSpace!==xe||k.isBatchedMesh&&Ae.batching===!1||!k.isBatchedMesh&&Ae.batching===!0||k.isBatchedMesh&&Ae.batchingColor===!0&&k.colorTexture===null||k.isBatchedMesh&&Ae.batchingColor===!1&&k.colorTexture!==null||k.isInstancedMesh&&Ae.instancing===!1||!k.isInstancedMesh&&Ae.instancing===!0||k.isSkinnedMesh&&Ae.skinning===!1||!k.isSkinnedMesh&&Ae.skinning===!0||k.isInstancedMesh&&Ae.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&Ae.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&Ae.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&Ae.instancingMorph===!1&&k.morphTexture!==null||Ae.envMap!==Se||W.fog===!0&&Ae.fog!==oe||Ae.numClippingPlanes!==void 0&&(Ae.numClippingPlanes!==te.numPlanes||Ae.numIntersection!==te.numIntersection)||Ae.vertexAlphas!==Le||Ae.vertexTangents!==Ne||Ae.morphTargets!==Te||Ae.morphNormals!==nt||Ae.morphColors!==ot||Ae.toneMapping!==pt||Ae.morphTargetsCount!==Qe)&&(Je=!0):(Je=!0,Ae.__version=W.version);let Rn=Ae.currentProgram;Je===!0&&(Rn=$o(W,F,k));let Lr=!1,cn=!1,ql=!1;const xt=Rn.getUniforms(),yi=Ae.uniforms;if(Pe.useProgram(Rn.program)&&(Lr=!0,cn=!0,ql=!0),W.id!==R&&(R=W.id,cn=!0),Lr||D!==A){We.reverseDepthBuffer?(fe.copy(A.projectionMatrix),v1(fe),x1(fe),xt.setValue(I,"projectionMatrix",fe)):xt.setValue(I,"projectionMatrix",A.projectionMatrix),xt.setValue(I,"viewMatrix",A.matrixWorldInverse);const xn=xt.map.cameraPosition;xn!==void 0&&xn.setValue(I,De.setFromMatrixPosition(A.matrixWorld)),We.logarithmicDepthBuffer&&xt.setValue(I,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&xt.setValue(I,"isOrthographic",A.isOrthographicCamera===!0),D!==A&&(D=A,cn=!0,ql=!0)}if(k.isSkinnedMesh){xt.setOptional(I,k,"bindMatrix"),xt.setOptional(I,k,"bindMatrixInverse");const xn=k.skeleton;xn&&(xn.boneTexture===null&&xn.computeBoneTexture(),xt.setValue(I,"boneTexture",xn.boneTexture,C))}k.isBatchedMesh&&(xt.setOptional(I,k,"batchingTexture"),xt.setValue(I,"batchingTexture",k._matricesTexture,C),xt.setOptional(I,k,"batchingIdTexture"),xt.setValue(I,"batchingIdTexture",k._indirectTexture,C),xt.setOptional(I,k,"batchingColorTexture"),k._colorsTexture!==null&&xt.setValue(I,"batchingColorTexture",k._colorsTexture,C));const Kl=G.morphAttributes;if((Kl.position!==void 0||Kl.normal!==void 0||Kl.color!==void 0)&&ye.update(k,G,Rn),(cn||Ae.receiveShadow!==k.receiveShadow)&&(Ae.receiveShadow=k.receiveShadow,xt.setValue(I,"receiveShadow",k.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(yi.envMap.value=Se,yi.flipEnvMap.value=Se.isCubeTexture&&Se.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&F.environment!==null&&(yi.envMapIntensity.value=F.environmentIntensity),cn&&(xt.setValue(I,"toneMappingExposure",g.toneMappingExposure),Ae.needsLights&&Iv(yi,ql),oe&&W.fog===!0&&H.refreshFogUniforms(yi,oe),H.refreshMaterialUniforms(yi,W,Y,j,p.state.transmissionRenderTarget[A.id]),Za.upload(I,dh(Ae),yi,C)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(Za.upload(I,dh(Ae),yi,C),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&xt.setValue(I,"center",k.center),xt.setValue(I,"modelViewMatrix",k.modelViewMatrix),xt.setValue(I,"normalMatrix",k.normalMatrix),xt.setValue(I,"modelMatrix",k.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const xn=W.uniformsGroups;for(let Zl=0,Fv=xn.length;Zl<Fv;Zl++){const hh=xn[Zl];L.update(hh,Rn),L.bind(hh,Rn)}}return Rn}function Iv(A,F){A.ambientLightColor.needsUpdate=F,A.lightProbe.needsUpdate=F,A.directionalLights.needsUpdate=F,A.directionalLightShadows.needsUpdate=F,A.pointLights.needsUpdate=F,A.pointLightShadows.needsUpdate=F,A.spotLights.needsUpdate=F,A.spotLightShadows.needsUpdate=F,A.rectAreaLights.needsUpdate=F,A.hemisphereLights.needsUpdate=F}function Uv(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(A,F,G){Ce.get(A.texture).__webglTexture=F,Ce.get(A.depthTexture).__webglTexture=G;const W=Ce.get(A);W.__hasExternalTextures=!0,W.__autoAllocateDepthBuffer=G===void 0,W.__autoAllocateDepthBuffer||Be.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,F){const G=Ce.get(A);G.__webglFramebuffer=F,G.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(A,F=0,G=0){T=A,P=F,b=G;let W=!0,k=null,oe=!1,pe=!1;if(A){const Se=Ce.get(A);if(Se.__useDefaultFramebuffer!==void 0)Pe.bindFramebuffer(I.FRAMEBUFFER,null),W=!1;else if(Se.__webglFramebuffer===void 0)C.setupRenderTarget(A);else if(Se.__hasExternalTextures)C.rebindTextures(A,Ce.get(A.texture).__webglTexture,Ce.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Te=A.depthTexture;if(Se.__boundDepthTexture!==Te){if(Te!==null&&Ce.has(Te)&&(A.width!==Te.image.width||A.height!==Te.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");C.setupDepthRenderbuffer(A)}}const Le=A.texture;(Le.isData3DTexture||Le.isDataArrayTexture||Le.isCompressedArrayTexture)&&(pe=!0);const Ne=Ce.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Ne[F])?k=Ne[F][G]:k=Ne[F],oe=!0):A.samples>0&&C.useMultisampledRTT(A)===!1?k=Ce.get(A).__webglMultisampledFramebuffer:Array.isArray(Ne)?k=Ne[G]:k=Ne,x.copy(A.viewport),E.copy(A.scissor),U=A.scissorTest}else x.copy(ee).multiplyScalar(Y).floor(),E.copy(ae).multiplyScalar(Y).floor(),U=we;if(Pe.bindFramebuffer(I.FRAMEBUFFER,k)&&W&&Pe.drawBuffers(A,k),Pe.viewport(x),Pe.scissor(E),Pe.setScissorTest(U),oe){const Se=Ce.get(A.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+F,Se.__webglTexture,G)}else if(pe){const Se=Ce.get(A.texture),Le=F||0;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,Se.__webglTexture,G||0,Le)}R=-1},this.readRenderTargetPixels=function(A,F,G,W,k,oe,pe){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let xe=Ce.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&pe!==void 0&&(xe=xe[pe]),xe){Pe.bindFramebuffer(I.FRAMEBUFFER,xe);try{const Se=A.texture,Le=Se.format,Ne=Se.type;if(!We.textureFormatReadable(Le)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!We.textureTypeReadable(Ne)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=A.width-W&&G>=0&&G<=A.height-k&&I.readPixels(F,G,W,k,Ue.convert(Le),Ue.convert(Ne),oe)}finally{const Se=T!==null?Ce.get(T).__webglFramebuffer:null;Pe.bindFramebuffer(I.FRAMEBUFFER,Se)}}},this.readRenderTargetPixelsAsync=async function(A,F,G,W,k,oe,pe){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let xe=Ce.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&pe!==void 0&&(xe=xe[pe]),xe){const Se=A.texture,Le=Se.format,Ne=Se.type;if(!We.textureFormatReadable(Le))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!We.textureTypeReadable(Ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(F>=0&&F<=A.width-W&&G>=0&&G<=A.height-k){Pe.bindFramebuffer(I.FRAMEBUFFER,xe);const Te=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,Te),I.bufferData(I.PIXEL_PACK_BUFFER,oe.byteLength,I.STREAM_READ),I.readPixels(F,G,W,k,Ue.convert(Le),Ue.convert(Ne),0);const nt=T!==null?Ce.get(T).__webglFramebuffer:null;Pe.bindFramebuffer(I.FRAMEBUFFER,nt);const ot=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await g1(I,ot,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,Te),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,oe),I.deleteBuffer(Te),I.deleteSync(ot),oe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(A,F=null,G=0){A.isTexture!==!0&&(Ka("WebGLRenderer: copyFramebufferToTexture function signature has changed."),F=arguments[0]||null,A=arguments[1]);const W=Math.pow(2,-G),k=Math.floor(A.image.width*W),oe=Math.floor(A.image.height*W),pe=F!==null?F.x:0,xe=F!==null?F.y:0;C.setTexture2D(A,0),I.copyTexSubImage2D(I.TEXTURE_2D,G,0,0,pe,xe,k,oe),Pe.unbindTexture()},this.copyTextureToTexture=function(A,F,G=null,W=null,k=0){A.isTexture!==!0&&(Ka("WebGLRenderer: copyTextureToTexture function signature has changed."),W=arguments[0]||null,A=arguments[1],F=arguments[2],k=arguments[3]||0,G=null);let oe,pe,xe,Se,Le,Ne;G!==null?(oe=G.max.x-G.min.x,pe=G.max.y-G.min.y,xe=G.min.x,Se=G.min.y):(oe=A.image.width,pe=A.image.height,xe=0,Se=0),W!==null?(Le=W.x,Ne=W.y):(Le=0,Ne=0);const Te=Ue.convert(F.format),nt=Ue.convert(F.type);C.setTexture2D(F,0),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,F.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,F.unpackAlignment);const ot=I.getParameter(I.UNPACK_ROW_LENGTH),pt=I.getParameter(I.UNPACK_IMAGE_HEIGHT),ln=I.getParameter(I.UNPACK_SKIP_PIXELS),Qe=I.getParameter(I.UNPACK_SKIP_ROWS),Ae=I.getParameter(I.UNPACK_SKIP_IMAGES),Dt=A.isCompressedTexture?A.mipmaps[k]:A.image;I.pixelStorei(I.UNPACK_ROW_LENGTH,Dt.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Dt.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,xe),I.pixelStorei(I.UNPACK_SKIP_ROWS,Se),A.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,k,Le,Ne,oe,pe,Te,nt,Dt.data):A.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,k,Le,Ne,Dt.width,Dt.height,Te,Dt.data):I.texSubImage2D(I.TEXTURE_2D,k,Le,Ne,oe,pe,Te,nt,Dt),I.pixelStorei(I.UNPACK_ROW_LENGTH,ot),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,pt),I.pixelStorei(I.UNPACK_SKIP_PIXELS,ln),I.pixelStorei(I.UNPACK_SKIP_ROWS,Qe),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Ae),k===0&&F.generateMipmaps&&I.generateMipmap(I.TEXTURE_2D),Pe.unbindTexture()},this.copyTextureToTexture3D=function(A,F,G=null,W=null,k=0){A.isTexture!==!0&&(Ka("WebGLRenderer: copyTextureToTexture3D function signature has changed."),G=arguments[0]||null,W=arguments[1]||null,A=arguments[2],F=arguments[3],k=arguments[4]||0);let oe,pe,xe,Se,Le,Ne,Te,nt,ot;const pt=A.isCompressedTexture?A.mipmaps[k]:A.image;G!==null?(oe=G.max.x-G.min.x,pe=G.max.y-G.min.y,xe=G.max.z-G.min.z,Se=G.min.x,Le=G.min.y,Ne=G.min.z):(oe=pt.width,pe=pt.height,xe=pt.depth,Se=0,Le=0,Ne=0),W!==null?(Te=W.x,nt=W.y,ot=W.z):(Te=0,nt=0,ot=0);const ln=Ue.convert(F.format),Qe=Ue.convert(F.type);let Ae;if(F.isData3DTexture)C.setTexture3D(F,0),Ae=I.TEXTURE_3D;else if(F.isDataArrayTexture||F.isCompressedArrayTexture)C.setTexture2DArray(F,0),Ae=I.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,F.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,F.unpackAlignment);const Dt=I.getParameter(I.UNPACK_ROW_LENGTH),Je=I.getParameter(I.UNPACK_IMAGE_HEIGHT),Rn=I.getParameter(I.UNPACK_SKIP_PIXELS),Lr=I.getParameter(I.UNPACK_SKIP_ROWS),cn=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,pt.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,pt.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Se),I.pixelStorei(I.UNPACK_SKIP_ROWS,Le),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Ne),A.isDataTexture||A.isData3DTexture?I.texSubImage3D(Ae,k,Te,nt,ot,oe,pe,xe,ln,Qe,pt.data):F.isCompressedArrayTexture?I.compressedTexSubImage3D(Ae,k,Te,nt,ot,oe,pe,xe,ln,pt.data):I.texSubImage3D(Ae,k,Te,nt,ot,oe,pe,xe,ln,Qe,pt),I.pixelStorei(I.UNPACK_ROW_LENGTH,Dt),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Je),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Rn),I.pixelStorei(I.UNPACK_SKIP_ROWS,Lr),I.pixelStorei(I.UNPACK_SKIP_IMAGES,cn),k===0&&F.generateMipmaps&&I.generateMipmap(Ae),Pe.unbindTexture()},this.initRenderTarget=function(A){Ce.get(A).__webglFramebuffer===void 0&&C.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?C.setTextureCube(A,0):A.isData3DTexture?C.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?C.setTexture2DArray(A,0):C.setTexture2D(A,0),Pe.unbindTexture()},this.resetState=function(){P=0,b=0,T=null,Pe.reset(),tt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return fi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===jf?"display-p3":"srgb",n.unpackColorSpace=et.workingColorSpace===Xl?"display-p3":"srgb"}}class yv extends Nt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Qn,this.environmentIntensity=1,this.environmentRotation=new Qn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class Io extends Gn{constructor(e=1,n=1,i=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const d=[],h=[],f=[],m=[];let y=0;const S=[],p=i/2;let u=0;v(),o===!1&&(e>0&&g(!0),n>0&&g(!1)),this.setIndex(d),this.setAttribute("position",new At(h,3)),this.setAttribute("normal",new At(f,3)),this.setAttribute("uv",new At(m,2));function v(){const M=new z,P=new z;let b=0;const T=(n-e)/i;for(let R=0;R<=s;R++){const D=[],x=R/s,E=x*(n-e)+e;for(let U=0;U<=r;U++){const B=U/r,O=B*l+a,$=Math.sin(O),j=Math.cos(O);P.x=E*$,P.y=-x*i+p,P.z=E*j,h.push(P.x,P.y,P.z),M.set($,T,j).normalize(),f.push(M.x,M.y,M.z),m.push(B,1-x),D.push(y++)}S.push(D)}for(let R=0;R<r;R++)for(let D=0;D<s;D++){const x=S[D][R],E=S[D+1][R],U=S[D+1][R+1],B=S[D][R+1];e>0&&(d.push(x,E,B),b+=3),n>0&&(d.push(E,U,B),b+=3)}c.addGroup(u,b,0),u+=b}function g(M){const P=y,b=new Xe,T=new z;let R=0;const D=M===!0?e:n,x=M===!0?1:-1;for(let U=1;U<=r;U++)h.push(0,p*x,0),f.push(0,x,0),m.push(.5,.5),y++;const E=y;for(let U=0;U<=r;U++){const O=U/r*l+a,$=Math.cos(O),j=Math.sin(O);T.x=D*j,T.y=p*x,T.z=D*$,h.push(T.x,T.y,T.z),f.push(0,x,0),b.x=$*.5+.5,b.y=j*.5*x+.5,m.push(b.x,b.y),y++}for(let U=0;U<r;U++){const B=P+U,O=E+U;M===!0?d.push(O,O+1,B):d.push(O+1,O,B),R+=3}c.addGroup(u,R,M===!0?1:2),u+=R}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Io(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Zf extends Gn{constructor(e=[],n=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:n,radius:i,detail:r};const s=[],o=[];a(r),c(i),d(),this.setAttribute("position",new At(s,3)),this.setAttribute("normal",new At(s.slice(),3)),this.setAttribute("uv",new At(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(v){const g=new z,M=new z,P=new z;for(let b=0;b<n.length;b+=3)m(n[b+0],g),m(n[b+1],M),m(n[b+2],P),l(g,M,P,v)}function l(v,g,M,P){const b=P+1,T=[];for(let R=0;R<=b;R++){T[R]=[];const D=v.clone().lerp(M,R/b),x=g.clone().lerp(M,R/b),E=b-R;for(let U=0;U<=E;U++)U===0&&R===b?T[R][U]=D:T[R][U]=D.clone().lerp(x,U/E)}for(let R=0;R<b;R++)for(let D=0;D<2*(b-R)-1;D++){const x=Math.floor(D/2);D%2===0?(f(T[R][x+1]),f(T[R+1][x]),f(T[R][x])):(f(T[R][x+1]),f(T[R+1][x+1]),f(T[R+1][x]))}}function c(v){const g=new z;for(let M=0;M<s.length;M+=3)g.x=s[M+0],g.y=s[M+1],g.z=s[M+2],g.normalize().multiplyScalar(v),s[M+0]=g.x,s[M+1]=g.y,s[M+2]=g.z}function d(){const v=new z;for(let g=0;g<s.length;g+=3){v.x=s[g+0],v.y=s[g+1],v.z=s[g+2];const M=p(v)/2/Math.PI+.5,P=u(v)/Math.PI+.5;o.push(M,1-P)}y(),h()}function h(){for(let v=0;v<o.length;v+=6){const g=o[v+0],M=o[v+2],P=o[v+4],b=Math.max(g,M,P),T=Math.min(g,M,P);b>.9&&T<.1&&(g<.2&&(o[v+0]+=1),M<.2&&(o[v+2]+=1),P<.2&&(o[v+4]+=1))}}function f(v){s.push(v.x,v.y,v.z)}function m(v,g){const M=v*3;g.x=e[M+0],g.y=e[M+1],g.z=e[M+2]}function y(){const v=new z,g=new z,M=new z,P=new z,b=new Xe,T=new Xe,R=new Xe;for(let D=0,x=0;D<s.length;D+=9,x+=6){v.set(s[D+0],s[D+1],s[D+2]),g.set(s[D+3],s[D+4],s[D+5]),M.set(s[D+6],s[D+7],s[D+8]),b.set(o[x+0],o[x+1]),T.set(o[x+2],o[x+3]),R.set(o[x+4],o[x+5]),P.copy(v).add(g).add(M).divideScalar(3);const E=p(P);S(b,x+0,v,E),S(T,x+2,g,E),S(R,x+4,M,E)}}function S(v,g,M,P){P<0&&v.x===1&&(o[g]=v.x-1),M.x===0&&M.z===0&&(o[g]=P/2/Math.PI+.5)}function p(v){return Math.atan2(v.z,-v.x)}function u(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zf(e.vertices,e.indices,e.radius,e.details)}}class Qf extends Zf{constructor(e=1,n=0){const i=(1+Math.sqrt(5))/2,r=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,n),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new Qf(e.radius,e.detail)}}class Uo extends Gn{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const d=[],h=new z,f=new z,m=[],y=[],S=[],p=[];for(let u=0;u<=i;u++){const v=[],g=u/i;let M=0;u===0&&o===0?M=.5/n:u===i&&l===Math.PI&&(M=-.5/n);for(let P=0;P<=n;P++){const b=P/n;h.x=-e*Math.cos(r+b*s)*Math.sin(o+g*a),h.y=e*Math.cos(o+g*a),h.z=e*Math.sin(r+b*s)*Math.sin(o+g*a),y.push(h.x,h.y,h.z),f.copy(h).normalize(),S.push(f.x,f.y,f.z),p.push(b+M,1-g),v.push(c++)}d.push(v)}for(let u=0;u<i;u++)for(let v=0;v<n;v++){const g=d[u][v+1],M=d[u][v],P=d[u+1][v],b=d[u+1][v+1];(u!==0||o>0)&&m.push(g,M,b),(u!==i-1||l<Math.PI)&&m.push(M,P,b)}this.setIndex(m),this.setAttribute("position",new At(y,3)),this.setAttribute("normal",new At(S,3)),this.setAttribute("uv",new At(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Uo(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Jf extends Gn{constructor(e=1,n=.4,i=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:n,radialSegments:i,tubularSegments:r,arc:s},i=Math.floor(i),r=Math.floor(r);const o=[],a=[],l=[],c=[],d=new z,h=new z,f=new z;for(let m=0;m<=i;m++)for(let y=0;y<=r;y++){const S=y/r*s,p=m/i*Math.PI*2;h.x=(e+n*Math.cos(p))*Math.cos(S),h.y=(e+n*Math.cos(p))*Math.sin(S),h.z=n*Math.sin(p),a.push(h.x,h.y,h.z),d.x=e*Math.cos(S),d.y=e*Math.sin(S),f.subVectors(h,d).normalize(),l.push(f.x,f.y,f.z),c.push(y/r),c.push(m/i)}for(let m=1;m<=i;m++)for(let y=1;y<=r;y++){const S=(r+1)*m+y-1,p=(r+1)*(m-1)+y-1,u=(r+1)*(m-1)+y,v=(r+1)*m+y;o.push(S,p,v),o.push(p,u,v)}this.setIndex(o),this.setAttribute("position",new At(a,3)),this.setAttribute("normal",new At(l,3)),this.setAttribute("uv",new At(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Jf(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class xm extends Fs{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new Ye(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}}class Qa extends Fs{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ye(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ye(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ev,this.normalScale=new Xe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Sv extends Nt{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Ye(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}class Mv extends Sv{constructor(e,n,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Nt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ye(n)}copy(e,n){return super.copy(e,n),this.groundColor.copy(e.groundColor),this}}const Jc=new vt,_m=new z,ym=new z;class R2{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Xe(512,512),this.map=null,this.mapPass=null,this.matrix=new vt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Yf,this._frameExtents=new Xe(1,1),this._viewportCount=1,this._viewports=[new gt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;_m.setFromMatrixPosition(e.matrixWorld),n.position.copy(_m),ym.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(ym),n.updateMatrixWorld(),Jc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Jc),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Jc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class P2 extends R2{constructor(){super(new qf(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Cl extends Sv{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Nt.DEFAULT_UP),this.updateMatrix(),this.target=new Nt,this.shadow=new P2}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Ev{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Sm(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=Sm();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}function Sm(){return performance.now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ff}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ff);class L2{constructor(e,n){Ie(this,"renderer");Ie(this,"scene");Ie(this,"camera");Ie(this,"factory");Ie(this,"plumes",[]);Ie(this,"leds",[]);Ie(this,"clock",new Ev);Ie(this,"frameId",0);Ie(this,"ro");Ie(this,"reducedMotion",!1);Ie(this,"disposables",[]);Ie(this,"M");Ie(this,"animate",()=>{this.frameId=requestAnimationFrame(this.animate);const e=Math.min(this.clock.getDelta(),.05);this.reducedMotion||(this.factory.rotation.y+=e*.18),this.tickPlumes(e);const n=(1-Math.cos(this.clock.elapsedTime*Math.PI*2))/2;for(const i of this.leds)i.emissiveIntensity=n*2.6;this.renderer.render(this.scene,this.camera)});this.canvas=e,this.host=n}start(){this.reducedMotion=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion: reduce)").matches,this.initThree(),this.buildPalette(),this.buildScene(),this.onResize(),this.ro=new ResizeObserver(()=>this.onResize()),this.ro.observe(this.host),this.animate()}dispose(){var e,n;cancelAnimationFrame(this.frameId),(e=this.ro)==null||e.disconnect(),this.disposables.forEach(i=>i.dispose()),(n=this.renderer)==null||n.dispose()}initThree(){this.renderer=new _v({canvas:this.canvas,antialias:!0,alpha:!0,powerPreference:"high-performance"}),this.renderer.setClearColor(0,0),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=kf,this.renderer.toneMapping=Of,this.renderer.toneMappingExposure=1.05,this.scene=new yv,this.camera=new Mn(36,1,.1,200),this.camera.position.set(0,6.6,27),this.camera.lookAt(0,4.2,0)}buildPalette(){const e=(n,i,r,s={})=>this.track(new Qa({color:n,metalness:i,roughness:r,...s}));this.M={concrete:e(13225169,.04,.92),concreteDark:e(10133672,.05,.9),painted:e(9081499,.55,.42),paintedLight:e(11186877,.5,.45),darkSteel:e(5988971,.6,.5),stainless:e(11584720,.85,.18),copper:e(12088115,.9,.32),glass:e(8361650,.55,.18,{emissive:2372684,emissiveIntensity:.3}),red:e(12470844,.3,.55),accent:e(4020976,.35,.4,{emissive:1450063,emissiveIntensity:.35}),grass:e(6192468,0,.95),water:e(4157352,.2,.18),ground:e(9937064,.05,.85),rim:e(13686494,.1,.7)}}buildScene(){this.scene.add(new Mv(16777215,12896979,.95));const e=new Cl(16777215,2.3);e.position.set(-9,17,13),e.target.position.set(0,4,0),e.castShadow=!0,e.shadow.mapSize.set(2048,2048),e.shadow.bias=-4e-4,e.shadow.normalBias=.02;const n=e.shadow.camera;n.left=-26,n.right=26,n.top=26,n.bottom=-26,n.near=.5,n.far=90,n.updateProjectionMatrix(),this.scene.add(e),this.scene.add(e.target);const i=new Cl(14673650,.55);i.position.set(13,9,8),this.scene.add(i);const r=new Mt(this.track(new Rs(70,38)),this.track(new xm({opacity:.3})));r.position.set(0,9,-7),r.receiveShadow=!0,this.scene.add(r);const s=new Mt(this.track(new Rs(80,80)),this.track(new xm({opacity:.22})));s.rotation.x=-Math.PI/2,s.position.y=-.62,s.receiveShadow=!0,this.scene.add(s),this.factory=new Ht,this.scene.add(this.factory),this.buildPedestal(),this.buildSiteGround(),this.buildBoilerHouse(),this.buildPowerhouse(),this.buildChimneys(),this.buildCoolingTowers(),this.buildTanks(),this.buildSwitchyard(),this.buildCameraRig()}buildPedestal(){const e=this.cyl(11.5,11.5,.34,this.M.rim,0,-.2,0,this.factory,64);e.receiveShadow=!0;const n=this.cyl(10.9,11.1,.22,this.M.ground,0,-.02,0,this.factory,64);n.receiveShadow=!0}buildSiteGround(){this.box(6.5,.06,3.2,this.M.grass,-3.2,.12,3.4,this.factory),this.box(3.4,.06,2.2,this.M.grass,5.6,.12,2.6,this.factory),this.box(3,.05,1.8,this.M.water,-6.5,.11,3.8,this.factory),this.box(15,.05,.9,this.M.concreteDark,0,.11,4.6,this.factory)}buildBoilerHouse(){const e=new Ht;e.position.set(-1.5,0,-1.6),this.factory.add(e),this.box(11,3.4,3.4,this.M.painted,0,1.7,0,e),this.box(11.04,.34,3.44,this.M.accent,0,.5,0,e),this.box(10.2,.5,.06,this.M.glass,0,2.35,1.72,e),this.box(10.2,.45,.06,this.M.glass,0,1.5,1.72,e),this.box(11.5,.3,3.9,this.M.darkSteel,0,3.55,0,e),this.box(8.2,.8,1.5,this.M.paintedLight,0,4.05,0,e),this.box(8.4,.18,1.7,this.M.darkSteel,0,4.5,0,e);for(let n=-1;n<=1;n++)this.cyl(.26,.26,.7,this.M.stainless,n*3.2,3.95,1.1,e)}buildPowerhouse(){const e=new Ht;e.position.set(-2.2,0,1.5),this.factory.add(e),this.box(8.6,2.2,2,this.M.paintedLight,0,1.1,0,e),this.box(8.64,.28,2.04,this.M.accent,0,.42,0,e),this.box(8,.24,2.3,this.M.darkSteel,0,2.25,0,e),this.box(7.6,.45,.06,this.M.glass,0,1.45,1.02,e);const n=i=>{const r=this.cyl(.16,.16,6.2,this.M.copper,1,2.7,i,this.factory,16);r.rotation.z=Math.PI/2};n(.4),n(0)}buildChimneys(){const e=n=>{const i=new Ht;i.position.set(n,0,-2.6),this.factory.add(i),this.cyl(.95,1.05,.5,this.M.concreteDark,0,.25,0,i,24),this.cyl(.5,.66,11,this.M.concrete,0,5.6,0,i,28),this.cyl(.53,.53,.45,this.M.red,0,10,0,i,28),this.cyl(.53,.53,.45,this.M.rim,0,9.3,0,i,28),this.cyl(.53,.53,.45,this.M.red,0,8.6,0,i,28);const r=new Mt(this.track(new Jf(.52,.07,10,28)),this.M.darkSteel);r.rotation.x=Math.PI/2,r.position.y=11.05,r.castShadow=!0,i.add(r),this.addPlume(i,0,11.2,0,{count:6,rate:.16,rise:5.5,spread:.34,from:.5,to:2.2,opacity:.5,drift:.6,warm:!0})};e(2.7),e(4.5)}buildCoolingTowers(){const e=(n,i)=>{const r=new Ht;r.position.set(n,0,i),this.factory.add(r),this.cyl(1.55,1.75,.3,this.M.concreteDark,0,.15,0,r,32),this.cyl(1.28,1.7,4.2,this.M.concrete,0,2.3,0,r,32),this.cyl(1.4,1.28,.35,this.M.concreteDark,0,4.4,0,r,32),this.addPlume(r,0,4.5,0,{count:7,rate:.13,rise:4.6,spread:.9,from:1.1,to:3,opacity:.55,drift:.5,warm:!1})};e(-6.6,2.2),e(-8.2,-.6)}buildTanks(){const e=n=>{const i=new Ht;i.position.set(n,0,2.4),this.factory.add(i),this.cyl(.72,.72,2.4,this.M.stainless,0,1.2,0,i,24);const r=this.sphere(.72,this.M.stainless,0,2.4,0,i);r.scale.y=.45,this.cyl(.74,.74,.06,this.M.darkSteel,0,1.7,0,i,24),this.cyl(.74,.74,.06,this.M.darkSteel,0,.8,0,i,24)};e(1.6),e(3)}buildSwitchyard(){const e=new Ht;e.position.set(6.8,0,-.4),this.factory.add(e);for(let i=0;i<3;i++){const r=i*1.4;this.box(.14,3.2,.14,this.M.darkSteel,r,1.6,0,e),this.box(1.4,.1,.1,this.M.darkSteel,r,2.5,0,e),this.box(1.1,.1,.1,this.M.darkSteel,r,2.9,0,e)}const n=i=>{this.box(.9,.85,1.2,this.M.darkSteel,i,.55,1.4,e),this.cyl(.08,.08,.5,this.M.stainless,i-.25,1.15,1.4,e,12),this.cyl(.08,.08,.5,this.M.stainless,i+.25,1.15,1.4,e,12)};n(.4),n(2)}buildCameraRig(){this.buildSuspendedCamera(-1),this.buildSuspendedCamera(1)}buildSuspendedCamera(e){const n=10*e,i=3,r=8.8,s=7.6,o=new Ht;o.position.set(n,0,i),this.scene.add(o),this.box(.5,.16,.5,this.M.darkSteel,0,r,0,o),this.cyl(.05,.05,r-s,this.M.darkSteel,0,(r+s)/2,0,o,8),this.cyl(.13,.13,.2,this.M.darkSteel,0,s,0,o,12);const a=new Ht;a.position.set(0,s,0),a.rotation.order="YXZ",a.rotation.y=Math.atan2(-n,-i),a.rotation.x=Math.PI/4,o.add(a),this.box(.14,.14,.4,this.M.darkSteel,0,0,.22,a);const l=this.cyl(.22,.22,1.3,this.M.stainless,0,0,.95,a,22);l.rotation.x=Math.PI/2;const c=this.cyl(.27,.27,.55,this.M.paintedLight,0,0,1.15,a,22);c.rotation.x=Math.PI/2;const d=this.cyl(.17,.17,.05,this.M.glass,0,0,1.62,a,20);d.rotation.x=Math.PI/2;const h=this.track(new Qa({color:2754566,emissive:16722464,emissiveIntensity:0,roughness:.4})),f=new Mt(this.track(new Uo(.08,12,10)),h);f.position.set(.12*e,.18,.45),a.add(f),this.leds.push(h),o.traverse(m=>{m.isMesh&&(m.castShadow=!1)})}addPlume(e,n,i,r,s){const o=new Ht;o.position.set(n,i,r),e.add(o);const a=this.track(new Qf(.5,1)),l=s.warm?15197149:14673130,c=[];for(let d=0;d<s.count;d++){const h=this.track(new Qa({color:l,transparent:!0,opacity:0,depthWrite:!1,roughness:1,metalness:0})),f=(Math.random()-.5)*s.spread,m=new Mt(a,h);m.position.set(f,0,(Math.random()-.5)*s.spread),o.add(m),c.push({mesh:m,phase:d/s.count,speed:s.rate*(.8+Math.random()*.4),rise:s.rise,drift:s.drift,ox:f,seed:Math.random()*6.2831,from:s.from,to:s.to,baseOpacity:s.opacity})}this.plumes.push({group:o,puffs:c})}tickPlumes(e){for(const n of this.plumes)for(const i of n.puffs){i.phase+=i.speed*e,i.phase>=1&&(i.phase-=1);const r=i.phase,s=p1.lerp(i.from,i.to,r);i.mesh.scale.setScalar(s),i.mesh.position.y=r*i.rise,i.mesh.position.x=i.ox+Math.sin(r*6.2831+i.seed)*i.drift*r,i.mesh.material.opacity=Math.sin(Math.PI*r)*i.baseOpacity}}onResize(){const e=this.host.clientWidth||1,n=this.host.clientHeight||1;this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.setSize(e,n,!1),this.camera.aspect=e/n,this.camera.updateProjectionMatrix()}track(e){return this.disposables.push(e),e}box(e,n,i,r,s,o,a,l){const c=new Mt(this.track(new Pr(e,n,i)),r);return c.position.set(s,o,a),c.castShadow=!0,c.receiveShadow=!0,l.add(c),c}cyl(e,n,i,r,s,o,a,l,c=20){const d=new Mt(this.track(new Io(e,n,i,c)),r);return d.position.set(s,o,a),d.castShadow=!0,d.receiveShadow=!0,l.add(d),d}sphere(e,n,i,r,s,o){const a=new Mt(this.track(new Uo(e,20,16)),n);return a.position.set(i,r,s),a.castShadow=!0,a.receiveShadow=!0,o.add(a),a}}function N2(){const t=Me.useRef(null),e=Me.useRef(null);return Me.useEffect(()=>{if(!t.current||!e.current)return;const n=new L2(e.current,t.current);return n.start(),()=>n.dispose()},[]),_.jsx("div",{ref:t,style:{width:"100%",height:"100%",pointerEvents:"none"},children:_.jsx("canvas",{ref:e,style:{display:"block",width:"100%",height:"100%"}})})}const br=[{id:"safety_gear",name:"Safety Gear",color:"#FB7185",icon:"hardhat",description:"Detects missing safety equipment beyond helmets and vests"},{id:"fall_loitering",name:"Fall and Loitering",color:"#A855F7",icon:"person",description:"Identifies fallen workers and unauthorized loitering in restricted zones"},{id:"lab_safety",name:"Lab Safety Detection",color:"#22C55E",icon:"flask",description:"Monitors lab-coat compliance and proper lab protocol adherence"},{id:"fire_smoke",name:"Fire and Smoke Detection",color:"#F97316",icon:"flame",description:"Visual detection of fire ignition and smoke before alarms trigger"},{id:"overcrowding",name:"Overcrowding Detection",color:"#0EA5E9",icon:"users",description:"Flags zones exceeding safe occupancy thresholds"},{id:"no_staff",name:"No Staff Detection",color:"#DC2626",icon:"userx",description:"Alerts when designated zones are unmanned"},{id:"no_helmet",name:"No Helmet Detected",color:"#D946EF",icon:"hardhat",description:"Identifies workers entering hazard zones without hard hats"},{id:"no_vest",name:"No SafetyVest Detected",color:"#FACC15",icon:"shirt",description:"Identifies workers without high-visibility safety vests"},{id:"intrusion",name:"Intrusion Detection",color:"#EAB308",icon:"shield",description:"Detects unauthorized access to restricted or perimeter zones"},{id:"conveyor_belt_health",name:"Conveyor Belt Health",color:"#14B8A6",icon:"belt",description:"Monitors conveyor / pipe-rack belt alignment, wear and jams"}],vr=br.reduce((t,e)=>(t[e.id]=e,t),{});function D2(t){return t.toString().padStart(2,"0")}function I2({onShowDemo:t,onSelectUseCase:e}){const n=br;return _.jsxs("div",{className:"min-h-screen bg-white",children:[_.jsxs("section",{className:"relative min-h-screen overflow-hidden",style:{background:"radial-gradient(125% 90% at 50% 6%, #ffffff 0%, #eef2f8 46%, #e2e8f2 100%)"},children:[_.jsx("div",{className:"pointer-events-none absolute inset-0",style:{backgroundImage:"linear-gradient(rgba(61,90,240,0.05) 1px,transparent 1px),linear-gradient(90deg,rgba(61,90,240,0.05) 1px,transparent 1px)",backgroundSize:"54px 54px",maskImage:"radial-gradient(115% 80% at 50% 0%,#000 55%,transparent 100%)"}}),_.jsx("div",{className:"pointer-events-none absolute -left-40 top-24 h-[28rem] w-[28rem] rounded-full",style:{background:"radial-gradient(circle,#5EEAD41f 0%,transparent 70%)"}}),_.jsxs("div",{className:"relative mx-auto max-w-[1280px] px-6 sm:px-8",children:[_.jsx("img",{src:"/faclon-logo-blue.png",alt:"Faclon Labs",className:"absolute left-6 top-6 z-30 h-8 w-auto sm:left-8"}),_.jsxs("div",{className:"relative mx-auto mt-[42px] h-[64vh] min-h-[480px] w-full",children:[_.jsx("h1",{className:"pointer-events-none absolute inset-x-0 top-0 z-0 flex select-none justify-center text-center",style:{fontFamily:"-apple-system,BlinkMacSystemFont,'SF Pro Display','Helvetica Neue',Arial,sans-serif",fontWeight:600,letterSpacing:"-0.045em",lineHeight:.86,color:"#c0c9d8",fontSize:"clamp(56px,13.5vw,184px)"},children:"I/O Vision"}),_.jsx("div",{className:"absolute inset-0 z-10",children:_.jsx(N2,{})})]}),_.jsxs("div",{className:"relative z-20 mt-[46px] flex flex-wrap items-center justify-center gap-4 pb-16",children:[_.jsxs("button",{type:"button",className:"group inline-flex items-center gap-2 rounded-xl bg-[#0F172A] px-7 py-3.5 text-[15px] font-bold text-white shadow-lg shadow-slate-900/15 transition hover:bg-[#1E293B]",onClick:()=>t(),children:["Launch Dashboard",_.jsx(je,{name:"arrowRight",size:18})]}),_.jsx("a",{href:"#use-cases",className:"inline-flex items-center gap-2 rounded-xl px-6 py-3.5 text-[15px] font-semibold text-slate-700 ring-1 ring-inset ring-slate-300 transition hover:bg-white",children:"Explore use cases"})]})]})]}),_.jsxs("section",{id:"use-cases",className:"relative overflow-hidden px-8 py-16",style:{background:"linear-gradient(180deg,#EAEFFF 0%,#F1F0FF 60%,#ECEFFF 100%)"},children:[_.jsx("div",{className:"pointer-events-none absolute inset-0",style:{backgroundImage:"linear-gradient(rgba(61,90,240,0.06) 1px,transparent 1px),linear-gradient(90deg,rgba(61,90,240,0.06) 1px,transparent 1px)",backgroundSize:"52px 52px",maskImage:"radial-gradient(120% 90% at 50% 0%,#000 60%,transparent 100%)"}}),_.jsxs("div",{className:"relative mx-auto max-w-[1100px]",children:[_.jsxs("div",{className:"mx-auto max-w-2xl text-center",children:[_.jsx("span",{className:"text-[12.5px] font-bold uppercase tracking-[0.16em] text-[#16A34A]",children:"Detection Suite"}),_.jsx("h2",{className:"mt-2 text-[32px] font-extrabold tracking-tight text-[#0F172A] md:text-[38px]",children:"Multiple compliance use cases, one camera network"}),_.jsx("p",{className:"mt-3 text-[15.5px] leading-relaxed text-[#475569]",children:"Every I/O Vision model runs on your existing CCTV feeds — no new hardware. Each flags a specific safety or compliance risk and routes it to the dashboard in real time."})]}),_.jsx("div",{className:"mt-10 grid grid-cols-3 gap-3.5",children:n.map((i,r)=>_.jsxs("button",{type:"button",onClick:()=>e(i.id),title:"Open "+i.name+" in the dashboard",className:"group relative w-full overflow-hidden rounded-xl border border-white bg-white/80 p-4 text-left shadow-[0_1px_3px_rgba(15,23,42,0.06)] ring-1 ring-[#3D5AF0]/5 backdrop-blur-sm transition-all duration-200 hover:-translate-y-1 hover:bg-white hover:shadow-[0_12px_26px_rgba(38,50,158,0.12)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3D5AF0]/40",children:[_.jsx("span",{className:"absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 transition-transform duration-200 group-hover:scale-x-100",style:{backgroundColor:i.color}}),_.jsxs("div",{className:"flex items-center gap-2.5",children:[_.jsx("div",{className:"flex h-9 w-9 shrink-0 items-center justify-center rounded-lg",style:{backgroundColor:i.color+"1F",color:i.color},children:_.jsx(je,{name:i.icon,size:18})}),_.jsx("span",{className:"text-[10.5px] font-semibold text-[#94A3B8]",children:D2(r+1)}),_.jsx("span",{className:"ml-auto translate-x-1 text-[#3D5AF0] opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100",children:_.jsx(je,{name:"arrowRight",size:16})})]}),_.jsx("div",{className:"mt-3 text-[14.5px] font-bold text-[#0F172A]",children:i.name}),_.jsx("div",{className:"mt-1 text-[12.5px] leading-snug text-[#64748B]",children:i.description})]},i.id))})]})]})]})}class U2{constructor(e,n){Ie(this,"renderer");Ie(this,"scene");Ie(this,"camera");Ie(this,"plant");Ie(this,"anchors",[]);Ie(this,"markerEls",[]);Ie(this,"clock",new Ev);Ie(this,"frameId",0);Ie(this,"ro");Ie(this,"disposables",[]);Ie(this,"dragging",!1);Ie(this,"lastX",0);Ie(this,"lastY",0);Ie(this,"spin",0);Ie(this,"frustumSize",38);Ie(this,"minFrustum",26);Ie(this,"maxFrustum",54);Ie(this,"azimuth",Math.PI/4);Ie(this,"elevation",32*Math.PI/180);Ie(this,"minEl",0);Ie(this,"maxEl",89*Math.PI/180);Ie(this,"camRadius",120);Ie(this,"target",new z(0,3.5,0));Ie(this,"wp",new z);Ie(this,"ndc",new z);Ie(this,"M");Ie(this,"onDown",e=>{this.dragging=!0,this.lastX=e.clientX,this.lastY=e.clientY,this.spin=0,this.canvas.style.cursor="grabbing"});Ie(this,"onMove",e=>{if(!this.dragging)return;const n=e.clientX-this.lastX,i=e.clientY-this.lastY;this.lastX=e.clientX,this.lastY=e.clientY;const r=n*.008;this.plant.rotation.y+=r,this.spin=r,this.elevation=Math.min(this.maxEl,Math.max(this.minEl,this.elevation+i*.006)),this.updateCamera()});Ie(this,"onUp",()=>{this.dragging&&(this.dragging=!1,this.canvas.style.cursor="grab")});Ie(this,"onWheel",e=>{e.preventDefault(),this.frustumSize=Math.min(this.maxFrustum,Math.max(this.minFrustum,this.frustumSize+e.deltaY*.02)),this.applyProjection()});Ie(this,"animate",()=>{this.frameId=requestAnimationFrame(this.animate),this.clock.getDelta(),!this.dragging&&Math.abs(this.spin)>2e-5&&(this.plant.rotation.y+=this.spin,this.spin*=.93),this.renderer.render(this.scene,this.camera),this.updateMarkers()});this.canvas=e,this.host=n}setMarkerEls(e){this.markerEls=e}start(){this.initThree(),this.buildPalette(),this.buildScene(),this.onResize(),this.ro=new ResizeObserver(()=>this.onResize()),this.ro.observe(this.host),this.canvas.addEventListener("pointerdown",this.onDown),window.addEventListener("pointermove",this.onMove),window.addEventListener("pointerup",this.onUp),this.canvas.addEventListener("wheel",this.onWheel,{passive:!1}),this.animate()}dispose(){var e,n;cancelAnimationFrame(this.frameId),(e=this.ro)==null||e.disconnect(),this.canvas.removeEventListener("pointerdown",this.onDown),window.removeEventListener("pointermove",this.onMove),window.removeEventListener("pointerup",this.onUp),this.canvas.removeEventListener("wheel",this.onWheel),this.disposables.forEach(i=>i.dispose()),(n=this.renderer)==null||n.dispose()}initThree(){this.renderer=new _v({canvas:this.canvas,antialias:!0,alpha:!0}),this.renderer.setClearColor(0,0),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=kf,this.renderer.toneMapping=Of,this.renderer.toneMappingExposure=1.15,this.scene=new yv,this.camera=new qf(-1,1,1,-1,.1,400),this.updateCamera(),this.scene.add(new Mv(16777215,14210024,1.05));const e=new Cl(16777215,1.9);e.position.set(28,40,20),e.target.position.copy(this.target),e.castShadow=!0,e.shadow.mapSize.set(2048,2048),e.shadow.bias=-4e-4,e.shadow.normalBias=.03;const n=e.shadow.camera;n.left=-40,n.right=40,n.top=40,n.bottom=-40,n.near=1,n.far=140,this.scene.add(e,e.target);const i=new Cl(15329014,.5);i.position.set(-30,18,-12),this.scene.add(i),this.plant=new Ht,this.plant.rotation.y=-.5,this.scene.add(this.plant)}buildPalette(){const e=(n,i=.05,r=.75,s={})=>this.track(new Qa({color:n,metalness:i,roughness:r,...s}));this.M={pink:e(15236753),pinkDark:e(14114677),pinkLight:e(15770545),purple:e(9406662),purpleDark:e(7301282),purpleLight:e(11183320),grey:e(12370124),greyDark:e(9607334),greyLight:e(14080481),white:e(15659252),roof:e(9143486),roofPink:e(13208992),red:e(14046798),steel:e(11449536,.5,.4),window:e(12572394,.2,.25,{emissive:2375774,emissiveIntensity:.25}),concrete:e(13685210),dark:e(5659238,.4,.5),truck:e(14706015),barrel:e(9410736,.6,.35),ground:e(14736622,0,.95),road:e(13618397),glass:e(10467020,.3,.2),amber:e(15114586)}}buildScene(){this.buildGround(),this.buildTallChimney(-16,-7),this.buildTaperedStack(-10.5,-3),this.buildSiloCluster(-6,1.5),this.buildMainBuildings(),this.buildDomeTank(6.5,-6.5),this.buildTruck(13.5,-3.5),this.buildRightCluster(14.5,3.5),this.buildFrontBlock(1.5,6.5),this.buildPipeRack(9),this.buildCurvedRoof(9.5,9.5),this.buildWorkers(),this.addAnchor("safety_gear",-1.5,6.4,-3),this.addAnchor("fall_loitering",-10.5,6.2,-3),this.addAnchor("lab_safety",14.5,7.4,3.5),this.addAnchor("fire_smoke",-16,13.4,-7),this.addAnchor("overcrowding",1.5,5.4,6.5),this.addAnchor("no_staff",13.5,3.6,-3.5),this.addAnchor("no_helmet",-6,6.6,1.5),this.addAnchor("no_vest",-1,4.2,1.8),this.addAnchor("intrusion",9.5,4.6,9.5),this.addAnchor("conveyor_belt_health",-6.5,3.4,9)}buildGround(){const e=this.cyl(20,20,.7,this.M.ground,0,-.35,0,this.plant,72);e.receiveShadow=!0,e.castShadow=!1,this.box(30,.06,4.4,this.M.road,2,.02,-3.5,this.plant),this.box(4.4,.06,22,this.M.road,10,.02,2,this.plant)}buildTallChimney(e,n){const i=this.group(e,n);this.box(3.2,.5,3.2,this.M.purpleDark,0,.25,0,i);const r=12;this.cyl(.62,.85,r,this.M.white,0,r/2+.4,0,i,26);for(let s=0;s<4;s++)this.cyl(.7,.78,.9,this.M.red,0,2.2+s*2.5,0,i,26);this.cyl(.66,.66,.5,this.M.greyLight,0,r+.7,0,i,26),this.sphere(.6,this.M.greyLight,0,r+.95,0,i).scale.y=.5}buildTaperedStack(e,n){const i=this.group(e,n);this.cyl(.55,1.5,9,this.M.grey,0,4.5,0,i,26),this.cyl(.55,.55,.4,this.M.greyDark,0,9,0,i,26);for(const r of[0,Math.PI*.66,Math.PI*1.33]){const s=this.cyl(.06,.06,8,this.M.steel,Math.cos(r)*1.5,4,Math.sin(r)*1.5,i,8);s.rotation.z=Math.cos(r)*.16,s.rotation.x=-Math.sin(r)*.16}}buildSiloCluster(e,n){const i=this.group(e,n);this.box(6,1.2,4.2,this.M.pink,0,.6,0,i),this.box(6.1,.4,4.3,this.M.pinkDark,0,.2,0,i);for(const r of[-1.6,0,1.6])this.cyl(.7,.7,5,this.M.greyLight,r,3.7,0,i,24);this.ladder(i,1.6+.75,1.2,.2,4.6)}buildMainBuildings(){const e=this.group(-1.5,-3);this.box(6,6,6,this.M.pink,0,3,0,e),this.box(6.3,.7,6.3,this.M.roof,0,6.2,0,e),this.box(4.2,.5,4.2,this.M.purpleDark,0,6.7,0,e),this.box(2.6,3.2,.12,this.M.greyLight,0,1.6,3.02,e);for(let r=0;r<7;r++)this.box(2.6,.06,.14,this.M.greyDark,0,.5+r*.42,3.06,e);this.windowGrid(e,3.02,1.4,3.4,2,4,.8,.7),this.ladder(e,-2.5,0,3.1,6);const n=this.group(3,-6.5);this.box(5.2,8,5.2,this.M.purple,0,4,0,n),this.box(5.5,.7,5.5,this.M.purpleDark,0,8.2,0,n),this.box(3.4,1,3.4,this.M.greyLight,0,8.9,0,n),this.box(1.2,.5,1.2,this.M.dark,1,9.6,0,n),this.windowGrid(n,2.62,5,3.2,3,5,.7,.7),this.ladder(n,2.6,0,2.55,8);const i=this.group(-1,1.5);this.box(6.5,3,4,this.M.pink,0,1.5,0,i),this.box(6.7,.5,4.2,this.M.roof,0,3.1,0,i),this.box(2.2,.5,2,this.M.purpleDark,-1.5,3.5,0,i),this.windowGrid(i,2.02,4.4,1.5,3,1,.9,.9)}buildDomeTank(e,n){const i=this.group(e,n);this.box(4,.5,4,this.M.greyDark,0,.25,0,i),this.cyl(1.8,1.8,3.6,this.M.greyLight,0,2.3,0,i,32),this.sphere(1.8,this.M.white,0,4.1,0,i).scale.y=.55,this.cyl(1.85,1.85,.15,this.M.grey,0,2.6,0,i,32)}buildTruck(e,n){const i=this.group(e,n);i.rotation.y=Math.PI/2,this.box(7.5,.4,2.2,this.M.dark,-1.2,.9,0,i),this.box(7.4,.2,2,this.M.steel,-1.2,1.15,0,i),this.box(2,2,2.1,this.M.truck,3.4,1.2,0,i),this.box(1.9,.9,2,this.M.glass,3.45,2,0,i);for(let r=0;r<4;r++){const s=this.cyl(.5,.5,1.4,this.M.barrel,-3.6+r*1.5,1.85,0,i,18);s.rotation.z=Math.PI/2}for(const r of[3,-.2,-1.8,-3.4])for(const s of[-1.05,1.05]){const o=this.cyl(.55,.55,.35,this.M.dark,r,.55,s,i,16);o.rotation.x=Math.PI/2}}buildRightCluster(e,n){const i=this.group(e,n);this.box(5,5.5,5,this.M.purpleLight,0,2.75,0,i),this.box(5.3,.6,5.3,this.M.purpleDark,0,5.7,0,i),this.box(1.4,.7,1.4,this.M.greyLight,-1.2,6.3,-1.2,i),this.box(1.4,.7,1.4,this.M.greyLight,1,6.3,.6,i),this.cyl(.35,.35,1.6,this.M.grey,1.8,6.8,-1.8,i,16),this.windowGrid(i,2.52,4.2,3,3,4,.7,.7),this.box(3.2,3.4,3.2,this.M.pink,-3.6,1.7,2.4,i),this.box(3.4,.5,3.4,this.M.roofPink,-3.6,3.6,2.4,i)}buildFrontBlock(e,n){const i=this.group(e,n);this.box(5,4.5,4,this.M.purple,-2.5,2.25,0,i),this.box(5.2,.5,4.2,this.M.purpleDark,-2.5,4.6,0,i),this.box(4.5,3,3.6,this.M.pink,2,1.5,.4,i),this.box(4.7,.5,3.8,this.M.roof,2,3.1,.4,i),this.windowGrid(i,-2.5,2.02,3.2,3,4,.6,.6,2.02),this.windowGrid(i,2,1.85,2.22,3,2,.7,.7),this.cyl(.8,1.2,3,this.M.white,-.4,1.5,-2.6,i,28),this.sphere(.4,this.M.greyLight,-.4,3.1,-2.6,i),this.box(1.8,1.8,.1,this.M.greyLight,2,.9,2.22,i)}buildPipeRack(e){const n=this.group(-11,e);for(let i=0;i<6;i++){const r=-8+i*3;this.box(.25,3,.25,this.M.steel,r,1.5,-.7,n),this.box(.25,3,.25,this.M.steel,r,1.5,.7,n),this.box(.25,.25,2,this.M.steel,r,3,0,n)}for(const i of[-.4,0,.4])this.cyl(.16,.16,16,this.M.grey,-.5,3.2,i,n,12).rotation.z=Math.PI/2;this.box(16,.2,1.4,this.M.greyDark,-.5,3.05,0,n)}buildCurvedRoof(e,n){const i=this.group(e,n);this.box(5,2.4,4.5,this.M.greyLight,0,1.2,0,i);const r=this.cyl(2.25,2.25,5,this.M.dark,0,2.4,0,i,20,!0);r.rotation.z=Math.PI/2,r.scale.set(1,1,.62),this.box(4,4,4,this.M.purpleLight,4.5,2,-1,i),this.box(4.2,.5,4.2,this.M.purpleDark,4.5,4.2,-1,i),this.cyl(.6,.6,1.2,this.M.greyLight,3.6,5,-1.6,i,18),this.cyl(.6,.6,1.2,this.M.greyLight,5.2,5,-.4,i,18),this.windowGrid(i,0,1.1,2.3,4,2,.6,.6)}buildWorkers(){const e=(n,i,r)=>{const s=this.group(n,i);this.cyl(.18,.22,.7,r,0,.45,0,s,10),this.sphere(.16,this.M.amber,0,.95,0,s)};e(1.2,2.6,this.M.amber),e(9.5,-2.5,this.M.red),e(-3.2,-1,this.M.amber)}addAnchor(e,n,i,r){const s=new Nt;s.position.set(n,i,r),this.plant.add(s);const o=br.find(a=>a.id===e);this.anchors[br.indexOf(o)]={obj:s,uc:o}}updateMarkers(){if(!this.markerEls.length)return;const e=this.host.clientWidth,n=this.host.clientHeight;for(let i=0;i<this.anchors.length;i++){const r=this.anchors[i],s=this.markerEls[i];if(!r||!s)continue;if(r.obj.getWorldPosition(this.wp),this.ndc.copy(this.wp).project(this.camera),!(this.ndc.z<1&&this.ndc.x>-1.1&&this.ndc.x<1.1&&this.ndc.y>-1.1&&this.ndc.y<1.1)){s.style.opacity="0",s.style.pointerEvents="none";continue}const a=(this.ndc.x*.5+.5)*e,l=(-this.ndc.y*.5+.5)*n;s.style.transform=`translate(${a}px, ${l}px) translate(-50%, -50%)`,s.style.opacity="1",s.style.pointerEvents="auto"}}updateCamera(){const e=Math.cos(this.elevation),n=Math.sin(this.elevation);this.camera.position.set(this.target.x+this.camRadius*e*Math.sin(this.azimuth),this.target.y+this.camRadius*n,this.target.z+this.camRadius*e*Math.cos(this.azimuth)),this.camera.lookAt(this.target)}applyProjection(){const e=this.host.clientWidth||1,n=this.host.clientHeight||1,i=e/n,r=this.frustumSize/2;this.camera.left=-r*i,this.camera.right=r*i,this.camera.top=r,this.camera.bottom=-r,this.camera.updateProjectionMatrix()}onResize(){const e=this.host.clientWidth||1,n=this.host.clientHeight||1;this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.setSize(e,n,!1),this.applyProjection()}track(e){return this.disposables.push(e),e}group(e,n){const i=new Ht;return i.position.set(e,0,n),this.plant.add(i),i}box(e,n,i,r,s,o,a,l){const c=new Mt(this.track(new Pr(e,n,i)),r);return c.position.set(s,o,a),c.castShadow=!0,c.receiveShadow=!0,l.add(c),c}cyl(e,n,i,r,s,o,a,l,c=20,d=!1){const h=d?new Io(e,n,i,c,1,!1,0,Math.PI):new Io(e,n,i,c),f=new Mt(this.track(h),r);return f.position.set(s,o,a),f.castShadow=!0,f.receiveShadow=!0,l.add(f),f}sphere(e,n,i,r,s,o){const a=new Mt(this.track(new Uo(e,18,14)),n);return a.position.set(i,r,s),a.castShadow=!0,a.receiveShadow=!0,o.add(a),a}ladder(e,n,i,r,s){this.box(.06,s,.06,this.M.steel,n-.18,i+s/2,r,e),this.box(.06,s,.06,this.M.steel,n+.18,i+s/2,r,e);const o=Math.floor(s/.5);for(let a=1;a<o;a++)this.box(.42,.05,.05,this.M.steel,n,i+a*.5,r,e)}windowGrid(e,n,i,r,s,o,a,l,c){const d=-((s-1)*(a+.35))/2,h=-((o-1)*(l+.35))/2;for(let f=0;f<s;f++)for(let m=0;m<o;m++){const y=d+f*(a+.35),S=h+m*(l+.35);c!==void 0?this.box(.06,l,a,this.M.window,c,r+S,i+y,e):this.box(a,l,.06,this.M.window,i+y,r+S,n,e)}}}function F2({onSelectUseCase:t}){const e=Me.useRef(null),n=Me.useRef(null),i=Me.useRef([]);return Me.useEffect(()=>{if(!e.current||!n.current)return;const r=new U2(n.current,e.current);return r.setMarkerEls(i.current),r.start(),()=>r.dispose()},[]),_.jsxs("div",{ref:e,className:"relative h-full w-full overflow-hidden",style:{background:"radial-gradient(120% 100% at 50% 30%, #f2f0fb 0%, #e7e4f4 60%, #ddd9ee 100%)"},children:[_.jsx("canvas",{ref:n,className:"block h-full w-full",style:{cursor:"grab"}}),br.map((r,s)=>_.jsx("button",{ref:o=>i.current[s]=o,type:"button",onClick:()=>t(r.id),title:`Open ${r.name} dashboard`,className:"group absolute left-0 top-0 z-10 -translate-x-1/2 -translate-y-1/2",style:{opacity:0,willChange:"transform,opacity"},children:_.jsxs("span",{className:"flex items-center rounded-full bg-white/95 p-1 shadow-[0_6px_16px_rgba(38,30,80,0.22)] ring-1 ring-black/5 backdrop-blur transition duration-150 group-hover:scale-105",children:[_.jsx("span",{className:"flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-white",style:{backgroundColor:r.color},children:_.jsx(je,{name:r.icon,size:15})}),_.jsx("span",{className:"max-w-0 overflow-hidden whitespace-nowrap text-[12px] font-semibold text-[#1F1B3A] opacity-0 transition-all duration-200 group-hover:ml-2 group-hover:mr-1.5 group-hover:max-w-[220px] group-hover:opacity-100",children:r.name})]})},r.id)),_.jsx("div",{className:"pointer-events-none absolute bottom-5 left-1/2 z-10 -translate-x-1/2 rounded-full bg-white/80 px-4 py-2 text-[12.5px] font-medium text-[#4A4568] shadow-sm ring-1 ring-black/5 backdrop-blur",children:"Drag to rotate & tilt • Scroll to zoom • Click a tag to open its dashboard"})]})}const Mm={lab:{from:"#213542",to:"#0d1820",accent:"#5eead4",tag:"LAB"},factory:{from:"#3a3340",to:"#1b1620",accent:"#f2a6b4",tag:"PROD"},cooling_tower:{from:"#26303f",to:"#0f1722",accent:"#7cc4ff",tag:"COOL"},road:{from:"#2a2d33",to:"#121316",accent:"#c9ccd6",tag:"ROAD"},loading_bay:{from:"#3a2f2a",to:"#191410",accent:"#e6a15a",tag:"BAY"},gate:{from:"#232833",to:"#0e1117",accent:"#a8a2d4",tag:"GATE"}};function eu(t){return t.toString().padStart(2,"0")}function Fo({scene:t="factory",seed:e=0,mode:n="live",violation:i=!1,timeLabel:r}){const s=Mm[t]??Mm.factory,[o,a]=Me.useState("");Me.useEffect(()=>{const c=()=>{const h=new Date;a(`2026-06-03 ${eu(h.getHours())}:${eu(h.getMinutes())}:${eu(h.getSeconds())}`)};c();const d=setInterval(c,1e3);return()=>clearInterval(d)},[]);const l=c=>`-${(e*3+c*5)%17}s`;return _.jsxs("div",{className:"lf-root",children:[_.jsx("div",{className:"lf-layer",style:{background:`radial-gradient(120% 90% at 50% 12%,${s.from} 0%,${s.to} 100%)`}}),_.jsxs("svg",{className:"lf-layer",viewBox:"0 0 320 180",preserveAspectRatio:"none",style:{opacity:.5},children:[_.jsx("line",{x1:"0",y1:"118",x2:"320",y2:"118",stroke:s.accent,strokeOpacity:"0.18"}),_.jsx("line",{x1:"160",y1:"118",x2:"30",y2:"180",stroke:s.accent,strokeOpacity:"0.13"}),_.jsx("line",{x1:"160",y1:"118",x2:"290",y2:"180",stroke:s.accent,strokeOpacity:"0.13"}),_.jsx("line",{x1:"160",y1:"118",x2:"160",y2:"180",stroke:s.accent,strokeOpacity:"0.1"}),_.jsx("line",{x1:"0",y1:"150",x2:"320",y2:"150",stroke:s.accent,strokeOpacity:"0.08"})]}),_.jsx("div",{className:"lf-fig lf-figA",style:{width:"7%",height:"16%",background:s.accent,animationDelay:l(0)}}),_.jsx("div",{className:"lf-fig lf-figB",style:{width:"6%",height:"14%",background:"#e7e2da",animationDelay:l(1)}}),e%2===0&&_.jsx("div",{className:"lf-fig lf-figC",style:{width:"6.5%",height:"15%",background:s.accent,animationDelay:l(2)}}),_.jsx("div",{className:"lf-layer",style:{pointerEvents:"none"},children:_.jsx("div",{className:"lf-rec",style:{position:"absolute",left:`${i?34:12}%`,top:`${i?40:18}%`,width:"20%",height:"34%",border:`1.5px solid ${i?"#ff5b52":s.accent}`},children:_.jsx("span",{className:"absolute -top-[15px] left-0 px-1 text-[8px] font-semibold text-white",style:{background:i?"#ff5b52":s.accent,color:i?"#fff":"#04211d"},children:i?"ALERT 0.9":"ok 0.4"})})}),_.jsx("div",{className:"lf-scan",style:{position:"absolute",left:0,right:0,height:"2px",background:"linear-gradient(90deg,transparent,rgba(255,255,255,.55),transparent)"}}),_.jsx("div",{className:"lf-layer lf-grain",style:{background:"repeating-linear-gradient(0deg,#fff 0,#fff 1px,transparent 1px,transparent 3px)",mixBlendMode:"overlay"}}),_.jsx("div",{className:"lf-layer",style:{boxShadow:"inset 0 0 60px 10px rgba(0,0,0,.55)"}}),_.jsxs("div",{className:"absolute left-2 top-2 flex items-center gap-1.5 rounded bg-black/55 px-1.5 py-0.5",children:[n==="live"&&_.jsx("span",{className:"lf-rec inline-block h-1.5 w-1.5 rounded-full bg-[#ff4d4d]"}),_.jsx("span",{className:"text-[9px] font-bold tracking-wider text-white",children:n==="live"?"LIVE":"REPLAY"}),_.jsxs("span",{className:"text-[9px] font-semibold text-white/60",children:["· ",s.tag]})]}),_.jsx("div",{className:"absolute bottom-2 right-2 rounded bg-black/55 px-1.5 py-0.5",children:_.jsx("span",{className:"font-mono text-[9px] text-white/85",children:r||o})})]})}const Ps=[{id:"cam_lab_gf_1",name:"Maxpro Lab GF 1",area:"lab",zone:"Lab GF Zone",scene:"lab",ip:"10.20.11.21"},{id:"cam_lab_gf_2",name:"Maxpro Lab GF 2",area:"lab",zone:"Lab GF Zone",scene:"lab",ip:"10.20.11.22"},{id:"cam_lab_ff_1",name:"Maxpro Lab FF 1",area:"lab",zone:"Lab FF Zone",scene:"lab",ip:"10.20.11.23"},{id:"cam_lab_ff_2",name:"Maxpro Lab FF 2",area:"lab",zone:"Lab FF Zone",scene:"lab",ip:"10.20.11.24"},{id:"cam_prod_1",name:"Production Floor 1",area:"production",zone:"Assembly East",scene:"factory",ip:"10.20.22.31"},{id:"cam_prod_2",name:"Production Floor 2",area:"production",zone:"Assembly West",scene:"factory",ip:"10.20.22.32"},{id:"cam_prod_3",name:"Production Floor 3",area:"production",zone:"Packing Line",scene:"factory",ip:"10.20.22.33"},{id:"cam_cool_1",name:"UPI 14 MEE Cooling Tower",area:"equipment",zone:"Cooling Yard",scene:"cooling_tower",ip:"10.20.33.41"},{id:"cam_cool_2",name:"Cooling Tower 2",area:"equipment",zone:"Cooling Yard",scene:"cooling_tower",ip:"10.20.33.42"},{id:"cam_boiler",name:"Boiler Room",area:"equipment",zone:"Utilities",scene:"loading_bay",ip:"10.20.33.43"},{id:"cam_main_road",name:"Main Road",area:"perimeter",zone:"North Perimeter",scene:"road",ip:"10.20.44.51"},{id:"cam_main_gate",name:"Main Gate",area:"perimeter",zone:"Main Entrance",scene:"gate",ip:"10.20.44.52"}],En=Ps.reduce((t,e)=>(t[e.id]=e,t),{}),k2={lab:{lab_safety:10,no_vest:4,no_helmet:3,safety_gear:2,fall_loitering:1},production:{no_helmet:6,no_vest:6,safety_gear:4,conveyor_belt_health:5,overcrowding:3,fall_loitering:3,no_staff:2},equipment:{safety_gear:5,no_helmet:4,no_vest:4,conveyor_belt_health:6,fire_smoke:3,fall_loitering:2},perimeter:{intrusion:8,overcrowding:4,no_staff:3,fall_loitering:2}},O2={cam_cool_1:10,cam_lab_gf_1:9,cam_main_road:6,cam_lab_gf_2:5,cam_lab_ff_1:4,cam_prod_1:4,cam_prod_2:3,cam_cool_2:3,cam_prod_3:3,cam_lab_ff_2:2,cam_main_gate:2,cam_boiler:2},z2=[1,1,1,1,1,2,3,5,9,14,18,20,22,24,23,19,16,12,8,5,3,2,1,1],Em=[{sev:"High",w:50},{sev:"Medium",w:30},{sev:"Low",w:20}];function eh(t){let e=t>>>0;return function(){e|=0,e=e+1831565813|0;let n=Math.imul(e^e>>>15,1|e);return n=n+Math.imul(n^n>>>7,61|n)^n,((n^n>>>14)>>>0)/4294967296}}function Na(t,e){const n=t.reduce((r,s)=>r+s,0);let i=e()*n;for(let r=0;r<t.length;r++)if(i-=t[r],i<0)return r;return t.length-1}const wv=20260603,Tv=1617,B2="2026-06-03",Av=Ps.map(t=>t.id),H2=Av.map(t=>O2[t]??1),V2={lab_safety:"Person without lab-coat detected",no_helmet:"Person without helmet detected",no_vest:"Person without safety vest detected",fire_smoke:"Smoke signature detected",intrusion:"Unauthorised entry detected",overcrowding:"Zone occupancy threshold exceeded",no_staff:"Designated zone unmanned",fall_loitering:"Fall / loitering detected",safety_gear:"Missing safety equipment detected",conveyor_belt_health:"Belt misalignment / jam detected"};function tu(t){return t<10?`0${t}`:`${t}`}function bv(t,e,n){const i=Av[Na(H2,n)],r=En[i],s=k2[r.area],o=Object.keys(s),a=o.map(u=>s[u]??0),l=o[Na(a,n)],c=Em[Na(Em.map(u=>u.w),n)].sev,d=Na(z2,n),h=6+n()*16,f=8+n()*18,m=n()*(100-h),y=n()*(100-f),S=Math.floor(n()*60),p=Math.floor(n()*60);return{id:t,cameraId:i,useCaseId:l,severity:c,message:V2[l]??"Non compliance detected",timestamp:`${e}T${tu(d)}:${tu(S)}:${tu(p)}`,bbox:{x:Math.round(m*10)/10,y:Math.round(y*10)/10,w:Math.round(h*10)/10,h:Math.round(f*10)/10},resolved:!1}}function Cv(t,e){const n=eh(t),i=[];for(let r=0;r<e;r++)i.push(bv(r+1,B2,n));return i}let nu=null;function th(){return nu||(nu=Cv(wv,Tv)),nu}function G2(t){const e=En[t.cameraId];return{id:t.id,cameraId:t.cameraId,cameraName:e.name,ip:e.ip,zone:e.zone,severity:t.severity,message:t.message,timestamp:t.timestamp}}function Rv(t){return th().filter(e=>e.useCaseId===t).map(G2).sort((e,n)=>n.timestamp.localeCompare(e.timestamp))}function Bd(t){const e=new Map;for(const n of th())n.useCaseId===t&&e.set(n.cameraId,(e.get(n.cameraId)??0)+1);return[...e.entries()].map(([n,i])=>({camera:En[n],count:i})).sort((n,i)=>i.count-n.count)}function wm(t,e){return Rv(t).filter(n=>n.cameraId===e)}function W2(t){return th().filter(e=>e.useCaseId===t).sort((e,n)=>n.timestamp.localeCompare(e.timestamp))}function Pv({cameras:t,useCaseId:e,index:n=0,onClose:i,onViewViolations:r}){const[s,o]=Me.useState(n),[a,l]=Me.useState(!0),[c,d]=Me.useState(100),[h,f]=Me.useState("live"),[m,y]=Me.useState(""),[S,p]=Me.useState(()=>wm(e,t[n].id).slice(0,5)),u=t[s],v=Me.useRef(a);v.current=a;const g=Me.useRef(c);g.current=c;const M=Me.useRef(s);M.current=s;const P=O=>O.slice(11,19),b=O=>{const $=O>=99.5?"live":"rewind";if(f($),$==="rewind"){const j=(100-O)/100*60,Y=new Date(Date.now()-j*6e4),N=K=>K.toString().padStart(2,"0");y(`◀ ${N(Y.getHours())}:${N(Y.getMinutes())}:${N(Y.getSeconds())}`)}},T=()=>{d(100),l(!0),b(100)},R=O=>{o(O),T()},D=()=>R((M.current-1+t.length)%t.length),x=()=>R((M.current+1)%t.length),E=()=>l(O=>!O),U=()=>{const O=Math.max(0,g.current-8.3);d(O),b(O)},B=O=>{const $=Number(O);d($),b($)};return Me.useEffect(()=>{p(wm(e,u.id).slice(0,5))},[s,e]),Me.useEffect(()=>{const O=setInterval(()=>{if(v.current&&g.current<100){const $=Math.min(100,g.current+1.5);d($),b($)}},250);return()=>clearInterval(O)},[]),Me.useEffect(()=>{const O=$=>{$.key==="Escape"?i():$.key==="ArrowLeft"?D():$.key==="ArrowRight"&&x()};return document.addEventListener("keydown",O),()=>document.removeEventListener("keydown",O)},[t.length]),_.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 p-4",onClick:()=>i(),children:_.jsxs("div",{className:"flex max-h-[92vh] w-[94vw] max-w-[1200px] flex-col overflow-hidden rounded-2xl bg-white shadow-2xl",onClick:O=>O.stopPropagation(),children:[_.jsxs("div",{className:"flex items-center justify-between border-b border-slate-200 px-5 py-3",children:[_.jsxs("div",{className:"min-w-0",children:[_.jsxs("div",{className:"flex items-center gap-2",children:[_.jsx("span",{className:"text-[15px] font-semibold text-slate-900",children:u.name}),_.jsx("span",{className:"rounded bg-slate-100 px-1.5 py-0.5 font-mono text-[11px] text-slate-500",children:u.ip})]}),_.jsxs("div",{className:"text-[12px] text-slate-500",children:[u.zone," · Camera ",s+1," / ",t.length]})]}),_.jsx("button",{type:"button",className:"flex h-8 w-8 items-center justify-center rounded-full text-slate-500 hover:bg-slate-100",onClick:()=>i(),"aria-label":"Close",children:_.jsx(je,{name:"x",size:18})})]}),_.jsxs("div",{className:"grid min-h-0 flex-1 grid-cols-1 lg:grid-cols-[1fr_320px]",children:[_.jsxs("div",{className:"flex min-h-0 flex-col border-r border-slate-200",children:[_.jsxs("div",{className:"relative bg-black",style:{aspectRatio:"16/9"},children:[_.jsx(Fo,{scene:u.scene,seed:s+3,mode:h,violation:h==="live",timeLabel:h==="rewind"?m:void 0}),_.jsx("button",{type:"button",className:"absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/45 text-white hover:bg-black/70",onClick:()=>D(),"aria-label":"Previous camera",children:_.jsx(je,{name:"chevronLeft",size:20})}),_.jsx("button",{type:"button",className:"absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/45 text-white hover:bg-black/70",onClick:()=>x(),"aria-label":"Next camera",children:_.jsx(je,{name:"chevronRight",size:20})})]}),_.jsxs("div",{className:"px-4 py-3",children:[_.jsxs("div",{className:"flex items-center gap-3",children:[_.jsx("button",{type:"button",className:"flex h-9 w-9 items-center justify-center rounded-full bg-slate-900 text-white hover:bg-slate-700",onClick:()=>E(),"aria-label":a?"Pause":"Play",children:_.jsx(je,{name:a?"pause":"play",size:15})}),_.jsxs("button",{type:"button",className:"flex h-8 items-center gap-1 rounded-full border border-slate-300 px-3 text-[12px] font-medium text-slate-700 hover:bg-slate-50",onClick:()=>U(),title:"Rewind 5 min",children:[_.jsx(je,{name:"rewind",size:14})," 5m"]}),_.jsx("input",{type:"range",min:"0",max:"100",step:"0.5",className:"h-1.5 flex-1 accent-[#3D5AF0]",value:c,onChange:O=>B(O.target.value)}),_.jsx("span",{className:"w-[130px] text-right font-mono text-[12px]",style:{color:h==="live"?"#16A34A":"#475569"},children:h==="live"?"● LIVE":m}),h==="rewind"&&_.jsx("button",{type:"button",className:"rounded-full bg-[#16A34A] px-3 py-1 text-[11px] font-semibold text-white",onClick:()=>T(),children:"Go live"})]}),_.jsx("div",{className:"mt-3 flex gap-2 overflow-x-auto pb-1",children:t.map((O,$)=>_.jsx("button",{type:"button",onClick:()=>R($),className:`relative h-12 w-20 shrink-0 overflow-hidden rounded-md transition ${$===s?"ring-2 ring-[#3D5AF0]":"ring-1 ring-slate-200"}`,title:O.name,children:_.jsx(Fo,{scene:O.scene,seed:$+1})},O.id))})]})]}),_.jsxs("div",{className:"flex min-h-0 flex-col bg-slate-50",children:[_.jsx("div",{className:"border-b border-slate-200 px-4 py-3",children:_.jsxs("div",{className:"flex items-center justify-between gap-2",children:[_.jsxs("div",{children:[_.jsx("div",{className:"text-[13px] font-semibold text-slate-900",children:"Last 5 violations"}),_.jsx("div",{className:"text-[11.5px] text-slate-500",children:"on this camera"})]}),_.jsxs("button",{type:"button",onClick:()=>r(u.id),className:"inline-flex items-center gap-1 whitespace-nowrap text-[12.5px] font-semibold text-slate-600 transition hover:text-[#3D5AF0]",children:["View all ",_.jsx(je,{name:"arrowRight",size:14})]})]})}),_.jsxs("div",{className:"min-h-0 flex-1 space-y-2 overflow-y-auto p-3",children:[S.length===0&&_.jsx("div",{className:"rounded-lg border border-dashed border-slate-300 p-4 text-center text-[12px] text-slate-400",children:"No recent violations"}),S.map(O=>_.jsxs("div",{className:"rounded-lg border border-slate-200 bg-white p-2.5",children:[_.jsxs("div",{className:"flex items-center justify-between",children:[_.jsxs("span",{className:"text-[11px] font-semibold text-slate-500",children:["#",O.id]}),_.jsx("span",{className:"font-mono text-[11px] text-slate-500",children:P(O.timestamp)})]}),_.jsx("div",{className:"mt-1.5 text-[12.5px] font-medium text-slate-800",children:O.message}),_.jsx("div",{className:"mt-0.5 font-mono text-[10.5px] text-slate-400",children:u.ip})]},O.id))]})]})]})]})})}function Lv({entries:t,index:e=0,tab:n="photo",onClose:i,onViewOnStream:r}){const[s,o]=Me.useState(e),[a,l]=Me.useState(n),c=t[s],d=En[c.cameraId],h=vr[c.useCaseId],f=D=>D.slice(11,19),m=D=>En[D].name,y=D=>new Date(D).toLocaleString("en-GB",{day:"2-digit",month:"short",year:"numeric",hour:"2-digit",minute:"2-digit",second:"2-digit"}),S=(()=>{const D=t.length,x=[];for(let E=1;E<=Math.min(5,D-1);E++){const U=(s+E)%D;x.push({inc:t[U],idx:U})}return x})(),p=()=>o(D=>(D-1+t.length)%t.length),u=()=>o(D=>(D+1)%t.length),v=D=>o(D),g=D=>{const x=h.color,E=D.bbox,U=E.x/100*640,B=E.y/100*400,O=E.w/100*640,$=E.h/100*400;return`<svg viewBox="0 0 640 400" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
      <rect width="640" height="400" fill="#d9e1ea"/>
      <rect y="296" width="640" height="104" fill="#c6d0dc"/>
      <line x1="0" y1="296" x2="640" y2="296" stroke="#b4c0ce" stroke-width="2"/>
      ${[90,300,500].map(Y=>{const N=Y>U&&Y<U+O?"#8894a6":"#9aa7b6";return`<circle cx="${Y}" cy="150" r="26" fill="${N}"/><rect x="${Y-30}" y="188" width="60" height="96" rx="16" fill="${N}"/>`}).join("")}
      <rect x="${U.toFixed(0)}" y="${B.toFixed(0)}" width="${O.toFixed(0)}" height="${$.toFixed(0)}" fill="none" stroke="${x}" stroke-width="3" rx="3"/>
      <rect x="${U.toFixed(0)}" y="${(B-18).toFixed(0)}" width="86" height="18" fill="${x}"/>
      <text x="${(U+5).toFixed(0)}" y="${(B-5).toFixed(0)}" font-family="monospace" font-size="12" fill="#fff" font-weight="bold">person</text>
      <text x="14" y="386" font-family="monospace" font-size="13" fill="#0f172a">${d.name} · ${f(D.timestamp)}</text>
    </svg>`},M=()=>`${d.name.replace(/\s+/g,"_")}_${c.timestamp.replace(/[:T]/g,"-")}`,P=(D,x)=>{const E=document.createElement("a");E.href=URL.createObjectURL(D),E.download=x,E.click(),URL.revokeObjectURL(E.href)},b=D=>{const x=URL.createObjectURL(new Blob([g(c)],{type:"image/svg+xml"})),E=new Image;E.onload=()=>{D(E),URL.revokeObjectURL(x)},E.src=x},T=()=>{b(D=>{const x=document.createElement("canvas");x.width=640,x.height=400,x.getContext("2d").drawImage(D,0,0,640,400),x.toBlob(E=>{E&&P(E,`${M()}.png`)})})},R=()=>{b(D=>{const x=document.createElement("canvas");x.width=640,x.height=400;const E=x.getContext("2d"),U=x;if(!U.captureStream||typeof MediaRecorder>"u"){E.drawImage(D,0,0,640,400),x.toBlob(Y=>{Y&&P(Y,`${M()}_frame.png`)});return}const B=new MediaRecorder(U.captureStream(12),{mimeType:"video/webm"}),O=[];B.ondataavailable=Y=>{Y.data.size&&O.push(Y.data)},B.onstop=()=>P(new Blob(O,{type:"video/webm"}),`${M()}_clip.webm`),B.start();let $=0;const j=setInterval(()=>{E.drawImage(D,0,0,640,400),E.fillStyle="rgba(255,255,255,0.5)",E.fillRect(0,$*26%400,640,2),$++},66);setTimeout(()=>{clearInterval(j),B.stop()},1600)})};return Me.useEffect(()=>{const D=document.body.style.overflow;return document.body.style.overflow="hidden",()=>{document.body.style.overflow=D}},[]),Me.useEffect(()=>{const D=x=>{x.key==="Escape"?i():x.key==="ArrowLeft"?p():x.key==="ArrowRight"&&u()};return document.addEventListener("keydown",D),()=>document.removeEventListener("keydown",D)},[t.length]),_.jsx("div",{className:"fixed inset-0 z-[60] flex items-center justify-center bg-slate-900/60 p-4",style:{fontFamily:"-apple-system,BlinkMacSystemFont,'SF Pro Display','Segoe UI',sans-serif"},onClick:()=>i(),children:_.jsxs("div",{className:"flex max-h-[92vh] w-[95vw] max-w-[1120px] flex-col overflow-hidden rounded-2xl bg-white shadow-2xl",onClick:D=>D.stopPropagation(),children:[_.jsxs("div",{className:"flex items-center justify-between gap-3 border-b border-slate-200 px-5 py-3",children:[_.jsxs("div",{className:"min-w-0",children:[_.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[_.jsx("span",{className:"text-[15px] font-semibold text-slate-900",children:d.name}),_.jsx("span",{className:"rounded-md bg-slate-100 px-1.5 py-0.5 font-mono text-[11px] text-slate-500",children:d.ip})]}),_.jsxs("div",{className:"text-[12px] text-slate-500",children:[d.zone," · Violation #",c.id," · Event ",s+1," of ",t.length]})]}),_.jsx("button",{type:"button",className:"flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-slate-500 hover:bg-slate-100",onClick:()=>i(),"aria-label":"Close",children:_.jsx(je,{name:"x",size:18})})]}),_.jsxs("div",{className:"grid min-h-0 flex-1 grid-cols-1 lg:grid-cols-[1fr_300px]",children:[_.jsxs("div",{className:"flex min-h-0 flex-col overflow-y-auto lg:border-r lg:border-slate-200",children:[_.jsx("div",{className:"px-5 pt-3",children:_.jsxs("div",{className:"inline-flex rounded-lg bg-slate-100 p-0.5",children:[_.jsxs("button",{type:"button",className:`flex items-center gap-1.5 rounded-md px-3.5 py-1.5 text-[13px] font-semibold transition ${a==="video"?"bg-white text-slate-900 shadow-sm":"text-slate-500"}`,onClick:()=>l("video"),children:[_.jsx(je,{name:"video",size:15})," Video"]}),_.jsxs("button",{type:"button",className:`flex items-center gap-1.5 rounded-md px-3.5 py-1.5 text-[13px] font-semibold transition ${a==="photo"?"bg-white text-slate-900 shadow-sm":"text-slate-500"}`,onClick:()=>l("photo"),children:[_.jsx(je,{name:"camera",size:15})," Photo"]})]})}),_.jsxs("div",{className:"relative mx-5 mt-3 overflow-hidden rounded-xl bg-[#0d1016]",style:{aspectRatio:"16/10"},children:[a==="photo"&&_.jsx("div",{className:"absolute inset-0",dangerouslySetInnerHTML:{__html:g(c)}}),a==="video"&&_.jsx(Fo,{scene:d.scene,seed:s+2,mode:"rewind",timeLabel:f(c.timestamp),violation:!0}),a==="photo"&&_.jsx("span",{className:"absolute left-3 top-3 rounded-md bg-black/70 px-2 py-0.5 font-mono text-[11px] text-white",children:"EVIDENCE STILL"}),_.jsx("button",{type:"button",className:"absolute left-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-black/45 text-white hover:bg-black/70",onClick:()=>p(),"aria-label":"Previous",children:_.jsx(je,{name:"chevronLeft",size:18})}),_.jsx("button",{type:"button",className:"absolute right-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-black/45 text-white hover:bg-black/70",onClick:()=>u(),"aria-label":"Next",children:_.jsx(je,{name:"chevronRight",size:18})})]}),_.jsxs("div",{className:"px-5 py-4",children:[_.jsx("span",{className:"rounded-full px-2 py-0.5 text-[11px] font-semibold",style:{backgroundColor:h.color+"22",color:h.color},children:h.name}),_.jsx("div",{className:"mt-2 text-[13.5px] font-medium text-slate-800",children:c.message}),_.jsx("div",{className:"font-mono text-[11.5px] text-slate-400",children:y(c.timestamp)}),_.jsxs("div",{className:"mt-4 flex flex-wrap items-center gap-2.5",children:[a==="photo"&&_.jsxs("button",{type:"button",onClick:()=>T(),className:"inline-flex items-center gap-2 rounded-xl bg-[#0f172a] px-4 py-2.5 text-[13.5px] font-semibold text-white hover:bg-[#1e293b]",children:[_.jsx(je,{name:"download",size:16})," Download image"]}),a==="video"&&_.jsxs("button",{type:"button",onClick:()=>R(),className:"inline-flex items-center gap-2 rounded-xl bg-[#0f172a] px-4 py-2.5 text-[13.5px] font-semibold text-white hover:bg-[#1e293b]",children:[_.jsx(je,{name:"download",size:16})," Download video"]}),a==="video"&&_.jsxs("button",{type:"button",onClick:()=>r(c),className:"inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-[13.5px] font-semibold text-slate-800 hover:bg-slate-50",children:[_.jsx(je,{name:"video",size:16})," View on stream video"]})]})]})]}),_.jsxs("div",{className:"flex min-h-0 flex-col bg-slate-50",children:[_.jsxs("div",{className:"border-b border-slate-200 px-4 py-3",children:[_.jsx("div",{className:"text-[13px] font-semibold text-slate-900",children:"Next 5 violations"}),_.jsx("div",{className:"text-[11.5px] text-slate-500",children:"in this log"})]}),_.jsx("div",{className:"min-h-0 flex-1 space-y-2 overflow-y-auto p-3",children:S.map(D=>_.jsxs("button",{type:"button",onClick:()=>v(D.idx),className:"block w-full rounded-lg border border-slate-200 bg-white p-2.5 text-left transition hover:border-[#3b82f6] hover:shadow-sm",children:[_.jsxs("div",{className:"flex items-center justify-between",children:[_.jsxs("span",{className:"text-[11px] font-semibold text-slate-500",children:["#",D.inc.id]}),_.jsx("span",{className:"font-mono text-[11px] text-slate-500",children:f(D.inc.timestamp)})]}),_.jsx("div",{className:"mt-1 truncate text-[12.5px] font-medium text-slate-800",children:m(D.inc.cameraId)}),_.jsx("div",{className:"truncate text-[11.5px] text-slate-500",children:D.inc.message})]},D.idx))})]})]})]})})}function iu(t){return t.slice(11,19)}function j2({useCaseId:t,onViewDashboard:e,onViewViolations:n}){const i=vr[t],{cameras:r,cameraList:s,latest:o,incidents:a,totalViolations:l,timeSince:c,lastAt:d}=Me.useMemo(()=>{const b=Rv(t),T=Bd(t);let R="—",D="";if(b.length){const x=b[0];R=`${2+x.id%26} min ago`,D=`at ${iu(x.timestamp)}`}else R="No violations",D="";return{cameras:T,cameraList:T.map(x=>x.camera),latest:b.slice(0,5),incidents:W2(t),totalViolations:b.length,timeSince:R,lastAt:D}},[t]),[h,f]=Me.useState(!1),[m,y]=Me.useState(0),[S,p]=Me.useState(null);Me.useEffect(()=>{f(!1),p(null)},[t]);const u=b=>{y(b),f(!0)},v=b=>{const T=s.findIndex(R=>R.id===b);u(T<0?0:T)},g=b=>{p({entries:a,index:b,tab:"photo"})},M=b=>{p(null),v(b.cameraId)},P=b=>{var T;return((T=s.find(R=>R.id===b))==null?void 0:T.scene)??"factory"};return _.jsxs(_.Fragment,{children:[_.jsx("div",{className:"h-full overflow-y-auto bg-[#F5F6F8]",children:_.jsxs("div",{className:"mx-auto max-w-[1240px] px-6 py-6",children:[_.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm",children:[_.jsxs("div",{className:"flex items-center gap-4",children:[_.jsx("span",{className:"flex h-12 w-12 items-center justify-center rounded-xl text-white",style:{backgroundColor:i.color},children:_.jsx(je,{name:i.icon,size:24})}),_.jsxs("div",{children:[_.jsx("h2",{className:"text-[22px] font-bold tracking-tight text-slate-900",children:i.name}),_.jsx("p",{className:"text-[13px] text-slate-500",children:i.description})]})]}),_.jsxs("div",{className:"flex items-center gap-5",children:[_.jsxs("div",{className:"text-right",children:[_.jsx("div",{className:"text-[11px] font-medium uppercase tracking-wide text-slate-400",children:"Time since last violation"}),_.jsx("div",{className:"text-[20px] font-bold",style:{color:i.color},children:c}),_.jsx("div",{className:"font-mono text-[11px] text-slate-400",children:d})]}),_.jsxs("button",{type:"button",onClick:()=>e(),className:"inline-flex items-center gap-2 rounded-xl bg-[#0F172A] px-5 py-3 text-[14px] font-bold text-white shadow-sm transition hover:bg-[#1E293B]",children:["View Dashboard",_.jsx(je,{name:"arrowRight",size:17})]})]})]}),_.jsxs("div",{className:"mt-6",children:[_.jsxs("div",{className:"mb-3 flex items-center gap-2",children:[_.jsx(je,{name:"triangleAlert",size:16}),_.jsx("h3",{className:"text-[15px] font-semibold text-slate-900",children:"Latest violation evidence"}),_.jsxs("span",{className:"text-[12.5px] text-slate-400",children:["· ",l," total on this use case"]}),_.jsxs("button",{type:"button",onClick:()=>n(void 0),className:"ml-auto inline-flex items-center gap-1 text-[13px] font-semibold text-slate-600 transition hover:text-[#3D5AF0]",children:["View all violations ",_.jsx(je,{name:"arrowRight",size:15})]})]}),_.jsx("div",{className:"grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5",children:o.map((b,T)=>_.jsxs("button",{type:"button",onClick:()=>g(T),className:"group overflow-hidden rounded-xl border border-slate-200 bg-white text-left shadow-sm transition hover:-translate-y-0.5 hover:shadow-md",children:[_.jsx("div",{className:"relative bg-black",style:{aspectRatio:"16/9"},children:_.jsx(Fo,{scene:P(b.cameraId),seed:T+2,mode:"rewind",timeLabel:iu(b.timestamp),violation:!0})}),_.jsxs("div",{className:"p-2.5",children:[_.jsx("div",{className:"truncate text-[12.5px] font-semibold text-slate-800",children:b.cameraName}),_.jsxs("div",{className:"mt-0.5 flex items-center justify-between",children:[_.jsx("span",{className:"font-mono text-[10.5px] text-slate-400",children:b.ip}),_.jsx("span",{className:"font-mono text-[10.5px] text-slate-500",children:iu(b.timestamp)})]})]})]},b.id??T))})]}),_.jsxs("div",{className:"mt-8",children:[_.jsxs("div",{className:"mb-3 flex items-center gap-2",children:[_.jsx(je,{name:"video",size:16}),_.jsx("h3",{className:"text-[15px] font-semibold text-slate-900",children:"Cameras"}),_.jsxs("span",{className:"text-[12.5px] text-slate-400",children:["· ",r.length," watching this use case"]})]}),_.jsx("div",{className:"grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3",children:r.map((b,T)=>_.jsxs("button",{type:"button",onClick:()=>u(T),className:"group overflow-hidden rounded-xl border border-slate-200 bg-white text-left shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg",children:[_.jsxs("div",{className:"relative bg-black",style:{aspectRatio:"16/9"},children:[_.jsx(Fo,{scene:b.camera.scene,seed:T+1,violation:T%3===0}),_.jsxs("span",{className:"absolute right-2 top-2 rounded-full bg-black/55 px-2 py-0.5 text-[10px] font-semibold text-white",children:[b.count," events"]})]}),_.jsxs("div",{className:"flex items-center justify-between p-3",children:[_.jsxs("div",{className:"min-w-0",children:[_.jsx("div",{className:"truncate text-[13.5px] font-semibold text-slate-900",children:b.camera.name}),_.jsx("div",{className:"truncate text-[12px] text-slate-500",children:b.camera.zone})]}),_.jsxs("div",{className:"ml-2 shrink-0 text-right",children:[_.jsx("div",{className:"font-mono text-[11.5px] text-slate-600",children:b.camera.ip}),_.jsxs("div",{className:"mt-0.5 inline-flex items-center gap-1 text-[10.5px] font-medium text-[#16A34A]",children:[_.jsx("span",{className:"inline-block h-1.5 w-1.5 rounded-full bg-[#16A34A]"})," live"]})]})]})]},b.camera.id??T))})]})]})}),h&&_.jsx(Pv,{cameras:s,useCaseId:t,index:m,onClose:()=>f(!1),onViewViolations:b=>n(b)}),S&&_.jsx(Lv,{entries:S.entries,index:S.index,tab:S.tab,onClose:()=>p(null),onViewOnStream:b=>M(b)})]})}function X2({label:t,color:e,textColor:n="#FFFFFF"}){return _.jsx("span",{className:"inline-flex items-center whitespace-nowrap rounded-full px-2.5 py-0.5 text-[11px] font-semibold",style:{backgroundColor:e,color:n},children:t})}const $2={lab:_.jsxs("g",{children:[_.jsx("rect",{width:"100",height:"75",fill:"#E7EDF3"}),_.jsx("rect",{x:"6",y:"40",width:"34",height:"20",rx:"2",fill:"#C7D2DE"}),_.jsx("rect",{x:"60",y:"40",width:"34",height:"20",rx:"2",fill:"#C7D2DE"}),_.jsx("rect",{x:"0",y:"60",width:"100",height:"15",fill:"#B8C4D2"}),_.jsx("circle",{cx:"23",cy:"36",r:"5",fill:"#94A3B8"}),_.jsx("circle",{cx:"77",cy:"36",r:"5",fill:"#94A3B8"})]}),cooling_tower:_.jsxs("g",{children:[_.jsx("rect",{width:"100",height:"75",fill:"#DBE4EC"}),_.jsx("rect",{x:"0",y:"55",width:"100",height:"20",fill:"#9AA8B5"}),_.jsx("rect",{x:"10",y:"18",width:"26",height:"40",fill:"#B6C2CE"}),_.jsx("rect",{x:"64",y:"22",width:"24",height:"36",fill:"#B6C2CE"}),_.jsx("rect",{x:"30",y:"50",width:"40",height:"6",fill:"#EF4444",opacity:"0.8"}),_.jsx("circle",{cx:"50",cy:"44",r:"4",fill:"#64748B"})]}),factory:_.jsxs("g",{children:[_.jsx("rect",{width:"100",height:"75",fill:"#E4E9EF"}),_.jsx("rect",{x:"0",y:"58",width:"100",height:"17",fill:"#AEB9C6"}),_.jsx("rect",{x:"8",y:"30",width:"84",height:"6",fill:"#9AA8B5"}),_.jsx("circle",{cx:"30",cy:"50",r:"5",fill:"#64748B"}),_.jsx("circle",{cx:"58",cy:"50",r:"5",fill:"#64748B"}),_.jsx("rect",{x:"74",y:"38",width:"16",height:"20",fill:"#C7D2DE"})]}),road:_.jsxs("g",{children:[_.jsx("rect",{width:"100",height:"75",fill:"#DDE3EA"}),_.jsx("rect",{x:"0",y:"50",width:"100",height:"25",fill:"#7E8B99"}),_.jsx("rect",{x:"20",y:"61",width:"12",height:"2",fill:"#FACC15"}),_.jsx("rect",{x:"46",y:"61",width:"12",height:"2",fill:"#FACC15"}),_.jsx("rect",{x:"72",y:"61",width:"12",height:"2",fill:"#FACC15"}),_.jsx("rect",{x:"40",y:"40",width:"22",height:"12",rx:"2",fill:"#475569"})]}),loading_bay:_.jsxs("g",{children:[_.jsx("rect",{width:"100",height:"75",fill:"#E2E8F0"}),_.jsx("rect",{x:"0",y:"55",width:"100",height:"20",fill:"#A3AEBC"}),_.jsx("rect",{x:"10",y:"20",width:"30",height:"35",fill:"#C7D2DE"}),_.jsx("rect",{x:"55",y:"26",width:"35",height:"29",fill:"#B6C2CE"}),_.jsx("rect",{x:"55",y:"40",width:"35",height:"3",fill:"#94A3B8"})]}),gate:_.jsxs("g",{children:[_.jsx("rect",{width:"100",height:"75",fill:"#DCE3EB"}),_.jsx("rect",{x:"0",y:"58",width:"100",height:"17",fill:"#9AA8B5"}),_.jsx("rect",{x:"14",y:"22",width:"6",height:"36",fill:"#64748B"}),_.jsx("rect",{x:"80",y:"22",width:"6",height:"36",fill:"#64748B"}),_.jsx("rect",{x:"20",y:"34",width:"60",height:"4",fill:"#EF4444"}),_.jsx("circle",{cx:"50",cy:"48",r:"4",fill:"#475569"})]})};function Tm({scene:t,bbox:e,color:n,showPlay:i=!1,width:r=80,height:s=60}){return _.jsxs("svg",{width:r,height:s,viewBox:"0 0 100 75",className:"rounded-[6px] ring-1 ring-black/5",preserveAspectRatio:"xMidYMid slice",children:[$2[t]??_.jsx("rect",{width:"100",height:"75",fill:"#CBD5E1"}),_.jsx("rect",{x:e.x,y:e.y*.75,width:e.w,height:e.h*.75,fill:"none",stroke:n,strokeWidth:"1.5"}),_.jsx("rect",{x:e.x,y:e.y*.75,width:e.w,height:e.h*.75,fill:n,opacity:"0.18"}),i&&_.jsxs("g",{children:[_.jsx("circle",{cx:"50",cy:"37",r:"11",fill:"#0F172A",opacity:"0.55"}),_.jsx("path",{d:"M46 31 L58 37 L46 43 Z",fill:"#FFFFFF"})]})]})}const ko=30,Y2=20260503,q2=770451,ru={y:2026,m:5,d:3},K2=1617,Z2=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];function su(t){return t<10?`0${t}`:`${t}`}function Q2(){const t=eh(q2),e=[],n=[],i=[];for(let r=0;r<ko;r++){const s=new Date(ru.y,ru.m,ru.d-(ko-1-r));e.push(`${s.getFullYear()}-${su(s.getMonth()+1)}-${su(s.getDate())}`),n.push(`${su(s.getDate())} ${Z2[s.getMonth()]}`);const o=s.getDay(),a=o===0||o===6?.55:1,l=.78+t()*.44;i.push(a*l)}return{keys:e,labels:n,factors:i}}const nh=Q2(),Nv=nh.keys,ih=nh.labels;let ou=null;function J2(){if(ou)return ou;const t=eh(Y2),e=[];let n=1;for(let i=0;i<ko;i++){const r=Math.round(K2*nh.factors[i]);for(let s=0;s<r;s++)e.push(bv(n++,Nv[i],t))}return ou=e,e}const rh=new Map(Nv.map((t,e)=>[t,e]));function sh(t){return t.slice(0,10)}function eT(t){const e=new Map;for(const n of Ps)e.set(n.id,new Array(ko).fill(0));for(const n of t){const i=rh.get(sh(n.timestamp));i!==void 0&&e.get(n.cameraId)[i]++}return Ps.map(n=>({id:n.id,name:n.name,cells:e.get(n.id)})).sort((n,i)=>Am(i.cells)-Am(n.cells))}function tT(t){const e=ih.map(n=>({label:n,High:0,Medium:0,Low:0}));for(const n of t){const i=rh.get(sh(n.timestamp));i!==void 0&&e[i][n.severity]++}return e}function nT(t){const e=new Array(ko).fill(0);for(const r of t){const s=rh.get(sh(r.timestamp));s!==void 0&&e[s]++}let n=-1,i=-1;return e.forEach((r,s)=>{r>i&&(i=r,n=s)}),n<0||i<=0?null:{label:ih[n],count:i}}function Am(t){return t.reduce((e,n)=>e+n,0)}function bm(t,e){return t.filter(n=>(e.useCase==="all"||n.useCaseId===e.useCase)&&(e.severity==="all"||n.severity===e.severity))}function iT(t){const e=new Map,n=new Array(24).fill(0);let i=0;for(const o of t)e.set(o.cameraId,(e.get(o.cameraId)??0)+1),n[new Date(o.timestamp).getHours()]++,o.resolved||i++;let r=null;for(const[o,a]of e)(!r||a>r.count)&&(r={name:En[o].name,count:a});let s=null;return n.forEach((o,a)=>{(!s||o>s.count)&&(s={hour:a,count:o})}),{total:t.length,open:i,worstCamera:r,peakHour:s}}function rT(t){const e=new Map;for(const i of t)e.set(i.useCaseId,(e.get(i.useCaseId)??0)+1);const n=t.length||1;return br.map(i=>{const r=e.get(i.id)??0;return{id:i.id,name:i.name,color:i.color,count:r,pct:r/n*100}}).filter(i=>i.count>0).sort((i,r)=>r.count-i.count)}function sT(t){const e=Array.from({length:24},(n,i)=>({label:`${i<10?"0":""}${i}:00`,High:0,Medium:0,Low:0}));for(const n of t)e[new Date(n.timestamp).getHours()][n.severity]++;return e}function oT(t){const e=new Map;for(const n of Ps)e.set(n.id,new Array(24).fill(0));for(const n of t)e.get(n.cameraId)[new Date(n.timestamp).getHours()]++;return Ps.map(n=>({id:n.id,name:n.name,cells:e.get(n.id)})).sort((n,i)=>Cm(i.cells)-Cm(n.cells))}function Cm(t){return t.reduce((e,n)=>e+n,0)}function aT(t,e,n){const i=t.length,r=Math.max(1,Math.ceil(i/n)),s=Math.min(Math.max(1,e),r),o=(s-1)*n;return{rows:t.slice(o,o+n),page:s,pageCount:r,total:i}}const Zs=30,lT=t=>`${t<10?"0":""}${t}:00`,cT=Array.from({length:24},(t,e)=>e),uT={today:1,yesterday:.78,last7:5.4},dT=[{key:"today",label:"Today"},{key:"yesterday",label:"Yesterday"},{key:"last7",label:"Last 7 days"}];function fT({initialUseCase:t="all",initialCamera:e=null,focusList:n=!1}){var Z,_e;const i=Me.useMemo(()=>Cv(wv,Tv),[]),r=Me.useMemo(()=>J2(),[]),[s,o]=Me.useState(t),[a,l]=Me.useState("today"),[c,d]=Me.useState("hourly"),[h,f]=Me.useState(e),[m,y]=Me.useState(1),[S,p]=Me.useState(!1),[u,v]=Me.useState(!1),[g,M]=Me.useState(null),[P,b]=Me.useState(null),T=h?((Z=En[h])==null?void 0:Z.name)??"":"";Me.useEffect(()=>{if(n){const H=setTimeout(()=>{var J;return(J=document.getElementById("non-compliance-list"))==null?void 0:J.scrollIntoView({behavior:"smooth",block:"start"})},80);return()=>clearTimeout(H)}},[n]),Me.useEffect(()=>{y(1)},[s,a,c,h]);const R=Me.useMemo(()=>{if(c==="daily")return r;const H=uT[a];if(H===1)return i;if(H<1)return i.slice(0,Math.round(i.length*H));const J=Math.ceil(H),Ee=[];for(let te=0;te<J;te++)for(const ce of i)Ee.push({...ce,id:ce.id+te*i.length});return Ee.slice(0,Math.round(i.length*H))},[c,a,i,r]),D=Me.useMemo(()=>bm(R,{useCase:s,severity:"all"}),[R,s]),x=Me.useMemo(()=>iT(D),[D]);Me.useMemo(()=>rT(D)[0]??null,[D]);const E=Me.useMemo(()=>c==="daily"?nT(D):x.peakHour?{label:lT(x.peakHour.hour),count:x.peakHour.count}:null,[D,c,x]),U=Me.useMemo(()=>{let H,J,Ee;if(c==="daily"){const L=bm(r,{useCase:s,severity:"all"});H=eT(L),J=tT(L),Ee=ih.map((ue,X)=>X%5===0?ue:"")}else H=oT(D),J=sT(D),Ee=cT.map(L=>L%3===0?L<10?"0"+L:""+L:"");const te=H.map(L=>({name:L.name,cells:L.cells,total:L.cells.reduce((ue,X)=>ue+X,0)})),ce=te.filter(L=>L.total>0),be=te.filter(L=>L.total===0).map(L=>L.name),ye=J.map(L=>L.High+L.Medium+L.Low),me=Math.max(1,...ye),He=Math.max(1,...ce.flatMap(L=>L.cells)),Ue=ye.reduce((L,ue)=>L+ue,0),tt=ye.length;return{matActive:ce,matIdle:be,matColTotals:ye,matMaxCol:me,matMaxCell:He,matGrand:Ue,matCols:tt,matColsArr:Array.from({length:tt}),matLabels:Ee}},[D,c,r,s]);Me.useEffect(()=>{v(!1)},[U]);const B=Me.useMemo(()=>{const H=h?D.filter(J=>J.cameraId===h):[...D];return H.sort((J,Ee)=>S?J.timestamp.localeCompare(Ee.timestamp):Ee.timestamp.localeCompare(J.timestamp)),H},[D,h,S]),O=aT(B,m,Zs),$=O.rows,j=O.pageCount,Y=O.total,N=O.page,K=x.total,ee=Math.round(K*.146),ae=K-ee,we=Math.max(K,Math.round(K*16.2)),Oe=we?(we-K)/we*100:100,q=Oe>=92.4,re=Math.abs(Oe-92.4).toFixed(1),fe=`${(we-K).toLocaleString()} of ${we.toLocaleString()} observations compliant`,de=c==="daily"?(E==null?void 0:E.label)??"—":x.peakHour==null?"—":`${String(x.peakHour.hour).padStart(2,"0")}:00–${String((x.peakHour.hour+1)%24).padStart(2,"0")}:00`,De=(E==null?void 0:E.count)??0,Re=K/(c==="daily"?30:24),Ve=`${De.toLocaleString()} violations · ${(Re?De/Re:0).toFixed(1)}× the ${c==="daily"?"daily":"hourly"} average`,Ze=((_e=x.worstCamera)==null?void 0:_e.name)??"—",Ge=x.worstCamera?`${x.worstCamera.count} violations · ${(x.worstCamera.count/(K||1)*100).toFixed(0)}% of all events`:"No data",I=`${Y===0?0:(N-1)*Zs+1} – ${Math.min(N*Zs,Y)} of ${Y}`,Wt=H=>H/U.matMaxCol*44,Be=H=>{if(H<=0)return"zero";const J=H/U.matMaxCell;return J<=.16?"b1":J<=.33?"b2":J<=.5?"b3":J<=.68?"b4":J<=.85?"b5":"b6"},We=H=>H>0&&H/U.matMaxCell>.5,Pe=`152px repeat(${U.matCols}, minmax(22px,1fr)) 56px`,rt=208+U.matCols*26,Ce=H=>H.toLocaleString("en-US"),C=H=>{const J=new Date(H),Ee=J.toLocaleDateString("en-GB",{day:"2-digit",month:"short",year:"numeric"}),te=J.toLocaleTimeString("en-US",{hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!0});return`${Ee} @ ${te.toLowerCase()}`},w=(H,J)=>{const Ee=Math.max(0,B.findIndex(te=>te.id===H.id));M({entries:B,index:Ee,tab:J})},V=H=>{const J=Bd(H.useCaseId).map(te=>te.camera);let Ee=J.findIndex(te=>te.id===H.cameraId);Ee<0&&(J.unshift(En[H.cameraId]),Ee=0),M(null),b({cameras:J,useCaseId:H.useCaseId,index:Ee})},Q=H=>{b(null),f(H),setTimeout(()=>{var J;return(J=document.getElementById("non-compliance-list"))==null?void 0:J.scrollIntoView({behavior:"smooth",block:"start"})},60)},ie=()=>{if(D.length===0)return;const H=new Map;for(const ye of D)H.set(ye.cameraId,(H.get(ye.cameraId)??0)+1);let J=D[0].cameraId,Ee=0;for(const[ye,me]of H)me>Ee&&(Ee=me,J=ye);const te=s==="all"?D[0].useCaseId:s,ce=Bd(te).map(ye=>ye.camera);let be=ce.findIndex(ye=>ye.id===J);be<0&&(ce.unshift(En[J]),be=0),b({cameras:ce,useCaseId:te,index:be})};return _.jsxs("div",{className:"dash bg-[#eef2f7] px-6 py-6",children:[_.jsxs("div",{className:"mx-auto max-w-[1400px]",children:[_.jsxs("div",{id:"dash-top",className:"sticky top-0 z-20 mb-5 flex flex-wrap items-center gap-x-6 gap-y-3 rounded-[14px] border border-[#e6ebf2] bg-white px-4 py-3 shadow-[0_1px_2px_rgba(15,23,42,.05)]",children:[_.jsxs("div",{className:"flex items-center gap-2.5",children:[_.jsx("span",{className:"text-[12.5px] font-semibold text-[#94a3b8]",children:"Use case"}),_.jsxs("select",{className:"min-w-[200px] rounded-[9px] border border-[#d8e0ea] bg-white px-3 py-2 text-[13.5px] font-semibold text-[#0f172a]",value:s,onChange:H=>o(H.target.value),children:[_.jsx("option",{value:"all",children:"All use cases"}),br.map(H=>_.jsx("option",{value:H.id,children:H.name},H.id))]})]}),_.jsxs("div",{className:"flex items-center gap-2.5",children:[_.jsx("span",{className:"text-[12.5px] font-semibold text-[#94a3b8]",children:"Period"}),_.jsx("div",{className:"inline-flex gap-0.5 rounded-[9px] border border-[#e6ebf2] bg-[#f1f5f9] p-[3px]",children:dT.map(H=>_.jsx("button",{type:"button",className:`rounded-[7px] px-3.5 py-1.5 text-[13px] font-semibold transition ${a===H.key?"bg-[#0f172a] text-white shadow-sm":"text-[#475569]"}`,onClick:()=>l(H.key),children:H.label},H.key))})]}),_.jsxs("div",{className:"flex items-center gap-2.5",children:[_.jsx("span",{className:"text-[12.5px] font-semibold text-[#94a3b8]",children:"Granularity"}),_.jsxs("div",{className:"inline-flex gap-0.5 rounded-[9px] border border-[#e6ebf2] bg-[#f1f5f9] p-[3px]",children:[_.jsx("button",{type:"button",className:`rounded-[7px] px-3.5 py-1.5 text-[13px] font-semibold transition ${c==="hourly"?"bg-[#0f172a] text-white shadow-sm":"text-[#475569]"}`,onClick:()=>d("hourly"),children:"Hourly"}),_.jsx("button",{type:"button",className:`rounded-[7px] px-3.5 py-1.5 text-[13px] font-semibold transition ${c==="daily"?"bg-[#0f172a] text-white shadow-sm":"text-[#475569]"}`,onClick:()=>d("daily"),children:"Daily"})]})]}),_.jsxs("button",{type:"button",className:"ml-auto inline-flex items-center gap-2 rounded-[9px] bg-[#0f172a] px-4 py-2.5 text-[13.5px] font-bold text-white disabled:opacity-40",disabled:D.length===0,onClick:ie,children:[_.jsx(je,{name:"camera",size:16})," Camera Analysis"]})]}),_.jsx("div",{className:"mb-2.5 ml-0.5 text-[11px] font-extrabold uppercase tracking-[0.09em] text-[#94a3b8]",children:"At a glance"}),_.jsxs("div",{className:"mb-7 grid grid-cols-2 gap-4 lg:grid-cols-4",children:[_.jsxs("div",{className:"relative overflow-hidden rounded-[14px] border border-[#e6ebf2] bg-white p-[18px] shadow-[0_1px_2px_rgba(15,23,42,.05)]",children:[_.jsx("span",{className:"absolute inset-y-0 left-0 w-1 rounded-l bg-[#16a34a]"}),_.jsxs("div",{className:"flex items-start justify-between",children:[_.jsx("span",{className:"text-[12.5px] font-bold text-[#475569]",children:"Compliance rate"}),_.jsx("span",{className:"flex h-[34px] w-[34px] items-center justify-center rounded-[10px] bg-[#dcfce7] text-[#16a34a]",children:_.jsx(je,{name:"shield",size:18})})]}),_.jsxs("div",{className:"mt-2.5 text-[30px] font-extrabold leading-none tracking-tight tabular-nums",children:[Oe.toFixed(1),"%"]}),_.jsx("div",{className:"mt-1 text-[12.5px] tabular-nums text-[#94a3b8]",children:fe}),_.jsxs("div",{className:`mt-2.5 inline-flex items-center gap-1 text-[12.5px] font-bold ${q?"text-[#16a34a]":"text-[#dc2626]"}`,children:[q?"▲":"▼"," ",re," pts vs yesterday"]})]}),_.jsxs("div",{className:"relative overflow-hidden rounded-[14px] border border-[#e6ebf2] bg-white p-[18px] shadow-[0_1px_2px_rgba(15,23,42,.05)]",children:[_.jsx("span",{className:"absolute inset-y-0 left-0 w-1 rounded-l bg-[#dc2626]"}),_.jsxs("div",{className:"flex items-start justify-between",children:[_.jsx("span",{className:"text-[12.5px] font-bold text-[#475569]",children:"Open violations"}),_.jsx("span",{className:"flex h-[34px] w-[34px] items-center justify-center rounded-[10px] bg-[#fee2e2] text-[#dc2626]",children:_.jsx(je,{name:"triangleAlert",size:18})})]}),_.jsx("div",{className:"mt-2.5 text-[30px] font-extrabold leading-none tracking-tight tabular-nums",children:Ce(ee)}),_.jsxs("div",{className:"mt-1 text-[12.5px] tabular-nums text-[#94a3b8]",children:["of ",Ce(K)," today · ",Ce(ae)," reviewed & closed"]}),_.jsxs("span",{className:"mt-2.5 inline-block rounded-full bg-[#fee2e2] px-2 py-0.5 text-[11px] font-bold tabular-nums text-[#dc2626]",children:[Ce(ee)," awaiting review"]})]}),_.jsxs("div",{className:"relative overflow-hidden rounded-[14px] border border-[#e6ebf2] bg-white p-[18px] shadow-[0_1px_2px_rgba(15,23,42,.05)]",children:[_.jsx("span",{className:"absolute inset-y-0 left-0 w-1 rounded-l bg-[#3b82f6]"}),_.jsxs("div",{className:"flex items-start justify-between",children:[_.jsx("span",{className:"text-[12.5px] font-bold text-[#475569]",children:"Peak risk window"}),_.jsx("span",{className:"flex h-[34px] w-[34px] items-center justify-center rounded-[10px] bg-[#dbeafe] text-[#2563eb]",children:_.jsx(je,{name:"clock",size:18})})]}),_.jsx("div",{className:"mt-2.5 text-[24px] font-extrabold leading-none tracking-tight tabular-nums",children:de}),_.jsx("div",{className:"mt-1 text-[12.5px] tabular-nums text-[#94a3b8]",children:Ve}),_.jsxs("div",{className:"mt-2.5 text-[12.5px] font-semibold text-[#475569]",children:["Highest exposure of the ",c==="daily"?"period":"day"]})]}),_.jsxs("div",{className:"relative overflow-hidden rounded-[14px] border border-[#e6ebf2] bg-white p-[18px] shadow-[0_1px_2px_rgba(15,23,42,.05)]",children:[_.jsx("span",{className:"absolute inset-y-0 left-0 w-1 rounded-l bg-[#f59e0b]"}),_.jsxs("div",{className:"flex items-start justify-between",children:[_.jsx("span",{className:"text-[12.5px] font-bold text-[#475569]",children:"Top offending zone"}),_.jsx("span",{className:"flex h-[34px] w-[34px] items-center justify-center rounded-[10px] bg-[#fef3c7] text-[#b45309]",children:_.jsx(je,{name:"pin",size:18})})]}),_.jsx("div",{className:"mt-2.5 truncate text-[22px] font-extrabold leading-tight tracking-tight",children:Ze}),_.jsx("div",{className:"mt-1 text-[12.5px] tabular-nums text-[#94a3b8]",children:Ge})]})]}),_.jsx("div",{className:"mb-2.5 ml-0.5 text-[11px] font-extrabold uppercase tracking-[0.09em] text-[#94a3b8]",children:"Where & when"}),_.jsxs("div",{className:"mb-7 rounded-[14px] border border-[#e6ebf2] bg-white p-5 shadow-[0_1px_2px_rgba(15,23,42,.05)]",children:[_.jsx("div",{className:"mb-4 flex items-start justify-between gap-4",children:_.jsxs("div",{children:[_.jsxs("div",{className:"flex items-center gap-2 text-[16px] font-extrabold tracking-tight text-[#0f172a]",children:[_.jsx(je,{name:"grid",size:16})," Violation density — camera × ",c==="daily"?"day":"hour"]}),_.jsxs("div",{className:"mt-0.5 text-[12.5px] text-[#94a3b8]",children:["Bar height is total violations that ",c==="daily"?"day":"hour","; the grid shows which camera is driving it."]})]})}),_.jsx("div",{className:"matrix-scroll",children:_.jsxs("div",{className:"matrix",style:{gridTemplateColumns:Pe,minWidth:rt},children:[_.jsx("div",{}),U.matColTotals.map((H,J)=>_.jsx("div",{className:"sevcell",title:`${H} violations`,children:_.jsx("span",{style:{height:Wt(H),background:"#94a3b8"}})},`c${J}`)),_.jsx("div",{className:"m-total-head",children:Ce(U.matGrand)}),_.jsx("div",{}),U.matLabels.map((H,J)=>_.jsx("div",{className:"hour-axis",children:H},`l${J}`)),_.jsx("div",{className:"hour-axis",style:{justifyContent:"center",fontWeight:800},children:"Σ"}),U.matActive.map((H,J)=>_.jsxs("div",{style:{display:"contents"},children:[_.jsxs("div",{className:"cam-label",children:[H.name,_.jsx("small",{children:J===0?"top offender":"active"})]}),H.cells.map((Ee,te)=>_.jsx("div",{className:`cell ${Be(Ee)}`,children:We(Ee)&&_.jsx("span",{className:"cell-v",children:Ee})},te)),_.jsx("div",{className:"rowtot",children:H.total})]},`r${J}`)),u&&U.matIdle.map((H,J)=>_.jsxs("div",{style:{display:"contents"},children:[_.jsxs("div",{className:"cam-label idle",children:[H,_.jsx("small",{children:"no events"})]}),U.matColsArr.map((Ee,te)=>_.jsx("div",{className:"cell zero"},te)),_.jsx("div",{className:"rowtot idle",children:"0"})]},`i${J}`))]})}),_.jsxs("div",{className:"mt-4 flex flex-wrap items-center justify-between gap-3",children:[_.jsxs("div",{className:"text-[12px] font-semibold text-[#94a3b8]",children:["Bar height = violations per ",c==="daily"?"day":"hour"]}),U.matIdle.length>0&&_.jsx("button",{type:"button",className:"text-[12.5px] font-bold text-[#2563eb]",onClick:()=>v(H=>!H),children:u?"Hide idle cameras ⌃":`Show all cameras (${U.matIdle.length} idle) ⌄`}),_.jsxs("div",{className:"flex items-center gap-2 text-[11.5px] font-semibold text-[#94a3b8]",children:["Fewer",_.jsxs("span",{className:"flex gap-[3px]",children:[_.jsx("span",{className:"h-3 w-5 rounded-sm",style:{background:"var(--h1)"}}),_.jsx("span",{className:"h-3 w-5 rounded-sm",style:{background:"var(--h2)"}}),_.jsx("span",{className:"h-3 w-5 rounded-sm",style:{background:"var(--h3)"}}),_.jsx("span",{className:"h-3 w-5 rounded-sm",style:{background:"var(--h4)"}}),_.jsx("span",{className:"h-3 w-5 rounded-sm",style:{background:"var(--h5)"}}),_.jsx("span",{className:"h-3 w-5 rounded-sm",style:{background:"var(--h6)"}})]}),"More"]})]})]}),_.jsx("div",{className:"mb-2.5 ml-0.5 text-[11px] font-extrabold uppercase tracking-[0.09em] text-[#94a3b8]",children:"Proof"}),_.jsxs("div",{id:"non-compliance-list",className:"scroll-mt-24 rounded-[14px] border border-[#e6ebf2] bg-white p-5 shadow-[0_1px_2px_rgba(15,23,42,.05)]",children:[_.jsxs("div",{className:"flex items-center justify-between gap-3",children:[_.jsxs("div",{className:"flex items-center gap-2 text-[16px] font-extrabold tracking-tight text-[#0f172a]",children:[_.jsx(je,{name:"camera",size:16})," Evidence log"]}),h&&_.jsxs("span",{className:"inline-flex items-center gap-1.5 rounded-full bg-[#eef2ff] px-2.5 py-1 text-[12px] font-medium text-[#3730a3]",children:["Camera: ",T,_.jsx("button",{type:"button",className:"text-[#6366f1] hover:text-[#3730a3]",onClick:()=>f(null),"aria-label":"Clear camera filter",children:"✕"})]})]}),_.jsxs("div",{className:"mt-3 flex items-center gap-3",children:[_.jsxs("div",{className:"relative flex-1",children:[_.jsx("span",{className:"pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-[#94a3b8]",children:_.jsx(je,{name:"search",size:16})}),_.jsx("input",{className:"w-full rounded-[9px] border border-[#d8e0ea] bg-[#f8fafc] py-2 pl-9 pr-3 text-[13px] text-[#0f172a] placeholder:text-[#94a3b8]",placeholder:"Search evidence by camera name",value:T,readOnly:!0})]}),_.jsxs("button",{type:"button",className:"inline-flex items-center gap-2 rounded-[9px] border border-[#d8e0ea] bg-white px-4 py-2 text-[13px] font-semibold text-[#0f172a]",children:[_.jsx(je,{name:"download",size:15})," Export"]})]}),Y===0&&_.jsx("div",{className:"py-10 text-center text-[13px] text-[#64748b]",children:"No evidence matching this filter"}),Y>0&&_.jsxs("table",{className:"mt-3 w-full text-left",children:[_.jsx("thead",{className:"border-b border-[#e6ebf2] text-[12px] text-[#94a3b8]",children:_.jsxs("tr",{children:[_.jsx("th",{className:"py-2 pr-2 font-semibold",children:"Sr No"}),_.jsx("th",{className:"py-2 pr-2 font-semibold",children:"Camera Name"}),_.jsx("th",{className:"py-2 pr-2 font-semibold",children:"Use Case"}),_.jsx("th",{className:"py-2 pr-2 font-semibold",children:"Message"}),_.jsxs("th",{className:"cursor-pointer select-none py-2 pr-2 font-semibold",onClick:()=>p(H=>!H),children:["Time ",S?"↑":"↓"]}),_.jsx("th",{className:"py-2 pr-2 font-semibold",children:"Image"}),_.jsx("th",{className:"py-2 pr-2 font-semibold",children:"Video"})]})}),_.jsx("tbody",{className:"text-[13px] text-[#0f172a]",children:$.map((H,J)=>_.jsxs("tr",{className:"border-b border-[#f1f5f9] hover:bg-[#f8fafc]",children:[_.jsx("td",{className:"py-2 pr-2 tabular-nums text-[#64748b]",children:(N-1)*Zs+J+1}),_.jsx("td",{className:"py-2 pr-2 font-medium",children:En[H.cameraId].name}),_.jsx("td",{className:"py-2 pr-2",children:_.jsx(X2,{label:vr[H.useCaseId].name,color:vr[H.useCaseId].color})}),_.jsx("td",{className:"py-2 pr-2 text-[#475569]",children:H.message}),_.jsx("td",{className:"py-2 pr-2 whitespace-nowrap text-[#475569]",children:C(H.timestamp)}),_.jsx("td",{className:"py-2 pr-2",children:_.jsx("button",{type:"button",className:"block overflow-hidden rounded-md ring-1 ring-transparent transition hover:ring-2 hover:ring-[#3b82f6]",onClick:()=>w(H,"photo"),title:"View photo evidence",children:_.jsx(Tm,{scene:En[H.cameraId].scene,bbox:H.bbox,color:vr[H.useCaseId].color,width:72,height:54})})}),_.jsx("td",{className:"py-2 pr-2",children:_.jsx("button",{type:"button",className:"block overflow-hidden rounded-md ring-1 ring-transparent transition hover:ring-2 hover:ring-[#3b82f6]",onClick:()=>w(H,"video"),title:"View video evidence",children:_.jsx(Tm,{scene:En[H.cameraId].scene,bbox:H.bbox,color:vr[H.useCaseId].color,showPlay:!0,width:72,height:54})})})]},H.id))})]}),Y>0&&_.jsxs("div",{className:"mt-3 flex items-center justify-end gap-4 text-[12px] text-[#64748b]",children:[_.jsxs("span",{children:["Items per page: ",Zs]}),_.jsx("span",{children:I}),_.jsxs("div",{className:"flex items-center gap-1",children:[_.jsx("button",{type:"button",className:"rounded px-2 py-1 hover:bg-[#f1f5f9] disabled:opacity-40",disabled:N===1,onClick:()=>y(1),children:"«"}),_.jsx("button",{type:"button",className:"rounded px-2 py-1 hover:bg-[#f1f5f9] disabled:opacity-40",disabled:N===1,onClick:()=>y(N-1),children:"‹"}),_.jsxs("span",{className:"tabular-nums",children:[N," / ",j]}),_.jsx("button",{type:"button",className:"rounded px-2 py-1 hover:bg-[#f1f5f9] disabled:opacity-40",disabled:N===j,onClick:()=>y(N+1),children:"›"}),_.jsx("button",{type:"button",className:"rounded px-2 py-1 hover:bg-[#f1f5f9] disabled:opacity-40",disabled:N===j,onClick:()=>y(j),children:"»"})]})]})]})]}),g&&_.jsx(Lv,{entries:g.entries,index:g.index,tab:g.tab,onClose:()=>M(null),onViewOnStream:V}),P&&_.jsx(Pv,{cameras:P.cameras,useCaseId:P.useCaseId,index:P.index,onClose:()=>b(null),onViewViolations:Q})]})}function hT(){const[t,e]=Me.useState("home"),[n,i]=Me.useState("safety_gear"),[r,s]=Me.useState("all"),[o,a]=Me.useState(null),[l,c]=Me.useState(!1),[d,h]=Me.useState(!1),f=t==="plant"?"Plant Operations Map":t==="usecase"?vr[n].name:"Vision Dashboard",m=()=>e("home"),y=()=>e("plant"),S=(g,M)=>{i(g),h(M),e("usecase")},p=(g="all")=>{s(g),a(null),c(!1),e("dashboard")},u=g=>{s(n),a(g??null),c(!0),e("dashboard")},v=()=>{t==="dashboard"?S(n,d):t==="usecase"&&d?y():m()};return _.jsxs(_.Fragment,{children:[t!=="home"&&_.jsx(fy,{title:f,showBack:!0,onBack:v}),t==="home"&&_.jsx(I2,{onShowDemo:y,onSelectUseCase:g=>S(g,!1)}),t==="plant"&&_.jsx("div",{className:"h-[calc(100vh-57px)] w-full",children:_.jsx(F2,{onSelectUseCase:g=>S(g,!0)})}),t==="usecase"&&_.jsx("div",{className:"h-[calc(100vh-57px)] w-full",children:_.jsx(j2,{useCaseId:n,onViewDashboard:()=>p(n),onViewViolations:g=>u(g)})}),t==="dashboard"&&_.jsx(fT,{initialUseCase:r,initialCamera:o,focusList:l})]})}au.createRoot(document.getElementById("root")).render(_.jsx(hT,{}));
