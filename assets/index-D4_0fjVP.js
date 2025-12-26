const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/Dashboard-DJup-hAP.js","assets/Card-BWG0HchX.js","assets/Cars-ldkGE-TN.js","assets/EditCarDrawer-BJ5Q1U5o.js","assets/Dialog-3oKCW97f.js","assets/square-pen-D_tJKCPn.js","assets/CarDetails-DSHTTkpo.js","assets/EditMaintenanceDrawer-CK6Y_s6l.js","assets/EditTransactionDrawer-ZWc6XXu1.js","assets/Table-B5MNB_ym.js","assets/react-pdf.browser-Bx2rBD8L.js","assets/lock-BM9cBVlp.js","assets/Customers-CcJjYHEV.js","assets/PendingTransactionsDrawer-NdhuKfS_.js","assets/arrow-up-right-BfDUGzNw.js","assets/store-CAjmc0pM.js","assets/user-BthQopWf.js","assets/trash-2-BHx0xHie.js","assets/CustomerDetailsPage-CRiD6VMy.js","assets/arrow-left-D16tWeA9.js","assets/mail-B2Bb6KAZ.js","assets/phone-DB6Ju2w2.js","assets/Dealers-Cu_tbrkc.js","assets/DealerDetailsPage-DUfw5Z79.js","assets/Transactions-L2eUQ07N.js","assets/Financials-B9gSezyW.js","assets/search-CwyM1YDY.js","assets/Maintenance-CjThRXHg.js","assets/Login-GbUODFrr.js","assets/Signup-hNiTAY0c.js","assets/BillingDashboard-CaoC-oEx.js","assets/CreateInvoice-CyNHkWTX.js","assets/InvoicePDF-iUSTcXL7.js","assets/save-CNi5zAaX.js","assets/BillingHistory-CkIigXtM.js","assets/BillingSettings-BmdXUkE3.js"])))=>i.map(i=>d[i]);
function sC(n,e){for(var t=0;t<e.length;t++){const s=e[t];if(typeof s!="string"&&!Array.isArray(s)){for(const o in s)if(o!=="default"&&!(o in n)){const l=Object.getOwnPropertyDescriptor(s,o);l&&Object.defineProperty(n,o,l.get?l:{enumerable:!0,get:()=>s[o]})}}}return Object.freeze(Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();var wD=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Xy(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}function ED(n){if(Object.prototype.hasOwnProperty.call(n,"__esModule"))return n;var e=n.default;if(typeof e=="function"){var t=function s(){return this instanceof s?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};t.prototype=e.prototype}else t={};return Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(n).forEach(function(s){var o=Object.getOwnPropertyDescriptor(n,s);Object.defineProperty(t,s,o.get?o:{enumerable:!0,get:function(){return n[s]}})}),t}var Kc={exports:{}},qs={},Yc={exports:{}},he={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rg;function oC(){if(rg)return he;rg=1;var n=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),c=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),_=Symbol.iterator;function v(I){return I===null||typeof I!="object"?null:(I=_&&I[_]||I["@@iterator"],typeof I=="function"?I:null)}var x={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},k=Object.assign,O={};function D(I,A,q){this.props=I,this.context=A,this.refs=O,this.updater=q||x}D.prototype.isReactComponent={},D.prototype.setState=function(I,A){if(typeof I!="object"&&typeof I!="function"&&I!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,I,A,"setState")},D.prototype.forceUpdate=function(I){this.updater.enqueueForceUpdate(this,I,"forceUpdate")};function U(){}U.prototype=D.prototype;function V(I,A,q){this.props=I,this.context=A,this.refs=O,this.updater=q||x}var j=V.prototype=new U;j.constructor=V,k(j,D.prototype),j.isPureReactComponent=!0;var ne=Array.isArray,ye=Object.prototype.hasOwnProperty,_e={current:null},Ie={key:!0,ref:!0,__self:!0,__source:!0};function X(I,A,q){var te,ue={},me=null,ae=null;if(A!=null)for(te in A.ref!==void 0&&(ae=A.ref),A.key!==void 0&&(me=""+A.key),A)ye.call(A,te)&&!Ie.hasOwnProperty(te)&&(ue[te]=A[te]);var ve=arguments.length-2;if(ve===1)ue.children=q;else if(1<ve){for(var ce=Array(ve),Xe=0;Xe<ve;Xe++)ce[Xe]=arguments[Xe+2];ue.children=ce}if(I&&I.defaultProps)for(te in ve=I.defaultProps,ve)ue[te]===void 0&&(ue[te]=ve[te]);return{$$typeof:n,type:I,key:me,ref:ae,props:ue,_owner:_e.current}}function Ee(I,A){return{$$typeof:n,type:I.type,key:A,ref:I.ref,props:I.props,_owner:I._owner}}function Be(I){return typeof I=="object"&&I!==null&&I.$$typeof===n}function wt(I){var A={"=":"=0",":":"=2"};return"$"+I.replace(/[=:]/g,function(q){return A[q]})}var ut=/\/+/g;function Je(I,A){return typeof I=="object"&&I!==null&&I.key!=null?wt(""+I.key):A.toString(36)}function ct(I,A,q,te,ue){var me=typeof I;(me==="undefined"||me==="boolean")&&(I=null);var ae=!1;if(I===null)ae=!0;else switch(me){case"string":case"number":ae=!0;break;case"object":switch(I.$$typeof){case n:case e:ae=!0}}if(ae)return ae=I,ue=ue(ae),I=te===""?"."+Je(ae,0):te,ne(ue)?(q="",I!=null&&(q=I.replace(ut,"$&/")+"/"),ct(ue,A,q,"",function(Xe){return Xe})):ue!=null&&(Be(ue)&&(ue=Ee(ue,q+(!ue.key||ae&&ae.key===ue.key?"":(""+ue.key).replace(ut,"$&/")+"/")+I)),A.push(ue)),1;if(ae=0,te=te===""?".":te+":",ne(I))for(var ve=0;ve<I.length;ve++){me=I[ve];var ce=te+Je(me,ve);ae+=ct(me,A,q,ce,ue)}else if(ce=v(I),typeof ce=="function")for(I=ce.call(I),ve=0;!(me=I.next()).done;)me=me.value,ce=te+Je(me,ve++),ae+=ct(me,A,q,ce,ue);else if(me==="object")throw A=String(I),Error("Objects are not valid as a React child (found: "+(A==="[object Object]"?"object with keys {"+Object.keys(I).join(", ")+"}":A)+"). If you meant to render a collection of children, use an array instead.");return ae}function Ge(I,A,q){if(I==null)return I;var te=[],ue=0;return ct(I,te,"","",function(me){return A.call(q,me,ue++)}),te}function Re(I){if(I._status===-1){var A=I._result;A=A(),A.then(function(q){(I._status===0||I._status===-1)&&(I._status=1,I._result=q)},function(q){(I._status===0||I._status===-1)&&(I._status=2,I._result=q)}),I._status===-1&&(I._status=0,I._result=A)}if(I._status===1)return I._result.default;throw I._result}var W={current:null},N={transition:null},H={ReactCurrentDispatcher:W,ReactCurrentBatchConfig:N,ReactCurrentOwner:_e};function B(){throw Error("act(...) is not supported in production builds of React.")}return he.Children={map:Ge,forEach:function(I,A,q){Ge(I,function(){A.apply(this,arguments)},q)},count:function(I){var A=0;return Ge(I,function(){A++}),A},toArray:function(I){return Ge(I,function(A){return A})||[]},only:function(I){if(!Be(I))throw Error("React.Children.only expected to receive a single React element child.");return I}},he.Component=D,he.Fragment=t,he.Profiler=o,he.PureComponent=V,he.StrictMode=s,he.Suspense=f,he.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=H,he.act=B,he.cloneElement=function(I,A,q){if(I==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+I+".");var te=k({},I.props),ue=I.key,me=I.ref,ae=I._owner;if(A!=null){if(A.ref!==void 0&&(me=A.ref,ae=_e.current),A.key!==void 0&&(ue=""+A.key),I.type&&I.type.defaultProps)var ve=I.type.defaultProps;for(ce in A)ye.call(A,ce)&&!Ie.hasOwnProperty(ce)&&(te[ce]=A[ce]===void 0&&ve!==void 0?ve[ce]:A[ce])}var ce=arguments.length-2;if(ce===1)te.children=q;else if(1<ce){ve=Array(ce);for(var Xe=0;Xe<ce;Xe++)ve[Xe]=arguments[Xe+2];te.children=ve}return{$$typeof:n,type:I.type,key:ue,ref:me,props:te,_owner:ae}},he.createContext=function(I){return I={$$typeof:c,_currentValue:I,_currentValue2:I,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},I.Provider={$$typeof:l,_context:I},I.Consumer=I},he.createElement=X,he.createFactory=function(I){var A=X.bind(null,I);return A.type=I,A},he.createRef=function(){return{current:null}},he.forwardRef=function(I){return{$$typeof:h,render:I}},he.isValidElement=Be,he.lazy=function(I){return{$$typeof:y,_payload:{_status:-1,_result:I},_init:Re}},he.memo=function(I,A){return{$$typeof:m,type:I,compare:A===void 0?null:A}},he.startTransition=function(I){var A=N.transition;N.transition={};try{I()}finally{N.transition=A}},he.unstable_act=B,he.useCallback=function(I,A){return W.current.useCallback(I,A)},he.useContext=function(I){return W.current.useContext(I)},he.useDebugValue=function(){},he.useDeferredValue=function(I){return W.current.useDeferredValue(I)},he.useEffect=function(I,A){return W.current.useEffect(I,A)},he.useId=function(){return W.current.useId()},he.useImperativeHandle=function(I,A,q){return W.current.useImperativeHandle(I,A,q)},he.useInsertionEffect=function(I,A){return W.current.useInsertionEffect(I,A)},he.useLayoutEffect=function(I,A){return W.current.useLayoutEffect(I,A)},he.useMemo=function(I,A){return W.current.useMemo(I,A)},he.useReducer=function(I,A,q){return W.current.useReducer(I,A,q)},he.useRef=function(I){return W.current.useRef(I)},he.useState=function(I){return W.current.useState(I)},he.useSyncExternalStore=function(I,A,q){return W.current.useSyncExternalStore(I,A,q)},he.useTransition=function(){return W.current.useTransition()},he.version="18.3.1",he}var ig;function Kd(){return ig||(ig=1,Yc.exports=oC()),Yc.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sg;function aC(){if(sg)return qs;sg=1;var n=Kd(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,o=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(h,f,m){var y,_={},v=null,x=null;m!==void 0&&(v=""+m),f.key!==void 0&&(v=""+f.key),f.ref!==void 0&&(x=f.ref);for(y in f)s.call(f,y)&&!l.hasOwnProperty(y)&&(_[y]=f[y]);if(h&&h.defaultProps)for(y in f=h.defaultProps,f)_[y]===void 0&&(_[y]=f[y]);return{$$typeof:e,type:h,key:v,ref:x,props:_,_owner:o.current}}return qs.Fragment=t,qs.jsx=c,qs.jsxs=c,qs}var og;function lC(){return og||(og=1,Kc.exports=aC()),Kc.exports}var E=lC(),T=Kd();const Yd=Xy(T),CD=sC({__proto__:null,default:Yd},[T]);var Va={},Qc={exports:{}},Pt={},Jc={exports:{}},Xc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ag;function uC(){return ag||(ag=1,(function(n){function e(N,H){var B=N.length;N.push(H);e:for(;0<B;){var I=B-1>>>1,A=N[I];if(0<o(A,H))N[I]=H,N[B]=A,B=I;else break e}}function t(N){return N.length===0?null:N[0]}function s(N){if(N.length===0)return null;var H=N[0],B=N.pop();if(B!==H){N[0]=B;e:for(var I=0,A=N.length,q=A>>>1;I<q;){var te=2*(I+1)-1,ue=N[te],me=te+1,ae=N[me];if(0>o(ue,B))me<A&&0>o(ae,ue)?(N[I]=ae,N[me]=B,I=me):(N[I]=ue,N[te]=B,I=te);else if(me<A&&0>o(ae,B))N[I]=ae,N[me]=B,I=me;else break e}}return H}function o(N,H){var B=N.sortIndex-H.sortIndex;return B!==0?B:N.id-H.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;n.unstable_now=function(){return l.now()}}else{var c=Date,h=c.now();n.unstable_now=function(){return c.now()-h}}var f=[],m=[],y=1,_=null,v=3,x=!1,k=!1,O=!1,D=typeof setTimeout=="function"?setTimeout:null,U=typeof clearTimeout=="function"?clearTimeout:null,V=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function j(N){for(var H=t(m);H!==null;){if(H.callback===null)s(m);else if(H.startTime<=N)s(m),H.sortIndex=H.expirationTime,e(f,H);else break;H=t(m)}}function ne(N){if(O=!1,j(N),!k)if(t(f)!==null)k=!0,Re(ye);else{var H=t(m);H!==null&&W(ne,H.startTime-N)}}function ye(N,H){k=!1,O&&(O=!1,U(X),X=-1),x=!0;var B=v;try{for(j(H),_=t(f);_!==null&&(!(_.expirationTime>H)||N&&!wt());){var I=_.callback;if(typeof I=="function"){_.callback=null,v=_.priorityLevel;var A=I(_.expirationTime<=H);H=n.unstable_now(),typeof A=="function"?_.callback=A:_===t(f)&&s(f),j(H)}else s(f);_=t(f)}if(_!==null)var q=!0;else{var te=t(m);te!==null&&W(ne,te.startTime-H),q=!1}return q}finally{_=null,v=B,x=!1}}var _e=!1,Ie=null,X=-1,Ee=5,Be=-1;function wt(){return!(n.unstable_now()-Be<Ee)}function ut(){if(Ie!==null){var N=n.unstable_now();Be=N;var H=!0;try{H=Ie(!0,N)}finally{H?Je():(_e=!1,Ie=null)}}else _e=!1}var Je;if(typeof V=="function")Je=function(){V(ut)};else if(typeof MessageChannel<"u"){var ct=new MessageChannel,Ge=ct.port2;ct.port1.onmessage=ut,Je=function(){Ge.postMessage(null)}}else Je=function(){D(ut,0)};function Re(N){Ie=N,_e||(_e=!0,Je())}function W(N,H){X=D(function(){N(n.unstable_now())},H)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(N){N.callback=null},n.unstable_continueExecution=function(){k||x||(k=!0,Re(ye))},n.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Ee=0<N?Math.floor(1e3/N):5},n.unstable_getCurrentPriorityLevel=function(){return v},n.unstable_getFirstCallbackNode=function(){return t(f)},n.unstable_next=function(N){switch(v){case 1:case 2:case 3:var H=3;break;default:H=v}var B=v;v=H;try{return N()}finally{v=B}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(N,H){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var B=v;v=N;try{return H()}finally{v=B}},n.unstable_scheduleCallback=function(N,H,B){var I=n.unstable_now();switch(typeof B=="object"&&B!==null?(B=B.delay,B=typeof B=="number"&&0<B?I+B:I):B=I,N){case 1:var A=-1;break;case 2:A=250;break;case 5:A=1073741823;break;case 4:A=1e4;break;default:A=5e3}return A=B+A,N={id:y++,callback:H,priorityLevel:N,startTime:B,expirationTime:A,sortIndex:-1},B>I?(N.sortIndex=B,e(m,N),t(f)===null&&N===t(m)&&(O?(U(X),X=-1):O=!0,W(ne,B-I))):(N.sortIndex=A,e(f,N),k||x||(k=!0,Re(ye))),N},n.unstable_shouldYield=wt,n.unstable_wrapCallback=function(N){var H=v;return function(){var B=v;v=H;try{return N.apply(this,arguments)}finally{v=B}}}})(Xc)),Xc}var lg;function cC(){return lg||(lg=1,Jc.exports=uC()),Jc.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ug;function dC(){if(ug)return Pt;ug=1;var n=Kd(),e=cC();function t(r){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+r,a=1;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+r+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,o={};function l(r,i){c(r,i),c(r+"Capture",i)}function c(r,i){for(o[r]=i,r=0;r<i.length;r++)s.add(i[r])}var h=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),f=Object.prototype.hasOwnProperty,m=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,y={},_={};function v(r){return f.call(_,r)?!0:f.call(y,r)?!1:m.test(r)?_[r]=!0:(y[r]=!0,!1)}function x(r,i,a,u){if(a!==null&&a.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return u?!1:a!==null?!a.acceptsBooleans:(r=r.toLowerCase().slice(0,5),r!=="data-"&&r!=="aria-");default:return!1}}function k(r,i,a,u){if(i===null||typeof i>"u"||x(r,i,a,u))return!0;if(u)return!1;if(a!==null)switch(a.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function O(r,i,a,u,d,p,g){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=u,this.attributeNamespace=d,this.mustUseProperty=a,this.propertyName=r,this.type=i,this.sanitizeURL=p,this.removeEmptyString=g}var D={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(r){D[r]=new O(r,0,!1,r,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(r){var i=r[0];D[i]=new O(i,1,!1,r[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(r){D[r]=new O(r,2,!1,r.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(r){D[r]=new O(r,2,!1,r,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(r){D[r]=new O(r,3,!1,r.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(r){D[r]=new O(r,3,!0,r,null,!1,!1)}),["capture","download"].forEach(function(r){D[r]=new O(r,4,!1,r,null,!1,!1)}),["cols","rows","size","span"].forEach(function(r){D[r]=new O(r,6,!1,r,null,!1,!1)}),["rowSpan","start"].forEach(function(r){D[r]=new O(r,5,!1,r.toLowerCase(),null,!1,!1)});var U=/[\-:]([a-z])/g;function V(r){return r[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(r){var i=r.replace(U,V);D[i]=new O(i,1,!1,r,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(r){var i=r.replace(U,V);D[i]=new O(i,1,!1,r,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(r){var i=r.replace(U,V);D[i]=new O(i,1,!1,r,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(r){D[r]=new O(r,1,!1,r.toLowerCase(),null,!1,!1)}),D.xlinkHref=new O("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(r){D[r]=new O(r,1,!1,r.toLowerCase(),null,!0,!0)});function j(r,i,a,u){var d=D.hasOwnProperty(i)?D[i]:null;(d!==null?d.type!==0:u||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(k(i,a,d,u)&&(a=null),u||d===null?v(i)&&(a===null?r.removeAttribute(i):r.setAttribute(i,""+a)):d.mustUseProperty?r[d.propertyName]=a===null?d.type===3?!1:"":a:(i=d.attributeName,u=d.attributeNamespace,a===null?r.removeAttribute(i):(d=d.type,a=d===3||d===4&&a===!0?"":""+a,u?r.setAttributeNS(u,i,a):r.setAttribute(i,a))))}var ne=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ye=Symbol.for("react.element"),_e=Symbol.for("react.portal"),Ie=Symbol.for("react.fragment"),X=Symbol.for("react.strict_mode"),Ee=Symbol.for("react.profiler"),Be=Symbol.for("react.provider"),wt=Symbol.for("react.context"),ut=Symbol.for("react.forward_ref"),Je=Symbol.for("react.suspense"),ct=Symbol.for("react.suspense_list"),Ge=Symbol.for("react.memo"),Re=Symbol.for("react.lazy"),W=Symbol.for("react.offscreen"),N=Symbol.iterator;function H(r){return r===null||typeof r!="object"?null:(r=N&&r[N]||r["@@iterator"],typeof r=="function"?r:null)}var B=Object.assign,I;function A(r){if(I===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);I=i&&i[1]||""}return`
`+I+r}var q=!1;function te(r,i){if(!r||q)return"";q=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(P){var u=P}Reflect.construct(r,[],i)}else{try{i.call()}catch(P){u=P}r.call(i.prototype)}else{try{throw Error()}catch(P){u=P}r()}}catch(P){if(P&&u&&typeof P.stack=="string"){for(var d=P.stack.split(`
`),p=u.stack.split(`
`),g=d.length-1,w=p.length-1;1<=g&&0<=w&&d[g]!==p[w];)w--;for(;1<=g&&0<=w;g--,w--)if(d[g]!==p[w]){if(g!==1||w!==1)do if(g--,w--,0>w||d[g]!==p[w]){var C=`
`+d[g].replace(" at new "," at ");return r.displayName&&C.includes("<anonymous>")&&(C=C.replace("<anonymous>",r.displayName)),C}while(1<=g&&0<=w);break}}}finally{q=!1,Error.prepareStackTrace=a}return(r=r?r.displayName||r.name:"")?A(r):""}function ue(r){switch(r.tag){case 5:return A(r.type);case 16:return A("Lazy");case 13:return A("Suspense");case 19:return A("SuspenseList");case 0:case 2:case 15:return r=te(r.type,!1),r;case 11:return r=te(r.type.render,!1),r;case 1:return r=te(r.type,!0),r;default:return""}}function me(r){if(r==null)return null;if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r;switch(r){case Ie:return"Fragment";case _e:return"Portal";case Ee:return"Profiler";case X:return"StrictMode";case Je:return"Suspense";case ct:return"SuspenseList"}if(typeof r=="object")switch(r.$$typeof){case wt:return(r.displayName||"Context")+".Consumer";case Be:return(r._context.displayName||"Context")+".Provider";case ut:var i=r.render;return r=r.displayName,r||(r=i.displayName||i.name||"",r=r!==""?"ForwardRef("+r+")":"ForwardRef"),r;case Ge:return i=r.displayName||null,i!==null?i:me(r.type)||"Memo";case Re:i=r._payload,r=r._init;try{return me(r(i))}catch{}}return null}function ae(r){var i=r.type;switch(r.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return r=i.render,r=r.displayName||r.name||"",i.displayName||(r!==""?"ForwardRef("+r+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return me(i);case 8:return i===X?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function ve(r){switch(typeof r){case"boolean":case"number":case"string":case"undefined":return r;case"object":return r;default:return""}}function ce(r){var i=r.type;return(r=r.nodeName)&&r.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Xe(r){var i=ce(r)?"checked":"value",a=Object.getOwnPropertyDescriptor(r.constructor.prototype,i),u=""+r[i];if(!r.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var d=a.get,p=a.set;return Object.defineProperty(r,i,{configurable:!0,get:function(){return d.call(this)},set:function(g){u=""+g,p.call(this,g)}}),Object.defineProperty(r,i,{enumerable:a.enumerable}),{getValue:function(){return u},setValue:function(g){u=""+g},stopTracking:function(){r._valueTracker=null,delete r[i]}}}}function Bn(r){r._valueTracker||(r._valueTracker=Xe(r))}function Tr(r){if(!r)return!1;var i=r._valueTracker;if(!i)return!0;var a=i.getValue(),u="";return r&&(u=ce(r)?r.checked?"true":"false":r.value),r=u,r!==a?(i.setValue(r),!0):!1}function Lo(r){if(r=r||(typeof document<"u"?document:void 0),typeof r>"u")return null;try{return r.activeElement||r.body}catch{return r.body}}function tu(r,i){var a=i.checked;return B({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??r._wrapperState.initialChecked})}function cf(r,i){var a=i.defaultValue==null?"":i.defaultValue,u=i.checked!=null?i.checked:i.defaultChecked;a=ve(i.value!=null?i.value:a),r._wrapperState={initialChecked:u,initialValue:a,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function df(r,i){i=i.checked,i!=null&&j(r,"checked",i,!1)}function nu(r,i){df(r,i);var a=ve(i.value),u=i.type;if(a!=null)u==="number"?(a===0&&r.value===""||r.value!=a)&&(r.value=""+a):r.value!==""+a&&(r.value=""+a);else if(u==="submit"||u==="reset"){r.removeAttribute("value");return}i.hasOwnProperty("value")?ru(r,i.type,a):i.hasOwnProperty("defaultValue")&&ru(r,i.type,ve(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(r.defaultChecked=!!i.defaultChecked)}function hf(r,i,a){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var u=i.type;if(!(u!=="submit"&&u!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+r._wrapperState.initialValue,a||i===r.value||(r.value=i),r.defaultValue=i}a=r.name,a!==""&&(r.name=""),r.defaultChecked=!!r._wrapperState.initialChecked,a!==""&&(r.name=a)}function ru(r,i,a){(i!=="number"||Lo(r.ownerDocument)!==r)&&(a==null?r.defaultValue=""+r._wrapperState.initialValue:r.defaultValue!==""+a&&(r.defaultValue=""+a))}var ls=Array.isArray;function si(r,i,a,u){if(r=r.options,i){i={};for(var d=0;d<a.length;d++)i["$"+a[d]]=!0;for(a=0;a<r.length;a++)d=i.hasOwnProperty("$"+r[a].value),r[a].selected!==d&&(r[a].selected=d),d&&u&&(r[a].defaultSelected=!0)}else{for(a=""+ve(a),i=null,d=0;d<r.length;d++){if(r[d].value===a){r[d].selected=!0,u&&(r[d].defaultSelected=!0);return}i!==null||r[d].disabled||(i=r[d])}i!==null&&(i.selected=!0)}}function iu(r,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return B({},i,{value:void 0,defaultValue:void 0,children:""+r._wrapperState.initialValue})}function ff(r,i){var a=i.value;if(a==null){if(a=i.children,i=i.defaultValue,a!=null){if(i!=null)throw Error(t(92));if(ls(a)){if(1<a.length)throw Error(t(93));a=a[0]}i=a}i==null&&(i=""),a=i}r._wrapperState={initialValue:ve(a)}}function pf(r,i){var a=ve(i.value),u=ve(i.defaultValue);a!=null&&(a=""+a,a!==r.value&&(r.value=a),i.defaultValue==null&&r.defaultValue!==a&&(r.defaultValue=a)),u!=null&&(r.defaultValue=""+u)}function mf(r){var i=r.textContent;i===r._wrapperState.initialValue&&i!==""&&i!==null&&(r.value=i)}function gf(r){switch(r){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function su(r,i){return r==null||r==="http://www.w3.org/1999/xhtml"?gf(i):r==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":r}var Mo,yf=(function(r){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,a,u,d){MSApp.execUnsafeLocalFunction(function(){return r(i,a,u,d)})}:r})(function(r,i){if(r.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in r)r.innerHTML=i;else{for(Mo=Mo||document.createElement("div"),Mo.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=Mo.firstChild;r.firstChild;)r.removeChild(r.firstChild);for(;i.firstChild;)r.appendChild(i.firstChild)}});function us(r,i){if(i){var a=r.firstChild;if(a&&a===r.lastChild&&a.nodeType===3){a.nodeValue=i;return}}r.textContent=i}var cs={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},uE=["Webkit","ms","Moz","O"];Object.keys(cs).forEach(function(r){uE.forEach(function(i){i=i+r.charAt(0).toUpperCase()+r.substring(1),cs[i]=cs[r]})});function _f(r,i,a){return i==null||typeof i=="boolean"||i===""?"":a||typeof i!="number"||i===0||cs.hasOwnProperty(r)&&cs[r]?(""+i).trim():i+"px"}function vf(r,i){r=r.style;for(var a in i)if(i.hasOwnProperty(a)){var u=a.indexOf("--")===0,d=_f(a,i[a],u);a==="float"&&(a="cssFloat"),u?r.setProperty(a,d):r[a]=d}}var cE=B({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ou(r,i){if(i){if(cE[r]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,r));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function au(r,i){if(r.indexOf("-")===-1)return typeof i.is=="string";switch(r){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var lu=null;function uu(r){return r=r.target||r.srcElement||window,r.correspondingUseElement&&(r=r.correspondingUseElement),r.nodeType===3?r.parentNode:r}var cu=null,oi=null,ai=null;function wf(r){if(r=As(r)){if(typeof cu!="function")throw Error(t(280));var i=r.stateNode;i&&(i=sa(i),cu(r.stateNode,r.type,i))}}function Ef(r){oi?ai?ai.push(r):ai=[r]:oi=r}function Cf(){if(oi){var r=oi,i=ai;if(ai=oi=null,wf(r),i)for(r=0;r<i.length;r++)wf(i[r])}}function kf(r,i){return r(i)}function Sf(){}var du=!1;function If(r,i,a){if(du)return r(i,a);du=!0;try{return kf(r,i,a)}finally{du=!1,(oi!==null||ai!==null)&&(Sf(),Cf())}}function ds(r,i){var a=r.stateNode;if(a===null)return null;var u=sa(a);if(u===null)return null;a=u[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(r=r.type,u=!(r==="button"||r==="input"||r==="select"||r==="textarea")),r=!u;break e;default:r=!1}if(r)return null;if(a&&typeof a!="function")throw Error(t(231,i,typeof a));return a}var hu=!1;if(h)try{var hs={};Object.defineProperty(hs,"passive",{get:function(){hu=!0}}),window.addEventListener("test",hs,hs),window.removeEventListener("test",hs,hs)}catch{hu=!1}function dE(r,i,a,u,d,p,g,w,C){var P=Array.prototype.slice.call(arguments,3);try{i.apply(a,P)}catch(M){this.onError(M)}}var fs=!1,Fo=null,jo=!1,fu=null,hE={onError:function(r){fs=!0,Fo=r}};function fE(r,i,a,u,d,p,g,w,C){fs=!1,Fo=null,dE.apply(hE,arguments)}function pE(r,i,a,u,d,p,g,w,C){if(fE.apply(this,arguments),fs){if(fs){var P=Fo;fs=!1,Fo=null}else throw Error(t(198));jo||(jo=!0,fu=P)}}function xr(r){var i=r,a=r;if(r.alternate)for(;i.return;)i=i.return;else{r=i;do i=r,(i.flags&4098)!==0&&(a=i.return),r=i.return;while(r)}return i.tag===3?a:null}function Tf(r){if(r.tag===13){var i=r.memoizedState;if(i===null&&(r=r.alternate,r!==null&&(i=r.memoizedState)),i!==null)return i.dehydrated}return null}function xf(r){if(xr(r)!==r)throw Error(t(188))}function mE(r){var i=r.alternate;if(!i){if(i=xr(r),i===null)throw Error(t(188));return i!==r?null:r}for(var a=r,u=i;;){var d=a.return;if(d===null)break;var p=d.alternate;if(p===null){if(u=d.return,u!==null){a=u;continue}break}if(d.child===p.child){for(p=d.child;p;){if(p===a)return xf(d),r;if(p===u)return xf(d),i;p=p.sibling}throw Error(t(188))}if(a.return!==u.return)a=d,u=p;else{for(var g=!1,w=d.child;w;){if(w===a){g=!0,a=d,u=p;break}if(w===u){g=!0,u=d,a=p;break}w=w.sibling}if(!g){for(w=p.child;w;){if(w===a){g=!0,a=p,u=d;break}if(w===u){g=!0,u=p,a=d;break}w=w.sibling}if(!g)throw Error(t(189))}}if(a.alternate!==u)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?r:i}function Rf(r){return r=mE(r),r!==null?bf(r):null}function bf(r){if(r.tag===5||r.tag===6)return r;for(r=r.child;r!==null;){var i=bf(r);if(i!==null)return i;r=r.sibling}return null}var Nf=e.unstable_scheduleCallback,Pf=e.unstable_cancelCallback,gE=e.unstable_shouldYield,yE=e.unstable_requestPaint,Ve=e.unstable_now,_E=e.unstable_getCurrentPriorityLevel,pu=e.unstable_ImmediatePriority,Af=e.unstable_UserBlockingPriority,Uo=e.unstable_NormalPriority,vE=e.unstable_LowPriority,Df=e.unstable_IdlePriority,zo=null,hn=null;function wE(r){if(hn&&typeof hn.onCommitFiberRoot=="function")try{hn.onCommitFiberRoot(zo,r,void 0,(r.current.flags&128)===128)}catch{}}var Yt=Math.clz32?Math.clz32:kE,EE=Math.log,CE=Math.LN2;function kE(r){return r>>>=0,r===0?32:31-(EE(r)/CE|0)|0}var $o=64,Wo=4194304;function ps(r){switch(r&-r){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return r&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return r}}function Bo(r,i){var a=r.pendingLanes;if(a===0)return 0;var u=0,d=r.suspendedLanes,p=r.pingedLanes,g=a&268435455;if(g!==0){var w=g&~d;w!==0?u=ps(w):(p&=g,p!==0&&(u=ps(p)))}else g=a&~d,g!==0?u=ps(g):p!==0&&(u=ps(p));if(u===0)return 0;if(i!==0&&i!==u&&(i&d)===0&&(d=u&-u,p=i&-i,d>=p||d===16&&(p&4194240)!==0))return i;if((u&4)!==0&&(u|=a&16),i=r.entangledLanes,i!==0)for(r=r.entanglements,i&=u;0<i;)a=31-Yt(i),d=1<<a,u|=r[a],i&=~d;return u}function SE(r,i){switch(r){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function IE(r,i){for(var a=r.suspendedLanes,u=r.pingedLanes,d=r.expirationTimes,p=r.pendingLanes;0<p;){var g=31-Yt(p),w=1<<g,C=d[g];C===-1?((w&a)===0||(w&u)!==0)&&(d[g]=SE(w,i)):C<=i&&(r.expiredLanes|=w),p&=~w}}function mu(r){return r=r.pendingLanes&-1073741825,r!==0?r:r&1073741824?1073741824:0}function Of(){var r=$o;return $o<<=1,($o&4194240)===0&&($o=64),r}function gu(r){for(var i=[],a=0;31>a;a++)i.push(r);return i}function ms(r,i,a){r.pendingLanes|=i,i!==536870912&&(r.suspendedLanes=0,r.pingedLanes=0),r=r.eventTimes,i=31-Yt(i),r[i]=a}function TE(r,i){var a=r.pendingLanes&~i;r.pendingLanes=i,r.suspendedLanes=0,r.pingedLanes=0,r.expiredLanes&=i,r.mutableReadLanes&=i,r.entangledLanes&=i,i=r.entanglements;var u=r.eventTimes;for(r=r.expirationTimes;0<a;){var d=31-Yt(a),p=1<<d;i[d]=0,u[d]=-1,r[d]=-1,a&=~p}}function yu(r,i){var a=r.entangledLanes|=i;for(r=r.entanglements;a;){var u=31-Yt(a),d=1<<u;d&i|r[u]&i&&(r[u]|=i),a&=~d}}var Se=0;function Lf(r){return r&=-r,1<r?4<r?(r&268435455)!==0?16:536870912:4:1}var Mf,_u,Ff,jf,Uf,vu=!1,Vo=[],Vn=null,Hn=null,Gn=null,gs=new Map,ys=new Map,qn=[],xE="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function zf(r,i){switch(r){case"focusin":case"focusout":Vn=null;break;case"dragenter":case"dragleave":Hn=null;break;case"mouseover":case"mouseout":Gn=null;break;case"pointerover":case"pointerout":gs.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":ys.delete(i.pointerId)}}function _s(r,i,a,u,d,p){return r===null||r.nativeEvent!==p?(r={blockedOn:i,domEventName:a,eventSystemFlags:u,nativeEvent:p,targetContainers:[d]},i!==null&&(i=As(i),i!==null&&_u(i)),r):(r.eventSystemFlags|=u,i=r.targetContainers,d!==null&&i.indexOf(d)===-1&&i.push(d),r)}function RE(r,i,a,u,d){switch(i){case"focusin":return Vn=_s(Vn,r,i,a,u,d),!0;case"dragenter":return Hn=_s(Hn,r,i,a,u,d),!0;case"mouseover":return Gn=_s(Gn,r,i,a,u,d),!0;case"pointerover":var p=d.pointerId;return gs.set(p,_s(gs.get(p)||null,r,i,a,u,d)),!0;case"gotpointercapture":return p=d.pointerId,ys.set(p,_s(ys.get(p)||null,r,i,a,u,d)),!0}return!1}function $f(r){var i=Rr(r.target);if(i!==null){var a=xr(i);if(a!==null){if(i=a.tag,i===13){if(i=Tf(a),i!==null){r.blockedOn=i,Uf(r.priority,function(){Ff(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){r.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}r.blockedOn=null}function Ho(r){if(r.blockedOn!==null)return!1;for(var i=r.targetContainers;0<i.length;){var a=Eu(r.domEventName,r.eventSystemFlags,i[0],r.nativeEvent);if(a===null){a=r.nativeEvent;var u=new a.constructor(a.type,a);lu=u,a.target.dispatchEvent(u),lu=null}else return i=As(a),i!==null&&_u(i),r.blockedOn=a,!1;i.shift()}return!0}function Wf(r,i,a){Ho(r)&&a.delete(i)}function bE(){vu=!1,Vn!==null&&Ho(Vn)&&(Vn=null),Hn!==null&&Ho(Hn)&&(Hn=null),Gn!==null&&Ho(Gn)&&(Gn=null),gs.forEach(Wf),ys.forEach(Wf)}function vs(r,i){r.blockedOn===i&&(r.blockedOn=null,vu||(vu=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,bE)))}function ws(r){function i(d){return vs(d,r)}if(0<Vo.length){vs(Vo[0],r);for(var a=1;a<Vo.length;a++){var u=Vo[a];u.blockedOn===r&&(u.blockedOn=null)}}for(Vn!==null&&vs(Vn,r),Hn!==null&&vs(Hn,r),Gn!==null&&vs(Gn,r),gs.forEach(i),ys.forEach(i),a=0;a<qn.length;a++)u=qn[a],u.blockedOn===r&&(u.blockedOn=null);for(;0<qn.length&&(a=qn[0],a.blockedOn===null);)$f(a),a.blockedOn===null&&qn.shift()}var li=ne.ReactCurrentBatchConfig,Go=!0;function NE(r,i,a,u){var d=Se,p=li.transition;li.transition=null;try{Se=1,wu(r,i,a,u)}finally{Se=d,li.transition=p}}function PE(r,i,a,u){var d=Se,p=li.transition;li.transition=null;try{Se=4,wu(r,i,a,u)}finally{Se=d,li.transition=p}}function wu(r,i,a,u){if(Go){var d=Eu(r,i,a,u);if(d===null)ju(r,i,u,qo,a),zf(r,u);else if(RE(d,r,i,a,u))u.stopPropagation();else if(zf(r,u),i&4&&-1<xE.indexOf(r)){for(;d!==null;){var p=As(d);if(p!==null&&Mf(p),p=Eu(r,i,a,u),p===null&&ju(r,i,u,qo,a),p===d)break;d=p}d!==null&&u.stopPropagation()}else ju(r,i,u,null,a)}}var qo=null;function Eu(r,i,a,u){if(qo=null,r=uu(u),r=Rr(r),r!==null)if(i=xr(r),i===null)r=null;else if(a=i.tag,a===13){if(r=Tf(i),r!==null)return r;r=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;r=null}else i!==r&&(r=null);return qo=r,null}function Bf(r){switch(r){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(_E()){case pu:return 1;case Af:return 4;case Uo:case vE:return 16;case Df:return 536870912;default:return 16}default:return 16}}var Kn=null,Cu=null,Ko=null;function Vf(){if(Ko)return Ko;var r,i=Cu,a=i.length,u,d="value"in Kn?Kn.value:Kn.textContent,p=d.length;for(r=0;r<a&&i[r]===d[r];r++);var g=a-r;for(u=1;u<=g&&i[a-u]===d[p-u];u++);return Ko=d.slice(r,1<u?1-u:void 0)}function Yo(r){var i=r.keyCode;return"charCode"in r?(r=r.charCode,r===0&&i===13&&(r=13)):r=i,r===10&&(r=13),32<=r||r===13?r:0}function Qo(){return!0}function Hf(){return!1}function Ot(r){function i(a,u,d,p,g){this._reactName=a,this._targetInst=d,this.type=u,this.nativeEvent=p,this.target=g,this.currentTarget=null;for(var w in r)r.hasOwnProperty(w)&&(a=r[w],this[w]=a?a(p):p[w]);return this.isDefaultPrevented=(p.defaultPrevented!=null?p.defaultPrevented:p.returnValue===!1)?Qo:Hf,this.isPropagationStopped=Hf,this}return B(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Qo)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Qo)},persist:function(){},isPersistent:Qo}),i}var ui={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(r){return r.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ku=Ot(ui),Es=B({},ui,{view:0,detail:0}),AE=Ot(Es),Su,Iu,Cs,Jo=B({},Es,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:xu,button:0,buttons:0,relatedTarget:function(r){return r.relatedTarget===void 0?r.fromElement===r.srcElement?r.toElement:r.fromElement:r.relatedTarget},movementX:function(r){return"movementX"in r?r.movementX:(r!==Cs&&(Cs&&r.type==="mousemove"?(Su=r.screenX-Cs.screenX,Iu=r.screenY-Cs.screenY):Iu=Su=0,Cs=r),Su)},movementY:function(r){return"movementY"in r?r.movementY:Iu}}),Gf=Ot(Jo),DE=B({},Jo,{dataTransfer:0}),OE=Ot(DE),LE=B({},Es,{relatedTarget:0}),Tu=Ot(LE),ME=B({},ui,{animationName:0,elapsedTime:0,pseudoElement:0}),FE=Ot(ME),jE=B({},ui,{clipboardData:function(r){return"clipboardData"in r?r.clipboardData:window.clipboardData}}),UE=Ot(jE),zE=B({},ui,{data:0}),qf=Ot(zE),$E={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},WE={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},BE={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function VE(r){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(r):(r=BE[r])?!!i[r]:!1}function xu(){return VE}var HE=B({},Es,{key:function(r){if(r.key){var i=$E[r.key]||r.key;if(i!=="Unidentified")return i}return r.type==="keypress"?(r=Yo(r),r===13?"Enter":String.fromCharCode(r)):r.type==="keydown"||r.type==="keyup"?WE[r.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:xu,charCode:function(r){return r.type==="keypress"?Yo(r):0},keyCode:function(r){return r.type==="keydown"||r.type==="keyup"?r.keyCode:0},which:function(r){return r.type==="keypress"?Yo(r):r.type==="keydown"||r.type==="keyup"?r.keyCode:0}}),GE=Ot(HE),qE=B({},Jo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Kf=Ot(qE),KE=B({},Es,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:xu}),YE=Ot(KE),QE=B({},ui,{propertyName:0,elapsedTime:0,pseudoElement:0}),JE=Ot(QE),XE=B({},Jo,{deltaX:function(r){return"deltaX"in r?r.deltaX:"wheelDeltaX"in r?-r.wheelDeltaX:0},deltaY:function(r){return"deltaY"in r?r.deltaY:"wheelDeltaY"in r?-r.wheelDeltaY:"wheelDelta"in r?-r.wheelDelta:0},deltaZ:0,deltaMode:0}),ZE=Ot(XE),e0=[9,13,27,32],Ru=h&&"CompositionEvent"in window,ks=null;h&&"documentMode"in document&&(ks=document.documentMode);var t0=h&&"TextEvent"in window&&!ks,Yf=h&&(!Ru||ks&&8<ks&&11>=ks),Qf=" ",Jf=!1;function Xf(r,i){switch(r){case"keyup":return e0.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Zf(r){return r=r.detail,typeof r=="object"&&"data"in r?r.data:null}var ci=!1;function n0(r,i){switch(r){case"compositionend":return Zf(i);case"keypress":return i.which!==32?null:(Jf=!0,Qf);case"textInput":return r=i.data,r===Qf&&Jf?null:r;default:return null}}function r0(r,i){if(ci)return r==="compositionend"||!Ru&&Xf(r,i)?(r=Vf(),Ko=Cu=Kn=null,ci=!1,r):null;switch(r){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Yf&&i.locale!=="ko"?null:i.data;default:return null}}var i0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ep(r){var i=r&&r.nodeName&&r.nodeName.toLowerCase();return i==="input"?!!i0[r.type]:i==="textarea"}function tp(r,i,a,u){Ef(u),i=na(i,"onChange"),0<i.length&&(a=new ku("onChange","change",null,a,u),r.push({event:a,listeners:i}))}var Ss=null,Is=null;function s0(r){vp(r,0)}function Xo(r){var i=mi(r);if(Tr(i))return r}function o0(r,i){if(r==="change")return i}var np=!1;if(h){var bu;if(h){var Nu="oninput"in document;if(!Nu){var rp=document.createElement("div");rp.setAttribute("oninput","return;"),Nu=typeof rp.oninput=="function"}bu=Nu}else bu=!1;np=bu&&(!document.documentMode||9<document.documentMode)}function ip(){Ss&&(Ss.detachEvent("onpropertychange",sp),Is=Ss=null)}function sp(r){if(r.propertyName==="value"&&Xo(Is)){var i=[];tp(i,Is,r,uu(r)),If(s0,i)}}function a0(r,i,a){r==="focusin"?(ip(),Ss=i,Is=a,Ss.attachEvent("onpropertychange",sp)):r==="focusout"&&ip()}function l0(r){if(r==="selectionchange"||r==="keyup"||r==="keydown")return Xo(Is)}function u0(r,i){if(r==="click")return Xo(i)}function c0(r,i){if(r==="input"||r==="change")return Xo(i)}function d0(r,i){return r===i&&(r!==0||1/r===1/i)||r!==r&&i!==i}var Qt=typeof Object.is=="function"?Object.is:d0;function Ts(r,i){if(Qt(r,i))return!0;if(typeof r!="object"||r===null||typeof i!="object"||i===null)return!1;var a=Object.keys(r),u=Object.keys(i);if(a.length!==u.length)return!1;for(u=0;u<a.length;u++){var d=a[u];if(!f.call(i,d)||!Qt(r[d],i[d]))return!1}return!0}function op(r){for(;r&&r.firstChild;)r=r.firstChild;return r}function ap(r,i){var a=op(r);r=0;for(var u;a;){if(a.nodeType===3){if(u=r+a.textContent.length,r<=i&&u>=i)return{node:a,offset:i-r};r=u}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=op(a)}}function lp(r,i){return r&&i?r===i?!0:r&&r.nodeType===3?!1:i&&i.nodeType===3?lp(r,i.parentNode):"contains"in r?r.contains(i):r.compareDocumentPosition?!!(r.compareDocumentPosition(i)&16):!1:!1}function up(){for(var r=window,i=Lo();i instanceof r.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)r=i.contentWindow;else break;i=Lo(r.document)}return i}function Pu(r){var i=r&&r.nodeName&&r.nodeName.toLowerCase();return i&&(i==="input"&&(r.type==="text"||r.type==="search"||r.type==="tel"||r.type==="url"||r.type==="password")||i==="textarea"||r.contentEditable==="true")}function h0(r){var i=up(),a=r.focusedElem,u=r.selectionRange;if(i!==a&&a&&a.ownerDocument&&lp(a.ownerDocument.documentElement,a)){if(u!==null&&Pu(a)){if(i=u.start,r=u.end,r===void 0&&(r=i),"selectionStart"in a)a.selectionStart=i,a.selectionEnd=Math.min(r,a.value.length);else if(r=(i=a.ownerDocument||document)&&i.defaultView||window,r.getSelection){r=r.getSelection();var d=a.textContent.length,p=Math.min(u.start,d);u=u.end===void 0?p:Math.min(u.end,d),!r.extend&&p>u&&(d=u,u=p,p=d),d=ap(a,p);var g=ap(a,u);d&&g&&(r.rangeCount!==1||r.anchorNode!==d.node||r.anchorOffset!==d.offset||r.focusNode!==g.node||r.focusOffset!==g.offset)&&(i=i.createRange(),i.setStart(d.node,d.offset),r.removeAllRanges(),p>u?(r.addRange(i),r.extend(g.node,g.offset)):(i.setEnd(g.node,g.offset),r.addRange(i)))}}for(i=[],r=a;r=r.parentNode;)r.nodeType===1&&i.push({element:r,left:r.scrollLeft,top:r.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<i.length;a++)r=i[a],r.element.scrollLeft=r.left,r.element.scrollTop=r.top}}var f0=h&&"documentMode"in document&&11>=document.documentMode,di=null,Au=null,xs=null,Du=!1;function cp(r,i,a){var u=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Du||di==null||di!==Lo(u)||(u=di,"selectionStart"in u&&Pu(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),xs&&Ts(xs,u)||(xs=u,u=na(Au,"onSelect"),0<u.length&&(i=new ku("onSelect","select",null,i,a),r.push({event:i,listeners:u}),i.target=di)))}function Zo(r,i){var a={};return a[r.toLowerCase()]=i.toLowerCase(),a["Webkit"+r]="webkit"+i,a["Moz"+r]="moz"+i,a}var hi={animationend:Zo("Animation","AnimationEnd"),animationiteration:Zo("Animation","AnimationIteration"),animationstart:Zo("Animation","AnimationStart"),transitionend:Zo("Transition","TransitionEnd")},Ou={},dp={};h&&(dp=document.createElement("div").style,"AnimationEvent"in window||(delete hi.animationend.animation,delete hi.animationiteration.animation,delete hi.animationstart.animation),"TransitionEvent"in window||delete hi.transitionend.transition);function ea(r){if(Ou[r])return Ou[r];if(!hi[r])return r;var i=hi[r],a;for(a in i)if(i.hasOwnProperty(a)&&a in dp)return Ou[r]=i[a];return r}var hp=ea("animationend"),fp=ea("animationiteration"),pp=ea("animationstart"),mp=ea("transitionend"),gp=new Map,yp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Yn(r,i){gp.set(r,i),l(i,[r])}for(var Lu=0;Lu<yp.length;Lu++){var Mu=yp[Lu],p0=Mu.toLowerCase(),m0=Mu[0].toUpperCase()+Mu.slice(1);Yn(p0,"on"+m0)}Yn(hp,"onAnimationEnd"),Yn(fp,"onAnimationIteration"),Yn(pp,"onAnimationStart"),Yn("dblclick","onDoubleClick"),Yn("focusin","onFocus"),Yn("focusout","onBlur"),Yn(mp,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Rs="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),g0=new Set("cancel close invalid load scroll toggle".split(" ").concat(Rs));function _p(r,i,a){var u=r.type||"unknown-event";r.currentTarget=a,pE(u,i,void 0,r),r.currentTarget=null}function vp(r,i){i=(i&4)!==0;for(var a=0;a<r.length;a++){var u=r[a],d=u.event;u=u.listeners;e:{var p=void 0;if(i)for(var g=u.length-1;0<=g;g--){var w=u[g],C=w.instance,P=w.currentTarget;if(w=w.listener,C!==p&&d.isPropagationStopped())break e;_p(d,w,P),p=C}else for(g=0;g<u.length;g++){if(w=u[g],C=w.instance,P=w.currentTarget,w=w.listener,C!==p&&d.isPropagationStopped())break e;_p(d,w,P),p=C}}}if(jo)throw r=fu,jo=!1,fu=null,r}function Ae(r,i){var a=i[Vu];a===void 0&&(a=i[Vu]=new Set);var u=r+"__bubble";a.has(u)||(wp(i,r,2,!1),a.add(u))}function Fu(r,i,a){var u=0;i&&(u|=4),wp(a,r,u,i)}var ta="_reactListening"+Math.random().toString(36).slice(2);function bs(r){if(!r[ta]){r[ta]=!0,s.forEach(function(a){a!=="selectionchange"&&(g0.has(a)||Fu(a,!1,r),Fu(a,!0,r))});var i=r.nodeType===9?r:r.ownerDocument;i===null||i[ta]||(i[ta]=!0,Fu("selectionchange",!1,i))}}function wp(r,i,a,u){switch(Bf(i)){case 1:var d=NE;break;case 4:d=PE;break;default:d=wu}a=d.bind(null,i,a,r),d=void 0,!hu||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(d=!0),u?d!==void 0?r.addEventListener(i,a,{capture:!0,passive:d}):r.addEventListener(i,a,!0):d!==void 0?r.addEventListener(i,a,{passive:d}):r.addEventListener(i,a,!1)}function ju(r,i,a,u,d){var p=u;if((i&1)===0&&(i&2)===0&&u!==null)e:for(;;){if(u===null)return;var g=u.tag;if(g===3||g===4){var w=u.stateNode.containerInfo;if(w===d||w.nodeType===8&&w.parentNode===d)break;if(g===4)for(g=u.return;g!==null;){var C=g.tag;if((C===3||C===4)&&(C=g.stateNode.containerInfo,C===d||C.nodeType===8&&C.parentNode===d))return;g=g.return}for(;w!==null;){if(g=Rr(w),g===null)return;if(C=g.tag,C===5||C===6){u=p=g;continue e}w=w.parentNode}}u=u.return}If(function(){var P=p,M=uu(a),F=[];e:{var L=gp.get(r);if(L!==void 0){var G=ku,Y=r;switch(r){case"keypress":if(Yo(a)===0)break e;case"keydown":case"keyup":G=GE;break;case"focusin":Y="focus",G=Tu;break;case"focusout":Y="blur",G=Tu;break;case"beforeblur":case"afterblur":G=Tu;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":G=Gf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":G=OE;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":G=YE;break;case hp:case fp:case pp:G=FE;break;case mp:G=JE;break;case"scroll":G=AE;break;case"wheel":G=ZE;break;case"copy":case"cut":case"paste":G=UE;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":G=Kf}var Z=(i&4)!==0,He=!Z&&r==="scroll",R=Z?L!==null?L+"Capture":null:L;Z=[];for(var S=P,b;S!==null;){b=S;var z=b.stateNode;if(b.tag===5&&z!==null&&(b=z,R!==null&&(z=ds(S,R),z!=null&&Z.push(Ns(S,z,b)))),He)break;S=S.return}0<Z.length&&(L=new G(L,Y,null,a,M),F.push({event:L,listeners:Z}))}}if((i&7)===0){e:{if(L=r==="mouseover"||r==="pointerover",G=r==="mouseout"||r==="pointerout",L&&a!==lu&&(Y=a.relatedTarget||a.fromElement)&&(Rr(Y)||Y[kn]))break e;if((G||L)&&(L=M.window===M?M:(L=M.ownerDocument)?L.defaultView||L.parentWindow:window,G?(Y=a.relatedTarget||a.toElement,G=P,Y=Y?Rr(Y):null,Y!==null&&(He=xr(Y),Y!==He||Y.tag!==5&&Y.tag!==6)&&(Y=null)):(G=null,Y=P),G!==Y)){if(Z=Gf,z="onMouseLeave",R="onMouseEnter",S="mouse",(r==="pointerout"||r==="pointerover")&&(Z=Kf,z="onPointerLeave",R="onPointerEnter",S="pointer"),He=G==null?L:mi(G),b=Y==null?L:mi(Y),L=new Z(z,S+"leave",G,a,M),L.target=He,L.relatedTarget=b,z=null,Rr(M)===P&&(Z=new Z(R,S+"enter",Y,a,M),Z.target=b,Z.relatedTarget=He,z=Z),He=z,G&&Y)t:{for(Z=G,R=Y,S=0,b=Z;b;b=fi(b))S++;for(b=0,z=R;z;z=fi(z))b++;for(;0<S-b;)Z=fi(Z),S--;for(;0<b-S;)R=fi(R),b--;for(;S--;){if(Z===R||R!==null&&Z===R.alternate)break t;Z=fi(Z),R=fi(R)}Z=null}else Z=null;G!==null&&Ep(F,L,G,Z,!1),Y!==null&&He!==null&&Ep(F,He,Y,Z,!0)}}e:{if(L=P?mi(P):window,G=L.nodeName&&L.nodeName.toLowerCase(),G==="select"||G==="input"&&L.type==="file")var ee=o0;else if(ep(L))if(np)ee=c0;else{ee=l0;var re=a0}else(G=L.nodeName)&&G.toLowerCase()==="input"&&(L.type==="checkbox"||L.type==="radio")&&(ee=u0);if(ee&&(ee=ee(r,P))){tp(F,ee,a,M);break e}re&&re(r,L,P),r==="focusout"&&(re=L._wrapperState)&&re.controlled&&L.type==="number"&&ru(L,"number",L.value)}switch(re=P?mi(P):window,r){case"focusin":(ep(re)||re.contentEditable==="true")&&(di=re,Au=P,xs=null);break;case"focusout":xs=Au=di=null;break;case"mousedown":Du=!0;break;case"contextmenu":case"mouseup":case"dragend":Du=!1,cp(F,a,M);break;case"selectionchange":if(f0)break;case"keydown":case"keyup":cp(F,a,M)}var ie;if(Ru)e:{switch(r){case"compositionstart":var le="onCompositionStart";break e;case"compositionend":le="onCompositionEnd";break e;case"compositionupdate":le="onCompositionUpdate";break e}le=void 0}else ci?Xf(r,a)&&(le="onCompositionEnd"):r==="keydown"&&a.keyCode===229&&(le="onCompositionStart");le&&(Yf&&a.locale!=="ko"&&(ci||le!=="onCompositionStart"?le==="onCompositionEnd"&&ci&&(ie=Vf()):(Kn=M,Cu="value"in Kn?Kn.value:Kn.textContent,ci=!0)),re=na(P,le),0<re.length&&(le=new qf(le,r,null,a,M),F.push({event:le,listeners:re}),ie?le.data=ie:(ie=Zf(a),ie!==null&&(le.data=ie)))),(ie=t0?n0(r,a):r0(r,a))&&(P=na(P,"onBeforeInput"),0<P.length&&(M=new qf("onBeforeInput","beforeinput",null,a,M),F.push({event:M,listeners:P}),M.data=ie))}vp(F,i)})}function Ns(r,i,a){return{instance:r,listener:i,currentTarget:a}}function na(r,i){for(var a=i+"Capture",u=[];r!==null;){var d=r,p=d.stateNode;d.tag===5&&p!==null&&(d=p,p=ds(r,a),p!=null&&u.unshift(Ns(r,p,d)),p=ds(r,i),p!=null&&u.push(Ns(r,p,d))),r=r.return}return u}function fi(r){if(r===null)return null;do r=r.return;while(r&&r.tag!==5);return r||null}function Ep(r,i,a,u,d){for(var p=i._reactName,g=[];a!==null&&a!==u;){var w=a,C=w.alternate,P=w.stateNode;if(C!==null&&C===u)break;w.tag===5&&P!==null&&(w=P,d?(C=ds(a,p),C!=null&&g.unshift(Ns(a,C,w))):d||(C=ds(a,p),C!=null&&g.push(Ns(a,C,w)))),a=a.return}g.length!==0&&r.push({event:i,listeners:g})}var y0=/\r\n?/g,_0=/\u0000|\uFFFD/g;function Cp(r){return(typeof r=="string"?r:""+r).replace(y0,`
`).replace(_0,"")}function ra(r,i,a){if(i=Cp(i),Cp(r)!==i&&a)throw Error(t(425))}function ia(){}var Uu=null,zu=null;function $u(r,i){return r==="textarea"||r==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Wu=typeof setTimeout=="function"?setTimeout:void 0,v0=typeof clearTimeout=="function"?clearTimeout:void 0,kp=typeof Promise=="function"?Promise:void 0,w0=typeof queueMicrotask=="function"?queueMicrotask:typeof kp<"u"?function(r){return kp.resolve(null).then(r).catch(E0)}:Wu;function E0(r){setTimeout(function(){throw r})}function Bu(r,i){var a=i,u=0;do{var d=a.nextSibling;if(r.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(u===0){r.removeChild(d),ws(i);return}u--}else a!=="$"&&a!=="$?"&&a!=="$!"||u++;a=d}while(a);ws(i)}function Qn(r){for(;r!=null;r=r.nextSibling){var i=r.nodeType;if(i===1||i===3)break;if(i===8){if(i=r.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return r}function Sp(r){r=r.previousSibling;for(var i=0;r;){if(r.nodeType===8){var a=r.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return r;i--}else a==="/$"&&i++}r=r.previousSibling}return null}var pi=Math.random().toString(36).slice(2),fn="__reactFiber$"+pi,Ps="__reactProps$"+pi,kn="__reactContainer$"+pi,Vu="__reactEvents$"+pi,C0="__reactListeners$"+pi,k0="__reactHandles$"+pi;function Rr(r){var i=r[fn];if(i)return i;for(var a=r.parentNode;a;){if(i=a[kn]||a[fn]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(r=Sp(r);r!==null;){if(a=r[fn])return a;r=Sp(r)}return i}r=a,a=r.parentNode}return null}function As(r){return r=r[fn]||r[kn],!r||r.tag!==5&&r.tag!==6&&r.tag!==13&&r.tag!==3?null:r}function mi(r){if(r.tag===5||r.tag===6)return r.stateNode;throw Error(t(33))}function sa(r){return r[Ps]||null}var Hu=[],gi=-1;function Jn(r){return{current:r}}function De(r){0>gi||(r.current=Hu[gi],Hu[gi]=null,gi--)}function be(r,i){gi++,Hu[gi]=r.current,r.current=i}var Xn={},mt=Jn(Xn),Tt=Jn(!1),br=Xn;function yi(r,i){var a=r.type.contextTypes;if(!a)return Xn;var u=r.stateNode;if(u&&u.__reactInternalMemoizedUnmaskedChildContext===i)return u.__reactInternalMemoizedMaskedChildContext;var d={},p;for(p in a)d[p]=i[p];return u&&(r=r.stateNode,r.__reactInternalMemoizedUnmaskedChildContext=i,r.__reactInternalMemoizedMaskedChildContext=d),d}function xt(r){return r=r.childContextTypes,r!=null}function oa(){De(Tt),De(mt)}function Ip(r,i,a){if(mt.current!==Xn)throw Error(t(168));be(mt,i),be(Tt,a)}function Tp(r,i,a){var u=r.stateNode;if(i=i.childContextTypes,typeof u.getChildContext!="function")return a;u=u.getChildContext();for(var d in u)if(!(d in i))throw Error(t(108,ae(r)||"Unknown",d));return B({},a,u)}function aa(r){return r=(r=r.stateNode)&&r.__reactInternalMemoizedMergedChildContext||Xn,br=mt.current,be(mt,r),be(Tt,Tt.current),!0}function xp(r,i,a){var u=r.stateNode;if(!u)throw Error(t(169));a?(r=Tp(r,i,br),u.__reactInternalMemoizedMergedChildContext=r,De(Tt),De(mt),be(mt,r)):De(Tt),be(Tt,a)}var Sn=null,la=!1,Gu=!1;function Rp(r){Sn===null?Sn=[r]:Sn.push(r)}function S0(r){la=!0,Rp(r)}function Zn(){if(!Gu&&Sn!==null){Gu=!0;var r=0,i=Se;try{var a=Sn;for(Se=1;r<a.length;r++){var u=a[r];do u=u(!0);while(u!==null)}Sn=null,la=!1}catch(d){throw Sn!==null&&(Sn=Sn.slice(r+1)),Nf(pu,Zn),d}finally{Se=i,Gu=!1}}return null}var _i=[],vi=0,ua=null,ca=0,Ut=[],zt=0,Nr=null,In=1,Tn="";function Pr(r,i){_i[vi++]=ca,_i[vi++]=ua,ua=r,ca=i}function bp(r,i,a){Ut[zt++]=In,Ut[zt++]=Tn,Ut[zt++]=Nr,Nr=r;var u=In;r=Tn;var d=32-Yt(u)-1;u&=~(1<<d),a+=1;var p=32-Yt(i)+d;if(30<p){var g=d-d%5;p=(u&(1<<g)-1).toString(32),u>>=g,d-=g,In=1<<32-Yt(i)+d|a<<d|u,Tn=p+r}else In=1<<p|a<<d|u,Tn=r}function qu(r){r.return!==null&&(Pr(r,1),bp(r,1,0))}function Ku(r){for(;r===ua;)ua=_i[--vi],_i[vi]=null,ca=_i[--vi],_i[vi]=null;for(;r===Nr;)Nr=Ut[--zt],Ut[zt]=null,Tn=Ut[--zt],Ut[zt]=null,In=Ut[--zt],Ut[zt]=null}var Lt=null,Mt=null,Oe=!1,Jt=null;function Np(r,i){var a=Vt(5,null,null,0);a.elementType="DELETED",a.stateNode=i,a.return=r,i=r.deletions,i===null?(r.deletions=[a],r.flags|=16):i.push(a)}function Pp(r,i){switch(r.tag){case 5:var a=r.type;return i=i.nodeType!==1||a.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(r.stateNode=i,Lt=r,Mt=Qn(i.firstChild),!0):!1;case 6:return i=r.pendingProps===""||i.nodeType!==3?null:i,i!==null?(r.stateNode=i,Lt=r,Mt=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(a=Nr!==null?{id:In,overflow:Tn}:null,r.memoizedState={dehydrated:i,treeContext:a,retryLane:1073741824},a=Vt(18,null,null,0),a.stateNode=i,a.return=r,r.child=a,Lt=r,Mt=null,!0):!1;default:return!1}}function Yu(r){return(r.mode&1)!==0&&(r.flags&128)===0}function Qu(r){if(Oe){var i=Mt;if(i){var a=i;if(!Pp(r,i)){if(Yu(r))throw Error(t(418));i=Qn(a.nextSibling);var u=Lt;i&&Pp(r,i)?Np(u,a):(r.flags=r.flags&-4097|2,Oe=!1,Lt=r)}}else{if(Yu(r))throw Error(t(418));r.flags=r.flags&-4097|2,Oe=!1,Lt=r}}}function Ap(r){for(r=r.return;r!==null&&r.tag!==5&&r.tag!==3&&r.tag!==13;)r=r.return;Lt=r}function da(r){if(r!==Lt)return!1;if(!Oe)return Ap(r),Oe=!0,!1;var i;if((i=r.tag!==3)&&!(i=r.tag!==5)&&(i=r.type,i=i!=="head"&&i!=="body"&&!$u(r.type,r.memoizedProps)),i&&(i=Mt)){if(Yu(r))throw Dp(),Error(t(418));for(;i;)Np(r,i),i=Qn(i.nextSibling)}if(Ap(r),r.tag===13){if(r=r.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(t(317));e:{for(r=r.nextSibling,i=0;r;){if(r.nodeType===8){var a=r.data;if(a==="/$"){if(i===0){Mt=Qn(r.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++}r=r.nextSibling}Mt=null}}else Mt=Lt?Qn(r.stateNode.nextSibling):null;return!0}function Dp(){for(var r=Mt;r;)r=Qn(r.nextSibling)}function wi(){Mt=Lt=null,Oe=!1}function Ju(r){Jt===null?Jt=[r]:Jt.push(r)}var I0=ne.ReactCurrentBatchConfig;function Ds(r,i,a){if(r=a.ref,r!==null&&typeof r!="function"&&typeof r!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var u=a.stateNode}if(!u)throw Error(t(147,r));var d=u,p=""+r;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===p?i.ref:(i=function(g){var w=d.refs;g===null?delete w[p]:w[p]=g},i._stringRef=p,i)}if(typeof r!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,r))}return r}function ha(r,i){throw r=Object.prototype.toString.call(i),Error(t(31,r==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":r))}function Op(r){var i=r._init;return i(r._payload)}function Lp(r){function i(R,S){if(r){var b=R.deletions;b===null?(R.deletions=[S],R.flags|=16):b.push(S)}}function a(R,S){if(!r)return null;for(;S!==null;)i(R,S),S=S.sibling;return null}function u(R,S){for(R=new Map;S!==null;)S.key!==null?R.set(S.key,S):R.set(S.index,S),S=S.sibling;return R}function d(R,S){return R=ar(R,S),R.index=0,R.sibling=null,R}function p(R,S,b){return R.index=b,r?(b=R.alternate,b!==null?(b=b.index,b<S?(R.flags|=2,S):b):(R.flags|=2,S)):(R.flags|=1048576,S)}function g(R){return r&&R.alternate===null&&(R.flags|=2),R}function w(R,S,b,z){return S===null||S.tag!==6?(S=Wc(b,R.mode,z),S.return=R,S):(S=d(S,b),S.return=R,S)}function C(R,S,b,z){var ee=b.type;return ee===Ie?M(R,S,b.props.children,z,b.key):S!==null&&(S.elementType===ee||typeof ee=="object"&&ee!==null&&ee.$$typeof===Re&&Op(ee)===S.type)?(z=d(S,b.props),z.ref=Ds(R,S,b),z.return=R,z):(z=Ma(b.type,b.key,b.props,null,R.mode,z),z.ref=Ds(R,S,b),z.return=R,z)}function P(R,S,b,z){return S===null||S.tag!==4||S.stateNode.containerInfo!==b.containerInfo||S.stateNode.implementation!==b.implementation?(S=Bc(b,R.mode,z),S.return=R,S):(S=d(S,b.children||[]),S.return=R,S)}function M(R,S,b,z,ee){return S===null||S.tag!==7?(S=Ur(b,R.mode,z,ee),S.return=R,S):(S=d(S,b),S.return=R,S)}function F(R,S,b){if(typeof S=="string"&&S!==""||typeof S=="number")return S=Wc(""+S,R.mode,b),S.return=R,S;if(typeof S=="object"&&S!==null){switch(S.$$typeof){case ye:return b=Ma(S.type,S.key,S.props,null,R.mode,b),b.ref=Ds(R,null,S),b.return=R,b;case _e:return S=Bc(S,R.mode,b),S.return=R,S;case Re:var z=S._init;return F(R,z(S._payload),b)}if(ls(S)||H(S))return S=Ur(S,R.mode,b,null),S.return=R,S;ha(R,S)}return null}function L(R,S,b,z){var ee=S!==null?S.key:null;if(typeof b=="string"&&b!==""||typeof b=="number")return ee!==null?null:w(R,S,""+b,z);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case ye:return b.key===ee?C(R,S,b,z):null;case _e:return b.key===ee?P(R,S,b,z):null;case Re:return ee=b._init,L(R,S,ee(b._payload),z)}if(ls(b)||H(b))return ee!==null?null:M(R,S,b,z,null);ha(R,b)}return null}function G(R,S,b,z,ee){if(typeof z=="string"&&z!==""||typeof z=="number")return R=R.get(b)||null,w(S,R,""+z,ee);if(typeof z=="object"&&z!==null){switch(z.$$typeof){case ye:return R=R.get(z.key===null?b:z.key)||null,C(S,R,z,ee);case _e:return R=R.get(z.key===null?b:z.key)||null,P(S,R,z,ee);case Re:var re=z._init;return G(R,S,b,re(z._payload),ee)}if(ls(z)||H(z))return R=R.get(b)||null,M(S,R,z,ee,null);ha(S,z)}return null}function Y(R,S,b,z){for(var ee=null,re=null,ie=S,le=S=0,tt=null;ie!==null&&le<b.length;le++){ie.index>le?(tt=ie,ie=null):tt=ie.sibling;var Ce=L(R,ie,b[le],z);if(Ce===null){ie===null&&(ie=tt);break}r&&ie&&Ce.alternate===null&&i(R,ie),S=p(Ce,S,le),re===null?ee=Ce:re.sibling=Ce,re=Ce,ie=tt}if(le===b.length)return a(R,ie),Oe&&Pr(R,le),ee;if(ie===null){for(;le<b.length;le++)ie=F(R,b[le],z),ie!==null&&(S=p(ie,S,le),re===null?ee=ie:re.sibling=ie,re=ie);return Oe&&Pr(R,le),ee}for(ie=u(R,ie);le<b.length;le++)tt=G(ie,R,le,b[le],z),tt!==null&&(r&&tt.alternate!==null&&ie.delete(tt.key===null?le:tt.key),S=p(tt,S,le),re===null?ee=tt:re.sibling=tt,re=tt);return r&&ie.forEach(function(lr){return i(R,lr)}),Oe&&Pr(R,le),ee}function Z(R,S,b,z){var ee=H(b);if(typeof ee!="function")throw Error(t(150));if(b=ee.call(b),b==null)throw Error(t(151));for(var re=ee=null,ie=S,le=S=0,tt=null,Ce=b.next();ie!==null&&!Ce.done;le++,Ce=b.next()){ie.index>le?(tt=ie,ie=null):tt=ie.sibling;var lr=L(R,ie,Ce.value,z);if(lr===null){ie===null&&(ie=tt);break}r&&ie&&lr.alternate===null&&i(R,ie),S=p(lr,S,le),re===null?ee=lr:re.sibling=lr,re=lr,ie=tt}if(Ce.done)return a(R,ie),Oe&&Pr(R,le),ee;if(ie===null){for(;!Ce.done;le++,Ce=b.next())Ce=F(R,Ce.value,z),Ce!==null&&(S=p(Ce,S,le),re===null?ee=Ce:re.sibling=Ce,re=Ce);return Oe&&Pr(R,le),ee}for(ie=u(R,ie);!Ce.done;le++,Ce=b.next())Ce=G(ie,R,le,Ce.value,z),Ce!==null&&(r&&Ce.alternate!==null&&ie.delete(Ce.key===null?le:Ce.key),S=p(Ce,S,le),re===null?ee=Ce:re.sibling=Ce,re=Ce);return r&&ie.forEach(function(iC){return i(R,iC)}),Oe&&Pr(R,le),ee}function He(R,S,b,z){if(typeof b=="object"&&b!==null&&b.type===Ie&&b.key===null&&(b=b.props.children),typeof b=="object"&&b!==null){switch(b.$$typeof){case ye:e:{for(var ee=b.key,re=S;re!==null;){if(re.key===ee){if(ee=b.type,ee===Ie){if(re.tag===7){a(R,re.sibling),S=d(re,b.props.children),S.return=R,R=S;break e}}else if(re.elementType===ee||typeof ee=="object"&&ee!==null&&ee.$$typeof===Re&&Op(ee)===re.type){a(R,re.sibling),S=d(re,b.props),S.ref=Ds(R,re,b),S.return=R,R=S;break e}a(R,re);break}else i(R,re);re=re.sibling}b.type===Ie?(S=Ur(b.props.children,R.mode,z,b.key),S.return=R,R=S):(z=Ma(b.type,b.key,b.props,null,R.mode,z),z.ref=Ds(R,S,b),z.return=R,R=z)}return g(R);case _e:e:{for(re=b.key;S!==null;){if(S.key===re)if(S.tag===4&&S.stateNode.containerInfo===b.containerInfo&&S.stateNode.implementation===b.implementation){a(R,S.sibling),S=d(S,b.children||[]),S.return=R,R=S;break e}else{a(R,S);break}else i(R,S);S=S.sibling}S=Bc(b,R.mode,z),S.return=R,R=S}return g(R);case Re:return re=b._init,He(R,S,re(b._payload),z)}if(ls(b))return Y(R,S,b,z);if(H(b))return Z(R,S,b,z);ha(R,b)}return typeof b=="string"&&b!==""||typeof b=="number"?(b=""+b,S!==null&&S.tag===6?(a(R,S.sibling),S=d(S,b),S.return=R,R=S):(a(R,S),S=Wc(b,R.mode,z),S.return=R,R=S),g(R)):a(R,S)}return He}var Ei=Lp(!0),Mp=Lp(!1),fa=Jn(null),pa=null,Ci=null,Xu=null;function Zu(){Xu=Ci=pa=null}function ec(r){var i=fa.current;De(fa),r._currentValue=i}function tc(r,i,a){for(;r!==null;){var u=r.alternate;if((r.childLanes&i)!==i?(r.childLanes|=i,u!==null&&(u.childLanes|=i)):u!==null&&(u.childLanes&i)!==i&&(u.childLanes|=i),r===a)break;r=r.return}}function ki(r,i){pa=r,Xu=Ci=null,r=r.dependencies,r!==null&&r.firstContext!==null&&((r.lanes&i)!==0&&(Rt=!0),r.firstContext=null)}function $t(r){var i=r._currentValue;if(Xu!==r)if(r={context:r,memoizedValue:i,next:null},Ci===null){if(pa===null)throw Error(t(308));Ci=r,pa.dependencies={lanes:0,firstContext:r}}else Ci=Ci.next=r;return i}var Ar=null;function nc(r){Ar===null?Ar=[r]:Ar.push(r)}function Fp(r,i,a,u){var d=i.interleaved;return d===null?(a.next=a,nc(i)):(a.next=d.next,d.next=a),i.interleaved=a,xn(r,u)}function xn(r,i){r.lanes|=i;var a=r.alternate;for(a!==null&&(a.lanes|=i),a=r,r=r.return;r!==null;)r.childLanes|=i,a=r.alternate,a!==null&&(a.childLanes|=i),a=r,r=r.return;return a.tag===3?a.stateNode:null}var er=!1;function rc(r){r.updateQueue={baseState:r.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function jp(r,i){r=r.updateQueue,i.updateQueue===r&&(i.updateQueue={baseState:r.baseState,firstBaseUpdate:r.firstBaseUpdate,lastBaseUpdate:r.lastBaseUpdate,shared:r.shared,effects:r.effects})}function Rn(r,i){return{eventTime:r,lane:i,tag:0,payload:null,callback:null,next:null}}function tr(r,i,a){var u=r.updateQueue;if(u===null)return null;if(u=u.shared,(we&2)!==0){var d=u.pending;return d===null?i.next=i:(i.next=d.next,d.next=i),u.pending=i,xn(r,a)}return d=u.interleaved,d===null?(i.next=i,nc(u)):(i.next=d.next,d.next=i),u.interleaved=i,xn(r,a)}function ma(r,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194240)!==0)){var u=i.lanes;u&=r.pendingLanes,a|=u,i.lanes=a,yu(r,a)}}function Up(r,i){var a=r.updateQueue,u=r.alternate;if(u!==null&&(u=u.updateQueue,a===u)){var d=null,p=null;if(a=a.firstBaseUpdate,a!==null){do{var g={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};p===null?d=p=g:p=p.next=g,a=a.next}while(a!==null);p===null?d=p=i:p=p.next=i}else d=p=i;a={baseState:u.baseState,firstBaseUpdate:d,lastBaseUpdate:p,shared:u.shared,effects:u.effects},r.updateQueue=a;return}r=a.lastBaseUpdate,r===null?a.firstBaseUpdate=i:r.next=i,a.lastBaseUpdate=i}function ga(r,i,a,u){var d=r.updateQueue;er=!1;var p=d.firstBaseUpdate,g=d.lastBaseUpdate,w=d.shared.pending;if(w!==null){d.shared.pending=null;var C=w,P=C.next;C.next=null,g===null?p=P:g.next=P,g=C;var M=r.alternate;M!==null&&(M=M.updateQueue,w=M.lastBaseUpdate,w!==g&&(w===null?M.firstBaseUpdate=P:w.next=P,M.lastBaseUpdate=C))}if(p!==null){var F=d.baseState;g=0,M=P=C=null,w=p;do{var L=w.lane,G=w.eventTime;if((u&L)===L){M!==null&&(M=M.next={eventTime:G,lane:0,tag:w.tag,payload:w.payload,callback:w.callback,next:null});e:{var Y=r,Z=w;switch(L=i,G=a,Z.tag){case 1:if(Y=Z.payload,typeof Y=="function"){F=Y.call(G,F,L);break e}F=Y;break e;case 3:Y.flags=Y.flags&-65537|128;case 0:if(Y=Z.payload,L=typeof Y=="function"?Y.call(G,F,L):Y,L==null)break e;F=B({},F,L);break e;case 2:er=!0}}w.callback!==null&&w.lane!==0&&(r.flags|=64,L=d.effects,L===null?d.effects=[w]:L.push(w))}else G={eventTime:G,lane:L,tag:w.tag,payload:w.payload,callback:w.callback,next:null},M===null?(P=M=G,C=F):M=M.next=G,g|=L;if(w=w.next,w===null){if(w=d.shared.pending,w===null)break;L=w,w=L.next,L.next=null,d.lastBaseUpdate=L,d.shared.pending=null}}while(!0);if(M===null&&(C=F),d.baseState=C,d.firstBaseUpdate=P,d.lastBaseUpdate=M,i=d.shared.interleaved,i!==null){d=i;do g|=d.lane,d=d.next;while(d!==i)}else p===null&&(d.shared.lanes=0);Lr|=g,r.lanes=g,r.memoizedState=F}}function zp(r,i,a){if(r=i.effects,i.effects=null,r!==null)for(i=0;i<r.length;i++){var u=r[i],d=u.callback;if(d!==null){if(u.callback=null,u=a,typeof d!="function")throw Error(t(191,d));d.call(u)}}}var Os={},pn=Jn(Os),Ls=Jn(Os),Ms=Jn(Os);function Dr(r){if(r===Os)throw Error(t(174));return r}function ic(r,i){switch(be(Ms,i),be(Ls,r),be(pn,Os),r=i.nodeType,r){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:su(null,"");break;default:r=r===8?i.parentNode:i,i=r.namespaceURI||null,r=r.tagName,i=su(i,r)}De(pn),be(pn,i)}function Si(){De(pn),De(Ls),De(Ms)}function $p(r){Dr(Ms.current);var i=Dr(pn.current),a=su(i,r.type);i!==a&&(be(Ls,r),be(pn,a))}function sc(r){Ls.current===r&&(De(pn),De(Ls))}var je=Jn(0);function ya(r){for(var i=r;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===r)break;for(;i.sibling===null;){if(i.return===null||i.return===r)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var oc=[];function ac(){for(var r=0;r<oc.length;r++)oc[r]._workInProgressVersionPrimary=null;oc.length=0}var _a=ne.ReactCurrentDispatcher,lc=ne.ReactCurrentBatchConfig,Or=0,Ue=null,Ke=null,Ze=null,va=!1,Fs=!1,js=0,T0=0;function gt(){throw Error(t(321))}function uc(r,i){if(i===null)return!1;for(var a=0;a<i.length&&a<r.length;a++)if(!Qt(r[a],i[a]))return!1;return!0}function cc(r,i,a,u,d,p){if(Or=p,Ue=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,_a.current=r===null||r.memoizedState===null?N0:P0,r=a(u,d),Fs){p=0;do{if(Fs=!1,js=0,25<=p)throw Error(t(301));p+=1,Ze=Ke=null,i.updateQueue=null,_a.current=A0,r=a(u,d)}while(Fs)}if(_a.current=Ca,i=Ke!==null&&Ke.next!==null,Or=0,Ze=Ke=Ue=null,va=!1,i)throw Error(t(300));return r}function dc(){var r=js!==0;return js=0,r}function mn(){var r={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ze===null?Ue.memoizedState=Ze=r:Ze=Ze.next=r,Ze}function Wt(){if(Ke===null){var r=Ue.alternate;r=r!==null?r.memoizedState:null}else r=Ke.next;var i=Ze===null?Ue.memoizedState:Ze.next;if(i!==null)Ze=i,Ke=r;else{if(r===null)throw Error(t(310));Ke=r,r={memoizedState:Ke.memoizedState,baseState:Ke.baseState,baseQueue:Ke.baseQueue,queue:Ke.queue,next:null},Ze===null?Ue.memoizedState=Ze=r:Ze=Ze.next=r}return Ze}function Us(r,i){return typeof i=="function"?i(r):i}function hc(r){var i=Wt(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=r;var u=Ke,d=u.baseQueue,p=a.pending;if(p!==null){if(d!==null){var g=d.next;d.next=p.next,p.next=g}u.baseQueue=d=p,a.pending=null}if(d!==null){p=d.next,u=u.baseState;var w=g=null,C=null,P=p;do{var M=P.lane;if((Or&M)===M)C!==null&&(C=C.next={lane:0,action:P.action,hasEagerState:P.hasEagerState,eagerState:P.eagerState,next:null}),u=P.hasEagerState?P.eagerState:r(u,P.action);else{var F={lane:M,action:P.action,hasEagerState:P.hasEagerState,eagerState:P.eagerState,next:null};C===null?(w=C=F,g=u):C=C.next=F,Ue.lanes|=M,Lr|=M}P=P.next}while(P!==null&&P!==p);C===null?g=u:C.next=w,Qt(u,i.memoizedState)||(Rt=!0),i.memoizedState=u,i.baseState=g,i.baseQueue=C,a.lastRenderedState=u}if(r=a.interleaved,r!==null){d=r;do p=d.lane,Ue.lanes|=p,Lr|=p,d=d.next;while(d!==r)}else d===null&&(a.lanes=0);return[i.memoizedState,a.dispatch]}function fc(r){var i=Wt(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=r;var u=a.dispatch,d=a.pending,p=i.memoizedState;if(d!==null){a.pending=null;var g=d=d.next;do p=r(p,g.action),g=g.next;while(g!==d);Qt(p,i.memoizedState)||(Rt=!0),i.memoizedState=p,i.baseQueue===null&&(i.baseState=p),a.lastRenderedState=p}return[p,u]}function Wp(){}function Bp(r,i){var a=Ue,u=Wt(),d=i(),p=!Qt(u.memoizedState,d);if(p&&(u.memoizedState=d,Rt=!0),u=u.queue,pc(Gp.bind(null,a,u,r),[r]),u.getSnapshot!==i||p||Ze!==null&&Ze.memoizedState.tag&1){if(a.flags|=2048,zs(9,Hp.bind(null,a,u,d,i),void 0,null),et===null)throw Error(t(349));(Or&30)!==0||Vp(a,i,d)}return d}function Vp(r,i,a){r.flags|=16384,r={getSnapshot:i,value:a},i=Ue.updateQueue,i===null?(i={lastEffect:null,stores:null},Ue.updateQueue=i,i.stores=[r]):(a=i.stores,a===null?i.stores=[r]:a.push(r))}function Hp(r,i,a,u){i.value=a,i.getSnapshot=u,qp(i)&&Kp(r)}function Gp(r,i,a){return a(function(){qp(i)&&Kp(r)})}function qp(r){var i=r.getSnapshot;r=r.value;try{var a=i();return!Qt(r,a)}catch{return!0}}function Kp(r){var i=xn(r,1);i!==null&&tn(i,r,1,-1)}function Yp(r){var i=mn();return typeof r=="function"&&(r=r()),i.memoizedState=i.baseState=r,r={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Us,lastRenderedState:r},i.queue=r,r=r.dispatch=b0.bind(null,Ue,r),[i.memoizedState,r]}function zs(r,i,a,u){return r={tag:r,create:i,destroy:a,deps:u,next:null},i=Ue.updateQueue,i===null?(i={lastEffect:null,stores:null},Ue.updateQueue=i,i.lastEffect=r.next=r):(a=i.lastEffect,a===null?i.lastEffect=r.next=r:(u=a.next,a.next=r,r.next=u,i.lastEffect=r)),r}function Qp(){return Wt().memoizedState}function wa(r,i,a,u){var d=mn();Ue.flags|=r,d.memoizedState=zs(1|i,a,void 0,u===void 0?null:u)}function Ea(r,i,a,u){var d=Wt();u=u===void 0?null:u;var p=void 0;if(Ke!==null){var g=Ke.memoizedState;if(p=g.destroy,u!==null&&uc(u,g.deps)){d.memoizedState=zs(i,a,p,u);return}}Ue.flags|=r,d.memoizedState=zs(1|i,a,p,u)}function Jp(r,i){return wa(8390656,8,r,i)}function pc(r,i){return Ea(2048,8,r,i)}function Xp(r,i){return Ea(4,2,r,i)}function Zp(r,i){return Ea(4,4,r,i)}function em(r,i){if(typeof i=="function")return r=r(),i(r),function(){i(null)};if(i!=null)return r=r(),i.current=r,function(){i.current=null}}function tm(r,i,a){return a=a!=null?a.concat([r]):null,Ea(4,4,em.bind(null,i,r),a)}function mc(){}function nm(r,i){var a=Wt();i=i===void 0?null:i;var u=a.memoizedState;return u!==null&&i!==null&&uc(i,u[1])?u[0]:(a.memoizedState=[r,i],r)}function rm(r,i){var a=Wt();i=i===void 0?null:i;var u=a.memoizedState;return u!==null&&i!==null&&uc(i,u[1])?u[0]:(r=r(),a.memoizedState=[r,i],r)}function im(r,i,a){return(Or&21)===0?(r.baseState&&(r.baseState=!1,Rt=!0),r.memoizedState=a):(Qt(a,i)||(a=Of(),Ue.lanes|=a,Lr|=a,r.baseState=!0),i)}function x0(r,i){var a=Se;Se=a!==0&&4>a?a:4,r(!0);var u=lc.transition;lc.transition={};try{r(!1),i()}finally{Se=a,lc.transition=u}}function sm(){return Wt().memoizedState}function R0(r,i,a){var u=sr(r);if(a={lane:u,action:a,hasEagerState:!1,eagerState:null,next:null},om(r))am(i,a);else if(a=Fp(r,i,a,u),a!==null){var d=Ct();tn(a,r,u,d),lm(a,i,u)}}function b0(r,i,a){var u=sr(r),d={lane:u,action:a,hasEagerState:!1,eagerState:null,next:null};if(om(r))am(i,d);else{var p=r.alternate;if(r.lanes===0&&(p===null||p.lanes===0)&&(p=i.lastRenderedReducer,p!==null))try{var g=i.lastRenderedState,w=p(g,a);if(d.hasEagerState=!0,d.eagerState=w,Qt(w,g)){var C=i.interleaved;C===null?(d.next=d,nc(i)):(d.next=C.next,C.next=d),i.interleaved=d;return}}catch{}finally{}a=Fp(r,i,d,u),a!==null&&(d=Ct(),tn(a,r,u,d),lm(a,i,u))}}function om(r){var i=r.alternate;return r===Ue||i!==null&&i===Ue}function am(r,i){Fs=va=!0;var a=r.pending;a===null?i.next=i:(i.next=a.next,a.next=i),r.pending=i}function lm(r,i,a){if((a&4194240)!==0){var u=i.lanes;u&=r.pendingLanes,a|=u,i.lanes=a,yu(r,a)}}var Ca={readContext:$t,useCallback:gt,useContext:gt,useEffect:gt,useImperativeHandle:gt,useInsertionEffect:gt,useLayoutEffect:gt,useMemo:gt,useReducer:gt,useRef:gt,useState:gt,useDebugValue:gt,useDeferredValue:gt,useTransition:gt,useMutableSource:gt,useSyncExternalStore:gt,useId:gt,unstable_isNewReconciler:!1},N0={readContext:$t,useCallback:function(r,i){return mn().memoizedState=[r,i===void 0?null:i],r},useContext:$t,useEffect:Jp,useImperativeHandle:function(r,i,a){return a=a!=null?a.concat([r]):null,wa(4194308,4,em.bind(null,i,r),a)},useLayoutEffect:function(r,i){return wa(4194308,4,r,i)},useInsertionEffect:function(r,i){return wa(4,2,r,i)},useMemo:function(r,i){var a=mn();return i=i===void 0?null:i,r=r(),a.memoizedState=[r,i],r},useReducer:function(r,i,a){var u=mn();return i=a!==void 0?a(i):i,u.memoizedState=u.baseState=i,r={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:r,lastRenderedState:i},u.queue=r,r=r.dispatch=R0.bind(null,Ue,r),[u.memoizedState,r]},useRef:function(r){var i=mn();return r={current:r},i.memoizedState=r},useState:Yp,useDebugValue:mc,useDeferredValue:function(r){return mn().memoizedState=r},useTransition:function(){var r=Yp(!1),i=r[0];return r=x0.bind(null,r[1]),mn().memoizedState=r,[i,r]},useMutableSource:function(){},useSyncExternalStore:function(r,i,a){var u=Ue,d=mn();if(Oe){if(a===void 0)throw Error(t(407));a=a()}else{if(a=i(),et===null)throw Error(t(349));(Or&30)!==0||Vp(u,i,a)}d.memoizedState=a;var p={value:a,getSnapshot:i};return d.queue=p,Jp(Gp.bind(null,u,p,r),[r]),u.flags|=2048,zs(9,Hp.bind(null,u,p,a,i),void 0,null),a},useId:function(){var r=mn(),i=et.identifierPrefix;if(Oe){var a=Tn,u=In;a=(u&~(1<<32-Yt(u)-1)).toString(32)+a,i=":"+i+"R"+a,a=js++,0<a&&(i+="H"+a.toString(32)),i+=":"}else a=T0++,i=":"+i+"r"+a.toString(32)+":";return r.memoizedState=i},unstable_isNewReconciler:!1},P0={readContext:$t,useCallback:nm,useContext:$t,useEffect:pc,useImperativeHandle:tm,useInsertionEffect:Xp,useLayoutEffect:Zp,useMemo:rm,useReducer:hc,useRef:Qp,useState:function(){return hc(Us)},useDebugValue:mc,useDeferredValue:function(r){var i=Wt();return im(i,Ke.memoizedState,r)},useTransition:function(){var r=hc(Us)[0],i=Wt().memoizedState;return[r,i]},useMutableSource:Wp,useSyncExternalStore:Bp,useId:sm,unstable_isNewReconciler:!1},A0={readContext:$t,useCallback:nm,useContext:$t,useEffect:pc,useImperativeHandle:tm,useInsertionEffect:Xp,useLayoutEffect:Zp,useMemo:rm,useReducer:fc,useRef:Qp,useState:function(){return fc(Us)},useDebugValue:mc,useDeferredValue:function(r){var i=Wt();return Ke===null?i.memoizedState=r:im(i,Ke.memoizedState,r)},useTransition:function(){var r=fc(Us)[0],i=Wt().memoizedState;return[r,i]},useMutableSource:Wp,useSyncExternalStore:Bp,useId:sm,unstable_isNewReconciler:!1};function Xt(r,i){if(r&&r.defaultProps){i=B({},i),r=r.defaultProps;for(var a in r)i[a]===void 0&&(i[a]=r[a]);return i}return i}function gc(r,i,a,u){i=r.memoizedState,a=a(u,i),a=a==null?i:B({},i,a),r.memoizedState=a,r.lanes===0&&(r.updateQueue.baseState=a)}var ka={isMounted:function(r){return(r=r._reactInternals)?xr(r)===r:!1},enqueueSetState:function(r,i,a){r=r._reactInternals;var u=Ct(),d=sr(r),p=Rn(u,d);p.payload=i,a!=null&&(p.callback=a),i=tr(r,p,d),i!==null&&(tn(i,r,d,u),ma(i,r,d))},enqueueReplaceState:function(r,i,a){r=r._reactInternals;var u=Ct(),d=sr(r),p=Rn(u,d);p.tag=1,p.payload=i,a!=null&&(p.callback=a),i=tr(r,p,d),i!==null&&(tn(i,r,d,u),ma(i,r,d))},enqueueForceUpdate:function(r,i){r=r._reactInternals;var a=Ct(),u=sr(r),d=Rn(a,u);d.tag=2,i!=null&&(d.callback=i),i=tr(r,d,u),i!==null&&(tn(i,r,u,a),ma(i,r,u))}};function um(r,i,a,u,d,p,g){return r=r.stateNode,typeof r.shouldComponentUpdate=="function"?r.shouldComponentUpdate(u,p,g):i.prototype&&i.prototype.isPureReactComponent?!Ts(a,u)||!Ts(d,p):!0}function cm(r,i,a){var u=!1,d=Xn,p=i.contextType;return typeof p=="object"&&p!==null?p=$t(p):(d=xt(i)?br:mt.current,u=i.contextTypes,p=(u=u!=null)?yi(r,d):Xn),i=new i(a,p),r.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=ka,r.stateNode=i,i._reactInternals=r,u&&(r=r.stateNode,r.__reactInternalMemoizedUnmaskedChildContext=d,r.__reactInternalMemoizedMaskedChildContext=p),i}function dm(r,i,a,u){r=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,u),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,u),i.state!==r&&ka.enqueueReplaceState(i,i.state,null)}function yc(r,i,a,u){var d=r.stateNode;d.props=a,d.state=r.memoizedState,d.refs={},rc(r);var p=i.contextType;typeof p=="object"&&p!==null?d.context=$t(p):(p=xt(i)?br:mt.current,d.context=yi(r,p)),d.state=r.memoizedState,p=i.getDerivedStateFromProps,typeof p=="function"&&(gc(r,i,p,a),d.state=r.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(i=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),i!==d.state&&ka.enqueueReplaceState(d,d.state,null),ga(r,a,d,u),d.state=r.memoizedState),typeof d.componentDidMount=="function"&&(r.flags|=4194308)}function Ii(r,i){try{var a="",u=i;do a+=ue(u),u=u.return;while(u);var d=a}catch(p){d=`
Error generating stack: `+p.message+`
`+p.stack}return{value:r,source:i,stack:d,digest:null}}function _c(r,i,a){return{value:r,source:null,stack:a??null,digest:i??null}}function vc(r,i){try{console.error(i.value)}catch(a){setTimeout(function(){throw a})}}var D0=typeof WeakMap=="function"?WeakMap:Map;function hm(r,i,a){a=Rn(-1,a),a.tag=3,a.payload={element:null};var u=i.value;return a.callback=function(){Na||(Na=!0,Oc=u),vc(r,i)},a}function fm(r,i,a){a=Rn(-1,a),a.tag=3;var u=r.type.getDerivedStateFromError;if(typeof u=="function"){var d=i.value;a.payload=function(){return u(d)},a.callback=function(){vc(r,i)}}var p=r.stateNode;return p!==null&&typeof p.componentDidCatch=="function"&&(a.callback=function(){vc(r,i),typeof u!="function"&&(rr===null?rr=new Set([this]):rr.add(this));var g=i.stack;this.componentDidCatch(i.value,{componentStack:g!==null?g:""})}),a}function pm(r,i,a){var u=r.pingCache;if(u===null){u=r.pingCache=new D0;var d=new Set;u.set(i,d)}else d=u.get(i),d===void 0&&(d=new Set,u.set(i,d));d.has(a)||(d.add(a),r=q0.bind(null,r,i,a),i.then(r,r))}function mm(r){do{var i;if((i=r.tag===13)&&(i=r.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return r;r=r.return}while(r!==null);return null}function gm(r,i,a,u,d){return(r.mode&1)===0?(r===i?r.flags|=65536:(r.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(i=Rn(-1,1),i.tag=2,tr(a,i,1))),a.lanes|=1),r):(r.flags|=65536,r.lanes=d,r)}var O0=ne.ReactCurrentOwner,Rt=!1;function Et(r,i,a,u){i.child=r===null?Mp(i,null,a,u):Ei(i,r.child,a,u)}function ym(r,i,a,u,d){a=a.render;var p=i.ref;return ki(i,d),u=cc(r,i,a,u,p,d),a=dc(),r!==null&&!Rt?(i.updateQueue=r.updateQueue,i.flags&=-2053,r.lanes&=~d,bn(r,i,d)):(Oe&&a&&qu(i),i.flags|=1,Et(r,i,u,d),i.child)}function _m(r,i,a,u,d){if(r===null){var p=a.type;return typeof p=="function"&&!$c(p)&&p.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(i.tag=15,i.type=p,vm(r,i,p,u,d)):(r=Ma(a.type,null,u,i,i.mode,d),r.ref=i.ref,r.return=i,i.child=r)}if(p=r.child,(r.lanes&d)===0){var g=p.memoizedProps;if(a=a.compare,a=a!==null?a:Ts,a(g,u)&&r.ref===i.ref)return bn(r,i,d)}return i.flags|=1,r=ar(p,u),r.ref=i.ref,r.return=i,i.child=r}function vm(r,i,a,u,d){if(r!==null){var p=r.memoizedProps;if(Ts(p,u)&&r.ref===i.ref)if(Rt=!1,i.pendingProps=u=p,(r.lanes&d)!==0)(r.flags&131072)!==0&&(Rt=!0);else return i.lanes=r.lanes,bn(r,i,d)}return wc(r,i,a,u,d)}function wm(r,i,a){var u=i.pendingProps,d=u.children,p=r!==null?r.memoizedState:null;if(u.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},be(xi,Ft),Ft|=a;else{if((a&1073741824)===0)return r=p!==null?p.baseLanes|a:a,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:r,cachePool:null,transitions:null},i.updateQueue=null,be(xi,Ft),Ft|=r,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},u=p!==null?p.baseLanes:a,be(xi,Ft),Ft|=u}else p!==null?(u=p.baseLanes|a,i.memoizedState=null):u=a,be(xi,Ft),Ft|=u;return Et(r,i,d,a),i.child}function Em(r,i){var a=i.ref;(r===null&&a!==null||r!==null&&r.ref!==a)&&(i.flags|=512,i.flags|=2097152)}function wc(r,i,a,u,d){var p=xt(a)?br:mt.current;return p=yi(i,p),ki(i,d),a=cc(r,i,a,u,p,d),u=dc(),r!==null&&!Rt?(i.updateQueue=r.updateQueue,i.flags&=-2053,r.lanes&=~d,bn(r,i,d)):(Oe&&u&&qu(i),i.flags|=1,Et(r,i,a,d),i.child)}function Cm(r,i,a,u,d){if(xt(a)){var p=!0;aa(i)}else p=!1;if(ki(i,d),i.stateNode===null)Ia(r,i),cm(i,a,u),yc(i,a,u,d),u=!0;else if(r===null){var g=i.stateNode,w=i.memoizedProps;g.props=w;var C=g.context,P=a.contextType;typeof P=="object"&&P!==null?P=$t(P):(P=xt(a)?br:mt.current,P=yi(i,P));var M=a.getDerivedStateFromProps,F=typeof M=="function"||typeof g.getSnapshotBeforeUpdate=="function";F||typeof g.UNSAFE_componentWillReceiveProps!="function"&&typeof g.componentWillReceiveProps!="function"||(w!==u||C!==P)&&dm(i,g,u,P),er=!1;var L=i.memoizedState;g.state=L,ga(i,u,g,d),C=i.memoizedState,w!==u||L!==C||Tt.current||er?(typeof M=="function"&&(gc(i,a,M,u),C=i.memoizedState),(w=er||um(i,a,w,u,L,C,P))?(F||typeof g.UNSAFE_componentWillMount!="function"&&typeof g.componentWillMount!="function"||(typeof g.componentWillMount=="function"&&g.componentWillMount(),typeof g.UNSAFE_componentWillMount=="function"&&g.UNSAFE_componentWillMount()),typeof g.componentDidMount=="function"&&(i.flags|=4194308)):(typeof g.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=u,i.memoizedState=C),g.props=u,g.state=C,g.context=P,u=w):(typeof g.componentDidMount=="function"&&(i.flags|=4194308),u=!1)}else{g=i.stateNode,jp(r,i),w=i.memoizedProps,P=i.type===i.elementType?w:Xt(i.type,w),g.props=P,F=i.pendingProps,L=g.context,C=a.contextType,typeof C=="object"&&C!==null?C=$t(C):(C=xt(a)?br:mt.current,C=yi(i,C));var G=a.getDerivedStateFromProps;(M=typeof G=="function"||typeof g.getSnapshotBeforeUpdate=="function")||typeof g.UNSAFE_componentWillReceiveProps!="function"&&typeof g.componentWillReceiveProps!="function"||(w!==F||L!==C)&&dm(i,g,u,C),er=!1,L=i.memoizedState,g.state=L,ga(i,u,g,d);var Y=i.memoizedState;w!==F||L!==Y||Tt.current||er?(typeof G=="function"&&(gc(i,a,G,u),Y=i.memoizedState),(P=er||um(i,a,P,u,L,Y,C)||!1)?(M||typeof g.UNSAFE_componentWillUpdate!="function"&&typeof g.componentWillUpdate!="function"||(typeof g.componentWillUpdate=="function"&&g.componentWillUpdate(u,Y,C),typeof g.UNSAFE_componentWillUpdate=="function"&&g.UNSAFE_componentWillUpdate(u,Y,C)),typeof g.componentDidUpdate=="function"&&(i.flags|=4),typeof g.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof g.componentDidUpdate!="function"||w===r.memoizedProps&&L===r.memoizedState||(i.flags|=4),typeof g.getSnapshotBeforeUpdate!="function"||w===r.memoizedProps&&L===r.memoizedState||(i.flags|=1024),i.memoizedProps=u,i.memoizedState=Y),g.props=u,g.state=Y,g.context=C,u=P):(typeof g.componentDidUpdate!="function"||w===r.memoizedProps&&L===r.memoizedState||(i.flags|=4),typeof g.getSnapshotBeforeUpdate!="function"||w===r.memoizedProps&&L===r.memoizedState||(i.flags|=1024),u=!1)}return Ec(r,i,a,u,p,d)}function Ec(r,i,a,u,d,p){Em(r,i);var g=(i.flags&128)!==0;if(!u&&!g)return d&&xp(i,a,!1),bn(r,i,p);u=i.stateNode,O0.current=i;var w=g&&typeof a.getDerivedStateFromError!="function"?null:u.render();return i.flags|=1,r!==null&&g?(i.child=Ei(i,r.child,null,p),i.child=Ei(i,null,w,p)):Et(r,i,w,p),i.memoizedState=u.state,d&&xp(i,a,!0),i.child}function km(r){var i=r.stateNode;i.pendingContext?Ip(r,i.pendingContext,i.pendingContext!==i.context):i.context&&Ip(r,i.context,!1),ic(r,i.containerInfo)}function Sm(r,i,a,u,d){return wi(),Ju(d),i.flags|=256,Et(r,i,a,u),i.child}var Cc={dehydrated:null,treeContext:null,retryLane:0};function kc(r){return{baseLanes:r,cachePool:null,transitions:null}}function Im(r,i,a){var u=i.pendingProps,d=je.current,p=!1,g=(i.flags&128)!==0,w;if((w=g)||(w=r!==null&&r.memoizedState===null?!1:(d&2)!==0),w?(p=!0,i.flags&=-129):(r===null||r.memoizedState!==null)&&(d|=1),be(je,d&1),r===null)return Qu(i),r=i.memoizedState,r!==null&&(r=r.dehydrated,r!==null)?((i.mode&1)===0?i.lanes=1:r.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(g=u.children,r=u.fallback,p?(u=i.mode,p=i.child,g={mode:"hidden",children:g},(u&1)===0&&p!==null?(p.childLanes=0,p.pendingProps=g):p=Fa(g,u,0,null),r=Ur(r,u,a,null),p.return=i,r.return=i,p.sibling=r,i.child=p,i.child.memoizedState=kc(a),i.memoizedState=Cc,r):Sc(i,g));if(d=r.memoizedState,d!==null&&(w=d.dehydrated,w!==null))return L0(r,i,g,u,w,d,a);if(p){p=u.fallback,g=i.mode,d=r.child,w=d.sibling;var C={mode:"hidden",children:u.children};return(g&1)===0&&i.child!==d?(u=i.child,u.childLanes=0,u.pendingProps=C,i.deletions=null):(u=ar(d,C),u.subtreeFlags=d.subtreeFlags&14680064),w!==null?p=ar(w,p):(p=Ur(p,g,a,null),p.flags|=2),p.return=i,u.return=i,u.sibling=p,i.child=u,u=p,p=i.child,g=r.child.memoizedState,g=g===null?kc(a):{baseLanes:g.baseLanes|a,cachePool:null,transitions:g.transitions},p.memoizedState=g,p.childLanes=r.childLanes&~a,i.memoizedState=Cc,u}return p=r.child,r=p.sibling,u=ar(p,{mode:"visible",children:u.children}),(i.mode&1)===0&&(u.lanes=a),u.return=i,u.sibling=null,r!==null&&(a=i.deletions,a===null?(i.deletions=[r],i.flags|=16):a.push(r)),i.child=u,i.memoizedState=null,u}function Sc(r,i){return i=Fa({mode:"visible",children:i},r.mode,0,null),i.return=r,r.child=i}function Sa(r,i,a,u){return u!==null&&Ju(u),Ei(i,r.child,null,a),r=Sc(i,i.pendingProps.children),r.flags|=2,i.memoizedState=null,r}function L0(r,i,a,u,d,p,g){if(a)return i.flags&256?(i.flags&=-257,u=_c(Error(t(422))),Sa(r,i,g,u)):i.memoizedState!==null?(i.child=r.child,i.flags|=128,null):(p=u.fallback,d=i.mode,u=Fa({mode:"visible",children:u.children},d,0,null),p=Ur(p,d,g,null),p.flags|=2,u.return=i,p.return=i,u.sibling=p,i.child=u,(i.mode&1)!==0&&Ei(i,r.child,null,g),i.child.memoizedState=kc(g),i.memoizedState=Cc,p);if((i.mode&1)===0)return Sa(r,i,g,null);if(d.data==="$!"){if(u=d.nextSibling&&d.nextSibling.dataset,u)var w=u.dgst;return u=w,p=Error(t(419)),u=_c(p,u,void 0),Sa(r,i,g,u)}if(w=(g&r.childLanes)!==0,Rt||w){if(u=et,u!==null){switch(g&-g){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(u.suspendedLanes|g))!==0?0:d,d!==0&&d!==p.retryLane&&(p.retryLane=d,xn(r,d),tn(u,r,d,-1))}return zc(),u=_c(Error(t(421))),Sa(r,i,g,u)}return d.data==="$?"?(i.flags|=128,i.child=r.child,i=K0.bind(null,r),d._reactRetry=i,null):(r=p.treeContext,Mt=Qn(d.nextSibling),Lt=i,Oe=!0,Jt=null,r!==null&&(Ut[zt++]=In,Ut[zt++]=Tn,Ut[zt++]=Nr,In=r.id,Tn=r.overflow,Nr=i),i=Sc(i,u.children),i.flags|=4096,i)}function Tm(r,i,a){r.lanes|=i;var u=r.alternate;u!==null&&(u.lanes|=i),tc(r.return,i,a)}function Ic(r,i,a,u,d){var p=r.memoizedState;p===null?r.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:u,tail:a,tailMode:d}:(p.isBackwards=i,p.rendering=null,p.renderingStartTime=0,p.last=u,p.tail=a,p.tailMode=d)}function xm(r,i,a){var u=i.pendingProps,d=u.revealOrder,p=u.tail;if(Et(r,i,u.children,a),u=je.current,(u&2)!==0)u=u&1|2,i.flags|=128;else{if(r!==null&&(r.flags&128)!==0)e:for(r=i.child;r!==null;){if(r.tag===13)r.memoizedState!==null&&Tm(r,a,i);else if(r.tag===19)Tm(r,a,i);else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===i)break e;for(;r.sibling===null;){if(r.return===null||r.return===i)break e;r=r.return}r.sibling.return=r.return,r=r.sibling}u&=1}if(be(je,u),(i.mode&1)===0)i.memoizedState=null;else switch(d){case"forwards":for(a=i.child,d=null;a!==null;)r=a.alternate,r!==null&&ya(r)===null&&(d=a),a=a.sibling;a=d,a===null?(d=i.child,i.child=null):(d=a.sibling,a.sibling=null),Ic(i,!1,d,a,p);break;case"backwards":for(a=null,d=i.child,i.child=null;d!==null;){if(r=d.alternate,r!==null&&ya(r)===null){i.child=d;break}r=d.sibling,d.sibling=a,a=d,d=r}Ic(i,!0,a,null,p);break;case"together":Ic(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Ia(r,i){(i.mode&1)===0&&r!==null&&(r.alternate=null,i.alternate=null,i.flags|=2)}function bn(r,i,a){if(r!==null&&(i.dependencies=r.dependencies),Lr|=i.lanes,(a&i.childLanes)===0)return null;if(r!==null&&i.child!==r.child)throw Error(t(153));if(i.child!==null){for(r=i.child,a=ar(r,r.pendingProps),i.child=a,a.return=i;r.sibling!==null;)r=r.sibling,a=a.sibling=ar(r,r.pendingProps),a.return=i;a.sibling=null}return i.child}function M0(r,i,a){switch(i.tag){case 3:km(i),wi();break;case 5:$p(i);break;case 1:xt(i.type)&&aa(i);break;case 4:ic(i,i.stateNode.containerInfo);break;case 10:var u=i.type._context,d=i.memoizedProps.value;be(fa,u._currentValue),u._currentValue=d;break;case 13:if(u=i.memoizedState,u!==null)return u.dehydrated!==null?(be(je,je.current&1),i.flags|=128,null):(a&i.child.childLanes)!==0?Im(r,i,a):(be(je,je.current&1),r=bn(r,i,a),r!==null?r.sibling:null);be(je,je.current&1);break;case 19:if(u=(a&i.childLanes)!==0,(r.flags&128)!==0){if(u)return xm(r,i,a);i.flags|=128}if(d=i.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),be(je,je.current),u)break;return null;case 22:case 23:return i.lanes=0,wm(r,i,a)}return bn(r,i,a)}var Rm,Tc,bm,Nm;Rm=function(r,i){for(var a=i.child;a!==null;){if(a.tag===5||a.tag===6)r.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},Tc=function(){},bm=function(r,i,a,u){var d=r.memoizedProps;if(d!==u){r=i.stateNode,Dr(pn.current);var p=null;switch(a){case"input":d=tu(r,d),u=tu(r,u),p=[];break;case"select":d=B({},d,{value:void 0}),u=B({},u,{value:void 0}),p=[];break;case"textarea":d=iu(r,d),u=iu(r,u),p=[];break;default:typeof d.onClick!="function"&&typeof u.onClick=="function"&&(r.onclick=ia)}ou(a,u);var g;a=null;for(P in d)if(!u.hasOwnProperty(P)&&d.hasOwnProperty(P)&&d[P]!=null)if(P==="style"){var w=d[P];for(g in w)w.hasOwnProperty(g)&&(a||(a={}),a[g]="")}else P!=="dangerouslySetInnerHTML"&&P!=="children"&&P!=="suppressContentEditableWarning"&&P!=="suppressHydrationWarning"&&P!=="autoFocus"&&(o.hasOwnProperty(P)?p||(p=[]):(p=p||[]).push(P,null));for(P in u){var C=u[P];if(w=d!=null?d[P]:void 0,u.hasOwnProperty(P)&&C!==w&&(C!=null||w!=null))if(P==="style")if(w){for(g in w)!w.hasOwnProperty(g)||C&&C.hasOwnProperty(g)||(a||(a={}),a[g]="");for(g in C)C.hasOwnProperty(g)&&w[g]!==C[g]&&(a||(a={}),a[g]=C[g])}else a||(p||(p=[]),p.push(P,a)),a=C;else P==="dangerouslySetInnerHTML"?(C=C?C.__html:void 0,w=w?w.__html:void 0,C!=null&&w!==C&&(p=p||[]).push(P,C)):P==="children"?typeof C!="string"&&typeof C!="number"||(p=p||[]).push(P,""+C):P!=="suppressContentEditableWarning"&&P!=="suppressHydrationWarning"&&(o.hasOwnProperty(P)?(C!=null&&P==="onScroll"&&Ae("scroll",r),p||w===C||(p=[])):(p=p||[]).push(P,C))}a&&(p=p||[]).push("style",a);var P=p;(i.updateQueue=P)&&(i.flags|=4)}},Nm=function(r,i,a,u){a!==u&&(i.flags|=4)};function $s(r,i){if(!Oe)switch(r.tailMode){case"hidden":i=r.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?r.tail=null:a.sibling=null;break;case"collapsed":a=r.tail;for(var u=null;a!==null;)a.alternate!==null&&(u=a),a=a.sibling;u===null?i||r.tail===null?r.tail=null:r.tail.sibling=null:u.sibling=null}}function yt(r){var i=r.alternate!==null&&r.alternate.child===r.child,a=0,u=0;if(i)for(var d=r.child;d!==null;)a|=d.lanes|d.childLanes,u|=d.subtreeFlags&14680064,u|=d.flags&14680064,d.return=r,d=d.sibling;else for(d=r.child;d!==null;)a|=d.lanes|d.childLanes,u|=d.subtreeFlags,u|=d.flags,d.return=r,d=d.sibling;return r.subtreeFlags|=u,r.childLanes=a,i}function F0(r,i,a){var u=i.pendingProps;switch(Ku(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return yt(i),null;case 1:return xt(i.type)&&oa(),yt(i),null;case 3:return u=i.stateNode,Si(),De(Tt),De(mt),ac(),u.pendingContext&&(u.context=u.pendingContext,u.pendingContext=null),(r===null||r.child===null)&&(da(i)?i.flags|=4:r===null||r.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,Jt!==null&&(Fc(Jt),Jt=null))),Tc(r,i),yt(i),null;case 5:sc(i);var d=Dr(Ms.current);if(a=i.type,r!==null&&i.stateNode!=null)bm(r,i,a,u,d),r.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!u){if(i.stateNode===null)throw Error(t(166));return yt(i),null}if(r=Dr(pn.current),da(i)){u=i.stateNode,a=i.type;var p=i.memoizedProps;switch(u[fn]=i,u[Ps]=p,r=(i.mode&1)!==0,a){case"dialog":Ae("cancel",u),Ae("close",u);break;case"iframe":case"object":case"embed":Ae("load",u);break;case"video":case"audio":for(d=0;d<Rs.length;d++)Ae(Rs[d],u);break;case"source":Ae("error",u);break;case"img":case"image":case"link":Ae("error",u),Ae("load",u);break;case"details":Ae("toggle",u);break;case"input":cf(u,p),Ae("invalid",u);break;case"select":u._wrapperState={wasMultiple:!!p.multiple},Ae("invalid",u);break;case"textarea":ff(u,p),Ae("invalid",u)}ou(a,p),d=null;for(var g in p)if(p.hasOwnProperty(g)){var w=p[g];g==="children"?typeof w=="string"?u.textContent!==w&&(p.suppressHydrationWarning!==!0&&ra(u.textContent,w,r),d=["children",w]):typeof w=="number"&&u.textContent!==""+w&&(p.suppressHydrationWarning!==!0&&ra(u.textContent,w,r),d=["children",""+w]):o.hasOwnProperty(g)&&w!=null&&g==="onScroll"&&Ae("scroll",u)}switch(a){case"input":Bn(u),hf(u,p,!0);break;case"textarea":Bn(u),mf(u);break;case"select":case"option":break;default:typeof p.onClick=="function"&&(u.onclick=ia)}u=d,i.updateQueue=u,u!==null&&(i.flags|=4)}else{g=d.nodeType===9?d:d.ownerDocument,r==="http://www.w3.org/1999/xhtml"&&(r=gf(a)),r==="http://www.w3.org/1999/xhtml"?a==="script"?(r=g.createElement("div"),r.innerHTML="<script><\/script>",r=r.removeChild(r.firstChild)):typeof u.is=="string"?r=g.createElement(a,{is:u.is}):(r=g.createElement(a),a==="select"&&(g=r,u.multiple?g.multiple=!0:u.size&&(g.size=u.size))):r=g.createElementNS(r,a),r[fn]=i,r[Ps]=u,Rm(r,i,!1,!1),i.stateNode=r;e:{switch(g=au(a,u),a){case"dialog":Ae("cancel",r),Ae("close",r),d=u;break;case"iframe":case"object":case"embed":Ae("load",r),d=u;break;case"video":case"audio":for(d=0;d<Rs.length;d++)Ae(Rs[d],r);d=u;break;case"source":Ae("error",r),d=u;break;case"img":case"image":case"link":Ae("error",r),Ae("load",r),d=u;break;case"details":Ae("toggle",r),d=u;break;case"input":cf(r,u),d=tu(r,u),Ae("invalid",r);break;case"option":d=u;break;case"select":r._wrapperState={wasMultiple:!!u.multiple},d=B({},u,{value:void 0}),Ae("invalid",r);break;case"textarea":ff(r,u),d=iu(r,u),Ae("invalid",r);break;default:d=u}ou(a,d),w=d;for(p in w)if(w.hasOwnProperty(p)){var C=w[p];p==="style"?vf(r,C):p==="dangerouslySetInnerHTML"?(C=C?C.__html:void 0,C!=null&&yf(r,C)):p==="children"?typeof C=="string"?(a!=="textarea"||C!=="")&&us(r,C):typeof C=="number"&&us(r,""+C):p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&p!=="autoFocus"&&(o.hasOwnProperty(p)?C!=null&&p==="onScroll"&&Ae("scroll",r):C!=null&&j(r,p,C,g))}switch(a){case"input":Bn(r),hf(r,u,!1);break;case"textarea":Bn(r),mf(r);break;case"option":u.value!=null&&r.setAttribute("value",""+ve(u.value));break;case"select":r.multiple=!!u.multiple,p=u.value,p!=null?si(r,!!u.multiple,p,!1):u.defaultValue!=null&&si(r,!!u.multiple,u.defaultValue,!0);break;default:typeof d.onClick=="function"&&(r.onclick=ia)}switch(a){case"button":case"input":case"select":case"textarea":u=!!u.autoFocus;break e;case"img":u=!0;break e;default:u=!1}}u&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return yt(i),null;case 6:if(r&&i.stateNode!=null)Nm(r,i,r.memoizedProps,u);else{if(typeof u!="string"&&i.stateNode===null)throw Error(t(166));if(a=Dr(Ms.current),Dr(pn.current),da(i)){if(u=i.stateNode,a=i.memoizedProps,u[fn]=i,(p=u.nodeValue!==a)&&(r=Lt,r!==null))switch(r.tag){case 3:ra(u.nodeValue,a,(r.mode&1)!==0);break;case 5:r.memoizedProps.suppressHydrationWarning!==!0&&ra(u.nodeValue,a,(r.mode&1)!==0)}p&&(i.flags|=4)}else u=(a.nodeType===9?a:a.ownerDocument).createTextNode(u),u[fn]=i,i.stateNode=u}return yt(i),null;case 13:if(De(je),u=i.memoizedState,r===null||r.memoizedState!==null&&r.memoizedState.dehydrated!==null){if(Oe&&Mt!==null&&(i.mode&1)!==0&&(i.flags&128)===0)Dp(),wi(),i.flags|=98560,p=!1;else if(p=da(i),u!==null&&u.dehydrated!==null){if(r===null){if(!p)throw Error(t(318));if(p=i.memoizedState,p=p!==null?p.dehydrated:null,!p)throw Error(t(317));p[fn]=i}else wi(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;yt(i),p=!1}else Jt!==null&&(Fc(Jt),Jt=null),p=!0;if(!p)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=a,i):(u=u!==null,u!==(r!==null&&r.memoizedState!==null)&&u&&(i.child.flags|=8192,(i.mode&1)!==0&&(r===null||(je.current&1)!==0?Ye===0&&(Ye=3):zc())),i.updateQueue!==null&&(i.flags|=4),yt(i),null);case 4:return Si(),Tc(r,i),r===null&&bs(i.stateNode.containerInfo),yt(i),null;case 10:return ec(i.type._context),yt(i),null;case 17:return xt(i.type)&&oa(),yt(i),null;case 19:if(De(je),p=i.memoizedState,p===null)return yt(i),null;if(u=(i.flags&128)!==0,g=p.rendering,g===null)if(u)$s(p,!1);else{if(Ye!==0||r!==null&&(r.flags&128)!==0)for(r=i.child;r!==null;){if(g=ya(r),g!==null){for(i.flags|=128,$s(p,!1),u=g.updateQueue,u!==null&&(i.updateQueue=u,i.flags|=4),i.subtreeFlags=0,u=a,a=i.child;a!==null;)p=a,r=u,p.flags&=14680066,g=p.alternate,g===null?(p.childLanes=0,p.lanes=r,p.child=null,p.subtreeFlags=0,p.memoizedProps=null,p.memoizedState=null,p.updateQueue=null,p.dependencies=null,p.stateNode=null):(p.childLanes=g.childLanes,p.lanes=g.lanes,p.child=g.child,p.subtreeFlags=0,p.deletions=null,p.memoizedProps=g.memoizedProps,p.memoizedState=g.memoizedState,p.updateQueue=g.updateQueue,p.type=g.type,r=g.dependencies,p.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext}),a=a.sibling;return be(je,je.current&1|2),i.child}r=r.sibling}p.tail!==null&&Ve()>Ri&&(i.flags|=128,u=!0,$s(p,!1),i.lanes=4194304)}else{if(!u)if(r=ya(g),r!==null){if(i.flags|=128,u=!0,a=r.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),$s(p,!0),p.tail===null&&p.tailMode==="hidden"&&!g.alternate&&!Oe)return yt(i),null}else 2*Ve()-p.renderingStartTime>Ri&&a!==1073741824&&(i.flags|=128,u=!0,$s(p,!1),i.lanes=4194304);p.isBackwards?(g.sibling=i.child,i.child=g):(a=p.last,a!==null?a.sibling=g:i.child=g,p.last=g)}return p.tail!==null?(i=p.tail,p.rendering=i,p.tail=i.sibling,p.renderingStartTime=Ve(),i.sibling=null,a=je.current,be(je,u?a&1|2:a&1),i):(yt(i),null);case 22:case 23:return Uc(),u=i.memoizedState!==null,r!==null&&r.memoizedState!==null!==u&&(i.flags|=8192),u&&(i.mode&1)!==0?(Ft&1073741824)!==0&&(yt(i),i.subtreeFlags&6&&(i.flags|=8192)):yt(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function j0(r,i){switch(Ku(i),i.tag){case 1:return xt(i.type)&&oa(),r=i.flags,r&65536?(i.flags=r&-65537|128,i):null;case 3:return Si(),De(Tt),De(mt),ac(),r=i.flags,(r&65536)!==0&&(r&128)===0?(i.flags=r&-65537|128,i):null;case 5:return sc(i),null;case 13:if(De(je),r=i.memoizedState,r!==null&&r.dehydrated!==null){if(i.alternate===null)throw Error(t(340));wi()}return r=i.flags,r&65536?(i.flags=r&-65537|128,i):null;case 19:return De(je),null;case 4:return Si(),null;case 10:return ec(i.type._context),null;case 22:case 23:return Uc(),null;case 24:return null;default:return null}}var Ta=!1,_t=!1,U0=typeof WeakSet=="function"?WeakSet:Set,K=null;function Ti(r,i){var a=r.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(u){ze(r,i,u)}else a.current=null}function xc(r,i,a){try{a()}catch(u){ze(r,i,u)}}var Pm=!1;function z0(r,i){if(Uu=Go,r=up(),Pu(r)){if("selectionStart"in r)var a={start:r.selectionStart,end:r.selectionEnd};else e:{a=(a=r.ownerDocument)&&a.defaultView||window;var u=a.getSelection&&a.getSelection();if(u&&u.rangeCount!==0){a=u.anchorNode;var d=u.anchorOffset,p=u.focusNode;u=u.focusOffset;try{a.nodeType,p.nodeType}catch{a=null;break e}var g=0,w=-1,C=-1,P=0,M=0,F=r,L=null;t:for(;;){for(var G;F!==a||d!==0&&F.nodeType!==3||(w=g+d),F!==p||u!==0&&F.nodeType!==3||(C=g+u),F.nodeType===3&&(g+=F.nodeValue.length),(G=F.firstChild)!==null;)L=F,F=G;for(;;){if(F===r)break t;if(L===a&&++P===d&&(w=g),L===p&&++M===u&&(C=g),(G=F.nextSibling)!==null)break;F=L,L=F.parentNode}F=G}a=w===-1||C===-1?null:{start:w,end:C}}else a=null}a=a||{start:0,end:0}}else a=null;for(zu={focusedElem:r,selectionRange:a},Go=!1,K=i;K!==null;)if(i=K,r=i.child,(i.subtreeFlags&1028)!==0&&r!==null)r.return=i,K=r;else for(;K!==null;){i=K;try{var Y=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(Y!==null){var Z=Y.memoizedProps,He=Y.memoizedState,R=i.stateNode,S=R.getSnapshotBeforeUpdate(i.elementType===i.type?Z:Xt(i.type,Z),He);R.__reactInternalSnapshotBeforeUpdate=S}break;case 3:var b=i.stateNode.containerInfo;b.nodeType===1?b.textContent="":b.nodeType===9&&b.documentElement&&b.removeChild(b.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(z){ze(i,i.return,z)}if(r=i.sibling,r!==null){r.return=i.return,K=r;break}K=i.return}return Y=Pm,Pm=!1,Y}function Ws(r,i,a){var u=i.updateQueue;if(u=u!==null?u.lastEffect:null,u!==null){var d=u=u.next;do{if((d.tag&r)===r){var p=d.destroy;d.destroy=void 0,p!==void 0&&xc(i,a,p)}d=d.next}while(d!==u)}}function xa(r,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var a=i=i.next;do{if((a.tag&r)===r){var u=a.create;a.destroy=u()}a=a.next}while(a!==i)}}function Rc(r){var i=r.ref;if(i!==null){var a=r.stateNode;switch(r.tag){case 5:r=a;break;default:r=a}typeof i=="function"?i(r):i.current=r}}function Am(r){var i=r.alternate;i!==null&&(r.alternate=null,Am(i)),r.child=null,r.deletions=null,r.sibling=null,r.tag===5&&(i=r.stateNode,i!==null&&(delete i[fn],delete i[Ps],delete i[Vu],delete i[C0],delete i[k0])),r.stateNode=null,r.return=null,r.dependencies=null,r.memoizedProps=null,r.memoizedState=null,r.pendingProps=null,r.stateNode=null,r.updateQueue=null}function Dm(r){return r.tag===5||r.tag===3||r.tag===4}function Om(r){e:for(;;){for(;r.sibling===null;){if(r.return===null||Dm(r.return))return null;r=r.return}for(r.sibling.return=r.return,r=r.sibling;r.tag!==5&&r.tag!==6&&r.tag!==18;){if(r.flags&2||r.child===null||r.tag===4)continue e;r.child.return=r,r=r.child}if(!(r.flags&2))return r.stateNode}}function bc(r,i,a){var u=r.tag;if(u===5||u===6)r=r.stateNode,i?a.nodeType===8?a.parentNode.insertBefore(r,i):a.insertBefore(r,i):(a.nodeType===8?(i=a.parentNode,i.insertBefore(r,a)):(i=a,i.appendChild(r)),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=ia));else if(u!==4&&(r=r.child,r!==null))for(bc(r,i,a),r=r.sibling;r!==null;)bc(r,i,a),r=r.sibling}function Nc(r,i,a){var u=r.tag;if(u===5||u===6)r=r.stateNode,i?a.insertBefore(r,i):a.appendChild(r);else if(u!==4&&(r=r.child,r!==null))for(Nc(r,i,a),r=r.sibling;r!==null;)Nc(r,i,a),r=r.sibling}var dt=null,Zt=!1;function nr(r,i,a){for(a=a.child;a!==null;)Lm(r,i,a),a=a.sibling}function Lm(r,i,a){if(hn&&typeof hn.onCommitFiberUnmount=="function")try{hn.onCommitFiberUnmount(zo,a)}catch{}switch(a.tag){case 5:_t||Ti(a,i);case 6:var u=dt,d=Zt;dt=null,nr(r,i,a),dt=u,Zt=d,dt!==null&&(Zt?(r=dt,a=a.stateNode,r.nodeType===8?r.parentNode.removeChild(a):r.removeChild(a)):dt.removeChild(a.stateNode));break;case 18:dt!==null&&(Zt?(r=dt,a=a.stateNode,r.nodeType===8?Bu(r.parentNode,a):r.nodeType===1&&Bu(r,a),ws(r)):Bu(dt,a.stateNode));break;case 4:u=dt,d=Zt,dt=a.stateNode.containerInfo,Zt=!0,nr(r,i,a),dt=u,Zt=d;break;case 0:case 11:case 14:case 15:if(!_t&&(u=a.updateQueue,u!==null&&(u=u.lastEffect,u!==null))){d=u=u.next;do{var p=d,g=p.destroy;p=p.tag,g!==void 0&&((p&2)!==0||(p&4)!==0)&&xc(a,i,g),d=d.next}while(d!==u)}nr(r,i,a);break;case 1:if(!_t&&(Ti(a,i),u=a.stateNode,typeof u.componentWillUnmount=="function"))try{u.props=a.memoizedProps,u.state=a.memoizedState,u.componentWillUnmount()}catch(w){ze(a,i,w)}nr(r,i,a);break;case 21:nr(r,i,a);break;case 22:a.mode&1?(_t=(u=_t)||a.memoizedState!==null,nr(r,i,a),_t=u):nr(r,i,a);break;default:nr(r,i,a)}}function Mm(r){var i=r.updateQueue;if(i!==null){r.updateQueue=null;var a=r.stateNode;a===null&&(a=r.stateNode=new U0),i.forEach(function(u){var d=Y0.bind(null,r,u);a.has(u)||(a.add(u),u.then(d,d))})}}function en(r,i){var a=i.deletions;if(a!==null)for(var u=0;u<a.length;u++){var d=a[u];try{var p=r,g=i,w=g;e:for(;w!==null;){switch(w.tag){case 5:dt=w.stateNode,Zt=!1;break e;case 3:dt=w.stateNode.containerInfo,Zt=!0;break e;case 4:dt=w.stateNode.containerInfo,Zt=!0;break e}w=w.return}if(dt===null)throw Error(t(160));Lm(p,g,d),dt=null,Zt=!1;var C=d.alternate;C!==null&&(C.return=null),d.return=null}catch(P){ze(d,i,P)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)Fm(i,r),i=i.sibling}function Fm(r,i){var a=r.alternate,u=r.flags;switch(r.tag){case 0:case 11:case 14:case 15:if(en(i,r),gn(r),u&4){try{Ws(3,r,r.return),xa(3,r)}catch(Z){ze(r,r.return,Z)}try{Ws(5,r,r.return)}catch(Z){ze(r,r.return,Z)}}break;case 1:en(i,r),gn(r),u&512&&a!==null&&Ti(a,a.return);break;case 5:if(en(i,r),gn(r),u&512&&a!==null&&Ti(a,a.return),r.flags&32){var d=r.stateNode;try{us(d,"")}catch(Z){ze(r,r.return,Z)}}if(u&4&&(d=r.stateNode,d!=null)){var p=r.memoizedProps,g=a!==null?a.memoizedProps:p,w=r.type,C=r.updateQueue;if(r.updateQueue=null,C!==null)try{w==="input"&&p.type==="radio"&&p.name!=null&&df(d,p),au(w,g);var P=au(w,p);for(g=0;g<C.length;g+=2){var M=C[g],F=C[g+1];M==="style"?vf(d,F):M==="dangerouslySetInnerHTML"?yf(d,F):M==="children"?us(d,F):j(d,M,F,P)}switch(w){case"input":nu(d,p);break;case"textarea":pf(d,p);break;case"select":var L=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!p.multiple;var G=p.value;G!=null?si(d,!!p.multiple,G,!1):L!==!!p.multiple&&(p.defaultValue!=null?si(d,!!p.multiple,p.defaultValue,!0):si(d,!!p.multiple,p.multiple?[]:"",!1))}d[Ps]=p}catch(Z){ze(r,r.return,Z)}}break;case 6:if(en(i,r),gn(r),u&4){if(r.stateNode===null)throw Error(t(162));d=r.stateNode,p=r.memoizedProps;try{d.nodeValue=p}catch(Z){ze(r,r.return,Z)}}break;case 3:if(en(i,r),gn(r),u&4&&a!==null&&a.memoizedState.isDehydrated)try{ws(i.containerInfo)}catch(Z){ze(r,r.return,Z)}break;case 4:en(i,r),gn(r);break;case 13:en(i,r),gn(r),d=r.child,d.flags&8192&&(p=d.memoizedState!==null,d.stateNode.isHidden=p,!p||d.alternate!==null&&d.alternate.memoizedState!==null||(Dc=Ve())),u&4&&Mm(r);break;case 22:if(M=a!==null&&a.memoizedState!==null,r.mode&1?(_t=(P=_t)||M,en(i,r),_t=P):en(i,r),gn(r),u&8192){if(P=r.memoizedState!==null,(r.stateNode.isHidden=P)&&!M&&(r.mode&1)!==0)for(K=r,M=r.child;M!==null;){for(F=K=M;K!==null;){switch(L=K,G=L.child,L.tag){case 0:case 11:case 14:case 15:Ws(4,L,L.return);break;case 1:Ti(L,L.return);var Y=L.stateNode;if(typeof Y.componentWillUnmount=="function"){u=L,a=L.return;try{i=u,Y.props=i.memoizedProps,Y.state=i.memoizedState,Y.componentWillUnmount()}catch(Z){ze(u,a,Z)}}break;case 5:Ti(L,L.return);break;case 22:if(L.memoizedState!==null){zm(F);continue}}G!==null?(G.return=L,K=G):zm(F)}M=M.sibling}e:for(M=null,F=r;;){if(F.tag===5){if(M===null){M=F;try{d=F.stateNode,P?(p=d.style,typeof p.setProperty=="function"?p.setProperty("display","none","important"):p.display="none"):(w=F.stateNode,C=F.memoizedProps.style,g=C!=null&&C.hasOwnProperty("display")?C.display:null,w.style.display=_f("display",g))}catch(Z){ze(r,r.return,Z)}}}else if(F.tag===6){if(M===null)try{F.stateNode.nodeValue=P?"":F.memoizedProps}catch(Z){ze(r,r.return,Z)}}else if((F.tag!==22&&F.tag!==23||F.memoizedState===null||F===r)&&F.child!==null){F.child.return=F,F=F.child;continue}if(F===r)break e;for(;F.sibling===null;){if(F.return===null||F.return===r)break e;M===F&&(M=null),F=F.return}M===F&&(M=null),F.sibling.return=F.return,F=F.sibling}}break;case 19:en(i,r),gn(r),u&4&&Mm(r);break;case 21:break;default:en(i,r),gn(r)}}function gn(r){var i=r.flags;if(i&2){try{e:{for(var a=r.return;a!==null;){if(Dm(a)){var u=a;break e}a=a.return}throw Error(t(160))}switch(u.tag){case 5:var d=u.stateNode;u.flags&32&&(us(d,""),u.flags&=-33);var p=Om(r);Nc(r,p,d);break;case 3:case 4:var g=u.stateNode.containerInfo,w=Om(r);bc(r,w,g);break;default:throw Error(t(161))}}catch(C){ze(r,r.return,C)}r.flags&=-3}i&4096&&(r.flags&=-4097)}function $0(r,i,a){K=r,jm(r)}function jm(r,i,a){for(var u=(r.mode&1)!==0;K!==null;){var d=K,p=d.child;if(d.tag===22&&u){var g=d.memoizedState!==null||Ta;if(!g){var w=d.alternate,C=w!==null&&w.memoizedState!==null||_t;w=Ta;var P=_t;if(Ta=g,(_t=C)&&!P)for(K=d;K!==null;)g=K,C=g.child,g.tag===22&&g.memoizedState!==null?$m(d):C!==null?(C.return=g,K=C):$m(d);for(;p!==null;)K=p,jm(p),p=p.sibling;K=d,Ta=w,_t=P}Um(r)}else(d.subtreeFlags&8772)!==0&&p!==null?(p.return=d,K=p):Um(r)}}function Um(r){for(;K!==null;){var i=K;if((i.flags&8772)!==0){var a=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:_t||xa(5,i);break;case 1:var u=i.stateNode;if(i.flags&4&&!_t)if(a===null)u.componentDidMount();else{var d=i.elementType===i.type?a.memoizedProps:Xt(i.type,a.memoizedProps);u.componentDidUpdate(d,a.memoizedState,u.__reactInternalSnapshotBeforeUpdate)}var p=i.updateQueue;p!==null&&zp(i,p,u);break;case 3:var g=i.updateQueue;if(g!==null){if(a=null,i.child!==null)switch(i.child.tag){case 5:a=i.child.stateNode;break;case 1:a=i.child.stateNode}zp(i,g,a)}break;case 5:var w=i.stateNode;if(a===null&&i.flags&4){a=w;var C=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":C.autoFocus&&a.focus();break;case"img":C.src&&(a.src=C.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var P=i.alternate;if(P!==null){var M=P.memoizedState;if(M!==null){var F=M.dehydrated;F!==null&&ws(F)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}_t||i.flags&512&&Rc(i)}catch(L){ze(i,i.return,L)}}if(i===r){K=null;break}if(a=i.sibling,a!==null){a.return=i.return,K=a;break}K=i.return}}function zm(r){for(;K!==null;){var i=K;if(i===r){K=null;break}var a=i.sibling;if(a!==null){a.return=i.return,K=a;break}K=i.return}}function $m(r){for(;K!==null;){var i=K;try{switch(i.tag){case 0:case 11:case 15:var a=i.return;try{xa(4,i)}catch(C){ze(i,a,C)}break;case 1:var u=i.stateNode;if(typeof u.componentDidMount=="function"){var d=i.return;try{u.componentDidMount()}catch(C){ze(i,d,C)}}var p=i.return;try{Rc(i)}catch(C){ze(i,p,C)}break;case 5:var g=i.return;try{Rc(i)}catch(C){ze(i,g,C)}}}catch(C){ze(i,i.return,C)}if(i===r){K=null;break}var w=i.sibling;if(w!==null){w.return=i.return,K=w;break}K=i.return}}var W0=Math.ceil,Ra=ne.ReactCurrentDispatcher,Pc=ne.ReactCurrentOwner,Bt=ne.ReactCurrentBatchConfig,we=0,et=null,qe=null,ht=0,Ft=0,xi=Jn(0),Ye=0,Bs=null,Lr=0,ba=0,Ac=0,Vs=null,bt=null,Dc=0,Ri=1/0,Nn=null,Na=!1,Oc=null,rr=null,Pa=!1,ir=null,Aa=0,Hs=0,Lc=null,Da=-1,Oa=0;function Ct(){return(we&6)!==0?Ve():Da!==-1?Da:Da=Ve()}function sr(r){return(r.mode&1)===0?1:(we&2)!==0&&ht!==0?ht&-ht:I0.transition!==null?(Oa===0&&(Oa=Of()),Oa):(r=Se,r!==0||(r=window.event,r=r===void 0?16:Bf(r.type)),r)}function tn(r,i,a,u){if(50<Hs)throw Hs=0,Lc=null,Error(t(185));ms(r,a,u),((we&2)===0||r!==et)&&(r===et&&((we&2)===0&&(ba|=a),Ye===4&&or(r,ht)),Nt(r,u),a===1&&we===0&&(i.mode&1)===0&&(Ri=Ve()+500,la&&Zn()))}function Nt(r,i){var a=r.callbackNode;IE(r,i);var u=Bo(r,r===et?ht:0);if(u===0)a!==null&&Pf(a),r.callbackNode=null,r.callbackPriority=0;else if(i=u&-u,r.callbackPriority!==i){if(a!=null&&Pf(a),i===1)r.tag===0?S0(Bm.bind(null,r)):Rp(Bm.bind(null,r)),w0(function(){(we&6)===0&&Zn()}),a=null;else{switch(Lf(u)){case 1:a=pu;break;case 4:a=Af;break;case 16:a=Uo;break;case 536870912:a=Df;break;default:a=Uo}a=Jm(a,Wm.bind(null,r))}r.callbackPriority=i,r.callbackNode=a}}function Wm(r,i){if(Da=-1,Oa=0,(we&6)!==0)throw Error(t(327));var a=r.callbackNode;if(bi()&&r.callbackNode!==a)return null;var u=Bo(r,r===et?ht:0);if(u===0)return null;if((u&30)!==0||(u&r.expiredLanes)!==0||i)i=La(r,u);else{i=u;var d=we;we|=2;var p=Hm();(et!==r||ht!==i)&&(Nn=null,Ri=Ve()+500,Fr(r,i));do try{H0();break}catch(w){Vm(r,w)}while(!0);Zu(),Ra.current=p,we=d,qe!==null?i=0:(et=null,ht=0,i=Ye)}if(i!==0){if(i===2&&(d=mu(r),d!==0&&(u=d,i=Mc(r,d))),i===1)throw a=Bs,Fr(r,0),or(r,u),Nt(r,Ve()),a;if(i===6)or(r,u);else{if(d=r.current.alternate,(u&30)===0&&!B0(d)&&(i=La(r,u),i===2&&(p=mu(r),p!==0&&(u=p,i=Mc(r,p))),i===1))throw a=Bs,Fr(r,0),or(r,u),Nt(r,Ve()),a;switch(r.finishedWork=d,r.finishedLanes=u,i){case 0:case 1:throw Error(t(345));case 2:jr(r,bt,Nn);break;case 3:if(or(r,u),(u&130023424)===u&&(i=Dc+500-Ve(),10<i)){if(Bo(r,0)!==0)break;if(d=r.suspendedLanes,(d&u)!==u){Ct(),r.pingedLanes|=r.suspendedLanes&d;break}r.timeoutHandle=Wu(jr.bind(null,r,bt,Nn),i);break}jr(r,bt,Nn);break;case 4:if(or(r,u),(u&4194240)===u)break;for(i=r.eventTimes,d=-1;0<u;){var g=31-Yt(u);p=1<<g,g=i[g],g>d&&(d=g),u&=~p}if(u=d,u=Ve()-u,u=(120>u?120:480>u?480:1080>u?1080:1920>u?1920:3e3>u?3e3:4320>u?4320:1960*W0(u/1960))-u,10<u){r.timeoutHandle=Wu(jr.bind(null,r,bt,Nn),u);break}jr(r,bt,Nn);break;case 5:jr(r,bt,Nn);break;default:throw Error(t(329))}}}return Nt(r,Ve()),r.callbackNode===a?Wm.bind(null,r):null}function Mc(r,i){var a=Vs;return r.current.memoizedState.isDehydrated&&(Fr(r,i).flags|=256),r=La(r,i),r!==2&&(i=bt,bt=a,i!==null&&Fc(i)),r}function Fc(r){bt===null?bt=r:bt.push.apply(bt,r)}function B0(r){for(var i=r;;){if(i.flags&16384){var a=i.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var u=0;u<a.length;u++){var d=a[u],p=d.getSnapshot;d=d.value;try{if(!Qt(p(),d))return!1}catch{return!1}}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===r)break;for(;i.sibling===null;){if(i.return===null||i.return===r)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function or(r,i){for(i&=~Ac,i&=~ba,r.suspendedLanes|=i,r.pingedLanes&=~i,r=r.expirationTimes;0<i;){var a=31-Yt(i),u=1<<a;r[a]=-1,i&=~u}}function Bm(r){if((we&6)!==0)throw Error(t(327));bi();var i=Bo(r,0);if((i&1)===0)return Nt(r,Ve()),null;var a=La(r,i);if(r.tag!==0&&a===2){var u=mu(r);u!==0&&(i=u,a=Mc(r,u))}if(a===1)throw a=Bs,Fr(r,0),or(r,i),Nt(r,Ve()),a;if(a===6)throw Error(t(345));return r.finishedWork=r.current.alternate,r.finishedLanes=i,jr(r,bt,Nn),Nt(r,Ve()),null}function jc(r,i){var a=we;we|=1;try{return r(i)}finally{we=a,we===0&&(Ri=Ve()+500,la&&Zn())}}function Mr(r){ir!==null&&ir.tag===0&&(we&6)===0&&bi();var i=we;we|=1;var a=Bt.transition,u=Se;try{if(Bt.transition=null,Se=1,r)return r()}finally{Se=u,Bt.transition=a,we=i,(we&6)===0&&Zn()}}function Uc(){Ft=xi.current,De(xi)}function Fr(r,i){r.finishedWork=null,r.finishedLanes=0;var a=r.timeoutHandle;if(a!==-1&&(r.timeoutHandle=-1,v0(a)),qe!==null)for(a=qe.return;a!==null;){var u=a;switch(Ku(u),u.tag){case 1:u=u.type.childContextTypes,u!=null&&oa();break;case 3:Si(),De(Tt),De(mt),ac();break;case 5:sc(u);break;case 4:Si();break;case 13:De(je);break;case 19:De(je);break;case 10:ec(u.type._context);break;case 22:case 23:Uc()}a=a.return}if(et=r,qe=r=ar(r.current,null),ht=Ft=i,Ye=0,Bs=null,Ac=ba=Lr=0,bt=Vs=null,Ar!==null){for(i=0;i<Ar.length;i++)if(a=Ar[i],u=a.interleaved,u!==null){a.interleaved=null;var d=u.next,p=a.pending;if(p!==null){var g=p.next;p.next=d,u.next=g}a.pending=u}Ar=null}return r}function Vm(r,i){do{var a=qe;try{if(Zu(),_a.current=Ca,va){for(var u=Ue.memoizedState;u!==null;){var d=u.queue;d!==null&&(d.pending=null),u=u.next}va=!1}if(Or=0,Ze=Ke=Ue=null,Fs=!1,js=0,Pc.current=null,a===null||a.return===null){Ye=1,Bs=i,qe=null;break}e:{var p=r,g=a.return,w=a,C=i;if(i=ht,w.flags|=32768,C!==null&&typeof C=="object"&&typeof C.then=="function"){var P=C,M=w,F=M.tag;if((M.mode&1)===0&&(F===0||F===11||F===15)){var L=M.alternate;L?(M.updateQueue=L.updateQueue,M.memoizedState=L.memoizedState,M.lanes=L.lanes):(M.updateQueue=null,M.memoizedState=null)}var G=mm(g);if(G!==null){G.flags&=-257,gm(G,g,w,p,i),G.mode&1&&pm(p,P,i),i=G,C=P;var Y=i.updateQueue;if(Y===null){var Z=new Set;Z.add(C),i.updateQueue=Z}else Y.add(C);break e}else{if((i&1)===0){pm(p,P,i),zc();break e}C=Error(t(426))}}else if(Oe&&w.mode&1){var He=mm(g);if(He!==null){(He.flags&65536)===0&&(He.flags|=256),gm(He,g,w,p,i),Ju(Ii(C,w));break e}}p=C=Ii(C,w),Ye!==4&&(Ye=2),Vs===null?Vs=[p]:Vs.push(p),p=g;do{switch(p.tag){case 3:p.flags|=65536,i&=-i,p.lanes|=i;var R=hm(p,C,i);Up(p,R);break e;case 1:w=C;var S=p.type,b=p.stateNode;if((p.flags&128)===0&&(typeof S.getDerivedStateFromError=="function"||b!==null&&typeof b.componentDidCatch=="function"&&(rr===null||!rr.has(b)))){p.flags|=65536,i&=-i,p.lanes|=i;var z=fm(p,w,i);Up(p,z);break e}}p=p.return}while(p!==null)}qm(a)}catch(ee){i=ee,qe===a&&a!==null&&(qe=a=a.return);continue}break}while(!0)}function Hm(){var r=Ra.current;return Ra.current=Ca,r===null?Ca:r}function zc(){(Ye===0||Ye===3||Ye===2)&&(Ye=4),et===null||(Lr&268435455)===0&&(ba&268435455)===0||or(et,ht)}function La(r,i){var a=we;we|=2;var u=Hm();(et!==r||ht!==i)&&(Nn=null,Fr(r,i));do try{V0();break}catch(d){Vm(r,d)}while(!0);if(Zu(),we=a,Ra.current=u,qe!==null)throw Error(t(261));return et=null,ht=0,Ye}function V0(){for(;qe!==null;)Gm(qe)}function H0(){for(;qe!==null&&!gE();)Gm(qe)}function Gm(r){var i=Qm(r.alternate,r,Ft);r.memoizedProps=r.pendingProps,i===null?qm(r):qe=i,Pc.current=null}function qm(r){var i=r;do{var a=i.alternate;if(r=i.return,(i.flags&32768)===0){if(a=F0(a,i,Ft),a!==null){qe=a;return}}else{if(a=j0(a,i),a!==null){a.flags&=32767,qe=a;return}if(r!==null)r.flags|=32768,r.subtreeFlags=0,r.deletions=null;else{Ye=6,qe=null;return}}if(i=i.sibling,i!==null){qe=i;return}qe=i=r}while(i!==null);Ye===0&&(Ye=5)}function jr(r,i,a){var u=Se,d=Bt.transition;try{Bt.transition=null,Se=1,G0(r,i,a,u)}finally{Bt.transition=d,Se=u}return null}function G0(r,i,a,u){do bi();while(ir!==null);if((we&6)!==0)throw Error(t(327));a=r.finishedWork;var d=r.finishedLanes;if(a===null)return null;if(r.finishedWork=null,r.finishedLanes=0,a===r.current)throw Error(t(177));r.callbackNode=null,r.callbackPriority=0;var p=a.lanes|a.childLanes;if(TE(r,p),r===et&&(qe=et=null,ht=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||Pa||(Pa=!0,Jm(Uo,function(){return bi(),null})),p=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||p){p=Bt.transition,Bt.transition=null;var g=Se;Se=1;var w=we;we|=4,Pc.current=null,z0(r,a),Fm(a,r),h0(zu),Go=!!Uu,zu=Uu=null,r.current=a,$0(a),yE(),we=w,Se=g,Bt.transition=p}else r.current=a;if(Pa&&(Pa=!1,ir=r,Aa=d),p=r.pendingLanes,p===0&&(rr=null),wE(a.stateNode),Nt(r,Ve()),i!==null)for(u=r.onRecoverableError,a=0;a<i.length;a++)d=i[a],u(d.value,{componentStack:d.stack,digest:d.digest});if(Na)throw Na=!1,r=Oc,Oc=null,r;return(Aa&1)!==0&&r.tag!==0&&bi(),p=r.pendingLanes,(p&1)!==0?r===Lc?Hs++:(Hs=0,Lc=r):Hs=0,Zn(),null}function bi(){if(ir!==null){var r=Lf(Aa),i=Bt.transition,a=Se;try{if(Bt.transition=null,Se=16>r?16:r,ir===null)var u=!1;else{if(r=ir,ir=null,Aa=0,(we&6)!==0)throw Error(t(331));var d=we;for(we|=4,K=r.current;K!==null;){var p=K,g=p.child;if((K.flags&16)!==0){var w=p.deletions;if(w!==null){for(var C=0;C<w.length;C++){var P=w[C];for(K=P;K!==null;){var M=K;switch(M.tag){case 0:case 11:case 15:Ws(8,M,p)}var F=M.child;if(F!==null)F.return=M,K=F;else for(;K!==null;){M=K;var L=M.sibling,G=M.return;if(Am(M),M===P){K=null;break}if(L!==null){L.return=G,K=L;break}K=G}}}var Y=p.alternate;if(Y!==null){var Z=Y.child;if(Z!==null){Y.child=null;do{var He=Z.sibling;Z.sibling=null,Z=He}while(Z!==null)}}K=p}}if((p.subtreeFlags&2064)!==0&&g!==null)g.return=p,K=g;else e:for(;K!==null;){if(p=K,(p.flags&2048)!==0)switch(p.tag){case 0:case 11:case 15:Ws(9,p,p.return)}var R=p.sibling;if(R!==null){R.return=p.return,K=R;break e}K=p.return}}var S=r.current;for(K=S;K!==null;){g=K;var b=g.child;if((g.subtreeFlags&2064)!==0&&b!==null)b.return=g,K=b;else e:for(g=S;K!==null;){if(w=K,(w.flags&2048)!==0)try{switch(w.tag){case 0:case 11:case 15:xa(9,w)}}catch(ee){ze(w,w.return,ee)}if(w===g){K=null;break e}var z=w.sibling;if(z!==null){z.return=w.return,K=z;break e}K=w.return}}if(we=d,Zn(),hn&&typeof hn.onPostCommitFiberRoot=="function")try{hn.onPostCommitFiberRoot(zo,r)}catch{}u=!0}return u}finally{Se=a,Bt.transition=i}}return!1}function Km(r,i,a){i=Ii(a,i),i=hm(r,i,1),r=tr(r,i,1),i=Ct(),r!==null&&(ms(r,1,i),Nt(r,i))}function ze(r,i,a){if(r.tag===3)Km(r,r,a);else for(;i!==null;){if(i.tag===3){Km(i,r,a);break}else if(i.tag===1){var u=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(rr===null||!rr.has(u))){r=Ii(a,r),r=fm(i,r,1),i=tr(i,r,1),r=Ct(),i!==null&&(ms(i,1,r),Nt(i,r));break}}i=i.return}}function q0(r,i,a){var u=r.pingCache;u!==null&&u.delete(i),i=Ct(),r.pingedLanes|=r.suspendedLanes&a,et===r&&(ht&a)===a&&(Ye===4||Ye===3&&(ht&130023424)===ht&&500>Ve()-Dc?Fr(r,0):Ac|=a),Nt(r,i)}function Ym(r,i){i===0&&((r.mode&1)===0?i=1:(i=Wo,Wo<<=1,(Wo&130023424)===0&&(Wo=4194304)));var a=Ct();r=xn(r,i),r!==null&&(ms(r,i,a),Nt(r,a))}function K0(r){var i=r.memoizedState,a=0;i!==null&&(a=i.retryLane),Ym(r,a)}function Y0(r,i){var a=0;switch(r.tag){case 13:var u=r.stateNode,d=r.memoizedState;d!==null&&(a=d.retryLane);break;case 19:u=r.stateNode;break;default:throw Error(t(314))}u!==null&&u.delete(i),Ym(r,a)}var Qm;Qm=function(r,i,a){if(r!==null)if(r.memoizedProps!==i.pendingProps||Tt.current)Rt=!0;else{if((r.lanes&a)===0&&(i.flags&128)===0)return Rt=!1,M0(r,i,a);Rt=(r.flags&131072)!==0}else Rt=!1,Oe&&(i.flags&1048576)!==0&&bp(i,ca,i.index);switch(i.lanes=0,i.tag){case 2:var u=i.type;Ia(r,i),r=i.pendingProps;var d=yi(i,mt.current);ki(i,a),d=cc(null,i,u,r,d,a);var p=dc();return i.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,xt(u)?(p=!0,aa(i)):p=!1,i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,rc(i),d.updater=ka,i.stateNode=d,d._reactInternals=i,yc(i,u,r,a),i=Ec(null,i,u,!0,p,a)):(i.tag=0,Oe&&p&&qu(i),Et(null,i,d,a),i=i.child),i;case 16:u=i.elementType;e:{switch(Ia(r,i),r=i.pendingProps,d=u._init,u=d(u._payload),i.type=u,d=i.tag=J0(u),r=Xt(u,r),d){case 0:i=wc(null,i,u,r,a);break e;case 1:i=Cm(null,i,u,r,a);break e;case 11:i=ym(null,i,u,r,a);break e;case 14:i=_m(null,i,u,Xt(u.type,r),a);break e}throw Error(t(306,u,""))}return i;case 0:return u=i.type,d=i.pendingProps,d=i.elementType===u?d:Xt(u,d),wc(r,i,u,d,a);case 1:return u=i.type,d=i.pendingProps,d=i.elementType===u?d:Xt(u,d),Cm(r,i,u,d,a);case 3:e:{if(km(i),r===null)throw Error(t(387));u=i.pendingProps,p=i.memoizedState,d=p.element,jp(r,i),ga(i,u,null,a);var g=i.memoizedState;if(u=g.element,p.isDehydrated)if(p={element:u,isDehydrated:!1,cache:g.cache,pendingSuspenseBoundaries:g.pendingSuspenseBoundaries,transitions:g.transitions},i.updateQueue.baseState=p,i.memoizedState=p,i.flags&256){d=Ii(Error(t(423)),i),i=Sm(r,i,u,a,d);break e}else if(u!==d){d=Ii(Error(t(424)),i),i=Sm(r,i,u,a,d);break e}else for(Mt=Qn(i.stateNode.containerInfo.firstChild),Lt=i,Oe=!0,Jt=null,a=Mp(i,null,u,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(wi(),u===d){i=bn(r,i,a);break e}Et(r,i,u,a)}i=i.child}return i;case 5:return $p(i),r===null&&Qu(i),u=i.type,d=i.pendingProps,p=r!==null?r.memoizedProps:null,g=d.children,$u(u,d)?g=null:p!==null&&$u(u,p)&&(i.flags|=32),Em(r,i),Et(r,i,g,a),i.child;case 6:return r===null&&Qu(i),null;case 13:return Im(r,i,a);case 4:return ic(i,i.stateNode.containerInfo),u=i.pendingProps,r===null?i.child=Ei(i,null,u,a):Et(r,i,u,a),i.child;case 11:return u=i.type,d=i.pendingProps,d=i.elementType===u?d:Xt(u,d),ym(r,i,u,d,a);case 7:return Et(r,i,i.pendingProps,a),i.child;case 8:return Et(r,i,i.pendingProps.children,a),i.child;case 12:return Et(r,i,i.pendingProps.children,a),i.child;case 10:e:{if(u=i.type._context,d=i.pendingProps,p=i.memoizedProps,g=d.value,be(fa,u._currentValue),u._currentValue=g,p!==null)if(Qt(p.value,g)){if(p.children===d.children&&!Tt.current){i=bn(r,i,a);break e}}else for(p=i.child,p!==null&&(p.return=i);p!==null;){var w=p.dependencies;if(w!==null){g=p.child;for(var C=w.firstContext;C!==null;){if(C.context===u){if(p.tag===1){C=Rn(-1,a&-a),C.tag=2;var P=p.updateQueue;if(P!==null){P=P.shared;var M=P.pending;M===null?C.next=C:(C.next=M.next,M.next=C),P.pending=C}}p.lanes|=a,C=p.alternate,C!==null&&(C.lanes|=a),tc(p.return,a,i),w.lanes|=a;break}C=C.next}}else if(p.tag===10)g=p.type===i.type?null:p.child;else if(p.tag===18){if(g=p.return,g===null)throw Error(t(341));g.lanes|=a,w=g.alternate,w!==null&&(w.lanes|=a),tc(g,a,i),g=p.sibling}else g=p.child;if(g!==null)g.return=p;else for(g=p;g!==null;){if(g===i){g=null;break}if(p=g.sibling,p!==null){p.return=g.return,g=p;break}g=g.return}p=g}Et(r,i,d.children,a),i=i.child}return i;case 9:return d=i.type,u=i.pendingProps.children,ki(i,a),d=$t(d),u=u(d),i.flags|=1,Et(r,i,u,a),i.child;case 14:return u=i.type,d=Xt(u,i.pendingProps),d=Xt(u.type,d),_m(r,i,u,d,a);case 15:return vm(r,i,i.type,i.pendingProps,a);case 17:return u=i.type,d=i.pendingProps,d=i.elementType===u?d:Xt(u,d),Ia(r,i),i.tag=1,xt(u)?(r=!0,aa(i)):r=!1,ki(i,a),cm(i,u,d),yc(i,u,d,a),Ec(null,i,u,!0,r,a);case 19:return xm(r,i,a);case 22:return wm(r,i,a)}throw Error(t(156,i.tag))};function Jm(r,i){return Nf(r,i)}function Q0(r,i,a,u){this.tag=r,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Vt(r,i,a,u){return new Q0(r,i,a,u)}function $c(r){return r=r.prototype,!(!r||!r.isReactComponent)}function J0(r){if(typeof r=="function")return $c(r)?1:0;if(r!=null){if(r=r.$$typeof,r===ut)return 11;if(r===Ge)return 14}return 2}function ar(r,i){var a=r.alternate;return a===null?(a=Vt(r.tag,i,r.key,r.mode),a.elementType=r.elementType,a.type=r.type,a.stateNode=r.stateNode,a.alternate=r,r.alternate=a):(a.pendingProps=i,a.type=r.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=r.flags&14680064,a.childLanes=r.childLanes,a.lanes=r.lanes,a.child=r.child,a.memoizedProps=r.memoizedProps,a.memoizedState=r.memoizedState,a.updateQueue=r.updateQueue,i=r.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=r.sibling,a.index=r.index,a.ref=r.ref,a}function Ma(r,i,a,u,d,p){var g=2;if(u=r,typeof r=="function")$c(r)&&(g=1);else if(typeof r=="string")g=5;else e:switch(r){case Ie:return Ur(a.children,d,p,i);case X:g=8,d|=8;break;case Ee:return r=Vt(12,a,i,d|2),r.elementType=Ee,r.lanes=p,r;case Je:return r=Vt(13,a,i,d),r.elementType=Je,r.lanes=p,r;case ct:return r=Vt(19,a,i,d),r.elementType=ct,r.lanes=p,r;case W:return Fa(a,d,p,i);default:if(typeof r=="object"&&r!==null)switch(r.$$typeof){case Be:g=10;break e;case wt:g=9;break e;case ut:g=11;break e;case Ge:g=14;break e;case Re:g=16,u=null;break e}throw Error(t(130,r==null?r:typeof r,""))}return i=Vt(g,a,i,d),i.elementType=r,i.type=u,i.lanes=p,i}function Ur(r,i,a,u){return r=Vt(7,r,u,i),r.lanes=a,r}function Fa(r,i,a,u){return r=Vt(22,r,u,i),r.elementType=W,r.lanes=a,r.stateNode={isHidden:!1},r}function Wc(r,i,a){return r=Vt(6,r,null,i),r.lanes=a,r}function Bc(r,i,a){return i=Vt(4,r.children!==null?r.children:[],r.key,i),i.lanes=a,i.stateNode={containerInfo:r.containerInfo,pendingChildren:null,implementation:r.implementation},i}function X0(r,i,a,u,d){this.tag=i,this.containerInfo=r,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=gu(0),this.expirationTimes=gu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=gu(0),this.identifierPrefix=u,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function Vc(r,i,a,u,d,p,g,w,C){return r=new X0(r,i,a,w,C),i===1?(i=1,p===!0&&(i|=8)):i=0,p=Vt(3,null,null,i),r.current=p,p.stateNode=r,p.memoizedState={element:u,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},rc(p),r}function Z0(r,i,a){var u=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:_e,key:u==null?null:""+u,children:r,containerInfo:i,implementation:a}}function Xm(r){if(!r)return Xn;r=r._reactInternals;e:{if(xr(r)!==r||r.tag!==1)throw Error(t(170));var i=r;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(xt(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(r.tag===1){var a=r.type;if(xt(a))return Tp(r,a,i)}return i}function Zm(r,i,a,u,d,p,g,w,C){return r=Vc(a,u,!0,r,d,p,g,w,C),r.context=Xm(null),a=r.current,u=Ct(),d=sr(a),p=Rn(u,d),p.callback=i??null,tr(a,p,d),r.current.lanes=d,ms(r,d,u),Nt(r,u),r}function ja(r,i,a,u){var d=i.current,p=Ct(),g=sr(d);return a=Xm(a),i.context===null?i.context=a:i.pendingContext=a,i=Rn(p,g),i.payload={element:r},u=u===void 0?null:u,u!==null&&(i.callback=u),r=tr(d,i,g),r!==null&&(tn(r,d,g,p),ma(r,d,g)),g}function Ua(r){if(r=r.current,!r.child)return null;switch(r.child.tag){case 5:return r.child.stateNode;default:return r.child.stateNode}}function eg(r,i){if(r=r.memoizedState,r!==null&&r.dehydrated!==null){var a=r.retryLane;r.retryLane=a!==0&&a<i?a:i}}function Hc(r,i){eg(r,i),(r=r.alternate)&&eg(r,i)}function eC(){return null}var tg=typeof reportError=="function"?reportError:function(r){console.error(r)};function Gc(r){this._internalRoot=r}za.prototype.render=Gc.prototype.render=function(r){var i=this._internalRoot;if(i===null)throw Error(t(409));ja(r,i,null,null)},za.prototype.unmount=Gc.prototype.unmount=function(){var r=this._internalRoot;if(r!==null){this._internalRoot=null;var i=r.containerInfo;Mr(function(){ja(null,r,null,null)}),i[kn]=null}};function za(r){this._internalRoot=r}za.prototype.unstable_scheduleHydration=function(r){if(r){var i=jf();r={blockedOn:null,target:r,priority:i};for(var a=0;a<qn.length&&i!==0&&i<qn[a].priority;a++);qn.splice(a,0,r),a===0&&$f(r)}};function qc(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11)}function $a(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11&&(r.nodeType!==8||r.nodeValue!==" react-mount-point-unstable "))}function ng(){}function tC(r,i,a,u,d){if(d){if(typeof u=="function"){var p=u;u=function(){var P=Ua(g);p.call(P)}}var g=Zm(i,u,r,0,null,!1,!1,"",ng);return r._reactRootContainer=g,r[kn]=g.current,bs(r.nodeType===8?r.parentNode:r),Mr(),g}for(;d=r.lastChild;)r.removeChild(d);if(typeof u=="function"){var w=u;u=function(){var P=Ua(C);w.call(P)}}var C=Vc(r,0,!1,null,null,!1,!1,"",ng);return r._reactRootContainer=C,r[kn]=C.current,bs(r.nodeType===8?r.parentNode:r),Mr(function(){ja(i,C,a,u)}),C}function Wa(r,i,a,u,d){var p=a._reactRootContainer;if(p){var g=p;if(typeof d=="function"){var w=d;d=function(){var C=Ua(g);w.call(C)}}ja(i,g,r,d)}else g=tC(a,i,r,d,u);return Ua(g)}Mf=function(r){switch(r.tag){case 3:var i=r.stateNode;if(i.current.memoizedState.isDehydrated){var a=ps(i.pendingLanes);a!==0&&(yu(i,a|1),Nt(i,Ve()),(we&6)===0&&(Ri=Ve()+500,Zn()))}break;case 13:Mr(function(){var u=xn(r,1);if(u!==null){var d=Ct();tn(u,r,1,d)}}),Hc(r,1)}},_u=function(r){if(r.tag===13){var i=xn(r,134217728);if(i!==null){var a=Ct();tn(i,r,134217728,a)}Hc(r,134217728)}},Ff=function(r){if(r.tag===13){var i=sr(r),a=xn(r,i);if(a!==null){var u=Ct();tn(a,r,i,u)}Hc(r,i)}},jf=function(){return Se},Uf=function(r,i){var a=Se;try{return Se=r,i()}finally{Se=a}},cu=function(r,i,a){switch(i){case"input":if(nu(r,a),i=a.name,a.type==="radio"&&i!=null){for(a=r;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<a.length;i++){var u=a[i];if(u!==r&&u.form===r.form){var d=sa(u);if(!d)throw Error(t(90));Tr(u),nu(u,d)}}}break;case"textarea":pf(r,a);break;case"select":i=a.value,i!=null&&si(r,!!a.multiple,i,!1)}},kf=jc,Sf=Mr;var nC={usingClientEntryPoint:!1,Events:[As,mi,sa,Ef,Cf,jc]},Gs={findFiberByHostInstance:Rr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},rC={bundleType:Gs.bundleType,version:Gs.version,rendererPackageName:Gs.rendererPackageName,rendererConfig:Gs.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ne.ReactCurrentDispatcher,findHostInstanceByFiber:function(r){return r=Rf(r),r===null?null:r.stateNode},findFiberByHostInstance:Gs.findFiberByHostInstance||eC,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ba=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ba.isDisabled&&Ba.supportsFiber)try{zo=Ba.inject(rC),hn=Ba}catch{}}return Pt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=nC,Pt.createPortal=function(r,i){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!qc(i))throw Error(t(200));return Z0(r,i,null,a)},Pt.createRoot=function(r,i){if(!qc(r))throw Error(t(299));var a=!1,u="",d=tg;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(u=i.identifierPrefix),i.onRecoverableError!==void 0&&(d=i.onRecoverableError)),i=Vc(r,1,!1,null,null,a,!1,u,d),r[kn]=i.current,bs(r.nodeType===8?r.parentNode:r),new Gc(i)},Pt.findDOMNode=function(r){if(r==null)return null;if(r.nodeType===1)return r;var i=r._reactInternals;if(i===void 0)throw typeof r.render=="function"?Error(t(188)):(r=Object.keys(r).join(","),Error(t(268,r)));return r=Rf(i),r=r===null?null:r.stateNode,r},Pt.flushSync=function(r){return Mr(r)},Pt.hydrate=function(r,i,a){if(!$a(i))throw Error(t(200));return Wa(null,r,i,!0,a)},Pt.hydrateRoot=function(r,i,a){if(!qc(r))throw Error(t(405));var u=a!=null&&a.hydratedSources||null,d=!1,p="",g=tg;if(a!=null&&(a.unstable_strictMode===!0&&(d=!0),a.identifierPrefix!==void 0&&(p=a.identifierPrefix),a.onRecoverableError!==void 0&&(g=a.onRecoverableError)),i=Zm(i,null,r,1,a??null,d,!1,p,g),r[kn]=i.current,bs(r),u)for(r=0;r<u.length;r++)a=u[r],d=a._getVersion,d=d(a._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[a,d]:i.mutableSourceEagerHydrationData.push(a,d);return new za(i)},Pt.render=function(r,i,a){if(!$a(i))throw Error(t(200));return Wa(null,r,i,!1,a)},Pt.unmountComponentAtNode=function(r){if(!$a(r))throw Error(t(40));return r._reactRootContainer?(Mr(function(){Wa(null,null,r,!1,function(){r._reactRootContainer=null,r[kn]=null})}),!0):!1},Pt.unstable_batchedUpdates=jc,Pt.unstable_renderSubtreeIntoContainer=function(r,i,a,u){if(!$a(a))throw Error(t(200));if(r==null||r._reactInternals===void 0)throw Error(t(38));return Wa(r,i,a,!1,u)},Pt.version="18.3.1-next-f1338f8080-20240426",Pt}var cg;function hC(){if(cg)return Qc.exports;cg=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),Qc.exports=dC(),Qc.exports}var dg;function fC(){if(dg)return Va;dg=1;var n=hC();return Va.createRoot=n.createRoot,Va.hydrateRoot=n.hydrateRoot,Va}var pC=fC();const mC=Xy(pC),gC="modulepreload",yC=function(n){return"/DriveWay/"+n},hg={},vt=function(e,t,s){let o=Promise.resolve();if(t&&t.length>0){let c=function(m){return Promise.all(m.map(y=>Promise.resolve(y).then(_=>({status:"fulfilled",value:_}),_=>({status:"rejected",reason:_}))))};document.getElementsByTagName("link");const h=document.querySelector("meta[property=csp-nonce]"),f=(h==null?void 0:h.nonce)||(h==null?void 0:h.getAttribute("nonce"));o=c(t.map(m=>{if(m=yC(m),m in hg)return;hg[m]=!0;const y=m.endsWith(".css"),_=y?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${m}"]${_}`))return;const v=document.createElement("link");if(v.rel=y?"stylesheet":gC,y||(v.as="script"),v.crossOrigin="",v.href=m,f&&v.setAttribute("nonce",f),document.head.appendChild(v),y)return new Promise((x,k)=>{v.addEventListener("load",x),v.addEventListener("error",()=>k(new Error(`Unable to preload CSS for ${m}`)))})}))}function l(c){const h=new Event("vite:preloadError",{cancelable:!0});if(h.payload=c,window.dispatchEvent(h),!h.defaultPrevented)throw c}return o.then(c=>{for(const h of c||[])h.status==="rejected"&&l(h.reason);return e().catch(l)})};/**
 * react-router v7.9.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var fg="popstate";function _C(n={}){function e(s,o){let{pathname:l,search:c,hash:h}=s.location;return wd("",{pathname:l,search:c,hash:h},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function t(s,o){return typeof o=="string"?o:ho(o)}return wC(e,t,null,n)}function Fe(n,e){if(n===!1||n===null||typeof n>"u")throw new Error(e)}function Kt(n,e){if(!n){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function vC(){return Math.random().toString(36).substring(2,10)}function pg(n,e){return{usr:n.state,key:n.key,idx:e}}function wd(n,e,t=null,s){return{pathname:typeof n=="string"?n:n.pathname,search:"",hash:"",...typeof e=="string"?Yi(e):e,state:t,key:e&&e.key||s||vC()}}function ho({pathname:n="/",search:e="",hash:t=""}){return e&&e!=="?"&&(n+=e.charAt(0)==="?"?e:"?"+e),t&&t!=="#"&&(n+=t.charAt(0)==="#"?t:"#"+t),n}function Yi(n){let e={};if(n){let t=n.indexOf("#");t>=0&&(e.hash=n.substring(t),n=n.substring(0,t));let s=n.indexOf("?");s>=0&&(e.search=n.substring(s),n=n.substring(0,s)),n&&(e.pathname=n)}return e}function wC(n,e,t,s={}){let{window:o=document.defaultView,v5Compat:l=!1}=s,c=o.history,h="POP",f=null,m=y();m==null&&(m=0,c.replaceState({...c.state,idx:m},""));function y(){return(c.state||{idx:null}).idx}function _(){h="POP";let D=y(),U=D==null?null:D-m;m=D,f&&f({action:h,location:O.location,delta:U})}function v(D,U){h="PUSH";let V=wd(O.location,D,U);m=y()+1;let j=pg(V,m),ne=O.createHref(V);try{c.pushState(j,"",ne)}catch(ye){if(ye instanceof DOMException&&ye.name==="DataCloneError")throw ye;o.location.assign(ne)}l&&f&&f({action:h,location:O.location,delta:1})}function x(D,U){h="REPLACE";let V=wd(O.location,D,U);m=y();let j=pg(V,m),ne=O.createHref(V);c.replaceState(j,"",ne),l&&f&&f({action:h,location:O.location,delta:0})}function k(D){return EC(D)}let O={get action(){return h},get location(){return n(o,c)},listen(D){if(f)throw new Error("A history only accepts one active listener");return o.addEventListener(fg,_),f=D,()=>{o.removeEventListener(fg,_),f=null}},createHref(D){return e(o,D)},createURL:k,encodeLocation(D){let U=k(D);return{pathname:U.pathname,search:U.search,hash:U.hash}},push:v,replace:x,go(D){return c.go(D)}};return O}function EC(n,e=!1){let t="http://localhost";typeof window<"u"&&(t=window.location.origin!=="null"?window.location.origin:window.location.href),Fe(t,"No window.location.(origin|href) available to create URL");let s=typeof n=="string"?n:ho(n);return s=s.replace(/ $/,"%20"),!e&&s.startsWith("//")&&(s=t+s),new URL(s,t)}function Zy(n,e,t="/"){return CC(n,e,t,!1)}function CC(n,e,t,s){let o=typeof e=="string"?Yi(e):e,l=jn(o.pathname||"/",t);if(l==null)return null;let c=e_(n);kC(c);let h=null;for(let f=0;h==null&&f<c.length;++f){let m=OC(l);h=AC(c[f],m,s)}return h}function e_(n,e=[],t=[],s="",o=!1){let l=(c,h,f=o,m)=>{let y={relativePath:m===void 0?c.path||"":m,caseSensitive:c.caseSensitive===!0,childrenIndex:h,route:c};if(y.relativePath.startsWith("/")){if(!y.relativePath.startsWith(s)&&f)return;Fe(y.relativePath.startsWith(s),`Absolute route path "${y.relativePath}" nested under path "${s}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),y.relativePath=y.relativePath.slice(s.length)}let _=Ln([s,y.relativePath]),v=t.concat(y);c.children&&c.children.length>0&&(Fe(c.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${_}".`),e_(c.children,e,v,_,f)),!(c.path==null&&!c.index)&&e.push({path:_,score:NC(_,c.index),routesMeta:v})};return n.forEach((c,h)=>{var f;if(c.path===""||!((f=c.path)!=null&&f.includes("?")))l(c,h);else for(let m of t_(c.path))l(c,h,!0,m)}),e}function t_(n){let e=n.split("/");if(e.length===0)return[];let[t,...s]=e,o=t.endsWith("?"),l=t.replace(/\?$/,"");if(s.length===0)return o?[l,""]:[l];let c=t_(s.join("/")),h=[];return h.push(...c.map(f=>f===""?l:[l,f].join("/"))),o&&h.push(...c),h.map(f=>n.startsWith("/")&&f===""?"/":f)}function kC(n){n.sort((e,t)=>e.score!==t.score?t.score-e.score:PC(e.routesMeta.map(s=>s.childrenIndex),t.routesMeta.map(s=>s.childrenIndex)))}var SC=/^:[\w-]+$/,IC=3,TC=2,xC=1,RC=10,bC=-2,mg=n=>n==="*";function NC(n,e){let t=n.split("/"),s=t.length;return t.some(mg)&&(s+=bC),e&&(s+=TC),t.filter(o=>!mg(o)).reduce((o,l)=>o+(SC.test(l)?IC:l===""?xC:RC),s)}function PC(n,e){return n.length===e.length&&n.slice(0,-1).every((s,o)=>s===e[o])?n[n.length-1]-e[e.length-1]:0}function AC(n,e,t=!1){let{routesMeta:s}=n,o={},l="/",c=[];for(let h=0;h<s.length;++h){let f=s[h],m=h===s.length-1,y=l==="/"?e:e.slice(l.length)||"/",_=sl({path:f.relativePath,caseSensitive:f.caseSensitive,end:m},y),v=f.route;if(!_&&m&&t&&!s[s.length-1].route.index&&(_=sl({path:f.relativePath,caseSensitive:f.caseSensitive,end:!1},y)),!_)return null;Object.assign(o,_.params),c.push({params:o,pathname:Ln([l,_.pathname]),pathnameBase:UC(Ln([l,_.pathnameBase])),route:v}),_.pathnameBase!=="/"&&(l=Ln([l,_.pathnameBase]))}return c}function sl(n,e){typeof n=="string"&&(n={path:n,caseSensitive:!1,end:!0});let[t,s]=DC(n.path,n.caseSensitive,n.end),o=e.match(t);if(!o)return null;let l=o[0],c=l.replace(/(.)\/+$/,"$1"),h=o.slice(1);return{params:s.reduce((m,{paramName:y,isOptional:_},v)=>{if(y==="*"){let k=h[v]||"";c=l.slice(0,l.length-k.length).replace(/(.)\/+$/,"$1")}const x=h[v];return _&&!x?m[y]=void 0:m[y]=(x||"").replace(/%2F/g,"/"),m},{}),pathname:l,pathnameBase:c,pattern:n}}function DC(n,e=!1,t=!0){Kt(n==="*"||!n.endsWith("*")||n.endsWith("/*"),`Route path "${n}" will be treated as if it were "${n.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${n.replace(/\*$/,"/*")}".`);let s=[],o="^"+n.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(c,h,f)=>(s.push({paramName:h,isOptional:f!=null}),f?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return n.endsWith("*")?(s.push({paramName:"*"}),o+=n==="*"||n==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?o+="\\/*$":n!==""&&n!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,e?void 0:"i"),s]}function OC(n){try{return n.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Kt(!1,`The URL path "${n}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),n}}function jn(n,e){if(e==="/")return n;if(!n.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,s=n.charAt(t);return s&&s!=="/"?null:n.slice(t)||"/"}var LC=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,MC=n=>LC.test(n);function FC(n,e="/"){let{pathname:t,search:s="",hash:o=""}=typeof n=="string"?Yi(n):n,l;if(t)if(MC(t))l=t;else{if(t.includes("//")){let c=t;t=t.replace(/\/\/+/g,"/"),Kt(!1,`Pathnames cannot have embedded double slashes - normalizing ${c} -> ${t}`)}t.startsWith("/")?l=gg(t.substring(1),"/"):l=gg(t,e)}else l=e;return{pathname:l,search:zC(s),hash:$C(o)}}function gg(n,e){let t=e.replace(/\/+$/,"").split("/");return n.split("/").forEach(o=>{o===".."?t.length>1&&t.pop():o!=="."&&t.push(o)}),t.length>1?t.join("/"):"/"}function Zc(n,e,t,s){return`Cannot include a '${n}' character in a manually specified \`to.${e}\` field [${JSON.stringify(s)}].  Please separate it out to the \`to.${t}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function jC(n){return n.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function Qd(n){let e=jC(n);return e.map((t,s)=>s===e.length-1?t.pathname:t.pathnameBase)}function Jd(n,e,t,s=!1){let o;typeof n=="string"?o=Yi(n):(o={...n},Fe(!o.pathname||!o.pathname.includes("?"),Zc("?","pathname","search",o)),Fe(!o.pathname||!o.pathname.includes("#"),Zc("#","pathname","hash",o)),Fe(!o.search||!o.search.includes("#"),Zc("#","search","hash",o)));let l=n===""||o.pathname==="",c=l?"/":o.pathname,h;if(c==null)h=t;else{let _=e.length-1;if(!s&&c.startsWith("..")){let v=c.split("/");for(;v[0]==="..";)v.shift(),_-=1;o.pathname=v.join("/")}h=_>=0?e[_]:"/"}let f=FC(o,h),m=c&&c!=="/"&&c.endsWith("/"),y=(l||c===".")&&t.endsWith("/");return!f.pathname.endsWith("/")&&(m||y)&&(f.pathname+="/"),f}var Ln=n=>n.join("/").replace(/\/\/+/g,"/"),UC=n=>n.replace(/\/+$/,"").replace(/^\/*/,"/"),zC=n=>!n||n==="?"?"":n.startsWith("?")?n:"?"+n,$C=n=>!n||n==="#"?"":n.startsWith("#")?n:"#"+n;function WC(n){return n!=null&&typeof n.status=="number"&&typeof n.statusText=="string"&&typeof n.internal=="boolean"&&"data"in n}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var n_=["POST","PUT","PATCH","DELETE"];new Set(n_);var BC=["GET",...n_];new Set(BC);var Qi=T.createContext(null);Qi.displayName="DataRouter";var Dl=T.createContext(null);Dl.displayName="DataRouterState";T.createContext(!1);var r_=T.createContext({isTransitioning:!1});r_.displayName="ViewTransition";var VC=T.createContext(new Map);VC.displayName="Fetchers";var HC=T.createContext(null);HC.displayName="Await";var cn=T.createContext(null);cn.displayName="Navigation";var So=T.createContext(null);So.displayName="Location";var dn=T.createContext({outlet:null,matches:[],isDataRoute:!1});dn.displayName="Route";var Xd=T.createContext(null);Xd.displayName="RouteError";function GC(n,{relative:e}={}){Fe(Ji(),"useHref() may be used only in the context of a <Router> component.");let{basename:t,navigator:s}=T.useContext(cn),{hash:o,pathname:l,search:c}=Io(n,{relative:e}),h=l;return t!=="/"&&(h=l==="/"?t:Ln([t,l])),s.createHref({pathname:h,search:c,hash:o})}function Ji(){return T.useContext(So)!=null}function Wn(){return Fe(Ji(),"useLocation() may be used only in the context of a <Router> component."),T.useContext(So).location}var i_="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function s_(n){T.useContext(cn).static||T.useLayoutEffect(n)}function Ol(){let{isDataRoute:n}=T.useContext(dn);return n?sk():qC()}function qC(){Fe(Ji(),"useNavigate() may be used only in the context of a <Router> component.");let n=T.useContext(Qi),{basename:e,navigator:t}=T.useContext(cn),{matches:s}=T.useContext(dn),{pathname:o}=Wn(),l=JSON.stringify(Qd(s)),c=T.useRef(!1);return s_(()=>{c.current=!0}),T.useCallback((f,m={})=>{if(Kt(c.current,i_),!c.current)return;if(typeof f=="number"){t.go(f);return}let y=Jd(f,JSON.parse(l),o,m.relative==="path");n==null&&e!=="/"&&(y.pathname=y.pathname==="/"?e:Ln([e,y.pathname])),(m.replace?t.replace:t.push)(y,m.state,m)},[e,t,l,o,n])}T.createContext(null);function kD(){let{matches:n}=T.useContext(dn),e=n[n.length-1];return e?e.params:{}}function Io(n,{relative:e}={}){let{matches:t}=T.useContext(dn),{pathname:s}=Wn(),o=JSON.stringify(Qd(t));return T.useMemo(()=>Jd(n,JSON.parse(o),s,e==="path"),[n,o,s,e])}function KC(n,e){return o_(n,e)}function o_(n,e,t,s,o){var V;Fe(Ji(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:l}=T.useContext(cn),{matches:c}=T.useContext(dn),h=c[c.length-1],f=h?h.params:{},m=h?h.pathname:"/",y=h?h.pathnameBase:"/",_=h&&h.route;{let j=_&&_.path||"";a_(m,!_||j.endsWith("*")||j.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${m}" (under <Route path="${j}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${j}"> to <Route path="${j==="/"?"*":`${j}/*`}">.`)}let v=Wn(),x;if(e){let j=typeof e=="string"?Yi(e):e;Fe(y==="/"||((V=j.pathname)==null?void 0:V.startsWith(y)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${y}" but pathname "${j.pathname}" was given in the \`location\` prop.`),x=j}else x=v;let k=x.pathname||"/",O=k;if(y!=="/"){let j=y.replace(/^\//,"").split("/");O="/"+k.replace(/^\//,"").split("/").slice(j.length).join("/")}let D=Zy(n,{pathname:O});Kt(_||D!=null,`No routes matched location "${x.pathname}${x.search}${x.hash}" `),Kt(D==null||D[D.length-1].route.element!==void 0||D[D.length-1].route.Component!==void 0||D[D.length-1].route.lazy!==void 0,`Matched leaf route at location "${x.pathname}${x.search}${x.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let U=ZC(D&&D.map(j=>Object.assign({},j,{params:Object.assign({},f,j.params),pathname:Ln([y,l.encodeLocation?l.encodeLocation(j.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:j.pathname]),pathnameBase:j.pathnameBase==="/"?y:Ln([y,l.encodeLocation?l.encodeLocation(j.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:j.pathnameBase])})),c,t,s,o);return e&&U?T.createElement(So.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...x},navigationType:"POP"}},U):U}function YC(){let n=ik(),e=WC(n)?`${n.status} ${n.statusText}`:n instanceof Error?n.message:JSON.stringify(n),t=n instanceof Error?n.stack:null,s="rgba(200,200,200, 0.5)",o={padding:"0.5rem",backgroundColor:s},l={padding:"2px 4px",backgroundColor:s},c=null;return console.error("Error handled by React Router default ErrorBoundary:",n),c=T.createElement(T.Fragment,null,T.createElement("p",null,"💿 Hey developer 👋"),T.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",T.createElement("code",{style:l},"ErrorBoundary")," or"," ",T.createElement("code",{style:l},"errorElement")," prop on your route.")),T.createElement(T.Fragment,null,T.createElement("h2",null,"Unexpected Application Error!"),T.createElement("h3",{style:{fontStyle:"italic"}},e),t?T.createElement("pre",{style:o},t):null,c)}var QC=T.createElement(YC,null),JC=class extends T.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,e){return e.location!==n.location||e.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error!==void 0?n.error:e.error,location:e.location,revalidation:n.revalidation||e.revalidation}}componentDidCatch(n,e){this.props.onError?this.props.onError(n,e):console.error("React Router caught the following error during render",n)}render(){return this.state.error!==void 0?T.createElement(dn.Provider,{value:this.props.routeContext},T.createElement(Xd.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function XC({routeContext:n,match:e,children:t}){let s=T.useContext(Qi);return s&&s.static&&s.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=e.route.id),T.createElement(dn.Provider,{value:n},t)}function ZC(n,e=[],t=null,s=null,o=null){if(n==null){if(!t)return null;if(t.errors)n=t.matches;else if(e.length===0&&!t.initialized&&t.matches.length>0)n=t.matches;else return null}let l=n,c=t==null?void 0:t.errors;if(c!=null){let y=l.findIndex(_=>_.route.id&&(c==null?void 0:c[_.route.id])!==void 0);Fe(y>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(c).join(",")}`),l=l.slice(0,Math.min(l.length,y+1))}let h=!1,f=-1;if(t)for(let y=0;y<l.length;y++){let _=l[y];if((_.route.HydrateFallback||_.route.hydrateFallbackElement)&&(f=y),_.route.id){let{loaderData:v,errors:x}=t,k=_.route.loader&&!v.hasOwnProperty(_.route.id)&&(!x||x[_.route.id]===void 0);if(_.route.lazy||k){h=!0,f>=0?l=l.slice(0,f+1):l=[l[0]];break}}}let m=t&&s?(y,_)=>{var v,x;s(y,{location:t.location,params:((x=(v=t.matches)==null?void 0:v[0])==null?void 0:x.params)??{},errorInfo:_})}:void 0;return l.reduceRight((y,_,v)=>{let x,k=!1,O=null,D=null;t&&(x=c&&_.route.id?c[_.route.id]:void 0,O=_.route.errorElement||QC,h&&(f<0&&v===0?(a_("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),k=!0,D=null):f===v&&(k=!0,D=_.route.hydrateFallbackElement||null)));let U=e.concat(l.slice(0,v+1)),V=()=>{let j;return x?j=O:k?j=D:_.route.Component?j=T.createElement(_.route.Component,null):_.route.element?j=_.route.element:j=y,T.createElement(XC,{match:_,routeContext:{outlet:y,matches:U,isDataRoute:t!=null},children:j})};return t&&(_.route.ErrorBoundary||_.route.errorElement||v===0)?T.createElement(JC,{location:t.location,revalidation:t.revalidation,component:O,error:x,children:V(),routeContext:{outlet:null,matches:U,isDataRoute:!0},onError:m}):V()},null)}function Zd(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function ek(n){let e=T.useContext(Qi);return Fe(e,Zd(n)),e}function tk(n){let e=T.useContext(Dl);return Fe(e,Zd(n)),e}function nk(n){let e=T.useContext(dn);return Fe(e,Zd(n)),e}function eh(n){let e=nk(n),t=e.matches[e.matches.length-1];return Fe(t.route.id,`${n} can only be used on routes that contain a unique "id"`),t.route.id}function rk(){return eh("useRouteId")}function ik(){var s;let n=T.useContext(Xd),e=tk("useRouteError"),t=eh("useRouteError");return n!==void 0?n:(s=e.errors)==null?void 0:s[t]}function sk(){let{router:n}=ek("useNavigate"),e=eh("useNavigate"),t=T.useRef(!1);return s_(()=>{t.current=!0}),T.useCallback(async(o,l={})=>{Kt(t.current,i_),t.current&&(typeof o=="number"?n.navigate(o):await n.navigate(o,{fromRouteId:e,...l}))},[n,e])}var yg={};function a_(n,e,t){!e&&!yg[n]&&(yg[n]=!0,Kt(!1,t))}T.memo(ok);function ok({routes:n,future:e,state:t,unstable_onError:s}){return o_(n,void 0,t,s,e)}function ak({to:n,replace:e,state:t,relative:s}){Fe(Ji(),"<Navigate> may be used only in the context of a <Router> component.");let{static:o}=T.useContext(cn);Kt(!o,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:l}=T.useContext(dn),{pathname:c}=Wn(),h=Ol(),f=Jd(n,Qd(l),c,s==="path"),m=JSON.stringify(f);return T.useEffect(()=>{h(JSON.parse(m),{replace:e,state:t,relative:s})},[h,m,s,e,t]),null}function nt(n){Fe(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function lk({basename:n="/",children:e=null,location:t,navigationType:s="POP",navigator:o,static:l=!1}){Fe(!Ji(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let c=n.replace(/^\/*/,"/"),h=T.useMemo(()=>({basename:c,navigator:o,static:l,future:{}}),[c,o,l]);typeof t=="string"&&(t=Yi(t));let{pathname:f="/",search:m="",hash:y="",state:_=null,key:v="default"}=t,x=T.useMemo(()=>{let k=jn(f,c);return k==null?null:{location:{pathname:k,search:m,hash:y,state:_,key:v},navigationType:s}},[c,f,m,y,_,v,s]);return Kt(x!=null,`<Router basename="${c}"> is not able to match the URL "${f}${m}${y}" because it does not start with the basename, so the <Router> won't render anything.`),x==null?null:T.createElement(cn.Provider,{value:h},T.createElement(So.Provider,{children:e,value:x}))}function _g({children:n,location:e}){return KC(Ed(n),e)}function Ed(n,e=[]){let t=[];return T.Children.forEach(n,(s,o)=>{if(!T.isValidElement(s))return;let l=[...e,o];if(s.type===T.Fragment){t.push.apply(t,Ed(s.props.children,l));return}Fe(s.type===nt,`[${typeof s.type=="string"?s.type:s.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Fe(!s.props.index||!s.props.children,"An index route cannot have child routes.");let c={id:s.props.id||l.join("-"),caseSensitive:s.props.caseSensitive,element:s.props.element,Component:s.props.Component,index:s.props.index,path:s.props.path,middleware:s.props.middleware,loader:s.props.loader,action:s.props.action,hydrateFallbackElement:s.props.hydrateFallbackElement,HydrateFallback:s.props.HydrateFallback,errorElement:s.props.errorElement,ErrorBoundary:s.props.ErrorBoundary,hasErrorBoundary:s.props.hasErrorBoundary===!0||s.props.ErrorBoundary!=null||s.props.errorElement!=null,shouldRevalidate:s.props.shouldRevalidate,handle:s.props.handle,lazy:s.props.lazy};s.props.children&&(c.children=Ed(s.props.children,l)),t.push(c)}),t}var Xa="get",Za="application/x-www-form-urlencoded";function Ll(n){return n!=null&&typeof n.tagName=="string"}function uk(n){return Ll(n)&&n.tagName.toLowerCase()==="button"}function ck(n){return Ll(n)&&n.tagName.toLowerCase()==="form"}function dk(n){return Ll(n)&&n.tagName.toLowerCase()==="input"}function hk(n){return!!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)}function fk(n,e){return n.button===0&&(!e||e==="_self")&&!hk(n)}var Ha=null;function pk(){if(Ha===null)try{new FormData(document.createElement("form"),0),Ha=!1}catch{Ha=!0}return Ha}var mk=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function ed(n){return n!=null&&!mk.has(n)?(Kt(!1,`"${n}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Za}"`),null):n}function gk(n,e){let t,s,o,l,c;if(ck(n)){let h=n.getAttribute("action");s=h?jn(h,e):null,t=n.getAttribute("method")||Xa,o=ed(n.getAttribute("enctype"))||Za,l=new FormData(n)}else if(uk(n)||dk(n)&&(n.type==="submit"||n.type==="image")){let h=n.form;if(h==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let f=n.getAttribute("formaction")||h.getAttribute("action");if(s=f?jn(f,e):null,t=n.getAttribute("formmethod")||h.getAttribute("method")||Xa,o=ed(n.getAttribute("formenctype"))||ed(h.getAttribute("enctype"))||Za,l=new FormData(h,n),!pk()){let{name:m,type:y,value:_}=n;if(y==="image"){let v=m?`${m}.`:"";l.append(`${v}x`,"0"),l.append(`${v}y`,"0")}else m&&l.append(m,_)}}else{if(Ll(n))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');t=Xa,s=null,o=Za,c=n}return l&&o==="text/plain"&&(c=l,l=void 0),{action:s,method:t.toLowerCase(),encType:o,formData:l,body:c}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function th(n,e){if(n===!1||n===null||typeof n>"u")throw new Error(e)}function yk(n,e,t){let s=typeof n=="string"?new URL(n,typeof window>"u"?"server://singlefetch/":window.location.origin):n;return s.pathname==="/"?s.pathname=`_root.${t}`:e&&jn(s.pathname,e)==="/"?s.pathname=`${e.replace(/\/$/,"")}/_root.${t}`:s.pathname=`${s.pathname.replace(/\/$/,"")}.${t}`,s}async function _k(n,e){if(n.id in e)return e[n.id];try{let t=await import(n.module);return e[n.id]=t,t}catch(t){return console.error(`Error loading route module \`${n.module}\`, reloading page...`),console.error(t),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function vk(n){return n==null?!1:n.href==null?n.rel==="preload"&&typeof n.imageSrcSet=="string"&&typeof n.imageSizes=="string":typeof n.rel=="string"&&typeof n.href=="string"}async function wk(n,e,t){let s=await Promise.all(n.map(async o=>{let l=e.routes[o.route.id];if(l){let c=await _k(l,t);return c.links?c.links():[]}return[]}));return Sk(s.flat(1).filter(vk).filter(o=>o.rel==="stylesheet"||o.rel==="preload").map(o=>o.rel==="stylesheet"?{...o,rel:"prefetch",as:"style"}:{...o,rel:"prefetch"}))}function vg(n,e,t,s,o,l){let c=(f,m)=>t[m]?f.route.id!==t[m].route.id:!0,h=(f,m)=>{var y;return t[m].pathname!==f.pathname||((y=t[m].route.path)==null?void 0:y.endsWith("*"))&&t[m].params["*"]!==f.params["*"]};return l==="assets"?e.filter((f,m)=>c(f,m)||h(f,m)):l==="data"?e.filter((f,m)=>{var _;let y=s.routes[f.route.id];if(!y||!y.hasLoader)return!1;if(c(f,m)||h(f,m))return!0;if(f.route.shouldRevalidate){let v=f.route.shouldRevalidate({currentUrl:new URL(o.pathname+o.search+o.hash,window.origin),currentParams:((_=t[0])==null?void 0:_.params)||{},nextUrl:new URL(n,window.origin),nextParams:f.params,defaultShouldRevalidate:!0});if(typeof v=="boolean")return v}return!0}):[]}function Ek(n,e,{includeHydrateFallback:t}={}){return Ck(n.map(s=>{let o=e.routes[s.route.id];if(!o)return[];let l=[o.module];return o.clientActionModule&&(l=l.concat(o.clientActionModule)),o.clientLoaderModule&&(l=l.concat(o.clientLoaderModule)),t&&o.hydrateFallbackModule&&(l=l.concat(o.hydrateFallbackModule)),o.imports&&(l=l.concat(o.imports)),l}).flat(1))}function Ck(n){return[...new Set(n)]}function kk(n){let e={},t=Object.keys(n).sort();for(let s of t)e[s]=n[s];return e}function Sk(n,e){let t=new Set;return new Set(e),n.reduce((s,o)=>{let l=JSON.stringify(kk(o));return t.has(l)||(t.add(l),s.push({key:l,link:o})),s},[])}function l_(){let n=T.useContext(Qi);return th(n,"You must render this element inside a <DataRouterContext.Provider> element"),n}function Ik(){let n=T.useContext(Dl);return th(n,"You must render this element inside a <DataRouterStateContext.Provider> element"),n}var nh=T.createContext(void 0);nh.displayName="FrameworkContext";function u_(){let n=T.useContext(nh);return th(n,"You must render this element inside a <HydratedRouter> element"),n}function Tk(n,e){let t=T.useContext(nh),[s,o]=T.useState(!1),[l,c]=T.useState(!1),{onFocus:h,onBlur:f,onMouseEnter:m,onMouseLeave:y,onTouchStart:_}=e,v=T.useRef(null);T.useEffect(()=>{if(n==="render"&&c(!0),n==="viewport"){let O=U=>{U.forEach(V=>{c(V.isIntersecting)})},D=new IntersectionObserver(O,{threshold:.5});return v.current&&D.observe(v.current),()=>{D.disconnect()}}},[n]),T.useEffect(()=>{if(s){let O=setTimeout(()=>{c(!0)},100);return()=>{clearTimeout(O)}}},[s]);let x=()=>{o(!0)},k=()=>{o(!1),c(!1)};return t?n!=="intent"?[l,v,{}]:[l,v,{onFocus:Ks(h,x),onBlur:Ks(f,k),onMouseEnter:Ks(m,x),onMouseLeave:Ks(y,k),onTouchStart:Ks(_,x)}]:[!1,v,{}]}function Ks(n,e){return t=>{n&&n(t),t.defaultPrevented||e(t)}}function xk({page:n,...e}){let{router:t}=l_(),s=T.useMemo(()=>Zy(t.routes,n,t.basename),[t.routes,n,t.basename]);return s?T.createElement(bk,{page:n,matches:s,...e}):null}function Rk(n){let{manifest:e,routeModules:t}=u_(),[s,o]=T.useState([]);return T.useEffect(()=>{let l=!1;return wk(n,e,t).then(c=>{l||o(c)}),()=>{l=!0}},[n,e,t]),s}function bk({page:n,matches:e,...t}){let s=Wn(),{manifest:o,routeModules:l}=u_(),{basename:c}=l_(),{loaderData:h,matches:f}=Ik(),m=T.useMemo(()=>vg(n,e,f,o,s,"data"),[n,e,f,o,s]),y=T.useMemo(()=>vg(n,e,f,o,s,"assets"),[n,e,f,o,s]),_=T.useMemo(()=>{if(n===s.pathname+s.search+s.hash)return[];let k=new Set,O=!1;if(e.forEach(U=>{var j;let V=o.routes[U.route.id];!V||!V.hasLoader||(!m.some(ne=>ne.route.id===U.route.id)&&U.route.id in h&&((j=l[U.route.id])!=null&&j.shouldRevalidate)||V.hasClientLoader?O=!0:k.add(U.route.id))}),k.size===0)return[];let D=yk(n,c,"data");return O&&k.size>0&&D.searchParams.set("_routes",e.filter(U=>k.has(U.route.id)).map(U=>U.route.id).join(",")),[D.pathname+D.search]},[c,h,s,o,m,e,n,l]),v=T.useMemo(()=>Ek(y,o),[y,o]),x=Rk(y);return T.createElement(T.Fragment,null,_.map(k=>T.createElement("link",{key:k,rel:"prefetch",as:"fetch",href:k,...t})),v.map(k=>T.createElement("link",{key:k,rel:"modulepreload",href:k,...t})),x.map(({key:k,link:O})=>T.createElement("link",{key:k,nonce:t.nonce,...O})))}function Nk(...n){return e=>{n.forEach(t=>{typeof t=="function"?t(e):t!=null&&(t.current=e)})}}var c_=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{c_&&(window.__reactRouterVersion="7.9.6")}catch{}function Pk({basename:n,children:e,window:t}){let s=T.useRef();s.current==null&&(s.current=_C({window:t,v5Compat:!0}));let o=s.current,[l,c]=T.useState({action:o.action,location:o.location}),h=T.useCallback(f=>{T.startTransition(()=>c(f))},[c]);return T.useLayoutEffect(()=>o.listen(h),[o,h]),T.createElement(lk,{basename:n,children:e,location:l.location,navigationType:l.action,navigator:o})}var d_=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,rh=T.forwardRef(function({onClick:e,discover:t="render",prefetch:s="none",relative:o,reloadDocument:l,replace:c,state:h,target:f,to:m,preventScrollReset:y,viewTransition:_,...v},x){let{basename:k}=T.useContext(cn),O=typeof m=="string"&&d_.test(m),D,U=!1;if(typeof m=="string"&&O&&(D=m,c_))try{let Ee=new URL(window.location.href),Be=m.startsWith("//")?new URL(Ee.protocol+m):new URL(m),wt=jn(Be.pathname,k);Be.origin===Ee.origin&&wt!=null?m=wt+Be.search+Be.hash:U=!0}catch{Kt(!1,`<Link to="${m}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let V=GC(m,{relative:o}),[j,ne,ye]=Tk(s,v),_e=Lk(m,{replace:c,state:h,target:f,preventScrollReset:y,relative:o,viewTransition:_});function Ie(Ee){e&&e(Ee),Ee.defaultPrevented||_e(Ee)}let X=T.createElement("a",{...v,...ye,href:D||V,onClick:U||l?e:Ie,ref:Nk(x,ne),target:f,"data-discover":!O&&t==="render"?"true":void 0});return j&&!O?T.createElement(T.Fragment,null,X,T.createElement(xk,{page:V})):X});rh.displayName="Link";var Ak=T.forwardRef(function({"aria-current":e="page",caseSensitive:t=!1,className:s="",end:o=!1,style:l,to:c,viewTransition:h,children:f,...m},y){let _=Io(c,{relative:m.relative}),v=Wn(),x=T.useContext(Dl),{navigator:k,basename:O}=T.useContext(cn),D=x!=null&&zk(_)&&h===!0,U=k.encodeLocation?k.encodeLocation(_).pathname:_.pathname,V=v.pathname,j=x&&x.navigation&&x.navigation.location?x.navigation.location.pathname:null;t||(V=V.toLowerCase(),j=j?j.toLowerCase():null,U=U.toLowerCase()),j&&O&&(j=jn(j,O)||j);const ne=U!=="/"&&U.endsWith("/")?U.length-1:U.length;let ye=V===U||!o&&V.startsWith(U)&&V.charAt(ne)==="/",_e=j!=null&&(j===U||!o&&j.startsWith(U)&&j.charAt(U.length)==="/"),Ie={isActive:ye,isPending:_e,isTransitioning:D},X=ye?e:void 0,Ee;typeof s=="function"?Ee=s(Ie):Ee=[s,ye?"active":null,_e?"pending":null,D?"transitioning":null].filter(Boolean).join(" ");let Be=typeof l=="function"?l(Ie):l;return T.createElement(rh,{...m,"aria-current":X,className:Ee,ref:y,style:Be,to:c,viewTransition:h},typeof f=="function"?f(Ie):f)});Ak.displayName="NavLink";var Dk=T.forwardRef(({discover:n="render",fetcherKey:e,navigate:t,reloadDocument:s,replace:o,state:l,method:c=Xa,action:h,onSubmit:f,relative:m,preventScrollReset:y,viewTransition:_,...v},x)=>{let k=jk(),O=Uk(h,{relative:m}),D=c.toLowerCase()==="get"?"get":"post",U=typeof h=="string"&&d_.test(h),V=j=>{if(f&&f(j),j.defaultPrevented)return;j.preventDefault();let ne=j.nativeEvent.submitter,ye=(ne==null?void 0:ne.getAttribute("formmethod"))||c;k(ne||j.currentTarget,{fetcherKey:e,method:ye,navigate:t,replace:o,state:l,relative:m,preventScrollReset:y,viewTransition:_})};return T.createElement("form",{ref:x,method:D,action:O,onSubmit:s?f:V,...v,"data-discover":!U&&n==="render"?"true":void 0})});Dk.displayName="Form";function Ok(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function h_(n){let e=T.useContext(Qi);return Fe(e,Ok(n)),e}function Lk(n,{target:e,replace:t,state:s,preventScrollReset:o,relative:l,viewTransition:c}={}){let h=Ol(),f=Wn(),m=Io(n,{relative:l});return T.useCallback(y=>{if(fk(y,e)){y.preventDefault();let _=t!==void 0?t:ho(f)===ho(m);h(n,{replace:_,state:s,preventScrollReset:o,relative:l,viewTransition:c})}},[f,h,m,t,s,e,n,o,l,c])}var Mk=0,Fk=()=>`__${String(++Mk)}__`;function jk(){let{router:n}=h_("useSubmit"),{basename:e}=T.useContext(cn),t=rk();return T.useCallback(async(s,o={})=>{let{action:l,method:c,encType:h,formData:f,body:m}=gk(s,e);if(o.navigate===!1){let y=o.fetcherKey||Fk();await n.fetch(y,t,o.action||l,{preventScrollReset:o.preventScrollReset,formData:f,body:m,formMethod:o.method||c,formEncType:o.encType||h,flushSync:o.flushSync})}else await n.navigate(o.action||l,{preventScrollReset:o.preventScrollReset,formData:f,body:m,formMethod:o.method||c,formEncType:o.encType||h,replace:o.replace,state:o.state,fromRouteId:t,flushSync:o.flushSync,viewTransition:o.viewTransition})},[n,e,t])}function Uk(n,{relative:e}={}){let{basename:t}=T.useContext(cn),s=T.useContext(dn);Fe(s,"useFormAction must be used inside a RouteContext");let[o]=s.matches.slice(-1),l={...Io(n||".",{relative:e})},c=Wn();if(n==null){l.search=c.search;let h=new URLSearchParams(l.search),f=h.getAll("index");if(f.some(y=>y==="")){h.delete("index"),f.filter(_=>_).forEach(_=>h.append("index",_));let y=h.toString();l.search=y?`?${y}`:""}}return(!n||n===".")&&o.route.index&&(l.search=l.search?l.search.replace(/^\?/,"?index&"):"?index"),t!=="/"&&(l.pathname=l.pathname==="/"?t:Ln([t,l.pathname])),ho(l)}function zk(n,{relative:e}={}){let t=T.useContext(r_);Fe(t!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:s}=h_("useViewTransitionState"),o=Io(n,{relative:e});if(!t.isTransitioning)return!1;let l=jn(t.currentLocation.pathname,s)||t.currentLocation.pathname,c=jn(t.nextLocation.pathname,s)||t.nextLocation.pathname;return sl(o.pathname,c)!=null||sl(o.pathname,l)!=null}const $k=()=>{};var wg={};/**
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
 */const $=function(n,e){if(!n)throw Xi(e)},Xi=function(n){return new Error("Firebase Database ("+f_.SDK_VERSION+") INTERNAL ASSERT FAILED: "+n)};/**
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
 */const p_=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let o=n.charCodeAt(s);o<128?e[t++]=o:o<2048?(e[t++]=o>>6|192,e[t++]=o&63|128):(o&64512)===55296&&s+1<n.length&&(n.charCodeAt(s+1)&64512)===56320?(o=65536+((o&1023)<<10)+(n.charCodeAt(++s)&1023),e[t++]=o>>18|240,e[t++]=o>>12&63|128,e[t++]=o>>6&63|128,e[t++]=o&63|128):(e[t++]=o>>12|224,e[t++]=o>>6&63|128,e[t++]=o&63|128)}return e},Wk=function(n){const e=[];let t=0,s=0;for(;t<n.length;){const o=n[t++];if(o<128)e[s++]=String.fromCharCode(o);else if(o>191&&o<224){const l=n[t++];e[s++]=String.fromCharCode((o&31)<<6|l&63)}else if(o>239&&o<365){const l=n[t++],c=n[t++],h=n[t++],f=((o&7)<<18|(l&63)<<12|(c&63)<<6|h&63)-65536;e[s++]=String.fromCharCode(55296+(f>>10)),e[s++]=String.fromCharCode(56320+(f&1023))}else{const l=n[t++],c=n[t++];e[s++]=String.fromCharCode((o&15)<<12|(l&63)<<6|c&63)}}return e.join("")},ih={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let o=0;o<n.length;o+=3){const l=n[o],c=o+1<n.length,h=c?n[o+1]:0,f=o+2<n.length,m=f?n[o+2]:0,y=l>>2,_=(l&3)<<4|h>>4;let v=(h&15)<<2|m>>6,x=m&63;f||(x=64,c||(v=64)),s.push(t[y],t[_],t[v],t[x])}return s.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(p_(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Wk(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let o=0;o<n.length;){const l=t[n.charAt(o++)],h=o<n.length?t[n.charAt(o)]:0;++o;const m=o<n.length?t[n.charAt(o)]:64;++o;const _=o<n.length?t[n.charAt(o)]:64;if(++o,l==null||h==null||m==null||_==null)throw new Bk;const v=l<<2|h>>4;if(s.push(v),m!==64){const x=h<<4&240|m>>2;if(s.push(x),_!==64){const k=m<<6&192|_;s.push(k)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Bk extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const m_=function(n){const e=p_(n);return ih.encodeByteArray(e,!0)},ol=function(n){return m_(n).replace(/\./g,"")},al=function(n){try{return ih.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Vk(n){return g_(void 0,n)}function g_(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!Hk(t)||(n[t]=g_(n[t],e[t]));return n}function Hk(n){return n!=="__proto__"}/**
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
 */const qk=()=>Gk().__FIREBASE_DEFAULTS__,Kk=()=>{if(typeof process>"u"||typeof wg>"u")return;const n=wg.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Yk=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&al(n[1]);return e&&JSON.parse(e)},sh=()=>{try{return $k()||qk()||Kk()||Yk()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},y_=n=>{var e,t;return(t=(e=sh())==null?void 0:e.emulatorHosts)==null?void 0:t[n]},Qk=n=>{const e=y_(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},__=()=>{var n;return(n=sh())==null?void 0:n.config},v_=n=>{var e;return(e=sh())==null?void 0:e[`_${n}`]};/**
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
 */function Zi(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function w_(n){return(await fetch(n,{credentials:"include"})).ok}/**
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
 */function Jk(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",o=n.iat||0,l=n.sub||n.user_id;if(!l)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const c={iss:`https://securetoken.google.com/${s}`,aud:s,iat:o,exp:o+3600,auth_time:o,sub:l,user_id:l,firebase:{sign_in_provider:"custom",identities:{}},...n};return[ol(JSON.stringify(t)),ol(JSON.stringify(c)),""].join(".")}const io={};function Xk(){const n={prod:[],emulator:[]};for(const e of Object.keys(io))io[e]?n.emulator.push(e):n.prod.push(e);return n}function Zk(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let Eg=!1;function E_(n,e){if(typeof window>"u"||typeof document>"u"||!Zi(window.location.host)||io[n]===e||io[n]||Eg)return;io[n]=e;function t(v){return`__firebase__banner__${v}`}const s="__firebase__banner",l=Xk().prod.length>0;function c(){const v=document.getElementById(s);v&&v.remove()}function h(v){v.style.display="flex",v.style.background="#7faaf0",v.style.position="fixed",v.style.bottom="5px",v.style.left="5px",v.style.padding=".5em",v.style.borderRadius="5px",v.style.alignItems="center"}function f(v,x){v.setAttribute("width","24"),v.setAttribute("id",x),v.setAttribute("height","24"),v.setAttribute("viewBox","0 0 24 24"),v.setAttribute("fill","none"),v.style.marginLeft="-6px"}function m(){const v=document.createElement("span");return v.style.cursor="pointer",v.style.marginLeft="16px",v.style.fontSize="24px",v.innerHTML=" &times;",v.onclick=()=>{Eg=!0,c()},v}function y(v,x){v.setAttribute("id",x),v.innerText="Learn more",v.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",v.setAttribute("target","__blank"),v.style.paddingLeft="5px",v.style.textDecoration="underline"}function _(){const v=Zk(s),x=t("text"),k=document.getElementById(x)||document.createElement("span"),O=t("learnmore"),D=document.getElementById(O)||document.createElement("a"),U=t("preprendIcon"),V=document.getElementById(U)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(v.created){const j=v.element;h(j),y(D,O);const ne=m();f(V,U),j.append(V,k,D,ne),document.body.appendChild(j)}l?(k.innerText="Preview backend disconnected.",V.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
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
</defs>`,k.innerText="Preview backend running in this workspace."),k.setAttribute("id",x)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",_):_()}/**
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
 */function It(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function oh(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(It())}function eS(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function C_(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function k_(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function tS(){const n=It();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function nS(){return f_.NODE_ADMIN===!0}function S_(){try{return typeof indexedDB=="object"}catch{return!1}}function I_(){return new Promise((n,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(s);o.onsuccess=()=>{o.result.close(),t||self.indexedDB.deleteDatabase(s),n(!0)},o.onupgradeneeded=()=>{t=!1},o.onerror=()=>{var l;e(((l=o.error)==null?void 0:l.message)||"")}}catch(t){e(t)}})}function rS(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const iS="FirebaseError";class En extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=iS,Object.setPrototypeOf(this,En.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Zr.prototype.create)}}class Zr{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},o=`${this.service}/${e}`,l=this.errors[e],c=l?sS(l,s):"Error",h=`${this.serviceName}: ${c} (${o}).`;return new En(o,h,s)}}function sS(n,e){return n.replace(oS,(t,s)=>{const o=e[s];return o!=null?String(o):`<${s}?>`})}const oS=/\{\$([^}]+)}/g;/**
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
 */function fo(n){return JSON.parse(n)}function ot(n){return JSON.stringify(n)}/**
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
 */const T_=function(n){let e={},t={},s={},o="";try{const l=n.split(".");e=fo(al(l[0])||""),t=fo(al(l[1])||""),o=l[2],s=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:s,signature:o}},aS=function(n){const e=T_(n),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},lS=function(n){const e=T_(n).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function Cn(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function Bi(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}function Cd(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function ll(n,e,t){const s={};for(const o in n)Object.prototype.hasOwnProperty.call(n,o)&&(s[o]=e.call(t,n[o],o,n));return s}function wr(n,e){if(n===e)return!0;const t=Object.keys(n),s=Object.keys(e);for(const o of t){if(!s.includes(o))return!1;const l=n[o],c=e[o];if(Cg(l)&&Cg(c)){if(!wr(l,c))return!1}else if(l!==c)return!1}for(const o of s)if(!t.includes(o))return!1;return!0}function Cg(n){return n!==null&&typeof n=="object"}/**
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
 */function es(n){const e=[];for(const[t,s]of Object.entries(n))Array.isArray(s)?s.forEach(o=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function no(n){const e={};return n.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[o,l]=s.split("=");e[decodeURIComponent(o)]=decodeURIComponent(l)}}),e}function ro(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}/**
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
 */class uS{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const s=this.W_;if(typeof e=="string")for(let _=0;_<16;_++)s[_]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let _=0;_<16;_++)s[_]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let _=16;_<80;_++){const v=s[_-3]^s[_-8]^s[_-14]^s[_-16];s[_]=(v<<1|v>>>31)&4294967295}let o=this.chain_[0],l=this.chain_[1],c=this.chain_[2],h=this.chain_[3],f=this.chain_[4],m,y;for(let _=0;_<80;_++){_<40?_<20?(m=h^l&(c^h),y=1518500249):(m=l^c^h,y=1859775393):_<60?(m=l&c|h&(l|c),y=2400959708):(m=l^c^h,y=3395469782);const v=(o<<5|o>>>27)+m+f+y+s[_]&4294967295;f=h,h=c,c=(l<<30|l>>>2)&4294967295,l=o,o=v}this.chain_[0]=this.chain_[0]+o&4294967295,this.chain_[1]=this.chain_[1]+l&4294967295,this.chain_[2]=this.chain_[2]+c&4294967295,this.chain_[3]=this.chain_[3]+h&4294967295,this.chain_[4]=this.chain_[4]+f&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const s=t-this.blockSize;let o=0;const l=this.buf_;let c=this.inbuf_;for(;o<t;){if(c===0)for(;o<=s;)this.compress_(e,o),o+=this.blockSize;if(typeof e=="string"){for(;o<t;)if(l[c]=e.charCodeAt(o),++c,++o,c===this.blockSize){this.compress_(l),c=0;break}}else for(;o<t;)if(l[c]=e[o],++c,++o,c===this.blockSize){this.compress_(l),c=0;break}}this.inbuf_=c,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let o=this.blockSize-1;o>=56;o--)this.buf_[o]=t&255,t/=256;this.compress_(this.buf_);let s=0;for(let o=0;o<5;o++)for(let l=24;l>=0;l-=8)e[s]=this.chain_[o]>>l&255,++s;return e}}function cS(n,e){const t=new dS(n,e);return t.subscribe.bind(t)}class dS{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,s){let o;if(e===void 0&&t===void 0&&s===void 0)throw new Error("Missing Observer.");hS(e,["next","error","complete"])?o=e:o={next:e,error:t,complete:s},o.next===void 0&&(o.next=td),o.error===void 0&&(o.error=td),o.complete===void 0&&(o.complete=td);const l=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),l}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function hS(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function td(){}function Ml(n,e){return`${n} failed: ${e} argument `}/**
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
 */const fS=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let o=n.charCodeAt(s);if(o>=55296&&o<=56319){const l=o-55296;s++,$(s<n.length,"Surrogate pair missing trail surrogate.");const c=n.charCodeAt(s)-56320;o=65536+(l<<10)+c}o<128?e[t++]=o:o<2048?(e[t++]=o>>6|192,e[t++]=o&63|128):o<65536?(e[t++]=o>>12|224,e[t++]=o>>6&63|128,e[t++]=o&63|128):(e[t++]=o>>18|240,e[t++]=o>>12&63|128,e[t++]=o>>6&63|128,e[t++]=o&63|128)}return e},Fl=function(n){let e=0;for(let t=0;t<n.length;t++){const s=n.charCodeAt(t);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,t++):e+=3}return e};/**
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
 */const pS=1e3,mS=2,gS=14400*1e3,yS=.5;function kg(n,e=pS,t=mS){const s=e*Math.pow(t,n),o=Math.round(yS*s*(Math.random()-.5)*2);return Math.min(gS,s+o)}/**
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
 */function at(n){return n&&n._delegate?n._delegate:n}class an{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const $r="[DEFAULT]";/**
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
 */class _S{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new To;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:t});o&&s.resolve(o)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(e==null?void 0:e.optional)??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(o){if(s)return null;throw o}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(wS(e))try{this.getOrInitializeService({instanceIdentifier:$r})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(t);try{const l=this.getOrInitializeService({instanceIdentifier:o});s.resolve(l)}catch{}}}}clearInstance(e=$r){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=$r){return this.instances.has(e)}getOptions(e=$r){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[l,c]of this.instancesDeferred.entries()){const h=this.normalizeInstanceIdentifier(l);s===h&&c.resolve(o)}return o}onInit(e,t){const s=this.normalizeInstanceIdentifier(t),o=this.onInitCallbacks.get(s)??new Set;o.add(e),this.onInitCallbacks.set(s,o);const l=this.instances.get(s);return l&&e(l,s),()=>{o.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const o of s)try{o(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:vS(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=$r){return this.component?this.component.multipleInstances?e:$r:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function vS(n){return n===$r?void 0:n}function wS(n){return n.instantiationMode==="EAGER"}/**
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
 */class ES{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new _S(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Te;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(Te||(Te={}));const CS={debug:Te.DEBUG,verbose:Te.VERBOSE,info:Te.INFO,warn:Te.WARN,error:Te.ERROR,silent:Te.SILENT},kS=Te.INFO,SS={[Te.DEBUG]:"log",[Te.VERBOSE]:"log",[Te.INFO]:"info",[Te.WARN]:"warn",[Te.ERROR]:"error"},IS=(n,e,...t)=>{if(e<n.logLevel)return;const s=new Date().toISOString(),o=SS[e];if(o)console[o](`[${s}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class jl{constructor(e){this.name=e,this._logLevel=kS,this._logHandler=IS,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Te))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?CS[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Te.DEBUG,...e),this._logHandler(this,Te.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Te.VERBOSE,...e),this._logHandler(this,Te.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Te.INFO,...e),this._logHandler(this,Te.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Te.WARN,...e),this._logHandler(this,Te.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Te.ERROR,...e),this._logHandler(this,Te.ERROR,...e)}}const TS=(n,e)=>e.some(t=>n instanceof t);let Sg,Ig;function xS(){return Sg||(Sg=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function RS(){return Ig||(Ig=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const x_=new WeakMap,kd=new WeakMap,R_=new WeakMap,nd=new WeakMap,ah=new WeakMap;function bS(n){const e=new Promise((t,s)=>{const o=()=>{n.removeEventListener("success",l),n.removeEventListener("error",c)},l=()=>{t(yr(n.result)),o()},c=()=>{s(n.error),o()};n.addEventListener("success",l),n.addEventListener("error",c)});return e.then(t=>{t instanceof IDBCursor&&x_.set(t,n)}).catch(()=>{}),ah.set(e,n),e}function NS(n){if(kd.has(n))return;const e=new Promise((t,s)=>{const o=()=>{n.removeEventListener("complete",l),n.removeEventListener("error",c),n.removeEventListener("abort",c)},l=()=>{t(),o()},c=()=>{s(n.error||new DOMException("AbortError","AbortError")),o()};n.addEventListener("complete",l),n.addEventListener("error",c),n.addEventListener("abort",c)});kd.set(n,e)}let Sd={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return kd.get(n);if(e==="objectStoreNames")return n.objectStoreNames||R_.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return yr(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function PS(n){Sd=n(Sd)}function AS(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=n.call(rd(this),e,...t);return R_.set(s,e.sort?e.sort():[e]),yr(s)}:RS().includes(n)?function(...e){return n.apply(rd(this),e),yr(x_.get(this))}:function(...e){return yr(n.apply(rd(this),e))}}function DS(n){return typeof n=="function"?AS(n):(n instanceof IDBTransaction&&NS(n),TS(n,xS())?new Proxy(n,Sd):n)}function yr(n){if(n instanceof IDBRequest)return bS(n);if(nd.has(n))return nd.get(n);const e=DS(n);return e!==n&&(nd.set(n,e),ah.set(e,n)),e}const rd=n=>ah.get(n);function b_(n,e,{blocked:t,upgrade:s,blocking:o,terminated:l}={}){const c=indexedDB.open(n,e),h=yr(c);return s&&c.addEventListener("upgradeneeded",f=>{s(yr(c.result),f.oldVersion,f.newVersion,yr(c.transaction),f)}),t&&c.addEventListener("blocked",f=>t(f.oldVersion,f.newVersion,f)),h.then(f=>{l&&f.addEventListener("close",()=>l()),o&&f.addEventListener("versionchange",m=>o(m.oldVersion,m.newVersion,m))}).catch(()=>{}),h}const OS=["get","getKey","getAll","getAllKeys","count"],LS=["put","add","delete","clear"],id=new Map;function Tg(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(id.get(e))return id.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,o=LS.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(o||OS.includes(t)))return;const l=async function(c,...h){const f=this.transaction(c,o?"readwrite":"readonly");let m=f.store;return s&&(m=m.index(h.shift())),(await Promise.all([m[t](...h),o&&f.done]))[0]};return id.set(e,l),l}PS(n=>({...n,get:(e,t,s)=>Tg(e,t)||n.get(e,t,s),has:(e,t)=>!!Tg(e,t)||n.has(e,t)}));/**
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
 */class MS{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(FS(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function FS(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Id="@firebase/app",xg="0.14.6";/**
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
 */const Un=new jl("@firebase/app"),jS="@firebase/app-compat",US="@firebase/analytics-compat",zS="@firebase/analytics",$S="@firebase/app-check-compat",WS="@firebase/app-check",BS="@firebase/auth",VS="@firebase/auth-compat",HS="@firebase/database",GS="@firebase/data-connect",qS="@firebase/database-compat",KS="@firebase/functions",YS="@firebase/functions-compat",QS="@firebase/installations",JS="@firebase/installations-compat",XS="@firebase/messaging",ZS="@firebase/messaging-compat",eI="@firebase/performance",tI="@firebase/performance-compat",nI="@firebase/remote-config",rI="@firebase/remote-config-compat",iI="@firebase/storage",sI="@firebase/storage-compat",oI="@firebase/firestore",aI="@firebase/ai",lI="@firebase/firestore-compat",uI="firebase",cI="12.6.0";/**
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
 */const ul=new Map,hI=new Map,xd=new Map;function Rg(n,e){try{n.container.addComponent(e)}catch(t){Un.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function wn(n){const e=n.name;if(xd.has(e))return Un.debug(`There were multiple attempts to register component ${e}.`),!1;xd.set(e,n);for(const t of ul.values())Rg(t,n);for(const t of hI.values())Rg(t,n);return!0}function ei(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Ht(n){return n==null?!1:n.settings!==void 0}/**
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
 */const fI={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},_r=new Zr("app","Firebase",fI);/**
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
 */class pI{constructor(e,t,s){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new an("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw _r.create("app-deleted",{appName:this._name})}}/**
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
 */const ts=cI;function N_(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const s={name:Td,automaticDataCollectionEnabled:!0,...e},o=s.name;if(typeof o!="string"||!o)throw _r.create("bad-app-name",{appName:String(o)});if(t||(t=__()),!t)throw _r.create("no-options");const l=ul.get(o);if(l){if(wr(t,l.options)&&wr(s,l.config))return l;throw _r.create("duplicate-app",{appName:o})}const c=new ES(o);for(const f of xd.values())c.addComponent(f);const h=new pI(t,s,c);return ul.set(o,h),h}function lh(n=Td){const e=ul.get(n);if(!e&&n===Td&&__())return N_();if(!e)throw _r.create("no-app",{appName:n});return e}function qt(n,e,t){let s=dI[n]??n;t&&(s+=`-${t}`);const o=s.match(/\s|\//),l=e.match(/\s|\//);if(o||l){const c=[`Unable to register library "${s}" with version "${e}":`];o&&c.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&l&&c.push("and"),l&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Un.warn(c.join(" "));return}wn(new an(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const mI="firebase-heartbeat-database",gI=1,po="firebase-heartbeat-store";let sd=null;function P_(){return sd||(sd=b_(mI,gI,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(po)}catch(t){console.warn(t)}}}}).catch(n=>{throw _r.create("idb-open",{originalErrorMessage:n.message})})),sd}async function yI(n){try{const t=(await P_()).transaction(po),s=await t.objectStore(po).get(A_(n));return await t.done,s}catch(e){if(e instanceof En)Un.warn(e.message);else{const t=_r.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Un.warn(t.message)}}}async function bg(n,e){try{const s=(await P_()).transaction(po,"readwrite");await s.objectStore(po).put(e,A_(n)),await s.done}catch(t){if(t instanceof En)Un.warn(t.message);else{const s=_r.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Un.warn(s.message)}}}function A_(n){return`${n.name}!${n.options.appId}`}/**
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
 */const _I=1024,vI=30;class wI{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new CI(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,t;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),l=Ng();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===l||this._heartbeatsCache.heartbeats.some(c=>c.date===l))return;if(this._heartbeatsCache.heartbeats.push({date:l,agent:o}),this._heartbeatsCache.heartbeats.length>vI){const c=kI(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(c,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){Un.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Ng(),{heartbeatsToSend:s,unsentEntries:o}=EI(this._heartbeatsCache.heartbeats),l=ol(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=t,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),l}catch(t){return Un.warn(t),""}}}function Ng(){return new Date().toISOString().substring(0,10)}function EI(n,e=_I){const t=[];let s=n.slice();for(const o of n){const l=t.find(c=>c.agent===o.agent);if(l){if(l.dates.push(o.date),Pg(t)>e){l.dates.pop();break}}else if(t.push({agent:o.agent,dates:[o.date]}),Pg(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class CI{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return S_()?I_().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await yI(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return bg(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return bg(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Pg(n){return ol(JSON.stringify({version:2,heartbeats:n})).length}function kI(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let s=1;s<n.length;s++)n[s].date<t&&(t=n[s].date,e=s);return e}/**
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
 */function SI(n){wn(new an("platform-logger",e=>new MS(e),"PRIVATE")),wn(new an("heartbeat",e=>new wI(e),"PRIVATE")),qt(Id,xg,n),qt(Id,xg,"esm2020"),qt("fire-js","")}SI("");var II="firebase",TI="12.6.0";/**
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
 */qt(II,TI,"app");const D_="@firebase/installations",uh="0.6.19";/**
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
 */const PI={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Hr=new Zr(bI,NI,PI);function F_(n){return n instanceof En&&n.code.includes("request-failed")}/**
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
 */function j_({projectId:n}){return`${xI}/projects/${n}/installations`}function U_(n){return{token:n.token,requestStatus:2,expiresIn:DI(n.expiresIn),creationTime:Date.now()}}async function z_(n,e){const s=(await e.json()).error;return Hr.create("request-failed",{requestName:n,serverCode:s.code,serverMessage:s.message,serverStatus:s.status})}function $_({apiKey:n}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n})}function AI(n,{refreshToken:e}){const t=$_(n);return t.append("Authorization",OI(e)),t}async function W_(n){const e=await n();return e.status>=500&&e.status<600?n():e}function DI(n){return Number(n.replace("s","000"))}function OI(n){return`${M_} ${n}`}/**
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
 */async function LI({appConfig:n,heartbeatServiceProvider:e},{fid:t}){const s=j_(n),o=$_(n),l=e.getImmediate({optional:!0});if(l){const m=await l.getHeartbeatsHeader();m&&o.append("x-firebase-client",m)}const c={fid:t,authVersion:M_,appId:n.appId,sdkVersion:L_},h={method:"POST",headers:o,body:JSON.stringify(c)},f=await W_(()=>fetch(s,h));if(f.ok){const m=await f.json();return{fid:m.fid||t,registrationStatus:2,refreshToken:m.refreshToken,authToken:U_(m.authToken)}}else throw await z_("Create Installation",f)}/**
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
 */function B_(n){return new Promise(e=>{setTimeout(e,n)})}/**
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
 */function MI(n){return btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const FI=/^[cdef][\w-]{21}$/,Rd="";function jI(){try{const n=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(n),n[0]=112+n[0]%16;const t=UI(n);return FI.test(t)?t:Rd}catch{return Rd}}function UI(n){return MI(n).substr(0,22)}/**
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
 */const V_=new Map;function H_(n,e){const t=Ul(n);G_(t,e),zI(t,e)}function G_(n,e){const t=V_.get(n);if(t)for(const s of t)s(e)}function zI(n,e){const t=$I();t&&t.postMessage({key:n,fid:e}),WI()}let Br=null;function $I(){return!Br&&"BroadcastChannel"in self&&(Br=new BroadcastChannel("[Firebase] FID Change"),Br.onmessage=n=>{G_(n.data.key,n.data.fid)}),Br}function WI(){V_.size===0&&Br&&(Br.close(),Br=null)}/**
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
 */const BI="firebase-installations-database",VI=1,Gr="firebase-installations-store";let od=null;function ch(){return od||(od=b_(BI,VI,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(Gr)}}})),od}async function cl(n,e){const t=Ul(n),o=(await ch()).transaction(Gr,"readwrite"),l=o.objectStore(Gr),c=await l.get(t);return await l.put(e,t),await o.done,(!c||c.fid!==e.fid)&&H_(n,e.fid),e}async function q_(n){const e=Ul(n),s=(await ch()).transaction(Gr,"readwrite");await s.objectStore(Gr).delete(e),await s.done}async function zl(n,e){const t=Ul(n),o=(await ch()).transaction(Gr,"readwrite"),l=o.objectStore(Gr),c=await l.get(t),h=e(c);return h===void 0?await l.delete(t):await l.put(h,t),await o.done,h&&(!c||c.fid!==h.fid)&&H_(n,h.fid),h}/**
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
 */async function dh(n){let e;const t=await zl(n.appConfig,s=>{const o=HI(s),l=GI(n,o);return e=l.registrationPromise,l.installationEntry});return t.fid===Rd?{installationEntry:await e}:{installationEntry:t,registrationPromise:e}}function HI(n){const e=n||{fid:jI(),registrationStatus:0};return K_(e)}function GI(n,e){if(e.registrationStatus===0){if(!navigator.onLine){const o=Promise.reject(Hr.create("app-offline"));return{installationEntry:e,registrationPromise:o}}const t={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},s=qI(n,t);return{installationEntry:t,registrationPromise:s}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:KI(n)}:{installationEntry:e}}async function qI(n,e){try{const t=await LI(n,e);return cl(n.appConfig,t)}catch(t){throw F_(t)&&t.customData.serverCode===409?await q_(n.appConfig):await cl(n.appConfig,{fid:e.fid,registrationStatus:0}),t}}async function KI(n){let e=await Ag(n.appConfig);for(;e.registrationStatus===1;)await B_(100),e=await Ag(n.appConfig);if(e.registrationStatus===0){const{installationEntry:t,registrationPromise:s}=await dh(n);return s||t}return e}function Ag(n){return zl(n,e=>{if(!e)throw Hr.create("installation-not-found");return K_(e)})}function K_(n){return YI(n)?{fid:n.fid,registrationStatus:0}:n}function YI(n){return n.registrationStatus===1&&n.registrationTime+O_<Date.now()}/**
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
 */async function QI({appConfig:n,heartbeatServiceProvider:e},t){const s=JI(n,t),o=AI(n,t),l=e.getImmediate({optional:!0});if(l){const m=await l.getHeartbeatsHeader();m&&o.append("x-firebase-client",m)}const c={installation:{sdkVersion:L_,appId:n.appId}},h={method:"POST",headers:o,body:JSON.stringify(c)},f=await W_(()=>fetch(s,h));if(f.ok){const m=await f.json();return U_(m)}else throw await z_("Generate Auth Token",f)}function JI(n,{fid:e}){return`${j_(n)}/${e}/authTokens:generate`}/**
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
 */async function hh(n,e=!1){let t;const s=await zl(n.appConfig,l=>{if(!Y_(l))throw Hr.create("not-registered");const c=l.authToken;if(!e&&e1(c))return l;if(c.requestStatus===1)return t=XI(n,e),l;{if(!navigator.onLine)throw Hr.create("app-offline");const h=n1(l);return t=ZI(n,h),h}});return t?await t:s.authToken}async function XI(n,e){let t=await Dg(n.appConfig);for(;t.authToken.requestStatus===1;)await B_(100),t=await Dg(n.appConfig);const s=t.authToken;return s.requestStatus===0?hh(n,e):s}function Dg(n){return zl(n,e=>{if(!Y_(e))throw Hr.create("not-registered");const t=e.authToken;return r1(t)?{...e,authToken:{requestStatus:0}}:e})}async function ZI(n,e){try{const t=await QI(n,e),s={...e,authToken:t};return await cl(n.appConfig,s),t}catch(t){if(F_(t)&&(t.customData.serverCode===401||t.customData.serverCode===404))await q_(n.appConfig);else{const s={...e,authToken:{requestStatus:0}};await cl(n.appConfig,s)}throw t}}function Y_(n){return n!==void 0&&n.registrationStatus===2}function e1(n){return n.requestStatus===2&&!t1(n)}function t1(n){const e=Date.now();return e<n.creationTime||n.creationTime+n.expiresIn<e+RI}function n1(n){const e={requestStatus:1,requestTime:Date.now()};return{...n,authToken:e}}function r1(n){return n.requestStatus===1&&n.requestTime+O_<Date.now()}/**
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
 */async function i1(n){const e=n,{installationEntry:t,registrationPromise:s}=await dh(e);return s?s.catch(console.error):hh(e).catch(console.error),t.fid}/**
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
 */async function s1(n,e=!1){const t=n;return await o1(t),(await hh(t,e)).token}async function o1(n){const{registrationPromise:e}=await dh(n);e&&await e}/**
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
 */function a1(n){if(!n||!n.options)throw ad("App Configuration");if(!n.name)throw ad("App Name");const e=["projectId","apiKey","appId"];for(const t of e)if(!n.options[t])throw ad(t);return{appName:n.name,projectId:n.options.projectId,apiKey:n.options.apiKey,appId:n.options.appId}}function ad(n){return Hr.create("missing-app-config-values",{valueName:n})}/**
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
 */const Q_="installations",l1="installations-internal",u1=n=>{const e=n.getProvider("app").getImmediate(),t=a1(e),s=ei(e,"heartbeat");return{app:e,appConfig:t,heartbeatServiceProvider:s,_delete:()=>Promise.resolve()}},c1=n=>{const e=n.getProvider("app").getImmediate(),t=ei(e,Q_).getImmediate();return{getId:()=>i1(t),getToken:o=>s1(t,o)}};function d1(){wn(new an(Q_,u1,"PUBLIC")),wn(new an(l1,c1,"PRIVATE"))}d1();qt(D_,uh);qt(D_,uh,"esm2020");/**
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
 */const dl="analytics",h1="firebase_id",f1="origin",p1=60*1e3,m1="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",fh="https://www.googletagmanager.com/gtag/js";/**
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
 */const kt=new jl("@firebase/analytics");/**
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
 */const g1={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},jt=new Zr("analytics","Analytics",g1);/**
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
 */function y1(n){if(!n.startsWith(fh)){const e=jt.create("invalid-gtag-resource",{gtagURL:n});return kt.warn(e.message),""}return n}function J_(n){return Promise.all(n.map(e=>e.catch(t=>t)))}function _1(n,e){let t;return window.trustedTypes&&(t=window.trustedTypes.createPolicy(n,e)),t}function v1(n,e){const t=_1("firebase-js-sdk-policy",{createScriptURL:y1}),s=document.createElement("script"),o=`${fh}?l=${n}&id=${e}`;s.src=t?t==null?void 0:t.createScriptURL(o):o,s.async=!0,document.head.appendChild(s)}function w1(n){let e=[];return Array.isArray(window[n])?e=window[n]:window[n]=e,e}async function E1(n,e,t,s,o,l){const c=s[o];try{if(c)await e[c];else{const f=(await J_(t)).find(m=>m.measurementId===o);f&&await e[f.appId]}}catch(h){kt.error(h)}n("config",o,l)}async function C1(n,e,t,s,o){try{let l=[];if(o&&o.send_to){let c=o.send_to;Array.isArray(c)||(c=[c]);const h=await J_(t);for(const f of c){const m=h.find(_=>_.measurementId===f),y=m&&e[m.appId];if(y)l.push(y);else{l=[];break}}}l.length===0&&(l=Object.values(e)),await Promise.all(l),n("event",s,o||{})}catch(l){kt.error(l)}}function k1(n,e,t,s){async function o(l,...c){try{if(l==="event"){const[h,f]=c;await C1(n,e,t,h,f)}else if(l==="config"){const[h,f]=c;await E1(n,e,t,s,h,f)}else if(l==="consent"){const[h,f]=c;n("consent",h,f)}else if(l==="get"){const[h,f,m]=c;n("get",h,f,m)}else if(l==="set"){const[h]=c;n("set",h)}else n(l,...c)}catch(h){kt.error(h)}}return o}function S1(n,e,t,s,o){let l=function(...c){window[s].push(arguments)};return window[o]&&typeof window[o]=="function"&&(l=window[o]),window[o]=k1(l,n,e,t),{gtagCore:l,wrappedGtag:window[o]}}function I1(n){const e=window.document.getElementsByTagName("script");for(const t of Object.values(e))if(t.src&&t.src.includes(fh)&&t.src.includes(n))return t;return null}/**
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
 */const T1=30,x1=1e3;class R1{constructor(e={},t=x1){this.throttleMetadata=e,this.intervalMillis=t}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const X_=new R1;function b1(n){return new Headers({Accept:"application/json","x-goog-api-key":n})}async function N1(n){var c;const{appId:e,apiKey:t}=n,s={method:"GET",headers:b1(t)},o=m1.replace("{app-id}",e),l=await fetch(o,s);if(l.status!==200&&l.status!==304){let h="";try{const f=await l.json();(c=f.error)!=null&&c.message&&(h=f.error.message)}catch{}throw jt.create("config-fetch-failed",{httpStatus:l.status,responseMessage:h})}return l.json()}async function P1(n,e=X_,t){const{appId:s,apiKey:o,measurementId:l}=n.options;if(!s)throw jt.create("no-app-id");if(!o){if(l)return{measurementId:l,appId:s};throw jt.create("no-api-key")}const c=e.getThrottleMetadata(s)||{backoffCount:0,throttleEndTimeMillis:Date.now()},h=new O1;return setTimeout(async()=>{h.abort()},p1),Z_({appId:s,apiKey:o,measurementId:l},c,h,e)}async function Z_(n,{throttleEndTimeMillis:e,backoffCount:t},s,o=X_){var h;const{appId:l,measurementId:c}=n;try{await A1(s,e)}catch(f){if(c)return kt.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${c} provided in the "measurementId" field in the local Firebase config. [${f==null?void 0:f.message}]`),{appId:l,measurementId:c};throw f}try{const f=await N1(n);return o.deleteThrottleMetadata(l),f}catch(f){const m=f;if(!D1(m)){if(o.deleteThrottleMetadata(l),c)return kt.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${c} provided in the "measurementId" field in the local Firebase config. [${m==null?void 0:m.message}]`),{appId:l,measurementId:c};throw f}const y=Number((h=m==null?void 0:m.customData)==null?void 0:h.httpStatus)===503?kg(t,o.intervalMillis,T1):kg(t,o.intervalMillis),_={throttleEndTimeMillis:Date.now()+y,backoffCount:t+1};return o.setThrottleMetadata(l,_),kt.debug(`Calling attemptFetch again in ${y} millis`),Z_(n,_,s,o)}}function A1(n,e){return new Promise((t,s)=>{const o=Math.max(e-Date.now(),0),l=setTimeout(t,o);n.addEventListener(()=>{clearTimeout(l),s(jt.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function D1(n){if(!(n instanceof En)||!n.customData)return!1;const e=Number(n.customData.httpStatus);return e===429||e===500||e===503||e===504}class O1{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function L1(n,e,t,s,o){if(o&&o.global){n("event",t,s);return}else{const l=await e,c={...s,send_to:l};n("event",t,c)}}async function M1(n,e,t,s){if(s&&s.global){const o={};for(const l of Object.keys(t))o[`user_properties.${l}`]=t[l];return n("set",o),Promise.resolve()}else{const o=await e;n("config",o,{update:!0,user_properties:t})}}/**
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
 */async function F1(){if(S_())try{await I_()}catch(n){return kt.warn(jt.create("indexeddb-unavailable",{errorInfo:n==null?void 0:n.toString()}).message),!1}else return kt.warn(jt.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function j1(n,e,t,s,o,l,c){const h=P1(n);h.then(v=>{t[v.measurementId]=v.appId,n.options.measurementId&&v.measurementId!==n.options.measurementId&&kt.warn(`The measurement ID in the local Firebase config (${n.options.measurementId}) does not match the measurement ID fetched from the server (${v.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(v=>kt.error(v)),e.push(h);const f=F1().then(v=>{if(v)return s.getId()}),[m,y]=await Promise.all([h,f]);I1(l)||v1(l,m.measurementId),o("js",new Date);const _=(c==null?void 0:c.config)??{};return _[f1]="firebase",_.update=!0,y!=null&&(_[h1]=y),o("config",m.measurementId,_),m.measurementId}/**
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
 */class U1{constructor(e){this.app=e}_delete(){return delete Mi[this.app.options.appId],Promise.resolve()}}let Mi={},Og=[];const Lg={};let ld="dataLayer",z1="gtag",Mg,ph,Fg=!1;function $1(){const n=[];if(C_()&&n.push("This is a browser extension environment."),rS()||n.push("Cookies are not available."),n.length>0){const e=n.map((s,o)=>`(${o+1}) ${s}`).join(" "),t=jt.create("invalid-analytics-context",{errorInfo:e});kt.warn(t.message)}}function W1(n,e,t){$1();const s=n.options.appId;if(!s)throw jt.create("no-app-id");if(!n.options.apiKey)if(n.options.measurementId)kt.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${n.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw jt.create("no-api-key");if(Mi[s]!=null)throw jt.create("already-exists",{id:s});if(!Fg){w1(ld);const{wrappedGtag:l,gtagCore:c}=S1(Mi,Og,Lg,ld,z1);ph=l,Mg=c,Fg=!0}return Mi[s]=j1(n,Og,Lg,e,Mg,ld,t),new U1(n)}function B1(n=lh()){n=at(n);const e=ei(n,dl);return e.isInitialized()?e.getImmediate():V1(n)}function V1(n,e={}){const t=ei(n,dl);if(t.isInitialized()){const o=t.getImmediate();if(wr(e,t.getOptions()))return o;throw jt.create("already-initialized")}return t.initialize({options:e})}function H1(n,e,t){n=at(n),M1(ph,Mi[n.app.options.appId],e,t).catch(s=>kt.error(s))}function G1(n,e,t,s){n=at(n),L1(ph,Mi[n.app.options.appId],e,t,s).catch(o=>kt.error(o))}const jg="@firebase/analytics",Ug="0.10.19";function q1(){wn(new an(dl,(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),o=e.getProvider("installations-internal").getImmediate();return W1(s,o,t)},"PUBLIC")),wn(new an("analytics-internal",n,"PRIVATE")),qt(jg,Ug),qt(jg,Ug,"esm2020");function n(e){try{const t=e.getProvider(dl).getImmediate();return{logEvent:(s,o,l)=>G1(t,s,o,l),setUserProperties:(s,o)=>H1(t,s,o)}}catch(t){throw jt.create("interop-component-reg-failed",{reason:t})}}}q1();var zg={};const $g="@firebase/database",Wg="1.1.0";/**
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
 */let ev="";function K1(n){ev=n}/**
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
 */class Y1{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),ot(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:fo(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class Q1{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return Cn(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const tv=function(n){try{if(typeof window<"u"&&typeof window[n]<"u"){const e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new Y1(e)}}catch{}return new Q1},Vr=tv("localStorage"),J1=tv("sessionStorage");/**
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
 */const Fi=new jl("@firebase/database"),X1=(function(){let n=1;return function(){return n++}})(),nv=function(n){const e=fS(n),t=new uS;t.update(e);const s=t.digest();return ih.encodeByteArray(s)},xo=function(...n){let e="";for(let t=0;t<n.length;t++){const s=n[t];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=xo.apply(null,s):typeof s=="object"?e+=ot(s):e+=s,e+=" "}return e};let so=null,Bg=!0;const Z1=function(n,e){$(!0,"Can't turn on custom loggers persistently."),Fi.logLevel=Te.VERBOSE,so=Fi.log.bind(Fi)},ft=function(...n){if(Bg===!0&&(Bg=!1,so===null&&J1.get("logging_enabled")===!0&&Z1()),so){const e=xo.apply(null,n);so(e)}},Ro=function(n){return function(...e){ft(n,...e)}},bd=function(...n){const e="FIREBASE INTERNAL ERROR: "+xo(...n);Fi.error(e)},zn=function(...n){const e=`FIREBASE FATAL ERROR: ${xo(...n)}`;throw Fi.error(e),new Error(e)},St=function(...n){const e="FIREBASE WARNING: "+xo(...n);Fi.warn(e)},eT=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&St("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},mh=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},tT=function(n){if(document.readyState==="complete")n();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},Vi="[MIN_NAME]",qr="[MAX_NAME]",ti=function(n,e){if(n===e)return 0;if(n===Vi||e===qr)return-1;if(e===Vi||n===qr)return 1;{const t=Vg(n),s=Vg(e);return t!==null?s!==null?t-s===0?n.length-e.length:t-s:-1:s!==null?1:n<e?-1:1}},nT=function(n,e){return n===e?0:n<e?-1:1},Ys=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+ot(e))},gh=function(n){if(typeof n!="object"||n===null)return ot(n);const e=[];for(const s in n)e.push(s);e.sort();let t="{";for(let s=0;s<e.length;s++)s!==0&&(t+=","),t+=ot(e[s]),t+=":",t+=gh(n[e[s]]);return t+="}",t},rv=function(n,e){const t=n.length;if(t<=e)return[n];const s=[];for(let o=0;o<t;o+=e)o+e>t?s.push(n.substring(o,t)):s.push(n.substring(o,o+e));return s};function pt(n,e){for(const t in n)n.hasOwnProperty(t)&&e(t,n[t])}const iv=function(n){$(!mh(n),"Invalid JSON number");const e=11,t=52,s=(1<<e-1)-1;let o,l,c,h,f;n===0?(l=0,c=0,o=1/n===-1/0?1:0):(o=n<0,n=Math.abs(n),n>=Math.pow(2,1-s)?(h=Math.min(Math.floor(Math.log(n)/Math.LN2),s),l=h+s,c=Math.round(n*Math.pow(2,t-h)-Math.pow(2,t))):(l=0,c=Math.round(n/Math.pow(2,1-s-t))));const m=[];for(f=t;f;f-=1)m.push(c%2?1:0),c=Math.floor(c/2);for(f=e;f;f-=1)m.push(l%2?1:0),l=Math.floor(l/2);m.push(o?1:0),m.reverse();const y=m.join("");let _="";for(f=0;f<64;f+=8){let v=parseInt(y.substr(f,8),2).toString(16);v.length===1&&(v="0"+v),_=_+v}return _.toLowerCase()},rT=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},iT=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function sT(n,e){let t="Unknown Error";n==="too_big"?t="The data requested exceeds the maximum size that can be accessed with a single request.":n==="permission_denied"?t="Client doesn't have permission to access the desired data.":n==="unavailable"&&(t="The service is unavailable");const s=new Error(n+" at "+e._path.toString()+": "+t);return s.code=n.toUpperCase(),s}const oT=new RegExp("^-?(0*)\\d{1,10}$"),aT=-2147483648,lT=2147483647,Vg=function(n){if(oT.test(n)){const e=Number(n);if(e>=aT&&e<=lT)return e}return null},ns=function(n){try{n()}catch(e){setTimeout(()=>{const t=e.stack||"";throw St("Exception was thrown by user callback.",t),e},Math.floor(0))}},uT=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},oo=function(n,e){const t=setTimeout(n,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
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
 */class cT{constructor(e,t){this.appCheckProvider=t,this.appName=e.name,Ht(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=t==null?void 0:t.getImmediate({optional:!0}),this.appCheck||t==null||t.get().then(s=>this.appCheck=s)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((t,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){var t;(t=this.appCheckProvider)==null||t.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){St(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class dT{constructor(e,t,s){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(o=>this.auth_=o)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(ft("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',St(e)}}class el{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}el.OWNER="owner";/**
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
 */class pv{constructor(e,t,s,o,l=!1,c="",h=!1,f=!1,m=null){this.secure=t,this.namespace=s,this.webSocketOnly=o,this.nodeAdmin=l,this.persistenceKey=c,this.includeNamespaceInQueryParams=h,this.isUsingEmulator=f,this.emulatorOptions=m,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Vr.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Vr.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function hT(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function mv(n,e,t){$(typeof e=="string","typeof type must == string"),$(typeof t=="object","typeof params must == object");let s;if(e===hv)s=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===fv)s=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);hT(n)&&(t.ns=n.namespace);const o=[];return pt(t,(l,c)=>{o.push(l+"="+c)}),s+o.join("&")}/**
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
 */class fT{constructor(){this.counters_={}}incrementCounter(e,t=1){Cn(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return Vk(this.counters_)}}/**
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
 */const ud={},cd={};function _h(n){const e=n.toString();return ud[e]||(ud[e]=new fT),ud[e]}function pT(n,e){const t=n.toString();return cd[t]||(cd[t]=e()),cd[t]}/**
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
 */class mT{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let o=0;o<s.length;++o)s[o]&&ns(()=>{this.onMessage_(s[o])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const Hg="start",gT="close",yT="pLPCommand",_T="pRTLPCB",gv="id",yv="pw",_v="ser",vT="cb",wT="seg",ET="ts",CT="d",kT="dframe",vv=1870,wv=30,ST=vv-wv,IT=25e3,TT=3e4;class Oi{constructor(e,t,s,o,l,c,h){this.connId=e,this.repoInfo=t,this.applicationId=s,this.appCheckToken=o,this.authToken=l,this.transportSessionId=c,this.lastSessionId=h,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Ro(e),this.stats_=_h(t),this.urlFn=f=>(this.appCheckToken&&(f[Nd]=this.appCheckToken),mv(t,fv,f))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new mT(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(TT)),tT(()=>{if(this.isClosed_)return;this.scriptTagHolder=new vh((...l)=>{const[c,h,f,m,y]=l;if(this.incrementIncomingBytes_(l),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,c===Hg)this.id=h,this.password=f;else if(c===gT)h?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(h,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+c)},(...l)=>{const[c,h]=l;this.incrementIncomingBytes_(l),this.myPacketOrderer.handleResponse(c,h)},()=>{this.onClosed_()},this.urlFn);const s={};s[Hg]="t",s[_v]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[vT]=this.scriptTagHolder.uniqueCallbackIdentifier),s[sv]=yh,this.transportSessionId&&(s[ov]=this.transportSessionId),this.lastSessionId&&(s[cv]=this.lastSessionId),this.applicationId&&(s[dv]=this.applicationId),this.appCheckToken&&(s[Nd]=this.appCheckToken),typeof location<"u"&&location.hostname&&uv.test(location.hostname)&&(s[av]=lv);const o=this.urlFn(s);this.log_("Connecting via long-poll to "+o),this.scriptTagHolder.addTag(o,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Oi.forceAllow_=!0}static forceDisallow(){Oi.forceDisallow_=!0}static isAvailable(){return Oi.forceAllow_?!0:!Oi.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!rT()&&!iT()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=ot(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=m_(t),o=rv(s,ST);for(let l=0;l<o.length;l++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,o.length,o[l]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const s={};s[kT]="t",s[gv]=e,s[yv]=t,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=ot(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class vh{constructor(e,t,s,o){this.onDisconnect=s,this.urlFn=o,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=X1(),window[yT+this.uniqueCallbackIdentifier]=e,window[_T+this.uniqueCallbackIdentifier]=t,this.myIFrame=vh.createIFrame_();let l="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(l='<script>document.domain="'+document.domain+'";<\/script>');const c="<html><body>"+l+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(c),this.myIFrame.doc.close()}catch(h){ft("frame writing exception"),h.stack&&ft(h.stack),ft(h)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||ft("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[gv]=this.myID,e[yv]=this.myPW,e[_v]=this.currentSerial;let t=this.urlFn(e),s="",o=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+wv+s.length<=vv;){const c=this.pendingSegs.shift();s=s+"&"+wT+o+"="+c.seg+"&"+ET+o+"="+c.ts+"&"+CT+o+"="+c.d,o++}return t=t+s,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,s){this.pendingSegs.push({seg:e,ts:t,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const s=()=>{this.outstandingRequests.delete(t),this.newRequest_()},o=setTimeout(s,Math.floor(IT)),l=()=>{clearTimeout(o),s()};this.addTag(e,l)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const o=s.readyState;(!o||o==="loaded"||o==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),t())},s.onerror=()=>{ft("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
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
 */const xT=16384,RT=45e3;let hl=null;typeof MozWebSocket<"u"?hl=MozWebSocket:typeof WebSocket<"u"&&(hl=WebSocket);class nn{constructor(e,t,s,o,l,c,h){this.connId=e,this.applicationId=s,this.appCheckToken=o,this.authToken=l,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Ro(this.connId),this.stats_=_h(t),this.connURL=nn.connectionURL_(t,c,h,o,s),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,s,o,l){const c={};return c[sv]=yh,typeof location<"u"&&location.hostname&&uv.test(location.hostname)&&(c[av]=lv),t&&(c[ov]=t),s&&(c[cv]=s),o&&(c[Nd]=o),l&&(c[dv]=l),mv(e,hv,c)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Vr.set("previous_websocket_failure",!0);try{let s;nS(),this.mySock=new hl(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const o=s.message||s.data;o&&this.log_(o),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const o=s.message||s.data;o&&this.log_(o),this.onClosed_()}}start(){}static forceDisallow(){nn.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(t);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&hl!==null&&!nn.forceDisallow_}static previouslyFailed(){return Vr.isInMemoryStorage||Vr.get("previous_websocket_failure")===!0}markConnectionHealthy(){Vr.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const s=fo(t);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if($(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const s=this.extractFrameCount_(t);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const t=ot(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=rv(t,xT);s.length>1&&this.sendString_(String(s.length));for(let o=0;o<s.length;o++)this.sendString_(s[o])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(RT))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}nn.responsesRequiredToBeHealthy=2;nn.healthyTimeout=3e4;/**
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
 */class mo{static get ALL_TRANSPORTS(){return[Oi,nn]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const t=nn&&nn.isAvailable();let s=t&&!nn.previouslyFailed();if(e.webSocketOnly&&(t||St("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[nn];else{const o=this.transports_=[];for(const l of mo.ALL_TRANSPORTS)l&&l.isAvailable()&&o.push(l);mo.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}mo.globalTransportInitialized_=!1;/**
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
 */const bT=6e4,NT=5e3,PT=10*1024,AT=100*1024,dd="t",Gg="d",DT="s",qg="r",OT="e",Kg="o",Yg="a",Qg="n",Jg="p",LT="h";class MT{constructor(e,t,s,o,l,c,h,f,m,y){this.id=e,this.repoInfo_=t,this.applicationId_=s,this.appCheckToken_=o,this.authToken_=l,this.onMessage_=c,this.onReady_=h,this.onDisconnect_=f,this.onKill_=m,this.lastSessionId=y,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Ro("c:"+this.id+":"),this.transportManager_=new mo(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,s)},Math.floor(0));const o=e.healthyTimeout||0;o>0&&(this.healthyTimeout_=oo(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>AT?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>PT?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(o)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(dd in e){const t=e[dd];t===Yg?this.upgradeIfSecondaryHealthy_():t===qg?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===Kg&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=Ys("t",e),s=Ys("d",e);if(t==="c")this.onSecondaryControl_(s);else if(t==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Jg,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Yg,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Qg,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=Ys("t",e),s=Ys("d",e);t==="c"?this.onControl_(s):t==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=Ys(dd,e);if(Gg in e){const s=e[Gg];if(t===LT){const o={...s};this.repoInfo_.isUsingEmulator&&(o.h=this.repoInfo_.host),this.onHandshake_(o)}else if(t===Qg){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let o=0;o<this.pendingDataMessages.length;++o)this.onDataMessage_(this.pendingDataMessages[o]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===DT?this.onConnectionShutdown_(s):t===qg?this.onReset_(s):t===OT?bd("Server Error: "+s):t===Kg?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):bd("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,s=e.v,o=e.h;this.sessionId=e.s,this.repoInfo_.host=o,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),yh!==s&&St("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,s),oo(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(bT))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):oo(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(NT))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Jg,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Vr.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class Ev{put(e,t,s,o){}merge(e,t,s,o){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,s){}onDisconnectMerge(e,t,s){}onDisconnectCancel(e,t){}reportStats(e){}}/**
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
 */class Cv{constructor(e){this.allowedEvents_=e,this.listeners_={},$(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let o=0;o<s.length;o++)s[o].callback.apply(s[o].context,t)}}on(e,t,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:s});const o=this.getInitialEvent(e);o&&t.apply(s,o)}off(e,t,s){this.validateEventType_(e);const o=this.listeners_[e]||[];for(let l=0;l<o.length;l++)if(o[l].callback===t&&(!s||s===o[l].context)){o.splice(l,1);return}}validateEventType_(e){$(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
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
 */class fl extends Cv{static getInstance(){return new fl}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!oh()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return $(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const Xg=32,Zg=768;class xe{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let s=0;for(let o=0;o<this.pieces_.length;o++)this.pieces_[o].length>0&&(this.pieces_[s]=this.pieces_[o],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function ke(){return new xe("")}function fe(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function Er(n){return n.pieces_.length-n.pieceNum_}function Pe(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new xe(n.pieces_,e)}function wh(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function FT(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function go(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function kv(n){if(n.pieceNum_>=n.pieces_.length)return null;const e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new xe(e,0)}function $e(n,e){const t=[];for(let s=n.pieceNum_;s<n.pieces_.length;s++)t.push(n.pieces_[s]);if(e instanceof xe)for(let s=e.pieceNum_;s<e.pieces_.length;s++)t.push(e.pieces_[s]);else{const s=e.split("/");for(let o=0;o<s.length;o++)s[o].length>0&&t.push(s[o])}return new xe(t,0)}function ge(n){return n.pieceNum_>=n.pieces_.length}function At(n,e){const t=fe(n),s=fe(e);if(t===null)return e;if(t===s)return At(Pe(n),Pe(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function jT(n,e){const t=go(n,0),s=go(e,0);for(let o=0;o<t.length&&o<s.length;o++){const l=ti(t[o],s[o]);if(l!==0)return l}return t.length===s.length?0:t.length<s.length?-1:1}function Eh(n,e){if(Er(n)!==Er(e))return!1;for(let t=n.pieceNum_,s=e.pieceNum_;t<=n.pieces_.length;t++,s++)if(n.pieces_[t]!==e.pieces_[s])return!1;return!0}function Gt(n,e){let t=n.pieceNum_,s=e.pieceNum_;if(Er(n)>Er(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[s])return!1;++t,++s}return!0}class UT{constructor(e,t){this.errorPrefix_=t,this.parts_=go(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=Fl(this.parts_[s]);Sv(this)}}function zT(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=Fl(e),Sv(n)}function $T(n){const e=n.parts_.pop();n.byteLength_-=Fl(e),n.parts_.length>0&&(n.byteLength_-=1)}function Sv(n){if(n.byteLength_>Zg)throw new Error(n.errorPrefix_+"has a key path longer than "+Zg+" bytes ("+n.byteLength_+").");if(n.parts_.length>Xg)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Xg+") or object contains a cycle "+Wr(n))}function Wr(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}/**
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
 */class Ch extends Cv{static getInstance(){return new Ch}constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}getInitialEvent(e){return $(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const Qs=1e3,WT=300*1e3,ey=30*1e3,BT=1.3,VT=3e4,HT="server_kill",ty=3;class Mn extends Ev{constructor(e,t,s,o,l,c,h,f){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=s,this.onConnectStatus_=o,this.onServerInfoUpdate_=l,this.authTokenProvider_=c,this.appCheckTokenProvider_=h,this.authOverride_=f,this.id=Mn.nextPersistentConnectionId_++,this.log_=Ro("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Qs,this.maxReconnectDelay_=WT,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,f)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Ch.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&fl.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,s){const o=++this.requestNumber_,l={r:o,a:e,b:t};this.log_(ot(l)),$(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(l),s&&(this.requestCBHash_[o]=s)}get(e){this.initConnection_();const t=new To,o={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:c=>{const h=c.d;c.s==="ok"?t.resolve(h):t.reject(h)}};this.outstandingGets_.push(o),this.outstandingGetCount_++;const l=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(l),t.promise}listen(e,t,s,o){this.initConnection_();const l=e._queryIdentifier,c=e._path.toString();this.log_("Listen called for "+c+" "+l),this.listens.has(c)||this.listens.set(c,new Map),$(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),$(!this.listens.get(c).has(l),"listen() called twice for same path/queryId.");const h={onComplete:o,hashFn:t,query:e,tag:s};this.listens.get(c).set(l,h),this.connected_&&this.sendListen_(h)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(s)})}sendListen_(e){const t=e.query,s=t._path.toString(),o=t._queryIdentifier;this.log_("Listen on "+s+" for "+o);const l={p:s},c="q";e.tag&&(l.q=t._queryObject,l.t=e.tag),l.h=e.hashFn(),this.sendRequest(c,l,h=>{const f=h.d,m=h.s;Mn.warnOnListenWarnings_(f,t),(this.listens.get(s)&&this.listens.get(s).get(o))===e&&(this.log_("listen response",h),m!=="ok"&&this.removeListen_(s,o),e.onComplete&&e.onComplete(m,f))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&Cn(e,"w")){const s=Bi(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const o='".indexOn": "'+t._queryParams.getIndex().toString()+'"',l=t._path.toString();St(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${o} at ${l} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||lS(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=ey)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=aS(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(t,s,o=>{const l=o.s,c=o.d||"error";this.authToken_===e&&(l==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(l,c))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,s=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,s)})}unlisten(e,t){const s=e._path.toString(),o=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+o),$(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,o)&&this.connected_&&this.sendUnlisten_(s,o,e._queryObject,t)}sendUnlisten_(e,t,s,o){this.log_("Unlisten on "+e+" for "+t);const l={p:e},c="n";o&&(l.q=s,l.t=o),this.sendRequest(c,l)}onDisconnectPut(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:s})}onDisconnectMerge(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:s})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,s,o){const l={p:t,d:s};this.log_("onDisconnect "+e,l),this.sendRequest(e,l,c=>{o&&setTimeout(()=>{o(c.s,c.d)},Math.floor(0))})}put(e,t,s,o){this.putInternal("p",e,t,s,o)}merge(e,t,s,o){this.putInternal("m",e,t,s,o)}putInternal(e,t,s,o,l){this.initConnection_();const c={p:t,d:s};l!==void 0&&(c.h=l),this.outstandingPuts_.push({action:e,request:c,onComplete:o}),this.outstandingPutCount_++;const h=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(h):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,o=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,s,l=>{this.log_(t+" response",l),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),o&&o(l.s,l.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,s=>{if(s.s!=="ok"){const l=s.d;this.log_("reportStats","Error sending stats: "+l)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+ot(e));const t=e.r,s=this.requestCBHash_[t];s&&(delete this.requestCBHash_[t],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):bd("Unrecognized action received from server: "+ot(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){$(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Qs,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Qs,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>VT&&(this.reconnectDelay_=Qs),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*BT)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),o=this.id+":"+Mn.nextConnectionId_++,l=this.lastSessionId;let c=!1,h=null;const f=function(){h?h.close():(c=!0,s())},m=function(_){$(h,"sendRequest call when we're not connected not allowed."),h.sendRequest(_)};this.realtime_={close:f,sendRequest:m};const y=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[_,v]=await Promise.all([this.authTokenProvider_.getToken(y),this.appCheckTokenProvider_.getToken(y)]);c?ft("getToken() completed but was canceled"):(ft("getToken() completed. Creating connection."),this.authToken_=_&&_.accessToken,this.appCheckToken_=v&&v.token,h=new MT(o,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,s,x=>{St(x+" ("+this.repoInfo_.toString()+")"),this.interrupt(HT)},l))}catch(_){this.log_("Failed to get token: "+_),c||(this.repoInfo_.nodeAdmin&&St(_),f())}}}interrupt(e){ft("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){ft("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Cd(this.interruptReasons_)&&(this.reconnectDelay_=Qs,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let s;t?s=t.map(l=>gh(l)).join("$"):s="default";const o=this.removeListen_(e,s);o&&o.onComplete&&o.onComplete("permission_denied")}removeListen_(e,t){const s=new xe(e).toString();let o;if(this.listens.has(s)){const l=this.listens.get(s);o=l.get(t),l.delete(t),l.size===0&&this.listens.delete(s)}else o=void 0;return o}onAuthRevoked_(e,t){ft("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=ty&&(this.reconnectDelay_=ey,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){ft("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=ty&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+ev.replace(/\./g,"-")]=1,oh()?e["framework.cordova"]=1:k_()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=fl.getInstance().currentlyOnline();return Cd(this.interruptReasons_)&&e}}Mn.nextPersistentConnectionId_=0;Mn.nextConnectionId_=0;/**
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
 */class pe{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new pe(e,t)}}/**
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
 */class $l{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const s=new pe(Vi,e),o=new pe(Vi,t);return this.compare(s,o)!==0}minPost(){return pe.MIN}}/**
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
 */let Ga;class Iv extends $l{static get __EMPTY_NODE(){return Ga}static set __EMPTY_NODE(e){Ga=e}compare(e,t){return ti(e.name,t.name)}isDefinedOn(e){throw Xi("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return pe.MIN}maxPost(){return new pe(qr,Ga)}makePost(e,t){return $(typeof e=="string","KeyIndex indexValue must always be a string."),new pe(e,Ga)}toString(){return".key"}}const ji=new Iv;/**
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
 */class qa{constructor(e,t,s,o,l=null){this.isReverse_=o,this.resultGenerator_=l,this.nodeStack_=[];let c=1;for(;!e.isEmpty();)if(e=e,c=t?s(e.key,t):1,o&&(c*=-1),c<0)this.isReverse_?e=e.left:e=e.right;else if(c===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class it{constructor(e,t,s,o,l){this.key=e,this.value=t,this.color=s??it.RED,this.left=o??Dt.EMPTY_NODE,this.right=l??Dt.EMPTY_NODE}copy(e,t,s,o,l){return new it(e??this.key,t??this.value,s??this.color,o??this.left,l??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let o=this;const l=s(e,o.key);return l<0?o=o.copy(null,null,null,o.left.insert(e,t,s),null):l===0?o=o.copy(null,t,null,null,null):o=o.copy(null,null,null,null,o.right.insert(e,t,s)),o.fixUp_()}removeMin_(){if(this.left.isEmpty())return Dt.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let s,o;if(s=this,t(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),t(e,s.key)===0){if(s.right.isEmpty())return Dt.EMPTY_NODE;o=s.right.min_(),s=s.copy(o.key,o.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,it.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,it.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}it.RED=!0;it.BLACK=!1;class GT{copy(e,t,s,o,l){return this}insert(e,t,s){return new it(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Dt{constructor(e,t=Dt.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new Dt(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,it.BLACK,null,null))}remove(e){return new Dt(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,it.BLACK,null,null))}get(e){let t,s=this.root_;for(;!s.isEmpty();){if(t=this.comparator_(e,s.key),t===0)return s.value;t<0?s=s.left:t>0&&(s=s.right)}return null}getPredecessorKey(e){let t,s=this.root_,o=null;for(;!s.isEmpty();)if(t=this.comparator_(e,s.key),t===0){if(s.left.isEmpty())return o?o.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else t<0?s=s.left:t>0&&(o=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new qa(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new qa(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new qa(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new qa(this.root_,null,this.comparator_,!0,e)}}Dt.EMPTY_NODE=new GT;/**
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
 */function qT(n,e){return ti(n.name,e.name)}function kh(n,e){return ti(n,e)}/**
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
 */let Pd;function KT(n){Pd=n}const Tv=function(n){return typeof n=="number"?"number:"+iv(n):"string:"+n},xv=function(n){if(n.isLeafNode()){const e=n.val();$(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Cn(e,".sv"),"Priority must be a string or number.")}else $(n===Pd||n.isEmpty(),"priority of unexpected type.");$(n===Pd||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let ny;class rt{static set __childrenNodeConstructor(e){ny=e}static get __childrenNodeConstructor(){return ny}constructor(e,t=rt.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,$(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),xv(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new rt(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:rt.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return ge(e)?this:fe(e)===".priority"?this.priorityNode_:rt.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:rt.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const s=fe(e);return s===null?t:t.isEmpty()&&s!==".priority"?this:($(s!==".priority"||Er(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,rt.__childrenNodeConstructor.EMPTY_NODE.updateChild(Pe(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Tv(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=iv(this.value_):e+=this.value_,this.lazyHash_=nv(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===rt.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof rt.__childrenNodeConstructor?-1:($(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,s=typeof this.value_,o=rt.VALUE_TYPE_ORDER.indexOf(t),l=rt.VALUE_TYPE_ORDER.indexOf(s);return $(o>=0,"Unknown leaf type: "+t),$(l>=0,"Unknown leaf type: "+s),o===l?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:l-o}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}rt.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let Rv,bv;function YT(n){Rv=n}function QT(n){bv=n}class JT extends $l{compare(e,t){const s=e.node.getPriority(),o=t.node.getPriority(),l=s.compareTo(o);return l===0?ti(e.name,t.name):l}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return pe.MIN}maxPost(){return new pe(qr,new rt("[PRIORITY-POST]",bv))}makePost(e,t){const s=Rv(e);return new pe(t,new rt("[PRIORITY-POST]",s))}toString(){return".priority"}}const We=new JT;/**
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
 */const XT=Math.log(2);class ZT{constructor(e){const t=l=>parseInt(Math.log(l)/XT,10),s=l=>parseInt(Array(l+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const o=s(this.count);this.bits_=e+1&o}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const pl=function(n,e,t,s){n.sort(e);const o=function(f,m){const y=m-f;let _,v;if(y===0)return null;if(y===1)return _=n[f],v=t?t(_):_,new it(v,_.node,it.BLACK,null,null);{const x=parseInt(y/2,10)+f,k=o(f,x),O=o(x+1,m);return _=n[x],v=t?t(_):_,new it(v,_.node,it.BLACK,k,O)}},l=function(f){let m=null,y=null,_=n.length;const v=function(k,O){const D=_-k,U=_;_-=k;const V=o(D+1,U),j=n[D],ne=t?t(j):j;x(new it(ne,j.node,O,null,V))},x=function(k){m?(m.left=k,m=k):(y=k,m=k)};for(let k=0;k<f.count;++k){const O=f.nextBitIsOne(),D=Math.pow(2,f.count-(k+1));O?v(D,it.BLACK):(v(D,it.BLACK),v(D,it.RED))}return y},c=new ZT(n.length),h=l(c);return new Dt(s||e,h)};/**
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
 */let hd;const Ni={};class An{static get Default(){return $(Ni&&We,"ChildrenNode.ts has not been loaded"),hd=hd||new An({".priority":Ni},{".priority":We}),hd}constructor(e,t){this.indexes_=e,this.indexSet_=t}get(e){const t=Bi(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof Dt?t:null}hasIndex(e){return Cn(this.indexSet_,e.toString())}addIndex(e,t){$(e!==ji,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let o=!1;const l=t.getIterator(pe.Wrap);let c=l.getNext();for(;c;)o=o||e.isDefinedOn(c.node),s.push(c),c=l.getNext();let h;o?h=pl(s,e.getCompare()):h=Ni;const f=e.toString(),m={...this.indexSet_};m[f]=e;const y={...this.indexes_};return y[f]=h,new An(y,m)}addToIndexes(e,t){const s=ll(this.indexes_,(o,l)=>{const c=Bi(this.indexSet_,l);if($(c,"Missing index implementation for "+l),o===Ni)if(c.isDefinedOn(e.node)){const h=[],f=t.getIterator(pe.Wrap);let m=f.getNext();for(;m;)m.name!==e.name&&h.push(m),m=f.getNext();return h.push(e),pl(h,c.getCompare())}else return Ni;else{const h=t.get(e.name);let f=o;return h&&(f=f.remove(new pe(e.name,h))),f.insert(e,e.node)}});return new An(s,this.indexSet_)}removeFromIndexes(e,t){const s=ll(this.indexes_,o=>{if(o===Ni)return o;{const l=t.get(e.name);return l?o.remove(new pe(e.name,l)):o}});return new An(s,this.indexSet_)}}/**
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
 */let Js;class oe{static get EMPTY_NODE(){return Js||(Js=new oe(new Dt(kh),null,An.Default))}constructor(e,t,s){this.children_=e,this.priorityNode_=t,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&xv(this.priorityNode_),this.children_.isEmpty()&&$(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Js}updatePriority(e){return this.children_.isEmpty()?this:new oe(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?Js:t}}getChild(e){const t=fe(e);return t===null?this:this.getImmediateChild(t).getChild(Pe(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if($(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const s=new pe(e,t);let o,l;t.isEmpty()?(o=this.children_.remove(e),l=this.indexMap_.removeFromIndexes(s,this.children_)):(o=this.children_.insert(e,t),l=this.indexMap_.addToIndexes(s,this.children_));const c=o.isEmpty()?Js:this.priorityNode_;return new oe(o,c,l)}}updateChild(e,t){const s=fe(e);if(s===null)return t;{$(fe(e)!==".priority"||Er(e)===1,".priority must be the last token in a path");const o=this.getImmediateChild(s).updateChild(Pe(e),t);return this.updateImmediateChild(s,o)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let s=0,o=0,l=!0;if(this.forEachChild(We,(c,h)=>{t[c]=h.val(e),s++,l&&oe.INTEGER_REGEXP_.test(c)?o=Math.max(o,Number(c)):l=!1}),!e&&l&&o<2*s){const c=[];for(const h in t)c[h]=t[h];return c}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Tv(this.getPriority().val())+":"),this.forEachChild(We,(t,s)=>{const o=s.hash();o!==""&&(e+=":"+t+":"+o)}),this.lazyHash_=e===""?"":nv(e)}return this.lazyHash_}getPredecessorChildName(e,t,s){const o=this.resolveIndex_(s);if(o){const l=o.getPredecessorKey(new pe(e,t));return l?l.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new pe(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new pe(t,this.children_.get(t)):null}forEachChild(e,t){const s=this.resolveIndex_(e);return s?s.inorderTraversal(o=>t(o.name,o.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getIteratorFrom(e,o=>o);{const o=this.children_.getIteratorFrom(e.name,pe.Wrap);let l=o.peek();for(;l!=null&&t.compare(l,e)<0;)o.getNext(),l=o.peek();return o}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getReverseIteratorFrom(e,o=>o);{const o=this.children_.getReverseIteratorFrom(e.name,pe.Wrap);let l=o.peek();for(;l!=null&&t.compare(l,e)>0;)o.getNext(),l=o.peek();return o}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===bo?-1:0}withIndex(e){if(e===ji||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new oe(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===ji||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const s=this.getIterator(We),o=t.getIterator(We);let l=s.getNext(),c=o.getNext();for(;l&&c;){if(l.name!==c.name||!l.node.equals(c.node))return!1;l=s.getNext(),c=o.getNext()}return l===null&&c===null}else return!1;else return!1}}resolveIndex_(e){return e===ji?null:this.indexMap_.get(e.toString())}}oe.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class ex extends oe{constructor(){super(new Dt(kh),oe.EMPTY_NODE,An.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return oe.EMPTY_NODE}isEmpty(){return!1}}const bo=new ex;Object.defineProperties(pe,{MIN:{value:new pe(Vi,oe.EMPTY_NODE)},MAX:{value:new pe(qr,bo)}});Iv.__EMPTY_NODE=oe.EMPTY_NODE;rt.__childrenNodeConstructor=oe;KT(bo);QT(bo);/**
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
 */const tx=!0;function st(n,e=null){if(n===null)return oe.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),$(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){const t=n;return new rt(t,st(e))}if(!(n instanceof Array)&&tx){const t=[];let s=!1;if(pt(n,(c,h)=>{if(c.substring(0,1)!=="."){const f=st(h);f.isEmpty()||(s=s||!f.getPriority().isEmpty(),t.push(new pe(c,f)))}}),t.length===0)return oe.EMPTY_NODE;const l=pl(t,qT,c=>c.name,kh);if(s){const c=pl(t,We.getCompare());return new oe(l,st(e),new An({".priority":c},{".priority":We}))}else return new oe(l,st(e),An.Default)}else{let t=oe.EMPTY_NODE;return pt(n,(s,o)=>{if(Cn(n,s)&&s.substring(0,1)!=="."){const l=st(o);(l.isLeafNode()||!l.isEmpty())&&(t=t.updateImmediateChild(s,l))}}),t.updatePriority(st(e))}}YT(st);/**
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
 */class nx extends $l{constructor(e){super(),this.indexPath_=e,$(!ge(e)&&fe(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const s=this.extractChild(e.node),o=this.extractChild(t.node),l=s.compareTo(o);return l===0?ti(e.name,t.name):l}makePost(e,t){const s=st(e),o=oe.EMPTY_NODE.updateChild(this.indexPath_,s);return new pe(t,o)}maxPost(){const e=oe.EMPTY_NODE.updateChild(this.indexPath_,bo);return new pe(qr,e)}toString(){return go(this.indexPath_,0).join("/")}}/**
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
 */class rx extends $l{compare(e,t){const s=e.node.compareTo(t.node);return s===0?ti(e.name,t.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return pe.MIN}maxPost(){return pe.MAX}makePost(e,t){const s=st(e);return new pe(t,s)}toString(){return".value"}}const ix=new rx;/**
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
 */function Nv(n){return{type:"value",snapshotNode:n}}function Hi(n,e){return{type:"child_added",snapshotNode:e,childName:n}}function yo(n,e){return{type:"child_removed",snapshotNode:e,childName:n}}function _o(n,e,t){return{type:"child_changed",snapshotNode:e,childName:n,oldSnap:t}}function sx(n,e){return{type:"child_moved",snapshotNode:e,childName:n}}/**
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
 */class Sh{constructor(e){this.index_=e}updateChild(e,t,s,o,l,c){$(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const h=e.getImmediateChild(t);return h.getChild(o).equals(s.getChild(o))&&h.isEmpty()===s.isEmpty()||(c!=null&&(s.isEmpty()?e.hasChild(t)?c.trackChildChange(yo(t,h)):$(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):h.isEmpty()?c.trackChildChange(Hi(t,s)):c.trackChildChange(_o(t,s,h))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(t,s).withIndex(this.index_)}updateFullNode(e,t,s){return s!=null&&(e.isLeafNode()||e.forEachChild(We,(o,l)=>{t.hasChild(o)||s.trackChildChange(yo(o,l))}),t.isLeafNode()||t.forEachChild(We,(o,l)=>{if(e.hasChild(o)){const c=e.getImmediateChild(o);c.equals(l)||s.trackChildChange(_o(o,l,c))}else s.trackChildChange(Hi(o,l))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?oe.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class vo{constructor(e){this.indexedFilter_=new Sh(e.getIndex()),this.index_=e.getIndex(),this.startPost_=vo.getStartPost_(e),this.endPost_=vo.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&s}updateChild(e,t,s,o,l,c){return this.matches(new pe(t,s))||(s=oe.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,s,o,l,c)}updateFullNode(e,t,s){t.isLeafNode()&&(t=oe.EMPTY_NODE);let o=t.withIndex(this.index_);o=o.updatePriority(oe.EMPTY_NODE);const l=this;return t.forEachChild(We,(c,h)=>{l.matches(new pe(c,h))||(o=o.updateImmediateChild(c,oe.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,o,s)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}else return e.getIndex().maxPost()}}/**
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
 */class ox{constructor(e){this.withinDirectionalStart=t=>this.reverse_?this.withinEndPost(t):this.withinStartPost(t),this.withinDirectionalEnd=t=>this.reverse_?this.withinStartPost(t):this.withinEndPost(t),this.withinStartPost=t=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),t);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=t=>{const s=this.index_.compare(t,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new vo(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,s,o,l,c){return this.rangedFilter_.matches(new pe(t,s))||(s=oe.EMPTY_NODE),e.getImmediateChild(t).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,s,o,l,c):this.fullLimitUpdateChild_(e,t,s,l,c)}updateFullNode(e,t,s){let o;if(t.isLeafNode()||t.isEmpty())o=oe.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<t.numChildren()&&t.isIndexed(this.index_)){o=oe.EMPTY_NODE.withIndex(this.index_);let l;this.reverse_?l=t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):l=t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let c=0;for(;l.hasNext()&&c<this.limit_;){const h=l.getNext();if(this.withinDirectionalStart(h))if(this.withinDirectionalEnd(h))o=o.updateImmediateChild(h.name,h.node),c++;else break;else continue}}else{o=t.withIndex(this.index_),o=o.updatePriority(oe.EMPTY_NODE);let l;this.reverse_?l=o.getReverseIterator(this.index_):l=o.getIterator(this.index_);let c=0;for(;l.hasNext();){const h=l.getNext();c<this.limit_&&this.withinDirectionalStart(h)&&this.withinDirectionalEnd(h)?c++:o=o.updateImmediateChild(h.name,oe.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,o,s)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,s,o,l){let c;if(this.reverse_){const _=this.index_.getCompare();c=(v,x)=>_(x,v)}else c=this.index_.getCompare();const h=e;$(h.numChildren()===this.limit_,"");const f=new pe(t,s),m=this.reverse_?h.getFirstChild(this.index_):h.getLastChild(this.index_),y=this.rangedFilter_.matches(f);if(h.hasChild(t)){const _=h.getImmediateChild(t);let v=o.getChildAfterChild(this.index_,m,this.reverse_);for(;v!=null&&(v.name===t||h.hasChild(v.name));)v=o.getChildAfterChild(this.index_,v,this.reverse_);const x=v==null?1:c(v,f);if(y&&!s.isEmpty()&&x>=0)return l!=null&&l.trackChildChange(_o(t,s,_)),h.updateImmediateChild(t,s);{l!=null&&l.trackChildChange(yo(t,_));const O=h.updateImmediateChild(t,oe.EMPTY_NODE);return v!=null&&this.rangedFilter_.matches(v)?(l!=null&&l.trackChildChange(Hi(v.name,v.node)),O.updateImmediateChild(v.name,v.node)):O}}else return s.isEmpty()?e:y&&c(m,f)>=0?(l!=null&&(l.trackChildChange(yo(m.name,m.node)),l.trackChildChange(Hi(t,s))),h.updateImmediateChild(t,s).updateImmediateChild(m.name,oe.EMPTY_NODE)):e}}/**
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
 */class Ih{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=We}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return $(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return $(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Vi}hasEnd(){return this.endSet_}getIndexEndValue(){return $(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return $(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:qr}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return $(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===We}copy(){const e=new Ih;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function ax(n){return n.loadsAllData()?new Sh(n.getIndex()):n.hasLimit()?new ox(n):new vo(n)}function ry(n){const e={};if(n.isDefault())return e;let t;if(n.index_===We?t="$priority":n.index_===ix?t="$value":n.index_===ji?t="$key":($(n.index_ instanceof nx,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=ot(t),n.startSet_){const s=n.startAfterSet_?"startAfter":"startAt";e[s]=ot(n.indexStartValue_),n.startNameSet_&&(e[s]+=","+ot(n.indexStartName_))}if(n.endSet_){const s=n.endBeforeSet_?"endBefore":"endAt";e[s]=ot(n.indexEndValue_),n.endNameSet_&&(e[s]+=","+ot(n.indexEndName_))}return n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function iy(n){const e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_),e.sin=!n.startAfterSet_),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_),e.ein=!n.endBeforeSet_),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==We&&(e.i=n.index_.toString()),e}/**
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
 */class ml extends Ev{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:($(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,t,s,o){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=s,this.appCheckTokenProvider_=o,this.log_=Ro("p:rest:"),this.listens_={}}listen(e,t,s,o){const l=e._path.toString();this.log_("Listen called for "+l+" "+e._queryIdentifier);const c=ml.getListenId_(e,s),h={};this.listens_[c]=h;const f=ry(e._queryParams);this.restRequest_(l+".json",f,(m,y)=>{let _=y;if(m===404&&(_=null,m=null),m===null&&this.onDataUpdate_(l,_,!1,s),Bi(this.listens_,c)===h){let v;m?m===401?v="permission_denied":v="rest_error:"+m:v="ok",o(v,null)}})}unlisten(e,t){const s=ml.getListenId_(e,t);delete this.listens_[s]}get(e){const t=ry(e._queryParams),s=e._path.toString(),o=new To;return this.restRequest_(s+".json",t,(l,c)=>{let h=c;l===404&&(h=null,l=null),l===null?(this.onDataUpdate_(s,h,!1,null),o.resolve(h)):o.reject(new Error(h))}),o.promise}refreshAuthToken(e){}restRequest_(e,t={},s){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([o,l])=>{o&&o.accessToken&&(t.auth=o.accessToken),l&&l.token&&(t.ac=l.token);const c=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+es(t);this.log_("Sending REST request for "+c);const h=new XMLHttpRequest;h.onreadystatechange=()=>{if(s&&h.readyState===4){this.log_("REST Response for "+c+" received. status:",h.status,"response:",h.responseText);let f=null;if(h.status>=200&&h.status<300){try{f=fo(h.responseText)}catch{St("Failed to parse JSON response for "+c+": "+h.responseText)}s(null,f)}else h.status!==401&&h.status!==404&&St("Got unsuccessful REST response for "+c+" Status: "+h.status),s(h.status);s=null}},h.open("GET",c,!0),h.send()})}}/**
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
 */class lx{constructor(){this.rootNode_=oe.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
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
 */function gl(){return{value:null,children:new Map}}function Pv(n,e,t){if(ge(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{const s=fe(e);n.children.has(s)||n.children.set(s,gl());const o=n.children.get(s);e=Pe(e),Pv(o,e,t)}}function Ad(n,e,t){n.value!==null?t(e,n.value):ux(n,(s,o)=>{const l=new xe(e.toString()+"/"+s);Ad(o,l,t)})}function ux(n,e){n.children.forEach((t,s)=>{e(s,t)})}/**
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
 */class cx{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t={...e};return this.last_&&pt(this.last_,(s,o)=>{t[s]=t[s]-o}),this.last_=e,t}}/**
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
 */const sy=10*1e3,dx=30*1e3,hx=300*1e3;class fx{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new cx(e);const s=sy+(dx-sy)*Math.random();oo(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),t={};let s=!1;pt(e,(o,l)=>{l>0&&Cn(this.statsToReport_,o)&&(t[o]=l,s=!0)}),s&&this.server_.reportStats(t),oo(this.reportStats_.bind(this),Math.floor(Math.random()*2*hx))}}/**
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
 */class yl{constructor(e,t,s){this.path=e,this.affectedTree=t,this.revert=s,this.type=rn.ACK_USER_WRITE,this.source=Th()}operationForChild(e){if(ge(this.path)){if(this.affectedTree.value!=null)return $(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new xe(e));return new yl(ke(),t,this.revert)}}else return $(fe(this.path)===e,"operationForChild called for unrelated child."),new yl(Pe(this.path),this.affectedTree,this.revert)}}/**
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
 */class wo{constructor(e,t){this.source=e,this.path=t,this.type=rn.LISTEN_COMPLETE}operationForChild(e){return ge(this.path)?new wo(this.source,ke()):new wo(this.source,Pe(this.path))}}/**
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
 */class Kr{constructor(e,t,s){this.source=e,this.path=t,this.snap=s,this.type=rn.OVERWRITE}operationForChild(e){return ge(this.path)?new Kr(this.source,ke(),this.snap.getImmediateChild(e)):new Kr(this.source,Pe(this.path),this.snap)}}/**
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
 */class Gi{constructor(e,t,s){this.source=e,this.path=t,this.children=s,this.type=rn.MERGE}operationForChild(e){if(ge(this.path)){const t=this.children.subtree(new xe(e));return t.isEmpty()?null:t.value?new Kr(this.source,ke(),t.value):new Gi(this.source,ke(),t)}else return $(fe(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Gi(this.source,Pe(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class Yr{constructor(e,t,s){this.node_=e,this.fullyInitialized_=t,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(ge(e))return this.isFullyInitialized()&&!this.filtered_;const t=fe(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class px{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function mx(n,e,t,s){const o=[],l=[];return e.forEach(c=>{c.type==="child_changed"&&n.index_.indexedValueChanged(c.oldSnap,c.snapshotNode)&&l.push(sx(c.childName,c.snapshotNode))}),Xs(n,o,"child_removed",e,s,t),Xs(n,o,"child_added",e,s,t),Xs(n,o,"child_moved",l,s,t),Xs(n,o,"child_changed",e,s,t),Xs(n,o,"value",e,s,t),o}function Xs(n,e,t,s,o,l){const c=s.filter(h=>h.type===t);c.sort((h,f)=>yx(n,h,f)),c.forEach(h=>{const f=gx(n,h,l);o.forEach(m=>{m.respondsTo(h.type)&&e.push(m.createEvent(f,n.query_))})})}function gx(n,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function yx(n,e,t){if(e.childName==null||t.childName==null)throw Xi("Should only compare child_ events.");const s=new pe(e.childName,e.snapshotNode),o=new pe(t.childName,t.snapshotNode);return n.index_.compare(s,o)}/**
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
 */function Wl(n,e){return{eventCache:n,serverCache:e}}function ao(n,e,t,s){return Wl(new Yr(e,t,s),n.serverCache)}function Av(n,e,t,s){return Wl(n.eventCache,new Yr(e,t,s))}function Dd(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function Qr(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}/**
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
 */let fd;const _x=()=>(fd||(fd=new Dt(nT)),fd);class Ne{static fromObject(e){let t=new Ne(null);return pt(e,(s,o)=>{t=t.set(new xe(s),o)}),t}constructor(e,t=_x()){this.value=e,this.children=t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:ke(),value:this.value};if(ge(e))return null;{const s=fe(e),o=this.children.get(s);if(o!==null){const l=o.findRootMostMatchingPathAndValue(Pe(e),t);return l!=null?{path:$e(new xe(s),l.path),value:l.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(ge(e))return this;{const t=fe(e),s=this.children.get(t);return s!==null?s.subtree(Pe(e)):new Ne(null)}}set(e,t){if(ge(e))return new Ne(t,this.children);{const s=fe(e),l=(this.children.get(s)||new Ne(null)).set(Pe(e),t),c=this.children.insert(s,l);return new Ne(this.value,c)}}remove(e){if(ge(e))return this.children.isEmpty()?new Ne(null):new Ne(null,this.children);{const t=fe(e),s=this.children.get(t);if(s){const o=s.remove(Pe(e));let l;return o.isEmpty()?l=this.children.remove(t):l=this.children.insert(t,o),this.value===null&&l.isEmpty()?new Ne(null):new Ne(this.value,l)}else return this}}get(e){if(ge(e))return this.value;{const t=fe(e),s=this.children.get(t);return s?s.get(Pe(e)):null}}setTree(e,t){if(ge(e))return t;{const s=fe(e),l=(this.children.get(s)||new Ne(null)).setTree(Pe(e),t);let c;return l.isEmpty()?c=this.children.remove(s):c=this.children.insert(s,l),new Ne(this.value,c)}}fold(e){return this.fold_(ke(),e)}fold_(e,t){const s={};return this.children.inorderTraversal((o,l)=>{s[o]=l.fold_($e(e,o),t)}),t(e,this.value,s)}findOnPath(e,t){return this.findOnPath_(e,ke(),t)}findOnPath_(e,t,s){const o=this.value?s(t,this.value):!1;if(o)return o;if(ge(e))return null;{const l=fe(e),c=this.children.get(l);return c?c.findOnPath_(Pe(e),$e(t,l),s):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,ke(),t)}foreachOnPath_(e,t,s){if(ge(e))return this;{this.value&&s(t,this.value);const o=fe(e),l=this.children.get(o);return l?l.foreachOnPath_(Pe(e),$e(t,o),s):new Ne(null)}}foreach(e){this.foreach_(ke(),e)}foreach_(e,t){this.children.inorderTraversal((s,o)=>{o.foreach_($e(e,s),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,s)=>{s.value&&e(t,s.value)})}}/**
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
 */class on{constructor(e){this.writeTree_=e}static empty(){return new on(new Ne(null))}}function lo(n,e,t){if(ge(e))return new on(new Ne(t));{const s=n.writeTree_.findRootMostValueAndPath(e);if(s!=null){const o=s.path;let l=s.value;const c=At(o,e);return l=l.updateChild(c,t),new on(n.writeTree_.set(o,l))}else{const o=new Ne(t),l=n.writeTree_.setTree(e,o);return new on(l)}}}function Od(n,e,t){let s=n;return pt(t,(o,l)=>{s=lo(s,$e(e,o),l)}),s}function oy(n,e){if(ge(e))return on.empty();{const t=n.writeTree_.setTree(e,new Ne(null));return new on(t)}}function Ld(n,e){return ni(n,e)!=null}function ni(n,e){const t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild(At(t.path,e)):null}function ay(n){const e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(We,(s,o)=>{e.push(new pe(s,o))}):n.writeTree_.children.inorderTraversal((s,o)=>{o.value!=null&&e.push(new pe(s,o.value))}),e}function vr(n,e){if(ge(e))return n;{const t=ni(n,e);return t!=null?new on(new Ne(t)):new on(n.writeTree_.subtree(e))}}function Md(n){return n.writeTree_.isEmpty()}function qi(n,e){return Dv(ke(),n.writeTree_,e)}function Dv(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let s=null;return e.children.inorderTraversal((o,l)=>{o===".priority"?($(l.value!==null,"Priority writes must always be leaf nodes"),s=l.value):t=Dv($e(n,o),l,t)}),!t.getChild(n).isEmpty()&&s!==null&&(t=t.updateChild($e(n,".priority"),s)),t}}/**
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
 */function bh(n,e){return Fv(e,n)}function vx(n,e,t,s,o){$(s>n.lastWriteId,"Stacking an older write on top of newer ones"),o===void 0&&(o=!0),n.allWrites.push({path:e,snap:t,writeId:s,visible:o}),o&&(n.visibleWrites=lo(n.visibleWrites,e,t)),n.lastWriteId=s}function wx(n,e,t,s){$(s>n.lastWriteId,"Stacking an older merge on top of newer ones"),n.allWrites.push({path:e,children:t,writeId:s,visible:!0}),n.visibleWrites=Od(n.visibleWrites,e,t),n.lastWriteId=s}function Ex(n,e){for(let t=0;t<n.allWrites.length;t++){const s=n.allWrites[t];if(s.writeId===e)return s}return null}function Cx(n,e){const t=n.allWrites.findIndex(h=>h.writeId===e);$(t>=0,"removeWrite called with nonexistent writeId.");const s=n.allWrites[t];n.allWrites.splice(t,1);let o=s.visible,l=!1,c=n.allWrites.length-1;for(;o&&c>=0;){const h=n.allWrites[c];h.visible&&(c>=t&&kx(h,s.path)?o=!1:Gt(s.path,h.path)&&(l=!0)),c--}if(o){if(l)return Sx(n),!0;if(s.snap)n.visibleWrites=oy(n.visibleWrites,s.path);else{const h=s.children;pt(h,f=>{n.visibleWrites=oy(n.visibleWrites,$e(s.path,f))})}return!0}else return!1}function kx(n,e){if(n.snap)return Gt(n.path,e);for(const t in n.children)if(n.children.hasOwnProperty(t)&&Gt($e(n.path,t),e))return!0;return!1}function Sx(n){n.visibleWrites=Ov(n.allWrites,Ix,ke()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function Ix(n){return n.visible}function Ov(n,e,t){let s=on.empty();for(let o=0;o<n.length;++o){const l=n[o];if(e(l)){const c=l.path;let h;if(l.snap)Gt(t,c)?(h=At(t,c),s=lo(s,h,l.snap)):Gt(c,t)&&(h=At(c,t),s=lo(s,ke(),l.snap.getChild(h)));else if(l.children){if(Gt(t,c))h=At(t,c),s=Od(s,h,l.children);else if(Gt(c,t))if(h=At(c,t),ge(h))s=Od(s,ke(),l.children);else{const f=Bi(l.children,fe(h));if(f){const m=f.getChild(Pe(h));s=lo(s,ke(),m)}}}else throw Xi("WriteRecord should have .snap or .children")}}return s}function Lv(n,e,t,s,o){if(!s&&!o){const l=ni(n.visibleWrites,e);if(l!=null)return l;{const c=vr(n.visibleWrites,e);if(Md(c))return t;if(t==null&&!Ld(c,ke()))return null;{const h=t||oe.EMPTY_NODE;return qi(c,h)}}}else{const l=vr(n.visibleWrites,e);if(!o&&Md(l))return t;if(!o&&t==null&&!Ld(l,ke()))return null;{const c=function(m){return(m.visible||o)&&(!s||!~s.indexOf(m.writeId))&&(Gt(m.path,e)||Gt(e,m.path))},h=Ov(n.allWrites,c,e),f=t||oe.EMPTY_NODE;return qi(h,f)}}}function Tx(n,e,t){let s=oe.EMPTY_NODE;const o=ni(n.visibleWrites,e);if(o)return o.isLeafNode()||o.forEachChild(We,(l,c)=>{s=s.updateImmediateChild(l,c)}),s;if(t){const l=vr(n.visibleWrites,e);return t.forEachChild(We,(c,h)=>{const f=qi(vr(l,new xe(c)),h);s=s.updateImmediateChild(c,f)}),ay(l).forEach(c=>{s=s.updateImmediateChild(c.name,c.node)}),s}else{const l=vr(n.visibleWrites,e);return ay(l).forEach(c=>{s=s.updateImmediateChild(c.name,c.node)}),s}}function xx(n,e,t,s,o){$(s||o,"Either existingEventSnap or existingServerSnap must exist");const l=$e(e,t);if(Ld(n.visibleWrites,l))return null;{const c=vr(n.visibleWrites,l);return Md(c)?o.getChild(t):qi(c,o.getChild(t))}}function Rx(n,e,t,s){const o=$e(e,t),l=ni(n.visibleWrites,o);if(l!=null)return l;if(s.isCompleteForChild(t)){const c=vr(n.visibleWrites,o);return qi(c,s.getNode().getImmediateChild(t))}else return null}function bx(n,e){return ni(n.visibleWrites,e)}function Nx(n,e,t,s,o,l,c){let h;const f=vr(n.visibleWrites,e),m=ni(f,ke());if(m!=null)h=m;else if(t!=null)h=qi(f,t);else return[];if(h=h.withIndex(c),!h.isEmpty()&&!h.isLeafNode()){const y=[],_=c.getCompare(),v=l?h.getReverseIteratorFrom(s,c):h.getIteratorFrom(s,c);let x=v.getNext();for(;x&&y.length<o;)_(x,s)!==0&&y.push(x),x=v.getNext();return y}else return[]}function Px(){return{visibleWrites:on.empty(),allWrites:[],lastWriteId:-1}}function _l(n,e,t,s){return Lv(n.writeTree,n.treePath,e,t,s)}function Nh(n,e){return Tx(n.writeTree,n.treePath,e)}function ly(n,e,t,s){return xx(n.writeTree,n.treePath,e,t,s)}function vl(n,e){return bx(n.writeTree,$e(n.treePath,e))}function Ax(n,e,t,s,o,l){return Nx(n.writeTree,n.treePath,e,t,s,o,l)}function Ph(n,e,t){return Rx(n.writeTree,n.treePath,e,t)}function Mv(n,e){return Fv($e(n.treePath,e),n.writeTree)}function Fv(n,e){return{treePath:n,writeTree:e}}/**
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
 */class Dx{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,s=e.childName;$(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),$(s!==".priority","Only non-priority child changes can be tracked.");const o=this.changeMap.get(s);if(o){const l=o.type;if(t==="child_added"&&l==="child_removed")this.changeMap.set(s,_o(s,e.snapshotNode,o.snapshotNode));else if(t==="child_removed"&&l==="child_added")this.changeMap.delete(s);else if(t==="child_removed"&&l==="child_changed")this.changeMap.set(s,yo(s,o.oldSnap));else if(t==="child_changed"&&l==="child_added")this.changeMap.set(s,Hi(s,e.snapshotNode));else if(t==="child_changed"&&l==="child_changed")this.changeMap.set(s,_o(s,e.snapshotNode,o.oldSnap));else throw Xi("Illegal combination of changes: "+e+" occurred after "+o)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class Ox{getCompleteChild(e){return null}getChildAfterChild(e,t,s){return null}}const jv=new Ox;class Ah{constructor(e,t,s=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=s}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new Yr(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Ph(this.writes_,e,s)}}getChildAfterChild(e,t,s){const o=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Qr(this.viewCache_),l=Ax(this.writes_,o,t,1,s,e);return l.length===0?null:l[0]}}/**
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
 */function Lx(n){return{filter:n}}function Mx(n,e){$(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),$(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function Fx(n,e,t,s,o){const l=new Dx;let c,h;if(t.type===rn.OVERWRITE){const m=t;m.source.fromUser?c=Fd(n,e,m.path,m.snap,s,o,l):($(m.source.fromServer,"Unknown source."),h=m.source.tagged||e.serverCache.isFiltered()&&!ge(m.path),c=wl(n,e,m.path,m.snap,s,o,h,l))}else if(t.type===rn.MERGE){const m=t;m.source.fromUser?c=Ux(n,e,m.path,m.children,s,o,l):($(m.source.fromServer,"Unknown source."),h=m.source.tagged||e.serverCache.isFiltered(),c=jd(n,e,m.path,m.children,s,o,h,l))}else if(t.type===rn.ACK_USER_WRITE){const m=t;m.revert?c=Wx(n,e,m.path,s,o,l):c=zx(n,e,m.path,m.affectedTree,s,o,l)}else if(t.type===rn.LISTEN_COMPLETE)c=$x(n,e,t.path,s,l);else throw Xi("Unknown operation type: "+t.type);const f=l.getChanges();return jx(e,c,f),{viewCache:c,changes:f}}function jx(n,e,t){const s=e.eventCache;if(s.isFullyInitialized()){const o=s.getNode().isLeafNode()||s.getNode().isEmpty(),l=Dd(n);(t.length>0||!n.eventCache.isFullyInitialized()||o&&!s.getNode().equals(l)||!s.getNode().getPriority().equals(l.getPriority()))&&t.push(Nv(Dd(e)))}}function Uv(n,e,t,s,o,l){const c=e.eventCache;if(vl(s,t)!=null)return e;{let h,f;if(ge(t))if($(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const m=Qr(e),y=m instanceof oe?m:oe.EMPTY_NODE,_=Nh(s,y);h=n.filter.updateFullNode(e.eventCache.getNode(),_,l)}else{const m=_l(s,Qr(e));h=n.filter.updateFullNode(e.eventCache.getNode(),m,l)}else{const m=fe(t);if(m===".priority"){$(Er(t)===1,"Can't have a priority with additional path components");const y=c.getNode();f=e.serverCache.getNode();const _=ly(s,t,y,f);_!=null?h=n.filter.updatePriority(y,_):h=c.getNode()}else{const y=Pe(t);let _;if(c.isCompleteForChild(m)){f=e.serverCache.getNode();const v=ly(s,t,c.getNode(),f);v!=null?_=c.getNode().getImmediateChild(m).updateChild(y,v):_=c.getNode().getImmediateChild(m)}else _=Ph(s,m,e.serverCache);_!=null?h=n.filter.updateChild(c.getNode(),m,_,y,o,l):h=c.getNode()}}return ao(e,h,c.isFullyInitialized()||ge(t),n.filter.filtersNodes())}}function wl(n,e,t,s,o,l,c,h){const f=e.serverCache;let m;const y=c?n.filter:n.filter.getIndexedFilter();if(ge(t))m=y.updateFullNode(f.getNode(),s,null);else if(y.filtersNodes()&&!f.isFiltered()){const x=f.getNode().updateChild(t,s);m=y.updateFullNode(f.getNode(),x,null)}else{const x=fe(t);if(!f.isCompleteForPath(t)&&Er(t)>1)return e;const k=Pe(t),D=f.getNode().getImmediateChild(x).updateChild(k,s);x===".priority"?m=y.updatePriority(f.getNode(),D):m=y.updateChild(f.getNode(),x,D,k,jv,null)}const _=Av(e,m,f.isFullyInitialized()||ge(t),y.filtersNodes()),v=new Ah(o,_,l);return Uv(n,_,t,o,v,h)}function Fd(n,e,t,s,o,l,c){const h=e.eventCache;let f,m;const y=new Ah(o,e,l);if(ge(t))m=n.filter.updateFullNode(e.eventCache.getNode(),s,c),f=ao(e,m,!0,n.filter.filtersNodes());else{const _=fe(t);if(_===".priority")m=n.filter.updatePriority(e.eventCache.getNode(),s),f=ao(e,m,h.isFullyInitialized(),h.isFiltered());else{const v=Pe(t),x=h.getNode().getImmediateChild(_);let k;if(ge(v))k=s;else{const O=y.getCompleteChild(_);O!=null?wh(v)===".priority"&&O.getChild(kv(v)).isEmpty()?k=O:k=O.updateChild(v,s):k=oe.EMPTY_NODE}if(x.equals(k))f=e;else{const O=n.filter.updateChild(h.getNode(),_,k,v,y,c);f=ao(e,O,h.isFullyInitialized(),n.filter.filtersNodes())}}}return f}function uy(n,e){return n.eventCache.isCompleteForChild(e)}function Ux(n,e,t,s,o,l,c){let h=e;return s.foreach((f,m)=>{const y=$e(t,f);uy(e,fe(y))&&(h=Fd(n,h,y,m,o,l,c))}),s.foreach((f,m)=>{const y=$e(t,f);uy(e,fe(y))||(h=Fd(n,h,y,m,o,l,c))}),h}function cy(n,e,t){return t.foreach((s,o)=>{e=e.updateChild(s,o)}),e}function jd(n,e,t,s,o,l,c,h){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let f=e,m;ge(t)?m=s:m=new Ne(null).setTree(t,s);const y=e.serverCache.getNode();return m.children.inorderTraversal((_,v)=>{if(y.hasChild(_)){const x=e.serverCache.getNode().getImmediateChild(_),k=cy(n,x,v);f=wl(n,f,new xe(_),k,o,l,c,h)}}),m.children.inorderTraversal((_,v)=>{const x=!e.serverCache.isCompleteForChild(_)&&v.value===null;if(!y.hasChild(_)&&!x){const k=e.serverCache.getNode().getImmediateChild(_),O=cy(n,k,v);f=wl(n,f,new xe(_),O,o,l,c,h)}}),f}function zx(n,e,t,s,o,l,c){if(vl(o,t)!=null)return e;const h=e.serverCache.isFiltered(),f=e.serverCache;if(s.value!=null){if(ge(t)&&f.isFullyInitialized()||f.isCompleteForPath(t))return wl(n,e,t,f.getNode().getChild(t),o,l,h,c);if(ge(t)){let m=new Ne(null);return f.getNode().forEachChild(ji,(y,_)=>{m=m.set(new xe(y),_)}),jd(n,e,t,m,o,l,h,c)}else return e}else{let m=new Ne(null);return s.foreach((y,_)=>{const v=$e(t,y);f.isCompleteForPath(v)&&(m=m.set(y,f.getNode().getChild(v)))}),jd(n,e,t,m,o,l,h,c)}}function $x(n,e,t,s,o){const l=e.serverCache,c=Av(e,l.getNode(),l.isFullyInitialized()||ge(t),l.isFiltered());return Uv(n,c,t,s,jv,o)}function Wx(n,e,t,s,o,l){let c;if(vl(s,t)!=null)return e;{const h=new Ah(s,e,o),f=e.eventCache.getNode();let m;if(ge(t)||fe(t)===".priority"){let y;if(e.serverCache.isFullyInitialized())y=_l(s,Qr(e));else{const _=e.serverCache.getNode();$(_ instanceof oe,"serverChildren would be complete if leaf node"),y=Nh(s,_)}y=y,m=n.filter.updateFullNode(f,y,l)}else{const y=fe(t);let _=Ph(s,y,e.serverCache);_==null&&e.serverCache.isCompleteForChild(y)&&(_=f.getImmediateChild(y)),_!=null?m=n.filter.updateChild(f,y,_,Pe(t),h,l):e.eventCache.getNode().hasChild(y)?m=n.filter.updateChild(f,y,oe.EMPTY_NODE,Pe(t),h,l):m=f,m.isEmpty()&&e.serverCache.isFullyInitialized()&&(c=_l(s,Qr(e)),c.isLeafNode()&&(m=n.filter.updateFullNode(m,c,l)))}return c=e.serverCache.isFullyInitialized()||vl(s,ke())!=null,ao(e,m,c,n.filter.filtersNodes())}}/**
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
 */class Bx{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,o=new Sh(s.getIndex()),l=ax(s);this.processor_=Lx(l);const c=t.serverCache,h=t.eventCache,f=o.updateFullNode(oe.EMPTY_NODE,c.getNode(),null),m=l.updateFullNode(oe.EMPTY_NODE,h.getNode(),null),y=new Yr(f,c.isFullyInitialized(),o.filtersNodes()),_=new Yr(m,h.isFullyInitialized(),l.filtersNodes());this.viewCache_=Wl(_,y),this.eventGenerator_=new px(this.query_)}get query(){return this.query_}}function Vx(n){return n.viewCache_.serverCache.getNode()}function Hx(n,e){const t=Qr(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!ge(e)&&!t.getImmediateChild(fe(e)).isEmpty())?t.getChild(e):null}function dy(n){return n.eventRegistrations_.length===0}function Gx(n,e){n.eventRegistrations_.push(e)}function hy(n,e,t){const s=[];if(t){$(e==null,"A cancel should cancel all event registrations.");const o=n.query._path;n.eventRegistrations_.forEach(l=>{const c=l.createCancelEvent(t,o);c&&s.push(c)})}if(e){let o=[];for(let l=0;l<n.eventRegistrations_.length;++l){const c=n.eventRegistrations_[l];if(!c.matches(e))o.push(c);else if(e.hasAnyCallback()){o=o.concat(n.eventRegistrations_.slice(l+1));break}}n.eventRegistrations_=o}else n.eventRegistrations_=[];return s}function fy(n,e,t,s){e.type===rn.MERGE&&e.source.queryId!==null&&($(Qr(n.viewCache_),"We should always have a full cache before handling merges"),$(Dd(n.viewCache_),"Missing event cache, even though we have a server cache"));const o=n.viewCache_,l=Fx(n.processor_,o,e,t,s);return Mx(n.processor_,l.viewCache),$(l.viewCache.serverCache.isFullyInitialized()||!o.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=l.viewCache,zv(n,l.changes,l.viewCache.eventCache.getNode(),null)}function qx(n,e){const t=n.viewCache_.eventCache,s=[];return t.getNode().isLeafNode()||t.getNode().forEachChild(We,(l,c)=>{s.push(Hi(l,c))}),t.isFullyInitialized()&&s.push(Nv(t.getNode())),zv(n,s,t.getNode(),e)}function zv(n,e,t,s){const o=s?[s]:n.eventRegistrations_;return mx(n.eventGenerator_,e,t,o)}/**
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
 */let El;class Kx{constructor(){this.views=new Map}}function Yx(n){$(!El,"__referenceConstructor has already been defined"),El=n}function Qx(){return $(El,"Reference.ts has not been loaded"),El}function Jx(n){return n.views.size===0}function Dh(n,e,t,s){const o=e.source.queryId;if(o!==null){const l=n.views.get(o);return $(l!=null,"SyncTree gave us an op for an invalid query."),fy(l,e,t,s)}else{let l=[];for(const c of n.views.values())l=l.concat(fy(c,e,t,s));return l}}function Xx(n,e,t,s,o){const l=e._queryIdentifier,c=n.views.get(l);if(!c){let h=_l(t,o?s:null),f=!1;h?f=!0:s instanceof oe?(h=Nh(t,s),f=!1):(h=oe.EMPTY_NODE,f=!1);const m=Wl(new Yr(h,f,!1),new Yr(s,o,!1));return new Bx(e,m)}return c}function Zx(n,e,t,s,o,l){const c=Xx(n,e,s,o,l);return n.views.has(e._queryIdentifier)||n.views.set(e._queryIdentifier,c),Gx(c,t),qx(c,t)}function eR(n,e,t,s){const o=e._queryIdentifier,l=[];let c=[];const h=Cr(n);if(o==="default")for(const[f,m]of n.views.entries())c=c.concat(hy(m,t,s)),dy(m)&&(n.views.delete(f),m.query._queryParams.loadsAllData()||l.push(m.query));else{const f=n.views.get(o);f&&(c=c.concat(hy(f,t,s)),dy(f)&&(n.views.delete(o),f.query._queryParams.loadsAllData()||l.push(f.query)))}return h&&!Cr(n)&&l.push(new(Qx())(e._repo,e._path)),{removed:l,events:c}}function $v(n){const e=[];for(const t of n.views.values())t.query._queryParams.loadsAllData()||e.push(t);return e}function Ui(n,e){let t=null;for(const s of n.views.values())t=t||Hx(s,e);return t}function Wv(n,e){if(e._queryParams.loadsAllData())return Bl(n);{const s=e._queryIdentifier;return n.views.get(s)}}function Bv(n,e){return Wv(n,e)!=null}function Cr(n){return Bl(n)!=null}function Bl(n){for(const e of n.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let Cl;function tR(n){$(!Cl,"__referenceConstructor has already been defined"),Cl=n}function nR(){return $(Cl,"Reference.ts has not been loaded"),Cl}let rR=1;class py{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Ne(null),this.pendingWriteTree_=Px(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Vv(n,e,t,s,o){return vx(n.pendingWriteTree_,e,t,s,o),o?rs(n,new Kr(Th(),e,t)):[]}function iR(n,e,t,s){wx(n.pendingWriteTree_,e,t,s);const o=Ne.fromObject(t);return rs(n,new Gi(Th(),e,o))}function gr(n,e,t=!1){const s=Ex(n.pendingWriteTree_,e);if(Cx(n.pendingWriteTree_,e)){let l=new Ne(null);return s.snap!=null?l=l.set(ke(),!0):pt(s.children,c=>{l=l.set(new xe(c),!0)}),rs(n,new yl(s.path,l,t))}else return[]}function Vl(n,e,t){return rs(n,new Kr(xh(),e,t))}function sR(n,e,t){const s=Ne.fromObject(t);return rs(n,new Gi(xh(),e,s))}function oR(n,e){return rs(n,new wo(xh(),e))}function aR(n,e,t){const s=Lh(n,t);if(s){const o=Mh(s),l=o.path,c=o.queryId,h=At(l,e),f=new wo(Rh(c),h);return Fh(n,l,f)}else return[]}function Ud(n,e,t,s,o=!1){const l=e._path,c=n.syncPointTree_.get(l);let h=[];if(c&&(e._queryIdentifier==="default"||Bv(c,e))){const f=eR(c,e,t,s);Jx(c)&&(n.syncPointTree_=n.syncPointTree_.remove(l));const m=f.removed;if(h=f.events,!o){const y=m.findIndex(v=>v._queryParams.loadsAllData())!==-1,_=n.syncPointTree_.findOnPath(l,(v,x)=>Cr(x));if(y&&!_){const v=n.syncPointTree_.subtree(l);if(!v.isEmpty()){const x=cR(v);for(let k=0;k<x.length;++k){const O=x[k],D=O.query,U=qv(n,O);n.listenProvider_.startListening(uo(D),kl(n,D),U.hashFn,U.onComplete)}}}!_&&m.length>0&&!s&&(y?n.listenProvider_.stopListening(uo(e),null):m.forEach(v=>{const x=n.queryToTagMap.get(Hl(v));n.listenProvider_.stopListening(uo(v),x)}))}dR(n,m)}return h}function lR(n,e,t,s){const o=Lh(n,s);if(o!=null){const l=Mh(o),c=l.path,h=l.queryId,f=At(c,e),m=new Kr(Rh(h),f,t);return Fh(n,c,m)}else return[]}function uR(n,e,t,s){const o=Lh(n,s);if(o){const l=Mh(o),c=l.path,h=l.queryId,f=At(c,e),m=Ne.fromObject(t),y=new Gi(Rh(h),f,m);return Fh(n,c,y)}else return[]}function my(n,e,t,s=!1){const o=e._path;let l=null,c=!1;n.syncPointTree_.foreachOnPath(o,(v,x)=>{const k=At(v,o);l=l||Ui(x,k),c=c||Cr(x)});let h=n.syncPointTree_.get(o);h?(c=c||Cr(h),l=l||Ui(h,ke())):(h=new Kx,n.syncPointTree_=n.syncPointTree_.set(o,h));let f;l!=null?f=!0:(f=!1,l=oe.EMPTY_NODE,n.syncPointTree_.subtree(o).foreachChild((x,k)=>{const O=Ui(k,ke());O&&(l=l.updateImmediateChild(x,O))}));const m=Bv(h,e);if(!m&&!e._queryParams.loadsAllData()){const v=Hl(e);$(!n.queryToTagMap.has(v),"View does not exist, but we have a tag");const x=hR();n.queryToTagMap.set(v,x),n.tagToQueryMap.set(x,v)}const y=bh(n.pendingWriteTree_,o);let _=Zx(h,e,t,y,l,f);if(!m&&!c&&!s){const v=Wv(h,e);_=_.concat(fR(n,e,v))}return _}function Oh(n,e,t){const o=n.pendingWriteTree_,l=n.syncPointTree_.findOnPath(e,(c,h)=>{const f=At(c,e),m=Ui(h,f);if(m)return m});return Lv(o,e,l,t,!0)}function rs(n,e){return Hv(e,n.syncPointTree_,null,bh(n.pendingWriteTree_,ke()))}function Hv(n,e,t,s){if(ge(n.path))return Gv(n,e,t,s);{const o=e.get(ke());t==null&&o!=null&&(t=Ui(o,ke()));let l=[];const c=fe(n.path),h=n.operationForChild(c),f=e.children.get(c);if(f&&h){const m=t?t.getImmediateChild(c):null,y=Mv(s,c);l=l.concat(Hv(h,f,m,y))}return o&&(l=l.concat(Dh(o,n,s,t))),l}}function Gv(n,e,t,s){const o=e.get(ke());t==null&&o!=null&&(t=Ui(o,ke()));let l=[];return e.children.inorderTraversal((c,h)=>{const f=t?t.getImmediateChild(c):null,m=Mv(s,c),y=n.operationForChild(c);y&&(l=l.concat(Gv(y,h,f,m)))}),o&&(l=l.concat(Dh(o,n,s,t))),l}function qv(n,e){const t=e.query,s=kl(n,t);return{hashFn:()=>(Vx(e)||oe.EMPTY_NODE).hash(),onComplete:o=>{if(o==="ok")return s?aR(n,t._path,s):oR(n,t._path);{const l=sT(o,t);return Ud(n,t,null,l)}}}}function kl(n,e){const t=Hl(e);return n.queryToTagMap.get(t)}function Hl(n){return n._path.toString()+"$"+n._queryIdentifier}function Lh(n,e){return n.tagToQueryMap.get(e)}function Mh(n){const e=n.indexOf("$");return $(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new xe(n.substr(0,e))}}function Fh(n,e,t){const s=n.syncPointTree_.get(e);$(s,"Missing sync point for query tag that we're tracking");const o=bh(n.pendingWriteTree_,e);return Dh(s,t,o,null)}function cR(n){return n.fold((e,t,s)=>{if(t&&Cr(t))return[Bl(t)];{let o=[];return t&&(o=$v(t)),pt(s,(l,c)=>{o=o.concat(c)}),o}})}function uo(n){return n._queryParams.loadsAllData()&&!n._queryParams.isDefault()?new(nR())(n._repo,n._path):n}function dR(n,e){for(let t=0;t<e.length;++t){const s=e[t];if(!s._queryParams.loadsAllData()){const o=Hl(s),l=n.queryToTagMap.get(o);n.queryToTagMap.delete(o),n.tagToQueryMap.delete(l)}}}function hR(){return rR++}function fR(n,e,t){const s=e._path,o=kl(n,e),l=qv(n,t),c=n.listenProvider_.startListening(uo(e),o,l.hashFn,l.onComplete),h=n.syncPointTree_.subtree(s);if(o)$(!Cr(h.value),"If we're adding a query, it shouldn't be shadowed");else{const f=h.fold((m,y,_)=>{if(!ge(m)&&y&&Cr(y))return[Bl(y).query];{let v=[];return y&&(v=v.concat($v(y).map(x=>x.query))),pt(_,(x,k)=>{v=v.concat(k)}),v}});for(let m=0;m<f.length;++m){const y=f[m];n.listenProvider_.stopListening(uo(y),kl(n,y))}}return c}/**
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
 */class jh{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new jh(t)}node(){return this.node_}}class Uh{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=$e(this.path_,e);return new Uh(this.syncTree_,t)}node(){return Oh(this.syncTree_,this.path_)}}const pR=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},gy=function(n,e,t){if(!n||typeof n!="object")return n;if($(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return mR(n[".sv"],e,t);if(typeof n[".sv"]=="object")return gR(n[".sv"],e);$(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},mR=function(n,e,t){switch(n){case"timestamp":return t.timestamp;default:$(!1,"Unexpected server value: "+n)}},gR=function(n,e,t){n.hasOwnProperty("increment")||$(!1,"Unexpected server value: "+JSON.stringify(n,null,2));const s=n.increment;typeof s!="number"&&$(!1,"Unexpected increment value: "+s);const o=e.node();if($(o!==null&&typeof o<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!o.isLeafNode())return s;const c=o.getValue();return typeof c!="number"?s:c+s},Kv=function(n,e,t,s){return zh(e,new Uh(t,n),s)},Yv=function(n,e,t){return zh(n,new jh(e),t)};function zh(n,e,t){const s=n.getPriority().val(),o=gy(s,e.getImmediateChild(".priority"),t);let l;if(n.isLeafNode()){const c=n,h=gy(c.getValue(),e,t);return h!==c.getValue()||o!==c.getPriority().val()?new rt(h,st(o)):n}else{const c=n;return l=c,o!==c.getPriority().val()&&(l=l.updatePriority(new rt(o))),c.forEachChild(We,(h,f)=>{const m=zh(f,e.getImmediateChild(h),t);m!==f&&(l=l.updateImmediateChild(h,m))}),l}}/**
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
 */class $h{constructor(e="",t=null,s={children:{},childCount:0}){this.name=e,this.parent=t,this.node=s}}function Wh(n,e){let t=e instanceof xe?e:new xe(e),s=n,o=fe(t);for(;o!==null;){const l=Bi(s.node.children,o)||{children:{},childCount:0};s=new $h(o,s,l),t=Pe(t),o=fe(t)}return s}function is(n){return n.node.value}function Qv(n,e){n.node.value=e,zd(n)}function Jv(n){return n.node.childCount>0}function yR(n){return is(n)===void 0&&!Jv(n)}function Gl(n,e){pt(n.node.children,(t,s)=>{e(new $h(t,n,s))})}function Xv(n,e,t,s){t&&e(n),Gl(n,o=>{Xv(o,e,!0)})}function _R(n,e,t){let s=n.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function No(n){return new xe(n.parent===null?n.name:No(n.parent)+"/"+n.name)}function zd(n){n.parent!==null&&vR(n.parent,n.name,n)}function vR(n,e,t){const s=yR(t),o=Cn(n.node.children,e);s&&o?(delete n.node.children[e],n.node.childCount--,zd(n)):!s&&!o&&(n.node.children[e]=t.node,n.node.childCount++,zd(n))}/**
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
 */const wR=/[\[\].#$\/\u0000-\u001F\u007F]/,ER=/[\[\].#$\u0000-\u001F\u007F]/,pd=10*1024*1024,Bh=function(n){return typeof n=="string"&&n.length!==0&&!wR.test(n)},Zv=function(n){return typeof n=="string"&&n.length!==0&&!ER.test(n)},CR=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Zv(n)},kR=function(n){return n===null||typeof n=="string"||typeof n=="number"&&!mh(n)||n&&typeof n=="object"&&Cn(n,".sv")},ew=function(n,e,t,s){s&&e===void 0||ql(Ml(n,"value"),e,t)},ql=function(n,e,t){const s=t instanceof xe?new UT(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+Wr(s));if(typeof e=="function")throw new Error(n+"contains a function "+Wr(s)+" with contents = "+e.toString());if(mh(e))throw new Error(n+"contains "+e.toString()+" "+Wr(s));if(typeof e=="string"&&e.length>pd/3&&Fl(e)>pd)throw new Error(n+"contains a string greater than "+pd+" utf8 bytes "+Wr(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let o=!1,l=!1;if(pt(e,(c,h)=>{if(c===".value")o=!0;else if(c!==".priority"&&c!==".sv"&&(l=!0,!Bh(c)))throw new Error(n+" contains an invalid key ("+c+") "+Wr(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);zT(s,c),ql(n,h,s),$T(s)}),o&&l)throw new Error(n+' contains ".value" child '+Wr(s)+" in addition to actual children.")}},SR=function(n,e){let t,s;for(t=0;t<e.length;t++){s=e[t];const l=go(s);for(let c=0;c<l.length;c++)if(!(l[c]===".priority"&&c===l.length-1)){if(!Bh(l[c]))throw new Error(n+"contains an invalid key ("+l[c]+") in path "+s.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(jT);let o=null;for(t=0;t<e.length;t++){if(s=e[t],o!==null&&Gt(o,s))throw new Error(n+"contains a path "+o.toString()+" that is ancestor of another path "+s.toString());o=s}},IR=function(n,e,t,s){const o=Ml(n,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(o+" must be an object containing the children to replace.");const l=[];pt(e,(c,h)=>{const f=new xe(c);if(ql(o,h,$e(t,f)),wh(f)===".priority"&&!kR(h))throw new Error(o+"contains an invalid value for '"+f.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");l.push(f)}),SR(o,l)},tw=function(n,e,t,s){if(!Zv(t))throw new Error(Ml(n,e)+'was an invalid path = "'+t+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},TR=function(n,e,t,s){t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),tw(n,e,t)},Vh=function(n,e){if(fe(e)===".info")throw new Error(n+" failed = Can't modify data under /.info/")},xR=function(n,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Bh(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!CR(t))throw new Error(Ml(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class RR{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Kl(n,e){let t=null;for(let s=0;s<e.length;s++){const o=e[s],l=o.getPath();t!==null&&!Eh(l,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:l}),t.events.push(o)}t&&n.eventLists_.push(t)}function nw(n,e,t){Kl(n,t),rw(n,s=>Eh(s,e))}function ln(n,e,t){Kl(n,t),rw(n,s=>Gt(s,e)||Gt(e,s))}function rw(n,e){n.recursionDepth_++;let t=!0;for(let s=0;s<n.eventLists_.length;s++){const o=n.eventLists_[s];if(o){const l=o.path;e(l)?(bR(n.eventLists_[s]),n.eventLists_[s]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function bR(n){for(let e=0;e<n.events.length;e++){const t=n.events[e];if(t!==null){n.events[e]=null;const s=t.getEventRunner();so&&ft("event: "+t.toString()),ns(s)}}}/**
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
 */const NR="repo_interrupt",PR=25;class AR{constructor(e,t,s,o){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=s,this.appCheckProvider_=o,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new RR,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=gl(),this.transactionQueueTree_=new $h,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function DR(n,e,t){if(n.stats_=_h(n.repoInfo_),n.forceRestClient_||uT())n.server_=new ml(n.repoInfo_,(s,o,l,c)=>{yy(n,s,o,l,c)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>_y(n,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{ot(t)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}n.persistentConnection_=new Mn(n.repoInfo_,e,(s,o,l,c)=>{yy(n,s,o,l,c)},s=>{_y(n,s)},s=>{OR(n,s)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(s=>{n.server_.refreshAuthToken(s)}),n.appCheckProvider_.addTokenChangeListener(s=>{n.server_.refreshAppCheckToken(s.token)}),n.statsReporter_=pT(n.repoInfo_,()=>new fx(n.stats_,n.server_)),n.infoData_=new lx,n.infoSyncTree_=new py({startListening:(s,o,l,c)=>{let h=[];const f=n.infoData_.getNode(s._path);return f.isEmpty()||(h=Vl(n.infoSyncTree_,s._path,f),setTimeout(()=>{c("ok")},0)),h},stopListening:()=>{}}),Hh(n,"connected",!1),n.serverSyncTree_=new py({startListening:(s,o,l,c)=>(n.server_.listen(s,l,o,(h,f)=>{const m=c(h,f);ln(n.eventQueue_,s._path,m)}),[]),stopListening:(s,o)=>{n.server_.unlisten(s,o)}})}function iw(n){const t=n.infoData_.getNode(new xe(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function Yl(n){return pR({timestamp:iw(n)})}function yy(n,e,t,s,o){n.dataUpdateCount++;const l=new xe(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let c=[];if(o)if(s){const f=ll(t,m=>st(m));c=uR(n.serverSyncTree_,l,f,o)}else{const f=st(t);c=lR(n.serverSyncTree_,l,f,o)}else if(s){const f=ll(t,m=>st(m));c=sR(n.serverSyncTree_,l,f)}else{const f=st(t);c=Vl(n.serverSyncTree_,l,f)}let h=l;c.length>0&&(h=Ki(n,l)),ln(n.eventQueue_,h,c)}function _y(n,e){Hh(n,"connected",e),e===!1&&FR(n)}function OR(n,e){pt(e,(t,s)=>{Hh(n,t,s)})}function Hh(n,e,t){const s=new xe("/.info/"+e),o=st(t);n.infoData_.updateSnapshot(s,o);const l=Vl(n.infoSyncTree_,s,o);ln(n.eventQueue_,s,l)}function Gh(n){return n.nextWriteId_++}function LR(n,e,t,s,o){Ql(n,"set",{path:e.toString(),value:t,priority:s});const l=Yl(n),c=st(t,s),h=Oh(n.serverSyncTree_,e),f=Yv(c,h,l),m=Gh(n),y=Vv(n.serverSyncTree_,e,f,m,!0);Kl(n.eventQueue_,y),n.server_.put(e.toString(),c.val(!0),(v,x)=>{const k=v==="ok";k||St("set at "+e+" failed: "+v);const O=gr(n.serverSyncTree_,m,!k);ln(n.eventQueue_,e,O),$d(n,o,v,x)});const _=Kh(n,e);Ki(n,_),ln(n.eventQueue_,_,[])}function MR(n,e,t,s){Ql(n,"update",{path:e.toString(),value:t});let o=!0;const l=Yl(n),c={};if(pt(t,(h,f)=>{o=!1,c[h]=Kv($e(e,h),st(f),n.serverSyncTree_,l)}),o)ft("update() called with empty data.  Don't do anything."),$d(n,s,"ok",void 0);else{const h=Gh(n),f=iR(n.serverSyncTree_,e,c,h);Kl(n.eventQueue_,f),n.server_.merge(e.toString(),t,(m,y)=>{const _=m==="ok";_||St("update at "+e+" failed: "+m);const v=gr(n.serverSyncTree_,h,!_),x=v.length>0?Ki(n,e):e;ln(n.eventQueue_,x,v),$d(n,s,m,y)}),pt(t,m=>{const y=Kh(n,$e(e,m));Ki(n,y)}),ln(n.eventQueue_,e,[])}}function FR(n){Ql(n,"onDisconnectEvents");const e=Yl(n),t=gl();Ad(n.onDisconnect_,ke(),(o,l)=>{const c=Kv(o,l,n.serverSyncTree_,e);Pv(t,o,c)});let s=[];Ad(t,ke(),(o,l)=>{s=s.concat(Vl(n.serverSyncTree_,o,l));const c=Kh(n,o);Ki(n,c)}),n.onDisconnect_=gl(),ln(n.eventQueue_,ke(),s)}function jR(n,e,t){let s;fe(e._path)===".info"?s=my(n.infoSyncTree_,e,t):s=my(n.serverSyncTree_,e,t),nw(n.eventQueue_,e._path,s)}function UR(n,e,t){let s;fe(e._path)===".info"?s=Ud(n.infoSyncTree_,e,t):s=Ud(n.serverSyncTree_,e,t),nw(n.eventQueue_,e._path,s)}function zR(n){n.persistentConnection_&&n.persistentConnection_.interrupt(NR)}function Ql(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),ft(t,...e)}function $d(n,e,t,s){e&&ns(()=>{if(t==="ok")e(null);else{const o=(t||"error").toUpperCase();let l=o;s&&(l+=": "+s);const c=new Error(l);c.code=o,e(c)}})}function sw(n,e,t){return Oh(n.serverSyncTree_,e,t)||oe.EMPTY_NODE}function qh(n,e=n.transactionQueueTree_){if(e||Jl(n,e),is(e)){const t=aw(n,e);$(t.length>0,"Sending zero length transaction queue"),t.every(o=>o.status===0)&&$R(n,No(e),t)}else Jv(e)&&Gl(e,t=>{qh(n,t)})}function $R(n,e,t){const s=t.map(m=>m.currentWriteId),o=sw(n,e,s);let l=o;const c=o.hash();for(let m=0;m<t.length;m++){const y=t[m];$(y.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),y.status=1,y.retryCount++;const _=At(e,y.path);l=l.updateChild(_,y.currentOutputSnapshotRaw)}const h=l.val(!0),f=e;n.server_.put(f.toString(),h,m=>{Ql(n,"transaction put response",{path:f.toString(),status:m});let y=[];if(m==="ok"){const _=[];for(let v=0;v<t.length;v++)t[v].status=2,y=y.concat(gr(n.serverSyncTree_,t[v].currentWriteId)),t[v].onComplete&&_.push(()=>t[v].onComplete(null,!0,t[v].currentOutputSnapshotResolved)),t[v].unwatcher();Jl(n,Wh(n.transactionQueueTree_,e)),qh(n,n.transactionQueueTree_),ln(n.eventQueue_,e,y);for(let v=0;v<_.length;v++)ns(_[v])}else{if(m==="datastale")for(let _=0;_<t.length;_++)t[_].status===3?t[_].status=4:t[_].status=0;else{St("transaction at "+f.toString()+" failed: "+m);for(let _=0;_<t.length;_++)t[_].status=4,t[_].abortReason=m}Ki(n,e)}},c)}function Ki(n,e){const t=ow(n,e),s=No(t),o=aw(n,t);return WR(n,o,s),s}function WR(n,e,t){if(e.length===0)return;const s=[];let o=[];const c=e.filter(h=>h.status===0).map(h=>h.currentWriteId);for(let h=0;h<e.length;h++){const f=e[h],m=At(t,f.path);let y=!1,_;if($(m!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),f.status===4)y=!0,_=f.abortReason,o=o.concat(gr(n.serverSyncTree_,f.currentWriteId,!0));else if(f.status===0)if(f.retryCount>=PR)y=!0,_="maxretry",o=o.concat(gr(n.serverSyncTree_,f.currentWriteId,!0));else{const v=sw(n,f.path,c);f.currentInputSnapshot=v;const x=e[h].update(v.val());if(x!==void 0){ql("transaction failed: Data returned ",x,f.path);let k=st(x);typeof x=="object"&&x!=null&&Cn(x,".priority")||(k=k.updatePriority(v.getPriority()));const D=f.currentWriteId,U=Yl(n),V=Yv(k,v,U);f.currentOutputSnapshotRaw=k,f.currentOutputSnapshotResolved=V,f.currentWriteId=Gh(n),c.splice(c.indexOf(D),1),o=o.concat(Vv(n.serverSyncTree_,f.path,V,f.currentWriteId,f.applyLocally)),o=o.concat(gr(n.serverSyncTree_,D,!0))}else y=!0,_="nodata",o=o.concat(gr(n.serverSyncTree_,f.currentWriteId,!0))}ln(n.eventQueue_,t,o),o=[],y&&(e[h].status=2,(function(v){setTimeout(v,Math.floor(0))})(e[h].unwatcher),e[h].onComplete&&(_==="nodata"?s.push(()=>e[h].onComplete(null,!1,e[h].currentInputSnapshot)):s.push(()=>e[h].onComplete(new Error(_),!1,null))))}Jl(n,n.transactionQueueTree_);for(let h=0;h<s.length;h++)ns(s[h]);qh(n,n.transactionQueueTree_)}function ow(n,e){let t,s=n.transactionQueueTree_;for(t=fe(e);t!==null&&is(s)===void 0;)s=Wh(s,t),e=Pe(e),t=fe(e);return s}function aw(n,e){const t=[];return lw(n,e,t),t.sort((s,o)=>s.order-o.order),t}function lw(n,e,t){const s=is(e);if(s)for(let o=0;o<s.length;o++)t.push(s[o]);Gl(e,o=>{lw(n,o,t)})}function Jl(n,e){const t=is(e);if(t){let s=0;for(let o=0;o<t.length;o++)t[o].status!==2&&(t[s]=t[o],s++);t.length=s,Qv(e,t.length>0?t:void 0)}Gl(e,s=>{Jl(n,s)})}function Kh(n,e){const t=No(ow(n,e)),s=Wh(n.transactionQueueTree_,e);return _R(s,o=>{md(n,o)}),md(n,s),Xv(s,o=>{md(n,o)}),t}function md(n,e){const t=is(e);if(t){const s=[];let o=[],l=-1;for(let c=0;c<t.length;c++)t[c].status===3||(t[c].status===1?($(l===c-1,"All SENT items should be at beginning of queue."),l=c,t[c].status=3,t[c].abortReason="set"):($(t[c].status===0,"Unexpected transaction status in abort"),t[c].unwatcher(),o=o.concat(gr(n.serverSyncTree_,t[c].currentWriteId,!0)),t[c].onComplete&&s.push(t[c].onComplete.bind(null,new Error("set"),!1,null))));l===-1?Qv(e,void 0):t.length=l+1,ln(n.eventQueue_,No(e),o);for(let c=0;c<s.length;c++)ns(s[c])}}/**
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
 */function BR(n){let e="";const t=n.split("/");for(let s=0;s<t.length;s++)if(t[s].length>0){let o=t[s];try{o=decodeURIComponent(o.replace(/\+/g," "))}catch{}e+="/"+o}return e}function VR(n){const e={};n.charAt(0)==="?"&&(n=n.substring(1));for(const t of n.split("&")){if(t.length===0)continue;const s=t.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):St(`Invalid query segment '${t}' in query '${n}'`)}return e}const vy=function(n,e){const t=HR(n),s=t.namespace;t.domain==="firebase.com"&&zn(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&t.domain!=="localhost"&&zn("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||eT();const o=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new pv(t.host,t.secure,s,o,e,"",s!==t.subdomain),path:new xe(t.pathString)}},HR=function(n){let e="",t="",s="",o="",l="",c=!0,h="https",f=443;if(typeof n=="string"){let m=n.indexOf("//");m>=0&&(h=n.substring(0,m-1),n=n.substring(m+2));let y=n.indexOf("/");y===-1&&(y=n.length);let _=n.indexOf("?");_===-1&&(_=n.length),e=n.substring(0,Math.min(y,_)),y<_&&(o=BR(n.substring(y,_)));const v=VR(n.substring(Math.min(n.length,_)));m=e.indexOf(":"),m>=0?(c=h==="https"||h==="wss",f=parseInt(e.substring(m+1),10)):m=e.length;const x=e.slice(0,m);if(x.toLowerCase()==="localhost")t="localhost";else if(x.split(".").length<=2)t=x;else{const k=e.indexOf(".");s=e.substring(0,k).toLowerCase(),t=e.substring(k+1),l=s}"ns"in v&&(l=v.ns)}return{host:e,port:f,domain:t,subdomain:s,secure:c,scheme:h,pathString:o,namespace:l}};/**
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
 */const wy="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",GR=(function(){let n=0;const e=[];return function(t){const s=t===n;n=t;let o;const l=new Array(8);for(o=7;o>=0;o--)l[o]=wy.charAt(t%64),t=Math.floor(t/64);$(t===0,"Cannot push at time == 0");let c=l.join("");if(s){for(o=11;o>=0&&e[o]===63;o--)e[o]=0;e[o]++}else for(o=0;o<12;o++)e[o]=Math.floor(Math.random()*64);for(o=0;o<12;o++)c+=wy.charAt(e[o]);return $(c.length===20,"nextPushId: Length should be 20."),c}})();/**
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
 */class qR{constructor(e,t,s,o){this.eventType=e,this.eventRegistration=t,this.snapshot=s,this.prevName=o}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+ot(this.snapshot.exportVal())}}class KR{constructor(e,t,s){this.eventRegistration=e,this.error=t,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class YR{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return $(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class Yh{constructor(e,t,s,o){this._repo=e,this._path=t,this._queryParams=s,this._orderByCalled=o}get key(){return ge(this._path)?null:wh(this._path)}get ref(){return new kr(this._repo,this._path)}get _queryIdentifier(){const e=iy(this._queryParams),t=gh(e);return t==="{}"?"default":t}get _queryObject(){return iy(this._queryParams)}isEqual(e){if(e=at(e),!(e instanceof Yh))return!1;const t=this._repo===e._repo,s=Eh(this._path,e._path),o=this._queryIdentifier===e._queryIdentifier;return t&&s&&o}toJSON(){return this.toString()}toString(){return this._repo.toString()+FT(this._path)}}class kr extends Yh{constructor(e,t){super(e,t,new Ih,!1)}get parent(){const e=kv(this._path);return e===null?null:new kr(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Sl{constructor(e,t,s){this._node=e,this.ref=t,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new xe(e),s=Eo(this.ref,e);return new Sl(this._node.getChild(t),s,We)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,o)=>e(new Sl(o,Eo(this.ref,s),We)))}hasChild(e){const t=new xe(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Le(n,e){return n=at(n),n._checkNotDeleted("ref"),e!==void 0?Eo(n._root,e):n._root}function Eo(n,e){return n=at(n),fe(n._path)===null?TR("child","path",e):tw("child","path",e),new kr(n._repo,$e(n._path,e))}function Zs(n,e){n=at(n),Vh("push",n._path),ew("push",e,n._path,!0);const t=iw(n._repo),s=GR(t),o=Eo(n,s),l=Eo(n,s);let c;return e!=null?c=uw(l,e).then(()=>l):c=Promise.resolve(l),o.then=c.then.bind(c),o.catch=c.then.bind(c,void 0),o}function Pi(n){return Vh("remove",n._path),uw(n,null)}function uw(n,e){n=at(n),Vh("set",n._path),ew("set",e,n._path,!1);const t=new To;return LR(n._repo,n._path,e,null,t.wrapCallback(()=>{})),t.promise}function ur(n,e){IR("update",e,n._path);const t=new To;return MR(n._repo,n._path,e,t.wrapCallback(()=>{})),t.promise}class Qh{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,t){const s=t._queryParams.getIndex();return new qR("value",this,new Sl(e.snapshotNode,new kr(t._repo,t._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new KR(this,e,t):null}matches(e){return e instanceof Qh?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function QR(n,e,t,s,o){const l=new YR(t,void 0),c=new Qh(l);return jR(n._repo,n,c),()=>UR(n._repo,n,c)}function eo(n,e,t,s){return QR(n,"value",e)}Yx(kr);tR(kr);/**
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
 */const JR="FIREBASE_DATABASE_EMULATOR_HOST",Wd={};let XR=!1;function ZR(n,e,t,s){const o=e.lastIndexOf(":"),l=e.substring(0,o),c=Zi(l);n.repoInfo_=new pv(e,c,n.repoInfo_.namespace,n.repoInfo_.webSocketOnly,n.repoInfo_.nodeAdmin,n.repoInfo_.persistenceKey,n.repoInfo_.includeNamespaceInQueryParams,!0,t),s&&(n.authTokenProvider_=s)}function eb(n,e,t,s,o){let l=s||n.options.databaseURL;l===void 0&&(n.options.projectId||zn("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),ft("Using default host for project ",n.options.projectId),l=`${n.options.projectId}-default-rtdb.firebaseio.com`);let c=vy(l,o),h=c.repoInfo,f;typeof process<"u"&&zg&&(f=zg[JR]),f?(l=`http://${f}?ns=${h.namespace}`,c=vy(l,o),h=c.repoInfo):c.repoInfo.secure;const m=new dT(n.name,n.options,e);xR("Invalid Firebase Database URL",c),ge(c.path)||zn("Database URL must point to the root of a Firebase Database (not including a child path).");const y=nb(h,n,m,new cT(n,t));return new rb(y,n)}function tb(n,e){const t=Wd[e];(!t||t[n.key]!==n)&&zn(`Database ${e}(${n.repoInfo_}) has already been deleted.`),zR(n),delete t[n.key]}function nb(n,e,t,s){let o=Wd[e.name];o||(o={},Wd[e.name]=o);let l=o[n.toURLString()];return l&&zn("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),l=new AR(n,XR,t,s),o[n.toURLString()]=l,l}class rb{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(DR(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new kr(this._repo,ke())),this._rootInternal}_delete(){return this._rootInternal!==null&&(tb(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&zn("Cannot call "+e+" on a deleted database.")}}function ib(n=lh(),e){const t=ei(n,"database").getImmediate({identifier:e});if(!t._instanceStarted){const s=Qk("database");s&&sb(t,...s)}return t}function sb(n,e,t,s={}){n=at(n),n._checkNotDeleted("useEmulator");const o=`${e}:${t}`,l=n._repoInternal;if(n._instanceStarted){if(o===n._repoInternal.repoInfo_.host&&wr(s,l.repoInfo_.emulatorOptions))return;zn("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let c;if(l.repoInfo_.nodeAdmin)s.mockUserToken&&zn('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),c=new el(el.OWNER);else if(s.mockUserToken){const h=typeof s.mockUserToken=="string"?s.mockUserToken:Jk(s.mockUserToken,n.app.options.projectId);c=new el(h)}Zi(e)&&(w_(e),E_("Database",!0)),ZR(l,o,s,c)}/**
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
 */function ob(n){K1(ts),wn(new an("database",(e,{instanceIdentifier:t})=>{const s=e.getProvider("app").getImmediate(),o=e.getProvider("auth-internal"),l=e.getProvider("app-check-internal");return eb(s,o,l,t)},"PUBLIC").setMultipleInstances(!0)),qt($g,Wg,n),qt($g,Wg,"esm2020")}Mn.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)};Mn.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)};ob();function cw(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const ab=cw,dw=new Zr("auth","Firebase",cw());/**
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
 */const Il=new jl("@firebase/auth");function lb(n,...e){Il.logLevel<=Te.WARN&&Il.warn(`Auth (${ts}): ${n}`,...e)}function tl(n,...e){Il.logLevel<=Te.ERROR&&Il.error(`Auth (${ts}): ${n}`,...e)}/**
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
 */function un(n,...e){throw Jh(n,...e)}function _n(n,...e){return Jh(n,...e)}function hw(n,e,t){const s={...ab(),[e]:t};return new Zr("auth","Firebase",s).create(e,{appName:n.name})}function Fn(n){return hw(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Jh(n,...e){if(typeof n!="string"){const t=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=n.name),n._errorFactory.create(t,...s)}return dw.create(n,...e)}function se(n,e,...t){if(!n)throw Jh(e,...t)}function Dn(n){const e="INTERNAL ASSERTION FAILED: "+n;throw tl(e),new Error(e)}function $n(n,e){n||Dn(e)}/**
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
 */function Bd(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.href)||""}function ub(){return Ey()==="http:"||Ey()==="https:"}function Ey(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.protocol)||null}/**
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
 */function cb(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(ub()||C_()||"connection"in navigator)?navigator.onLine:!0}function db(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class Po{constructor(e,t){this.shortDelay=e,this.longDelay=t,$n(t>e,"Short delay should be less than long delay!"),this.isMobile=oh()||k_()}get(){return cb()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Xh(n,e){$n(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class fw{static initialize(e,t,s){this.fetchImpl=e,t&&(this.headersImpl=t),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Dn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Dn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Dn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const fb=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],pb=new Po(3e4,6e4);function Sr(n,e){return n.tenantId&&!e.tenantId?{...e,tenantId:n.tenantId}:e}async function Ir(n,e,t,s,o={}){return pw(n,o,async()=>{let l={},c={};s&&(e==="GET"?c=s:l={body:JSON.stringify(s)});const h=es({key:n.config.apiKey,...c}).slice(1),f=await n._getAdditionalHeaders();f["Content-Type"]="application/json",n.languageCode&&(f["X-Firebase-Locale"]=n.languageCode);const m={method:e,headers:f,...l};return eS()||(m.referrerPolicy="no-referrer"),n.emulatorConfig&&Zi(n.emulatorConfig.host)&&(m.credentials="include"),fw.fetch()(await mw(n,n.config.apiHost,t,h),m)})}async function pw(n,e,t){n._canInitEmulator=!1;const s={...hb,...e};try{const o=new gb(n),l=await Promise.race([t(),o.promise]);o.clearNetworkTimeout();const c=await l.json();if("needConfirmation"in c)throw Ka(n,"account-exists-with-different-credential",c);if(l.ok&&!("errorMessage"in c))return c;{const h=l.ok?c.errorMessage:c.error.message,[f,m]=h.split(" : ");if(f==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ka(n,"credential-already-in-use",c);if(f==="EMAIL_EXISTS")throw Ka(n,"email-already-in-use",c);if(f==="USER_DISABLED")throw Ka(n,"user-disabled",c);const y=s[f]||f.toLowerCase().replace(/[_\s]+/g,"-");if(m)throw hw(n,y,m);un(n,y)}}catch(o){if(o instanceof En)throw o;un(n,"network-request-failed",{message:String(o)})}}async function Ao(n,e,t,s,o={}){const l=await Ir(n,e,t,s,o);return"mfaPendingCredential"in l&&un(n,"multi-factor-auth-required",{_serverResponse:l}),l}async function mw(n,e,t,s){const o=`${e}${t}?${s}`,l=n,c=l.config.emulator?Xh(n.config,o):`${n.config.apiScheme}://${o}`;return fb.includes(t)&&(await l._persistenceManagerAvailable,l._getPersistenceType()==="COOKIE")?l._getPersistence()._getFinalTarget(c).toString():c}function mb(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class gb{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,s)=>{this.timer=setTimeout(()=>s(_n(this.auth,"network-request-failed")),pb.get())})}}function Ka(n,e,t){const s={appName:n.name};t.email&&(s.email=t.email),t.phoneNumber&&(s.phoneNumber=t.phoneNumber);const o=_n(n,e,s);return o.customData._tokenResponse=t,o}function Cy(n){return n!==void 0&&n.enterprise!==void 0}class yb{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return mb(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function _b(n,e){return Ir(n,"GET","/v2/recaptchaConfig",Sr(n,e))}/**
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
 */async function vb(n,e){return Ir(n,"POST","/v1/accounts:delete",e)}async function Tl(n,e){return Ir(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function co(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function wb(n,e=!1){const t=at(n),s=await t.getIdToken(e),o=Zh(s);se(o&&o.exp&&o.auth_time&&o.iat,t.auth,"internal-error");const l=typeof o.firebase=="object"?o.firebase:void 0,c=l==null?void 0:l.sign_in_provider;return{claims:o,token:s,authTime:co(gd(o.auth_time)),issuedAtTime:co(gd(o.iat)),expirationTime:co(gd(o.exp)),signInProvider:c||null,signInSecondFactor:(l==null?void 0:l.sign_in_second_factor)||null}}function gd(n){return Number(n)*1e3}function Zh(n){const[e,t,s]=n.split(".");if(e===void 0||t===void 0||s===void 0)return tl("JWT malformed, contained fewer than 3 sections"),null;try{const o=al(t);return o?JSON.parse(o):(tl("Failed to decode base64 JWT payload"),null)}catch(o){return tl("Caught error parsing JWT payload as JSON",o==null?void 0:o.toString()),null}}function ky(n){const e=Zh(n);return se(e,"internal-error"),se(typeof e.exp<"u","internal-error"),se(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Co(n,e,t=!1){if(t)return e;try{return await e}catch(s){throw s instanceof En&&Eb(s)&&n.auth.currentUser===n&&await n.auth.signOut(),s}}function Eb({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class Cb{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const s=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Vd{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=co(this.lastLoginAt),this.creationTime=co(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function xl(n){var _;const e=n.auth,t=await n.getIdToken(),s=await Co(n,Tl(e,{idToken:t}));se(s==null?void 0:s.users.length,e,"internal-error");const o=s.users[0];n._notifyReloadListener(o);const l=(_=o.providerUserInfo)!=null&&_.length?gw(o.providerUserInfo):[],c=Sb(n.providerData,l),h=n.isAnonymous,f=!(n.email&&o.passwordHash)&&!(c!=null&&c.length),m=h?f:!1,y={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:c,metadata:new Vd(o.createdAt,o.lastLoginAt),isAnonymous:m};Object.assign(n,y)}async function kb(n){const e=at(n);await xl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Sb(n,e){return[...n.filter(s=>!e.some(o=>o.providerId===s.providerId)),...e]}function gw(n){return n.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
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
 */async function Ib(n,e){const t=await pw(n,{},async()=>{const s=es({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:l}=n.config,c=await mw(n,o,"/v1/token",`key=${l}`),h=await n._getAdditionalHeaders();h["Content-Type"]="application/x-www-form-urlencoded";const f={method:"POST",headers:h,body:s};return n.emulatorConfig&&Zi(n.emulatorConfig.host)&&(f.credentials="include"),fw.fetch()(c,f)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function Tb(n,e){return Ir(n,"POST","/v2/accounts:revokeToken",Sr(n,e))}/**
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
 */class zi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){se(e.idToken,"internal-error"),se(typeof e.idToken<"u","internal-error"),se(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):ky(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){se(e.length!==0,"internal-error");const t=ky(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(se(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:s,refreshToken:o,expiresIn:l}=await Ib(e,t);this.updateTokensAndExpiration(s,o,Number(l))}updateTokensAndExpiration(e,t,s){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,t){const{refreshToken:s,accessToken:o,expirationTime:l}=t,c=new zi;return s&&(se(typeof s=="string","internal-error",{appName:e}),c.refreshToken=s),o&&(se(typeof o=="string","internal-error",{appName:e}),c.accessToken=o),l&&(se(typeof l=="number","internal-error",{appName:e}),c.expirationTime=l),c}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new zi,this.toJSON())}_performRefresh(){return Dn("not implemented")}}/**
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
 */function cr(n,e){se(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class sn{constructor({uid:e,auth:t,stsTokenManager:s,...o}){this.providerId="firebase",this.proactiveRefresh=new Cb(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new Vd(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){const t=await Co(this,this.stsTokenManager.getToken(this.auth,e));return se(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return wb(this,e)}reload(){return kb(this)}_assign(e){this!==e&&(se(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new sn({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){se(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),t&&await xl(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Ht(this.auth.app))return Promise.reject(Fn(this.auth));const e=await this.getIdToken();return await Co(this,vb(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const s=t.displayName??void 0,o=t.email??void 0,l=t.phoneNumber??void 0,c=t.photoURL??void 0,h=t.tenantId??void 0,f=t._redirectEventId??void 0,m=t.createdAt??void 0,y=t.lastLoginAt??void 0,{uid:_,emailVerified:v,isAnonymous:x,providerData:k,stsTokenManager:O}=t;se(_&&O,e,"internal-error");const D=zi.fromJSON(this.name,O);se(typeof _=="string",e,"internal-error"),cr(s,e.name),cr(o,e.name),se(typeof v=="boolean",e,"internal-error"),se(typeof x=="boolean",e,"internal-error"),cr(l,e.name),cr(c,e.name),cr(h,e.name),cr(f,e.name),cr(m,e.name),cr(y,e.name);const U=new sn({uid:_,auth:e,email:o,emailVerified:v,displayName:s,isAnonymous:x,photoURL:c,phoneNumber:l,tenantId:h,stsTokenManager:D,createdAt:m,lastLoginAt:y});return k&&Array.isArray(k)&&(U.providerData=k.map(V=>({...V}))),f&&(U._redirectEventId=f),U}static async _fromIdTokenResponse(e,t,s=!1){const o=new zi;o.updateFromServerResponse(t);const l=new sn({uid:t.localId,auth:e,stsTokenManager:o,isAnonymous:s});return await xl(l),l}static async _fromGetAccountInfoResponse(e,t,s){const o=t.users[0];se(o.localId!==void 0,"internal-error");const l=o.providerUserInfo!==void 0?gw(o.providerUserInfo):[],c=!(o.email&&o.passwordHash)&&!(l!=null&&l.length),h=new zi;h.updateFromIdToken(s);const f=new sn({uid:o.localId,auth:e,stsTokenManager:h,isAnonymous:c}),m={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:l,metadata:new Vd(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!(l!=null&&l.length)};return Object.assign(f,m),f}}/**
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
 */const Sy=new Map;function On(n){$n(n instanceof Function,"Expected a class definition");let e=Sy.get(n);return e?($n(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Sy.set(n,e),e)}/**
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
 */class yw{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}yw.type="NONE";const Iy=yw;/**
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
 */function nl(n,e,t){return`firebase:${n}:${e}:${t}`}class $i{constructor(e,t,s){this.persistence=e,this.auth=t,this.userKey=s;const{config:o,name:l}=this.auth;this.fullUserKey=nl(this.userKey,o.apiKey,l),this.fullPersistenceKey=nl("persistence",o.apiKey,l),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await Tl(this.auth,{idToken:e}).catch(()=>{});return t?sn._fromGetAccountInfoResponse(this.auth,t,e):null}return sn._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,s="authUser"){if(!t.length)return new $i(On(Iy),e,s);const o=(await Promise.all(t.map(async m=>{if(await m._isAvailable())return m}))).filter(m=>m);let l=o[0]||On(Iy);const c=nl(s,e.config.apiKey,e.name);let h=null;for(const m of t)try{const y=await m._get(c);if(y){let _;if(typeof y=="string"){const v=await Tl(e,{idToken:y}).catch(()=>{});if(!v)break;_=await sn._fromGetAccountInfoResponse(e,v,y)}else _=sn._fromJSON(e,y);m!==l&&(h=_),l=m;break}}catch{}const f=o.filter(m=>m._shouldAllowMigration);return!l._shouldAllowMigration||!f.length?new $i(l,e,s):(l=f[0],h&&await l._set(c,h.toJSON()),await Promise.all(t.map(async m=>{if(m!==l)try{await m._remove(c)}catch{}})),new $i(l,e,s))}}/**
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
 */function Ty(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Ew(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(_w(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(kw(e))return"Blackberry";if(Sw(e))return"Webos";if(vw(e))return"Safari";if((e.includes("chrome/")||ww(e))&&!e.includes("edge/"))return"Chrome";if(Cw(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=n.match(t);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function _w(n=It()){return/firefox\//i.test(n)}function vw(n=It()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function ww(n=It()){return/crios\//i.test(n)}function Ew(n=It()){return/iemobile/i.test(n)}function Cw(n=It()){return/android/i.test(n)}function kw(n=It()){return/blackberry/i.test(n)}function Sw(n=It()){return/webos/i.test(n)}function ef(n=It()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function xb(n=It()){var e;return ef(n)&&!!((e=window.navigator)!=null&&e.standalone)}function Rb(){return tS()&&document.documentMode===10}function Iw(n=It()){return ef(n)||Cw(n)||Sw(n)||kw(n)||/windows phone/i.test(n)||Ew(n)}/**
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
 */function Tw(n,e=[]){let t;switch(n){case"Browser":t=Ty(It());break;case"Worker":t=`${Ty(It())}-${n}`;break;default:t=n}const s=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${ts}/${s}`}/**
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
 */class bb{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const s=l=>new Promise((c,h)=>{try{const f=e(l);c(f)}catch(f){h(f)}});s.onAbort=t,this.queue.push(s);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const s of this.queue)await s(e),s.onAbort&&t.push(s.onAbort)}catch(s){t.reverse();for(const o of t)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */async function Nb(n,e={}){return Ir(n,"GET","/v2/passwordPolicy",Sr(n,e))}/**
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
 */const Pb=6;class Ab{constructor(e){var s;const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??Pb,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((s=e.allowedNonAlphanumericCharacters)==null?void 0:s.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const s=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;s&&(t.meetsMinPasswordLength=e.length>=s),o&&(t.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let s;for(let o=0;o<e.length;o++)s=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(t,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,t,s,o,l){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=l))}}/**
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
 */class Db{constructor(e,t,s,o){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=s,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new xy(this),this.idTokenSubscription=new xy(this),this.beforeStateQueue=new bb(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=dw,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion,this._persistenceManagerAvailable=new Promise(l=>this._resolvePersistenceManagerAvailable=l)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=On(t)),this._initializationPromise=this.queue(async()=>{var s,o,l;if(!this._deleted&&(this.persistenceManager=await $i.create(this,e),(s=this._resolvePersistenceManagerAvailable)==null||s.call(this),!this._deleted)){if((o=this._popupRedirectResolver)!=null&&o._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((l=this.currentUser)==null?void 0:l.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Tl(this,{idToken:e}),s=await sn._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(s)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var l;if(Ht(this.app)){const c=this.app.settings.authIdToken;return c?new Promise(h=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(c).then(h,h))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let s=t,o=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const c=(l=this.redirectUser)==null?void 0:l._redirectEventId,h=s==null?void 0:s._redirectEventId,f=await this.tryRedirectSignIn(e);(!c||c===h)&&(f!=null&&f.user)&&(s=f.user,o=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(s)}catch(c){s=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(c))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return se(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await xl(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=db()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Ht(this.app))return Promise.reject(Fn(this));const t=e?at(e):null;return t&&se(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&se(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Ht(this.app)?Promise.reject(Fn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Ht(this.app)?Promise.reject(Fn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(On(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Nb(this),t=new Ab(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Zr("auth","Firebase",e())}onAuthStateChanged(e,t,s){return this.registerStateListener(this.authStateSubscription,e,t,s)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,s){return this.registerStateListener(this.idTokenSubscription,e,t,s)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(s.tenantId=this.tenantId),await Tb(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,t){const s=await this.getOrInitRedirectPersistenceManager(t);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&On(e)||this._popupRedirectResolver;se(t,this,"argument-error"),this.redirectPersistenceManager=await $i.create(this,[On(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,s;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)==null?void 0:t._redirectEventId)===e?this._currentUser:((s=this.redirectUser)==null?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((t=this.currentUser)==null?void 0:t.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,s,o){if(this._deleted)return()=>{};const l=typeof t=="function"?t:t.next.bind(t);let c=!1;const h=this._isInitialized?Promise.resolve():this._initializationPromise;if(se(h,this,"internal-error"),h.then(()=>{c||l(this.currentUser)}),typeof t=="function"){const f=e.addObserver(t,s,o);return()=>{c=!0,f()}}else{const f=e.addObserver(t);return()=>{c=!0,f()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return se(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Tw(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var o;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await((o=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:o.getHeartbeatsHeader());t&&(e["X-Firebase-Client"]=t);const s=await this._getAppCheckToken();return s&&(e["X-Firebase-AppCheck"]=s),e}async _getAppCheckToken(){var t;if(Ht(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:t.getToken());return e!=null&&e.error&&lb(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function ri(n){return at(n)}class xy{constructor(e){this.auth=e,this.observer=null,this.addObserver=cS(t=>this.observer=t)}get next(){return se(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Xl={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Ob(n){Xl=n}function xw(n){return Xl.loadJS(n)}function Lb(){return Xl.recaptchaEnterpriseScript}function Mb(){return Xl.gapiScript}function Fb(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class jb{constructor(){this.enterprise=new Ub}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class Ub{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const zb="recaptcha-enterprise",Rw="NO_RECAPTCHA";class $b{constructor(e){this.type=zb,this.auth=ri(e)}async verify(e="verify",t=!1){async function s(l){if(!t){if(l.tenantId==null&&l._agentRecaptchaConfig!=null)return l._agentRecaptchaConfig.siteKey;if(l.tenantId!=null&&l._tenantRecaptchaConfigs[l.tenantId]!==void 0)return l._tenantRecaptchaConfigs[l.tenantId].siteKey}return new Promise(async(c,h)=>{_b(l,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(f=>{if(f.recaptchaKey===void 0)h(new Error("recaptcha Enterprise site key undefined"));else{const m=new yb(f);return l.tenantId==null?l._agentRecaptchaConfig=m:l._tenantRecaptchaConfigs[l.tenantId]=m,c(m.siteKey)}}).catch(f=>{h(f)})})}function o(l,c,h){const f=window.grecaptcha;Cy(f)?f.enterprise.ready(()=>{f.enterprise.execute(l,{action:e}).then(m=>{c(m)}).catch(()=>{c(Rw)})}):h(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new jb().execute("siteKey",{action:"verify"}):new Promise((l,c)=>{s(this.auth).then(h=>{if(!t&&Cy(window.grecaptcha))o(h,l,c);else{if(typeof window>"u"){c(new Error("RecaptchaVerifier is only supported in browser"));return}let f=Lb();f.length!==0&&(f+=h),xw(f).then(()=>{o(h,l,c)}).catch(m=>{c(m)})}}).catch(h=>{c(h)})})}}async function Ry(n,e,t,s=!1,o=!1){const l=new $b(n);let c;if(o)c=Rw;else try{c=await l.verify(t)}catch{c=await l.verify(t,!0)}const h={...e};if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in h){const f=h.phoneEnrollmentInfo.phoneNumber,m=h.phoneEnrollmentInfo.recaptchaToken;Object.assign(h,{phoneEnrollmentInfo:{phoneNumber:f,recaptchaToken:m,captchaResponse:c,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in h){const f=h.phoneSignInInfo.recaptchaToken;Object.assign(h,{phoneSignInInfo:{recaptchaToken:f,captchaResponse:c,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return h}return s?Object.assign(h,{captchaResp:c}):Object.assign(h,{captchaResponse:c}),Object.assign(h,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(h,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),h}async function Hd(n,e,t,s,o){var l;if((l=n._getRecaptchaConfig())!=null&&l.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const c=await Ry(n,e,t,t==="getOobCode");return s(n,c)}else return s(n,e).catch(async c=>{if(c.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const h=await Ry(n,e,t,t==="getOobCode");return s(n,h)}else return Promise.reject(c)})}/**
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
 */function Wb(n,e){const t=ei(n,"auth");if(t.isInitialized()){const o=t.getImmediate(),l=t.getOptions();if(wr(l,e??{}))return o;un(o,"already-initialized")}return t.initialize({options:e})}function Bb(n,e){const t=(e==null?void 0:e.persistence)||[],s=(Array.isArray(t)?t:[t]).map(On);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function Vb(n,e,t){const s=ri(n);se(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const o=!1,l=bw(e),{host:c,port:h}=Hb(e),f=h===null?"":`:${h}`,m={url:`${l}//${c}${f}/`},y=Object.freeze({host:c,port:h,protocol:l.replace(":",""),options:Object.freeze({disableWarnings:o})});if(!s._canInitEmulator){se(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),se(wr(m,s.config.emulator)&&wr(y,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=m,s.emulatorConfig=y,s.settings.appVerificationDisabledForTesting=!0,Zi(c)?(w_(`${l}//${c}${f}`),E_("Auth",!0)):Gb()}function bw(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function Hb(n){const e=bw(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const s=t[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(s);if(o){const l=o[1];return{host:l,port:by(s.substr(l.length+1))}}else{const[l,c]=s.split(":");return{host:l,port:by(c)}}}function by(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function Gb(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class tf{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Dn("not implemented")}_getIdTokenResponse(e){return Dn("not implemented")}_linkToIdToken(e,t){return Dn("not implemented")}_getReauthenticationResolver(e){return Dn("not implemented")}}async function qb(n,e){return Ir(n,"POST","/v1/accounts:signUp",e)}/**
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
 */async function Kb(n,e){return Ao(n,"POST","/v1/accounts:signInWithPassword",Sr(n,e))}/**
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
 */async function Yb(n,e){return Ao(n,"POST","/v1/accounts:signInWithEmailLink",Sr(n,e))}async function Qb(n,e){return Ao(n,"POST","/v1/accounts:signInWithEmailLink",Sr(n,e))}/**
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
 */class ko extends tf{constructor(e,t,s,o=null){super("password",s),this._email=e,this._password=t,this._tenantId=o}static _fromEmailAndPassword(e,t){return new ko(e,t,"password")}static _fromEmailAndCode(e,t,s=null){return new ko(e,t,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Hd(e,t,"signInWithPassword",Kb);case"emailLink":return Yb(e,{email:this._email,oobCode:this._password});default:un(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const s={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Hd(e,s,"signUpPassword",qb);case"emailLink":return Qb(e,{idToken:t,email:this._email,oobCode:this._password});default:un(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Wi(n,e){return Ao(n,"POST","/v1/accounts:signInWithIdp",Sr(n,e))}/**
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
 */const Jb="http://localhost";class Jr extends tf{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Jr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):un("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:o,...l}=t;if(!s||!o)return null;const c=new Jr(s,o);return c.idToken=l.idToken||void 0,c.accessToken=l.accessToken||void 0,c.secret=l.secret,c.nonce=l.nonce,c.pendingToken=l.pendingToken||null,c}_getIdTokenResponse(e){const t=this.buildRequest();return Wi(e,t)}_linkToIdToken(e,t){const s=this.buildRequest();return s.idToken=t,Wi(e,s)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Wi(e,t)}buildRequest(){const e={requestUri:Jb,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=es(t)}return e}}/**
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
 */function Xb(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Zb(n){const e=no(ro(n)).link,t=e?no(ro(e)).deep_link_id:null,s=no(ro(n)).deep_link_id;return(s?no(ro(s)).link:null)||s||t||e||n}class nf{constructor(e){const t=no(ro(e)),s=t.apiKey??null,o=t.oobCode??null,l=Xb(t.mode??null);se(s&&o&&l,"argument-error"),this.apiKey=s,this.operation=l,this.code=o,this.continueUrl=t.continueUrl??null,this.languageCode=t.lang??null,this.tenantId=t.tenantId??null}static parseLink(e){const t=Zb(e);try{return new nf(t)}catch{return null}}}/**
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
 */class ss{constructor(){this.providerId=ss.PROVIDER_ID}static credential(e,t){return ko._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const s=nf.parseLink(t);return se(s,"argument-error"),ko._fromEmailAndCode(e,s.code,s.tenantId)}}ss.PROVIDER_ID="password";ss.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ss.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Do extends Nw{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */async function eN(n,e){return Ao(n,"POST","/v1/accounts:signUp",Sr(n,e))}/**
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
 */class Xr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,s,o=!1){const l=await sn._fromIdTokenResponse(e,s,o),c=Ny(s);return new Xr({user:l,providerId:c,_tokenResponse:s,operationType:t})}static async _forOperation(e,t,s){await e._updateTokensIfNecessary(s,!0);const o=Ny(s);return new Xr({user:e,providerId:o,_tokenResponse:s,operationType:t})}}function Ny(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */class Rl extends En{constructor(e,t,s,o){super(t.code,t.message),this.operationType=s,this.user=o,Object.setPrototypeOf(this,Rl.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,t,s,o){return new Rl(e,t,s,o)}}function Pw(n,e,t,s){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(l=>{throw l.code==="auth/multi-factor-auth-required"?Rl._fromErrorAndOperation(n,l,e,s):l})}async function tN(n,e,t=!1){const s=await Co(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Xr._forOperation(n,"link",s)}/**
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
 */async function nN(n,e,t=!1){const{auth:s}=n;if(Ht(s.app))return Promise.reject(Fn(s));const o="reauthenticate";try{const l=await Co(n,Pw(s,o,e,n),t);se(l.idToken,s,"internal-error");const c=Zh(l.idToken);se(c,s,"internal-error");const{sub:h}=c;return se(n.uid===h,s,"user-mismatch"),Xr._forOperation(n,o,l)}catch(l){throw(l==null?void 0:l.code)==="auth/user-not-found"&&un(s,"user-mismatch"),l}}/**
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
 */async function Aw(n,e,t=!1){if(Ht(n.app))return Promise.reject(Fn(n));const s="signIn",o=await Pw(n,s,e),l=await Xr._fromIdTokenResponse(n,s,o);return t||await n._updateCurrentUser(l.user),l}async function rN(n,e){return Aw(ri(n),e)}/**
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
 */async function Dw(n){const e=ri(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function iN(n,e,t){if(Ht(n.app))return Promise.reject(Fn(n));const s=ri(n),c=await Hd(s,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",eN).catch(f=>{throw f.code==="auth/password-does-not-meet-requirements"&&Dw(n),f}),h=await Xr._fromIdTokenResponse(s,"signIn",c);return await s._updateCurrentUser(h.user),h}function sN(n,e,t){return Ht(n.app)?Promise.reject(Fn(n)):rN(at(n),ss.credential(e,t)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&Dw(n),s})}function oN(n,e,t,s){return at(n).onIdTokenChanged(e,t,s)}function aN(n,e,t){return at(n).beforeAuthStateChanged(e,t)}function lN(n,e,t,s){return at(n).onAuthStateChanged(e,t,s)}function uN(n){return at(n).signOut()}const bl="__sak";/**
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
 */class Ow{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(bl,"1"),this.storage.removeItem(bl),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const cN=1e3,dN=10;class Lw extends Ow{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Iw(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const s=this.storage.getItem(t),o=this.localCache[t];s!==o&&e(t,o,s)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((c,h,f)=>{this.notifyListeners(c,f)});return}const s=e.key;t?this.detachListener():this.stopPolling();const o=()=>{const c=this.storage.getItem(s);!t&&this.localCache[s]===c||this.notifyListeners(s,c)},l=this.storage.getItem(s);Rb()&&l!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,dN):o()}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:s}),!0)})},cN)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Lw.type="LOCAL";const hN=Lw;/**
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
 */class Mw extends Ow{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Mw.type="SESSION";const Fw=Mw;/**
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
 */function fN(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class Zl{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(o=>o.isListeningto(e));if(t)return t;const s=new Zl(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:s,eventType:o,data:l}=t.data,c=this.handlersMap[o];if(!(c!=null&&c.size))return;t.ports[0].postMessage({status:"ack",eventId:s,eventType:o});const h=Array.from(c).map(async m=>m(t.origin,l)),f=await fN(h);t.ports[0].postMessage({status:"done",eventId:s,eventType:o,response:f})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Zl.receivers=[];/**
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
 */class pN{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,s=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let l,c;return new Promise((h,f)=>{const m=rf("",20);o.port1.start();const y=setTimeout(()=>{f(new Error("unsupported_event"))},s);c={messageChannel:o,onMessage(_){const v=_;if(v.data.eventId===m)switch(v.data.status){case"ack":clearTimeout(y),l=setTimeout(()=>{f(new Error("timeout"))},3e3);break;case"done":clearTimeout(l),h(v.data.response);break;default:clearTimeout(y),clearTimeout(l),f(new Error("invalid_response"));break}}},this.handlers.add(c),o.port1.addEventListener("message",c.onMessage),this.target.postMessage({eventType:e,eventId:m,data:t},[o.port2])}).finally(()=>{c&&this.removeMessageHandler(c)})}}/**
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
 */function vn(){return window}function mN(n){vn().location.href=n}/**
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
 */function jw(){return typeof vn().WorkerGlobalScope<"u"&&typeof vn().importScripts=="function"}async function gN(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function yN(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)==null?void 0:n.controller)||null}function _N(){return jw()?self:null}/**
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
 */const Uw="firebaseLocalStorageDb",vN=1,Nl="firebaseLocalStorage",zw="fbase_key";class Oo{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function eu(n,e){return n.transaction([Nl],e?"readwrite":"readonly").objectStore(Nl)}function wN(){const n=indexedDB.deleteDatabase(Uw);return new Oo(n).toPromise()}function Gd(){const n=indexedDB.open(Uw,vN);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const s=n.result;try{s.createObjectStore(Nl,{keyPath:zw})}catch(o){t(o)}}),n.addEventListener("success",async()=>{const s=n.result;s.objectStoreNames.contains(Nl)?e(s):(s.close(),await wN(),e(await Gd()))})})}async function Py(n,e,t){const s=eu(n,!0).put({[zw]:e,value:t});return new Oo(s).toPromise()}async function EN(n,e){const t=eu(n,!1).get(e),s=await new Oo(t).toPromise();return s===void 0?null:s.value}function Ay(n,e){const t=eu(n,!0).delete(e);return new Oo(t).toPromise()}const CN=800,kN=3;class $w{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Gd(),this.db)}async _withRetries(e){let t=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(t++>kN)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return jw()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Zl._getInstance(_N()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var t,s;if(this.activeServiceWorker=await gN(),!this.activeServiceWorker)return;this.sender=new pN(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(t=e[0])!=null&&t.fulfilled&&(s=e[0])!=null&&s.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||yN()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Gd();return await Py(e,bl,"1"),await Ay(e,bl),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(s=>Py(s,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(s=>EN(s,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Ay(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const l=eu(o,!1).getAll();return new Oo(l).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],s=new Set;if(e.length!==0)for(const{fbase_key:o,value:l}of e)s.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(l)&&(this.notifyListeners(o,l),t.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!s.has(o)&&(this.notifyListeners(o,null),t.push(o));return t}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),CN)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}$w.type="LOCAL";const SN=$w;new Po(3e4,6e4);/**
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
 */function IN(n,e){return e?On(e):(se(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class sf extends tf{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Wi(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Wi(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Wi(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function TN(n){return Aw(n.auth,new sf(n),n.bypassAuthState)}function xN(n){const{auth:e,user:t}=n;return se(t,e,"internal-error"),nN(t,new sf(n),n.bypassAuthState)}async function RN(n){const{auth:e,user:t}=n;return se(t,e,"internal-error"),tN(t,new sf(n),n.bypassAuthState)}/**
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
 */class Ww{constructor(e,t,s,o,l=!1){this.auth=e,this.resolver=s,this.user=o,this.bypassAuthState=l,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:s,postBody:o,tenantId:l,error:c,type:h}=e;if(c){this.reject(c);return}const f={auth:this.auth,requestUri:t,sessionId:s,tenantId:l||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(h)(f))}catch(m){this.reject(m)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return TN;case"linkViaPopup":case"linkViaRedirect":return RN;case"reauthViaPopup":case"reauthViaRedirect":return xN;default:un(this.auth,"internal-error")}}resolve(e){$n(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){$n(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const bN=new Po(2e3,1e4);class Li extends Ww{constructor(e,t,s,o,l){super(e,t,o,l),this.provider=s,this.authWindow=null,this.pollId=null,Li.currentPopupAction&&Li.currentPopupAction.cancel(),Li.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return se(e,this.auth,"internal-error"),e}async onExecution(){$n(this.filter.length===1,"Popup operations only handle one event");const e=rf();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(_n(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(_n(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Li.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,s;if((s=(t=this.authWindow)==null?void 0:t.window)!=null&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(_n(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,bN.get())};e()}}Li.currentPopupAction=null;/**
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
 */const NN="pendingRedirect",rl=new Map;class PN extends Ww{constructor(e,t,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,s),this.eventId=null}async execute(){let e=rl.get(this.auth._key());if(!e){try{const s=await AN(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(t){e=()=>Promise.reject(t)}rl.set(this.auth._key(),e)}return this.bypassAuthState||rl.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function AN(n,e){const t=LN(e),s=ON(n);if(!await s._isAvailable())return!1;const o=await s._get(t)==="true";return await s._remove(t),o}function DN(n,e){rl.set(n._key(),e)}function ON(n){return On(n._redirectPersistence)}function LN(n){return nl(NN,n.config.apiKey,n.name)}async function MN(n,e,t=!1){if(Ht(n.app))return Promise.reject(Fn(n));const s=ri(n),o=IN(s,e),c=await new PN(s,o,t).execute();return c&&!t&&(delete c.user._redirectEventId,await s._persistUserIfCurrent(c.user),await s._setRedirectUser(null,e)),c}/**
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
 */const FN=600*1e3;class jN{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(t=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!UN(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var s;if(e.error&&!Bw(e)){const o=((s=e.error.code)==null?void 0:s.split("auth/")[1])||"internal-error";t.onError(_n(this.auth,o))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const s=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=FN&&this.cachedEventUids.clear(),this.cachedEventUids.has(Dy(e))}saveEventToCache(e){this.cachedEventUids.add(Dy(e)),this.lastProcessedEventTime=Date.now()}}function Dy(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Bw({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function UN(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Bw(n);default:return!1}}/**
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
 */async function zN(n,e={}){return Ir(n,"GET","/v1/projects",e)}/**
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
 */const $N=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,WN=/^https?/;async function BN(n){if(n.config.emulator)return;const{authorizedDomains:e}=await zN(n);for(const t of e)try{if(VN(t))return}catch{}un(n,"unauthorized-domain")}function VN(n){const e=Bd(),{protocol:t,hostname:s}=new URL(e);if(n.startsWith("chrome-extension://")){const c=new URL(n);return c.hostname===""&&s===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&c.hostname===s}if(!WN.test(t))return!1;if($N.test(n))return s===n;const o=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(s)}/**
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
 */const HN=new Po(3e4,6e4);function Oy(){const n=vn().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function GN(n){return new Promise((e,t)=>{var o,l,c;function s(){Oy(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Oy(),t(_n(n,"network-request-failed"))},timeout:HN.get()})}if((l=(o=vn().gapi)==null?void 0:o.iframes)!=null&&l.Iframe)e(gapi.iframes.getContext());else if((c=vn().gapi)!=null&&c.load)s();else{const h=Fb("iframefcb");return vn()[h]=()=>{gapi.load?s():t(_n(n,"network-request-failed"))},xw(`${Mb()}?onload=${h}`).catch(f=>t(f))}}).catch(e=>{throw il=null,e})}let il=null;function qN(n){return il=il||GN(n),il}/**
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
 */const KN=new Po(5e3,15e3),YN="__/auth/iframe",QN="emulator/auth/iframe",JN={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},XN=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function ZN(n){const e=n.config;se(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Xh(e,QN):`https://${n.config.authDomain}/${YN}`,s={apiKey:e.apiKey,appName:n.name,v:ts},o=XN.get(n.config.apiHost);o&&(s.eid=o);const l=n._getFrameworks();return l.length&&(s.fw=l.join(",")),`${t}?${es(s).slice(1)}`}async function eP(n){const e=await qN(n),t=vn().gapi;return se(t,n,"internal-error"),e.open({where:document.body,url:ZN(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:JN,dontclear:!0},s=>new Promise(async(o,l)=>{await s.restyle({setHideOnLeave:!1});const c=_n(n,"network-request-failed"),h=vn().setTimeout(()=>{l(c)},KN.get());function f(){vn().clearTimeout(h),o(s)}s.ping(f).then(f,()=>{l(c)})}))}/**
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
 */const tP={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},nP=500,rP=600,iP="_blank",sP="http://localhost";class Ly{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function oP(n,e,t,s=nP,o=rP){const l=Math.max((window.screen.availHeight-o)/2,0).toString(),c=Math.max((window.screen.availWidth-s)/2,0).toString();let h="";const f={...tP,width:s.toString(),height:o.toString(),top:l,left:c},m=It().toLowerCase();t&&(h=ww(m)?iP:t),_w(m)&&(e=e||sP,f.scrollbars="yes");const y=Object.entries(f).reduce((v,[x,k])=>`${v}${x}=${k},`,"");if(xb(m)&&h!=="_self")return aP(e||"",h),new Ly(null);const _=window.open(e||"",h,y);se(_,n,"popup-blocked");try{_.focus()}catch{}return new Ly(_)}function aP(n,e){const t=document.createElement("a");t.href=n,t.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(s)}/**
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
 */const lP="__/auth/handler",uP="emulator/auth/handler",cP=encodeURIComponent("fac");async function My(n,e,t,s,o,l){se(n.config.authDomain,n,"auth-domain-config-required"),se(n.config.apiKey,n,"invalid-api-key");const c={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:s,v:ts,eventId:o};if(e instanceof Nw){e.setDefaultLanguage(n.languageCode),c.providerId=e.providerId||"",Cd(e.getCustomParameters())||(c.customParameters=JSON.stringify(e.getCustomParameters()));for(const[y,_]of Object.entries({}))c[y]=_}if(e instanceof Do){const y=e.getScopes().filter(_=>_!=="");y.length>0&&(c.scopes=y.join(","))}n.tenantId&&(c.tid=n.tenantId);const h=c;for(const y of Object.keys(h))h[y]===void 0&&delete h[y];const f=await n._getAppCheckToken(),m=f?`#${cP}=${encodeURIComponent(f)}`:"";return`${dP(n)}?${es(h).slice(1)}${m}`}function dP({config:n}){return n.emulator?Xh(n,uP):`https://${n.authDomain}/${lP}`}/**
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
 */const yd="webStorageSupport";class hP{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Fw,this._completeRedirectFn=MN,this._overrideRedirectResult=DN}async _openPopup(e,t,s,o){var c;$n((c=this.eventManagers[e._key()])==null?void 0:c.manager,"_initialize() not called before _openPopup()");const l=await My(e,t,s,Bd(),o);return oP(e,l,rf())}async _openRedirect(e,t,s,o){await this._originValidation(e);const l=await My(e,t,s,Bd(),o);return mN(l),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:o,promise:l}=this.eventManagers[t];return o?Promise.resolve(o):($n(l,"If manager is not set, promise should be"),l)}const s=this.initAndGetManager(e);return this.eventManagers[t]={promise:s},s.catch(()=>{delete this.eventManagers[t]}),s}async initAndGetManager(e){const t=await eP(e),s=new jN(e);return t.register("authEvent",o=>(se(o==null?void 0:o.authEvent,e,"invalid-auth-event"),{status:s.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=t,s}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(yd,{type:yd},o=>{var c;const l=(c=o==null?void 0:o[0])==null?void 0:c[yd];l!==void 0&&t(!!l),un(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=BN(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Iw()||vw()||ef()}}const fP=hP;var Fy="@firebase/auth",jy="1.11.1";/**
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
 */class pP{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){se(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function mP(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function gP(n){wn(new an("auth",(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),l=e.getProvider("app-check-internal"),{apiKey:c,authDomain:h}=s.options;se(c&&!c.includes(":"),"invalid-api-key",{appName:s.name});const f={apiKey:c,authDomain:h,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Tw(n)},m=new Db(s,o,l,f);return Bb(m,t),m},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,s)=>{e.getProvider("auth-internal").initialize()})),wn(new an("auth-internal",e=>{const t=ri(e.getProvider("auth").getImmediate());return(s=>new pP(s))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),qt(Fy,jy,mP(n)),qt(Fy,jy,"esm2020")}/**
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
 */const yP=300,_P=v_("authIdTokenMaxAge")||yP;let Uy=null;const vP=n=>async e=>{const t=e&&await e.getIdTokenResult(),s=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(s&&s>_P)return;const o=t==null?void 0:t.token;Uy!==o&&(Uy=o,await fetch(n,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function wP(n=lh()){const e=ei(n,"auth");if(e.isInitialized())return e.getImmediate();const t=Wb(n,{popupRedirectResolver:fP,persistence:[SN,hN,Fw]}),s=v_("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const l=new URL(s,location.origin);if(location.origin===l.origin){const c=vP(l.toString());aN(t,c,()=>c(t.currentUser)),oN(t,h=>c(h))}}const o=y_("auth");return o&&Vb(t,`http://${o}`),t}function EP(){var n;return((n=document.getElementsByTagName("head"))==null?void 0:n[0])??document}Ob({loadJS(n){return new Promise((e,t)=>{const s=document.createElement("script");s.setAttribute("src",n),s.onload=e,s.onerror=o=>{const l=_n("internal-error");l.customData=o,t(l)},s.type="text/javascript",s.charset="UTF-8",EP().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});gP("Browser");const CP={apiKey:"AIzaSyCYSlsCpya0lq1XTCZbg3uKRWezjgJGrDw",authDomain:"driveway-33dd7.firebaseapp.com",databaseURL:"https://driveway-33dd7-default-rtdb.firebaseio.com",projectId:"driveway-33dd7",storageBucket:"driveway-33dd7.firebasestorage.app",messagingSenderId:"774495628670",appId:"1:774495628670:web:9f060969e992697957172f",measurementId:"G-N3PXP5VM39"},of=N_(CP);B1(of);const Me=ib(of),Ya=wP(of);function Vw(n){var e,t,s="";if(typeof n=="string"||typeof n=="number")s+=n;else if(typeof n=="object")if(Array.isArray(n)){var o=n.length;for(e=0;e<o;e++)n[e]&&(t=Vw(n[e]))&&(s&&(s+=" "),s+=t)}else for(t in n)n[t]&&(s&&(s+=" "),s+=t);return s}function kP(){for(var n,e,t=0,s="",o=arguments.length;t<o;t++)(n=arguments[t])&&(e=Vw(n))&&(s&&(s+=" "),s+=e);return s}const SP=(n,e)=>{const t=new Array(n.length+e.length);for(let s=0;s<n.length;s++)t[s]=n[s];for(let s=0;s<e.length;s++)t[n.length+s]=e[s];return t},IP=(n,e)=>({classGroupId:n,validator:e}),Hw=(n=new Map,e=null,t)=>({nextPart:n,validators:e,classGroupId:t}),Pl="-",zy=[],TP="arbitrary..",xP=n=>{const e=bP(n),{conflictingClassGroups:t,conflictingClassGroupModifiers:s}=n;return{getClassGroupId:c=>{if(c.startsWith("[")&&c.endsWith("]"))return RP(c);const h=c.split(Pl),f=h[0]===""&&h.length>1?1:0;return Gw(h,f,e)},getConflictingClassGroupIds:(c,h)=>{if(h){const f=s[c],m=t[c];return f?m?SP(m,f):f:m||zy}return t[c]||zy}}},Gw=(n,e,t)=>{if(n.length-e===0)return t.classGroupId;const o=n[e],l=t.nextPart.get(o);if(l){const m=Gw(n,e+1,l);if(m)return m}const c=t.validators;if(c===null)return;const h=e===0?n.join(Pl):n.slice(e).join(Pl),f=c.length;for(let m=0;m<f;m++){const y=c[m];if(y.validator(h))return y.classGroupId}},RP=n=>n.slice(1,-1).indexOf(":")===-1?void 0:(()=>{const e=n.slice(1,-1),t=e.indexOf(":"),s=e.slice(0,t);return s?TP+s:void 0})(),bP=n=>{const{theme:e,classGroups:t}=n;return NP(t,e)},NP=(n,e)=>{const t=Hw();for(const s in n){const o=n[s];af(o,t,s,e)}return t},af=(n,e,t,s)=>{const o=n.length;for(let l=0;l<o;l++){const c=n[l];PP(c,e,t,s)}},PP=(n,e,t,s)=>{if(typeof n=="string"){AP(n,e,t);return}if(typeof n=="function"){DP(n,e,t,s);return}OP(n,e,t,s)},AP=(n,e,t)=>{const s=n===""?e:qw(e,n);s.classGroupId=t},DP=(n,e,t,s)=>{if(LP(n)){af(n(s),e,t,s);return}e.validators===null&&(e.validators=[]),e.validators.push(IP(t,n))},OP=(n,e,t,s)=>{const o=Object.entries(n),l=o.length;for(let c=0;c<l;c++){const[h,f]=o[c];af(f,qw(e,h),t,s)}},qw=(n,e)=>{let t=n;const s=e.split(Pl),o=s.length;for(let l=0;l<o;l++){const c=s[l];let h=t.nextPart.get(c);h||(h=Hw(),t.nextPart.set(c,h)),t=h}return t},LP=n=>"isThemeGetter"in n&&n.isThemeGetter===!0,MP=n=>{if(n<1)return{get:()=>{},set:()=>{}};let e=0,t=Object.create(null),s=Object.create(null);const o=(l,c)=>{t[l]=c,e++,e>n&&(e=0,s=t,t=Object.create(null))};return{get(l){let c=t[l];if(c!==void 0)return c;if((c=s[l])!==void 0)return o(l,c),c},set(l,c){l in t?t[l]=c:o(l,c)}}},qd="!",$y=":",FP=[],Wy=(n,e,t,s,o)=>({modifiers:n,hasImportantModifier:e,baseClassName:t,maybePostfixModifierPosition:s,isExternal:o}),jP=n=>{const{prefix:e,experimentalParseClassName:t}=n;let s=o=>{const l=[];let c=0,h=0,f=0,m;const y=o.length;for(let O=0;O<y;O++){const D=o[O];if(c===0&&h===0){if(D===$y){l.push(o.slice(f,O)),f=O+1;continue}if(D==="/"){m=O;continue}}D==="["?c++:D==="]"?c--:D==="("?h++:D===")"&&h--}const _=l.length===0?o:o.slice(f);let v=_,x=!1;_.endsWith(qd)?(v=_.slice(0,-1),x=!0):_.startsWith(qd)&&(v=_.slice(1),x=!0);const k=m&&m>f?m-f:void 0;return Wy(l,x,v,k)};if(e){const o=e+$y,l=s;s=c=>c.startsWith(o)?l(c.slice(o.length)):Wy(FP,!1,c,void 0,!0)}if(t){const o=s;s=l=>t({className:l,parseClassName:o})}return s},UP=n=>{const e=new Map;return n.orderSensitiveModifiers.forEach((t,s)=>{e.set(t,1e6+s)}),t=>{const s=[];let o=[];for(let l=0;l<t.length;l++){const c=t[l],h=c[0]==="[",f=e.has(c);h||f?(o.length>0&&(o.sort(),s.push(...o),o=[]),s.push(c)):o.push(c)}return o.length>0&&(o.sort(),s.push(...o)),s}},zP=n=>({cache:MP(n.cacheSize),parseClassName:jP(n),sortModifiers:UP(n),...xP(n)}),$P=/\s+/,WP=(n,e)=>{const{parseClassName:t,getClassGroupId:s,getConflictingClassGroupIds:o,sortModifiers:l}=e,c=[],h=n.trim().split($P);let f="";for(let m=h.length-1;m>=0;m-=1){const y=h[m],{isExternal:_,modifiers:v,hasImportantModifier:x,baseClassName:k,maybePostfixModifierPosition:O}=t(y);if(_){f=y+(f.length>0?" "+f:f);continue}let D=!!O,U=s(D?k.substring(0,O):k);if(!U){if(!D){f=y+(f.length>0?" "+f:f);continue}if(U=s(k),!U){f=y+(f.length>0?" "+f:f);continue}D=!1}const V=v.length===0?"":v.length===1?v[0]:l(v).join(":"),j=x?V+qd:V,ne=j+U;if(c.indexOf(ne)>-1)continue;c.push(ne);const ye=o(U,D);for(let _e=0;_e<ye.length;++_e){const Ie=ye[_e];c.push(j+Ie)}f=y+(f.length>0?" "+f:f)}return f},BP=(...n)=>{let e=0,t,s,o="";for(;e<n.length;)(t=n[e++])&&(s=Kw(t))&&(o&&(o+=" "),o+=s);return o},Kw=n=>{if(typeof n=="string")return n;let e,t="";for(let s=0;s<n.length;s++)n[s]&&(e=Kw(n[s]))&&(t&&(t+=" "),t+=e);return t},VP=(n,...e)=>{let t,s,o,l;const c=f=>{const m=e.reduce((y,_)=>_(y),n());return t=zP(m),s=t.cache.get,o=t.cache.set,l=h,h(f)},h=f=>{const m=s(f);if(m)return m;const y=WP(f,t);return o(f,y),y};return l=c,(...f)=>l(BP(...f))},HP=[],Qe=n=>{const e=t=>t[n]||HP;return e.isThemeGetter=!0,e},Yw=/^\[(?:(\w[\w-]*):)?(.+)\]$/i,Qw=/^\((?:(\w[\w-]*):)?(.+)\)$/i,GP=/^\d+\/\d+$/,qP=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,KP=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,YP=/^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,QP=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,JP=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,Ai=n=>GP.test(n),de=n=>!!n&&!Number.isNaN(Number(n)),dr=n=>!!n&&Number.isInteger(Number(n)),_d=n=>n.endsWith("%")&&de(n.slice(0,-1)),Pn=n=>qP.test(n),XP=()=>!0,ZP=n=>KP.test(n)&&!YP.test(n),Jw=()=>!1,eA=n=>QP.test(n),tA=n=>JP.test(n),nA=n=>!Q(n)&&!J(n),rA=n=>os(n,eE,Jw),Q=n=>Yw.test(n),zr=n=>os(n,tE,ZP),vd=n=>os(n,lA,de),By=n=>os(n,Xw,Jw),iA=n=>os(n,Zw,tA),Qa=n=>os(n,nE,eA),J=n=>Qw.test(n),to=n=>as(n,tE),sA=n=>as(n,uA),Vy=n=>as(n,Xw),oA=n=>as(n,eE),aA=n=>as(n,Zw),Ja=n=>as(n,nE,!0),os=(n,e,t)=>{const s=Yw.exec(n);return s?s[1]?e(s[1]):t(s[2]):!1},as=(n,e,t=!1)=>{const s=Qw.exec(n);return s?s[1]?e(s[1]):t:!1},Xw=n=>n==="position"||n==="percentage",Zw=n=>n==="image"||n==="url",eE=n=>n==="length"||n==="size"||n==="bg-size",tE=n=>n==="length",lA=n=>n==="number",uA=n=>n==="family-name",nE=n=>n==="shadow",cA=()=>{const n=Qe("color"),e=Qe("font"),t=Qe("text"),s=Qe("font-weight"),o=Qe("tracking"),l=Qe("leading"),c=Qe("breakpoint"),h=Qe("container"),f=Qe("spacing"),m=Qe("radius"),y=Qe("shadow"),_=Qe("inset-shadow"),v=Qe("text-shadow"),x=Qe("drop-shadow"),k=Qe("blur"),O=Qe("perspective"),D=Qe("aspect"),U=Qe("ease"),V=Qe("animate"),j=()=>["auto","avoid","all","avoid-page","page","left","right","column"],ne=()=>["center","top","bottom","left","right","top-left","left-top","top-right","right-top","bottom-right","right-bottom","bottom-left","left-bottom"],ye=()=>[...ne(),J,Q],_e=()=>["auto","hidden","clip","visible","scroll"],Ie=()=>["auto","contain","none"],X=()=>[J,Q,f],Ee=()=>[Ai,"full","auto",...X()],Be=()=>[dr,"none","subgrid",J,Q],wt=()=>["auto",{span:["full",dr,J,Q]},dr,J,Q],ut=()=>[dr,"auto",J,Q],Je=()=>["auto","min","max","fr",J,Q],ct=()=>["start","end","center","between","around","evenly","stretch","baseline","center-safe","end-safe"],Ge=()=>["start","end","center","stretch","center-safe","end-safe"],Re=()=>["auto",...X()],W=()=>[Ai,"auto","full","dvw","dvh","lvw","lvh","svw","svh","min","max","fit",...X()],N=()=>[n,J,Q],H=()=>[...ne(),Vy,By,{position:[J,Q]}],B=()=>["no-repeat",{repeat:["","x","y","space","round"]}],I=()=>["auto","cover","contain",oA,rA,{size:[J,Q]}],A=()=>[_d,to,zr],q=()=>["","none","full",m,J,Q],te=()=>["",de,to,zr],ue=()=>["solid","dashed","dotted","double"],me=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],ae=()=>[de,_d,Vy,By],ve=()=>["","none",k,J,Q],ce=()=>["none",de,J,Q],Xe=()=>["none",de,J,Q],Bn=()=>[de,J,Q],Tr=()=>[Ai,"full",...X()];return{cacheSize:500,theme:{animate:["spin","ping","pulse","bounce"],aspect:["video"],blur:[Pn],breakpoint:[Pn],color:[XP],container:[Pn],"drop-shadow":[Pn],ease:["in","out","in-out"],font:[nA],"font-weight":["thin","extralight","light","normal","medium","semibold","bold","extrabold","black"],"inset-shadow":[Pn],leading:["none","tight","snug","normal","relaxed","loose"],perspective:["dramatic","near","normal","midrange","distant","none"],radius:[Pn],shadow:[Pn],spacing:["px",de],text:[Pn],"text-shadow":[Pn],tracking:["tighter","tight","normal","wide","wider","widest"]},classGroups:{aspect:[{aspect:["auto","square",Ai,Q,J,D]}],container:["container"],columns:[{columns:[de,Q,J,h]}],"break-after":[{"break-after":j()}],"break-before":[{"break-before":j()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],sr:["sr-only","not-sr-only"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:ye()}],overflow:[{overflow:_e()}],"overflow-x":[{"overflow-x":_e()}],"overflow-y":[{"overflow-y":_e()}],overscroll:[{overscroll:Ie()}],"overscroll-x":[{"overscroll-x":Ie()}],"overscroll-y":[{"overscroll-y":Ie()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:Ee()}],"inset-x":[{"inset-x":Ee()}],"inset-y":[{"inset-y":Ee()}],start:[{start:Ee()}],end:[{end:Ee()}],top:[{top:Ee()}],right:[{right:Ee()}],bottom:[{bottom:Ee()}],left:[{left:Ee()}],visibility:["visible","invisible","collapse"],z:[{z:[dr,"auto",J,Q]}],basis:[{basis:[Ai,"full","auto",h,...X()]}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["nowrap","wrap","wrap-reverse"]}],flex:[{flex:[de,Ai,"auto","initial","none",Q]}],grow:[{grow:["",de,J,Q]}],shrink:[{shrink:["",de,J,Q]}],order:[{order:[dr,"first","last","none",J,Q]}],"grid-cols":[{"grid-cols":Be()}],"col-start-end":[{col:wt()}],"col-start":[{"col-start":ut()}],"col-end":[{"col-end":ut()}],"grid-rows":[{"grid-rows":Be()}],"row-start-end":[{row:wt()}],"row-start":[{"row-start":ut()}],"row-end":[{"row-end":ut()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":Je()}],"auto-rows":[{"auto-rows":Je()}],gap:[{gap:X()}],"gap-x":[{"gap-x":X()}],"gap-y":[{"gap-y":X()}],"justify-content":[{justify:[...ct(),"normal"]}],"justify-items":[{"justify-items":[...Ge(),"normal"]}],"justify-self":[{"justify-self":["auto",...Ge()]}],"align-content":[{content:["normal",...ct()]}],"align-items":[{items:[...Ge(),{baseline:["","last"]}]}],"align-self":[{self:["auto",...Ge(),{baseline:["","last"]}]}],"place-content":[{"place-content":ct()}],"place-items":[{"place-items":[...Ge(),"baseline"]}],"place-self":[{"place-self":["auto",...Ge()]}],p:[{p:X()}],px:[{px:X()}],py:[{py:X()}],ps:[{ps:X()}],pe:[{pe:X()}],pt:[{pt:X()}],pr:[{pr:X()}],pb:[{pb:X()}],pl:[{pl:X()}],m:[{m:Re()}],mx:[{mx:Re()}],my:[{my:Re()}],ms:[{ms:Re()}],me:[{me:Re()}],mt:[{mt:Re()}],mr:[{mr:Re()}],mb:[{mb:Re()}],ml:[{ml:Re()}],"space-x":[{"space-x":X()}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":X()}],"space-y-reverse":["space-y-reverse"],size:[{size:W()}],w:[{w:[h,"screen",...W()]}],"min-w":[{"min-w":[h,"screen","none",...W()]}],"max-w":[{"max-w":[h,"screen","none","prose",{screen:[c]},...W()]}],h:[{h:["screen","lh",...W()]}],"min-h":[{"min-h":["screen","lh","none",...W()]}],"max-h":[{"max-h":["screen","lh",...W()]}],"font-size":[{text:["base",t,to,zr]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:[s,J,vd]}],"font-stretch":[{"font-stretch":["ultra-condensed","extra-condensed","condensed","semi-condensed","normal","semi-expanded","expanded","extra-expanded","ultra-expanded",_d,Q]}],"font-family":[{font:[sA,Q,e]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:[o,J,Q]}],"line-clamp":[{"line-clamp":[de,"none",J,vd]}],leading:[{leading:[l,...X()]}],"list-image":[{"list-image":["none",J,Q]}],"list-style-position":[{list:["inside","outside"]}],"list-style-type":[{list:["disc","decimal","none",J,Q]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"placeholder-color":[{placeholder:N()}],"text-color":[{text:N()}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...ue(),"wavy"]}],"text-decoration-thickness":[{decoration:[de,"from-font","auto",J,zr]}],"text-decoration-color":[{decoration:N()}],"underline-offset":[{"underline-offset":[de,"auto",J,Q]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:X()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",J,Q]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],wrap:[{wrap:["break-word","anywhere","normal"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",J,Q]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:H()}],"bg-repeat":[{bg:B()}],"bg-size":[{bg:I()}],"bg-image":[{bg:["none",{linear:[{to:["t","tr","r","br","b","bl","l","tl"]},dr,J,Q],radial:["",J,Q],conic:[dr,J,Q]},aA,iA]}],"bg-color":[{bg:N()}],"gradient-from-pos":[{from:A()}],"gradient-via-pos":[{via:A()}],"gradient-to-pos":[{to:A()}],"gradient-from":[{from:N()}],"gradient-via":[{via:N()}],"gradient-to":[{to:N()}],rounded:[{rounded:q()}],"rounded-s":[{"rounded-s":q()}],"rounded-e":[{"rounded-e":q()}],"rounded-t":[{"rounded-t":q()}],"rounded-r":[{"rounded-r":q()}],"rounded-b":[{"rounded-b":q()}],"rounded-l":[{"rounded-l":q()}],"rounded-ss":[{"rounded-ss":q()}],"rounded-se":[{"rounded-se":q()}],"rounded-ee":[{"rounded-ee":q()}],"rounded-es":[{"rounded-es":q()}],"rounded-tl":[{"rounded-tl":q()}],"rounded-tr":[{"rounded-tr":q()}],"rounded-br":[{"rounded-br":q()}],"rounded-bl":[{"rounded-bl":q()}],"border-w":[{border:te()}],"border-w-x":[{"border-x":te()}],"border-w-y":[{"border-y":te()}],"border-w-s":[{"border-s":te()}],"border-w-e":[{"border-e":te()}],"border-w-t":[{"border-t":te()}],"border-w-r":[{"border-r":te()}],"border-w-b":[{"border-b":te()}],"border-w-l":[{"border-l":te()}],"divide-x":[{"divide-x":te()}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":te()}],"divide-y-reverse":["divide-y-reverse"],"border-style":[{border:[...ue(),"hidden","none"]}],"divide-style":[{divide:[...ue(),"hidden","none"]}],"border-color":[{border:N()}],"border-color-x":[{"border-x":N()}],"border-color-y":[{"border-y":N()}],"border-color-s":[{"border-s":N()}],"border-color-e":[{"border-e":N()}],"border-color-t":[{"border-t":N()}],"border-color-r":[{"border-r":N()}],"border-color-b":[{"border-b":N()}],"border-color-l":[{"border-l":N()}],"divide-color":[{divide:N()}],"outline-style":[{outline:[...ue(),"none","hidden"]}],"outline-offset":[{"outline-offset":[de,J,Q]}],"outline-w":[{outline:["",de,to,zr]}],"outline-color":[{outline:N()}],shadow:[{shadow:["","none",y,Ja,Qa]}],"shadow-color":[{shadow:N()}],"inset-shadow":[{"inset-shadow":["none",_,Ja,Qa]}],"inset-shadow-color":[{"inset-shadow":N()}],"ring-w":[{ring:te()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:N()}],"ring-offset-w":[{"ring-offset":[de,zr]}],"ring-offset-color":[{"ring-offset":N()}],"inset-ring-w":[{"inset-ring":te()}],"inset-ring-color":[{"inset-ring":N()}],"text-shadow":[{"text-shadow":["none",v,Ja,Qa]}],"text-shadow-color":[{"text-shadow":N()}],opacity:[{opacity:[de,J,Q]}],"mix-blend":[{"mix-blend":[...me(),"plus-darker","plus-lighter"]}],"bg-blend":[{"bg-blend":me()}],"mask-clip":[{"mask-clip":["border","padding","content","fill","stroke","view"]},"mask-no-clip"],"mask-composite":[{mask:["add","subtract","intersect","exclude"]}],"mask-image-linear-pos":[{"mask-linear":[de]}],"mask-image-linear-from-pos":[{"mask-linear-from":ae()}],"mask-image-linear-to-pos":[{"mask-linear-to":ae()}],"mask-image-linear-from-color":[{"mask-linear-from":N()}],"mask-image-linear-to-color":[{"mask-linear-to":N()}],"mask-image-t-from-pos":[{"mask-t-from":ae()}],"mask-image-t-to-pos":[{"mask-t-to":ae()}],"mask-image-t-from-color":[{"mask-t-from":N()}],"mask-image-t-to-color":[{"mask-t-to":N()}],"mask-image-r-from-pos":[{"mask-r-from":ae()}],"mask-image-r-to-pos":[{"mask-r-to":ae()}],"mask-image-r-from-color":[{"mask-r-from":N()}],"mask-image-r-to-color":[{"mask-r-to":N()}],"mask-image-b-from-pos":[{"mask-b-from":ae()}],"mask-image-b-to-pos":[{"mask-b-to":ae()}],"mask-image-b-from-color":[{"mask-b-from":N()}],"mask-image-b-to-color":[{"mask-b-to":N()}],"mask-image-l-from-pos":[{"mask-l-from":ae()}],"mask-image-l-to-pos":[{"mask-l-to":ae()}],"mask-image-l-from-color":[{"mask-l-from":N()}],"mask-image-l-to-color":[{"mask-l-to":N()}],"mask-image-x-from-pos":[{"mask-x-from":ae()}],"mask-image-x-to-pos":[{"mask-x-to":ae()}],"mask-image-x-from-color":[{"mask-x-from":N()}],"mask-image-x-to-color":[{"mask-x-to":N()}],"mask-image-y-from-pos":[{"mask-y-from":ae()}],"mask-image-y-to-pos":[{"mask-y-to":ae()}],"mask-image-y-from-color":[{"mask-y-from":N()}],"mask-image-y-to-color":[{"mask-y-to":N()}],"mask-image-radial":[{"mask-radial":[J,Q]}],"mask-image-radial-from-pos":[{"mask-radial-from":ae()}],"mask-image-radial-to-pos":[{"mask-radial-to":ae()}],"mask-image-radial-from-color":[{"mask-radial-from":N()}],"mask-image-radial-to-color":[{"mask-radial-to":N()}],"mask-image-radial-shape":[{"mask-radial":["circle","ellipse"]}],"mask-image-radial-size":[{"mask-radial":[{closest:["side","corner"],farthest:["side","corner"]}]}],"mask-image-radial-pos":[{"mask-radial-at":ne()}],"mask-image-conic-pos":[{"mask-conic":[de]}],"mask-image-conic-from-pos":[{"mask-conic-from":ae()}],"mask-image-conic-to-pos":[{"mask-conic-to":ae()}],"mask-image-conic-from-color":[{"mask-conic-from":N()}],"mask-image-conic-to-color":[{"mask-conic-to":N()}],"mask-mode":[{mask:["alpha","luminance","match"]}],"mask-origin":[{"mask-origin":["border","padding","content","fill","stroke","view"]}],"mask-position":[{mask:H()}],"mask-repeat":[{mask:B()}],"mask-size":[{mask:I()}],"mask-type":[{"mask-type":["alpha","luminance"]}],"mask-image":[{mask:["none",J,Q]}],filter:[{filter:["","none",J,Q]}],blur:[{blur:ve()}],brightness:[{brightness:[de,J,Q]}],contrast:[{contrast:[de,J,Q]}],"drop-shadow":[{"drop-shadow":["","none",x,Ja,Qa]}],"drop-shadow-color":[{"drop-shadow":N()}],grayscale:[{grayscale:["",de,J,Q]}],"hue-rotate":[{"hue-rotate":[de,J,Q]}],invert:[{invert:["",de,J,Q]}],saturate:[{saturate:[de,J,Q]}],sepia:[{sepia:["",de,J,Q]}],"backdrop-filter":[{"backdrop-filter":["","none",J,Q]}],"backdrop-blur":[{"backdrop-blur":ve()}],"backdrop-brightness":[{"backdrop-brightness":[de,J,Q]}],"backdrop-contrast":[{"backdrop-contrast":[de,J,Q]}],"backdrop-grayscale":[{"backdrop-grayscale":["",de,J,Q]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[de,J,Q]}],"backdrop-invert":[{"backdrop-invert":["",de,J,Q]}],"backdrop-opacity":[{"backdrop-opacity":[de,J,Q]}],"backdrop-saturate":[{"backdrop-saturate":[de,J,Q]}],"backdrop-sepia":[{"backdrop-sepia":["",de,J,Q]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":X()}],"border-spacing-x":[{"border-spacing-x":X()}],"border-spacing-y":[{"border-spacing-y":X()}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["","all","colors","opacity","shadow","transform","none",J,Q]}],"transition-behavior":[{transition:["normal","discrete"]}],duration:[{duration:[de,"initial",J,Q]}],ease:[{ease:["linear","initial",U,J,Q]}],delay:[{delay:[de,J,Q]}],animate:[{animate:["none",V,J,Q]}],backface:[{backface:["hidden","visible"]}],perspective:[{perspective:[O,J,Q]}],"perspective-origin":[{"perspective-origin":ye()}],rotate:[{rotate:ce()}],"rotate-x":[{"rotate-x":ce()}],"rotate-y":[{"rotate-y":ce()}],"rotate-z":[{"rotate-z":ce()}],scale:[{scale:Xe()}],"scale-x":[{"scale-x":Xe()}],"scale-y":[{"scale-y":Xe()}],"scale-z":[{"scale-z":Xe()}],"scale-3d":["scale-3d"],skew:[{skew:Bn()}],"skew-x":[{"skew-x":Bn()}],"skew-y":[{"skew-y":Bn()}],transform:[{transform:[J,Q,"","none","gpu","cpu"]}],"transform-origin":[{origin:ye()}],"transform-style":[{transform:["3d","flat"]}],translate:[{translate:Tr()}],"translate-x":[{"translate-x":Tr()}],"translate-y":[{"translate-y":Tr()}],"translate-z":[{"translate-z":Tr()}],"translate-none":["translate-none"],accent:[{accent:N()}],appearance:[{appearance:["none","auto"]}],"caret-color":[{caret:N()}],"color-scheme":[{scheme:["normal","dark","light","light-dark","only-dark","only-light"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",J,Q]}],"field-sizing":[{"field-sizing":["fixed","content"]}],"pointer-events":[{"pointer-events":["auto","none"]}],resize:[{resize:["none","","y","x"]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":X()}],"scroll-mx":[{"scroll-mx":X()}],"scroll-my":[{"scroll-my":X()}],"scroll-ms":[{"scroll-ms":X()}],"scroll-me":[{"scroll-me":X()}],"scroll-mt":[{"scroll-mt":X()}],"scroll-mr":[{"scroll-mr":X()}],"scroll-mb":[{"scroll-mb":X()}],"scroll-ml":[{"scroll-ml":X()}],"scroll-p":[{"scroll-p":X()}],"scroll-px":[{"scroll-px":X()}],"scroll-py":[{"scroll-py":X()}],"scroll-ps":[{"scroll-ps":X()}],"scroll-pe":[{"scroll-pe":X()}],"scroll-pt":[{"scroll-pt":X()}],"scroll-pr":[{"scroll-pr":X()}],"scroll-pb":[{"scroll-pb":X()}],"scroll-pl":[{"scroll-pl":X()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",J,Q]}],fill:[{fill:["none",...N()]}],"stroke-w":[{stroke:[de,to,zr,vd]}],stroke:[{stroke:["none",...N()]}],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-x","border-w-y","border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-x","border-color-y","border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],translate:["translate-x","translate-y","translate-none"],"translate-none":["translate","translate-x","translate-y","translate-z"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]},orderSensitiveModifiers:["*","**","after","backdrop","before","details-content","file","first-letter","first-line","marker","placeholder","selection"]}},dA=VP(cA);function ii(...n){return dA(kP(n))}function SD(){return Math.random().toString(36).substring(2,15)+Math.random().toString(36).substring(2,15)}function Hy(n="ID"){const e=Math.floor(1e3+Math.random()*9e3),t=Date.now().toString().slice(-4);return`${n}-${t}${e}`}const rE=T.createContext();function lf(){return T.useContext(rE)}function hA({children:n}){const[e,t]=T.useState(),[s,o]=T.useState(!0);function l(m,y){return iN(Ya,m,y)}function c(m,y){return sN(Ya,m,y)}function h(){return uN(Ya)}T.useEffect(()=>lN(Ya,y=>{t(y),o(!1)}),[]);const f={currentUser:e,signup:l,login:c,logout:h};return E.jsx(rE.Provider,{value:f,children:s?E.jsx("div",{className:"flex h-screen items-center justify-center",children:"Loading..."}):n})}const iE=T.createContext();function fA({children:n}){const{currentUser:e}=lf(),[t,s]=T.useState([]),[o,l]=T.useState([]),[c,h]=T.useState([]),[f,m]=T.useState([]),[y,_]=T.useState([]),[v,x]=T.useState(!0),k=W=>{const N=W.val();return N?Object.entries(N).map(([H,B])=>({id:H,...B})):[]};T.useEffect(()=>{if(!e){s([]),l([]),h([]),m([]),_([]),x(!1);return}x(!0);const W=Le(Me,"cars"),N=Le(Me,"customers"),H=Le(Me,"dealers"),B=Le(Me,"transactions"),I=Le(Me,"maintenanceRecords");let A=0;const q=()=>{A++,A>=5&&x(!1)},te=eo(W,ce=>{s(k(ce)),q()}),ue=eo(N,ce=>{l(k(ce)),q()}),me=eo(H,ce=>{h(k(ce)),q()}),ae=eo(B,ce=>{m(k(ce)),q()}),ve=eo(I,ce=>{_(k(ce)),q()});return()=>{te(),ue(),me(),ae(),ve()}},[e]);const O=W=>{Zs(Le(Me,"cars"),W)},D=W=>{if(o.some(H=>H.phone===W.phone))throw new Error(`Customer with phone ${W.phone} already exists!`);const N={...W,uniqueId:Hy("CUST")};Zs(Le(Me,"customers"),N)},U=W=>{if(c.some(H=>H.phone===W.phone))throw new Error(`Dealer with phone ${W.phone} already exists!`);const N={...W,uniqueId:Hy("DLR")};Zs(Le(Me,"dealers"),N)},V=W=>{Zs(Le(Me,"transactions"),W)},j=(W,N)=>{ur(Le(Me,`cars/${W}`),N)},ne=W=>{Pi(Le(Me,`cars/${W}`))},ye=(W,N)=>{ur(Le(Me,`customers/${W}`),N)},_e=W=>{Pi(Le(Me,`customers/${W}`))},Ie=(W,N)=>{ur(Le(Me,`dealers/${W}`),N)},X=W=>{Pi(Le(Me,`dealers/${W}`))},Ee=(W,N)=>{ur(Le(Me,`transactions/${W}`),N)},Be=W=>{Pi(Le(Me,`transactions/${W}`))},wt=W=>{Zs(Le(Me,"maintenanceRecords"),W),ur(Le(Me,`cars/${W.carId}`),{status:"Maintenance"})},ut=(W,N)=>{ur(Le(Me,`maintenanceRecords/${W}`),N),N.returnDate&&ur(Le(Me,`cars/${N.carId}`),{status:"Available"})},Je=W=>{Pi(Le(Me,`maintenanceRecords/${W}`))},ct=W=>{y.filter(H=>H.workshopName===W).forEach(H=>{Pi(Le(Me,`maintenanceRecords/${H.id}`))})},Ge=(W,N,H,B)=>{y.filter(A=>A.workshopName===W).forEach(A=>{ur(Le(Me,`maintenanceRecords/${A.id}`),{...A,workshopName:N,workshopDetails:H||A.workshopDetails,phoneNumber:B||A.phoneNumber})})},Re=t.map(W=>{let N=W.status;(N==="On Rent"||N==="On Maintenance"||N==="Maintenance")&&(N="Available");const H=new Date;return H.setHours(0,0,0,0),y.some(A=>{if(A.carId!==W.id)return!1;const q=new Date(A.date);if(q.setHours(0,0,0,0),A.returnDate){const te=new Date(A.returnDate);return te.setHours(23,59,59,999),H>=q&&H<=te}return H>=q})&&(N="On Maintenance"),f.some(A=>{if(A.carId!==W.id||A.status==="Cancelled"||A.status==="Completed")return!1;const q=new Date,te=new Date(A.startDate),ue=new Date(A.endDate);return q>=te&&q<=ue})&&(N="On Rent"),{...W,status:N}});return E.jsx(iE.Provider,{value:{cars:Re,customers:o,transactions:f,dealers:c,addCar:O,updateCar:j,deleteCar:ne,addCustomer:D,updateCustomer:ye,deleteCustomer:_e,addDealer:U,updateDealer:Ie,deleteDealer:X,addTransaction:V,updateTransaction:Ee,deleteTransaction:Be,maintenanceRecords:y,addMaintenanceRecord:wt,updateMaintenanceRecord:ut,deleteMaintenanceRecord:Je,deleteWorkshop:ct,renameWorkshop:Ge,renameWorkshop:Ge,isLoading:v},children:n})}function uf(){const n=T.useContext(iE);if(!n)throw new Error("useDriveway must be used within a DrivewayProvider");return n}/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pA=n=>n.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),mA=n=>n.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,s)=>s?s.toUpperCase():t.toLowerCase()),Gy=n=>{const e=mA(n);return e.charAt(0).toUpperCase()+e.slice(1)},sE=(...n)=>n.filter((e,t,s)=>!!e&&e.trim()!==""&&s.indexOf(e)===t).join(" ").trim(),gA=n=>{for(const e in n)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var yA={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _A=T.forwardRef(({color:n="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:s,className:o="",children:l,iconNode:c,...h},f)=>T.createElement("svg",{ref:f,...yA,width:e,height:e,stroke:n,strokeWidth:s?Number(t)*24/Number(e):t,className:sE("lucide",o),...!l&&!gA(h)&&{"aria-hidden":"true"},...h},[...c.map(([m,y])=>T.createElement(m,y)),...Array.isArray(l)?l:[l]]));/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lt=(n,e)=>{const t=T.forwardRef(({className:s,...o},l)=>T.createElement(_A,{ref:l,iconNode:e,className:sE(`lucide-${pA(Gy(n))}`,`lucide-${n}`,s),...o}));return t.displayName=Gy(n),t};/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vA=[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0",key:"vwvbt9"}],["path",{d:"M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",key:"11g9vi"}]],qy=lt("bell",vA);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wA=[["path",{d:"M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2",key:"5owen"}],["circle",{cx:"7",cy:"17",r:"2",key:"u2ysq9"}],["path",{d:"M9 17h6",key:"r8uit2"}],["circle",{cx:"17",cy:"17",r:"2",key:"axvx0g"}]],EA=lt("car",wA);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CA=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],kA=lt("circle-alert",CA);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SA=[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]],IA=lt("download",SA);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TA=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]],xA=lt("external-link",TA);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RA=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],Ky=lt("file-text",RA);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bA=[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1",key:"10lvy0"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1",key:"16une8"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1",key:"1hutg5"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1",key:"ldoo1y"}]],NA=lt("layout-dashboard",bA);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PA=[["path",{d:"m16 17 5-5-5-5",key:"1bji2h"}],["path",{d:"M21 12H9",key:"dn1m92"}],["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}]],AA=lt("log-out",PA);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DA=[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]],OA=lt("menu",DA);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LA=[["path",{d:"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",key:"kfwtm"}]],MA=lt("moon",LA);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FA=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],jA=lt("plus",FA);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UA=[["path",{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z",key:"q3az6g"}],["path",{d:"M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8",key:"1h4pet"}],["path",{d:"M12 17.5v-11",key:"1jc1ny"}]],zA=lt("receipt",UA);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $A=[["path",{d:"M12 2v13",key:"1km8f5"}],["path",{d:"m16 6-4-4-4 4",key:"13yo43"}],["path",{d:"M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8",key:"1b2hhj"}]],WA=lt("share",$A);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BA=[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]],VA=lt("sun",BA);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HA=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],GA=lt("triangle-alert",HA);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qA=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]],Yy=lt("users",qA);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KA=[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z",key:"1ngwbx"}]],YA=lt("wrench",KA);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QA=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Al=lt("x",QA);function yn({className:n,variant:e="primary",size:t="default",...s}){const o={primary:"bg-primary text-primary-foreground hover:bg-primary/90",secondary:"bg-surface text-text hover:bg-surface/80 dark:bg-surface-dark dark:text-text-dark",outline:"border border-input bg-background hover:bg-surface hover:text-text dark:bg-background-dark dark:hover:bg-surface-dark",ghost:"hover:bg-surface hover:text-text dark:hover:bg-surface-dark",link:"text-primary underline-offset-4 hover:underline"},l={default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"};return E.jsx("button",{className:ii("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",o[e],l[t],n),...s})}function Di({className:n,type:e,...t}){return E.jsx("input",{type:e,className:ii("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-surface-dark dark:text-text-dark dark:border-surface",n),...t})}const oE=T.forwardRef(({className:n,isOpen:e,onClose:t,children:s,...o},l)=>E.jsxs(E.Fragment,{children:[e&&E.jsx("div",{className:"fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",onClick:t}),E.jsxs("div",{ref:l,className:ii("fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500 inset-y-0 right-0 h-full w-3/4 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm overflow-y-auto",e?"translate-x-0":"translate-x-full",n),...o,children:[E.jsxs("button",{className:"absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary",onClick:t,children:[E.jsx(Al,{className:"h-4 w-4"}),E.jsx("span",{className:"sr-only",children:"Close"})]}),s]})]}));oE.displayName="Sheet";const aE=({className:n,...e})=>E.jsx("div",{className:ii("flex flex-col space-y-2 text-center sm:text-left",n),...e});aE.displayName="SheetHeader";const lE=T.forwardRef(({className:n,...e},t)=>E.jsx("h2",{ref:t,className:ii("text-lg font-semibold text-foreground",n),...e}));lE.displayName="SheetTitle";function JA({isOpen:n,onClose:e}){const{cars:t,customers:s,dealers:o,addTransaction:l,updateCar:c,transactions:h}=uf(),[f,m]=T.useState({carId:"",customerId:"",dealerId:"",startDate:"",endDate:"",notes:"",paymentStatus:"Pending",dailyRate:"",paymentStatus:"Pending",dailyRate:"",mileage:"",discount:""}),[y,_]=T.useState({total:0,breakdown:[]}),v=t.find(k=>k.id===f.carId);T.useEffect(()=>{v&&m(k=>!k.dailyRate&&!k.mileage&&k.mileage!==0?{...k,dailyRate:v.price,mileage:v.mileage||""}:k)},[v]),T.useEffect(()=>{if(f.startDate&&f.endDate&&v){const k=new Date(f.startDate),O=new Date(f.endDate),D=Math.abs(O-k),U=Math.ceil(D/(1e3*60*60*24));let V=0,j=[];const ne=f.dailyRate?parseFloat(f.dailyRate):v.price;if(U>0)if(U>=20&&v.monthlyPrice){const _e=v.monthlyPrice/30;V=Math.round(_e*U+300),j.push({label:`Long Term Rate (>=20 days) (${U} days @ ₹${Math.round(_e)}/day + ₹300)`,amount:V})}else if(U>=10&&v.tenDayPrice){const _e=v.tenDayPrice/10;V=Math.round(_e*U),j.push({label:`10-Day Rate Applied (${U} days @ ₹${Math.round(_e)}/day)`,amount:V})}else V=Math.round(ne*U),j.push({label:`Standard Daily Rate (${U} days @ ₹${ne}/day)`,amount:V});const ye=f.discount?parseFloat(f.discount):0;ye>0&&(j.push({label:"Discount",amount:-ye}),V=Math.max(0,V-ye)),_({total:V,breakdown:j})}else _({total:0,breakdown:[]})},[f.startDate,f.endDate,v,f.dailyRate,f.discount]);const x=k=>{if(k.preventDefault(),!v)return;const O=new Date(f.startDate),D=new Date(f.endDate);if(h.some(V=>{if(V.carId!==v.id||V.status==="Cancelled")return!1;const j=new Date(V.startDate),ne=new Date(V.endDate);return O>=j&&O<=ne||D>=j&&D<=ne||O<=j&&D>=ne})){alert("This car is already rented for the selected dates!");return}console.log("GlobalRentalDrawer Mileage check:",f.mileage),f.mileage!==""&&f.mileage!==null&&f.mileage!==void 0&&(console.log("GlobalRentalDrawer Updating mileage to:",f.mileage),c(v.id,{mileage:parseInt(f.mileage)})),l({carId:v.id,customerId:f.customerId,dealerId:f.dealerId?f.dealerId:null,startDate:f.startDate,endDate:f.endDate,total:y.total,status:"Active",paymentStatus:f.paymentStatus,notes:f.notes,breakdown:y.breakdown,dailyRate:f.dailyRate,breakdown:y.breakdown,dailyRate:f.dailyRate,startMileage:f.mileage,discount:f.discount}),e(),m({carId:"",customerId:"",dealerId:"",startDate:"",endDate:"",notes:"",paymentStatus:"Pending",dailyRate:"",mileage:"",discount:""})};return E.jsxs(oE,{isOpen:n,onClose:e,children:[E.jsx(aE,{children:E.jsx(lE,{children:"New Rental"})}),E.jsx("div",{className:"mt-6",children:E.jsxs("form",{onSubmit:x,className:"space-y-4",children:[E.jsxs("div",{className:"space-y-2",children:[E.jsx("label",{className:"text-sm font-medium",children:"Car"}),E.jsxs("select",{className:"flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-surface-dark dark:text-text-dark dark:border-surface",value:f.carId,onChange:k=>m({...f,carId:k.target.value,carId:k.target.value,dailyRate:"",mileage:"",discount:""}),required:!0,children:[E.jsx("option",{value:"",children:"Select Car"}),t.map(k=>E.jsxs("option",{value:k.id,disabled:k.status==="Maintenance"||k.status==="Rented",children:[k.make," ",k.model," (",k.status,")"]},k.id))]})]}),E.jsxs("div",{className:"space-y-2",children:[E.jsx("label",{className:"text-sm font-medium",children:"Customer"}),E.jsxs("select",{className:"flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-surface-dark dark:text-text-dark dark:border-surface",value:f.customerId,onChange:k=>m({...f,customerId:k.target.value}),required:!0,children:[E.jsx("option",{value:"",children:"Select Customer"}),s.map(k=>E.jsx("option",{value:k.id,children:k.name},k.id))]})]}),E.jsxs("div",{className:"space-y-2",children:[E.jsx("label",{className:"text-sm font-medium",children:"Dealer (Optional)"}),E.jsxs("select",{className:"flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-surface-dark dark:text-text-dark dark:border-surface",value:f.dealerId,onChange:k=>m({...f,dealerId:k.target.value}),children:[E.jsx("option",{value:"",children:"Select Dealer"}),o.map(k=>E.jsx("option",{value:k.id,children:k.name},k.id))]})]}),E.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[E.jsxs("div",{className:"space-y-2",children:[E.jsx("label",{className:"text-sm font-medium",children:"Start Date & Time"}),E.jsx(Di,{type:"datetime-local",value:f.startDate,onChange:k=>m({...f,startDate:k.target.value}),required:!0})]}),E.jsxs("div",{className:"space-y-2",children:[E.jsx("label",{className:"text-sm font-medium",children:"End Date & Time"}),E.jsx(Di,{type:"datetime-local",value:f.endDate,onChange:k=>m({...f,endDate:k.target.value}),required:!0})]})]}),E.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[E.jsxs("div",{className:"space-y-2",children:[E.jsx("label",{className:"text-sm font-medium",children:"Per Day Amount"}),E.jsx(Di,{type:"number",value:f.dailyRate,onChange:k=>m({...f,dailyRate:k.target.value}),placeholder:"Enter daily rate"})]}),E.jsxs("div",{className:"space-y-2",children:[E.jsx("label",{className:"text-sm font-medium",children:"Current Mileage"}),E.jsx(Di,{type:"number",value:f.mileage,onChange:k=>m({...f,mileage:k.target.value}),placeholder:"Starting mileage"})]})]}),E.jsxs("div",{className:"space-y-2",children:[E.jsx("label",{className:"text-sm font-medium",children:"Discount Amount"}),E.jsx(Di,{type:"number",value:f.discount,onChange:k=>m({...f,discount:k.target.value}),placeholder:"Enter discount amount"})]}),E.jsxs("div",{className:"space-y-2",children:[E.jsx("label",{className:"text-sm font-medium",children:"Payment Status"}),E.jsxs("select",{className:"flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-surface-dark dark:text-text-dark dark:border-surface",value:f.paymentStatus,onChange:k=>m({...f,paymentStatus:k.target.value}),children:[E.jsx("option",{value:"Pending",children:"Pending"}),E.jsx("option",{value:"Paid",children:"Paid"}),E.jsx("option",{value:"Pay on Arrival",children:"Pay on Arrival"})]})]}),E.jsxs("div",{className:"space-y-2",children:[E.jsx("label",{className:"text-sm font-medium",children:"Notes"}),E.jsx(Di,{placeholder:"Additional notes...",value:f.notes,onChange:k=>m({...f,notes:k.target.value})})]}),E.jsxs("div",{className:"bg-surface dark:bg-surface-dark p-4 rounded-lg space-y-2",children:[E.jsx("div",{className:"flex justify-between items-center mb-2",children:E.jsx("span",{className:"text-sm font-medium",children:"Price Breakdown"})}),y.breakdown.length>0?E.jsxs("div",{className:"space-y-1",children:[y.breakdown.map((k,O)=>E.jsxs("div",{className:"flex justify-between text-sm text-muted-foreground",children:[E.jsx("span",{children:k.label}),E.jsxs("span",{children:["₹",k.amount]})]},O)),E.jsxs("div",{className:"border-t pt-2 mt-2 flex justify-between text-sm font-bold",children:[E.jsx("span",{children:"Total"}),E.jsxs("span",{children:["₹",y.total]})]})]}):E.jsx("p",{className:"text-xs text-muted-foreground",children:"Select car and dates to see price breakdown."})]}),E.jsx(yn,{type:"submit",className:"w-full",children:"Create Rental"})]})})]})}function XA(){const{cars:n,transactions:e}=uf(),t=T.useMemo(()=>{const o=[],l=new Date,c=new Date;c.setDate(l.getDate()+7),n.forEach(f=>{const m=(y,_)=>{if(!y)return;const v=new Date(y);if(v<=c){const x=Math.ceil((v-l)/864e5);let k="";x<0?k=`${_} Expired on ${v.toLocaleDateString()}`:x===0?k=`${_} Expires TODAY`:k=`${_} Expires in ${x} days`,o.push({id:`expiry-${f.id}-${_}`,type:"expiry",severity:x<=0?"destructive":"warning",title:`${f.make} ${f.model} (${f.plateNumber})`,message:k,link:`/cars/${f.id}`,date:y})}};m(f.insuranceValidTo,"Insurance"),m(f.taxValidTo,"Tax"),m(f.fitnessValidTo,"Fitness")});const h=new Date;return h.setDate(l.getDate()-15),e.forEach(f=>{if(f.status==="Cancelled")return;let m=0;f.payments?m=f.payments.reduce((v,x)=>x.type==="Credit"?v+Number(x.amount):v-Number(x.amount),0):f.amountPaid&&(m=Number(f.amountPaid));const _=(Number(f.total)||0)-m;if(_>10){const v=new Date(f.endDate);if(v<h){const x=Math.floor((l-v)/864e5),k=n.find(D=>D.id===f.carId),O=k?`${k.make} ${k.model}`:"Unknown Car";o.push({id:`overdue-${f.id}`,type:"payment",severity:"destructive",title:`Payment Overdue: ${O}`,message:`₹${_.toLocaleString()} pending. Due since ${x} days.`,link:"/transactions",actionData:f,date:f.endDate})}}}),o.sort((f,m)=>f.severity===m.severity?0:f.severity==="destructive"?-1:1)},[n,e]),s=t.length;return{notifications:t,unreadCount:s}}function Qy(){const{notifications:n,unreadCount:e}=XA(),[t,s]=T.useState(!1),o=T.useRef(null),l=Ol();T.useEffect(()=>{const h=f=>{o.current&&!o.current.contains(f.target)&&s(!1)};return document.addEventListener("mousedown",h),()=>document.removeEventListener("mousedown",h)},[]);const c=h=>{s(!1),h&&l(h)};return E.jsxs("div",{className:"relative",ref:o,children:[E.jsxs(yn,{variant:"ghost",size:"icon",className:"relative",onClick:()=>s(!t),"aria-label":"Notifications",children:[E.jsx(qy,{size:20}),e>0&&E.jsx("span",{className:"absolute top-1 right-2 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-background animate-pulse"})]}),t&&E.jsxs("div",{className:"absolute right-0 mt-2 w-80 md:w-96 bg-background dark:bg-surface-dark border border-border shadow-xl rounded-lg z-50 overflow-hidden animate-in fade-in zoom-in-95 duration-200",children:[E.jsxs("div",{className:"flex items-center justify-between p-4 border-b bg-muted/30",children:[E.jsx("h3",{className:"font-semibold",children:"Notifications"}),E.jsxs("span",{className:"text-xs text-muted-foreground",children:[e," Issues"]})]}),E.jsx("div",{className:"max-h-[70vh] overflow-y-auto",children:n.length===0?E.jsxs("div",{className:"p-8 text-center text-muted-foreground",children:[E.jsx(qy,{className:"mx-auto h-8 w-8 mb-2 opacity-50"}),E.jsx("p",{className:"text-sm",children:"No new notifications"})]}):E.jsx("div",{className:"divide-y",children:n.map(h=>E.jsxs("div",{className:ii("p-4 hover:bg-muted/50 transition-colors cursor-pointer flex gap-3 items-start",h.severity==="destructive"?"bg-red-50/50 dark:bg-red-950/10":""),onClick:()=>c(h.link),children:[E.jsx("div",{className:"mt-1",children:h.severity==="destructive"?E.jsx(kA,{className:"h-5 w-5 text-destructive"}):E.jsx(GA,{className:"h-5 w-5 text-yellow-500"})}),E.jsxs("div",{className:"flex-1 space-y-1",children:[E.jsx("p",{className:"text-sm font-medium leading-none",children:h.title}),E.jsx("p",{className:"text-xs text-muted-foreground",children:h.message})]}),h.link&&E.jsx(xA,{className:"h-4 w-4 text-muted-foreground opacity-50"})]},h.id))})})]})]})}function ZA({children:n}){const[e,t]=T.useState(!1),[s,o]=T.useState(!1),[l,c]=T.useState(!1),h=Wn(),f=Ol(),{logout:m}=lf(),{isLoading:y}=uf();async function _(){try{await m(),f("/login")}catch(k){console.error("Failed to log out",k)}}T.useEffect(()=>{e?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark")},[e]),T.useEffect(()=>{c(!1)},[h.pathname]);const v=[{icon:NA,label:"Dashboard",path:"/"},{icon:EA,label:"Cars",path:"/cars"},{icon:Yy,label:"Customers",path:"/customers"},{icon:Yy,label:"Dealers",path:"/dealers"},{icon:Ky,label:"Rentals",path:"/transactions"},{icon:zA,label:"Financials",path:"/financials"},{icon:YA,label:"Maintenance",path:"/maintenance"},{icon:Ky,label:"Billing App",path:"/billing"}],x=()=>E.jsxs("div",{className:"flex flex-col h-full",children:[E.jsxs("div",{className:"p-6 flex justify-between items-center",children:[E.jsxs("div",{className:"flex items-center gap-3",children:[E.jsx("img",{src:"/DriveWay/logo.png",alt:"Driveway",className:"h-8 w-8 object-contain"}),E.jsx("h1",{className:"text-2xl font-bold text-primary",children:"Driveway"})]}),E.jsx(yn,{variant:"ghost",size:"icon",className:"md:hidden",onClick:()=>c(!1),children:E.jsx(Al,{size:20})})]}),E.jsx("div",{className:"px-4 mb-4",children:E.jsxs(yn,{className:"w-full justify-start gap-2",onClick:()=>o(!0),children:[E.jsx(jA,{size:20}),"New Rental"]})}),E.jsx("nav",{className:"flex-1 px-4 space-y-2 overflow-y-auto",children:v.map(k=>{const O=k.icon,D=h.pathname===k.path;return E.jsxs(rh,{to:k.path,className:ii("flex items-center gap-3 px-4 py-3 rounded-lg transition-colors",D?"bg-primary/10 text-primary":"text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"),children:[E.jsx(O,{size:20}),E.jsx("span",{className:"font-medium",children:k.label})]},k.path)})}),E.jsxs("div",{className:"p-4 border-t border-gray-200 dark:border-gray-800",children:[E.jsxs(yn,{variant:"ghost",className:"w-full justify-start gap-3",onClick:()=>t(!e),children:[e?E.jsx(VA,{size:20}):E.jsx(MA,{size:20}),E.jsx("span",{children:e?"Light Mode":"Dark Mode"})]}),E.jsxs(yn,{variant:"ghost",className:"w-full justify-start gap-3 mt-2 text-destructive hover:text-destructive hover:bg-destructive/10",onClick:_,children:[E.jsx(AA,{size:20}),E.jsx("span",{children:"Log Out"})]})]})]});return y?E.jsx("div",{className:"min-h-screen bg-surface dark:bg-background-dark flex items-center justify-center",children:E.jsxs("div",{className:"flex flex-col items-center gap-4",children:[E.jsx("img",{src:"/DriveWay/logo.png",alt:"Loading...",className:"h-16 w-16 animate-pulse object-contain"}),E.jsx("p",{className:"text-muted-foreground animate-pulse",children:"Loading..."})]})}):E.jsxs("div",{className:"min-h-screen bg-surface dark:bg-background-dark flex flex-col md:flex-row",children:[E.jsxs("div",{className:"md:hidden bg-background dark:bg-surface-dark border-b border-gray-200 dark:border-gray-800 p-4 flex justify-between items-center sticky top-0 z-20",children:[E.jsxs("div",{className:"flex items-center gap-3",children:[E.jsx("img",{src:"/DriveWay/logo.png",alt:"Driveway",className:"h-8 w-8 object-contain"}),E.jsx("h1",{className:"text-2xl font-bold text-primary",children:"Driveway"})]}),E.jsxs("div",{className:"flex items-center gap-2",children:[E.jsx(Qy,{}),E.jsx(yn,{variant:"ghost",size:"icon",onClick:()=>c(!0),children:E.jsx(OA,{size:24})})]})]}),E.jsx("aside",{className:"hidden md:flex w-64 bg-background dark:bg-surface-dark border-r border-gray-200 dark:border-gray-800 flex-col sticky top-0 h-screen",children:E.jsx(x,{})}),l&&E.jsxs("div",{className:"fixed inset-0 z-50 md:hidden",children:[E.jsx("div",{className:"absolute inset-0 bg-black/50",onClick:()=>c(!1)}),E.jsx("div",{className:"absolute left-0 top-0 bottom-0 w-64 bg-background dark:bg-surface-dark shadow-xl animate-in slide-in-from-left",children:E.jsx(x,{})})]}),E.jsxs("main",{className:"flex-1 overflow-auto w-full relative",children:[E.jsx("div",{className:"hidden md:flex justify-end px-8 pt-6",children:E.jsx(Qy,{})}),E.jsx("div",{className:"p-4 md:p-8 max-w-7xl mx-auto pt-4 md:pt-2",children:n})]}),E.jsx(JA,{isOpen:s,onClose:()=>o(!1)})]})}function eD(){const[n,e]=T.useState(null),[t,s]=T.useState(!1),[o,l]=T.useState(!1);T.useEffect(()=>{window.matchMedia("(display-mode: standalone)").matches&&l(!0);const f=y=>{y.preventDefault(),e(y)};return window.addEventListener("beforeinstallprompt",f),/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream&&!window.matchMedia("(display-mode: standalone)").matches&&(sessionStorage.getItem("iosInstallDismissed")||s(!0)),()=>{window.removeEventListener("beforeinstallprompt",f)}},[]);const c=async()=>{if(!n)return;n.prompt();const{outcome:f}=await n.userChoice;f==="accepted"&&e(null)},h=()=>{s(!1),sessionStorage.setItem("iosInstallDismissed","true")};return o?null:n?E.jsx("div",{className:"fixed bottom-4 left-4 right-4 z-50 bg-surface dark:bg-surface-dark border border-primary/20 shadow-lg rounded-lg p-4 animate-in slide-in-from-bottom duration-300",children:E.jsxs("div",{className:"flex items-center justify-between gap-4",children:[E.jsxs("div",{className:"flex-1",children:[E.jsx("h3",{className:"font-semibold text-primary",children:"Install Driveway"}),E.jsx("p",{className:"text-sm text-muted-foreground",children:"Install our app for a better experience"})]}),E.jsxs("div",{className:"flex gap-2",children:[E.jsx(yn,{variant:"ghost",size:"icon",onClick:()=>e(null),children:E.jsx(Al,{className:"h-4 w-4"})}),E.jsxs(yn,{onClick:c,className:"gap-2",children:[E.jsx(IA,{className:"h-4 w-4"})," Install"]})]})]})}):t?E.jsx("div",{className:"fixed bottom-0 left-0 right-0 z-50 bg-surface dark:bg-surface-dark border-t border-gray-200 dark:border-gray-800 p-4 shadow-lg animate-in slide-in-from-bottom duration-300 pb-8",children:E.jsxs("div",{className:"max-w-md mx-auto relative",children:[E.jsx(yn,{variant:"ghost",size:"icon",className:"absolute -top-2 right-0",onClick:h,children:E.jsx(Al,{className:"h-4 w-4"})}),E.jsxs("div",{className:"flex items-start gap-4 pr-8",children:[E.jsx("div",{className:"bg-primary/10 p-3 rounded-xl",children:E.jsx(WA,{className:"h-6 w-6 text-primary"})}),E.jsxs("div",{children:[E.jsx("h3",{className:"font-semibold text-lg mb-1",children:"Install Driveway"}),E.jsxs("p",{className:"text-sm text-muted-foreground leading-relaxed",children:["To install this app on your iPhone, tap the ",E.jsx("span",{className:"font-bold",children:"Share"})," icon below and select ",E.jsx("span",{className:"font-bold",children:'"Add to Home Screen"'}),"."]})]})]}),E.jsx("div",{className:"absolute -bottom-8 left-1/2 -translate-x-1/2 w-4 h-4 bg-surface dark:bg-surface-dark rotate-45 border-b border-r border-gray-200 dark:border-gray-800"})]})}):null}function tD({children:n}){const{currentUser:e}=lf();return e?n:E.jsx(ak,{to:"/login"})}const nD=T.lazy(()=>vt(()=>import("./Dashboard-DJup-hAP.js"),__vite__mapDeps([0,1])).then(n=>({default:n.Dashboard}))),rD=T.lazy(()=>vt(()=>import("./Cars-ldkGE-TN.js"),__vite__mapDeps([2,1,3,4,5])).then(n=>({default:n.Cars}))),iD=T.lazy(()=>vt(()=>import("./CarDetails-DSHTTkpo.js"),__vite__mapDeps([6,1,7,3,8,9,10,4,11,5])).then(n=>({default:n.CarDetails}))),sD=T.lazy(()=>vt(()=>import("./Customers-CcJjYHEV.js"),__vite__mapDeps([12,1,13,8,9,10,4,11,14,15,16,5,17])).then(n=>({default:n.Customers}))),oD=T.lazy(()=>vt(()=>import("./CustomerDetailsPage-CRiD6VMy.js"),__vite__mapDeps([18,1,8,9,10,4,11,19,16,20,21,15,5])).then(n=>({default:n.CustomerDetailsPage}))),aD=T.lazy(()=>vt(()=>import("./Dealers-Cu_tbrkc.js"),__vite__mapDeps([22,1,13,8,9,10,4,11,14,5,17,16])).then(n=>({default:n.Dealers}))),lD=T.lazy(()=>vt(()=>import("./DealerDetailsPage-DUfw5Z79.js"),__vite__mapDeps([23,1,8,9,10,4,11,19,20,21,5])).then(n=>({default:n.DealerDetailsPage}))),uD=T.lazy(()=>vt(()=>import("./Transactions-L2eUQ07N.js"),__vite__mapDeps([24,1,8,9,10,4,11,5])).then(n=>({default:n.Transactions}))),cD=T.lazy(()=>vt(()=>import("./Financials-B9gSezyW.js"),__vite__mapDeps([25,1,9,14,26])).then(n=>({default:n.Financials}))),dD=T.lazy(()=>vt(()=>import("./Maintenance-CjThRXHg.js"),__vite__mapDeps([27,1,7,5,17,21])).then(n=>({default:n.Maintenance}))),hD=T.lazy(()=>vt(()=>import("./Login-GbUODFrr.js"),__vite__mapDeps([28,1])).then(n=>({default:n.Login}))),fD=T.lazy(()=>vt(()=>import("./Signup-hNiTAY0c.js"),__vite__mapDeps([29,1,11])).then(n=>({default:n.Signup}))),pD=T.lazy(()=>vt(()=>import("./BillingDashboard-CaoC-oEx.js"),__vite__mapDeps([30,1])).then(n=>({default:n.BillingDashboard}))),mD=T.lazy(()=>vt(()=>import("./CreateInvoice-CyNHkWTX.js"),__vite__mapDeps([31,1,10,32,33,17])).then(n=>({default:n.CreateInvoice}))),gD=T.lazy(()=>vt(()=>import("./BillingHistory-CkIigXtM.js"),__vite__mapDeps([34,1,10,32,19,26,17])).then(n=>({default:n.BillingHistory}))),yD=T.lazy(()=>vt(()=>import("./BillingSettings-BmdXUkE3.js"),__vite__mapDeps([35,1,19,33])).then(n=>({default:n.BillingSettings}))),Jy=()=>E.jsx("div",{className:"flex items-center justify-center p-8 w-full h-full min-h-[50vh]",children:E.jsxs("div",{className:"flex flex-col items-center gap-2",children:[E.jsx("div",{className:"h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent"}),E.jsx("p",{className:"text-sm text-muted-foreground",children:"Loading page..."})]})});function _D(){return E.jsx(hA,{children:E.jsx(fA,{children:E.jsx(Pk,{basename:"/DriveWay/",children:E.jsxs(T.Suspense,{fallback:E.jsx(Jy,{}),children:[E.jsxs(_g,{children:[E.jsx(nt,{path:"/login",element:E.jsx(hD,{})}),E.jsx(nt,{path:"/signup",element:E.jsx(fD,{})}),E.jsx(nt,{path:"/*",element:E.jsx(tD,{children:E.jsx(ZA,{children:E.jsx(T.Suspense,{fallback:E.jsx(Jy,{}),children:E.jsxs(_g,{children:[E.jsx(nt,{path:"/",element:E.jsx(nD,{})}),E.jsx(nt,{path:"/cars",element:E.jsx(rD,{})}),E.jsx(nt,{path:"/cars/:id",element:E.jsx(iD,{})}),E.jsx(nt,{path:"/customers",element:E.jsx(sD,{})}),E.jsx(nt,{path:"/customers/:id",element:E.jsx(oD,{})}),E.jsx(nt,{path:"/dealers",element:E.jsx(aD,{})}),E.jsx(nt,{path:"/dealers/:id",element:E.jsx(lD,{})}),E.jsx(nt,{path:"/transactions",element:E.jsx(uD,{})}),E.jsx(nt,{path:"/financials",element:E.jsx(cD,{})}),E.jsx(nt,{path:"/maintenance",element:E.jsx(dD,{})}),E.jsx(nt,{path:"/billing",element:E.jsx(pD,{})}),E.jsx(nt,{path:"/billing/create",element:E.jsx(mD,{})}),E.jsx(nt,{path:"/billing/history",element:E.jsx(gD,{})}),E.jsx(nt,{path:"/billing/settings",element:E.jsx(yD,{})})]})})})})})]}),E.jsx(eD,{})]})})})})}class vD extends Yd.Component{constructor(e){super(e),this.state={hasError:!1,error:null,errorInfo:null}}static getDerivedStateFromError(e){return{hasError:!0}}componentDidCatch(e,t){this.setState({error:e,errorInfo:t}),console.error("Uncaught error:",e,t)}render(){return this.state.hasError?E.jsxs("div",{style:{padding:"20px",fontFamily:"system-ui"},children:[E.jsx("h1",{style:{color:"red"},children:"Something went wrong."}),E.jsxs("details",{style:{whiteSpace:"pre-wrap"},children:[this.state.error&&this.state.error.toString(),E.jsx("br",{}),this.state.errorInfo&&this.state.errorInfo.componentStack]})]}):this.props.children}}mC.createRoot(document.getElementById("root")).render(E.jsx(Yd.StrictMode,{children:E.jsx(vD,{children:E.jsx(_D,{})})}));export{yn as B,EA as C,xA as E,Ky as F,Di as I,rh as L,jA as P,CD as R,oE as S,Yy as U,YA as W,Al as X,vt as _,T as a,kP as b,lt as c,Kd as d,Ol as e,ii as f,Xy as g,kD as h,aE as i,E as j,lE as k,SD as l,lf as m,kA as n,Wn as o,ED as p,wD as q,hC as r,Yd as s,uf as u};
