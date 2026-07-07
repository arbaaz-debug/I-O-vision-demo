var kv=Object.defineProperty;var Ov=(t,e,n)=>e in t?kv(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var Fe=(t,e,n)=>Ov(t,typeof e!="symbol"?e+"":e,n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();var Pm={exports:{}},Rl={},Nm={exports:{}},Be={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Oo=Symbol.for("react.element"),zv=Symbol.for("react.portal"),Bv=Symbol.for("react.fragment"),Hv=Symbol.for("react.strict_mode"),Vv=Symbol.for("react.profiler"),Gv=Symbol.for("react.provider"),jv=Symbol.for("react.context"),Wv=Symbol.for("react.forward_ref"),Xv=Symbol.for("react.suspense"),$v=Symbol.for("react.memo"),Yv=Symbol.for("react.lazy"),mh=Symbol.iterator;function qv(t){return t===null||typeof t!="object"?null:(t=mh&&t[mh]||t["@@iterator"],typeof t=="function"?t:null)}var Lm={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Dm=Object.assign,Im={};function Ns(t,e,n){this.props=t,this.context=e,this.refs=Im,this.updater=n||Lm}Ns.prototype.isReactComponent={};Ns.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Ns.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Um(){}Um.prototype=Ns.prototype;function Vd(t,e,n){this.props=t,this.context=e,this.refs=Im,this.updater=n||Lm}var Gd=Vd.prototype=new Um;Gd.constructor=Vd;Dm(Gd,Ns.prototype);Gd.isPureReactComponent=!0;var gh=Array.isArray,Fm=Object.prototype.hasOwnProperty,jd={current:null},km={key:!0,ref:!0,__self:!0,__source:!0};function Om(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Fm.call(e,i)&&!km.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:Oo,type:t,key:s,ref:o,props:r,_owner:jd.current}}function Kv(t,e){return{$$typeof:Oo,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Wd(t){return typeof t=="object"&&t!==null&&t.$$typeof===Oo}function Zv(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var vh=/\/+/g;function Jl(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Zv(""+t.key):e.toString(36)}function Da(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Oo:case zv:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+Jl(o,0):i,gh(r)?(n="",t!=null&&(n=t.replace(vh,"$&/")+"/"),Da(r,e,n,"",function(c){return c})):r!=null&&(Wd(r)&&(r=Kv(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(vh,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",gh(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+Jl(s,a);o+=Da(s,e,n,l,r)}else if(l=qv(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+Jl(s,a++),o+=Da(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Yo(t,e,n){if(t==null)return t;var i=[],r=0;return Da(t,i,"","",function(s){return e.call(n,s,r++)}),i}function Qv(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Kt={current:null},Ia={transition:null},Jv={ReactCurrentDispatcher:Kt,ReactCurrentBatchConfig:Ia,ReactCurrentOwner:jd};function zm(){throw Error("act(...) is not supported in production builds of React.")}Be.Children={map:Yo,forEach:function(t,e,n){Yo(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Yo(t,function(){e++}),e},toArray:function(t){return Yo(t,function(e){return e})||[]},only:function(t){if(!Wd(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Be.Component=Ns;Be.Fragment=Bv;Be.Profiler=Vv;Be.PureComponent=Vd;Be.StrictMode=Hv;Be.Suspense=Xv;Be.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Jv;Be.act=zm;Be.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=Dm({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=jd.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)Fm.call(e,l)&&!km.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:Oo,type:t.type,key:r,ref:s,props:i,_owner:o}};Be.createContext=function(t){return t={$$typeof:jv,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Gv,_context:t},t.Consumer=t};Be.createElement=Om;Be.createFactory=function(t){var e=Om.bind(null,t);return e.type=t,e};Be.createRef=function(){return{current:null}};Be.forwardRef=function(t){return{$$typeof:Wv,render:t}};Be.isValidElement=Wd;Be.lazy=function(t){return{$$typeof:Yv,_payload:{_status:-1,_result:t},_init:Qv}};Be.memo=function(t,e){return{$$typeof:$v,type:t,compare:e===void 0?null:e}};Be.startTransition=function(t){var e=Ia.transition;Ia.transition={};try{t()}finally{Ia.transition=e}};Be.unstable_act=zm;Be.useCallback=function(t,e){return Kt.current.useCallback(t,e)};Be.useContext=function(t){return Kt.current.useContext(t)};Be.useDebugValue=function(){};Be.useDeferredValue=function(t){return Kt.current.useDeferredValue(t)};Be.useEffect=function(t,e){return Kt.current.useEffect(t,e)};Be.useId=function(){return Kt.current.useId()};Be.useImperativeHandle=function(t,e,n){return Kt.current.useImperativeHandle(t,e,n)};Be.useInsertionEffect=function(t,e){return Kt.current.useInsertionEffect(t,e)};Be.useLayoutEffect=function(t,e){return Kt.current.useLayoutEffect(t,e)};Be.useMemo=function(t,e){return Kt.current.useMemo(t,e)};Be.useReducer=function(t,e,n){return Kt.current.useReducer(t,e,n)};Be.useRef=function(t){return Kt.current.useRef(t)};Be.useState=function(t){return Kt.current.useState(t)};Be.useSyncExternalStore=function(t,e,n){return Kt.current.useSyncExternalStore(t,e,n)};Be.useTransition=function(){return Kt.current.useTransition()};Be.version="18.3.1";Nm.exports=Be;var _e=Nm.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ex=_e,tx=Symbol.for("react.element"),nx=Symbol.for("react.fragment"),ix=Object.prototype.hasOwnProperty,rx=ex.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,sx={key:!0,ref:!0,__self:!0,__source:!0};function Bm(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)ix.call(e,i)&&!sx.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:tx,type:t,key:s,ref:o,props:r,_owner:rx.current}}Rl.Fragment=nx;Rl.jsx=Bm;Rl.jsxs=Bm;Pm.exports=Rl;var _=Pm.exports,lu={},Hm={exports:{}},vn={},Vm={exports:{}},Gm={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(N,Q){var ee=N.length;N.push(Q);e:for(;0<ee;){var le=ee-1>>>1,we=N[le];if(0<r(we,Q))N[le]=Q,N[ee]=we,ee=le;else break e}}function n(N){return N.length===0?null:N[0]}function i(N){if(N.length===0)return null;var Q=N[0],ee=N.pop();if(ee!==Q){N[0]=ee;e:for(var le=0,we=N.length,ze=we>>>1;le<ze;){var q=2*(le+1)-1,re=N[q],fe=q+1,ue=N[fe];if(0>r(re,ee))fe<we&&0>r(ue,re)?(N[le]=ue,N[fe]=ee,le=fe):(N[le]=re,N[q]=ee,le=q);else if(fe<we&&0>r(ue,ee))N[le]=ue,N[fe]=ee,le=fe;else break e}}return Q}function r(N,Q){var ee=N.sortIndex-Q.sortIndex;return ee!==0?ee:N.id-Q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],f=1,h=null,d=3,p=!1,y=!1,S=!1,m=typeof setTimeout=="function"?setTimeout:null,u=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(N){for(var Q=n(c);Q!==null;){if(Q.callback===null)i(c);else if(Q.startTime<=N)i(c),Q.sortIndex=Q.expirationTime,e(l,Q);else break;Q=n(c)}}function M(N){if(S=!1,g(N),!y)if(n(l)!==null)y=!0,j(P);else{var Q=n(c);Q!==null&&Y(M,Q.startTime-N)}}function P(N,Q){y=!1,S&&(S=!1,u(R),R=-1),p=!0;var ee=d;try{for(g(Q),h=n(l);h!==null&&(!(h.expirationTime>Q)||N&&!E());){var le=h.callback;if(typeof le=="function"){h.callback=null,d=h.priorityLevel;var we=le(h.expirationTime<=Q);Q=t.unstable_now(),typeof we=="function"?h.callback=we:h===n(l)&&i(l),g(Q)}else i(l);h=n(l)}if(h!==null)var ze=!0;else{var q=n(c);q!==null&&Y(M,q.startTime-Q),ze=!1}return ze}finally{h=null,d=ee,p=!1}}var b=!1,T=null,R=-1,L=5,x=-1;function E(){return!(t.unstable_now()-x<L)}function U(){if(T!==null){var N=t.unstable_now();x=N;var Q=!0;try{Q=T(!0,N)}finally{Q?B():(b=!1,T=null)}}else b=!1}var B;if(typeof v=="function")B=function(){v(U)};else if(typeof MessageChannel<"u"){var O=new MessageChannel,X=O.port2;O.port1.onmessage=U,B=function(){X.postMessage(null)}}else B=function(){m(U,0)};function j(N){T=N,b||(b=!0,B())}function Y(N,Q){R=m(function(){N(t.unstable_now())},Q)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(N){N.callback=null},t.unstable_continueExecution=function(){y||p||(y=!0,j(P))},t.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):L=0<N?Math.floor(1e3/N):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(N){switch(d){case 1:case 2:case 3:var Q=3;break;default:Q=d}var ee=d;d=Q;try{return N()}finally{d=ee}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(N,Q){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var ee=d;d=N;try{return Q()}finally{d=ee}},t.unstable_scheduleCallback=function(N,Q,ee){var le=t.unstable_now();switch(typeof ee=="object"&&ee!==null?(ee=ee.delay,ee=typeof ee=="number"&&0<ee?le+ee:le):ee=le,N){case 1:var we=-1;break;case 2:we=250;break;case 5:we=1073741823;break;case 4:we=1e4;break;default:we=5e3}return we=ee+we,N={id:f++,callback:Q,priorityLevel:N,startTime:ee,expirationTime:we,sortIndex:-1},ee>le?(N.sortIndex=ee,e(c,N),n(l)===null&&N===n(c)&&(S?(u(R),R=-1):S=!0,Y(M,ee-le))):(N.sortIndex=we,e(l,N),y||p||(y=!0,j(P))),N},t.unstable_shouldYield=E,t.unstable_wrapCallback=function(N){var Q=d;return function(){var ee=d;d=Q;try{return N.apply(this,arguments)}finally{d=ee}}}})(Gm);Vm.exports=Gm;var ox=Vm.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ax=_e,gn=ox;function se(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var jm=new Set,mo={};function Cr(t,e){gs(t,e),gs(t+"Capture",e)}function gs(t,e){for(mo[t]=e,t=0;t<e.length;t++)jm.add(e[t])}var pi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),cu=Object.prototype.hasOwnProperty,lx=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,xh={},_h={};function cx(t){return cu.call(_h,t)?!0:cu.call(xh,t)?!1:lx.test(t)?_h[t]=!0:(xh[t]=!0,!1)}function ux(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function dx(t,e,n,i){if(e===null||typeof e>"u"||ux(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Zt(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Ft={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ft[t]=new Zt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ft[e]=new Zt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ft[t]=new Zt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ft[t]=new Zt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ft[t]=new Zt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ft[t]=new Zt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ft[t]=new Zt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ft[t]=new Zt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ft[t]=new Zt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Xd=/[\-:]([a-z])/g;function $d(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Xd,$d);Ft[e]=new Zt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Xd,$d);Ft[e]=new Zt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Xd,$d);Ft[e]=new Zt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ft[t]=new Zt(t,1,!1,t.toLowerCase(),null,!1,!1)});Ft.xlinkHref=new Zt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ft[t]=new Zt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Yd(t,e,n,i){var r=Ft.hasOwnProperty(e)?Ft[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(dx(e,n,r,i)&&(n=null),i||r===null?cx(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var _i=ax.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,qo=Symbol.for("react.element"),Yr=Symbol.for("react.portal"),qr=Symbol.for("react.fragment"),qd=Symbol.for("react.strict_mode"),uu=Symbol.for("react.profiler"),Wm=Symbol.for("react.provider"),Xm=Symbol.for("react.context"),Kd=Symbol.for("react.forward_ref"),du=Symbol.for("react.suspense"),fu=Symbol.for("react.suspense_list"),Zd=Symbol.for("react.memo"),Ci=Symbol.for("react.lazy"),$m=Symbol.for("react.offscreen"),yh=Symbol.iterator;function Os(t){return t===null||typeof t!="object"?null:(t=yh&&t[yh]||t["@@iterator"],typeof t=="function"?t:null)}var ht=Object.assign,ec;function Qs(t){if(ec===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);ec=e&&e[1]||""}return`
`+ec+t}var tc=!1;function nc(t,e){if(!t||tc)return"";tc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{tc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Qs(t):""}function fx(t){switch(t.tag){case 5:return Qs(t.type);case 16:return Qs("Lazy");case 13:return Qs("Suspense");case 19:return Qs("SuspenseList");case 0:case 2:case 15:return t=nc(t.type,!1),t;case 11:return t=nc(t.type.render,!1),t;case 1:return t=nc(t.type,!0),t;default:return""}}function hu(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case qr:return"Fragment";case Yr:return"Portal";case uu:return"Profiler";case qd:return"StrictMode";case du:return"Suspense";case fu:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Xm:return(t.displayName||"Context")+".Consumer";case Wm:return(t._context.displayName||"Context")+".Provider";case Kd:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Zd:return e=t.displayName||null,e!==null?e:hu(t.type)||"Memo";case Ci:e=t._payload,t=t._init;try{return hu(t(e))}catch{}}return null}function hx(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return hu(e);case 8:return e===qd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Xi(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Ym(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function px(t){var e=Ym(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ko(t){t._valueTracker||(t._valueTracker=px(t))}function qm(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=Ym(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Ja(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function pu(t,e){var n=e.checked;return ht({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Sh(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=Xi(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Km(t,e){e=e.checked,e!=null&&Yd(t,"checked",e,!1)}function mu(t,e){Km(t,e);var n=Xi(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?gu(t,e.type,n):e.hasOwnProperty("defaultValue")&&gu(t,e.type,Xi(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Mh(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function gu(t,e,n){(e!=="number"||Ja(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Js=Array.isArray;function as(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Xi(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function vu(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(se(91));return ht({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Eh(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(se(92));if(Js(n)){if(1<n.length)throw Error(se(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Xi(n)}}function Zm(t,e){var n=Xi(e.value),i=Xi(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function wh(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Qm(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function xu(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Qm(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Zo,Jm=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Zo=Zo||document.createElement("div"),Zo.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Zo.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function go(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var io={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},mx=["Webkit","ms","Moz","O"];Object.keys(io).forEach(function(t){mx.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),io[e]=io[t]})});function e0(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||io.hasOwnProperty(t)&&io[t]?(""+e).trim():e+"px"}function t0(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=e0(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var gx=ht({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function _u(t,e){if(e){if(gx[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(se(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(se(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(se(61))}if(e.style!=null&&typeof e.style!="object")throw Error(se(62))}}function yu(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Su=null;function Qd(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Mu=null,ls=null,cs=null;function Th(t){if(t=Ho(t)){if(typeof Mu!="function")throw Error(se(280));var e=t.stateNode;e&&(e=Il(e),Mu(t.stateNode,t.type,e))}}function n0(t){ls?cs?cs.push(t):cs=[t]:ls=t}function i0(){if(ls){var t=ls,e=cs;if(cs=ls=null,Th(t),e)for(t=0;t<e.length;t++)Th(e[t])}}function r0(t,e){return t(e)}function s0(){}var ic=!1;function o0(t,e,n){if(ic)return t(e,n);ic=!0;try{return r0(t,e,n)}finally{ic=!1,(ls!==null||cs!==null)&&(s0(),i0())}}function vo(t,e){var n=t.stateNode;if(n===null)return null;var i=Il(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(se(231,e,typeof n));return n}var Eu=!1;if(pi)try{var zs={};Object.defineProperty(zs,"passive",{get:function(){Eu=!0}}),window.addEventListener("test",zs,zs),window.removeEventListener("test",zs,zs)}catch{Eu=!1}function vx(t,e,n,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(f){this.onError(f)}}var ro=!1,el=null,tl=!1,wu=null,xx={onError:function(t){ro=!0,el=t}};function _x(t,e,n,i,r,s,o,a,l){ro=!1,el=null,vx.apply(xx,arguments)}function yx(t,e,n,i,r,s,o,a,l){if(_x.apply(this,arguments),ro){if(ro){var c=el;ro=!1,el=null}else throw Error(se(198));tl||(tl=!0,wu=c)}}function Rr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function a0(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Ah(t){if(Rr(t)!==t)throw Error(se(188))}function Sx(t){var e=t.alternate;if(!e){if(e=Rr(t),e===null)throw Error(se(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return Ah(r),t;if(s===i)return Ah(r),e;s=s.sibling}throw Error(se(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(se(189))}}if(n.alternate!==i)throw Error(se(190))}if(n.tag!==3)throw Error(se(188));return n.stateNode.current===n?t:e}function l0(t){return t=Sx(t),t!==null?c0(t):null}function c0(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=c0(t);if(e!==null)return e;t=t.sibling}return null}var u0=gn.unstable_scheduleCallback,bh=gn.unstable_cancelCallback,Mx=gn.unstable_shouldYield,Ex=gn.unstable_requestPaint,_t=gn.unstable_now,wx=gn.unstable_getCurrentPriorityLevel,Jd=gn.unstable_ImmediatePriority,d0=gn.unstable_UserBlockingPriority,nl=gn.unstable_NormalPriority,Tx=gn.unstable_LowPriority,f0=gn.unstable_IdlePriority,Pl=null,qn=null;function Ax(t){if(qn&&typeof qn.onCommitFiberRoot=="function")try{qn.onCommitFiberRoot(Pl,t,void 0,(t.current.flags&128)===128)}catch{}}var Bn=Math.clz32?Math.clz32:Rx,bx=Math.log,Cx=Math.LN2;function Rx(t){return t>>>=0,t===0?32:31-(bx(t)/Cx|0)|0}var Qo=64,Jo=4194304;function eo(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function il(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=eo(a):(s&=o,s!==0&&(i=eo(s)))}else o=n&~r,o!==0?i=eo(o):s!==0&&(i=eo(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-Bn(e),r=1<<n,i|=t[n],e&=~r;return i}function Px(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Nx(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Bn(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=Px(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Tu(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function h0(){var t=Qo;return Qo<<=1,!(Qo&4194240)&&(Qo=64),t}function rc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function zo(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Bn(e),t[e]=n}function Lx(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-Bn(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function ef(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-Bn(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var rt=0;function p0(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var m0,tf,g0,v0,x0,Au=!1,ea=[],Fi=null,ki=null,Oi=null,xo=new Map,_o=new Map,Pi=[],Dx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ch(t,e){switch(t){case"focusin":case"focusout":Fi=null;break;case"dragenter":case"dragleave":ki=null;break;case"mouseover":case"mouseout":Oi=null;break;case"pointerover":case"pointerout":xo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":_o.delete(e.pointerId)}}function Bs(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Ho(e),e!==null&&tf(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function Ix(t,e,n,i,r){switch(e){case"focusin":return Fi=Bs(Fi,t,e,n,i,r),!0;case"dragenter":return ki=Bs(ki,t,e,n,i,r),!0;case"mouseover":return Oi=Bs(Oi,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return xo.set(s,Bs(xo.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,_o.set(s,Bs(_o.get(s)||null,t,e,n,i,r)),!0}return!1}function _0(t){var e=hr(t.target);if(e!==null){var n=Rr(e);if(n!==null){if(e=n.tag,e===13){if(e=a0(n),e!==null){t.blockedOn=e,x0(t.priority,function(){g0(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ua(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=bu(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Su=i,n.target.dispatchEvent(i),Su=null}else return e=Ho(n),e!==null&&tf(e),t.blockedOn=n,!1;e.shift()}return!0}function Rh(t,e,n){Ua(t)&&n.delete(e)}function Ux(){Au=!1,Fi!==null&&Ua(Fi)&&(Fi=null),ki!==null&&Ua(ki)&&(ki=null),Oi!==null&&Ua(Oi)&&(Oi=null),xo.forEach(Rh),_o.forEach(Rh)}function Hs(t,e){t.blockedOn===e&&(t.blockedOn=null,Au||(Au=!0,gn.unstable_scheduleCallback(gn.unstable_NormalPriority,Ux)))}function yo(t){function e(r){return Hs(r,t)}if(0<ea.length){Hs(ea[0],t);for(var n=1;n<ea.length;n++){var i=ea[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Fi!==null&&Hs(Fi,t),ki!==null&&Hs(ki,t),Oi!==null&&Hs(Oi,t),xo.forEach(e),_o.forEach(e),n=0;n<Pi.length;n++)i=Pi[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Pi.length&&(n=Pi[0],n.blockedOn===null);)_0(n),n.blockedOn===null&&Pi.shift()}var us=_i.ReactCurrentBatchConfig,rl=!0;function Fx(t,e,n,i){var r=rt,s=us.transition;us.transition=null;try{rt=1,nf(t,e,n,i)}finally{rt=r,us.transition=s}}function kx(t,e,n,i){var r=rt,s=us.transition;us.transition=null;try{rt=4,nf(t,e,n,i)}finally{rt=r,us.transition=s}}function nf(t,e,n,i){if(rl){var r=bu(t,e,n,i);if(r===null)pc(t,e,i,sl,n),Ch(t,i);else if(Ix(r,t,e,n,i))i.stopPropagation();else if(Ch(t,i),e&4&&-1<Dx.indexOf(t)){for(;r!==null;){var s=Ho(r);if(s!==null&&m0(s),s=bu(t,e,n,i),s===null&&pc(t,e,i,sl,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else pc(t,e,i,null,n)}}var sl=null;function bu(t,e,n,i){if(sl=null,t=Qd(i),t=hr(t),t!==null)if(e=Rr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=a0(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return sl=t,null}function y0(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(wx()){case Jd:return 1;case d0:return 4;case nl:case Tx:return 16;case f0:return 536870912;default:return 16}default:return 16}}var Di=null,rf=null,Fa=null;function S0(){if(Fa)return Fa;var t,e=rf,n=e.length,i,r="value"in Di?Di.value:Di.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return Fa=r.slice(t,1<i?1-i:void 0)}function ka(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function ta(){return!0}function Ph(){return!1}function xn(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?ta:Ph,this.isPropagationStopped=Ph,this}return ht(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ta)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ta)},persist:function(){},isPersistent:ta}),e}var Ls={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},sf=xn(Ls),Bo=ht({},Ls,{view:0,detail:0}),Ox=xn(Bo),sc,oc,Vs,Nl=ht({},Bo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:of,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Vs&&(Vs&&t.type==="mousemove"?(sc=t.screenX-Vs.screenX,oc=t.screenY-Vs.screenY):oc=sc=0,Vs=t),sc)},movementY:function(t){return"movementY"in t?t.movementY:oc}}),Nh=xn(Nl),zx=ht({},Nl,{dataTransfer:0}),Bx=xn(zx),Hx=ht({},Bo,{relatedTarget:0}),ac=xn(Hx),Vx=ht({},Ls,{animationName:0,elapsedTime:0,pseudoElement:0}),Gx=xn(Vx),jx=ht({},Ls,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Wx=xn(jx),Xx=ht({},Ls,{data:0}),Lh=xn(Xx),$x={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Yx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},qx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Kx(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=qx[t])?!!e[t]:!1}function of(){return Kx}var Zx=ht({},Bo,{key:function(t){if(t.key){var e=$x[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=ka(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Yx[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:of,charCode:function(t){return t.type==="keypress"?ka(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ka(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Qx=xn(Zx),Jx=ht({},Nl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Dh=xn(Jx),e_=ht({},Bo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:of}),t_=xn(e_),n_=ht({},Ls,{propertyName:0,elapsedTime:0,pseudoElement:0}),i_=xn(n_),r_=ht({},Nl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),s_=xn(r_),o_=[9,13,27,32],af=pi&&"CompositionEvent"in window,so=null;pi&&"documentMode"in document&&(so=document.documentMode);var a_=pi&&"TextEvent"in window&&!so,M0=pi&&(!af||so&&8<so&&11>=so),Ih=" ",Uh=!1;function E0(t,e){switch(t){case"keyup":return o_.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function w0(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Kr=!1;function l_(t,e){switch(t){case"compositionend":return w0(e);case"keypress":return e.which!==32?null:(Uh=!0,Ih);case"textInput":return t=e.data,t===Ih&&Uh?null:t;default:return null}}function c_(t,e){if(Kr)return t==="compositionend"||!af&&E0(t,e)?(t=S0(),Fa=rf=Di=null,Kr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return M0&&e.locale!=="ko"?null:e.data;default:return null}}var u_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Fh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!u_[t.type]:e==="textarea"}function T0(t,e,n,i){n0(i),e=ol(e,"onChange"),0<e.length&&(n=new sf("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var oo=null,So=null;function d_(t){F0(t,0)}function Ll(t){var e=Jr(t);if(qm(e))return t}function f_(t,e){if(t==="change")return e}var A0=!1;if(pi){var lc;if(pi){var cc="oninput"in document;if(!cc){var kh=document.createElement("div");kh.setAttribute("oninput","return;"),cc=typeof kh.oninput=="function"}lc=cc}else lc=!1;A0=lc&&(!document.documentMode||9<document.documentMode)}function Oh(){oo&&(oo.detachEvent("onpropertychange",b0),So=oo=null)}function b0(t){if(t.propertyName==="value"&&Ll(So)){var e=[];T0(e,So,t,Qd(t)),o0(d_,e)}}function h_(t,e,n){t==="focusin"?(Oh(),oo=e,So=n,oo.attachEvent("onpropertychange",b0)):t==="focusout"&&Oh()}function p_(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Ll(So)}function m_(t,e){if(t==="click")return Ll(e)}function g_(t,e){if(t==="input"||t==="change")return Ll(e)}function v_(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Vn=typeof Object.is=="function"?Object.is:v_;function Mo(t,e){if(Vn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!cu.call(e,r)||!Vn(t[r],e[r]))return!1}return!0}function zh(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Bh(t,e){var n=zh(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=zh(n)}}function C0(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?C0(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function R0(){for(var t=window,e=Ja();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Ja(t.document)}return e}function lf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function x_(t){var e=R0(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&C0(n.ownerDocument.documentElement,n)){if(i!==null&&lf(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=Bh(n,s);var o=Bh(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var __=pi&&"documentMode"in document&&11>=document.documentMode,Zr=null,Cu=null,ao=null,Ru=!1;function Hh(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ru||Zr==null||Zr!==Ja(i)||(i=Zr,"selectionStart"in i&&lf(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),ao&&Mo(ao,i)||(ao=i,i=ol(Cu,"onSelect"),0<i.length&&(e=new sf("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Zr)))}function na(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Qr={animationend:na("Animation","AnimationEnd"),animationiteration:na("Animation","AnimationIteration"),animationstart:na("Animation","AnimationStart"),transitionend:na("Transition","TransitionEnd")},uc={},P0={};pi&&(P0=document.createElement("div").style,"AnimationEvent"in window||(delete Qr.animationend.animation,delete Qr.animationiteration.animation,delete Qr.animationstart.animation),"TransitionEvent"in window||delete Qr.transitionend.transition);function Dl(t){if(uc[t])return uc[t];if(!Qr[t])return t;var e=Qr[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in P0)return uc[t]=e[n];return t}var N0=Dl("animationend"),L0=Dl("animationiteration"),D0=Dl("animationstart"),I0=Dl("transitionend"),U0=new Map,Vh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ki(t,e){U0.set(t,e),Cr(e,[t])}for(var dc=0;dc<Vh.length;dc++){var fc=Vh[dc],y_=fc.toLowerCase(),S_=fc[0].toUpperCase()+fc.slice(1);Ki(y_,"on"+S_)}Ki(N0,"onAnimationEnd");Ki(L0,"onAnimationIteration");Ki(D0,"onAnimationStart");Ki("dblclick","onDoubleClick");Ki("focusin","onFocus");Ki("focusout","onBlur");Ki(I0,"onTransitionEnd");gs("onMouseEnter",["mouseout","mouseover"]);gs("onMouseLeave",["mouseout","mouseover"]);gs("onPointerEnter",["pointerout","pointerover"]);gs("onPointerLeave",["pointerout","pointerover"]);Cr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Cr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Cr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Cr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Cr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Cr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var to="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),M_=new Set("cancel close invalid load scroll toggle".split(" ").concat(to));function Gh(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,yx(i,e,void 0,t),t.currentTarget=null}function F0(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;Gh(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;Gh(r,a,c),s=l}}}if(tl)throw t=wu,tl=!1,wu=null,t}function at(t,e){var n=e[Iu];n===void 0&&(n=e[Iu]=new Set);var i=t+"__bubble";n.has(i)||(k0(e,t,2,!1),n.add(i))}function hc(t,e,n){var i=0;e&&(i|=4),k0(n,t,i,e)}var ia="_reactListening"+Math.random().toString(36).slice(2);function Eo(t){if(!t[ia]){t[ia]=!0,jm.forEach(function(n){n!=="selectionchange"&&(M_.has(n)||hc(n,!1,t),hc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[ia]||(e[ia]=!0,hc("selectionchange",!1,e))}}function k0(t,e,n,i){switch(y0(e)){case 1:var r=Fx;break;case 4:r=kx;break;default:r=nf}n=r.bind(null,e,n,t),r=void 0,!Eu||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function pc(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=hr(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}o0(function(){var c=s,f=Qd(n),h=[];e:{var d=U0.get(t);if(d!==void 0){var p=sf,y=t;switch(t){case"keypress":if(ka(n)===0)break e;case"keydown":case"keyup":p=Qx;break;case"focusin":y="focus",p=ac;break;case"focusout":y="blur",p=ac;break;case"beforeblur":case"afterblur":p=ac;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Nh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=Bx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=t_;break;case N0:case L0:case D0:p=Gx;break;case I0:p=i_;break;case"scroll":p=Ox;break;case"wheel":p=s_;break;case"copy":case"cut":case"paste":p=Wx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Dh}var S=(e&4)!==0,m=!S&&t==="scroll",u=S?d!==null?d+"Capture":null:d;S=[];for(var v=c,g;v!==null;){g=v;var M=g.stateNode;if(g.tag===5&&M!==null&&(g=M,u!==null&&(M=vo(v,u),M!=null&&S.push(wo(v,M,g)))),m)break;v=v.return}0<S.length&&(d=new p(d,y,null,n,f),h.push({event:d,listeners:S}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",d&&n!==Su&&(y=n.relatedTarget||n.fromElement)&&(hr(y)||y[mi]))break e;if((p||d)&&(d=f.window===f?f:(d=f.ownerDocument)?d.defaultView||d.parentWindow:window,p?(y=n.relatedTarget||n.toElement,p=c,y=y?hr(y):null,y!==null&&(m=Rr(y),y!==m||y.tag!==5&&y.tag!==6)&&(y=null)):(p=null,y=c),p!==y)){if(S=Nh,M="onMouseLeave",u="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(S=Dh,M="onPointerLeave",u="onPointerEnter",v="pointer"),m=p==null?d:Jr(p),g=y==null?d:Jr(y),d=new S(M,v+"leave",p,n,f),d.target=m,d.relatedTarget=g,M=null,hr(f)===c&&(S=new S(u,v+"enter",y,n,f),S.target=g,S.relatedTarget=m,M=S),m=M,p&&y)t:{for(S=p,u=y,v=0,g=S;g;g=Lr(g))v++;for(g=0,M=u;M;M=Lr(M))g++;for(;0<v-g;)S=Lr(S),v--;for(;0<g-v;)u=Lr(u),g--;for(;v--;){if(S===u||u!==null&&S===u.alternate)break t;S=Lr(S),u=Lr(u)}S=null}else S=null;p!==null&&jh(h,d,p,S,!1),y!==null&&m!==null&&jh(h,m,y,S,!0)}}e:{if(d=c?Jr(c):window,p=d.nodeName&&d.nodeName.toLowerCase(),p==="select"||p==="input"&&d.type==="file")var P=f_;else if(Fh(d))if(A0)P=g_;else{P=p_;var b=h_}else(p=d.nodeName)&&p.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(P=m_);if(P&&(P=P(t,c))){T0(h,P,n,f);break e}b&&b(t,d,c),t==="focusout"&&(b=d._wrapperState)&&b.controlled&&d.type==="number"&&gu(d,"number",d.value)}switch(b=c?Jr(c):window,t){case"focusin":(Fh(b)||b.contentEditable==="true")&&(Zr=b,Cu=c,ao=null);break;case"focusout":ao=Cu=Zr=null;break;case"mousedown":Ru=!0;break;case"contextmenu":case"mouseup":case"dragend":Ru=!1,Hh(h,n,f);break;case"selectionchange":if(__)break;case"keydown":case"keyup":Hh(h,n,f)}var T;if(af)e:{switch(t){case"compositionstart":var R="onCompositionStart";break e;case"compositionend":R="onCompositionEnd";break e;case"compositionupdate":R="onCompositionUpdate";break e}R=void 0}else Kr?E0(t,n)&&(R="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(R="onCompositionStart");R&&(M0&&n.locale!=="ko"&&(Kr||R!=="onCompositionStart"?R==="onCompositionEnd"&&Kr&&(T=S0()):(Di=f,rf="value"in Di?Di.value:Di.textContent,Kr=!0)),b=ol(c,R),0<b.length&&(R=new Lh(R,t,null,n,f),h.push({event:R,listeners:b}),T?R.data=T:(T=w0(n),T!==null&&(R.data=T)))),(T=a_?l_(t,n):c_(t,n))&&(c=ol(c,"onBeforeInput"),0<c.length&&(f=new Lh("onBeforeInput","beforeinput",null,n,f),h.push({event:f,listeners:c}),f.data=T))}F0(h,e)})}function wo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function ol(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=vo(t,n),s!=null&&i.unshift(wo(t,s,r)),s=vo(t,e),s!=null&&i.push(wo(t,s,r))),t=t.return}return i}function Lr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function jh(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=vo(n,s),l!=null&&o.unshift(wo(n,l,a))):r||(l=vo(n,s),l!=null&&o.push(wo(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var E_=/\r\n?/g,w_=/\u0000|\uFFFD/g;function Wh(t){return(typeof t=="string"?t:""+t).replace(E_,`
`).replace(w_,"")}function ra(t,e,n){if(e=Wh(e),Wh(t)!==e&&n)throw Error(se(425))}function al(){}var Pu=null,Nu=null;function Lu(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Du=typeof setTimeout=="function"?setTimeout:void 0,T_=typeof clearTimeout=="function"?clearTimeout:void 0,Xh=typeof Promise=="function"?Promise:void 0,A_=typeof queueMicrotask=="function"?queueMicrotask:typeof Xh<"u"?function(t){return Xh.resolve(null).then(t).catch(b_)}:Du;function b_(t){setTimeout(function(){throw t})}function mc(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),yo(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);yo(e)}function zi(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function $h(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Ds=Math.random().toString(36).slice(2),Yn="__reactFiber$"+Ds,To="__reactProps$"+Ds,mi="__reactContainer$"+Ds,Iu="__reactEvents$"+Ds,C_="__reactListeners$"+Ds,R_="__reactHandles$"+Ds;function hr(t){var e=t[Yn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[mi]||n[Yn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=$h(t);t!==null;){if(n=t[Yn])return n;t=$h(t)}return e}t=n,n=t.parentNode}return null}function Ho(t){return t=t[Yn]||t[mi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Jr(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(se(33))}function Il(t){return t[To]||null}var Uu=[],es=-1;function Zi(t){return{current:t}}function ct(t){0>es||(t.current=Uu[es],Uu[es]=null,es--)}function st(t,e){es++,Uu[es]=t.current,t.current=e}var $i={},Gt=Zi($i),nn=Zi(!1),yr=$i;function vs(t,e){var n=t.type.contextTypes;if(!n)return $i;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function rn(t){return t=t.childContextTypes,t!=null}function ll(){ct(nn),ct(Gt)}function Yh(t,e,n){if(Gt.current!==$i)throw Error(se(168));st(Gt,e),st(nn,n)}function O0(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(se(108,hx(t)||"Unknown",r));return ht({},n,i)}function cl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||$i,yr=Gt.current,st(Gt,t),st(nn,nn.current),!0}function qh(t,e,n){var i=t.stateNode;if(!i)throw Error(se(169));n?(t=O0(t,e,yr),i.__reactInternalMemoizedMergedChildContext=t,ct(nn),ct(Gt),st(Gt,t)):ct(nn),st(nn,n)}var ai=null,Ul=!1,gc=!1;function z0(t){ai===null?ai=[t]:ai.push(t)}function P_(t){Ul=!0,z0(t)}function Qi(){if(!gc&&ai!==null){gc=!0;var t=0,e=rt;try{var n=ai;for(rt=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}ai=null,Ul=!1}catch(r){throw ai!==null&&(ai=ai.slice(t+1)),u0(Jd,Qi),r}finally{rt=e,gc=!1}}return null}var ts=[],ns=0,ul=null,dl=0,Sn=[],Mn=0,Sr=null,ci=1,ui="";function ar(t,e){ts[ns++]=dl,ts[ns++]=ul,ul=t,dl=e}function B0(t,e,n){Sn[Mn++]=ci,Sn[Mn++]=ui,Sn[Mn++]=Sr,Sr=t;var i=ci;t=ui;var r=32-Bn(i)-1;i&=~(1<<r),n+=1;var s=32-Bn(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,ci=1<<32-Bn(e)+r|n<<r|i,ui=s+t}else ci=1<<s|n<<r|i,ui=t}function cf(t){t.return!==null&&(ar(t,1),B0(t,1,0))}function uf(t){for(;t===ul;)ul=ts[--ns],ts[ns]=null,dl=ts[--ns],ts[ns]=null;for(;t===Sr;)Sr=Sn[--Mn],Sn[Mn]=null,ui=Sn[--Mn],Sn[Mn]=null,ci=Sn[--Mn],Sn[Mn]=null}var mn=null,pn=null,ut=!1,Fn=null;function H0(t,e){var n=wn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Kh(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,mn=t,pn=zi(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,mn=t,pn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Sr!==null?{id:ci,overflow:ui}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=wn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,mn=t,pn=null,!0):!1;default:return!1}}function Fu(t){return(t.mode&1)!==0&&(t.flags&128)===0}function ku(t){if(ut){var e=pn;if(e){var n=e;if(!Kh(t,e)){if(Fu(t))throw Error(se(418));e=zi(n.nextSibling);var i=mn;e&&Kh(t,e)?H0(i,n):(t.flags=t.flags&-4097|2,ut=!1,mn=t)}}else{if(Fu(t))throw Error(se(418));t.flags=t.flags&-4097|2,ut=!1,mn=t}}}function Zh(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;mn=t}function sa(t){if(t!==mn)return!1;if(!ut)return Zh(t),ut=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Lu(t.type,t.memoizedProps)),e&&(e=pn)){if(Fu(t))throw V0(),Error(se(418));for(;e;)H0(t,e),e=zi(e.nextSibling)}if(Zh(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(se(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){pn=zi(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}pn=null}}else pn=mn?zi(t.stateNode.nextSibling):null;return!0}function V0(){for(var t=pn;t;)t=zi(t.nextSibling)}function xs(){pn=mn=null,ut=!1}function df(t){Fn===null?Fn=[t]:Fn.push(t)}var N_=_i.ReactCurrentBatchConfig;function Gs(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(se(309));var i=n.stateNode}if(!i)throw Error(se(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(se(284));if(!n._owner)throw Error(se(290,t))}return t}function oa(t,e){throw t=Object.prototype.toString.call(e),Error(se(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Qh(t){var e=t._init;return e(t._payload)}function G0(t){function e(u,v){if(t){var g=u.deletions;g===null?(u.deletions=[v],u.flags|=16):g.push(v)}}function n(u,v){if(!t)return null;for(;v!==null;)e(u,v),v=v.sibling;return null}function i(u,v){for(u=new Map;v!==null;)v.key!==null?u.set(v.key,v):u.set(v.index,v),v=v.sibling;return u}function r(u,v){return u=Gi(u,v),u.index=0,u.sibling=null,u}function s(u,v,g){return u.index=g,t?(g=u.alternate,g!==null?(g=g.index,g<v?(u.flags|=2,v):g):(u.flags|=2,v)):(u.flags|=1048576,v)}function o(u){return t&&u.alternate===null&&(u.flags|=2),u}function a(u,v,g,M){return v===null||v.tag!==6?(v=Ec(g,u.mode,M),v.return=u,v):(v=r(v,g),v.return=u,v)}function l(u,v,g,M){var P=g.type;return P===qr?f(u,v,g.props.children,M,g.key):v!==null&&(v.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===Ci&&Qh(P)===v.type)?(M=r(v,g.props),M.ref=Gs(u,v,g),M.return=u,M):(M=ja(g.type,g.key,g.props,null,u.mode,M),M.ref=Gs(u,v,g),M.return=u,M)}function c(u,v,g,M){return v===null||v.tag!==4||v.stateNode.containerInfo!==g.containerInfo||v.stateNode.implementation!==g.implementation?(v=wc(g,u.mode,M),v.return=u,v):(v=r(v,g.children||[]),v.return=u,v)}function f(u,v,g,M,P){return v===null||v.tag!==7?(v=_r(g,u.mode,M,P),v.return=u,v):(v=r(v,g),v.return=u,v)}function h(u,v,g){if(typeof v=="string"&&v!==""||typeof v=="number")return v=Ec(""+v,u.mode,g),v.return=u,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case qo:return g=ja(v.type,v.key,v.props,null,u.mode,g),g.ref=Gs(u,null,v),g.return=u,g;case Yr:return v=wc(v,u.mode,g),v.return=u,v;case Ci:var M=v._init;return h(u,M(v._payload),g)}if(Js(v)||Os(v))return v=_r(v,u.mode,g,null),v.return=u,v;oa(u,v)}return null}function d(u,v,g,M){var P=v!==null?v.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return P!==null?null:a(u,v,""+g,M);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case qo:return g.key===P?l(u,v,g,M):null;case Yr:return g.key===P?c(u,v,g,M):null;case Ci:return P=g._init,d(u,v,P(g._payload),M)}if(Js(g)||Os(g))return P!==null?null:f(u,v,g,M,null);oa(u,g)}return null}function p(u,v,g,M,P){if(typeof M=="string"&&M!==""||typeof M=="number")return u=u.get(g)||null,a(v,u,""+M,P);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case qo:return u=u.get(M.key===null?g:M.key)||null,l(v,u,M,P);case Yr:return u=u.get(M.key===null?g:M.key)||null,c(v,u,M,P);case Ci:var b=M._init;return p(u,v,g,b(M._payload),P)}if(Js(M)||Os(M))return u=u.get(g)||null,f(v,u,M,P,null);oa(v,M)}return null}function y(u,v,g,M){for(var P=null,b=null,T=v,R=v=0,L=null;T!==null&&R<g.length;R++){T.index>R?(L=T,T=null):L=T.sibling;var x=d(u,T,g[R],M);if(x===null){T===null&&(T=L);break}t&&T&&x.alternate===null&&e(u,T),v=s(x,v,R),b===null?P=x:b.sibling=x,b=x,T=L}if(R===g.length)return n(u,T),ut&&ar(u,R),P;if(T===null){for(;R<g.length;R++)T=h(u,g[R],M),T!==null&&(v=s(T,v,R),b===null?P=T:b.sibling=T,b=T);return ut&&ar(u,R),P}for(T=i(u,T);R<g.length;R++)L=p(T,u,R,g[R],M),L!==null&&(t&&L.alternate!==null&&T.delete(L.key===null?R:L.key),v=s(L,v,R),b===null?P=L:b.sibling=L,b=L);return t&&T.forEach(function(E){return e(u,E)}),ut&&ar(u,R),P}function S(u,v,g,M){var P=Os(g);if(typeof P!="function")throw Error(se(150));if(g=P.call(g),g==null)throw Error(se(151));for(var b=P=null,T=v,R=v=0,L=null,x=g.next();T!==null&&!x.done;R++,x=g.next()){T.index>R?(L=T,T=null):L=T.sibling;var E=d(u,T,x.value,M);if(E===null){T===null&&(T=L);break}t&&T&&E.alternate===null&&e(u,T),v=s(E,v,R),b===null?P=E:b.sibling=E,b=E,T=L}if(x.done)return n(u,T),ut&&ar(u,R),P;if(T===null){for(;!x.done;R++,x=g.next())x=h(u,x.value,M),x!==null&&(v=s(x,v,R),b===null?P=x:b.sibling=x,b=x);return ut&&ar(u,R),P}for(T=i(u,T);!x.done;R++,x=g.next())x=p(T,u,R,x.value,M),x!==null&&(t&&x.alternate!==null&&T.delete(x.key===null?R:x.key),v=s(x,v,R),b===null?P=x:b.sibling=x,b=x);return t&&T.forEach(function(U){return e(u,U)}),ut&&ar(u,R),P}function m(u,v,g,M){if(typeof g=="object"&&g!==null&&g.type===qr&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case qo:e:{for(var P=g.key,b=v;b!==null;){if(b.key===P){if(P=g.type,P===qr){if(b.tag===7){n(u,b.sibling),v=r(b,g.props.children),v.return=u,u=v;break e}}else if(b.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===Ci&&Qh(P)===b.type){n(u,b.sibling),v=r(b,g.props),v.ref=Gs(u,b,g),v.return=u,u=v;break e}n(u,b);break}else e(u,b);b=b.sibling}g.type===qr?(v=_r(g.props.children,u.mode,M,g.key),v.return=u,u=v):(M=ja(g.type,g.key,g.props,null,u.mode,M),M.ref=Gs(u,v,g),M.return=u,u=M)}return o(u);case Yr:e:{for(b=g.key;v!==null;){if(v.key===b)if(v.tag===4&&v.stateNode.containerInfo===g.containerInfo&&v.stateNode.implementation===g.implementation){n(u,v.sibling),v=r(v,g.children||[]),v.return=u,u=v;break e}else{n(u,v);break}else e(u,v);v=v.sibling}v=wc(g,u.mode,M),v.return=u,u=v}return o(u);case Ci:return b=g._init,m(u,v,b(g._payload),M)}if(Js(g))return y(u,v,g,M);if(Os(g))return S(u,v,g,M);oa(u,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,v!==null&&v.tag===6?(n(u,v.sibling),v=r(v,g),v.return=u,u=v):(n(u,v),v=Ec(g,u.mode,M),v.return=u,u=v),o(u)):n(u,v)}return m}var _s=G0(!0),j0=G0(!1),fl=Zi(null),hl=null,is=null,ff=null;function hf(){ff=is=hl=null}function pf(t){var e=fl.current;ct(fl),t._currentValue=e}function Ou(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function ds(t,e){hl=t,ff=is=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(tn=!0),t.firstContext=null)}function bn(t){var e=t._currentValue;if(ff!==t)if(t={context:t,memoizedValue:e,next:null},is===null){if(hl===null)throw Error(se(308));is=t,hl.dependencies={lanes:0,firstContext:t}}else is=is.next=t;return e}var pr=null;function mf(t){pr===null?pr=[t]:pr.push(t)}function W0(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,mf(e)):(n.next=r.next,r.next=n),e.interleaved=n,gi(t,i)}function gi(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Ri=!1;function gf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function X0(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function hi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Bi(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,Ke&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,gi(t,n)}return r=i.interleaved,r===null?(e.next=e,mf(i)):(e.next=r.next,r.next=e),i.interleaved=e,gi(t,n)}function Oa(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,ef(t,n)}}function Jh(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function pl(t,e,n,i){var r=t.updateQueue;Ri=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var f=t.alternate;f!==null&&(f=f.updateQueue,a=f.lastBaseUpdate,a!==o&&(a===null?f.firstBaseUpdate=c:a.next=c,f.lastBaseUpdate=l))}if(s!==null){var h=r.baseState;o=0,f=c=l=null,a=s;do{var d=a.lane,p=a.eventTime;if((i&d)===d){f!==null&&(f=f.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var y=t,S=a;switch(d=e,p=n,S.tag){case 1:if(y=S.payload,typeof y=="function"){h=y.call(p,h,d);break e}h=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=S.payload,d=typeof y=="function"?y.call(p,h,d):y,d==null)break e;h=ht({},h,d);break e;case 2:Ri=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,d=r.effects,d===null?r.effects=[a]:d.push(a))}else p={eventTime:p,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},f===null?(c=f=p,l=h):f=f.next=p,o|=d;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;d=a,a=d.next,d.next=null,r.lastBaseUpdate=d,r.shared.pending=null}}while(!0);if(f===null&&(l=h),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=f,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Er|=o,t.lanes=o,t.memoizedState=h}}function ep(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(se(191,r));r.call(i)}}}var Vo={},Kn=Zi(Vo),Ao=Zi(Vo),bo=Zi(Vo);function mr(t){if(t===Vo)throw Error(se(174));return t}function vf(t,e){switch(st(bo,e),st(Ao,t),st(Kn,Vo),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:xu(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=xu(e,t)}ct(Kn),st(Kn,e)}function ys(){ct(Kn),ct(Ao),ct(bo)}function $0(t){mr(bo.current);var e=mr(Kn.current),n=xu(e,t.type);e!==n&&(st(Ao,t),st(Kn,n))}function xf(t){Ao.current===t&&(ct(Kn),ct(Ao))}var dt=Zi(0);function ml(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var vc=[];function _f(){for(var t=0;t<vc.length;t++)vc[t]._workInProgressVersionPrimary=null;vc.length=0}var za=_i.ReactCurrentDispatcher,xc=_i.ReactCurrentBatchConfig,Mr=0,ft=null,wt=null,Pt=null,gl=!1,lo=!1,Co=0,L_=0;function kt(){throw Error(se(321))}function yf(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Vn(t[n],e[n]))return!1;return!0}function Sf(t,e,n,i,r,s){if(Mr=s,ft=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,za.current=t===null||t.memoizedState===null?F_:k_,t=n(i,r),lo){s=0;do{if(lo=!1,Co=0,25<=s)throw Error(se(301));s+=1,Pt=wt=null,e.updateQueue=null,za.current=O_,t=n(i,r)}while(lo)}if(za.current=vl,e=wt!==null&&wt.next!==null,Mr=0,Pt=wt=ft=null,gl=!1,e)throw Error(se(300));return t}function Mf(){var t=Co!==0;return Co=0,t}function Wn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Pt===null?ft.memoizedState=Pt=t:Pt=Pt.next=t,Pt}function Cn(){if(wt===null){var t=ft.alternate;t=t!==null?t.memoizedState:null}else t=wt.next;var e=Pt===null?ft.memoizedState:Pt.next;if(e!==null)Pt=e,wt=t;else{if(t===null)throw Error(se(310));wt=t,t={memoizedState:wt.memoizedState,baseState:wt.baseState,baseQueue:wt.baseQueue,queue:wt.queue,next:null},Pt===null?ft.memoizedState=Pt=t:Pt=Pt.next=t}return Pt}function Ro(t,e){return typeof e=="function"?e(t):e}function _c(t){var e=Cn(),n=e.queue;if(n===null)throw Error(se(311));n.lastRenderedReducer=t;var i=wt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var f=c.lane;if((Mr&f)===f)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var h={lane:f,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=h,o=i):l=l.next=h,ft.lanes|=f,Er|=f}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,Vn(i,e.memoizedState)||(tn=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,ft.lanes|=s,Er|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function yc(t){var e=Cn(),n=e.queue;if(n===null)throw Error(se(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);Vn(s,e.memoizedState)||(tn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function Y0(){}function q0(t,e){var n=ft,i=Cn(),r=e(),s=!Vn(i.memoizedState,r);if(s&&(i.memoizedState=r,tn=!0),i=i.queue,Ef(Q0.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Pt!==null&&Pt.memoizedState.tag&1){if(n.flags|=2048,Po(9,Z0.bind(null,n,i,r,e),void 0,null),Nt===null)throw Error(se(349));Mr&30||K0(n,e,r)}return r}function K0(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ft.updateQueue,e===null?(e={lastEffect:null,stores:null},ft.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Z0(t,e,n,i){e.value=n,e.getSnapshot=i,J0(e)&&eg(t)}function Q0(t,e,n){return n(function(){J0(e)&&eg(t)})}function J0(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Vn(t,n)}catch{return!0}}function eg(t){var e=gi(t,1);e!==null&&Hn(e,t,1,-1)}function tp(t){var e=Wn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ro,lastRenderedState:t},e.queue=t,t=t.dispatch=U_.bind(null,ft,t),[e.memoizedState,t]}function Po(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=ft.updateQueue,e===null?(e={lastEffect:null,stores:null},ft.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function tg(){return Cn().memoizedState}function Ba(t,e,n,i){var r=Wn();ft.flags|=t,r.memoizedState=Po(1|e,n,void 0,i===void 0?null:i)}function Fl(t,e,n,i){var r=Cn();i=i===void 0?null:i;var s=void 0;if(wt!==null){var o=wt.memoizedState;if(s=o.destroy,i!==null&&yf(i,o.deps)){r.memoizedState=Po(e,n,s,i);return}}ft.flags|=t,r.memoizedState=Po(1|e,n,s,i)}function np(t,e){return Ba(8390656,8,t,e)}function Ef(t,e){return Fl(2048,8,t,e)}function ng(t,e){return Fl(4,2,t,e)}function ig(t,e){return Fl(4,4,t,e)}function rg(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function sg(t,e,n){return n=n!=null?n.concat([t]):null,Fl(4,4,rg.bind(null,e,t),n)}function wf(){}function og(t,e){var n=Cn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&yf(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function ag(t,e){var n=Cn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&yf(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function lg(t,e,n){return Mr&21?(Vn(n,e)||(n=h0(),ft.lanes|=n,Er|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,tn=!0),t.memoizedState=n)}function D_(t,e){var n=rt;rt=n!==0&&4>n?n:4,t(!0);var i=xc.transition;xc.transition={};try{t(!1),e()}finally{rt=n,xc.transition=i}}function cg(){return Cn().memoizedState}function I_(t,e,n){var i=Vi(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},ug(t))dg(e,n);else if(n=W0(t,e,n,i),n!==null){var r=qt();Hn(n,t,i,r),fg(n,e,i)}}function U_(t,e,n){var i=Vi(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(ug(t))dg(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,Vn(a,o)){var l=e.interleaved;l===null?(r.next=r,mf(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=W0(t,e,r,i),n!==null&&(r=qt(),Hn(n,t,i,r),fg(n,e,i))}}function ug(t){var e=t.alternate;return t===ft||e!==null&&e===ft}function dg(t,e){lo=gl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function fg(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,ef(t,n)}}var vl={readContext:bn,useCallback:kt,useContext:kt,useEffect:kt,useImperativeHandle:kt,useInsertionEffect:kt,useLayoutEffect:kt,useMemo:kt,useReducer:kt,useRef:kt,useState:kt,useDebugValue:kt,useDeferredValue:kt,useTransition:kt,useMutableSource:kt,useSyncExternalStore:kt,useId:kt,unstable_isNewReconciler:!1},F_={readContext:bn,useCallback:function(t,e){return Wn().memoizedState=[t,e===void 0?null:e],t},useContext:bn,useEffect:np,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Ba(4194308,4,rg.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Ba(4194308,4,t,e)},useInsertionEffect:function(t,e){return Ba(4,2,t,e)},useMemo:function(t,e){var n=Wn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=Wn();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=I_.bind(null,ft,t),[i.memoizedState,t]},useRef:function(t){var e=Wn();return t={current:t},e.memoizedState=t},useState:tp,useDebugValue:wf,useDeferredValue:function(t){return Wn().memoizedState=t},useTransition:function(){var t=tp(!1),e=t[0];return t=D_.bind(null,t[1]),Wn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=ft,r=Wn();if(ut){if(n===void 0)throw Error(se(407));n=n()}else{if(n=e(),Nt===null)throw Error(se(349));Mr&30||K0(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,np(Q0.bind(null,i,s,t),[t]),i.flags|=2048,Po(9,Z0.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=Wn(),e=Nt.identifierPrefix;if(ut){var n=ui,i=ci;n=(i&~(1<<32-Bn(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=Co++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=L_++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},k_={readContext:bn,useCallback:og,useContext:bn,useEffect:Ef,useImperativeHandle:sg,useInsertionEffect:ng,useLayoutEffect:ig,useMemo:ag,useReducer:_c,useRef:tg,useState:function(){return _c(Ro)},useDebugValue:wf,useDeferredValue:function(t){var e=Cn();return lg(e,wt.memoizedState,t)},useTransition:function(){var t=_c(Ro)[0],e=Cn().memoizedState;return[t,e]},useMutableSource:Y0,useSyncExternalStore:q0,useId:cg,unstable_isNewReconciler:!1},O_={readContext:bn,useCallback:og,useContext:bn,useEffect:Ef,useImperativeHandle:sg,useInsertionEffect:ng,useLayoutEffect:ig,useMemo:ag,useReducer:yc,useRef:tg,useState:function(){return yc(Ro)},useDebugValue:wf,useDeferredValue:function(t){var e=Cn();return wt===null?e.memoizedState=t:lg(e,wt.memoizedState,t)},useTransition:function(){var t=yc(Ro)[0],e=Cn().memoizedState;return[t,e]},useMutableSource:Y0,useSyncExternalStore:q0,useId:cg,unstable_isNewReconciler:!1};function In(t,e){if(t&&t.defaultProps){e=ht({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function zu(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:ht({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var kl={isMounted:function(t){return(t=t._reactInternals)?Rr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=qt(),r=Vi(t),s=hi(i,r);s.payload=e,n!=null&&(s.callback=n),e=Bi(t,s,r),e!==null&&(Hn(e,t,r,i),Oa(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=qt(),r=Vi(t),s=hi(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Bi(t,s,r),e!==null&&(Hn(e,t,r,i),Oa(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=qt(),i=Vi(t),r=hi(n,i);r.tag=2,e!=null&&(r.callback=e),e=Bi(t,r,i),e!==null&&(Hn(e,t,i,n),Oa(e,t,i))}};function ip(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!Mo(n,i)||!Mo(r,s):!0}function hg(t,e,n){var i=!1,r=$i,s=e.contextType;return typeof s=="object"&&s!==null?s=bn(s):(r=rn(e)?yr:Gt.current,i=e.contextTypes,s=(i=i!=null)?vs(t,r):$i),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=kl,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function rp(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&kl.enqueueReplaceState(e,e.state,null)}function Bu(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},gf(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=bn(s):(s=rn(e)?yr:Gt.current,r.context=vs(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(zu(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&kl.enqueueReplaceState(r,r.state,null),pl(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Ss(t,e){try{var n="",i=e;do n+=fx(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function Sc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Hu(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var z_=typeof WeakMap=="function"?WeakMap:Map;function pg(t,e,n){n=hi(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){_l||(_l=!0,Zu=i),Hu(t,e)},n}function mg(t,e,n){n=hi(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){Hu(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Hu(t,e),typeof i!="function"&&(Hi===null?Hi=new Set([this]):Hi.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function sp(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new z_;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=J_.bind(null,t,e,n),e.then(t,t))}function op(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function ap(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=hi(-1,1),e.tag=2,Bi(n,e,1))),n.lanes|=1),t)}var B_=_i.ReactCurrentOwner,tn=!1;function $t(t,e,n,i){e.child=t===null?j0(e,null,n,i):_s(e,t.child,n,i)}function lp(t,e,n,i,r){n=n.render;var s=e.ref;return ds(e,r),i=Sf(t,e,n,i,s,r),n=Mf(),t!==null&&!tn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,vi(t,e,r)):(ut&&n&&cf(e),e.flags|=1,$t(t,e,i,r),e.child)}function cp(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!Lf(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,gg(t,e,s,i,r)):(t=ja(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Mo,n(o,i)&&t.ref===e.ref)return vi(t,e,r)}return e.flags|=1,t=Gi(s,i),t.ref=e.ref,t.return=e,e.child=t}function gg(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(Mo(s,i)&&t.ref===e.ref)if(tn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(tn=!0);else return e.lanes=t.lanes,vi(t,e,r)}return Vu(t,e,n,i,r)}function vg(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},st(ss,fn),fn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,st(ss,fn),fn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,st(ss,fn),fn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,st(ss,fn),fn|=i;return $t(t,e,r,n),e.child}function xg(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Vu(t,e,n,i,r){var s=rn(n)?yr:Gt.current;return s=vs(e,s),ds(e,r),n=Sf(t,e,n,i,s,r),i=Mf(),t!==null&&!tn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,vi(t,e,r)):(ut&&i&&cf(e),e.flags|=1,$t(t,e,n,r),e.child)}function up(t,e,n,i,r){if(rn(n)){var s=!0;cl(e)}else s=!1;if(ds(e,r),e.stateNode===null)Ha(t,e),hg(e,n,i),Bu(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=bn(c):(c=rn(n)?yr:Gt.current,c=vs(e,c));var f=n.getDerivedStateFromProps,h=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&rp(e,o,i,c),Ri=!1;var d=e.memoizedState;o.state=d,pl(e,i,o,r),l=e.memoizedState,a!==i||d!==l||nn.current||Ri?(typeof f=="function"&&(zu(e,n,f,i),l=e.memoizedState),(a=Ri||ip(e,n,a,i,d,l,c))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,X0(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:In(e.type,a),o.props=c,h=e.pendingProps,d=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=bn(l):(l=rn(n)?yr:Gt.current,l=vs(e,l));var p=n.getDerivedStateFromProps;(f=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||d!==l)&&rp(e,o,i,l),Ri=!1,d=e.memoizedState,o.state=d,pl(e,i,o,r);var y=e.memoizedState;a!==h||d!==y||nn.current||Ri?(typeof p=="function"&&(zu(e,n,p,i),y=e.memoizedState),(c=Ri||ip(e,n,c,i,d,y,l)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,y,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,y,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=y),o.props=i,o.state=y,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),i=!1)}return Gu(t,e,n,i,s,r)}function Gu(t,e,n,i,r,s){xg(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&qh(e,n,!1),vi(t,e,s);i=e.stateNode,B_.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=_s(e,t.child,null,s),e.child=_s(e,null,a,s)):$t(t,e,a,s),e.memoizedState=i.state,r&&qh(e,n,!0),e.child}function _g(t){var e=t.stateNode;e.pendingContext?Yh(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Yh(t,e.context,!1),vf(t,e.containerInfo)}function dp(t,e,n,i,r){return xs(),df(r),e.flags|=256,$t(t,e,n,i),e.child}var ju={dehydrated:null,treeContext:null,retryLane:0};function Wu(t){return{baseLanes:t,cachePool:null,transitions:null}}function yg(t,e,n){var i=e.pendingProps,r=dt.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),st(dt,r&1),t===null)return ku(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Bl(o,i,0,null),t=_r(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Wu(n),e.memoizedState=ju,t):Tf(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return H_(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Gi(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=Gi(a,s):(s=_r(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?Wu(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=ju,i}return s=t.child,t=s.sibling,i=Gi(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Tf(t,e){return e=Bl({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function aa(t,e,n,i){return i!==null&&df(i),_s(e,t.child,null,n),t=Tf(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function H_(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=Sc(Error(se(422))),aa(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Bl({mode:"visible",children:i.children},r,0,null),s=_r(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&_s(e,t.child,null,o),e.child.memoizedState=Wu(o),e.memoizedState=ju,s);if(!(e.mode&1))return aa(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(se(419)),i=Sc(s,i,void 0),aa(t,e,o,i)}if(a=(o&t.childLanes)!==0,tn||a){if(i=Nt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,gi(t,r),Hn(i,t,r,-1))}return Nf(),i=Sc(Error(se(421))),aa(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=ey.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,pn=zi(r.nextSibling),mn=e,ut=!0,Fn=null,t!==null&&(Sn[Mn++]=ci,Sn[Mn++]=ui,Sn[Mn++]=Sr,ci=t.id,ui=t.overflow,Sr=e),e=Tf(e,i.children),e.flags|=4096,e)}function fp(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Ou(t.return,e,n)}function Mc(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function Sg(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if($t(t,e,i.children,n),i=dt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&fp(t,n,e);else if(t.tag===19)fp(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(st(dt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&ml(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Mc(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&ml(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Mc(e,!0,n,null,s);break;case"together":Mc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Ha(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function vi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Er|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(se(153));if(e.child!==null){for(t=e.child,n=Gi(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Gi(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function V_(t,e,n){switch(e.tag){case 3:_g(e),xs();break;case 5:$0(e);break;case 1:rn(e.type)&&cl(e);break;case 4:vf(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;st(fl,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(st(dt,dt.current&1),e.flags|=128,null):n&e.child.childLanes?yg(t,e,n):(st(dt,dt.current&1),t=vi(t,e,n),t!==null?t.sibling:null);st(dt,dt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return Sg(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),st(dt,dt.current),i)break;return null;case 22:case 23:return e.lanes=0,vg(t,e,n)}return vi(t,e,n)}var Mg,Xu,Eg,wg;Mg=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Xu=function(){};Eg=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,mr(Kn.current);var s=null;switch(n){case"input":r=pu(t,r),i=pu(t,i),s=[];break;case"select":r=ht({},r,{value:void 0}),i=ht({},i,{value:void 0}),s=[];break;case"textarea":r=vu(t,r),i=vu(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=al)}_u(n,i);var o;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(mo.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(mo.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&at("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};wg=function(t,e,n,i){n!==i&&(e.flags|=4)};function js(t,e){if(!ut)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Ot(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function G_(t,e,n){var i=e.pendingProps;switch(uf(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ot(e),null;case 1:return rn(e.type)&&ll(),Ot(e),null;case 3:return i=e.stateNode,ys(),ct(nn),ct(Gt),_f(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(sa(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Fn!==null&&(ed(Fn),Fn=null))),Xu(t,e),Ot(e),null;case 5:xf(e);var r=mr(bo.current);if(n=e.type,t!==null&&e.stateNode!=null)Eg(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(se(166));return Ot(e),null}if(t=mr(Kn.current),sa(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[Yn]=e,i[To]=s,t=(e.mode&1)!==0,n){case"dialog":at("cancel",i),at("close",i);break;case"iframe":case"object":case"embed":at("load",i);break;case"video":case"audio":for(r=0;r<to.length;r++)at(to[r],i);break;case"source":at("error",i);break;case"img":case"image":case"link":at("error",i),at("load",i);break;case"details":at("toggle",i);break;case"input":Sh(i,s),at("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},at("invalid",i);break;case"textarea":Eh(i,s),at("invalid",i)}_u(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&ra(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&ra(i.textContent,a,t),r=["children",""+a]):mo.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&at("scroll",i)}switch(n){case"input":Ko(i),Mh(i,s,!0);break;case"textarea":Ko(i),wh(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=al)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Qm(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[Yn]=e,t[To]=i,Mg(t,e,!1,!1),e.stateNode=t;e:{switch(o=yu(n,i),n){case"dialog":at("cancel",t),at("close",t),r=i;break;case"iframe":case"object":case"embed":at("load",t),r=i;break;case"video":case"audio":for(r=0;r<to.length;r++)at(to[r],t);r=i;break;case"source":at("error",t),r=i;break;case"img":case"image":case"link":at("error",t),at("load",t),r=i;break;case"details":at("toggle",t),r=i;break;case"input":Sh(t,i),r=pu(t,i),at("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=ht({},i,{value:void 0}),at("invalid",t);break;case"textarea":Eh(t,i),r=vu(t,i),at("invalid",t);break;default:r=i}_u(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?t0(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Jm(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&go(t,l):typeof l=="number"&&go(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(mo.hasOwnProperty(s)?l!=null&&s==="onScroll"&&at("scroll",t):l!=null&&Yd(t,s,l,o))}switch(n){case"input":Ko(t),Mh(t,i,!1);break;case"textarea":Ko(t),wh(t);break;case"option":i.value!=null&&t.setAttribute("value",""+Xi(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?as(t,!!i.multiple,s,!1):i.defaultValue!=null&&as(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=al)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Ot(e),null;case 6:if(t&&e.stateNode!=null)wg(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(se(166));if(n=mr(bo.current),mr(Kn.current),sa(e)){if(i=e.stateNode,n=e.memoizedProps,i[Yn]=e,(s=i.nodeValue!==n)&&(t=mn,t!==null))switch(t.tag){case 3:ra(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ra(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[Yn]=e,e.stateNode=i}return Ot(e),null;case 13:if(ct(dt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ut&&pn!==null&&e.mode&1&&!(e.flags&128))V0(),xs(),e.flags|=98560,s=!1;else if(s=sa(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(se(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(se(317));s[Yn]=e}else xs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Ot(e),s=!1}else Fn!==null&&(ed(Fn),Fn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||dt.current&1?Tt===0&&(Tt=3):Nf())),e.updateQueue!==null&&(e.flags|=4),Ot(e),null);case 4:return ys(),Xu(t,e),t===null&&Eo(e.stateNode.containerInfo),Ot(e),null;case 10:return pf(e.type._context),Ot(e),null;case 17:return rn(e.type)&&ll(),Ot(e),null;case 19:if(ct(dt),s=e.memoizedState,s===null)return Ot(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)js(s,!1);else{if(Tt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=ml(t),o!==null){for(e.flags|=128,js(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return st(dt,dt.current&1|2),e.child}t=t.sibling}s.tail!==null&&_t()>Ms&&(e.flags|=128,i=!0,js(s,!1),e.lanes=4194304)}else{if(!i)if(t=ml(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),js(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ut)return Ot(e),null}else 2*_t()-s.renderingStartTime>Ms&&n!==1073741824&&(e.flags|=128,i=!0,js(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=_t(),e.sibling=null,n=dt.current,st(dt,i?n&1|2:n&1),e):(Ot(e),null);case 22:case 23:return Pf(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?fn&1073741824&&(Ot(e),e.subtreeFlags&6&&(e.flags|=8192)):Ot(e),null;case 24:return null;case 25:return null}throw Error(se(156,e.tag))}function j_(t,e){switch(uf(e),e.tag){case 1:return rn(e.type)&&ll(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return ys(),ct(nn),ct(Gt),_f(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return xf(e),null;case 13:if(ct(dt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(se(340));xs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ct(dt),null;case 4:return ys(),null;case 10:return pf(e.type._context),null;case 22:case 23:return Pf(),null;case 24:return null;default:return null}}var la=!1,Vt=!1,W_=typeof WeakSet=="function"?WeakSet:Set,ve=null;function rs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){mt(t,e,i)}else n.current=null}function $u(t,e,n){try{n()}catch(i){mt(t,e,i)}}var hp=!1;function X_(t,e){if(Pu=rl,t=R0(),lf(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,f=0,h=t,d=null;t:for(;;){for(var p;h!==n||r!==0&&h.nodeType!==3||(a=o+r),h!==s||i!==0&&h.nodeType!==3||(l=o+i),h.nodeType===3&&(o+=h.nodeValue.length),(p=h.firstChild)!==null;)d=h,h=p;for(;;){if(h===t)break t;if(d===n&&++c===r&&(a=o),d===s&&++f===i&&(l=o),(p=h.nextSibling)!==null)break;h=d,d=h.parentNode}h=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Nu={focusedElem:t,selectionRange:n},rl=!1,ve=e;ve!==null;)if(e=ve,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,ve=t;else for(;ve!==null;){e=ve;try{var y=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var S=y.memoizedProps,m=y.memoizedState,u=e.stateNode,v=u.getSnapshotBeforeUpdate(e.elementType===e.type?S:In(e.type,S),m);u.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var g=e.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(se(163))}}catch(M){mt(e,e.return,M)}if(t=e.sibling,t!==null){t.return=e.return,ve=t;break}ve=e.return}return y=hp,hp=!1,y}function co(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&$u(e,n,s)}r=r.next}while(r!==i)}}function Ol(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Yu(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Tg(t){var e=t.alternate;e!==null&&(t.alternate=null,Tg(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Yn],delete e[To],delete e[Iu],delete e[C_],delete e[R_])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Ag(t){return t.tag===5||t.tag===3||t.tag===4}function pp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Ag(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function qu(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=al));else if(i!==4&&(t=t.child,t!==null))for(qu(t,e,n),t=t.sibling;t!==null;)qu(t,e,n),t=t.sibling}function Ku(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Ku(t,e,n),t=t.sibling;t!==null;)Ku(t,e,n),t=t.sibling}var It=null,Un=!1;function Si(t,e,n){for(n=n.child;n!==null;)bg(t,e,n),n=n.sibling}function bg(t,e,n){if(qn&&typeof qn.onCommitFiberUnmount=="function")try{qn.onCommitFiberUnmount(Pl,n)}catch{}switch(n.tag){case 5:Vt||rs(n,e);case 6:var i=It,r=Un;It=null,Si(t,e,n),It=i,Un=r,It!==null&&(Un?(t=It,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):It.removeChild(n.stateNode));break;case 18:It!==null&&(Un?(t=It,n=n.stateNode,t.nodeType===8?mc(t.parentNode,n):t.nodeType===1&&mc(t,n),yo(t)):mc(It,n.stateNode));break;case 4:i=It,r=Un,It=n.stateNode.containerInfo,Un=!0,Si(t,e,n),It=i,Un=r;break;case 0:case 11:case 14:case 15:if(!Vt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&$u(n,e,o),r=r.next}while(r!==i)}Si(t,e,n);break;case 1:if(!Vt&&(rs(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){mt(n,e,a)}Si(t,e,n);break;case 21:Si(t,e,n);break;case 22:n.mode&1?(Vt=(i=Vt)||n.memoizedState!==null,Si(t,e,n),Vt=i):Si(t,e,n);break;default:Si(t,e,n)}}function mp(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new W_),e.forEach(function(i){var r=ty.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Pn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:It=a.stateNode,Un=!1;break e;case 3:It=a.stateNode.containerInfo,Un=!0;break e;case 4:It=a.stateNode.containerInfo,Un=!0;break e}a=a.return}if(It===null)throw Error(se(160));bg(s,o,r),It=null,Un=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){mt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Cg(e,t),e=e.sibling}function Cg(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Pn(e,t),jn(t),i&4){try{co(3,t,t.return),Ol(3,t)}catch(S){mt(t,t.return,S)}try{co(5,t,t.return)}catch(S){mt(t,t.return,S)}}break;case 1:Pn(e,t),jn(t),i&512&&n!==null&&rs(n,n.return);break;case 5:if(Pn(e,t),jn(t),i&512&&n!==null&&rs(n,n.return),t.flags&32){var r=t.stateNode;try{go(r,"")}catch(S){mt(t,t.return,S)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Km(r,s),yu(a,o);var c=yu(a,s);for(o=0;o<l.length;o+=2){var f=l[o],h=l[o+1];f==="style"?t0(r,h):f==="dangerouslySetInnerHTML"?Jm(r,h):f==="children"?go(r,h):Yd(r,f,h,c)}switch(a){case"input":mu(r,s);break;case"textarea":Zm(r,s);break;case"select":var d=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?as(r,!!s.multiple,p,!1):d!==!!s.multiple&&(s.defaultValue!=null?as(r,!!s.multiple,s.defaultValue,!0):as(r,!!s.multiple,s.multiple?[]:"",!1))}r[To]=s}catch(S){mt(t,t.return,S)}}break;case 6:if(Pn(e,t),jn(t),i&4){if(t.stateNode===null)throw Error(se(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(S){mt(t,t.return,S)}}break;case 3:if(Pn(e,t),jn(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{yo(e.containerInfo)}catch(S){mt(t,t.return,S)}break;case 4:Pn(e,t),jn(t);break;case 13:Pn(e,t),jn(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Cf=_t())),i&4&&mp(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(Vt=(c=Vt)||f,Pn(e,t),Vt=c):Pn(e,t),jn(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!f&&t.mode&1)for(ve=t,f=t.child;f!==null;){for(h=ve=f;ve!==null;){switch(d=ve,p=d.child,d.tag){case 0:case 11:case 14:case 15:co(4,d,d.return);break;case 1:rs(d,d.return);var y=d.stateNode;if(typeof y.componentWillUnmount=="function"){i=d,n=d.return;try{e=i,y.props=e.memoizedProps,y.state=e.memoizedState,y.componentWillUnmount()}catch(S){mt(i,n,S)}}break;case 5:rs(d,d.return);break;case 22:if(d.memoizedState!==null){vp(h);continue}}p!==null?(p.return=d,ve=p):vp(h)}f=f.sibling}e:for(f=null,h=t;;){if(h.tag===5){if(f===null){f=h;try{r=h.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=e0("display",o))}catch(S){mt(t,t.return,S)}}}else if(h.tag===6){if(f===null)try{h.stateNode.nodeValue=c?"":h.memoizedProps}catch(S){mt(t,t.return,S)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;f===h&&(f=null),h=h.return}f===h&&(f=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Pn(e,t),jn(t),i&4&&mp(t);break;case 21:break;default:Pn(e,t),jn(t)}}function jn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Ag(n)){var i=n;break e}n=n.return}throw Error(se(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(go(r,""),i.flags&=-33);var s=pp(t);Ku(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=pp(t);qu(t,a,o);break;default:throw Error(se(161))}}catch(l){mt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function $_(t,e,n){ve=t,Rg(t)}function Rg(t,e,n){for(var i=(t.mode&1)!==0;ve!==null;){var r=ve,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||la;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||Vt;a=la;var c=Vt;if(la=o,(Vt=l)&&!c)for(ve=r;ve!==null;)o=ve,l=o.child,o.tag===22&&o.memoizedState!==null?xp(r):l!==null?(l.return=o,ve=l):xp(r);for(;s!==null;)ve=s,Rg(s),s=s.sibling;ve=r,la=a,Vt=c}gp(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,ve=s):gp(t)}}function gp(t){for(;ve!==null;){var e=ve;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Vt||Ol(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Vt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:In(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&ep(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}ep(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var f=c.memoizedState;if(f!==null){var h=f.dehydrated;h!==null&&yo(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(se(163))}Vt||e.flags&512&&Yu(e)}catch(d){mt(e,e.return,d)}}if(e===t){ve=null;break}if(n=e.sibling,n!==null){n.return=e.return,ve=n;break}ve=e.return}}function vp(t){for(;ve!==null;){var e=ve;if(e===t){ve=null;break}var n=e.sibling;if(n!==null){n.return=e.return,ve=n;break}ve=e.return}}function xp(t){for(;ve!==null;){var e=ve;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Ol(4,e)}catch(l){mt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){mt(e,r,l)}}var s=e.return;try{Yu(e)}catch(l){mt(e,s,l)}break;case 5:var o=e.return;try{Yu(e)}catch(l){mt(e,o,l)}}}catch(l){mt(e,e.return,l)}if(e===t){ve=null;break}var a=e.sibling;if(a!==null){a.return=e.return,ve=a;break}ve=e.return}}var Y_=Math.ceil,xl=_i.ReactCurrentDispatcher,Af=_i.ReactCurrentOwner,An=_i.ReactCurrentBatchConfig,Ke=0,Nt=null,Et=null,Ut=0,fn=0,ss=Zi(0),Tt=0,No=null,Er=0,zl=0,bf=0,uo=null,en=null,Cf=0,Ms=1/0,oi=null,_l=!1,Zu=null,Hi=null,ca=!1,Ii=null,yl=0,fo=0,Qu=null,Va=-1,Ga=0;function qt(){return Ke&6?_t():Va!==-1?Va:Va=_t()}function Vi(t){return t.mode&1?Ke&2&&Ut!==0?Ut&-Ut:N_.transition!==null?(Ga===0&&(Ga=h0()),Ga):(t=rt,t!==0||(t=window.event,t=t===void 0?16:y0(t.type)),t):1}function Hn(t,e,n,i){if(50<fo)throw fo=0,Qu=null,Error(se(185));zo(t,n,i),(!(Ke&2)||t!==Nt)&&(t===Nt&&(!(Ke&2)&&(zl|=n),Tt===4&&Ni(t,Ut)),sn(t,i),n===1&&Ke===0&&!(e.mode&1)&&(Ms=_t()+500,Ul&&Qi()))}function sn(t,e){var n=t.callbackNode;Nx(t,e);var i=il(t,t===Nt?Ut:0);if(i===0)n!==null&&bh(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&bh(n),e===1)t.tag===0?P_(_p.bind(null,t)):z0(_p.bind(null,t)),A_(function(){!(Ke&6)&&Qi()}),n=null;else{switch(p0(i)){case 1:n=Jd;break;case 4:n=d0;break;case 16:n=nl;break;case 536870912:n=f0;break;default:n=nl}n=kg(n,Pg.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Pg(t,e){if(Va=-1,Ga=0,Ke&6)throw Error(se(327));var n=t.callbackNode;if(fs()&&t.callbackNode!==n)return null;var i=il(t,t===Nt?Ut:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Sl(t,i);else{e=i;var r=Ke;Ke|=2;var s=Lg();(Nt!==t||Ut!==e)&&(oi=null,Ms=_t()+500,xr(t,e));do try{Z_();break}catch(a){Ng(t,a)}while(!0);hf(),xl.current=s,Ke=r,Et!==null?e=0:(Nt=null,Ut=0,e=Tt)}if(e!==0){if(e===2&&(r=Tu(t),r!==0&&(i=r,e=Ju(t,r))),e===1)throw n=No,xr(t,0),Ni(t,i),sn(t,_t()),n;if(e===6)Ni(t,i);else{if(r=t.current.alternate,!(i&30)&&!q_(r)&&(e=Sl(t,i),e===2&&(s=Tu(t),s!==0&&(i=s,e=Ju(t,s))),e===1))throw n=No,xr(t,0),Ni(t,i),sn(t,_t()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(se(345));case 2:lr(t,en,oi);break;case 3:if(Ni(t,i),(i&130023424)===i&&(e=Cf+500-_t(),10<e)){if(il(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){qt(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Du(lr.bind(null,t,en,oi),e);break}lr(t,en,oi);break;case 4:if(Ni(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-Bn(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=_t()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*Y_(i/1960))-i,10<i){t.timeoutHandle=Du(lr.bind(null,t,en,oi),i);break}lr(t,en,oi);break;case 5:lr(t,en,oi);break;default:throw Error(se(329))}}}return sn(t,_t()),t.callbackNode===n?Pg.bind(null,t):null}function Ju(t,e){var n=uo;return t.current.memoizedState.isDehydrated&&(xr(t,e).flags|=256),t=Sl(t,e),t!==2&&(e=en,en=n,e!==null&&ed(e)),t}function ed(t){en===null?en=t:en.push.apply(en,t)}function q_(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!Vn(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Ni(t,e){for(e&=~bf,e&=~zl,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Bn(e),i=1<<n;t[n]=-1,e&=~i}}function _p(t){if(Ke&6)throw Error(se(327));fs();var e=il(t,0);if(!(e&1))return sn(t,_t()),null;var n=Sl(t,e);if(t.tag!==0&&n===2){var i=Tu(t);i!==0&&(e=i,n=Ju(t,i))}if(n===1)throw n=No,xr(t,0),Ni(t,e),sn(t,_t()),n;if(n===6)throw Error(se(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,lr(t,en,oi),sn(t,_t()),null}function Rf(t,e){var n=Ke;Ke|=1;try{return t(e)}finally{Ke=n,Ke===0&&(Ms=_t()+500,Ul&&Qi())}}function wr(t){Ii!==null&&Ii.tag===0&&!(Ke&6)&&fs();var e=Ke;Ke|=1;var n=An.transition,i=rt;try{if(An.transition=null,rt=1,t)return t()}finally{rt=i,An.transition=n,Ke=e,!(Ke&6)&&Qi()}}function Pf(){fn=ss.current,ct(ss)}function xr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,T_(n)),Et!==null)for(n=Et.return;n!==null;){var i=n;switch(uf(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&ll();break;case 3:ys(),ct(nn),ct(Gt),_f();break;case 5:xf(i);break;case 4:ys();break;case 13:ct(dt);break;case 19:ct(dt);break;case 10:pf(i.type._context);break;case 22:case 23:Pf()}n=n.return}if(Nt=t,Et=t=Gi(t.current,null),Ut=fn=e,Tt=0,No=null,bf=zl=Er=0,en=uo=null,pr!==null){for(e=0;e<pr.length;e++)if(n=pr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}pr=null}return t}function Ng(t,e){do{var n=Et;try{if(hf(),za.current=vl,gl){for(var i=ft.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}gl=!1}if(Mr=0,Pt=wt=ft=null,lo=!1,Co=0,Af.current=null,n===null||n.return===null){Tt=1,No=e,Et=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Ut,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,f=a,h=f.tag;if(!(f.mode&1)&&(h===0||h===11||h===15)){var d=f.alternate;d?(f.updateQueue=d.updateQueue,f.memoizedState=d.memoizedState,f.lanes=d.lanes):(f.updateQueue=null,f.memoizedState=null)}var p=op(o);if(p!==null){p.flags&=-257,ap(p,o,a,s,e),p.mode&1&&sp(s,c,e),e=p,l=c;var y=e.updateQueue;if(y===null){var S=new Set;S.add(l),e.updateQueue=S}else y.add(l);break e}else{if(!(e&1)){sp(s,c,e),Nf();break e}l=Error(se(426))}}else if(ut&&a.mode&1){var m=op(o);if(m!==null){!(m.flags&65536)&&(m.flags|=256),ap(m,o,a,s,e),df(Ss(l,a));break e}}s=l=Ss(l,a),Tt!==4&&(Tt=2),uo===null?uo=[s]:uo.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var u=pg(s,l,e);Jh(s,u);break e;case 1:a=l;var v=s.type,g=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(Hi===null||!Hi.has(g)))){s.flags|=65536,e&=-e,s.lanes|=e;var M=mg(s,a,e);Jh(s,M);break e}}s=s.return}while(s!==null)}Ig(n)}catch(P){e=P,Et===n&&n!==null&&(Et=n=n.return);continue}break}while(!0)}function Lg(){var t=xl.current;return xl.current=vl,t===null?vl:t}function Nf(){(Tt===0||Tt===3||Tt===2)&&(Tt=4),Nt===null||!(Er&268435455)&&!(zl&268435455)||Ni(Nt,Ut)}function Sl(t,e){var n=Ke;Ke|=2;var i=Lg();(Nt!==t||Ut!==e)&&(oi=null,xr(t,e));do try{K_();break}catch(r){Ng(t,r)}while(!0);if(hf(),Ke=n,xl.current=i,Et!==null)throw Error(se(261));return Nt=null,Ut=0,Tt}function K_(){for(;Et!==null;)Dg(Et)}function Z_(){for(;Et!==null&&!Mx();)Dg(Et)}function Dg(t){var e=Fg(t.alternate,t,fn);t.memoizedProps=t.pendingProps,e===null?Ig(t):Et=e,Af.current=null}function Ig(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=j_(n,e),n!==null){n.flags&=32767,Et=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Tt=6,Et=null;return}}else if(n=G_(n,e,fn),n!==null){Et=n;return}if(e=e.sibling,e!==null){Et=e;return}Et=e=t}while(e!==null);Tt===0&&(Tt=5)}function lr(t,e,n){var i=rt,r=An.transition;try{An.transition=null,rt=1,Q_(t,e,n,i)}finally{An.transition=r,rt=i}return null}function Q_(t,e,n,i){do fs();while(Ii!==null);if(Ke&6)throw Error(se(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(se(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(Lx(t,s),t===Nt&&(Et=Nt=null,Ut=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ca||(ca=!0,kg(nl,function(){return fs(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=An.transition,An.transition=null;var o=rt;rt=1;var a=Ke;Ke|=4,Af.current=null,X_(t,n),Cg(n,t),x_(Nu),rl=!!Pu,Nu=Pu=null,t.current=n,$_(n),Ex(),Ke=a,rt=o,An.transition=s}else t.current=n;if(ca&&(ca=!1,Ii=t,yl=r),s=t.pendingLanes,s===0&&(Hi=null),Ax(n.stateNode),sn(t,_t()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(_l)throw _l=!1,t=Zu,Zu=null,t;return yl&1&&t.tag!==0&&fs(),s=t.pendingLanes,s&1?t===Qu?fo++:(fo=0,Qu=t):fo=0,Qi(),null}function fs(){if(Ii!==null){var t=p0(yl),e=An.transition,n=rt;try{if(An.transition=null,rt=16>t?16:t,Ii===null)var i=!1;else{if(t=Ii,Ii=null,yl=0,Ke&6)throw Error(se(331));var r=Ke;for(Ke|=4,ve=t.current;ve!==null;){var s=ve,o=s.child;if(ve.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(ve=c;ve!==null;){var f=ve;switch(f.tag){case 0:case 11:case 15:co(8,f,s)}var h=f.child;if(h!==null)h.return=f,ve=h;else for(;ve!==null;){f=ve;var d=f.sibling,p=f.return;if(Tg(f),f===c){ve=null;break}if(d!==null){d.return=p,ve=d;break}ve=p}}}var y=s.alternate;if(y!==null){var S=y.child;if(S!==null){y.child=null;do{var m=S.sibling;S.sibling=null,S=m}while(S!==null)}}ve=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,ve=o;else e:for(;ve!==null;){if(s=ve,s.flags&2048)switch(s.tag){case 0:case 11:case 15:co(9,s,s.return)}var u=s.sibling;if(u!==null){u.return=s.return,ve=u;break e}ve=s.return}}var v=t.current;for(ve=v;ve!==null;){o=ve;var g=o.child;if(o.subtreeFlags&2064&&g!==null)g.return=o,ve=g;else e:for(o=v;ve!==null;){if(a=ve,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Ol(9,a)}}catch(P){mt(a,a.return,P)}if(a===o){ve=null;break e}var M=a.sibling;if(M!==null){M.return=a.return,ve=M;break e}ve=a.return}}if(Ke=r,Qi(),qn&&typeof qn.onPostCommitFiberRoot=="function")try{qn.onPostCommitFiberRoot(Pl,t)}catch{}i=!0}return i}finally{rt=n,An.transition=e}}return!1}function yp(t,e,n){e=Ss(n,e),e=pg(t,e,1),t=Bi(t,e,1),e=qt(),t!==null&&(zo(t,1,e),sn(t,e))}function mt(t,e,n){if(t.tag===3)yp(t,t,n);else for(;e!==null;){if(e.tag===3){yp(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Hi===null||!Hi.has(i))){t=Ss(n,t),t=mg(e,t,1),e=Bi(e,t,1),t=qt(),e!==null&&(zo(e,1,t),sn(e,t));break}}e=e.return}}function J_(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=qt(),t.pingedLanes|=t.suspendedLanes&n,Nt===t&&(Ut&n)===n&&(Tt===4||Tt===3&&(Ut&130023424)===Ut&&500>_t()-Cf?xr(t,0):bf|=n),sn(t,e)}function Ug(t,e){e===0&&(t.mode&1?(e=Jo,Jo<<=1,!(Jo&130023424)&&(Jo=4194304)):e=1);var n=qt();t=gi(t,e),t!==null&&(zo(t,e,n),sn(t,n))}function ey(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Ug(t,n)}function ty(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(se(314))}i!==null&&i.delete(e),Ug(t,n)}var Fg;Fg=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||nn.current)tn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return tn=!1,V_(t,e,n);tn=!!(t.flags&131072)}else tn=!1,ut&&e.flags&1048576&&B0(e,dl,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Ha(t,e),t=e.pendingProps;var r=vs(e,Gt.current);ds(e,n),r=Sf(null,e,i,t,r,n);var s=Mf();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,rn(i)?(s=!0,cl(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,gf(e),r.updater=kl,e.stateNode=r,r._reactInternals=e,Bu(e,i,t,n),e=Gu(null,e,i,!0,s,n)):(e.tag=0,ut&&s&&cf(e),$t(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Ha(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=iy(i),t=In(i,t),r){case 0:e=Vu(null,e,i,t,n);break e;case 1:e=up(null,e,i,t,n);break e;case 11:e=lp(null,e,i,t,n);break e;case 14:e=cp(null,e,i,In(i.type,t),n);break e}throw Error(se(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:In(i,r),Vu(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:In(i,r),up(t,e,i,r,n);case 3:e:{if(_g(e),t===null)throw Error(se(387));i=e.pendingProps,s=e.memoizedState,r=s.element,X0(t,e),pl(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Ss(Error(se(423)),e),e=dp(t,e,i,n,r);break e}else if(i!==r){r=Ss(Error(se(424)),e),e=dp(t,e,i,n,r);break e}else for(pn=zi(e.stateNode.containerInfo.firstChild),mn=e,ut=!0,Fn=null,n=j0(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(xs(),i===r){e=vi(t,e,n);break e}$t(t,e,i,n)}e=e.child}return e;case 5:return $0(e),t===null&&ku(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,Lu(i,r)?o=null:s!==null&&Lu(i,s)&&(e.flags|=32),xg(t,e),$t(t,e,o,n),e.child;case 6:return t===null&&ku(e),null;case 13:return yg(t,e,n);case 4:return vf(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=_s(e,null,i,n):$t(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:In(i,r),lp(t,e,i,r,n);case 7:return $t(t,e,e.pendingProps,n),e.child;case 8:return $t(t,e,e.pendingProps.children,n),e.child;case 12:return $t(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,st(fl,i._currentValue),i._currentValue=o,s!==null)if(Vn(s.value,o)){if(s.children===r.children&&!nn.current){e=vi(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=hi(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var f=c.pending;f===null?l.next=l:(l.next=f.next,f.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Ou(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(se(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Ou(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}$t(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,ds(e,n),r=bn(r),i=i(r),e.flags|=1,$t(t,e,i,n),e.child;case 14:return i=e.type,r=In(i,e.pendingProps),r=In(i.type,r),cp(t,e,i,r,n);case 15:return gg(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:In(i,r),Ha(t,e),e.tag=1,rn(i)?(t=!0,cl(e)):t=!1,ds(e,n),hg(e,i,r),Bu(e,i,r,n),Gu(null,e,i,!0,t,n);case 19:return Sg(t,e,n);case 22:return vg(t,e,n)}throw Error(se(156,e.tag))};function kg(t,e){return u0(t,e)}function ny(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function wn(t,e,n,i){return new ny(t,e,n,i)}function Lf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function iy(t){if(typeof t=="function")return Lf(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Kd)return 11;if(t===Zd)return 14}return 2}function Gi(t,e){var n=t.alternate;return n===null?(n=wn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function ja(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")Lf(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case qr:return _r(n.children,r,s,e);case qd:o=8,r|=8;break;case uu:return t=wn(12,n,e,r|2),t.elementType=uu,t.lanes=s,t;case du:return t=wn(13,n,e,r),t.elementType=du,t.lanes=s,t;case fu:return t=wn(19,n,e,r),t.elementType=fu,t.lanes=s,t;case $m:return Bl(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Wm:o=10;break e;case Xm:o=9;break e;case Kd:o=11;break e;case Zd:o=14;break e;case Ci:o=16,i=null;break e}throw Error(se(130,t==null?t:typeof t,""))}return e=wn(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function _r(t,e,n,i){return t=wn(7,t,i,e),t.lanes=n,t}function Bl(t,e,n,i){return t=wn(22,t,i,e),t.elementType=$m,t.lanes=n,t.stateNode={isHidden:!1},t}function Ec(t,e,n){return t=wn(6,t,null,e),t.lanes=n,t}function wc(t,e,n){return e=wn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function ry(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=rc(0),this.expirationTimes=rc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=rc(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Df(t,e,n,i,r,s,o,a,l){return t=new ry(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=wn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},gf(s),t}function sy(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Yr,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function Og(t){if(!t)return $i;t=t._reactInternals;e:{if(Rr(t)!==t||t.tag!==1)throw Error(se(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(rn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(se(171))}if(t.tag===1){var n=t.type;if(rn(n))return O0(t,n,e)}return e}function zg(t,e,n,i,r,s,o,a,l){return t=Df(n,i,!0,t,r,s,o,a,l),t.context=Og(null),n=t.current,i=qt(),r=Vi(n),s=hi(i,r),s.callback=e??null,Bi(n,s,r),t.current.lanes=r,zo(t,r,i),sn(t,i),t}function Hl(t,e,n,i){var r=e.current,s=qt(),o=Vi(r);return n=Og(n),e.context===null?e.context=n:e.pendingContext=n,e=hi(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=Bi(r,e,o),t!==null&&(Hn(t,r,o,s),Oa(t,r,o)),o}function Ml(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Sp(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function If(t,e){Sp(t,e),(t=t.alternate)&&Sp(t,e)}function oy(){return null}var Bg=typeof reportError=="function"?reportError:function(t){console.error(t)};function Uf(t){this._internalRoot=t}Vl.prototype.render=Uf.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(se(409));Hl(t,e,null,null)};Vl.prototype.unmount=Uf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;wr(function(){Hl(null,t,null,null)}),e[mi]=null}};function Vl(t){this._internalRoot=t}Vl.prototype.unstable_scheduleHydration=function(t){if(t){var e=v0();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Pi.length&&e!==0&&e<Pi[n].priority;n++);Pi.splice(n,0,t),n===0&&_0(t)}};function Ff(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Gl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Mp(){}function ay(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=Ml(o);s.call(c)}}var o=zg(e,i,t,0,null,!1,!1,"",Mp);return t._reactRootContainer=o,t[mi]=o.current,Eo(t.nodeType===8?t.parentNode:t),wr(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=Ml(l);a.call(c)}}var l=Df(t,0,!1,null,null,!1,!1,"",Mp);return t._reactRootContainer=l,t[mi]=l.current,Eo(t.nodeType===8?t.parentNode:t),wr(function(){Hl(e,l,n,i)}),l}function jl(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=Ml(o);a.call(l)}}Hl(e,o,t,r)}else o=ay(n,e,t,r,i);return Ml(o)}m0=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=eo(e.pendingLanes);n!==0&&(ef(e,n|1),sn(e,_t()),!(Ke&6)&&(Ms=_t()+500,Qi()))}break;case 13:wr(function(){var i=gi(t,1);if(i!==null){var r=qt();Hn(i,t,1,r)}}),If(t,1)}};tf=function(t){if(t.tag===13){var e=gi(t,134217728);if(e!==null){var n=qt();Hn(e,t,134217728,n)}If(t,134217728)}};g0=function(t){if(t.tag===13){var e=Vi(t),n=gi(t,e);if(n!==null){var i=qt();Hn(n,t,e,i)}If(t,e)}};v0=function(){return rt};x0=function(t,e){var n=rt;try{return rt=t,e()}finally{rt=n}};Mu=function(t,e,n){switch(e){case"input":if(mu(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Il(i);if(!r)throw Error(se(90));qm(i),mu(i,r)}}}break;case"textarea":Zm(t,n);break;case"select":e=n.value,e!=null&&as(t,!!n.multiple,e,!1)}};r0=Rf;s0=wr;var ly={usingClientEntryPoint:!1,Events:[Ho,Jr,Il,n0,i0,Rf]},Ws={findFiberByHostInstance:hr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},cy={bundleType:Ws.bundleType,version:Ws.version,rendererPackageName:Ws.rendererPackageName,rendererConfig:Ws.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:_i.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=l0(t),t===null?null:t.stateNode},findFiberByHostInstance:Ws.findFiberByHostInstance||oy,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ua=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ua.isDisabled&&ua.supportsFiber)try{Pl=ua.inject(cy),qn=ua}catch{}}vn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ly;vn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ff(e))throw Error(se(200));return sy(t,e,null,n)};vn.createRoot=function(t,e){if(!Ff(t))throw Error(se(299));var n=!1,i="",r=Bg;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Df(t,1,!1,null,null,n,!1,i,r),t[mi]=e.current,Eo(t.nodeType===8?t.parentNode:t),new Uf(e)};vn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(se(188)):(t=Object.keys(t).join(","),Error(se(268,t)));return t=l0(e),t=t===null?null:t.stateNode,t};vn.flushSync=function(t){return wr(t)};vn.hydrate=function(t,e,n){if(!Gl(e))throw Error(se(200));return jl(null,t,e,!0,n)};vn.hydrateRoot=function(t,e,n){if(!Ff(t))throw Error(se(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=Bg;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=zg(e,null,t,1,n??null,r,!1,s,o),t[mi]=e.current,Eo(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Vl(e)};vn.render=function(t,e,n){if(!Gl(e))throw Error(se(200));return jl(null,t,e,!1,n)};vn.unmountComponentAtNode=function(t){if(!Gl(t))throw Error(se(40));return t._reactRootContainer?(wr(function(){jl(null,null,t,!1,function(){t._reactRootContainer=null,t[mi]=null})}),!0):!1};vn.unstable_batchedUpdates=Rf;vn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Gl(n))throw Error(se(200));if(t==null||t._reactInternals===void 0)throw Error(se(38));return jl(t,e,n,!1,i)};vn.version="18.3.1-next-f1338f8080-20240426";function Hg(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Hg)}catch(t){console.error(t)}}Hg(),Hm.exports=vn;var uy=Hm.exports,Ep=uy;lu.createRoot=Ep.createRoot,lu.hydrateRoot=Ep.hydrateRoot;const dy={hardhat:'<path d="M2 18h20"/><path d="M4 18a8 8 0 0 1 16 0"/><path d="M10 6h4v4"/><path d="M10 8a3 3 0 0 0-3 3"/>',person:'<circle cx="12" cy="4" r="2"/><path d="M12 6v8"/><path d="m8 20 4-6 4 6"/><path d="M8 9h8"/>',flask:'<path d="M9 3h6"/><path d="M10 3v6l-5 9a2 2 0 0 0 2 3h10a2 2 0 0 0 2-3l-5-9V3"/><path d="M6.5 15h11"/>',flame:'<path d="M12 3c3 4 5 6 5 9a5 5 0 0 1-10 0c0-1 .5-2 1.5-3C9 10 10 8 12 3Z"/>',users:'<circle cx="9" cy="8" r="3"/><path d="M3 20a6 6 0 0 1 12 0"/><path d="M16 6a3 3 0 0 1 0 6"/><path d="M18 14a6 6 0 0 1 3 6"/>',userx:'<circle cx="9" cy="8" r="3"/><path d="M3 20a6 6 0 0 1 12 0"/><path d="m16 8 5 5"/><path d="m21 8-5 5"/>',shirt:'<path d="M8 3 4 6l2 3 2-1v10h8V8l2 1 2-3-4-3-2 2H10Z"/>',shield:'<path d="M12 3 5 6v5c0 4 3 7 7 9 4-2 7-5 7-9V6Z"/><path d="M12 9v3"/><path d="M12 15h.01"/>',back:'<path d="m15 18-6-6 6-6"/>',bell:'<path d="M6 9a6 6 0 0 1 12 0c0 5 2 6 2 6H4s2-1 2-6"/><path d="M10 20a2 2 0 0 0 4 0"/>',search:'<circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/>',clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',arrowRight:'<path d="M5 12h14"/><path d="m13 6 6 6-6 6"/>',camera:'<path d="M3 7h4l2-2h6l2 2h4v12H3Z"/><circle cx="12" cy="13" r="3"/>',check:'<path d="M20 6 9 17l-5-5"/>',triangleAlert:'<path d="M12 3 2 20h20L12 3Z"/><path d="M12 10v4"/><path d="M12 17h.01"/>',play:'<path d="m7 5 11 7-11 7Z"/>',belt:'<rect x="2" y="9" width="20" height="6" rx="3"/><circle cx="6.5" cy="12" r="1.1"/><circle cx="12" cy="12" r="1.1"/><circle cx="17.5" cy="12" r="1.1"/>',grid:'<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>',chevronLeft:'<path d="m15 18-6-6 6-6"/>',chevronRight:'<path d="m9 18 6-6-6-6"/>',rewind:'<polygon points="11 19 2 12 11 5 11 19"/><polygon points="22 19 13 12 22 5 22 19"/>',pause:'<rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/>',x:'<path d="M18 6 6 18"/><path d="m6 6 12 12"/>',download:'<path d="M12 3v11"/><path d="m7 10 5 5 5-5"/><path d="M4 20h16"/>',video:'<rect x="2" y="6" width="14" height="12" rx="2"/><path d="m16 10 6-3v10l-6-3Z"/>',pin:'<path d="M12 21s7-6.3 7-11a7 7 0 1 0-14 0c0 4.7 7 11 7 11Z"/><circle cx="12" cy="10" r="2.5"/>'};function Xe({name:t,size:e=18,strokeWidth:n=1.6}){return _.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:n,strokeLinecap:"round",strokeLinejoin:"round",dangerouslySetInnerHTML:{__html:dy[t]??""}})}const wp={lab:{from:"#213542",to:"#0d1820",accent:"#5eead4",tag:"LAB"},factory:{from:"#3a3340",to:"#1b1620",accent:"#f2a6b4",tag:"PROD"},cooling_tower:{from:"#26303f",to:"#0f1722",accent:"#7cc4ff",tag:"COOL"},road:{from:"#2a2d33",to:"#121316",accent:"#c9ccd6",tag:"ROAD"},loading_bay:{from:"#3a2f2a",to:"#191410",accent:"#e6a15a",tag:"BAY"},gate:{from:"#232833",to:"#0e1117",accent:"#a8a2d4",tag:"GATE"}};function Tc(t){return t.toString().padStart(2,"0")}function Lo({scene:t="factory",seed:e=0,mode:n="live",violation:i=!1,timeLabel:r}){const s=wp[t]??wp.factory,[o,a]=_e.useState("");_e.useEffect(()=>{const c=()=>{const h=new Date;a(`2026-06-03 ${Tc(h.getHours())}:${Tc(h.getMinutes())}:${Tc(h.getSeconds())}`)};c();const f=setInterval(c,1e3);return()=>clearInterval(f)},[]);const l=c=>`-${(e*3+c*5)%17}s`;return _.jsxs("div",{className:"lf-root",children:[_.jsx("div",{className:"lf-layer",style:{background:`radial-gradient(120% 90% at 50% 12%,${s.from} 0%,${s.to} 100%)`}}),_.jsxs("svg",{className:"lf-layer",viewBox:"0 0 320 180",preserveAspectRatio:"none",style:{opacity:.5},children:[_.jsx("line",{x1:"0",y1:"118",x2:"320",y2:"118",stroke:s.accent,strokeOpacity:"0.18"}),_.jsx("line",{x1:"160",y1:"118",x2:"30",y2:"180",stroke:s.accent,strokeOpacity:"0.13"}),_.jsx("line",{x1:"160",y1:"118",x2:"290",y2:"180",stroke:s.accent,strokeOpacity:"0.13"}),_.jsx("line",{x1:"160",y1:"118",x2:"160",y2:"180",stroke:s.accent,strokeOpacity:"0.1"}),_.jsx("line",{x1:"0",y1:"150",x2:"320",y2:"150",stroke:s.accent,strokeOpacity:"0.08"})]}),_.jsx("div",{className:"lf-fig lf-figA",style:{width:"7%",height:"16%",background:s.accent,animationDelay:l(0)}}),_.jsx("div",{className:"lf-fig lf-figB",style:{width:"6%",height:"14%",background:"#e7e2da",animationDelay:l(1)}}),e%2===0&&_.jsx("div",{className:"lf-fig lf-figC",style:{width:"6.5%",height:"15%",background:s.accent,animationDelay:l(2)}}),_.jsx("div",{className:"lf-layer",style:{pointerEvents:"none"},children:_.jsx("div",{className:"lf-rec",style:{position:"absolute",left:`${i?34:12}%`,top:`${i?40:18}%`,width:"20%",height:"34%",border:`1.5px solid ${i?"#ff5b52":s.accent}`},children:_.jsx("span",{className:"absolute -top-[15px] left-0 px-1 text-[8px] font-semibold text-white",style:{background:i?"#ff5b52":s.accent,color:i?"#fff":"#04211d"},children:i?"ALERT 0.9":"ok 0.4"})})}),_.jsx("div",{className:"lf-scan",style:{position:"absolute",left:0,right:0,height:"2px",background:"linear-gradient(90deg,transparent,rgba(255,255,255,.55),transparent)"}}),_.jsx("div",{className:"lf-layer lf-grain",style:{background:"repeating-linear-gradient(0deg,#fff 0,#fff 1px,transparent 1px,transparent 3px)",mixBlendMode:"overlay"}}),_.jsx("div",{className:"lf-layer",style:{boxShadow:"inset 0 0 60px 10px rgba(0,0,0,.55)"}}),_.jsxs("div",{className:"absolute left-2 top-2 flex items-center gap-1.5 rounded bg-black/55 px-1.5 py-0.5",children:[n==="live"&&_.jsx("span",{className:"lf-rec inline-block h-1.5 w-1.5 rounded-full bg-[#ff4d4d]"}),_.jsx("span",{className:"text-[9px] font-bold tracking-wider text-white",children:n==="live"?"LIVE":"REPLAY"}),_.jsxs("span",{className:"text-[9px] font-semibold text-white/60",children:["· ",s.tag]})]}),_.jsx("div",{className:"absolute bottom-2 right-2 rounded bg-black/55 px-1.5 py-0.5",children:_.jsx("span",{className:"font-mono text-[9px] text-white/85",children:r||o})})]})}const Es=[{id:"cam_lab_gf_1",name:"Maxpro Lab GF 1",area:"lab",zone:"Lab GF Zone",scene:"lab",ip:"10.20.11.21"},{id:"cam_lab_gf_2",name:"Maxpro Lab GF 2",area:"lab",zone:"Lab GF Zone",scene:"lab",ip:"10.20.11.22"},{id:"cam_lab_ff_1",name:"Maxpro Lab FF 1",area:"lab",zone:"Lab FF Zone",scene:"lab",ip:"10.20.11.23"},{id:"cam_lab_ff_2",name:"Maxpro Lab FF 2",area:"lab",zone:"Lab FF Zone",scene:"lab",ip:"10.20.11.24"},{id:"cam_prod_1",name:"Production Floor 1",area:"production",zone:"Assembly East",scene:"factory",ip:"10.20.22.31"},{id:"cam_prod_2",name:"Production Floor 2",area:"production",zone:"Assembly West",scene:"factory",ip:"10.20.22.32"},{id:"cam_prod_3",name:"Production Floor 3",area:"production",zone:"Packing Line",scene:"factory",ip:"10.20.22.33"},{id:"cam_cool_1",name:"UPI 14 MEE Cooling Tower",area:"equipment",zone:"Cooling Yard",scene:"cooling_tower",ip:"10.20.33.41"},{id:"cam_cool_2",name:"Cooling Tower 2",area:"equipment",zone:"Cooling Yard",scene:"cooling_tower",ip:"10.20.33.42"},{id:"cam_boiler",name:"Boiler Room",area:"equipment",zone:"Utilities",scene:"loading_bay",ip:"10.20.33.43"},{id:"cam_main_road",name:"Main Road",area:"perimeter",zone:"North Perimeter",scene:"road",ip:"10.20.44.51"},{id:"cam_main_gate",name:"Main Gate",area:"perimeter",zone:"Main Entrance",scene:"gate",ip:"10.20.44.52"}],hn=Es.reduce((t,e)=>(t[e.id]=e,t),{}),fy={lab:{lab_safety:10,no_vest:4,no_helmet:3,safety_gear:2,fall_loitering:1},production:{no_helmet:6,no_vest:6,safety_gear:4,conveyor_belt_health:5,overcrowding:3,fall_loitering:3,no_staff:2},equipment:{safety_gear:5,no_helmet:4,no_vest:4,conveyor_belt_health:6,fire_smoke:3,fall_loitering:2},perimeter:{intrusion:8,overcrowding:4,no_staff:3,fall_loitering:2}},hy={cam_cool_1:10,cam_lab_gf_1:9,cam_main_road:6,cam_lab_gf_2:5,cam_lab_ff_1:4,cam_prod_1:4,cam_prod_2:3,cam_cool_2:3,cam_prod_3:3,cam_lab_ff_2:2,cam_main_gate:2,cam_boiler:2},py=[1,1,1,1,1,2,3,5,9,14,18,20,22,24,23,19,16,12,8,5,3,2,1,1],Tp=[{sev:"High",w:50},{sev:"Medium",w:30},{sev:"Low",w:20}],Tr=[{id:"safety_gear",name:"Safety Gear",color:"#FB7185",icon:"hardhat",description:"Detects missing safety equipment beyond helmets and vests"},{id:"fall_loitering",name:"Fall and Loitering",color:"#A855F7",icon:"person",description:"Identifies fallen workers and unauthorized loitering in restricted zones"},{id:"lab_safety",name:"Lab Safety Detection",color:"#22C55E",icon:"flask",description:"Monitors lab-coat compliance and proper lab protocol adherence"},{id:"fire_smoke",name:"Fire and Smoke Detection",color:"#F97316",icon:"flame",description:"Visual detection of fire ignition and smoke before alarms trigger"},{id:"overcrowding",name:"Overcrowding Detection",color:"#0EA5E9",icon:"users",description:"Flags zones exceeding safe occupancy thresholds"},{id:"no_staff",name:"No Staff Detection",color:"#DC2626",icon:"userx",description:"Alerts when designated zones are unmanned"},{id:"no_helmet",name:"No Helmet Detected",color:"#D946EF",icon:"hardhat",description:"Identifies workers entering hazard zones without hard hats"},{id:"no_vest",name:"No SafetyVest Detected",color:"#FACC15",icon:"shirt",description:"Identifies workers without high-visibility safety vests"},{id:"intrusion",name:"Intrusion Detection",color:"#EAB308",icon:"shield",description:"Detects unauthorized access to restricted or perimeter zones"},{id:"conveyor_belt_health",name:"Conveyor Belt Health",color:"#14B8A6",icon:"belt",description:"Monitors conveyor / pipe-rack belt alignment, wear and jams"}],Ui=Tr.reduce((t,e)=>(t[e.id]=e,t),{});function kf({entries:t,index:e=0,tab:n="photo",onClose:i,onViewOnStream:r}){const[s,o]=_e.useState(e),[a,l]=_e.useState(n),c=t[s],f=hn[c.cameraId],h=Ui[c.useCaseId],d=L=>L.slice(11,19),p=L=>hn[L].name,y=L=>new Date(L).toLocaleString("en-GB",{day:"2-digit",month:"short",year:"numeric",hour:"2-digit",minute:"2-digit",second:"2-digit"}),S=(()=>{const L=t.length,x=[];for(let E=1;E<=Math.min(5,L-1);E++){const U=(s+E)%L;x.push({inc:t[U],idx:U})}return x})(),m=()=>o(L=>(L-1+t.length)%t.length),u=()=>o(L=>(L+1)%t.length),v=L=>o(L),g=L=>{const x=h.color,E=L.bbox,U=E.x/100*640,B=E.y/100*400,O=E.w/100*640,X=E.h/100*400;return`<svg viewBox="0 0 640 400" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
      <rect width="640" height="400" fill="#d9e1ea"/>
      <rect y="296" width="640" height="104" fill="#c6d0dc"/>
      <line x1="0" y1="296" x2="640" y2="296" stroke="#b4c0ce" stroke-width="2"/>
      ${[90,300,500].map(Y=>{const N=Y>U&&Y<U+O?"#8894a6":"#9aa7b6";return`<circle cx="${Y}" cy="150" r="26" fill="${N}"/><rect x="${Y-30}" y="188" width="60" height="96" rx="16" fill="${N}"/>`}).join("")}
      <rect x="${U.toFixed(0)}" y="${B.toFixed(0)}" width="${O.toFixed(0)}" height="${X.toFixed(0)}" fill="none" stroke="${x}" stroke-width="3" rx="3"/>
      <rect x="${U.toFixed(0)}" y="${(B-18).toFixed(0)}" width="86" height="18" fill="${x}"/>
      <text x="${(U+5).toFixed(0)}" y="${(B-5).toFixed(0)}" font-family="monospace" font-size="12" fill="#fff" font-weight="bold">person</text>
      <text x="14" y="386" font-family="monospace" font-size="13" fill="#0f172a">${f.name} · ${d(L.timestamp)}</text>
    </svg>`},M=()=>`${f.name.replace(/\s+/g,"_")}_${c.timestamp.replace(/[:T]/g,"-")}`,P=(L,x)=>{const E=document.createElement("a");E.href=URL.createObjectURL(L),E.download=x,E.click(),URL.revokeObjectURL(E.href)},b=L=>{const x=URL.createObjectURL(new Blob([g(c)],{type:"image/svg+xml"})),E=new Image;E.onload=()=>{L(E),URL.revokeObjectURL(x)},E.src=x},T=()=>{b(L=>{const x=document.createElement("canvas");x.width=640,x.height=400,x.getContext("2d").drawImage(L,0,0,640,400),x.toBlob(E=>{E&&P(E,`${M()}.png`)})})},R=()=>{b(L=>{const x=document.createElement("canvas");x.width=640,x.height=400;const E=x.getContext("2d"),U=x;if(!U.captureStream||typeof MediaRecorder>"u"){E.drawImage(L,0,0,640,400),x.toBlob(Y=>{Y&&P(Y,`${M()}_frame.png`)});return}const B=new MediaRecorder(U.captureStream(12),{mimeType:"video/webm"}),O=[];B.ondataavailable=Y=>{Y.data.size&&O.push(Y.data)},B.onstop=()=>P(new Blob(O,{type:"video/webm"}),`${M()}_clip.webm`),B.start();let X=0;const j=setInterval(()=>{E.drawImage(L,0,0,640,400),E.fillStyle="rgba(255,255,255,0.5)",E.fillRect(0,X*26%400,640,2),X++},66);setTimeout(()=>{clearInterval(j),B.stop()},1600)})};return _e.useEffect(()=>{const L=document.body.style.overflow;return document.body.style.overflow="hidden",()=>{document.body.style.overflow=L}},[]),_e.useEffect(()=>{const L=x=>{x.key==="Escape"?i():x.key==="ArrowLeft"?m():x.key==="ArrowRight"&&u()};return document.addEventListener("keydown",L),()=>document.removeEventListener("keydown",L)},[t.length]),_.jsx("div",{className:"fixed inset-0 z-[60] flex items-center justify-center bg-slate-900/60 p-4",style:{fontFamily:"-apple-system,BlinkMacSystemFont,'SF Pro Display','Segoe UI',sans-serif"},onClick:()=>i(),children:_.jsxs("div",{className:"flex max-h-[92vh] w-[95vw] max-w-[1120px] flex-col overflow-hidden rounded-2xl bg-white shadow-2xl",onClick:L=>L.stopPropagation(),children:[_.jsxs("div",{className:"flex items-center justify-between gap-3 border-b border-slate-200 px-5 py-3",children:[_.jsxs("div",{className:"min-w-0",children:[_.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[_.jsx("span",{className:"text-[15px] font-semibold text-slate-900",children:f.name}),_.jsx("span",{className:"rounded-md bg-slate-100 px-1.5 py-0.5 font-mono text-[11px] text-slate-500",children:f.ip})]}),_.jsxs("div",{className:"text-[12px] text-slate-500",children:[f.zone," · Violation #",c.id," · Event ",s+1," of ",t.length]})]}),_.jsx("button",{type:"button",className:"flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-slate-500 hover:bg-slate-100",onClick:()=>i(),"aria-label":"Close",children:_.jsx(Xe,{name:"x",size:18})})]}),_.jsxs("div",{className:"grid min-h-0 flex-1 grid-cols-1 lg:grid-cols-[1fr_300px]",children:[_.jsxs("div",{className:"flex min-h-0 flex-col overflow-y-auto lg:border-r lg:border-slate-200",children:[_.jsx("div",{className:"px-5 pt-3",children:_.jsxs("div",{className:"inline-flex rounded-lg bg-slate-100 p-0.5",children:[_.jsxs("button",{type:"button",className:`flex items-center gap-1.5 rounded-md px-3.5 py-1.5 text-[13px] font-semibold transition ${a==="video"?"bg-white text-slate-900 shadow-sm":"text-slate-500"}`,onClick:()=>l("video"),children:[_.jsx(Xe,{name:"video",size:15})," Video"]}),_.jsxs("button",{type:"button",className:`flex items-center gap-1.5 rounded-md px-3.5 py-1.5 text-[13px] font-semibold transition ${a==="photo"?"bg-white text-slate-900 shadow-sm":"text-slate-500"}`,onClick:()=>l("photo"),children:[_.jsx(Xe,{name:"camera",size:15})," Photo"]})]})}),_.jsxs("div",{className:"relative mx-5 mt-3 overflow-hidden rounded-xl bg-[#0d1016]",style:{aspectRatio:"16/10"},children:[a==="photo"&&_.jsx("div",{className:"absolute inset-0",dangerouslySetInnerHTML:{__html:g(c)}}),a==="video"&&_.jsx(Lo,{scene:f.scene,seed:s+2,mode:"rewind",timeLabel:d(c.timestamp),violation:!0}),a==="photo"&&_.jsx("span",{className:"absolute left-3 top-3 rounded-md bg-black/70 px-2 py-0.5 font-mono text-[11px] text-white",children:"EVIDENCE STILL"}),_.jsx("button",{type:"button",className:"absolute left-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-black/45 text-white hover:bg-black/70",onClick:()=>m(),"aria-label":"Previous",children:_.jsx(Xe,{name:"chevronLeft",size:18})}),_.jsx("button",{type:"button",className:"absolute right-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-black/45 text-white hover:bg-black/70",onClick:()=>u(),"aria-label":"Next",children:_.jsx(Xe,{name:"chevronRight",size:18})})]}),_.jsxs("div",{className:"px-5 py-4",children:[_.jsx("span",{className:"rounded-full px-2 py-0.5 text-[11px] font-semibold",style:{backgroundColor:h.color+"22",color:h.color},children:h.name}),_.jsx("div",{className:"mt-2 text-[13.5px] font-medium text-slate-800",children:c.message}),_.jsx("div",{className:"font-mono text-[11.5px] text-slate-400",children:y(c.timestamp)}),_.jsxs("div",{className:"mt-4 flex flex-wrap items-center gap-2.5",children:[a==="photo"&&_.jsxs("button",{type:"button",onClick:()=>T(),className:"inline-flex items-center gap-2 rounded-xl bg-[#0f172a] px-4 py-2.5 text-[13.5px] font-semibold text-white hover:bg-[#1e293b]",children:[_.jsx(Xe,{name:"download",size:16})," Download image"]}),a==="video"&&_.jsxs("button",{type:"button",onClick:()=>R(),className:"inline-flex items-center gap-2 rounded-xl bg-[#0f172a] px-4 py-2.5 text-[13.5px] font-semibold text-white hover:bg-[#1e293b]",children:[_.jsx(Xe,{name:"download",size:16})," Download video"]}),a==="video"&&_.jsxs("button",{type:"button",onClick:()=>r(c),className:"inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-[13.5px] font-semibold text-slate-800 hover:bg-slate-50",children:[_.jsx(Xe,{name:"video",size:16})," View on stream video"]})]})]})]}),_.jsxs("div",{className:"flex min-h-0 flex-col bg-slate-50",children:[_.jsxs("div",{className:"border-b border-slate-200 px-4 py-3",children:[_.jsx("div",{className:"text-[13px] font-semibold text-slate-900",children:"Next 5 violations"}),_.jsx("div",{className:"text-[11.5px] text-slate-500",children:"in this log"})]}),_.jsx("div",{className:"min-h-0 flex-1 space-y-2 overflow-y-auto p-3",children:S.map(L=>_.jsxs("button",{type:"button",onClick:()=>v(L.idx),className:"block w-full rounded-lg border border-slate-200 bg-white p-2.5 text-left transition hover:border-[#3b82f6] hover:shadow-sm",children:[_.jsxs("div",{className:"flex items-center justify-between",children:[_.jsxs("span",{className:"text-[11px] font-semibold text-slate-500",children:["#",L.inc.id]}),_.jsx("span",{className:"font-mono text-[11px] text-slate-500",children:d(L.inc.timestamp)})]}),_.jsx("div",{className:"mt-1 truncate text-[12.5px] font-medium text-slate-800",children:p(L.inc.cameraId)}),_.jsx("div",{className:"truncate text-[11.5px] text-slate-500",children:L.inc.message})]},L.idx))})]})]})]})})}function Of(t){let e=t>>>0;return function(){e|=0,e=e+1831565813|0;let n=Math.imul(e^e>>>15,1|e);return n=n+Math.imul(n^n>>>7,61|n)^n,((n^n>>>14)>>>0)/4294967296}}function da(t,e){const n=t.reduce((r,s)=>r+s,0);let i=e()*n;for(let r=0;r<t.length;r++)if(i-=t[r],i<0)return r;return t.length-1}const Vg=20260603,Gg=1617,my="2026-06-03",jg=Es.map(t=>t.id),gy=jg.map(t=>hy[t]??1),vy={lab_safety:"Person without lab-coat detected",no_helmet:"Person without helmet detected",no_vest:"Person without safety vest detected",fire_smoke:"Smoke signature detected",intrusion:"Unauthorised entry detected",overcrowding:"Zone occupancy threshold exceeded",no_staff:"Designated zone unmanned",fall_loitering:"Fall / loitering detected",safety_gear:"Missing safety equipment detected",conveyor_belt_health:"Belt misalignment / jam detected"};function Ac(t){return t<10?`0${t}`:`${t}`}function Wg(t,e,n){const i=jg[da(gy,n)],r=hn[i],s=fy[r.area],o=Object.keys(s),a=o.map(u=>s[u]??0),l=o[da(a,n)],c=Tp[da(Tp.map(u=>u.w),n)].sev,f=da(py,n),h=6+n()*16,d=8+n()*18,p=n()*(100-h),y=n()*(100-d),S=Math.floor(n()*60),m=Math.floor(n()*60);return{id:t,cameraId:i,useCaseId:l,severity:c,message:vy[l]??"Non compliance detected",timestamp:`${e}T${Ac(f)}:${Ac(S)}:${Ac(m)}`,bbox:{x:Math.round(p*10)/10,y:Math.round(y*10)/10,w:Math.round(h*10)/10,h:Math.round(d*10)/10},resolved:!1}}function Xg(t,e){const n=Of(t),i=[];for(let r=0;r<e;r++)i.push(Wg(r+1,my,n));return i}let bc=null;function Wl(){return bc||(bc=Xg(Vg,Gg)),bc}function xy(t){const e=hn[t.cameraId];return{id:t.id,cameraId:t.cameraId,cameraName:e.name,ip:e.ip,zone:e.zone,severity:t.severity,message:t.message,timestamp:t.timestamp}}function $g(t){return Wl().filter(e=>e.useCaseId===t).map(xy).sort((e,n)=>n.timestamp.localeCompare(e.timestamp))}function td(t){const e=new Map;for(const n of Wl())n.useCaseId===t&&e.set(n.cameraId,(e.get(n.cameraId)??0)+1);return[...e.entries()].map(([n,i])=>({camera:hn[n],count:i})).sort((n,i)=>i.count-n.count)}function Ap(t,e){return $g(t).filter(n=>n.cameraId===e)}function _y(t){return Wl().filter(e=>e.useCaseId===t).sort((e,n)=>n.timestamp.localeCompare(e.timestamp))}function yy(t=20){return[...Wl()].sort((e,n)=>n.timestamp.localeCompare(e.timestamp)).slice(0,t)}const Sy={High:"#EF4444",Medium:"#F59E0B",Low:"#10B981"};function My(t,e){const n=Math.max(0,(new Date(e).getTime()-new Date(t).getTime())/1e3);if(n<60)return"just now";const i=Math.floor(n/60);if(i<60)return`${i}m ago`;const r=Math.floor(i/60);return r<24?`${r}h ago`:`${Math.floor(r/24)}d ago`}function Ey(t){return t.slice(11,16)}function wy({title:t,showBack:e,onBack:n}){var h;const[i,r]=_e.useState(!1),[s,o]=_e.useState(null),a=_e.useMemo(()=>yy(20),[]),l=((h=a[0])==null?void 0:h.timestamp)??"",c=a.length,f=d=>{r(!1),o(d)};return _.jsxs(_.Fragment,{children:[_.jsxs("header",{className:"flex items-center justify-between border-b border-[#E5E7EB] bg-white px-6 py-3",children:[_.jsxs("div",{className:"flex items-center gap-3",children:[e&&_.jsx("button",{type:"button",className:"flex h-9 w-9 items-center justify-center rounded-full border border-[#E5E7EB] text-[#0F172A] hover:bg-[#F1F5F9]",onClick:()=>n(),"aria-label":"Back",children:_.jsx(Xe,{name:"back",size:18})}),_.jsx("h1",{className:"text-[20px] font-semibold text-[#0F172A]",children:t})]}),_.jsxs("div",{className:"flex items-center gap-4",children:[_.jsxs("div",{className:"relative",children:[_.jsxs("button",{type:"button",className:"relative flex h-9 w-9 items-center justify-center rounded-full text-[#475569] hover:bg-[#F1F5F9]",onClick:()=>r(d=>!d),"aria-label":"Notifications","aria-expanded":i,children:[_.jsx(Xe,{name:"bell",size:20}),c>0&&_.jsx("span",{className:"absolute right-0.5 top-0.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-[#EF4444] px-1 text-[10px] font-semibold text-white",children:c>9?"9+":c})]}),i&&_.jsxs(_.Fragment,{children:[_.jsx("div",{className:"fixed inset-0 z-40",onClick:()=>r(!1)}),_.jsxs("div",{className:"absolute right-0 top-[calc(100%+10px)] z-50 w-[360px] overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl",children:[_.jsxs("div",{className:"flex items-center justify-between border-b border-slate-100 px-4 py-3",children:[_.jsx("div",{className:"text-[14px] font-semibold text-slate-900",children:"Notifications"}),_.jsxs("span",{className:"rounded-full bg-slate-100 px-2 py-0.5 text-[11px] font-semibold text-slate-500",children:[c," new"]})]}),_.jsxs("div",{className:"max-h-[70vh] divide-y divide-slate-100 overflow-y-auto",children:[a.length===0&&_.jsx("div",{className:"px-4 py-8 text-center text-[13px] text-slate-400",children:"No alerts yet"}),a.map((d,p)=>{const y=hn[d.cameraId],S=Ui[d.useCaseId];return _.jsxs("button",{type:"button",onClick:()=>f(p),className:"block w-full px-4 py-3 text-left transition hover:bg-slate-50",children:[_.jsxs("div",{className:"flex items-start justify-between gap-3",children:[_.jsxs("div",{className:"flex min-w-0 items-center gap-2",children:[_.jsx("span",{className:"h-2 w-2 shrink-0 rounded-full",style:{backgroundColor:Sy[d.severity]??"#94A3B8"}}),_.jsx("span",{className:"truncate text-[13.5px] font-semibold text-slate-900",children:S.name})]}),_.jsx("span",{className:"shrink-0 whitespace-nowrap font-mono text-[11px] text-slate-400",children:My(d.timestamp,l)})]}),_.jsxs("div",{className:"mt-0.5 flex items-center gap-1.5 pl-4 text-[12px] text-slate-500",children:[_.jsx(Xe,{name:"video",size:12}),_.jsx("span",{className:"truncate",children:y.name}),_.jsx("span",{className:"text-slate-300",children:"·"}),_.jsx("span",{className:"whitespace-nowrap font-mono text-[11px] text-slate-400",children:Ey(d.timestamp)})]}),_.jsx("div",{className:"mt-1 truncate pl-4 text-[12.5px] text-slate-700",children:d.message})]},d.id)})]})]})]})]}),_.jsx("div",{className:"relative h-9 w-9 rounded-full bg-gradient-to-br from-[#475569] to-[#0F172A]",children:_.jsx("span",{className:"absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full border-2 border-white bg-[#22C55E]"})})]})]}),s!==null&&a[s]&&_.jsx(kf,{entries:a,index:s,tab:"photo",onClose:()=>o(null),onViewOnStream:()=>o(null)})]})}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const zf="169",Ty=0,bp=1,Ay=2,Yg=1,Bf=2,si=3,Yi=0,on=1,li=2,ji=0,hs=1,Cp=2,Rp=3,Pp=4,by=5,dr=100,Cy=101,Ry=102,Py=103,Ny=104,Ly=200,Dy=201,Iy=202,Uy=203,nd=204,id=205,Fy=206,ky=207,Oy=208,zy=209,By=210,Hy=211,Vy=212,Gy=213,jy=214,rd=0,sd=1,od=2,ws=3,ad=4,ld=5,cd=6,ud=7,qg=0,Wy=1,Xy=2,Wi=0,$y=1,Yy=2,qy=3,Hf=4,Ky=5,Zy=6,Qy=7,Kg=300,Ts=301,As=302,dd=303,fd=304,Xl=306,hd=1e3,gr=1001,pd=1002,Tn=1003,Jy=1004,fa=1005,kn=1006,Cc=1007,vr=1008,xi=1009,Zg=1010,Qg=1011,Do=1012,Vf=1013,Ar=1014,di=1015,Go=1016,Gf=1017,jf=1018,bs=1020,Jg=35902,ev=1021,tv=1022,zn=1023,nv=1024,iv=1025,ps=1026,Cs=1027,rv=1028,Wf=1029,sv=1030,Xf=1031,$f=1033,Wa=33776,Xa=33777,$a=33778,Ya=33779,md=35840,gd=35841,vd=35842,xd=35843,_d=36196,yd=37492,Sd=37496,Md=37808,Ed=37809,wd=37810,Td=37811,Ad=37812,bd=37813,Cd=37814,Rd=37815,Pd=37816,Nd=37817,Ld=37818,Dd=37819,Id=37820,Ud=37821,qa=36492,Fd=36494,kd=36495,ov=36283,Od=36284,zd=36285,Bd=36286,e1=3200,t1=3201,av=0,n1=1,Li="",Xn="srgb",Ji="srgb-linear",Yf="display-p3",$l="display-p3-linear",El="linear",lt="srgb",wl="rec709",Tl="p3",Dr=7680,Np=519,i1=512,r1=513,s1=514,lv=515,o1=516,a1=517,l1=518,c1=519,Lp=35044,Dp="300 es",fi=2e3,Al=2001;class Is{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const zt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Ip=1234567;const ho=Math.PI/180,Io=180/Math.PI;function Us(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(zt[t&255]+zt[t>>8&255]+zt[t>>16&255]+zt[t>>24&255]+"-"+zt[e&255]+zt[e>>8&255]+"-"+zt[e>>16&15|64]+zt[e>>24&255]+"-"+zt[n&63|128]+zt[n>>8&255]+"-"+zt[n>>16&255]+zt[n>>24&255]+zt[i&255]+zt[i>>8&255]+zt[i>>16&255]+zt[i>>24&255]).toLowerCase()}function Yt(t,e,n){return Math.max(e,Math.min(n,t))}function qf(t,e){return(t%e+e)%e}function u1(t,e,n,i,r){return i+(t-e)*(r-i)/(n-e)}function d1(t,e,n){return t!==e?(n-t)/(e-t):0}function po(t,e,n){return(1-n)*t+n*e}function f1(t,e,n,i){return po(t,e,1-Math.exp(-n*i))}function h1(t,e=1){return e-Math.abs(qf(t,e*2)-e)}function p1(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*(3-2*t))}function m1(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*t*(t*(t*6-15)+10))}function g1(t,e){return t+Math.floor(Math.random()*(e-t+1))}function v1(t,e){return t+Math.random()*(e-t)}function x1(t){return t*(.5-Math.random())}function _1(t){t!==void 0&&(Ip=t);let e=Ip+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function y1(t){return t*ho}function S1(t){return t*Io}function M1(t){return(t&t-1)===0&&t!==0}function E1(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function w1(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function T1(t,e,n,i,r){const s=Math.cos,o=Math.sin,a=s(n/2),l=o(n/2),c=s((e+i)/2),f=o((e+i)/2),h=s((e-i)/2),d=o((e-i)/2),p=s((i-e)/2),y=o((i-e)/2);switch(r){case"XYX":t.set(a*f,l*h,l*d,a*c);break;case"YZY":t.set(l*d,a*f,l*h,a*c);break;case"ZXZ":t.set(l*h,l*d,a*f,a*c);break;case"XZX":t.set(a*f,l*y,l*p,a*c);break;case"YXY":t.set(l*p,a*f,l*y,a*c);break;case"ZYZ":t.set(l*y,l*p,a*f,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function $r(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function Wt(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const A1={DEG2RAD:ho,RAD2DEG:Io,generateUUID:Us,clamp:Yt,euclideanModulo:qf,mapLinear:u1,inverseLerp:d1,lerp:po,damp:f1,pingpong:h1,smoothstep:p1,smootherstep:m1,randInt:g1,randFloat:v1,randFloatSpread:x1,seededRandom:_1,degToRad:y1,radToDeg:S1,isPowerOfTwo:M1,ceilPowerOfTwo:E1,floorPowerOfTwo:w1,setQuaternionFromProperEuler:T1,normalize:Wt,denormalize:$r};class $e{constructor(e=0,n=0){$e.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Yt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Oe{constructor(e,n,i,r,s,o,a,l,c){Oe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){const f=this.elements;return f[0]=e,f[1]=r,f[2]=a,f[3]=n,f[4]=s,f[5]=l,f[6]=i,f[7]=o,f[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],f=i[4],h=i[7],d=i[2],p=i[5],y=i[8],S=r[0],m=r[3],u=r[6],v=r[1],g=r[4],M=r[7],P=r[2],b=r[5],T=r[8];return s[0]=o*S+a*v+l*P,s[3]=o*m+a*g+l*b,s[6]=o*u+a*M+l*T,s[1]=c*S+f*v+h*P,s[4]=c*m+f*g+h*b,s[7]=c*u+f*M+h*T,s[2]=d*S+p*v+y*P,s[5]=d*m+p*g+y*b,s[8]=d*u+p*M+y*T,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],f=e[8];return n*o*f-n*a*c-i*s*f+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],f=e[8],h=f*o-a*c,d=a*l-f*s,p=c*s-o*l,y=n*h+i*d+r*p;if(y===0)return this.set(0,0,0,0,0,0,0,0,0);const S=1/y;return e[0]=h*S,e[1]=(r*c-f*i)*S,e[2]=(a*i-r*o)*S,e[3]=d*S,e[4]=(f*n-r*l)*S,e[5]=(r*s-a*n)*S,e[6]=p*S,e[7]=(i*l-c*n)*S,e[8]=(o*n-i*s)*S,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(Rc.makeScale(e,n)),this}rotate(e){return this.premultiply(Rc.makeRotation(-e)),this}translate(e,n){return this.premultiply(Rc.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Rc=new Oe;function cv(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function bl(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function b1(){const t=bl("canvas");return t.style.display="block",t}const Up={};function Ka(t){t in Up||(Up[t]=!0,console.warn(t))}function C1(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}function R1(t){const e=t.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function P1(t){const e=t.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Fp=new Oe().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),kp=new Oe().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Xs={[Ji]:{transfer:El,primaries:wl,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t,fromReference:t=>t},[Xn]:{transfer:lt,primaries:wl,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[$l]:{transfer:El,primaries:Tl,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.applyMatrix3(kp),fromReference:t=>t.applyMatrix3(Fp)},[Yf]:{transfer:lt,primaries:Tl,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.convertSRGBToLinear().applyMatrix3(kp),fromReference:t=>t.applyMatrix3(Fp).convertLinearToSRGB()}},N1=new Set([Ji,$l]),tt={enabled:!0,_workingColorSpace:Ji,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!N1.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=Xs[e].toReference,r=Xs[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return Xs[t].primaries},getTransfer:function(t){return t===Li?El:Xs[t].transfer},getLuminanceCoefficients:function(t,e=this._workingColorSpace){return t.fromArray(Xs[e].luminanceCoefficients)}};function ms(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Pc(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Ir;class L1{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ir===void 0&&(Ir=bl("canvas")),Ir.width=e.width,Ir.height=e.height;const i=Ir.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Ir}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=bl("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=ms(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(ms(n[i]/255)*255):n[i]=ms(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let D1=0;class uv{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:D1++}),this.uuid=Us(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Nc(r[o].image)):s.push(Nc(r[o]))}else s=Nc(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Nc(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?L1.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let I1=0;class an extends Is{constructor(e=an.DEFAULT_IMAGE,n=an.DEFAULT_MAPPING,i=gr,r=gr,s=kn,o=vr,a=zn,l=xi,c=an.DEFAULT_ANISOTROPY,f=Li){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:I1++}),this.uuid=Us(),this.name="",this.source=new uv(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new $e(0,0),this.repeat=new $e(1,1),this.center=new $e(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Oe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Kg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case hd:e.x=e.x-Math.floor(e.x);break;case gr:e.x=e.x<0?0:1;break;case pd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case hd:e.y=e.y-Math.floor(e.y);break;case gr:e.y=e.y<0?0:1;break;case pd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}an.DEFAULT_IMAGE=null;an.DEFAULT_MAPPING=Kg;an.DEFAULT_ANISOTROPY=1;class gt{constructor(e=0,n=0,i=0,r=1){gt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],f=l[4],h=l[8],d=l[1],p=l[5],y=l[9],S=l[2],m=l[6],u=l[10];if(Math.abs(f-d)<.01&&Math.abs(h-S)<.01&&Math.abs(y-m)<.01){if(Math.abs(f+d)<.1&&Math.abs(h+S)<.1&&Math.abs(y+m)<.1&&Math.abs(c+p+u-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const g=(c+1)/2,M=(p+1)/2,P=(u+1)/2,b=(f+d)/4,T=(h+S)/4,R=(y+m)/4;return g>M&&g>P?g<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(g),r=b/i,s=T/i):M>P?M<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(M),i=b/r,s=R/r):P<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(P),i=T/s,r=R/s),this.set(i,r,s,n),this}let v=Math.sqrt((m-y)*(m-y)+(h-S)*(h-S)+(d-f)*(d-f));return Math.abs(v)<.001&&(v=1),this.x=(m-y)/v,this.y=(h-S)/v,this.z=(d-f)/v,this.w=Math.acos((c+p+u-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class U1 extends Is{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new gt(0,0,e,n),this.scissorTest=!1,this.viewport=new gt(0,0,e,n);const r={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:kn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new an(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new uv(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class br extends U1{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class dv extends an{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Tn,this.minFilter=Tn,this.wrapR=gr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class F1 extends an{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Tn,this.minFilter=Tn,this.wrapR=gr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class jo{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],f=i[r+2],h=i[r+3];const d=s[o+0],p=s[o+1],y=s[o+2],S=s[o+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=f,e[n+3]=h;return}if(a===1){e[n+0]=d,e[n+1]=p,e[n+2]=y,e[n+3]=S;return}if(h!==S||l!==d||c!==p||f!==y){let m=1-a;const u=l*d+c*p+f*y+h*S,v=u>=0?1:-1,g=1-u*u;if(g>Number.EPSILON){const P=Math.sqrt(g),b=Math.atan2(P,u*v);m=Math.sin(m*b)/P,a=Math.sin(a*b)/P}const M=a*v;if(l=l*m+d*M,c=c*m+p*M,f=f*m+y*M,h=h*m+S*M,m===1-a){const P=1/Math.sqrt(l*l+c*c+f*f+h*h);l*=P,c*=P,f*=P,h*=P}}e[n]=l,e[n+1]=c,e[n+2]=f,e[n+3]=h}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],f=i[r+3],h=s[o],d=s[o+1],p=s[o+2],y=s[o+3];return e[n]=a*y+f*h+l*p-c*d,e[n+1]=l*y+f*d+c*h-a*p,e[n+2]=c*y+f*p+a*d-l*h,e[n+3]=f*y-a*h-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),f=a(r/2),h=a(s/2),d=l(i/2),p=l(r/2),y=l(s/2);switch(o){case"XYZ":this._x=d*f*h+c*p*y,this._y=c*p*h-d*f*y,this._z=c*f*y+d*p*h,this._w=c*f*h-d*p*y;break;case"YXZ":this._x=d*f*h+c*p*y,this._y=c*p*h-d*f*y,this._z=c*f*y-d*p*h,this._w=c*f*h+d*p*y;break;case"ZXY":this._x=d*f*h-c*p*y,this._y=c*p*h+d*f*y,this._z=c*f*y+d*p*h,this._w=c*f*h-d*p*y;break;case"ZYX":this._x=d*f*h-c*p*y,this._y=c*p*h+d*f*y,this._z=c*f*y-d*p*h,this._w=c*f*h+d*p*y;break;case"YZX":this._x=d*f*h+c*p*y,this._y=c*p*h+d*f*y,this._z=c*f*y-d*p*h,this._w=c*f*h-d*p*y;break;case"XZY":this._x=d*f*h-c*p*y,this._y=c*p*h-d*f*y,this._z=c*f*y+d*p*h,this._w=c*f*h+d*p*y;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],f=n[6],h=n[10],d=i+a+h;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(f-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(i>a&&i>h){const p=2*Math.sqrt(1+i-a-h);this._w=(f-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>h){const p=2*Math.sqrt(1+a-i-h);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+f)/p}else{const p=2*Math.sqrt(1+h-i-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+f)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Yt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,f=n._w;return this._x=i*f+o*a+r*c-s*l,this._y=r*f+o*l+s*a-i*c,this._z=s*f+o*c+i*l-r*a,this._w=o*f-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-n;return this._w=p*o+n*this._w,this._x=p*i+n*this._x,this._y=p*r+n*this._y,this._z=p*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),f=Math.atan2(c,a),h=Math.sin((1-n)*f)/c,d=Math.sin(n*f)/c;return this._w=o*h+this._w*d,this._x=i*h+this._x*d,this._y=r*h+this._y*d,this._z=s*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class z{constructor(e=0,n=0,i=0){z.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Op.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Op.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),f=2*(a*n-s*r),h=2*(s*i-o*n);return this.x=n+l*c+o*h-a*f,this.y=i+l*f+a*c-s*h,this.z=r+l*h+s*f-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Lc.copy(this).projectOnVector(e),this.sub(Lc)}reflect(e){return this.sub(Lc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Yt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Lc=new z,Op=new jo;class Wo{constructor(e=new z(1/0,1/0,1/0),n=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Nn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Nn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Nn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Nn):Nn.fromBufferAttribute(s,o),Nn.applyMatrix4(e.matrixWorld),this.expandByPoint(Nn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ha.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ha.copy(i.boundingBox)),ha.applyMatrix4(e.matrixWorld),this.union(ha)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Nn),Nn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter($s),pa.subVectors(this.max,$s),Ur.subVectors(e.a,$s),Fr.subVectors(e.b,$s),kr.subVectors(e.c,$s),Mi.subVectors(Fr,Ur),Ei.subVectors(kr,Fr),tr.subVectors(Ur,kr);let n=[0,-Mi.z,Mi.y,0,-Ei.z,Ei.y,0,-tr.z,tr.y,Mi.z,0,-Mi.x,Ei.z,0,-Ei.x,tr.z,0,-tr.x,-Mi.y,Mi.x,0,-Ei.y,Ei.x,0,-tr.y,tr.x,0];return!Dc(n,Ur,Fr,kr,pa)||(n=[1,0,0,0,1,0,0,0,1],!Dc(n,Ur,Fr,kr,pa))?!1:(ma.crossVectors(Mi,Ei),n=[ma.x,ma.y,ma.z],Dc(n,Ur,Fr,kr,pa))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Nn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Nn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ei[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ei[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ei[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ei[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ei[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ei[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ei[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ei[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ei),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ei=[new z,new z,new z,new z,new z,new z,new z,new z],Nn=new z,ha=new Wo,Ur=new z,Fr=new z,kr=new z,Mi=new z,Ei=new z,tr=new z,$s=new z,pa=new z,ma=new z,nr=new z;function Dc(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){nr.fromArray(t,s);const a=r.x*Math.abs(nr.x)+r.y*Math.abs(nr.y)+r.z*Math.abs(nr.z),l=e.dot(nr),c=n.dot(nr),f=i.dot(nr);if(Math.max(-Math.max(l,c,f),Math.min(l,c,f))>a)return!1}return!0}const k1=new Wo,Ys=new z,Ic=new z;class Kf{constructor(e=new z,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):k1.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ys.subVectors(e,this.center);const n=Ys.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Ys,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ic.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ys.copy(e.center).add(Ic)),this.expandByPoint(Ys.copy(e.center).sub(Ic))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ti=new z,Uc=new z,ga=new z,wi=new z,Fc=new z,va=new z,kc=new z;class O1{constructor(e=new z,n=new z(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ti)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=ti.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(ti.copy(this.origin).addScaledVector(this.direction,n),ti.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Uc.copy(e).add(n).multiplyScalar(.5),ga.copy(n).sub(e).normalize(),wi.copy(this.origin).sub(Uc);const s=e.distanceTo(n)*.5,o=-this.direction.dot(ga),a=wi.dot(this.direction),l=-wi.dot(ga),c=wi.lengthSq(),f=Math.abs(1-o*o);let h,d,p,y;if(f>0)if(h=o*l-a,d=o*a-l,y=s*f,h>=0)if(d>=-y)if(d<=y){const S=1/f;h*=S,d*=S,p=h*(h+o*d+2*a)+d*(o*h+d+2*l)+c}else d=s,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*l)+c;else d=-s,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*l)+c;else d<=-y?(h=Math.max(0,-(-o*s+a)),d=h>0?-s:Math.min(Math.max(-s,-l),s),p=-h*h+d*(d+2*l)+c):d<=y?(h=0,d=Math.min(Math.max(-s,-l),s),p=d*(d+2*l)+c):(h=Math.max(0,-(o*s+a)),d=h>0?s:Math.min(Math.max(-s,-l),s),p=-h*h+d*(d+2*l)+c);else d=o>0?-s:s,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(Uc).addScaledVector(ga,d),p}intersectSphere(e,n){ti.subVectors(e.center,this.origin);const i=ti.dot(this.direction),r=ti.dot(ti)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,f=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),f>=0?(s=(e.min.y-d.y)*f,o=(e.max.y-d.y)*f):(s=(e.max.y-d.y)*f,o=(e.min.y-d.y)*f),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,ti)!==null}intersectTriangle(e,n,i,r,s){Fc.subVectors(n,e),va.subVectors(i,e),kc.crossVectors(Fc,va);let o=this.direction.dot(kc),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;wi.subVectors(this.origin,e);const l=a*this.direction.dot(va.crossVectors(wi,va));if(l<0)return null;const c=a*this.direction.dot(Fc.cross(wi));if(c<0||l+c>o)return null;const f=-a*wi.dot(kc);return f<0?null:this.at(f/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class vt{constructor(e,n,i,r,s,o,a,l,c,f,h,d,p,y,S,m){vt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,f,h,d,p,y,S,m)}set(e,n,i,r,s,o,a,l,c,f,h,d,p,y,S,m){const u=this.elements;return u[0]=e,u[4]=n,u[8]=i,u[12]=r,u[1]=s,u[5]=o,u[9]=a,u[13]=l,u[2]=c,u[6]=f,u[10]=h,u[14]=d,u[3]=p,u[7]=y,u[11]=S,u[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new vt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/Or.setFromMatrixColumn(e,0).length(),s=1/Or.setFromMatrixColumn(e,1).length(),o=1/Or.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),f=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const d=o*f,p=o*h,y=a*f,S=a*h;n[0]=l*f,n[4]=-l*h,n[8]=c,n[1]=p+y*c,n[5]=d-S*c,n[9]=-a*l,n[2]=S-d*c,n[6]=y+p*c,n[10]=o*l}else if(e.order==="YXZ"){const d=l*f,p=l*h,y=c*f,S=c*h;n[0]=d+S*a,n[4]=y*a-p,n[8]=o*c,n[1]=o*h,n[5]=o*f,n[9]=-a,n[2]=p*a-y,n[6]=S+d*a,n[10]=o*l}else if(e.order==="ZXY"){const d=l*f,p=l*h,y=c*f,S=c*h;n[0]=d-S*a,n[4]=-o*h,n[8]=y+p*a,n[1]=p+y*a,n[5]=o*f,n[9]=S-d*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const d=o*f,p=o*h,y=a*f,S=a*h;n[0]=l*f,n[4]=y*c-p,n[8]=d*c+S,n[1]=l*h,n[5]=S*c+d,n[9]=p*c-y,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const d=o*l,p=o*c,y=a*l,S=a*c;n[0]=l*f,n[4]=S-d*h,n[8]=y*h+p,n[1]=h,n[5]=o*f,n[9]=-a*f,n[2]=-c*f,n[6]=p*h+y,n[10]=d-S*h}else if(e.order==="XZY"){const d=o*l,p=o*c,y=a*l,S=a*c;n[0]=l*f,n[4]=-h,n[8]=c*f,n[1]=d*h+S,n[5]=o*f,n[9]=p*h-y,n[2]=y*h-p,n[6]=a*f,n[10]=S*h+d}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(z1,e,B1)}lookAt(e,n,i){const r=this.elements;return un.subVectors(e,n),un.lengthSq()===0&&(un.z=1),un.normalize(),Ti.crossVectors(i,un),Ti.lengthSq()===0&&(Math.abs(i.z)===1?un.x+=1e-4:un.z+=1e-4,un.normalize(),Ti.crossVectors(i,un)),Ti.normalize(),xa.crossVectors(un,Ti),r[0]=Ti.x,r[4]=xa.x,r[8]=un.x,r[1]=Ti.y,r[5]=xa.y,r[9]=un.y,r[2]=Ti.z,r[6]=xa.z,r[10]=un.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],f=i[1],h=i[5],d=i[9],p=i[13],y=i[2],S=i[6],m=i[10],u=i[14],v=i[3],g=i[7],M=i[11],P=i[15],b=r[0],T=r[4],R=r[8],L=r[12],x=r[1],E=r[5],U=r[9],B=r[13],O=r[2],X=r[6],j=r[10],Y=r[14],N=r[3],Q=r[7],ee=r[11],le=r[15];return s[0]=o*b+a*x+l*O+c*N,s[4]=o*T+a*E+l*X+c*Q,s[8]=o*R+a*U+l*j+c*ee,s[12]=o*L+a*B+l*Y+c*le,s[1]=f*b+h*x+d*O+p*N,s[5]=f*T+h*E+d*X+p*Q,s[9]=f*R+h*U+d*j+p*ee,s[13]=f*L+h*B+d*Y+p*le,s[2]=y*b+S*x+m*O+u*N,s[6]=y*T+S*E+m*X+u*Q,s[10]=y*R+S*U+m*j+u*ee,s[14]=y*L+S*B+m*Y+u*le,s[3]=v*b+g*x+M*O+P*N,s[7]=v*T+g*E+M*X+P*Q,s[11]=v*R+g*U+M*j+P*ee,s[15]=v*L+g*B+M*Y+P*le,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],f=e[2],h=e[6],d=e[10],p=e[14],y=e[3],S=e[7],m=e[11],u=e[15];return y*(+s*l*h-r*c*h-s*a*d+i*c*d+r*a*p-i*l*p)+S*(+n*l*p-n*c*d+s*o*d-r*o*p+r*c*f-s*l*f)+m*(+n*c*h-n*a*p-s*o*h+i*o*p+s*a*f-i*c*f)+u*(-r*a*f-n*l*h+n*a*d+r*o*h-i*o*d+i*l*f)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],f=e[8],h=e[9],d=e[10],p=e[11],y=e[12],S=e[13],m=e[14],u=e[15],v=h*m*c-S*d*c+S*l*p-a*m*p-h*l*u+a*d*u,g=y*d*c-f*m*c-y*l*p+o*m*p+f*l*u-o*d*u,M=f*S*c-y*h*c+y*a*p-o*S*p-f*a*u+o*h*u,P=y*h*l-f*S*l-y*a*d+o*S*d+f*a*m-o*h*m,b=n*v+i*g+r*M+s*P;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/b;return e[0]=v*T,e[1]=(S*d*s-h*m*s-S*r*p+i*m*p+h*r*u-i*d*u)*T,e[2]=(a*m*s-S*l*s+S*r*c-i*m*c-a*r*u+i*l*u)*T,e[3]=(h*l*s-a*d*s-h*r*c+i*d*c+a*r*p-i*l*p)*T,e[4]=g*T,e[5]=(f*m*s-y*d*s+y*r*p-n*m*p-f*r*u+n*d*u)*T,e[6]=(y*l*s-o*m*s-y*r*c+n*m*c+o*r*u-n*l*u)*T,e[7]=(o*d*s-f*l*s+f*r*c-n*d*c-o*r*p+n*l*p)*T,e[8]=M*T,e[9]=(y*h*s-f*S*s-y*i*p+n*S*p+f*i*u-n*h*u)*T,e[10]=(o*S*s-y*a*s+y*i*c-n*S*c-o*i*u+n*a*u)*T,e[11]=(f*a*s-o*h*s-f*i*c+n*h*c+o*i*p-n*a*p)*T,e[12]=P*T,e[13]=(f*S*r-y*h*r+y*i*d-n*S*d-f*i*m+n*h*m)*T,e[14]=(y*a*r-o*S*r-y*i*l+n*S*l+o*i*m-n*a*m)*T,e[15]=(o*h*r-f*a*r+f*i*l-n*h*l-o*i*d+n*a*d)*T,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,f=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,f*a+i,f*l-r*o,0,c*l-r*a,f*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,f=o+o,h=a+a,d=s*c,p=s*f,y=s*h,S=o*f,m=o*h,u=a*h,v=l*c,g=l*f,M=l*h,P=i.x,b=i.y,T=i.z;return r[0]=(1-(S+u))*P,r[1]=(p+M)*P,r[2]=(y-g)*P,r[3]=0,r[4]=(p-M)*b,r[5]=(1-(d+u))*b,r[6]=(m+v)*b,r[7]=0,r[8]=(y+g)*T,r[9]=(m-v)*T,r[10]=(1-(d+S))*T,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=Or.set(r[0],r[1],r[2]).length();const o=Or.set(r[4],r[5],r[6]).length(),a=Or.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Ln.copy(this);const c=1/s,f=1/o,h=1/a;return Ln.elements[0]*=c,Ln.elements[1]*=c,Ln.elements[2]*=c,Ln.elements[4]*=f,Ln.elements[5]*=f,Ln.elements[6]*=f,Ln.elements[8]*=h,Ln.elements[9]*=h,Ln.elements[10]*=h,n.setFromRotationMatrix(Ln),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=fi){const l=this.elements,c=2*s/(n-e),f=2*s/(i-r),h=(n+e)/(n-e),d=(i+r)/(i-r);let p,y;if(a===fi)p=-(o+s)/(o-s),y=-2*o*s/(o-s);else if(a===Al)p=-o/(o-s),y=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=f,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=y,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=fi){const l=this.elements,c=1/(n-e),f=1/(i-r),h=1/(o-s),d=(n+e)*c,p=(i+r)*f;let y,S;if(a===fi)y=(o+s)*h,S=-2*h;else if(a===Al)y=s*h,S=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*f,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=S,l[14]=-y,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Or=new z,Ln=new vt,z1=new z(0,0,0),B1=new z(1,1,1),Ti=new z,xa=new z,un=new z,zp=new vt,Bp=new jo;class Qn{constructor(e=0,n=0,i=0,r=Qn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],f=r[9],h=r[2],d=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(Yt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-f,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Yt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Yt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Yt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Yt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Yt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-f,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return zp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(zp,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Bp.setFromEuler(this),this.setFromQuaternion(Bp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Qn.DEFAULT_ORDER="XYZ";class fv{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let H1=0;const Hp=new z,zr=new jo,ni=new vt,_a=new z,qs=new z,V1=new z,G1=new jo,Vp=new z(1,0,0),Gp=new z(0,1,0),jp=new z(0,0,1),Wp={type:"added"},j1={type:"removed"},Br={type:"childadded",child:null},Oc={type:"childremoved",child:null};class Lt extends Is{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:H1++}),this.uuid=Us(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Lt.DEFAULT_UP.clone();const e=new z,n=new Qn,i=new jo,r=new z(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new vt},normalMatrix:{value:new Oe}}),this.matrix=new vt,this.matrixWorld=new vt,this.matrixAutoUpdate=Lt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Lt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new fv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return zr.setFromAxisAngle(e,n),this.quaternion.multiply(zr),this}rotateOnWorldAxis(e,n){return zr.setFromAxisAngle(e,n),this.quaternion.premultiply(zr),this}rotateX(e){return this.rotateOnAxis(Vp,e)}rotateY(e){return this.rotateOnAxis(Gp,e)}rotateZ(e){return this.rotateOnAxis(jp,e)}translateOnAxis(e,n){return Hp.copy(e).applyQuaternion(this.quaternion),this.position.add(Hp.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Vp,e)}translateY(e){return this.translateOnAxis(Gp,e)}translateZ(e){return this.translateOnAxis(jp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ni.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?_a.copy(e):_a.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),qs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ni.lookAt(qs,_a,this.up):ni.lookAt(_a,qs,this.up),this.quaternion.setFromRotationMatrix(ni),r&&(ni.extractRotation(r.matrixWorld),zr.setFromRotationMatrix(ni),this.quaternion.premultiply(zr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Wp),Br.child=e,this.dispatchEvent(Br),Br.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(j1),Oc.child=e,this.dispatchEvent(Oc),Oc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ni.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ni.multiply(e.parent.matrixWorld)),e.applyMatrix4(ni),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Wp),Br.child=e,this.dispatchEvent(Br),Br.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qs,e,V1),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qs,G1,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,f=l.length;c<f;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),f=o(e.images),h=o(e.shapes),d=o(e.skeletons),p=o(e.animations),y=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),f.length>0&&(i.images=f),h.length>0&&(i.shapes=h),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),y.length>0&&(i.nodes=y)}return i.object=r,i;function o(a){const l=[];for(const c in a){const f=a[c];delete f.metadata,l.push(f)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Lt.DEFAULT_UP=new z(0,1,0);Lt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Lt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Dn=new z,ii=new z,zc=new z,ri=new z,Hr=new z,Vr=new z,Xp=new z,Bc=new z,Hc=new z,Vc=new z,Gc=new gt,jc=new gt,Wc=new gt;class On{constructor(e=new z,n=new z,i=new z){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Dn.subVectors(e,n),r.cross(Dn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Dn.subVectors(r,n),ii.subVectors(i,n),zc.subVectors(e,n);const o=Dn.dot(Dn),a=Dn.dot(ii),l=Dn.dot(zc),c=ii.dot(ii),f=ii.dot(zc),h=o*c-a*a;if(h===0)return s.set(0,0,0),null;const d=1/h,p=(c*l-a*f)*d,y=(o*f-a*l)*d;return s.set(1-p-y,y,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,ri)===null?!1:ri.x>=0&&ri.y>=0&&ri.x+ri.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,ri)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,ri.x),l.addScaledVector(o,ri.y),l.addScaledVector(a,ri.z),l)}static getInterpolatedAttribute(e,n,i,r,s,o){return Gc.setScalar(0),jc.setScalar(0),Wc.setScalar(0),Gc.fromBufferAttribute(e,n),jc.fromBufferAttribute(e,i),Wc.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(Gc,s.x),o.addScaledVector(jc,s.y),o.addScaledVector(Wc,s.z),o}static isFrontFacing(e,n,i,r){return Dn.subVectors(i,n),ii.subVectors(e,n),Dn.cross(ii).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Dn.subVectors(this.c,this.b),ii.subVectors(this.a,this.b),Dn.cross(ii).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return On.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return On.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return On.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return On.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return On.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;Hr.subVectors(r,i),Vr.subVectors(s,i),Bc.subVectors(e,i);const l=Hr.dot(Bc),c=Vr.dot(Bc);if(l<=0&&c<=0)return n.copy(i);Hc.subVectors(e,r);const f=Hr.dot(Hc),h=Vr.dot(Hc);if(f>=0&&h<=f)return n.copy(r);const d=l*h-f*c;if(d<=0&&l>=0&&f<=0)return o=l/(l-f),n.copy(i).addScaledVector(Hr,o);Vc.subVectors(e,s);const p=Hr.dot(Vc),y=Vr.dot(Vc);if(y>=0&&p<=y)return n.copy(s);const S=p*c-l*y;if(S<=0&&c>=0&&y<=0)return a=c/(c-y),n.copy(i).addScaledVector(Vr,a);const m=f*y-p*h;if(m<=0&&h-f>=0&&p-y>=0)return Xp.subVectors(s,r),a=(h-f)/(h-f+(p-y)),n.copy(r).addScaledVector(Xp,a);const u=1/(m+S+d);return o=S*u,a=d*u,n.copy(i).addScaledVector(Hr,o).addScaledVector(Vr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const hv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ai={h:0,s:0,l:0},ya={h:0,s:0,l:0};function Xc(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class qe{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Xn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,tt.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=tt.workingColorSpace){return this.r=e,this.g=n,this.b=i,tt.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=tt.workingColorSpace){if(e=qf(e,1),n=Yt(n,0,1),i=Yt(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=Xc(o,s,e+1/3),this.g=Xc(o,s,e),this.b=Xc(o,s,e-1/3)}return tt.toWorkingColorSpace(this,r),this}setStyle(e,n=Xn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Xn){const i=hv[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ms(e.r),this.g=ms(e.g),this.b=ms(e.b),this}copyLinearToSRGB(e){return this.r=Pc(e.r),this.g=Pc(e.g),this.b=Pc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Xn){return tt.fromWorkingColorSpace(Bt.copy(this),e),Math.round(Yt(Bt.r*255,0,255))*65536+Math.round(Yt(Bt.g*255,0,255))*256+Math.round(Yt(Bt.b*255,0,255))}getHexString(e=Xn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=tt.workingColorSpace){tt.fromWorkingColorSpace(Bt.copy(this),n);const i=Bt.r,r=Bt.g,s=Bt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const f=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=f<=.5?h/(o+a):h/(2-o-a),o){case i:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-i)/h+2;break;case s:l=(i-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=f,e}getRGB(e,n=tt.workingColorSpace){return tt.fromWorkingColorSpace(Bt.copy(this),n),e.r=Bt.r,e.g=Bt.g,e.b=Bt.b,e}getStyle(e=Xn){tt.fromWorkingColorSpace(Bt.copy(this),e);const n=Bt.r,i=Bt.g,r=Bt.b;return e!==Xn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Ai),this.setHSL(Ai.h+e,Ai.s+n,Ai.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Ai),e.getHSL(ya);const i=po(Ai.h,ya.h,n),r=po(Ai.s,ya.s,n),s=po(Ai.l,ya.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Bt=new qe;qe.NAMES=hv;let W1=0;class Fs extends Is{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:W1++}),this.uuid=Us(),this.name="",this.type="Material",this.blending=hs,this.side=Yi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=nd,this.blendDst=id,this.blendEquation=dr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new qe(0,0,0),this.blendAlpha=0,this.depthFunc=ws,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Np,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Dr,this.stencilZFail=Dr,this.stencilZPass=Dr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==hs&&(i.blending=this.blending),this.side!==Yi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==nd&&(i.blendSrc=this.blendSrc),this.blendDst!==id&&(i.blendDst=this.blendDst),this.blendEquation!==dr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ws&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Np&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Dr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Dr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Dr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class pv extends Fs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qn,this.combine=qg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const St=new z,Sa=new $e;class Zn{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Lp,this.updateRanges=[],this.gpuType=di,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Sa.fromBufferAttribute(this,n),Sa.applyMatrix3(e),this.setXY(n,Sa.x,Sa.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)St.fromBufferAttribute(this,n),St.applyMatrix3(e),this.setXYZ(n,St.x,St.y,St.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)St.fromBufferAttribute(this,n),St.applyMatrix4(e),this.setXYZ(n,St.x,St.y,St.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)St.fromBufferAttribute(this,n),St.applyNormalMatrix(e),this.setXYZ(n,St.x,St.y,St.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)St.fromBufferAttribute(this,n),St.transformDirection(e),this.setXYZ(n,St.x,St.y,St.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=$r(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=Wt(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=$r(n,this.array)),n}setX(e,n){return this.normalized&&(n=Wt(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=$r(n,this.array)),n}setY(e,n){return this.normalized&&(n=Wt(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=$r(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Wt(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=$r(n,this.array)),n}setW(e,n){return this.normalized&&(n=Wt(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=Wt(n,this.array),i=Wt(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=Wt(n,this.array),i=Wt(i,this.array),r=Wt(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=Wt(n,this.array),i=Wt(i,this.array),r=Wt(r,this.array),s=Wt(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Lp&&(e.usage=this.usage),e}}class mv extends Zn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class gv extends Zn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class At extends Zn{constructor(e,n,i){super(new Float32Array(e),n,i)}}let X1=0;const yn=new vt,$c=new Lt,Gr=new z,dn=new Wo,Ks=new Wo,Rt=new z;class Gn extends Is{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:X1++}),this.uuid=Us(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(cv(e)?gv:mv)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Oe().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return yn.makeRotationFromQuaternion(e),this.applyMatrix4(yn),this}rotateX(e){return yn.makeRotationX(e),this.applyMatrix4(yn),this}rotateY(e){return yn.makeRotationY(e),this.applyMatrix4(yn),this}rotateZ(e){return yn.makeRotationZ(e),this.applyMatrix4(yn),this}translate(e,n,i){return yn.makeTranslation(e,n,i),this.applyMatrix4(yn),this}scale(e,n,i){return yn.makeScale(e,n,i),this.applyMatrix4(yn),this}lookAt(e){return $c.lookAt(e),$c.updateMatrix(),this.applyMatrix4($c.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Gr).negate(),this.translate(Gr.x,Gr.y,Gr.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new At(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Wo);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];dn.setFromBufferAttribute(s),this.morphTargetsRelative?(Rt.addVectors(this.boundingBox.min,dn.min),this.boundingBox.expandByPoint(Rt),Rt.addVectors(this.boundingBox.max,dn.max),this.boundingBox.expandByPoint(Rt)):(this.boundingBox.expandByPoint(dn.min),this.boundingBox.expandByPoint(dn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Kf);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new z,1/0);return}if(e){const i=this.boundingSphere.center;if(dn.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];Ks.setFromBufferAttribute(a),this.morphTargetsRelative?(Rt.addVectors(dn.min,Ks.min),dn.expandByPoint(Rt),Rt.addVectors(dn.max,Ks.max),dn.expandByPoint(Rt)):(dn.expandByPoint(Ks.min),dn.expandByPoint(Ks.max))}dn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Rt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Rt));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,f=a.count;c<f;c++)Rt.fromBufferAttribute(a,c),l&&(Gr.fromBufferAttribute(e,c),Rt.add(Gr)),r=Math.max(r,i.distanceToSquared(Rt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Zn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let R=0;R<i.count;R++)a[R]=new z,l[R]=new z;const c=new z,f=new z,h=new z,d=new $e,p=new $e,y=new $e,S=new z,m=new z;function u(R,L,x){c.fromBufferAttribute(i,R),f.fromBufferAttribute(i,L),h.fromBufferAttribute(i,x),d.fromBufferAttribute(s,R),p.fromBufferAttribute(s,L),y.fromBufferAttribute(s,x),f.sub(c),h.sub(c),p.sub(d),y.sub(d);const E=1/(p.x*y.y-y.x*p.y);isFinite(E)&&(S.copy(f).multiplyScalar(y.y).addScaledVector(h,-p.y).multiplyScalar(E),m.copy(h).multiplyScalar(p.x).addScaledVector(f,-y.x).multiplyScalar(E),a[R].add(S),a[L].add(S),a[x].add(S),l[R].add(m),l[L].add(m),l[x].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let R=0,L=v.length;R<L;++R){const x=v[R],E=x.start,U=x.count;for(let B=E,O=E+U;B<O;B+=3)u(e.getX(B+0),e.getX(B+1),e.getX(B+2))}const g=new z,M=new z,P=new z,b=new z;function T(R){P.fromBufferAttribute(r,R),b.copy(P);const L=a[R];g.copy(L),g.sub(P.multiplyScalar(P.dot(L))).normalize(),M.crossVectors(b,L);const E=M.dot(l[R])<0?-1:1;o.setXYZW(R,g.x,g.y,g.z,E)}for(let R=0,L=v.length;R<L;++R){const x=v[R],E=x.start,U=x.count;for(let B=E,O=E+U;B<O;B+=3)T(e.getX(B+0)),T(e.getX(B+1)),T(e.getX(B+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Zn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);const r=new z,s=new z,o=new z,a=new z,l=new z,c=new z,f=new z,h=new z;if(e)for(let d=0,p=e.count;d<p;d+=3){const y=e.getX(d+0),S=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(n,y),s.fromBufferAttribute(n,S),o.fromBufferAttribute(n,m),f.subVectors(o,s),h.subVectors(r,s),f.cross(h),a.fromBufferAttribute(i,y),l.fromBufferAttribute(i,S),c.fromBufferAttribute(i,m),a.add(f),l.add(f),c.add(f),i.setXYZ(y,a.x,a.y,a.z),i.setXYZ(S,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=n.count;d<p;d+=3)r.fromBufferAttribute(n,d+0),s.fromBufferAttribute(n,d+1),o.fromBufferAttribute(n,d+2),f.subVectors(o,s),h.subVectors(r,s),f.cross(h),i.setXYZ(d+0,f.x,f.y,f.z),i.setXYZ(d+1,f.x,f.y,f.z),i.setXYZ(d+2,f.x,f.y,f.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Rt.fromBufferAttribute(e,n),Rt.normalize(),e.setXYZ(n,Rt.x,Rt.y,Rt.z)}toNonIndexed(){function e(a,l){const c=a.array,f=a.itemSize,h=a.normalized,d=new c.constructor(l.length*f);let p=0,y=0;for(let S=0,m=l.length;S<m;S++){a.isInterleavedBufferAttribute?p=l[S]*a.data.stride+a.offset:p=l[S]*f;for(let u=0;u<f;u++)d[y++]=c[p++]}return new Zn(d,f,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Gn,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let f=0,h=c.length;f<h;f++){const d=c[f],p=e(d,i);l.push(p)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],f=[];for(let h=0,d=c.length;h<d;h++){const p=c[h];f.push(p.toJSON(e.data))}f.length>0&&(r[l]=f,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const c in r){const f=r[c];this.setAttribute(c,f.clone(n))}const s=e.morphAttributes;for(const c in s){const f=[],h=s[c];for(let d=0,p=h.length;d<p;d++)f.push(h[d].clone(n));this.morphAttributes[c]=f}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,f=o.length;c<f;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const $p=new vt,ir=new O1,Ma=new Kf,Yp=new z,Ea=new z,wa=new z,Ta=new z,Yc=new z,Aa=new z,qp=new z,ba=new z;class Mt extends Lt{constructor(e=new Gn,n=new pv){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Aa.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const f=a[l],h=s[l];f!==0&&(Yc.fromBufferAttribute(h,e),o?Aa.addScaledVector(Yc,f):Aa.addScaledVector(Yc.sub(n),f))}n.add(Aa)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ma.copy(i.boundingSphere),Ma.applyMatrix4(s),ir.copy(e.ray).recast(e.near),!(Ma.containsPoint(ir.origin)===!1&&(ir.intersectSphere(Ma,Yp)===null||ir.origin.distanceToSquared(Yp)>(e.far-e.near)**2))&&($p.copy(s).invert(),ir.copy(e.ray).applyMatrix4($p),!(i.boundingBox!==null&&ir.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,ir)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,f=s.attributes.uv1,h=s.attributes.normal,d=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let y=0,S=d.length;y<S;y++){const m=d[y],u=o[m.materialIndex],v=Math.max(m.start,p.start),g=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let M=v,P=g;M<P;M+=3){const b=a.getX(M),T=a.getX(M+1),R=a.getX(M+2);r=Ca(this,u,e,i,c,f,h,b,T,R),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const y=Math.max(0,p.start),S=Math.min(a.count,p.start+p.count);for(let m=y,u=S;m<u;m+=3){const v=a.getX(m),g=a.getX(m+1),M=a.getX(m+2);r=Ca(this,o,e,i,c,f,h,v,g,M),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let y=0,S=d.length;y<S;y++){const m=d[y],u=o[m.materialIndex],v=Math.max(m.start,p.start),g=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let M=v,P=g;M<P;M+=3){const b=M,T=M+1,R=M+2;r=Ca(this,u,e,i,c,f,h,b,T,R),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const y=Math.max(0,p.start),S=Math.min(l.count,p.start+p.count);for(let m=y,u=S;m<u;m+=3){const v=m,g=m+1,M=m+2;r=Ca(this,o,e,i,c,f,h,v,g,M),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function $1(t,e,n,i,r,s,o,a){let l;if(e.side===on?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Yi,a),l===null)return null;ba.copy(a),ba.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(ba);return c<n.near||c>n.far?null:{distance:c,point:ba.clone(),object:t}}function Ca(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,Ea),t.getVertexPosition(l,wa),t.getVertexPosition(c,Ta);const f=$1(t,e,n,i,Ea,wa,Ta,qp);if(f){const h=new z;On.getBarycoord(qp,Ea,wa,Ta,h),r&&(f.uv=On.getInterpolatedAttribute(r,a,l,c,h,new $e)),s&&(f.uv1=On.getInterpolatedAttribute(s,a,l,c,h,new $e)),o&&(f.normal=On.getInterpolatedAttribute(o,a,l,c,h,new z),f.normal.dot(i.direction)>0&&f.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new z,materialIndex:0};On.getNormal(Ea,wa,Ta,d.normal),f.face=d,f.barycoord=h}return f}class Pr extends Gn{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],f=[],h=[];let d=0,p=0;y("z","y","x",-1,-1,i,n,e,o,s,0),y("z","y","x",1,-1,i,n,-e,o,s,1),y("x","z","y",1,1,e,i,n,r,o,2),y("x","z","y",1,-1,e,i,-n,r,o,3),y("x","y","z",1,-1,e,n,i,r,s,4),y("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new At(c,3)),this.setAttribute("normal",new At(f,3)),this.setAttribute("uv",new At(h,2));function y(S,m,u,v,g,M,P,b,T,R,L){const x=M/T,E=P/R,U=M/2,B=P/2,O=b/2,X=T+1,j=R+1;let Y=0,N=0;const Q=new z;for(let ee=0;ee<j;ee++){const le=ee*E-B;for(let we=0;we<X;we++){const ze=we*x-U;Q[S]=ze*v,Q[m]=le*g,Q[u]=O,c.push(Q.x,Q.y,Q.z),Q[S]=0,Q[m]=0,Q[u]=b>0?1:-1,f.push(Q.x,Q.y,Q.z),h.push(we/T),h.push(1-ee/R),Y+=1}}for(let ee=0;ee<R;ee++)for(let le=0;le<T;le++){const we=d+le+X*ee,ze=d+le+X*(ee+1),q=d+(le+1)+X*(ee+1),re=d+(le+1)+X*ee;l.push(we,ze,re),l.push(ze,q,re),N+=6}a.addGroup(p,N,L),p+=N,d+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Pr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Rs(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function Xt(t){const e={};for(let n=0;n<t.length;n++){const i=Rs(t[n]);for(const r in i)e[r]=i[r]}return e}function Y1(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function vv(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:tt.workingColorSpace}const q1={clone:Rs,merge:Xt};var K1=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Z1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class qi extends Fs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=K1,this.fragmentShader=Z1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Rs(e.uniforms),this.uniformsGroups=Y1(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class xv extends Lt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new vt,this.projectionMatrix=new vt,this.projectionMatrixInverse=new vt,this.coordinateSystem=fi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const bi=new z,Kp=new $e,Zp=new $e;class En extends xv{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Io*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ho*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Io*2*Math.atan(Math.tan(ho*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){bi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(bi.x,bi.y).multiplyScalar(-e/bi.z),bi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(bi.x,bi.y).multiplyScalar(-e/bi.z)}getViewSize(e,n){return this.getViewBounds(e,Kp,Zp),n.subVectors(Zp,Kp)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(ho*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const jr=-90,Wr=1;class Q1 extends Lt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new En(jr,Wr,e,n);r.layers=this.layers,this.add(r);const s=new En(jr,Wr,e,n);s.layers=this.layers,this.add(s);const o=new En(jr,Wr,e,n);o.layers=this.layers,this.add(o);const a=new En(jr,Wr,e,n);a.layers=this.layers,this.add(a);const l=new En(jr,Wr,e,n);l.layers=this.layers,this.add(l);const c=new En(jr,Wr,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const c of n)this.remove(c);if(e===fi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Al)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,f]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),y=e.xr.enabled;e.xr.enabled=!1;const S=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=S,e.setRenderTarget(i,5,r),e.render(n,f),e.setRenderTarget(h,d,p),e.xr.enabled=y,i.texture.needsPMREMUpdate=!0}}class _v extends an{constructor(e,n,i,r,s,o,a,l,c,f){e=e!==void 0?e:[],n=n!==void 0?n:Ts,super(e,n,i,r,s,o,a,l,c,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class J1 extends br{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new _v(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:kn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Pr(5,5,5),s=new qi({name:"CubemapFromEquirect",uniforms:Rs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:on,blending:ji});s.uniforms.tEquirect.value=n;const o=new Mt(r,s),a=n.minFilter;return n.minFilter===vr&&(n.minFilter=kn),new Q1(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}const qc=new z,eS=new z,tS=new Oe;class cr{constructor(e=new z(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=qc.subVectors(i,n).cross(eS.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(qc),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||tS.getNormalMatrix(e),r=this.coplanarPoint(qc).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const rr=new Kf,Ra=new z;class Zf{constructor(e=new cr,n=new cr,i=new cr,r=new cr,s=new cr,o=new cr){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=fi){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],f=r[5],h=r[6],d=r[7],p=r[8],y=r[9],S=r[10],m=r[11],u=r[12],v=r[13],g=r[14],M=r[15];if(i[0].setComponents(l-s,d-c,m-p,M-u).normalize(),i[1].setComponents(l+s,d+c,m+p,M+u).normalize(),i[2].setComponents(l+o,d+f,m+y,M+v).normalize(),i[3].setComponents(l-o,d-f,m-y,M-v).normalize(),i[4].setComponents(l-a,d-h,m-S,M-g).normalize(),n===fi)i[5].setComponents(l+a,d+h,m+S,M+g).normalize();else if(n===Al)i[5].setComponents(a,h,S,g).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),rr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),rr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(rr)}intersectsSprite(e){return rr.center.set(0,0,0),rr.radius=.7071067811865476,rr.applyMatrix4(e.matrixWorld),this.intersectsSphere(rr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Ra.x=r.normal.x>0?e.max.x:e.min.x,Ra.y=r.normal.y>0?e.max.y:e.min.y,Ra.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ra)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function yv(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function nS(t){const e=new WeakMap;function n(a,l){const c=a.array,f=a.usage,h=c.byteLength,d=t.createBuffer();t.bindBuffer(l,d),t.bufferData(l,c,f),a.onUploadCallback();let p;if(c instanceof Float32Array)p=t.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=t.SHORT;else if(c instanceof Uint32Array)p=t.UNSIGNED_INT;else if(c instanceof Int32Array)p=t.INT;else if(c instanceof Int8Array)p=t.BYTE;else if(c instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,l,c){const f=l.array,h=l.updateRanges;if(t.bindBuffer(c,a),h.length===0)t.bufferSubData(c,0,f);else{h.sort((p,y)=>p.start-y.start);let d=0;for(let p=1;p<h.length;p++){const y=h[d],S=h[p];S.start<=y.start+y.count+1?y.count=Math.max(y.count,S.start+S.count-y.start):(++d,h[d]=S)}h.length=d+1;for(let p=0,y=h.length;p<y;p++){const S=h[p];t.bufferSubData(c,S.start*f.BYTES_PER_ELEMENT,f,S.start,S.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const f=e.get(a);(!f||f.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}class Ps extends Gn{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,f=l+1,h=e/a,d=n/l,p=[],y=[],S=[],m=[];for(let u=0;u<f;u++){const v=u*d-o;for(let g=0;g<c;g++){const M=g*h-s;y.push(M,-v,0),S.push(0,0,1),m.push(g/a),m.push(1-u/l)}}for(let u=0;u<l;u++)for(let v=0;v<a;v++){const g=v+c*u,M=v+c*(u+1),P=v+1+c*(u+1),b=v+1+c*u;p.push(g,M,b),p.push(M,P,b)}this.setIndex(p),this.setAttribute("position",new At(y,3)),this.setAttribute("normal",new At(S,3)),this.setAttribute("uv",new At(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ps(e.width,e.height,e.widthSegments,e.heightSegments)}}var iS=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,rS=`#ifdef USE_ALPHAHASH
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
#endif`,sS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,oS=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,aS=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,lS=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,cS=`#ifdef USE_AOMAP
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
#endif`,uS=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,dS=`#ifdef USE_BATCHING
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
#endif`,fS=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,hS=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,pS=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,mS=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,gS=`#ifdef USE_IRIDESCENCE
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
#endif`,vS=`#ifdef USE_BUMPMAP
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
#endif`,xS=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,_S=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,yS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,SS=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,MS=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ES=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,wS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,TS=`#if defined( USE_COLOR_ALPHA )
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
#endif`,AS=`#define PI 3.141592653589793
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
} // validated`,bS=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,CS=`vec3 transformedNormal = objectNormal;
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
#endif`,RS=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,PS=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,NS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,LS=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,DS="gl_FragColor = linearToOutputTexel( gl_FragColor );",IS=`
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
}`,US=`#ifdef USE_ENVMAP
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
#endif`,FS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,kS=`#ifdef USE_ENVMAP
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
#endif`,OS=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,zS=`#ifdef USE_ENVMAP
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
#endif`,BS=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,HS=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,VS=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,GS=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,jS=`#ifdef USE_GRADIENTMAP
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
}`,WS=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,XS=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,$S=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,YS=`uniform bool receiveShadow;
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
#endif`,qS=`#ifdef USE_ENVMAP
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
#endif`,KS=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ZS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,QS=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,JS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,eM=`PhysicalMaterial material;
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
#endif`,tM=`struct PhysicalMaterial {
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
}`,nM=`
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
#endif`,iM=`#if defined( RE_IndirectDiffuse )
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
#endif`,rM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,sM=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,oM=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,aM=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,lM=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,cM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,uM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,dM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,fM=`#if defined( USE_POINTS_UV )
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
#endif`,hM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,pM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,mM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,gM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,vM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,xM=`#ifdef USE_MORPHTARGETS
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
#endif`,_M=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,yM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,SM=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,MM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,EM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,wM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,TM=`#ifdef USE_NORMALMAP
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
#endif`,AM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,bM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,CM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,RM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,PM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,NM=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,LM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,DM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,IM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,UM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,FM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,kM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,OM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,zM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,BM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,HM=`float getShadowMask() {
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
}`,VM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,GM=`#ifdef USE_SKINNING
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
#endif`,jM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,WM=`#ifdef USE_SKINNING
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
#endif`,XM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,$M=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,YM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,qM=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,KM=`#ifdef USE_TRANSMISSION
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
#endif`,ZM=`#ifdef USE_TRANSMISSION
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
#endif`,QM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,JM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,eE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,tE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const nE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,iE=`uniform sampler2D t2D;
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
}`,rE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sE=`#ifdef ENVMAP_TYPE_CUBE
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
}`,oE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,aE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lE=`#include <common>
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
}`,cE=`#if DEPTH_PACKING == 3200
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
}`,uE=`#define DISTANCE
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
}`,dE=`#define DISTANCE
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
}`,fE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,hE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pE=`uniform float scale;
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
}`,mE=`uniform vec3 diffuse;
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
}`,gE=`#include <common>
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
}`,vE=`uniform vec3 diffuse;
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
}`,xE=`#define LAMBERT
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
}`,_E=`#define LAMBERT
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
}`,yE=`#define MATCAP
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
}`,SE=`#define MATCAP
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
}`,ME=`#define NORMAL
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
}`,EE=`#define NORMAL
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
}`,wE=`#define PHONG
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
}`,TE=`#define PHONG
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
}`,AE=`#define STANDARD
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
}`,bE=`#define STANDARD
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
}`,CE=`#define TOON
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
}`,RE=`#define TOON
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
}`,PE=`uniform float size;
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
}`,NE=`uniform vec3 diffuse;
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
}`,LE=`#include <common>
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
}`,DE=`uniform vec3 color;
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
}`,IE=`uniform float rotation;
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
}`,UE=`uniform vec3 diffuse;
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
}`,ke={alphahash_fragment:iS,alphahash_pars_fragment:rS,alphamap_fragment:sS,alphamap_pars_fragment:oS,alphatest_fragment:aS,alphatest_pars_fragment:lS,aomap_fragment:cS,aomap_pars_fragment:uS,batching_pars_vertex:dS,batching_vertex:fS,begin_vertex:hS,beginnormal_vertex:pS,bsdfs:mS,iridescence_fragment:gS,bumpmap_pars_fragment:vS,clipping_planes_fragment:xS,clipping_planes_pars_fragment:_S,clipping_planes_pars_vertex:yS,clipping_planes_vertex:SS,color_fragment:MS,color_pars_fragment:ES,color_pars_vertex:wS,color_vertex:TS,common:AS,cube_uv_reflection_fragment:bS,defaultnormal_vertex:CS,displacementmap_pars_vertex:RS,displacementmap_vertex:PS,emissivemap_fragment:NS,emissivemap_pars_fragment:LS,colorspace_fragment:DS,colorspace_pars_fragment:IS,envmap_fragment:US,envmap_common_pars_fragment:FS,envmap_pars_fragment:kS,envmap_pars_vertex:OS,envmap_physical_pars_fragment:qS,envmap_vertex:zS,fog_vertex:BS,fog_pars_vertex:HS,fog_fragment:VS,fog_pars_fragment:GS,gradientmap_pars_fragment:jS,lightmap_pars_fragment:WS,lights_lambert_fragment:XS,lights_lambert_pars_fragment:$S,lights_pars_begin:YS,lights_toon_fragment:KS,lights_toon_pars_fragment:ZS,lights_phong_fragment:QS,lights_phong_pars_fragment:JS,lights_physical_fragment:eM,lights_physical_pars_fragment:tM,lights_fragment_begin:nM,lights_fragment_maps:iM,lights_fragment_end:rM,logdepthbuf_fragment:sM,logdepthbuf_pars_fragment:oM,logdepthbuf_pars_vertex:aM,logdepthbuf_vertex:lM,map_fragment:cM,map_pars_fragment:uM,map_particle_fragment:dM,map_particle_pars_fragment:fM,metalnessmap_fragment:hM,metalnessmap_pars_fragment:pM,morphinstance_vertex:mM,morphcolor_vertex:gM,morphnormal_vertex:vM,morphtarget_pars_vertex:xM,morphtarget_vertex:_M,normal_fragment_begin:yM,normal_fragment_maps:SM,normal_pars_fragment:MM,normal_pars_vertex:EM,normal_vertex:wM,normalmap_pars_fragment:TM,clearcoat_normal_fragment_begin:AM,clearcoat_normal_fragment_maps:bM,clearcoat_pars_fragment:CM,iridescence_pars_fragment:RM,opaque_fragment:PM,packing:NM,premultiplied_alpha_fragment:LM,project_vertex:DM,dithering_fragment:IM,dithering_pars_fragment:UM,roughnessmap_fragment:FM,roughnessmap_pars_fragment:kM,shadowmap_pars_fragment:OM,shadowmap_pars_vertex:zM,shadowmap_vertex:BM,shadowmask_pars_fragment:HM,skinbase_vertex:VM,skinning_pars_vertex:GM,skinning_vertex:jM,skinnormal_vertex:WM,specularmap_fragment:XM,specularmap_pars_fragment:$M,tonemapping_fragment:YM,tonemapping_pars_fragment:qM,transmission_fragment:KM,transmission_pars_fragment:ZM,uv_pars_fragment:QM,uv_pars_vertex:JM,uv_vertex:eE,worldpos_vertex:tE,background_vert:nE,background_frag:iE,backgroundCube_vert:rE,backgroundCube_frag:sE,cube_vert:oE,cube_frag:aE,depth_vert:lE,depth_frag:cE,distanceRGBA_vert:uE,distanceRGBA_frag:dE,equirect_vert:fE,equirect_frag:hE,linedashed_vert:pE,linedashed_frag:mE,meshbasic_vert:gE,meshbasic_frag:vE,meshlambert_vert:xE,meshlambert_frag:_E,meshmatcap_vert:yE,meshmatcap_frag:SE,meshnormal_vert:ME,meshnormal_frag:EE,meshphong_vert:wE,meshphong_frag:TE,meshphysical_vert:AE,meshphysical_frag:bE,meshtoon_vert:CE,meshtoon_frag:RE,points_vert:PE,points_frag:NE,shadow_vert:LE,shadow_frag:DE,sprite_vert:IE,sprite_frag:UE},ce={common:{diffuse:{value:new qe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Oe}},envmap:{envMap:{value:null},envMapRotation:{value:new Oe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Oe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Oe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Oe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Oe},normalScale:{value:new $e(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Oe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Oe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Oe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Oe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0},uvTransform:{value:new Oe}},sprite:{diffuse:{value:new qe(16777215)},opacity:{value:1},center:{value:new $e(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0}}},$n={basic:{uniforms:Xt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.fog]),vertexShader:ke.meshbasic_vert,fragmentShader:ke.meshbasic_frag},lambert:{uniforms:Xt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new qe(0)}}]),vertexShader:ke.meshlambert_vert,fragmentShader:ke.meshlambert_frag},phong:{uniforms:Xt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new qe(0)},specular:{value:new qe(1118481)},shininess:{value:30}}]),vertexShader:ke.meshphong_vert,fragmentShader:ke.meshphong_frag},standard:{uniforms:Xt([ce.common,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.roughnessmap,ce.metalnessmap,ce.fog,ce.lights,{emissive:{value:new qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag},toon:{uniforms:Xt([ce.common,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.gradientmap,ce.fog,ce.lights,{emissive:{value:new qe(0)}}]),vertexShader:ke.meshtoon_vert,fragmentShader:ke.meshtoon_frag},matcap:{uniforms:Xt([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,{matcap:{value:null}}]),vertexShader:ke.meshmatcap_vert,fragmentShader:ke.meshmatcap_frag},points:{uniforms:Xt([ce.points,ce.fog]),vertexShader:ke.points_vert,fragmentShader:ke.points_frag},dashed:{uniforms:Xt([ce.common,ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ke.linedashed_vert,fragmentShader:ke.linedashed_frag},depth:{uniforms:Xt([ce.common,ce.displacementmap]),vertexShader:ke.depth_vert,fragmentShader:ke.depth_frag},normal:{uniforms:Xt([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,{opacity:{value:1}}]),vertexShader:ke.meshnormal_vert,fragmentShader:ke.meshnormal_frag},sprite:{uniforms:Xt([ce.sprite,ce.fog]),vertexShader:ke.sprite_vert,fragmentShader:ke.sprite_frag},background:{uniforms:{uvTransform:{value:new Oe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ke.background_vert,fragmentShader:ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Oe}},vertexShader:ke.backgroundCube_vert,fragmentShader:ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ke.cube_vert,fragmentShader:ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ke.equirect_vert,fragmentShader:ke.equirect_frag},distanceRGBA:{uniforms:Xt([ce.common,ce.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ke.distanceRGBA_vert,fragmentShader:ke.distanceRGBA_frag},shadow:{uniforms:Xt([ce.lights,ce.fog,{color:{value:new qe(0)},opacity:{value:1}}]),vertexShader:ke.shadow_vert,fragmentShader:ke.shadow_frag}};$n.physical={uniforms:Xt([$n.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Oe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Oe},clearcoatNormalScale:{value:new $e(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Oe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Oe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Oe},sheen:{value:0},sheenColor:{value:new qe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Oe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Oe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Oe},transmissionSamplerSize:{value:new $e},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Oe},attenuationDistance:{value:0},attenuationColor:{value:new qe(0)},specularColor:{value:new qe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Oe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Oe},anisotropyVector:{value:new $e},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Oe}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag};const Pa={r:0,b:0,g:0},sr=new Qn,FE=new vt;function kE(t,e,n,i,r,s,o){const a=new qe(0);let l=s===!0?0:1,c,f,h=null,d=0,p=null;function y(v){let g=v.isScene===!0?v.background:null;return g&&g.isTexture&&(g=(v.backgroundBlurriness>0?n:e).get(g)),g}function S(v){let g=!1;const M=y(v);M===null?u(a,l):M&&M.isColor&&(u(M,1),g=!0);const P=t.xr.getEnvironmentBlendMode();P==="additive"?i.buffers.color.setClear(0,0,0,1,o):P==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||g)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function m(v,g){const M=y(g);M&&(M.isCubeTexture||M.mapping===Xl)?(f===void 0&&(f=new Mt(new Pr(1,1,1),new qi({name:"BackgroundCubeMaterial",uniforms:Rs($n.backgroundCube.uniforms),vertexShader:$n.backgroundCube.vertexShader,fragmentShader:$n.backgroundCube.fragmentShader,side:on,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(P,b,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(f)),sr.copy(g.backgroundRotation),sr.x*=-1,sr.y*=-1,sr.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(sr.y*=-1,sr.z*=-1),f.material.uniforms.envMap.value=M,f.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=g.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,f.material.uniforms.backgroundRotation.value.setFromMatrix4(FE.makeRotationFromEuler(sr)),f.material.toneMapped=tt.getTransfer(M.colorSpace)!==lt,(h!==M||d!==M.version||p!==t.toneMapping)&&(f.material.needsUpdate=!0,h=M,d=M.version,p=t.toneMapping),f.layers.enableAll(),v.unshift(f,f.geometry,f.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new Mt(new Ps(2,2),new qi({name:"BackgroundMaterial",uniforms:Rs($n.background.uniforms),vertexShader:$n.background.vertexShader,fragmentShader:$n.background.fragmentShader,side:Yi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,c.material.toneMapped=tt.getTransfer(M.colorSpace)!==lt,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(h!==M||d!==M.version||p!==t.toneMapping)&&(c.material.needsUpdate=!0,h=M,d=M.version,p=t.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null))}function u(v,g){v.getRGB(Pa,vv(t)),i.buffers.color.setClear(Pa.r,Pa.g,Pa.b,g,o)}return{getClearColor:function(){return a},setClearColor:function(v,g=1){a.set(v),l=g,u(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(v){l=v,u(a,l)},render:S,addToRenderList:m}}function OE(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=d(null);let s=r,o=!1;function a(x,E,U,B,O){let X=!1;const j=h(B,U,E);s!==j&&(s=j,c(s.object)),X=p(x,B,U,O),X&&y(x,B,U,O),O!==null&&e.update(O,t.ELEMENT_ARRAY_BUFFER),(X||o)&&(o=!1,M(x,E,U,B),O!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(O).buffer))}function l(){return t.createVertexArray()}function c(x){return t.bindVertexArray(x)}function f(x){return t.deleteVertexArray(x)}function h(x,E,U){const B=U.wireframe===!0;let O=i[x.id];O===void 0&&(O={},i[x.id]=O);let X=O[E.id];X===void 0&&(X={},O[E.id]=X);let j=X[B];return j===void 0&&(j=d(l()),X[B]=j),j}function d(x){const E=[],U=[],B=[];for(let O=0;O<n;O++)E[O]=0,U[O]=0,B[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:E,enabledAttributes:U,attributeDivisors:B,object:x,attributes:{},index:null}}function p(x,E,U,B){const O=s.attributes,X=E.attributes;let j=0;const Y=U.getAttributes();for(const N in Y)if(Y[N].location>=0){const ee=O[N];let le=X[N];if(le===void 0&&(N==="instanceMatrix"&&x.instanceMatrix&&(le=x.instanceMatrix),N==="instanceColor"&&x.instanceColor&&(le=x.instanceColor)),ee===void 0||ee.attribute!==le||le&&ee.data!==le.data)return!0;j++}return s.attributesNum!==j||s.index!==B}function y(x,E,U,B){const O={},X=E.attributes;let j=0;const Y=U.getAttributes();for(const N in Y)if(Y[N].location>=0){let ee=X[N];ee===void 0&&(N==="instanceMatrix"&&x.instanceMatrix&&(ee=x.instanceMatrix),N==="instanceColor"&&x.instanceColor&&(ee=x.instanceColor));const le={};le.attribute=ee,ee&&ee.data&&(le.data=ee.data),O[N]=le,j++}s.attributes=O,s.attributesNum=j,s.index=B}function S(){const x=s.newAttributes;for(let E=0,U=x.length;E<U;E++)x[E]=0}function m(x){u(x,0)}function u(x,E){const U=s.newAttributes,B=s.enabledAttributes,O=s.attributeDivisors;U[x]=1,B[x]===0&&(t.enableVertexAttribArray(x),B[x]=1),O[x]!==E&&(t.vertexAttribDivisor(x,E),O[x]=E)}function v(){const x=s.newAttributes,E=s.enabledAttributes;for(let U=0,B=E.length;U<B;U++)E[U]!==x[U]&&(t.disableVertexAttribArray(U),E[U]=0)}function g(x,E,U,B,O,X,j){j===!0?t.vertexAttribIPointer(x,E,U,O,X):t.vertexAttribPointer(x,E,U,B,O,X)}function M(x,E,U,B){S();const O=B.attributes,X=U.getAttributes(),j=E.defaultAttributeValues;for(const Y in X){const N=X[Y];if(N.location>=0){let Q=O[Y];if(Q===void 0&&(Y==="instanceMatrix"&&x.instanceMatrix&&(Q=x.instanceMatrix),Y==="instanceColor"&&x.instanceColor&&(Q=x.instanceColor)),Q!==void 0){const ee=Q.normalized,le=Q.itemSize,we=e.get(Q);if(we===void 0)continue;const ze=we.buffer,q=we.type,re=we.bytesPerElement,fe=q===t.INT||q===t.UNSIGNED_INT||Q.gpuType===Vf;if(Q.isInterleavedBufferAttribute){const ue=Q.data,Ie=ue.stride,Re=Q.offset;if(ue.isInstancedInterleavedBuffer){for(let Ge=0;Ge<N.locationSize;Ge++)u(N.location+Ge,ue.meshPerAttribute);x.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let Ge=0;Ge<N.locationSize;Ge++)m(N.location+Ge);t.bindBuffer(t.ARRAY_BUFFER,ze);for(let Ge=0;Ge<N.locationSize;Ge++)g(N.location+Ge,le/N.locationSize,q,ee,Ie*re,(Re+le/N.locationSize*Ge)*re,fe)}else{if(Q.isInstancedBufferAttribute){for(let ue=0;ue<N.locationSize;ue++)u(N.location+ue,Q.meshPerAttribute);x.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let ue=0;ue<N.locationSize;ue++)m(N.location+ue);t.bindBuffer(t.ARRAY_BUFFER,ze);for(let ue=0;ue<N.locationSize;ue++)g(N.location+ue,le/N.locationSize,q,ee,le*re,le/N.locationSize*ue*re,fe)}}else if(j!==void 0){const ee=j[Y];if(ee!==void 0)switch(ee.length){case 2:t.vertexAttrib2fv(N.location,ee);break;case 3:t.vertexAttrib3fv(N.location,ee);break;case 4:t.vertexAttrib4fv(N.location,ee);break;default:t.vertexAttrib1fv(N.location,ee)}}}}v()}function P(){R();for(const x in i){const E=i[x];for(const U in E){const B=E[U];for(const O in B)f(B[O].object),delete B[O];delete E[U]}delete i[x]}}function b(x){if(i[x.id]===void 0)return;const E=i[x.id];for(const U in E){const B=E[U];for(const O in B)f(B[O].object),delete B[O];delete E[U]}delete i[x.id]}function T(x){for(const E in i){const U=i[E];if(U[x.id]===void 0)continue;const B=U[x.id];for(const O in B)f(B[O].object),delete B[O];delete U[x.id]}}function R(){L(),o=!0,s!==r&&(s=r,c(s.object))}function L(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:R,resetDefaultState:L,dispose:P,releaseStatesOfGeometry:b,releaseStatesOfProgram:T,initAttributes:S,enableAttribute:m,disableUnusedAttributes:v}}function zE(t,e,n){let i;function r(c){i=c}function s(c,f){t.drawArrays(i,c,f),n.update(f,i,1)}function o(c,f,h){h!==0&&(t.drawArraysInstanced(i,c,f,h),n.update(f,i,h))}function a(c,f,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,f,0,h);let p=0;for(let y=0;y<h;y++)p+=f[y];n.update(p,i,1)}function l(c,f,h,d){if(h===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let y=0;y<c.length;y++)o(c[y],f[y],d[y]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,f,0,d,0,h);let y=0;for(let S=0;S<h;S++)y+=f[S];for(let S=0;S<d.length;S++)n.update(y,i,d[S])}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function BE(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(T){return!(T!==zn&&i.convert(T)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){const R=T===Go&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==xi&&i.convert(T)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==di&&!R)}function l(T){if(T==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const f=l(c);f!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",f,"instead."),c=f);const h=n.logarithmicDepthBuffer===!0,d=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(d===!0){const T=e.get("EXT_clip_control");T.clipControlEXT(T.LOWER_LEFT_EXT,T.ZERO_TO_ONE_EXT)}const p=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),y=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=t.getParameter(t.MAX_TEXTURE_SIZE),m=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),u=t.getParameter(t.MAX_VERTEX_ATTRIBS),v=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),g=t.getParameter(t.MAX_VARYING_VECTORS),M=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),P=y>0,b=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:d,maxTextures:p,maxVertexTextures:y,maxTextureSize:S,maxCubemapSize:m,maxAttributes:u,maxVertexUniforms:v,maxVaryings:g,maxFragmentUniforms:M,vertexTextures:P,maxSamples:b}}function HE(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new cr,a=new Oe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const p=h.length!==0||d||i!==0||r;return r=d,i=h.length,p},this.beginShadows=function(){s=!0,f(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){n=f(h,d,0)},this.setState=function(h,d,p){const y=h.clippingPlanes,S=h.clipIntersection,m=h.clipShadows,u=t.get(h);if(!r||y===null||y.length===0||s&&!m)s?f(null):c();else{const v=s?0:i,g=v*4;let M=u.clippingState||null;l.value=M,M=f(y,d,g,p);for(let P=0;P!==g;++P)M[P]=n[P];u.clippingState=M,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function f(h,d,p,y){const S=h!==null?h.length:0;let m=null;if(S!==0){if(m=l.value,y!==!0||m===null){const u=p+S*4,v=d.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<u)&&(m=new Float32Array(u));for(let g=0,M=p;g!==S;++g,M+=4)o.copy(h[g]).applyMatrix4(v,a),o.normal.toArray(m,M),m[M+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=S,e.numIntersection=0,m}}function VE(t){let e=new WeakMap;function n(o,a){return a===dd?o.mapping=Ts:a===fd&&(o.mapping=As),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===dd||a===fd)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new J1(l.height);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",r),n(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class Qf extends xv{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=f*this.view.offsetY,l=a-f*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const os=4,Qp=[.125,.215,.35,.446,.526,.582],fr=20,Kc=new Qf,Jp=new qe;let Zc=null,Qc=0,Jc=0,eu=!1;const ur=(1+Math.sqrt(5))/2,Xr=1/ur,em=[new z(-ur,Xr,0),new z(ur,Xr,0),new z(-Xr,0,ur),new z(Xr,0,ur),new z(0,ur,-Xr),new z(0,ur,Xr),new z(-1,1,-1),new z(1,1,-1),new z(-1,1,1),new z(1,1,1)];class tm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){Zc=this._renderer.getRenderTarget(),Qc=this._renderer.getActiveCubeFace(),Jc=this._renderer.getActiveMipmapLevel(),eu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=rm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=im(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Zc,Qc,Jc),this._renderer.xr.enabled=eu,e.scissorTest=!1,Na(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Ts||e.mapping===As?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Zc=this._renderer.getRenderTarget(),Qc=this._renderer.getActiveCubeFace(),Jc=this._renderer.getActiveMipmapLevel(),eu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:kn,minFilter:kn,generateMipmaps:!1,type:Go,format:zn,colorSpace:Ji,depthBuffer:!1},r=nm(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=nm(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=GE(s)),this._blurMaterial=jE(s,e,n)}return r}_compileMaterial(e){const n=new Mt(this._lodPlanes[0],e);this._renderer.compile(n,Kc)}_sceneToCubeUV(e,n,i,r){const a=new En(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,d=f.toneMapping;f.getClearColor(Jp),f.toneMapping=Wi,f.autoClear=!1;const p=new pv({name:"PMREM.Background",side:on,depthWrite:!1,depthTest:!1}),y=new Mt(new Pr,p);let S=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,S=!0):(p.color.copy(Jp),S=!0);for(let u=0;u<6;u++){const v=u%3;v===0?(a.up.set(0,l[u],0),a.lookAt(c[u],0,0)):v===1?(a.up.set(0,0,l[u]),a.lookAt(0,c[u],0)):(a.up.set(0,l[u],0),a.lookAt(0,0,c[u]));const g=this._cubeSize;Na(r,v*g,u>2?g:0,g,g),f.setRenderTarget(r),S&&f.render(y,a),f.render(e,a)}y.geometry.dispose(),y.material.dispose(),f.toneMapping=d,f.autoClear=h,e.background=m}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Ts||e.mapping===As;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=rm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=im());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Mt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Na(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,Kc)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=em[(r-s-1)%em.length];this._blur(e,s-1,s,o,a)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const f=3,h=new Mt(this._lodPlanes[r],c),d=c.uniforms,p=this._sizeLods[i]-1,y=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*fr-1),S=s/y,m=isFinite(s)?1+Math.floor(f*S):fr;m>fr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${fr}`);const u=[];let v=0;for(let T=0;T<fr;++T){const R=T/S,L=Math.exp(-R*R/2);u.push(L),T===0?v+=L:T<m&&(v+=2*L)}for(let T=0;T<u.length;T++)u[T]=u[T]/v;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=u,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:g}=this;d.dTheta.value=y,d.mipInt.value=g-i;const M=this._sizeLods[r],P=3*M*(r>g-os?r-g+os:0),b=4*(this._cubeSize-M);Na(n,P,b,3*M,2*M),l.setRenderTarget(n),l.render(h,Kc)}}function GE(t){const e=[],n=[],i=[];let r=t;const s=t-os+1+Qp.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-os?l=Qp[o-t+os-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),f=-c,h=1+c,d=[f,f,h,f,h,h,f,f,h,h,f,h],p=6,y=6,S=3,m=2,u=1,v=new Float32Array(S*y*p),g=new Float32Array(m*y*p),M=new Float32Array(u*y*p);for(let b=0;b<p;b++){const T=b%3*2/3-1,R=b>2?0:-1,L=[T,R,0,T+2/3,R,0,T+2/3,R+1,0,T,R,0,T+2/3,R+1,0,T,R+1,0];v.set(L,S*y*b),g.set(d,m*y*b);const x=[b,b,b,b,b,b];M.set(x,u*y*b)}const P=new Gn;P.setAttribute("position",new Zn(v,S)),P.setAttribute("uv",new Zn(g,m)),P.setAttribute("faceIndex",new Zn(M,u)),e.push(P),r>os&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function nm(t,e,n){const i=new br(t,e,n);return i.texture.mapping=Xl,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Na(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function jE(t,e,n){const i=new Float32Array(fr),r=new z(0,1,0);return new qi({name:"SphericalGaussianBlur",defines:{n:fr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Jf(),fragmentShader:`

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
		`,blending:ji,depthTest:!1,depthWrite:!1})}function im(){return new qi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Jf(),fragmentShader:`

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
		`,blending:ji,depthTest:!1,depthWrite:!1})}function rm(){return new qi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Jf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ji,depthTest:!1,depthWrite:!1})}function Jf(){return`

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
	`}function WE(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===dd||l===fd,f=l===Ts||l===As;if(c||f){let h=e.get(a);const d=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return n===null&&(n=new tm(t)),h=c?n.fromEquirectangular(a,h):n.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const p=a.image;return c&&p&&p.height>0||f&&p&&r(p)?(n===null&&(n=new tm(t)),h=c?n.fromEquirectangular(a):n.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",s),h.texture):null}}}return a}function r(a){let l=0;const c=6;for(let f=0;f<c;f++)a[f]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function XE(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&Ka("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function $E(t,e,n,i){const r={},s=new WeakMap;function o(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const y in d.attributes)e.remove(d.attributes[y]);for(const y in d.morphAttributes){const S=d.morphAttributes[y];for(let m=0,u=S.length;m<u;m++)e.remove(S[m])}d.removeEventListener("dispose",o),delete r[d.id];const p=s.get(d);p&&(e.remove(p),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,n.memory.geometries--}function a(h,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,n.memory.geometries++),d}function l(h){const d=h.attributes;for(const y in d)e.update(d[y],t.ARRAY_BUFFER);const p=h.morphAttributes;for(const y in p){const S=p[y];for(let m=0,u=S.length;m<u;m++)e.update(S[m],t.ARRAY_BUFFER)}}function c(h){const d=[],p=h.index,y=h.attributes.position;let S=0;if(p!==null){const v=p.array;S=p.version;for(let g=0,M=v.length;g<M;g+=3){const P=v[g+0],b=v[g+1],T=v[g+2];d.push(P,b,b,T,T,P)}}else if(y!==void 0){const v=y.array;S=y.version;for(let g=0,M=v.length/3-1;g<M;g+=3){const P=g+0,b=g+1,T=g+2;d.push(P,b,b,T,T,P)}}else return;const m=new(cv(d)?gv:mv)(d,1);m.version=S;const u=s.get(h);u&&e.remove(u),s.set(h,m)}function f(h){const d=s.get(h);if(d){const p=h.index;p!==null&&d.version<p.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:f}}function YE(t,e,n){let i;function r(d){i=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function l(d,p){t.drawElements(i,p,s,d*o),n.update(p,i,1)}function c(d,p,y){y!==0&&(t.drawElementsInstanced(i,p,s,d*o,y),n.update(p,i,y))}function f(d,p,y){if(y===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,d,0,y);let m=0;for(let u=0;u<y;u++)m+=p[u];n.update(m,i,1)}function h(d,p,y,S){if(y===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let u=0;u<d.length;u++)c(d[u]/o,p[u],S[u]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,s,d,0,S,0,y);let u=0;for(let v=0;v<y;v++)u+=p[v];for(let v=0;v<S.length;v++)n.update(u,i,S[v])}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=f,this.renderMultiDrawInstances=h}function qE(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function KE(t,e,n){const i=new WeakMap,r=new gt;function s(o,a,l){const c=o.morphTargetInfluences,f=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=f!==void 0?f.length:0;let d=i.get(a);if(d===void 0||d.count!==h){let x=function(){R.dispose(),i.delete(a),a.removeEventListener("dispose",x)};var p=x;d!==void 0&&d.texture.dispose();const y=a.morphAttributes.position!==void 0,S=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,u=a.morphAttributes.position||[],v=a.morphAttributes.normal||[],g=a.morphAttributes.color||[];let M=0;y===!0&&(M=1),S===!0&&(M=2),m===!0&&(M=3);let P=a.attributes.position.count*M,b=1;P>e.maxTextureSize&&(b=Math.ceil(P/e.maxTextureSize),P=e.maxTextureSize);const T=new Float32Array(P*b*4*h),R=new dv(T,P,b,h);R.type=di,R.needsUpdate=!0;const L=M*4;for(let E=0;E<h;E++){const U=u[E],B=v[E],O=g[E],X=P*b*4*E;for(let j=0;j<U.count;j++){const Y=j*L;y===!0&&(r.fromBufferAttribute(U,j),T[X+Y+0]=r.x,T[X+Y+1]=r.y,T[X+Y+2]=r.z,T[X+Y+3]=0),S===!0&&(r.fromBufferAttribute(B,j),T[X+Y+4]=r.x,T[X+Y+5]=r.y,T[X+Y+6]=r.z,T[X+Y+7]=0),m===!0&&(r.fromBufferAttribute(O,j),T[X+Y+8]=r.x,T[X+Y+9]=r.y,T[X+Y+10]=r.z,T[X+Y+11]=O.itemSize===4?r.w:1)}}d={count:h,texture:R,size:new $e(P,b)},i.set(a,d),a.addEventListener("dispose",x)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let y=0;for(let m=0;m<c.length;m++)y+=c[m];const S=a.morphTargetsRelative?1:1-y;l.getUniforms().setValue(t,"morphTargetBaseInfluence",S),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",d.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",d.size)}return{update:s}}function ZE(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,f=l.geometry,h=e.get(l,f);if(r.get(h)!==c&&(e.update(h),r.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==c&&(d.update(),r.set(d,c))}return h}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:o}}class Sv extends an{constructor(e,n,i,r,s,o,a,l,c,f=ps){if(f!==ps&&f!==Cs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&f===ps&&(i=Ar),i===void 0&&f===Cs&&(i=bs),super(null,r,s,o,a,l,f,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:Tn,this.minFilter=l!==void 0?l:Tn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const Mv=new an,sm=new Sv(1,1),Ev=new dv,wv=new F1,Tv=new _v,om=[],am=[],lm=new Float32Array(16),cm=new Float32Array(9),um=new Float32Array(4);function ks(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=om[r];if(s===void 0&&(s=new Float32Array(r),om[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function bt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Ct(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Yl(t,e){let n=am[e];n===void 0&&(n=new Int32Array(e),am[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function QE(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function JE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(bt(n,e))return;t.uniform2fv(this.addr,e),Ct(n,e)}}function ew(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(bt(n,e))return;t.uniform3fv(this.addr,e),Ct(n,e)}}function tw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(bt(n,e))return;t.uniform4fv(this.addr,e),Ct(n,e)}}function nw(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(bt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Ct(n,e)}else{if(bt(n,i))return;um.set(i),t.uniformMatrix2fv(this.addr,!1,um),Ct(n,i)}}function iw(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(bt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Ct(n,e)}else{if(bt(n,i))return;cm.set(i),t.uniformMatrix3fv(this.addr,!1,cm),Ct(n,i)}}function rw(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(bt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Ct(n,e)}else{if(bt(n,i))return;lm.set(i),t.uniformMatrix4fv(this.addr,!1,lm),Ct(n,i)}}function sw(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function ow(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(bt(n,e))return;t.uniform2iv(this.addr,e),Ct(n,e)}}function aw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(bt(n,e))return;t.uniform3iv(this.addr,e),Ct(n,e)}}function lw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(bt(n,e))return;t.uniform4iv(this.addr,e),Ct(n,e)}}function cw(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function uw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(bt(n,e))return;t.uniform2uiv(this.addr,e),Ct(n,e)}}function dw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(bt(n,e))return;t.uniform3uiv(this.addr,e),Ct(n,e)}}function fw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(bt(n,e))return;t.uniform4uiv(this.addr,e),Ct(n,e)}}function hw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(sm.compareFunction=lv,s=sm):s=Mv,n.setTexture2D(e||s,r)}function pw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||wv,r)}function mw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||Tv,r)}function gw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||Ev,r)}function vw(t){switch(t){case 5126:return QE;case 35664:return JE;case 35665:return ew;case 35666:return tw;case 35674:return nw;case 35675:return iw;case 35676:return rw;case 5124:case 35670:return sw;case 35667:case 35671:return ow;case 35668:case 35672:return aw;case 35669:case 35673:return lw;case 5125:return cw;case 36294:return uw;case 36295:return dw;case 36296:return fw;case 35678:case 36198:case 36298:case 36306:case 35682:return hw;case 35679:case 36299:case 36307:return pw;case 35680:case 36300:case 36308:case 36293:return mw;case 36289:case 36303:case 36311:case 36292:return gw}}function xw(t,e){t.uniform1fv(this.addr,e)}function _w(t,e){const n=ks(e,this.size,2);t.uniform2fv(this.addr,n)}function yw(t,e){const n=ks(e,this.size,3);t.uniform3fv(this.addr,n)}function Sw(t,e){const n=ks(e,this.size,4);t.uniform4fv(this.addr,n)}function Mw(t,e){const n=ks(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function Ew(t,e){const n=ks(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function ww(t,e){const n=ks(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function Tw(t,e){t.uniform1iv(this.addr,e)}function Aw(t,e){t.uniform2iv(this.addr,e)}function bw(t,e){t.uniform3iv(this.addr,e)}function Cw(t,e){t.uniform4iv(this.addr,e)}function Rw(t,e){t.uniform1uiv(this.addr,e)}function Pw(t,e){t.uniform2uiv(this.addr,e)}function Nw(t,e){t.uniform3uiv(this.addr,e)}function Lw(t,e){t.uniform4uiv(this.addr,e)}function Dw(t,e,n){const i=this.cache,r=e.length,s=Yl(n,r);bt(i,s)||(t.uniform1iv(this.addr,s),Ct(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||Mv,s[o])}function Iw(t,e,n){const i=this.cache,r=e.length,s=Yl(n,r);bt(i,s)||(t.uniform1iv(this.addr,s),Ct(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||wv,s[o])}function Uw(t,e,n){const i=this.cache,r=e.length,s=Yl(n,r);bt(i,s)||(t.uniform1iv(this.addr,s),Ct(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||Tv,s[o])}function Fw(t,e,n){const i=this.cache,r=e.length,s=Yl(n,r);bt(i,s)||(t.uniform1iv(this.addr,s),Ct(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||Ev,s[o])}function kw(t){switch(t){case 5126:return xw;case 35664:return _w;case 35665:return yw;case 35666:return Sw;case 35674:return Mw;case 35675:return Ew;case 35676:return ww;case 5124:case 35670:return Tw;case 35667:case 35671:return Aw;case 35668:case 35672:return bw;case 35669:case 35673:return Cw;case 5125:return Rw;case 36294:return Pw;case 36295:return Nw;case 36296:return Lw;case 35678:case 36198:case 36298:case 36306:case 35682:return Dw;case 35679:case 36299:case 36307:return Iw;case 35680:case 36300:case 36308:case 36293:return Uw;case 36289:case 36303:case 36311:case 36292:return Fw}}class Ow{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=vw(n.type)}}class zw{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=kw(n.type)}}class Bw{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const tu=/(\w+)(\])?(\[|\.)?/g;function dm(t,e){t.seq.push(e),t.map[e.id]=e}function Hw(t,e,n){const i=t.name,r=i.length;for(tu.lastIndex=0;;){const s=tu.exec(i),o=tu.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){dm(n,c===void 0?new Ow(a,t,e):new zw(a,t,e));break}else{let h=n.map[a];h===void 0&&(h=new Bw(a),dm(n,h)),n=h}}}class Za{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);Hw(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function fm(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const Vw=37297;let Gw=0;function jw(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}function Ww(t){const e=tt.getPrimaries(tt.workingColorSpace),n=tt.getPrimaries(t);let i;switch(e===n?i="":e===Tl&&n===wl?i="LinearDisplayP3ToLinearSRGB":e===wl&&n===Tl&&(i="LinearSRGBToLinearDisplayP3"),t){case Ji:case $l:return[i,"LinearTransferOETF"];case Xn:case Yf:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function hm(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+jw(t.getShaderSource(e),o)}else return r}function Xw(t,e){const n=Ww(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function $w(t,e){let n;switch(e){case $y:n="Linear";break;case Yy:n="Reinhard";break;case qy:n="Cineon";break;case Hf:n="ACESFilmic";break;case Zy:n="AgX";break;case Qy:n="Neutral";break;case Ky:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const La=new z;function Yw(){tt.getLuminanceCoefficients(La);const t=La.x.toFixed(4),e=La.y.toFixed(4),n=La.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function qw(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(no).join(`
`)}function Kw(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function Zw(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function no(t){return t!==""}function pm(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function mm(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Qw=/^[ \t]*#include +<([\w\d./]+)>/gm;function Hd(t){return t.replace(Qw,e2)}const Jw=new Map;function e2(t,e){let n=ke[e];if(n===void 0){const i=Jw.get(e);if(i!==void 0)n=ke[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Hd(n)}const t2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function gm(t){return t.replace(t2,n2)}function n2(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function vm(t){let e=`precision ${t.precision} float;
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
#define LOW_PRECISION`),e}function i2(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===Yg?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===Bf?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===si&&(e="SHADOWMAP_TYPE_VSM"),e}function r2(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Ts:case As:e="ENVMAP_TYPE_CUBE";break;case Xl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function s2(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case As:e="ENVMAP_MODE_REFRACTION";break}return e}function o2(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case qg:e="ENVMAP_BLENDING_MULTIPLY";break;case Wy:e="ENVMAP_BLENDING_MIX";break;case Xy:e="ENVMAP_BLENDING_ADD";break}return e}function a2(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function l2(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=i2(n),c=r2(n),f=s2(n),h=o2(n),d=a2(n),p=qw(n),y=Kw(s),S=r.createProgram();let m,u,v=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y].filter(no).join(`
`),m.length>0&&(m+=`
`),u=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y].filter(no).join(`
`),u.length>0&&(u+=`
`)):(m=[vm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+f:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(no).join(`
`),u=[vm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+f:"",n.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Wi?"#define TONE_MAPPING":"",n.toneMapping!==Wi?ke.tonemapping_pars_fragment:"",n.toneMapping!==Wi?$w("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",ke.colorspace_pars_fragment,Xw("linearToOutputTexel",n.outputColorSpace),Yw(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(no).join(`
`)),o=Hd(o),o=pm(o,n),o=mm(o,n),a=Hd(a),a=pm(a,n),a=mm(a,n),o=gm(o),a=gm(a),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,u=["#define varying in",n.glslVersion===Dp?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Dp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const g=v+m+o,M=v+u+a,P=fm(r,r.VERTEX_SHADER,g),b=fm(r,r.FRAGMENT_SHADER,M);r.attachShader(S,P),r.attachShader(S,b),n.index0AttributeName!==void 0?r.bindAttribLocation(S,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(S,0,"position"),r.linkProgram(S);function T(E){if(t.debug.checkShaderErrors){const U=r.getProgramInfoLog(S).trim(),B=r.getShaderInfoLog(P).trim(),O=r.getShaderInfoLog(b).trim();let X=!0,j=!0;if(r.getProgramParameter(S,r.LINK_STATUS)===!1)if(X=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,S,P,b);else{const Y=hm(r,P,"vertex"),N=hm(r,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(S,r.VALIDATE_STATUS)+`

Material Name: `+E.name+`
Material Type: `+E.type+`

Program Info Log: `+U+`
`+Y+`
`+N)}else U!==""?console.warn("THREE.WebGLProgram: Program Info Log:",U):(B===""||O==="")&&(j=!1);j&&(E.diagnostics={runnable:X,programLog:U,vertexShader:{log:B,prefix:m},fragmentShader:{log:O,prefix:u}})}r.deleteShader(P),r.deleteShader(b),R=new Za(r,S),L=Zw(r,S)}let R;this.getUniforms=function(){return R===void 0&&T(this),R};let L;this.getAttributes=function(){return L===void 0&&T(this),L};let x=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=r.getProgramParameter(S,Vw)),x},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(S),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=Gw++,this.cacheKey=e,this.usedTimes=1,this.program=S,this.vertexShader=P,this.fragmentShader=b,this}let c2=0;class u2{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new d2(e),n.set(e,i)),i}}class d2{constructor(e){this.id=c2++,this.code=e,this.usedTimes=0}}function f2(t,e,n,i,r,s,o){const a=new fv,l=new u2,c=new Set,f=[],h=r.logarithmicDepthBuffer,d=r.reverseDepthBuffer,p=r.vertexTextures;let y=r.precision;const S={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(x){return c.add(x),x===0?"uv":`uv${x}`}function u(x,E,U,B,O){const X=B.fog,j=O.geometry,Y=x.isMeshStandardMaterial?B.environment:null,N=(x.isMeshStandardMaterial?n:e).get(x.envMap||Y),Q=N&&N.mapping===Xl?N.image.height:null,ee=S[x.type];x.precision!==null&&(y=r.getMaxPrecision(x.precision),y!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",y,"instead."));const le=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,we=le!==void 0?le.length:0;let ze=0;j.morphAttributes.position!==void 0&&(ze=1),j.morphAttributes.normal!==void 0&&(ze=2),j.morphAttributes.color!==void 0&&(ze=3);let q,re,fe,ue;if(ee){const Jt=$n[ee];q=Jt.vertexShader,re=Jt.fragmentShader}else q=x.vertexShader,re=x.fragmentShader,l.update(x),fe=l.getVertexShaderID(x),ue=l.getFragmentShaderID(x);const Ie=t.getRenderTarget(),Re=O.isInstancedMesh===!0,Ge=O.isBatchedMesh===!0,Qe=!!x.map,je=!!x.matcap,D=!!N,jt=!!x.aoMap,He=!!x.lightMap,We=!!x.bumpMap,Pe=!!x.normalMap,nt=!!x.displacementMap,Le=!!x.emissiveMap,C=!!x.metalnessMap,w=!!x.roughnessMap,H=x.anisotropy>0,J=x.clearcoat>0,ne=x.dispersion>0,Z=x.iridescence>0,W=x.sheen>0,K=x.transmission>0,oe=H&&!!x.anisotropyMap,Ae=J&&!!x.clearcoatMap,ie=J&&!!x.clearcoatNormalMap,he=J&&!!x.clearcoatRoughnessMap,Se=Z&&!!x.iridescenceMap,Ce=Z&&!!x.iridescenceThicknessMap,xe=W&&!!x.sheenColorMap,Ve=W&&!!x.sheenRoughnessMap,Ue=!!x.specularMap,be=!!x.specularColorMap,I=!!x.specularIntensityMap,de=K&&!!x.transmissionMap,$=K&&!!x.thicknessMap,te=!!x.gradientMap,pe=!!x.alphaMap,ge=x.alphaTest>0,Ye=!!x.alphaHash,yt=!!x.extensions;let Qt=Wi;x.toneMapped&&(Ie===null||Ie.isXRRenderTarget===!0)&&(Qt=t.toneMapping);const Ze={shaderID:ee,shaderType:x.type,shaderName:x.name,vertexShader:q,fragmentShader:re,defines:x.defines,customVertexShaderID:fe,customFragmentShaderID:ue,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:y,batching:Ge,batchingColor:Ge&&O._colorsTexture!==null,instancing:Re,instancingColor:Re&&O.instanceColor!==null,instancingMorph:Re&&O.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:Ie===null?t.outputColorSpace:Ie.isXRRenderTarget===!0?Ie.texture.colorSpace:Ji,alphaToCoverage:!!x.alphaToCoverage,map:Qe,matcap:je,envMap:D,envMapMode:D&&N.mapping,envMapCubeUVHeight:Q,aoMap:jt,lightMap:He,bumpMap:We,normalMap:Pe,displacementMap:p&&nt,emissiveMap:Le,normalMapObjectSpace:Pe&&x.normalMapType===n1,normalMapTangentSpace:Pe&&x.normalMapType===av,metalnessMap:C,roughnessMap:w,anisotropy:H,anisotropyMap:oe,clearcoat:J,clearcoatMap:Ae,clearcoatNormalMap:ie,clearcoatRoughnessMap:he,dispersion:ne,iridescence:Z,iridescenceMap:Se,iridescenceThicknessMap:Ce,sheen:W,sheenColorMap:xe,sheenRoughnessMap:Ve,specularMap:Ue,specularColorMap:be,specularIntensityMap:I,transmission:K,transmissionMap:de,thicknessMap:$,gradientMap:te,opaque:x.transparent===!1&&x.blending===hs&&x.alphaToCoverage===!1,alphaMap:pe,alphaTest:ge,alphaHash:Ye,combine:x.combine,mapUv:Qe&&m(x.map.channel),aoMapUv:jt&&m(x.aoMap.channel),lightMapUv:He&&m(x.lightMap.channel),bumpMapUv:We&&m(x.bumpMap.channel),normalMapUv:Pe&&m(x.normalMap.channel),displacementMapUv:nt&&m(x.displacementMap.channel),emissiveMapUv:Le&&m(x.emissiveMap.channel),metalnessMapUv:C&&m(x.metalnessMap.channel),roughnessMapUv:w&&m(x.roughnessMap.channel),anisotropyMapUv:oe&&m(x.anisotropyMap.channel),clearcoatMapUv:Ae&&m(x.clearcoatMap.channel),clearcoatNormalMapUv:ie&&m(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:he&&m(x.clearcoatRoughnessMap.channel),iridescenceMapUv:Se&&m(x.iridescenceMap.channel),iridescenceThicknessMapUv:Ce&&m(x.iridescenceThicknessMap.channel),sheenColorMapUv:xe&&m(x.sheenColorMap.channel),sheenRoughnessMapUv:Ve&&m(x.sheenRoughnessMap.channel),specularMapUv:Ue&&m(x.specularMap.channel),specularColorMapUv:be&&m(x.specularColorMap.channel),specularIntensityMapUv:I&&m(x.specularIntensityMap.channel),transmissionMapUv:de&&m(x.transmissionMap.channel),thicknessMapUv:$&&m(x.thicknessMap.channel),alphaMapUv:pe&&m(x.alphaMap.channel),vertexTangents:!!j.attributes.tangent&&(Pe||H),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!j.attributes.uv&&(Qe||pe),fog:!!X,useFog:x.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:d,skinning:O.isSkinnedMesh===!0,morphTargets:j.morphAttributes.position!==void 0,morphNormals:j.morphAttributes.normal!==void 0,morphColors:j.morphAttributes.color!==void 0,morphTargetsCount:we,morphTextureStride:ze,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:x.dithering,shadowMapEnabled:t.shadowMap.enabled&&U.length>0,shadowMapType:t.shadowMap.type,toneMapping:Qt,decodeVideoTexture:Qe&&x.map.isVideoTexture===!0&&tt.getTransfer(x.map.colorSpace)===lt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===li,flipSided:x.side===on,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:yt&&x.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(yt&&x.extensions.multiDraw===!0||Ge)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Ze.vertexUv1s=c.has(1),Ze.vertexUv2s=c.has(2),Ze.vertexUv3s=c.has(3),c.clear(),Ze}function v(x){const E=[];if(x.shaderID?E.push(x.shaderID):(E.push(x.customVertexShaderID),E.push(x.customFragmentShaderID)),x.defines!==void 0)for(const U in x.defines)E.push(U),E.push(x.defines[U]);return x.isRawShaderMaterial===!1&&(g(E,x),M(E,x),E.push(t.outputColorSpace)),E.push(x.customProgramCacheKey),E.join()}function g(x,E){x.push(E.precision),x.push(E.outputColorSpace),x.push(E.envMapMode),x.push(E.envMapCubeUVHeight),x.push(E.mapUv),x.push(E.alphaMapUv),x.push(E.lightMapUv),x.push(E.aoMapUv),x.push(E.bumpMapUv),x.push(E.normalMapUv),x.push(E.displacementMapUv),x.push(E.emissiveMapUv),x.push(E.metalnessMapUv),x.push(E.roughnessMapUv),x.push(E.anisotropyMapUv),x.push(E.clearcoatMapUv),x.push(E.clearcoatNormalMapUv),x.push(E.clearcoatRoughnessMapUv),x.push(E.iridescenceMapUv),x.push(E.iridescenceThicknessMapUv),x.push(E.sheenColorMapUv),x.push(E.sheenRoughnessMapUv),x.push(E.specularMapUv),x.push(E.specularColorMapUv),x.push(E.specularIntensityMapUv),x.push(E.transmissionMapUv),x.push(E.thicknessMapUv),x.push(E.combine),x.push(E.fogExp2),x.push(E.sizeAttenuation),x.push(E.morphTargetsCount),x.push(E.morphAttributeCount),x.push(E.numDirLights),x.push(E.numPointLights),x.push(E.numSpotLights),x.push(E.numSpotLightMaps),x.push(E.numHemiLights),x.push(E.numRectAreaLights),x.push(E.numDirLightShadows),x.push(E.numPointLightShadows),x.push(E.numSpotLightShadows),x.push(E.numSpotLightShadowsWithMaps),x.push(E.numLightProbes),x.push(E.shadowMapType),x.push(E.toneMapping),x.push(E.numClippingPlanes),x.push(E.numClipIntersection),x.push(E.depthPacking)}function M(x,E){a.disableAll(),E.supportsVertexTextures&&a.enable(0),E.instancing&&a.enable(1),E.instancingColor&&a.enable(2),E.instancingMorph&&a.enable(3),E.matcap&&a.enable(4),E.envMap&&a.enable(5),E.normalMapObjectSpace&&a.enable(6),E.normalMapTangentSpace&&a.enable(7),E.clearcoat&&a.enable(8),E.iridescence&&a.enable(9),E.alphaTest&&a.enable(10),E.vertexColors&&a.enable(11),E.vertexAlphas&&a.enable(12),E.vertexUv1s&&a.enable(13),E.vertexUv2s&&a.enable(14),E.vertexUv3s&&a.enable(15),E.vertexTangents&&a.enable(16),E.anisotropy&&a.enable(17),E.alphaHash&&a.enable(18),E.batching&&a.enable(19),E.dispersion&&a.enable(20),E.batchingColor&&a.enable(21),x.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reverseDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.alphaToCoverage&&a.enable(20),x.push(a.mask)}function P(x){const E=S[x.type];let U;if(E){const B=$n[E];U=q1.clone(B.uniforms)}else U=x.uniforms;return U}function b(x,E){let U;for(let B=0,O=f.length;B<O;B++){const X=f[B];if(X.cacheKey===E){U=X,++U.usedTimes;break}}return U===void 0&&(U=new l2(t,E,x,s),f.push(U)),U}function T(x){if(--x.usedTimes===0){const E=f.indexOf(x);f[E]=f[f.length-1],f.pop(),x.destroy()}}function R(x){l.remove(x)}function L(){l.dispose()}return{getParameters:u,getProgramCacheKey:v,getUniforms:P,acquireProgram:b,releaseProgram:T,releaseShaderCache:R,programs:f,dispose:L}}function h2(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function r(o,a,l){t.get(o)[a]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function p2(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function xm(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function _m(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(h,d,p,y,S,m){let u=t[e];return u===void 0?(u={id:h.id,object:h,geometry:d,material:p,groupOrder:y,renderOrder:h.renderOrder,z:S,group:m},t[e]=u):(u.id=h.id,u.object=h,u.geometry=d,u.material=p,u.groupOrder=y,u.renderOrder=h.renderOrder,u.z=S,u.group=m),e++,u}function a(h,d,p,y,S,m){const u=o(h,d,p,y,S,m);p.transmission>0?i.push(u):p.transparent===!0?r.push(u):n.push(u)}function l(h,d,p,y,S,m){const u=o(h,d,p,y,S,m);p.transmission>0?i.unshift(u):p.transparent===!0?r.unshift(u):n.unshift(u)}function c(h,d){n.length>1&&n.sort(h||p2),i.length>1&&i.sort(d||xm),r.length>1&&r.sort(d||xm)}function f(){for(let h=e,d=t.length;h<d;h++){const p=t[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:f,sort:c}}function m2(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new _m,t.set(i,[o])):r>=s.length?(o=new _m,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function g2(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new z,color:new qe};break;case"SpotLight":n={position:new z,direction:new z,color:new qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new z,color:new qe,distance:0,decay:0};break;case"HemisphereLight":n={direction:new z,skyColor:new qe,groundColor:new qe};break;case"RectAreaLight":n={color:new qe,position:new z,halfWidth:new z,halfHeight:new z};break}return t[e.id]=n,n}}}function v2(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let x2=0;function _2(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function y2(t){const e=new g2,n=v2(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new z);const r=new z,s=new vt,o=new vt;function a(c){let f=0,h=0,d=0;for(let L=0;L<9;L++)i.probe[L].set(0,0,0);let p=0,y=0,S=0,m=0,u=0,v=0,g=0,M=0,P=0,b=0,T=0;c.sort(_2);for(let L=0,x=c.length;L<x;L++){const E=c[L],U=E.color,B=E.intensity,O=E.distance,X=E.shadow&&E.shadow.map?E.shadow.map.texture:null;if(E.isAmbientLight)f+=U.r*B,h+=U.g*B,d+=U.b*B;else if(E.isLightProbe){for(let j=0;j<9;j++)i.probe[j].addScaledVector(E.sh.coefficients[j],B);T++}else if(E.isDirectionalLight){const j=e.get(E);if(j.color.copy(E.color).multiplyScalar(E.intensity),E.castShadow){const Y=E.shadow,N=n.get(E);N.shadowIntensity=Y.intensity,N.shadowBias=Y.bias,N.shadowNormalBias=Y.normalBias,N.shadowRadius=Y.radius,N.shadowMapSize=Y.mapSize,i.directionalShadow[p]=N,i.directionalShadowMap[p]=X,i.directionalShadowMatrix[p]=E.shadow.matrix,v++}i.directional[p]=j,p++}else if(E.isSpotLight){const j=e.get(E);j.position.setFromMatrixPosition(E.matrixWorld),j.color.copy(U).multiplyScalar(B),j.distance=O,j.coneCos=Math.cos(E.angle),j.penumbraCos=Math.cos(E.angle*(1-E.penumbra)),j.decay=E.decay,i.spot[S]=j;const Y=E.shadow;if(E.map&&(i.spotLightMap[P]=E.map,P++,Y.updateMatrices(E),E.castShadow&&b++),i.spotLightMatrix[S]=Y.matrix,E.castShadow){const N=n.get(E);N.shadowIntensity=Y.intensity,N.shadowBias=Y.bias,N.shadowNormalBias=Y.normalBias,N.shadowRadius=Y.radius,N.shadowMapSize=Y.mapSize,i.spotShadow[S]=N,i.spotShadowMap[S]=X,M++}S++}else if(E.isRectAreaLight){const j=e.get(E);j.color.copy(U).multiplyScalar(B),j.halfWidth.set(E.width*.5,0,0),j.halfHeight.set(0,E.height*.5,0),i.rectArea[m]=j,m++}else if(E.isPointLight){const j=e.get(E);if(j.color.copy(E.color).multiplyScalar(E.intensity),j.distance=E.distance,j.decay=E.decay,E.castShadow){const Y=E.shadow,N=n.get(E);N.shadowIntensity=Y.intensity,N.shadowBias=Y.bias,N.shadowNormalBias=Y.normalBias,N.shadowRadius=Y.radius,N.shadowMapSize=Y.mapSize,N.shadowCameraNear=Y.camera.near,N.shadowCameraFar=Y.camera.far,i.pointShadow[y]=N,i.pointShadowMap[y]=X,i.pointShadowMatrix[y]=E.shadow.matrix,g++}i.point[y]=j,y++}else if(E.isHemisphereLight){const j=e.get(E);j.skyColor.copy(E.color).multiplyScalar(B),j.groundColor.copy(E.groundColor).multiplyScalar(B),i.hemi[u]=j,u++}}m>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ce.LTC_FLOAT_1,i.rectAreaLTC2=ce.LTC_FLOAT_2):(i.rectAreaLTC1=ce.LTC_HALF_1,i.rectAreaLTC2=ce.LTC_HALF_2)),i.ambient[0]=f,i.ambient[1]=h,i.ambient[2]=d;const R=i.hash;(R.directionalLength!==p||R.pointLength!==y||R.spotLength!==S||R.rectAreaLength!==m||R.hemiLength!==u||R.numDirectionalShadows!==v||R.numPointShadows!==g||R.numSpotShadows!==M||R.numSpotMaps!==P||R.numLightProbes!==T)&&(i.directional.length=p,i.spot.length=S,i.rectArea.length=m,i.point.length=y,i.hemi.length=u,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=g,i.pointShadowMap.length=g,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=g,i.spotLightMatrix.length=M+P-b,i.spotLightMap.length=P,i.numSpotLightShadowsWithMaps=b,i.numLightProbes=T,R.directionalLength=p,R.pointLength=y,R.spotLength=S,R.rectAreaLength=m,R.hemiLength=u,R.numDirectionalShadows=v,R.numPointShadows=g,R.numSpotShadows=M,R.numSpotMaps=P,R.numLightProbes=T,i.version=x2++)}function l(c,f){let h=0,d=0,p=0,y=0,S=0;const m=f.matrixWorldInverse;for(let u=0,v=c.length;u<v;u++){const g=c[u];if(g.isDirectionalLight){const M=i.directional[h];M.direction.setFromMatrixPosition(g.matrixWorld),r.setFromMatrixPosition(g.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(m),h++}else if(g.isSpotLight){const M=i.spot[p];M.position.setFromMatrixPosition(g.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(g.matrixWorld),r.setFromMatrixPosition(g.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(m),p++}else if(g.isRectAreaLight){const M=i.rectArea[y];M.position.setFromMatrixPosition(g.matrixWorld),M.position.applyMatrix4(m),o.identity(),s.copy(g.matrixWorld),s.premultiply(m),o.extractRotation(s),M.halfWidth.set(g.width*.5,0,0),M.halfHeight.set(0,g.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),y++}else if(g.isPointLight){const M=i.point[d];M.position.setFromMatrixPosition(g.matrixWorld),M.position.applyMatrix4(m),d++}else if(g.isHemisphereLight){const M=i.hemi[S];M.direction.setFromMatrixPosition(g.matrixWorld),M.direction.transformDirection(m),S++}}}return{setup:a,setupView:l,state:i}}function ym(t){const e=new y2(t),n=[],i=[];function r(f){c.camera=f,n.length=0,i.length=0}function s(f){n.push(f)}function o(f){i.push(f)}function a(){e.setup(n)}function l(f){e.setupView(n,f)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function S2(t){let e=new WeakMap;function n(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new ym(t),e.set(r,[a])):s>=o.length?(a=new ym(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}class M2 extends Fs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=e1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class E2 extends Fs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const w2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,T2=`uniform sampler2D shadow_pass;
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
}`;function A2(t,e,n){let i=new Zf;const r=new $e,s=new $e,o=new gt,a=new M2({depthPacking:t1}),l=new E2,c={},f=n.maxTextureSize,h={[Yi]:on,[on]:Yi,[li]:li},d=new qi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new $e},radius:{value:4}},vertexShader:w2,fragmentShader:T2}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const y=new Gn;y.setAttribute("position",new Zn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const S=new Mt(y,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Yg;let u=this.type;this.render=function(b,T,R){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;const L=t.getRenderTarget(),x=t.getActiveCubeFace(),E=t.getActiveMipmapLevel(),U=t.state;U.setBlending(ji),U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const B=u!==si&&this.type===si,O=u===si&&this.type!==si;for(let X=0,j=b.length;X<j;X++){const Y=b[X],N=Y.shadow;if(N===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;r.copy(N.mapSize);const Q=N.getFrameExtents();if(r.multiply(Q),s.copy(N.mapSize),(r.x>f||r.y>f)&&(r.x>f&&(s.x=Math.floor(f/Q.x),r.x=s.x*Q.x,N.mapSize.x=s.x),r.y>f&&(s.y=Math.floor(f/Q.y),r.y=s.y*Q.y,N.mapSize.y=s.y)),N.map===null||B===!0||O===!0){const le=this.type!==si?{minFilter:Tn,magFilter:Tn}:{};N.map!==null&&N.map.dispose(),N.map=new br(r.x,r.y,le),N.map.texture.name=Y.name+".shadowMap",N.camera.updateProjectionMatrix()}t.setRenderTarget(N.map),t.clear();const ee=N.getViewportCount();for(let le=0;le<ee;le++){const we=N.getViewport(le);o.set(s.x*we.x,s.y*we.y,s.x*we.z,s.y*we.w),U.viewport(o),N.updateMatrices(Y,le),i=N.getFrustum(),M(T,R,N.camera,Y,this.type)}N.isPointLightShadow!==!0&&this.type===si&&v(N,R),N.needsUpdate=!1}u=this.type,m.needsUpdate=!1,t.setRenderTarget(L,x,E)};function v(b,T){const R=e.update(S);d.defines.VSM_SAMPLES!==b.blurSamples&&(d.defines.VSM_SAMPLES=b.blurSamples,p.defines.VSM_SAMPLES=b.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new br(r.x,r.y)),d.uniforms.shadow_pass.value=b.map.texture,d.uniforms.resolution.value=b.mapSize,d.uniforms.radius.value=b.radius,t.setRenderTarget(b.mapPass),t.clear(),t.renderBufferDirect(T,null,R,d,S,null),p.uniforms.shadow_pass.value=b.mapPass.texture,p.uniforms.resolution.value=b.mapSize,p.uniforms.radius.value=b.radius,t.setRenderTarget(b.map),t.clear(),t.renderBufferDirect(T,null,R,p,S,null)}function g(b,T,R,L){let x=null;const E=R.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(E!==void 0)x=E;else if(x=R.isPointLight===!0?l:a,t.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const U=x.uuid,B=T.uuid;let O=c[U];O===void 0&&(O={},c[U]=O);let X=O[B];X===void 0&&(X=x.clone(),O[B]=X,T.addEventListener("dispose",P)),x=X}if(x.visible=T.visible,x.wireframe=T.wireframe,L===si?x.side=T.shadowSide!==null?T.shadowSide:T.side:x.side=T.shadowSide!==null?T.shadowSide:h[T.side],x.alphaMap=T.alphaMap,x.alphaTest=T.alphaTest,x.map=T.map,x.clipShadows=T.clipShadows,x.clippingPlanes=T.clippingPlanes,x.clipIntersection=T.clipIntersection,x.displacementMap=T.displacementMap,x.displacementScale=T.displacementScale,x.displacementBias=T.displacementBias,x.wireframeLinewidth=T.wireframeLinewidth,x.linewidth=T.linewidth,R.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const U=t.properties.get(x);U.light=R}return x}function M(b,T,R,L,x){if(b.visible===!1)return;if(b.layers.test(T.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&x===si)&&(!b.frustumCulled||i.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,b.matrixWorld);const B=e.update(b),O=b.material;if(Array.isArray(O)){const X=B.groups;for(let j=0,Y=X.length;j<Y;j++){const N=X[j],Q=O[N.materialIndex];if(Q&&Q.visible){const ee=g(b,Q,L,x);b.onBeforeShadow(t,b,T,R,B,ee,N),t.renderBufferDirect(R,null,B,ee,b,N),b.onAfterShadow(t,b,T,R,B,ee,N)}}}else if(O.visible){const X=g(b,O,L,x);b.onBeforeShadow(t,b,T,R,B,X,null),t.renderBufferDirect(R,null,B,X,b,null),b.onAfterShadow(t,b,T,R,B,X,null)}}const U=b.children;for(let B=0,O=U.length;B<O;B++)M(U[B],T,R,L,x)}function P(b){b.target.removeEventListener("dispose",P);for(const R in c){const L=c[R],x=b.target.uuid;x in L&&(L[x].dispose(),delete L[x])}}}const b2={[rd]:sd,[od]:cd,[ad]:ud,[ws]:ld,[sd]:rd,[cd]:od,[ud]:ad,[ld]:ws};function C2(t){function e(){let I=!1;const de=new gt;let $=null;const te=new gt(0,0,0,0);return{setMask:function(pe){$!==pe&&!I&&(t.colorMask(pe,pe,pe,pe),$=pe)},setLocked:function(pe){I=pe},setClear:function(pe,ge,Ye,yt,Qt){Qt===!0&&(pe*=yt,ge*=yt,Ye*=yt),de.set(pe,ge,Ye,yt),te.equals(de)===!1&&(t.clearColor(pe,ge,Ye,yt),te.copy(de))},reset:function(){I=!1,$=null,te.set(-1,0,0,0)}}}function n(){let I=!1,de=!1,$=null,te=null,pe=null;return{setReversed:function(ge){de=ge},setTest:function(ge){ge?fe(t.DEPTH_TEST):ue(t.DEPTH_TEST)},setMask:function(ge){$!==ge&&!I&&(t.depthMask(ge),$=ge)},setFunc:function(ge){if(de&&(ge=b2[ge]),te!==ge){switch(ge){case rd:t.depthFunc(t.NEVER);break;case sd:t.depthFunc(t.ALWAYS);break;case od:t.depthFunc(t.LESS);break;case ws:t.depthFunc(t.LEQUAL);break;case ad:t.depthFunc(t.EQUAL);break;case ld:t.depthFunc(t.GEQUAL);break;case cd:t.depthFunc(t.GREATER);break;case ud:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}te=ge}},setLocked:function(ge){I=ge},setClear:function(ge){pe!==ge&&(t.clearDepth(ge),pe=ge)},reset:function(){I=!1,$=null,te=null,pe=null}}}function i(){let I=!1,de=null,$=null,te=null,pe=null,ge=null,Ye=null,yt=null,Qt=null;return{setTest:function(Ze){I||(Ze?fe(t.STENCIL_TEST):ue(t.STENCIL_TEST))},setMask:function(Ze){de!==Ze&&!I&&(t.stencilMask(Ze),de=Ze)},setFunc:function(Ze,Jt,Jn){($!==Ze||te!==Jt||pe!==Jn)&&(t.stencilFunc(Ze,Jt,Jn),$=Ze,te=Jt,pe=Jn)},setOp:function(Ze,Jt,Jn){(ge!==Ze||Ye!==Jt||yt!==Jn)&&(t.stencilOp(Ze,Jt,Jn),ge=Ze,Ye=Jt,yt=Jn)},setLocked:function(Ze){I=Ze},setClear:function(Ze){Qt!==Ze&&(t.clearStencil(Ze),Qt=Ze)},reset:function(){I=!1,de=null,$=null,te=null,pe=null,ge=null,Ye=null,yt=null,Qt=null}}}const r=new e,s=new n,o=new i,a=new WeakMap,l=new WeakMap;let c={},f={},h=new WeakMap,d=[],p=null,y=!1,S=null,m=null,u=null,v=null,g=null,M=null,P=null,b=new qe(0,0,0),T=0,R=!1,L=null,x=null,E=null,U=null,B=null;const O=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,j=0;const Y=t.getParameter(t.VERSION);Y.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(Y)[1]),X=j>=1):Y.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),X=j>=2);let N=null,Q={};const ee=t.getParameter(t.SCISSOR_BOX),le=t.getParameter(t.VIEWPORT),we=new gt().fromArray(ee),ze=new gt().fromArray(le);function q(I,de,$,te){const pe=new Uint8Array(4),ge=t.createTexture();t.bindTexture(I,ge),t.texParameteri(I,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(I,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Ye=0;Ye<$;Ye++)I===t.TEXTURE_3D||I===t.TEXTURE_2D_ARRAY?t.texImage3D(de,0,t.RGBA,1,1,te,0,t.RGBA,t.UNSIGNED_BYTE,pe):t.texImage2D(de+Ye,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,pe);return ge}const re={};re[t.TEXTURE_2D]=q(t.TEXTURE_2D,t.TEXTURE_2D,1),re[t.TEXTURE_CUBE_MAP]=q(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),re[t.TEXTURE_2D_ARRAY]=q(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),re[t.TEXTURE_3D]=q(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),fe(t.DEPTH_TEST),s.setFunc(ws),He(!1),We(bp),fe(t.CULL_FACE),D(ji);function fe(I){c[I]!==!0&&(t.enable(I),c[I]=!0)}function ue(I){c[I]!==!1&&(t.disable(I),c[I]=!1)}function Ie(I,de){return f[I]!==de?(t.bindFramebuffer(I,de),f[I]=de,I===t.DRAW_FRAMEBUFFER&&(f[t.FRAMEBUFFER]=de),I===t.FRAMEBUFFER&&(f[t.DRAW_FRAMEBUFFER]=de),!0):!1}function Re(I,de){let $=d,te=!1;if(I){$=h.get(de),$===void 0&&($=[],h.set(de,$));const pe=I.textures;if($.length!==pe.length||$[0]!==t.COLOR_ATTACHMENT0){for(let ge=0,Ye=pe.length;ge<Ye;ge++)$[ge]=t.COLOR_ATTACHMENT0+ge;$.length=pe.length,te=!0}}else $[0]!==t.BACK&&($[0]=t.BACK,te=!0);te&&t.drawBuffers($)}function Ge(I){return p!==I?(t.useProgram(I),p=I,!0):!1}const Qe={[dr]:t.FUNC_ADD,[Cy]:t.FUNC_SUBTRACT,[Ry]:t.FUNC_REVERSE_SUBTRACT};Qe[Py]=t.MIN,Qe[Ny]=t.MAX;const je={[Ly]:t.ZERO,[Dy]:t.ONE,[Iy]:t.SRC_COLOR,[nd]:t.SRC_ALPHA,[By]:t.SRC_ALPHA_SATURATE,[Oy]:t.DST_COLOR,[Fy]:t.DST_ALPHA,[Uy]:t.ONE_MINUS_SRC_COLOR,[id]:t.ONE_MINUS_SRC_ALPHA,[zy]:t.ONE_MINUS_DST_COLOR,[ky]:t.ONE_MINUS_DST_ALPHA,[Hy]:t.CONSTANT_COLOR,[Vy]:t.ONE_MINUS_CONSTANT_COLOR,[Gy]:t.CONSTANT_ALPHA,[jy]:t.ONE_MINUS_CONSTANT_ALPHA};function D(I,de,$,te,pe,ge,Ye,yt,Qt,Ze){if(I===ji){y===!0&&(ue(t.BLEND),y=!1);return}if(y===!1&&(fe(t.BLEND),y=!0),I!==by){if(I!==S||Ze!==R){if((m!==dr||g!==dr)&&(t.blendEquation(t.FUNC_ADD),m=dr,g=dr),Ze)switch(I){case hs:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Cp:t.blendFunc(t.ONE,t.ONE);break;case Rp:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Pp:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case hs:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Cp:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case Rp:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Pp:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}u=null,v=null,M=null,P=null,b.set(0,0,0),T=0,S=I,R=Ze}return}pe=pe||de,ge=ge||$,Ye=Ye||te,(de!==m||pe!==g)&&(t.blendEquationSeparate(Qe[de],Qe[pe]),m=de,g=pe),($!==u||te!==v||ge!==M||Ye!==P)&&(t.blendFuncSeparate(je[$],je[te],je[ge],je[Ye]),u=$,v=te,M=ge,P=Ye),(yt.equals(b)===!1||Qt!==T)&&(t.blendColor(yt.r,yt.g,yt.b,Qt),b.copy(yt),T=Qt),S=I,R=!1}function jt(I,de){I.side===li?ue(t.CULL_FACE):fe(t.CULL_FACE);let $=I.side===on;de&&($=!$),He($),I.blending===hs&&I.transparent===!1?D(ji):D(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),s.setFunc(I.depthFunc),s.setTest(I.depthTest),s.setMask(I.depthWrite),r.setMask(I.colorWrite);const te=I.stencilWrite;o.setTest(te),te&&(o.setMask(I.stencilWriteMask),o.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),o.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),nt(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?fe(t.SAMPLE_ALPHA_TO_COVERAGE):ue(t.SAMPLE_ALPHA_TO_COVERAGE)}function He(I){L!==I&&(I?t.frontFace(t.CW):t.frontFace(t.CCW),L=I)}function We(I){I!==Ty?(fe(t.CULL_FACE),I!==x&&(I===bp?t.cullFace(t.BACK):I===Ay?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):ue(t.CULL_FACE),x=I}function Pe(I){I!==E&&(X&&t.lineWidth(I),E=I)}function nt(I,de,$){I?(fe(t.POLYGON_OFFSET_FILL),(U!==de||B!==$)&&(t.polygonOffset(de,$),U=de,B=$)):ue(t.POLYGON_OFFSET_FILL)}function Le(I){I?fe(t.SCISSOR_TEST):ue(t.SCISSOR_TEST)}function C(I){I===void 0&&(I=t.TEXTURE0+O-1),N!==I&&(t.activeTexture(I),N=I)}function w(I,de,$){$===void 0&&(N===null?$=t.TEXTURE0+O-1:$=N);let te=Q[$];te===void 0&&(te={type:void 0,texture:void 0},Q[$]=te),(te.type!==I||te.texture!==de)&&(N!==$&&(t.activeTexture($),N=$),t.bindTexture(I,de||re[I]),te.type=I,te.texture=de)}function H(){const I=Q[N];I!==void 0&&I.type!==void 0&&(t.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function J(){try{t.compressedTexImage2D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ne(){try{t.compressedTexImage3D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Z(){try{t.texSubImage2D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function W(){try{t.texSubImage3D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function K(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function oe(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ae(){try{t.texStorage2D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ie(){try{t.texStorage3D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function he(){try{t.texImage2D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Se(){try{t.texImage3D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ce(I){we.equals(I)===!1&&(t.scissor(I.x,I.y,I.z,I.w),we.copy(I))}function xe(I){ze.equals(I)===!1&&(t.viewport(I.x,I.y,I.z,I.w),ze.copy(I))}function Ve(I,de){let $=l.get(de);$===void 0&&($=new WeakMap,l.set(de,$));let te=$.get(I);te===void 0&&(te=t.getUniformBlockIndex(de,I.name),$.set(I,te))}function Ue(I,de){const te=l.get(de).get(I);a.get(de)!==te&&(t.uniformBlockBinding(de,te,I.__bindingPointIndex),a.set(de,te))}function be(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),c={},N=null,Q={},f={},h=new WeakMap,d=[],p=null,y=!1,S=null,m=null,u=null,v=null,g=null,M=null,P=null,b=new qe(0,0,0),T=0,R=!1,L=null,x=null,E=null,U=null,B=null,we.set(0,0,t.canvas.width,t.canvas.height),ze.set(0,0,t.canvas.width,t.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:fe,disable:ue,bindFramebuffer:Ie,drawBuffers:Re,useProgram:Ge,setBlending:D,setMaterial:jt,setFlipSided:He,setCullFace:We,setLineWidth:Pe,setPolygonOffset:nt,setScissorTest:Le,activeTexture:C,bindTexture:w,unbindTexture:H,compressedTexImage2D:J,compressedTexImage3D:ne,texImage2D:he,texImage3D:Se,updateUBOMapping:Ve,uniformBlockBinding:Ue,texStorage2D:Ae,texStorage3D:ie,texSubImage2D:Z,texSubImage3D:W,compressedTexSubImage2D:K,compressedTexSubImage3D:oe,scissor:Ce,viewport:xe,reset:be}}function Sm(t,e,n,i){const r=R2(i);switch(n){case ev:return t*e;case nv:return t*e;case iv:return t*e*2;case rv:return t*e/r.components*r.byteLength;case Wf:return t*e/r.components*r.byteLength;case sv:return t*e*2/r.components*r.byteLength;case Xf:return t*e*2/r.components*r.byteLength;case tv:return t*e*3/r.components*r.byteLength;case zn:return t*e*4/r.components*r.byteLength;case $f:return t*e*4/r.components*r.byteLength;case Wa:case Xa:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case $a:case Ya:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case gd:case xd:return Math.max(t,16)*Math.max(e,8)/4;case md:case vd:return Math.max(t,8)*Math.max(e,8)/2;case _d:case yd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Sd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Md:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Ed:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case wd:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Td:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case Ad:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case bd:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case Cd:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case Rd:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case Pd:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case Nd:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case Ld:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case Dd:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case Id:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case Ud:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case qa:case Fd:case kd:return Math.ceil(t/4)*Math.ceil(e/4)*16;case ov:case Od:return Math.ceil(t/4)*Math.ceil(e/4)*8;case zd:case Bd:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function R2(t){switch(t){case xi:case Zg:return{byteLength:1,components:1};case Do:case Qg:case Go:return{byteLength:2,components:1};case Gf:case jf:return{byteLength:2,components:4};case Ar:case Vf:case di:return{byteLength:4,components:1};case Jg:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}function P2(t,e,n,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new $e,f=new WeakMap;let h;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(C,w){return p?new OffscreenCanvas(C,w):bl("canvas")}function S(C,w,H){let J=1;const ne=Le(C);if((ne.width>H||ne.height>H)&&(J=H/Math.max(ne.width,ne.height)),J<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const Z=Math.floor(J*ne.width),W=Math.floor(J*ne.height);h===void 0&&(h=y(Z,W));const K=w?y(Z,W):h;return K.width=Z,K.height=W,K.getContext("2d").drawImage(C,0,0,Z,W),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ne.width+"x"+ne.height+") to ("+Z+"x"+W+")."),K}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ne.width+"x"+ne.height+")."),C;return C}function m(C){return C.generateMipmaps&&C.minFilter!==Tn&&C.minFilter!==kn}function u(C){t.generateMipmap(C)}function v(C,w,H,J,ne=!1){if(C!==null){if(t[C]!==void 0)return t[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let Z=w;if(w===t.RED&&(H===t.FLOAT&&(Z=t.R32F),H===t.HALF_FLOAT&&(Z=t.R16F),H===t.UNSIGNED_BYTE&&(Z=t.R8)),w===t.RED_INTEGER&&(H===t.UNSIGNED_BYTE&&(Z=t.R8UI),H===t.UNSIGNED_SHORT&&(Z=t.R16UI),H===t.UNSIGNED_INT&&(Z=t.R32UI),H===t.BYTE&&(Z=t.R8I),H===t.SHORT&&(Z=t.R16I),H===t.INT&&(Z=t.R32I)),w===t.RG&&(H===t.FLOAT&&(Z=t.RG32F),H===t.HALF_FLOAT&&(Z=t.RG16F),H===t.UNSIGNED_BYTE&&(Z=t.RG8)),w===t.RG_INTEGER&&(H===t.UNSIGNED_BYTE&&(Z=t.RG8UI),H===t.UNSIGNED_SHORT&&(Z=t.RG16UI),H===t.UNSIGNED_INT&&(Z=t.RG32UI),H===t.BYTE&&(Z=t.RG8I),H===t.SHORT&&(Z=t.RG16I),H===t.INT&&(Z=t.RG32I)),w===t.RGB_INTEGER&&(H===t.UNSIGNED_BYTE&&(Z=t.RGB8UI),H===t.UNSIGNED_SHORT&&(Z=t.RGB16UI),H===t.UNSIGNED_INT&&(Z=t.RGB32UI),H===t.BYTE&&(Z=t.RGB8I),H===t.SHORT&&(Z=t.RGB16I),H===t.INT&&(Z=t.RGB32I)),w===t.RGBA_INTEGER&&(H===t.UNSIGNED_BYTE&&(Z=t.RGBA8UI),H===t.UNSIGNED_SHORT&&(Z=t.RGBA16UI),H===t.UNSIGNED_INT&&(Z=t.RGBA32UI),H===t.BYTE&&(Z=t.RGBA8I),H===t.SHORT&&(Z=t.RGBA16I),H===t.INT&&(Z=t.RGBA32I)),w===t.RGB&&H===t.UNSIGNED_INT_5_9_9_9_REV&&(Z=t.RGB9_E5),w===t.RGBA){const W=ne?El:tt.getTransfer(J);H===t.FLOAT&&(Z=t.RGBA32F),H===t.HALF_FLOAT&&(Z=t.RGBA16F),H===t.UNSIGNED_BYTE&&(Z=W===lt?t.SRGB8_ALPHA8:t.RGBA8),H===t.UNSIGNED_SHORT_4_4_4_4&&(Z=t.RGBA4),H===t.UNSIGNED_SHORT_5_5_5_1&&(Z=t.RGB5_A1)}return(Z===t.R16F||Z===t.R32F||Z===t.RG16F||Z===t.RG32F||Z===t.RGBA16F||Z===t.RGBA32F)&&e.get("EXT_color_buffer_float"),Z}function g(C,w){let H;return C?w===null||w===Ar||w===bs?H=t.DEPTH24_STENCIL8:w===di?H=t.DEPTH32F_STENCIL8:w===Do&&(H=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===Ar||w===bs?H=t.DEPTH_COMPONENT24:w===di?H=t.DEPTH_COMPONENT32F:w===Do&&(H=t.DEPTH_COMPONENT16),H}function M(C,w){return m(C)===!0||C.isFramebufferTexture&&C.minFilter!==Tn&&C.minFilter!==kn?Math.log2(Math.max(w.width,w.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?w.mipmaps.length:1}function P(C){const w=C.target;w.removeEventListener("dispose",P),T(w),w.isVideoTexture&&f.delete(w)}function b(C){const w=C.target;w.removeEventListener("dispose",b),L(w)}function T(C){const w=i.get(C);if(w.__webglInit===void 0)return;const H=C.source,J=d.get(H);if(J){const ne=J[w.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&R(C),Object.keys(J).length===0&&d.delete(H)}i.remove(C)}function R(C){const w=i.get(C);t.deleteTexture(w.__webglTexture);const H=C.source,J=d.get(H);delete J[w.__cacheKey],o.memory.textures--}function L(C){const w=i.get(C);if(C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(w.__webglFramebuffer[J]))for(let ne=0;ne<w.__webglFramebuffer[J].length;ne++)t.deleteFramebuffer(w.__webglFramebuffer[J][ne]);else t.deleteFramebuffer(w.__webglFramebuffer[J]);w.__webglDepthbuffer&&t.deleteRenderbuffer(w.__webglDepthbuffer[J])}else{if(Array.isArray(w.__webglFramebuffer))for(let J=0;J<w.__webglFramebuffer.length;J++)t.deleteFramebuffer(w.__webglFramebuffer[J]);else t.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&t.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&t.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let J=0;J<w.__webglColorRenderbuffer.length;J++)w.__webglColorRenderbuffer[J]&&t.deleteRenderbuffer(w.__webglColorRenderbuffer[J]);w.__webglDepthRenderbuffer&&t.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const H=C.textures;for(let J=0,ne=H.length;J<ne;J++){const Z=i.get(H[J]);Z.__webglTexture&&(t.deleteTexture(Z.__webglTexture),o.memory.textures--),i.remove(H[J])}i.remove(C)}let x=0;function E(){x=0}function U(){const C=x;return C>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+r.maxTextures),x+=1,C}function B(C){const w=[];return w.push(C.wrapS),w.push(C.wrapT),w.push(C.wrapR||0),w.push(C.magFilter),w.push(C.minFilter),w.push(C.anisotropy),w.push(C.internalFormat),w.push(C.format),w.push(C.type),w.push(C.generateMipmaps),w.push(C.premultiplyAlpha),w.push(C.flipY),w.push(C.unpackAlignment),w.push(C.colorSpace),w.join()}function O(C,w){const H=i.get(C);if(C.isVideoTexture&&Pe(C),C.isRenderTargetTexture===!1&&C.version>0&&H.__version!==C.version){const J=C.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ze(H,C,w);return}}n.bindTexture(t.TEXTURE_2D,H.__webglTexture,t.TEXTURE0+w)}function X(C,w){const H=i.get(C);if(C.version>0&&H.__version!==C.version){ze(H,C,w);return}n.bindTexture(t.TEXTURE_2D_ARRAY,H.__webglTexture,t.TEXTURE0+w)}function j(C,w){const H=i.get(C);if(C.version>0&&H.__version!==C.version){ze(H,C,w);return}n.bindTexture(t.TEXTURE_3D,H.__webglTexture,t.TEXTURE0+w)}function Y(C,w){const H=i.get(C);if(C.version>0&&H.__version!==C.version){q(H,C,w);return}n.bindTexture(t.TEXTURE_CUBE_MAP,H.__webglTexture,t.TEXTURE0+w)}const N={[hd]:t.REPEAT,[gr]:t.CLAMP_TO_EDGE,[pd]:t.MIRRORED_REPEAT},Q={[Tn]:t.NEAREST,[Jy]:t.NEAREST_MIPMAP_NEAREST,[fa]:t.NEAREST_MIPMAP_LINEAR,[kn]:t.LINEAR,[Cc]:t.LINEAR_MIPMAP_NEAREST,[vr]:t.LINEAR_MIPMAP_LINEAR},ee={[i1]:t.NEVER,[c1]:t.ALWAYS,[r1]:t.LESS,[lv]:t.LEQUAL,[s1]:t.EQUAL,[l1]:t.GEQUAL,[o1]:t.GREATER,[a1]:t.NOTEQUAL};function le(C,w){if(w.type===di&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===kn||w.magFilter===Cc||w.magFilter===fa||w.magFilter===vr||w.minFilter===kn||w.minFilter===Cc||w.minFilter===fa||w.minFilter===vr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(C,t.TEXTURE_WRAP_S,N[w.wrapS]),t.texParameteri(C,t.TEXTURE_WRAP_T,N[w.wrapT]),(C===t.TEXTURE_3D||C===t.TEXTURE_2D_ARRAY)&&t.texParameteri(C,t.TEXTURE_WRAP_R,N[w.wrapR]),t.texParameteri(C,t.TEXTURE_MAG_FILTER,Q[w.magFilter]),t.texParameteri(C,t.TEXTURE_MIN_FILTER,Q[w.minFilter]),w.compareFunction&&(t.texParameteri(C,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(C,t.TEXTURE_COMPARE_FUNC,ee[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===Tn||w.minFilter!==fa&&w.minFilter!==vr||w.type===di&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||i.get(w).__currentAnisotropy){const H=e.get("EXT_texture_filter_anisotropic");t.texParameterf(C,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,r.getMaxAnisotropy())),i.get(w).__currentAnisotropy=w.anisotropy}}}function we(C,w){let H=!1;C.__webglInit===void 0&&(C.__webglInit=!0,w.addEventListener("dispose",P));const J=w.source;let ne=d.get(J);ne===void 0&&(ne={},d.set(J,ne));const Z=B(w);if(Z!==C.__cacheKey){ne[Z]===void 0&&(ne[Z]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,H=!0),ne[Z].usedTimes++;const W=ne[C.__cacheKey];W!==void 0&&(ne[C.__cacheKey].usedTimes--,W.usedTimes===0&&R(w)),C.__cacheKey=Z,C.__webglTexture=ne[Z].texture}return H}function ze(C,w,H){let J=t.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(J=t.TEXTURE_2D_ARRAY),w.isData3DTexture&&(J=t.TEXTURE_3D);const ne=we(C,w),Z=w.source;n.bindTexture(J,C.__webglTexture,t.TEXTURE0+H);const W=i.get(Z);if(Z.version!==W.__version||ne===!0){n.activeTexture(t.TEXTURE0+H);const K=tt.getPrimaries(tt.workingColorSpace),oe=w.colorSpace===Li?null:tt.getPrimaries(w.colorSpace),Ae=w.colorSpace===Li||K===oe?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,w.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,w.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ae);let ie=S(w.image,!1,r.maxTextureSize);ie=nt(w,ie);const he=s.convert(w.format,w.colorSpace),Se=s.convert(w.type);let Ce=v(w.internalFormat,he,Se,w.colorSpace,w.isVideoTexture);le(J,w);let xe;const Ve=w.mipmaps,Ue=w.isVideoTexture!==!0,be=W.__version===void 0||ne===!0,I=Z.dataReady,de=M(w,ie);if(w.isDepthTexture)Ce=g(w.format===Cs,w.type),be&&(Ue?n.texStorage2D(t.TEXTURE_2D,1,Ce,ie.width,ie.height):n.texImage2D(t.TEXTURE_2D,0,Ce,ie.width,ie.height,0,he,Se,null));else if(w.isDataTexture)if(Ve.length>0){Ue&&be&&n.texStorage2D(t.TEXTURE_2D,de,Ce,Ve[0].width,Ve[0].height);for(let $=0,te=Ve.length;$<te;$++)xe=Ve[$],Ue?I&&n.texSubImage2D(t.TEXTURE_2D,$,0,0,xe.width,xe.height,he,Se,xe.data):n.texImage2D(t.TEXTURE_2D,$,Ce,xe.width,xe.height,0,he,Se,xe.data);w.generateMipmaps=!1}else Ue?(be&&n.texStorage2D(t.TEXTURE_2D,de,Ce,ie.width,ie.height),I&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ie.width,ie.height,he,Se,ie.data)):n.texImage2D(t.TEXTURE_2D,0,Ce,ie.width,ie.height,0,he,Se,ie.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){Ue&&be&&n.texStorage3D(t.TEXTURE_2D_ARRAY,de,Ce,Ve[0].width,Ve[0].height,ie.depth);for(let $=0,te=Ve.length;$<te;$++)if(xe=Ve[$],w.format!==zn)if(he!==null)if(Ue){if(I)if(w.layerUpdates.size>0){const pe=Sm(xe.width,xe.height,w.format,w.type);for(const ge of w.layerUpdates){const Ye=xe.data.subarray(ge*pe/xe.data.BYTES_PER_ELEMENT,(ge+1)*pe/xe.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,$,0,0,ge,xe.width,xe.height,1,he,Ye,0,0)}w.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,$,0,0,0,xe.width,xe.height,ie.depth,he,xe.data,0,0)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,$,Ce,xe.width,xe.height,ie.depth,0,xe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ue?I&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,$,0,0,0,xe.width,xe.height,ie.depth,he,Se,xe.data):n.texImage3D(t.TEXTURE_2D_ARRAY,$,Ce,xe.width,xe.height,ie.depth,0,he,Se,xe.data)}else{Ue&&be&&n.texStorage2D(t.TEXTURE_2D,de,Ce,Ve[0].width,Ve[0].height);for(let $=0,te=Ve.length;$<te;$++)xe=Ve[$],w.format!==zn?he!==null?Ue?I&&n.compressedTexSubImage2D(t.TEXTURE_2D,$,0,0,xe.width,xe.height,he,xe.data):n.compressedTexImage2D(t.TEXTURE_2D,$,Ce,xe.width,xe.height,0,xe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ue?I&&n.texSubImage2D(t.TEXTURE_2D,$,0,0,xe.width,xe.height,he,Se,xe.data):n.texImage2D(t.TEXTURE_2D,$,Ce,xe.width,xe.height,0,he,Se,xe.data)}else if(w.isDataArrayTexture)if(Ue){if(be&&n.texStorage3D(t.TEXTURE_2D_ARRAY,de,Ce,ie.width,ie.height,ie.depth),I)if(w.layerUpdates.size>0){const $=Sm(ie.width,ie.height,w.format,w.type);for(const te of w.layerUpdates){const pe=ie.data.subarray(te*$/ie.data.BYTES_PER_ELEMENT,(te+1)*$/ie.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,te,ie.width,ie.height,1,he,Se,pe)}w.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ie.width,ie.height,ie.depth,he,Se,ie.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Ce,ie.width,ie.height,ie.depth,0,he,Se,ie.data);else if(w.isData3DTexture)Ue?(be&&n.texStorage3D(t.TEXTURE_3D,de,Ce,ie.width,ie.height,ie.depth),I&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ie.width,ie.height,ie.depth,he,Se,ie.data)):n.texImage3D(t.TEXTURE_3D,0,Ce,ie.width,ie.height,ie.depth,0,he,Se,ie.data);else if(w.isFramebufferTexture){if(be)if(Ue)n.texStorage2D(t.TEXTURE_2D,de,Ce,ie.width,ie.height);else{let $=ie.width,te=ie.height;for(let pe=0;pe<de;pe++)n.texImage2D(t.TEXTURE_2D,pe,Ce,$,te,0,he,Se,null),$>>=1,te>>=1}}else if(Ve.length>0){if(Ue&&be){const $=Le(Ve[0]);n.texStorage2D(t.TEXTURE_2D,de,Ce,$.width,$.height)}for(let $=0,te=Ve.length;$<te;$++)xe=Ve[$],Ue?I&&n.texSubImage2D(t.TEXTURE_2D,$,0,0,he,Se,xe):n.texImage2D(t.TEXTURE_2D,$,Ce,he,Se,xe);w.generateMipmaps=!1}else if(Ue){if(be){const $=Le(ie);n.texStorage2D(t.TEXTURE_2D,de,Ce,$.width,$.height)}I&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,he,Se,ie)}else n.texImage2D(t.TEXTURE_2D,0,Ce,he,Se,ie);m(w)&&u(J),W.__version=Z.version,w.onUpdate&&w.onUpdate(w)}C.__version=w.version}function q(C,w,H){if(w.image.length!==6)return;const J=we(C,w),ne=w.source;n.bindTexture(t.TEXTURE_CUBE_MAP,C.__webglTexture,t.TEXTURE0+H);const Z=i.get(ne);if(ne.version!==Z.__version||J===!0){n.activeTexture(t.TEXTURE0+H);const W=tt.getPrimaries(tt.workingColorSpace),K=w.colorSpace===Li?null:tt.getPrimaries(w.colorSpace),oe=w.colorSpace===Li||W===K?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,w.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,w.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,oe);const Ae=w.isCompressedTexture||w.image[0].isCompressedTexture,ie=w.image[0]&&w.image[0].isDataTexture,he=[];for(let te=0;te<6;te++)!Ae&&!ie?he[te]=S(w.image[te],!0,r.maxCubemapSize):he[te]=ie?w.image[te].image:w.image[te],he[te]=nt(w,he[te]);const Se=he[0],Ce=s.convert(w.format,w.colorSpace),xe=s.convert(w.type),Ve=v(w.internalFormat,Ce,xe,w.colorSpace),Ue=w.isVideoTexture!==!0,be=Z.__version===void 0||J===!0,I=ne.dataReady;let de=M(w,Se);le(t.TEXTURE_CUBE_MAP,w);let $;if(Ae){Ue&&be&&n.texStorage2D(t.TEXTURE_CUBE_MAP,de,Ve,Se.width,Se.height);for(let te=0;te<6;te++){$=he[te].mipmaps;for(let pe=0;pe<$.length;pe++){const ge=$[pe];w.format!==zn?Ce!==null?Ue?I&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,pe,0,0,ge.width,ge.height,Ce,ge.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,pe,Ve,ge.width,ge.height,0,ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ue?I&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,pe,0,0,ge.width,ge.height,Ce,xe,ge.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,pe,Ve,ge.width,ge.height,0,Ce,xe,ge.data)}}}else{if($=w.mipmaps,Ue&&be){$.length>0&&de++;const te=Le(he[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,de,Ve,te.width,te.height)}for(let te=0;te<6;te++)if(ie){Ue?I&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,he[te].width,he[te].height,Ce,xe,he[te].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,Ve,he[te].width,he[te].height,0,Ce,xe,he[te].data);for(let pe=0;pe<$.length;pe++){const Ye=$[pe].image[te].image;Ue?I&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,pe+1,0,0,Ye.width,Ye.height,Ce,xe,Ye.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,pe+1,Ve,Ye.width,Ye.height,0,Ce,xe,Ye.data)}}else{Ue?I&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,Ce,xe,he[te]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,Ve,Ce,xe,he[te]);for(let pe=0;pe<$.length;pe++){const ge=$[pe];Ue?I&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,pe+1,0,0,Ce,xe,ge.image[te]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,pe+1,Ve,Ce,xe,ge.image[te])}}}m(w)&&u(t.TEXTURE_CUBE_MAP),Z.__version=ne.version,w.onUpdate&&w.onUpdate(w)}C.__version=w.version}function re(C,w,H,J,ne,Z){const W=s.convert(H.format,H.colorSpace),K=s.convert(H.type),oe=v(H.internalFormat,W,K,H.colorSpace);if(!i.get(w).__hasExternalTextures){const ie=Math.max(1,w.width>>Z),he=Math.max(1,w.height>>Z);ne===t.TEXTURE_3D||ne===t.TEXTURE_2D_ARRAY?n.texImage3D(ne,Z,oe,ie,he,w.depth,0,W,K,null):n.texImage2D(ne,Z,oe,ie,he,0,W,K,null)}n.bindFramebuffer(t.FRAMEBUFFER,C),We(w)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,J,ne,i.get(H).__webglTexture,0,He(w)):(ne===t.TEXTURE_2D||ne>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ne<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,J,ne,i.get(H).__webglTexture,Z),n.bindFramebuffer(t.FRAMEBUFFER,null)}function fe(C,w,H){if(t.bindRenderbuffer(t.RENDERBUFFER,C),w.depthBuffer){const J=w.depthTexture,ne=J&&J.isDepthTexture?J.type:null,Z=g(w.stencilBuffer,ne),W=w.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,K=He(w);We(w)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,K,Z,w.width,w.height):H?t.renderbufferStorageMultisample(t.RENDERBUFFER,K,Z,w.width,w.height):t.renderbufferStorage(t.RENDERBUFFER,Z,w.width,w.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,W,t.RENDERBUFFER,C)}else{const J=w.textures;for(let ne=0;ne<J.length;ne++){const Z=J[ne],W=s.convert(Z.format,Z.colorSpace),K=s.convert(Z.type),oe=v(Z.internalFormat,W,K,Z.colorSpace),Ae=He(w);H&&We(w)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Ae,oe,w.width,w.height):We(w)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Ae,oe,w.width,w.height):t.renderbufferStorage(t.RENDERBUFFER,oe,w.width,w.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function ue(C,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,C),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),O(w.depthTexture,0);const J=i.get(w.depthTexture).__webglTexture,ne=He(w);if(w.depthTexture.format===ps)We(w)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,J,0,ne):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,J,0);else if(w.depthTexture.format===Cs)We(w)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,J,0,ne):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function Ie(C){const w=i.get(C),H=C.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==C.depthTexture){const J=C.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),J){const ne=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,J.removeEventListener("dispose",ne)};J.addEventListener("dispose",ne),w.__depthDisposeCallback=ne}w.__boundDepthTexture=J}if(C.depthTexture&&!w.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");ue(w.__webglFramebuffer,C)}else if(H){w.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(n.bindFramebuffer(t.FRAMEBUFFER,w.__webglFramebuffer[J]),w.__webglDepthbuffer[J]===void 0)w.__webglDepthbuffer[J]=t.createRenderbuffer(),fe(w.__webglDepthbuffer[J],C,!1);else{const ne=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Z=w.__webglDepthbuffer[J];t.bindRenderbuffer(t.RENDERBUFFER,Z),t.framebufferRenderbuffer(t.FRAMEBUFFER,ne,t.RENDERBUFFER,Z)}}else if(n.bindFramebuffer(t.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=t.createRenderbuffer(),fe(w.__webglDepthbuffer,C,!1);else{const J=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ne=w.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,ne),t.framebufferRenderbuffer(t.FRAMEBUFFER,J,t.RENDERBUFFER,ne)}n.bindFramebuffer(t.FRAMEBUFFER,null)}function Re(C,w,H){const J=i.get(C);w!==void 0&&re(J.__webglFramebuffer,C,C.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),H!==void 0&&Ie(C)}function Ge(C){const w=C.texture,H=i.get(C),J=i.get(w);C.addEventListener("dispose",b);const ne=C.textures,Z=C.isWebGLCubeRenderTarget===!0,W=ne.length>1;if(W||(J.__webglTexture===void 0&&(J.__webglTexture=t.createTexture()),J.__version=w.version,o.memory.textures++),Z){H.__webglFramebuffer=[];for(let K=0;K<6;K++)if(w.mipmaps&&w.mipmaps.length>0){H.__webglFramebuffer[K]=[];for(let oe=0;oe<w.mipmaps.length;oe++)H.__webglFramebuffer[K][oe]=t.createFramebuffer()}else H.__webglFramebuffer[K]=t.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){H.__webglFramebuffer=[];for(let K=0;K<w.mipmaps.length;K++)H.__webglFramebuffer[K]=t.createFramebuffer()}else H.__webglFramebuffer=t.createFramebuffer();if(W)for(let K=0,oe=ne.length;K<oe;K++){const Ae=i.get(ne[K]);Ae.__webglTexture===void 0&&(Ae.__webglTexture=t.createTexture(),o.memory.textures++)}if(C.samples>0&&We(C)===!1){H.__webglMultisampledFramebuffer=t.createFramebuffer(),H.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let K=0;K<ne.length;K++){const oe=ne[K];H.__webglColorRenderbuffer[K]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,H.__webglColorRenderbuffer[K]);const Ae=s.convert(oe.format,oe.colorSpace),ie=s.convert(oe.type),he=v(oe.internalFormat,Ae,ie,oe.colorSpace,C.isXRRenderTarget===!0),Se=He(C);t.renderbufferStorageMultisample(t.RENDERBUFFER,Se,he,C.width,C.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+K,t.RENDERBUFFER,H.__webglColorRenderbuffer[K])}t.bindRenderbuffer(t.RENDERBUFFER,null),C.depthBuffer&&(H.__webglDepthRenderbuffer=t.createRenderbuffer(),fe(H.__webglDepthRenderbuffer,C,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(Z){n.bindTexture(t.TEXTURE_CUBE_MAP,J.__webglTexture),le(t.TEXTURE_CUBE_MAP,w);for(let K=0;K<6;K++)if(w.mipmaps&&w.mipmaps.length>0)for(let oe=0;oe<w.mipmaps.length;oe++)re(H.__webglFramebuffer[K][oe],C,w,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+K,oe);else re(H.__webglFramebuffer[K],C,w,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+K,0);m(w)&&u(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(W){for(let K=0,oe=ne.length;K<oe;K++){const Ae=ne[K],ie=i.get(Ae);n.bindTexture(t.TEXTURE_2D,ie.__webglTexture),le(t.TEXTURE_2D,Ae),re(H.__webglFramebuffer,C,Ae,t.COLOR_ATTACHMENT0+K,t.TEXTURE_2D,0),m(Ae)&&u(t.TEXTURE_2D)}n.unbindTexture()}else{let K=t.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(K=C.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(K,J.__webglTexture),le(K,w),w.mipmaps&&w.mipmaps.length>0)for(let oe=0;oe<w.mipmaps.length;oe++)re(H.__webglFramebuffer[oe],C,w,t.COLOR_ATTACHMENT0,K,oe);else re(H.__webglFramebuffer,C,w,t.COLOR_ATTACHMENT0,K,0);m(w)&&u(K),n.unbindTexture()}C.depthBuffer&&Ie(C)}function Qe(C){const w=C.textures;for(let H=0,J=w.length;H<J;H++){const ne=w[H];if(m(ne)){const Z=C.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,W=i.get(ne).__webglTexture;n.bindTexture(Z,W),u(Z),n.unbindTexture()}}}const je=[],D=[];function jt(C){if(C.samples>0){if(We(C)===!1){const w=C.textures,H=C.width,J=C.height;let ne=t.COLOR_BUFFER_BIT;const Z=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,W=i.get(C),K=w.length>1;if(K)for(let oe=0;oe<w.length;oe++)n.bindFramebuffer(t.FRAMEBUFFER,W.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+oe,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,W.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+oe,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,W.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,W.__webglFramebuffer);for(let oe=0;oe<w.length;oe++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(ne|=t.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(ne|=t.STENCIL_BUFFER_BIT)),K){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,W.__webglColorRenderbuffer[oe]);const Ae=i.get(w[oe]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Ae,0)}t.blitFramebuffer(0,0,H,J,0,0,H,J,ne,t.NEAREST),l===!0&&(je.length=0,D.length=0,je.push(t.COLOR_ATTACHMENT0+oe),C.depthBuffer&&C.resolveDepthBuffer===!1&&(je.push(Z),D.push(Z),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,D)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,je))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),K)for(let oe=0;oe<w.length;oe++){n.bindFramebuffer(t.FRAMEBUFFER,W.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+oe,t.RENDERBUFFER,W.__webglColorRenderbuffer[oe]);const Ae=i.get(w[oe]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,W.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+oe,t.TEXTURE_2D,Ae,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,W.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){const w=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[w])}}}function He(C){return Math.min(r.maxSamples,C.samples)}function We(C){const w=i.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function Pe(C){const w=o.render.frame;f.get(C)!==w&&(f.set(C,w),C.update())}function nt(C,w){const H=C.colorSpace,J=C.format,ne=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||H!==Ji&&H!==Li&&(tt.getTransfer(H)===lt?(J!==zn||ne!==xi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),w}function Le(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=U,this.resetTextureUnits=E,this.setTexture2D=O,this.setTexture2DArray=X,this.setTexture3D=j,this.setTextureCube=Y,this.rebindTextures=Re,this.setupRenderTarget=Ge,this.updateRenderTargetMipmap=Qe,this.updateMultisampleRenderTarget=jt,this.setupDepthRenderbuffer=Ie,this.setupFrameBufferTexture=re,this.useMultisampledRTT=We}function N2(t,e){function n(i,r=Li){let s;const o=tt.getTransfer(r);if(i===xi)return t.UNSIGNED_BYTE;if(i===Gf)return t.UNSIGNED_SHORT_4_4_4_4;if(i===jf)return t.UNSIGNED_SHORT_5_5_5_1;if(i===Jg)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===Zg)return t.BYTE;if(i===Qg)return t.SHORT;if(i===Do)return t.UNSIGNED_SHORT;if(i===Vf)return t.INT;if(i===Ar)return t.UNSIGNED_INT;if(i===di)return t.FLOAT;if(i===Go)return t.HALF_FLOAT;if(i===ev)return t.ALPHA;if(i===tv)return t.RGB;if(i===zn)return t.RGBA;if(i===nv)return t.LUMINANCE;if(i===iv)return t.LUMINANCE_ALPHA;if(i===ps)return t.DEPTH_COMPONENT;if(i===Cs)return t.DEPTH_STENCIL;if(i===rv)return t.RED;if(i===Wf)return t.RED_INTEGER;if(i===sv)return t.RG;if(i===Xf)return t.RG_INTEGER;if(i===$f)return t.RGBA_INTEGER;if(i===Wa||i===Xa||i===$a||i===Ya)if(o===lt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Wa)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Xa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===$a)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ya)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Wa)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Xa)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===$a)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ya)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===md||i===gd||i===vd||i===xd)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===md)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===gd)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===vd)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===xd)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===_d||i===yd||i===Sd)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===_d||i===yd)return o===lt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Sd)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Md||i===Ed||i===wd||i===Td||i===Ad||i===bd||i===Cd||i===Rd||i===Pd||i===Nd||i===Ld||i===Dd||i===Id||i===Ud)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Md)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Ed)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===wd)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Td)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Ad)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===bd)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Cd)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Rd)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Pd)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Nd)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Ld)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Dd)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Id)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Ud)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===qa||i===Fd||i===kd)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===qa)return o===lt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Fd)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===kd)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===ov||i===Od||i===zd||i===Bd)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===qa)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Od)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===zd)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Bd)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===bs?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}class L2 extends En{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Ht extends Lt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const D2={type:"move"};class nu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ht,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ht,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ht,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const S of e.hand.values()){const m=n.getJointPose(S,i),u=this._getHandJoint(c,S);m!==null&&(u.matrix.fromArray(m.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=m.radius),u.visible=m!==null}const f=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=f.position.distanceTo(h.position),p=.02,y=.005;c.inputState.pinching&&d>p+y?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-y&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(D2)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Ht;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const I2=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,U2=`
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

}`;class F2{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new an,s=e.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new qi({vertexShader:I2,fragmentShader:U2,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Mt(new Ps(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class k2 extends Is{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,f=null,h=null,d=null,p=null,y=null;const S=new F2,m=n.getContextAttributes();let u=null,v=null;const g=[],M=[],P=new $e;let b=null;const T=new En;T.layers.enable(1),T.viewport=new gt;const R=new En;R.layers.enable(2),R.viewport=new gt;const L=[T,R],x=new L2;x.layers.enable(1),x.layers.enable(2);let E=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let re=g[q];return re===void 0&&(re=new nu,g[q]=re),re.getTargetRaySpace()},this.getControllerGrip=function(q){let re=g[q];return re===void 0&&(re=new nu,g[q]=re),re.getGripSpace()},this.getHand=function(q){let re=g[q];return re===void 0&&(re=new nu,g[q]=re),re.getHandSpace()};function B(q){const re=M.indexOf(q.inputSource);if(re===-1)return;const fe=g[re];fe!==void 0&&(fe.update(q.inputSource,q.frame,c||o),fe.dispatchEvent({type:q.type,data:q.inputSource}))}function O(){r.removeEventListener("select",B),r.removeEventListener("selectstart",B),r.removeEventListener("selectend",B),r.removeEventListener("squeeze",B),r.removeEventListener("squeezestart",B),r.removeEventListener("squeezeend",B),r.removeEventListener("end",O),r.removeEventListener("inputsourceschange",X);for(let q=0;q<g.length;q++){const re=M[q];re!==null&&(M[q]=null,g[q].disconnect(re))}E=null,U=null,S.reset(),e.setRenderTarget(u),p=null,d=null,h=null,r=null,v=null,ze.stop(),i.isPresenting=!1,e.setPixelRatio(b),e.setSize(P.width,P.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){s=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){a=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return h},this.getFrame=function(){return y},this.getSession=function(){return r},this.setSession=async function(q){if(r=q,r!==null){if(u=e.getRenderTarget(),r.addEventListener("select",B),r.addEventListener("selectstart",B),r.addEventListener("selectend",B),r.addEventListener("squeeze",B),r.addEventListener("squeezestart",B),r.addEventListener("squeezeend",B),r.addEventListener("end",O),r.addEventListener("inputsourceschange",X),m.xrCompatible!==!0&&await n.makeXRCompatible(),b=e.getPixelRatio(),e.getSize(P),r.renderState.layers===void 0){const re={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,re),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),v=new br(p.framebufferWidth,p.framebufferHeight,{format:zn,type:xi,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let re=null,fe=null,ue=null;m.depth&&(ue=m.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,re=m.stencil?Cs:ps,fe=m.stencil?bs:Ar);const Ie={colorFormat:n.RGBA8,depthFormat:ue,scaleFactor:s};h=new XRWebGLBinding(r,n),d=h.createProjectionLayer(Ie),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),v=new br(d.textureWidth,d.textureHeight,{format:zn,type:xi,depthTexture:new Sv(d.textureWidth,d.textureHeight,fe,void 0,void 0,void 0,void 0,void 0,void 0,re),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),ze.setContext(r),ze.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function X(q){for(let re=0;re<q.removed.length;re++){const fe=q.removed[re],ue=M.indexOf(fe);ue>=0&&(M[ue]=null,g[ue].disconnect(fe))}for(let re=0;re<q.added.length;re++){const fe=q.added[re];let ue=M.indexOf(fe);if(ue===-1){for(let Re=0;Re<g.length;Re++)if(Re>=M.length){M.push(fe),ue=Re;break}else if(M[Re]===null){M[Re]=fe,ue=Re;break}if(ue===-1)break}const Ie=g[ue];Ie&&Ie.connect(fe)}}const j=new z,Y=new z;function N(q,re,fe){j.setFromMatrixPosition(re.matrixWorld),Y.setFromMatrixPosition(fe.matrixWorld);const ue=j.distanceTo(Y),Ie=re.projectionMatrix.elements,Re=fe.projectionMatrix.elements,Ge=Ie[14]/(Ie[10]-1),Qe=Ie[14]/(Ie[10]+1),je=(Ie[9]+1)/Ie[5],D=(Ie[9]-1)/Ie[5],jt=(Ie[8]-1)/Ie[0],He=(Re[8]+1)/Re[0],We=Ge*jt,Pe=Ge*He,nt=ue/(-jt+He),Le=nt*-jt;if(re.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(Le),q.translateZ(nt),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),Ie[10]===-1)q.projectionMatrix.copy(re.projectionMatrix),q.projectionMatrixInverse.copy(re.projectionMatrixInverse);else{const C=Ge+nt,w=Qe+nt,H=We-Le,J=Pe+(ue-Le),ne=je*Qe/w*C,Z=D*Qe/w*C;q.projectionMatrix.makePerspective(H,J,ne,Z,C,w),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function Q(q,re){re===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(re.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(r===null)return;let re=q.near,fe=q.far;S.texture!==null&&(S.depthNear>0&&(re=S.depthNear),S.depthFar>0&&(fe=S.depthFar)),x.near=R.near=T.near=re,x.far=R.far=T.far=fe,(E!==x.near||U!==x.far)&&(r.updateRenderState({depthNear:x.near,depthFar:x.far}),E=x.near,U=x.far);const ue=q.parent,Ie=x.cameras;Q(x,ue);for(let Re=0;Re<Ie.length;Re++)Q(Ie[Re],ue);Ie.length===2?N(x,T,R):x.projectionMatrix.copy(T.projectionMatrix),ee(q,x,ue)};function ee(q,re,fe){fe===null?q.matrix.copy(re.matrixWorld):(q.matrix.copy(fe.matrixWorld),q.matrix.invert(),q.matrix.multiply(re.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(re.projectionMatrix),q.projectionMatrixInverse.copy(re.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Io*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(q){l=q,d!==null&&(d.fixedFoveation=q),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=q)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(x)};let le=null;function we(q,re){if(f=re.getViewerPose(c||o),y=re,f!==null){const fe=f.views;p!==null&&(e.setRenderTargetFramebuffer(v,p.framebuffer),e.setRenderTarget(v));let ue=!1;fe.length!==x.cameras.length&&(x.cameras.length=0,ue=!0);for(let Re=0;Re<fe.length;Re++){const Ge=fe[Re];let Qe=null;if(p!==null)Qe=p.getViewport(Ge);else{const D=h.getViewSubImage(d,Ge);Qe=D.viewport,Re===0&&(e.setRenderTargetTextures(v,D.colorTexture,d.ignoreDepthValues?void 0:D.depthStencilTexture),e.setRenderTarget(v))}let je=L[Re];je===void 0&&(je=new En,je.layers.enable(Re),je.viewport=new gt,L[Re]=je),je.matrix.fromArray(Ge.transform.matrix),je.matrix.decompose(je.position,je.quaternion,je.scale),je.projectionMatrix.fromArray(Ge.projectionMatrix),je.projectionMatrixInverse.copy(je.projectionMatrix).invert(),je.viewport.set(Qe.x,Qe.y,Qe.width,Qe.height),Re===0&&(x.matrix.copy(je.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),ue===!0&&x.cameras.push(je)}const Ie=r.enabledFeatures;if(Ie&&Ie.includes("depth-sensing")){const Re=h.getDepthInformation(fe[0]);Re&&Re.isValid&&Re.texture&&S.init(e,Re,r.renderState)}}for(let fe=0;fe<g.length;fe++){const ue=M[fe],Ie=g[fe];ue!==null&&Ie!==void 0&&Ie.update(ue,re,c||o)}le&&le(q,re),re.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:re}),y=null}const ze=new yv;ze.setAnimationLoop(we),this.setAnimationLoop=function(q){le=q},this.dispose=function(){}}}const or=new Qn,O2=new vt;function z2(t,e){function n(m,u){m.matrixAutoUpdate===!0&&m.updateMatrix(),u.value.copy(m.matrix)}function i(m,u){u.color.getRGB(m.fogColor.value,vv(t)),u.isFog?(m.fogNear.value=u.near,m.fogFar.value=u.far):u.isFogExp2&&(m.fogDensity.value=u.density)}function r(m,u,v,g,M){u.isMeshBasicMaterial||u.isMeshLambertMaterial?s(m,u):u.isMeshToonMaterial?(s(m,u),h(m,u)):u.isMeshPhongMaterial?(s(m,u),f(m,u)):u.isMeshStandardMaterial?(s(m,u),d(m,u),u.isMeshPhysicalMaterial&&p(m,u,M)):u.isMeshMatcapMaterial?(s(m,u),y(m,u)):u.isMeshDepthMaterial?s(m,u):u.isMeshDistanceMaterial?(s(m,u),S(m,u)):u.isMeshNormalMaterial?s(m,u):u.isLineBasicMaterial?(o(m,u),u.isLineDashedMaterial&&a(m,u)):u.isPointsMaterial?l(m,u,v,g):u.isSpriteMaterial?c(m,u):u.isShadowMaterial?(m.color.value.copy(u.color),m.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(m,u){m.opacity.value=u.opacity,u.color&&m.diffuse.value.copy(u.color),u.emissive&&m.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(m.map.value=u.map,n(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.bumpMap&&(m.bumpMap.value=u.bumpMap,n(u.bumpMap,m.bumpMapTransform),m.bumpScale.value=u.bumpScale,u.side===on&&(m.bumpScale.value*=-1)),u.normalMap&&(m.normalMap.value=u.normalMap,n(u.normalMap,m.normalMapTransform),m.normalScale.value.copy(u.normalScale),u.side===on&&m.normalScale.value.negate()),u.displacementMap&&(m.displacementMap.value=u.displacementMap,n(u.displacementMap,m.displacementMapTransform),m.displacementScale.value=u.displacementScale,m.displacementBias.value=u.displacementBias),u.emissiveMap&&(m.emissiveMap.value=u.emissiveMap,n(u.emissiveMap,m.emissiveMapTransform)),u.specularMap&&(m.specularMap.value=u.specularMap,n(u.specularMap,m.specularMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest);const v=e.get(u),g=v.envMap,M=v.envMapRotation;g&&(m.envMap.value=g,or.copy(M),or.x*=-1,or.y*=-1,or.z*=-1,g.isCubeTexture&&g.isRenderTargetTexture===!1&&(or.y*=-1,or.z*=-1),m.envMapRotation.value.setFromMatrix4(O2.makeRotationFromEuler(or)),m.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=u.reflectivity,m.ior.value=u.ior,m.refractionRatio.value=u.refractionRatio),u.lightMap&&(m.lightMap.value=u.lightMap,m.lightMapIntensity.value=u.lightMapIntensity,n(u.lightMap,m.lightMapTransform)),u.aoMap&&(m.aoMap.value=u.aoMap,m.aoMapIntensity.value=u.aoMapIntensity,n(u.aoMap,m.aoMapTransform))}function o(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,u.map&&(m.map.value=u.map,n(u.map,m.mapTransform))}function a(m,u){m.dashSize.value=u.dashSize,m.totalSize.value=u.dashSize+u.gapSize,m.scale.value=u.scale}function l(m,u,v,g){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.size.value=u.size*v,m.scale.value=g*.5,u.map&&(m.map.value=u.map,n(u.map,m.uvTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function c(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.rotation.value=u.rotation,u.map&&(m.map.value=u.map,n(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function f(m,u){m.specular.value.copy(u.specular),m.shininess.value=Math.max(u.shininess,1e-4)}function h(m,u){u.gradientMap&&(m.gradientMap.value=u.gradientMap)}function d(m,u){m.metalness.value=u.metalness,u.metalnessMap&&(m.metalnessMap.value=u.metalnessMap,n(u.metalnessMap,m.metalnessMapTransform)),m.roughness.value=u.roughness,u.roughnessMap&&(m.roughnessMap.value=u.roughnessMap,n(u.roughnessMap,m.roughnessMapTransform)),u.envMap&&(m.envMapIntensity.value=u.envMapIntensity)}function p(m,u,v){m.ior.value=u.ior,u.sheen>0&&(m.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),m.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(m.sheenColorMap.value=u.sheenColorMap,n(u.sheenColorMap,m.sheenColorMapTransform)),u.sheenRoughnessMap&&(m.sheenRoughnessMap.value=u.sheenRoughnessMap,n(u.sheenRoughnessMap,m.sheenRoughnessMapTransform))),u.clearcoat>0&&(m.clearcoat.value=u.clearcoat,m.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(m.clearcoatMap.value=u.clearcoatMap,n(u.clearcoatMap,m.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,n(u.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(m.clearcoatNormalMap.value=u.clearcoatNormalMap,n(u.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===on&&m.clearcoatNormalScale.value.negate())),u.dispersion>0&&(m.dispersion.value=u.dispersion),u.iridescence>0&&(m.iridescence.value=u.iridescence,m.iridescenceIOR.value=u.iridescenceIOR,m.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(m.iridescenceMap.value=u.iridescenceMap,n(u.iridescenceMap,m.iridescenceMapTransform)),u.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=u.iridescenceThicknessMap,n(u.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),u.transmission>0&&(m.transmission.value=u.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),u.transmissionMap&&(m.transmissionMap.value=u.transmissionMap,n(u.transmissionMap,m.transmissionMapTransform)),m.thickness.value=u.thickness,u.thicknessMap&&(m.thicknessMap.value=u.thicknessMap,n(u.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=u.attenuationDistance,m.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(m.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(m.anisotropyMap.value=u.anisotropyMap,n(u.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=u.specularIntensity,m.specularColor.value.copy(u.specularColor),u.specularColorMap&&(m.specularColorMap.value=u.specularColorMap,n(u.specularColorMap,m.specularColorMapTransform)),u.specularIntensityMap&&(m.specularIntensityMap.value=u.specularIntensityMap,n(u.specularIntensityMap,m.specularIntensityMapTransform))}function y(m,u){u.matcap&&(m.matcap.value=u.matcap)}function S(m,u){const v=e.get(u).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function B2(t,e,n,i){let r={},s={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,g){const M=g.program;i.uniformBlockBinding(v,M)}function c(v,g){let M=r[v.id];M===void 0&&(y(v),M=f(v),r[v.id]=M,v.addEventListener("dispose",m));const P=g.program;i.updateUBOMapping(v,P);const b=e.render.frame;s[v.id]!==b&&(d(v),s[v.id]=b)}function f(v){const g=h();v.__bindingPointIndex=g;const M=t.createBuffer(),P=v.__size,b=v.usage;return t.bindBuffer(t.UNIFORM_BUFFER,M),t.bufferData(t.UNIFORM_BUFFER,P,b),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,g,M),M}function h(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(v){const g=r[v.id],M=v.uniforms,P=v.__cache;t.bindBuffer(t.UNIFORM_BUFFER,g);for(let b=0,T=M.length;b<T;b++){const R=Array.isArray(M[b])?M[b]:[M[b]];for(let L=0,x=R.length;L<x;L++){const E=R[L];if(p(E,b,L,P)===!0){const U=E.__offset,B=Array.isArray(E.value)?E.value:[E.value];let O=0;for(let X=0;X<B.length;X++){const j=B[X],Y=S(j);typeof j=="number"||typeof j=="boolean"?(E.__data[0]=j,t.bufferSubData(t.UNIFORM_BUFFER,U+O,E.__data)):j.isMatrix3?(E.__data[0]=j.elements[0],E.__data[1]=j.elements[1],E.__data[2]=j.elements[2],E.__data[3]=0,E.__data[4]=j.elements[3],E.__data[5]=j.elements[4],E.__data[6]=j.elements[5],E.__data[7]=0,E.__data[8]=j.elements[6],E.__data[9]=j.elements[7],E.__data[10]=j.elements[8],E.__data[11]=0):(j.toArray(E.__data,O),O+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,U,E.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(v,g,M,P){const b=v.value,T=g+"_"+M;if(P[T]===void 0)return typeof b=="number"||typeof b=="boolean"?P[T]=b:P[T]=b.clone(),!0;{const R=P[T];if(typeof b=="number"||typeof b=="boolean"){if(R!==b)return P[T]=b,!0}else if(R.equals(b)===!1)return R.copy(b),!0}return!1}function y(v){const g=v.uniforms;let M=0;const P=16;for(let T=0,R=g.length;T<R;T++){const L=Array.isArray(g[T])?g[T]:[g[T]];for(let x=0,E=L.length;x<E;x++){const U=L[x],B=Array.isArray(U.value)?U.value:[U.value];for(let O=0,X=B.length;O<X;O++){const j=B[O],Y=S(j),N=M%P,Q=N%Y.boundary,ee=N+Q;M+=Q,ee!==0&&P-ee<Y.storage&&(M+=P-ee),U.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=M,M+=Y.storage}}}const b=M%P;return b>0&&(M+=P-b),v.__size=M,v.__cache={},this}function S(v){const g={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(g.boundary=4,g.storage=4):v.isVector2?(g.boundary=8,g.storage=8):v.isVector3||v.isColor?(g.boundary=16,g.storage=12):v.isVector4?(g.boundary=16,g.storage=16):v.isMatrix3?(g.boundary=48,g.storage=48):v.isMatrix4?(g.boundary=64,g.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),g}function m(v){const g=v.target;g.removeEventListener("dispose",m);const M=o.indexOf(g.__bindingPointIndex);o.splice(M,1),t.deleteBuffer(r[g.id]),delete r[g.id],delete s[g.id]}function u(){for(const v in r)t.deleteBuffer(r[v]);o=[],r={},s={}}return{bind:l,update:c,dispose:u}}class Av{constructor(e={}){const{canvas:n=b1(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=o;const p=new Uint32Array(4),y=new Int32Array(4);let S=null,m=null;const u=[],v=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Xn,this.toneMapping=Wi,this.toneMappingExposure=1;const g=this;let M=!1,P=0,b=0,T=null,R=-1,L=null;const x=new gt,E=new gt;let U=null;const B=new qe(0);let O=0,X=n.width,j=n.height,Y=1,N=null,Q=null;const ee=new gt(0,0,X,j),le=new gt(0,0,X,j);let we=!1;const ze=new Zf;let q=!1,re=!1;const fe=new vt,ue=new vt,Ie=new z,Re=new gt,Ge={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Qe=!1;function je(){return T===null?Y:1}let D=i;function jt(A,F){return n.getContext(A,F)}try{const A={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:f,failIfMajorPerformanceCaveat:h};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${zf}`),n.addEventListener("webglcontextlost",te,!1),n.addEventListener("webglcontextrestored",pe,!1),n.addEventListener("webglcontextcreationerror",ge,!1),D===null){const F="webgl2";if(D=jt(F,A),D===null)throw jt(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let He,We,Pe,nt,Le,C,w,H,J,ne,Z,W,K,oe,Ae,ie,he,Se,Ce,xe,Ve,Ue,be,I;function de(){He=new XE(D),He.init(),Ue=new N2(D,He),We=new BE(D,He,e,Ue),Pe=new C2(D),We.reverseDepthBuffer&&Pe.buffers.depth.setReversed(!0),nt=new qE(D),Le=new h2,C=new P2(D,He,Pe,Le,We,Ue,nt),w=new VE(g),H=new WE(g),J=new nS(D),be=new OE(D,J),ne=new $E(D,J,nt,be),Z=new ZE(D,ne,J,nt),Ce=new KE(D,We,C),ie=new HE(Le),W=new f2(g,w,H,He,We,be,ie),K=new z2(g,Le),oe=new m2,Ae=new S2(He),Se=new kE(g,w,H,Pe,Z,d,l),he=new A2(g,Z,We),I=new B2(D,nt,We,Pe),xe=new zE(D,He,nt),Ve=new YE(D,He,nt),nt.programs=W.programs,g.capabilities=We,g.extensions=He,g.properties=Le,g.renderLists=oe,g.shadowMap=he,g.state=Pe,g.info=nt}de();const $=new k2(g,D);this.xr=$,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const A=He.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=He.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(A){A!==void 0&&(Y=A,this.setSize(X,j,!1))},this.getSize=function(A){return A.set(X,j)},this.setSize=function(A,F,V=!0){if($.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=A,j=F,n.width=Math.floor(A*Y),n.height=Math.floor(F*Y),V===!0&&(n.style.width=A+"px",n.style.height=F+"px"),this.setViewport(0,0,A,F)},this.getDrawingBufferSize=function(A){return A.set(X*Y,j*Y).floor()},this.setDrawingBufferSize=function(A,F,V){X=A,j=F,Y=V,n.width=Math.floor(A*V),n.height=Math.floor(F*V),this.setViewport(0,0,A,F)},this.getCurrentViewport=function(A){return A.copy(x)},this.getViewport=function(A){return A.copy(ee)},this.setViewport=function(A,F,V,G){A.isVector4?ee.set(A.x,A.y,A.z,A.w):ee.set(A,F,V,G),Pe.viewport(x.copy(ee).multiplyScalar(Y).round())},this.getScissor=function(A){return A.copy(le)},this.setScissor=function(A,F,V,G){A.isVector4?le.set(A.x,A.y,A.z,A.w):le.set(A,F,V,G),Pe.scissor(E.copy(le).multiplyScalar(Y).round())},this.getScissorTest=function(){return we},this.setScissorTest=function(A){Pe.setScissorTest(we=A)},this.setOpaqueSort=function(A){N=A},this.setTransparentSort=function(A){Q=A},this.getClearColor=function(A){return A.copy(Se.getClearColor())},this.setClearColor=function(){Se.setClearColor.apply(Se,arguments)},this.getClearAlpha=function(){return Se.getClearAlpha()},this.setClearAlpha=function(){Se.setClearAlpha.apply(Se,arguments)},this.clear=function(A=!0,F=!0,V=!0){let G=0;if(A){let k=!1;if(T!==null){const ae=T.texture.format;k=ae===$f||ae===Xf||ae===Wf}if(k){const ae=T.texture.type,me=ae===xi||ae===Ar||ae===Do||ae===bs||ae===Gf||ae===jf,ye=Se.getClearColor(),Me=Se.getClearAlpha(),Ne=ye.r,De=ye.g,Ee=ye.b;me?(p[0]=Ne,p[1]=De,p[2]=Ee,p[3]=Me,D.clearBufferuiv(D.COLOR,0,p)):(y[0]=Ne,y[1]=De,y[2]=Ee,y[3]=Me,D.clearBufferiv(D.COLOR,0,y))}else G|=D.COLOR_BUFFER_BIT}F&&(G|=D.DEPTH_BUFFER_BIT,D.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),V&&(G|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",te,!1),n.removeEventListener("webglcontextrestored",pe,!1),n.removeEventListener("webglcontextcreationerror",ge,!1),oe.dispose(),Ae.dispose(),Le.dispose(),w.dispose(),H.dispose(),Z.dispose(),be.dispose(),I.dispose(),W.dispose(),$.dispose(),$.removeEventListener("sessionstart",ah),$.removeEventListener("sessionend",lh),er.stop()};function te(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function pe(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;const A=nt.autoReset,F=he.enabled,V=he.autoUpdate,G=he.needsUpdate,k=he.type;de(),nt.autoReset=A,he.enabled=F,he.autoUpdate=V,he.needsUpdate=G,he.type=k}function ge(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Ye(A){const F=A.target;F.removeEventListener("dispose",Ye),yt(F)}function yt(A){Qt(A),Le.remove(A)}function Qt(A){const F=Le.get(A).programs;F!==void 0&&(F.forEach(function(V){W.releaseProgram(V)}),A.isShaderMaterial&&W.releaseShaderCache(A))}this.renderBufferDirect=function(A,F,V,G,k,ae){F===null&&(F=Ge);const me=k.isMesh&&k.matrixWorld.determinant()<0,ye=Dv(A,F,V,G,k);Pe.setMaterial(G,me);let Me=V.index,Ne=1;if(G.wireframe===!0){if(Me=ne.getWireframeAttribute(V),Me===void 0)return;Ne=2}const De=V.drawRange,Ee=V.attributes.position;let it=De.start*Ne,ot=(De.start+De.count)*Ne;ae!==null&&(it=Math.max(it,ae.start*Ne),ot=Math.min(ot,(ae.start+ae.count)*Ne)),Me!==null?(it=Math.max(it,0),ot=Math.min(ot,Me.count)):Ee!=null&&(it=Math.max(it,0),ot=Math.min(ot,Ee.count));const pt=ot-it;if(pt<0||pt===1/0)return;be.setup(k,G,ye,V,Me);let ln,Je=xe;if(Me!==null&&(ln=J.get(Me),Je=Ve,Je.setIndex(ln)),k.isMesh)G.wireframe===!0?(Pe.setLineWidth(G.wireframeLinewidth*je()),Je.setMode(D.LINES)):Je.setMode(D.TRIANGLES);else if(k.isLine){let Te=G.linewidth;Te===void 0&&(Te=1),Pe.setLineWidth(Te*je()),k.isLineSegments?Je.setMode(D.LINES):k.isLineLoop?Je.setMode(D.LINE_LOOP):Je.setMode(D.LINE_STRIP)}else k.isPoints?Je.setMode(D.POINTS):k.isSprite&&Je.setMode(D.TRIANGLES);if(k.isBatchedMesh)if(k._multiDrawInstances!==null)Je.renderMultiDrawInstances(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount,k._multiDrawInstances);else if(He.get("WEBGL_multi_draw"))Je.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{const Te=k._multiDrawStarts,Dt=k._multiDrawCounts,et=k._multiDrawCount,Rn=Me?J.get(Me).bytesPerElement:1,Nr=Le.get(G).currentProgram.getUniforms();for(let cn=0;cn<et;cn++)Nr.setValue(D,"_gl_DrawID",cn),Je.render(Te[cn]/Rn,Dt[cn])}else if(k.isInstancedMesh)Je.renderInstances(it,pt,k.count);else if(V.isInstancedBufferGeometry){const Te=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,Dt=Math.min(V.instanceCount,Te);Je.renderInstances(it,pt,Dt)}else Je.render(it,pt)};function Ze(A,F,V){A.transparent===!0&&A.side===li&&A.forceSinglePass===!1?(A.side=on,A.needsUpdate=!0,$o(A,F,V),A.side=Yi,A.needsUpdate=!0,$o(A,F,V),A.side=li):$o(A,F,V)}this.compile=function(A,F,V=null){V===null&&(V=A),m=Ae.get(V),m.init(F),v.push(m),V.traverseVisible(function(k){k.isLight&&k.layers.test(F.layers)&&(m.pushLight(k),k.castShadow&&m.pushShadow(k))}),A!==V&&A.traverseVisible(function(k){k.isLight&&k.layers.test(F.layers)&&(m.pushLight(k),k.castShadow&&m.pushShadow(k))}),m.setupLights();const G=new Set;return A.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;const ae=k.material;if(ae)if(Array.isArray(ae))for(let me=0;me<ae.length;me++){const ye=ae[me];Ze(ye,V,k),G.add(ye)}else Ze(ae,V,k),G.add(ae)}),v.pop(),m=null,G},this.compileAsync=function(A,F,V=null){const G=this.compile(A,F,V);return new Promise(k=>{function ae(){if(G.forEach(function(me){Le.get(me).currentProgram.isReady()&&G.delete(me)}),G.size===0){k(A);return}setTimeout(ae,10)}He.get("KHR_parallel_shader_compile")!==null?ae():setTimeout(ae,10)})};let Jt=null;function Jn(A){Jt&&Jt(A)}function ah(){er.stop()}function lh(){er.start()}const er=new yv;er.setAnimationLoop(Jn),typeof self<"u"&&er.setContext(self),this.setAnimationLoop=function(A){Jt=A,$.setAnimationLoop(A),A===null?er.stop():er.start()},$.addEventListener("sessionstart",ah),$.addEventListener("sessionend",lh),this.render=function(A,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),$.enabled===!0&&$.isPresenting===!0&&($.cameraAutoUpdate===!0&&$.updateCamera(F),F=$.getCamera()),A.isScene===!0&&A.onBeforeRender(g,A,F,T),m=Ae.get(A,v.length),m.init(F),v.push(m),ue.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),ze.setFromProjectionMatrix(ue),re=this.localClippingEnabled,q=ie.init(this.clippingPlanes,re),S=oe.get(A,u.length),S.init(),u.push(S),$.enabled===!0&&$.isPresenting===!0){const ae=g.xr.getDepthSensingMesh();ae!==null&&ql(ae,F,-1/0,g.sortObjects)}ql(A,F,0,g.sortObjects),S.finish(),g.sortObjects===!0&&S.sort(N,Q),Qe=$.enabled===!1||$.isPresenting===!1||$.hasDepthSensing()===!1,Qe&&Se.addToRenderList(S,A),this.info.render.frame++,q===!0&&ie.beginShadows();const V=m.state.shadowsArray;he.render(V,A,F),q===!0&&ie.endShadows(),this.info.autoReset===!0&&this.info.reset();const G=S.opaque,k=S.transmissive;if(m.setupLights(),F.isArrayCamera){const ae=F.cameras;if(k.length>0)for(let me=0,ye=ae.length;me<ye;me++){const Me=ae[me];uh(G,k,A,Me)}Qe&&Se.render(A);for(let me=0,ye=ae.length;me<ye;me++){const Me=ae[me];ch(S,A,Me,Me.viewport)}}else k.length>0&&uh(G,k,A,F),Qe&&Se.render(A),ch(S,A,F);T!==null&&(C.updateMultisampleRenderTarget(T),C.updateRenderTargetMipmap(T)),A.isScene===!0&&A.onAfterRender(g,A,F),be.resetDefaultState(),R=-1,L=null,v.pop(),v.length>0?(m=v[v.length-1],q===!0&&ie.setGlobalState(g.clippingPlanes,m.state.camera)):m=null,u.pop(),u.length>0?S=u[u.length-1]:S=null};function ql(A,F,V,G){if(A.visible===!1)return;if(A.layers.test(F.layers)){if(A.isGroup)V=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(F);else if(A.isLight)m.pushLight(A),A.castShadow&&m.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||ze.intersectsSprite(A)){G&&Re.setFromMatrixPosition(A.matrixWorld).applyMatrix4(ue);const me=Z.update(A),ye=A.material;ye.visible&&S.push(A,me,ye,V,Re.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||ze.intersectsObject(A))){const me=Z.update(A),ye=A.material;if(G&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Re.copy(A.boundingSphere.center)):(me.boundingSphere===null&&me.computeBoundingSphere(),Re.copy(me.boundingSphere.center)),Re.applyMatrix4(A.matrixWorld).applyMatrix4(ue)),Array.isArray(ye)){const Me=me.groups;for(let Ne=0,De=Me.length;Ne<De;Ne++){const Ee=Me[Ne],it=ye[Ee.materialIndex];it&&it.visible&&S.push(A,me,it,V,Re.z,Ee)}}else ye.visible&&S.push(A,me,ye,V,Re.z,null)}}const ae=A.children;for(let me=0,ye=ae.length;me<ye;me++)ql(ae[me],F,V,G)}function ch(A,F,V,G){const k=A.opaque,ae=A.transmissive,me=A.transparent;m.setupLightsView(V),q===!0&&ie.setGlobalState(g.clippingPlanes,V),G&&Pe.viewport(x.copy(G)),k.length>0&&Xo(k,F,V),ae.length>0&&Xo(ae,F,V),me.length>0&&Xo(me,F,V),Pe.buffers.depth.setTest(!0),Pe.buffers.depth.setMask(!0),Pe.buffers.color.setMask(!0),Pe.setPolygonOffset(!1)}function uh(A,F,V,G){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[G.id]===void 0&&(m.state.transmissionRenderTarget[G.id]=new br(1,1,{generateMipmaps:!0,type:He.has("EXT_color_buffer_half_float")||He.has("EXT_color_buffer_float")?Go:xi,minFilter:vr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:tt.workingColorSpace}));const ae=m.state.transmissionRenderTarget[G.id],me=G.viewport||x;ae.setSize(me.z,me.w);const ye=g.getRenderTarget();g.setRenderTarget(ae),g.getClearColor(B),O=g.getClearAlpha(),O<1&&g.setClearColor(16777215,.5),g.clear(),Qe&&Se.render(V);const Me=g.toneMapping;g.toneMapping=Wi;const Ne=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),m.setupLightsView(G),q===!0&&ie.setGlobalState(g.clippingPlanes,G),Xo(A,V,G),C.updateMultisampleRenderTarget(ae),C.updateRenderTargetMipmap(ae),He.has("WEBGL_multisampled_render_to_texture")===!1){let De=!1;for(let Ee=0,it=F.length;Ee<it;Ee++){const ot=F[Ee],pt=ot.object,ln=ot.geometry,Je=ot.material,Te=ot.group;if(Je.side===li&&pt.layers.test(G.layers)){const Dt=Je.side;Je.side=on,Je.needsUpdate=!0,dh(pt,V,G,ln,Je,Te),Je.side=Dt,Je.needsUpdate=!0,De=!0}}De===!0&&(C.updateMultisampleRenderTarget(ae),C.updateRenderTargetMipmap(ae))}g.setRenderTarget(ye),g.setClearColor(B,O),Ne!==void 0&&(G.viewport=Ne),g.toneMapping=Me}function Xo(A,F,V){const G=F.isScene===!0?F.overrideMaterial:null;for(let k=0,ae=A.length;k<ae;k++){const me=A[k],ye=me.object,Me=me.geometry,Ne=G===null?me.material:G,De=me.group;ye.layers.test(V.layers)&&dh(ye,F,V,Me,Ne,De)}}function dh(A,F,V,G,k,ae){A.onBeforeRender(g,F,V,G,k,ae),A.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),k.onBeforeRender(g,F,V,G,A,ae),k.transparent===!0&&k.side===li&&k.forceSinglePass===!1?(k.side=on,k.needsUpdate=!0,g.renderBufferDirect(V,F,G,k,A,ae),k.side=Yi,k.needsUpdate=!0,g.renderBufferDirect(V,F,G,k,A,ae),k.side=li):g.renderBufferDirect(V,F,G,k,A,ae),A.onAfterRender(g,F,V,G,k,ae)}function $o(A,F,V){F.isScene!==!0&&(F=Ge);const G=Le.get(A),k=m.state.lights,ae=m.state.shadowsArray,me=k.state.version,ye=W.getParameters(A,k.state,ae,F,V),Me=W.getProgramCacheKey(ye);let Ne=G.programs;G.environment=A.isMeshStandardMaterial?F.environment:null,G.fog=F.fog,G.envMap=(A.isMeshStandardMaterial?H:w).get(A.envMap||G.environment),G.envMapRotation=G.environment!==null&&A.envMap===null?F.environmentRotation:A.envMapRotation,Ne===void 0&&(A.addEventListener("dispose",Ye),Ne=new Map,G.programs=Ne);let De=Ne.get(Me);if(De!==void 0){if(G.currentProgram===De&&G.lightsStateVersion===me)return hh(A,ye),De}else ye.uniforms=W.getUniforms(A),A.onBeforeCompile(ye,g),De=W.acquireProgram(ye,Me),Ne.set(Me,De),G.uniforms=ye.uniforms;const Ee=G.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Ee.clippingPlanes=ie.uniform),hh(A,ye),G.needsLights=Uv(A),G.lightsStateVersion=me,G.needsLights&&(Ee.ambientLightColor.value=k.state.ambient,Ee.lightProbe.value=k.state.probe,Ee.directionalLights.value=k.state.directional,Ee.directionalLightShadows.value=k.state.directionalShadow,Ee.spotLights.value=k.state.spot,Ee.spotLightShadows.value=k.state.spotShadow,Ee.rectAreaLights.value=k.state.rectArea,Ee.ltc_1.value=k.state.rectAreaLTC1,Ee.ltc_2.value=k.state.rectAreaLTC2,Ee.pointLights.value=k.state.point,Ee.pointLightShadows.value=k.state.pointShadow,Ee.hemisphereLights.value=k.state.hemi,Ee.directionalShadowMap.value=k.state.directionalShadowMap,Ee.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Ee.spotShadowMap.value=k.state.spotShadowMap,Ee.spotLightMatrix.value=k.state.spotLightMatrix,Ee.spotLightMap.value=k.state.spotLightMap,Ee.pointShadowMap.value=k.state.pointShadowMap,Ee.pointShadowMatrix.value=k.state.pointShadowMatrix),G.currentProgram=De,G.uniformsList=null,De}function fh(A){if(A.uniformsList===null){const F=A.currentProgram.getUniforms();A.uniformsList=Za.seqWithValue(F.seq,A.uniforms)}return A.uniformsList}function hh(A,F){const V=Le.get(A);V.outputColorSpace=F.outputColorSpace,V.batching=F.batching,V.batchingColor=F.batchingColor,V.instancing=F.instancing,V.instancingColor=F.instancingColor,V.instancingMorph=F.instancingMorph,V.skinning=F.skinning,V.morphTargets=F.morphTargets,V.morphNormals=F.morphNormals,V.morphColors=F.morphColors,V.morphTargetsCount=F.morphTargetsCount,V.numClippingPlanes=F.numClippingPlanes,V.numIntersection=F.numClipIntersection,V.vertexAlphas=F.vertexAlphas,V.vertexTangents=F.vertexTangents,V.toneMapping=F.toneMapping}function Dv(A,F,V,G,k){F.isScene!==!0&&(F=Ge),C.resetTextureUnits();const ae=F.fog,me=G.isMeshStandardMaterial?F.environment:null,ye=T===null?g.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:Ji,Me=(G.isMeshStandardMaterial?H:w).get(G.envMap||me),Ne=G.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,De=!!V.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Ee=!!V.morphAttributes.position,it=!!V.morphAttributes.normal,ot=!!V.morphAttributes.color;let pt=Wi;G.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(pt=g.toneMapping);const ln=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,Je=ln!==void 0?ln.length:0,Te=Le.get(G),Dt=m.state.lights;if(q===!0&&(re===!0||A!==L)){const _n=A===L&&G.id===R;ie.setState(G,A,_n)}let et=!1;G.version===Te.__version?(Te.needsLights&&Te.lightsStateVersion!==Dt.state.version||Te.outputColorSpace!==ye||k.isBatchedMesh&&Te.batching===!1||!k.isBatchedMesh&&Te.batching===!0||k.isBatchedMesh&&Te.batchingColor===!0&&k.colorTexture===null||k.isBatchedMesh&&Te.batchingColor===!1&&k.colorTexture!==null||k.isInstancedMesh&&Te.instancing===!1||!k.isInstancedMesh&&Te.instancing===!0||k.isSkinnedMesh&&Te.skinning===!1||!k.isSkinnedMesh&&Te.skinning===!0||k.isInstancedMesh&&Te.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&Te.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&Te.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&Te.instancingMorph===!1&&k.morphTexture!==null||Te.envMap!==Me||G.fog===!0&&Te.fog!==ae||Te.numClippingPlanes!==void 0&&(Te.numClippingPlanes!==ie.numPlanes||Te.numIntersection!==ie.numIntersection)||Te.vertexAlphas!==Ne||Te.vertexTangents!==De||Te.morphTargets!==Ee||Te.morphNormals!==it||Te.morphColors!==ot||Te.toneMapping!==pt||Te.morphTargetsCount!==Je)&&(et=!0):(et=!0,Te.__version=G.version);let Rn=Te.currentProgram;et===!0&&(Rn=$o(G,F,k));let Nr=!1,cn=!1,Kl=!1;const xt=Rn.getUniforms(),yi=Te.uniforms;if(Pe.useProgram(Rn.program)&&(Nr=!0,cn=!0,Kl=!0),G.id!==R&&(R=G.id,cn=!0),Nr||L!==A){We.reverseDepthBuffer?(fe.copy(A.projectionMatrix),R1(fe),P1(fe),xt.setValue(D,"projectionMatrix",fe)):xt.setValue(D,"projectionMatrix",A.projectionMatrix),xt.setValue(D,"viewMatrix",A.matrixWorldInverse);const _n=xt.map.cameraPosition;_n!==void 0&&_n.setValue(D,Ie.setFromMatrixPosition(A.matrixWorld)),We.logarithmicDepthBuffer&&xt.setValue(D,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&xt.setValue(D,"isOrthographic",A.isOrthographicCamera===!0),L!==A&&(L=A,cn=!0,Kl=!0)}if(k.isSkinnedMesh){xt.setOptional(D,k,"bindMatrix"),xt.setOptional(D,k,"bindMatrixInverse");const _n=k.skeleton;_n&&(_n.boneTexture===null&&_n.computeBoneTexture(),xt.setValue(D,"boneTexture",_n.boneTexture,C))}k.isBatchedMesh&&(xt.setOptional(D,k,"batchingTexture"),xt.setValue(D,"batchingTexture",k._matricesTexture,C),xt.setOptional(D,k,"batchingIdTexture"),xt.setValue(D,"batchingIdTexture",k._indirectTexture,C),xt.setOptional(D,k,"batchingColorTexture"),k._colorsTexture!==null&&xt.setValue(D,"batchingColorTexture",k._colorsTexture,C));const Zl=V.morphAttributes;if((Zl.position!==void 0||Zl.normal!==void 0||Zl.color!==void 0)&&Ce.update(k,V,Rn),(cn||Te.receiveShadow!==k.receiveShadow)&&(Te.receiveShadow=k.receiveShadow,xt.setValue(D,"receiveShadow",k.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(yi.envMap.value=Me,yi.flipEnvMap.value=Me.isCubeTexture&&Me.isRenderTargetTexture===!1?-1:1),G.isMeshStandardMaterial&&G.envMap===null&&F.environment!==null&&(yi.envMapIntensity.value=F.environmentIntensity),cn&&(xt.setValue(D,"toneMappingExposure",g.toneMappingExposure),Te.needsLights&&Iv(yi,Kl),ae&&G.fog===!0&&K.refreshFogUniforms(yi,ae),K.refreshMaterialUniforms(yi,G,Y,j,m.state.transmissionRenderTarget[A.id]),Za.upload(D,fh(Te),yi,C)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(Za.upload(D,fh(Te),yi,C),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&xt.setValue(D,"center",k.center),xt.setValue(D,"modelViewMatrix",k.modelViewMatrix),xt.setValue(D,"normalMatrix",k.normalMatrix),xt.setValue(D,"modelMatrix",k.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const _n=G.uniformsGroups;for(let Ql=0,Fv=_n.length;Ql<Fv;Ql++){const ph=_n[Ql];I.update(ph,Rn),I.bind(ph,Rn)}}return Rn}function Iv(A,F){A.ambientLightColor.needsUpdate=F,A.lightProbe.needsUpdate=F,A.directionalLights.needsUpdate=F,A.directionalLightShadows.needsUpdate=F,A.pointLights.needsUpdate=F,A.pointLightShadows.needsUpdate=F,A.spotLights.needsUpdate=F,A.spotLightShadows.needsUpdate=F,A.rectAreaLights.needsUpdate=F,A.hemisphereLights.needsUpdate=F}function Uv(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(A,F,V){Le.get(A.texture).__webglTexture=F,Le.get(A.depthTexture).__webglTexture=V;const G=Le.get(A);G.__hasExternalTextures=!0,G.__autoAllocateDepthBuffer=V===void 0,G.__autoAllocateDepthBuffer||He.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,F){const V=Le.get(A);V.__webglFramebuffer=F,V.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(A,F=0,V=0){T=A,P=F,b=V;let G=!0,k=null,ae=!1,me=!1;if(A){const Me=Le.get(A);if(Me.__useDefaultFramebuffer!==void 0)Pe.bindFramebuffer(D.FRAMEBUFFER,null),G=!1;else if(Me.__webglFramebuffer===void 0)C.setupRenderTarget(A);else if(Me.__hasExternalTextures)C.rebindTextures(A,Le.get(A.texture).__webglTexture,Le.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Ee=A.depthTexture;if(Me.__boundDepthTexture!==Ee){if(Ee!==null&&Le.has(Ee)&&(A.width!==Ee.image.width||A.height!==Ee.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");C.setupDepthRenderbuffer(A)}}const Ne=A.texture;(Ne.isData3DTexture||Ne.isDataArrayTexture||Ne.isCompressedArrayTexture)&&(me=!0);const De=Le.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(De[F])?k=De[F][V]:k=De[F],ae=!0):A.samples>0&&C.useMultisampledRTT(A)===!1?k=Le.get(A).__webglMultisampledFramebuffer:Array.isArray(De)?k=De[V]:k=De,x.copy(A.viewport),E.copy(A.scissor),U=A.scissorTest}else x.copy(ee).multiplyScalar(Y).floor(),E.copy(le).multiplyScalar(Y).floor(),U=we;if(Pe.bindFramebuffer(D.FRAMEBUFFER,k)&&G&&Pe.drawBuffers(A,k),Pe.viewport(x),Pe.scissor(E),Pe.setScissorTest(U),ae){const Me=Le.get(A.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+F,Me.__webglTexture,V)}else if(me){const Me=Le.get(A.texture),Ne=F||0;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,Me.__webglTexture,V||0,Ne)}R=-1},this.readRenderTargetPixels=function(A,F,V,G,k,ae,me){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ye=Le.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&me!==void 0&&(ye=ye[me]),ye){Pe.bindFramebuffer(D.FRAMEBUFFER,ye);try{const Me=A.texture,Ne=Me.format,De=Me.type;if(!We.textureFormatReadable(Ne)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!We.textureTypeReadable(De)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=A.width-G&&V>=0&&V<=A.height-k&&D.readPixels(F,V,G,k,Ue.convert(Ne),Ue.convert(De),ae)}finally{const Me=T!==null?Le.get(T).__webglFramebuffer:null;Pe.bindFramebuffer(D.FRAMEBUFFER,Me)}}},this.readRenderTargetPixelsAsync=async function(A,F,V,G,k,ae,me){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ye=Le.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&me!==void 0&&(ye=ye[me]),ye){const Me=A.texture,Ne=Me.format,De=Me.type;if(!We.textureFormatReadable(Ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!We.textureTypeReadable(De))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(F>=0&&F<=A.width-G&&V>=0&&V<=A.height-k){Pe.bindFramebuffer(D.FRAMEBUFFER,ye);const Ee=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Ee),D.bufferData(D.PIXEL_PACK_BUFFER,ae.byteLength,D.STREAM_READ),D.readPixels(F,V,G,k,Ue.convert(Ne),Ue.convert(De),0);const it=T!==null?Le.get(T).__webglFramebuffer:null;Pe.bindFramebuffer(D.FRAMEBUFFER,it);const ot=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await C1(D,ot,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,Ee),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,ae),D.deleteBuffer(Ee),D.deleteSync(ot),ae}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(A,F=null,V=0){A.isTexture!==!0&&(Ka("WebGLRenderer: copyFramebufferToTexture function signature has changed."),F=arguments[0]||null,A=arguments[1]);const G=Math.pow(2,-V),k=Math.floor(A.image.width*G),ae=Math.floor(A.image.height*G),me=F!==null?F.x:0,ye=F!==null?F.y:0;C.setTexture2D(A,0),D.copyTexSubImage2D(D.TEXTURE_2D,V,0,0,me,ye,k,ae),Pe.unbindTexture()},this.copyTextureToTexture=function(A,F,V=null,G=null,k=0){A.isTexture!==!0&&(Ka("WebGLRenderer: copyTextureToTexture function signature has changed."),G=arguments[0]||null,A=arguments[1],F=arguments[2],k=arguments[3]||0,V=null);let ae,me,ye,Me,Ne,De;V!==null?(ae=V.max.x-V.min.x,me=V.max.y-V.min.y,ye=V.min.x,Me=V.min.y):(ae=A.image.width,me=A.image.height,ye=0,Me=0),G!==null?(Ne=G.x,De=G.y):(Ne=0,De=0);const Ee=Ue.convert(F.format),it=Ue.convert(F.type);C.setTexture2D(F,0),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,F.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,F.unpackAlignment);const ot=D.getParameter(D.UNPACK_ROW_LENGTH),pt=D.getParameter(D.UNPACK_IMAGE_HEIGHT),ln=D.getParameter(D.UNPACK_SKIP_PIXELS),Je=D.getParameter(D.UNPACK_SKIP_ROWS),Te=D.getParameter(D.UNPACK_SKIP_IMAGES),Dt=A.isCompressedTexture?A.mipmaps[k]:A.image;D.pixelStorei(D.UNPACK_ROW_LENGTH,Dt.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Dt.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,ye),D.pixelStorei(D.UNPACK_SKIP_ROWS,Me),A.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,k,Ne,De,ae,me,Ee,it,Dt.data):A.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,k,Ne,De,Dt.width,Dt.height,Ee,Dt.data):D.texSubImage2D(D.TEXTURE_2D,k,Ne,De,ae,me,Ee,it,Dt),D.pixelStorei(D.UNPACK_ROW_LENGTH,ot),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,pt),D.pixelStorei(D.UNPACK_SKIP_PIXELS,ln),D.pixelStorei(D.UNPACK_SKIP_ROWS,Je),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Te),k===0&&F.generateMipmaps&&D.generateMipmap(D.TEXTURE_2D),Pe.unbindTexture()},this.copyTextureToTexture3D=function(A,F,V=null,G=null,k=0){A.isTexture!==!0&&(Ka("WebGLRenderer: copyTextureToTexture3D function signature has changed."),V=arguments[0]||null,G=arguments[1]||null,A=arguments[2],F=arguments[3],k=arguments[4]||0);let ae,me,ye,Me,Ne,De,Ee,it,ot;const pt=A.isCompressedTexture?A.mipmaps[k]:A.image;V!==null?(ae=V.max.x-V.min.x,me=V.max.y-V.min.y,ye=V.max.z-V.min.z,Me=V.min.x,Ne=V.min.y,De=V.min.z):(ae=pt.width,me=pt.height,ye=pt.depth,Me=0,Ne=0,De=0),G!==null?(Ee=G.x,it=G.y,ot=G.z):(Ee=0,it=0,ot=0);const ln=Ue.convert(F.format),Je=Ue.convert(F.type);let Te;if(F.isData3DTexture)C.setTexture3D(F,0),Te=D.TEXTURE_3D;else if(F.isDataArrayTexture||F.isCompressedArrayTexture)C.setTexture2DArray(F,0),Te=D.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,F.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,F.unpackAlignment);const Dt=D.getParameter(D.UNPACK_ROW_LENGTH),et=D.getParameter(D.UNPACK_IMAGE_HEIGHT),Rn=D.getParameter(D.UNPACK_SKIP_PIXELS),Nr=D.getParameter(D.UNPACK_SKIP_ROWS),cn=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,pt.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,pt.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Me),D.pixelStorei(D.UNPACK_SKIP_ROWS,Ne),D.pixelStorei(D.UNPACK_SKIP_IMAGES,De),A.isDataTexture||A.isData3DTexture?D.texSubImage3D(Te,k,Ee,it,ot,ae,me,ye,ln,Je,pt.data):F.isCompressedArrayTexture?D.compressedTexSubImage3D(Te,k,Ee,it,ot,ae,me,ye,ln,pt.data):D.texSubImage3D(Te,k,Ee,it,ot,ae,me,ye,ln,Je,pt),D.pixelStorei(D.UNPACK_ROW_LENGTH,Dt),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,et),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Rn),D.pixelStorei(D.UNPACK_SKIP_ROWS,Nr),D.pixelStorei(D.UNPACK_SKIP_IMAGES,cn),k===0&&F.generateMipmaps&&D.generateMipmap(Te),Pe.unbindTexture()},this.initRenderTarget=function(A){Le.get(A).__webglFramebuffer===void 0&&C.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?C.setTextureCube(A,0):A.isData3DTexture?C.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?C.setTexture2DArray(A,0):C.setTexture2D(A,0),Pe.unbindTexture()},this.resetState=function(){P=0,b=0,T=null,Pe.reset(),be.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return fi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===Yf?"display-p3":"srgb",n.unpackColorSpace=tt.workingColorSpace===$l?"display-p3":"srgb"}}class bv extends Lt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Qn,this.environmentIntensity=1,this.environmentRotation=new Qn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class Uo extends Gn{constructor(e=1,n=1,i=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const f=[],h=[],d=[],p=[];let y=0;const S=[],m=i/2;let u=0;v(),o===!1&&(e>0&&g(!0),n>0&&g(!1)),this.setIndex(f),this.setAttribute("position",new At(h,3)),this.setAttribute("normal",new At(d,3)),this.setAttribute("uv",new At(p,2));function v(){const M=new z,P=new z;let b=0;const T=(n-e)/i;for(let R=0;R<=s;R++){const L=[],x=R/s,E=x*(n-e)+e;for(let U=0;U<=r;U++){const B=U/r,O=B*l+a,X=Math.sin(O),j=Math.cos(O);P.x=E*X,P.y=-x*i+m,P.z=E*j,h.push(P.x,P.y,P.z),M.set(X,T,j).normalize(),d.push(M.x,M.y,M.z),p.push(B,1-x),L.push(y++)}S.push(L)}for(let R=0;R<r;R++)for(let L=0;L<s;L++){const x=S[L][R],E=S[L+1][R],U=S[L+1][R+1],B=S[L][R+1];e>0&&(f.push(x,E,B),b+=3),n>0&&(f.push(E,U,B),b+=3)}c.addGroup(u,b,0),u+=b}function g(M){const P=y,b=new $e,T=new z;let R=0;const L=M===!0?e:n,x=M===!0?1:-1;for(let U=1;U<=r;U++)h.push(0,m*x,0),d.push(0,x,0),p.push(.5,.5),y++;const E=y;for(let U=0;U<=r;U++){const O=U/r*l+a,X=Math.cos(O),j=Math.sin(O);T.x=L*j,T.y=m*x,T.z=L*X,h.push(T.x,T.y,T.z),d.push(0,x,0),b.x=X*.5+.5,b.y=j*.5*x+.5,p.push(b.x,b.y),y++}for(let U=0;U<r;U++){const B=P+U,O=E+U;M===!0?f.push(O,O+1,B):f.push(O+1,O,B),R+=3}c.addGroup(u,R,M===!0?1:2),u+=R}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Uo(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class eh extends Gn{constructor(e=[],n=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:n,radius:i,detail:r};const s=[],o=[];a(r),c(i),f(),this.setAttribute("position",new At(s,3)),this.setAttribute("normal",new At(s.slice(),3)),this.setAttribute("uv",new At(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(v){const g=new z,M=new z,P=new z;for(let b=0;b<n.length;b+=3)p(n[b+0],g),p(n[b+1],M),p(n[b+2],P),l(g,M,P,v)}function l(v,g,M,P){const b=P+1,T=[];for(let R=0;R<=b;R++){T[R]=[];const L=v.clone().lerp(M,R/b),x=g.clone().lerp(M,R/b),E=b-R;for(let U=0;U<=E;U++)U===0&&R===b?T[R][U]=L:T[R][U]=L.clone().lerp(x,U/E)}for(let R=0;R<b;R++)for(let L=0;L<2*(b-R)-1;L++){const x=Math.floor(L/2);L%2===0?(d(T[R][x+1]),d(T[R+1][x]),d(T[R][x])):(d(T[R][x+1]),d(T[R+1][x+1]),d(T[R+1][x]))}}function c(v){const g=new z;for(let M=0;M<s.length;M+=3)g.x=s[M+0],g.y=s[M+1],g.z=s[M+2],g.normalize().multiplyScalar(v),s[M+0]=g.x,s[M+1]=g.y,s[M+2]=g.z}function f(){const v=new z;for(let g=0;g<s.length;g+=3){v.x=s[g+0],v.y=s[g+1],v.z=s[g+2];const M=m(v)/2/Math.PI+.5,P=u(v)/Math.PI+.5;o.push(M,1-P)}y(),h()}function h(){for(let v=0;v<o.length;v+=6){const g=o[v+0],M=o[v+2],P=o[v+4],b=Math.max(g,M,P),T=Math.min(g,M,P);b>.9&&T<.1&&(g<.2&&(o[v+0]+=1),M<.2&&(o[v+2]+=1),P<.2&&(o[v+4]+=1))}}function d(v){s.push(v.x,v.y,v.z)}function p(v,g){const M=v*3;g.x=e[M+0],g.y=e[M+1],g.z=e[M+2]}function y(){const v=new z,g=new z,M=new z,P=new z,b=new $e,T=new $e,R=new $e;for(let L=0,x=0;L<s.length;L+=9,x+=6){v.set(s[L+0],s[L+1],s[L+2]),g.set(s[L+3],s[L+4],s[L+5]),M.set(s[L+6],s[L+7],s[L+8]),b.set(o[x+0],o[x+1]),T.set(o[x+2],o[x+3]),R.set(o[x+4],o[x+5]),P.copy(v).add(g).add(M).divideScalar(3);const E=m(P);S(b,x+0,v,E),S(T,x+2,g,E),S(R,x+4,M,E)}}function S(v,g,M,P){P<0&&v.x===1&&(o[g]=v.x-1),M.x===0&&M.z===0&&(o[g]=P/2/Math.PI+.5)}function m(v){return Math.atan2(v.z,-v.x)}function u(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new eh(e.vertices,e.indices,e.radius,e.details)}}class th extends eh{constructor(e=1,n=0){const i=(1+Math.sqrt(5))/2,r=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,n),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new th(e.radius,e.detail)}}class Fo extends Gn{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const f=[],h=new z,d=new z,p=[],y=[],S=[],m=[];for(let u=0;u<=i;u++){const v=[],g=u/i;let M=0;u===0&&o===0?M=.5/n:u===i&&l===Math.PI&&(M=-.5/n);for(let P=0;P<=n;P++){const b=P/n;h.x=-e*Math.cos(r+b*s)*Math.sin(o+g*a),h.y=e*Math.cos(o+g*a),h.z=e*Math.sin(r+b*s)*Math.sin(o+g*a),y.push(h.x,h.y,h.z),d.copy(h).normalize(),S.push(d.x,d.y,d.z),m.push(b+M,1-g),v.push(c++)}f.push(v)}for(let u=0;u<i;u++)for(let v=0;v<n;v++){const g=f[u][v+1],M=f[u][v],P=f[u+1][v],b=f[u+1][v+1];(u!==0||o>0)&&p.push(g,M,b),(u!==i-1||l<Math.PI)&&p.push(M,P,b)}this.setIndex(p),this.setAttribute("position",new At(y,3)),this.setAttribute("normal",new At(S,3)),this.setAttribute("uv",new At(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Fo(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class nh extends Gn{constructor(e=1,n=.4,i=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:n,radialSegments:i,tubularSegments:r,arc:s},i=Math.floor(i),r=Math.floor(r);const o=[],a=[],l=[],c=[],f=new z,h=new z,d=new z;for(let p=0;p<=i;p++)for(let y=0;y<=r;y++){const S=y/r*s,m=p/i*Math.PI*2;h.x=(e+n*Math.cos(m))*Math.cos(S),h.y=(e+n*Math.cos(m))*Math.sin(S),h.z=n*Math.sin(m),a.push(h.x,h.y,h.z),f.x=e*Math.cos(S),f.y=e*Math.sin(S),d.subVectors(h,f).normalize(),l.push(d.x,d.y,d.z),c.push(y/r),c.push(p/i)}for(let p=1;p<=i;p++)for(let y=1;y<=r;y++){const S=(r+1)*p+y-1,m=(r+1)*(p-1)+y-1,u=(r+1)*(p-1)+y,v=(r+1)*p+y;o.push(S,m,v),o.push(m,u,v)}this.setIndex(o),this.setAttribute("position",new At(a,3)),this.setAttribute("normal",new At(l,3)),this.setAttribute("uv",new At(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new nh(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Mm extends Fs{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new qe(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}}class Qa extends Fs{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new qe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new qe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=av,this.normalScale=new $e(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Cv extends Lt{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new qe(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}class Rv extends Cv{constructor(e,n,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Lt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new qe(n)}copy(e,n){return super.copy(e,n),this.groundColor.copy(e.groundColor),this}}const iu=new vt,Em=new z,wm=new z;class H2{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new $e(512,512),this.map=null,this.mapPass=null,this.matrix=new vt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Zf,this._frameExtents=new $e(1,1),this._viewportCount=1,this._viewports=[new gt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;Em.setFromMatrixPosition(e.matrixWorld),n.position.copy(Em),wm.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(wm),n.updateMatrixWorld(),iu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(iu),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(iu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class V2 extends H2{constructor(){super(new Qf(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Cl extends Cv{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Lt.DEFAULT_UP),this.updateMatrix(),this.target=new Lt,this.shadow=new V2}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Pv{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Tm(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=Tm();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}function Tm(){return performance.now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:zf}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=zf);class G2{constructor(e,n){Fe(this,"renderer");Fe(this,"scene");Fe(this,"camera");Fe(this,"factory");Fe(this,"plumes",[]);Fe(this,"leds",[]);Fe(this,"clock",new Pv);Fe(this,"frameId",0);Fe(this,"ro");Fe(this,"reducedMotion",!1);Fe(this,"disposables",[]);Fe(this,"M");Fe(this,"animate",()=>{this.frameId=requestAnimationFrame(this.animate);const e=Math.min(this.clock.getDelta(),.05);this.reducedMotion||(this.factory.rotation.y+=e*.18),this.tickPlumes(e);const n=(1-Math.cos(this.clock.elapsedTime*Math.PI*2))/2;for(const i of this.leds)i.emissiveIntensity=n*2.6;this.renderer.render(this.scene,this.camera)});this.canvas=e,this.host=n}start(){this.reducedMotion=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion: reduce)").matches,this.initThree(),this.buildPalette(),this.buildScene(),this.onResize(),this.ro=new ResizeObserver(()=>this.onResize()),this.ro.observe(this.host),this.animate()}dispose(){var e,n;cancelAnimationFrame(this.frameId),(e=this.ro)==null||e.disconnect(),this.disposables.forEach(i=>i.dispose()),(n=this.renderer)==null||n.dispose()}initThree(){this.renderer=new Av({canvas:this.canvas,antialias:!0,alpha:!0,powerPreference:"high-performance"}),this.renderer.setClearColor(0,0),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Bf,this.renderer.toneMapping=Hf,this.renderer.toneMappingExposure=1.05,this.scene=new bv,this.camera=new En(36,1,.1,200),this.camera.position.set(0,6.6,27),this.camera.lookAt(0,4.2,0)}buildPalette(){const e=(n,i,r,s={})=>this.track(new Qa({color:n,metalness:i,roughness:r,...s}));this.M={concrete:e(13225169,.04,.92),concreteDark:e(10133672,.05,.9),painted:e(9081499,.55,.42),paintedLight:e(11186877,.5,.45),darkSteel:e(5988971,.6,.5),stainless:e(11584720,.85,.18),copper:e(12088115,.9,.32),glass:e(8361650,.55,.18,{emissive:2372684,emissiveIntensity:.3}),red:e(12470844,.3,.55),accent:e(4020976,.35,.4,{emissive:1450063,emissiveIntensity:.35}),grass:e(6192468,0,.95),water:e(4157352,.2,.18),ground:e(9937064,.05,.85),rim:e(13686494,.1,.7)}}buildScene(){this.scene.add(new Rv(16777215,12896979,.95));const e=new Cl(16777215,2.3);e.position.set(-9,17,13),e.target.position.set(0,4,0),e.castShadow=!0,e.shadow.mapSize.set(2048,2048),e.shadow.bias=-4e-4,e.shadow.normalBias=.02;const n=e.shadow.camera;n.left=-26,n.right=26,n.top=26,n.bottom=-26,n.near=.5,n.far=90,n.updateProjectionMatrix(),this.scene.add(e),this.scene.add(e.target);const i=new Cl(14673650,.55);i.position.set(13,9,8),this.scene.add(i);const r=new Mt(this.track(new Ps(70,38)),this.track(new Mm({opacity:.3})));r.position.set(0,9,-7),r.receiveShadow=!0,this.scene.add(r);const s=new Mt(this.track(new Ps(80,80)),this.track(new Mm({opacity:.22})));s.rotation.x=-Math.PI/2,s.position.y=-.62,s.receiveShadow=!0,this.scene.add(s),this.factory=new Ht,this.scene.add(this.factory),this.buildPedestal(),this.buildSiteGround(),this.buildBoilerHouse(),this.buildPowerhouse(),this.buildChimneys(),this.buildCoolingTowers(),this.buildTanks(),this.buildSwitchyard(),this.buildCameraRig()}buildPedestal(){const e=this.cyl(11.5,11.5,.34,this.M.rim,0,-.2,0,this.factory,64);e.receiveShadow=!0;const n=this.cyl(10.9,11.1,.22,this.M.ground,0,-.02,0,this.factory,64);n.receiveShadow=!0}buildSiteGround(){this.box(6.5,.06,3.2,this.M.grass,-3.2,.12,3.4,this.factory),this.box(3.4,.06,2.2,this.M.grass,5.6,.12,2.6,this.factory),this.box(3,.05,1.8,this.M.water,-6.5,.11,3.8,this.factory),this.box(15,.05,.9,this.M.concreteDark,0,.11,4.6,this.factory)}buildBoilerHouse(){const e=new Ht;e.position.set(-1.5,0,-1.6),this.factory.add(e),this.box(11,3.4,3.4,this.M.painted,0,1.7,0,e),this.box(11.04,.34,3.44,this.M.accent,0,.5,0,e),this.box(10.2,.5,.06,this.M.glass,0,2.35,1.72,e),this.box(10.2,.45,.06,this.M.glass,0,1.5,1.72,e),this.box(11.5,.3,3.9,this.M.darkSteel,0,3.55,0,e),this.box(8.2,.8,1.5,this.M.paintedLight,0,4.05,0,e),this.box(8.4,.18,1.7,this.M.darkSteel,0,4.5,0,e);for(let n=-1;n<=1;n++)this.cyl(.26,.26,.7,this.M.stainless,n*3.2,3.95,1.1,e)}buildPowerhouse(){const e=new Ht;e.position.set(-2.2,0,1.5),this.factory.add(e),this.box(8.6,2.2,2,this.M.paintedLight,0,1.1,0,e),this.box(8.64,.28,2.04,this.M.accent,0,.42,0,e),this.box(8,.24,2.3,this.M.darkSteel,0,2.25,0,e),this.box(7.6,.45,.06,this.M.glass,0,1.45,1.02,e);const n=i=>{const r=this.cyl(.16,.16,6.2,this.M.copper,1,2.7,i,this.factory,16);r.rotation.z=Math.PI/2};n(.4),n(0)}buildChimneys(){const e=n=>{const i=new Ht;i.position.set(n,0,-2.6),this.factory.add(i),this.cyl(.95,1.05,.5,this.M.concreteDark,0,.25,0,i,24),this.cyl(.5,.66,11,this.M.concrete,0,5.6,0,i,28),this.cyl(.53,.53,.45,this.M.red,0,10,0,i,28),this.cyl(.53,.53,.45,this.M.rim,0,9.3,0,i,28),this.cyl(.53,.53,.45,this.M.red,0,8.6,0,i,28);const r=new Mt(this.track(new nh(.52,.07,10,28)),this.M.darkSteel);r.rotation.x=Math.PI/2,r.position.y=11.05,r.castShadow=!0,i.add(r),this.addPlume(i,0,11.2,0,{count:6,rate:.16,rise:5.5,spread:.34,from:.5,to:2.2,opacity:.5,drift:.6,warm:!0})};e(2.7),e(4.5)}buildCoolingTowers(){const e=(n,i)=>{const r=new Ht;r.position.set(n,0,i),this.factory.add(r),this.cyl(1.55,1.75,.3,this.M.concreteDark,0,.15,0,r,32),this.cyl(1.28,1.7,4.2,this.M.concrete,0,2.3,0,r,32),this.cyl(1.4,1.28,.35,this.M.concreteDark,0,4.4,0,r,32),this.addPlume(r,0,4.5,0,{count:7,rate:.13,rise:4.6,spread:.9,from:1.1,to:3,opacity:.55,drift:.5,warm:!1})};e(-6.6,2.2),e(-8.2,-.6)}buildTanks(){const e=n=>{const i=new Ht;i.position.set(n,0,2.4),this.factory.add(i),this.cyl(.72,.72,2.4,this.M.stainless,0,1.2,0,i,24);const r=this.sphere(.72,this.M.stainless,0,2.4,0,i);r.scale.y=.45,this.cyl(.74,.74,.06,this.M.darkSteel,0,1.7,0,i,24),this.cyl(.74,.74,.06,this.M.darkSteel,0,.8,0,i,24)};e(1.6),e(3)}buildSwitchyard(){const e=new Ht;e.position.set(6.8,0,-.4),this.factory.add(e);for(let i=0;i<3;i++){const r=i*1.4;this.box(.14,3.2,.14,this.M.darkSteel,r,1.6,0,e),this.box(1.4,.1,.1,this.M.darkSteel,r,2.5,0,e),this.box(1.1,.1,.1,this.M.darkSteel,r,2.9,0,e)}const n=i=>{this.box(.9,.85,1.2,this.M.darkSteel,i,.55,1.4,e),this.cyl(.08,.08,.5,this.M.stainless,i-.25,1.15,1.4,e,12),this.cyl(.08,.08,.5,this.M.stainless,i+.25,1.15,1.4,e,12)};n(.4),n(2)}buildCameraRig(){this.buildSuspendedCamera(-1),this.buildSuspendedCamera(1)}buildSuspendedCamera(e){const n=10*e,i=3,r=8.8,s=7.6,o=new Ht;o.position.set(n,0,i),this.scene.add(o),this.box(.5,.16,.5,this.M.darkSteel,0,r,0,o),this.cyl(.05,.05,r-s,this.M.darkSteel,0,(r+s)/2,0,o,8),this.cyl(.13,.13,.2,this.M.darkSteel,0,s,0,o,12);const a=new Ht;a.position.set(0,s,0),a.rotation.order="YXZ",a.rotation.y=Math.atan2(-n,-i),a.rotation.x=Math.PI/4,o.add(a),this.box(.14,.14,.4,this.M.darkSteel,0,0,.22,a);const l=this.cyl(.22,.22,1.3,this.M.stainless,0,0,.95,a,22);l.rotation.x=Math.PI/2;const c=this.cyl(.27,.27,.55,this.M.paintedLight,0,0,1.15,a,22);c.rotation.x=Math.PI/2;const f=this.cyl(.17,.17,.05,this.M.glass,0,0,1.62,a,20);f.rotation.x=Math.PI/2;const h=this.track(new Qa({color:2754566,emissive:16722464,emissiveIntensity:0,roughness:.4})),d=new Mt(this.track(new Fo(.08,12,10)),h);d.position.set(.12*e,.18,.45),a.add(d),this.leds.push(h),o.traverse(p=>{p.isMesh&&(p.castShadow=!1)})}addPlume(e,n,i,r,s){const o=new Ht;o.position.set(n,i,r),e.add(o);const a=this.track(new th(.5,1)),l=s.warm?15197149:14673130,c=[];for(let f=0;f<s.count;f++){const h=this.track(new Qa({color:l,transparent:!0,opacity:0,depthWrite:!1,roughness:1,metalness:0})),d=(Math.random()-.5)*s.spread,p=new Mt(a,h);p.position.set(d,0,(Math.random()-.5)*s.spread),o.add(p),c.push({mesh:p,phase:f/s.count,speed:s.rate*(.8+Math.random()*.4),rise:s.rise,drift:s.drift,ox:d,seed:Math.random()*6.2831,from:s.from,to:s.to,baseOpacity:s.opacity})}this.plumes.push({group:o,puffs:c})}tickPlumes(e){for(const n of this.plumes)for(const i of n.puffs){i.phase+=i.speed*e,i.phase>=1&&(i.phase-=1);const r=i.phase,s=A1.lerp(i.from,i.to,r);i.mesh.scale.setScalar(s),i.mesh.position.y=r*i.rise,i.mesh.position.x=i.ox+Math.sin(r*6.2831+i.seed)*i.drift*r,i.mesh.material.opacity=Math.sin(Math.PI*r)*i.baseOpacity}}onResize(){const e=this.host.clientWidth||1,n=this.host.clientHeight||1;this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.setSize(e,n,!1),this.camera.aspect=e/n,this.camera.updateProjectionMatrix()}track(e){return this.disposables.push(e),e}box(e,n,i,r,s,o,a,l){const c=new Mt(this.track(new Pr(e,n,i)),r);return c.position.set(s,o,a),c.castShadow=!0,c.receiveShadow=!0,l.add(c),c}cyl(e,n,i,r,s,o,a,l,c=20){const f=new Mt(this.track(new Uo(e,n,i,c)),r);return f.position.set(s,o,a),f.castShadow=!0,f.receiveShadow=!0,l.add(f),f}sphere(e,n,i,r,s,o){const a=new Mt(this.track(new Fo(e,20,16)),n);return a.position.set(i,r,s),a.castShadow=!0,a.receiveShadow=!0,o.add(a),a}}function j2(){const t=_e.useRef(null),e=_e.useRef(null);return _e.useEffect(()=>{if(!t.current||!e.current)return;const n=new G2(e.current,t.current);return n.start(),()=>n.dispose()},[]),_.jsx("div",{ref:t,style:{width:"100%",height:"100%",pointerEvents:"none"},children:_.jsx("canvas",{ref:e,style:{display:"block",width:"100%",height:"100%"}})})}function W2(t){return t.toString().padStart(2,"0")}function X2({onShowDemo:t,onSelectUseCase:e}){const n=Tr;return _.jsxs("div",{className:"min-h-screen bg-white",children:[_.jsxs("section",{className:"relative min-h-screen overflow-hidden",style:{background:"radial-gradient(125% 90% at 50% 6%, #ffffff 0%, #eef2f8 46%, #e2e8f2 100%)"},children:[_.jsx("div",{className:"pointer-events-none absolute inset-0",style:{backgroundImage:"linear-gradient(rgba(61,90,240,0.05) 1px,transparent 1px),linear-gradient(90deg,rgba(61,90,240,0.05) 1px,transparent 1px)",backgroundSize:"54px 54px",maskImage:"radial-gradient(115% 80% at 50% 0%,#000 55%,transparent 100%)"}}),_.jsx("div",{className:"pointer-events-none absolute -left-40 top-24 h-[28rem] w-[28rem] rounded-full",style:{background:"radial-gradient(circle,#5EEAD41f 0%,transparent 70%)"}}),_.jsxs("div",{className:"relative mx-auto max-w-[1280px] px-6 sm:px-8",children:[_.jsx("img",{src:"/I-O-vision-demo/faclon-logo-blue.png",alt:"Faclon Labs",className:"absolute left-6 top-6 z-30 h-8 w-auto sm:left-8"}),_.jsxs("div",{className:"relative mx-auto mt-[42px] h-[64vh] min-h-[480px] w-full",children:[_.jsx("h1",{className:"pointer-events-none absolute inset-x-0 top-0 z-0 flex select-none justify-center text-center",style:{fontFamily:"-apple-system,BlinkMacSystemFont,'SF Pro Display','Helvetica Neue',Arial,sans-serif",fontWeight:600,letterSpacing:"-0.045em",lineHeight:.86,color:"#c0c9d8",fontSize:"clamp(56px,13.5vw,184px)"},children:"I/O Vision"}),_.jsx("div",{className:"absolute inset-0 z-10",children:_.jsx(j2,{})})]}),_.jsxs("div",{className:"relative z-20 mt-[46px] flex flex-wrap items-center justify-center gap-4 pb-16",children:[_.jsxs("button",{type:"button",className:"group inline-flex items-center gap-2 rounded-xl bg-[#0F172A] px-7 py-3.5 text-[15px] font-bold text-white shadow-lg shadow-slate-900/15 transition hover:bg-[#1E293B]",onClick:()=>t(),children:["Launch Dashboard",_.jsx(Xe,{name:"arrowRight",size:18})]}),_.jsx("a",{href:"#use-cases",className:"inline-flex items-center gap-2 rounded-xl px-6 py-3.5 text-[15px] font-semibold text-slate-700 ring-1 ring-inset ring-slate-300 transition hover:bg-white",children:"Explore use cases"})]})]})]}),_.jsxs("section",{id:"use-cases",className:"relative overflow-hidden px-8 py-16",style:{background:"linear-gradient(180deg,#EAEFFF 0%,#F1F0FF 60%,#ECEFFF 100%)"},children:[_.jsx("div",{className:"pointer-events-none absolute inset-0",style:{backgroundImage:"linear-gradient(rgba(61,90,240,0.06) 1px,transparent 1px),linear-gradient(90deg,rgba(61,90,240,0.06) 1px,transparent 1px)",backgroundSize:"52px 52px",maskImage:"radial-gradient(120% 90% at 50% 0%,#000 60%,transparent 100%)"}}),_.jsxs("div",{className:"relative mx-auto max-w-[1100px]",children:[_.jsxs("div",{className:"mx-auto max-w-2xl text-center",children:[_.jsx("span",{className:"text-[12.5px] font-bold uppercase tracking-[0.16em] text-[#16A34A]",children:"Detection Suite"}),_.jsx("h2",{className:"mt-2 text-[32px] font-extrabold tracking-tight text-[#0F172A] md:text-[38px]",children:"Multiple compliance use cases, one camera network"}),_.jsx("p",{className:"mt-3 text-[15.5px] leading-relaxed text-[#475569]",children:"Every I/O Vision model runs on your existing CCTV feeds — no new hardware. Each flags a specific safety or compliance risk and routes it to the dashboard in real time."})]}),_.jsx("div",{className:"mt-10 grid grid-cols-3 gap-3.5",children:n.map((i,r)=>_.jsxs("button",{type:"button",onClick:()=>e(i.id),title:"Open "+i.name+" in the dashboard",className:"group relative w-full overflow-hidden rounded-xl border border-white bg-white/80 p-4 text-left shadow-[0_1px_3px_rgba(15,23,42,0.06)] ring-1 ring-[#3D5AF0]/5 backdrop-blur-sm transition-all duration-200 hover:-translate-y-1 hover:bg-white hover:shadow-[0_12px_26px_rgba(38,50,158,0.12)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3D5AF0]/40",children:[_.jsx("span",{className:"absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 transition-transform duration-200 group-hover:scale-x-100",style:{backgroundColor:i.color}}),_.jsxs("div",{className:"flex items-center gap-2.5",children:[_.jsx("div",{className:"flex h-9 w-9 shrink-0 items-center justify-center rounded-lg",style:{backgroundColor:i.color+"1F",color:i.color},children:_.jsx(Xe,{name:i.icon,size:18})}),_.jsx("span",{className:"text-[10.5px] font-semibold text-[#94A3B8]",children:W2(r+1)}),_.jsx("span",{className:"ml-auto translate-x-1 text-[#3D5AF0] opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100",children:_.jsx(Xe,{name:"arrowRight",size:16})})]}),_.jsx("div",{className:"mt-3 text-[14.5px] font-bold text-[#0F172A]",children:i.name}),_.jsx("div",{className:"mt-1 text-[12.5px] leading-snug text-[#64748B]",children:i.description})]},i.id))})]})]})]})}class $2{constructor(e,n){Fe(this,"renderer");Fe(this,"scene");Fe(this,"camera");Fe(this,"plant");Fe(this,"anchors",[]);Fe(this,"markerEls",[]);Fe(this,"clock",new Pv);Fe(this,"frameId",0);Fe(this,"ro");Fe(this,"disposables",[]);Fe(this,"dragging",!1);Fe(this,"lastX",0);Fe(this,"lastY",0);Fe(this,"spin",0);Fe(this,"frustumSize",38);Fe(this,"minFrustum",26);Fe(this,"maxFrustum",54);Fe(this,"azimuth",Math.PI/4);Fe(this,"elevation",32*Math.PI/180);Fe(this,"minEl",0);Fe(this,"maxEl",89*Math.PI/180);Fe(this,"camRadius",120);Fe(this,"target",new z(0,3.5,0));Fe(this,"wp",new z);Fe(this,"ndc",new z);Fe(this,"M");Fe(this,"onDown",e=>{this.dragging=!0,this.lastX=e.clientX,this.lastY=e.clientY,this.spin=0,this.canvas.style.cursor="grabbing"});Fe(this,"onMove",e=>{if(!this.dragging)return;const n=e.clientX-this.lastX,i=e.clientY-this.lastY;this.lastX=e.clientX,this.lastY=e.clientY;const r=n*.008;this.plant.rotation.y+=r,this.spin=r,this.elevation=Math.min(this.maxEl,Math.max(this.minEl,this.elevation+i*.006)),this.updateCamera()});Fe(this,"onUp",()=>{this.dragging&&(this.dragging=!1,this.canvas.style.cursor="grab")});Fe(this,"onWheel",e=>{e.preventDefault(),this.frustumSize=Math.min(this.maxFrustum,Math.max(this.minFrustum,this.frustumSize+e.deltaY*.02)),this.applyProjection()});Fe(this,"animate",()=>{this.frameId=requestAnimationFrame(this.animate),this.clock.getDelta(),!this.dragging&&Math.abs(this.spin)>2e-5&&(this.plant.rotation.y+=this.spin,this.spin*=.93),this.renderer.render(this.scene,this.camera),this.updateMarkers()});this.canvas=e,this.host=n}setMarkerEls(e){this.markerEls=e}start(){this.initThree(),this.buildPalette(),this.buildScene(),this.onResize(),this.ro=new ResizeObserver(()=>this.onResize()),this.ro.observe(this.host),this.canvas.addEventListener("pointerdown",this.onDown),window.addEventListener("pointermove",this.onMove),window.addEventListener("pointerup",this.onUp),this.canvas.addEventListener("wheel",this.onWheel,{passive:!1}),this.animate()}dispose(){var e,n;cancelAnimationFrame(this.frameId),(e=this.ro)==null||e.disconnect(),this.canvas.removeEventListener("pointerdown",this.onDown),window.removeEventListener("pointermove",this.onMove),window.removeEventListener("pointerup",this.onUp),this.canvas.removeEventListener("wheel",this.onWheel),this.disposables.forEach(i=>i.dispose()),(n=this.renderer)==null||n.dispose()}initThree(){this.renderer=new Av({canvas:this.canvas,antialias:!0,alpha:!0}),this.renderer.setClearColor(0,0),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Bf,this.renderer.toneMapping=Hf,this.renderer.toneMappingExposure=1.15,this.scene=new bv,this.camera=new Qf(-1,1,1,-1,.1,400),this.updateCamera(),this.scene.add(new Rv(16777215,14210024,1.05));const e=new Cl(16777215,1.9);e.position.set(28,40,20),e.target.position.copy(this.target),e.castShadow=!0,e.shadow.mapSize.set(2048,2048),e.shadow.bias=-4e-4,e.shadow.normalBias=.03;const n=e.shadow.camera;n.left=-40,n.right=40,n.top=40,n.bottom=-40,n.near=1,n.far=140,this.scene.add(e,e.target);const i=new Cl(15329014,.5);i.position.set(-30,18,-12),this.scene.add(i),this.plant=new Ht,this.plant.rotation.y=-.5,this.scene.add(this.plant)}buildPalette(){const e=(n,i=.05,r=.75,s={})=>this.track(new Qa({color:n,metalness:i,roughness:r,...s}));this.M={pink:e(15236753),pinkDark:e(14114677),pinkLight:e(15770545),purple:e(9406662),purpleDark:e(7301282),purpleLight:e(11183320),grey:e(12370124),greyDark:e(9607334),greyLight:e(14080481),white:e(15659252),roof:e(9143486),roofPink:e(13208992),red:e(14046798),steel:e(11449536,.5,.4),window:e(12572394,.2,.25,{emissive:2375774,emissiveIntensity:.25}),concrete:e(13685210),dark:e(5659238,.4,.5),truck:e(14706015),barrel:e(9410736,.6,.35),ground:e(14736622,0,.95),road:e(13618397),glass:e(10467020,.3,.2),amber:e(15114586)}}buildScene(){this.buildGround(),this.buildTallChimney(-16,-7),this.buildTaperedStack(-10.5,-3),this.buildSiloCluster(-6,1.5),this.buildMainBuildings(),this.buildDomeTank(6.5,-6.5),this.buildTruck(13.5,-3.5),this.buildRightCluster(14.5,3.5),this.buildFrontBlock(1.5,6.5),this.buildPipeRack(9),this.buildCurvedRoof(9.5,9.5),this.buildWorkers(),this.addAnchor("safety_gear",-1.5,6.4,-3),this.addAnchor("fall_loitering",-10.5,6.2,-3),this.addAnchor("lab_safety",14.5,7.4,3.5),this.addAnchor("fire_smoke",-16,13.4,-7),this.addAnchor("overcrowding",1.5,5.4,6.5),this.addAnchor("no_staff",13.5,3.6,-3.5),this.addAnchor("no_helmet",-6,6.6,1.5),this.addAnchor("no_vest",-1,4.2,1.8),this.addAnchor("intrusion",9.5,4.6,9.5),this.addAnchor("conveyor_belt_health",-6.5,3.4,9)}buildGround(){const e=this.cyl(20,20,.7,this.M.ground,0,-.35,0,this.plant,72);e.receiveShadow=!0,e.castShadow=!1,this.box(30,.06,4.4,this.M.road,2,.02,-3.5,this.plant),this.box(4.4,.06,22,this.M.road,10,.02,2,this.plant)}buildTallChimney(e,n){const i=this.group(e,n);this.box(3.2,.5,3.2,this.M.purpleDark,0,.25,0,i);const r=12;this.cyl(.62,.85,r,this.M.white,0,r/2+.4,0,i,26);for(let s=0;s<4;s++)this.cyl(.7,.78,.9,this.M.red,0,2.2+s*2.5,0,i,26);this.cyl(.66,.66,.5,this.M.greyLight,0,r+.7,0,i,26),this.sphere(.6,this.M.greyLight,0,r+.95,0,i).scale.y=.5}buildTaperedStack(e,n){const i=this.group(e,n);this.cyl(.55,1.5,9,this.M.grey,0,4.5,0,i,26),this.cyl(.55,.55,.4,this.M.greyDark,0,9,0,i,26);for(const r of[0,Math.PI*.66,Math.PI*1.33]){const s=this.cyl(.06,.06,8,this.M.steel,Math.cos(r)*1.5,4,Math.sin(r)*1.5,i,8);s.rotation.z=Math.cos(r)*.16,s.rotation.x=-Math.sin(r)*.16}}buildSiloCluster(e,n){const i=this.group(e,n);this.box(6,1.2,4.2,this.M.pink,0,.6,0,i),this.box(6.1,.4,4.3,this.M.pinkDark,0,.2,0,i);for(const r of[-1.6,0,1.6])this.cyl(.7,.7,5,this.M.greyLight,r,3.7,0,i,24);this.ladder(i,1.6+.75,1.2,.2,4.6)}buildMainBuildings(){const e=this.group(-1.5,-3);this.box(6,6,6,this.M.pink,0,3,0,e),this.box(6.3,.7,6.3,this.M.roof,0,6.2,0,e),this.box(4.2,.5,4.2,this.M.purpleDark,0,6.7,0,e),this.box(2.6,3.2,.12,this.M.greyLight,0,1.6,3.02,e);for(let r=0;r<7;r++)this.box(2.6,.06,.14,this.M.greyDark,0,.5+r*.42,3.06,e);this.windowGrid(e,3.02,1.4,3.4,2,4,.8,.7),this.ladder(e,-2.5,0,3.1,6);const n=this.group(3,-6.5);this.box(5.2,8,5.2,this.M.purple,0,4,0,n),this.box(5.5,.7,5.5,this.M.purpleDark,0,8.2,0,n),this.box(3.4,1,3.4,this.M.greyLight,0,8.9,0,n),this.box(1.2,.5,1.2,this.M.dark,1,9.6,0,n),this.windowGrid(n,2.62,5,3.2,3,5,.7,.7),this.ladder(n,2.6,0,2.55,8);const i=this.group(-1,1.5);this.box(6.5,3,4,this.M.pink,0,1.5,0,i),this.box(6.7,.5,4.2,this.M.roof,0,3.1,0,i),this.box(2.2,.5,2,this.M.purpleDark,-1.5,3.5,0,i),this.windowGrid(i,2.02,4.4,1.5,3,1,.9,.9)}buildDomeTank(e,n){const i=this.group(e,n);this.box(4,.5,4,this.M.greyDark,0,.25,0,i),this.cyl(1.8,1.8,3.6,this.M.greyLight,0,2.3,0,i,32),this.sphere(1.8,this.M.white,0,4.1,0,i).scale.y=.55,this.cyl(1.85,1.85,.15,this.M.grey,0,2.6,0,i,32)}buildTruck(e,n){const i=this.group(e,n);i.rotation.y=Math.PI/2,this.box(7.5,.4,2.2,this.M.dark,-1.2,.9,0,i),this.box(7.4,.2,2,this.M.steel,-1.2,1.15,0,i),this.box(2,2,2.1,this.M.truck,3.4,1.2,0,i),this.box(1.9,.9,2,this.M.glass,3.45,2,0,i);for(let r=0;r<4;r++){const s=this.cyl(.5,.5,1.4,this.M.barrel,-3.6+r*1.5,1.85,0,i,18);s.rotation.z=Math.PI/2}for(const r of[3,-.2,-1.8,-3.4])for(const s of[-1.05,1.05]){const o=this.cyl(.55,.55,.35,this.M.dark,r,.55,s,i,16);o.rotation.x=Math.PI/2}}buildRightCluster(e,n){const i=this.group(e,n);this.box(5,5.5,5,this.M.purpleLight,0,2.75,0,i),this.box(5.3,.6,5.3,this.M.purpleDark,0,5.7,0,i),this.box(1.4,.7,1.4,this.M.greyLight,-1.2,6.3,-1.2,i),this.box(1.4,.7,1.4,this.M.greyLight,1,6.3,.6,i),this.cyl(.35,.35,1.6,this.M.grey,1.8,6.8,-1.8,i,16),this.windowGrid(i,2.52,4.2,3,3,4,.7,.7),this.box(3.2,3.4,3.2,this.M.pink,-3.6,1.7,2.4,i),this.box(3.4,.5,3.4,this.M.roofPink,-3.6,3.6,2.4,i)}buildFrontBlock(e,n){const i=this.group(e,n);this.box(5,4.5,4,this.M.purple,-2.5,2.25,0,i),this.box(5.2,.5,4.2,this.M.purpleDark,-2.5,4.6,0,i),this.box(4.5,3,3.6,this.M.pink,2,1.5,.4,i),this.box(4.7,.5,3.8,this.M.roof,2,3.1,.4,i),this.windowGrid(i,-2.5,2.02,3.2,3,4,.6,.6,2.02),this.windowGrid(i,2,1.85,2.22,3,2,.7,.7),this.cyl(.8,1.2,3,this.M.white,-.4,1.5,-2.6,i,28),this.sphere(.4,this.M.greyLight,-.4,3.1,-2.6,i),this.box(1.8,1.8,.1,this.M.greyLight,2,.9,2.22,i)}buildPipeRack(e){const n=this.group(-11,e);for(let i=0;i<6;i++){const r=-8+i*3;this.box(.25,3,.25,this.M.steel,r,1.5,-.7,n),this.box(.25,3,.25,this.M.steel,r,1.5,.7,n),this.box(.25,.25,2,this.M.steel,r,3,0,n)}for(const i of[-.4,0,.4])this.cyl(.16,.16,16,this.M.grey,-.5,3.2,i,n,12).rotation.z=Math.PI/2;this.box(16,.2,1.4,this.M.greyDark,-.5,3.05,0,n)}buildCurvedRoof(e,n){const i=this.group(e,n);this.box(5,2.4,4.5,this.M.greyLight,0,1.2,0,i);const r=this.cyl(2.25,2.25,5,this.M.dark,0,2.4,0,i,20,!0);r.rotation.z=Math.PI/2,r.scale.set(1,1,.62),this.box(4,4,4,this.M.purpleLight,4.5,2,-1,i),this.box(4.2,.5,4.2,this.M.purpleDark,4.5,4.2,-1,i),this.cyl(.6,.6,1.2,this.M.greyLight,3.6,5,-1.6,i,18),this.cyl(.6,.6,1.2,this.M.greyLight,5.2,5,-.4,i,18),this.windowGrid(i,0,1.1,2.3,4,2,.6,.6)}buildWorkers(){const e=(n,i,r)=>{const s=this.group(n,i);this.cyl(.18,.22,.7,r,0,.45,0,s,10),this.sphere(.16,this.M.amber,0,.95,0,s)};e(1.2,2.6,this.M.amber),e(9.5,-2.5,this.M.red),e(-3.2,-1,this.M.amber)}addAnchor(e,n,i,r){const s=new Lt;s.position.set(n,i,r),this.plant.add(s);const o=Tr.find(a=>a.id===e);this.anchors[Tr.indexOf(o)]={obj:s,uc:o}}updateMarkers(){if(!this.markerEls.length)return;const e=this.host.clientWidth,n=this.host.clientHeight;for(let i=0;i<this.anchors.length;i++){const r=this.anchors[i],s=this.markerEls[i];if(!r||!s)continue;if(r.obj.getWorldPosition(this.wp),this.ndc.copy(this.wp).project(this.camera),!(this.ndc.z<1&&this.ndc.x>-1.1&&this.ndc.x<1.1&&this.ndc.y>-1.1&&this.ndc.y<1.1)){s.style.opacity="0",s.style.pointerEvents="none";continue}const a=(this.ndc.x*.5+.5)*e,l=(-this.ndc.y*.5+.5)*n;s.style.transform=`translate(${a}px, ${l}px) translate(-50%, -50%)`,s.style.opacity="1",s.style.pointerEvents="auto"}}updateCamera(){const e=Math.cos(this.elevation),n=Math.sin(this.elevation);this.camera.position.set(this.target.x+this.camRadius*e*Math.sin(this.azimuth),this.target.y+this.camRadius*n,this.target.z+this.camRadius*e*Math.cos(this.azimuth)),this.camera.lookAt(this.target)}applyProjection(){const e=this.host.clientWidth||1,n=this.host.clientHeight||1,i=e/n,r=this.frustumSize/2;this.camera.left=-r*i,this.camera.right=r*i,this.camera.top=r,this.camera.bottom=-r,this.camera.updateProjectionMatrix()}onResize(){const e=this.host.clientWidth||1,n=this.host.clientHeight||1;this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.setSize(e,n,!1),this.applyProjection()}track(e){return this.disposables.push(e),e}group(e,n){const i=new Ht;return i.position.set(e,0,n),this.plant.add(i),i}box(e,n,i,r,s,o,a,l){const c=new Mt(this.track(new Pr(e,n,i)),r);return c.position.set(s,o,a),c.castShadow=!0,c.receiveShadow=!0,l.add(c),c}cyl(e,n,i,r,s,o,a,l,c=20,f=!1){const h=f?new Uo(e,n,i,c,1,!1,0,Math.PI):new Uo(e,n,i,c),d=new Mt(this.track(h),r);return d.position.set(s,o,a),d.castShadow=!0,d.receiveShadow=!0,l.add(d),d}sphere(e,n,i,r,s,o){const a=new Mt(this.track(new Fo(e,18,14)),n);return a.position.set(i,r,s),a.castShadow=!0,a.receiveShadow=!0,o.add(a),a}ladder(e,n,i,r,s){this.box(.06,s,.06,this.M.steel,n-.18,i+s/2,r,e),this.box(.06,s,.06,this.M.steel,n+.18,i+s/2,r,e);const o=Math.floor(s/.5);for(let a=1;a<o;a++)this.box(.42,.05,.05,this.M.steel,n,i+a*.5,r,e)}windowGrid(e,n,i,r,s,o,a,l,c){const f=-((s-1)*(a+.35))/2,h=-((o-1)*(l+.35))/2;for(let d=0;d<s;d++)for(let p=0;p<o;p++){const y=f+d*(a+.35),S=h+p*(l+.35);c!==void 0?this.box(.06,l,a,this.M.window,c,r+S,i+y,e):this.box(a,l,.06,this.M.window,i+y,r+S,n,e)}}}function Y2({onSelectUseCase:t}){const e=_e.useRef(null),n=_e.useRef(null),i=_e.useRef([]);return _e.useEffect(()=>{if(!e.current||!n.current)return;const r=new $2(n.current,e.current);return r.setMarkerEls(i.current),r.start(),()=>r.dispose()},[]),_.jsxs("div",{ref:e,className:"relative h-full w-full overflow-hidden",style:{background:"radial-gradient(120% 100% at 50% 30%, #f2f0fb 0%, #e7e4f4 60%, #ddd9ee 100%)"},children:[_.jsx("canvas",{ref:n,className:"block h-full w-full",style:{cursor:"grab"}}),Tr.map((r,s)=>_.jsx("button",{ref:o=>i.current[s]=o,type:"button",onClick:()=>t(r.id),title:`Open ${r.name} dashboard`,className:"group absolute left-0 top-0 z-10 -translate-x-1/2 -translate-y-1/2",style:{opacity:0,willChange:"transform,opacity"},children:_.jsxs("span",{className:"flex items-center rounded-full bg-white/95 p-1 shadow-[0_6px_16px_rgba(38,30,80,0.22)] ring-1 ring-black/5 backdrop-blur transition duration-150 group-hover:scale-105",children:[_.jsx("span",{className:"flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-white",style:{backgroundColor:r.color},children:_.jsx(Xe,{name:r.icon,size:15})}),_.jsx("span",{className:"max-w-0 overflow-hidden whitespace-nowrap text-[12px] font-semibold text-[#1F1B3A] opacity-0 transition-all duration-200 group-hover:ml-2 group-hover:mr-1.5 group-hover:max-w-[220px] group-hover:opacity-100",children:r.name})]})},r.id)),_.jsx("div",{className:"pointer-events-none absolute bottom-5 left-1/2 z-10 -translate-x-1/2 rounded-full bg-white/80 px-4 py-2 text-[12.5px] font-medium text-[#4A4568] shadow-sm ring-1 ring-black/5 backdrop-blur",children:"Drag to rotate & tilt • Scroll to zoom • Click a tag to open its dashboard"})]})}function Nv({cameras:t,useCaseId:e,index:n=0,onClose:i,onViewViolations:r}){const[s,o]=_e.useState(n),[a,l]=_e.useState(!0),[c,f]=_e.useState(100),[h,d]=_e.useState("live"),[p,y]=_e.useState(""),[S,m]=_e.useState(()=>Ap(e,t[n].id).slice(0,5)),u=t[s],v=_e.useRef(a);v.current=a;const g=_e.useRef(c);g.current=c;const M=_e.useRef(s);M.current=s;const P=O=>O.slice(11,19),b=O=>{const X=O>=99.5?"live":"rewind";if(d(X),X==="rewind"){const j=(100-O)/100*60,Y=new Date(Date.now()-j*6e4),N=Q=>Q.toString().padStart(2,"0");y(`◀ ${N(Y.getHours())}:${N(Y.getMinutes())}:${N(Y.getSeconds())}`)}},T=()=>{f(100),l(!0),b(100)},R=O=>{o(O),T()},L=()=>R((M.current-1+t.length)%t.length),x=()=>R((M.current+1)%t.length),E=()=>l(O=>!O),U=()=>{const O=Math.max(0,g.current-8.3);f(O),b(O)},B=O=>{const X=Number(O);f(X),b(X)};return _e.useEffect(()=>{m(Ap(e,u.id).slice(0,5))},[s,e]),_e.useEffect(()=>{const O=setInterval(()=>{if(v.current&&g.current<100){const X=Math.min(100,g.current+1.5);f(X),b(X)}},250);return()=>clearInterval(O)},[]),_e.useEffect(()=>{const O=X=>{X.key==="Escape"?i():X.key==="ArrowLeft"?L():X.key==="ArrowRight"&&x()};return document.addEventListener("keydown",O),()=>document.removeEventListener("keydown",O)},[t.length]),_.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 p-4",onClick:()=>i(),children:_.jsxs("div",{className:"flex max-h-[92vh] w-[94vw] max-w-[1200px] flex-col overflow-hidden rounded-2xl bg-white shadow-2xl",onClick:O=>O.stopPropagation(),children:[_.jsxs("div",{className:"flex items-center justify-between border-b border-slate-200 px-5 py-3",children:[_.jsxs("div",{className:"min-w-0",children:[_.jsxs("div",{className:"flex items-center gap-2",children:[_.jsx("span",{className:"text-[15px] font-semibold text-slate-900",children:u.name}),_.jsx("span",{className:"rounded bg-slate-100 px-1.5 py-0.5 font-mono text-[11px] text-slate-500",children:u.ip})]}),_.jsxs("div",{className:"text-[12px] text-slate-500",children:[u.zone," · Camera ",s+1," / ",t.length]})]}),_.jsx("button",{type:"button",className:"flex h-8 w-8 items-center justify-center rounded-full text-slate-500 hover:bg-slate-100",onClick:()=>i(),"aria-label":"Close",children:_.jsx(Xe,{name:"x",size:18})})]}),_.jsxs("div",{className:"grid min-h-0 flex-1 grid-cols-1 lg:grid-cols-[1fr_320px]",children:[_.jsxs("div",{className:"flex min-h-0 flex-col border-r border-slate-200",children:[_.jsxs("div",{className:"relative bg-black",style:{aspectRatio:"16/9"},children:[_.jsx(Lo,{scene:u.scene,seed:s+3,mode:h,violation:h==="live",timeLabel:h==="rewind"?p:void 0}),_.jsx("button",{type:"button",className:"absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/45 text-white hover:bg-black/70",onClick:()=>L(),"aria-label":"Previous camera",children:_.jsx(Xe,{name:"chevronLeft",size:20})}),_.jsx("button",{type:"button",className:"absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/45 text-white hover:bg-black/70",onClick:()=>x(),"aria-label":"Next camera",children:_.jsx(Xe,{name:"chevronRight",size:20})})]}),_.jsxs("div",{className:"px-4 py-3",children:[_.jsxs("div",{className:"flex items-center gap-3",children:[_.jsx("button",{type:"button",className:"flex h-9 w-9 items-center justify-center rounded-full bg-slate-900 text-white hover:bg-slate-700",onClick:()=>E(),"aria-label":a?"Pause":"Play",children:_.jsx(Xe,{name:a?"pause":"play",size:15})}),_.jsxs("button",{type:"button",className:"flex h-8 items-center gap-1 rounded-full border border-slate-300 px-3 text-[12px] font-medium text-slate-700 hover:bg-slate-50",onClick:()=>U(),title:"Rewind 5 min",children:[_.jsx(Xe,{name:"rewind",size:14})," 5m"]}),_.jsx("input",{type:"range",min:"0",max:"100",step:"0.5",className:"h-1.5 flex-1 accent-[#3D5AF0]",value:c,onChange:O=>B(O.target.value)}),_.jsx("span",{className:"w-[130px] text-right font-mono text-[12px]",style:{color:h==="live"?"#16A34A":"#475569"},children:h==="live"?"● LIVE":p}),h==="rewind"&&_.jsx("button",{type:"button",className:"rounded-full bg-[#16A34A] px-3 py-1 text-[11px] font-semibold text-white",onClick:()=>T(),children:"Go live"})]}),_.jsx("div",{className:"mt-3 flex gap-2 overflow-x-auto pb-1",children:t.map((O,X)=>_.jsx("button",{type:"button",onClick:()=>R(X),className:`relative h-12 w-20 shrink-0 overflow-hidden rounded-md transition ${X===s?"ring-2 ring-[#3D5AF0]":"ring-1 ring-slate-200"}`,title:O.name,children:_.jsx(Lo,{scene:O.scene,seed:X+1})},O.id))})]})]}),_.jsxs("div",{className:"flex min-h-0 flex-col bg-slate-50",children:[_.jsx("div",{className:"border-b border-slate-200 px-4 py-3",children:_.jsxs("div",{className:"flex items-center justify-between gap-2",children:[_.jsxs("div",{children:[_.jsx("div",{className:"text-[13px] font-semibold text-slate-900",children:"Last 5 violations"}),_.jsx("div",{className:"text-[11.5px] text-slate-500",children:"on this camera"})]}),_.jsxs("button",{type:"button",onClick:()=>r(u.id),className:"inline-flex items-center gap-1 whitespace-nowrap text-[12.5px] font-semibold text-slate-600 transition hover:text-[#3D5AF0]",children:["View all ",_.jsx(Xe,{name:"arrowRight",size:14})]})]})}),_.jsxs("div",{className:"min-h-0 flex-1 space-y-2 overflow-y-auto p-3",children:[S.length===0&&_.jsx("div",{className:"rounded-lg border border-dashed border-slate-300 p-4 text-center text-[12px] text-slate-400",children:"No recent violations"}),S.map(O=>_.jsxs("div",{className:"rounded-lg border border-slate-200 bg-white p-2.5",children:[_.jsxs("div",{className:"flex items-center justify-between",children:[_.jsxs("span",{className:"text-[11px] font-semibold text-slate-500",children:["#",O.id]}),_.jsx("span",{className:"font-mono text-[11px] text-slate-500",children:P(O.timestamp)})]}),_.jsx("div",{className:"mt-1.5 text-[12.5px] font-medium text-slate-800",children:O.message}),_.jsx("div",{className:"mt-0.5 font-mono text-[10.5px] text-slate-400",children:u.ip})]},O.id))]})]})]})]})})}function ru(t){return t.slice(11,19)}function q2({useCaseId:t,onViewDashboard:e,onViewViolations:n}){const i=Ui[t],{cameras:r,cameraList:s,latest:o,incidents:a,totalViolations:l,timeSince:c,lastAt:f}=_e.useMemo(()=>{const b=$g(t),T=td(t);let R="—",L="";if(b.length){const x=b[0];R=`${2+x.id%26} min ago`,L=`at ${ru(x.timestamp)}`}else R="No violations",L="";return{cameras:T,cameraList:T.map(x=>x.camera),latest:b.slice(0,5),incidents:_y(t),totalViolations:b.length,timeSince:R,lastAt:L}},[t]),[h,d]=_e.useState(!1),[p,y]=_e.useState(0),[S,m]=_e.useState(null);_e.useEffect(()=>{d(!1),m(null)},[t]);const u=b=>{y(b),d(!0)},v=b=>{const T=s.findIndex(R=>R.id===b);u(T<0?0:T)},g=b=>{m({entries:a,index:b,tab:"photo"})},M=b=>{m(null),v(b.cameraId)},P=b=>{var T;return((T=s.find(R=>R.id===b))==null?void 0:T.scene)??"factory"};return _.jsxs(_.Fragment,{children:[_.jsx("div",{className:"h-full overflow-y-auto bg-[#F5F6F8]",children:_.jsxs("div",{className:"mx-auto max-w-[1240px] px-6 py-6",children:[_.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm",children:[_.jsxs("div",{className:"flex items-center gap-4",children:[_.jsx("span",{className:"flex h-12 w-12 items-center justify-center rounded-xl text-white",style:{backgroundColor:i.color},children:_.jsx(Xe,{name:i.icon,size:24})}),_.jsxs("div",{children:[_.jsx("h2",{className:"text-[22px] font-bold tracking-tight text-slate-900",children:i.name}),_.jsx("p",{className:"text-[13px] text-slate-500",children:i.description})]})]}),_.jsxs("div",{className:"flex items-center gap-5",children:[_.jsxs("div",{className:"text-right",children:[_.jsx("div",{className:"text-[11px] font-medium uppercase tracking-wide text-slate-400",children:"Time since last violation"}),_.jsx("div",{className:"text-[20px] font-bold",style:{color:i.color},children:c}),_.jsx("div",{className:"font-mono text-[11px] text-slate-400",children:f})]}),_.jsxs("button",{type:"button",onClick:()=>e(),className:"inline-flex items-center gap-2 rounded-xl bg-[#0F172A] px-5 py-3 text-[14px] font-bold text-white shadow-sm transition hover:bg-[#1E293B]",children:["View Dashboard",_.jsx(Xe,{name:"arrowRight",size:17})]})]})]}),_.jsxs("div",{className:"mt-6",children:[_.jsxs("div",{className:"mb-3 flex items-center gap-2",children:[_.jsx(Xe,{name:"triangleAlert",size:16}),_.jsx("h3",{className:"text-[15px] font-semibold text-slate-900",children:"Latest violation evidence"}),_.jsxs("span",{className:"text-[12.5px] text-slate-400",children:["· ",l," total on this use case"]}),_.jsxs("button",{type:"button",onClick:()=>n(void 0),className:"ml-auto inline-flex items-center gap-1 text-[13px] font-semibold text-slate-600 transition hover:text-[#3D5AF0]",children:["View all violations ",_.jsx(Xe,{name:"arrowRight",size:15})]})]}),_.jsx("div",{className:"grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5",children:o.map((b,T)=>_.jsxs("button",{type:"button",onClick:()=>g(T),className:"group overflow-hidden rounded-xl border border-slate-200 bg-white text-left shadow-sm transition hover:-translate-y-0.5 hover:shadow-md",children:[_.jsx("div",{className:"relative bg-black",style:{aspectRatio:"16/9"},children:_.jsx(Lo,{scene:P(b.cameraId),seed:T+2,mode:"rewind",timeLabel:ru(b.timestamp),violation:!0})}),_.jsxs("div",{className:"p-2.5",children:[_.jsx("div",{className:"truncate text-[12.5px] font-semibold text-slate-800",children:b.cameraName}),_.jsxs("div",{className:"mt-0.5 flex items-center justify-between",children:[_.jsx("span",{className:"font-mono text-[10.5px] text-slate-400",children:b.ip}),_.jsx("span",{className:"font-mono text-[10.5px] text-slate-500",children:ru(b.timestamp)})]})]})]},b.id??T))})]}),_.jsxs("div",{className:"mt-8",children:[_.jsxs("div",{className:"mb-3 flex items-center gap-2",children:[_.jsx(Xe,{name:"video",size:16}),_.jsx("h3",{className:"text-[15px] font-semibold text-slate-900",children:"Live Feed"}),_.jsxs("span",{className:"text-[12.5px] text-slate-400",children:["· ",r.length," cameras watching this use case"]})]}),_.jsx("div",{className:"grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3",children:r.map((b,T)=>_.jsxs("button",{type:"button",onClick:()=>u(T),className:"group overflow-hidden rounded-xl border border-slate-200 bg-white text-left shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg",children:[_.jsxs("div",{className:"relative bg-black",style:{aspectRatio:"16/9"},children:[_.jsx(Lo,{scene:b.camera.scene,seed:T+1,violation:T%3===0}),_.jsxs("span",{className:"absolute right-2 top-2 rounded-full bg-black/55 px-2 py-0.5 text-[10px] font-semibold text-white",children:[b.count," events"]})]}),_.jsxs("div",{className:"flex items-center justify-between p-3",children:[_.jsxs("div",{className:"min-w-0",children:[_.jsx("div",{className:"truncate text-[13.5px] font-semibold text-slate-900",children:b.camera.name}),_.jsx("div",{className:"truncate text-[12px] text-slate-500",children:b.camera.zone})]}),_.jsxs("div",{className:"ml-2 shrink-0 text-right",children:[_.jsx("div",{className:"font-mono text-[11.5px] text-slate-600",children:b.camera.ip}),_.jsxs("div",{className:"mt-0.5 inline-flex items-center gap-1 text-[10.5px] font-medium text-[#16A34A]",children:[_.jsx("span",{className:"inline-block h-1.5 w-1.5 rounded-full bg-[#16A34A]"})," live"]})]})]})]},b.camera.id??T))})]})]})}),h&&_.jsx(Nv,{cameras:s,useCaseId:t,index:p,onClose:()=>d(!1),onViewViolations:b=>n(b)}),S&&_.jsx(kf,{entries:S.entries,index:S.index,tab:S.tab,onClose:()=>m(null),onViewOnStream:b=>M(b)})]})}function K2({label:t,color:e,textColor:n="#FFFFFF"}){return _.jsx("span",{className:"inline-flex items-center whitespace-nowrap rounded-full px-2.5 py-0.5 text-[11px] font-semibold",style:{backgroundColor:e,color:n},children:t})}const Z2={lab:_.jsxs("g",{children:[_.jsx("rect",{width:"100",height:"75",fill:"#E7EDF3"}),_.jsx("rect",{x:"6",y:"40",width:"34",height:"20",rx:"2",fill:"#C7D2DE"}),_.jsx("rect",{x:"60",y:"40",width:"34",height:"20",rx:"2",fill:"#C7D2DE"}),_.jsx("rect",{x:"0",y:"60",width:"100",height:"15",fill:"#B8C4D2"}),_.jsx("circle",{cx:"23",cy:"36",r:"5",fill:"#94A3B8"}),_.jsx("circle",{cx:"77",cy:"36",r:"5",fill:"#94A3B8"})]}),cooling_tower:_.jsxs("g",{children:[_.jsx("rect",{width:"100",height:"75",fill:"#DBE4EC"}),_.jsx("rect",{x:"0",y:"55",width:"100",height:"20",fill:"#9AA8B5"}),_.jsx("rect",{x:"10",y:"18",width:"26",height:"40",fill:"#B6C2CE"}),_.jsx("rect",{x:"64",y:"22",width:"24",height:"36",fill:"#B6C2CE"}),_.jsx("rect",{x:"30",y:"50",width:"40",height:"6",fill:"#EF4444",opacity:"0.8"}),_.jsx("circle",{cx:"50",cy:"44",r:"4",fill:"#64748B"})]}),factory:_.jsxs("g",{children:[_.jsx("rect",{width:"100",height:"75",fill:"#E4E9EF"}),_.jsx("rect",{x:"0",y:"58",width:"100",height:"17",fill:"#AEB9C6"}),_.jsx("rect",{x:"8",y:"30",width:"84",height:"6",fill:"#9AA8B5"}),_.jsx("circle",{cx:"30",cy:"50",r:"5",fill:"#64748B"}),_.jsx("circle",{cx:"58",cy:"50",r:"5",fill:"#64748B"}),_.jsx("rect",{x:"74",y:"38",width:"16",height:"20",fill:"#C7D2DE"})]}),road:_.jsxs("g",{children:[_.jsx("rect",{width:"100",height:"75",fill:"#DDE3EA"}),_.jsx("rect",{x:"0",y:"50",width:"100",height:"25",fill:"#7E8B99"}),_.jsx("rect",{x:"20",y:"61",width:"12",height:"2",fill:"#FACC15"}),_.jsx("rect",{x:"46",y:"61",width:"12",height:"2",fill:"#FACC15"}),_.jsx("rect",{x:"72",y:"61",width:"12",height:"2",fill:"#FACC15"}),_.jsx("rect",{x:"40",y:"40",width:"22",height:"12",rx:"2",fill:"#475569"})]}),loading_bay:_.jsxs("g",{children:[_.jsx("rect",{width:"100",height:"75",fill:"#E2E8F0"}),_.jsx("rect",{x:"0",y:"55",width:"100",height:"20",fill:"#A3AEBC"}),_.jsx("rect",{x:"10",y:"20",width:"30",height:"35",fill:"#C7D2DE"}),_.jsx("rect",{x:"55",y:"26",width:"35",height:"29",fill:"#B6C2CE"}),_.jsx("rect",{x:"55",y:"40",width:"35",height:"3",fill:"#94A3B8"})]}),gate:_.jsxs("g",{children:[_.jsx("rect",{width:"100",height:"75",fill:"#DCE3EB"}),_.jsx("rect",{x:"0",y:"58",width:"100",height:"17",fill:"#9AA8B5"}),_.jsx("rect",{x:"14",y:"22",width:"6",height:"36",fill:"#64748B"}),_.jsx("rect",{x:"80",y:"22",width:"6",height:"36",fill:"#64748B"}),_.jsx("rect",{x:"20",y:"34",width:"60",height:"4",fill:"#EF4444"}),_.jsx("circle",{cx:"50",cy:"48",r:"4",fill:"#475569"})]})};function Am({scene:t,bbox:e,color:n,showPlay:i=!1,width:r=80,height:s=60}){return _.jsxs("svg",{width:r,height:s,viewBox:"0 0 100 75",className:"rounded-[6px] ring-1 ring-black/5",preserveAspectRatio:"xMidYMid slice",children:[Z2[t]??_.jsx("rect",{width:"100",height:"75",fill:"#CBD5E1"}),_.jsx("rect",{x:e.x,y:e.y*.75,width:e.w,height:e.h*.75,fill:"none",stroke:n,strokeWidth:"1.5"}),_.jsx("rect",{x:e.x,y:e.y*.75,width:e.w,height:e.h*.75,fill:n,opacity:"0.18"}),i&&_.jsxs("g",{children:[_.jsx("circle",{cx:"50",cy:"37",r:"11",fill:"#0F172A",opacity:"0.55"}),_.jsx("path",{d:"M46 31 L58 37 L46 43 Z",fill:"#FFFFFF"})]})]})}const ko=30,Q2=20260503,J2=770451,su={y:2026,m:5,d:3},eT=1617,tT=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];function ou(t){return t<10?`0${t}`:`${t}`}function nT(){const t=Of(J2),e=[],n=[],i=[];for(let r=0;r<ko;r++){const s=new Date(su.y,su.m,su.d-(ko-1-r));e.push(`${s.getFullYear()}-${ou(s.getMonth()+1)}-${ou(s.getDate())}`),n.push(`${ou(s.getDate())} ${tT[s.getMonth()]}`);const o=s.getDay(),a=o===0||o===6?.55:1,l=.78+t()*.44;i.push(a*l)}return{keys:e,labels:n,factors:i}}const ih=nT(),Lv=ih.keys,rh=ih.labels;let au=null;function iT(){if(au)return au;const t=Of(Q2),e=[];let n=1;for(let i=0;i<ko;i++){const r=Math.round(eT*ih.factors[i]);for(let s=0;s<r;s++)e.push(Wg(n++,Lv[i],t))}return au=e,e}const sh=new Map(Lv.map((t,e)=>[t,e]));function oh(t){return t.slice(0,10)}function rT(t){const e=new Map;for(const n of Es)e.set(n.id,new Array(ko).fill(0));for(const n of t){const i=sh.get(oh(n.timestamp));i!==void 0&&e.get(n.cameraId)[i]++}return Es.map(n=>({id:n.id,name:n.name,cells:e.get(n.id)})).sort((n,i)=>bm(i.cells)-bm(n.cells))}function sT(t){const e=rh.map(n=>({label:n,High:0,Medium:0,Low:0}));for(const n of t){const i=sh.get(oh(n.timestamp));i!==void 0&&e[i][n.severity]++}return e}function oT(t){const e=new Array(ko).fill(0);for(const r of t){const s=sh.get(oh(r.timestamp));s!==void 0&&e[s]++}let n=-1,i=-1;return e.forEach((r,s)=>{r>i&&(i=r,n=s)}),n<0||i<=0?null:{label:rh[n],count:i}}function bm(t){return t.reduce((e,n)=>e+n,0)}function Cm(t,e){return t.filter(n=>(e.useCase==="all"||n.useCaseId===e.useCase)&&(e.severity==="all"||n.severity===e.severity))}function aT(t){const e=new Map,n=new Array(24).fill(0);let i=0;for(const o of t)e.set(o.cameraId,(e.get(o.cameraId)??0)+1),n[new Date(o.timestamp).getHours()]++,o.resolved||i++;let r=null;for(const[o,a]of e)(!r||a>r.count)&&(r={name:hn[o].name,count:a});let s=null;return n.forEach((o,a)=>{(!s||o>s.count)&&(s={hour:a,count:o})}),{total:t.length,open:i,worstCamera:r,peakHour:s}}function lT(t){const e=new Map;for(const i of t)e.set(i.useCaseId,(e.get(i.useCaseId)??0)+1);const n=t.length||1;return Tr.map(i=>{const r=e.get(i.id)??0;return{id:i.id,name:i.name,color:i.color,count:r,pct:r/n*100}}).filter(i=>i.count>0).sort((i,r)=>r.count-i.count)}function cT(t){const e=Array.from({length:24},(n,i)=>({label:`${i<10?"0":""}${i}:00`,High:0,Medium:0,Low:0}));for(const n of t)e[new Date(n.timestamp).getHours()][n.severity]++;return e}function uT(t){const e=new Map;for(const n of Es)e.set(n.id,new Array(24).fill(0));for(const n of t)e.get(n.cameraId)[new Date(n.timestamp).getHours()]++;return Es.map(n=>({id:n.id,name:n.name,cells:e.get(n.id)})).sort((n,i)=>Rm(i.cells)-Rm(n.cells))}function Rm(t){return t.reduce((e,n)=>e+n,0)}function dT(t,e,n){const i=t.length,r=Math.max(1,Math.ceil(i/n)),s=Math.min(Math.max(1,e),r),o=(s-1)*n;return{rows:t.slice(o,o+n),page:s,pageCount:r,total:i}}const Zs=30,fT=t=>`${t<10?"0":""}${t}:00`,hT=Array.from({length:24},(t,e)=>e),pT={today:1,yesterday:.78,last7:5.4},mT=[{key:"today",label:"Today"},{key:"yesterday",label:"Yesterday"},{key:"last7",label:"Last 7 days"}];function gT({initialUseCase:t="all",initialCamera:e=null,focusList:n=!1}){var ne,Z;const i=_e.useMemo(()=>Xg(Vg,Gg),[]),r=_e.useMemo(()=>iT(),[]),[s,o]=_e.useState(t),[a,l]=_e.useState("today"),[c,f]=_e.useState("hourly"),[h,d]=_e.useState(e),[p,y]=_e.useState(1),[S,m]=_e.useState(!1),[u,v]=_e.useState(!1),[g,M]=_e.useState(null),[P,b]=_e.useState(null),T=h?((ne=hn[h])==null?void 0:ne.name)??"":"";_e.useEffect(()=>{if(n){const W=setTimeout(()=>{var K;return(K=document.getElementById("non-compliance-list"))==null?void 0:K.scrollIntoView({behavior:"smooth",block:"start"})},80);return()=>clearTimeout(W)}},[n]),_e.useEffect(()=>{y(1)},[s,a,c,h]);const R=_e.useMemo(()=>{if(c==="daily")return r;const W=pT[a];if(W===1)return i;if(W<1)return i.slice(0,Math.round(i.length*W));const K=Math.ceil(W),oe=[];for(let Ae=0;Ae<K;Ae++)for(const ie of i)oe.push({...ie,id:ie.id+Ae*i.length});return oe.slice(0,Math.round(i.length*W))},[c,a,i,r]),L=_e.useMemo(()=>Cm(R,{useCase:s,severity:"all"}),[R,s]),x=_e.useMemo(()=>aT(L),[L]);_e.useMemo(()=>lT(L)[0]??null,[L]);const E=_e.useMemo(()=>c==="daily"?oT(L):x.peakHour?{label:fT(x.peakHour.hour),count:x.peakHour.count}:null,[L,c,x]),U=_e.useMemo(()=>{let W,K,oe;if(c==="daily"){const be=Cm(r,{useCase:s,severity:"all"});W=rT(be),K=sT(be),oe=rh.map((I,de)=>de%5===0?I:"")}else W=uT(L),K=cT(L),oe=hT.map(be=>be%3===0?be<10?"0"+be:""+be:"");const Ae=W.map(be=>({name:be.name,cells:be.cells,total:be.cells.reduce((I,de)=>I+de,0)})),ie=Ae.filter(be=>be.total>0),he=Ae.filter(be=>be.total===0).map(be=>be.name),Se=K.map(be=>be.High+be.Medium+be.Low),Ce=Math.max(1,...Se),xe=Math.max(1,...ie.flatMap(be=>be.cells)),Ve=Se.reduce((be,I)=>be+I,0),Ue=Se.length;return{matActive:ie,matIdle:he,matColTotals:Se,matMaxCol:Ce,matMaxCell:xe,matGrand:Ve,matCols:Ue,matColsArr:Array.from({length:Ue}),matLabels:oe}},[L,c,r,s]);_e.useEffect(()=>{v(!1)},[U]);const B=_e.useMemo(()=>{const W=h?L.filter(K=>K.cameraId===h):[...L];return W.sort((K,oe)=>S?K.timestamp.localeCompare(oe.timestamp):oe.timestamp.localeCompare(K.timestamp)),W},[L,h,S]),O=dT(B,p,Zs),X=O.rows,j=O.pageCount,Y=O.total,N=O.page,Q=x.total,ee=Q,we=Math.round(ee*{today:.78,yesterday:1.064,last7:.917}[a]),ze=we?(ee-we)/we*100:0,q=ze>=0,re=a==="today"?"yesterday":a==="yesterday"?"the prior day":"the previous 7 days",fe=c==="daily"?(E==null?void 0:E.label)??"—":x.peakHour==null?"—":`${String(x.peakHour.hour).padStart(2,"0")}:00–${String((x.peakHour.hour+1)%24).padStart(2,"0")}:00`,ue=(E==null?void 0:E.count)??0,Ie=Q/(c==="daily"?30:24),Re=`${ue.toLocaleString()} violations · ${(Ie?ue/Ie:0).toFixed(1)}× the ${c==="daily"?"daily":"hourly"} average`,Ge=((Z=x.worstCamera)==null?void 0:Z.name)??"—",Qe=x.worstCamera?`${x.worstCamera.count} violations · ${(x.worstCamera.count/(Q||1)*100).toFixed(0)}% of all events`:"No data",je=`${Y===0?0:(N-1)*Zs+1} – ${Math.min(N*Zs,Y)} of ${Y}`,D=W=>W/U.matMaxCol*44,jt=W=>{if(W<=0)return"zero";const K=W/U.matMaxCell;return K<=.16?"b1":K<=.33?"b2":K<=.5?"b3":K<=.68?"b4":K<=.85?"b5":"b6"},He=W=>W>0&&W/U.matMaxCell>.5,We=`152px repeat(${U.matCols}, minmax(22px,1fr)) 56px`,Pe=208+U.matCols*26,nt=W=>W.toLocaleString("en-US"),Le=W=>{const K=new Date(W),oe=K.toLocaleDateString("en-GB",{day:"2-digit",month:"short",year:"numeric"}),Ae=K.toLocaleTimeString("en-US",{hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!0});return`${oe} @ ${Ae.toLowerCase()}`},C=(W,K)=>{const oe=Math.max(0,B.findIndex(Ae=>Ae.id===W.id));M({entries:B,index:oe,tab:K})},w=W=>{const K=td(W.useCaseId).map(Ae=>Ae.camera);let oe=K.findIndex(Ae=>Ae.id===W.cameraId);oe<0&&(K.unshift(hn[W.cameraId]),oe=0),M(null),b({cameras:K,useCaseId:W.useCaseId,index:oe})},H=W=>{b(null),d(W),setTimeout(()=>{var K;return(K=document.getElementById("non-compliance-list"))==null?void 0:K.scrollIntoView({behavior:"smooth",block:"start"})},60)},J=()=>{if(L.length===0)return;const W=new Map;for(const Se of L)W.set(Se.cameraId,(W.get(Se.cameraId)??0)+1);let K=L[0].cameraId,oe=0;for(const[Se,Ce]of W)Ce>oe&&(oe=Ce,K=Se);const Ae=s==="all"?L[0].useCaseId:s,ie=td(Ae).map(Se=>Se.camera);let he=ie.findIndex(Se=>Se.id===K);he<0&&(ie.unshift(hn[K]),he=0),b({cameras:ie,useCaseId:Ae,index:he})};return _.jsxs("div",{className:"dash bg-[#eef2f7] px-6 py-6",children:[_.jsxs("div",{className:"mx-auto max-w-[1400px]",children:[_.jsxs("div",{id:"dash-top",className:"sticky top-0 z-20 mb-5 flex flex-wrap items-center gap-x-6 gap-y-3 rounded-[14px] border border-[#e6ebf2] bg-white px-4 py-3 shadow-[0_1px_2px_rgba(15,23,42,.05)]",children:[_.jsxs("div",{className:"flex items-center gap-2.5",children:[_.jsx("span",{className:"text-[12.5px] font-semibold text-[#94a3b8]",children:"Use case"}),_.jsxs("select",{className:"min-w-[200px] rounded-[9px] border border-[#d8e0ea] bg-white px-3 py-2 text-[13.5px] font-semibold text-[#0f172a]",value:s,onChange:W=>o(W.target.value),children:[_.jsx("option",{value:"all",children:"All use cases"}),Tr.map(W=>_.jsx("option",{value:W.id,children:W.name},W.id))]})]}),_.jsxs("div",{className:"flex items-center gap-2.5",children:[_.jsx("span",{className:"text-[12.5px] font-semibold text-[#94a3b8]",children:"Period"}),_.jsx("div",{className:"inline-flex gap-0.5 rounded-[9px] border border-[#e6ebf2] bg-[#f1f5f9] p-[3px]",children:mT.map(W=>_.jsx("button",{type:"button",className:`rounded-[7px] px-3.5 py-1.5 text-[13px] font-semibold transition ${a===W.key?"bg-[#0f172a] text-white shadow-sm":"text-[#475569]"}`,onClick:()=>l(W.key),children:W.label},W.key))})]}),_.jsxs("div",{className:"flex items-center gap-2.5",children:[_.jsx("span",{className:"text-[12.5px] font-semibold text-[#94a3b8]",children:"Granularity"}),_.jsxs("div",{className:"inline-flex gap-0.5 rounded-[9px] border border-[#e6ebf2] bg-[#f1f5f9] p-[3px]",children:[_.jsx("button",{type:"button",className:`rounded-[7px] px-3.5 py-1.5 text-[13px] font-semibold transition ${c==="hourly"?"bg-[#0f172a] text-white shadow-sm":"text-[#475569]"}`,onClick:()=>f("hourly"),children:"Hourly"}),_.jsx("button",{type:"button",className:`rounded-[7px] px-3.5 py-1.5 text-[13px] font-semibold transition ${c==="daily"?"bg-[#0f172a] text-white shadow-sm":"text-[#475569]"}`,onClick:()=>f("daily"),children:"Daily"})]})]}),_.jsxs("button",{type:"button",className:"ml-auto inline-flex items-center gap-2 rounded-[9px] bg-[#0f172a] px-4 py-2.5 text-[13.5px] font-bold text-white disabled:opacity-40",disabled:L.length===0,onClick:J,children:[_.jsx(Xe,{name:"camera",size:16})," Camera Analysis"]})]}),_.jsx("div",{className:"mb-2.5 ml-0.5 text-[11px] font-extrabold uppercase tracking-[0.09em] text-[#94a3b8]",children:"At a glance"}),_.jsxs("div",{className:"mb-7 grid grid-cols-2 gap-4 lg:grid-cols-3",children:[_.jsxs("div",{className:"relative overflow-hidden rounded-[14px] border border-[#e6ebf2] bg-white p-[18px] shadow-[0_1px_2px_rgba(15,23,42,.05)]",children:[_.jsx("span",{className:"absolute inset-y-0 left-0 w-1 rounded-l bg-[#dc2626]"}),_.jsxs("div",{className:"flex items-start justify-between",children:[_.jsx("span",{className:"text-[12.5px] font-bold text-[#475569]",children:"Violations"}),_.jsx("span",{className:"flex h-[34px] w-[34px] items-center justify-center rounded-[10px] bg-[#fee2e2] text-[#dc2626]",children:_.jsx(Xe,{name:"triangleAlert",size:18})})]}),_.jsx("div",{className:"mt-2.5 text-[30px] font-extrabold leading-none tracking-tight tabular-nums",children:nt(ee)}),_.jsxs("div",{className:"mt-1 text-[12.5px] tabular-nums text-[#94a3b8]",children:[nt(we)," in ",re]}),_.jsxs("div",{className:`mt-2.5 inline-flex items-center gap-1 text-[12.5px] font-bold ${q?"text-[#dc2626]":"text-[#16a34a]"}`,children:[q?"▲":"▼"," ",Math.abs(ze).toFixed(1),"% vs previous period"]})]}),_.jsxs("div",{className:"relative overflow-hidden rounded-[14px] border border-[#e6ebf2] bg-white p-[18px] shadow-[0_1px_2px_rgba(15,23,42,.05)]",children:[_.jsx("span",{className:"absolute inset-y-0 left-0 w-1 rounded-l bg-[#3b82f6]"}),_.jsxs("div",{className:"flex items-start justify-between",children:[_.jsx("span",{className:"text-[12.5px] font-bold text-[#475569]",children:"Peak risk window"}),_.jsx("span",{className:"flex h-[34px] w-[34px] items-center justify-center rounded-[10px] bg-[#dbeafe] text-[#2563eb]",children:_.jsx(Xe,{name:"clock",size:18})})]}),_.jsx("div",{className:"mt-2.5 text-[24px] font-extrabold leading-none tracking-tight tabular-nums",children:fe}),_.jsx("div",{className:"mt-1 text-[12.5px] tabular-nums text-[#94a3b8]",children:Re}),_.jsxs("div",{className:"mt-2.5 text-[12.5px] font-semibold text-[#475569]",children:["Highest exposure of the ",c==="daily"?"period":"day"]})]}),_.jsxs("div",{className:"relative overflow-hidden rounded-[14px] border border-[#e6ebf2] bg-white p-[18px] shadow-[0_1px_2px_rgba(15,23,42,.05)]",children:[_.jsx("span",{className:"absolute inset-y-0 left-0 w-1 rounded-l bg-[#f59e0b]"}),_.jsxs("div",{className:"flex items-start justify-between",children:[_.jsx("span",{className:"text-[12.5px] font-bold text-[#475569]",children:"Top offending zone"}),_.jsx("span",{className:"flex h-[34px] w-[34px] items-center justify-center rounded-[10px] bg-[#fef3c7] text-[#b45309]",children:_.jsx(Xe,{name:"pin",size:18})})]}),_.jsx("div",{className:"mt-2.5 truncate text-[22px] font-extrabold leading-tight tracking-tight",children:Ge}),_.jsx("div",{className:"mt-1 text-[12.5px] tabular-nums text-[#94a3b8]",children:Qe})]})]}),_.jsx("div",{className:"mb-2.5 ml-0.5 text-[11px] font-extrabold uppercase tracking-[0.09em] text-[#94a3b8]",children:"Where & when"}),_.jsxs("div",{className:"mb-7 rounded-[14px] border border-[#e6ebf2] bg-white p-5 shadow-[0_1px_2px_rgba(15,23,42,.05)]",children:[_.jsx("div",{className:"mb-4 flex items-start justify-between gap-4",children:_.jsxs("div",{children:[_.jsxs("div",{className:"flex items-center gap-2 text-[16px] font-extrabold tracking-tight text-[#0f172a]",children:[_.jsx(Xe,{name:"grid",size:16})," Violation density — camera × ",c==="daily"?"day":"hour"]}),_.jsxs("div",{className:"mt-0.5 text-[12.5px] text-[#94a3b8]",children:["Bar height is total violations that ",c==="daily"?"day":"hour","; the grid shows which camera is driving it."]})]})}),_.jsx("div",{className:"matrix-scroll",children:_.jsxs("div",{className:"matrix",style:{gridTemplateColumns:We,minWidth:Pe},children:[_.jsx("div",{}),U.matColTotals.map((W,K)=>_.jsx("div",{className:"sevcell",title:`${W} violations`,children:_.jsx("span",{style:{height:D(W),background:"#94a3b8"}})},`c${K}`)),_.jsx("div",{className:"m-total-head",children:nt(U.matGrand)}),_.jsx("div",{}),U.matLabels.map((W,K)=>_.jsx("div",{className:"hour-axis",children:W},`l${K}`)),_.jsx("div",{className:"hour-axis",style:{justifyContent:"center",fontWeight:800},children:"Σ"}),U.matActive.map((W,K)=>_.jsxs("div",{style:{display:"contents"},children:[_.jsxs("div",{className:"cam-label",children:[W.name,_.jsx("small",{children:K===0?"top offender":"active"})]}),W.cells.map((oe,Ae)=>_.jsx("div",{className:`cell ${jt(oe)}`,children:He(oe)&&_.jsx("span",{className:"cell-v",children:oe})},Ae)),_.jsx("div",{className:"rowtot",children:W.total})]},`r${K}`)),u&&U.matIdle.map((W,K)=>_.jsxs("div",{style:{display:"contents"},children:[_.jsxs("div",{className:"cam-label idle",children:[W,_.jsx("small",{children:"no events"})]}),U.matColsArr.map((oe,Ae)=>_.jsx("div",{className:"cell zero"},Ae)),_.jsx("div",{className:"rowtot idle",children:"0"})]},`i${K}`))]})}),_.jsxs("div",{className:"mt-4 flex flex-wrap items-center justify-between gap-3",children:[_.jsxs("div",{className:"text-[12px] font-semibold text-[#94a3b8]",children:["Bar height = violations per ",c==="daily"?"day":"hour"]}),U.matIdle.length>0&&_.jsx("button",{type:"button",className:"text-[12.5px] font-bold text-[#2563eb]",onClick:()=>v(W=>!W),children:u?"Hide idle cameras ⌃":`Show all cameras (${U.matIdle.length} idle) ⌄`}),_.jsxs("div",{className:"flex items-center gap-2 text-[11.5px] font-semibold text-[#94a3b8]",children:["Fewer",_.jsxs("span",{className:"flex gap-[3px]",children:[_.jsx("span",{className:"h-3 w-5 rounded-sm",style:{background:"var(--h1)"}}),_.jsx("span",{className:"h-3 w-5 rounded-sm",style:{background:"var(--h2)"}}),_.jsx("span",{className:"h-3 w-5 rounded-sm",style:{background:"var(--h3)"}}),_.jsx("span",{className:"h-3 w-5 rounded-sm",style:{background:"var(--h4)"}}),_.jsx("span",{className:"h-3 w-5 rounded-sm",style:{background:"var(--h5)"}}),_.jsx("span",{className:"h-3 w-5 rounded-sm",style:{background:"var(--h6)"}})]}),"More"]})]})]}),_.jsx("div",{className:"mb-2.5 ml-0.5 text-[11px] font-extrabold uppercase tracking-[0.09em] text-[#94a3b8]",children:"Proof"}),_.jsxs("div",{id:"non-compliance-list",className:"scroll-mt-24 rounded-[14px] border border-[#e6ebf2] bg-white p-5 shadow-[0_1px_2px_rgba(15,23,42,.05)]",children:[_.jsxs("div",{className:"flex items-center justify-between gap-3",children:[_.jsxs("div",{className:"flex items-center gap-2 text-[16px] font-extrabold tracking-tight text-[#0f172a]",children:[_.jsx(Xe,{name:"camera",size:16})," Evidence log"]}),h&&_.jsxs("span",{className:"inline-flex items-center gap-1.5 rounded-full bg-[#eef2ff] px-2.5 py-1 text-[12px] font-medium text-[#3730a3]",children:["Camera: ",T,_.jsx("button",{type:"button",className:"text-[#6366f1] hover:text-[#3730a3]",onClick:()=>d(null),"aria-label":"Clear camera filter",children:"✕"})]})]}),_.jsxs("div",{className:"mt-3 flex items-center gap-3",children:[_.jsxs("div",{className:"relative flex-1",children:[_.jsx("span",{className:"pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-[#94a3b8]",children:_.jsx(Xe,{name:"search",size:16})}),_.jsx("input",{className:"w-full rounded-[9px] border border-[#d8e0ea] bg-[#f8fafc] py-2 pl-9 pr-3 text-[13px] text-[#0f172a] placeholder:text-[#94a3b8]",placeholder:"Search evidence by camera name",value:T,readOnly:!0})]}),_.jsxs("button",{type:"button",className:"inline-flex items-center gap-2 rounded-[9px] border border-[#d8e0ea] bg-white px-4 py-2 text-[13px] font-semibold text-[#0f172a]",children:[_.jsx(Xe,{name:"download",size:15})," Export"]})]}),Y===0&&_.jsx("div",{className:"py-10 text-center text-[13px] text-[#64748b]",children:"No evidence matching this filter"}),Y>0&&_.jsxs("table",{className:"mt-3 w-full text-left",children:[_.jsx("thead",{className:"border-b border-[#e6ebf2] text-[12px] text-[#94a3b8]",children:_.jsxs("tr",{children:[_.jsx("th",{className:"py-2 pr-2 font-semibold",children:"Sr No"}),_.jsx("th",{className:"py-2 pr-2 font-semibold",children:"Camera Name"}),_.jsx("th",{className:"py-2 pr-2 font-semibold",children:"Use Case"}),_.jsx("th",{className:"py-2 pr-2 font-semibold",children:"Message"}),_.jsxs("th",{className:"cursor-pointer select-none py-2 pr-2 font-semibold",onClick:()=>m(W=>!W),children:["Time ",S?"↑":"↓"]}),_.jsx("th",{className:"py-2 pr-2 font-semibold",children:"Image"}),_.jsx("th",{className:"py-2 pr-2 font-semibold",children:"Video"})]})}),_.jsx("tbody",{className:"text-[13px] text-[#0f172a]",children:X.map((W,K)=>_.jsxs("tr",{className:"border-b border-[#f1f5f9] hover:bg-[#f8fafc]",children:[_.jsx("td",{className:"py-2 pr-2 tabular-nums text-[#64748b]",children:(N-1)*Zs+K+1}),_.jsx("td",{className:"py-2 pr-2 font-medium",children:hn[W.cameraId].name}),_.jsx("td",{className:"py-2 pr-2",children:_.jsx(K2,{label:Ui[W.useCaseId].name,color:Ui[W.useCaseId].color})}),_.jsx("td",{className:"py-2 pr-2 text-[#475569]",children:W.message}),_.jsx("td",{className:"py-2 pr-2 whitespace-nowrap text-[#475569]",children:Le(W.timestamp)}),_.jsx("td",{className:"py-2 pr-2",children:_.jsx("button",{type:"button",className:"block overflow-hidden rounded-md ring-1 ring-transparent transition hover:ring-2 hover:ring-[#3b82f6]",onClick:()=>C(W,"photo"),title:"View photo evidence",children:_.jsx(Am,{scene:hn[W.cameraId].scene,bbox:W.bbox,color:Ui[W.useCaseId].color,width:72,height:54})})}),_.jsx("td",{className:"py-2 pr-2",children:_.jsx("button",{type:"button",className:"block overflow-hidden rounded-md ring-1 ring-transparent transition hover:ring-2 hover:ring-[#3b82f6]",onClick:()=>C(W,"video"),title:"View video evidence",children:_.jsx(Am,{scene:hn[W.cameraId].scene,bbox:W.bbox,color:Ui[W.useCaseId].color,showPlay:!0,width:72,height:54})})})]},W.id))})]}),Y>0&&_.jsxs("div",{className:"mt-3 flex items-center justify-end gap-4 text-[12px] text-[#64748b]",children:[_.jsxs("span",{children:["Items per page: ",Zs]}),_.jsx("span",{children:je}),_.jsxs("div",{className:"flex items-center gap-1",children:[_.jsx("button",{type:"button",className:"rounded px-2 py-1 hover:bg-[#f1f5f9] disabled:opacity-40",disabled:N===1,onClick:()=>y(1),children:"«"}),_.jsx("button",{type:"button",className:"rounded px-2 py-1 hover:bg-[#f1f5f9] disabled:opacity-40",disabled:N===1,onClick:()=>y(N-1),children:"‹"}),_.jsxs("span",{className:"tabular-nums",children:[N," / ",j]}),_.jsx("button",{type:"button",className:"rounded px-2 py-1 hover:bg-[#f1f5f9] disabled:opacity-40",disabled:N===j,onClick:()=>y(N+1),children:"›"}),_.jsx("button",{type:"button",className:"rounded px-2 py-1 hover:bg-[#f1f5f9] disabled:opacity-40",disabled:N===j,onClick:()=>y(j),children:"»"})]})]})]})]}),g&&_.jsx(kf,{entries:g.entries,index:g.index,tab:g.tab,onClose:()=>M(null),onViewOnStream:w}),P&&_.jsx(Nv,{cameras:P.cameras,useCaseId:P.useCaseId,index:P.index,onClose:()=>b(null),onViewViolations:H})]})}function vT(){const[t,e]=_e.useState("home"),[n,i]=_e.useState("safety_gear"),[r,s]=_e.useState("all"),[o,a]=_e.useState(null),[l,c]=_e.useState(!1),[f,h]=_e.useState(!1),d=t==="plant"?"Plant Operations Map":t==="usecase"?Ui[n].name:"Vision Dashboard",p=()=>e("home"),y=()=>e("plant"),S=(g,M)=>{i(g),h(M),e("usecase")},m=(g="all")=>{s(g),a(null),c(!1),e("dashboard")},u=g=>{s(n),a(g??null),c(!0),e("dashboard")},v=()=>{t==="dashboard"?S(n,f):t==="usecase"&&f?y():p()};return _.jsxs(_.Fragment,{children:[t!=="home"&&_.jsx(wy,{title:d,showBack:!0,onBack:v}),t==="home"&&_.jsx(X2,{onShowDemo:y,onSelectUseCase:g=>S(g,!1)}),t==="plant"&&_.jsx("div",{className:"h-[calc(100vh-57px)] w-full",children:_.jsx(Y2,{onSelectUseCase:g=>S(g,!0)})}),t==="usecase"&&_.jsx("div",{className:"h-[calc(100vh-57px)] w-full",children:_.jsx(q2,{useCaseId:n,onViewDashboard:()=>m(n),onViewViolations:g=>u(g)})}),t==="dashboard"&&_.jsx(gT,{initialUseCase:r,initialCamera:o,focusList:l})]})}lu.createRoot(document.getElementById("root")).render(_.jsx(vT,{}));
