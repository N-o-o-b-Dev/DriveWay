const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/Dashboard-CqXmQl2t.js","assets/Card-aWMVJlsh.js","assets/clock-DElpx7Wp.js","assets/Cars-KVfoCloS.js","assets/EditCarDrawer-C0MHBcJP.js","assets/search-D3Ys1Hf0.js","assets/map-pin-DubPdJvL.js","assets/calendar-B6Kxq4dO.js","assets/CarDetails-B-6ep5jc.js","assets/EditMaintenanceDrawer-gWlFMvej.js","assets/EditTransactionDrawer-0jkdp8E_.js","assets/Table-D_po6nZo.js","assets/react-pdf.browser-Bu-Ac-AW.js","assets/lock-B9OlmGNY.js","assets/square-pen-6zai-Pt3.js","assets/Customers-BoWKKo2i.js","assets/PendingTransactionsDrawer-CnAxnfnp.js","assets/arrow-up-right-DQYGrcTn.js","assets/store-CMaso4OH.js","assets/user-DTuM9DXv.js","assets/trash-2-BunDUYmv.js","assets/CustomerDetailsPage-BaRL_ZsD.js","assets/arrow-left-LnmviQ8u.js","assets/mail-CfV16JzA.js","assets/phone-C9LQkl-6.js","assets/Dealers-gRshNCl7.js","assets/DealerDetailsPage-BCWjmR9e.js","assets/Transactions-CBBrNqL7.js","assets/Financials-ChzQgp9f.js","assets/Maintenance-CDo-ATo2.js","assets/arrow-right-CsOetT9J.js","assets/Register-DaVs11tm.js","assets/Login-D08UE2-K.js","assets/Signup-D19HBosv.js","assets/BillingDashboard-D_E31HTv.js","assets/CreateInvoice-ZfD3zYnP.js","assets/InvoicePDF-QkZYuMnk.js","assets/save-DLBSUPNF.js","assets/BillingHistory-D0Txedib.js","assets/BillingSettings-RCGpFGwM.js"])))=>i.map(i=>d[i]);
function sC(t,e){for(var n=0;n<e.length;n++){const s=e[n];if(typeof s!="string"&&!Array.isArray(s)){for(const o in s)if(o!=="default"&&!(o in t)){const l=Object.getOwnPropertyDescriptor(s,o);l&&Object.defineProperty(t,o,l.get?l:{enumerable:!0,get:()=>s[o]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function n(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(o){if(o.ep)return;o.ep=!0;const l=n(o);fetch(o.href,l)}})();var kD=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Xy(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function SD(t){if(Object.prototype.hasOwnProperty.call(t,"__esModule"))return t;var e=t.default;if(typeof e=="function"){var n=function s(){return this instanceof s?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};n.prototype=e.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(t).forEach(function(s){var o=Object.getOwnPropertyDescriptor(t,s);Object.defineProperty(n,s,o.get?o:{enumerable:!0,get:function(){return t[s]}})}),n}var Kc={exports:{}},Js={},Yc={exports:{}},he={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rg;function oC(){if(rg)return he;rg=1;var t=Symbol.for("react.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),c=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),_=Symbol.iterator;function v(k){return k===null||typeof k!="object"?null:(k=_&&k[_]||k["@@iterator"],typeof k=="function"?k:null)}var I={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},N=Object.assign,x={};function A(k,D,Q){this.props=k,this.context=D,this.refs=x,this.updater=Q||I}A.prototype.isReactComponent={},A.prototype.setState=function(k,D){if(typeof k!="object"&&typeof k!="function"&&k!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,k,D,"setState")},A.prototype.forceUpdate=function(k){this.updater.enqueueForceUpdate(this,k,"forceUpdate")};function W(){}W.prototype=A.prototype;function V(k,D,Q){this.props=k,this.context=D,this.refs=x,this.updater=Q||I}var j=V.prototype=new W;j.constructor=V,N(j,A.prototype),j.isPureReactComponent=!0;var Z=Array.isArray,ce=Object.prototype.hasOwnProperty,ye={current:null},_e={key:!0,ref:!0,__self:!0,__source:!0};function Y(k,D,Q){var ne,ee={},ue=null,te=null;if(D!=null)for(ne in D.ref!==void 0&&(te=D.ref),D.key!==void 0&&(ue=""+D.key),D)ce.call(D,ne)&&!_e.hasOwnProperty(ne)&&(ee[ne]=D[ne]);var ge=arguments.length-2;if(ge===1)ee.children=Q;else if(1<ge){for(var ke=Array(ge),Ge=0;Ge<ge;Ge++)ke[Ge]=arguments[Ge+2];ee.children=ke}if(k&&k.defaultProps)for(ne in ge=k.defaultProps,ge)ee[ne]===void 0&&(ee[ne]=ge[ne]);return{$$typeof:t,type:k,key:ue,ref:te,props:ee,_owner:ye.current}}function we(k,D){return{$$typeof:t,type:k.type,key:D,ref:k.ref,props:k.props,_owner:k._owner}}function Be(k){return typeof k=="object"&&k!==null&&k.$$typeof===t}function wt(k){var D={"=":"=0",":":"=2"};return"$"+k.replace(/[=:]/g,function(Q){return D[Q]})}var ut=/\/+/g;function et(k,D){return typeof k=="object"&&k!==null&&k.key!=null?wt(""+k.key):D.toString(36)}function ct(k,D,Q,ne,ee){var ue=typeof k;(ue==="undefined"||ue==="boolean")&&(k=null);var te=!1;if(k===null)te=!0;else switch(ue){case"string":case"number":te=!0;break;case"object":switch(k.$$typeof){case t:case e:te=!0}}if(te)return te=k,ee=ee(te),k=ne===""?"."+et(te,0):ne,Z(ee)?(Q="",k!=null&&(Q=k.replace(ut,"$&/")+"/"),ct(ee,D,Q,"",function(Ge){return Ge})):ee!=null&&(Be(ee)&&(ee=we(ee,Q+(!ee.key||te&&te.key===ee.key?"":(""+ee.key).replace(ut,"$&/")+"/")+k)),D.push(ee)),1;if(te=0,ne=ne===""?".":ne+":",Z(k))for(var ge=0;ge<k.length;ge++){ue=k[ge];var ke=ne+et(ue,ge);te+=ct(ue,D,Q,ke,ee)}else if(ke=v(k),typeof ke=="function")for(k=ke.call(k),ge=0;!(ue=k.next()).done;)ue=ue.value,ke=ne+et(ue,ge++),te+=ct(ue,D,Q,ke,ee);else if(ue==="object")throw D=String(k),Error("Objects are not valid as a React child (found: "+(D==="[object Object]"?"object with keys {"+Object.keys(k).join(", ")+"}":D)+"). If you meant to render a collection of children, use an array instead.");return te}function Ke(k,D,Q){if(k==null)return k;var ne=[],ee=0;return ct(k,ne,"","",function(ue){return D.call(Q,ue,ee++)}),ne}function Re(k){if(k._status===-1){var D=k._result;D=D(),D.then(function(Q){(k._status===0||k._status===-1)&&(k._status=1,k._result=Q)},function(Q){(k._status===0||k._status===-1)&&(k._status=2,k._result=Q)}),k._status===-1&&(k._status=0,k._result=D)}if(k._status===1)return k._result.default;throw k._result}var Ee={current:null},O={transition:null},re={ReactCurrentDispatcher:Ee,ReactCurrentBatchConfig:O,ReactCurrentOwner:ye};function L(){throw Error("act(...) is not supported in production builds of React.")}return he.Children={map:Ke,forEach:function(k,D,Q){Ke(k,function(){D.apply(this,arguments)},Q)},count:function(k){var D=0;return Ke(k,function(){D++}),D},toArray:function(k){return Ke(k,function(D){return D})||[]},only:function(k){if(!Be(k))throw Error("React.Children.only expected to receive a single React element child.");return k}},he.Component=A,he.Fragment=n,he.Profiler=o,he.PureComponent=V,he.StrictMode=s,he.Suspense=f,he.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=re,he.act=L,he.cloneElement=function(k,D,Q){if(k==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+k+".");var ne=N({},k.props),ee=k.key,ue=k.ref,te=k._owner;if(D!=null){if(D.ref!==void 0&&(ue=D.ref,te=ye.current),D.key!==void 0&&(ee=""+D.key),k.type&&k.type.defaultProps)var ge=k.type.defaultProps;for(ke in D)ce.call(D,ke)&&!_e.hasOwnProperty(ke)&&(ne[ke]=D[ke]===void 0&&ge!==void 0?ge[ke]:D[ke])}var ke=arguments.length-2;if(ke===1)ne.children=Q;else if(1<ke){ge=Array(ke);for(var Ge=0;Ge<ke;Ge++)ge[Ge]=arguments[Ge+2];ne.children=ge}return{$$typeof:t,type:k.type,key:ee,ref:ue,props:ne,_owner:te}},he.createContext=function(k){return k={$$typeof:c,_currentValue:k,_currentValue2:k,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},k.Provider={$$typeof:l,_context:k},k.Consumer=k},he.createElement=Y,he.createFactory=function(k){var D=Y.bind(null,k);return D.type=k,D},he.createRef=function(){return{current:null}},he.forwardRef=function(k){return{$$typeof:h,render:k}},he.isValidElement=Be,he.lazy=function(k){return{$$typeof:y,_payload:{_status:-1,_result:k},_init:Re}},he.memo=function(k,D){return{$$typeof:m,type:k,compare:D===void 0?null:D}},he.startTransition=function(k){var D=O.transition;O.transition={};try{k()}finally{O.transition=D}},he.unstable_act=L,he.useCallback=function(k,D){return Ee.current.useCallback(k,D)},he.useContext=function(k){return Ee.current.useContext(k)},he.useDebugValue=function(){},he.useDeferredValue=function(k){return Ee.current.useDeferredValue(k)},he.useEffect=function(k,D){return Ee.current.useEffect(k,D)},he.useId=function(){return Ee.current.useId()},he.useImperativeHandle=function(k,D,Q){return Ee.current.useImperativeHandle(k,D,Q)},he.useInsertionEffect=function(k,D){return Ee.current.useInsertionEffect(k,D)},he.useLayoutEffect=function(k,D){return Ee.current.useLayoutEffect(k,D)},he.useMemo=function(k,D){return Ee.current.useMemo(k,D)},he.useReducer=function(k,D,Q){return Ee.current.useReducer(k,D,Q)},he.useRef=function(k){return Ee.current.useRef(k)},he.useState=function(k){return Ee.current.useState(k)},he.useSyncExternalStore=function(k,D,Q){return Ee.current.useSyncExternalStore(k,D,Q)},he.useTransition=function(){return Ee.current.useTransition()},he.version="18.3.1",he}var ig;function Kd(){return ig||(ig=1,Yc.exports=oC()),Yc.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sg;function aC(){if(sg)return Js;sg=1;var t=Kd(),e=Symbol.for("react.element"),n=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,o=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(h,f,m){var y,_={},v=null,I=null;m!==void 0&&(v=""+m),f.key!==void 0&&(v=""+f.key),f.ref!==void 0&&(I=f.ref);for(y in f)s.call(f,y)&&!l.hasOwnProperty(y)&&(_[y]=f[y]);if(h&&h.defaultProps)for(y in f=h.defaultProps,f)_[y]===void 0&&(_[y]=f[y]);return{$$typeof:e,type:h,key:v,ref:I,props:_,_owner:o.current}}return Js.Fragment=n,Js.jsx=c,Js.jsxs=c,Js}var og;function lC(){return og||(og=1,Kc.exports=aC()),Kc.exports}var E=lC(),T=Kd();const Yd=Xy(T),ID=sC({__proto__:null,default:Yd},[T]);var Ha={},Qc={exports:{}},At={},Jc={exports:{}},Xc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ag;function uC(){return ag||(ag=1,(function(t){function e(O,re){var L=O.length;O.push(re);e:for(;0<L;){var k=L-1>>>1,D=O[k];if(0<o(D,re))O[k]=re,O[L]=D,L=k;else break e}}function n(O){return O.length===0?null:O[0]}function s(O){if(O.length===0)return null;var re=O[0],L=O.pop();if(L!==re){O[0]=L;e:for(var k=0,D=O.length,Q=D>>>1;k<Q;){var ne=2*(k+1)-1,ee=O[ne],ue=ne+1,te=O[ue];if(0>o(ee,L))ue<D&&0>o(te,ee)?(O[k]=te,O[ue]=L,k=ue):(O[k]=ee,O[ne]=L,k=ne);else if(ue<D&&0>o(te,L))O[k]=te,O[ue]=L,k=ue;else break e}}return re}function o(O,re){var L=O.sortIndex-re.sortIndex;return L!==0?L:O.id-re.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;t.unstable_now=function(){return l.now()}}else{var c=Date,h=c.now();t.unstable_now=function(){return c.now()-h}}var f=[],m=[],y=1,_=null,v=3,I=!1,N=!1,x=!1,A=typeof setTimeout=="function"?setTimeout:null,W=typeof clearTimeout=="function"?clearTimeout:null,V=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function j(O){for(var re=n(m);re!==null;){if(re.callback===null)s(m);else if(re.startTime<=O)s(m),re.sortIndex=re.expirationTime,e(f,re);else break;re=n(m)}}function Z(O){if(x=!1,j(O),!N)if(n(f)!==null)N=!0,Re(ce);else{var re=n(m);re!==null&&Ee(Z,re.startTime-O)}}function ce(O,re){N=!1,x&&(x=!1,W(Y),Y=-1),I=!0;var L=v;try{for(j(re),_=n(f);_!==null&&(!(_.expirationTime>re)||O&&!wt());){var k=_.callback;if(typeof k=="function"){_.callback=null,v=_.priorityLevel;var D=k(_.expirationTime<=re);re=t.unstable_now(),typeof D=="function"?_.callback=D:_===n(f)&&s(f),j(re)}else s(f);_=n(f)}if(_!==null)var Q=!0;else{var ne=n(m);ne!==null&&Ee(Z,ne.startTime-re),Q=!1}return Q}finally{_=null,v=L,I=!1}}var ye=!1,_e=null,Y=-1,we=5,Be=-1;function wt(){return!(t.unstable_now()-Be<we)}function ut(){if(_e!==null){var O=t.unstable_now();Be=O;var re=!0;try{re=_e(!0,O)}finally{re?et():(ye=!1,_e=null)}}else ye=!1}var et;if(typeof V=="function")et=function(){V(ut)};else if(typeof MessageChannel<"u"){var ct=new MessageChannel,Ke=ct.port2;ct.port1.onmessage=ut,et=function(){Ke.postMessage(null)}}else et=function(){A(ut,0)};function Re(O){_e=O,ye||(ye=!0,et())}function Ee(O,re){Y=A(function(){O(t.unstable_now())},re)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(O){O.callback=null},t.unstable_continueExecution=function(){N||I||(N=!0,Re(ce))},t.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):we=0<O?Math.floor(1e3/O):5},t.unstable_getCurrentPriorityLevel=function(){return v},t.unstable_getFirstCallbackNode=function(){return n(f)},t.unstable_next=function(O){switch(v){case 1:case 2:case 3:var re=3;break;default:re=v}var L=v;v=re;try{return O()}finally{v=L}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(O,re){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var L=v;v=O;try{return re()}finally{v=L}},t.unstable_scheduleCallback=function(O,re,L){var k=t.unstable_now();switch(typeof L=="object"&&L!==null?(L=L.delay,L=typeof L=="number"&&0<L?k+L:k):L=k,O){case 1:var D=-1;break;case 2:D=250;break;case 5:D=1073741823;break;case 4:D=1e4;break;default:D=5e3}return D=L+D,O={id:y++,callback:re,priorityLevel:O,startTime:L,expirationTime:D,sortIndex:-1},L>k?(O.sortIndex=L,e(m,O),n(f)===null&&O===n(m)&&(x?(W(Y),Y=-1):x=!0,Ee(Z,L-k))):(O.sortIndex=D,e(f,O),N||I||(N=!0,Re(ce))),O},t.unstable_shouldYield=wt,t.unstable_wrapCallback=function(O){var re=v;return function(){var L=v;v=re;try{return O.apply(this,arguments)}finally{v=L}}}})(Xc)),Xc}var lg;function cC(){return lg||(lg=1,Jc.exports=uC()),Jc.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ug;function dC(){if(ug)return At;ug=1;var t=Kd(),e=cC();function n(r){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+r,a=1;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+r+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,o={};function l(r,i){c(r,i),c(r+"Capture",i)}function c(r,i){for(o[r]=i,r=0;r<i.length;r++)s.add(i[r])}var h=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),f=Object.prototype.hasOwnProperty,m=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,y={},_={};function v(r){return f.call(_,r)?!0:f.call(y,r)?!1:m.test(r)?_[r]=!0:(y[r]=!0,!1)}function I(r,i,a,u){if(a!==null&&a.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return u?!1:a!==null?!a.acceptsBooleans:(r=r.toLowerCase().slice(0,5),r!=="data-"&&r!=="aria-");default:return!1}}function N(r,i,a,u){if(i===null||typeof i>"u"||I(r,i,a,u))return!0;if(u)return!1;if(a!==null)switch(a.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function x(r,i,a,u,d,p,g){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=u,this.attributeNamespace=d,this.mustUseProperty=a,this.propertyName=r,this.type=i,this.sanitizeURL=p,this.removeEmptyString=g}var A={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(r){A[r]=new x(r,0,!1,r,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(r){var i=r[0];A[i]=new x(i,1,!1,r[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(r){A[r]=new x(r,2,!1,r.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(r){A[r]=new x(r,2,!1,r,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(r){A[r]=new x(r,3,!1,r.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(r){A[r]=new x(r,3,!0,r,null,!1,!1)}),["capture","download"].forEach(function(r){A[r]=new x(r,4,!1,r,null,!1,!1)}),["cols","rows","size","span"].forEach(function(r){A[r]=new x(r,6,!1,r,null,!1,!1)}),["rowSpan","start"].forEach(function(r){A[r]=new x(r,5,!1,r.toLowerCase(),null,!1,!1)});var W=/[\-:]([a-z])/g;function V(r){return r[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(r){var i=r.replace(W,V);A[i]=new x(i,1,!1,r,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(r){var i=r.replace(W,V);A[i]=new x(i,1,!1,r,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(r){var i=r.replace(W,V);A[i]=new x(i,1,!1,r,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(r){A[r]=new x(r,1,!1,r.toLowerCase(),null,!1,!1)}),A.xlinkHref=new x("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(r){A[r]=new x(r,1,!1,r.toLowerCase(),null,!0,!0)});function j(r,i,a,u){var d=A.hasOwnProperty(i)?A[i]:null;(d!==null?d.type!==0:u||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(N(i,a,d,u)&&(a=null),u||d===null?v(i)&&(a===null?r.removeAttribute(i):r.setAttribute(i,""+a)):d.mustUseProperty?r[d.propertyName]=a===null?d.type===3?!1:"":a:(i=d.attributeName,u=d.attributeNamespace,a===null?r.removeAttribute(i):(d=d.type,a=d===3||d===4&&a===!0?"":""+a,u?r.setAttributeNS(u,i,a):r.setAttribute(i,a))))}var Z=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ce=Symbol.for("react.element"),ye=Symbol.for("react.portal"),_e=Symbol.for("react.fragment"),Y=Symbol.for("react.strict_mode"),we=Symbol.for("react.profiler"),Be=Symbol.for("react.provider"),wt=Symbol.for("react.context"),ut=Symbol.for("react.forward_ref"),et=Symbol.for("react.suspense"),ct=Symbol.for("react.suspense_list"),Ke=Symbol.for("react.memo"),Re=Symbol.for("react.lazy"),Ee=Symbol.for("react.offscreen"),O=Symbol.iterator;function re(r){return r===null||typeof r!="object"?null:(r=O&&r[O]||r["@@iterator"],typeof r=="function"?r:null)}var L=Object.assign,k;function D(r){if(k===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);k=i&&i[1]||""}return`
`+k+r}var Q=!1;function ne(r,i){if(!r||Q)return"";Q=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(P){var u=P}Reflect.construct(r,[],i)}else{try{i.call()}catch(P){u=P}r.call(i.prototype)}else{try{throw Error()}catch(P){u=P}r()}}catch(P){if(P&&u&&typeof P.stack=="string"){for(var d=P.stack.split(`
`),p=u.stack.split(`
`),g=d.length-1,w=p.length-1;1<=g&&0<=w&&d[g]!==p[w];)w--;for(;1<=g&&0<=w;g--,w--)if(d[g]!==p[w]){if(g!==1||w!==1)do if(g--,w--,0>w||d[g]!==p[w]){var C=`
`+d[g].replace(" at new "," at ");return r.displayName&&C.includes("<anonymous>")&&(C=C.replace("<anonymous>",r.displayName)),C}while(1<=g&&0<=w);break}}}finally{Q=!1,Error.prepareStackTrace=a}return(r=r?r.displayName||r.name:"")?D(r):""}function ee(r){switch(r.tag){case 5:return D(r.type);case 16:return D("Lazy");case 13:return D("Suspense");case 19:return D("SuspenseList");case 0:case 2:case 15:return r=ne(r.type,!1),r;case 11:return r=ne(r.type.render,!1),r;case 1:return r=ne(r.type,!0),r;default:return""}}function ue(r){if(r==null)return null;if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r;switch(r){case _e:return"Fragment";case ye:return"Portal";case we:return"Profiler";case Y:return"StrictMode";case et:return"Suspense";case ct:return"SuspenseList"}if(typeof r=="object")switch(r.$$typeof){case wt:return(r.displayName||"Context")+".Consumer";case Be:return(r._context.displayName||"Context")+".Provider";case ut:var i=r.render;return r=r.displayName,r||(r=i.displayName||i.name||"",r=r!==""?"ForwardRef("+r+")":"ForwardRef"),r;case Ke:return i=r.displayName||null,i!==null?i:ue(r.type)||"Memo";case Re:i=r._payload,r=r._init;try{return ue(r(i))}catch{}}return null}function te(r){var i=r.type;switch(r.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return r=i.render,r=r.displayName||r.name||"",i.displayName||(r!==""?"ForwardRef("+r+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ue(i);case 8:return i===Y?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function ge(r){switch(typeof r){case"boolean":case"number":case"string":case"undefined":return r;case"object":return r;default:return""}}function ke(r){var i=r.type;return(r=r.nodeName)&&r.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Ge(r){var i=ke(r)?"checked":"value",a=Object.getOwnPropertyDescriptor(r.constructor.prototype,i),u=""+r[i];if(!r.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var d=a.get,p=a.set;return Object.defineProperty(r,i,{configurable:!0,get:function(){return d.call(this)},set:function(g){u=""+g,p.call(this,g)}}),Object.defineProperty(r,i,{enumerable:a.enumerable}),{getValue:function(){return u},setValue:function(g){u=""+g},stopTracking:function(){r._valueTracker=null,delete r[i]}}}}function fn(r){r._valueTracker||(r._valueTracker=Ge(r))}function In(r){if(!r)return!1;var i=r._valueTracker;if(!i)return!0;var a=i.getValue(),u="";return r&&(u=ke(r)?r.checked?"true":"false":r.value),r=u,r!==a?(i.setValue(r),!0):!1}function oi(r){if(r=r||(typeof document<"u"?document:void 0),typeof r>"u")return null;try{return r.activeElement||r.body}catch{return r.body}}function Et(r,i){var a=i.checked;return L({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??r._wrapperState.initialChecked})}function cf(r,i){var a=i.defaultValue==null?"":i.defaultValue,u=i.checked!=null?i.checked:i.defaultChecked;a=ge(i.value!=null?i.value:a),r._wrapperState={initialChecked:u,initialValue:a,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function df(r,i){i=i.checked,i!=null&&j(r,"checked",i,!1)}function nu(r,i){df(r,i);var a=ge(i.value),u=i.type;if(a!=null)u==="number"?(a===0&&r.value===""||r.value!=a)&&(r.value=""+a):r.value!==""+a&&(r.value=""+a);else if(u==="submit"||u==="reset"){r.removeAttribute("value");return}i.hasOwnProperty("value")?ru(r,i.type,a):i.hasOwnProperty("defaultValue")&&ru(r,i.type,ge(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(r.defaultChecked=!!i.defaultChecked)}function hf(r,i,a){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var u=i.type;if(!(u!=="submit"&&u!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+r._wrapperState.initialValue,a||i===r.value||(r.value=i),r.defaultValue=i}a=r.name,a!==""&&(r.name=""),r.defaultChecked=!!r._wrapperState.initialChecked,a!==""&&(r.name=a)}function ru(r,i,a){(i!=="number"||oi(r.ownerDocument)!==r)&&(a==null?r.defaultValue=""+r._wrapperState.initialValue:r.defaultValue!==""+a&&(r.defaultValue=""+a))}var hs=Array.isArray;function ai(r,i,a,u){if(r=r.options,i){i={};for(var d=0;d<a.length;d++)i["$"+a[d]]=!0;for(a=0;a<r.length;a++)d=i.hasOwnProperty("$"+r[a].value),r[a].selected!==d&&(r[a].selected=d),d&&u&&(r[a].defaultSelected=!0)}else{for(a=""+ge(a),i=null,d=0;d<r.length;d++){if(r[d].value===a){r[d].selected=!0,u&&(r[d].defaultSelected=!0);return}i!==null||r[d].disabled||(i=r[d])}i!==null&&(i.selected=!0)}}function iu(r,i){if(i.dangerouslySetInnerHTML!=null)throw Error(n(91));return L({},i,{value:void 0,defaultValue:void 0,children:""+r._wrapperState.initialValue})}function ff(r,i){var a=i.value;if(a==null){if(a=i.children,i=i.defaultValue,a!=null){if(i!=null)throw Error(n(92));if(hs(a)){if(1<a.length)throw Error(n(93));a=a[0]}i=a}i==null&&(i=""),a=i}r._wrapperState={initialValue:ge(a)}}function pf(r,i){var a=ge(i.value),u=ge(i.defaultValue);a!=null&&(a=""+a,a!==r.value&&(r.value=a),i.defaultValue==null&&r.defaultValue!==a&&(r.defaultValue=a)),u!=null&&(r.defaultValue=""+u)}function mf(r){var i=r.textContent;i===r._wrapperState.initialValue&&i!==""&&i!==null&&(r.value=i)}function gf(r){switch(r){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function su(r,i){return r==null||r==="http://www.w3.org/1999/xhtml"?gf(i):r==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":r}var Fo,yf=(function(r){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,a,u,d){MSApp.execUnsafeLocalFunction(function(){return r(i,a,u,d)})}:r})(function(r,i){if(r.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in r)r.innerHTML=i;else{for(Fo=Fo||document.createElement("div"),Fo.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=Fo.firstChild;r.firstChild;)r.removeChild(r.firstChild);for(;i.firstChild;)r.appendChild(i.firstChild)}});function fs(r,i){if(i){var a=r.firstChild;if(a&&a===r.lastChild&&a.nodeType===3){a.nodeValue=i;return}}r.textContent=i}var ps={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},uE=["Webkit","ms","Moz","O"];Object.keys(ps).forEach(function(r){uE.forEach(function(i){i=i+r.charAt(0).toUpperCase()+r.substring(1),ps[i]=ps[r]})});function _f(r,i,a){return i==null||typeof i=="boolean"||i===""?"":a||typeof i!="number"||i===0||ps.hasOwnProperty(r)&&ps[r]?(""+i).trim():i+"px"}function vf(r,i){r=r.style;for(var a in i)if(i.hasOwnProperty(a)){var u=a.indexOf("--")===0,d=_f(a,i[a],u);a==="float"&&(a="cssFloat"),u?r.setProperty(a,d):r[a]=d}}var cE=L({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ou(r,i){if(i){if(cE[r]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(n(137,r));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(n(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(n(61))}if(i.style!=null&&typeof i.style!="object")throw Error(n(62))}}function au(r,i){if(r.indexOf("-")===-1)return typeof i.is=="string";switch(r){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var lu=null;function uu(r){return r=r.target||r.srcElement||window,r.correspondingUseElement&&(r=r.correspondingUseElement),r.nodeType===3?r.parentNode:r}var cu=null,li=null,ui=null;function wf(r){if(r=Ms(r)){if(typeof cu!="function")throw Error(n(280));var i=r.stateNode;i&&(i=oa(i),cu(r.stateNode,r.type,i))}}function Ef(r){li?ui?ui.push(r):ui=[r]:li=r}function Cf(){if(li){var r=li,i=ui;if(ui=li=null,wf(r),i)for(r=0;r<i.length;r++)wf(i[r])}}function kf(r,i){return r(i)}function Sf(){}var du=!1;function If(r,i,a){if(du)return r(i,a);du=!0;try{return kf(r,i,a)}finally{du=!1,(li!==null||ui!==null)&&(Sf(),Cf())}}function ms(r,i){var a=r.stateNode;if(a===null)return null;var u=oa(a);if(u===null)return null;a=u[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(r=r.type,u=!(r==="button"||r==="input"||r==="select"||r==="textarea")),r=!u;break e;default:r=!1}if(r)return null;if(a&&typeof a!="function")throw Error(n(231,i,typeof a));return a}var hu=!1;if(h)try{var gs={};Object.defineProperty(gs,"passive",{get:function(){hu=!0}}),window.addEventListener("test",gs,gs),window.removeEventListener("test",gs,gs)}catch{hu=!1}function dE(r,i,a,u,d,p,g,w,C){var P=Array.prototype.slice.call(arguments,3);try{i.apply(a,P)}catch(F){this.onError(F)}}var ys=!1,jo=null,Uo=!1,fu=null,hE={onError:function(r){ys=!0,jo=r}};function fE(r,i,a,u,d,p,g,w,C){ys=!1,jo=null,dE.apply(hE,arguments)}function pE(r,i,a,u,d,p,g,w,C){if(fE.apply(this,arguments),ys){if(ys){var P=jo;ys=!1,jo=null}else throw Error(n(198));Uo||(Uo=!0,fu=P)}}function Rr(r){var i=r,a=r;if(r.alternate)for(;i.return;)i=i.return;else{r=i;do i=r,(i.flags&4098)!==0&&(a=i.return),r=i.return;while(r)}return i.tag===3?a:null}function Tf(r){if(r.tag===13){var i=r.memoizedState;if(i===null&&(r=r.alternate,r!==null&&(i=r.memoizedState)),i!==null)return i.dehydrated}return null}function xf(r){if(Rr(r)!==r)throw Error(n(188))}function mE(r){var i=r.alternate;if(!i){if(i=Rr(r),i===null)throw Error(n(188));return i!==r?null:r}for(var a=r,u=i;;){var d=a.return;if(d===null)break;var p=d.alternate;if(p===null){if(u=d.return,u!==null){a=u;continue}break}if(d.child===p.child){for(p=d.child;p;){if(p===a)return xf(d),r;if(p===u)return xf(d),i;p=p.sibling}throw Error(n(188))}if(a.return!==u.return)a=d,u=p;else{for(var g=!1,w=d.child;w;){if(w===a){g=!0,a=d,u=p;break}if(w===u){g=!0,u=d,a=p;break}w=w.sibling}if(!g){for(w=p.child;w;){if(w===a){g=!0,a=p,u=d;break}if(w===u){g=!0,u=p,a=d;break}w=w.sibling}if(!g)throw Error(n(189))}}if(a.alternate!==u)throw Error(n(190))}if(a.tag!==3)throw Error(n(188));return a.stateNode.current===a?r:i}function Rf(r){return r=mE(r),r!==null?bf(r):null}function bf(r){if(r.tag===5||r.tag===6)return r;for(r=r.child;r!==null;){var i=bf(r);if(i!==null)return i;r=r.sibling}return null}var Nf=e.unstable_scheduleCallback,Pf=e.unstable_cancelCallback,gE=e.unstable_shouldYield,yE=e.unstable_requestPaint,Ve=e.unstable_now,_E=e.unstable_getCurrentPriorityLevel,pu=e.unstable_ImmediatePriority,Af=e.unstable_UserBlockingPriority,zo=e.unstable_NormalPriority,vE=e.unstable_LowPriority,Df=e.unstable_IdlePriority,$o=null,pn=null;function wE(r){if(pn&&typeof pn.onCommitFiberRoot=="function")try{pn.onCommitFiberRoot($o,r,void 0,(r.current.flags&128)===128)}catch{}}var Qt=Math.clz32?Math.clz32:kE,EE=Math.log,CE=Math.LN2;function kE(r){return r>>>=0,r===0?32:31-(EE(r)/CE|0)|0}var Wo=64,Bo=4194304;function _s(r){switch(r&-r){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return r&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return r}}function Vo(r,i){var a=r.pendingLanes;if(a===0)return 0;var u=0,d=r.suspendedLanes,p=r.pingedLanes,g=a&268435455;if(g!==0){var w=g&~d;w!==0?u=_s(w):(p&=g,p!==0&&(u=_s(p)))}else g=a&~d,g!==0?u=_s(g):p!==0&&(u=_s(p));if(u===0)return 0;if(i!==0&&i!==u&&(i&d)===0&&(d=u&-u,p=i&-i,d>=p||d===16&&(p&4194240)!==0))return i;if((u&4)!==0&&(u|=a&16),i=r.entangledLanes,i!==0)for(r=r.entanglements,i&=u;0<i;)a=31-Qt(i),d=1<<a,u|=r[a],i&=~d;return u}function SE(r,i){switch(r){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function IE(r,i){for(var a=r.suspendedLanes,u=r.pingedLanes,d=r.expirationTimes,p=r.pendingLanes;0<p;){var g=31-Qt(p),w=1<<g,C=d[g];C===-1?((w&a)===0||(w&u)!==0)&&(d[g]=SE(w,i)):C<=i&&(r.expiredLanes|=w),p&=~w}}function mu(r){return r=r.pendingLanes&-1073741825,r!==0?r:r&1073741824?1073741824:0}function Of(){var r=Wo;return Wo<<=1,(Wo&4194240)===0&&(Wo=64),r}function gu(r){for(var i=[],a=0;31>a;a++)i.push(r);return i}function vs(r,i,a){r.pendingLanes|=i,i!==536870912&&(r.suspendedLanes=0,r.pingedLanes=0),r=r.eventTimes,i=31-Qt(i),r[i]=a}function TE(r,i){var a=r.pendingLanes&~i;r.pendingLanes=i,r.suspendedLanes=0,r.pingedLanes=0,r.expiredLanes&=i,r.mutableReadLanes&=i,r.entangledLanes&=i,i=r.entanglements;var u=r.eventTimes;for(r=r.expirationTimes;0<a;){var d=31-Qt(a),p=1<<d;i[d]=0,u[d]=-1,r[d]=-1,a&=~p}}function yu(r,i){var a=r.entangledLanes|=i;for(r=r.entanglements;a;){var u=31-Qt(a),d=1<<u;d&i|r[u]&i&&(r[u]|=i),a&=~d}}var Ie=0;function Lf(r){return r&=-r,1<r?4<r?(r&268435455)!==0?16:536870912:4:1}var Mf,_u,Ff,jf,Uf,vu=!1,Ho=[],Gn=null,qn=null,Kn=null,ws=new Map,Es=new Map,Yn=[],xE="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function zf(r,i){switch(r){case"focusin":case"focusout":Gn=null;break;case"dragenter":case"dragleave":qn=null;break;case"mouseover":case"mouseout":Kn=null;break;case"pointerover":case"pointerout":ws.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":Es.delete(i.pointerId)}}function Cs(r,i,a,u,d,p){return r===null||r.nativeEvent!==p?(r={blockedOn:i,domEventName:a,eventSystemFlags:u,nativeEvent:p,targetContainers:[d]},i!==null&&(i=Ms(i),i!==null&&_u(i)),r):(r.eventSystemFlags|=u,i=r.targetContainers,d!==null&&i.indexOf(d)===-1&&i.push(d),r)}function RE(r,i,a,u,d){switch(i){case"focusin":return Gn=Cs(Gn,r,i,a,u,d),!0;case"dragenter":return qn=Cs(qn,r,i,a,u,d),!0;case"mouseover":return Kn=Cs(Kn,r,i,a,u,d),!0;case"pointerover":var p=d.pointerId;return ws.set(p,Cs(ws.get(p)||null,r,i,a,u,d)),!0;case"gotpointercapture":return p=d.pointerId,Es.set(p,Cs(Es.get(p)||null,r,i,a,u,d)),!0}return!1}function $f(r){var i=br(r.target);if(i!==null){var a=Rr(i);if(a!==null){if(i=a.tag,i===13){if(i=Tf(a),i!==null){r.blockedOn=i,Uf(r.priority,function(){Ff(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){r.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}r.blockedOn=null}function Go(r){if(r.blockedOn!==null)return!1;for(var i=r.targetContainers;0<i.length;){var a=Eu(r.domEventName,r.eventSystemFlags,i[0],r.nativeEvent);if(a===null){a=r.nativeEvent;var u=new a.constructor(a.type,a);lu=u,a.target.dispatchEvent(u),lu=null}else return i=Ms(a),i!==null&&_u(i),r.blockedOn=a,!1;i.shift()}return!0}function Wf(r,i,a){Go(r)&&a.delete(i)}function bE(){vu=!1,Gn!==null&&Go(Gn)&&(Gn=null),qn!==null&&Go(qn)&&(qn=null),Kn!==null&&Go(Kn)&&(Kn=null),ws.forEach(Wf),Es.forEach(Wf)}function ks(r,i){r.blockedOn===i&&(r.blockedOn=null,vu||(vu=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,bE)))}function Ss(r){function i(d){return ks(d,r)}if(0<Ho.length){ks(Ho[0],r);for(var a=1;a<Ho.length;a++){var u=Ho[a];u.blockedOn===r&&(u.blockedOn=null)}}for(Gn!==null&&ks(Gn,r),qn!==null&&ks(qn,r),Kn!==null&&ks(Kn,r),ws.forEach(i),Es.forEach(i),a=0;a<Yn.length;a++)u=Yn[a],u.blockedOn===r&&(u.blockedOn=null);for(;0<Yn.length&&(a=Yn[0],a.blockedOn===null);)$f(a),a.blockedOn===null&&Yn.shift()}var ci=Z.ReactCurrentBatchConfig,qo=!0;function NE(r,i,a,u){var d=Ie,p=ci.transition;ci.transition=null;try{Ie=1,wu(r,i,a,u)}finally{Ie=d,ci.transition=p}}function PE(r,i,a,u){var d=Ie,p=ci.transition;ci.transition=null;try{Ie=4,wu(r,i,a,u)}finally{Ie=d,ci.transition=p}}function wu(r,i,a,u){if(qo){var d=Eu(r,i,a,u);if(d===null)ju(r,i,u,Ko,a),zf(r,u);else if(RE(d,r,i,a,u))u.stopPropagation();else if(zf(r,u),i&4&&-1<xE.indexOf(r)){for(;d!==null;){var p=Ms(d);if(p!==null&&Mf(p),p=Eu(r,i,a,u),p===null&&ju(r,i,u,Ko,a),p===d)break;d=p}d!==null&&u.stopPropagation()}else ju(r,i,u,null,a)}}var Ko=null;function Eu(r,i,a,u){if(Ko=null,r=uu(u),r=br(r),r!==null)if(i=Rr(r),i===null)r=null;else if(a=i.tag,a===13){if(r=Tf(i),r!==null)return r;r=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;r=null}else i!==r&&(r=null);return Ko=r,null}function Bf(r){switch(r){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(_E()){case pu:return 1;case Af:return 4;case zo:case vE:return 16;case Df:return 536870912;default:return 16}default:return 16}}var Qn=null,Cu=null,Yo=null;function Vf(){if(Yo)return Yo;var r,i=Cu,a=i.length,u,d="value"in Qn?Qn.value:Qn.textContent,p=d.length;for(r=0;r<a&&i[r]===d[r];r++);var g=a-r;for(u=1;u<=g&&i[a-u]===d[p-u];u++);return Yo=d.slice(r,1<u?1-u:void 0)}function Qo(r){var i=r.keyCode;return"charCode"in r?(r=r.charCode,r===0&&i===13&&(r=13)):r=i,r===10&&(r=13),32<=r||r===13?r:0}function Jo(){return!0}function Hf(){return!1}function Lt(r){function i(a,u,d,p,g){this._reactName=a,this._targetInst=d,this.type=u,this.nativeEvent=p,this.target=g,this.currentTarget=null;for(var w in r)r.hasOwnProperty(w)&&(a=r[w],this[w]=a?a(p):p[w]);return this.isDefaultPrevented=(p.defaultPrevented!=null?p.defaultPrevented:p.returnValue===!1)?Jo:Hf,this.isPropagationStopped=Hf,this}return L(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Jo)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Jo)},persist:function(){},isPersistent:Jo}),i}var di={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(r){return r.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ku=Lt(di),Is=L({},di,{view:0,detail:0}),AE=Lt(Is),Su,Iu,Ts,Xo=L({},Is,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:xu,button:0,buttons:0,relatedTarget:function(r){return r.relatedTarget===void 0?r.fromElement===r.srcElement?r.toElement:r.fromElement:r.relatedTarget},movementX:function(r){return"movementX"in r?r.movementX:(r!==Ts&&(Ts&&r.type==="mousemove"?(Su=r.screenX-Ts.screenX,Iu=r.screenY-Ts.screenY):Iu=Su=0,Ts=r),Su)},movementY:function(r){return"movementY"in r?r.movementY:Iu}}),Gf=Lt(Xo),DE=L({},Xo,{dataTransfer:0}),OE=Lt(DE),LE=L({},Is,{relatedTarget:0}),Tu=Lt(LE),ME=L({},di,{animationName:0,elapsedTime:0,pseudoElement:0}),FE=Lt(ME),jE=L({},di,{clipboardData:function(r){return"clipboardData"in r?r.clipboardData:window.clipboardData}}),UE=Lt(jE),zE=L({},di,{data:0}),qf=Lt(zE),$E={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},WE={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},BE={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function VE(r){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(r):(r=BE[r])?!!i[r]:!1}function xu(){return VE}var HE=L({},Is,{key:function(r){if(r.key){var i=$E[r.key]||r.key;if(i!=="Unidentified")return i}return r.type==="keypress"?(r=Qo(r),r===13?"Enter":String.fromCharCode(r)):r.type==="keydown"||r.type==="keyup"?WE[r.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:xu,charCode:function(r){return r.type==="keypress"?Qo(r):0},keyCode:function(r){return r.type==="keydown"||r.type==="keyup"?r.keyCode:0},which:function(r){return r.type==="keypress"?Qo(r):r.type==="keydown"||r.type==="keyup"?r.keyCode:0}}),GE=Lt(HE),qE=L({},Xo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Kf=Lt(qE),KE=L({},Is,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:xu}),YE=Lt(KE),QE=L({},di,{propertyName:0,elapsedTime:0,pseudoElement:0}),JE=Lt(QE),XE=L({},Xo,{deltaX:function(r){return"deltaX"in r?r.deltaX:"wheelDeltaX"in r?-r.wheelDeltaX:0},deltaY:function(r){return"deltaY"in r?r.deltaY:"wheelDeltaY"in r?-r.wheelDeltaY:"wheelDelta"in r?-r.wheelDelta:0},deltaZ:0,deltaMode:0}),ZE=Lt(XE),e0=[9,13,27,32],Ru=h&&"CompositionEvent"in window,xs=null;h&&"documentMode"in document&&(xs=document.documentMode);var t0=h&&"TextEvent"in window&&!xs,Yf=h&&(!Ru||xs&&8<xs&&11>=xs),Qf=" ",Jf=!1;function Xf(r,i){switch(r){case"keyup":return e0.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Zf(r){return r=r.detail,typeof r=="object"&&"data"in r?r.data:null}var hi=!1;function n0(r,i){switch(r){case"compositionend":return Zf(i);case"keypress":return i.which!==32?null:(Jf=!0,Qf);case"textInput":return r=i.data,r===Qf&&Jf?null:r;default:return null}}function r0(r,i){if(hi)return r==="compositionend"||!Ru&&Xf(r,i)?(r=Vf(),Yo=Cu=Qn=null,hi=!1,r):null;switch(r){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Yf&&i.locale!=="ko"?null:i.data;default:return null}}var i0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ep(r){var i=r&&r.nodeName&&r.nodeName.toLowerCase();return i==="input"?!!i0[r.type]:i==="textarea"}function tp(r,i,a,u){Ef(u),i=ra(i,"onChange"),0<i.length&&(a=new ku("onChange","change",null,a,u),r.push({event:a,listeners:i}))}var Rs=null,bs=null;function s0(r){vp(r,0)}function Zo(r){var i=yi(r);if(In(i))return r}function o0(r,i){if(r==="change")return i}var np=!1;if(h){var bu;if(h){var Nu="oninput"in document;if(!Nu){var rp=document.createElement("div");rp.setAttribute("oninput","return;"),Nu=typeof rp.oninput=="function"}bu=Nu}else bu=!1;np=bu&&(!document.documentMode||9<document.documentMode)}function ip(){Rs&&(Rs.detachEvent("onpropertychange",sp),bs=Rs=null)}function sp(r){if(r.propertyName==="value"&&Zo(bs)){var i=[];tp(i,bs,r,uu(r)),If(s0,i)}}function a0(r,i,a){r==="focusin"?(ip(),Rs=i,bs=a,Rs.attachEvent("onpropertychange",sp)):r==="focusout"&&ip()}function l0(r){if(r==="selectionchange"||r==="keyup"||r==="keydown")return Zo(bs)}function u0(r,i){if(r==="click")return Zo(i)}function c0(r,i){if(r==="input"||r==="change")return Zo(i)}function d0(r,i){return r===i&&(r!==0||1/r===1/i)||r!==r&&i!==i}var Jt=typeof Object.is=="function"?Object.is:d0;function Ns(r,i){if(Jt(r,i))return!0;if(typeof r!="object"||r===null||typeof i!="object"||i===null)return!1;var a=Object.keys(r),u=Object.keys(i);if(a.length!==u.length)return!1;for(u=0;u<a.length;u++){var d=a[u];if(!f.call(i,d)||!Jt(r[d],i[d]))return!1}return!0}function op(r){for(;r&&r.firstChild;)r=r.firstChild;return r}function ap(r,i){var a=op(r);r=0;for(var u;a;){if(a.nodeType===3){if(u=r+a.textContent.length,r<=i&&u>=i)return{node:a,offset:i-r};r=u}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=op(a)}}function lp(r,i){return r&&i?r===i?!0:r&&r.nodeType===3?!1:i&&i.nodeType===3?lp(r,i.parentNode):"contains"in r?r.contains(i):r.compareDocumentPosition?!!(r.compareDocumentPosition(i)&16):!1:!1}function up(){for(var r=window,i=oi();i instanceof r.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)r=i.contentWindow;else break;i=oi(r.document)}return i}function Pu(r){var i=r&&r.nodeName&&r.nodeName.toLowerCase();return i&&(i==="input"&&(r.type==="text"||r.type==="search"||r.type==="tel"||r.type==="url"||r.type==="password")||i==="textarea"||r.contentEditable==="true")}function h0(r){var i=up(),a=r.focusedElem,u=r.selectionRange;if(i!==a&&a&&a.ownerDocument&&lp(a.ownerDocument.documentElement,a)){if(u!==null&&Pu(a)){if(i=u.start,r=u.end,r===void 0&&(r=i),"selectionStart"in a)a.selectionStart=i,a.selectionEnd=Math.min(r,a.value.length);else if(r=(i=a.ownerDocument||document)&&i.defaultView||window,r.getSelection){r=r.getSelection();var d=a.textContent.length,p=Math.min(u.start,d);u=u.end===void 0?p:Math.min(u.end,d),!r.extend&&p>u&&(d=u,u=p,p=d),d=ap(a,p);var g=ap(a,u);d&&g&&(r.rangeCount!==1||r.anchorNode!==d.node||r.anchorOffset!==d.offset||r.focusNode!==g.node||r.focusOffset!==g.offset)&&(i=i.createRange(),i.setStart(d.node,d.offset),r.removeAllRanges(),p>u?(r.addRange(i),r.extend(g.node,g.offset)):(i.setEnd(g.node,g.offset),r.addRange(i)))}}for(i=[],r=a;r=r.parentNode;)r.nodeType===1&&i.push({element:r,left:r.scrollLeft,top:r.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<i.length;a++)r=i[a],r.element.scrollLeft=r.left,r.element.scrollTop=r.top}}var f0=h&&"documentMode"in document&&11>=document.documentMode,fi=null,Au=null,Ps=null,Du=!1;function cp(r,i,a){var u=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Du||fi==null||fi!==oi(u)||(u=fi,"selectionStart"in u&&Pu(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),Ps&&Ns(Ps,u)||(Ps=u,u=ra(Au,"onSelect"),0<u.length&&(i=new ku("onSelect","select",null,i,a),r.push({event:i,listeners:u}),i.target=fi)))}function ea(r,i){var a={};return a[r.toLowerCase()]=i.toLowerCase(),a["Webkit"+r]="webkit"+i,a["Moz"+r]="moz"+i,a}var pi={animationend:ea("Animation","AnimationEnd"),animationiteration:ea("Animation","AnimationIteration"),animationstart:ea("Animation","AnimationStart"),transitionend:ea("Transition","TransitionEnd")},Ou={},dp={};h&&(dp=document.createElement("div").style,"AnimationEvent"in window||(delete pi.animationend.animation,delete pi.animationiteration.animation,delete pi.animationstart.animation),"TransitionEvent"in window||delete pi.transitionend.transition);function ta(r){if(Ou[r])return Ou[r];if(!pi[r])return r;var i=pi[r],a;for(a in i)if(i.hasOwnProperty(a)&&a in dp)return Ou[r]=i[a];return r}var hp=ta("animationend"),fp=ta("animationiteration"),pp=ta("animationstart"),mp=ta("transitionend"),gp=new Map,yp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Jn(r,i){gp.set(r,i),l(i,[r])}for(var Lu=0;Lu<yp.length;Lu++){var Mu=yp[Lu],p0=Mu.toLowerCase(),m0=Mu[0].toUpperCase()+Mu.slice(1);Jn(p0,"on"+m0)}Jn(hp,"onAnimationEnd"),Jn(fp,"onAnimationIteration"),Jn(pp,"onAnimationStart"),Jn("dblclick","onDoubleClick"),Jn("focusin","onFocus"),Jn("focusout","onBlur"),Jn(mp,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var As="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),g0=new Set("cancel close invalid load scroll toggle".split(" ").concat(As));function _p(r,i,a){var u=r.type||"unknown-event";r.currentTarget=a,pE(u,i,void 0,r),r.currentTarget=null}function vp(r,i){i=(i&4)!==0;for(var a=0;a<r.length;a++){var u=r[a],d=u.event;u=u.listeners;e:{var p=void 0;if(i)for(var g=u.length-1;0<=g;g--){var w=u[g],C=w.instance,P=w.currentTarget;if(w=w.listener,C!==p&&d.isPropagationStopped())break e;_p(d,w,P),p=C}else for(g=0;g<u.length;g++){if(w=u[g],C=w.instance,P=w.currentTarget,w=w.listener,C!==p&&d.isPropagationStopped())break e;_p(d,w,P),p=C}}}if(Uo)throw r=fu,Uo=!1,fu=null,r}function Oe(r,i){var a=i[Vu];a===void 0&&(a=i[Vu]=new Set);var u=r+"__bubble";a.has(u)||(wp(i,r,2,!1),a.add(u))}function Fu(r,i,a){var u=0;i&&(u|=4),wp(a,r,u,i)}var na="_reactListening"+Math.random().toString(36).slice(2);function Ds(r){if(!r[na]){r[na]=!0,s.forEach(function(a){a!=="selectionchange"&&(g0.has(a)||Fu(a,!1,r),Fu(a,!0,r))});var i=r.nodeType===9?r:r.ownerDocument;i===null||i[na]||(i[na]=!0,Fu("selectionchange",!1,i))}}function wp(r,i,a,u){switch(Bf(i)){case 1:var d=NE;break;case 4:d=PE;break;default:d=wu}a=d.bind(null,i,a,r),d=void 0,!hu||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(d=!0),u?d!==void 0?r.addEventListener(i,a,{capture:!0,passive:d}):r.addEventListener(i,a,!0):d!==void 0?r.addEventListener(i,a,{passive:d}):r.addEventListener(i,a,!1)}function ju(r,i,a,u,d){var p=u;if((i&1)===0&&(i&2)===0&&u!==null)e:for(;;){if(u===null)return;var g=u.tag;if(g===3||g===4){var w=u.stateNode.containerInfo;if(w===d||w.nodeType===8&&w.parentNode===d)break;if(g===4)for(g=u.return;g!==null;){var C=g.tag;if((C===3||C===4)&&(C=g.stateNode.containerInfo,C===d||C.nodeType===8&&C.parentNode===d))return;g=g.return}for(;w!==null;){if(g=br(w),g===null)return;if(C=g.tag,C===5||C===6){u=p=g;continue e}w=w.parentNode}}u=u.return}If(function(){var P=p,F=uu(a),U=[];e:{var M=gp.get(r);if(M!==void 0){var B=ku,G=r;switch(r){case"keypress":if(Qo(a)===0)break e;case"keydown":case"keyup":B=GE;break;case"focusin":G="focus",B=Tu;break;case"focusout":G="blur",B=Tu;break;case"beforeblur":case"afterblur":B=Tu;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":B=Gf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":B=OE;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":B=YE;break;case hp:case fp:case pp:B=FE;break;case mp:B=JE;break;case"scroll":B=AE;break;case"wheel":B=ZE;break;case"copy":case"cut":case"paste":B=UE;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":B=Kf}var J=(i&4)!==0,He=!J&&r==="scroll",R=J?M!==null?M+"Capture":null:M;J=[];for(var S=P,b;S!==null;){b=S;var z=b.stateNode;if(b.tag===5&&z!==null&&(b=z,R!==null&&(z=ms(S,R),z!=null&&J.push(Os(S,z,b)))),He)break;S=S.return}0<J.length&&(M=new B(M,G,null,a,F),U.push({event:M,listeners:J}))}}if((i&7)===0){e:{if(M=r==="mouseover"||r==="pointerover",B=r==="mouseout"||r==="pointerout",M&&a!==lu&&(G=a.relatedTarget||a.fromElement)&&(br(G)||G[Tn]))break e;if((B||M)&&(M=F.window===F?F:(M=F.ownerDocument)?M.defaultView||M.parentWindow:window,B?(G=a.relatedTarget||a.toElement,B=P,G=G?br(G):null,G!==null&&(He=Rr(G),G!==He||G.tag!==5&&G.tag!==6)&&(G=null)):(B=null,G=P),B!==G)){if(J=Gf,z="onMouseLeave",R="onMouseEnter",S="mouse",(r==="pointerout"||r==="pointerover")&&(J=Kf,z="onPointerLeave",R="onPointerEnter",S="pointer"),He=B==null?M:yi(B),b=G==null?M:yi(G),M=new J(z,S+"leave",B,a,F),M.target=He,M.relatedTarget=b,z=null,br(F)===P&&(J=new J(R,S+"enter",G,a,F),J.target=b,J.relatedTarget=He,z=J),He=z,B&&G)t:{for(J=B,R=G,S=0,b=J;b;b=mi(b))S++;for(b=0,z=R;z;z=mi(z))b++;for(;0<S-b;)J=mi(J),S--;for(;0<b-S;)R=mi(R),b--;for(;S--;){if(J===R||R!==null&&J===R.alternate)break t;J=mi(J),R=mi(R)}J=null}else J=null;B!==null&&Ep(U,M,B,J,!1),G!==null&&He!==null&&Ep(U,He,G,J,!0)}}e:{if(M=P?yi(P):window,B=M.nodeName&&M.nodeName.toLowerCase(),B==="select"||B==="input"&&M.type==="file")var X=o0;else if(ep(M))if(np)X=c0;else{X=l0;var ie=a0}else(B=M.nodeName)&&B.toLowerCase()==="input"&&(M.type==="checkbox"||M.type==="radio")&&(X=u0);if(X&&(X=X(r,P))){tp(U,X,a,F);break e}ie&&ie(r,M,P),r==="focusout"&&(ie=M._wrapperState)&&ie.controlled&&M.type==="number"&&ru(M,"number",M.value)}switch(ie=P?yi(P):window,r){case"focusin":(ep(ie)||ie.contentEditable==="true")&&(fi=ie,Au=P,Ps=null);break;case"focusout":Ps=Au=fi=null;break;case"mousedown":Du=!0;break;case"contextmenu":case"mouseup":case"dragend":Du=!1,cp(U,a,F);break;case"selectionchange":if(f0)break;case"keydown":case"keyup":cp(U,a,F)}var se;if(Ru)e:{switch(r){case"compositionstart":var le="onCompositionStart";break e;case"compositionend":le="onCompositionEnd";break e;case"compositionupdate":le="onCompositionUpdate";break e}le=void 0}else hi?Xf(r,a)&&(le="onCompositionEnd"):r==="keydown"&&a.keyCode===229&&(le="onCompositionStart");le&&(Yf&&a.locale!=="ko"&&(hi||le!=="onCompositionStart"?le==="onCompositionEnd"&&hi&&(se=Vf()):(Qn=F,Cu="value"in Qn?Qn.value:Qn.textContent,hi=!0)),ie=ra(P,le),0<ie.length&&(le=new qf(le,r,null,a,F),U.push({event:le,listeners:ie}),se?le.data=se:(se=Zf(a),se!==null&&(le.data=se)))),(se=t0?n0(r,a):r0(r,a))&&(P=ra(P,"onBeforeInput"),0<P.length&&(F=new qf("onBeforeInput","beforeinput",null,a,F),U.push({event:F,listeners:P}),F.data=se))}vp(U,i)})}function Os(r,i,a){return{instance:r,listener:i,currentTarget:a}}function ra(r,i){for(var a=i+"Capture",u=[];r!==null;){var d=r,p=d.stateNode;d.tag===5&&p!==null&&(d=p,p=ms(r,a),p!=null&&u.unshift(Os(r,p,d)),p=ms(r,i),p!=null&&u.push(Os(r,p,d))),r=r.return}return u}function mi(r){if(r===null)return null;do r=r.return;while(r&&r.tag!==5);return r||null}function Ep(r,i,a,u,d){for(var p=i._reactName,g=[];a!==null&&a!==u;){var w=a,C=w.alternate,P=w.stateNode;if(C!==null&&C===u)break;w.tag===5&&P!==null&&(w=P,d?(C=ms(a,p),C!=null&&g.unshift(Os(a,C,w))):d||(C=ms(a,p),C!=null&&g.push(Os(a,C,w)))),a=a.return}g.length!==0&&r.push({event:i,listeners:g})}var y0=/\r\n?/g,_0=/\u0000|\uFFFD/g;function Cp(r){return(typeof r=="string"?r:""+r).replace(y0,`
`).replace(_0,"")}function ia(r,i,a){if(i=Cp(i),Cp(r)!==i&&a)throw Error(n(425))}function sa(){}var Uu=null,zu=null;function $u(r,i){return r==="textarea"||r==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Wu=typeof setTimeout=="function"?setTimeout:void 0,v0=typeof clearTimeout=="function"?clearTimeout:void 0,kp=typeof Promise=="function"?Promise:void 0,w0=typeof queueMicrotask=="function"?queueMicrotask:typeof kp<"u"?function(r){return kp.resolve(null).then(r).catch(E0)}:Wu;function E0(r){setTimeout(function(){throw r})}function Bu(r,i){var a=i,u=0;do{var d=a.nextSibling;if(r.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(u===0){r.removeChild(d),Ss(i);return}u--}else a!=="$"&&a!=="$?"&&a!=="$!"||u++;a=d}while(a);Ss(i)}function Xn(r){for(;r!=null;r=r.nextSibling){var i=r.nodeType;if(i===1||i===3)break;if(i===8){if(i=r.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return r}function Sp(r){r=r.previousSibling;for(var i=0;r;){if(r.nodeType===8){var a=r.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return r;i--}else a==="/$"&&i++}r=r.previousSibling}return null}var gi=Math.random().toString(36).slice(2),mn="__reactFiber$"+gi,Ls="__reactProps$"+gi,Tn="__reactContainer$"+gi,Vu="__reactEvents$"+gi,C0="__reactListeners$"+gi,k0="__reactHandles$"+gi;function br(r){var i=r[mn];if(i)return i;for(var a=r.parentNode;a;){if(i=a[Tn]||a[mn]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(r=Sp(r);r!==null;){if(a=r[mn])return a;r=Sp(r)}return i}r=a,a=r.parentNode}return null}function Ms(r){return r=r[mn]||r[Tn],!r||r.tag!==5&&r.tag!==6&&r.tag!==13&&r.tag!==3?null:r}function yi(r){if(r.tag===5||r.tag===6)return r.stateNode;throw Error(n(33))}function oa(r){return r[Ls]||null}var Hu=[],_i=-1;function Zn(r){return{current:r}}function Le(r){0>_i||(r.current=Hu[_i],Hu[_i]=null,_i--)}function be(r,i){_i++,Hu[_i]=r.current,r.current=i}var er={},gt=Zn(er),xt=Zn(!1),Nr=er;function vi(r,i){var a=r.type.contextTypes;if(!a)return er;var u=r.stateNode;if(u&&u.__reactInternalMemoizedUnmaskedChildContext===i)return u.__reactInternalMemoizedMaskedChildContext;var d={},p;for(p in a)d[p]=i[p];return u&&(r=r.stateNode,r.__reactInternalMemoizedUnmaskedChildContext=i,r.__reactInternalMemoizedMaskedChildContext=d),d}function Rt(r){return r=r.childContextTypes,r!=null}function aa(){Le(xt),Le(gt)}function Ip(r,i,a){if(gt.current!==er)throw Error(n(168));be(gt,i),be(xt,a)}function Tp(r,i,a){var u=r.stateNode;if(i=i.childContextTypes,typeof u.getChildContext!="function")return a;u=u.getChildContext();for(var d in u)if(!(d in i))throw Error(n(108,te(r)||"Unknown",d));return L({},a,u)}function la(r){return r=(r=r.stateNode)&&r.__reactInternalMemoizedMergedChildContext||er,Nr=gt.current,be(gt,r),be(xt,xt.current),!0}function xp(r,i,a){var u=r.stateNode;if(!u)throw Error(n(169));a?(r=Tp(r,i,Nr),u.__reactInternalMemoizedMergedChildContext=r,Le(xt),Le(gt),be(gt,r)):Le(xt),be(xt,a)}var xn=null,ua=!1,Gu=!1;function Rp(r){xn===null?xn=[r]:xn.push(r)}function S0(r){ua=!0,Rp(r)}function tr(){if(!Gu&&xn!==null){Gu=!0;var r=0,i=Ie;try{var a=xn;for(Ie=1;r<a.length;r++){var u=a[r];do u=u(!0);while(u!==null)}xn=null,ua=!1}catch(d){throw xn!==null&&(xn=xn.slice(r+1)),Nf(pu,tr),d}finally{Ie=i,Gu=!1}}return null}var wi=[],Ei=0,ca=null,da=0,zt=[],$t=0,Pr=null,Rn=1,bn="";function Ar(r,i){wi[Ei++]=da,wi[Ei++]=ca,ca=r,da=i}function bp(r,i,a){zt[$t++]=Rn,zt[$t++]=bn,zt[$t++]=Pr,Pr=r;var u=Rn;r=bn;var d=32-Qt(u)-1;u&=~(1<<d),a+=1;var p=32-Qt(i)+d;if(30<p){var g=d-d%5;p=(u&(1<<g)-1).toString(32),u>>=g,d-=g,Rn=1<<32-Qt(i)+d|a<<d|u,bn=p+r}else Rn=1<<p|a<<d|u,bn=r}function qu(r){r.return!==null&&(Ar(r,1),bp(r,1,0))}function Ku(r){for(;r===ca;)ca=wi[--Ei],wi[Ei]=null,da=wi[--Ei],wi[Ei]=null;for(;r===Pr;)Pr=zt[--$t],zt[$t]=null,bn=zt[--$t],zt[$t]=null,Rn=zt[--$t],zt[$t]=null}var Mt=null,Ft=null,Me=!1,Xt=null;function Np(r,i){var a=Ht(5,null,null,0);a.elementType="DELETED",a.stateNode=i,a.return=r,i=r.deletions,i===null?(r.deletions=[a],r.flags|=16):i.push(a)}function Pp(r,i){switch(r.tag){case 5:var a=r.type;return i=i.nodeType!==1||a.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(r.stateNode=i,Mt=r,Ft=Xn(i.firstChild),!0):!1;case 6:return i=r.pendingProps===""||i.nodeType!==3?null:i,i!==null?(r.stateNode=i,Mt=r,Ft=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(a=Pr!==null?{id:Rn,overflow:bn}:null,r.memoizedState={dehydrated:i,treeContext:a,retryLane:1073741824},a=Ht(18,null,null,0),a.stateNode=i,a.return=r,r.child=a,Mt=r,Ft=null,!0):!1;default:return!1}}function Yu(r){return(r.mode&1)!==0&&(r.flags&128)===0}function Qu(r){if(Me){var i=Ft;if(i){var a=i;if(!Pp(r,i)){if(Yu(r))throw Error(n(418));i=Xn(a.nextSibling);var u=Mt;i&&Pp(r,i)?Np(u,a):(r.flags=r.flags&-4097|2,Me=!1,Mt=r)}}else{if(Yu(r))throw Error(n(418));r.flags=r.flags&-4097|2,Me=!1,Mt=r}}}function Ap(r){for(r=r.return;r!==null&&r.tag!==5&&r.tag!==3&&r.tag!==13;)r=r.return;Mt=r}function ha(r){if(r!==Mt)return!1;if(!Me)return Ap(r),Me=!0,!1;var i;if((i=r.tag!==3)&&!(i=r.tag!==5)&&(i=r.type,i=i!=="head"&&i!=="body"&&!$u(r.type,r.memoizedProps)),i&&(i=Ft)){if(Yu(r))throw Dp(),Error(n(418));for(;i;)Np(r,i),i=Xn(i.nextSibling)}if(Ap(r),r.tag===13){if(r=r.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(n(317));e:{for(r=r.nextSibling,i=0;r;){if(r.nodeType===8){var a=r.data;if(a==="/$"){if(i===0){Ft=Xn(r.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++}r=r.nextSibling}Ft=null}}else Ft=Mt?Xn(r.stateNode.nextSibling):null;return!0}function Dp(){for(var r=Ft;r;)r=Xn(r.nextSibling)}function Ci(){Ft=Mt=null,Me=!1}function Ju(r){Xt===null?Xt=[r]:Xt.push(r)}var I0=Z.ReactCurrentBatchConfig;function Fs(r,i,a){if(r=a.ref,r!==null&&typeof r!="function"&&typeof r!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(n(309));var u=a.stateNode}if(!u)throw Error(n(147,r));var d=u,p=""+r;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===p?i.ref:(i=function(g){var w=d.refs;g===null?delete w[p]:w[p]=g},i._stringRef=p,i)}if(typeof r!="string")throw Error(n(284));if(!a._owner)throw Error(n(290,r))}return r}function fa(r,i){throw r=Object.prototype.toString.call(i),Error(n(31,r==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":r))}function Op(r){var i=r._init;return i(r._payload)}function Lp(r){function i(R,S){if(r){var b=R.deletions;b===null?(R.deletions=[S],R.flags|=16):b.push(S)}}function a(R,S){if(!r)return null;for(;S!==null;)i(R,S),S=S.sibling;return null}function u(R,S){for(R=new Map;S!==null;)S.key!==null?R.set(S.key,S):R.set(S.index,S),S=S.sibling;return R}function d(R,S){return R=ur(R,S),R.index=0,R.sibling=null,R}function p(R,S,b){return R.index=b,r?(b=R.alternate,b!==null?(b=b.index,b<S?(R.flags|=2,S):b):(R.flags|=2,S)):(R.flags|=1048576,S)}function g(R){return r&&R.alternate===null&&(R.flags|=2),R}function w(R,S,b,z){return S===null||S.tag!==6?(S=Wc(b,R.mode,z),S.return=R,S):(S=d(S,b),S.return=R,S)}function C(R,S,b,z){var X=b.type;return X===_e?F(R,S,b.props.children,z,b.key):S!==null&&(S.elementType===X||typeof X=="object"&&X!==null&&X.$$typeof===Re&&Op(X)===S.type)?(z=d(S,b.props),z.ref=Fs(R,S,b),z.return=R,z):(z=Fa(b.type,b.key,b.props,null,R.mode,z),z.ref=Fs(R,S,b),z.return=R,z)}function P(R,S,b,z){return S===null||S.tag!==4||S.stateNode.containerInfo!==b.containerInfo||S.stateNode.implementation!==b.implementation?(S=Bc(b,R.mode,z),S.return=R,S):(S=d(S,b.children||[]),S.return=R,S)}function F(R,S,b,z,X){return S===null||S.tag!==7?(S=zr(b,R.mode,z,X),S.return=R,S):(S=d(S,b),S.return=R,S)}function U(R,S,b){if(typeof S=="string"&&S!==""||typeof S=="number")return S=Wc(""+S,R.mode,b),S.return=R,S;if(typeof S=="object"&&S!==null){switch(S.$$typeof){case ce:return b=Fa(S.type,S.key,S.props,null,R.mode,b),b.ref=Fs(R,null,S),b.return=R,b;case ye:return S=Bc(S,R.mode,b),S.return=R,S;case Re:var z=S._init;return U(R,z(S._payload),b)}if(hs(S)||re(S))return S=zr(S,R.mode,b,null),S.return=R,S;fa(R,S)}return null}function M(R,S,b,z){var X=S!==null?S.key:null;if(typeof b=="string"&&b!==""||typeof b=="number")return X!==null?null:w(R,S,""+b,z);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case ce:return b.key===X?C(R,S,b,z):null;case ye:return b.key===X?P(R,S,b,z):null;case Re:return X=b._init,M(R,S,X(b._payload),z)}if(hs(b)||re(b))return X!==null?null:F(R,S,b,z,null);fa(R,b)}return null}function B(R,S,b,z,X){if(typeof z=="string"&&z!==""||typeof z=="number")return R=R.get(b)||null,w(S,R,""+z,X);if(typeof z=="object"&&z!==null){switch(z.$$typeof){case ce:return R=R.get(z.key===null?b:z.key)||null,C(S,R,z,X);case ye:return R=R.get(z.key===null?b:z.key)||null,P(S,R,z,X);case Re:var ie=z._init;return B(R,S,b,ie(z._payload),X)}if(hs(z)||re(z))return R=R.get(b)||null,F(S,R,z,X,null);fa(S,z)}return null}function G(R,S,b,z){for(var X=null,ie=null,se=S,le=S=0,rt=null;se!==null&&le<b.length;le++){se.index>le?(rt=se,se=null):rt=se.sibling;var Ce=M(R,se,b[le],z);if(Ce===null){se===null&&(se=rt);break}r&&se&&Ce.alternate===null&&i(R,se),S=p(Ce,S,le),ie===null?X=Ce:ie.sibling=Ce,ie=Ce,se=rt}if(le===b.length)return a(R,se),Me&&Ar(R,le),X;if(se===null){for(;le<b.length;le++)se=U(R,b[le],z),se!==null&&(S=p(se,S,le),ie===null?X=se:ie.sibling=se,ie=se);return Me&&Ar(R,le),X}for(se=u(R,se);le<b.length;le++)rt=B(se,R,le,b[le],z),rt!==null&&(r&&rt.alternate!==null&&se.delete(rt.key===null?le:rt.key),S=p(rt,S,le),ie===null?X=rt:ie.sibling=rt,ie=rt);return r&&se.forEach(function(cr){return i(R,cr)}),Me&&Ar(R,le),X}function J(R,S,b,z){var X=re(b);if(typeof X!="function")throw Error(n(150));if(b=X.call(b),b==null)throw Error(n(151));for(var ie=X=null,se=S,le=S=0,rt=null,Ce=b.next();se!==null&&!Ce.done;le++,Ce=b.next()){se.index>le?(rt=se,se=null):rt=se.sibling;var cr=M(R,se,Ce.value,z);if(cr===null){se===null&&(se=rt);break}r&&se&&cr.alternate===null&&i(R,se),S=p(cr,S,le),ie===null?X=cr:ie.sibling=cr,ie=cr,se=rt}if(Ce.done)return a(R,se),Me&&Ar(R,le),X;if(se===null){for(;!Ce.done;le++,Ce=b.next())Ce=U(R,Ce.value,z),Ce!==null&&(S=p(Ce,S,le),ie===null?X=Ce:ie.sibling=Ce,ie=Ce);return Me&&Ar(R,le),X}for(se=u(R,se);!Ce.done;le++,Ce=b.next())Ce=B(se,R,le,Ce.value,z),Ce!==null&&(r&&Ce.alternate!==null&&se.delete(Ce.key===null?le:Ce.key),S=p(Ce,S,le),ie===null?X=Ce:ie.sibling=Ce,ie=Ce);return r&&se.forEach(function(iC){return i(R,iC)}),Me&&Ar(R,le),X}function He(R,S,b,z){if(typeof b=="object"&&b!==null&&b.type===_e&&b.key===null&&(b=b.props.children),typeof b=="object"&&b!==null){switch(b.$$typeof){case ce:e:{for(var X=b.key,ie=S;ie!==null;){if(ie.key===X){if(X=b.type,X===_e){if(ie.tag===7){a(R,ie.sibling),S=d(ie,b.props.children),S.return=R,R=S;break e}}else if(ie.elementType===X||typeof X=="object"&&X!==null&&X.$$typeof===Re&&Op(X)===ie.type){a(R,ie.sibling),S=d(ie,b.props),S.ref=Fs(R,ie,b),S.return=R,R=S;break e}a(R,ie);break}else i(R,ie);ie=ie.sibling}b.type===_e?(S=zr(b.props.children,R.mode,z,b.key),S.return=R,R=S):(z=Fa(b.type,b.key,b.props,null,R.mode,z),z.ref=Fs(R,S,b),z.return=R,R=z)}return g(R);case ye:e:{for(ie=b.key;S!==null;){if(S.key===ie)if(S.tag===4&&S.stateNode.containerInfo===b.containerInfo&&S.stateNode.implementation===b.implementation){a(R,S.sibling),S=d(S,b.children||[]),S.return=R,R=S;break e}else{a(R,S);break}else i(R,S);S=S.sibling}S=Bc(b,R.mode,z),S.return=R,R=S}return g(R);case Re:return ie=b._init,He(R,S,ie(b._payload),z)}if(hs(b))return G(R,S,b,z);if(re(b))return J(R,S,b,z);fa(R,b)}return typeof b=="string"&&b!==""||typeof b=="number"?(b=""+b,S!==null&&S.tag===6?(a(R,S.sibling),S=d(S,b),S.return=R,R=S):(a(R,S),S=Wc(b,R.mode,z),S.return=R,R=S),g(R)):a(R,S)}return He}var ki=Lp(!0),Mp=Lp(!1),pa=Zn(null),ma=null,Si=null,Xu=null;function Zu(){Xu=Si=ma=null}function ec(r){var i=pa.current;Le(pa),r._currentValue=i}function tc(r,i,a){for(;r!==null;){var u=r.alternate;if((r.childLanes&i)!==i?(r.childLanes|=i,u!==null&&(u.childLanes|=i)):u!==null&&(u.childLanes&i)!==i&&(u.childLanes|=i),r===a)break;r=r.return}}function Ii(r,i){ma=r,Xu=Si=null,r=r.dependencies,r!==null&&r.firstContext!==null&&((r.lanes&i)!==0&&(bt=!0),r.firstContext=null)}function Wt(r){var i=r._currentValue;if(Xu!==r)if(r={context:r,memoizedValue:i,next:null},Si===null){if(ma===null)throw Error(n(308));Si=r,ma.dependencies={lanes:0,firstContext:r}}else Si=Si.next=r;return i}var Dr=null;function nc(r){Dr===null?Dr=[r]:Dr.push(r)}function Fp(r,i,a,u){var d=i.interleaved;return d===null?(a.next=a,nc(i)):(a.next=d.next,d.next=a),i.interleaved=a,Nn(r,u)}function Nn(r,i){r.lanes|=i;var a=r.alternate;for(a!==null&&(a.lanes|=i),a=r,r=r.return;r!==null;)r.childLanes|=i,a=r.alternate,a!==null&&(a.childLanes|=i),a=r,r=r.return;return a.tag===3?a.stateNode:null}var nr=!1;function rc(r){r.updateQueue={baseState:r.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function jp(r,i){r=r.updateQueue,i.updateQueue===r&&(i.updateQueue={baseState:r.baseState,firstBaseUpdate:r.firstBaseUpdate,lastBaseUpdate:r.lastBaseUpdate,shared:r.shared,effects:r.effects})}function Pn(r,i){return{eventTime:r,lane:i,tag:0,payload:null,callback:null,next:null}}function rr(r,i,a){var u=r.updateQueue;if(u===null)return null;if(u=u.shared,(ve&2)!==0){var d=u.pending;return d===null?i.next=i:(i.next=d.next,d.next=i),u.pending=i,Nn(r,a)}return d=u.interleaved,d===null?(i.next=i,nc(u)):(i.next=d.next,d.next=i),u.interleaved=i,Nn(r,a)}function ga(r,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194240)!==0)){var u=i.lanes;u&=r.pendingLanes,a|=u,i.lanes=a,yu(r,a)}}function Up(r,i){var a=r.updateQueue,u=r.alternate;if(u!==null&&(u=u.updateQueue,a===u)){var d=null,p=null;if(a=a.firstBaseUpdate,a!==null){do{var g={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};p===null?d=p=g:p=p.next=g,a=a.next}while(a!==null);p===null?d=p=i:p=p.next=i}else d=p=i;a={baseState:u.baseState,firstBaseUpdate:d,lastBaseUpdate:p,shared:u.shared,effects:u.effects},r.updateQueue=a;return}r=a.lastBaseUpdate,r===null?a.firstBaseUpdate=i:r.next=i,a.lastBaseUpdate=i}function ya(r,i,a,u){var d=r.updateQueue;nr=!1;var p=d.firstBaseUpdate,g=d.lastBaseUpdate,w=d.shared.pending;if(w!==null){d.shared.pending=null;var C=w,P=C.next;C.next=null,g===null?p=P:g.next=P,g=C;var F=r.alternate;F!==null&&(F=F.updateQueue,w=F.lastBaseUpdate,w!==g&&(w===null?F.firstBaseUpdate=P:w.next=P,F.lastBaseUpdate=C))}if(p!==null){var U=d.baseState;g=0,F=P=C=null,w=p;do{var M=w.lane,B=w.eventTime;if((u&M)===M){F!==null&&(F=F.next={eventTime:B,lane:0,tag:w.tag,payload:w.payload,callback:w.callback,next:null});e:{var G=r,J=w;switch(M=i,B=a,J.tag){case 1:if(G=J.payload,typeof G=="function"){U=G.call(B,U,M);break e}U=G;break e;case 3:G.flags=G.flags&-65537|128;case 0:if(G=J.payload,M=typeof G=="function"?G.call(B,U,M):G,M==null)break e;U=L({},U,M);break e;case 2:nr=!0}}w.callback!==null&&w.lane!==0&&(r.flags|=64,M=d.effects,M===null?d.effects=[w]:M.push(w))}else B={eventTime:B,lane:M,tag:w.tag,payload:w.payload,callback:w.callback,next:null},F===null?(P=F=B,C=U):F=F.next=B,g|=M;if(w=w.next,w===null){if(w=d.shared.pending,w===null)break;M=w,w=M.next,M.next=null,d.lastBaseUpdate=M,d.shared.pending=null}}while(!0);if(F===null&&(C=U),d.baseState=C,d.firstBaseUpdate=P,d.lastBaseUpdate=F,i=d.shared.interleaved,i!==null){d=i;do g|=d.lane,d=d.next;while(d!==i)}else p===null&&(d.shared.lanes=0);Mr|=g,r.lanes=g,r.memoizedState=U}}function zp(r,i,a){if(r=i.effects,i.effects=null,r!==null)for(i=0;i<r.length;i++){var u=r[i],d=u.callback;if(d!==null){if(u.callback=null,u=a,typeof d!="function")throw Error(n(191,d));d.call(u)}}}var js={},gn=Zn(js),Us=Zn(js),zs=Zn(js);function Or(r){if(r===js)throw Error(n(174));return r}function ic(r,i){switch(be(zs,i),be(Us,r),be(gn,js),r=i.nodeType,r){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:su(null,"");break;default:r=r===8?i.parentNode:i,i=r.namespaceURI||null,r=r.tagName,i=su(i,r)}Le(gn),be(gn,i)}function Ti(){Le(gn),Le(Us),Le(zs)}function $p(r){Or(zs.current);var i=Or(gn.current),a=su(i,r.type);i!==a&&(be(Us,r),be(gn,a))}function sc(r){Us.current===r&&(Le(gn),Le(Us))}var je=Zn(0);function _a(r){for(var i=r;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===r)break;for(;i.sibling===null;){if(i.return===null||i.return===r)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var oc=[];function ac(){for(var r=0;r<oc.length;r++)oc[r]._workInProgressVersionPrimary=null;oc.length=0}var va=Z.ReactCurrentDispatcher,lc=Z.ReactCurrentBatchConfig,Lr=0,Ue=null,Ye=null,tt=null,wa=!1,$s=!1,Ws=0,T0=0;function yt(){throw Error(n(321))}function uc(r,i){if(i===null)return!1;for(var a=0;a<i.length&&a<r.length;a++)if(!Jt(r[a],i[a]))return!1;return!0}function cc(r,i,a,u,d,p){if(Lr=p,Ue=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,va.current=r===null||r.memoizedState===null?N0:P0,r=a(u,d),$s){p=0;do{if($s=!1,Ws=0,25<=p)throw Error(n(301));p+=1,tt=Ye=null,i.updateQueue=null,va.current=A0,r=a(u,d)}while($s)}if(va.current=ka,i=Ye!==null&&Ye.next!==null,Lr=0,tt=Ye=Ue=null,wa=!1,i)throw Error(n(300));return r}function dc(){var r=Ws!==0;return Ws=0,r}function yn(){var r={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return tt===null?Ue.memoizedState=tt=r:tt=tt.next=r,tt}function Bt(){if(Ye===null){var r=Ue.alternate;r=r!==null?r.memoizedState:null}else r=Ye.next;var i=tt===null?Ue.memoizedState:tt.next;if(i!==null)tt=i,Ye=r;else{if(r===null)throw Error(n(310));Ye=r,r={memoizedState:Ye.memoizedState,baseState:Ye.baseState,baseQueue:Ye.baseQueue,queue:Ye.queue,next:null},tt===null?Ue.memoizedState=tt=r:tt=tt.next=r}return tt}function Bs(r,i){return typeof i=="function"?i(r):i}function hc(r){var i=Bt(),a=i.queue;if(a===null)throw Error(n(311));a.lastRenderedReducer=r;var u=Ye,d=u.baseQueue,p=a.pending;if(p!==null){if(d!==null){var g=d.next;d.next=p.next,p.next=g}u.baseQueue=d=p,a.pending=null}if(d!==null){p=d.next,u=u.baseState;var w=g=null,C=null,P=p;do{var F=P.lane;if((Lr&F)===F)C!==null&&(C=C.next={lane:0,action:P.action,hasEagerState:P.hasEagerState,eagerState:P.eagerState,next:null}),u=P.hasEagerState?P.eagerState:r(u,P.action);else{var U={lane:F,action:P.action,hasEagerState:P.hasEagerState,eagerState:P.eagerState,next:null};C===null?(w=C=U,g=u):C=C.next=U,Ue.lanes|=F,Mr|=F}P=P.next}while(P!==null&&P!==p);C===null?g=u:C.next=w,Jt(u,i.memoizedState)||(bt=!0),i.memoizedState=u,i.baseState=g,i.baseQueue=C,a.lastRenderedState=u}if(r=a.interleaved,r!==null){d=r;do p=d.lane,Ue.lanes|=p,Mr|=p,d=d.next;while(d!==r)}else d===null&&(a.lanes=0);return[i.memoizedState,a.dispatch]}function fc(r){var i=Bt(),a=i.queue;if(a===null)throw Error(n(311));a.lastRenderedReducer=r;var u=a.dispatch,d=a.pending,p=i.memoizedState;if(d!==null){a.pending=null;var g=d=d.next;do p=r(p,g.action),g=g.next;while(g!==d);Jt(p,i.memoizedState)||(bt=!0),i.memoizedState=p,i.baseQueue===null&&(i.baseState=p),a.lastRenderedState=p}return[p,u]}function Wp(){}function Bp(r,i){var a=Ue,u=Bt(),d=i(),p=!Jt(u.memoizedState,d);if(p&&(u.memoizedState=d,bt=!0),u=u.queue,pc(Gp.bind(null,a,u,r),[r]),u.getSnapshot!==i||p||tt!==null&&tt.memoizedState.tag&1){if(a.flags|=2048,Vs(9,Hp.bind(null,a,u,d,i),void 0,null),nt===null)throw Error(n(349));(Lr&30)!==0||Vp(a,i,d)}return d}function Vp(r,i,a){r.flags|=16384,r={getSnapshot:i,value:a},i=Ue.updateQueue,i===null?(i={lastEffect:null,stores:null},Ue.updateQueue=i,i.stores=[r]):(a=i.stores,a===null?i.stores=[r]:a.push(r))}function Hp(r,i,a,u){i.value=a,i.getSnapshot=u,qp(i)&&Kp(r)}function Gp(r,i,a){return a(function(){qp(i)&&Kp(r)})}function qp(r){var i=r.getSnapshot;r=r.value;try{var a=i();return!Jt(r,a)}catch{return!0}}function Kp(r){var i=Nn(r,1);i!==null&&nn(i,r,1,-1)}function Yp(r){var i=yn();return typeof r=="function"&&(r=r()),i.memoizedState=i.baseState=r,r={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Bs,lastRenderedState:r},i.queue=r,r=r.dispatch=b0.bind(null,Ue,r),[i.memoizedState,r]}function Vs(r,i,a,u){return r={tag:r,create:i,destroy:a,deps:u,next:null},i=Ue.updateQueue,i===null?(i={lastEffect:null,stores:null},Ue.updateQueue=i,i.lastEffect=r.next=r):(a=i.lastEffect,a===null?i.lastEffect=r.next=r:(u=a.next,a.next=r,r.next=u,i.lastEffect=r)),r}function Qp(){return Bt().memoizedState}function Ea(r,i,a,u){var d=yn();Ue.flags|=r,d.memoizedState=Vs(1|i,a,void 0,u===void 0?null:u)}function Ca(r,i,a,u){var d=Bt();u=u===void 0?null:u;var p=void 0;if(Ye!==null){var g=Ye.memoizedState;if(p=g.destroy,u!==null&&uc(u,g.deps)){d.memoizedState=Vs(i,a,p,u);return}}Ue.flags|=r,d.memoizedState=Vs(1|i,a,p,u)}function Jp(r,i){return Ea(8390656,8,r,i)}function pc(r,i){return Ca(2048,8,r,i)}function Xp(r,i){return Ca(4,2,r,i)}function Zp(r,i){return Ca(4,4,r,i)}function em(r,i){if(typeof i=="function")return r=r(),i(r),function(){i(null)};if(i!=null)return r=r(),i.current=r,function(){i.current=null}}function tm(r,i,a){return a=a!=null?a.concat([r]):null,Ca(4,4,em.bind(null,i,r),a)}function mc(){}function nm(r,i){var a=Bt();i=i===void 0?null:i;var u=a.memoizedState;return u!==null&&i!==null&&uc(i,u[1])?u[0]:(a.memoizedState=[r,i],r)}function rm(r,i){var a=Bt();i=i===void 0?null:i;var u=a.memoizedState;return u!==null&&i!==null&&uc(i,u[1])?u[0]:(r=r(),a.memoizedState=[r,i],r)}function im(r,i,a){return(Lr&21)===0?(r.baseState&&(r.baseState=!1,bt=!0),r.memoizedState=a):(Jt(a,i)||(a=Of(),Ue.lanes|=a,Mr|=a,r.baseState=!0),i)}function x0(r,i){var a=Ie;Ie=a!==0&&4>a?a:4,r(!0);var u=lc.transition;lc.transition={};try{r(!1),i()}finally{Ie=a,lc.transition=u}}function sm(){return Bt().memoizedState}function R0(r,i,a){var u=ar(r);if(a={lane:u,action:a,hasEagerState:!1,eagerState:null,next:null},om(r))am(i,a);else if(a=Fp(r,i,a,u),a!==null){var d=kt();nn(a,r,u,d),lm(a,i,u)}}function b0(r,i,a){var u=ar(r),d={lane:u,action:a,hasEagerState:!1,eagerState:null,next:null};if(om(r))am(i,d);else{var p=r.alternate;if(r.lanes===0&&(p===null||p.lanes===0)&&(p=i.lastRenderedReducer,p!==null))try{var g=i.lastRenderedState,w=p(g,a);if(d.hasEagerState=!0,d.eagerState=w,Jt(w,g)){var C=i.interleaved;C===null?(d.next=d,nc(i)):(d.next=C.next,C.next=d),i.interleaved=d;return}}catch{}finally{}a=Fp(r,i,d,u),a!==null&&(d=kt(),nn(a,r,u,d),lm(a,i,u))}}function om(r){var i=r.alternate;return r===Ue||i!==null&&i===Ue}function am(r,i){$s=wa=!0;var a=r.pending;a===null?i.next=i:(i.next=a.next,a.next=i),r.pending=i}function lm(r,i,a){if((a&4194240)!==0){var u=i.lanes;u&=r.pendingLanes,a|=u,i.lanes=a,yu(r,a)}}var ka={readContext:Wt,useCallback:yt,useContext:yt,useEffect:yt,useImperativeHandle:yt,useInsertionEffect:yt,useLayoutEffect:yt,useMemo:yt,useReducer:yt,useRef:yt,useState:yt,useDebugValue:yt,useDeferredValue:yt,useTransition:yt,useMutableSource:yt,useSyncExternalStore:yt,useId:yt,unstable_isNewReconciler:!1},N0={readContext:Wt,useCallback:function(r,i){return yn().memoizedState=[r,i===void 0?null:i],r},useContext:Wt,useEffect:Jp,useImperativeHandle:function(r,i,a){return a=a!=null?a.concat([r]):null,Ea(4194308,4,em.bind(null,i,r),a)},useLayoutEffect:function(r,i){return Ea(4194308,4,r,i)},useInsertionEffect:function(r,i){return Ea(4,2,r,i)},useMemo:function(r,i){var a=yn();return i=i===void 0?null:i,r=r(),a.memoizedState=[r,i],r},useReducer:function(r,i,a){var u=yn();return i=a!==void 0?a(i):i,u.memoizedState=u.baseState=i,r={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:r,lastRenderedState:i},u.queue=r,r=r.dispatch=R0.bind(null,Ue,r),[u.memoizedState,r]},useRef:function(r){var i=yn();return r={current:r},i.memoizedState=r},useState:Yp,useDebugValue:mc,useDeferredValue:function(r){return yn().memoizedState=r},useTransition:function(){var r=Yp(!1),i=r[0];return r=x0.bind(null,r[1]),yn().memoizedState=r,[i,r]},useMutableSource:function(){},useSyncExternalStore:function(r,i,a){var u=Ue,d=yn();if(Me){if(a===void 0)throw Error(n(407));a=a()}else{if(a=i(),nt===null)throw Error(n(349));(Lr&30)!==0||Vp(u,i,a)}d.memoizedState=a;var p={value:a,getSnapshot:i};return d.queue=p,Jp(Gp.bind(null,u,p,r),[r]),u.flags|=2048,Vs(9,Hp.bind(null,u,p,a,i),void 0,null),a},useId:function(){var r=yn(),i=nt.identifierPrefix;if(Me){var a=bn,u=Rn;a=(u&~(1<<32-Qt(u)-1)).toString(32)+a,i=":"+i+"R"+a,a=Ws++,0<a&&(i+="H"+a.toString(32)),i+=":"}else a=T0++,i=":"+i+"r"+a.toString(32)+":";return r.memoizedState=i},unstable_isNewReconciler:!1},P0={readContext:Wt,useCallback:nm,useContext:Wt,useEffect:pc,useImperativeHandle:tm,useInsertionEffect:Xp,useLayoutEffect:Zp,useMemo:rm,useReducer:hc,useRef:Qp,useState:function(){return hc(Bs)},useDebugValue:mc,useDeferredValue:function(r){var i=Bt();return im(i,Ye.memoizedState,r)},useTransition:function(){var r=hc(Bs)[0],i=Bt().memoizedState;return[r,i]},useMutableSource:Wp,useSyncExternalStore:Bp,useId:sm,unstable_isNewReconciler:!1},A0={readContext:Wt,useCallback:nm,useContext:Wt,useEffect:pc,useImperativeHandle:tm,useInsertionEffect:Xp,useLayoutEffect:Zp,useMemo:rm,useReducer:fc,useRef:Qp,useState:function(){return fc(Bs)},useDebugValue:mc,useDeferredValue:function(r){var i=Bt();return Ye===null?i.memoizedState=r:im(i,Ye.memoizedState,r)},useTransition:function(){var r=fc(Bs)[0],i=Bt().memoizedState;return[r,i]},useMutableSource:Wp,useSyncExternalStore:Bp,useId:sm,unstable_isNewReconciler:!1};function Zt(r,i){if(r&&r.defaultProps){i=L({},i),r=r.defaultProps;for(var a in r)i[a]===void 0&&(i[a]=r[a]);return i}return i}function gc(r,i,a,u){i=r.memoizedState,a=a(u,i),a=a==null?i:L({},i,a),r.memoizedState=a,r.lanes===0&&(r.updateQueue.baseState=a)}var Sa={isMounted:function(r){return(r=r._reactInternals)?Rr(r)===r:!1},enqueueSetState:function(r,i,a){r=r._reactInternals;var u=kt(),d=ar(r),p=Pn(u,d);p.payload=i,a!=null&&(p.callback=a),i=rr(r,p,d),i!==null&&(nn(i,r,d,u),ga(i,r,d))},enqueueReplaceState:function(r,i,a){r=r._reactInternals;var u=kt(),d=ar(r),p=Pn(u,d);p.tag=1,p.payload=i,a!=null&&(p.callback=a),i=rr(r,p,d),i!==null&&(nn(i,r,d,u),ga(i,r,d))},enqueueForceUpdate:function(r,i){r=r._reactInternals;var a=kt(),u=ar(r),d=Pn(a,u);d.tag=2,i!=null&&(d.callback=i),i=rr(r,d,u),i!==null&&(nn(i,r,u,a),ga(i,r,u))}};function um(r,i,a,u,d,p,g){return r=r.stateNode,typeof r.shouldComponentUpdate=="function"?r.shouldComponentUpdate(u,p,g):i.prototype&&i.prototype.isPureReactComponent?!Ns(a,u)||!Ns(d,p):!0}function cm(r,i,a){var u=!1,d=er,p=i.contextType;return typeof p=="object"&&p!==null?p=Wt(p):(d=Rt(i)?Nr:gt.current,u=i.contextTypes,p=(u=u!=null)?vi(r,d):er),i=new i(a,p),r.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Sa,r.stateNode=i,i._reactInternals=r,u&&(r=r.stateNode,r.__reactInternalMemoizedUnmaskedChildContext=d,r.__reactInternalMemoizedMaskedChildContext=p),i}function dm(r,i,a,u){r=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,u),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,u),i.state!==r&&Sa.enqueueReplaceState(i,i.state,null)}function yc(r,i,a,u){var d=r.stateNode;d.props=a,d.state=r.memoizedState,d.refs={},rc(r);var p=i.contextType;typeof p=="object"&&p!==null?d.context=Wt(p):(p=Rt(i)?Nr:gt.current,d.context=vi(r,p)),d.state=r.memoizedState,p=i.getDerivedStateFromProps,typeof p=="function"&&(gc(r,i,p,a),d.state=r.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(i=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),i!==d.state&&Sa.enqueueReplaceState(d,d.state,null),ya(r,a,d,u),d.state=r.memoizedState),typeof d.componentDidMount=="function"&&(r.flags|=4194308)}function xi(r,i){try{var a="",u=i;do a+=ee(u),u=u.return;while(u);var d=a}catch(p){d=`
Error generating stack: `+p.message+`
`+p.stack}return{value:r,source:i,stack:d,digest:null}}function _c(r,i,a){return{value:r,source:null,stack:a??null,digest:i??null}}function vc(r,i){try{console.error(i.value)}catch(a){setTimeout(function(){throw a})}}var D0=typeof WeakMap=="function"?WeakMap:Map;function hm(r,i,a){a=Pn(-1,a),a.tag=3,a.payload={element:null};var u=i.value;return a.callback=function(){Pa||(Pa=!0,Oc=u),vc(r,i)},a}function fm(r,i,a){a=Pn(-1,a),a.tag=3;var u=r.type.getDerivedStateFromError;if(typeof u=="function"){var d=i.value;a.payload=function(){return u(d)},a.callback=function(){vc(r,i)}}var p=r.stateNode;return p!==null&&typeof p.componentDidCatch=="function"&&(a.callback=function(){vc(r,i),typeof u!="function"&&(sr===null?sr=new Set([this]):sr.add(this));var g=i.stack;this.componentDidCatch(i.value,{componentStack:g!==null?g:""})}),a}function pm(r,i,a){var u=r.pingCache;if(u===null){u=r.pingCache=new D0;var d=new Set;u.set(i,d)}else d=u.get(i),d===void 0&&(d=new Set,u.set(i,d));d.has(a)||(d.add(a),r=q0.bind(null,r,i,a),i.then(r,r))}function mm(r){do{var i;if((i=r.tag===13)&&(i=r.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return r;r=r.return}while(r!==null);return null}function gm(r,i,a,u,d){return(r.mode&1)===0?(r===i?r.flags|=65536:(r.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(i=Pn(-1,1),i.tag=2,rr(a,i,1))),a.lanes|=1),r):(r.flags|=65536,r.lanes=d,r)}var O0=Z.ReactCurrentOwner,bt=!1;function Ct(r,i,a,u){i.child=r===null?Mp(i,null,a,u):ki(i,r.child,a,u)}function ym(r,i,a,u,d){a=a.render;var p=i.ref;return Ii(i,d),u=cc(r,i,a,u,p,d),a=dc(),r!==null&&!bt?(i.updateQueue=r.updateQueue,i.flags&=-2053,r.lanes&=~d,An(r,i,d)):(Me&&a&&qu(i),i.flags|=1,Ct(r,i,u,d),i.child)}function _m(r,i,a,u,d){if(r===null){var p=a.type;return typeof p=="function"&&!$c(p)&&p.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(i.tag=15,i.type=p,vm(r,i,p,u,d)):(r=Fa(a.type,null,u,i,i.mode,d),r.ref=i.ref,r.return=i,i.child=r)}if(p=r.child,(r.lanes&d)===0){var g=p.memoizedProps;if(a=a.compare,a=a!==null?a:Ns,a(g,u)&&r.ref===i.ref)return An(r,i,d)}return i.flags|=1,r=ur(p,u),r.ref=i.ref,r.return=i,i.child=r}function vm(r,i,a,u,d){if(r!==null){var p=r.memoizedProps;if(Ns(p,u)&&r.ref===i.ref)if(bt=!1,i.pendingProps=u=p,(r.lanes&d)!==0)(r.flags&131072)!==0&&(bt=!0);else return i.lanes=r.lanes,An(r,i,d)}return wc(r,i,a,u,d)}function wm(r,i,a){var u=i.pendingProps,d=u.children,p=r!==null?r.memoizedState:null;if(u.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},be(bi,jt),jt|=a;else{if((a&1073741824)===0)return r=p!==null?p.baseLanes|a:a,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:r,cachePool:null,transitions:null},i.updateQueue=null,be(bi,jt),jt|=r,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},u=p!==null?p.baseLanes:a,be(bi,jt),jt|=u}else p!==null?(u=p.baseLanes|a,i.memoizedState=null):u=a,be(bi,jt),jt|=u;return Ct(r,i,d,a),i.child}function Em(r,i){var a=i.ref;(r===null&&a!==null||r!==null&&r.ref!==a)&&(i.flags|=512,i.flags|=2097152)}function wc(r,i,a,u,d){var p=Rt(a)?Nr:gt.current;return p=vi(i,p),Ii(i,d),a=cc(r,i,a,u,p,d),u=dc(),r!==null&&!bt?(i.updateQueue=r.updateQueue,i.flags&=-2053,r.lanes&=~d,An(r,i,d)):(Me&&u&&qu(i),i.flags|=1,Ct(r,i,a,d),i.child)}function Cm(r,i,a,u,d){if(Rt(a)){var p=!0;la(i)}else p=!1;if(Ii(i,d),i.stateNode===null)Ta(r,i),cm(i,a,u),yc(i,a,u,d),u=!0;else if(r===null){var g=i.stateNode,w=i.memoizedProps;g.props=w;var C=g.context,P=a.contextType;typeof P=="object"&&P!==null?P=Wt(P):(P=Rt(a)?Nr:gt.current,P=vi(i,P));var F=a.getDerivedStateFromProps,U=typeof F=="function"||typeof g.getSnapshotBeforeUpdate=="function";U||typeof g.UNSAFE_componentWillReceiveProps!="function"&&typeof g.componentWillReceiveProps!="function"||(w!==u||C!==P)&&dm(i,g,u,P),nr=!1;var M=i.memoizedState;g.state=M,ya(i,u,g,d),C=i.memoizedState,w!==u||M!==C||xt.current||nr?(typeof F=="function"&&(gc(i,a,F,u),C=i.memoizedState),(w=nr||um(i,a,w,u,M,C,P))?(U||typeof g.UNSAFE_componentWillMount!="function"&&typeof g.componentWillMount!="function"||(typeof g.componentWillMount=="function"&&g.componentWillMount(),typeof g.UNSAFE_componentWillMount=="function"&&g.UNSAFE_componentWillMount()),typeof g.componentDidMount=="function"&&(i.flags|=4194308)):(typeof g.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=u,i.memoizedState=C),g.props=u,g.state=C,g.context=P,u=w):(typeof g.componentDidMount=="function"&&(i.flags|=4194308),u=!1)}else{g=i.stateNode,jp(r,i),w=i.memoizedProps,P=i.type===i.elementType?w:Zt(i.type,w),g.props=P,U=i.pendingProps,M=g.context,C=a.contextType,typeof C=="object"&&C!==null?C=Wt(C):(C=Rt(a)?Nr:gt.current,C=vi(i,C));var B=a.getDerivedStateFromProps;(F=typeof B=="function"||typeof g.getSnapshotBeforeUpdate=="function")||typeof g.UNSAFE_componentWillReceiveProps!="function"&&typeof g.componentWillReceiveProps!="function"||(w!==U||M!==C)&&dm(i,g,u,C),nr=!1,M=i.memoizedState,g.state=M,ya(i,u,g,d);var G=i.memoizedState;w!==U||M!==G||xt.current||nr?(typeof B=="function"&&(gc(i,a,B,u),G=i.memoizedState),(P=nr||um(i,a,P,u,M,G,C)||!1)?(F||typeof g.UNSAFE_componentWillUpdate!="function"&&typeof g.componentWillUpdate!="function"||(typeof g.componentWillUpdate=="function"&&g.componentWillUpdate(u,G,C),typeof g.UNSAFE_componentWillUpdate=="function"&&g.UNSAFE_componentWillUpdate(u,G,C)),typeof g.componentDidUpdate=="function"&&(i.flags|=4),typeof g.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof g.componentDidUpdate!="function"||w===r.memoizedProps&&M===r.memoizedState||(i.flags|=4),typeof g.getSnapshotBeforeUpdate!="function"||w===r.memoizedProps&&M===r.memoizedState||(i.flags|=1024),i.memoizedProps=u,i.memoizedState=G),g.props=u,g.state=G,g.context=C,u=P):(typeof g.componentDidUpdate!="function"||w===r.memoizedProps&&M===r.memoizedState||(i.flags|=4),typeof g.getSnapshotBeforeUpdate!="function"||w===r.memoizedProps&&M===r.memoizedState||(i.flags|=1024),u=!1)}return Ec(r,i,a,u,p,d)}function Ec(r,i,a,u,d,p){Em(r,i);var g=(i.flags&128)!==0;if(!u&&!g)return d&&xp(i,a,!1),An(r,i,p);u=i.stateNode,O0.current=i;var w=g&&typeof a.getDerivedStateFromError!="function"?null:u.render();return i.flags|=1,r!==null&&g?(i.child=ki(i,r.child,null,p),i.child=ki(i,null,w,p)):Ct(r,i,w,p),i.memoizedState=u.state,d&&xp(i,a,!0),i.child}function km(r){var i=r.stateNode;i.pendingContext?Ip(r,i.pendingContext,i.pendingContext!==i.context):i.context&&Ip(r,i.context,!1),ic(r,i.containerInfo)}function Sm(r,i,a,u,d){return Ci(),Ju(d),i.flags|=256,Ct(r,i,a,u),i.child}var Cc={dehydrated:null,treeContext:null,retryLane:0};function kc(r){return{baseLanes:r,cachePool:null,transitions:null}}function Im(r,i,a){var u=i.pendingProps,d=je.current,p=!1,g=(i.flags&128)!==0,w;if((w=g)||(w=r!==null&&r.memoizedState===null?!1:(d&2)!==0),w?(p=!0,i.flags&=-129):(r===null||r.memoizedState!==null)&&(d|=1),be(je,d&1),r===null)return Qu(i),r=i.memoizedState,r!==null&&(r=r.dehydrated,r!==null)?((i.mode&1)===0?i.lanes=1:r.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(g=u.children,r=u.fallback,p?(u=i.mode,p=i.child,g={mode:"hidden",children:g},(u&1)===0&&p!==null?(p.childLanes=0,p.pendingProps=g):p=ja(g,u,0,null),r=zr(r,u,a,null),p.return=i,r.return=i,p.sibling=r,i.child=p,i.child.memoizedState=kc(a),i.memoizedState=Cc,r):Sc(i,g));if(d=r.memoizedState,d!==null&&(w=d.dehydrated,w!==null))return L0(r,i,g,u,w,d,a);if(p){p=u.fallback,g=i.mode,d=r.child,w=d.sibling;var C={mode:"hidden",children:u.children};return(g&1)===0&&i.child!==d?(u=i.child,u.childLanes=0,u.pendingProps=C,i.deletions=null):(u=ur(d,C),u.subtreeFlags=d.subtreeFlags&14680064),w!==null?p=ur(w,p):(p=zr(p,g,a,null),p.flags|=2),p.return=i,u.return=i,u.sibling=p,i.child=u,u=p,p=i.child,g=r.child.memoizedState,g=g===null?kc(a):{baseLanes:g.baseLanes|a,cachePool:null,transitions:g.transitions},p.memoizedState=g,p.childLanes=r.childLanes&~a,i.memoizedState=Cc,u}return p=r.child,r=p.sibling,u=ur(p,{mode:"visible",children:u.children}),(i.mode&1)===0&&(u.lanes=a),u.return=i,u.sibling=null,r!==null&&(a=i.deletions,a===null?(i.deletions=[r],i.flags|=16):a.push(r)),i.child=u,i.memoizedState=null,u}function Sc(r,i){return i=ja({mode:"visible",children:i},r.mode,0,null),i.return=r,r.child=i}function Ia(r,i,a,u){return u!==null&&Ju(u),ki(i,r.child,null,a),r=Sc(i,i.pendingProps.children),r.flags|=2,i.memoizedState=null,r}function L0(r,i,a,u,d,p,g){if(a)return i.flags&256?(i.flags&=-257,u=_c(Error(n(422))),Ia(r,i,g,u)):i.memoizedState!==null?(i.child=r.child,i.flags|=128,null):(p=u.fallback,d=i.mode,u=ja({mode:"visible",children:u.children},d,0,null),p=zr(p,d,g,null),p.flags|=2,u.return=i,p.return=i,u.sibling=p,i.child=u,(i.mode&1)!==0&&ki(i,r.child,null,g),i.child.memoizedState=kc(g),i.memoizedState=Cc,p);if((i.mode&1)===0)return Ia(r,i,g,null);if(d.data==="$!"){if(u=d.nextSibling&&d.nextSibling.dataset,u)var w=u.dgst;return u=w,p=Error(n(419)),u=_c(p,u,void 0),Ia(r,i,g,u)}if(w=(g&r.childLanes)!==0,bt||w){if(u=nt,u!==null){switch(g&-g){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(u.suspendedLanes|g))!==0?0:d,d!==0&&d!==p.retryLane&&(p.retryLane=d,Nn(r,d),nn(u,r,d,-1))}return zc(),u=_c(Error(n(421))),Ia(r,i,g,u)}return d.data==="$?"?(i.flags|=128,i.child=r.child,i=K0.bind(null,r),d._reactRetry=i,null):(r=p.treeContext,Ft=Xn(d.nextSibling),Mt=i,Me=!0,Xt=null,r!==null&&(zt[$t++]=Rn,zt[$t++]=bn,zt[$t++]=Pr,Rn=r.id,bn=r.overflow,Pr=i),i=Sc(i,u.children),i.flags|=4096,i)}function Tm(r,i,a){r.lanes|=i;var u=r.alternate;u!==null&&(u.lanes|=i),tc(r.return,i,a)}function Ic(r,i,a,u,d){var p=r.memoizedState;p===null?r.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:u,tail:a,tailMode:d}:(p.isBackwards=i,p.rendering=null,p.renderingStartTime=0,p.last=u,p.tail=a,p.tailMode=d)}function xm(r,i,a){var u=i.pendingProps,d=u.revealOrder,p=u.tail;if(Ct(r,i,u.children,a),u=je.current,(u&2)!==0)u=u&1|2,i.flags|=128;else{if(r!==null&&(r.flags&128)!==0)e:for(r=i.child;r!==null;){if(r.tag===13)r.memoizedState!==null&&Tm(r,a,i);else if(r.tag===19)Tm(r,a,i);else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===i)break e;for(;r.sibling===null;){if(r.return===null||r.return===i)break e;r=r.return}r.sibling.return=r.return,r=r.sibling}u&=1}if(be(je,u),(i.mode&1)===0)i.memoizedState=null;else switch(d){case"forwards":for(a=i.child,d=null;a!==null;)r=a.alternate,r!==null&&_a(r)===null&&(d=a),a=a.sibling;a=d,a===null?(d=i.child,i.child=null):(d=a.sibling,a.sibling=null),Ic(i,!1,d,a,p);break;case"backwards":for(a=null,d=i.child,i.child=null;d!==null;){if(r=d.alternate,r!==null&&_a(r)===null){i.child=d;break}r=d.sibling,d.sibling=a,a=d,d=r}Ic(i,!0,a,null,p);break;case"together":Ic(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Ta(r,i){(i.mode&1)===0&&r!==null&&(r.alternate=null,i.alternate=null,i.flags|=2)}function An(r,i,a){if(r!==null&&(i.dependencies=r.dependencies),Mr|=i.lanes,(a&i.childLanes)===0)return null;if(r!==null&&i.child!==r.child)throw Error(n(153));if(i.child!==null){for(r=i.child,a=ur(r,r.pendingProps),i.child=a,a.return=i;r.sibling!==null;)r=r.sibling,a=a.sibling=ur(r,r.pendingProps),a.return=i;a.sibling=null}return i.child}function M0(r,i,a){switch(i.tag){case 3:km(i),Ci();break;case 5:$p(i);break;case 1:Rt(i.type)&&la(i);break;case 4:ic(i,i.stateNode.containerInfo);break;case 10:var u=i.type._context,d=i.memoizedProps.value;be(pa,u._currentValue),u._currentValue=d;break;case 13:if(u=i.memoizedState,u!==null)return u.dehydrated!==null?(be(je,je.current&1),i.flags|=128,null):(a&i.child.childLanes)!==0?Im(r,i,a):(be(je,je.current&1),r=An(r,i,a),r!==null?r.sibling:null);be(je,je.current&1);break;case 19:if(u=(a&i.childLanes)!==0,(r.flags&128)!==0){if(u)return xm(r,i,a);i.flags|=128}if(d=i.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),be(je,je.current),u)break;return null;case 22:case 23:return i.lanes=0,wm(r,i,a)}return An(r,i,a)}var Rm,Tc,bm,Nm;Rm=function(r,i){for(var a=i.child;a!==null;){if(a.tag===5||a.tag===6)r.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},Tc=function(){},bm=function(r,i,a,u){var d=r.memoizedProps;if(d!==u){r=i.stateNode,Or(gn.current);var p=null;switch(a){case"input":d=Et(r,d),u=Et(r,u),p=[];break;case"select":d=L({},d,{value:void 0}),u=L({},u,{value:void 0}),p=[];break;case"textarea":d=iu(r,d),u=iu(r,u),p=[];break;default:typeof d.onClick!="function"&&typeof u.onClick=="function"&&(r.onclick=sa)}ou(a,u);var g;a=null;for(P in d)if(!u.hasOwnProperty(P)&&d.hasOwnProperty(P)&&d[P]!=null)if(P==="style"){var w=d[P];for(g in w)w.hasOwnProperty(g)&&(a||(a={}),a[g]="")}else P!=="dangerouslySetInnerHTML"&&P!=="children"&&P!=="suppressContentEditableWarning"&&P!=="suppressHydrationWarning"&&P!=="autoFocus"&&(o.hasOwnProperty(P)?p||(p=[]):(p=p||[]).push(P,null));for(P in u){var C=u[P];if(w=d!=null?d[P]:void 0,u.hasOwnProperty(P)&&C!==w&&(C!=null||w!=null))if(P==="style")if(w){for(g in w)!w.hasOwnProperty(g)||C&&C.hasOwnProperty(g)||(a||(a={}),a[g]="");for(g in C)C.hasOwnProperty(g)&&w[g]!==C[g]&&(a||(a={}),a[g]=C[g])}else a||(p||(p=[]),p.push(P,a)),a=C;else P==="dangerouslySetInnerHTML"?(C=C?C.__html:void 0,w=w?w.__html:void 0,C!=null&&w!==C&&(p=p||[]).push(P,C)):P==="children"?typeof C!="string"&&typeof C!="number"||(p=p||[]).push(P,""+C):P!=="suppressContentEditableWarning"&&P!=="suppressHydrationWarning"&&(o.hasOwnProperty(P)?(C!=null&&P==="onScroll"&&Oe("scroll",r),p||w===C||(p=[])):(p=p||[]).push(P,C))}a&&(p=p||[]).push("style",a);var P=p;(i.updateQueue=P)&&(i.flags|=4)}},Nm=function(r,i,a,u){a!==u&&(i.flags|=4)};function Hs(r,i){if(!Me)switch(r.tailMode){case"hidden":i=r.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?r.tail=null:a.sibling=null;break;case"collapsed":a=r.tail;for(var u=null;a!==null;)a.alternate!==null&&(u=a),a=a.sibling;u===null?i||r.tail===null?r.tail=null:r.tail.sibling=null:u.sibling=null}}function _t(r){var i=r.alternate!==null&&r.alternate.child===r.child,a=0,u=0;if(i)for(var d=r.child;d!==null;)a|=d.lanes|d.childLanes,u|=d.subtreeFlags&14680064,u|=d.flags&14680064,d.return=r,d=d.sibling;else for(d=r.child;d!==null;)a|=d.lanes|d.childLanes,u|=d.subtreeFlags,u|=d.flags,d.return=r,d=d.sibling;return r.subtreeFlags|=u,r.childLanes=a,i}function F0(r,i,a){var u=i.pendingProps;switch(Ku(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return _t(i),null;case 1:return Rt(i.type)&&aa(),_t(i),null;case 3:return u=i.stateNode,Ti(),Le(xt),Le(gt),ac(),u.pendingContext&&(u.context=u.pendingContext,u.pendingContext=null),(r===null||r.child===null)&&(ha(i)?i.flags|=4:r===null||r.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,Xt!==null&&(Fc(Xt),Xt=null))),Tc(r,i),_t(i),null;case 5:sc(i);var d=Or(zs.current);if(a=i.type,r!==null&&i.stateNode!=null)bm(r,i,a,u,d),r.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!u){if(i.stateNode===null)throw Error(n(166));return _t(i),null}if(r=Or(gn.current),ha(i)){u=i.stateNode,a=i.type;var p=i.memoizedProps;switch(u[mn]=i,u[Ls]=p,r=(i.mode&1)!==0,a){case"dialog":Oe("cancel",u),Oe("close",u);break;case"iframe":case"object":case"embed":Oe("load",u);break;case"video":case"audio":for(d=0;d<As.length;d++)Oe(As[d],u);break;case"source":Oe("error",u);break;case"img":case"image":case"link":Oe("error",u),Oe("load",u);break;case"details":Oe("toggle",u);break;case"input":cf(u,p),Oe("invalid",u);break;case"select":u._wrapperState={wasMultiple:!!p.multiple},Oe("invalid",u);break;case"textarea":ff(u,p),Oe("invalid",u)}ou(a,p),d=null;for(var g in p)if(p.hasOwnProperty(g)){var w=p[g];g==="children"?typeof w=="string"?u.textContent!==w&&(p.suppressHydrationWarning!==!0&&ia(u.textContent,w,r),d=["children",w]):typeof w=="number"&&u.textContent!==""+w&&(p.suppressHydrationWarning!==!0&&ia(u.textContent,w,r),d=["children",""+w]):o.hasOwnProperty(g)&&w!=null&&g==="onScroll"&&Oe("scroll",u)}switch(a){case"input":fn(u),hf(u,p,!0);break;case"textarea":fn(u),mf(u);break;case"select":case"option":break;default:typeof p.onClick=="function"&&(u.onclick=sa)}u=d,i.updateQueue=u,u!==null&&(i.flags|=4)}else{g=d.nodeType===9?d:d.ownerDocument,r==="http://www.w3.org/1999/xhtml"&&(r=gf(a)),r==="http://www.w3.org/1999/xhtml"?a==="script"?(r=g.createElement("div"),r.innerHTML="<script><\/script>",r=r.removeChild(r.firstChild)):typeof u.is=="string"?r=g.createElement(a,{is:u.is}):(r=g.createElement(a),a==="select"&&(g=r,u.multiple?g.multiple=!0:u.size&&(g.size=u.size))):r=g.createElementNS(r,a),r[mn]=i,r[Ls]=u,Rm(r,i,!1,!1),i.stateNode=r;e:{switch(g=au(a,u),a){case"dialog":Oe("cancel",r),Oe("close",r),d=u;break;case"iframe":case"object":case"embed":Oe("load",r),d=u;break;case"video":case"audio":for(d=0;d<As.length;d++)Oe(As[d],r);d=u;break;case"source":Oe("error",r),d=u;break;case"img":case"image":case"link":Oe("error",r),Oe("load",r),d=u;break;case"details":Oe("toggle",r),d=u;break;case"input":cf(r,u),d=Et(r,u),Oe("invalid",r);break;case"option":d=u;break;case"select":r._wrapperState={wasMultiple:!!u.multiple},d=L({},u,{value:void 0}),Oe("invalid",r);break;case"textarea":ff(r,u),d=iu(r,u),Oe("invalid",r);break;default:d=u}ou(a,d),w=d;for(p in w)if(w.hasOwnProperty(p)){var C=w[p];p==="style"?vf(r,C):p==="dangerouslySetInnerHTML"?(C=C?C.__html:void 0,C!=null&&yf(r,C)):p==="children"?typeof C=="string"?(a!=="textarea"||C!=="")&&fs(r,C):typeof C=="number"&&fs(r,""+C):p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&p!=="autoFocus"&&(o.hasOwnProperty(p)?C!=null&&p==="onScroll"&&Oe("scroll",r):C!=null&&j(r,p,C,g))}switch(a){case"input":fn(r),hf(r,u,!1);break;case"textarea":fn(r),mf(r);break;case"option":u.value!=null&&r.setAttribute("value",""+ge(u.value));break;case"select":r.multiple=!!u.multiple,p=u.value,p!=null?ai(r,!!u.multiple,p,!1):u.defaultValue!=null&&ai(r,!!u.multiple,u.defaultValue,!0);break;default:typeof d.onClick=="function"&&(r.onclick=sa)}switch(a){case"button":case"input":case"select":case"textarea":u=!!u.autoFocus;break e;case"img":u=!0;break e;default:u=!1}}u&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return _t(i),null;case 6:if(r&&i.stateNode!=null)Nm(r,i,r.memoizedProps,u);else{if(typeof u!="string"&&i.stateNode===null)throw Error(n(166));if(a=Or(zs.current),Or(gn.current),ha(i)){if(u=i.stateNode,a=i.memoizedProps,u[mn]=i,(p=u.nodeValue!==a)&&(r=Mt,r!==null))switch(r.tag){case 3:ia(u.nodeValue,a,(r.mode&1)!==0);break;case 5:r.memoizedProps.suppressHydrationWarning!==!0&&ia(u.nodeValue,a,(r.mode&1)!==0)}p&&(i.flags|=4)}else u=(a.nodeType===9?a:a.ownerDocument).createTextNode(u),u[mn]=i,i.stateNode=u}return _t(i),null;case 13:if(Le(je),u=i.memoizedState,r===null||r.memoizedState!==null&&r.memoizedState.dehydrated!==null){if(Me&&Ft!==null&&(i.mode&1)!==0&&(i.flags&128)===0)Dp(),Ci(),i.flags|=98560,p=!1;else if(p=ha(i),u!==null&&u.dehydrated!==null){if(r===null){if(!p)throw Error(n(318));if(p=i.memoizedState,p=p!==null?p.dehydrated:null,!p)throw Error(n(317));p[mn]=i}else Ci(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;_t(i),p=!1}else Xt!==null&&(Fc(Xt),Xt=null),p=!0;if(!p)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=a,i):(u=u!==null,u!==(r!==null&&r.memoizedState!==null)&&u&&(i.child.flags|=8192,(i.mode&1)!==0&&(r===null||(je.current&1)!==0?Qe===0&&(Qe=3):zc())),i.updateQueue!==null&&(i.flags|=4),_t(i),null);case 4:return Ti(),Tc(r,i),r===null&&Ds(i.stateNode.containerInfo),_t(i),null;case 10:return ec(i.type._context),_t(i),null;case 17:return Rt(i.type)&&aa(),_t(i),null;case 19:if(Le(je),p=i.memoizedState,p===null)return _t(i),null;if(u=(i.flags&128)!==0,g=p.rendering,g===null)if(u)Hs(p,!1);else{if(Qe!==0||r!==null&&(r.flags&128)!==0)for(r=i.child;r!==null;){if(g=_a(r),g!==null){for(i.flags|=128,Hs(p,!1),u=g.updateQueue,u!==null&&(i.updateQueue=u,i.flags|=4),i.subtreeFlags=0,u=a,a=i.child;a!==null;)p=a,r=u,p.flags&=14680066,g=p.alternate,g===null?(p.childLanes=0,p.lanes=r,p.child=null,p.subtreeFlags=0,p.memoizedProps=null,p.memoizedState=null,p.updateQueue=null,p.dependencies=null,p.stateNode=null):(p.childLanes=g.childLanes,p.lanes=g.lanes,p.child=g.child,p.subtreeFlags=0,p.deletions=null,p.memoizedProps=g.memoizedProps,p.memoizedState=g.memoizedState,p.updateQueue=g.updateQueue,p.type=g.type,r=g.dependencies,p.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext}),a=a.sibling;return be(je,je.current&1|2),i.child}r=r.sibling}p.tail!==null&&Ve()>Ni&&(i.flags|=128,u=!0,Hs(p,!1),i.lanes=4194304)}else{if(!u)if(r=_a(g),r!==null){if(i.flags|=128,u=!0,a=r.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),Hs(p,!0),p.tail===null&&p.tailMode==="hidden"&&!g.alternate&&!Me)return _t(i),null}else 2*Ve()-p.renderingStartTime>Ni&&a!==1073741824&&(i.flags|=128,u=!0,Hs(p,!1),i.lanes=4194304);p.isBackwards?(g.sibling=i.child,i.child=g):(a=p.last,a!==null?a.sibling=g:i.child=g,p.last=g)}return p.tail!==null?(i=p.tail,p.rendering=i,p.tail=i.sibling,p.renderingStartTime=Ve(),i.sibling=null,a=je.current,be(je,u?a&1|2:a&1),i):(_t(i),null);case 22:case 23:return Uc(),u=i.memoizedState!==null,r!==null&&r.memoizedState!==null!==u&&(i.flags|=8192),u&&(i.mode&1)!==0?(jt&1073741824)!==0&&(_t(i),i.subtreeFlags&6&&(i.flags|=8192)):_t(i),null;case 24:return null;case 25:return null}throw Error(n(156,i.tag))}function j0(r,i){switch(Ku(i),i.tag){case 1:return Rt(i.type)&&aa(),r=i.flags,r&65536?(i.flags=r&-65537|128,i):null;case 3:return Ti(),Le(xt),Le(gt),ac(),r=i.flags,(r&65536)!==0&&(r&128)===0?(i.flags=r&-65537|128,i):null;case 5:return sc(i),null;case 13:if(Le(je),r=i.memoizedState,r!==null&&r.dehydrated!==null){if(i.alternate===null)throw Error(n(340));Ci()}return r=i.flags,r&65536?(i.flags=r&-65537|128,i):null;case 19:return Le(je),null;case 4:return Ti(),null;case 10:return ec(i.type._context),null;case 22:case 23:return Uc(),null;case 24:return null;default:return null}}var xa=!1,vt=!1,U0=typeof WeakSet=="function"?WeakSet:Set,H=null;function Ri(r,i){var a=r.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(u){ze(r,i,u)}else a.current=null}function xc(r,i,a){try{a()}catch(u){ze(r,i,u)}}var Pm=!1;function z0(r,i){if(Uu=qo,r=up(),Pu(r)){if("selectionStart"in r)var a={start:r.selectionStart,end:r.selectionEnd};else e:{a=(a=r.ownerDocument)&&a.defaultView||window;var u=a.getSelection&&a.getSelection();if(u&&u.rangeCount!==0){a=u.anchorNode;var d=u.anchorOffset,p=u.focusNode;u=u.focusOffset;try{a.nodeType,p.nodeType}catch{a=null;break e}var g=0,w=-1,C=-1,P=0,F=0,U=r,M=null;t:for(;;){for(var B;U!==a||d!==0&&U.nodeType!==3||(w=g+d),U!==p||u!==0&&U.nodeType!==3||(C=g+u),U.nodeType===3&&(g+=U.nodeValue.length),(B=U.firstChild)!==null;)M=U,U=B;for(;;){if(U===r)break t;if(M===a&&++P===d&&(w=g),M===p&&++F===u&&(C=g),(B=U.nextSibling)!==null)break;U=M,M=U.parentNode}U=B}a=w===-1||C===-1?null:{start:w,end:C}}else a=null}a=a||{start:0,end:0}}else a=null;for(zu={focusedElem:r,selectionRange:a},qo=!1,H=i;H!==null;)if(i=H,r=i.child,(i.subtreeFlags&1028)!==0&&r!==null)r.return=i,H=r;else for(;H!==null;){i=H;try{var G=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(G!==null){var J=G.memoizedProps,He=G.memoizedState,R=i.stateNode,S=R.getSnapshotBeforeUpdate(i.elementType===i.type?J:Zt(i.type,J),He);R.__reactInternalSnapshotBeforeUpdate=S}break;case 3:var b=i.stateNode.containerInfo;b.nodeType===1?b.textContent="":b.nodeType===9&&b.documentElement&&b.removeChild(b.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(n(163))}}catch(z){ze(i,i.return,z)}if(r=i.sibling,r!==null){r.return=i.return,H=r;break}H=i.return}return G=Pm,Pm=!1,G}function Gs(r,i,a){var u=i.updateQueue;if(u=u!==null?u.lastEffect:null,u!==null){var d=u=u.next;do{if((d.tag&r)===r){var p=d.destroy;d.destroy=void 0,p!==void 0&&xc(i,a,p)}d=d.next}while(d!==u)}}function Ra(r,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var a=i=i.next;do{if((a.tag&r)===r){var u=a.create;a.destroy=u()}a=a.next}while(a!==i)}}function Rc(r){var i=r.ref;if(i!==null){var a=r.stateNode;switch(r.tag){case 5:r=a;break;default:r=a}typeof i=="function"?i(r):i.current=r}}function Am(r){var i=r.alternate;i!==null&&(r.alternate=null,Am(i)),r.child=null,r.deletions=null,r.sibling=null,r.tag===5&&(i=r.stateNode,i!==null&&(delete i[mn],delete i[Ls],delete i[Vu],delete i[C0],delete i[k0])),r.stateNode=null,r.return=null,r.dependencies=null,r.memoizedProps=null,r.memoizedState=null,r.pendingProps=null,r.stateNode=null,r.updateQueue=null}function Dm(r){return r.tag===5||r.tag===3||r.tag===4}function Om(r){e:for(;;){for(;r.sibling===null;){if(r.return===null||Dm(r.return))return null;r=r.return}for(r.sibling.return=r.return,r=r.sibling;r.tag!==5&&r.tag!==6&&r.tag!==18;){if(r.flags&2||r.child===null||r.tag===4)continue e;r.child.return=r,r=r.child}if(!(r.flags&2))return r.stateNode}}function bc(r,i,a){var u=r.tag;if(u===5||u===6)r=r.stateNode,i?a.nodeType===8?a.parentNode.insertBefore(r,i):a.insertBefore(r,i):(a.nodeType===8?(i=a.parentNode,i.insertBefore(r,a)):(i=a,i.appendChild(r)),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=sa));else if(u!==4&&(r=r.child,r!==null))for(bc(r,i,a),r=r.sibling;r!==null;)bc(r,i,a),r=r.sibling}function Nc(r,i,a){var u=r.tag;if(u===5||u===6)r=r.stateNode,i?a.insertBefore(r,i):a.appendChild(r);else if(u!==4&&(r=r.child,r!==null))for(Nc(r,i,a),r=r.sibling;r!==null;)Nc(r,i,a),r=r.sibling}var dt=null,en=!1;function ir(r,i,a){for(a=a.child;a!==null;)Lm(r,i,a),a=a.sibling}function Lm(r,i,a){if(pn&&typeof pn.onCommitFiberUnmount=="function")try{pn.onCommitFiberUnmount($o,a)}catch{}switch(a.tag){case 5:vt||Ri(a,i);case 6:var u=dt,d=en;dt=null,ir(r,i,a),dt=u,en=d,dt!==null&&(en?(r=dt,a=a.stateNode,r.nodeType===8?r.parentNode.removeChild(a):r.removeChild(a)):dt.removeChild(a.stateNode));break;case 18:dt!==null&&(en?(r=dt,a=a.stateNode,r.nodeType===8?Bu(r.parentNode,a):r.nodeType===1&&Bu(r,a),Ss(r)):Bu(dt,a.stateNode));break;case 4:u=dt,d=en,dt=a.stateNode.containerInfo,en=!0,ir(r,i,a),dt=u,en=d;break;case 0:case 11:case 14:case 15:if(!vt&&(u=a.updateQueue,u!==null&&(u=u.lastEffect,u!==null))){d=u=u.next;do{var p=d,g=p.destroy;p=p.tag,g!==void 0&&((p&2)!==0||(p&4)!==0)&&xc(a,i,g),d=d.next}while(d!==u)}ir(r,i,a);break;case 1:if(!vt&&(Ri(a,i),u=a.stateNode,typeof u.componentWillUnmount=="function"))try{u.props=a.memoizedProps,u.state=a.memoizedState,u.componentWillUnmount()}catch(w){ze(a,i,w)}ir(r,i,a);break;case 21:ir(r,i,a);break;case 22:a.mode&1?(vt=(u=vt)||a.memoizedState!==null,ir(r,i,a),vt=u):ir(r,i,a);break;default:ir(r,i,a)}}function Mm(r){var i=r.updateQueue;if(i!==null){r.updateQueue=null;var a=r.stateNode;a===null&&(a=r.stateNode=new U0),i.forEach(function(u){var d=Y0.bind(null,r,u);a.has(u)||(a.add(u),u.then(d,d))})}}function tn(r,i){var a=i.deletions;if(a!==null)for(var u=0;u<a.length;u++){var d=a[u];try{var p=r,g=i,w=g;e:for(;w!==null;){switch(w.tag){case 5:dt=w.stateNode,en=!1;break e;case 3:dt=w.stateNode.containerInfo,en=!0;break e;case 4:dt=w.stateNode.containerInfo,en=!0;break e}w=w.return}if(dt===null)throw Error(n(160));Lm(p,g,d),dt=null,en=!1;var C=d.alternate;C!==null&&(C.return=null),d.return=null}catch(P){ze(d,i,P)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)Fm(i,r),i=i.sibling}function Fm(r,i){var a=r.alternate,u=r.flags;switch(r.tag){case 0:case 11:case 14:case 15:if(tn(i,r),_n(r),u&4){try{Gs(3,r,r.return),Ra(3,r)}catch(J){ze(r,r.return,J)}try{Gs(5,r,r.return)}catch(J){ze(r,r.return,J)}}break;case 1:tn(i,r),_n(r),u&512&&a!==null&&Ri(a,a.return);break;case 5:if(tn(i,r),_n(r),u&512&&a!==null&&Ri(a,a.return),r.flags&32){var d=r.stateNode;try{fs(d,"")}catch(J){ze(r,r.return,J)}}if(u&4&&(d=r.stateNode,d!=null)){var p=r.memoizedProps,g=a!==null?a.memoizedProps:p,w=r.type,C=r.updateQueue;if(r.updateQueue=null,C!==null)try{w==="input"&&p.type==="radio"&&p.name!=null&&df(d,p),au(w,g);var P=au(w,p);for(g=0;g<C.length;g+=2){var F=C[g],U=C[g+1];F==="style"?vf(d,U):F==="dangerouslySetInnerHTML"?yf(d,U):F==="children"?fs(d,U):j(d,F,U,P)}switch(w){case"input":nu(d,p);break;case"textarea":pf(d,p);break;case"select":var M=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!p.multiple;var B=p.value;B!=null?ai(d,!!p.multiple,B,!1):M!==!!p.multiple&&(p.defaultValue!=null?ai(d,!!p.multiple,p.defaultValue,!0):ai(d,!!p.multiple,p.multiple?[]:"",!1))}d[Ls]=p}catch(J){ze(r,r.return,J)}}break;case 6:if(tn(i,r),_n(r),u&4){if(r.stateNode===null)throw Error(n(162));d=r.stateNode,p=r.memoizedProps;try{d.nodeValue=p}catch(J){ze(r,r.return,J)}}break;case 3:if(tn(i,r),_n(r),u&4&&a!==null&&a.memoizedState.isDehydrated)try{Ss(i.containerInfo)}catch(J){ze(r,r.return,J)}break;case 4:tn(i,r),_n(r);break;case 13:tn(i,r),_n(r),d=r.child,d.flags&8192&&(p=d.memoizedState!==null,d.stateNode.isHidden=p,!p||d.alternate!==null&&d.alternate.memoizedState!==null||(Dc=Ve())),u&4&&Mm(r);break;case 22:if(F=a!==null&&a.memoizedState!==null,r.mode&1?(vt=(P=vt)||F,tn(i,r),vt=P):tn(i,r),_n(r),u&8192){if(P=r.memoizedState!==null,(r.stateNode.isHidden=P)&&!F&&(r.mode&1)!==0)for(H=r,F=r.child;F!==null;){for(U=H=F;H!==null;){switch(M=H,B=M.child,M.tag){case 0:case 11:case 14:case 15:Gs(4,M,M.return);break;case 1:Ri(M,M.return);var G=M.stateNode;if(typeof G.componentWillUnmount=="function"){u=M,a=M.return;try{i=u,G.props=i.memoizedProps,G.state=i.memoizedState,G.componentWillUnmount()}catch(J){ze(u,a,J)}}break;case 5:Ri(M,M.return);break;case 22:if(M.memoizedState!==null){zm(U);continue}}B!==null?(B.return=M,H=B):zm(U)}F=F.sibling}e:for(F=null,U=r;;){if(U.tag===5){if(F===null){F=U;try{d=U.stateNode,P?(p=d.style,typeof p.setProperty=="function"?p.setProperty("display","none","important"):p.display="none"):(w=U.stateNode,C=U.memoizedProps.style,g=C!=null&&C.hasOwnProperty("display")?C.display:null,w.style.display=_f("display",g))}catch(J){ze(r,r.return,J)}}}else if(U.tag===6){if(F===null)try{U.stateNode.nodeValue=P?"":U.memoizedProps}catch(J){ze(r,r.return,J)}}else if((U.tag!==22&&U.tag!==23||U.memoizedState===null||U===r)&&U.child!==null){U.child.return=U,U=U.child;continue}if(U===r)break e;for(;U.sibling===null;){if(U.return===null||U.return===r)break e;F===U&&(F=null),U=U.return}F===U&&(F=null),U.sibling.return=U.return,U=U.sibling}}break;case 19:tn(i,r),_n(r),u&4&&Mm(r);break;case 21:break;default:tn(i,r),_n(r)}}function _n(r){var i=r.flags;if(i&2){try{e:{for(var a=r.return;a!==null;){if(Dm(a)){var u=a;break e}a=a.return}throw Error(n(160))}switch(u.tag){case 5:var d=u.stateNode;u.flags&32&&(fs(d,""),u.flags&=-33);var p=Om(r);Nc(r,p,d);break;case 3:case 4:var g=u.stateNode.containerInfo,w=Om(r);bc(r,w,g);break;default:throw Error(n(161))}}catch(C){ze(r,r.return,C)}r.flags&=-3}i&4096&&(r.flags&=-4097)}function $0(r,i,a){H=r,jm(r)}function jm(r,i,a){for(var u=(r.mode&1)!==0;H!==null;){var d=H,p=d.child;if(d.tag===22&&u){var g=d.memoizedState!==null||xa;if(!g){var w=d.alternate,C=w!==null&&w.memoizedState!==null||vt;w=xa;var P=vt;if(xa=g,(vt=C)&&!P)for(H=d;H!==null;)g=H,C=g.child,g.tag===22&&g.memoizedState!==null?$m(d):C!==null?(C.return=g,H=C):$m(d);for(;p!==null;)H=p,jm(p),p=p.sibling;H=d,xa=w,vt=P}Um(r)}else(d.subtreeFlags&8772)!==0&&p!==null?(p.return=d,H=p):Um(r)}}function Um(r){for(;H!==null;){var i=H;if((i.flags&8772)!==0){var a=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:vt||Ra(5,i);break;case 1:var u=i.stateNode;if(i.flags&4&&!vt)if(a===null)u.componentDidMount();else{var d=i.elementType===i.type?a.memoizedProps:Zt(i.type,a.memoizedProps);u.componentDidUpdate(d,a.memoizedState,u.__reactInternalSnapshotBeforeUpdate)}var p=i.updateQueue;p!==null&&zp(i,p,u);break;case 3:var g=i.updateQueue;if(g!==null){if(a=null,i.child!==null)switch(i.child.tag){case 5:a=i.child.stateNode;break;case 1:a=i.child.stateNode}zp(i,g,a)}break;case 5:var w=i.stateNode;if(a===null&&i.flags&4){a=w;var C=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":C.autoFocus&&a.focus();break;case"img":C.src&&(a.src=C.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var P=i.alternate;if(P!==null){var F=P.memoizedState;if(F!==null){var U=F.dehydrated;U!==null&&Ss(U)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(n(163))}vt||i.flags&512&&Rc(i)}catch(M){ze(i,i.return,M)}}if(i===r){H=null;break}if(a=i.sibling,a!==null){a.return=i.return,H=a;break}H=i.return}}function zm(r){for(;H!==null;){var i=H;if(i===r){H=null;break}var a=i.sibling;if(a!==null){a.return=i.return,H=a;break}H=i.return}}function $m(r){for(;H!==null;){var i=H;try{switch(i.tag){case 0:case 11:case 15:var a=i.return;try{Ra(4,i)}catch(C){ze(i,a,C)}break;case 1:var u=i.stateNode;if(typeof u.componentDidMount=="function"){var d=i.return;try{u.componentDidMount()}catch(C){ze(i,d,C)}}var p=i.return;try{Rc(i)}catch(C){ze(i,p,C)}break;case 5:var g=i.return;try{Rc(i)}catch(C){ze(i,g,C)}}}catch(C){ze(i,i.return,C)}if(i===r){H=null;break}var w=i.sibling;if(w!==null){w.return=i.return,H=w;break}H=i.return}}var W0=Math.ceil,ba=Z.ReactCurrentDispatcher,Pc=Z.ReactCurrentOwner,Vt=Z.ReactCurrentBatchConfig,ve=0,nt=null,qe=null,ht=0,jt=0,bi=Zn(0),Qe=0,qs=null,Mr=0,Na=0,Ac=0,Ks=null,Nt=null,Dc=0,Ni=1/0,Dn=null,Pa=!1,Oc=null,sr=null,Aa=!1,or=null,Da=0,Ys=0,Lc=null,Oa=-1,La=0;function kt(){return(ve&6)!==0?Ve():Oa!==-1?Oa:Oa=Ve()}function ar(r){return(r.mode&1)===0?1:(ve&2)!==0&&ht!==0?ht&-ht:I0.transition!==null?(La===0&&(La=Of()),La):(r=Ie,r!==0||(r=window.event,r=r===void 0?16:Bf(r.type)),r)}function nn(r,i,a,u){if(50<Ys)throw Ys=0,Lc=null,Error(n(185));vs(r,a,u),((ve&2)===0||r!==nt)&&(r===nt&&((ve&2)===0&&(Na|=a),Qe===4&&lr(r,ht)),Pt(r,u),a===1&&ve===0&&(i.mode&1)===0&&(Ni=Ve()+500,ua&&tr()))}function Pt(r,i){var a=r.callbackNode;IE(r,i);var u=Vo(r,r===nt?ht:0);if(u===0)a!==null&&Pf(a),r.callbackNode=null,r.callbackPriority=0;else if(i=u&-u,r.callbackPriority!==i){if(a!=null&&Pf(a),i===1)r.tag===0?S0(Bm.bind(null,r)):Rp(Bm.bind(null,r)),w0(function(){(ve&6)===0&&tr()}),a=null;else{switch(Lf(u)){case 1:a=pu;break;case 4:a=Af;break;case 16:a=zo;break;case 536870912:a=Df;break;default:a=zo}a=Jm(a,Wm.bind(null,r))}r.callbackPriority=i,r.callbackNode=a}}function Wm(r,i){if(Oa=-1,La=0,(ve&6)!==0)throw Error(n(327));var a=r.callbackNode;if(Pi()&&r.callbackNode!==a)return null;var u=Vo(r,r===nt?ht:0);if(u===0)return null;if((u&30)!==0||(u&r.expiredLanes)!==0||i)i=Ma(r,u);else{i=u;var d=ve;ve|=2;var p=Hm();(nt!==r||ht!==i)&&(Dn=null,Ni=Ve()+500,jr(r,i));do try{H0();break}catch(w){Vm(r,w)}while(!0);Zu(),ba.current=p,ve=d,qe!==null?i=0:(nt=null,ht=0,i=Qe)}if(i!==0){if(i===2&&(d=mu(r),d!==0&&(u=d,i=Mc(r,d))),i===1)throw a=qs,jr(r,0),lr(r,u),Pt(r,Ve()),a;if(i===6)lr(r,u);else{if(d=r.current.alternate,(u&30)===0&&!B0(d)&&(i=Ma(r,u),i===2&&(p=mu(r),p!==0&&(u=p,i=Mc(r,p))),i===1))throw a=qs,jr(r,0),lr(r,u),Pt(r,Ve()),a;switch(r.finishedWork=d,r.finishedLanes=u,i){case 0:case 1:throw Error(n(345));case 2:Ur(r,Nt,Dn);break;case 3:if(lr(r,u),(u&130023424)===u&&(i=Dc+500-Ve(),10<i)){if(Vo(r,0)!==0)break;if(d=r.suspendedLanes,(d&u)!==u){kt(),r.pingedLanes|=r.suspendedLanes&d;break}r.timeoutHandle=Wu(Ur.bind(null,r,Nt,Dn),i);break}Ur(r,Nt,Dn);break;case 4:if(lr(r,u),(u&4194240)===u)break;for(i=r.eventTimes,d=-1;0<u;){var g=31-Qt(u);p=1<<g,g=i[g],g>d&&(d=g),u&=~p}if(u=d,u=Ve()-u,u=(120>u?120:480>u?480:1080>u?1080:1920>u?1920:3e3>u?3e3:4320>u?4320:1960*W0(u/1960))-u,10<u){r.timeoutHandle=Wu(Ur.bind(null,r,Nt,Dn),u);break}Ur(r,Nt,Dn);break;case 5:Ur(r,Nt,Dn);break;default:throw Error(n(329))}}}return Pt(r,Ve()),r.callbackNode===a?Wm.bind(null,r):null}function Mc(r,i){var a=Ks;return r.current.memoizedState.isDehydrated&&(jr(r,i).flags|=256),r=Ma(r,i),r!==2&&(i=Nt,Nt=a,i!==null&&Fc(i)),r}function Fc(r){Nt===null?Nt=r:Nt.push.apply(Nt,r)}function B0(r){for(var i=r;;){if(i.flags&16384){var a=i.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var u=0;u<a.length;u++){var d=a[u],p=d.getSnapshot;d=d.value;try{if(!Jt(p(),d))return!1}catch{return!1}}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===r)break;for(;i.sibling===null;){if(i.return===null||i.return===r)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function lr(r,i){for(i&=~Ac,i&=~Na,r.suspendedLanes|=i,r.pingedLanes&=~i,r=r.expirationTimes;0<i;){var a=31-Qt(i),u=1<<a;r[a]=-1,i&=~u}}function Bm(r){if((ve&6)!==0)throw Error(n(327));Pi();var i=Vo(r,0);if((i&1)===0)return Pt(r,Ve()),null;var a=Ma(r,i);if(r.tag!==0&&a===2){var u=mu(r);u!==0&&(i=u,a=Mc(r,u))}if(a===1)throw a=qs,jr(r,0),lr(r,i),Pt(r,Ve()),a;if(a===6)throw Error(n(345));return r.finishedWork=r.current.alternate,r.finishedLanes=i,Ur(r,Nt,Dn),Pt(r,Ve()),null}function jc(r,i){var a=ve;ve|=1;try{return r(i)}finally{ve=a,ve===0&&(Ni=Ve()+500,ua&&tr())}}function Fr(r){or!==null&&or.tag===0&&(ve&6)===0&&Pi();var i=ve;ve|=1;var a=Vt.transition,u=Ie;try{if(Vt.transition=null,Ie=1,r)return r()}finally{Ie=u,Vt.transition=a,ve=i,(ve&6)===0&&tr()}}function Uc(){jt=bi.current,Le(bi)}function jr(r,i){r.finishedWork=null,r.finishedLanes=0;var a=r.timeoutHandle;if(a!==-1&&(r.timeoutHandle=-1,v0(a)),qe!==null)for(a=qe.return;a!==null;){var u=a;switch(Ku(u),u.tag){case 1:u=u.type.childContextTypes,u!=null&&aa();break;case 3:Ti(),Le(xt),Le(gt),ac();break;case 5:sc(u);break;case 4:Ti();break;case 13:Le(je);break;case 19:Le(je);break;case 10:ec(u.type._context);break;case 22:case 23:Uc()}a=a.return}if(nt=r,qe=r=ur(r.current,null),ht=jt=i,Qe=0,qs=null,Ac=Na=Mr=0,Nt=Ks=null,Dr!==null){for(i=0;i<Dr.length;i++)if(a=Dr[i],u=a.interleaved,u!==null){a.interleaved=null;var d=u.next,p=a.pending;if(p!==null){var g=p.next;p.next=d,u.next=g}a.pending=u}Dr=null}return r}function Vm(r,i){do{var a=qe;try{if(Zu(),va.current=ka,wa){for(var u=Ue.memoizedState;u!==null;){var d=u.queue;d!==null&&(d.pending=null),u=u.next}wa=!1}if(Lr=0,tt=Ye=Ue=null,$s=!1,Ws=0,Pc.current=null,a===null||a.return===null){Qe=1,qs=i,qe=null;break}e:{var p=r,g=a.return,w=a,C=i;if(i=ht,w.flags|=32768,C!==null&&typeof C=="object"&&typeof C.then=="function"){var P=C,F=w,U=F.tag;if((F.mode&1)===0&&(U===0||U===11||U===15)){var M=F.alternate;M?(F.updateQueue=M.updateQueue,F.memoizedState=M.memoizedState,F.lanes=M.lanes):(F.updateQueue=null,F.memoizedState=null)}var B=mm(g);if(B!==null){B.flags&=-257,gm(B,g,w,p,i),B.mode&1&&pm(p,P,i),i=B,C=P;var G=i.updateQueue;if(G===null){var J=new Set;J.add(C),i.updateQueue=J}else G.add(C);break e}else{if((i&1)===0){pm(p,P,i),zc();break e}C=Error(n(426))}}else if(Me&&w.mode&1){var He=mm(g);if(He!==null){(He.flags&65536)===0&&(He.flags|=256),gm(He,g,w,p,i),Ju(xi(C,w));break e}}p=C=xi(C,w),Qe!==4&&(Qe=2),Ks===null?Ks=[p]:Ks.push(p),p=g;do{switch(p.tag){case 3:p.flags|=65536,i&=-i,p.lanes|=i;var R=hm(p,C,i);Up(p,R);break e;case 1:w=C;var S=p.type,b=p.stateNode;if((p.flags&128)===0&&(typeof S.getDerivedStateFromError=="function"||b!==null&&typeof b.componentDidCatch=="function"&&(sr===null||!sr.has(b)))){p.flags|=65536,i&=-i,p.lanes|=i;var z=fm(p,w,i);Up(p,z);break e}}p=p.return}while(p!==null)}qm(a)}catch(X){i=X,qe===a&&a!==null&&(qe=a=a.return);continue}break}while(!0)}function Hm(){var r=ba.current;return ba.current=ka,r===null?ka:r}function zc(){(Qe===0||Qe===3||Qe===2)&&(Qe=4),nt===null||(Mr&268435455)===0&&(Na&268435455)===0||lr(nt,ht)}function Ma(r,i){var a=ve;ve|=2;var u=Hm();(nt!==r||ht!==i)&&(Dn=null,jr(r,i));do try{V0();break}catch(d){Vm(r,d)}while(!0);if(Zu(),ve=a,ba.current=u,qe!==null)throw Error(n(261));return nt=null,ht=0,Qe}function V0(){for(;qe!==null;)Gm(qe)}function H0(){for(;qe!==null&&!gE();)Gm(qe)}function Gm(r){var i=Qm(r.alternate,r,jt);r.memoizedProps=r.pendingProps,i===null?qm(r):qe=i,Pc.current=null}function qm(r){var i=r;do{var a=i.alternate;if(r=i.return,(i.flags&32768)===0){if(a=F0(a,i,jt),a!==null){qe=a;return}}else{if(a=j0(a,i),a!==null){a.flags&=32767,qe=a;return}if(r!==null)r.flags|=32768,r.subtreeFlags=0,r.deletions=null;else{Qe=6,qe=null;return}}if(i=i.sibling,i!==null){qe=i;return}qe=i=r}while(i!==null);Qe===0&&(Qe=5)}function Ur(r,i,a){var u=Ie,d=Vt.transition;try{Vt.transition=null,Ie=1,G0(r,i,a,u)}finally{Vt.transition=d,Ie=u}return null}function G0(r,i,a,u){do Pi();while(or!==null);if((ve&6)!==0)throw Error(n(327));a=r.finishedWork;var d=r.finishedLanes;if(a===null)return null;if(r.finishedWork=null,r.finishedLanes=0,a===r.current)throw Error(n(177));r.callbackNode=null,r.callbackPriority=0;var p=a.lanes|a.childLanes;if(TE(r,p),r===nt&&(qe=nt=null,ht=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||Aa||(Aa=!0,Jm(zo,function(){return Pi(),null})),p=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||p){p=Vt.transition,Vt.transition=null;var g=Ie;Ie=1;var w=ve;ve|=4,Pc.current=null,z0(r,a),Fm(a,r),h0(zu),qo=!!Uu,zu=Uu=null,r.current=a,$0(a),yE(),ve=w,Ie=g,Vt.transition=p}else r.current=a;if(Aa&&(Aa=!1,or=r,Da=d),p=r.pendingLanes,p===0&&(sr=null),wE(a.stateNode),Pt(r,Ve()),i!==null)for(u=r.onRecoverableError,a=0;a<i.length;a++)d=i[a],u(d.value,{componentStack:d.stack,digest:d.digest});if(Pa)throw Pa=!1,r=Oc,Oc=null,r;return(Da&1)!==0&&r.tag!==0&&Pi(),p=r.pendingLanes,(p&1)!==0?r===Lc?Ys++:(Ys=0,Lc=r):Ys=0,tr(),null}function Pi(){if(or!==null){var r=Lf(Da),i=Vt.transition,a=Ie;try{if(Vt.transition=null,Ie=16>r?16:r,or===null)var u=!1;else{if(r=or,or=null,Da=0,(ve&6)!==0)throw Error(n(331));var d=ve;for(ve|=4,H=r.current;H!==null;){var p=H,g=p.child;if((H.flags&16)!==0){var w=p.deletions;if(w!==null){for(var C=0;C<w.length;C++){var P=w[C];for(H=P;H!==null;){var F=H;switch(F.tag){case 0:case 11:case 15:Gs(8,F,p)}var U=F.child;if(U!==null)U.return=F,H=U;else for(;H!==null;){F=H;var M=F.sibling,B=F.return;if(Am(F),F===P){H=null;break}if(M!==null){M.return=B,H=M;break}H=B}}}var G=p.alternate;if(G!==null){var J=G.child;if(J!==null){G.child=null;do{var He=J.sibling;J.sibling=null,J=He}while(J!==null)}}H=p}}if((p.subtreeFlags&2064)!==0&&g!==null)g.return=p,H=g;else e:for(;H!==null;){if(p=H,(p.flags&2048)!==0)switch(p.tag){case 0:case 11:case 15:Gs(9,p,p.return)}var R=p.sibling;if(R!==null){R.return=p.return,H=R;break e}H=p.return}}var S=r.current;for(H=S;H!==null;){g=H;var b=g.child;if((g.subtreeFlags&2064)!==0&&b!==null)b.return=g,H=b;else e:for(g=S;H!==null;){if(w=H,(w.flags&2048)!==0)try{switch(w.tag){case 0:case 11:case 15:Ra(9,w)}}catch(X){ze(w,w.return,X)}if(w===g){H=null;break e}var z=w.sibling;if(z!==null){z.return=w.return,H=z;break e}H=w.return}}if(ve=d,tr(),pn&&typeof pn.onPostCommitFiberRoot=="function")try{pn.onPostCommitFiberRoot($o,r)}catch{}u=!0}return u}finally{Ie=a,Vt.transition=i}}return!1}function Km(r,i,a){i=xi(a,i),i=hm(r,i,1),r=rr(r,i,1),i=kt(),r!==null&&(vs(r,1,i),Pt(r,i))}function ze(r,i,a){if(r.tag===3)Km(r,r,a);else for(;i!==null;){if(i.tag===3){Km(i,r,a);break}else if(i.tag===1){var u=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(sr===null||!sr.has(u))){r=xi(a,r),r=fm(i,r,1),i=rr(i,r,1),r=kt(),i!==null&&(vs(i,1,r),Pt(i,r));break}}i=i.return}}function q0(r,i,a){var u=r.pingCache;u!==null&&u.delete(i),i=kt(),r.pingedLanes|=r.suspendedLanes&a,nt===r&&(ht&a)===a&&(Qe===4||Qe===3&&(ht&130023424)===ht&&500>Ve()-Dc?jr(r,0):Ac|=a),Pt(r,i)}function Ym(r,i){i===0&&((r.mode&1)===0?i=1:(i=Bo,Bo<<=1,(Bo&130023424)===0&&(Bo=4194304)));var a=kt();r=Nn(r,i),r!==null&&(vs(r,i,a),Pt(r,a))}function K0(r){var i=r.memoizedState,a=0;i!==null&&(a=i.retryLane),Ym(r,a)}function Y0(r,i){var a=0;switch(r.tag){case 13:var u=r.stateNode,d=r.memoizedState;d!==null&&(a=d.retryLane);break;case 19:u=r.stateNode;break;default:throw Error(n(314))}u!==null&&u.delete(i),Ym(r,a)}var Qm;Qm=function(r,i,a){if(r!==null)if(r.memoizedProps!==i.pendingProps||xt.current)bt=!0;else{if((r.lanes&a)===0&&(i.flags&128)===0)return bt=!1,M0(r,i,a);bt=(r.flags&131072)!==0}else bt=!1,Me&&(i.flags&1048576)!==0&&bp(i,da,i.index);switch(i.lanes=0,i.tag){case 2:var u=i.type;Ta(r,i),r=i.pendingProps;var d=vi(i,gt.current);Ii(i,a),d=cc(null,i,u,r,d,a);var p=dc();return i.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,Rt(u)?(p=!0,la(i)):p=!1,i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,rc(i),d.updater=Sa,i.stateNode=d,d._reactInternals=i,yc(i,u,r,a),i=Ec(null,i,u,!0,p,a)):(i.tag=0,Me&&p&&qu(i),Ct(null,i,d,a),i=i.child),i;case 16:u=i.elementType;e:{switch(Ta(r,i),r=i.pendingProps,d=u._init,u=d(u._payload),i.type=u,d=i.tag=J0(u),r=Zt(u,r),d){case 0:i=wc(null,i,u,r,a);break e;case 1:i=Cm(null,i,u,r,a);break e;case 11:i=ym(null,i,u,r,a);break e;case 14:i=_m(null,i,u,Zt(u.type,r),a);break e}throw Error(n(306,u,""))}return i;case 0:return u=i.type,d=i.pendingProps,d=i.elementType===u?d:Zt(u,d),wc(r,i,u,d,a);case 1:return u=i.type,d=i.pendingProps,d=i.elementType===u?d:Zt(u,d),Cm(r,i,u,d,a);case 3:e:{if(km(i),r===null)throw Error(n(387));u=i.pendingProps,p=i.memoizedState,d=p.element,jp(r,i),ya(i,u,null,a);var g=i.memoizedState;if(u=g.element,p.isDehydrated)if(p={element:u,isDehydrated:!1,cache:g.cache,pendingSuspenseBoundaries:g.pendingSuspenseBoundaries,transitions:g.transitions},i.updateQueue.baseState=p,i.memoizedState=p,i.flags&256){d=xi(Error(n(423)),i),i=Sm(r,i,u,a,d);break e}else if(u!==d){d=xi(Error(n(424)),i),i=Sm(r,i,u,a,d);break e}else for(Ft=Xn(i.stateNode.containerInfo.firstChild),Mt=i,Me=!0,Xt=null,a=Mp(i,null,u,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Ci(),u===d){i=An(r,i,a);break e}Ct(r,i,u,a)}i=i.child}return i;case 5:return $p(i),r===null&&Qu(i),u=i.type,d=i.pendingProps,p=r!==null?r.memoizedProps:null,g=d.children,$u(u,d)?g=null:p!==null&&$u(u,p)&&(i.flags|=32),Em(r,i),Ct(r,i,g,a),i.child;case 6:return r===null&&Qu(i),null;case 13:return Im(r,i,a);case 4:return ic(i,i.stateNode.containerInfo),u=i.pendingProps,r===null?i.child=ki(i,null,u,a):Ct(r,i,u,a),i.child;case 11:return u=i.type,d=i.pendingProps,d=i.elementType===u?d:Zt(u,d),ym(r,i,u,d,a);case 7:return Ct(r,i,i.pendingProps,a),i.child;case 8:return Ct(r,i,i.pendingProps.children,a),i.child;case 12:return Ct(r,i,i.pendingProps.children,a),i.child;case 10:e:{if(u=i.type._context,d=i.pendingProps,p=i.memoizedProps,g=d.value,be(pa,u._currentValue),u._currentValue=g,p!==null)if(Jt(p.value,g)){if(p.children===d.children&&!xt.current){i=An(r,i,a);break e}}else for(p=i.child,p!==null&&(p.return=i);p!==null;){var w=p.dependencies;if(w!==null){g=p.child;for(var C=w.firstContext;C!==null;){if(C.context===u){if(p.tag===1){C=Pn(-1,a&-a),C.tag=2;var P=p.updateQueue;if(P!==null){P=P.shared;var F=P.pending;F===null?C.next=C:(C.next=F.next,F.next=C),P.pending=C}}p.lanes|=a,C=p.alternate,C!==null&&(C.lanes|=a),tc(p.return,a,i),w.lanes|=a;break}C=C.next}}else if(p.tag===10)g=p.type===i.type?null:p.child;else if(p.tag===18){if(g=p.return,g===null)throw Error(n(341));g.lanes|=a,w=g.alternate,w!==null&&(w.lanes|=a),tc(g,a,i),g=p.sibling}else g=p.child;if(g!==null)g.return=p;else for(g=p;g!==null;){if(g===i){g=null;break}if(p=g.sibling,p!==null){p.return=g.return,g=p;break}g=g.return}p=g}Ct(r,i,d.children,a),i=i.child}return i;case 9:return d=i.type,u=i.pendingProps.children,Ii(i,a),d=Wt(d),u=u(d),i.flags|=1,Ct(r,i,u,a),i.child;case 14:return u=i.type,d=Zt(u,i.pendingProps),d=Zt(u.type,d),_m(r,i,u,d,a);case 15:return vm(r,i,i.type,i.pendingProps,a);case 17:return u=i.type,d=i.pendingProps,d=i.elementType===u?d:Zt(u,d),Ta(r,i),i.tag=1,Rt(u)?(r=!0,la(i)):r=!1,Ii(i,a),cm(i,u,d),yc(i,u,d,a),Ec(null,i,u,!0,r,a);case 19:return xm(r,i,a);case 22:return wm(r,i,a)}throw Error(n(156,i.tag))};function Jm(r,i){return Nf(r,i)}function Q0(r,i,a,u){this.tag=r,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ht(r,i,a,u){return new Q0(r,i,a,u)}function $c(r){return r=r.prototype,!(!r||!r.isReactComponent)}function J0(r){if(typeof r=="function")return $c(r)?1:0;if(r!=null){if(r=r.$$typeof,r===ut)return 11;if(r===Ke)return 14}return 2}function ur(r,i){var a=r.alternate;return a===null?(a=Ht(r.tag,i,r.key,r.mode),a.elementType=r.elementType,a.type=r.type,a.stateNode=r.stateNode,a.alternate=r,r.alternate=a):(a.pendingProps=i,a.type=r.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=r.flags&14680064,a.childLanes=r.childLanes,a.lanes=r.lanes,a.child=r.child,a.memoizedProps=r.memoizedProps,a.memoizedState=r.memoizedState,a.updateQueue=r.updateQueue,i=r.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=r.sibling,a.index=r.index,a.ref=r.ref,a}function Fa(r,i,a,u,d,p){var g=2;if(u=r,typeof r=="function")$c(r)&&(g=1);else if(typeof r=="string")g=5;else e:switch(r){case _e:return zr(a.children,d,p,i);case Y:g=8,d|=8;break;case we:return r=Ht(12,a,i,d|2),r.elementType=we,r.lanes=p,r;case et:return r=Ht(13,a,i,d),r.elementType=et,r.lanes=p,r;case ct:return r=Ht(19,a,i,d),r.elementType=ct,r.lanes=p,r;case Ee:return ja(a,d,p,i);default:if(typeof r=="object"&&r!==null)switch(r.$$typeof){case Be:g=10;break e;case wt:g=9;break e;case ut:g=11;break e;case Ke:g=14;break e;case Re:g=16,u=null;break e}throw Error(n(130,r==null?r:typeof r,""))}return i=Ht(g,a,i,d),i.elementType=r,i.type=u,i.lanes=p,i}function zr(r,i,a,u){return r=Ht(7,r,u,i),r.lanes=a,r}function ja(r,i,a,u){return r=Ht(22,r,u,i),r.elementType=Ee,r.lanes=a,r.stateNode={isHidden:!1},r}function Wc(r,i,a){return r=Ht(6,r,null,i),r.lanes=a,r}function Bc(r,i,a){return i=Ht(4,r.children!==null?r.children:[],r.key,i),i.lanes=a,i.stateNode={containerInfo:r.containerInfo,pendingChildren:null,implementation:r.implementation},i}function X0(r,i,a,u,d){this.tag=i,this.containerInfo=r,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=gu(0),this.expirationTimes=gu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=gu(0),this.identifierPrefix=u,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function Vc(r,i,a,u,d,p,g,w,C){return r=new X0(r,i,a,w,C),i===1?(i=1,p===!0&&(i|=8)):i=0,p=Ht(3,null,null,i),r.current=p,p.stateNode=r,p.memoizedState={element:u,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},rc(p),r}function Z0(r,i,a){var u=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ye,key:u==null?null:""+u,children:r,containerInfo:i,implementation:a}}function Xm(r){if(!r)return er;r=r._reactInternals;e:{if(Rr(r)!==r||r.tag!==1)throw Error(n(170));var i=r;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(Rt(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(n(171))}if(r.tag===1){var a=r.type;if(Rt(a))return Tp(r,a,i)}return i}function Zm(r,i,a,u,d,p,g,w,C){return r=Vc(a,u,!0,r,d,p,g,w,C),r.context=Xm(null),a=r.current,u=kt(),d=ar(a),p=Pn(u,d),p.callback=i??null,rr(a,p,d),r.current.lanes=d,vs(r,d,u),Pt(r,u),r}function Ua(r,i,a,u){var d=i.current,p=kt(),g=ar(d);return a=Xm(a),i.context===null?i.context=a:i.pendingContext=a,i=Pn(p,g),i.payload={element:r},u=u===void 0?null:u,u!==null&&(i.callback=u),r=rr(d,i,g),r!==null&&(nn(r,d,g,p),ga(r,d,g)),g}function za(r){if(r=r.current,!r.child)return null;switch(r.child.tag){case 5:return r.child.stateNode;default:return r.child.stateNode}}function eg(r,i){if(r=r.memoizedState,r!==null&&r.dehydrated!==null){var a=r.retryLane;r.retryLane=a!==0&&a<i?a:i}}function Hc(r,i){eg(r,i),(r=r.alternate)&&eg(r,i)}function eC(){return null}var tg=typeof reportError=="function"?reportError:function(r){console.error(r)};function Gc(r){this._internalRoot=r}$a.prototype.render=Gc.prototype.render=function(r){var i=this._internalRoot;if(i===null)throw Error(n(409));Ua(r,i,null,null)},$a.prototype.unmount=Gc.prototype.unmount=function(){var r=this._internalRoot;if(r!==null){this._internalRoot=null;var i=r.containerInfo;Fr(function(){Ua(null,r,null,null)}),i[Tn]=null}};function $a(r){this._internalRoot=r}$a.prototype.unstable_scheduleHydration=function(r){if(r){var i=jf();r={blockedOn:null,target:r,priority:i};for(var a=0;a<Yn.length&&i!==0&&i<Yn[a].priority;a++);Yn.splice(a,0,r),a===0&&$f(r)}};function qc(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11)}function Wa(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11&&(r.nodeType!==8||r.nodeValue!==" react-mount-point-unstable "))}function ng(){}function tC(r,i,a,u,d){if(d){if(typeof u=="function"){var p=u;u=function(){var P=za(g);p.call(P)}}var g=Zm(i,u,r,0,null,!1,!1,"",ng);return r._reactRootContainer=g,r[Tn]=g.current,Ds(r.nodeType===8?r.parentNode:r),Fr(),g}for(;d=r.lastChild;)r.removeChild(d);if(typeof u=="function"){var w=u;u=function(){var P=za(C);w.call(P)}}var C=Vc(r,0,!1,null,null,!1,!1,"",ng);return r._reactRootContainer=C,r[Tn]=C.current,Ds(r.nodeType===8?r.parentNode:r),Fr(function(){Ua(i,C,a,u)}),C}function Ba(r,i,a,u,d){var p=a._reactRootContainer;if(p){var g=p;if(typeof d=="function"){var w=d;d=function(){var C=za(g);w.call(C)}}Ua(i,g,r,d)}else g=tC(a,i,r,d,u);return za(g)}Mf=function(r){switch(r.tag){case 3:var i=r.stateNode;if(i.current.memoizedState.isDehydrated){var a=_s(i.pendingLanes);a!==0&&(yu(i,a|1),Pt(i,Ve()),(ve&6)===0&&(Ni=Ve()+500,tr()))}break;case 13:Fr(function(){var u=Nn(r,1);if(u!==null){var d=kt();nn(u,r,1,d)}}),Hc(r,1)}},_u=function(r){if(r.tag===13){var i=Nn(r,134217728);if(i!==null){var a=kt();nn(i,r,134217728,a)}Hc(r,134217728)}},Ff=function(r){if(r.tag===13){var i=ar(r),a=Nn(r,i);if(a!==null){var u=kt();nn(a,r,i,u)}Hc(r,i)}},jf=function(){return Ie},Uf=function(r,i){var a=Ie;try{return Ie=r,i()}finally{Ie=a}},cu=function(r,i,a){switch(i){case"input":if(nu(r,a),i=a.name,a.type==="radio"&&i!=null){for(a=r;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<a.length;i++){var u=a[i];if(u!==r&&u.form===r.form){var d=oa(u);if(!d)throw Error(n(90));In(u),nu(u,d)}}}break;case"textarea":pf(r,a);break;case"select":i=a.value,i!=null&&ai(r,!!a.multiple,i,!1)}},kf=jc,Sf=Fr;var nC={usingClientEntryPoint:!1,Events:[Ms,yi,oa,Ef,Cf,jc]},Qs={findFiberByHostInstance:br,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},rC={bundleType:Qs.bundleType,version:Qs.version,rendererPackageName:Qs.rendererPackageName,rendererConfig:Qs.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Z.ReactCurrentDispatcher,findHostInstanceByFiber:function(r){return r=Rf(r),r===null?null:r.stateNode},findFiberByHostInstance:Qs.findFiberByHostInstance||eC,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Va=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Va.isDisabled&&Va.supportsFiber)try{$o=Va.inject(rC),pn=Va}catch{}}return At.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=nC,At.createPortal=function(r,i){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!qc(i))throw Error(n(200));return Z0(r,i,null,a)},At.createRoot=function(r,i){if(!qc(r))throw Error(n(299));var a=!1,u="",d=tg;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(u=i.identifierPrefix),i.onRecoverableError!==void 0&&(d=i.onRecoverableError)),i=Vc(r,1,!1,null,null,a,!1,u,d),r[Tn]=i.current,Ds(r.nodeType===8?r.parentNode:r),new Gc(i)},At.findDOMNode=function(r){if(r==null)return null;if(r.nodeType===1)return r;var i=r._reactInternals;if(i===void 0)throw typeof r.render=="function"?Error(n(188)):(r=Object.keys(r).join(","),Error(n(268,r)));return r=Rf(i),r=r===null?null:r.stateNode,r},At.flushSync=function(r){return Fr(r)},At.hydrate=function(r,i,a){if(!Wa(i))throw Error(n(200));return Ba(null,r,i,!0,a)},At.hydrateRoot=function(r,i,a){if(!qc(r))throw Error(n(405));var u=a!=null&&a.hydratedSources||null,d=!1,p="",g=tg;if(a!=null&&(a.unstable_strictMode===!0&&(d=!0),a.identifierPrefix!==void 0&&(p=a.identifierPrefix),a.onRecoverableError!==void 0&&(g=a.onRecoverableError)),i=Zm(i,null,r,1,a??null,d,!1,p,g),r[Tn]=i.current,Ds(r),u)for(r=0;r<u.length;r++)a=u[r],d=a._getVersion,d=d(a._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[a,d]:i.mutableSourceEagerHydrationData.push(a,d);return new $a(i)},At.render=function(r,i,a){if(!Wa(i))throw Error(n(200));return Ba(null,r,i,!1,a)},At.unmountComponentAtNode=function(r){if(!Wa(r))throw Error(n(40));return r._reactRootContainer?(Fr(function(){Ba(null,null,r,!1,function(){r._reactRootContainer=null,r[Tn]=null})}),!0):!1},At.unstable_batchedUpdates=jc,At.unstable_renderSubtreeIntoContainer=function(r,i,a,u){if(!Wa(a))throw Error(n(200));if(r==null||r._reactInternals===void 0)throw Error(n(38));return Ba(r,i,a,!1,u)},At.version="18.3.1-next-f1338f8080-20240426",At}var cg;function hC(){if(cg)return Qc.exports;cg=1;function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(e){console.error(e)}}return t(),Qc.exports=dC(),Qc.exports}var dg;function fC(){if(dg)return Ha;dg=1;var t=hC();return Ha.createRoot=t.createRoot,Ha.hydrateRoot=t.hydrateRoot,Ha}var pC=fC();const mC=Xy(pC),gC="modulepreload",yC=function(t){return"/DriveWay/"+t},hg={},mt=function(e,n,s){let o=Promise.resolve();if(n&&n.length>0){let c=function(m){return Promise.all(m.map(y=>Promise.resolve(y).then(_=>({status:"fulfilled",value:_}),_=>({status:"rejected",reason:_}))))};document.getElementsByTagName("link");const h=document.querySelector("meta[property=csp-nonce]"),f=(h==null?void 0:h.nonce)||(h==null?void 0:h.getAttribute("nonce"));o=c(n.map(m=>{if(m=yC(m),m in hg)return;hg[m]=!0;const y=m.endsWith(".css"),_=y?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${m}"]${_}`))return;const v=document.createElement("link");if(v.rel=y?"stylesheet":gC,y||(v.as="script"),v.crossOrigin="",v.href=m,f&&v.setAttribute("nonce",f),document.head.appendChild(v),y)return new Promise((I,N)=>{v.addEventListener("load",I),v.addEventListener("error",()=>N(new Error(`Unable to preload CSS for ${m}`)))})}))}function l(c){const h=new Event("vite:preloadError",{cancelable:!0});if(h.payload=c,window.dispatchEvent(h),!h.defaultPrevented)throw c}return o.then(c=>{for(const h of c||[])h.status==="rejected"&&l(h.reason);return e().catch(l)})};/**
 * react-router v7.9.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var fg="popstate";function _C(t={}){function e(s,o){let{pathname:l,search:c,hash:h}=s.location;return wd("",{pathname:l,search:c,hash:h},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function n(s,o){return typeof o=="string"?o:po(o)}return wC(e,n,null,t)}function Fe(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Yt(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function vC(){return Math.random().toString(36).substring(2,10)}function pg(t,e){return{usr:t.state,key:t.key,idx:e}}function wd(t,e,n=null,s){return{pathname:typeof t=="string"?t:t.pathname,search:"",hash:"",...typeof e=="string"?Zi(e):e,state:n,key:e&&e.key||s||vC()}}function po({pathname:t="/",search:e="",hash:n=""}){return e&&e!=="?"&&(t+=e.charAt(0)==="?"?e:"?"+e),n&&n!=="#"&&(t+=n.charAt(0)==="#"?n:"#"+n),t}function Zi(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substring(n),t=t.substring(0,n));let s=t.indexOf("?");s>=0&&(e.search=t.substring(s),t=t.substring(0,s)),t&&(e.pathname=t)}return e}function wC(t,e,n,s={}){let{window:o=document.defaultView,v5Compat:l=!1}=s,c=o.history,h="POP",f=null,m=y();m==null&&(m=0,c.replaceState({...c.state,idx:m},""));function y(){return(c.state||{idx:null}).idx}function _(){h="POP";let A=y(),W=A==null?null:A-m;m=A,f&&f({action:h,location:x.location,delta:W})}function v(A,W){h="PUSH";let V=wd(x.location,A,W);m=y()+1;let j=pg(V,m),Z=x.createHref(V);try{c.pushState(j,"",Z)}catch(ce){if(ce instanceof DOMException&&ce.name==="DataCloneError")throw ce;o.location.assign(Z)}l&&f&&f({action:h,location:x.location,delta:1})}function I(A,W){h="REPLACE";let V=wd(x.location,A,W);m=y();let j=pg(V,m),Z=x.createHref(V);c.replaceState(j,"",Z),l&&f&&f({action:h,location:x.location,delta:0})}function N(A){return EC(A)}let x={get action(){return h},get location(){return t(o,c)},listen(A){if(f)throw new Error("A history only accepts one active listener");return o.addEventListener(fg,_),f=A,()=>{o.removeEventListener(fg,_),f=null}},createHref(A){return e(o,A)},createURL:N,encodeLocation(A){let W=N(A);return{pathname:W.pathname,search:W.search,hash:W.hash}},push:v,replace:I,go(A){return c.go(A)}};return x}function EC(t,e=!1){let n="http://localhost";typeof window<"u"&&(n=window.location.origin!=="null"?window.location.origin:window.location.href),Fe(n,"No window.location.(origin|href) available to create URL");let s=typeof t=="string"?t:po(t);return s=s.replace(/ $/,"%20"),!e&&s.startsWith("//")&&(s=n+s),new URL(s,n)}function Zy(t,e,n="/"){return CC(t,e,n,!1)}function CC(t,e,n,s){let o=typeof e=="string"?Zi(e):e,l=$n(o.pathname||"/",n);if(l==null)return null;let c=e_(t);kC(c);let h=null;for(let f=0;h==null&&f<c.length;++f){let m=OC(l);h=AC(c[f],m,s)}return h}function e_(t,e=[],n=[],s="",o=!1){let l=(c,h,f=o,m)=>{let y={relativePath:m===void 0?c.path||"":m,caseSensitive:c.caseSensitive===!0,childrenIndex:h,route:c};if(y.relativePath.startsWith("/")){if(!y.relativePath.startsWith(s)&&f)return;Fe(y.relativePath.startsWith(s),`Absolute route path "${y.relativePath}" nested under path "${s}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),y.relativePath=y.relativePath.slice(s.length)}let _=jn([s,y.relativePath]),v=n.concat(y);c.children&&c.children.length>0&&(Fe(c.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${_}".`),e_(c.children,e,v,_,f)),!(c.path==null&&!c.index)&&e.push({path:_,score:NC(_,c.index),routesMeta:v})};return t.forEach((c,h)=>{var f;if(c.path===""||!((f=c.path)!=null&&f.includes("?")))l(c,h);else for(let m of t_(c.path))l(c,h,!0,m)}),e}function t_(t){let e=t.split("/");if(e.length===0)return[];let[n,...s]=e,o=n.endsWith("?"),l=n.replace(/\?$/,"");if(s.length===0)return o?[l,""]:[l];let c=t_(s.join("/")),h=[];return h.push(...c.map(f=>f===""?l:[l,f].join("/"))),o&&h.push(...c),h.map(f=>t.startsWith("/")&&f===""?"/":f)}function kC(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:PC(e.routesMeta.map(s=>s.childrenIndex),n.routesMeta.map(s=>s.childrenIndex)))}var SC=/^:[\w-]+$/,IC=3,TC=2,xC=1,RC=10,bC=-2,mg=t=>t==="*";function NC(t,e){let n=t.split("/"),s=n.length;return n.some(mg)&&(s+=bC),e&&(s+=TC),n.filter(o=>!mg(o)).reduce((o,l)=>o+(SC.test(l)?IC:l===""?xC:RC),s)}function PC(t,e){return t.length===e.length&&t.slice(0,-1).every((s,o)=>s===e[o])?t[t.length-1]-e[e.length-1]:0}function AC(t,e,n=!1){let{routesMeta:s}=t,o={},l="/",c=[];for(let h=0;h<s.length;++h){let f=s[h],m=h===s.length-1,y=l==="/"?e:e.slice(l.length)||"/",_=ol({path:f.relativePath,caseSensitive:f.caseSensitive,end:m},y),v=f.route;if(!_&&m&&n&&!s[s.length-1].route.index&&(_=ol({path:f.relativePath,caseSensitive:f.caseSensitive,end:!1},y)),!_)return null;Object.assign(o,_.params),c.push({params:o,pathname:jn([l,_.pathname]),pathnameBase:UC(jn([l,_.pathnameBase])),route:v}),_.pathnameBase!=="/"&&(l=jn([l,_.pathnameBase]))}return c}function ol(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,s]=DC(t.path,t.caseSensitive,t.end),o=e.match(n);if(!o)return null;let l=o[0],c=l.replace(/(.)\/+$/,"$1"),h=o.slice(1);return{params:s.reduce((m,{paramName:y,isOptional:_},v)=>{if(y==="*"){let N=h[v]||"";c=l.slice(0,l.length-N.length).replace(/(.)\/+$/,"$1")}const I=h[v];return _&&!I?m[y]=void 0:m[y]=(I||"").replace(/%2F/g,"/"),m},{}),pathname:l,pathnameBase:c,pattern:t}}function DC(t,e=!1,n=!0){Yt(t==="*"||!t.endsWith("*")||t.endsWith("/*"),`Route path "${t}" will be treated as if it were "${t.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${t.replace(/\*$/,"/*")}".`);let s=[],o="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(c,h,f)=>(s.push({paramName:h,isOptional:f!=null}),f?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return t.endsWith("*")?(s.push({paramName:"*"}),o+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?o+="\\/*$":t!==""&&t!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,e?void 0:"i"),s]}function OC(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Yt(!1,`The URL path "${t}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),t}}function $n(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,s=t.charAt(n);return s&&s!=="/"?null:t.slice(n)||"/"}var LC=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,MC=t=>LC.test(t);function FC(t,e="/"){let{pathname:n,search:s="",hash:o=""}=typeof t=="string"?Zi(t):t,l;if(n)if(MC(n))l=n;else{if(n.includes("//")){let c=n;n=n.replace(/\/\/+/g,"/"),Yt(!1,`Pathnames cannot have embedded double slashes - normalizing ${c} -> ${n}`)}n.startsWith("/")?l=gg(n.substring(1),"/"):l=gg(n,e)}else l=e;return{pathname:l,search:zC(s),hash:$C(o)}}function gg(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(o=>{o===".."?n.length>1&&n.pop():o!=="."&&n.push(o)}),n.length>1?n.join("/"):"/"}function Zc(t,e,n,s){return`Cannot include a '${t}' character in a manually specified \`to.${e}\` field [${JSON.stringify(s)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function jC(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function Qd(t){let e=jC(t);return e.map((n,s)=>s===e.length-1?n.pathname:n.pathnameBase)}function Jd(t,e,n,s=!1){let o;typeof t=="string"?o=Zi(t):(o={...t},Fe(!o.pathname||!o.pathname.includes("?"),Zc("?","pathname","search",o)),Fe(!o.pathname||!o.pathname.includes("#"),Zc("#","pathname","hash",o)),Fe(!o.search||!o.search.includes("#"),Zc("#","search","hash",o)));let l=t===""||o.pathname==="",c=l?"/":o.pathname,h;if(c==null)h=n;else{let _=e.length-1;if(!s&&c.startsWith("..")){let v=c.split("/");for(;v[0]==="..";)v.shift(),_-=1;o.pathname=v.join("/")}h=_>=0?e[_]:"/"}let f=FC(o,h),m=c&&c!=="/"&&c.endsWith("/"),y=(l||c===".")&&n.endsWith("/");return!f.pathname.endsWith("/")&&(m||y)&&(f.pathname+="/"),f}var jn=t=>t.join("/").replace(/\/\/+/g,"/"),UC=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),zC=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,$C=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function WC(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var n_=["POST","PUT","PATCH","DELETE"];new Set(n_);var BC=["GET",...n_];new Set(BC);var es=T.createContext(null);es.displayName="DataRouter";var Ol=T.createContext(null);Ol.displayName="DataRouterState";T.createContext(!1);var r_=T.createContext({isTransitioning:!1});r_.displayName="ViewTransition";var VC=T.createContext(new Map);VC.displayName="Fetchers";var HC=T.createContext(null);HC.displayName="Await";var dn=T.createContext(null);dn.displayName="Navigation";var To=T.createContext(null);To.displayName="Location";var hn=T.createContext({outlet:null,matches:[],isDataRoute:!1});hn.displayName="Route";var Xd=T.createContext(null);Xd.displayName="RouteError";function GC(t,{relative:e}={}){Fe(ts(),"useHref() may be used only in the context of a <Router> component.");let{basename:n,navigator:s}=T.useContext(dn),{hash:o,pathname:l,search:c}=xo(t,{relative:e}),h=l;return n!=="/"&&(h=l==="/"?n:jn([n,l])),s.createHref({pathname:h,search:c,hash:o})}function ts(){return T.useContext(To)!=null}function Hn(){return Fe(ts(),"useLocation() may be used only in the context of a <Router> component."),T.useContext(To).location}var i_="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function s_(t){T.useContext(dn).static||T.useLayoutEffect(t)}function Ll(){let{isDataRoute:t}=T.useContext(hn);return t?sk():qC()}function qC(){Fe(ts(),"useNavigate() may be used only in the context of a <Router> component.");let t=T.useContext(es),{basename:e,navigator:n}=T.useContext(dn),{matches:s}=T.useContext(hn),{pathname:o}=Hn(),l=JSON.stringify(Qd(s)),c=T.useRef(!1);return s_(()=>{c.current=!0}),T.useCallback((f,m={})=>{if(Yt(c.current,i_),!c.current)return;if(typeof f=="number"){n.go(f);return}let y=Jd(f,JSON.parse(l),o,m.relative==="path");t==null&&e!=="/"&&(y.pathname=y.pathname==="/"?e:jn([e,y.pathname])),(m.replace?n.replace:n.push)(y,m.state,m)},[e,n,l,o,t])}T.createContext(null);function TD(){let{matches:t}=T.useContext(hn),e=t[t.length-1];return e?e.params:{}}function xo(t,{relative:e}={}){let{matches:n}=T.useContext(hn),{pathname:s}=Hn(),o=JSON.stringify(Qd(n));return T.useMemo(()=>Jd(t,JSON.parse(o),s,e==="path"),[t,o,s,e])}function KC(t,e){return o_(t,e)}function o_(t,e,n,s,o){var V;Fe(ts(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:l}=T.useContext(dn),{matches:c}=T.useContext(hn),h=c[c.length-1],f=h?h.params:{},m=h?h.pathname:"/",y=h?h.pathnameBase:"/",_=h&&h.route;{let j=_&&_.path||"";a_(m,!_||j.endsWith("*")||j.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${m}" (under <Route path="${j}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${j}"> to <Route path="${j==="/"?"*":`${j}/*`}">.`)}let v=Hn(),I;if(e){let j=typeof e=="string"?Zi(e):e;Fe(y==="/"||((V=j.pathname)==null?void 0:V.startsWith(y)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${y}" but pathname "${j.pathname}" was given in the \`location\` prop.`),I=j}else I=v;let N=I.pathname||"/",x=N;if(y!=="/"){let j=y.replace(/^\//,"").split("/");x="/"+N.replace(/^\//,"").split("/").slice(j.length).join("/")}let A=Zy(t,{pathname:x});Yt(_||A!=null,`No routes matched location "${I.pathname}${I.search}${I.hash}" `),Yt(A==null||A[A.length-1].route.element!==void 0||A[A.length-1].route.Component!==void 0||A[A.length-1].route.lazy!==void 0,`Matched leaf route at location "${I.pathname}${I.search}${I.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let W=ZC(A&&A.map(j=>Object.assign({},j,{params:Object.assign({},f,j.params),pathname:jn([y,l.encodeLocation?l.encodeLocation(j.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:j.pathname]),pathnameBase:j.pathnameBase==="/"?y:jn([y,l.encodeLocation?l.encodeLocation(j.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:j.pathnameBase])})),c,n,s,o);return e&&W?T.createElement(To.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...I},navigationType:"POP"}},W):W}function YC(){let t=ik(),e=WC(t)?`${t.status} ${t.statusText}`:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,s="rgba(200,200,200, 0.5)",o={padding:"0.5rem",backgroundColor:s},l={padding:"2px 4px",backgroundColor:s},c=null;return console.error("Error handled by React Router default ErrorBoundary:",t),c=T.createElement(T.Fragment,null,T.createElement("p",null,"💿 Hey developer 👋"),T.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",T.createElement("code",{style:l},"ErrorBoundary")," or"," ",T.createElement("code",{style:l},"errorElement")," prop on your route.")),T.createElement(T.Fragment,null,T.createElement("h2",null,"Unexpected Application Error!"),T.createElement("h3",{style:{fontStyle:"italic"}},e),n?T.createElement("pre",{style:o},n):null,c)}var QC=T.createElement(YC,null),JC=class extends T.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,e){return e.location!==t.location||e.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:e.error,location:e.location,revalidation:t.revalidation||e.revalidation}}componentDidCatch(t,e){this.props.onError?this.props.onError(t,e):console.error("React Router caught the following error during render",t)}render(){return this.state.error!==void 0?T.createElement(hn.Provider,{value:this.props.routeContext},T.createElement(Xd.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function XC({routeContext:t,match:e,children:n}){let s=T.useContext(es);return s&&s.static&&s.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=e.route.id),T.createElement(hn.Provider,{value:t},n)}function ZC(t,e=[],n=null,s=null,o=null){if(t==null){if(!n)return null;if(n.errors)t=n.matches;else if(e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let l=t,c=n==null?void 0:n.errors;if(c!=null){let y=l.findIndex(_=>_.route.id&&(c==null?void 0:c[_.route.id])!==void 0);Fe(y>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(c).join(",")}`),l=l.slice(0,Math.min(l.length,y+1))}let h=!1,f=-1;if(n)for(let y=0;y<l.length;y++){let _=l[y];if((_.route.HydrateFallback||_.route.hydrateFallbackElement)&&(f=y),_.route.id){let{loaderData:v,errors:I}=n,N=_.route.loader&&!v.hasOwnProperty(_.route.id)&&(!I||I[_.route.id]===void 0);if(_.route.lazy||N){h=!0,f>=0?l=l.slice(0,f+1):l=[l[0]];break}}}let m=n&&s?(y,_)=>{var v,I;s(y,{location:n.location,params:((I=(v=n.matches)==null?void 0:v[0])==null?void 0:I.params)??{},errorInfo:_})}:void 0;return l.reduceRight((y,_,v)=>{let I,N=!1,x=null,A=null;n&&(I=c&&_.route.id?c[_.route.id]:void 0,x=_.route.errorElement||QC,h&&(f<0&&v===0?(a_("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),N=!0,A=null):f===v&&(N=!0,A=_.route.hydrateFallbackElement||null)));let W=e.concat(l.slice(0,v+1)),V=()=>{let j;return I?j=x:N?j=A:_.route.Component?j=T.createElement(_.route.Component,null):_.route.element?j=_.route.element:j=y,T.createElement(XC,{match:_,routeContext:{outlet:y,matches:W,isDataRoute:n!=null},children:j})};return n&&(_.route.ErrorBoundary||_.route.errorElement||v===0)?T.createElement(JC,{location:n.location,revalidation:n.revalidation,component:x,error:I,children:V(),routeContext:{outlet:null,matches:W,isDataRoute:!0},onError:m}):V()},null)}function Zd(t){return`${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function ek(t){let e=T.useContext(es);return Fe(e,Zd(t)),e}function tk(t){let e=T.useContext(Ol);return Fe(e,Zd(t)),e}function nk(t){let e=T.useContext(hn);return Fe(e,Zd(t)),e}function eh(t){let e=nk(t),n=e.matches[e.matches.length-1];return Fe(n.route.id,`${t} can only be used on routes that contain a unique "id"`),n.route.id}function rk(){return eh("useRouteId")}function ik(){var s;let t=T.useContext(Xd),e=tk("useRouteError"),n=eh("useRouteError");return t!==void 0?t:(s=e.errors)==null?void 0:s[n]}function sk(){let{router:t}=ek("useNavigate"),e=eh("useNavigate"),n=T.useRef(!1);return s_(()=>{n.current=!0}),T.useCallback(async(o,l={})=>{Yt(n.current,i_),n.current&&(typeof o=="number"?t.navigate(o):await t.navigate(o,{fromRouteId:e,...l}))},[t,e])}var yg={};function a_(t,e,n){!e&&!yg[t]&&(yg[t]=!0,Yt(!1,n))}T.memo(ok);function ok({routes:t,future:e,state:n,unstable_onError:s}){return o_(t,void 0,n,s,e)}function ak({to:t,replace:e,state:n,relative:s}){Fe(ts(),"<Navigate> may be used only in the context of a <Router> component.");let{static:o}=T.useContext(dn);Yt(!o,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:l}=T.useContext(hn),{pathname:c}=Hn(),h=Ll(),f=Jd(t,Qd(l),c,s==="path"),m=JSON.stringify(f);return T.useEffect(()=>{h(JSON.parse(m),{replace:e,state:n,relative:s})},[h,m,s,e,n]),null}function Xe(t){Fe(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function lk({basename:t="/",children:e=null,location:n,navigationType:s="POP",navigator:o,static:l=!1}){Fe(!ts(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let c=t.replace(/^\/*/,"/"),h=T.useMemo(()=>({basename:c,navigator:o,static:l,future:{}}),[c,o,l]);typeof n=="string"&&(n=Zi(n));let{pathname:f="/",search:m="",hash:y="",state:_=null,key:v="default"}=n,I=T.useMemo(()=>{let N=$n(f,c);return N==null?null:{location:{pathname:N,search:m,hash:y,state:_,key:v},navigationType:s}},[c,f,m,y,_,v,s]);return Yt(I!=null,`<Router basename="${c}"> is not able to match the URL "${f}${m}${y}" because it does not start with the basename, so the <Router> won't render anything.`),I==null?null:T.createElement(dn.Provider,{value:h},T.createElement(To.Provider,{children:e,value:I}))}function _g({children:t,location:e}){return KC(Ed(t),e)}function Ed(t,e=[]){let n=[];return T.Children.forEach(t,(s,o)=>{if(!T.isValidElement(s))return;let l=[...e,o];if(s.type===T.Fragment){n.push.apply(n,Ed(s.props.children,l));return}Fe(s.type===Xe,`[${typeof s.type=="string"?s.type:s.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Fe(!s.props.index||!s.props.children,"An index route cannot have child routes.");let c={id:s.props.id||l.join("-"),caseSensitive:s.props.caseSensitive,element:s.props.element,Component:s.props.Component,index:s.props.index,path:s.props.path,middleware:s.props.middleware,loader:s.props.loader,action:s.props.action,hydrateFallbackElement:s.props.hydrateFallbackElement,HydrateFallback:s.props.HydrateFallback,errorElement:s.props.errorElement,ErrorBoundary:s.props.ErrorBoundary,hasErrorBoundary:s.props.hasErrorBoundary===!0||s.props.ErrorBoundary!=null||s.props.errorElement!=null,shouldRevalidate:s.props.shouldRevalidate,handle:s.props.handle,lazy:s.props.lazy};s.props.children&&(c.children=Ed(s.props.children,l)),n.push(c)}),n}var Za="get",el="application/x-www-form-urlencoded";function Ml(t){return t!=null&&typeof t.tagName=="string"}function uk(t){return Ml(t)&&t.tagName.toLowerCase()==="button"}function ck(t){return Ml(t)&&t.tagName.toLowerCase()==="form"}function dk(t){return Ml(t)&&t.tagName.toLowerCase()==="input"}function hk(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function fk(t,e){return t.button===0&&(!e||e==="_self")&&!hk(t)}var Ga=null;function pk(){if(Ga===null)try{new FormData(document.createElement("form"),0),Ga=!1}catch{Ga=!0}return Ga}var mk=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function ed(t){return t!=null&&!mk.has(t)?(Yt(!1,`"${t}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${el}"`),null):t}function gk(t,e){let n,s,o,l,c;if(ck(t)){let h=t.getAttribute("action");s=h?$n(h,e):null,n=t.getAttribute("method")||Za,o=ed(t.getAttribute("enctype"))||el,l=new FormData(t)}else if(uk(t)||dk(t)&&(t.type==="submit"||t.type==="image")){let h=t.form;if(h==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let f=t.getAttribute("formaction")||h.getAttribute("action");if(s=f?$n(f,e):null,n=t.getAttribute("formmethod")||h.getAttribute("method")||Za,o=ed(t.getAttribute("formenctype"))||ed(h.getAttribute("enctype"))||el,l=new FormData(h,t),!pk()){let{name:m,type:y,value:_}=t;if(y==="image"){let v=m?`${m}.`:"";l.append(`${v}x`,"0"),l.append(`${v}y`,"0")}else m&&l.append(m,_)}}else{if(Ml(t))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');n=Za,s=null,o=el,c=t}return l&&o==="text/plain"&&(c=l,l=void 0),{action:s,method:n.toLowerCase(),encType:o,formData:l,body:c}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function th(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function yk(t,e,n){let s=typeof t=="string"?new URL(t,typeof window>"u"?"server://singlefetch/":window.location.origin):t;return s.pathname==="/"?s.pathname=`_root.${n}`:e&&$n(s.pathname,e)==="/"?s.pathname=`${e.replace(/\/$/,"")}/_root.${n}`:s.pathname=`${s.pathname.replace(/\/$/,"")}.${n}`,s}async function _k(t,e){if(t.id in e)return e[t.id];try{let n=await import(t.module);return e[t.id]=n,n}catch(n){return console.error(`Error loading route module \`${t.module}\`, reloading page...`),console.error(n),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function vk(t){return t==null?!1:t.href==null?t.rel==="preload"&&typeof t.imageSrcSet=="string"&&typeof t.imageSizes=="string":typeof t.rel=="string"&&typeof t.href=="string"}async function wk(t,e,n){let s=await Promise.all(t.map(async o=>{let l=e.routes[o.route.id];if(l){let c=await _k(l,n);return c.links?c.links():[]}return[]}));return Sk(s.flat(1).filter(vk).filter(o=>o.rel==="stylesheet"||o.rel==="preload").map(o=>o.rel==="stylesheet"?{...o,rel:"prefetch",as:"style"}:{...o,rel:"prefetch"}))}function vg(t,e,n,s,o,l){let c=(f,m)=>n[m]?f.route.id!==n[m].route.id:!0,h=(f,m)=>{var y;return n[m].pathname!==f.pathname||((y=n[m].route.path)==null?void 0:y.endsWith("*"))&&n[m].params["*"]!==f.params["*"]};return l==="assets"?e.filter((f,m)=>c(f,m)||h(f,m)):l==="data"?e.filter((f,m)=>{var _;let y=s.routes[f.route.id];if(!y||!y.hasLoader)return!1;if(c(f,m)||h(f,m))return!0;if(f.route.shouldRevalidate){let v=f.route.shouldRevalidate({currentUrl:new URL(o.pathname+o.search+o.hash,window.origin),currentParams:((_=n[0])==null?void 0:_.params)||{},nextUrl:new URL(t,window.origin),nextParams:f.params,defaultShouldRevalidate:!0});if(typeof v=="boolean")return v}return!0}):[]}function Ek(t,e,{includeHydrateFallback:n}={}){return Ck(t.map(s=>{let o=e.routes[s.route.id];if(!o)return[];let l=[o.module];return o.clientActionModule&&(l=l.concat(o.clientActionModule)),o.clientLoaderModule&&(l=l.concat(o.clientLoaderModule)),n&&o.hydrateFallbackModule&&(l=l.concat(o.hydrateFallbackModule)),o.imports&&(l=l.concat(o.imports)),l}).flat(1))}function Ck(t){return[...new Set(t)]}function kk(t){let e={},n=Object.keys(t).sort();for(let s of n)e[s]=t[s];return e}function Sk(t,e){let n=new Set;return new Set(e),t.reduce((s,o)=>{let l=JSON.stringify(kk(o));return n.has(l)||(n.add(l),s.push({key:l,link:o})),s},[])}function l_(){let t=T.useContext(es);return th(t,"You must render this element inside a <DataRouterContext.Provider> element"),t}function Ik(){let t=T.useContext(Ol);return th(t,"You must render this element inside a <DataRouterStateContext.Provider> element"),t}var nh=T.createContext(void 0);nh.displayName="FrameworkContext";function u_(){let t=T.useContext(nh);return th(t,"You must render this element inside a <HydratedRouter> element"),t}function Tk(t,e){let n=T.useContext(nh),[s,o]=T.useState(!1),[l,c]=T.useState(!1),{onFocus:h,onBlur:f,onMouseEnter:m,onMouseLeave:y,onTouchStart:_}=e,v=T.useRef(null);T.useEffect(()=>{if(t==="render"&&c(!0),t==="viewport"){let x=W=>{W.forEach(V=>{c(V.isIntersecting)})},A=new IntersectionObserver(x,{threshold:.5});return v.current&&A.observe(v.current),()=>{A.disconnect()}}},[t]),T.useEffect(()=>{if(s){let x=setTimeout(()=>{c(!0)},100);return()=>{clearTimeout(x)}}},[s]);let I=()=>{o(!0)},N=()=>{o(!1),c(!1)};return n?t!=="intent"?[l,v,{}]:[l,v,{onFocus:Xs(h,I),onBlur:Xs(f,N),onMouseEnter:Xs(m,I),onMouseLeave:Xs(y,N),onTouchStart:Xs(_,I)}]:[!1,v,{}]}function Xs(t,e){return n=>{t&&t(n),n.defaultPrevented||e(n)}}function xk({page:t,...e}){let{router:n}=l_(),s=T.useMemo(()=>Zy(n.routes,t,n.basename),[n.routes,t,n.basename]);return s?T.createElement(bk,{page:t,matches:s,...e}):null}function Rk(t){let{manifest:e,routeModules:n}=u_(),[s,o]=T.useState([]);return T.useEffect(()=>{let l=!1;return wk(t,e,n).then(c=>{l||o(c)}),()=>{l=!0}},[t,e,n]),s}function bk({page:t,matches:e,...n}){let s=Hn(),{manifest:o,routeModules:l}=u_(),{basename:c}=l_(),{loaderData:h,matches:f}=Ik(),m=T.useMemo(()=>vg(t,e,f,o,s,"data"),[t,e,f,o,s]),y=T.useMemo(()=>vg(t,e,f,o,s,"assets"),[t,e,f,o,s]),_=T.useMemo(()=>{if(t===s.pathname+s.search+s.hash)return[];let N=new Set,x=!1;if(e.forEach(W=>{var j;let V=o.routes[W.route.id];!V||!V.hasLoader||(!m.some(Z=>Z.route.id===W.route.id)&&W.route.id in h&&((j=l[W.route.id])!=null&&j.shouldRevalidate)||V.hasClientLoader?x=!0:N.add(W.route.id))}),N.size===0)return[];let A=yk(t,c,"data");return x&&N.size>0&&A.searchParams.set("_routes",e.filter(W=>N.has(W.route.id)).map(W=>W.route.id).join(",")),[A.pathname+A.search]},[c,h,s,o,m,e,t,l]),v=T.useMemo(()=>Ek(y,o),[y,o]),I=Rk(y);return T.createElement(T.Fragment,null,_.map(N=>T.createElement("link",{key:N,rel:"prefetch",as:"fetch",href:N,...n})),v.map(N=>T.createElement("link",{key:N,rel:"modulepreload",href:N,...n})),I.map(({key:N,link:x})=>T.createElement("link",{key:N,nonce:n.nonce,...x})))}function Nk(...t){return e=>{t.forEach(n=>{typeof n=="function"?n(e):n!=null&&(n.current=e)})}}var c_=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{c_&&(window.__reactRouterVersion="7.9.6")}catch{}function Pk({basename:t,children:e,window:n}){let s=T.useRef();s.current==null&&(s.current=_C({window:n,v5Compat:!0}));let o=s.current,[l,c]=T.useState({action:o.action,location:o.location}),h=T.useCallback(f=>{T.startTransition(()=>c(f))},[c]);return T.useLayoutEffect(()=>o.listen(h),[o,h]),T.createElement(lk,{basename:t,children:e,location:l.location,navigationType:l.action,navigator:o})}var d_=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,rh=T.forwardRef(function({onClick:e,discover:n="render",prefetch:s="none",relative:o,reloadDocument:l,replace:c,state:h,target:f,to:m,preventScrollReset:y,viewTransition:_,...v},I){let{basename:N}=T.useContext(dn),x=typeof m=="string"&&d_.test(m),A,W=!1;if(typeof m=="string"&&x&&(A=m,c_))try{let we=new URL(window.location.href),Be=m.startsWith("//")?new URL(we.protocol+m):new URL(m),wt=$n(Be.pathname,N);Be.origin===we.origin&&wt!=null?m=wt+Be.search+Be.hash:W=!0}catch{Yt(!1,`<Link to="${m}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let V=GC(m,{relative:o}),[j,Z,ce]=Tk(s,v),ye=Lk(m,{replace:c,state:h,target:f,preventScrollReset:y,relative:o,viewTransition:_});function _e(we){e&&e(we),we.defaultPrevented||ye(we)}let Y=T.createElement("a",{...v,...ce,href:A||V,onClick:W||l?e:_e,ref:Nk(I,Z),target:f,"data-discover":!x&&n==="render"?"true":void 0});return j&&!x?T.createElement(T.Fragment,null,Y,T.createElement(xk,{page:V})):Y});rh.displayName="Link";var Ak=T.forwardRef(function({"aria-current":e="page",caseSensitive:n=!1,className:s="",end:o=!1,style:l,to:c,viewTransition:h,children:f,...m},y){let _=xo(c,{relative:m.relative}),v=Hn(),I=T.useContext(Ol),{navigator:N,basename:x}=T.useContext(dn),A=I!=null&&zk(_)&&h===!0,W=N.encodeLocation?N.encodeLocation(_).pathname:_.pathname,V=v.pathname,j=I&&I.navigation&&I.navigation.location?I.navigation.location.pathname:null;n||(V=V.toLowerCase(),j=j?j.toLowerCase():null,W=W.toLowerCase()),j&&x&&(j=$n(j,x)||j);const Z=W!=="/"&&W.endsWith("/")?W.length-1:W.length;let ce=V===W||!o&&V.startsWith(W)&&V.charAt(Z)==="/",ye=j!=null&&(j===W||!o&&j.startsWith(W)&&j.charAt(W.length)==="/"),_e={isActive:ce,isPending:ye,isTransitioning:A},Y=ce?e:void 0,we;typeof s=="function"?we=s(_e):we=[s,ce?"active":null,ye?"pending":null,A?"transitioning":null].filter(Boolean).join(" ");let Be=typeof l=="function"?l(_e):l;return T.createElement(rh,{...m,"aria-current":Y,className:we,ref:y,style:Be,to:c,viewTransition:h},typeof f=="function"?f(_e):f)});Ak.displayName="NavLink";var Dk=T.forwardRef(({discover:t="render",fetcherKey:e,navigate:n,reloadDocument:s,replace:o,state:l,method:c=Za,action:h,onSubmit:f,relative:m,preventScrollReset:y,viewTransition:_,...v},I)=>{let N=jk(),x=Uk(h,{relative:m}),A=c.toLowerCase()==="get"?"get":"post",W=typeof h=="string"&&d_.test(h),V=j=>{if(f&&f(j),j.defaultPrevented)return;j.preventDefault();let Z=j.nativeEvent.submitter,ce=(Z==null?void 0:Z.getAttribute("formmethod"))||c;N(Z||j.currentTarget,{fetcherKey:e,method:ce,navigate:n,replace:o,state:l,relative:m,preventScrollReset:y,viewTransition:_})};return T.createElement("form",{ref:I,method:A,action:x,onSubmit:s?f:V,...v,"data-discover":!W&&t==="render"?"true":void 0})});Dk.displayName="Form";function Ok(t){return`${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function h_(t){let e=T.useContext(es);return Fe(e,Ok(t)),e}function Lk(t,{target:e,replace:n,state:s,preventScrollReset:o,relative:l,viewTransition:c}={}){let h=Ll(),f=Hn(),m=xo(t,{relative:l});return T.useCallback(y=>{if(fk(y,e)){y.preventDefault();let _=n!==void 0?n:po(f)===po(m);h(t,{replace:_,state:s,preventScrollReset:o,relative:l,viewTransition:c})}},[f,h,m,n,s,e,t,o,l,c])}var Mk=0,Fk=()=>`__${String(++Mk)}__`;function jk(){let{router:t}=h_("useSubmit"),{basename:e}=T.useContext(dn),n=rk();return T.useCallback(async(s,o={})=>{let{action:l,method:c,encType:h,formData:f,body:m}=gk(s,e);if(o.navigate===!1){let y=o.fetcherKey||Fk();await t.fetch(y,n,o.action||l,{preventScrollReset:o.preventScrollReset,formData:f,body:m,formMethod:o.method||c,formEncType:o.encType||h,flushSync:o.flushSync})}else await t.navigate(o.action||l,{preventScrollReset:o.preventScrollReset,formData:f,body:m,formMethod:o.method||c,formEncType:o.encType||h,replace:o.replace,state:o.state,fromRouteId:n,flushSync:o.flushSync,viewTransition:o.viewTransition})},[t,e,n])}function Uk(t,{relative:e}={}){let{basename:n}=T.useContext(dn),s=T.useContext(hn);Fe(s,"useFormAction must be used inside a RouteContext");let[o]=s.matches.slice(-1),l={...xo(t||".",{relative:e})},c=Hn();if(t==null){l.search=c.search;let h=new URLSearchParams(l.search),f=h.getAll("index");if(f.some(y=>y==="")){h.delete("index"),f.filter(_=>_).forEach(_=>h.append("index",_));let y=h.toString();l.search=y?`?${y}`:""}}return(!t||t===".")&&o.route.index&&(l.search=l.search?l.search.replace(/^\?/,"?index&"):"?index"),n!=="/"&&(l.pathname=l.pathname==="/"?n:jn([n,l.pathname])),po(l)}function zk(t,{relative:e}={}){let n=T.useContext(r_);Fe(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:s}=h_("useViewTransitionState"),o=xo(t,{relative:e});if(!n.isTransitioning)return!1;let l=$n(n.currentLocation.pathname,s)||n.currentLocation.pathname,c=$n(n.nextLocation.pathname,s)||n.nextLocation.pathname;return ol(o.pathname,c)!=null||ol(o.pathname,l)!=null}const $k=()=>{};var wg={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f_={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $=function(t,e){if(!t)throw ns(e)},ns=function(t){return new Error("Firebase Database ("+f_.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const p_=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let o=t.charCodeAt(s);o<128?e[n++]=o:o<2048?(e[n++]=o>>6|192,e[n++]=o&63|128):(o&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(o=65536+((o&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=o>>18|240,e[n++]=o>>12&63|128,e[n++]=o>>6&63|128,e[n++]=o&63|128):(e[n++]=o>>12|224,e[n++]=o>>6&63|128,e[n++]=o&63|128)}return e},Wk=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const o=t[n++];if(o<128)e[s++]=String.fromCharCode(o);else if(o>191&&o<224){const l=t[n++];e[s++]=String.fromCharCode((o&31)<<6|l&63)}else if(o>239&&o<365){const l=t[n++],c=t[n++],h=t[n++],f=((o&7)<<18|(l&63)<<12|(c&63)<<6|h&63)-65536;e[s++]=String.fromCharCode(55296+(f>>10)),e[s++]=String.fromCharCode(56320+(f&1023))}else{const l=t[n++],c=t[n++];e[s++]=String.fromCharCode((o&15)<<12|(l&63)<<6|c&63)}}return e.join("")},ih={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let o=0;o<t.length;o+=3){const l=t[o],c=o+1<t.length,h=c?t[o+1]:0,f=o+2<t.length,m=f?t[o+2]:0,y=l>>2,_=(l&3)<<4|h>>4;let v=(h&15)<<2|m>>6,I=m&63;f||(I=64,c||(v=64)),s.push(n[y],n[_],n[v],n[I])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(p_(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Wk(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let o=0;o<t.length;){const l=n[t.charAt(o++)],h=o<t.length?n[t.charAt(o)]:0;++o;const m=o<t.length?n[t.charAt(o)]:64;++o;const _=o<t.length?n[t.charAt(o)]:64;if(++o,l==null||h==null||m==null||_==null)throw new Bk;const v=l<<2|h>>4;if(s.push(v),m!==64){const I=h<<4&240|m>>2;if(s.push(I),_!==64){const N=m<<6&192|_;s.push(N)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Bk extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const m_=function(t){const e=p_(t);return ih.encodeByteArray(e,!0)},al=function(t){return m_(t).replace(/\./g,"")},ll=function(t){try{return ih.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vk(t){return g_(void 0,t)}function g_(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!Hk(n)||(t[n]=g_(t[n],e[n]));return t}function Hk(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gk(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qk=()=>Gk().__FIREBASE_DEFAULTS__,Kk=()=>{if(typeof process>"u"||typeof wg>"u")return;const t=wg.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Yk=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&ll(t[1]);return e&&JSON.parse(e)},sh=()=>{try{return $k()||qk()||Kk()||Yk()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},y_=t=>{var e,n;return(n=(e=sh())==null?void 0:e.emulatorHosts)==null?void 0:n[t]},Qk=t=>{const e=y_(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},__=()=>{var t;return(t=sh())==null?void 0:t.config},v_=t=>{var e;return(e=sh())==null?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ro{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rs(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function w_(t){return(await fetch(t,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jk(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",o=t.iat||0,l=t.sub||t.user_id;if(!l)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const c={iss:`https://securetoken.google.com/${s}`,aud:s,iat:o,exp:o+3600,auth_time:o,sub:l,user_id:l,firebase:{sign_in_provider:"custom",identities:{}},...t};return[al(JSON.stringify(n)),al(JSON.stringify(c)),""].join(".")}const oo={};function Xk(){const t={prod:[],emulator:[]};for(const e of Object.keys(oo))oo[e]?t.emulator.push(e):t.prod.push(e);return t}function Zk(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let Eg=!1;function E_(t,e){if(typeof window>"u"||typeof document>"u"||!rs(window.location.host)||oo[t]===e||oo[t]||Eg)return;oo[t]=e;function n(v){return`__firebase__banner__${v}`}const s="__firebase__banner",l=Xk().prod.length>0;function c(){const v=document.getElementById(s);v&&v.remove()}function h(v){v.style.display="flex",v.style.background="#7faaf0",v.style.position="fixed",v.style.bottom="5px",v.style.left="5px",v.style.padding=".5em",v.style.borderRadius="5px",v.style.alignItems="center"}function f(v,I){v.setAttribute("width","24"),v.setAttribute("id",I),v.setAttribute("height","24"),v.setAttribute("viewBox","0 0 24 24"),v.setAttribute("fill","none"),v.style.marginLeft="-6px"}function m(){const v=document.createElement("span");return v.style.cursor="pointer",v.style.marginLeft="16px",v.style.fontSize="24px",v.innerHTML=" &times;",v.onclick=()=>{Eg=!0,c()},v}function y(v,I){v.setAttribute("id",I),v.innerText="Learn more",v.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",v.setAttribute("target","__blank"),v.style.paddingLeft="5px",v.style.textDecoration="underline"}function _(){const v=Zk(s),I=n("text"),N=document.getElementById(I)||document.createElement("span"),x=n("learnmore"),A=document.getElementById(x)||document.createElement("a"),W=n("preprendIcon"),V=document.getElementById(W)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(v.created){const j=v.element;h(j),y(A,x);const Z=m();f(V,W),j.append(V,N,A,Z),document.body.appendChild(j)}l?(N.innerText="Preview backend disconnected.",V.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(V.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,N.innerText="Preview backend running in this workspace."),N.setAttribute("id",I)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",_):_()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function oh(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Tt())}function eS(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function C_(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function k_(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function tS(){const t=Tt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function nS(){return f_.NODE_ADMIN===!0}function S_(){try{return typeof indexedDB=="object"}catch{return!1}}function I_(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(s);o.onsuccess=()=>{o.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},o.onupgradeneeded=()=>{n=!1},o.onerror=()=>{var l;e(((l=o.error)==null?void 0:l.message)||"")}}catch(n){e(n)}})}function rS(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iS="FirebaseError";class kn extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=iS,Object.setPrototypeOf(this,kn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ei.prototype.create)}}class ei{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},o=`${this.service}/${e}`,l=this.errors[e],c=l?sS(l,s):"Error",h=`${this.serviceName}: ${c} (${o}).`;return new kn(o,h,s)}}function sS(t,e){return t.replace(oS,(n,s)=>{const o=e[s];return o!=null?String(o):`<${s}?>`})}const oS=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mo(t){return JSON.parse(t)}function at(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T_=function(t){let e={},n={},s={},o="";try{const l=t.split(".");e=mo(ll(l[0])||""),n=mo(ll(l[1])||""),o=l[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:o}},aS=function(t){const e=T_(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},lS=function(t){const e=T_(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sn(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function qi(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Cd(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function ul(t,e,n){const s={};for(const o in t)Object.prototype.hasOwnProperty.call(t,o)&&(s[o]=e.call(n,t[o],o,t));return s}function Cr(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const o of n){if(!s.includes(o))return!1;const l=t[o],c=e[o];if(Cg(l)&&Cg(c)){if(!Cr(l,c))return!1}else if(l!==c)return!1}for(const o of s)if(!n.includes(o))return!1;return!0}function Cg(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function is(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(o=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function io(t){const e={};return t.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[o,l]=s.split("=");e[decodeURIComponent(o)]=decodeURIComponent(l)}}),e}function so(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uS{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let _=0;_<16;_++)s[_]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let _=0;_<16;_++)s[_]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let _=16;_<80;_++){const v=s[_-3]^s[_-8]^s[_-14]^s[_-16];s[_]=(v<<1|v>>>31)&4294967295}let o=this.chain_[0],l=this.chain_[1],c=this.chain_[2],h=this.chain_[3],f=this.chain_[4],m,y;for(let _=0;_<80;_++){_<40?_<20?(m=h^l&(c^h),y=1518500249):(m=l^c^h,y=1859775393):_<60?(m=l&c|h&(l|c),y=2400959708):(m=l^c^h,y=3395469782);const v=(o<<5|o>>>27)+m+f+y+s[_]&4294967295;f=h,h=c,c=(l<<30|l>>>2)&4294967295,l=o,o=v}this.chain_[0]=this.chain_[0]+o&4294967295,this.chain_[1]=this.chain_[1]+l&4294967295,this.chain_[2]=this.chain_[2]+c&4294967295,this.chain_[3]=this.chain_[3]+h&4294967295,this.chain_[4]=this.chain_[4]+f&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let o=0;const l=this.buf_;let c=this.inbuf_;for(;o<n;){if(c===0)for(;o<=s;)this.compress_(e,o),o+=this.blockSize;if(typeof e=="string"){for(;o<n;)if(l[c]=e.charCodeAt(o),++c,++o,c===this.blockSize){this.compress_(l),c=0;break}}else for(;o<n;)if(l[c]=e[o],++c,++o,c===this.blockSize){this.compress_(l),c=0;break}}this.inbuf_=c,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let o=this.blockSize-1;o>=56;o--)this.buf_[o]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let o=0;o<5;o++)for(let l=24;l>=0;l-=8)e[s]=this.chain_[o]>>l&255,++s;return e}}function cS(t,e){const n=new dS(t,e);return n.subscribe.bind(n)}class dS{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let o;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");hS(e,["next","error","complete"])?o=e:o={next:e,error:n,complete:s},o.next===void 0&&(o.next=td),o.error===void 0&&(o.error=td),o.complete===void 0&&(o.complete=td);const l=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),l}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function hS(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function td(){}function Fl(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fS=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let o=t.charCodeAt(s);if(o>=55296&&o<=56319){const l=o-55296;s++,$(s<t.length,"Surrogate pair missing trail surrogate.");const c=t.charCodeAt(s)-56320;o=65536+(l<<10)+c}o<128?e[n++]=o:o<2048?(e[n++]=o>>6|192,e[n++]=o&63|128):o<65536?(e[n++]=o>>12|224,e[n++]=o>>6&63|128,e[n++]=o&63|128):(e[n++]=o>>18|240,e[n++]=o>>12&63|128,e[n++]=o>>6&63|128,e[n++]=o&63|128)}return e},jl=function(t){let e=0;for(let n=0;n<t.length;n++){const s=t.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pS=1e3,mS=2,gS=14400*1e3,yS=.5;function kg(t,e=pS,n=mS){const s=e*Math.pow(n,t),o=Math.round(yS*s*(Math.random()-.5)*2);return Math.min(gS,s+o)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lt(t){return t&&t._delegate?t._delegate:t}class ln{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _S{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new Ro;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:n});o&&s.resolve(o)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(o){if(s)return null;throw o}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(wS(e))try{this.getOrInitializeService({instanceIdentifier:Wr})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(n);try{const l=this.getOrInitializeService({instanceIdentifier:o});s.resolve(l)}catch{}}}}clearInstance(e=Wr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Wr){return this.instances.has(e)}getOptions(e=Wr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[l,c]of this.instancesDeferred.entries()){const h=this.normalizeInstanceIdentifier(l);s===h&&c.resolve(o)}return o}onInit(e,n){const s=this.normalizeInstanceIdentifier(n),o=this.onInitCallbacks.get(s)??new Set;o.add(e),this.onInitCallbacks.set(s,o);const l=this.instances.get(s);return l&&e(l,s),()=>{o.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const o of s)try{o(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:vS(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Wr){return this.component?this.component.multipleInstances?e:Wr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function vS(t){return t===Wr?void 0:t}function wS(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ES{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new _S(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Te;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Te||(Te={}));const CS={debug:Te.DEBUG,verbose:Te.VERBOSE,info:Te.INFO,warn:Te.WARN,error:Te.ERROR,silent:Te.SILENT},kS=Te.INFO,SS={[Te.DEBUG]:"log",[Te.VERBOSE]:"log",[Te.INFO]:"info",[Te.WARN]:"warn",[Te.ERROR]:"error"},IS=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),o=SS[e];if(o)console[o](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ul{constructor(e){this.name=e,this._logLevel=kS,this._logHandler=IS,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Te))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?CS[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Te.DEBUG,...e),this._logHandler(this,Te.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Te.VERBOSE,...e),this._logHandler(this,Te.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Te.INFO,...e),this._logHandler(this,Te.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Te.WARN,...e),this._logHandler(this,Te.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Te.ERROR,...e),this._logHandler(this,Te.ERROR,...e)}}const TS=(t,e)=>e.some(n=>t instanceof n);let Sg,Ig;function xS(){return Sg||(Sg=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function RS(){return Ig||(Ig=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const x_=new WeakMap,kd=new WeakMap,R_=new WeakMap,nd=new WeakMap,ah=new WeakMap;function bS(t){const e=new Promise((n,s)=>{const o=()=>{t.removeEventListener("success",l),t.removeEventListener("error",c)},l=()=>{n(vr(t.result)),o()},c=()=>{s(t.error),o()};t.addEventListener("success",l),t.addEventListener("error",c)});return e.then(n=>{n instanceof IDBCursor&&x_.set(n,t)}).catch(()=>{}),ah.set(e,t),e}function NS(t){if(kd.has(t))return;const e=new Promise((n,s)=>{const o=()=>{t.removeEventListener("complete",l),t.removeEventListener("error",c),t.removeEventListener("abort",c)},l=()=>{n(),o()},c=()=>{s(t.error||new DOMException("AbortError","AbortError")),o()};t.addEventListener("complete",l),t.addEventListener("error",c),t.addEventListener("abort",c)});kd.set(t,e)}let Sd={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return kd.get(t);if(e==="objectStoreNames")return t.objectStoreNames||R_.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return vr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function PS(t){Sd=t(Sd)}function AS(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(rd(this),e,...n);return R_.set(s,e.sort?e.sort():[e]),vr(s)}:RS().includes(t)?function(...e){return t.apply(rd(this),e),vr(x_.get(this))}:function(...e){return vr(t.apply(rd(this),e))}}function DS(t){return typeof t=="function"?AS(t):(t instanceof IDBTransaction&&NS(t),TS(t,xS())?new Proxy(t,Sd):t)}function vr(t){if(t instanceof IDBRequest)return bS(t);if(nd.has(t))return nd.get(t);const e=DS(t);return e!==t&&(nd.set(t,e),ah.set(e,t)),e}const rd=t=>ah.get(t);function b_(t,e,{blocked:n,upgrade:s,blocking:o,terminated:l}={}){const c=indexedDB.open(t,e),h=vr(c);return s&&c.addEventListener("upgradeneeded",f=>{s(vr(c.result),f.oldVersion,f.newVersion,vr(c.transaction),f)}),n&&c.addEventListener("blocked",f=>n(f.oldVersion,f.newVersion,f)),h.then(f=>{l&&f.addEventListener("close",()=>l()),o&&f.addEventListener("versionchange",m=>o(m.oldVersion,m.newVersion,m))}).catch(()=>{}),h}const OS=["get","getKey","getAll","getAllKeys","count"],LS=["put","add","delete","clear"],id=new Map;function Tg(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(id.get(e))return id.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,o=LS.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(o||OS.includes(n)))return;const l=async function(c,...h){const f=this.transaction(c,o?"readwrite":"readonly");let m=f.store;return s&&(m=m.index(h.shift())),(await Promise.all([m[n](...h),o&&f.done]))[0]};return id.set(e,l),l}PS(t=>({...t,get:(e,n,s)=>Tg(e,n)||t.get(e,n,s),has:(e,n)=>!!Tg(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MS{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(FS(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function FS(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Id="@firebase/app",xg="0.14.6";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wn=new Ul("@firebase/app"),jS="@firebase/app-compat",US="@firebase/analytics-compat",zS="@firebase/analytics",$S="@firebase/app-check-compat",WS="@firebase/app-check",BS="@firebase/auth",VS="@firebase/auth-compat",HS="@firebase/database",GS="@firebase/data-connect",qS="@firebase/database-compat",KS="@firebase/functions",YS="@firebase/functions-compat",QS="@firebase/installations",JS="@firebase/installations-compat",XS="@firebase/messaging",ZS="@firebase/messaging-compat",eI="@firebase/performance",tI="@firebase/performance-compat",nI="@firebase/remote-config",rI="@firebase/remote-config-compat",iI="@firebase/storage",sI="@firebase/storage-compat",oI="@firebase/firestore",aI="@firebase/ai",lI="@firebase/firestore-compat",uI="firebase",cI="12.6.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Td="[DEFAULT]",dI={[Id]:"fire-core",[jS]:"fire-core-compat",[zS]:"fire-analytics",[US]:"fire-analytics-compat",[WS]:"fire-app-check",[$S]:"fire-app-check-compat",[BS]:"fire-auth",[VS]:"fire-auth-compat",[HS]:"fire-rtdb",[GS]:"fire-data-connect",[qS]:"fire-rtdb-compat",[KS]:"fire-fn",[YS]:"fire-fn-compat",[QS]:"fire-iid",[JS]:"fire-iid-compat",[XS]:"fire-fcm",[ZS]:"fire-fcm-compat",[eI]:"fire-perf",[tI]:"fire-perf-compat",[nI]:"fire-rc",[rI]:"fire-rc-compat",[iI]:"fire-gcs",[sI]:"fire-gcs-compat",[oI]:"fire-fst",[lI]:"fire-fst-compat",[aI]:"fire-vertex","fire-js":"fire-js",[uI]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cl=new Map,hI=new Map,xd=new Map;function Rg(t,e){try{t.container.addComponent(e)}catch(n){Wn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Cn(t){const e=t.name;if(xd.has(e))return Wn.debug(`There were multiple attempts to register component ${e}.`),!1;xd.set(e,t);for(const n of cl.values())Rg(n,t);for(const n of hI.values())Rg(n,t);return!0}function ti(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Gt(t){return t==null?!1:t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fI={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},wr=new ei("app","Firebase",fI);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pI{constructor(e,n,s){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new ln("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw wr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ss=cI;function N_(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s={name:Td,automaticDataCollectionEnabled:!0,...e},o=s.name;if(typeof o!="string"||!o)throw wr.create("bad-app-name",{appName:String(o)});if(n||(n=__()),!n)throw wr.create("no-options");const l=cl.get(o);if(l){if(Cr(n,l.options)&&Cr(s,l.config))return l;throw wr.create("duplicate-app",{appName:o})}const c=new ES(o);for(const f of xd.values())c.addComponent(f);const h=new pI(n,s,c);return cl.set(o,h),h}function lh(t=Td){const e=cl.get(t);if(!e&&t===Td&&__())return N_();if(!e)throw wr.create("no-app",{appName:t});return e}function Kt(t,e,n){let s=dI[t]??t;n&&(s+=`-${n}`);const o=s.match(/\s|\//),l=e.match(/\s|\//);if(o||l){const c=[`Unable to register library "${s}" with version "${e}":`];o&&c.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&l&&c.push("and"),l&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Wn.warn(c.join(" "));return}Cn(new ln(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mI="firebase-heartbeat-database",gI=1,go="firebase-heartbeat-store";let sd=null;function P_(){return sd||(sd=b_(mI,gI,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(go)}catch(n){console.warn(n)}}}}).catch(t=>{throw wr.create("idb-open",{originalErrorMessage:t.message})})),sd}async function yI(t){try{const n=(await P_()).transaction(go),s=await n.objectStore(go).get(A_(t));return await n.done,s}catch(e){if(e instanceof kn)Wn.warn(e.message);else{const n=wr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Wn.warn(n.message)}}}async function bg(t,e){try{const s=(await P_()).transaction(go,"readwrite");await s.objectStore(go).put(e,A_(t)),await s.done}catch(n){if(n instanceof kn)Wn.warn(n.message);else{const s=wr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Wn.warn(s.message)}}}function A_(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _I=1024,vI=30;class wI{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new CI(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,n;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),l=Ng();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===l||this._heartbeatsCache.heartbeats.some(c=>c.date===l))return;if(this._heartbeatsCache.heartbeats.push({date:l,agent:o}),this._heartbeatsCache.heartbeats.length>vI){const c=kI(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(c,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){Wn.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Ng(),{heartbeatsToSend:s,unsentEntries:o}=EI(this._heartbeatsCache.heartbeats),l=al(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),l}catch(n){return Wn.warn(n),""}}}function Ng(){return new Date().toISOString().substring(0,10)}function EI(t,e=_I){const n=[];let s=t.slice();for(const o of t){const l=n.find(c=>c.agent===o.agent);if(l){if(l.dates.push(o.date),Pg(n)>e){l.dates.pop();break}}else if(n.push({agent:o.agent,dates:[o.date]}),Pg(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class CI{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return S_()?I_().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await yI(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return bg(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return bg(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Pg(t){return al(JSON.stringify({version:2,heartbeats:t})).length}function kI(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let s=1;s<t.length;s++)t[s].date<n&&(n=t[s].date,e=s);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SI(t){Cn(new ln("platform-logger",e=>new MS(e),"PRIVATE")),Cn(new ln("heartbeat",e=>new wI(e),"PRIVATE")),Kt(Id,xg,t),Kt(Id,xg,"esm2020"),Kt("fire-js","")}SI("");var II="firebase",TI="12.6.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Kt(II,TI,"app");const D_="@firebase/installations",uh="0.6.19";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O_=1e4,L_=`w:${uh}`,M_="FIS_v2",xI="https://firebaseinstallations.googleapis.com/v1",RI=3600*1e3,bI="installations",NI="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PI={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Gr=new ei(bI,NI,PI);function F_(t){return t instanceof kn&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function j_({projectId:t}){return`${xI}/projects/${t}/installations`}function U_(t){return{token:t.token,requestStatus:2,expiresIn:DI(t.expiresIn),creationTime:Date.now()}}async function z_(t,e){const s=(await e.json()).error;return Gr.create("request-failed",{requestName:t,serverCode:s.code,serverMessage:s.message,serverStatus:s.status})}function $_({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function AI(t,{refreshToken:e}){const n=$_(t);return n.append("Authorization",OI(e)),n}async function W_(t){const e=await t();return e.status>=500&&e.status<600?t():e}function DI(t){return Number(t.replace("s","000"))}function OI(t){return`${M_} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function LI({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const s=j_(t),o=$_(t),l=e.getImmediate({optional:!0});if(l){const m=await l.getHeartbeatsHeader();m&&o.append("x-firebase-client",m)}const c={fid:n,authVersion:M_,appId:t.appId,sdkVersion:L_},h={method:"POST",headers:o,body:JSON.stringify(c)},f=await W_(()=>fetch(s,h));if(f.ok){const m=await f.json();return{fid:m.fid||n,registrationStatus:2,refreshToken:m.refreshToken,authToken:U_(m.authToken)}}else throw await z_("Create Installation",f)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function B_(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MI(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FI=/^[cdef][\w-]{21}$/,Rd="";function jI(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=UI(t);return FI.test(n)?n:Rd}catch{return Rd}}function UI(t){return MI(t).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zl(t){return`${t.appName}!${t.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V_=new Map;function H_(t,e){const n=zl(t);G_(n,e),zI(n,e)}function G_(t,e){const n=V_.get(t);if(n)for(const s of n)s(e)}function zI(t,e){const n=$I();n&&n.postMessage({key:t,fid:e}),WI()}let Vr=null;function $I(){return!Vr&&"BroadcastChannel"in self&&(Vr=new BroadcastChannel("[Firebase] FID Change"),Vr.onmessage=t=>{G_(t.data.key,t.data.fid)}),Vr}function WI(){V_.size===0&&Vr&&(Vr.close(),Vr=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BI="firebase-installations-database",VI=1,qr="firebase-installations-store";let od=null;function ch(){return od||(od=b_(BI,VI,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(qr)}}})),od}async function dl(t,e){const n=zl(t),o=(await ch()).transaction(qr,"readwrite"),l=o.objectStore(qr),c=await l.get(n);return await l.put(e,n),await o.done,(!c||c.fid!==e.fid)&&H_(t,e.fid),e}async function q_(t){const e=zl(t),s=(await ch()).transaction(qr,"readwrite");await s.objectStore(qr).delete(e),await s.done}async function $l(t,e){const n=zl(t),o=(await ch()).transaction(qr,"readwrite"),l=o.objectStore(qr),c=await l.get(n),h=e(c);return h===void 0?await l.delete(n):await l.put(h,n),await o.done,h&&(!c||c.fid!==h.fid)&&H_(t,h.fid),h}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dh(t){let e;const n=await $l(t.appConfig,s=>{const o=HI(s),l=GI(t,o);return e=l.registrationPromise,l.installationEntry});return n.fid===Rd?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function HI(t){const e=t||{fid:jI(),registrationStatus:0};return K_(e)}function GI(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const o=Promise.reject(Gr.create("app-offline"));return{installationEntry:e,registrationPromise:o}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},s=qI(t,n);return{installationEntry:n,registrationPromise:s}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:KI(t)}:{installationEntry:e}}async function qI(t,e){try{const n=await LI(t,e);return dl(t.appConfig,n)}catch(n){throw F_(n)&&n.customData.serverCode===409?await q_(t.appConfig):await dl(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function KI(t){let e=await Ag(t.appConfig);for(;e.registrationStatus===1;)await B_(100),e=await Ag(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:s}=await dh(t);return s||n}return e}function Ag(t){return $l(t,e=>{if(!e)throw Gr.create("installation-not-found");return K_(e)})}function K_(t){return YI(t)?{fid:t.fid,registrationStatus:0}:t}function YI(t){return t.registrationStatus===1&&t.registrationTime+O_<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function QI({appConfig:t,heartbeatServiceProvider:e},n){const s=JI(t,n),o=AI(t,n),l=e.getImmediate({optional:!0});if(l){const m=await l.getHeartbeatsHeader();m&&o.append("x-firebase-client",m)}const c={installation:{sdkVersion:L_,appId:t.appId}},h={method:"POST",headers:o,body:JSON.stringify(c)},f=await W_(()=>fetch(s,h));if(f.ok){const m=await f.json();return U_(m)}else throw await z_("Generate Auth Token",f)}function JI(t,{fid:e}){return`${j_(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hh(t,e=!1){let n;const s=await $l(t.appConfig,l=>{if(!Y_(l))throw Gr.create("not-registered");const c=l.authToken;if(!e&&e1(c))return l;if(c.requestStatus===1)return n=XI(t,e),l;{if(!navigator.onLine)throw Gr.create("app-offline");const h=n1(l);return n=ZI(t,h),h}});return n?await n:s.authToken}async function XI(t,e){let n=await Dg(t.appConfig);for(;n.authToken.requestStatus===1;)await B_(100),n=await Dg(t.appConfig);const s=n.authToken;return s.requestStatus===0?hh(t,e):s}function Dg(t){return $l(t,e=>{if(!Y_(e))throw Gr.create("not-registered");const n=e.authToken;return r1(n)?{...e,authToken:{requestStatus:0}}:e})}async function ZI(t,e){try{const n=await QI(t,e),s={...e,authToken:n};return await dl(t.appConfig,s),n}catch(n){if(F_(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await q_(t.appConfig);else{const s={...e,authToken:{requestStatus:0}};await dl(t.appConfig,s)}throw n}}function Y_(t){return t!==void 0&&t.registrationStatus===2}function e1(t){return t.requestStatus===2&&!t1(t)}function t1(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+RI}function n1(t){const e={requestStatus:1,requestTime:Date.now()};return{...t,authToken:e}}function r1(t){return t.requestStatus===1&&t.requestTime+O_<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function i1(t){const e=t,{installationEntry:n,registrationPromise:s}=await dh(e);return s?s.catch(console.error):hh(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function s1(t,e=!1){const n=t;return await o1(n),(await hh(n,e)).token}async function o1(t){const{registrationPromise:e}=await dh(t);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function a1(t){if(!t||!t.options)throw ad("App Configuration");if(!t.name)throw ad("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw ad(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function ad(t){return Gr.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q_="installations",l1="installations-internal",u1=t=>{const e=t.getProvider("app").getImmediate(),n=a1(e),s=ti(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:s,_delete:()=>Promise.resolve()}},c1=t=>{const e=t.getProvider("app").getImmediate(),n=ti(e,Q_).getImmediate();return{getId:()=>i1(n),getToken:o=>s1(n,o)}};function d1(){Cn(new ln(Q_,u1,"PUBLIC")),Cn(new ln(l1,c1,"PRIVATE"))}d1();Kt(D_,uh);Kt(D_,uh,"esm2020");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hl="analytics",h1="firebase_id",f1="origin",p1=60*1e3,m1="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",fh="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const St=new Ul("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g1={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Ut=new ei("analytics","Analytics",g1);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function y1(t){if(!t.startsWith(fh)){const e=Ut.create("invalid-gtag-resource",{gtagURL:t});return St.warn(e.message),""}return t}function J_(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function _1(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function v1(t,e){const n=_1("firebase-js-sdk-policy",{createScriptURL:y1}),s=document.createElement("script"),o=`${fh}?l=${t}&id=${e}`;s.src=n?n==null?void 0:n.createScriptURL(o):o,s.async=!0,document.head.appendChild(s)}function w1(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function E1(t,e,n,s,o,l){const c=s[o];try{if(c)await e[c];else{const f=(await J_(n)).find(m=>m.measurementId===o);f&&await e[f.appId]}}catch(h){St.error(h)}t("config",o,l)}async function C1(t,e,n,s,o){try{let l=[];if(o&&o.send_to){let c=o.send_to;Array.isArray(c)||(c=[c]);const h=await J_(n);for(const f of c){const m=h.find(_=>_.measurementId===f),y=m&&e[m.appId];if(y)l.push(y);else{l=[];break}}}l.length===0&&(l=Object.values(e)),await Promise.all(l),t("event",s,o||{})}catch(l){St.error(l)}}function k1(t,e,n,s){async function o(l,...c){try{if(l==="event"){const[h,f]=c;await C1(t,e,n,h,f)}else if(l==="config"){const[h,f]=c;await E1(t,e,n,s,h,f)}else if(l==="consent"){const[h,f]=c;t("consent",h,f)}else if(l==="get"){const[h,f,m]=c;t("get",h,f,m)}else if(l==="set"){const[h]=c;t("set",h)}else t(l,...c)}catch(h){St.error(h)}}return o}function S1(t,e,n,s,o){let l=function(...c){window[s].push(arguments)};return window[o]&&typeof window[o]=="function"&&(l=window[o]),window[o]=k1(l,t,e,n),{gtagCore:l,wrappedGtag:window[o]}}function I1(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(fh)&&n.src.includes(t))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T1=30,x1=1e3;class R1{constructor(e={},n=x1){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const X_=new R1;function b1(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function N1(t){var c;const{appId:e,apiKey:n}=t,s={method:"GET",headers:b1(n)},o=m1.replace("{app-id}",e),l=await fetch(o,s);if(l.status!==200&&l.status!==304){let h="";try{const f=await l.json();(c=f.error)!=null&&c.message&&(h=f.error.message)}catch{}throw Ut.create("config-fetch-failed",{httpStatus:l.status,responseMessage:h})}return l.json()}async function P1(t,e=X_,n){const{appId:s,apiKey:o,measurementId:l}=t.options;if(!s)throw Ut.create("no-app-id");if(!o){if(l)return{measurementId:l,appId:s};throw Ut.create("no-api-key")}const c=e.getThrottleMetadata(s)||{backoffCount:0,throttleEndTimeMillis:Date.now()},h=new O1;return setTimeout(async()=>{h.abort()},p1),Z_({appId:s,apiKey:o,measurementId:l},c,h,e)}async function Z_(t,{throttleEndTimeMillis:e,backoffCount:n},s,o=X_){var h;const{appId:l,measurementId:c}=t;try{await A1(s,e)}catch(f){if(c)return St.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${c} provided in the "measurementId" field in the local Firebase config. [${f==null?void 0:f.message}]`),{appId:l,measurementId:c};throw f}try{const f=await N1(t);return o.deleteThrottleMetadata(l),f}catch(f){const m=f;if(!D1(m)){if(o.deleteThrottleMetadata(l),c)return St.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${c} provided in the "measurementId" field in the local Firebase config. [${m==null?void 0:m.message}]`),{appId:l,measurementId:c};throw f}const y=Number((h=m==null?void 0:m.customData)==null?void 0:h.httpStatus)===503?kg(n,o.intervalMillis,T1):kg(n,o.intervalMillis),_={throttleEndTimeMillis:Date.now()+y,backoffCount:n+1};return o.setThrottleMetadata(l,_),St.debug(`Calling attemptFetch again in ${y} millis`),Z_(t,_,s,o)}}function A1(t,e){return new Promise((n,s)=>{const o=Math.max(e-Date.now(),0),l=setTimeout(n,o);t.addEventListener(()=>{clearTimeout(l),s(Ut.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function D1(t){if(!(t instanceof kn)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class O1{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function L1(t,e,n,s,o){if(o&&o.global){t("event",n,s);return}else{const l=await e,c={...s,send_to:l};t("event",n,c)}}async function M1(t,e,n,s){if(s&&s.global){const o={};for(const l of Object.keys(n))o[`user_properties.${l}`]=n[l];return t("set",o),Promise.resolve()}else{const o=await e;t("config",o,{update:!0,user_properties:n})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function F1(){if(S_())try{await I_()}catch(t){return St.warn(Ut.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return St.warn(Ut.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function j1(t,e,n,s,o,l,c){const h=P1(t);h.then(v=>{n[v.measurementId]=v.appId,t.options.measurementId&&v.measurementId!==t.options.measurementId&&St.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${v.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(v=>St.error(v)),e.push(h);const f=F1().then(v=>{if(v)return s.getId()}),[m,y]=await Promise.all([h,f]);I1(l)||v1(l,m.measurementId),o("js",new Date);const _=(c==null?void 0:c.config)??{};return _[f1]="firebase",_.update=!0,y!=null&&(_[h1]=y),o("config",m.measurementId,_),m.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U1{constructor(e){this.app=e}_delete(){return delete zi[this.app.options.appId],Promise.resolve()}}let zi={},Og=[];const Lg={};let ld="dataLayer",z1="gtag",Mg,ph,Fg=!1;function $1(){const t=[];if(C_()&&t.push("This is a browser extension environment."),rS()||t.push("Cookies are not available."),t.length>0){const e=t.map((s,o)=>`(${o+1}) ${s}`).join(" "),n=Ut.create("invalid-analytics-context",{errorInfo:e});St.warn(n.message)}}function W1(t,e,n){$1();const s=t.options.appId;if(!s)throw Ut.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)St.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Ut.create("no-api-key");if(zi[s]!=null)throw Ut.create("already-exists",{id:s});if(!Fg){w1(ld);const{wrappedGtag:l,gtagCore:c}=S1(zi,Og,Lg,ld,z1);ph=l,Mg=c,Fg=!0}return zi[s]=j1(t,Og,Lg,e,Mg,ld,n),new U1(t)}function B1(t=lh()){t=lt(t);const e=ti(t,hl);return e.isInitialized()?e.getImmediate():V1(t)}function V1(t,e={}){const n=ti(t,hl);if(n.isInitialized()){const o=n.getImmediate();if(Cr(e,n.getOptions()))return o;throw Ut.create("already-initialized")}return n.initialize({options:e})}function H1(t,e,n){t=lt(t),M1(ph,zi[t.app.options.appId],e,n).catch(s=>St.error(s))}function G1(t,e,n,s){t=lt(t),L1(ph,zi[t.app.options.appId],e,n,s).catch(o=>St.error(o))}const jg="@firebase/analytics",Ug="0.10.19";function q1(){Cn(new ln(hl,(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),o=e.getProvider("installations-internal").getImmediate();return W1(s,o,n)},"PUBLIC")),Cn(new ln("analytics-internal",t,"PRIVATE")),Kt(jg,Ug),Kt(jg,Ug,"esm2020");function t(e){try{const n=e.getProvider(hl).getImmediate();return{logEvent:(s,o,l)=>G1(n,s,o,l),setUserProperties:(s,o)=>H1(n,s,o)}}catch(n){throw Ut.create("interop-component-reg-failed",{reason:n})}}}q1();var zg={};const $g="@firebase/database",Wg="1.1.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ev="";function K1(t){ev=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y1{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),at(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:mo(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q1{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Sn(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tv=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new Y1(e)}}catch{}return new Q1},Hr=tv("localStorage"),J1=tv("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $i=new Ul("@firebase/database"),X1=(function(){let t=1;return function(){return t++}})(),nv=function(t){const e=fS(t),n=new uS;n.update(e);const s=n.digest();return ih.encodeByteArray(s)},bo=function(...t){let e="";for(let n=0;n<t.length;n++){const s=t[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=bo.apply(null,s):typeof s=="object"?e+=at(s):e+=s,e+=" "}return e};let ao=null,Bg=!0;const Z1=function(t,e){$(!0,"Can't turn on custom loggers persistently."),$i.logLevel=Te.VERBOSE,ao=$i.log.bind($i)},ft=function(...t){if(Bg===!0&&(Bg=!1,ao===null&&J1.get("logging_enabled")===!0&&Z1()),ao){const e=bo.apply(null,t);ao(e)}},No=function(t){return function(...e){ft(t,...e)}},bd=function(...t){const e="FIREBASE INTERNAL ERROR: "+bo(...t);$i.error(e)},Bn=function(...t){const e=`FIREBASE FATAL ERROR: ${bo(...t)}`;throw $i.error(e),new Error(e)},It=function(...t){const e="FIREBASE WARNING: "+bo(...t);$i.warn(e)},eT=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&It("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},mh=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},tT=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Ki="[MIN_NAME]",Kr="[MAX_NAME]",ni=function(t,e){if(t===e)return 0;if(t===Ki||e===Kr)return-1;if(e===Ki||t===Kr)return 1;{const n=Vg(t),s=Vg(e);return n!==null?s!==null?n-s===0?t.length-e.length:n-s:-1:s!==null?1:t<e?-1:1}},nT=function(t,e){return t===e?0:t<e?-1:1},Zs=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+at(e))},gh=function(t){if(typeof t!="object"||t===null)return at(t);const e=[];for(const s in t)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=at(e[s]),n+=":",n+=gh(t[e[s]]);return n+="}",n},rv=function(t,e){const n=t.length;if(n<=e)return[t];const s=[];for(let o=0;o<n;o+=e)o+e>n?s.push(t.substring(o,n)):s.push(t.substring(o,o+e));return s};function pt(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const iv=function(t){$(!mh(t),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let o,l,c,h,f;t===0?(l=0,c=0,o=1/t===-1/0?1:0):(o=t<0,t=Math.abs(t),t>=Math.pow(2,1-s)?(h=Math.min(Math.floor(Math.log(t)/Math.LN2),s),l=h+s,c=Math.round(t*Math.pow(2,n-h)-Math.pow(2,n))):(l=0,c=Math.round(t/Math.pow(2,1-s-n))));const m=[];for(f=n;f;f-=1)m.push(c%2?1:0),c=Math.floor(c/2);for(f=e;f;f-=1)m.push(l%2?1:0),l=Math.floor(l/2);m.push(o?1:0),m.reverse();const y=m.join("");let _="";for(f=0;f<64;f+=8){let v=parseInt(y.substr(f,8),2).toString(16);v.length===1&&(v="0"+v),_=_+v}return _.toLowerCase()},rT=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},iT=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function sT(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const s=new Error(t+" at "+e._path.toString()+": "+n);return s.code=t.toUpperCase(),s}const oT=new RegExp("^-?(0*)\\d{1,10}$"),aT=-2147483648,lT=2147483647,Vg=function(t){if(oT.test(t)){const e=Number(t);if(e>=aT&&e<=lT)return e}return null},os=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw It("Exception was thrown by user callback.",n),e},Math.floor(0))}},uT=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},lo=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cT{constructor(e,n){this.appCheckProvider=n,this.appName=e.name,Gt(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)==null||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){It(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dT{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(o=>this.auth_=o)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(ft("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',It(e)}}class tl{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}tl.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yh="5",sv="v",ov="s",av="r",lv="f",uv=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,cv="ls",dv="p",Nd="ac",hv="websocket",fv="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pv{constructor(e,n,s,o,l=!1,c="",h=!1,f=!1,m=null){this.secure=n,this.namespace=s,this.webSocketOnly=o,this.nodeAdmin=l,this.persistenceKey=c,this.includeNamespaceInQueryParams=h,this.isUsingEmulator=f,this.emulatorOptions=m,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Hr.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Hr.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function hT(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function mv(t,e,n){$(typeof e=="string","typeof type must == string"),$(typeof n=="object","typeof params must == object");let s;if(e===hv)s=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===fv)s=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);hT(t)&&(n.ns=t.namespace);const o=[];return pt(n,(l,c)=>{o.push(l+"="+c)}),s+o.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fT{constructor(){this.counters_={}}incrementCounter(e,n=1){Sn(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return Vk(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ud={},cd={};function _h(t){const e=t.toString();return ud[e]||(ud[e]=new fT),ud[e]}function pT(t,e){const n=t.toString();return cd[n]||(cd[n]=e()),cd[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mT{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let o=0;o<s.length;++o)s[o]&&os(()=>{this.onMessage_(s[o])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hg="start",gT="close",yT="pLPCommand",_T="pRTLPCB",gv="id",yv="pw",_v="ser",vT="cb",wT="seg",ET="ts",CT="d",kT="dframe",vv=1870,wv=30,ST=vv-wv,IT=25e3,TT=3e4;class ji{constructor(e,n,s,o,l,c,h){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=o,this.authToken=l,this.transportSessionId=c,this.lastSessionId=h,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=No(e),this.stats_=_h(n),this.urlFn=f=>(this.appCheckToken&&(f[Nd]=this.appCheckToken),mv(n,fv,f))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new mT(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(TT)),tT(()=>{if(this.isClosed_)return;this.scriptTagHolder=new vh((...l)=>{const[c,h,f,m,y]=l;if(this.incrementIncomingBytes_(l),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,c===Hg)this.id=h,this.password=f;else if(c===gT)h?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(h,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+c)},(...l)=>{const[c,h]=l;this.incrementIncomingBytes_(l),this.myPacketOrderer.handleResponse(c,h)},()=>{this.onClosed_()},this.urlFn);const s={};s[Hg]="t",s[_v]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[vT]=this.scriptTagHolder.uniqueCallbackIdentifier),s[sv]=yh,this.transportSessionId&&(s[ov]=this.transportSessionId),this.lastSessionId&&(s[cv]=this.lastSessionId),this.applicationId&&(s[dv]=this.applicationId),this.appCheckToken&&(s[Nd]=this.appCheckToken),typeof location<"u"&&location.hostname&&uv.test(location.hostname)&&(s[av]=lv);const o=this.urlFn(s);this.log_("Connecting via long-poll to "+o),this.scriptTagHolder.addTag(o,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){ji.forceAllow_=!0}static forceDisallow(){ji.forceDisallow_=!0}static isAvailable(){return ji.forceAllow_?!0:!ji.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!rT()&&!iT()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=at(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=m_(n),o=rv(s,ST);for(let l=0;l<o.length;l++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,o.length,o[l]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[kT]="t",s[gv]=e,s[yv]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=at(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class vh{constructor(e,n,s,o){this.onDisconnect=s,this.urlFn=o,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=X1(),window[yT+this.uniqueCallbackIdentifier]=e,window[_T+this.uniqueCallbackIdentifier]=n,this.myIFrame=vh.createIFrame_();let l="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(l='<script>document.domain="'+document.domain+'";<\/script>');const c="<html><body>"+l+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(c),this.myIFrame.doc.close()}catch(h){ft("frame writing exception"),h.stack&&ft(h.stack),ft(h)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||ft("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[gv]=this.myID,e[yv]=this.myPW,e[_v]=this.currentSerial;let n=this.urlFn(e),s="",o=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+wv+s.length<=vv;){const c=this.pendingSegs.shift();s=s+"&"+wT+o+"="+c.seg+"&"+ET+o+"="+c.ts+"&"+CT+o+"="+c.d,o++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},o=setTimeout(s,Math.floor(IT)),l=()=>{clearTimeout(o),s()};this.addTag(e,l)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const o=s.readyState;(!o||o==="loaded"||o==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{ft("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xT=16384,RT=45e3;let fl=null;typeof MozWebSocket<"u"?fl=MozWebSocket:typeof WebSocket<"u"&&(fl=WebSocket);class rn{constructor(e,n,s,o,l,c,h){this.connId=e,this.applicationId=s,this.appCheckToken=o,this.authToken=l,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=No(this.connId),this.stats_=_h(n),this.connURL=rn.connectionURL_(n,c,h,o,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,o,l){const c={};return c[sv]=yh,typeof location<"u"&&location.hostname&&uv.test(location.hostname)&&(c[av]=lv),n&&(c[ov]=n),s&&(c[cv]=s),o&&(c[Nd]=o),l&&(c[dv]=l),mv(e,hv,c)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Hr.set("previous_websocket_failure",!0);try{let s;nS(),this.mySock=new fl(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const o=s.message||s.data;o&&this.log_(o),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const o=s.message||s.data;o&&this.log_(o),this.onClosed_()}}start(){}static forceDisallow(){rn.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&fl!==null&&!rn.forceDisallow_}static previouslyFailed(){return Hr.isInMemoryStorage||Hr.get("previous_websocket_failure")===!0}markConnectionHealthy(){Hr.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=mo(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if($(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=at(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=rv(n,xT);s.length>1&&this.sendString_(String(s.length));for(let o=0;o<s.length;o++)this.sendString_(s[o])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(RT))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}rn.responsesRequiredToBeHealthy=2;rn.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yo{static get ALL_TRANSPORTS(){return[ji,rn]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const n=rn&&rn.isAvailable();let s=n&&!rn.previouslyFailed();if(e.webSocketOnly&&(n||It("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[rn];else{const o=this.transports_=[];for(const l of yo.ALL_TRANSPORTS)l&&l.isAvailable()&&o.push(l);yo.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}yo.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bT=6e4,NT=5e3,PT=10*1024,AT=100*1024,dd="t",Gg="d",DT="s",qg="r",OT="e",Kg="o",Yg="a",Qg="n",Jg="p",LT="h";class MT{constructor(e,n,s,o,l,c,h,f,m,y){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=o,this.authToken_=l,this.onMessage_=c,this.onReady_=h,this.onDisconnect_=f,this.onKill_=m,this.lastSessionId=y,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=No("c:"+this.id+":"),this.transportManager_=new yo(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const o=e.healthyTimeout||0;o>0&&(this.healthyTimeout_=lo(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>AT?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>PT?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(o)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(dd in e){const n=e[dd];n===Yg?this.upgradeIfSecondaryHealthy_():n===qg?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Kg&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Zs("t",e),s=Zs("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Jg,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Yg,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Qg,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Zs("t",e),s=Zs("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Zs(dd,e);if(Gg in e){const s=e[Gg];if(n===LT){const o={...s};this.repoInfo_.isUsingEmulator&&(o.h=this.repoInfo_.host),this.onHandshake_(o)}else if(n===Qg){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let o=0;o<this.pendingDataMessages.length;++o)this.onDataMessage_(this.pendingDataMessages[o]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===DT?this.onConnectionShutdown_(s):n===qg?this.onReset_(s):n===OT?bd("Server Error: "+s):n===Kg?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):bd("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,o=e.h;this.sessionId=e.s,this.repoInfo_.host=o,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),yh!==s&&It("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),lo(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(bT))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):lo(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(NT))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Jg,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Hr.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ev{put(e,n,s,o){}merge(e,n,s,o){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,s){}onDisconnectMerge(e,n,s){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cv{constructor(e){this.allowedEvents_=e,this.listeners_={},$(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let o=0;o<s.length;o++)s[o].callback.apply(s[o].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const o=this.getInitialEvent(e);o&&n.apply(s,o)}off(e,n,s){this.validateEventType_(e);const o=this.listeners_[e]||[];for(let l=0;l<o.length;l++)if(o[l].callback===n&&(!s||s===o[l].context)){o.splice(l,1);return}}validateEventType_(e){$(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pl extends Cv{static getInstance(){return new pl}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!oh()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return $(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xg=32,Zg=768;class xe{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let o=0;o<this.pieces_.length;o++)this.pieces_[o].length>0&&(this.pieces_[s]=this.pieces_[o],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function Se(){return new xe("")}function fe(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function kr(t){return t.pieces_.length-t.pieceNum_}function De(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new xe(t.pieces_,e)}function wh(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function FT(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function _o(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function kv(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new xe(e,0)}function $e(t,e){const n=[];for(let s=t.pieceNum_;s<t.pieces_.length;s++)n.push(t.pieces_[s]);if(e instanceof xe)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let o=0;o<s.length;o++)s[o].length>0&&n.push(s[o])}return new xe(n,0)}function me(t){return t.pieceNum_>=t.pieces_.length}function Dt(t,e){const n=fe(t),s=fe(e);if(n===null)return e;if(n===s)return Dt(De(t),De(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function jT(t,e){const n=_o(t,0),s=_o(e,0);for(let o=0;o<n.length&&o<s.length;o++){const l=ni(n[o],s[o]);if(l!==0)return l}return n.length===s.length?0:n.length<s.length?-1:1}function Eh(t,e){if(kr(t)!==kr(e))return!1;for(let n=t.pieceNum_,s=e.pieceNum_;n<=t.pieces_.length;n++,s++)if(t.pieces_[n]!==e.pieces_[s])return!1;return!0}function qt(t,e){let n=t.pieceNum_,s=e.pieceNum_;if(kr(t)>kr(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class UT{constructor(e,n){this.errorPrefix_=n,this.parts_=_o(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=jl(this.parts_[s]);Sv(this)}}function zT(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=jl(e),Sv(t)}function $T(t){const e=t.parts_.pop();t.byteLength_-=jl(e),t.parts_.length>0&&(t.byteLength_-=1)}function Sv(t){if(t.byteLength_>Zg)throw new Error(t.errorPrefix_+"has a key path longer than "+Zg+" bytes ("+t.byteLength_+").");if(t.parts_.length>Xg)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Xg+") or object contains a cycle "+Br(t))}function Br(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ch extends Cv{static getInstance(){return new Ch}constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}getInitialEvent(e){return $(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eo=1e3,WT=300*1e3,ey=30*1e3,BT=1.3,VT=3e4,HT="server_kill",ty=3;class Un extends Ev{constructor(e,n,s,o,l,c,h,f){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=o,this.onServerInfoUpdate_=l,this.authTokenProvider_=c,this.appCheckTokenProvider_=h,this.authOverride_=f,this.id=Un.nextPersistentConnectionId_++,this.log_=No("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=eo,this.maxReconnectDelay_=WT,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,f)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Ch.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&pl.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const o=++this.requestNumber_,l={r:o,a:e,b:n};this.log_(at(l)),$(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(l),s&&(this.requestCBHash_[o]=s)}get(e){this.initConnection_();const n=new Ro,o={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:c=>{const h=c.d;c.s==="ok"?n.resolve(h):n.reject(h)}};this.outstandingGets_.push(o),this.outstandingGetCount_++;const l=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(l),n.promise}listen(e,n,s,o){this.initConnection_();const l=e._queryIdentifier,c=e._path.toString();this.log_("Listen called for "+c+" "+l),this.listens.has(c)||this.listens.set(c,new Map),$(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),$(!this.listens.get(c).has(l),"listen() called twice for same path/queryId.");const h={onComplete:o,hashFn:n,query:e,tag:s};this.listens.get(c).set(l,h),this.connected_&&this.sendListen_(h)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),o=n._queryIdentifier;this.log_("Listen on "+s+" for "+o);const l={p:s},c="q";e.tag&&(l.q=n._queryObject,l.t=e.tag),l.h=e.hashFn(),this.sendRequest(c,l,h=>{const f=h.d,m=h.s;Un.warnOnListenWarnings_(f,n),(this.listens.get(s)&&this.listens.get(s).get(o))===e&&(this.log_("listen response",h),m!=="ok"&&this.removeListen_(s,o),e.onComplete&&e.onComplete(m,f))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Sn(e,"w")){const s=qi(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const o='".indexOn": "'+n._queryParams.getIndex().toString()+'"',l=n._path.toString();It(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${o} at ${l} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||lS(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=ey)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=aS(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,o=>{const l=o.s,c=o.d||"error";this.authToken_===e&&(l==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(l,c))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),o=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+o),$(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,o)&&this.connected_&&this.sendUnlisten_(s,o,e._queryObject,n)}sendUnlisten_(e,n,s,o){this.log_("Unlisten on "+e+" for "+n);const l={p:e},c="n";o&&(l.q=s,l.t=o),this.sendRequest(c,l)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,o){const l={p:n,d:s};this.log_("onDisconnect "+e,l),this.sendRequest(e,l,c=>{o&&setTimeout(()=>{o(c.s,c.d)},Math.floor(0))})}put(e,n,s,o){this.putInternal("p",e,n,s,o)}merge(e,n,s,o){this.putInternal("m",e,n,s,o)}putInternal(e,n,s,o,l){this.initConnection_();const c={p:n,d:s};l!==void 0&&(c.h=l),this.outstandingPuts_.push({action:e,request:c,onComplete:o}),this.outstandingPutCount_++;const h=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(h):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,o=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,l=>{this.log_(n+" response",l),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),o&&o(l.s,l.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const l=s.d;this.log_("reportStats","Error sending stats: "+l)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+at(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):bd("Unrecognized action received from server: "+at(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){$(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=eo,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=eo,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>VT&&(this.reconnectDelay_=eo),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*BT)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),o=this.id+":"+Un.nextConnectionId_++,l=this.lastSessionId;let c=!1,h=null;const f=function(){h?h.close():(c=!0,s())},m=function(_){$(h,"sendRequest call when we're not connected not allowed."),h.sendRequest(_)};this.realtime_={close:f,sendRequest:m};const y=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[_,v]=await Promise.all([this.authTokenProvider_.getToken(y),this.appCheckTokenProvider_.getToken(y)]);c?ft("getToken() completed but was canceled"):(ft("getToken() completed. Creating connection."),this.authToken_=_&&_.accessToken,this.appCheckToken_=v&&v.token,h=new MT(o,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,I=>{It(I+" ("+this.repoInfo_.toString()+")"),this.interrupt(HT)},l))}catch(_){this.log_("Failed to get token: "+_),c||(this.repoInfo_.nodeAdmin&&It(_),f())}}}interrupt(e){ft("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){ft("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Cd(this.interruptReasons_)&&(this.reconnectDelay_=eo,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(l=>gh(l)).join("$"):s="default";const o=this.removeListen_(e,s);o&&o.onComplete&&o.onComplete("permission_denied")}removeListen_(e,n){const s=new xe(e).toString();let o;if(this.listens.has(s)){const l=this.listens.get(s);o=l.get(n),l.delete(n),l.size===0&&this.listens.delete(s)}else o=void 0;return o}onAuthRevoked_(e,n){ft("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=ty&&(this.reconnectDelay_=ey,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){ft("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=ty&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+ev.replace(/\./g,"-")]=1,oh()?e["framework.cordova"]=1:k_()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=pl.getInstance().currentlyOnline();return Cd(this.interruptReasons_)&&e}}Un.nextPersistentConnectionId_=0;Un.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pe{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new pe(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wl{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new pe(Ki,e),o=new pe(Ki,n);return this.compare(s,o)!==0}minPost(){return pe.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let qa;class Iv extends Wl{static get __EMPTY_NODE(){return qa}static set __EMPTY_NODE(e){qa=e}compare(e,n){return ni(e.name,n.name)}isDefinedOn(e){throw ns("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return pe.MIN}maxPost(){return new pe(Kr,qa)}makePost(e,n){return $(typeof e=="string","KeyIndex indexValue must always be a string."),new pe(e,qa)}toString(){return".key"}}const Wi=new Iv;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ka{constructor(e,n,s,o,l=null){this.isReverse_=o,this.resultGenerator_=l,this.nodeStack_=[];let c=1;for(;!e.isEmpty();)if(e=e,c=n?s(e.key,n):1,o&&(c*=-1),c<0)this.isReverse_?e=e.left:e=e.right;else if(c===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class st{constructor(e,n,s,o,l){this.key=e,this.value=n,this.color=s??st.RED,this.left=o??Ot.EMPTY_NODE,this.right=l??Ot.EMPTY_NODE}copy(e,n,s,o,l){return new st(e??this.key,n??this.value,s??this.color,o??this.left,l??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let o=this;const l=s(e,o.key);return l<0?o=o.copy(null,null,null,o.left.insert(e,n,s),null):l===0?o=o.copy(null,n,null,null,null):o=o.copy(null,null,null,null,o.right.insert(e,n,s)),o.fixUp_()}removeMin_(){if(this.left.isEmpty())return Ot.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,o;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return Ot.EMPTY_NODE;o=s.right.min_(),s=s.copy(o.key,o.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,st.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,st.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}st.RED=!0;st.BLACK=!1;class GT{copy(e,n,s,o,l){return this}insert(e,n,s){return new st(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Ot{constructor(e,n=Ot.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Ot(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,st.BLACK,null,null))}remove(e){return new Ot(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,st.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,o=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return o?o.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(o=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Ka(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Ka(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Ka(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Ka(this.root_,null,this.comparator_,!0,e)}}Ot.EMPTY_NODE=new GT;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qT(t,e){return ni(t.name,e.name)}function kh(t,e){return ni(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Pd;function KT(t){Pd=t}const Tv=function(t){return typeof t=="number"?"number:"+iv(t):"string:"+t},xv=function(t){if(t.isLeafNode()){const e=t.val();$(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Sn(e,".sv"),"Priority must be a string or number.")}else $(t===Pd||t.isEmpty(),"priority of unexpected type.");$(t===Pd||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ny;class it{static set __childrenNodeConstructor(e){ny=e}static get __childrenNodeConstructor(){return ny}constructor(e,n=it.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,$(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),xv(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new it(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:it.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return me(e)?this:fe(e)===".priority"?this.priorityNode_:it.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:it.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=fe(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:($(s!==".priority"||kr(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,it.__childrenNodeConstructor.EMPTY_NODE.updateChild(De(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Tv(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=iv(this.value_):e+=this.value_,this.lazyHash_=nv(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===it.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof it.__childrenNodeConstructor?-1:($(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,o=it.VALUE_TYPE_ORDER.indexOf(n),l=it.VALUE_TYPE_ORDER.indexOf(s);return $(o>=0,"Unknown leaf type: "+n),$(l>=0,"Unknown leaf type: "+s),o===l?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:l-o}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}it.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Rv,bv;function YT(t){Rv=t}function QT(t){bv=t}class JT extends Wl{compare(e,n){const s=e.node.getPriority(),o=n.node.getPriority(),l=s.compareTo(o);return l===0?ni(e.name,n.name):l}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return pe.MIN}maxPost(){return new pe(Kr,new it("[PRIORITY-POST]",bv))}makePost(e,n){const s=Rv(e);return new pe(n,new it("[PRIORITY-POST]",s))}toString(){return".priority"}}const We=new JT;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XT=Math.log(2);class ZT{constructor(e){const n=l=>parseInt(Math.log(l)/XT,10),s=l=>parseInt(Array(l+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const o=s(this.count);this.bits_=e+1&o}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const ml=function(t,e,n,s){t.sort(e);const o=function(f,m){const y=m-f;let _,v;if(y===0)return null;if(y===1)return _=t[f],v=n?n(_):_,new st(v,_.node,st.BLACK,null,null);{const I=parseInt(y/2,10)+f,N=o(f,I),x=o(I+1,m);return _=t[I],v=n?n(_):_,new st(v,_.node,st.BLACK,N,x)}},l=function(f){let m=null,y=null,_=t.length;const v=function(N,x){const A=_-N,W=_;_-=N;const V=o(A+1,W),j=t[A],Z=n?n(j):j;I(new st(Z,j.node,x,null,V))},I=function(N){m?(m.left=N,m=N):(y=N,m=N)};for(let N=0;N<f.count;++N){const x=f.nextBitIsOne(),A=Math.pow(2,f.count-(N+1));x?v(A,st.BLACK):(v(A,st.BLACK),v(A,st.RED))}return y},c=new ZT(t.length),h=l(c);return new Ot(s||e,h)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let hd;const Ai={};class Ln{static get Default(){return $(Ai&&We,"ChildrenNode.ts has not been loaded"),hd=hd||new Ln({".priority":Ai},{".priority":We}),hd}constructor(e,n){this.indexes_=e,this.indexSet_=n}get(e){const n=qi(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Ot?n:null}hasIndex(e){return Sn(this.indexSet_,e.toString())}addIndex(e,n){$(e!==Wi,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let o=!1;const l=n.getIterator(pe.Wrap);let c=l.getNext();for(;c;)o=o||e.isDefinedOn(c.node),s.push(c),c=l.getNext();let h;o?h=ml(s,e.getCompare()):h=Ai;const f=e.toString(),m={...this.indexSet_};m[f]=e;const y={...this.indexes_};return y[f]=h,new Ln(y,m)}addToIndexes(e,n){const s=ul(this.indexes_,(o,l)=>{const c=qi(this.indexSet_,l);if($(c,"Missing index implementation for "+l),o===Ai)if(c.isDefinedOn(e.node)){const h=[],f=n.getIterator(pe.Wrap);let m=f.getNext();for(;m;)m.name!==e.name&&h.push(m),m=f.getNext();return h.push(e),ml(h,c.getCompare())}else return Ai;else{const h=n.get(e.name);let f=o;return h&&(f=f.remove(new pe(e.name,h))),f.insert(e,e.node)}});return new Ln(s,this.indexSet_)}removeFromIndexes(e,n){const s=ul(this.indexes_,o=>{if(o===Ai)return o;{const l=n.get(e.name);return l?o.remove(new pe(e.name,l)):o}});return new Ln(s,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let to;class ae{static get EMPTY_NODE(){return to||(to=new ae(new Ot(kh),null,Ln.Default))}constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&xv(this.priorityNode_),this.children_.isEmpty()&&$(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||to}updatePriority(e){return this.children_.isEmpty()?this:new ae(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?to:n}}getChild(e){const n=fe(e);return n===null?this:this.getImmediateChild(n).getChild(De(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if($(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new pe(e,n);let o,l;n.isEmpty()?(o=this.children_.remove(e),l=this.indexMap_.removeFromIndexes(s,this.children_)):(o=this.children_.insert(e,n),l=this.indexMap_.addToIndexes(s,this.children_));const c=o.isEmpty()?to:this.priorityNode_;return new ae(o,c,l)}}updateChild(e,n){const s=fe(e);if(s===null)return n;{$(fe(e)!==".priority"||kr(e)===1,".priority must be the last token in a path");const o=this.getImmediateChild(s).updateChild(De(e),n);return this.updateImmediateChild(s,o)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,o=0,l=!0;if(this.forEachChild(We,(c,h)=>{n[c]=h.val(e),s++,l&&ae.INTEGER_REGEXP_.test(c)?o=Math.max(o,Number(c)):l=!1}),!e&&l&&o<2*s){const c=[];for(const h in n)c[h]=n[h];return c}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Tv(this.getPriority().val())+":"),this.forEachChild(We,(n,s)=>{const o=s.hash();o!==""&&(e+=":"+n+":"+o)}),this.lazyHash_=e===""?"":nv(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const o=this.resolveIndex_(s);if(o){const l=o.getPredecessorKey(new pe(e,n));return l?l.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new pe(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new pe(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(o=>n(o.name,o.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,o=>o);{const o=this.children_.getIteratorFrom(e.name,pe.Wrap);let l=o.peek();for(;l!=null&&n.compare(l,e)<0;)o.getNext(),l=o.peek();return o}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,o=>o);{const o=this.children_.getReverseIteratorFrom(e.name,pe.Wrap);let l=o.peek();for(;l!=null&&n.compare(l,e)>0;)o.getNext(),l=o.peek();return o}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Po?-1:0}withIndex(e){if(e===Wi||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new ae(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Wi||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(We),o=n.getIterator(We);let l=s.getNext(),c=o.getNext();for(;l&&c;){if(l.name!==c.name||!l.node.equals(c.node))return!1;l=s.getNext(),c=o.getNext()}return l===null&&c===null}else return!1;else return!1}}resolveIndex_(e){return e===Wi?null:this.indexMap_.get(e.toString())}}ae.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class ex extends ae{constructor(){super(new Ot(kh),ae.EMPTY_NODE,Ln.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return ae.EMPTY_NODE}isEmpty(){return!1}}const Po=new ex;Object.defineProperties(pe,{MIN:{value:new pe(Ki,ae.EMPTY_NODE)},MAX:{value:new pe(Kr,Po)}});Iv.__EMPTY_NODE=ae.EMPTY_NODE;it.__childrenNodeConstructor=ae;KT(Po);QT(Po);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tx=!0;function ot(t,e=null){if(t===null)return ae.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),$(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new it(n,ot(e))}if(!(t instanceof Array)&&tx){const n=[];let s=!1;if(pt(t,(c,h)=>{if(c.substring(0,1)!=="."){const f=ot(h);f.isEmpty()||(s=s||!f.getPriority().isEmpty(),n.push(new pe(c,f)))}}),n.length===0)return ae.EMPTY_NODE;const l=ml(n,qT,c=>c.name,kh);if(s){const c=ml(n,We.getCompare());return new ae(l,ot(e),new Ln({".priority":c},{".priority":We}))}else return new ae(l,ot(e),Ln.Default)}else{let n=ae.EMPTY_NODE;return pt(t,(s,o)=>{if(Sn(t,s)&&s.substring(0,1)!=="."){const l=ot(o);(l.isLeafNode()||!l.isEmpty())&&(n=n.updateImmediateChild(s,l))}}),n.updatePriority(ot(e))}}YT(ot);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nx extends Wl{constructor(e){super(),this.indexPath_=e,$(!me(e)&&fe(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),o=this.extractChild(n.node),l=s.compareTo(o);return l===0?ni(e.name,n.name):l}makePost(e,n){const s=ot(e),o=ae.EMPTY_NODE.updateChild(this.indexPath_,s);return new pe(n,o)}maxPost(){const e=ae.EMPTY_NODE.updateChild(this.indexPath_,Po);return new pe(Kr,e)}toString(){return _o(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rx extends Wl{compare(e,n){const s=e.node.compareTo(n.node);return s===0?ni(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return pe.MIN}maxPost(){return pe.MAX}makePost(e,n){const s=ot(e);return new pe(n,s)}toString(){return".value"}}const ix=new rx;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nv(t){return{type:"value",snapshotNode:t}}function Yi(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function vo(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function wo(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function sx(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sh{constructor(e){this.index_=e}updateChild(e,n,s,o,l,c){$(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const h=e.getImmediateChild(n);return h.getChild(o).equals(s.getChild(o))&&h.isEmpty()===s.isEmpty()||(c!=null&&(s.isEmpty()?e.hasChild(n)?c.trackChildChange(vo(n,h)):$(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):h.isEmpty()?c.trackChildChange(Yi(n,s)):c.trackChildChange(wo(n,s,h))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(n,s).withIndex(this.index_)}updateFullNode(e,n,s){return s!=null&&(e.isLeafNode()||e.forEachChild(We,(o,l)=>{n.hasChild(o)||s.trackChildChange(vo(o,l))}),n.isLeafNode()||n.forEachChild(We,(o,l)=>{if(e.hasChild(o)){const c=e.getImmediateChild(o);c.equals(l)||s.trackChildChange(wo(o,l,c))}else s.trackChildChange(Yi(o,l))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?ae.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eo{constructor(e){this.indexedFilter_=new Sh(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Eo.getStartPost_(e),this.endPost_=Eo.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&s}updateChild(e,n,s,o,l,c){return this.matches(new pe(n,s))||(s=ae.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,s,o,l,c)}updateFullNode(e,n,s){n.isLeafNode()&&(n=ae.EMPTY_NODE);let o=n.withIndex(this.index_);o=o.updatePriority(ae.EMPTY_NODE);const l=this;return n.forEachChild(We,(c,h)=>{l.matches(new pe(c,h))||(o=o.updateImmediateChild(c,ae.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,o,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ox{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=n=>{const s=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new Eo(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,s,o,l,c){return this.rangedFilter_.matches(new pe(n,s))||(s=ae.EMPTY_NODE),e.getImmediateChild(n).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,s,o,l,c):this.fullLimitUpdateChild_(e,n,s,l,c)}updateFullNode(e,n,s){let o;if(n.isLeafNode()||n.isEmpty())o=ae.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){o=ae.EMPTY_NODE.withIndex(this.index_);let l;this.reverse_?l=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):l=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let c=0;for(;l.hasNext()&&c<this.limit_;){const h=l.getNext();if(this.withinDirectionalStart(h))if(this.withinDirectionalEnd(h))o=o.updateImmediateChild(h.name,h.node),c++;else break;else continue}}else{o=n.withIndex(this.index_),o=o.updatePriority(ae.EMPTY_NODE);let l;this.reverse_?l=o.getReverseIterator(this.index_):l=o.getIterator(this.index_);let c=0;for(;l.hasNext();){const h=l.getNext();c<this.limit_&&this.withinDirectionalStart(h)&&this.withinDirectionalEnd(h)?c++:o=o.updateImmediateChild(h.name,ae.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,o,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,s,o,l){let c;if(this.reverse_){const _=this.index_.getCompare();c=(v,I)=>_(I,v)}else c=this.index_.getCompare();const h=e;$(h.numChildren()===this.limit_,"");const f=new pe(n,s),m=this.reverse_?h.getFirstChild(this.index_):h.getLastChild(this.index_),y=this.rangedFilter_.matches(f);if(h.hasChild(n)){const _=h.getImmediateChild(n);let v=o.getChildAfterChild(this.index_,m,this.reverse_);for(;v!=null&&(v.name===n||h.hasChild(v.name));)v=o.getChildAfterChild(this.index_,v,this.reverse_);const I=v==null?1:c(v,f);if(y&&!s.isEmpty()&&I>=0)return l!=null&&l.trackChildChange(wo(n,s,_)),h.updateImmediateChild(n,s);{l!=null&&l.trackChildChange(vo(n,_));const x=h.updateImmediateChild(n,ae.EMPTY_NODE);return v!=null&&this.rangedFilter_.matches(v)?(l!=null&&l.trackChildChange(Yi(v.name,v.node)),x.updateImmediateChild(v.name,v.node)):x}}else return s.isEmpty()?e:y&&c(m,f)>=0?(l!=null&&(l.trackChildChange(vo(m.name,m.node)),l.trackChildChange(Yi(n,s))),h.updateImmediateChild(n,s).updateImmediateChild(m.name,ae.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ih{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=We}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return $(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return $(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Ki}hasEnd(){return this.endSet_}getIndexEndValue(){return $(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return $(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Kr}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return $(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===We}copy(){const e=new Ih;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function ax(t){return t.loadsAllData()?new Sh(t.getIndex()):t.hasLimit()?new ox(t):new Eo(t)}function ry(t){const e={};if(t.isDefault())return e;let n;if(t.index_===We?n="$priority":t.index_===ix?n="$value":t.index_===Wi?n="$key":($(t.index_ instanceof nx,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=at(n),t.startSet_){const s=t.startAfterSet_?"startAfter":"startAt";e[s]=at(t.indexStartValue_),t.startNameSet_&&(e[s]+=","+at(t.indexStartName_))}if(t.endSet_){const s=t.endBeforeSet_?"endBefore":"endAt";e[s]=at(t.indexEndValue_),t.endNameSet_&&(e[s]+=","+at(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function iy(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==We&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gl extends Ev{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:($(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,n,s,o){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=o,this.log_=No("p:rest:"),this.listens_={}}listen(e,n,s,o){const l=e._path.toString();this.log_("Listen called for "+l+" "+e._queryIdentifier);const c=gl.getListenId_(e,s),h={};this.listens_[c]=h;const f=ry(e._queryParams);this.restRequest_(l+".json",f,(m,y)=>{let _=y;if(m===404&&(_=null,m=null),m===null&&this.onDataUpdate_(l,_,!1,s),qi(this.listens_,c)===h){let v;m?m===401?v="permission_denied":v="rest_error:"+m:v="ok",o(v,null)}})}unlisten(e,n){const s=gl.getListenId_(e,n);delete this.listens_[s]}get(e){const n=ry(e._queryParams),s=e._path.toString(),o=new Ro;return this.restRequest_(s+".json",n,(l,c)=>{let h=c;l===404&&(h=null,l=null),l===null?(this.onDataUpdate_(s,h,!1,null),o.resolve(h)):o.reject(new Error(h))}),o.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([o,l])=>{o&&o.accessToken&&(n.auth=o.accessToken),l&&l.token&&(n.ac=l.token);const c=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+is(n);this.log_("Sending REST request for "+c);const h=new XMLHttpRequest;h.onreadystatechange=()=>{if(s&&h.readyState===4){this.log_("REST Response for "+c+" received. status:",h.status,"response:",h.responseText);let f=null;if(h.status>=200&&h.status<300){try{f=mo(h.responseText)}catch{It("Failed to parse JSON response for "+c+": "+h.responseText)}s(null,f)}else h.status!==401&&h.status!==404&&It("Got unsuccessful REST response for "+c+" Status: "+h.status),s(h.status);s=null}},h.open("GET",c,!0),h.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lx{constructor(){this.rootNode_=ae.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yl(){return{value:null,children:new Map}}function Pv(t,e,n){if(me(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const s=fe(e);t.children.has(s)||t.children.set(s,yl());const o=t.children.get(s);e=De(e),Pv(o,e,n)}}function Ad(t,e,n){t.value!==null?n(e,t.value):ux(t,(s,o)=>{const l=new xe(e.toString()+"/"+s);Ad(o,l,n)})}function ux(t,e){t.children.forEach((n,s)=>{e(s,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cx{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n={...e};return this.last_&&pt(this.last_,(s,o)=>{n[s]=n[s]-o}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sy=10*1e3,dx=30*1e3,hx=300*1e3;class fx{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new cx(e);const s=sy+(dx-sy)*Math.random();lo(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;pt(e,(o,l)=>{l>0&&Sn(this.statsToReport_,o)&&(n[o]=l,s=!0)}),s&&this.server_.reportStats(n),lo(this.reportStats_.bind(this),Math.floor(Math.random()*2*hx))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var sn;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(sn||(sn={}));function Th(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function xh(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Rh(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _l{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=sn.ACK_USER_WRITE,this.source=Th()}operationForChild(e){if(me(this.path)){if(this.affectedTree.value!=null)return $(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new xe(e));return new _l(Se(),n,this.revert)}}else return $(fe(this.path)===e,"operationForChild called for unrelated child."),new _l(De(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Co{constructor(e,n){this.source=e,this.path=n,this.type=sn.LISTEN_COMPLETE}operationForChild(e){return me(this.path)?new Co(this.source,Se()):new Co(this.source,De(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yr{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=sn.OVERWRITE}operationForChild(e){return me(this.path)?new Yr(this.source,Se(),this.snap.getImmediateChild(e)):new Yr(this.source,De(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qi{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=sn.MERGE}operationForChild(e){if(me(this.path)){const n=this.children.subtree(new xe(e));return n.isEmpty()?null:n.value?new Yr(this.source,Se(),n.value):new Qi(this.source,Se(),n)}else return $(fe(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Qi(this.source,De(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qr{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(me(e))return this.isFullyInitialized()&&!this.filtered_;const n=fe(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class px{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function mx(t,e,n,s){const o=[],l=[];return e.forEach(c=>{c.type==="child_changed"&&t.index_.indexedValueChanged(c.oldSnap,c.snapshotNode)&&l.push(sx(c.childName,c.snapshotNode))}),no(t,o,"child_removed",e,s,n),no(t,o,"child_added",e,s,n),no(t,o,"child_moved",l,s,n),no(t,o,"child_changed",e,s,n),no(t,o,"value",e,s,n),o}function no(t,e,n,s,o,l){const c=s.filter(h=>h.type===n);c.sort((h,f)=>yx(t,h,f)),c.forEach(h=>{const f=gx(t,h,l);o.forEach(m=>{m.respondsTo(h.type)&&e.push(m.createEvent(f,t.query_))})})}function gx(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function yx(t,e,n){if(e.childName==null||n.childName==null)throw ns("Should only compare child_ events.");const s=new pe(e.childName,e.snapshotNode),o=new pe(n.childName,n.snapshotNode);return t.index_.compare(s,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bl(t,e){return{eventCache:t,serverCache:e}}function uo(t,e,n,s){return Bl(new Qr(e,n,s),t.serverCache)}function Av(t,e,n,s){return Bl(t.eventCache,new Qr(e,n,s))}function Dd(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Jr(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let fd;const _x=()=>(fd||(fd=new Ot(nT)),fd);class Ae{static fromObject(e){let n=new Ae(null);return pt(e,(s,o)=>{n=n.set(new xe(s),o)}),n}constructor(e,n=_x()){this.value=e,this.children=n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:Se(),value:this.value};if(me(e))return null;{const s=fe(e),o=this.children.get(s);if(o!==null){const l=o.findRootMostMatchingPathAndValue(De(e),n);return l!=null?{path:$e(new xe(s),l.path),value:l.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(me(e))return this;{const n=fe(e),s=this.children.get(n);return s!==null?s.subtree(De(e)):new Ae(null)}}set(e,n){if(me(e))return new Ae(n,this.children);{const s=fe(e),l=(this.children.get(s)||new Ae(null)).set(De(e),n),c=this.children.insert(s,l);return new Ae(this.value,c)}}remove(e){if(me(e))return this.children.isEmpty()?new Ae(null):new Ae(null,this.children);{const n=fe(e),s=this.children.get(n);if(s){const o=s.remove(De(e));let l;return o.isEmpty()?l=this.children.remove(n):l=this.children.insert(n,o),this.value===null&&l.isEmpty()?new Ae(null):new Ae(this.value,l)}else return this}}get(e){if(me(e))return this.value;{const n=fe(e),s=this.children.get(n);return s?s.get(De(e)):null}}setTree(e,n){if(me(e))return n;{const s=fe(e),l=(this.children.get(s)||new Ae(null)).setTree(De(e),n);let c;return l.isEmpty()?c=this.children.remove(s):c=this.children.insert(s,l),new Ae(this.value,c)}}fold(e){return this.fold_(Se(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((o,l)=>{s[o]=l.fold_($e(e,o),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,Se(),n)}findOnPath_(e,n,s){const o=this.value?s(n,this.value):!1;if(o)return o;if(me(e))return null;{const l=fe(e),c=this.children.get(l);return c?c.findOnPath_(De(e),$e(n,l),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,Se(),n)}foreachOnPath_(e,n,s){if(me(e))return this;{this.value&&s(n,this.value);const o=fe(e),l=this.children.get(o);return l?l.foreachOnPath_(De(e),$e(n,o),s):new Ae(null)}}foreach(e){this.foreach_(Se(),e)}foreach_(e,n){this.children.inorderTraversal((s,o)=>{o.foreach_($e(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class an{constructor(e){this.writeTree_=e}static empty(){return new an(new Ae(null))}}function co(t,e,n){if(me(e))return new an(new Ae(n));{const s=t.writeTree_.findRootMostValueAndPath(e);if(s!=null){const o=s.path;let l=s.value;const c=Dt(o,e);return l=l.updateChild(c,n),new an(t.writeTree_.set(o,l))}else{const o=new Ae(n),l=t.writeTree_.setTree(e,o);return new an(l)}}}function Od(t,e,n){let s=t;return pt(n,(o,l)=>{s=co(s,$e(e,o),l)}),s}function oy(t,e){if(me(e))return an.empty();{const n=t.writeTree_.setTree(e,new Ae(null));return new an(n)}}function Ld(t,e){return ri(t,e)!=null}function ri(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Dt(n.path,e)):null}function ay(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(We,(s,o)=>{e.push(new pe(s,o))}):t.writeTree_.children.inorderTraversal((s,o)=>{o.value!=null&&e.push(new pe(s,o.value))}),e}function Er(t,e){if(me(e))return t;{const n=ri(t,e);return n!=null?new an(new Ae(n)):new an(t.writeTree_.subtree(e))}}function Md(t){return t.writeTree_.isEmpty()}function Ji(t,e){return Dv(Se(),t.writeTree_,e)}function Dv(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let s=null;return e.children.inorderTraversal((o,l)=>{o===".priority"?($(l.value!==null,"Priority writes must always be leaf nodes"),s=l.value):n=Dv($e(t,o),l,n)}),!n.getChild(t).isEmpty()&&s!==null&&(n=n.updateChild($e(t,".priority"),s)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bh(t,e){return Fv(e,t)}function vx(t,e,n,s,o){$(s>t.lastWriteId,"Stacking an older write on top of newer ones"),o===void 0&&(o=!0),t.allWrites.push({path:e,snap:n,writeId:s,visible:o}),o&&(t.visibleWrites=co(t.visibleWrites,e,n)),t.lastWriteId=s}function wx(t,e,n,s){$(s>t.lastWriteId,"Stacking an older merge on top of newer ones"),t.allWrites.push({path:e,children:n,writeId:s,visible:!0}),t.visibleWrites=Od(t.visibleWrites,e,n),t.lastWriteId=s}function Ex(t,e){for(let n=0;n<t.allWrites.length;n++){const s=t.allWrites[n];if(s.writeId===e)return s}return null}function Cx(t,e){const n=t.allWrites.findIndex(h=>h.writeId===e);$(n>=0,"removeWrite called with nonexistent writeId.");const s=t.allWrites[n];t.allWrites.splice(n,1);let o=s.visible,l=!1,c=t.allWrites.length-1;for(;o&&c>=0;){const h=t.allWrites[c];h.visible&&(c>=n&&kx(h,s.path)?o=!1:qt(s.path,h.path)&&(l=!0)),c--}if(o){if(l)return Sx(t),!0;if(s.snap)t.visibleWrites=oy(t.visibleWrites,s.path);else{const h=s.children;pt(h,f=>{t.visibleWrites=oy(t.visibleWrites,$e(s.path,f))})}return!0}else return!1}function kx(t,e){if(t.snap)return qt(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&qt($e(t.path,n),e))return!0;return!1}function Sx(t){t.visibleWrites=Ov(t.allWrites,Ix,Se()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function Ix(t){return t.visible}function Ov(t,e,n){let s=an.empty();for(let o=0;o<t.length;++o){const l=t[o];if(e(l)){const c=l.path;let h;if(l.snap)qt(n,c)?(h=Dt(n,c),s=co(s,h,l.snap)):qt(c,n)&&(h=Dt(c,n),s=co(s,Se(),l.snap.getChild(h)));else if(l.children){if(qt(n,c))h=Dt(n,c),s=Od(s,h,l.children);else if(qt(c,n))if(h=Dt(c,n),me(h))s=Od(s,Se(),l.children);else{const f=qi(l.children,fe(h));if(f){const m=f.getChild(De(h));s=co(s,Se(),m)}}}else throw ns("WriteRecord should have .snap or .children")}}return s}function Lv(t,e,n,s,o){if(!s&&!o){const l=ri(t.visibleWrites,e);if(l!=null)return l;{const c=Er(t.visibleWrites,e);if(Md(c))return n;if(n==null&&!Ld(c,Se()))return null;{const h=n||ae.EMPTY_NODE;return Ji(c,h)}}}else{const l=Er(t.visibleWrites,e);if(!o&&Md(l))return n;if(!o&&n==null&&!Ld(l,Se()))return null;{const c=function(m){return(m.visible||o)&&(!s||!~s.indexOf(m.writeId))&&(qt(m.path,e)||qt(e,m.path))},h=Ov(t.allWrites,c,e),f=n||ae.EMPTY_NODE;return Ji(h,f)}}}function Tx(t,e,n){let s=ae.EMPTY_NODE;const o=ri(t.visibleWrites,e);if(o)return o.isLeafNode()||o.forEachChild(We,(l,c)=>{s=s.updateImmediateChild(l,c)}),s;if(n){const l=Er(t.visibleWrites,e);return n.forEachChild(We,(c,h)=>{const f=Ji(Er(l,new xe(c)),h);s=s.updateImmediateChild(c,f)}),ay(l).forEach(c=>{s=s.updateImmediateChild(c.name,c.node)}),s}else{const l=Er(t.visibleWrites,e);return ay(l).forEach(c=>{s=s.updateImmediateChild(c.name,c.node)}),s}}function xx(t,e,n,s,o){$(s||o,"Either existingEventSnap or existingServerSnap must exist");const l=$e(e,n);if(Ld(t.visibleWrites,l))return null;{const c=Er(t.visibleWrites,l);return Md(c)?o.getChild(n):Ji(c,o.getChild(n))}}function Rx(t,e,n,s){const o=$e(e,n),l=ri(t.visibleWrites,o);if(l!=null)return l;if(s.isCompleteForChild(n)){const c=Er(t.visibleWrites,o);return Ji(c,s.getNode().getImmediateChild(n))}else return null}function bx(t,e){return ri(t.visibleWrites,e)}function Nx(t,e,n,s,o,l,c){let h;const f=Er(t.visibleWrites,e),m=ri(f,Se());if(m!=null)h=m;else if(n!=null)h=Ji(f,n);else return[];if(h=h.withIndex(c),!h.isEmpty()&&!h.isLeafNode()){const y=[],_=c.getCompare(),v=l?h.getReverseIteratorFrom(s,c):h.getIteratorFrom(s,c);let I=v.getNext();for(;I&&y.length<o;)_(I,s)!==0&&y.push(I),I=v.getNext();return y}else return[]}function Px(){return{visibleWrites:an.empty(),allWrites:[],lastWriteId:-1}}function vl(t,e,n,s){return Lv(t.writeTree,t.treePath,e,n,s)}function Nh(t,e){return Tx(t.writeTree,t.treePath,e)}function ly(t,e,n,s){return xx(t.writeTree,t.treePath,e,n,s)}function wl(t,e){return bx(t.writeTree,$e(t.treePath,e))}function Ax(t,e,n,s,o,l){return Nx(t.writeTree,t.treePath,e,n,s,o,l)}function Ph(t,e,n){return Rx(t.writeTree,t.treePath,e,n)}function Mv(t,e){return Fv($e(t.treePath,e),t.writeTree)}function Fv(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dx{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;$(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),$(s!==".priority","Only non-priority child changes can be tracked.");const o=this.changeMap.get(s);if(o){const l=o.type;if(n==="child_added"&&l==="child_removed")this.changeMap.set(s,wo(s,e.snapshotNode,o.snapshotNode));else if(n==="child_removed"&&l==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&l==="child_changed")this.changeMap.set(s,vo(s,o.oldSnap));else if(n==="child_changed"&&l==="child_added")this.changeMap.set(s,Yi(s,e.snapshotNode));else if(n==="child_changed"&&l==="child_changed")this.changeMap.set(s,wo(s,e.snapshotNode,o.oldSnap));else throw ns("Illegal combination of changes: "+e+" occurred after "+o)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ox{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const jv=new Ox;class Ah{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new Qr(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Ph(this.writes_,e,s)}}getChildAfterChild(e,n,s){const o=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Jr(this.viewCache_),l=Ax(this.writes_,o,n,1,s,e);return l.length===0?null:l[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lx(t){return{filter:t}}function Mx(t,e){$(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),$(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function Fx(t,e,n,s,o){const l=new Dx;let c,h;if(n.type===sn.OVERWRITE){const m=n;m.source.fromUser?c=Fd(t,e,m.path,m.snap,s,o,l):($(m.source.fromServer,"Unknown source."),h=m.source.tagged||e.serverCache.isFiltered()&&!me(m.path),c=El(t,e,m.path,m.snap,s,o,h,l))}else if(n.type===sn.MERGE){const m=n;m.source.fromUser?c=Ux(t,e,m.path,m.children,s,o,l):($(m.source.fromServer,"Unknown source."),h=m.source.tagged||e.serverCache.isFiltered(),c=jd(t,e,m.path,m.children,s,o,h,l))}else if(n.type===sn.ACK_USER_WRITE){const m=n;m.revert?c=Wx(t,e,m.path,s,o,l):c=zx(t,e,m.path,m.affectedTree,s,o,l)}else if(n.type===sn.LISTEN_COMPLETE)c=$x(t,e,n.path,s,l);else throw ns("Unknown operation type: "+n.type);const f=l.getChanges();return jx(e,c,f),{viewCache:c,changes:f}}function jx(t,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const o=s.getNode().isLeafNode()||s.getNode().isEmpty(),l=Dd(t);(n.length>0||!t.eventCache.isFullyInitialized()||o&&!s.getNode().equals(l)||!s.getNode().getPriority().equals(l.getPriority()))&&n.push(Nv(Dd(e)))}}function Uv(t,e,n,s,o,l){const c=e.eventCache;if(wl(s,n)!=null)return e;{let h,f;if(me(n))if($(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const m=Jr(e),y=m instanceof ae?m:ae.EMPTY_NODE,_=Nh(s,y);h=t.filter.updateFullNode(e.eventCache.getNode(),_,l)}else{const m=vl(s,Jr(e));h=t.filter.updateFullNode(e.eventCache.getNode(),m,l)}else{const m=fe(n);if(m===".priority"){$(kr(n)===1,"Can't have a priority with additional path components");const y=c.getNode();f=e.serverCache.getNode();const _=ly(s,n,y,f);_!=null?h=t.filter.updatePriority(y,_):h=c.getNode()}else{const y=De(n);let _;if(c.isCompleteForChild(m)){f=e.serverCache.getNode();const v=ly(s,n,c.getNode(),f);v!=null?_=c.getNode().getImmediateChild(m).updateChild(y,v):_=c.getNode().getImmediateChild(m)}else _=Ph(s,m,e.serverCache);_!=null?h=t.filter.updateChild(c.getNode(),m,_,y,o,l):h=c.getNode()}}return uo(e,h,c.isFullyInitialized()||me(n),t.filter.filtersNodes())}}function El(t,e,n,s,o,l,c,h){const f=e.serverCache;let m;const y=c?t.filter:t.filter.getIndexedFilter();if(me(n))m=y.updateFullNode(f.getNode(),s,null);else if(y.filtersNodes()&&!f.isFiltered()){const I=f.getNode().updateChild(n,s);m=y.updateFullNode(f.getNode(),I,null)}else{const I=fe(n);if(!f.isCompleteForPath(n)&&kr(n)>1)return e;const N=De(n),A=f.getNode().getImmediateChild(I).updateChild(N,s);I===".priority"?m=y.updatePriority(f.getNode(),A):m=y.updateChild(f.getNode(),I,A,N,jv,null)}const _=Av(e,m,f.isFullyInitialized()||me(n),y.filtersNodes()),v=new Ah(o,_,l);return Uv(t,_,n,o,v,h)}function Fd(t,e,n,s,o,l,c){const h=e.eventCache;let f,m;const y=new Ah(o,e,l);if(me(n))m=t.filter.updateFullNode(e.eventCache.getNode(),s,c),f=uo(e,m,!0,t.filter.filtersNodes());else{const _=fe(n);if(_===".priority")m=t.filter.updatePriority(e.eventCache.getNode(),s),f=uo(e,m,h.isFullyInitialized(),h.isFiltered());else{const v=De(n),I=h.getNode().getImmediateChild(_);let N;if(me(v))N=s;else{const x=y.getCompleteChild(_);x!=null?wh(v)===".priority"&&x.getChild(kv(v)).isEmpty()?N=x:N=x.updateChild(v,s):N=ae.EMPTY_NODE}if(I.equals(N))f=e;else{const x=t.filter.updateChild(h.getNode(),_,N,v,y,c);f=uo(e,x,h.isFullyInitialized(),t.filter.filtersNodes())}}}return f}function uy(t,e){return t.eventCache.isCompleteForChild(e)}function Ux(t,e,n,s,o,l,c){let h=e;return s.foreach((f,m)=>{const y=$e(n,f);uy(e,fe(y))&&(h=Fd(t,h,y,m,o,l,c))}),s.foreach((f,m)=>{const y=$e(n,f);uy(e,fe(y))||(h=Fd(t,h,y,m,o,l,c))}),h}function cy(t,e,n){return n.foreach((s,o)=>{e=e.updateChild(s,o)}),e}function jd(t,e,n,s,o,l,c,h){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let f=e,m;me(n)?m=s:m=new Ae(null).setTree(n,s);const y=e.serverCache.getNode();return m.children.inorderTraversal((_,v)=>{if(y.hasChild(_)){const I=e.serverCache.getNode().getImmediateChild(_),N=cy(t,I,v);f=El(t,f,new xe(_),N,o,l,c,h)}}),m.children.inorderTraversal((_,v)=>{const I=!e.serverCache.isCompleteForChild(_)&&v.value===null;if(!y.hasChild(_)&&!I){const N=e.serverCache.getNode().getImmediateChild(_),x=cy(t,N,v);f=El(t,f,new xe(_),x,o,l,c,h)}}),f}function zx(t,e,n,s,o,l,c){if(wl(o,n)!=null)return e;const h=e.serverCache.isFiltered(),f=e.serverCache;if(s.value!=null){if(me(n)&&f.isFullyInitialized()||f.isCompleteForPath(n))return El(t,e,n,f.getNode().getChild(n),o,l,h,c);if(me(n)){let m=new Ae(null);return f.getNode().forEachChild(Wi,(y,_)=>{m=m.set(new xe(y),_)}),jd(t,e,n,m,o,l,h,c)}else return e}else{let m=new Ae(null);return s.foreach((y,_)=>{const v=$e(n,y);f.isCompleteForPath(v)&&(m=m.set(y,f.getNode().getChild(v)))}),jd(t,e,n,m,o,l,h,c)}}function $x(t,e,n,s,o){const l=e.serverCache,c=Av(e,l.getNode(),l.isFullyInitialized()||me(n),l.isFiltered());return Uv(t,c,n,s,jv,o)}function Wx(t,e,n,s,o,l){let c;if(wl(s,n)!=null)return e;{const h=new Ah(s,e,o),f=e.eventCache.getNode();let m;if(me(n)||fe(n)===".priority"){let y;if(e.serverCache.isFullyInitialized())y=vl(s,Jr(e));else{const _=e.serverCache.getNode();$(_ instanceof ae,"serverChildren would be complete if leaf node"),y=Nh(s,_)}y=y,m=t.filter.updateFullNode(f,y,l)}else{const y=fe(n);let _=Ph(s,y,e.serverCache);_==null&&e.serverCache.isCompleteForChild(y)&&(_=f.getImmediateChild(y)),_!=null?m=t.filter.updateChild(f,y,_,De(n),h,l):e.eventCache.getNode().hasChild(y)?m=t.filter.updateChild(f,y,ae.EMPTY_NODE,De(n),h,l):m=f,m.isEmpty()&&e.serverCache.isFullyInitialized()&&(c=vl(s,Jr(e)),c.isLeafNode()&&(m=t.filter.updateFullNode(m,c,l)))}return c=e.serverCache.isFullyInitialized()||wl(s,Se())!=null,uo(e,m,c,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bx{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,o=new Sh(s.getIndex()),l=ax(s);this.processor_=Lx(l);const c=n.serverCache,h=n.eventCache,f=o.updateFullNode(ae.EMPTY_NODE,c.getNode(),null),m=l.updateFullNode(ae.EMPTY_NODE,h.getNode(),null),y=new Qr(f,c.isFullyInitialized(),o.filtersNodes()),_=new Qr(m,h.isFullyInitialized(),l.filtersNodes());this.viewCache_=Bl(_,y),this.eventGenerator_=new px(this.query_)}get query(){return this.query_}}function Vx(t){return t.viewCache_.serverCache.getNode()}function Hx(t,e){const n=Jr(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!me(e)&&!n.getImmediateChild(fe(e)).isEmpty())?n.getChild(e):null}function dy(t){return t.eventRegistrations_.length===0}function Gx(t,e){t.eventRegistrations_.push(e)}function hy(t,e,n){const s=[];if(n){$(e==null,"A cancel should cancel all event registrations.");const o=t.query._path;t.eventRegistrations_.forEach(l=>{const c=l.createCancelEvent(n,o);c&&s.push(c)})}if(e){let o=[];for(let l=0;l<t.eventRegistrations_.length;++l){const c=t.eventRegistrations_[l];if(!c.matches(e))o.push(c);else if(e.hasAnyCallback()){o=o.concat(t.eventRegistrations_.slice(l+1));break}}t.eventRegistrations_=o}else t.eventRegistrations_=[];return s}function fy(t,e,n,s){e.type===sn.MERGE&&e.source.queryId!==null&&($(Jr(t.viewCache_),"We should always have a full cache before handling merges"),$(Dd(t.viewCache_),"Missing event cache, even though we have a server cache"));const o=t.viewCache_,l=Fx(t.processor_,o,e,n,s);return Mx(t.processor_,l.viewCache),$(l.viewCache.serverCache.isFullyInitialized()||!o.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=l.viewCache,zv(t,l.changes,l.viewCache.eventCache.getNode(),null)}function qx(t,e){const n=t.viewCache_.eventCache,s=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(We,(l,c)=>{s.push(Yi(l,c))}),n.isFullyInitialized()&&s.push(Nv(n.getNode())),zv(t,s,n.getNode(),e)}function zv(t,e,n,s){const o=s?[s]:t.eventRegistrations_;return mx(t.eventGenerator_,e,n,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Cl;class Kx{constructor(){this.views=new Map}}function Yx(t){$(!Cl,"__referenceConstructor has already been defined"),Cl=t}function Qx(){return $(Cl,"Reference.ts has not been loaded"),Cl}function Jx(t){return t.views.size===0}function Dh(t,e,n,s){const o=e.source.queryId;if(o!==null){const l=t.views.get(o);return $(l!=null,"SyncTree gave us an op for an invalid query."),fy(l,e,n,s)}else{let l=[];for(const c of t.views.values())l=l.concat(fy(c,e,n,s));return l}}function Xx(t,e,n,s,o){const l=e._queryIdentifier,c=t.views.get(l);if(!c){let h=vl(n,o?s:null),f=!1;h?f=!0:s instanceof ae?(h=Nh(n,s),f=!1):(h=ae.EMPTY_NODE,f=!1);const m=Bl(new Qr(h,f,!1),new Qr(s,o,!1));return new Bx(e,m)}return c}function Zx(t,e,n,s,o,l){const c=Xx(t,e,s,o,l);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,c),Gx(c,n),qx(c,n)}function eR(t,e,n,s){const o=e._queryIdentifier,l=[];let c=[];const h=Sr(t);if(o==="default")for(const[f,m]of t.views.entries())c=c.concat(hy(m,n,s)),dy(m)&&(t.views.delete(f),m.query._queryParams.loadsAllData()||l.push(m.query));else{const f=t.views.get(o);f&&(c=c.concat(hy(f,n,s)),dy(f)&&(t.views.delete(o),f.query._queryParams.loadsAllData()||l.push(f.query)))}return h&&!Sr(t)&&l.push(new(Qx())(e._repo,e._path)),{removed:l,events:c}}function $v(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function Bi(t,e){let n=null;for(const s of t.views.values())n=n||Hx(s,e);return n}function Wv(t,e){if(e._queryParams.loadsAllData())return Vl(t);{const s=e._queryIdentifier;return t.views.get(s)}}function Bv(t,e){return Wv(t,e)!=null}function Sr(t){return Vl(t)!=null}function Vl(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let kl;function tR(t){$(!kl,"__referenceConstructor has already been defined"),kl=t}function nR(){return $(kl,"Reference.ts has not been loaded"),kl}let rR=1;class py{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Ae(null),this.pendingWriteTree_=Px(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Vv(t,e,n,s,o){return vx(t.pendingWriteTree_,e,n,s,o),o?as(t,new Yr(Th(),e,n)):[]}function iR(t,e,n,s){wx(t.pendingWriteTree_,e,n,s);const o=Ae.fromObject(n);return as(t,new Qi(Th(),e,o))}function _r(t,e,n=!1){const s=Ex(t.pendingWriteTree_,e);if(Cx(t.pendingWriteTree_,e)){let l=new Ae(null);return s.snap!=null?l=l.set(Se(),!0):pt(s.children,c=>{l=l.set(new xe(c),!0)}),as(t,new _l(s.path,l,n))}else return[]}function Hl(t,e,n){return as(t,new Yr(xh(),e,n))}function sR(t,e,n){const s=Ae.fromObject(n);return as(t,new Qi(xh(),e,s))}function oR(t,e){return as(t,new Co(xh(),e))}function aR(t,e,n){const s=Lh(t,n);if(s){const o=Mh(s),l=o.path,c=o.queryId,h=Dt(l,e),f=new Co(Rh(c),h);return Fh(t,l,f)}else return[]}function Ud(t,e,n,s,o=!1){const l=e._path,c=t.syncPointTree_.get(l);let h=[];if(c&&(e._queryIdentifier==="default"||Bv(c,e))){const f=eR(c,e,n,s);Jx(c)&&(t.syncPointTree_=t.syncPointTree_.remove(l));const m=f.removed;if(h=f.events,!o){const y=m.findIndex(v=>v._queryParams.loadsAllData())!==-1,_=t.syncPointTree_.findOnPath(l,(v,I)=>Sr(I));if(y&&!_){const v=t.syncPointTree_.subtree(l);if(!v.isEmpty()){const I=cR(v);for(let N=0;N<I.length;++N){const x=I[N],A=x.query,W=qv(t,x);t.listenProvider_.startListening(ho(A),Sl(t,A),W.hashFn,W.onComplete)}}}!_&&m.length>0&&!s&&(y?t.listenProvider_.stopListening(ho(e),null):m.forEach(v=>{const I=t.queryToTagMap.get(Gl(v));t.listenProvider_.stopListening(ho(v),I)}))}dR(t,m)}return h}function lR(t,e,n,s){const o=Lh(t,s);if(o!=null){const l=Mh(o),c=l.path,h=l.queryId,f=Dt(c,e),m=new Yr(Rh(h),f,n);return Fh(t,c,m)}else return[]}function uR(t,e,n,s){const o=Lh(t,s);if(o){const l=Mh(o),c=l.path,h=l.queryId,f=Dt(c,e),m=Ae.fromObject(n),y=new Qi(Rh(h),f,m);return Fh(t,c,y)}else return[]}function my(t,e,n,s=!1){const o=e._path;let l=null,c=!1;t.syncPointTree_.foreachOnPath(o,(v,I)=>{const N=Dt(v,o);l=l||Bi(I,N),c=c||Sr(I)});let h=t.syncPointTree_.get(o);h?(c=c||Sr(h),l=l||Bi(h,Se())):(h=new Kx,t.syncPointTree_=t.syncPointTree_.set(o,h));let f;l!=null?f=!0:(f=!1,l=ae.EMPTY_NODE,t.syncPointTree_.subtree(o).foreachChild((I,N)=>{const x=Bi(N,Se());x&&(l=l.updateImmediateChild(I,x))}));const m=Bv(h,e);if(!m&&!e._queryParams.loadsAllData()){const v=Gl(e);$(!t.queryToTagMap.has(v),"View does not exist, but we have a tag");const I=hR();t.queryToTagMap.set(v,I),t.tagToQueryMap.set(I,v)}const y=bh(t.pendingWriteTree_,o);let _=Zx(h,e,n,y,l,f);if(!m&&!c&&!s){const v=Wv(h,e);_=_.concat(fR(t,e,v))}return _}function Oh(t,e,n){const o=t.pendingWriteTree_,l=t.syncPointTree_.findOnPath(e,(c,h)=>{const f=Dt(c,e),m=Bi(h,f);if(m)return m});return Lv(o,e,l,n,!0)}function as(t,e){return Hv(e,t.syncPointTree_,null,bh(t.pendingWriteTree_,Se()))}function Hv(t,e,n,s){if(me(t.path))return Gv(t,e,n,s);{const o=e.get(Se());n==null&&o!=null&&(n=Bi(o,Se()));let l=[];const c=fe(t.path),h=t.operationForChild(c),f=e.children.get(c);if(f&&h){const m=n?n.getImmediateChild(c):null,y=Mv(s,c);l=l.concat(Hv(h,f,m,y))}return o&&(l=l.concat(Dh(o,t,s,n))),l}}function Gv(t,e,n,s){const o=e.get(Se());n==null&&o!=null&&(n=Bi(o,Se()));let l=[];return e.children.inorderTraversal((c,h)=>{const f=n?n.getImmediateChild(c):null,m=Mv(s,c),y=t.operationForChild(c);y&&(l=l.concat(Gv(y,h,f,m)))}),o&&(l=l.concat(Dh(o,t,s,n))),l}function qv(t,e){const n=e.query,s=Sl(t,n);return{hashFn:()=>(Vx(e)||ae.EMPTY_NODE).hash(),onComplete:o=>{if(o==="ok")return s?aR(t,n._path,s):oR(t,n._path);{const l=sT(o,n);return Ud(t,n,null,l)}}}}function Sl(t,e){const n=Gl(e);return t.queryToTagMap.get(n)}function Gl(t){return t._path.toString()+"$"+t._queryIdentifier}function Lh(t,e){return t.tagToQueryMap.get(e)}function Mh(t){const e=t.indexOf("$");return $(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new xe(t.substr(0,e))}}function Fh(t,e,n){const s=t.syncPointTree_.get(e);$(s,"Missing sync point for query tag that we're tracking");const o=bh(t.pendingWriteTree_,e);return Dh(s,n,o,null)}function cR(t){return t.fold((e,n,s)=>{if(n&&Sr(n))return[Vl(n)];{let o=[];return n&&(o=$v(n)),pt(s,(l,c)=>{o=o.concat(c)}),o}})}function ho(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(nR())(t._repo,t._path):t}function dR(t,e){for(let n=0;n<e.length;++n){const s=e[n];if(!s._queryParams.loadsAllData()){const o=Gl(s),l=t.queryToTagMap.get(o);t.queryToTagMap.delete(o),t.tagToQueryMap.delete(l)}}}function hR(){return rR++}function fR(t,e,n){const s=e._path,o=Sl(t,e),l=qv(t,n),c=t.listenProvider_.startListening(ho(e),o,l.hashFn,l.onComplete),h=t.syncPointTree_.subtree(s);if(o)$(!Sr(h.value),"If we're adding a query, it shouldn't be shadowed");else{const f=h.fold((m,y,_)=>{if(!me(m)&&y&&Sr(y))return[Vl(y).query];{let v=[];return y&&(v=v.concat($v(y).map(I=>I.query))),pt(_,(I,N)=>{v=v.concat(N)}),v}});for(let m=0;m<f.length;++m){const y=f[m];t.listenProvider_.stopListening(ho(y),Sl(t,y))}}return c}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jh{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new jh(n)}node(){return this.node_}}class Uh{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=$e(this.path_,e);return new Uh(this.syncTree_,n)}node(){return Oh(this.syncTree_,this.path_)}}const pR=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},gy=function(t,e,n){if(!t||typeof t!="object")return t;if($(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return mR(t[".sv"],e,n);if(typeof t[".sv"]=="object")return gR(t[".sv"],e);$(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},mR=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:$(!1,"Unexpected server value: "+t)}},gR=function(t,e,n){t.hasOwnProperty("increment")||$(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const s=t.increment;typeof s!="number"&&$(!1,"Unexpected increment value: "+s);const o=e.node();if($(o!==null&&typeof o<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!o.isLeafNode())return s;const c=o.getValue();return typeof c!="number"?s:c+s},Kv=function(t,e,n,s){return zh(e,new Uh(n,t),s)},Yv=function(t,e,n){return zh(t,new jh(e),n)};function zh(t,e,n){const s=t.getPriority().val(),o=gy(s,e.getImmediateChild(".priority"),n);let l;if(t.isLeafNode()){const c=t,h=gy(c.getValue(),e,n);return h!==c.getValue()||o!==c.getPriority().val()?new it(h,ot(o)):t}else{const c=t;return l=c,o!==c.getPriority().val()&&(l=l.updatePriority(new it(o))),c.forEachChild(We,(h,f)=>{const m=zh(f,e.getImmediateChild(h),n);m!==f&&(l=l.updateImmediateChild(h,m))}),l}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $h{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function Wh(t,e){let n=e instanceof xe?e:new xe(e),s=t,o=fe(n);for(;o!==null;){const l=qi(s.node.children,o)||{children:{},childCount:0};s=new $h(o,s,l),n=De(n),o=fe(n)}return s}function ls(t){return t.node.value}function Qv(t,e){t.node.value=e,zd(t)}function Jv(t){return t.node.childCount>0}function yR(t){return ls(t)===void 0&&!Jv(t)}function ql(t,e){pt(t.node.children,(n,s)=>{e(new $h(n,t,s))})}function Xv(t,e,n,s){n&&e(t),ql(t,o=>{Xv(o,e,!0)})}function _R(t,e,n){let s=t.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function Ao(t){return new xe(t.parent===null?t.name:Ao(t.parent)+"/"+t.name)}function zd(t){t.parent!==null&&vR(t.parent,t.name,t)}function vR(t,e,n){const s=yR(n),o=Sn(t.node.children,e);s&&o?(delete t.node.children[e],t.node.childCount--,zd(t)):!s&&!o&&(t.node.children[e]=n.node,t.node.childCount++,zd(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wR=/[\[\].#$\/\u0000-\u001F\u007F]/,ER=/[\[\].#$\u0000-\u001F\u007F]/,pd=10*1024*1024,Bh=function(t){return typeof t=="string"&&t.length!==0&&!wR.test(t)},Zv=function(t){return typeof t=="string"&&t.length!==0&&!ER.test(t)},CR=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Zv(t)},kR=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!mh(t)||t&&typeof t=="object"&&Sn(t,".sv")},ew=function(t,e,n,s){s&&e===void 0||Kl(Fl(t,"value"),e,n)},Kl=function(t,e,n){const s=n instanceof xe?new UT(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Br(s));if(typeof e=="function")throw new Error(t+"contains a function "+Br(s)+" with contents = "+e.toString());if(mh(e))throw new Error(t+"contains "+e.toString()+" "+Br(s));if(typeof e=="string"&&e.length>pd/3&&jl(e)>pd)throw new Error(t+"contains a string greater than "+pd+" utf8 bytes "+Br(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let o=!1,l=!1;if(pt(e,(c,h)=>{if(c===".value")o=!0;else if(c!==".priority"&&c!==".sv"&&(l=!0,!Bh(c)))throw new Error(t+" contains an invalid key ("+c+") "+Br(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);zT(s,c),Kl(t,h,s),$T(s)}),o&&l)throw new Error(t+' contains ".value" child '+Br(s)+" in addition to actual children.")}},SR=function(t,e){let n,s;for(n=0;n<e.length;n++){s=e[n];const l=_o(s);for(let c=0;c<l.length;c++)if(!(l[c]===".priority"&&c===l.length-1)){if(!Bh(l[c]))throw new Error(t+"contains an invalid key ("+l[c]+") in path "+s.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(jT);let o=null;for(n=0;n<e.length;n++){if(s=e[n],o!==null&&qt(o,s))throw new Error(t+"contains a path "+o.toString()+" that is ancestor of another path "+s.toString());o=s}},IR=function(t,e,n,s){const o=Fl(t,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(o+" must be an object containing the children to replace.");const l=[];pt(e,(c,h)=>{const f=new xe(c);if(Kl(o,h,$e(n,f)),wh(f)===".priority"&&!kR(h))throw new Error(o+"contains an invalid value for '"+f.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");l.push(f)}),SR(o,l)},tw=function(t,e,n,s){if(!Zv(n))throw new Error(Fl(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},TR=function(t,e,n,s){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),tw(t,e,n)},Vh=function(t,e){if(fe(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},xR=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Bh(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!CR(n))throw new Error(Fl(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RR{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Yl(t,e){let n=null;for(let s=0;s<e.length;s++){const o=e[s],l=o.getPath();n!==null&&!Eh(l,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:l}),n.events.push(o)}n&&t.eventLists_.push(n)}function nw(t,e,n){Yl(t,n),rw(t,s=>Eh(s,e))}function un(t,e,n){Yl(t,n),rw(t,s=>qt(s,e)||qt(e,s))}function rw(t,e){t.recursionDepth_++;let n=!0;for(let s=0;s<t.eventLists_.length;s++){const o=t.eventLists_[s];if(o){const l=o.path;e(l)?(bR(t.eventLists_[s]),t.eventLists_[s]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function bR(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const s=n.getEventRunner();ao&&ft("event: "+n.toString()),os(s)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NR="repo_interrupt",PR=25;class AR{constructor(e,n,s,o){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=o,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new RR,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=yl(),this.transactionQueueTree_=new $h,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function DR(t,e,n){if(t.stats_=_h(t.repoInfo_),t.forceRestClient_||uT())t.server_=new gl(t.repoInfo_,(s,o,l,c)=>{yy(t,s,o,l,c)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>_y(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{at(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}t.persistentConnection_=new Un(t.repoInfo_,e,(s,o,l,c)=>{yy(t,s,o,l,c)},s=>{_y(t,s)},s=>{OR(t,s)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(s=>{t.server_.refreshAuthToken(s)}),t.appCheckProvider_.addTokenChangeListener(s=>{t.server_.refreshAppCheckToken(s.token)}),t.statsReporter_=pT(t.repoInfo_,()=>new fx(t.stats_,t.server_)),t.infoData_=new lx,t.infoSyncTree_=new py({startListening:(s,o,l,c)=>{let h=[];const f=t.infoData_.getNode(s._path);return f.isEmpty()||(h=Hl(t.infoSyncTree_,s._path,f),setTimeout(()=>{c("ok")},0)),h},stopListening:()=>{}}),Hh(t,"connected",!1),t.serverSyncTree_=new py({startListening:(s,o,l,c)=>(t.server_.listen(s,l,o,(h,f)=>{const m=c(h,f);un(t.eventQueue_,s._path,m)}),[]),stopListening:(s,o)=>{t.server_.unlisten(s,o)}})}function iw(t){const n=t.infoData_.getNode(new xe(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Ql(t){return pR({timestamp:iw(t)})}function yy(t,e,n,s,o){t.dataUpdateCount++;const l=new xe(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let c=[];if(o)if(s){const f=ul(n,m=>ot(m));c=uR(t.serverSyncTree_,l,f,o)}else{const f=ot(n);c=lR(t.serverSyncTree_,l,f,o)}else if(s){const f=ul(n,m=>ot(m));c=sR(t.serverSyncTree_,l,f)}else{const f=ot(n);c=Hl(t.serverSyncTree_,l,f)}let h=l;c.length>0&&(h=Xi(t,l)),un(t.eventQueue_,h,c)}function _y(t,e){Hh(t,"connected",e),e===!1&&FR(t)}function OR(t,e){pt(e,(n,s)=>{Hh(t,n,s)})}function Hh(t,e,n){const s=new xe("/.info/"+e),o=ot(n);t.infoData_.updateSnapshot(s,o);const l=Hl(t.infoSyncTree_,s,o);un(t.eventQueue_,s,l)}function Gh(t){return t.nextWriteId_++}function LR(t,e,n,s,o){Jl(t,"set",{path:e.toString(),value:n,priority:s});const l=Ql(t),c=ot(n,s),h=Oh(t.serverSyncTree_,e),f=Yv(c,h,l),m=Gh(t),y=Vv(t.serverSyncTree_,e,f,m,!0);Yl(t.eventQueue_,y),t.server_.put(e.toString(),c.val(!0),(v,I)=>{const N=v==="ok";N||It("set at "+e+" failed: "+v);const x=_r(t.serverSyncTree_,m,!N);un(t.eventQueue_,e,x),$d(t,o,v,I)});const _=Kh(t,e);Xi(t,_),un(t.eventQueue_,_,[])}function MR(t,e,n,s){Jl(t,"update",{path:e.toString(),value:n});let o=!0;const l=Ql(t),c={};if(pt(n,(h,f)=>{o=!1,c[h]=Kv($e(e,h),ot(f),t.serverSyncTree_,l)}),o)ft("update() called with empty data.  Don't do anything."),$d(t,s,"ok",void 0);else{const h=Gh(t),f=iR(t.serverSyncTree_,e,c,h);Yl(t.eventQueue_,f),t.server_.merge(e.toString(),n,(m,y)=>{const _=m==="ok";_||It("update at "+e+" failed: "+m);const v=_r(t.serverSyncTree_,h,!_),I=v.length>0?Xi(t,e):e;un(t.eventQueue_,I,v),$d(t,s,m,y)}),pt(n,m=>{const y=Kh(t,$e(e,m));Xi(t,y)}),un(t.eventQueue_,e,[])}}function FR(t){Jl(t,"onDisconnectEvents");const e=Ql(t),n=yl();Ad(t.onDisconnect_,Se(),(o,l)=>{const c=Kv(o,l,t.serverSyncTree_,e);Pv(n,o,c)});let s=[];Ad(n,Se(),(o,l)=>{s=s.concat(Hl(t.serverSyncTree_,o,l));const c=Kh(t,o);Xi(t,c)}),t.onDisconnect_=yl(),un(t.eventQueue_,Se(),s)}function jR(t,e,n){let s;fe(e._path)===".info"?s=my(t.infoSyncTree_,e,n):s=my(t.serverSyncTree_,e,n),nw(t.eventQueue_,e._path,s)}function UR(t,e,n){let s;fe(e._path)===".info"?s=Ud(t.infoSyncTree_,e,n):s=Ud(t.serverSyncTree_,e,n),nw(t.eventQueue_,e._path,s)}function zR(t){t.persistentConnection_&&t.persistentConnection_.interrupt(NR)}function Jl(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),ft(n,...e)}function $d(t,e,n,s){e&&os(()=>{if(n==="ok")e(null);else{const o=(n||"error").toUpperCase();let l=o;s&&(l+=": "+s);const c=new Error(l);c.code=o,e(c)}})}function sw(t,e,n){return Oh(t.serverSyncTree_,e,n)||ae.EMPTY_NODE}function qh(t,e=t.transactionQueueTree_){if(e||Xl(t,e),ls(e)){const n=aw(t,e);$(n.length>0,"Sending zero length transaction queue"),n.every(o=>o.status===0)&&$R(t,Ao(e),n)}else Jv(e)&&ql(e,n=>{qh(t,n)})}function $R(t,e,n){const s=n.map(m=>m.currentWriteId),o=sw(t,e,s);let l=o;const c=o.hash();for(let m=0;m<n.length;m++){const y=n[m];$(y.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),y.status=1,y.retryCount++;const _=Dt(e,y.path);l=l.updateChild(_,y.currentOutputSnapshotRaw)}const h=l.val(!0),f=e;t.server_.put(f.toString(),h,m=>{Jl(t,"transaction put response",{path:f.toString(),status:m});let y=[];if(m==="ok"){const _=[];for(let v=0;v<n.length;v++)n[v].status=2,y=y.concat(_r(t.serverSyncTree_,n[v].currentWriteId)),n[v].onComplete&&_.push(()=>n[v].onComplete(null,!0,n[v].currentOutputSnapshotResolved)),n[v].unwatcher();Xl(t,Wh(t.transactionQueueTree_,e)),qh(t,t.transactionQueueTree_),un(t.eventQueue_,e,y);for(let v=0;v<_.length;v++)os(_[v])}else{if(m==="datastale")for(let _=0;_<n.length;_++)n[_].status===3?n[_].status=4:n[_].status=0;else{It("transaction at "+f.toString()+" failed: "+m);for(let _=0;_<n.length;_++)n[_].status=4,n[_].abortReason=m}Xi(t,e)}},c)}function Xi(t,e){const n=ow(t,e),s=Ao(n),o=aw(t,n);return WR(t,o,s),s}function WR(t,e,n){if(e.length===0)return;const s=[];let o=[];const c=e.filter(h=>h.status===0).map(h=>h.currentWriteId);for(let h=0;h<e.length;h++){const f=e[h],m=Dt(n,f.path);let y=!1,_;if($(m!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),f.status===4)y=!0,_=f.abortReason,o=o.concat(_r(t.serverSyncTree_,f.currentWriteId,!0));else if(f.status===0)if(f.retryCount>=PR)y=!0,_="maxretry",o=o.concat(_r(t.serverSyncTree_,f.currentWriteId,!0));else{const v=sw(t,f.path,c);f.currentInputSnapshot=v;const I=e[h].update(v.val());if(I!==void 0){Kl("transaction failed: Data returned ",I,f.path);let N=ot(I);typeof I=="object"&&I!=null&&Sn(I,".priority")||(N=N.updatePriority(v.getPriority()));const A=f.currentWriteId,W=Ql(t),V=Yv(N,v,W);f.currentOutputSnapshotRaw=N,f.currentOutputSnapshotResolved=V,f.currentWriteId=Gh(t),c.splice(c.indexOf(A),1),o=o.concat(Vv(t.serverSyncTree_,f.path,V,f.currentWriteId,f.applyLocally)),o=o.concat(_r(t.serverSyncTree_,A,!0))}else y=!0,_="nodata",o=o.concat(_r(t.serverSyncTree_,f.currentWriteId,!0))}un(t.eventQueue_,n,o),o=[],y&&(e[h].status=2,(function(v){setTimeout(v,Math.floor(0))})(e[h].unwatcher),e[h].onComplete&&(_==="nodata"?s.push(()=>e[h].onComplete(null,!1,e[h].currentInputSnapshot)):s.push(()=>e[h].onComplete(new Error(_),!1,null))))}Xl(t,t.transactionQueueTree_);for(let h=0;h<s.length;h++)os(s[h]);qh(t,t.transactionQueueTree_)}function ow(t,e){let n,s=t.transactionQueueTree_;for(n=fe(e);n!==null&&ls(s)===void 0;)s=Wh(s,n),e=De(e),n=fe(e);return s}function aw(t,e){const n=[];return lw(t,e,n),n.sort((s,o)=>s.order-o.order),n}function lw(t,e,n){const s=ls(e);if(s)for(let o=0;o<s.length;o++)n.push(s[o]);ql(e,o=>{lw(t,o,n)})}function Xl(t,e){const n=ls(e);if(n){let s=0;for(let o=0;o<n.length;o++)n[o].status!==2&&(n[s]=n[o],s++);n.length=s,Qv(e,n.length>0?n:void 0)}ql(e,s=>{Xl(t,s)})}function Kh(t,e){const n=Ao(ow(t,e)),s=Wh(t.transactionQueueTree_,e);return _R(s,o=>{md(t,o)}),md(t,s),Xv(s,o=>{md(t,o)}),n}function md(t,e){const n=ls(e);if(n){const s=[];let o=[],l=-1;for(let c=0;c<n.length;c++)n[c].status===3||(n[c].status===1?($(l===c-1,"All SENT items should be at beginning of queue."),l=c,n[c].status=3,n[c].abortReason="set"):($(n[c].status===0,"Unexpected transaction status in abort"),n[c].unwatcher(),o=o.concat(_r(t.serverSyncTree_,n[c].currentWriteId,!0)),n[c].onComplete&&s.push(n[c].onComplete.bind(null,new Error("set"),!1,null))));l===-1?Qv(e,void 0):n.length=l+1,un(t.eventQueue_,Ao(e),o);for(let c=0;c<s.length;c++)os(s[c])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BR(t){let e="";const n=t.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let o=n[s];try{o=decodeURIComponent(o.replace(/\+/g," "))}catch{}e+="/"+o}return e}function VR(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):It(`Invalid query segment '${n}' in query '${t}'`)}return e}const vy=function(t,e){const n=HR(t),s=n.namespace;n.domain==="firebase.com"&&Bn(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&Bn("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||eT();const o=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new pv(n.host,n.secure,s,o,e,"",s!==n.subdomain),path:new xe(n.pathString)}},HR=function(t){let e="",n="",s="",o="",l="",c=!0,h="https",f=443;if(typeof t=="string"){let m=t.indexOf("//");m>=0&&(h=t.substring(0,m-1),t=t.substring(m+2));let y=t.indexOf("/");y===-1&&(y=t.length);let _=t.indexOf("?");_===-1&&(_=t.length),e=t.substring(0,Math.min(y,_)),y<_&&(o=BR(t.substring(y,_)));const v=VR(t.substring(Math.min(t.length,_)));m=e.indexOf(":"),m>=0?(c=h==="https"||h==="wss",f=parseInt(e.substring(m+1),10)):m=e.length;const I=e.slice(0,m);if(I.toLowerCase()==="localhost")n="localhost";else if(I.split(".").length<=2)n=I;else{const N=e.indexOf(".");s=e.substring(0,N).toLowerCase(),n=e.substring(N+1),l=s}"ns"in v&&(l=v.ns)}return{host:e,port:f,domain:n,subdomain:s,secure:c,scheme:h,pathString:o,namespace:l}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wy="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",GR=(function(){let t=0;const e=[];return function(n){const s=n===t;t=n;let o;const l=new Array(8);for(o=7;o>=0;o--)l[o]=wy.charAt(n%64),n=Math.floor(n/64);$(n===0,"Cannot push at time == 0");let c=l.join("");if(s){for(o=11;o>=0&&e[o]===63;o--)e[o]=0;e[o]++}else for(o=0;o<12;o++)e[o]=Math.floor(Math.random()*64);for(o=0;o<12;o++)c+=wy.charAt(e[o]);return $(c.length===20,"nextPushId: Length should be 20."),c}})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qR{constructor(e,n,s,o){this.eventType=e,this.eventRegistration=n,this.snapshot=s,this.prevName=o}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+at(this.snapshot.exportVal())}}class KR{constructor(e,n,s){this.eventRegistration=e,this.error=n,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YR{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return $(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yh{constructor(e,n,s,o){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=o}get key(){return me(this._path)?null:wh(this._path)}get ref(){return new Ir(this._repo,this._path)}get _queryIdentifier(){const e=iy(this._queryParams),n=gh(e);return n==="{}"?"default":n}get _queryObject(){return iy(this._queryParams)}isEqual(e){if(e=lt(e),!(e instanceof Yh))return!1;const n=this._repo===e._repo,s=Eh(this._path,e._path),o=this._queryIdentifier===e._queryIdentifier;return n&&s&&o}toJSON(){return this.toString()}toString(){return this._repo.toString()+FT(this._path)}}class Ir extends Yh{constructor(e,n){super(e,n,new Ih,!1)}get parent(){const e=kv(this._path);return e===null?null:new Ir(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Il{constructor(e,n,s){this._node=e,this.ref=n,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new xe(e),s=ko(this.ref,e);return new Il(this._node.getChild(n),s,We)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,o)=>e(new Il(o,ko(this.ref,s),We)))}hasChild(e){const n=new xe(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Ne(t,e){return t=lt(t),t._checkNotDeleted("ref"),e!==void 0?ko(t._root,e):t._root}function ko(t,e){return t=lt(t),fe(t._path)===null?TR("child","path",e):tw("child","path",e),new Ir(t._repo,$e(t._path,e))}function Di(t,e){t=lt(t),Vh("push",t._path),ew("push",e,t._path,!0);const n=iw(t._repo),s=GR(n),o=ko(t,s),l=ko(t,s);let c;return e!=null?c=uw(l,e).then(()=>l):c=Promise.resolve(l),o.then=c.then.bind(c),o.catch=c.then.bind(c,void 0),o}function Oi(t){return Vh("remove",t._path),uw(t,null)}function uw(t,e){t=lt(t),Vh("set",t._path),ew("set",e,t._path,!1);const n=new Ro;return LR(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function dr(t,e){IR("update",e,t._path);const n=new Ro;return MR(t._repo,t._path,e,n.wrapCallback(()=>{})),n.promise}class Qh{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const s=n._queryParams.getIndex();return new qR("value",this,new Il(e.snapshotNode,new Ir(n._repo,n._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new KR(this,e,n):null}matches(e){return e instanceof Qh?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function QR(t,e,n,s,o){const l=new YR(n,void 0),c=new Qh(l);return jR(t._repo,t,c),()=>UR(t._repo,t,c)}function Li(t,e,n,s){return QR(t,"value",e)}Yx(Ir);tR(Ir);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JR="FIREBASE_DATABASE_EMULATOR_HOST",Wd={};let XR=!1;function ZR(t,e,n,s){const o=e.lastIndexOf(":"),l=e.substring(0,o),c=rs(l);t.repoInfo_=new pv(e,c,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0,n),s&&(t.authTokenProvider_=s)}function eb(t,e,n,s,o){let l=s||t.options.databaseURL;l===void 0&&(t.options.projectId||Bn("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),ft("Using default host for project ",t.options.projectId),l=`${t.options.projectId}-default-rtdb.firebaseio.com`);let c=vy(l,o),h=c.repoInfo,f;typeof process<"u"&&zg&&(f=zg[JR]),f?(l=`http://${f}?ns=${h.namespace}`,c=vy(l,o),h=c.repoInfo):c.repoInfo.secure;const m=new dT(t.name,t.options,e);xR("Invalid Firebase Database URL",c),me(c.path)||Bn("Database URL must point to the root of a Firebase Database (not including a child path).");const y=nb(h,t,m,new cT(t,n));return new rb(y,t)}function tb(t,e){const n=Wd[e];(!n||n[t.key]!==t)&&Bn(`Database ${e}(${t.repoInfo_}) has already been deleted.`),zR(t),delete n[t.key]}function nb(t,e,n,s){let o=Wd[e.name];o||(o={},Wd[e.name]=o);let l=o[t.toURLString()];return l&&Bn("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),l=new AR(t,XR,n,s),o[t.toURLString()]=l,l}class rb{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(DR(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Ir(this._repo,Se())),this._rootInternal}_delete(){return this._rootInternal!==null&&(tb(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Bn("Cannot call "+e+" on a deleted database.")}}function ib(t=lh(),e){const n=ti(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const s=Qk("database");s&&sb(n,...s)}return n}function sb(t,e,n,s={}){t=lt(t),t._checkNotDeleted("useEmulator");const o=`${e}:${n}`,l=t._repoInternal;if(t._instanceStarted){if(o===t._repoInternal.repoInfo_.host&&Cr(s,l.repoInfo_.emulatorOptions))return;Bn("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let c;if(l.repoInfo_.nodeAdmin)s.mockUserToken&&Bn('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),c=new tl(tl.OWNER);else if(s.mockUserToken){const h=typeof s.mockUserToken=="string"?s.mockUserToken:Jk(s.mockUserToken,t.app.options.projectId);c=new tl(h)}rs(e)&&(w_(e),E_("Database",!0)),ZR(l,o,s,c)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ob(t){K1(ss),Cn(new ln("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),o=e.getProvider("auth-internal"),l=e.getProvider("app-check-internal");return eb(s,o,l,n)},"PUBLIC").setMultipleInstances(!0)),Kt($g,Wg,t),Kt($g,Wg,"esm2020")}Un.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Un.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};ob();function cw(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const ab=cw,dw=new ei("auth","Firebase",cw());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tl=new Ul("@firebase/auth");function lb(t,...e){Tl.logLevel<=Te.WARN&&Tl.warn(`Auth (${ss}): ${t}`,...e)}function nl(t,...e){Tl.logLevel<=Te.ERROR&&Tl.error(`Auth (${ss}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cn(t,...e){throw Jh(t,...e)}function wn(t,...e){return Jh(t,...e)}function hw(t,e,n){const s={...ab(),[e]:n};return new ei("auth","Firebase",s).create(e,{appName:t.name})}function zn(t){return hw(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Jh(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return dw.create(t,...e)}function oe(t,e,...n){if(!t)throw Jh(e,...n)}function Mn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw nl(e),new Error(e)}function Vn(t,e){t||Mn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bd(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.href)||""}function ub(){return Ey()==="http:"||Ey()==="https:"}function Ey(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cb(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(ub()||C_()||"connection"in navigator)?navigator.onLine:!0}function db(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Do{constructor(e,n){this.shortDelay=e,this.longDelay=n,Vn(n>e,"Short delay should be less than long delay!"),this.isMobile=oh()||k_()}get(){return cb()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xh(t,e){Vn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fw{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Mn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Mn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Mn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hb={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fb=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],pb=new Do(3e4,6e4);function Tr(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function xr(t,e,n,s,o={}){return pw(t,o,async()=>{let l={},c={};s&&(e==="GET"?c=s:l={body:JSON.stringify(s)});const h=is({key:t.config.apiKey,...c}).slice(1),f=await t._getAdditionalHeaders();f["Content-Type"]="application/json",t.languageCode&&(f["X-Firebase-Locale"]=t.languageCode);const m={method:e,headers:f,...l};return eS()||(m.referrerPolicy="no-referrer"),t.emulatorConfig&&rs(t.emulatorConfig.host)&&(m.credentials="include"),fw.fetch()(await mw(t,t.config.apiHost,n,h),m)})}async function pw(t,e,n){t._canInitEmulator=!1;const s={...hb,...e};try{const o=new gb(t),l=await Promise.race([n(),o.promise]);o.clearNetworkTimeout();const c=await l.json();if("needConfirmation"in c)throw Ya(t,"account-exists-with-different-credential",c);if(l.ok&&!("errorMessage"in c))return c;{const h=l.ok?c.errorMessage:c.error.message,[f,m]=h.split(" : ");if(f==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ya(t,"credential-already-in-use",c);if(f==="EMAIL_EXISTS")throw Ya(t,"email-already-in-use",c);if(f==="USER_DISABLED")throw Ya(t,"user-disabled",c);const y=s[f]||f.toLowerCase().replace(/[_\s]+/g,"-");if(m)throw hw(t,y,m);cn(t,y)}}catch(o){if(o instanceof kn)throw o;cn(t,"network-request-failed",{message:String(o)})}}async function Oo(t,e,n,s,o={}){const l=await xr(t,e,n,s,o);return"mfaPendingCredential"in l&&cn(t,"multi-factor-auth-required",{_serverResponse:l}),l}async function mw(t,e,n,s){const o=`${e}${n}?${s}`,l=t,c=l.config.emulator?Xh(t.config,o):`${t.config.apiScheme}://${o}`;return fb.includes(n)&&(await l._persistenceManagerAvailable,l._getPersistenceType()==="COOKIE")?l._getPersistence()._getFinalTarget(c).toString():c}function mb(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class gb{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(wn(this.auth,"network-request-failed")),pb.get())})}}function Ya(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const o=wn(t,e,s);return o.customData._tokenResponse=n,o}function Cy(t){return t!==void 0&&t.enterprise!==void 0}class yb{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return mb(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function _b(t,e){return xr(t,"GET","/v2/recaptchaConfig",Tr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vb(t,e){return xr(t,"POST","/v1/accounts:delete",e)}async function xl(t,e){return xr(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fo(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function wb(t,e=!1){const n=lt(t),s=await n.getIdToken(e),o=Zh(s);oe(o&&o.exp&&o.auth_time&&o.iat,n.auth,"internal-error");const l=typeof o.firebase=="object"?o.firebase:void 0,c=l==null?void 0:l.sign_in_provider;return{claims:o,token:s,authTime:fo(gd(o.auth_time)),issuedAtTime:fo(gd(o.iat)),expirationTime:fo(gd(o.exp)),signInProvider:c||null,signInSecondFactor:(l==null?void 0:l.sign_in_second_factor)||null}}function gd(t){return Number(t)*1e3}function Zh(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return nl("JWT malformed, contained fewer than 3 sections"),null;try{const o=ll(n);return o?JSON.parse(o):(nl("Failed to decode base64 JWT payload"),null)}catch(o){return nl("Caught error parsing JWT payload as JSON",o==null?void 0:o.toString()),null}}function ky(t){const e=Zh(t);return oe(e,"internal-error"),oe(typeof e.exp<"u","internal-error"),oe(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function So(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof kn&&Eb(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function Eb({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cb{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const s=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vd{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=fo(this.lastLoginAt),this.creationTime=fo(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Rl(t){var _;const e=t.auth,n=await t.getIdToken(),s=await So(t,xl(e,{idToken:n}));oe(s==null?void 0:s.users.length,e,"internal-error");const o=s.users[0];t._notifyReloadListener(o);const l=(_=o.providerUserInfo)!=null&&_.length?gw(o.providerUserInfo):[],c=Sb(t.providerData,l),h=t.isAnonymous,f=!(t.email&&o.passwordHash)&&!(c!=null&&c.length),m=h?f:!1,y={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:c,metadata:new Vd(o.createdAt,o.lastLoginAt),isAnonymous:m};Object.assign(t,y)}async function kb(t){const e=lt(t);await Rl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Sb(t,e){return[...t.filter(s=>!e.some(o=>o.providerId===s.providerId)),...e]}function gw(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ib(t,e){const n=await pw(t,{},async()=>{const s=is({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:l}=t.config,c=await mw(t,o,"/v1/token",`key=${l}`),h=await t._getAdditionalHeaders();h["Content-Type"]="application/x-www-form-urlencoded";const f={method:"POST",headers:h,body:s};return t.emulatorConfig&&rs(t.emulatorConfig.host)&&(f.credentials="include"),fw.fetch()(c,f)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function Tb(t,e){return xr(t,"POST","/v2/accounts:revokeToken",Tr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){oe(e.idToken,"internal-error"),oe(typeof e.idToken<"u","internal-error"),oe(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):ky(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){oe(e.length!==0,"internal-error");const n=ky(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(oe(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:o,expiresIn:l}=await Ib(e,n);this.updateTokensAndExpiration(s,o,Number(l))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:o,expirationTime:l}=n,c=new Vi;return s&&(oe(typeof s=="string","internal-error",{appName:e}),c.refreshToken=s),o&&(oe(typeof o=="string","internal-error",{appName:e}),c.accessToken=o),l&&(oe(typeof l=="number","internal-error",{appName:e}),c.expirationTime=l),c}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Vi,this.toJSON())}_performRefresh(){return Mn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hr(t,e){oe(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class on{constructor({uid:e,auth:n,stsTokenManager:s,...o}){this.providerId="firebase",this.proactiveRefresh=new Cb(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new Vd(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){const n=await So(this,this.stsTokenManager.getToken(this.auth,e));return oe(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return wb(this,e)}reload(){return kb(this)}_assign(e){this!==e&&(oe(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new on({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){oe(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await Rl(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Gt(this.auth.app))return Promise.reject(zn(this.auth));const e=await this.getIdToken();return await So(this,vb(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const s=n.displayName??void 0,o=n.email??void 0,l=n.phoneNumber??void 0,c=n.photoURL??void 0,h=n.tenantId??void 0,f=n._redirectEventId??void 0,m=n.createdAt??void 0,y=n.lastLoginAt??void 0,{uid:_,emailVerified:v,isAnonymous:I,providerData:N,stsTokenManager:x}=n;oe(_&&x,e,"internal-error");const A=Vi.fromJSON(this.name,x);oe(typeof _=="string",e,"internal-error"),hr(s,e.name),hr(o,e.name),oe(typeof v=="boolean",e,"internal-error"),oe(typeof I=="boolean",e,"internal-error"),hr(l,e.name),hr(c,e.name),hr(h,e.name),hr(f,e.name),hr(m,e.name),hr(y,e.name);const W=new on({uid:_,auth:e,email:o,emailVerified:v,displayName:s,isAnonymous:I,photoURL:c,phoneNumber:l,tenantId:h,stsTokenManager:A,createdAt:m,lastLoginAt:y});return N&&Array.isArray(N)&&(W.providerData=N.map(V=>({...V}))),f&&(W._redirectEventId=f),W}static async _fromIdTokenResponse(e,n,s=!1){const o=new Vi;o.updateFromServerResponse(n);const l=new on({uid:n.localId,auth:e,stsTokenManager:o,isAnonymous:s});return await Rl(l),l}static async _fromGetAccountInfoResponse(e,n,s){const o=n.users[0];oe(o.localId!==void 0,"internal-error");const l=o.providerUserInfo!==void 0?gw(o.providerUserInfo):[],c=!(o.email&&o.passwordHash)&&!(l!=null&&l.length),h=new Vi;h.updateFromIdToken(s);const f=new on({uid:o.localId,auth:e,stsTokenManager:h,isAnonymous:c}),m={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:l,metadata:new Vd(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!(l!=null&&l.length)};return Object.assign(f,m),f}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sy=new Map;function Fn(t){Vn(t instanceof Function,"Expected a class definition");let e=Sy.get(t);return e?(Vn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Sy.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yw{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}yw.type="NONE";const Iy=yw;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rl(t,e,n){return`firebase:${t}:${e}:${n}`}class Hi{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:o,name:l}=this.auth;this.fullUserKey=rl(this.userKey,o.apiKey,l),this.fullPersistenceKey=rl("persistence",o.apiKey,l),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await xl(this.auth,{idToken:e}).catch(()=>{});return n?on._fromGetAccountInfoResponse(this.auth,n,e):null}return on._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new Hi(Fn(Iy),e,s);const o=(await Promise.all(n.map(async m=>{if(await m._isAvailable())return m}))).filter(m=>m);let l=o[0]||Fn(Iy);const c=rl(s,e.config.apiKey,e.name);let h=null;for(const m of n)try{const y=await m._get(c);if(y){let _;if(typeof y=="string"){const v=await xl(e,{idToken:y}).catch(()=>{});if(!v)break;_=await on._fromGetAccountInfoResponse(e,v,y)}else _=on._fromJSON(e,y);m!==l&&(h=_),l=m;break}}catch{}const f=o.filter(m=>m._shouldAllowMigration);return!l._shouldAllowMigration||!f.length?new Hi(l,e,s):(l=f[0],h&&await l._set(c,h.toJSON()),await Promise.all(n.map(async m=>{if(m!==l)try{await m._remove(c)}catch{}})),new Hi(l,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ty(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Ew(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(_w(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(kw(e))return"Blackberry";if(Sw(e))return"Webos";if(vw(e))return"Safari";if((e.includes("chrome/")||ww(e))&&!e.includes("edge/"))return"Chrome";if(Cw(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function _w(t=Tt()){return/firefox\//i.test(t)}function vw(t=Tt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function ww(t=Tt()){return/crios\//i.test(t)}function Ew(t=Tt()){return/iemobile/i.test(t)}function Cw(t=Tt()){return/android/i.test(t)}function kw(t=Tt()){return/blackberry/i.test(t)}function Sw(t=Tt()){return/webos/i.test(t)}function ef(t=Tt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function xb(t=Tt()){var e;return ef(t)&&!!((e=window.navigator)!=null&&e.standalone)}function Rb(){return tS()&&document.documentMode===10}function Iw(t=Tt()){return ef(t)||Cw(t)||Sw(t)||kw(t)||/windows phone/i.test(t)||Ew(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tw(t,e=[]){let n;switch(t){case"Browser":n=Ty(Tt());break;case"Worker":n=`${Ty(Tt())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ss}/${s}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bb{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=l=>new Promise((c,h)=>{try{const f=e(l);c(f)}catch(f){h(f)}});s.onAbort=n,this.queue.push(s);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const o of n)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Nb(t,e={}){return xr(t,"GET","/v2/passwordPolicy",Tr(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pb=6;class Ab{constructor(e){var s;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??Pb,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((s=e.allowedNonAlphanumericCharacters)==null?void 0:s.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const s=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;s&&(n.meetsMinPasswordLength=e.length>=s),o&&(n.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let s;for(let o=0;o<e.length;o++)s=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(n,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,n,s,o,l){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Db{constructor(e,n,s,o){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new xy(this),this.idTokenSubscription=new xy(this),this.beforeStateQueue=new bb(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=dw,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion,this._persistenceManagerAvailable=new Promise(l=>this._resolvePersistenceManagerAvailable=l)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Fn(n)),this._initializationPromise=this.queue(async()=>{var s,o,l;if(!this._deleted&&(this.persistenceManager=await Hi.create(this,e),(s=this._resolvePersistenceManagerAvailable)==null||s.call(this),!this._deleted)){if((o=this._popupRedirectResolver)!=null&&o._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((l=this.currentUser)==null?void 0:l.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await xl(this,{idToken:e}),s=await on._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(s)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var l;if(Gt(this.app)){const c=this.app.settings.authIdToken;return c?new Promise(h=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(c).then(h,h))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let s=n,o=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const c=(l=this.redirectUser)==null?void 0:l._redirectEventId,h=s==null?void 0:s._redirectEventId,f=await this.tryRedirectSignIn(e);(!c||c===h)&&(f!=null&&f.user)&&(s=f.user,o=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(s)}catch(c){s=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(c))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return oe(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Rl(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=db()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Gt(this.app))return Promise.reject(zn(this));const n=e?lt(e):null;return n&&oe(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&oe(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Gt(this.app)?Promise.reject(zn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Gt(this.app)?Promise.reject(zn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Fn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Nb(this),n=new Ab(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new ei("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(s.tenantId=this.tenantId),await Tb(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Fn(e)||this._popupRedirectResolver;oe(n,this,"argument-error"),this.redirectPersistenceManager=await Hi.create(this,[Fn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)==null?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,o){if(this._deleted)return()=>{};const l=typeof n=="function"?n:n.next.bind(n);let c=!1;const h=this._isInitialized?Promise.resolve():this._initializationPromise;if(oe(h,this,"internal-error"),h.then(()=>{c||l(this.currentUser)}),typeof n=="function"){const f=e.addObserver(n,s,o);return()=>{c=!0,f()}}else{const f=e.addObserver(n);return()=>{c=!0,f()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return oe(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Tw(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var o;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((o=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:o.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const s=await this._getAppCheckToken();return s&&(e["X-Firebase-AppCheck"]=s),e}async _getAppCheckToken(){var n;if(Gt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&lb(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function ii(t){return lt(t)}class xy{constructor(e){this.auth=e,this.observer=null,this.addObserver=cS(n=>this.observer=n)}get next(){return oe(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Zl={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Ob(t){Zl=t}function xw(t){return Zl.loadJS(t)}function Lb(){return Zl.recaptchaEnterpriseScript}function Mb(){return Zl.gapiScript}function Fb(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class jb{constructor(){this.enterprise=new Ub}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class Ub{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const zb="recaptcha-enterprise",Rw="NO_RECAPTCHA";class $b{constructor(e){this.type=zb,this.auth=ii(e)}async verify(e="verify",n=!1){async function s(l){if(!n){if(l.tenantId==null&&l._agentRecaptchaConfig!=null)return l._agentRecaptchaConfig.siteKey;if(l.tenantId!=null&&l._tenantRecaptchaConfigs[l.tenantId]!==void 0)return l._tenantRecaptchaConfigs[l.tenantId].siteKey}return new Promise(async(c,h)=>{_b(l,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(f=>{if(f.recaptchaKey===void 0)h(new Error("recaptcha Enterprise site key undefined"));else{const m=new yb(f);return l.tenantId==null?l._agentRecaptchaConfig=m:l._tenantRecaptchaConfigs[l.tenantId]=m,c(m.siteKey)}}).catch(f=>{h(f)})})}function o(l,c,h){const f=window.grecaptcha;Cy(f)?f.enterprise.ready(()=>{f.enterprise.execute(l,{action:e}).then(m=>{c(m)}).catch(()=>{c(Rw)})}):h(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new jb().execute("siteKey",{action:"verify"}):new Promise((l,c)=>{s(this.auth).then(h=>{if(!n&&Cy(window.grecaptcha))o(h,l,c);else{if(typeof window>"u"){c(new Error("RecaptchaVerifier is only supported in browser"));return}let f=Lb();f.length!==0&&(f+=h),xw(f).then(()=>{o(h,l,c)}).catch(m=>{c(m)})}}).catch(h=>{c(h)})})}}async function Ry(t,e,n,s=!1,o=!1){const l=new $b(t);let c;if(o)c=Rw;else try{c=await l.verify(n)}catch{c=await l.verify(n,!0)}const h={...e};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in h){const f=h.phoneEnrollmentInfo.phoneNumber,m=h.phoneEnrollmentInfo.recaptchaToken;Object.assign(h,{phoneEnrollmentInfo:{phoneNumber:f,recaptchaToken:m,captchaResponse:c,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in h){const f=h.phoneSignInInfo.recaptchaToken;Object.assign(h,{phoneSignInInfo:{recaptchaToken:f,captchaResponse:c,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return h}return s?Object.assign(h,{captchaResp:c}):Object.assign(h,{captchaResponse:c}),Object.assign(h,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(h,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),h}async function Hd(t,e,n,s,o){var l;if((l=t._getRecaptchaConfig())!=null&&l.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const c=await Ry(t,e,n,n==="getOobCode");return s(t,c)}else return s(t,e).catch(async c=>{if(c.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const h=await Ry(t,e,n,n==="getOobCode");return s(t,h)}else return Promise.reject(c)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wb(t,e){const n=ti(t,"auth");if(n.isInitialized()){const o=n.getImmediate(),l=n.getOptions();if(Cr(l,e??{}))return o;cn(o,"already-initialized")}return n.initialize({options:e})}function Bb(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(Fn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function Vb(t,e,n){const s=ii(t);oe(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const o=!1,l=bw(e),{host:c,port:h}=Hb(e),f=h===null?"":`:${h}`,m={url:`${l}//${c}${f}/`},y=Object.freeze({host:c,port:h,protocol:l.replace(":",""),options:Object.freeze({disableWarnings:o})});if(!s._canInitEmulator){oe(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),oe(Cr(m,s.config.emulator)&&Cr(y,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=m,s.emulatorConfig=y,s.settings.appVerificationDisabledForTesting=!0,rs(c)?(w_(`${l}//${c}${f}`),E_("Auth",!0)):Gb()}function bw(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Hb(t){const e=bw(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(s);if(o){const l=o[1];return{host:l,port:by(s.substr(l.length+1))}}else{const[l,c]=s.split(":");return{host:l,port:by(c)}}}function by(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Gb(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tf{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Mn("not implemented")}_getIdTokenResponse(e){return Mn("not implemented")}_linkToIdToken(e,n){return Mn("not implemented")}_getReauthenticationResolver(e){return Mn("not implemented")}}async function qb(t,e){return xr(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Kb(t,e){return Oo(t,"POST","/v1/accounts:signInWithPassword",Tr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yb(t,e){return Oo(t,"POST","/v1/accounts:signInWithEmailLink",Tr(t,e))}async function Qb(t,e){return Oo(t,"POST","/v1/accounts:signInWithEmailLink",Tr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Io extends tf{constructor(e,n,s,o=null){super("password",s),this._email=e,this._password=n,this._tenantId=o}static _fromEmailAndPassword(e,n){return new Io(e,n,"password")}static _fromEmailAndCode(e,n,s=null){return new Io(e,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Hd(e,n,"signInWithPassword",Kb);case"emailLink":return Yb(e,{email:this._email,oobCode:this._password});default:cn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const s={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Hd(e,s,"signUpPassword",qb);case"emailLink":return Qb(e,{idToken:n,email:this._email,oobCode:this._password});default:cn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gi(t,e){return Oo(t,"POST","/v1/accounts:signInWithIdp",Tr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jb="http://localhost";class Xr extends tf{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Xr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):cn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:o,...l}=n;if(!s||!o)return null;const c=new Xr(s,o);return c.idToken=l.idToken||void 0,c.accessToken=l.accessToken||void 0,c.secret=l.secret,c.nonce=l.nonce,c.pendingToken=l.pendingToken||null,c}_getIdTokenResponse(e){const n=this.buildRequest();return Gi(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,Gi(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Gi(e,n)}buildRequest(){const e={requestUri:Jb,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=is(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xb(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Zb(t){const e=io(so(t)).link,n=e?io(so(e)).deep_link_id:null,s=io(so(t)).deep_link_id;return(s?io(so(s)).link:null)||s||n||e||t}class nf{constructor(e){const n=io(so(e)),s=n.apiKey??null,o=n.oobCode??null,l=Xb(n.mode??null);oe(s&&o&&l,"argument-error"),this.apiKey=s,this.operation=l,this.code=o,this.continueUrl=n.continueUrl??null,this.languageCode=n.lang??null,this.tenantId=n.tenantId??null}static parseLink(e){const n=Zb(e);try{return new nf(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class us{constructor(){this.providerId=us.PROVIDER_ID}static credential(e,n){return Io._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const s=nf.parseLink(n);return oe(s,"argument-error"),Io._fromEmailAndCode(e,s.code,s.tenantId)}}us.PROVIDER_ID="password";us.EMAIL_PASSWORD_SIGN_IN_METHOD="password";us.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nw{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lo extends Nw{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pr extends Lo{constructor(){super("facebook.com")}static credential(e){return Xr._fromParams({providerId:pr.PROVIDER_ID,signInMethod:pr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return pr.credentialFromTaggedObject(e)}static credentialFromError(e){return pr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return pr.credential(e.oauthAccessToken)}catch{return null}}}pr.FACEBOOK_SIGN_IN_METHOD="facebook.com";pr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mr extends Lo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Xr._fromParams({providerId:mr.PROVIDER_ID,signInMethod:mr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return mr.credentialFromTaggedObject(e)}static credentialFromError(e){return mr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return mr.credential(n,s)}catch{return null}}}mr.GOOGLE_SIGN_IN_METHOD="google.com";mr.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gr extends Lo{constructor(){super("github.com")}static credential(e){return Xr._fromParams({providerId:gr.PROVIDER_ID,signInMethod:gr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return gr.credentialFromTaggedObject(e)}static credentialFromError(e){return gr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return gr.credential(e.oauthAccessToken)}catch{return null}}}gr.GITHUB_SIGN_IN_METHOD="github.com";gr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yr extends Lo{constructor(){super("twitter.com")}static credential(e,n){return Xr._fromParams({providerId:yr.PROVIDER_ID,signInMethod:yr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return yr.credentialFromTaggedObject(e)}static credentialFromError(e){return yr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return yr.credential(n,s)}catch{return null}}}yr.TWITTER_SIGN_IN_METHOD="twitter.com";yr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eN(t,e){return Oo(t,"POST","/v1/accounts:signUp",Tr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,o=!1){const l=await on._fromIdTokenResponse(e,s,o),c=Ny(s);return new Zr({user:l,providerId:c,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const o=Ny(s);return new Zr({user:e,providerId:o,_tokenResponse:s,operationType:n})}}function Ny(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bl extends kn{constructor(e,n,s,o){super(n.code,n.message),this.operationType=s,this.user=o,Object.setPrototypeOf(this,bl.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,o){return new bl(e,n,s,o)}}function Pw(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(l=>{throw l.code==="auth/multi-factor-auth-required"?bl._fromErrorAndOperation(t,l,e,s):l})}async function tN(t,e,n=!1){const s=await So(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Zr._forOperation(t,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nN(t,e,n=!1){const{auth:s}=t;if(Gt(s.app))return Promise.reject(zn(s));const o="reauthenticate";try{const l=await So(t,Pw(s,o,e,t),n);oe(l.idToken,s,"internal-error");const c=Zh(l.idToken);oe(c,s,"internal-error");const{sub:h}=c;return oe(t.uid===h,s,"user-mismatch"),Zr._forOperation(t,o,l)}catch(l){throw(l==null?void 0:l.code)==="auth/user-not-found"&&cn(s,"user-mismatch"),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Aw(t,e,n=!1){if(Gt(t.app))return Promise.reject(zn(t));const s="signIn",o=await Pw(t,s,e),l=await Zr._fromIdTokenResponse(t,s,o);return n||await t._updateCurrentUser(l.user),l}async function rN(t,e){return Aw(ii(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Dw(t){const e=ii(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function iN(t,e,n){if(Gt(t.app))return Promise.reject(zn(t));const s=ii(t),c=await Hd(s,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",eN).catch(f=>{throw f.code==="auth/password-does-not-meet-requirements"&&Dw(t),f}),h=await Zr._fromIdTokenResponse(s,"signIn",c);return await s._updateCurrentUser(h.user),h}function sN(t,e,n){return Gt(t.app)?Promise.reject(zn(t)):rN(lt(t),us.credential(e,n)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&Dw(t),s})}function oN(t,e,n,s){return lt(t).onIdTokenChanged(e,n,s)}function aN(t,e,n){return lt(t).beforeAuthStateChanged(e,n)}function lN(t,e,n,s){return lt(t).onAuthStateChanged(e,n,s)}function uN(t){return lt(t).signOut()}const Nl="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ow{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Nl,"1"),this.storage.removeItem(Nl),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cN=1e3,dN=10;class Lw extends Ow{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Iw(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),o=this.localCache[n];s!==o&&e(n,o,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((c,h,f)=>{this.notifyListeners(c,f)});return}const s=e.key;n?this.detachListener():this.stopPolling();const o=()=>{const c=this.storage.getItem(s);!n&&this.localCache[s]===c||this.notifyListeners(s,c)},l=this.storage.getItem(s);Rb()&&l!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,dN):o()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},cN)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Lw.type="LOCAL";const hN=Lw;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mw extends Ow{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Mw.type="SESSION";const Fw=Mw;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fN(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eu{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(o=>o.isListeningto(e));if(n)return n;const s=new eu(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:o,data:l}=n.data,c=this.handlersMap[o];if(!(c!=null&&c.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:o});const h=Array.from(c).map(async m=>m(n.origin,l)),f=await fN(h);n.ports[0].postMessage({status:"done",eventId:s,eventType:o,response:f})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}eu.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rf(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pN{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let l,c;return new Promise((h,f)=>{const m=rf("",20);o.port1.start();const y=setTimeout(()=>{f(new Error("unsupported_event"))},s);c={messageChannel:o,onMessage(_){const v=_;if(v.data.eventId===m)switch(v.data.status){case"ack":clearTimeout(y),l=setTimeout(()=>{f(new Error("timeout"))},3e3);break;case"done":clearTimeout(l),h(v.data.response);break;default:clearTimeout(y),clearTimeout(l),f(new Error("invalid_response"));break}}},this.handlers.add(c),o.port1.addEventListener("message",c.onMessage),this.target.postMessage({eventType:e,eventId:m,data:n},[o.port2])}).finally(()=>{c&&this.removeMessageHandler(c)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function En(){return window}function mN(t){En().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jw(){return typeof En().WorkerGlobalScope<"u"&&typeof En().importScripts=="function"}async function gN(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function yN(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)==null?void 0:t.controller)||null}function _N(){return jw()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uw="firebaseLocalStorageDb",vN=1,Pl="firebaseLocalStorage",zw="fbase_key";class Mo{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function tu(t,e){return t.transaction([Pl],e?"readwrite":"readonly").objectStore(Pl)}function wN(){const t=indexedDB.deleteDatabase(Uw);return new Mo(t).toPromise()}function Gd(){const t=indexedDB.open(Uw,vN);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(Pl,{keyPath:zw})}catch(o){n(o)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(Pl)?e(s):(s.close(),await wN(),e(await Gd()))})})}async function Py(t,e,n){const s=tu(t,!0).put({[zw]:e,value:n});return new Mo(s).toPromise()}async function EN(t,e){const n=tu(t,!1).get(e),s=await new Mo(n).toPromise();return s===void 0?null:s.value}function Ay(t,e){const n=tu(t,!0).delete(e);return new Mo(n).toPromise()}const CN=800,kN=3;class $w{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Gd(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>kN)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return jw()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=eu._getInstance(_N()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var n,s;if(this.activeServiceWorker=await gN(),!this.activeServiceWorker)return;this.sender=new pN(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(n=e[0])!=null&&n.fulfilled&&(s=e[0])!=null&&s.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||yN()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Gd();return await Py(e,Nl,"1"),await Ay(e,Nl),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>Py(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>EN(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Ay(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const l=tu(o,!1).getAll();return new Mo(l).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;if(e.length!==0)for(const{fbase_key:o,value:l}of e)s.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(l)&&(this.notifyListeners(o,l),n.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!s.has(o)&&(this.notifyListeners(o,null),n.push(o));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),CN)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}$w.type="LOCAL";const SN=$w;new Do(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IN(t,e){return e?Fn(e):(oe(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sf extends tf{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Gi(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Gi(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Gi(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function TN(t){return Aw(t.auth,new sf(t),t.bypassAuthState)}function xN(t){const{auth:e,user:n}=t;return oe(n,e,"internal-error"),nN(n,new sf(t),t.bypassAuthState)}async function RN(t){const{auth:e,user:n}=t;return oe(n,e,"internal-error"),tN(n,new sf(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ww{constructor(e,n,s,o,l=!1){this.auth=e,this.resolver=s,this.user=o,this.bypassAuthState=l,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:o,tenantId:l,error:c,type:h}=e;if(c){this.reject(c);return}const f={auth:this.auth,requestUri:n,sessionId:s,tenantId:l||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(h)(f))}catch(m){this.reject(m)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return TN;case"linkViaPopup":case"linkViaRedirect":return RN;case"reauthViaPopup":case"reauthViaRedirect":return xN;default:cn(this.auth,"internal-error")}}resolve(e){Vn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Vn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bN=new Do(2e3,1e4);class Ui extends Ww{constructor(e,n,s,o,l){super(e,n,o,l),this.provider=s,this.authWindow=null,this.pollId=null,Ui.currentPopupAction&&Ui.currentPopupAction.cancel(),Ui.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return oe(e,this.auth,"internal-error"),e}async onExecution(){Vn(this.filter.length===1,"Popup operations only handle one event");const e=rf();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(wn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(wn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ui.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if((s=(n=this.authWindow)==null?void 0:n.window)!=null&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(wn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,bN.get())};e()}}Ui.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NN="pendingRedirect",il=new Map;class PN extends Ww{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=il.get(this.auth._key());if(!e){try{const s=await AN(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}il.set(this.auth._key(),e)}return this.bypassAuthState||il.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function AN(t,e){const n=LN(e),s=ON(t);if(!await s._isAvailable())return!1;const o=await s._get(n)==="true";return await s._remove(n),o}function DN(t,e){il.set(t._key(),e)}function ON(t){return Fn(t._redirectPersistence)}function LN(t){return rl(NN,t.config.apiKey,t.name)}async function MN(t,e,n=!1){if(Gt(t.app))return Promise.reject(zn(t));const s=ii(t),o=IN(s,e),c=await new PN(s,o,n).execute();return c&&!n&&(delete c.user._redirectEventId,await s._persistUserIfCurrent(c.user),await s._setRedirectUser(null,e)),c}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FN=600*1e3;class jN{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!UN(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!Bw(e)){const o=((s=e.error.code)==null?void 0:s.split("auth/")[1])||"internal-error";n.onError(wn(this.auth,o))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=FN&&this.cachedEventUids.clear(),this.cachedEventUids.has(Dy(e))}saveEventToCache(e){this.cachedEventUids.add(Dy(e)),this.lastProcessedEventTime=Date.now()}}function Dy(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Bw({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function UN(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Bw(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zN(t,e={}){return xr(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $N=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,WN=/^https?/;async function BN(t){if(t.config.emulator)return;const{authorizedDomains:e}=await zN(t);for(const n of e)try{if(VN(n))return}catch{}cn(t,"unauthorized-domain")}function VN(t){const e=Bd(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const c=new URL(t);return c.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&c.hostname===s}if(!WN.test(n))return!1;if($N.test(t))return s===t;const o=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HN=new Do(3e4,6e4);function Oy(){const t=En().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function GN(t){return new Promise((e,n)=>{var o,l,c;function s(){Oy(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Oy(),n(wn(t,"network-request-failed"))},timeout:HN.get()})}if((l=(o=En().gapi)==null?void 0:o.iframes)!=null&&l.Iframe)e(gapi.iframes.getContext());else if((c=En().gapi)!=null&&c.load)s();else{const h=Fb("iframefcb");return En()[h]=()=>{gapi.load?s():n(wn(t,"network-request-failed"))},xw(`${Mb()}?onload=${h}`).catch(f=>n(f))}}).catch(e=>{throw sl=null,e})}let sl=null;function qN(t){return sl=sl||GN(t),sl}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KN=new Do(5e3,15e3),YN="__/auth/iframe",QN="emulator/auth/iframe",JN={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},XN=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function ZN(t){const e=t.config;oe(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Xh(e,QN):`https://${t.config.authDomain}/${YN}`,s={apiKey:e.apiKey,appName:t.name,v:ss},o=XN.get(t.config.apiHost);o&&(s.eid=o);const l=t._getFrameworks();return l.length&&(s.fw=l.join(",")),`${n}?${is(s).slice(1)}`}async function eP(t){const e=await qN(t),n=En().gapi;return oe(n,t,"internal-error"),e.open({where:document.body,url:ZN(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:JN,dontclear:!0},s=>new Promise(async(o,l)=>{await s.restyle({setHideOnLeave:!1});const c=wn(t,"network-request-failed"),h=En().setTimeout(()=>{l(c)},KN.get());function f(){En().clearTimeout(h),o(s)}s.ping(f).then(f,()=>{l(c)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tP={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},nP=500,rP=600,iP="_blank",sP="http://localhost";class Ly{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function oP(t,e,n,s=nP,o=rP){const l=Math.max((window.screen.availHeight-o)/2,0).toString(),c=Math.max((window.screen.availWidth-s)/2,0).toString();let h="";const f={...tP,width:s.toString(),height:o.toString(),top:l,left:c},m=Tt().toLowerCase();n&&(h=ww(m)?iP:n),_w(m)&&(e=e||sP,f.scrollbars="yes");const y=Object.entries(f).reduce((v,[I,N])=>`${v}${I}=${N},`,"");if(xb(m)&&h!=="_self")return aP(e||"",h),new Ly(null);const _=window.open(e||"",h,y);oe(_,t,"popup-blocked");try{_.focus()}catch{}return new Ly(_)}function aP(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lP="__/auth/handler",uP="emulator/auth/handler",cP=encodeURIComponent("fac");async function My(t,e,n,s,o,l){oe(t.config.authDomain,t,"auth-domain-config-required"),oe(t.config.apiKey,t,"invalid-api-key");const c={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:ss,eventId:o};if(e instanceof Nw){e.setDefaultLanguage(t.languageCode),c.providerId=e.providerId||"",Cd(e.getCustomParameters())||(c.customParameters=JSON.stringify(e.getCustomParameters()));for(const[y,_]of Object.entries({}))c[y]=_}if(e instanceof Lo){const y=e.getScopes().filter(_=>_!=="");y.length>0&&(c.scopes=y.join(","))}t.tenantId&&(c.tid=t.tenantId);const h=c;for(const y of Object.keys(h))h[y]===void 0&&delete h[y];const f=await t._getAppCheckToken(),m=f?`#${cP}=${encodeURIComponent(f)}`:"";return`${dP(t)}?${is(h).slice(1)}${m}`}function dP({config:t}){return t.emulator?Xh(t,uP):`https://${t.authDomain}/${lP}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yd="webStorageSupport";class hP{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Fw,this._completeRedirectFn=MN,this._overrideRedirectResult=DN}async _openPopup(e,n,s,o){var c;Vn((c=this.eventManagers[e._key()])==null?void 0:c.manager,"_initialize() not called before _openPopup()");const l=await My(e,n,s,Bd(),o);return oP(e,l,rf())}async _openRedirect(e,n,s,o){await this._originValidation(e);const l=await My(e,n,s,Bd(),o);return mN(l),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:o,promise:l}=this.eventManagers[n];return o?Promise.resolve(o):(Vn(l,"If manager is not set, promise should be"),l)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await eP(e),s=new jN(e);return n.register("authEvent",o=>(oe(o==null?void 0:o.authEvent,e,"invalid-auth-event"),{status:s.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(yd,{type:yd},o=>{var c;const l=(c=o==null?void 0:o[0])==null?void 0:c[yd];l!==void 0&&n(!!l),cn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=BN(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Iw()||vw()||ef()}}const fP=hP;var Fy="@firebase/auth",jy="1.11.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pP{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){oe(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mP(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function gP(t){Cn(new ln("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),l=e.getProvider("app-check-internal"),{apiKey:c,authDomain:h}=s.options;oe(c&&!c.includes(":"),"invalid-api-key",{appName:s.name});const f={apiKey:c,authDomain:h,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Tw(t)},m=new Db(s,o,l,f);return Bb(m,n),m},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),Cn(new ln("auth-internal",e=>{const n=ii(e.getProvider("auth").getImmediate());return(s=>new pP(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Kt(Fy,jy,mP(t)),Kt(Fy,jy,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yP=300,_P=v_("authIdTokenMaxAge")||yP;let Uy=null;const vP=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>_P)return;const o=n==null?void 0:n.token;Uy!==o&&(Uy=o,await fetch(t,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function wP(t=lh()){const e=ti(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Wb(t,{popupRedirectResolver:fP,persistence:[SN,hN,Fw]}),s=v_("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const l=new URL(s,location.origin);if(location.origin===l.origin){const c=vP(l.toString());aN(n,c,()=>c(n.currentUser)),oN(n,h=>c(h))}}const o=y_("auth");return o&&Vb(n,`http://${o}`),n}function EP(){var t;return((t=document.getElementsByTagName("head"))==null?void 0:t[0])??document}Ob({loadJS(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=o=>{const l=wn("internal-error");l.customData=o,n(l)},s.type="text/javascript",s.charset="UTF-8",EP().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});gP("Browser");const CP={apiKey:"AIzaSyCYSlsCpya0lq1XTCZbg3uKRWezjgJGrDw",authDomain:"driveway-33dd7.firebaseapp.com",databaseURL:"https://driveway-33dd7-default-rtdb.firebaseio.com",projectId:"driveway-33dd7",storageBucket:"driveway-33dd7.firebasestorage.app",messagingSenderId:"774495628670",appId:"1:774495628670:web:9f060969e992697957172f",measurementId:"G-N3PXP5VM39"},of=N_(CP);B1(of);const Pe=ib(of),Qa=wP(of);function Vw(t){var e,n,s="";if(typeof t=="string"||typeof t=="number")s+=t;else if(typeof t=="object")if(Array.isArray(t)){var o=t.length;for(e=0;e<o;e++)t[e]&&(n=Vw(t[e]))&&(s&&(s+=" "),s+=n)}else for(n in t)t[n]&&(s&&(s+=" "),s+=n);return s}function kP(){for(var t,e,n=0,s="",o=arguments.length;n<o;n++)(t=arguments[n])&&(e=Vw(t))&&(s&&(s+=" "),s+=e);return s}const SP=(t,e)=>{const n=new Array(t.length+e.length);for(let s=0;s<t.length;s++)n[s]=t[s];for(let s=0;s<e.length;s++)n[t.length+s]=e[s];return n},IP=(t,e)=>({classGroupId:t,validator:e}),Hw=(t=new Map,e=null,n)=>({nextPart:t,validators:e,classGroupId:n}),Al="-",zy=[],TP="arbitrary..",xP=t=>{const e=bP(t),{conflictingClassGroups:n,conflictingClassGroupModifiers:s}=t;return{getClassGroupId:c=>{if(c.startsWith("[")&&c.endsWith("]"))return RP(c);const h=c.split(Al),f=h[0]===""&&h.length>1?1:0;return Gw(h,f,e)},getConflictingClassGroupIds:(c,h)=>{if(h){const f=s[c],m=n[c];return f?m?SP(m,f):f:m||zy}return n[c]||zy}}},Gw=(t,e,n)=>{if(t.length-e===0)return n.classGroupId;const o=t[e],l=n.nextPart.get(o);if(l){const m=Gw(t,e+1,l);if(m)return m}const c=n.validators;if(c===null)return;const h=e===0?t.join(Al):t.slice(e).join(Al),f=c.length;for(let m=0;m<f;m++){const y=c[m];if(y.validator(h))return y.classGroupId}},RP=t=>t.slice(1,-1).indexOf(":")===-1?void 0:(()=>{const e=t.slice(1,-1),n=e.indexOf(":"),s=e.slice(0,n);return s?TP+s:void 0})(),bP=t=>{const{theme:e,classGroups:n}=t;return NP(n,e)},NP=(t,e)=>{const n=Hw();for(const s in t){const o=t[s];af(o,n,s,e)}return n},af=(t,e,n,s)=>{const o=t.length;for(let l=0;l<o;l++){const c=t[l];PP(c,e,n,s)}},PP=(t,e,n,s)=>{if(typeof t=="string"){AP(t,e,n);return}if(typeof t=="function"){DP(t,e,n,s);return}OP(t,e,n,s)},AP=(t,e,n)=>{const s=t===""?e:qw(e,t);s.classGroupId=n},DP=(t,e,n,s)=>{if(LP(t)){af(t(s),e,n,s);return}e.validators===null&&(e.validators=[]),e.validators.push(IP(n,t))},OP=(t,e,n,s)=>{const o=Object.entries(t),l=o.length;for(let c=0;c<l;c++){const[h,f]=o[c];af(f,qw(e,h),n,s)}},qw=(t,e)=>{let n=t;const s=e.split(Al),o=s.length;for(let l=0;l<o;l++){const c=s[l];let h=n.nextPart.get(c);h||(h=Hw(),n.nextPart.set(c,h)),n=h}return n},LP=t=>"isThemeGetter"in t&&t.isThemeGetter===!0,MP=t=>{if(t<1)return{get:()=>{},set:()=>{}};let e=0,n=Object.create(null),s=Object.create(null);const o=(l,c)=>{n[l]=c,e++,e>t&&(e=0,s=n,n=Object.create(null))};return{get(l){let c=n[l];if(c!==void 0)return c;if((c=s[l])!==void 0)return o(l,c),c},set(l,c){l in n?n[l]=c:o(l,c)}}},qd="!",$y=":",FP=[],Wy=(t,e,n,s,o)=>({modifiers:t,hasImportantModifier:e,baseClassName:n,maybePostfixModifierPosition:s,isExternal:o}),jP=t=>{const{prefix:e,experimentalParseClassName:n}=t;let s=o=>{const l=[];let c=0,h=0,f=0,m;const y=o.length;for(let x=0;x<y;x++){const A=o[x];if(c===0&&h===0){if(A===$y){l.push(o.slice(f,x)),f=x+1;continue}if(A==="/"){m=x;continue}}A==="["?c++:A==="]"?c--:A==="("?h++:A===")"&&h--}const _=l.length===0?o:o.slice(f);let v=_,I=!1;_.endsWith(qd)?(v=_.slice(0,-1),I=!0):_.startsWith(qd)&&(v=_.slice(1),I=!0);const N=m&&m>f?m-f:void 0;return Wy(l,I,v,N)};if(e){const o=e+$y,l=s;s=c=>c.startsWith(o)?l(c.slice(o.length)):Wy(FP,!1,c,void 0,!0)}if(n){const o=s;s=l=>n({className:l,parseClassName:o})}return s},UP=t=>{const e=new Map;return t.orderSensitiveModifiers.forEach((n,s)=>{e.set(n,1e6+s)}),n=>{const s=[];let o=[];for(let l=0;l<n.length;l++){const c=n[l],h=c[0]==="[",f=e.has(c);h||f?(o.length>0&&(o.sort(),s.push(...o),o=[]),s.push(c)):o.push(c)}return o.length>0&&(o.sort(),s.push(...o)),s}},zP=t=>({cache:MP(t.cacheSize),parseClassName:jP(t),sortModifiers:UP(t),...xP(t)}),$P=/\s+/,WP=(t,e)=>{const{parseClassName:n,getClassGroupId:s,getConflictingClassGroupIds:o,sortModifiers:l}=e,c=[],h=t.trim().split($P);let f="";for(let m=h.length-1;m>=0;m-=1){const y=h[m],{isExternal:_,modifiers:v,hasImportantModifier:I,baseClassName:N,maybePostfixModifierPosition:x}=n(y);if(_){f=y+(f.length>0?" "+f:f);continue}let A=!!x,W=s(A?N.substring(0,x):N);if(!W){if(!A){f=y+(f.length>0?" "+f:f);continue}if(W=s(N),!W){f=y+(f.length>0?" "+f:f);continue}A=!1}const V=v.length===0?"":v.length===1?v[0]:l(v).join(":"),j=I?V+qd:V,Z=j+W;if(c.indexOf(Z)>-1)continue;c.push(Z);const ce=o(W,A);for(let ye=0;ye<ce.length;++ye){const _e=ce[ye];c.push(j+_e)}f=y+(f.length>0?" "+f:f)}return f},BP=(...t)=>{let e=0,n,s,o="";for(;e<t.length;)(n=t[e++])&&(s=Kw(n))&&(o&&(o+=" "),o+=s);return o},Kw=t=>{if(typeof t=="string")return t;let e,n="";for(let s=0;s<t.length;s++)t[s]&&(e=Kw(t[s]))&&(n&&(n+=" "),n+=e);return n},VP=(t,...e)=>{let n,s,o,l;const c=f=>{const m=e.reduce((y,_)=>_(y),t());return n=zP(m),s=n.cache.get,o=n.cache.set,l=h,h(f)},h=f=>{const m=s(f);if(m)return m;const y=WP(f,n);return o(f,y),y};return l=c,(...f)=>l(BP(...f))},HP=[],Je=t=>{const e=n=>n[t]||HP;return e.isThemeGetter=!0,e},Yw=/^\[(?:(\w[\w-]*):)?(.+)\]$/i,Qw=/^\((?:(\w[\w-]*):)?(.+)\)$/i,GP=/^\d+\/\d+$/,qP=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,KP=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,YP=/^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,QP=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,JP=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,Mi=t=>GP.test(t),de=t=>!!t&&!Number.isNaN(Number(t)),fr=t=>!!t&&Number.isInteger(Number(t)),_d=t=>t.endsWith("%")&&de(t.slice(0,-1)),On=t=>qP.test(t),XP=()=>!0,ZP=t=>KP.test(t)&&!YP.test(t),Jw=()=>!1,eA=t=>QP.test(t),tA=t=>JP.test(t),nA=t=>!q(t)&&!K(t),rA=t=>cs(t,eE,Jw),q=t=>Yw.test(t),$r=t=>cs(t,tE,ZP),vd=t=>cs(t,lA,de),By=t=>cs(t,Xw,Jw),iA=t=>cs(t,Zw,tA),Ja=t=>cs(t,nE,eA),K=t=>Qw.test(t),ro=t=>ds(t,tE),sA=t=>ds(t,uA),Vy=t=>ds(t,Xw),oA=t=>ds(t,eE),aA=t=>ds(t,Zw),Xa=t=>ds(t,nE,!0),cs=(t,e,n)=>{const s=Yw.exec(t);return s?s[1]?e(s[1]):n(s[2]):!1},ds=(t,e,n=!1)=>{const s=Qw.exec(t);return s?s[1]?e(s[1]):n:!1},Xw=t=>t==="position"||t==="percentage",Zw=t=>t==="image"||t==="url",eE=t=>t==="length"||t==="size"||t==="bg-size",tE=t=>t==="length",lA=t=>t==="number",uA=t=>t==="family-name",nE=t=>t==="shadow",cA=()=>{const t=Je("color"),e=Je("font"),n=Je("text"),s=Je("font-weight"),o=Je("tracking"),l=Je("leading"),c=Je("breakpoint"),h=Je("container"),f=Je("spacing"),m=Je("radius"),y=Je("shadow"),_=Je("inset-shadow"),v=Je("text-shadow"),I=Je("drop-shadow"),N=Je("blur"),x=Je("perspective"),A=Je("aspect"),W=Je("ease"),V=Je("animate"),j=()=>["auto","avoid","all","avoid-page","page","left","right","column"],Z=()=>["center","top","bottom","left","right","top-left","left-top","top-right","right-top","bottom-right","right-bottom","bottom-left","left-bottom"],ce=()=>[...Z(),K,q],ye=()=>["auto","hidden","clip","visible","scroll"],_e=()=>["auto","contain","none"],Y=()=>[K,q,f],we=()=>[Mi,"full","auto",...Y()],Be=()=>[fr,"none","subgrid",K,q],wt=()=>["auto",{span:["full",fr,K,q]},fr,K,q],ut=()=>[fr,"auto",K,q],et=()=>["auto","min","max","fr",K,q],ct=()=>["start","end","center","between","around","evenly","stretch","baseline","center-safe","end-safe"],Ke=()=>["start","end","center","stretch","center-safe","end-safe"],Re=()=>["auto",...Y()],Ee=()=>[Mi,"auto","full","dvw","dvh","lvw","lvh","svw","svh","min","max","fit",...Y()],O=()=>[t,K,q],re=()=>[...Z(),Vy,By,{position:[K,q]}],L=()=>["no-repeat",{repeat:["","x","y","space","round"]}],k=()=>["auto","cover","contain",oA,rA,{size:[K,q]}],D=()=>[_d,ro,$r],Q=()=>["","none","full",m,K,q],ne=()=>["",de,ro,$r],ee=()=>["solid","dashed","dotted","double"],ue=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],te=()=>[de,_d,Vy,By],ge=()=>["","none",N,K,q],ke=()=>["none",de,K,q],Ge=()=>["none",de,K,q],fn=()=>[de,K,q],In=()=>[Mi,"full",...Y()];return{cacheSize:500,theme:{animate:["spin","ping","pulse","bounce"],aspect:["video"],blur:[On],breakpoint:[On],color:[XP],container:[On],"drop-shadow":[On],ease:["in","out","in-out"],font:[nA],"font-weight":["thin","extralight","light","normal","medium","semibold","bold","extrabold","black"],"inset-shadow":[On],leading:["none","tight","snug","normal","relaxed","loose"],perspective:["dramatic","near","normal","midrange","distant","none"],radius:[On],shadow:[On],spacing:["px",de],text:[On],"text-shadow":[On],tracking:["tighter","tight","normal","wide","wider","widest"]},classGroups:{aspect:[{aspect:["auto","square",Mi,q,K,A]}],container:["container"],columns:[{columns:[de,q,K,h]}],"break-after":[{"break-after":j()}],"break-before":[{"break-before":j()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],sr:["sr-only","not-sr-only"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:ce()}],overflow:[{overflow:ye()}],"overflow-x":[{"overflow-x":ye()}],"overflow-y":[{"overflow-y":ye()}],overscroll:[{overscroll:_e()}],"overscroll-x":[{"overscroll-x":_e()}],"overscroll-y":[{"overscroll-y":_e()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:we()}],"inset-x":[{"inset-x":we()}],"inset-y":[{"inset-y":we()}],start:[{start:we()}],end:[{end:we()}],top:[{top:we()}],right:[{right:we()}],bottom:[{bottom:we()}],left:[{left:we()}],visibility:["visible","invisible","collapse"],z:[{z:[fr,"auto",K,q]}],basis:[{basis:[Mi,"full","auto",h,...Y()]}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["nowrap","wrap","wrap-reverse"]}],flex:[{flex:[de,Mi,"auto","initial","none",q]}],grow:[{grow:["",de,K,q]}],shrink:[{shrink:["",de,K,q]}],order:[{order:[fr,"first","last","none",K,q]}],"grid-cols":[{"grid-cols":Be()}],"col-start-end":[{col:wt()}],"col-start":[{"col-start":ut()}],"col-end":[{"col-end":ut()}],"grid-rows":[{"grid-rows":Be()}],"row-start-end":[{row:wt()}],"row-start":[{"row-start":ut()}],"row-end":[{"row-end":ut()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":et()}],"auto-rows":[{"auto-rows":et()}],gap:[{gap:Y()}],"gap-x":[{"gap-x":Y()}],"gap-y":[{"gap-y":Y()}],"justify-content":[{justify:[...ct(),"normal"]}],"justify-items":[{"justify-items":[...Ke(),"normal"]}],"justify-self":[{"justify-self":["auto",...Ke()]}],"align-content":[{content:["normal",...ct()]}],"align-items":[{items:[...Ke(),{baseline:["","last"]}]}],"align-self":[{self:["auto",...Ke(),{baseline:["","last"]}]}],"place-content":[{"place-content":ct()}],"place-items":[{"place-items":[...Ke(),"baseline"]}],"place-self":[{"place-self":["auto",...Ke()]}],p:[{p:Y()}],px:[{px:Y()}],py:[{py:Y()}],ps:[{ps:Y()}],pe:[{pe:Y()}],pt:[{pt:Y()}],pr:[{pr:Y()}],pb:[{pb:Y()}],pl:[{pl:Y()}],m:[{m:Re()}],mx:[{mx:Re()}],my:[{my:Re()}],ms:[{ms:Re()}],me:[{me:Re()}],mt:[{mt:Re()}],mr:[{mr:Re()}],mb:[{mb:Re()}],ml:[{ml:Re()}],"space-x":[{"space-x":Y()}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":Y()}],"space-y-reverse":["space-y-reverse"],size:[{size:Ee()}],w:[{w:[h,"screen",...Ee()]}],"min-w":[{"min-w":[h,"screen","none",...Ee()]}],"max-w":[{"max-w":[h,"screen","none","prose",{screen:[c]},...Ee()]}],h:[{h:["screen","lh",...Ee()]}],"min-h":[{"min-h":["screen","lh","none",...Ee()]}],"max-h":[{"max-h":["screen","lh",...Ee()]}],"font-size":[{text:["base",n,ro,$r]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:[s,K,vd]}],"font-stretch":[{"font-stretch":["ultra-condensed","extra-condensed","condensed","semi-condensed","normal","semi-expanded","expanded","extra-expanded","ultra-expanded",_d,q]}],"font-family":[{font:[sA,q,e]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:[o,K,q]}],"line-clamp":[{"line-clamp":[de,"none",K,vd]}],leading:[{leading:[l,...Y()]}],"list-image":[{"list-image":["none",K,q]}],"list-style-position":[{list:["inside","outside"]}],"list-style-type":[{list:["disc","decimal","none",K,q]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"placeholder-color":[{placeholder:O()}],"text-color":[{text:O()}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...ee(),"wavy"]}],"text-decoration-thickness":[{decoration:[de,"from-font","auto",K,$r]}],"text-decoration-color":[{decoration:O()}],"underline-offset":[{"underline-offset":[de,"auto",K,q]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:Y()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",K,q]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],wrap:[{wrap:["break-word","anywhere","normal"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",K,q]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:re()}],"bg-repeat":[{bg:L()}],"bg-size":[{bg:k()}],"bg-image":[{bg:["none",{linear:[{to:["t","tr","r","br","b","bl","l","tl"]},fr,K,q],radial:["",K,q],conic:[fr,K,q]},aA,iA]}],"bg-color":[{bg:O()}],"gradient-from-pos":[{from:D()}],"gradient-via-pos":[{via:D()}],"gradient-to-pos":[{to:D()}],"gradient-from":[{from:O()}],"gradient-via":[{via:O()}],"gradient-to":[{to:O()}],rounded:[{rounded:Q()}],"rounded-s":[{"rounded-s":Q()}],"rounded-e":[{"rounded-e":Q()}],"rounded-t":[{"rounded-t":Q()}],"rounded-r":[{"rounded-r":Q()}],"rounded-b":[{"rounded-b":Q()}],"rounded-l":[{"rounded-l":Q()}],"rounded-ss":[{"rounded-ss":Q()}],"rounded-se":[{"rounded-se":Q()}],"rounded-ee":[{"rounded-ee":Q()}],"rounded-es":[{"rounded-es":Q()}],"rounded-tl":[{"rounded-tl":Q()}],"rounded-tr":[{"rounded-tr":Q()}],"rounded-br":[{"rounded-br":Q()}],"rounded-bl":[{"rounded-bl":Q()}],"border-w":[{border:ne()}],"border-w-x":[{"border-x":ne()}],"border-w-y":[{"border-y":ne()}],"border-w-s":[{"border-s":ne()}],"border-w-e":[{"border-e":ne()}],"border-w-t":[{"border-t":ne()}],"border-w-r":[{"border-r":ne()}],"border-w-b":[{"border-b":ne()}],"border-w-l":[{"border-l":ne()}],"divide-x":[{"divide-x":ne()}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":ne()}],"divide-y-reverse":["divide-y-reverse"],"border-style":[{border:[...ee(),"hidden","none"]}],"divide-style":[{divide:[...ee(),"hidden","none"]}],"border-color":[{border:O()}],"border-color-x":[{"border-x":O()}],"border-color-y":[{"border-y":O()}],"border-color-s":[{"border-s":O()}],"border-color-e":[{"border-e":O()}],"border-color-t":[{"border-t":O()}],"border-color-r":[{"border-r":O()}],"border-color-b":[{"border-b":O()}],"border-color-l":[{"border-l":O()}],"divide-color":[{divide:O()}],"outline-style":[{outline:[...ee(),"none","hidden"]}],"outline-offset":[{"outline-offset":[de,K,q]}],"outline-w":[{outline:["",de,ro,$r]}],"outline-color":[{outline:O()}],shadow:[{shadow:["","none",y,Xa,Ja]}],"shadow-color":[{shadow:O()}],"inset-shadow":[{"inset-shadow":["none",_,Xa,Ja]}],"inset-shadow-color":[{"inset-shadow":O()}],"ring-w":[{ring:ne()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:O()}],"ring-offset-w":[{"ring-offset":[de,$r]}],"ring-offset-color":[{"ring-offset":O()}],"inset-ring-w":[{"inset-ring":ne()}],"inset-ring-color":[{"inset-ring":O()}],"text-shadow":[{"text-shadow":["none",v,Xa,Ja]}],"text-shadow-color":[{"text-shadow":O()}],opacity:[{opacity:[de,K,q]}],"mix-blend":[{"mix-blend":[...ue(),"plus-darker","plus-lighter"]}],"bg-blend":[{"bg-blend":ue()}],"mask-clip":[{"mask-clip":["border","padding","content","fill","stroke","view"]},"mask-no-clip"],"mask-composite":[{mask:["add","subtract","intersect","exclude"]}],"mask-image-linear-pos":[{"mask-linear":[de]}],"mask-image-linear-from-pos":[{"mask-linear-from":te()}],"mask-image-linear-to-pos":[{"mask-linear-to":te()}],"mask-image-linear-from-color":[{"mask-linear-from":O()}],"mask-image-linear-to-color":[{"mask-linear-to":O()}],"mask-image-t-from-pos":[{"mask-t-from":te()}],"mask-image-t-to-pos":[{"mask-t-to":te()}],"mask-image-t-from-color":[{"mask-t-from":O()}],"mask-image-t-to-color":[{"mask-t-to":O()}],"mask-image-r-from-pos":[{"mask-r-from":te()}],"mask-image-r-to-pos":[{"mask-r-to":te()}],"mask-image-r-from-color":[{"mask-r-from":O()}],"mask-image-r-to-color":[{"mask-r-to":O()}],"mask-image-b-from-pos":[{"mask-b-from":te()}],"mask-image-b-to-pos":[{"mask-b-to":te()}],"mask-image-b-from-color":[{"mask-b-from":O()}],"mask-image-b-to-color":[{"mask-b-to":O()}],"mask-image-l-from-pos":[{"mask-l-from":te()}],"mask-image-l-to-pos":[{"mask-l-to":te()}],"mask-image-l-from-color":[{"mask-l-from":O()}],"mask-image-l-to-color":[{"mask-l-to":O()}],"mask-image-x-from-pos":[{"mask-x-from":te()}],"mask-image-x-to-pos":[{"mask-x-to":te()}],"mask-image-x-from-color":[{"mask-x-from":O()}],"mask-image-x-to-color":[{"mask-x-to":O()}],"mask-image-y-from-pos":[{"mask-y-from":te()}],"mask-image-y-to-pos":[{"mask-y-to":te()}],"mask-image-y-from-color":[{"mask-y-from":O()}],"mask-image-y-to-color":[{"mask-y-to":O()}],"mask-image-radial":[{"mask-radial":[K,q]}],"mask-image-radial-from-pos":[{"mask-radial-from":te()}],"mask-image-radial-to-pos":[{"mask-radial-to":te()}],"mask-image-radial-from-color":[{"mask-radial-from":O()}],"mask-image-radial-to-color":[{"mask-radial-to":O()}],"mask-image-radial-shape":[{"mask-radial":["circle","ellipse"]}],"mask-image-radial-size":[{"mask-radial":[{closest:["side","corner"],farthest:["side","corner"]}]}],"mask-image-radial-pos":[{"mask-radial-at":Z()}],"mask-image-conic-pos":[{"mask-conic":[de]}],"mask-image-conic-from-pos":[{"mask-conic-from":te()}],"mask-image-conic-to-pos":[{"mask-conic-to":te()}],"mask-image-conic-from-color":[{"mask-conic-from":O()}],"mask-image-conic-to-color":[{"mask-conic-to":O()}],"mask-mode":[{mask:["alpha","luminance","match"]}],"mask-origin":[{"mask-origin":["border","padding","content","fill","stroke","view"]}],"mask-position":[{mask:re()}],"mask-repeat":[{mask:L()}],"mask-size":[{mask:k()}],"mask-type":[{"mask-type":["alpha","luminance"]}],"mask-image":[{mask:["none",K,q]}],filter:[{filter:["","none",K,q]}],blur:[{blur:ge()}],brightness:[{brightness:[de,K,q]}],contrast:[{contrast:[de,K,q]}],"drop-shadow":[{"drop-shadow":["","none",I,Xa,Ja]}],"drop-shadow-color":[{"drop-shadow":O()}],grayscale:[{grayscale:["",de,K,q]}],"hue-rotate":[{"hue-rotate":[de,K,q]}],invert:[{invert:["",de,K,q]}],saturate:[{saturate:[de,K,q]}],sepia:[{sepia:["",de,K,q]}],"backdrop-filter":[{"backdrop-filter":["","none",K,q]}],"backdrop-blur":[{"backdrop-blur":ge()}],"backdrop-brightness":[{"backdrop-brightness":[de,K,q]}],"backdrop-contrast":[{"backdrop-contrast":[de,K,q]}],"backdrop-grayscale":[{"backdrop-grayscale":["",de,K,q]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[de,K,q]}],"backdrop-invert":[{"backdrop-invert":["",de,K,q]}],"backdrop-opacity":[{"backdrop-opacity":[de,K,q]}],"backdrop-saturate":[{"backdrop-saturate":[de,K,q]}],"backdrop-sepia":[{"backdrop-sepia":["",de,K,q]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":Y()}],"border-spacing-x":[{"border-spacing-x":Y()}],"border-spacing-y":[{"border-spacing-y":Y()}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["","all","colors","opacity","shadow","transform","none",K,q]}],"transition-behavior":[{transition:["normal","discrete"]}],duration:[{duration:[de,"initial",K,q]}],ease:[{ease:["linear","initial",W,K,q]}],delay:[{delay:[de,K,q]}],animate:[{animate:["none",V,K,q]}],backface:[{backface:["hidden","visible"]}],perspective:[{perspective:[x,K,q]}],"perspective-origin":[{"perspective-origin":ce()}],rotate:[{rotate:ke()}],"rotate-x":[{"rotate-x":ke()}],"rotate-y":[{"rotate-y":ke()}],"rotate-z":[{"rotate-z":ke()}],scale:[{scale:Ge()}],"scale-x":[{"scale-x":Ge()}],"scale-y":[{"scale-y":Ge()}],"scale-z":[{"scale-z":Ge()}],"scale-3d":["scale-3d"],skew:[{skew:fn()}],"skew-x":[{"skew-x":fn()}],"skew-y":[{"skew-y":fn()}],transform:[{transform:[K,q,"","none","gpu","cpu"]}],"transform-origin":[{origin:ce()}],"transform-style":[{transform:["3d","flat"]}],translate:[{translate:In()}],"translate-x":[{"translate-x":In()}],"translate-y":[{"translate-y":In()}],"translate-z":[{"translate-z":In()}],"translate-none":["translate-none"],accent:[{accent:O()}],appearance:[{appearance:["none","auto"]}],"caret-color":[{caret:O()}],"color-scheme":[{scheme:["normal","dark","light","light-dark","only-dark","only-light"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",K,q]}],"field-sizing":[{"field-sizing":["fixed","content"]}],"pointer-events":[{"pointer-events":["auto","none"]}],resize:[{resize:["none","","y","x"]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":Y()}],"scroll-mx":[{"scroll-mx":Y()}],"scroll-my":[{"scroll-my":Y()}],"scroll-ms":[{"scroll-ms":Y()}],"scroll-me":[{"scroll-me":Y()}],"scroll-mt":[{"scroll-mt":Y()}],"scroll-mr":[{"scroll-mr":Y()}],"scroll-mb":[{"scroll-mb":Y()}],"scroll-ml":[{"scroll-ml":Y()}],"scroll-p":[{"scroll-p":Y()}],"scroll-px":[{"scroll-px":Y()}],"scroll-py":[{"scroll-py":Y()}],"scroll-ps":[{"scroll-ps":Y()}],"scroll-pe":[{"scroll-pe":Y()}],"scroll-pt":[{"scroll-pt":Y()}],"scroll-pr":[{"scroll-pr":Y()}],"scroll-pb":[{"scroll-pb":Y()}],"scroll-pl":[{"scroll-pl":Y()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",K,q]}],fill:[{fill:["none",...O()]}],"stroke-w":[{stroke:[de,ro,$r,vd]}],stroke:[{stroke:["none",...O()]}],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-x","border-w-y","border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-x","border-color-y","border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],translate:["translate-x","translate-y","translate-none"],"translate-none":["translate","translate-x","translate-y","translate-z"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]},orderSensitiveModifiers:["*","**","after","backdrop","before","details-content","file","first-letter","first-line","marker","placeholder","selection"]}},dA=VP(cA);function si(...t){return dA(kP(t))}function xD(){return Math.random().toString(36).substring(2,15)+Math.random().toString(36).substring(2,15)}function Hy(t="ID"){const e=Math.floor(1e3+Math.random()*9e3),n=Date.now().toString().slice(-4);return`${t}-${n}${e}`}const rE=T.createContext();function lf(){return T.useContext(rE)}function hA({children:t}){const[e,n]=T.useState(),[s,o]=T.useState(!0);function l(m,y){return iN(Qa,m,y)}function c(m,y){return sN(Qa,m,y)}function h(){return uN(Qa)}T.useEffect(()=>lN(Qa,y=>{n(y),o(!1)}),[]);const f={currentUser:e,signup:l,login:c,logout:h};return E.jsx(rE.Provider,{value:f,children:s?E.jsx("div",{className:"flex h-screen items-center justify-center",children:"Loading..."}):t})}const iE=T.createContext();function fA({children:t}){const{currentUser:e}=lf(),[n,s]=T.useState([]),[o,l]=T.useState([]),[c,h]=T.useState([]),[f,m]=T.useState([]),[y,_]=T.useState([]),[v,I]=T.useState([]),[N,x]=T.useState(!0),A=L=>{const k=L.val();return k?Object.entries(k).map(([D,Q])=>({id:D,...Q})):[]};T.useEffect(()=>{if(!e){s([]),l([]),h([]),m([]),_([]),I([]),x(!1);return}x(!0);const L=Ne(Pe,"cars"),k=Ne(Pe,"customers"),D=Ne(Pe,"dealers"),Q=Ne(Pe,"transactions"),ne=Ne(Pe,"maintenanceRecords"),ee=Ne(Pe,"registers");let ue=0;const te=()=>{ue++,ue>=6&&x(!1)},ge=Li(L,Et=>{s(A(Et)),te()}),ke=Li(k,Et=>{l(A(Et)),te()}),Ge=Li(D,Et=>{h(A(Et)),te()}),fn=Li(Q,Et=>{m(A(Et)),te()}),In=Li(ne,Et=>{_(A(Et)),te()}),oi=Li(ee,Et=>{I(A(Et)),te()});return()=>{ge(),ke(),Ge(),fn(),In(),oi()}},[e]);const W=L=>{Di(Ne(Pe,"cars"),L)},V=L=>{if(o.some(D=>D.phone===L.phone))throw new Error(`Customer with phone ${L.phone} already exists!`);const k={...L,uniqueId:Hy("CUST")};Di(Ne(Pe,"customers"),k)},j=L=>{if(c.some(D=>D.phone===L.phone))throw new Error(`Dealer with phone ${L.phone} already exists!`);const k={...L,uniqueId:Hy("DLR")};Di(Ne(Pe,"dealers"),k)},Z=L=>{Di(Ne(Pe,"registers"),{...L,createdAt:new Date().toISOString()})},ce=L=>{Di(Ne(Pe,"transactions"),L),Z({carId:L.carId,customerId:L.customerId,date:new Date().toISOString(),type:"Exit",notes:"Auto-generated from Rental"})},ye=(L,k)=>{dr(Ne(Pe,`cars/${L}`),k)},_e=L=>{Oi(Ne(Pe,`cars/${L}`))},Y=(L,k)=>{dr(Ne(Pe,`customers/${L}`),k)},we=L=>{Oi(Ne(Pe,`customers/${L}`))},Be=(L,k)=>{dr(Ne(Pe,`dealers/${L}`),k)},wt=L=>{Oi(Ne(Pe,`dealers/${L}`))},ut=(L,k)=>{dr(Ne(Pe,`transactions/${L}`),k)},et=L=>{Oi(Ne(Pe,`transactions/${L}`))},ct=L=>{Di(Ne(Pe,"maintenanceRecords"),L),dr(Ne(Pe,`cars/${L.carId}`),{status:"Maintenance"})},Ke=(L,k)=>{dr(Ne(Pe,`maintenanceRecords/${L}`),k),k.returnDate&&dr(Ne(Pe,`cars/${k.carId}`),{status:"Available"})},Re=L=>{Oi(Ne(Pe,`maintenanceRecords/${L}`))},Ee=L=>{y.filter(D=>D.workshopName===L).forEach(D=>{Oi(Ne(Pe,`maintenanceRecords/${D.id}`))})},O=(L,k,D,Q)=>{y.filter(ee=>ee.workshopName===L).forEach(ee=>{dr(Ne(Pe,`maintenanceRecords/${ee.id}`),{...ee,workshopName:k,workshopDetails:D||ee.workshopDetails,phoneNumber:Q||ee.phoneNumber})})},re=n.map(L=>{let k=L.status;(k==="On Rent"||k==="On Maintenance"||k==="Maintenance")&&(k="Available");const D=new Date;return D.setHours(0,0,0,0),y.some(ee=>{if(ee.carId!==L.id)return!1;const ue=new Date(ee.date);if(ue.setHours(0,0,0,0),ee.returnDate){const te=new Date(ee.returnDate);return te.setHours(23,59,59,999),D>=ue&&D<=te}return D>=ue})&&(k="On Maintenance"),f.some(ee=>{if(ee.carId!==L.id||ee.status==="Cancelled"||ee.status==="Completed")return!1;const ue=new Date,te=new Date(ee.startDate),ge=new Date(ee.endDate);return ue>=te&&ue<=ge})&&(k="On Rent"),{...L,status:k}});return E.jsx(iE.Provider,{value:{cars:re,customers:o,transactions:f,dealers:c,addCar:W,updateCar:ye,deleteCar:_e,addCustomer:V,updateCustomer:Y,deleteCustomer:we,addDealer:j,updateDealer:Be,deleteDealer:wt,addTransaction:ce,updateTransaction:ut,deleteTransaction:et,maintenanceRecords:y,addMaintenanceRecord:ct,updateMaintenanceRecord:Ke,deleteMaintenanceRecord:Re,registers:v,addRegister:Z,deleteWorkshop:Ee,renameWorkshop:O,isLoading:N},children:t})}function uf(){const t=T.useContext(iE);if(!t)throw new Error("useDriveway must be used within a DrivewayProvider");return t}/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pA=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),mA=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,n,s)=>s?s.toUpperCase():n.toLowerCase()),Gy=t=>{const e=mA(t);return e.charAt(0).toUpperCase()+e.slice(1)},sE=(...t)=>t.filter((e,n,s)=>!!e&&e.trim()!==""&&s.indexOf(e)===n).join(" ").trim(),gA=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var yA={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _A=T.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:s,className:o="",children:l,iconNode:c,...h},f)=>T.createElement("svg",{ref:f,...yA,width:e,height:e,stroke:t,strokeWidth:s?Number(n)*24/Number(e):n,className:sE("lucide",o),...!l&&!gA(h)&&{"aria-hidden":"true"},...h},[...c.map(([m,y])=>T.createElement(m,y)),...Array.isArray(l)?l:[l]]));/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ze=(t,e)=>{const n=T.forwardRef(({className:s,...o},l)=>T.createElement(_A,{ref:l,iconNode:e,className:sE(`lucide-${pA(Gy(t))}`,`lucide-${t}`,s),...o}));return n.displayName=Gy(t),n};/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vA=[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0",key:"vwvbt9"}],["path",{d:"M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",key:"11g9vi"}]],qy=Ze("bell",vA);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wA=[["path",{d:"M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2",key:"5owen"}],["circle",{cx:"7",cy:"17",r:"2",key:"u2ysq9"}],["path",{d:"M9 17h6",key:"r8uit2"}],["circle",{cx:"17",cy:"17",r:"2",key:"axvx0g"}]],EA=Ze("car",wA);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CA=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],kA=Ze("circle-alert",CA);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SA=[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}],["path",{d:"M12 11h4",key:"1jrz19"}],["path",{d:"M12 16h4",key:"n85exb"}],["path",{d:"M8 11h.01",key:"1dfujw"}],["path",{d:"M8 16h.01",key:"18s6g9"}]],IA=Ze("clipboard-list",SA);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TA=[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]],xA=Ze("download",TA);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RA=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]],bA=Ze("external-link",RA);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NA=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],Ky=Ze("file-text",NA);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PA=[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1",key:"10lvy0"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1",key:"16une8"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1",key:"1hutg5"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1",key:"ldoo1y"}]],AA=Ze("layout-dashboard",PA);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DA=[["path",{d:"m16 17 5-5-5-5",key:"1bji2h"}],["path",{d:"M21 12H9",key:"dn1m92"}],["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}]],OA=Ze("log-out",DA);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LA=[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]],MA=Ze("menu",LA);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FA=[["path",{d:"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",key:"kfwtm"}]],jA=Ze("moon",FA);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UA=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],zA=Ze("plus",UA);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $A=[["path",{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z",key:"q3az6g"}],["path",{d:"M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8",key:"1h4pet"}],["path",{d:"M12 17.5v-11",key:"1jc1ny"}]],WA=Ze("receipt",$A);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BA=[["path",{d:"M12 2v13",key:"1km8f5"}],["path",{d:"m16 6-4-4-4 4",key:"13yo43"}],["path",{d:"M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8",key:"1b2hhj"}]],VA=Ze("share",BA);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HA=[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]],GA=Ze("sun",HA);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qA=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],KA=Ze("triangle-alert",qA);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YA=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]],Yy=Ze("users",YA);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QA=[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z",key:"1ngwbx"}]],JA=Ze("wrench",QA);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XA=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Dl=Ze("x",XA);function vn({className:t,variant:e="primary",size:n="default",...s}){const o={primary:"bg-primary text-primary-foreground hover:bg-primary/90",secondary:"bg-surface text-text hover:bg-surface/80 dark:bg-surface-dark dark:text-text-dark",outline:"border border-input bg-background hover:bg-surface hover:text-text dark:bg-background-dark dark:hover:bg-surface-dark",ghost:"hover:bg-surface hover:text-text dark:hover:bg-surface-dark",link:"text-primary underline-offset-4 hover:underline"},l={default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"};return E.jsx("button",{className:si("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",o[e],l[n],t),...s})}function Fi({className:t,type:e,...n}){return E.jsx("input",{type:e,className:si("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-surface-dark dark:text-text-dark dark:border-surface",t),...n})}const oE=T.forwardRef(({className:t,isOpen:e,onClose:n,children:s,...o},l)=>E.jsxs(E.Fragment,{children:[e&&E.jsx("div",{className:"fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",onClick:n}),E.jsxs("div",{ref:l,className:si("fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500 inset-y-0 right-0 h-full w-3/4 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm overflow-y-auto",e?"translate-x-0":"translate-x-full",t),...o,children:[E.jsxs("button",{className:"absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary",onClick:n,children:[E.jsx(Dl,{className:"h-4 w-4"}),E.jsx("span",{className:"sr-only",children:"Close"})]}),s]})]}));oE.displayName="Sheet";const aE=({className:t,...e})=>E.jsx("div",{className:si("flex flex-col space-y-2 text-center sm:text-left",t),...e});aE.displayName="SheetHeader";const lE=T.forwardRef(({className:t,...e},n)=>E.jsx("h2",{ref:n,className:si("text-lg font-semibold text-foreground",t),...e}));lE.displayName="SheetTitle";function ZA({isOpen:t,onClose:e,preSelectedCarId:n}){const{cars:s,customers:o,dealers:l,addTransaction:c,updateCar:h,transactions:f}=uf(),[m,y]=T.useState({carId:n||"",customerId:"",dealerId:"",startDate:"",endDate:"",notes:"",paymentStatus:"Pending",dailyRate:"",endDate:"",notes:"",paymentStatus:"Pending",dailyRate:"",paymentStatus:"Pending",dailyRate:"",mileage:"",discount:""}),[_,v]=T.useState({total:0,breakdown:[]}),I=s.find(x=>x.id===m.carId);T.useEffect(()=>{n&&y(x=>({...x,carId:n}))},[n,t]),T.useEffect(()=>{I&&y(x=>!x.dailyRate&&!x.mileage&&x.mileage!==0?{...x,dailyRate:I.price,mileage:I.mileage||""}:x)},[I]),T.useEffect(()=>{if(m.startDate&&m.endDate&&I){const x=new Date(m.startDate),A=new Date(m.endDate),W=Math.abs(A-x),V=Math.ceil(W/(1e3*60*60*24));let j=0,Z=[];const ce=m.dailyRate?parseFloat(m.dailyRate):I.price;if(V>0)if(V>=20&&I.monthlyPrice){const _e=I.monthlyPrice/30;j=Math.round(_e*V+300),Z.push({label:`Long Term Rate (>=20 days) (${V} days @ ₹${Math.round(_e)}/day + ₹300)`,amount:j})}else if(V>=10&&I.tenDayPrice){const _e=I.tenDayPrice/10;j=Math.round(_e*V),Z.push({label:`10-Day Rate Applied (${V} days @ ₹${Math.round(_e)}/day)`,amount:j})}else j=Math.round(ce*V),Z.push({label:`Standard Daily Rate (${V} days @ ₹${ce}/day)`,amount:j});const ye=m.discount?parseFloat(m.discount):0;ye>0&&(Z.push({label:"Discount",amount:-ye}),j=Math.max(0,j-ye)),v({total:j,breakdown:Z})}else v({total:0,breakdown:[]})},[m.startDate,m.endDate,I,m.dailyRate,m.discount]);const N=x=>{if(x.preventDefault(),!I)return;const A=new Date(m.startDate),W=new Date(m.endDate);if(f.some(j=>{if(j.carId!==I.id||j.status==="Cancelled")return!1;const Z=new Date(j.startDate),ce=new Date(j.endDate);return A>=Z&&A<=ce||W>=Z&&W<=ce||A<=Z&&W>=ce})){alert("This car is already rented for the selected dates!");return}console.log("GlobalRentalDrawer Mileage check:",m.mileage),m.mileage!==""&&m.mileage!==null&&m.mileage!==void 0&&(console.log("GlobalRentalDrawer Updating mileage to:",m.mileage),h(I.id,{mileage:parseInt(m.mileage)})),c({carId:I.id,customerId:m.customerId,dealerId:m.dealerId?m.dealerId:null,startDate:m.startDate,endDate:m.endDate,total:_.total,status:"Active",paymentStatus:m.paymentStatus,notes:m.notes,breakdown:_.breakdown,dailyRate:m.dailyRate,breakdown:_.breakdown,dailyRate:m.dailyRate,startMileage:m.mileage,discount:m.discount}),e(),y({carId:"",customerId:"",dealerId:"",startDate:"",endDate:"",notes:"",paymentStatus:"Pending",dailyRate:"",mileage:"",discount:""})};return E.jsxs(oE,{isOpen:t,onClose:e,children:[E.jsx(aE,{children:E.jsx(lE,{children:"New Rental"})}),E.jsx("div",{className:"mt-6",children:E.jsxs("form",{onSubmit:N,className:"space-y-4",children:[E.jsxs("div",{className:"space-y-2",children:[E.jsx("label",{className:"text-sm font-medium",children:"Car"}),E.jsxs("select",{className:"flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-surface-dark dark:text-text-dark dark:border-surface",value:m.carId,onChange:x=>y({...m,carId:x.target.value,carId:x.target.value,dailyRate:"",mileage:"",discount:""}),required:!0,children:[E.jsx("option",{value:"",children:"Select Car"}),s.map(x=>E.jsxs("option",{value:x.id,disabled:x.status==="Maintenance"||x.status==="Rented",children:[x.make," ",x.model," (",x.status,")"]},x.id))]})]}),E.jsxs("div",{className:"space-y-2",children:[E.jsx("label",{className:"text-sm font-medium",children:"Customer"}),E.jsxs("select",{className:"flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-surface-dark dark:text-text-dark dark:border-surface",value:m.customerId,onChange:x=>y({...m,customerId:x.target.value}),required:!0,children:[E.jsx("option",{value:"",children:"Select Customer"}),o.map(x=>E.jsx("option",{value:x.id,children:x.name},x.id))]})]}),E.jsxs("div",{className:"space-y-2",children:[E.jsx("label",{className:"text-sm font-medium",children:"Dealer (Optional)"}),E.jsxs("select",{className:"flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-surface-dark dark:text-text-dark dark:border-surface",value:m.dealerId,onChange:x=>y({...m,dealerId:x.target.value}),children:[E.jsx("option",{value:"",children:"Select Dealer"}),l.map(x=>E.jsx("option",{value:x.id,children:x.name},x.id))]})]}),E.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[E.jsxs("div",{className:"space-y-2",children:[E.jsx("label",{className:"text-sm font-medium",children:"Start Date & Time"}),E.jsx(Fi,{type:"datetime-local",value:m.startDate,onChange:x=>y({...m,startDate:x.target.value}),required:!0})]}),E.jsxs("div",{className:"space-y-2",children:[E.jsx("label",{className:"text-sm font-medium",children:"End Date & Time"}),E.jsx(Fi,{type:"datetime-local",value:m.endDate,onChange:x=>y({...m,endDate:x.target.value}),required:!0})]})]}),E.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[E.jsxs("div",{className:"space-y-2",children:[E.jsx("label",{className:"text-sm font-medium",children:"Per Day Amount"}),E.jsx(Fi,{type:"number",value:m.dailyRate,onChange:x=>y({...m,dailyRate:x.target.value}),placeholder:"Enter daily rate"})]}),E.jsxs("div",{className:"space-y-2",children:[E.jsx("label",{className:"text-sm font-medium",children:"Current Mileage"}),E.jsx(Fi,{type:"number",value:m.mileage,onChange:x=>y({...m,mileage:x.target.value}),placeholder:"Starting mileage"})]})]}),E.jsxs("div",{className:"space-y-2",children:[E.jsx("label",{className:"text-sm font-medium",children:"Discount Amount"}),E.jsx(Fi,{type:"number",value:m.discount,onChange:x=>y({...m,discount:x.target.value}),placeholder:"Enter discount amount"})]}),E.jsxs("div",{className:"space-y-2",children:[E.jsx("label",{className:"text-sm font-medium",children:"Payment Status"}),E.jsxs("select",{className:"flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-surface-dark dark:text-text-dark dark:border-surface",value:m.paymentStatus,onChange:x=>y({...m,paymentStatus:x.target.value}),children:[E.jsx("option",{value:"Pending",children:"Pending"}),E.jsx("option",{value:"Paid",children:"Paid"}),E.jsx("option",{value:"Pay on Arrival",children:"Pay on Arrival"})]})]}),E.jsxs("div",{className:"space-y-2",children:[E.jsx("label",{className:"text-sm font-medium",children:"Notes"}),E.jsx(Fi,{placeholder:"Additional notes...",value:m.notes,onChange:x=>y({...m,notes:x.target.value})})]}),E.jsxs("div",{className:"bg-surface dark:bg-surface-dark p-4 rounded-lg space-y-2",children:[E.jsx("div",{className:"flex justify-between items-center mb-2",children:E.jsx("span",{className:"text-sm font-medium",children:"Price Breakdown"})}),_.breakdown.length>0?E.jsxs("div",{className:"space-y-1",children:[_.breakdown.map((x,A)=>E.jsxs("div",{className:"flex justify-between text-sm text-muted-foreground",children:[E.jsx("span",{children:x.label}),E.jsxs("span",{children:["₹",x.amount]})]},A)),E.jsxs("div",{className:"border-t pt-2 mt-2 flex justify-between text-sm font-bold",children:[E.jsx("span",{children:"Total"}),E.jsxs("span",{children:["₹",_.total]})]})]}):E.jsx("p",{className:"text-xs text-muted-foreground",children:"Select car and dates to see price breakdown."})]}),E.jsx(vn,{type:"submit",className:"w-full",children:"Create Rental"})]})})]})}function eD(){const{cars:t,transactions:e}=uf(),n=T.useMemo(()=>{const o=[],l=new Date,c=new Date;c.setDate(l.getDate()+7),t.forEach(f=>{const m=(y,_)=>{if(!y)return;const v=new Date(y);if(v<=c){const I=Math.ceil((v-l)/864e5);let N="";I<0?N=`${_} Expired on ${v.toLocaleDateString()}`:I===0?N=`${_} Expires TODAY`:N=`${_} Expires in ${I} days`,o.push({id:`expiry-${f.id}-${_}`,type:"expiry",severity:I<=0?"destructive":"warning",title:`${f.make} ${f.model} (${f.plateNumber})`,message:N,link:`/cars/${f.id}`,date:y})}};m(f.insuranceValidTo,"Insurance"),m(f.taxValidTo,"Tax"),m(f.fitnessValidTo,"Fitness")});const h=new Date;return h.setDate(l.getDate()-15),e.forEach(f=>{if(f.status==="Cancelled")return;let m=0;f.payments?m=f.payments.reduce((v,I)=>I.type==="Credit"?v+Number(I.amount):v-Number(I.amount),0):f.amountPaid&&(m=Number(f.amountPaid));const _=(Number(f.total)||0)-m;if(_>10){const v=new Date(f.endDate);if(v<h){const I=Math.floor((l-v)/864e5),N=t.find(A=>A.id===f.carId),x=N?`${N.make} ${N.model}`:"Unknown Car";o.push({id:`overdue-${f.id}`,type:"payment",severity:"destructive",title:`Payment Overdue: ${x}`,message:`₹${_.toLocaleString()} pending. Due since ${I} days.`,link:"/transactions",actionData:f,date:f.endDate})}}}),o.sort((f,m)=>f.severity===m.severity?0:f.severity==="destructive"?-1:1)},[t,e]),s=n.length;return{notifications:n,unreadCount:s}}function Qy(){const{notifications:t,unreadCount:e}=eD(),[n,s]=T.useState(!1),o=T.useRef(null),l=Ll();T.useEffect(()=>{const h=f=>{o.current&&!o.current.contains(f.target)&&s(!1)};return document.addEventListener("mousedown",h),()=>document.removeEventListener("mousedown",h)},[]);const c=h=>{s(!1),h&&l(h)};return E.jsxs("div",{className:"relative",ref:o,children:[E.jsxs(vn,{variant:"ghost",size:"icon",className:"relative",onClick:()=>s(!n),"aria-label":"Notifications",children:[E.jsx(qy,{size:20}),e>0&&E.jsx("span",{className:"absolute top-1 right-2 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-background animate-pulse"})]}),n&&E.jsxs("div",{className:"absolute right-0 mt-2 w-80 md:w-96 bg-background dark:bg-surface-dark border border-border shadow-xl rounded-lg z-50 overflow-hidden animate-in fade-in zoom-in-95 duration-200",children:[E.jsxs("div",{className:"flex items-center justify-between p-4 border-b bg-muted/30",children:[E.jsx("h3",{className:"font-semibold",children:"Notifications"}),E.jsxs("span",{className:"text-xs text-muted-foreground",children:[e," Issues"]})]}),E.jsx("div",{className:"max-h-[70vh] overflow-y-auto",children:t.length===0?E.jsxs("div",{className:"p-8 text-center text-muted-foreground",children:[E.jsx(qy,{className:"mx-auto h-8 w-8 mb-2 opacity-50"}),E.jsx("p",{className:"text-sm",children:"No new notifications"})]}):E.jsx("div",{className:"divide-y",children:t.map(h=>E.jsxs("div",{className:si("p-4 hover:bg-muted/50 transition-colors cursor-pointer flex gap-3 items-start",h.severity==="destructive"?"bg-red-50/50 dark:bg-red-950/10":""),onClick:()=>c(h.link),children:[E.jsx("div",{className:"mt-1",children:h.severity==="destructive"?E.jsx(kA,{className:"h-5 w-5 text-destructive"}):E.jsx(KA,{className:"h-5 w-5 text-yellow-500"})}),E.jsxs("div",{className:"flex-1 space-y-1",children:[E.jsx("p",{className:"text-sm font-medium leading-none",children:h.title}),E.jsx("p",{className:"text-xs text-muted-foreground",children:h.message})]}),h.link&&E.jsx(bA,{className:"h-4 w-4 text-muted-foreground opacity-50"})]},h.id))})})]})]})}function tD({children:t}){const[e,n]=T.useState(!1),[s,o]=T.useState(!1),[l,c]=T.useState(!1),h=Hn(),f=Ll(),{logout:m}=lf(),{isLoading:y}=uf();async function _(){try{await m(),f("/login")}catch(N){console.error("Failed to log out",N)}}T.useEffect(()=>{e?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark")},[e]),T.useEffect(()=>{c(!1)},[h.pathname]);const v=[{icon:AA,label:"Dashboard",path:"/"},{icon:EA,label:"Cars",path:"/cars"},{icon:Yy,label:"Customers",path:"/customers"},{icon:Yy,label:"Dealers",path:"/dealers"},{icon:Ky,label:"Rentals",path:"/transactions"},{icon:WA,label:"Financials",path:"/financials"},{icon:JA,label:"Maintenance",path:"/maintenance"},{icon:IA,label:"Register",path:"/register"},{icon:Ky,label:"Billing App",path:"/billing"}],I=()=>E.jsxs("div",{className:"flex flex-col h-full",children:[E.jsxs("div",{className:"p-6 flex justify-between items-center",children:[E.jsxs("div",{className:"flex items-center gap-3",children:[E.jsx("img",{src:"/DriveWay/logo.png",alt:"Driveway",className:"h-8 w-8 object-contain"}),E.jsx("h1",{className:"text-2xl font-bold text-primary",children:"Driveway"})]}),E.jsx(vn,{variant:"ghost",size:"icon",className:"md:hidden",onClick:()=>c(!1),children:E.jsx(Dl,{size:20})})]}),E.jsx("div",{className:"px-4 mb-4",children:E.jsxs(vn,{className:"w-full justify-start gap-2",onClick:()=>o(!0),children:[E.jsx(zA,{size:20}),"New Rental"]})}),E.jsx("nav",{className:"flex-1 px-4 space-y-2 overflow-y-auto",children:v.map(N=>{const x=N.icon,A=h.pathname===N.path;return E.jsxs(rh,{to:N.path,className:si("flex items-center gap-3 px-4 py-3 rounded-lg transition-colors",A?"bg-primary/10 text-primary":"text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"),children:[E.jsx(x,{size:20}),E.jsx("span",{className:"font-medium",children:N.label})]},N.path)})}),E.jsxs("div",{className:"p-4 border-t border-gray-200 dark:border-gray-800",children:[E.jsxs(vn,{variant:"ghost",className:"w-full justify-start gap-3",onClick:()=>n(!e),children:[e?E.jsx(GA,{size:20}):E.jsx(jA,{size:20}),E.jsx("span",{children:e?"Light Mode":"Dark Mode"})]}),E.jsxs(vn,{variant:"ghost",className:"w-full justify-start gap-3 mt-2 text-destructive hover:text-destructive hover:bg-destructive/10",onClick:_,children:[E.jsx(OA,{size:20}),E.jsx("span",{children:"Log Out"})]})]})]});return y?E.jsx("div",{className:"min-h-screen bg-surface dark:bg-background-dark flex items-center justify-center",children:E.jsxs("div",{className:"flex flex-col items-center gap-4",children:[E.jsx("img",{src:"/DriveWay/logo.png",alt:"Loading...",className:"h-16 w-16 animate-pulse object-contain"}),E.jsx("p",{className:"text-muted-foreground animate-pulse",children:"Loading..."})]})}):E.jsxs("div",{className:"min-h-screen bg-surface dark:bg-background-dark flex flex-col md:flex-row",children:[E.jsxs("div",{className:"md:hidden bg-background dark:bg-surface-dark border-b border-gray-200 dark:border-gray-800 p-4 flex justify-between items-center sticky top-0 z-20",children:[E.jsxs("div",{className:"flex items-center gap-3",children:[E.jsx("img",{src:"/DriveWay/logo.png",alt:"Driveway",className:"h-8 w-8 object-contain"}),E.jsx("h1",{className:"text-2xl font-bold text-primary",children:"Driveway"})]}),E.jsxs("div",{className:"flex items-center gap-2",children:[E.jsx(Qy,{}),E.jsx(vn,{variant:"ghost",size:"icon",onClick:()=>c(!0),children:E.jsx(MA,{size:24})})]})]}),E.jsx("aside",{className:"hidden md:flex w-64 bg-background dark:bg-surface-dark border-r border-gray-200 dark:border-gray-800 flex-col sticky top-0 h-screen",children:E.jsx(I,{})}),l&&E.jsxs("div",{className:"fixed inset-0 z-50 md:hidden",children:[E.jsx("div",{className:"absolute inset-0 bg-black/50",onClick:()=>c(!1)}),E.jsx("div",{className:"absolute left-0 top-0 bottom-0 w-64 bg-background dark:bg-surface-dark shadow-xl animate-in slide-in-from-left",children:E.jsx(I,{})})]}),E.jsxs("main",{className:"flex-1 overflow-auto w-full relative",children:[E.jsx("div",{className:"hidden md:flex justify-end px-8 pt-6",children:E.jsx(Qy,{})}),E.jsx("div",{className:"p-4 md:p-8 max-w-7xl mx-auto pt-4 md:pt-2",children:t})]}),E.jsx(ZA,{isOpen:s,onClose:()=>o(!1)})]})}function nD(){const[t,e]=T.useState(null),[n,s]=T.useState(!1),[o,l]=T.useState(!1);T.useEffect(()=>{window.matchMedia("(display-mode: standalone)").matches&&l(!0);const f=y=>{y.preventDefault(),e(y)};return window.addEventListener("beforeinstallprompt",f),/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream&&!window.matchMedia("(display-mode: standalone)").matches&&(sessionStorage.getItem("iosInstallDismissed")||s(!0)),()=>{window.removeEventListener("beforeinstallprompt",f)}},[]);const c=async()=>{if(!t)return;t.prompt();const{outcome:f}=await t.userChoice;f==="accepted"&&e(null)},h=()=>{s(!1),sessionStorage.setItem("iosInstallDismissed","true")};return o?null:t?E.jsx("div",{className:"fixed bottom-4 left-4 right-4 z-50 bg-surface dark:bg-surface-dark border border-primary/20 shadow-lg rounded-lg p-4 animate-in slide-in-from-bottom duration-300",children:E.jsxs("div",{className:"flex items-center justify-between gap-4",children:[E.jsxs("div",{className:"flex-1",children:[E.jsx("h3",{className:"font-semibold text-primary",children:"Install Driveway"}),E.jsx("p",{className:"text-sm text-muted-foreground",children:"Install our app for a better experience"})]}),E.jsxs("div",{className:"flex gap-2",children:[E.jsx(vn,{variant:"ghost",size:"icon",onClick:()=>e(null),children:E.jsx(Dl,{className:"h-4 w-4"})}),E.jsxs(vn,{onClick:c,className:"gap-2",children:[E.jsx(xA,{className:"h-4 w-4"})," Install"]})]})]})}):n?E.jsx("div",{className:"fixed bottom-0 left-0 right-0 z-50 bg-surface dark:bg-surface-dark border-t border-gray-200 dark:border-gray-800 p-4 shadow-lg animate-in slide-in-from-bottom duration-300 pb-8",children:E.jsxs("div",{className:"max-w-md mx-auto relative",children:[E.jsx(vn,{variant:"ghost",size:"icon",className:"absolute -top-2 right-0",onClick:h,children:E.jsx(Dl,{className:"h-4 w-4"})}),E.jsxs("div",{className:"flex items-start gap-4 pr-8",children:[E.jsx("div",{className:"bg-primary/10 p-3 rounded-xl",children:E.jsx(VA,{className:"h-6 w-6 text-primary"})}),E.jsxs("div",{children:[E.jsx("h3",{className:"font-semibold text-lg mb-1",children:"Install Driveway"}),E.jsxs("p",{className:"text-sm text-muted-foreground leading-relaxed",children:["To install this app on your iPhone, tap the ",E.jsx("span",{className:"font-bold",children:"Share"})," icon below and select ",E.jsx("span",{className:"font-bold",children:'"Add to Home Screen"'}),"."]})]})]}),E.jsx("div",{className:"absolute -bottom-8 left-1/2 -translate-x-1/2 w-4 h-4 bg-surface dark:bg-surface-dark rotate-45 border-b border-r border-gray-200 dark:border-gray-800"})]})}):null}function rD({children:t}){const{currentUser:e}=lf();return e?t:E.jsx(ak,{to:"/login"})}const iD=T.lazy(()=>mt(()=>import("./Dashboard-CqXmQl2t.js"),__vite__mapDeps([0,1,2])).then(t=>({default:t.Dashboard}))),sD=T.lazy(()=>mt(()=>import("./Cars-KVfoCloS.js"),__vite__mapDeps([3,1,4,5,6,7])).then(t=>({default:t.Cars}))),oD=T.lazy(()=>mt(()=>import("./CarDetails-B-6ep5jc.js"),__vite__mapDeps([8,1,9,4,10,11,12,13,14,2])).then(t=>({default:t.CarDetails}))),aD=T.lazy(()=>mt(()=>import("./Customers-BoWKKo2i.js"),__vite__mapDeps([15,1,16,10,11,12,13,17,18,19,14,20])).then(t=>({default:t.Customers}))),lD=T.lazy(()=>mt(()=>import("./CustomerDetailsPage-BaRL_ZsD.js"),__vite__mapDeps([21,1,10,11,12,13,22,19,23,24,18,14])).then(t=>({default:t.CustomerDetailsPage}))),uD=T.lazy(()=>mt(()=>import("./Dealers-gRshNCl7.js"),__vite__mapDeps([25,1,16,10,11,12,13,17,14,20,19])).then(t=>({default:t.Dealers}))),cD=T.lazy(()=>mt(()=>import("./DealerDetailsPage-BCWjmR9e.js"),__vite__mapDeps([26,1,10,11,12,13,22,23,24,7,14])).then(t=>({default:t.DealerDetailsPage}))),dD=T.lazy(()=>mt(()=>import("./Transactions-CBBrNqL7.js"),__vite__mapDeps([27,1,10,11,12,13,14])).then(t=>({default:t.Transactions}))),hD=T.lazy(()=>mt(()=>import("./Financials-ChzQgp9f.js"),__vite__mapDeps([28,1,11,17,5])).then(t=>({default:t.Financials}))),fD=T.lazy(()=>mt(()=>import("./Maintenance-CDo-ATo2.js"),__vite__mapDeps([29,1,9,6,14,20,24,30])).then(t=>({default:t.Maintenance}))),pD=T.lazy(()=>mt(()=>import("./Register-DaVs11tm.js"),__vite__mapDeps([31,1,11,30,22])).then(t=>({default:t.Register}))),mD=T.lazy(()=>mt(()=>import("./Login-D08UE2-K.js"),__vite__mapDeps([32,1])).then(t=>({default:t.Login}))),gD=T.lazy(()=>mt(()=>import("./Signup-D19HBosv.js"),__vite__mapDeps([33,1,13])).then(t=>({default:t.Signup}))),yD=T.lazy(()=>mt(()=>import("./BillingDashboard-D_E31HTv.js"),__vite__mapDeps([34,1])).then(t=>({default:t.BillingDashboard}))),_D=T.lazy(()=>mt(()=>import("./CreateInvoice-ZfD3zYnP.js"),__vite__mapDeps([35,1,12,36,37,20])).then(t=>({default:t.CreateInvoice}))),vD=T.lazy(()=>mt(()=>import("./BillingHistory-D0Txedib.js"),__vite__mapDeps([38,1,12,36,22,5,20])).then(t=>({default:t.BillingHistory}))),wD=T.lazy(()=>mt(()=>import("./BillingSettings-RCGpFGwM.js"),__vite__mapDeps([39,1,22,37])).then(t=>({default:t.BillingSettings}))),Jy=()=>E.jsx("div",{className:"flex items-center justify-center p-8 w-full h-full min-h-[50vh]",children:E.jsxs("div",{className:"flex flex-col items-center gap-2",children:[E.jsx("div",{className:"h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent"}),E.jsx("p",{className:"text-sm text-muted-foreground",children:"Loading page..."})]})});function ED(){return E.jsx(hA,{children:E.jsx(fA,{children:E.jsx(Pk,{basename:"/DriveWay/",children:E.jsxs(T.Suspense,{fallback:E.jsx(Jy,{}),children:[E.jsxs(_g,{children:[E.jsx(Xe,{path:"/login",element:E.jsx(mD,{})}),E.jsx(Xe,{path:"/signup",element:E.jsx(gD,{})}),E.jsx(Xe,{path:"/*",element:E.jsx(rD,{children:E.jsx(tD,{children:E.jsx(T.Suspense,{fallback:E.jsx(Jy,{}),children:E.jsxs(_g,{children:[E.jsx(Xe,{path:"/",element:E.jsx(iD,{})}),E.jsx(Xe,{path:"/cars",element:E.jsx(sD,{})}),E.jsx(Xe,{path:"/cars/:id",element:E.jsx(oD,{})}),E.jsx(Xe,{path:"/customers",element:E.jsx(aD,{})}),E.jsx(Xe,{path:"/customers/:id",element:E.jsx(lD,{})}),E.jsx(Xe,{path:"/dealers",element:E.jsx(uD,{})}),E.jsx(Xe,{path:"/dealers/:id",element:E.jsx(cD,{})}),E.jsx(Xe,{path:"/transactions",element:E.jsx(dD,{})}),E.jsx(Xe,{path:"/financials",element:E.jsx(hD,{})}),E.jsx(Xe,{path:"/maintenance",element:E.jsx(fD,{})}),E.jsx(Xe,{path:"/register",element:E.jsx(pD,{})}),E.jsx(Xe,{path:"/billing",element:E.jsx(yD,{})}),E.jsx(Xe,{path:"/billing/create",element:E.jsx(_D,{})}),E.jsx(Xe,{path:"/billing/history",element:E.jsx(vD,{})}),E.jsx(Xe,{path:"/billing/settings",element:E.jsx(wD,{})})]})})})})})]}),E.jsx(nD,{})]})})})})}class CD extends Yd.Component{constructor(e){super(e),this.state={hasError:!1,error:null,errorInfo:null}}static getDerivedStateFromError(e){return{hasError:!0}}componentDidCatch(e,n){this.setState({error:e,errorInfo:n}),console.error("Uncaught error:",e,n)}render(){return this.state.hasError?E.jsxs("div",{style:{padding:"20px",fontFamily:"system-ui"},children:[E.jsx("h1",{style:{color:"red"},children:"Something went wrong."}),E.jsxs("details",{style:{whiteSpace:"pre-wrap"},children:[this.state.error&&this.state.error.toString(),E.jsx("br",{}),this.state.errorInfo&&this.state.errorInfo.componentStack]})]}):this.props.children}}mC.createRoot(document.getElementById("root")).render(E.jsx(Yd.StrictMode,{children:E.jsx(CD,{children:E.jsx(ED,{})})}));export{vn as B,EA as C,Ky as F,ZA as G,Fi as I,rh as L,zA as P,ID as R,oE as S,Yy as U,JA as W,Dl as X,mt as _,T as a,kP as b,Ze as c,Kd as d,lf as e,Ll as f,Xy as g,si as h,TD as i,E as j,aE as k,lE as l,xD as m,kA as n,Hn as o,SD as p,kD as q,hC as r,Yd as s,uf as u};
