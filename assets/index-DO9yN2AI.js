const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/Dashboard-cbeA5lxY.js","assets/Card-B5gOJ9q6.js","assets/clock-CoME7f_k.js","assets/dollar-sign-Bk3kBaAP.js","assets/BarChart-CPyLqyX7.js","assets/ellipsis-vertical-Cgm_Dhng.js","assets/Cars-DsmwMR0W.js","assets/EditCarDrawer-CJWoXadX.js","assets/search-BXVyE_VI.js","assets/funnel-D1u51A4O.js","assets/map-pin-ClJpZ8_l.js","assets/credit-card-P6vVCXSg.js","assets/calendar-Cm2ipw6b.js","assets/CarDetails-C_2a2O4R.js","assets/Tabs-WXIWl9LZ.js","assets/AddMaintenanceModal-BOcjnXZQ.js","assets/building-2-CxFFR0Zd.js","assets/upload-BouKtUFv.js","assets/react-pdf.browser-Cnr4z7hs.js","assets/Badge-DfwnfH1Q.js","assets/phone-pzfNl81N.js","assets/mail-BrMVXrAS.js","assets/square-pen-uDJZFKF5.js","assets/wallet-BV0XmBvV.js","assets/shield-check-BKy32ZFq.js","assets/Customers-OjSWDFPB.js","assets/EditCustomerModal-C8TW3vvu.js","assets/user-BGC-tFdv.js","assets/list-BFD88pv1.js","assets/chevron-left-Lkbx6YC2.js","assets/chevron-right-Cl42P7xL.js","assets/CustomerDetailsPage-HsrYdCWX.js","assets/EditTransactionModal-B3s6-lht.js","assets/trash-2-BZk56tzY.js","assets/ellipsis-BoCg419m.js","assets/arrow-left-CjGt94eD.js","assets/banknote-QslBg20O.js","assets/trending-up-ZncONRE4.js","assets/Dealers-WhHJiOIZ.js","assets/DealerDetailsPage-DkH319uF.js","assets/Transactions-BjiuDUQD.js","assets/Financials-CW33SJ_d.js","assets/Maintenance-D5_itn0d.js","assets/Sheet-CIiWLK1s.js","assets/Register-CyD0-HvJ.js","assets/Login-BrG4ldiT.js","assets/Signup-c0E7AVSj.js","assets/BillingDashboard-B12ftry5.js","assets/CreateInvoice-Bx6ydhyM.js","assets/InvoicePDF-CNCYNFGW.js","assets/save-DGM6hbsR.js","assets/BillingHistory-DlqZyNZp.js","assets/BillingSettings-LgBR8At1.js"])))=>i.map(i=>d[i]);
function iC(t,e){for(var n=0;n<e.length;n++){const s=e[n];if(typeof s!="string"&&!Array.isArray(s)){for(const o in s)if(o!=="default"&&!(o in t)){const l=Object.getOwnPropertyDescriptor(s,o);l&&Object.defineProperty(t,o,l.get?l:{enumerable:!0,get:()=>s[o]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function n(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(o){if(o.ep)return;o.ep=!0;const l=n(o);fetch(o.href,l)}})();var RD=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function e_(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function bD(t){if(Object.prototype.hasOwnProperty.call(t,"__esModule"))return t;var e=t.default;if(typeof e=="function"){var n=function s(){return this instanceof s?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};n.prototype=e.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(t).forEach(function(s){var o=Object.getOwnPropertyDescriptor(t,s);Object.defineProperty(n,s,o.get?o:{enumerable:!0,get:function(){return t[s]}})}),n}var nd={exports:{}},no={},rd={exports:{}},pe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sg;function sC(){if(sg)return pe;sg=1;var t=Symbol.for("react.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),c=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),_=Symbol.iterator;function v(T){return T===null||typeof T!="object"?null:(T=_&&T[_]||T["@@iterator"],typeof T=="function"?T:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},N=Object.assign,I={};function A(T,O,ne){this.props=T,this.context=O,this.refs=I,this.updater=ne||S}A.prototype.isReactComponent={},A.prototype.setState=function(T,O){if(typeof T!="object"&&typeof T!="function"&&T!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,T,O,"setState")},A.prototype.forceUpdate=function(T){this.updater.enqueueForceUpdate(this,T,"forceUpdate")};function z(){}z.prototype=A.prototype;function X(T,O,ne){this.props=T,this.context=O,this.refs=I,this.updater=ne||S}var U=X.prototype=new z;U.constructor=X,N(U,A.prototype),U.isPureReactComponent=!0;var q=Array.isArray,fe=Object.prototype.hasOwnProperty,Ee={current:null},Re={key:!0,ref:!0,__self:!0,__source:!0};function J(T,O,ne){var ie,de={},j=null,W=null;if(O!=null)for(ie in O.ref!==void 0&&(W=O.ref),O.key!==void 0&&(j=""+O.key),O)fe.call(O,ie)&&!Re.hasOwnProperty(ie)&&(de[ie]=O[ie]);var te=arguments.length-2;if(te===1)de.children=ne;else if(1<te){for(var ae=Array(te),Ae=0;Ae<te;Ae++)ae[Ae]=arguments[Ae+2];de.children=ae}if(T&&T.defaultProps)for(ie in te=T.defaultProps,te)de[ie]===void 0&&(de[ie]=te[ie]);return{$$typeof:t,type:T,key:j,ref:W,props:de,_owner:Ee.current}}function Ce(T,O){return{$$typeof:t,type:T.type,key:O,ref:T.ref,props:T.props,_owner:T._owner}}function He(T){return typeof T=="object"&&T!==null&&T.$$typeof===t}function kt(T){var O={"=":"=0",":":"=2"};return"$"+T.replace(/[=:]/g,function(ne){return O[ne]})}var ht=/\/+/g;function rt(T,O){return typeof T=="object"&&T!==null&&T.key!=null?kt(""+T.key):O.toString(36)}function ft(T,O,ne,ie,de){var j=typeof T;(j==="undefined"||j==="boolean")&&(T=null);var W=!1;if(T===null)W=!0;else switch(j){case"string":case"number":W=!0;break;case"object":switch(T.$$typeof){case t:case e:W=!0}}if(W)return W=T,de=de(W),T=ie===""?"."+rt(W,0):ie,q(de)?(ne="",T!=null&&(ne=T.replace(ht,"$&/")+"/"),ft(de,O,ne,"",function(Ae){return Ae})):de!=null&&(He(de)&&(de=Ce(de,ne+(!de.key||W&&W.key===de.key?"":(""+de.key).replace(ht,"$&/")+"/")+T)),O.push(de)),1;if(W=0,ie=ie===""?".":ie+":",q(T))for(var te=0;te<T.length;te++){j=T[te];var ae=ie+rt(j,te);W+=ft(j,O,ne,ae,de)}else if(ae=v(T),typeof ae=="function")for(T=ae.call(T),te=0;!(j=T.next()).done;)j=j.value,ae=ie+rt(j,te++),W+=ft(j,O,ne,ae,de);else if(j==="object")throw O=String(T),Error("Objects are not valid as a React child (found: "+(O==="[object Object]"?"object with keys {"+Object.keys(T).join(", ")+"}":O)+"). If you meant to render a collection of children, use an array instead.");return W}function Qe(T,O,ne){if(T==null)return T;var ie=[],de=0;return ft(T,ie,"","",function(j){return O.call(ne,j,de++)}),ie}function Pe(T){if(T._status===-1){var O=T._result;O=O(),O.then(function(ne){(T._status===0||T._status===-1)&&(T._status=1,T._result=ne)},function(ne){(T._status===0||T._status===-1)&&(T._status=2,T._result=ne)}),T._status===-1&&(T._status=0,T._result=O)}if(T._status===1)return T._result.default;throw T._result}var ke={current:null},D={transition:null},re={ReactCurrentDispatcher:ke,ReactCurrentBatchConfig:D,ReactCurrentOwner:Ee};function V(){throw Error("act(...) is not supported in production builds of React.")}return pe.Children={map:Qe,forEach:function(T,O,ne){Qe(T,function(){O.apply(this,arguments)},ne)},count:function(T){var O=0;return Qe(T,function(){O++}),O},toArray:function(T){return Qe(T,function(O){return O})||[]},only:function(T){if(!He(T))throw Error("React.Children.only expected to receive a single React element child.");return T}},pe.Component=A,pe.Fragment=n,pe.Profiler=o,pe.PureComponent=X,pe.StrictMode=s,pe.Suspense=f,pe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=re,pe.act=V,pe.cloneElement=function(T,O,ne){if(T==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+T+".");var ie=N({},T.props),de=T.key,j=T.ref,W=T._owner;if(O!=null){if(O.ref!==void 0&&(j=O.ref,W=Ee.current),O.key!==void 0&&(de=""+O.key),T.type&&T.type.defaultProps)var te=T.type.defaultProps;for(ae in O)fe.call(O,ae)&&!Re.hasOwnProperty(ae)&&(ie[ae]=O[ae]===void 0&&te!==void 0?te[ae]:O[ae])}var ae=arguments.length-2;if(ae===1)ie.children=ne;else if(1<ae){te=Array(ae);for(var Ae=0;Ae<ae;Ae++)te[Ae]=arguments[Ae+2];ie.children=te}return{$$typeof:t,type:T.type,key:de,ref:j,props:ie,_owner:W}},pe.createContext=function(T){return T={$$typeof:c,_currentValue:T,_currentValue2:T,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},T.Provider={$$typeof:l,_context:T},T.Consumer=T},pe.createElement=J,pe.createFactory=function(T){var O=J.bind(null,T);return O.type=T,O},pe.createRef=function(){return{current:null}},pe.forwardRef=function(T){return{$$typeof:h,render:T}},pe.isValidElement=He,pe.lazy=function(T){return{$$typeof:y,_payload:{_status:-1,_result:T},_init:Pe}},pe.memo=function(T,O){return{$$typeof:m,type:T,compare:O===void 0?null:O}},pe.startTransition=function(T){var O=D.transition;D.transition={};try{T()}finally{D.transition=O}},pe.unstable_act=V,pe.useCallback=function(T,O){return ke.current.useCallback(T,O)},pe.useContext=function(T){return ke.current.useContext(T)},pe.useDebugValue=function(){},pe.useDeferredValue=function(T){return ke.current.useDeferredValue(T)},pe.useEffect=function(T,O){return ke.current.useEffect(T,O)},pe.useId=function(){return ke.current.useId()},pe.useImperativeHandle=function(T,O,ne){return ke.current.useImperativeHandle(T,O,ne)},pe.useInsertionEffect=function(T,O){return ke.current.useInsertionEffect(T,O)},pe.useLayoutEffect=function(T,O){return ke.current.useLayoutEffect(T,O)},pe.useMemo=function(T,O){return ke.current.useMemo(T,O)},pe.useReducer=function(T,O,ne){return ke.current.useReducer(T,O,ne)},pe.useRef=function(T){return ke.current.useRef(T)},pe.useState=function(T){return ke.current.useState(T)},pe.useSyncExternalStore=function(T,O,ne){return ke.current.useSyncExternalStore(T,O,ne)},pe.useTransition=function(){return ke.current.useTransition()},pe.version="18.3.1",pe}var og;function nh(){return og||(og=1,rd.exports=sC()),rd.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ag;function oC(){if(ag)return no;ag=1;var t=nh(),e=Symbol.for("react.element"),n=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,o=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(h,f,m){var y,_={},v=null,S=null;m!==void 0&&(v=""+m),f.key!==void 0&&(v=""+f.key),f.ref!==void 0&&(S=f.ref);for(y in f)s.call(f,y)&&!l.hasOwnProperty(y)&&(_[y]=f[y]);if(h&&h.defaultProps)for(y in f=h.defaultProps,f)_[y]===void 0&&(_[y]=f[y]);return{$$typeof:e,type:h,key:v,ref:S,props:_,_owner:o.current}}return no.Fragment=n,no.jsx=c,no.jsxs=c,no}var lg;function aC(){return lg||(lg=1,nd.exports=oC()),nd.exports}var E=aC(),x=nh();const rh=e_(x),ND=iC({__proto__:null,default:rh},[x]);var tl={},id={exports:{}},Ot={},sd={exports:{}},od={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ug;function lC(){return ug||(ug=1,(function(t){function e(D,re){var V=D.length;D.push(re);e:for(;0<V;){var T=V-1>>>1,O=D[T];if(0<o(O,re))D[T]=re,D[V]=O,V=T;else break e}}function n(D){return D.length===0?null:D[0]}function s(D){if(D.length===0)return null;var re=D[0],V=D.pop();if(V!==re){D[0]=V;e:for(var T=0,O=D.length,ne=O>>>1;T<ne;){var ie=2*(T+1)-1,de=D[ie],j=ie+1,W=D[j];if(0>o(de,V))j<O&&0>o(W,de)?(D[T]=W,D[j]=V,T=j):(D[T]=de,D[ie]=V,T=ie);else if(j<O&&0>o(W,V))D[T]=W,D[j]=V,T=j;else break e}}return re}function o(D,re){var V=D.sortIndex-re.sortIndex;return V!==0?V:D.id-re.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;t.unstable_now=function(){return l.now()}}else{var c=Date,h=c.now();t.unstable_now=function(){return c.now()-h}}var f=[],m=[],y=1,_=null,v=3,S=!1,N=!1,I=!1,A=typeof setTimeout=="function"?setTimeout:null,z=typeof clearTimeout=="function"?clearTimeout:null,X=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function U(D){for(var re=n(m);re!==null;){if(re.callback===null)s(m);else if(re.startTime<=D)s(m),re.sortIndex=re.expirationTime,e(f,re);else break;re=n(m)}}function q(D){if(I=!1,U(D),!N)if(n(f)!==null)N=!0,Pe(fe);else{var re=n(m);re!==null&&ke(q,re.startTime-D)}}function fe(D,re){N=!1,I&&(I=!1,z(J),J=-1),S=!0;var V=v;try{for(U(re),_=n(f);_!==null&&(!(_.expirationTime>re)||D&&!kt());){var T=_.callback;if(typeof T=="function"){_.callback=null,v=_.priorityLevel;var O=T(_.expirationTime<=re);re=t.unstable_now(),typeof O=="function"?_.callback=O:_===n(f)&&s(f),U(re)}else s(f);_=n(f)}if(_!==null)var ne=!0;else{var ie=n(m);ie!==null&&ke(q,ie.startTime-re),ne=!1}return ne}finally{_=null,v=V,S=!1}}var Ee=!1,Re=null,J=-1,Ce=5,He=-1;function kt(){return!(t.unstable_now()-He<Ce)}function ht(){if(Re!==null){var D=t.unstable_now();He=D;var re=!0;try{re=Re(!0,D)}finally{re?rt():(Ee=!1,Re=null)}}else Ee=!1}var rt;if(typeof X=="function")rt=function(){X(ht)};else if(typeof MessageChannel<"u"){var ft=new MessageChannel,Qe=ft.port2;ft.port1.onmessage=ht,rt=function(){Qe.postMessage(null)}}else rt=function(){A(ht,0)};function Pe(D){Re=D,Ee||(Ee=!0,rt())}function ke(D,re){J=A(function(){D(t.unstable_now())},re)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(D){D.callback=null},t.unstable_continueExecution=function(){N||S||(N=!0,Pe(fe))},t.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Ce=0<D?Math.floor(1e3/D):5},t.unstable_getCurrentPriorityLevel=function(){return v},t.unstable_getFirstCallbackNode=function(){return n(f)},t.unstable_next=function(D){switch(v){case 1:case 2:case 3:var re=3;break;default:re=v}var V=v;v=re;try{return D()}finally{v=V}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(D,re){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var V=v;v=D;try{return re()}finally{v=V}},t.unstable_scheduleCallback=function(D,re,V){var T=t.unstable_now();switch(typeof V=="object"&&V!==null?(V=V.delay,V=typeof V=="number"&&0<V?T+V:T):V=T,D){case 1:var O=-1;break;case 2:O=250;break;case 5:O=1073741823;break;case 4:O=1e4;break;default:O=5e3}return O=V+O,D={id:y++,callback:re,priorityLevel:D,startTime:V,expirationTime:O,sortIndex:-1},V>T?(D.sortIndex=V,e(m,D),n(f)===null&&D===n(m)&&(I?(z(J),J=-1):I=!0,ke(q,V-T))):(D.sortIndex=O,e(f,D),N||S||(N=!0,Pe(fe))),D},t.unstable_shouldYield=kt,t.unstable_wrapCallback=function(D){var re=v;return function(){var V=v;v=re;try{return D.apply(this,arguments)}finally{v=V}}}})(od)),od}var cg;function uC(){return cg||(cg=1,sd.exports=lC()),sd.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dg;function cC(){if(dg)return Ot;dg=1;var t=nh(),e=uC();function n(r){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+r,a=1;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+r+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,o={};function l(r,i){c(r,i),c(r+"Capture",i)}function c(r,i){for(o[r]=i,r=0;r<i.length;r++)s.add(i[r])}var h=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),f=Object.prototype.hasOwnProperty,m=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,y={},_={};function v(r){return f.call(_,r)?!0:f.call(y,r)?!1:m.test(r)?_[r]=!0:(y[r]=!0,!1)}function S(r,i,a,u){if(a!==null&&a.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return u?!1:a!==null?!a.acceptsBooleans:(r=r.toLowerCase().slice(0,5),r!=="data-"&&r!=="aria-");default:return!1}}function N(r,i,a,u){if(i===null||typeof i>"u"||S(r,i,a,u))return!0;if(u)return!1;if(a!==null)switch(a.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function I(r,i,a,u,d,p,g){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=u,this.attributeNamespace=d,this.mustUseProperty=a,this.propertyName=r,this.type=i,this.sanitizeURL=p,this.removeEmptyString=g}var A={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(r){A[r]=new I(r,0,!1,r,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(r){var i=r[0];A[i]=new I(i,1,!1,r[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(r){A[r]=new I(r,2,!1,r.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(r){A[r]=new I(r,2,!1,r,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(r){A[r]=new I(r,3,!1,r.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(r){A[r]=new I(r,3,!0,r,null,!1,!1)}),["capture","download"].forEach(function(r){A[r]=new I(r,4,!1,r,null,!1,!1)}),["cols","rows","size","span"].forEach(function(r){A[r]=new I(r,6,!1,r,null,!1,!1)}),["rowSpan","start"].forEach(function(r){A[r]=new I(r,5,!1,r.toLowerCase(),null,!1,!1)});var z=/[\-:]([a-z])/g;function X(r){return r[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(r){var i=r.replace(z,X);A[i]=new I(i,1,!1,r,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(r){var i=r.replace(z,X);A[i]=new I(i,1,!1,r,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(r){var i=r.replace(z,X);A[i]=new I(i,1,!1,r,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(r){A[r]=new I(r,1,!1,r.toLowerCase(),null,!1,!1)}),A.xlinkHref=new I("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(r){A[r]=new I(r,1,!1,r.toLowerCase(),null,!0,!0)});function U(r,i,a,u){var d=A.hasOwnProperty(i)?A[i]:null;(d!==null?d.type!==0:u||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(N(i,a,d,u)&&(a=null),u||d===null?v(i)&&(a===null?r.removeAttribute(i):r.setAttribute(i,""+a)):d.mustUseProperty?r[d.propertyName]=a===null?d.type===3?!1:"":a:(i=d.attributeName,u=d.attributeNamespace,a===null?r.removeAttribute(i):(d=d.type,a=d===3||d===4&&a===!0?"":""+a,u?r.setAttributeNS(u,i,a):r.setAttribute(i,a))))}var q=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,fe=Symbol.for("react.element"),Ee=Symbol.for("react.portal"),Re=Symbol.for("react.fragment"),J=Symbol.for("react.strict_mode"),Ce=Symbol.for("react.profiler"),He=Symbol.for("react.provider"),kt=Symbol.for("react.context"),ht=Symbol.for("react.forward_ref"),rt=Symbol.for("react.suspense"),ft=Symbol.for("react.suspense_list"),Qe=Symbol.for("react.memo"),Pe=Symbol.for("react.lazy"),ke=Symbol.for("react.offscreen"),D=Symbol.iterator;function re(r){return r===null||typeof r!="object"?null:(r=D&&r[D]||r["@@iterator"],typeof r=="function"?r:null)}var V=Object.assign,T;function O(r){if(T===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);T=i&&i[1]||""}return`
`+T+r}var ne=!1;function ie(r,i){if(!r||ne)return"";ne=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(P){var u=P}Reflect.construct(r,[],i)}else{try{i.call()}catch(P){u=P}r.call(i.prototype)}else{try{throw Error()}catch(P){u=P}r()}}catch(P){if(P&&u&&typeof P.stack=="string"){for(var d=P.stack.split(`
`),p=u.stack.split(`
`),g=d.length-1,w=p.length-1;1<=g&&0<=w&&d[g]!==p[w];)w--;for(;1<=g&&0<=w;g--,w--)if(d[g]!==p[w]){if(g!==1||w!==1)do if(g--,w--,0>w||d[g]!==p[w]){var C=`
`+d[g].replace(" at new "," at ");return r.displayName&&C.includes("<anonymous>")&&(C=C.replace("<anonymous>",r.displayName)),C}while(1<=g&&0<=w);break}}}finally{ne=!1,Error.prepareStackTrace=a}return(r=r?r.displayName||r.name:"")?O(r):""}function de(r){switch(r.tag){case 5:return O(r.type);case 16:return O("Lazy");case 13:return O("Suspense");case 19:return O("SuspenseList");case 0:case 2:case 15:return r=ie(r.type,!1),r;case 11:return r=ie(r.type.render,!1),r;case 1:return r=ie(r.type,!0),r;default:return""}}function j(r){if(r==null)return null;if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r;switch(r){case Re:return"Fragment";case Ee:return"Portal";case Ce:return"Profiler";case J:return"StrictMode";case rt:return"Suspense";case ft:return"SuspenseList"}if(typeof r=="object")switch(r.$$typeof){case kt:return(r.displayName||"Context")+".Consumer";case He:return(r._context.displayName||"Context")+".Provider";case ht:var i=r.render;return r=r.displayName,r||(r=i.displayName||i.name||"",r=r!==""?"ForwardRef("+r+")":"ForwardRef"),r;case Qe:return i=r.displayName||null,i!==null?i:j(r.type)||"Memo";case Pe:i=r._payload,r=r._init;try{return j(r(i))}catch{}}return null}function W(r){var i=r.type;switch(r.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return r=i.render,r=r.displayName||r.name||"",i.displayName||(r!==""?"ForwardRef("+r+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return j(i);case 8:return i===J?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function te(r){switch(typeof r){case"boolean":case"number":case"string":case"undefined":return r;case"object":return r;default:return""}}function ae(r){var i=r.type;return(r=r.nodeName)&&r.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Ae(r){var i=ae(r)?"checked":"value",a=Object.getOwnPropertyDescriptor(r.constructor.prototype,i),u=""+r[i];if(!r.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var d=a.get,p=a.set;return Object.defineProperty(r,i,{configurable:!0,get:function(){return d.call(this)},set:function(g){u=""+g,p.call(this,g)}}),Object.defineProperty(r,i,{enumerable:a.enumerable}),{getValue:function(){return u},setValue:function(g){u=""+g},stopTracking:function(){r._valueTracker=null,delete r[i]}}}}function Ie(r){r._valueTracker||(r._valueTracker=Ae(r))}function Ke(r){if(!r)return!1;var i=r._valueTracker;if(!i)return!0;var a=i.getValue(),u="";return r&&(u=ae(r)?r.checked?"true":"false":r.value),r=u,r!==a?(i.setValue(r),!0):!1}function Ft(r){if(r=r||(typeof document<"u"?document:void 0),typeof r>"u")return null;try{return r.activeElement||r.body}catch{return r.body}}function Yn(r,i){var a=i.checked;return V({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??r._wrapperState.initialChecked})}function xn(r,i){var a=i.defaultValue==null?"":i.defaultValue,u=i.checked!=null?i.checked:i.defaultChecked;a=te(i.value!=null?i.value:a),r._wrapperState={initialChecked:u,initialValue:a,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function Vo(r,i){i=i.checked,i!=null&&U(r,"checked",i,!1)}function ms(r,i){Vo(r,i);var a=te(i.value),u=i.type;if(a!=null)u==="number"?(a===0&&r.value===""||r.value!=a)&&(r.value=""+a):r.value!==""+a&&(r.value=""+a);else if(u==="submit"||u==="reset"){r.removeAttribute("value");return}i.hasOwnProperty("value")?gs(r,i.type,a):i.hasOwnProperty("defaultValue")&&gs(r,i.type,te(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(r.defaultChecked=!!i.defaultChecked)}function Ho(r,i,a){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var u=i.type;if(!(u!=="submit"&&u!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+r._wrapperState.initialValue,a||i===r.value||(r.value=i),r.defaultValue=i}a=r.name,a!==""&&(r.name=""),r.defaultChecked=!!r._wrapperState.initialChecked,a!==""&&(r.name=a)}function gs(r,i,a){(i!=="number"||Ft(r.ownerDocument)!==r)&&(a==null?r.defaultValue=""+r._wrapperState.initialValue:r.defaultValue!==""+a&&(r.defaultValue=""+a))}var Lr=Array.isArray;function Qn(r,i,a,u){if(r=r.options,i){i={};for(var d=0;d<a.length;d++)i["$"+a[d]]=!0;for(a=0;a<r.length;a++)d=i.hasOwnProperty("$"+r[a].value),r[a].selected!==d&&(r[a].selected=d),d&&u&&(r[a].defaultSelected=!0)}else{for(a=""+te(a),i=null,d=0;d<r.length;d++){if(r[d].value===a){r[d].selected=!0,u&&(r[d].defaultSelected=!0);return}i!==null||r[d].disabled||(i=r[d])}i!==null&&(i.selected=!0)}}function ys(r,i){if(i.dangerouslySetInnerHTML!=null)throw Error(n(91));return V({},i,{value:void 0,defaultValue:void 0,children:""+r._wrapperState.initialValue})}function Go(r,i){var a=i.value;if(a==null){if(a=i.children,i=i.defaultValue,a!=null){if(i!=null)throw Error(n(92));if(Lr(a)){if(1<a.length)throw Error(n(93));a=a[0]}i=a}i==null&&(i=""),a=i}r._wrapperState={initialValue:te(a)}}function it(r,i){var a=te(i.value),u=te(i.defaultValue);a!=null&&(a=""+a,a!==r.value&&(r.value=a),i.defaultValue==null&&r.defaultValue!==a&&(r.defaultValue=a)),u!=null&&(r.defaultValue=""+u)}function yf(r){var i=r.textContent;i===r._wrapperState.initialValue&&i!==""&&i!==null&&(r.value=i)}function _f(r){switch(r){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function fu(r,i){return r==null||r==="http://www.w3.org/1999/xhtml"?_f(i):r==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":r}var qo,vf=(function(r){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,a,u,d){MSApp.execUnsafeLocalFunction(function(){return r(i,a,u,d)})}:r})(function(r,i){if(r.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in r)r.innerHTML=i;else{for(qo=qo||document.createElement("div"),qo.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=qo.firstChild;r.firstChild;)r.removeChild(r.firstChild);for(;i.firstChild;)r.appendChild(i.firstChild)}});function _s(r,i){if(i){var a=r.firstChild;if(a&&a===r.lastChild&&a.nodeType===3){a.nodeValue=i;return}}r.textContent=i}var vs={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},lE=["Webkit","ms","Moz","O"];Object.keys(vs).forEach(function(r){lE.forEach(function(i){i=i+r.charAt(0).toUpperCase()+r.substring(1),vs[i]=vs[r]})});function wf(r,i,a){return i==null||typeof i=="boolean"||i===""?"":a||typeof i!="number"||i===0||vs.hasOwnProperty(r)&&vs[r]?(""+i).trim():i+"px"}function Ef(r,i){r=r.style;for(var a in i)if(i.hasOwnProperty(a)){var u=a.indexOf("--")===0,d=wf(a,i[a],u);a==="float"&&(a="cssFloat"),u?r.setProperty(a,d):r[a]=d}}var uE=V({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function pu(r,i){if(i){if(uE[r]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(n(137,r));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(n(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(n(61))}if(i.style!=null&&typeof i.style!="object")throw Error(n(62))}}function mu(r,i){if(r.indexOf("-")===-1)return typeof i.is=="string";switch(r){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var gu=null;function yu(r){return r=r.target||r.srcElement||window,r.correspondingUseElement&&(r=r.correspondingUseElement),r.nodeType===3?r.parentNode:r}var _u=null,mi=null,gi=null;function Cf(r){if(r=$s(r)){if(typeof _u!="function")throw Error(n(280));var i=r.stateNode;i&&(i=ga(i),_u(r.stateNode,r.type,i))}}function kf(r){mi?gi?gi.push(r):gi=[r]:mi=r}function Sf(){if(mi){var r=mi,i=gi;if(gi=mi=null,Cf(r),i)for(r=0;r<i.length;r++)Cf(i[r])}}function If(r,i){return r(i)}function Tf(){}var vu=!1;function xf(r,i,a){if(vu)return r(i,a);vu=!0;try{return If(r,i,a)}finally{vu=!1,(mi!==null||gi!==null)&&(Tf(),Sf())}}function ws(r,i){var a=r.stateNode;if(a===null)return null;var u=ga(a);if(u===null)return null;a=u[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(r=r.type,u=!(r==="button"||r==="input"||r==="select"||r==="textarea")),r=!u;break e;default:r=!1}if(r)return null;if(a&&typeof a!="function")throw Error(n(231,i,typeof a));return a}var wu=!1;if(h)try{var Es={};Object.defineProperty(Es,"passive",{get:function(){wu=!0}}),window.addEventListener("test",Es,Es),window.removeEventListener("test",Es,Es)}catch{wu=!1}function cE(r,i,a,u,d,p,g,w,C){var P=Array.prototype.slice.call(arguments,3);try{i.apply(a,P)}catch(M){this.onError(M)}}var Cs=!1,Ko=null,Yo=!1,Eu=null,dE={onError:function(r){Cs=!0,Ko=r}};function hE(r,i,a,u,d,p,g,w,C){Cs=!1,Ko=null,cE.apply(dE,arguments)}function fE(r,i,a,u,d,p,g,w,C){if(hE.apply(this,arguments),Cs){if(Cs){var P=Ko;Cs=!1,Ko=null}else throw Error(n(198));Yo||(Yo=!0,Eu=P)}}function Mr(r){var i=r,a=r;if(r.alternate)for(;i.return;)i=i.return;else{r=i;do i=r,(i.flags&4098)!==0&&(a=i.return),r=i.return;while(r)}return i.tag===3?a:null}function Rf(r){if(r.tag===13){var i=r.memoizedState;if(i===null&&(r=r.alternate,r!==null&&(i=r.memoizedState)),i!==null)return i.dehydrated}return null}function bf(r){if(Mr(r)!==r)throw Error(n(188))}function pE(r){var i=r.alternate;if(!i){if(i=Mr(r),i===null)throw Error(n(188));return i!==r?null:r}for(var a=r,u=i;;){var d=a.return;if(d===null)break;var p=d.alternate;if(p===null){if(u=d.return,u!==null){a=u;continue}break}if(d.child===p.child){for(p=d.child;p;){if(p===a)return bf(d),r;if(p===u)return bf(d),i;p=p.sibling}throw Error(n(188))}if(a.return!==u.return)a=d,u=p;else{for(var g=!1,w=d.child;w;){if(w===a){g=!0,a=d,u=p;break}if(w===u){g=!0,u=d,a=p;break}w=w.sibling}if(!g){for(w=p.child;w;){if(w===a){g=!0,a=p,u=d;break}if(w===u){g=!0,u=p,a=d;break}w=w.sibling}if(!g)throw Error(n(189))}}if(a.alternate!==u)throw Error(n(190))}if(a.tag!==3)throw Error(n(188));return a.stateNode.current===a?r:i}function Nf(r){return r=pE(r),r!==null?Pf(r):null}function Pf(r){if(r.tag===5||r.tag===6)return r;for(r=r.child;r!==null;){var i=Pf(r);if(i!==null)return i;r=r.sibling}return null}var Af=e.unstable_scheduleCallback,Df=e.unstable_cancelCallback,mE=e.unstable_shouldYield,gE=e.unstable_requestPaint,Ge=e.unstable_now,yE=e.unstable_getCurrentPriorityLevel,Cu=e.unstable_ImmediatePriority,Of=e.unstable_UserBlockingPriority,Qo=e.unstable_NormalPriority,_E=e.unstable_LowPriority,Lf=e.unstable_IdlePriority,Jo=null,gn=null;function vE(r){if(gn&&typeof gn.onCommitFiberRoot=="function")try{gn.onCommitFiberRoot(Jo,r,void 0,(r.current.flags&128)===128)}catch{}}var Zt=Math.clz32?Math.clz32:CE,wE=Math.log,EE=Math.LN2;function CE(r){return r>>>=0,r===0?32:31-(wE(r)/EE|0)|0}var Xo=64,Zo=4194304;function ks(r){switch(r&-r){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return r&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return r}}function ea(r,i){var a=r.pendingLanes;if(a===0)return 0;var u=0,d=r.suspendedLanes,p=r.pingedLanes,g=a&268435455;if(g!==0){var w=g&~d;w!==0?u=ks(w):(p&=g,p!==0&&(u=ks(p)))}else g=a&~d,g!==0?u=ks(g):p!==0&&(u=ks(p));if(u===0)return 0;if(i!==0&&i!==u&&(i&d)===0&&(d=u&-u,p=i&-i,d>=p||d===16&&(p&4194240)!==0))return i;if((u&4)!==0&&(u|=a&16),i=r.entangledLanes,i!==0)for(r=r.entanglements,i&=u;0<i;)a=31-Zt(i),d=1<<a,u|=r[a],i&=~d;return u}function kE(r,i){switch(r){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function SE(r,i){for(var a=r.suspendedLanes,u=r.pingedLanes,d=r.expirationTimes,p=r.pendingLanes;0<p;){var g=31-Zt(p),w=1<<g,C=d[g];C===-1?((w&a)===0||(w&u)!==0)&&(d[g]=kE(w,i)):C<=i&&(r.expiredLanes|=w),p&=~w}}function ku(r){return r=r.pendingLanes&-1073741825,r!==0?r:r&1073741824?1073741824:0}function Mf(){var r=Xo;return Xo<<=1,(Xo&4194240)===0&&(Xo=64),r}function Su(r){for(var i=[],a=0;31>a;a++)i.push(r);return i}function Ss(r,i,a){r.pendingLanes|=i,i!==536870912&&(r.suspendedLanes=0,r.pingedLanes=0),r=r.eventTimes,i=31-Zt(i),r[i]=a}function IE(r,i){var a=r.pendingLanes&~i;r.pendingLanes=i,r.suspendedLanes=0,r.pingedLanes=0,r.expiredLanes&=i,r.mutableReadLanes&=i,r.entangledLanes&=i,i=r.entanglements;var u=r.eventTimes;for(r=r.expirationTimes;0<a;){var d=31-Zt(a),p=1<<d;i[d]=0,u[d]=-1,r[d]=-1,a&=~p}}function Iu(r,i){var a=r.entangledLanes|=i;for(r=r.entanglements;a;){var u=31-Zt(a),d=1<<u;d&i|r[u]&i&&(r[u]|=i),a&=~d}}var xe=0;function Ff(r){return r&=-r,1<r?4<r?(r&268435455)!==0?16:536870912:4:1}var jf,Tu,Uf,zf,$f,xu=!1,ta=[],Jn=null,Xn=null,Zn=null,Is=new Map,Ts=new Map,er=[],TE="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Wf(r,i){switch(r){case"focusin":case"focusout":Jn=null;break;case"dragenter":case"dragleave":Xn=null;break;case"mouseover":case"mouseout":Zn=null;break;case"pointerover":case"pointerout":Is.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ts.delete(i.pointerId)}}function xs(r,i,a,u,d,p){return r===null||r.nativeEvent!==p?(r={blockedOn:i,domEventName:a,eventSystemFlags:u,nativeEvent:p,targetContainers:[d]},i!==null&&(i=$s(i),i!==null&&Tu(i)),r):(r.eventSystemFlags|=u,i=r.targetContainers,d!==null&&i.indexOf(d)===-1&&i.push(d),r)}function xE(r,i,a,u,d){switch(i){case"focusin":return Jn=xs(Jn,r,i,a,u,d),!0;case"dragenter":return Xn=xs(Xn,r,i,a,u,d),!0;case"mouseover":return Zn=xs(Zn,r,i,a,u,d),!0;case"pointerover":var p=d.pointerId;return Is.set(p,xs(Is.get(p)||null,r,i,a,u,d)),!0;case"gotpointercapture":return p=d.pointerId,Ts.set(p,xs(Ts.get(p)||null,r,i,a,u,d)),!0}return!1}function Bf(r){var i=Fr(r.target);if(i!==null){var a=Mr(i);if(a!==null){if(i=a.tag,i===13){if(i=Rf(a),i!==null){r.blockedOn=i,$f(r.priority,function(){Uf(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){r.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}r.blockedOn=null}function na(r){if(r.blockedOn!==null)return!1;for(var i=r.targetContainers;0<i.length;){var a=bu(r.domEventName,r.eventSystemFlags,i[0],r.nativeEvent);if(a===null){a=r.nativeEvent;var u=new a.constructor(a.type,a);gu=u,a.target.dispatchEvent(u),gu=null}else return i=$s(a),i!==null&&Tu(i),r.blockedOn=a,!1;i.shift()}return!0}function Vf(r,i,a){na(r)&&a.delete(i)}function RE(){xu=!1,Jn!==null&&na(Jn)&&(Jn=null),Xn!==null&&na(Xn)&&(Xn=null),Zn!==null&&na(Zn)&&(Zn=null),Is.forEach(Vf),Ts.forEach(Vf)}function Rs(r,i){r.blockedOn===i&&(r.blockedOn=null,xu||(xu=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,RE)))}function bs(r){function i(d){return Rs(d,r)}if(0<ta.length){Rs(ta[0],r);for(var a=1;a<ta.length;a++){var u=ta[a];u.blockedOn===r&&(u.blockedOn=null)}}for(Jn!==null&&Rs(Jn,r),Xn!==null&&Rs(Xn,r),Zn!==null&&Rs(Zn,r),Is.forEach(i),Ts.forEach(i),a=0;a<er.length;a++)u=er[a],u.blockedOn===r&&(u.blockedOn=null);for(;0<er.length&&(a=er[0],a.blockedOn===null);)Bf(a),a.blockedOn===null&&er.shift()}var yi=q.ReactCurrentBatchConfig,ra=!0;function bE(r,i,a,u){var d=xe,p=yi.transition;yi.transition=null;try{xe=1,Ru(r,i,a,u)}finally{xe=d,yi.transition=p}}function NE(r,i,a,u){var d=xe,p=yi.transition;yi.transition=null;try{xe=4,Ru(r,i,a,u)}finally{xe=d,yi.transition=p}}function Ru(r,i,a,u){if(ra){var d=bu(r,i,a,u);if(d===null)Gu(r,i,u,ia,a),Wf(r,u);else if(xE(d,r,i,a,u))u.stopPropagation();else if(Wf(r,u),i&4&&-1<TE.indexOf(r)){for(;d!==null;){var p=$s(d);if(p!==null&&jf(p),p=bu(r,i,a,u),p===null&&Gu(r,i,u,ia,a),p===d)break;d=p}d!==null&&u.stopPropagation()}else Gu(r,i,u,null,a)}}var ia=null;function bu(r,i,a,u){if(ia=null,r=yu(u),r=Fr(r),r!==null)if(i=Mr(r),i===null)r=null;else if(a=i.tag,a===13){if(r=Rf(i),r!==null)return r;r=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;r=null}else i!==r&&(r=null);return ia=r,null}function Hf(r){switch(r){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(yE()){case Cu:return 1;case Of:return 4;case Qo:case _E:return 16;case Lf:return 536870912;default:return 16}default:return 16}}var tr=null,Nu=null,sa=null;function Gf(){if(sa)return sa;var r,i=Nu,a=i.length,u,d="value"in tr?tr.value:tr.textContent,p=d.length;for(r=0;r<a&&i[r]===d[r];r++);var g=a-r;for(u=1;u<=g&&i[a-u]===d[p-u];u++);return sa=d.slice(r,1<u?1-u:void 0)}function oa(r){var i=r.keyCode;return"charCode"in r?(r=r.charCode,r===0&&i===13&&(r=13)):r=i,r===10&&(r=13),32<=r||r===13?r:0}function aa(){return!0}function qf(){return!1}function jt(r){function i(a,u,d,p,g){this._reactName=a,this._targetInst=d,this.type=u,this.nativeEvent=p,this.target=g,this.currentTarget=null;for(var w in r)r.hasOwnProperty(w)&&(a=r[w],this[w]=a?a(p):p[w]);return this.isDefaultPrevented=(p.defaultPrevented!=null?p.defaultPrevented:p.returnValue===!1)?aa:qf,this.isPropagationStopped=qf,this}return V(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=aa)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=aa)},persist:function(){},isPersistent:aa}),i}var _i={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(r){return r.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Pu=jt(_i),Ns=V({},_i,{view:0,detail:0}),PE=jt(Ns),Au,Du,Ps,la=V({},Ns,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Lu,button:0,buttons:0,relatedTarget:function(r){return r.relatedTarget===void 0?r.fromElement===r.srcElement?r.toElement:r.fromElement:r.relatedTarget},movementX:function(r){return"movementX"in r?r.movementX:(r!==Ps&&(Ps&&r.type==="mousemove"?(Au=r.screenX-Ps.screenX,Du=r.screenY-Ps.screenY):Du=Au=0,Ps=r),Au)},movementY:function(r){return"movementY"in r?r.movementY:Du}}),Kf=jt(la),AE=V({},la,{dataTransfer:0}),DE=jt(AE),OE=V({},Ns,{relatedTarget:0}),Ou=jt(OE),LE=V({},_i,{animationName:0,elapsedTime:0,pseudoElement:0}),ME=jt(LE),FE=V({},_i,{clipboardData:function(r){return"clipboardData"in r?r.clipboardData:window.clipboardData}}),jE=jt(FE),UE=V({},_i,{data:0}),Yf=jt(UE),zE={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},$E={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},WE={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function BE(r){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(r):(r=WE[r])?!!i[r]:!1}function Lu(){return BE}var VE=V({},Ns,{key:function(r){if(r.key){var i=zE[r.key]||r.key;if(i!=="Unidentified")return i}return r.type==="keypress"?(r=oa(r),r===13?"Enter":String.fromCharCode(r)):r.type==="keydown"||r.type==="keyup"?$E[r.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Lu,charCode:function(r){return r.type==="keypress"?oa(r):0},keyCode:function(r){return r.type==="keydown"||r.type==="keyup"?r.keyCode:0},which:function(r){return r.type==="keypress"?oa(r):r.type==="keydown"||r.type==="keyup"?r.keyCode:0}}),HE=jt(VE),GE=V({},la,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Qf=jt(GE),qE=V({},Ns,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Lu}),KE=jt(qE),YE=V({},_i,{propertyName:0,elapsedTime:0,pseudoElement:0}),QE=jt(YE),JE=V({},la,{deltaX:function(r){return"deltaX"in r?r.deltaX:"wheelDeltaX"in r?-r.wheelDeltaX:0},deltaY:function(r){return"deltaY"in r?r.deltaY:"wheelDeltaY"in r?-r.wheelDeltaY:"wheelDelta"in r?-r.wheelDelta:0},deltaZ:0,deltaMode:0}),XE=jt(JE),ZE=[9,13,27,32],Mu=h&&"CompositionEvent"in window,As=null;h&&"documentMode"in document&&(As=document.documentMode);var e0=h&&"TextEvent"in window&&!As,Jf=h&&(!Mu||As&&8<As&&11>=As),Xf=" ",Zf=!1;function ep(r,i){switch(r){case"keyup":return ZE.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function tp(r){return r=r.detail,typeof r=="object"&&"data"in r?r.data:null}var vi=!1;function t0(r,i){switch(r){case"compositionend":return tp(i);case"keypress":return i.which!==32?null:(Zf=!0,Xf);case"textInput":return r=i.data,r===Xf&&Zf?null:r;default:return null}}function n0(r,i){if(vi)return r==="compositionend"||!Mu&&ep(r,i)?(r=Gf(),sa=Nu=tr=null,vi=!1,r):null;switch(r){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Jf&&i.locale!=="ko"?null:i.data;default:return null}}var r0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function np(r){var i=r&&r.nodeName&&r.nodeName.toLowerCase();return i==="input"?!!r0[r.type]:i==="textarea"}function rp(r,i,a,u){kf(u),i=fa(i,"onChange"),0<i.length&&(a=new Pu("onChange","change",null,a,u),r.push({event:a,listeners:i}))}var Ds=null,Os=null;function i0(r){Ep(r,0)}function ua(r){var i=Si(r);if(Ke(i))return r}function s0(r,i){if(r==="change")return i}var ip=!1;if(h){var Fu;if(h){var ju="oninput"in document;if(!ju){var sp=document.createElement("div");sp.setAttribute("oninput","return;"),ju=typeof sp.oninput=="function"}Fu=ju}else Fu=!1;ip=Fu&&(!document.documentMode||9<document.documentMode)}function op(){Ds&&(Ds.detachEvent("onpropertychange",ap),Os=Ds=null)}function ap(r){if(r.propertyName==="value"&&ua(Os)){var i=[];rp(i,Os,r,yu(r)),xf(i0,i)}}function o0(r,i,a){r==="focusin"?(op(),Ds=i,Os=a,Ds.attachEvent("onpropertychange",ap)):r==="focusout"&&op()}function a0(r){if(r==="selectionchange"||r==="keyup"||r==="keydown")return ua(Os)}function l0(r,i){if(r==="click")return ua(i)}function u0(r,i){if(r==="input"||r==="change")return ua(i)}function c0(r,i){return r===i&&(r!==0||1/r===1/i)||r!==r&&i!==i}var en=typeof Object.is=="function"?Object.is:c0;function Ls(r,i){if(en(r,i))return!0;if(typeof r!="object"||r===null||typeof i!="object"||i===null)return!1;var a=Object.keys(r),u=Object.keys(i);if(a.length!==u.length)return!1;for(u=0;u<a.length;u++){var d=a[u];if(!f.call(i,d)||!en(r[d],i[d]))return!1}return!0}function lp(r){for(;r&&r.firstChild;)r=r.firstChild;return r}function up(r,i){var a=lp(r);r=0;for(var u;a;){if(a.nodeType===3){if(u=r+a.textContent.length,r<=i&&u>=i)return{node:a,offset:i-r};r=u}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=lp(a)}}function cp(r,i){return r&&i?r===i?!0:r&&r.nodeType===3?!1:i&&i.nodeType===3?cp(r,i.parentNode):"contains"in r?r.contains(i):r.compareDocumentPosition?!!(r.compareDocumentPosition(i)&16):!1:!1}function dp(){for(var r=window,i=Ft();i instanceof r.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)r=i.contentWindow;else break;i=Ft(r.document)}return i}function Uu(r){var i=r&&r.nodeName&&r.nodeName.toLowerCase();return i&&(i==="input"&&(r.type==="text"||r.type==="search"||r.type==="tel"||r.type==="url"||r.type==="password")||i==="textarea"||r.contentEditable==="true")}function d0(r){var i=dp(),a=r.focusedElem,u=r.selectionRange;if(i!==a&&a&&a.ownerDocument&&cp(a.ownerDocument.documentElement,a)){if(u!==null&&Uu(a)){if(i=u.start,r=u.end,r===void 0&&(r=i),"selectionStart"in a)a.selectionStart=i,a.selectionEnd=Math.min(r,a.value.length);else if(r=(i=a.ownerDocument||document)&&i.defaultView||window,r.getSelection){r=r.getSelection();var d=a.textContent.length,p=Math.min(u.start,d);u=u.end===void 0?p:Math.min(u.end,d),!r.extend&&p>u&&(d=u,u=p,p=d),d=up(a,p);var g=up(a,u);d&&g&&(r.rangeCount!==1||r.anchorNode!==d.node||r.anchorOffset!==d.offset||r.focusNode!==g.node||r.focusOffset!==g.offset)&&(i=i.createRange(),i.setStart(d.node,d.offset),r.removeAllRanges(),p>u?(r.addRange(i),r.extend(g.node,g.offset)):(i.setEnd(g.node,g.offset),r.addRange(i)))}}for(i=[],r=a;r=r.parentNode;)r.nodeType===1&&i.push({element:r,left:r.scrollLeft,top:r.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<i.length;a++)r=i[a],r.element.scrollLeft=r.left,r.element.scrollTop=r.top}}var h0=h&&"documentMode"in document&&11>=document.documentMode,wi=null,zu=null,Ms=null,$u=!1;function hp(r,i,a){var u=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;$u||wi==null||wi!==Ft(u)||(u=wi,"selectionStart"in u&&Uu(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),Ms&&Ls(Ms,u)||(Ms=u,u=fa(zu,"onSelect"),0<u.length&&(i=new Pu("onSelect","select",null,i,a),r.push({event:i,listeners:u}),i.target=wi)))}function ca(r,i){var a={};return a[r.toLowerCase()]=i.toLowerCase(),a["Webkit"+r]="webkit"+i,a["Moz"+r]="moz"+i,a}var Ei={animationend:ca("Animation","AnimationEnd"),animationiteration:ca("Animation","AnimationIteration"),animationstart:ca("Animation","AnimationStart"),transitionend:ca("Transition","TransitionEnd")},Wu={},fp={};h&&(fp=document.createElement("div").style,"AnimationEvent"in window||(delete Ei.animationend.animation,delete Ei.animationiteration.animation,delete Ei.animationstart.animation),"TransitionEvent"in window||delete Ei.transitionend.transition);function da(r){if(Wu[r])return Wu[r];if(!Ei[r])return r;var i=Ei[r],a;for(a in i)if(i.hasOwnProperty(a)&&a in fp)return Wu[r]=i[a];return r}var pp=da("animationend"),mp=da("animationiteration"),gp=da("animationstart"),yp=da("transitionend"),_p=new Map,vp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function nr(r,i){_p.set(r,i),l(i,[r])}for(var Bu=0;Bu<vp.length;Bu++){var Vu=vp[Bu],f0=Vu.toLowerCase(),p0=Vu[0].toUpperCase()+Vu.slice(1);nr(f0,"on"+p0)}nr(pp,"onAnimationEnd"),nr(mp,"onAnimationIteration"),nr(gp,"onAnimationStart"),nr("dblclick","onDoubleClick"),nr("focusin","onFocus"),nr("focusout","onBlur"),nr(yp,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Fs="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),m0=new Set("cancel close invalid load scroll toggle".split(" ").concat(Fs));function wp(r,i,a){var u=r.type||"unknown-event";r.currentTarget=a,fE(u,i,void 0,r),r.currentTarget=null}function Ep(r,i){i=(i&4)!==0;for(var a=0;a<r.length;a++){var u=r[a],d=u.event;u=u.listeners;e:{var p=void 0;if(i)for(var g=u.length-1;0<=g;g--){var w=u[g],C=w.instance,P=w.currentTarget;if(w=w.listener,C!==p&&d.isPropagationStopped())break e;wp(d,w,P),p=C}else for(g=0;g<u.length;g++){if(w=u[g],C=w.instance,P=w.currentTarget,w=w.listener,C!==p&&d.isPropagationStopped())break e;wp(d,w,P),p=C}}}if(Yo)throw r=Eu,Yo=!1,Eu=null,r}function Me(r,i){var a=i[Xu];a===void 0&&(a=i[Xu]=new Set);var u=r+"__bubble";a.has(u)||(Cp(i,r,2,!1),a.add(u))}function Hu(r,i,a){var u=0;i&&(u|=4),Cp(a,r,u,i)}var ha="_reactListening"+Math.random().toString(36).slice(2);function js(r){if(!r[ha]){r[ha]=!0,s.forEach(function(a){a!=="selectionchange"&&(m0.has(a)||Hu(a,!1,r),Hu(a,!0,r))});var i=r.nodeType===9?r:r.ownerDocument;i===null||i[ha]||(i[ha]=!0,Hu("selectionchange",!1,i))}}function Cp(r,i,a,u){switch(Hf(i)){case 1:var d=bE;break;case 4:d=NE;break;default:d=Ru}a=d.bind(null,i,a,r),d=void 0,!wu||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(d=!0),u?d!==void 0?r.addEventListener(i,a,{capture:!0,passive:d}):r.addEventListener(i,a,!0):d!==void 0?r.addEventListener(i,a,{passive:d}):r.addEventListener(i,a,!1)}function Gu(r,i,a,u,d){var p=u;if((i&1)===0&&(i&2)===0&&u!==null)e:for(;;){if(u===null)return;var g=u.tag;if(g===3||g===4){var w=u.stateNode.containerInfo;if(w===d||w.nodeType===8&&w.parentNode===d)break;if(g===4)for(g=u.return;g!==null;){var C=g.tag;if((C===3||C===4)&&(C=g.stateNode.containerInfo,C===d||C.nodeType===8&&C.parentNode===d))return;g=g.return}for(;w!==null;){if(g=Fr(w),g===null)return;if(C=g.tag,C===5||C===6){u=p=g;continue e}w=w.parentNode}}u=u.return}xf(function(){var P=p,M=yu(a),F=[];e:{var L=_p.get(r);if(L!==void 0){var H=Pu,K=r;switch(r){case"keypress":if(oa(a)===0)break e;case"keydown":case"keyup":H=HE;break;case"focusin":K="focus",H=Ou;break;case"focusout":K="blur",H=Ou;break;case"beforeblur":case"afterblur":H=Ou;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":H=Kf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":H=DE;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":H=KE;break;case pp:case mp:case gp:H=ME;break;case yp:H=QE;break;case"scroll":H=PE;break;case"wheel":H=XE;break;case"copy":case"cut":case"paste":H=jE;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":H=Qf}var Z=(i&4)!==0,qe=!Z&&r==="scroll",R=Z?L!==null?L+"Capture":null:L;Z=[];for(var k=P,b;k!==null;){b=k;var $=b.stateNode;if(b.tag===5&&$!==null&&(b=$,R!==null&&($=ws(k,R),$!=null&&Z.push(Us(k,$,b)))),qe)break;k=k.return}0<Z.length&&(L=new H(L,K,null,a,M),F.push({event:L,listeners:Z}))}}if((i&7)===0){e:{if(L=r==="mouseover"||r==="pointerover",H=r==="mouseout"||r==="pointerout",L&&a!==gu&&(K=a.relatedTarget||a.fromElement)&&(Fr(K)||K[Rn]))break e;if((H||L)&&(L=M.window===M?M:(L=M.ownerDocument)?L.defaultView||L.parentWindow:window,H?(K=a.relatedTarget||a.toElement,H=P,K=K?Fr(K):null,K!==null&&(qe=Mr(K),K!==qe||K.tag!==5&&K.tag!==6)&&(K=null)):(H=null,K=P),H!==K)){if(Z=Kf,$="onMouseLeave",R="onMouseEnter",k="mouse",(r==="pointerout"||r==="pointerover")&&(Z=Qf,$="onPointerLeave",R="onPointerEnter",k="pointer"),qe=H==null?L:Si(H),b=K==null?L:Si(K),L=new Z($,k+"leave",H,a,M),L.target=qe,L.relatedTarget=b,$=null,Fr(M)===P&&(Z=new Z(R,k+"enter",K,a,M),Z.target=b,Z.relatedTarget=qe,$=Z),qe=$,H&&K)t:{for(Z=H,R=K,k=0,b=Z;b;b=Ci(b))k++;for(b=0,$=R;$;$=Ci($))b++;for(;0<k-b;)Z=Ci(Z),k--;for(;0<b-k;)R=Ci(R),b--;for(;k--;){if(Z===R||R!==null&&Z===R.alternate)break t;Z=Ci(Z),R=Ci(R)}Z=null}else Z=null;H!==null&&kp(F,L,H,Z,!1),K!==null&&qe!==null&&kp(F,qe,K,Z,!0)}}e:{if(L=P?Si(P):window,H=L.nodeName&&L.nodeName.toLowerCase(),H==="select"||H==="input"&&L.type==="file")var ee=s0;else if(np(L))if(ip)ee=u0;else{ee=a0;var se=o0}else(H=L.nodeName)&&H.toLowerCase()==="input"&&(L.type==="checkbox"||L.type==="radio")&&(ee=l0);if(ee&&(ee=ee(r,P))){rp(F,ee,a,M);break e}se&&se(r,L,P),r==="focusout"&&(se=L._wrapperState)&&se.controlled&&L.type==="number"&&gs(L,"number",L.value)}switch(se=P?Si(P):window,r){case"focusin":(np(se)||se.contentEditable==="true")&&(wi=se,zu=P,Ms=null);break;case"focusout":Ms=zu=wi=null;break;case"mousedown":$u=!0;break;case"contextmenu":case"mouseup":case"dragend":$u=!1,hp(F,a,M);break;case"selectionchange":if(h0)break;case"keydown":case"keyup":hp(F,a,M)}var oe;if(Mu)e:{switch(r){case"compositionstart":var ce="onCompositionStart";break e;case"compositionend":ce="onCompositionEnd";break e;case"compositionupdate":ce="onCompositionUpdate";break e}ce=void 0}else vi?ep(r,a)&&(ce="onCompositionEnd"):r==="keydown"&&a.keyCode===229&&(ce="onCompositionStart");ce&&(Jf&&a.locale!=="ko"&&(vi||ce!=="onCompositionStart"?ce==="onCompositionEnd"&&vi&&(oe=Gf()):(tr=M,Nu="value"in tr?tr.value:tr.textContent,vi=!0)),se=fa(P,ce),0<se.length&&(ce=new Yf(ce,r,null,a,M),F.push({event:ce,listeners:se}),oe?ce.data=oe:(oe=tp(a),oe!==null&&(ce.data=oe)))),(oe=e0?t0(r,a):n0(r,a))&&(P=fa(P,"onBeforeInput"),0<P.length&&(M=new Yf("onBeforeInput","beforeinput",null,a,M),F.push({event:M,listeners:P}),M.data=oe))}Ep(F,i)})}function Us(r,i,a){return{instance:r,listener:i,currentTarget:a}}function fa(r,i){for(var a=i+"Capture",u=[];r!==null;){var d=r,p=d.stateNode;d.tag===5&&p!==null&&(d=p,p=ws(r,a),p!=null&&u.unshift(Us(r,p,d)),p=ws(r,i),p!=null&&u.push(Us(r,p,d))),r=r.return}return u}function Ci(r){if(r===null)return null;do r=r.return;while(r&&r.tag!==5);return r||null}function kp(r,i,a,u,d){for(var p=i._reactName,g=[];a!==null&&a!==u;){var w=a,C=w.alternate,P=w.stateNode;if(C!==null&&C===u)break;w.tag===5&&P!==null&&(w=P,d?(C=ws(a,p),C!=null&&g.unshift(Us(a,C,w))):d||(C=ws(a,p),C!=null&&g.push(Us(a,C,w)))),a=a.return}g.length!==0&&r.push({event:i,listeners:g})}var g0=/\r\n?/g,y0=/\u0000|\uFFFD/g;function Sp(r){return(typeof r=="string"?r:""+r).replace(g0,`
`).replace(y0,"")}function pa(r,i,a){if(i=Sp(i),Sp(r)!==i&&a)throw Error(n(425))}function ma(){}var qu=null,Ku=null;function Yu(r,i){return r==="textarea"||r==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Qu=typeof setTimeout=="function"?setTimeout:void 0,_0=typeof clearTimeout=="function"?clearTimeout:void 0,Ip=typeof Promise=="function"?Promise:void 0,v0=typeof queueMicrotask=="function"?queueMicrotask:typeof Ip<"u"?function(r){return Ip.resolve(null).then(r).catch(w0)}:Qu;function w0(r){setTimeout(function(){throw r})}function Ju(r,i){var a=i,u=0;do{var d=a.nextSibling;if(r.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(u===0){r.removeChild(d),bs(i);return}u--}else a!=="$"&&a!=="$?"&&a!=="$!"||u++;a=d}while(a);bs(i)}function rr(r){for(;r!=null;r=r.nextSibling){var i=r.nodeType;if(i===1||i===3)break;if(i===8){if(i=r.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return r}function Tp(r){r=r.previousSibling;for(var i=0;r;){if(r.nodeType===8){var a=r.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return r;i--}else a==="/$"&&i++}r=r.previousSibling}return null}var ki=Math.random().toString(36).slice(2),yn="__reactFiber$"+ki,zs="__reactProps$"+ki,Rn="__reactContainer$"+ki,Xu="__reactEvents$"+ki,E0="__reactListeners$"+ki,C0="__reactHandles$"+ki;function Fr(r){var i=r[yn];if(i)return i;for(var a=r.parentNode;a;){if(i=a[Rn]||a[yn]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(r=Tp(r);r!==null;){if(a=r[yn])return a;r=Tp(r)}return i}r=a,a=r.parentNode}return null}function $s(r){return r=r[yn]||r[Rn],!r||r.tag!==5&&r.tag!==6&&r.tag!==13&&r.tag!==3?null:r}function Si(r){if(r.tag===5||r.tag===6)return r.stateNode;throw Error(n(33))}function ga(r){return r[zs]||null}var Zu=[],Ii=-1;function ir(r){return{current:r}}function Fe(r){0>Ii||(r.current=Zu[Ii],Zu[Ii]=null,Ii--)}function De(r,i){Ii++,Zu[Ii]=r.current,r.current=i}var sr={},vt=ir(sr),bt=ir(!1),jr=sr;function Ti(r,i){var a=r.type.contextTypes;if(!a)return sr;var u=r.stateNode;if(u&&u.__reactInternalMemoizedUnmaskedChildContext===i)return u.__reactInternalMemoizedMaskedChildContext;var d={},p;for(p in a)d[p]=i[p];return u&&(r=r.stateNode,r.__reactInternalMemoizedUnmaskedChildContext=i,r.__reactInternalMemoizedMaskedChildContext=d),d}function Nt(r){return r=r.childContextTypes,r!=null}function ya(){Fe(bt),Fe(vt)}function xp(r,i,a){if(vt.current!==sr)throw Error(n(168));De(vt,i),De(bt,a)}function Rp(r,i,a){var u=r.stateNode;if(i=i.childContextTypes,typeof u.getChildContext!="function")return a;u=u.getChildContext();for(var d in u)if(!(d in i))throw Error(n(108,W(r)||"Unknown",d));return V({},a,u)}function _a(r){return r=(r=r.stateNode)&&r.__reactInternalMemoizedMergedChildContext||sr,jr=vt.current,De(vt,r),De(bt,bt.current),!0}function bp(r,i,a){var u=r.stateNode;if(!u)throw Error(n(169));a?(r=Rp(r,i,jr),u.__reactInternalMemoizedMergedChildContext=r,Fe(bt),Fe(vt),De(vt,r)):Fe(bt),De(bt,a)}var bn=null,va=!1,ec=!1;function Np(r){bn===null?bn=[r]:bn.push(r)}function k0(r){va=!0,Np(r)}function or(){if(!ec&&bn!==null){ec=!0;var r=0,i=xe;try{var a=bn;for(xe=1;r<a.length;r++){var u=a[r];do u=u(!0);while(u!==null)}bn=null,va=!1}catch(d){throw bn!==null&&(bn=bn.slice(r+1)),Af(Cu,or),d}finally{xe=i,ec=!1}}return null}var xi=[],Ri=0,wa=null,Ea=0,Bt=[],Vt=0,Ur=null,Nn=1,Pn="";function zr(r,i){xi[Ri++]=Ea,xi[Ri++]=wa,wa=r,Ea=i}function Pp(r,i,a){Bt[Vt++]=Nn,Bt[Vt++]=Pn,Bt[Vt++]=Ur,Ur=r;var u=Nn;r=Pn;var d=32-Zt(u)-1;u&=~(1<<d),a+=1;var p=32-Zt(i)+d;if(30<p){var g=d-d%5;p=(u&(1<<g)-1).toString(32),u>>=g,d-=g,Nn=1<<32-Zt(i)+d|a<<d|u,Pn=p+r}else Nn=1<<p|a<<d|u,Pn=r}function tc(r){r.return!==null&&(zr(r,1),Pp(r,1,0))}function nc(r){for(;r===wa;)wa=xi[--Ri],xi[Ri]=null,Ea=xi[--Ri],xi[Ri]=null;for(;r===Ur;)Ur=Bt[--Vt],Bt[Vt]=null,Pn=Bt[--Vt],Bt[Vt]=null,Nn=Bt[--Vt],Bt[Vt]=null}var Ut=null,zt=null,je=!1,tn=null;function Ap(r,i){var a=Kt(5,null,null,0);a.elementType="DELETED",a.stateNode=i,a.return=r,i=r.deletions,i===null?(r.deletions=[a],r.flags|=16):i.push(a)}function Dp(r,i){switch(r.tag){case 5:var a=r.type;return i=i.nodeType!==1||a.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(r.stateNode=i,Ut=r,zt=rr(i.firstChild),!0):!1;case 6:return i=r.pendingProps===""||i.nodeType!==3?null:i,i!==null?(r.stateNode=i,Ut=r,zt=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(a=Ur!==null?{id:Nn,overflow:Pn}:null,r.memoizedState={dehydrated:i,treeContext:a,retryLane:1073741824},a=Kt(18,null,null,0),a.stateNode=i,a.return=r,r.child=a,Ut=r,zt=null,!0):!1;default:return!1}}function rc(r){return(r.mode&1)!==0&&(r.flags&128)===0}function ic(r){if(je){var i=zt;if(i){var a=i;if(!Dp(r,i)){if(rc(r))throw Error(n(418));i=rr(a.nextSibling);var u=Ut;i&&Dp(r,i)?Ap(u,a):(r.flags=r.flags&-4097|2,je=!1,Ut=r)}}else{if(rc(r))throw Error(n(418));r.flags=r.flags&-4097|2,je=!1,Ut=r}}}function Op(r){for(r=r.return;r!==null&&r.tag!==5&&r.tag!==3&&r.tag!==13;)r=r.return;Ut=r}function Ca(r){if(r!==Ut)return!1;if(!je)return Op(r),je=!0,!1;var i;if((i=r.tag!==3)&&!(i=r.tag!==5)&&(i=r.type,i=i!=="head"&&i!=="body"&&!Yu(r.type,r.memoizedProps)),i&&(i=zt)){if(rc(r))throw Lp(),Error(n(418));for(;i;)Ap(r,i),i=rr(i.nextSibling)}if(Op(r),r.tag===13){if(r=r.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(n(317));e:{for(r=r.nextSibling,i=0;r;){if(r.nodeType===8){var a=r.data;if(a==="/$"){if(i===0){zt=rr(r.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++}r=r.nextSibling}zt=null}}else zt=Ut?rr(r.stateNode.nextSibling):null;return!0}function Lp(){for(var r=zt;r;)r=rr(r.nextSibling)}function bi(){zt=Ut=null,je=!1}function sc(r){tn===null?tn=[r]:tn.push(r)}var S0=q.ReactCurrentBatchConfig;function Ws(r,i,a){if(r=a.ref,r!==null&&typeof r!="function"&&typeof r!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(n(309));var u=a.stateNode}if(!u)throw Error(n(147,r));var d=u,p=""+r;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===p?i.ref:(i=function(g){var w=d.refs;g===null?delete w[p]:w[p]=g},i._stringRef=p,i)}if(typeof r!="string")throw Error(n(284));if(!a._owner)throw Error(n(290,r))}return r}function ka(r,i){throw r=Object.prototype.toString.call(i),Error(n(31,r==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":r))}function Mp(r){var i=r._init;return i(r._payload)}function Fp(r){function i(R,k){if(r){var b=R.deletions;b===null?(R.deletions=[k],R.flags|=16):b.push(k)}}function a(R,k){if(!r)return null;for(;k!==null;)i(R,k),k=k.sibling;return null}function u(R,k){for(R=new Map;k!==null;)k.key!==null?R.set(k.key,k):R.set(k.index,k),k=k.sibling;return R}function d(R,k){return R=pr(R,k),R.index=0,R.sibling=null,R}function p(R,k,b){return R.index=b,r?(b=R.alternate,b!==null?(b=b.index,b<k?(R.flags|=2,k):b):(R.flags|=2,k)):(R.flags|=1048576,k)}function g(R){return r&&R.alternate===null&&(R.flags|=2),R}function w(R,k,b,$){return k===null||k.tag!==6?(k=Qc(b,R.mode,$),k.return=R,k):(k=d(k,b),k.return=R,k)}function C(R,k,b,$){var ee=b.type;return ee===Re?M(R,k,b.props.children,$,b.key):k!==null&&(k.elementType===ee||typeof ee=="object"&&ee!==null&&ee.$$typeof===Pe&&Mp(ee)===k.type)?($=d(k,b.props),$.ref=Ws(R,k,b),$.return=R,$):($=qa(b.type,b.key,b.props,null,R.mode,$),$.ref=Ws(R,k,b),$.return=R,$)}function P(R,k,b,$){return k===null||k.tag!==4||k.stateNode.containerInfo!==b.containerInfo||k.stateNode.implementation!==b.implementation?(k=Jc(b,R.mode,$),k.return=R,k):(k=d(k,b.children||[]),k.return=R,k)}function M(R,k,b,$,ee){return k===null||k.tag!==7?(k=Kr(b,R.mode,$,ee),k.return=R,k):(k=d(k,b),k.return=R,k)}function F(R,k,b){if(typeof k=="string"&&k!==""||typeof k=="number")return k=Qc(""+k,R.mode,b),k.return=R,k;if(typeof k=="object"&&k!==null){switch(k.$$typeof){case fe:return b=qa(k.type,k.key,k.props,null,R.mode,b),b.ref=Ws(R,null,k),b.return=R,b;case Ee:return k=Jc(k,R.mode,b),k.return=R,k;case Pe:var $=k._init;return F(R,$(k._payload),b)}if(Lr(k)||re(k))return k=Kr(k,R.mode,b,null),k.return=R,k;ka(R,k)}return null}function L(R,k,b,$){var ee=k!==null?k.key:null;if(typeof b=="string"&&b!==""||typeof b=="number")return ee!==null?null:w(R,k,""+b,$);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case fe:return b.key===ee?C(R,k,b,$):null;case Ee:return b.key===ee?P(R,k,b,$):null;case Pe:return ee=b._init,L(R,k,ee(b._payload),$)}if(Lr(b)||re(b))return ee!==null?null:M(R,k,b,$,null);ka(R,b)}return null}function H(R,k,b,$,ee){if(typeof $=="string"&&$!==""||typeof $=="number")return R=R.get(b)||null,w(k,R,""+$,ee);if(typeof $=="object"&&$!==null){switch($.$$typeof){case fe:return R=R.get($.key===null?b:$.key)||null,C(k,R,$,ee);case Ee:return R=R.get($.key===null?b:$.key)||null,P(k,R,$,ee);case Pe:var se=$._init;return H(R,k,b,se($._payload),ee)}if(Lr($)||re($))return R=R.get(b)||null,M(k,R,$,ee,null);ka(k,$)}return null}function K(R,k,b,$){for(var ee=null,se=null,oe=k,ce=k=0,at=null;oe!==null&&ce<b.length;ce++){oe.index>ce?(at=oe,oe=null):at=oe.sibling;var Se=L(R,oe,b[ce],$);if(Se===null){oe===null&&(oe=at);break}r&&oe&&Se.alternate===null&&i(R,oe),k=p(Se,k,ce),se===null?ee=Se:se.sibling=Se,se=Se,oe=at}if(ce===b.length)return a(R,oe),je&&zr(R,ce),ee;if(oe===null){for(;ce<b.length;ce++)oe=F(R,b[ce],$),oe!==null&&(k=p(oe,k,ce),se===null?ee=oe:se.sibling=oe,se=oe);return je&&zr(R,ce),ee}for(oe=u(R,oe);ce<b.length;ce++)at=H(oe,R,ce,b[ce],$),at!==null&&(r&&at.alternate!==null&&oe.delete(at.key===null?ce:at.key),k=p(at,k,ce),se===null?ee=at:se.sibling=at,se=at);return r&&oe.forEach(function(mr){return i(R,mr)}),je&&zr(R,ce),ee}function Z(R,k,b,$){var ee=re(b);if(typeof ee!="function")throw Error(n(150));if(b=ee.call(b),b==null)throw Error(n(151));for(var se=ee=null,oe=k,ce=k=0,at=null,Se=b.next();oe!==null&&!Se.done;ce++,Se=b.next()){oe.index>ce?(at=oe,oe=null):at=oe.sibling;var mr=L(R,oe,Se.value,$);if(mr===null){oe===null&&(oe=at);break}r&&oe&&mr.alternate===null&&i(R,oe),k=p(mr,k,ce),se===null?ee=mr:se.sibling=mr,se=mr,oe=at}if(Se.done)return a(R,oe),je&&zr(R,ce),ee;if(oe===null){for(;!Se.done;ce++,Se=b.next())Se=F(R,Se.value,$),Se!==null&&(k=p(Se,k,ce),se===null?ee=Se:se.sibling=Se,se=Se);return je&&zr(R,ce),ee}for(oe=u(R,oe);!Se.done;ce++,Se=b.next())Se=H(oe,R,ce,Se.value,$),Se!==null&&(r&&Se.alternate!==null&&oe.delete(Se.key===null?ce:Se.key),k=p(Se,k,ce),se===null?ee=Se:se.sibling=Se,se=Se);return r&&oe.forEach(function(rC){return i(R,rC)}),je&&zr(R,ce),ee}function qe(R,k,b,$){if(typeof b=="object"&&b!==null&&b.type===Re&&b.key===null&&(b=b.props.children),typeof b=="object"&&b!==null){switch(b.$$typeof){case fe:e:{for(var ee=b.key,se=k;se!==null;){if(se.key===ee){if(ee=b.type,ee===Re){if(se.tag===7){a(R,se.sibling),k=d(se,b.props.children),k.return=R,R=k;break e}}else if(se.elementType===ee||typeof ee=="object"&&ee!==null&&ee.$$typeof===Pe&&Mp(ee)===se.type){a(R,se.sibling),k=d(se,b.props),k.ref=Ws(R,se,b),k.return=R,R=k;break e}a(R,se);break}else i(R,se);se=se.sibling}b.type===Re?(k=Kr(b.props.children,R.mode,$,b.key),k.return=R,R=k):($=qa(b.type,b.key,b.props,null,R.mode,$),$.ref=Ws(R,k,b),$.return=R,R=$)}return g(R);case Ee:e:{for(se=b.key;k!==null;){if(k.key===se)if(k.tag===4&&k.stateNode.containerInfo===b.containerInfo&&k.stateNode.implementation===b.implementation){a(R,k.sibling),k=d(k,b.children||[]),k.return=R,R=k;break e}else{a(R,k);break}else i(R,k);k=k.sibling}k=Jc(b,R.mode,$),k.return=R,R=k}return g(R);case Pe:return se=b._init,qe(R,k,se(b._payload),$)}if(Lr(b))return K(R,k,b,$);if(re(b))return Z(R,k,b,$);ka(R,b)}return typeof b=="string"&&b!==""||typeof b=="number"?(b=""+b,k!==null&&k.tag===6?(a(R,k.sibling),k=d(k,b),k.return=R,R=k):(a(R,k),k=Qc(b,R.mode,$),k.return=R,R=k),g(R)):a(R,k)}return qe}var Ni=Fp(!0),jp=Fp(!1),Sa=ir(null),Ia=null,Pi=null,oc=null;function ac(){oc=Pi=Ia=null}function lc(r){var i=Sa.current;Fe(Sa),r._currentValue=i}function uc(r,i,a){for(;r!==null;){var u=r.alternate;if((r.childLanes&i)!==i?(r.childLanes|=i,u!==null&&(u.childLanes|=i)):u!==null&&(u.childLanes&i)!==i&&(u.childLanes|=i),r===a)break;r=r.return}}function Ai(r,i){Ia=r,oc=Pi=null,r=r.dependencies,r!==null&&r.firstContext!==null&&((r.lanes&i)!==0&&(Pt=!0),r.firstContext=null)}function Ht(r){var i=r._currentValue;if(oc!==r)if(r={context:r,memoizedValue:i,next:null},Pi===null){if(Ia===null)throw Error(n(308));Pi=r,Ia.dependencies={lanes:0,firstContext:r}}else Pi=Pi.next=r;return i}var $r=null;function cc(r){$r===null?$r=[r]:$r.push(r)}function Up(r,i,a,u){var d=i.interleaved;return d===null?(a.next=a,cc(i)):(a.next=d.next,d.next=a),i.interleaved=a,An(r,u)}function An(r,i){r.lanes|=i;var a=r.alternate;for(a!==null&&(a.lanes|=i),a=r,r=r.return;r!==null;)r.childLanes|=i,a=r.alternate,a!==null&&(a.childLanes|=i),a=r,r=r.return;return a.tag===3?a.stateNode:null}var ar=!1;function dc(r){r.updateQueue={baseState:r.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function zp(r,i){r=r.updateQueue,i.updateQueue===r&&(i.updateQueue={baseState:r.baseState,firstBaseUpdate:r.firstBaseUpdate,lastBaseUpdate:r.lastBaseUpdate,shared:r.shared,effects:r.effects})}function Dn(r,i){return{eventTime:r,lane:i,tag:0,payload:null,callback:null,next:null}}function lr(r,i,a){var u=r.updateQueue;if(u===null)return null;if(u=u.shared,(_e&2)!==0){var d=u.pending;return d===null?i.next=i:(i.next=d.next,d.next=i),u.pending=i,An(r,a)}return d=u.interleaved,d===null?(i.next=i,cc(u)):(i.next=d.next,d.next=i),u.interleaved=i,An(r,a)}function Ta(r,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194240)!==0)){var u=i.lanes;u&=r.pendingLanes,a|=u,i.lanes=a,Iu(r,a)}}function $p(r,i){var a=r.updateQueue,u=r.alternate;if(u!==null&&(u=u.updateQueue,a===u)){var d=null,p=null;if(a=a.firstBaseUpdate,a!==null){do{var g={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};p===null?d=p=g:p=p.next=g,a=a.next}while(a!==null);p===null?d=p=i:p=p.next=i}else d=p=i;a={baseState:u.baseState,firstBaseUpdate:d,lastBaseUpdate:p,shared:u.shared,effects:u.effects},r.updateQueue=a;return}r=a.lastBaseUpdate,r===null?a.firstBaseUpdate=i:r.next=i,a.lastBaseUpdate=i}function xa(r,i,a,u){var d=r.updateQueue;ar=!1;var p=d.firstBaseUpdate,g=d.lastBaseUpdate,w=d.shared.pending;if(w!==null){d.shared.pending=null;var C=w,P=C.next;C.next=null,g===null?p=P:g.next=P,g=C;var M=r.alternate;M!==null&&(M=M.updateQueue,w=M.lastBaseUpdate,w!==g&&(w===null?M.firstBaseUpdate=P:w.next=P,M.lastBaseUpdate=C))}if(p!==null){var F=d.baseState;g=0,M=P=C=null,w=p;do{var L=w.lane,H=w.eventTime;if((u&L)===L){M!==null&&(M=M.next={eventTime:H,lane:0,tag:w.tag,payload:w.payload,callback:w.callback,next:null});e:{var K=r,Z=w;switch(L=i,H=a,Z.tag){case 1:if(K=Z.payload,typeof K=="function"){F=K.call(H,F,L);break e}F=K;break e;case 3:K.flags=K.flags&-65537|128;case 0:if(K=Z.payload,L=typeof K=="function"?K.call(H,F,L):K,L==null)break e;F=V({},F,L);break e;case 2:ar=!0}}w.callback!==null&&w.lane!==0&&(r.flags|=64,L=d.effects,L===null?d.effects=[w]:L.push(w))}else H={eventTime:H,lane:L,tag:w.tag,payload:w.payload,callback:w.callback,next:null},M===null?(P=M=H,C=F):M=M.next=H,g|=L;if(w=w.next,w===null){if(w=d.shared.pending,w===null)break;L=w,w=L.next,L.next=null,d.lastBaseUpdate=L,d.shared.pending=null}}while(!0);if(M===null&&(C=F),d.baseState=C,d.firstBaseUpdate=P,d.lastBaseUpdate=M,i=d.shared.interleaved,i!==null){d=i;do g|=d.lane,d=d.next;while(d!==i)}else p===null&&(d.shared.lanes=0);Vr|=g,r.lanes=g,r.memoizedState=F}}function Wp(r,i,a){if(r=i.effects,i.effects=null,r!==null)for(i=0;i<r.length;i++){var u=r[i],d=u.callback;if(d!==null){if(u.callback=null,u=a,typeof d!="function")throw Error(n(191,d));d.call(u)}}}var Bs={},_n=ir(Bs),Vs=ir(Bs),Hs=ir(Bs);function Wr(r){if(r===Bs)throw Error(n(174));return r}function hc(r,i){switch(De(Hs,i),De(Vs,r),De(_n,Bs),r=i.nodeType,r){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:fu(null,"");break;default:r=r===8?i.parentNode:i,i=r.namespaceURI||null,r=r.tagName,i=fu(i,r)}Fe(_n),De(_n,i)}function Di(){Fe(_n),Fe(Vs),Fe(Hs)}function Bp(r){Wr(Hs.current);var i=Wr(_n.current),a=fu(i,r.type);i!==a&&(De(Vs,r),De(_n,a))}function fc(r){Vs.current===r&&(Fe(_n),Fe(Vs))}var ze=ir(0);function Ra(r){for(var i=r;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===r)break;for(;i.sibling===null;){if(i.return===null||i.return===r)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var pc=[];function mc(){for(var r=0;r<pc.length;r++)pc[r]._workInProgressVersionPrimary=null;pc.length=0}var ba=q.ReactCurrentDispatcher,gc=q.ReactCurrentBatchConfig,Br=0,$e=null,Je=null,st=null,Na=!1,Gs=!1,qs=0,I0=0;function wt(){throw Error(n(321))}function yc(r,i){if(i===null)return!1;for(var a=0;a<i.length&&a<r.length;a++)if(!en(r[a],i[a]))return!1;return!0}function _c(r,i,a,u,d,p){if(Br=p,$e=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,ba.current=r===null||r.memoizedState===null?b0:N0,r=a(u,d),Gs){p=0;do{if(Gs=!1,qs=0,25<=p)throw Error(n(301));p+=1,st=Je=null,i.updateQueue=null,ba.current=P0,r=a(u,d)}while(Gs)}if(ba.current=Da,i=Je!==null&&Je.next!==null,Br=0,st=Je=$e=null,Na=!1,i)throw Error(n(300));return r}function vc(){var r=qs!==0;return qs=0,r}function vn(){var r={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return st===null?$e.memoizedState=st=r:st=st.next=r,st}function Gt(){if(Je===null){var r=$e.alternate;r=r!==null?r.memoizedState:null}else r=Je.next;var i=st===null?$e.memoizedState:st.next;if(i!==null)st=i,Je=r;else{if(r===null)throw Error(n(310));Je=r,r={memoizedState:Je.memoizedState,baseState:Je.baseState,baseQueue:Je.baseQueue,queue:Je.queue,next:null},st===null?$e.memoizedState=st=r:st=st.next=r}return st}function Ks(r,i){return typeof i=="function"?i(r):i}function wc(r){var i=Gt(),a=i.queue;if(a===null)throw Error(n(311));a.lastRenderedReducer=r;var u=Je,d=u.baseQueue,p=a.pending;if(p!==null){if(d!==null){var g=d.next;d.next=p.next,p.next=g}u.baseQueue=d=p,a.pending=null}if(d!==null){p=d.next,u=u.baseState;var w=g=null,C=null,P=p;do{var M=P.lane;if((Br&M)===M)C!==null&&(C=C.next={lane:0,action:P.action,hasEagerState:P.hasEagerState,eagerState:P.eagerState,next:null}),u=P.hasEagerState?P.eagerState:r(u,P.action);else{var F={lane:M,action:P.action,hasEagerState:P.hasEagerState,eagerState:P.eagerState,next:null};C===null?(w=C=F,g=u):C=C.next=F,$e.lanes|=M,Vr|=M}P=P.next}while(P!==null&&P!==p);C===null?g=u:C.next=w,en(u,i.memoizedState)||(Pt=!0),i.memoizedState=u,i.baseState=g,i.baseQueue=C,a.lastRenderedState=u}if(r=a.interleaved,r!==null){d=r;do p=d.lane,$e.lanes|=p,Vr|=p,d=d.next;while(d!==r)}else d===null&&(a.lanes=0);return[i.memoizedState,a.dispatch]}function Ec(r){var i=Gt(),a=i.queue;if(a===null)throw Error(n(311));a.lastRenderedReducer=r;var u=a.dispatch,d=a.pending,p=i.memoizedState;if(d!==null){a.pending=null;var g=d=d.next;do p=r(p,g.action),g=g.next;while(g!==d);en(p,i.memoizedState)||(Pt=!0),i.memoizedState=p,i.baseQueue===null&&(i.baseState=p),a.lastRenderedState=p}return[p,u]}function Vp(){}function Hp(r,i){var a=$e,u=Gt(),d=i(),p=!en(u.memoizedState,d);if(p&&(u.memoizedState=d,Pt=!0),u=u.queue,Cc(Kp.bind(null,a,u,r),[r]),u.getSnapshot!==i||p||st!==null&&st.memoizedState.tag&1){if(a.flags|=2048,Ys(9,qp.bind(null,a,u,d,i),void 0,null),ot===null)throw Error(n(349));(Br&30)!==0||Gp(a,i,d)}return d}function Gp(r,i,a){r.flags|=16384,r={getSnapshot:i,value:a},i=$e.updateQueue,i===null?(i={lastEffect:null,stores:null},$e.updateQueue=i,i.stores=[r]):(a=i.stores,a===null?i.stores=[r]:a.push(r))}function qp(r,i,a,u){i.value=a,i.getSnapshot=u,Yp(i)&&Qp(r)}function Kp(r,i,a){return a(function(){Yp(i)&&Qp(r)})}function Yp(r){var i=r.getSnapshot;r=r.value;try{var a=i();return!en(r,a)}catch{return!0}}function Qp(r){var i=An(r,1);i!==null&&on(i,r,1,-1)}function Jp(r){var i=vn();return typeof r=="function"&&(r=r()),i.memoizedState=i.baseState=r,r={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ks,lastRenderedState:r},i.queue=r,r=r.dispatch=R0.bind(null,$e,r),[i.memoizedState,r]}function Ys(r,i,a,u){return r={tag:r,create:i,destroy:a,deps:u,next:null},i=$e.updateQueue,i===null?(i={lastEffect:null,stores:null},$e.updateQueue=i,i.lastEffect=r.next=r):(a=i.lastEffect,a===null?i.lastEffect=r.next=r:(u=a.next,a.next=r,r.next=u,i.lastEffect=r)),r}function Xp(){return Gt().memoizedState}function Pa(r,i,a,u){var d=vn();$e.flags|=r,d.memoizedState=Ys(1|i,a,void 0,u===void 0?null:u)}function Aa(r,i,a,u){var d=Gt();u=u===void 0?null:u;var p=void 0;if(Je!==null){var g=Je.memoizedState;if(p=g.destroy,u!==null&&yc(u,g.deps)){d.memoizedState=Ys(i,a,p,u);return}}$e.flags|=r,d.memoizedState=Ys(1|i,a,p,u)}function Zp(r,i){return Pa(8390656,8,r,i)}function Cc(r,i){return Aa(2048,8,r,i)}function em(r,i){return Aa(4,2,r,i)}function tm(r,i){return Aa(4,4,r,i)}function nm(r,i){if(typeof i=="function")return r=r(),i(r),function(){i(null)};if(i!=null)return r=r(),i.current=r,function(){i.current=null}}function rm(r,i,a){return a=a!=null?a.concat([r]):null,Aa(4,4,nm.bind(null,i,r),a)}function kc(){}function im(r,i){var a=Gt();i=i===void 0?null:i;var u=a.memoizedState;return u!==null&&i!==null&&yc(i,u[1])?u[0]:(a.memoizedState=[r,i],r)}function sm(r,i){var a=Gt();i=i===void 0?null:i;var u=a.memoizedState;return u!==null&&i!==null&&yc(i,u[1])?u[0]:(r=r(),a.memoizedState=[r,i],r)}function om(r,i,a){return(Br&21)===0?(r.baseState&&(r.baseState=!1,Pt=!0),r.memoizedState=a):(en(a,i)||(a=Mf(),$e.lanes|=a,Vr|=a,r.baseState=!0),i)}function T0(r,i){var a=xe;xe=a!==0&&4>a?a:4,r(!0);var u=gc.transition;gc.transition={};try{r(!1),i()}finally{xe=a,gc.transition=u}}function am(){return Gt().memoizedState}function x0(r,i,a){var u=hr(r);if(a={lane:u,action:a,hasEagerState:!1,eagerState:null,next:null},lm(r))um(i,a);else if(a=Up(r,i,a,u),a!==null){var d=It();on(a,r,u,d),cm(a,i,u)}}function R0(r,i,a){var u=hr(r),d={lane:u,action:a,hasEagerState:!1,eagerState:null,next:null};if(lm(r))um(i,d);else{var p=r.alternate;if(r.lanes===0&&(p===null||p.lanes===0)&&(p=i.lastRenderedReducer,p!==null))try{var g=i.lastRenderedState,w=p(g,a);if(d.hasEagerState=!0,d.eagerState=w,en(w,g)){var C=i.interleaved;C===null?(d.next=d,cc(i)):(d.next=C.next,C.next=d),i.interleaved=d;return}}catch{}finally{}a=Up(r,i,d,u),a!==null&&(d=It(),on(a,r,u,d),cm(a,i,u))}}function lm(r){var i=r.alternate;return r===$e||i!==null&&i===$e}function um(r,i){Gs=Na=!0;var a=r.pending;a===null?i.next=i:(i.next=a.next,a.next=i),r.pending=i}function cm(r,i,a){if((a&4194240)!==0){var u=i.lanes;u&=r.pendingLanes,a|=u,i.lanes=a,Iu(r,a)}}var Da={readContext:Ht,useCallback:wt,useContext:wt,useEffect:wt,useImperativeHandle:wt,useInsertionEffect:wt,useLayoutEffect:wt,useMemo:wt,useReducer:wt,useRef:wt,useState:wt,useDebugValue:wt,useDeferredValue:wt,useTransition:wt,useMutableSource:wt,useSyncExternalStore:wt,useId:wt,unstable_isNewReconciler:!1},b0={readContext:Ht,useCallback:function(r,i){return vn().memoizedState=[r,i===void 0?null:i],r},useContext:Ht,useEffect:Zp,useImperativeHandle:function(r,i,a){return a=a!=null?a.concat([r]):null,Pa(4194308,4,nm.bind(null,i,r),a)},useLayoutEffect:function(r,i){return Pa(4194308,4,r,i)},useInsertionEffect:function(r,i){return Pa(4,2,r,i)},useMemo:function(r,i){var a=vn();return i=i===void 0?null:i,r=r(),a.memoizedState=[r,i],r},useReducer:function(r,i,a){var u=vn();return i=a!==void 0?a(i):i,u.memoizedState=u.baseState=i,r={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:r,lastRenderedState:i},u.queue=r,r=r.dispatch=x0.bind(null,$e,r),[u.memoizedState,r]},useRef:function(r){var i=vn();return r={current:r},i.memoizedState=r},useState:Jp,useDebugValue:kc,useDeferredValue:function(r){return vn().memoizedState=r},useTransition:function(){var r=Jp(!1),i=r[0];return r=T0.bind(null,r[1]),vn().memoizedState=r,[i,r]},useMutableSource:function(){},useSyncExternalStore:function(r,i,a){var u=$e,d=vn();if(je){if(a===void 0)throw Error(n(407));a=a()}else{if(a=i(),ot===null)throw Error(n(349));(Br&30)!==0||Gp(u,i,a)}d.memoizedState=a;var p={value:a,getSnapshot:i};return d.queue=p,Zp(Kp.bind(null,u,p,r),[r]),u.flags|=2048,Ys(9,qp.bind(null,u,p,a,i),void 0,null),a},useId:function(){var r=vn(),i=ot.identifierPrefix;if(je){var a=Pn,u=Nn;a=(u&~(1<<32-Zt(u)-1)).toString(32)+a,i=":"+i+"R"+a,a=qs++,0<a&&(i+="H"+a.toString(32)),i+=":"}else a=I0++,i=":"+i+"r"+a.toString(32)+":";return r.memoizedState=i},unstable_isNewReconciler:!1},N0={readContext:Ht,useCallback:im,useContext:Ht,useEffect:Cc,useImperativeHandle:rm,useInsertionEffect:em,useLayoutEffect:tm,useMemo:sm,useReducer:wc,useRef:Xp,useState:function(){return wc(Ks)},useDebugValue:kc,useDeferredValue:function(r){var i=Gt();return om(i,Je.memoizedState,r)},useTransition:function(){var r=wc(Ks)[0],i=Gt().memoizedState;return[r,i]},useMutableSource:Vp,useSyncExternalStore:Hp,useId:am,unstable_isNewReconciler:!1},P0={readContext:Ht,useCallback:im,useContext:Ht,useEffect:Cc,useImperativeHandle:rm,useInsertionEffect:em,useLayoutEffect:tm,useMemo:sm,useReducer:Ec,useRef:Xp,useState:function(){return Ec(Ks)},useDebugValue:kc,useDeferredValue:function(r){var i=Gt();return Je===null?i.memoizedState=r:om(i,Je.memoizedState,r)},useTransition:function(){var r=Ec(Ks)[0],i=Gt().memoizedState;return[r,i]},useMutableSource:Vp,useSyncExternalStore:Hp,useId:am,unstable_isNewReconciler:!1};function nn(r,i){if(r&&r.defaultProps){i=V({},i),r=r.defaultProps;for(var a in r)i[a]===void 0&&(i[a]=r[a]);return i}return i}function Sc(r,i,a,u){i=r.memoizedState,a=a(u,i),a=a==null?i:V({},i,a),r.memoizedState=a,r.lanes===0&&(r.updateQueue.baseState=a)}var Oa={isMounted:function(r){return(r=r._reactInternals)?Mr(r)===r:!1},enqueueSetState:function(r,i,a){r=r._reactInternals;var u=It(),d=hr(r),p=Dn(u,d);p.payload=i,a!=null&&(p.callback=a),i=lr(r,p,d),i!==null&&(on(i,r,d,u),Ta(i,r,d))},enqueueReplaceState:function(r,i,a){r=r._reactInternals;var u=It(),d=hr(r),p=Dn(u,d);p.tag=1,p.payload=i,a!=null&&(p.callback=a),i=lr(r,p,d),i!==null&&(on(i,r,d,u),Ta(i,r,d))},enqueueForceUpdate:function(r,i){r=r._reactInternals;var a=It(),u=hr(r),d=Dn(a,u);d.tag=2,i!=null&&(d.callback=i),i=lr(r,d,u),i!==null&&(on(i,r,u,a),Ta(i,r,u))}};function dm(r,i,a,u,d,p,g){return r=r.stateNode,typeof r.shouldComponentUpdate=="function"?r.shouldComponentUpdate(u,p,g):i.prototype&&i.prototype.isPureReactComponent?!Ls(a,u)||!Ls(d,p):!0}function hm(r,i,a){var u=!1,d=sr,p=i.contextType;return typeof p=="object"&&p!==null?p=Ht(p):(d=Nt(i)?jr:vt.current,u=i.contextTypes,p=(u=u!=null)?Ti(r,d):sr),i=new i(a,p),r.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Oa,r.stateNode=i,i._reactInternals=r,u&&(r=r.stateNode,r.__reactInternalMemoizedUnmaskedChildContext=d,r.__reactInternalMemoizedMaskedChildContext=p),i}function fm(r,i,a,u){r=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,u),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,u),i.state!==r&&Oa.enqueueReplaceState(i,i.state,null)}function Ic(r,i,a,u){var d=r.stateNode;d.props=a,d.state=r.memoizedState,d.refs={},dc(r);var p=i.contextType;typeof p=="object"&&p!==null?d.context=Ht(p):(p=Nt(i)?jr:vt.current,d.context=Ti(r,p)),d.state=r.memoizedState,p=i.getDerivedStateFromProps,typeof p=="function"&&(Sc(r,i,p,a),d.state=r.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(i=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),i!==d.state&&Oa.enqueueReplaceState(d,d.state,null),xa(r,a,d,u),d.state=r.memoizedState),typeof d.componentDidMount=="function"&&(r.flags|=4194308)}function Oi(r,i){try{var a="",u=i;do a+=de(u),u=u.return;while(u);var d=a}catch(p){d=`
Error generating stack: `+p.message+`
`+p.stack}return{value:r,source:i,stack:d,digest:null}}function Tc(r,i,a){return{value:r,source:null,stack:a??null,digest:i??null}}function xc(r,i){try{console.error(i.value)}catch(a){setTimeout(function(){throw a})}}var A0=typeof WeakMap=="function"?WeakMap:Map;function pm(r,i,a){a=Dn(-1,a),a.tag=3,a.payload={element:null};var u=i.value;return a.callback=function(){$a||($a=!0,Wc=u),xc(r,i)},a}function mm(r,i,a){a=Dn(-1,a),a.tag=3;var u=r.type.getDerivedStateFromError;if(typeof u=="function"){var d=i.value;a.payload=function(){return u(d)},a.callback=function(){xc(r,i)}}var p=r.stateNode;return p!==null&&typeof p.componentDidCatch=="function"&&(a.callback=function(){xc(r,i),typeof u!="function"&&(cr===null?cr=new Set([this]):cr.add(this));var g=i.stack;this.componentDidCatch(i.value,{componentStack:g!==null?g:""})}),a}function gm(r,i,a){var u=r.pingCache;if(u===null){u=r.pingCache=new A0;var d=new Set;u.set(i,d)}else d=u.get(i),d===void 0&&(d=new Set,u.set(i,d));d.has(a)||(d.add(a),r=G0.bind(null,r,i,a),i.then(r,r))}function ym(r){do{var i;if((i=r.tag===13)&&(i=r.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return r;r=r.return}while(r!==null);return null}function _m(r,i,a,u,d){return(r.mode&1)===0?(r===i?r.flags|=65536:(r.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(i=Dn(-1,1),i.tag=2,lr(a,i,1))),a.lanes|=1),r):(r.flags|=65536,r.lanes=d,r)}var D0=q.ReactCurrentOwner,Pt=!1;function St(r,i,a,u){i.child=r===null?jp(i,null,a,u):Ni(i,r.child,a,u)}function vm(r,i,a,u,d){a=a.render;var p=i.ref;return Ai(i,d),u=_c(r,i,a,u,p,d),a=vc(),r!==null&&!Pt?(i.updateQueue=r.updateQueue,i.flags&=-2053,r.lanes&=~d,On(r,i,d)):(je&&a&&tc(i),i.flags|=1,St(r,i,u,d),i.child)}function wm(r,i,a,u,d){if(r===null){var p=a.type;return typeof p=="function"&&!Yc(p)&&p.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(i.tag=15,i.type=p,Em(r,i,p,u,d)):(r=qa(a.type,null,u,i,i.mode,d),r.ref=i.ref,r.return=i,i.child=r)}if(p=r.child,(r.lanes&d)===0){var g=p.memoizedProps;if(a=a.compare,a=a!==null?a:Ls,a(g,u)&&r.ref===i.ref)return On(r,i,d)}return i.flags|=1,r=pr(p,u),r.ref=i.ref,r.return=i,i.child=r}function Em(r,i,a,u,d){if(r!==null){var p=r.memoizedProps;if(Ls(p,u)&&r.ref===i.ref)if(Pt=!1,i.pendingProps=u=p,(r.lanes&d)!==0)(r.flags&131072)!==0&&(Pt=!0);else return i.lanes=r.lanes,On(r,i,d)}return Rc(r,i,a,u,d)}function Cm(r,i,a){var u=i.pendingProps,d=u.children,p=r!==null?r.memoizedState:null;if(u.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},De(Mi,$t),$t|=a;else{if((a&1073741824)===0)return r=p!==null?p.baseLanes|a:a,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:r,cachePool:null,transitions:null},i.updateQueue=null,De(Mi,$t),$t|=r,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},u=p!==null?p.baseLanes:a,De(Mi,$t),$t|=u}else p!==null?(u=p.baseLanes|a,i.memoizedState=null):u=a,De(Mi,$t),$t|=u;return St(r,i,d,a),i.child}function km(r,i){var a=i.ref;(r===null&&a!==null||r!==null&&r.ref!==a)&&(i.flags|=512,i.flags|=2097152)}function Rc(r,i,a,u,d){var p=Nt(a)?jr:vt.current;return p=Ti(i,p),Ai(i,d),a=_c(r,i,a,u,p,d),u=vc(),r!==null&&!Pt?(i.updateQueue=r.updateQueue,i.flags&=-2053,r.lanes&=~d,On(r,i,d)):(je&&u&&tc(i),i.flags|=1,St(r,i,a,d),i.child)}function Sm(r,i,a,u,d){if(Nt(a)){var p=!0;_a(i)}else p=!1;if(Ai(i,d),i.stateNode===null)Ma(r,i),hm(i,a,u),Ic(i,a,u,d),u=!0;else if(r===null){var g=i.stateNode,w=i.memoizedProps;g.props=w;var C=g.context,P=a.contextType;typeof P=="object"&&P!==null?P=Ht(P):(P=Nt(a)?jr:vt.current,P=Ti(i,P));var M=a.getDerivedStateFromProps,F=typeof M=="function"||typeof g.getSnapshotBeforeUpdate=="function";F||typeof g.UNSAFE_componentWillReceiveProps!="function"&&typeof g.componentWillReceiveProps!="function"||(w!==u||C!==P)&&fm(i,g,u,P),ar=!1;var L=i.memoizedState;g.state=L,xa(i,u,g,d),C=i.memoizedState,w!==u||L!==C||bt.current||ar?(typeof M=="function"&&(Sc(i,a,M,u),C=i.memoizedState),(w=ar||dm(i,a,w,u,L,C,P))?(F||typeof g.UNSAFE_componentWillMount!="function"&&typeof g.componentWillMount!="function"||(typeof g.componentWillMount=="function"&&g.componentWillMount(),typeof g.UNSAFE_componentWillMount=="function"&&g.UNSAFE_componentWillMount()),typeof g.componentDidMount=="function"&&(i.flags|=4194308)):(typeof g.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=u,i.memoizedState=C),g.props=u,g.state=C,g.context=P,u=w):(typeof g.componentDidMount=="function"&&(i.flags|=4194308),u=!1)}else{g=i.stateNode,zp(r,i),w=i.memoizedProps,P=i.type===i.elementType?w:nn(i.type,w),g.props=P,F=i.pendingProps,L=g.context,C=a.contextType,typeof C=="object"&&C!==null?C=Ht(C):(C=Nt(a)?jr:vt.current,C=Ti(i,C));var H=a.getDerivedStateFromProps;(M=typeof H=="function"||typeof g.getSnapshotBeforeUpdate=="function")||typeof g.UNSAFE_componentWillReceiveProps!="function"&&typeof g.componentWillReceiveProps!="function"||(w!==F||L!==C)&&fm(i,g,u,C),ar=!1,L=i.memoizedState,g.state=L,xa(i,u,g,d);var K=i.memoizedState;w!==F||L!==K||bt.current||ar?(typeof H=="function"&&(Sc(i,a,H,u),K=i.memoizedState),(P=ar||dm(i,a,P,u,L,K,C)||!1)?(M||typeof g.UNSAFE_componentWillUpdate!="function"&&typeof g.componentWillUpdate!="function"||(typeof g.componentWillUpdate=="function"&&g.componentWillUpdate(u,K,C),typeof g.UNSAFE_componentWillUpdate=="function"&&g.UNSAFE_componentWillUpdate(u,K,C)),typeof g.componentDidUpdate=="function"&&(i.flags|=4),typeof g.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof g.componentDidUpdate!="function"||w===r.memoizedProps&&L===r.memoizedState||(i.flags|=4),typeof g.getSnapshotBeforeUpdate!="function"||w===r.memoizedProps&&L===r.memoizedState||(i.flags|=1024),i.memoizedProps=u,i.memoizedState=K),g.props=u,g.state=K,g.context=C,u=P):(typeof g.componentDidUpdate!="function"||w===r.memoizedProps&&L===r.memoizedState||(i.flags|=4),typeof g.getSnapshotBeforeUpdate!="function"||w===r.memoizedProps&&L===r.memoizedState||(i.flags|=1024),u=!1)}return bc(r,i,a,u,p,d)}function bc(r,i,a,u,d,p){km(r,i);var g=(i.flags&128)!==0;if(!u&&!g)return d&&bp(i,a,!1),On(r,i,p);u=i.stateNode,D0.current=i;var w=g&&typeof a.getDerivedStateFromError!="function"?null:u.render();return i.flags|=1,r!==null&&g?(i.child=Ni(i,r.child,null,p),i.child=Ni(i,null,w,p)):St(r,i,w,p),i.memoizedState=u.state,d&&bp(i,a,!0),i.child}function Im(r){var i=r.stateNode;i.pendingContext?xp(r,i.pendingContext,i.pendingContext!==i.context):i.context&&xp(r,i.context,!1),hc(r,i.containerInfo)}function Tm(r,i,a,u,d){return bi(),sc(d),i.flags|=256,St(r,i,a,u),i.child}var Nc={dehydrated:null,treeContext:null,retryLane:0};function Pc(r){return{baseLanes:r,cachePool:null,transitions:null}}function xm(r,i,a){var u=i.pendingProps,d=ze.current,p=!1,g=(i.flags&128)!==0,w;if((w=g)||(w=r!==null&&r.memoizedState===null?!1:(d&2)!==0),w?(p=!0,i.flags&=-129):(r===null||r.memoizedState!==null)&&(d|=1),De(ze,d&1),r===null)return ic(i),r=i.memoizedState,r!==null&&(r=r.dehydrated,r!==null)?((i.mode&1)===0?i.lanes=1:r.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(g=u.children,r=u.fallback,p?(u=i.mode,p=i.child,g={mode:"hidden",children:g},(u&1)===0&&p!==null?(p.childLanes=0,p.pendingProps=g):p=Ka(g,u,0,null),r=Kr(r,u,a,null),p.return=i,r.return=i,p.sibling=r,i.child=p,i.child.memoizedState=Pc(a),i.memoizedState=Nc,r):Ac(i,g));if(d=r.memoizedState,d!==null&&(w=d.dehydrated,w!==null))return O0(r,i,g,u,w,d,a);if(p){p=u.fallback,g=i.mode,d=r.child,w=d.sibling;var C={mode:"hidden",children:u.children};return(g&1)===0&&i.child!==d?(u=i.child,u.childLanes=0,u.pendingProps=C,i.deletions=null):(u=pr(d,C),u.subtreeFlags=d.subtreeFlags&14680064),w!==null?p=pr(w,p):(p=Kr(p,g,a,null),p.flags|=2),p.return=i,u.return=i,u.sibling=p,i.child=u,u=p,p=i.child,g=r.child.memoizedState,g=g===null?Pc(a):{baseLanes:g.baseLanes|a,cachePool:null,transitions:g.transitions},p.memoizedState=g,p.childLanes=r.childLanes&~a,i.memoizedState=Nc,u}return p=r.child,r=p.sibling,u=pr(p,{mode:"visible",children:u.children}),(i.mode&1)===0&&(u.lanes=a),u.return=i,u.sibling=null,r!==null&&(a=i.deletions,a===null?(i.deletions=[r],i.flags|=16):a.push(r)),i.child=u,i.memoizedState=null,u}function Ac(r,i){return i=Ka({mode:"visible",children:i},r.mode,0,null),i.return=r,r.child=i}function La(r,i,a,u){return u!==null&&sc(u),Ni(i,r.child,null,a),r=Ac(i,i.pendingProps.children),r.flags|=2,i.memoizedState=null,r}function O0(r,i,a,u,d,p,g){if(a)return i.flags&256?(i.flags&=-257,u=Tc(Error(n(422))),La(r,i,g,u)):i.memoizedState!==null?(i.child=r.child,i.flags|=128,null):(p=u.fallback,d=i.mode,u=Ka({mode:"visible",children:u.children},d,0,null),p=Kr(p,d,g,null),p.flags|=2,u.return=i,p.return=i,u.sibling=p,i.child=u,(i.mode&1)!==0&&Ni(i,r.child,null,g),i.child.memoizedState=Pc(g),i.memoizedState=Nc,p);if((i.mode&1)===0)return La(r,i,g,null);if(d.data==="$!"){if(u=d.nextSibling&&d.nextSibling.dataset,u)var w=u.dgst;return u=w,p=Error(n(419)),u=Tc(p,u,void 0),La(r,i,g,u)}if(w=(g&r.childLanes)!==0,Pt||w){if(u=ot,u!==null){switch(g&-g){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(u.suspendedLanes|g))!==0?0:d,d!==0&&d!==p.retryLane&&(p.retryLane=d,An(r,d),on(u,r,d,-1))}return Kc(),u=Tc(Error(n(421))),La(r,i,g,u)}return d.data==="$?"?(i.flags|=128,i.child=r.child,i=q0.bind(null,r),d._reactRetry=i,null):(r=p.treeContext,zt=rr(d.nextSibling),Ut=i,je=!0,tn=null,r!==null&&(Bt[Vt++]=Nn,Bt[Vt++]=Pn,Bt[Vt++]=Ur,Nn=r.id,Pn=r.overflow,Ur=i),i=Ac(i,u.children),i.flags|=4096,i)}function Rm(r,i,a){r.lanes|=i;var u=r.alternate;u!==null&&(u.lanes|=i),uc(r.return,i,a)}function Dc(r,i,a,u,d){var p=r.memoizedState;p===null?r.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:u,tail:a,tailMode:d}:(p.isBackwards=i,p.rendering=null,p.renderingStartTime=0,p.last=u,p.tail=a,p.tailMode=d)}function bm(r,i,a){var u=i.pendingProps,d=u.revealOrder,p=u.tail;if(St(r,i,u.children,a),u=ze.current,(u&2)!==0)u=u&1|2,i.flags|=128;else{if(r!==null&&(r.flags&128)!==0)e:for(r=i.child;r!==null;){if(r.tag===13)r.memoizedState!==null&&Rm(r,a,i);else if(r.tag===19)Rm(r,a,i);else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===i)break e;for(;r.sibling===null;){if(r.return===null||r.return===i)break e;r=r.return}r.sibling.return=r.return,r=r.sibling}u&=1}if(De(ze,u),(i.mode&1)===0)i.memoizedState=null;else switch(d){case"forwards":for(a=i.child,d=null;a!==null;)r=a.alternate,r!==null&&Ra(r)===null&&(d=a),a=a.sibling;a=d,a===null?(d=i.child,i.child=null):(d=a.sibling,a.sibling=null),Dc(i,!1,d,a,p);break;case"backwards":for(a=null,d=i.child,i.child=null;d!==null;){if(r=d.alternate,r!==null&&Ra(r)===null){i.child=d;break}r=d.sibling,d.sibling=a,a=d,d=r}Dc(i,!0,a,null,p);break;case"together":Dc(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Ma(r,i){(i.mode&1)===0&&r!==null&&(r.alternate=null,i.alternate=null,i.flags|=2)}function On(r,i,a){if(r!==null&&(i.dependencies=r.dependencies),Vr|=i.lanes,(a&i.childLanes)===0)return null;if(r!==null&&i.child!==r.child)throw Error(n(153));if(i.child!==null){for(r=i.child,a=pr(r,r.pendingProps),i.child=a,a.return=i;r.sibling!==null;)r=r.sibling,a=a.sibling=pr(r,r.pendingProps),a.return=i;a.sibling=null}return i.child}function L0(r,i,a){switch(i.tag){case 3:Im(i),bi();break;case 5:Bp(i);break;case 1:Nt(i.type)&&_a(i);break;case 4:hc(i,i.stateNode.containerInfo);break;case 10:var u=i.type._context,d=i.memoizedProps.value;De(Sa,u._currentValue),u._currentValue=d;break;case 13:if(u=i.memoizedState,u!==null)return u.dehydrated!==null?(De(ze,ze.current&1),i.flags|=128,null):(a&i.child.childLanes)!==0?xm(r,i,a):(De(ze,ze.current&1),r=On(r,i,a),r!==null?r.sibling:null);De(ze,ze.current&1);break;case 19:if(u=(a&i.childLanes)!==0,(r.flags&128)!==0){if(u)return bm(r,i,a);i.flags|=128}if(d=i.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),De(ze,ze.current),u)break;return null;case 22:case 23:return i.lanes=0,Cm(r,i,a)}return On(r,i,a)}var Nm,Oc,Pm,Am;Nm=function(r,i){for(var a=i.child;a!==null;){if(a.tag===5||a.tag===6)r.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},Oc=function(){},Pm=function(r,i,a,u){var d=r.memoizedProps;if(d!==u){r=i.stateNode,Wr(_n.current);var p=null;switch(a){case"input":d=Yn(r,d),u=Yn(r,u),p=[];break;case"select":d=V({},d,{value:void 0}),u=V({},u,{value:void 0}),p=[];break;case"textarea":d=ys(r,d),u=ys(r,u),p=[];break;default:typeof d.onClick!="function"&&typeof u.onClick=="function"&&(r.onclick=ma)}pu(a,u);var g;a=null;for(P in d)if(!u.hasOwnProperty(P)&&d.hasOwnProperty(P)&&d[P]!=null)if(P==="style"){var w=d[P];for(g in w)w.hasOwnProperty(g)&&(a||(a={}),a[g]="")}else P!=="dangerouslySetInnerHTML"&&P!=="children"&&P!=="suppressContentEditableWarning"&&P!=="suppressHydrationWarning"&&P!=="autoFocus"&&(o.hasOwnProperty(P)?p||(p=[]):(p=p||[]).push(P,null));for(P in u){var C=u[P];if(w=d!=null?d[P]:void 0,u.hasOwnProperty(P)&&C!==w&&(C!=null||w!=null))if(P==="style")if(w){for(g in w)!w.hasOwnProperty(g)||C&&C.hasOwnProperty(g)||(a||(a={}),a[g]="");for(g in C)C.hasOwnProperty(g)&&w[g]!==C[g]&&(a||(a={}),a[g]=C[g])}else a||(p||(p=[]),p.push(P,a)),a=C;else P==="dangerouslySetInnerHTML"?(C=C?C.__html:void 0,w=w?w.__html:void 0,C!=null&&w!==C&&(p=p||[]).push(P,C)):P==="children"?typeof C!="string"&&typeof C!="number"||(p=p||[]).push(P,""+C):P!=="suppressContentEditableWarning"&&P!=="suppressHydrationWarning"&&(o.hasOwnProperty(P)?(C!=null&&P==="onScroll"&&Me("scroll",r),p||w===C||(p=[])):(p=p||[]).push(P,C))}a&&(p=p||[]).push("style",a);var P=p;(i.updateQueue=P)&&(i.flags|=4)}},Am=function(r,i,a,u){a!==u&&(i.flags|=4)};function Qs(r,i){if(!je)switch(r.tailMode){case"hidden":i=r.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?r.tail=null:a.sibling=null;break;case"collapsed":a=r.tail;for(var u=null;a!==null;)a.alternate!==null&&(u=a),a=a.sibling;u===null?i||r.tail===null?r.tail=null:r.tail.sibling=null:u.sibling=null}}function Et(r){var i=r.alternate!==null&&r.alternate.child===r.child,a=0,u=0;if(i)for(var d=r.child;d!==null;)a|=d.lanes|d.childLanes,u|=d.subtreeFlags&14680064,u|=d.flags&14680064,d.return=r,d=d.sibling;else for(d=r.child;d!==null;)a|=d.lanes|d.childLanes,u|=d.subtreeFlags,u|=d.flags,d.return=r,d=d.sibling;return r.subtreeFlags|=u,r.childLanes=a,i}function M0(r,i,a){var u=i.pendingProps;switch(nc(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Et(i),null;case 1:return Nt(i.type)&&ya(),Et(i),null;case 3:return u=i.stateNode,Di(),Fe(bt),Fe(vt),mc(),u.pendingContext&&(u.context=u.pendingContext,u.pendingContext=null),(r===null||r.child===null)&&(Ca(i)?i.flags|=4:r===null||r.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,tn!==null&&(Hc(tn),tn=null))),Oc(r,i),Et(i),null;case 5:fc(i);var d=Wr(Hs.current);if(a=i.type,r!==null&&i.stateNode!=null)Pm(r,i,a,u,d),r.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!u){if(i.stateNode===null)throw Error(n(166));return Et(i),null}if(r=Wr(_n.current),Ca(i)){u=i.stateNode,a=i.type;var p=i.memoizedProps;switch(u[yn]=i,u[zs]=p,r=(i.mode&1)!==0,a){case"dialog":Me("cancel",u),Me("close",u);break;case"iframe":case"object":case"embed":Me("load",u);break;case"video":case"audio":for(d=0;d<Fs.length;d++)Me(Fs[d],u);break;case"source":Me("error",u);break;case"img":case"image":case"link":Me("error",u),Me("load",u);break;case"details":Me("toggle",u);break;case"input":xn(u,p),Me("invalid",u);break;case"select":u._wrapperState={wasMultiple:!!p.multiple},Me("invalid",u);break;case"textarea":Go(u,p),Me("invalid",u)}pu(a,p),d=null;for(var g in p)if(p.hasOwnProperty(g)){var w=p[g];g==="children"?typeof w=="string"?u.textContent!==w&&(p.suppressHydrationWarning!==!0&&pa(u.textContent,w,r),d=["children",w]):typeof w=="number"&&u.textContent!==""+w&&(p.suppressHydrationWarning!==!0&&pa(u.textContent,w,r),d=["children",""+w]):o.hasOwnProperty(g)&&w!=null&&g==="onScroll"&&Me("scroll",u)}switch(a){case"input":Ie(u),Ho(u,p,!0);break;case"textarea":Ie(u),yf(u);break;case"select":case"option":break;default:typeof p.onClick=="function"&&(u.onclick=ma)}u=d,i.updateQueue=u,u!==null&&(i.flags|=4)}else{g=d.nodeType===9?d:d.ownerDocument,r==="http://www.w3.org/1999/xhtml"&&(r=_f(a)),r==="http://www.w3.org/1999/xhtml"?a==="script"?(r=g.createElement("div"),r.innerHTML="<script><\/script>",r=r.removeChild(r.firstChild)):typeof u.is=="string"?r=g.createElement(a,{is:u.is}):(r=g.createElement(a),a==="select"&&(g=r,u.multiple?g.multiple=!0:u.size&&(g.size=u.size))):r=g.createElementNS(r,a),r[yn]=i,r[zs]=u,Nm(r,i,!1,!1),i.stateNode=r;e:{switch(g=mu(a,u),a){case"dialog":Me("cancel",r),Me("close",r),d=u;break;case"iframe":case"object":case"embed":Me("load",r),d=u;break;case"video":case"audio":for(d=0;d<Fs.length;d++)Me(Fs[d],r);d=u;break;case"source":Me("error",r),d=u;break;case"img":case"image":case"link":Me("error",r),Me("load",r),d=u;break;case"details":Me("toggle",r),d=u;break;case"input":xn(r,u),d=Yn(r,u),Me("invalid",r);break;case"option":d=u;break;case"select":r._wrapperState={wasMultiple:!!u.multiple},d=V({},u,{value:void 0}),Me("invalid",r);break;case"textarea":Go(r,u),d=ys(r,u),Me("invalid",r);break;default:d=u}pu(a,d),w=d;for(p in w)if(w.hasOwnProperty(p)){var C=w[p];p==="style"?Ef(r,C):p==="dangerouslySetInnerHTML"?(C=C?C.__html:void 0,C!=null&&vf(r,C)):p==="children"?typeof C=="string"?(a!=="textarea"||C!=="")&&_s(r,C):typeof C=="number"&&_s(r,""+C):p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&p!=="autoFocus"&&(o.hasOwnProperty(p)?C!=null&&p==="onScroll"&&Me("scroll",r):C!=null&&U(r,p,C,g))}switch(a){case"input":Ie(r),Ho(r,u,!1);break;case"textarea":Ie(r),yf(r);break;case"option":u.value!=null&&r.setAttribute("value",""+te(u.value));break;case"select":r.multiple=!!u.multiple,p=u.value,p!=null?Qn(r,!!u.multiple,p,!1):u.defaultValue!=null&&Qn(r,!!u.multiple,u.defaultValue,!0);break;default:typeof d.onClick=="function"&&(r.onclick=ma)}switch(a){case"button":case"input":case"select":case"textarea":u=!!u.autoFocus;break e;case"img":u=!0;break e;default:u=!1}}u&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return Et(i),null;case 6:if(r&&i.stateNode!=null)Am(r,i,r.memoizedProps,u);else{if(typeof u!="string"&&i.stateNode===null)throw Error(n(166));if(a=Wr(Hs.current),Wr(_n.current),Ca(i)){if(u=i.stateNode,a=i.memoizedProps,u[yn]=i,(p=u.nodeValue!==a)&&(r=Ut,r!==null))switch(r.tag){case 3:pa(u.nodeValue,a,(r.mode&1)!==0);break;case 5:r.memoizedProps.suppressHydrationWarning!==!0&&pa(u.nodeValue,a,(r.mode&1)!==0)}p&&(i.flags|=4)}else u=(a.nodeType===9?a:a.ownerDocument).createTextNode(u),u[yn]=i,i.stateNode=u}return Et(i),null;case 13:if(Fe(ze),u=i.memoizedState,r===null||r.memoizedState!==null&&r.memoizedState.dehydrated!==null){if(je&&zt!==null&&(i.mode&1)!==0&&(i.flags&128)===0)Lp(),bi(),i.flags|=98560,p=!1;else if(p=Ca(i),u!==null&&u.dehydrated!==null){if(r===null){if(!p)throw Error(n(318));if(p=i.memoizedState,p=p!==null?p.dehydrated:null,!p)throw Error(n(317));p[yn]=i}else bi(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;Et(i),p=!1}else tn!==null&&(Hc(tn),tn=null),p=!0;if(!p)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=a,i):(u=u!==null,u!==(r!==null&&r.memoizedState!==null)&&u&&(i.child.flags|=8192,(i.mode&1)!==0&&(r===null||(ze.current&1)!==0?Xe===0&&(Xe=3):Kc())),i.updateQueue!==null&&(i.flags|=4),Et(i),null);case 4:return Di(),Oc(r,i),r===null&&js(i.stateNode.containerInfo),Et(i),null;case 10:return lc(i.type._context),Et(i),null;case 17:return Nt(i.type)&&ya(),Et(i),null;case 19:if(Fe(ze),p=i.memoizedState,p===null)return Et(i),null;if(u=(i.flags&128)!==0,g=p.rendering,g===null)if(u)Qs(p,!1);else{if(Xe!==0||r!==null&&(r.flags&128)!==0)for(r=i.child;r!==null;){if(g=Ra(r),g!==null){for(i.flags|=128,Qs(p,!1),u=g.updateQueue,u!==null&&(i.updateQueue=u,i.flags|=4),i.subtreeFlags=0,u=a,a=i.child;a!==null;)p=a,r=u,p.flags&=14680066,g=p.alternate,g===null?(p.childLanes=0,p.lanes=r,p.child=null,p.subtreeFlags=0,p.memoizedProps=null,p.memoizedState=null,p.updateQueue=null,p.dependencies=null,p.stateNode=null):(p.childLanes=g.childLanes,p.lanes=g.lanes,p.child=g.child,p.subtreeFlags=0,p.deletions=null,p.memoizedProps=g.memoizedProps,p.memoizedState=g.memoizedState,p.updateQueue=g.updateQueue,p.type=g.type,r=g.dependencies,p.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext}),a=a.sibling;return De(ze,ze.current&1|2),i.child}r=r.sibling}p.tail!==null&&Ge()>Fi&&(i.flags|=128,u=!0,Qs(p,!1),i.lanes=4194304)}else{if(!u)if(r=Ra(g),r!==null){if(i.flags|=128,u=!0,a=r.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),Qs(p,!0),p.tail===null&&p.tailMode==="hidden"&&!g.alternate&&!je)return Et(i),null}else 2*Ge()-p.renderingStartTime>Fi&&a!==1073741824&&(i.flags|=128,u=!0,Qs(p,!1),i.lanes=4194304);p.isBackwards?(g.sibling=i.child,i.child=g):(a=p.last,a!==null?a.sibling=g:i.child=g,p.last=g)}return p.tail!==null?(i=p.tail,p.rendering=i,p.tail=i.sibling,p.renderingStartTime=Ge(),i.sibling=null,a=ze.current,De(ze,u?a&1|2:a&1),i):(Et(i),null);case 22:case 23:return qc(),u=i.memoizedState!==null,r!==null&&r.memoizedState!==null!==u&&(i.flags|=8192),u&&(i.mode&1)!==0?($t&1073741824)!==0&&(Et(i),i.subtreeFlags&6&&(i.flags|=8192)):Et(i),null;case 24:return null;case 25:return null}throw Error(n(156,i.tag))}function F0(r,i){switch(nc(i),i.tag){case 1:return Nt(i.type)&&ya(),r=i.flags,r&65536?(i.flags=r&-65537|128,i):null;case 3:return Di(),Fe(bt),Fe(vt),mc(),r=i.flags,(r&65536)!==0&&(r&128)===0?(i.flags=r&-65537|128,i):null;case 5:return fc(i),null;case 13:if(Fe(ze),r=i.memoizedState,r!==null&&r.dehydrated!==null){if(i.alternate===null)throw Error(n(340));bi()}return r=i.flags,r&65536?(i.flags=r&-65537|128,i):null;case 19:return Fe(ze),null;case 4:return Di(),null;case 10:return lc(i.type._context),null;case 22:case 23:return qc(),null;case 24:return null;default:return null}}var Fa=!1,Ct=!1,j0=typeof WeakSet=="function"?WeakSet:Set,G=null;function Li(r,i){var a=r.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(u){We(r,i,u)}else a.current=null}function Lc(r,i,a){try{a()}catch(u){We(r,i,u)}}var Dm=!1;function U0(r,i){if(qu=ra,r=dp(),Uu(r)){if("selectionStart"in r)var a={start:r.selectionStart,end:r.selectionEnd};else e:{a=(a=r.ownerDocument)&&a.defaultView||window;var u=a.getSelection&&a.getSelection();if(u&&u.rangeCount!==0){a=u.anchorNode;var d=u.anchorOffset,p=u.focusNode;u=u.focusOffset;try{a.nodeType,p.nodeType}catch{a=null;break e}var g=0,w=-1,C=-1,P=0,M=0,F=r,L=null;t:for(;;){for(var H;F!==a||d!==0&&F.nodeType!==3||(w=g+d),F!==p||u!==0&&F.nodeType!==3||(C=g+u),F.nodeType===3&&(g+=F.nodeValue.length),(H=F.firstChild)!==null;)L=F,F=H;for(;;){if(F===r)break t;if(L===a&&++P===d&&(w=g),L===p&&++M===u&&(C=g),(H=F.nextSibling)!==null)break;F=L,L=F.parentNode}F=H}a=w===-1||C===-1?null:{start:w,end:C}}else a=null}a=a||{start:0,end:0}}else a=null;for(Ku={focusedElem:r,selectionRange:a},ra=!1,G=i;G!==null;)if(i=G,r=i.child,(i.subtreeFlags&1028)!==0&&r!==null)r.return=i,G=r;else for(;G!==null;){i=G;try{var K=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(K!==null){var Z=K.memoizedProps,qe=K.memoizedState,R=i.stateNode,k=R.getSnapshotBeforeUpdate(i.elementType===i.type?Z:nn(i.type,Z),qe);R.__reactInternalSnapshotBeforeUpdate=k}break;case 3:var b=i.stateNode.containerInfo;b.nodeType===1?b.textContent="":b.nodeType===9&&b.documentElement&&b.removeChild(b.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(n(163))}}catch($){We(i,i.return,$)}if(r=i.sibling,r!==null){r.return=i.return,G=r;break}G=i.return}return K=Dm,Dm=!1,K}function Js(r,i,a){var u=i.updateQueue;if(u=u!==null?u.lastEffect:null,u!==null){var d=u=u.next;do{if((d.tag&r)===r){var p=d.destroy;d.destroy=void 0,p!==void 0&&Lc(i,a,p)}d=d.next}while(d!==u)}}function ja(r,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var a=i=i.next;do{if((a.tag&r)===r){var u=a.create;a.destroy=u()}a=a.next}while(a!==i)}}function Mc(r){var i=r.ref;if(i!==null){var a=r.stateNode;switch(r.tag){case 5:r=a;break;default:r=a}typeof i=="function"?i(r):i.current=r}}function Om(r){var i=r.alternate;i!==null&&(r.alternate=null,Om(i)),r.child=null,r.deletions=null,r.sibling=null,r.tag===5&&(i=r.stateNode,i!==null&&(delete i[yn],delete i[zs],delete i[Xu],delete i[E0],delete i[C0])),r.stateNode=null,r.return=null,r.dependencies=null,r.memoizedProps=null,r.memoizedState=null,r.pendingProps=null,r.stateNode=null,r.updateQueue=null}function Lm(r){return r.tag===5||r.tag===3||r.tag===4}function Mm(r){e:for(;;){for(;r.sibling===null;){if(r.return===null||Lm(r.return))return null;r=r.return}for(r.sibling.return=r.return,r=r.sibling;r.tag!==5&&r.tag!==6&&r.tag!==18;){if(r.flags&2||r.child===null||r.tag===4)continue e;r.child.return=r,r=r.child}if(!(r.flags&2))return r.stateNode}}function Fc(r,i,a){var u=r.tag;if(u===5||u===6)r=r.stateNode,i?a.nodeType===8?a.parentNode.insertBefore(r,i):a.insertBefore(r,i):(a.nodeType===8?(i=a.parentNode,i.insertBefore(r,a)):(i=a,i.appendChild(r)),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=ma));else if(u!==4&&(r=r.child,r!==null))for(Fc(r,i,a),r=r.sibling;r!==null;)Fc(r,i,a),r=r.sibling}function jc(r,i,a){var u=r.tag;if(u===5||u===6)r=r.stateNode,i?a.insertBefore(r,i):a.appendChild(r);else if(u!==4&&(r=r.child,r!==null))for(jc(r,i,a),r=r.sibling;r!==null;)jc(r,i,a),r=r.sibling}var pt=null,rn=!1;function ur(r,i,a){for(a=a.child;a!==null;)Fm(r,i,a),a=a.sibling}function Fm(r,i,a){if(gn&&typeof gn.onCommitFiberUnmount=="function")try{gn.onCommitFiberUnmount(Jo,a)}catch{}switch(a.tag){case 5:Ct||Li(a,i);case 6:var u=pt,d=rn;pt=null,ur(r,i,a),pt=u,rn=d,pt!==null&&(rn?(r=pt,a=a.stateNode,r.nodeType===8?r.parentNode.removeChild(a):r.removeChild(a)):pt.removeChild(a.stateNode));break;case 18:pt!==null&&(rn?(r=pt,a=a.stateNode,r.nodeType===8?Ju(r.parentNode,a):r.nodeType===1&&Ju(r,a),bs(r)):Ju(pt,a.stateNode));break;case 4:u=pt,d=rn,pt=a.stateNode.containerInfo,rn=!0,ur(r,i,a),pt=u,rn=d;break;case 0:case 11:case 14:case 15:if(!Ct&&(u=a.updateQueue,u!==null&&(u=u.lastEffect,u!==null))){d=u=u.next;do{var p=d,g=p.destroy;p=p.tag,g!==void 0&&((p&2)!==0||(p&4)!==0)&&Lc(a,i,g),d=d.next}while(d!==u)}ur(r,i,a);break;case 1:if(!Ct&&(Li(a,i),u=a.stateNode,typeof u.componentWillUnmount=="function"))try{u.props=a.memoizedProps,u.state=a.memoizedState,u.componentWillUnmount()}catch(w){We(a,i,w)}ur(r,i,a);break;case 21:ur(r,i,a);break;case 22:a.mode&1?(Ct=(u=Ct)||a.memoizedState!==null,ur(r,i,a),Ct=u):ur(r,i,a);break;default:ur(r,i,a)}}function jm(r){var i=r.updateQueue;if(i!==null){r.updateQueue=null;var a=r.stateNode;a===null&&(a=r.stateNode=new j0),i.forEach(function(u){var d=K0.bind(null,r,u);a.has(u)||(a.add(u),u.then(d,d))})}}function sn(r,i){var a=i.deletions;if(a!==null)for(var u=0;u<a.length;u++){var d=a[u];try{var p=r,g=i,w=g;e:for(;w!==null;){switch(w.tag){case 5:pt=w.stateNode,rn=!1;break e;case 3:pt=w.stateNode.containerInfo,rn=!0;break e;case 4:pt=w.stateNode.containerInfo,rn=!0;break e}w=w.return}if(pt===null)throw Error(n(160));Fm(p,g,d),pt=null,rn=!1;var C=d.alternate;C!==null&&(C.return=null),d.return=null}catch(P){We(d,i,P)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)Um(i,r),i=i.sibling}function Um(r,i){var a=r.alternate,u=r.flags;switch(r.tag){case 0:case 11:case 14:case 15:if(sn(i,r),wn(r),u&4){try{Js(3,r,r.return),ja(3,r)}catch(Z){We(r,r.return,Z)}try{Js(5,r,r.return)}catch(Z){We(r,r.return,Z)}}break;case 1:sn(i,r),wn(r),u&512&&a!==null&&Li(a,a.return);break;case 5:if(sn(i,r),wn(r),u&512&&a!==null&&Li(a,a.return),r.flags&32){var d=r.stateNode;try{_s(d,"")}catch(Z){We(r,r.return,Z)}}if(u&4&&(d=r.stateNode,d!=null)){var p=r.memoizedProps,g=a!==null?a.memoizedProps:p,w=r.type,C=r.updateQueue;if(r.updateQueue=null,C!==null)try{w==="input"&&p.type==="radio"&&p.name!=null&&Vo(d,p),mu(w,g);var P=mu(w,p);for(g=0;g<C.length;g+=2){var M=C[g],F=C[g+1];M==="style"?Ef(d,F):M==="dangerouslySetInnerHTML"?vf(d,F):M==="children"?_s(d,F):U(d,M,F,P)}switch(w){case"input":ms(d,p);break;case"textarea":it(d,p);break;case"select":var L=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!p.multiple;var H=p.value;H!=null?Qn(d,!!p.multiple,H,!1):L!==!!p.multiple&&(p.defaultValue!=null?Qn(d,!!p.multiple,p.defaultValue,!0):Qn(d,!!p.multiple,p.multiple?[]:"",!1))}d[zs]=p}catch(Z){We(r,r.return,Z)}}break;case 6:if(sn(i,r),wn(r),u&4){if(r.stateNode===null)throw Error(n(162));d=r.stateNode,p=r.memoizedProps;try{d.nodeValue=p}catch(Z){We(r,r.return,Z)}}break;case 3:if(sn(i,r),wn(r),u&4&&a!==null&&a.memoizedState.isDehydrated)try{bs(i.containerInfo)}catch(Z){We(r,r.return,Z)}break;case 4:sn(i,r),wn(r);break;case 13:sn(i,r),wn(r),d=r.child,d.flags&8192&&(p=d.memoizedState!==null,d.stateNode.isHidden=p,!p||d.alternate!==null&&d.alternate.memoizedState!==null||($c=Ge())),u&4&&jm(r);break;case 22:if(M=a!==null&&a.memoizedState!==null,r.mode&1?(Ct=(P=Ct)||M,sn(i,r),Ct=P):sn(i,r),wn(r),u&8192){if(P=r.memoizedState!==null,(r.stateNode.isHidden=P)&&!M&&(r.mode&1)!==0)for(G=r,M=r.child;M!==null;){for(F=G=M;G!==null;){switch(L=G,H=L.child,L.tag){case 0:case 11:case 14:case 15:Js(4,L,L.return);break;case 1:Li(L,L.return);var K=L.stateNode;if(typeof K.componentWillUnmount=="function"){u=L,a=L.return;try{i=u,K.props=i.memoizedProps,K.state=i.memoizedState,K.componentWillUnmount()}catch(Z){We(u,a,Z)}}break;case 5:Li(L,L.return);break;case 22:if(L.memoizedState!==null){Wm(F);continue}}H!==null?(H.return=L,G=H):Wm(F)}M=M.sibling}e:for(M=null,F=r;;){if(F.tag===5){if(M===null){M=F;try{d=F.stateNode,P?(p=d.style,typeof p.setProperty=="function"?p.setProperty("display","none","important"):p.display="none"):(w=F.stateNode,C=F.memoizedProps.style,g=C!=null&&C.hasOwnProperty("display")?C.display:null,w.style.display=wf("display",g))}catch(Z){We(r,r.return,Z)}}}else if(F.tag===6){if(M===null)try{F.stateNode.nodeValue=P?"":F.memoizedProps}catch(Z){We(r,r.return,Z)}}else if((F.tag!==22&&F.tag!==23||F.memoizedState===null||F===r)&&F.child!==null){F.child.return=F,F=F.child;continue}if(F===r)break e;for(;F.sibling===null;){if(F.return===null||F.return===r)break e;M===F&&(M=null),F=F.return}M===F&&(M=null),F.sibling.return=F.return,F=F.sibling}}break;case 19:sn(i,r),wn(r),u&4&&jm(r);break;case 21:break;default:sn(i,r),wn(r)}}function wn(r){var i=r.flags;if(i&2){try{e:{for(var a=r.return;a!==null;){if(Lm(a)){var u=a;break e}a=a.return}throw Error(n(160))}switch(u.tag){case 5:var d=u.stateNode;u.flags&32&&(_s(d,""),u.flags&=-33);var p=Mm(r);jc(r,p,d);break;case 3:case 4:var g=u.stateNode.containerInfo,w=Mm(r);Fc(r,w,g);break;default:throw Error(n(161))}}catch(C){We(r,r.return,C)}r.flags&=-3}i&4096&&(r.flags&=-4097)}function z0(r,i,a){G=r,zm(r)}function zm(r,i,a){for(var u=(r.mode&1)!==0;G!==null;){var d=G,p=d.child;if(d.tag===22&&u){var g=d.memoizedState!==null||Fa;if(!g){var w=d.alternate,C=w!==null&&w.memoizedState!==null||Ct;w=Fa;var P=Ct;if(Fa=g,(Ct=C)&&!P)for(G=d;G!==null;)g=G,C=g.child,g.tag===22&&g.memoizedState!==null?Bm(d):C!==null?(C.return=g,G=C):Bm(d);for(;p!==null;)G=p,zm(p),p=p.sibling;G=d,Fa=w,Ct=P}$m(r)}else(d.subtreeFlags&8772)!==0&&p!==null?(p.return=d,G=p):$m(r)}}function $m(r){for(;G!==null;){var i=G;if((i.flags&8772)!==0){var a=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:Ct||ja(5,i);break;case 1:var u=i.stateNode;if(i.flags&4&&!Ct)if(a===null)u.componentDidMount();else{var d=i.elementType===i.type?a.memoizedProps:nn(i.type,a.memoizedProps);u.componentDidUpdate(d,a.memoizedState,u.__reactInternalSnapshotBeforeUpdate)}var p=i.updateQueue;p!==null&&Wp(i,p,u);break;case 3:var g=i.updateQueue;if(g!==null){if(a=null,i.child!==null)switch(i.child.tag){case 5:a=i.child.stateNode;break;case 1:a=i.child.stateNode}Wp(i,g,a)}break;case 5:var w=i.stateNode;if(a===null&&i.flags&4){a=w;var C=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":C.autoFocus&&a.focus();break;case"img":C.src&&(a.src=C.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var P=i.alternate;if(P!==null){var M=P.memoizedState;if(M!==null){var F=M.dehydrated;F!==null&&bs(F)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(n(163))}Ct||i.flags&512&&Mc(i)}catch(L){We(i,i.return,L)}}if(i===r){G=null;break}if(a=i.sibling,a!==null){a.return=i.return,G=a;break}G=i.return}}function Wm(r){for(;G!==null;){var i=G;if(i===r){G=null;break}var a=i.sibling;if(a!==null){a.return=i.return,G=a;break}G=i.return}}function Bm(r){for(;G!==null;){var i=G;try{switch(i.tag){case 0:case 11:case 15:var a=i.return;try{ja(4,i)}catch(C){We(i,a,C)}break;case 1:var u=i.stateNode;if(typeof u.componentDidMount=="function"){var d=i.return;try{u.componentDidMount()}catch(C){We(i,d,C)}}var p=i.return;try{Mc(i)}catch(C){We(i,p,C)}break;case 5:var g=i.return;try{Mc(i)}catch(C){We(i,g,C)}}}catch(C){We(i,i.return,C)}if(i===r){G=null;break}var w=i.sibling;if(w!==null){w.return=i.return,G=w;break}G=i.return}}var $0=Math.ceil,Ua=q.ReactCurrentDispatcher,Uc=q.ReactCurrentOwner,qt=q.ReactCurrentBatchConfig,_e=0,ot=null,Ye=null,mt=0,$t=0,Mi=ir(0),Xe=0,Xs=null,Vr=0,za=0,zc=0,Zs=null,At=null,$c=0,Fi=1/0,Ln=null,$a=!1,Wc=null,cr=null,Wa=!1,dr=null,Ba=0,eo=0,Bc=null,Va=-1,Ha=0;function It(){return(_e&6)!==0?Ge():Va!==-1?Va:Va=Ge()}function hr(r){return(r.mode&1)===0?1:(_e&2)!==0&&mt!==0?mt&-mt:S0.transition!==null?(Ha===0&&(Ha=Mf()),Ha):(r=xe,r!==0||(r=window.event,r=r===void 0?16:Hf(r.type)),r)}function on(r,i,a,u){if(50<eo)throw eo=0,Bc=null,Error(n(185));Ss(r,a,u),((_e&2)===0||r!==ot)&&(r===ot&&((_e&2)===0&&(za|=a),Xe===4&&fr(r,mt)),Dt(r,u),a===1&&_e===0&&(i.mode&1)===0&&(Fi=Ge()+500,va&&or()))}function Dt(r,i){var a=r.callbackNode;SE(r,i);var u=ea(r,r===ot?mt:0);if(u===0)a!==null&&Df(a),r.callbackNode=null,r.callbackPriority=0;else if(i=u&-u,r.callbackPriority!==i){if(a!=null&&Df(a),i===1)r.tag===0?k0(Hm.bind(null,r)):Np(Hm.bind(null,r)),v0(function(){(_e&6)===0&&or()}),a=null;else{switch(Ff(u)){case 1:a=Cu;break;case 4:a=Of;break;case 16:a=Qo;break;case 536870912:a=Lf;break;default:a=Qo}a=Zm(a,Vm.bind(null,r))}r.callbackPriority=i,r.callbackNode=a}}function Vm(r,i){if(Va=-1,Ha=0,(_e&6)!==0)throw Error(n(327));var a=r.callbackNode;if(ji()&&r.callbackNode!==a)return null;var u=ea(r,r===ot?mt:0);if(u===0)return null;if((u&30)!==0||(u&r.expiredLanes)!==0||i)i=Ga(r,u);else{i=u;var d=_e;_e|=2;var p=qm();(ot!==r||mt!==i)&&(Ln=null,Fi=Ge()+500,Gr(r,i));do try{V0();break}catch(w){Gm(r,w)}while(!0);ac(),Ua.current=p,_e=d,Ye!==null?i=0:(ot=null,mt=0,i=Xe)}if(i!==0){if(i===2&&(d=ku(r),d!==0&&(u=d,i=Vc(r,d))),i===1)throw a=Xs,Gr(r,0),fr(r,u),Dt(r,Ge()),a;if(i===6)fr(r,u);else{if(d=r.current.alternate,(u&30)===0&&!W0(d)&&(i=Ga(r,u),i===2&&(p=ku(r),p!==0&&(u=p,i=Vc(r,p))),i===1))throw a=Xs,Gr(r,0),fr(r,u),Dt(r,Ge()),a;switch(r.finishedWork=d,r.finishedLanes=u,i){case 0:case 1:throw Error(n(345));case 2:qr(r,At,Ln);break;case 3:if(fr(r,u),(u&130023424)===u&&(i=$c+500-Ge(),10<i)){if(ea(r,0)!==0)break;if(d=r.suspendedLanes,(d&u)!==u){It(),r.pingedLanes|=r.suspendedLanes&d;break}r.timeoutHandle=Qu(qr.bind(null,r,At,Ln),i);break}qr(r,At,Ln);break;case 4:if(fr(r,u),(u&4194240)===u)break;for(i=r.eventTimes,d=-1;0<u;){var g=31-Zt(u);p=1<<g,g=i[g],g>d&&(d=g),u&=~p}if(u=d,u=Ge()-u,u=(120>u?120:480>u?480:1080>u?1080:1920>u?1920:3e3>u?3e3:4320>u?4320:1960*$0(u/1960))-u,10<u){r.timeoutHandle=Qu(qr.bind(null,r,At,Ln),u);break}qr(r,At,Ln);break;case 5:qr(r,At,Ln);break;default:throw Error(n(329))}}}return Dt(r,Ge()),r.callbackNode===a?Vm.bind(null,r):null}function Vc(r,i){var a=Zs;return r.current.memoizedState.isDehydrated&&(Gr(r,i).flags|=256),r=Ga(r,i),r!==2&&(i=At,At=a,i!==null&&Hc(i)),r}function Hc(r){At===null?At=r:At.push.apply(At,r)}function W0(r){for(var i=r;;){if(i.flags&16384){var a=i.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var u=0;u<a.length;u++){var d=a[u],p=d.getSnapshot;d=d.value;try{if(!en(p(),d))return!1}catch{return!1}}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===r)break;for(;i.sibling===null;){if(i.return===null||i.return===r)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function fr(r,i){for(i&=~zc,i&=~za,r.suspendedLanes|=i,r.pingedLanes&=~i,r=r.expirationTimes;0<i;){var a=31-Zt(i),u=1<<a;r[a]=-1,i&=~u}}function Hm(r){if((_e&6)!==0)throw Error(n(327));ji();var i=ea(r,0);if((i&1)===0)return Dt(r,Ge()),null;var a=Ga(r,i);if(r.tag!==0&&a===2){var u=ku(r);u!==0&&(i=u,a=Vc(r,u))}if(a===1)throw a=Xs,Gr(r,0),fr(r,i),Dt(r,Ge()),a;if(a===6)throw Error(n(345));return r.finishedWork=r.current.alternate,r.finishedLanes=i,qr(r,At,Ln),Dt(r,Ge()),null}function Gc(r,i){var a=_e;_e|=1;try{return r(i)}finally{_e=a,_e===0&&(Fi=Ge()+500,va&&or())}}function Hr(r){dr!==null&&dr.tag===0&&(_e&6)===0&&ji();var i=_e;_e|=1;var a=qt.transition,u=xe;try{if(qt.transition=null,xe=1,r)return r()}finally{xe=u,qt.transition=a,_e=i,(_e&6)===0&&or()}}function qc(){$t=Mi.current,Fe(Mi)}function Gr(r,i){r.finishedWork=null,r.finishedLanes=0;var a=r.timeoutHandle;if(a!==-1&&(r.timeoutHandle=-1,_0(a)),Ye!==null)for(a=Ye.return;a!==null;){var u=a;switch(nc(u),u.tag){case 1:u=u.type.childContextTypes,u!=null&&ya();break;case 3:Di(),Fe(bt),Fe(vt),mc();break;case 5:fc(u);break;case 4:Di();break;case 13:Fe(ze);break;case 19:Fe(ze);break;case 10:lc(u.type._context);break;case 22:case 23:qc()}a=a.return}if(ot=r,Ye=r=pr(r.current,null),mt=$t=i,Xe=0,Xs=null,zc=za=Vr=0,At=Zs=null,$r!==null){for(i=0;i<$r.length;i++)if(a=$r[i],u=a.interleaved,u!==null){a.interleaved=null;var d=u.next,p=a.pending;if(p!==null){var g=p.next;p.next=d,u.next=g}a.pending=u}$r=null}return r}function Gm(r,i){do{var a=Ye;try{if(ac(),ba.current=Da,Na){for(var u=$e.memoizedState;u!==null;){var d=u.queue;d!==null&&(d.pending=null),u=u.next}Na=!1}if(Br=0,st=Je=$e=null,Gs=!1,qs=0,Uc.current=null,a===null||a.return===null){Xe=1,Xs=i,Ye=null;break}e:{var p=r,g=a.return,w=a,C=i;if(i=mt,w.flags|=32768,C!==null&&typeof C=="object"&&typeof C.then=="function"){var P=C,M=w,F=M.tag;if((M.mode&1)===0&&(F===0||F===11||F===15)){var L=M.alternate;L?(M.updateQueue=L.updateQueue,M.memoizedState=L.memoizedState,M.lanes=L.lanes):(M.updateQueue=null,M.memoizedState=null)}var H=ym(g);if(H!==null){H.flags&=-257,_m(H,g,w,p,i),H.mode&1&&gm(p,P,i),i=H,C=P;var K=i.updateQueue;if(K===null){var Z=new Set;Z.add(C),i.updateQueue=Z}else K.add(C);break e}else{if((i&1)===0){gm(p,P,i),Kc();break e}C=Error(n(426))}}else if(je&&w.mode&1){var qe=ym(g);if(qe!==null){(qe.flags&65536)===0&&(qe.flags|=256),_m(qe,g,w,p,i),sc(Oi(C,w));break e}}p=C=Oi(C,w),Xe!==4&&(Xe=2),Zs===null?Zs=[p]:Zs.push(p),p=g;do{switch(p.tag){case 3:p.flags|=65536,i&=-i,p.lanes|=i;var R=pm(p,C,i);$p(p,R);break e;case 1:w=C;var k=p.type,b=p.stateNode;if((p.flags&128)===0&&(typeof k.getDerivedStateFromError=="function"||b!==null&&typeof b.componentDidCatch=="function"&&(cr===null||!cr.has(b)))){p.flags|=65536,i&=-i,p.lanes|=i;var $=mm(p,w,i);$p(p,$);break e}}p=p.return}while(p!==null)}Ym(a)}catch(ee){i=ee,Ye===a&&a!==null&&(Ye=a=a.return);continue}break}while(!0)}function qm(){var r=Ua.current;return Ua.current=Da,r===null?Da:r}function Kc(){(Xe===0||Xe===3||Xe===2)&&(Xe=4),ot===null||(Vr&268435455)===0&&(za&268435455)===0||fr(ot,mt)}function Ga(r,i){var a=_e;_e|=2;var u=qm();(ot!==r||mt!==i)&&(Ln=null,Gr(r,i));do try{B0();break}catch(d){Gm(r,d)}while(!0);if(ac(),_e=a,Ua.current=u,Ye!==null)throw Error(n(261));return ot=null,mt=0,Xe}function B0(){for(;Ye!==null;)Km(Ye)}function V0(){for(;Ye!==null&&!mE();)Km(Ye)}function Km(r){var i=Xm(r.alternate,r,$t);r.memoizedProps=r.pendingProps,i===null?Ym(r):Ye=i,Uc.current=null}function Ym(r){var i=r;do{var a=i.alternate;if(r=i.return,(i.flags&32768)===0){if(a=M0(a,i,$t),a!==null){Ye=a;return}}else{if(a=F0(a,i),a!==null){a.flags&=32767,Ye=a;return}if(r!==null)r.flags|=32768,r.subtreeFlags=0,r.deletions=null;else{Xe=6,Ye=null;return}}if(i=i.sibling,i!==null){Ye=i;return}Ye=i=r}while(i!==null);Xe===0&&(Xe=5)}function qr(r,i,a){var u=xe,d=qt.transition;try{qt.transition=null,xe=1,H0(r,i,a,u)}finally{qt.transition=d,xe=u}return null}function H0(r,i,a,u){do ji();while(dr!==null);if((_e&6)!==0)throw Error(n(327));a=r.finishedWork;var d=r.finishedLanes;if(a===null)return null;if(r.finishedWork=null,r.finishedLanes=0,a===r.current)throw Error(n(177));r.callbackNode=null,r.callbackPriority=0;var p=a.lanes|a.childLanes;if(IE(r,p),r===ot&&(Ye=ot=null,mt=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||Wa||(Wa=!0,Zm(Qo,function(){return ji(),null})),p=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||p){p=qt.transition,qt.transition=null;var g=xe;xe=1;var w=_e;_e|=4,Uc.current=null,U0(r,a),Um(a,r),d0(Ku),ra=!!qu,Ku=qu=null,r.current=a,z0(a),gE(),_e=w,xe=g,qt.transition=p}else r.current=a;if(Wa&&(Wa=!1,dr=r,Ba=d),p=r.pendingLanes,p===0&&(cr=null),vE(a.stateNode),Dt(r,Ge()),i!==null)for(u=r.onRecoverableError,a=0;a<i.length;a++)d=i[a],u(d.value,{componentStack:d.stack,digest:d.digest});if($a)throw $a=!1,r=Wc,Wc=null,r;return(Ba&1)!==0&&r.tag!==0&&ji(),p=r.pendingLanes,(p&1)!==0?r===Bc?eo++:(eo=0,Bc=r):eo=0,or(),null}function ji(){if(dr!==null){var r=Ff(Ba),i=qt.transition,a=xe;try{if(qt.transition=null,xe=16>r?16:r,dr===null)var u=!1;else{if(r=dr,dr=null,Ba=0,(_e&6)!==0)throw Error(n(331));var d=_e;for(_e|=4,G=r.current;G!==null;){var p=G,g=p.child;if((G.flags&16)!==0){var w=p.deletions;if(w!==null){for(var C=0;C<w.length;C++){var P=w[C];for(G=P;G!==null;){var M=G;switch(M.tag){case 0:case 11:case 15:Js(8,M,p)}var F=M.child;if(F!==null)F.return=M,G=F;else for(;G!==null;){M=G;var L=M.sibling,H=M.return;if(Om(M),M===P){G=null;break}if(L!==null){L.return=H,G=L;break}G=H}}}var K=p.alternate;if(K!==null){var Z=K.child;if(Z!==null){K.child=null;do{var qe=Z.sibling;Z.sibling=null,Z=qe}while(Z!==null)}}G=p}}if((p.subtreeFlags&2064)!==0&&g!==null)g.return=p,G=g;else e:for(;G!==null;){if(p=G,(p.flags&2048)!==0)switch(p.tag){case 0:case 11:case 15:Js(9,p,p.return)}var R=p.sibling;if(R!==null){R.return=p.return,G=R;break e}G=p.return}}var k=r.current;for(G=k;G!==null;){g=G;var b=g.child;if((g.subtreeFlags&2064)!==0&&b!==null)b.return=g,G=b;else e:for(g=k;G!==null;){if(w=G,(w.flags&2048)!==0)try{switch(w.tag){case 0:case 11:case 15:ja(9,w)}}catch(ee){We(w,w.return,ee)}if(w===g){G=null;break e}var $=w.sibling;if($!==null){$.return=w.return,G=$;break e}G=w.return}}if(_e=d,or(),gn&&typeof gn.onPostCommitFiberRoot=="function")try{gn.onPostCommitFiberRoot(Jo,r)}catch{}u=!0}return u}finally{xe=a,qt.transition=i}}return!1}function Qm(r,i,a){i=Oi(a,i),i=pm(r,i,1),r=lr(r,i,1),i=It(),r!==null&&(Ss(r,1,i),Dt(r,i))}function We(r,i,a){if(r.tag===3)Qm(r,r,a);else for(;i!==null;){if(i.tag===3){Qm(i,r,a);break}else if(i.tag===1){var u=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(cr===null||!cr.has(u))){r=Oi(a,r),r=mm(i,r,1),i=lr(i,r,1),r=It(),i!==null&&(Ss(i,1,r),Dt(i,r));break}}i=i.return}}function G0(r,i,a){var u=r.pingCache;u!==null&&u.delete(i),i=It(),r.pingedLanes|=r.suspendedLanes&a,ot===r&&(mt&a)===a&&(Xe===4||Xe===3&&(mt&130023424)===mt&&500>Ge()-$c?Gr(r,0):zc|=a),Dt(r,i)}function Jm(r,i){i===0&&((r.mode&1)===0?i=1:(i=Zo,Zo<<=1,(Zo&130023424)===0&&(Zo=4194304)));var a=It();r=An(r,i),r!==null&&(Ss(r,i,a),Dt(r,a))}function q0(r){var i=r.memoizedState,a=0;i!==null&&(a=i.retryLane),Jm(r,a)}function K0(r,i){var a=0;switch(r.tag){case 13:var u=r.stateNode,d=r.memoizedState;d!==null&&(a=d.retryLane);break;case 19:u=r.stateNode;break;default:throw Error(n(314))}u!==null&&u.delete(i),Jm(r,a)}var Xm;Xm=function(r,i,a){if(r!==null)if(r.memoizedProps!==i.pendingProps||bt.current)Pt=!0;else{if((r.lanes&a)===0&&(i.flags&128)===0)return Pt=!1,L0(r,i,a);Pt=(r.flags&131072)!==0}else Pt=!1,je&&(i.flags&1048576)!==0&&Pp(i,Ea,i.index);switch(i.lanes=0,i.tag){case 2:var u=i.type;Ma(r,i),r=i.pendingProps;var d=Ti(i,vt.current);Ai(i,a),d=_c(null,i,u,r,d,a);var p=vc();return i.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,Nt(u)?(p=!0,_a(i)):p=!1,i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,dc(i),d.updater=Oa,i.stateNode=d,d._reactInternals=i,Ic(i,u,r,a),i=bc(null,i,u,!0,p,a)):(i.tag=0,je&&p&&tc(i),St(null,i,d,a),i=i.child),i;case 16:u=i.elementType;e:{switch(Ma(r,i),r=i.pendingProps,d=u._init,u=d(u._payload),i.type=u,d=i.tag=Q0(u),r=nn(u,r),d){case 0:i=Rc(null,i,u,r,a);break e;case 1:i=Sm(null,i,u,r,a);break e;case 11:i=vm(null,i,u,r,a);break e;case 14:i=wm(null,i,u,nn(u.type,r),a);break e}throw Error(n(306,u,""))}return i;case 0:return u=i.type,d=i.pendingProps,d=i.elementType===u?d:nn(u,d),Rc(r,i,u,d,a);case 1:return u=i.type,d=i.pendingProps,d=i.elementType===u?d:nn(u,d),Sm(r,i,u,d,a);case 3:e:{if(Im(i),r===null)throw Error(n(387));u=i.pendingProps,p=i.memoizedState,d=p.element,zp(r,i),xa(i,u,null,a);var g=i.memoizedState;if(u=g.element,p.isDehydrated)if(p={element:u,isDehydrated:!1,cache:g.cache,pendingSuspenseBoundaries:g.pendingSuspenseBoundaries,transitions:g.transitions},i.updateQueue.baseState=p,i.memoizedState=p,i.flags&256){d=Oi(Error(n(423)),i),i=Tm(r,i,u,a,d);break e}else if(u!==d){d=Oi(Error(n(424)),i),i=Tm(r,i,u,a,d);break e}else for(zt=rr(i.stateNode.containerInfo.firstChild),Ut=i,je=!0,tn=null,a=jp(i,null,u,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(bi(),u===d){i=On(r,i,a);break e}St(r,i,u,a)}i=i.child}return i;case 5:return Bp(i),r===null&&ic(i),u=i.type,d=i.pendingProps,p=r!==null?r.memoizedProps:null,g=d.children,Yu(u,d)?g=null:p!==null&&Yu(u,p)&&(i.flags|=32),km(r,i),St(r,i,g,a),i.child;case 6:return r===null&&ic(i),null;case 13:return xm(r,i,a);case 4:return hc(i,i.stateNode.containerInfo),u=i.pendingProps,r===null?i.child=Ni(i,null,u,a):St(r,i,u,a),i.child;case 11:return u=i.type,d=i.pendingProps,d=i.elementType===u?d:nn(u,d),vm(r,i,u,d,a);case 7:return St(r,i,i.pendingProps,a),i.child;case 8:return St(r,i,i.pendingProps.children,a),i.child;case 12:return St(r,i,i.pendingProps.children,a),i.child;case 10:e:{if(u=i.type._context,d=i.pendingProps,p=i.memoizedProps,g=d.value,De(Sa,u._currentValue),u._currentValue=g,p!==null)if(en(p.value,g)){if(p.children===d.children&&!bt.current){i=On(r,i,a);break e}}else for(p=i.child,p!==null&&(p.return=i);p!==null;){var w=p.dependencies;if(w!==null){g=p.child;for(var C=w.firstContext;C!==null;){if(C.context===u){if(p.tag===1){C=Dn(-1,a&-a),C.tag=2;var P=p.updateQueue;if(P!==null){P=P.shared;var M=P.pending;M===null?C.next=C:(C.next=M.next,M.next=C),P.pending=C}}p.lanes|=a,C=p.alternate,C!==null&&(C.lanes|=a),uc(p.return,a,i),w.lanes|=a;break}C=C.next}}else if(p.tag===10)g=p.type===i.type?null:p.child;else if(p.tag===18){if(g=p.return,g===null)throw Error(n(341));g.lanes|=a,w=g.alternate,w!==null&&(w.lanes|=a),uc(g,a,i),g=p.sibling}else g=p.child;if(g!==null)g.return=p;else for(g=p;g!==null;){if(g===i){g=null;break}if(p=g.sibling,p!==null){p.return=g.return,g=p;break}g=g.return}p=g}St(r,i,d.children,a),i=i.child}return i;case 9:return d=i.type,u=i.pendingProps.children,Ai(i,a),d=Ht(d),u=u(d),i.flags|=1,St(r,i,u,a),i.child;case 14:return u=i.type,d=nn(u,i.pendingProps),d=nn(u.type,d),wm(r,i,u,d,a);case 15:return Em(r,i,i.type,i.pendingProps,a);case 17:return u=i.type,d=i.pendingProps,d=i.elementType===u?d:nn(u,d),Ma(r,i),i.tag=1,Nt(u)?(r=!0,_a(i)):r=!1,Ai(i,a),hm(i,u,d),Ic(i,u,d,a),bc(null,i,u,!0,r,a);case 19:return bm(r,i,a);case 22:return Cm(r,i,a)}throw Error(n(156,i.tag))};function Zm(r,i){return Af(r,i)}function Y0(r,i,a,u){this.tag=r,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Kt(r,i,a,u){return new Y0(r,i,a,u)}function Yc(r){return r=r.prototype,!(!r||!r.isReactComponent)}function Q0(r){if(typeof r=="function")return Yc(r)?1:0;if(r!=null){if(r=r.$$typeof,r===ht)return 11;if(r===Qe)return 14}return 2}function pr(r,i){var a=r.alternate;return a===null?(a=Kt(r.tag,i,r.key,r.mode),a.elementType=r.elementType,a.type=r.type,a.stateNode=r.stateNode,a.alternate=r,r.alternate=a):(a.pendingProps=i,a.type=r.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=r.flags&14680064,a.childLanes=r.childLanes,a.lanes=r.lanes,a.child=r.child,a.memoizedProps=r.memoizedProps,a.memoizedState=r.memoizedState,a.updateQueue=r.updateQueue,i=r.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=r.sibling,a.index=r.index,a.ref=r.ref,a}function qa(r,i,a,u,d,p){var g=2;if(u=r,typeof r=="function")Yc(r)&&(g=1);else if(typeof r=="string")g=5;else e:switch(r){case Re:return Kr(a.children,d,p,i);case J:g=8,d|=8;break;case Ce:return r=Kt(12,a,i,d|2),r.elementType=Ce,r.lanes=p,r;case rt:return r=Kt(13,a,i,d),r.elementType=rt,r.lanes=p,r;case ft:return r=Kt(19,a,i,d),r.elementType=ft,r.lanes=p,r;case ke:return Ka(a,d,p,i);default:if(typeof r=="object"&&r!==null)switch(r.$$typeof){case He:g=10;break e;case kt:g=9;break e;case ht:g=11;break e;case Qe:g=14;break e;case Pe:g=16,u=null;break e}throw Error(n(130,r==null?r:typeof r,""))}return i=Kt(g,a,i,d),i.elementType=r,i.type=u,i.lanes=p,i}function Kr(r,i,a,u){return r=Kt(7,r,u,i),r.lanes=a,r}function Ka(r,i,a,u){return r=Kt(22,r,u,i),r.elementType=ke,r.lanes=a,r.stateNode={isHidden:!1},r}function Qc(r,i,a){return r=Kt(6,r,null,i),r.lanes=a,r}function Jc(r,i,a){return i=Kt(4,r.children!==null?r.children:[],r.key,i),i.lanes=a,i.stateNode={containerInfo:r.containerInfo,pendingChildren:null,implementation:r.implementation},i}function J0(r,i,a,u,d){this.tag=i,this.containerInfo=r,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Su(0),this.expirationTimes=Su(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Su(0),this.identifierPrefix=u,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function Xc(r,i,a,u,d,p,g,w,C){return r=new J0(r,i,a,w,C),i===1?(i=1,p===!0&&(i|=8)):i=0,p=Kt(3,null,null,i),r.current=p,p.stateNode=r,p.memoizedState={element:u,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},dc(p),r}function X0(r,i,a){var u=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ee,key:u==null?null:""+u,children:r,containerInfo:i,implementation:a}}function eg(r){if(!r)return sr;r=r._reactInternals;e:{if(Mr(r)!==r||r.tag!==1)throw Error(n(170));var i=r;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(Nt(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(n(171))}if(r.tag===1){var a=r.type;if(Nt(a))return Rp(r,a,i)}return i}function tg(r,i,a,u,d,p,g,w,C){return r=Xc(a,u,!0,r,d,p,g,w,C),r.context=eg(null),a=r.current,u=It(),d=hr(a),p=Dn(u,d),p.callback=i??null,lr(a,p,d),r.current.lanes=d,Ss(r,d,u),Dt(r,u),r}function Ya(r,i,a,u){var d=i.current,p=It(),g=hr(d);return a=eg(a),i.context===null?i.context=a:i.pendingContext=a,i=Dn(p,g),i.payload={element:r},u=u===void 0?null:u,u!==null&&(i.callback=u),r=lr(d,i,g),r!==null&&(on(r,d,g,p),Ta(r,d,g)),g}function Qa(r){if(r=r.current,!r.child)return null;switch(r.child.tag){case 5:return r.child.stateNode;default:return r.child.stateNode}}function ng(r,i){if(r=r.memoizedState,r!==null&&r.dehydrated!==null){var a=r.retryLane;r.retryLane=a!==0&&a<i?a:i}}function Zc(r,i){ng(r,i),(r=r.alternate)&&ng(r,i)}function Z0(){return null}var rg=typeof reportError=="function"?reportError:function(r){console.error(r)};function ed(r){this._internalRoot=r}Ja.prototype.render=ed.prototype.render=function(r){var i=this._internalRoot;if(i===null)throw Error(n(409));Ya(r,i,null,null)},Ja.prototype.unmount=ed.prototype.unmount=function(){var r=this._internalRoot;if(r!==null){this._internalRoot=null;var i=r.containerInfo;Hr(function(){Ya(null,r,null,null)}),i[Rn]=null}};function Ja(r){this._internalRoot=r}Ja.prototype.unstable_scheduleHydration=function(r){if(r){var i=zf();r={blockedOn:null,target:r,priority:i};for(var a=0;a<er.length&&i!==0&&i<er[a].priority;a++);er.splice(a,0,r),a===0&&Bf(r)}};function td(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11)}function Xa(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11&&(r.nodeType!==8||r.nodeValue!==" react-mount-point-unstable "))}function ig(){}function eC(r,i,a,u,d){if(d){if(typeof u=="function"){var p=u;u=function(){var P=Qa(g);p.call(P)}}var g=tg(i,u,r,0,null,!1,!1,"",ig);return r._reactRootContainer=g,r[Rn]=g.current,js(r.nodeType===8?r.parentNode:r),Hr(),g}for(;d=r.lastChild;)r.removeChild(d);if(typeof u=="function"){var w=u;u=function(){var P=Qa(C);w.call(P)}}var C=Xc(r,0,!1,null,null,!1,!1,"",ig);return r._reactRootContainer=C,r[Rn]=C.current,js(r.nodeType===8?r.parentNode:r),Hr(function(){Ya(i,C,a,u)}),C}function Za(r,i,a,u,d){var p=a._reactRootContainer;if(p){var g=p;if(typeof d=="function"){var w=d;d=function(){var C=Qa(g);w.call(C)}}Ya(i,g,r,d)}else g=eC(a,i,r,d,u);return Qa(g)}jf=function(r){switch(r.tag){case 3:var i=r.stateNode;if(i.current.memoizedState.isDehydrated){var a=ks(i.pendingLanes);a!==0&&(Iu(i,a|1),Dt(i,Ge()),(_e&6)===0&&(Fi=Ge()+500,or()))}break;case 13:Hr(function(){var u=An(r,1);if(u!==null){var d=It();on(u,r,1,d)}}),Zc(r,1)}},Tu=function(r){if(r.tag===13){var i=An(r,134217728);if(i!==null){var a=It();on(i,r,134217728,a)}Zc(r,134217728)}},Uf=function(r){if(r.tag===13){var i=hr(r),a=An(r,i);if(a!==null){var u=It();on(a,r,i,u)}Zc(r,i)}},zf=function(){return xe},$f=function(r,i){var a=xe;try{return xe=r,i()}finally{xe=a}},_u=function(r,i,a){switch(i){case"input":if(ms(r,a),i=a.name,a.type==="radio"&&i!=null){for(a=r;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<a.length;i++){var u=a[i];if(u!==r&&u.form===r.form){var d=ga(u);if(!d)throw Error(n(90));Ke(u),ms(u,d)}}}break;case"textarea":it(r,a);break;case"select":i=a.value,i!=null&&Qn(r,!!a.multiple,i,!1)}},If=Gc,Tf=Hr;var tC={usingClientEntryPoint:!1,Events:[$s,Si,ga,kf,Sf,Gc]},to={findFiberByHostInstance:Fr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},nC={bundleType:to.bundleType,version:to.version,rendererPackageName:to.rendererPackageName,rendererConfig:to.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:q.ReactCurrentDispatcher,findHostInstanceByFiber:function(r){return r=Nf(r),r===null?null:r.stateNode},findFiberByHostInstance:to.findFiberByHostInstance||Z0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var el=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!el.isDisabled&&el.supportsFiber)try{Jo=el.inject(nC),gn=el}catch{}}return Ot.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=tC,Ot.createPortal=function(r,i){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!td(i))throw Error(n(200));return X0(r,i,null,a)},Ot.createRoot=function(r,i){if(!td(r))throw Error(n(299));var a=!1,u="",d=rg;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(u=i.identifierPrefix),i.onRecoverableError!==void 0&&(d=i.onRecoverableError)),i=Xc(r,1,!1,null,null,a,!1,u,d),r[Rn]=i.current,js(r.nodeType===8?r.parentNode:r),new ed(i)},Ot.findDOMNode=function(r){if(r==null)return null;if(r.nodeType===1)return r;var i=r._reactInternals;if(i===void 0)throw typeof r.render=="function"?Error(n(188)):(r=Object.keys(r).join(","),Error(n(268,r)));return r=Nf(i),r=r===null?null:r.stateNode,r},Ot.flushSync=function(r){return Hr(r)},Ot.hydrate=function(r,i,a){if(!Xa(i))throw Error(n(200));return Za(null,r,i,!0,a)},Ot.hydrateRoot=function(r,i,a){if(!td(r))throw Error(n(405));var u=a!=null&&a.hydratedSources||null,d=!1,p="",g=rg;if(a!=null&&(a.unstable_strictMode===!0&&(d=!0),a.identifierPrefix!==void 0&&(p=a.identifierPrefix),a.onRecoverableError!==void 0&&(g=a.onRecoverableError)),i=tg(i,null,r,1,a??null,d,!1,p,g),r[Rn]=i.current,js(r),u)for(r=0;r<u.length;r++)a=u[r],d=a._getVersion,d=d(a._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[a,d]:i.mutableSourceEagerHydrationData.push(a,d);return new Ja(i)},Ot.render=function(r,i,a){if(!Xa(i))throw Error(n(200));return Za(null,r,i,!1,a)},Ot.unmountComponentAtNode=function(r){if(!Xa(r))throw Error(n(40));return r._reactRootContainer?(Hr(function(){Za(null,null,r,!1,function(){r._reactRootContainer=null,r[Rn]=null})}),!0):!1},Ot.unstable_batchedUpdates=Gc,Ot.unstable_renderSubtreeIntoContainer=function(r,i,a,u){if(!Xa(a))throw Error(n(200));if(r==null||r._reactInternals===void 0)throw Error(n(38));return Za(r,i,a,!1,u)},Ot.version="18.3.1-next-f1338f8080-20240426",Ot}var hg;function dC(){if(hg)return id.exports;hg=1;function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(e){console.error(e)}}return t(),id.exports=cC(),id.exports}var fg;function hC(){if(fg)return tl;fg=1;var t=dC();return tl.createRoot=t.createRoot,tl.hydrateRoot=t.hydrateRoot,tl}var fC=hC();const pC=e_(fC),mC="modulepreload",gC=function(t){return"/DriveWay/"+t},pg={},_t=function(e,n,s){let o=Promise.resolve();if(n&&n.length>0){let c=function(m){return Promise.all(m.map(y=>Promise.resolve(y).then(_=>({status:"fulfilled",value:_}),_=>({status:"rejected",reason:_}))))};document.getElementsByTagName("link");const h=document.querySelector("meta[property=csp-nonce]"),f=(h==null?void 0:h.nonce)||(h==null?void 0:h.getAttribute("nonce"));o=c(n.map(m=>{if(m=gC(m),m in pg)return;pg[m]=!0;const y=m.endsWith(".css"),_=y?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${m}"]${_}`))return;const v=document.createElement("link");if(v.rel=y?"stylesheet":mC,y||(v.as="script"),v.crossOrigin="",v.href=m,f&&v.setAttribute("nonce",f),document.head.appendChild(v),y)return new Promise((S,N)=>{v.addEventListener("load",S),v.addEventListener("error",()=>N(new Error(`Unable to preload CSS for ${m}`)))})}))}function l(c){const h=new Event("vite:preloadError",{cancelable:!0});if(h.payload=c,window.dispatchEvent(h),!h.defaultPrevented)throw c}return o.then(c=>{for(const h of c||[])h.status==="rejected"&&l(h.reason);return e().catch(l)})};/**
 * react-router v7.9.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var mg="popstate";function yC(t={}){function e(s,o){let{pathname:l,search:c,hash:h}=s.location;return Rd("",{pathname:l,search:c,hash:h},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function n(s,o){return typeof o=="string"?o:Eo(o)}return vC(e,n,null,t)}function Ue(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Xt(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function _C(){return Math.random().toString(36).substring(2,10)}function gg(t,e){return{usr:t.state,key:t.key,idx:e}}function Rd(t,e,n=null,s){return{pathname:typeof t=="string"?t:t.pathname,search:"",hash:"",...typeof e=="string"?ns(e):e,state:n,key:e&&e.key||s||_C()}}function Eo({pathname:t="/",search:e="",hash:n=""}){return e&&e!=="?"&&(t+=e.charAt(0)==="?"?e:"?"+e),n&&n!=="#"&&(t+=n.charAt(0)==="#"?n:"#"+n),t}function ns(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substring(n),t=t.substring(0,n));let s=t.indexOf("?");s>=0&&(e.search=t.substring(s),t=t.substring(0,s)),t&&(e.pathname=t)}return e}function vC(t,e,n,s={}){let{window:o=document.defaultView,v5Compat:l=!1}=s,c=o.history,h="POP",f=null,m=y();m==null&&(m=0,c.replaceState({...c.state,idx:m},""));function y(){return(c.state||{idx:null}).idx}function _(){h="POP";let A=y(),z=A==null?null:A-m;m=A,f&&f({action:h,location:I.location,delta:z})}function v(A,z){h="PUSH";let X=Rd(I.location,A,z);m=y()+1;let U=gg(X,m),q=I.createHref(X);try{c.pushState(U,"",q)}catch(fe){if(fe instanceof DOMException&&fe.name==="DataCloneError")throw fe;o.location.assign(q)}l&&f&&f({action:h,location:I.location,delta:1})}function S(A,z){h="REPLACE";let X=Rd(I.location,A,z);m=y();let U=gg(X,m),q=I.createHref(X);c.replaceState(U,"",q),l&&f&&f({action:h,location:I.location,delta:0})}function N(A){return wC(A)}let I={get action(){return h},get location(){return t(o,c)},listen(A){if(f)throw new Error("A history only accepts one active listener");return o.addEventListener(mg,_),f=A,()=>{o.removeEventListener(mg,_),f=null}},createHref(A){return e(o,A)},createURL:N,encodeLocation(A){let z=N(A);return{pathname:z.pathname,search:z.search,hash:z.hash}},push:v,replace:S,go(A){return c.go(A)}};return I}function wC(t,e=!1){let n="http://localhost";typeof window<"u"&&(n=window.location.origin!=="null"?window.location.origin:window.location.href),Ue(n,"No window.location.(origin|href) available to create URL");let s=typeof t=="string"?t:Eo(t);return s=s.replace(/ $/,"%20"),!e&&s.startsWith("//")&&(s=n+s),new URL(s,n)}function t_(t,e,n="/"){return EC(t,e,n,!1)}function EC(t,e,n,s){let o=typeof e=="string"?ns(e):e,l=Vn(o.pathname||"/",n);if(l==null)return null;let c=n_(t);CC(c);let h=null;for(let f=0;h==null&&f<c.length;++f){let m=DC(l);h=PC(c[f],m,s)}return h}function n_(t,e=[],n=[],s="",o=!1){let l=(c,h,f=o,m)=>{let y={relativePath:m===void 0?c.path||"":m,caseSensitive:c.caseSensitive===!0,childrenIndex:h,route:c};if(y.relativePath.startsWith("/")){if(!y.relativePath.startsWith(s)&&f)return;Ue(y.relativePath.startsWith(s),`Absolute route path "${y.relativePath}" nested under path "${s}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),y.relativePath=y.relativePath.slice(s.length)}let _=$n([s,y.relativePath]),v=n.concat(y);c.children&&c.children.length>0&&(Ue(c.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${_}".`),n_(c.children,e,v,_,f)),!(c.path==null&&!c.index)&&e.push({path:_,score:bC(_,c.index),routesMeta:v})};return t.forEach((c,h)=>{var f;if(c.path===""||!((f=c.path)!=null&&f.includes("?")))l(c,h);else for(let m of r_(c.path))l(c,h,!0,m)}),e}function r_(t){let e=t.split("/");if(e.length===0)return[];let[n,...s]=e,o=n.endsWith("?"),l=n.replace(/\?$/,"");if(s.length===0)return o?[l,""]:[l];let c=r_(s.join("/")),h=[];return h.push(...c.map(f=>f===""?l:[l,f].join("/"))),o&&h.push(...c),h.map(f=>t.startsWith("/")&&f===""?"/":f)}function CC(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:NC(e.routesMeta.map(s=>s.childrenIndex),n.routesMeta.map(s=>s.childrenIndex)))}var kC=/^:[\w-]+$/,SC=3,IC=2,TC=1,xC=10,RC=-2,yg=t=>t==="*";function bC(t,e){let n=t.split("/"),s=n.length;return n.some(yg)&&(s+=RC),e&&(s+=IC),n.filter(o=>!yg(o)).reduce((o,l)=>o+(kC.test(l)?SC:l===""?TC:xC),s)}function NC(t,e){return t.length===e.length&&t.slice(0,-1).every((s,o)=>s===e[o])?t[t.length-1]-e[e.length-1]:0}function PC(t,e,n=!1){let{routesMeta:s}=t,o={},l="/",c=[];for(let h=0;h<s.length;++h){let f=s[h],m=h===s.length-1,y=l==="/"?e:e.slice(l.length)||"/",_=gl({path:f.relativePath,caseSensitive:f.caseSensitive,end:m},y),v=f.route;if(!_&&m&&n&&!s[s.length-1].route.index&&(_=gl({path:f.relativePath,caseSensitive:f.caseSensitive,end:!1},y)),!_)return null;Object.assign(o,_.params),c.push({params:o,pathname:$n([l,_.pathname]),pathnameBase:jC($n([l,_.pathnameBase])),route:v}),_.pathnameBase!=="/"&&(l=$n([l,_.pathnameBase]))}return c}function gl(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,s]=AC(t.path,t.caseSensitive,t.end),o=e.match(n);if(!o)return null;let l=o[0],c=l.replace(/(.)\/+$/,"$1"),h=o.slice(1);return{params:s.reduce((m,{paramName:y,isOptional:_},v)=>{if(y==="*"){let N=h[v]||"";c=l.slice(0,l.length-N.length).replace(/(.)\/+$/,"$1")}const S=h[v];return _&&!S?m[y]=void 0:m[y]=(S||"").replace(/%2F/g,"/"),m},{}),pathname:l,pathnameBase:c,pattern:t}}function AC(t,e=!1,n=!0){Xt(t==="*"||!t.endsWith("*")||t.endsWith("/*"),`Route path "${t}" will be treated as if it were "${t.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${t.replace(/\*$/,"/*")}".`);let s=[],o="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(c,h,f)=>(s.push({paramName:h,isOptional:f!=null}),f?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return t.endsWith("*")?(s.push({paramName:"*"}),o+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?o+="\\/*$":t!==""&&t!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,e?void 0:"i"),s]}function DC(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Xt(!1,`The URL path "${t}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),t}}function Vn(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,s=t.charAt(n);return s&&s!=="/"?null:t.slice(n)||"/"}var OC=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,LC=t=>OC.test(t);function MC(t,e="/"){let{pathname:n,search:s="",hash:o=""}=typeof t=="string"?ns(t):t,l;if(n)if(LC(n))l=n;else{if(n.includes("//")){let c=n;n=n.replace(/\/\/+/g,"/"),Xt(!1,`Pathnames cannot have embedded double slashes - normalizing ${c} -> ${n}`)}n.startsWith("/")?l=_g(n.substring(1),"/"):l=_g(n,e)}else l=e;return{pathname:l,search:UC(s),hash:zC(o)}}function _g(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(o=>{o===".."?n.length>1&&n.pop():o!=="."&&n.push(o)}),n.length>1?n.join("/"):"/"}function ad(t,e,n,s){return`Cannot include a '${t}' character in a manually specified \`to.${e}\` field [${JSON.stringify(s)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function FC(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function ih(t){let e=FC(t);return e.map((n,s)=>s===e.length-1?n.pathname:n.pathnameBase)}function sh(t,e,n,s=!1){let o;typeof t=="string"?o=ns(t):(o={...t},Ue(!o.pathname||!o.pathname.includes("?"),ad("?","pathname","search",o)),Ue(!o.pathname||!o.pathname.includes("#"),ad("#","pathname","hash",o)),Ue(!o.search||!o.search.includes("#"),ad("#","search","hash",o)));let l=t===""||o.pathname==="",c=l?"/":o.pathname,h;if(c==null)h=n;else{let _=e.length-1;if(!s&&c.startsWith("..")){let v=c.split("/");for(;v[0]==="..";)v.shift(),_-=1;o.pathname=v.join("/")}h=_>=0?e[_]:"/"}let f=MC(o,h),m=c&&c!=="/"&&c.endsWith("/"),y=(l||c===".")&&n.endsWith("/");return!f.pathname.endsWith("/")&&(m||y)&&(f.pathname+="/"),f}var $n=t=>t.join("/").replace(/\/\/+/g,"/"),jC=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),UC=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,zC=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function $C(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var i_=["POST","PUT","PATCH","DELETE"];new Set(i_);var WC=["GET",...i_];new Set(WC);var rs=x.createContext(null);rs.displayName="DataRouter";var Vl=x.createContext(null);Vl.displayName="DataRouterState";x.createContext(!1);var s_=x.createContext({isTransitioning:!1});s_.displayName="ViewTransition";var BC=x.createContext(new Map);BC.displayName="Fetchers";var VC=x.createContext(null);VC.displayName="Await";var pn=x.createContext(null);pn.displayName="Navigation";var Do=x.createContext(null);Do.displayName="Location";var mn=x.createContext({outlet:null,matches:[],isDataRoute:!1});mn.displayName="Route";var oh=x.createContext(null);oh.displayName="RouteError";function HC(t,{relative:e}={}){Ue(is(),"useHref() may be used only in the context of a <Router> component.");let{basename:n,navigator:s}=x.useContext(pn),{hash:o,pathname:l,search:c}=Oo(t,{relative:e}),h=l;return n!=="/"&&(h=l==="/"?n:$n([n,l])),s.createHref({pathname:h,search:c,hash:o})}function is(){return x.useContext(Do)!=null}function Kn(){return Ue(is(),"useLocation() may be used only in the context of a <Router> component."),x.useContext(Do).location}var o_="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function a_(t){x.useContext(pn).static||x.useLayoutEffect(t)}function Hl(){let{isDataRoute:t}=x.useContext(mn);return t?ik():GC()}function GC(){Ue(is(),"useNavigate() may be used only in the context of a <Router> component.");let t=x.useContext(rs),{basename:e,navigator:n}=x.useContext(pn),{matches:s}=x.useContext(mn),{pathname:o}=Kn(),l=JSON.stringify(ih(s)),c=x.useRef(!1);return a_(()=>{c.current=!0}),x.useCallback((f,m={})=>{if(Xt(c.current,o_),!c.current)return;if(typeof f=="number"){n.go(f);return}let y=sh(f,JSON.parse(l),o,m.relative==="path");t==null&&e!=="/"&&(y.pathname=y.pathname==="/"?e:$n([e,y.pathname])),(m.replace?n.replace:n.push)(y,m.state,m)},[e,n,l,o,t])}x.createContext(null);function PD(){let{matches:t}=x.useContext(mn),e=t[t.length-1];return e?e.params:{}}function Oo(t,{relative:e}={}){let{matches:n}=x.useContext(mn),{pathname:s}=Kn(),o=JSON.stringify(ih(n));return x.useMemo(()=>sh(t,JSON.parse(o),s,e==="path"),[t,o,s,e])}function qC(t,e){return l_(t,e)}function l_(t,e,n,s,o){var X;Ue(is(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:l}=x.useContext(pn),{matches:c}=x.useContext(mn),h=c[c.length-1],f=h?h.params:{},m=h?h.pathname:"/",y=h?h.pathnameBase:"/",_=h&&h.route;{let U=_&&_.path||"";u_(m,!_||U.endsWith("*")||U.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${m}" (under <Route path="${U}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${U}"> to <Route path="${U==="/"?"*":`${U}/*`}">.`)}let v=Kn(),S;if(e){let U=typeof e=="string"?ns(e):e;Ue(y==="/"||((X=U.pathname)==null?void 0:X.startsWith(y)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${y}" but pathname "${U.pathname}" was given in the \`location\` prop.`),S=U}else S=v;let N=S.pathname||"/",I=N;if(y!=="/"){let U=y.replace(/^\//,"").split("/");I="/"+N.replace(/^\//,"").split("/").slice(U.length).join("/")}let A=t_(t,{pathname:I});Xt(_||A!=null,`No routes matched location "${S.pathname}${S.search}${S.hash}" `),Xt(A==null||A[A.length-1].route.element!==void 0||A[A.length-1].route.Component!==void 0||A[A.length-1].route.lazy!==void 0,`Matched leaf route at location "${S.pathname}${S.search}${S.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let z=XC(A&&A.map(U=>Object.assign({},U,{params:Object.assign({},f,U.params),pathname:$n([y,l.encodeLocation?l.encodeLocation(U.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:U.pathname]),pathnameBase:U.pathnameBase==="/"?y:$n([y,l.encodeLocation?l.encodeLocation(U.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:U.pathnameBase])})),c,n,s,o);return e&&z?x.createElement(Do.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...S},navigationType:"POP"}},z):z}function KC(){let t=rk(),e=$C(t)?`${t.status} ${t.statusText}`:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,s="rgba(200,200,200, 0.5)",o={padding:"0.5rem",backgroundColor:s},l={padding:"2px 4px",backgroundColor:s},c=null;return console.error("Error handled by React Router default ErrorBoundary:",t),c=x.createElement(x.Fragment,null,x.createElement("p",null,"💿 Hey developer 👋"),x.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",x.createElement("code",{style:l},"ErrorBoundary")," or"," ",x.createElement("code",{style:l},"errorElement")," prop on your route.")),x.createElement(x.Fragment,null,x.createElement("h2",null,"Unexpected Application Error!"),x.createElement("h3",{style:{fontStyle:"italic"}},e),n?x.createElement("pre",{style:o},n):null,c)}var YC=x.createElement(KC,null),QC=class extends x.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,e){return e.location!==t.location||e.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:e.error,location:e.location,revalidation:t.revalidation||e.revalidation}}componentDidCatch(t,e){this.props.onError?this.props.onError(t,e):console.error("React Router caught the following error during render",t)}render(){return this.state.error!==void 0?x.createElement(mn.Provider,{value:this.props.routeContext},x.createElement(oh.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function JC({routeContext:t,match:e,children:n}){let s=x.useContext(rs);return s&&s.static&&s.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=e.route.id),x.createElement(mn.Provider,{value:t},n)}function XC(t,e=[],n=null,s=null,o=null){if(t==null){if(!n)return null;if(n.errors)t=n.matches;else if(e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let l=t,c=n==null?void 0:n.errors;if(c!=null){let y=l.findIndex(_=>_.route.id&&(c==null?void 0:c[_.route.id])!==void 0);Ue(y>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(c).join(",")}`),l=l.slice(0,Math.min(l.length,y+1))}let h=!1,f=-1;if(n)for(let y=0;y<l.length;y++){let _=l[y];if((_.route.HydrateFallback||_.route.hydrateFallbackElement)&&(f=y),_.route.id){let{loaderData:v,errors:S}=n,N=_.route.loader&&!v.hasOwnProperty(_.route.id)&&(!S||S[_.route.id]===void 0);if(_.route.lazy||N){h=!0,f>=0?l=l.slice(0,f+1):l=[l[0]];break}}}let m=n&&s?(y,_)=>{var v,S;s(y,{location:n.location,params:((S=(v=n.matches)==null?void 0:v[0])==null?void 0:S.params)??{},errorInfo:_})}:void 0;return l.reduceRight((y,_,v)=>{let S,N=!1,I=null,A=null;n&&(S=c&&_.route.id?c[_.route.id]:void 0,I=_.route.errorElement||YC,h&&(f<0&&v===0?(u_("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),N=!0,A=null):f===v&&(N=!0,A=_.route.hydrateFallbackElement||null)));let z=e.concat(l.slice(0,v+1)),X=()=>{let U;return S?U=I:N?U=A:_.route.Component?U=x.createElement(_.route.Component,null):_.route.element?U=_.route.element:U=y,x.createElement(JC,{match:_,routeContext:{outlet:y,matches:z,isDataRoute:n!=null},children:U})};return n&&(_.route.ErrorBoundary||_.route.errorElement||v===0)?x.createElement(QC,{location:n.location,revalidation:n.revalidation,component:I,error:S,children:X(),routeContext:{outlet:null,matches:z,isDataRoute:!0},onError:m}):X()},null)}function ah(t){return`${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function ZC(t){let e=x.useContext(rs);return Ue(e,ah(t)),e}function ek(t){let e=x.useContext(Vl);return Ue(e,ah(t)),e}function tk(t){let e=x.useContext(mn);return Ue(e,ah(t)),e}function lh(t){let e=tk(t),n=e.matches[e.matches.length-1];return Ue(n.route.id,`${t} can only be used on routes that contain a unique "id"`),n.route.id}function nk(){return lh("useRouteId")}function rk(){var s;let t=x.useContext(oh),e=ek("useRouteError"),n=lh("useRouteError");return t!==void 0?t:(s=e.errors)==null?void 0:s[n]}function ik(){let{router:t}=ZC("useNavigate"),e=lh("useNavigate"),n=x.useRef(!1);return a_(()=>{n.current=!0}),x.useCallback(async(o,l={})=>{Xt(n.current,o_),n.current&&(typeof o=="number"?t.navigate(o):await t.navigate(o,{fromRouteId:e,...l}))},[t,e])}var vg={};function u_(t,e,n){!e&&!vg[t]&&(vg[t]=!0,Xt(!1,n))}x.memo(sk);function sk({routes:t,future:e,state:n,unstable_onError:s}){return l_(t,void 0,n,s,e)}function ok({to:t,replace:e,state:n,relative:s}){Ue(is(),"<Navigate> may be used only in the context of a <Router> component.");let{static:o}=x.useContext(pn);Xt(!o,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:l}=x.useContext(mn),{pathname:c}=Kn(),h=Hl(),f=sh(t,ih(l),c,s==="path"),m=JSON.stringify(f);return x.useEffect(()=>{h(JSON.parse(m),{replace:e,state:n,relative:s})},[h,m,s,e,n]),null}function et(t){Ue(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function ak({basename:t="/",children:e=null,location:n,navigationType:s="POP",navigator:o,static:l=!1}){Ue(!is(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let c=t.replace(/^\/*/,"/"),h=x.useMemo(()=>({basename:c,navigator:o,static:l,future:{}}),[c,o,l]);typeof n=="string"&&(n=ns(n));let{pathname:f="/",search:m="",hash:y="",state:_=null,key:v="default"}=n,S=x.useMemo(()=>{let N=Vn(f,c);return N==null?null:{location:{pathname:N,search:m,hash:y,state:_,key:v},navigationType:s}},[c,f,m,y,_,v,s]);return Xt(S!=null,`<Router basename="${c}"> is not able to match the URL "${f}${m}${y}" because it does not start with the basename, so the <Router> won't render anything.`),S==null?null:x.createElement(pn.Provider,{value:h},x.createElement(Do.Provider,{children:e,value:S}))}function wg({children:t,location:e}){return qC(bd(t),e)}function bd(t,e=[]){let n=[];return x.Children.forEach(t,(s,o)=>{if(!x.isValidElement(s))return;let l=[...e,o];if(s.type===x.Fragment){n.push.apply(n,bd(s.props.children,l));return}Ue(s.type===et,`[${typeof s.type=="string"?s.type:s.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Ue(!s.props.index||!s.props.children,"An index route cannot have child routes.");let c={id:s.props.id||l.join("-"),caseSensitive:s.props.caseSensitive,element:s.props.element,Component:s.props.Component,index:s.props.index,path:s.props.path,middleware:s.props.middleware,loader:s.props.loader,action:s.props.action,hydrateFallbackElement:s.props.hydrateFallbackElement,HydrateFallback:s.props.HydrateFallback,errorElement:s.props.errorElement,ErrorBoundary:s.props.ErrorBoundary,hasErrorBoundary:s.props.hasErrorBoundary===!0||s.props.ErrorBoundary!=null||s.props.errorElement!=null,shouldRevalidate:s.props.shouldRevalidate,handle:s.props.handle,lazy:s.props.lazy};s.props.children&&(c.children=bd(s.props.children,l)),n.push(c)}),n}var ul="get",cl="application/x-www-form-urlencoded";function Gl(t){return t!=null&&typeof t.tagName=="string"}function lk(t){return Gl(t)&&t.tagName.toLowerCase()==="button"}function uk(t){return Gl(t)&&t.tagName.toLowerCase()==="form"}function ck(t){return Gl(t)&&t.tagName.toLowerCase()==="input"}function dk(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function hk(t,e){return t.button===0&&(!e||e==="_self")&&!dk(t)}var nl=null;function fk(){if(nl===null)try{new FormData(document.createElement("form"),0),nl=!1}catch{nl=!0}return nl}var pk=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function ld(t){return t!=null&&!pk.has(t)?(Xt(!1,`"${t}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${cl}"`),null):t}function mk(t,e){let n,s,o,l,c;if(uk(t)){let h=t.getAttribute("action");s=h?Vn(h,e):null,n=t.getAttribute("method")||ul,o=ld(t.getAttribute("enctype"))||cl,l=new FormData(t)}else if(lk(t)||ck(t)&&(t.type==="submit"||t.type==="image")){let h=t.form;if(h==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let f=t.getAttribute("formaction")||h.getAttribute("action");if(s=f?Vn(f,e):null,n=t.getAttribute("formmethod")||h.getAttribute("method")||ul,o=ld(t.getAttribute("formenctype"))||ld(h.getAttribute("enctype"))||cl,l=new FormData(h,t),!fk()){let{name:m,type:y,value:_}=t;if(y==="image"){let v=m?`${m}.`:"";l.append(`${v}x`,"0"),l.append(`${v}y`,"0")}else m&&l.append(m,_)}}else{if(Gl(t))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');n=ul,s=null,o=cl,c=t}return l&&o==="text/plain"&&(c=l,l=void 0),{action:s,method:n.toLowerCase(),encType:o,formData:l,body:c}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function uh(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function gk(t,e,n){let s=typeof t=="string"?new URL(t,typeof window>"u"?"server://singlefetch/":window.location.origin):t;return s.pathname==="/"?s.pathname=`_root.${n}`:e&&Vn(s.pathname,e)==="/"?s.pathname=`${e.replace(/\/$/,"")}/_root.${n}`:s.pathname=`${s.pathname.replace(/\/$/,"")}.${n}`,s}async function yk(t,e){if(t.id in e)return e[t.id];try{let n=await import(t.module);return e[t.id]=n,n}catch(n){return console.error(`Error loading route module \`${t.module}\`, reloading page...`),console.error(n),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function _k(t){return t==null?!1:t.href==null?t.rel==="preload"&&typeof t.imageSrcSet=="string"&&typeof t.imageSizes=="string":typeof t.rel=="string"&&typeof t.href=="string"}async function vk(t,e,n){let s=await Promise.all(t.map(async o=>{let l=e.routes[o.route.id];if(l){let c=await yk(l,n);return c.links?c.links():[]}return[]}));return kk(s.flat(1).filter(_k).filter(o=>o.rel==="stylesheet"||o.rel==="preload").map(o=>o.rel==="stylesheet"?{...o,rel:"prefetch",as:"style"}:{...o,rel:"prefetch"}))}function Eg(t,e,n,s,o,l){let c=(f,m)=>n[m]?f.route.id!==n[m].route.id:!0,h=(f,m)=>{var y;return n[m].pathname!==f.pathname||((y=n[m].route.path)==null?void 0:y.endsWith("*"))&&n[m].params["*"]!==f.params["*"]};return l==="assets"?e.filter((f,m)=>c(f,m)||h(f,m)):l==="data"?e.filter((f,m)=>{var _;let y=s.routes[f.route.id];if(!y||!y.hasLoader)return!1;if(c(f,m)||h(f,m))return!0;if(f.route.shouldRevalidate){let v=f.route.shouldRevalidate({currentUrl:new URL(o.pathname+o.search+o.hash,window.origin),currentParams:((_=n[0])==null?void 0:_.params)||{},nextUrl:new URL(t,window.origin),nextParams:f.params,defaultShouldRevalidate:!0});if(typeof v=="boolean")return v}return!0}):[]}function wk(t,e,{includeHydrateFallback:n}={}){return Ek(t.map(s=>{let o=e.routes[s.route.id];if(!o)return[];let l=[o.module];return o.clientActionModule&&(l=l.concat(o.clientActionModule)),o.clientLoaderModule&&(l=l.concat(o.clientLoaderModule)),n&&o.hydrateFallbackModule&&(l=l.concat(o.hydrateFallbackModule)),o.imports&&(l=l.concat(o.imports)),l}).flat(1))}function Ek(t){return[...new Set(t)]}function Ck(t){let e={},n=Object.keys(t).sort();for(let s of n)e[s]=t[s];return e}function kk(t,e){let n=new Set;return new Set(e),t.reduce((s,o)=>{let l=JSON.stringify(Ck(o));return n.has(l)||(n.add(l),s.push({key:l,link:o})),s},[])}function c_(){let t=x.useContext(rs);return uh(t,"You must render this element inside a <DataRouterContext.Provider> element"),t}function Sk(){let t=x.useContext(Vl);return uh(t,"You must render this element inside a <DataRouterStateContext.Provider> element"),t}var ch=x.createContext(void 0);ch.displayName="FrameworkContext";function d_(){let t=x.useContext(ch);return uh(t,"You must render this element inside a <HydratedRouter> element"),t}function Ik(t,e){let n=x.useContext(ch),[s,o]=x.useState(!1),[l,c]=x.useState(!1),{onFocus:h,onBlur:f,onMouseEnter:m,onMouseLeave:y,onTouchStart:_}=e,v=x.useRef(null);x.useEffect(()=>{if(t==="render"&&c(!0),t==="viewport"){let I=z=>{z.forEach(X=>{c(X.isIntersecting)})},A=new IntersectionObserver(I,{threshold:.5});return v.current&&A.observe(v.current),()=>{A.disconnect()}}},[t]),x.useEffect(()=>{if(s){let I=setTimeout(()=>{c(!0)},100);return()=>{clearTimeout(I)}}},[s]);let S=()=>{o(!0)},N=()=>{o(!1),c(!1)};return n?t!=="intent"?[l,v,{}]:[l,v,{onFocus:ro(h,S),onBlur:ro(f,N),onMouseEnter:ro(m,S),onMouseLeave:ro(y,N),onTouchStart:ro(_,S)}]:[!1,v,{}]}function ro(t,e){return n=>{t&&t(n),n.defaultPrevented||e(n)}}function Tk({page:t,...e}){let{router:n}=c_(),s=x.useMemo(()=>t_(n.routes,t,n.basename),[n.routes,t,n.basename]);return s?x.createElement(Rk,{page:t,matches:s,...e}):null}function xk(t){let{manifest:e,routeModules:n}=d_(),[s,o]=x.useState([]);return x.useEffect(()=>{let l=!1;return vk(t,e,n).then(c=>{l||o(c)}),()=>{l=!0}},[t,e,n]),s}function Rk({page:t,matches:e,...n}){let s=Kn(),{manifest:o,routeModules:l}=d_(),{basename:c}=c_(),{loaderData:h,matches:f}=Sk(),m=x.useMemo(()=>Eg(t,e,f,o,s,"data"),[t,e,f,o,s]),y=x.useMemo(()=>Eg(t,e,f,o,s,"assets"),[t,e,f,o,s]),_=x.useMemo(()=>{if(t===s.pathname+s.search+s.hash)return[];let N=new Set,I=!1;if(e.forEach(z=>{var U;let X=o.routes[z.route.id];!X||!X.hasLoader||(!m.some(q=>q.route.id===z.route.id)&&z.route.id in h&&((U=l[z.route.id])!=null&&U.shouldRevalidate)||X.hasClientLoader?I=!0:N.add(z.route.id))}),N.size===0)return[];let A=gk(t,c,"data");return I&&N.size>0&&A.searchParams.set("_routes",e.filter(z=>N.has(z.route.id)).map(z=>z.route.id).join(",")),[A.pathname+A.search]},[c,h,s,o,m,e,t,l]),v=x.useMemo(()=>wk(y,o),[y,o]),S=xk(y);return x.createElement(x.Fragment,null,_.map(N=>x.createElement("link",{key:N,rel:"prefetch",as:"fetch",href:N,...n})),v.map(N=>x.createElement("link",{key:N,rel:"modulepreload",href:N,...n})),S.map(({key:N,link:I})=>x.createElement("link",{key:N,nonce:n.nonce,...I})))}function bk(...t){return e=>{t.forEach(n=>{typeof n=="function"?n(e):n!=null&&(n.current=e)})}}var h_=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{h_&&(window.__reactRouterVersion="7.9.6")}catch{}function Nk({basename:t,children:e,window:n}){let s=x.useRef();s.current==null&&(s.current=yC({window:n,v5Compat:!0}));let o=s.current,[l,c]=x.useState({action:o.action,location:o.location}),h=x.useCallback(f=>{x.startTransition(()=>c(f))},[c]);return x.useLayoutEffect(()=>o.listen(h),[o,h]),x.createElement(ak,{basename:t,children:e,location:l.location,navigationType:l.action,navigator:o})}var f_=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,dh=x.forwardRef(function({onClick:e,discover:n="render",prefetch:s="none",relative:o,reloadDocument:l,replace:c,state:h,target:f,to:m,preventScrollReset:y,viewTransition:_,...v},S){let{basename:N}=x.useContext(pn),I=typeof m=="string"&&f_.test(m),A,z=!1;if(typeof m=="string"&&I&&(A=m,h_))try{let Ce=new URL(window.location.href),He=m.startsWith("//")?new URL(Ce.protocol+m):new URL(m),kt=Vn(He.pathname,N);He.origin===Ce.origin&&kt!=null?m=kt+He.search+He.hash:z=!0}catch{Xt(!1,`<Link to="${m}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let X=HC(m,{relative:o}),[U,q,fe]=Ik(s,v),Ee=Ok(m,{replace:c,state:h,target:f,preventScrollReset:y,relative:o,viewTransition:_});function Re(Ce){e&&e(Ce),Ce.defaultPrevented||Ee(Ce)}let J=x.createElement("a",{...v,...fe,href:A||X,onClick:z||l?e:Re,ref:bk(S,q),target:f,"data-discover":!I&&n==="render"?"true":void 0});return U&&!I?x.createElement(x.Fragment,null,J,x.createElement(Tk,{page:X})):J});dh.displayName="Link";var Pk=x.forwardRef(function({"aria-current":e="page",caseSensitive:n=!1,className:s="",end:o=!1,style:l,to:c,viewTransition:h,children:f,...m},y){let _=Oo(c,{relative:m.relative}),v=Kn(),S=x.useContext(Vl),{navigator:N,basename:I}=x.useContext(pn),A=S!=null&&Uk(_)&&h===!0,z=N.encodeLocation?N.encodeLocation(_).pathname:_.pathname,X=v.pathname,U=S&&S.navigation&&S.navigation.location?S.navigation.location.pathname:null;n||(X=X.toLowerCase(),U=U?U.toLowerCase():null,z=z.toLowerCase()),U&&I&&(U=Vn(U,I)||U);const q=z!=="/"&&z.endsWith("/")?z.length-1:z.length;let fe=X===z||!o&&X.startsWith(z)&&X.charAt(q)==="/",Ee=U!=null&&(U===z||!o&&U.startsWith(z)&&U.charAt(z.length)==="/"),Re={isActive:fe,isPending:Ee,isTransitioning:A},J=fe?e:void 0,Ce;typeof s=="function"?Ce=s(Re):Ce=[s,fe?"active":null,Ee?"pending":null,A?"transitioning":null].filter(Boolean).join(" ");let He=typeof l=="function"?l(Re):l;return x.createElement(dh,{...m,"aria-current":J,className:Ce,ref:y,style:He,to:c,viewTransition:h},typeof f=="function"?f(Re):f)});Pk.displayName="NavLink";var Ak=x.forwardRef(({discover:t="render",fetcherKey:e,navigate:n,reloadDocument:s,replace:o,state:l,method:c=ul,action:h,onSubmit:f,relative:m,preventScrollReset:y,viewTransition:_,...v},S)=>{let N=Fk(),I=jk(h,{relative:m}),A=c.toLowerCase()==="get"?"get":"post",z=typeof h=="string"&&f_.test(h),X=U=>{if(f&&f(U),U.defaultPrevented)return;U.preventDefault();let q=U.nativeEvent.submitter,fe=(q==null?void 0:q.getAttribute("formmethod"))||c;N(q||U.currentTarget,{fetcherKey:e,method:fe,navigate:n,replace:o,state:l,relative:m,preventScrollReset:y,viewTransition:_})};return x.createElement("form",{ref:S,method:A,action:I,onSubmit:s?f:X,...v,"data-discover":!z&&t==="render"?"true":void 0})});Ak.displayName="Form";function Dk(t){return`${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function p_(t){let e=x.useContext(rs);return Ue(e,Dk(t)),e}function Ok(t,{target:e,replace:n,state:s,preventScrollReset:o,relative:l,viewTransition:c}={}){let h=Hl(),f=Kn(),m=Oo(t,{relative:l});return x.useCallback(y=>{if(hk(y,e)){y.preventDefault();let _=n!==void 0?n:Eo(f)===Eo(m);h(t,{replace:_,state:s,preventScrollReset:o,relative:l,viewTransition:c})}},[f,h,m,n,s,e,t,o,l,c])}var Lk=0,Mk=()=>`__${String(++Lk)}__`;function Fk(){let{router:t}=p_("useSubmit"),{basename:e}=x.useContext(pn),n=nk();return x.useCallback(async(s,o={})=>{let{action:l,method:c,encType:h,formData:f,body:m}=mk(s,e);if(o.navigate===!1){let y=o.fetcherKey||Mk();await t.fetch(y,n,o.action||l,{preventScrollReset:o.preventScrollReset,formData:f,body:m,formMethod:o.method||c,formEncType:o.encType||h,flushSync:o.flushSync})}else await t.navigate(o.action||l,{preventScrollReset:o.preventScrollReset,formData:f,body:m,formMethod:o.method||c,formEncType:o.encType||h,replace:o.replace,state:o.state,fromRouteId:n,flushSync:o.flushSync,viewTransition:o.viewTransition})},[t,e,n])}function jk(t,{relative:e}={}){let{basename:n}=x.useContext(pn),s=x.useContext(mn);Ue(s,"useFormAction must be used inside a RouteContext");let[o]=s.matches.slice(-1),l={...Oo(t||".",{relative:e})},c=Kn();if(t==null){l.search=c.search;let h=new URLSearchParams(l.search),f=h.getAll("index");if(f.some(y=>y==="")){h.delete("index"),f.filter(_=>_).forEach(_=>h.append("index",_));let y=h.toString();l.search=y?`?${y}`:""}}return(!t||t===".")&&o.route.index&&(l.search=l.search?l.search.replace(/^\?/,"?index&"):"?index"),n!=="/"&&(l.pathname=l.pathname==="/"?n:$n([n,l.pathname])),Eo(l)}function Uk(t,{relative:e}={}){let n=x.useContext(s_);Ue(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:s}=p_("useViewTransitionState"),o=Oo(t,{relative:e});if(!n.isTransitioning)return!1;let l=Vn(n.currentLocation.pathname,s)||n.currentLocation.pathname,c=Vn(n.nextLocation.pathname,s)||n.nextLocation.pathname;return gl(o.pathname,c)!=null||gl(o.pathname,l)!=null}const zk=()=>{};var Cg={};/**
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
 */const m_={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const B=function(t,e){if(!t)throw ss(e)},ss=function(t){return new Error("Firebase Database ("+m_.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
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
 */const g_=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let o=t.charCodeAt(s);o<128?e[n++]=o:o<2048?(e[n++]=o>>6|192,e[n++]=o&63|128):(o&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(o=65536+((o&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=o>>18|240,e[n++]=o>>12&63|128,e[n++]=o>>6&63|128,e[n++]=o&63|128):(e[n++]=o>>12|224,e[n++]=o>>6&63|128,e[n++]=o&63|128)}return e},$k=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const o=t[n++];if(o<128)e[s++]=String.fromCharCode(o);else if(o>191&&o<224){const l=t[n++];e[s++]=String.fromCharCode((o&31)<<6|l&63)}else if(o>239&&o<365){const l=t[n++],c=t[n++],h=t[n++],f=((o&7)<<18|(l&63)<<12|(c&63)<<6|h&63)-65536;e[s++]=String.fromCharCode(55296+(f>>10)),e[s++]=String.fromCharCode(56320+(f&1023))}else{const l=t[n++],c=t[n++];e[s++]=String.fromCharCode((o&15)<<12|(l&63)<<6|c&63)}}return e.join("")},hh={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let o=0;o<t.length;o+=3){const l=t[o],c=o+1<t.length,h=c?t[o+1]:0,f=o+2<t.length,m=f?t[o+2]:0,y=l>>2,_=(l&3)<<4|h>>4;let v=(h&15)<<2|m>>6,S=m&63;f||(S=64,c||(v=64)),s.push(n[y],n[_],n[v],n[S])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(g_(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):$k(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let o=0;o<t.length;){const l=n[t.charAt(o++)],h=o<t.length?n[t.charAt(o)]:0;++o;const m=o<t.length?n[t.charAt(o)]:64;++o;const _=o<t.length?n[t.charAt(o)]:64;if(++o,l==null||h==null||m==null||_==null)throw new Wk;const v=l<<2|h>>4;if(s.push(v),m!==64){const S=h<<4&240|m>>2;if(s.push(S),_!==64){const N=m<<6&192|_;s.push(N)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Wk extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const y_=function(t){const e=g_(t);return hh.encodeByteArray(e,!0)},yl=function(t){return y_(t).replace(/\./g,"")},_l=function(t){try{return hh.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Bk(t){return __(void 0,t)}function __(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!Vk(n)||(t[n]=__(t[n],e[n]));return t}function Vk(t){return t!=="__proto__"}/**
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
 */function Hk(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Gk=()=>Hk().__FIREBASE_DEFAULTS__,qk=()=>{if(typeof process>"u"||typeof Cg>"u")return;const t=Cg.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Kk=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&_l(t[1]);return e&&JSON.parse(e)},fh=()=>{try{return zk()||Gk()||qk()||Kk()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},v_=t=>{var e,n;return(n=(e=fh())==null?void 0:e.emulatorHosts)==null?void 0:n[t]},Yk=t=>{const e=v_(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},w_=()=>{var t;return(t=fh())==null?void 0:t.config},E_=t=>{var e;return(e=fh())==null?void 0:e[`_${t}`]};/**
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
 */class Lo{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function os(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function C_(t){return(await fetch(t,{credentials:"include"})).ok}/**
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
 */function Qk(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",o=t.iat||0,l=t.sub||t.user_id;if(!l)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const c={iss:`https://securetoken.google.com/${s}`,aud:s,iat:o,exp:o+3600,auth_time:o,sub:l,user_id:l,firebase:{sign_in_provider:"custom",identities:{}},...t};return[yl(JSON.stringify(n)),yl(JSON.stringify(c)),""].join(".")}const po={};function Jk(){const t={prod:[],emulator:[]};for(const e of Object.keys(po))po[e]?t.emulator.push(e):t.prod.push(e);return t}function Xk(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let kg=!1;function k_(t,e){if(typeof window>"u"||typeof document>"u"||!os(window.location.host)||po[t]===e||po[t]||kg)return;po[t]=e;function n(v){return`__firebase__banner__${v}`}const s="__firebase__banner",l=Jk().prod.length>0;function c(){const v=document.getElementById(s);v&&v.remove()}function h(v){v.style.display="flex",v.style.background="#7faaf0",v.style.position="fixed",v.style.bottom="5px",v.style.left="5px",v.style.padding=".5em",v.style.borderRadius="5px",v.style.alignItems="center"}function f(v,S){v.setAttribute("width","24"),v.setAttribute("id",S),v.setAttribute("height","24"),v.setAttribute("viewBox","0 0 24 24"),v.setAttribute("fill","none"),v.style.marginLeft="-6px"}function m(){const v=document.createElement("span");return v.style.cursor="pointer",v.style.marginLeft="16px",v.style.fontSize="24px",v.innerHTML=" &times;",v.onclick=()=>{kg=!0,c()},v}function y(v,S){v.setAttribute("id",S),v.innerText="Learn more",v.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",v.setAttribute("target","__blank"),v.style.paddingLeft="5px",v.style.textDecoration="underline"}function _(){const v=Xk(s),S=n("text"),N=document.getElementById(S)||document.createElement("span"),I=n("learnmore"),A=document.getElementById(I)||document.createElement("a"),z=n("preprendIcon"),X=document.getElementById(z)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(v.created){const U=v.element;h(U),y(A,I);const q=m();f(X,z),U.append(X,N,A,q),document.body.appendChild(U)}l?(N.innerText="Preview backend disconnected.",X.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(X.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,N.innerText="Preview backend running in this workspace."),N.setAttribute("id",S)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",_):_()}/**
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
 */function Rt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function ph(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Rt())}function Zk(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function S_(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function I_(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function eS(){const t=Rt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function tS(){return m_.NODE_ADMIN===!0}function T_(){try{return typeof indexedDB=="object"}catch{return!1}}function x_(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(s);o.onsuccess=()=>{o.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},o.onupgradeneeded=()=>{n=!1},o.onerror=()=>{var l;e(((l=o.error)==null?void 0:l.message)||"")}}catch(n){e(n)}})}function nS(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const rS="FirebaseError";class In extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=rS,Object.setPrototypeOf(this,In.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ui.prototype.create)}}class ui{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},o=`${this.service}/${e}`,l=this.errors[e],c=l?iS(l,s):"Error",h=`${this.serviceName}: ${c} (${o}).`;return new In(o,h,s)}}function iS(t,e){return t.replace(sS,(n,s)=>{const o=e[s];return o!=null?String(o):`<${s}?>`})}const sS=/\{\$([^}]+)}/g;/**
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
 */function Co(t){return JSON.parse(t)}function dt(t){return JSON.stringify(t)}/**
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
 */const R_=function(t){let e={},n={},s={},o="";try{const l=t.split(".");e=Co(_l(l[0])||""),n=Co(_l(l[1])||""),o=l[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:o}},oS=function(t){const e=R_(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},aS=function(t){const e=R_(t).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function Tn(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Qi(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Nd(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function vl(t,e,n){const s={};for(const o in t)Object.prototype.hasOwnProperty.call(t,o)&&(s[o]=e.call(n,t[o],o,t));return s}function br(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const o of n){if(!s.includes(o))return!1;const l=t[o],c=e[o];if(Sg(l)&&Sg(c)){if(!br(l,c))return!1}else if(l!==c)return!1}for(const o of s)if(!n.includes(o))return!1;return!0}function Sg(t){return t!==null&&typeof t=="object"}/**
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
 */function as(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(o=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function ho(t){const e={};return t.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[o,l]=s.split("=");e[decodeURIComponent(o)]=decodeURIComponent(l)}}),e}function fo(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
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
 */class lS{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let _=0;_<16;_++)s[_]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let _=0;_<16;_++)s[_]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let _=16;_<80;_++){const v=s[_-3]^s[_-8]^s[_-14]^s[_-16];s[_]=(v<<1|v>>>31)&4294967295}let o=this.chain_[0],l=this.chain_[1],c=this.chain_[2],h=this.chain_[3],f=this.chain_[4],m,y;for(let _=0;_<80;_++){_<40?_<20?(m=h^l&(c^h),y=1518500249):(m=l^c^h,y=1859775393):_<60?(m=l&c|h&(l|c),y=2400959708):(m=l^c^h,y=3395469782);const v=(o<<5|o>>>27)+m+f+y+s[_]&4294967295;f=h,h=c,c=(l<<30|l>>>2)&4294967295,l=o,o=v}this.chain_[0]=this.chain_[0]+o&4294967295,this.chain_[1]=this.chain_[1]+l&4294967295,this.chain_[2]=this.chain_[2]+c&4294967295,this.chain_[3]=this.chain_[3]+h&4294967295,this.chain_[4]=this.chain_[4]+f&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let o=0;const l=this.buf_;let c=this.inbuf_;for(;o<n;){if(c===0)for(;o<=s;)this.compress_(e,o),o+=this.blockSize;if(typeof e=="string"){for(;o<n;)if(l[c]=e.charCodeAt(o),++c,++o,c===this.blockSize){this.compress_(l),c=0;break}}else for(;o<n;)if(l[c]=e[o],++c,++o,c===this.blockSize){this.compress_(l),c=0;break}}this.inbuf_=c,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let o=this.blockSize-1;o>=56;o--)this.buf_[o]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let o=0;o<5;o++)for(let l=24;l>=0;l-=8)e[s]=this.chain_[o]>>l&255,++s;return e}}function uS(t,e){const n=new cS(t,e);return n.subscribe.bind(n)}class cS{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let o;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");dS(e,["next","error","complete"])?o=e:o={next:e,error:n,complete:s},o.next===void 0&&(o.next=ud),o.error===void 0&&(o.error=ud),o.complete===void 0&&(o.complete=ud);const l=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),l}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function dS(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function ud(){}function ql(t,e){return`${t} failed: ${e} argument `}/**
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
 */const hS=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let o=t.charCodeAt(s);if(o>=55296&&o<=56319){const l=o-55296;s++,B(s<t.length,"Surrogate pair missing trail surrogate.");const c=t.charCodeAt(s)-56320;o=65536+(l<<10)+c}o<128?e[n++]=o:o<2048?(e[n++]=o>>6|192,e[n++]=o&63|128):o<65536?(e[n++]=o>>12|224,e[n++]=o>>6&63|128,e[n++]=o&63|128):(e[n++]=o>>18|240,e[n++]=o>>12&63|128,e[n++]=o>>6&63|128,e[n++]=o&63|128)}return e},Kl=function(t){let e=0;for(let n=0;n<t.length;n++){const s=t.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
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
 */const fS=1e3,pS=2,mS=14400*1e3,gS=.5;function Ig(t,e=fS,n=pS){const s=e*Math.pow(n,t),o=Math.round(gS*s*(Math.random()-.5)*2);return Math.min(mS,s+o)}/**
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
 */function tt(t){return t&&t._delegate?t._delegate:t}class dn{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Jr="[DEFAULT]";/**
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
 */class yS{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new Lo;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:n});o&&s.resolve(o)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(o){if(s)return null;throw o}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(vS(e))try{this.getOrInitializeService({instanceIdentifier:Jr})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(n);try{const l=this.getOrInitializeService({instanceIdentifier:o});s.resolve(l)}catch{}}}}clearInstance(e=Jr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Jr){return this.instances.has(e)}getOptions(e=Jr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[l,c]of this.instancesDeferred.entries()){const h=this.normalizeInstanceIdentifier(l);s===h&&c.resolve(o)}return o}onInit(e,n){const s=this.normalizeInstanceIdentifier(n),o=this.onInitCallbacks.get(s)??new Set;o.add(e),this.onInitCallbacks.set(s,o);const l=this.instances.get(s);return l&&e(l,s),()=>{o.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const o of s)try{o(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:_S(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Jr){return this.component?this.component.multipleInstances?e:Jr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function _S(t){return t===Jr?void 0:t}function vS(t){return t.instantiationMode==="EAGER"}/**
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
 */class wS{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new yS(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var be;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(be||(be={}));const ES={debug:be.DEBUG,verbose:be.VERBOSE,info:be.INFO,warn:be.WARN,error:be.ERROR,silent:be.SILENT},CS=be.INFO,kS={[be.DEBUG]:"log",[be.VERBOSE]:"log",[be.INFO]:"info",[be.WARN]:"warn",[be.ERROR]:"error"},SS=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),o=kS[e];if(o)console[o](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Yl{constructor(e){this.name=e,this._logLevel=CS,this._logHandler=SS,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in be))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?ES[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,be.DEBUG,...e),this._logHandler(this,be.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,be.VERBOSE,...e),this._logHandler(this,be.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,be.INFO,...e),this._logHandler(this,be.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,be.WARN,...e),this._logHandler(this,be.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,be.ERROR,...e),this._logHandler(this,be.ERROR,...e)}}const IS=(t,e)=>e.some(n=>t instanceof n);let Tg,xg;function TS(){return Tg||(Tg=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function xS(){return xg||(xg=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const b_=new WeakMap,Pd=new WeakMap,N_=new WeakMap,cd=new WeakMap,mh=new WeakMap;function RS(t){const e=new Promise((n,s)=>{const o=()=>{t.removeEventListener("success",l),t.removeEventListener("error",c)},l=()=>{n(Tr(t.result)),o()},c=()=>{s(t.error),o()};t.addEventListener("success",l),t.addEventListener("error",c)});return e.then(n=>{n instanceof IDBCursor&&b_.set(n,t)}).catch(()=>{}),mh.set(e,t),e}function bS(t){if(Pd.has(t))return;const e=new Promise((n,s)=>{const o=()=>{t.removeEventListener("complete",l),t.removeEventListener("error",c),t.removeEventListener("abort",c)},l=()=>{n(),o()},c=()=>{s(t.error||new DOMException("AbortError","AbortError")),o()};t.addEventListener("complete",l),t.addEventListener("error",c),t.addEventListener("abort",c)});Pd.set(t,e)}let Ad={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Pd.get(t);if(e==="objectStoreNames")return t.objectStoreNames||N_.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Tr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function NS(t){Ad=t(Ad)}function PS(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(dd(this),e,...n);return N_.set(s,e.sort?e.sort():[e]),Tr(s)}:xS().includes(t)?function(...e){return t.apply(dd(this),e),Tr(b_.get(this))}:function(...e){return Tr(t.apply(dd(this),e))}}function AS(t){return typeof t=="function"?PS(t):(t instanceof IDBTransaction&&bS(t),IS(t,TS())?new Proxy(t,Ad):t)}function Tr(t){if(t instanceof IDBRequest)return RS(t);if(cd.has(t))return cd.get(t);const e=AS(t);return e!==t&&(cd.set(t,e),mh.set(e,t)),e}const dd=t=>mh.get(t);function P_(t,e,{blocked:n,upgrade:s,blocking:o,terminated:l}={}){const c=indexedDB.open(t,e),h=Tr(c);return s&&c.addEventListener("upgradeneeded",f=>{s(Tr(c.result),f.oldVersion,f.newVersion,Tr(c.transaction),f)}),n&&c.addEventListener("blocked",f=>n(f.oldVersion,f.newVersion,f)),h.then(f=>{l&&f.addEventListener("close",()=>l()),o&&f.addEventListener("versionchange",m=>o(m.oldVersion,m.newVersion,m))}).catch(()=>{}),h}const DS=["get","getKey","getAll","getAllKeys","count"],OS=["put","add","delete","clear"],hd=new Map;function Rg(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(hd.get(e))return hd.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,o=OS.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(o||DS.includes(n)))return;const l=async function(c,...h){const f=this.transaction(c,o?"readwrite":"readonly");let m=f.store;return s&&(m=m.index(h.shift())),(await Promise.all([m[n](...h),o&&f.done]))[0]};return hd.set(e,l),l}NS(t=>({...t,get:(e,n,s)=>Rg(e,n)||t.get(e,n,s),has:(e,n)=>!!Rg(e,n)||t.has(e,n)}));/**
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
 */class LS{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(MS(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function MS(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Dd="@firebase/app",bg="0.14.6";/**
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
 */const Hn=new Yl("@firebase/app"),FS="@firebase/app-compat",jS="@firebase/analytics-compat",US="@firebase/analytics",zS="@firebase/app-check-compat",$S="@firebase/app-check",WS="@firebase/auth",BS="@firebase/auth-compat",VS="@firebase/database",HS="@firebase/data-connect",GS="@firebase/database-compat",qS="@firebase/functions",KS="@firebase/functions-compat",YS="@firebase/installations",QS="@firebase/installations-compat",JS="@firebase/messaging",XS="@firebase/messaging-compat",ZS="@firebase/performance",eI="@firebase/performance-compat",tI="@firebase/remote-config",nI="@firebase/remote-config-compat",rI="@firebase/storage",iI="@firebase/storage-compat",sI="@firebase/firestore",oI="@firebase/ai",aI="@firebase/firestore-compat",lI="firebase",uI="12.6.0";/**
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
 */const Od="[DEFAULT]",cI={[Dd]:"fire-core",[FS]:"fire-core-compat",[US]:"fire-analytics",[jS]:"fire-analytics-compat",[$S]:"fire-app-check",[zS]:"fire-app-check-compat",[WS]:"fire-auth",[BS]:"fire-auth-compat",[VS]:"fire-rtdb",[HS]:"fire-data-connect",[GS]:"fire-rtdb-compat",[qS]:"fire-fn",[KS]:"fire-fn-compat",[YS]:"fire-iid",[QS]:"fire-iid-compat",[JS]:"fire-fcm",[XS]:"fire-fcm-compat",[ZS]:"fire-perf",[eI]:"fire-perf-compat",[tI]:"fire-rc",[nI]:"fire-rc-compat",[rI]:"fire-gcs",[iI]:"fire-gcs-compat",[sI]:"fire-fst",[aI]:"fire-fst-compat",[oI]:"fire-vertex","fire-js":"fire-js",[lI]:"fire-js-all"};/**
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
 */const wl=new Map,dI=new Map,Ld=new Map;function Ng(t,e){try{t.container.addComponent(e)}catch(n){Hn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Sn(t){const e=t.name;if(Ld.has(e))return Hn.debug(`There were multiple attempts to register component ${e}.`),!1;Ld.set(e,t);for(const n of wl.values())Ng(n,t);for(const n of dI.values())Ng(n,t);return!0}function ci(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Yt(t){return t==null?!1:t.settings!==void 0}/**
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
 */const hI={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},xr=new ui("app","Firebase",hI);/**
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
 */class fI{constructor(e,n,s){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new dn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw xr.create("app-deleted",{appName:this._name})}}/**
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
 */const ls=uI;function A_(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s={name:Od,automaticDataCollectionEnabled:!0,...e},o=s.name;if(typeof o!="string"||!o)throw xr.create("bad-app-name",{appName:String(o)});if(n||(n=w_()),!n)throw xr.create("no-options");const l=wl.get(o);if(l){if(br(n,l.options)&&br(s,l.config))return l;throw xr.create("duplicate-app",{appName:o})}const c=new wS(o);for(const f of Ld.values())c.addComponent(f);const h=new fI(n,s,c);return wl.set(o,h),h}function gh(t=Od){const e=wl.get(t);if(!e&&t===Od&&w_())return A_();if(!e)throw xr.create("no-app",{appName:t});return e}function Jt(t,e,n){let s=cI[t]??t;n&&(s+=`-${n}`);const o=s.match(/\s|\//),l=e.match(/\s|\//);if(o||l){const c=[`Unable to register library "${s}" with version "${e}":`];o&&c.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&l&&c.push("and"),l&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Hn.warn(c.join(" "));return}Sn(new dn(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const pI="firebase-heartbeat-database",mI=1,ko="firebase-heartbeat-store";let fd=null;function D_(){return fd||(fd=P_(pI,mI,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(ko)}catch(n){console.warn(n)}}}}).catch(t=>{throw xr.create("idb-open",{originalErrorMessage:t.message})})),fd}async function gI(t){try{const n=(await D_()).transaction(ko),s=await n.objectStore(ko).get(O_(t));return await n.done,s}catch(e){if(e instanceof In)Hn.warn(e.message);else{const n=xr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Hn.warn(n.message)}}}async function Pg(t,e){try{const s=(await D_()).transaction(ko,"readwrite");await s.objectStore(ko).put(e,O_(t)),await s.done}catch(n){if(n instanceof In)Hn.warn(n.message);else{const s=xr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Hn.warn(s.message)}}}function O_(t){return`${t.name}!${t.options.appId}`}/**
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
 */const yI=1024,_I=30;class vI{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new EI(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,n;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),l=Ag();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===l||this._heartbeatsCache.heartbeats.some(c=>c.date===l))return;if(this._heartbeatsCache.heartbeats.push({date:l,agent:o}),this._heartbeatsCache.heartbeats.length>_I){const c=CI(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(c,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){Hn.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Ag(),{heartbeatsToSend:s,unsentEntries:o}=wI(this._heartbeatsCache.heartbeats),l=yl(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),l}catch(n){return Hn.warn(n),""}}}function Ag(){return new Date().toISOString().substring(0,10)}function wI(t,e=yI){const n=[];let s=t.slice();for(const o of t){const l=n.find(c=>c.agent===o.agent);if(l){if(l.dates.push(o.date),Dg(n)>e){l.dates.pop();break}}else if(n.push({agent:o.agent,dates:[o.date]}),Dg(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class EI{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return T_()?x_().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await gI(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return Pg(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return Pg(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Dg(t){return yl(JSON.stringify({version:2,heartbeats:t})).length}function CI(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let s=1;s<t.length;s++)t[s].date<n&&(n=t[s].date,e=s);return e}/**
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
 */function kI(t){Sn(new dn("platform-logger",e=>new LS(e),"PRIVATE")),Sn(new dn("heartbeat",e=>new vI(e),"PRIVATE")),Jt(Dd,bg,t),Jt(Dd,bg,"esm2020"),Jt("fire-js","")}kI("");var SI="firebase",II="12.6.0";/**
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
 */Jt(SI,II,"app");const L_="@firebase/installations",yh="0.6.19";/**
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
 */const M_=1e4,F_=`w:${yh}`,j_="FIS_v2",TI="https://firebaseinstallations.googleapis.com/v1",xI=3600*1e3,RI="installations",bI="Installations";/**
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
 */const NI={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},ti=new ui(RI,bI,NI);function U_(t){return t instanceof In&&t.code.includes("request-failed")}/**
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
 */function z_({projectId:t}){return`${TI}/projects/${t}/installations`}function $_(t){return{token:t.token,requestStatus:2,expiresIn:AI(t.expiresIn),creationTime:Date.now()}}async function W_(t,e){const s=(await e.json()).error;return ti.create("request-failed",{requestName:t,serverCode:s.code,serverMessage:s.message,serverStatus:s.status})}function B_({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function PI(t,{refreshToken:e}){const n=B_(t);return n.append("Authorization",DI(e)),n}async function V_(t){const e=await t();return e.status>=500&&e.status<600?t():e}function AI(t){return Number(t.replace("s","000"))}function DI(t){return`${j_} ${t}`}/**
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
 */async function OI({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const s=z_(t),o=B_(t),l=e.getImmediate({optional:!0});if(l){const m=await l.getHeartbeatsHeader();m&&o.append("x-firebase-client",m)}const c={fid:n,authVersion:j_,appId:t.appId,sdkVersion:F_},h={method:"POST",headers:o,body:JSON.stringify(c)},f=await V_(()=>fetch(s,h));if(f.ok){const m=await f.json();return{fid:m.fid||n,registrationStatus:2,refreshToken:m.refreshToken,authToken:$_(m.authToken)}}else throw await W_("Create Installation",f)}/**
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
 */function H_(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */function LI(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const MI=/^[cdef][\w-]{21}$/,Md="";function FI(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=jI(t);return MI.test(n)?n:Md}catch{return Md}}function jI(t){return LI(t).substr(0,22)}/**
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
 */function Ql(t){return`${t.appName}!${t.appId}`}/**
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
 */const G_=new Map;function q_(t,e){const n=Ql(t);K_(n,e),UI(n,e)}function K_(t,e){const n=G_.get(t);if(n)for(const s of n)s(e)}function UI(t,e){const n=zI();n&&n.postMessage({key:t,fid:e}),$I()}let Zr=null;function zI(){return!Zr&&"BroadcastChannel"in self&&(Zr=new BroadcastChannel("[Firebase] FID Change"),Zr.onmessage=t=>{K_(t.data.key,t.data.fid)}),Zr}function $I(){G_.size===0&&Zr&&(Zr.close(),Zr=null)}/**
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
 */const WI="firebase-installations-database",BI=1,ni="firebase-installations-store";let pd=null;function _h(){return pd||(pd=P_(WI,BI,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(ni)}}})),pd}async function El(t,e){const n=Ql(t),o=(await _h()).transaction(ni,"readwrite"),l=o.objectStore(ni),c=await l.get(n);return await l.put(e,n),await o.done,(!c||c.fid!==e.fid)&&q_(t,e.fid),e}async function Y_(t){const e=Ql(t),s=(await _h()).transaction(ni,"readwrite");await s.objectStore(ni).delete(e),await s.done}async function Jl(t,e){const n=Ql(t),o=(await _h()).transaction(ni,"readwrite"),l=o.objectStore(ni),c=await l.get(n),h=e(c);return h===void 0?await l.delete(n):await l.put(h,n),await o.done,h&&(!c||c.fid!==h.fid)&&q_(t,h.fid),h}/**
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
 */async function vh(t){let e;const n=await Jl(t.appConfig,s=>{const o=VI(s),l=HI(t,o);return e=l.registrationPromise,l.installationEntry});return n.fid===Md?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function VI(t){const e=t||{fid:FI(),registrationStatus:0};return Q_(e)}function HI(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const o=Promise.reject(ti.create("app-offline"));return{installationEntry:e,registrationPromise:o}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},s=GI(t,n);return{installationEntry:n,registrationPromise:s}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:qI(t)}:{installationEntry:e}}async function GI(t,e){try{const n=await OI(t,e);return El(t.appConfig,n)}catch(n){throw U_(n)&&n.customData.serverCode===409?await Y_(t.appConfig):await El(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function qI(t){let e=await Og(t.appConfig);for(;e.registrationStatus===1;)await H_(100),e=await Og(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:s}=await vh(t);return s||n}return e}function Og(t){return Jl(t,e=>{if(!e)throw ti.create("installation-not-found");return Q_(e)})}function Q_(t){return KI(t)?{fid:t.fid,registrationStatus:0}:t}function KI(t){return t.registrationStatus===1&&t.registrationTime+M_<Date.now()}/**
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
 */async function YI({appConfig:t,heartbeatServiceProvider:e},n){const s=QI(t,n),o=PI(t,n),l=e.getImmediate({optional:!0});if(l){const m=await l.getHeartbeatsHeader();m&&o.append("x-firebase-client",m)}const c={installation:{sdkVersion:F_,appId:t.appId}},h={method:"POST",headers:o,body:JSON.stringify(c)},f=await V_(()=>fetch(s,h));if(f.ok){const m=await f.json();return $_(m)}else throw await W_("Generate Auth Token",f)}function QI(t,{fid:e}){return`${z_(t)}/${e}/authTokens:generate`}/**
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
 */async function wh(t,e=!1){let n;const s=await Jl(t.appConfig,l=>{if(!J_(l))throw ti.create("not-registered");const c=l.authToken;if(!e&&ZI(c))return l;if(c.requestStatus===1)return n=JI(t,e),l;{if(!navigator.onLine)throw ti.create("app-offline");const h=t1(l);return n=XI(t,h),h}});return n?await n:s.authToken}async function JI(t,e){let n=await Lg(t.appConfig);for(;n.authToken.requestStatus===1;)await H_(100),n=await Lg(t.appConfig);const s=n.authToken;return s.requestStatus===0?wh(t,e):s}function Lg(t){return Jl(t,e=>{if(!J_(e))throw ti.create("not-registered");const n=e.authToken;return n1(n)?{...e,authToken:{requestStatus:0}}:e})}async function XI(t,e){try{const n=await YI(t,e),s={...e,authToken:n};return await El(t.appConfig,s),n}catch(n){if(U_(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await Y_(t.appConfig);else{const s={...e,authToken:{requestStatus:0}};await El(t.appConfig,s)}throw n}}function J_(t){return t!==void 0&&t.registrationStatus===2}function ZI(t){return t.requestStatus===2&&!e1(t)}function e1(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+xI}function t1(t){const e={requestStatus:1,requestTime:Date.now()};return{...t,authToken:e}}function n1(t){return t.requestStatus===1&&t.requestTime+M_<Date.now()}/**
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
 */async function r1(t){const e=t,{installationEntry:n,registrationPromise:s}=await vh(e);return s?s.catch(console.error):wh(e).catch(console.error),n.fid}/**
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
 */async function i1(t,e=!1){const n=t;return await s1(n),(await wh(n,e)).token}async function s1(t){const{registrationPromise:e}=await vh(t);e&&await e}/**
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
 */function o1(t){if(!t||!t.options)throw md("App Configuration");if(!t.name)throw md("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw md(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function md(t){return ti.create("missing-app-config-values",{valueName:t})}/**
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
 */const X_="installations",a1="installations-internal",l1=t=>{const e=t.getProvider("app").getImmediate(),n=o1(e),s=ci(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:s,_delete:()=>Promise.resolve()}},u1=t=>{const e=t.getProvider("app").getImmediate(),n=ci(e,X_).getImmediate();return{getId:()=>r1(n),getToken:o=>i1(n,o)}};function c1(){Sn(new dn(X_,l1,"PUBLIC")),Sn(new dn(a1,u1,"PRIVATE"))}c1();Jt(L_,yh);Jt(L_,yh,"esm2020");/**
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
 */const Cl="analytics",d1="firebase_id",h1="origin",f1=60*1e3,p1="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Eh="https://www.googletagmanager.com/gtag/js";/**
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
 */const Tt=new Yl("@firebase/analytics");/**
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
 */const m1={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Wt=new ui("analytics","Analytics",m1);/**
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
 */function g1(t){if(!t.startsWith(Eh)){const e=Wt.create("invalid-gtag-resource",{gtagURL:t});return Tt.warn(e.message),""}return t}function Z_(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function y1(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function _1(t,e){const n=y1("firebase-js-sdk-policy",{createScriptURL:g1}),s=document.createElement("script"),o=`${Eh}?l=${t}&id=${e}`;s.src=n?n==null?void 0:n.createScriptURL(o):o,s.async=!0,document.head.appendChild(s)}function v1(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function w1(t,e,n,s,o,l){const c=s[o];try{if(c)await e[c];else{const f=(await Z_(n)).find(m=>m.measurementId===o);f&&await e[f.appId]}}catch(h){Tt.error(h)}t("config",o,l)}async function E1(t,e,n,s,o){try{let l=[];if(o&&o.send_to){let c=o.send_to;Array.isArray(c)||(c=[c]);const h=await Z_(n);for(const f of c){const m=h.find(_=>_.measurementId===f),y=m&&e[m.appId];if(y)l.push(y);else{l=[];break}}}l.length===0&&(l=Object.values(e)),await Promise.all(l),t("event",s,o||{})}catch(l){Tt.error(l)}}function C1(t,e,n,s){async function o(l,...c){try{if(l==="event"){const[h,f]=c;await E1(t,e,n,h,f)}else if(l==="config"){const[h,f]=c;await w1(t,e,n,s,h,f)}else if(l==="consent"){const[h,f]=c;t("consent",h,f)}else if(l==="get"){const[h,f,m]=c;t("get",h,f,m)}else if(l==="set"){const[h]=c;t("set",h)}else t(l,...c)}catch(h){Tt.error(h)}}return o}function k1(t,e,n,s,o){let l=function(...c){window[s].push(arguments)};return window[o]&&typeof window[o]=="function"&&(l=window[o]),window[o]=C1(l,t,e,n),{gtagCore:l,wrappedGtag:window[o]}}function S1(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(Eh)&&n.src.includes(t))return n;return null}/**
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
 */const I1=30,T1=1e3;class x1{constructor(e={},n=T1){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const ev=new x1;function R1(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function b1(t){var c;const{appId:e,apiKey:n}=t,s={method:"GET",headers:R1(n)},o=p1.replace("{app-id}",e),l=await fetch(o,s);if(l.status!==200&&l.status!==304){let h="";try{const f=await l.json();(c=f.error)!=null&&c.message&&(h=f.error.message)}catch{}throw Wt.create("config-fetch-failed",{httpStatus:l.status,responseMessage:h})}return l.json()}async function N1(t,e=ev,n){const{appId:s,apiKey:o,measurementId:l}=t.options;if(!s)throw Wt.create("no-app-id");if(!o){if(l)return{measurementId:l,appId:s};throw Wt.create("no-api-key")}const c=e.getThrottleMetadata(s)||{backoffCount:0,throttleEndTimeMillis:Date.now()},h=new D1;return setTimeout(async()=>{h.abort()},f1),tv({appId:s,apiKey:o,measurementId:l},c,h,e)}async function tv(t,{throttleEndTimeMillis:e,backoffCount:n},s,o=ev){var h;const{appId:l,measurementId:c}=t;try{await P1(s,e)}catch(f){if(c)return Tt.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${c} provided in the "measurementId" field in the local Firebase config. [${f==null?void 0:f.message}]`),{appId:l,measurementId:c};throw f}try{const f=await b1(t);return o.deleteThrottleMetadata(l),f}catch(f){const m=f;if(!A1(m)){if(o.deleteThrottleMetadata(l),c)return Tt.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${c} provided in the "measurementId" field in the local Firebase config. [${m==null?void 0:m.message}]`),{appId:l,measurementId:c};throw f}const y=Number((h=m==null?void 0:m.customData)==null?void 0:h.httpStatus)===503?Ig(n,o.intervalMillis,I1):Ig(n,o.intervalMillis),_={throttleEndTimeMillis:Date.now()+y,backoffCount:n+1};return o.setThrottleMetadata(l,_),Tt.debug(`Calling attemptFetch again in ${y} millis`),tv(t,_,s,o)}}function P1(t,e){return new Promise((n,s)=>{const o=Math.max(e-Date.now(),0),l=setTimeout(n,o);t.addEventListener(()=>{clearTimeout(l),s(Wt.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function A1(t){if(!(t instanceof In)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class D1{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function O1(t,e,n,s,o){if(o&&o.global){t("event",n,s);return}else{const l=await e,c={...s,send_to:l};t("event",n,c)}}async function L1(t,e,n,s){if(s&&s.global){const o={};for(const l of Object.keys(n))o[`user_properties.${l}`]=n[l];return t("set",o),Promise.resolve()}else{const o=await e;t("config",o,{update:!0,user_properties:n})}}/**
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
 */async function M1(){if(T_())try{await x_()}catch(t){return Tt.warn(Wt.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return Tt.warn(Wt.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function F1(t,e,n,s,o,l,c){const h=N1(t);h.then(v=>{n[v.measurementId]=v.appId,t.options.measurementId&&v.measurementId!==t.options.measurementId&&Tt.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${v.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(v=>Tt.error(v)),e.push(h);const f=M1().then(v=>{if(v)return s.getId()}),[m,y]=await Promise.all([h,f]);S1(l)||_1(l,m.measurementId),o("js",new Date);const _=(c==null?void 0:c.config)??{};return _[h1]="firebase",_.update=!0,y!=null&&(_[d1]=y),o("config",m.measurementId,_),m.measurementId}/**
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
 */class j1{constructor(e){this.app=e}_delete(){return delete Bi[this.app.options.appId],Promise.resolve()}}let Bi={},Mg=[];const Fg={};let gd="dataLayer",U1="gtag",jg,Ch,Ug=!1;function z1(){const t=[];if(S_()&&t.push("This is a browser extension environment."),nS()||t.push("Cookies are not available."),t.length>0){const e=t.map((s,o)=>`(${o+1}) ${s}`).join(" "),n=Wt.create("invalid-analytics-context",{errorInfo:e});Tt.warn(n.message)}}function $1(t,e,n){z1();const s=t.options.appId;if(!s)throw Wt.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)Tt.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Wt.create("no-api-key");if(Bi[s]!=null)throw Wt.create("already-exists",{id:s});if(!Ug){v1(gd);const{wrappedGtag:l,gtagCore:c}=k1(Bi,Mg,Fg,gd,U1);Ch=l,jg=c,Ug=!0}return Bi[s]=F1(t,Mg,Fg,e,jg,gd,n),new j1(t)}function W1(t=gh()){t=tt(t);const e=ci(t,Cl);return e.isInitialized()?e.getImmediate():B1(t)}function B1(t,e={}){const n=ci(t,Cl);if(n.isInitialized()){const o=n.getImmediate();if(br(e,n.getOptions()))return o;throw Wt.create("already-initialized")}return n.initialize({options:e})}function V1(t,e,n){t=tt(t),L1(Ch,Bi[t.app.options.appId],e,n).catch(s=>Tt.error(s))}function H1(t,e,n,s){t=tt(t),O1(Ch,Bi[t.app.options.appId],e,n,s).catch(o=>Tt.error(o))}const zg="@firebase/analytics",$g="0.10.19";function G1(){Sn(new dn(Cl,(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),o=e.getProvider("installations-internal").getImmediate();return $1(s,o,n)},"PUBLIC")),Sn(new dn("analytics-internal",t,"PRIVATE")),Jt(zg,$g),Jt(zg,$g,"esm2020");function t(e){try{const n=e.getProvider(Cl).getImmediate();return{logEvent:(s,o,l)=>H1(n,s,o,l),setUserProperties:(s,o)=>V1(n,s,o)}}catch(n){throw Wt.create("interop-component-reg-failed",{reason:n})}}}G1();var Wg={};const Bg="@firebase/database",Vg="1.1.0";/**
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
 */let nv="";function q1(t){nv=t}/**
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
 */class K1{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),dt(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Co(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class Y1{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Tn(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const rv=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new K1(e)}}catch{}return new Y1},ei=rv("localStorage"),Q1=rv("sessionStorage");/**
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
 */const Vi=new Yl("@firebase/database"),J1=(function(){let t=1;return function(){return t++}})(),iv=function(t){const e=hS(t),n=new lS;n.update(e);const s=n.digest();return hh.encodeByteArray(s)},Mo=function(...t){let e="";for(let n=0;n<t.length;n++){const s=t[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=Mo.apply(null,s):typeof s=="object"?e+=dt(s):e+=s,e+=" "}return e};let mo=null,Hg=!0;const X1=function(t,e){B(!0,"Can't turn on custom loggers persistently."),Vi.logLevel=be.VERBOSE,mo=Vi.log.bind(Vi)},gt=function(...t){if(Hg===!0&&(Hg=!1,mo===null&&Q1.get("logging_enabled")===!0&&X1()),mo){const e=Mo.apply(null,t);mo(e)}},Fo=function(t){return function(...e){gt(t,...e)}},Fd=function(...t){const e="FIREBASE INTERNAL ERROR: "+Mo(...t);Vi.error(e)},Gn=function(...t){const e=`FIREBASE FATAL ERROR: ${Mo(...t)}`;throw Vi.error(e),new Error(e)},xt=function(...t){const e="FIREBASE WARNING: "+Mo(...t);Vi.warn(e)},Z1=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&xt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},kh=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},eT=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Ji="[MIN_NAME]",ri="[MAX_NAME]",di=function(t,e){if(t===e)return 0;if(t===Ji||e===ri)return-1;if(e===Ji||t===ri)return 1;{const n=Gg(t),s=Gg(e);return n!==null?s!==null?n-s===0?t.length-e.length:n-s:-1:s!==null?1:t<e?-1:1}},tT=function(t,e){return t===e?0:t<e?-1:1},io=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+dt(e))},Sh=function(t){if(typeof t!="object"||t===null)return dt(t);const e=[];for(const s in t)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=dt(e[s]),n+=":",n+=Sh(t[e[s]]);return n+="}",n},sv=function(t,e){const n=t.length;if(n<=e)return[t];const s=[];for(let o=0;o<n;o+=e)o+e>n?s.push(t.substring(o,n)):s.push(t.substring(o,o+e));return s};function yt(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const ov=function(t){B(!kh(t),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let o,l,c,h,f;t===0?(l=0,c=0,o=1/t===-1/0?1:0):(o=t<0,t=Math.abs(t),t>=Math.pow(2,1-s)?(h=Math.min(Math.floor(Math.log(t)/Math.LN2),s),l=h+s,c=Math.round(t*Math.pow(2,n-h)-Math.pow(2,n))):(l=0,c=Math.round(t/Math.pow(2,1-s-n))));const m=[];for(f=n;f;f-=1)m.push(c%2?1:0),c=Math.floor(c/2);for(f=e;f;f-=1)m.push(l%2?1:0),l=Math.floor(l/2);m.push(o?1:0),m.reverse();const y=m.join("");let _="";for(f=0;f<64;f+=8){let v=parseInt(y.substr(f,8),2).toString(16);v.length===1&&(v="0"+v),_=_+v}return _.toLowerCase()},nT=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},rT=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function iT(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const s=new Error(t+" at "+e._path.toString()+": "+n);return s.code=t.toUpperCase(),s}const sT=new RegExp("^-?(0*)\\d{1,10}$"),oT=-2147483648,aT=2147483647,Gg=function(t){if(sT.test(t)){const e=Number(t);if(e>=oT&&e<=aT)return e}return null},us=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw xt("Exception was thrown by user callback.",n),e},Math.floor(0))}},lT=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},go=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class uT{constructor(e,n){this.appCheckProvider=n,this.appName=e.name,Yt(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)==null||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){xt(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class cT{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(o=>this.auth_=o)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(gt("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',xt(e)}}class dl{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}dl.OWNER="owner";/**
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
 */const Ih="5",av="v",lv="s",uv="r",cv="f",dv=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,hv="ls",fv="p",jd="ac",pv="websocket",mv="long_polling";/**
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
 */class gv{constructor(e,n,s,o,l=!1,c="",h=!1,f=!1,m=null){this.secure=n,this.namespace=s,this.webSocketOnly=o,this.nodeAdmin=l,this.persistenceKey=c,this.includeNamespaceInQueryParams=h,this.isUsingEmulator=f,this.emulatorOptions=m,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=ei.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&ei.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function dT(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function yv(t,e,n){B(typeof e=="string","typeof type must == string"),B(typeof n=="object","typeof params must == object");let s;if(e===pv)s=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===mv)s=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);dT(t)&&(n.ns=t.namespace);const o=[];return yt(n,(l,c)=>{o.push(l+"="+c)}),s+o.join("&")}/**
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
 */class hT{constructor(){this.counters_={}}incrementCounter(e,n=1){Tn(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return Bk(this.counters_)}}/**
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
 */const yd={},_d={};function Th(t){const e=t.toString();return yd[e]||(yd[e]=new hT),yd[e]}function fT(t,e){const n=t.toString();return _d[n]||(_d[n]=e()),_d[n]}/**
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
 */class pT{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let o=0;o<s.length;++o)s[o]&&us(()=>{this.onMessage_(s[o])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const qg="start",mT="close",gT="pLPCommand",yT="pRTLPCB",_v="id",vv="pw",wv="ser",_T="cb",vT="seg",wT="ts",ET="d",CT="dframe",Ev=1870,Cv=30,kT=Ev-Cv,ST=25e3,IT=3e4;class $i{constructor(e,n,s,o,l,c,h){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=o,this.authToken=l,this.transportSessionId=c,this.lastSessionId=h,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Fo(e),this.stats_=Th(n),this.urlFn=f=>(this.appCheckToken&&(f[jd]=this.appCheckToken),yv(n,mv,f))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new pT(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(IT)),eT(()=>{if(this.isClosed_)return;this.scriptTagHolder=new xh((...l)=>{const[c,h,f,m,y]=l;if(this.incrementIncomingBytes_(l),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,c===qg)this.id=h,this.password=f;else if(c===mT)h?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(h,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+c)},(...l)=>{const[c,h]=l;this.incrementIncomingBytes_(l),this.myPacketOrderer.handleResponse(c,h)},()=>{this.onClosed_()},this.urlFn);const s={};s[qg]="t",s[wv]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[_T]=this.scriptTagHolder.uniqueCallbackIdentifier),s[av]=Ih,this.transportSessionId&&(s[lv]=this.transportSessionId),this.lastSessionId&&(s[hv]=this.lastSessionId),this.applicationId&&(s[fv]=this.applicationId),this.appCheckToken&&(s[jd]=this.appCheckToken),typeof location<"u"&&location.hostname&&dv.test(location.hostname)&&(s[uv]=cv);const o=this.urlFn(s);this.log_("Connecting via long-poll to "+o),this.scriptTagHolder.addTag(o,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){$i.forceAllow_=!0}static forceDisallow(){$i.forceDisallow_=!0}static isAvailable(){return $i.forceAllow_?!0:!$i.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!nT()&&!rT()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=dt(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=y_(n),o=sv(s,kT);for(let l=0;l<o.length;l++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,o.length,o[l]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[CT]="t",s[_v]=e,s[vv]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=dt(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class xh{constructor(e,n,s,o){this.onDisconnect=s,this.urlFn=o,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=J1(),window[gT+this.uniqueCallbackIdentifier]=e,window[yT+this.uniqueCallbackIdentifier]=n,this.myIFrame=xh.createIFrame_();let l="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(l='<script>document.domain="'+document.domain+'";<\/script>');const c="<html><body>"+l+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(c),this.myIFrame.doc.close()}catch(h){gt("frame writing exception"),h.stack&&gt(h.stack),gt(h)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||gt("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[_v]=this.myID,e[vv]=this.myPW,e[wv]=this.currentSerial;let n=this.urlFn(e),s="",o=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Cv+s.length<=Ev;){const c=this.pendingSegs.shift();s=s+"&"+vT+o+"="+c.seg+"&"+wT+o+"="+c.ts+"&"+ET+o+"="+c.d,o++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},o=setTimeout(s,Math.floor(ST)),l=()=>{clearTimeout(o),s()};this.addTag(e,l)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const o=s.readyState;(!o||o==="loaded"||o==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{gt("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
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
 */const TT=16384,xT=45e3;let kl=null;typeof MozWebSocket<"u"?kl=MozWebSocket:typeof WebSocket<"u"&&(kl=WebSocket);class an{constructor(e,n,s,o,l,c,h){this.connId=e,this.applicationId=s,this.appCheckToken=o,this.authToken=l,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Fo(this.connId),this.stats_=Th(n),this.connURL=an.connectionURL_(n,c,h,o,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,o,l){const c={};return c[av]=Ih,typeof location<"u"&&location.hostname&&dv.test(location.hostname)&&(c[uv]=cv),n&&(c[lv]=n),s&&(c[hv]=s),o&&(c[jd]=o),l&&(c[fv]=l),yv(e,pv,c)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,ei.set("previous_websocket_failure",!0);try{let s;tS(),this.mySock=new kl(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const o=s.message||s.data;o&&this.log_(o),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const o=s.message||s.data;o&&this.log_(o),this.onClosed_()}}start(){}static forceDisallow(){an.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&kl!==null&&!an.forceDisallow_}static previouslyFailed(){return ei.isInMemoryStorage||ei.get("previous_websocket_failure")===!0}markConnectionHealthy(){ei.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=Co(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(B(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=dt(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=sv(n,TT);s.length>1&&this.sendString_(String(s.length));for(let o=0;o<s.length;o++)this.sendString_(s[o])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(xT))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}an.responsesRequiredToBeHealthy=2;an.healthyTimeout=3e4;/**
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
 */class So{static get ALL_TRANSPORTS(){return[$i,an]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const n=an&&an.isAvailable();let s=n&&!an.previouslyFailed();if(e.webSocketOnly&&(n||xt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[an];else{const o=this.transports_=[];for(const l of So.ALL_TRANSPORTS)l&&l.isAvailable()&&o.push(l);So.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}So.globalTransportInitialized_=!1;/**
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
 */const RT=6e4,bT=5e3,NT=10*1024,PT=100*1024,vd="t",Kg="d",AT="s",Yg="r",DT="e",Qg="o",Jg="a",Xg="n",Zg="p",OT="h";class LT{constructor(e,n,s,o,l,c,h,f,m,y){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=o,this.authToken_=l,this.onMessage_=c,this.onReady_=h,this.onDisconnect_=f,this.onKill_=m,this.lastSessionId=y,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Fo("c:"+this.id+":"),this.transportManager_=new So(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const o=e.healthyTimeout||0;o>0&&(this.healthyTimeout_=go(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>PT?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>NT?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(o)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(vd in e){const n=e[vd];n===Jg?this.upgradeIfSecondaryHealthy_():n===Yg?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Qg&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=io("t",e),s=io("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Zg,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Jg,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Xg,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=io("t",e),s=io("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=io(vd,e);if(Kg in e){const s=e[Kg];if(n===OT){const o={...s};this.repoInfo_.isUsingEmulator&&(o.h=this.repoInfo_.host),this.onHandshake_(o)}else if(n===Xg){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let o=0;o<this.pendingDataMessages.length;++o)this.onDataMessage_(this.pendingDataMessages[o]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===AT?this.onConnectionShutdown_(s):n===Yg?this.onReset_(s):n===DT?Fd("Server Error: "+s):n===Qg?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Fd("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,o=e.h;this.sessionId=e.s,this.repoInfo_.host=o,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Ih!==s&&xt("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),go(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(RT))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):go(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(bT))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Zg,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(ei.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class kv{put(e,n,s,o){}merge(e,n,s,o){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,s){}onDisconnectMerge(e,n,s){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */class Sv{constructor(e){this.allowedEvents_=e,this.listeners_={},B(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let o=0;o<s.length;o++)s[o].callback.apply(s[o].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const o=this.getInitialEvent(e);o&&n.apply(s,o)}off(e,n,s){this.validateEventType_(e);const o=this.listeners_[e]||[];for(let l=0;l<o.length;l++)if(o[l].callback===n&&(!s||s===o[l].context)){o.splice(l,1);return}}validateEventType_(e){B(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class Sl extends Sv{static getInstance(){return new Sl}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!ph()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return B(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const ey=32,ty=768;class Ne{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let o=0;o<this.pieces_.length;o++)this.pieces_[o].length>0&&(this.pieces_[s]=this.pieces_[o],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function Te(){return new Ne("")}function me(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Nr(t){return t.pieces_.length-t.pieceNum_}function Le(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new Ne(t.pieces_,e)}function Rh(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function MT(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function Io(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function Iv(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new Ne(e,0)}function Be(t,e){const n=[];for(let s=t.pieceNum_;s<t.pieces_.length;s++)n.push(t.pieces_[s]);if(e instanceof Ne)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let o=0;o<s.length;o++)s[o].length>0&&n.push(s[o])}return new Ne(n,0)}function ye(t){return t.pieceNum_>=t.pieces_.length}function Lt(t,e){const n=me(t),s=me(e);if(n===null)return e;if(n===s)return Lt(Le(t),Le(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function FT(t,e){const n=Io(t,0),s=Io(e,0);for(let o=0;o<n.length&&o<s.length;o++){const l=di(n[o],s[o]);if(l!==0)return l}return n.length===s.length?0:n.length<s.length?-1:1}function bh(t,e){if(Nr(t)!==Nr(e))return!1;for(let n=t.pieceNum_,s=e.pieceNum_;n<=t.pieces_.length;n++,s++)if(t.pieces_[n]!==e.pieces_[s])return!1;return!0}function Qt(t,e){let n=t.pieceNum_,s=e.pieceNum_;if(Nr(t)>Nr(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class jT{constructor(e,n){this.errorPrefix_=n,this.parts_=Io(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=Kl(this.parts_[s]);Tv(this)}}function UT(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Kl(e),Tv(t)}function zT(t){const e=t.parts_.pop();t.byteLength_-=Kl(e),t.parts_.length>0&&(t.byteLength_-=1)}function Tv(t){if(t.byteLength_>ty)throw new Error(t.errorPrefix_+"has a key path longer than "+ty+" bytes ("+t.byteLength_+").");if(t.parts_.length>ey)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+ey+") or object contains a cycle "+Xr(t))}function Xr(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
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
 */class Nh extends Sv{static getInstance(){return new Nh}constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}getInitialEvent(e){return B(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const so=1e3,$T=300*1e3,ny=30*1e3,WT=1.3,BT=3e4,VT="server_kill",ry=3;class Wn extends kv{constructor(e,n,s,o,l,c,h,f){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=o,this.onServerInfoUpdate_=l,this.authTokenProvider_=c,this.appCheckTokenProvider_=h,this.authOverride_=f,this.id=Wn.nextPersistentConnectionId_++,this.log_=Fo("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=so,this.maxReconnectDelay_=$T,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,f)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Nh.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Sl.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const o=++this.requestNumber_,l={r:o,a:e,b:n};this.log_(dt(l)),B(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(l),s&&(this.requestCBHash_[o]=s)}get(e){this.initConnection_();const n=new Lo,o={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:c=>{const h=c.d;c.s==="ok"?n.resolve(h):n.reject(h)}};this.outstandingGets_.push(o),this.outstandingGetCount_++;const l=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(l),n.promise}listen(e,n,s,o){this.initConnection_();const l=e._queryIdentifier,c=e._path.toString();this.log_("Listen called for "+c+" "+l),this.listens.has(c)||this.listens.set(c,new Map),B(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),B(!this.listens.get(c).has(l),"listen() called twice for same path/queryId.");const h={onComplete:o,hashFn:n,query:e,tag:s};this.listens.get(c).set(l,h),this.connected_&&this.sendListen_(h)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),o=n._queryIdentifier;this.log_("Listen on "+s+" for "+o);const l={p:s},c="q";e.tag&&(l.q=n._queryObject,l.t=e.tag),l.h=e.hashFn(),this.sendRequest(c,l,h=>{const f=h.d,m=h.s;Wn.warnOnListenWarnings_(f,n),(this.listens.get(s)&&this.listens.get(s).get(o))===e&&(this.log_("listen response",h),m!=="ok"&&this.removeListen_(s,o),e.onComplete&&e.onComplete(m,f))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Tn(e,"w")){const s=Qi(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const o='".indexOn": "'+n._queryParams.getIndex().toString()+'"',l=n._path.toString();xt(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${o} at ${l} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||aS(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=ny)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=oS(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,o=>{const l=o.s,c=o.d||"error";this.authToken_===e&&(l==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(l,c))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),o=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+o),B(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,o)&&this.connected_&&this.sendUnlisten_(s,o,e._queryObject,n)}sendUnlisten_(e,n,s,o){this.log_("Unlisten on "+e+" for "+n);const l={p:e},c="n";o&&(l.q=s,l.t=o),this.sendRequest(c,l)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,o){const l={p:n,d:s};this.log_("onDisconnect "+e,l),this.sendRequest(e,l,c=>{o&&setTimeout(()=>{o(c.s,c.d)},Math.floor(0))})}put(e,n,s,o){this.putInternal("p",e,n,s,o)}merge(e,n,s,o){this.putInternal("m",e,n,s,o)}putInternal(e,n,s,o,l){this.initConnection_();const c={p:n,d:s};l!==void 0&&(c.h=l),this.outstandingPuts_.push({action:e,request:c,onComplete:o}),this.outstandingPutCount_++;const h=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(h):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,o=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,l=>{this.log_(n+" response",l),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),o&&o(l.s,l.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const l=s.d;this.log_("reportStats","Error sending stats: "+l)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+dt(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Fd("Unrecognized action received from server: "+dt(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){B(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=so,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=so,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>BT&&(this.reconnectDelay_=so),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*WT)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),o=this.id+":"+Wn.nextConnectionId_++,l=this.lastSessionId;let c=!1,h=null;const f=function(){h?h.close():(c=!0,s())},m=function(_){B(h,"sendRequest call when we're not connected not allowed."),h.sendRequest(_)};this.realtime_={close:f,sendRequest:m};const y=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[_,v]=await Promise.all([this.authTokenProvider_.getToken(y),this.appCheckTokenProvider_.getToken(y)]);c?gt("getToken() completed but was canceled"):(gt("getToken() completed. Creating connection."),this.authToken_=_&&_.accessToken,this.appCheckToken_=v&&v.token,h=new LT(o,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,S=>{xt(S+" ("+this.repoInfo_.toString()+")"),this.interrupt(VT)},l))}catch(_){this.log_("Failed to get token: "+_),c||(this.repoInfo_.nodeAdmin&&xt(_),f())}}}interrupt(e){gt("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){gt("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Nd(this.interruptReasons_)&&(this.reconnectDelay_=so,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(l=>Sh(l)).join("$"):s="default";const o=this.removeListen_(e,s);o&&o.onComplete&&o.onComplete("permission_denied")}removeListen_(e,n){const s=new Ne(e).toString();let o;if(this.listens.has(s)){const l=this.listens.get(s);o=l.get(n),l.delete(n),l.size===0&&this.listens.delete(s)}else o=void 0;return o}onAuthRevoked_(e,n){gt("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=ry&&(this.reconnectDelay_=ny,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){gt("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=ry&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+nv.replace(/\./g,"-")]=1,ph()?e["framework.cordova"]=1:I_()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Sl.getInstance().currentlyOnline();return Nd(this.interruptReasons_)&&e}}Wn.nextPersistentConnectionId_=0;Wn.nextConnectionId_=0;/**
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
 */class ge{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new ge(e,n)}}/**
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
 */class Xl{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new ge(Ji,e),o=new ge(Ji,n);return this.compare(s,o)!==0}minPost(){return ge.MIN}}/**
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
 */let rl;class xv extends Xl{static get __EMPTY_NODE(){return rl}static set __EMPTY_NODE(e){rl=e}compare(e,n){return di(e.name,n.name)}isDefinedOn(e){throw ss("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return ge.MIN}maxPost(){return new ge(ri,rl)}makePost(e,n){return B(typeof e=="string","KeyIndex indexValue must always be a string."),new ge(e,rl)}toString(){return".key"}}const Hi=new xv;/**
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
 */class il{constructor(e,n,s,o,l=null){this.isReverse_=o,this.resultGenerator_=l,this.nodeStack_=[];let c=1;for(;!e.isEmpty();)if(e=e,c=n?s(e.key,n):1,o&&(c*=-1),c<0)this.isReverse_?e=e.left:e=e.right;else if(c===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class ut{constructor(e,n,s,o,l){this.key=e,this.value=n,this.color=s??ut.RED,this.left=o??Mt.EMPTY_NODE,this.right=l??Mt.EMPTY_NODE}copy(e,n,s,o,l){return new ut(e??this.key,n??this.value,s??this.color,o??this.left,l??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let o=this;const l=s(e,o.key);return l<0?o=o.copy(null,null,null,o.left.insert(e,n,s),null):l===0?o=o.copy(null,n,null,null,null):o=o.copy(null,null,null,null,o.right.insert(e,n,s)),o.fixUp_()}removeMin_(){if(this.left.isEmpty())return Mt.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,o;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return Mt.EMPTY_NODE;o=s.right.min_(),s=s.copy(o.key,o.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,ut.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,ut.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}ut.RED=!0;ut.BLACK=!1;class HT{copy(e,n,s,o,l){return this}insert(e,n,s){return new ut(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Mt{constructor(e,n=Mt.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Mt(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,ut.BLACK,null,null))}remove(e){return new Mt(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,ut.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,o=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return o?o.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(o=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new il(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new il(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new il(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new il(this.root_,null,this.comparator_,!0,e)}}Mt.EMPTY_NODE=new HT;/**
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
 */function GT(t,e){return di(t.name,e.name)}function Ph(t,e){return di(t,e)}/**
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
 */let Ud;function qT(t){Ud=t}const Rv=function(t){return typeof t=="number"?"number:"+ov(t):"string:"+t},bv=function(t){if(t.isLeafNode()){const e=t.val();B(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Tn(e,".sv"),"Priority must be a string or number.")}else B(t===Ud||t.isEmpty(),"priority of unexpected type.");B(t===Ud||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let iy;class lt{static set __childrenNodeConstructor(e){iy=e}static get __childrenNodeConstructor(){return iy}constructor(e,n=lt.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,B(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),bv(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new lt(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:lt.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return ye(e)?this:me(e)===".priority"?this.priorityNode_:lt.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:lt.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=me(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(B(s!==".priority"||Nr(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,lt.__childrenNodeConstructor.EMPTY_NODE.updateChild(Le(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Rv(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=ov(this.value_):e+=this.value_,this.lazyHash_=iv(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===lt.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof lt.__childrenNodeConstructor?-1:(B(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,o=lt.VALUE_TYPE_ORDER.indexOf(n),l=lt.VALUE_TYPE_ORDER.indexOf(s);return B(o>=0,"Unknown leaf type: "+n),B(l>=0,"Unknown leaf type: "+s),o===l?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:l-o}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}lt.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let Nv,Pv;function KT(t){Nv=t}function YT(t){Pv=t}class QT extends Xl{compare(e,n){const s=e.node.getPriority(),o=n.node.getPriority(),l=s.compareTo(o);return l===0?di(e.name,n.name):l}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return ge.MIN}maxPost(){return new ge(ri,new lt("[PRIORITY-POST]",Pv))}makePost(e,n){const s=Nv(e);return new ge(n,new lt("[PRIORITY-POST]",s))}toString(){return".priority"}}const Ve=new QT;/**
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
 */const JT=Math.log(2);class XT{constructor(e){const n=l=>parseInt(Math.log(l)/JT,10),s=l=>parseInt(Array(l+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const o=s(this.count);this.bits_=e+1&o}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Il=function(t,e,n,s){t.sort(e);const o=function(f,m){const y=m-f;let _,v;if(y===0)return null;if(y===1)return _=t[f],v=n?n(_):_,new ut(v,_.node,ut.BLACK,null,null);{const S=parseInt(y/2,10)+f,N=o(f,S),I=o(S+1,m);return _=t[S],v=n?n(_):_,new ut(v,_.node,ut.BLACK,N,I)}},l=function(f){let m=null,y=null,_=t.length;const v=function(N,I){const A=_-N,z=_;_-=N;const X=o(A+1,z),U=t[A],q=n?n(U):U;S(new ut(q,U.node,I,null,X))},S=function(N){m?(m.left=N,m=N):(y=N,m=N)};for(let N=0;N<f.count;++N){const I=f.nextBitIsOne(),A=Math.pow(2,f.count-(N+1));I?v(A,ut.BLACK):(v(A,ut.BLACK),v(A,ut.RED))}return y},c=new XT(t.length),h=l(c);return new Mt(s||e,h)};/**
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
 */let wd;const Ui={};class jn{static get Default(){return B(Ui&&Ve,"ChildrenNode.ts has not been loaded"),wd=wd||new jn({".priority":Ui},{".priority":Ve}),wd}constructor(e,n){this.indexes_=e,this.indexSet_=n}get(e){const n=Qi(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Mt?n:null}hasIndex(e){return Tn(this.indexSet_,e.toString())}addIndex(e,n){B(e!==Hi,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let o=!1;const l=n.getIterator(ge.Wrap);let c=l.getNext();for(;c;)o=o||e.isDefinedOn(c.node),s.push(c),c=l.getNext();let h;o?h=Il(s,e.getCompare()):h=Ui;const f=e.toString(),m={...this.indexSet_};m[f]=e;const y={...this.indexes_};return y[f]=h,new jn(y,m)}addToIndexes(e,n){const s=vl(this.indexes_,(o,l)=>{const c=Qi(this.indexSet_,l);if(B(c,"Missing index implementation for "+l),o===Ui)if(c.isDefinedOn(e.node)){const h=[],f=n.getIterator(ge.Wrap);let m=f.getNext();for(;m;)m.name!==e.name&&h.push(m),m=f.getNext();return h.push(e),Il(h,c.getCompare())}else return Ui;else{const h=n.get(e.name);let f=o;return h&&(f=f.remove(new ge(e.name,h))),f.insert(e,e.node)}});return new jn(s,this.indexSet_)}removeFromIndexes(e,n){const s=vl(this.indexes_,o=>{if(o===Ui)return o;{const l=n.get(e.name);return l?o.remove(new ge(e.name,l)):o}});return new jn(s,this.indexSet_)}}/**
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
 */let oo;class ue{static get EMPTY_NODE(){return oo||(oo=new ue(new Mt(Ph),null,jn.Default))}constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&bv(this.priorityNode_),this.children_.isEmpty()&&B(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||oo}updatePriority(e){return this.children_.isEmpty()?this:new ue(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?oo:n}}getChild(e){const n=me(e);return n===null?this:this.getImmediateChild(n).getChild(Le(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(B(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new ge(e,n);let o,l;n.isEmpty()?(o=this.children_.remove(e),l=this.indexMap_.removeFromIndexes(s,this.children_)):(o=this.children_.insert(e,n),l=this.indexMap_.addToIndexes(s,this.children_));const c=o.isEmpty()?oo:this.priorityNode_;return new ue(o,c,l)}}updateChild(e,n){const s=me(e);if(s===null)return n;{B(me(e)!==".priority"||Nr(e)===1,".priority must be the last token in a path");const o=this.getImmediateChild(s).updateChild(Le(e),n);return this.updateImmediateChild(s,o)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,o=0,l=!0;if(this.forEachChild(Ve,(c,h)=>{n[c]=h.val(e),s++,l&&ue.INTEGER_REGEXP_.test(c)?o=Math.max(o,Number(c)):l=!1}),!e&&l&&o<2*s){const c=[];for(const h in n)c[h]=n[h];return c}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Rv(this.getPriority().val())+":"),this.forEachChild(Ve,(n,s)=>{const o=s.hash();o!==""&&(e+=":"+n+":"+o)}),this.lazyHash_=e===""?"":iv(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const o=this.resolveIndex_(s);if(o){const l=o.getPredecessorKey(new ge(e,n));return l?l.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new ge(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new ge(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(o=>n(o.name,o.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,o=>o);{const o=this.children_.getIteratorFrom(e.name,ge.Wrap);let l=o.peek();for(;l!=null&&n.compare(l,e)<0;)o.getNext(),l=o.peek();return o}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,o=>o);{const o=this.children_.getReverseIteratorFrom(e.name,ge.Wrap);let l=o.peek();for(;l!=null&&n.compare(l,e)>0;)o.getNext(),l=o.peek();return o}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===jo?-1:0}withIndex(e){if(e===Hi||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new ue(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Hi||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(Ve),o=n.getIterator(Ve);let l=s.getNext(),c=o.getNext();for(;l&&c;){if(l.name!==c.name||!l.node.equals(c.node))return!1;l=s.getNext(),c=o.getNext()}return l===null&&c===null}else return!1;else return!1}}resolveIndex_(e){return e===Hi?null:this.indexMap_.get(e.toString())}}ue.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class ZT extends ue{constructor(){super(new Mt(Ph),ue.EMPTY_NODE,jn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return ue.EMPTY_NODE}isEmpty(){return!1}}const jo=new ZT;Object.defineProperties(ge,{MIN:{value:new ge(Ji,ue.EMPTY_NODE)},MAX:{value:new ge(ri,jo)}});xv.__EMPTY_NODE=ue.EMPTY_NODE;lt.__childrenNodeConstructor=ue;qT(jo);YT(jo);/**
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
 */const ex=!0;function ct(t,e=null){if(t===null)return ue.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),B(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new lt(n,ct(e))}if(!(t instanceof Array)&&ex){const n=[];let s=!1;if(yt(t,(c,h)=>{if(c.substring(0,1)!=="."){const f=ct(h);f.isEmpty()||(s=s||!f.getPriority().isEmpty(),n.push(new ge(c,f)))}}),n.length===0)return ue.EMPTY_NODE;const l=Il(n,GT,c=>c.name,Ph);if(s){const c=Il(n,Ve.getCompare());return new ue(l,ct(e),new jn({".priority":c},{".priority":Ve}))}else return new ue(l,ct(e),jn.Default)}else{let n=ue.EMPTY_NODE;return yt(t,(s,o)=>{if(Tn(t,s)&&s.substring(0,1)!=="."){const l=ct(o);(l.isLeafNode()||!l.isEmpty())&&(n=n.updateImmediateChild(s,l))}}),n.updatePriority(ct(e))}}KT(ct);/**
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
 */class tx extends Xl{constructor(e){super(),this.indexPath_=e,B(!ye(e)&&me(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),o=this.extractChild(n.node),l=s.compareTo(o);return l===0?di(e.name,n.name):l}makePost(e,n){const s=ct(e),o=ue.EMPTY_NODE.updateChild(this.indexPath_,s);return new ge(n,o)}maxPost(){const e=ue.EMPTY_NODE.updateChild(this.indexPath_,jo);return new ge(ri,e)}toString(){return Io(this.indexPath_,0).join("/")}}/**
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
 */class nx extends Xl{compare(e,n){const s=e.node.compareTo(n.node);return s===0?di(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return ge.MIN}maxPost(){return ge.MAX}makePost(e,n){const s=ct(e);return new ge(n,s)}toString(){return".value"}}const rx=new nx;/**
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
 */function Av(t){return{type:"value",snapshotNode:t}}function Xi(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function To(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function xo(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function ix(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
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
 */class Ah{constructor(e){this.index_=e}updateChild(e,n,s,o,l,c){B(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const h=e.getImmediateChild(n);return h.getChild(o).equals(s.getChild(o))&&h.isEmpty()===s.isEmpty()||(c!=null&&(s.isEmpty()?e.hasChild(n)?c.trackChildChange(To(n,h)):B(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):h.isEmpty()?c.trackChildChange(Xi(n,s)):c.trackChildChange(xo(n,s,h))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(n,s).withIndex(this.index_)}updateFullNode(e,n,s){return s!=null&&(e.isLeafNode()||e.forEachChild(Ve,(o,l)=>{n.hasChild(o)||s.trackChildChange(To(o,l))}),n.isLeafNode()||n.forEachChild(Ve,(o,l)=>{if(e.hasChild(o)){const c=e.getImmediateChild(o);c.equals(l)||s.trackChildChange(xo(o,l,c))}else s.trackChildChange(Xi(o,l))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?ue.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class Ro{constructor(e){this.indexedFilter_=new Ah(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Ro.getStartPost_(e),this.endPost_=Ro.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&s}updateChild(e,n,s,o,l,c){return this.matches(new ge(n,s))||(s=ue.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,s,o,l,c)}updateFullNode(e,n,s){n.isLeafNode()&&(n=ue.EMPTY_NODE);let o=n.withIndex(this.index_);o=o.updatePriority(ue.EMPTY_NODE);const l=this;return n.forEachChild(Ve,(c,h)=>{l.matches(new ge(c,h))||(o=o.updateImmediateChild(c,ue.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,o,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
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
 */class sx{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=n=>{const s=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new Ro(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,s,o,l,c){return this.rangedFilter_.matches(new ge(n,s))||(s=ue.EMPTY_NODE),e.getImmediateChild(n).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,s,o,l,c):this.fullLimitUpdateChild_(e,n,s,l,c)}updateFullNode(e,n,s){let o;if(n.isLeafNode()||n.isEmpty())o=ue.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){o=ue.EMPTY_NODE.withIndex(this.index_);let l;this.reverse_?l=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):l=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let c=0;for(;l.hasNext()&&c<this.limit_;){const h=l.getNext();if(this.withinDirectionalStart(h))if(this.withinDirectionalEnd(h))o=o.updateImmediateChild(h.name,h.node),c++;else break;else continue}}else{o=n.withIndex(this.index_),o=o.updatePriority(ue.EMPTY_NODE);let l;this.reverse_?l=o.getReverseIterator(this.index_):l=o.getIterator(this.index_);let c=0;for(;l.hasNext();){const h=l.getNext();c<this.limit_&&this.withinDirectionalStart(h)&&this.withinDirectionalEnd(h)?c++:o=o.updateImmediateChild(h.name,ue.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,o,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,s,o,l){let c;if(this.reverse_){const _=this.index_.getCompare();c=(v,S)=>_(S,v)}else c=this.index_.getCompare();const h=e;B(h.numChildren()===this.limit_,"");const f=new ge(n,s),m=this.reverse_?h.getFirstChild(this.index_):h.getLastChild(this.index_),y=this.rangedFilter_.matches(f);if(h.hasChild(n)){const _=h.getImmediateChild(n);let v=o.getChildAfterChild(this.index_,m,this.reverse_);for(;v!=null&&(v.name===n||h.hasChild(v.name));)v=o.getChildAfterChild(this.index_,v,this.reverse_);const S=v==null?1:c(v,f);if(y&&!s.isEmpty()&&S>=0)return l!=null&&l.trackChildChange(xo(n,s,_)),h.updateImmediateChild(n,s);{l!=null&&l.trackChildChange(To(n,_));const I=h.updateImmediateChild(n,ue.EMPTY_NODE);return v!=null&&this.rangedFilter_.matches(v)?(l!=null&&l.trackChildChange(Xi(v.name,v.node)),I.updateImmediateChild(v.name,v.node)):I}}else return s.isEmpty()?e:y&&c(m,f)>=0?(l!=null&&(l.trackChildChange(To(m.name,m.node)),l.trackChildChange(Xi(n,s))),h.updateImmediateChild(n,s).updateImmediateChild(m.name,ue.EMPTY_NODE)):e}}/**
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
 */class Dh{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Ve}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return B(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return B(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Ji}hasEnd(){return this.endSet_}getIndexEndValue(){return B(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return B(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:ri}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return B(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Ve}copy(){const e=new Dh;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function ox(t){return t.loadsAllData()?new Ah(t.getIndex()):t.hasLimit()?new sx(t):new Ro(t)}function ax(t,e){const n=t.copy();return n.limitSet_=!0,n.limit_=e,n.viewFrom_="r",n}function sy(t){const e={};if(t.isDefault())return e;let n;if(t.index_===Ve?n="$priority":t.index_===rx?n="$value":t.index_===Hi?n="$key":(B(t.index_ instanceof tx,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=dt(n),t.startSet_){const s=t.startAfterSet_?"startAfter":"startAt";e[s]=dt(t.indexStartValue_),t.startNameSet_&&(e[s]+=","+dt(t.indexStartName_))}if(t.endSet_){const s=t.endBeforeSet_?"endBefore":"endAt";e[s]=dt(t.indexEndValue_),t.endNameSet_&&(e[s]+=","+dt(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function oy(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==Ve&&(e.i=t.index_.toString()),e}/**
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
 */class Tl extends kv{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(B(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,n,s,o){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=o,this.log_=Fo("p:rest:"),this.listens_={}}listen(e,n,s,o){const l=e._path.toString();this.log_("Listen called for "+l+" "+e._queryIdentifier);const c=Tl.getListenId_(e,s),h={};this.listens_[c]=h;const f=sy(e._queryParams);this.restRequest_(l+".json",f,(m,y)=>{let _=y;if(m===404&&(_=null,m=null),m===null&&this.onDataUpdate_(l,_,!1,s),Qi(this.listens_,c)===h){let v;m?m===401?v="permission_denied":v="rest_error:"+m:v="ok",o(v,null)}})}unlisten(e,n){const s=Tl.getListenId_(e,n);delete this.listens_[s]}get(e){const n=sy(e._queryParams),s=e._path.toString(),o=new Lo;return this.restRequest_(s+".json",n,(l,c)=>{let h=c;l===404&&(h=null,l=null),l===null?(this.onDataUpdate_(s,h,!1,null),o.resolve(h)):o.reject(new Error(h))}),o.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([o,l])=>{o&&o.accessToken&&(n.auth=o.accessToken),l&&l.token&&(n.ac=l.token);const c=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+as(n);this.log_("Sending REST request for "+c);const h=new XMLHttpRequest;h.onreadystatechange=()=>{if(s&&h.readyState===4){this.log_("REST Response for "+c+" received. status:",h.status,"response:",h.responseText);let f=null;if(h.status>=200&&h.status<300){try{f=Co(h.responseText)}catch{xt("Failed to parse JSON response for "+c+": "+h.responseText)}s(null,f)}else h.status!==401&&h.status!==404&&xt("Got unsuccessful REST response for "+c+" Status: "+h.status),s(h.status);s=null}},h.open("GET",c,!0),h.send()})}}/**
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
 */class lx{constructor(){this.rootNode_=ue.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function xl(){return{value:null,children:new Map}}function Dv(t,e,n){if(ye(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const s=me(e);t.children.has(s)||t.children.set(s,xl());const o=t.children.get(s);e=Le(e),Dv(o,e,n)}}function zd(t,e,n){t.value!==null?n(e,t.value):ux(t,(s,o)=>{const l=new Ne(e.toString()+"/"+s);zd(o,l,n)})}function ux(t,e){t.children.forEach((n,s)=>{e(s,n)})}/**
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
 */class cx{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n={...e};return this.last_&&yt(this.last_,(s,o)=>{n[s]=n[s]-o}),this.last_=e,n}}/**
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
 */const ay=10*1e3,dx=30*1e3,hx=300*1e3;class fx{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new cx(e);const s=ay+(dx-ay)*Math.random();go(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;yt(e,(o,l)=>{l>0&&Tn(this.statsToReport_,o)&&(n[o]=l,s=!0)}),s&&this.server_.reportStats(n),go(this.reportStats_.bind(this),Math.floor(Math.random()*2*hx))}}/**
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
 */var ln;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(ln||(ln={}));function Oh(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Lh(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Mh(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
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
 */class Rl{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=ln.ACK_USER_WRITE,this.source=Oh()}operationForChild(e){if(ye(this.path)){if(this.affectedTree.value!=null)return B(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new Ne(e));return new Rl(Te(),n,this.revert)}}else return B(me(this.path)===e,"operationForChild called for unrelated child."),new Rl(Le(this.path),this.affectedTree,this.revert)}}/**
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
 */class bo{constructor(e,n){this.source=e,this.path=n,this.type=ln.LISTEN_COMPLETE}operationForChild(e){return ye(this.path)?new bo(this.source,Te()):new bo(this.source,Le(this.path))}}/**
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
 */class ii{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=ln.OVERWRITE}operationForChild(e){return ye(this.path)?new ii(this.source,Te(),this.snap.getImmediateChild(e)):new ii(this.source,Le(this.path),this.snap)}}/**
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
 */class Zi{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=ln.MERGE}operationForChild(e){if(ye(this.path)){const n=this.children.subtree(new Ne(e));return n.isEmpty()?null:n.value?new ii(this.source,Te(),n.value):new Zi(this.source,Te(),n)}else return B(me(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Zi(this.source,Le(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class si{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(ye(e))return this.isFullyInitialized()&&!this.filtered_;const n=me(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class px{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function mx(t,e,n,s){const o=[],l=[];return e.forEach(c=>{c.type==="child_changed"&&t.index_.indexedValueChanged(c.oldSnap,c.snapshotNode)&&l.push(ix(c.childName,c.snapshotNode))}),ao(t,o,"child_removed",e,s,n),ao(t,o,"child_added",e,s,n),ao(t,o,"child_moved",l,s,n),ao(t,o,"child_changed",e,s,n),ao(t,o,"value",e,s,n),o}function ao(t,e,n,s,o,l){const c=s.filter(h=>h.type===n);c.sort((h,f)=>yx(t,h,f)),c.forEach(h=>{const f=gx(t,h,l);o.forEach(m=>{m.respondsTo(h.type)&&e.push(m.createEvent(f,t.query_))})})}function gx(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function yx(t,e,n){if(e.childName==null||n.childName==null)throw ss("Should only compare child_ events.");const s=new ge(e.childName,e.snapshotNode),o=new ge(n.childName,n.snapshotNode);return t.index_.compare(s,o)}/**
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
 */function Zl(t,e){return{eventCache:t,serverCache:e}}function yo(t,e,n,s){return Zl(new si(e,n,s),t.serverCache)}function Ov(t,e,n,s){return Zl(t.eventCache,new si(e,n,s))}function $d(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function oi(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
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
 */let Ed;const _x=()=>(Ed||(Ed=new Mt(tT)),Ed);class Oe{static fromObject(e){let n=new Oe(null);return yt(e,(s,o)=>{n=n.set(new Ne(s),o)}),n}constructor(e,n=_x()){this.value=e,this.children=n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:Te(),value:this.value};if(ye(e))return null;{const s=me(e),o=this.children.get(s);if(o!==null){const l=o.findRootMostMatchingPathAndValue(Le(e),n);return l!=null?{path:Be(new Ne(s),l.path),value:l.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(ye(e))return this;{const n=me(e),s=this.children.get(n);return s!==null?s.subtree(Le(e)):new Oe(null)}}set(e,n){if(ye(e))return new Oe(n,this.children);{const s=me(e),l=(this.children.get(s)||new Oe(null)).set(Le(e),n),c=this.children.insert(s,l);return new Oe(this.value,c)}}remove(e){if(ye(e))return this.children.isEmpty()?new Oe(null):new Oe(null,this.children);{const n=me(e),s=this.children.get(n);if(s){const o=s.remove(Le(e));let l;return o.isEmpty()?l=this.children.remove(n):l=this.children.insert(n,o),this.value===null&&l.isEmpty()?new Oe(null):new Oe(this.value,l)}else return this}}get(e){if(ye(e))return this.value;{const n=me(e),s=this.children.get(n);return s?s.get(Le(e)):null}}setTree(e,n){if(ye(e))return n;{const s=me(e),l=(this.children.get(s)||new Oe(null)).setTree(Le(e),n);let c;return l.isEmpty()?c=this.children.remove(s):c=this.children.insert(s,l),new Oe(this.value,c)}}fold(e){return this.fold_(Te(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((o,l)=>{s[o]=l.fold_(Be(e,o),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,Te(),n)}findOnPath_(e,n,s){const o=this.value?s(n,this.value):!1;if(o)return o;if(ye(e))return null;{const l=me(e),c=this.children.get(l);return c?c.findOnPath_(Le(e),Be(n,l),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,Te(),n)}foreachOnPath_(e,n,s){if(ye(e))return this;{this.value&&s(n,this.value);const o=me(e),l=this.children.get(o);return l?l.foreachOnPath_(Le(e),Be(n,o),s):new Oe(null)}}foreach(e){this.foreach_(Te(),e)}foreach_(e,n){this.children.inorderTraversal((s,o)=>{o.foreach_(Be(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
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
 */class cn{constructor(e){this.writeTree_=e}static empty(){return new cn(new Oe(null))}}function _o(t,e,n){if(ye(e))return new cn(new Oe(n));{const s=t.writeTree_.findRootMostValueAndPath(e);if(s!=null){const o=s.path;let l=s.value;const c=Lt(o,e);return l=l.updateChild(c,n),new cn(t.writeTree_.set(o,l))}else{const o=new Oe(n),l=t.writeTree_.setTree(e,o);return new cn(l)}}}function Wd(t,e,n){let s=t;return yt(n,(o,l)=>{s=_o(s,Be(e,o),l)}),s}function ly(t,e){if(ye(e))return cn.empty();{const n=t.writeTree_.setTree(e,new Oe(null));return new cn(n)}}function Bd(t,e){return hi(t,e)!=null}function hi(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Lt(n.path,e)):null}function uy(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(Ve,(s,o)=>{e.push(new ge(s,o))}):t.writeTree_.children.inorderTraversal((s,o)=>{o.value!=null&&e.push(new ge(s,o.value))}),e}function Rr(t,e){if(ye(e))return t;{const n=hi(t,e);return n!=null?new cn(new Oe(n)):new cn(t.writeTree_.subtree(e))}}function Vd(t){return t.writeTree_.isEmpty()}function es(t,e){return Lv(Te(),t.writeTree_,e)}function Lv(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let s=null;return e.children.inorderTraversal((o,l)=>{o===".priority"?(B(l.value!==null,"Priority writes must always be leaf nodes"),s=l.value):n=Lv(Be(t,o),l,n)}),!n.getChild(t).isEmpty()&&s!==null&&(n=n.updateChild(Be(t,".priority"),s)),n}}/**
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
 */function Fh(t,e){return Uv(e,t)}function vx(t,e,n,s,o){B(s>t.lastWriteId,"Stacking an older write on top of newer ones"),o===void 0&&(o=!0),t.allWrites.push({path:e,snap:n,writeId:s,visible:o}),o&&(t.visibleWrites=_o(t.visibleWrites,e,n)),t.lastWriteId=s}function wx(t,e,n,s){B(s>t.lastWriteId,"Stacking an older merge on top of newer ones"),t.allWrites.push({path:e,children:n,writeId:s,visible:!0}),t.visibleWrites=Wd(t.visibleWrites,e,n),t.lastWriteId=s}function Ex(t,e){for(let n=0;n<t.allWrites.length;n++){const s=t.allWrites[n];if(s.writeId===e)return s}return null}function Cx(t,e){const n=t.allWrites.findIndex(h=>h.writeId===e);B(n>=0,"removeWrite called with nonexistent writeId.");const s=t.allWrites[n];t.allWrites.splice(n,1);let o=s.visible,l=!1,c=t.allWrites.length-1;for(;o&&c>=0;){const h=t.allWrites[c];h.visible&&(c>=n&&kx(h,s.path)?o=!1:Qt(s.path,h.path)&&(l=!0)),c--}if(o){if(l)return Sx(t),!0;if(s.snap)t.visibleWrites=ly(t.visibleWrites,s.path);else{const h=s.children;yt(h,f=>{t.visibleWrites=ly(t.visibleWrites,Be(s.path,f))})}return!0}else return!1}function kx(t,e){if(t.snap)return Qt(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&Qt(Be(t.path,n),e))return!0;return!1}function Sx(t){t.visibleWrites=Mv(t.allWrites,Ix,Te()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function Ix(t){return t.visible}function Mv(t,e,n){let s=cn.empty();for(let o=0;o<t.length;++o){const l=t[o];if(e(l)){const c=l.path;let h;if(l.snap)Qt(n,c)?(h=Lt(n,c),s=_o(s,h,l.snap)):Qt(c,n)&&(h=Lt(c,n),s=_o(s,Te(),l.snap.getChild(h)));else if(l.children){if(Qt(n,c))h=Lt(n,c),s=Wd(s,h,l.children);else if(Qt(c,n))if(h=Lt(c,n),ye(h))s=Wd(s,Te(),l.children);else{const f=Qi(l.children,me(h));if(f){const m=f.getChild(Le(h));s=_o(s,Te(),m)}}}else throw ss("WriteRecord should have .snap or .children")}}return s}function Fv(t,e,n,s,o){if(!s&&!o){const l=hi(t.visibleWrites,e);if(l!=null)return l;{const c=Rr(t.visibleWrites,e);if(Vd(c))return n;if(n==null&&!Bd(c,Te()))return null;{const h=n||ue.EMPTY_NODE;return es(c,h)}}}else{const l=Rr(t.visibleWrites,e);if(!o&&Vd(l))return n;if(!o&&n==null&&!Bd(l,Te()))return null;{const c=function(m){return(m.visible||o)&&(!s||!~s.indexOf(m.writeId))&&(Qt(m.path,e)||Qt(e,m.path))},h=Mv(t.allWrites,c,e),f=n||ue.EMPTY_NODE;return es(h,f)}}}function Tx(t,e,n){let s=ue.EMPTY_NODE;const o=hi(t.visibleWrites,e);if(o)return o.isLeafNode()||o.forEachChild(Ve,(l,c)=>{s=s.updateImmediateChild(l,c)}),s;if(n){const l=Rr(t.visibleWrites,e);return n.forEachChild(Ve,(c,h)=>{const f=es(Rr(l,new Ne(c)),h);s=s.updateImmediateChild(c,f)}),uy(l).forEach(c=>{s=s.updateImmediateChild(c.name,c.node)}),s}else{const l=Rr(t.visibleWrites,e);return uy(l).forEach(c=>{s=s.updateImmediateChild(c.name,c.node)}),s}}function xx(t,e,n,s,o){B(s||o,"Either existingEventSnap or existingServerSnap must exist");const l=Be(e,n);if(Bd(t.visibleWrites,l))return null;{const c=Rr(t.visibleWrites,l);return Vd(c)?o.getChild(n):es(c,o.getChild(n))}}function Rx(t,e,n,s){const o=Be(e,n),l=hi(t.visibleWrites,o);if(l!=null)return l;if(s.isCompleteForChild(n)){const c=Rr(t.visibleWrites,o);return es(c,s.getNode().getImmediateChild(n))}else return null}function bx(t,e){return hi(t.visibleWrites,e)}function Nx(t,e,n,s,o,l,c){let h;const f=Rr(t.visibleWrites,e),m=hi(f,Te());if(m!=null)h=m;else if(n!=null)h=es(f,n);else return[];if(h=h.withIndex(c),!h.isEmpty()&&!h.isLeafNode()){const y=[],_=c.getCompare(),v=l?h.getReverseIteratorFrom(s,c):h.getIteratorFrom(s,c);let S=v.getNext();for(;S&&y.length<o;)_(S,s)!==0&&y.push(S),S=v.getNext();return y}else return[]}function Px(){return{visibleWrites:cn.empty(),allWrites:[],lastWriteId:-1}}function bl(t,e,n,s){return Fv(t.writeTree,t.treePath,e,n,s)}function jh(t,e){return Tx(t.writeTree,t.treePath,e)}function cy(t,e,n,s){return xx(t.writeTree,t.treePath,e,n,s)}function Nl(t,e){return bx(t.writeTree,Be(t.treePath,e))}function Ax(t,e,n,s,o,l){return Nx(t.writeTree,t.treePath,e,n,s,o,l)}function Uh(t,e,n){return Rx(t.writeTree,t.treePath,e,n)}function jv(t,e){return Uv(Be(t.treePath,e),t.writeTree)}function Uv(t,e){return{treePath:t,writeTree:e}}/**
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
 */class Dx{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;B(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),B(s!==".priority","Only non-priority child changes can be tracked.");const o=this.changeMap.get(s);if(o){const l=o.type;if(n==="child_added"&&l==="child_removed")this.changeMap.set(s,xo(s,e.snapshotNode,o.snapshotNode));else if(n==="child_removed"&&l==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&l==="child_changed")this.changeMap.set(s,To(s,o.oldSnap));else if(n==="child_changed"&&l==="child_added")this.changeMap.set(s,Xi(s,e.snapshotNode));else if(n==="child_changed"&&l==="child_changed")this.changeMap.set(s,xo(s,e.snapshotNode,o.oldSnap));else throw ss("Illegal combination of changes: "+e+" occurred after "+o)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class Ox{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const zv=new Ox;class zh{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new si(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Uh(this.writes_,e,s)}}getChildAfterChild(e,n,s){const o=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:oi(this.viewCache_),l=Ax(this.writes_,o,n,1,s,e);return l.length===0?null:l[0]}}/**
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
 */function Lx(t){return{filter:t}}function Mx(t,e){B(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),B(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function Fx(t,e,n,s,o){const l=new Dx;let c,h;if(n.type===ln.OVERWRITE){const m=n;m.source.fromUser?c=Hd(t,e,m.path,m.snap,s,o,l):(B(m.source.fromServer,"Unknown source."),h=m.source.tagged||e.serverCache.isFiltered()&&!ye(m.path),c=Pl(t,e,m.path,m.snap,s,o,h,l))}else if(n.type===ln.MERGE){const m=n;m.source.fromUser?c=Ux(t,e,m.path,m.children,s,o,l):(B(m.source.fromServer,"Unknown source."),h=m.source.tagged||e.serverCache.isFiltered(),c=Gd(t,e,m.path,m.children,s,o,h,l))}else if(n.type===ln.ACK_USER_WRITE){const m=n;m.revert?c=Wx(t,e,m.path,s,o,l):c=zx(t,e,m.path,m.affectedTree,s,o,l)}else if(n.type===ln.LISTEN_COMPLETE)c=$x(t,e,n.path,s,l);else throw ss("Unknown operation type: "+n.type);const f=l.getChanges();return jx(e,c,f),{viewCache:c,changes:f}}function jx(t,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const o=s.getNode().isLeafNode()||s.getNode().isEmpty(),l=$d(t);(n.length>0||!t.eventCache.isFullyInitialized()||o&&!s.getNode().equals(l)||!s.getNode().getPriority().equals(l.getPriority()))&&n.push(Av($d(e)))}}function $v(t,e,n,s,o,l){const c=e.eventCache;if(Nl(s,n)!=null)return e;{let h,f;if(ye(n))if(B(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const m=oi(e),y=m instanceof ue?m:ue.EMPTY_NODE,_=jh(s,y);h=t.filter.updateFullNode(e.eventCache.getNode(),_,l)}else{const m=bl(s,oi(e));h=t.filter.updateFullNode(e.eventCache.getNode(),m,l)}else{const m=me(n);if(m===".priority"){B(Nr(n)===1,"Can't have a priority with additional path components");const y=c.getNode();f=e.serverCache.getNode();const _=cy(s,n,y,f);_!=null?h=t.filter.updatePriority(y,_):h=c.getNode()}else{const y=Le(n);let _;if(c.isCompleteForChild(m)){f=e.serverCache.getNode();const v=cy(s,n,c.getNode(),f);v!=null?_=c.getNode().getImmediateChild(m).updateChild(y,v):_=c.getNode().getImmediateChild(m)}else _=Uh(s,m,e.serverCache);_!=null?h=t.filter.updateChild(c.getNode(),m,_,y,o,l):h=c.getNode()}}return yo(e,h,c.isFullyInitialized()||ye(n),t.filter.filtersNodes())}}function Pl(t,e,n,s,o,l,c,h){const f=e.serverCache;let m;const y=c?t.filter:t.filter.getIndexedFilter();if(ye(n))m=y.updateFullNode(f.getNode(),s,null);else if(y.filtersNodes()&&!f.isFiltered()){const S=f.getNode().updateChild(n,s);m=y.updateFullNode(f.getNode(),S,null)}else{const S=me(n);if(!f.isCompleteForPath(n)&&Nr(n)>1)return e;const N=Le(n),A=f.getNode().getImmediateChild(S).updateChild(N,s);S===".priority"?m=y.updatePriority(f.getNode(),A):m=y.updateChild(f.getNode(),S,A,N,zv,null)}const _=Ov(e,m,f.isFullyInitialized()||ye(n),y.filtersNodes()),v=new zh(o,_,l);return $v(t,_,n,o,v,h)}function Hd(t,e,n,s,o,l,c){const h=e.eventCache;let f,m;const y=new zh(o,e,l);if(ye(n))m=t.filter.updateFullNode(e.eventCache.getNode(),s,c),f=yo(e,m,!0,t.filter.filtersNodes());else{const _=me(n);if(_===".priority")m=t.filter.updatePriority(e.eventCache.getNode(),s),f=yo(e,m,h.isFullyInitialized(),h.isFiltered());else{const v=Le(n),S=h.getNode().getImmediateChild(_);let N;if(ye(v))N=s;else{const I=y.getCompleteChild(_);I!=null?Rh(v)===".priority"&&I.getChild(Iv(v)).isEmpty()?N=I:N=I.updateChild(v,s):N=ue.EMPTY_NODE}if(S.equals(N))f=e;else{const I=t.filter.updateChild(h.getNode(),_,N,v,y,c);f=yo(e,I,h.isFullyInitialized(),t.filter.filtersNodes())}}}return f}function dy(t,e){return t.eventCache.isCompleteForChild(e)}function Ux(t,e,n,s,o,l,c){let h=e;return s.foreach((f,m)=>{const y=Be(n,f);dy(e,me(y))&&(h=Hd(t,h,y,m,o,l,c))}),s.foreach((f,m)=>{const y=Be(n,f);dy(e,me(y))||(h=Hd(t,h,y,m,o,l,c))}),h}function hy(t,e,n){return n.foreach((s,o)=>{e=e.updateChild(s,o)}),e}function Gd(t,e,n,s,o,l,c,h){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let f=e,m;ye(n)?m=s:m=new Oe(null).setTree(n,s);const y=e.serverCache.getNode();return m.children.inorderTraversal((_,v)=>{if(y.hasChild(_)){const S=e.serverCache.getNode().getImmediateChild(_),N=hy(t,S,v);f=Pl(t,f,new Ne(_),N,o,l,c,h)}}),m.children.inorderTraversal((_,v)=>{const S=!e.serverCache.isCompleteForChild(_)&&v.value===null;if(!y.hasChild(_)&&!S){const N=e.serverCache.getNode().getImmediateChild(_),I=hy(t,N,v);f=Pl(t,f,new Ne(_),I,o,l,c,h)}}),f}function zx(t,e,n,s,o,l,c){if(Nl(o,n)!=null)return e;const h=e.serverCache.isFiltered(),f=e.serverCache;if(s.value!=null){if(ye(n)&&f.isFullyInitialized()||f.isCompleteForPath(n))return Pl(t,e,n,f.getNode().getChild(n),o,l,h,c);if(ye(n)){let m=new Oe(null);return f.getNode().forEachChild(Hi,(y,_)=>{m=m.set(new Ne(y),_)}),Gd(t,e,n,m,o,l,h,c)}else return e}else{let m=new Oe(null);return s.foreach((y,_)=>{const v=Be(n,y);f.isCompleteForPath(v)&&(m=m.set(y,f.getNode().getChild(v)))}),Gd(t,e,n,m,o,l,h,c)}}function $x(t,e,n,s,o){const l=e.serverCache,c=Ov(e,l.getNode(),l.isFullyInitialized()||ye(n),l.isFiltered());return $v(t,c,n,s,zv,o)}function Wx(t,e,n,s,o,l){let c;if(Nl(s,n)!=null)return e;{const h=new zh(s,e,o),f=e.eventCache.getNode();let m;if(ye(n)||me(n)===".priority"){let y;if(e.serverCache.isFullyInitialized())y=bl(s,oi(e));else{const _=e.serverCache.getNode();B(_ instanceof ue,"serverChildren would be complete if leaf node"),y=jh(s,_)}y=y,m=t.filter.updateFullNode(f,y,l)}else{const y=me(n);let _=Uh(s,y,e.serverCache);_==null&&e.serverCache.isCompleteForChild(y)&&(_=f.getImmediateChild(y)),_!=null?m=t.filter.updateChild(f,y,_,Le(n),h,l):e.eventCache.getNode().hasChild(y)?m=t.filter.updateChild(f,y,ue.EMPTY_NODE,Le(n),h,l):m=f,m.isEmpty()&&e.serverCache.isFullyInitialized()&&(c=bl(s,oi(e)),c.isLeafNode()&&(m=t.filter.updateFullNode(m,c,l)))}return c=e.serverCache.isFullyInitialized()||Nl(s,Te())!=null,yo(e,m,c,t.filter.filtersNodes())}}/**
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
 */class Bx{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,o=new Ah(s.getIndex()),l=ox(s);this.processor_=Lx(l);const c=n.serverCache,h=n.eventCache,f=o.updateFullNode(ue.EMPTY_NODE,c.getNode(),null),m=l.updateFullNode(ue.EMPTY_NODE,h.getNode(),null),y=new si(f,c.isFullyInitialized(),o.filtersNodes()),_=new si(m,h.isFullyInitialized(),l.filtersNodes());this.viewCache_=Zl(_,y),this.eventGenerator_=new px(this.query_)}get query(){return this.query_}}function Vx(t){return t.viewCache_.serverCache.getNode()}function Hx(t,e){const n=oi(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!ye(e)&&!n.getImmediateChild(me(e)).isEmpty())?n.getChild(e):null}function fy(t){return t.eventRegistrations_.length===0}function Gx(t,e){t.eventRegistrations_.push(e)}function py(t,e,n){const s=[];if(n){B(e==null,"A cancel should cancel all event registrations.");const o=t.query._path;t.eventRegistrations_.forEach(l=>{const c=l.createCancelEvent(n,o);c&&s.push(c)})}if(e){let o=[];for(let l=0;l<t.eventRegistrations_.length;++l){const c=t.eventRegistrations_[l];if(!c.matches(e))o.push(c);else if(e.hasAnyCallback()){o=o.concat(t.eventRegistrations_.slice(l+1));break}}t.eventRegistrations_=o}else t.eventRegistrations_=[];return s}function my(t,e,n,s){e.type===ln.MERGE&&e.source.queryId!==null&&(B(oi(t.viewCache_),"We should always have a full cache before handling merges"),B($d(t.viewCache_),"Missing event cache, even though we have a server cache"));const o=t.viewCache_,l=Fx(t.processor_,o,e,n,s);return Mx(t.processor_,l.viewCache),B(l.viewCache.serverCache.isFullyInitialized()||!o.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=l.viewCache,Wv(t,l.changes,l.viewCache.eventCache.getNode(),null)}function qx(t,e){const n=t.viewCache_.eventCache,s=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(Ve,(l,c)=>{s.push(Xi(l,c))}),n.isFullyInitialized()&&s.push(Av(n.getNode())),Wv(t,s,n.getNode(),e)}function Wv(t,e,n,s){const o=s?[s]:t.eventRegistrations_;return mx(t.eventGenerator_,e,n,o)}/**
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
 */let Al;class Kx{constructor(){this.views=new Map}}function Yx(t){B(!Al,"__referenceConstructor has already been defined"),Al=t}function Qx(){return B(Al,"Reference.ts has not been loaded"),Al}function Jx(t){return t.views.size===0}function $h(t,e,n,s){const o=e.source.queryId;if(o!==null){const l=t.views.get(o);return B(l!=null,"SyncTree gave us an op for an invalid query."),my(l,e,n,s)}else{let l=[];for(const c of t.views.values())l=l.concat(my(c,e,n,s));return l}}function Xx(t,e,n,s,o){const l=e._queryIdentifier,c=t.views.get(l);if(!c){let h=bl(n,o?s:null),f=!1;h?f=!0:s instanceof ue?(h=jh(n,s),f=!1):(h=ue.EMPTY_NODE,f=!1);const m=Zl(new si(h,f,!1),new si(s,o,!1));return new Bx(e,m)}return c}function Zx(t,e,n,s,o,l){const c=Xx(t,e,s,o,l);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,c),Gx(c,n),qx(c,n)}function eR(t,e,n,s){const o=e._queryIdentifier,l=[];let c=[];const h=Pr(t);if(o==="default")for(const[f,m]of t.views.entries())c=c.concat(py(m,n,s)),fy(m)&&(t.views.delete(f),m.query._queryParams.loadsAllData()||l.push(m.query));else{const f=t.views.get(o);f&&(c=c.concat(py(f,n,s)),fy(f)&&(t.views.delete(o),f.query._queryParams.loadsAllData()||l.push(f.query)))}return h&&!Pr(t)&&l.push(new(Qx())(e._repo,e._path)),{removed:l,events:c}}function Bv(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function Gi(t,e){let n=null;for(const s of t.views.values())n=n||Hx(s,e);return n}function Vv(t,e){if(e._queryParams.loadsAllData())return eu(t);{const s=e._queryIdentifier;return t.views.get(s)}}function Hv(t,e){return Vv(t,e)!=null}function Pr(t){return eu(t)!=null}function eu(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let Dl;function tR(t){B(!Dl,"__referenceConstructor has already been defined"),Dl=t}function nR(){return B(Dl,"Reference.ts has not been loaded"),Dl}let rR=1;class gy{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Oe(null),this.pendingWriteTree_=Px(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Gv(t,e,n,s,o){return vx(t.pendingWriteTree_,e,n,s,o),o?cs(t,new ii(Oh(),e,n)):[]}function iR(t,e,n,s){wx(t.pendingWriteTree_,e,n,s);const o=Oe.fromObject(n);return cs(t,new Zi(Oh(),e,o))}function Ir(t,e,n=!1){const s=Ex(t.pendingWriteTree_,e);if(Cx(t.pendingWriteTree_,e)){let l=new Oe(null);return s.snap!=null?l=l.set(Te(),!0):yt(s.children,c=>{l=l.set(new Ne(c),!0)}),cs(t,new Rl(s.path,l,n))}else return[]}function tu(t,e,n){return cs(t,new ii(Lh(),e,n))}function sR(t,e,n){const s=Oe.fromObject(n);return cs(t,new Zi(Lh(),e,s))}function oR(t,e){return cs(t,new bo(Lh(),e))}function aR(t,e,n){const s=Bh(t,n);if(s){const o=Vh(s),l=o.path,c=o.queryId,h=Lt(l,e),f=new bo(Mh(c),h);return Hh(t,l,f)}else return[]}function qd(t,e,n,s,o=!1){const l=e._path,c=t.syncPointTree_.get(l);let h=[];if(c&&(e._queryIdentifier==="default"||Hv(c,e))){const f=eR(c,e,n,s);Jx(c)&&(t.syncPointTree_=t.syncPointTree_.remove(l));const m=f.removed;if(h=f.events,!o){const y=m.findIndex(v=>v._queryParams.loadsAllData())!==-1,_=t.syncPointTree_.findOnPath(l,(v,S)=>Pr(S));if(y&&!_){const v=t.syncPointTree_.subtree(l);if(!v.isEmpty()){const S=cR(v);for(let N=0;N<S.length;++N){const I=S[N],A=I.query,z=Yv(t,I);t.listenProvider_.startListening(vo(A),Ol(t,A),z.hashFn,z.onComplete)}}}!_&&m.length>0&&!s&&(y?t.listenProvider_.stopListening(vo(e),null):m.forEach(v=>{const S=t.queryToTagMap.get(nu(v));t.listenProvider_.stopListening(vo(v),S)}))}dR(t,m)}return h}function lR(t,e,n,s){const o=Bh(t,s);if(o!=null){const l=Vh(o),c=l.path,h=l.queryId,f=Lt(c,e),m=new ii(Mh(h),f,n);return Hh(t,c,m)}else return[]}function uR(t,e,n,s){const o=Bh(t,s);if(o){const l=Vh(o),c=l.path,h=l.queryId,f=Lt(c,e),m=Oe.fromObject(n),y=new Zi(Mh(h),f,m);return Hh(t,c,y)}else return[]}function yy(t,e,n,s=!1){const o=e._path;let l=null,c=!1;t.syncPointTree_.foreachOnPath(o,(v,S)=>{const N=Lt(v,o);l=l||Gi(S,N),c=c||Pr(S)});let h=t.syncPointTree_.get(o);h?(c=c||Pr(h),l=l||Gi(h,Te())):(h=new Kx,t.syncPointTree_=t.syncPointTree_.set(o,h));let f;l!=null?f=!0:(f=!1,l=ue.EMPTY_NODE,t.syncPointTree_.subtree(o).foreachChild((S,N)=>{const I=Gi(N,Te());I&&(l=l.updateImmediateChild(S,I))}));const m=Hv(h,e);if(!m&&!e._queryParams.loadsAllData()){const v=nu(e);B(!t.queryToTagMap.has(v),"View does not exist, but we have a tag");const S=hR();t.queryToTagMap.set(v,S),t.tagToQueryMap.set(S,v)}const y=Fh(t.pendingWriteTree_,o);let _=Zx(h,e,n,y,l,f);if(!m&&!c&&!s){const v=Vv(h,e);_=_.concat(fR(t,e,v))}return _}function Wh(t,e,n){const o=t.pendingWriteTree_,l=t.syncPointTree_.findOnPath(e,(c,h)=>{const f=Lt(c,e),m=Gi(h,f);if(m)return m});return Fv(o,e,l,n,!0)}function cs(t,e){return qv(e,t.syncPointTree_,null,Fh(t.pendingWriteTree_,Te()))}function qv(t,e,n,s){if(ye(t.path))return Kv(t,e,n,s);{const o=e.get(Te());n==null&&o!=null&&(n=Gi(o,Te()));let l=[];const c=me(t.path),h=t.operationForChild(c),f=e.children.get(c);if(f&&h){const m=n?n.getImmediateChild(c):null,y=jv(s,c);l=l.concat(qv(h,f,m,y))}return o&&(l=l.concat($h(o,t,s,n))),l}}function Kv(t,e,n,s){const o=e.get(Te());n==null&&o!=null&&(n=Gi(o,Te()));let l=[];return e.children.inorderTraversal((c,h)=>{const f=n?n.getImmediateChild(c):null,m=jv(s,c),y=t.operationForChild(c);y&&(l=l.concat(Kv(y,h,f,m)))}),o&&(l=l.concat($h(o,t,s,n))),l}function Yv(t,e){const n=e.query,s=Ol(t,n);return{hashFn:()=>(Vx(e)||ue.EMPTY_NODE).hash(),onComplete:o=>{if(o==="ok")return s?aR(t,n._path,s):oR(t,n._path);{const l=iT(o,n);return qd(t,n,null,l)}}}}function Ol(t,e){const n=nu(e);return t.queryToTagMap.get(n)}function nu(t){return t._path.toString()+"$"+t._queryIdentifier}function Bh(t,e){return t.tagToQueryMap.get(e)}function Vh(t){const e=t.indexOf("$");return B(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new Ne(t.substr(0,e))}}function Hh(t,e,n){const s=t.syncPointTree_.get(e);B(s,"Missing sync point for query tag that we're tracking");const o=Fh(t.pendingWriteTree_,e);return $h(s,n,o,null)}function cR(t){return t.fold((e,n,s)=>{if(n&&Pr(n))return[eu(n)];{let o=[];return n&&(o=Bv(n)),yt(s,(l,c)=>{o=o.concat(c)}),o}})}function vo(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(nR())(t._repo,t._path):t}function dR(t,e){for(let n=0;n<e.length;++n){const s=e[n];if(!s._queryParams.loadsAllData()){const o=nu(s),l=t.queryToTagMap.get(o);t.queryToTagMap.delete(o),t.tagToQueryMap.delete(l)}}}function hR(){return rR++}function fR(t,e,n){const s=e._path,o=Ol(t,e),l=Yv(t,n),c=t.listenProvider_.startListening(vo(e),o,l.hashFn,l.onComplete),h=t.syncPointTree_.subtree(s);if(o)B(!Pr(h.value),"If we're adding a query, it shouldn't be shadowed");else{const f=h.fold((m,y,_)=>{if(!ye(m)&&y&&Pr(y))return[eu(y).query];{let v=[];return y&&(v=v.concat(Bv(y).map(S=>S.query))),yt(_,(S,N)=>{v=v.concat(N)}),v}});for(let m=0;m<f.length;++m){const y=f[m];t.listenProvider_.stopListening(vo(y),Ol(t,y))}}return c}/**
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
 */class Gh{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Gh(n)}node(){return this.node_}}class qh{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=Be(this.path_,e);return new qh(this.syncTree_,n)}node(){return Wh(this.syncTree_,this.path_)}}const pR=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},_y=function(t,e,n){if(!t||typeof t!="object")return t;if(B(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return mR(t[".sv"],e,n);if(typeof t[".sv"]=="object")return gR(t[".sv"],e);B(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},mR=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:B(!1,"Unexpected server value: "+t)}},gR=function(t,e,n){t.hasOwnProperty("increment")||B(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const s=t.increment;typeof s!="number"&&B(!1,"Unexpected increment value: "+s);const o=e.node();if(B(o!==null&&typeof o<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!o.isLeafNode())return s;const c=o.getValue();return typeof c!="number"?s:c+s},Qv=function(t,e,n,s){return Kh(e,new qh(n,t),s)},Jv=function(t,e,n){return Kh(t,new Gh(e),n)};function Kh(t,e,n){const s=t.getPriority().val(),o=_y(s,e.getImmediateChild(".priority"),n);let l;if(t.isLeafNode()){const c=t,h=_y(c.getValue(),e,n);return h!==c.getValue()||o!==c.getPriority().val()?new lt(h,ct(o)):t}else{const c=t;return l=c,o!==c.getPriority().val()&&(l=l.updatePriority(new lt(o))),c.forEachChild(Ve,(h,f)=>{const m=Kh(f,e.getImmediateChild(h),n);m!==f&&(l=l.updateImmediateChild(h,m))}),l}}/**
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
 */class Yh{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function Qh(t,e){let n=e instanceof Ne?e:new Ne(e),s=t,o=me(n);for(;o!==null;){const l=Qi(s.node.children,o)||{children:{},childCount:0};s=new Yh(o,s,l),n=Le(n),o=me(n)}return s}function ds(t){return t.node.value}function Xv(t,e){t.node.value=e,Kd(t)}function Zv(t){return t.node.childCount>0}function yR(t){return ds(t)===void 0&&!Zv(t)}function ru(t,e){yt(t.node.children,(n,s)=>{e(new Yh(n,t,s))})}function ew(t,e,n,s){n&&e(t),ru(t,o=>{ew(o,e,!0)})}function _R(t,e,n){let s=t.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function Uo(t){return new Ne(t.parent===null?t.name:Uo(t.parent)+"/"+t.name)}function Kd(t){t.parent!==null&&vR(t.parent,t.name,t)}function vR(t,e,n){const s=yR(n),o=Tn(t.node.children,e);s&&o?(delete t.node.children[e],t.node.childCount--,Kd(t)):!s&&!o&&(t.node.children[e]=n.node,t.node.childCount++,Kd(t))}/**
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
 */const wR=/[\[\].#$\/\u0000-\u001F\u007F]/,ER=/[\[\].#$\u0000-\u001F\u007F]/,Cd=10*1024*1024,Jh=function(t){return typeof t=="string"&&t.length!==0&&!wR.test(t)},tw=function(t){return typeof t=="string"&&t.length!==0&&!ER.test(t)},CR=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),tw(t)},kR=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!kh(t)||t&&typeof t=="object"&&Tn(t,".sv")},nw=function(t,e,n,s){s&&e===void 0||iu(ql(t,"value"),e,n)},iu=function(t,e,n){const s=n instanceof Ne?new jT(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Xr(s));if(typeof e=="function")throw new Error(t+"contains a function "+Xr(s)+" with contents = "+e.toString());if(kh(e))throw new Error(t+"contains "+e.toString()+" "+Xr(s));if(typeof e=="string"&&e.length>Cd/3&&Kl(e)>Cd)throw new Error(t+"contains a string greater than "+Cd+" utf8 bytes "+Xr(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let o=!1,l=!1;if(yt(e,(c,h)=>{if(c===".value")o=!0;else if(c!==".priority"&&c!==".sv"&&(l=!0,!Jh(c)))throw new Error(t+" contains an invalid key ("+c+") "+Xr(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);UT(s,c),iu(t,h,s),zT(s)}),o&&l)throw new Error(t+' contains ".value" child '+Xr(s)+" in addition to actual children.")}},SR=function(t,e){let n,s;for(n=0;n<e.length;n++){s=e[n];const l=Io(s);for(let c=0;c<l.length;c++)if(!(l[c]===".priority"&&c===l.length-1)){if(!Jh(l[c]))throw new Error(t+"contains an invalid key ("+l[c]+") in path "+s.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(FT);let o=null;for(n=0;n<e.length;n++){if(s=e[n],o!==null&&Qt(o,s))throw new Error(t+"contains a path "+o.toString()+" that is ancestor of another path "+s.toString());o=s}},IR=function(t,e,n,s){const o=ql(t,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(o+" must be an object containing the children to replace.");const l=[];yt(e,(c,h)=>{const f=new Ne(c);if(iu(o,h,Be(n,f)),Rh(f)===".priority"&&!kR(h))throw new Error(o+"contains an invalid value for '"+f.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");l.push(f)}),SR(o,l)},rw=function(t,e,n,s){if(!tw(n))throw new Error(ql(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},TR=function(t,e,n,s){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),rw(t,e,n)},Xh=function(t,e){if(me(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},xR=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Jh(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!CR(n))throw new Error(ql(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class RR{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function su(t,e){let n=null;for(let s=0;s<e.length;s++){const o=e[s],l=o.getPath();n!==null&&!bh(l,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:l}),n.events.push(o)}n&&t.eventLists_.push(n)}function iw(t,e,n){su(t,n),sw(t,s=>bh(s,e))}function hn(t,e,n){su(t,n),sw(t,s=>Qt(s,e)||Qt(e,s))}function sw(t,e){t.recursionDepth_++;let n=!0;for(let s=0;s<t.eventLists_.length;s++){const o=t.eventLists_[s];if(o){const l=o.path;e(l)?(bR(t.eventLists_[s]),t.eventLists_[s]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function bR(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const s=n.getEventRunner();mo&&gt("event: "+n.toString()),us(s)}}}/**
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
 */const NR="repo_interrupt",PR=25;class AR{constructor(e,n,s,o){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=o,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new RR,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=xl(),this.transactionQueueTree_=new Yh,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function DR(t,e,n){if(t.stats_=Th(t.repoInfo_),t.forceRestClient_||lT())t.server_=new Tl(t.repoInfo_,(s,o,l,c)=>{vy(t,s,o,l,c)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>wy(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{dt(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}t.persistentConnection_=new Wn(t.repoInfo_,e,(s,o,l,c)=>{vy(t,s,o,l,c)},s=>{wy(t,s)},s=>{OR(t,s)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(s=>{t.server_.refreshAuthToken(s)}),t.appCheckProvider_.addTokenChangeListener(s=>{t.server_.refreshAppCheckToken(s.token)}),t.statsReporter_=fT(t.repoInfo_,()=>new fx(t.stats_,t.server_)),t.infoData_=new lx,t.infoSyncTree_=new gy({startListening:(s,o,l,c)=>{let h=[];const f=t.infoData_.getNode(s._path);return f.isEmpty()||(h=tu(t.infoSyncTree_,s._path,f),setTimeout(()=>{c("ok")},0)),h},stopListening:()=>{}}),Zh(t,"connected",!1),t.serverSyncTree_=new gy({startListening:(s,o,l,c)=>(t.server_.listen(s,l,o,(h,f)=>{const m=c(h,f);hn(t.eventQueue_,s._path,m)}),[]),stopListening:(s,o)=>{t.server_.unlisten(s,o)}})}function ow(t){const n=t.infoData_.getNode(new Ne(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function ou(t){return pR({timestamp:ow(t)})}function vy(t,e,n,s,o){t.dataUpdateCount++;const l=new Ne(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let c=[];if(o)if(s){const f=vl(n,m=>ct(m));c=uR(t.serverSyncTree_,l,f,o)}else{const f=ct(n);c=lR(t.serverSyncTree_,l,f,o)}else if(s){const f=vl(n,m=>ct(m));c=sR(t.serverSyncTree_,l,f)}else{const f=ct(n);c=tu(t.serverSyncTree_,l,f)}let h=l;c.length>0&&(h=ts(t,l)),hn(t.eventQueue_,h,c)}function wy(t,e){Zh(t,"connected",e),e===!1&&FR(t)}function OR(t,e){yt(e,(n,s)=>{Zh(t,n,s)})}function Zh(t,e,n){const s=new Ne("/.info/"+e),o=ct(n);t.infoData_.updateSnapshot(s,o);const l=tu(t.infoSyncTree_,s,o);hn(t.eventQueue_,s,l)}function ef(t){return t.nextWriteId_++}function LR(t,e,n,s,o){au(t,"set",{path:e.toString(),value:n,priority:s});const l=ou(t),c=ct(n,s),h=Wh(t.serverSyncTree_,e),f=Jv(c,h,l),m=ef(t),y=Gv(t.serverSyncTree_,e,f,m,!0);su(t.eventQueue_,y),t.server_.put(e.toString(),c.val(!0),(v,S)=>{const N=v==="ok";N||xt("set at "+e+" failed: "+v);const I=Ir(t.serverSyncTree_,m,!N);hn(t.eventQueue_,e,I),Yd(t,o,v,S)});const _=nf(t,e);ts(t,_),hn(t.eventQueue_,_,[])}function MR(t,e,n,s){au(t,"update",{path:e.toString(),value:n});let o=!0;const l=ou(t),c={};if(yt(n,(h,f)=>{o=!1,c[h]=Qv(Be(e,h),ct(f),t.serverSyncTree_,l)}),o)gt("update() called with empty data.  Don't do anything."),Yd(t,s,"ok",void 0);else{const h=ef(t),f=iR(t.serverSyncTree_,e,c,h);su(t.eventQueue_,f),t.server_.merge(e.toString(),n,(m,y)=>{const _=m==="ok";_||xt("update at "+e+" failed: "+m);const v=Ir(t.serverSyncTree_,h,!_),S=v.length>0?ts(t,e):e;hn(t.eventQueue_,S,v),Yd(t,s,m,y)}),yt(n,m=>{const y=nf(t,Be(e,m));ts(t,y)}),hn(t.eventQueue_,e,[])}}function FR(t){au(t,"onDisconnectEvents");const e=ou(t),n=xl();zd(t.onDisconnect_,Te(),(o,l)=>{const c=Qv(o,l,t.serverSyncTree_,e);Dv(n,o,c)});let s=[];zd(n,Te(),(o,l)=>{s=s.concat(tu(t.serverSyncTree_,o,l));const c=nf(t,o);ts(t,c)}),t.onDisconnect_=xl(),hn(t.eventQueue_,Te(),s)}function jR(t,e,n){let s;me(e._path)===".info"?s=yy(t.infoSyncTree_,e,n):s=yy(t.serverSyncTree_,e,n),iw(t.eventQueue_,e._path,s)}function UR(t,e,n){let s;me(e._path)===".info"?s=qd(t.infoSyncTree_,e,n):s=qd(t.serverSyncTree_,e,n),iw(t.eventQueue_,e._path,s)}function zR(t){t.persistentConnection_&&t.persistentConnection_.interrupt(NR)}function au(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),gt(n,...e)}function Yd(t,e,n,s){e&&us(()=>{if(n==="ok")e(null);else{const o=(n||"error").toUpperCase();let l=o;s&&(l+=": "+s);const c=new Error(l);c.code=o,e(c)}})}function aw(t,e,n){return Wh(t.serverSyncTree_,e,n)||ue.EMPTY_NODE}function tf(t,e=t.transactionQueueTree_){if(e||lu(t,e),ds(e)){const n=uw(t,e);B(n.length>0,"Sending zero length transaction queue"),n.every(o=>o.status===0)&&$R(t,Uo(e),n)}else Zv(e)&&ru(e,n=>{tf(t,n)})}function $R(t,e,n){const s=n.map(m=>m.currentWriteId),o=aw(t,e,s);let l=o;const c=o.hash();for(let m=0;m<n.length;m++){const y=n[m];B(y.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),y.status=1,y.retryCount++;const _=Lt(e,y.path);l=l.updateChild(_,y.currentOutputSnapshotRaw)}const h=l.val(!0),f=e;t.server_.put(f.toString(),h,m=>{au(t,"transaction put response",{path:f.toString(),status:m});let y=[];if(m==="ok"){const _=[];for(let v=0;v<n.length;v++)n[v].status=2,y=y.concat(Ir(t.serverSyncTree_,n[v].currentWriteId)),n[v].onComplete&&_.push(()=>n[v].onComplete(null,!0,n[v].currentOutputSnapshotResolved)),n[v].unwatcher();lu(t,Qh(t.transactionQueueTree_,e)),tf(t,t.transactionQueueTree_),hn(t.eventQueue_,e,y);for(let v=0;v<_.length;v++)us(_[v])}else{if(m==="datastale")for(let _=0;_<n.length;_++)n[_].status===3?n[_].status=4:n[_].status=0;else{xt("transaction at "+f.toString()+" failed: "+m);for(let _=0;_<n.length;_++)n[_].status=4,n[_].abortReason=m}ts(t,e)}},c)}function ts(t,e){const n=lw(t,e),s=Uo(n),o=uw(t,n);return WR(t,o,s),s}function WR(t,e,n){if(e.length===0)return;const s=[];let o=[];const c=e.filter(h=>h.status===0).map(h=>h.currentWriteId);for(let h=0;h<e.length;h++){const f=e[h],m=Lt(n,f.path);let y=!1,_;if(B(m!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),f.status===4)y=!0,_=f.abortReason,o=o.concat(Ir(t.serverSyncTree_,f.currentWriteId,!0));else if(f.status===0)if(f.retryCount>=PR)y=!0,_="maxretry",o=o.concat(Ir(t.serverSyncTree_,f.currentWriteId,!0));else{const v=aw(t,f.path,c);f.currentInputSnapshot=v;const S=e[h].update(v.val());if(S!==void 0){iu("transaction failed: Data returned ",S,f.path);let N=ct(S);typeof S=="object"&&S!=null&&Tn(S,".priority")||(N=N.updatePriority(v.getPriority()));const A=f.currentWriteId,z=ou(t),X=Jv(N,v,z);f.currentOutputSnapshotRaw=N,f.currentOutputSnapshotResolved=X,f.currentWriteId=ef(t),c.splice(c.indexOf(A),1),o=o.concat(Gv(t.serverSyncTree_,f.path,X,f.currentWriteId,f.applyLocally)),o=o.concat(Ir(t.serverSyncTree_,A,!0))}else y=!0,_="nodata",o=o.concat(Ir(t.serverSyncTree_,f.currentWriteId,!0))}hn(t.eventQueue_,n,o),o=[],y&&(e[h].status=2,(function(v){setTimeout(v,Math.floor(0))})(e[h].unwatcher),e[h].onComplete&&(_==="nodata"?s.push(()=>e[h].onComplete(null,!1,e[h].currentInputSnapshot)):s.push(()=>e[h].onComplete(new Error(_),!1,null))))}lu(t,t.transactionQueueTree_);for(let h=0;h<s.length;h++)us(s[h]);tf(t,t.transactionQueueTree_)}function lw(t,e){let n,s=t.transactionQueueTree_;for(n=me(e);n!==null&&ds(s)===void 0;)s=Qh(s,n),e=Le(e),n=me(e);return s}function uw(t,e){const n=[];return cw(t,e,n),n.sort((s,o)=>s.order-o.order),n}function cw(t,e,n){const s=ds(e);if(s)for(let o=0;o<s.length;o++)n.push(s[o]);ru(e,o=>{cw(t,o,n)})}function lu(t,e){const n=ds(e);if(n){let s=0;for(let o=0;o<n.length;o++)n[o].status!==2&&(n[s]=n[o],s++);n.length=s,Xv(e,n.length>0?n:void 0)}ru(e,s=>{lu(t,s)})}function nf(t,e){const n=Uo(lw(t,e)),s=Qh(t.transactionQueueTree_,e);return _R(s,o=>{kd(t,o)}),kd(t,s),ew(s,o=>{kd(t,o)}),n}function kd(t,e){const n=ds(e);if(n){const s=[];let o=[],l=-1;for(let c=0;c<n.length;c++)n[c].status===3||(n[c].status===1?(B(l===c-1,"All SENT items should be at beginning of queue."),l=c,n[c].status=3,n[c].abortReason="set"):(B(n[c].status===0,"Unexpected transaction status in abort"),n[c].unwatcher(),o=o.concat(Ir(t.serverSyncTree_,n[c].currentWriteId,!0)),n[c].onComplete&&s.push(n[c].onComplete.bind(null,new Error("set"),!1,null))));l===-1?Xv(e,void 0):n.length=l+1,hn(t.eventQueue_,Uo(e),o);for(let c=0;c<s.length;c++)us(s[c])}}/**
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
 */function BR(t){let e="";const n=t.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let o=n[s];try{o=decodeURIComponent(o.replace(/\+/g," "))}catch{}e+="/"+o}return e}function VR(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):xt(`Invalid query segment '${n}' in query '${t}'`)}return e}const Ey=function(t,e){const n=HR(t),s=n.namespace;n.domain==="firebase.com"&&Gn(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&Gn("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||Z1();const o=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new gv(n.host,n.secure,s,o,e,"",s!==n.subdomain),path:new Ne(n.pathString)}},HR=function(t){let e="",n="",s="",o="",l="",c=!0,h="https",f=443;if(typeof t=="string"){let m=t.indexOf("//");m>=0&&(h=t.substring(0,m-1),t=t.substring(m+2));let y=t.indexOf("/");y===-1&&(y=t.length);let _=t.indexOf("?");_===-1&&(_=t.length),e=t.substring(0,Math.min(y,_)),y<_&&(o=BR(t.substring(y,_)));const v=VR(t.substring(Math.min(t.length,_)));m=e.indexOf(":"),m>=0?(c=h==="https"||h==="wss",f=parseInt(e.substring(m+1),10)):m=e.length;const S=e.slice(0,m);if(S.toLowerCase()==="localhost")n="localhost";else if(S.split(".").length<=2)n=S;else{const N=e.indexOf(".");s=e.substring(0,N).toLowerCase(),n=e.substring(N+1),l=s}"ns"in v&&(l=v.ns)}return{host:e,port:f,domain:n,subdomain:s,secure:c,scheme:h,pathString:o,namespace:l}};/**
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
 */const Cy="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",GR=(function(){let t=0;const e=[];return function(n){const s=n===t;t=n;let o;const l=new Array(8);for(o=7;o>=0;o--)l[o]=Cy.charAt(n%64),n=Math.floor(n/64);B(n===0,"Cannot push at time == 0");let c=l.join("");if(s){for(o=11;o>=0&&e[o]===63;o--)e[o]=0;e[o]++}else for(o=0;o<12;o++)e[o]=Math.floor(Math.random()*64);for(o=0;o<12;o++)c+=Cy.charAt(e[o]);return B(c.length===20,"nextPushId: Length should be 20."),c}})();/**
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
 */class qR{constructor(e,n,s,o){this.eventType=e,this.eventRegistration=n,this.snapshot=s,this.prevName=o}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+dt(this.snapshot.exportVal())}}class KR{constructor(e,n,s){this.eventRegistration=e,this.error=n,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class YR{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return B(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class uu{constructor(e,n,s,o){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=o}get key(){return ye(this._path)?null:Rh(this._path)}get ref(){return new Ar(this._repo,this._path)}get _queryIdentifier(){const e=oy(this._queryParams),n=Sh(e);return n==="{}"?"default":n}get _queryObject(){return oy(this._queryParams)}isEqual(e){if(e=tt(e),!(e instanceof uu))return!1;const n=this._repo===e._repo,s=bh(this._path,e._path),o=this._queryIdentifier===e._queryIdentifier;return n&&s&&o}toJSON(){return this.toString()}toString(){return this._repo.toString()+MT(this._path)}}class Ar extends uu{constructor(e,n){super(e,n,new Dh,!1)}get parent(){const e=Iv(this._path);return e===null?null:new Ar(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Ll{constructor(e,n,s){this._node=e,this.ref=n,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new Ne(e),s=No(this.ref,e);return new Ll(this._node.getChild(n),s,Ve)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,o)=>e(new Ll(o,No(this.ref,s),Ve)))}hasChild(e){const n=new Ne(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function ve(t,e){return t=tt(t),t._checkNotDeleted("ref"),e!==void 0?No(t._root,e):t._root}function No(t,e){return t=tt(t),me(t._path)===null?TR("child","path",e):rw("child","path",e),new Ar(t._repo,Be(t._path,e))}function gr(t,e){t=tt(t),Xh("push",t._path),nw("push",e,t._path,!0);const n=ow(t._repo),s=GR(n),o=No(t,s),l=No(t,s);let c;return e!=null?c=dw(l,e).then(()=>l):c=Promise.resolve(l),o.then=c.then.bind(c),o.catch=c.then.bind(c,void 0),o}function Mn(t){return Xh("remove",t._path),dw(t,null)}function dw(t,e){t=tt(t),Xh("set",t._path),nw("set",e,t._path,!1);const n=new Lo;return LR(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function yr(t,e){IR("update",e,t._path);const n=new Lo;return MR(t._repo,t._path,e,n.wrapCallback(()=>{})),n.promise}class rf{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const s=n._queryParams.getIndex();return new qR("value",this,new Ll(e.snapshotNode,new Ar(n._repo,n._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new KR(this,e,n):null}matches(e){return e instanceof rf?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function QR(t,e,n,s,o){const l=new YR(n,void 0),c=new rf(l);return jR(t._repo,t,c),()=>UR(t._repo,t,c)}function _r(t,e,n,s){return QR(t,"value",e)}class JR{}class XR extends JR{constructor(e){super(),this._limit=e,this.type="limitToLast"}_apply(e){if(e._queryParams.hasLimit())throw new Error("limitToLast: Limit was already set (by another call to limitToFirst or limitToLast).");return new uu(e._repo,e._path,ax(e._queryParams,this._limit),e._orderByCalled)}}function lo(t){if(Math.floor(t)!==t||t<=0)throw new Error("limitToLast: First argument must be a positive integer.");return new XR(t)}function uo(t,...e){let n=tt(t);for(const s of e)n=s._apply(n);return n}Yx(Ar);tR(Ar);/**
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
 */const ZR="FIREBASE_DATABASE_EMULATOR_HOST",Qd={};let eb=!1;function tb(t,e,n,s){const o=e.lastIndexOf(":"),l=e.substring(0,o),c=os(l);t.repoInfo_=new gv(e,c,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0,n),s&&(t.authTokenProvider_=s)}function nb(t,e,n,s,o){let l=s||t.options.databaseURL;l===void 0&&(t.options.projectId||Gn("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),gt("Using default host for project ",t.options.projectId),l=`${t.options.projectId}-default-rtdb.firebaseio.com`);let c=Ey(l,o),h=c.repoInfo,f;typeof process<"u"&&Wg&&(f=Wg[ZR]),f?(l=`http://${f}?ns=${h.namespace}`,c=Ey(l,o),h=c.repoInfo):c.repoInfo.secure;const m=new cT(t.name,t.options,e);xR("Invalid Firebase Database URL",c),ye(c.path)||Gn("Database URL must point to the root of a Firebase Database (not including a child path).");const y=ib(h,t,m,new uT(t,n));return new sb(y,t)}function rb(t,e){const n=Qd[e];(!n||n[t.key]!==t)&&Gn(`Database ${e}(${t.repoInfo_}) has already been deleted.`),zR(t),delete n[t.key]}function ib(t,e,n,s){let o=Qd[e.name];o||(o={},Qd[e.name]=o);let l=o[t.toURLString()];return l&&Gn("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),l=new AR(t,eb,n,s),o[t.toURLString()]=l,l}class sb{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(DR(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Ar(this._repo,Te())),this._rootInternal}_delete(){return this._rootInternal!==null&&(rb(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Gn("Cannot call "+e+" on a deleted database.")}}function ob(t=gh(),e){const n=ci(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const s=Yk("database");s&&ab(n,...s)}return n}function ab(t,e,n,s={}){t=tt(t),t._checkNotDeleted("useEmulator");const o=`${e}:${n}`,l=t._repoInternal;if(t._instanceStarted){if(o===t._repoInternal.repoInfo_.host&&br(s,l.repoInfo_.emulatorOptions))return;Gn("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let c;if(l.repoInfo_.nodeAdmin)s.mockUserToken&&Gn('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),c=new dl(dl.OWNER);else if(s.mockUserToken){const h=typeof s.mockUserToken=="string"?s.mockUserToken:Qk(s.mockUserToken,t.app.options.projectId);c=new dl(h)}os(e)&&(C_(e),k_("Database",!0)),tb(l,o,s,c)}/**
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
 */function lb(t){q1(ls),Sn(new dn("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),o=e.getProvider("auth-internal"),l=e.getProvider("app-check-internal");return nb(s,o,l,n)},"PUBLIC").setMultipleInstances(!0)),Jt(Bg,Vg,t),Jt(Bg,Vg,"esm2020")}Wn.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Wn.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};lb();function hw(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const ub=hw,fw=new ui("auth","Firebase",hw());/**
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
 */const Ml=new Yl("@firebase/auth");function cb(t,...e){Ml.logLevel<=be.WARN&&Ml.warn(`Auth (${ls}): ${t}`,...e)}function hl(t,...e){Ml.logLevel<=be.ERROR&&Ml.error(`Auth (${ls}): ${t}`,...e)}/**
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
 */function fn(t,...e){throw sf(t,...e)}function Cn(t,...e){return sf(t,...e)}function pw(t,e,n){const s={...ub(),[e]:n};return new ui("auth","Firebase",s).create(e,{appName:t.name})}function Bn(t){return pw(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function sf(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return fw.create(t,...e)}function le(t,e,...n){if(!t)throw sf(e,...n)}function Un(t){const e="INTERNAL ASSERTION FAILED: "+t;throw hl(e),new Error(e)}function qn(t,e){t||Un(e)}/**
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
 */function Jd(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.href)||""}function db(){return ky()==="http:"||ky()==="https:"}function ky(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.protocol)||null}/**
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
 */function hb(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(db()||S_()||"connection"in navigator)?navigator.onLine:!0}function fb(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class zo{constructor(e,n){this.shortDelay=e,this.longDelay=n,qn(n>e,"Short delay should be less than long delay!"),this.isMobile=ph()||I_()}get(){return hb()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function of(t,e){qn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class mw{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Un("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Un("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Un("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const pb={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const mb=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],gb=new zo(3e4,6e4);function Dr(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function Or(t,e,n,s,o={}){return gw(t,o,async()=>{let l={},c={};s&&(e==="GET"?c=s:l={body:JSON.stringify(s)});const h=as({key:t.config.apiKey,...c}).slice(1),f=await t._getAdditionalHeaders();f["Content-Type"]="application/json",t.languageCode&&(f["X-Firebase-Locale"]=t.languageCode);const m={method:e,headers:f,...l};return Zk()||(m.referrerPolicy="no-referrer"),t.emulatorConfig&&os(t.emulatorConfig.host)&&(m.credentials="include"),mw.fetch()(await yw(t,t.config.apiHost,n,h),m)})}async function gw(t,e,n){t._canInitEmulator=!1;const s={...pb,...e};try{const o=new _b(t),l=await Promise.race([n(),o.promise]);o.clearNetworkTimeout();const c=await l.json();if("needConfirmation"in c)throw sl(t,"account-exists-with-different-credential",c);if(l.ok&&!("errorMessage"in c))return c;{const h=l.ok?c.errorMessage:c.error.message,[f,m]=h.split(" : ");if(f==="FEDERATED_USER_ID_ALREADY_LINKED")throw sl(t,"credential-already-in-use",c);if(f==="EMAIL_EXISTS")throw sl(t,"email-already-in-use",c);if(f==="USER_DISABLED")throw sl(t,"user-disabled",c);const y=s[f]||f.toLowerCase().replace(/[_\s]+/g,"-");if(m)throw pw(t,y,m);fn(t,y)}}catch(o){if(o instanceof In)throw o;fn(t,"network-request-failed",{message:String(o)})}}async function $o(t,e,n,s,o={}){const l=await Or(t,e,n,s,o);return"mfaPendingCredential"in l&&fn(t,"multi-factor-auth-required",{_serverResponse:l}),l}async function yw(t,e,n,s){const o=`${e}${n}?${s}`,l=t,c=l.config.emulator?of(t.config,o):`${t.config.apiScheme}://${o}`;return mb.includes(n)&&(await l._persistenceManagerAvailable,l._getPersistenceType()==="COOKIE")?l._getPersistence()._getFinalTarget(c).toString():c}function yb(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class _b{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(Cn(this.auth,"network-request-failed")),gb.get())})}}function sl(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const o=Cn(t,e,s);return o.customData._tokenResponse=n,o}function Sy(t){return t!==void 0&&t.enterprise!==void 0}class vb{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return yb(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function wb(t,e){return Or(t,"GET","/v2/recaptchaConfig",Dr(t,e))}/**
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
 */async function Eb(t,e){return Or(t,"POST","/v1/accounts:delete",e)}async function Fl(t,e){return Or(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function wo(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Cb(t,e=!1){const n=tt(t),s=await n.getIdToken(e),o=af(s);le(o&&o.exp&&o.auth_time&&o.iat,n.auth,"internal-error");const l=typeof o.firebase=="object"?o.firebase:void 0,c=l==null?void 0:l.sign_in_provider;return{claims:o,token:s,authTime:wo(Sd(o.auth_time)),issuedAtTime:wo(Sd(o.iat)),expirationTime:wo(Sd(o.exp)),signInProvider:c||null,signInSecondFactor:(l==null?void 0:l.sign_in_second_factor)||null}}function Sd(t){return Number(t)*1e3}function af(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return hl("JWT malformed, contained fewer than 3 sections"),null;try{const o=_l(n);return o?JSON.parse(o):(hl("Failed to decode base64 JWT payload"),null)}catch(o){return hl("Caught error parsing JWT payload as JSON",o==null?void 0:o.toString()),null}}function Iy(t){const e=af(t);return le(e,"internal-error"),le(typeof e.exp<"u","internal-error"),le(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Po(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof In&&kb(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function kb({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class Sb{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const s=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Xd{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=wo(this.lastLoginAt),this.creationTime=wo(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function jl(t){var _;const e=t.auth,n=await t.getIdToken(),s=await Po(t,Fl(e,{idToken:n}));le(s==null?void 0:s.users.length,e,"internal-error");const o=s.users[0];t._notifyReloadListener(o);const l=(_=o.providerUserInfo)!=null&&_.length?_w(o.providerUserInfo):[],c=Tb(t.providerData,l),h=t.isAnonymous,f=!(t.email&&o.passwordHash)&&!(c!=null&&c.length),m=h?f:!1,y={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:c,metadata:new Xd(o.createdAt,o.lastLoginAt),isAnonymous:m};Object.assign(t,y)}async function Ib(t){const e=tt(t);await jl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Tb(t,e){return[...t.filter(s=>!e.some(o=>o.providerId===s.providerId)),...e]}function _w(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
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
 */async function xb(t,e){const n=await gw(t,{},async()=>{const s=as({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:l}=t.config,c=await yw(t,o,"/v1/token",`key=${l}`),h=await t._getAdditionalHeaders();h["Content-Type"]="application/x-www-form-urlencoded";const f={method:"POST",headers:h,body:s};return t.emulatorConfig&&os(t.emulatorConfig.host)&&(f.credentials="include"),mw.fetch()(c,f)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function Rb(t,e){return Or(t,"POST","/v2/accounts:revokeToken",Dr(t,e))}/**
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
 */class qi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){le(e.idToken,"internal-error"),le(typeof e.idToken<"u","internal-error"),le(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Iy(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){le(e.length!==0,"internal-error");const n=Iy(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(le(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:o,expiresIn:l}=await xb(e,n);this.updateTokensAndExpiration(s,o,Number(l))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:o,expirationTime:l}=n,c=new qi;return s&&(le(typeof s=="string","internal-error",{appName:e}),c.refreshToken=s),o&&(le(typeof o=="string","internal-error",{appName:e}),c.accessToken=o),l&&(le(typeof l=="number","internal-error",{appName:e}),c.expirationTime=l),c}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new qi,this.toJSON())}_performRefresh(){return Un("not implemented")}}/**
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
 */function vr(t,e){le(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class un{constructor({uid:e,auth:n,stsTokenManager:s,...o}){this.providerId="firebase",this.proactiveRefresh=new Sb(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new Xd(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){const n=await Po(this,this.stsTokenManager.getToken(this.auth,e));return le(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Cb(this,e)}reload(){return Ib(this)}_assign(e){this!==e&&(le(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new un({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){le(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await jl(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Yt(this.auth.app))return Promise.reject(Bn(this.auth));const e=await this.getIdToken();return await Po(this,Eb(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const s=n.displayName??void 0,o=n.email??void 0,l=n.phoneNumber??void 0,c=n.photoURL??void 0,h=n.tenantId??void 0,f=n._redirectEventId??void 0,m=n.createdAt??void 0,y=n.lastLoginAt??void 0,{uid:_,emailVerified:v,isAnonymous:S,providerData:N,stsTokenManager:I}=n;le(_&&I,e,"internal-error");const A=qi.fromJSON(this.name,I);le(typeof _=="string",e,"internal-error"),vr(s,e.name),vr(o,e.name),le(typeof v=="boolean",e,"internal-error"),le(typeof S=="boolean",e,"internal-error"),vr(l,e.name),vr(c,e.name),vr(h,e.name),vr(f,e.name),vr(m,e.name),vr(y,e.name);const z=new un({uid:_,auth:e,email:o,emailVerified:v,displayName:s,isAnonymous:S,photoURL:c,phoneNumber:l,tenantId:h,stsTokenManager:A,createdAt:m,lastLoginAt:y});return N&&Array.isArray(N)&&(z.providerData=N.map(X=>({...X}))),f&&(z._redirectEventId=f),z}static async _fromIdTokenResponse(e,n,s=!1){const o=new qi;o.updateFromServerResponse(n);const l=new un({uid:n.localId,auth:e,stsTokenManager:o,isAnonymous:s});return await jl(l),l}static async _fromGetAccountInfoResponse(e,n,s){const o=n.users[0];le(o.localId!==void 0,"internal-error");const l=o.providerUserInfo!==void 0?_w(o.providerUserInfo):[],c=!(o.email&&o.passwordHash)&&!(l!=null&&l.length),h=new qi;h.updateFromIdToken(s);const f=new un({uid:o.localId,auth:e,stsTokenManager:h,isAnonymous:c}),m={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:l,metadata:new Xd(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!(l!=null&&l.length)};return Object.assign(f,m),f}}/**
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
 */const Ty=new Map;function zn(t){qn(t instanceof Function,"Expected a class definition");let e=Ty.get(t);return e?(qn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Ty.set(t,e),e)}/**
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
 */class vw{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}vw.type="NONE";const xy=vw;/**
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
 */function fl(t,e,n){return`firebase:${t}:${e}:${n}`}class Ki{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:o,name:l}=this.auth;this.fullUserKey=fl(this.userKey,o.apiKey,l),this.fullPersistenceKey=fl("persistence",o.apiKey,l),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await Fl(this.auth,{idToken:e}).catch(()=>{});return n?un._fromGetAccountInfoResponse(this.auth,n,e):null}return un._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new Ki(zn(xy),e,s);const o=(await Promise.all(n.map(async m=>{if(await m._isAvailable())return m}))).filter(m=>m);let l=o[0]||zn(xy);const c=fl(s,e.config.apiKey,e.name);let h=null;for(const m of n)try{const y=await m._get(c);if(y){let _;if(typeof y=="string"){const v=await Fl(e,{idToken:y}).catch(()=>{});if(!v)break;_=await un._fromGetAccountInfoResponse(e,v,y)}else _=un._fromJSON(e,y);m!==l&&(h=_),l=m;break}}catch{}const f=o.filter(m=>m._shouldAllowMigration);return!l._shouldAllowMigration||!f.length?new Ki(l,e,s):(l=f[0],h&&await l._set(c,h.toJSON()),await Promise.all(n.map(async m=>{if(m!==l)try{await m._remove(c)}catch{}})),new Ki(l,e,s))}}/**
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
 */function Ry(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(kw(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(ww(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Iw(e))return"Blackberry";if(Tw(e))return"Webos";if(Ew(e))return"Safari";if((e.includes("chrome/")||Cw(e))&&!e.includes("edge/"))return"Chrome";if(Sw(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function ww(t=Rt()){return/firefox\//i.test(t)}function Ew(t=Rt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Cw(t=Rt()){return/crios\//i.test(t)}function kw(t=Rt()){return/iemobile/i.test(t)}function Sw(t=Rt()){return/android/i.test(t)}function Iw(t=Rt()){return/blackberry/i.test(t)}function Tw(t=Rt()){return/webos/i.test(t)}function lf(t=Rt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function bb(t=Rt()){var e;return lf(t)&&!!((e=window.navigator)!=null&&e.standalone)}function Nb(){return eS()&&document.documentMode===10}function xw(t=Rt()){return lf(t)||Sw(t)||Tw(t)||Iw(t)||/windows phone/i.test(t)||kw(t)}/**
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
 */function Rw(t,e=[]){let n;switch(t){case"Browser":n=Ry(Rt());break;case"Worker":n=`${Ry(Rt())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ls}/${s}`}/**
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
 */class Pb{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=l=>new Promise((c,h)=>{try{const f=e(l);c(f)}catch(f){h(f)}});s.onAbort=n,this.queue.push(s);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const o of n)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */async function Ab(t,e={}){return Or(t,"GET","/v2/passwordPolicy",Dr(t,e))}/**
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
 */const Db=6;class Ob{constructor(e){var s;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??Db,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((s=e.allowedNonAlphanumericCharacters)==null?void 0:s.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const s=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;s&&(n.meetsMinPasswordLength=e.length>=s),o&&(n.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let s;for(let o=0;o<e.length;o++)s=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(n,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,n,s,o,l){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=l))}}/**
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
 */class Lb{constructor(e,n,s,o){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new by(this),this.idTokenSubscription=new by(this),this.beforeStateQueue=new Pb(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=fw,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion,this._persistenceManagerAvailable=new Promise(l=>this._resolvePersistenceManagerAvailable=l)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=zn(n)),this._initializationPromise=this.queue(async()=>{var s,o,l;if(!this._deleted&&(this.persistenceManager=await Ki.create(this,e),(s=this._resolvePersistenceManagerAvailable)==null||s.call(this),!this._deleted)){if((o=this._popupRedirectResolver)!=null&&o._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((l=this.currentUser)==null?void 0:l.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Fl(this,{idToken:e}),s=await un._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(s)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var l;if(Yt(this.app)){const c=this.app.settings.authIdToken;return c?new Promise(h=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(c).then(h,h))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let s=n,o=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const c=(l=this.redirectUser)==null?void 0:l._redirectEventId,h=s==null?void 0:s._redirectEventId,f=await this.tryRedirectSignIn(e);(!c||c===h)&&(f!=null&&f.user)&&(s=f.user,o=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(s)}catch(c){s=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(c))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return le(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await jl(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=fb()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Yt(this.app))return Promise.reject(Bn(this));const n=e?tt(e):null;return n&&le(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&le(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Yt(this.app)?Promise.reject(Bn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Yt(this.app)?Promise.reject(Bn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(zn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Ab(this),n=new Ob(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new ui("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(s.tenantId=this.tenantId),await Rb(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&zn(e)||this._popupRedirectResolver;le(n,this,"argument-error"),this.redirectPersistenceManager=await Ki.create(this,[zn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)==null?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,o){if(this._deleted)return()=>{};const l=typeof n=="function"?n:n.next.bind(n);let c=!1;const h=this._isInitialized?Promise.resolve():this._initializationPromise;if(le(h,this,"internal-error"),h.then(()=>{c||l(this.currentUser)}),typeof n=="function"){const f=e.addObserver(n,s,o);return()=>{c=!0,f()}}else{const f=e.addObserver(n);return()=>{c=!0,f()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return le(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Rw(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var o;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((o=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:o.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const s=await this._getAppCheckToken();return s&&(e["X-Firebase-AppCheck"]=s),e}async _getAppCheckToken(){var n;if(Yt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&cb(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function fi(t){return tt(t)}class by{constructor(e){this.auth=e,this.observer=null,this.addObserver=uS(n=>this.observer=n)}get next(){return le(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let cu={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Mb(t){cu=t}function bw(t){return cu.loadJS(t)}function Fb(){return cu.recaptchaEnterpriseScript}function jb(){return cu.gapiScript}function Ub(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class zb{constructor(){this.enterprise=new $b}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class $b{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const Wb="recaptcha-enterprise",Nw="NO_RECAPTCHA";class Bb{constructor(e){this.type=Wb,this.auth=fi(e)}async verify(e="verify",n=!1){async function s(l){if(!n){if(l.tenantId==null&&l._agentRecaptchaConfig!=null)return l._agentRecaptchaConfig.siteKey;if(l.tenantId!=null&&l._tenantRecaptchaConfigs[l.tenantId]!==void 0)return l._tenantRecaptchaConfigs[l.tenantId].siteKey}return new Promise(async(c,h)=>{wb(l,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(f=>{if(f.recaptchaKey===void 0)h(new Error("recaptcha Enterprise site key undefined"));else{const m=new vb(f);return l.tenantId==null?l._agentRecaptchaConfig=m:l._tenantRecaptchaConfigs[l.tenantId]=m,c(m.siteKey)}}).catch(f=>{h(f)})})}function o(l,c,h){const f=window.grecaptcha;Sy(f)?f.enterprise.ready(()=>{f.enterprise.execute(l,{action:e}).then(m=>{c(m)}).catch(()=>{c(Nw)})}):h(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new zb().execute("siteKey",{action:"verify"}):new Promise((l,c)=>{s(this.auth).then(h=>{if(!n&&Sy(window.grecaptcha))o(h,l,c);else{if(typeof window>"u"){c(new Error("RecaptchaVerifier is only supported in browser"));return}let f=Fb();f.length!==0&&(f+=h),bw(f).then(()=>{o(h,l,c)}).catch(m=>{c(m)})}}).catch(h=>{c(h)})})}}async function Ny(t,e,n,s=!1,o=!1){const l=new Bb(t);let c;if(o)c=Nw;else try{c=await l.verify(n)}catch{c=await l.verify(n,!0)}const h={...e};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in h){const f=h.phoneEnrollmentInfo.phoneNumber,m=h.phoneEnrollmentInfo.recaptchaToken;Object.assign(h,{phoneEnrollmentInfo:{phoneNumber:f,recaptchaToken:m,captchaResponse:c,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in h){const f=h.phoneSignInInfo.recaptchaToken;Object.assign(h,{phoneSignInInfo:{recaptchaToken:f,captchaResponse:c,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return h}return s?Object.assign(h,{captchaResp:c}):Object.assign(h,{captchaResponse:c}),Object.assign(h,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(h,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),h}async function Zd(t,e,n,s,o){var l;if((l=t._getRecaptchaConfig())!=null&&l.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const c=await Ny(t,e,n,n==="getOobCode");return s(t,c)}else return s(t,e).catch(async c=>{if(c.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const h=await Ny(t,e,n,n==="getOobCode");return s(t,h)}else return Promise.reject(c)})}/**
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
 */function Vb(t,e){const n=ci(t,"auth");if(n.isInitialized()){const o=n.getImmediate(),l=n.getOptions();if(br(l,e??{}))return o;fn(o,"already-initialized")}return n.initialize({options:e})}function Hb(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(zn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function Gb(t,e,n){const s=fi(t);le(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const o=!1,l=Pw(e),{host:c,port:h}=qb(e),f=h===null?"":`:${h}`,m={url:`${l}//${c}${f}/`},y=Object.freeze({host:c,port:h,protocol:l.replace(":",""),options:Object.freeze({disableWarnings:o})});if(!s._canInitEmulator){le(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),le(br(m,s.config.emulator)&&br(y,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=m,s.emulatorConfig=y,s.settings.appVerificationDisabledForTesting=!0,os(c)?(C_(`${l}//${c}${f}`),k_("Auth",!0)):Kb()}function Pw(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function qb(t){const e=Pw(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(s);if(o){const l=o[1];return{host:l,port:Py(s.substr(l.length+1))}}else{const[l,c]=s.split(":");return{host:l,port:Py(c)}}}function Py(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Kb(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class uf{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Un("not implemented")}_getIdTokenResponse(e){return Un("not implemented")}_linkToIdToken(e,n){return Un("not implemented")}_getReauthenticationResolver(e){return Un("not implemented")}}async function Yb(t,e){return Or(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function Qb(t,e){return $o(t,"POST","/v1/accounts:signInWithPassword",Dr(t,e))}/**
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
 */async function Jb(t,e){return $o(t,"POST","/v1/accounts:signInWithEmailLink",Dr(t,e))}async function Xb(t,e){return $o(t,"POST","/v1/accounts:signInWithEmailLink",Dr(t,e))}/**
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
 */class Ao extends uf{constructor(e,n,s,o=null){super("password",s),this._email=e,this._password=n,this._tenantId=o}static _fromEmailAndPassword(e,n){return new Ao(e,n,"password")}static _fromEmailAndCode(e,n,s=null){return new Ao(e,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Zd(e,n,"signInWithPassword",Qb);case"emailLink":return Jb(e,{email:this._email,oobCode:this._password});default:fn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const s={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Zd(e,s,"signUpPassword",Yb);case"emailLink":return Xb(e,{idToken:n,email:this._email,oobCode:this._password});default:fn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Yi(t,e){return $o(t,"POST","/v1/accounts:signInWithIdp",Dr(t,e))}/**
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
 */const Zb="http://localhost";class ai extends uf{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new ai(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):fn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:o,...l}=n;if(!s||!o)return null;const c=new ai(s,o);return c.idToken=l.idToken||void 0,c.accessToken=l.accessToken||void 0,c.secret=l.secret,c.nonce=l.nonce,c.pendingToken=l.pendingToken||null,c}_getIdTokenResponse(e){const n=this.buildRequest();return Yi(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,Yi(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Yi(e,n)}buildRequest(){const e={requestUri:Zb,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=as(n)}return e}}/**
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
 */function eN(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function tN(t){const e=ho(fo(t)).link,n=e?ho(fo(e)).deep_link_id:null,s=ho(fo(t)).deep_link_id;return(s?ho(fo(s)).link:null)||s||n||e||t}class cf{constructor(e){const n=ho(fo(e)),s=n.apiKey??null,o=n.oobCode??null,l=eN(n.mode??null);le(s&&o&&l,"argument-error"),this.apiKey=s,this.operation=l,this.code=o,this.continueUrl=n.continueUrl??null,this.languageCode=n.lang??null,this.tenantId=n.tenantId??null}static parseLink(e){const n=tN(e);try{return new cf(n)}catch{return null}}}/**
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
 */class hs{constructor(){this.providerId=hs.PROVIDER_ID}static credential(e,n){return Ao._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const s=cf.parseLink(n);return le(s,"argument-error"),Ao._fromEmailAndCode(e,s.code,s.tenantId)}}hs.PROVIDER_ID="password";hs.EMAIL_PASSWORD_SIGN_IN_METHOD="password";hs.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Aw{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Wo extends Aw{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Er extends Wo{constructor(){super("facebook.com")}static credential(e){return ai._fromParams({providerId:Er.PROVIDER_ID,signInMethod:Er.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Er.credentialFromTaggedObject(e)}static credentialFromError(e){return Er.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Er.credential(e.oauthAccessToken)}catch{return null}}}Er.FACEBOOK_SIGN_IN_METHOD="facebook.com";Er.PROVIDER_ID="facebook.com";/**
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
 */class Cr extends Wo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return ai._fromParams({providerId:Cr.PROVIDER_ID,signInMethod:Cr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Cr.credentialFromTaggedObject(e)}static credentialFromError(e){return Cr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return Cr.credential(n,s)}catch{return null}}}Cr.GOOGLE_SIGN_IN_METHOD="google.com";Cr.PROVIDER_ID="google.com";/**
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
 */class kr extends Wo{constructor(){super("github.com")}static credential(e){return ai._fromParams({providerId:kr.PROVIDER_ID,signInMethod:kr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return kr.credentialFromTaggedObject(e)}static credentialFromError(e){return kr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return kr.credential(e.oauthAccessToken)}catch{return null}}}kr.GITHUB_SIGN_IN_METHOD="github.com";kr.PROVIDER_ID="github.com";/**
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
 */class Sr extends Wo{constructor(){super("twitter.com")}static credential(e,n){return ai._fromParams({providerId:Sr.PROVIDER_ID,signInMethod:Sr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Sr.credentialFromTaggedObject(e)}static credentialFromError(e){return Sr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return Sr.credential(n,s)}catch{return null}}}Sr.TWITTER_SIGN_IN_METHOD="twitter.com";Sr.PROVIDER_ID="twitter.com";/**
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
 */async function nN(t,e){return $o(t,"POST","/v1/accounts:signUp",Dr(t,e))}/**
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
 */class li{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,o=!1){const l=await un._fromIdTokenResponse(e,s,o),c=Ay(s);return new li({user:l,providerId:c,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const o=Ay(s);return new li({user:e,providerId:o,_tokenResponse:s,operationType:n})}}function Ay(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Ul extends In{constructor(e,n,s,o){super(n.code,n.message),this.operationType=s,this.user=o,Object.setPrototypeOf(this,Ul.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,o){return new Ul(e,n,s,o)}}function Dw(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(l=>{throw l.code==="auth/multi-factor-auth-required"?Ul._fromErrorAndOperation(t,l,e,s):l})}async function rN(t,e,n=!1){const s=await Po(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return li._forOperation(t,"link",s)}/**
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
 */async function iN(t,e,n=!1){const{auth:s}=t;if(Yt(s.app))return Promise.reject(Bn(s));const o="reauthenticate";try{const l=await Po(t,Dw(s,o,e,t),n);le(l.idToken,s,"internal-error");const c=af(l.idToken);le(c,s,"internal-error");const{sub:h}=c;return le(t.uid===h,s,"user-mismatch"),li._forOperation(t,o,l)}catch(l){throw(l==null?void 0:l.code)==="auth/user-not-found"&&fn(s,"user-mismatch"),l}}/**
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
 */async function Ow(t,e,n=!1){if(Yt(t.app))return Promise.reject(Bn(t));const s="signIn",o=await Dw(t,s,e),l=await li._fromIdTokenResponse(t,s,o);return n||await t._updateCurrentUser(l.user),l}async function sN(t,e){return Ow(fi(t),e)}/**
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
 */async function Lw(t){const e=fi(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function oN(t,e,n){if(Yt(t.app))return Promise.reject(Bn(t));const s=fi(t),c=await Zd(s,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",nN).catch(f=>{throw f.code==="auth/password-does-not-meet-requirements"&&Lw(t),f}),h=await li._fromIdTokenResponse(s,"signIn",c);return await s._updateCurrentUser(h.user),h}function aN(t,e,n){return Yt(t.app)?Promise.reject(Bn(t)):sN(tt(t),hs.credential(e,n)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&Lw(t),s})}function lN(t,e,n,s){return tt(t).onIdTokenChanged(e,n,s)}function uN(t,e,n){return tt(t).beforeAuthStateChanged(e,n)}function cN(t,e,n,s){return tt(t).onAuthStateChanged(e,n,s)}function dN(t){return tt(t).signOut()}const zl="__sak";/**
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
 */class Mw{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(zl,"1"),this.storage.removeItem(zl),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const hN=1e3,fN=10;class Fw extends Mw{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=xw(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),o=this.localCache[n];s!==o&&e(n,o,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((c,h,f)=>{this.notifyListeners(c,f)});return}const s=e.key;n?this.detachListener():this.stopPolling();const o=()=>{const c=this.storage.getItem(s);!n&&this.localCache[s]===c||this.notifyListeners(s,c)},l=this.storage.getItem(s);Nb()&&l!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,fN):o()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},hN)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Fw.type="LOCAL";const pN=Fw;/**
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
 */class jw extends Mw{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}jw.type="SESSION";const Uw=jw;/**
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
 */function mN(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class du{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(o=>o.isListeningto(e));if(n)return n;const s=new du(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:o,data:l}=n.data,c=this.handlersMap[o];if(!(c!=null&&c.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:o});const h=Array.from(c).map(async m=>m(n.origin,l)),f=await mN(h);n.ports[0].postMessage({status:"done",eventId:s,eventType:o,response:f})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}du.receivers=[];/**
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
 */function df(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class gN{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let l,c;return new Promise((h,f)=>{const m=df("",20);o.port1.start();const y=setTimeout(()=>{f(new Error("unsupported_event"))},s);c={messageChannel:o,onMessage(_){const v=_;if(v.data.eventId===m)switch(v.data.status){case"ack":clearTimeout(y),l=setTimeout(()=>{f(new Error("timeout"))},3e3);break;case"done":clearTimeout(l),h(v.data.response);break;default:clearTimeout(y),clearTimeout(l),f(new Error("invalid_response"));break}}},this.handlers.add(c),o.port1.addEventListener("message",c.onMessage),this.target.postMessage({eventType:e,eventId:m,data:n},[o.port2])}).finally(()=>{c&&this.removeMessageHandler(c)})}}/**
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
 */function kn(){return window}function yN(t){kn().location.href=t}/**
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
 */function zw(){return typeof kn().WorkerGlobalScope<"u"&&typeof kn().importScripts=="function"}async function _N(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function vN(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)==null?void 0:t.controller)||null}function wN(){return zw()?self:null}/**
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
 */const $w="firebaseLocalStorageDb",EN=1,$l="firebaseLocalStorage",Ww="fbase_key";class Bo{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function hu(t,e){return t.transaction([$l],e?"readwrite":"readonly").objectStore($l)}function CN(){const t=indexedDB.deleteDatabase($w);return new Bo(t).toPromise()}function eh(){const t=indexedDB.open($w,EN);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore($l,{keyPath:Ww})}catch(o){n(o)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains($l)?e(s):(s.close(),await CN(),e(await eh()))})})}async function Dy(t,e,n){const s=hu(t,!0).put({[Ww]:e,value:n});return new Bo(s).toPromise()}async function kN(t,e){const n=hu(t,!1).get(e),s=await new Bo(n).toPromise();return s===void 0?null:s.value}function Oy(t,e){const n=hu(t,!0).delete(e);return new Bo(n).toPromise()}const SN=800,IN=3;class Bw{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await eh(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>IN)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return zw()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=du._getInstance(wN()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var n,s;if(this.activeServiceWorker=await _N(),!this.activeServiceWorker)return;this.sender=new gN(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(n=e[0])!=null&&n.fulfilled&&(s=e[0])!=null&&s.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||vN()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await eh();return await Dy(e,zl,"1"),await Oy(e,zl),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>Dy(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>kN(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Oy(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const l=hu(o,!1).getAll();return new Bo(l).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;if(e.length!==0)for(const{fbase_key:o,value:l}of e)s.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(l)&&(this.notifyListeners(o,l),n.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!s.has(o)&&(this.notifyListeners(o,null),n.push(o));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),SN)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Bw.type="LOCAL";const TN=Bw;new zo(3e4,6e4);/**
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
 */function xN(t,e){return e?zn(e):(le(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class hf extends uf{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Yi(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Yi(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Yi(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function RN(t){return Ow(t.auth,new hf(t),t.bypassAuthState)}function bN(t){const{auth:e,user:n}=t;return le(n,e,"internal-error"),iN(n,new hf(t),t.bypassAuthState)}async function NN(t){const{auth:e,user:n}=t;return le(n,e,"internal-error"),rN(n,new hf(t),t.bypassAuthState)}/**
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
 */class Vw{constructor(e,n,s,o,l=!1){this.auth=e,this.resolver=s,this.user=o,this.bypassAuthState=l,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:o,tenantId:l,error:c,type:h}=e;if(c){this.reject(c);return}const f={auth:this.auth,requestUri:n,sessionId:s,tenantId:l||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(h)(f))}catch(m){this.reject(m)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return RN;case"linkViaPopup":case"linkViaRedirect":return NN;case"reauthViaPopup":case"reauthViaRedirect":return bN;default:fn(this.auth,"internal-error")}}resolve(e){qn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){qn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const PN=new zo(2e3,1e4);class Wi extends Vw{constructor(e,n,s,o,l){super(e,n,o,l),this.provider=s,this.authWindow=null,this.pollId=null,Wi.currentPopupAction&&Wi.currentPopupAction.cancel(),Wi.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return le(e,this.auth,"internal-error"),e}async onExecution(){qn(this.filter.length===1,"Popup operations only handle one event");const e=df();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Cn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(Cn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Wi.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if((s=(n=this.authWindow)==null?void 0:n.window)!=null&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Cn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,PN.get())};e()}}Wi.currentPopupAction=null;/**
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
 */const AN="pendingRedirect",pl=new Map;class DN extends Vw{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=pl.get(this.auth._key());if(!e){try{const s=await ON(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}pl.set(this.auth._key(),e)}return this.bypassAuthState||pl.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function ON(t,e){const n=FN(e),s=MN(t);if(!await s._isAvailable())return!1;const o=await s._get(n)==="true";return await s._remove(n),o}function LN(t,e){pl.set(t._key(),e)}function MN(t){return zn(t._redirectPersistence)}function FN(t){return fl(AN,t.config.apiKey,t.name)}async function jN(t,e,n=!1){if(Yt(t.app))return Promise.reject(Bn(t));const s=fi(t),o=xN(s,e),c=await new DN(s,o,n).execute();return c&&!n&&(delete c.user._redirectEventId,await s._persistUserIfCurrent(c.user),await s._setRedirectUser(null,e)),c}/**
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
 */const UN=600*1e3;class zN{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!$N(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!Hw(e)){const o=((s=e.error.code)==null?void 0:s.split("auth/")[1])||"internal-error";n.onError(Cn(this.auth,o))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=UN&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ly(e))}saveEventToCache(e){this.cachedEventUids.add(Ly(e)),this.lastProcessedEventTime=Date.now()}}function Ly(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Hw({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function $N(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Hw(t);default:return!1}}/**
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
 */async function WN(t,e={}){return Or(t,"GET","/v1/projects",e)}/**
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
 */const BN=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,VN=/^https?/;async function HN(t){if(t.config.emulator)return;const{authorizedDomains:e}=await WN(t);for(const n of e)try{if(GN(n))return}catch{}fn(t,"unauthorized-domain")}function GN(t){const e=Jd(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const c=new URL(t);return c.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&c.hostname===s}if(!VN.test(n))return!1;if(BN.test(t))return s===t;const o=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(s)}/**
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
 */const qN=new zo(3e4,6e4);function My(){const t=kn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function KN(t){return new Promise((e,n)=>{var o,l,c;function s(){My(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{My(),n(Cn(t,"network-request-failed"))},timeout:qN.get()})}if((l=(o=kn().gapi)==null?void 0:o.iframes)!=null&&l.Iframe)e(gapi.iframes.getContext());else if((c=kn().gapi)!=null&&c.load)s();else{const h=Ub("iframefcb");return kn()[h]=()=>{gapi.load?s():n(Cn(t,"network-request-failed"))},bw(`${jb()}?onload=${h}`).catch(f=>n(f))}}).catch(e=>{throw ml=null,e})}let ml=null;function YN(t){return ml=ml||KN(t),ml}/**
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
 */const QN=new zo(5e3,15e3),JN="__/auth/iframe",XN="emulator/auth/iframe",ZN={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},eP=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function tP(t){const e=t.config;le(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?of(e,XN):`https://${t.config.authDomain}/${JN}`,s={apiKey:e.apiKey,appName:t.name,v:ls},o=eP.get(t.config.apiHost);o&&(s.eid=o);const l=t._getFrameworks();return l.length&&(s.fw=l.join(",")),`${n}?${as(s).slice(1)}`}async function nP(t){const e=await YN(t),n=kn().gapi;return le(n,t,"internal-error"),e.open({where:document.body,url:tP(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:ZN,dontclear:!0},s=>new Promise(async(o,l)=>{await s.restyle({setHideOnLeave:!1});const c=Cn(t,"network-request-failed"),h=kn().setTimeout(()=>{l(c)},QN.get());function f(){kn().clearTimeout(h),o(s)}s.ping(f).then(f,()=>{l(c)})}))}/**
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
 */const rP={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},iP=500,sP=600,oP="_blank",aP="http://localhost";class Fy{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function lP(t,e,n,s=iP,o=sP){const l=Math.max((window.screen.availHeight-o)/2,0).toString(),c=Math.max((window.screen.availWidth-s)/2,0).toString();let h="";const f={...rP,width:s.toString(),height:o.toString(),top:l,left:c},m=Rt().toLowerCase();n&&(h=Cw(m)?oP:n),ww(m)&&(e=e||aP,f.scrollbars="yes");const y=Object.entries(f).reduce((v,[S,N])=>`${v}${S}=${N},`,"");if(bb(m)&&h!=="_self")return uP(e||"",h),new Fy(null);const _=window.open(e||"",h,y);le(_,t,"popup-blocked");try{_.focus()}catch{}return new Fy(_)}function uP(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const cP="__/auth/handler",dP="emulator/auth/handler",hP=encodeURIComponent("fac");async function jy(t,e,n,s,o,l){le(t.config.authDomain,t,"auth-domain-config-required"),le(t.config.apiKey,t,"invalid-api-key");const c={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:ls,eventId:o};if(e instanceof Aw){e.setDefaultLanguage(t.languageCode),c.providerId=e.providerId||"",Nd(e.getCustomParameters())||(c.customParameters=JSON.stringify(e.getCustomParameters()));for(const[y,_]of Object.entries({}))c[y]=_}if(e instanceof Wo){const y=e.getScopes().filter(_=>_!=="");y.length>0&&(c.scopes=y.join(","))}t.tenantId&&(c.tid=t.tenantId);const h=c;for(const y of Object.keys(h))h[y]===void 0&&delete h[y];const f=await t._getAppCheckToken(),m=f?`#${hP}=${encodeURIComponent(f)}`:"";return`${fP(t)}?${as(h).slice(1)}${m}`}function fP({config:t}){return t.emulator?of(t,dP):`https://${t.authDomain}/${cP}`}/**
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
 */const Id="webStorageSupport";class pP{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Uw,this._completeRedirectFn=jN,this._overrideRedirectResult=LN}async _openPopup(e,n,s,o){var c;qn((c=this.eventManagers[e._key()])==null?void 0:c.manager,"_initialize() not called before _openPopup()");const l=await jy(e,n,s,Jd(),o);return lP(e,l,df())}async _openRedirect(e,n,s,o){await this._originValidation(e);const l=await jy(e,n,s,Jd(),o);return yN(l),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:o,promise:l}=this.eventManagers[n];return o?Promise.resolve(o):(qn(l,"If manager is not set, promise should be"),l)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await nP(e),s=new zN(e);return n.register("authEvent",o=>(le(o==null?void 0:o.authEvent,e,"invalid-auth-event"),{status:s.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Id,{type:Id},o=>{var c;const l=(c=o==null?void 0:o[0])==null?void 0:c[Id];l!==void 0&&n(!!l),fn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=HN(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return xw()||Ew()||lf()}}const mP=pP;var Uy="@firebase/auth",zy="1.11.1";/**
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
 */class gP{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){le(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function yP(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function _P(t){Sn(new dn("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),l=e.getProvider("app-check-internal"),{apiKey:c,authDomain:h}=s.options;le(c&&!c.includes(":"),"invalid-api-key",{appName:s.name});const f={apiKey:c,authDomain:h,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Rw(t)},m=new Lb(s,o,l,f);return Hb(m,n),m},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),Sn(new dn("auth-internal",e=>{const n=fi(e.getProvider("auth").getImmediate());return(s=>new gP(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Jt(Uy,zy,yP(t)),Jt(Uy,zy,"esm2020")}/**
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
 */const vP=300,wP=E_("authIdTokenMaxAge")||vP;let $y=null;const EP=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>wP)return;const o=n==null?void 0:n.token;$y!==o&&($y=o,await fetch(t,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function CP(t=gh()){const e=ci(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Vb(t,{popupRedirectResolver:mP,persistence:[TN,pN,Uw]}),s=E_("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const l=new URL(s,location.origin);if(location.origin===l.origin){const c=EP(l.toString());uN(n,c,()=>c(n.currentUser)),lN(n,h=>c(h))}}const o=v_("auth");return o&&Gb(n,`http://${o}`),n}function kP(){var t;return((t=document.getElementsByTagName("head"))==null?void 0:t[0])??document}Mb({loadJS(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=o=>{const l=Cn("internal-error");l.customData=o,n(l)},s.type="text/javascript",s.charset="UTF-8",kP().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});_P("Browser");const SP={apiKey:"AIzaSyCYSlsCpya0lq1XTCZbg3uKRWezjgJGrDw",authDomain:"driveway-33dd7.firebaseapp.com",databaseURL:"https://driveway-33dd7-default-rtdb.firebaseio.com",projectId:"driveway-33dd7",storageBucket:"driveway-33dd7.firebasestorage.app",messagingSenderId:"774495628670",appId:"1:774495628670:web:9f060969e992697957172f",measurementId:"G-N3PXP5VM39"},ff=A_(SP);W1(ff);const we=ob(ff),ol=CP(ff);function Gw(t){var e,n,s="";if(typeof t=="string"||typeof t=="number")s+=t;else if(typeof t=="object")if(Array.isArray(t)){var o=t.length;for(e=0;e<o;e++)t[e]&&(n=Gw(t[e]))&&(s&&(s+=" "),s+=n)}else for(n in t)t[n]&&(s&&(s+=" "),s+=n);return s}function IP(){for(var t,e,n=0,s="",o=arguments.length;n<o;n++)(t=arguments[n])&&(e=Gw(t))&&(s&&(s+=" "),s+=e);return s}const TP=(t,e)=>{const n=new Array(t.length+e.length);for(let s=0;s<t.length;s++)n[s]=t[s];for(let s=0;s<e.length;s++)n[t.length+s]=e[s];return n},xP=(t,e)=>({classGroupId:t,validator:e}),qw=(t=new Map,e=null,n)=>({nextPart:t,validators:e,classGroupId:n}),Wl="-",Wy=[],RP="arbitrary..",bP=t=>{const e=PP(t),{conflictingClassGroups:n,conflictingClassGroupModifiers:s}=t;return{getClassGroupId:c=>{if(c.startsWith("[")&&c.endsWith("]"))return NP(c);const h=c.split(Wl),f=h[0]===""&&h.length>1?1:0;return Kw(h,f,e)},getConflictingClassGroupIds:(c,h)=>{if(h){const f=s[c],m=n[c];return f?m?TP(m,f):f:m||Wy}return n[c]||Wy}}},Kw=(t,e,n)=>{if(t.length-e===0)return n.classGroupId;const o=t[e],l=n.nextPart.get(o);if(l){const m=Kw(t,e+1,l);if(m)return m}const c=n.validators;if(c===null)return;const h=e===0?t.join(Wl):t.slice(e).join(Wl),f=c.length;for(let m=0;m<f;m++){const y=c[m];if(y.validator(h))return y.classGroupId}},NP=t=>t.slice(1,-1).indexOf(":")===-1?void 0:(()=>{const e=t.slice(1,-1),n=e.indexOf(":"),s=e.slice(0,n);return s?RP+s:void 0})(),PP=t=>{const{theme:e,classGroups:n}=t;return AP(n,e)},AP=(t,e)=>{const n=qw();for(const s in t){const o=t[s];pf(o,n,s,e)}return n},pf=(t,e,n,s)=>{const o=t.length;for(let l=0;l<o;l++){const c=t[l];DP(c,e,n,s)}},DP=(t,e,n,s)=>{if(typeof t=="string"){OP(t,e,n);return}if(typeof t=="function"){LP(t,e,n,s);return}MP(t,e,n,s)},OP=(t,e,n)=>{const s=t===""?e:Yw(e,t);s.classGroupId=n},LP=(t,e,n,s)=>{if(FP(t)){pf(t(s),e,n,s);return}e.validators===null&&(e.validators=[]),e.validators.push(xP(n,t))},MP=(t,e,n,s)=>{const o=Object.entries(t),l=o.length;for(let c=0;c<l;c++){const[h,f]=o[c];pf(f,Yw(e,h),n,s)}},Yw=(t,e)=>{let n=t;const s=e.split(Wl),o=s.length;for(let l=0;l<o;l++){const c=s[l];let h=n.nextPart.get(c);h||(h=qw(),n.nextPart.set(c,h)),n=h}return n},FP=t=>"isThemeGetter"in t&&t.isThemeGetter===!0,jP=t=>{if(t<1)return{get:()=>{},set:()=>{}};let e=0,n=Object.create(null),s=Object.create(null);const o=(l,c)=>{n[l]=c,e++,e>t&&(e=0,s=n,n=Object.create(null))};return{get(l){let c=n[l];if(c!==void 0)return c;if((c=s[l])!==void 0)return o(l,c),c},set(l,c){l in n?n[l]=c:o(l,c)}}},th="!",By=":",UP=[],Vy=(t,e,n,s,o)=>({modifiers:t,hasImportantModifier:e,baseClassName:n,maybePostfixModifierPosition:s,isExternal:o}),zP=t=>{const{prefix:e,experimentalParseClassName:n}=t;let s=o=>{const l=[];let c=0,h=0,f=0,m;const y=o.length;for(let I=0;I<y;I++){const A=o[I];if(c===0&&h===0){if(A===By){l.push(o.slice(f,I)),f=I+1;continue}if(A==="/"){m=I;continue}}A==="["?c++:A==="]"?c--:A==="("?h++:A===")"&&h--}const _=l.length===0?o:o.slice(f);let v=_,S=!1;_.endsWith(th)?(v=_.slice(0,-1),S=!0):_.startsWith(th)&&(v=_.slice(1),S=!0);const N=m&&m>f?m-f:void 0;return Vy(l,S,v,N)};if(e){const o=e+By,l=s;s=c=>c.startsWith(o)?l(c.slice(o.length)):Vy(UP,!1,c,void 0,!0)}if(n){const o=s;s=l=>n({className:l,parseClassName:o})}return s},$P=t=>{const e=new Map;return t.orderSensitiveModifiers.forEach((n,s)=>{e.set(n,1e6+s)}),n=>{const s=[];let o=[];for(let l=0;l<n.length;l++){const c=n[l],h=c[0]==="[",f=e.has(c);h||f?(o.length>0&&(o.sort(),s.push(...o),o=[]),s.push(c)):o.push(c)}return o.length>0&&(o.sort(),s.push(...o)),s}},WP=t=>({cache:jP(t.cacheSize),parseClassName:zP(t),sortModifiers:$P(t),...bP(t)}),BP=/\s+/,VP=(t,e)=>{const{parseClassName:n,getClassGroupId:s,getConflictingClassGroupIds:o,sortModifiers:l}=e,c=[],h=t.trim().split(BP);let f="";for(let m=h.length-1;m>=0;m-=1){const y=h[m],{isExternal:_,modifiers:v,hasImportantModifier:S,baseClassName:N,maybePostfixModifierPosition:I}=n(y);if(_){f=y+(f.length>0?" "+f:f);continue}let A=!!I,z=s(A?N.substring(0,I):N);if(!z){if(!A){f=y+(f.length>0?" "+f:f);continue}if(z=s(N),!z){f=y+(f.length>0?" "+f:f);continue}A=!1}const X=v.length===0?"":v.length===1?v[0]:l(v).join(":"),U=S?X+th:X,q=U+z;if(c.indexOf(q)>-1)continue;c.push(q);const fe=o(z,A);for(let Ee=0;Ee<fe.length;++Ee){const Re=fe[Ee];c.push(U+Re)}f=y+(f.length>0?" "+f:f)}return f},HP=(...t)=>{let e=0,n,s,o="";for(;e<t.length;)(n=t[e++])&&(s=Qw(n))&&(o&&(o+=" "),o+=s);return o},Qw=t=>{if(typeof t=="string")return t;let e,n="";for(let s=0;s<t.length;s++)t[s]&&(e=Qw(t[s]))&&(n&&(n+=" "),n+=e);return n},GP=(t,...e)=>{let n,s,o,l;const c=f=>{const m=e.reduce((y,_)=>_(y),t());return n=WP(m),s=n.cache.get,o=n.cache.set,l=h,h(f)},h=f=>{const m=s(f);if(m)return m;const y=VP(f,n);return o(f,y),y};return l=c,(...f)=>l(HP(...f))},qP=[],Ze=t=>{const e=n=>n[t]||qP;return e.isThemeGetter=!0,e},Jw=/^\[(?:(\w[\w-]*):)?(.+)\]$/i,Xw=/^\((?:(\w[\w-]*):)?(.+)\)$/i,KP=/^\d+\/\d+$/,YP=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,QP=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,JP=/^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,XP=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,ZP=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,zi=t=>KP.test(t),he=t=>!!t&&!Number.isNaN(Number(t)),wr=t=>!!t&&Number.isInteger(Number(t)),Td=t=>t.endsWith("%")&&he(t.slice(0,-1)),Fn=t=>YP.test(t),eA=()=>!0,tA=t=>QP.test(t)&&!JP.test(t),Zw=()=>!1,nA=t=>XP.test(t),rA=t=>ZP.test(t),iA=t=>!Y(t)&&!Q(t),sA=t=>fs(t,nE,Zw),Y=t=>Jw.test(t),Yr=t=>fs(t,rE,tA),xd=t=>fs(t,cA,he),Hy=t=>fs(t,eE,Zw),oA=t=>fs(t,tE,rA),al=t=>fs(t,iE,nA),Q=t=>Xw.test(t),co=t=>ps(t,rE),aA=t=>ps(t,dA),Gy=t=>ps(t,eE),lA=t=>ps(t,nE),uA=t=>ps(t,tE),ll=t=>ps(t,iE,!0),fs=(t,e,n)=>{const s=Jw.exec(t);return s?s[1]?e(s[1]):n(s[2]):!1},ps=(t,e,n=!1)=>{const s=Xw.exec(t);return s?s[1]?e(s[1]):n:!1},eE=t=>t==="position"||t==="percentage",tE=t=>t==="image"||t==="url",nE=t=>t==="length"||t==="size"||t==="bg-size",rE=t=>t==="length",cA=t=>t==="number",dA=t=>t==="family-name",iE=t=>t==="shadow",hA=()=>{const t=Ze("color"),e=Ze("font"),n=Ze("text"),s=Ze("font-weight"),o=Ze("tracking"),l=Ze("leading"),c=Ze("breakpoint"),h=Ze("container"),f=Ze("spacing"),m=Ze("radius"),y=Ze("shadow"),_=Ze("inset-shadow"),v=Ze("text-shadow"),S=Ze("drop-shadow"),N=Ze("blur"),I=Ze("perspective"),A=Ze("aspect"),z=Ze("ease"),X=Ze("animate"),U=()=>["auto","avoid","all","avoid-page","page","left","right","column"],q=()=>["center","top","bottom","left","right","top-left","left-top","top-right","right-top","bottom-right","right-bottom","bottom-left","left-bottom"],fe=()=>[...q(),Q,Y],Ee=()=>["auto","hidden","clip","visible","scroll"],Re=()=>["auto","contain","none"],J=()=>[Q,Y,f],Ce=()=>[zi,"full","auto",...J()],He=()=>[wr,"none","subgrid",Q,Y],kt=()=>["auto",{span:["full",wr,Q,Y]},wr,Q,Y],ht=()=>[wr,"auto",Q,Y],rt=()=>["auto","min","max","fr",Q,Y],ft=()=>["start","end","center","between","around","evenly","stretch","baseline","center-safe","end-safe"],Qe=()=>["start","end","center","stretch","center-safe","end-safe"],Pe=()=>["auto",...J()],ke=()=>[zi,"auto","full","dvw","dvh","lvw","lvh","svw","svh","min","max","fit",...J()],D=()=>[t,Q,Y],re=()=>[...q(),Gy,Hy,{position:[Q,Y]}],V=()=>["no-repeat",{repeat:["","x","y","space","round"]}],T=()=>["auto","cover","contain",lA,sA,{size:[Q,Y]}],O=()=>[Td,co,Yr],ne=()=>["","none","full",m,Q,Y],ie=()=>["",he,co,Yr],de=()=>["solid","dashed","dotted","double"],j=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],W=()=>[he,Td,Gy,Hy],te=()=>["","none",N,Q,Y],ae=()=>["none",he,Q,Y],Ae=()=>["none",he,Q,Y],Ie=()=>[he,Q,Y],Ke=()=>[zi,"full",...J()];return{cacheSize:500,theme:{animate:["spin","ping","pulse","bounce"],aspect:["video"],blur:[Fn],breakpoint:[Fn],color:[eA],container:[Fn],"drop-shadow":[Fn],ease:["in","out","in-out"],font:[iA],"font-weight":["thin","extralight","light","normal","medium","semibold","bold","extrabold","black"],"inset-shadow":[Fn],leading:["none","tight","snug","normal","relaxed","loose"],perspective:["dramatic","near","normal","midrange","distant","none"],radius:[Fn],shadow:[Fn],spacing:["px",he],text:[Fn],"text-shadow":[Fn],tracking:["tighter","tight","normal","wide","wider","widest"]},classGroups:{aspect:[{aspect:["auto","square",zi,Y,Q,A]}],container:["container"],columns:[{columns:[he,Y,Q,h]}],"break-after":[{"break-after":U()}],"break-before":[{"break-before":U()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],sr:["sr-only","not-sr-only"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:fe()}],overflow:[{overflow:Ee()}],"overflow-x":[{"overflow-x":Ee()}],"overflow-y":[{"overflow-y":Ee()}],overscroll:[{overscroll:Re()}],"overscroll-x":[{"overscroll-x":Re()}],"overscroll-y":[{"overscroll-y":Re()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:Ce()}],"inset-x":[{"inset-x":Ce()}],"inset-y":[{"inset-y":Ce()}],start:[{start:Ce()}],end:[{end:Ce()}],top:[{top:Ce()}],right:[{right:Ce()}],bottom:[{bottom:Ce()}],left:[{left:Ce()}],visibility:["visible","invisible","collapse"],z:[{z:[wr,"auto",Q,Y]}],basis:[{basis:[zi,"full","auto",h,...J()]}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["nowrap","wrap","wrap-reverse"]}],flex:[{flex:[he,zi,"auto","initial","none",Y]}],grow:[{grow:["",he,Q,Y]}],shrink:[{shrink:["",he,Q,Y]}],order:[{order:[wr,"first","last","none",Q,Y]}],"grid-cols":[{"grid-cols":He()}],"col-start-end":[{col:kt()}],"col-start":[{"col-start":ht()}],"col-end":[{"col-end":ht()}],"grid-rows":[{"grid-rows":He()}],"row-start-end":[{row:kt()}],"row-start":[{"row-start":ht()}],"row-end":[{"row-end":ht()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":rt()}],"auto-rows":[{"auto-rows":rt()}],gap:[{gap:J()}],"gap-x":[{"gap-x":J()}],"gap-y":[{"gap-y":J()}],"justify-content":[{justify:[...ft(),"normal"]}],"justify-items":[{"justify-items":[...Qe(),"normal"]}],"justify-self":[{"justify-self":["auto",...Qe()]}],"align-content":[{content:["normal",...ft()]}],"align-items":[{items:[...Qe(),{baseline:["","last"]}]}],"align-self":[{self:["auto",...Qe(),{baseline:["","last"]}]}],"place-content":[{"place-content":ft()}],"place-items":[{"place-items":[...Qe(),"baseline"]}],"place-self":[{"place-self":["auto",...Qe()]}],p:[{p:J()}],px:[{px:J()}],py:[{py:J()}],ps:[{ps:J()}],pe:[{pe:J()}],pt:[{pt:J()}],pr:[{pr:J()}],pb:[{pb:J()}],pl:[{pl:J()}],m:[{m:Pe()}],mx:[{mx:Pe()}],my:[{my:Pe()}],ms:[{ms:Pe()}],me:[{me:Pe()}],mt:[{mt:Pe()}],mr:[{mr:Pe()}],mb:[{mb:Pe()}],ml:[{ml:Pe()}],"space-x":[{"space-x":J()}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":J()}],"space-y-reverse":["space-y-reverse"],size:[{size:ke()}],w:[{w:[h,"screen",...ke()]}],"min-w":[{"min-w":[h,"screen","none",...ke()]}],"max-w":[{"max-w":[h,"screen","none","prose",{screen:[c]},...ke()]}],h:[{h:["screen","lh",...ke()]}],"min-h":[{"min-h":["screen","lh","none",...ke()]}],"max-h":[{"max-h":["screen","lh",...ke()]}],"font-size":[{text:["base",n,co,Yr]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:[s,Q,xd]}],"font-stretch":[{"font-stretch":["ultra-condensed","extra-condensed","condensed","semi-condensed","normal","semi-expanded","expanded","extra-expanded","ultra-expanded",Td,Y]}],"font-family":[{font:[aA,Y,e]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:[o,Q,Y]}],"line-clamp":[{"line-clamp":[he,"none",Q,xd]}],leading:[{leading:[l,...J()]}],"list-image":[{"list-image":["none",Q,Y]}],"list-style-position":[{list:["inside","outside"]}],"list-style-type":[{list:["disc","decimal","none",Q,Y]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"placeholder-color":[{placeholder:D()}],"text-color":[{text:D()}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...de(),"wavy"]}],"text-decoration-thickness":[{decoration:[he,"from-font","auto",Q,Yr]}],"text-decoration-color":[{decoration:D()}],"underline-offset":[{"underline-offset":[he,"auto",Q,Y]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:J()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",Q,Y]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],wrap:[{wrap:["break-word","anywhere","normal"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",Q,Y]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:re()}],"bg-repeat":[{bg:V()}],"bg-size":[{bg:T()}],"bg-image":[{bg:["none",{linear:[{to:["t","tr","r","br","b","bl","l","tl"]},wr,Q,Y],radial:["",Q,Y],conic:[wr,Q,Y]},uA,oA]}],"bg-color":[{bg:D()}],"gradient-from-pos":[{from:O()}],"gradient-via-pos":[{via:O()}],"gradient-to-pos":[{to:O()}],"gradient-from":[{from:D()}],"gradient-via":[{via:D()}],"gradient-to":[{to:D()}],rounded:[{rounded:ne()}],"rounded-s":[{"rounded-s":ne()}],"rounded-e":[{"rounded-e":ne()}],"rounded-t":[{"rounded-t":ne()}],"rounded-r":[{"rounded-r":ne()}],"rounded-b":[{"rounded-b":ne()}],"rounded-l":[{"rounded-l":ne()}],"rounded-ss":[{"rounded-ss":ne()}],"rounded-se":[{"rounded-se":ne()}],"rounded-ee":[{"rounded-ee":ne()}],"rounded-es":[{"rounded-es":ne()}],"rounded-tl":[{"rounded-tl":ne()}],"rounded-tr":[{"rounded-tr":ne()}],"rounded-br":[{"rounded-br":ne()}],"rounded-bl":[{"rounded-bl":ne()}],"border-w":[{border:ie()}],"border-w-x":[{"border-x":ie()}],"border-w-y":[{"border-y":ie()}],"border-w-s":[{"border-s":ie()}],"border-w-e":[{"border-e":ie()}],"border-w-t":[{"border-t":ie()}],"border-w-r":[{"border-r":ie()}],"border-w-b":[{"border-b":ie()}],"border-w-l":[{"border-l":ie()}],"divide-x":[{"divide-x":ie()}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":ie()}],"divide-y-reverse":["divide-y-reverse"],"border-style":[{border:[...de(),"hidden","none"]}],"divide-style":[{divide:[...de(),"hidden","none"]}],"border-color":[{border:D()}],"border-color-x":[{"border-x":D()}],"border-color-y":[{"border-y":D()}],"border-color-s":[{"border-s":D()}],"border-color-e":[{"border-e":D()}],"border-color-t":[{"border-t":D()}],"border-color-r":[{"border-r":D()}],"border-color-b":[{"border-b":D()}],"border-color-l":[{"border-l":D()}],"divide-color":[{divide:D()}],"outline-style":[{outline:[...de(),"none","hidden"]}],"outline-offset":[{"outline-offset":[he,Q,Y]}],"outline-w":[{outline:["",he,co,Yr]}],"outline-color":[{outline:D()}],shadow:[{shadow:["","none",y,ll,al]}],"shadow-color":[{shadow:D()}],"inset-shadow":[{"inset-shadow":["none",_,ll,al]}],"inset-shadow-color":[{"inset-shadow":D()}],"ring-w":[{ring:ie()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:D()}],"ring-offset-w":[{"ring-offset":[he,Yr]}],"ring-offset-color":[{"ring-offset":D()}],"inset-ring-w":[{"inset-ring":ie()}],"inset-ring-color":[{"inset-ring":D()}],"text-shadow":[{"text-shadow":["none",v,ll,al]}],"text-shadow-color":[{"text-shadow":D()}],opacity:[{opacity:[he,Q,Y]}],"mix-blend":[{"mix-blend":[...j(),"plus-darker","plus-lighter"]}],"bg-blend":[{"bg-blend":j()}],"mask-clip":[{"mask-clip":["border","padding","content","fill","stroke","view"]},"mask-no-clip"],"mask-composite":[{mask:["add","subtract","intersect","exclude"]}],"mask-image-linear-pos":[{"mask-linear":[he]}],"mask-image-linear-from-pos":[{"mask-linear-from":W()}],"mask-image-linear-to-pos":[{"mask-linear-to":W()}],"mask-image-linear-from-color":[{"mask-linear-from":D()}],"mask-image-linear-to-color":[{"mask-linear-to":D()}],"mask-image-t-from-pos":[{"mask-t-from":W()}],"mask-image-t-to-pos":[{"mask-t-to":W()}],"mask-image-t-from-color":[{"mask-t-from":D()}],"mask-image-t-to-color":[{"mask-t-to":D()}],"mask-image-r-from-pos":[{"mask-r-from":W()}],"mask-image-r-to-pos":[{"mask-r-to":W()}],"mask-image-r-from-color":[{"mask-r-from":D()}],"mask-image-r-to-color":[{"mask-r-to":D()}],"mask-image-b-from-pos":[{"mask-b-from":W()}],"mask-image-b-to-pos":[{"mask-b-to":W()}],"mask-image-b-from-color":[{"mask-b-from":D()}],"mask-image-b-to-color":[{"mask-b-to":D()}],"mask-image-l-from-pos":[{"mask-l-from":W()}],"mask-image-l-to-pos":[{"mask-l-to":W()}],"mask-image-l-from-color":[{"mask-l-from":D()}],"mask-image-l-to-color":[{"mask-l-to":D()}],"mask-image-x-from-pos":[{"mask-x-from":W()}],"mask-image-x-to-pos":[{"mask-x-to":W()}],"mask-image-x-from-color":[{"mask-x-from":D()}],"mask-image-x-to-color":[{"mask-x-to":D()}],"mask-image-y-from-pos":[{"mask-y-from":W()}],"mask-image-y-to-pos":[{"mask-y-to":W()}],"mask-image-y-from-color":[{"mask-y-from":D()}],"mask-image-y-to-color":[{"mask-y-to":D()}],"mask-image-radial":[{"mask-radial":[Q,Y]}],"mask-image-radial-from-pos":[{"mask-radial-from":W()}],"mask-image-radial-to-pos":[{"mask-radial-to":W()}],"mask-image-radial-from-color":[{"mask-radial-from":D()}],"mask-image-radial-to-color":[{"mask-radial-to":D()}],"mask-image-radial-shape":[{"mask-radial":["circle","ellipse"]}],"mask-image-radial-size":[{"mask-radial":[{closest:["side","corner"],farthest:["side","corner"]}]}],"mask-image-radial-pos":[{"mask-radial-at":q()}],"mask-image-conic-pos":[{"mask-conic":[he]}],"mask-image-conic-from-pos":[{"mask-conic-from":W()}],"mask-image-conic-to-pos":[{"mask-conic-to":W()}],"mask-image-conic-from-color":[{"mask-conic-from":D()}],"mask-image-conic-to-color":[{"mask-conic-to":D()}],"mask-mode":[{mask:["alpha","luminance","match"]}],"mask-origin":[{"mask-origin":["border","padding","content","fill","stroke","view"]}],"mask-position":[{mask:re()}],"mask-repeat":[{mask:V()}],"mask-size":[{mask:T()}],"mask-type":[{"mask-type":["alpha","luminance"]}],"mask-image":[{mask:["none",Q,Y]}],filter:[{filter:["","none",Q,Y]}],blur:[{blur:te()}],brightness:[{brightness:[he,Q,Y]}],contrast:[{contrast:[he,Q,Y]}],"drop-shadow":[{"drop-shadow":["","none",S,ll,al]}],"drop-shadow-color":[{"drop-shadow":D()}],grayscale:[{grayscale:["",he,Q,Y]}],"hue-rotate":[{"hue-rotate":[he,Q,Y]}],invert:[{invert:["",he,Q,Y]}],saturate:[{saturate:[he,Q,Y]}],sepia:[{sepia:["",he,Q,Y]}],"backdrop-filter":[{"backdrop-filter":["","none",Q,Y]}],"backdrop-blur":[{"backdrop-blur":te()}],"backdrop-brightness":[{"backdrop-brightness":[he,Q,Y]}],"backdrop-contrast":[{"backdrop-contrast":[he,Q,Y]}],"backdrop-grayscale":[{"backdrop-grayscale":["",he,Q,Y]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[he,Q,Y]}],"backdrop-invert":[{"backdrop-invert":["",he,Q,Y]}],"backdrop-opacity":[{"backdrop-opacity":[he,Q,Y]}],"backdrop-saturate":[{"backdrop-saturate":[he,Q,Y]}],"backdrop-sepia":[{"backdrop-sepia":["",he,Q,Y]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":J()}],"border-spacing-x":[{"border-spacing-x":J()}],"border-spacing-y":[{"border-spacing-y":J()}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["","all","colors","opacity","shadow","transform","none",Q,Y]}],"transition-behavior":[{transition:["normal","discrete"]}],duration:[{duration:[he,"initial",Q,Y]}],ease:[{ease:["linear","initial",z,Q,Y]}],delay:[{delay:[he,Q,Y]}],animate:[{animate:["none",X,Q,Y]}],backface:[{backface:["hidden","visible"]}],perspective:[{perspective:[I,Q,Y]}],"perspective-origin":[{"perspective-origin":fe()}],rotate:[{rotate:ae()}],"rotate-x":[{"rotate-x":ae()}],"rotate-y":[{"rotate-y":ae()}],"rotate-z":[{"rotate-z":ae()}],scale:[{scale:Ae()}],"scale-x":[{"scale-x":Ae()}],"scale-y":[{"scale-y":Ae()}],"scale-z":[{"scale-z":Ae()}],"scale-3d":["scale-3d"],skew:[{skew:Ie()}],"skew-x":[{"skew-x":Ie()}],"skew-y":[{"skew-y":Ie()}],transform:[{transform:[Q,Y,"","none","gpu","cpu"]}],"transform-origin":[{origin:fe()}],"transform-style":[{transform:["3d","flat"]}],translate:[{translate:Ke()}],"translate-x":[{"translate-x":Ke()}],"translate-y":[{"translate-y":Ke()}],"translate-z":[{"translate-z":Ke()}],"translate-none":["translate-none"],accent:[{accent:D()}],appearance:[{appearance:["none","auto"]}],"caret-color":[{caret:D()}],"color-scheme":[{scheme:["normal","dark","light","light-dark","only-dark","only-light"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",Q,Y]}],"field-sizing":[{"field-sizing":["fixed","content"]}],"pointer-events":[{"pointer-events":["auto","none"]}],resize:[{resize:["none","","y","x"]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":J()}],"scroll-mx":[{"scroll-mx":J()}],"scroll-my":[{"scroll-my":J()}],"scroll-ms":[{"scroll-ms":J()}],"scroll-me":[{"scroll-me":J()}],"scroll-mt":[{"scroll-mt":J()}],"scroll-mr":[{"scroll-mr":J()}],"scroll-mb":[{"scroll-mb":J()}],"scroll-ml":[{"scroll-ml":J()}],"scroll-p":[{"scroll-p":J()}],"scroll-px":[{"scroll-px":J()}],"scroll-py":[{"scroll-py":J()}],"scroll-ps":[{"scroll-ps":J()}],"scroll-pe":[{"scroll-pe":J()}],"scroll-pt":[{"scroll-pt":J()}],"scroll-pr":[{"scroll-pr":J()}],"scroll-pb":[{"scroll-pb":J()}],"scroll-pl":[{"scroll-pl":J()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",Q,Y]}],fill:[{fill:["none",...D()]}],"stroke-w":[{stroke:[he,co,Yr,xd]}],stroke:[{stroke:["none",...D()]}],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-x","border-w-y","border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-x","border-color-y","border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],translate:["translate-x","translate-y","translate-none"],"translate-none":["translate","translate-x","translate-y","translate-z"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]},orderSensitiveModifiers:["*","**","after","backdrop","before","details-content","file","first-letter","first-line","marker","placeholder","selection"]}},fA=GP(hA);function pi(...t){return fA(IP(t))}function AD(){return Math.random().toString(36).substring(2,15)+Math.random().toString(36).substring(2,15)}function qy(t="ID"){const e=Math.floor(1e3+Math.random()*9e3),n=Date.now().toString().slice(-4);return`${t}-${n}${e}`}const sE=x.createContext();function mf(){return x.useContext(sE)}function pA({children:t}){const[e,n]=x.useState(),[s,o]=x.useState(!0);function l(m,y){return oN(ol,m,y)}function c(m,y){return aN(ol,m,y)}function h(){return dN(ol)}x.useEffect(()=>cN(ol,y=>{n(y),o(!1)}),[]);const f={currentUser:e,signup:l,login:c,logout:h};return E.jsx(sE.Provider,{value:f,children:s?E.jsx("div",{className:"flex h-screen items-center justify-center",children:"Loading..."}):t})}const oE=x.createContext();function mA({children:t}){const{currentUser:e}=mf(),[n,s]=x.useState([]),[o,l]=x.useState([]),[c,h]=x.useState([]),[f,m]=x.useState([]),[y,_]=x.useState([]),[v,S]=x.useState([]),[N,I]=x.useState([]),[A,z]=x.useState([]),[X,U]=x.useState(!0),q=j=>{const W=j.val();return W?Object.entries(W).map(([te,ae])=>({id:te,...ae})):[]};x.useEffect(()=>{if(!e){s([]),l([]),h([]),m([]),_([]),S([]),U(!1);return}U(!0);const j=ve(we,"cars"),W=ve(we,"customers"),te=ve(we,"dealers"),ae=uo(ve(we,"transactions"),lo(100)),Ae=uo(ve(we,"maintenanceRecords"),lo(100)),Ie=uo(ve(we,"registers"),lo(100)),Ke=uo(ve(we,"dealerTransactions"),lo(100)),Ft=uo(ve(we,"manualCustomerTransactions"),lo(100));let Yn=0;const xn=()=>{Yn++,Yn>=6&&U(!1)},Vo=_r(j,it=>{s(q(it)),xn()}),ms=_r(W,it=>{l(q(it)),xn()}),Ho=_r(te,it=>{h(q(it)),xn()}),gs=_r(ae,it=>{m(q(it)),xn()}),Lr=_r(Ae,it=>{_(q(it)),xn()}),Qn=_r(Ie,it=>{S(q(it)),xn()}),ys=_r(Ke,it=>{I(q(it))}),Go=_r(Ft,it=>{z(q(it))});return()=>{Vo(),ms(),Ho(),gs(),Lr(),Qn(),ys(),Go()}},[e]);const fe=j=>{gr(ve(we,"cars"),j)},Ee=j=>{if(o.some(te=>te.phone===j.phone))throw new Error(`Customer with phone ${j.phone} already exists!`);const W={...j,uniqueId:qy("CUST"),createdAt:new Date().toISOString(),status:"Active"};gr(ve(we,"customers"),W)},Re=j=>{if(c.some(te=>te.phone===j.phone))throw new Error(`Dealer with phone ${j.phone} already exists!`);const W={...j,uniqueId:qy("DLR")};gr(ve(we,"dealers"),W)},J=j=>{gr(ve(we,"registers"),{...j,createdAt:new Date().toISOString()})},Ce=j=>{gr(ve(we,"transactions"),j),J({carId:j.carId,customerId:j.customerId,date:new Date().toISOString(),type:"Exit",notes:"Auto-generated from Rental"})},He=(j,W)=>{yr(ve(we,`cars/${j}`),W)},kt=j=>{Mn(ve(we,`cars/${j}`))},ht=(j,W)=>{yr(ve(we,`customers/${j}`),W)},rt=j=>{Mn(ve(we,`customers/${j}`))},ft=(j,W)=>{yr(ve(we,`dealers/${j}`),W)},Qe=j=>{Mn(ve(we,`dealers/${j}`))},Pe=(j,W)=>{if(yr(ve(we,`transactions/${j}`),W),W.status==="Cancelled"||W.status==="Reserved"){const te=v.filter(ae=>ae.carId===W.carId&&ae.type==="Exit").sort((ae,Ae)=>new Date(Ae.date)-new Date(ae.date));if(te.length>0){const ae=te[0];Mn(ve(we,`registers/${ae.id}`))}}},ke=j=>{const W=f.find(te=>te.id===j);if(W){const te=v.filter(ae=>ae.carId===W.carId&&ae.type==="Exit").sort((ae,Ae)=>new Date(Ae.date)-new Date(ae.date));if(te.length>0){const ae=te[0];Mn(ve(we,`registers/${ae.id}`))}}Mn(ve(we,`transactions/${j}`))},D=j=>{gr(ve(we,"maintenanceRecords"),j),yr(ve(we,`cars/${j.carId}`),{status:"Maintenance"})},re=(j,W)=>{yr(ve(we,`maintenanceRecords/${j}`),W),W.returnDate&&yr(ve(we,`cars/${W.carId}`),{status:"Available"})},V=j=>{Mn(ve(we,`maintenanceRecords/${j}`))},T=j=>{y.filter(te=>te.workshopName===j).forEach(te=>{Mn(ve(we,`maintenanceRecords/${te.id}`))})},O=(j,W,te,ae)=>{y.filter(Ie=>Ie.workshopName===j).forEach(Ie=>{yr(ve(we,`maintenanceRecords/${Ie.id}`),{...Ie,workshopName:W,workshopDetails:te||Ie.workshopDetails,phoneNumber:ae||Ie.phoneNumber})})},ne=j=>{gr(ve(we,"dealerTransactions"),{...j,createdAt:new Date().toISOString()})},ie=j=>{gr(ve(we,"manualCustomerTransactions"),{...j,createdAt:new Date().toISOString()})},de=n.map(j=>{let W=j.status;(W==="On Rent"||W==="On Maintenance"||W==="Maintenance")&&(W="Available");const te=new Date;if(te.setHours(0,0,0,0),y.some(Ie=>{if(Ie.carId!==j.id)return!1;const Ke=new Date(Ie.date);if(Ke.setHours(0,0,0,0),Ie.returnDate){const Ft=new Date(Ie.returnDate);return Ft.setHours(23,59,59,999),te>=Ke&&te<=Ft}return te>=Ke})&&(W="On Maintenance"),f.some(Ie=>{if(Ie.carId!==j.id||Ie.status==="Cancelled"||Ie.status==="Completed")return!1;const Ke=new Date,Ft=new Date(Ie.startDate),Yn=new Date(Ie.endDate);return Ke>=Ft&&Ke<=Yn})&&(W="On Rent"),W!=="On Rent"&&W!=="On Maintenance"&&W!=="Maintenance"){const Ie=v.filter(Ke=>Ke.carId===j.id).sort((Ke,Ft)=>new Date(Ft.date)-new Date(Ke.date));Ie.length>0&&Ie[0].type==="Exit"&&(W="Not Available")}return{...j,status:W}});return E.jsx(oE.Provider,{value:{cars:de,customers:o,transactions:f,dealers:c,addCar:fe,updateCar:He,deleteCar:kt,addCustomer:Ee,updateCustomer:ht,deleteCustomer:rt,addDealer:Re,updateDealer:ft,deleteDealer:Qe,addTransaction:Ce,updateTransaction:Pe,deleteTransaction:ke,maintenanceRecords:y,addMaintenanceRecord:D,updateMaintenanceRecord:re,deleteMaintenanceRecord:V,registers:v,addRegister:J,deleteRegister:j=>Mn(ve(we,`registers/${j}`)),deleteWorkshop:T,renameWorkshop:O,dealerTransactions:N,addDealerTransaction:ne,manualCustomerTransactions:A,addCustomerTransaction:ie,isLoading:X},children:t})}function gf(){const t=x.useContext(oE);if(!t)throw new Error("useDriveway must be used within a DrivewayProvider");return t}/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gA=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),yA=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,n,s)=>s?s.toUpperCase():n.toLowerCase()),Ky=t=>{const e=yA(t);return e.charAt(0).toUpperCase()+e.slice(1)},aE=(...t)=>t.filter((e,n,s)=>!!e&&e.trim()!==""&&s.indexOf(e)===n).join(" ").trim(),_A=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var vA={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wA=x.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:s,className:o="",children:l,iconNode:c,...h},f)=>x.createElement("svg",{ref:f,...vA,width:e,height:e,stroke:t,strokeWidth:s?Number(n)*24/Number(e):n,className:aE("lucide",o),...!l&&!_A(h)&&{"aria-hidden":"true"},...h},[...c.map(([m,y])=>x.createElement(m,y)),...Array.isArray(l)?l:[l]]));/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nt=(t,e)=>{const n=x.forwardRef(({className:s,...o},l)=>x.createElement(wA,{ref:l,iconNode:e,className:aE(`lucide-${gA(Ky(t))}`,`lucide-${t}`,s),...o}));return n.displayName=Ky(t),n};/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const EA=[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0",key:"vwvbt9"}],["path",{d:"M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",key:"11g9vi"}]],Yy=nt("bell",EA);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CA=[["path",{d:"M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2",key:"5owen"}],["circle",{cx:"7",cy:"17",r:"2",key:"u2ysq9"}],["path",{d:"M9 17h6",key:"r8uit2"}],["circle",{cx:"17",cy:"17",r:"2",key:"axvx0g"}]],kA=nt("car",CA);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SA=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],IA=nt("circle-alert",SA);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TA=[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}],["path",{d:"M12 11h4",key:"1jrz19"}],["path",{d:"M12 16h4",key:"n85exb"}],["path",{d:"M8 11h.01",key:"1dfujw"}],["path",{d:"M8 16h.01",key:"18s6g9"}]],xA=nt("clipboard-list",TA);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RA=[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]],bA=nt("download",RA);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NA=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]],PA=nt("external-link",NA);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AA=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],Qy=nt("file-text",AA);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DA=[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1",key:"10lvy0"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1",key:"16une8"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1",key:"1hutg5"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1",key:"ldoo1y"}]],OA=nt("layout-dashboard",DA);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LA=[["path",{d:"m16 17 5-5-5-5",key:"1bji2h"}],["path",{d:"M21 12H9",key:"dn1m92"}],["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}]],MA=nt("log-out",LA);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FA=[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]],jA=nt("menu",FA);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UA=[["path",{d:"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",key:"kfwtm"}]],zA=nt("moon",UA);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $A=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],WA=nt("plus",$A);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BA=[["path",{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z",key:"q3az6g"}],["path",{d:"M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8",key:"1h4pet"}],["path",{d:"M12 17.5v-11",key:"1jc1ny"}]],VA=nt("receipt",BA);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HA=[["path",{d:"M12 2v13",key:"1km8f5"}],["path",{d:"m16 6-4-4-4 4",key:"13yo43"}],["path",{d:"M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8",key:"1b2hhj"}]],GA=nt("share",HA);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qA=[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]],KA=nt("sun",qA);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YA=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],QA=nt("triangle-alert",YA);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JA=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]],Jy=nt("users",JA);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XA=[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z",key:"1ngwbx"}]],ZA=nt("wrench",XA);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eD=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Bl=nt("x",eD);function En({className:t,variant:e="primary",size:n="default",...s}){const o={primary:"bg-primary text-primary-foreground hover:bg-primary/90",secondary:"bg-surface text-text hover:bg-surface/80 dark:bg-surface-dark dark:text-text-dark",outline:"border border-input bg-background hover:bg-surface hover:text-text dark:bg-background-dark dark:hover:bg-surface-dark",ghost:"hover:bg-surface hover:text-text dark:hover:bg-surface-dark",link:"text-primary underline-offset-4 hover:underline"},l={default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"};return E.jsx("button",{className:pi("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",o[e],l[n],t),...s})}function Qr({className:t,type:e,...n}){return E.jsx("input",{type:e,className:pi("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-surface-dark dark:text-text-dark dark:border-surface",t),...n})}const tD=({isOpen:t,onClose:e,children:n,className:s})=>t?E.jsxs("div",{className:"fixed inset-0 z-50 flex items-center justify-center",children:[E.jsx("div",{className:"fixed inset-0 bg-black/80 animate-in fade-in-0",onClick:e}),E.jsxs("div",{className:pi("relative z-50 grid w-full max-w-lg gap-4 border bg-background p-6 shadow-lg animate-in fade-in-0 zoom-in-95 sm:rounded-lg",s),children:[E.jsxs("button",{className:"absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none",onClick:e,children:[E.jsx(Bl,{className:"h-4 w-4"}),E.jsx("span",{className:"sr-only",children:"Close"})]}),n]})]}):null,nD=({className:t,...e})=>E.jsx("div",{className:pi("flex flex-col space-y-1.5 text-center sm:text-left",t),...e}),rD=({className:t,...e})=>E.jsx("h2",{className:pi("text-lg font-semibold leading-none tracking-tight",t),...e});function iD({isOpen:t,onClose:e,preSelectedCarId:n}){const{cars:s,customers:o,dealers:l,addTransaction:c,updateCar:h,transactions:f}=gf(),[m,y]=x.useState({carId:n||"",customerId:"",dealerId:"",startDate:"",endDate:"",notes:"",paymentStatus:"Pending",dailyRate:"",mileage:"",discount:"",customDuration:""}),[_,v]=x.useState({total:0,breakdown:[]}),S=s.find(I=>I.id===m.carId);x.useEffect(()=>{n&&y(I=>({...I,carId:n}))},[n,t]),x.useEffect(()=>{S&&y(I=>!I.dailyRate&&!I.mileage&&I.mileage!==0?{...I,dailyRate:S.price,mileage:S.mileage||""}:I)},[S]),x.useEffect(()=>{if(m.startDate&&m.endDate&&S||m.customDuration&&S){let I=0;if(m.customDuration)I=parseInt(m.customDuration);else if(m.startDate&&m.endDate){const q=new Date(m.startDate),fe=new Date(m.endDate),Ee=Math.abs(fe-q);I=Math.ceil(Ee/(1e3*60*60*24))}let A=0,z=[];const X=m.dailyRate?parseFloat(m.dailyRate):S.price;if(I>0)if(I>=20&&S.monthlyPrice){const q=S.monthlyPrice/30;A=Math.round(q*I+300),z.push({label:`Long Term Rate (>=20 days) (${I} days @ ₹${Math.round(q)}/day + ₹300)`,amount:A})}else if(I>=10&&S.tenDayPrice){const q=S.tenDayPrice/10;A=Math.round(q*I),z.push({label:`10-Day Rate Applied (${I} days @ ₹${Math.round(q)}/day)`,amount:A})}else A=Math.round(X*I),z.push({label:`Standard Daily Rate (${I} days @ ₹${X}/day)`,amount:A});const U=m.discount?parseFloat(m.discount):0;U>0&&(z.push({label:"Discount",amount:-U}),A=Math.max(0,A-U)),v({total:A,breakdown:z})}else v({total:0,breakdown:[]})},[m.startDate,m.endDate,S,m.dailyRate,m.discount,m.customDuration]);const N=I=>{if(I.preventDefault(),!S)return;const A=new Date(m.startDate),z=new Date(m.endDate);if(f.some(U=>{if(U.carId!==S.id||U.status==="Cancelled")return!1;const q=new Date(U.startDate),fe=new Date(U.endDate);return A>=q&&A<=fe||z>=q&&z<=fe||A<=q&&z>=fe})){alert("This car is already rented for the selected dates!");return}m.mileage!==""&&m.mileage!==null&&m.mileage!==void 0&&h(S.id,{mileage:parseInt(m.mileage)}),c({carId:S.id,customerId:m.customerId,dealerId:m.dealerId?m.dealerId:null,startDate:m.startDate,endDate:m.endDate,total:_.total,status:"Active",paymentStatus:m.paymentStatus,notes:m.notes,breakdown:_.breakdown,dailyRate:m.dailyRate,startMileage:m.mileage,discount:m.discount,customDuration:m.customDuration}),e(),y({carId:"",customerId:"",dealerId:"",startDate:"",endDate:"",notes:"",paymentStatus:"Pending",dailyRate:"",mileage:"",discount:""})};return E.jsxs(tD,{isOpen:t,onClose:e,className:"max-w-2xl",children:[E.jsx(nD,{children:E.jsx(rD,{children:"New Rental"})}),E.jsx("div",{className:"mt-4 max-h-[85vh] overflow-y-auto pr-2",children:E.jsxs("form",{onSubmit:N,className:"space-y-4",children:[E.jsxs("div",{className:"space-y-2",children:[E.jsx("label",{className:"text-sm font-medium",children:"Car"}),E.jsxs("select",{className:"flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-surface-dark dark:text-text-dark dark:border-surface",value:m.carId,onChange:I=>y({...m,carId:I.target.value,dailyRate:"",mileage:"",discount:""}),required:!0,children:[E.jsx("option",{value:"",children:"Select Car"}),s.map(I=>E.jsxs("option",{value:I.id,disabled:I.status==="Maintenance"||I.status==="Rented",children:[I.make," ",I.model," (",I.status,")"]},I.id))]})]}),E.jsxs("div",{className:"space-y-2",children:[E.jsx("label",{className:"text-sm font-medium",children:"Customer"}),E.jsxs("select",{className:"flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-surface-dark dark:text-text-dark dark:border-surface",value:m.customerId,onChange:I=>y({...m,customerId:I.target.value}),required:!0,children:[E.jsx("option",{value:"",children:"Select Customer"}),o.map(I=>E.jsx("option",{value:I.id,children:I.name},I.id))]})]}),E.jsxs("div",{className:"space-y-2",children:[E.jsx("label",{className:"text-sm font-medium",children:"Dealer (Optional)"}),E.jsxs("select",{className:"flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-surface-dark dark:text-text-dark dark:border-surface",value:m.dealerId,onChange:I=>y({...m,dealerId:I.target.value}),children:[E.jsx("option",{value:"",children:"Select Dealer"}),l.map(I=>E.jsx("option",{value:I.id,children:I.name},I.id))]})]}),E.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[E.jsxs("div",{className:"space-y-2",children:[E.jsx("label",{className:"text-sm font-medium",children:"Start Date & Time"}),E.jsx(Qr,{type:"datetime-local",value:m.startDate,onChange:I=>y({...m,startDate:I.target.value}),required:!0})]}),E.jsxs("div",{className:"space-y-2",children:[E.jsx("label",{className:"text-sm font-medium",children:"End Date & Time"}),E.jsx(Qr,{type:"datetime-local",value:m.endDate,onChange:I=>y({...m,endDate:I.target.value}),required:!0})]})]}),E.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[E.jsxs("div",{className:"space-y-2",children:[E.jsx("label",{className:"text-sm font-medium",children:"Per Day Amount"}),E.jsx(Qr,{type:"number",value:m.dailyRate,onChange:I=>y({...m,dailyRate:I.target.value}),placeholder:"Enter daily rate"})]}),E.jsxs("div",{className:"space-y-2",children:[E.jsx("label",{className:"text-sm font-medium",children:"Duration Override (Days)"}),E.jsx(Qr,{type:"number",value:m.customDuration,onChange:I=>y({...m,customDuration:I.target.value}),placeholder:"Auto-calc if empty"})]})]}),E.jsx("div",{className:"grid grid-cols-2 gap-4",children:E.jsxs("div",{className:"space-y-2",children:[E.jsx("label",{className:"text-sm font-medium",children:"Current Mileage"}),E.jsx(Qr,{type:"number",value:m.mileage,onChange:I=>y({...m,mileage:I.target.value}),placeholder:"Starting mileage"})]})}),E.jsxs("div",{className:"space-y-2",children:[E.jsx("label",{className:"text-sm font-medium",children:"Discount Amount"}),E.jsx(Qr,{type:"number",value:m.discount,onChange:I=>y({...m,discount:I.target.value}),placeholder:"Enter discount amount"})]}),E.jsxs("div",{className:"space-y-2",children:[E.jsx("label",{className:"text-sm font-medium",children:"Payment Status"}),E.jsxs("select",{className:"flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-surface-dark dark:text-text-dark dark:border-surface",value:m.paymentStatus,onChange:I=>y({...m,paymentStatus:I.target.value}),children:[E.jsx("option",{value:"Pending",children:"Pending"}),E.jsx("option",{value:"Paid",children:"Paid"}),E.jsx("option",{value:"Pay on Arrival",children:"Pay on Arrival"})]})]}),E.jsxs("div",{className:"space-y-2",children:[E.jsx("label",{className:"text-sm font-medium",children:"Notes"}),E.jsx(Qr,{placeholder:"Additional notes...",value:m.notes,onChange:I=>y({...m,notes:I.target.value})})]}),E.jsxs("div",{className:"bg-surface dark:bg-surface-dark p-4 rounded-lg space-y-2",children:[E.jsx("div",{className:"flex justify-between items-center mb-2",children:E.jsx("span",{className:"text-sm font-medium",children:"Price Breakdown"})}),_.breakdown.length>0?E.jsxs("div",{className:"space-y-1",children:[_.breakdown.map((I,A)=>E.jsxs("div",{className:"flex justify-between text-sm text-muted-foreground",children:[E.jsx("span",{children:I.label}),E.jsxs("span",{children:["₹",I.amount]})]},A)),E.jsxs("div",{className:"border-t pt-2 mt-2 flex justify-between text-sm font-bold",children:[E.jsx("span",{children:"Total"}),E.jsxs("span",{children:["₹",_.total]})]})]}):E.jsx("p",{className:"text-xs text-muted-foreground",children:"Select car and dates to see price breakdown."})]}),E.jsx(En,{type:"submit",className:"w-full",children:"Create Rental"})]})})]})}function sD(){const{cars:t,transactions:e}=gf(),n=x.useMemo(()=>{const o=[],l=new Date,c=new Date;c.setDate(l.getDate()+7),t.forEach(f=>{const m=(y,_)=>{if(!y)return;const v=new Date(y);if(v<=c){const S=Math.ceil((v-l)/864e5);let N="";S<0?N=`${_} Expired on ${v.toLocaleDateString()}`:S===0?N=`${_} Expires TODAY`:N=`${_} Expires in ${S} days`,o.push({id:`expiry-${f.id}-${_}`,type:"expiry",severity:S<=0?"destructive":"warning",title:`${f.make} ${f.model} (${f.plateNumber})`,message:N,link:`/cars/${f.id}`,date:y})}};m(f.insuranceValidTo,"Insurance"),m(f.taxValidTo,"Tax"),m(f.fitnessValidTo,"Fitness")});const h=new Date;return h.setDate(l.getDate()-15),e.forEach(f=>{if(f.status==="Cancelled")return;let m=0;f.payments?m=f.payments.reduce((v,S)=>S.type==="Credit"?v+Number(S.amount):v-Number(S.amount),0):f.amountPaid&&(m=Number(f.amountPaid));const _=(Number(f.total)||0)-m;if(_>10){const v=new Date(f.endDate);if(v<h){const S=Math.floor((l-v)/864e5),N=t.find(A=>A.id===f.carId),I=N?`${N.make} ${N.model}`:"Unknown Car";o.push({id:`overdue-${f.id}`,type:"payment",severity:"destructive",title:`Payment Overdue: ${I}`,message:`₹${_.toLocaleString()} pending. Due since ${S} days.`,link:"/transactions",actionData:f,date:f.endDate})}}}),o.sort((f,m)=>f.severity===m.severity?0:f.severity==="destructive"?-1:1)},[t,e]),s=n.length;return{notifications:n,unreadCount:s}}function Xy(){const{notifications:t,unreadCount:e}=sD(),[n,s]=x.useState(!1),o=x.useRef(null),l=Hl();x.useEffect(()=>{const h=f=>{o.current&&!o.current.contains(f.target)&&s(!1)};return document.addEventListener("mousedown",h),()=>document.removeEventListener("mousedown",h)},[]);const c=h=>{s(!1),h&&l(h)};return E.jsxs("div",{className:"relative",ref:o,children:[E.jsxs(En,{variant:"ghost",size:"icon",className:"relative",onClick:()=>s(!n),"aria-label":"Notifications",children:[E.jsx(Yy,{size:20}),e>0&&E.jsx("span",{className:"absolute top-1 right-2 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-background animate-pulse"})]}),n&&E.jsxs("div",{className:"absolute right-0 mt-2 w-80 md:w-96 bg-background dark:bg-surface-dark border border-border shadow-xl rounded-lg z-50 overflow-hidden animate-in fade-in zoom-in-95 duration-200",children:[E.jsxs("div",{className:"flex items-center justify-between p-4 border-b bg-muted/30",children:[E.jsx("h3",{className:"font-semibold",children:"Notifications"}),E.jsxs("span",{className:"text-xs text-muted-foreground",children:[e," Issues"]})]}),E.jsx("div",{className:"max-h-[70vh] overflow-y-auto",children:t.length===0?E.jsxs("div",{className:"p-8 text-center text-muted-foreground",children:[E.jsx(Yy,{className:"mx-auto h-8 w-8 mb-2 opacity-50"}),E.jsx("p",{className:"text-sm",children:"No new notifications"})]}):E.jsx("div",{className:"divide-y",children:t.map(h=>E.jsxs("div",{className:pi("p-4 hover:bg-muted/50 transition-colors cursor-pointer flex gap-3 items-start",h.severity==="destructive"?"bg-red-50/50 dark:bg-red-950/10":""),onClick:()=>c(h.link),children:[E.jsx("div",{className:"mt-1",children:h.severity==="destructive"?E.jsx(IA,{className:"h-5 w-5 text-destructive"}):E.jsx(QA,{className:"h-5 w-5 text-yellow-500"})}),E.jsxs("div",{className:"flex-1 space-y-1",children:[E.jsx("p",{className:"text-sm font-medium leading-none",children:h.title}),E.jsx("p",{className:"text-xs text-muted-foreground",children:h.message})]}),h.link&&E.jsx(PA,{className:"h-4 w-4 text-muted-foreground opacity-50"})]},h.id))})})]})]})}function oD({children:t}){const[e,n]=x.useState(!1),[s,o]=x.useState(!1),[l,c]=x.useState(!1),h=Kn(),f=Hl(),{logout:m}=mf(),{isLoading:y}=gf();async function _(){try{await m(),f("/login")}catch(N){console.error("Failed to log out",N)}}x.useEffect(()=>{e?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark")},[e]),x.useEffect(()=>{c(!1)},[h.pathname]);const v=[{icon:OA,label:"Dashboard",path:"/"},{icon:kA,label:"Cars",path:"/cars"},{icon:Jy,label:"Customers",path:"/customers"},{icon:Jy,label:"Dealers",path:"/dealers"},{icon:Qy,label:"Rentals",path:"/transactions"},{icon:VA,label:"Financials",path:"/financials"},{icon:ZA,label:"Maintenance",path:"/maintenance"},{icon:xA,label:"Register",path:"/register"},{icon:Qy,label:"Billing App",path:"/billing"}],S=()=>E.jsxs("div",{className:"flex flex-col h-full",children:[E.jsxs("div",{className:"p-6 flex justify-between items-center",children:[E.jsxs("div",{className:"flex items-center gap-3",children:[E.jsx("img",{src:"/DriveWay/logo.png",alt:"Driveway",className:"h-8 w-8 object-contain"}),E.jsx("h1",{className:"text-2xl font-bold text-primary",children:"Driveway"})]}),E.jsx(En,{variant:"ghost",size:"icon",className:"md:hidden",onClick:()=>c(!1),children:E.jsx(Bl,{size:20})})]}),E.jsx("div",{className:"px-4 mb-4",children:E.jsxs(En,{className:"w-full justify-start gap-2",onClick:()=>o(!0),children:[E.jsx(WA,{size:20}),"New Rental"]})}),E.jsx("nav",{className:"flex-1 px-4 space-y-2 overflow-y-auto",children:v.map(N=>{const I=N.icon,A=h.pathname===N.path;return E.jsxs(dh,{to:N.path,className:pi("flex items-center gap-3 px-4 py-3 rounded-lg transition-colors",A?"bg-primary/10 text-primary":"text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"),children:[E.jsx(I,{size:20}),E.jsx("span",{className:"font-medium",children:N.label})]},N.path)})}),E.jsxs("div",{className:"p-4 border-t border-gray-200 dark:border-gray-800",children:[E.jsxs(En,{variant:"ghost",className:"w-full justify-start gap-3",onClick:()=>n(!e),children:[e?E.jsx(KA,{size:20}):E.jsx(zA,{size:20}),E.jsx("span",{children:e?"Light Mode":"Dark Mode"})]}),E.jsxs(En,{variant:"ghost",className:"w-full justify-start gap-3 mt-2 text-destructive hover:text-destructive hover:bg-destructive/10",onClick:_,children:[E.jsx(MA,{size:20}),E.jsx("span",{children:"Log Out"})]})]})]});return y?E.jsx("div",{className:"min-h-screen bg-surface dark:bg-background-dark flex items-center justify-center",children:E.jsxs("div",{className:"flex flex-col items-center gap-4",children:[E.jsx("img",{src:"/DriveWay/logo.png",alt:"Loading...",className:"h-16 w-16 animate-pulse object-contain"}),E.jsx("p",{className:"text-muted-foreground animate-pulse",children:"Loading..."})]})}):E.jsxs("div",{className:"min-h-screen bg-surface dark:bg-background-dark flex flex-col md:flex-row",children:[E.jsxs("div",{className:"md:hidden bg-background dark:bg-surface-dark border-b border-gray-200 dark:border-gray-800 p-4 flex justify-between items-center sticky top-0 z-20",children:[E.jsxs("div",{className:"flex items-center gap-3",children:[E.jsx("img",{src:"/DriveWay/logo.png",alt:"Driveway",className:"h-8 w-8 object-contain"}),E.jsx("h1",{className:"text-2xl font-bold text-primary",children:"Driveway"})]}),E.jsxs("div",{className:"flex items-center gap-2",children:[E.jsx(Xy,{}),E.jsx(En,{variant:"ghost",size:"icon",onClick:()=>c(!0),children:E.jsx(jA,{size:24})})]})]}),E.jsx("aside",{className:"hidden md:flex w-64 bg-background dark:bg-surface-dark border-r border-gray-200 dark:border-gray-800 flex-col sticky top-0 h-screen",children:E.jsx(S,{})}),l&&E.jsxs("div",{className:"fixed inset-0 z-50 md:hidden",children:[E.jsx("div",{className:"absolute inset-0 bg-black/50",onClick:()=>c(!1)}),E.jsx("div",{className:"absolute left-0 top-0 bottom-0 w-64 bg-background dark:bg-surface-dark shadow-xl animate-in slide-in-from-left",children:E.jsx(S,{})})]}),E.jsxs("main",{className:"flex-1 overflow-auto w-full relative",children:[E.jsx("div",{className:"hidden md:flex justify-end px-8 pt-6",children:E.jsx(Xy,{})}),E.jsx("div",{className:"p-4 md:p-8 max-w-7xl mx-auto pt-4 md:pt-2",children:t})]}),E.jsx(iD,{isOpen:s,onClose:()=>o(!1)})]})}function aD(){const[t,e]=x.useState(null),[n,s]=x.useState(!1),[o,l]=x.useState(!1);x.useEffect(()=>{window.matchMedia("(display-mode: standalone)").matches&&l(!0);const f=y=>{y.preventDefault(),e(y)};return window.addEventListener("beforeinstallprompt",f),/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream&&!window.matchMedia("(display-mode: standalone)").matches&&(sessionStorage.getItem("iosInstallDismissed")||s(!0)),()=>{window.removeEventListener("beforeinstallprompt",f)}},[]);const c=async()=>{if(!t)return;t.prompt();const{outcome:f}=await t.userChoice;f==="accepted"&&e(null)},h=()=>{s(!1),sessionStorage.setItem("iosInstallDismissed","true")};return o?null:t?E.jsx("div",{className:"fixed bottom-4 left-4 right-4 z-50 bg-surface dark:bg-surface-dark border border-primary/20 shadow-lg rounded-lg p-4 animate-in slide-in-from-bottom duration-300",children:E.jsxs("div",{className:"flex items-center justify-between gap-4",children:[E.jsxs("div",{className:"flex-1",children:[E.jsx("h3",{className:"font-semibold text-primary",children:"Install Driveway"}),E.jsx("p",{className:"text-sm text-muted-foreground",children:"Install our app for a better experience"})]}),E.jsxs("div",{className:"flex gap-2",children:[E.jsx(En,{variant:"ghost",size:"icon",onClick:()=>e(null),children:E.jsx(Bl,{className:"h-4 w-4"})}),E.jsxs(En,{onClick:c,className:"gap-2",children:[E.jsx(bA,{className:"h-4 w-4"})," Install"]})]})]})}):n?E.jsx("div",{className:"fixed bottom-0 left-0 right-0 z-50 bg-surface dark:bg-surface-dark border-t border-gray-200 dark:border-gray-800 p-4 shadow-lg animate-in slide-in-from-bottom duration-300 pb-8",children:E.jsxs("div",{className:"max-w-md mx-auto relative",children:[E.jsx(En,{variant:"ghost",size:"icon",className:"absolute -top-2 right-0",onClick:h,children:E.jsx(Bl,{className:"h-4 w-4"})}),E.jsxs("div",{className:"flex items-start gap-4 pr-8",children:[E.jsx("div",{className:"bg-primary/10 p-3 rounded-xl",children:E.jsx(GA,{className:"h-6 w-6 text-primary"})}),E.jsxs("div",{children:[E.jsx("h3",{className:"font-semibold text-lg mb-1",children:"Install Driveway"}),E.jsxs("p",{className:"text-sm text-muted-foreground leading-relaxed",children:["To install this app on your iPhone, tap the ",E.jsx("span",{className:"font-bold",children:"Share"})," icon below and select ",E.jsx("span",{className:"font-bold",children:'"Add to Home Screen"'}),"."]})]})]}),E.jsx("div",{className:"absolute -bottom-8 left-1/2 -translate-x-1/2 w-4 h-4 bg-surface dark:bg-surface-dark rotate-45 border-b border-r border-gray-200 dark:border-gray-800"})]})}):null}function lD({children:t}){const{currentUser:e}=mf();return e?t:E.jsx(ok,{to:"/login"})}const uD=x.lazy(()=>_t(()=>import("./Dashboard-cbeA5lxY.js"),__vite__mapDeps([0,1,2,3,4,5])).then(t=>({default:t.Dashboard}))),cD=x.lazy(()=>_t(()=>import("./Cars-DsmwMR0W.js"),__vite__mapDeps([6,1,7,8,9,10,11,12])).then(t=>({default:t.Cars}))),dD=x.lazy(()=>_t(()=>import("./CarDetails-C_2a2O4R.js"),__vite__mapDeps([13,14,7,15,16,12,3,17,18,19,20,21,11,22,23,24])).then(t=>({default:t.CarDetails}))),hD=x.lazy(()=>_t(()=>import("./Customers-OjSWDFPB.js"),__vite__mapDeps([25,1,26,27,11,8,28,29,30,20,24])).then(t=>({default:t.Customers}))),fD=x.lazy(()=>_t(()=>import("./CustomerDetailsPage-HsrYdCWX.js"),__vite__mapDeps([31,1,26,32,14,12,27,33,10,11,34,35,2,22,20,21,36,30,24,37])).then(t=>({default:t.CustomerDetailsPage}))),pD=x.lazy(()=>_t(()=>import("./Dealers-WhHJiOIZ.js"),__vite__mapDeps([38,1,17,12,20,21,10,23,8,29,30,27])).then(t=>({default:t.Dealers}))),mD=x.lazy(()=>_t(()=>import("./DealerDetailsPage-DkH319uF.js"),__vite__mapDeps([39,1,19,32,14,12,27,33,10,11,34,35,23,21,20,8,22,36])).then(t=>({default:t.DealerDetailsPage}))),gD=x.lazy(()=>_t(()=>import("./Transactions-BjiuDUQD.js"),__vite__mapDeps([40,1,19,32,14,12,27,33,10,11,8,29,30])).then(t=>({default:t.Transactions}))),yD=x.lazy(()=>_t(()=>import("./Financials-CW33SJ_d.js"),__vite__mapDeps([41,19,37,16,23,11,4,8,9])).then(t=>({default:t.Financials}))),_D=x.lazy(()=>_t(()=>import("./Maintenance-D5_itn0d.js"),__vite__mapDeps([42,1,19,43,15,16,12,3,17,10,22,33,2,36,8,28,5,9,27,20])).then(t=>({default:t.Maintenance}))),vD=x.lazy(()=>_t(()=>import("./Register-CyD0-HvJ.js"),__vite__mapDeps([44,19,43,12,27,33,8,9,35])).then(t=>({default:t.Register}))),wD=x.lazy(()=>_t(()=>import("./Login-BrG4ldiT.js"),__vite__mapDeps([45,1])).then(t=>({default:t.Login}))),ED=x.lazy(()=>_t(()=>import("./Signup-c0E7AVSj.js"),__vite__mapDeps([46,1])).then(t=>({default:t.Signup}))),CD=x.lazy(()=>_t(()=>import("./BillingDashboard-B12ftry5.js"),__vite__mapDeps([47,1])).then(t=>({default:t.BillingDashboard}))),kD=x.lazy(()=>_t(()=>import("./CreateInvoice-Bx6ydhyM.js"),__vite__mapDeps([48,1,18,49,50,33])).then(t=>({default:t.CreateInvoice}))),SD=x.lazy(()=>_t(()=>import("./BillingHistory-DlqZyNZp.js"),__vite__mapDeps([51,1,18,49,35,8,33])).then(t=>({default:t.BillingHistory}))),ID=x.lazy(()=>_t(()=>import("./BillingSettings-LgBR8At1.js"),__vite__mapDeps([52,1,35,50])).then(t=>({default:t.BillingSettings}))),Zy=()=>E.jsx("div",{className:"flex items-center justify-center p-8 w-full h-full min-h-[50vh]",children:E.jsxs("div",{className:"flex flex-col items-center gap-2",children:[E.jsx("div",{className:"h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent"}),E.jsx("p",{className:"text-sm text-muted-foreground",children:"Loading page..."})]})});function TD(){return E.jsx(pA,{children:E.jsx(mA,{children:E.jsx(Nk,{basename:"/DriveWay/",children:E.jsxs(x.Suspense,{fallback:E.jsx(Zy,{}),children:[E.jsxs(wg,{children:[E.jsx(et,{path:"/login",element:E.jsx(wD,{})}),E.jsx(et,{path:"/signup",element:E.jsx(ED,{})}),E.jsx(et,{path:"/*",element:E.jsx(lD,{children:E.jsx(oD,{children:E.jsx(x.Suspense,{fallback:E.jsx(Zy,{}),children:E.jsxs(wg,{children:[E.jsx(et,{path:"/",element:E.jsx(uD,{})}),E.jsx(et,{path:"/cars",element:E.jsx(cD,{})}),E.jsx(et,{path:"/cars/:id",element:E.jsx(dD,{})}),E.jsx(et,{path:"/customers",element:E.jsx(hD,{})}),E.jsx(et,{path:"/customers/:id",element:E.jsx(fD,{})}),E.jsx(et,{path:"/dealers",element:E.jsx(pD,{})}),E.jsx(et,{path:"/dealers/:id",element:E.jsx(mD,{})}),E.jsx(et,{path:"/transactions",element:E.jsx(gD,{})}),E.jsx(et,{path:"/financials",element:E.jsx(yD,{})}),E.jsx(et,{path:"/maintenance",element:E.jsx(_D,{})}),E.jsx(et,{path:"/register",element:E.jsx(vD,{})}),E.jsx(et,{path:"/billing",element:E.jsx(CD,{})}),E.jsx(et,{path:"/billing/create",element:E.jsx(kD,{})}),E.jsx(et,{path:"/billing/history",element:E.jsx(SD,{})}),E.jsx(et,{path:"/billing/settings",element:E.jsx(ID,{})})]})})})})})]}),E.jsx(aD,{})]})})})})}class xD extends rh.Component{constructor(e){super(e),this.state={hasError:!1,error:null,errorInfo:null}}static getDerivedStateFromError(e){return{hasError:!0}}componentDidCatch(e,n){this.setState({error:e,errorInfo:n}),console.error("Uncaught error:",e,n)}render(){return this.state.hasError?E.jsxs("div",{style:{padding:"20px",fontFamily:"system-ui"},children:[E.jsx("h1",{style:{color:"red"},children:"Something went wrong."}),E.jsxs("details",{style:{whiteSpace:"pre-wrap"},children:[this.state.error&&this.state.error.toString(),E.jsx("br",{}),this.state.errorInfo&&this.state.errorInfo.componentStack]})]}):this.props.children}}pC.createRoot(document.getElementById("root")).render(E.jsx(rh.StrictMode,{children:E.jsx(xD,{children:E.jsx(TD,{})})}));export{En as B,kA as C,tD as D,Qy as F,iD as G,Qr as I,dh as L,WA as P,ND as R,QA as T,Jy as U,ZA as W,Bl as X,mf as a,Hl as b,IP as c,pi as d,nt as e,bA as f,PD as g,nD as h,rD as i,E as j,AD as k,IA as l,dC as m,e_ as n,nh as o,Kn as p,bD as q,x as r,RD as s,rh as t,gf as u};
