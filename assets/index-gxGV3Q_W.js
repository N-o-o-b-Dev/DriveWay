const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/Dashboard-CYcT_-_c.js","assets/Card-CzXmBwuc.js","assets/Cars-SZ3I51Cm.js","assets/EditCarDrawer-DiR-EBLH.js","assets/Dialog-ElIb6C4p.js","assets/square-pen-UbYTflp1.js","assets/CarDetails-CNF6GGrX.js","assets/EditMaintenanceDrawer-DKW2OndD.js","assets/EditTransactionDrawer-CGRAftJb.js","assets/Table-D6RVhYMa.js","assets/Customers-BxyPmZ8R.js","assets/PendingTransactionsDrawer-DQT7MC-S.js","assets/arrow-up-right-DsOB766c.js","assets/store-CyLcTACd.js","assets/user-CEBFMmOL.js","assets/trash-2-DWU8ExzB.js","assets/CustomerDetailsPage-DBUYHh5h.js","assets/mail-CvDTTwmE.js","assets/phone-D0rg1SM1.js","assets/Dealers-DXqbqdT6.js","assets/DealerDetailsPage-r-ZxyBtT.js","assets/Transactions-B-T2XS7h.js","assets/Financials-BSUq7rnf.js","assets/Maintenance-CC1v1bR9.js","assets/Login-Br9OqS2K.js","assets/circle-alert-BXoNx2DH.js","assets/Signup-BtuRLqT8.js"])))=>i.map(i=>d[i]);
function nC(n,e){for(var t=0;t<e.length;t++){const s=e[t];if(typeof s!="string"&&!Array.isArray(s)){for(const o in s)if(o!=="default"&&!(o in n)){const l=Object.getOwnPropertyDescriptor(s,o);l&&Object.defineProperty(n,o,l.get?l:{enumerable:!0,get:()=>s[o]})}}}return Object.freeze(Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();var oD=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Ky(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}function aD(n){if(Object.prototype.hasOwnProperty.call(n,"__esModule"))return n;var e=n.default;if(typeof e=="function"){var t=function s(){return this instanceof s?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};t.prototype=e.prototype}else t={};return Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(n).forEach(function(s){var o=Object.getOwnPropertyDescriptor(n,s);Object.defineProperty(t,s,o.get?o:{enumerable:!0,get:function(){return n[s]}})}),t}var qc={exports:{}},Gs={},Kc={exports:{}},fe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ng;function rC(){if(ng)return fe;ng=1;var n=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),c=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),_=Symbol.iterator;function v(I){return I===null||typeof I!="object"?null:(I=_&&I[_]||I["@@iterator"],typeof I=="function"?I:null)}var R={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},S=Object.assign,O={};function D(I,A,q){this.props=I,this.context=A,this.refs=O,this.updater=q||R}D.prototype.isReactComponent={},D.prototype.setState=function(I,A){if(typeof I!="object"&&typeof I!="function"&&I!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,I,A,"setState")},D.prototype.forceUpdate=function(I){this.updater.enqueueForceUpdate(this,I,"forceUpdate")};function j(){}j.prototype=D.prototype;function H(I,A,q){this.props=I,this.context=A,this.refs=O,this.updater=q||R}var U=H.prototype=new j;U.constructor=H,S(U,D.prototype),U.isPureReactComponent=!0;var ne=Array.isArray,he=Object.prototype.hasOwnProperty,Se={current:null},Ie={key:!0,ref:!0,__self:!0,__source:!0};function X(I,A,q){var te,ue={},ge=null,ae=null;if(A!=null)for(te in A.ref!==void 0&&(ae=A.ref),A.key!==void 0&&(ge=""+A.key),A)he.call(A,te)&&!Ie.hasOwnProperty(te)&&(ue[te]=A[te]);var _e=arguments.length-2;if(_e===1)ue.children=q;else if(1<_e){for(var ce=Array(_e),Xe=0;Xe<_e;Xe++)ce[Xe]=arguments[Xe+2];ue.children=ce}if(I&&I.defaultProps)for(te in _e=I.defaultProps,_e)ue[te]===void 0&&(ue[te]=_e[te]);return{$$typeof:n,type:I,key:ge,ref:ae,props:ue,_owner:Se.current}}function we(I,A){return{$$typeof:n,type:I.type,key:A,ref:I.ref,props:I.props,_owner:I._owner}}function Be(I){return typeof I=="object"&&I!==null&&I.$$typeof===n}function yt(I){var A={"=":"=0",":":"=2"};return"$"+I.replace(/[=:]/g,function(q){return A[q]})}var at=/\/+/g;function Je(I,A){return typeof I=="object"&&I!==null&&I.key!=null?yt(""+I.key):A.toString(36)}function lt(I,A,q,te,ue){var ge=typeof I;(ge==="undefined"||ge==="boolean")&&(I=null);var ae=!1;if(I===null)ae=!0;else switch(ge){case"string":case"number":ae=!0;break;case"object":switch(I.$$typeof){case n:case e:ae=!0}}if(ae)return ae=I,ue=ue(ae),I=te===""?"."+Je(ae,0):te,ne(ue)?(q="",I!=null&&(q=I.replace(at,"$&/")+"/"),lt(ue,A,q,"",function(Xe){return Xe})):ue!=null&&(Be(ue)&&(ue=we(ue,q+(!ue.key||ae&&ae.key===ue.key?"":(""+ue.key).replace(at,"$&/")+"/")+I)),A.push(ue)),1;if(ae=0,te=te===""?".":te+":",ne(I))for(var _e=0;_e<I.length;_e++){ge=I[_e];var ce=te+Je(ge,_e);ae+=lt(ge,A,q,ce,ue)}else if(ce=v(I),typeof ce=="function")for(I=ce.call(I),_e=0;!(ge=I.next()).done;)ge=ge.value,ce=te+Je(ge,_e++),ae+=lt(ge,A,q,ce,ue);else if(ge==="object")throw A=String(I),Error("Objects are not valid as a React child (found: "+(A==="[object Object]"?"object with keys {"+Object.keys(I).join(", ")+"}":A)+"). If you meant to render a collection of children, use an array instead.");return ae}function qe(I,A,q){if(I==null)return I;var te=[],ue=0;return lt(I,te,"","",function(ge){return A.call(q,ge,ue++)}),te}function Re(I){if(I._status===-1){var A=I._result;A=A(),A.then(function(q){(I._status===0||I._status===-1)&&(I._status=1,I._result=q)},function(q){(I._status===0||I._status===-1)&&(I._status=2,I._result=q)}),I._status===-1&&(I._status=0,I._result=A)}if(I._status===1)return I._result.default;throw I._result}var $={current:null},P={transition:null},V={ReactCurrentDispatcher:$,ReactCurrentBatchConfig:P,ReactCurrentOwner:Se};function B(){throw Error("act(...) is not supported in production builds of React.")}return fe.Children={map:qe,forEach:function(I,A,q){qe(I,function(){A.apply(this,arguments)},q)},count:function(I){var A=0;return qe(I,function(){A++}),A},toArray:function(I){return qe(I,function(A){return A})||[]},only:function(I){if(!Be(I))throw Error("React.Children.only expected to receive a single React element child.");return I}},fe.Component=D,fe.Fragment=t,fe.Profiler=o,fe.PureComponent=H,fe.StrictMode=s,fe.Suspense=f,fe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=V,fe.act=B,fe.cloneElement=function(I,A,q){if(I==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+I+".");var te=S({},I.props),ue=I.key,ge=I.ref,ae=I._owner;if(A!=null){if(A.ref!==void 0&&(ge=A.ref,ae=Se.current),A.key!==void 0&&(ue=""+A.key),I.type&&I.type.defaultProps)var _e=I.type.defaultProps;for(ce in A)he.call(A,ce)&&!Ie.hasOwnProperty(ce)&&(te[ce]=A[ce]===void 0&&_e!==void 0?_e[ce]:A[ce])}var ce=arguments.length-2;if(ce===1)te.children=q;else if(1<ce){_e=Array(ce);for(var Xe=0;Xe<ce;Xe++)_e[Xe]=arguments[Xe+2];te.children=_e}return{$$typeof:n,type:I.type,key:ue,ref:ge,props:te,_owner:ae}},fe.createContext=function(I){return I={$$typeof:c,_currentValue:I,_currentValue2:I,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},I.Provider={$$typeof:l,_context:I},I.Consumer=I},fe.createElement=X,fe.createFactory=function(I){var A=X.bind(null,I);return A.type=I,A},fe.createRef=function(){return{current:null}},fe.forwardRef=function(I){return{$$typeof:h,render:I}},fe.isValidElement=Be,fe.lazy=function(I){return{$$typeof:y,_payload:{_status:-1,_result:I},_init:Re}},fe.memo=function(I,A){return{$$typeof:m,type:I,compare:A===void 0?null:A}},fe.startTransition=function(I){var A=P.transition;P.transition={};try{I()}finally{P.transition=A}},fe.unstable_act=B,fe.useCallback=function(I,A){return $.current.useCallback(I,A)},fe.useContext=function(I){return $.current.useContext(I)},fe.useDebugValue=function(){},fe.useDeferredValue=function(I){return $.current.useDeferredValue(I)},fe.useEffect=function(I,A){return $.current.useEffect(I,A)},fe.useId=function(){return $.current.useId()},fe.useImperativeHandle=function(I,A,q){return $.current.useImperativeHandle(I,A,q)},fe.useInsertionEffect=function(I,A){return $.current.useInsertionEffect(I,A)},fe.useLayoutEffect=function(I,A){return $.current.useLayoutEffect(I,A)},fe.useMemo=function(I,A){return $.current.useMemo(I,A)},fe.useReducer=function(I,A,q){return $.current.useReducer(I,A,q)},fe.useRef=function(I){return $.current.useRef(I)},fe.useState=function(I){return $.current.useState(I)},fe.useSyncExternalStore=function(I,A,q){return $.current.useSyncExternalStore(I,A,q)},fe.useTransition=function(){return $.current.useTransition()},fe.version="18.3.1",fe}var rg;function qd(){return rg||(rg=1,Kc.exports=rC()),Kc.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ig;function iC(){if(ig)return Gs;ig=1;var n=qd(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,o=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(h,f,m){var y,_={},v=null,R=null;m!==void 0&&(v=""+m),f.key!==void 0&&(v=""+f.key),f.ref!==void 0&&(R=f.ref);for(y in f)s.call(f,y)&&!l.hasOwnProperty(y)&&(_[y]=f[y]);if(h&&h.defaultProps)for(y in f=h.defaultProps,f)_[y]===void 0&&(_[y]=f[y]);return{$$typeof:e,type:h,key:v,ref:R,props:_,_owner:o.current}}return Gs.Fragment=t,Gs.jsx=c,Gs.jsxs=c,Gs}var sg;function sC(){return sg||(sg=1,qc.exports=iC()),qc.exports}var k=sC(),x=qd();const Kd=Ky(x),lD=nC({__proto__:null,default:Kd},[x]);var Va={},Yc={exports:{}},Rt={},Qc={exports:{}},Jc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var og;function oC(){return og||(og=1,(function(n){function e(P,V){var B=P.length;P.push(V);e:for(;0<B;){var I=B-1>>>1,A=P[I];if(0<o(A,V))P[I]=V,P[B]=A,B=I;else break e}}function t(P){return P.length===0?null:P[0]}function s(P){if(P.length===0)return null;var V=P[0],B=P.pop();if(B!==V){P[0]=B;e:for(var I=0,A=P.length,q=A>>>1;I<q;){var te=2*(I+1)-1,ue=P[te],ge=te+1,ae=P[ge];if(0>o(ue,B))ge<A&&0>o(ae,ue)?(P[I]=ae,P[ge]=B,I=ge):(P[I]=ue,P[te]=B,I=te);else if(ge<A&&0>o(ae,B))P[I]=ae,P[ge]=B,I=ge;else break e}}return V}function o(P,V){var B=P.sortIndex-V.sortIndex;return B!==0?B:P.id-V.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;n.unstable_now=function(){return l.now()}}else{var c=Date,h=c.now();n.unstable_now=function(){return c.now()-h}}var f=[],m=[],y=1,_=null,v=3,R=!1,S=!1,O=!1,D=typeof setTimeout=="function"?setTimeout:null,j=typeof clearTimeout=="function"?clearTimeout:null,H=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function U(P){for(var V=t(m);V!==null;){if(V.callback===null)s(m);else if(V.startTime<=P)s(m),V.sortIndex=V.expirationTime,e(f,V);else break;V=t(m)}}function ne(P){if(O=!1,U(P),!S)if(t(f)!==null)S=!0,Re(he);else{var V=t(m);V!==null&&$(ne,V.startTime-P)}}function he(P,V){S=!1,O&&(O=!1,j(X),X=-1),R=!0;var B=v;try{for(U(V),_=t(f);_!==null&&(!(_.expirationTime>V)||P&&!yt());){var I=_.callback;if(typeof I=="function"){_.callback=null,v=_.priorityLevel;var A=I(_.expirationTime<=V);V=n.unstable_now(),typeof A=="function"?_.callback=A:_===t(f)&&s(f),U(V)}else s(f);_=t(f)}if(_!==null)var q=!0;else{var te=t(m);te!==null&&$(ne,te.startTime-V),q=!1}return q}finally{_=null,v=B,R=!1}}var Se=!1,Ie=null,X=-1,we=5,Be=-1;function yt(){return!(n.unstable_now()-Be<we)}function at(){if(Ie!==null){var P=n.unstable_now();Be=P;var V=!0;try{V=Ie(!0,P)}finally{V?Je():(Se=!1,Ie=null)}}else Se=!1}var Je;if(typeof H=="function")Je=function(){H(at)};else if(typeof MessageChannel<"u"){var lt=new MessageChannel,qe=lt.port2;lt.port1.onmessage=at,Je=function(){qe.postMessage(null)}}else Je=function(){D(at,0)};function Re(P){Ie=P,Se||(Se=!0,Je())}function $(P,V){X=D(function(){P(n.unstable_now())},V)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(P){P.callback=null},n.unstable_continueExecution=function(){S||R||(S=!0,Re(he))},n.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):we=0<P?Math.floor(1e3/P):5},n.unstable_getCurrentPriorityLevel=function(){return v},n.unstable_getFirstCallbackNode=function(){return t(f)},n.unstable_next=function(P){switch(v){case 1:case 2:case 3:var V=3;break;default:V=v}var B=v;v=V;try{return P()}finally{v=B}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(P,V){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var B=v;v=P;try{return V()}finally{v=B}},n.unstable_scheduleCallback=function(P,V,B){var I=n.unstable_now();switch(typeof B=="object"&&B!==null?(B=B.delay,B=typeof B=="number"&&0<B?I+B:I):B=I,P){case 1:var A=-1;break;case 2:A=250;break;case 5:A=1073741823;break;case 4:A=1e4;break;default:A=5e3}return A=B+A,P={id:y++,callback:V,priorityLevel:P,startTime:B,expirationTime:A,sortIndex:-1},B>I?(P.sortIndex=B,e(m,P),t(f)===null&&P===t(m)&&(O?(j(X),X=-1):O=!0,$(ne,B-I))):(P.sortIndex=A,e(f,P),S||R||(S=!0,Re(he))),P},n.unstable_shouldYield=yt,n.unstable_wrapCallback=function(P){var V=v;return function(){var B=v;v=V;try{return P.apply(this,arguments)}finally{v=B}}}})(Jc)),Jc}var ag;function aC(){return ag||(ag=1,Qc.exports=oC()),Qc.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lg;function lC(){if(lg)return Rt;lg=1;var n=qd(),e=aC();function t(r){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+r,a=1;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+r+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,o={};function l(r,i){c(r,i),c(r+"Capture",i)}function c(r,i){for(o[r]=i,r=0;r<i.length;r++)s.add(i[r])}var h=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),f=Object.prototype.hasOwnProperty,m=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,y={},_={};function v(r){return f.call(_,r)?!0:f.call(y,r)?!1:m.test(r)?_[r]=!0:(y[r]=!0,!1)}function R(r,i,a,u){if(a!==null&&a.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return u?!1:a!==null?!a.acceptsBooleans:(r=r.toLowerCase().slice(0,5),r!=="data-"&&r!=="aria-");default:return!1}}function S(r,i,a,u){if(i===null||typeof i>"u"||R(r,i,a,u))return!0;if(u)return!1;if(a!==null)switch(a.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function O(r,i,a,u,d,p,g){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=u,this.attributeNamespace=d,this.mustUseProperty=a,this.propertyName=r,this.type=i,this.sanitizeURL=p,this.removeEmptyString=g}var D={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(r){D[r]=new O(r,0,!1,r,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(r){var i=r[0];D[i]=new O(i,1,!1,r[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(r){D[r]=new O(r,2,!1,r.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(r){D[r]=new O(r,2,!1,r,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(r){D[r]=new O(r,3,!1,r.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(r){D[r]=new O(r,3,!0,r,null,!1,!1)}),["capture","download"].forEach(function(r){D[r]=new O(r,4,!1,r,null,!1,!1)}),["cols","rows","size","span"].forEach(function(r){D[r]=new O(r,6,!1,r,null,!1,!1)}),["rowSpan","start"].forEach(function(r){D[r]=new O(r,5,!1,r.toLowerCase(),null,!1,!1)});var j=/[\-:]([a-z])/g;function H(r){return r[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(r){var i=r.replace(j,H);D[i]=new O(i,1,!1,r,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(r){var i=r.replace(j,H);D[i]=new O(i,1,!1,r,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(r){var i=r.replace(j,H);D[i]=new O(i,1,!1,r,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(r){D[r]=new O(r,1,!1,r.toLowerCase(),null,!1,!1)}),D.xlinkHref=new O("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(r){D[r]=new O(r,1,!1,r.toLowerCase(),null,!0,!0)});function U(r,i,a,u){var d=D.hasOwnProperty(i)?D[i]:null;(d!==null?d.type!==0:u||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(S(i,a,d,u)&&(a=null),u||d===null?v(i)&&(a===null?r.removeAttribute(i):r.setAttribute(i,""+a)):d.mustUseProperty?r[d.propertyName]=a===null?d.type===3?!1:"":a:(i=d.attributeName,u=d.attributeNamespace,a===null?r.removeAttribute(i):(d=d.type,a=d===3||d===4&&a===!0?"":""+a,u?r.setAttributeNS(u,i,a):r.setAttribute(i,a))))}var ne=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,he=Symbol.for("react.element"),Se=Symbol.for("react.portal"),Ie=Symbol.for("react.fragment"),X=Symbol.for("react.strict_mode"),we=Symbol.for("react.profiler"),Be=Symbol.for("react.provider"),yt=Symbol.for("react.context"),at=Symbol.for("react.forward_ref"),Je=Symbol.for("react.suspense"),lt=Symbol.for("react.suspense_list"),qe=Symbol.for("react.memo"),Re=Symbol.for("react.lazy"),$=Symbol.for("react.offscreen"),P=Symbol.iterator;function V(r){return r===null||typeof r!="object"?null:(r=P&&r[P]||r["@@iterator"],typeof r=="function"?r:null)}var B=Object.assign,I;function A(r){if(I===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);I=i&&i[1]||""}return`
`+I+r}var q=!1;function te(r,i){if(!r||q)return"";q=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(N){var u=N}Reflect.construct(r,[],i)}else{try{i.call()}catch(N){u=N}r.call(i.prototype)}else{try{throw Error()}catch(N){u=N}r()}}catch(N){if(N&&u&&typeof N.stack=="string"){for(var d=N.stack.split(`
`),p=u.stack.split(`
`),g=d.length-1,w=p.length-1;1<=g&&0<=w&&d[g]!==p[w];)w--;for(;1<=g&&0<=w;g--,w--)if(d[g]!==p[w]){if(g!==1||w!==1)do if(g--,w--,0>w||d[g]!==p[w]){var E=`
`+d[g].replace(" at new "," at ");return r.displayName&&E.includes("<anonymous>")&&(E=E.replace("<anonymous>",r.displayName)),E}while(1<=g&&0<=w);break}}}finally{q=!1,Error.prepareStackTrace=a}return(r=r?r.displayName||r.name:"")?A(r):""}function ue(r){switch(r.tag){case 5:return A(r.type);case 16:return A("Lazy");case 13:return A("Suspense");case 19:return A("SuspenseList");case 0:case 2:case 15:return r=te(r.type,!1),r;case 11:return r=te(r.type.render,!1),r;case 1:return r=te(r.type,!0),r;default:return""}}function ge(r){if(r==null)return null;if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r;switch(r){case Ie:return"Fragment";case Se:return"Portal";case we:return"Profiler";case X:return"StrictMode";case Je:return"Suspense";case lt:return"SuspenseList"}if(typeof r=="object")switch(r.$$typeof){case yt:return(r.displayName||"Context")+".Consumer";case Be:return(r._context.displayName||"Context")+".Provider";case at:var i=r.render;return r=r.displayName,r||(r=i.displayName||i.name||"",r=r!==""?"ForwardRef("+r+")":"ForwardRef"),r;case qe:return i=r.displayName||null,i!==null?i:ge(r.type)||"Memo";case Re:i=r._payload,r=r._init;try{return ge(r(i))}catch{}}return null}function ae(r){var i=r.type;switch(r.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return r=i.render,r=r.displayName||r.name||"",i.displayName||(r!==""?"ForwardRef("+r+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ge(i);case 8:return i===X?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function _e(r){switch(typeof r){case"boolean":case"number":case"string":case"undefined":return r;case"object":return r;default:return""}}function ce(r){var i=r.type;return(r=r.nodeName)&&r.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Xe(r){var i=ce(r)?"checked":"value",a=Object.getOwnPropertyDescriptor(r.constructor.prototype,i),u=""+r[i];if(!r.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var d=a.get,p=a.set;return Object.defineProperty(r,i,{configurable:!0,get:function(){return d.call(this)},set:function(g){u=""+g,p.call(this,g)}}),Object.defineProperty(r,i,{enumerable:a.enumerable}),{getValue:function(){return u},setValue:function(g){u=""+g},stopTracking:function(){r._valueTracker=null,delete r[i]}}}}function Bn(r){r._valueTracker||(r._valueTracker=Xe(r))}function Tr(r){if(!r)return!1;var i=r._valueTracker;if(!i)return!0;var a=i.getValue(),u="";return r&&(u=ce(r)?r.checked?"true":"false":r.value),r=u,r!==a?(i.setValue(r),!0):!1}function Lo(r){if(r=r||(typeof document<"u"?document:void 0),typeof r>"u")return null;try{return r.activeElement||r.body}catch{return r.body}}function eu(r,i){var a=i.checked;return B({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??r._wrapperState.initialChecked})}function uf(r,i){var a=i.defaultValue==null?"":i.defaultValue,u=i.checked!=null?i.checked:i.defaultChecked;a=_e(i.value!=null?i.value:a),r._wrapperState={initialChecked:u,initialValue:a,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function cf(r,i){i=i.checked,i!=null&&U(r,"checked",i,!1)}function tu(r,i){cf(r,i);var a=_e(i.value),u=i.type;if(a!=null)u==="number"?(a===0&&r.value===""||r.value!=a)&&(r.value=""+a):r.value!==""+a&&(r.value=""+a);else if(u==="submit"||u==="reset"){r.removeAttribute("value");return}i.hasOwnProperty("value")?nu(r,i.type,a):i.hasOwnProperty("defaultValue")&&nu(r,i.type,_e(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(r.defaultChecked=!!i.defaultChecked)}function df(r,i,a){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var u=i.type;if(!(u!=="submit"&&u!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+r._wrapperState.initialValue,a||i===r.value||(r.value=i),r.defaultValue=i}a=r.name,a!==""&&(r.name=""),r.defaultChecked=!!r._wrapperState.initialChecked,a!==""&&(r.name=a)}function nu(r,i,a){(i!=="number"||Lo(r.ownerDocument)!==r)&&(a==null?r.defaultValue=""+r._wrapperState.initialValue:r.defaultValue!==""+a&&(r.defaultValue=""+a))}var as=Array.isArray;function ii(r,i,a,u){if(r=r.options,i){i={};for(var d=0;d<a.length;d++)i["$"+a[d]]=!0;for(a=0;a<r.length;a++)d=i.hasOwnProperty("$"+r[a].value),r[a].selected!==d&&(r[a].selected=d),d&&u&&(r[a].defaultSelected=!0)}else{for(a=""+_e(a),i=null,d=0;d<r.length;d++){if(r[d].value===a){r[d].selected=!0,u&&(r[d].defaultSelected=!0);return}i!==null||r[d].disabled||(i=r[d])}i!==null&&(i.selected=!0)}}function ru(r,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return B({},i,{value:void 0,defaultValue:void 0,children:""+r._wrapperState.initialValue})}function hf(r,i){var a=i.value;if(a==null){if(a=i.children,i=i.defaultValue,a!=null){if(i!=null)throw Error(t(92));if(as(a)){if(1<a.length)throw Error(t(93));a=a[0]}i=a}i==null&&(i=""),a=i}r._wrapperState={initialValue:_e(a)}}function ff(r,i){var a=_e(i.value),u=_e(i.defaultValue);a!=null&&(a=""+a,a!==r.value&&(r.value=a),i.defaultValue==null&&r.defaultValue!==a&&(r.defaultValue=a)),u!=null&&(r.defaultValue=""+u)}function pf(r){var i=r.textContent;i===r._wrapperState.initialValue&&i!==""&&i!==null&&(r.value=i)}function mf(r){switch(r){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function iu(r,i){return r==null||r==="http://www.w3.org/1999/xhtml"?mf(i):r==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":r}var Mo,gf=(function(r){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,a,u,d){MSApp.execUnsafeLocalFunction(function(){return r(i,a,u,d)})}:r})(function(r,i){if(r.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in r)r.innerHTML=i;else{for(Mo=Mo||document.createElement("div"),Mo.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=Mo.firstChild;r.firstChild;)r.removeChild(r.firstChild);for(;i.firstChild;)r.appendChild(i.firstChild)}});function ls(r,i){if(i){var a=r.firstChild;if(a&&a===r.lastChild&&a.nodeType===3){a.nodeValue=i;return}}r.textContent=i}var us={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},oE=["Webkit","ms","Moz","O"];Object.keys(us).forEach(function(r){oE.forEach(function(i){i=i+r.charAt(0).toUpperCase()+r.substring(1),us[i]=us[r]})});function yf(r,i,a){return i==null||typeof i=="boolean"||i===""?"":a||typeof i!="number"||i===0||us.hasOwnProperty(r)&&us[r]?(""+i).trim():i+"px"}function _f(r,i){r=r.style;for(var a in i)if(i.hasOwnProperty(a)){var u=a.indexOf("--")===0,d=yf(a,i[a],u);a==="float"&&(a="cssFloat"),u?r.setProperty(a,d):r[a]=d}}var aE=B({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function su(r,i){if(i){if(aE[r]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,r));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function ou(r,i){if(r.indexOf("-")===-1)return typeof i.is=="string";switch(r){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var au=null;function lu(r){return r=r.target||r.srcElement||window,r.correspondingUseElement&&(r=r.correspondingUseElement),r.nodeType===3?r.parentNode:r}var uu=null,si=null,oi=null;function vf(r){if(r=Ns(r)){if(typeof uu!="function")throw Error(t(280));var i=r.stateNode;i&&(i=sa(i),uu(r.stateNode,r.type,i))}}function wf(r){si?oi?oi.push(r):oi=[r]:si=r}function Ef(){if(si){var r=si,i=oi;if(oi=si=null,vf(r),i)for(r=0;r<i.length;r++)vf(i[r])}}function Cf(r,i){return r(i)}function Sf(){}var cu=!1;function kf(r,i,a){if(cu)return r(i,a);cu=!0;try{return Cf(r,i,a)}finally{cu=!1,(si!==null||oi!==null)&&(Sf(),Ef())}}function cs(r,i){var a=r.stateNode;if(a===null)return null;var u=sa(a);if(u===null)return null;a=u[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(r=r.type,u=!(r==="button"||r==="input"||r==="select"||r==="textarea")),r=!u;break e;default:r=!1}if(r)return null;if(a&&typeof a!="function")throw Error(t(231,i,typeof a));return a}var du=!1;if(h)try{var ds={};Object.defineProperty(ds,"passive",{get:function(){du=!0}}),window.addEventListener("test",ds,ds),window.removeEventListener("test",ds,ds)}catch{du=!1}function lE(r,i,a,u,d,p,g,w,E){var N=Array.prototype.slice.call(arguments,3);try{i.apply(a,N)}catch(M){this.onError(M)}}var hs=!1,Fo=null,Uo=!1,hu=null,uE={onError:function(r){hs=!0,Fo=r}};function cE(r,i,a,u,d,p,g,w,E){hs=!1,Fo=null,lE.apply(uE,arguments)}function dE(r,i,a,u,d,p,g,w,E){if(cE.apply(this,arguments),hs){if(hs){var N=Fo;hs=!1,Fo=null}else throw Error(t(198));Uo||(Uo=!0,hu=N)}}function xr(r){var i=r,a=r;if(r.alternate)for(;i.return;)i=i.return;else{r=i;do i=r,(i.flags&4098)!==0&&(a=i.return),r=i.return;while(r)}return i.tag===3?a:null}function If(r){if(r.tag===13){var i=r.memoizedState;if(i===null&&(r=r.alternate,r!==null&&(i=r.memoizedState)),i!==null)return i.dehydrated}return null}function Tf(r){if(xr(r)!==r)throw Error(t(188))}function hE(r){var i=r.alternate;if(!i){if(i=xr(r),i===null)throw Error(t(188));return i!==r?null:r}for(var a=r,u=i;;){var d=a.return;if(d===null)break;var p=d.alternate;if(p===null){if(u=d.return,u!==null){a=u;continue}break}if(d.child===p.child){for(p=d.child;p;){if(p===a)return Tf(d),r;if(p===u)return Tf(d),i;p=p.sibling}throw Error(t(188))}if(a.return!==u.return)a=d,u=p;else{for(var g=!1,w=d.child;w;){if(w===a){g=!0,a=d,u=p;break}if(w===u){g=!0,u=d,a=p;break}w=w.sibling}if(!g){for(w=p.child;w;){if(w===a){g=!0,a=p,u=d;break}if(w===u){g=!0,u=p,a=d;break}w=w.sibling}if(!g)throw Error(t(189))}}if(a.alternate!==u)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?r:i}function xf(r){return r=hE(r),r!==null?Rf(r):null}function Rf(r){if(r.tag===5||r.tag===6)return r;for(r=r.child;r!==null;){var i=Rf(r);if(i!==null)return i;r=r.sibling}return null}var bf=e.unstable_scheduleCallback,Pf=e.unstable_cancelCallback,fE=e.unstable_shouldYield,pE=e.unstable_requestPaint,Ve=e.unstable_now,mE=e.unstable_getCurrentPriorityLevel,fu=e.unstable_ImmediatePriority,Nf=e.unstable_UserBlockingPriority,jo=e.unstable_NormalPriority,gE=e.unstable_LowPriority,Af=e.unstable_IdlePriority,zo=null,hn=null;function yE(r){if(hn&&typeof hn.onCommitFiberRoot=="function")try{hn.onCommitFiberRoot(zo,r,void 0,(r.current.flags&128)===128)}catch{}}var Yt=Math.clz32?Math.clz32:wE,_E=Math.log,vE=Math.LN2;function wE(r){return r>>>=0,r===0?32:31-(_E(r)/vE|0)|0}var Wo=64,$o=4194304;function fs(r){switch(r&-r){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return r&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return r}}function Bo(r,i){var a=r.pendingLanes;if(a===0)return 0;var u=0,d=r.suspendedLanes,p=r.pingedLanes,g=a&268435455;if(g!==0){var w=g&~d;w!==0?u=fs(w):(p&=g,p!==0&&(u=fs(p)))}else g=a&~d,g!==0?u=fs(g):p!==0&&(u=fs(p));if(u===0)return 0;if(i!==0&&i!==u&&(i&d)===0&&(d=u&-u,p=i&-i,d>=p||d===16&&(p&4194240)!==0))return i;if((u&4)!==0&&(u|=a&16),i=r.entangledLanes,i!==0)for(r=r.entanglements,i&=u;0<i;)a=31-Yt(i),d=1<<a,u|=r[a],i&=~d;return u}function EE(r,i){switch(r){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function CE(r,i){for(var a=r.suspendedLanes,u=r.pingedLanes,d=r.expirationTimes,p=r.pendingLanes;0<p;){var g=31-Yt(p),w=1<<g,E=d[g];E===-1?((w&a)===0||(w&u)!==0)&&(d[g]=EE(w,i)):E<=i&&(r.expiredLanes|=w),p&=~w}}function pu(r){return r=r.pendingLanes&-1073741825,r!==0?r:r&1073741824?1073741824:0}function Df(){var r=Wo;return Wo<<=1,(Wo&4194240)===0&&(Wo=64),r}function mu(r){for(var i=[],a=0;31>a;a++)i.push(r);return i}function ps(r,i,a){r.pendingLanes|=i,i!==536870912&&(r.suspendedLanes=0,r.pingedLanes=0),r=r.eventTimes,i=31-Yt(i),r[i]=a}function SE(r,i){var a=r.pendingLanes&~i;r.pendingLanes=i,r.suspendedLanes=0,r.pingedLanes=0,r.expiredLanes&=i,r.mutableReadLanes&=i,r.entangledLanes&=i,i=r.entanglements;var u=r.eventTimes;for(r=r.expirationTimes;0<a;){var d=31-Yt(a),p=1<<d;i[d]=0,u[d]=-1,r[d]=-1,a&=~p}}function gu(r,i){var a=r.entangledLanes|=i;for(r=r.entanglements;a;){var u=31-Yt(a),d=1<<u;d&i|r[u]&i&&(r[u]|=i),a&=~d}}var ke=0;function Of(r){return r&=-r,1<r?4<r?(r&268435455)!==0?16:536870912:4:1}var Lf,yu,Mf,Ff,Uf,_u=!1,Vo=[],Vn=null,Hn=null,Gn=null,ms=new Map,gs=new Map,qn=[],kE="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function jf(r,i){switch(r){case"focusin":case"focusout":Vn=null;break;case"dragenter":case"dragleave":Hn=null;break;case"mouseover":case"mouseout":Gn=null;break;case"pointerover":case"pointerout":ms.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":gs.delete(i.pointerId)}}function ys(r,i,a,u,d,p){return r===null||r.nativeEvent!==p?(r={blockedOn:i,domEventName:a,eventSystemFlags:u,nativeEvent:p,targetContainers:[d]},i!==null&&(i=Ns(i),i!==null&&yu(i)),r):(r.eventSystemFlags|=u,i=r.targetContainers,d!==null&&i.indexOf(d)===-1&&i.push(d),r)}function IE(r,i,a,u,d){switch(i){case"focusin":return Vn=ys(Vn,r,i,a,u,d),!0;case"dragenter":return Hn=ys(Hn,r,i,a,u,d),!0;case"mouseover":return Gn=ys(Gn,r,i,a,u,d),!0;case"pointerover":var p=d.pointerId;return ms.set(p,ys(ms.get(p)||null,r,i,a,u,d)),!0;case"gotpointercapture":return p=d.pointerId,gs.set(p,ys(gs.get(p)||null,r,i,a,u,d)),!0}return!1}function zf(r){var i=Rr(r.target);if(i!==null){var a=xr(i);if(a!==null){if(i=a.tag,i===13){if(i=If(a),i!==null){r.blockedOn=i,Uf(r.priority,function(){Mf(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){r.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}r.blockedOn=null}function Ho(r){if(r.blockedOn!==null)return!1;for(var i=r.targetContainers;0<i.length;){var a=wu(r.domEventName,r.eventSystemFlags,i[0],r.nativeEvent);if(a===null){a=r.nativeEvent;var u=new a.constructor(a.type,a);au=u,a.target.dispatchEvent(u),au=null}else return i=Ns(a),i!==null&&yu(i),r.blockedOn=a,!1;i.shift()}return!0}function Wf(r,i,a){Ho(r)&&a.delete(i)}function TE(){_u=!1,Vn!==null&&Ho(Vn)&&(Vn=null),Hn!==null&&Ho(Hn)&&(Hn=null),Gn!==null&&Ho(Gn)&&(Gn=null),ms.forEach(Wf),gs.forEach(Wf)}function _s(r,i){r.blockedOn===i&&(r.blockedOn=null,_u||(_u=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,TE)))}function vs(r){function i(d){return _s(d,r)}if(0<Vo.length){_s(Vo[0],r);for(var a=1;a<Vo.length;a++){var u=Vo[a];u.blockedOn===r&&(u.blockedOn=null)}}for(Vn!==null&&_s(Vn,r),Hn!==null&&_s(Hn,r),Gn!==null&&_s(Gn,r),ms.forEach(i),gs.forEach(i),a=0;a<qn.length;a++)u=qn[a],u.blockedOn===r&&(u.blockedOn=null);for(;0<qn.length&&(a=qn[0],a.blockedOn===null);)zf(a),a.blockedOn===null&&qn.shift()}var ai=ne.ReactCurrentBatchConfig,Go=!0;function xE(r,i,a,u){var d=ke,p=ai.transition;ai.transition=null;try{ke=1,vu(r,i,a,u)}finally{ke=d,ai.transition=p}}function RE(r,i,a,u){var d=ke,p=ai.transition;ai.transition=null;try{ke=4,vu(r,i,a,u)}finally{ke=d,ai.transition=p}}function vu(r,i,a,u){if(Go){var d=wu(r,i,a,u);if(d===null)Fu(r,i,u,qo,a),jf(r,u);else if(IE(d,r,i,a,u))u.stopPropagation();else if(jf(r,u),i&4&&-1<kE.indexOf(r)){for(;d!==null;){var p=Ns(d);if(p!==null&&Lf(p),p=wu(r,i,a,u),p===null&&Fu(r,i,u,qo,a),p===d)break;d=p}d!==null&&u.stopPropagation()}else Fu(r,i,u,null,a)}}var qo=null;function wu(r,i,a,u){if(qo=null,r=lu(u),r=Rr(r),r!==null)if(i=xr(r),i===null)r=null;else if(a=i.tag,a===13){if(r=If(i),r!==null)return r;r=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;r=null}else i!==r&&(r=null);return qo=r,null}function $f(r){switch(r){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(mE()){case fu:return 1;case Nf:return 4;case jo:case gE:return 16;case Af:return 536870912;default:return 16}default:return 16}}var Kn=null,Eu=null,Ko=null;function Bf(){if(Ko)return Ko;var r,i=Eu,a=i.length,u,d="value"in Kn?Kn.value:Kn.textContent,p=d.length;for(r=0;r<a&&i[r]===d[r];r++);var g=a-r;for(u=1;u<=g&&i[a-u]===d[p-u];u++);return Ko=d.slice(r,1<u?1-u:void 0)}function Yo(r){var i=r.keyCode;return"charCode"in r?(r=r.charCode,r===0&&i===13&&(r=13)):r=i,r===10&&(r=13),32<=r||r===13?r:0}function Qo(){return!0}function Vf(){return!1}function Dt(r){function i(a,u,d,p,g){this._reactName=a,this._targetInst=d,this.type=u,this.nativeEvent=p,this.target=g,this.currentTarget=null;for(var w in r)r.hasOwnProperty(w)&&(a=r[w],this[w]=a?a(p):p[w]);return this.isDefaultPrevented=(p.defaultPrevented!=null?p.defaultPrevented:p.returnValue===!1)?Qo:Vf,this.isPropagationStopped=Vf,this}return B(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Qo)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Qo)},persist:function(){},isPersistent:Qo}),i}var li={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(r){return r.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Cu=Dt(li),ws=B({},li,{view:0,detail:0}),bE=Dt(ws),Su,ku,Es,Jo=B({},ws,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Tu,button:0,buttons:0,relatedTarget:function(r){return r.relatedTarget===void 0?r.fromElement===r.srcElement?r.toElement:r.fromElement:r.relatedTarget},movementX:function(r){return"movementX"in r?r.movementX:(r!==Es&&(Es&&r.type==="mousemove"?(Su=r.screenX-Es.screenX,ku=r.screenY-Es.screenY):ku=Su=0,Es=r),Su)},movementY:function(r){return"movementY"in r?r.movementY:ku}}),Hf=Dt(Jo),PE=B({},Jo,{dataTransfer:0}),NE=Dt(PE),AE=B({},ws,{relatedTarget:0}),Iu=Dt(AE),DE=B({},li,{animationName:0,elapsedTime:0,pseudoElement:0}),OE=Dt(DE),LE=B({},li,{clipboardData:function(r){return"clipboardData"in r?r.clipboardData:window.clipboardData}}),ME=Dt(LE),FE=B({},li,{data:0}),Gf=Dt(FE),UE={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},jE={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},zE={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function WE(r){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(r):(r=zE[r])?!!i[r]:!1}function Tu(){return WE}var $E=B({},ws,{key:function(r){if(r.key){var i=UE[r.key]||r.key;if(i!=="Unidentified")return i}return r.type==="keypress"?(r=Yo(r),r===13?"Enter":String.fromCharCode(r)):r.type==="keydown"||r.type==="keyup"?jE[r.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Tu,charCode:function(r){return r.type==="keypress"?Yo(r):0},keyCode:function(r){return r.type==="keydown"||r.type==="keyup"?r.keyCode:0},which:function(r){return r.type==="keypress"?Yo(r):r.type==="keydown"||r.type==="keyup"?r.keyCode:0}}),BE=Dt($E),VE=B({},Jo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),qf=Dt(VE),HE=B({},ws,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Tu}),GE=Dt(HE),qE=B({},li,{propertyName:0,elapsedTime:0,pseudoElement:0}),KE=Dt(qE),YE=B({},Jo,{deltaX:function(r){return"deltaX"in r?r.deltaX:"wheelDeltaX"in r?-r.wheelDeltaX:0},deltaY:function(r){return"deltaY"in r?r.deltaY:"wheelDeltaY"in r?-r.wheelDeltaY:"wheelDelta"in r?-r.wheelDelta:0},deltaZ:0,deltaMode:0}),QE=Dt(YE),JE=[9,13,27,32],xu=h&&"CompositionEvent"in window,Cs=null;h&&"documentMode"in document&&(Cs=document.documentMode);var XE=h&&"TextEvent"in window&&!Cs,Kf=h&&(!xu||Cs&&8<Cs&&11>=Cs),Yf=" ",Qf=!1;function Jf(r,i){switch(r){case"keyup":return JE.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Xf(r){return r=r.detail,typeof r=="object"&&"data"in r?r.data:null}var ui=!1;function ZE(r,i){switch(r){case"compositionend":return Xf(i);case"keypress":return i.which!==32?null:(Qf=!0,Yf);case"textInput":return r=i.data,r===Yf&&Qf?null:r;default:return null}}function e0(r,i){if(ui)return r==="compositionend"||!xu&&Jf(r,i)?(r=Bf(),Ko=Eu=Kn=null,ui=!1,r):null;switch(r){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Kf&&i.locale!=="ko"?null:i.data;default:return null}}var t0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Zf(r){var i=r&&r.nodeName&&r.nodeName.toLowerCase();return i==="input"?!!t0[r.type]:i==="textarea"}function ep(r,i,a,u){wf(u),i=na(i,"onChange"),0<i.length&&(a=new Cu("onChange","change",null,a,u),r.push({event:a,listeners:i}))}var Ss=null,ks=null;function n0(r){_p(r,0)}function Xo(r){var i=pi(r);if(Tr(i))return r}function r0(r,i){if(r==="change")return i}var tp=!1;if(h){var Ru;if(h){var bu="oninput"in document;if(!bu){var np=document.createElement("div");np.setAttribute("oninput","return;"),bu=typeof np.oninput=="function"}Ru=bu}else Ru=!1;tp=Ru&&(!document.documentMode||9<document.documentMode)}function rp(){Ss&&(Ss.detachEvent("onpropertychange",ip),ks=Ss=null)}function ip(r){if(r.propertyName==="value"&&Xo(ks)){var i=[];ep(i,ks,r,lu(r)),kf(n0,i)}}function i0(r,i,a){r==="focusin"?(rp(),Ss=i,ks=a,Ss.attachEvent("onpropertychange",ip)):r==="focusout"&&rp()}function s0(r){if(r==="selectionchange"||r==="keyup"||r==="keydown")return Xo(ks)}function o0(r,i){if(r==="click")return Xo(i)}function a0(r,i){if(r==="input"||r==="change")return Xo(i)}function l0(r,i){return r===i&&(r!==0||1/r===1/i)||r!==r&&i!==i}var Qt=typeof Object.is=="function"?Object.is:l0;function Is(r,i){if(Qt(r,i))return!0;if(typeof r!="object"||r===null||typeof i!="object"||i===null)return!1;var a=Object.keys(r),u=Object.keys(i);if(a.length!==u.length)return!1;for(u=0;u<a.length;u++){var d=a[u];if(!f.call(i,d)||!Qt(r[d],i[d]))return!1}return!0}function sp(r){for(;r&&r.firstChild;)r=r.firstChild;return r}function op(r,i){var a=sp(r);r=0;for(var u;a;){if(a.nodeType===3){if(u=r+a.textContent.length,r<=i&&u>=i)return{node:a,offset:i-r};r=u}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=sp(a)}}function ap(r,i){return r&&i?r===i?!0:r&&r.nodeType===3?!1:i&&i.nodeType===3?ap(r,i.parentNode):"contains"in r?r.contains(i):r.compareDocumentPosition?!!(r.compareDocumentPosition(i)&16):!1:!1}function lp(){for(var r=window,i=Lo();i instanceof r.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)r=i.contentWindow;else break;i=Lo(r.document)}return i}function Pu(r){var i=r&&r.nodeName&&r.nodeName.toLowerCase();return i&&(i==="input"&&(r.type==="text"||r.type==="search"||r.type==="tel"||r.type==="url"||r.type==="password")||i==="textarea"||r.contentEditable==="true")}function u0(r){var i=lp(),a=r.focusedElem,u=r.selectionRange;if(i!==a&&a&&a.ownerDocument&&ap(a.ownerDocument.documentElement,a)){if(u!==null&&Pu(a)){if(i=u.start,r=u.end,r===void 0&&(r=i),"selectionStart"in a)a.selectionStart=i,a.selectionEnd=Math.min(r,a.value.length);else if(r=(i=a.ownerDocument||document)&&i.defaultView||window,r.getSelection){r=r.getSelection();var d=a.textContent.length,p=Math.min(u.start,d);u=u.end===void 0?p:Math.min(u.end,d),!r.extend&&p>u&&(d=u,u=p,p=d),d=op(a,p);var g=op(a,u);d&&g&&(r.rangeCount!==1||r.anchorNode!==d.node||r.anchorOffset!==d.offset||r.focusNode!==g.node||r.focusOffset!==g.offset)&&(i=i.createRange(),i.setStart(d.node,d.offset),r.removeAllRanges(),p>u?(r.addRange(i),r.extend(g.node,g.offset)):(i.setEnd(g.node,g.offset),r.addRange(i)))}}for(i=[],r=a;r=r.parentNode;)r.nodeType===1&&i.push({element:r,left:r.scrollLeft,top:r.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<i.length;a++)r=i[a],r.element.scrollLeft=r.left,r.element.scrollTop=r.top}}var c0=h&&"documentMode"in document&&11>=document.documentMode,ci=null,Nu=null,Ts=null,Au=!1;function up(r,i,a){var u=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Au||ci==null||ci!==Lo(u)||(u=ci,"selectionStart"in u&&Pu(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),Ts&&Is(Ts,u)||(Ts=u,u=na(Nu,"onSelect"),0<u.length&&(i=new Cu("onSelect","select",null,i,a),r.push({event:i,listeners:u}),i.target=ci)))}function Zo(r,i){var a={};return a[r.toLowerCase()]=i.toLowerCase(),a["Webkit"+r]="webkit"+i,a["Moz"+r]="moz"+i,a}var di={animationend:Zo("Animation","AnimationEnd"),animationiteration:Zo("Animation","AnimationIteration"),animationstart:Zo("Animation","AnimationStart"),transitionend:Zo("Transition","TransitionEnd")},Du={},cp={};h&&(cp=document.createElement("div").style,"AnimationEvent"in window||(delete di.animationend.animation,delete di.animationiteration.animation,delete di.animationstart.animation),"TransitionEvent"in window||delete di.transitionend.transition);function ea(r){if(Du[r])return Du[r];if(!di[r])return r;var i=di[r],a;for(a in i)if(i.hasOwnProperty(a)&&a in cp)return Du[r]=i[a];return r}var dp=ea("animationend"),hp=ea("animationiteration"),fp=ea("animationstart"),pp=ea("transitionend"),mp=new Map,gp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Yn(r,i){mp.set(r,i),l(i,[r])}for(var Ou=0;Ou<gp.length;Ou++){var Lu=gp[Ou],d0=Lu.toLowerCase(),h0=Lu[0].toUpperCase()+Lu.slice(1);Yn(d0,"on"+h0)}Yn(dp,"onAnimationEnd"),Yn(hp,"onAnimationIteration"),Yn(fp,"onAnimationStart"),Yn("dblclick","onDoubleClick"),Yn("focusin","onFocus"),Yn("focusout","onBlur"),Yn(pp,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var xs="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),f0=new Set("cancel close invalid load scroll toggle".split(" ").concat(xs));function yp(r,i,a){var u=r.type||"unknown-event";r.currentTarget=a,dE(u,i,void 0,r),r.currentTarget=null}function _p(r,i){i=(i&4)!==0;for(var a=0;a<r.length;a++){var u=r[a],d=u.event;u=u.listeners;e:{var p=void 0;if(i)for(var g=u.length-1;0<=g;g--){var w=u[g],E=w.instance,N=w.currentTarget;if(w=w.listener,E!==p&&d.isPropagationStopped())break e;yp(d,w,N),p=E}else for(g=0;g<u.length;g++){if(w=u[g],E=w.instance,N=w.currentTarget,w=w.listener,E!==p&&d.isPropagationStopped())break e;yp(d,w,N),p=E}}}if(Uo)throw r=hu,Uo=!1,hu=null,r}function Ae(r,i){var a=i[Bu];a===void 0&&(a=i[Bu]=new Set);var u=r+"__bubble";a.has(u)||(vp(i,r,2,!1),a.add(u))}function Mu(r,i,a){var u=0;i&&(u|=4),vp(a,r,u,i)}var ta="_reactListening"+Math.random().toString(36).slice(2);function Rs(r){if(!r[ta]){r[ta]=!0,s.forEach(function(a){a!=="selectionchange"&&(f0.has(a)||Mu(a,!1,r),Mu(a,!0,r))});var i=r.nodeType===9?r:r.ownerDocument;i===null||i[ta]||(i[ta]=!0,Mu("selectionchange",!1,i))}}function vp(r,i,a,u){switch($f(i)){case 1:var d=xE;break;case 4:d=RE;break;default:d=vu}a=d.bind(null,i,a,r),d=void 0,!du||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(d=!0),u?d!==void 0?r.addEventListener(i,a,{capture:!0,passive:d}):r.addEventListener(i,a,!0):d!==void 0?r.addEventListener(i,a,{passive:d}):r.addEventListener(i,a,!1)}function Fu(r,i,a,u,d){var p=u;if((i&1)===0&&(i&2)===0&&u!==null)e:for(;;){if(u===null)return;var g=u.tag;if(g===3||g===4){var w=u.stateNode.containerInfo;if(w===d||w.nodeType===8&&w.parentNode===d)break;if(g===4)for(g=u.return;g!==null;){var E=g.tag;if((E===3||E===4)&&(E=g.stateNode.containerInfo,E===d||E.nodeType===8&&E.parentNode===d))return;g=g.return}for(;w!==null;){if(g=Rr(w),g===null)return;if(E=g.tag,E===5||E===6){u=p=g;continue e}w=w.parentNode}}u=u.return}kf(function(){var N=p,M=lu(a),F=[];e:{var L=mp.get(r);if(L!==void 0){var G=Cu,Y=r;switch(r){case"keypress":if(Yo(a)===0)break e;case"keydown":case"keyup":G=BE;break;case"focusin":Y="focus",G=Iu;break;case"focusout":Y="blur",G=Iu;break;case"beforeblur":case"afterblur":G=Iu;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":G=Hf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":G=NE;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":G=GE;break;case dp:case hp:case fp:G=OE;break;case pp:G=KE;break;case"scroll":G=bE;break;case"wheel":G=QE;break;case"copy":case"cut":case"paste":G=ME;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":G=qf}var Z=(i&4)!==0,He=!Z&&r==="scroll",T=Z?L!==null?L+"Capture":null:L;Z=[];for(var C=N,b;C!==null;){b=C;var z=b.stateNode;if(b.tag===5&&z!==null&&(b=z,T!==null&&(z=cs(C,T),z!=null&&Z.push(bs(C,z,b)))),He)break;C=C.return}0<Z.length&&(L=new G(L,Y,null,a,M),F.push({event:L,listeners:Z}))}}if((i&7)===0){e:{if(L=r==="mouseover"||r==="pointerover",G=r==="mouseout"||r==="pointerout",L&&a!==au&&(Y=a.relatedTarget||a.fromElement)&&(Rr(Y)||Y[Cn]))break e;if((G||L)&&(L=M.window===M?M:(L=M.ownerDocument)?L.defaultView||L.parentWindow:window,G?(Y=a.relatedTarget||a.toElement,G=N,Y=Y?Rr(Y):null,Y!==null&&(He=xr(Y),Y!==He||Y.tag!==5&&Y.tag!==6)&&(Y=null)):(G=null,Y=N),G!==Y)){if(Z=Hf,z="onMouseLeave",T="onMouseEnter",C="mouse",(r==="pointerout"||r==="pointerover")&&(Z=qf,z="onPointerLeave",T="onPointerEnter",C="pointer"),He=G==null?L:pi(G),b=Y==null?L:pi(Y),L=new Z(z,C+"leave",G,a,M),L.target=He,L.relatedTarget=b,z=null,Rr(M)===N&&(Z=new Z(T,C+"enter",Y,a,M),Z.target=b,Z.relatedTarget=He,z=Z),He=z,G&&Y)t:{for(Z=G,T=Y,C=0,b=Z;b;b=hi(b))C++;for(b=0,z=T;z;z=hi(z))b++;for(;0<C-b;)Z=hi(Z),C--;for(;0<b-C;)T=hi(T),b--;for(;C--;){if(Z===T||T!==null&&Z===T.alternate)break t;Z=hi(Z),T=hi(T)}Z=null}else Z=null;G!==null&&wp(F,L,G,Z,!1),Y!==null&&He!==null&&wp(F,He,Y,Z,!0)}}e:{if(L=N?pi(N):window,G=L.nodeName&&L.nodeName.toLowerCase(),G==="select"||G==="input"&&L.type==="file")var ee=r0;else if(Zf(L))if(tp)ee=a0;else{ee=s0;var re=i0}else(G=L.nodeName)&&G.toLowerCase()==="input"&&(L.type==="checkbox"||L.type==="radio")&&(ee=o0);if(ee&&(ee=ee(r,N))){ep(F,ee,a,M);break e}re&&re(r,L,N),r==="focusout"&&(re=L._wrapperState)&&re.controlled&&L.type==="number"&&nu(L,"number",L.value)}switch(re=N?pi(N):window,r){case"focusin":(Zf(re)||re.contentEditable==="true")&&(ci=re,Nu=N,Ts=null);break;case"focusout":Ts=Nu=ci=null;break;case"mousedown":Au=!0;break;case"contextmenu":case"mouseup":case"dragend":Au=!1,up(F,a,M);break;case"selectionchange":if(c0)break;case"keydown":case"keyup":up(F,a,M)}var ie;if(xu)e:{switch(r){case"compositionstart":var le="onCompositionStart";break e;case"compositionend":le="onCompositionEnd";break e;case"compositionupdate":le="onCompositionUpdate";break e}le=void 0}else ui?Jf(r,a)&&(le="onCompositionEnd"):r==="keydown"&&a.keyCode===229&&(le="onCompositionStart");le&&(Kf&&a.locale!=="ko"&&(ui||le!=="onCompositionStart"?le==="onCompositionEnd"&&ui&&(ie=Bf()):(Kn=M,Eu="value"in Kn?Kn.value:Kn.textContent,ui=!0)),re=na(N,le),0<re.length&&(le=new Gf(le,r,null,a,M),F.push({event:le,listeners:re}),ie?le.data=ie:(ie=Xf(a),ie!==null&&(le.data=ie)))),(ie=XE?ZE(r,a):e0(r,a))&&(N=na(N,"onBeforeInput"),0<N.length&&(M=new Gf("onBeforeInput","beforeinput",null,a,M),F.push({event:M,listeners:N}),M.data=ie))}_p(F,i)})}function bs(r,i,a){return{instance:r,listener:i,currentTarget:a}}function na(r,i){for(var a=i+"Capture",u=[];r!==null;){var d=r,p=d.stateNode;d.tag===5&&p!==null&&(d=p,p=cs(r,a),p!=null&&u.unshift(bs(r,p,d)),p=cs(r,i),p!=null&&u.push(bs(r,p,d))),r=r.return}return u}function hi(r){if(r===null)return null;do r=r.return;while(r&&r.tag!==5);return r||null}function wp(r,i,a,u,d){for(var p=i._reactName,g=[];a!==null&&a!==u;){var w=a,E=w.alternate,N=w.stateNode;if(E!==null&&E===u)break;w.tag===5&&N!==null&&(w=N,d?(E=cs(a,p),E!=null&&g.unshift(bs(a,E,w))):d||(E=cs(a,p),E!=null&&g.push(bs(a,E,w)))),a=a.return}g.length!==0&&r.push({event:i,listeners:g})}var p0=/\r\n?/g,m0=/\u0000|\uFFFD/g;function Ep(r){return(typeof r=="string"?r:""+r).replace(p0,`
`).replace(m0,"")}function ra(r,i,a){if(i=Ep(i),Ep(r)!==i&&a)throw Error(t(425))}function ia(){}var Uu=null,ju=null;function zu(r,i){return r==="textarea"||r==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Wu=typeof setTimeout=="function"?setTimeout:void 0,g0=typeof clearTimeout=="function"?clearTimeout:void 0,Cp=typeof Promise=="function"?Promise:void 0,y0=typeof queueMicrotask=="function"?queueMicrotask:typeof Cp<"u"?function(r){return Cp.resolve(null).then(r).catch(_0)}:Wu;function _0(r){setTimeout(function(){throw r})}function $u(r,i){var a=i,u=0;do{var d=a.nextSibling;if(r.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(u===0){r.removeChild(d),vs(i);return}u--}else a!=="$"&&a!=="$?"&&a!=="$!"||u++;a=d}while(a);vs(i)}function Qn(r){for(;r!=null;r=r.nextSibling){var i=r.nodeType;if(i===1||i===3)break;if(i===8){if(i=r.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return r}function Sp(r){r=r.previousSibling;for(var i=0;r;){if(r.nodeType===8){var a=r.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return r;i--}else a==="/$"&&i++}r=r.previousSibling}return null}var fi=Math.random().toString(36).slice(2),fn="__reactFiber$"+fi,Ps="__reactProps$"+fi,Cn="__reactContainer$"+fi,Bu="__reactEvents$"+fi,v0="__reactListeners$"+fi,w0="__reactHandles$"+fi;function Rr(r){var i=r[fn];if(i)return i;for(var a=r.parentNode;a;){if(i=a[Cn]||a[fn]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(r=Sp(r);r!==null;){if(a=r[fn])return a;r=Sp(r)}return i}r=a,a=r.parentNode}return null}function Ns(r){return r=r[fn]||r[Cn],!r||r.tag!==5&&r.tag!==6&&r.tag!==13&&r.tag!==3?null:r}function pi(r){if(r.tag===5||r.tag===6)return r.stateNode;throw Error(t(33))}function sa(r){return r[Ps]||null}var Vu=[],mi=-1;function Jn(r){return{current:r}}function De(r){0>mi||(r.current=Vu[mi],Vu[mi]=null,mi--)}function be(r,i){mi++,Vu[mi]=r.current,r.current=i}var Xn={},ft=Jn(Xn),St=Jn(!1),br=Xn;function gi(r,i){var a=r.type.contextTypes;if(!a)return Xn;var u=r.stateNode;if(u&&u.__reactInternalMemoizedUnmaskedChildContext===i)return u.__reactInternalMemoizedMaskedChildContext;var d={},p;for(p in a)d[p]=i[p];return u&&(r=r.stateNode,r.__reactInternalMemoizedUnmaskedChildContext=i,r.__reactInternalMemoizedMaskedChildContext=d),d}function kt(r){return r=r.childContextTypes,r!=null}function oa(){De(St),De(ft)}function kp(r,i,a){if(ft.current!==Xn)throw Error(t(168));be(ft,i),be(St,a)}function Ip(r,i,a){var u=r.stateNode;if(i=i.childContextTypes,typeof u.getChildContext!="function")return a;u=u.getChildContext();for(var d in u)if(!(d in i))throw Error(t(108,ae(r)||"Unknown",d));return B({},a,u)}function aa(r){return r=(r=r.stateNode)&&r.__reactInternalMemoizedMergedChildContext||Xn,br=ft.current,be(ft,r),be(St,St.current),!0}function Tp(r,i,a){var u=r.stateNode;if(!u)throw Error(t(169));a?(r=Ip(r,i,br),u.__reactInternalMemoizedMergedChildContext=r,De(St),De(ft),be(ft,r)):De(St),be(St,a)}var Sn=null,la=!1,Hu=!1;function xp(r){Sn===null?Sn=[r]:Sn.push(r)}function E0(r){la=!0,xp(r)}function Zn(){if(!Hu&&Sn!==null){Hu=!0;var r=0,i=ke;try{var a=Sn;for(ke=1;r<a.length;r++){var u=a[r];do u=u(!0);while(u!==null)}Sn=null,la=!1}catch(d){throw Sn!==null&&(Sn=Sn.slice(r+1)),bf(fu,Zn),d}finally{ke=i,Hu=!1}}return null}var yi=[],_i=0,ua=null,ca=0,Ut=[],jt=0,Pr=null,kn=1,In="";function Nr(r,i){yi[_i++]=ca,yi[_i++]=ua,ua=r,ca=i}function Rp(r,i,a){Ut[jt++]=kn,Ut[jt++]=In,Ut[jt++]=Pr,Pr=r;var u=kn;r=In;var d=32-Yt(u)-1;u&=~(1<<d),a+=1;var p=32-Yt(i)+d;if(30<p){var g=d-d%5;p=(u&(1<<g)-1).toString(32),u>>=g,d-=g,kn=1<<32-Yt(i)+d|a<<d|u,In=p+r}else kn=1<<p|a<<d|u,In=r}function Gu(r){r.return!==null&&(Nr(r,1),Rp(r,1,0))}function qu(r){for(;r===ua;)ua=yi[--_i],yi[_i]=null,ca=yi[--_i],yi[_i]=null;for(;r===Pr;)Pr=Ut[--jt],Ut[jt]=null,In=Ut[--jt],Ut[jt]=null,kn=Ut[--jt],Ut[jt]=null}var Ot=null,Lt=null,Oe=!1,Jt=null;function bp(r,i){var a=Bt(5,null,null,0);a.elementType="DELETED",a.stateNode=i,a.return=r,i=r.deletions,i===null?(r.deletions=[a],r.flags|=16):i.push(a)}function Pp(r,i){switch(r.tag){case 5:var a=r.type;return i=i.nodeType!==1||a.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(r.stateNode=i,Ot=r,Lt=Qn(i.firstChild),!0):!1;case 6:return i=r.pendingProps===""||i.nodeType!==3?null:i,i!==null?(r.stateNode=i,Ot=r,Lt=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(a=Pr!==null?{id:kn,overflow:In}:null,r.memoizedState={dehydrated:i,treeContext:a,retryLane:1073741824},a=Bt(18,null,null,0),a.stateNode=i,a.return=r,r.child=a,Ot=r,Lt=null,!0):!1;default:return!1}}function Ku(r){return(r.mode&1)!==0&&(r.flags&128)===0}function Yu(r){if(Oe){var i=Lt;if(i){var a=i;if(!Pp(r,i)){if(Ku(r))throw Error(t(418));i=Qn(a.nextSibling);var u=Ot;i&&Pp(r,i)?bp(u,a):(r.flags=r.flags&-4097|2,Oe=!1,Ot=r)}}else{if(Ku(r))throw Error(t(418));r.flags=r.flags&-4097|2,Oe=!1,Ot=r}}}function Np(r){for(r=r.return;r!==null&&r.tag!==5&&r.tag!==3&&r.tag!==13;)r=r.return;Ot=r}function da(r){if(r!==Ot)return!1;if(!Oe)return Np(r),Oe=!0,!1;var i;if((i=r.tag!==3)&&!(i=r.tag!==5)&&(i=r.type,i=i!=="head"&&i!=="body"&&!zu(r.type,r.memoizedProps)),i&&(i=Lt)){if(Ku(r))throw Ap(),Error(t(418));for(;i;)bp(r,i),i=Qn(i.nextSibling)}if(Np(r),r.tag===13){if(r=r.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(t(317));e:{for(r=r.nextSibling,i=0;r;){if(r.nodeType===8){var a=r.data;if(a==="/$"){if(i===0){Lt=Qn(r.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++}r=r.nextSibling}Lt=null}}else Lt=Ot?Qn(r.stateNode.nextSibling):null;return!0}function Ap(){for(var r=Lt;r;)r=Qn(r.nextSibling)}function vi(){Lt=Ot=null,Oe=!1}function Qu(r){Jt===null?Jt=[r]:Jt.push(r)}var C0=ne.ReactCurrentBatchConfig;function As(r,i,a){if(r=a.ref,r!==null&&typeof r!="function"&&typeof r!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var u=a.stateNode}if(!u)throw Error(t(147,r));var d=u,p=""+r;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===p?i.ref:(i=function(g){var w=d.refs;g===null?delete w[p]:w[p]=g},i._stringRef=p,i)}if(typeof r!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,r))}return r}function ha(r,i){throw r=Object.prototype.toString.call(i),Error(t(31,r==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":r))}function Dp(r){var i=r._init;return i(r._payload)}function Op(r){function i(T,C){if(r){var b=T.deletions;b===null?(T.deletions=[C],T.flags|=16):b.push(C)}}function a(T,C){if(!r)return null;for(;C!==null;)i(T,C),C=C.sibling;return null}function u(T,C){for(T=new Map;C!==null;)C.key!==null?T.set(C.key,C):T.set(C.index,C),C=C.sibling;return T}function d(T,C){return T=ar(T,C),T.index=0,T.sibling=null,T}function p(T,C,b){return T.index=b,r?(b=T.alternate,b!==null?(b=b.index,b<C?(T.flags|=2,C):b):(T.flags|=2,C)):(T.flags|=1048576,C)}function g(T){return r&&T.alternate===null&&(T.flags|=2),T}function w(T,C,b,z){return C===null||C.tag!==6?(C=Wc(b,T.mode,z),C.return=T,C):(C=d(C,b),C.return=T,C)}function E(T,C,b,z){var ee=b.type;return ee===Ie?M(T,C,b.props.children,z,b.key):C!==null&&(C.elementType===ee||typeof ee=="object"&&ee!==null&&ee.$$typeof===Re&&Dp(ee)===C.type)?(z=d(C,b.props),z.ref=As(T,C,b),z.return=T,z):(z=Ma(b.type,b.key,b.props,null,T.mode,z),z.ref=As(T,C,b),z.return=T,z)}function N(T,C,b,z){return C===null||C.tag!==4||C.stateNode.containerInfo!==b.containerInfo||C.stateNode.implementation!==b.implementation?(C=$c(b,T.mode,z),C.return=T,C):(C=d(C,b.children||[]),C.return=T,C)}function M(T,C,b,z,ee){return C===null||C.tag!==7?(C=jr(b,T.mode,z,ee),C.return=T,C):(C=d(C,b),C.return=T,C)}function F(T,C,b){if(typeof C=="string"&&C!==""||typeof C=="number")return C=Wc(""+C,T.mode,b),C.return=T,C;if(typeof C=="object"&&C!==null){switch(C.$$typeof){case he:return b=Ma(C.type,C.key,C.props,null,T.mode,b),b.ref=As(T,null,C),b.return=T,b;case Se:return C=$c(C,T.mode,b),C.return=T,C;case Re:var z=C._init;return F(T,z(C._payload),b)}if(as(C)||V(C))return C=jr(C,T.mode,b,null),C.return=T,C;ha(T,C)}return null}function L(T,C,b,z){var ee=C!==null?C.key:null;if(typeof b=="string"&&b!==""||typeof b=="number")return ee!==null?null:w(T,C,""+b,z);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case he:return b.key===ee?E(T,C,b,z):null;case Se:return b.key===ee?N(T,C,b,z):null;case Re:return ee=b._init,L(T,C,ee(b._payload),z)}if(as(b)||V(b))return ee!==null?null:M(T,C,b,z,null);ha(T,b)}return null}function G(T,C,b,z,ee){if(typeof z=="string"&&z!==""||typeof z=="number")return T=T.get(b)||null,w(C,T,""+z,ee);if(typeof z=="object"&&z!==null){switch(z.$$typeof){case he:return T=T.get(z.key===null?b:z.key)||null,E(C,T,z,ee);case Se:return T=T.get(z.key===null?b:z.key)||null,N(C,T,z,ee);case Re:var re=z._init;return G(T,C,b,re(z._payload),ee)}if(as(z)||V(z))return T=T.get(b)||null,M(C,T,z,ee,null);ha(C,z)}return null}function Y(T,C,b,z){for(var ee=null,re=null,ie=C,le=C=0,tt=null;ie!==null&&le<b.length;le++){ie.index>le?(tt=ie,ie=null):tt=ie.sibling;var Ee=L(T,ie,b[le],z);if(Ee===null){ie===null&&(ie=tt);break}r&&ie&&Ee.alternate===null&&i(T,ie),C=p(Ee,C,le),re===null?ee=Ee:re.sibling=Ee,re=Ee,ie=tt}if(le===b.length)return a(T,ie),Oe&&Nr(T,le),ee;if(ie===null){for(;le<b.length;le++)ie=F(T,b[le],z),ie!==null&&(C=p(ie,C,le),re===null?ee=ie:re.sibling=ie,re=ie);return Oe&&Nr(T,le),ee}for(ie=u(T,ie);le<b.length;le++)tt=G(ie,T,le,b[le],z),tt!==null&&(r&&tt.alternate!==null&&ie.delete(tt.key===null?le:tt.key),C=p(tt,C,le),re===null?ee=tt:re.sibling=tt,re=tt);return r&&ie.forEach(function(lr){return i(T,lr)}),Oe&&Nr(T,le),ee}function Z(T,C,b,z){var ee=V(b);if(typeof ee!="function")throw Error(t(150));if(b=ee.call(b),b==null)throw Error(t(151));for(var re=ee=null,ie=C,le=C=0,tt=null,Ee=b.next();ie!==null&&!Ee.done;le++,Ee=b.next()){ie.index>le?(tt=ie,ie=null):tt=ie.sibling;var lr=L(T,ie,Ee.value,z);if(lr===null){ie===null&&(ie=tt);break}r&&ie&&lr.alternate===null&&i(T,ie),C=p(lr,C,le),re===null?ee=lr:re.sibling=lr,re=lr,ie=tt}if(Ee.done)return a(T,ie),Oe&&Nr(T,le),ee;if(ie===null){for(;!Ee.done;le++,Ee=b.next())Ee=F(T,Ee.value,z),Ee!==null&&(C=p(Ee,C,le),re===null?ee=Ee:re.sibling=Ee,re=Ee);return Oe&&Nr(T,le),ee}for(ie=u(T,ie);!Ee.done;le++,Ee=b.next())Ee=G(ie,T,le,Ee.value,z),Ee!==null&&(r&&Ee.alternate!==null&&ie.delete(Ee.key===null?le:Ee.key),C=p(Ee,C,le),re===null?ee=Ee:re.sibling=Ee,re=Ee);return r&&ie.forEach(function(tC){return i(T,tC)}),Oe&&Nr(T,le),ee}function He(T,C,b,z){if(typeof b=="object"&&b!==null&&b.type===Ie&&b.key===null&&(b=b.props.children),typeof b=="object"&&b!==null){switch(b.$$typeof){case he:e:{for(var ee=b.key,re=C;re!==null;){if(re.key===ee){if(ee=b.type,ee===Ie){if(re.tag===7){a(T,re.sibling),C=d(re,b.props.children),C.return=T,T=C;break e}}else if(re.elementType===ee||typeof ee=="object"&&ee!==null&&ee.$$typeof===Re&&Dp(ee)===re.type){a(T,re.sibling),C=d(re,b.props),C.ref=As(T,re,b),C.return=T,T=C;break e}a(T,re);break}else i(T,re);re=re.sibling}b.type===Ie?(C=jr(b.props.children,T.mode,z,b.key),C.return=T,T=C):(z=Ma(b.type,b.key,b.props,null,T.mode,z),z.ref=As(T,C,b),z.return=T,T=z)}return g(T);case Se:e:{for(re=b.key;C!==null;){if(C.key===re)if(C.tag===4&&C.stateNode.containerInfo===b.containerInfo&&C.stateNode.implementation===b.implementation){a(T,C.sibling),C=d(C,b.children||[]),C.return=T,T=C;break e}else{a(T,C);break}else i(T,C);C=C.sibling}C=$c(b,T.mode,z),C.return=T,T=C}return g(T);case Re:return re=b._init,He(T,C,re(b._payload),z)}if(as(b))return Y(T,C,b,z);if(V(b))return Z(T,C,b,z);ha(T,b)}return typeof b=="string"&&b!==""||typeof b=="number"?(b=""+b,C!==null&&C.tag===6?(a(T,C.sibling),C=d(C,b),C.return=T,T=C):(a(T,C),C=Wc(b,T.mode,z),C.return=T,T=C),g(T)):a(T,C)}return He}var wi=Op(!0),Lp=Op(!1),fa=Jn(null),pa=null,Ei=null,Ju=null;function Xu(){Ju=Ei=pa=null}function Zu(r){var i=fa.current;De(fa),r._currentValue=i}function ec(r,i,a){for(;r!==null;){var u=r.alternate;if((r.childLanes&i)!==i?(r.childLanes|=i,u!==null&&(u.childLanes|=i)):u!==null&&(u.childLanes&i)!==i&&(u.childLanes|=i),r===a)break;r=r.return}}function Ci(r,i){pa=r,Ju=Ei=null,r=r.dependencies,r!==null&&r.firstContext!==null&&((r.lanes&i)!==0&&(It=!0),r.firstContext=null)}function zt(r){var i=r._currentValue;if(Ju!==r)if(r={context:r,memoizedValue:i,next:null},Ei===null){if(pa===null)throw Error(t(308));Ei=r,pa.dependencies={lanes:0,firstContext:r}}else Ei=Ei.next=r;return i}var Ar=null;function tc(r){Ar===null?Ar=[r]:Ar.push(r)}function Mp(r,i,a,u){var d=i.interleaved;return d===null?(a.next=a,tc(i)):(a.next=d.next,d.next=a),i.interleaved=a,Tn(r,u)}function Tn(r,i){r.lanes|=i;var a=r.alternate;for(a!==null&&(a.lanes|=i),a=r,r=r.return;r!==null;)r.childLanes|=i,a=r.alternate,a!==null&&(a.childLanes|=i),a=r,r=r.return;return a.tag===3?a.stateNode:null}var er=!1;function nc(r){r.updateQueue={baseState:r.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Fp(r,i){r=r.updateQueue,i.updateQueue===r&&(i.updateQueue={baseState:r.baseState,firstBaseUpdate:r.firstBaseUpdate,lastBaseUpdate:r.lastBaseUpdate,shared:r.shared,effects:r.effects})}function xn(r,i){return{eventTime:r,lane:i,tag:0,payload:null,callback:null,next:null}}function tr(r,i,a){var u=r.updateQueue;if(u===null)return null;if(u=u.shared,(ve&2)!==0){var d=u.pending;return d===null?i.next=i:(i.next=d.next,d.next=i),u.pending=i,Tn(r,a)}return d=u.interleaved,d===null?(i.next=i,tc(u)):(i.next=d.next,d.next=i),u.interleaved=i,Tn(r,a)}function ma(r,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194240)!==0)){var u=i.lanes;u&=r.pendingLanes,a|=u,i.lanes=a,gu(r,a)}}function Up(r,i){var a=r.updateQueue,u=r.alternate;if(u!==null&&(u=u.updateQueue,a===u)){var d=null,p=null;if(a=a.firstBaseUpdate,a!==null){do{var g={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};p===null?d=p=g:p=p.next=g,a=a.next}while(a!==null);p===null?d=p=i:p=p.next=i}else d=p=i;a={baseState:u.baseState,firstBaseUpdate:d,lastBaseUpdate:p,shared:u.shared,effects:u.effects},r.updateQueue=a;return}r=a.lastBaseUpdate,r===null?a.firstBaseUpdate=i:r.next=i,a.lastBaseUpdate=i}function ga(r,i,a,u){var d=r.updateQueue;er=!1;var p=d.firstBaseUpdate,g=d.lastBaseUpdate,w=d.shared.pending;if(w!==null){d.shared.pending=null;var E=w,N=E.next;E.next=null,g===null?p=N:g.next=N,g=E;var M=r.alternate;M!==null&&(M=M.updateQueue,w=M.lastBaseUpdate,w!==g&&(w===null?M.firstBaseUpdate=N:w.next=N,M.lastBaseUpdate=E))}if(p!==null){var F=d.baseState;g=0,M=N=E=null,w=p;do{var L=w.lane,G=w.eventTime;if((u&L)===L){M!==null&&(M=M.next={eventTime:G,lane:0,tag:w.tag,payload:w.payload,callback:w.callback,next:null});e:{var Y=r,Z=w;switch(L=i,G=a,Z.tag){case 1:if(Y=Z.payload,typeof Y=="function"){F=Y.call(G,F,L);break e}F=Y;break e;case 3:Y.flags=Y.flags&-65537|128;case 0:if(Y=Z.payload,L=typeof Y=="function"?Y.call(G,F,L):Y,L==null)break e;F=B({},F,L);break e;case 2:er=!0}}w.callback!==null&&w.lane!==0&&(r.flags|=64,L=d.effects,L===null?d.effects=[w]:L.push(w))}else G={eventTime:G,lane:L,tag:w.tag,payload:w.payload,callback:w.callback,next:null},M===null?(N=M=G,E=F):M=M.next=G,g|=L;if(w=w.next,w===null){if(w=d.shared.pending,w===null)break;L=w,w=L.next,L.next=null,d.lastBaseUpdate=L,d.shared.pending=null}}while(!0);if(M===null&&(E=F),d.baseState=E,d.firstBaseUpdate=N,d.lastBaseUpdate=M,i=d.shared.interleaved,i!==null){d=i;do g|=d.lane,d=d.next;while(d!==i)}else p===null&&(d.shared.lanes=0);Lr|=g,r.lanes=g,r.memoizedState=F}}function jp(r,i,a){if(r=i.effects,i.effects=null,r!==null)for(i=0;i<r.length;i++){var u=r[i],d=u.callback;if(d!==null){if(u.callback=null,u=a,typeof d!="function")throw Error(t(191,d));d.call(u)}}}var Ds={},pn=Jn(Ds),Os=Jn(Ds),Ls=Jn(Ds);function Dr(r){if(r===Ds)throw Error(t(174));return r}function rc(r,i){switch(be(Ls,i),be(Os,r),be(pn,Ds),r=i.nodeType,r){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:iu(null,"");break;default:r=r===8?i.parentNode:i,i=r.namespaceURI||null,r=r.tagName,i=iu(i,r)}De(pn),be(pn,i)}function Si(){De(pn),De(Os),De(Ls)}function zp(r){Dr(Ls.current);var i=Dr(pn.current),a=iu(i,r.type);i!==a&&(be(Os,r),be(pn,a))}function ic(r){Os.current===r&&(De(pn),De(Os))}var Ue=Jn(0);function ya(r){for(var i=r;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===r)break;for(;i.sibling===null;){if(i.return===null||i.return===r)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var sc=[];function oc(){for(var r=0;r<sc.length;r++)sc[r]._workInProgressVersionPrimary=null;sc.length=0}var _a=ne.ReactCurrentDispatcher,ac=ne.ReactCurrentBatchConfig,Or=0,je=null,Ke=null,Ze=null,va=!1,Ms=!1,Fs=0,S0=0;function pt(){throw Error(t(321))}function lc(r,i){if(i===null)return!1;for(var a=0;a<i.length&&a<r.length;a++)if(!Qt(r[a],i[a]))return!1;return!0}function uc(r,i,a,u,d,p){if(Or=p,je=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,_a.current=r===null||r.memoizedState===null?x0:R0,r=a(u,d),Ms){p=0;do{if(Ms=!1,Fs=0,25<=p)throw Error(t(301));p+=1,Ze=Ke=null,i.updateQueue=null,_a.current=b0,r=a(u,d)}while(Ms)}if(_a.current=Ca,i=Ke!==null&&Ke.next!==null,Or=0,Ze=Ke=je=null,va=!1,i)throw Error(t(300));return r}function cc(){var r=Fs!==0;return Fs=0,r}function mn(){var r={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ze===null?je.memoizedState=Ze=r:Ze=Ze.next=r,Ze}function Wt(){if(Ke===null){var r=je.alternate;r=r!==null?r.memoizedState:null}else r=Ke.next;var i=Ze===null?je.memoizedState:Ze.next;if(i!==null)Ze=i,Ke=r;else{if(r===null)throw Error(t(310));Ke=r,r={memoizedState:Ke.memoizedState,baseState:Ke.baseState,baseQueue:Ke.baseQueue,queue:Ke.queue,next:null},Ze===null?je.memoizedState=Ze=r:Ze=Ze.next=r}return Ze}function Us(r,i){return typeof i=="function"?i(r):i}function dc(r){var i=Wt(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=r;var u=Ke,d=u.baseQueue,p=a.pending;if(p!==null){if(d!==null){var g=d.next;d.next=p.next,p.next=g}u.baseQueue=d=p,a.pending=null}if(d!==null){p=d.next,u=u.baseState;var w=g=null,E=null,N=p;do{var M=N.lane;if((Or&M)===M)E!==null&&(E=E.next={lane:0,action:N.action,hasEagerState:N.hasEagerState,eagerState:N.eagerState,next:null}),u=N.hasEagerState?N.eagerState:r(u,N.action);else{var F={lane:M,action:N.action,hasEagerState:N.hasEagerState,eagerState:N.eagerState,next:null};E===null?(w=E=F,g=u):E=E.next=F,je.lanes|=M,Lr|=M}N=N.next}while(N!==null&&N!==p);E===null?g=u:E.next=w,Qt(u,i.memoizedState)||(It=!0),i.memoizedState=u,i.baseState=g,i.baseQueue=E,a.lastRenderedState=u}if(r=a.interleaved,r!==null){d=r;do p=d.lane,je.lanes|=p,Lr|=p,d=d.next;while(d!==r)}else d===null&&(a.lanes=0);return[i.memoizedState,a.dispatch]}function hc(r){var i=Wt(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=r;var u=a.dispatch,d=a.pending,p=i.memoizedState;if(d!==null){a.pending=null;var g=d=d.next;do p=r(p,g.action),g=g.next;while(g!==d);Qt(p,i.memoizedState)||(It=!0),i.memoizedState=p,i.baseQueue===null&&(i.baseState=p),a.lastRenderedState=p}return[p,u]}function Wp(){}function $p(r,i){var a=je,u=Wt(),d=i(),p=!Qt(u.memoizedState,d);if(p&&(u.memoizedState=d,It=!0),u=u.queue,fc(Hp.bind(null,a,u,r),[r]),u.getSnapshot!==i||p||Ze!==null&&Ze.memoizedState.tag&1){if(a.flags|=2048,js(9,Vp.bind(null,a,u,d,i),void 0,null),et===null)throw Error(t(349));(Or&30)!==0||Bp(a,i,d)}return d}function Bp(r,i,a){r.flags|=16384,r={getSnapshot:i,value:a},i=je.updateQueue,i===null?(i={lastEffect:null,stores:null},je.updateQueue=i,i.stores=[r]):(a=i.stores,a===null?i.stores=[r]:a.push(r))}function Vp(r,i,a,u){i.value=a,i.getSnapshot=u,Gp(i)&&qp(r)}function Hp(r,i,a){return a(function(){Gp(i)&&qp(r)})}function Gp(r){var i=r.getSnapshot;r=r.value;try{var a=i();return!Qt(r,a)}catch{return!0}}function qp(r){var i=Tn(r,1);i!==null&&tn(i,r,1,-1)}function Kp(r){var i=mn();return typeof r=="function"&&(r=r()),i.memoizedState=i.baseState=r,r={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Us,lastRenderedState:r},i.queue=r,r=r.dispatch=T0.bind(null,je,r),[i.memoizedState,r]}function js(r,i,a,u){return r={tag:r,create:i,destroy:a,deps:u,next:null},i=je.updateQueue,i===null?(i={lastEffect:null,stores:null},je.updateQueue=i,i.lastEffect=r.next=r):(a=i.lastEffect,a===null?i.lastEffect=r.next=r:(u=a.next,a.next=r,r.next=u,i.lastEffect=r)),r}function Yp(){return Wt().memoizedState}function wa(r,i,a,u){var d=mn();je.flags|=r,d.memoizedState=js(1|i,a,void 0,u===void 0?null:u)}function Ea(r,i,a,u){var d=Wt();u=u===void 0?null:u;var p=void 0;if(Ke!==null){var g=Ke.memoizedState;if(p=g.destroy,u!==null&&lc(u,g.deps)){d.memoizedState=js(i,a,p,u);return}}je.flags|=r,d.memoizedState=js(1|i,a,p,u)}function Qp(r,i){return wa(8390656,8,r,i)}function fc(r,i){return Ea(2048,8,r,i)}function Jp(r,i){return Ea(4,2,r,i)}function Xp(r,i){return Ea(4,4,r,i)}function Zp(r,i){if(typeof i=="function")return r=r(),i(r),function(){i(null)};if(i!=null)return r=r(),i.current=r,function(){i.current=null}}function em(r,i,a){return a=a!=null?a.concat([r]):null,Ea(4,4,Zp.bind(null,i,r),a)}function pc(){}function tm(r,i){var a=Wt();i=i===void 0?null:i;var u=a.memoizedState;return u!==null&&i!==null&&lc(i,u[1])?u[0]:(a.memoizedState=[r,i],r)}function nm(r,i){var a=Wt();i=i===void 0?null:i;var u=a.memoizedState;return u!==null&&i!==null&&lc(i,u[1])?u[0]:(r=r(),a.memoizedState=[r,i],r)}function rm(r,i,a){return(Or&21)===0?(r.baseState&&(r.baseState=!1,It=!0),r.memoizedState=a):(Qt(a,i)||(a=Df(),je.lanes|=a,Lr|=a,r.baseState=!0),i)}function k0(r,i){var a=ke;ke=a!==0&&4>a?a:4,r(!0);var u=ac.transition;ac.transition={};try{r(!1),i()}finally{ke=a,ac.transition=u}}function im(){return Wt().memoizedState}function I0(r,i,a){var u=sr(r);if(a={lane:u,action:a,hasEagerState:!1,eagerState:null,next:null},sm(r))om(i,a);else if(a=Mp(r,i,a,u),a!==null){var d=vt();tn(a,r,u,d),am(a,i,u)}}function T0(r,i,a){var u=sr(r),d={lane:u,action:a,hasEagerState:!1,eagerState:null,next:null};if(sm(r))om(i,d);else{var p=r.alternate;if(r.lanes===0&&(p===null||p.lanes===0)&&(p=i.lastRenderedReducer,p!==null))try{var g=i.lastRenderedState,w=p(g,a);if(d.hasEagerState=!0,d.eagerState=w,Qt(w,g)){var E=i.interleaved;E===null?(d.next=d,tc(i)):(d.next=E.next,E.next=d),i.interleaved=d;return}}catch{}finally{}a=Mp(r,i,d,u),a!==null&&(d=vt(),tn(a,r,u,d),am(a,i,u))}}function sm(r){var i=r.alternate;return r===je||i!==null&&i===je}function om(r,i){Ms=va=!0;var a=r.pending;a===null?i.next=i:(i.next=a.next,a.next=i),r.pending=i}function am(r,i,a){if((a&4194240)!==0){var u=i.lanes;u&=r.pendingLanes,a|=u,i.lanes=a,gu(r,a)}}var Ca={readContext:zt,useCallback:pt,useContext:pt,useEffect:pt,useImperativeHandle:pt,useInsertionEffect:pt,useLayoutEffect:pt,useMemo:pt,useReducer:pt,useRef:pt,useState:pt,useDebugValue:pt,useDeferredValue:pt,useTransition:pt,useMutableSource:pt,useSyncExternalStore:pt,useId:pt,unstable_isNewReconciler:!1},x0={readContext:zt,useCallback:function(r,i){return mn().memoizedState=[r,i===void 0?null:i],r},useContext:zt,useEffect:Qp,useImperativeHandle:function(r,i,a){return a=a!=null?a.concat([r]):null,wa(4194308,4,Zp.bind(null,i,r),a)},useLayoutEffect:function(r,i){return wa(4194308,4,r,i)},useInsertionEffect:function(r,i){return wa(4,2,r,i)},useMemo:function(r,i){var a=mn();return i=i===void 0?null:i,r=r(),a.memoizedState=[r,i],r},useReducer:function(r,i,a){var u=mn();return i=a!==void 0?a(i):i,u.memoizedState=u.baseState=i,r={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:r,lastRenderedState:i},u.queue=r,r=r.dispatch=I0.bind(null,je,r),[u.memoizedState,r]},useRef:function(r){var i=mn();return r={current:r},i.memoizedState=r},useState:Kp,useDebugValue:pc,useDeferredValue:function(r){return mn().memoizedState=r},useTransition:function(){var r=Kp(!1),i=r[0];return r=k0.bind(null,r[1]),mn().memoizedState=r,[i,r]},useMutableSource:function(){},useSyncExternalStore:function(r,i,a){var u=je,d=mn();if(Oe){if(a===void 0)throw Error(t(407));a=a()}else{if(a=i(),et===null)throw Error(t(349));(Or&30)!==0||Bp(u,i,a)}d.memoizedState=a;var p={value:a,getSnapshot:i};return d.queue=p,Qp(Hp.bind(null,u,p,r),[r]),u.flags|=2048,js(9,Vp.bind(null,u,p,a,i),void 0,null),a},useId:function(){var r=mn(),i=et.identifierPrefix;if(Oe){var a=In,u=kn;a=(u&~(1<<32-Yt(u)-1)).toString(32)+a,i=":"+i+"R"+a,a=Fs++,0<a&&(i+="H"+a.toString(32)),i+=":"}else a=S0++,i=":"+i+"r"+a.toString(32)+":";return r.memoizedState=i},unstable_isNewReconciler:!1},R0={readContext:zt,useCallback:tm,useContext:zt,useEffect:fc,useImperativeHandle:em,useInsertionEffect:Jp,useLayoutEffect:Xp,useMemo:nm,useReducer:dc,useRef:Yp,useState:function(){return dc(Us)},useDebugValue:pc,useDeferredValue:function(r){var i=Wt();return rm(i,Ke.memoizedState,r)},useTransition:function(){var r=dc(Us)[0],i=Wt().memoizedState;return[r,i]},useMutableSource:Wp,useSyncExternalStore:$p,useId:im,unstable_isNewReconciler:!1},b0={readContext:zt,useCallback:tm,useContext:zt,useEffect:fc,useImperativeHandle:em,useInsertionEffect:Jp,useLayoutEffect:Xp,useMemo:nm,useReducer:hc,useRef:Yp,useState:function(){return hc(Us)},useDebugValue:pc,useDeferredValue:function(r){var i=Wt();return Ke===null?i.memoizedState=r:rm(i,Ke.memoizedState,r)},useTransition:function(){var r=hc(Us)[0],i=Wt().memoizedState;return[r,i]},useMutableSource:Wp,useSyncExternalStore:$p,useId:im,unstable_isNewReconciler:!1};function Xt(r,i){if(r&&r.defaultProps){i=B({},i),r=r.defaultProps;for(var a in r)i[a]===void 0&&(i[a]=r[a]);return i}return i}function mc(r,i,a,u){i=r.memoizedState,a=a(u,i),a=a==null?i:B({},i,a),r.memoizedState=a,r.lanes===0&&(r.updateQueue.baseState=a)}var Sa={isMounted:function(r){return(r=r._reactInternals)?xr(r)===r:!1},enqueueSetState:function(r,i,a){r=r._reactInternals;var u=vt(),d=sr(r),p=xn(u,d);p.payload=i,a!=null&&(p.callback=a),i=tr(r,p,d),i!==null&&(tn(i,r,d,u),ma(i,r,d))},enqueueReplaceState:function(r,i,a){r=r._reactInternals;var u=vt(),d=sr(r),p=xn(u,d);p.tag=1,p.payload=i,a!=null&&(p.callback=a),i=tr(r,p,d),i!==null&&(tn(i,r,d,u),ma(i,r,d))},enqueueForceUpdate:function(r,i){r=r._reactInternals;var a=vt(),u=sr(r),d=xn(a,u);d.tag=2,i!=null&&(d.callback=i),i=tr(r,d,u),i!==null&&(tn(i,r,u,a),ma(i,r,u))}};function lm(r,i,a,u,d,p,g){return r=r.stateNode,typeof r.shouldComponentUpdate=="function"?r.shouldComponentUpdate(u,p,g):i.prototype&&i.prototype.isPureReactComponent?!Is(a,u)||!Is(d,p):!0}function um(r,i,a){var u=!1,d=Xn,p=i.contextType;return typeof p=="object"&&p!==null?p=zt(p):(d=kt(i)?br:ft.current,u=i.contextTypes,p=(u=u!=null)?gi(r,d):Xn),i=new i(a,p),r.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Sa,r.stateNode=i,i._reactInternals=r,u&&(r=r.stateNode,r.__reactInternalMemoizedUnmaskedChildContext=d,r.__reactInternalMemoizedMaskedChildContext=p),i}function cm(r,i,a,u){r=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,u),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,u),i.state!==r&&Sa.enqueueReplaceState(i,i.state,null)}function gc(r,i,a,u){var d=r.stateNode;d.props=a,d.state=r.memoizedState,d.refs={},nc(r);var p=i.contextType;typeof p=="object"&&p!==null?d.context=zt(p):(p=kt(i)?br:ft.current,d.context=gi(r,p)),d.state=r.memoizedState,p=i.getDerivedStateFromProps,typeof p=="function"&&(mc(r,i,p,a),d.state=r.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(i=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),i!==d.state&&Sa.enqueueReplaceState(d,d.state,null),ga(r,a,d,u),d.state=r.memoizedState),typeof d.componentDidMount=="function"&&(r.flags|=4194308)}function ki(r,i){try{var a="",u=i;do a+=ue(u),u=u.return;while(u);var d=a}catch(p){d=`
Error generating stack: `+p.message+`
`+p.stack}return{value:r,source:i,stack:d,digest:null}}function yc(r,i,a){return{value:r,source:null,stack:a??null,digest:i??null}}function _c(r,i){try{console.error(i.value)}catch(a){setTimeout(function(){throw a})}}var P0=typeof WeakMap=="function"?WeakMap:Map;function dm(r,i,a){a=xn(-1,a),a.tag=3,a.payload={element:null};var u=i.value;return a.callback=function(){Pa||(Pa=!0,Dc=u),_c(r,i)},a}function hm(r,i,a){a=xn(-1,a),a.tag=3;var u=r.type.getDerivedStateFromError;if(typeof u=="function"){var d=i.value;a.payload=function(){return u(d)},a.callback=function(){_c(r,i)}}var p=r.stateNode;return p!==null&&typeof p.componentDidCatch=="function"&&(a.callback=function(){_c(r,i),typeof u!="function"&&(rr===null?rr=new Set([this]):rr.add(this));var g=i.stack;this.componentDidCatch(i.value,{componentStack:g!==null?g:""})}),a}function fm(r,i,a){var u=r.pingCache;if(u===null){u=r.pingCache=new P0;var d=new Set;u.set(i,d)}else d=u.get(i),d===void 0&&(d=new Set,u.set(i,d));d.has(a)||(d.add(a),r=V0.bind(null,r,i,a),i.then(r,r))}function pm(r){do{var i;if((i=r.tag===13)&&(i=r.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return r;r=r.return}while(r!==null);return null}function mm(r,i,a,u,d){return(r.mode&1)===0?(r===i?r.flags|=65536:(r.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(i=xn(-1,1),i.tag=2,tr(a,i,1))),a.lanes|=1),r):(r.flags|=65536,r.lanes=d,r)}var N0=ne.ReactCurrentOwner,It=!1;function _t(r,i,a,u){i.child=r===null?Lp(i,null,a,u):wi(i,r.child,a,u)}function gm(r,i,a,u,d){a=a.render;var p=i.ref;return Ci(i,d),u=uc(r,i,a,u,p,d),a=cc(),r!==null&&!It?(i.updateQueue=r.updateQueue,i.flags&=-2053,r.lanes&=~d,Rn(r,i,d)):(Oe&&a&&Gu(i),i.flags|=1,_t(r,i,u,d),i.child)}function ym(r,i,a,u,d){if(r===null){var p=a.type;return typeof p=="function"&&!zc(p)&&p.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(i.tag=15,i.type=p,_m(r,i,p,u,d)):(r=Ma(a.type,null,u,i,i.mode,d),r.ref=i.ref,r.return=i,i.child=r)}if(p=r.child,(r.lanes&d)===0){var g=p.memoizedProps;if(a=a.compare,a=a!==null?a:Is,a(g,u)&&r.ref===i.ref)return Rn(r,i,d)}return i.flags|=1,r=ar(p,u),r.ref=i.ref,r.return=i,i.child=r}function _m(r,i,a,u,d){if(r!==null){var p=r.memoizedProps;if(Is(p,u)&&r.ref===i.ref)if(It=!1,i.pendingProps=u=p,(r.lanes&d)!==0)(r.flags&131072)!==0&&(It=!0);else return i.lanes=r.lanes,Rn(r,i,d)}return vc(r,i,a,u,d)}function vm(r,i,a){var u=i.pendingProps,d=u.children,p=r!==null?r.memoizedState:null;if(u.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},be(Ti,Mt),Mt|=a;else{if((a&1073741824)===0)return r=p!==null?p.baseLanes|a:a,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:r,cachePool:null,transitions:null},i.updateQueue=null,be(Ti,Mt),Mt|=r,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},u=p!==null?p.baseLanes:a,be(Ti,Mt),Mt|=u}else p!==null?(u=p.baseLanes|a,i.memoizedState=null):u=a,be(Ti,Mt),Mt|=u;return _t(r,i,d,a),i.child}function wm(r,i){var a=i.ref;(r===null&&a!==null||r!==null&&r.ref!==a)&&(i.flags|=512,i.flags|=2097152)}function vc(r,i,a,u,d){var p=kt(a)?br:ft.current;return p=gi(i,p),Ci(i,d),a=uc(r,i,a,u,p,d),u=cc(),r!==null&&!It?(i.updateQueue=r.updateQueue,i.flags&=-2053,r.lanes&=~d,Rn(r,i,d)):(Oe&&u&&Gu(i),i.flags|=1,_t(r,i,a,d),i.child)}function Em(r,i,a,u,d){if(kt(a)){var p=!0;aa(i)}else p=!1;if(Ci(i,d),i.stateNode===null)Ia(r,i),um(i,a,u),gc(i,a,u,d),u=!0;else if(r===null){var g=i.stateNode,w=i.memoizedProps;g.props=w;var E=g.context,N=a.contextType;typeof N=="object"&&N!==null?N=zt(N):(N=kt(a)?br:ft.current,N=gi(i,N));var M=a.getDerivedStateFromProps,F=typeof M=="function"||typeof g.getSnapshotBeforeUpdate=="function";F||typeof g.UNSAFE_componentWillReceiveProps!="function"&&typeof g.componentWillReceiveProps!="function"||(w!==u||E!==N)&&cm(i,g,u,N),er=!1;var L=i.memoizedState;g.state=L,ga(i,u,g,d),E=i.memoizedState,w!==u||L!==E||St.current||er?(typeof M=="function"&&(mc(i,a,M,u),E=i.memoizedState),(w=er||lm(i,a,w,u,L,E,N))?(F||typeof g.UNSAFE_componentWillMount!="function"&&typeof g.componentWillMount!="function"||(typeof g.componentWillMount=="function"&&g.componentWillMount(),typeof g.UNSAFE_componentWillMount=="function"&&g.UNSAFE_componentWillMount()),typeof g.componentDidMount=="function"&&(i.flags|=4194308)):(typeof g.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=u,i.memoizedState=E),g.props=u,g.state=E,g.context=N,u=w):(typeof g.componentDidMount=="function"&&(i.flags|=4194308),u=!1)}else{g=i.stateNode,Fp(r,i),w=i.memoizedProps,N=i.type===i.elementType?w:Xt(i.type,w),g.props=N,F=i.pendingProps,L=g.context,E=a.contextType,typeof E=="object"&&E!==null?E=zt(E):(E=kt(a)?br:ft.current,E=gi(i,E));var G=a.getDerivedStateFromProps;(M=typeof G=="function"||typeof g.getSnapshotBeforeUpdate=="function")||typeof g.UNSAFE_componentWillReceiveProps!="function"&&typeof g.componentWillReceiveProps!="function"||(w!==F||L!==E)&&cm(i,g,u,E),er=!1,L=i.memoizedState,g.state=L,ga(i,u,g,d);var Y=i.memoizedState;w!==F||L!==Y||St.current||er?(typeof G=="function"&&(mc(i,a,G,u),Y=i.memoizedState),(N=er||lm(i,a,N,u,L,Y,E)||!1)?(M||typeof g.UNSAFE_componentWillUpdate!="function"&&typeof g.componentWillUpdate!="function"||(typeof g.componentWillUpdate=="function"&&g.componentWillUpdate(u,Y,E),typeof g.UNSAFE_componentWillUpdate=="function"&&g.UNSAFE_componentWillUpdate(u,Y,E)),typeof g.componentDidUpdate=="function"&&(i.flags|=4),typeof g.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof g.componentDidUpdate!="function"||w===r.memoizedProps&&L===r.memoizedState||(i.flags|=4),typeof g.getSnapshotBeforeUpdate!="function"||w===r.memoizedProps&&L===r.memoizedState||(i.flags|=1024),i.memoizedProps=u,i.memoizedState=Y),g.props=u,g.state=Y,g.context=E,u=N):(typeof g.componentDidUpdate!="function"||w===r.memoizedProps&&L===r.memoizedState||(i.flags|=4),typeof g.getSnapshotBeforeUpdate!="function"||w===r.memoizedProps&&L===r.memoizedState||(i.flags|=1024),u=!1)}return wc(r,i,a,u,p,d)}function wc(r,i,a,u,d,p){wm(r,i);var g=(i.flags&128)!==0;if(!u&&!g)return d&&Tp(i,a,!1),Rn(r,i,p);u=i.stateNode,N0.current=i;var w=g&&typeof a.getDerivedStateFromError!="function"?null:u.render();return i.flags|=1,r!==null&&g?(i.child=wi(i,r.child,null,p),i.child=wi(i,null,w,p)):_t(r,i,w,p),i.memoizedState=u.state,d&&Tp(i,a,!0),i.child}function Cm(r){var i=r.stateNode;i.pendingContext?kp(r,i.pendingContext,i.pendingContext!==i.context):i.context&&kp(r,i.context,!1),rc(r,i.containerInfo)}function Sm(r,i,a,u,d){return vi(),Qu(d),i.flags|=256,_t(r,i,a,u),i.child}var Ec={dehydrated:null,treeContext:null,retryLane:0};function Cc(r){return{baseLanes:r,cachePool:null,transitions:null}}function km(r,i,a){var u=i.pendingProps,d=Ue.current,p=!1,g=(i.flags&128)!==0,w;if((w=g)||(w=r!==null&&r.memoizedState===null?!1:(d&2)!==0),w?(p=!0,i.flags&=-129):(r===null||r.memoizedState!==null)&&(d|=1),be(Ue,d&1),r===null)return Yu(i),r=i.memoizedState,r!==null&&(r=r.dehydrated,r!==null)?((i.mode&1)===0?i.lanes=1:r.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(g=u.children,r=u.fallback,p?(u=i.mode,p=i.child,g={mode:"hidden",children:g},(u&1)===0&&p!==null?(p.childLanes=0,p.pendingProps=g):p=Fa(g,u,0,null),r=jr(r,u,a,null),p.return=i,r.return=i,p.sibling=r,i.child=p,i.child.memoizedState=Cc(a),i.memoizedState=Ec,r):Sc(i,g));if(d=r.memoizedState,d!==null&&(w=d.dehydrated,w!==null))return A0(r,i,g,u,w,d,a);if(p){p=u.fallback,g=i.mode,d=r.child,w=d.sibling;var E={mode:"hidden",children:u.children};return(g&1)===0&&i.child!==d?(u=i.child,u.childLanes=0,u.pendingProps=E,i.deletions=null):(u=ar(d,E),u.subtreeFlags=d.subtreeFlags&14680064),w!==null?p=ar(w,p):(p=jr(p,g,a,null),p.flags|=2),p.return=i,u.return=i,u.sibling=p,i.child=u,u=p,p=i.child,g=r.child.memoizedState,g=g===null?Cc(a):{baseLanes:g.baseLanes|a,cachePool:null,transitions:g.transitions},p.memoizedState=g,p.childLanes=r.childLanes&~a,i.memoizedState=Ec,u}return p=r.child,r=p.sibling,u=ar(p,{mode:"visible",children:u.children}),(i.mode&1)===0&&(u.lanes=a),u.return=i,u.sibling=null,r!==null&&(a=i.deletions,a===null?(i.deletions=[r],i.flags|=16):a.push(r)),i.child=u,i.memoizedState=null,u}function Sc(r,i){return i=Fa({mode:"visible",children:i},r.mode,0,null),i.return=r,r.child=i}function ka(r,i,a,u){return u!==null&&Qu(u),wi(i,r.child,null,a),r=Sc(i,i.pendingProps.children),r.flags|=2,i.memoizedState=null,r}function A0(r,i,a,u,d,p,g){if(a)return i.flags&256?(i.flags&=-257,u=yc(Error(t(422))),ka(r,i,g,u)):i.memoizedState!==null?(i.child=r.child,i.flags|=128,null):(p=u.fallback,d=i.mode,u=Fa({mode:"visible",children:u.children},d,0,null),p=jr(p,d,g,null),p.flags|=2,u.return=i,p.return=i,u.sibling=p,i.child=u,(i.mode&1)!==0&&wi(i,r.child,null,g),i.child.memoizedState=Cc(g),i.memoizedState=Ec,p);if((i.mode&1)===0)return ka(r,i,g,null);if(d.data==="$!"){if(u=d.nextSibling&&d.nextSibling.dataset,u)var w=u.dgst;return u=w,p=Error(t(419)),u=yc(p,u,void 0),ka(r,i,g,u)}if(w=(g&r.childLanes)!==0,It||w){if(u=et,u!==null){switch(g&-g){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(u.suspendedLanes|g))!==0?0:d,d!==0&&d!==p.retryLane&&(p.retryLane=d,Tn(r,d),tn(u,r,d,-1))}return jc(),u=yc(Error(t(421))),ka(r,i,g,u)}return d.data==="$?"?(i.flags|=128,i.child=r.child,i=H0.bind(null,r),d._reactRetry=i,null):(r=p.treeContext,Lt=Qn(d.nextSibling),Ot=i,Oe=!0,Jt=null,r!==null&&(Ut[jt++]=kn,Ut[jt++]=In,Ut[jt++]=Pr,kn=r.id,In=r.overflow,Pr=i),i=Sc(i,u.children),i.flags|=4096,i)}function Im(r,i,a){r.lanes|=i;var u=r.alternate;u!==null&&(u.lanes|=i),ec(r.return,i,a)}function kc(r,i,a,u,d){var p=r.memoizedState;p===null?r.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:u,tail:a,tailMode:d}:(p.isBackwards=i,p.rendering=null,p.renderingStartTime=0,p.last=u,p.tail=a,p.tailMode=d)}function Tm(r,i,a){var u=i.pendingProps,d=u.revealOrder,p=u.tail;if(_t(r,i,u.children,a),u=Ue.current,(u&2)!==0)u=u&1|2,i.flags|=128;else{if(r!==null&&(r.flags&128)!==0)e:for(r=i.child;r!==null;){if(r.tag===13)r.memoizedState!==null&&Im(r,a,i);else if(r.tag===19)Im(r,a,i);else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===i)break e;for(;r.sibling===null;){if(r.return===null||r.return===i)break e;r=r.return}r.sibling.return=r.return,r=r.sibling}u&=1}if(be(Ue,u),(i.mode&1)===0)i.memoizedState=null;else switch(d){case"forwards":for(a=i.child,d=null;a!==null;)r=a.alternate,r!==null&&ya(r)===null&&(d=a),a=a.sibling;a=d,a===null?(d=i.child,i.child=null):(d=a.sibling,a.sibling=null),kc(i,!1,d,a,p);break;case"backwards":for(a=null,d=i.child,i.child=null;d!==null;){if(r=d.alternate,r!==null&&ya(r)===null){i.child=d;break}r=d.sibling,d.sibling=a,a=d,d=r}kc(i,!0,a,null,p);break;case"together":kc(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Ia(r,i){(i.mode&1)===0&&r!==null&&(r.alternate=null,i.alternate=null,i.flags|=2)}function Rn(r,i,a){if(r!==null&&(i.dependencies=r.dependencies),Lr|=i.lanes,(a&i.childLanes)===0)return null;if(r!==null&&i.child!==r.child)throw Error(t(153));if(i.child!==null){for(r=i.child,a=ar(r,r.pendingProps),i.child=a,a.return=i;r.sibling!==null;)r=r.sibling,a=a.sibling=ar(r,r.pendingProps),a.return=i;a.sibling=null}return i.child}function D0(r,i,a){switch(i.tag){case 3:Cm(i),vi();break;case 5:zp(i);break;case 1:kt(i.type)&&aa(i);break;case 4:rc(i,i.stateNode.containerInfo);break;case 10:var u=i.type._context,d=i.memoizedProps.value;be(fa,u._currentValue),u._currentValue=d;break;case 13:if(u=i.memoizedState,u!==null)return u.dehydrated!==null?(be(Ue,Ue.current&1),i.flags|=128,null):(a&i.child.childLanes)!==0?km(r,i,a):(be(Ue,Ue.current&1),r=Rn(r,i,a),r!==null?r.sibling:null);be(Ue,Ue.current&1);break;case 19:if(u=(a&i.childLanes)!==0,(r.flags&128)!==0){if(u)return Tm(r,i,a);i.flags|=128}if(d=i.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),be(Ue,Ue.current),u)break;return null;case 22:case 23:return i.lanes=0,vm(r,i,a)}return Rn(r,i,a)}var xm,Ic,Rm,bm;xm=function(r,i){for(var a=i.child;a!==null;){if(a.tag===5||a.tag===6)r.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},Ic=function(){},Rm=function(r,i,a,u){var d=r.memoizedProps;if(d!==u){r=i.stateNode,Dr(pn.current);var p=null;switch(a){case"input":d=eu(r,d),u=eu(r,u),p=[];break;case"select":d=B({},d,{value:void 0}),u=B({},u,{value:void 0}),p=[];break;case"textarea":d=ru(r,d),u=ru(r,u),p=[];break;default:typeof d.onClick!="function"&&typeof u.onClick=="function"&&(r.onclick=ia)}su(a,u);var g;a=null;for(N in d)if(!u.hasOwnProperty(N)&&d.hasOwnProperty(N)&&d[N]!=null)if(N==="style"){var w=d[N];for(g in w)w.hasOwnProperty(g)&&(a||(a={}),a[g]="")}else N!=="dangerouslySetInnerHTML"&&N!=="children"&&N!=="suppressContentEditableWarning"&&N!=="suppressHydrationWarning"&&N!=="autoFocus"&&(o.hasOwnProperty(N)?p||(p=[]):(p=p||[]).push(N,null));for(N in u){var E=u[N];if(w=d!=null?d[N]:void 0,u.hasOwnProperty(N)&&E!==w&&(E!=null||w!=null))if(N==="style")if(w){for(g in w)!w.hasOwnProperty(g)||E&&E.hasOwnProperty(g)||(a||(a={}),a[g]="");for(g in E)E.hasOwnProperty(g)&&w[g]!==E[g]&&(a||(a={}),a[g]=E[g])}else a||(p||(p=[]),p.push(N,a)),a=E;else N==="dangerouslySetInnerHTML"?(E=E?E.__html:void 0,w=w?w.__html:void 0,E!=null&&w!==E&&(p=p||[]).push(N,E)):N==="children"?typeof E!="string"&&typeof E!="number"||(p=p||[]).push(N,""+E):N!=="suppressContentEditableWarning"&&N!=="suppressHydrationWarning"&&(o.hasOwnProperty(N)?(E!=null&&N==="onScroll"&&Ae("scroll",r),p||w===E||(p=[])):(p=p||[]).push(N,E))}a&&(p=p||[]).push("style",a);var N=p;(i.updateQueue=N)&&(i.flags|=4)}},bm=function(r,i,a,u){a!==u&&(i.flags|=4)};function zs(r,i){if(!Oe)switch(r.tailMode){case"hidden":i=r.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?r.tail=null:a.sibling=null;break;case"collapsed":a=r.tail;for(var u=null;a!==null;)a.alternate!==null&&(u=a),a=a.sibling;u===null?i||r.tail===null?r.tail=null:r.tail.sibling=null:u.sibling=null}}function mt(r){var i=r.alternate!==null&&r.alternate.child===r.child,a=0,u=0;if(i)for(var d=r.child;d!==null;)a|=d.lanes|d.childLanes,u|=d.subtreeFlags&14680064,u|=d.flags&14680064,d.return=r,d=d.sibling;else for(d=r.child;d!==null;)a|=d.lanes|d.childLanes,u|=d.subtreeFlags,u|=d.flags,d.return=r,d=d.sibling;return r.subtreeFlags|=u,r.childLanes=a,i}function O0(r,i,a){var u=i.pendingProps;switch(qu(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return mt(i),null;case 1:return kt(i.type)&&oa(),mt(i),null;case 3:return u=i.stateNode,Si(),De(St),De(ft),oc(),u.pendingContext&&(u.context=u.pendingContext,u.pendingContext=null),(r===null||r.child===null)&&(da(i)?i.flags|=4:r===null||r.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,Jt!==null&&(Mc(Jt),Jt=null))),Ic(r,i),mt(i),null;case 5:ic(i);var d=Dr(Ls.current);if(a=i.type,r!==null&&i.stateNode!=null)Rm(r,i,a,u,d),r.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!u){if(i.stateNode===null)throw Error(t(166));return mt(i),null}if(r=Dr(pn.current),da(i)){u=i.stateNode,a=i.type;var p=i.memoizedProps;switch(u[fn]=i,u[Ps]=p,r=(i.mode&1)!==0,a){case"dialog":Ae("cancel",u),Ae("close",u);break;case"iframe":case"object":case"embed":Ae("load",u);break;case"video":case"audio":for(d=0;d<xs.length;d++)Ae(xs[d],u);break;case"source":Ae("error",u);break;case"img":case"image":case"link":Ae("error",u),Ae("load",u);break;case"details":Ae("toggle",u);break;case"input":uf(u,p),Ae("invalid",u);break;case"select":u._wrapperState={wasMultiple:!!p.multiple},Ae("invalid",u);break;case"textarea":hf(u,p),Ae("invalid",u)}su(a,p),d=null;for(var g in p)if(p.hasOwnProperty(g)){var w=p[g];g==="children"?typeof w=="string"?u.textContent!==w&&(p.suppressHydrationWarning!==!0&&ra(u.textContent,w,r),d=["children",w]):typeof w=="number"&&u.textContent!==""+w&&(p.suppressHydrationWarning!==!0&&ra(u.textContent,w,r),d=["children",""+w]):o.hasOwnProperty(g)&&w!=null&&g==="onScroll"&&Ae("scroll",u)}switch(a){case"input":Bn(u),df(u,p,!0);break;case"textarea":Bn(u),pf(u);break;case"select":case"option":break;default:typeof p.onClick=="function"&&(u.onclick=ia)}u=d,i.updateQueue=u,u!==null&&(i.flags|=4)}else{g=d.nodeType===9?d:d.ownerDocument,r==="http://www.w3.org/1999/xhtml"&&(r=mf(a)),r==="http://www.w3.org/1999/xhtml"?a==="script"?(r=g.createElement("div"),r.innerHTML="<script><\/script>",r=r.removeChild(r.firstChild)):typeof u.is=="string"?r=g.createElement(a,{is:u.is}):(r=g.createElement(a),a==="select"&&(g=r,u.multiple?g.multiple=!0:u.size&&(g.size=u.size))):r=g.createElementNS(r,a),r[fn]=i,r[Ps]=u,xm(r,i,!1,!1),i.stateNode=r;e:{switch(g=ou(a,u),a){case"dialog":Ae("cancel",r),Ae("close",r),d=u;break;case"iframe":case"object":case"embed":Ae("load",r),d=u;break;case"video":case"audio":for(d=0;d<xs.length;d++)Ae(xs[d],r);d=u;break;case"source":Ae("error",r),d=u;break;case"img":case"image":case"link":Ae("error",r),Ae("load",r),d=u;break;case"details":Ae("toggle",r),d=u;break;case"input":uf(r,u),d=eu(r,u),Ae("invalid",r);break;case"option":d=u;break;case"select":r._wrapperState={wasMultiple:!!u.multiple},d=B({},u,{value:void 0}),Ae("invalid",r);break;case"textarea":hf(r,u),d=ru(r,u),Ae("invalid",r);break;default:d=u}su(a,d),w=d;for(p in w)if(w.hasOwnProperty(p)){var E=w[p];p==="style"?_f(r,E):p==="dangerouslySetInnerHTML"?(E=E?E.__html:void 0,E!=null&&gf(r,E)):p==="children"?typeof E=="string"?(a!=="textarea"||E!=="")&&ls(r,E):typeof E=="number"&&ls(r,""+E):p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&p!=="autoFocus"&&(o.hasOwnProperty(p)?E!=null&&p==="onScroll"&&Ae("scroll",r):E!=null&&U(r,p,E,g))}switch(a){case"input":Bn(r),df(r,u,!1);break;case"textarea":Bn(r),pf(r);break;case"option":u.value!=null&&r.setAttribute("value",""+_e(u.value));break;case"select":r.multiple=!!u.multiple,p=u.value,p!=null?ii(r,!!u.multiple,p,!1):u.defaultValue!=null&&ii(r,!!u.multiple,u.defaultValue,!0);break;default:typeof d.onClick=="function"&&(r.onclick=ia)}switch(a){case"button":case"input":case"select":case"textarea":u=!!u.autoFocus;break e;case"img":u=!0;break e;default:u=!1}}u&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return mt(i),null;case 6:if(r&&i.stateNode!=null)bm(r,i,r.memoizedProps,u);else{if(typeof u!="string"&&i.stateNode===null)throw Error(t(166));if(a=Dr(Ls.current),Dr(pn.current),da(i)){if(u=i.stateNode,a=i.memoizedProps,u[fn]=i,(p=u.nodeValue!==a)&&(r=Ot,r!==null))switch(r.tag){case 3:ra(u.nodeValue,a,(r.mode&1)!==0);break;case 5:r.memoizedProps.suppressHydrationWarning!==!0&&ra(u.nodeValue,a,(r.mode&1)!==0)}p&&(i.flags|=4)}else u=(a.nodeType===9?a:a.ownerDocument).createTextNode(u),u[fn]=i,i.stateNode=u}return mt(i),null;case 13:if(De(Ue),u=i.memoizedState,r===null||r.memoizedState!==null&&r.memoizedState.dehydrated!==null){if(Oe&&Lt!==null&&(i.mode&1)!==0&&(i.flags&128)===0)Ap(),vi(),i.flags|=98560,p=!1;else if(p=da(i),u!==null&&u.dehydrated!==null){if(r===null){if(!p)throw Error(t(318));if(p=i.memoizedState,p=p!==null?p.dehydrated:null,!p)throw Error(t(317));p[fn]=i}else vi(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;mt(i),p=!1}else Jt!==null&&(Mc(Jt),Jt=null),p=!0;if(!p)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=a,i):(u=u!==null,u!==(r!==null&&r.memoizedState!==null)&&u&&(i.child.flags|=8192,(i.mode&1)!==0&&(r===null||(Ue.current&1)!==0?Ye===0&&(Ye=3):jc())),i.updateQueue!==null&&(i.flags|=4),mt(i),null);case 4:return Si(),Ic(r,i),r===null&&Rs(i.stateNode.containerInfo),mt(i),null;case 10:return Zu(i.type._context),mt(i),null;case 17:return kt(i.type)&&oa(),mt(i),null;case 19:if(De(Ue),p=i.memoizedState,p===null)return mt(i),null;if(u=(i.flags&128)!==0,g=p.rendering,g===null)if(u)zs(p,!1);else{if(Ye!==0||r!==null&&(r.flags&128)!==0)for(r=i.child;r!==null;){if(g=ya(r),g!==null){for(i.flags|=128,zs(p,!1),u=g.updateQueue,u!==null&&(i.updateQueue=u,i.flags|=4),i.subtreeFlags=0,u=a,a=i.child;a!==null;)p=a,r=u,p.flags&=14680066,g=p.alternate,g===null?(p.childLanes=0,p.lanes=r,p.child=null,p.subtreeFlags=0,p.memoizedProps=null,p.memoizedState=null,p.updateQueue=null,p.dependencies=null,p.stateNode=null):(p.childLanes=g.childLanes,p.lanes=g.lanes,p.child=g.child,p.subtreeFlags=0,p.deletions=null,p.memoizedProps=g.memoizedProps,p.memoizedState=g.memoizedState,p.updateQueue=g.updateQueue,p.type=g.type,r=g.dependencies,p.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext}),a=a.sibling;return be(Ue,Ue.current&1|2),i.child}r=r.sibling}p.tail!==null&&Ve()>xi&&(i.flags|=128,u=!0,zs(p,!1),i.lanes=4194304)}else{if(!u)if(r=ya(g),r!==null){if(i.flags|=128,u=!0,a=r.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),zs(p,!0),p.tail===null&&p.tailMode==="hidden"&&!g.alternate&&!Oe)return mt(i),null}else 2*Ve()-p.renderingStartTime>xi&&a!==1073741824&&(i.flags|=128,u=!0,zs(p,!1),i.lanes=4194304);p.isBackwards?(g.sibling=i.child,i.child=g):(a=p.last,a!==null?a.sibling=g:i.child=g,p.last=g)}return p.tail!==null?(i=p.tail,p.rendering=i,p.tail=i.sibling,p.renderingStartTime=Ve(),i.sibling=null,a=Ue.current,be(Ue,u?a&1|2:a&1),i):(mt(i),null);case 22:case 23:return Uc(),u=i.memoizedState!==null,r!==null&&r.memoizedState!==null!==u&&(i.flags|=8192),u&&(i.mode&1)!==0?(Mt&1073741824)!==0&&(mt(i),i.subtreeFlags&6&&(i.flags|=8192)):mt(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function L0(r,i){switch(qu(i),i.tag){case 1:return kt(i.type)&&oa(),r=i.flags,r&65536?(i.flags=r&-65537|128,i):null;case 3:return Si(),De(St),De(ft),oc(),r=i.flags,(r&65536)!==0&&(r&128)===0?(i.flags=r&-65537|128,i):null;case 5:return ic(i),null;case 13:if(De(Ue),r=i.memoizedState,r!==null&&r.dehydrated!==null){if(i.alternate===null)throw Error(t(340));vi()}return r=i.flags,r&65536?(i.flags=r&-65537|128,i):null;case 19:return De(Ue),null;case 4:return Si(),null;case 10:return Zu(i.type._context),null;case 22:case 23:return Uc(),null;case 24:return null;default:return null}}var Ta=!1,gt=!1,M0=typeof WeakSet=="function"?WeakSet:Set,K=null;function Ii(r,i){var a=r.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(u){ze(r,i,u)}else a.current=null}function Tc(r,i,a){try{a()}catch(u){ze(r,i,u)}}var Pm=!1;function F0(r,i){if(Uu=Go,r=lp(),Pu(r)){if("selectionStart"in r)var a={start:r.selectionStart,end:r.selectionEnd};else e:{a=(a=r.ownerDocument)&&a.defaultView||window;var u=a.getSelection&&a.getSelection();if(u&&u.rangeCount!==0){a=u.anchorNode;var d=u.anchorOffset,p=u.focusNode;u=u.focusOffset;try{a.nodeType,p.nodeType}catch{a=null;break e}var g=0,w=-1,E=-1,N=0,M=0,F=r,L=null;t:for(;;){for(var G;F!==a||d!==0&&F.nodeType!==3||(w=g+d),F!==p||u!==0&&F.nodeType!==3||(E=g+u),F.nodeType===3&&(g+=F.nodeValue.length),(G=F.firstChild)!==null;)L=F,F=G;for(;;){if(F===r)break t;if(L===a&&++N===d&&(w=g),L===p&&++M===u&&(E=g),(G=F.nextSibling)!==null)break;F=L,L=F.parentNode}F=G}a=w===-1||E===-1?null:{start:w,end:E}}else a=null}a=a||{start:0,end:0}}else a=null;for(ju={focusedElem:r,selectionRange:a},Go=!1,K=i;K!==null;)if(i=K,r=i.child,(i.subtreeFlags&1028)!==0&&r!==null)r.return=i,K=r;else for(;K!==null;){i=K;try{var Y=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(Y!==null){var Z=Y.memoizedProps,He=Y.memoizedState,T=i.stateNode,C=T.getSnapshotBeforeUpdate(i.elementType===i.type?Z:Xt(i.type,Z),He);T.__reactInternalSnapshotBeforeUpdate=C}break;case 3:var b=i.stateNode.containerInfo;b.nodeType===1?b.textContent="":b.nodeType===9&&b.documentElement&&b.removeChild(b.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(z){ze(i,i.return,z)}if(r=i.sibling,r!==null){r.return=i.return,K=r;break}K=i.return}return Y=Pm,Pm=!1,Y}function Ws(r,i,a){var u=i.updateQueue;if(u=u!==null?u.lastEffect:null,u!==null){var d=u=u.next;do{if((d.tag&r)===r){var p=d.destroy;d.destroy=void 0,p!==void 0&&Tc(i,a,p)}d=d.next}while(d!==u)}}function xa(r,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var a=i=i.next;do{if((a.tag&r)===r){var u=a.create;a.destroy=u()}a=a.next}while(a!==i)}}function xc(r){var i=r.ref;if(i!==null){var a=r.stateNode;switch(r.tag){case 5:r=a;break;default:r=a}typeof i=="function"?i(r):i.current=r}}function Nm(r){var i=r.alternate;i!==null&&(r.alternate=null,Nm(i)),r.child=null,r.deletions=null,r.sibling=null,r.tag===5&&(i=r.stateNode,i!==null&&(delete i[fn],delete i[Ps],delete i[Bu],delete i[v0],delete i[w0])),r.stateNode=null,r.return=null,r.dependencies=null,r.memoizedProps=null,r.memoizedState=null,r.pendingProps=null,r.stateNode=null,r.updateQueue=null}function Am(r){return r.tag===5||r.tag===3||r.tag===4}function Dm(r){e:for(;;){for(;r.sibling===null;){if(r.return===null||Am(r.return))return null;r=r.return}for(r.sibling.return=r.return,r=r.sibling;r.tag!==5&&r.tag!==6&&r.tag!==18;){if(r.flags&2||r.child===null||r.tag===4)continue e;r.child.return=r,r=r.child}if(!(r.flags&2))return r.stateNode}}function Rc(r,i,a){var u=r.tag;if(u===5||u===6)r=r.stateNode,i?a.nodeType===8?a.parentNode.insertBefore(r,i):a.insertBefore(r,i):(a.nodeType===8?(i=a.parentNode,i.insertBefore(r,a)):(i=a,i.appendChild(r)),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=ia));else if(u!==4&&(r=r.child,r!==null))for(Rc(r,i,a),r=r.sibling;r!==null;)Rc(r,i,a),r=r.sibling}function bc(r,i,a){var u=r.tag;if(u===5||u===6)r=r.stateNode,i?a.insertBefore(r,i):a.appendChild(r);else if(u!==4&&(r=r.child,r!==null))for(bc(r,i,a),r=r.sibling;r!==null;)bc(r,i,a),r=r.sibling}var ut=null,Zt=!1;function nr(r,i,a){for(a=a.child;a!==null;)Om(r,i,a),a=a.sibling}function Om(r,i,a){if(hn&&typeof hn.onCommitFiberUnmount=="function")try{hn.onCommitFiberUnmount(zo,a)}catch{}switch(a.tag){case 5:gt||Ii(a,i);case 6:var u=ut,d=Zt;ut=null,nr(r,i,a),ut=u,Zt=d,ut!==null&&(Zt?(r=ut,a=a.stateNode,r.nodeType===8?r.parentNode.removeChild(a):r.removeChild(a)):ut.removeChild(a.stateNode));break;case 18:ut!==null&&(Zt?(r=ut,a=a.stateNode,r.nodeType===8?$u(r.parentNode,a):r.nodeType===1&&$u(r,a),vs(r)):$u(ut,a.stateNode));break;case 4:u=ut,d=Zt,ut=a.stateNode.containerInfo,Zt=!0,nr(r,i,a),ut=u,Zt=d;break;case 0:case 11:case 14:case 15:if(!gt&&(u=a.updateQueue,u!==null&&(u=u.lastEffect,u!==null))){d=u=u.next;do{var p=d,g=p.destroy;p=p.tag,g!==void 0&&((p&2)!==0||(p&4)!==0)&&Tc(a,i,g),d=d.next}while(d!==u)}nr(r,i,a);break;case 1:if(!gt&&(Ii(a,i),u=a.stateNode,typeof u.componentWillUnmount=="function"))try{u.props=a.memoizedProps,u.state=a.memoizedState,u.componentWillUnmount()}catch(w){ze(a,i,w)}nr(r,i,a);break;case 21:nr(r,i,a);break;case 22:a.mode&1?(gt=(u=gt)||a.memoizedState!==null,nr(r,i,a),gt=u):nr(r,i,a);break;default:nr(r,i,a)}}function Lm(r){var i=r.updateQueue;if(i!==null){r.updateQueue=null;var a=r.stateNode;a===null&&(a=r.stateNode=new M0),i.forEach(function(u){var d=G0.bind(null,r,u);a.has(u)||(a.add(u),u.then(d,d))})}}function en(r,i){var a=i.deletions;if(a!==null)for(var u=0;u<a.length;u++){var d=a[u];try{var p=r,g=i,w=g;e:for(;w!==null;){switch(w.tag){case 5:ut=w.stateNode,Zt=!1;break e;case 3:ut=w.stateNode.containerInfo,Zt=!0;break e;case 4:ut=w.stateNode.containerInfo,Zt=!0;break e}w=w.return}if(ut===null)throw Error(t(160));Om(p,g,d),ut=null,Zt=!1;var E=d.alternate;E!==null&&(E.return=null),d.return=null}catch(N){ze(d,i,N)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)Mm(i,r),i=i.sibling}function Mm(r,i){var a=r.alternate,u=r.flags;switch(r.tag){case 0:case 11:case 14:case 15:if(en(i,r),gn(r),u&4){try{Ws(3,r,r.return),xa(3,r)}catch(Z){ze(r,r.return,Z)}try{Ws(5,r,r.return)}catch(Z){ze(r,r.return,Z)}}break;case 1:en(i,r),gn(r),u&512&&a!==null&&Ii(a,a.return);break;case 5:if(en(i,r),gn(r),u&512&&a!==null&&Ii(a,a.return),r.flags&32){var d=r.stateNode;try{ls(d,"")}catch(Z){ze(r,r.return,Z)}}if(u&4&&(d=r.stateNode,d!=null)){var p=r.memoizedProps,g=a!==null?a.memoizedProps:p,w=r.type,E=r.updateQueue;if(r.updateQueue=null,E!==null)try{w==="input"&&p.type==="radio"&&p.name!=null&&cf(d,p),ou(w,g);var N=ou(w,p);for(g=0;g<E.length;g+=2){var M=E[g],F=E[g+1];M==="style"?_f(d,F):M==="dangerouslySetInnerHTML"?gf(d,F):M==="children"?ls(d,F):U(d,M,F,N)}switch(w){case"input":tu(d,p);break;case"textarea":ff(d,p);break;case"select":var L=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!p.multiple;var G=p.value;G!=null?ii(d,!!p.multiple,G,!1):L!==!!p.multiple&&(p.defaultValue!=null?ii(d,!!p.multiple,p.defaultValue,!0):ii(d,!!p.multiple,p.multiple?[]:"",!1))}d[Ps]=p}catch(Z){ze(r,r.return,Z)}}break;case 6:if(en(i,r),gn(r),u&4){if(r.stateNode===null)throw Error(t(162));d=r.stateNode,p=r.memoizedProps;try{d.nodeValue=p}catch(Z){ze(r,r.return,Z)}}break;case 3:if(en(i,r),gn(r),u&4&&a!==null&&a.memoizedState.isDehydrated)try{vs(i.containerInfo)}catch(Z){ze(r,r.return,Z)}break;case 4:en(i,r),gn(r);break;case 13:en(i,r),gn(r),d=r.child,d.flags&8192&&(p=d.memoizedState!==null,d.stateNode.isHidden=p,!p||d.alternate!==null&&d.alternate.memoizedState!==null||(Ac=Ve())),u&4&&Lm(r);break;case 22:if(M=a!==null&&a.memoizedState!==null,r.mode&1?(gt=(N=gt)||M,en(i,r),gt=N):en(i,r),gn(r),u&8192){if(N=r.memoizedState!==null,(r.stateNode.isHidden=N)&&!M&&(r.mode&1)!==0)for(K=r,M=r.child;M!==null;){for(F=K=M;K!==null;){switch(L=K,G=L.child,L.tag){case 0:case 11:case 14:case 15:Ws(4,L,L.return);break;case 1:Ii(L,L.return);var Y=L.stateNode;if(typeof Y.componentWillUnmount=="function"){u=L,a=L.return;try{i=u,Y.props=i.memoizedProps,Y.state=i.memoizedState,Y.componentWillUnmount()}catch(Z){ze(u,a,Z)}}break;case 5:Ii(L,L.return);break;case 22:if(L.memoizedState!==null){jm(F);continue}}G!==null?(G.return=L,K=G):jm(F)}M=M.sibling}e:for(M=null,F=r;;){if(F.tag===5){if(M===null){M=F;try{d=F.stateNode,N?(p=d.style,typeof p.setProperty=="function"?p.setProperty("display","none","important"):p.display="none"):(w=F.stateNode,E=F.memoizedProps.style,g=E!=null&&E.hasOwnProperty("display")?E.display:null,w.style.display=yf("display",g))}catch(Z){ze(r,r.return,Z)}}}else if(F.tag===6){if(M===null)try{F.stateNode.nodeValue=N?"":F.memoizedProps}catch(Z){ze(r,r.return,Z)}}else if((F.tag!==22&&F.tag!==23||F.memoizedState===null||F===r)&&F.child!==null){F.child.return=F,F=F.child;continue}if(F===r)break e;for(;F.sibling===null;){if(F.return===null||F.return===r)break e;M===F&&(M=null),F=F.return}M===F&&(M=null),F.sibling.return=F.return,F=F.sibling}}break;case 19:en(i,r),gn(r),u&4&&Lm(r);break;case 21:break;default:en(i,r),gn(r)}}function gn(r){var i=r.flags;if(i&2){try{e:{for(var a=r.return;a!==null;){if(Am(a)){var u=a;break e}a=a.return}throw Error(t(160))}switch(u.tag){case 5:var d=u.stateNode;u.flags&32&&(ls(d,""),u.flags&=-33);var p=Dm(r);bc(r,p,d);break;case 3:case 4:var g=u.stateNode.containerInfo,w=Dm(r);Rc(r,w,g);break;default:throw Error(t(161))}}catch(E){ze(r,r.return,E)}r.flags&=-3}i&4096&&(r.flags&=-4097)}function U0(r,i,a){K=r,Fm(r)}function Fm(r,i,a){for(var u=(r.mode&1)!==0;K!==null;){var d=K,p=d.child;if(d.tag===22&&u){var g=d.memoizedState!==null||Ta;if(!g){var w=d.alternate,E=w!==null&&w.memoizedState!==null||gt;w=Ta;var N=gt;if(Ta=g,(gt=E)&&!N)for(K=d;K!==null;)g=K,E=g.child,g.tag===22&&g.memoizedState!==null?zm(d):E!==null?(E.return=g,K=E):zm(d);for(;p!==null;)K=p,Fm(p),p=p.sibling;K=d,Ta=w,gt=N}Um(r)}else(d.subtreeFlags&8772)!==0&&p!==null?(p.return=d,K=p):Um(r)}}function Um(r){for(;K!==null;){var i=K;if((i.flags&8772)!==0){var a=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:gt||xa(5,i);break;case 1:var u=i.stateNode;if(i.flags&4&&!gt)if(a===null)u.componentDidMount();else{var d=i.elementType===i.type?a.memoizedProps:Xt(i.type,a.memoizedProps);u.componentDidUpdate(d,a.memoizedState,u.__reactInternalSnapshotBeforeUpdate)}var p=i.updateQueue;p!==null&&jp(i,p,u);break;case 3:var g=i.updateQueue;if(g!==null){if(a=null,i.child!==null)switch(i.child.tag){case 5:a=i.child.stateNode;break;case 1:a=i.child.stateNode}jp(i,g,a)}break;case 5:var w=i.stateNode;if(a===null&&i.flags&4){a=w;var E=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":E.autoFocus&&a.focus();break;case"img":E.src&&(a.src=E.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var N=i.alternate;if(N!==null){var M=N.memoizedState;if(M!==null){var F=M.dehydrated;F!==null&&vs(F)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}gt||i.flags&512&&xc(i)}catch(L){ze(i,i.return,L)}}if(i===r){K=null;break}if(a=i.sibling,a!==null){a.return=i.return,K=a;break}K=i.return}}function jm(r){for(;K!==null;){var i=K;if(i===r){K=null;break}var a=i.sibling;if(a!==null){a.return=i.return,K=a;break}K=i.return}}function zm(r){for(;K!==null;){var i=K;try{switch(i.tag){case 0:case 11:case 15:var a=i.return;try{xa(4,i)}catch(E){ze(i,a,E)}break;case 1:var u=i.stateNode;if(typeof u.componentDidMount=="function"){var d=i.return;try{u.componentDidMount()}catch(E){ze(i,d,E)}}var p=i.return;try{xc(i)}catch(E){ze(i,p,E)}break;case 5:var g=i.return;try{xc(i)}catch(E){ze(i,g,E)}}}catch(E){ze(i,i.return,E)}if(i===r){K=null;break}var w=i.sibling;if(w!==null){w.return=i.return,K=w;break}K=i.return}}var j0=Math.ceil,Ra=ne.ReactCurrentDispatcher,Pc=ne.ReactCurrentOwner,$t=ne.ReactCurrentBatchConfig,ve=0,et=null,Ge=null,ct=0,Mt=0,Ti=Jn(0),Ye=0,$s=null,Lr=0,ba=0,Nc=0,Bs=null,Tt=null,Ac=0,xi=1/0,bn=null,Pa=!1,Dc=null,rr=null,Na=!1,ir=null,Aa=0,Vs=0,Oc=null,Da=-1,Oa=0;function vt(){return(ve&6)!==0?Ve():Da!==-1?Da:Da=Ve()}function sr(r){return(r.mode&1)===0?1:(ve&2)!==0&&ct!==0?ct&-ct:C0.transition!==null?(Oa===0&&(Oa=Df()),Oa):(r=ke,r!==0||(r=window.event,r=r===void 0?16:$f(r.type)),r)}function tn(r,i,a,u){if(50<Vs)throw Vs=0,Oc=null,Error(t(185));ps(r,a,u),((ve&2)===0||r!==et)&&(r===et&&((ve&2)===0&&(ba|=a),Ye===4&&or(r,ct)),xt(r,u),a===1&&ve===0&&(i.mode&1)===0&&(xi=Ve()+500,la&&Zn()))}function xt(r,i){var a=r.callbackNode;CE(r,i);var u=Bo(r,r===et?ct:0);if(u===0)a!==null&&Pf(a),r.callbackNode=null,r.callbackPriority=0;else if(i=u&-u,r.callbackPriority!==i){if(a!=null&&Pf(a),i===1)r.tag===0?E0($m.bind(null,r)):xp($m.bind(null,r)),y0(function(){(ve&6)===0&&Zn()}),a=null;else{switch(Of(u)){case 1:a=fu;break;case 4:a=Nf;break;case 16:a=jo;break;case 536870912:a=Af;break;default:a=jo}a=Qm(a,Wm.bind(null,r))}r.callbackPriority=i,r.callbackNode=a}}function Wm(r,i){if(Da=-1,Oa=0,(ve&6)!==0)throw Error(t(327));var a=r.callbackNode;if(Ri()&&r.callbackNode!==a)return null;var u=Bo(r,r===et?ct:0);if(u===0)return null;if((u&30)!==0||(u&r.expiredLanes)!==0||i)i=La(r,u);else{i=u;var d=ve;ve|=2;var p=Vm();(et!==r||ct!==i)&&(bn=null,xi=Ve()+500,Fr(r,i));do try{$0();break}catch(w){Bm(r,w)}while(!0);Xu(),Ra.current=p,ve=d,Ge!==null?i=0:(et=null,ct=0,i=Ye)}if(i!==0){if(i===2&&(d=pu(r),d!==0&&(u=d,i=Lc(r,d))),i===1)throw a=$s,Fr(r,0),or(r,u),xt(r,Ve()),a;if(i===6)or(r,u);else{if(d=r.current.alternate,(u&30)===0&&!z0(d)&&(i=La(r,u),i===2&&(p=pu(r),p!==0&&(u=p,i=Lc(r,p))),i===1))throw a=$s,Fr(r,0),or(r,u),xt(r,Ve()),a;switch(r.finishedWork=d,r.finishedLanes=u,i){case 0:case 1:throw Error(t(345));case 2:Ur(r,Tt,bn);break;case 3:if(or(r,u),(u&130023424)===u&&(i=Ac+500-Ve(),10<i)){if(Bo(r,0)!==0)break;if(d=r.suspendedLanes,(d&u)!==u){vt(),r.pingedLanes|=r.suspendedLanes&d;break}r.timeoutHandle=Wu(Ur.bind(null,r,Tt,bn),i);break}Ur(r,Tt,bn);break;case 4:if(or(r,u),(u&4194240)===u)break;for(i=r.eventTimes,d=-1;0<u;){var g=31-Yt(u);p=1<<g,g=i[g],g>d&&(d=g),u&=~p}if(u=d,u=Ve()-u,u=(120>u?120:480>u?480:1080>u?1080:1920>u?1920:3e3>u?3e3:4320>u?4320:1960*j0(u/1960))-u,10<u){r.timeoutHandle=Wu(Ur.bind(null,r,Tt,bn),u);break}Ur(r,Tt,bn);break;case 5:Ur(r,Tt,bn);break;default:throw Error(t(329))}}}return xt(r,Ve()),r.callbackNode===a?Wm.bind(null,r):null}function Lc(r,i){var a=Bs;return r.current.memoizedState.isDehydrated&&(Fr(r,i).flags|=256),r=La(r,i),r!==2&&(i=Tt,Tt=a,i!==null&&Mc(i)),r}function Mc(r){Tt===null?Tt=r:Tt.push.apply(Tt,r)}function z0(r){for(var i=r;;){if(i.flags&16384){var a=i.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var u=0;u<a.length;u++){var d=a[u],p=d.getSnapshot;d=d.value;try{if(!Qt(p(),d))return!1}catch{return!1}}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===r)break;for(;i.sibling===null;){if(i.return===null||i.return===r)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function or(r,i){for(i&=~Nc,i&=~ba,r.suspendedLanes|=i,r.pingedLanes&=~i,r=r.expirationTimes;0<i;){var a=31-Yt(i),u=1<<a;r[a]=-1,i&=~u}}function $m(r){if((ve&6)!==0)throw Error(t(327));Ri();var i=Bo(r,0);if((i&1)===0)return xt(r,Ve()),null;var a=La(r,i);if(r.tag!==0&&a===2){var u=pu(r);u!==0&&(i=u,a=Lc(r,u))}if(a===1)throw a=$s,Fr(r,0),or(r,i),xt(r,Ve()),a;if(a===6)throw Error(t(345));return r.finishedWork=r.current.alternate,r.finishedLanes=i,Ur(r,Tt,bn),xt(r,Ve()),null}function Fc(r,i){var a=ve;ve|=1;try{return r(i)}finally{ve=a,ve===0&&(xi=Ve()+500,la&&Zn())}}function Mr(r){ir!==null&&ir.tag===0&&(ve&6)===0&&Ri();var i=ve;ve|=1;var a=$t.transition,u=ke;try{if($t.transition=null,ke=1,r)return r()}finally{ke=u,$t.transition=a,ve=i,(ve&6)===0&&Zn()}}function Uc(){Mt=Ti.current,De(Ti)}function Fr(r,i){r.finishedWork=null,r.finishedLanes=0;var a=r.timeoutHandle;if(a!==-1&&(r.timeoutHandle=-1,g0(a)),Ge!==null)for(a=Ge.return;a!==null;){var u=a;switch(qu(u),u.tag){case 1:u=u.type.childContextTypes,u!=null&&oa();break;case 3:Si(),De(St),De(ft),oc();break;case 5:ic(u);break;case 4:Si();break;case 13:De(Ue);break;case 19:De(Ue);break;case 10:Zu(u.type._context);break;case 22:case 23:Uc()}a=a.return}if(et=r,Ge=r=ar(r.current,null),ct=Mt=i,Ye=0,$s=null,Nc=ba=Lr=0,Tt=Bs=null,Ar!==null){for(i=0;i<Ar.length;i++)if(a=Ar[i],u=a.interleaved,u!==null){a.interleaved=null;var d=u.next,p=a.pending;if(p!==null){var g=p.next;p.next=d,u.next=g}a.pending=u}Ar=null}return r}function Bm(r,i){do{var a=Ge;try{if(Xu(),_a.current=Ca,va){for(var u=je.memoizedState;u!==null;){var d=u.queue;d!==null&&(d.pending=null),u=u.next}va=!1}if(Or=0,Ze=Ke=je=null,Ms=!1,Fs=0,Pc.current=null,a===null||a.return===null){Ye=1,$s=i,Ge=null;break}e:{var p=r,g=a.return,w=a,E=i;if(i=ct,w.flags|=32768,E!==null&&typeof E=="object"&&typeof E.then=="function"){var N=E,M=w,F=M.tag;if((M.mode&1)===0&&(F===0||F===11||F===15)){var L=M.alternate;L?(M.updateQueue=L.updateQueue,M.memoizedState=L.memoizedState,M.lanes=L.lanes):(M.updateQueue=null,M.memoizedState=null)}var G=pm(g);if(G!==null){G.flags&=-257,mm(G,g,w,p,i),G.mode&1&&fm(p,N,i),i=G,E=N;var Y=i.updateQueue;if(Y===null){var Z=new Set;Z.add(E),i.updateQueue=Z}else Y.add(E);break e}else{if((i&1)===0){fm(p,N,i),jc();break e}E=Error(t(426))}}else if(Oe&&w.mode&1){var He=pm(g);if(He!==null){(He.flags&65536)===0&&(He.flags|=256),mm(He,g,w,p,i),Qu(ki(E,w));break e}}p=E=ki(E,w),Ye!==4&&(Ye=2),Bs===null?Bs=[p]:Bs.push(p),p=g;do{switch(p.tag){case 3:p.flags|=65536,i&=-i,p.lanes|=i;var T=dm(p,E,i);Up(p,T);break e;case 1:w=E;var C=p.type,b=p.stateNode;if((p.flags&128)===0&&(typeof C.getDerivedStateFromError=="function"||b!==null&&typeof b.componentDidCatch=="function"&&(rr===null||!rr.has(b)))){p.flags|=65536,i&=-i,p.lanes|=i;var z=hm(p,w,i);Up(p,z);break e}}p=p.return}while(p!==null)}Gm(a)}catch(ee){i=ee,Ge===a&&a!==null&&(Ge=a=a.return);continue}break}while(!0)}function Vm(){var r=Ra.current;return Ra.current=Ca,r===null?Ca:r}function jc(){(Ye===0||Ye===3||Ye===2)&&(Ye=4),et===null||(Lr&268435455)===0&&(ba&268435455)===0||or(et,ct)}function La(r,i){var a=ve;ve|=2;var u=Vm();(et!==r||ct!==i)&&(bn=null,Fr(r,i));do try{W0();break}catch(d){Bm(r,d)}while(!0);if(Xu(),ve=a,Ra.current=u,Ge!==null)throw Error(t(261));return et=null,ct=0,Ye}function W0(){for(;Ge!==null;)Hm(Ge)}function $0(){for(;Ge!==null&&!fE();)Hm(Ge)}function Hm(r){var i=Ym(r.alternate,r,Mt);r.memoizedProps=r.pendingProps,i===null?Gm(r):Ge=i,Pc.current=null}function Gm(r){var i=r;do{var a=i.alternate;if(r=i.return,(i.flags&32768)===0){if(a=O0(a,i,Mt),a!==null){Ge=a;return}}else{if(a=L0(a,i),a!==null){a.flags&=32767,Ge=a;return}if(r!==null)r.flags|=32768,r.subtreeFlags=0,r.deletions=null;else{Ye=6,Ge=null;return}}if(i=i.sibling,i!==null){Ge=i;return}Ge=i=r}while(i!==null);Ye===0&&(Ye=5)}function Ur(r,i,a){var u=ke,d=$t.transition;try{$t.transition=null,ke=1,B0(r,i,a,u)}finally{$t.transition=d,ke=u}return null}function B0(r,i,a,u){do Ri();while(ir!==null);if((ve&6)!==0)throw Error(t(327));a=r.finishedWork;var d=r.finishedLanes;if(a===null)return null;if(r.finishedWork=null,r.finishedLanes=0,a===r.current)throw Error(t(177));r.callbackNode=null,r.callbackPriority=0;var p=a.lanes|a.childLanes;if(SE(r,p),r===et&&(Ge=et=null,ct=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||Na||(Na=!0,Qm(jo,function(){return Ri(),null})),p=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||p){p=$t.transition,$t.transition=null;var g=ke;ke=1;var w=ve;ve|=4,Pc.current=null,F0(r,a),Mm(a,r),u0(ju),Go=!!Uu,ju=Uu=null,r.current=a,U0(a),pE(),ve=w,ke=g,$t.transition=p}else r.current=a;if(Na&&(Na=!1,ir=r,Aa=d),p=r.pendingLanes,p===0&&(rr=null),yE(a.stateNode),xt(r,Ve()),i!==null)for(u=r.onRecoverableError,a=0;a<i.length;a++)d=i[a],u(d.value,{componentStack:d.stack,digest:d.digest});if(Pa)throw Pa=!1,r=Dc,Dc=null,r;return(Aa&1)!==0&&r.tag!==0&&Ri(),p=r.pendingLanes,(p&1)!==0?r===Oc?Vs++:(Vs=0,Oc=r):Vs=0,Zn(),null}function Ri(){if(ir!==null){var r=Of(Aa),i=$t.transition,a=ke;try{if($t.transition=null,ke=16>r?16:r,ir===null)var u=!1;else{if(r=ir,ir=null,Aa=0,(ve&6)!==0)throw Error(t(331));var d=ve;for(ve|=4,K=r.current;K!==null;){var p=K,g=p.child;if((K.flags&16)!==0){var w=p.deletions;if(w!==null){for(var E=0;E<w.length;E++){var N=w[E];for(K=N;K!==null;){var M=K;switch(M.tag){case 0:case 11:case 15:Ws(8,M,p)}var F=M.child;if(F!==null)F.return=M,K=F;else for(;K!==null;){M=K;var L=M.sibling,G=M.return;if(Nm(M),M===N){K=null;break}if(L!==null){L.return=G,K=L;break}K=G}}}var Y=p.alternate;if(Y!==null){var Z=Y.child;if(Z!==null){Y.child=null;do{var He=Z.sibling;Z.sibling=null,Z=He}while(Z!==null)}}K=p}}if((p.subtreeFlags&2064)!==0&&g!==null)g.return=p,K=g;else e:for(;K!==null;){if(p=K,(p.flags&2048)!==0)switch(p.tag){case 0:case 11:case 15:Ws(9,p,p.return)}var T=p.sibling;if(T!==null){T.return=p.return,K=T;break e}K=p.return}}var C=r.current;for(K=C;K!==null;){g=K;var b=g.child;if((g.subtreeFlags&2064)!==0&&b!==null)b.return=g,K=b;else e:for(g=C;K!==null;){if(w=K,(w.flags&2048)!==0)try{switch(w.tag){case 0:case 11:case 15:xa(9,w)}}catch(ee){ze(w,w.return,ee)}if(w===g){K=null;break e}var z=w.sibling;if(z!==null){z.return=w.return,K=z;break e}K=w.return}}if(ve=d,Zn(),hn&&typeof hn.onPostCommitFiberRoot=="function")try{hn.onPostCommitFiberRoot(zo,r)}catch{}u=!0}return u}finally{ke=a,$t.transition=i}}return!1}function qm(r,i,a){i=ki(a,i),i=dm(r,i,1),r=tr(r,i,1),i=vt(),r!==null&&(ps(r,1,i),xt(r,i))}function ze(r,i,a){if(r.tag===3)qm(r,r,a);else for(;i!==null;){if(i.tag===3){qm(i,r,a);break}else if(i.tag===1){var u=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(rr===null||!rr.has(u))){r=ki(a,r),r=hm(i,r,1),i=tr(i,r,1),r=vt(),i!==null&&(ps(i,1,r),xt(i,r));break}}i=i.return}}function V0(r,i,a){var u=r.pingCache;u!==null&&u.delete(i),i=vt(),r.pingedLanes|=r.suspendedLanes&a,et===r&&(ct&a)===a&&(Ye===4||Ye===3&&(ct&130023424)===ct&&500>Ve()-Ac?Fr(r,0):Nc|=a),xt(r,i)}function Km(r,i){i===0&&((r.mode&1)===0?i=1:(i=$o,$o<<=1,($o&130023424)===0&&($o=4194304)));var a=vt();r=Tn(r,i),r!==null&&(ps(r,i,a),xt(r,a))}function H0(r){var i=r.memoizedState,a=0;i!==null&&(a=i.retryLane),Km(r,a)}function G0(r,i){var a=0;switch(r.tag){case 13:var u=r.stateNode,d=r.memoizedState;d!==null&&(a=d.retryLane);break;case 19:u=r.stateNode;break;default:throw Error(t(314))}u!==null&&u.delete(i),Km(r,a)}var Ym;Ym=function(r,i,a){if(r!==null)if(r.memoizedProps!==i.pendingProps||St.current)It=!0;else{if((r.lanes&a)===0&&(i.flags&128)===0)return It=!1,D0(r,i,a);It=(r.flags&131072)!==0}else It=!1,Oe&&(i.flags&1048576)!==0&&Rp(i,ca,i.index);switch(i.lanes=0,i.tag){case 2:var u=i.type;Ia(r,i),r=i.pendingProps;var d=gi(i,ft.current);Ci(i,a),d=uc(null,i,u,r,d,a);var p=cc();return i.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,kt(u)?(p=!0,aa(i)):p=!1,i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,nc(i),d.updater=Sa,i.stateNode=d,d._reactInternals=i,gc(i,u,r,a),i=wc(null,i,u,!0,p,a)):(i.tag=0,Oe&&p&&Gu(i),_t(null,i,d,a),i=i.child),i;case 16:u=i.elementType;e:{switch(Ia(r,i),r=i.pendingProps,d=u._init,u=d(u._payload),i.type=u,d=i.tag=K0(u),r=Xt(u,r),d){case 0:i=vc(null,i,u,r,a);break e;case 1:i=Em(null,i,u,r,a);break e;case 11:i=gm(null,i,u,r,a);break e;case 14:i=ym(null,i,u,Xt(u.type,r),a);break e}throw Error(t(306,u,""))}return i;case 0:return u=i.type,d=i.pendingProps,d=i.elementType===u?d:Xt(u,d),vc(r,i,u,d,a);case 1:return u=i.type,d=i.pendingProps,d=i.elementType===u?d:Xt(u,d),Em(r,i,u,d,a);case 3:e:{if(Cm(i),r===null)throw Error(t(387));u=i.pendingProps,p=i.memoizedState,d=p.element,Fp(r,i),ga(i,u,null,a);var g=i.memoizedState;if(u=g.element,p.isDehydrated)if(p={element:u,isDehydrated:!1,cache:g.cache,pendingSuspenseBoundaries:g.pendingSuspenseBoundaries,transitions:g.transitions},i.updateQueue.baseState=p,i.memoizedState=p,i.flags&256){d=ki(Error(t(423)),i),i=Sm(r,i,u,a,d);break e}else if(u!==d){d=ki(Error(t(424)),i),i=Sm(r,i,u,a,d);break e}else for(Lt=Qn(i.stateNode.containerInfo.firstChild),Ot=i,Oe=!0,Jt=null,a=Lp(i,null,u,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(vi(),u===d){i=Rn(r,i,a);break e}_t(r,i,u,a)}i=i.child}return i;case 5:return zp(i),r===null&&Yu(i),u=i.type,d=i.pendingProps,p=r!==null?r.memoizedProps:null,g=d.children,zu(u,d)?g=null:p!==null&&zu(u,p)&&(i.flags|=32),wm(r,i),_t(r,i,g,a),i.child;case 6:return r===null&&Yu(i),null;case 13:return km(r,i,a);case 4:return rc(i,i.stateNode.containerInfo),u=i.pendingProps,r===null?i.child=wi(i,null,u,a):_t(r,i,u,a),i.child;case 11:return u=i.type,d=i.pendingProps,d=i.elementType===u?d:Xt(u,d),gm(r,i,u,d,a);case 7:return _t(r,i,i.pendingProps,a),i.child;case 8:return _t(r,i,i.pendingProps.children,a),i.child;case 12:return _t(r,i,i.pendingProps.children,a),i.child;case 10:e:{if(u=i.type._context,d=i.pendingProps,p=i.memoizedProps,g=d.value,be(fa,u._currentValue),u._currentValue=g,p!==null)if(Qt(p.value,g)){if(p.children===d.children&&!St.current){i=Rn(r,i,a);break e}}else for(p=i.child,p!==null&&(p.return=i);p!==null;){var w=p.dependencies;if(w!==null){g=p.child;for(var E=w.firstContext;E!==null;){if(E.context===u){if(p.tag===1){E=xn(-1,a&-a),E.tag=2;var N=p.updateQueue;if(N!==null){N=N.shared;var M=N.pending;M===null?E.next=E:(E.next=M.next,M.next=E),N.pending=E}}p.lanes|=a,E=p.alternate,E!==null&&(E.lanes|=a),ec(p.return,a,i),w.lanes|=a;break}E=E.next}}else if(p.tag===10)g=p.type===i.type?null:p.child;else if(p.tag===18){if(g=p.return,g===null)throw Error(t(341));g.lanes|=a,w=g.alternate,w!==null&&(w.lanes|=a),ec(g,a,i),g=p.sibling}else g=p.child;if(g!==null)g.return=p;else for(g=p;g!==null;){if(g===i){g=null;break}if(p=g.sibling,p!==null){p.return=g.return,g=p;break}g=g.return}p=g}_t(r,i,d.children,a),i=i.child}return i;case 9:return d=i.type,u=i.pendingProps.children,Ci(i,a),d=zt(d),u=u(d),i.flags|=1,_t(r,i,u,a),i.child;case 14:return u=i.type,d=Xt(u,i.pendingProps),d=Xt(u.type,d),ym(r,i,u,d,a);case 15:return _m(r,i,i.type,i.pendingProps,a);case 17:return u=i.type,d=i.pendingProps,d=i.elementType===u?d:Xt(u,d),Ia(r,i),i.tag=1,kt(u)?(r=!0,aa(i)):r=!1,Ci(i,a),um(i,u,d),gc(i,u,d,a),wc(null,i,u,!0,r,a);case 19:return Tm(r,i,a);case 22:return vm(r,i,a)}throw Error(t(156,i.tag))};function Qm(r,i){return bf(r,i)}function q0(r,i,a,u){this.tag=r,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Bt(r,i,a,u){return new q0(r,i,a,u)}function zc(r){return r=r.prototype,!(!r||!r.isReactComponent)}function K0(r){if(typeof r=="function")return zc(r)?1:0;if(r!=null){if(r=r.$$typeof,r===at)return 11;if(r===qe)return 14}return 2}function ar(r,i){var a=r.alternate;return a===null?(a=Bt(r.tag,i,r.key,r.mode),a.elementType=r.elementType,a.type=r.type,a.stateNode=r.stateNode,a.alternate=r,r.alternate=a):(a.pendingProps=i,a.type=r.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=r.flags&14680064,a.childLanes=r.childLanes,a.lanes=r.lanes,a.child=r.child,a.memoizedProps=r.memoizedProps,a.memoizedState=r.memoizedState,a.updateQueue=r.updateQueue,i=r.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=r.sibling,a.index=r.index,a.ref=r.ref,a}function Ma(r,i,a,u,d,p){var g=2;if(u=r,typeof r=="function")zc(r)&&(g=1);else if(typeof r=="string")g=5;else e:switch(r){case Ie:return jr(a.children,d,p,i);case X:g=8,d|=8;break;case we:return r=Bt(12,a,i,d|2),r.elementType=we,r.lanes=p,r;case Je:return r=Bt(13,a,i,d),r.elementType=Je,r.lanes=p,r;case lt:return r=Bt(19,a,i,d),r.elementType=lt,r.lanes=p,r;case $:return Fa(a,d,p,i);default:if(typeof r=="object"&&r!==null)switch(r.$$typeof){case Be:g=10;break e;case yt:g=9;break e;case at:g=11;break e;case qe:g=14;break e;case Re:g=16,u=null;break e}throw Error(t(130,r==null?r:typeof r,""))}return i=Bt(g,a,i,d),i.elementType=r,i.type=u,i.lanes=p,i}function jr(r,i,a,u){return r=Bt(7,r,u,i),r.lanes=a,r}function Fa(r,i,a,u){return r=Bt(22,r,u,i),r.elementType=$,r.lanes=a,r.stateNode={isHidden:!1},r}function Wc(r,i,a){return r=Bt(6,r,null,i),r.lanes=a,r}function $c(r,i,a){return i=Bt(4,r.children!==null?r.children:[],r.key,i),i.lanes=a,i.stateNode={containerInfo:r.containerInfo,pendingChildren:null,implementation:r.implementation},i}function Y0(r,i,a,u,d){this.tag=i,this.containerInfo=r,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=mu(0),this.expirationTimes=mu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=mu(0),this.identifierPrefix=u,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function Bc(r,i,a,u,d,p,g,w,E){return r=new Y0(r,i,a,w,E),i===1?(i=1,p===!0&&(i|=8)):i=0,p=Bt(3,null,null,i),r.current=p,p.stateNode=r,p.memoizedState={element:u,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},nc(p),r}function Q0(r,i,a){var u=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Se,key:u==null?null:""+u,children:r,containerInfo:i,implementation:a}}function Jm(r){if(!r)return Xn;r=r._reactInternals;e:{if(xr(r)!==r||r.tag!==1)throw Error(t(170));var i=r;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(kt(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(r.tag===1){var a=r.type;if(kt(a))return Ip(r,a,i)}return i}function Xm(r,i,a,u,d,p,g,w,E){return r=Bc(a,u,!0,r,d,p,g,w,E),r.context=Jm(null),a=r.current,u=vt(),d=sr(a),p=xn(u,d),p.callback=i??null,tr(a,p,d),r.current.lanes=d,ps(r,d,u),xt(r,u),r}function Ua(r,i,a,u){var d=i.current,p=vt(),g=sr(d);return a=Jm(a),i.context===null?i.context=a:i.pendingContext=a,i=xn(p,g),i.payload={element:r},u=u===void 0?null:u,u!==null&&(i.callback=u),r=tr(d,i,g),r!==null&&(tn(r,d,g,p),ma(r,d,g)),g}function ja(r){if(r=r.current,!r.child)return null;switch(r.child.tag){case 5:return r.child.stateNode;default:return r.child.stateNode}}function Zm(r,i){if(r=r.memoizedState,r!==null&&r.dehydrated!==null){var a=r.retryLane;r.retryLane=a!==0&&a<i?a:i}}function Vc(r,i){Zm(r,i),(r=r.alternate)&&Zm(r,i)}function J0(){return null}var eg=typeof reportError=="function"?reportError:function(r){console.error(r)};function Hc(r){this._internalRoot=r}za.prototype.render=Hc.prototype.render=function(r){var i=this._internalRoot;if(i===null)throw Error(t(409));Ua(r,i,null,null)},za.prototype.unmount=Hc.prototype.unmount=function(){var r=this._internalRoot;if(r!==null){this._internalRoot=null;var i=r.containerInfo;Mr(function(){Ua(null,r,null,null)}),i[Cn]=null}};function za(r){this._internalRoot=r}za.prototype.unstable_scheduleHydration=function(r){if(r){var i=Ff();r={blockedOn:null,target:r,priority:i};for(var a=0;a<qn.length&&i!==0&&i<qn[a].priority;a++);qn.splice(a,0,r),a===0&&zf(r)}};function Gc(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11)}function Wa(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11&&(r.nodeType!==8||r.nodeValue!==" react-mount-point-unstable "))}function tg(){}function X0(r,i,a,u,d){if(d){if(typeof u=="function"){var p=u;u=function(){var N=ja(g);p.call(N)}}var g=Xm(i,u,r,0,null,!1,!1,"",tg);return r._reactRootContainer=g,r[Cn]=g.current,Rs(r.nodeType===8?r.parentNode:r),Mr(),g}for(;d=r.lastChild;)r.removeChild(d);if(typeof u=="function"){var w=u;u=function(){var N=ja(E);w.call(N)}}var E=Bc(r,0,!1,null,null,!1,!1,"",tg);return r._reactRootContainer=E,r[Cn]=E.current,Rs(r.nodeType===8?r.parentNode:r),Mr(function(){Ua(i,E,a,u)}),E}function $a(r,i,a,u,d){var p=a._reactRootContainer;if(p){var g=p;if(typeof d=="function"){var w=d;d=function(){var E=ja(g);w.call(E)}}Ua(i,g,r,d)}else g=X0(a,i,r,d,u);return ja(g)}Lf=function(r){switch(r.tag){case 3:var i=r.stateNode;if(i.current.memoizedState.isDehydrated){var a=fs(i.pendingLanes);a!==0&&(gu(i,a|1),xt(i,Ve()),(ve&6)===0&&(xi=Ve()+500,Zn()))}break;case 13:Mr(function(){var u=Tn(r,1);if(u!==null){var d=vt();tn(u,r,1,d)}}),Vc(r,1)}},yu=function(r){if(r.tag===13){var i=Tn(r,134217728);if(i!==null){var a=vt();tn(i,r,134217728,a)}Vc(r,134217728)}},Mf=function(r){if(r.tag===13){var i=sr(r),a=Tn(r,i);if(a!==null){var u=vt();tn(a,r,i,u)}Vc(r,i)}},Ff=function(){return ke},Uf=function(r,i){var a=ke;try{return ke=r,i()}finally{ke=a}},uu=function(r,i,a){switch(i){case"input":if(tu(r,a),i=a.name,a.type==="radio"&&i!=null){for(a=r;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<a.length;i++){var u=a[i];if(u!==r&&u.form===r.form){var d=sa(u);if(!d)throw Error(t(90));Tr(u),tu(u,d)}}}break;case"textarea":ff(r,a);break;case"select":i=a.value,i!=null&&ii(r,!!a.multiple,i,!1)}},Cf=Fc,Sf=Mr;var Z0={usingClientEntryPoint:!1,Events:[Ns,pi,sa,wf,Ef,Fc]},Hs={findFiberByHostInstance:Rr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},eC={bundleType:Hs.bundleType,version:Hs.version,rendererPackageName:Hs.rendererPackageName,rendererConfig:Hs.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ne.ReactCurrentDispatcher,findHostInstanceByFiber:function(r){return r=xf(r),r===null?null:r.stateNode},findFiberByHostInstance:Hs.findFiberByHostInstance||J0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ba=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ba.isDisabled&&Ba.supportsFiber)try{zo=Ba.inject(eC),hn=Ba}catch{}}return Rt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Z0,Rt.createPortal=function(r,i){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Gc(i))throw Error(t(200));return Q0(r,i,null,a)},Rt.createRoot=function(r,i){if(!Gc(r))throw Error(t(299));var a=!1,u="",d=eg;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(u=i.identifierPrefix),i.onRecoverableError!==void 0&&(d=i.onRecoverableError)),i=Bc(r,1,!1,null,null,a,!1,u,d),r[Cn]=i.current,Rs(r.nodeType===8?r.parentNode:r),new Hc(i)},Rt.findDOMNode=function(r){if(r==null)return null;if(r.nodeType===1)return r;var i=r._reactInternals;if(i===void 0)throw typeof r.render=="function"?Error(t(188)):(r=Object.keys(r).join(","),Error(t(268,r)));return r=xf(i),r=r===null?null:r.stateNode,r},Rt.flushSync=function(r){return Mr(r)},Rt.hydrate=function(r,i,a){if(!Wa(i))throw Error(t(200));return $a(null,r,i,!0,a)},Rt.hydrateRoot=function(r,i,a){if(!Gc(r))throw Error(t(405));var u=a!=null&&a.hydratedSources||null,d=!1,p="",g=eg;if(a!=null&&(a.unstable_strictMode===!0&&(d=!0),a.identifierPrefix!==void 0&&(p=a.identifierPrefix),a.onRecoverableError!==void 0&&(g=a.onRecoverableError)),i=Xm(i,null,r,1,a??null,d,!1,p,g),r[Cn]=i.current,Rs(r),u)for(r=0;r<u.length;r++)a=u[r],d=a._getVersion,d=d(a._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[a,d]:i.mutableSourceEagerHydrationData.push(a,d);return new za(i)},Rt.render=function(r,i,a){if(!Wa(i))throw Error(t(200));return $a(null,r,i,!1,a)},Rt.unmountComponentAtNode=function(r){if(!Wa(r))throw Error(t(40));return r._reactRootContainer?(Mr(function(){$a(null,null,r,!1,function(){r._reactRootContainer=null,r[Cn]=null})}),!0):!1},Rt.unstable_batchedUpdates=Fc,Rt.unstable_renderSubtreeIntoContainer=function(r,i,a,u){if(!Wa(a))throw Error(t(200));if(r==null||r._reactInternals===void 0)throw Error(t(38));return $a(r,i,a,!1,u)},Rt.version="18.3.1-next-f1338f8080-20240426",Rt}var ug;function uC(){if(ug)return Yc.exports;ug=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),Yc.exports=lC(),Yc.exports}var cg;function cC(){if(cg)return Va;cg=1;var n=uC();return Va.createRoot=n.createRoot,Va.hydrateRoot=n.hydrateRoot,Va}var dC=cC();const hC=Ky(dC),fC="modulepreload",pC=function(n){return"/DriveWay/"+n},dg={},Kt=function(e,t,s){let o=Promise.resolve();if(t&&t.length>0){let c=function(m){return Promise.all(m.map(y=>Promise.resolve(y).then(_=>({status:"fulfilled",value:_}),_=>({status:"rejected",reason:_}))))};document.getElementsByTagName("link");const h=document.querySelector("meta[property=csp-nonce]"),f=(h==null?void 0:h.nonce)||(h==null?void 0:h.getAttribute("nonce"));o=c(t.map(m=>{if(m=pC(m),m in dg)return;dg[m]=!0;const y=m.endsWith(".css"),_=y?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${m}"]${_}`))return;const v=document.createElement("link");if(v.rel=y?"stylesheet":fC,y||(v.as="script"),v.crossOrigin="",v.href=m,f&&v.setAttribute("nonce",f),document.head.appendChild(v),y)return new Promise((R,S)=>{v.addEventListener("load",R),v.addEventListener("error",()=>S(new Error(`Unable to preload CSS for ${m}`)))})}))}function l(c){const h=new Event("vite:preloadError",{cancelable:!0});if(h.payload=c,window.dispatchEvent(h),!h.defaultPrevented)throw c}return o.then(c=>{for(const h of c||[])h.status==="rejected"&&l(h.reason);return e().catch(l)})};/**
 * react-router v7.9.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var hg="popstate";function mC(n={}){function e(s,o){let{pathname:l,search:c,hash:h}=s.location;return vd("",{pathname:l,search:c,hash:h},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function t(s,o){return typeof o=="string"?o:ho(o)}return yC(e,t,null,n)}function Fe(n,e){if(n===!1||n===null||typeof n>"u")throw new Error(e)}function qt(n,e){if(!n){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function gC(){return Math.random().toString(36).substring(2,10)}function fg(n,e){return{usr:n.state,key:n.key,idx:e}}function vd(n,e,t=null,s){return{pathname:typeof n=="string"?n:n.pathname,search:"",hash:"",...typeof e=="string"?qi(e):e,state:t,key:e&&e.key||s||gC()}}function ho({pathname:n="/",search:e="",hash:t=""}){return e&&e!=="?"&&(n+=e.charAt(0)==="?"?e:"?"+e),t&&t!=="#"&&(n+=t.charAt(0)==="#"?t:"#"+t),n}function qi(n){let e={};if(n){let t=n.indexOf("#");t>=0&&(e.hash=n.substring(t),n=n.substring(0,t));let s=n.indexOf("?");s>=0&&(e.search=n.substring(s),n=n.substring(0,s)),n&&(e.pathname=n)}return e}function yC(n,e,t,s={}){let{window:o=document.defaultView,v5Compat:l=!1}=s,c=o.history,h="POP",f=null,m=y();m==null&&(m=0,c.replaceState({...c.state,idx:m},""));function y(){return(c.state||{idx:null}).idx}function _(){h="POP";let D=y(),j=D==null?null:D-m;m=D,f&&f({action:h,location:O.location,delta:j})}function v(D,j){h="PUSH";let H=vd(O.location,D,j);m=y()+1;let U=fg(H,m),ne=O.createHref(H);try{c.pushState(U,"",ne)}catch(he){if(he instanceof DOMException&&he.name==="DataCloneError")throw he;o.location.assign(ne)}l&&f&&f({action:h,location:O.location,delta:1})}function R(D,j){h="REPLACE";let H=vd(O.location,D,j);m=y();let U=fg(H,m),ne=O.createHref(H);c.replaceState(U,"",ne),l&&f&&f({action:h,location:O.location,delta:0})}function S(D){return _C(D)}let O={get action(){return h},get location(){return n(o,c)},listen(D){if(f)throw new Error("A history only accepts one active listener");return o.addEventListener(hg,_),f=D,()=>{o.removeEventListener(hg,_),f=null}},createHref(D){return e(o,D)},createURL:S,encodeLocation(D){let j=S(D);return{pathname:j.pathname,search:j.search,hash:j.hash}},push:v,replace:R,go(D){return c.go(D)}};return O}function _C(n,e=!1){let t="http://localhost";typeof window<"u"&&(t=window.location.origin!=="null"?window.location.origin:window.location.href),Fe(t,"No window.location.(origin|href) available to create URL");let s=typeof n=="string"?n:ho(n);return s=s.replace(/ $/,"%20"),!e&&s.startsWith("//")&&(s=t+s),new URL(s,t)}function Yy(n,e,t="/"){return vC(n,e,t,!1)}function vC(n,e,t,s){let o=typeof e=="string"?qi(e):e,l=Un(o.pathname||"/",t);if(l==null)return null;let c=Qy(n);wC(c);let h=null;for(let f=0;h==null&&f<c.length;++f){let m=NC(l);h=bC(c[f],m,s)}return h}function Qy(n,e=[],t=[],s="",o=!1){let l=(c,h,f=o,m)=>{let y={relativePath:m===void 0?c.path||"":m,caseSensitive:c.caseSensitive===!0,childrenIndex:h,route:c};if(y.relativePath.startsWith("/")){if(!y.relativePath.startsWith(s)&&f)return;Fe(y.relativePath.startsWith(s),`Absolute route path "${y.relativePath}" nested under path "${s}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),y.relativePath=y.relativePath.slice(s.length)}let _=Ln([s,y.relativePath]),v=t.concat(y);c.children&&c.children.length>0&&(Fe(c.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${_}".`),Qy(c.children,e,v,_,f)),!(c.path==null&&!c.index)&&e.push({path:_,score:xC(_,c.index),routesMeta:v})};return n.forEach((c,h)=>{var f;if(c.path===""||!((f=c.path)!=null&&f.includes("?")))l(c,h);else for(let m of Jy(c.path))l(c,h,!0,m)}),e}function Jy(n){let e=n.split("/");if(e.length===0)return[];let[t,...s]=e,o=t.endsWith("?"),l=t.replace(/\?$/,"");if(s.length===0)return o?[l,""]:[l];let c=Jy(s.join("/")),h=[];return h.push(...c.map(f=>f===""?l:[l,f].join("/"))),o&&h.push(...c),h.map(f=>n.startsWith("/")&&f===""?"/":f)}function wC(n){n.sort((e,t)=>e.score!==t.score?t.score-e.score:RC(e.routesMeta.map(s=>s.childrenIndex),t.routesMeta.map(s=>s.childrenIndex)))}var EC=/^:[\w-]+$/,CC=3,SC=2,kC=1,IC=10,TC=-2,pg=n=>n==="*";function xC(n,e){let t=n.split("/"),s=t.length;return t.some(pg)&&(s+=TC),e&&(s+=SC),t.filter(o=>!pg(o)).reduce((o,l)=>o+(EC.test(l)?CC:l===""?kC:IC),s)}function RC(n,e){return n.length===e.length&&n.slice(0,-1).every((s,o)=>s===e[o])?n[n.length-1]-e[e.length-1]:0}function bC(n,e,t=!1){let{routesMeta:s}=n,o={},l="/",c=[];for(let h=0;h<s.length;++h){let f=s[h],m=h===s.length-1,y=l==="/"?e:e.slice(l.length)||"/",_=sl({path:f.relativePath,caseSensitive:f.caseSensitive,end:m},y),v=f.route;if(!_&&m&&t&&!s[s.length-1].route.index&&(_=sl({path:f.relativePath,caseSensitive:f.caseSensitive,end:!1},y)),!_)return null;Object.assign(o,_.params),c.push({params:o,pathname:Ln([l,_.pathname]),pathnameBase:MC(Ln([l,_.pathnameBase])),route:v}),_.pathnameBase!=="/"&&(l=Ln([l,_.pathnameBase]))}return c}function sl(n,e){typeof n=="string"&&(n={path:n,caseSensitive:!1,end:!0});let[t,s]=PC(n.path,n.caseSensitive,n.end),o=e.match(t);if(!o)return null;let l=o[0],c=l.replace(/(.)\/+$/,"$1"),h=o.slice(1);return{params:s.reduce((m,{paramName:y,isOptional:_},v)=>{if(y==="*"){let S=h[v]||"";c=l.slice(0,l.length-S.length).replace(/(.)\/+$/,"$1")}const R=h[v];return _&&!R?m[y]=void 0:m[y]=(R||"").replace(/%2F/g,"/"),m},{}),pathname:l,pathnameBase:c,pattern:n}}function PC(n,e=!1,t=!0){qt(n==="*"||!n.endsWith("*")||n.endsWith("/*"),`Route path "${n}" will be treated as if it were "${n.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${n.replace(/\*$/,"/*")}".`);let s=[],o="^"+n.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(c,h,f)=>(s.push({paramName:h,isOptional:f!=null}),f?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return n.endsWith("*")?(s.push({paramName:"*"}),o+=n==="*"||n==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?o+="\\/*$":n!==""&&n!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,e?void 0:"i"),s]}function NC(n){try{return n.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return qt(!1,`The URL path "${n}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),n}}function Un(n,e){if(e==="/")return n;if(!n.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,s=n.charAt(t);return s&&s!=="/"?null:n.slice(t)||"/"}var AC=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,DC=n=>AC.test(n);function OC(n,e="/"){let{pathname:t,search:s="",hash:o=""}=typeof n=="string"?qi(n):n,l;if(t)if(DC(t))l=t;else{if(t.includes("//")){let c=t;t=t.replace(/\/\/+/g,"/"),qt(!1,`Pathnames cannot have embedded double slashes - normalizing ${c} -> ${t}`)}t.startsWith("/")?l=mg(t.substring(1),"/"):l=mg(t,e)}else l=e;return{pathname:l,search:FC(s),hash:UC(o)}}function mg(n,e){let t=e.replace(/\/+$/,"").split("/");return n.split("/").forEach(o=>{o===".."?t.length>1&&t.pop():o!=="."&&t.push(o)}),t.length>1?t.join("/"):"/"}function Xc(n,e,t,s){return`Cannot include a '${n}' character in a manually specified \`to.${e}\` field [${JSON.stringify(s)}].  Please separate it out to the \`to.${t}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function LC(n){return n.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function Yd(n){let e=LC(n);return e.map((t,s)=>s===e.length-1?t.pathname:t.pathnameBase)}function Qd(n,e,t,s=!1){let o;typeof n=="string"?o=qi(n):(o={...n},Fe(!o.pathname||!o.pathname.includes("?"),Xc("?","pathname","search",o)),Fe(!o.pathname||!o.pathname.includes("#"),Xc("#","pathname","hash",o)),Fe(!o.search||!o.search.includes("#"),Xc("#","search","hash",o)));let l=n===""||o.pathname==="",c=l?"/":o.pathname,h;if(c==null)h=t;else{let _=e.length-1;if(!s&&c.startsWith("..")){let v=c.split("/");for(;v[0]==="..";)v.shift(),_-=1;o.pathname=v.join("/")}h=_>=0?e[_]:"/"}let f=OC(o,h),m=c&&c!=="/"&&c.endsWith("/"),y=(l||c===".")&&t.endsWith("/");return!f.pathname.endsWith("/")&&(m||y)&&(f.pathname+="/"),f}var Ln=n=>n.join("/").replace(/\/\/+/g,"/"),MC=n=>n.replace(/\/+$/,"").replace(/^\/*/,"/"),FC=n=>!n||n==="?"?"":n.startsWith("?")?n:"?"+n,UC=n=>!n||n==="#"?"":n.startsWith("#")?n:"#"+n;function jC(n){return n!=null&&typeof n.status=="number"&&typeof n.statusText=="string"&&typeof n.internal=="boolean"&&"data"in n}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var Xy=["POST","PUT","PATCH","DELETE"];new Set(Xy);var zC=["GET",...Xy];new Set(zC);var Ki=x.createContext(null);Ki.displayName="DataRouter";var Dl=x.createContext(null);Dl.displayName="DataRouterState";x.createContext(!1);var Zy=x.createContext({isTransitioning:!1});Zy.displayName="ViewTransition";var WC=x.createContext(new Map);WC.displayName="Fetchers";var $C=x.createContext(null);$C.displayName="Await";var cn=x.createContext(null);cn.displayName="Navigation";var ko=x.createContext(null);ko.displayName="Location";var dn=x.createContext({outlet:null,matches:[],isDataRoute:!1});dn.displayName="Route";var Jd=x.createContext(null);Jd.displayName="RouteError";function BC(n,{relative:e}={}){Fe(Yi(),"useHref() may be used only in the context of a <Router> component.");let{basename:t,navigator:s}=x.useContext(cn),{hash:o,pathname:l,search:c}=Io(n,{relative:e}),h=l;return t!=="/"&&(h=l==="/"?t:Ln([t,l])),s.createHref({pathname:h,search:c,hash:o})}function Yi(){return x.useContext(ko)!=null}function $n(){return Fe(Yi(),"useLocation() may be used only in the context of a <Router> component."),x.useContext(ko).location}var e_="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function t_(n){x.useContext(cn).static||x.useLayoutEffect(n)}function Xd(){let{isDataRoute:n}=x.useContext(dn);return n?nS():VC()}function VC(){Fe(Yi(),"useNavigate() may be used only in the context of a <Router> component.");let n=x.useContext(Ki),{basename:e,navigator:t}=x.useContext(cn),{matches:s}=x.useContext(dn),{pathname:o}=$n(),l=JSON.stringify(Yd(s)),c=x.useRef(!1);return t_(()=>{c.current=!0}),x.useCallback((f,m={})=>{if(qt(c.current,e_),!c.current)return;if(typeof f=="number"){t.go(f);return}let y=Qd(f,JSON.parse(l),o,m.relative==="path");n==null&&e!=="/"&&(y.pathname=y.pathname==="/"?e:Ln([e,y.pathname])),(m.replace?t.replace:t.push)(y,m.state,m)},[e,t,l,o,n])}x.createContext(null);function uD(){let{matches:n}=x.useContext(dn),e=n[n.length-1];return e?e.params:{}}function Io(n,{relative:e}={}){let{matches:t}=x.useContext(dn),{pathname:s}=$n(),o=JSON.stringify(Yd(t));return x.useMemo(()=>Qd(n,JSON.parse(o),s,e==="path"),[n,o,s,e])}function HC(n,e){return n_(n,e)}function n_(n,e,t,s,o){var H;Fe(Yi(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:l}=x.useContext(cn),{matches:c}=x.useContext(dn),h=c[c.length-1],f=h?h.params:{},m=h?h.pathname:"/",y=h?h.pathnameBase:"/",_=h&&h.route;{let U=_&&_.path||"";r_(m,!_||U.endsWith("*")||U.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${m}" (under <Route path="${U}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${U}"> to <Route path="${U==="/"?"*":`${U}/*`}">.`)}let v=$n(),R;if(e){let U=typeof e=="string"?qi(e):e;Fe(y==="/"||((H=U.pathname)==null?void 0:H.startsWith(y)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${y}" but pathname "${U.pathname}" was given in the \`location\` prop.`),R=U}else R=v;let S=R.pathname||"/",O=S;if(y!=="/"){let U=y.replace(/^\//,"").split("/");O="/"+S.replace(/^\//,"").split("/").slice(U.length).join("/")}let D=Yy(n,{pathname:O});qt(_||D!=null,`No routes matched location "${R.pathname}${R.search}${R.hash}" `),qt(D==null||D[D.length-1].route.element!==void 0||D[D.length-1].route.Component!==void 0||D[D.length-1].route.lazy!==void 0,`Matched leaf route at location "${R.pathname}${R.search}${R.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let j=QC(D&&D.map(U=>Object.assign({},U,{params:Object.assign({},f,U.params),pathname:Ln([y,l.encodeLocation?l.encodeLocation(U.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:U.pathname]),pathnameBase:U.pathnameBase==="/"?y:Ln([y,l.encodeLocation?l.encodeLocation(U.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:U.pathnameBase])})),c,t,s,o);return e&&j?x.createElement(ko.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...R},navigationType:"POP"}},j):j}function GC(){let n=tS(),e=jC(n)?`${n.status} ${n.statusText}`:n instanceof Error?n.message:JSON.stringify(n),t=n instanceof Error?n.stack:null,s="rgba(200,200,200, 0.5)",o={padding:"0.5rem",backgroundColor:s},l={padding:"2px 4px",backgroundColor:s},c=null;return console.error("Error handled by React Router default ErrorBoundary:",n),c=x.createElement(x.Fragment,null,x.createElement("p",null,"💿 Hey developer 👋"),x.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",x.createElement("code",{style:l},"ErrorBoundary")," or"," ",x.createElement("code",{style:l},"errorElement")," prop on your route.")),x.createElement(x.Fragment,null,x.createElement("h2",null,"Unexpected Application Error!"),x.createElement("h3",{style:{fontStyle:"italic"}},e),t?x.createElement("pre",{style:o},t):null,c)}var qC=x.createElement(GC,null),KC=class extends x.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,e){return e.location!==n.location||e.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error!==void 0?n.error:e.error,location:e.location,revalidation:n.revalidation||e.revalidation}}componentDidCatch(n,e){this.props.onError?this.props.onError(n,e):console.error("React Router caught the following error during render",n)}render(){return this.state.error!==void 0?x.createElement(dn.Provider,{value:this.props.routeContext},x.createElement(Jd.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function YC({routeContext:n,match:e,children:t}){let s=x.useContext(Ki);return s&&s.static&&s.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=e.route.id),x.createElement(dn.Provider,{value:n},t)}function QC(n,e=[],t=null,s=null,o=null){if(n==null){if(!t)return null;if(t.errors)n=t.matches;else if(e.length===0&&!t.initialized&&t.matches.length>0)n=t.matches;else return null}let l=n,c=t==null?void 0:t.errors;if(c!=null){let y=l.findIndex(_=>_.route.id&&(c==null?void 0:c[_.route.id])!==void 0);Fe(y>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(c).join(",")}`),l=l.slice(0,Math.min(l.length,y+1))}let h=!1,f=-1;if(t)for(let y=0;y<l.length;y++){let _=l[y];if((_.route.HydrateFallback||_.route.hydrateFallbackElement)&&(f=y),_.route.id){let{loaderData:v,errors:R}=t,S=_.route.loader&&!v.hasOwnProperty(_.route.id)&&(!R||R[_.route.id]===void 0);if(_.route.lazy||S){h=!0,f>=0?l=l.slice(0,f+1):l=[l[0]];break}}}let m=t&&s?(y,_)=>{var v,R;s(y,{location:t.location,params:((R=(v=t.matches)==null?void 0:v[0])==null?void 0:R.params)??{},errorInfo:_})}:void 0;return l.reduceRight((y,_,v)=>{let R,S=!1,O=null,D=null;t&&(R=c&&_.route.id?c[_.route.id]:void 0,O=_.route.errorElement||qC,h&&(f<0&&v===0?(r_("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),S=!0,D=null):f===v&&(S=!0,D=_.route.hydrateFallbackElement||null)));let j=e.concat(l.slice(0,v+1)),H=()=>{let U;return R?U=O:S?U=D:_.route.Component?U=x.createElement(_.route.Component,null):_.route.element?U=_.route.element:U=y,x.createElement(YC,{match:_,routeContext:{outlet:y,matches:j,isDataRoute:t!=null},children:U})};return t&&(_.route.ErrorBoundary||_.route.errorElement||v===0)?x.createElement(KC,{location:t.location,revalidation:t.revalidation,component:O,error:R,children:H(),routeContext:{outlet:null,matches:j,isDataRoute:!0},onError:m}):H()},null)}function Zd(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function JC(n){let e=x.useContext(Ki);return Fe(e,Zd(n)),e}function XC(n){let e=x.useContext(Dl);return Fe(e,Zd(n)),e}function ZC(n){let e=x.useContext(dn);return Fe(e,Zd(n)),e}function eh(n){let e=ZC(n),t=e.matches[e.matches.length-1];return Fe(t.route.id,`${n} can only be used on routes that contain a unique "id"`),t.route.id}function eS(){return eh("useRouteId")}function tS(){var s;let n=x.useContext(Jd),e=XC("useRouteError"),t=eh("useRouteError");return n!==void 0?n:(s=e.errors)==null?void 0:s[t]}function nS(){let{router:n}=JC("useNavigate"),e=eh("useNavigate"),t=x.useRef(!1);return t_(()=>{t.current=!0}),x.useCallback(async(o,l={})=>{qt(t.current,e_),t.current&&(typeof o=="number"?n.navigate(o):await n.navigate(o,{fromRouteId:e,...l}))},[n,e])}var gg={};function r_(n,e,t){!e&&!gg[n]&&(gg[n]=!0,qt(!1,t))}x.memo(rS);function rS({routes:n,future:e,state:t,unstable_onError:s}){return n_(n,void 0,t,s,e)}function iS({to:n,replace:e,state:t,relative:s}){Fe(Yi(),"<Navigate> may be used only in the context of a <Router> component.");let{static:o}=x.useContext(cn);qt(!o,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:l}=x.useContext(dn),{pathname:c}=$n(),h=Xd(),f=Qd(n,Yd(l),c,s==="path"),m=JSON.stringify(f);return x.useEffect(()=>{h(JSON.parse(m),{replace:e,state:t,relative:s})},[h,m,s,e,t]),null}function bt(n){Fe(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function sS({basename:n="/",children:e=null,location:t,navigationType:s="POP",navigator:o,static:l=!1}){Fe(!Yi(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let c=n.replace(/^\/*/,"/"),h=x.useMemo(()=>({basename:c,navigator:o,static:l,future:{}}),[c,o,l]);typeof t=="string"&&(t=qi(t));let{pathname:f="/",search:m="",hash:y="",state:_=null,key:v="default"}=t,R=x.useMemo(()=>{let S=Un(f,c);return S==null?null:{location:{pathname:S,search:m,hash:y,state:_,key:v},navigationType:s}},[c,f,m,y,_,v,s]);return qt(R!=null,`<Router basename="${c}"> is not able to match the URL "${f}${m}${y}" because it does not start with the basename, so the <Router> won't render anything.`),R==null?null:x.createElement(cn.Provider,{value:h},x.createElement(ko.Provider,{children:e,value:R}))}function yg({children:n,location:e}){return HC(wd(n),e)}function wd(n,e=[]){let t=[];return x.Children.forEach(n,(s,o)=>{if(!x.isValidElement(s))return;let l=[...e,o];if(s.type===x.Fragment){t.push.apply(t,wd(s.props.children,l));return}Fe(s.type===bt,`[${typeof s.type=="string"?s.type:s.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Fe(!s.props.index||!s.props.children,"An index route cannot have child routes.");let c={id:s.props.id||l.join("-"),caseSensitive:s.props.caseSensitive,element:s.props.element,Component:s.props.Component,index:s.props.index,path:s.props.path,middleware:s.props.middleware,loader:s.props.loader,action:s.props.action,hydrateFallbackElement:s.props.hydrateFallbackElement,HydrateFallback:s.props.HydrateFallback,errorElement:s.props.errorElement,ErrorBoundary:s.props.ErrorBoundary,hasErrorBoundary:s.props.hasErrorBoundary===!0||s.props.ErrorBoundary!=null||s.props.errorElement!=null,shouldRevalidate:s.props.shouldRevalidate,handle:s.props.handle,lazy:s.props.lazy};s.props.children&&(c.children=wd(s.props.children,l)),t.push(c)}),t}var Xa="get",Za="application/x-www-form-urlencoded";function Ol(n){return n!=null&&typeof n.tagName=="string"}function oS(n){return Ol(n)&&n.tagName.toLowerCase()==="button"}function aS(n){return Ol(n)&&n.tagName.toLowerCase()==="form"}function lS(n){return Ol(n)&&n.tagName.toLowerCase()==="input"}function uS(n){return!!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)}function cS(n,e){return n.button===0&&(!e||e==="_self")&&!uS(n)}var Ha=null;function dS(){if(Ha===null)try{new FormData(document.createElement("form"),0),Ha=!1}catch{Ha=!0}return Ha}var hS=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Zc(n){return n!=null&&!hS.has(n)?(qt(!1,`"${n}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Za}"`),null):n}function fS(n,e){let t,s,o,l,c;if(aS(n)){let h=n.getAttribute("action");s=h?Un(h,e):null,t=n.getAttribute("method")||Xa,o=Zc(n.getAttribute("enctype"))||Za,l=new FormData(n)}else if(oS(n)||lS(n)&&(n.type==="submit"||n.type==="image")){let h=n.form;if(h==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let f=n.getAttribute("formaction")||h.getAttribute("action");if(s=f?Un(f,e):null,t=n.getAttribute("formmethod")||h.getAttribute("method")||Xa,o=Zc(n.getAttribute("formenctype"))||Zc(h.getAttribute("enctype"))||Za,l=new FormData(h,n),!dS()){let{name:m,type:y,value:_}=n;if(y==="image"){let v=m?`${m}.`:"";l.append(`${v}x`,"0"),l.append(`${v}y`,"0")}else m&&l.append(m,_)}}else{if(Ol(n))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');t=Xa,s=null,o=Za,c=n}return l&&o==="text/plain"&&(c=l,l=void 0),{action:s,method:t.toLowerCase(),encType:o,formData:l,body:c}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function th(n,e){if(n===!1||n===null||typeof n>"u")throw new Error(e)}function pS(n,e,t){let s=typeof n=="string"?new URL(n,typeof window>"u"?"server://singlefetch/":window.location.origin):n;return s.pathname==="/"?s.pathname=`_root.${t}`:e&&Un(s.pathname,e)==="/"?s.pathname=`${e.replace(/\/$/,"")}/_root.${t}`:s.pathname=`${s.pathname.replace(/\/$/,"")}.${t}`,s}async function mS(n,e){if(n.id in e)return e[n.id];try{let t=await import(n.module);return e[n.id]=t,t}catch(t){return console.error(`Error loading route module \`${n.module}\`, reloading page...`),console.error(t),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function gS(n){return n==null?!1:n.href==null?n.rel==="preload"&&typeof n.imageSrcSet=="string"&&typeof n.imageSizes=="string":typeof n.rel=="string"&&typeof n.href=="string"}async function yS(n,e,t){let s=await Promise.all(n.map(async o=>{let l=e.routes[o.route.id];if(l){let c=await mS(l,t);return c.links?c.links():[]}return[]}));return ES(s.flat(1).filter(gS).filter(o=>o.rel==="stylesheet"||o.rel==="preload").map(o=>o.rel==="stylesheet"?{...o,rel:"prefetch",as:"style"}:{...o,rel:"prefetch"}))}function _g(n,e,t,s,o,l){let c=(f,m)=>t[m]?f.route.id!==t[m].route.id:!0,h=(f,m)=>{var y;return t[m].pathname!==f.pathname||((y=t[m].route.path)==null?void 0:y.endsWith("*"))&&t[m].params["*"]!==f.params["*"]};return l==="assets"?e.filter((f,m)=>c(f,m)||h(f,m)):l==="data"?e.filter((f,m)=>{var _;let y=s.routes[f.route.id];if(!y||!y.hasLoader)return!1;if(c(f,m)||h(f,m))return!0;if(f.route.shouldRevalidate){let v=f.route.shouldRevalidate({currentUrl:new URL(o.pathname+o.search+o.hash,window.origin),currentParams:((_=t[0])==null?void 0:_.params)||{},nextUrl:new URL(n,window.origin),nextParams:f.params,defaultShouldRevalidate:!0});if(typeof v=="boolean")return v}return!0}):[]}function _S(n,e,{includeHydrateFallback:t}={}){return vS(n.map(s=>{let o=e.routes[s.route.id];if(!o)return[];let l=[o.module];return o.clientActionModule&&(l=l.concat(o.clientActionModule)),o.clientLoaderModule&&(l=l.concat(o.clientLoaderModule)),t&&o.hydrateFallbackModule&&(l=l.concat(o.hydrateFallbackModule)),o.imports&&(l=l.concat(o.imports)),l}).flat(1))}function vS(n){return[...new Set(n)]}function wS(n){let e={},t=Object.keys(n).sort();for(let s of t)e[s]=n[s];return e}function ES(n,e){let t=new Set;return new Set(e),n.reduce((s,o)=>{let l=JSON.stringify(wS(o));return t.has(l)||(t.add(l),s.push({key:l,link:o})),s},[])}function i_(){let n=x.useContext(Ki);return th(n,"You must render this element inside a <DataRouterContext.Provider> element"),n}function CS(){let n=x.useContext(Dl);return th(n,"You must render this element inside a <DataRouterStateContext.Provider> element"),n}var nh=x.createContext(void 0);nh.displayName="FrameworkContext";function s_(){let n=x.useContext(nh);return th(n,"You must render this element inside a <HydratedRouter> element"),n}function SS(n,e){let t=x.useContext(nh),[s,o]=x.useState(!1),[l,c]=x.useState(!1),{onFocus:h,onBlur:f,onMouseEnter:m,onMouseLeave:y,onTouchStart:_}=e,v=x.useRef(null);x.useEffect(()=>{if(n==="render"&&c(!0),n==="viewport"){let O=j=>{j.forEach(H=>{c(H.isIntersecting)})},D=new IntersectionObserver(O,{threshold:.5});return v.current&&D.observe(v.current),()=>{D.disconnect()}}},[n]),x.useEffect(()=>{if(s){let O=setTimeout(()=>{c(!0)},100);return()=>{clearTimeout(O)}}},[s]);let R=()=>{o(!0)},S=()=>{o(!1),c(!1)};return t?n!=="intent"?[l,v,{}]:[l,v,{onFocus:qs(h,R),onBlur:qs(f,S),onMouseEnter:qs(m,R),onMouseLeave:qs(y,S),onTouchStart:qs(_,R)}]:[!1,v,{}]}function qs(n,e){return t=>{n&&n(t),t.defaultPrevented||e(t)}}function kS({page:n,...e}){let{router:t}=i_(),s=x.useMemo(()=>Yy(t.routes,n,t.basename),[t.routes,n,t.basename]);return s?x.createElement(TS,{page:n,matches:s,...e}):null}function IS(n){let{manifest:e,routeModules:t}=s_(),[s,o]=x.useState([]);return x.useEffect(()=>{let l=!1;return yS(n,e,t).then(c=>{l||o(c)}),()=>{l=!0}},[n,e,t]),s}function TS({page:n,matches:e,...t}){let s=$n(),{manifest:o,routeModules:l}=s_(),{basename:c}=i_(),{loaderData:h,matches:f}=CS(),m=x.useMemo(()=>_g(n,e,f,o,s,"data"),[n,e,f,o,s]),y=x.useMemo(()=>_g(n,e,f,o,s,"assets"),[n,e,f,o,s]),_=x.useMemo(()=>{if(n===s.pathname+s.search+s.hash)return[];let S=new Set,O=!1;if(e.forEach(j=>{var U;let H=o.routes[j.route.id];!H||!H.hasLoader||(!m.some(ne=>ne.route.id===j.route.id)&&j.route.id in h&&((U=l[j.route.id])!=null&&U.shouldRevalidate)||H.hasClientLoader?O=!0:S.add(j.route.id))}),S.size===0)return[];let D=pS(n,c,"data");return O&&S.size>0&&D.searchParams.set("_routes",e.filter(j=>S.has(j.route.id)).map(j=>j.route.id).join(",")),[D.pathname+D.search]},[c,h,s,o,m,e,n,l]),v=x.useMemo(()=>_S(y,o),[y,o]),R=IS(y);return x.createElement(x.Fragment,null,_.map(S=>x.createElement("link",{key:S,rel:"prefetch",as:"fetch",href:S,...t})),v.map(S=>x.createElement("link",{key:S,rel:"modulepreload",href:S,...t})),R.map(({key:S,link:O})=>x.createElement("link",{key:S,nonce:t.nonce,...O})))}function xS(...n){return e=>{n.forEach(t=>{typeof t=="function"?t(e):t!=null&&(t.current=e)})}}var o_=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{o_&&(window.__reactRouterVersion="7.9.6")}catch{}function RS({basename:n,children:e,window:t}){let s=x.useRef();s.current==null&&(s.current=mC({window:t,v5Compat:!0}));let o=s.current,[l,c]=x.useState({action:o.action,location:o.location}),h=x.useCallback(f=>{x.startTransition(()=>c(f))},[c]);return x.useLayoutEffect(()=>o.listen(h),[o,h]),x.createElement(sS,{basename:n,children:e,location:l.location,navigationType:l.action,navigator:o})}var a_=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,rh=x.forwardRef(function({onClick:e,discover:t="render",prefetch:s="none",relative:o,reloadDocument:l,replace:c,state:h,target:f,to:m,preventScrollReset:y,viewTransition:_,...v},R){let{basename:S}=x.useContext(cn),O=typeof m=="string"&&a_.test(m),D,j=!1;if(typeof m=="string"&&O&&(D=m,o_))try{let we=new URL(window.location.href),Be=m.startsWith("//")?new URL(we.protocol+m):new URL(m),yt=Un(Be.pathname,S);Be.origin===we.origin&&yt!=null?m=yt+Be.search+Be.hash:j=!0}catch{qt(!1,`<Link to="${m}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let H=BC(m,{relative:o}),[U,ne,he]=SS(s,v),Se=AS(m,{replace:c,state:h,target:f,preventScrollReset:y,relative:o,viewTransition:_});function Ie(we){e&&e(we),we.defaultPrevented||Se(we)}let X=x.createElement("a",{...v,...he,href:D||H,onClick:j||l?e:Ie,ref:xS(R,ne),target:f,"data-discover":!O&&t==="render"?"true":void 0});return U&&!O?x.createElement(x.Fragment,null,X,x.createElement(kS,{page:H})):X});rh.displayName="Link";var bS=x.forwardRef(function({"aria-current":e="page",caseSensitive:t=!1,className:s="",end:o=!1,style:l,to:c,viewTransition:h,children:f,...m},y){let _=Io(c,{relative:m.relative}),v=$n(),R=x.useContext(Dl),{navigator:S,basename:O}=x.useContext(cn),D=R!=null&&FS(_)&&h===!0,j=S.encodeLocation?S.encodeLocation(_).pathname:_.pathname,H=v.pathname,U=R&&R.navigation&&R.navigation.location?R.navigation.location.pathname:null;t||(H=H.toLowerCase(),U=U?U.toLowerCase():null,j=j.toLowerCase()),U&&O&&(U=Un(U,O)||U);const ne=j!=="/"&&j.endsWith("/")?j.length-1:j.length;let he=H===j||!o&&H.startsWith(j)&&H.charAt(ne)==="/",Se=U!=null&&(U===j||!o&&U.startsWith(j)&&U.charAt(j.length)==="/"),Ie={isActive:he,isPending:Se,isTransitioning:D},X=he?e:void 0,we;typeof s=="function"?we=s(Ie):we=[s,he?"active":null,Se?"pending":null,D?"transitioning":null].filter(Boolean).join(" ");let Be=typeof l=="function"?l(Ie):l;return x.createElement(rh,{...m,"aria-current":X,className:we,ref:y,style:Be,to:c,viewTransition:h},typeof f=="function"?f(Ie):f)});bS.displayName="NavLink";var PS=x.forwardRef(({discover:n="render",fetcherKey:e,navigate:t,reloadDocument:s,replace:o,state:l,method:c=Xa,action:h,onSubmit:f,relative:m,preventScrollReset:y,viewTransition:_,...v},R)=>{let S=LS(),O=MS(h,{relative:m}),D=c.toLowerCase()==="get"?"get":"post",j=typeof h=="string"&&a_.test(h),H=U=>{if(f&&f(U),U.defaultPrevented)return;U.preventDefault();let ne=U.nativeEvent.submitter,he=(ne==null?void 0:ne.getAttribute("formmethod"))||c;S(ne||U.currentTarget,{fetcherKey:e,method:he,navigate:t,replace:o,state:l,relative:m,preventScrollReset:y,viewTransition:_})};return x.createElement("form",{ref:R,method:D,action:O,onSubmit:s?f:H,...v,"data-discover":!j&&n==="render"?"true":void 0})});PS.displayName="Form";function NS(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function l_(n){let e=x.useContext(Ki);return Fe(e,NS(n)),e}function AS(n,{target:e,replace:t,state:s,preventScrollReset:o,relative:l,viewTransition:c}={}){let h=Xd(),f=$n(),m=Io(n,{relative:l});return x.useCallback(y=>{if(cS(y,e)){y.preventDefault();let _=t!==void 0?t:ho(f)===ho(m);h(n,{replace:_,state:s,preventScrollReset:o,relative:l,viewTransition:c})}},[f,h,m,t,s,e,n,o,l,c])}var DS=0,OS=()=>`__${String(++DS)}__`;function LS(){let{router:n}=l_("useSubmit"),{basename:e}=x.useContext(cn),t=eS();return x.useCallback(async(s,o={})=>{let{action:l,method:c,encType:h,formData:f,body:m}=fS(s,e);if(o.navigate===!1){let y=o.fetcherKey||OS();await n.fetch(y,t,o.action||l,{preventScrollReset:o.preventScrollReset,formData:f,body:m,formMethod:o.method||c,formEncType:o.encType||h,flushSync:o.flushSync})}else await n.navigate(o.action||l,{preventScrollReset:o.preventScrollReset,formData:f,body:m,formMethod:o.method||c,formEncType:o.encType||h,replace:o.replace,state:o.state,fromRouteId:t,flushSync:o.flushSync,viewTransition:o.viewTransition})},[n,e,t])}function MS(n,{relative:e}={}){let{basename:t}=x.useContext(cn),s=x.useContext(dn);Fe(s,"useFormAction must be used inside a RouteContext");let[o]=s.matches.slice(-1),l={...Io(n||".",{relative:e})},c=$n();if(n==null){l.search=c.search;let h=new URLSearchParams(l.search),f=h.getAll("index");if(f.some(y=>y==="")){h.delete("index"),f.filter(_=>_).forEach(_=>h.append("index",_));let y=h.toString();l.search=y?`?${y}`:""}}return(!n||n===".")&&o.route.index&&(l.search=l.search?l.search.replace(/^\?/,"?index&"):"?index"),t!=="/"&&(l.pathname=l.pathname==="/"?t:Ln([t,l.pathname])),ho(l)}function FS(n,{relative:e}={}){let t=x.useContext(Zy);Fe(t!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:s}=l_("useViewTransitionState"),o=Io(n,{relative:e});if(!t.isTransitioning)return!1;let l=Un(t.currentLocation.pathname,s)||t.currentLocation.pathname,c=Un(t.nextLocation.pathname,s)||t.nextLocation.pathname;return sl(o.pathname,c)!=null||sl(o.pathname,l)!=null}const US=()=>{};var vg={};/**
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
 */const u_={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const W=function(n,e){if(!n)throw Qi(e)},Qi=function(n){return new Error("Firebase Database ("+u_.SDK_VERSION+") INTERNAL ASSERT FAILED: "+n)};/**
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
 */const c_=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let o=n.charCodeAt(s);o<128?e[t++]=o:o<2048?(e[t++]=o>>6|192,e[t++]=o&63|128):(o&64512)===55296&&s+1<n.length&&(n.charCodeAt(s+1)&64512)===56320?(o=65536+((o&1023)<<10)+(n.charCodeAt(++s)&1023),e[t++]=o>>18|240,e[t++]=o>>12&63|128,e[t++]=o>>6&63|128,e[t++]=o&63|128):(e[t++]=o>>12|224,e[t++]=o>>6&63|128,e[t++]=o&63|128)}return e},jS=function(n){const e=[];let t=0,s=0;for(;t<n.length;){const o=n[t++];if(o<128)e[s++]=String.fromCharCode(o);else if(o>191&&o<224){const l=n[t++];e[s++]=String.fromCharCode((o&31)<<6|l&63)}else if(o>239&&o<365){const l=n[t++],c=n[t++],h=n[t++],f=((o&7)<<18|(l&63)<<12|(c&63)<<6|h&63)-65536;e[s++]=String.fromCharCode(55296+(f>>10)),e[s++]=String.fromCharCode(56320+(f&1023))}else{const l=n[t++],c=n[t++];e[s++]=String.fromCharCode((o&15)<<12|(l&63)<<6|c&63)}}return e.join("")},ih={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let o=0;o<n.length;o+=3){const l=n[o],c=o+1<n.length,h=c?n[o+1]:0,f=o+2<n.length,m=f?n[o+2]:0,y=l>>2,_=(l&3)<<4|h>>4;let v=(h&15)<<2|m>>6,R=m&63;f||(R=64,c||(v=64)),s.push(t[y],t[_],t[v],t[R])}return s.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(c_(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):jS(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let o=0;o<n.length;){const l=t[n.charAt(o++)],h=o<n.length?t[n.charAt(o)]:0;++o;const m=o<n.length?t[n.charAt(o)]:64;++o;const _=o<n.length?t[n.charAt(o)]:64;if(++o,l==null||h==null||m==null||_==null)throw new zS;const v=l<<2|h>>4;if(s.push(v),m!==64){const R=h<<4&240|m>>2;if(s.push(R),_!==64){const S=m<<6&192|_;s.push(S)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class zS extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const d_=function(n){const e=c_(n);return ih.encodeByteArray(e,!0)},ol=function(n){return d_(n).replace(/\./g,"")},al=function(n){try{return ih.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function WS(n){return h_(void 0,n)}function h_(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!$S(t)||(n[t]=h_(n[t],e[t]));return n}function $S(n){return n!=="__proto__"}/**
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
 */function BS(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const VS=()=>BS().__FIREBASE_DEFAULTS__,HS=()=>{if(typeof process>"u"||typeof vg>"u")return;const n=vg.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},GS=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&al(n[1]);return e&&JSON.parse(e)},sh=()=>{try{return US()||VS()||HS()||GS()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},f_=n=>{var e,t;return(t=(e=sh())==null?void 0:e.emulatorHosts)==null?void 0:t[n]},qS=n=>{const e=f_(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},p_=()=>{var n;return(n=sh())==null?void 0:n.config},m_=n=>{var e;return(e=sh())==null?void 0:e[`_${n}`]};/**
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
 */class To{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
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
 */function Ji(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function g_(n){return(await fetch(n,{credentials:"include"})).ok}/**
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
 */function KS(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",o=n.iat||0,l=n.sub||n.user_id;if(!l)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const c={iss:`https://securetoken.google.com/${s}`,aud:s,iat:o,exp:o+3600,auth_time:o,sub:l,user_id:l,firebase:{sign_in_provider:"custom",identities:{}},...n};return[ol(JSON.stringify(t)),ol(JSON.stringify(c)),""].join(".")}const io={};function YS(){const n={prod:[],emulator:[]};for(const e of Object.keys(io))io[e]?n.emulator.push(e):n.prod.push(e);return n}function QS(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let wg=!1;function y_(n,e){if(typeof window>"u"||typeof document>"u"||!Ji(window.location.host)||io[n]===e||io[n]||wg)return;io[n]=e;function t(v){return`__firebase__banner__${v}`}const s="__firebase__banner",l=YS().prod.length>0;function c(){const v=document.getElementById(s);v&&v.remove()}function h(v){v.style.display="flex",v.style.background="#7faaf0",v.style.position="fixed",v.style.bottom="5px",v.style.left="5px",v.style.padding=".5em",v.style.borderRadius="5px",v.style.alignItems="center"}function f(v,R){v.setAttribute("width","24"),v.setAttribute("id",R),v.setAttribute("height","24"),v.setAttribute("viewBox","0 0 24 24"),v.setAttribute("fill","none"),v.style.marginLeft="-6px"}function m(){const v=document.createElement("span");return v.style.cursor="pointer",v.style.marginLeft="16px",v.style.fontSize="24px",v.innerHTML=" &times;",v.onclick=()=>{wg=!0,c()},v}function y(v,R){v.setAttribute("id",R),v.innerText="Learn more",v.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",v.setAttribute("target","__blank"),v.style.paddingLeft="5px",v.style.textDecoration="underline"}function _(){const v=QS(s),R=t("text"),S=document.getElementById(R)||document.createElement("span"),O=t("learnmore"),D=document.getElementById(O)||document.createElement("a"),j=t("preprendIcon"),H=document.getElementById(j)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(v.created){const U=v.element;h(U),y(D,O);const ne=m();f(H,j),U.append(H,S,D,ne),document.body.appendChild(U)}l?(S.innerText="Preview backend disconnected.",H.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(H.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,S.innerText="Preview backend running in this workspace."),S.setAttribute("id",R)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",_):_()}/**
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
 */function Ct(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function oh(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ct())}function JS(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function __(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function v_(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function XS(){const n=Ct();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function ZS(){return u_.NODE_ADMIN===!0}function w_(){try{return typeof indexedDB=="object"}catch{return!1}}function E_(){return new Promise((n,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(s);o.onsuccess=()=>{o.result.close(),t||self.indexedDB.deleteDatabase(s),n(!0)},o.onupgradeneeded=()=>{t=!1},o.onerror=()=>{var l;e(((l=o.error)==null?void 0:l.message)||"")}}catch(t){e(t)}})}function ek(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const tk="FirebaseError";class wn extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=tk,Object.setPrototypeOf(this,wn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Zr.prototype.create)}}class Zr{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},o=`${this.service}/${e}`,l=this.errors[e],c=l?nk(l,s):"Error",h=`${this.serviceName}: ${c} (${o}).`;return new wn(o,h,s)}}function nk(n,e){return n.replace(rk,(t,s)=>{const o=e[s];return o!=null?String(o):`<${s}?>`})}const rk=/\{\$([^}]+)}/g;/**
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
 */function fo(n){return JSON.parse(n)}function st(n){return JSON.stringify(n)}/**
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
 */const C_=function(n){let e={},t={},s={},o="";try{const l=n.split(".");e=fo(al(l[0])||""),t=fo(al(l[1])||""),o=l[2],s=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:s,signature:o}},ik=function(n){const e=C_(n),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},sk=function(n){const e=C_(n).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function En(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function Wi(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}function Ed(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function ll(n,e,t){const s={};for(const o in n)Object.prototype.hasOwnProperty.call(n,o)&&(s[o]=e.call(t,n[o],o,n));return s}function wr(n,e){if(n===e)return!0;const t=Object.keys(n),s=Object.keys(e);for(const o of t){if(!s.includes(o))return!1;const l=n[o],c=e[o];if(Eg(l)&&Eg(c)){if(!wr(l,c))return!1}else if(l!==c)return!1}for(const o of s)if(!t.includes(o))return!1;return!0}function Eg(n){return n!==null&&typeof n=="object"}/**
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
 */function Xi(n){const e=[];for(const[t,s]of Object.entries(n))Array.isArray(s)?s.forEach(o=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function no(n){const e={};return n.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[o,l]=s.split("=");e[decodeURIComponent(o)]=decodeURIComponent(l)}}),e}function ro(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}/**
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
 */class ok{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const s=this.W_;if(typeof e=="string")for(let _=0;_<16;_++)s[_]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let _=0;_<16;_++)s[_]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let _=16;_<80;_++){const v=s[_-3]^s[_-8]^s[_-14]^s[_-16];s[_]=(v<<1|v>>>31)&4294967295}let o=this.chain_[0],l=this.chain_[1],c=this.chain_[2],h=this.chain_[3],f=this.chain_[4],m,y;for(let _=0;_<80;_++){_<40?_<20?(m=h^l&(c^h),y=1518500249):(m=l^c^h,y=1859775393):_<60?(m=l&c|h&(l|c),y=2400959708):(m=l^c^h,y=3395469782);const v=(o<<5|o>>>27)+m+f+y+s[_]&4294967295;f=h,h=c,c=(l<<30|l>>>2)&4294967295,l=o,o=v}this.chain_[0]=this.chain_[0]+o&4294967295,this.chain_[1]=this.chain_[1]+l&4294967295,this.chain_[2]=this.chain_[2]+c&4294967295,this.chain_[3]=this.chain_[3]+h&4294967295,this.chain_[4]=this.chain_[4]+f&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const s=t-this.blockSize;let o=0;const l=this.buf_;let c=this.inbuf_;for(;o<t;){if(c===0)for(;o<=s;)this.compress_(e,o),o+=this.blockSize;if(typeof e=="string"){for(;o<t;)if(l[c]=e.charCodeAt(o),++c,++o,c===this.blockSize){this.compress_(l),c=0;break}}else for(;o<t;)if(l[c]=e[o],++c,++o,c===this.blockSize){this.compress_(l),c=0;break}}this.inbuf_=c,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let o=this.blockSize-1;o>=56;o--)this.buf_[o]=t&255,t/=256;this.compress_(this.buf_);let s=0;for(let o=0;o<5;o++)for(let l=24;l>=0;l-=8)e[s]=this.chain_[o]>>l&255,++s;return e}}function ak(n,e){const t=new lk(n,e);return t.subscribe.bind(t)}class lk{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,s){let o;if(e===void 0&&t===void 0&&s===void 0)throw new Error("Missing Observer.");uk(e,["next","error","complete"])?o=e:o={next:e,error:t,complete:s},o.next===void 0&&(o.next=ed),o.error===void 0&&(o.error=ed),o.complete===void 0&&(o.complete=ed);const l=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),l}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function uk(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function ed(){}function Ll(n,e){return`${n} failed: ${e} argument `}/**
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
 */const ck=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let o=n.charCodeAt(s);if(o>=55296&&o<=56319){const l=o-55296;s++,W(s<n.length,"Surrogate pair missing trail surrogate.");const c=n.charCodeAt(s)-56320;o=65536+(l<<10)+c}o<128?e[t++]=o:o<2048?(e[t++]=o>>6|192,e[t++]=o&63|128):o<65536?(e[t++]=o>>12|224,e[t++]=o>>6&63|128,e[t++]=o&63|128):(e[t++]=o>>18|240,e[t++]=o>>12&63|128,e[t++]=o>>6&63|128,e[t++]=o&63|128)}return e},Ml=function(n){let e=0;for(let t=0;t<n.length;t++){const s=n.charCodeAt(t);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,t++):e+=3}return e};/**
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
 */const dk=1e3,hk=2,fk=14400*1e3,pk=.5;function Cg(n,e=dk,t=hk){const s=e*Math.pow(t,n),o=Math.round(pk*s*(Math.random()-.5)*2);return Math.min(fk,s+o)}/**
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
 */function ot(n){return n&&n._delegate?n._delegate:n}class an{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */class mk{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new To;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:t});o&&s.resolve(o)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(e==null?void 0:e.optional)??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(o){if(s)return null;throw o}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(yk(e))try{this.getOrInitializeService({instanceIdentifier:Wr})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(t);try{const l=this.getOrInitializeService({instanceIdentifier:o});s.resolve(l)}catch{}}}}clearInstance(e=Wr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Wr){return this.instances.has(e)}getOptions(e=Wr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[l,c]of this.instancesDeferred.entries()){const h=this.normalizeInstanceIdentifier(l);s===h&&c.resolve(o)}return o}onInit(e,t){const s=this.normalizeInstanceIdentifier(t),o=this.onInitCallbacks.get(s)??new Set;o.add(e),this.onInitCallbacks.set(s,o);const l=this.instances.get(s);return l&&e(l,s),()=>{o.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const o of s)try{o(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:gk(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Wr){return this.component?this.component.multipleInstances?e:Wr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function gk(n){return n===Wr?void 0:n}function yk(n){return n.instantiationMode==="EAGER"}/**
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
 */class _k{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new mk(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Te;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(Te||(Te={}));const vk={debug:Te.DEBUG,verbose:Te.VERBOSE,info:Te.INFO,warn:Te.WARN,error:Te.ERROR,silent:Te.SILENT},wk=Te.INFO,Ek={[Te.DEBUG]:"log",[Te.VERBOSE]:"log",[Te.INFO]:"info",[Te.WARN]:"warn",[Te.ERROR]:"error"},Ck=(n,e,...t)=>{if(e<n.logLevel)return;const s=new Date().toISOString(),o=Ek[e];if(o)console[o](`[${s}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Fl{constructor(e){this.name=e,this._logLevel=wk,this._logHandler=Ck,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Te))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?vk[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Te.DEBUG,...e),this._logHandler(this,Te.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Te.VERBOSE,...e),this._logHandler(this,Te.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Te.INFO,...e),this._logHandler(this,Te.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Te.WARN,...e),this._logHandler(this,Te.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Te.ERROR,...e),this._logHandler(this,Te.ERROR,...e)}}const Sk=(n,e)=>e.some(t=>n instanceof t);let Sg,kg;function kk(){return Sg||(Sg=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Ik(){return kg||(kg=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const S_=new WeakMap,Cd=new WeakMap,k_=new WeakMap,td=new WeakMap,ah=new WeakMap;function Tk(n){const e=new Promise((t,s)=>{const o=()=>{n.removeEventListener("success",l),n.removeEventListener("error",c)},l=()=>{t(yr(n.result)),o()},c=()=>{s(n.error),o()};n.addEventListener("success",l),n.addEventListener("error",c)});return e.then(t=>{t instanceof IDBCursor&&S_.set(t,n)}).catch(()=>{}),ah.set(e,n),e}function xk(n){if(Cd.has(n))return;const e=new Promise((t,s)=>{const o=()=>{n.removeEventListener("complete",l),n.removeEventListener("error",c),n.removeEventListener("abort",c)},l=()=>{t(),o()},c=()=>{s(n.error||new DOMException("AbortError","AbortError")),o()};n.addEventListener("complete",l),n.addEventListener("error",c),n.addEventListener("abort",c)});Cd.set(n,e)}let Sd={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Cd.get(n);if(e==="objectStoreNames")return n.objectStoreNames||k_.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return yr(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function Rk(n){Sd=n(Sd)}function bk(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=n.call(nd(this),e,...t);return k_.set(s,e.sort?e.sort():[e]),yr(s)}:Ik().includes(n)?function(...e){return n.apply(nd(this),e),yr(S_.get(this))}:function(...e){return yr(n.apply(nd(this),e))}}function Pk(n){return typeof n=="function"?bk(n):(n instanceof IDBTransaction&&xk(n),Sk(n,kk())?new Proxy(n,Sd):n)}function yr(n){if(n instanceof IDBRequest)return Tk(n);if(td.has(n))return td.get(n);const e=Pk(n);return e!==n&&(td.set(n,e),ah.set(e,n)),e}const nd=n=>ah.get(n);function I_(n,e,{blocked:t,upgrade:s,blocking:o,terminated:l}={}){const c=indexedDB.open(n,e),h=yr(c);return s&&c.addEventListener("upgradeneeded",f=>{s(yr(c.result),f.oldVersion,f.newVersion,yr(c.transaction),f)}),t&&c.addEventListener("blocked",f=>t(f.oldVersion,f.newVersion,f)),h.then(f=>{l&&f.addEventListener("close",()=>l()),o&&f.addEventListener("versionchange",m=>o(m.oldVersion,m.newVersion,m))}).catch(()=>{}),h}const Nk=["get","getKey","getAll","getAllKeys","count"],Ak=["put","add","delete","clear"],rd=new Map;function Ig(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(rd.get(e))return rd.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,o=Ak.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(o||Nk.includes(t)))return;const l=async function(c,...h){const f=this.transaction(c,o?"readwrite":"readonly");let m=f.store;return s&&(m=m.index(h.shift())),(await Promise.all([m[t](...h),o&&f.done]))[0]};return rd.set(e,l),l}Rk(n=>({...n,get:(e,t,s)=>Ig(e,t)||n.get(e,t,s),has:(e,t)=>!!Ig(e,t)||n.has(e,t)}));/**
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
 */class Dk{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Ok(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function Ok(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const kd="@firebase/app",Tg="0.14.6";/**
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
 */const jn=new Fl("@firebase/app"),Lk="@firebase/app-compat",Mk="@firebase/analytics-compat",Fk="@firebase/analytics",Uk="@firebase/app-check-compat",jk="@firebase/app-check",zk="@firebase/auth",Wk="@firebase/auth-compat",$k="@firebase/database",Bk="@firebase/data-connect",Vk="@firebase/database-compat",Hk="@firebase/functions",Gk="@firebase/functions-compat",qk="@firebase/installations",Kk="@firebase/installations-compat",Yk="@firebase/messaging",Qk="@firebase/messaging-compat",Jk="@firebase/performance",Xk="@firebase/performance-compat",Zk="@firebase/remote-config",eI="@firebase/remote-config-compat",tI="@firebase/storage",nI="@firebase/storage-compat",rI="@firebase/firestore",iI="@firebase/ai",sI="@firebase/firestore-compat",oI="firebase",aI="12.6.0";/**
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
 */const Id="[DEFAULT]",lI={[kd]:"fire-core",[Lk]:"fire-core-compat",[Fk]:"fire-analytics",[Mk]:"fire-analytics-compat",[jk]:"fire-app-check",[Uk]:"fire-app-check-compat",[zk]:"fire-auth",[Wk]:"fire-auth-compat",[$k]:"fire-rtdb",[Bk]:"fire-data-connect",[Vk]:"fire-rtdb-compat",[Hk]:"fire-fn",[Gk]:"fire-fn-compat",[qk]:"fire-iid",[Kk]:"fire-iid-compat",[Yk]:"fire-fcm",[Qk]:"fire-fcm-compat",[Jk]:"fire-perf",[Xk]:"fire-perf-compat",[Zk]:"fire-rc",[eI]:"fire-rc-compat",[tI]:"fire-gcs",[nI]:"fire-gcs-compat",[rI]:"fire-fst",[sI]:"fire-fst-compat",[iI]:"fire-vertex","fire-js":"fire-js",[oI]:"fire-js-all"};/**
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
 */const ul=new Map,uI=new Map,Td=new Map;function xg(n,e){try{n.container.addComponent(e)}catch(t){jn.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function vn(n){const e=n.name;if(Td.has(e))return jn.debug(`There were multiple attempts to register component ${e}.`),!1;Td.set(e,n);for(const t of ul.values())xg(t,n);for(const t of uI.values())xg(t,n);return!0}function ei(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Vt(n){return n==null?!1:n.settings!==void 0}/**
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
 */const cI={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},_r=new Zr("app","Firebase",cI);/**
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
 */class dI{constructor(e,t,s){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new an("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw _r.create("app-deleted",{appName:this._name})}}/**
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
 */const Zi=aI;function T_(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const s={name:Id,automaticDataCollectionEnabled:!0,...e},o=s.name;if(typeof o!="string"||!o)throw _r.create("bad-app-name",{appName:String(o)});if(t||(t=p_()),!t)throw _r.create("no-options");const l=ul.get(o);if(l){if(wr(t,l.options)&&wr(s,l.config))return l;throw _r.create("duplicate-app",{appName:o})}const c=new _k(o);for(const f of Td.values())c.addComponent(f);const h=new dI(t,s,c);return ul.set(o,h),h}function lh(n=Id){const e=ul.get(n);if(!e&&n===Id&&p_())return T_();if(!e)throw _r.create("no-app",{appName:n});return e}function Gt(n,e,t){let s=lI[n]??n;t&&(s+=`-${t}`);const o=s.match(/\s|\//),l=e.match(/\s|\//);if(o||l){const c=[`Unable to register library "${s}" with version "${e}":`];o&&c.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&l&&c.push("and"),l&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),jn.warn(c.join(" "));return}vn(new an(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const hI="firebase-heartbeat-database",fI=1,po="firebase-heartbeat-store";let id=null;function x_(){return id||(id=I_(hI,fI,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(po)}catch(t){console.warn(t)}}}}).catch(n=>{throw _r.create("idb-open",{originalErrorMessage:n.message})})),id}async function pI(n){try{const t=(await x_()).transaction(po),s=await t.objectStore(po).get(R_(n));return await t.done,s}catch(e){if(e instanceof wn)jn.warn(e.message);else{const t=_r.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});jn.warn(t.message)}}}async function Rg(n,e){try{const s=(await x_()).transaction(po,"readwrite");await s.objectStore(po).put(e,R_(n)),await s.done}catch(t){if(t instanceof wn)jn.warn(t.message);else{const s=_r.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});jn.warn(s.message)}}}function R_(n){return`${n.name}!${n.options.appId}`}/**
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
 */const mI=1024,gI=30;class yI{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new vI(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,t;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),l=bg();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===l||this._heartbeatsCache.heartbeats.some(c=>c.date===l))return;if(this._heartbeatsCache.heartbeats.push({date:l,agent:o}),this._heartbeatsCache.heartbeats.length>gI){const c=wI(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(c,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){jn.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=bg(),{heartbeatsToSend:s,unsentEntries:o}=_I(this._heartbeatsCache.heartbeats),l=ol(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=t,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),l}catch(t){return jn.warn(t),""}}}function bg(){return new Date().toISOString().substring(0,10)}function _I(n,e=mI){const t=[];let s=n.slice();for(const o of n){const l=t.find(c=>c.agent===o.agent);if(l){if(l.dates.push(o.date),Pg(t)>e){l.dates.pop();break}}else if(t.push({agent:o.agent,dates:[o.date]}),Pg(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class vI{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return w_()?E_().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await pI(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return Rg(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return Rg(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Pg(n){return ol(JSON.stringify({version:2,heartbeats:n})).length}function wI(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let s=1;s<n.length;s++)n[s].date<t&&(t=n[s].date,e=s);return e}/**
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
 */function EI(n){vn(new an("platform-logger",e=>new Dk(e),"PRIVATE")),vn(new an("heartbeat",e=>new yI(e),"PRIVATE")),Gt(kd,Tg,n),Gt(kd,Tg,"esm2020"),Gt("fire-js","")}EI("");var CI="firebase",SI="12.6.0";/**
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
 */Gt(CI,SI,"app");const b_="@firebase/installations",uh="0.6.19";/**
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
 */const P_=1e4,N_=`w:${uh}`,A_="FIS_v2",kI="https://firebaseinstallations.googleapis.com/v1",II=3600*1e3,TI="installations",xI="Installations";/**
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
 */const RI={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Hr=new Zr(TI,xI,RI);function D_(n){return n instanceof wn&&n.code.includes("request-failed")}/**
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
 */function O_({projectId:n}){return`${kI}/projects/${n}/installations`}function L_(n){return{token:n.token,requestStatus:2,expiresIn:PI(n.expiresIn),creationTime:Date.now()}}async function M_(n,e){const s=(await e.json()).error;return Hr.create("request-failed",{requestName:n,serverCode:s.code,serverMessage:s.message,serverStatus:s.status})}function F_({apiKey:n}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n})}function bI(n,{refreshToken:e}){const t=F_(n);return t.append("Authorization",NI(e)),t}async function U_(n){const e=await n();return e.status>=500&&e.status<600?n():e}function PI(n){return Number(n.replace("s","000"))}function NI(n){return`${A_} ${n}`}/**
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
 */async function AI({appConfig:n,heartbeatServiceProvider:e},{fid:t}){const s=O_(n),o=F_(n),l=e.getImmediate({optional:!0});if(l){const m=await l.getHeartbeatsHeader();m&&o.append("x-firebase-client",m)}const c={fid:t,authVersion:A_,appId:n.appId,sdkVersion:N_},h={method:"POST",headers:o,body:JSON.stringify(c)},f=await U_(()=>fetch(s,h));if(f.ok){const m=await f.json();return{fid:m.fid||t,registrationStatus:2,refreshToken:m.refreshToken,authToken:L_(m.authToken)}}else throw await M_("Create Installation",f)}/**
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
 */function j_(n){return new Promise(e=>{setTimeout(e,n)})}/**
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
 */function DI(n){return btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const OI=/^[cdef][\w-]{21}$/,xd="";function LI(){try{const n=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(n),n[0]=112+n[0]%16;const t=MI(n);return OI.test(t)?t:xd}catch{return xd}}function MI(n){return DI(n).substr(0,22)}/**
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
 */function Ul(n){return`${n.appName}!${n.appId}`}/**
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
 */const z_=new Map;function W_(n,e){const t=Ul(n);$_(t,e),FI(t,e)}function $_(n,e){const t=z_.get(n);if(t)for(const s of t)s(e)}function FI(n,e){const t=UI();t&&t.postMessage({key:n,fid:e}),jI()}let Br=null;function UI(){return!Br&&"BroadcastChannel"in self&&(Br=new BroadcastChannel("[Firebase] FID Change"),Br.onmessage=n=>{$_(n.data.key,n.data.fid)}),Br}function jI(){z_.size===0&&Br&&(Br.close(),Br=null)}/**
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
 */const zI="firebase-installations-database",WI=1,Gr="firebase-installations-store";let sd=null;function ch(){return sd||(sd=I_(zI,WI,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(Gr)}}})),sd}async function cl(n,e){const t=Ul(n),o=(await ch()).transaction(Gr,"readwrite"),l=o.objectStore(Gr),c=await l.get(t);return await l.put(e,t),await o.done,(!c||c.fid!==e.fid)&&W_(n,e.fid),e}async function B_(n){const e=Ul(n),s=(await ch()).transaction(Gr,"readwrite");await s.objectStore(Gr).delete(e),await s.done}async function jl(n,e){const t=Ul(n),o=(await ch()).transaction(Gr,"readwrite"),l=o.objectStore(Gr),c=await l.get(t),h=e(c);return h===void 0?await l.delete(t):await l.put(h,t),await o.done,h&&(!c||c.fid!==h.fid)&&W_(n,h.fid),h}/**
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
 */async function dh(n){let e;const t=await jl(n.appConfig,s=>{const o=$I(s),l=BI(n,o);return e=l.registrationPromise,l.installationEntry});return t.fid===xd?{installationEntry:await e}:{installationEntry:t,registrationPromise:e}}function $I(n){const e=n||{fid:LI(),registrationStatus:0};return V_(e)}function BI(n,e){if(e.registrationStatus===0){if(!navigator.onLine){const o=Promise.reject(Hr.create("app-offline"));return{installationEntry:e,registrationPromise:o}}const t={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},s=VI(n,t);return{installationEntry:t,registrationPromise:s}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:HI(n)}:{installationEntry:e}}async function VI(n,e){try{const t=await AI(n,e);return cl(n.appConfig,t)}catch(t){throw D_(t)&&t.customData.serverCode===409?await B_(n.appConfig):await cl(n.appConfig,{fid:e.fid,registrationStatus:0}),t}}async function HI(n){let e=await Ng(n.appConfig);for(;e.registrationStatus===1;)await j_(100),e=await Ng(n.appConfig);if(e.registrationStatus===0){const{installationEntry:t,registrationPromise:s}=await dh(n);return s||t}return e}function Ng(n){return jl(n,e=>{if(!e)throw Hr.create("installation-not-found");return V_(e)})}function V_(n){return GI(n)?{fid:n.fid,registrationStatus:0}:n}function GI(n){return n.registrationStatus===1&&n.registrationTime+P_<Date.now()}/**
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
 */async function qI({appConfig:n,heartbeatServiceProvider:e},t){const s=KI(n,t),o=bI(n,t),l=e.getImmediate({optional:!0});if(l){const m=await l.getHeartbeatsHeader();m&&o.append("x-firebase-client",m)}const c={installation:{sdkVersion:N_,appId:n.appId}},h={method:"POST",headers:o,body:JSON.stringify(c)},f=await U_(()=>fetch(s,h));if(f.ok){const m=await f.json();return L_(m)}else throw await M_("Generate Auth Token",f)}function KI(n,{fid:e}){return`${O_(n)}/${e}/authTokens:generate`}/**
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
 */async function hh(n,e=!1){let t;const s=await jl(n.appConfig,l=>{if(!H_(l))throw Hr.create("not-registered");const c=l.authToken;if(!e&&JI(c))return l;if(c.requestStatus===1)return t=YI(n,e),l;{if(!navigator.onLine)throw Hr.create("app-offline");const h=ZI(l);return t=QI(n,h),h}});return t?await t:s.authToken}async function YI(n,e){let t=await Ag(n.appConfig);for(;t.authToken.requestStatus===1;)await j_(100),t=await Ag(n.appConfig);const s=t.authToken;return s.requestStatus===0?hh(n,e):s}function Ag(n){return jl(n,e=>{if(!H_(e))throw Hr.create("not-registered");const t=e.authToken;return e1(t)?{...e,authToken:{requestStatus:0}}:e})}async function QI(n,e){try{const t=await qI(n,e),s={...e,authToken:t};return await cl(n.appConfig,s),t}catch(t){if(D_(t)&&(t.customData.serverCode===401||t.customData.serverCode===404))await B_(n.appConfig);else{const s={...e,authToken:{requestStatus:0}};await cl(n.appConfig,s)}throw t}}function H_(n){return n!==void 0&&n.registrationStatus===2}function JI(n){return n.requestStatus===2&&!XI(n)}function XI(n){const e=Date.now();return e<n.creationTime||n.creationTime+n.expiresIn<e+II}function ZI(n){const e={requestStatus:1,requestTime:Date.now()};return{...n,authToken:e}}function e1(n){return n.requestStatus===1&&n.requestTime+P_<Date.now()}/**
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
 */async function t1(n){const e=n,{installationEntry:t,registrationPromise:s}=await dh(e);return s?s.catch(console.error):hh(e).catch(console.error),t.fid}/**
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
 */async function n1(n,e=!1){const t=n;return await r1(t),(await hh(t,e)).token}async function r1(n){const{registrationPromise:e}=await dh(n);e&&await e}/**
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
 */function i1(n){if(!n||!n.options)throw od("App Configuration");if(!n.name)throw od("App Name");const e=["projectId","apiKey","appId"];for(const t of e)if(!n.options[t])throw od(t);return{appName:n.name,projectId:n.options.projectId,apiKey:n.options.apiKey,appId:n.options.appId}}function od(n){return Hr.create("missing-app-config-values",{valueName:n})}/**
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
 */const G_="installations",s1="installations-internal",o1=n=>{const e=n.getProvider("app").getImmediate(),t=i1(e),s=ei(e,"heartbeat");return{app:e,appConfig:t,heartbeatServiceProvider:s,_delete:()=>Promise.resolve()}},a1=n=>{const e=n.getProvider("app").getImmediate(),t=ei(e,G_).getImmediate();return{getId:()=>t1(t),getToken:o=>n1(t,o)}};function l1(){vn(new an(G_,o1,"PUBLIC")),vn(new an(s1,a1,"PRIVATE"))}l1();Gt(b_,uh);Gt(b_,uh,"esm2020");/**
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
 */const dl="analytics",u1="firebase_id",c1="origin",d1=60*1e3,h1="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",fh="https://www.googletagmanager.com/gtag/js";/**
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
 */const wt=new Fl("@firebase/analytics");/**
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
 */const f1={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Ft=new Zr("analytics","Analytics",f1);/**
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
 */function p1(n){if(!n.startsWith(fh)){const e=Ft.create("invalid-gtag-resource",{gtagURL:n});return wt.warn(e.message),""}return n}function q_(n){return Promise.all(n.map(e=>e.catch(t=>t)))}function m1(n,e){let t;return window.trustedTypes&&(t=window.trustedTypes.createPolicy(n,e)),t}function g1(n,e){const t=m1("firebase-js-sdk-policy",{createScriptURL:p1}),s=document.createElement("script"),o=`${fh}?l=${n}&id=${e}`;s.src=t?t==null?void 0:t.createScriptURL(o):o,s.async=!0,document.head.appendChild(s)}function y1(n){let e=[];return Array.isArray(window[n])?e=window[n]:window[n]=e,e}async function _1(n,e,t,s,o,l){const c=s[o];try{if(c)await e[c];else{const f=(await q_(t)).find(m=>m.measurementId===o);f&&await e[f.appId]}}catch(h){wt.error(h)}n("config",o,l)}async function v1(n,e,t,s,o){try{let l=[];if(o&&o.send_to){let c=o.send_to;Array.isArray(c)||(c=[c]);const h=await q_(t);for(const f of c){const m=h.find(_=>_.measurementId===f),y=m&&e[m.appId];if(y)l.push(y);else{l=[];break}}}l.length===0&&(l=Object.values(e)),await Promise.all(l),n("event",s,o||{})}catch(l){wt.error(l)}}function w1(n,e,t,s){async function o(l,...c){try{if(l==="event"){const[h,f]=c;await v1(n,e,t,h,f)}else if(l==="config"){const[h,f]=c;await _1(n,e,t,s,h,f)}else if(l==="consent"){const[h,f]=c;n("consent",h,f)}else if(l==="get"){const[h,f,m]=c;n("get",h,f,m)}else if(l==="set"){const[h]=c;n("set",h)}else n(l,...c)}catch(h){wt.error(h)}}return o}function E1(n,e,t,s,o){let l=function(...c){window[s].push(arguments)};return window[o]&&typeof window[o]=="function"&&(l=window[o]),window[o]=w1(l,n,e,t),{gtagCore:l,wrappedGtag:window[o]}}function C1(n){const e=window.document.getElementsByTagName("script");for(const t of Object.values(e))if(t.src&&t.src.includes(fh)&&t.src.includes(n))return t;return null}/**
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
 */const S1=30,k1=1e3;class I1{constructor(e={},t=k1){this.throttleMetadata=e,this.intervalMillis=t}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const K_=new I1;function T1(n){return new Headers({Accept:"application/json","x-goog-api-key":n})}async function x1(n){var c;const{appId:e,apiKey:t}=n,s={method:"GET",headers:T1(t)},o=h1.replace("{app-id}",e),l=await fetch(o,s);if(l.status!==200&&l.status!==304){let h="";try{const f=await l.json();(c=f.error)!=null&&c.message&&(h=f.error.message)}catch{}throw Ft.create("config-fetch-failed",{httpStatus:l.status,responseMessage:h})}return l.json()}async function R1(n,e=K_,t){const{appId:s,apiKey:o,measurementId:l}=n.options;if(!s)throw Ft.create("no-app-id");if(!o){if(l)return{measurementId:l,appId:s};throw Ft.create("no-api-key")}const c=e.getThrottleMetadata(s)||{backoffCount:0,throttleEndTimeMillis:Date.now()},h=new N1;return setTimeout(async()=>{h.abort()},d1),Y_({appId:s,apiKey:o,measurementId:l},c,h,e)}async function Y_(n,{throttleEndTimeMillis:e,backoffCount:t},s,o=K_){var h;const{appId:l,measurementId:c}=n;try{await b1(s,e)}catch(f){if(c)return wt.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${c} provided in the "measurementId" field in the local Firebase config. [${f==null?void 0:f.message}]`),{appId:l,measurementId:c};throw f}try{const f=await x1(n);return o.deleteThrottleMetadata(l),f}catch(f){const m=f;if(!P1(m)){if(o.deleteThrottleMetadata(l),c)return wt.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${c} provided in the "measurementId" field in the local Firebase config. [${m==null?void 0:m.message}]`),{appId:l,measurementId:c};throw f}const y=Number((h=m==null?void 0:m.customData)==null?void 0:h.httpStatus)===503?Cg(t,o.intervalMillis,S1):Cg(t,o.intervalMillis),_={throttleEndTimeMillis:Date.now()+y,backoffCount:t+1};return o.setThrottleMetadata(l,_),wt.debug(`Calling attemptFetch again in ${y} millis`),Y_(n,_,s,o)}}function b1(n,e){return new Promise((t,s)=>{const o=Math.max(e-Date.now(),0),l=setTimeout(t,o);n.addEventListener(()=>{clearTimeout(l),s(Ft.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function P1(n){if(!(n instanceof wn)||!n.customData)return!1;const e=Number(n.customData.httpStatus);return e===429||e===500||e===503||e===504}class N1{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function A1(n,e,t,s,o){if(o&&o.global){n("event",t,s);return}else{const l=await e,c={...s,send_to:l};n("event",t,c)}}async function D1(n,e,t,s){if(s&&s.global){const o={};for(const l of Object.keys(t))o[`user_properties.${l}`]=t[l];return n("set",o),Promise.resolve()}else{const o=await e;n("config",o,{update:!0,user_properties:t})}}/**
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
 */async function O1(){if(w_())try{await E_()}catch(n){return wt.warn(Ft.create("indexeddb-unavailable",{errorInfo:n==null?void 0:n.toString()}).message),!1}else return wt.warn(Ft.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function L1(n,e,t,s,o,l,c){const h=R1(n);h.then(v=>{t[v.measurementId]=v.appId,n.options.measurementId&&v.measurementId!==n.options.measurementId&&wt.warn(`The measurement ID in the local Firebase config (${n.options.measurementId}) does not match the measurement ID fetched from the server (${v.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(v=>wt.error(v)),e.push(h);const f=O1().then(v=>{if(v)return s.getId()}),[m,y]=await Promise.all([h,f]);C1(l)||g1(l,m.measurementId),o("js",new Date);const _=(c==null?void 0:c.config)??{};return _[c1]="firebase",_.update=!0,y!=null&&(_[u1]=y),o("config",m.measurementId,_),m.measurementId}/**
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
 */class M1{constructor(e){this.app=e}_delete(){return delete Oi[this.app.options.appId],Promise.resolve()}}let Oi={},Dg=[];const Og={};let ad="dataLayer",F1="gtag",Lg,ph,Mg=!1;function U1(){const n=[];if(__()&&n.push("This is a browser extension environment."),ek()||n.push("Cookies are not available."),n.length>0){const e=n.map((s,o)=>`(${o+1}) ${s}`).join(" "),t=Ft.create("invalid-analytics-context",{errorInfo:e});wt.warn(t.message)}}function j1(n,e,t){U1();const s=n.options.appId;if(!s)throw Ft.create("no-app-id");if(!n.options.apiKey)if(n.options.measurementId)wt.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${n.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Ft.create("no-api-key");if(Oi[s]!=null)throw Ft.create("already-exists",{id:s});if(!Mg){y1(ad);const{wrappedGtag:l,gtagCore:c}=E1(Oi,Dg,Og,ad,F1);ph=l,Lg=c,Mg=!0}return Oi[s]=L1(n,Dg,Og,e,Lg,ad,t),new M1(n)}function z1(n=lh()){n=ot(n);const e=ei(n,dl);return e.isInitialized()?e.getImmediate():W1(n)}function W1(n,e={}){const t=ei(n,dl);if(t.isInitialized()){const o=t.getImmediate();if(wr(e,t.getOptions()))return o;throw Ft.create("already-initialized")}return t.initialize({options:e})}function $1(n,e,t){n=ot(n),D1(ph,Oi[n.app.options.appId],e,t).catch(s=>wt.error(s))}function B1(n,e,t,s){n=ot(n),A1(ph,Oi[n.app.options.appId],e,t,s).catch(o=>wt.error(o))}const Fg="@firebase/analytics",Ug="0.10.19";function V1(){vn(new an(dl,(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),o=e.getProvider("installations-internal").getImmediate();return j1(s,o,t)},"PUBLIC")),vn(new an("analytics-internal",n,"PRIVATE")),Gt(Fg,Ug),Gt(Fg,Ug,"esm2020");function n(e){try{const t=e.getProvider(dl).getImmediate();return{logEvent:(s,o,l)=>B1(t,s,o,l),setUserProperties:(s,o)=>$1(t,s,o)}}catch(t){throw Ft.create("interop-component-reg-failed",{reason:t})}}}V1();var jg={};const zg="@firebase/database",Wg="1.1.0";/**
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
 */let Q_="";function H1(n){Q_=n}/**
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
 */class G1{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),st(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:fo(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class q1{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return En(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const J_=function(n){try{if(typeof window<"u"&&typeof window[n]<"u"){const e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new G1(e)}}catch{}return new q1},Vr=J_("localStorage"),K1=J_("sessionStorage");/**
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
 */const Li=new Fl("@firebase/database"),Y1=(function(){let n=1;return function(){return n++}})(),X_=function(n){const e=ck(n),t=new ok;t.update(e);const s=t.digest();return ih.encodeByteArray(s)},xo=function(...n){let e="";for(let t=0;t<n.length;t++){const s=n[t];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=xo.apply(null,s):typeof s=="object"?e+=st(s):e+=s,e+=" "}return e};let so=null,$g=!0;const Q1=function(n,e){W(!0,"Can't turn on custom loggers persistently."),Li.logLevel=Te.VERBOSE,so=Li.log.bind(Li)},dt=function(...n){if($g===!0&&($g=!1,so===null&&K1.get("logging_enabled")===!0&&Q1()),so){const e=xo.apply(null,n);so(e)}},Ro=function(n){return function(...e){dt(n,...e)}},Rd=function(...n){const e="FIREBASE INTERNAL ERROR: "+xo(...n);Li.error(e)},zn=function(...n){const e=`FIREBASE FATAL ERROR: ${xo(...n)}`;throw Li.error(e),new Error(e)},Et=function(...n){const e="FIREBASE WARNING: "+xo(...n);Li.warn(e)},J1=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Et("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},mh=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},X1=function(n){if(document.readyState==="complete")n();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},$i="[MIN_NAME]",qr="[MAX_NAME]",ti=function(n,e){if(n===e)return 0;if(n===$i||e===qr)return-1;if(e===$i||n===qr)return 1;{const t=Bg(n),s=Bg(e);return t!==null?s!==null?t-s===0?n.length-e.length:t-s:-1:s!==null?1:n<e?-1:1}},Z1=function(n,e){return n===e?0:n<e?-1:1},Ks=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+st(e))},gh=function(n){if(typeof n!="object"||n===null)return st(n);const e=[];for(const s in n)e.push(s);e.sort();let t="{";for(let s=0;s<e.length;s++)s!==0&&(t+=","),t+=st(e[s]),t+=":",t+=gh(n[e[s]]);return t+="}",t},Z_=function(n,e){const t=n.length;if(t<=e)return[n];const s=[];for(let o=0;o<t;o+=e)o+e>t?s.push(n.substring(o,t)):s.push(n.substring(o,o+e));return s};function ht(n,e){for(const t in n)n.hasOwnProperty(t)&&e(t,n[t])}const ev=function(n){W(!mh(n),"Invalid JSON number");const e=11,t=52,s=(1<<e-1)-1;let o,l,c,h,f;n===0?(l=0,c=0,o=1/n===-1/0?1:0):(o=n<0,n=Math.abs(n),n>=Math.pow(2,1-s)?(h=Math.min(Math.floor(Math.log(n)/Math.LN2),s),l=h+s,c=Math.round(n*Math.pow(2,t-h)-Math.pow(2,t))):(l=0,c=Math.round(n/Math.pow(2,1-s-t))));const m=[];for(f=t;f;f-=1)m.push(c%2?1:0),c=Math.floor(c/2);for(f=e;f;f-=1)m.push(l%2?1:0),l=Math.floor(l/2);m.push(o?1:0),m.reverse();const y=m.join("");let _="";for(f=0;f<64;f+=8){let v=parseInt(y.substr(f,8),2).toString(16);v.length===1&&(v="0"+v),_=_+v}return _.toLowerCase()},eT=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},tT=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function nT(n,e){let t="Unknown Error";n==="too_big"?t="The data requested exceeds the maximum size that can be accessed with a single request.":n==="permission_denied"?t="Client doesn't have permission to access the desired data.":n==="unavailable"&&(t="The service is unavailable");const s=new Error(n+" at "+e._path.toString()+": "+t);return s.code=n.toUpperCase(),s}const rT=new RegExp("^-?(0*)\\d{1,10}$"),iT=-2147483648,sT=2147483647,Bg=function(n){if(rT.test(n)){const e=Number(n);if(e>=iT&&e<=sT)return e}return null},es=function(n){try{n()}catch(e){setTimeout(()=>{const t=e.stack||"";throw Et("Exception was thrown by user callback.",t),e},Math.floor(0))}},oT=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},oo=function(n,e){const t=setTimeout(n,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
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
 */class aT{constructor(e,t){this.appCheckProvider=t,this.appName=e.name,Vt(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=t==null?void 0:t.getImmediate({optional:!0}),this.appCheck||t==null||t.get().then(s=>this.appCheck=s)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((t,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){var t;(t=this.appCheckProvider)==null||t.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){Et(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class lT{constructor(e,t,s){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(o=>this.auth_=o)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(dt("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Et(e)}}class el{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}el.OWNER="owner";/**
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
 */const yh="5",tv="v",nv="s",rv="r",iv="f",sv=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,ov="ls",av="p",bd="ac",lv="websocket",uv="long_polling";/**
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
 */class cv{constructor(e,t,s,o,l=!1,c="",h=!1,f=!1,m=null){this.secure=t,this.namespace=s,this.webSocketOnly=o,this.nodeAdmin=l,this.persistenceKey=c,this.includeNamespaceInQueryParams=h,this.isUsingEmulator=f,this.emulatorOptions=m,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Vr.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Vr.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function uT(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function dv(n,e,t){W(typeof e=="string","typeof type must == string"),W(typeof t=="object","typeof params must == object");let s;if(e===lv)s=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===uv)s=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);uT(n)&&(t.ns=n.namespace);const o=[];return ht(t,(l,c)=>{o.push(l+"="+c)}),s+o.join("&")}/**
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
 */class cT{constructor(){this.counters_={}}incrementCounter(e,t=1){En(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return WS(this.counters_)}}/**
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
 */const ld={},ud={};function _h(n){const e=n.toString();return ld[e]||(ld[e]=new cT),ld[e]}function dT(n,e){const t=n.toString();return ud[t]||(ud[t]=e()),ud[t]}/**
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
 */class hT{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let o=0;o<s.length;++o)s[o]&&es(()=>{this.onMessage_(s[o])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const Vg="start",fT="close",pT="pLPCommand",mT="pRTLPCB",hv="id",fv="pw",pv="ser",gT="cb",yT="seg",_T="ts",vT="d",wT="dframe",mv=1870,gv=30,ET=mv-gv,CT=25e3,ST=3e4;class Ai{constructor(e,t,s,o,l,c,h){this.connId=e,this.repoInfo=t,this.applicationId=s,this.appCheckToken=o,this.authToken=l,this.transportSessionId=c,this.lastSessionId=h,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Ro(e),this.stats_=_h(t),this.urlFn=f=>(this.appCheckToken&&(f[bd]=this.appCheckToken),dv(t,uv,f))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new hT(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(ST)),X1(()=>{if(this.isClosed_)return;this.scriptTagHolder=new vh((...l)=>{const[c,h,f,m,y]=l;if(this.incrementIncomingBytes_(l),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,c===Vg)this.id=h,this.password=f;else if(c===fT)h?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(h,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+c)},(...l)=>{const[c,h]=l;this.incrementIncomingBytes_(l),this.myPacketOrderer.handleResponse(c,h)},()=>{this.onClosed_()},this.urlFn);const s={};s[Vg]="t",s[pv]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[gT]=this.scriptTagHolder.uniqueCallbackIdentifier),s[tv]=yh,this.transportSessionId&&(s[nv]=this.transportSessionId),this.lastSessionId&&(s[ov]=this.lastSessionId),this.applicationId&&(s[av]=this.applicationId),this.appCheckToken&&(s[bd]=this.appCheckToken),typeof location<"u"&&location.hostname&&sv.test(location.hostname)&&(s[rv]=iv);const o=this.urlFn(s);this.log_("Connecting via long-poll to "+o),this.scriptTagHolder.addTag(o,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Ai.forceAllow_=!0}static forceDisallow(){Ai.forceDisallow_=!0}static isAvailable(){return Ai.forceAllow_?!0:!Ai.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!eT()&&!tT()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=st(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=d_(t),o=Z_(s,ET);for(let l=0;l<o.length;l++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,o.length,o[l]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const s={};s[wT]="t",s[hv]=e,s[fv]=t,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=st(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class vh{constructor(e,t,s,o){this.onDisconnect=s,this.urlFn=o,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=Y1(),window[pT+this.uniqueCallbackIdentifier]=e,window[mT+this.uniqueCallbackIdentifier]=t,this.myIFrame=vh.createIFrame_();let l="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(l='<script>document.domain="'+document.domain+'";<\/script>');const c="<html><body>"+l+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(c),this.myIFrame.doc.close()}catch(h){dt("frame writing exception"),h.stack&&dt(h.stack),dt(h)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||dt("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[hv]=this.myID,e[fv]=this.myPW,e[pv]=this.currentSerial;let t=this.urlFn(e),s="",o=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+gv+s.length<=mv;){const c=this.pendingSegs.shift();s=s+"&"+yT+o+"="+c.seg+"&"+_T+o+"="+c.ts+"&"+vT+o+"="+c.d,o++}return t=t+s,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,s){this.pendingSegs.push({seg:e,ts:t,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const s=()=>{this.outstandingRequests.delete(t),this.newRequest_()},o=setTimeout(s,Math.floor(CT)),l=()=>{clearTimeout(o),s()};this.addTag(e,l)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const o=s.readyState;(!o||o==="loaded"||o==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),t())},s.onerror=()=>{dt("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
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
 */const kT=16384,IT=45e3;let hl=null;typeof MozWebSocket<"u"?hl=MozWebSocket:typeof WebSocket<"u"&&(hl=WebSocket);class nn{constructor(e,t,s,o,l,c,h){this.connId=e,this.applicationId=s,this.appCheckToken=o,this.authToken=l,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Ro(this.connId),this.stats_=_h(t),this.connURL=nn.connectionURL_(t,c,h,o,s),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,s,o,l){const c={};return c[tv]=yh,typeof location<"u"&&location.hostname&&sv.test(location.hostname)&&(c[rv]=iv),t&&(c[nv]=t),s&&(c[ov]=s),o&&(c[bd]=o),l&&(c[av]=l),dv(e,lv,c)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Vr.set("previous_websocket_failure",!0);try{let s;ZS(),this.mySock=new hl(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const o=s.message||s.data;o&&this.log_(o),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const o=s.message||s.data;o&&this.log_(o),this.onClosed_()}}start(){}static forceDisallow(){nn.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(t);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&hl!==null&&!nn.forceDisallow_}static previouslyFailed(){return Vr.isInMemoryStorage||Vr.get("previous_websocket_failure")===!0}markConnectionHealthy(){Vr.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const s=fo(t);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(W(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const s=this.extractFrameCount_(t);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const t=st(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=Z_(t,kT);s.length>1&&this.sendString_(String(s.length));for(let o=0;o<s.length;o++)this.sendString_(s[o])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(IT))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}nn.responsesRequiredToBeHealthy=2;nn.healthyTimeout=3e4;/**
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
 */class mo{static get ALL_TRANSPORTS(){return[Ai,nn]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const t=nn&&nn.isAvailable();let s=t&&!nn.previouslyFailed();if(e.webSocketOnly&&(t||Et("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[nn];else{const o=this.transports_=[];for(const l of mo.ALL_TRANSPORTS)l&&l.isAvailable()&&o.push(l);mo.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}mo.globalTransportInitialized_=!1;/**
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
 */const TT=6e4,xT=5e3,RT=10*1024,bT=100*1024,cd="t",Hg="d",PT="s",Gg="r",NT="e",qg="o",Kg="a",Yg="n",Qg="p",AT="h";class DT{constructor(e,t,s,o,l,c,h,f,m,y){this.id=e,this.repoInfo_=t,this.applicationId_=s,this.appCheckToken_=o,this.authToken_=l,this.onMessage_=c,this.onReady_=h,this.onDisconnect_=f,this.onKill_=m,this.lastSessionId=y,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Ro("c:"+this.id+":"),this.transportManager_=new mo(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,s)},Math.floor(0));const o=e.healthyTimeout||0;o>0&&(this.healthyTimeout_=oo(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>bT?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>RT?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(o)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(cd in e){const t=e[cd];t===Kg?this.upgradeIfSecondaryHealthy_():t===Gg?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===qg&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=Ks("t",e),s=Ks("d",e);if(t==="c")this.onSecondaryControl_(s);else if(t==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Qg,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Kg,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Yg,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=Ks("t",e),s=Ks("d",e);t==="c"?this.onControl_(s):t==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=Ks(cd,e);if(Hg in e){const s=e[Hg];if(t===AT){const o={...s};this.repoInfo_.isUsingEmulator&&(o.h=this.repoInfo_.host),this.onHandshake_(o)}else if(t===Yg){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let o=0;o<this.pendingDataMessages.length;++o)this.onDataMessage_(this.pendingDataMessages[o]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===PT?this.onConnectionShutdown_(s):t===Gg?this.onReset_(s):t===NT?Rd("Server Error: "+s):t===qg?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Rd("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,s=e.v,o=e.h;this.sessionId=e.s,this.repoInfo_.host=o,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),yh!==s&&Et("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,s),oo(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(TT))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):oo(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(xT))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Qg,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Vr.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class yv{put(e,t,s,o){}merge(e,t,s,o){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,s){}onDisconnectMerge(e,t,s){}onDisconnectCancel(e,t){}reportStats(e){}}/**
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
 */class _v{constructor(e){this.allowedEvents_=e,this.listeners_={},W(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let o=0;o<s.length;o++)s[o].callback.apply(s[o].context,t)}}on(e,t,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:s});const o=this.getInitialEvent(e);o&&t.apply(s,o)}off(e,t,s){this.validateEventType_(e);const o=this.listeners_[e]||[];for(let l=0;l<o.length;l++)if(o[l].callback===t&&(!s||s===o[l].context)){o.splice(l,1);return}}validateEventType_(e){W(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
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
 */class fl extends _v{static getInstance(){return new fl}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!oh()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return W(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const Jg=32,Xg=768;class xe{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let s=0;for(let o=0;o<this.pieces_.length;o++)this.pieces_[o].length>0&&(this.pieces_[s]=this.pieces_[o],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function Ce(){return new xe("")}function pe(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function Er(n){return n.pieces_.length-n.pieceNum_}function Ne(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new xe(n.pieces_,e)}function wh(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function OT(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function go(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function vv(n){if(n.pieceNum_>=n.pieces_.length)return null;const e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new xe(e,0)}function We(n,e){const t=[];for(let s=n.pieceNum_;s<n.pieces_.length;s++)t.push(n.pieces_[s]);if(e instanceof xe)for(let s=e.pieceNum_;s<e.pieces_.length;s++)t.push(e.pieces_[s]);else{const s=e.split("/");for(let o=0;o<s.length;o++)s[o].length>0&&t.push(s[o])}return new xe(t,0)}function ye(n){return n.pieceNum_>=n.pieces_.length}function Pt(n,e){const t=pe(n),s=pe(e);if(t===null)return e;if(t===s)return Pt(Ne(n),Ne(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function LT(n,e){const t=go(n,0),s=go(e,0);for(let o=0;o<t.length&&o<s.length;o++){const l=ti(t[o],s[o]);if(l!==0)return l}return t.length===s.length?0:t.length<s.length?-1:1}function Eh(n,e){if(Er(n)!==Er(e))return!1;for(let t=n.pieceNum_,s=e.pieceNum_;t<=n.pieces_.length;t++,s++)if(n.pieces_[t]!==e.pieces_[s])return!1;return!0}function Ht(n,e){let t=n.pieceNum_,s=e.pieceNum_;if(Er(n)>Er(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[s])return!1;++t,++s}return!0}class MT{constructor(e,t){this.errorPrefix_=t,this.parts_=go(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=Ml(this.parts_[s]);wv(this)}}function FT(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=Ml(e),wv(n)}function UT(n){const e=n.parts_.pop();n.byteLength_-=Ml(e),n.parts_.length>0&&(n.byteLength_-=1)}function wv(n){if(n.byteLength_>Xg)throw new Error(n.errorPrefix_+"has a key path longer than "+Xg+" bytes ("+n.byteLength_+").");if(n.parts_.length>Jg)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Jg+") or object contains a cycle "+$r(n))}function $r(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}/**
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
 */class Ch extends _v{static getInstance(){return new Ch}constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}getInitialEvent(e){return W(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const Ys=1e3,jT=300*1e3,Zg=30*1e3,zT=1.3,WT=3e4,$T="server_kill",ey=3;class Mn extends yv{constructor(e,t,s,o,l,c,h,f){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=s,this.onConnectStatus_=o,this.onServerInfoUpdate_=l,this.authTokenProvider_=c,this.appCheckTokenProvider_=h,this.authOverride_=f,this.id=Mn.nextPersistentConnectionId_++,this.log_=Ro("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Ys,this.maxReconnectDelay_=jT,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,f)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Ch.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&fl.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,s){const o=++this.requestNumber_,l={r:o,a:e,b:t};this.log_(st(l)),W(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(l),s&&(this.requestCBHash_[o]=s)}get(e){this.initConnection_();const t=new To,o={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:c=>{const h=c.d;c.s==="ok"?t.resolve(h):t.reject(h)}};this.outstandingGets_.push(o),this.outstandingGetCount_++;const l=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(l),t.promise}listen(e,t,s,o){this.initConnection_();const l=e._queryIdentifier,c=e._path.toString();this.log_("Listen called for "+c+" "+l),this.listens.has(c)||this.listens.set(c,new Map),W(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),W(!this.listens.get(c).has(l),"listen() called twice for same path/queryId.");const h={onComplete:o,hashFn:t,query:e,tag:s};this.listens.get(c).set(l,h),this.connected_&&this.sendListen_(h)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(s)})}sendListen_(e){const t=e.query,s=t._path.toString(),o=t._queryIdentifier;this.log_("Listen on "+s+" for "+o);const l={p:s},c="q";e.tag&&(l.q=t._queryObject,l.t=e.tag),l.h=e.hashFn(),this.sendRequest(c,l,h=>{const f=h.d,m=h.s;Mn.warnOnListenWarnings_(f,t),(this.listens.get(s)&&this.listens.get(s).get(o))===e&&(this.log_("listen response",h),m!=="ok"&&this.removeListen_(s,o),e.onComplete&&e.onComplete(m,f))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&En(e,"w")){const s=Wi(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const o='".indexOn": "'+t._queryParams.getIndex().toString()+'"',l=t._path.toString();Et(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${o} at ${l} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||sk(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Zg)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=ik(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(t,s,o=>{const l=o.s,c=o.d||"error";this.authToken_===e&&(l==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(l,c))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,s=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,s)})}unlisten(e,t){const s=e._path.toString(),o=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+o),W(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,o)&&this.connected_&&this.sendUnlisten_(s,o,e._queryObject,t)}sendUnlisten_(e,t,s,o){this.log_("Unlisten on "+e+" for "+t);const l={p:e},c="n";o&&(l.q=s,l.t=o),this.sendRequest(c,l)}onDisconnectPut(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:s})}onDisconnectMerge(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:s})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,s,o){const l={p:t,d:s};this.log_("onDisconnect "+e,l),this.sendRequest(e,l,c=>{o&&setTimeout(()=>{o(c.s,c.d)},Math.floor(0))})}put(e,t,s,o){this.putInternal("p",e,t,s,o)}merge(e,t,s,o){this.putInternal("m",e,t,s,o)}putInternal(e,t,s,o,l){this.initConnection_();const c={p:t,d:s};l!==void 0&&(c.h=l),this.outstandingPuts_.push({action:e,request:c,onComplete:o}),this.outstandingPutCount_++;const h=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(h):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,o=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,s,l=>{this.log_(t+" response",l),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),o&&o(l.s,l.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,s=>{if(s.s!=="ok"){const l=s.d;this.log_("reportStats","Error sending stats: "+l)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+st(e));const t=e.r,s=this.requestCBHash_[t];s&&(delete this.requestCBHash_[t],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):Rd("Unrecognized action received from server: "+st(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){W(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Ys,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Ys,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>WT&&(this.reconnectDelay_=Ys),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*zT)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),o=this.id+":"+Mn.nextConnectionId_++,l=this.lastSessionId;let c=!1,h=null;const f=function(){h?h.close():(c=!0,s())},m=function(_){W(h,"sendRequest call when we're not connected not allowed."),h.sendRequest(_)};this.realtime_={close:f,sendRequest:m};const y=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[_,v]=await Promise.all([this.authTokenProvider_.getToken(y),this.appCheckTokenProvider_.getToken(y)]);c?dt("getToken() completed but was canceled"):(dt("getToken() completed. Creating connection."),this.authToken_=_&&_.accessToken,this.appCheckToken_=v&&v.token,h=new DT(o,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,s,R=>{Et(R+" ("+this.repoInfo_.toString()+")"),this.interrupt($T)},l))}catch(_){this.log_("Failed to get token: "+_),c||(this.repoInfo_.nodeAdmin&&Et(_),f())}}}interrupt(e){dt("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){dt("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Ed(this.interruptReasons_)&&(this.reconnectDelay_=Ys,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let s;t?s=t.map(l=>gh(l)).join("$"):s="default";const o=this.removeListen_(e,s);o&&o.onComplete&&o.onComplete("permission_denied")}removeListen_(e,t){const s=new xe(e).toString();let o;if(this.listens.has(s)){const l=this.listens.get(s);o=l.get(t),l.delete(t),l.size===0&&this.listens.delete(s)}else o=void 0;return o}onAuthRevoked_(e,t){dt("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=ey&&(this.reconnectDelay_=Zg,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){dt("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=ey&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+Q_.replace(/\./g,"-")]=1,oh()?e["framework.cordova"]=1:v_()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=fl.getInstance().currentlyOnline();return Ed(this.interruptReasons_)&&e}}Mn.nextPersistentConnectionId_=0;Mn.nextConnectionId_=0;/**
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
 */class me{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new me(e,t)}}/**
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
 */class zl{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const s=new me($i,e),o=new me($i,t);return this.compare(s,o)!==0}minPost(){return me.MIN}}/**
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
 */let Ga;class Ev extends zl{static get __EMPTY_NODE(){return Ga}static set __EMPTY_NODE(e){Ga=e}compare(e,t){return ti(e.name,t.name)}isDefinedOn(e){throw Qi("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return me.MIN}maxPost(){return new me(qr,Ga)}makePost(e,t){return W(typeof e=="string","KeyIndex indexValue must always be a string."),new me(e,Ga)}toString(){return".key"}}const Mi=new Ev;/**
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
 */class qa{constructor(e,t,s,o,l=null){this.isReverse_=o,this.resultGenerator_=l,this.nodeStack_=[];let c=1;for(;!e.isEmpty();)if(e=e,c=t?s(e.key,t):1,o&&(c*=-1),c<0)this.isReverse_?e=e.left:e=e.right;else if(c===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class rt{constructor(e,t,s,o,l){this.key=e,this.value=t,this.color=s??rt.RED,this.left=o??Nt.EMPTY_NODE,this.right=l??Nt.EMPTY_NODE}copy(e,t,s,o,l){return new rt(e??this.key,t??this.value,s??this.color,o??this.left,l??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let o=this;const l=s(e,o.key);return l<0?o=o.copy(null,null,null,o.left.insert(e,t,s),null):l===0?o=o.copy(null,t,null,null,null):o=o.copy(null,null,null,null,o.right.insert(e,t,s)),o.fixUp_()}removeMin_(){if(this.left.isEmpty())return Nt.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let s,o;if(s=this,t(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),t(e,s.key)===0){if(s.right.isEmpty())return Nt.EMPTY_NODE;o=s.right.min_(),s=s.copy(o.key,o.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,rt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,rt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}rt.RED=!0;rt.BLACK=!1;class BT{copy(e,t,s,o,l){return this}insert(e,t,s){return new rt(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Nt{constructor(e,t=Nt.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new Nt(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,rt.BLACK,null,null))}remove(e){return new Nt(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,rt.BLACK,null,null))}get(e){let t,s=this.root_;for(;!s.isEmpty();){if(t=this.comparator_(e,s.key),t===0)return s.value;t<0?s=s.left:t>0&&(s=s.right)}return null}getPredecessorKey(e){let t,s=this.root_,o=null;for(;!s.isEmpty();)if(t=this.comparator_(e,s.key),t===0){if(s.left.isEmpty())return o?o.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else t<0?s=s.left:t>0&&(o=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new qa(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new qa(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new qa(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new qa(this.root_,null,this.comparator_,!0,e)}}Nt.EMPTY_NODE=new BT;/**
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
 */function VT(n,e){return ti(n.name,e.name)}function Sh(n,e){return ti(n,e)}/**
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
 */let Pd;function HT(n){Pd=n}const Cv=function(n){return typeof n=="number"?"number:"+ev(n):"string:"+n},Sv=function(n){if(n.isLeafNode()){const e=n.val();W(typeof e=="string"||typeof e=="number"||typeof e=="object"&&En(e,".sv"),"Priority must be a string or number.")}else W(n===Pd||n.isEmpty(),"priority of unexpected type.");W(n===Pd||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let ty;class nt{static set __childrenNodeConstructor(e){ty=e}static get __childrenNodeConstructor(){return ty}constructor(e,t=nt.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,W(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Sv(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new nt(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:nt.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return ye(e)?this:pe(e)===".priority"?this.priorityNode_:nt.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:nt.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const s=pe(e);return s===null?t:t.isEmpty()&&s!==".priority"?this:(W(s!==".priority"||Er(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,nt.__childrenNodeConstructor.EMPTY_NODE.updateChild(Ne(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Cv(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=ev(this.value_):e+=this.value_,this.lazyHash_=X_(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===nt.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof nt.__childrenNodeConstructor?-1:(W(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,s=typeof this.value_,o=nt.VALUE_TYPE_ORDER.indexOf(t),l=nt.VALUE_TYPE_ORDER.indexOf(s);return W(o>=0,"Unknown leaf type: "+t),W(l>=0,"Unknown leaf type: "+s),o===l?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:l-o}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}nt.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let kv,Iv;function GT(n){kv=n}function qT(n){Iv=n}class KT extends zl{compare(e,t){const s=e.node.getPriority(),o=t.node.getPriority(),l=s.compareTo(o);return l===0?ti(e.name,t.name):l}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return me.MIN}maxPost(){return new me(qr,new nt("[PRIORITY-POST]",Iv))}makePost(e,t){const s=kv(e);return new me(t,new nt("[PRIORITY-POST]",s))}toString(){return".priority"}}const $e=new KT;/**
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
 */const YT=Math.log(2);class QT{constructor(e){const t=l=>parseInt(Math.log(l)/YT,10),s=l=>parseInt(Array(l+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const o=s(this.count);this.bits_=e+1&o}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const pl=function(n,e,t,s){n.sort(e);const o=function(f,m){const y=m-f;let _,v;if(y===0)return null;if(y===1)return _=n[f],v=t?t(_):_,new rt(v,_.node,rt.BLACK,null,null);{const R=parseInt(y/2,10)+f,S=o(f,R),O=o(R+1,m);return _=n[R],v=t?t(_):_,new rt(v,_.node,rt.BLACK,S,O)}},l=function(f){let m=null,y=null,_=n.length;const v=function(S,O){const D=_-S,j=_;_-=S;const H=o(D+1,j),U=n[D],ne=t?t(U):U;R(new rt(ne,U.node,O,null,H))},R=function(S){m?(m.left=S,m=S):(y=S,m=S)};for(let S=0;S<f.count;++S){const O=f.nextBitIsOne(),D=Math.pow(2,f.count-(S+1));O?v(D,rt.BLACK):(v(D,rt.BLACK),v(D,rt.RED))}return y},c=new QT(n.length),h=l(c);return new Nt(s||e,h)};/**
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
 */let dd;const bi={};class An{static get Default(){return W(bi&&$e,"ChildrenNode.ts has not been loaded"),dd=dd||new An({".priority":bi},{".priority":$e}),dd}constructor(e,t){this.indexes_=e,this.indexSet_=t}get(e){const t=Wi(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof Nt?t:null}hasIndex(e){return En(this.indexSet_,e.toString())}addIndex(e,t){W(e!==Mi,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let o=!1;const l=t.getIterator(me.Wrap);let c=l.getNext();for(;c;)o=o||e.isDefinedOn(c.node),s.push(c),c=l.getNext();let h;o?h=pl(s,e.getCompare()):h=bi;const f=e.toString(),m={...this.indexSet_};m[f]=e;const y={...this.indexes_};return y[f]=h,new An(y,m)}addToIndexes(e,t){const s=ll(this.indexes_,(o,l)=>{const c=Wi(this.indexSet_,l);if(W(c,"Missing index implementation for "+l),o===bi)if(c.isDefinedOn(e.node)){const h=[],f=t.getIterator(me.Wrap);let m=f.getNext();for(;m;)m.name!==e.name&&h.push(m),m=f.getNext();return h.push(e),pl(h,c.getCompare())}else return bi;else{const h=t.get(e.name);let f=o;return h&&(f=f.remove(new me(e.name,h))),f.insert(e,e.node)}});return new An(s,this.indexSet_)}removeFromIndexes(e,t){const s=ll(this.indexes_,o=>{if(o===bi)return o;{const l=t.get(e.name);return l?o.remove(new me(e.name,l)):o}});return new An(s,this.indexSet_)}}/**
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
 */let Qs;class oe{static get EMPTY_NODE(){return Qs||(Qs=new oe(new Nt(Sh),null,An.Default))}constructor(e,t,s){this.children_=e,this.priorityNode_=t,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&Sv(this.priorityNode_),this.children_.isEmpty()&&W(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Qs}updatePriority(e){return this.children_.isEmpty()?this:new oe(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?Qs:t}}getChild(e){const t=pe(e);return t===null?this:this.getImmediateChild(t).getChild(Ne(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(W(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const s=new me(e,t);let o,l;t.isEmpty()?(o=this.children_.remove(e),l=this.indexMap_.removeFromIndexes(s,this.children_)):(o=this.children_.insert(e,t),l=this.indexMap_.addToIndexes(s,this.children_));const c=o.isEmpty()?Qs:this.priorityNode_;return new oe(o,c,l)}}updateChild(e,t){const s=pe(e);if(s===null)return t;{W(pe(e)!==".priority"||Er(e)===1,".priority must be the last token in a path");const o=this.getImmediateChild(s).updateChild(Ne(e),t);return this.updateImmediateChild(s,o)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let s=0,o=0,l=!0;if(this.forEachChild($e,(c,h)=>{t[c]=h.val(e),s++,l&&oe.INTEGER_REGEXP_.test(c)?o=Math.max(o,Number(c)):l=!1}),!e&&l&&o<2*s){const c=[];for(const h in t)c[h]=t[h];return c}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Cv(this.getPriority().val())+":"),this.forEachChild($e,(t,s)=>{const o=s.hash();o!==""&&(e+=":"+t+":"+o)}),this.lazyHash_=e===""?"":X_(e)}return this.lazyHash_}getPredecessorChildName(e,t,s){const o=this.resolveIndex_(s);if(o){const l=o.getPredecessorKey(new me(e,t));return l?l.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new me(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new me(t,this.children_.get(t)):null}forEachChild(e,t){const s=this.resolveIndex_(e);return s?s.inorderTraversal(o=>t(o.name,o.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getIteratorFrom(e,o=>o);{const o=this.children_.getIteratorFrom(e.name,me.Wrap);let l=o.peek();for(;l!=null&&t.compare(l,e)<0;)o.getNext(),l=o.peek();return o}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getReverseIteratorFrom(e,o=>o);{const o=this.children_.getReverseIteratorFrom(e.name,me.Wrap);let l=o.peek();for(;l!=null&&t.compare(l,e)>0;)o.getNext(),l=o.peek();return o}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===bo?-1:0}withIndex(e){if(e===Mi||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new oe(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===Mi||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const s=this.getIterator($e),o=t.getIterator($e);let l=s.getNext(),c=o.getNext();for(;l&&c;){if(l.name!==c.name||!l.node.equals(c.node))return!1;l=s.getNext(),c=o.getNext()}return l===null&&c===null}else return!1;else return!1}}resolveIndex_(e){return e===Mi?null:this.indexMap_.get(e.toString())}}oe.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class JT extends oe{constructor(){super(new Nt(Sh),oe.EMPTY_NODE,An.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return oe.EMPTY_NODE}isEmpty(){return!1}}const bo=new JT;Object.defineProperties(me,{MIN:{value:new me($i,oe.EMPTY_NODE)},MAX:{value:new me(qr,bo)}});Ev.__EMPTY_NODE=oe.EMPTY_NODE;nt.__childrenNodeConstructor=oe;HT(bo);qT(bo);/**
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
 */const XT=!0;function it(n,e=null){if(n===null)return oe.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),W(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){const t=n;return new nt(t,it(e))}if(!(n instanceof Array)&&XT){const t=[];let s=!1;if(ht(n,(c,h)=>{if(c.substring(0,1)!=="."){const f=it(h);f.isEmpty()||(s=s||!f.getPriority().isEmpty(),t.push(new me(c,f)))}}),t.length===0)return oe.EMPTY_NODE;const l=pl(t,VT,c=>c.name,Sh);if(s){const c=pl(t,$e.getCompare());return new oe(l,it(e),new An({".priority":c},{".priority":$e}))}else return new oe(l,it(e),An.Default)}else{let t=oe.EMPTY_NODE;return ht(n,(s,o)=>{if(En(n,s)&&s.substring(0,1)!=="."){const l=it(o);(l.isLeafNode()||!l.isEmpty())&&(t=t.updateImmediateChild(s,l))}}),t.updatePriority(it(e))}}GT(it);/**
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
 */class ZT extends zl{constructor(e){super(),this.indexPath_=e,W(!ye(e)&&pe(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const s=this.extractChild(e.node),o=this.extractChild(t.node),l=s.compareTo(o);return l===0?ti(e.name,t.name):l}makePost(e,t){const s=it(e),o=oe.EMPTY_NODE.updateChild(this.indexPath_,s);return new me(t,o)}maxPost(){const e=oe.EMPTY_NODE.updateChild(this.indexPath_,bo);return new me(qr,e)}toString(){return go(this.indexPath_,0).join("/")}}/**
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
 */class ex extends zl{compare(e,t){const s=e.node.compareTo(t.node);return s===0?ti(e.name,t.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return me.MIN}maxPost(){return me.MAX}makePost(e,t){const s=it(e);return new me(t,s)}toString(){return".value"}}const tx=new ex;/**
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
 */function Tv(n){return{type:"value",snapshotNode:n}}function Bi(n,e){return{type:"child_added",snapshotNode:e,childName:n}}function yo(n,e){return{type:"child_removed",snapshotNode:e,childName:n}}function _o(n,e,t){return{type:"child_changed",snapshotNode:e,childName:n,oldSnap:t}}function nx(n,e){return{type:"child_moved",snapshotNode:e,childName:n}}/**
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
 */class kh{constructor(e){this.index_=e}updateChild(e,t,s,o,l,c){W(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const h=e.getImmediateChild(t);return h.getChild(o).equals(s.getChild(o))&&h.isEmpty()===s.isEmpty()||(c!=null&&(s.isEmpty()?e.hasChild(t)?c.trackChildChange(yo(t,h)):W(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):h.isEmpty()?c.trackChildChange(Bi(t,s)):c.trackChildChange(_o(t,s,h))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(t,s).withIndex(this.index_)}updateFullNode(e,t,s){return s!=null&&(e.isLeafNode()||e.forEachChild($e,(o,l)=>{t.hasChild(o)||s.trackChildChange(yo(o,l))}),t.isLeafNode()||t.forEachChild($e,(o,l)=>{if(e.hasChild(o)){const c=e.getImmediateChild(o);c.equals(l)||s.trackChildChange(_o(o,l,c))}else s.trackChildChange(Bi(o,l))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?oe.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class vo{constructor(e){this.indexedFilter_=new kh(e.getIndex()),this.index_=e.getIndex(),this.startPost_=vo.getStartPost_(e),this.endPost_=vo.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&s}updateChild(e,t,s,o,l,c){return this.matches(new me(t,s))||(s=oe.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,s,o,l,c)}updateFullNode(e,t,s){t.isLeafNode()&&(t=oe.EMPTY_NODE);let o=t.withIndex(this.index_);o=o.updatePriority(oe.EMPTY_NODE);const l=this;return t.forEachChild($e,(c,h)=>{l.matches(new me(c,h))||(o=o.updateImmediateChild(c,oe.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,o,s)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}else return e.getIndex().maxPost()}}/**
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
 */class rx{constructor(e){this.withinDirectionalStart=t=>this.reverse_?this.withinEndPost(t):this.withinStartPost(t),this.withinDirectionalEnd=t=>this.reverse_?this.withinStartPost(t):this.withinEndPost(t),this.withinStartPost=t=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),t);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=t=>{const s=this.index_.compare(t,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new vo(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,s,o,l,c){return this.rangedFilter_.matches(new me(t,s))||(s=oe.EMPTY_NODE),e.getImmediateChild(t).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,s,o,l,c):this.fullLimitUpdateChild_(e,t,s,l,c)}updateFullNode(e,t,s){let o;if(t.isLeafNode()||t.isEmpty())o=oe.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<t.numChildren()&&t.isIndexed(this.index_)){o=oe.EMPTY_NODE.withIndex(this.index_);let l;this.reverse_?l=t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):l=t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let c=0;for(;l.hasNext()&&c<this.limit_;){const h=l.getNext();if(this.withinDirectionalStart(h))if(this.withinDirectionalEnd(h))o=o.updateImmediateChild(h.name,h.node),c++;else break;else continue}}else{o=t.withIndex(this.index_),o=o.updatePriority(oe.EMPTY_NODE);let l;this.reverse_?l=o.getReverseIterator(this.index_):l=o.getIterator(this.index_);let c=0;for(;l.hasNext();){const h=l.getNext();c<this.limit_&&this.withinDirectionalStart(h)&&this.withinDirectionalEnd(h)?c++:o=o.updateImmediateChild(h.name,oe.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,o,s)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,s,o,l){let c;if(this.reverse_){const _=this.index_.getCompare();c=(v,R)=>_(R,v)}else c=this.index_.getCompare();const h=e;W(h.numChildren()===this.limit_,"");const f=new me(t,s),m=this.reverse_?h.getFirstChild(this.index_):h.getLastChild(this.index_),y=this.rangedFilter_.matches(f);if(h.hasChild(t)){const _=h.getImmediateChild(t);let v=o.getChildAfterChild(this.index_,m,this.reverse_);for(;v!=null&&(v.name===t||h.hasChild(v.name));)v=o.getChildAfterChild(this.index_,v,this.reverse_);const R=v==null?1:c(v,f);if(y&&!s.isEmpty()&&R>=0)return l!=null&&l.trackChildChange(_o(t,s,_)),h.updateImmediateChild(t,s);{l!=null&&l.trackChildChange(yo(t,_));const O=h.updateImmediateChild(t,oe.EMPTY_NODE);return v!=null&&this.rangedFilter_.matches(v)?(l!=null&&l.trackChildChange(Bi(v.name,v.node)),O.updateImmediateChild(v.name,v.node)):O}}else return s.isEmpty()?e:y&&c(m,f)>=0?(l!=null&&(l.trackChildChange(yo(m.name,m.node)),l.trackChildChange(Bi(t,s))),h.updateImmediateChild(t,s).updateImmediateChild(m.name,oe.EMPTY_NODE)):e}}/**
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
 */class Ih{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=$e}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return W(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return W(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:$i}hasEnd(){return this.endSet_}getIndexEndValue(){return W(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return W(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:qr}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return W(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===$e}copy(){const e=new Ih;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function ix(n){return n.loadsAllData()?new kh(n.getIndex()):n.hasLimit()?new rx(n):new vo(n)}function ny(n){const e={};if(n.isDefault())return e;let t;if(n.index_===$e?t="$priority":n.index_===tx?t="$value":n.index_===Mi?t="$key":(W(n.index_ instanceof ZT,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=st(t),n.startSet_){const s=n.startAfterSet_?"startAfter":"startAt";e[s]=st(n.indexStartValue_),n.startNameSet_&&(e[s]+=","+st(n.indexStartName_))}if(n.endSet_){const s=n.endBeforeSet_?"endBefore":"endAt";e[s]=st(n.indexEndValue_),n.endNameSet_&&(e[s]+=","+st(n.indexEndName_))}return n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function ry(n){const e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_),e.sin=!n.startAfterSet_),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_),e.ein=!n.endBeforeSet_),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==$e&&(e.i=n.index_.toString()),e}/**
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
 */class ml extends yv{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(W(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,t,s,o){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=s,this.appCheckTokenProvider_=o,this.log_=Ro("p:rest:"),this.listens_={}}listen(e,t,s,o){const l=e._path.toString();this.log_("Listen called for "+l+" "+e._queryIdentifier);const c=ml.getListenId_(e,s),h={};this.listens_[c]=h;const f=ny(e._queryParams);this.restRequest_(l+".json",f,(m,y)=>{let _=y;if(m===404&&(_=null,m=null),m===null&&this.onDataUpdate_(l,_,!1,s),Wi(this.listens_,c)===h){let v;m?m===401?v="permission_denied":v="rest_error:"+m:v="ok",o(v,null)}})}unlisten(e,t){const s=ml.getListenId_(e,t);delete this.listens_[s]}get(e){const t=ny(e._queryParams),s=e._path.toString(),o=new To;return this.restRequest_(s+".json",t,(l,c)=>{let h=c;l===404&&(h=null,l=null),l===null?(this.onDataUpdate_(s,h,!1,null),o.resolve(h)):o.reject(new Error(h))}),o.promise}refreshAuthToken(e){}restRequest_(e,t={},s){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([o,l])=>{o&&o.accessToken&&(t.auth=o.accessToken),l&&l.token&&(t.ac=l.token);const c=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Xi(t);this.log_("Sending REST request for "+c);const h=new XMLHttpRequest;h.onreadystatechange=()=>{if(s&&h.readyState===4){this.log_("REST Response for "+c+" received. status:",h.status,"response:",h.responseText);let f=null;if(h.status>=200&&h.status<300){try{f=fo(h.responseText)}catch{Et("Failed to parse JSON response for "+c+": "+h.responseText)}s(null,f)}else h.status!==401&&h.status!==404&&Et("Got unsuccessful REST response for "+c+" Status: "+h.status),s(h.status);s=null}},h.open("GET",c,!0),h.send()})}}/**
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
 */class sx{constructor(){this.rootNode_=oe.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
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
 */function gl(){return{value:null,children:new Map}}function xv(n,e,t){if(ye(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{const s=pe(e);n.children.has(s)||n.children.set(s,gl());const o=n.children.get(s);e=Ne(e),xv(o,e,t)}}function Nd(n,e,t){n.value!==null?t(e,n.value):ox(n,(s,o)=>{const l=new xe(e.toString()+"/"+s);Nd(o,l,t)})}function ox(n,e){n.children.forEach((t,s)=>{e(s,t)})}/**
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
 */class ax{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t={...e};return this.last_&&ht(this.last_,(s,o)=>{t[s]=t[s]-o}),this.last_=e,t}}/**
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
 */const iy=10*1e3,lx=30*1e3,ux=300*1e3;class cx{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new ax(e);const s=iy+(lx-iy)*Math.random();oo(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),t={};let s=!1;ht(e,(o,l)=>{l>0&&En(this.statsToReport_,o)&&(t[o]=l,s=!0)}),s&&this.server_.reportStats(t),oo(this.reportStats_.bind(this),Math.floor(Math.random()*2*ux))}}/**
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
 */var rn;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(rn||(rn={}));function Th(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function xh(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Rh(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}/**
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
 */class yl{constructor(e,t,s){this.path=e,this.affectedTree=t,this.revert=s,this.type=rn.ACK_USER_WRITE,this.source=Th()}operationForChild(e){if(ye(this.path)){if(this.affectedTree.value!=null)return W(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new xe(e));return new yl(Ce(),t,this.revert)}}else return W(pe(this.path)===e,"operationForChild called for unrelated child."),new yl(Ne(this.path),this.affectedTree,this.revert)}}/**
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
 */class wo{constructor(e,t){this.source=e,this.path=t,this.type=rn.LISTEN_COMPLETE}operationForChild(e){return ye(this.path)?new wo(this.source,Ce()):new wo(this.source,Ne(this.path))}}/**
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
 */class Kr{constructor(e,t,s){this.source=e,this.path=t,this.snap=s,this.type=rn.OVERWRITE}operationForChild(e){return ye(this.path)?new Kr(this.source,Ce(),this.snap.getImmediateChild(e)):new Kr(this.source,Ne(this.path),this.snap)}}/**
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
 */class Vi{constructor(e,t,s){this.source=e,this.path=t,this.children=s,this.type=rn.MERGE}operationForChild(e){if(ye(this.path)){const t=this.children.subtree(new xe(e));return t.isEmpty()?null:t.value?new Kr(this.source,Ce(),t.value):new Vi(this.source,Ce(),t)}else return W(pe(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Vi(this.source,Ne(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class Yr{constructor(e,t,s){this.node_=e,this.fullyInitialized_=t,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(ye(e))return this.isFullyInitialized()&&!this.filtered_;const t=pe(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class dx{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function hx(n,e,t,s){const o=[],l=[];return e.forEach(c=>{c.type==="child_changed"&&n.index_.indexedValueChanged(c.oldSnap,c.snapshotNode)&&l.push(nx(c.childName,c.snapshotNode))}),Js(n,o,"child_removed",e,s,t),Js(n,o,"child_added",e,s,t),Js(n,o,"child_moved",l,s,t),Js(n,o,"child_changed",e,s,t),Js(n,o,"value",e,s,t),o}function Js(n,e,t,s,o,l){const c=s.filter(h=>h.type===t);c.sort((h,f)=>px(n,h,f)),c.forEach(h=>{const f=fx(n,h,l);o.forEach(m=>{m.respondsTo(h.type)&&e.push(m.createEvent(f,n.query_))})})}function fx(n,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function px(n,e,t){if(e.childName==null||t.childName==null)throw Qi("Should only compare child_ events.");const s=new me(e.childName,e.snapshotNode),o=new me(t.childName,t.snapshotNode);return n.index_.compare(s,o)}/**
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
 */function Wl(n,e){return{eventCache:n,serverCache:e}}function ao(n,e,t,s){return Wl(new Yr(e,t,s),n.serverCache)}function Rv(n,e,t,s){return Wl(n.eventCache,new Yr(e,t,s))}function Ad(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function Qr(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}/**
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
 */let hd;const mx=()=>(hd||(hd=new Nt(Z1)),hd);class Pe{static fromObject(e){let t=new Pe(null);return ht(e,(s,o)=>{t=t.set(new xe(s),o)}),t}constructor(e,t=mx()){this.value=e,this.children=t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:Ce(),value:this.value};if(ye(e))return null;{const s=pe(e),o=this.children.get(s);if(o!==null){const l=o.findRootMostMatchingPathAndValue(Ne(e),t);return l!=null?{path:We(new xe(s),l.path),value:l.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(ye(e))return this;{const t=pe(e),s=this.children.get(t);return s!==null?s.subtree(Ne(e)):new Pe(null)}}set(e,t){if(ye(e))return new Pe(t,this.children);{const s=pe(e),l=(this.children.get(s)||new Pe(null)).set(Ne(e),t),c=this.children.insert(s,l);return new Pe(this.value,c)}}remove(e){if(ye(e))return this.children.isEmpty()?new Pe(null):new Pe(null,this.children);{const t=pe(e),s=this.children.get(t);if(s){const o=s.remove(Ne(e));let l;return o.isEmpty()?l=this.children.remove(t):l=this.children.insert(t,o),this.value===null&&l.isEmpty()?new Pe(null):new Pe(this.value,l)}else return this}}get(e){if(ye(e))return this.value;{const t=pe(e),s=this.children.get(t);return s?s.get(Ne(e)):null}}setTree(e,t){if(ye(e))return t;{const s=pe(e),l=(this.children.get(s)||new Pe(null)).setTree(Ne(e),t);let c;return l.isEmpty()?c=this.children.remove(s):c=this.children.insert(s,l),new Pe(this.value,c)}}fold(e){return this.fold_(Ce(),e)}fold_(e,t){const s={};return this.children.inorderTraversal((o,l)=>{s[o]=l.fold_(We(e,o),t)}),t(e,this.value,s)}findOnPath(e,t){return this.findOnPath_(e,Ce(),t)}findOnPath_(e,t,s){const o=this.value?s(t,this.value):!1;if(o)return o;if(ye(e))return null;{const l=pe(e),c=this.children.get(l);return c?c.findOnPath_(Ne(e),We(t,l),s):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,Ce(),t)}foreachOnPath_(e,t,s){if(ye(e))return this;{this.value&&s(t,this.value);const o=pe(e),l=this.children.get(o);return l?l.foreachOnPath_(Ne(e),We(t,o),s):new Pe(null)}}foreach(e){this.foreach_(Ce(),e)}foreach_(e,t){this.children.inorderTraversal((s,o)=>{o.foreach_(We(e,s),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,s)=>{s.value&&e(t,s.value)})}}/**
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
 */class on{constructor(e){this.writeTree_=e}static empty(){return new on(new Pe(null))}}function lo(n,e,t){if(ye(e))return new on(new Pe(t));{const s=n.writeTree_.findRootMostValueAndPath(e);if(s!=null){const o=s.path;let l=s.value;const c=Pt(o,e);return l=l.updateChild(c,t),new on(n.writeTree_.set(o,l))}else{const o=new Pe(t),l=n.writeTree_.setTree(e,o);return new on(l)}}}function Dd(n,e,t){let s=n;return ht(t,(o,l)=>{s=lo(s,We(e,o),l)}),s}function sy(n,e){if(ye(e))return on.empty();{const t=n.writeTree_.setTree(e,new Pe(null));return new on(t)}}function Od(n,e){return ni(n,e)!=null}function ni(n,e){const t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild(Pt(t.path,e)):null}function oy(n){const e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild($e,(s,o)=>{e.push(new me(s,o))}):n.writeTree_.children.inorderTraversal((s,o)=>{o.value!=null&&e.push(new me(s,o.value))}),e}function vr(n,e){if(ye(e))return n;{const t=ni(n,e);return t!=null?new on(new Pe(t)):new on(n.writeTree_.subtree(e))}}function Ld(n){return n.writeTree_.isEmpty()}function Hi(n,e){return bv(Ce(),n.writeTree_,e)}function bv(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let s=null;return e.children.inorderTraversal((o,l)=>{o===".priority"?(W(l.value!==null,"Priority writes must always be leaf nodes"),s=l.value):t=bv(We(n,o),l,t)}),!t.getChild(n).isEmpty()&&s!==null&&(t=t.updateChild(We(n,".priority"),s)),t}}/**
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
 */function bh(n,e){return Dv(e,n)}function gx(n,e,t,s,o){W(s>n.lastWriteId,"Stacking an older write on top of newer ones"),o===void 0&&(o=!0),n.allWrites.push({path:e,snap:t,writeId:s,visible:o}),o&&(n.visibleWrites=lo(n.visibleWrites,e,t)),n.lastWriteId=s}function yx(n,e,t,s){W(s>n.lastWriteId,"Stacking an older merge on top of newer ones"),n.allWrites.push({path:e,children:t,writeId:s,visible:!0}),n.visibleWrites=Dd(n.visibleWrites,e,t),n.lastWriteId=s}function _x(n,e){for(let t=0;t<n.allWrites.length;t++){const s=n.allWrites[t];if(s.writeId===e)return s}return null}function vx(n,e){const t=n.allWrites.findIndex(h=>h.writeId===e);W(t>=0,"removeWrite called with nonexistent writeId.");const s=n.allWrites[t];n.allWrites.splice(t,1);let o=s.visible,l=!1,c=n.allWrites.length-1;for(;o&&c>=0;){const h=n.allWrites[c];h.visible&&(c>=t&&wx(h,s.path)?o=!1:Ht(s.path,h.path)&&(l=!0)),c--}if(o){if(l)return Ex(n),!0;if(s.snap)n.visibleWrites=sy(n.visibleWrites,s.path);else{const h=s.children;ht(h,f=>{n.visibleWrites=sy(n.visibleWrites,We(s.path,f))})}return!0}else return!1}function wx(n,e){if(n.snap)return Ht(n.path,e);for(const t in n.children)if(n.children.hasOwnProperty(t)&&Ht(We(n.path,t),e))return!0;return!1}function Ex(n){n.visibleWrites=Pv(n.allWrites,Cx,Ce()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function Cx(n){return n.visible}function Pv(n,e,t){let s=on.empty();for(let o=0;o<n.length;++o){const l=n[o];if(e(l)){const c=l.path;let h;if(l.snap)Ht(t,c)?(h=Pt(t,c),s=lo(s,h,l.snap)):Ht(c,t)&&(h=Pt(c,t),s=lo(s,Ce(),l.snap.getChild(h)));else if(l.children){if(Ht(t,c))h=Pt(t,c),s=Dd(s,h,l.children);else if(Ht(c,t))if(h=Pt(c,t),ye(h))s=Dd(s,Ce(),l.children);else{const f=Wi(l.children,pe(h));if(f){const m=f.getChild(Ne(h));s=lo(s,Ce(),m)}}}else throw Qi("WriteRecord should have .snap or .children")}}return s}function Nv(n,e,t,s,o){if(!s&&!o){const l=ni(n.visibleWrites,e);if(l!=null)return l;{const c=vr(n.visibleWrites,e);if(Ld(c))return t;if(t==null&&!Od(c,Ce()))return null;{const h=t||oe.EMPTY_NODE;return Hi(c,h)}}}else{const l=vr(n.visibleWrites,e);if(!o&&Ld(l))return t;if(!o&&t==null&&!Od(l,Ce()))return null;{const c=function(m){return(m.visible||o)&&(!s||!~s.indexOf(m.writeId))&&(Ht(m.path,e)||Ht(e,m.path))},h=Pv(n.allWrites,c,e),f=t||oe.EMPTY_NODE;return Hi(h,f)}}}function Sx(n,e,t){let s=oe.EMPTY_NODE;const o=ni(n.visibleWrites,e);if(o)return o.isLeafNode()||o.forEachChild($e,(l,c)=>{s=s.updateImmediateChild(l,c)}),s;if(t){const l=vr(n.visibleWrites,e);return t.forEachChild($e,(c,h)=>{const f=Hi(vr(l,new xe(c)),h);s=s.updateImmediateChild(c,f)}),oy(l).forEach(c=>{s=s.updateImmediateChild(c.name,c.node)}),s}else{const l=vr(n.visibleWrites,e);return oy(l).forEach(c=>{s=s.updateImmediateChild(c.name,c.node)}),s}}function kx(n,e,t,s,o){W(s||o,"Either existingEventSnap or existingServerSnap must exist");const l=We(e,t);if(Od(n.visibleWrites,l))return null;{const c=vr(n.visibleWrites,l);return Ld(c)?o.getChild(t):Hi(c,o.getChild(t))}}function Ix(n,e,t,s){const o=We(e,t),l=ni(n.visibleWrites,o);if(l!=null)return l;if(s.isCompleteForChild(t)){const c=vr(n.visibleWrites,o);return Hi(c,s.getNode().getImmediateChild(t))}else return null}function Tx(n,e){return ni(n.visibleWrites,e)}function xx(n,e,t,s,o,l,c){let h;const f=vr(n.visibleWrites,e),m=ni(f,Ce());if(m!=null)h=m;else if(t!=null)h=Hi(f,t);else return[];if(h=h.withIndex(c),!h.isEmpty()&&!h.isLeafNode()){const y=[],_=c.getCompare(),v=l?h.getReverseIteratorFrom(s,c):h.getIteratorFrom(s,c);let R=v.getNext();for(;R&&y.length<o;)_(R,s)!==0&&y.push(R),R=v.getNext();return y}else return[]}function Rx(){return{visibleWrites:on.empty(),allWrites:[],lastWriteId:-1}}function _l(n,e,t,s){return Nv(n.writeTree,n.treePath,e,t,s)}function Ph(n,e){return Sx(n.writeTree,n.treePath,e)}function ay(n,e,t,s){return kx(n.writeTree,n.treePath,e,t,s)}function vl(n,e){return Tx(n.writeTree,We(n.treePath,e))}function bx(n,e,t,s,o,l){return xx(n.writeTree,n.treePath,e,t,s,o,l)}function Nh(n,e,t){return Ix(n.writeTree,n.treePath,e,t)}function Av(n,e){return Dv(We(n.treePath,e),n.writeTree)}function Dv(n,e){return{treePath:n,writeTree:e}}/**
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
 */class Px{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,s=e.childName;W(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),W(s!==".priority","Only non-priority child changes can be tracked.");const o=this.changeMap.get(s);if(o){const l=o.type;if(t==="child_added"&&l==="child_removed")this.changeMap.set(s,_o(s,e.snapshotNode,o.snapshotNode));else if(t==="child_removed"&&l==="child_added")this.changeMap.delete(s);else if(t==="child_removed"&&l==="child_changed")this.changeMap.set(s,yo(s,o.oldSnap));else if(t==="child_changed"&&l==="child_added")this.changeMap.set(s,Bi(s,e.snapshotNode));else if(t==="child_changed"&&l==="child_changed")this.changeMap.set(s,_o(s,e.snapshotNode,o.oldSnap));else throw Qi("Illegal combination of changes: "+e+" occurred after "+o)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class Nx{getCompleteChild(e){return null}getChildAfterChild(e,t,s){return null}}const Ov=new Nx;class Ah{constructor(e,t,s=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=s}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new Yr(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Nh(this.writes_,e,s)}}getChildAfterChild(e,t,s){const o=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Qr(this.viewCache_),l=bx(this.writes_,o,t,1,s,e);return l.length===0?null:l[0]}}/**
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
 */function Ax(n){return{filter:n}}function Dx(n,e){W(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),W(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function Ox(n,e,t,s,o){const l=new Px;let c,h;if(t.type===rn.OVERWRITE){const m=t;m.source.fromUser?c=Md(n,e,m.path,m.snap,s,o,l):(W(m.source.fromServer,"Unknown source."),h=m.source.tagged||e.serverCache.isFiltered()&&!ye(m.path),c=wl(n,e,m.path,m.snap,s,o,h,l))}else if(t.type===rn.MERGE){const m=t;m.source.fromUser?c=Mx(n,e,m.path,m.children,s,o,l):(W(m.source.fromServer,"Unknown source."),h=m.source.tagged||e.serverCache.isFiltered(),c=Fd(n,e,m.path,m.children,s,o,h,l))}else if(t.type===rn.ACK_USER_WRITE){const m=t;m.revert?c=jx(n,e,m.path,s,o,l):c=Fx(n,e,m.path,m.affectedTree,s,o,l)}else if(t.type===rn.LISTEN_COMPLETE)c=Ux(n,e,t.path,s,l);else throw Qi("Unknown operation type: "+t.type);const f=l.getChanges();return Lx(e,c,f),{viewCache:c,changes:f}}function Lx(n,e,t){const s=e.eventCache;if(s.isFullyInitialized()){const o=s.getNode().isLeafNode()||s.getNode().isEmpty(),l=Ad(n);(t.length>0||!n.eventCache.isFullyInitialized()||o&&!s.getNode().equals(l)||!s.getNode().getPriority().equals(l.getPriority()))&&t.push(Tv(Ad(e)))}}function Lv(n,e,t,s,o,l){const c=e.eventCache;if(vl(s,t)!=null)return e;{let h,f;if(ye(t))if(W(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const m=Qr(e),y=m instanceof oe?m:oe.EMPTY_NODE,_=Ph(s,y);h=n.filter.updateFullNode(e.eventCache.getNode(),_,l)}else{const m=_l(s,Qr(e));h=n.filter.updateFullNode(e.eventCache.getNode(),m,l)}else{const m=pe(t);if(m===".priority"){W(Er(t)===1,"Can't have a priority with additional path components");const y=c.getNode();f=e.serverCache.getNode();const _=ay(s,t,y,f);_!=null?h=n.filter.updatePriority(y,_):h=c.getNode()}else{const y=Ne(t);let _;if(c.isCompleteForChild(m)){f=e.serverCache.getNode();const v=ay(s,t,c.getNode(),f);v!=null?_=c.getNode().getImmediateChild(m).updateChild(y,v):_=c.getNode().getImmediateChild(m)}else _=Nh(s,m,e.serverCache);_!=null?h=n.filter.updateChild(c.getNode(),m,_,y,o,l):h=c.getNode()}}return ao(e,h,c.isFullyInitialized()||ye(t),n.filter.filtersNodes())}}function wl(n,e,t,s,o,l,c,h){const f=e.serverCache;let m;const y=c?n.filter:n.filter.getIndexedFilter();if(ye(t))m=y.updateFullNode(f.getNode(),s,null);else if(y.filtersNodes()&&!f.isFiltered()){const R=f.getNode().updateChild(t,s);m=y.updateFullNode(f.getNode(),R,null)}else{const R=pe(t);if(!f.isCompleteForPath(t)&&Er(t)>1)return e;const S=Ne(t),D=f.getNode().getImmediateChild(R).updateChild(S,s);R===".priority"?m=y.updatePriority(f.getNode(),D):m=y.updateChild(f.getNode(),R,D,S,Ov,null)}const _=Rv(e,m,f.isFullyInitialized()||ye(t),y.filtersNodes()),v=new Ah(o,_,l);return Lv(n,_,t,o,v,h)}function Md(n,e,t,s,o,l,c){const h=e.eventCache;let f,m;const y=new Ah(o,e,l);if(ye(t))m=n.filter.updateFullNode(e.eventCache.getNode(),s,c),f=ao(e,m,!0,n.filter.filtersNodes());else{const _=pe(t);if(_===".priority")m=n.filter.updatePriority(e.eventCache.getNode(),s),f=ao(e,m,h.isFullyInitialized(),h.isFiltered());else{const v=Ne(t),R=h.getNode().getImmediateChild(_);let S;if(ye(v))S=s;else{const O=y.getCompleteChild(_);O!=null?wh(v)===".priority"&&O.getChild(vv(v)).isEmpty()?S=O:S=O.updateChild(v,s):S=oe.EMPTY_NODE}if(R.equals(S))f=e;else{const O=n.filter.updateChild(h.getNode(),_,S,v,y,c);f=ao(e,O,h.isFullyInitialized(),n.filter.filtersNodes())}}}return f}function ly(n,e){return n.eventCache.isCompleteForChild(e)}function Mx(n,e,t,s,o,l,c){let h=e;return s.foreach((f,m)=>{const y=We(t,f);ly(e,pe(y))&&(h=Md(n,h,y,m,o,l,c))}),s.foreach((f,m)=>{const y=We(t,f);ly(e,pe(y))||(h=Md(n,h,y,m,o,l,c))}),h}function uy(n,e,t){return t.foreach((s,o)=>{e=e.updateChild(s,o)}),e}function Fd(n,e,t,s,o,l,c,h){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let f=e,m;ye(t)?m=s:m=new Pe(null).setTree(t,s);const y=e.serverCache.getNode();return m.children.inorderTraversal((_,v)=>{if(y.hasChild(_)){const R=e.serverCache.getNode().getImmediateChild(_),S=uy(n,R,v);f=wl(n,f,new xe(_),S,o,l,c,h)}}),m.children.inorderTraversal((_,v)=>{const R=!e.serverCache.isCompleteForChild(_)&&v.value===null;if(!y.hasChild(_)&&!R){const S=e.serverCache.getNode().getImmediateChild(_),O=uy(n,S,v);f=wl(n,f,new xe(_),O,o,l,c,h)}}),f}function Fx(n,e,t,s,o,l,c){if(vl(o,t)!=null)return e;const h=e.serverCache.isFiltered(),f=e.serverCache;if(s.value!=null){if(ye(t)&&f.isFullyInitialized()||f.isCompleteForPath(t))return wl(n,e,t,f.getNode().getChild(t),o,l,h,c);if(ye(t)){let m=new Pe(null);return f.getNode().forEachChild(Mi,(y,_)=>{m=m.set(new xe(y),_)}),Fd(n,e,t,m,o,l,h,c)}else return e}else{let m=new Pe(null);return s.foreach((y,_)=>{const v=We(t,y);f.isCompleteForPath(v)&&(m=m.set(y,f.getNode().getChild(v)))}),Fd(n,e,t,m,o,l,h,c)}}function Ux(n,e,t,s,o){const l=e.serverCache,c=Rv(e,l.getNode(),l.isFullyInitialized()||ye(t),l.isFiltered());return Lv(n,c,t,s,Ov,o)}function jx(n,e,t,s,o,l){let c;if(vl(s,t)!=null)return e;{const h=new Ah(s,e,o),f=e.eventCache.getNode();let m;if(ye(t)||pe(t)===".priority"){let y;if(e.serverCache.isFullyInitialized())y=_l(s,Qr(e));else{const _=e.serverCache.getNode();W(_ instanceof oe,"serverChildren would be complete if leaf node"),y=Ph(s,_)}y=y,m=n.filter.updateFullNode(f,y,l)}else{const y=pe(t);let _=Nh(s,y,e.serverCache);_==null&&e.serverCache.isCompleteForChild(y)&&(_=f.getImmediateChild(y)),_!=null?m=n.filter.updateChild(f,y,_,Ne(t),h,l):e.eventCache.getNode().hasChild(y)?m=n.filter.updateChild(f,y,oe.EMPTY_NODE,Ne(t),h,l):m=f,m.isEmpty()&&e.serverCache.isFullyInitialized()&&(c=_l(s,Qr(e)),c.isLeafNode()&&(m=n.filter.updateFullNode(m,c,l)))}return c=e.serverCache.isFullyInitialized()||vl(s,Ce())!=null,ao(e,m,c,n.filter.filtersNodes())}}/**
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
 */class zx{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,o=new kh(s.getIndex()),l=ix(s);this.processor_=Ax(l);const c=t.serverCache,h=t.eventCache,f=o.updateFullNode(oe.EMPTY_NODE,c.getNode(),null),m=l.updateFullNode(oe.EMPTY_NODE,h.getNode(),null),y=new Yr(f,c.isFullyInitialized(),o.filtersNodes()),_=new Yr(m,h.isFullyInitialized(),l.filtersNodes());this.viewCache_=Wl(_,y),this.eventGenerator_=new dx(this.query_)}get query(){return this.query_}}function Wx(n){return n.viewCache_.serverCache.getNode()}function $x(n,e){const t=Qr(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!ye(e)&&!t.getImmediateChild(pe(e)).isEmpty())?t.getChild(e):null}function cy(n){return n.eventRegistrations_.length===0}function Bx(n,e){n.eventRegistrations_.push(e)}function dy(n,e,t){const s=[];if(t){W(e==null,"A cancel should cancel all event registrations.");const o=n.query._path;n.eventRegistrations_.forEach(l=>{const c=l.createCancelEvent(t,o);c&&s.push(c)})}if(e){let o=[];for(let l=0;l<n.eventRegistrations_.length;++l){const c=n.eventRegistrations_[l];if(!c.matches(e))o.push(c);else if(e.hasAnyCallback()){o=o.concat(n.eventRegistrations_.slice(l+1));break}}n.eventRegistrations_=o}else n.eventRegistrations_=[];return s}function hy(n,e,t,s){e.type===rn.MERGE&&e.source.queryId!==null&&(W(Qr(n.viewCache_),"We should always have a full cache before handling merges"),W(Ad(n.viewCache_),"Missing event cache, even though we have a server cache"));const o=n.viewCache_,l=Ox(n.processor_,o,e,t,s);return Dx(n.processor_,l.viewCache),W(l.viewCache.serverCache.isFullyInitialized()||!o.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=l.viewCache,Mv(n,l.changes,l.viewCache.eventCache.getNode(),null)}function Vx(n,e){const t=n.viewCache_.eventCache,s=[];return t.getNode().isLeafNode()||t.getNode().forEachChild($e,(l,c)=>{s.push(Bi(l,c))}),t.isFullyInitialized()&&s.push(Tv(t.getNode())),Mv(n,s,t.getNode(),e)}function Mv(n,e,t,s){const o=s?[s]:n.eventRegistrations_;return hx(n.eventGenerator_,e,t,o)}/**
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
 */let El;class Hx{constructor(){this.views=new Map}}function Gx(n){W(!El,"__referenceConstructor has already been defined"),El=n}function qx(){return W(El,"Reference.ts has not been loaded"),El}function Kx(n){return n.views.size===0}function Dh(n,e,t,s){const o=e.source.queryId;if(o!==null){const l=n.views.get(o);return W(l!=null,"SyncTree gave us an op for an invalid query."),hy(l,e,t,s)}else{let l=[];for(const c of n.views.values())l=l.concat(hy(c,e,t,s));return l}}function Yx(n,e,t,s,o){const l=e._queryIdentifier,c=n.views.get(l);if(!c){let h=_l(t,o?s:null),f=!1;h?f=!0:s instanceof oe?(h=Ph(t,s),f=!1):(h=oe.EMPTY_NODE,f=!1);const m=Wl(new Yr(h,f,!1),new Yr(s,o,!1));return new zx(e,m)}return c}function Qx(n,e,t,s,o,l){const c=Yx(n,e,s,o,l);return n.views.has(e._queryIdentifier)||n.views.set(e._queryIdentifier,c),Bx(c,t),Vx(c,t)}function Jx(n,e,t,s){const o=e._queryIdentifier,l=[];let c=[];const h=Cr(n);if(o==="default")for(const[f,m]of n.views.entries())c=c.concat(dy(m,t,s)),cy(m)&&(n.views.delete(f),m.query._queryParams.loadsAllData()||l.push(m.query));else{const f=n.views.get(o);f&&(c=c.concat(dy(f,t,s)),cy(f)&&(n.views.delete(o),f.query._queryParams.loadsAllData()||l.push(f.query)))}return h&&!Cr(n)&&l.push(new(qx())(e._repo,e._path)),{removed:l,events:c}}function Fv(n){const e=[];for(const t of n.views.values())t.query._queryParams.loadsAllData()||e.push(t);return e}function Fi(n,e){let t=null;for(const s of n.views.values())t=t||$x(s,e);return t}function Uv(n,e){if(e._queryParams.loadsAllData())return $l(n);{const s=e._queryIdentifier;return n.views.get(s)}}function jv(n,e){return Uv(n,e)!=null}function Cr(n){return $l(n)!=null}function $l(n){for(const e of n.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let Cl;function Xx(n){W(!Cl,"__referenceConstructor has already been defined"),Cl=n}function Zx(){return W(Cl,"Reference.ts has not been loaded"),Cl}let eR=1;class fy{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Pe(null),this.pendingWriteTree_=Rx(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function zv(n,e,t,s,o){return gx(n.pendingWriteTree_,e,t,s,o),o?ts(n,new Kr(Th(),e,t)):[]}function tR(n,e,t,s){yx(n.pendingWriteTree_,e,t,s);const o=Pe.fromObject(t);return ts(n,new Vi(Th(),e,o))}function gr(n,e,t=!1){const s=_x(n.pendingWriteTree_,e);if(vx(n.pendingWriteTree_,e)){let l=new Pe(null);return s.snap!=null?l=l.set(Ce(),!0):ht(s.children,c=>{l=l.set(new xe(c),!0)}),ts(n,new yl(s.path,l,t))}else return[]}function Bl(n,e,t){return ts(n,new Kr(xh(),e,t))}function nR(n,e,t){const s=Pe.fromObject(t);return ts(n,new Vi(xh(),e,s))}function rR(n,e){return ts(n,new wo(xh(),e))}function iR(n,e,t){const s=Lh(n,t);if(s){const o=Mh(s),l=o.path,c=o.queryId,h=Pt(l,e),f=new wo(Rh(c),h);return Fh(n,l,f)}else return[]}function Ud(n,e,t,s,o=!1){const l=e._path,c=n.syncPointTree_.get(l);let h=[];if(c&&(e._queryIdentifier==="default"||jv(c,e))){const f=Jx(c,e,t,s);Kx(c)&&(n.syncPointTree_=n.syncPointTree_.remove(l));const m=f.removed;if(h=f.events,!o){const y=m.findIndex(v=>v._queryParams.loadsAllData())!==-1,_=n.syncPointTree_.findOnPath(l,(v,R)=>Cr(R));if(y&&!_){const v=n.syncPointTree_.subtree(l);if(!v.isEmpty()){const R=aR(v);for(let S=0;S<R.length;++S){const O=R[S],D=O.query,j=Bv(n,O);n.listenProvider_.startListening(uo(D),Sl(n,D),j.hashFn,j.onComplete)}}}!_&&m.length>0&&!s&&(y?n.listenProvider_.stopListening(uo(e),null):m.forEach(v=>{const R=n.queryToTagMap.get(Vl(v));n.listenProvider_.stopListening(uo(v),R)}))}lR(n,m)}return h}function sR(n,e,t,s){const o=Lh(n,s);if(o!=null){const l=Mh(o),c=l.path,h=l.queryId,f=Pt(c,e),m=new Kr(Rh(h),f,t);return Fh(n,c,m)}else return[]}function oR(n,e,t,s){const o=Lh(n,s);if(o){const l=Mh(o),c=l.path,h=l.queryId,f=Pt(c,e),m=Pe.fromObject(t),y=new Vi(Rh(h),f,m);return Fh(n,c,y)}else return[]}function py(n,e,t,s=!1){const o=e._path;let l=null,c=!1;n.syncPointTree_.foreachOnPath(o,(v,R)=>{const S=Pt(v,o);l=l||Fi(R,S),c=c||Cr(R)});let h=n.syncPointTree_.get(o);h?(c=c||Cr(h),l=l||Fi(h,Ce())):(h=new Hx,n.syncPointTree_=n.syncPointTree_.set(o,h));let f;l!=null?f=!0:(f=!1,l=oe.EMPTY_NODE,n.syncPointTree_.subtree(o).foreachChild((R,S)=>{const O=Fi(S,Ce());O&&(l=l.updateImmediateChild(R,O))}));const m=jv(h,e);if(!m&&!e._queryParams.loadsAllData()){const v=Vl(e);W(!n.queryToTagMap.has(v),"View does not exist, but we have a tag");const R=uR();n.queryToTagMap.set(v,R),n.tagToQueryMap.set(R,v)}const y=bh(n.pendingWriteTree_,o);let _=Qx(h,e,t,y,l,f);if(!m&&!c&&!s){const v=Uv(h,e);_=_.concat(cR(n,e,v))}return _}function Oh(n,e,t){const o=n.pendingWriteTree_,l=n.syncPointTree_.findOnPath(e,(c,h)=>{const f=Pt(c,e),m=Fi(h,f);if(m)return m});return Nv(o,e,l,t,!0)}function ts(n,e){return Wv(e,n.syncPointTree_,null,bh(n.pendingWriteTree_,Ce()))}function Wv(n,e,t,s){if(ye(n.path))return $v(n,e,t,s);{const o=e.get(Ce());t==null&&o!=null&&(t=Fi(o,Ce()));let l=[];const c=pe(n.path),h=n.operationForChild(c),f=e.children.get(c);if(f&&h){const m=t?t.getImmediateChild(c):null,y=Av(s,c);l=l.concat(Wv(h,f,m,y))}return o&&(l=l.concat(Dh(o,n,s,t))),l}}function $v(n,e,t,s){const o=e.get(Ce());t==null&&o!=null&&(t=Fi(o,Ce()));let l=[];return e.children.inorderTraversal((c,h)=>{const f=t?t.getImmediateChild(c):null,m=Av(s,c),y=n.operationForChild(c);y&&(l=l.concat($v(y,h,f,m)))}),o&&(l=l.concat(Dh(o,n,s,t))),l}function Bv(n,e){const t=e.query,s=Sl(n,t);return{hashFn:()=>(Wx(e)||oe.EMPTY_NODE).hash(),onComplete:o=>{if(o==="ok")return s?iR(n,t._path,s):rR(n,t._path);{const l=nT(o,t);return Ud(n,t,null,l)}}}}function Sl(n,e){const t=Vl(e);return n.queryToTagMap.get(t)}function Vl(n){return n._path.toString()+"$"+n._queryIdentifier}function Lh(n,e){return n.tagToQueryMap.get(e)}function Mh(n){const e=n.indexOf("$");return W(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new xe(n.substr(0,e))}}function Fh(n,e,t){const s=n.syncPointTree_.get(e);W(s,"Missing sync point for query tag that we're tracking");const o=bh(n.pendingWriteTree_,e);return Dh(s,t,o,null)}function aR(n){return n.fold((e,t,s)=>{if(t&&Cr(t))return[$l(t)];{let o=[];return t&&(o=Fv(t)),ht(s,(l,c)=>{o=o.concat(c)}),o}})}function uo(n){return n._queryParams.loadsAllData()&&!n._queryParams.isDefault()?new(Zx())(n._repo,n._path):n}function lR(n,e){for(let t=0;t<e.length;++t){const s=e[t];if(!s._queryParams.loadsAllData()){const o=Vl(s),l=n.queryToTagMap.get(o);n.queryToTagMap.delete(o),n.tagToQueryMap.delete(l)}}}function uR(){return eR++}function cR(n,e,t){const s=e._path,o=Sl(n,e),l=Bv(n,t),c=n.listenProvider_.startListening(uo(e),o,l.hashFn,l.onComplete),h=n.syncPointTree_.subtree(s);if(o)W(!Cr(h.value),"If we're adding a query, it shouldn't be shadowed");else{const f=h.fold((m,y,_)=>{if(!ye(m)&&y&&Cr(y))return[$l(y).query];{let v=[];return y&&(v=v.concat(Fv(y).map(R=>R.query))),ht(_,(R,S)=>{v=v.concat(S)}),v}});for(let m=0;m<f.length;++m){const y=f[m];n.listenProvider_.stopListening(uo(y),Sl(n,y))}}return c}/**
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
 */class Uh{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new Uh(t)}node(){return this.node_}}class jh{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=We(this.path_,e);return new jh(this.syncTree_,t)}node(){return Oh(this.syncTree_,this.path_)}}const dR=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},my=function(n,e,t){if(!n||typeof n!="object")return n;if(W(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return hR(n[".sv"],e,t);if(typeof n[".sv"]=="object")return fR(n[".sv"],e);W(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},hR=function(n,e,t){switch(n){case"timestamp":return t.timestamp;default:W(!1,"Unexpected server value: "+n)}},fR=function(n,e,t){n.hasOwnProperty("increment")||W(!1,"Unexpected server value: "+JSON.stringify(n,null,2));const s=n.increment;typeof s!="number"&&W(!1,"Unexpected increment value: "+s);const o=e.node();if(W(o!==null&&typeof o<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!o.isLeafNode())return s;const c=o.getValue();return typeof c!="number"?s:c+s},Vv=function(n,e,t,s){return zh(e,new jh(t,n),s)},Hv=function(n,e,t){return zh(n,new Uh(e),t)};function zh(n,e,t){const s=n.getPriority().val(),o=my(s,e.getImmediateChild(".priority"),t);let l;if(n.isLeafNode()){const c=n,h=my(c.getValue(),e,t);return h!==c.getValue()||o!==c.getPriority().val()?new nt(h,it(o)):n}else{const c=n;return l=c,o!==c.getPriority().val()&&(l=l.updatePriority(new nt(o))),c.forEachChild($e,(h,f)=>{const m=zh(f,e.getImmediateChild(h),t);m!==f&&(l=l.updateImmediateChild(h,m))}),l}}/**
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
 */class Wh{constructor(e="",t=null,s={children:{},childCount:0}){this.name=e,this.parent=t,this.node=s}}function $h(n,e){let t=e instanceof xe?e:new xe(e),s=n,o=pe(t);for(;o!==null;){const l=Wi(s.node.children,o)||{children:{},childCount:0};s=new Wh(o,s,l),t=Ne(t),o=pe(t)}return s}function ns(n){return n.node.value}function Gv(n,e){n.node.value=e,jd(n)}function qv(n){return n.node.childCount>0}function pR(n){return ns(n)===void 0&&!qv(n)}function Hl(n,e){ht(n.node.children,(t,s)=>{e(new Wh(t,n,s))})}function Kv(n,e,t,s){t&&e(n),Hl(n,o=>{Kv(o,e,!0)})}function mR(n,e,t){let s=n.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function Po(n){return new xe(n.parent===null?n.name:Po(n.parent)+"/"+n.name)}function jd(n){n.parent!==null&&gR(n.parent,n.name,n)}function gR(n,e,t){const s=pR(t),o=En(n.node.children,e);s&&o?(delete n.node.children[e],n.node.childCount--,jd(n)):!s&&!o&&(n.node.children[e]=t.node,n.node.childCount++,jd(n))}/**
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
 */const yR=/[\[\].#$\/\u0000-\u001F\u007F]/,_R=/[\[\].#$\u0000-\u001F\u007F]/,fd=10*1024*1024,Bh=function(n){return typeof n=="string"&&n.length!==0&&!yR.test(n)},Yv=function(n){return typeof n=="string"&&n.length!==0&&!_R.test(n)},vR=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Yv(n)},wR=function(n){return n===null||typeof n=="string"||typeof n=="number"&&!mh(n)||n&&typeof n=="object"&&En(n,".sv")},Qv=function(n,e,t,s){s&&e===void 0||Gl(Ll(n,"value"),e,t)},Gl=function(n,e,t){const s=t instanceof xe?new MT(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+$r(s));if(typeof e=="function")throw new Error(n+"contains a function "+$r(s)+" with contents = "+e.toString());if(mh(e))throw new Error(n+"contains "+e.toString()+" "+$r(s));if(typeof e=="string"&&e.length>fd/3&&Ml(e)>fd)throw new Error(n+"contains a string greater than "+fd+" utf8 bytes "+$r(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let o=!1,l=!1;if(ht(e,(c,h)=>{if(c===".value")o=!0;else if(c!==".priority"&&c!==".sv"&&(l=!0,!Bh(c)))throw new Error(n+" contains an invalid key ("+c+") "+$r(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);FT(s,c),Gl(n,h,s),UT(s)}),o&&l)throw new Error(n+' contains ".value" child '+$r(s)+" in addition to actual children.")}},ER=function(n,e){let t,s;for(t=0;t<e.length;t++){s=e[t];const l=go(s);for(let c=0;c<l.length;c++)if(!(l[c]===".priority"&&c===l.length-1)){if(!Bh(l[c]))throw new Error(n+"contains an invalid key ("+l[c]+") in path "+s.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(LT);let o=null;for(t=0;t<e.length;t++){if(s=e[t],o!==null&&Ht(o,s))throw new Error(n+"contains a path "+o.toString()+" that is ancestor of another path "+s.toString());o=s}},CR=function(n,e,t,s){const o=Ll(n,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(o+" must be an object containing the children to replace.");const l=[];ht(e,(c,h)=>{const f=new xe(c);if(Gl(o,h,We(t,f)),wh(f)===".priority"&&!wR(h))throw new Error(o+"contains an invalid value for '"+f.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");l.push(f)}),ER(o,l)},Jv=function(n,e,t,s){if(!Yv(t))throw new Error(Ll(n,e)+'was an invalid path = "'+t+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},SR=function(n,e,t,s){t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Jv(n,e,t)},Vh=function(n,e){if(pe(e)===".info")throw new Error(n+" failed = Can't modify data under /.info/")},kR=function(n,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Bh(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!vR(t))throw new Error(Ll(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class IR{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function ql(n,e){let t=null;for(let s=0;s<e.length;s++){const o=e[s],l=o.getPath();t!==null&&!Eh(l,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:l}),t.events.push(o)}t&&n.eventLists_.push(t)}function Xv(n,e,t){ql(n,t),Zv(n,s=>Eh(s,e))}function ln(n,e,t){ql(n,t),Zv(n,s=>Ht(s,e)||Ht(e,s))}function Zv(n,e){n.recursionDepth_++;let t=!0;for(let s=0;s<n.eventLists_.length;s++){const o=n.eventLists_[s];if(o){const l=o.path;e(l)?(TR(n.eventLists_[s]),n.eventLists_[s]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function TR(n){for(let e=0;e<n.events.length;e++){const t=n.events[e];if(t!==null){n.events[e]=null;const s=t.getEventRunner();so&&dt("event: "+t.toString()),es(s)}}}/**
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
 */const xR="repo_interrupt",RR=25;class bR{constructor(e,t,s,o){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=s,this.appCheckProvider_=o,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new IR,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=gl(),this.transactionQueueTree_=new Wh,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function PR(n,e,t){if(n.stats_=_h(n.repoInfo_),n.forceRestClient_||oT())n.server_=new ml(n.repoInfo_,(s,o,l,c)=>{gy(n,s,o,l,c)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>yy(n,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{st(t)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}n.persistentConnection_=new Mn(n.repoInfo_,e,(s,o,l,c)=>{gy(n,s,o,l,c)},s=>{yy(n,s)},s=>{NR(n,s)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(s=>{n.server_.refreshAuthToken(s)}),n.appCheckProvider_.addTokenChangeListener(s=>{n.server_.refreshAppCheckToken(s.token)}),n.statsReporter_=dT(n.repoInfo_,()=>new cx(n.stats_,n.server_)),n.infoData_=new sx,n.infoSyncTree_=new fy({startListening:(s,o,l,c)=>{let h=[];const f=n.infoData_.getNode(s._path);return f.isEmpty()||(h=Bl(n.infoSyncTree_,s._path,f),setTimeout(()=>{c("ok")},0)),h},stopListening:()=>{}}),Hh(n,"connected",!1),n.serverSyncTree_=new fy({startListening:(s,o,l,c)=>(n.server_.listen(s,l,o,(h,f)=>{const m=c(h,f);ln(n.eventQueue_,s._path,m)}),[]),stopListening:(s,o)=>{n.server_.unlisten(s,o)}})}function ew(n){const t=n.infoData_.getNode(new xe(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function Kl(n){return dR({timestamp:ew(n)})}function gy(n,e,t,s,o){n.dataUpdateCount++;const l=new xe(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let c=[];if(o)if(s){const f=ll(t,m=>it(m));c=oR(n.serverSyncTree_,l,f,o)}else{const f=it(t);c=sR(n.serverSyncTree_,l,f,o)}else if(s){const f=ll(t,m=>it(m));c=nR(n.serverSyncTree_,l,f)}else{const f=it(t);c=Bl(n.serverSyncTree_,l,f)}let h=l;c.length>0&&(h=Gi(n,l)),ln(n.eventQueue_,h,c)}function yy(n,e){Hh(n,"connected",e),e===!1&&OR(n)}function NR(n,e){ht(e,(t,s)=>{Hh(n,t,s)})}function Hh(n,e,t){const s=new xe("/.info/"+e),o=it(t);n.infoData_.updateSnapshot(s,o);const l=Bl(n.infoSyncTree_,s,o);ln(n.eventQueue_,s,l)}function Gh(n){return n.nextWriteId_++}function AR(n,e,t,s,o){Yl(n,"set",{path:e.toString(),value:t,priority:s});const l=Kl(n),c=it(t,s),h=Oh(n.serverSyncTree_,e),f=Hv(c,h,l),m=Gh(n),y=zv(n.serverSyncTree_,e,f,m,!0);ql(n.eventQueue_,y),n.server_.put(e.toString(),c.val(!0),(v,R)=>{const S=v==="ok";S||Et("set at "+e+" failed: "+v);const O=gr(n.serverSyncTree_,m,!S);ln(n.eventQueue_,e,O),zd(n,o,v,R)});const _=Kh(n,e);Gi(n,_),ln(n.eventQueue_,_,[])}function DR(n,e,t,s){Yl(n,"update",{path:e.toString(),value:t});let o=!0;const l=Kl(n),c={};if(ht(t,(h,f)=>{o=!1,c[h]=Vv(We(e,h),it(f),n.serverSyncTree_,l)}),o)dt("update() called with empty data.  Don't do anything."),zd(n,s,"ok",void 0);else{const h=Gh(n),f=tR(n.serverSyncTree_,e,c,h);ql(n.eventQueue_,f),n.server_.merge(e.toString(),t,(m,y)=>{const _=m==="ok";_||Et("update at "+e+" failed: "+m);const v=gr(n.serverSyncTree_,h,!_),R=v.length>0?Gi(n,e):e;ln(n.eventQueue_,R,v),zd(n,s,m,y)}),ht(t,m=>{const y=Kh(n,We(e,m));Gi(n,y)}),ln(n.eventQueue_,e,[])}}function OR(n){Yl(n,"onDisconnectEvents");const e=Kl(n),t=gl();Nd(n.onDisconnect_,Ce(),(o,l)=>{const c=Vv(o,l,n.serverSyncTree_,e);xv(t,o,c)});let s=[];Nd(t,Ce(),(o,l)=>{s=s.concat(Bl(n.serverSyncTree_,o,l));const c=Kh(n,o);Gi(n,c)}),n.onDisconnect_=gl(),ln(n.eventQueue_,Ce(),s)}function LR(n,e,t){let s;pe(e._path)===".info"?s=py(n.infoSyncTree_,e,t):s=py(n.serverSyncTree_,e,t),Xv(n.eventQueue_,e._path,s)}function MR(n,e,t){let s;pe(e._path)===".info"?s=Ud(n.infoSyncTree_,e,t):s=Ud(n.serverSyncTree_,e,t),Xv(n.eventQueue_,e._path,s)}function FR(n){n.persistentConnection_&&n.persistentConnection_.interrupt(xR)}function Yl(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),dt(t,...e)}function zd(n,e,t,s){e&&es(()=>{if(t==="ok")e(null);else{const o=(t||"error").toUpperCase();let l=o;s&&(l+=": "+s);const c=new Error(l);c.code=o,e(c)}})}function tw(n,e,t){return Oh(n.serverSyncTree_,e,t)||oe.EMPTY_NODE}function qh(n,e=n.transactionQueueTree_){if(e||Ql(n,e),ns(e)){const t=rw(n,e);W(t.length>0,"Sending zero length transaction queue"),t.every(o=>o.status===0)&&UR(n,Po(e),t)}else qv(e)&&Hl(e,t=>{qh(n,t)})}function UR(n,e,t){const s=t.map(m=>m.currentWriteId),o=tw(n,e,s);let l=o;const c=o.hash();for(let m=0;m<t.length;m++){const y=t[m];W(y.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),y.status=1,y.retryCount++;const _=Pt(e,y.path);l=l.updateChild(_,y.currentOutputSnapshotRaw)}const h=l.val(!0),f=e;n.server_.put(f.toString(),h,m=>{Yl(n,"transaction put response",{path:f.toString(),status:m});let y=[];if(m==="ok"){const _=[];for(let v=0;v<t.length;v++)t[v].status=2,y=y.concat(gr(n.serverSyncTree_,t[v].currentWriteId)),t[v].onComplete&&_.push(()=>t[v].onComplete(null,!0,t[v].currentOutputSnapshotResolved)),t[v].unwatcher();Ql(n,$h(n.transactionQueueTree_,e)),qh(n,n.transactionQueueTree_),ln(n.eventQueue_,e,y);for(let v=0;v<_.length;v++)es(_[v])}else{if(m==="datastale")for(let _=0;_<t.length;_++)t[_].status===3?t[_].status=4:t[_].status=0;else{Et("transaction at "+f.toString()+" failed: "+m);for(let _=0;_<t.length;_++)t[_].status=4,t[_].abortReason=m}Gi(n,e)}},c)}function Gi(n,e){const t=nw(n,e),s=Po(t),o=rw(n,t);return jR(n,o,s),s}function jR(n,e,t){if(e.length===0)return;const s=[];let o=[];const c=e.filter(h=>h.status===0).map(h=>h.currentWriteId);for(let h=0;h<e.length;h++){const f=e[h],m=Pt(t,f.path);let y=!1,_;if(W(m!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),f.status===4)y=!0,_=f.abortReason,o=o.concat(gr(n.serverSyncTree_,f.currentWriteId,!0));else if(f.status===0)if(f.retryCount>=RR)y=!0,_="maxretry",o=o.concat(gr(n.serverSyncTree_,f.currentWriteId,!0));else{const v=tw(n,f.path,c);f.currentInputSnapshot=v;const R=e[h].update(v.val());if(R!==void 0){Gl("transaction failed: Data returned ",R,f.path);let S=it(R);typeof R=="object"&&R!=null&&En(R,".priority")||(S=S.updatePriority(v.getPriority()));const D=f.currentWriteId,j=Kl(n),H=Hv(S,v,j);f.currentOutputSnapshotRaw=S,f.currentOutputSnapshotResolved=H,f.currentWriteId=Gh(n),c.splice(c.indexOf(D),1),o=o.concat(zv(n.serverSyncTree_,f.path,H,f.currentWriteId,f.applyLocally)),o=o.concat(gr(n.serverSyncTree_,D,!0))}else y=!0,_="nodata",o=o.concat(gr(n.serverSyncTree_,f.currentWriteId,!0))}ln(n.eventQueue_,t,o),o=[],y&&(e[h].status=2,(function(v){setTimeout(v,Math.floor(0))})(e[h].unwatcher),e[h].onComplete&&(_==="nodata"?s.push(()=>e[h].onComplete(null,!1,e[h].currentInputSnapshot)):s.push(()=>e[h].onComplete(new Error(_),!1,null))))}Ql(n,n.transactionQueueTree_);for(let h=0;h<s.length;h++)es(s[h]);qh(n,n.transactionQueueTree_)}function nw(n,e){let t,s=n.transactionQueueTree_;for(t=pe(e);t!==null&&ns(s)===void 0;)s=$h(s,t),e=Ne(e),t=pe(e);return s}function rw(n,e){const t=[];return iw(n,e,t),t.sort((s,o)=>s.order-o.order),t}function iw(n,e,t){const s=ns(e);if(s)for(let o=0;o<s.length;o++)t.push(s[o]);Hl(e,o=>{iw(n,o,t)})}function Ql(n,e){const t=ns(e);if(t){let s=0;for(let o=0;o<t.length;o++)t[o].status!==2&&(t[s]=t[o],s++);t.length=s,Gv(e,t.length>0?t:void 0)}Hl(e,s=>{Ql(n,s)})}function Kh(n,e){const t=Po(nw(n,e)),s=$h(n.transactionQueueTree_,e);return mR(s,o=>{pd(n,o)}),pd(n,s),Kv(s,o=>{pd(n,o)}),t}function pd(n,e){const t=ns(e);if(t){const s=[];let o=[],l=-1;for(let c=0;c<t.length;c++)t[c].status===3||(t[c].status===1?(W(l===c-1,"All SENT items should be at beginning of queue."),l=c,t[c].status=3,t[c].abortReason="set"):(W(t[c].status===0,"Unexpected transaction status in abort"),t[c].unwatcher(),o=o.concat(gr(n.serverSyncTree_,t[c].currentWriteId,!0)),t[c].onComplete&&s.push(t[c].onComplete.bind(null,new Error("set"),!1,null))));l===-1?Gv(e,void 0):t.length=l+1,ln(n.eventQueue_,Po(e),o);for(let c=0;c<s.length;c++)es(s[c])}}/**
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
 */function zR(n){let e="";const t=n.split("/");for(let s=0;s<t.length;s++)if(t[s].length>0){let o=t[s];try{o=decodeURIComponent(o.replace(/\+/g," "))}catch{}e+="/"+o}return e}function WR(n){const e={};n.charAt(0)==="?"&&(n=n.substring(1));for(const t of n.split("&")){if(t.length===0)continue;const s=t.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):Et(`Invalid query segment '${t}' in query '${n}'`)}return e}const _y=function(n,e){const t=$R(n),s=t.namespace;t.domain==="firebase.com"&&zn(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&t.domain!=="localhost"&&zn("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||J1();const o=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new cv(t.host,t.secure,s,o,e,"",s!==t.subdomain),path:new xe(t.pathString)}},$R=function(n){let e="",t="",s="",o="",l="",c=!0,h="https",f=443;if(typeof n=="string"){let m=n.indexOf("//");m>=0&&(h=n.substring(0,m-1),n=n.substring(m+2));let y=n.indexOf("/");y===-1&&(y=n.length);let _=n.indexOf("?");_===-1&&(_=n.length),e=n.substring(0,Math.min(y,_)),y<_&&(o=zR(n.substring(y,_)));const v=WR(n.substring(Math.min(n.length,_)));m=e.indexOf(":"),m>=0?(c=h==="https"||h==="wss",f=parseInt(e.substring(m+1),10)):m=e.length;const R=e.slice(0,m);if(R.toLowerCase()==="localhost")t="localhost";else if(R.split(".").length<=2)t=R;else{const S=e.indexOf(".");s=e.substring(0,S).toLowerCase(),t=e.substring(S+1),l=s}"ns"in v&&(l=v.ns)}return{host:e,port:f,domain:t,subdomain:s,secure:c,scheme:h,pathString:o,namespace:l}};/**
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
 */const vy="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",BR=(function(){let n=0;const e=[];return function(t){const s=t===n;n=t;let o;const l=new Array(8);for(o=7;o>=0;o--)l[o]=vy.charAt(t%64),t=Math.floor(t/64);W(t===0,"Cannot push at time == 0");let c=l.join("");if(s){for(o=11;o>=0&&e[o]===63;o--)e[o]=0;e[o]++}else for(o=0;o<12;o++)e[o]=Math.floor(Math.random()*64);for(o=0;o<12;o++)c+=vy.charAt(e[o]);return W(c.length===20,"nextPushId: Length should be 20."),c}})();/**
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
 */class VR{constructor(e,t,s,o){this.eventType=e,this.eventRegistration=t,this.snapshot=s,this.prevName=o}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+st(this.snapshot.exportVal())}}class HR{constructor(e,t,s){this.eventRegistration=e,this.error=t,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class GR{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return W(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class Yh{constructor(e,t,s,o){this._repo=e,this._path=t,this._queryParams=s,this._orderByCalled=o}get key(){return ye(this._path)?null:wh(this._path)}get ref(){return new Sr(this._repo,this._path)}get _queryIdentifier(){const e=ry(this._queryParams),t=gh(e);return t==="{}"?"default":t}get _queryObject(){return ry(this._queryParams)}isEqual(e){if(e=ot(e),!(e instanceof Yh))return!1;const t=this._repo===e._repo,s=Eh(this._path,e._path),o=this._queryIdentifier===e._queryIdentifier;return t&&s&&o}toJSON(){return this.toString()}toString(){return this._repo.toString()+OT(this._path)}}class Sr extends Yh{constructor(e,t){super(e,t,new Ih,!1)}get parent(){const e=vv(this._path);return e===null?null:new Sr(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class kl{constructor(e,t,s){this._node=e,this.ref=t,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new xe(e),s=Eo(this.ref,e);return new kl(this._node.getChild(t),s,$e)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,o)=>e(new kl(o,Eo(this.ref,s),$e)))}hasChild(e){const t=new xe(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Le(n,e){return n=ot(n),n._checkNotDeleted("ref"),e!==void 0?Eo(n._root,e):n._root}function Eo(n,e){return n=ot(n),pe(n._path)===null?SR("child","path",e):Jv("child","path",e),new Sr(n._repo,We(n._path,e))}function Xs(n,e){n=ot(n),Vh("push",n._path),Qv("push",e,n._path,!0);const t=ew(n._repo),s=BR(t),o=Eo(n,s),l=Eo(n,s);let c;return e!=null?c=sw(l,e).then(()=>l):c=Promise.resolve(l),o.then=c.then.bind(c),o.catch=c.then.bind(c,void 0),o}function Pi(n){return Vh("remove",n._path),sw(n,null)}function sw(n,e){n=ot(n),Vh("set",n._path),Qv("set",e,n._path,!1);const t=new To;return AR(n._repo,n._path,e,null,t.wrapCallback(()=>{})),t.promise}function ur(n,e){CR("update",e,n._path);const t=new To;return DR(n._repo,n._path,e,t.wrapCallback(()=>{})),t.promise}class Qh{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,t){const s=t._queryParams.getIndex();return new VR("value",this,new kl(e.snapshotNode,new Sr(t._repo,t._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new HR(this,e,t):null}matches(e){return e instanceof Qh?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function qR(n,e,t,s,o){const l=new GR(t,void 0),c=new Qh(l);return LR(n._repo,n,c),()=>MR(n._repo,n,c)}function Zs(n,e,t,s){return qR(n,"value",e)}Gx(Sr);Xx(Sr);/**
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
 */const KR="FIREBASE_DATABASE_EMULATOR_HOST",Wd={};let YR=!1;function QR(n,e,t,s){const o=e.lastIndexOf(":"),l=e.substring(0,o),c=Ji(l);n.repoInfo_=new cv(e,c,n.repoInfo_.namespace,n.repoInfo_.webSocketOnly,n.repoInfo_.nodeAdmin,n.repoInfo_.persistenceKey,n.repoInfo_.includeNamespaceInQueryParams,!0,t),s&&(n.authTokenProvider_=s)}function JR(n,e,t,s,o){let l=s||n.options.databaseURL;l===void 0&&(n.options.projectId||zn("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),dt("Using default host for project ",n.options.projectId),l=`${n.options.projectId}-default-rtdb.firebaseio.com`);let c=_y(l,o),h=c.repoInfo,f;typeof process<"u"&&jg&&(f=jg[KR]),f?(l=`http://${f}?ns=${h.namespace}`,c=_y(l,o),h=c.repoInfo):c.repoInfo.secure;const m=new lT(n.name,n.options,e);kR("Invalid Firebase Database URL",c),ye(c.path)||zn("Database URL must point to the root of a Firebase Database (not including a child path).");const y=ZR(h,n,m,new aT(n,t));return new eb(y,n)}function XR(n,e){const t=Wd[e];(!t||t[n.key]!==n)&&zn(`Database ${e}(${n.repoInfo_}) has already been deleted.`),FR(n),delete t[n.key]}function ZR(n,e,t,s){let o=Wd[e.name];o||(o={},Wd[e.name]=o);let l=o[n.toURLString()];return l&&zn("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),l=new bR(n,YR,t,s),o[n.toURLString()]=l,l}class eb{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(PR(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Sr(this._repo,Ce())),this._rootInternal}_delete(){return this._rootInternal!==null&&(XR(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&zn("Cannot call "+e+" on a deleted database.")}}function tb(n=lh(),e){const t=ei(n,"database").getImmediate({identifier:e});if(!t._instanceStarted){const s=qS("database");s&&nb(t,...s)}return t}function nb(n,e,t,s={}){n=ot(n),n._checkNotDeleted("useEmulator");const o=`${e}:${t}`,l=n._repoInternal;if(n._instanceStarted){if(o===n._repoInternal.repoInfo_.host&&wr(s,l.repoInfo_.emulatorOptions))return;zn("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let c;if(l.repoInfo_.nodeAdmin)s.mockUserToken&&zn('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),c=new el(el.OWNER);else if(s.mockUserToken){const h=typeof s.mockUserToken=="string"?s.mockUserToken:KS(s.mockUserToken,n.app.options.projectId);c=new el(h)}Ji(e)&&(g_(e),y_("Database",!0)),QR(l,o,s,c)}/**
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
 */function rb(n){H1(Zi),vn(new an("database",(e,{instanceIdentifier:t})=>{const s=e.getProvider("app").getImmediate(),o=e.getProvider("auth-internal"),l=e.getProvider("app-check-internal");return JR(s,o,l,t)},"PUBLIC").setMultipleInstances(!0)),Gt(zg,Wg,n),Gt(zg,Wg,"esm2020")}Mn.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)};Mn.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)};rb();function ow(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const ib=ow,aw=new Zr("auth","Firebase",ow());/**
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
 */const Il=new Fl("@firebase/auth");function sb(n,...e){Il.logLevel<=Te.WARN&&Il.warn(`Auth (${Zi}): ${n}`,...e)}function tl(n,...e){Il.logLevel<=Te.ERROR&&Il.error(`Auth (${Zi}): ${n}`,...e)}/**
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
 */function un(n,...e){throw Jh(n,...e)}function yn(n,...e){return Jh(n,...e)}function lw(n,e,t){const s={...ib(),[e]:t};return new Zr("auth","Firebase",s).create(e,{appName:n.name})}function Fn(n){return lw(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Jh(n,...e){if(typeof n!="string"){const t=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=n.name),n._errorFactory.create(t,...s)}return aw.create(n,...e)}function se(n,e,...t){if(!n)throw Jh(e,...t)}function Dn(n){const e="INTERNAL ASSERTION FAILED: "+n;throw tl(e),new Error(e)}function Wn(n,e){n||Dn(e)}/**
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
 */function $d(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.href)||""}function ob(){return wy()==="http:"||wy()==="https:"}function wy(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.protocol)||null}/**
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
 */function ab(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(ob()||__()||"connection"in navigator)?navigator.onLine:!0}function lb(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class No{constructor(e,t){this.shortDelay=e,this.longDelay=t,Wn(t>e,"Short delay should be less than long delay!"),this.isMobile=oh()||v_()}get(){return ab()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Xh(n,e){Wn(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class uw{static initialize(e,t,s){this.fetchImpl=e,t&&(this.headersImpl=t),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Dn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Dn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Dn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const ub={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const cb=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],db=new No(3e4,6e4);function kr(n,e){return n.tenantId&&!e.tenantId?{...e,tenantId:n.tenantId}:e}async function Ir(n,e,t,s,o={}){return cw(n,o,async()=>{let l={},c={};s&&(e==="GET"?c=s:l={body:JSON.stringify(s)});const h=Xi({key:n.config.apiKey,...c}).slice(1),f=await n._getAdditionalHeaders();f["Content-Type"]="application/json",n.languageCode&&(f["X-Firebase-Locale"]=n.languageCode);const m={method:e,headers:f,...l};return JS()||(m.referrerPolicy="no-referrer"),n.emulatorConfig&&Ji(n.emulatorConfig.host)&&(m.credentials="include"),uw.fetch()(await dw(n,n.config.apiHost,t,h),m)})}async function cw(n,e,t){n._canInitEmulator=!1;const s={...ub,...e};try{const o=new fb(n),l=await Promise.race([t(),o.promise]);o.clearNetworkTimeout();const c=await l.json();if("needConfirmation"in c)throw Ka(n,"account-exists-with-different-credential",c);if(l.ok&&!("errorMessage"in c))return c;{const h=l.ok?c.errorMessage:c.error.message,[f,m]=h.split(" : ");if(f==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ka(n,"credential-already-in-use",c);if(f==="EMAIL_EXISTS")throw Ka(n,"email-already-in-use",c);if(f==="USER_DISABLED")throw Ka(n,"user-disabled",c);const y=s[f]||f.toLowerCase().replace(/[_\s]+/g,"-");if(m)throw lw(n,y,m);un(n,y)}}catch(o){if(o instanceof wn)throw o;un(n,"network-request-failed",{message:String(o)})}}async function Ao(n,e,t,s,o={}){const l=await Ir(n,e,t,s,o);return"mfaPendingCredential"in l&&un(n,"multi-factor-auth-required",{_serverResponse:l}),l}async function dw(n,e,t,s){const o=`${e}${t}?${s}`,l=n,c=l.config.emulator?Xh(n.config,o):`${n.config.apiScheme}://${o}`;return cb.includes(t)&&(await l._persistenceManagerAvailable,l._getPersistenceType()==="COOKIE")?l._getPersistence()._getFinalTarget(c).toString():c}function hb(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class fb{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,s)=>{this.timer=setTimeout(()=>s(yn(this.auth,"network-request-failed")),db.get())})}}function Ka(n,e,t){const s={appName:n.name};t.email&&(s.email=t.email),t.phoneNumber&&(s.phoneNumber=t.phoneNumber);const o=yn(n,e,s);return o.customData._tokenResponse=t,o}function Ey(n){return n!==void 0&&n.enterprise!==void 0}class pb{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return hb(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function mb(n,e){return Ir(n,"GET","/v2/recaptchaConfig",kr(n,e))}/**
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
 */async function gb(n,e){return Ir(n,"POST","/v1/accounts:delete",e)}async function Tl(n,e){return Ir(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function co(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function yb(n,e=!1){const t=ot(n),s=await t.getIdToken(e),o=Zh(s);se(o&&o.exp&&o.auth_time&&o.iat,t.auth,"internal-error");const l=typeof o.firebase=="object"?o.firebase:void 0,c=l==null?void 0:l.sign_in_provider;return{claims:o,token:s,authTime:co(md(o.auth_time)),issuedAtTime:co(md(o.iat)),expirationTime:co(md(o.exp)),signInProvider:c||null,signInSecondFactor:(l==null?void 0:l.sign_in_second_factor)||null}}function md(n){return Number(n)*1e3}function Zh(n){const[e,t,s]=n.split(".");if(e===void 0||t===void 0||s===void 0)return tl("JWT malformed, contained fewer than 3 sections"),null;try{const o=al(t);return o?JSON.parse(o):(tl("Failed to decode base64 JWT payload"),null)}catch(o){return tl("Caught error parsing JWT payload as JSON",o==null?void 0:o.toString()),null}}function Cy(n){const e=Zh(n);return se(e,"internal-error"),se(typeof e.exp<"u","internal-error"),se(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Co(n,e,t=!1){if(t)return e;try{return await e}catch(s){throw s instanceof wn&&_b(s)&&n.auth.currentUser===n&&await n.auth.signOut(),s}}function _b({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class vb{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const s=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Bd{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=co(this.lastLoginAt),this.creationTime=co(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function xl(n){var _;const e=n.auth,t=await n.getIdToken(),s=await Co(n,Tl(e,{idToken:t}));se(s==null?void 0:s.users.length,e,"internal-error");const o=s.users[0];n._notifyReloadListener(o);const l=(_=o.providerUserInfo)!=null&&_.length?hw(o.providerUserInfo):[],c=Eb(n.providerData,l),h=n.isAnonymous,f=!(n.email&&o.passwordHash)&&!(c!=null&&c.length),m=h?f:!1,y={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:c,metadata:new Bd(o.createdAt,o.lastLoginAt),isAnonymous:m};Object.assign(n,y)}async function wb(n){const e=ot(n);await xl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Eb(n,e){return[...n.filter(s=>!e.some(o=>o.providerId===s.providerId)),...e]}function hw(n){return n.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
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
 */async function Cb(n,e){const t=await cw(n,{},async()=>{const s=Xi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:l}=n.config,c=await dw(n,o,"/v1/token",`key=${l}`),h=await n._getAdditionalHeaders();h["Content-Type"]="application/x-www-form-urlencoded";const f={method:"POST",headers:h,body:s};return n.emulatorConfig&&Ji(n.emulatorConfig.host)&&(f.credentials="include"),uw.fetch()(c,f)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function Sb(n,e){return Ir(n,"POST","/v2/accounts:revokeToken",kr(n,e))}/**
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
 */class Ui{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){se(e.idToken,"internal-error"),se(typeof e.idToken<"u","internal-error"),se(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Cy(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){se(e.length!==0,"internal-error");const t=Cy(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(se(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:s,refreshToken:o,expiresIn:l}=await Cb(e,t);this.updateTokensAndExpiration(s,o,Number(l))}updateTokensAndExpiration(e,t,s){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,t){const{refreshToken:s,accessToken:o,expirationTime:l}=t,c=new Ui;return s&&(se(typeof s=="string","internal-error",{appName:e}),c.refreshToken=s),o&&(se(typeof o=="string","internal-error",{appName:e}),c.accessToken=o),l&&(se(typeof l=="number","internal-error",{appName:e}),c.expirationTime=l),c}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ui,this.toJSON())}_performRefresh(){return Dn("not implemented")}}/**
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
 */function cr(n,e){se(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class sn{constructor({uid:e,auth:t,stsTokenManager:s,...o}){this.providerId="firebase",this.proactiveRefresh=new vb(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new Bd(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){const t=await Co(this,this.stsTokenManager.getToken(this.auth,e));return se(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return yb(this,e)}reload(){return wb(this)}_assign(e){this!==e&&(se(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new sn({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){se(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),t&&await xl(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Vt(this.auth.app))return Promise.reject(Fn(this.auth));const e=await this.getIdToken();return await Co(this,gb(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const s=t.displayName??void 0,o=t.email??void 0,l=t.phoneNumber??void 0,c=t.photoURL??void 0,h=t.tenantId??void 0,f=t._redirectEventId??void 0,m=t.createdAt??void 0,y=t.lastLoginAt??void 0,{uid:_,emailVerified:v,isAnonymous:R,providerData:S,stsTokenManager:O}=t;se(_&&O,e,"internal-error");const D=Ui.fromJSON(this.name,O);se(typeof _=="string",e,"internal-error"),cr(s,e.name),cr(o,e.name),se(typeof v=="boolean",e,"internal-error"),se(typeof R=="boolean",e,"internal-error"),cr(l,e.name),cr(c,e.name),cr(h,e.name),cr(f,e.name),cr(m,e.name),cr(y,e.name);const j=new sn({uid:_,auth:e,email:o,emailVerified:v,displayName:s,isAnonymous:R,photoURL:c,phoneNumber:l,tenantId:h,stsTokenManager:D,createdAt:m,lastLoginAt:y});return S&&Array.isArray(S)&&(j.providerData=S.map(H=>({...H}))),f&&(j._redirectEventId=f),j}static async _fromIdTokenResponse(e,t,s=!1){const o=new Ui;o.updateFromServerResponse(t);const l=new sn({uid:t.localId,auth:e,stsTokenManager:o,isAnonymous:s});return await xl(l),l}static async _fromGetAccountInfoResponse(e,t,s){const o=t.users[0];se(o.localId!==void 0,"internal-error");const l=o.providerUserInfo!==void 0?hw(o.providerUserInfo):[],c=!(o.email&&o.passwordHash)&&!(l!=null&&l.length),h=new Ui;h.updateFromIdToken(s);const f=new sn({uid:o.localId,auth:e,stsTokenManager:h,isAnonymous:c}),m={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:l,metadata:new Bd(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!(l!=null&&l.length)};return Object.assign(f,m),f}}/**
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
 */const Sy=new Map;function On(n){Wn(n instanceof Function,"Expected a class definition");let e=Sy.get(n);return e?(Wn(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Sy.set(n,e),e)}/**
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
 */class fw{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}fw.type="NONE";const ky=fw;/**
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
 */function nl(n,e,t){return`firebase:${n}:${e}:${t}`}class ji{constructor(e,t,s){this.persistence=e,this.auth=t,this.userKey=s;const{config:o,name:l}=this.auth;this.fullUserKey=nl(this.userKey,o.apiKey,l),this.fullPersistenceKey=nl("persistence",o.apiKey,l),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await Tl(this.auth,{idToken:e}).catch(()=>{});return t?sn._fromGetAccountInfoResponse(this.auth,t,e):null}return sn._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,s="authUser"){if(!t.length)return new ji(On(ky),e,s);const o=(await Promise.all(t.map(async m=>{if(await m._isAvailable())return m}))).filter(m=>m);let l=o[0]||On(ky);const c=nl(s,e.config.apiKey,e.name);let h=null;for(const m of t)try{const y=await m._get(c);if(y){let _;if(typeof y=="string"){const v=await Tl(e,{idToken:y}).catch(()=>{});if(!v)break;_=await sn._fromGetAccountInfoResponse(e,v,y)}else _=sn._fromJSON(e,y);m!==l&&(h=_),l=m;break}}catch{}const f=o.filter(m=>m._shouldAllowMigration);return!l._shouldAllowMigration||!f.length?new ji(l,e,s):(l=f[0],h&&await l._set(c,h.toJSON()),await Promise.all(t.map(async m=>{if(m!==l)try{await m._remove(c)}catch{}})),new ji(l,e,s))}}/**
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
 */function Iy(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(yw(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(pw(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(vw(e))return"Blackberry";if(ww(e))return"Webos";if(mw(e))return"Safari";if((e.includes("chrome/")||gw(e))&&!e.includes("edge/"))return"Chrome";if(_w(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=n.match(t);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function pw(n=Ct()){return/firefox\//i.test(n)}function mw(n=Ct()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function gw(n=Ct()){return/crios\//i.test(n)}function yw(n=Ct()){return/iemobile/i.test(n)}function _w(n=Ct()){return/android/i.test(n)}function vw(n=Ct()){return/blackberry/i.test(n)}function ww(n=Ct()){return/webos/i.test(n)}function ef(n=Ct()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function kb(n=Ct()){var e;return ef(n)&&!!((e=window.navigator)!=null&&e.standalone)}function Ib(){return XS()&&document.documentMode===10}function Ew(n=Ct()){return ef(n)||_w(n)||ww(n)||vw(n)||/windows phone/i.test(n)||yw(n)}/**
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
 */function Cw(n,e=[]){let t;switch(n){case"Browser":t=Iy(Ct());break;case"Worker":t=`${Iy(Ct())}-${n}`;break;default:t=n}const s=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Zi}/${s}`}/**
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
 */class Tb{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const s=l=>new Promise((c,h)=>{try{const f=e(l);c(f)}catch(f){h(f)}});s.onAbort=t,this.queue.push(s);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const s of this.queue)await s(e),s.onAbort&&t.push(s.onAbort)}catch(s){t.reverse();for(const o of t)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */async function xb(n,e={}){return Ir(n,"GET","/v2/passwordPolicy",kr(n,e))}/**
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
 */const Rb=6;class bb{constructor(e){var s;const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??Rb,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((s=e.allowedNonAlphanumericCharacters)==null?void 0:s.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const s=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;s&&(t.meetsMinPasswordLength=e.length>=s),o&&(t.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let s;for(let o=0;o<e.length;o++)s=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(t,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,t,s,o,l){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=l))}}/**
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
 */class Pb{constructor(e,t,s,o){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=s,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ty(this),this.idTokenSubscription=new Ty(this),this.beforeStateQueue=new Tb(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=aw,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion,this._persistenceManagerAvailable=new Promise(l=>this._resolvePersistenceManagerAvailable=l)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=On(t)),this._initializationPromise=this.queue(async()=>{var s,o,l;if(!this._deleted&&(this.persistenceManager=await ji.create(this,e),(s=this._resolvePersistenceManagerAvailable)==null||s.call(this),!this._deleted)){if((o=this._popupRedirectResolver)!=null&&o._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((l=this.currentUser)==null?void 0:l.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Tl(this,{idToken:e}),s=await sn._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(s)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var l;if(Vt(this.app)){const c=this.app.settings.authIdToken;return c?new Promise(h=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(c).then(h,h))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let s=t,o=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const c=(l=this.redirectUser)==null?void 0:l._redirectEventId,h=s==null?void 0:s._redirectEventId,f=await this.tryRedirectSignIn(e);(!c||c===h)&&(f!=null&&f.user)&&(s=f.user,o=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(s)}catch(c){s=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(c))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return se(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await xl(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=lb()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Vt(this.app))return Promise.reject(Fn(this));const t=e?ot(e):null;return t&&se(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&se(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Vt(this.app)?Promise.reject(Fn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Vt(this.app)?Promise.reject(Fn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(On(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await xb(this),t=new bb(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Zr("auth","Firebase",e())}onAuthStateChanged(e,t,s){return this.registerStateListener(this.authStateSubscription,e,t,s)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,s){return this.registerStateListener(this.idTokenSubscription,e,t,s)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(s.tenantId=this.tenantId),await Sb(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,t){const s=await this.getOrInitRedirectPersistenceManager(t);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&On(e)||this._popupRedirectResolver;se(t,this,"argument-error"),this.redirectPersistenceManager=await ji.create(this,[On(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,s;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)==null?void 0:t._redirectEventId)===e?this._currentUser:((s=this.redirectUser)==null?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((t=this.currentUser)==null?void 0:t.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,s,o){if(this._deleted)return()=>{};const l=typeof t=="function"?t:t.next.bind(t);let c=!1;const h=this._isInitialized?Promise.resolve():this._initializationPromise;if(se(h,this,"internal-error"),h.then(()=>{c||l(this.currentUser)}),typeof t=="function"){const f=e.addObserver(t,s,o);return()=>{c=!0,f()}}else{const f=e.addObserver(t);return()=>{c=!0,f()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return se(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Cw(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var o;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await((o=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:o.getHeartbeatsHeader());t&&(e["X-Firebase-Client"]=t);const s=await this._getAppCheckToken();return s&&(e["X-Firebase-AppCheck"]=s),e}async _getAppCheckToken(){var t;if(Vt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:t.getToken());return e!=null&&e.error&&sb(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function ri(n){return ot(n)}class Ty{constructor(e){this.auth=e,this.observer=null,this.addObserver=ak(t=>this.observer=t)}get next(){return se(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Jl={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Nb(n){Jl=n}function Sw(n){return Jl.loadJS(n)}function Ab(){return Jl.recaptchaEnterpriseScript}function Db(){return Jl.gapiScript}function Ob(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class Lb{constructor(){this.enterprise=new Mb}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class Mb{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const Fb="recaptcha-enterprise",kw="NO_RECAPTCHA";class Ub{constructor(e){this.type=Fb,this.auth=ri(e)}async verify(e="verify",t=!1){async function s(l){if(!t){if(l.tenantId==null&&l._agentRecaptchaConfig!=null)return l._agentRecaptchaConfig.siteKey;if(l.tenantId!=null&&l._tenantRecaptchaConfigs[l.tenantId]!==void 0)return l._tenantRecaptchaConfigs[l.tenantId].siteKey}return new Promise(async(c,h)=>{mb(l,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(f=>{if(f.recaptchaKey===void 0)h(new Error("recaptcha Enterprise site key undefined"));else{const m=new pb(f);return l.tenantId==null?l._agentRecaptchaConfig=m:l._tenantRecaptchaConfigs[l.tenantId]=m,c(m.siteKey)}}).catch(f=>{h(f)})})}function o(l,c,h){const f=window.grecaptcha;Ey(f)?f.enterprise.ready(()=>{f.enterprise.execute(l,{action:e}).then(m=>{c(m)}).catch(()=>{c(kw)})}):h(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new Lb().execute("siteKey",{action:"verify"}):new Promise((l,c)=>{s(this.auth).then(h=>{if(!t&&Ey(window.grecaptcha))o(h,l,c);else{if(typeof window>"u"){c(new Error("RecaptchaVerifier is only supported in browser"));return}let f=Ab();f.length!==0&&(f+=h),Sw(f).then(()=>{o(h,l,c)}).catch(m=>{c(m)})}}).catch(h=>{c(h)})})}}async function xy(n,e,t,s=!1,o=!1){const l=new Ub(n);let c;if(o)c=kw;else try{c=await l.verify(t)}catch{c=await l.verify(t,!0)}const h={...e};if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in h){const f=h.phoneEnrollmentInfo.phoneNumber,m=h.phoneEnrollmentInfo.recaptchaToken;Object.assign(h,{phoneEnrollmentInfo:{phoneNumber:f,recaptchaToken:m,captchaResponse:c,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in h){const f=h.phoneSignInInfo.recaptchaToken;Object.assign(h,{phoneSignInInfo:{recaptchaToken:f,captchaResponse:c,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return h}return s?Object.assign(h,{captchaResp:c}):Object.assign(h,{captchaResponse:c}),Object.assign(h,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(h,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),h}async function Vd(n,e,t,s,o){var l;if((l=n._getRecaptchaConfig())!=null&&l.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const c=await xy(n,e,t,t==="getOobCode");return s(n,c)}else return s(n,e).catch(async c=>{if(c.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const h=await xy(n,e,t,t==="getOobCode");return s(n,h)}else return Promise.reject(c)})}/**
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
 */function jb(n,e){const t=ei(n,"auth");if(t.isInitialized()){const o=t.getImmediate(),l=t.getOptions();if(wr(l,e??{}))return o;un(o,"already-initialized")}return t.initialize({options:e})}function zb(n,e){const t=(e==null?void 0:e.persistence)||[],s=(Array.isArray(t)?t:[t]).map(On);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function Wb(n,e,t){const s=ri(n);se(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const o=!1,l=Iw(e),{host:c,port:h}=$b(e),f=h===null?"":`:${h}`,m={url:`${l}//${c}${f}/`},y=Object.freeze({host:c,port:h,protocol:l.replace(":",""),options:Object.freeze({disableWarnings:o})});if(!s._canInitEmulator){se(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),se(wr(m,s.config.emulator)&&wr(y,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=m,s.emulatorConfig=y,s.settings.appVerificationDisabledForTesting=!0,Ji(c)?(g_(`${l}//${c}${f}`),y_("Auth",!0)):Bb()}function Iw(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function $b(n){const e=Iw(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const s=t[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(s);if(o){const l=o[1];return{host:l,port:Ry(s.substr(l.length+1))}}else{const[l,c]=s.split(":");return{host:l,port:Ry(c)}}}function Ry(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function Bb(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class tf{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Dn("not implemented")}_getIdTokenResponse(e){return Dn("not implemented")}_linkToIdToken(e,t){return Dn("not implemented")}_getReauthenticationResolver(e){return Dn("not implemented")}}async function Vb(n,e){return Ir(n,"POST","/v1/accounts:signUp",e)}/**
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
 */async function Hb(n,e){return Ao(n,"POST","/v1/accounts:signInWithPassword",kr(n,e))}/**
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
 */async function Gb(n,e){return Ao(n,"POST","/v1/accounts:signInWithEmailLink",kr(n,e))}async function qb(n,e){return Ao(n,"POST","/v1/accounts:signInWithEmailLink",kr(n,e))}/**
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
 */class So extends tf{constructor(e,t,s,o=null){super("password",s),this._email=e,this._password=t,this._tenantId=o}static _fromEmailAndPassword(e,t){return new So(e,t,"password")}static _fromEmailAndCode(e,t,s=null){return new So(e,t,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Vd(e,t,"signInWithPassword",Hb);case"emailLink":return Gb(e,{email:this._email,oobCode:this._password});default:un(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const s={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Vd(e,s,"signUpPassword",Vb);case"emailLink":return qb(e,{idToken:t,email:this._email,oobCode:this._password});default:un(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function zi(n,e){return Ao(n,"POST","/v1/accounts:signInWithIdp",kr(n,e))}/**
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
 */const Kb="http://localhost";class Jr extends tf{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Jr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):un("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:o,...l}=t;if(!s||!o)return null;const c=new Jr(s,o);return c.idToken=l.idToken||void 0,c.accessToken=l.accessToken||void 0,c.secret=l.secret,c.nonce=l.nonce,c.pendingToken=l.pendingToken||null,c}_getIdTokenResponse(e){const t=this.buildRequest();return zi(e,t)}_linkToIdToken(e,t){const s=this.buildRequest();return s.idToken=t,zi(e,s)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,zi(e,t)}buildRequest(){const e={requestUri:Kb,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Xi(t)}return e}}/**
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
 */function Yb(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Qb(n){const e=no(ro(n)).link,t=e?no(ro(e)).deep_link_id:null,s=no(ro(n)).deep_link_id;return(s?no(ro(s)).link:null)||s||t||e||n}class nf{constructor(e){const t=no(ro(e)),s=t.apiKey??null,o=t.oobCode??null,l=Yb(t.mode??null);se(s&&o&&l,"argument-error"),this.apiKey=s,this.operation=l,this.code=o,this.continueUrl=t.continueUrl??null,this.languageCode=t.lang??null,this.tenantId=t.tenantId??null}static parseLink(e){const t=Qb(e);try{return new nf(t)}catch{return null}}}/**
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
 */class rs{constructor(){this.providerId=rs.PROVIDER_ID}static credential(e,t){return So._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const s=nf.parseLink(t);return se(s,"argument-error"),So._fromEmailAndCode(e,s.code,s.tenantId)}}rs.PROVIDER_ID="password";rs.EMAIL_PASSWORD_SIGN_IN_METHOD="password";rs.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Tw{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Do extends Tw{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class hr extends Do{constructor(){super("facebook.com")}static credential(e){return Jr._fromParams({providerId:hr.PROVIDER_ID,signInMethod:hr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return hr.credentialFromTaggedObject(e)}static credentialFromError(e){return hr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return hr.credential(e.oauthAccessToken)}catch{return null}}}hr.FACEBOOK_SIGN_IN_METHOD="facebook.com";hr.PROVIDER_ID="facebook.com";/**
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
 */class fr extends Do{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Jr._fromParams({providerId:fr.PROVIDER_ID,signInMethod:fr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return fr.credentialFromTaggedObject(e)}static credentialFromError(e){return fr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:s}=e;if(!t&&!s)return null;try{return fr.credential(t,s)}catch{return null}}}fr.GOOGLE_SIGN_IN_METHOD="google.com";fr.PROVIDER_ID="google.com";/**
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
 */class pr extends Do{constructor(){super("github.com")}static credential(e){return Jr._fromParams({providerId:pr.PROVIDER_ID,signInMethod:pr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return pr.credentialFromTaggedObject(e)}static credentialFromError(e){return pr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return pr.credential(e.oauthAccessToken)}catch{return null}}}pr.GITHUB_SIGN_IN_METHOD="github.com";pr.PROVIDER_ID="github.com";/**
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
 */class mr extends Do{constructor(){super("twitter.com")}static credential(e,t){return Jr._fromParams({providerId:mr.PROVIDER_ID,signInMethod:mr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return mr.credentialFromTaggedObject(e)}static credentialFromError(e){return mr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:s}=e;if(!t||!s)return null;try{return mr.credential(t,s)}catch{return null}}}mr.TWITTER_SIGN_IN_METHOD="twitter.com";mr.PROVIDER_ID="twitter.com";/**
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
 */async function Jb(n,e){return Ao(n,"POST","/v1/accounts:signUp",kr(n,e))}/**
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
 */class Xr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,s,o=!1){const l=await sn._fromIdTokenResponse(e,s,o),c=by(s);return new Xr({user:l,providerId:c,_tokenResponse:s,operationType:t})}static async _forOperation(e,t,s){await e._updateTokensIfNecessary(s,!0);const o=by(s);return new Xr({user:e,providerId:o,_tokenResponse:s,operationType:t})}}function by(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */class Rl extends wn{constructor(e,t,s,o){super(t.code,t.message),this.operationType=s,this.user=o,Object.setPrototypeOf(this,Rl.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,t,s,o){return new Rl(e,t,s,o)}}function xw(n,e,t,s){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(l=>{throw l.code==="auth/multi-factor-auth-required"?Rl._fromErrorAndOperation(n,l,e,s):l})}async function Xb(n,e,t=!1){const s=await Co(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Xr._forOperation(n,"link",s)}/**
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
 */async function Zb(n,e,t=!1){const{auth:s}=n;if(Vt(s.app))return Promise.reject(Fn(s));const o="reauthenticate";try{const l=await Co(n,xw(s,o,e,n),t);se(l.idToken,s,"internal-error");const c=Zh(l.idToken);se(c,s,"internal-error");const{sub:h}=c;return se(n.uid===h,s,"user-mismatch"),Xr._forOperation(n,o,l)}catch(l){throw(l==null?void 0:l.code)==="auth/user-not-found"&&un(s,"user-mismatch"),l}}/**
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
 */async function Rw(n,e,t=!1){if(Vt(n.app))return Promise.reject(Fn(n));const s="signIn",o=await xw(n,s,e),l=await Xr._fromIdTokenResponse(n,s,o);return t||await n._updateCurrentUser(l.user),l}async function eP(n,e){return Rw(ri(n),e)}/**
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
 */async function bw(n){const e=ri(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function tP(n,e,t){if(Vt(n.app))return Promise.reject(Fn(n));const s=ri(n),c=await Vd(s,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Jb).catch(f=>{throw f.code==="auth/password-does-not-meet-requirements"&&bw(n),f}),h=await Xr._fromIdTokenResponse(s,"signIn",c);return await s._updateCurrentUser(h.user),h}function nP(n,e,t){return Vt(n.app)?Promise.reject(Fn(n)):eP(ot(n),rs.credential(e,t)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&bw(n),s})}function rP(n,e,t,s){return ot(n).onIdTokenChanged(e,t,s)}function iP(n,e,t){return ot(n).beforeAuthStateChanged(e,t)}function sP(n,e,t,s){return ot(n).onAuthStateChanged(e,t,s)}function oP(n){return ot(n).signOut()}const bl="__sak";/**
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
 */class Pw{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(bl,"1"),this.storage.removeItem(bl),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const aP=1e3,lP=10;class Nw extends Pw{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Ew(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const s=this.storage.getItem(t),o=this.localCache[t];s!==o&&e(t,o,s)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((c,h,f)=>{this.notifyListeners(c,f)});return}const s=e.key;t?this.detachListener():this.stopPolling();const o=()=>{const c=this.storage.getItem(s);!t&&this.localCache[s]===c||this.notifyListeners(s,c)},l=this.storage.getItem(s);Ib()&&l!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,lP):o()}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:s}),!0)})},aP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Nw.type="LOCAL";const uP=Nw;/**
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
 */class Aw extends Pw{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Aw.type="SESSION";const Dw=Aw;/**
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
 */function cP(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class Xl{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(o=>o.isListeningto(e));if(t)return t;const s=new Xl(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:s,eventType:o,data:l}=t.data,c=this.handlersMap[o];if(!(c!=null&&c.size))return;t.ports[0].postMessage({status:"ack",eventId:s,eventType:o});const h=Array.from(c).map(async m=>m(t.origin,l)),f=await cP(h);t.ports[0].postMessage({status:"done",eventId:s,eventType:o,response:f})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Xl.receivers=[];/**
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
 */function rf(n="",e=10){let t="";for(let s=0;s<e;s++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class dP{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,s=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let l,c;return new Promise((h,f)=>{const m=rf("",20);o.port1.start();const y=setTimeout(()=>{f(new Error("unsupported_event"))},s);c={messageChannel:o,onMessage(_){const v=_;if(v.data.eventId===m)switch(v.data.status){case"ack":clearTimeout(y),l=setTimeout(()=>{f(new Error("timeout"))},3e3);break;case"done":clearTimeout(l),h(v.data.response);break;default:clearTimeout(y),clearTimeout(l),f(new Error("invalid_response"));break}}},this.handlers.add(c),o.port1.addEventListener("message",c.onMessage),this.target.postMessage({eventType:e,eventId:m,data:t},[o.port2])}).finally(()=>{c&&this.removeMessageHandler(c)})}}/**
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
 */function _n(){return window}function hP(n){_n().location.href=n}/**
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
 */function Ow(){return typeof _n().WorkerGlobalScope<"u"&&typeof _n().importScripts=="function"}async function fP(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function pP(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)==null?void 0:n.controller)||null}function mP(){return Ow()?self:null}/**
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
 */const Lw="firebaseLocalStorageDb",gP=1,Pl="firebaseLocalStorage",Mw="fbase_key";class Oo{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Zl(n,e){return n.transaction([Pl],e?"readwrite":"readonly").objectStore(Pl)}function yP(){const n=indexedDB.deleteDatabase(Lw);return new Oo(n).toPromise()}function Hd(){const n=indexedDB.open(Lw,gP);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const s=n.result;try{s.createObjectStore(Pl,{keyPath:Mw})}catch(o){t(o)}}),n.addEventListener("success",async()=>{const s=n.result;s.objectStoreNames.contains(Pl)?e(s):(s.close(),await yP(),e(await Hd()))})})}async function Py(n,e,t){const s=Zl(n,!0).put({[Mw]:e,value:t});return new Oo(s).toPromise()}async function _P(n,e){const t=Zl(n,!1).get(e),s=await new Oo(t).toPromise();return s===void 0?null:s.value}function Ny(n,e){const t=Zl(n,!0).delete(e);return new Oo(t).toPromise()}const vP=800,wP=3;class Fw{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Hd(),this.db)}async _withRetries(e){let t=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(t++>wP)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Ow()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Xl._getInstance(mP()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var t,s;if(this.activeServiceWorker=await fP(),!this.activeServiceWorker)return;this.sender=new dP(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(t=e[0])!=null&&t.fulfilled&&(s=e[0])!=null&&s.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||pP()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Hd();return await Py(e,bl,"1"),await Ny(e,bl),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(s=>Py(s,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(s=>_P(s,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Ny(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const l=Zl(o,!1).getAll();return new Oo(l).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],s=new Set;if(e.length!==0)for(const{fbase_key:o,value:l}of e)s.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(l)&&(this.notifyListeners(o,l),t.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!s.has(o)&&(this.notifyListeners(o,null),t.push(o));return t}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),vP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Fw.type="LOCAL";const EP=Fw;new No(3e4,6e4);/**
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
 */function CP(n,e){return e?On(e):(se(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class sf extends tf{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return zi(e,this._buildIdpRequest())}_linkToIdToken(e,t){return zi(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return zi(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function SP(n){return Rw(n.auth,new sf(n),n.bypassAuthState)}function kP(n){const{auth:e,user:t}=n;return se(t,e,"internal-error"),Zb(t,new sf(n),n.bypassAuthState)}async function IP(n){const{auth:e,user:t}=n;return se(t,e,"internal-error"),Xb(t,new sf(n),n.bypassAuthState)}/**
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
 */class Uw{constructor(e,t,s,o,l=!1){this.auth=e,this.resolver=s,this.user=o,this.bypassAuthState=l,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:s,postBody:o,tenantId:l,error:c,type:h}=e;if(c){this.reject(c);return}const f={auth:this.auth,requestUri:t,sessionId:s,tenantId:l||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(h)(f))}catch(m){this.reject(m)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return SP;case"linkViaPopup":case"linkViaRedirect":return IP;case"reauthViaPopup":case"reauthViaRedirect":return kP;default:un(this.auth,"internal-error")}}resolve(e){Wn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Wn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const TP=new No(2e3,1e4);class Di extends Uw{constructor(e,t,s,o,l){super(e,t,o,l),this.provider=s,this.authWindow=null,this.pollId=null,Di.currentPopupAction&&Di.currentPopupAction.cancel(),Di.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return se(e,this.auth,"internal-error"),e}async onExecution(){Wn(this.filter.length===1,"Popup operations only handle one event");const e=rf();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(yn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(yn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Di.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,s;if((s=(t=this.authWindow)==null?void 0:t.window)!=null&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(yn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,TP.get())};e()}}Di.currentPopupAction=null;/**
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
 */const xP="pendingRedirect",rl=new Map;class RP extends Uw{constructor(e,t,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,s),this.eventId=null}async execute(){let e=rl.get(this.auth._key());if(!e){try{const s=await bP(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(t){e=()=>Promise.reject(t)}rl.set(this.auth._key(),e)}return this.bypassAuthState||rl.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function bP(n,e){const t=AP(e),s=NP(n);if(!await s._isAvailable())return!1;const o=await s._get(t)==="true";return await s._remove(t),o}function PP(n,e){rl.set(n._key(),e)}function NP(n){return On(n._redirectPersistence)}function AP(n){return nl(xP,n.config.apiKey,n.name)}async function DP(n,e,t=!1){if(Vt(n.app))return Promise.reject(Fn(n));const s=ri(n),o=CP(s,e),c=await new RP(s,o,t).execute();return c&&!t&&(delete c.user._redirectEventId,await s._persistUserIfCurrent(c.user),await s._setRedirectUser(null,e)),c}/**
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
 */const OP=600*1e3;class LP{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(t=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!MP(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var s;if(e.error&&!jw(e)){const o=((s=e.error.code)==null?void 0:s.split("auth/")[1])||"internal-error";t.onError(yn(this.auth,o))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const s=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=OP&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ay(e))}saveEventToCache(e){this.cachedEventUids.add(Ay(e)),this.lastProcessedEventTime=Date.now()}}function Ay(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function jw({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function MP(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return jw(n);default:return!1}}/**
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
 */async function FP(n,e={}){return Ir(n,"GET","/v1/projects",e)}/**
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
 */const UP=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,jP=/^https?/;async function zP(n){if(n.config.emulator)return;const{authorizedDomains:e}=await FP(n);for(const t of e)try{if(WP(t))return}catch{}un(n,"unauthorized-domain")}function WP(n){const e=$d(),{protocol:t,hostname:s}=new URL(e);if(n.startsWith("chrome-extension://")){const c=new URL(n);return c.hostname===""&&s===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&c.hostname===s}if(!jP.test(t))return!1;if(UP.test(n))return s===n;const o=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(s)}/**
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
 */const $P=new No(3e4,6e4);function Dy(){const n=_n().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function BP(n){return new Promise((e,t)=>{var o,l,c;function s(){Dy(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Dy(),t(yn(n,"network-request-failed"))},timeout:$P.get()})}if((l=(o=_n().gapi)==null?void 0:o.iframes)!=null&&l.Iframe)e(gapi.iframes.getContext());else if((c=_n().gapi)!=null&&c.load)s();else{const h=Ob("iframefcb");return _n()[h]=()=>{gapi.load?s():t(yn(n,"network-request-failed"))},Sw(`${Db()}?onload=${h}`).catch(f=>t(f))}}).catch(e=>{throw il=null,e})}let il=null;function VP(n){return il=il||BP(n),il}/**
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
 */const HP=new No(5e3,15e3),GP="__/auth/iframe",qP="emulator/auth/iframe",KP={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},YP=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function QP(n){const e=n.config;se(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Xh(e,qP):`https://${n.config.authDomain}/${GP}`,s={apiKey:e.apiKey,appName:n.name,v:Zi},o=YP.get(n.config.apiHost);o&&(s.eid=o);const l=n._getFrameworks();return l.length&&(s.fw=l.join(",")),`${t}?${Xi(s).slice(1)}`}async function JP(n){const e=await VP(n),t=_n().gapi;return se(t,n,"internal-error"),e.open({where:document.body,url:QP(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:KP,dontclear:!0},s=>new Promise(async(o,l)=>{await s.restyle({setHideOnLeave:!1});const c=yn(n,"network-request-failed"),h=_n().setTimeout(()=>{l(c)},HP.get());function f(){_n().clearTimeout(h),o(s)}s.ping(f).then(f,()=>{l(c)})}))}/**
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
 */const XP={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},ZP=500,eN=600,tN="_blank",nN="http://localhost";class Oy{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function rN(n,e,t,s=ZP,o=eN){const l=Math.max((window.screen.availHeight-o)/2,0).toString(),c=Math.max((window.screen.availWidth-s)/2,0).toString();let h="";const f={...XP,width:s.toString(),height:o.toString(),top:l,left:c},m=Ct().toLowerCase();t&&(h=gw(m)?tN:t),pw(m)&&(e=e||nN,f.scrollbars="yes");const y=Object.entries(f).reduce((v,[R,S])=>`${v}${R}=${S},`,"");if(kb(m)&&h!=="_self")return iN(e||"",h),new Oy(null);const _=window.open(e||"",h,y);se(_,n,"popup-blocked");try{_.focus()}catch{}return new Oy(_)}function iN(n,e){const t=document.createElement("a");t.href=n,t.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(s)}/**
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
 */const sN="__/auth/handler",oN="emulator/auth/handler",aN=encodeURIComponent("fac");async function Ly(n,e,t,s,o,l){se(n.config.authDomain,n,"auth-domain-config-required"),se(n.config.apiKey,n,"invalid-api-key");const c={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:s,v:Zi,eventId:o};if(e instanceof Tw){e.setDefaultLanguage(n.languageCode),c.providerId=e.providerId||"",Ed(e.getCustomParameters())||(c.customParameters=JSON.stringify(e.getCustomParameters()));for(const[y,_]of Object.entries({}))c[y]=_}if(e instanceof Do){const y=e.getScopes().filter(_=>_!=="");y.length>0&&(c.scopes=y.join(","))}n.tenantId&&(c.tid=n.tenantId);const h=c;for(const y of Object.keys(h))h[y]===void 0&&delete h[y];const f=await n._getAppCheckToken(),m=f?`#${aN}=${encodeURIComponent(f)}`:"";return`${lN(n)}?${Xi(h).slice(1)}${m}`}function lN({config:n}){return n.emulator?Xh(n,oN):`https://${n.authDomain}/${sN}`}/**
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
 */const gd="webStorageSupport";class uN{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Dw,this._completeRedirectFn=DP,this._overrideRedirectResult=PP}async _openPopup(e,t,s,o){var c;Wn((c=this.eventManagers[e._key()])==null?void 0:c.manager,"_initialize() not called before _openPopup()");const l=await Ly(e,t,s,$d(),o);return rN(e,l,rf())}async _openRedirect(e,t,s,o){await this._originValidation(e);const l=await Ly(e,t,s,$d(),o);return hP(l),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:o,promise:l}=this.eventManagers[t];return o?Promise.resolve(o):(Wn(l,"If manager is not set, promise should be"),l)}const s=this.initAndGetManager(e);return this.eventManagers[t]={promise:s},s.catch(()=>{delete this.eventManagers[t]}),s}async initAndGetManager(e){const t=await JP(e),s=new LP(e);return t.register("authEvent",o=>(se(o==null?void 0:o.authEvent,e,"invalid-auth-event"),{status:s.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=t,s}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(gd,{type:gd},o=>{var c;const l=(c=o==null?void 0:o[0])==null?void 0:c[gd];l!==void 0&&t(!!l),un(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=zP(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Ew()||mw()||ef()}}const cN=uN;var My="@firebase/auth",Fy="1.11.1";/**
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
 */class dN{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){se(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function hN(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function fN(n){vn(new an("auth",(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),l=e.getProvider("app-check-internal"),{apiKey:c,authDomain:h}=s.options;se(c&&!c.includes(":"),"invalid-api-key",{appName:s.name});const f={apiKey:c,authDomain:h,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Cw(n)},m=new Pb(s,o,l,f);return zb(m,t),m},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,s)=>{e.getProvider("auth-internal").initialize()})),vn(new an("auth-internal",e=>{const t=ri(e.getProvider("auth").getImmediate());return(s=>new dN(s))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Gt(My,Fy,hN(n)),Gt(My,Fy,"esm2020")}/**
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
 */const pN=300,mN=m_("authIdTokenMaxAge")||pN;let Uy=null;const gN=n=>async e=>{const t=e&&await e.getIdTokenResult(),s=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(s&&s>mN)return;const o=t==null?void 0:t.token;Uy!==o&&(Uy=o,await fetch(n,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function yN(n=lh()){const e=ei(n,"auth");if(e.isInitialized())return e.getImmediate();const t=jb(n,{popupRedirectResolver:cN,persistence:[EP,uP,Dw]}),s=m_("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const l=new URL(s,location.origin);if(location.origin===l.origin){const c=gN(l.toString());iP(t,c,()=>c(t.currentUser)),rP(t,h=>c(h))}}const o=f_("auth");return o&&Wb(t,`http://${o}`),t}function _N(){var n;return((n=document.getElementsByTagName("head"))==null?void 0:n[0])??document}Nb({loadJS(n){return new Promise((e,t)=>{const s=document.createElement("script");s.setAttribute("src",n),s.onload=e,s.onerror=o=>{const l=yn("internal-error");l.customData=o,t(l)},s.type="text/javascript",s.charset="UTF-8",_N().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});fN("Browser");const vN={apiKey:"AIzaSyCYSlsCpya0lq1XTCZbg3uKRWezjgJGrDw",authDomain:"driveway-33dd7.firebaseapp.com",databaseURL:"https://driveway-33dd7-default-rtdb.firebaseio.com",projectId:"driveway-33dd7",storageBucket:"driveway-33dd7.firebasestorage.app",messagingSenderId:"774495628670",appId:"1:774495628670:web:9f060969e992697957172f",measurementId:"G-N3PXP5VM39"},of=T_(vN);z1(of);const Me=tb(of),Ya=yN(of);function zw(n){var e,t,s="";if(typeof n=="string"||typeof n=="number")s+=n;else if(typeof n=="object")if(Array.isArray(n)){var o=n.length;for(e=0;e<o;e++)n[e]&&(t=zw(n[e]))&&(s&&(s+=" "),s+=t)}else for(t in n)n[t]&&(s&&(s+=" "),s+=t);return s}function wN(){for(var n,e,t=0,s="",o=arguments.length;t<o;t++)(n=arguments[t])&&(e=zw(n))&&(s&&(s+=" "),s+=e);return s}const EN=(n,e)=>{const t=new Array(n.length+e.length);for(let s=0;s<n.length;s++)t[s]=n[s];for(let s=0;s<e.length;s++)t[n.length+s]=e[s];return t},CN=(n,e)=>({classGroupId:n,validator:e}),Ww=(n=new Map,e=null,t)=>({nextPart:n,validators:e,classGroupId:t}),Nl="-",jy=[],SN="arbitrary..",kN=n=>{const e=TN(n),{conflictingClassGroups:t,conflictingClassGroupModifiers:s}=n;return{getClassGroupId:c=>{if(c.startsWith("[")&&c.endsWith("]"))return IN(c);const h=c.split(Nl),f=h[0]===""&&h.length>1?1:0;return $w(h,f,e)},getConflictingClassGroupIds:(c,h)=>{if(h){const f=s[c],m=t[c];return f?m?EN(m,f):f:m||jy}return t[c]||jy}}},$w=(n,e,t)=>{if(n.length-e===0)return t.classGroupId;const o=n[e],l=t.nextPart.get(o);if(l){const m=$w(n,e+1,l);if(m)return m}const c=t.validators;if(c===null)return;const h=e===0?n.join(Nl):n.slice(e).join(Nl),f=c.length;for(let m=0;m<f;m++){const y=c[m];if(y.validator(h))return y.classGroupId}},IN=n=>n.slice(1,-1).indexOf(":")===-1?void 0:(()=>{const e=n.slice(1,-1),t=e.indexOf(":"),s=e.slice(0,t);return s?SN+s:void 0})(),TN=n=>{const{theme:e,classGroups:t}=n;return xN(t,e)},xN=(n,e)=>{const t=Ww();for(const s in n){const o=n[s];af(o,t,s,e)}return t},af=(n,e,t,s)=>{const o=n.length;for(let l=0;l<o;l++){const c=n[l];RN(c,e,t,s)}},RN=(n,e,t,s)=>{if(typeof n=="string"){bN(n,e,t);return}if(typeof n=="function"){PN(n,e,t,s);return}NN(n,e,t,s)},bN=(n,e,t)=>{const s=n===""?e:Bw(e,n);s.classGroupId=t},PN=(n,e,t,s)=>{if(AN(n)){af(n(s),e,t,s);return}e.validators===null&&(e.validators=[]),e.validators.push(CN(t,n))},NN=(n,e,t,s)=>{const o=Object.entries(n),l=o.length;for(let c=0;c<l;c++){const[h,f]=o[c];af(f,Bw(e,h),t,s)}},Bw=(n,e)=>{let t=n;const s=e.split(Nl),o=s.length;for(let l=0;l<o;l++){const c=s[l];let h=t.nextPart.get(c);h||(h=Ww(),t.nextPart.set(c,h)),t=h}return t},AN=n=>"isThemeGetter"in n&&n.isThemeGetter===!0,DN=n=>{if(n<1)return{get:()=>{},set:()=>{}};let e=0,t=Object.create(null),s=Object.create(null);const o=(l,c)=>{t[l]=c,e++,e>n&&(e=0,s=t,t=Object.create(null))};return{get(l){let c=t[l];if(c!==void 0)return c;if((c=s[l])!==void 0)return o(l,c),c},set(l,c){l in t?t[l]=c:o(l,c)}}},Gd="!",zy=":",ON=[],Wy=(n,e,t,s,o)=>({modifiers:n,hasImportantModifier:e,baseClassName:t,maybePostfixModifierPosition:s,isExternal:o}),LN=n=>{const{prefix:e,experimentalParseClassName:t}=n;let s=o=>{const l=[];let c=0,h=0,f=0,m;const y=o.length;for(let O=0;O<y;O++){const D=o[O];if(c===0&&h===0){if(D===zy){l.push(o.slice(f,O)),f=O+1;continue}if(D==="/"){m=O;continue}}D==="["?c++:D==="]"?c--:D==="("?h++:D===")"&&h--}const _=l.length===0?o:o.slice(f);let v=_,R=!1;_.endsWith(Gd)?(v=_.slice(0,-1),R=!0):_.startsWith(Gd)&&(v=_.slice(1),R=!0);const S=m&&m>f?m-f:void 0;return Wy(l,R,v,S)};if(e){const o=e+zy,l=s;s=c=>c.startsWith(o)?l(c.slice(o.length)):Wy(ON,!1,c,void 0,!0)}if(t){const o=s;s=l=>t({className:l,parseClassName:o})}return s},MN=n=>{const e=new Map;return n.orderSensitiveModifiers.forEach((t,s)=>{e.set(t,1e6+s)}),t=>{const s=[];let o=[];for(let l=0;l<t.length;l++){const c=t[l],h=c[0]==="[",f=e.has(c);h||f?(o.length>0&&(o.sort(),s.push(...o),o=[]),s.push(c)):o.push(c)}return o.length>0&&(o.sort(),s.push(...o)),s}},FN=n=>({cache:DN(n.cacheSize),parseClassName:LN(n),sortModifiers:MN(n),...kN(n)}),UN=/\s+/,jN=(n,e)=>{const{parseClassName:t,getClassGroupId:s,getConflictingClassGroupIds:o,sortModifiers:l}=e,c=[],h=n.trim().split(UN);let f="";for(let m=h.length-1;m>=0;m-=1){const y=h[m],{isExternal:_,modifiers:v,hasImportantModifier:R,baseClassName:S,maybePostfixModifierPosition:O}=t(y);if(_){f=y+(f.length>0?" "+f:f);continue}let D=!!O,j=s(D?S.substring(0,O):S);if(!j){if(!D){f=y+(f.length>0?" "+f:f);continue}if(j=s(S),!j){f=y+(f.length>0?" "+f:f);continue}D=!1}const H=v.length===0?"":v.length===1?v[0]:l(v).join(":"),U=R?H+Gd:H,ne=U+j;if(c.indexOf(ne)>-1)continue;c.push(ne);const he=o(j,D);for(let Se=0;Se<he.length;++Se){const Ie=he[Se];c.push(U+Ie)}f=y+(f.length>0?" "+f:f)}return f},zN=(...n)=>{let e=0,t,s,o="";for(;e<n.length;)(t=n[e++])&&(s=Vw(t))&&(o&&(o+=" "),o+=s);return o},Vw=n=>{if(typeof n=="string")return n;let e,t="";for(let s=0;s<n.length;s++)n[s]&&(e=Vw(n[s]))&&(t&&(t+=" "),t+=e);return t},WN=(n,...e)=>{let t,s,o,l;const c=f=>{const m=e.reduce((y,_)=>_(y),n());return t=FN(m),s=t.cache.get,o=t.cache.set,l=h,h(f)},h=f=>{const m=s(f);if(m)return m;const y=jN(f,t);return o(f,y),y};return l=c,(...f)=>l(zN(...f))},$N=[],Qe=n=>{const e=t=>t[n]||$N;return e.isThemeGetter=!0,e},Hw=/^\[(?:(\w[\w-]*):)?(.+)\]$/i,Gw=/^\((?:(\w[\w-]*):)?(.+)\)$/i,BN=/^\d+\/\d+$/,VN=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,HN=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,GN=/^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,qN=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,KN=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,Ni=n=>BN.test(n),de=n=>!!n&&!Number.isNaN(Number(n)),dr=n=>!!n&&Number.isInteger(Number(n)),yd=n=>n.endsWith("%")&&de(n.slice(0,-1)),Pn=n=>VN.test(n),YN=()=>!0,QN=n=>HN.test(n)&&!GN.test(n),qw=()=>!1,JN=n=>qN.test(n),XN=n=>KN.test(n),ZN=n=>!Q(n)&&!J(n),eA=n=>is(n,Qw,qw),Q=n=>Hw.test(n),zr=n=>is(n,Jw,QN),_d=n=>is(n,sA,de),$y=n=>is(n,Kw,qw),tA=n=>is(n,Yw,XN),Qa=n=>is(n,Xw,JN),J=n=>Gw.test(n),eo=n=>ss(n,Jw),nA=n=>ss(n,oA),By=n=>ss(n,Kw),rA=n=>ss(n,Qw),iA=n=>ss(n,Yw),Ja=n=>ss(n,Xw,!0),is=(n,e,t)=>{const s=Hw.exec(n);return s?s[1]?e(s[1]):t(s[2]):!1},ss=(n,e,t=!1)=>{const s=Gw.exec(n);return s?s[1]?e(s[1]):t:!1},Kw=n=>n==="position"||n==="percentage",Yw=n=>n==="image"||n==="url",Qw=n=>n==="length"||n==="size"||n==="bg-size",Jw=n=>n==="length",sA=n=>n==="number",oA=n=>n==="family-name",Xw=n=>n==="shadow",aA=()=>{const n=Qe("color"),e=Qe("font"),t=Qe("text"),s=Qe("font-weight"),o=Qe("tracking"),l=Qe("leading"),c=Qe("breakpoint"),h=Qe("container"),f=Qe("spacing"),m=Qe("radius"),y=Qe("shadow"),_=Qe("inset-shadow"),v=Qe("text-shadow"),R=Qe("drop-shadow"),S=Qe("blur"),O=Qe("perspective"),D=Qe("aspect"),j=Qe("ease"),H=Qe("animate"),U=()=>["auto","avoid","all","avoid-page","page","left","right","column"],ne=()=>["center","top","bottom","left","right","top-left","left-top","top-right","right-top","bottom-right","right-bottom","bottom-left","left-bottom"],he=()=>[...ne(),J,Q],Se=()=>["auto","hidden","clip","visible","scroll"],Ie=()=>["auto","contain","none"],X=()=>[J,Q,f],we=()=>[Ni,"full","auto",...X()],Be=()=>[dr,"none","subgrid",J,Q],yt=()=>["auto",{span:["full",dr,J,Q]},dr,J,Q],at=()=>[dr,"auto",J,Q],Je=()=>["auto","min","max","fr",J,Q],lt=()=>["start","end","center","between","around","evenly","stretch","baseline","center-safe","end-safe"],qe=()=>["start","end","center","stretch","center-safe","end-safe"],Re=()=>["auto",...X()],$=()=>[Ni,"auto","full","dvw","dvh","lvw","lvh","svw","svh","min","max","fit",...X()],P=()=>[n,J,Q],V=()=>[...ne(),By,$y,{position:[J,Q]}],B=()=>["no-repeat",{repeat:["","x","y","space","round"]}],I=()=>["auto","cover","contain",rA,eA,{size:[J,Q]}],A=()=>[yd,eo,zr],q=()=>["","none","full",m,J,Q],te=()=>["",de,eo,zr],ue=()=>["solid","dashed","dotted","double"],ge=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],ae=()=>[de,yd,By,$y],_e=()=>["","none",S,J,Q],ce=()=>["none",de,J,Q],Xe=()=>["none",de,J,Q],Bn=()=>[de,J,Q],Tr=()=>[Ni,"full",...X()];return{cacheSize:500,theme:{animate:["spin","ping","pulse","bounce"],aspect:["video"],blur:[Pn],breakpoint:[Pn],color:[YN],container:[Pn],"drop-shadow":[Pn],ease:["in","out","in-out"],font:[ZN],"font-weight":["thin","extralight","light","normal","medium","semibold","bold","extrabold","black"],"inset-shadow":[Pn],leading:["none","tight","snug","normal","relaxed","loose"],perspective:["dramatic","near","normal","midrange","distant","none"],radius:[Pn],shadow:[Pn],spacing:["px",de],text:[Pn],"text-shadow":[Pn],tracking:["tighter","tight","normal","wide","wider","widest"]},classGroups:{aspect:[{aspect:["auto","square",Ni,Q,J,D]}],container:["container"],columns:[{columns:[de,Q,J,h]}],"break-after":[{"break-after":U()}],"break-before":[{"break-before":U()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],sr:["sr-only","not-sr-only"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:he()}],overflow:[{overflow:Se()}],"overflow-x":[{"overflow-x":Se()}],"overflow-y":[{"overflow-y":Se()}],overscroll:[{overscroll:Ie()}],"overscroll-x":[{"overscroll-x":Ie()}],"overscroll-y":[{"overscroll-y":Ie()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:we()}],"inset-x":[{"inset-x":we()}],"inset-y":[{"inset-y":we()}],start:[{start:we()}],end:[{end:we()}],top:[{top:we()}],right:[{right:we()}],bottom:[{bottom:we()}],left:[{left:we()}],visibility:["visible","invisible","collapse"],z:[{z:[dr,"auto",J,Q]}],basis:[{basis:[Ni,"full","auto",h,...X()]}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["nowrap","wrap","wrap-reverse"]}],flex:[{flex:[de,Ni,"auto","initial","none",Q]}],grow:[{grow:["",de,J,Q]}],shrink:[{shrink:["",de,J,Q]}],order:[{order:[dr,"first","last","none",J,Q]}],"grid-cols":[{"grid-cols":Be()}],"col-start-end":[{col:yt()}],"col-start":[{"col-start":at()}],"col-end":[{"col-end":at()}],"grid-rows":[{"grid-rows":Be()}],"row-start-end":[{row:yt()}],"row-start":[{"row-start":at()}],"row-end":[{"row-end":at()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":Je()}],"auto-rows":[{"auto-rows":Je()}],gap:[{gap:X()}],"gap-x":[{"gap-x":X()}],"gap-y":[{"gap-y":X()}],"justify-content":[{justify:[...lt(),"normal"]}],"justify-items":[{"justify-items":[...qe(),"normal"]}],"justify-self":[{"justify-self":["auto",...qe()]}],"align-content":[{content:["normal",...lt()]}],"align-items":[{items:[...qe(),{baseline:["","last"]}]}],"align-self":[{self:["auto",...qe(),{baseline:["","last"]}]}],"place-content":[{"place-content":lt()}],"place-items":[{"place-items":[...qe(),"baseline"]}],"place-self":[{"place-self":["auto",...qe()]}],p:[{p:X()}],px:[{px:X()}],py:[{py:X()}],ps:[{ps:X()}],pe:[{pe:X()}],pt:[{pt:X()}],pr:[{pr:X()}],pb:[{pb:X()}],pl:[{pl:X()}],m:[{m:Re()}],mx:[{mx:Re()}],my:[{my:Re()}],ms:[{ms:Re()}],me:[{me:Re()}],mt:[{mt:Re()}],mr:[{mr:Re()}],mb:[{mb:Re()}],ml:[{ml:Re()}],"space-x":[{"space-x":X()}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":X()}],"space-y-reverse":["space-y-reverse"],size:[{size:$()}],w:[{w:[h,"screen",...$()]}],"min-w":[{"min-w":[h,"screen","none",...$()]}],"max-w":[{"max-w":[h,"screen","none","prose",{screen:[c]},...$()]}],h:[{h:["screen","lh",...$()]}],"min-h":[{"min-h":["screen","lh","none",...$()]}],"max-h":[{"max-h":["screen","lh",...$()]}],"font-size":[{text:["base",t,eo,zr]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:[s,J,_d]}],"font-stretch":[{"font-stretch":["ultra-condensed","extra-condensed","condensed","semi-condensed","normal","semi-expanded","expanded","extra-expanded","ultra-expanded",yd,Q]}],"font-family":[{font:[nA,Q,e]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:[o,J,Q]}],"line-clamp":[{"line-clamp":[de,"none",J,_d]}],leading:[{leading:[l,...X()]}],"list-image":[{"list-image":["none",J,Q]}],"list-style-position":[{list:["inside","outside"]}],"list-style-type":[{list:["disc","decimal","none",J,Q]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"placeholder-color":[{placeholder:P()}],"text-color":[{text:P()}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...ue(),"wavy"]}],"text-decoration-thickness":[{decoration:[de,"from-font","auto",J,zr]}],"text-decoration-color":[{decoration:P()}],"underline-offset":[{"underline-offset":[de,"auto",J,Q]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:X()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",J,Q]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],wrap:[{wrap:["break-word","anywhere","normal"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",J,Q]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:V()}],"bg-repeat":[{bg:B()}],"bg-size":[{bg:I()}],"bg-image":[{bg:["none",{linear:[{to:["t","tr","r","br","b","bl","l","tl"]},dr,J,Q],radial:["",J,Q],conic:[dr,J,Q]},iA,tA]}],"bg-color":[{bg:P()}],"gradient-from-pos":[{from:A()}],"gradient-via-pos":[{via:A()}],"gradient-to-pos":[{to:A()}],"gradient-from":[{from:P()}],"gradient-via":[{via:P()}],"gradient-to":[{to:P()}],rounded:[{rounded:q()}],"rounded-s":[{"rounded-s":q()}],"rounded-e":[{"rounded-e":q()}],"rounded-t":[{"rounded-t":q()}],"rounded-r":[{"rounded-r":q()}],"rounded-b":[{"rounded-b":q()}],"rounded-l":[{"rounded-l":q()}],"rounded-ss":[{"rounded-ss":q()}],"rounded-se":[{"rounded-se":q()}],"rounded-ee":[{"rounded-ee":q()}],"rounded-es":[{"rounded-es":q()}],"rounded-tl":[{"rounded-tl":q()}],"rounded-tr":[{"rounded-tr":q()}],"rounded-br":[{"rounded-br":q()}],"rounded-bl":[{"rounded-bl":q()}],"border-w":[{border:te()}],"border-w-x":[{"border-x":te()}],"border-w-y":[{"border-y":te()}],"border-w-s":[{"border-s":te()}],"border-w-e":[{"border-e":te()}],"border-w-t":[{"border-t":te()}],"border-w-r":[{"border-r":te()}],"border-w-b":[{"border-b":te()}],"border-w-l":[{"border-l":te()}],"divide-x":[{"divide-x":te()}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":te()}],"divide-y-reverse":["divide-y-reverse"],"border-style":[{border:[...ue(),"hidden","none"]}],"divide-style":[{divide:[...ue(),"hidden","none"]}],"border-color":[{border:P()}],"border-color-x":[{"border-x":P()}],"border-color-y":[{"border-y":P()}],"border-color-s":[{"border-s":P()}],"border-color-e":[{"border-e":P()}],"border-color-t":[{"border-t":P()}],"border-color-r":[{"border-r":P()}],"border-color-b":[{"border-b":P()}],"border-color-l":[{"border-l":P()}],"divide-color":[{divide:P()}],"outline-style":[{outline:[...ue(),"none","hidden"]}],"outline-offset":[{"outline-offset":[de,J,Q]}],"outline-w":[{outline:["",de,eo,zr]}],"outline-color":[{outline:P()}],shadow:[{shadow:["","none",y,Ja,Qa]}],"shadow-color":[{shadow:P()}],"inset-shadow":[{"inset-shadow":["none",_,Ja,Qa]}],"inset-shadow-color":[{"inset-shadow":P()}],"ring-w":[{ring:te()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:P()}],"ring-offset-w":[{"ring-offset":[de,zr]}],"ring-offset-color":[{"ring-offset":P()}],"inset-ring-w":[{"inset-ring":te()}],"inset-ring-color":[{"inset-ring":P()}],"text-shadow":[{"text-shadow":["none",v,Ja,Qa]}],"text-shadow-color":[{"text-shadow":P()}],opacity:[{opacity:[de,J,Q]}],"mix-blend":[{"mix-blend":[...ge(),"plus-darker","plus-lighter"]}],"bg-blend":[{"bg-blend":ge()}],"mask-clip":[{"mask-clip":["border","padding","content","fill","stroke","view"]},"mask-no-clip"],"mask-composite":[{mask:["add","subtract","intersect","exclude"]}],"mask-image-linear-pos":[{"mask-linear":[de]}],"mask-image-linear-from-pos":[{"mask-linear-from":ae()}],"mask-image-linear-to-pos":[{"mask-linear-to":ae()}],"mask-image-linear-from-color":[{"mask-linear-from":P()}],"mask-image-linear-to-color":[{"mask-linear-to":P()}],"mask-image-t-from-pos":[{"mask-t-from":ae()}],"mask-image-t-to-pos":[{"mask-t-to":ae()}],"mask-image-t-from-color":[{"mask-t-from":P()}],"mask-image-t-to-color":[{"mask-t-to":P()}],"mask-image-r-from-pos":[{"mask-r-from":ae()}],"mask-image-r-to-pos":[{"mask-r-to":ae()}],"mask-image-r-from-color":[{"mask-r-from":P()}],"mask-image-r-to-color":[{"mask-r-to":P()}],"mask-image-b-from-pos":[{"mask-b-from":ae()}],"mask-image-b-to-pos":[{"mask-b-to":ae()}],"mask-image-b-from-color":[{"mask-b-from":P()}],"mask-image-b-to-color":[{"mask-b-to":P()}],"mask-image-l-from-pos":[{"mask-l-from":ae()}],"mask-image-l-to-pos":[{"mask-l-to":ae()}],"mask-image-l-from-color":[{"mask-l-from":P()}],"mask-image-l-to-color":[{"mask-l-to":P()}],"mask-image-x-from-pos":[{"mask-x-from":ae()}],"mask-image-x-to-pos":[{"mask-x-to":ae()}],"mask-image-x-from-color":[{"mask-x-from":P()}],"mask-image-x-to-color":[{"mask-x-to":P()}],"mask-image-y-from-pos":[{"mask-y-from":ae()}],"mask-image-y-to-pos":[{"mask-y-to":ae()}],"mask-image-y-from-color":[{"mask-y-from":P()}],"mask-image-y-to-color":[{"mask-y-to":P()}],"mask-image-radial":[{"mask-radial":[J,Q]}],"mask-image-radial-from-pos":[{"mask-radial-from":ae()}],"mask-image-radial-to-pos":[{"mask-radial-to":ae()}],"mask-image-radial-from-color":[{"mask-radial-from":P()}],"mask-image-radial-to-color":[{"mask-radial-to":P()}],"mask-image-radial-shape":[{"mask-radial":["circle","ellipse"]}],"mask-image-radial-size":[{"mask-radial":[{closest:["side","corner"],farthest:["side","corner"]}]}],"mask-image-radial-pos":[{"mask-radial-at":ne()}],"mask-image-conic-pos":[{"mask-conic":[de]}],"mask-image-conic-from-pos":[{"mask-conic-from":ae()}],"mask-image-conic-to-pos":[{"mask-conic-to":ae()}],"mask-image-conic-from-color":[{"mask-conic-from":P()}],"mask-image-conic-to-color":[{"mask-conic-to":P()}],"mask-mode":[{mask:["alpha","luminance","match"]}],"mask-origin":[{"mask-origin":["border","padding","content","fill","stroke","view"]}],"mask-position":[{mask:V()}],"mask-repeat":[{mask:B()}],"mask-size":[{mask:I()}],"mask-type":[{"mask-type":["alpha","luminance"]}],"mask-image":[{mask:["none",J,Q]}],filter:[{filter:["","none",J,Q]}],blur:[{blur:_e()}],brightness:[{brightness:[de,J,Q]}],contrast:[{contrast:[de,J,Q]}],"drop-shadow":[{"drop-shadow":["","none",R,Ja,Qa]}],"drop-shadow-color":[{"drop-shadow":P()}],grayscale:[{grayscale:["",de,J,Q]}],"hue-rotate":[{"hue-rotate":[de,J,Q]}],invert:[{invert:["",de,J,Q]}],saturate:[{saturate:[de,J,Q]}],sepia:[{sepia:["",de,J,Q]}],"backdrop-filter":[{"backdrop-filter":["","none",J,Q]}],"backdrop-blur":[{"backdrop-blur":_e()}],"backdrop-brightness":[{"backdrop-brightness":[de,J,Q]}],"backdrop-contrast":[{"backdrop-contrast":[de,J,Q]}],"backdrop-grayscale":[{"backdrop-grayscale":["",de,J,Q]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[de,J,Q]}],"backdrop-invert":[{"backdrop-invert":["",de,J,Q]}],"backdrop-opacity":[{"backdrop-opacity":[de,J,Q]}],"backdrop-saturate":[{"backdrop-saturate":[de,J,Q]}],"backdrop-sepia":[{"backdrop-sepia":["",de,J,Q]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":X()}],"border-spacing-x":[{"border-spacing-x":X()}],"border-spacing-y":[{"border-spacing-y":X()}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["","all","colors","opacity","shadow","transform","none",J,Q]}],"transition-behavior":[{transition:["normal","discrete"]}],duration:[{duration:[de,"initial",J,Q]}],ease:[{ease:["linear","initial",j,J,Q]}],delay:[{delay:[de,J,Q]}],animate:[{animate:["none",H,J,Q]}],backface:[{backface:["hidden","visible"]}],perspective:[{perspective:[O,J,Q]}],"perspective-origin":[{"perspective-origin":he()}],rotate:[{rotate:ce()}],"rotate-x":[{"rotate-x":ce()}],"rotate-y":[{"rotate-y":ce()}],"rotate-z":[{"rotate-z":ce()}],scale:[{scale:Xe()}],"scale-x":[{"scale-x":Xe()}],"scale-y":[{"scale-y":Xe()}],"scale-z":[{"scale-z":Xe()}],"scale-3d":["scale-3d"],skew:[{skew:Bn()}],"skew-x":[{"skew-x":Bn()}],"skew-y":[{"skew-y":Bn()}],transform:[{transform:[J,Q,"","none","gpu","cpu"]}],"transform-origin":[{origin:he()}],"transform-style":[{transform:["3d","flat"]}],translate:[{translate:Tr()}],"translate-x":[{"translate-x":Tr()}],"translate-y":[{"translate-y":Tr()}],"translate-z":[{"translate-z":Tr()}],"translate-none":["translate-none"],accent:[{accent:P()}],appearance:[{appearance:["none","auto"]}],"caret-color":[{caret:P()}],"color-scheme":[{scheme:["normal","dark","light","light-dark","only-dark","only-light"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",J,Q]}],"field-sizing":[{"field-sizing":["fixed","content"]}],"pointer-events":[{"pointer-events":["auto","none"]}],resize:[{resize:["none","","y","x"]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":X()}],"scroll-mx":[{"scroll-mx":X()}],"scroll-my":[{"scroll-my":X()}],"scroll-ms":[{"scroll-ms":X()}],"scroll-me":[{"scroll-me":X()}],"scroll-mt":[{"scroll-mt":X()}],"scroll-mr":[{"scroll-mr":X()}],"scroll-mb":[{"scroll-mb":X()}],"scroll-ml":[{"scroll-ml":X()}],"scroll-p":[{"scroll-p":X()}],"scroll-px":[{"scroll-px":X()}],"scroll-py":[{"scroll-py":X()}],"scroll-ps":[{"scroll-ps":X()}],"scroll-pe":[{"scroll-pe":X()}],"scroll-pt":[{"scroll-pt":X()}],"scroll-pr":[{"scroll-pr":X()}],"scroll-pb":[{"scroll-pb":X()}],"scroll-pl":[{"scroll-pl":X()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",J,Q]}],fill:[{fill:["none",...P()]}],"stroke-w":[{stroke:[de,eo,zr,_d]}],stroke:[{stroke:["none",...P()]}],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-x","border-w-y","border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-x","border-color-y","border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],translate:["translate-x","translate-y","translate-none"],"translate-none":["translate","translate-x","translate-y","translate-z"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]},orderSensitiveModifiers:["*","**","after","backdrop","before","details-content","file","first-letter","first-line","marker","placeholder","selection"]}},lA=WN(aA);function os(...n){return lA(wN(n))}function cD(){return Math.random().toString(36).substring(2,15)+Math.random().toString(36).substring(2,15)}function Vy(n="ID"){const e=Math.floor(1e3+Math.random()*9e3),t=Date.now().toString().slice(-4);return`${n}-${t}${e}`}const Zw=x.createContext();function lf(){return x.useContext(Zw)}function uA({children:n}){const[e,t]=x.useState(),[s,o]=x.useState(!0);function l(m,y){return tP(Ya,m,y)}function c(m,y){return nP(Ya,m,y)}function h(){return oP(Ya)}x.useEffect(()=>sP(Ya,y=>{t(y),o(!1)}),[]);const f={currentUser:e,signup:l,login:c,logout:h};return k.jsx(Zw.Provider,{value:f,children:s?k.jsx("div",{className:"flex h-screen items-center justify-center",children:"Loading..."}):n})}const eE=x.createContext();function cA({children:n}){const{currentUser:e}=lf(),[t,s]=x.useState([]),[o,l]=x.useState([]),[c,h]=x.useState([]),[f,m]=x.useState([]),[y,_]=x.useState([]),[v,R]=x.useState(!0),S=$=>{const P=$.val();return P?Object.entries(P).map(([V,B])=>({id:V,...B})):[]};x.useEffect(()=>{if(!e){s([]),l([]),h([]),m([]),_([]),R(!1);return}R(!0);const $=Le(Me,"cars"),P=Le(Me,"customers"),V=Le(Me,"dealers"),B=Le(Me,"transactions"),I=Le(Me,"maintenanceRecords");let A=0;const q=()=>{A++,A>=5&&R(!1)},te=Zs($,ce=>{s(S(ce)),q()}),ue=Zs(P,ce=>{l(S(ce)),q()}),ge=Zs(V,ce=>{h(S(ce)),q()}),ae=Zs(B,ce=>{m(S(ce)),q()}),_e=Zs(I,ce=>{_(S(ce)),q()});return()=>{te(),ue(),ge(),ae(),_e()}},[e]);const O=$=>{Xs(Le(Me,"cars"),$)},D=$=>{if(o.some(V=>V.phone===$.phone))throw new Error(`Customer with phone ${$.phone} already exists!`);const P={...$,uniqueId:Vy("CUST")};Xs(Le(Me,"customers"),P)},j=$=>{if(c.some(V=>V.phone===$.phone))throw new Error(`Dealer with phone ${$.phone} already exists!`);const P={...$,uniqueId:Vy("DLR")};Xs(Le(Me,"dealers"),P)},H=$=>{Xs(Le(Me,"transactions"),$)},U=($,P)=>{ur(Le(Me,`cars/${$}`),P)},ne=$=>{Pi(Le(Me,`cars/${$}`))},he=($,P)=>{ur(Le(Me,`customers/${$}`),P)},Se=$=>{Pi(Le(Me,`customers/${$}`))},Ie=($,P)=>{ur(Le(Me,`dealers/${$}`),P)},X=$=>{Pi(Le(Me,`dealers/${$}`))},we=($,P)=>{ur(Le(Me,`transactions/${$}`),P)},Be=$=>{Pi(Le(Me,`transactions/${$}`))},yt=$=>{Xs(Le(Me,"maintenanceRecords"),$),ur(Le(Me,`cars/${$.carId}`),{status:"Maintenance"})},at=($,P)=>{ur(Le(Me,`maintenanceRecords/${$}`),P),P.returnDate&&ur(Le(Me,`cars/${P.carId}`),{status:"Available"})},Je=$=>{Pi(Le(Me,`maintenanceRecords/${$}`))},lt=$=>{y.filter(V=>V.workshopName===$).forEach(V=>{Pi(Le(Me,`maintenanceRecords/${V.id}`))})},qe=($,P,V,B)=>{y.filter(A=>A.workshopName===$).forEach(A=>{ur(Le(Me,`maintenanceRecords/${A.id}`),{...A,workshopName:P,workshopDetails:V||A.workshopDetails,phoneNumber:B||A.phoneNumber})})},Re=t.map($=>{let P=$.status;const V=new Date;return V.setHours(0,0,0,0),y.some(A=>{if(A.carId!==$.id)return!1;const q=new Date(A.date);if(q.setHours(0,0,0,0),A.returnDate){const te=new Date(A.returnDate);return te.setHours(23,59,59,999),V>=q&&V<=te}return V>=q})&&(P="On Maintenance"),f.some(A=>{if(A.carId!==$.id||A.status==="Cancelled")return!1;const q=new Date(A.startDate),te=new Date(A.endDate);return q.setHours(0,0,0,0),te.setHours(23,59,59,999),V>=q&&V<=te})&&(P="On Rent"),{...$,status:P}});return k.jsx(eE.Provider,{value:{cars:Re,customers:o,transactions:f,dealers:c,addCar:O,updateCar:U,deleteCar:ne,addCustomer:D,updateCustomer:he,deleteCustomer:Se,addDealer:j,updateDealer:Ie,deleteDealer:X,addTransaction:H,updateTransaction:we,deleteTransaction:Be,maintenanceRecords:y,addMaintenanceRecord:yt,updateMaintenanceRecord:at,deleteMaintenanceRecord:Je,deleteWorkshop:lt,renameWorkshop:qe,isLoading:v},children:n})}function tE(){const n=x.useContext(eE);if(!n)throw new Error("useDriveway must be used within a DrivewayProvider");return n}/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dA=n=>n.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),hA=n=>n.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,s)=>s?s.toUpperCase():t.toLowerCase()),Hy=n=>{const e=hA(n);return e.charAt(0).toUpperCase()+e.slice(1)},nE=(...n)=>n.filter((e,t,s)=>!!e&&e.trim()!==""&&s.indexOf(e)===t).join(" ").trim(),fA=n=>{for(const e in n)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var pA={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mA=x.forwardRef(({color:n="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:s,className:o="",children:l,iconNode:c,...h},f)=>x.createElement("svg",{ref:f,...pA,width:e,height:e,stroke:n,strokeWidth:s?Number(t)*24/Number(e):t,className:nE("lucide",o),...!l&&!fA(h)&&{"aria-hidden":"true"},...h},[...c.map(([m,y])=>x.createElement(m,y)),...Array.isArray(l)?l:[l]]));/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const At=(n,e)=>{const t=x.forwardRef(({className:s,...o},l)=>x.createElement(mA,{ref:l,iconNode:e,className:nE(`lucide-${dA(Hy(n))}`,`lucide-${n}`,s),...o}));return t.displayName=Hy(n),t};/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gA=[["path",{d:"M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2",key:"5owen"}],["circle",{cx:"7",cy:"17",r:"2",key:"u2ysq9"}],["path",{d:"M9 17h6",key:"r8uit2"}],["circle",{cx:"17",cy:"17",r:"2",key:"axvx0g"}]],yA=At("car",gA);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _A=[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]],vA=At("download",_A);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wA=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],EA=At("file-text",wA);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CA=[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1",key:"10lvy0"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1",key:"16une8"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1",key:"1hutg5"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1",key:"ldoo1y"}]],SA=At("layout-dashboard",CA);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kA=[["path",{d:"m16 17 5-5-5-5",key:"1bji2h"}],["path",{d:"M21 12H9",key:"dn1m92"}],["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}]],IA=At("log-out",kA);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TA=[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]],xA=At("menu",TA);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RA=[["path",{d:"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",key:"kfwtm"}]],bA=At("moon",RA);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PA=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],NA=At("plus",PA);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AA=[["path",{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z",key:"q3az6g"}],["path",{d:"M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8",key:"1h4pet"}],["path",{d:"M12 17.5v-11",key:"1jc1ny"}]],DA=At("receipt",AA);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OA=[["path",{d:"M12 2v13",key:"1km8f5"}],["path",{d:"m16 6-4-4-4 4",key:"13yo43"}],["path",{d:"M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8",key:"1b2hhj"}]],LA=At("share",OA);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MA=[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]],FA=At("sun",MA);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UA=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]],Gy=At("users",UA);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jA=[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z",key:"1ngwbx"}]],zA=At("wrench",jA);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WA=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Al=At("x",WA);function Nn({className:n,variant:e="primary",size:t="default",...s}){const o={primary:"bg-primary text-primary-foreground hover:bg-primary/90",secondary:"bg-surface text-text hover:bg-surface/80 dark:bg-surface-dark dark:text-text-dark",outline:"border border-input bg-background hover:bg-surface hover:text-text dark:bg-background-dark dark:hover:bg-surface-dark",ghost:"hover:bg-surface hover:text-text dark:hover:bg-surface-dark",link:"text-primary underline-offset-4 hover:underline"},l={default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"};return k.jsx("button",{className:os("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",o[e],l[t],n),...s})}function to({className:n,type:e,...t}){return k.jsx("input",{type:e,className:os("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-surface-dark dark:text-text-dark dark:border-surface",n),...t})}const rE=x.forwardRef(({className:n,isOpen:e,onClose:t,children:s,...o},l)=>k.jsxs(k.Fragment,{children:[e&&k.jsx("div",{className:"fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",onClick:t}),k.jsxs("div",{ref:l,className:os("fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500 inset-y-0 right-0 h-full w-3/4 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm overflow-y-auto",e?"translate-x-0":"translate-x-full",n),...o,children:[k.jsxs("button",{className:"absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary",onClick:t,children:[k.jsx(Al,{className:"h-4 w-4"}),k.jsx("span",{className:"sr-only",children:"Close"})]}),s]})]}));rE.displayName="Sheet";const iE=({className:n,...e})=>k.jsx("div",{className:os("flex flex-col space-y-2 text-center sm:text-left",n),...e});iE.displayName="SheetHeader";const sE=x.forwardRef(({className:n,...e},t)=>k.jsx("h2",{ref:t,className:os("text-lg font-semibold text-foreground",n),...e}));sE.displayName="SheetTitle";function $A({isOpen:n,onClose:e}){const{cars:t,customers:s,dealers:o,addTransaction:l,updateCar:c,transactions:h}=tE(),[f,m]=x.useState({carId:"",customerId:"",dealerId:"",startDate:"",endDate:"",notes:"",paymentStatus:"Pending",dailyRate:"",mileage:""}),[y,_]=x.useState({total:0,breakdown:[]}),v=t.find(S=>S.id===f.carId);x.useEffect(()=>{v&&m(S=>!S.dailyRate&&!S.mileage&&S.mileage!==0?{...S,dailyRate:v.price,mileage:v.mileage||""}:S)},[v]),x.useEffect(()=>{if(f.startDate&&f.endDate&&v){const S=new Date(f.startDate),O=new Date(f.endDate),D=Math.abs(O-S),j=Math.ceil(D/(1e3*60*60*24));let H=0,U=[];const ne=f.dailyRate?parseFloat(f.dailyRate):v.price;if(j>0)if(j>=30&&v.monthlyPrice){const he=v.monthlyPrice/30;H=Math.round(he*j),U.push({label:`Monthly Rate Applied (${j} days @ ₹${Math.round(he)}/day)`,amount:H})}else if(j>=10&&v.tenDayPrice){const he=v.tenDayPrice/10;H=Math.round(he*j),U.push({label:`10-Day Rate Applied (${j} days @ ₹${Math.round(he)}/day)`,amount:H})}else H=Math.round(ne*j),U.push({label:`Standard Daily Rate (${j} days @ ₹${ne}/day)`,amount:H});_({total:H,breakdown:U})}else _({total:0,breakdown:[]})},[f.startDate,f.endDate,v,f.dailyRate]);const R=S=>{if(S.preventDefault(),!v)return;const O=new Date(f.startDate),D=new Date(f.endDate);if(h.some(H=>{if(H.carId!==v.id||H.status==="Cancelled")return!1;const U=new Date(H.startDate),ne=new Date(H.endDate);return O>=U&&O<=ne||D>=U&&D<=ne||O<=U&&D>=ne})){alert("This car is already rented for the selected dates!");return}console.log("GlobalRentalDrawer Mileage check:",f.mileage),f.mileage!==""&&f.mileage!==null&&f.mileage!==void 0&&(console.log("GlobalRentalDrawer Updating mileage to:",f.mileage),c(v.id,{mileage:parseInt(f.mileage)})),l({carId:v.id,customerId:f.customerId,dealerId:f.dealerId?f.dealerId:null,startDate:f.startDate,endDate:f.endDate,total:y.total,status:"Active",paymentStatus:f.paymentStatus,notes:f.notes,breakdown:y.breakdown,dailyRate:f.dailyRate,startMileage:f.mileage}),e(),m({carId:"",customerId:"",dealerId:"",startDate:"",endDate:"",notes:"",paymentStatus:"Pending",dailyRate:"",mileage:""})};return k.jsxs(rE,{isOpen:n,onClose:e,children:[k.jsx(iE,{children:k.jsx(sE,{children:"New Rental"})}),k.jsx("div",{className:"mt-6",children:k.jsxs("form",{onSubmit:R,className:"space-y-4",children:[k.jsxs("div",{className:"space-y-2",children:[k.jsx("label",{className:"text-sm font-medium",children:"Car"}),k.jsxs("select",{className:"flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-surface-dark dark:text-text-dark dark:border-surface",value:f.carId,onChange:S=>m({...f,carId:S.target.value,dailyRate:"",mileage:""}),required:!0,children:[k.jsx("option",{value:"",children:"Select Car"}),t.map(S=>k.jsxs("option",{value:S.id,disabled:S.status==="Maintenance"||S.status==="Rented",children:[S.make," ",S.model," (",S.status,")"]},S.id))]})]}),k.jsxs("div",{className:"space-y-2",children:[k.jsx("label",{className:"text-sm font-medium",children:"Customer"}),k.jsxs("select",{className:"flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-surface-dark dark:text-text-dark dark:border-surface",value:f.customerId,onChange:S=>m({...f,customerId:S.target.value}),required:!0,children:[k.jsx("option",{value:"",children:"Select Customer"}),s.map(S=>k.jsx("option",{value:S.id,children:S.name},S.id))]})]}),k.jsxs("div",{className:"space-y-2",children:[k.jsx("label",{className:"text-sm font-medium",children:"Dealer (Optional)"}),k.jsxs("select",{className:"flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-surface-dark dark:text-text-dark dark:border-surface",value:f.dealerId,onChange:S=>m({...f,dealerId:S.target.value}),children:[k.jsx("option",{value:"",children:"Select Dealer"}),o.map(S=>k.jsx("option",{value:S.id,children:S.name},S.id))]})]}),k.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[k.jsxs("div",{className:"space-y-2",children:[k.jsx("label",{className:"text-sm font-medium",children:"Start Date & Time"}),k.jsx(to,{type:"datetime-local",value:f.startDate,onChange:S=>m({...f,startDate:S.target.value}),required:!0})]}),k.jsxs("div",{className:"space-y-2",children:[k.jsx("label",{className:"text-sm font-medium",children:"End Date & Time"}),k.jsx(to,{type:"datetime-local",value:f.endDate,onChange:S=>m({...f,endDate:S.target.value}),required:!0})]})]}),k.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[k.jsxs("div",{className:"space-y-2",children:[k.jsx("label",{className:"text-sm font-medium",children:"Per Day Amount"}),k.jsx(to,{type:"number",value:f.dailyRate,onChange:S=>m({...f,dailyRate:S.target.value}),placeholder:"Enter daily rate"})]}),k.jsxs("div",{className:"space-y-2",children:[k.jsx("label",{className:"text-sm font-medium",children:"Current Mileage"}),k.jsx(to,{type:"number",value:f.mileage,onChange:S=>m({...f,mileage:S.target.value}),placeholder:"Starting mileage"})]})]}),k.jsxs("div",{className:"space-y-2",children:[k.jsx("label",{className:"text-sm font-medium",children:"Payment Status"}),k.jsxs("select",{className:"flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-surface-dark dark:text-text-dark dark:border-surface",value:f.paymentStatus,onChange:S=>m({...f,paymentStatus:S.target.value}),children:[k.jsx("option",{value:"Pending",children:"Pending"}),k.jsx("option",{value:"Paid",children:"Paid"}),k.jsx("option",{value:"Pay on Arrival",children:"Pay on Arrival"})]})]}),k.jsxs("div",{className:"space-y-2",children:[k.jsx("label",{className:"text-sm font-medium",children:"Notes"}),k.jsx(to,{placeholder:"Additional notes...",value:f.notes,onChange:S=>m({...f,notes:S.target.value})})]}),k.jsxs("div",{className:"bg-surface dark:bg-surface-dark p-4 rounded-lg space-y-2",children:[k.jsx("div",{className:"flex justify-between items-center mb-2",children:k.jsx("span",{className:"text-sm font-medium",children:"Price Breakdown"})}),y.breakdown.length>0?k.jsxs("div",{className:"space-y-1",children:[y.breakdown.map((S,O)=>k.jsxs("div",{className:"flex justify-between text-sm text-muted-foreground",children:[k.jsx("span",{children:S.label}),k.jsxs("span",{children:["₹",S.amount]})]},O)),k.jsxs("div",{className:"border-t pt-2 mt-2 flex justify-between text-sm font-bold",children:[k.jsx("span",{children:"Total"}),k.jsxs("span",{children:["₹",y.total]})]})]}):k.jsx("p",{className:"text-xs text-muted-foreground",children:"Select car and dates to see price breakdown."})]}),k.jsx(Nn,{type:"submit",className:"w-full",children:"Create Rental"})]})})]})}function BA({children:n}){const[e,t]=x.useState(!1),[s,o]=x.useState(!1),[l,c]=x.useState(!1),h=$n(),f=Xd(),{logout:m}=lf(),{isLoading:y}=tE();async function _(){try{await m(),f("/login")}catch(S){console.error("Failed to log out",S)}}x.useEffect(()=>{e?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark")},[e]),x.useEffect(()=>{c(!1)},[h.pathname]);const v=[{icon:SA,label:"Dashboard",path:"/"},{icon:yA,label:"Cars",path:"/cars"},{icon:Gy,label:"Customers",path:"/customers"},{icon:Gy,label:"Dealers",path:"/dealers"},{icon:EA,label:"Rentals",path:"/transactions"},{icon:DA,label:"Financials",path:"/financials"},{icon:zA,label:"Maintenance",path:"/maintenance"}],R=()=>k.jsxs("div",{className:"flex flex-col h-full",children:[k.jsxs("div",{className:"p-6 flex justify-between items-center",children:[k.jsxs("div",{className:"flex items-center gap-3",children:[k.jsx("img",{src:"/DriveWay/logo.png",alt:"Driveway",className:"h-8 w-8 object-contain"}),k.jsx("h1",{className:"text-2xl font-bold text-primary",children:"Driveway"})]}),k.jsx(Nn,{variant:"ghost",size:"icon",className:"md:hidden",onClick:()=>c(!1),children:k.jsx(Al,{size:20})})]}),k.jsx("div",{className:"px-4 mb-4",children:k.jsxs(Nn,{className:"w-full justify-start gap-2",onClick:()=>o(!0),children:[k.jsx(NA,{size:20}),"New Rental"]})}),k.jsx("nav",{className:"flex-1 px-4 space-y-2 overflow-y-auto",children:v.map(S=>{const O=S.icon,D=h.pathname===S.path;return k.jsxs(rh,{to:S.path,className:os("flex items-center gap-3 px-4 py-3 rounded-lg transition-colors",D?"bg-primary/10 text-primary":"text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"),children:[k.jsx(O,{size:20}),k.jsx("span",{className:"font-medium",children:S.label})]},S.path)})}),k.jsxs("div",{className:"p-4 border-t border-gray-200 dark:border-gray-800",children:[k.jsxs(Nn,{variant:"ghost",className:"w-full justify-start gap-3",onClick:()=>t(!e),children:[e?k.jsx(FA,{size:20}):k.jsx(bA,{size:20}),k.jsx("span",{children:e?"Light Mode":"Dark Mode"})]}),k.jsxs(Nn,{variant:"ghost",className:"w-full justify-start gap-3 mt-2 text-destructive hover:text-destructive hover:bg-destructive/10",onClick:_,children:[k.jsx(IA,{size:20}),k.jsx("span",{children:"Log Out"})]})]})]});return y?k.jsx("div",{className:"min-h-screen bg-surface dark:bg-background-dark flex items-center justify-center",children:k.jsxs("div",{className:"flex flex-col items-center gap-4",children:[k.jsx("img",{src:"/DriveWay/logo.png",alt:"Loading...",className:"h-16 w-16 animate-pulse object-contain"}),k.jsx("p",{className:"text-muted-foreground animate-pulse",children:"Loading..."})]})}):k.jsxs("div",{className:"min-h-screen bg-surface dark:bg-background-dark flex flex-col md:flex-row",children:[k.jsxs("div",{className:"md:hidden bg-background dark:bg-surface-dark border-b border-gray-200 dark:border-gray-800 p-4 flex justify-between items-center sticky top-0 z-20",children:[k.jsxs("div",{className:"flex items-center gap-3",children:[k.jsx("img",{src:"/DriveWay/logo.png",alt:"Driveway",className:"h-8 w-8 object-contain"}),k.jsx("h1",{className:"text-2xl font-bold text-primary",children:"Driveway"})]}),k.jsx(Nn,{variant:"ghost",size:"icon",onClick:()=>c(!0),children:k.jsx(xA,{size:24})})]}),k.jsx("aside",{className:"hidden md:flex w-64 bg-background dark:bg-surface-dark border-r border-gray-200 dark:border-gray-800 flex-col sticky top-0 h-screen",children:k.jsx(R,{})}),l&&k.jsxs("div",{className:"fixed inset-0 z-50 md:hidden",children:[k.jsx("div",{className:"absolute inset-0 bg-black/50",onClick:()=>c(!1)}),k.jsx("div",{className:"absolute left-0 top-0 bottom-0 w-64 bg-background dark:bg-surface-dark shadow-xl animate-in slide-in-from-left",children:k.jsx(R,{})})]}),k.jsx("main",{className:"flex-1 overflow-auto w-full",children:k.jsx("div",{className:"p-4 md:p-8 max-w-7xl mx-auto",children:n})}),k.jsx($A,{isOpen:s,onClose:()=>o(!1)})]})}function VA(){const[n,e]=x.useState(null),[t,s]=x.useState(!1),[o,l]=x.useState(!1);x.useEffect(()=>{window.matchMedia("(display-mode: standalone)").matches&&l(!0);const f=y=>{y.preventDefault(),e(y)};return window.addEventListener("beforeinstallprompt",f),/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream&&!window.matchMedia("(display-mode: standalone)").matches&&(sessionStorage.getItem("iosInstallDismissed")||s(!0)),()=>{window.removeEventListener("beforeinstallprompt",f)}},[]);const c=async()=>{if(!n)return;n.prompt();const{outcome:f}=await n.userChoice;f==="accepted"&&e(null)},h=()=>{s(!1),sessionStorage.setItem("iosInstallDismissed","true")};return o?null:n?k.jsx("div",{className:"fixed bottom-4 left-4 right-4 z-50 bg-surface dark:bg-surface-dark border border-primary/20 shadow-lg rounded-lg p-4 animate-in slide-in-from-bottom duration-300",children:k.jsxs("div",{className:"flex items-center justify-between gap-4",children:[k.jsxs("div",{className:"flex-1",children:[k.jsx("h3",{className:"font-semibold text-primary",children:"Install Driveway"}),k.jsx("p",{className:"text-sm text-muted-foreground",children:"Install our app for a better experience"})]}),k.jsxs("div",{className:"flex gap-2",children:[k.jsx(Nn,{variant:"ghost",size:"icon",onClick:()=>e(null),children:k.jsx(Al,{className:"h-4 w-4"})}),k.jsxs(Nn,{onClick:c,className:"gap-2",children:[k.jsx(vA,{className:"h-4 w-4"})," Install"]})]})]})}):t?k.jsx("div",{className:"fixed bottom-0 left-0 right-0 z-50 bg-surface dark:bg-surface-dark border-t border-gray-200 dark:border-gray-800 p-4 shadow-lg animate-in slide-in-from-bottom duration-300 pb-8",children:k.jsxs("div",{className:"max-w-md mx-auto relative",children:[k.jsx(Nn,{variant:"ghost",size:"icon",className:"absolute -top-2 right-0",onClick:h,children:k.jsx(Al,{className:"h-4 w-4"})}),k.jsxs("div",{className:"flex items-start gap-4 pr-8",children:[k.jsx("div",{className:"bg-primary/10 p-3 rounded-xl",children:k.jsx(LA,{className:"h-6 w-6 text-primary"})}),k.jsxs("div",{children:[k.jsx("h3",{className:"font-semibold text-lg mb-1",children:"Install Driveway"}),k.jsxs("p",{className:"text-sm text-muted-foreground leading-relaxed",children:["To install this app on your iPhone, tap the ",k.jsx("span",{className:"font-bold",children:"Share"})," icon below and select ",k.jsx("span",{className:"font-bold",children:'"Add to Home Screen"'}),"."]})]})]}),k.jsx("div",{className:"absolute -bottom-8 left-1/2 -translate-x-1/2 w-4 h-4 bg-surface dark:bg-surface-dark rotate-45 border-b border-r border-gray-200 dark:border-gray-800"})]})}):null}function HA({children:n}){const{currentUser:e}=lf();return e?n:k.jsx(iS,{to:"/login"})}const GA=x.lazy(()=>Kt(()=>import("./Dashboard-CYcT_-_c.js"),__vite__mapDeps([0,1])).then(n=>({default:n.Dashboard}))),qA=x.lazy(()=>Kt(()=>import("./Cars-SZ3I51Cm.js"),__vite__mapDeps([2,1,3,4,5])).then(n=>({default:n.Cars}))),KA=x.lazy(()=>Kt(()=>import("./CarDetails-CNF6GGrX.js"),__vite__mapDeps([6,1,7,3,8,9,5])).then(n=>({default:n.CarDetails}))),YA=x.lazy(()=>Kt(()=>import("./Customers-BxyPmZ8R.js"),__vite__mapDeps([10,1,11,8,9,4,12,13,14,5,15])).then(n=>({default:n.Customers}))),QA=x.lazy(()=>Kt(()=>import("./CustomerDetailsPage-DBUYHh5h.js"),__vite__mapDeps([16,1,8,9,17,14,18,13,5])).then(n=>({default:n.CustomerDetailsPage}))),JA=x.lazy(()=>Kt(()=>import("./Dealers-DXqbqdT6.js"),__vite__mapDeps([19,1,11,8,9,4,12,5,15,14])).then(n=>({default:n.Dealers}))),XA=x.lazy(()=>Kt(()=>import("./DealerDetailsPage-r-ZxyBtT.js"),__vite__mapDeps([20,1,8,9,17,18,5])).then(n=>({default:n.DealerDetailsPage}))),ZA=x.lazy(()=>Kt(()=>import("./Transactions-B-T2XS7h.js"),__vite__mapDeps([21,1,8,9,5])).then(n=>({default:n.Transactions}))),eD=x.lazy(()=>Kt(()=>import("./Financials-BSUq7rnf.js"),__vite__mapDeps([22,1,9,12])).then(n=>({default:n.Financials}))),tD=x.lazy(()=>Kt(()=>import("./Maintenance-CC1v1bR9.js"),__vite__mapDeps([23,1,7,5,15,18])).then(n=>({default:n.Maintenance}))),nD=x.lazy(()=>Kt(()=>import("./Login-Br9OqS2K.js"),__vite__mapDeps([24,1,25])).then(n=>({default:n.Login}))),rD=x.lazy(()=>Kt(()=>import("./Signup-BtuRLqT8.js"),__vite__mapDeps([26,1,25])).then(n=>({default:n.Signup}))),qy=()=>k.jsx("div",{className:"flex items-center justify-center p-8 w-full h-full min-h-[50vh]",children:k.jsxs("div",{className:"flex flex-col items-center gap-2",children:[k.jsx("div",{className:"h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent"}),k.jsx("p",{className:"text-sm text-muted-foreground",children:"Loading page..."})]})});function iD(){return k.jsx(uA,{children:k.jsx(cA,{children:k.jsx(RS,{basename:"/DriveWay/",children:k.jsxs(x.Suspense,{fallback:k.jsx(qy,{}),children:[k.jsxs(yg,{children:[k.jsx(bt,{path:"/login",element:k.jsx(nD,{})}),k.jsx(bt,{path:"/signup",element:k.jsx(rD,{})}),k.jsx(bt,{path:"/*",element:k.jsx(HA,{children:k.jsx(BA,{children:k.jsx(x.Suspense,{fallback:k.jsx(qy,{}),children:k.jsxs(yg,{children:[k.jsx(bt,{path:"/",element:k.jsx(GA,{})}),k.jsx(bt,{path:"/cars",element:k.jsx(qA,{})}),k.jsx(bt,{path:"/cars/:id",element:k.jsx(KA,{})}),k.jsx(bt,{path:"/customers",element:k.jsx(YA,{})}),k.jsx(bt,{path:"/customers/:id",element:k.jsx(QA,{})}),k.jsx(bt,{path:"/dealers",element:k.jsx(JA,{})}),k.jsx(bt,{path:"/dealers/:id",element:k.jsx(XA,{})}),k.jsx(bt,{path:"/transactions",element:k.jsx(ZA,{})}),k.jsx(bt,{path:"/financials",element:k.jsx(eD,{})}),k.jsx(bt,{path:"/maintenance",element:k.jsx(tD,{})})]})})})})})]}),k.jsx(VA,{})]})})})})}class sD extends Kd.Component{constructor(e){super(e),this.state={hasError:!1,error:null,errorInfo:null}}static getDerivedStateFromError(e){return{hasError:!0}}componentDidCatch(e,t){this.setState({error:e,errorInfo:t}),console.error("Uncaught error:",e,t)}render(){return this.state.hasError?k.jsxs("div",{style:{padding:"20px",fontFamily:"system-ui"},children:[k.jsx("h1",{style:{color:"red"},children:"Something went wrong."}),k.jsxs("details",{style:{whiteSpace:"pre-wrap"},children:[this.state.error&&this.state.error.toString(),k.jsx("br",{}),this.state.errorInfo&&this.state.errorInfo.componentStack]})]}):this.props.children}}hC.createRoot(document.getElementById("root")).render(k.jsx(Kd.StrictMode,{children:k.jsx(sD,{children:k.jsx(iD,{})})}));export{Nn as B,yA as C,EA as F,to as I,rh as L,NA as P,lD as R,rE as S,Gy as U,zA as W,Al as X,Kt as _,x as a,wN as b,At as c,qd as d,Xd as e,os as f,Ky as g,uD as h,iE as i,k as j,sE as k,cD as l,aD as m,oD as n,Kd as o,lf as p,uC as r,tE as u};
