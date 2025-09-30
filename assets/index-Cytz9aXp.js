(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))c(s);new MutationObserver(s=>{for(const d of s)if(d.type==="childList")for(const m of d.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&c(m)}).observe(document,{childList:!0,subtree:!0});function u(s){const d={};return s.integrity&&(d.integrity=s.integrity),s.referrerPolicy&&(d.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?d.credentials="include":s.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function c(s){if(s.ep)return;s.ep=!0;const d=u(s);fetch(s.href,d)}})();function bp(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var Oc={exports:{}},li={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var G0;function mp(){if(G0)return li;G0=1;var i=Symbol.for("react.transitional.element"),o=Symbol.for("react.fragment");function u(c,s,d){var m=null;if(d!==void 0&&(m=""+d),s.key!==void 0&&(m=""+s.key),"key"in s){d={};for(var y in s)y!=="key"&&(d[y]=s[y])}else d=s;return s=d.ref,{$$typeof:i,type:c,key:m,ref:s!==void 0?s:null,props:d}}return li.Fragment=o,li.jsx=u,li.jsxs=u,li}var Z0;function pp(){return Z0||(Z0=1,Oc.exports=mp()),Oc.exports}var g=pp(),Tc={exports:{}},fe={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var V0;function gp(){if(V0)return fe;V0=1;var i=Symbol.for("react.transitional.element"),o=Symbol.for("react.portal"),u=Symbol.for("react.fragment"),c=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),d=Symbol.for("react.consumer"),m=Symbol.for("react.context"),y=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),C=Symbol.iterator;function M(A){return A===null||typeof A!="object"?null:(A=C&&A[C]||A["@@iterator"],typeof A=="function"?A:null)}var B={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},w=Object.assign,E={};function L(A,Q,P){this.props=A,this.context=Q,this.refs=E,this.updater=P||B}L.prototype.isReactComponent={},L.prototype.setState=function(A,Q){if(typeof A!="object"&&typeof A!="function"&&A!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,A,Q,"setState")},L.prototype.forceUpdate=function(A){this.updater.enqueueForceUpdate(this,A,"forceUpdate")};function q(){}q.prototype=L.prototype;function X(A,Q,P){this.props=A,this.context=Q,this.refs=E,this.updater=P||B}var G=X.prototype=new q;G.constructor=X,w(G,L.prototype),G.isPureReactComponent=!0;var ce=Array.isArray,J={H:null,A:null,T:null,S:null,V:null},ue=Object.prototype.hasOwnProperty;function Y(A,Q,P,j,$,se){return P=se.ref,{$$typeof:i,type:A,key:Q,ref:P!==void 0?P:null,props:se}}function oe(A,Q){return Y(A.type,Q,void 0,void 0,void 0,A.props)}function V(A){return typeof A=="object"&&A!==null&&A.$$typeof===i}function he(A){var Q={"=":"=0",":":"=2"};return"$"+A.replace(/[=:]/g,function(P){return Q[P]})}var F=/\/+/g;function ee(A,Q){return typeof A=="object"&&A!==null&&A.key!=null?he(""+A.key):Q.toString(36)}function ve(){}function Tt(A){switch(A.status){case"fulfilled":return A.value;case"rejected":throw A.reason;default:switch(typeof A.status=="string"?A.then(ve,ve):(A.status="pending",A.then(function(Q){A.status==="pending"&&(A.status="fulfilled",A.value=Q)},function(Q){A.status==="pending"&&(A.status="rejected",A.reason=Q)})),A.status){case"fulfilled":return A.value;case"rejected":throw A.reason}}throw A}function je(A,Q,P,j,$){var se=typeof A;(se==="undefined"||se==="boolean")&&(A=null);var ie=!1;if(A===null)ie=!0;else switch(se){case"bigint":case"string":case"number":ie=!0;break;case"object":switch(A.$$typeof){case i:case o:ie=!0;break;case v:return ie=A._init,je(ie(A._payload),Q,P,j,$)}}if(ie)return $=$(A),ie=j===""?"."+ee(A,0):j,ce($)?(P="",ie!=null&&(P=ie.replace(F,"$&/")+"/"),je($,Q,P,"",function(vn){return vn})):$!=null&&(V($)&&($=oe($,P+($.key==null||A&&A.key===$.key?"":(""+$.key).replace(F,"$&/")+"/")+ie)),Q.push($)),1;ie=0;var it=j===""?".":j+":";if(ce(A))for(var Me=0;Me<A.length;Me++)j=A[Me],se=it+ee(j,Me),ie+=je(j,Q,P,se,$);else if(Me=M(A),typeof Me=="function")for(A=Me.call(A),Me=0;!(j=A.next()).done;)j=j.value,se=it+ee(j,Me++),ie+=je(j,Q,P,se,$);else if(se==="object"){if(typeof A.then=="function")return je(Tt(A),Q,P,j,$);throw Q=String(A),Error("Objects are not valid as a React child (found: "+(Q==="[object Object]"?"object with keys {"+Object.keys(A).join(", ")+"}":Q)+"). If you meant to render a collection of children, use an array instead.")}return ie}function R(A,Q,P){if(A==null)return A;var j=[],$=0;return je(A,j,"","",function(se){return Q.call(P,se,$++)}),j}function Z(A){if(A._status===-1){var Q=A._result;Q=Q(),Q.then(function(P){(A._status===0||A._status===-1)&&(A._status=1,A._result=P)},function(P){(A._status===0||A._status===-1)&&(A._status=2,A._result=P)}),A._status===-1&&(A._status=0,A._result=Q)}if(A._status===1)return A._result.default;throw A._result}var te=typeof reportError=="function"?reportError:function(A){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var Q=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof A=="object"&&A!==null&&typeof A.message=="string"?String(A.message):String(A),error:A});if(!window.dispatchEvent(Q))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",A);return}console.error(A)};function ye(){}return fe.Children={map:R,forEach:function(A,Q,P){R(A,function(){Q.apply(this,arguments)},P)},count:function(A){var Q=0;return R(A,function(){Q++}),Q},toArray:function(A){return R(A,function(Q){return Q})||[]},only:function(A){if(!V(A))throw Error("React.Children.only expected to receive a single React element child.");return A}},fe.Component=L,fe.Fragment=u,fe.Profiler=s,fe.PureComponent=X,fe.StrictMode=c,fe.Suspense=p,fe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=J,fe.__COMPILER_RUNTIME={__proto__:null,c:function(A){return J.H.useMemoCache(A)}},fe.cache=function(A){return function(){return A.apply(null,arguments)}},fe.cloneElement=function(A,Q,P){if(A==null)throw Error("The argument must be a React element, but you passed "+A+".");var j=w({},A.props),$=A.key,se=void 0;if(Q!=null)for(ie in Q.ref!==void 0&&(se=void 0),Q.key!==void 0&&($=""+Q.key),Q)!ue.call(Q,ie)||ie==="key"||ie==="__self"||ie==="__source"||ie==="ref"&&Q.ref===void 0||(j[ie]=Q[ie]);var ie=arguments.length-2;if(ie===1)j.children=P;else if(1<ie){for(var it=Array(ie),Me=0;Me<ie;Me++)it[Me]=arguments[Me+2];j.children=it}return Y(A.type,$,void 0,void 0,se,j)},fe.createContext=function(A){return A={$$typeof:m,_currentValue:A,_currentValue2:A,_threadCount:0,Provider:null,Consumer:null},A.Provider=A,A.Consumer={$$typeof:d,_context:A},A},fe.createElement=function(A,Q,P){var j,$={},se=null;if(Q!=null)for(j in Q.key!==void 0&&(se=""+Q.key),Q)ue.call(Q,j)&&j!=="key"&&j!=="__self"&&j!=="__source"&&($[j]=Q[j]);var ie=arguments.length-2;if(ie===1)$.children=P;else if(1<ie){for(var it=Array(ie),Me=0;Me<ie;Me++)it[Me]=arguments[Me+2];$.children=it}if(A&&A.defaultProps)for(j in ie=A.defaultProps,ie)$[j]===void 0&&($[j]=ie[j]);return Y(A,se,void 0,void 0,null,$)},fe.createRef=function(){return{current:null}},fe.forwardRef=function(A){return{$$typeof:y,render:A}},fe.isValidElement=V,fe.lazy=function(A){return{$$typeof:v,_payload:{_status:-1,_result:A},_init:Z}},fe.memo=function(A,Q){return{$$typeof:h,type:A,compare:Q===void 0?null:Q}},fe.startTransition=function(A){var Q=J.T,P={};J.T=P;try{var j=A(),$=J.S;$!==null&&$(P,j),typeof j=="object"&&j!==null&&typeof j.then=="function"&&j.then(ye,te)}catch(se){te(se)}finally{J.T=Q}},fe.unstable_useCacheRefresh=function(){return J.H.useCacheRefresh()},fe.use=function(A){return J.H.use(A)},fe.useActionState=function(A,Q,P){return J.H.useActionState(A,Q,P)},fe.useCallback=function(A,Q){return J.H.useCallback(A,Q)},fe.useContext=function(A){return J.H.useContext(A)},fe.useDebugValue=function(){},fe.useDeferredValue=function(A,Q){return J.H.useDeferredValue(A,Q)},fe.useEffect=function(A,Q,P){var j=J.H;if(typeof P=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return j.useEffect(A,Q)},fe.useId=function(){return J.H.useId()},fe.useImperativeHandle=function(A,Q,P){return J.H.useImperativeHandle(A,Q,P)},fe.useInsertionEffect=function(A,Q){return J.H.useInsertionEffect(A,Q)},fe.useLayoutEffect=function(A,Q){return J.H.useLayoutEffect(A,Q)},fe.useMemo=function(A,Q){return J.H.useMemo(A,Q)},fe.useOptimistic=function(A,Q){return J.H.useOptimistic(A,Q)},fe.useReducer=function(A,Q,P){return J.H.useReducer(A,Q,P)},fe.useRef=function(A){return J.H.useRef(A)},fe.useState=function(A){return J.H.useState(A)},fe.useSyncExternalStore=function(A,Q,P){return J.H.useSyncExternalStore(A,Q,P)},fe.useTransition=function(){return J.H.useTransition()},fe.version="19.1.1",fe}var P0;function Qc(){return P0||(P0=1,Tc.exports=gp()),Tc.exports}var O=Qc();const Ce=bp(O);var wc={exports:{}},ii={},Nc={exports:{}},Cc={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var J0;function vp(){return J0||(J0=1,function(i){function o(R,Z){var te=R.length;R.push(Z);e:for(;0<te;){var ye=te-1>>>1,A=R[ye];if(0<s(A,Z))R[ye]=Z,R[te]=A,te=ye;else break e}}function u(R){return R.length===0?null:R[0]}function c(R){if(R.length===0)return null;var Z=R[0],te=R.pop();if(te!==Z){R[0]=te;e:for(var ye=0,A=R.length,Q=A>>>1;ye<Q;){var P=2*(ye+1)-1,j=R[P],$=P+1,se=R[$];if(0>s(j,te))$<A&&0>s(se,j)?(R[ye]=se,R[$]=te,ye=$):(R[ye]=j,R[P]=te,ye=P);else if($<A&&0>s(se,te))R[ye]=se,R[$]=te,ye=$;else break e}}return Z}function s(R,Z){var te=R.sortIndex-Z.sortIndex;return te!==0?te:R.id-Z.id}if(i.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var d=performance;i.unstable_now=function(){return d.now()}}else{var m=Date,y=m.now();i.unstable_now=function(){return m.now()-y}}var p=[],h=[],v=1,C=null,M=3,B=!1,w=!1,E=!1,L=!1,q=typeof setTimeout=="function"?setTimeout:null,X=typeof clearTimeout=="function"?clearTimeout:null,G=typeof setImmediate<"u"?setImmediate:null;function ce(R){for(var Z=u(h);Z!==null;){if(Z.callback===null)c(h);else if(Z.startTime<=R)c(h),Z.sortIndex=Z.expirationTime,o(p,Z);else break;Z=u(h)}}function J(R){if(E=!1,ce(R),!w)if(u(p)!==null)w=!0,ue||(ue=!0,ee());else{var Z=u(h);Z!==null&&je(J,Z.startTime-R)}}var ue=!1,Y=-1,oe=5,V=-1;function he(){return L?!0:!(i.unstable_now()-V<oe)}function F(){if(L=!1,ue){var R=i.unstable_now();V=R;var Z=!0;try{e:{w=!1,E&&(E=!1,X(Y),Y=-1),B=!0;var te=M;try{t:{for(ce(R),C=u(p);C!==null&&!(C.expirationTime>R&&he());){var ye=C.callback;if(typeof ye=="function"){C.callback=null,M=C.priorityLevel;var A=ye(C.expirationTime<=R);if(R=i.unstable_now(),typeof A=="function"){C.callback=A,ce(R),Z=!0;break t}C===u(p)&&c(p),ce(R)}else c(p);C=u(p)}if(C!==null)Z=!0;else{var Q=u(h);Q!==null&&je(J,Q.startTime-R),Z=!1}}break e}finally{C=null,M=te,B=!1}Z=void 0}}finally{Z?ee():ue=!1}}}var ee;if(typeof G=="function")ee=function(){G(F)};else if(typeof MessageChannel<"u"){var ve=new MessageChannel,Tt=ve.port2;ve.port1.onmessage=F,ee=function(){Tt.postMessage(null)}}else ee=function(){q(F,0)};function je(R,Z){Y=q(function(){R(i.unstable_now())},Z)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(R){R.callback=null},i.unstable_forceFrameRate=function(R){0>R||125<R?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):oe=0<R?Math.floor(1e3/R):5},i.unstable_getCurrentPriorityLevel=function(){return M},i.unstable_next=function(R){switch(M){case 1:case 2:case 3:var Z=3;break;default:Z=M}var te=M;M=Z;try{return R()}finally{M=te}},i.unstable_requestPaint=function(){L=!0},i.unstable_runWithPriority=function(R,Z){switch(R){case 1:case 2:case 3:case 4:case 5:break;default:R=3}var te=M;M=R;try{return Z()}finally{M=te}},i.unstable_scheduleCallback=function(R,Z,te){var ye=i.unstable_now();switch(typeof te=="object"&&te!==null?(te=te.delay,te=typeof te=="number"&&0<te?ye+te:ye):te=ye,R){case 1:var A=-1;break;case 2:A=250;break;case 5:A=1073741823;break;case 4:A=1e4;break;default:A=5e3}return A=te+A,R={id:v++,callback:Z,priorityLevel:R,startTime:te,expirationTime:A,sortIndex:-1},te>ye?(R.sortIndex=te,o(h,R),u(p)===null&&R===u(h)&&(E?(X(Y),Y=-1):E=!0,je(J,te-ye))):(R.sortIndex=A,o(p,R),w||B||(w=!0,ue||(ue=!0,ee()))),R},i.unstable_shouldYield=he,i.unstable_wrapCallback=function(R){var Z=M;return function(){var te=M;M=Z;try{return R.apply(this,arguments)}finally{M=te}}}}(Cc)),Cc}var K0;function xp(){return K0||(K0=1,Nc.exports=vp()),Nc.exports}var Dc={exports:{}},lt={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var F0;function yp(){if(F0)return lt;F0=1;var i=Qc();function o(p){var h="https://react.dev/errors/"+p;if(1<arguments.length){h+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)h+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+p+"; visit "+h+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function u(){}var c={d:{f:u,r:function(){throw Error(o(522))},D:u,C:u,L:u,m:u,X:u,S:u,M:u},p:0,findDOMNode:null},s=Symbol.for("react.portal");function d(p,h,v){var C=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:s,key:C==null?null:""+C,children:p,containerInfo:h,implementation:v}}var m=i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function y(p,h){if(p==="font")return"";if(typeof h=="string")return h==="use-credentials"?h:""}return lt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=c,lt.createPortal=function(p,h){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!h||h.nodeType!==1&&h.nodeType!==9&&h.nodeType!==11)throw Error(o(299));return d(p,h,null,v)},lt.flushSync=function(p){var h=m.T,v=c.p;try{if(m.T=null,c.p=2,p)return p()}finally{m.T=h,c.p=v,c.d.f()}},lt.preconnect=function(p,h){typeof p=="string"&&(h?(h=h.crossOrigin,h=typeof h=="string"?h==="use-credentials"?h:"":void 0):h=null,c.d.C(p,h))},lt.prefetchDNS=function(p){typeof p=="string"&&c.d.D(p)},lt.preinit=function(p,h){if(typeof p=="string"&&h&&typeof h.as=="string"){var v=h.as,C=y(v,h.crossOrigin),M=typeof h.integrity=="string"?h.integrity:void 0,B=typeof h.fetchPriority=="string"?h.fetchPriority:void 0;v==="style"?c.d.S(p,typeof h.precedence=="string"?h.precedence:void 0,{crossOrigin:C,integrity:M,fetchPriority:B}):v==="script"&&c.d.X(p,{crossOrigin:C,integrity:M,fetchPriority:B,nonce:typeof h.nonce=="string"?h.nonce:void 0})}},lt.preinitModule=function(p,h){if(typeof p=="string")if(typeof h=="object"&&h!==null){if(h.as==null||h.as==="script"){var v=y(h.as,h.crossOrigin);c.d.M(p,{crossOrigin:v,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0})}}else h==null&&c.d.M(p)},lt.preload=function(p,h){if(typeof p=="string"&&typeof h=="object"&&h!==null&&typeof h.as=="string"){var v=h.as,C=y(v,h.crossOrigin);c.d.L(p,v,{crossOrigin:C,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0,type:typeof h.type=="string"?h.type:void 0,fetchPriority:typeof h.fetchPriority=="string"?h.fetchPriority:void 0,referrerPolicy:typeof h.referrerPolicy=="string"?h.referrerPolicy:void 0,imageSrcSet:typeof h.imageSrcSet=="string"?h.imageSrcSet:void 0,imageSizes:typeof h.imageSizes=="string"?h.imageSizes:void 0,media:typeof h.media=="string"?h.media:void 0})}},lt.preloadModule=function(p,h){if(typeof p=="string")if(h){var v=y(h.as,h.crossOrigin);c.d.m(p,{as:typeof h.as=="string"&&h.as!=="script"?h.as:void 0,crossOrigin:v,integrity:typeof h.integrity=="string"?h.integrity:void 0})}else c.d.m(p)},lt.requestFormReset=function(p){c.d.r(p)},lt.unstable_batchedUpdates=function(p,h){return p(h)},lt.useFormState=function(p,h,v){return m.H.useFormState(p,h,v)},lt.useFormStatus=function(){return m.H.useHostTransitionStatus()},lt.version="19.1.1",lt}var W0;function Ap(){if(W0)return Dc.exports;W0=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(o){console.error(o)}}return i(),Dc.exports=yp(),Dc.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var I0;function Sp(){if(I0)return ii;I0=1;var i=xp(),o=Qc(),u=Ap();function c(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function s(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function d(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function m(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function y(e){if(d(e)!==e)throw Error(c(188))}function p(e){var t=e.alternate;if(!t){if(t=d(e),t===null)throw Error(c(188));return t!==e?null:e}for(var n=e,a=t;;){var l=n.return;if(l===null)break;var r=l.alternate;if(r===null){if(a=l.return,a!==null){n=a;continue}break}if(l.child===r.child){for(r=l.child;r;){if(r===n)return y(l),e;if(r===a)return y(l),t;r=r.sibling}throw Error(c(188))}if(n.return!==a.return)n=l,a=r;else{for(var f=!1,b=l.child;b;){if(b===n){f=!0,n=l,a=r;break}if(b===a){f=!0,a=l,n=r;break}b=b.sibling}if(!f){for(b=r.child;b;){if(b===n){f=!0,n=r,a=l;break}if(b===a){f=!0,a=r,n=l;break}b=b.sibling}if(!f)throw Error(c(189))}}if(n.alternate!==a)throw Error(c(190))}if(n.tag!==3)throw Error(c(188));return n.stateNode.current===n?e:t}function h(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=h(e),t!==null)return t;e=e.sibling}return null}var v=Object.assign,C=Symbol.for("react.element"),M=Symbol.for("react.transitional.element"),B=Symbol.for("react.portal"),w=Symbol.for("react.fragment"),E=Symbol.for("react.strict_mode"),L=Symbol.for("react.profiler"),q=Symbol.for("react.provider"),X=Symbol.for("react.consumer"),G=Symbol.for("react.context"),ce=Symbol.for("react.forward_ref"),J=Symbol.for("react.suspense"),ue=Symbol.for("react.suspense_list"),Y=Symbol.for("react.memo"),oe=Symbol.for("react.lazy"),V=Symbol.for("react.activity"),he=Symbol.for("react.memo_cache_sentinel"),F=Symbol.iterator;function ee(e){return e===null||typeof e!="object"?null:(e=F&&e[F]||e["@@iterator"],typeof e=="function"?e:null)}var ve=Symbol.for("react.client.reference");function Tt(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===ve?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case w:return"Fragment";case L:return"Profiler";case E:return"StrictMode";case J:return"Suspense";case ue:return"SuspenseList";case V:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case B:return"Portal";case G:return(e.displayName||"Context")+".Provider";case X:return(e._context.displayName||"Context")+".Consumer";case ce:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Y:return t=e.displayName||null,t!==null?t:Tt(e.type)||"Memo";case oe:t=e._payload,e=e._init;try{return Tt(e(t))}catch{}}return null}var je=Array.isArray,R=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Z=u.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,te={pending:!1,data:null,method:null,action:null},ye=[],A=-1;function Q(e){return{current:e}}function P(e){0>A||(e.current=ye[A],ye[A]=null,A--)}function j(e,t){A++,ye[A]=e.current,e.current=t}var $=Q(null),se=Q(null),ie=Q(null),it=Q(null);function Me(e,t){switch(j(ie,t),j(se,e),j($,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?v0(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=v0(t),e=x0(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}P($),j($,e)}function vn(){P($),P(se),P(ie)}function uo(e){e.memoizedState!==null&&j(it,e);var t=$.current,n=x0(t,e.type);t!==n&&(j(se,e),j($,n))}function Si(e){se.current===e&&(P($),P(se)),it.current===e&&(P(it),$l._currentValue=te)}var co=Object.prototype.hasOwnProperty,so=i.unstable_scheduleCallback,fo=i.unstable_cancelCallback,Vh=i.unstable_shouldYield,Ph=i.unstable_requestPaint,Zt=i.unstable_now,Jh=i.unstable_getCurrentPriorityLevel,Wc=i.unstable_ImmediatePriority,Ic=i.unstable_UserBlockingPriority,Ei=i.unstable_NormalPriority,Kh=i.unstable_LowPriority,$c=i.unstable_IdlePriority,Fh=i.log,Wh=i.unstable_setDisableYieldValue,ol=null,ht=null;function xn(e){if(typeof Fh=="function"&&Wh(e),ht&&typeof ht.setStrictMode=="function")try{ht.setStrictMode(ol,e)}catch{}}var bt=Math.clz32?Math.clz32:eb,Ih=Math.log,$h=Math.LN2;function eb(e){return e>>>=0,e===0?32:31-(Ih(e)/$h|0)|0}var Oi=256,Ti=4194304;function Pn(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function wi(e,t,n){var a=e.pendingLanes;if(a===0)return 0;var l=0,r=e.suspendedLanes,f=e.pingedLanes;e=e.warmLanes;var b=a&134217727;return b!==0?(a=b&~r,a!==0?l=Pn(a):(f&=b,f!==0?l=Pn(f):n||(n=b&~e,n!==0&&(l=Pn(n))))):(b=a&~r,b!==0?l=Pn(b):f!==0?l=Pn(f):n||(n=a&~e,n!==0&&(l=Pn(n)))),l===0?0:t!==0&&t!==l&&(t&r)===0&&(r=l&-l,n=t&-t,r>=n||r===32&&(n&4194048)!==0)?t:l}function ul(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function tb(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function es(){var e=Oi;return Oi<<=1,(Oi&4194048)===0&&(Oi=256),e}function ts(){var e=Ti;return Ti<<=1,(Ti&62914560)===0&&(Ti=4194304),e}function ho(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function cl(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function nb(e,t,n,a,l,r){var f=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var b=e.entanglements,x=e.expirationTimes,D=e.hiddenUpdates;for(n=f&~n;0<n;){var k=31-bt(n),H=1<<k;b[k]=0,x[k]=-1;var _=D[k];if(_!==null)for(D[k]=null,k=0;k<_.length;k++){var z=_[k];z!==null&&(z.lane&=-536870913)}n&=~H}a!==0&&ns(e,a,0),r!==0&&l===0&&e.tag!==0&&(e.suspendedLanes|=r&~(f&~t))}function ns(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var a=31-bt(t);e.entangledLanes|=t,e.entanglements[a]=e.entanglements[a]|1073741824|n&4194090}function as(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var a=31-bt(n),l=1<<a;l&t|e[a]&t&&(e[a]|=t),n&=~l}}function bo(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function mo(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function ls(){var e=Z.p;return e!==0?e:(e=window.event,e===void 0?32:q0(e.type))}function ab(e,t){var n=Z.p;try{return Z.p=e,t()}finally{Z.p=n}}var yn=Math.random().toString(36).slice(2),nt="__reactFiber$"+yn,ut="__reactProps$"+yn,ha="__reactContainer$"+yn,po="__reactEvents$"+yn,lb="__reactListeners$"+yn,ib="__reactHandles$"+yn,is="__reactResources$"+yn,sl="__reactMarker$"+yn;function go(e){delete e[nt],delete e[ut],delete e[po],delete e[lb],delete e[ib]}function ba(e){var t=e[nt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[ha]||n[nt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=E0(e);e!==null;){if(n=e[nt])return n;e=E0(e)}return t}e=n,n=e.parentNode}return null}function ma(e){if(e=e[nt]||e[ha]){var t=e.tag;if(t===5||t===6||t===13||t===26||t===27||t===3)return e}return null}function fl(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(c(33))}function pa(e){var t=e[is];return t||(t=e[is]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Je(e){e[sl]=!0}var rs=new Set,os={};function Jn(e,t){ga(e,t),ga(e+"Capture",t)}function ga(e,t){for(os[e]=t,e=0;e<t.length;e++)rs.add(t[e])}var rb=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),us={},cs={};function ob(e){return co.call(cs,e)?!0:co.call(us,e)?!1:rb.test(e)?cs[e]=!0:(us[e]=!0,!1)}function Ni(e,t,n){if(ob(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var a=t.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function Ci(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function It(e,t,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+a)}}var vo,ss;function va(e){if(vo===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);vo=t&&t[1]||"",ss=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+vo+e+ss}var xo=!1;function yo(e,t){if(!e||xo)return"";xo=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(t){var H=function(){throw Error()};if(Object.defineProperty(H.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(H,[])}catch(z){var _=z}Reflect.construct(e,[],H)}else{try{H.call()}catch(z){_=z}e.call(H.prototype)}}else{try{throw Error()}catch(z){_=z}(H=e())&&typeof H.catch=="function"&&H.catch(function(){})}}catch(z){if(z&&_&&typeof z.stack=="string")return[z.stack,_.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var l=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");l&&l.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var r=a.DetermineComponentFrameRoot(),f=r[0],b=r[1];if(f&&b){var x=f.split(`
`),D=b.split(`
`);for(l=a=0;a<x.length&&!x[a].includes("DetermineComponentFrameRoot");)a++;for(;l<D.length&&!D[l].includes("DetermineComponentFrameRoot");)l++;if(a===x.length||l===D.length)for(a=x.length-1,l=D.length-1;1<=a&&0<=l&&x[a]!==D[l];)l--;for(;1<=a&&0<=l;a--,l--)if(x[a]!==D[l]){if(a!==1||l!==1)do if(a--,l--,0>l||x[a]!==D[l]){var k=`
`+x[a].replace(" at new "," at ");return e.displayName&&k.includes("<anonymous>")&&(k=k.replace("<anonymous>",e.displayName)),k}while(1<=a&&0<=l);break}}}finally{xo=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?va(n):""}function ub(e){switch(e.tag){case 26:case 27:case 5:return va(e.type);case 16:return va("Lazy");case 13:return va("Suspense");case 19:return va("SuspenseList");case 0:case 15:return yo(e.type,!1);case 11:return yo(e.type.render,!1);case 1:return yo(e.type,!0);case 31:return va("Activity");default:return""}}function fs(e){try{var t="";do t+=ub(e),e=e.return;while(e);return t}catch(n){return`
Error generating stack: `+n.message+`
`+n.stack}}function wt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ds(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function cb(e){var t=ds(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),a=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var l=n.get,r=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(f){a=""+f,r.call(this,f)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return a},setValue:function(f){a=""+f},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Di(e){e._valueTracker||(e._valueTracker=cb(e))}function hs(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),a="";return e&&(a=ds(e)?e.checked?"true":"false":e.value),e=a,e!==n?(t.setValue(e),!0):!1}function _i(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var sb=/[\n"\\]/g;function Nt(e){return e.replace(sb,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Ao(e,t,n,a,l,r,f,b){e.name="",f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"?e.type=f:e.removeAttribute("type"),t!=null?f==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+wt(t)):e.value!==""+wt(t)&&(e.value=""+wt(t)):f!=="submit"&&f!=="reset"||e.removeAttribute("value"),t!=null?So(e,f,wt(t)):n!=null?So(e,f,wt(n)):a!=null&&e.removeAttribute("value"),l==null&&r!=null&&(e.defaultChecked=!!r),l!=null&&(e.checked=l&&typeof l!="function"&&typeof l!="symbol"),b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"?e.name=""+wt(b):e.removeAttribute("name")}function bs(e,t,n,a,l,r,f,b){if(r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(e.type=r),t!=null||n!=null){if(!(r!=="submit"&&r!=="reset"||t!=null))return;n=n!=null?""+wt(n):"",t=t!=null?""+wt(t):n,b||t===e.value||(e.value=t),e.defaultValue=t}a=a??l,a=typeof a!="function"&&typeof a!="symbol"&&!!a,e.checked=b?e.checked:!!a,e.defaultChecked=!!a,f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.name=f)}function So(e,t,n){t==="number"&&_i(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function xa(e,t,n,a){if(e=e.options,t){t={};for(var l=0;l<n.length;l++)t["$"+n[l]]=!0;for(n=0;n<e.length;n++)l=t.hasOwnProperty("$"+e[n].value),e[n].selected!==l&&(e[n].selected=l),l&&a&&(e[n].defaultSelected=!0)}else{for(n=""+wt(n),t=null,l=0;l<e.length;l++){if(e[l].value===n){e[l].selected=!0,a&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function ms(e,t,n){if(t!=null&&(t=""+wt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+wt(n):""}function ps(e,t,n,a){if(t==null){if(a!=null){if(n!=null)throw Error(c(92));if(je(a)){if(1<a.length)throw Error(c(93));a=a[0]}n=a}n==null&&(n=""),t=n}n=wt(t),e.defaultValue=n,a=e.textContent,a===n&&a!==""&&a!==null&&(e.value=a)}function ya(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var fb=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function gs(e,t,n){var a=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?a?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":a?e.setProperty(t,n):typeof n!="number"||n===0||fb.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function vs(e,t,n){if(t!=null&&typeof t!="object")throw Error(c(62));if(e=e.style,n!=null){for(var a in n)!n.hasOwnProperty(a)||t!=null&&t.hasOwnProperty(a)||(a.indexOf("--")===0?e.setProperty(a,""):a==="float"?e.cssFloat="":e[a]="");for(var l in t)a=t[l],t.hasOwnProperty(l)&&n[l]!==a&&gs(e,l,a)}else for(var r in t)t.hasOwnProperty(r)&&gs(e,r,t[r])}function Eo(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var db=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),hb=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function zi(e){return hb.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var Oo=null;function To(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Aa=null,Sa=null;function xs(e){var t=ma(e);if(t&&(e=t.stateNode)){var n=e[ut]||null;e:switch(e=t.stateNode,t.type){case"input":if(Ao(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+Nt(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var a=n[t];if(a!==e&&a.form===e.form){var l=a[ut]||null;if(!l)throw Error(c(90));Ao(a,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name)}}for(t=0;t<n.length;t++)a=n[t],a.form===e.form&&hs(a)}break e;case"textarea":ms(e,n.value,n.defaultValue);break e;case"select":t=n.value,t!=null&&xa(e,!!n.multiple,t,!1)}}}var wo=!1;function ys(e,t,n){if(wo)return e(t,n);wo=!0;try{var a=e(t);return a}finally{if(wo=!1,(Aa!==null||Sa!==null)&&(pr(),Aa&&(t=Aa,e=Sa,Sa=Aa=null,xs(t),e)))for(t=0;t<e.length;t++)xs(e[t])}}function dl(e,t){var n=e.stateNode;if(n===null)return null;var a=n[ut]||null;if(a===null)return null;n=a[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(c(231,t,typeof n));return n}var $t=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),No=!1;if($t)try{var hl={};Object.defineProperty(hl,"passive",{get:function(){No=!0}}),window.addEventListener("test",hl,hl),window.removeEventListener("test",hl,hl)}catch{No=!1}var An=null,Co=null,Mi=null;function As(){if(Mi)return Mi;var e,t=Co,n=t.length,a,l="value"in An?An.value:An.textContent,r=l.length;for(e=0;e<n&&t[e]===l[e];e++);var f=n-e;for(a=1;a<=f&&t[n-a]===l[r-a];a++);return Mi=l.slice(e,1<a?1-a:void 0)}function Ri(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ki(){return!0}function Ss(){return!1}function ct(e){function t(n,a,l,r,f){this._reactName=n,this._targetInst=l,this.type=a,this.nativeEvent=r,this.target=f,this.currentTarget=null;for(var b in e)e.hasOwnProperty(b)&&(n=e[b],this[b]=n?n(r):r[b]);return this.isDefaultPrevented=(r.defaultPrevented!=null?r.defaultPrevented:r.returnValue===!1)?ki:Ss,this.isPropagationStopped=Ss,this}return v(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ki)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ki)},persist:function(){},isPersistent:ki}),t}var Kn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Bi=ct(Kn),bl=v({},Kn,{view:0,detail:0}),bb=ct(bl),Do,_o,ml,ji=v({},bl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Mo,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ml&&(ml&&e.type==="mousemove"?(Do=e.screenX-ml.screenX,_o=e.screenY-ml.screenY):_o=Do=0,ml=e),Do)},movementY:function(e){return"movementY"in e?e.movementY:_o}}),Es=ct(ji),mb=v({},ji,{dataTransfer:0}),pb=ct(mb),gb=v({},bl,{relatedTarget:0}),zo=ct(gb),vb=v({},Kn,{animationName:0,elapsedTime:0,pseudoElement:0}),xb=ct(vb),yb=v({},Kn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Ab=ct(yb),Sb=v({},Kn,{data:0}),Os=ct(Sb),Eb={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ob={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Tb={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function wb(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Tb[e])?!!t[e]:!1}function Mo(){return wb}var Nb=v({},bl,{key:function(e){if(e.key){var t=Eb[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ri(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Ob[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Mo,charCode:function(e){return e.type==="keypress"?Ri(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ri(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Cb=ct(Nb),Db=v({},ji,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ts=ct(Db),_b=v({},bl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Mo}),zb=ct(_b),Mb=v({},Kn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Rb=ct(Mb),kb=v({},ji,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Bb=ct(kb),jb=v({},Kn,{newState:0,oldState:0}),Ub=ct(jb),qb=[9,13,27,32],Ro=$t&&"CompositionEvent"in window,pl=null;$t&&"documentMode"in document&&(pl=document.documentMode);var Hb=$t&&"TextEvent"in window&&!pl,ws=$t&&(!Ro||pl&&8<pl&&11>=pl),Ns=" ",Cs=!1;function Ds(e,t){switch(e){case"keyup":return qb.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function _s(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ea=!1;function Lb(e,t){switch(e){case"compositionend":return _s(t);case"keypress":return t.which!==32?null:(Cs=!0,Ns);case"textInput":return e=t.data,e===Ns&&Cs?null:e;default:return null}}function Qb(e,t){if(Ea)return e==="compositionend"||!Ro&&Ds(e,t)?(e=As(),Mi=Co=An=null,Ea=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return ws&&t.locale!=="ko"?null:t.data;default:return null}}var Yb={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function zs(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Yb[e.type]:t==="textarea"}function Ms(e,t,n,a){Aa?Sa?Sa.push(a):Sa=[a]:Aa=a,t=Sr(t,"onChange"),0<t.length&&(n=new Bi("onChange","change",null,n,a),e.push({event:n,listeners:t}))}var gl=null,vl=null;function Xb(e){h0(e,0)}function Ui(e){var t=fl(e);if(hs(t))return e}function Rs(e,t){if(e==="change")return t}var ks=!1;if($t){var ko;if($t){var Bo="oninput"in document;if(!Bo){var Bs=document.createElement("div");Bs.setAttribute("oninput","return;"),Bo=typeof Bs.oninput=="function"}ko=Bo}else ko=!1;ks=ko&&(!document.documentMode||9<document.documentMode)}function js(){gl&&(gl.detachEvent("onpropertychange",Us),vl=gl=null)}function Us(e){if(e.propertyName==="value"&&Ui(vl)){var t=[];Ms(t,vl,e,To(e)),ys(Xb,t)}}function Gb(e,t,n){e==="focusin"?(js(),gl=t,vl=n,gl.attachEvent("onpropertychange",Us)):e==="focusout"&&js()}function Zb(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ui(vl)}function Vb(e,t){if(e==="click")return Ui(t)}function Pb(e,t){if(e==="input"||e==="change")return Ui(t)}function Jb(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var mt=typeof Object.is=="function"?Object.is:Jb;function xl(e,t){if(mt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),a=Object.keys(t);if(n.length!==a.length)return!1;for(a=0;a<n.length;a++){var l=n[a];if(!co.call(t,l)||!mt(e[l],t[l]))return!1}return!0}function qs(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Hs(e,t){var n=qs(e);e=0;for(var a;n;){if(n.nodeType===3){if(a=e+n.textContent.length,e<=t&&a>=t)return{node:n,offset:t-e};e=a}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=qs(n)}}function Ls(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Ls(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Qs(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=_i(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=_i(e.document)}return t}function jo(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var Kb=$t&&"documentMode"in document&&11>=document.documentMode,Oa=null,Uo=null,yl=null,qo=!1;function Ys(e,t,n){var a=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;qo||Oa==null||Oa!==_i(a)||(a=Oa,"selectionStart"in a&&jo(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),yl&&xl(yl,a)||(yl=a,a=Sr(Uo,"onSelect"),0<a.length&&(t=new Bi("onSelect","select",null,t,n),e.push({event:t,listeners:a}),t.target=Oa)))}function Fn(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Ta={animationend:Fn("Animation","AnimationEnd"),animationiteration:Fn("Animation","AnimationIteration"),animationstart:Fn("Animation","AnimationStart"),transitionrun:Fn("Transition","TransitionRun"),transitionstart:Fn("Transition","TransitionStart"),transitioncancel:Fn("Transition","TransitionCancel"),transitionend:Fn("Transition","TransitionEnd")},Ho={},Xs={};$t&&(Xs=document.createElement("div").style,"AnimationEvent"in window||(delete Ta.animationend.animation,delete Ta.animationiteration.animation,delete Ta.animationstart.animation),"TransitionEvent"in window||delete Ta.transitionend.transition);function Wn(e){if(Ho[e])return Ho[e];if(!Ta[e])return e;var t=Ta[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Xs)return Ho[e]=t[n];return e}var Gs=Wn("animationend"),Zs=Wn("animationiteration"),Vs=Wn("animationstart"),Fb=Wn("transitionrun"),Wb=Wn("transitionstart"),Ib=Wn("transitioncancel"),Ps=Wn("transitionend"),Js=new Map,Lo="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Lo.push("scrollEnd");function Bt(e,t){Js.set(e,t),Jn(t,[e])}var Ks=new WeakMap;function Ct(e,t){if(typeof e=="object"&&e!==null){var n=Ks.get(e);return n!==void 0?n:(t={value:e,source:t,stack:fs(t)},Ks.set(e,t),t)}return{value:e,source:t,stack:fs(t)}}var Dt=[],wa=0,Qo=0;function qi(){for(var e=wa,t=Qo=wa=0;t<e;){var n=Dt[t];Dt[t++]=null;var a=Dt[t];Dt[t++]=null;var l=Dt[t];Dt[t++]=null;var r=Dt[t];if(Dt[t++]=null,a!==null&&l!==null){var f=a.pending;f===null?l.next=l:(l.next=f.next,f.next=l),a.pending=l}r!==0&&Fs(n,l,r)}}function Hi(e,t,n,a){Dt[wa++]=e,Dt[wa++]=t,Dt[wa++]=n,Dt[wa++]=a,Qo|=a,e.lanes|=a,e=e.alternate,e!==null&&(e.lanes|=a)}function Yo(e,t,n,a){return Hi(e,t,n,a),Li(e)}function Na(e,t){return Hi(e,null,null,t),Li(e)}function Fs(e,t,n){e.lanes|=n;var a=e.alternate;a!==null&&(a.lanes|=n);for(var l=!1,r=e.return;r!==null;)r.childLanes|=n,a=r.alternate,a!==null&&(a.childLanes|=n),r.tag===22&&(e=r.stateNode,e===null||e._visibility&1||(l=!0)),e=r,r=r.return;return e.tag===3?(r=e.stateNode,l&&t!==null&&(l=31-bt(n),e=r.hiddenUpdates,a=e[l],a===null?e[l]=[t]:a.push(t),t.lane=n|536870912),r):null}function Li(e){if(50<Zl)throw Zl=0,Ju=null,Error(c(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Ca={};function $b(e,t,n,a){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function pt(e,t,n,a){return new $b(e,t,n,a)}function Xo(e){return e=e.prototype,!(!e||!e.isReactComponent)}function en(e,t){var n=e.alternate;return n===null?(n=pt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function Ws(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Qi(e,t,n,a,l,r){var f=0;if(a=e,typeof e=="function")Xo(e)&&(f=1);else if(typeof e=="string")f=tp(e,n,$.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case V:return e=pt(31,n,t,l),e.elementType=V,e.lanes=r,e;case w:return In(n.children,l,r,t);case E:f=8,l|=24;break;case L:return e=pt(12,n,t,l|2),e.elementType=L,e.lanes=r,e;case J:return e=pt(13,n,t,l),e.elementType=J,e.lanes=r,e;case ue:return e=pt(19,n,t,l),e.elementType=ue,e.lanes=r,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case q:case G:f=10;break e;case X:f=9;break e;case ce:f=11;break e;case Y:f=14;break e;case oe:f=16,a=null;break e}f=29,n=Error(c(130,e===null?"null":typeof e,"")),a=null}return t=pt(f,n,t,l),t.elementType=e,t.type=a,t.lanes=r,t}function In(e,t,n,a){return e=pt(7,e,a,t),e.lanes=n,e}function Go(e,t,n){return e=pt(6,e,null,t),e.lanes=n,e}function Zo(e,t,n){return t=pt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Da=[],_a=0,Yi=null,Xi=0,_t=[],zt=0,$n=null,tn=1,nn="";function ea(e,t){Da[_a++]=Xi,Da[_a++]=Yi,Yi=e,Xi=t}function Is(e,t,n){_t[zt++]=tn,_t[zt++]=nn,_t[zt++]=$n,$n=e;var a=tn;e=nn;var l=32-bt(a)-1;a&=~(1<<l),n+=1;var r=32-bt(t)+l;if(30<r){var f=l-l%5;r=(a&(1<<f)-1).toString(32),a>>=f,l-=f,tn=1<<32-bt(t)+l|n<<l|a,nn=r+e}else tn=1<<r|n<<l|a,nn=e}function Vo(e){e.return!==null&&(ea(e,1),Is(e,1,0))}function Po(e){for(;e===Yi;)Yi=Da[--_a],Da[_a]=null,Xi=Da[--_a],Da[_a]=null;for(;e===$n;)$n=_t[--zt],_t[zt]=null,nn=_t[--zt],_t[zt]=null,tn=_t[--zt],_t[zt]=null}var rt=null,qe=null,Se=!1,ta=null,Vt=!1,Jo=Error(c(519));function na(e){var t=Error(c(418,""));throw El(Ct(t,e)),Jo}function $s(e){var t=e.stateNode,n=e.type,a=e.memoizedProps;switch(t[nt]=e,t[ut]=a,n){case"dialog":pe("cancel",t),pe("close",t);break;case"iframe":case"object":case"embed":pe("load",t);break;case"video":case"audio":for(n=0;n<Pl.length;n++)pe(Pl[n],t);break;case"source":pe("error",t);break;case"img":case"image":case"link":pe("error",t),pe("load",t);break;case"details":pe("toggle",t);break;case"input":pe("invalid",t),bs(t,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0),Di(t);break;case"select":pe("invalid",t);break;case"textarea":pe("invalid",t),ps(t,a.value,a.defaultValue,a.children),Di(t)}n=a.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||a.suppressHydrationWarning===!0||g0(t.textContent,n)?(a.popover!=null&&(pe("beforetoggle",t),pe("toggle",t)),a.onScroll!=null&&pe("scroll",t),a.onScrollEnd!=null&&pe("scrollend",t),a.onClick!=null&&(t.onclick=Er),t=!0):t=!1,t||na(e)}function ef(e){for(rt=e.return;rt;)switch(rt.tag){case 5:case 13:Vt=!1;return;case 27:case 3:Vt=!0;return;default:rt=rt.return}}function Al(e){if(e!==rt)return!1;if(!Se)return ef(e),Se=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||sc(e.type,e.memoizedProps)),n=!n),n&&qe&&na(e),ef(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8)if(n=e.data,n==="/$"){if(t===0){qe=Ut(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++;e=e.nextSibling}qe=null}}else t===27?(t=qe,Un(e.type)?(e=bc,bc=null,qe=e):qe=t):qe=rt?Ut(e.stateNode.nextSibling):null;return!0}function Sl(){qe=rt=null,Se=!1}function tf(){var e=ta;return e!==null&&(dt===null?dt=e:dt.push.apply(dt,e),ta=null),e}function El(e){ta===null?ta=[e]:ta.push(e)}var Ko=Q(null),aa=null,an=null;function Sn(e,t,n){j(Ko,t._currentValue),t._currentValue=n}function ln(e){e._currentValue=Ko.current,P(Ko)}function Fo(e,t,n){for(;e!==null;){var a=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,a!==null&&(a.childLanes|=t)):a!==null&&(a.childLanes&t)!==t&&(a.childLanes|=t),e===n)break;e=e.return}}function Wo(e,t,n,a){var l=e.child;for(l!==null&&(l.return=e);l!==null;){var r=l.dependencies;if(r!==null){var f=l.child;r=r.firstContext;e:for(;r!==null;){var b=r;r=l;for(var x=0;x<t.length;x++)if(b.context===t[x]){r.lanes|=n,b=r.alternate,b!==null&&(b.lanes|=n),Fo(r.return,n,e),a||(f=null);break e}r=b.next}}else if(l.tag===18){if(f=l.return,f===null)throw Error(c(341));f.lanes|=n,r=f.alternate,r!==null&&(r.lanes|=n),Fo(f,n,e),f=null}else f=l.child;if(f!==null)f.return=l;else for(f=l;f!==null;){if(f===e){f=null;break}if(l=f.sibling,l!==null){l.return=f.return,f=l;break}f=f.return}l=f}}function Ol(e,t,n,a){e=null;for(var l=t,r=!1;l!==null;){if(!r){if((l.flags&524288)!==0)r=!0;else if((l.flags&262144)!==0)break}if(l.tag===10){var f=l.alternate;if(f===null)throw Error(c(387));if(f=f.memoizedProps,f!==null){var b=l.type;mt(l.pendingProps.value,f.value)||(e!==null?e.push(b):e=[b])}}else if(l===it.current){if(f=l.alternate,f===null)throw Error(c(387));f.memoizedState.memoizedState!==l.memoizedState.memoizedState&&(e!==null?e.push($l):e=[$l])}l=l.return}e!==null&&Wo(t,e,n,a),t.flags|=262144}function Gi(e){for(e=e.firstContext;e!==null;){if(!mt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function la(e){aa=e,an=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function at(e){return nf(aa,e)}function Zi(e,t){return aa===null&&la(e),nf(e,t)}function nf(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},an===null){if(e===null)throw Error(c(308));an=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else an=an.next=t;return n}var em=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,a){e.push(a)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},tm=i.unstable_scheduleCallback,nm=i.unstable_NormalPriority,Ze={$$typeof:G,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Io(){return{controller:new em,data:new Map,refCount:0}}function Tl(e){e.refCount--,e.refCount===0&&tm(nm,function(){e.controller.abort()})}var wl=null,$o=0,za=0,Ma=null;function am(e,t){if(wl===null){var n=wl=[];$o=0,za=tc(),Ma={status:"pending",value:void 0,then:function(a){n.push(a)}}}return $o++,t.then(af,af),t}function af(){if(--$o===0&&wl!==null){Ma!==null&&(Ma.status="fulfilled");var e=wl;wl=null,za=0,Ma=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function lm(e,t){var n=[],a={status:"pending",value:null,reason:null,then:function(l){n.push(l)}};return e.then(function(){a.status="fulfilled",a.value=t;for(var l=0;l<n.length;l++)(0,n[l])(t)},function(l){for(a.status="rejected",a.reason=l,l=0;l<n.length;l++)(0,n[l])(void 0)}),a}var lf=R.S;R.S=function(e,t){typeof t=="object"&&t!==null&&typeof t.then=="function"&&am(e,t),lf!==null&&lf(e,t)};var ia=Q(null);function eu(){var e=ia.current;return e!==null?e:_e.pooledCache}function Vi(e,t){t===null?j(ia,ia.current):j(ia,t.pool)}function rf(){var e=eu();return e===null?null:{parent:Ze._currentValue,pool:e}}var Nl=Error(c(460)),of=Error(c(474)),Pi=Error(c(542)),tu={then:function(){}};function uf(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Ji(){}function cf(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(Ji,Ji),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,ff(e),e;default:if(typeof t.status=="string")t.then(Ji,Ji);else{if(e=_e,e!==null&&100<e.shellSuspendCounter)throw Error(c(482));e=t,e.status="pending",e.then(function(a){if(t.status==="pending"){var l=t;l.status="fulfilled",l.value=a}},function(a){if(t.status==="pending"){var l=t;l.status="rejected",l.reason=a}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,ff(e),e}throw Cl=t,Nl}}var Cl=null;function sf(){if(Cl===null)throw Error(c(459));var e=Cl;return Cl=null,e}function ff(e){if(e===Nl||e===Pi)throw Error(c(483))}var En=!1;function nu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function au(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function On(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Tn(e,t,n){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,(Ee&2)!==0){var l=a.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),a.pending=t,t=Li(e),Fs(e,null,n),t}return Hi(e,a,t,n),Li(e)}function Dl(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var a=t.lanes;a&=e.pendingLanes,n|=a,t.lanes=n,as(e,n)}}function lu(e,t){var n=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,n===a)){var l=null,r=null;if(n=n.firstBaseUpdate,n!==null){do{var f={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};r===null?l=r=f:r=r.next=f,n=n.next}while(n!==null);r===null?l=r=t:r=r.next=t}else l=r=t;n={baseState:a.baseState,firstBaseUpdate:l,lastBaseUpdate:r,shared:a.shared,callbacks:a.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var iu=!1;function _l(){if(iu){var e=Ma;if(e!==null)throw e}}function zl(e,t,n,a){iu=!1;var l=e.updateQueue;En=!1;var r=l.firstBaseUpdate,f=l.lastBaseUpdate,b=l.shared.pending;if(b!==null){l.shared.pending=null;var x=b,D=x.next;x.next=null,f===null?r=D:f.next=D,f=x;var k=e.alternate;k!==null&&(k=k.updateQueue,b=k.lastBaseUpdate,b!==f&&(b===null?k.firstBaseUpdate=D:b.next=D,k.lastBaseUpdate=x))}if(r!==null){var H=l.baseState;f=0,k=D=x=null,b=r;do{var _=b.lane&-536870913,z=_!==b.lane;if(z?(xe&_)===_:(a&_)===_){_!==0&&_===za&&(iu=!0),k!==null&&(k=k.next={lane:0,tag:b.tag,payload:b.payload,callback:null,next:null});e:{var re=e,ne=b;_=t;var Ne=n;switch(ne.tag){case 1:if(re=ne.payload,typeof re=="function"){H=re.call(Ne,H,_);break e}H=re;break e;case 3:re.flags=re.flags&-65537|128;case 0:if(re=ne.payload,_=typeof re=="function"?re.call(Ne,H,_):re,_==null)break e;H=v({},H,_);break e;case 2:En=!0}}_=b.callback,_!==null&&(e.flags|=64,z&&(e.flags|=8192),z=l.callbacks,z===null?l.callbacks=[_]:z.push(_))}else z={lane:_,tag:b.tag,payload:b.payload,callback:b.callback,next:null},k===null?(D=k=z,x=H):k=k.next=z,f|=_;if(b=b.next,b===null){if(b=l.shared.pending,b===null)break;z=b,b=z.next,z.next=null,l.lastBaseUpdate=z,l.shared.pending=null}}while(!0);k===null&&(x=H),l.baseState=x,l.firstBaseUpdate=D,l.lastBaseUpdate=k,r===null&&(l.shared.lanes=0),Rn|=f,e.lanes=f,e.memoizedState=H}}function df(e,t){if(typeof e!="function")throw Error(c(191,e));e.call(t)}function hf(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)df(n[e],t)}var Ra=Q(null),Ki=Q(0);function bf(e,t){e=dn,j(Ki,e),j(Ra,t),dn=e|t.baseLanes}function ru(){j(Ki,dn),j(Ra,Ra.current)}function ou(){dn=Ki.current,P(Ra),P(Ki)}var wn=0,de=null,Te=null,Xe=null,Fi=!1,ka=!1,ra=!1,Wi=0,Ml=0,Ba=null,im=0;function Qe(){throw Error(c(321))}function uu(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!mt(e[n],t[n]))return!1;return!0}function cu(e,t,n,a,l,r){return wn=r,de=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,R.H=e===null||e.memoizedState===null?Wf:If,ra=!1,r=n(a,l),ra=!1,ka&&(r=pf(t,n,a,l)),mf(e),r}function mf(e){R.H=ar;var t=Te!==null&&Te.next!==null;if(wn=0,Xe=Te=de=null,Fi=!1,Ml=0,Ba=null,t)throw Error(c(300));e===null||Ke||(e=e.dependencies,e!==null&&Gi(e)&&(Ke=!0))}function pf(e,t,n,a){de=e;var l=0;do{if(ka&&(Ba=null),Ml=0,ka=!1,25<=l)throw Error(c(301));if(l+=1,Xe=Te=null,e.updateQueue!=null){var r=e.updateQueue;r.lastEffect=null,r.events=null,r.stores=null,r.memoCache!=null&&(r.memoCache.index=0)}R.H=dm,r=t(n,a)}while(ka);return r}function rm(){var e=R.H,t=e.useState()[0];return t=typeof t.then=="function"?Rl(t):t,e=e.useState()[0],(Te!==null?Te.memoizedState:null)!==e&&(de.flags|=1024),t}function su(){var e=Wi!==0;return Wi=0,e}function fu(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function du(e){if(Fi){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Fi=!1}wn=0,Xe=Te=de=null,ka=!1,Ml=Wi=0,Ba=null}function st(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Xe===null?de.memoizedState=Xe=e:Xe=Xe.next=e,Xe}function Ge(){if(Te===null){var e=de.alternate;e=e!==null?e.memoizedState:null}else e=Te.next;var t=Xe===null?de.memoizedState:Xe.next;if(t!==null)Xe=t,Te=e;else{if(e===null)throw de.alternate===null?Error(c(467)):Error(c(310));Te=e,e={memoizedState:Te.memoizedState,baseState:Te.baseState,baseQueue:Te.baseQueue,queue:Te.queue,next:null},Xe===null?de.memoizedState=Xe=e:Xe=Xe.next=e}return Xe}function hu(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Rl(e){var t=Ml;return Ml+=1,Ba===null&&(Ba=[]),e=cf(Ba,e,t),t=de,(Xe===null?t.memoizedState:Xe.next)===null&&(t=t.alternate,R.H=t===null||t.memoizedState===null?Wf:If),e}function Ii(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Rl(e);if(e.$$typeof===G)return at(e)}throw Error(c(438,String(e)))}function bu(e){var t=null,n=de.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var a=de.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(t={data:a.data.map(function(l){return l.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=hu(),de.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),a=0;a<e;a++)n[a]=he;return t.index++,n}function rn(e,t){return typeof t=="function"?t(e):t}function $i(e){var t=Ge();return mu(t,Te,e)}function mu(e,t,n){var a=e.queue;if(a===null)throw Error(c(311));a.lastRenderedReducer=n;var l=e.baseQueue,r=a.pending;if(r!==null){if(l!==null){var f=l.next;l.next=r.next,r.next=f}t.baseQueue=l=r,a.pending=null}if(r=e.baseState,l===null)e.memoizedState=r;else{t=l.next;var b=f=null,x=null,D=t,k=!1;do{var H=D.lane&-536870913;if(H!==D.lane?(xe&H)===H:(wn&H)===H){var _=D.revertLane;if(_===0)x!==null&&(x=x.next={lane:0,revertLane:0,action:D.action,hasEagerState:D.hasEagerState,eagerState:D.eagerState,next:null}),H===za&&(k=!0);else if((wn&_)===_){D=D.next,_===za&&(k=!0);continue}else H={lane:0,revertLane:D.revertLane,action:D.action,hasEagerState:D.hasEagerState,eagerState:D.eagerState,next:null},x===null?(b=x=H,f=r):x=x.next=H,de.lanes|=_,Rn|=_;H=D.action,ra&&n(r,H),r=D.hasEagerState?D.eagerState:n(r,H)}else _={lane:H,revertLane:D.revertLane,action:D.action,hasEagerState:D.hasEagerState,eagerState:D.eagerState,next:null},x===null?(b=x=_,f=r):x=x.next=_,de.lanes|=H,Rn|=H;D=D.next}while(D!==null&&D!==t);if(x===null?f=r:x.next=b,!mt(r,e.memoizedState)&&(Ke=!0,k&&(n=Ma,n!==null)))throw n;e.memoizedState=r,e.baseState=f,e.baseQueue=x,a.lastRenderedState=r}return l===null&&(a.lanes=0),[e.memoizedState,a.dispatch]}function pu(e){var t=Ge(),n=t.queue;if(n===null)throw Error(c(311));n.lastRenderedReducer=e;var a=n.dispatch,l=n.pending,r=t.memoizedState;if(l!==null){n.pending=null;var f=l=l.next;do r=e(r,f.action),f=f.next;while(f!==l);mt(r,t.memoizedState)||(Ke=!0),t.memoizedState=r,t.baseQueue===null&&(t.baseState=r),n.lastRenderedState=r}return[r,a]}function gf(e,t,n){var a=de,l=Ge(),r=Se;if(r){if(n===void 0)throw Error(c(407));n=n()}else n=t();var f=!mt((Te||l).memoizedState,n);f&&(l.memoizedState=n,Ke=!0),l=l.queue;var b=yf.bind(null,a,l,e);if(kl(2048,8,b,[e]),l.getSnapshot!==t||f||Xe!==null&&Xe.memoizedState.tag&1){if(a.flags|=2048,ja(9,er(),xf.bind(null,a,l,n,t),null),_e===null)throw Error(c(349));r||(wn&124)!==0||vf(a,t,n)}return n}function vf(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=de.updateQueue,t===null?(t=hu(),de.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function xf(e,t,n,a){t.value=n,t.getSnapshot=a,Af(t)&&Sf(e)}function yf(e,t,n){return n(function(){Af(t)&&Sf(e)})}function Af(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!mt(e,n)}catch{return!0}}function Sf(e){var t=Na(e,2);t!==null&&At(t,e,2)}function gu(e){var t=st();if(typeof e=="function"){var n=e;if(e=n(),ra){xn(!0);try{n()}finally{xn(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:rn,lastRenderedState:e},t}function Ef(e,t,n,a){return e.baseState=n,mu(e,Te,typeof a=="function"?a:rn)}function om(e,t,n,a,l){if(nr(e))throw Error(c(485));if(e=t.action,e!==null){var r={payload:l,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(f){r.listeners.push(f)}};R.T!==null?n(!0):r.isTransition=!1,a(r),n=t.pending,n===null?(r.next=t.pending=r,Of(t,r)):(r.next=n.next,t.pending=n.next=r)}}function Of(e,t){var n=t.action,a=t.payload,l=e.state;if(t.isTransition){var r=R.T,f={};R.T=f;try{var b=n(l,a),x=R.S;x!==null&&x(f,b),Tf(e,t,b)}catch(D){vu(e,t,D)}finally{R.T=r}}else try{r=n(l,a),Tf(e,t,r)}catch(D){vu(e,t,D)}}function Tf(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(a){wf(e,t,a)},function(a){return vu(e,t,a)}):wf(e,t,n)}function wf(e,t,n){t.status="fulfilled",t.value=n,Nf(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Of(e,n)))}function vu(e,t,n){var a=e.pending;if(e.pending=null,a!==null){a=a.next;do t.status="rejected",t.reason=n,Nf(t),t=t.next;while(t!==a)}e.action=null}function Nf(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Cf(e,t){return t}function Df(e,t){if(Se){var n=_e.formState;if(n!==null){e:{var a=de;if(Se){if(qe){t:{for(var l=qe,r=Vt;l.nodeType!==8;){if(!r){l=null;break t}if(l=Ut(l.nextSibling),l===null){l=null;break t}}r=l.data,l=r==="F!"||r==="F"?l:null}if(l){qe=Ut(l.nextSibling),a=l.data==="F!";break e}}na(a)}a=!1}a&&(t=n[0])}}return n=st(),n.memoizedState=n.baseState=t,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Cf,lastRenderedState:t},n.queue=a,n=Jf.bind(null,de,a),a.dispatch=n,a=gu(!1),r=Eu.bind(null,de,!1,a.queue),a=st(),l={state:t,dispatch:null,action:e,pending:null},a.queue=l,n=om.bind(null,de,l,r,n),l.dispatch=n,a.memoizedState=e,[t,n,!1]}function _f(e){var t=Ge();return zf(t,Te,e)}function zf(e,t,n){if(t=mu(e,t,Cf)[0],e=$i(rn)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var a=Rl(t)}catch(f){throw f===Nl?Pi:f}else a=t;t=Ge();var l=t.queue,r=l.dispatch;return n!==t.memoizedState&&(de.flags|=2048,ja(9,er(),um.bind(null,l,n),null)),[a,r,e]}function um(e,t){e.action=t}function Mf(e){var t=Ge(),n=Te;if(n!==null)return zf(t,n,e);Ge(),t=t.memoizedState,n=Ge();var a=n.queue.dispatch;return n.memoizedState=e,[t,a,!1]}function ja(e,t,n,a){return e={tag:e,create:n,deps:a,inst:t,next:null},t=de.updateQueue,t===null&&(t=hu(),de.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(a=n.next,n.next=e,e.next=a,t.lastEffect=e),e}function er(){return{destroy:void 0,resource:void 0}}function Rf(){return Ge().memoizedState}function tr(e,t,n,a){var l=st();a=a===void 0?null:a,de.flags|=e,l.memoizedState=ja(1|t,er(),n,a)}function kl(e,t,n,a){var l=Ge();a=a===void 0?null:a;var r=l.memoizedState.inst;Te!==null&&a!==null&&uu(a,Te.memoizedState.deps)?l.memoizedState=ja(t,r,n,a):(de.flags|=e,l.memoizedState=ja(1|t,r,n,a))}function kf(e,t){tr(8390656,8,e,t)}function Bf(e,t){kl(2048,8,e,t)}function jf(e,t){return kl(4,2,e,t)}function Uf(e,t){return kl(4,4,e,t)}function qf(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Hf(e,t,n){n=n!=null?n.concat([e]):null,kl(4,4,qf.bind(null,t,e),n)}function xu(){}function Lf(e,t){var n=Ge();t=t===void 0?null:t;var a=n.memoizedState;return t!==null&&uu(t,a[1])?a[0]:(n.memoizedState=[e,t],e)}function Qf(e,t){var n=Ge();t=t===void 0?null:t;var a=n.memoizedState;if(t!==null&&uu(t,a[1]))return a[0];if(a=e(),ra){xn(!0);try{e()}finally{xn(!1)}}return n.memoizedState=[a,t],a}function yu(e,t,n){return n===void 0||(wn&1073741824)!==0?e.memoizedState=t:(e.memoizedState=n,e=Gd(),de.lanes|=e,Rn|=e,n)}function Yf(e,t,n,a){return mt(n,t)?n:Ra.current!==null?(e=yu(e,n,a),mt(e,t)||(Ke=!0),e):(wn&42)===0?(Ke=!0,e.memoizedState=n):(e=Gd(),de.lanes|=e,Rn|=e,t)}function Xf(e,t,n,a,l){var r=Z.p;Z.p=r!==0&&8>r?r:8;var f=R.T,b={};R.T=b,Eu(e,!1,t,n);try{var x=l(),D=R.S;if(D!==null&&D(b,x),x!==null&&typeof x=="object"&&typeof x.then=="function"){var k=lm(x,a);Bl(e,t,k,yt(e))}else Bl(e,t,a,yt(e))}catch(H){Bl(e,t,{then:function(){},status:"rejected",reason:H},yt())}finally{Z.p=r,R.T=f}}function cm(){}function Au(e,t,n,a){if(e.tag!==5)throw Error(c(476));var l=Gf(e).queue;Xf(e,l,t,te,n===null?cm:function(){return Zf(e),n(a)})}function Gf(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:te,baseState:te,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:rn,lastRenderedState:te},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:rn,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Zf(e){var t=Gf(e).next.queue;Bl(e,t,{},yt())}function Su(){return at($l)}function Vf(){return Ge().memoizedState}function Pf(){return Ge().memoizedState}function sm(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=yt();e=On(n);var a=Tn(t,e,n);a!==null&&(At(a,t,n),Dl(a,t,n)),t={cache:Io()},e.payload=t;return}t=t.return}}function fm(e,t,n){var a=yt();n={lane:a,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null},nr(e)?Kf(t,n):(n=Yo(e,t,n,a),n!==null&&(At(n,e,a),Ff(n,t,a)))}function Jf(e,t,n){var a=yt();Bl(e,t,n,a)}function Bl(e,t,n,a){var l={lane:a,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null};if(nr(e))Kf(t,l);else{var r=e.alternate;if(e.lanes===0&&(r===null||r.lanes===0)&&(r=t.lastRenderedReducer,r!==null))try{var f=t.lastRenderedState,b=r(f,n);if(l.hasEagerState=!0,l.eagerState=b,mt(b,f))return Hi(e,t,l,0),_e===null&&qi(),!1}catch{}finally{}if(n=Yo(e,t,l,a),n!==null)return At(n,e,a),Ff(n,t,a),!0}return!1}function Eu(e,t,n,a){if(a={lane:2,revertLane:tc(),action:a,hasEagerState:!1,eagerState:null,next:null},nr(e)){if(t)throw Error(c(479))}else t=Yo(e,n,a,2),t!==null&&At(t,e,2)}function nr(e){var t=e.alternate;return e===de||t!==null&&t===de}function Kf(e,t){ka=Fi=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Ff(e,t,n){if((n&4194048)!==0){var a=t.lanes;a&=e.pendingLanes,n|=a,t.lanes=n,as(e,n)}}var ar={readContext:at,use:Ii,useCallback:Qe,useContext:Qe,useEffect:Qe,useImperativeHandle:Qe,useLayoutEffect:Qe,useInsertionEffect:Qe,useMemo:Qe,useReducer:Qe,useRef:Qe,useState:Qe,useDebugValue:Qe,useDeferredValue:Qe,useTransition:Qe,useSyncExternalStore:Qe,useId:Qe,useHostTransitionStatus:Qe,useFormState:Qe,useActionState:Qe,useOptimistic:Qe,useMemoCache:Qe,useCacheRefresh:Qe},Wf={readContext:at,use:Ii,useCallback:function(e,t){return st().memoizedState=[e,t===void 0?null:t],e},useContext:at,useEffect:kf,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,tr(4194308,4,qf.bind(null,t,e),n)},useLayoutEffect:function(e,t){return tr(4194308,4,e,t)},useInsertionEffect:function(e,t){tr(4,2,e,t)},useMemo:function(e,t){var n=st();t=t===void 0?null:t;var a=e();if(ra){xn(!0);try{e()}finally{xn(!1)}}return n.memoizedState=[a,t],a},useReducer:function(e,t,n){var a=st();if(n!==void 0){var l=n(t);if(ra){xn(!0);try{n(t)}finally{xn(!1)}}}else l=t;return a.memoizedState=a.baseState=l,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:l},a.queue=e,e=e.dispatch=fm.bind(null,de,e),[a.memoizedState,e]},useRef:function(e){var t=st();return e={current:e},t.memoizedState=e},useState:function(e){e=gu(e);var t=e.queue,n=Jf.bind(null,de,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:xu,useDeferredValue:function(e,t){var n=st();return yu(n,e,t)},useTransition:function(){var e=gu(!1);return e=Xf.bind(null,de,e.queue,!0,!1),st().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var a=de,l=st();if(Se){if(n===void 0)throw Error(c(407));n=n()}else{if(n=t(),_e===null)throw Error(c(349));(xe&124)!==0||vf(a,t,n)}l.memoizedState=n;var r={value:n,getSnapshot:t};return l.queue=r,kf(yf.bind(null,a,r,e),[e]),a.flags|=2048,ja(9,er(),xf.bind(null,a,r,n,t),null),n},useId:function(){var e=st(),t=_e.identifierPrefix;if(Se){var n=nn,a=tn;n=(a&~(1<<32-bt(a)-1)).toString(32)+n,t="«"+t+"R"+n,n=Wi++,0<n&&(t+="H"+n.toString(32)),t+="»"}else n=im++,t="«"+t+"r"+n.toString(32)+"»";return e.memoizedState=t},useHostTransitionStatus:Su,useFormState:Df,useActionState:Df,useOptimistic:function(e){var t=st();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Eu.bind(null,de,!0,n),n.dispatch=t,[e,t]},useMemoCache:bu,useCacheRefresh:function(){return st().memoizedState=sm.bind(null,de)}},If={readContext:at,use:Ii,useCallback:Lf,useContext:at,useEffect:Bf,useImperativeHandle:Hf,useInsertionEffect:jf,useLayoutEffect:Uf,useMemo:Qf,useReducer:$i,useRef:Rf,useState:function(){return $i(rn)},useDebugValue:xu,useDeferredValue:function(e,t){var n=Ge();return Yf(n,Te.memoizedState,e,t)},useTransition:function(){var e=$i(rn)[0],t=Ge().memoizedState;return[typeof e=="boolean"?e:Rl(e),t]},useSyncExternalStore:gf,useId:Vf,useHostTransitionStatus:Su,useFormState:_f,useActionState:_f,useOptimistic:function(e,t){var n=Ge();return Ef(n,Te,e,t)},useMemoCache:bu,useCacheRefresh:Pf},dm={readContext:at,use:Ii,useCallback:Lf,useContext:at,useEffect:Bf,useImperativeHandle:Hf,useInsertionEffect:jf,useLayoutEffect:Uf,useMemo:Qf,useReducer:pu,useRef:Rf,useState:function(){return pu(rn)},useDebugValue:xu,useDeferredValue:function(e,t){var n=Ge();return Te===null?yu(n,e,t):Yf(n,Te.memoizedState,e,t)},useTransition:function(){var e=pu(rn)[0],t=Ge().memoizedState;return[typeof e=="boolean"?e:Rl(e),t]},useSyncExternalStore:gf,useId:Vf,useHostTransitionStatus:Su,useFormState:Mf,useActionState:Mf,useOptimistic:function(e,t){var n=Ge();return Te!==null?Ef(n,Te,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:bu,useCacheRefresh:Pf},Ua=null,jl=0;function lr(e){var t=jl;return jl+=1,Ua===null&&(Ua=[]),cf(Ua,e,t)}function Ul(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function ir(e,t){throw t.$$typeof===C?Error(c(525)):(e=Object.prototype.toString.call(t),Error(c(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function $f(e){var t=e._init;return t(e._payload)}function ed(e){function t(T,S){if(e){var N=T.deletions;N===null?(T.deletions=[S],T.flags|=16):N.push(S)}}function n(T,S){if(!e)return null;for(;S!==null;)t(T,S),S=S.sibling;return null}function a(T){for(var S=new Map;T!==null;)T.key!==null?S.set(T.key,T):S.set(T.index,T),T=T.sibling;return S}function l(T,S){return T=en(T,S),T.index=0,T.sibling=null,T}function r(T,S,N){return T.index=N,e?(N=T.alternate,N!==null?(N=N.index,N<S?(T.flags|=67108866,S):N):(T.flags|=67108866,S)):(T.flags|=1048576,S)}function f(T){return e&&T.alternate===null&&(T.flags|=67108866),T}function b(T,S,N,U){return S===null||S.tag!==6?(S=Go(N,T.mode,U),S.return=T,S):(S=l(S,N),S.return=T,S)}function x(T,S,N,U){var K=N.type;return K===w?k(T,S,N.props.children,U,N.key):S!==null&&(S.elementType===K||typeof K=="object"&&K!==null&&K.$$typeof===oe&&$f(K)===S.type)?(S=l(S,N.props),Ul(S,N),S.return=T,S):(S=Qi(N.type,N.key,N.props,null,T.mode,U),Ul(S,N),S.return=T,S)}function D(T,S,N,U){return S===null||S.tag!==4||S.stateNode.containerInfo!==N.containerInfo||S.stateNode.implementation!==N.implementation?(S=Zo(N,T.mode,U),S.return=T,S):(S=l(S,N.children||[]),S.return=T,S)}function k(T,S,N,U,K){return S===null||S.tag!==7?(S=In(N,T.mode,U,K),S.return=T,S):(S=l(S,N),S.return=T,S)}function H(T,S,N){if(typeof S=="string"&&S!==""||typeof S=="number"||typeof S=="bigint")return S=Go(""+S,T.mode,N),S.return=T,S;if(typeof S=="object"&&S!==null){switch(S.$$typeof){case M:return N=Qi(S.type,S.key,S.props,null,T.mode,N),Ul(N,S),N.return=T,N;case B:return S=Zo(S,T.mode,N),S.return=T,S;case oe:var U=S._init;return S=U(S._payload),H(T,S,N)}if(je(S)||ee(S))return S=In(S,T.mode,N,null),S.return=T,S;if(typeof S.then=="function")return H(T,lr(S),N);if(S.$$typeof===G)return H(T,Zi(T,S),N);ir(T,S)}return null}function _(T,S,N,U){var K=S!==null?S.key:null;if(typeof N=="string"&&N!==""||typeof N=="number"||typeof N=="bigint")return K!==null?null:b(T,S,""+N,U);if(typeof N=="object"&&N!==null){switch(N.$$typeof){case M:return N.key===K?x(T,S,N,U):null;case B:return N.key===K?D(T,S,N,U):null;case oe:return K=N._init,N=K(N._payload),_(T,S,N,U)}if(je(N)||ee(N))return K!==null?null:k(T,S,N,U,null);if(typeof N.then=="function")return _(T,S,lr(N),U);if(N.$$typeof===G)return _(T,S,Zi(T,N),U);ir(T,N)}return null}function z(T,S,N,U,K){if(typeof U=="string"&&U!==""||typeof U=="number"||typeof U=="bigint")return T=T.get(N)||null,b(S,T,""+U,K);if(typeof U=="object"&&U!==null){switch(U.$$typeof){case M:return T=T.get(U.key===null?N:U.key)||null,x(S,T,U,K);case B:return T=T.get(U.key===null?N:U.key)||null,D(S,T,U,K);case oe:var be=U._init;return U=be(U._payload),z(T,S,N,U,K)}if(je(U)||ee(U))return T=T.get(N)||null,k(S,T,U,K,null);if(typeof U.then=="function")return z(T,S,N,lr(U),K);if(U.$$typeof===G)return z(T,S,N,Zi(S,U),K);ir(S,U)}return null}function re(T,S,N,U){for(var K=null,be=null,I=S,le=S=0,We=null;I!==null&&le<N.length;le++){I.index>le?(We=I,I=null):We=I.sibling;var Ae=_(T,I,N[le],U);if(Ae===null){I===null&&(I=We);break}e&&I&&Ae.alternate===null&&t(T,I),S=r(Ae,S,le),be===null?K=Ae:be.sibling=Ae,be=Ae,I=We}if(le===N.length)return n(T,I),Se&&ea(T,le),K;if(I===null){for(;le<N.length;le++)I=H(T,N[le],U),I!==null&&(S=r(I,S,le),be===null?K=I:be.sibling=I,be=I);return Se&&ea(T,le),K}for(I=a(I);le<N.length;le++)We=z(I,T,le,N[le],U),We!==null&&(e&&We.alternate!==null&&I.delete(We.key===null?le:We.key),S=r(We,S,le),be===null?K=We:be.sibling=We,be=We);return e&&I.forEach(function(Yn){return t(T,Yn)}),Se&&ea(T,le),K}function ne(T,S,N,U){if(N==null)throw Error(c(151));for(var K=null,be=null,I=S,le=S=0,We=null,Ae=N.next();I!==null&&!Ae.done;le++,Ae=N.next()){I.index>le?(We=I,I=null):We=I.sibling;var Yn=_(T,I,Ae.value,U);if(Yn===null){I===null&&(I=We);break}e&&I&&Yn.alternate===null&&t(T,I),S=r(Yn,S,le),be===null?K=Yn:be.sibling=Yn,be=Yn,I=We}if(Ae.done)return n(T,I),Se&&ea(T,le),K;if(I===null){for(;!Ae.done;le++,Ae=N.next())Ae=H(T,Ae.value,U),Ae!==null&&(S=r(Ae,S,le),be===null?K=Ae:be.sibling=Ae,be=Ae);return Se&&ea(T,le),K}for(I=a(I);!Ae.done;le++,Ae=N.next())Ae=z(I,T,le,Ae.value,U),Ae!==null&&(e&&Ae.alternate!==null&&I.delete(Ae.key===null?le:Ae.key),S=r(Ae,S,le),be===null?K=Ae:be.sibling=Ae,be=Ae);return e&&I.forEach(function(hp){return t(T,hp)}),Se&&ea(T,le),K}function Ne(T,S,N,U){if(typeof N=="object"&&N!==null&&N.type===w&&N.key===null&&(N=N.props.children),typeof N=="object"&&N!==null){switch(N.$$typeof){case M:e:{for(var K=N.key;S!==null;){if(S.key===K){if(K=N.type,K===w){if(S.tag===7){n(T,S.sibling),U=l(S,N.props.children),U.return=T,T=U;break e}}else if(S.elementType===K||typeof K=="object"&&K!==null&&K.$$typeof===oe&&$f(K)===S.type){n(T,S.sibling),U=l(S,N.props),Ul(U,N),U.return=T,T=U;break e}n(T,S);break}else t(T,S);S=S.sibling}N.type===w?(U=In(N.props.children,T.mode,U,N.key),U.return=T,T=U):(U=Qi(N.type,N.key,N.props,null,T.mode,U),Ul(U,N),U.return=T,T=U)}return f(T);case B:e:{for(K=N.key;S!==null;){if(S.key===K)if(S.tag===4&&S.stateNode.containerInfo===N.containerInfo&&S.stateNode.implementation===N.implementation){n(T,S.sibling),U=l(S,N.children||[]),U.return=T,T=U;break e}else{n(T,S);break}else t(T,S);S=S.sibling}U=Zo(N,T.mode,U),U.return=T,T=U}return f(T);case oe:return K=N._init,N=K(N._payload),Ne(T,S,N,U)}if(je(N))return re(T,S,N,U);if(ee(N)){if(K=ee(N),typeof K!="function")throw Error(c(150));return N=K.call(N),ne(T,S,N,U)}if(typeof N.then=="function")return Ne(T,S,lr(N),U);if(N.$$typeof===G)return Ne(T,S,Zi(T,N),U);ir(T,N)}return typeof N=="string"&&N!==""||typeof N=="number"||typeof N=="bigint"?(N=""+N,S!==null&&S.tag===6?(n(T,S.sibling),U=l(S,N),U.return=T,T=U):(n(T,S),U=Go(N,T.mode,U),U.return=T,T=U),f(T)):n(T,S)}return function(T,S,N,U){try{jl=0;var K=Ne(T,S,N,U);return Ua=null,K}catch(I){if(I===Nl||I===Pi)throw I;var be=pt(29,I,null,T.mode);return be.lanes=U,be.return=T,be}finally{}}}var qa=ed(!0),td=ed(!1),Mt=Q(null),Pt=null;function Nn(e){var t=e.alternate;j(Ve,Ve.current&1),j(Mt,e),Pt===null&&(t===null||Ra.current!==null||t.memoizedState!==null)&&(Pt=e)}function nd(e){if(e.tag===22){if(j(Ve,Ve.current),j(Mt,e),Pt===null){var t=e.alternate;t!==null&&t.memoizedState!==null&&(Pt=e)}}else Cn()}function Cn(){j(Ve,Ve.current),j(Mt,Mt.current)}function on(e){P(Mt),Pt===e&&(Pt=null),P(Ve)}var Ve=Q(0);function rr(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||hc(n)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}function Ou(e,t,n,a){t=e.memoizedState,n=n(a,t),n=n==null?t:v({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Tu={enqueueSetState:function(e,t,n){e=e._reactInternals;var a=yt(),l=On(a);l.payload=t,n!=null&&(l.callback=n),t=Tn(e,l,a),t!==null&&(At(t,e,a),Dl(t,e,a))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var a=yt(),l=On(a);l.tag=1,l.payload=t,n!=null&&(l.callback=n),t=Tn(e,l,a),t!==null&&(At(t,e,a),Dl(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=yt(),a=On(n);a.tag=2,t!=null&&(a.callback=t),t=Tn(e,a,n),t!==null&&(At(t,e,n),Dl(t,e,n))}};function ad(e,t,n,a,l,r,f){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,r,f):t.prototype&&t.prototype.isPureReactComponent?!xl(n,a)||!xl(l,r):!0}function ld(e,t,n,a){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,a),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,a),t.state!==e&&Tu.enqueueReplaceState(t,t.state,null)}function oa(e,t){var n=t;if("ref"in t){n={};for(var a in t)a!=="ref"&&(n[a]=t[a])}if(e=e.defaultProps){n===t&&(n=v({},n));for(var l in e)n[l]===void 0&&(n[l]=e[l])}return n}var or=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function id(e){or(e)}function rd(e){console.error(e)}function od(e){or(e)}function ur(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(a){setTimeout(function(){throw a})}}function ud(e,t,n){try{var a=e.onCaughtError;a(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(l){setTimeout(function(){throw l})}}function wu(e,t,n){return n=On(n),n.tag=3,n.payload={element:null},n.callback=function(){ur(e,t)},n}function cd(e){return e=On(e),e.tag=3,e}function sd(e,t,n,a){var l=n.type.getDerivedStateFromError;if(typeof l=="function"){var r=a.value;e.payload=function(){return l(r)},e.callback=function(){ud(t,n,a)}}var f=n.stateNode;f!==null&&typeof f.componentDidCatch=="function"&&(e.callback=function(){ud(t,n,a),typeof l!="function"&&(kn===null?kn=new Set([this]):kn.add(this));var b=a.stack;this.componentDidCatch(a.value,{componentStack:b!==null?b:""})})}function hm(e,t,n,a,l){if(n.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(t=n.alternate,t!==null&&Ol(t,n,l,!0),n=Mt.current,n!==null){switch(n.tag){case 13:return Pt===null?Fu():n.alternate===null&&He===0&&(He=3),n.flags&=-257,n.flags|=65536,n.lanes=l,a===tu?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([a]):t.add(a),Iu(e,a,l)),!1;case 22:return n.flags|=65536,a===tu?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([a])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([a]):n.add(a)),Iu(e,a,l)),!1}throw Error(c(435,n.tag))}return Iu(e,a,l),Fu(),!1}if(Se)return t=Mt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=l,a!==Jo&&(e=Error(c(422),{cause:a}),El(Ct(e,n)))):(a!==Jo&&(t=Error(c(423),{cause:a}),El(Ct(t,n))),e=e.current.alternate,e.flags|=65536,l&=-l,e.lanes|=l,a=Ct(a,n),l=wu(e.stateNode,a,l),lu(e,l),He!==4&&(He=2)),!1;var r=Error(c(520),{cause:a});if(r=Ct(r,n),Gl===null?Gl=[r]:Gl.push(r),He!==4&&(He=2),t===null)return!0;a=Ct(a,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=l&-l,n.lanes|=e,e=wu(n.stateNode,a,e),lu(n,e),!1;case 1:if(t=n.type,r=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||r!==null&&typeof r.componentDidCatch=="function"&&(kn===null||!kn.has(r))))return n.flags|=65536,l&=-l,n.lanes|=l,l=cd(l),sd(l,e,n,a),lu(n,l),!1}n=n.return}while(n!==null);return!1}var fd=Error(c(461)),Ke=!1;function Ie(e,t,n,a){t.child=e===null?td(t,null,n,a):qa(t,e.child,n,a)}function dd(e,t,n,a,l){n=n.render;var r=t.ref;if("ref"in a){var f={};for(var b in a)b!=="ref"&&(f[b]=a[b])}else f=a;return la(t),a=cu(e,t,n,f,r,l),b=su(),e!==null&&!Ke?(fu(e,t,l),un(e,t,l)):(Se&&b&&Vo(t),t.flags|=1,Ie(e,t,a,l),t.child)}function hd(e,t,n,a,l){if(e===null){var r=n.type;return typeof r=="function"&&!Xo(r)&&r.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=r,bd(e,t,r,a,l)):(e=Qi(n.type,null,a,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(r=e.child,!ku(e,l)){var f=r.memoizedProps;if(n=n.compare,n=n!==null?n:xl,n(f,a)&&e.ref===t.ref)return un(e,t,l)}return t.flags|=1,e=en(r,a),e.ref=t.ref,e.return=t,t.child=e}function bd(e,t,n,a,l){if(e!==null){var r=e.memoizedProps;if(xl(r,a)&&e.ref===t.ref)if(Ke=!1,t.pendingProps=a=r,ku(e,l))(e.flags&131072)!==0&&(Ke=!0);else return t.lanes=e.lanes,un(e,t,l)}return Nu(e,t,n,a,l)}function md(e,t,n){var a=t.pendingProps,l=a.children,r=e!==null?e.memoizedState:null;if(a.mode==="hidden"){if((t.flags&128)!==0){if(a=r!==null?r.baseLanes|n:n,e!==null){for(l=t.child=e.child,r=0;l!==null;)r=r|l.lanes|l.childLanes,l=l.sibling;t.childLanes=r&~a}else t.childLanes=0,t.child=null;return pd(e,t,a,n)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Vi(t,r!==null?r.cachePool:null),r!==null?bf(t,r):ru(),nd(t);else return t.lanes=t.childLanes=536870912,pd(e,t,r!==null?r.baseLanes|n:n,n)}else r!==null?(Vi(t,r.cachePool),bf(t,r),Cn(),t.memoizedState=null):(e!==null&&Vi(t,null),ru(),Cn());return Ie(e,t,l,n),t.child}function pd(e,t,n,a){var l=eu();return l=l===null?null:{parent:Ze._currentValue,pool:l},t.memoizedState={baseLanes:n,cachePool:l},e!==null&&Vi(t,null),ru(),nd(t),e!==null&&Ol(e,t,a,!0),null}function cr(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(c(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function Nu(e,t,n,a,l){return la(t),n=cu(e,t,n,a,void 0,l),a=su(),e!==null&&!Ke?(fu(e,t,l),un(e,t,l)):(Se&&a&&Vo(t),t.flags|=1,Ie(e,t,n,l),t.child)}function gd(e,t,n,a,l,r){return la(t),t.updateQueue=null,n=pf(t,a,n,l),mf(e),a=su(),e!==null&&!Ke?(fu(e,t,r),un(e,t,r)):(Se&&a&&Vo(t),t.flags|=1,Ie(e,t,n,r),t.child)}function vd(e,t,n,a,l){if(la(t),t.stateNode===null){var r=Ca,f=n.contextType;typeof f=="object"&&f!==null&&(r=at(f)),r=new n(a,r),t.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=Tu,t.stateNode=r,r._reactInternals=t,r=t.stateNode,r.props=a,r.state=t.memoizedState,r.refs={},nu(t),f=n.contextType,r.context=typeof f=="object"&&f!==null?at(f):Ca,r.state=t.memoizedState,f=n.getDerivedStateFromProps,typeof f=="function"&&(Ou(t,n,f,a),r.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(f=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),f!==r.state&&Tu.enqueueReplaceState(r,r.state,null),zl(t,a,r,l),_l(),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308),a=!0}else if(e===null){r=t.stateNode;var b=t.memoizedProps,x=oa(n,b);r.props=x;var D=r.context,k=n.contextType;f=Ca,typeof k=="object"&&k!==null&&(f=at(k));var H=n.getDerivedStateFromProps;k=typeof H=="function"||typeof r.getSnapshotBeforeUpdate=="function",b=t.pendingProps!==b,k||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(b||D!==f)&&ld(t,r,a,f),En=!1;var _=t.memoizedState;r.state=_,zl(t,a,r,l),_l(),D=t.memoizedState,b||_!==D||En?(typeof H=="function"&&(Ou(t,n,H,a),D=t.memoizedState),(x=En||ad(t,n,x,a,_,D,f))?(k||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount()),typeof r.componentDidMount=="function"&&(t.flags|=4194308)):(typeof r.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=a,t.memoizedState=D),r.props=a,r.state=D,r.context=f,a=x):(typeof r.componentDidMount=="function"&&(t.flags|=4194308),a=!1)}else{r=t.stateNode,au(e,t),f=t.memoizedProps,k=oa(n,f),r.props=k,H=t.pendingProps,_=r.context,D=n.contextType,x=Ca,typeof D=="object"&&D!==null&&(x=at(D)),b=n.getDerivedStateFromProps,(D=typeof b=="function"||typeof r.getSnapshotBeforeUpdate=="function")||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(f!==H||_!==x)&&ld(t,r,a,x),En=!1,_=t.memoizedState,r.state=_,zl(t,a,r,l),_l();var z=t.memoizedState;f!==H||_!==z||En||e!==null&&e.dependencies!==null&&Gi(e.dependencies)?(typeof b=="function"&&(Ou(t,n,b,a),z=t.memoizedState),(k=En||ad(t,n,k,a,_,z,x)||e!==null&&e.dependencies!==null&&Gi(e.dependencies))?(D||typeof r.UNSAFE_componentWillUpdate!="function"&&typeof r.componentWillUpdate!="function"||(typeof r.componentWillUpdate=="function"&&r.componentWillUpdate(a,z,x),typeof r.UNSAFE_componentWillUpdate=="function"&&r.UNSAFE_componentWillUpdate(a,z,x)),typeof r.componentDidUpdate=="function"&&(t.flags|=4),typeof r.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof r.componentDidUpdate!="function"||f===e.memoizedProps&&_===e.memoizedState||(t.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||f===e.memoizedProps&&_===e.memoizedState||(t.flags|=1024),t.memoizedProps=a,t.memoizedState=z),r.props=a,r.state=z,r.context=x,a=k):(typeof r.componentDidUpdate!="function"||f===e.memoizedProps&&_===e.memoizedState||(t.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||f===e.memoizedProps&&_===e.memoizedState||(t.flags|=1024),a=!1)}return r=a,cr(e,t),a=(t.flags&128)!==0,r||a?(r=t.stateNode,n=a&&typeof n.getDerivedStateFromError!="function"?null:r.render(),t.flags|=1,e!==null&&a?(t.child=qa(t,e.child,null,l),t.child=qa(t,null,n,l)):Ie(e,t,n,l),t.memoizedState=r.state,e=t.child):e=un(e,t,l),e}function xd(e,t,n,a){return Sl(),t.flags|=256,Ie(e,t,n,a),t.child}var Cu={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Du(e){return{baseLanes:e,cachePool:rf()}}function _u(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=Rt),e}function yd(e,t,n){var a=t.pendingProps,l=!1,r=(t.flags&128)!==0,f;if((f=r)||(f=e!==null&&e.memoizedState===null?!1:(Ve.current&2)!==0),f&&(l=!0,t.flags&=-129),f=(t.flags&32)!==0,t.flags&=-33,e===null){if(Se){if(l?Nn(t):Cn(),Se){var b=qe,x;if(x=b){e:{for(x=b,b=Vt;x.nodeType!==8;){if(!b){b=null;break e}if(x=Ut(x.nextSibling),x===null){b=null;break e}}b=x}b!==null?(t.memoizedState={dehydrated:b,treeContext:$n!==null?{id:tn,overflow:nn}:null,retryLane:536870912,hydrationErrors:null},x=pt(18,null,null,0),x.stateNode=b,x.return=t,t.child=x,rt=t,qe=null,x=!0):x=!1}x||na(t)}if(b=t.memoizedState,b!==null&&(b=b.dehydrated,b!==null))return hc(b)?t.lanes=32:t.lanes=536870912,null;on(t)}return b=a.children,a=a.fallback,l?(Cn(),l=t.mode,b=sr({mode:"hidden",children:b},l),a=In(a,l,n,null),b.return=t,a.return=t,b.sibling=a,t.child=b,l=t.child,l.memoizedState=Du(n),l.childLanes=_u(e,f,n),t.memoizedState=Cu,a):(Nn(t),zu(t,b))}if(x=e.memoizedState,x!==null&&(b=x.dehydrated,b!==null)){if(r)t.flags&256?(Nn(t),t.flags&=-257,t=Mu(e,t,n)):t.memoizedState!==null?(Cn(),t.child=e.child,t.flags|=128,t=null):(Cn(),l=a.fallback,b=t.mode,a=sr({mode:"visible",children:a.children},b),l=In(l,b,n,null),l.flags|=2,a.return=t,l.return=t,a.sibling=l,t.child=a,qa(t,e.child,null,n),a=t.child,a.memoizedState=Du(n),a.childLanes=_u(e,f,n),t.memoizedState=Cu,t=l);else if(Nn(t),hc(b)){if(f=b.nextSibling&&b.nextSibling.dataset,f)var D=f.dgst;f=D,a=Error(c(419)),a.stack="",a.digest=f,El({value:a,source:null,stack:null}),t=Mu(e,t,n)}else if(Ke||Ol(e,t,n,!1),f=(n&e.childLanes)!==0,Ke||f){if(f=_e,f!==null&&(a=n&-n,a=(a&42)!==0?1:bo(a),a=(a&(f.suspendedLanes|n))!==0?0:a,a!==0&&a!==x.retryLane))throw x.retryLane=a,Na(e,a),At(f,e,a),fd;b.data==="$?"||Fu(),t=Mu(e,t,n)}else b.data==="$?"?(t.flags|=192,t.child=e.child,t=null):(e=x.treeContext,qe=Ut(b.nextSibling),rt=t,Se=!0,ta=null,Vt=!1,e!==null&&(_t[zt++]=tn,_t[zt++]=nn,_t[zt++]=$n,tn=e.id,nn=e.overflow,$n=t),t=zu(t,a.children),t.flags|=4096);return t}return l?(Cn(),l=a.fallback,b=t.mode,x=e.child,D=x.sibling,a=en(x,{mode:"hidden",children:a.children}),a.subtreeFlags=x.subtreeFlags&65011712,D!==null?l=en(D,l):(l=In(l,b,n,null),l.flags|=2),l.return=t,a.return=t,a.sibling=l,t.child=a,a=l,l=t.child,b=e.child.memoizedState,b===null?b=Du(n):(x=b.cachePool,x!==null?(D=Ze._currentValue,x=x.parent!==D?{parent:D,pool:D}:x):x=rf(),b={baseLanes:b.baseLanes|n,cachePool:x}),l.memoizedState=b,l.childLanes=_u(e,f,n),t.memoizedState=Cu,a):(Nn(t),n=e.child,e=n.sibling,n=en(n,{mode:"visible",children:a.children}),n.return=t,n.sibling=null,e!==null&&(f=t.deletions,f===null?(t.deletions=[e],t.flags|=16):f.push(e)),t.child=n,t.memoizedState=null,n)}function zu(e,t){return t=sr({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function sr(e,t){return e=pt(22,e,null,t),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function Mu(e,t,n){return qa(t,e.child,null,n),e=zu(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Ad(e,t,n){e.lanes|=t;var a=e.alternate;a!==null&&(a.lanes|=t),Fo(e.return,t,n)}function Ru(e,t,n,a,l){var r=e.memoizedState;r===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:a,tail:n,tailMode:l}:(r.isBackwards=t,r.rendering=null,r.renderingStartTime=0,r.last=a,r.tail=n,r.tailMode=l)}function Sd(e,t,n){var a=t.pendingProps,l=a.revealOrder,r=a.tail;if(Ie(e,t,a.children,n),a=Ve.current,(a&2)!==0)a=a&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ad(e,n,t);else if(e.tag===19)Ad(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}a&=1}switch(j(Ve,a),l){case"forwards":for(n=t.child,l=null;n!==null;)e=n.alternate,e!==null&&rr(e)===null&&(l=n),n=n.sibling;n=l,n===null?(l=t.child,t.child=null):(l=n.sibling,n.sibling=null),Ru(t,!1,l,n,r);break;case"backwards":for(n=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&rr(e)===null){t.child=l;break}e=l.sibling,l.sibling=n,n=l,l=e}Ru(t,!0,n,null,r);break;case"together":Ru(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function un(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Rn|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(Ol(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(c(153));if(t.child!==null){for(e=t.child,n=en(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=en(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function ku(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&Gi(e)))}function bm(e,t,n){switch(t.tag){case 3:Me(t,t.stateNode.containerInfo),Sn(t,Ze,e.memoizedState.cache),Sl();break;case 27:case 5:uo(t);break;case 4:Me(t,t.stateNode.containerInfo);break;case 10:Sn(t,t.type,t.memoizedProps.value);break;case 13:var a=t.memoizedState;if(a!==null)return a.dehydrated!==null?(Nn(t),t.flags|=128,null):(n&t.child.childLanes)!==0?yd(e,t,n):(Nn(t),e=un(e,t,n),e!==null?e.sibling:null);Nn(t);break;case 19:var l=(e.flags&128)!==0;if(a=(n&t.childLanes)!==0,a||(Ol(e,t,n,!1),a=(n&t.childLanes)!==0),l){if(a)return Sd(e,t,n);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),j(Ve,Ve.current),a)break;return null;case 22:case 23:return t.lanes=0,md(e,t,n);case 24:Sn(t,Ze,e.memoizedState.cache)}return un(e,t,n)}function Ed(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)Ke=!0;else{if(!ku(e,n)&&(t.flags&128)===0)return Ke=!1,bm(e,t,n);Ke=(e.flags&131072)!==0}else Ke=!1,Se&&(t.flags&1048576)!==0&&Is(t,Xi,t.index);switch(t.lanes=0,t.tag){case 16:e:{e=t.pendingProps;var a=t.elementType,l=a._init;if(a=l(a._payload),t.type=a,typeof a=="function")Xo(a)?(e=oa(a,e),t.tag=1,t=vd(null,t,a,e,n)):(t.tag=0,t=Nu(null,t,a,e,n));else{if(a!=null){if(l=a.$$typeof,l===ce){t.tag=11,t=dd(null,t,a,e,n);break e}else if(l===Y){t.tag=14,t=hd(null,t,a,e,n);break e}}throw t=Tt(a)||a,Error(c(306,t,""))}}return t;case 0:return Nu(e,t,t.type,t.pendingProps,n);case 1:return a=t.type,l=oa(a,t.pendingProps),vd(e,t,a,l,n);case 3:e:{if(Me(t,t.stateNode.containerInfo),e===null)throw Error(c(387));a=t.pendingProps;var r=t.memoizedState;l=r.element,au(e,t),zl(t,a,null,n);var f=t.memoizedState;if(a=f.cache,Sn(t,Ze,a),a!==r.cache&&Wo(t,[Ze],n,!0),_l(),a=f.element,r.isDehydrated)if(r={element:a,isDehydrated:!1,cache:f.cache},t.updateQueue.baseState=r,t.memoizedState=r,t.flags&256){t=xd(e,t,a,n);break e}else if(a!==l){l=Ct(Error(c(424)),t),El(l),t=xd(e,t,a,n);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(qe=Ut(e.firstChild),rt=t,Se=!0,ta=null,Vt=!0,n=td(t,null,a,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(Sl(),a===l){t=un(e,t,n);break e}Ie(e,t,a,n)}t=t.child}return t;case 26:return cr(e,t),e===null?(n=N0(t.type,null,t.pendingProps,null))?t.memoizedState=n:Se||(n=t.type,e=t.pendingProps,a=Or(ie.current).createElement(n),a[nt]=t,a[ut]=e,et(a,n,e),Je(a),t.stateNode=a):t.memoizedState=N0(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return uo(t),e===null&&Se&&(a=t.stateNode=O0(t.type,t.pendingProps,ie.current),rt=t,Vt=!0,l=qe,Un(t.type)?(bc=l,qe=Ut(a.firstChild)):qe=l),Ie(e,t,t.pendingProps.children,n),cr(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&Se&&((l=a=qe)&&(a=Ym(a,t.type,t.pendingProps,Vt),a!==null?(t.stateNode=a,rt=t,qe=Ut(a.firstChild),Vt=!1,l=!0):l=!1),l||na(t)),uo(t),l=t.type,r=t.pendingProps,f=e!==null?e.memoizedProps:null,a=r.children,sc(l,r)?a=null:f!==null&&sc(l,f)&&(t.flags|=32),t.memoizedState!==null&&(l=cu(e,t,rm,null,null,n),$l._currentValue=l),cr(e,t),Ie(e,t,a,n),t.child;case 6:return e===null&&Se&&((e=n=qe)&&(n=Xm(n,t.pendingProps,Vt),n!==null?(t.stateNode=n,rt=t,qe=null,e=!0):e=!1),e||na(t)),null;case 13:return yd(e,t,n);case 4:return Me(t,t.stateNode.containerInfo),a=t.pendingProps,e===null?t.child=qa(t,null,a,n):Ie(e,t,a,n),t.child;case 11:return dd(e,t,t.type,t.pendingProps,n);case 7:return Ie(e,t,t.pendingProps,n),t.child;case 8:return Ie(e,t,t.pendingProps.children,n),t.child;case 12:return Ie(e,t,t.pendingProps.children,n),t.child;case 10:return a=t.pendingProps,Sn(t,t.type,a.value),Ie(e,t,a.children,n),t.child;case 9:return l=t.type._context,a=t.pendingProps.children,la(t),l=at(l),a=a(l),t.flags|=1,Ie(e,t,a,n),t.child;case 14:return hd(e,t,t.type,t.pendingProps,n);case 15:return bd(e,t,t.type,t.pendingProps,n);case 19:return Sd(e,t,n);case 31:return a=t.pendingProps,n=t.mode,a={mode:a.mode,children:a.children},e===null?(n=sr(a,n),n.ref=t.ref,t.child=n,n.return=t,t=n):(n=en(e.child,a),n.ref=t.ref,t.child=n,n.return=t,t=n),t;case 22:return md(e,t,n);case 24:return la(t),a=at(Ze),e===null?(l=eu(),l===null&&(l=_e,r=Io(),l.pooledCache=r,r.refCount++,r!==null&&(l.pooledCacheLanes|=n),l=r),t.memoizedState={parent:a,cache:l},nu(t),Sn(t,Ze,l)):((e.lanes&n)!==0&&(au(e,t),zl(t,null,null,n),_l()),l=e.memoizedState,r=t.memoizedState,l.parent!==a?(l={parent:a,cache:a},t.memoizedState=l,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=l),Sn(t,Ze,a)):(a=r.cache,Sn(t,Ze,a),a!==l.cache&&Wo(t,[Ze],n,!0))),Ie(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(c(156,t.tag))}function cn(e){e.flags|=4}function Od(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!M0(t)){if(t=Mt.current,t!==null&&((xe&4194048)===xe?Pt!==null:(xe&62914560)!==xe&&(xe&536870912)===0||t!==Pt))throw Cl=tu,of;e.flags|=8192}}function fr(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?ts():536870912,e.lanes|=t,Ya|=t)}function ql(e,t){if(!Se)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null}}function Ue(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,a=0;if(t)for(var l=e.child;l!==null;)n|=l.lanes|l.childLanes,a|=l.subtreeFlags&65011712,a|=l.flags&65011712,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)n|=l.lanes|l.childLanes,a|=l.subtreeFlags,a|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=a,e.childLanes=n,t}function mm(e,t,n){var a=t.pendingProps;switch(Po(t),t.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ue(t),null;case 1:return Ue(t),null;case 3:return n=t.stateNode,a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),ln(Ze),vn(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Al(t)?cn(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,tf())),Ue(t),null;case 26:return n=t.memoizedState,e===null?(cn(t),n!==null?(Ue(t),Od(t,n)):(Ue(t),t.flags&=-16777217)):n?n!==e.memoizedState?(cn(t),Ue(t),Od(t,n)):(Ue(t),t.flags&=-16777217):(e.memoizedProps!==a&&cn(t),Ue(t),t.flags&=-16777217),null;case 27:Si(t),n=ie.current;var l=t.type;if(e!==null&&t.stateNode!=null)e.memoizedProps!==a&&cn(t);else{if(!a){if(t.stateNode===null)throw Error(c(166));return Ue(t),null}e=$.current,Al(t)?$s(t):(e=O0(l,a,n),t.stateNode=e,cn(t))}return Ue(t),null;case 5:if(Si(t),n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==a&&cn(t);else{if(!a){if(t.stateNode===null)throw Error(c(166));return Ue(t),null}if(e=$.current,Al(t))$s(t);else{switch(l=Or(ie.current),e){case 1:e=l.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:e=l.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":e=l.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":e=l.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof a.is=="string"?l.createElement("select",{is:a.is}):l.createElement("select"),a.multiple?e.multiple=!0:a.size&&(e.size=a.size);break;default:e=typeof a.is=="string"?l.createElement(n,{is:a.is}):l.createElement(n)}}e[nt]=t,e[ut]=a;e:for(l=t.child;l!==null;){if(l.tag===5||l.tag===6)e.appendChild(l.stateNode);else if(l.tag!==4&&l.tag!==27&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===t)break e;for(;l.sibling===null;){if(l.return===null||l.return===t)break e;l=l.return}l.sibling.return=l.return,l=l.sibling}t.stateNode=e;e:switch(et(e,n,a),n){case"button":case"input":case"select":case"textarea":e=!!a.autoFocus;break e;case"img":e=!0;break e;default:e=!1}e&&cn(t)}}return Ue(t),t.flags&=-16777217,null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==a&&cn(t);else{if(typeof a!="string"&&t.stateNode===null)throw Error(c(166));if(e=ie.current,Al(t)){if(e=t.stateNode,n=t.memoizedProps,a=null,l=rt,l!==null)switch(l.tag){case 27:case 5:a=l.memoizedProps}e[nt]=t,e=!!(e.nodeValue===n||a!==null&&a.suppressHydrationWarning===!0||g0(e.nodeValue,n)),e||na(t)}else e=Or(e).createTextNode(a),e[nt]=t,t.stateNode=e}return Ue(t),null;case 13:if(a=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(l=Al(t),a!==null&&a.dehydrated!==null){if(e===null){if(!l)throw Error(c(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(c(317));l[nt]=t}else Sl(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ue(t),l=!1}else l=tf(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=l),l=!0;if(!l)return t.flags&256?(on(t),t):(on(t),null)}if(on(t),(t.flags&128)!==0)return t.lanes=n,t;if(n=a!==null,e=e!==null&&e.memoizedState!==null,n){a=t.child,l=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(l=a.alternate.memoizedState.cachePool.pool);var r=null;a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(r=a.memoizedState.cachePool.pool),r!==l&&(a.flags|=2048)}return n!==e&&n&&(t.child.flags|=8192),fr(t,t.updateQueue),Ue(t),null;case 4:return vn(),e===null&&ic(t.stateNode.containerInfo),Ue(t),null;case 10:return ln(t.type),Ue(t),null;case 19:if(P(Ve),l=t.memoizedState,l===null)return Ue(t),null;if(a=(t.flags&128)!==0,r=l.rendering,r===null)if(a)ql(l,!1);else{if(He!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(r=rr(e),r!==null){for(t.flags|=128,ql(l,!1),e=r.updateQueue,t.updateQueue=e,fr(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)Ws(n,e),n=n.sibling;return j(Ve,Ve.current&1|2),t.child}e=e.sibling}l.tail!==null&&Zt()>br&&(t.flags|=128,a=!0,ql(l,!1),t.lanes=4194304)}else{if(!a)if(e=rr(r),e!==null){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,fr(t,e),ql(l,!0),l.tail===null&&l.tailMode==="hidden"&&!r.alternate&&!Se)return Ue(t),null}else 2*Zt()-l.renderingStartTime>br&&n!==536870912&&(t.flags|=128,a=!0,ql(l,!1),t.lanes=4194304);l.isBackwards?(r.sibling=t.child,t.child=r):(e=l.last,e!==null?e.sibling=r:t.child=r,l.last=r)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=Zt(),t.sibling=null,e=Ve.current,j(Ve,a?e&1|2:e&1),t):(Ue(t),null);case 22:case 23:return on(t),ou(),a=t.memoizedState!==null,e!==null?e.memoizedState!==null!==a&&(t.flags|=8192):a&&(t.flags|=8192),a?(n&536870912)!==0&&(t.flags&128)===0&&(Ue(t),t.subtreeFlags&6&&(t.flags|=8192)):Ue(t),n=t.updateQueue,n!==null&&fr(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),a=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),a!==n&&(t.flags|=2048),e!==null&&P(ia),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),ln(Ze),Ue(t),null;case 25:return null;case 30:return null}throw Error(c(156,t.tag))}function pm(e,t){switch(Po(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return ln(Ze),vn(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Si(t),null;case 13:if(on(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(c(340));Sl()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return P(Ve),null;case 4:return vn(),null;case 10:return ln(t.type),null;case 22:case 23:return on(t),ou(),e!==null&&P(ia),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return ln(Ze),null;case 25:return null;default:return null}}function Td(e,t){switch(Po(t),t.tag){case 3:ln(Ze),vn();break;case 26:case 27:case 5:Si(t);break;case 4:vn();break;case 13:on(t);break;case 19:P(Ve);break;case 10:ln(t.type);break;case 22:case 23:on(t),ou(),e!==null&&P(ia);break;case 24:ln(Ze)}}function Hl(e,t){try{var n=t.updateQueue,a=n!==null?n.lastEffect:null;if(a!==null){var l=a.next;n=l;do{if((n.tag&e)===e){a=void 0;var r=n.create,f=n.inst;a=r(),f.destroy=a}n=n.next}while(n!==l)}}catch(b){De(t,t.return,b)}}function Dn(e,t,n){try{var a=t.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var r=l.next;a=r;do{if((a.tag&e)===e){var f=a.inst,b=f.destroy;if(b!==void 0){f.destroy=void 0,l=t;var x=n,D=b;try{D()}catch(k){De(l,x,k)}}}a=a.next}while(a!==r)}}catch(k){De(t,t.return,k)}}function wd(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{hf(t,n)}catch(a){De(e,e.return,a)}}}function Nd(e,t,n){n.props=oa(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(a){De(e,t,a)}}function Ll(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var a=e.stateNode;break;case 30:a=e.stateNode;break;default:a=e.stateNode}typeof n=="function"?e.refCleanup=n(a):n.current=a}}catch(l){De(e,t,l)}}function Jt(e,t){var n=e.ref,a=e.refCleanup;if(n!==null)if(typeof a=="function")try{a()}catch(l){De(e,t,l)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(l){De(e,t,l)}else n.current=null}function Cd(e){var t=e.type,n=e.memoizedProps,a=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&a.focus();break e;case"img":n.src?a.src=n.src:n.srcSet&&(a.srcset=n.srcSet)}}catch(l){De(e,e.return,l)}}function Bu(e,t,n){try{var a=e.stateNode;Um(a,e.type,n,t),a[ut]=t}catch(l){De(e,e.return,l)}}function Dd(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Un(e.type)||e.tag===4}function ju(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Dd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Un(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Uu(e,t,n){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Er));else if(a!==4&&(a===27&&Un(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(Uu(e,t,n),e=e.sibling;e!==null;)Uu(e,t,n),e=e.sibling}function dr(e,t,n){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(a!==4&&(a===27&&Un(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(dr(e,t,n),e=e.sibling;e!==null;)dr(e,t,n),e=e.sibling}function _d(e){var t=e.stateNode,n=e.memoizedProps;try{for(var a=e.type,l=t.attributes;l.length;)t.removeAttributeNode(l[0]);et(t,a,n),t[nt]=e,t[ut]=n}catch(r){De(e,e.return,r)}}var sn=!1,Ye=!1,qu=!1,zd=typeof WeakSet=="function"?WeakSet:Set,Fe=null;function gm(e,t){if(e=e.containerInfo,uc=_r,e=Qs(e),jo(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var a=n.getSelection&&n.getSelection();if(a&&a.rangeCount!==0){n=a.anchorNode;var l=a.anchorOffset,r=a.focusNode;a=a.focusOffset;try{n.nodeType,r.nodeType}catch{n=null;break e}var f=0,b=-1,x=-1,D=0,k=0,H=e,_=null;t:for(;;){for(var z;H!==n||l!==0&&H.nodeType!==3||(b=f+l),H!==r||a!==0&&H.nodeType!==3||(x=f+a),H.nodeType===3&&(f+=H.nodeValue.length),(z=H.firstChild)!==null;)_=H,H=z;for(;;){if(H===e)break t;if(_===n&&++D===l&&(b=f),_===r&&++k===a&&(x=f),(z=H.nextSibling)!==null)break;H=_,_=H.parentNode}H=z}n=b===-1||x===-1?null:{start:b,end:x}}else n=null}n=n||{start:0,end:0}}else n=null;for(cc={focusedElem:e,selectionRange:n},_r=!1,Fe=t;Fe!==null;)if(t=Fe,e=t.child,(t.subtreeFlags&1024)!==0&&e!==null)e.return=t,Fe=e;else for(;Fe!==null;){switch(t=Fe,r=t.alternate,e=t.flags,t.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&r!==null){e=void 0,n=t,l=r.memoizedProps,r=r.memoizedState,a=n.stateNode;try{var re=oa(n.type,l,n.elementType===n.type);e=a.getSnapshotBeforeUpdate(re,r),a.__reactInternalSnapshotBeforeUpdate=e}catch(ne){De(n,n.return,ne)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)dc(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":dc(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(c(163))}if(e=t.sibling,e!==null){e.return=t.return,Fe=e;break}Fe=t.return}}function Md(e,t,n){var a=n.flags;switch(n.tag){case 0:case 11:case 15:_n(e,n),a&4&&Hl(5,n);break;case 1:if(_n(e,n),a&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(f){De(n,n.return,f)}else{var l=oa(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(l,t,e.__reactInternalSnapshotBeforeUpdate)}catch(f){De(n,n.return,f)}}a&64&&wd(n),a&512&&Ll(n,n.return);break;case 3:if(_n(e,n),a&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{hf(e,t)}catch(f){De(n,n.return,f)}}break;case 27:t===null&&a&4&&_d(n);case 26:case 5:_n(e,n),t===null&&a&4&&Cd(n),a&512&&Ll(n,n.return);break;case 12:_n(e,n);break;case 13:_n(e,n),a&4&&Bd(e,n),a&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=wm.bind(null,n),Gm(e,n))));break;case 22:if(a=n.memoizedState!==null||sn,!a){t=t!==null&&t.memoizedState!==null||Ye,l=sn;var r=Ye;sn=a,(Ye=t)&&!r?zn(e,n,(n.subtreeFlags&8772)!==0):_n(e,n),sn=l,Ye=r}break;case 30:break;default:_n(e,n)}}function Rd(e){var t=e.alternate;t!==null&&(e.alternate=null,Rd(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&go(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Re=null,ft=!1;function fn(e,t,n){for(n=n.child;n!==null;)kd(e,t,n),n=n.sibling}function kd(e,t,n){if(ht&&typeof ht.onCommitFiberUnmount=="function")try{ht.onCommitFiberUnmount(ol,n)}catch{}switch(n.tag){case 26:Ye||Jt(n,t),fn(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:Ye||Jt(n,t);var a=Re,l=ft;Un(n.type)&&(Re=n.stateNode,ft=!1),fn(e,t,n),Kl(n.stateNode),Re=a,ft=l;break;case 5:Ye||Jt(n,t);case 6:if(a=Re,l=ft,Re=null,fn(e,t,n),Re=a,ft=l,Re!==null)if(ft)try{(Re.nodeType===9?Re.body:Re.nodeName==="HTML"?Re.ownerDocument.body:Re).removeChild(n.stateNode)}catch(r){De(n,t,r)}else try{Re.removeChild(n.stateNode)}catch(r){De(n,t,r)}break;case 18:Re!==null&&(ft?(e=Re,S0(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),ai(e)):S0(Re,n.stateNode));break;case 4:a=Re,l=ft,Re=n.stateNode.containerInfo,ft=!0,fn(e,t,n),Re=a,ft=l;break;case 0:case 11:case 14:case 15:Ye||Dn(2,n,t),Ye||Dn(4,n,t),fn(e,t,n);break;case 1:Ye||(Jt(n,t),a=n.stateNode,typeof a.componentWillUnmount=="function"&&Nd(n,t,a)),fn(e,t,n);break;case 21:fn(e,t,n);break;case 22:Ye=(a=Ye)||n.memoizedState!==null,fn(e,t,n),Ye=a;break;default:fn(e,t,n)}}function Bd(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{ai(e)}catch(n){De(t,t.return,n)}}function vm(e){switch(e.tag){case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new zd),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new zd),t;default:throw Error(c(435,e.tag))}}function Hu(e,t){var n=vm(e);t.forEach(function(a){var l=Nm.bind(null,e,a);n.has(a)||(n.add(a),a.then(l,l))})}function gt(e,t){var n=t.deletions;if(n!==null)for(var a=0;a<n.length;a++){var l=n[a],r=e,f=t,b=f;e:for(;b!==null;){switch(b.tag){case 27:if(Un(b.type)){Re=b.stateNode,ft=!1;break e}break;case 5:Re=b.stateNode,ft=!1;break e;case 3:case 4:Re=b.stateNode.containerInfo,ft=!0;break e}b=b.return}if(Re===null)throw Error(c(160));kd(r,f,l),Re=null,ft=!1,r=l.alternate,r!==null&&(r.return=null),l.return=null}if(t.subtreeFlags&13878)for(t=t.child;t!==null;)jd(t,e),t=t.sibling}var jt=null;function jd(e,t){var n=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:gt(t,e),vt(e),a&4&&(Dn(3,e,e.return),Hl(3,e),Dn(5,e,e.return));break;case 1:gt(t,e),vt(e),a&512&&(Ye||n===null||Jt(n,n.return)),a&64&&sn&&(e=e.updateQueue,e!==null&&(a=e.callbacks,a!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?a:n.concat(a))));break;case 26:var l=jt;if(gt(t,e),vt(e),a&512&&(Ye||n===null||Jt(n,n.return)),a&4){var r=n!==null?n.memoizedState:null;if(a=e.memoizedState,n===null)if(a===null)if(e.stateNode===null){e:{a=e.type,n=e.memoizedProps,l=l.ownerDocument||l;t:switch(a){case"title":r=l.getElementsByTagName("title")[0],(!r||r[sl]||r[nt]||r.namespaceURI==="http://www.w3.org/2000/svg"||r.hasAttribute("itemprop"))&&(r=l.createElement(a),l.head.insertBefore(r,l.querySelector("head > title"))),et(r,a,n),r[nt]=e,Je(r),a=r;break e;case"link":var f=_0("link","href",l).get(a+(n.href||""));if(f){for(var b=0;b<f.length;b++)if(r=f[b],r.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&r.getAttribute("rel")===(n.rel==null?null:n.rel)&&r.getAttribute("title")===(n.title==null?null:n.title)&&r.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){f.splice(b,1);break t}}r=l.createElement(a),et(r,a,n),l.head.appendChild(r);break;case"meta":if(f=_0("meta","content",l).get(a+(n.content||""))){for(b=0;b<f.length;b++)if(r=f[b],r.getAttribute("content")===(n.content==null?null:""+n.content)&&r.getAttribute("name")===(n.name==null?null:n.name)&&r.getAttribute("property")===(n.property==null?null:n.property)&&r.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&r.getAttribute("charset")===(n.charSet==null?null:n.charSet)){f.splice(b,1);break t}}r=l.createElement(a),et(r,a,n),l.head.appendChild(r);break;default:throw Error(c(468,a))}r[nt]=e,Je(r),a=r}e.stateNode=a}else z0(l,e.type,e.stateNode);else e.stateNode=D0(l,a,e.memoizedProps);else r!==a?(r===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):r.count--,a===null?z0(l,e.type,e.stateNode):D0(l,a,e.memoizedProps)):a===null&&e.stateNode!==null&&Bu(e,e.memoizedProps,n.memoizedProps)}break;case 27:gt(t,e),vt(e),a&512&&(Ye||n===null||Jt(n,n.return)),n!==null&&a&4&&Bu(e,e.memoizedProps,n.memoizedProps);break;case 5:if(gt(t,e),vt(e),a&512&&(Ye||n===null||Jt(n,n.return)),e.flags&32){l=e.stateNode;try{ya(l,"")}catch(z){De(e,e.return,z)}}a&4&&e.stateNode!=null&&(l=e.memoizedProps,Bu(e,l,n!==null?n.memoizedProps:l)),a&1024&&(qu=!0);break;case 6:if(gt(t,e),vt(e),a&4){if(e.stateNode===null)throw Error(c(162));a=e.memoizedProps,n=e.stateNode;try{n.nodeValue=a}catch(z){De(e,e.return,z)}}break;case 3:if(Nr=null,l=jt,jt=Tr(t.containerInfo),gt(t,e),jt=l,vt(e),a&4&&n!==null&&n.memoizedState.isDehydrated)try{ai(t.containerInfo)}catch(z){De(e,e.return,z)}qu&&(qu=!1,Ud(e));break;case 4:a=jt,jt=Tr(e.stateNode.containerInfo),gt(t,e),vt(e),jt=a;break;case 12:gt(t,e),vt(e);break;case 13:gt(t,e),vt(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(Zu=Zt()),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,Hu(e,a)));break;case 22:l=e.memoizedState!==null;var x=n!==null&&n.memoizedState!==null,D=sn,k=Ye;if(sn=D||l,Ye=k||x,gt(t,e),Ye=k,sn=D,vt(e),a&8192)e:for(t=e.stateNode,t._visibility=l?t._visibility&-2:t._visibility|1,l&&(n===null||x||sn||Ye||ua(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){x=n=t;try{if(r=x.stateNode,l)f=r.style,typeof f.setProperty=="function"?f.setProperty("display","none","important"):f.display="none";else{b=x.stateNode;var H=x.memoizedProps.style,_=H!=null&&H.hasOwnProperty("display")?H.display:null;b.style.display=_==null||typeof _=="boolean"?"":(""+_).trim()}}catch(z){De(x,x.return,z)}}}else if(t.tag===6){if(n===null){x=t;try{x.stateNode.nodeValue=l?"":x.memoizedProps}catch(z){De(x,x.return,z)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}a&4&&(a=e.updateQueue,a!==null&&(n=a.retryQueue,n!==null&&(a.retryQueue=null,Hu(e,n))));break;case 19:gt(t,e),vt(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,Hu(e,a)));break;case 30:break;case 21:break;default:gt(t,e),vt(e)}}function vt(e){var t=e.flags;if(t&2){try{for(var n,a=e.return;a!==null;){if(Dd(a)){n=a;break}a=a.return}if(n==null)throw Error(c(160));switch(n.tag){case 27:var l=n.stateNode,r=ju(e);dr(e,r,l);break;case 5:var f=n.stateNode;n.flags&32&&(ya(f,""),n.flags&=-33);var b=ju(e);dr(e,b,f);break;case 3:case 4:var x=n.stateNode.containerInfo,D=ju(e);Uu(e,D,x);break;default:throw Error(c(161))}}catch(k){De(e,e.return,k)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Ud(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Ud(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function _n(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Md(e,t.alternate,t),t=t.sibling}function ua(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Dn(4,t,t.return),ua(t);break;case 1:Jt(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&Nd(t,t.return,n),ua(t);break;case 27:Kl(t.stateNode);case 26:case 5:Jt(t,t.return),ua(t);break;case 22:t.memoizedState===null&&ua(t);break;case 30:ua(t);break;default:ua(t)}e=e.sibling}}function zn(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var a=t.alternate,l=e,r=t,f=r.flags;switch(r.tag){case 0:case 11:case 15:zn(l,r,n),Hl(4,r);break;case 1:if(zn(l,r,n),a=r,l=a.stateNode,typeof l.componentDidMount=="function")try{l.componentDidMount()}catch(D){De(a,a.return,D)}if(a=r,l=a.updateQueue,l!==null){var b=a.stateNode;try{var x=l.shared.hiddenCallbacks;if(x!==null)for(l.shared.hiddenCallbacks=null,l=0;l<x.length;l++)df(x[l],b)}catch(D){De(a,a.return,D)}}n&&f&64&&wd(r),Ll(r,r.return);break;case 27:_d(r);case 26:case 5:zn(l,r,n),n&&a===null&&f&4&&Cd(r),Ll(r,r.return);break;case 12:zn(l,r,n);break;case 13:zn(l,r,n),n&&f&4&&Bd(l,r);break;case 22:r.memoizedState===null&&zn(l,r,n),Ll(r,r.return);break;case 30:break;default:zn(l,r,n)}t=t.sibling}}function Lu(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&Tl(n))}function Qu(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Tl(e))}function Kt(e,t,n,a){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)qd(e,t,n,a),t=t.sibling}function qd(e,t,n,a){var l=t.flags;switch(t.tag){case 0:case 11:case 15:Kt(e,t,n,a),l&2048&&Hl(9,t);break;case 1:Kt(e,t,n,a);break;case 3:Kt(e,t,n,a),l&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Tl(e)));break;case 12:if(l&2048){Kt(e,t,n,a),e=t.stateNode;try{var r=t.memoizedProps,f=r.id,b=r.onPostCommit;typeof b=="function"&&b(f,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(x){De(t,t.return,x)}}else Kt(e,t,n,a);break;case 13:Kt(e,t,n,a);break;case 23:break;case 22:r=t.stateNode,f=t.alternate,t.memoizedState!==null?r._visibility&2?Kt(e,t,n,a):Ql(e,t):r._visibility&2?Kt(e,t,n,a):(r._visibility|=2,Ha(e,t,n,a,(t.subtreeFlags&10256)!==0)),l&2048&&Lu(f,t);break;case 24:Kt(e,t,n,a),l&2048&&Qu(t.alternate,t);break;default:Kt(e,t,n,a)}}function Ha(e,t,n,a,l){for(l=l&&(t.subtreeFlags&10256)!==0,t=t.child;t!==null;){var r=e,f=t,b=n,x=a,D=f.flags;switch(f.tag){case 0:case 11:case 15:Ha(r,f,b,x,l),Hl(8,f);break;case 23:break;case 22:var k=f.stateNode;f.memoizedState!==null?k._visibility&2?Ha(r,f,b,x,l):Ql(r,f):(k._visibility|=2,Ha(r,f,b,x,l)),l&&D&2048&&Lu(f.alternate,f);break;case 24:Ha(r,f,b,x,l),l&&D&2048&&Qu(f.alternate,f);break;default:Ha(r,f,b,x,l)}t=t.sibling}}function Ql(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,a=t,l=a.flags;switch(a.tag){case 22:Ql(n,a),l&2048&&Lu(a.alternate,a);break;case 24:Ql(n,a),l&2048&&Qu(a.alternate,a);break;default:Ql(n,a)}t=t.sibling}}var Yl=8192;function La(e){if(e.subtreeFlags&Yl)for(e=e.child;e!==null;)Hd(e),e=e.sibling}function Hd(e){switch(e.tag){case 26:La(e),e.flags&Yl&&e.memoizedState!==null&&ap(jt,e.memoizedState,e.memoizedProps);break;case 5:La(e);break;case 3:case 4:var t=jt;jt=Tr(e.stateNode.containerInfo),La(e),jt=t;break;case 22:e.memoizedState===null&&(t=e.alternate,t!==null&&t.memoizedState!==null?(t=Yl,Yl=16777216,La(e),Yl=t):La(e));break;default:La(e)}}function Ld(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Xl(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var a=t[n];Fe=a,Yd(a,e)}Ld(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Qd(e),e=e.sibling}function Qd(e){switch(e.tag){case 0:case 11:case 15:Xl(e),e.flags&2048&&Dn(9,e,e.return);break;case 3:Xl(e);break;case 12:Xl(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,hr(e)):Xl(e);break;default:Xl(e)}}function hr(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var a=t[n];Fe=a,Yd(a,e)}Ld(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Dn(8,t,t.return),hr(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,hr(t));break;default:hr(t)}e=e.sibling}}function Yd(e,t){for(;Fe!==null;){var n=Fe;switch(n.tag){case 0:case 11:case 15:Dn(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var a=n.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:Tl(n.memoizedState.cache)}if(a=n.child,a!==null)a.return=n,Fe=a;else e:for(n=e;Fe!==null;){a=Fe;var l=a.sibling,r=a.return;if(Rd(a),a===n){Fe=null;break e}if(l!==null){l.return=r,Fe=l;break e}Fe=r}}}var xm={getCacheForType:function(e){var t=at(Ze),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n}},ym=typeof WeakMap=="function"?WeakMap:Map,Ee=0,_e=null,me=null,xe=0,Oe=0,xt=null,Mn=!1,Qa=!1,Yu=!1,dn=0,He=0,Rn=0,ca=0,Xu=0,Rt=0,Ya=0,Gl=null,dt=null,Gu=!1,Zu=0,br=1/0,mr=null,kn=null,$e=0,Bn=null,Xa=null,Ga=0,Vu=0,Pu=null,Xd=null,Zl=0,Ju=null;function yt(){if((Ee&2)!==0&&xe!==0)return xe&-xe;if(R.T!==null){var e=za;return e!==0?e:tc()}return ls()}function Gd(){Rt===0&&(Rt=(xe&536870912)===0||Se?es():536870912);var e=Mt.current;return e!==null&&(e.flags|=32),Rt}function At(e,t,n){(e===_e&&(Oe===2||Oe===9)||e.cancelPendingCommit!==null)&&(Za(e,0),jn(e,xe,Rt,!1)),cl(e,n),((Ee&2)===0||e!==_e)&&(e===_e&&((Ee&2)===0&&(ca|=n),He===4&&jn(e,xe,Rt,!1)),Ft(e))}function Zd(e,t,n){if((Ee&6)!==0)throw Error(c(327));var a=!n&&(t&124)===0&&(t&e.expiredLanes)===0||ul(e,t),l=a?Em(e,t):Wu(e,t,!0),r=a;do{if(l===0){Qa&&!a&&jn(e,t,0,!1);break}else{if(n=e.current.alternate,r&&!Am(n)){l=Wu(e,t,!1),r=!1;continue}if(l===2){if(r=t,e.errorRecoveryDisabledLanes&r)var f=0;else f=e.pendingLanes&-536870913,f=f!==0?f:f&536870912?536870912:0;if(f!==0){t=f;e:{var b=e;l=Gl;var x=b.current.memoizedState.isDehydrated;if(x&&(Za(b,f).flags|=256),f=Wu(b,f,!1),f!==2){if(Yu&&!x){b.errorRecoveryDisabledLanes|=r,ca|=r,l=4;break e}r=dt,dt=l,r!==null&&(dt===null?dt=r:dt.push.apply(dt,r))}l=f}if(r=!1,l!==2)continue}}if(l===1){Za(e,0),jn(e,t,0,!0);break}e:{switch(a=e,r=l,r){case 0:case 1:throw Error(c(345));case 4:if((t&4194048)!==t)break;case 6:jn(a,t,Rt,!Mn);break e;case 2:dt=null;break;case 3:case 5:break;default:throw Error(c(329))}if((t&62914560)===t&&(l=Zu+300-Zt(),10<l)){if(jn(a,t,Rt,!Mn),wi(a,0,!0)!==0)break e;a.timeoutHandle=y0(Vd.bind(null,a,n,dt,mr,Gu,t,Rt,ca,Ya,Mn,r,2,-0,0),l);break e}Vd(a,n,dt,mr,Gu,t,Rt,ca,Ya,Mn,r,0,-0,0)}}break}while(!0);Ft(e)}function Vd(e,t,n,a,l,r,f,b,x,D,k,H,_,z){if(e.timeoutHandle=-1,H=t.subtreeFlags,(H&8192||(H&16785408)===16785408)&&(Il={stylesheets:null,count:0,unsuspend:np},Hd(t),H=lp(),H!==null)){e.cancelPendingCommit=H($d.bind(null,e,t,r,n,a,l,f,b,x,k,1,_,z)),jn(e,r,f,!D);return}$d(e,t,r,n,a,l,f,b,x)}function Am(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var a=0;a<n.length;a++){var l=n[a],r=l.getSnapshot;l=l.value;try{if(!mt(r(),l))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function jn(e,t,n,a){t&=~Xu,t&=~ca,e.suspendedLanes|=t,e.pingedLanes&=~t,a&&(e.warmLanes|=t),a=e.expirationTimes;for(var l=t;0<l;){var r=31-bt(l),f=1<<r;a[r]=-1,l&=~f}n!==0&&ns(e,n,t)}function pr(){return(Ee&6)===0?(Vl(0),!1):!0}function Ku(){if(me!==null){if(Oe===0)var e=me.return;else e=me,an=aa=null,du(e),Ua=null,jl=0,e=me;for(;e!==null;)Td(e.alternate,e),e=e.return;me=null}}function Za(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,Hm(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),Ku(),_e=e,me=n=en(e.current,null),xe=t,Oe=0,xt=null,Mn=!1,Qa=ul(e,t),Yu=!1,Ya=Rt=Xu=ca=Rn=He=0,dt=Gl=null,Gu=!1,(t&8)!==0&&(t|=t&32);var a=e.entangledLanes;if(a!==0)for(e=e.entanglements,a&=t;0<a;){var l=31-bt(a),r=1<<l;t|=e[l],a&=~r}return dn=t,qi(),n}function Pd(e,t){de=null,R.H=ar,t===Nl||t===Pi?(t=sf(),Oe=3):t===of?(t=sf(),Oe=4):Oe=t===fd?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,xt=t,me===null&&(He=1,ur(e,Ct(t,e.current)))}function Jd(){var e=R.H;return R.H=ar,e===null?ar:e}function Kd(){var e=R.A;return R.A=xm,e}function Fu(){He=4,Mn||(xe&4194048)!==xe&&Mt.current!==null||(Qa=!0),(Rn&134217727)===0&&(ca&134217727)===0||_e===null||jn(_e,xe,Rt,!1)}function Wu(e,t,n){var a=Ee;Ee|=2;var l=Jd(),r=Kd();(_e!==e||xe!==t)&&(mr=null,Za(e,t)),t=!1;var f=He;e:do try{if(Oe!==0&&me!==null){var b=me,x=xt;switch(Oe){case 8:Ku(),f=6;break e;case 3:case 2:case 9:case 6:Mt.current===null&&(t=!0);var D=Oe;if(Oe=0,xt=null,Va(e,b,x,D),n&&Qa){f=0;break e}break;default:D=Oe,Oe=0,xt=null,Va(e,b,x,D)}}Sm(),f=He;break}catch(k){Pd(e,k)}while(!0);return t&&e.shellSuspendCounter++,an=aa=null,Ee=a,R.H=l,R.A=r,me===null&&(_e=null,xe=0,qi()),f}function Sm(){for(;me!==null;)Fd(me)}function Em(e,t){var n=Ee;Ee|=2;var a=Jd(),l=Kd();_e!==e||xe!==t?(mr=null,br=Zt()+500,Za(e,t)):Qa=ul(e,t);e:do try{if(Oe!==0&&me!==null){t=me;var r=xt;t:switch(Oe){case 1:Oe=0,xt=null,Va(e,t,r,1);break;case 2:case 9:if(uf(r)){Oe=0,xt=null,Wd(t);break}t=function(){Oe!==2&&Oe!==9||_e!==e||(Oe=7),Ft(e)},r.then(t,t);break e;case 3:Oe=7;break e;case 4:Oe=5;break e;case 7:uf(r)?(Oe=0,xt=null,Wd(t)):(Oe=0,xt=null,Va(e,t,r,7));break;case 5:var f=null;switch(me.tag){case 26:f=me.memoizedState;case 5:case 27:var b=me;if(!f||M0(f)){Oe=0,xt=null;var x=b.sibling;if(x!==null)me=x;else{var D=b.return;D!==null?(me=D,gr(D)):me=null}break t}}Oe=0,xt=null,Va(e,t,r,5);break;case 6:Oe=0,xt=null,Va(e,t,r,6);break;case 8:Ku(),He=6;break e;default:throw Error(c(462))}}Om();break}catch(k){Pd(e,k)}while(!0);return an=aa=null,R.H=a,R.A=l,Ee=n,me!==null?0:(_e=null,xe=0,qi(),He)}function Om(){for(;me!==null&&!Vh();)Fd(me)}function Fd(e){var t=Ed(e.alternate,e,dn);e.memoizedProps=e.pendingProps,t===null?gr(e):me=t}function Wd(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=gd(n,t,t.pendingProps,t.type,void 0,xe);break;case 11:t=gd(n,t,t.pendingProps,t.type.render,t.ref,xe);break;case 5:du(t);default:Td(n,t),t=me=Ws(t,dn),t=Ed(n,t,dn)}e.memoizedProps=e.pendingProps,t===null?gr(e):me=t}function Va(e,t,n,a){an=aa=null,du(t),Ua=null,jl=0;var l=t.return;try{if(hm(e,l,t,n,xe)){He=1,ur(e,Ct(n,e.current)),me=null;return}}catch(r){if(l!==null)throw me=l,r;He=1,ur(e,Ct(n,e.current)),me=null;return}t.flags&32768?(Se||a===1?e=!0:Qa||(xe&536870912)!==0?e=!1:(Mn=e=!0,(a===2||a===9||a===3||a===6)&&(a=Mt.current,a!==null&&a.tag===13&&(a.flags|=16384))),Id(t,e)):gr(t)}function gr(e){var t=e;do{if((t.flags&32768)!==0){Id(t,Mn);return}e=t.return;var n=mm(t.alternate,t,dn);if(n!==null){me=n;return}if(t=t.sibling,t!==null){me=t;return}me=t=e}while(t!==null);He===0&&(He=5)}function Id(e,t){do{var n=pm(e.alternate,e);if(n!==null){n.flags&=32767,me=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){me=e;return}me=e=n}while(e!==null);He=6,me=null}function $d(e,t,n,a,l,r,f,b,x){e.cancelPendingCommit=null;do vr();while($e!==0);if((Ee&6)!==0)throw Error(c(327));if(t!==null){if(t===e.current)throw Error(c(177));if(r=t.lanes|t.childLanes,r|=Qo,nb(e,n,r,f,b,x),e===_e&&(me=_e=null,xe=0),Xa=t,Bn=e,Ga=n,Vu=r,Pu=l,Xd=a,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Cm(Ei,function(){return l0(),null})):(e.callbackNode=null,e.callbackPriority=0),a=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||a){a=R.T,R.T=null,l=Z.p,Z.p=2,f=Ee,Ee|=4;try{gm(e,t,n)}finally{Ee=f,Z.p=l,R.T=a}}$e=1,e0(),t0(),n0()}}function e0(){if($e===1){$e=0;var e=Bn,t=Xa,n=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||n){n=R.T,R.T=null;var a=Z.p;Z.p=2;var l=Ee;Ee|=4;try{jd(t,e);var r=cc,f=Qs(e.containerInfo),b=r.focusedElem,x=r.selectionRange;if(f!==b&&b&&b.ownerDocument&&Ls(b.ownerDocument.documentElement,b)){if(x!==null&&jo(b)){var D=x.start,k=x.end;if(k===void 0&&(k=D),"selectionStart"in b)b.selectionStart=D,b.selectionEnd=Math.min(k,b.value.length);else{var H=b.ownerDocument||document,_=H&&H.defaultView||window;if(_.getSelection){var z=_.getSelection(),re=b.textContent.length,ne=Math.min(x.start,re),Ne=x.end===void 0?ne:Math.min(x.end,re);!z.extend&&ne>Ne&&(f=Ne,Ne=ne,ne=f);var T=Hs(b,ne),S=Hs(b,Ne);if(T&&S&&(z.rangeCount!==1||z.anchorNode!==T.node||z.anchorOffset!==T.offset||z.focusNode!==S.node||z.focusOffset!==S.offset)){var N=H.createRange();N.setStart(T.node,T.offset),z.removeAllRanges(),ne>Ne?(z.addRange(N),z.extend(S.node,S.offset)):(N.setEnd(S.node,S.offset),z.addRange(N))}}}}for(H=[],z=b;z=z.parentNode;)z.nodeType===1&&H.push({element:z,left:z.scrollLeft,top:z.scrollTop});for(typeof b.focus=="function"&&b.focus(),b=0;b<H.length;b++){var U=H[b];U.element.scrollLeft=U.left,U.element.scrollTop=U.top}}_r=!!uc,cc=uc=null}finally{Ee=l,Z.p=a,R.T=n}}e.current=t,$e=2}}function t0(){if($e===2){$e=0;var e=Bn,t=Xa,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=R.T,R.T=null;var a=Z.p;Z.p=2;var l=Ee;Ee|=4;try{Md(e,t.alternate,t)}finally{Ee=l,Z.p=a,R.T=n}}$e=3}}function n0(){if($e===4||$e===3){$e=0,Ph();var e=Bn,t=Xa,n=Ga,a=Xd;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?$e=5:($e=0,Xa=Bn=null,a0(e,e.pendingLanes));var l=e.pendingLanes;if(l===0&&(kn=null),mo(n),t=t.stateNode,ht&&typeof ht.onCommitFiberRoot=="function")try{ht.onCommitFiberRoot(ol,t,void 0,(t.current.flags&128)===128)}catch{}if(a!==null){t=R.T,l=Z.p,Z.p=2,R.T=null;try{for(var r=e.onRecoverableError,f=0;f<a.length;f++){var b=a[f];r(b.value,{componentStack:b.stack})}}finally{R.T=t,Z.p=l}}(Ga&3)!==0&&vr(),Ft(e),l=e.pendingLanes,(n&4194090)!==0&&(l&42)!==0?e===Ju?Zl++:(Zl=0,Ju=e):Zl=0,Vl(0)}}function a0(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Tl(t)))}function vr(e){return e0(),t0(),n0(),l0()}function l0(){if($e!==5)return!1;var e=Bn,t=Vu;Vu=0;var n=mo(Ga),a=R.T,l=Z.p;try{Z.p=32>n?32:n,R.T=null,n=Pu,Pu=null;var r=Bn,f=Ga;if($e=0,Xa=Bn=null,Ga=0,(Ee&6)!==0)throw Error(c(331));var b=Ee;if(Ee|=4,Qd(r.current),qd(r,r.current,f,n),Ee=b,Vl(0,!1),ht&&typeof ht.onPostCommitFiberRoot=="function")try{ht.onPostCommitFiberRoot(ol,r)}catch{}return!0}finally{Z.p=l,R.T=a,a0(e,t)}}function i0(e,t,n){t=Ct(n,t),t=wu(e.stateNode,t,2),e=Tn(e,t,2),e!==null&&(cl(e,2),Ft(e))}function De(e,t,n){if(e.tag===3)i0(e,e,n);else for(;t!==null;){if(t.tag===3){i0(t,e,n);break}else if(t.tag===1){var a=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(kn===null||!kn.has(a))){e=Ct(n,e),n=cd(2),a=Tn(t,n,2),a!==null&&(sd(n,a,t,e),cl(a,2),Ft(a));break}}t=t.return}}function Iu(e,t,n){var a=e.pingCache;if(a===null){a=e.pingCache=new ym;var l=new Set;a.set(t,l)}else l=a.get(t),l===void 0&&(l=new Set,a.set(t,l));l.has(n)||(Yu=!0,l.add(n),e=Tm.bind(null,e,t,n),t.then(e,e))}function Tm(e,t,n){var a=e.pingCache;a!==null&&a.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,_e===e&&(xe&n)===n&&(He===4||He===3&&(xe&62914560)===xe&&300>Zt()-Zu?(Ee&2)===0&&Za(e,0):Xu|=n,Ya===xe&&(Ya=0)),Ft(e)}function r0(e,t){t===0&&(t=ts()),e=Na(e,t),e!==null&&(cl(e,t),Ft(e))}function wm(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),r0(e,n)}function Nm(e,t){var n=0;switch(e.tag){case 13:var a=e.stateNode,l=e.memoizedState;l!==null&&(n=l.retryLane);break;case 19:a=e.stateNode;break;case 22:a=e.stateNode._retryCache;break;default:throw Error(c(314))}a!==null&&a.delete(t),r0(e,n)}function Cm(e,t){return so(e,t)}var xr=null,Pa=null,$u=!1,yr=!1,ec=!1,sa=0;function Ft(e){e!==Pa&&e.next===null&&(Pa===null?xr=Pa=e:Pa=Pa.next=e),yr=!0,$u||($u=!0,_m())}function Vl(e,t){if(!ec&&yr){ec=!0;do for(var n=!1,a=xr;a!==null;){if(e!==0){var l=a.pendingLanes;if(l===0)var r=0;else{var f=a.suspendedLanes,b=a.pingedLanes;r=(1<<31-bt(42|e)+1)-1,r&=l&~(f&~b),r=r&201326741?r&201326741|1:r?r|2:0}r!==0&&(n=!0,s0(a,r))}else r=xe,r=wi(a,a===_e?r:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),(r&3)===0||ul(a,r)||(n=!0,s0(a,r));a=a.next}while(n);ec=!1}}function Dm(){o0()}function o0(){yr=$u=!1;var e=0;sa!==0&&(qm()&&(e=sa),sa=0);for(var t=Zt(),n=null,a=xr;a!==null;){var l=a.next,r=u0(a,t);r===0?(a.next=null,n===null?xr=l:n.next=l,l===null&&(Pa=n)):(n=a,(e!==0||(r&3)!==0)&&(yr=!0)),a=l}Vl(e)}function u0(e,t){for(var n=e.suspendedLanes,a=e.pingedLanes,l=e.expirationTimes,r=e.pendingLanes&-62914561;0<r;){var f=31-bt(r),b=1<<f,x=l[f];x===-1?((b&n)===0||(b&a)!==0)&&(l[f]=tb(b,t)):x<=t&&(e.expiredLanes|=b),r&=~b}if(t=_e,n=xe,n=wi(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a=e.callbackNode,n===0||e===t&&(Oe===2||Oe===9)||e.cancelPendingCommit!==null)return a!==null&&a!==null&&fo(a),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||ul(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(a!==null&&fo(a),mo(n)){case 2:case 8:n=Ic;break;case 32:n=Ei;break;case 268435456:n=$c;break;default:n=Ei}return a=c0.bind(null,e),n=so(n,a),e.callbackPriority=t,e.callbackNode=n,t}return a!==null&&a!==null&&fo(a),e.callbackPriority=2,e.callbackNode=null,2}function c0(e,t){if($e!==0&&$e!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(vr()&&e.callbackNode!==n)return null;var a=xe;return a=wi(e,e===_e?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a===0?null:(Zd(e,a,t),u0(e,Zt()),e.callbackNode!=null&&e.callbackNode===n?c0.bind(null,e):null)}function s0(e,t){if(vr())return null;Zd(e,t,!0)}function _m(){Lm(function(){(Ee&6)!==0?so(Wc,Dm):o0()})}function tc(){return sa===0&&(sa=es()),sa}function f0(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:zi(""+e)}function d0(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function zm(e,t,n,a,l){if(t==="submit"&&n&&n.stateNode===l){var r=f0((l[ut]||null).action),f=a.submitter;f&&(t=(t=f[ut]||null)?f0(t.formAction):f.getAttribute("formAction"),t!==null&&(r=t,f=null));var b=new Bi("action","action",null,a,l);e.push({event:b,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(sa!==0){var x=f?d0(l,f):new FormData(l);Au(n,{pending:!0,data:x,method:l.method,action:r},null,x)}}else typeof r=="function"&&(b.preventDefault(),x=f?d0(l,f):new FormData(l),Au(n,{pending:!0,data:x,method:l.method,action:r},r,x))},currentTarget:l}]})}}for(var nc=0;nc<Lo.length;nc++){var ac=Lo[nc],Mm=ac.toLowerCase(),Rm=ac[0].toUpperCase()+ac.slice(1);Bt(Mm,"on"+Rm)}Bt(Gs,"onAnimationEnd"),Bt(Zs,"onAnimationIteration"),Bt(Vs,"onAnimationStart"),Bt("dblclick","onDoubleClick"),Bt("focusin","onFocus"),Bt("focusout","onBlur"),Bt(Fb,"onTransitionRun"),Bt(Wb,"onTransitionStart"),Bt(Ib,"onTransitionCancel"),Bt(Ps,"onTransitionEnd"),ga("onMouseEnter",["mouseout","mouseover"]),ga("onMouseLeave",["mouseout","mouseover"]),ga("onPointerEnter",["pointerout","pointerover"]),ga("onPointerLeave",["pointerout","pointerover"]),Jn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Jn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Jn("onBeforeInput",["compositionend","keypress","textInput","paste"]),Jn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Jn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Jn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Pl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),km=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Pl));function h0(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var a=e[n],l=a.event;a=a.listeners;e:{var r=void 0;if(t)for(var f=a.length-1;0<=f;f--){var b=a[f],x=b.instance,D=b.currentTarget;if(b=b.listener,x!==r&&l.isPropagationStopped())break e;r=b,l.currentTarget=D;try{r(l)}catch(k){or(k)}l.currentTarget=null,r=x}else for(f=0;f<a.length;f++){if(b=a[f],x=b.instance,D=b.currentTarget,b=b.listener,x!==r&&l.isPropagationStopped())break e;r=b,l.currentTarget=D;try{r(l)}catch(k){or(k)}l.currentTarget=null,r=x}}}}function pe(e,t){var n=t[po];n===void 0&&(n=t[po]=new Set);var a=e+"__bubble";n.has(a)||(b0(t,e,2,!1),n.add(a))}function lc(e,t,n){var a=0;t&&(a|=4),b0(n,e,a,t)}var Ar="_reactListening"+Math.random().toString(36).slice(2);function ic(e){if(!e[Ar]){e[Ar]=!0,rs.forEach(function(n){n!=="selectionchange"&&(km.has(n)||lc(n,!1,e),lc(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ar]||(t[Ar]=!0,lc("selectionchange",!1,t))}}function b0(e,t,n,a){switch(q0(t)){case 2:var l=op;break;case 8:l=up;break;default:l=xc}n=l.bind(null,t,n,e),l=void 0,!No||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),a?l!==void 0?e.addEventListener(t,n,{capture:!0,passive:l}):e.addEventListener(t,n,!0):l!==void 0?e.addEventListener(t,n,{passive:l}):e.addEventListener(t,n,!1)}function rc(e,t,n,a,l){var r=a;if((t&1)===0&&(t&2)===0&&a!==null)e:for(;;){if(a===null)return;var f=a.tag;if(f===3||f===4){var b=a.stateNode.containerInfo;if(b===l)break;if(f===4)for(f=a.return;f!==null;){var x=f.tag;if((x===3||x===4)&&f.stateNode.containerInfo===l)return;f=f.return}for(;b!==null;){if(f=ba(b),f===null)return;if(x=f.tag,x===5||x===6||x===26||x===27){a=r=f;continue e}b=b.parentNode}}a=a.return}ys(function(){var D=r,k=To(n),H=[];e:{var _=Js.get(e);if(_!==void 0){var z=Bi,re=e;switch(e){case"keypress":if(Ri(n)===0)break e;case"keydown":case"keyup":z=Cb;break;case"focusin":re="focus",z=zo;break;case"focusout":re="blur",z=zo;break;case"beforeblur":case"afterblur":z=zo;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":z=Es;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":z=pb;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":z=zb;break;case Gs:case Zs:case Vs:z=xb;break;case Ps:z=Rb;break;case"scroll":case"scrollend":z=bb;break;case"wheel":z=Bb;break;case"copy":case"cut":case"paste":z=Ab;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":z=Ts;break;case"toggle":case"beforetoggle":z=Ub}var ne=(t&4)!==0,Ne=!ne&&(e==="scroll"||e==="scrollend"),T=ne?_!==null?_+"Capture":null:_;ne=[];for(var S=D,N;S!==null;){var U=S;if(N=U.stateNode,U=U.tag,U!==5&&U!==26&&U!==27||N===null||T===null||(U=dl(S,T),U!=null&&ne.push(Jl(S,U,N))),Ne)break;S=S.return}0<ne.length&&(_=new z(_,re,null,n,k),H.push({event:_,listeners:ne}))}}if((t&7)===0){e:{if(_=e==="mouseover"||e==="pointerover",z=e==="mouseout"||e==="pointerout",_&&n!==Oo&&(re=n.relatedTarget||n.fromElement)&&(ba(re)||re[ha]))break e;if((z||_)&&(_=k.window===k?k:(_=k.ownerDocument)?_.defaultView||_.parentWindow:window,z?(re=n.relatedTarget||n.toElement,z=D,re=re?ba(re):null,re!==null&&(Ne=d(re),ne=re.tag,re!==Ne||ne!==5&&ne!==27&&ne!==6)&&(re=null)):(z=null,re=D),z!==re)){if(ne=Es,U="onMouseLeave",T="onMouseEnter",S="mouse",(e==="pointerout"||e==="pointerover")&&(ne=Ts,U="onPointerLeave",T="onPointerEnter",S="pointer"),Ne=z==null?_:fl(z),N=re==null?_:fl(re),_=new ne(U,S+"leave",z,n,k),_.target=Ne,_.relatedTarget=N,U=null,ba(k)===D&&(ne=new ne(T,S+"enter",re,n,k),ne.target=N,ne.relatedTarget=Ne,U=ne),Ne=U,z&&re)t:{for(ne=z,T=re,S=0,N=ne;N;N=Ja(N))S++;for(N=0,U=T;U;U=Ja(U))N++;for(;0<S-N;)ne=Ja(ne),S--;for(;0<N-S;)T=Ja(T),N--;for(;S--;){if(ne===T||T!==null&&ne===T.alternate)break t;ne=Ja(ne),T=Ja(T)}ne=null}else ne=null;z!==null&&m0(H,_,z,ne,!1),re!==null&&Ne!==null&&m0(H,Ne,re,ne,!0)}}e:{if(_=D?fl(D):window,z=_.nodeName&&_.nodeName.toLowerCase(),z==="select"||z==="input"&&_.type==="file")var K=Rs;else if(zs(_))if(ks)K=Pb;else{K=Zb;var be=Gb}else z=_.nodeName,!z||z.toLowerCase()!=="input"||_.type!=="checkbox"&&_.type!=="radio"?D&&Eo(D.elementType)&&(K=Rs):K=Vb;if(K&&(K=K(e,D))){Ms(H,K,n,k);break e}be&&be(e,_,D),e==="focusout"&&D&&_.type==="number"&&D.memoizedProps.value!=null&&So(_,"number",_.value)}switch(be=D?fl(D):window,e){case"focusin":(zs(be)||be.contentEditable==="true")&&(Oa=be,Uo=D,yl=null);break;case"focusout":yl=Uo=Oa=null;break;case"mousedown":qo=!0;break;case"contextmenu":case"mouseup":case"dragend":qo=!1,Ys(H,n,k);break;case"selectionchange":if(Kb)break;case"keydown":case"keyup":Ys(H,n,k)}var I;if(Ro)e:{switch(e){case"compositionstart":var le="onCompositionStart";break e;case"compositionend":le="onCompositionEnd";break e;case"compositionupdate":le="onCompositionUpdate";break e}le=void 0}else Ea?Ds(e,n)&&(le="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(le="onCompositionStart");le&&(ws&&n.locale!=="ko"&&(Ea||le!=="onCompositionStart"?le==="onCompositionEnd"&&Ea&&(I=As()):(An=k,Co="value"in An?An.value:An.textContent,Ea=!0)),be=Sr(D,le),0<be.length&&(le=new Os(le,e,null,n,k),H.push({event:le,listeners:be}),I?le.data=I:(I=_s(n),I!==null&&(le.data=I)))),(I=Hb?Lb(e,n):Qb(e,n))&&(le=Sr(D,"onBeforeInput"),0<le.length&&(be=new Os("onBeforeInput","beforeinput",null,n,k),H.push({event:be,listeners:le}),be.data=I)),zm(H,e,D,n,k)}h0(H,t)})}function Jl(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Sr(e,t){for(var n=t+"Capture",a=[];e!==null;){var l=e,r=l.stateNode;if(l=l.tag,l!==5&&l!==26&&l!==27||r===null||(l=dl(e,n),l!=null&&a.unshift(Jl(e,l,r)),l=dl(e,t),l!=null&&a.push(Jl(e,l,r))),e.tag===3)return a;e=e.return}return[]}function Ja(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function m0(e,t,n,a,l){for(var r=t._reactName,f=[];n!==null&&n!==a;){var b=n,x=b.alternate,D=b.stateNode;if(b=b.tag,x!==null&&x===a)break;b!==5&&b!==26&&b!==27||D===null||(x=D,l?(D=dl(n,r),D!=null&&f.unshift(Jl(n,D,x))):l||(D=dl(n,r),D!=null&&f.push(Jl(n,D,x)))),n=n.return}f.length!==0&&e.push({event:t,listeners:f})}var Bm=/\r\n?/g,jm=/\u0000|\uFFFD/g;function p0(e){return(typeof e=="string"?e:""+e).replace(Bm,`
`).replace(jm,"")}function g0(e,t){return t=p0(t),p0(e)===t}function Er(){}function we(e,t,n,a,l,r){switch(n){case"children":typeof a=="string"?t==="body"||t==="textarea"&&a===""||ya(e,a):(typeof a=="number"||typeof a=="bigint")&&t!=="body"&&ya(e,""+a);break;case"className":Ci(e,"class",a);break;case"tabIndex":Ci(e,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":Ci(e,n,a);break;case"style":vs(e,a,r);break;case"data":if(t!=="object"){Ci(e,"data",a);break}case"src":case"href":if(a===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(n);break}a=zi(""+a),e.setAttribute(n,a);break;case"action":case"formAction":if(typeof a=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof r=="function"&&(n==="formAction"?(t!=="input"&&we(e,t,"name",l.name,l,null),we(e,t,"formEncType",l.formEncType,l,null),we(e,t,"formMethod",l.formMethod,l,null),we(e,t,"formTarget",l.formTarget,l,null)):(we(e,t,"encType",l.encType,l,null),we(e,t,"method",l.method,l,null),we(e,t,"target",l.target,l,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(n);break}a=zi(""+a),e.setAttribute(n,a);break;case"onClick":a!=null&&(e.onclick=Er);break;case"onScroll":a!=null&&pe("scroll",e);break;case"onScrollEnd":a!=null&&pe("scrollend",e);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(c(61));if(n=a.__html,n!=null){if(l.children!=null)throw Error(c(60));e.innerHTML=n}}break;case"multiple":e.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":e.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){e.removeAttribute("xlink:href");break}n=zi(""+a),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,""+a):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":a===!0?e.setAttribute(n,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,a):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?e.setAttribute(n,a):e.removeAttribute(n);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?e.removeAttribute(n):e.setAttribute(n,a);break;case"popover":pe("beforetoggle",e),pe("toggle",e),Ni(e,"popover",a);break;case"xlinkActuate":It(e,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":It(e,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":It(e,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":It(e,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":It(e,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":It(e,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":It(e,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":It(e,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":It(e,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":Ni(e,"is",a);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=db.get(n)||n,Ni(e,n,a))}}function oc(e,t,n,a,l,r){switch(n){case"style":vs(e,a,r);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(c(61));if(n=a.__html,n!=null){if(l.children!=null)throw Error(c(60));e.innerHTML=n}}break;case"children":typeof a=="string"?ya(e,a):(typeof a=="number"||typeof a=="bigint")&&ya(e,""+a);break;case"onScroll":a!=null&&pe("scroll",e);break;case"onScrollEnd":a!=null&&pe("scrollend",e);break;case"onClick":a!=null&&(e.onclick=Er);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!os.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(l=n.endsWith("Capture"),t=n.slice(2,l?n.length-7:void 0),r=e[ut]||null,r=r!=null?r[n]:null,typeof r=="function"&&e.removeEventListener(t,r,l),typeof a=="function")){typeof r!="function"&&r!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,a,l);break e}n in e?e[n]=a:a===!0?e.setAttribute(n,""):Ni(e,n,a)}}}function et(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":pe("error",e),pe("load",e);var a=!1,l=!1,r;for(r in n)if(n.hasOwnProperty(r)){var f=n[r];if(f!=null)switch(r){case"src":a=!0;break;case"srcSet":l=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(c(137,t));default:we(e,t,r,f,n,null)}}l&&we(e,t,"srcSet",n.srcSet,n,null),a&&we(e,t,"src",n.src,n,null);return;case"input":pe("invalid",e);var b=r=f=l=null,x=null,D=null;for(a in n)if(n.hasOwnProperty(a)){var k=n[a];if(k!=null)switch(a){case"name":l=k;break;case"type":f=k;break;case"checked":x=k;break;case"defaultChecked":D=k;break;case"value":r=k;break;case"defaultValue":b=k;break;case"children":case"dangerouslySetInnerHTML":if(k!=null)throw Error(c(137,t));break;default:we(e,t,a,k,n,null)}}bs(e,r,b,x,D,f,l,!1),Di(e);return;case"select":pe("invalid",e),a=f=r=null;for(l in n)if(n.hasOwnProperty(l)&&(b=n[l],b!=null))switch(l){case"value":r=b;break;case"defaultValue":f=b;break;case"multiple":a=b;default:we(e,t,l,b,n,null)}t=r,n=f,e.multiple=!!a,t!=null?xa(e,!!a,t,!1):n!=null&&xa(e,!!a,n,!0);return;case"textarea":pe("invalid",e),r=l=a=null;for(f in n)if(n.hasOwnProperty(f)&&(b=n[f],b!=null))switch(f){case"value":a=b;break;case"defaultValue":l=b;break;case"children":r=b;break;case"dangerouslySetInnerHTML":if(b!=null)throw Error(c(91));break;default:we(e,t,f,b,n,null)}ps(e,a,l,r),Di(e);return;case"option":for(x in n)if(n.hasOwnProperty(x)&&(a=n[x],a!=null))switch(x){case"selected":e.selected=a&&typeof a!="function"&&typeof a!="symbol";break;default:we(e,t,x,a,n,null)}return;case"dialog":pe("beforetoggle",e),pe("toggle",e),pe("cancel",e),pe("close",e);break;case"iframe":case"object":pe("load",e);break;case"video":case"audio":for(a=0;a<Pl.length;a++)pe(Pl[a],e);break;case"image":pe("error",e),pe("load",e);break;case"details":pe("toggle",e);break;case"embed":case"source":case"link":pe("error",e),pe("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(D in n)if(n.hasOwnProperty(D)&&(a=n[D],a!=null))switch(D){case"children":case"dangerouslySetInnerHTML":throw Error(c(137,t));default:we(e,t,D,a,n,null)}return;default:if(Eo(t)){for(k in n)n.hasOwnProperty(k)&&(a=n[k],a!==void 0&&oc(e,t,k,a,n,void 0));return}}for(b in n)n.hasOwnProperty(b)&&(a=n[b],a!=null&&we(e,t,b,a,n,null))}function Um(e,t,n,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var l=null,r=null,f=null,b=null,x=null,D=null,k=null;for(z in n){var H=n[z];if(n.hasOwnProperty(z)&&H!=null)switch(z){case"checked":break;case"value":break;case"defaultValue":x=H;default:a.hasOwnProperty(z)||we(e,t,z,null,a,H)}}for(var _ in a){var z=a[_];if(H=n[_],a.hasOwnProperty(_)&&(z!=null||H!=null))switch(_){case"type":r=z;break;case"name":l=z;break;case"checked":D=z;break;case"defaultChecked":k=z;break;case"value":f=z;break;case"defaultValue":b=z;break;case"children":case"dangerouslySetInnerHTML":if(z!=null)throw Error(c(137,t));break;default:z!==H&&we(e,t,_,z,a,H)}}Ao(e,f,b,x,D,k,r,l);return;case"select":z=f=b=_=null;for(r in n)if(x=n[r],n.hasOwnProperty(r)&&x!=null)switch(r){case"value":break;case"multiple":z=x;default:a.hasOwnProperty(r)||we(e,t,r,null,a,x)}for(l in a)if(r=a[l],x=n[l],a.hasOwnProperty(l)&&(r!=null||x!=null))switch(l){case"value":_=r;break;case"defaultValue":b=r;break;case"multiple":f=r;default:r!==x&&we(e,t,l,r,a,x)}t=b,n=f,a=z,_!=null?xa(e,!!n,_,!1):!!a!=!!n&&(t!=null?xa(e,!!n,t,!0):xa(e,!!n,n?[]:"",!1));return;case"textarea":z=_=null;for(b in n)if(l=n[b],n.hasOwnProperty(b)&&l!=null&&!a.hasOwnProperty(b))switch(b){case"value":break;case"children":break;default:we(e,t,b,null,a,l)}for(f in a)if(l=a[f],r=n[f],a.hasOwnProperty(f)&&(l!=null||r!=null))switch(f){case"value":_=l;break;case"defaultValue":z=l;break;case"children":break;case"dangerouslySetInnerHTML":if(l!=null)throw Error(c(91));break;default:l!==r&&we(e,t,f,l,a,r)}ms(e,_,z);return;case"option":for(var re in n)if(_=n[re],n.hasOwnProperty(re)&&_!=null&&!a.hasOwnProperty(re))switch(re){case"selected":e.selected=!1;break;default:we(e,t,re,null,a,_)}for(x in a)if(_=a[x],z=n[x],a.hasOwnProperty(x)&&_!==z&&(_!=null||z!=null))switch(x){case"selected":e.selected=_&&typeof _!="function"&&typeof _!="symbol";break;default:we(e,t,x,_,a,z)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ne in n)_=n[ne],n.hasOwnProperty(ne)&&_!=null&&!a.hasOwnProperty(ne)&&we(e,t,ne,null,a,_);for(D in a)if(_=a[D],z=n[D],a.hasOwnProperty(D)&&_!==z&&(_!=null||z!=null))switch(D){case"children":case"dangerouslySetInnerHTML":if(_!=null)throw Error(c(137,t));break;default:we(e,t,D,_,a,z)}return;default:if(Eo(t)){for(var Ne in n)_=n[Ne],n.hasOwnProperty(Ne)&&_!==void 0&&!a.hasOwnProperty(Ne)&&oc(e,t,Ne,void 0,a,_);for(k in a)_=a[k],z=n[k],!a.hasOwnProperty(k)||_===z||_===void 0&&z===void 0||oc(e,t,k,_,a,z);return}}for(var T in n)_=n[T],n.hasOwnProperty(T)&&_!=null&&!a.hasOwnProperty(T)&&we(e,t,T,null,a,_);for(H in a)_=a[H],z=n[H],!a.hasOwnProperty(H)||_===z||_==null&&z==null||we(e,t,H,_,a,z)}var uc=null,cc=null;function Or(e){return e.nodeType===9?e:e.ownerDocument}function v0(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function x0(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function sc(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var fc=null;function qm(){var e=window.event;return e&&e.type==="popstate"?e===fc?!1:(fc=e,!0):(fc=null,!1)}var y0=typeof setTimeout=="function"?setTimeout:void 0,Hm=typeof clearTimeout=="function"?clearTimeout:void 0,A0=typeof Promise=="function"?Promise:void 0,Lm=typeof queueMicrotask=="function"?queueMicrotask:typeof A0<"u"?function(e){return A0.resolve(null).then(e).catch(Qm)}:y0;function Qm(e){setTimeout(function(){throw e})}function Un(e){return e==="head"}function S0(e,t){var n=t,a=0,l=0;do{var r=n.nextSibling;if(e.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(0<a&&8>a){n=a;var f=e.ownerDocument;if(n&1&&Kl(f.documentElement),n&2&&Kl(f.body),n&4)for(n=f.head,Kl(n),f=n.firstChild;f;){var b=f.nextSibling,x=f.nodeName;f[sl]||x==="SCRIPT"||x==="STYLE"||x==="LINK"&&f.rel.toLowerCase()==="stylesheet"||n.removeChild(f),f=b}}if(l===0){e.removeChild(r),ai(t);return}l--}else n==="$"||n==="$?"||n==="$!"?l++:a=n.charCodeAt(0)-48;else a=0;n=r}while(n);ai(t)}function dc(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":dc(n),go(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function Ym(e,t,n,a){for(;e.nodeType===1;){var l=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!a&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(a){if(!e[sl])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(r=e.getAttribute("rel"),r==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(r!==l.rel||e.getAttribute("href")!==(l.href==null||l.href===""?null:l.href)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin)||e.getAttribute("title")!==(l.title==null?null:l.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(r=e.getAttribute("src"),(r!==(l.src==null?null:l.src)||e.getAttribute("type")!==(l.type==null?null:l.type)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin))&&r&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var r=l.name==null?null:""+l.name;if(l.type==="hidden"&&e.getAttribute("name")===r)return e}else return e;if(e=Ut(e.nextSibling),e===null)break}return null}function Xm(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=Ut(e.nextSibling),e===null))return null;return e}function hc(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function Gm(e,t){var n=e.ownerDocument;if(e.data!=="$?"||n.readyState==="complete")t();else{var a=function(){t(),n.removeEventListener("DOMContentLoaded",a)};n.addEventListener("DOMContentLoaded",a),e._reactRetry=a}}function Ut(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="F!"||t==="F")break;if(t==="/$")return null}}return e}var bc=null;function E0(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}function O0(e,t,n){switch(t=Or(n),e){case"html":if(e=t.documentElement,!e)throw Error(c(452));return e;case"head":if(e=t.head,!e)throw Error(c(453));return e;case"body":if(e=t.body,!e)throw Error(c(454));return e;default:throw Error(c(451))}}function Kl(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);go(e)}var kt=new Map,T0=new Set;function Tr(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var hn=Z.d;Z.d={f:Zm,r:Vm,D:Pm,C:Jm,L:Km,m:Fm,X:Im,S:Wm,M:$m};function Zm(){var e=hn.f(),t=pr();return e||t}function Vm(e){var t=ma(e);t!==null&&t.tag===5&&t.type==="form"?Zf(t):hn.r(e)}var Ka=typeof document>"u"?null:document;function w0(e,t,n){var a=Ka;if(a&&typeof t=="string"&&t){var l=Nt(t);l='link[rel="'+e+'"][href="'+l+'"]',typeof n=="string"&&(l+='[crossorigin="'+n+'"]'),T0.has(l)||(T0.add(l),e={rel:e,crossOrigin:n,href:t},a.querySelector(l)===null&&(t=a.createElement("link"),et(t,"link",e),Je(t),a.head.appendChild(t)))}}function Pm(e){hn.D(e),w0("dns-prefetch",e,null)}function Jm(e,t){hn.C(e,t),w0("preconnect",e,t)}function Km(e,t,n){hn.L(e,t,n);var a=Ka;if(a&&e&&t){var l='link[rel="preload"][as="'+Nt(t)+'"]';t==="image"&&n&&n.imageSrcSet?(l+='[imagesrcset="'+Nt(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(l+='[imagesizes="'+Nt(n.imageSizes)+'"]')):l+='[href="'+Nt(e)+'"]';var r=l;switch(t){case"style":r=Fa(e);break;case"script":r=Wa(e)}kt.has(r)||(e=v({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),kt.set(r,e),a.querySelector(l)!==null||t==="style"&&a.querySelector(Fl(r))||t==="script"&&a.querySelector(Wl(r))||(t=a.createElement("link"),et(t,"link",e),Je(t),a.head.appendChild(t)))}}function Fm(e,t){hn.m(e,t);var n=Ka;if(n&&e){var a=t&&typeof t.as=="string"?t.as:"script",l='link[rel="modulepreload"][as="'+Nt(a)+'"][href="'+Nt(e)+'"]',r=l;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":r=Wa(e)}if(!kt.has(r)&&(e=v({rel:"modulepreload",href:e},t),kt.set(r,e),n.querySelector(l)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(Wl(r)))return}a=n.createElement("link"),et(a,"link",e),Je(a),n.head.appendChild(a)}}}function Wm(e,t,n){hn.S(e,t,n);var a=Ka;if(a&&e){var l=pa(a).hoistableStyles,r=Fa(e);t=t||"default";var f=l.get(r);if(!f){var b={loading:0,preload:null};if(f=a.querySelector(Fl(r)))b.loading=5;else{e=v({rel:"stylesheet",href:e,"data-precedence":t},n),(n=kt.get(r))&&mc(e,n);var x=f=a.createElement("link");Je(x),et(x,"link",e),x._p=new Promise(function(D,k){x.onload=D,x.onerror=k}),x.addEventListener("load",function(){b.loading|=1}),x.addEventListener("error",function(){b.loading|=2}),b.loading|=4,wr(f,t,a)}f={type:"stylesheet",instance:f,count:1,state:b},l.set(r,f)}}}function Im(e,t){hn.X(e,t);var n=Ka;if(n&&e){var a=pa(n).hoistableScripts,l=Wa(e),r=a.get(l);r||(r=n.querySelector(Wl(l)),r||(e=v({src:e,async:!0},t),(t=kt.get(l))&&pc(e,t),r=n.createElement("script"),Je(r),et(r,"link",e),n.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},a.set(l,r))}}function $m(e,t){hn.M(e,t);var n=Ka;if(n&&e){var a=pa(n).hoistableScripts,l=Wa(e),r=a.get(l);r||(r=n.querySelector(Wl(l)),r||(e=v({src:e,async:!0,type:"module"},t),(t=kt.get(l))&&pc(e,t),r=n.createElement("script"),Je(r),et(r,"link",e),n.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},a.set(l,r))}}function N0(e,t,n,a){var l=(l=ie.current)?Tr(l):null;if(!l)throw Error(c(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=Fa(n.href),n=pa(l).hoistableStyles,a=n.get(t),a||(a={type:"style",instance:null,count:0,state:null},n.set(t,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=Fa(n.href);var r=pa(l).hoistableStyles,f=r.get(e);if(f||(l=l.ownerDocument||l,f={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},r.set(e,f),(r=l.querySelector(Fl(e)))&&!r._p&&(f.instance=r,f.state.loading=5),kt.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},kt.set(e,n),r||ep(l,e,n,f.state))),t&&a===null)throw Error(c(528,""));return f}if(t&&a!==null)throw Error(c(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Wa(n),n=pa(l).hoistableScripts,a=n.get(t),a||(a={type:"script",instance:null,count:0,state:null},n.set(t,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(c(444,e))}}function Fa(e){return'href="'+Nt(e)+'"'}function Fl(e){return'link[rel="stylesheet"]['+e+"]"}function C0(e){return v({},e,{"data-precedence":e.precedence,precedence:null})}function ep(e,t,n,a){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?a.loading=1:(t=e.createElement("link"),a.preload=t,t.addEventListener("load",function(){return a.loading|=1}),t.addEventListener("error",function(){return a.loading|=2}),et(t,"link",n),Je(t),e.head.appendChild(t))}function Wa(e){return'[src="'+Nt(e)+'"]'}function Wl(e){return"script[async]"+e}function D0(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var a=e.querySelector('style[data-href~="'+Nt(n.href)+'"]');if(a)return t.instance=a,Je(a),a;var l=v({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return a=(e.ownerDocument||e).createElement("style"),Je(a),et(a,"style",l),wr(a,n.precedence,e),t.instance=a;case"stylesheet":l=Fa(n.href);var r=e.querySelector(Fl(l));if(r)return t.state.loading|=4,t.instance=r,Je(r),r;a=C0(n),(l=kt.get(l))&&mc(a,l),r=(e.ownerDocument||e).createElement("link"),Je(r);var f=r;return f._p=new Promise(function(b,x){f.onload=b,f.onerror=x}),et(r,"link",a),t.state.loading|=4,wr(r,n.precedence,e),t.instance=r;case"script":return r=Wa(n.src),(l=e.querySelector(Wl(r)))?(t.instance=l,Je(l),l):(a=n,(l=kt.get(r))&&(a=v({},n),pc(a,l)),e=e.ownerDocument||e,l=e.createElement("script"),Je(l),et(l,"link",a),e.head.appendChild(l),t.instance=l);case"void":return null;default:throw Error(c(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(a=t.instance,t.state.loading|=4,wr(a,n.precedence,e));return t.instance}function wr(e,t,n){for(var a=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),l=a.length?a[a.length-1]:null,r=l,f=0;f<a.length;f++){var b=a[f];if(b.dataset.precedence===t)r=b;else if(r!==l)break}r?r.parentNode.insertBefore(e,r.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function mc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function pc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Nr=null;function _0(e,t,n){if(Nr===null){var a=new Map,l=Nr=new Map;l.set(n,a)}else l=Nr,a=l.get(n),a||(a=new Map,l.set(n,a));if(a.has(e))return a;for(a.set(e,null),n=n.getElementsByTagName(e),l=0;l<n.length;l++){var r=n[l];if(!(r[sl]||r[nt]||e==="link"&&r.getAttribute("rel")==="stylesheet")&&r.namespaceURI!=="http://www.w3.org/2000/svg"){var f=r.getAttribute(t)||"";f=e+f;var b=a.get(f);b?b.push(r):a.set(f,[r])}}return a}function z0(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function tp(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function M0(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var Il=null;function np(){}function ap(e,t,n){if(Il===null)throw Error(c(475));var a=Il;if(t.type==="stylesheet"&&(typeof n.media!="string"||matchMedia(n.media).matches!==!1)&&(t.state.loading&4)===0){if(t.instance===null){var l=Fa(n.href),r=e.querySelector(Fl(l));if(r){e=r._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(a.count++,a=Cr.bind(a),e.then(a,a)),t.state.loading|=4,t.instance=r,Je(r);return}r=e.ownerDocument||e,n=C0(n),(l=kt.get(l))&&mc(n,l),r=r.createElement("link"),Je(r);var f=r;f._p=new Promise(function(b,x){f.onload=b,f.onerror=x}),et(r,"link",n),t.instance=r}a.stylesheets===null&&(a.stylesheets=new Map),a.stylesheets.set(t,e),(e=t.state.preload)&&(t.state.loading&3)===0&&(a.count++,t=Cr.bind(a),e.addEventListener("load",t),e.addEventListener("error",t))}}function lp(){if(Il===null)throw Error(c(475));var e=Il;return e.stylesheets&&e.count===0&&gc(e,e.stylesheets),0<e.count?function(t){var n=setTimeout(function(){if(e.stylesheets&&gc(e,e.stylesheets),e.unsuspend){var a=e.unsuspend;e.unsuspend=null,a()}},6e4);return e.unsuspend=t,function(){e.unsuspend=null,clearTimeout(n)}}:null}function Cr(){if(this.count--,this.count===0){if(this.stylesheets)gc(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Dr=null;function gc(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Dr=new Map,t.forEach(ip,e),Dr=null,Cr.call(e))}function ip(e,t){if(!(t.state.loading&4)){var n=Dr.get(e);if(n)var a=n.get(null);else{n=new Map,Dr.set(e,n);for(var l=e.querySelectorAll("link[data-precedence],style[data-precedence]"),r=0;r<l.length;r++){var f=l[r];(f.nodeName==="LINK"||f.getAttribute("media")!=="not all")&&(n.set(f.dataset.precedence,f),a=f)}a&&n.set(null,a)}l=t.instance,f=l.getAttribute("data-precedence"),r=n.get(f)||a,r===a&&n.set(null,l),n.set(f,l),this.count++,a=Cr.bind(this),l.addEventListener("load",a),l.addEventListener("error",a),r?r.parentNode.insertBefore(l,r.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(l,e.firstChild)),t.state.loading|=4}}var $l={$$typeof:G,Provider:null,Consumer:null,_currentValue:te,_currentValue2:te,_threadCount:0};function rp(e,t,n,a,l,r,f,b){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=ho(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ho(0),this.hiddenUpdates=ho(null),this.identifierPrefix=a,this.onUncaughtError=l,this.onCaughtError=r,this.onRecoverableError=f,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=b,this.incompleteTransitions=new Map}function R0(e,t,n,a,l,r,f,b,x,D,k,H){return e=new rp(e,t,n,f,b,x,D,H),t=1,r===!0&&(t|=24),r=pt(3,null,null,t),e.current=r,r.stateNode=e,t=Io(),t.refCount++,e.pooledCache=t,t.refCount++,r.memoizedState={element:a,isDehydrated:n,cache:t},nu(r),e}function k0(e){return e?(e=Ca,e):Ca}function B0(e,t,n,a,l,r){l=k0(l),a.context===null?a.context=l:a.pendingContext=l,a=On(t),a.payload={element:n},r=r===void 0?null:r,r!==null&&(a.callback=r),n=Tn(e,a,t),n!==null&&(At(n,e,t),Dl(n,e,t))}function j0(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function vc(e,t){j0(e,t),(e=e.alternate)&&j0(e,t)}function U0(e){if(e.tag===13){var t=Na(e,67108864);t!==null&&At(t,e,67108864),vc(e,67108864)}}var _r=!0;function op(e,t,n,a){var l=R.T;R.T=null;var r=Z.p;try{Z.p=2,xc(e,t,n,a)}finally{Z.p=r,R.T=l}}function up(e,t,n,a){var l=R.T;R.T=null;var r=Z.p;try{Z.p=8,xc(e,t,n,a)}finally{Z.p=r,R.T=l}}function xc(e,t,n,a){if(_r){var l=yc(a);if(l===null)rc(e,t,a,zr,n),H0(e,a);else if(sp(l,e,t,n,a))a.stopPropagation();else if(H0(e,a),t&4&&-1<cp.indexOf(e)){for(;l!==null;){var r=ma(l);if(r!==null)switch(r.tag){case 3:if(r=r.stateNode,r.current.memoizedState.isDehydrated){var f=Pn(r.pendingLanes);if(f!==0){var b=r;for(b.pendingLanes|=2,b.entangledLanes|=2;f;){var x=1<<31-bt(f);b.entanglements[1]|=x,f&=~x}Ft(r),(Ee&6)===0&&(br=Zt()+500,Vl(0))}}break;case 13:b=Na(r,2),b!==null&&At(b,r,2),pr(),vc(r,2)}if(r=yc(a),r===null&&rc(e,t,a,zr,n),r===l)break;l=r}l!==null&&a.stopPropagation()}else rc(e,t,a,null,n)}}function yc(e){return e=To(e),Ac(e)}var zr=null;function Ac(e){if(zr=null,e=ba(e),e!==null){var t=d(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=m(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return zr=e,null}function q0(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Jh()){case Wc:return 2;case Ic:return 8;case Ei:case Kh:return 32;case $c:return 268435456;default:return 32}default:return 32}}var Sc=!1,qn=null,Hn=null,Ln=null,ei=new Map,ti=new Map,Qn=[],cp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function H0(e,t){switch(e){case"focusin":case"focusout":qn=null;break;case"dragenter":case"dragleave":Hn=null;break;case"mouseover":case"mouseout":Ln=null;break;case"pointerover":case"pointerout":ei.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":ti.delete(t.pointerId)}}function ni(e,t,n,a,l,r){return e===null||e.nativeEvent!==r?(e={blockedOn:t,domEventName:n,eventSystemFlags:a,nativeEvent:r,targetContainers:[l]},t!==null&&(t=ma(t),t!==null&&U0(t)),e):(e.eventSystemFlags|=a,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function sp(e,t,n,a,l){switch(t){case"focusin":return qn=ni(qn,e,t,n,a,l),!0;case"dragenter":return Hn=ni(Hn,e,t,n,a,l),!0;case"mouseover":return Ln=ni(Ln,e,t,n,a,l),!0;case"pointerover":var r=l.pointerId;return ei.set(r,ni(ei.get(r)||null,e,t,n,a,l)),!0;case"gotpointercapture":return r=l.pointerId,ti.set(r,ni(ti.get(r)||null,e,t,n,a,l)),!0}return!1}function L0(e){var t=ba(e.target);if(t!==null){var n=d(t);if(n!==null){if(t=n.tag,t===13){if(t=m(n),t!==null){e.blockedOn=t,ab(e.priority,function(){if(n.tag===13){var a=yt();a=bo(a);var l=Na(n,a);l!==null&&At(l,n,a),vc(n,a)}});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Mr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=yc(e.nativeEvent);if(n===null){n=e.nativeEvent;var a=new n.constructor(n.type,n);Oo=a,n.target.dispatchEvent(a),Oo=null}else return t=ma(n),t!==null&&U0(t),e.blockedOn=n,!1;t.shift()}return!0}function Q0(e,t,n){Mr(e)&&n.delete(t)}function fp(){Sc=!1,qn!==null&&Mr(qn)&&(qn=null),Hn!==null&&Mr(Hn)&&(Hn=null),Ln!==null&&Mr(Ln)&&(Ln=null),ei.forEach(Q0),ti.forEach(Q0)}function Rr(e,t){e.blockedOn===t&&(e.blockedOn=null,Sc||(Sc=!0,i.unstable_scheduleCallback(i.unstable_NormalPriority,fp)))}var kr=null;function Y0(e){kr!==e&&(kr=e,i.unstable_scheduleCallback(i.unstable_NormalPriority,function(){kr===e&&(kr=null);for(var t=0;t<e.length;t+=3){var n=e[t],a=e[t+1],l=e[t+2];if(typeof a!="function"){if(Ac(a||n)===null)continue;break}var r=ma(n);r!==null&&(e.splice(t,3),t-=3,Au(r,{pending:!0,data:l,method:n.method,action:a},a,l))}}))}function ai(e){function t(x){return Rr(x,e)}qn!==null&&Rr(qn,e),Hn!==null&&Rr(Hn,e),Ln!==null&&Rr(Ln,e),ei.forEach(t),ti.forEach(t);for(var n=0;n<Qn.length;n++){var a=Qn[n];a.blockedOn===e&&(a.blockedOn=null)}for(;0<Qn.length&&(n=Qn[0],n.blockedOn===null);)L0(n),n.blockedOn===null&&Qn.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(a=0;a<n.length;a+=3){var l=n[a],r=n[a+1],f=l[ut]||null;if(typeof r=="function")f||Y0(n);else if(f){var b=null;if(r&&r.hasAttribute("formAction")){if(l=r,f=r[ut]||null)b=f.formAction;else if(Ac(l)!==null)continue}else b=f.action;typeof b=="function"?n[a+1]=b:(n.splice(a,3),a-=3),Y0(n)}}}function Ec(e){this._internalRoot=e}Br.prototype.render=Ec.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(c(409));var n=t.current,a=yt();B0(n,a,e,t,null,null)},Br.prototype.unmount=Ec.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;B0(e.current,2,null,e,null,null),pr(),t[ha]=null}};function Br(e){this._internalRoot=e}Br.prototype.unstable_scheduleHydration=function(e){if(e){var t=ls();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Qn.length&&t!==0&&t<Qn[n].priority;n++);Qn.splice(n,0,e),n===0&&L0(e)}};var X0=o.version;if(X0!=="19.1.1")throw Error(c(527,X0,"19.1.1"));Z.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(c(188)):(e=Object.keys(e).join(","),Error(c(268,e)));return e=p(t),e=e!==null?h(e):null,e=e===null?null:e.stateNode,e};var dp={bundleType:0,version:"19.1.1",rendererPackageName:"react-dom",currentDispatcherRef:R,reconcilerVersion:"19.1.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var jr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!jr.isDisabled&&jr.supportsFiber)try{ol=jr.inject(dp),ht=jr}catch{}}return ii.createRoot=function(e,t){if(!s(e))throw Error(c(299));var n=!1,a="",l=id,r=rd,f=od,b=null;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(a=t.identifierPrefix),t.onUncaughtError!==void 0&&(l=t.onUncaughtError),t.onCaughtError!==void 0&&(r=t.onCaughtError),t.onRecoverableError!==void 0&&(f=t.onRecoverableError),t.unstable_transitionCallbacks!==void 0&&(b=t.unstable_transitionCallbacks)),t=R0(e,1,!1,null,null,n,a,l,r,f,b,null),e[ha]=t.current,ic(e),new Ec(t)},ii.hydrateRoot=function(e,t,n){if(!s(e))throw Error(c(299));var a=!1,l="",r=id,f=rd,b=od,x=null,D=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onUncaughtError!==void 0&&(r=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(b=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(x=n.unstable_transitionCallbacks),n.formState!==void 0&&(D=n.formState)),t=R0(e,1,!0,t,n??null,a,l,r,f,b,x,D),t.context=k0(null),n=t.current,a=yt(),a=bo(a),l=On(a),l.callback=null,Tn(n,l,a),n=a,t.current.lanes=n,cl(t,n),Ft(t),e[ha]=t.current,ic(e),new Br(t)},ii.version="19.1.1",ii}var $0;function Ep(){if($0)return wc.exports;$0=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(o){console.error(o)}}return i(),wc.exports=Sp(),wc.exports}var Op=Ep();/**
 * react-router v7.8.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var eh="popstate";function Tp(i={}){function o(c,s){let{pathname:d,search:m,hash:y}=c.location;return kc("",{pathname:d,search:m,hash:y},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function u(c,s){return typeof s=="string"?s:di(s)}return Np(o,u,null,i)}function Be(i,o){if(i===!1||i===null||typeof i>"u")throw new Error(o)}function Yt(i,o){if(!i){typeof console<"u"&&console.warn(o);try{throw new Error(o)}catch{}}}function wp(){return Math.random().toString(36).substring(2,10)}function th(i,o){return{usr:i.state,key:i.key,idx:o}}function kc(i,o,u=null,c){return{pathname:typeof i=="string"?i:i.pathname,search:"",hash:"",...typeof o=="string"?ll(o):o,state:u,key:o&&o.key||c||wp()}}function di({pathname:i="/",search:o="",hash:u=""}){return o&&o!=="?"&&(i+=o.charAt(0)==="?"?o:"?"+o),u&&u!=="#"&&(i+=u.charAt(0)==="#"?u:"#"+u),i}function ll(i){let o={};if(i){let u=i.indexOf("#");u>=0&&(o.hash=i.substring(u),i=i.substring(0,u));let c=i.indexOf("?");c>=0&&(o.search=i.substring(c),i=i.substring(0,c)),i&&(o.pathname=i)}return o}function Np(i,o,u,c={}){let{window:s=document.defaultView,v5Compat:d=!1}=c,m=s.history,y="POP",p=null,h=v();h==null&&(h=0,m.replaceState({...m.state,idx:h},""));function v(){return(m.state||{idx:null}).idx}function C(){y="POP";let L=v(),q=L==null?null:L-h;h=L,p&&p({action:y,location:E.location,delta:q})}function M(L,q){y="PUSH";let X=kc(E.location,L,q);h=v()+1;let G=th(X,h),ce=E.createHref(X);try{m.pushState(G,"",ce)}catch(J){if(J instanceof DOMException&&J.name==="DataCloneError")throw J;s.location.assign(ce)}d&&p&&p({action:y,location:E.location,delta:1})}function B(L,q){y="REPLACE";let X=kc(E.location,L,q);h=v();let G=th(X,h),ce=E.createHref(X);m.replaceState(G,"",ce),d&&p&&p({action:y,location:E.location,delta:0})}function w(L){return Cp(L)}let E={get action(){return y},get location(){return i(s,m)},listen(L){if(p)throw new Error("A history only accepts one active listener");return s.addEventListener(eh,C),p=L,()=>{s.removeEventListener(eh,C),p=null}},createHref(L){return o(s,L)},createURL:w,encodeLocation(L){let q=w(L);return{pathname:q.pathname,search:q.search,hash:q.hash}},push:M,replace:B,go(L){return m.go(L)}};return E}function Cp(i,o=!1){let u="http://localhost";typeof window<"u"&&(u=window.location.origin!=="null"?window.location.origin:window.location.href),Be(u,"No window.location.(origin|href) available to create URL");let c=typeof i=="string"?i:di(i);return c=c.replace(/ $/,"%20"),!o&&c.startsWith("//")&&(c=u+c),new URL(c,u)}function gh(i,o,u="/"){return Dp(i,o,u,!1)}function Dp(i,o,u,c){let s=typeof o=="string"?ll(o):o,d=gn(s.pathname||"/",u);if(d==null)return null;let m=vh(i);_p(m);let y=null;for(let p=0;y==null&&p<m.length;++p){let h=Qp(d);y=Hp(m[p],h,c)}return y}function vh(i,o=[],u=[],c=""){let s=(d,m,y)=>{let p={relativePath:y===void 0?d.path||"":y,caseSensitive:d.caseSensitive===!0,childrenIndex:m,route:d};p.relativePath.startsWith("/")&&(Be(p.relativePath.startsWith(c),`Absolute route path "${p.relativePath}" nested under path "${c}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),p.relativePath=p.relativePath.slice(c.length));let h=pn([c,p.relativePath]),v=u.concat(p);d.children&&d.children.length>0&&(Be(d.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${h}".`),vh(d.children,o,v,h)),!(d.path==null&&!d.index)&&o.push({path:h,score:Up(h,d.index),routesMeta:v})};return i.forEach((d,m)=>{if(d.path===""||!d.path?.includes("?"))s(d,m);else for(let y of xh(d.path))s(d,m,y)}),o}function xh(i){let o=i.split("/");if(o.length===0)return[];let[u,...c]=o,s=u.endsWith("?"),d=u.replace(/\?$/,"");if(c.length===0)return s?[d,""]:[d];let m=xh(c.join("/")),y=[];return y.push(...m.map(p=>p===""?d:[d,p].join("/"))),s&&y.push(...m),y.map(p=>i.startsWith("/")&&p===""?"/":p)}function _p(i){i.sort((o,u)=>o.score!==u.score?u.score-o.score:qp(o.routesMeta.map(c=>c.childrenIndex),u.routesMeta.map(c=>c.childrenIndex)))}var zp=/^:[\w-]+$/,Mp=3,Rp=2,kp=1,Bp=10,jp=-2,nh=i=>i==="*";function Up(i,o){let u=i.split("/"),c=u.length;return u.some(nh)&&(c+=jp),o&&(c+=Rp),u.filter(s=>!nh(s)).reduce((s,d)=>s+(zp.test(d)?Mp:d===""?kp:Bp),c)}function qp(i,o){return i.length===o.length&&i.slice(0,-1).every((c,s)=>c===o[s])?i[i.length-1]-o[o.length-1]:0}function Hp(i,o,u=!1){let{routesMeta:c}=i,s={},d="/",m=[];for(let y=0;y<c.length;++y){let p=c[y],h=y===c.length-1,v=d==="/"?o:o.slice(d.length)||"/",C=Pr({path:p.relativePath,caseSensitive:p.caseSensitive,end:h},v),M=p.route;if(!C&&h&&u&&!c[c.length-1].route.index&&(C=Pr({path:p.relativePath,caseSensitive:p.caseSensitive,end:!1},v)),!C)return null;Object.assign(s,C.params),m.push({params:s,pathname:pn([d,C.pathname]),pathnameBase:Zp(pn([d,C.pathnameBase])),route:M}),C.pathnameBase!=="/"&&(d=pn([d,C.pathnameBase]))}return m}function Pr(i,o){typeof i=="string"&&(i={path:i,caseSensitive:!1,end:!0});let[u,c]=Lp(i.path,i.caseSensitive,i.end),s=o.match(u);if(!s)return null;let d=s[0],m=d.replace(/(.)\/+$/,"$1"),y=s.slice(1);return{params:c.reduce((h,{paramName:v,isOptional:C},M)=>{if(v==="*"){let w=y[M]||"";m=d.slice(0,d.length-w.length).replace(/(.)\/+$/,"$1")}const B=y[M];return C&&!B?h[v]=void 0:h[v]=(B||"").replace(/%2F/g,"/"),h},{}),pathname:d,pathnameBase:m,pattern:i}}function Lp(i,o=!1,u=!0){Yt(i==="*"||!i.endsWith("*")||i.endsWith("/*"),`Route path "${i}" will be treated as if it were "${i.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${i.replace(/\*$/,"/*")}".`);let c=[],s="^"+i.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(m,y,p)=>(c.push({paramName:y,isOptional:p!=null}),p?"/?([^\\/]+)?":"/([^\\/]+)"));return i.endsWith("*")?(c.push({paramName:"*"}),s+=i==="*"||i==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):u?s+="\\/*$":i!==""&&i!=="/"&&(s+="(?:(?=\\/|$))"),[new RegExp(s,o?void 0:"i"),c]}function Qp(i){try{return i.split("/").map(o=>decodeURIComponent(o).replace(/\//g,"%2F")).join("/")}catch(o){return Yt(!1,`The URL path "${i}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${o}).`),i}}function gn(i,o){if(o==="/")return i;if(!i.toLowerCase().startsWith(o.toLowerCase()))return null;let u=o.endsWith("/")?o.length-1:o.length,c=i.charAt(u);return c&&c!=="/"?null:i.slice(u)||"/"}function Yp(i,o="/"){let{pathname:u,search:c="",hash:s=""}=typeof i=="string"?ll(i):i;return{pathname:u?u.startsWith("/")?u:Xp(u,o):o,search:Vp(c),hash:Pp(s)}}function Xp(i,o){let u=o.replace(/\/+$/,"").split("/");return i.split("/").forEach(s=>{s===".."?u.length>1&&u.pop():s!=="."&&u.push(s)}),u.length>1?u.join("/"):"/"}function _c(i,o,u,c){return`Cannot include a '${i}' character in a manually specified \`to.${o}\` field [${JSON.stringify(c)}].  Please separate it out to the \`to.${u}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Gp(i){return i.filter((o,u)=>u===0||o.route.path&&o.route.path.length>0)}function Yc(i){let o=Gp(i);return o.map((u,c)=>c===o.length-1?u.pathname:u.pathnameBase)}function Xc(i,o,u,c=!1){let s;typeof i=="string"?s=ll(i):(s={...i},Be(!s.pathname||!s.pathname.includes("?"),_c("?","pathname","search",s)),Be(!s.pathname||!s.pathname.includes("#"),_c("#","pathname","hash",s)),Be(!s.search||!s.search.includes("#"),_c("#","search","hash",s)));let d=i===""||s.pathname==="",m=d?"/":s.pathname,y;if(m==null)y=u;else{let C=o.length-1;if(!c&&m.startsWith("..")){let M=m.split("/");for(;M[0]==="..";)M.shift(),C-=1;s.pathname=M.join("/")}y=C>=0?o[C]:"/"}let p=Yp(s,y),h=m&&m!=="/"&&m.endsWith("/"),v=(d||m===".")&&u.endsWith("/");return!p.pathname.endsWith("/")&&(h||v)&&(p.pathname+="/"),p}var pn=i=>i.join("/").replace(/\/\/+/g,"/"),Zp=i=>i.replace(/\/+$/,"").replace(/^\/*/,"/"),Vp=i=>!i||i==="?"?"":i.startsWith("?")?i:"?"+i,Pp=i=>!i||i==="#"?"":i.startsWith("#")?i:"#"+i;function Jp(i){return i!=null&&typeof i.status=="number"&&typeof i.statusText=="string"&&typeof i.internal=="boolean"&&"data"in i}var yh=["POST","PUT","PATCH","DELETE"];new Set(yh);var Kp=["GET",...yh];new Set(Kp);var il=O.createContext(null);il.displayName="DataRouter";var to=O.createContext(null);to.displayName="DataRouterState";O.createContext(!1);var Ah=O.createContext({isTransitioning:!1});Ah.displayName="ViewTransition";var Fp=O.createContext(new Map);Fp.displayName="Fetchers";var Wp=O.createContext(null);Wp.displayName="Await";var Xt=O.createContext(null);Xt.displayName="Navigation";var mi=O.createContext(null);mi.displayName="Location";var Gt=O.createContext({outlet:null,matches:[],isDataRoute:!1});Gt.displayName="Route";var Gc=O.createContext(null);Gc.displayName="RouteError";function Ip(i,{relative:o}={}){Be(rl(),"useHref() may be used only in the context of a <Router> component.");let{basename:u,navigator:c}=O.useContext(Xt),{hash:s,pathname:d,search:m}=pi(i,{relative:o}),y=d;return u!=="/"&&(y=d==="/"?u:pn([u,d])),c.createHref({pathname:y,search:m,hash:s})}function rl(){return O.useContext(mi)!=null}function Vn(){return Be(rl(),"useLocation() may be used only in the context of a <Router> component."),O.useContext(mi).location}var Sh="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Eh(i){O.useContext(Xt).static||O.useLayoutEffect(i)}function da(){let{isDataRoute:i}=O.useContext(Gt);return i?h1():$p()}function $p(){Be(rl(),"useNavigate() may be used only in the context of a <Router> component.");let i=O.useContext(il),{basename:o,navigator:u}=O.useContext(Xt),{matches:c}=O.useContext(Gt),{pathname:s}=Vn(),d=JSON.stringify(Yc(c)),m=O.useRef(!1);return Eh(()=>{m.current=!0}),O.useCallback((p,h={})=>{if(Yt(m.current,Sh),!m.current)return;if(typeof p=="number"){u.go(p);return}let v=Xc(p,JSON.parse(d),s,h.relative==="path");i==null&&o!=="/"&&(v.pathname=v.pathname==="/"?o:pn([o,v.pathname])),(h.replace?u.replace:u.push)(v,h.state,h)},[o,u,d,s,i])}var e1=O.createContext(null);function t1(i){let o=O.useContext(Gt).outlet;return o&&O.createElement(e1.Provider,{value:i},o)}function pi(i,{relative:o}={}){let{matches:u}=O.useContext(Gt),{pathname:c}=Vn(),s=JSON.stringify(Yc(u));return O.useMemo(()=>Xc(i,JSON.parse(s),c,o==="path"),[i,s,c,o])}function n1(i,o){return Oh(i,o)}function Oh(i,o,u,c){Be(rl(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:s}=O.useContext(Xt),{matches:d}=O.useContext(Gt),m=d[d.length-1],y=m?m.params:{},p=m?m.pathname:"/",h=m?m.pathnameBase:"/",v=m&&m.route;{let q=v&&v.path||"";Th(p,!v||q.endsWith("*")||q.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${p}" (under <Route path="${q}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${q}"> to <Route path="${q==="/"?"*":`${q}/*`}">.`)}let C=Vn(),M;if(o){let q=typeof o=="string"?ll(o):o;Be(h==="/"||q.pathname?.startsWith(h),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${h}" but pathname "${q.pathname}" was given in the \`location\` prop.`),M=q}else M=C;let B=M.pathname||"/",w=B;if(h!=="/"){let q=h.replace(/^\//,"").split("/");w="/"+B.replace(/^\//,"").split("/").slice(q.length).join("/")}let E=gh(i,{pathname:w});Yt(v||E!=null,`No routes matched location "${M.pathname}${M.search}${M.hash}" `),Yt(E==null||E[E.length-1].route.element!==void 0||E[E.length-1].route.Component!==void 0||E[E.length-1].route.lazy!==void 0,`Matched leaf route at location "${M.pathname}${M.search}${M.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let L=o1(E&&E.map(q=>Object.assign({},q,{params:Object.assign({},y,q.params),pathname:pn([h,s.encodeLocation?s.encodeLocation(q.pathname).pathname:q.pathname]),pathnameBase:q.pathnameBase==="/"?h:pn([h,s.encodeLocation?s.encodeLocation(q.pathnameBase).pathname:q.pathnameBase])})),d,u,c);return o&&L?O.createElement(mi.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...M},navigationType:"POP"}},L):L}function a1(){let i=d1(),o=Jp(i)?`${i.status} ${i.statusText}`:i instanceof Error?i.message:JSON.stringify(i),u=i instanceof Error?i.stack:null,c="rgba(200,200,200, 0.5)",s={padding:"0.5rem",backgroundColor:c},d={padding:"2px 4px",backgroundColor:c},m=null;return console.error("Error handled by React Router default ErrorBoundary:",i),m=O.createElement(O.Fragment,null,O.createElement("p",null,"💿 Hey developer 👋"),O.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",O.createElement("code",{style:d},"ErrorBoundary")," or"," ",O.createElement("code",{style:d},"errorElement")," prop on your route.")),O.createElement(O.Fragment,null,O.createElement("h2",null,"Unexpected Application Error!"),O.createElement("h3",{style:{fontStyle:"italic"}},o),u?O.createElement("pre",{style:s},u):null,m)}var l1=O.createElement(a1,null),i1=class extends O.Component{constructor(i){super(i),this.state={location:i.location,revalidation:i.revalidation,error:i.error}}static getDerivedStateFromError(i){return{error:i}}static getDerivedStateFromProps(i,o){return o.location!==i.location||o.revalidation!=="idle"&&i.revalidation==="idle"?{error:i.error,location:i.location,revalidation:i.revalidation}:{error:i.error!==void 0?i.error:o.error,location:o.location,revalidation:i.revalidation||o.revalidation}}componentDidCatch(i,o){console.error("React Router caught the following error during render",i,o)}render(){return this.state.error!==void 0?O.createElement(Gt.Provider,{value:this.props.routeContext},O.createElement(Gc.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function r1({routeContext:i,match:o,children:u}){let c=O.useContext(il);return c&&c.static&&c.staticContext&&(o.route.errorElement||o.route.ErrorBoundary)&&(c.staticContext._deepestRenderedBoundaryId=o.route.id),O.createElement(Gt.Provider,{value:i},u)}function o1(i,o=[],u=null,c=null){if(i==null){if(!u)return null;if(u.errors)i=u.matches;else if(o.length===0&&!u.initialized&&u.matches.length>0)i=u.matches;else return null}let s=i,d=u?.errors;if(d!=null){let p=s.findIndex(h=>h.route.id&&d?.[h.route.id]!==void 0);Be(p>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(d).join(",")}`),s=s.slice(0,Math.min(s.length,p+1))}let m=!1,y=-1;if(u)for(let p=0;p<s.length;p++){let h=s[p];if((h.route.HydrateFallback||h.route.hydrateFallbackElement)&&(y=p),h.route.id){let{loaderData:v,errors:C}=u,M=h.route.loader&&!v.hasOwnProperty(h.route.id)&&(!C||C[h.route.id]===void 0);if(h.route.lazy||M){m=!0,y>=0?s=s.slice(0,y+1):s=[s[0]];break}}}return s.reduceRight((p,h,v)=>{let C,M=!1,B=null,w=null;u&&(C=d&&h.route.id?d[h.route.id]:void 0,B=h.route.errorElement||l1,m&&(y<0&&v===0?(Th("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),M=!0,w=null):y===v&&(M=!0,w=h.route.hydrateFallbackElement||null)));let E=o.concat(s.slice(0,v+1)),L=()=>{let q;return C?q=B:M?q=w:h.route.Component?q=O.createElement(h.route.Component,null):h.route.element?q=h.route.element:q=p,O.createElement(r1,{match:h,routeContext:{outlet:p,matches:E,isDataRoute:u!=null},children:q})};return u&&(h.route.ErrorBoundary||h.route.errorElement||v===0)?O.createElement(i1,{location:u.location,revalidation:u.revalidation,component:B,error:C,children:L(),routeContext:{outlet:null,matches:E,isDataRoute:!0}}):L()},null)}function Zc(i){return`${i} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function u1(i){let o=O.useContext(il);return Be(o,Zc(i)),o}function c1(i){let o=O.useContext(to);return Be(o,Zc(i)),o}function s1(i){let o=O.useContext(Gt);return Be(o,Zc(i)),o}function Vc(i){let o=s1(i),u=o.matches[o.matches.length-1];return Be(u.route.id,`${i} can only be used on routes that contain a unique "id"`),u.route.id}function f1(){return Vc("useRouteId")}function d1(){let i=O.useContext(Gc),o=c1("useRouteError"),u=Vc("useRouteError");return i!==void 0?i:o.errors?.[u]}function h1(){let{router:i}=u1("useNavigate"),o=Vc("useNavigate"),u=O.useRef(!1);return Eh(()=>{u.current=!0}),O.useCallback(async(s,d={})=>{Yt(u.current,Sh),u.current&&(typeof s=="number"?i.navigate(s):await i.navigate(s,{fromRouteId:o,...d}))},[i,o])}var ah={};function Th(i,o,u){!o&&!ah[i]&&(ah[i]=!0,Yt(!1,u))}O.memo(b1);function b1({routes:i,future:o,state:u}){return Oh(i,void 0,u,o)}function m1({to:i,replace:o,state:u,relative:c}){Be(rl(),"<Navigate> may be used only in the context of a <Router> component.");let{static:s}=O.useContext(Xt);Yt(!s,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:d}=O.useContext(Gt),{pathname:m}=Vn(),y=da(),p=Xc(i,Yc(d),m,c==="path"),h=JSON.stringify(p);return O.useEffect(()=>{y(JSON.parse(h),{replace:o,state:u,relative:c})},[y,h,c,o,u]),null}function p1(i){return t1(i.context)}function el(i){Be(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function g1({basename:i="/",children:o=null,location:u,navigationType:c="POP",navigator:s,static:d=!1}){Be(!rl(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let m=i.replace(/^\/*/,"/"),y=O.useMemo(()=>({basename:m,navigator:s,static:d,future:{}}),[m,s,d]);typeof u=="string"&&(u=ll(u));let{pathname:p="/",search:h="",hash:v="",state:C=null,key:M="default"}=u,B=O.useMemo(()=>{let w=gn(p,m);return w==null?null:{location:{pathname:w,search:h,hash:v,state:C,key:M},navigationType:c}},[m,p,h,v,C,M,c]);return Yt(B!=null,`<Router basename="${m}"> is not able to match the URL "${p}${h}${v}" because it does not start with the basename, so the <Router> won't render anything.`),B==null?null:O.createElement(Xt.Provider,{value:y},O.createElement(mi.Provider,{children:o,value:B}))}function v1({children:i,location:o}){return n1(Bc(i),o)}function Bc(i,o=[]){let u=[];return O.Children.forEach(i,(c,s)=>{if(!O.isValidElement(c))return;let d=[...o,s];if(c.type===O.Fragment){u.push.apply(u,Bc(c.props.children,d));return}Be(c.type===el,`[${typeof c.type=="string"?c.type:c.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Be(!c.props.index||!c.props.children,"An index route cannot have child routes.");let m={id:c.props.id||d.join("-"),caseSensitive:c.props.caseSensitive,element:c.props.element,Component:c.props.Component,index:c.props.index,path:c.props.path,loader:c.props.loader,action:c.props.action,hydrateFallbackElement:c.props.hydrateFallbackElement,HydrateFallback:c.props.HydrateFallback,errorElement:c.props.errorElement,ErrorBoundary:c.props.ErrorBoundary,hasErrorBoundary:c.props.hasErrorBoundary===!0||c.props.ErrorBoundary!=null||c.props.errorElement!=null,shouldRevalidate:c.props.shouldRevalidate,handle:c.props.handle,lazy:c.props.lazy};c.props.children&&(m.children=Bc(c.props.children,d)),u.push(m)}),u}var Zr="get",Vr="application/x-www-form-urlencoded";function no(i){return i!=null&&typeof i.tagName=="string"}function x1(i){return no(i)&&i.tagName.toLowerCase()==="button"}function y1(i){return no(i)&&i.tagName.toLowerCase()==="form"}function A1(i){return no(i)&&i.tagName.toLowerCase()==="input"}function S1(i){return!!(i.metaKey||i.altKey||i.ctrlKey||i.shiftKey)}function E1(i,o){return i.button===0&&(!o||o==="_self")&&!S1(i)}var Ur=null;function O1(){if(Ur===null)try{new FormData(document.createElement("form"),0),Ur=!1}catch{Ur=!0}return Ur}var T1=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function zc(i){return i!=null&&!T1.has(i)?(Yt(!1,`"${i}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Vr}"`),null):i}function w1(i,o){let u,c,s,d,m;if(y1(i)){let y=i.getAttribute("action");c=y?gn(y,o):null,u=i.getAttribute("method")||Zr,s=zc(i.getAttribute("enctype"))||Vr,d=new FormData(i)}else if(x1(i)||A1(i)&&(i.type==="submit"||i.type==="image")){let y=i.form;if(y==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let p=i.getAttribute("formaction")||y.getAttribute("action");if(c=p?gn(p,o):null,u=i.getAttribute("formmethod")||y.getAttribute("method")||Zr,s=zc(i.getAttribute("formenctype"))||zc(y.getAttribute("enctype"))||Vr,d=new FormData(y,i),!O1()){let{name:h,type:v,value:C}=i;if(v==="image"){let M=h?`${h}.`:"";d.append(`${M}x`,"0"),d.append(`${M}y`,"0")}else h&&d.append(h,C)}}else{if(no(i))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');u=Zr,c=null,s=Vr,m=i}return d&&s==="text/plain"&&(m=d,d=void 0),{action:c,method:u.toLowerCase(),encType:s,formData:d,body:m}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Pc(i,o){if(i===!1||i===null||typeof i>"u")throw new Error(o)}function N1(i,o,u){let c=typeof i=="string"?new URL(i,typeof window>"u"?"server://singlefetch/":window.location.origin):i;return c.pathname==="/"?c.pathname=`_root.${u}`:o&&gn(c.pathname,o)==="/"?c.pathname=`${o.replace(/\/$/,"")}/_root.${u}`:c.pathname=`${c.pathname.replace(/\/$/,"")}.${u}`,c}async function C1(i,o){if(i.id in o)return o[i.id];try{let u=await import(i.module);return o[i.id]=u,u}catch(u){return console.error(`Error loading route module \`${i.module}\`, reloading page...`),console.error(u),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function D1(i){return i==null?!1:i.href==null?i.rel==="preload"&&typeof i.imageSrcSet=="string"&&typeof i.imageSizes=="string":typeof i.rel=="string"&&typeof i.href=="string"}async function _1(i,o,u){let c=await Promise.all(i.map(async s=>{let d=o.routes[s.route.id];if(d){let m=await C1(d,u);return m.links?m.links():[]}return[]}));return k1(c.flat(1).filter(D1).filter(s=>s.rel==="stylesheet"||s.rel==="preload").map(s=>s.rel==="stylesheet"?{...s,rel:"prefetch",as:"style"}:{...s,rel:"prefetch"}))}function lh(i,o,u,c,s,d){let m=(p,h)=>u[h]?p.route.id!==u[h].route.id:!0,y=(p,h)=>u[h].pathname!==p.pathname||u[h].route.path?.endsWith("*")&&u[h].params["*"]!==p.params["*"];return d==="assets"?o.filter((p,h)=>m(p,h)||y(p,h)):d==="data"?o.filter((p,h)=>{let v=c.routes[p.route.id];if(!v||!v.hasLoader)return!1;if(m(p,h)||y(p,h))return!0;if(p.route.shouldRevalidate){let C=p.route.shouldRevalidate({currentUrl:new URL(s.pathname+s.search+s.hash,window.origin),currentParams:u[0]?.params||{},nextUrl:new URL(i,window.origin),nextParams:p.params,defaultShouldRevalidate:!0});if(typeof C=="boolean")return C}return!0}):[]}function z1(i,o,{includeHydrateFallback:u}={}){return M1(i.map(c=>{let s=o.routes[c.route.id];if(!s)return[];let d=[s.module];return s.clientActionModule&&(d=d.concat(s.clientActionModule)),s.clientLoaderModule&&(d=d.concat(s.clientLoaderModule)),u&&s.hydrateFallbackModule&&(d=d.concat(s.hydrateFallbackModule)),s.imports&&(d=d.concat(s.imports)),d}).flat(1))}function M1(i){return[...new Set(i)]}function R1(i){let o={},u=Object.keys(i).sort();for(let c of u)o[c]=i[c];return o}function k1(i,o){let u=new Set;return new Set(o),i.reduce((c,s)=>{let d=JSON.stringify(R1(s));return u.has(d)||(u.add(d),c.push({key:d,link:s})),c},[])}function wh(){let i=O.useContext(il);return Pc(i,"You must render this element inside a <DataRouterContext.Provider> element"),i}function B1(){let i=O.useContext(to);return Pc(i,"You must render this element inside a <DataRouterStateContext.Provider> element"),i}var Jc=O.createContext(void 0);Jc.displayName="FrameworkContext";function Nh(){let i=O.useContext(Jc);return Pc(i,"You must render this element inside a <HydratedRouter> element"),i}function j1(i,o){let u=O.useContext(Jc),[c,s]=O.useState(!1),[d,m]=O.useState(!1),{onFocus:y,onBlur:p,onMouseEnter:h,onMouseLeave:v,onTouchStart:C}=o,M=O.useRef(null);O.useEffect(()=>{if(i==="render"&&m(!0),i==="viewport"){let E=q=>{q.forEach(X=>{m(X.isIntersecting)})},L=new IntersectionObserver(E,{threshold:.5});return M.current&&L.observe(M.current),()=>{L.disconnect()}}},[i]),O.useEffect(()=>{if(c){let E=setTimeout(()=>{m(!0)},100);return()=>{clearTimeout(E)}}},[c]);let B=()=>{s(!0)},w=()=>{s(!1),m(!1)};return u?i!=="intent"?[d,M,{}]:[d,M,{onFocus:ri(y,B),onBlur:ri(p,w),onMouseEnter:ri(h,B),onMouseLeave:ri(v,w),onTouchStart:ri(C,B)}]:[!1,M,{}]}function ri(i,o){return u=>{i&&i(u),u.defaultPrevented||o(u)}}function U1({page:i,...o}){let{router:u}=wh(),c=O.useMemo(()=>gh(u.routes,i,u.basename),[u.routes,i,u.basename]);return c?O.createElement(H1,{page:i,matches:c,...o}):null}function q1(i){let{manifest:o,routeModules:u}=Nh(),[c,s]=O.useState([]);return O.useEffect(()=>{let d=!1;return _1(i,o,u).then(m=>{d||s(m)}),()=>{d=!0}},[i,o,u]),c}function H1({page:i,matches:o,...u}){let c=Vn(),{manifest:s,routeModules:d}=Nh(),{basename:m}=wh(),{loaderData:y,matches:p}=B1(),h=O.useMemo(()=>lh(i,o,p,s,c,"data"),[i,o,p,s,c]),v=O.useMemo(()=>lh(i,o,p,s,c,"assets"),[i,o,p,s,c]),C=O.useMemo(()=>{if(i===c.pathname+c.search+c.hash)return[];let w=new Set,E=!1;if(o.forEach(q=>{let X=s.routes[q.route.id];!X||!X.hasLoader||(!h.some(G=>G.route.id===q.route.id)&&q.route.id in y&&d[q.route.id]?.shouldRevalidate||X.hasClientLoader?E=!0:w.add(q.route.id))}),w.size===0)return[];let L=N1(i,m,"data");return E&&w.size>0&&L.searchParams.set("_routes",o.filter(q=>w.has(q.route.id)).map(q=>q.route.id).join(",")),[L.pathname+L.search]},[m,y,c,s,h,o,i,d]),M=O.useMemo(()=>z1(v,s),[v,s]),B=q1(v);return O.createElement(O.Fragment,null,C.map(w=>O.createElement("link",{key:w,rel:"prefetch",as:"fetch",href:w,...u})),M.map(w=>O.createElement("link",{key:w,rel:"modulepreload",href:w,...u})),B.map(({key:w,link:E})=>O.createElement("link",{key:w,nonce:u.nonce,...E})))}function L1(...i){return o=>{i.forEach(u=>{typeof u=="function"?u(o):u!=null&&(u.current=o)})}}var Ch=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Ch&&(window.__reactRouterVersion="7.8.0")}catch{}function Q1({basename:i,children:o,window:u}){let c=O.useRef();c.current==null&&(c.current=Tp({window:u,v5Compat:!0}));let s=c.current,[d,m]=O.useState({action:s.action,location:s.location}),y=O.useCallback(p=>{O.startTransition(()=>m(p))},[m]);return O.useLayoutEffect(()=>s.listen(y),[s,y]),O.createElement(g1,{basename:i,children:o,location:d.location,navigationType:d.action,navigator:s})}var Dh=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ao=O.forwardRef(function({onClick:o,discover:u="render",prefetch:c="none",relative:s,reloadDocument:d,replace:m,state:y,target:p,to:h,preventScrollReset:v,viewTransition:C,...M},B){let{basename:w}=O.useContext(Xt),E=typeof h=="string"&&Dh.test(h),L,q=!1;if(typeof h=="string"&&E&&(L=h,Ch))try{let V=new URL(window.location.href),he=h.startsWith("//")?new URL(V.protocol+h):new URL(h),F=gn(he.pathname,w);he.origin===V.origin&&F!=null?h=F+he.search+he.hash:q=!0}catch{Yt(!1,`<Link to="${h}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let X=Ip(h,{relative:s}),[G,ce,J]=j1(c,M),ue=Z1(h,{replace:m,state:y,target:p,preventScrollReset:v,relative:s,viewTransition:C});function Y(V){o&&o(V),V.defaultPrevented||ue(V)}let oe=O.createElement("a",{...M,...J,href:L||X,onClick:q||d?o:Y,ref:L1(B,ce),target:p,"data-discover":!E&&u==="render"?"true":void 0});return G&&!E?O.createElement(O.Fragment,null,oe,O.createElement(U1,{page:X})):oe});ao.displayName="Link";var Y1=O.forwardRef(function({"aria-current":o="page",caseSensitive:u=!1,className:c="",end:s=!1,style:d,to:m,viewTransition:y,children:p,...h},v){let C=pi(m,{relative:h.relative}),M=Vn(),B=O.useContext(to),{navigator:w,basename:E}=O.useContext(Xt),L=B!=null&&F1(C)&&y===!0,q=w.encodeLocation?w.encodeLocation(C).pathname:C.pathname,X=M.pathname,G=B&&B.navigation&&B.navigation.location?B.navigation.location.pathname:null;u||(X=X.toLowerCase(),G=G?G.toLowerCase():null,q=q.toLowerCase()),G&&E&&(G=gn(G,E)||G);const ce=q!=="/"&&q.endsWith("/")?q.length-1:q.length;let J=X===q||!s&&X.startsWith(q)&&X.charAt(ce)==="/",ue=G!=null&&(G===q||!s&&G.startsWith(q)&&G.charAt(q.length)==="/"),Y={isActive:J,isPending:ue,isTransitioning:L},oe=J?o:void 0,V;typeof c=="function"?V=c(Y):V=[c,J?"active":null,ue?"pending":null,L?"transitioning":null].filter(Boolean).join(" ");let he=typeof d=="function"?d(Y):d;return O.createElement(ao,{...h,"aria-current":oe,className:V,ref:v,style:he,to:m,viewTransition:y},typeof p=="function"?p(Y):p)});Y1.displayName="NavLink";var X1=O.forwardRef(({discover:i="render",fetcherKey:o,navigate:u,reloadDocument:c,replace:s,state:d,method:m=Zr,action:y,onSubmit:p,relative:h,preventScrollReset:v,viewTransition:C,...M},B)=>{let w=J1(),E=K1(y,{relative:h}),L=m.toLowerCase()==="get"?"get":"post",q=typeof y=="string"&&Dh.test(y),X=G=>{if(p&&p(G),G.defaultPrevented)return;G.preventDefault();let ce=G.nativeEvent.submitter,J=ce?.getAttribute("formmethod")||m;w(ce||G.currentTarget,{fetcherKey:o,method:J,navigate:u,replace:s,state:d,relative:h,preventScrollReset:v,viewTransition:C})};return O.createElement("form",{ref:B,method:L,action:E,onSubmit:c?p:X,...M,"data-discover":!q&&i==="render"?"true":void 0})});X1.displayName="Form";function G1(i){return`${i} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function _h(i){let o=O.useContext(il);return Be(o,G1(i)),o}function Z1(i,{target:o,replace:u,state:c,preventScrollReset:s,relative:d,viewTransition:m}={}){let y=da(),p=Vn(),h=pi(i,{relative:d});return O.useCallback(v=>{if(E1(v,o)){v.preventDefault();let C=u!==void 0?u:di(p)===di(h);y(i,{replace:C,state:c,preventScrollReset:s,relative:d,viewTransition:m})}},[p,y,h,u,c,o,i,s,d,m])}var V1=0,P1=()=>`__${String(++V1)}__`;function J1(){let{router:i}=_h("useSubmit"),{basename:o}=O.useContext(Xt),u=f1();return O.useCallback(async(c,s={})=>{let{action:d,method:m,encType:y,formData:p,body:h}=w1(c,o);if(s.navigate===!1){let v=s.fetcherKey||P1();await i.fetch(v,u,s.action||d,{preventScrollReset:s.preventScrollReset,formData:p,body:h,formMethod:s.method||m,formEncType:s.encType||y,flushSync:s.flushSync})}else await i.navigate(s.action||d,{preventScrollReset:s.preventScrollReset,formData:p,body:h,formMethod:s.method||m,formEncType:s.encType||y,replace:s.replace,state:s.state,fromRouteId:u,flushSync:s.flushSync,viewTransition:s.viewTransition})},[i,o,u])}function K1(i,{relative:o}={}){let{basename:u}=O.useContext(Xt),c=O.useContext(Gt);Be(c,"useFormAction must be used inside a RouteContext");let[s]=c.matches.slice(-1),d={...pi(i||".",{relative:o})},m=Vn();if(i==null){d.search=m.search;let y=new URLSearchParams(d.search),p=y.getAll("index");if(p.some(v=>v==="")){y.delete("index"),p.filter(C=>C).forEach(C=>y.append("index",C));let v=y.toString();d.search=v?`?${v}`:""}}return(!i||i===".")&&s.route.index&&(d.search=d.search?d.search.replace(/^\?/,"?index&"):"?index"),u!=="/"&&(d.pathname=d.pathname==="/"?u:pn([u,d.pathname])),di(d)}function F1(i,{relative:o}={}){let u=O.useContext(Ah);Be(u!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:c}=_h("useViewTransitionState"),s=pi(i,{relative:o});if(!u.isTransitioning)return!1;let d=gn(u.currentLocation.pathname,c)||u.currentLocation.pathname,m=gn(u.nextLocation.pathname,c)||u.nextLocation.pathname;return Pr(s.pathname,m)!=null||Pr(s.pathname,d)!=null}const W1="_bodyContainer_9s7ap_8",I1="_container_9s7ap_23",$1="_logo_9s7ap_38",eg="_emailContainer_9s7ap_65",tg="_passwordContainer_9s7ap_65",ng="_email_9s7ap_65",ag="_password_9s7ap_65",lg="_showBtn_9s7ap_90",ig="_signUpLink_9s7ap_101",rg="_loginBtn_9s7ap_110",og="_errorMsg_9s7ap_128",ug="_invalid_9s7ap_134",tt={bodyContainer:W1,container:I1,logo:$1,emailContainer:eg,passwordContainer:tg,email:ng,password:ag,showBtn:lg,signUpLink:ig,loginBtn:rg,errorMsg:og,invalid:ug},lo="/Lock-Ledger/assets/lockLedgerLogo-EEc1HEGT.webp",Jr="data:image/webp;base64,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",Kr="data:image/webp;base64,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",cg={};var jc=null;function sg(i){try{return crypto.getRandomValues(new Uint8Array(i))}catch{}try{return cg.randomBytes(i)}catch{}if(!jc)throw Error("Neither WebCryptoAPI nor a crypto module is available. Use bcrypt.setRandomFallback to set an alternative");return jc(i)}function fg(i){jc=i}function Kc(i,o){if(i=i||Fc,typeof i!="number")throw Error("Illegal arguments: "+typeof i+", "+typeof o);i<4?i=4:i>31&&(i=31);var u=[];return u.push("$2b$"),i<10&&u.push("0"),u.push(i.toString()),u.push("$"),u.push(Fr(sg(hi),hi)),u.join("")}function zh(i,o,u){if(typeof o=="function"&&(u=o,o=void 0),typeof i=="function"&&(u=i,i=void 0),typeof i>"u")i=Fc;else if(typeof i!="number")throw Error("illegal arguments: "+typeof i);function c(s){Lt(function(){try{s(null,Kc(i))}catch(d){s(d)}})}if(u){if(typeof u!="function")throw Error("Illegal callback: "+typeof u);c(u)}else return new Promise(function(s,d){c(function(m,y){if(m){d(m);return}s(y)})})}function Mh(i,o){if(typeof o>"u"&&(o=Fc),typeof o=="number"&&(o=Kc(o)),typeof i!="string"||typeof o!="string")throw Error("Illegal arguments: "+typeof i+", "+typeof o);return Uc(i,o)}function Rh(i,o,u,c){function s(d){typeof i=="string"&&typeof o=="number"?zh(o,function(m,y){Uc(i,y,d,c)}):typeof i=="string"&&typeof o=="string"?Uc(i,o,d,c):Lt(d.bind(this,Error("Illegal arguments: "+typeof i+", "+typeof o)))}if(u){if(typeof u!="function")throw Error("Illegal callback: "+typeof u);s(u)}else return new Promise(function(d,m){s(function(y,p){if(y){m(y);return}d(p)})})}function kh(i,o){for(var u=i.length^o.length,c=0;c<i.length;++c)u|=i.charCodeAt(c)^o.charCodeAt(c);return u===0}function dg(i,o){if(typeof i!="string"||typeof o!="string")throw Error("Illegal arguments: "+typeof i+", "+typeof o);return o.length!==60?!1:kh(Mh(i,o.substring(0,o.length-31)),o)}function hg(i,o,u,c){function s(d){if(typeof i!="string"||typeof o!="string"){Lt(d.bind(this,Error("Illegal arguments: "+typeof i+", "+typeof o)));return}if(o.length!==60){Lt(d.bind(this,null,!1));return}Rh(i,o.substring(0,29),function(m,y){m?d(m):d(null,kh(y,o))},c)}if(u){if(typeof u!="function")throw Error("Illegal callback: "+typeof u);s(u)}else return new Promise(function(d,m){s(function(y,p){if(y){m(y);return}d(p)})})}function bg(i){if(typeof i!="string")throw Error("Illegal arguments: "+typeof i);return parseInt(i.split("$")[2],10)}function mg(i){if(typeof i!="string")throw Error("Illegal arguments: "+typeof i);if(i.length!==60)throw Error("Illegal hash length: "+i.length+" != 60");return i.substring(0,29)}function pg(i){if(typeof i!="string")throw Error("Illegal arguments: "+typeof i);return Bh(i)>72}var Lt=typeof process<"u"&&process&&typeof process.nextTick=="function"?typeof setImmediate=="function"?setImmediate:process.nextTick:setTimeout;function Bh(i){for(var o=0,u=0,c=0;c<i.length;++c)u=i.charCodeAt(c),u<128?o+=1:u<2048?o+=2:(u&64512)===55296&&(i.charCodeAt(c+1)&64512)===56320?(++c,o+=4):o+=3;return o}function gg(i){for(var o=0,u,c,s=new Array(Bh(i)),d=0,m=i.length;d<m;++d)u=i.charCodeAt(d),u<128?s[o++]=u:u<2048?(s[o++]=u>>6|192,s[o++]=u&63|128):(u&64512)===55296&&((c=i.charCodeAt(d+1))&64512)===56320?(u=65536+((u&1023)<<10)+(c&1023),++d,s[o++]=u>>18|240,s[o++]=u>>12&63|128,s[o++]=u>>6&63|128,s[o++]=u&63|128):(s[o++]=u>>12|224,s[o++]=u>>6&63|128,s[o++]=u&63|128);return s}var Ia="./ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),Xn=[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,1,54,55,56,57,58,59,60,61,62,63,-1,-1,-1,-1,-1,-1,-1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,-1,-1,-1,-1,-1,-1,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,-1,-1,-1,-1,-1];function Fr(i,o){var u=0,c=[],s,d;if(o<=0||o>i.length)throw Error("Illegal len: "+o);for(;u<o;){if(s=i[u++]&255,c.push(Ia[s>>2&63]),s=(s&3)<<4,u>=o){c.push(Ia[s&63]);break}if(d=i[u++]&255,s|=d>>4&15,c.push(Ia[s&63]),s=(d&15)<<2,u>=o){c.push(Ia[s&63]);break}d=i[u++]&255,s|=d>>6&3,c.push(Ia[s&63]),c.push(Ia[d&63])}return c.join("")}function jh(i,o){var u=0,c=i.length,s=0,d=[],m,y,p,h,v,C;if(o<=0)throw Error("Illegal len: "+o);for(;u<c-1&&s<o&&(C=i.charCodeAt(u++),m=C<Xn.length?Xn[C]:-1,C=i.charCodeAt(u++),y=C<Xn.length?Xn[C]:-1,!(m==-1||y==-1||(v=m<<2>>>0,v|=(y&48)>>4,d.push(String.fromCharCode(v)),++s>=o||u>=c)||(C=i.charCodeAt(u++),p=C<Xn.length?Xn[C]:-1,p==-1)||(v=(y&15)<<4>>>0,v|=(p&60)>>2,d.push(String.fromCharCode(v)),++s>=o||u>=c)));)C=i.charCodeAt(u++),h=C<Xn.length?Xn[C]:-1,v=(p&3)<<6>>>0,v|=h,d.push(String.fromCharCode(v)),++s;var M=[];for(u=0;u<s;u++)M.push(d[u].charCodeAt(0));return M}var hi=16,Fc=10,vg=16,xg=100,ih=[608135816,2242054355,320440878,57701188,2752067618,698298832,137296536,3964562569,1160258022,953160567,3193202383,887688300,3232508343,3380367581,1065670069,3041331479,2450970073,2306472731],rh=[3509652390,2564797868,805139163,3491422135,3101798381,1780907670,3128725573,4046225305,614570311,3012652279,134345442,2240740374,1667834072,1901547113,2757295779,4103290238,227898511,1921955416,1904987480,2182433518,2069144605,3260701109,2620446009,720527379,3318853667,677414384,3393288472,3101374703,2390351024,1614419982,1822297739,2954791486,3608508353,3174124327,2024746970,1432378464,3864339955,2857741204,1464375394,1676153920,1439316330,715854006,3033291828,289532110,2706671279,2087905683,3018724369,1668267050,732546397,1947742710,3462151702,2609353502,2950085171,1814351708,2050118529,680887927,999245976,1800124847,3300911131,1713906067,1641548236,4213287313,1216130144,1575780402,4018429277,3917837745,3693486850,3949271944,596196993,3549867205,258830323,2213823033,772490370,2760122372,1774776394,2652871518,566650946,4142492826,1728879713,2882767088,1783734482,3629395816,2517608232,2874225571,1861159788,326777828,3124490320,2130389656,2716951837,967770486,1724537150,2185432712,2364442137,1164943284,2105845187,998989502,3765401048,2244026483,1075463327,1455516326,1322494562,910128902,469688178,1117454909,936433444,3490320968,3675253459,1240580251,122909385,2157517691,634681816,4142456567,3825094682,3061402683,2540495037,79693498,3249098678,1084186820,1583128258,426386531,1761308591,1047286709,322548459,995290223,1845252383,2603652396,3431023940,2942221577,3202600964,3727903485,1712269319,422464435,3234572375,1170764815,3523960633,3117677531,1434042557,442511882,3600875718,1076654713,1738483198,4213154764,2393238008,3677496056,1014306527,4251020053,793779912,2902807211,842905082,4246964064,1395751752,1040244610,2656851899,3396308128,445077038,3742853595,3577915638,679411651,2892444358,2354009459,1767581616,3150600392,3791627101,3102740896,284835224,4246832056,1258075500,768725851,2589189241,3069724005,3532540348,1274779536,3789419226,2764799539,1660621633,3471099624,4011903706,913787905,3497959166,737222580,2514213453,2928710040,3937242737,1804850592,3499020752,2949064160,2386320175,2390070455,2415321851,4061277028,2290661394,2416832540,1336762016,1754252060,3520065937,3014181293,791618072,3188594551,3933548030,2332172193,3852520463,3043980520,413987798,3465142937,3030929376,4245938359,2093235073,3534596313,375366246,2157278981,2479649556,555357303,3870105701,2008414854,3344188149,4221384143,3956125452,2067696032,3594591187,2921233993,2428461,544322398,577241275,1471733935,610547355,4027169054,1432588573,1507829418,2025931657,3646575487,545086370,48609733,2200306550,1653985193,298326376,1316178497,3007786442,2064951626,458293330,2589141269,3591329599,3164325604,727753846,2179363840,146436021,1461446943,4069977195,705550613,3059967265,3887724982,4281599278,3313849956,1404054877,2845806497,146425753,1854211946,1266315497,3048417604,3681880366,3289982499,290971e4,1235738493,2632868024,2414719590,3970600049,1771706367,1449415276,3266420449,422970021,1963543593,2690192192,3826793022,1062508698,1531092325,1804592342,2583117782,2714934279,4024971509,1294809318,4028980673,1289560198,2221992742,1669523910,35572830,157838143,1052438473,1016535060,1802137761,1753167236,1386275462,3080475397,2857371447,1040679964,2145300060,2390574316,1461121720,2956646967,4031777805,4028374788,33600511,2920084762,1018524850,629373528,3691585981,3515945977,2091462646,2486323059,586499841,988145025,935516892,3367335476,2599673255,2839830854,265290510,3972581182,2759138881,3795373465,1005194799,847297441,406762289,1314163512,1332590856,1866599683,4127851711,750260880,613907577,1450815602,3165620655,3734664991,3650291728,3012275730,3704569646,1427272223,778793252,1343938022,2676280711,2052605720,1946737175,3164576444,3914038668,3967478842,3682934266,1661551462,3294938066,4011595847,840292616,3712170807,616741398,312560963,711312465,1351876610,322626781,1910503582,271666773,2175563734,1594956187,70604529,3617834859,1007753275,1495573769,4069517037,2549218298,2663038764,504708206,2263041392,3941167025,2249088522,1514023603,1998579484,1312622330,694541497,2582060303,2151582166,1382467621,776784248,2618340202,3323268794,2497899128,2784771155,503983604,4076293799,907881277,423175695,432175456,1378068232,4145222326,3954048622,3938656102,3820766613,2793130115,2977904593,26017576,3274890735,3194772133,1700274565,1756076034,4006520079,3677328699,720338349,1533947780,354530856,688349552,3973924725,1637815568,332179504,3949051286,53804574,2852348879,3044236432,1282449977,3583942155,3416972820,4006381244,1617046695,2628476075,3002303598,1686838959,431878346,2686675385,1700445008,1080580658,1009431731,832498133,3223435511,2605976345,2271191193,2516031870,1648197032,4164389018,2548247927,300782431,375919233,238389289,3353747414,2531188641,2019080857,1475708069,455242339,2609103871,448939670,3451063019,1395535956,2413381860,1841049896,1491858159,885456874,4264095073,4001119347,1565136089,3898914787,1108368660,540939232,1173283510,2745871338,3681308437,4207628240,3343053890,4016749493,1699691293,1103962373,3625875870,2256883143,3830138730,1031889488,3479347698,1535977030,4236805024,3251091107,2132092099,1774941330,1199868427,1452454533,157007616,2904115357,342012276,595725824,1480756522,206960106,497939518,591360097,863170706,2375253569,3596610801,1814182875,2094937945,3421402208,1082520231,3463918190,2785509508,435703966,3908032597,1641649973,2842273706,3305899714,1510255612,2148256476,2655287854,3276092548,4258621189,236887753,3681803219,274041037,1734335097,3815195456,3317970021,1899903192,1026095262,4050517792,356393447,2410691914,3873677099,3682840055,3913112168,2491498743,4132185628,2489919796,1091903735,1979897079,3170134830,3567386728,3557303409,857797738,1136121015,1342202287,507115054,2535736646,337727348,3213592640,1301675037,2528481711,1895095763,1721773893,3216771564,62756741,2142006736,835421444,2531993523,1442658625,3659876326,2882144922,676362277,1392781812,170690266,3921047035,1759253602,3611846912,1745797284,664899054,1329594018,3901205900,3045908486,2062866102,2865634940,3543621612,3464012697,1080764994,553557557,3656615353,3996768171,991055499,499776247,1265440854,648242737,3940784050,980351604,3713745714,1749149687,3396870395,4211799374,3640570775,1161844396,3125318951,1431517754,545492359,4268468663,3499529547,1437099964,2702547544,3433638243,2581715763,2787789398,1060185593,1593081372,2418618748,4260947970,69676912,2159744348,86519011,2512459080,3838209314,1220612927,3339683548,133810670,1090789135,1078426020,1569222167,845107691,3583754449,4072456591,1091646820,628848692,1613405280,3757631651,526609435,236106946,48312990,2942717905,3402727701,1797494240,859738849,992217954,4005476642,2243076622,3870952857,3732016268,765654824,3490871365,2511836413,1685915746,3888969200,1414112111,2273134842,3281911079,4080962846,172450625,2569994100,980381355,4109958455,2819808352,2716589560,2568741196,3681446669,3329971472,1835478071,660984891,3704678404,4045999559,3422617507,3040415634,1762651403,1719377915,3470491036,2693910283,3642056355,3138596744,1364962596,2073328063,1983633131,926494387,3423689081,2150032023,4096667949,1749200295,3328846651,309677260,2016342300,1779581495,3079819751,111262694,1274766160,443224088,298511866,1025883608,3806446537,1145181785,168956806,3641502830,3584813610,1689216846,3666258015,3200248200,1692713982,2646376535,4042768518,1618508792,1610833997,3523052358,4130873264,2001055236,3610705100,2202168115,4028541809,2961195399,1006657119,2006996926,3186142756,1430667929,3210227297,1314452623,4074634658,4101304120,2273951170,1399257539,3367210612,3027628629,1190975929,2062231137,2333990788,2221543033,2438960610,1181637006,548689776,2362791313,3372408396,3104550113,3145860560,296247880,1970579870,3078560182,3769228297,1714227617,3291629107,3898220290,166772364,1251581989,493813264,448347421,195405023,2709975567,677966185,3703036547,1463355134,2715995803,1338867538,1343315457,2802222074,2684532164,233230375,2599980071,2000651841,3277868038,1638401717,4028070440,3237316320,6314154,819756386,300326615,590932579,1405279636,3267499572,3150704214,2428286686,3959192993,3461946742,1862657033,1266418056,963775037,2089974820,2263052895,1917689273,448879540,3550394620,3981727096,150775221,3627908307,1303187396,508620638,2975983352,2726630617,1817252668,1876281319,1457606340,908771278,3720792119,3617206836,2455994898,1729034894,1080033504,976866871,3556439503,2881648439,1522871579,1555064734,1336096578,3548522304,2579274686,3574697629,3205460757,3593280638,3338716283,3079412587,564236357,2993598910,1781952180,1464380207,3163844217,3332601554,1699332808,1393555694,1183702653,3581086237,1288719814,691649499,2847557200,2895455976,3193889540,2717570544,1781354906,1676643554,2592534050,3230253752,1126444790,2770207658,2633158820,2210423226,2615765581,2414155088,3127139286,673620729,2805611233,1269405062,4015350505,3341807571,4149409754,1057255273,2012875353,2162469141,2276492801,2601117357,993977747,3918593370,2654263191,753973209,36408145,2530585658,25011837,3520020182,2088578344,530523599,2918365339,1524020338,1518925132,3760827505,3759777254,1202760957,3985898139,3906192525,674977740,4174734889,2031300136,2019492241,3983892565,4153806404,3822280332,352677332,2297720250,60907813,90501309,3286998549,1016092578,2535922412,2839152426,457141659,509813237,4120667899,652014361,1966332200,2975202805,55981186,2327461051,676427537,3255491064,2882294119,3433927263,1307055953,942726286,933058658,2468411793,3933900994,4215176142,1361170020,2001714738,2830558078,3274259782,1222529897,1679025792,2729314320,3714953764,1770335741,151462246,3013232138,1682292957,1483529935,471910574,1539241949,458788160,3436315007,1807016891,3718408830,978976581,1043663428,3165965781,1927990952,4200891579,2372276910,3208408903,3533431907,1412390302,2931980059,4132332400,1947078029,3881505623,4168226417,2941484381,1077988104,1320477388,886195818,18198404,3786409e3,2509781533,112762804,3463356488,1866414978,891333506,18488651,661792760,1628790961,3885187036,3141171499,876946877,2693282273,1372485963,791857591,2686433993,3759982718,3167212022,3472953795,2716379847,445679433,3561995674,3504004811,3574258232,54117162,3331405415,2381918588,3769707343,4154350007,1140177722,4074052095,668550556,3214352940,367459370,261225585,2610173221,4209349473,3468074219,3265815641,314222801,3066103646,3808782860,282218597,3406013506,3773591054,379116347,1285071038,846784868,2669647154,3771962079,3550491691,2305946142,453669953,1268987020,3317592352,3279303384,3744833421,2610507566,3859509063,266596637,3847019092,517658769,3462560207,3443424879,370717030,4247526661,2224018117,4143653529,4112773975,2788324899,2477274417,1456262402,2901442914,1517677493,1846949527,2295493580,3734397586,2176403920,1280348187,1908823572,3871786941,846861322,1172426758,3287448474,3383383037,1655181056,3139813346,901632758,1897031941,2986607138,3066810236,3447102507,1393639104,373351379,950779232,625454576,3124240540,4148612726,2007998917,544563296,2244738638,2330496472,2058025392,1291430526,424198748,50039436,29584100,3605783033,2429876329,2791104160,1057563949,3255363231,3075367218,3463963227,1469046755,985887462],Uh=[1332899944,1700884034,1701343084,1684370003,1668446532,1869963892];function bi(i,o,u,c){var s,d=i[o],m=i[o+1];return d^=u[0],s=c[d>>>24],s+=c[256|d>>16&255],s^=c[512|d>>8&255],s+=c[768|d&255],m^=s^u[1],s=c[m>>>24],s+=c[256|m>>16&255],s^=c[512|m>>8&255],s+=c[768|m&255],d^=s^u[2],s=c[d>>>24],s+=c[256|d>>16&255],s^=c[512|d>>8&255],s+=c[768|d&255],m^=s^u[3],s=c[m>>>24],s+=c[256|m>>16&255],s^=c[512|m>>8&255],s+=c[768|m&255],d^=s^u[4],s=c[d>>>24],s+=c[256|d>>16&255],s^=c[512|d>>8&255],s+=c[768|d&255],m^=s^u[5],s=c[m>>>24],s+=c[256|m>>16&255],s^=c[512|m>>8&255],s+=c[768|m&255],d^=s^u[6],s=c[d>>>24],s+=c[256|d>>16&255],s^=c[512|d>>8&255],s+=c[768|d&255],m^=s^u[7],s=c[m>>>24],s+=c[256|m>>16&255],s^=c[512|m>>8&255],s+=c[768|m&255],d^=s^u[8],s=c[d>>>24],s+=c[256|d>>16&255],s^=c[512|d>>8&255],s+=c[768|d&255],m^=s^u[9],s=c[m>>>24],s+=c[256|m>>16&255],s^=c[512|m>>8&255],s+=c[768|m&255],d^=s^u[10],s=c[d>>>24],s+=c[256|d>>16&255],s^=c[512|d>>8&255],s+=c[768|d&255],m^=s^u[11],s=c[m>>>24],s+=c[256|m>>16&255],s^=c[512|m>>8&255],s+=c[768|m&255],d^=s^u[12],s=c[d>>>24],s+=c[256|d>>16&255],s^=c[512|d>>8&255],s+=c[768|d&255],m^=s^u[13],s=c[m>>>24],s+=c[256|m>>16&255],s^=c[512|m>>8&255],s+=c[768|m&255],d^=s^u[14],s=c[d>>>24],s+=c[256|d>>16&255],s^=c[512|d>>8&255],s+=c[768|d&255],m^=s^u[15],s=c[m>>>24],s+=c[256|m>>16&255],s^=c[512|m>>8&255],s+=c[768|m&255],d^=s^u[16],i[o]=m^u[vg+1],i[o+1]=d,i}function tl(i,o){for(var u=0,c=0;u<4;++u)c=c<<8|i[o]&255,o=(o+1)%i.length;return{key:c,offp:o}}function oh(i,o,u){for(var c=0,s=[0,0],d=o.length,m=u.length,y,p=0;p<d;p++)y=tl(i,c),c=y.offp,o[p]=o[p]^y.key;for(p=0;p<d;p+=2)s=bi(s,0,o,u),o[p]=s[0],o[p+1]=s[1];for(p=0;p<m;p+=2)s=bi(s,0,o,u),u[p]=s[0],u[p+1]=s[1]}function yg(i,o,u,c){for(var s=0,d=[0,0],m=u.length,y=c.length,p,h=0;h<m;h++)p=tl(o,s),s=p.offp,u[h]=u[h]^p.key;for(s=0,h=0;h<m;h+=2)p=tl(i,s),s=p.offp,d[0]^=p.key,p=tl(i,s),s=p.offp,d[1]^=p.key,d=bi(d,0,u,c),u[h]=d[0],u[h+1]=d[1];for(h=0;h<y;h+=2)p=tl(i,s),s=p.offp,d[0]^=p.key,p=tl(i,s),s=p.offp,d[1]^=p.key,d=bi(d,0,u,c),c[h]=d[0],c[h+1]=d[1]}function uh(i,o,u,c,s){var d=Uh.slice(),m=d.length,y;if(u<4||u>31)if(y=Error("Illegal number of rounds (4-31): "+u),c){Lt(c.bind(this,y));return}else throw y;if(o.length!==hi)if(y=Error("Illegal salt length: "+o.length+" != "+hi),c){Lt(c.bind(this,y));return}else throw y;u=1<<u>>>0;var p,h,v=0,C;typeof Int32Array=="function"?(p=new Int32Array(ih),h=new Int32Array(rh)):(p=ih.slice(),h=rh.slice()),yg(o,i,p,h);function M(){if(s&&s(v/u),v<u)for(var w=Date.now();v<u&&(v=v+1,oh(i,p,h),oh(o,p,h),!(Date.now()-w>xg)););else{for(v=0;v<64;v++)for(C=0;C<m>>1;C++)bi(d,C<<1,p,h);var E=[];for(v=0;v<m;v++)E.push((d[v]>>24&255)>>>0),E.push((d[v]>>16&255)>>>0),E.push((d[v]>>8&255)>>>0),E.push((d[v]&255)>>>0);if(c){c(null,E);return}else return E}c&&Lt(M)}if(typeof c<"u")M();else for(var B;;)if(typeof(B=M())<"u")return B||[]}function Uc(i,o,u,c){var s;if(typeof i!="string"||typeof o!="string")if(s=Error("Invalid string / salt: Not a string"),u){Lt(u.bind(this,s));return}else throw s;var d,m;if(o.charAt(0)!=="$"||o.charAt(1)!=="2")if(s=Error("Invalid salt version: "+o.substring(0,2)),u){Lt(u.bind(this,s));return}else throw s;if(o.charAt(2)==="$")d="\0",m=3;else{if(d=o.charAt(2),d!=="a"&&d!=="b"&&d!=="y"||o.charAt(3)!=="$")if(s=Error("Invalid salt revision: "+o.substring(2,4)),u){Lt(u.bind(this,s));return}else throw s;m=4}if(o.charAt(m+2)>"$")if(s=Error("Missing salt rounds"),u){Lt(u.bind(this,s));return}else throw s;var y=parseInt(o.substring(m,m+1),10)*10,p=parseInt(o.substring(m+1,m+2),10),h=y+p,v=o.substring(m+3,m+25);i+=d>="a"?"\0":"";var C=gg(i),M=jh(v,hi);function B(w){var E=[];return E.push("$2"),d>="a"&&E.push(d),E.push("$"),h<10&&E.push("0"),E.push(h.toString()),E.push("$"),E.push(Fr(M,M.length)),E.push(Fr(w,Uh.length*4-1)),E.join("")}if(typeof u>"u")return B(uh(C,M,h));uh(C,M,h,function(w,E){w?u(w,null):u(null,B(E))},c)}function Ag(i,o){return Fr(i,o)}function Sg(i,o){return jh(i,o)}const nl={setRandomFallback:fg,genSaltSync:Kc,genSalt:zh,hashSync:Mh,hash:Rh,compareSync:dg,compare:hg,getRounds:bg,getSalt:mg,truncates:pg,encodeBase64:Ag,decodeBase64:Sg},Wr="https://68befe509c70953d96ee6f2f.mockapi.io/lockLedger";async function Eg(i){try{const o=await fetch(`${Wr}/users?email=${i}`);if(o.ok)return await o.json()}catch(o){console.log(o)}}async function Og(i,o,u,c){try{const d=await(await fetch(`${Wr}/users`)).json();Array.isArray(d)||(d=[]),console.log(d);const m=d.some(C=>C.email===o),y=d.some(C=>C.username===i);if(m||y)return!1;const p=nl.genSaltSync(10),h=nl.hashSync(u,p),v=await fetch(`${Wr}/users`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:i,email:o,hashedPassword:h,pin:c})});if(!v.ok)throw new Error("Failed to Create user");return await v.json()}catch(s){console.log(s)}}async function qh(i,o){try{return await(await fetch(`${Wr}/users/${i}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(o)})).json()}catch(u){console.log(u)}}function Hh(i,o){try{localStorage.setItem(i,JSON.stringify(o))}catch(u){console.log(u)}}function Tg(i){try{const o=localStorage.getItem(i);return o?JSON.parse(o):void 0}catch(o){console.log(o)}}function qc(i,o){let u=JSON.parse(localStorage.getItem(i));Object.keys(u).length>0&&(u={...u,...o}),localStorage.setItem("currentUser",JSON.stringify(u))}function wg(i){try{localStorage.removeItem(i)}catch(o){console.log(o)}}const ot={emptyInput:"Input is Required",invalidPassword:"Password must be at least 8 characters",invalidUsername:"Username is invalid",invalidPin:"PIN must be at least 6 characters",invalidAmount:"Amount must be a Positive value"};function Ng(i){return/[a-zA-Z]/.test(i)}function al({email:i,password:o,name:u,pin:c,title:s,date:d,type:m,amount:y}){const p={};return i!==void 0&&(i||(p.email=ot.emptyInput)),o!==void 0&&(o?o.length<8&&(p.password=ot.invalidPassword):p.password=ot.emptyInput),u!==void 0&&(u?Ng(u)||(p.name=ot.invalidUsername):p.name=ot.emptyInput),c!==void 0&&(c?c.length<6&&(p.pin=ot.invalidPin):p.pin=ot.emptyInput),s!==void 0&&(s||(p.title=ot.emptyInput)),d!==void 0&&(d||(p.date=ot.emptyInput)),m!==void 0&&(m||(p.type=ot.emptyInput)),y!==void 0&&y<0&&(p.amount=ot.invalidAmount),p}function Cg(i,o){const u={};return i.trim("")?i.trim("").length<8&&(u.currentPassword=ot.invalidPassword):u.currentPassword=ot.emptyInput,o.trim("")?o.trim("").length<8&&(u.newPassword=ot.invalidPassword):u.newPassword=ot.emptyInput,u}function Dg({currentUser:i,setCurrentUser:o}){O.useEffect(()=>{document.title="LockLedger - Login"},[]);const[u,c]=O.useState(""),[s,d]=O.useState(""),[m,y]=O.useState({}),[p,h]=O.useState(!1);O.useEffect(()=>{if(Object.keys(m).length>0){const w=setTimeout(()=>{y({})},3e3);return()=>clearTimeout(w)}},[m]);const v=da();async function C(){const w=await Eg(u),E=nl.compareSync(s,w[0].hashedPassword);w&&E?(o(w[0]),Hh("currentUser",w[0]),v("/Lock-Ledger/Pin")):y({login:"Invalid Email or Password"})}function M(){const w=al({email:u,password:s});Object.keys(w).length>0?y(w):C()}function B(w){w.preventDefault(),h(E=>!E)}return g.jsx("div",{className:tt.bodyContainer,children:g.jsx("form",{onSubmit:w=>{w.preventDefault(),M()},children:g.jsxs("div",{className:tt.container,children:[g.jsx("img",{className:tt.logo,src:lo,alt:"LockLedgerLogo",loading:"lazy"}),g.jsx("h1",{children:"Welcome to LockLedger"}),g.jsxs("div",{className:tt.emailContainer,children:[g.jsx("label",{htmlFor:"Email",children:"Email"}),g.jsx("input",{onChange:w=>c(w.target.value),placeholder:"example@gmail.com",id:"Email",type:"email",className:`${tt.email} ${m.email||m.login?tt.invalid:""}`}),m.email&&g.jsxs("p",{className:tt.errorMsg,children:["*",m.email,"*"]}),m.login&&g.jsxs("p",{className:tt.errorMsg,children:["*",m.login,"*"]})]}),g.jsxs("div",{className:tt.passwordContainer,children:[g.jsx("label",{htmlFor:"password",children:"Password"}),g.jsxs("div",{children:[!p&&g.jsx("input",{onChange:w=>d(w.target.value),value:s,placeholder:"password123",id:"password",type:"password",className:`${tt.password} ${m.password||m.login?tt.invalid:""}`}),p&&g.jsx("input",{onChange:w=>d(w.target.value),value:s,placeholder:"password123",id:"password",type:"text",className:tt.password}),g.jsxs("button",{type:"button",onClick:w=>B(w),className:tt.showBtn,children:[!p&&g.jsx("img",{src:Jr,alt:"showIcon"}),p&&g.jsx("img",{src:Kr,alt:"showIcon"})]})]}),m.password&&g.jsxs("p",{className:tt.errorMsg,children:["*",m.password,"*"]}),m.login&&g.jsxs("p",{className:tt.errorMsg,children:["*",m.login,"*"]})]}),g.jsxs(ao,{to:"/Lock-Ledger/signup",className:tt.signUpLink,children:["Don't Have an account? ",g.jsx("span",{children:"Signup"})]}),g.jsx("button",{type:"submit",className:tt.loginBtn,children:"Login"})]})})})}const _g="_bodyContainer_u2bht_8",zg="_container_u2bht_23",Mg="_logo_u2bht_38",Rg="_emailContainer_u2bht_67",kg="_passwordContainer_u2bht_67",Bg="_email_u2bht_67",jg="_password_u2bht_67",Ug="_username_u2bht_71",qg="_pin_u2bht_71",Hg="_showBtn_u2bht_92",Lg="_signUpLink_u2bht_103",Qg="_loginBtn_u2bht_112",Yg="_errorMsg_u2bht_130",Xg="_invalid_u2bht_136",ze={bodyContainer:_g,container:zg,logo:Mg,emailContainer:Rg,passwordContainer:kg,email:Bg,password:jg,username:Ug,pin:qg,showBtn:Hg,signUpLink:Lg,loginBtn:Qg,errorMsg:Yg,invalid:Xg};function Gg({currentUser:i,setCurrentUser:o}){O.useEffect(()=>{document.title="LockLedger - Signup"},[]);const[u,c]=O.useState(""),[s,d]=O.useState(""),[m,y]=O.useState(""),[p,h]=O.useState(""),[v,C]=O.useState({}),[M,B]=O.useState(!1),w=da();O.useEffect(()=>{if(Object.keys(v).length>0){const X=setTimeout(()=>{C({})},3e3);return()=>clearTimeout(X)}},[v]);async function E(){try{o([]);const X=await Og(u,s,m,p);if(!X){C(G=>({...G,signup:"Username/Email Already Taken"}));return}console.log([X]),o(X),X&&w("/Lock-Ledger/Pin"),Hh("currentUser",X)}catch(X){console.log(X)}}function L(){const X=al({email:s,password:m,pin:p});Object.keys(X).length>0?C(X):E()}function q(X){X.preventDefault(),B(G=>!G)}return g.jsx("div",{className:ze.bodyContainer,children:g.jsx("form",{onSubmit:X=>{X.preventDefault(),L()},children:g.jsxs("div",{className:ze.container,children:[g.jsx("img",{className:ze.logo,src:lo,alt:"LockLedgerLogo",loading:"lazy"}),g.jsx("h1",{children:"Welcome to LockLedger"}),g.jsxs("div",{className:ze.emailContainer,children:[g.jsx("label",{htmlFor:"Email",children:"Email"}),g.jsx("input",{onChange:X=>d(X.target.value),placeholder:"example@gmail.com",id:"Email",type:"email",className:`${ze.email} ${v.email?ze.invalid:""}`}),v.email&&g.jsxs("p",{className:ze.errorMsg,children:["*",v.email,"*"]}),v.signup&&g.jsxs("p",{className:ze.errorMsg,children:["*",v.signup,"*"]})]}),g.jsxs("div",{className:ze.passwordContainer,children:[g.jsx("label",{htmlFor:"password",children:"Password"}),g.jsxs("div",{children:[!M&&g.jsx("input",{onChange:X=>y(X.target.value),value:m,placeholder:"password123",id:"password",type:"password",className:`${ze.password} ${v.password?ze.invalid:""}`}),M&&g.jsx("input",{onChange:X=>y(X.target.value),value:m,placeholder:"password123",id:"password",type:"text",className:ze.password}),g.jsxs("button",{type:"button",onClick:X=>q(X),className:ze.showBtn,children:[!M&&g.jsx("img",{src:Jr,alt:"showIcon"}),M&&g.jsx("img",{src:Kr,alt:"showIcon"})]})]}),v.password&&g.jsxs("p",{className:ze.errorMsg,children:["*",v.password,"*"]})]}),g.jsxs("div",{className:ze.userNameContainer,children:[g.jsx("label",{htmlFor:"username",children:"Username"}),g.jsx("input",{onChange:X=>c(X.target.value),placeholder:"Username",id:"username",type:"text",className:`${ze.username} ${v.username?ze.invalid:""}`}),v.username&&g.jsxs("p",{className:ze.errorMsg,children:["*",v.username,"*"]}),v.signup&&g.jsxs("p",{className:ze.errorMsg,children:["*",v.signup,"*"]})]}),g.jsxs("div",{className:ze.pinContainer,children:[g.jsx("label",{htmlFor:"pin",children:"Pin"}),g.jsx("input",{onChange:X=>h(X.target.value),placeholder:"Pin",id:"pin",type:"number",className:`${ze.pin} ${v.pin?ze.invalid:""}`}),v.pin&&g.jsxs("p",{className:ze.errorMsg,children:["*",v.pin,"*"]})]}),g.jsxs(ao,{to:"/Lock-Ledger/login",className:ze.signUpLink,children:["Have an account? ",g.jsx("span",{children:"Login"})]}),g.jsx("button",{type:"submit",className:ze.loginBtn,children:"Signup"})]})})})}const Zg="_bodyContainer_13x2z_1",Vg="_sidebarOpen_13x2z_9",ch={bodyContainer:Zg,sidebarOpen:Vg},Pg="_sideBar_muciy_1",Jg="_open_muciy_20",Kg="_logo_muciy_24",Fg="_closeBtn_muciy_31",Wg="_notesNav_muciy_46",Ig="_expNav_muciy_46",$g="_selected_muciy_80",ev="_profile_muciy_87",tv="_profilePic_muciy_96",nv="_username_muciy_104",St={sideBar:Pg,open:Jg,logo:Kg,closeBtn:Fg,notesNav:Wg,expNav:Ig,selected:$g,profile:ev,profilePic:tv,username:nv},Ir="data:image/webp;base64,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",Lh="data:image/webp;base64,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";function av({isMobile:i,setIsMobile:o,setInNote:u,view:c,setView:s,isOpen:d,setIsOpen:m,changePage:y,page:p,currentUser:h}){return O.useEffect(()=>{function v(){o(window.innerWidth<768)}return window.addEventListener("resize",v),v(),()=>window.removeEventListener("resize",v)},[]),g.jsxs("nav",{className:`${St.sideBar} ${d?St.open:""}`,children:[g.jsx("button",{onClick:()=>m(!1),className:St.closeBtn,children:g.jsx("img",{src:Ir,alt:"Close Button",loading:"lazy"})}),g.jsx("img",{className:St.logo,src:lo,alt:"lockLedgerIcon",loading:"lazy"}),g.jsxs("div",{className:St.notesNav,children:[g.jsx("h3",{children:"Notes:"}),g.jsx("p",{className:`${p==="notes"&&c==="all"?St.selected:""}`,onClick:()=>{y("notes"),s("all"),u(!1),i&&m(!1)},children:"All Notes"}),g.jsx("p",{className:`${p==="notes"&&c==="favorites"?St.selected:""}`,onClick:()=>{y("notes"),s("favorites"),u(!1),i&&m(!1)},children:"Favorites"}),g.jsx("p",{className:`${p==="notes"&&c==="trash"?St.selected:""}`,onClick:()=>{y("notes"),s("trash"),u(!1),i&&m(!1)},children:"Trash"})]}),g.jsxs("div",{className:St.expNav,children:[g.jsx("h3",{children:"Ledger:"}),g.jsx("p",{className:`${p==="ledger"?St.selected:""}`,onClick:()=>{y("ledger"),i&&m(!1)},children:"All Entries"}),g.jsx("p",{children:"History"})]}),g.jsxs("div",{onClick:()=>{y("profile"),i&&m(!1)},className:St.profile,children:[g.jsx("img",{className:St.profilePic,src:Lh,alt:"profilePic",loading:"lazy"}),g.jsx("h3",{className:St.username,children:h.username})]})]})}const lv="_searchContainer_1p8e7_1",iv="_open_1p8e7_11",rv="_humMenuBtn_1p8e7_16",ov="_humMenu_1p8e7_16",uv="_searchInput_1p8e7_27",cv="_installed_1p8e7_40",sv="_installBtn_1p8e7_51",fa={searchContainer:lv,open:iv,humMenuBtn:rv,humMenu:ov,searchInput:uv,installed:cv,installBtn:sv},fv="data:image/webp;base64,UklGRuAEAABXRUJQVlA4WAoAAAAQAAAAuwAAuwAAQUxQSB0CAAAFkLttm9lLb75M5pe1bdverU615r/A1v3W6s3Ktm3btp0zZ/LlW3tm20TEBCD3f+7/XIm7a8NqRUwQW5rplRJQHIuNBQkTWRV/gAZEkwjHSEgbWNJMECprtGJiq82bKXs9NGl8bbjySC//PKwNd46d7Zupk+HQay18s3LE/9zADS7Z1tc3ONrdHc9qwL9HKzZ3xJ0h5z0EDE/ip8XBJ85CLikEmQ0+hZFO8Smw2gqi8JOyNqA0QipljbachYoJYUEIQpKFoKShunsL+ZkblnmQpP8KCVAIwqgo2P/cS2cr1wVwQ5hjJWSIlNFMwsqClAIrIQiTMpDSibYKLBqlrVEgbVvegjTFd2+M2+ifp9XhziqvfDN9Ihx6ppNvDvZ2yb0Gvpk70iWnuvgGd+s7pNcR7xTNbO6Ke6vHwcPL6midMCstosGKdAIt7zQIUBbE2oqGkJDVooU1C5ECQRiKP9jKlkXKl98/BrnIlzRKktKlyQjFIiSwiqyCMH1DhgCFsqWNCAhGEbEtbWOiRLMGy4eYIKTYzl/goaLFdeHKQ33887Q63Dljkm/6b4JDbzXxzZhZLjnXwTe42dghGwZ753hXdzyrAf9u7Vj9d1xqfUbi1jjV+XsX2v6GC22Ba6b9T9xAM3i5cxg+htHvKZOQ0kjwSd6TABHSAiT8lEYlZTIbxpSQIqE0EhSHaUEyQYWguBRS9b5VxYPI/Z/7Px8uAFZQOCCcAgAAsBgAnQEqvAC8AD6RSJ5LJaQioaaxqICwEgllbs+fe8EKd5VqZ7zFs3+G07G99i20CegDxAOmr5gPPZ9AHoAeSB7AHPkfs78H37e+kA5UgPEOyyqlFFFUoooqlFFFUoooqlC8Z93sKUIGY5mr4FlRy2sm2PYjtnIDLGaC0EK3ZaJ3owAAGX4ymqhN0QEP75yWQUbdJM62eR+5G6sS21M8KjCInntbmBrf+EB48vdyTeOH+xjMc/K9OOfllZloooqlFFFUoooqlFFFUoooqdgA/v+DOAAABt/urnqRCy5tof2D+pc92Tech7kx49EPCi/sDFbCYySCtlPwQCfyQxT/XZE1f5PNwV4Pl9POCPVA9zEAkFi2I97euJiVIuuzuILMUgOjT8Bn0RJo+8Bv6KX7R/xWkAeYTIBK92BVkQZd8mRyDv0yBi3G1ZXj7kEDFuRSu9+pkPh6KIXqd3S9V/+Vr3/cSSGvWhQ1fASH9WETnLWLc3aIEVHNivcE6uqdLnfq1P+ID/PzXYaW//p7No8UVQdtQEvSSreu8B404KX4evhMThv3XtLoZmAd0gXL39Gg/vYRG52BEVnrnbnFjbF/2MKxo/csYyxAW/wFq6jvR/eH7JZAYNWzpAoWUIgurPtAHdxxThcfAmGfYfWd9/d6rgwq/5ngCgoZOW/8EsTQgcRQKxNJxy6fD306nYQbsBOvqqn/8Mlc3nMIbrXuuyfqbUD81V+9/wVbPCGC5Q7lJV9Wt90FRM5L8ESrUZSTv2W/Qupyn51U1hrFL8CyTWCGDKUwJRhZMB9e8VPv9uXqQ2rJhnW6wMY/dsdLemHkhj//hPUqK7xE3J8Z59geSDmt5AsTpl83aOr8kpv74z/Ca56SyW/3IAAAAAAAAAA=";let ui=null,si=null;function dv(i){si=i,window.addEventListener("beforeinstallprompt",o=>{o.preventDefault(),ui=o,si&&si(!0)})}async function hv(){if(!ui){console.log("Install prompt not available yet.");return}ui.prompt();const i=await ui.userChoice;console.log("User choice:",i.outcome),ui=null,si&&si(!1)}function bv({isMobile:i,search:o,setSearch:u,isOpen:c,setIsOpen:s}){const[d,m]=O.useState(!1);return O.useEffect(()=>{s(!!i),dv(m)},[]),g.jsxs("div",{className:`${fa.searchContainer} ${c?fa.open:""}`,children:[!c&&g.jsx("button",{onClick:()=>{s(!0)},className:fa.humMenuBtn,children:g.jsx("img",{className:fa.humMenu,src:fv,alt:"Menu",loading:"lazy"})}),g.jsx("input",{value:o,type:"search",onChange:y=>u(y.target.value),className:`${fa.searchInput} ${d?"":fa.installed}`,placeholder:"Search..."}),d&&g.jsx("button",{onClick:hv,className:fa.installBtn})]})}const mv="_loading_ew4b1_7",pv="_content_ew4b1_15",gv="_head_ew4b1_24",vv="_addBtn_ew4b1_36",xv="_disable_ew4b1_55",yv="_notes_ew4b1_59",Av="_notesContent_ew4b1_68",Sv="_recoverBtn_ew4b1_107",Ev="_deleteAllBtn_ew4b1_117",Ov="_noNotesImg_ew4b1_129",Et={loading:mv,content:pv,head:gv,addBtn:vv,disable:xv,notes:yv,notesContent:Av,recoverBtn:Sv,deleteAllBtn:Ev,noNotesImg:Ov},Tv="_container_1nel5_1",wv="_textEdit_1nel5_9",Nv="_notesContent_1nel5_9",Cv="_sideBarClose_1nel5_22",Dv="_toolbar_1nel5_30",_v="_leftSide_1nel5_40",zv="_rightSide_1nel5_57",Mv="_editBtn_1nel5_66",Rv="_deleteBtn_1nel5_66",kv="_discardBtn_1nel5_66",qt={container:Tv,textEdit:wv,notesContent:Nv,sideBarClose:Cv,toolbar:Dv,leftSide:_v,rightSide:zv,editBtn:Mv,deleteBtn:Rv,discardBtn:kv},Bv="_container_10kgc_1",jv="_inputBox_10kgc_15",Uv="_typeBox_10kgc_40",qv="_passwordContainer_10kgc_66",Hv="_btns_10kgc_83",Lv="_formBtn_10kgc_89",Qv="_addBtn_10kgc_100",Yv="_deleteBtn_10kgc_100",Xv="_cancelBtn_10kgc_109",Gv="_errorMsg_10kgc_118",Zv="_invalid_10kgc_125",Vv="_ledgerForm_10kgc_129",ae={container:Bv,inputBox:jv,typeBox:Uv,passwordContainer:qv,btns:Hv,formBtn:Lv,addBtn:Qv,deleteBtn:Yv,cancelBtn:Xv,errorMsg:Gv,invalid:Zv,ledgerForm:Vv};function io({page:i,setAddingNote:o,addNote:u,addTransaction:c,setAddingTransaction:s,transaction:d,isEditing:m,editTransaction:y,isDeleting:p,setIsDeleting:h,deleteNote:v,deleteTransaction:C,currentUser:M,setCurrentUser:B,isChangingPassword:w,setIsChangingPassword:E}){const L=new Date().toISOString().split("T")[0],[q,X]=O.useState(m?d.date:L),[G,ce]=O.useState(m?d.title:""),[J,ue]=O.useState(m?d.type:""),[Y,oe]=O.useState(m?d.amount:0),[V,he]=O.useState({}),[F,ee]=O.useState(""),[ve,Tt]=O.useState(""),[je,R]=O.useState(!1),[Z,te]=O.useState(!1),ye=O.useRef(null);O.useEffect(()=>{ye.current&&ye.current.focus()},[]),O.useEffect(()=>{if(Object.keys(V).length>0){const j=setTimeout(()=>{he({})},3e3);return()=>clearTimeout(j)}},[V]);function A(){if(i==="notes"){const j=al({title:G});Object.keys(j).length>0?he(j):u(M.id,G,"This is a New Note",L,"")}else{const j=al({date:q,title:G,type:J,amount:Y});Object.keys(j).length>0?he(j):m?y(q,G,J,Y):c(q,G,J,Y)}}function Q(j,$){j.preventDefault(),$==="current"?R(se=>!se):te(se=>!se)}async function P(){const j=Cg(F,ve);if(Object.keys(j).length>0)he(j);else if(nl.compareSync(F,M.hashedPassword))if(F===ve){he(se=>({...se,newPassword:"This is the current Password"}));return}else{const se=nl.genSaltSync(10),ie=nl.hashSync(ve,se);E(!1),await qh(M.id,{hashedPassword:ie}),qc("currentUser",{hashedPassword:ie}),B(it=>({...it,hashedPassword:ie}))}else{he(se=>({...se,currentPassword:"Invalid Password"}));return}}return g.jsx("div",{className:ae.container,children:g.jsxs("div",{className:ae.inputBox,children:[i==="notes"&&!p&&g.jsxs("form",{onSubmit:j=>{j.preventDefault(),A()},children:[g.jsx("h4",{children:"Add New Note"}),g.jsx("input",{onChange:j=>ce(j.target.value),ref:ye,placeholder:"Add Title",value:G,type:"text",className:V.title?ae.invalid:""}),V.title&&g.jsxs("p",{className:ae.errorMsg,children:["*",V.title,"*"]}),g.jsxs("div",{className:ae.btns,children:[g.jsx("button",{type:"submit",className:`${ae.formBtn} ${ae.addBtn}`,children:"Add Note"}),g.jsx("button",{onClick:()=>o(!1),className:`${ae.formBtn} ${ae.cancelBtn}`,children:"Cancel"})]})]}),i==="notes"&&p&&g.jsxs("form",{onSubmit:j=>{j.preventDefault(),v()},children:[g.jsx("h4",{children:"Delete Note"}),g.jsxs("div",{className:ae.btns,children:[g.jsx("button",{type:"submit",className:`${ae.formBtn} ${ae.deleteBtn}`,children:"Confirm Delete"}),g.jsx("button",{onClick:()=>h(!1),className:`${ae.formBtn} ${ae.cancelBtn}`,children:"Cancel"})]})]}),i==="ledger"&&!p&&g.jsxs("form",{onSubmit:j=>{j.preventDefault(),A()},className:ae.ledgerForm,children:[g.jsx("h4",{children:"Update Ledger"}),g.jsx("input",{onChange:j=>X(j.target.value),value:q,type:"date"}),g.jsx("input",{onChange:j=>ce(j.target.value),ref:ye,placeholder:"Add Title",value:G,type:"text",className:V.title&&ae.invalid}),V.title&&g.jsxs("p",{className:ae.errorMsg,children:["*",V.title,"*"]}),g.jsxs("select",{value:J,onChange:j=>ue(j.target.value),className:`${ae.typeBox} ${V.type&&ae.invalid}`,name:"type",id:"type",children:[g.jsx("option",{value:"",disabled:!0,children:"Select Type"}),g.jsx("option",{value:"Income",children:"Income"}),g.jsx("option",{value:"Expenses",children:"Expenses"})]}),V.type&&g.jsxs("p",{className:ae.errorMsg,children:["*",V.type,"*"]}),g.jsx("input",{value:Y,onChange:j=>oe(j.target.value),type:"number",placeholder:"$0.00",className:V.amount&&ae.invalid}),V.amount&&g.jsxs("p",{className:ae.errorMsg,children:["*",V.amount,"*"]}),g.jsxs("div",{className:ae.btns,children:[g.jsx("button",{type:"submit",className:`${ae.formBtn} ${ae.addBtn}`,children:"Update"}),g.jsx("button",{onClick:()=>s(!1),className:`${ae.formBtn} ${ae.cancelBtn}`,children:"Cancel"})]})]}),i==="ledger"&&p&&g.jsxs("form",{onSubmit:j=>{j.preventDefault(),C()},children:[g.jsx("h4",{children:"Delete Transaction"}),g.jsxs("div",{className:ae.btns,children:[g.jsx("button",{type:"submit",className:`${ae.formBtn} ${ae.deleteBtn}`,children:"Confirm Delete"}),g.jsx("button",{onClick:()=>{h(!1),s(!1)},className:`${ae.formBtn} ${ae.cancelBtn}`,children:"Cancel"})]})]}),i==="profile"&&w&&g.jsxs("form",{onSubmit:j=>{j.preventDefault(),P()},children:[g.jsx("h4",{children:"Change Password"}),g.jsxs("div",{children:[g.jsx("label",{style:{marginLeft:"5px"},htmlFor:"currentPassword",children:"Current Password"}),g.jsxs("div",{className:ae.passwordContainer,children:[!je&&g.jsx("input",{id:"currentPassword",className:V.currentPassword?ae.invalid:"",placeholder:"Current Password",type:"password",value:F,onChange:j=>ee(j.target.value)}),je&&g.jsx("input",{id:"currentPassword",className:V.currentPassword?ae.invalid:"",placeholder:"Current Password",type:"text",value:F,onChange:j=>ee(j.target.value)}),V.currentPassword&&g.jsxs("p",{className:ae.errorMsg,children:["*",V.currentPassword,"*"]}),g.jsxs("button",{type:"button",onClick:j=>Q(j,"current"),className:ae.showBtn,children:[!je&&g.jsx("img",{className:ae.showIcon,src:Jr,alt:"showIcon"}),je&&g.jsx("img",{className:ae.hideIcon,src:Kr,alt:"showIcon"})]})]})]}),g.jsxs("div",{children:[g.jsx("label",{style:{marginLeft:"5px"},htmlFor:"newPassword",children:"New Password"}),g.jsxs("div",{className:ae.passwordContainer,children:[!Z&&g.jsx("input",{id:"newPassword",className:V.newPassword?ae.invalid:"",placeholder:"New Password",type:"password",value:ve,onChange:j=>Tt(j.target.value)}),Z&&g.jsx("input",{id:"newPassword",className:V.newPassword?ae.invalid:"",placeholder:"New Password",type:"text",value:ve,onChange:j=>Tt(j.target.value)}),V.newPassword&&g.jsxs("p",{className:ae.errorMsg,children:["*",V.newPassword,"*"]}),g.jsxs("button",{type:"button",onClick:j=>Q(j,"new"),className:ae.showBtn,children:[!Z&&g.jsx("img",{className:ae.showIcon,src:Jr,alt:"showIcon"}),Z&&g.jsx("img",{className:ae.hideIcon,src:Kr,alt:"showIcon"})]})]})]}),g.jsxs("div",{className:ae.btns,children:[g.jsx("button",{type:"submit",className:`${ae.formBtn} ${ae.deleteBtn}`,children:"Change"}),g.jsx("button",{onClick:()=>E(!1),className:`${ae.formBtn} ${ae.cancelBtn}`,children:"Cancel"})]})]})]})})}const Pv=["January","February","March","April","May","June","July","August","September","October","November","December"];function sh(i){return i>=10?i:`0${i}`}const fi="data:image/webp;base64,UklGRnYIAABXRUJQVlA4WAoAAAAQAAAAuwAAuwAAQUxQSOoDAAABoLxsnyJJ+s3KfW47t92jn/fk7nZyd3cZT7Kgu6cYd9fburvvFkWRFEUSBEEQBEmSJEn+Fb9Dxy8yM7J+fdvtiJgAWPX/qv//R+XVB7+bKpXMZkIJqVKZpjNptNBKC50ZabSUQkmRKpl+1cYfYjzk6wuLQVfNakTE/DBPT9UYumzyNrrHHE0wfNPkLIETfn7DHtomUBP4BzeHsY+m0WMU7uNlLfbywkbwHpXzIvtQXwrkhXcQ8DSR8pJ5TJVSIpmlUmdaGyXVZJokk2Q6tlbLNNHaSi3FVI+B3FchVodd8LYLn+PkNNJbIPi9uNwQ8JpriZMZ9RgE/wW6txPwhGOBE0n8AMEfR/IcBTcuW8uJdiUQ/FGk93nAfbZKgNPMlQb3HXpe7MOu7sl36FkA49YlAvsFPSvgXLlkWL+h76WsaZcI6hz6XgMrARXScfR9DugXbuPIuLKAtqPvfUBOMsSELx3ObvR9CMgxLk/5sS4TzGPoex2Qd6F7NzvGpUO5BX3vAXofYbmygVyFvi+D50miYke7sjDWoe9H0EbNVRHERei7HbwPEjk7JiTjcxD89xLFCkag58fQcCdhuDIBTNHzG2g6JCQ7yqW7q9DzG2i8nVDsaJftLEPPL6D5kBBcma4Uev4ALS4QKTsijAI9/4A2dxIJO8plu6nRcwStDokpO9qVd2LQU8LKwrhsFzP0NNDyEjFbeYzRU0Db24mUHeUS7Wn0TKH1ASHYka60tRl6Wmg/IiQ7yiXbGqFnBh3GhGBHdjNGTw1dDogpO8ol2vkLPQsIQrIjXLKV79Azg24XCMGOcpk2fkFPCR0vESk7xqVb+AY9C+g6JgQ7wiWbfYaeEjofEDN2VFsL6GkhHMGOcYlGhUcOAc3YUa5Zk5eRVhBizJZ2ySaHPdYFMWTLunSTh6lLIcgBW8aVNTmPuAfCXCASdqRLNwGzTD0IgUbEhCvVCP4x5QiCHRKCHeUyzcIeEIodPReWCMGOcun5INkxrrxfQyLlqujXAqHYUa58Pkh2jMvOB8FV0a+YmLCjXKZfEVvWpVZmwiX7NSSm7EiX6ddeYsSOcel+7SYm7ORz4S+2Chde0quc+I4dS3zcp/eQfIsdQeBr/bkByQmwe5TC433ZjnTCD2gK7emlTR9tijd9FEVbBpu2RNGWeDiIt0cffLT+vfXr1y/EcRRHW6J4fRRtitevH8ZxFJ8W6PkCQ2OP3pfAcTY3rmPp+Lz4DHhO5sMIuB7Ng9PA96Dom7kPWP+j6NN0L7C/JOuiruuqLpaXRVXmVVmUZVnkWVkUdV0XdV1WdV2WeV0VtrRZkWVGfXYVrPp/1f//uQlWUDggZgQAAPAhAJ0BKrwAvAA+kUafS6WjoyGhmSngsBIJTdwt5B/S7/xWu09N4wfcvwHz08weZDyT/svud+fX9r9TXmAfpX+HfYA8wH7S/qr7rn7AfwD3FegB/L/+P1kvoAfrt6Yn7EfA7+2P7ce0F//+sA4VXGinwm7BMf+6w7x74wWT6GHt0BFuYB4CLcwDwEW5gHgBASsDLKpZ+g0cwQ3H+Z1fqEW/sB5Ow/q9Q7vg4KjljoQH8S/QkOyD7doPssucNSzVFDVUmPqsGlJ06XXoAq9vpHOT7A+hDKn/nmDdoI36INNtgMBkdompKF0msrX5PYdzKbKyURrxKDCftqUcBKoS8WJqLoBCAeAlsAYYYCLcwDwEW5gHgIty9AAA/v6ubAAABX/g55+leTu7AhUk27NqASx5Go+vc4K5hv/wxXWvrf7Dry8mHlPf+yCOrVBiV0dZ1FwEacjsDKXQTexUtHUargdp1ewvNqoXeWpw+3MfJCTWGMlx/SCNXMmeoFZ7mmP/nB5cmt6ZLeU5L8ZBxGZ1LH6ULxm4NZhTINRJJQVeB/cDD7JPrfwpe0ZGQZnJhE55O8HFU3veXrh/Mzg3MGo/JeZTHMNVx9V9udSFBjPyslCCncvhVjmyeSdweUgfzw6PSIaapD/kK9VRTLKW2EsOw/W/+UOmnX6WhG3oAdkXYUjTJRA10Wr+0xWL7cDFt+CHYISWVynyCLjgLcc+TEOdTwz3ziA+renZ1vXiHwsJmp7L9EwZWIy2LmzOzrFLkkCmQUyoUyq4o6UJ5mtAGL7K5VuFOUkN/f6ZJGCGU03NdqBpsEZwTrkyX1ufyjT3qymi/TKkJ3vaqo659oIWOEzUjHmFEWpXvFlgOlyg6lPKq/tVWesRPQc6Ie01yM2pJhqIyo0vh4WLNAGXPX1s025PBpW189r5wJcpPDB0ODmQPzEOv7Jo7QJC9a76+nDCQezf0dmA3UboIhk+aQNcE6F8s19uJ2uatraGgSnPQ09/R3qHQuXCPhijKMB969zJQZLyjIkv0KyyZVZgiEHraWhb1/Us7r/4Fn/+////loH//Hl+ic+xb+sPnk85mLyz3GJZePw8PN7uLiyN8lZypJFhhdxF89uPX7MV4slMZ4TJXpMjjJFgjAM54+Yp7tKUolWWbOa4QeeU1WJs+5R3JEhcle+EBOlKHnrNzsi8IlDfdEEkVTnNzy361Fa4WaHXEBE//lA5P8NgqU8j1Nwzcaz3fIdi5ljdBM0Orwf3ichGkffwnosAALWHZCOnoA3wmeslZUc//vJlz/YmAyeD+kad986vN/T0ydp3+4w7Sn+l3HhfE7qm0c/xe70/Z0CzlmUhUvRZnmed6EYyAe8lGFif7/wUE5WBIBw9PT+DgTtfTZ36i0BQzwIj7SFyrdZwQfCk4d5rCjSdtlzNhG3+zwLaP/EMFq9hTmTpoFcNa58ZrhQMZwSM1sh1RVyhd+17Ifng3Os2BpxeyxhBMbyDpBTqzoAAAAAAAAA=",Hc="data:image/webp;base64,UklGRjYFAABXRUJQVlA4WAoAAAAQAAAAuwAAuwAAQUxQSNQBAAABkLNt2zE5d1S6Nyu7s+2kNbpNN+nMynami217be93rPH9iruZuQfHsXeciYgJQMb/Gf//5/j2Gyts+1RLMuzjWStjhpa9YdyIYRcYP9uvgxQ/2TWT6kq7QiUXbjdSDOF2SDGA2/VUe7qVTXUSzH5FdSbMvkF1PcyOUD0HsxdRPQOzh1N9A7N7UC2E26VKKdxupFgMt2sp1sPtfIrNcPsNxQBu36Taz629VOfB7O1UN8DsaVSvweweVB+g8x8ZjY5Jp1blCTr/gCS/pE85xUp0/m8Ysz5dSinWw8AwFovTo5ZiPRxsjcP2dCin2AoLs+MxO3WlFCvh4QeBxal6Q7WnCQgEvknNSaqj4OIOhS9SsYvqMvi4W+Gd5E2lmgUnTyiMJmsI1XPw8pjCrCS1Kw/g5j6FS5LSSvEb/DyqsH8S6inWwtGoUpnYB4oBPL0jsDmRRxTr4eobgdXaGYohfM0WWKhspdgKZ4sF5scbRHW8NSgUWBgnUNbA3HyB+TECitthb6nAJwBaKZ6Awc0CryCf4iNYHAp8QDEfJrcLaiVsbk9CLXwelFgjnF6WSDG83qq1wu2INMQunBR2wvBonBOwPDtGFKbP+FaevQAZ/2f8n/H/76pWUDggPAMAANAcAJ0BKrwAvAA+kUadTCWjoqIi9iiAsBIJY27hcn4AEfz/SdPj7Nw7mvXfPJ2/Cf0H/g9IDzAP0N6QHmA+4DsK+gB/Of+T1gHoAeWJ+r/wL/th+4vwAfsL//805/ACmALr8zJXfv8vvd/2AD2n3iTEmJMSYkxJiTEmJMSYkxJh6a3dxxBnTayTEhnDlILw0X8gjZRfnHiPqPUk5iWne8uajbDNh9lIIBwIW2LXjpJiQ6w1t9EVs9m5SIdUwIjq1jwqR9+ByqF3ZuzYEs3cxzgxWSJVOICQEgJAadYEgJASAkBICQEgJASAkBICQEYAAP72DwAAX+WByVRC9S0j+cGrjpRy843APrkEbMdFxvrSuf64hxP+GoyaNDmtDEbPvh9Llo0y3veRbhcA/NzR0Y8D0r9rELI/fm/cvJONQIzE3mDCqoYAwxmQSVv60higY74AcPwSEp4Tpu/cbEVpKOqkaWl5ey2sT2zVn37EgJt2Xo/xXJyMN726ShE2bhQdvz/XLHXkxckcu7pWXDpX86KoMDRJPCKNbveGXmQe/Q5TG7EffzoLEKwBzpiAoF3AlWA7Vg3TNoQR/iR7+2vH41/DtnX4naAtqYCJV2ECplwh5qBNgQvI57QImEUGInn9IffGD3Jr5ez8Et+UNZ3hdMDQzTm+KHmMg42gfFlYCnV4K8G3p1eCvBgKv8222O/00POj/83C5/A3DWiNmB9JYA1A0yMbqpZ7Zm7Ej9Y0D6XmEku1/+4XuBnVPkuARgkDe/uswkrumiZsZqEh5AMvquoI5AT7ZLa1nC0f+wvkZQR8qA6Kf9ocIE71NCHvwbBjhfop9O7BoAJNBj1VKHH7ZebxGFFEgTmIk1w/FT++dksVrHPcGDSSxYya01WG/gdBXuSNR4kKJv0GH4Ig1B2aZklrCSKFR/+yl155HCfHwf1L2PGTSkj8yzl9QJZVES6K/BEX9ULyA/6yY6eXQAD3wmZ2SpjqUBlPHftsjY8fM9F5/FJ2GX73+va8TYgiZeFI5kDAK4aqSoWecPJ+HF5XXVIBS59TgUYIsII+lgknz7KkWkJ9ETubr1KqPT4JIS3jnzJsP5ZkM6jgAAAAAA==",Qh="data:image/webp;base64,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",gi="https://68befe509c70953d96ee6f2f.mockapi.io/lockLedger";async function Jv(i){try{const o=await fetch(`${gi}/notes?userId=${i}`);if(o.ok)return await o.json()}catch(o){throw new Error("Failed to Fetch Notes",o)}}async function Kv(i,o,u,c,s){try{return(await fetch(`${gi}/notes`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({userId:i,title:o,content:u,date:c,lastEdit:s})})).json()}catch(d){throw new Error("Failed to Create Note",d)}}async function $r(i,o){try{await fetch(`${gi}/notes/${i}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(o)})}catch(u){console.log(u)}}async function Fv(i,o){try{return await(await fetch(`${gi}/notes/${i}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({content:o})})).json()}catch(u){throw new Error("Faild to update Note",u)}}async function Wv(i){try{return await Promise.all(i.filter(o=>o.isDeleted).map(o=>fetch(`${gi}/notes/${o.id}`,{method:"DELETE"}))),!0}catch(o){throw new Error("Failed to Delete Notes",o)}}function Iv({isOpen:i,setInNote:o,page:u,noteId:c,notes:s,setNotes:d,isDeleting:m,setIsDeleting:y,view:p}){const h=s.find(Y=>Y.id===c),v=O.useRef(null),[C,M]=O.useState(!1),[B,w]=O.useState(""),[E,L]=O.useState(""),[q,X]=O.useState(h.lastEdit);O.useEffect(()=>{h&&w(h.content)},[h]),O.useEffect(()=>(document.body.style.overflow="hidden",()=>{document.body.style.overflow=""}),[]),O.useEffect(()=>{if(C&&v.current){const Y=v.current;Y.focus(),Y.setSelectionRange(Y.value.length,Y.value.length)}},[C]);async function G(){if(B!==E){const Y=new Date,oe=Pv[Y.getMonth()],V=Y.getDate();let he=Y.getHours();he=he%12||12;const F=Y.getMinutes(),ee=he>12?"AM":"PM",ve=`${oe} ${V} ${sh(he)}:${sh(F)} ${ee}`;X(ve),h.lastEdit=ve,await $r(h.id,{lastEdit:ve})}}async function ce(){d(Y=>Y.map(oe=>oe.id===h.id?{...oe,isDeleted:!0}:oe)),y(!1),o(!1),await $r(h.id,{isDeleted:!0})}async function J(){C?(w(E||B),h.content=E??B,G(),M(Y=>!Y),await Fv(h.id,E??B)):(L(B),M(Y=>!Y))}function ue(){C&&L(B),M(Y=>!Y)}return g.jsxs("div",{className:qt.container,children:[g.jsxs("div",{className:qt.toolbar,children:[g.jsxs("div",{className:qt.leftSide,children:[g.jsx("h3",{children:h.title}),g.jsx("p",{children:q})]}),g.jsxs("div",{className:qt.rightSide,children:[g.jsx("button",{onClick:J,className:qt.editBtn,disabled:p==="trash",children:g.jsx("img",{src:C?Hc:fi,alt:C?"saveBtn":"editBtn"})}),!C&&g.jsx("button",{onClick:()=>y(!0),className:qt.deleteBtn,disabled:p==="trash",children:g.jsx("img",{src:Qh,alt:"DeleteBtn"})}),C&&g.jsx("button",{onClick:ue,className:qt.discardBtn,children:g.jsx("img",{src:Ir,alt:"Discard changes"})})]})]}),C&&g.jsx("textarea",{ref:v,value:C?E:B,onChange:Y=>L(Y.target.value),className:`${qt.textEdit} ${i?"":qt.sideBarClose}`,name:"notesContent",id:"0",children:B}),!C&&g.jsx("div",{className:`${qt.notesContent} ${i?"":qt.sideBarClose}`,children:B}),m&&g.jsx(io,{deleteNote:ce,page:u,isDeleting:m,setIsDeleting:y})]})}const $v="/Lock-Ledger/assets/emptyStarIcon-B9wxA4AP.webp",ex="/Lock-Ledger/assets/starIcon-Dn3rFRGZ.webp",tx="/Lock-Ledger/assets/restoreIcon-DZH8seFk.webp",Mc="/Lock-Ledger/assets/noNotesFound-BXRLpa-e.webp";function Pe(i,o){o===void 0&&(o={});var u=o.insertAt;if(i&&typeof document<"u"){var c=document.head||document.getElementsByTagName("head")[0],s=document.createElement("style");s.type="text/css",u==="top"&&c.firstChild?c.insertBefore(s,c.firstChild):c.appendChild(s),s.styleSheet?s.styleSheet.cssText=i:s.appendChild(document.createTextNode(i))}}Pe(`.react-loading-indicator-normalize,
[class$=rli-bounding-box] {
  font-size: 1rem;
  display: inline-block;
  box-sizing: border-box;
  text-align: unset;
  isolation: isolate;
}

.rli-d-i-b {
  display: inline-block;
}

.rli-text-format {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: 600;
  width: 90%;
  text-transform: uppercase;
  text-align: center;
  font-size: 0.7em;
  letter-spacing: 0.5px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Avenir Next", "Avenir", "Segoe UI", "Lucida Grande", "Helvetica Neue", "Helvetica", "Fira Sans", "Roboto", "Noto", "Droid Sans", "Cantarell", "Oxygen", "Ubuntu", "Franklin Gothic Medium", "Century Gothic", "Liberation Sans", sans-serif;
}`);var ge=function(){return ge=Object.assign||function(i){for(var o,u=1,c=arguments.length;u<c;u++)for(var s in o=arguments[u])Object.prototype.hasOwnProperty.call(o,s)&&(i[s]=o[s]);return i},ge.apply(this,arguments)};function eo(i){return eo=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(o){return typeof o}:function(o){return o&&typeof Symbol=="function"&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},eo(i)}var nx=/^\s+/,ax=/\s+$/;function W(i,o){if(o=o||{},(i=i||"")instanceof W)return i;if(!(this instanceof W))return new W(i,o);var u=function(c){var s={r:0,g:0,b:0},d=1,m=null,y=null,p=null,h=!1,v=!1;typeof c=="string"&&(c=function(w){w=w.replace(nx,"").replace(ax,"").toLowerCase();var E,L=!1;if(Lc[w])w=Lc[w],L=!0;else if(w=="transparent")return{r:0,g:0,b:0,a:0,format:"name"};return(E=Ht.rgb.exec(w))?{r:E[1],g:E[2],b:E[3]}:(E=Ht.rgba.exec(w))?{r:E[1],g:E[2],b:E[3],a:E[4]}:(E=Ht.hsl.exec(w))?{h:E[1],s:E[2],l:E[3]}:(E=Ht.hsla.exec(w))?{h:E[1],s:E[2],l:E[3],a:E[4]}:(E=Ht.hsv.exec(w))?{h:E[1],s:E[2],v:E[3]}:(E=Ht.hsva.exec(w))?{h:E[1],s:E[2],v:E[3],a:E[4]}:(E=Ht.hex8.exec(w))?{r:Ot(E[1]),g:Ot(E[2]),b:Ot(E[3]),a:ph(E[4]),format:L?"name":"hex8"}:(E=Ht.hex6.exec(w))?{r:Ot(E[1]),g:Ot(E[2]),b:Ot(E[3]),format:L?"name":"hex"}:(E=Ht.hex4.exec(w))?{r:Ot(E[1]+""+E[1]),g:Ot(E[2]+""+E[2]),b:Ot(E[3]+""+E[3]),a:ph(E[4]+""+E[4]),format:L?"name":"hex8"}:(E=Ht.hex3.exec(w))?{r:Ot(E[1]+""+E[1]),g:Ot(E[2]+""+E[2]),b:Ot(E[3]+""+E[3]),format:L?"name":"hex"}:!1}(c)),eo(c)=="object"&&(bn(c.r)&&bn(c.g)&&bn(c.b)?(C=c.r,M=c.g,B=c.b,s={r:255*ke(C,255),g:255*ke(M,255),b:255*ke(B,255)},h=!0,v=String(c.r).substr(-1)==="%"?"prgb":"rgb"):bn(c.h)&&bn(c.s)&&bn(c.v)?(m=ci(c.s),y=ci(c.v),s=function(w,E,L){w=6*ke(w,360),E=ke(E,100),L=ke(L,100);var q=Math.floor(w),X=w-q,G=L*(1-E),ce=L*(1-X*E),J=L*(1-(1-X)*E),ue=q%6,Y=[L,ce,G,G,J,L][ue],oe=[J,L,L,ce,G,G][ue],V=[G,G,J,L,L,ce][ue];return{r:255*Y,g:255*oe,b:255*V}}(c.h,m,y),h=!0,v="hsv"):bn(c.h)&&bn(c.s)&&bn(c.l)&&(m=ci(c.s),p=ci(c.l),s=function(w,E,L){var q,X,G;function ce(Y,oe,V){return V<0&&(V+=1),V>1&&(V-=1),V<1/6?Y+6*(oe-Y)*V:V<.5?oe:V<2/3?Y+(oe-Y)*(2/3-V)*6:Y}if(w=ke(w,360),E=ke(E,100),L=ke(L,100),E===0)q=X=G=L;else{var J=L<.5?L*(1+E):L+E-L*E,ue=2*L-J;q=ce(ue,J,w+1/3),X=ce(ue,J,w),G=ce(ue,J,w-1/3)}return{r:255*q,g:255*X,b:255*G}}(c.h,m,p),h=!0,v="hsl"),c.hasOwnProperty("a")&&(d=c.a));var C,M,B;return d=Yh(d),{ok:h,format:c.format||v,r:Math.min(255,Math.max(s.r,0)),g:Math.min(255,Math.max(s.g,0)),b:Math.min(255,Math.max(s.b,0)),a:d}}(i);this._originalInput=i,this._r=u.r,this._g=u.g,this._b=u.b,this._a=u.a,this._roundA=Math.round(100*this._a)/100,this._format=o.format||u.format,this._gradientType=o.gradientType,this._r<1&&(this._r=Math.round(this._r)),this._g<1&&(this._g=Math.round(this._g)),this._b<1&&(this._b=Math.round(this._b)),this._ok=u.ok}function fh(i,o,u){i=ke(i,255),o=ke(o,255),u=ke(u,255);var c,s,d=Math.max(i,o,u),m=Math.min(i,o,u),y=(d+m)/2;if(d==m)c=s=0;else{var p=d-m;switch(s=y>.5?p/(2-d-m):p/(d+m),d){case i:c=(o-u)/p+(o<u?6:0);break;case o:c=(u-i)/p+2;break;case u:c=(i-o)/p+4}c/=6}return{h:c,s,l:y}}function dh(i,o,u){i=ke(i,255),o=ke(o,255),u=ke(u,255);var c,s,d=Math.max(i,o,u),m=Math.min(i,o,u),y=d,p=d-m;if(s=d===0?0:p/d,d==m)c=0;else{switch(d){case i:c=(o-u)/p+(o<u?6:0);break;case o:c=(u-i)/p+2;break;case u:c=(i-o)/p+4}c/=6}return{h:c,s,v:y}}function hh(i,o,u,c){var s=[Qt(Math.round(i).toString(16)),Qt(Math.round(o).toString(16)),Qt(Math.round(u).toString(16))];return c&&s[0].charAt(0)==s[0].charAt(1)&&s[1].charAt(0)==s[1].charAt(1)&&s[2].charAt(0)==s[2].charAt(1)?s[0].charAt(0)+s[1].charAt(0)+s[2].charAt(0):s.join("")}function bh(i,o,u,c){return[Qt(Xh(c)),Qt(Math.round(i).toString(16)),Qt(Math.round(o).toString(16)),Qt(Math.round(u).toString(16))].join("")}function lx(i,o){o=o===0?0:o||10;var u=W(i).toHsl();return u.s-=o/100,u.s=ro(u.s),W(u)}function ix(i,o){o=o===0?0:o||10;var u=W(i).toHsl();return u.s+=o/100,u.s=ro(u.s),W(u)}function rx(i){return W(i).desaturate(100)}function ox(i,o){o=o===0?0:o||10;var u=W(i).toHsl();return u.l+=o/100,u.l=ro(u.l),W(u)}function ux(i,o){o=o===0?0:o||10;var u=W(i).toRgb();return u.r=Math.max(0,Math.min(255,u.r-Math.round(-o/100*255))),u.g=Math.max(0,Math.min(255,u.g-Math.round(-o/100*255))),u.b=Math.max(0,Math.min(255,u.b-Math.round(-o/100*255))),W(u)}function cx(i,o){o=o===0?0:o||10;var u=W(i).toHsl();return u.l-=o/100,u.l=ro(u.l),W(u)}function sx(i,o){var u=W(i).toHsl(),c=(u.h+o)%360;return u.h=c<0?360+c:c,W(u)}function fx(i){var o=W(i).toHsl();return o.h=(o.h+180)%360,W(o)}function mh(i,o){if(isNaN(o)||o<=0)throw new Error("Argument to polyad must be a positive number");for(var u=W(i).toHsl(),c=[W(i)],s=360/o,d=1;d<o;d++)c.push(W({h:(u.h+d*s)%360,s:u.s,l:u.l}));return c}function dx(i){var o=W(i).toHsl(),u=o.h;return[W(i),W({h:(u+72)%360,s:o.s,l:o.l}),W({h:(u+216)%360,s:o.s,l:o.l})]}function hx(i,o,u){o=o||6,u=u||30;var c=W(i).toHsl(),s=360/u,d=[W(i)];for(c.h=(c.h-(s*o>>1)+720)%360;--o;)c.h=(c.h+s)%360,d.push(W(c));return d}function bx(i,o){o=o||6;for(var u=W(i).toHsv(),c=u.h,s=u.s,d=u.v,m=[],y=1/o;o--;)m.push(W({h:c,s,v:d})),d=(d+y)%1;return m}W.prototype={isDark:function(){return this.getBrightness()<128},isLight:function(){return!this.isDark()},isValid:function(){return this._ok},getOriginalInput:function(){return this._originalInput},getFormat:function(){return this._format},getAlpha:function(){return this._a},getBrightness:function(){var i=this.toRgb();return(299*i.r+587*i.g+114*i.b)/1e3},getLuminance:function(){var i,o,u,c=this.toRgb();return i=c.r/255,o=c.g/255,u=c.b/255,.2126*(i<=.03928?i/12.92:Math.pow((i+.055)/1.055,2.4))+.7152*(o<=.03928?o/12.92:Math.pow((o+.055)/1.055,2.4))+.0722*(u<=.03928?u/12.92:Math.pow((u+.055)/1.055,2.4))},setAlpha:function(i){return this._a=Yh(i),this._roundA=Math.round(100*this._a)/100,this},toHsv:function(){var i=dh(this._r,this._g,this._b);return{h:360*i.h,s:i.s,v:i.v,a:this._a}},toHsvString:function(){var i=dh(this._r,this._g,this._b),o=Math.round(360*i.h),u=Math.round(100*i.s),c=Math.round(100*i.v);return this._a==1?"hsv("+o+", "+u+"%, "+c+"%)":"hsva("+o+", "+u+"%, "+c+"%, "+this._roundA+")"},toHsl:function(){var i=fh(this._r,this._g,this._b);return{h:360*i.h,s:i.s,l:i.l,a:this._a}},toHslString:function(){var i=fh(this._r,this._g,this._b),o=Math.round(360*i.h),u=Math.round(100*i.s),c=Math.round(100*i.l);return this._a==1?"hsl("+o+", "+u+"%, "+c+"%)":"hsla("+o+", "+u+"%, "+c+"%, "+this._roundA+")"},toHex:function(i){return hh(this._r,this._g,this._b,i)},toHexString:function(i){return"#"+this.toHex(i)},toHex8:function(i){return function(o,u,c,s,d){var m=[Qt(Math.round(o).toString(16)),Qt(Math.round(u).toString(16)),Qt(Math.round(c).toString(16)),Qt(Xh(s))];return d&&m[0].charAt(0)==m[0].charAt(1)&&m[1].charAt(0)==m[1].charAt(1)&&m[2].charAt(0)==m[2].charAt(1)&&m[3].charAt(0)==m[3].charAt(1)?m[0].charAt(0)+m[1].charAt(0)+m[2].charAt(0)+m[3].charAt(0):m.join("")}(this._r,this._g,this._b,this._a,i)},toHex8String:function(i){return"#"+this.toHex8(i)},toRgb:function(){return{r:Math.round(this._r),g:Math.round(this._g),b:Math.round(this._b),a:this._a}},toRgbString:function(){return this._a==1?"rgb("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+")":"rgba("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+", "+this._roundA+")"},toPercentageRgb:function(){return{r:Math.round(100*ke(this._r,255))+"%",g:Math.round(100*ke(this._g,255))+"%",b:Math.round(100*ke(this._b,255))+"%",a:this._a}},toPercentageRgbString:function(){return this._a==1?"rgb("+Math.round(100*ke(this._r,255))+"%, "+Math.round(100*ke(this._g,255))+"%, "+Math.round(100*ke(this._b,255))+"%)":"rgba("+Math.round(100*ke(this._r,255))+"%, "+Math.round(100*ke(this._g,255))+"%, "+Math.round(100*ke(this._b,255))+"%, "+this._roundA+")"},toName:function(){return this._a===0?"transparent":!(this._a<1)&&(mx[hh(this._r,this._g,this._b,!0)]||!1)},toFilter:function(i){var o="#"+bh(this._r,this._g,this._b,this._a),u=o,c=this._gradientType?"GradientType = 1, ":"";if(i){var s=W(i);u="#"+bh(s._r,s._g,s._b,s._a)}return"progid:DXImageTransform.Microsoft.gradient("+c+"startColorstr="+o+",endColorstr="+u+")"},toString:function(i){var o=!!i;i=i||this._format;var u=!1,c=this._a<1&&this._a>=0;return o||!c||i!=="hex"&&i!=="hex6"&&i!=="hex3"&&i!=="hex4"&&i!=="hex8"&&i!=="name"?(i==="rgb"&&(u=this.toRgbString()),i==="prgb"&&(u=this.toPercentageRgbString()),i!=="hex"&&i!=="hex6"||(u=this.toHexString()),i==="hex3"&&(u=this.toHexString(!0)),i==="hex4"&&(u=this.toHex8String(!0)),i==="hex8"&&(u=this.toHex8String()),i==="name"&&(u=this.toName()),i==="hsl"&&(u=this.toHslString()),i==="hsv"&&(u=this.toHsvString()),u||this.toHexString()):i==="name"&&this._a===0?this.toName():this.toRgbString()},clone:function(){return W(this.toString())},_applyModification:function(i,o){var u=i.apply(null,[this].concat([].slice.call(o)));return this._r=u._r,this._g=u._g,this._b=u._b,this.setAlpha(u._a),this},lighten:function(){return this._applyModification(ox,arguments)},brighten:function(){return this._applyModification(ux,arguments)},darken:function(){return this._applyModification(cx,arguments)},desaturate:function(){return this._applyModification(lx,arguments)},saturate:function(){return this._applyModification(ix,arguments)},greyscale:function(){return this._applyModification(rx,arguments)},spin:function(){return this._applyModification(sx,arguments)},_applyCombination:function(i,o){return i.apply(null,[this].concat([].slice.call(o)))},analogous:function(){return this._applyCombination(hx,arguments)},complement:function(){return this._applyCombination(fx,arguments)},monochromatic:function(){return this._applyCombination(bx,arguments)},splitcomplement:function(){return this._applyCombination(dx,arguments)},triad:function(){return this._applyCombination(mh,[3])},tetrad:function(){return this._applyCombination(mh,[4])}},W.fromRatio=function(i,o){if(eo(i)=="object"){var u={};for(var c in i)i.hasOwnProperty(c)&&(u[c]=c==="a"?i[c]:ci(i[c]));i=u}return W(i,o)},W.equals=function(i,o){return!(!i||!o)&&W(i).toRgbString()==W(o).toRgbString()},W.random=function(){return W.fromRatio({r:Math.random(),g:Math.random(),b:Math.random()})},W.mix=function(i,o,u){u=u===0?0:u||50;var c=W(i).toRgb(),s=W(o).toRgb(),d=u/100;return W({r:(s.r-c.r)*d+c.r,g:(s.g-c.g)*d+c.g,b:(s.b-c.b)*d+c.b,a:(s.a-c.a)*d+c.a})},W.readability=function(i,o){var u=W(i),c=W(o);return(Math.max(u.getLuminance(),c.getLuminance())+.05)/(Math.min(u.getLuminance(),c.getLuminance())+.05)},W.isReadable=function(i,o,u){var c,s,d=W.readability(i,o);switch(s=!1,(c=function(m){var y,p;return y=((m=m||{level:"AA",size:"small"}).level||"AA").toUpperCase(),p=(m.size||"small").toLowerCase(),y!=="AA"&&y!=="AAA"&&(y="AA"),p!=="small"&&p!=="large"&&(p="small"),{level:y,size:p}}(u)).level+c.size){case"AAsmall":case"AAAlarge":s=d>=4.5;break;case"AAlarge":s=d>=3;break;case"AAAsmall":s=d>=7}return s},W.mostReadable=function(i,o,u){var c,s,d,m,y=null,p=0;s=(u=u||{}).includeFallbackColors,d=u.level,m=u.size;for(var h=0;h<o.length;h++)(c=W.readability(i,o[h]))>p&&(p=c,y=W(o[h]));return W.isReadable(i,y,{level:d,size:m})||!s?y:(u.includeFallbackColors=!1,W.mostReadable(i,["#fff","#000"],u))};var Lc=W.names={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"},mx=W.hexNames=function(i){var o={};for(var u in i)i.hasOwnProperty(u)&&(o[i[u]]=u);return o}(Lc);function Yh(i){return i=parseFloat(i),(isNaN(i)||i<0||i>1)&&(i=1),i}function ke(i,o){(function(c){return typeof c=="string"&&c.indexOf(".")!=-1&&parseFloat(c)===1})(i)&&(i="100%");var u=function(c){return typeof c=="string"&&c.indexOf("%")!=-1}(i);return i=Math.min(o,Math.max(0,parseFloat(i))),u&&(i=parseInt(i*o,10)/100),Math.abs(i-o)<1e-6?1:i%o/parseFloat(o)}function ro(i){return Math.min(1,Math.max(0,i))}function Ot(i){return parseInt(i,16)}function Qt(i){return i.length==1?"0"+i:""+i}function ci(i){return i<=1&&(i=100*i+"%"),i}function Xh(i){return Math.round(255*parseFloat(i)).toString(16)}function ph(i){return Ot(i)/255}var Gn,qr,Hr,Ht=(qr="[\\s|\\(]+("+(Gn="(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)")+")[,|\\s]+("+Gn+")[,|\\s]+("+Gn+")\\s*\\)?",Hr="[\\s|\\(]+("+Gn+")[,|\\s]+("+Gn+")[,|\\s]+("+Gn+")[,|\\s]+("+Gn+")\\s*\\)?",{CSS_UNIT:new RegExp(Gn),rgb:new RegExp("rgb"+qr),rgba:new RegExp("rgba"+Hr),hsl:new RegExp("hsl"+qr),hsla:new RegExp("hsla"+Hr),hsv:new RegExp("hsv"+qr),hsva:new RegExp("hsva"+Hr),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/});function bn(i){return!!Ht.CSS_UNIT.exec(i)}var vi=function(i,o){var u=(typeof i=="string"?parseInt(i):i)||0;if(u>=-5&&u<=5){var c=u,s=parseFloat(o),d=s+c*(s/5)*-1;return(d==0||d<=Number.EPSILON)&&(d=.1),{animationPeriod:d+"s"}}return{animationPeriod:o}},xi=function(i,o){var u=i||{},c="";switch(o){case"small":c="12px";break;case"medium":c="16px";break;case"large":c="20px";break;default:c=void 0}var s={};if(u.fontSize){var d=u.fontSize;s=function(m,y){var p={};for(var h in m)Object.prototype.hasOwnProperty.call(m,h)&&y.indexOf(h)<0&&(p[h]=m[h]);if(m!=null&&typeof Object.getOwnPropertySymbols=="function"){var v=0;for(h=Object.getOwnPropertySymbols(m);v<h.length;v++)y.indexOf(h[v])<0&&Object.prototype.propertyIsEnumerable.call(m,h[v])&&(p[h[v]]=m[h[v]])}return p}(u,["fontSize"]),c=d}return{fontSize:c,styles:s}},px={color:"currentColor",mixBlendMode:"difference",width:"unset",display:"block",paddingTop:"2px"},yi=function(i){var o=i.className,u=i.text,c=i.textColor,s=i.staticText,d=i.style;return u?Ce.createElement("span",{className:"rli-d-i-b rli-text-format ".concat(o||"").trim(),style:ge(ge(ge({},s&&px),c&&{color:c,mixBlendMode:"unset"}),d&&d)},typeof u=="string"&&u.length?u:"loading"):null},mn="rgb(50, 205, 50)";function Ai(i,o){if(o===void 0&&(o=0),i.length===0)throw new Error("Input array cannot be empty!");var u=[];return function c(s,d){return d===void 0&&(d=0),u.push.apply(u,s),u.length<d&&c(u,d),u.slice(0,d)}(i,o)}Pe(`.atom-rli-bounding-box {
  --atom-phase1-rgb: 50, 205, 50;
  color: rgba(var(--atom-phase1-rgb), 1);
  font-size: 16px;
  position: relative;
  text-align: unset;
  isolation: isolate;
}
.atom-rli-bounding-box .atom-indicator {
  width: 6em;
  height: 6em;
  position: relative;
  perspective: 6em;
  overflow: hidden;
  color: rgba(var(--atom-phase1-rgb), 1);
  animation: calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite uxlv7gg;
}
.atom-rli-bounding-box .atom-indicator::after, .atom-rli-bounding-box .atom-indicator::before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 0.48em;
  height: 0.48em;
  margin: auto;
  border-radius: 50%;
  background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase1-rgb), 0.1), rgba(var(--atom-phase1-rgb), 0.3) 37%, rgba(var(--atom-phase1-rgb), 1) 100%);
  animation: calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite uxlv7eg;
}
.atom-rli-bounding-box .atom-indicator::before {
  filter: drop-shadow(0px 0px 0.0625em currentColor);
}
.atom-rli-bounding-box .atom-indicator .electron-orbit {
  color: rgba(var(--atom-phase1-rgb), 0.85);
  border: 0;
  border-left: 0.4em solid currentColor;
  box-sizing: border-box;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  width: 4.8em;
  height: 4.8em;
  background-color: transparent;
  border-radius: 50%;
  transform-style: preserve-3d;
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, linear) infinite uxlv7fj, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite uxlv7gy;
}
.atom-rli-bounding-box .atom-indicator .electron-orbit::after {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  border-radius: 50%;
  color: rgba(var(--atom-phase1-rgb), 0.18);
  animation: calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite uxlv7hv;
  border: 0.125em solid currentColor;
}
.atom-rli-bounding-box .atom-indicator .electron-orbit::before {
  content: "";
  width: 0.192em;
  height: 0.192em;
  position: absolute;
  border-radius: 50%;
  top: -0.096em;
  right: 0;
  bottom: 0;
  left: 0;
  margin: 0 auto;
  color: rgba(var(--atom-phase1-rgb), 1);
  box-shadow: 0px 0px 0.0625em 0.0625em currentColor, 0px 0px 0.0625em 0.125em currentColor;
  background-color: currentColor;
  transform: rotateY(-70deg);
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, linear) infinite uxlv7ew, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite uxlv7gg;
}
.atom-rli-bounding-box .atom-indicator .electron-orbit:nth-of-type(1) {
  --orbit-vector-factor: -1;
  transform: rotateY(65deg) rotateX(calc(54deg * var(--orbit-vector-factor)));
}
.atom-rli-bounding-box .atom-indicator .electron-orbit:nth-of-type(2) {
  --orbit-vector-factor: 1;
  transform: rotateY(65deg) rotateX(calc(54deg * var(--orbit-vector-factor)));
}
.atom-rli-bounding-box .atom-indicator .electron-orbit:nth-of-type(3) {
  --orbit-vector-factor: 0;
  transform: rotateY(65deg) rotateX(calc(54deg * var(--orbit-vector-factor)));
  animation-delay: calc(var(--rli-animation-duration, 1s) * 0.5 * -1), calc(var(--rli-animation-duration, 1s) * 4 * -1);
}
.atom-rli-bounding-box .atom-indicator .electron-orbit:nth-of-type(3)::before {
  animation-delay: calc(var(--rli-animation-duration, 1s) * 0.5 * -1), calc(var(--rli-animation-duration, 1s) * 4 * -1);
}
.atom-rli-bounding-box .atom-text {
  color: currentColor;
  mix-blend-mode: difference;
  width: unset;
  display: block;
}

@property --atom-phase1-rgb {
  syntax: "<number>#";
  inherits: true;
  initial-value: 50, 205, 50;
}
@property --atom-phase2-rgb {
  syntax: "<number>#";
  inherits: true;
  initial-value: 50, 205, 50;
}
@property --atom-phase3-rgb {
  syntax: "<number>#";
  inherits: true;
  initial-value: 50, 205, 50;
}
@property --atom-phase4-rgb {
  syntax: "<number>#";
  inherits: true;
  initial-value: 50, 205, 50;
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes uxlv7fj {
  from {
    transform: rotateY(70deg) rotateX(calc(54deg * var(--orbit-vector-factor))) rotateZ(0deg);
  }
  to {
    transform: rotateY(70deg) rotateX(calc(54deg * var(--orbit-vector-factor))) rotateZ(360deg);
  }
}
@keyframes uxlv7ew {
  from {
    transform: rotateY(-70deg) rotateX(0deg);
  }
  to {
    transform: rotateY(-70deg) rotateX(-360deg);
  }
}
@keyframes uxlv7eg {
  100%, 0% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase1-rgb), 0.1), rgba(var(--atom-phase1-rgb), 0.3) 37%, rgba(var(--atom-phase1-rgb), 1) 100%);
  }
  20% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase1-rgb), 0.1), rgba(var(--atom-phase1-rgb), 0.3) 37%, rgba(var(--atom-phase1-rgb), 1) 100%);
  }
  25% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  45% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  50% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  70% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  75% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  95% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
}
@keyframes uxlv7gg {
  100%, 0% {
    color: rgba(var(--atom-phase1-rgb), 1);
  }
  20% {
    color: rgba(var(--atom-phase1-rgb), 1);
  }
  25% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 1);
  }
  45% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 1);
  }
  50% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 1);
  }
  70% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 1);
  }
  75% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 1);
  }
  95% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 1);
  }
}
@keyframes uxlv7gy {
  100%, 0% {
    color: rgba(var(--atom-phase1-rgb), 0.85);
  }
  20% {
    color: rgba(var(--atom-phase1-rgb), 0.85);
  }
  25% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  45% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  50% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  70% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  75% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  95% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.85);
  }
}
@keyframes uxlv7hv {
  100%, 0% {
    color: rgba(var(--atom-phase1-rgb), 0.18);
  }
  20% {
    color: rgba(var(--atom-phase1-rgb), 0.18);
  }
  25% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  45% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  50% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  70% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  75% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  95% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.18);
  }
}`);W(mn).toRgb();Array.from({length:4},function(i,o){return"--atom-phase".concat(o+1,"-rgb")});Pe(`.commet-rli-bounding-box {
  --commet-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  width: 6.85em;
  height: 6.85em;
  overflow: hidden;
  display: inline-block;
  box-sizing: border-box;
  position: relative;
  isolation: isolate;
}
.commet-rli-bounding-box .commet-indicator {
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  box-sizing: border-box;
  width: 6em;
  height: 6em;
  color: var(--commet-phase1-color);
  display: inline-block;
  isolation: isolate;
  position: absolute;
  z-index: 0;
  animation: calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, cubic-bezier(0.08, 0.03, 0.91, 0.93)) infinite uxlv7cp;
}
.commet-rli-bounding-box .commet-indicator .commet-box {
  position: absolute;
  display: inline-block;
  top: 0;
  right: 0;
  bottom: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  animation: uxlv7bx var(--rli-animation-duration, 1.2s) var(--rli-animation-function, cubic-bezier(0.08, 0.03, 0.91, 0.93)) infinite;
}
.commet-rli-bounding-box .commet-indicator .commet-box:nth-of-type(1) {
  width: 100%;
  height: 100%;
  animation-direction: normal;
}
.commet-rli-bounding-box .commet-indicator .commet-box:nth-of-type(2) {
  width: 70%;
  height: 70%;
  animation-direction: reverse;
}
.commet-rli-bounding-box .commet-indicator .commet-box .commetball-box {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  bottom: 0;
  left: 0;
  display: inline-block;
}
.commet-rli-bounding-box .commet-indicator .commet-box .commetball-box::before {
  content: "";
  width: 0.5em;
  height: 0.5em;
  border-radius: 50%;
  background-color: currentColor;
  position: absolute;
  top: -0.125em;
  left: 50%;
  transform: translateX(-50%);
  box-shadow: 0 0 0.2em 0em currentColor, 0 0 0.6em 0em currentColor;
}
.commet-rli-bounding-box .commet-indicator .commet-box .commet-trail {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  bottom: 0;
  left: 0;
  border-radius: 50%;
  box-sizing: border-box;
  border-style: solid;
}
.commet-rli-bounding-box .commet-indicator .commet-box .commet-trail.trail1 {
  border-color: currentColor transparent transparent currentColor;
  border-width: 0.25em 0.25em 0 0;
  transform: rotateZ(-45deg);
}
.commet-rli-bounding-box .commet-indicator .commet-box .commet-trail.trail2 {
  border-color: currentColor currentColor transparent transparent;
  border-width: 0.25em 0 0 0.25em;
  transform: rotateZ(45deg);
}
.commet-rli-bounding-box .commet-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: var(--commet-phase1-color);
}

@property --commet-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --commet-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --commet-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --commet-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes uxlv7bx {
  to {
    transform: rotate(1turn);
  }
}
@keyframes uxlv7cp {
  100%, 0% {
    color: var(--commet-phase1-color);
  }
  20% {
    color: var(--commet-phase1-color);
  }
  25% {
    color: var(--commet-phase2-color, var(--commet-phase1-color));
  }
  45% {
    color: var(--commet-phase2-color, var(--commet-phase1-color));
  }
  50% {
    color: var(--commet-phase3-color, var(--commet-phase1-color));
  }
  70% {
    color: var(--commet-phase3-color, var(--commet-phase1-color));
  }
  75% {
    color: var(--commet-phase4-color, var(--commet-phase1-color));
  }
  95% {
    color: var(--commet-phase4-color, var(--commet-phase1-color));
  }
}`);Array.from({length:4},function(i,o){return"--commet-phase".concat(o+1,"-color")});Pe(`.OP-annulus-rli-bounding-box {
  --OP-annulus-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  display: inline-block;
}
.OP-annulus-rli-bounding-box .OP-annulus-indicator {
  width: 5em;
  height: 5em;
  color: var(--OP-annulus-phase1-color);
  display: inline-block;
  position: relative;
  z-index: 0;
}
.OP-annulus-rli-bounding-box .OP-annulus-indicator .whirl {
  animation: uxlv7n7 calc(var(--rli-animation-duration, 1.5s) * 1.33) linear infinite;
  height: 100%;
  transform-origin: center center;
  width: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
}
.OP-annulus-rli-bounding-box .OP-annulus-indicator .path {
  stroke-dasharray: 1, 125;
  stroke-dashoffset: 0;
  animation: var(--rli-animation-duration, 1.5s) var(--rli-animation-function, ease-in-out) infinite uxlv7oa, calc(var(--rli-animation-duration, 1.5s) * 4) var(--rli-animation-function, ease-in-out) infinite uxlv7p5;
  stroke-linecap: round;
}
.OP-annulus-rli-bounding-box .OP-annulus-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}

@property --OP-annulus-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.5s;
}
@keyframes uxlv7n7 {
  100% {
    transform: rotate(360deg);
  }
}
@keyframes uxlv7oa {
  0% {
    stroke-dasharray: 1, 125;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 98, 125;
    stroke-dashoffset: -35px;
  }
  100% {
    stroke-dasharray: 98, 125;
    stroke-dashoffset: -124px;
  }
}
@keyframes uxlv7p5 {
  100%, 0% {
    stroke: var(--OP-annulus-phase1-color);
  }
  22% {
    stroke: var(--OP-annulus-phase1-color);
  }
  25% {
    stroke: var(--OP-annulus-phase2-color, var(--OP-annulus-phase1-color));
  }
  42% {
    stroke: var(--OP-annulus-phase2-color, var(--OP-annulus-phase1-color));
  }
  50% {
    stroke: var(--OP-annulus-phase3-color, var(--OP-annulus-phase1-color));
  }
  72% {
    stroke: var(--OP-annulus-phase3-color, var(--OP-annulus-phase1-color));
  }
  75% {
    stroke: var(--OP-annulus-phase4-color, var(--OP-annulus-phase1-color));
  }
  97% {
    stroke: var(--OP-annulus-phase4-color, var(--OP-annulus-phase1-color));
  }
}`);var Lr=Array.from({length:4},function(i,o){return"--OP-annulus-phase".concat(o+1,"-color")}),gx=function(i){var o,u=xi(i?.style,i?.size),c=u.styles,s=u.fontSize,d=i?.easing,m=vi(i?.speedPlus,"1.5s").animationPeriod,y=function(h){var v={},C=Lr.length;if(h instanceof Array){for(var M=Ai(h,C),B=0;B<M.length&&!(B>=4);B++)v[Lr[B]]=M[B];return v}try{if(typeof h!="string")throw new Error("Color String expected");for(var w=0;w<C;w++)v[Lr[w]]=h}catch(E){for(E instanceof Error?console.warn("[".concat(E.message,']: Received "').concat(typeof h,'" instead with value, ').concat(JSON.stringify(h))):console.warn("".concat(JSON.stringify(h),' received in <OrbitProgress variant="disc" /> indicator cannot be processed. Using default instead!')),w=0;w<C;w++)v[Lr[w]]=mn}return v}((o=i?.color)!==null&&o!==void 0?o:""),p=i?.dense?4.3:2.9;return Ce.createElement("span",{className:"rli-d-i-b OP-annulus-rli-bounding-box",style:ge(ge(ge(ge(ge({},s&&{fontSize:s}),m&&{"--rli-animation-duration":m}),d&&{"--rli-animation-function":d}),y),c),role:"status","aria-live":"polite","aria-label":"Loading"},Ce.createElement("span",{className:"rli-d-i-b OP-annulus-indicator"},Ce.createElement("svg",{className:"whirl",viewBox:"25 25 50 50"},Ce.createElement("circle",{className:"path",cx:"50",cy:"50",r:"20",fill:"none",strokeWidth:p,strokeMiterlimit:"10"})),Ce.createElement(yi,{className:"OP-annulus-text",text:i?.text,textColor:i?.textColor})))};function Rc(i){return i&&i.Math===Math&&i}Pe(`.OP-dotted-rli-bounding-box {
  --OP-dotted-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  box-sizing: border-box;
  display: inline-block;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator {
  width: 5em;
  height: 5em;
  color: var(--OP-dotted-phase1-color);
  display: inline-block;
  position: relative;
  z-index: 0;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .OP-dotted-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder .dot {
  display: block;
  margin: 0 auto;
  width: 15%;
  height: 15%;
  background-color: currentColor;
  border-radius: 50%;
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, ease-in-out) infinite uxlv7nu, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, ease-in-out) infinite uxlv7ol;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(1) {
  transform: rotate(0deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(1) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 12 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(2) {
  transform: rotate(30deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(2) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 11 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(3) {
  transform: rotate(60deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(3) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 10 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(4) {
  transform: rotate(90deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(4) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 9 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(5) {
  transform: rotate(120deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(5) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 8 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(6) {
  transform: rotate(150deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(6) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 7 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(7) {
  transform: rotate(180deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(7) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 6 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(8) {
  transform: rotate(210deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(8) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 5 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(9) {
  transform: rotate(240deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(9) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 4 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(10) {
  transform: rotate(270deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(10) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 3 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(11) {
  transform: rotate(300deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(11) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 2 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(12) {
  transform: rotate(330deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(12) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 1 * -1);
}

@property --OP-dotted-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-dotted-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-dotted-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-dotted-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes uxlv7nu {
  0%, 39%, 100% {
    opacity: 0;
  }
  40% {
    opacity: 1;
  }
}
@keyframes uxlv7ol {
  100%, 0% {
    background-color: var(--OP-dotted-phase1-color);
  }
  22% {
    background-color: var(--OP-dotted-phase1-color);
  }
  25% {
    background-color: var(--OP-dotted-phase2-color, var(--OP-dotted-phase1-color));
  }
  47% {
    background-color: var(--OP-dotted-phase2-color, var(--OP-dotted-phase1-color));
  }
  50% {
    background-color: var(--OP-dotted-phase3-color, var(--OP-dotted-phase1-color));
  }
  72% {
    background-color: var(--OP-dotted-phase3-color, var(--OP-dotted-phase1-color));
  }
  75% {
    background-color: var(--OP-dotted-phase4-color, var(--OP-dotted-phase1-color));
  }
  97% {
    background-color: var(--OP-dotted-phase4-color, var(--OP-dotted-phase1-color));
  }
}`);var $a=Rc(typeof window=="object"&&window)||Rc(typeof self=="object"&&self)||Rc(typeof global=="object"&&global)||function(){return this}()||Function("return this")();function Gh(){var i,o;return!((i=$a?.crypto)===null||i===void 0)&&i.randomUUID?$a.crypto.randomUUID():!((o=$a?.btoa)===null||o===void 0)&&o.name?$a.btoa(new Date(Math.ceil(1e13*Math.random())).getTime()+""):Date.now().toString(36)+Math.random().toString(36).substring(0)}var Qr=Array.from({length:4},function(i,o){return"--OP-dotted-phase".concat(o+1,"-color")}),vx=function(i){var o,u=xi(i?.style,i?.size),c=u.styles,s=u.fontSize,d=i?.easing,m=vi(i?.speedPlus,"1.2s").animationPeriod,y=function(h){var v={},C=Qr.length;if(h instanceof Array){for(var M=Ai(h,C),B=0;B<M.length&&!(B>=4);B++)v[Qr[B]]=M[B];return v}try{if(typeof h!="string")throw new Error("Color String expected");for(var w=0;w<C;w++)v[Qr[w]]=h}catch(E){for(E instanceof Error?console.warn("[".concat(E.message,']: Received "').concat(typeof h,'" with value, ').concat(JSON.stringify(h))):console.warn("".concat(JSON.stringify(h),' received in <OrbitProgress variant="dotted" /> indicator cannot be processed. Using default instead!')),w=0;w<C;w++)v[Qr[w]]=mn}return v}((o=i?.color)!==null&&o!==void 0?o:""),p=i?.dense?16:12;return Ce.createElement("span",{className:"rli-d-i-b OP-dotted-rli-bounding-box",style:ge(ge(ge(ge(ge({},s&&{fontSize:s}),m&&{"--rli-animation-duration":m}),d&&{"--rli-animation-function":d}),y),c),role:"status","aria-live":"polite","aria-label":"Loading"},Ce.createElement("span",{className:"rli-d-i-b OP-dotted-indicator"},Array.from({length:p}).map(function(h,v){var C=function(w,E,L){if(E===16){var q=360*w/E,X=E-w,G=Number.parseFloat(L)/E*X*-1;return{transform:"rotate(".concat(q,"deg)"),animationDelay:"".concat(G,"s")}}return{transform:"",animationDelay:""}}(v,p,m),M=C.animationDelay,B=C.transform;return Ce.createElement("span",{key:Gh(),className:"rli-d-i-b dot-shape-holder",style:B?{transform:B}:void 0},Ce.createElement("span",{className:"dot",style:M?{animationDelay:M}:void 0}))}),Ce.createElement(yi,{className:"OP-dotted-text",text:i?.text,textColor:i?.textColor})))};Pe(`.OP-spokes-rli-bounding-box {
  --OP-spokes-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  position: relative;
  color: var(--OP-spokes-phase1-color);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator {
  width: 4.8em;
  height: 4.8em;
  display: block;
  position: relative;
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke {
  position: absolute;
  height: 1.2em;
  width: 0.4em;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto auto auto 50%;
  background-color: var(--OP-spokes-phase1-color);
  border-radius: 0.24em;
  opacity: 0;
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, ease-in-out) backwards infinite uxlv7pw, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, ease-in-out) infinite uxlv7qn;
  transform-origin: left center;
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(1) {
  transform: rotate(calc(0 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(11 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(2) {
  transform: rotate(calc(1 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(10 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(3) {
  transform: rotate(calc(2 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(9 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(4) {
  transform: rotate(calc(3 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(8 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(5) {
  transform: rotate(calc(4 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(7 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(6) {
  transform: rotate(calc(5 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(6 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(7) {
  transform: rotate(calc(6 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(5 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(8) {
  transform: rotate(calc(7 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(4 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(9) {
  transform: rotate(calc(8 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(3 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(10) {
  transform: rotate(calc(9 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(2 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(11) {
  transform: rotate(calc(10 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(1 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(12) {
  transform: rotate(calc(11 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(0 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: var(--OP-spokes-phase1-color);
  z-index: -2;
}

@property --OP-spokes-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-spokes-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-spokes-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-spokes-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes uxlv7pw {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
@keyframes uxlv7qn {
  100%, 0% {
    background-color: var(--OP-spokes-phase1-color);
  }
  22% {
    background-color: var(--OP-spokes-phase1-color);
  }
  25% {
    background-color: var(--OP-spokes-phase2-color, var(--OP-spokes-phase1-color));
  }
  42% {
    background-color: var(--OP-spokes-phase2-color, var(--OP-spokes-phase1-color));
  }
  50% {
    background-color: var(--OP-spokes-phase3-color, var(--OP-spokes-phase1-color));
  }
  72% {
    background-color: var(--OP-spokes-phase3-color, var(--OP-spokes-phase1-color));
  }
  75% {
    background-color: var(--OP-spokes-phase4-color, var(--OP-spokes-phase1-color));
  }
  97% {
    background-color: var(--OP-spokes-phase4-color, var(--OP-spokes-phase1-color));
  }
}`);var Yr=Array.from({length:4},function(i,o){return"--OP-spokes-phase".concat(o+1,"-color")}),xx=function(i){var o,u=xi(i?.style,i?.size),c=u.styles,s=u.fontSize,d=i?.easing,m=vi(i?.speedPlus,"1.2s").animationPeriod,y=function(h){var v={},C=Yr.length;if(h instanceof Array){for(var M=Ai(h,C),B=0;B<M.length&&!(B>=4);B++)v[Yr[B]]=M[B];return v}try{if(typeof h!="string")throw new Error("Color String expected");for(var w=0;w<C;w++)v[Yr[w]]=h}catch(E){for(E instanceof Error?console.warn("[".concat(E.message,']: Received "').concat(typeof h,'" instead with value, ').concat(JSON.stringify(h))):console.warn("".concat(JSON.stringify(h),' received in <OrbitProgress variant="spokes" /> indicator cannot be processed. Using default instead!')),w=0;w<C;w++)v[Yr[w]]=mn}return v}((o=i?.color)!==null&&o!==void 0?o:""),p=i?.dense?16:12;return Ce.createElement("span",{className:"rli-d-i-b OP-spokes-rli-bounding-box",style:ge(ge(ge(ge(ge({},s&&{fontSize:s}),m&&{"--rli-animation-duration":m}),d&&{"--rli-animation-function":d}),y),c),role:"status","aria-live":"polite","aria-label":"Loading"},Ce.createElement("span",{className:"rli-d-i-b OP-spokes-indicator"},Array.from({length:p},function(h,v){return Ce.createElement("span",{key:Gh(),className:"rli-d-i-b spoke",style:yx(v,p,m)})})),Ce.createElement(yi,{text:i?.text,textColor:i?.textColor}))};function yx(i,o,u){if(o===16){var c=o-i,s=Number.parseFloat(u)/o;return{transform:"rotate(".concat(360*i/o,"deg) translate(-50%, ").concat("-1.56em",")"),animationDelay:"".concat((c-1)*s*-1,"s")}}}Pe(`.OP-annulus-dual-sectors-rli-bounding-box {
  --OP-annulus-dual-sectors-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  box-sizing: border-box;
  display: inline-block;
}
.OP-annulus-dual-sectors-rli-bounding-box .OP-annulus-dual-sectors-indicator {
  width: 5em;
  height: 5em;
  display: inline-block;
  position: relative;
  z-index: 0;
  color: var(--OP-annulus-dual-sectors-phase1-color);
}
.OP-annulus-dual-sectors-rli-bounding-box .OP-annulus-dual-sectors-indicator .annulus-sectors {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border-width: 0.34em;
  border-style: solid;
  border-color: var(--OP-annulus-dual-sectors-phase1-color) transparent var(--OP-annulus-dual-sectors-phase1-color) transparent;
  background-color: transparent;
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, linear) infinite uxlv7ra, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, linear) infinite uxlv7sv;
}
.OP-annulus-dual-sectors-rli-bounding-box .OP-annulus-dual-sectors-indicator .OP-annulus-dual-sectors-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}

@property --OP-annulus-dual-sectors-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-dual-sectors-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-dual-sectors-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-dual-sectors-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes uxlv7ra {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes uxlv7sv {
  100%, 0% {
    border-color: var(--OP-annulus-dual-sectors-phase1-color) transparent;
  }
  20% {
    border-color: var(--OP-annulus-dual-sectors-phase1-color) transparent;
  }
  25% {
    border-color: var(--OP-annulus-dual-sectors-phase2-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  45% {
    border-color: var(--OP-annulus-dual-sectors-phase2-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  50% {
    border-color: var(--OP-annulus-dual-sectors-phase3-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  70% {
    border-color: var(--OP-annulus-dual-sectors-phase3-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  75% {
    border-color: var(--OP-annulus-dual-sectors-phase4-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  95% {
    border-color: var(--OP-annulus-dual-sectors-phase4-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
}`);var Xr=Array.from({length:4},function(i,o){return"--OP-annulus-dual-sectors-phase".concat(o+1,"-color")}),Ax=function(i){var o,u=xi(i?.style,i?.size),c=u.styles,s=u.fontSize,d=i?.easing,m=vi(i?.speedPlus,"1.2s").animationPeriod,y=function(h){var v={},C=Xr.length;if(h instanceof Array){for(var M=Ai(h,C),B=0;B<M.length&&!(B>=4);B++)v[Xr[B]]=M[B];return v}try{if(typeof h!="string")throw new Error("Color String expected");for(var w=0;w<C;w++)v[Xr[w]]=h}catch(E){for(E instanceof Error?console.warn("[".concat(E.message,']: Received "').concat(typeof h,'" with value, ').concat(JSON.stringify(h))):console.warn("".concat(JSON.stringify(h),' received in <OrbitProgress variant="annulus-splits" /> indicator cannot be processed. Using default instead!')),w=0;w<C;w++)v[Xr[w]]=mn}return v}((o=i?.color)!==null&&o!==void 0?o:""),p=i.dense?"0.45em":"";return Ce.createElement("span",{className:"rli-d-i-b OP-annulus-dual-sectors-rli-bounding-box",style:ge(ge(ge(ge(ge({},s&&{fontSize:s}),m&&{"--rli-animation-duration":m}),d&&{"--rli-animation-function":d}),y),c),role:"status","aria-live":"polite","aria-label":"Loading"},Ce.createElement("span",{className:"rli-d-i-b OP-annulus-dual-sectors-indicator"},Ce.createElement("span",{className:"rli-d-i-b annulus-sectors",style:ge({},p&&{borderWidth:p})}),Ce.createElement(yi,{className:"OP-annulus-dual-sectors-text",text:i?.text,textColor:i?.textColor})))};Pe(`.OP-annulus-sector-track-rli-bounding-box {
  --OP-annulus-track-phase1-color: rgba(50, 205, 50, 0.22);
  --OP-annulus-sector-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  display: inline-block;
}
.OP-annulus-sector-track-rli-bounding-box .OP-annulus-sector-track-indicator {
  width: 5em;
  height: 5em;
  color: var(--OP-annulus-sector-phase1-color);
  display: inline-block;
  position: relative;
  z-index: 0;
}
.OP-annulus-sector-track-rli-bounding-box .OP-annulus-sector-track-indicator .annulus-track-ring {
  width: 100%;
  height: 100%;
  border-width: 0.34em;
  border-style: solid;
  border-radius: 50%;
  box-sizing: border-box;
  border-color: var(--OP-annulus-track-phase1-color);
  border-top-color: var(--OP-annulus-sector-phase1-color);
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, linear) infinite uxlv7rl, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite uxlv7tf;
}
.OP-annulus-sector-track-rli-bounding-box .OP-annulus-sector-track-indicator .OP-annulus-sector-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}

@property --OP-annulus-track-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgba(50, 205, 50, 0.22);
}
@property --OP-annulus-track-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgba(50, 205, 50, 0.22);
}
@property --OP-annulus-track-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgba(50, 205, 50, 0.22);
}
@property --OP-annulus-track-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgba(50, 205, 50, 0.22);
}
@property --OP-annulus-sector-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-sector-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-sector-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-sector-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes uxlv7rl {
  to {
    transform: rotate(1turn);
  }
}
@keyframes uxlv7tf {
  100%, 0% {
    border-color: var(--OP-annulus-track-phase1-color);
    border-top-color: var(--OP-annulus-sector-phase1-color);
  }
  18% {
    border-color: var(--OP-annulus-track-phase1-color);
    border-top-color: var(--OP-annulus-sector-phase1-color);
  }
  25% {
    border-color: var(--OP-annulus-track-phase2-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase2-color, var(--OP-annulus-sector-phase1-color));
  }
  43% {
    border-color: var(--OP-annulus-track-phase2-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase2-color, var(--OP-annulus-sector-phase1-color));
  }
  50% {
    border-color: var(--OP-annulus-track-phase3-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase3-color, var(--OP-annulus-sector-phase1-color));
  }
  68% {
    border-color: var(--OP-annulus-track-phase3-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase3-color, var(--OP-annulus-sector-phase1-color));
  }
  75% {
    border-color: var(--OP-annulus-track-phase4-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase4-color, var(--OP-annulus-sector-phase1-color));
  }
  93% {
    border-color: var(--OP-annulus-track-phase4-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase4-color, var(--OP-annulus-sector-phase1-color));
  }
}`);var oi=Array.from({length:4},function(i,o){return["--OP-annulus-track-phase".concat(o+1,"-color"),"--OP-annulus-sector-phase".concat(o+1,"-color")]}),Gr=function(i){return i===void 0&&(i=1),.25*i},Sx=function(i){var o,u=xi(i?.style,i?.size),c=u.styles,s=u.fontSize,d=i?.easing,m=vi(i?.speedPlus,"1s").animationPeriod,y=function(h){var v={},C=oi.length;if(h instanceof Array){for(var M=Ai(h,C),B=0;B<M.length&&!(B>=4);B++){var w=oi[B];try{if(!(q=W(M[B])).isValid())throw new Error("Invalid Color: ".concat(q.getOriginalInput()));var E=q.setAlpha(Gr(q.getAlpha())).toRgbString(),L=M[B];v[w[0]]=E,v[w[1]]=L}catch{L=mn,E=(q=W(mn)).setAlpha(Gr(q.getAlpha())).toRgbString(),v[w[0]]=E,v[w[1]]=L}}return v}try{var q=W(h);if(typeof h!="string")throw new Error("Color String expected");if(!q.isValid())throw new Error("Invalid Color: ".concat(q.getOriginalInput()));L=h,E=q.setAlpha(Gr(q.getAlpha())).toRgbString();for(var X=0;X<C;X++)v[(w=oi[X])[0]]=E,v[w[1]]=L}catch(G){for(G instanceof Error?console.warn("[".concat(G.message,']: Received "').concat(typeof h,'" with value, ').concat(JSON.stringify(h))):console.warn("".concat(JSON.stringify(h),' received in <OrbitProgress variant="annulus-track" /> indicator cannot be processed. Using default instead!')),L=mn,E=(q=W(mn)).setAlpha(Gr(q.getAlpha())).toRgbString(),X=0;X<oi.length;X++)v[(w=oi[X])[0]]=E,v[w[1]]=L}return v}((o=i?.color)!==null&&o!==void 0?o:""),p=i.dense?"0.45em":"";return Ce.createElement("span",{className:"rli-d-i-b OP-annulus-sector-track-rli-bounding-box",style:ge(ge(ge(ge(ge({},s&&{fontSize:s}),m&&{"--rli-animation-duration":m}),d&&{"--rli-animation-function":d}),y),c),role:"status","aria-live":"polite","aria-label":"Loading"},Ce.createElement("span",{className:"rli-d-i-b OP-annulus-sector-track-indicator"},Ce.createElement("span",{className:"rli-d-i-b annulus-track-ring",style:ge({},p&&{borderWidth:p})}),Ce.createElement(yi,{className:"OP-annulus-sector-text",text:i?.text,textColor:i?.textColor})))},Zh=function(i){var o=Object(i).variant,u=o===void 0?"disc":o;return u==="dotted"?Ce.createElement(vx,ge({},i)):u==="spokes"?Ce.createElement(xx,ge({},i)):u==="disc"?Ce.createElement(gx,ge({},i)):u==="split-disc"?Ce.createElement(Ax,ge({},i)):u==="track-disc"?Ce.createElement(Sx,ge({},i)):null};Pe(`.foursquare-rli-bounding-box {
  --four-square-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  box-sizing: border-box;
  color: var(--four-square-phase1-color);
  display: inline-block;
  overflow: hidden;
}
.foursquare-rli-bounding-box .foursquare-indicator {
  height: 5.3033008589em;
  width: 5.3033008589em;
  position: relative;
  display: block;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container {
  position: absolute;
  z-index: 0;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  height: 2.5em;
  width: 2.5em;
  color: inherit;
  will-change: color, width, height;
  transform: rotate(45deg);
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, cubic-bezier(0.05, 0.28, 0.79, 0.98)) infinite uxlv7dk, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, cubic-bezier(0.05, 0.28, 0.79, 0.98)) infinite uxlv7es;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square {
  position: absolute;
  width: 1.25em;
  height: 1.25em;
  border-radius: 0.1875em;
  background-color: currentColor;
  animation: uxlv7dd var(--rli-animation-duration, 1s) var(--rli-animation-function, cubic-bezier(0.05, 0.28, 0.79, 0.98)) both infinite;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square.square1 {
  top: 0;
  left: 0;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square.square2 {
  top: 0;
  right: 0;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square.square3 {
  bottom: 0;
  left: 0;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square.square4 {
  bottom: 0;
  right: 0;
}

@property --four-square-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --four-square-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --four-square-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --four-square-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes uxlv7dk {
  0% {
    width: 2.5em;
    height: 2.5em;
  }
  10% {
    width: 2.5em;
    height: 2.5em;
  }
  50% {
    width: 3.75em;
    height: 3.75em;
  }
  90% {
    width: 2.5em;
    height: 2.5em;
  }
  100% {
    width: 2.5em;
    height: 2.5em;
  }
}
@keyframes uxlv7dd {
  0% {
    transform: rotateZ(0deg);
  }
  10% {
    transform: rotateZ(0deg);
  }
  50% {
    transform: rotateZ(90deg);
  }
  90% {
    transform: rotateZ(90deg);
  }
  100% {
    transform: rotateZ(90deg);
  }
}
@keyframes uxlv7es {
  100%, 0% {
    color: var(--four-square-phase1-color);
  }
  20% {
    color: var(--four-square-phase1-color);
  }
  25% {
    color: var(--four-square-phase2-color, var(--four-square-phase1-color));
  }
  45% {
    color: var(--four-square-phase2-color, var(--four-square-phase1-color));
  }
  50% {
    color: var(--four-square-phase3-color, var(--four-square-phase1-color));
  }
  70% {
    color: var(--four-square-phase3-color, var(--four-square-phase1-color));
  }
  75% {
    color: var(--four-square-phase4-color, var(--four-square-phase1-color));
  }
  95% {
    color: var(--four-square-phase4-color, var(--four-square-phase1-color));
  }
}`);Array.from({length:4},function(i,o){return"--four-square-phase".concat(o+1,"-color")});Pe(`.mosaic-rli-bounding-box {
  --mosaic-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  color: var(--mosaic-phase1-color);
}
.mosaic-rli-bounding-box .mosaic-indicator {
  width: 5em;
  height: 5em;
  color: currentColor;
  display: grid;
  gap: 0.125em;
  grid-template-columns: repeat(3, 1fr);
  grid-template-areas: "a b c" "d e f" "g h i";
  position: relative;
  z-index: 0;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 105%;
  left: 50%;
  transform: translateX(-50%);
  z-index: -2;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube {
  background-color: var(--mosaic-phase1-color);
  animation-name: uxlv7i4, uxlv7is;
  animation-duration: var(--rli-animation-duration, 1.5s), calc(var(--rli-animation-duration, 1.5s) * 4);
  animation-timing-function: var(--rli-animation-function, ease-in-out);
  animation-iteration-count: infinite;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube1 {
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 2);
  grid-area: a;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube2 {
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 3);
  grid-area: b;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube3 {
  grid-area: c;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 4);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube4 {
  grid-area: d;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 1);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube5 {
  grid-area: e;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 2);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube6 {
  grid-area: f;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 3);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube7 {
  grid-area: g;
  animation-delay: 0s;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube8 {
  grid-area: h;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 1);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube9 {
  grid-area: i;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 2);
}

@property --mosaic-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --mosaic-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --mosaic-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --mosaic-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.5s;
}
@keyframes uxlv7i4 {
  0%, 60%, 100% {
    transform: scale3D(1, 1, 1);
  }
  30% {
    transform: scale3D(0, 0, 1);
  }
}
@keyframes uxlv7is {
  100%, 0% {
    background-color: var(--mosaic-phase1-color);
  }
  25% {
    background-color: var(--mosaic-phase2-color, var(--mosaic-phase1-color));
  }
  50% {
    background-color: var(--mosaic-phase3-color, var(--mosaic-phase1-color));
  }
  75% {
    background-color: var(--mosaic-phase4-color, var(--mosaic-phase1-color));
  }
}`);Array.from({length:4},function(i,o){return"--mosaic-phase".concat(o+1,"-color")});Pe(`.riple-rli-bounding-box {
  --riple-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  display: inline-block;
  color: var(--riple-phase1-color);
}
.riple-rli-bounding-box .riple-indicator {
  display: inline-block;
  width: 5em;
  height: 5em;
  position: relative;
  z-index: 0;
}
.riple-rli-bounding-box .riple-indicator .riple-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}
.riple-rli-bounding-box .riple-indicator .riple {
  --border-width: 0.25em;
  position: absolute;
  border: var(--border-width) solid var(--riple-phase1-color);
  opacity: 1;
  border-radius: 50%;
  will-change: top, right, left, bottom, border-color;
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, cubic-bezier(0, 0.2, 0.8, 1)) infinite uxlv7i1, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, cubic-bezier(0, 0.2, 0.8, 1)) infinite uxlv7io;
}
.riple-rli-bounding-box .riple-indicator .riple:nth-of-type(2) {
  animation-delay: calc(var(--rli-animation-duration, 1s) / 2 * -1);
}

@property --riple-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --riple-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --riple-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --riple-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes uxlv7i1 {
  0% {
    top: calc(50% - var(--border-width));
    left: calc(50% - var(--border-width));
    right: calc(50% - var(--border-width));
    bottom: calc(50% - var(--border-width));
    opacity: 0;
  }
  4.9% {
    top: calc(50% - var(--border-width));
    left: calc(50% - var(--border-width));
    right: calc(50% - var(--border-width));
    bottom: calc(50% - var(--border-width));
    opacity: 0;
  }
  5% {
    top: calc(50% - var(--border-width));
    left: calc(50% - var(--border-width));
    right: calc(50% - var(--border-width));
    bottom: calc(50% - var(--border-width));
    opacity: 1;
  }
  100% {
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0;
  }
}
@keyframes uxlv7io {
  100%, 0% {
    border-color: var(--riple-phase1-color);
  }
  24.9% {
    border-color: var(--riple-phase1-color);
  }
  25% {
    border-color: var(--riple-phase2-color, var(--riple-phase1-color));
  }
  49.9% {
    border-color: var(--riple-phase2-color, var(--riple-phase1-color));
  }
  50% {
    border-color: var(--riple-phase3-color, var(--riple-phase1-color));
  }
  74.9% {
    border-color: var(--riple-phase3-color, var(--riple-phase1-color));
  }
  75% {
    border-color: var(--riple-phase4-color, var(--riple-phase1-color));
  }
  99.9% {
    border-color: var(--riple-phase4-color, var(--riple-phase1-color));
  }
}`);Array.from({length:4},function(i,o){return"--riple-phase".concat(o+1,"-color")});Pe(`.pulsate-rli-bounding-box {
  --TD-pulsate-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  display: inline-block;
  box-sizing: border-box;
  color: var(--TD-pulsate-phase1-color);
}
.pulsate-rli-bounding-box .pulsate-indicator {
  width: 4.4em;
  height: 1.1em;
  text-align: center;
  position: relative;
  z-index: 0;
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  align-items: center;
}
.pulsate-rli-bounding-box .pulsate-indicator .pulsate-dot {
  width: 1.1em;
  height: 1.1em;
  border-radius: 50%;
  background-color: var(--TD-pulsate-phase1-color);
  transform: scale(0);
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, ease-in-out) var(--delay) infinite uxlv7s0, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, ease-in-out) var(--delay) infinite uxlv7to;
}
.pulsate-rli-bounding-box .pulsate-indicator .pulsate-dot:nth-of-type(1) {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0.15 * -1);
}
.pulsate-rli-bounding-box .pulsate-indicator .pulsate-dot:nth-of-type(2) {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0);
}
.pulsate-rli-bounding-box .pulsate-indicator .pulsate-dot:nth-of-type(3) {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0.15);
}
.pulsate-rli-bounding-box .pulsate-text {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 80%;
  text-transform: uppercase;
  text-align: center;
  font-size: 0.6em;
  letter-spacing: 0.5px;
  font-family: sans-serif;
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}

@property --TD-pulsate-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-pulsate-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-pulsate-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-pulsate-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes uxlv7s0 {
  0%, 90%, 100% {
    transform: scale(0);
  }
  40% {
    transform: scale(1);
  }
}
@keyframes uxlv7to {
  0%, 100% {
    background-color: var(--TD-pulsate-phase1-color);
  }
  24.9% {
    background-color: var(--TD-pulsate-phase1-color);
  }
  25% {
    background-color: var(--TD-pulsate-phase2-color, var(--TD-pulsate-phase1-color));
  }
  49.9% {
    background-color: var(--TD-pulsate-phase2-color, var(--TD-pulsate-phase1-color));
  }
  50% {
    background-color: var(--TD-pulsate-phase3-color, var(--TD-pulsate-phase1-color));
  }
  74.9% {
    background-color: var(--TD-pulsate-phase3-color, var(--TD-pulsate-phase1-color));
  }
  75% {
    background-color: var(--TD-pulsate-phase4-color, var(--TD-pulsate-phase1-color));
  }
  99.9% {
    background-color: var(--TD-pulsate-phase4-color, var(--TD-pulsate-phase1-color));
  }
}`);Array.from({length:4},function(i,o){return"--TD-pulsate-phase".concat(o+1,"-color")});Pe(`.brick-stack-rli-bounding-box {
  --TD-brick-stack-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  display: inline-block;
  color: var(--TD-brick-stack-phase1-color);
}
.brick-stack-rli-bounding-box .brick-stack-indicator {
  width: 2.8em;
  height: 2.8em;
  position: relative;
  display: block;
  margin: 0 auto;
}
.brick-stack-rli-bounding-box .brick-stack {
  width: 100%;
  height: 100%;
  background: radial-gradient(circle closest-side, currentColor 0% 95%, rgba(0, 0, 0, 0) calc(95% + 1px)) 0 0/40% 40% no-repeat, radial-gradient(circle closest-side, currentColor 0% 95%, rgba(0, 0, 0, 0) calc(95% + 1px)) 0 100%/40% 40% no-repeat, radial-gradient(circle closest-side, currentColor 0% 95%, rgba(0, 0, 0, 0) calc(95% + 1px)) 100% 100%/40% 40% no-repeat;
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, ease-out) infinite uxlv7tu, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, ease-out) infinite uxlv7us;
}

@property --TD-brick-stack-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-brick-stack-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-brick-stack-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-brick-stack-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes uxlv7tu {
  0% {
    background-position: 0 0, 0 100%, 100% 100%;
  }
  25% {
    background-position: 100% 0, 0 100%, 100% 100%;
  }
  50% {
    background-position: 100% 0, 0 0, 100% 100%;
  }
  75% {
    background-position: 100% 0, 0 0, 0 100%;
  }
  100% {
    background-position: 100% 100%, 0 0, 0 100%;
  }
}
@keyframes uxlv7us {
  100%, 0% {
    color: var(--TD-brick-stack-phase1-color);
  }
  20% {
    color: var(--TD-brick-stack-phase1-color);
  }
  25% {
    color: var(--TD-brick-stack-phase2-color, var(--TD-brick-stack-phase1-color));
  }
  45% {
    color: var(--TD-brick-stack-phase2-color, var(--TD-brick-stack-phase1-color));
  }
  50% {
    color: var(--TD-brick-stack-phase3-color, var(--TD-brick-stack-phase1-color));
  }
  70% {
    color: var(--TD-brick-stack-phase3-color, var(--TD-brick-stack-phase1-color));
  }
  75% {
    color: var(--TD-brick-stack-phase4-color, var(--TD-brick-stack-phase1-color));
  }
  95% {
    color: var(--TD-brick-stack-phase4-color, var(--TD-brick-stack-phase1-color));
  }
}`);Array.from({length:4},function(i,o){return"--TD-brick-stack-phase".concat(o+1,"-color")});Pe(`.bob-rli-bounding-box {
  --TD-bob-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  display: inline-block;
  color: var(--TD-bob-phase1-color);
}
.bob-rli-bounding-box .bob-indicator {
  width: 4.4em;
  height: 2.2em;
  position: relative;
  display: block;
  margin: 0 auto;
}
.bob-rli-bounding-box .bob-indicator .bobbing,
.bob-rli-bounding-box .bob-indicator .bobbing::before,
.bob-rli-bounding-box .bob-indicator .bobbing::after {
  width: 1.1em;
  height: 100%;
  display: grid;
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, linear) var(--delay) infinite uxlv7u0, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, linear) var(--delay) infinite uxlv7vq;
}
.bob-rli-bounding-box .bob-indicator .bobbing::before,
.bob-rli-bounding-box .bob-indicator .bobbing::after {
  content: "";
  grid-area: 1/1;
}
.bob-rli-bounding-box .bob-indicator .bobbing {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0.12 * -1);
  background: radial-gradient(circle closest-side at center, currentColor 0% 92%, rgba(0, 0, 0, 0) calc(92% + 1px)) 50% 50%/100% 50% no-repeat;
}
.bob-rli-bounding-box .bob-indicator .bobbing::before {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0);
  transform: translateX(150%);
  background: radial-gradient(circle closest-side at center, currentColor 0% 92%, rgba(0, 0, 0, 0) calc(92% + 1px)) 50% 50%/100% 50% no-repeat;
}
.bob-rli-bounding-box .bob-indicator .bobbing::after {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0.12);
  transform: translateX(300%);
  background: radial-gradient(circle closest-side at center, currentColor 0% 92%, rgba(0, 0, 0, 0) calc(92% + 1px)) 50% 50%/100% 50% no-repeat;
}

@property --TD-bob-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bob-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bob-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bob-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes uxlv7u0 {
  100%, 0% {
    background-position: 50% 50%;
  }
  15% {
    background-position: 50% 10%;
  }
  30% {
    background-position: 50% 100%;
  }
  40% {
    background-position: 50% 0%;
  }
  50% {
    background-position: 50% 90%;
  }
  70% {
    background-position: 50% 10%;
  }
  98% {
    background-position: 50% 50%;
  }
}
@keyframes uxlv7vq {
  100%, 0% {
    color: var(--TD-bob-phase1-color);
  }
  22% {
    color: var(--TD-bob-phase1-color);
  }
  25% {
    color: var(--TD-bob-phase2-color, var(--TD-bob-phase1-color));
  }
  47% {
    color: var(--TD-bob-phase2-color, var(--TD-bob-phase1-color));
  }
  50% {
    color: var(--TD-bob-phase3-color, var(--TD-bob-phase1-color));
  }
  72% {
    color: var(--TD-bob-phase3-color, var(--TD-bob-phase1-color));
  }
  75% {
    color: var(--TD-bob-phase4-color, var(--TD-bob-phase1-color));
  }
  97% {
    color: var(--TD-bob-phase4-color, var(--TD-bob-phase1-color));
  }
}`);Array.from({length:4},function(i,o){return"--TD-bob-phase".concat(o+1,"-color")});Pe(`.bounce-rli-bounding-box {
  --TD-bounce-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  color: var(--TD-bounce-phase1-color);
  display: inline-block;
  padding-bottom: 0.25125em;
}
.bounce-rli-bounding-box .wrapper {
  --dot1-delay: 0s;
  --dot1-x-offset: 0.55em;
  --dot2-delay: calc((var(--rli-animation-duration, 0.5s) + var(--rli-animation-duration, 0.5s) * 0.75) * -1);
  --dot2-x-offset: 2.2em;
  --dot3-delay: calc((var(--rli-animation-duration, 0.5s) + var(--rli-animation-duration, 0.5s) * 0.5) * -1);
  --dot3-x-offset: 3.85em;
  width: 5.5em;
  height: 3.125em;
  position: relative;
  display: block;
  margin: 0 auto;
}
.bounce-rli-bounding-box .wrapper .group {
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
.bounce-rli-bounding-box .wrapper .group .dot {
  width: 1.1em;
  height: 1.1em;
  position: absolute;
  border-radius: 50%;
  background-color: var(--TD-bounce-phase1-color);
  transform-origin: 50%;
  animation: var(--rli-animation-duration, 0.5s) var(--rli-animation-function, cubic-bezier(0.74, 0.1, 0.74, 1)) alternate infinite uxlv7wc, calc(var(--rli-animation-duration, 0.5s) * 4) var(--rli-animation-function, cubic-bezier(0.74, 0.1, 0.74, 1)) infinite uxlv7x6;
}
.bounce-rli-bounding-box .wrapper .group .dot:nth-of-type(1) {
  left: var(--dot1-x-offset);
  animation-delay: var(--dot1-delay), 0s;
}
.bounce-rli-bounding-box .wrapper .group .dot:nth-of-type(2) {
  left: var(--dot2-x-offset);
  animation-delay: var(--dot2-delay), 0s;
}
.bounce-rli-bounding-box .wrapper .group .dot:nth-of-type(3) {
  left: var(--dot3-x-offset);
  animation-delay: var(--dot3-delay), 0s;
}
.bounce-rli-bounding-box .wrapper .group .shadow {
  width: 1.1em;
  height: 0.22em;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 101%;
  transform-origin: 50%;
  z-index: -1;
  filter: blur(1px);
  animation: var(--rli-animation-duration, 0.5s) var(--rli-animation-function, cubic-bezier(0.74, 0.1, 0.74, 1)) alternate infinite uxlv7ww;
}
.bounce-rli-bounding-box .wrapper .group .shadow:nth-of-type(1) {
  left: var(--dot1-x-offset);
  animation-delay: var(--dot1-delay);
}
.bounce-rli-bounding-box .wrapper .group .shadow:nth-of-type(2) {
  left: var(--dot2-x-offset);
  animation-delay: var(--dot2-delay);
}
.bounce-rli-bounding-box .wrapper .group .shadow:nth-of-type(3) {
  left: var(--dot3-x-offset);
  animation-delay: var(--dot3-delay);
}

@property --TD-bounce-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bounce-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bounce-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bounce-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 0.5s;
}
@keyframes uxlv7wc {
  0% {
    top: 0%;
  }
  60% {
    height: 1.25em;
    border-radius: 50%;
    transform: scaleX(1);
  }
  100% {
    top: 100%;
    height: 0.22em;
    transform: scaleX(1.5);
    filter: blur(0.4px);
  }
}
@keyframes uxlv7ww {
  0% {
    transform: scaleX(0.2);
    opacity: 0.2;
  }
  60% {
    opacity: 0.4;
  }
  100% {
    transform: scaleX(1.5);
    opacity: 0.6;
  }
}
@keyframes uxlv7x6 {
  0%, 100% {
    background-color: var(--TD-bounce-phase1-color);
  }
  20% {
    background-color: var(--TD-bounce-phase1-color);
  }
  25% {
    background-color: var(--TD-bounce-phase2-color, var(--TD-bounce-phase1-color));
  }
  45% {
    background-color: var(--TD-bounce-phase2-color, var(--TD-bounce-phase1-color));
  }
  50% {
    background-color: var(--TD-bounce-phase3-color, var(--TD-bounce-phase1-color));
  }
  70% {
    background-color: var(--TD-bounce-phase3-color, var(--TD-bounce-phase1-color));
  }
  75% {
    background-color: var(--TD-bounce-phase4-color, var(--TD-bounce-phase1-color));
  }
  95% {
    background-color: var(--TD-bounce-phase4-color, var(--TD-bounce-phase1-color));
  }
}`);Array.from({length:4},function(i,o){return"--TD-bounce-phase".concat(o+1,"-color")});Pe(`.blink-blur-rli-bounding-box {
  --shape-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  color: var(--shape-phase1-color);
}
.blink-blur-rli-bounding-box .blink-blur-indicator {
  isolation: isolate;
  display: flex;
  flex-direction: row;
  -moz-column-gap: 0.4em;
       column-gap: 0.4em;
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape {
  --x-deg: -20deg;
  width: 1.8em;
  height: 2.25em;
  border-radius: 0.25em;
  color: inherit;
  transform: skewX(var(--x-deg));
  background-color: var(--shape-phase1-color);
  animation-name: uxlv7id, uxlv7jl;
  animation-duration: var(--rli-animation-duration, 1.2s), calc(var(--rli-animation-duration, 1.2s) * 4);
  animation-timing-function: var(--rli-animation-function, ease-in);
  animation-iteration-count: infinite;
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape1 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.5 * -1);
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape2 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.4 * -1);
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape3 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.3 * -1);
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape4 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.2 * -1);
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape5 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.1 * -1);
}

@property --shape-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --shape-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --shape-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --shape-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes uxlv7id {
  100%, 0% {
    opacity: 0.3;
    filter: blur(0.0675em) drop-shadow(0 0 0.0625em);
    transform: skewX(var(--x-deg)) scale(1.2, 1.45);
  }
  39% {
    opacity: 0.8;
  }
  40%, 41%, 42% {
    opacity: 0;
  }
  43% {
    opacity: 0.8;
  }
  50% {
    opacity: 1;
    filter: blur(0em) drop-shadow(0 0 0em);
    transform: skewX(var(--x-deg)) scale(1, 1);
  }
}
@keyframes uxlv7jl {
  100%, 0% {
    color: var(--shape-phase1-color);
    background-color: var(--shape-phase1-color);
  }
  25% {
    color: var(--shape-phase2-color, var(--shape-phase1-color));
    background-color: var(--shape-phase2-color, var(--shape-phase1-color));
  }
  50% {
    color: var(--shape-phase3-color, var(--shape-phase1-color));
    background-color: var(--shape-phase3-color, var(--shape-phase1-color));
  }
  75% {
    color: var(--shape-phase4-color, var(--shape-phase1-color));
    background-color: var(--shape-phase4-color, var(--shape-phase1-color));
  }
}`);Array.from({length:4},function(i,o){return"--shape-phase".concat(o+1,"-color")});Pe(`.trophy-spin-rli-bounding-box {
  --trophySpin-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  position: relative;
  isolation: isolate;
  color: var(--trophySpin-phase1-color);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator {
  width: 4em;
  perspective: 1000px;
  transform-style: preserve-3d;
  display: block;
  margin: 0 auto;
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade {
  display: block;
  width: 4em;
  height: 0.5em;
  background: var(--trophySpin-phase1-color);
  animation: uxlv7ki var(--rli-animation-duration, 2.5s) var(--rli-animation-function, linear) infinite, uxlv7l2 calc(var(--rli-animation-duration, 2.5s) * 0.5) var(--rli-animation-function, linear) infinite, uxlv7ly calc(var(--rli-animation-duration, 2.5s) * 4) var(--rli-animation-function, linear) infinite;
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(8) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 0 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(7) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 1 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(6) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 2 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(5) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 3 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(4) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 4 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(3) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 5 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(2) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 6 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(1) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 7 * -1);
}

@property --trophySpin-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --trophySpin-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --trophySpin-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --trophySpin-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 2.5s;
}
@keyframes uxlv7ki {
  to {
    transform: rotateY(1turn) rotateX(-25deg);
  }
}
@keyframes uxlv7l2 {
  100%, 0% {
    filter: brightness(1);
    opacity: 1;
  }
  15% {
    filter: brightness(1);
  }
  25% {
    opacity: 0.96;
  }
  30% {
    filter: brightness(0.92);
  }
  50% {
    filter: brightness(0.7);
    opacity: 1;
  }
  75% {
    filter: brightness(0.92);
    opacity: 0.96;
  }
  90% {
    filter: brightness(1);
  }
}
@keyframes uxlv7ly {
  100%, 0% {
    background-color: var(--trophySpin-phase1-color);
  }
  18% {
    background-color: var(--trophySpin-phase1-color);
  }
  25% {
    background-color: var(--trophySpin-phase2-color, var(--trophySpin-phase1-color));
  }
  43% {
    background-color: var(--trophySpin-phase2-color, var(--trophySpin-phase1-color));
  }
  50% {
    background-color: var(--trophySpin-phase3-color, var(--trophySpin-phase1-color));
  }
  68% {
    background-color: var(--trophySpin-phase3-color, var(--trophySpin-phase1-color));
  }
  75% {
    background-color: var(--trophySpin-phase4-color, var(--trophySpin-phase1-color));
  }
  93% {
    background-color: var(--trophySpin-phase4-color, var(--trophySpin-phase1-color));
  }
}`);Array.from({length:4},function(i,o){return"--trophySpin-phase".concat(o+1,"-color")});Pe(`.slab-rli-bounding-box {
  --slab-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  color: var(--slab-phase1-color);
  position: relative;
}
.slab-rli-bounding-box .slab-indicator {
  position: relative;
  display: block;
  width: 7em;
  height: 4em;
  margin: 0 auto;
  overflow: hidden;
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper {
  width: 4em;
  height: 4em;
  transform: perspective(15em) rotateX(66deg) rotateZ(-25deg);
  transform-style: preserve-3d;
  transform-origin: 50% 100%;
  display: block;
  position: absolute;
  bottom: 0;
  right: 0;
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--slab-phase1-color);
  opacity: 0;
  box-shadow: -0.08em 0.15em 0 rgba(0, 0, 0, 0.45);
  transform-origin: 0% 0%;
  animation: calc(var(--rli-animation-duration-unitless, 3) * 1s) var(--rli-animation-function, linear) infinite uxlv7md, calc(var(--rli-animation-duration-unitless, 3) * 4s) var(--rli-animation-function, linear) infinite uxlv7n0;
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab:nth-child(1) {
  animation-delay: calc(4 / (16 / var(--rli-animation-duration-unitless, 3)) * 3 * -1 * 1s);
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab:nth-child(2) {
  animation-delay: calc(4 / (16 / var(--rli-animation-duration-unitless, 3)) * 2 * -1 * 1s);
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab:nth-child(3) {
  animation-delay: calc(4 / (16 / var(--rli-animation-duration-unitless, 3)) * -1 * 1s);
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab:nth-child(4) {
  animation-delay: 0s;
}

@property --slab-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --slab-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --slab-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --slab-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration-unitless {
  syntax: "<number>";
  inherits: true;
  initial-value: 3;
}
@keyframes uxlv7md {
  0% {
    transform: translateY(0) rotateX(30deg);
    opacity: 0;
  }
  10% {
    transform: translateY(-40%) rotateX(0deg);
    opacity: 1;
  }
  25% {
    opacity: 1;
  }
  100% {
    transform: translateY(-400%) rotateX(0deg);
    opacity: 0;
  }
}
@keyframes uxlv7n0 {
  100%, 0% {
    background-color: var(--slab-phase1-color);
  }
  24.9% {
    background-color: var(--slab-phase1-color);
  }
  25% {
    background-color: var(--slab-phase2-color, var(--slab-phase1-color));
  }
  49.9% {
    background-color: var(--slab-phase2-color, var(--slab-phase1-color));
  }
  50% {
    background-color: var(--slab-phase3-color, var(--slab-phase1-color));
  }
  74.9% {
    background-color: var(--slab-phase3-color, var(--slab-phase1-color));
  }
  75% {
    background-color: var(--slab-phase4-color, var(--slab-phase1-color));
  }
  99.9% {
    background-color: var(--slab-phase4-color, var(--slab-phase1-color));
  }
}`);Array.from({length:4},function(i,o){return"--slab-phase".concat(o+1,"-color")});Pe(`.lifeline-rli-bounding-box {
  --life-line-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  isolation: isolate;
  color: var(--life-line-phase1-color);
}
.lifeline-rli-bounding-box .lifeline-indicator {
  position: relative;
  text-align: center;
}
.lifeline-rli-bounding-box .lifeline-indicator path.rli-lifeline {
  stroke-dasharray: 474.7616760254 30.3039367676;
  animation: var(--rli-animation-duration, 2s) var(--rli-animation-function, linear) infinite uxlv7k3, calc(var(--rli-animation-duration, 2s) * 4) var(--rli-animation-function, linear) infinite uxlv7kg;
}
.lifeline-rli-bounding-box .lifeline-text {
  color: currentColor;
  mix-blend-mode: difference;
  width: unset;
  display: block;
}

@property --life-line-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --life-line-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --life-line-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --life-line-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 2s;
}
@keyframes uxlv7k3 {
  to {
    stroke-dashoffset: -1010.1312255859;
  }
}
@keyframes uxlv7kg {
  100%, 0% {
    color: var(--life-line-phase1-color);
  }
  20% {
    color: var(--life-line-phase1-color);
  }
  25% {
    color: var(--life-line-phase2-color, var(--life-line-phase1-color));
  }
  45% {
    color: var(--life-line-phase2-color, var(--life-line-phase1-color));
  }
  50% {
    color: var(--life-line-phase3-color, var(--life-line-phase1-color));
  }
  70% {
    color: var(--life-line-phase3-color, var(--life-line-phase1-color));
  }
  75% {
    color: var(--life-line-phase4-color, var(--life-line-phase1-color));
  }
  95% {
    color: var(--life-line-phase4-color, var(--life-line-phase1-color));
  }
}`);Array.from({length:4},function(i,o){return"--life-line-phase".concat(o+1,"-color")});function Ex({inNote:i,setInNote:o,view:u,search:c,isOpen:s,page:d,isDeleting:m,setIsDeleting:y,currentUser:p}){O.useEffect(()=>{document.title="LockLedger - Notes"},[]);const[h,v]=O.useState([]),[C,M]=O.useState(null),[B,w]=O.useState(!1),[E,L]=O.useState(!0),q=(h.length<=0||h.every(F=>F.isDeleted))&&u==="all"&&!E,X=h.every(F=>!F.isFavorite)&&u==="favorites"&&!E||h.every(F=>F.isDeleted&&F.isFavorite)&&u==="favorites",G=h.every(F=>!F.isDeleted)&&u==="trash"&&!E;O.useEffect(()=>{async function F(){try{const ee=await Jv(p.id);v(ee||[])}catch(ee){console.log(ee)}finally{L(!1)}}F()},[]);function ce(F){o(!0),M(F)}async function J(F,ee,ve,Tt,je){w(!1);const R=await Kv(F,ee,ve,Tt,je);v(Z=>[R,...Z])}function ue(){if(u==="all"&&h)return h.filter(F=>!F.isDeleted);if(u==="favorites"&&h)return h.filter(F=>F.isFavorite&&!F.isDeleted);if(u==="trash"&&h)return h.filter(F=>F.isDeleted)}async function Y(F){v(ee=>ee.map(ve=>ve.id===F.id?{...ve,isFavorite:!ve.isFavorite}:ve)),await $r(F.id,{isFavorite:!F.isFavorite})}async function oe(F){v(ee=>ee.map(ve=>ve.id===F?{...ve,isDeleted:!1}:ve)),await $r(F,{isDeleted:!1})}async function V(){try{v(F=>F.filter(ee=>!ee.isDeleted)),await Wv(h)}catch(F){console.error("Failed to delete all notes: ",F)}}function he(){let F=ue()||[];return c&&(F=F.filter(ee=>ee.title.toLowerCase().includes(c.toLowerCase()))),F.map(ee=>g.jsxs("div",{onClick:()=>ce(ee.id),className:Et.notesContent,children:[g.jsxs("div",{children:[g.jsx("h4",{children:ee.title}),g.jsxs("button",{onClick:ve=>{ve.stopPropagation(),Y(ee)},children:[!ee.isFavorite&&u!=="trash"&&g.jsx("img",{src:$v,alt:"notFavorite",loading:"lazy"}),ee.isFavorite&&u!=="trash"&&g.jsx("img",{src:ex,alt:"Favorite",loading:"lazy"}),u==="trash"&&g.jsx("button",{className:Et.recoverBtn,onClick:ve=>{ve.stopPropagation(),oe(ee.id)},children:g.jsx("img",{src:tx,alt:"restoreBtn"})})]})]}),g.jsx("p",{children:ee.date})]},ee.id))}return g.jsxs("section",{className:Et.content,children:[g.jsxs("div",{className:Et.head,children:[g.jsx("h2",{children:u==="all"?"All Notes":u==="favorites"?"Favorites":"Trash"}),g.jsxs("div",{children:[u==="trash"&&g.jsx("button",{onClick:V,className:Et.deleteAllBtn,children:"Delete All"}),!i&&u!=="trash"&&g.jsx("button",{onClick:()=>w(!0),className:`${Et.addBtn} ${u!=="all"?Et.disable:""}`,disabled:u!=="all",children:"Add Note +"}),i&&g.jsx("button",{onClick:()=>o(!1),className:Et.addBtn,children:"Return to Notes"})]})]}),q&&g.jsx("img",{id:"1",src:Mc,alt:"notesNotFound",className:Et.noNotesImg}),X&&g.jsx("img",{id:"2",src:Mc,alt:"notesNotFound",className:Et.noNotesImg}),G&&g.jsx("img",{id:"3",src:Mc,alt:"notesNotFound",className:Et.noNotesImg}),B&&g.jsx(io,{currentUser:p,addNote:J,page:d,setAddingNote:w}),!i&&g.jsx("div",{className:Et.notes,children:he()}),E&&g.jsx("div",{className:Et.loading,children:g.jsx(Zh,{color:"cyan",size:"large",text:"",textColor:""})}),i&&g.jsx(Iv,{isOpen:s,setInNote:o,noteId:C,page:d,notes:h,setNotes:v,isDeleting:m,setIsDeleting:y,view:u})]})}const Ox="_content_1gcd0_1",Tx="_head_1gcd0_10",wx="_addBtn_1gcd0_23",Nx="_tableContainer_1gcd0_42",Cx="_table_1gcd0_42",Dx="_editBtn_1gcd0_96",_x="_deleteBtn_1gcd0_96",zx="_loading_1gcd0_107",Mx="_noTransactionsImg_1gcd0_115",Rx="_notOpen_1gcd0_124",Wt={content:Ox,head:Tx,addBtn:wx,tableContainer:Nx,table:Cx,editBtn:Dx,deleteBtn:_x,loading:zx,noTransactionsImg:Mx,notOpen:Rx},kx="/Lock-Ledger/assets/noTransaction-BlNjrVDc.webp",oo="https://68c30a65f9928dbf33f08cf1.mockapi.io/LockLedger";async function Bx(i,o,u,c,s){try{return await(await fetch(`${oo}/ledger`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({userId:i,date:o,title:u,type:c,amount:s})})).json()}catch{throw new Error("Failed to Create TransAction")}}async function jx(i){try{const o=await fetch(`${oo}/ledger?userId=${i}`);if(o.ok)return o.json()}catch{throw new Error("Failed to Fetch Data")}}async function Ux(i,o,u,c,s){try{return(await fetch(`${oo}/ledger/${i}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({date:o,title:u,type:c,amount:s})})).json()}catch{throw new Error("Failed to update Ledger")}}async function qx(i){try{return await fetch(`${oo}/ledger/${i}`,{method:"DELETE"}),!0}catch{throw new Error("Failed to delete data")}}function Hx({search:i,page:o,isDeleting:u,setIsDeleting:c,currentUser:s,isOpen:d}){O.useEffect(()=>{document.title="LockLedger - Ledger"},[]),O.useEffect(()=>{async function ue(){try{const Y=await jx(s.id);y(Y?Y.sort((oe,V)=>V.date.localeCompare(oe.date)):[])}catch(Y){console.log(Y)}finally{q(!1)}}ue()},[]);const[m,y]=O.useState([]),[p,h]=O.useState(!1),[v,C]=O.useState(""),[M,B]=O.useState(!1),[w,E]=O.useState(null),[L,q]=O.useState(!0);async function X(ue,Y,oe,V){const he=await Bx(s.id,ue,Y,oe,V);y(F=>[he,...F].sort((ee,ve)=>ve.date.localeCompare(ee.date))),h(!1),B(!1),C("")}async function G(ue,Y,oe,V){const he=await Ux(v.id,ue,Y,oe,V);y(F=>F.map(ee=>ee.id===v.id?{...ee,date:he.date,title:he.title,type:he.type,amount:he.amount}:ee)),h(!1),B(!1),C(""),console.log(v)}async function ce(){c(!1),E(null),y(ue=>ue.filter(Y=>Y.id!=w.id)),await qx(w.id)}function J(){const ue=i?m.filter(Y=>Y.title.toLowerCase().includes(i.toLowerCase())):m;if(m)return ue.map(Y=>g.jsxs("tr",{children:[g.jsx("td",{children:Y.date}),g.jsx("td",{children:Y.title}),g.jsx("td",{children:Y.type}),g.jsxs("td",{children:["$",Y.amount]}),g.jsxs("td",{children:[g.jsx("button",{onClick:()=>{C(m.find(oe=>oe.id===Y.id)),h(!0),B(!0)},className:Wt.editBtn,children:g.jsx("img",{src:fi,alt:"editBtn",loading:"lazy"})}),g.jsx("button",{onClick:()=>{c(!0),E(Y)},className:Wt.deleteBtn,children:g.jsx("img",{src:Qh,alt:"deletBtn",loading:"lazy"})})]})]},Y.id))}return g.jsxs("section",{className:Wt.content,children:[g.jsxs("div",{className:Wt.head,children:[g.jsx("h2",{children:"Ledger"}),g.jsx("button",{onClick:()=>h(!0),className:Wt.addBtn,children:"Update Ledger"})]}),(p||u)&&g.jsx(io,{page:o,setAddingTransaction:h,addTransaction:X,transaction:v,isEditing:M,editTransaction:G,isDeleting:u,setIsDeleting:c,deleteTransaction:ce}),g.jsx("div",{className:Wt.tableContainer,children:g.jsxs("table",{className:Wt.table,children:[g.jsx("thead",{children:g.jsxs("tr",{children:[g.jsx("th",{children:"Date"}),g.jsx("th",{children:"Title"}),g.jsx("th",{children:"Type"}),g.jsx("th",{children:"Amount"}),g.jsx("th",{children:"Actions"})]})}),g.jsx("tbody",{children:J()})]})}),L&&g.jsx("div",{className:Wt.loading,children:g.jsx(Zh,{color:"cyan",size:"large",text:"",textColor:""})}),!L&&!m.length&&g.jsx("img",{src:kx,className:`${Wt.noTransactionsImg} ${!d&&Wt.notOpen}`,alt:"No Current Transactions"})]})}const Lx="_profileContainer_s23xq_1",Qx="_head_s23xq_9",Yx="_profile_s23xq_1",Xx="_accountInfo_s23xq_34",Gx="_profilePicContainer_s23xq_41",Zx="_profilePic_s23xq_41",Vx="_editPicBtn_s23xq_55",Px="_sideBarClose_s23xq_74",Jx="_info_s23xq_78",Kx="_editInfo_s23xq_114",Fx="_changesBtns_s23xq_150",Wx="_changePassBtn_s23xq_159",Ix="_settings_s23xq_174",$x="_errorMsg_s23xq_199",ey="_invalid_s23xq_205",Le={profileContainer:Lx,head:Qx,profile:Yx,accountInfo:Xx,profilePicContainer:Gx,profilePic:Zx,editPicBtn:Vx,sideBarClose:Px,info:Jx,editInfo:Kx,changesBtns:Fx,changePassBtn:Wx,settings:Ix,errorMsg:$x,invalid:ey};function ty({isOpen:i,currentUser:o,setCurrentUser:u,page:c}){O.useEffect(()=>{document.title="LockLedger - Profile"},[]);const s=da(),[d,m]=O.useState(o.username),[y,p]=O.useState(o.email),h=O.useRef(null),v=O.useRef(null),[C,M]=O.useState(!1),[B,w]=O.useState(!1),[E,L]=O.useState(""),[q,X]=O.useState(!1),[G,ce]=O.useState({});O.useEffect(()=>{const Y=setTimeout(()=>{ce({})},3e3);return()=>clearTimeout(Y)},[G]);async function J(Y,oe){const V=al({email:y,name:d});if(Object.keys(V).length>0){ce(V);return}await qh(o.id,Y),oe==="username"?(u(he=>({...he,username:d})),qc("currentUser",{username:d}),M(!1)):oe==="email"&&(u(he=>({...he,email:y})),qc("currentUser",{email:y}),w(!1))}function ue(){u(0),wg("currentUser"),s("/Lock-Ledger/login")}return O.useEffect(()=>{if(C&&h.current){const Y=h.current;Y.focus(),Y.setSelectionRange(Y.value.length,Y.value.length)}else B&&v.current&&v.current.focus()},[C,B]),g.jsxs("div",{className:Le.profileContainer,children:[g.jsx("div",{className:Le.head,children:g.jsx("h2",{children:"Profile & Settings"})}),g.jsxs("div",{className:Le.profile,children:[g.jsxs("div",{className:Le.accountInfo,children:[g.jsxs("div",{className:Le.profilePicContainer,children:[g.jsx("img",{src:Lh,alt:"ProfilePicture",className:Le.profilePic,loading:"lazy"}),g.jsx("button",{className:`${Le.editPicBtn} ${i?"":Le.sideBarClose}`,children:g.jsx("img",{src:fi,alt:"editBtn",loading:"lazy"})})]}),g.jsxs("div",{className:Le.info,children:[g.jsxs("div",{className:Le.userInfo,children:[g.jsx("label",{htmlFor:"UserName",children:"Username"}),g.jsxs("div",{className:Le.editInfo,children:[g.jsx("input",{id:"UserName",placeholder:"Username",className:G.name&&Le.invalid,ref:h,type:"text",value:d,onChange:Y=>m(Y.target.value),disabled:!C}),g.jsx("button",{onClick:()=>{M(!0),L(d)},children:!C&&g.jsx("img",{src:fi,alt:"editBtn",loading:"lazy"})}),C&&g.jsxs("div",{className:Le.changesBtns,children:[g.jsx("button",{onClick:()=>J({username:d},"username"),children:g.jsx("img",{src:Hc,alt:"editBtn",loading:"lazy"})}),g.jsx("button",{onClick:()=>{M(!1),m(E)},children:g.jsx("img",{src:Ir,alt:"discardBtn",loading:"lazy"})})]})]}),G.name&&g.jsxs("p",{className:Le.errorMsg,children:["*",G.name,"*"]})]}),g.jsxs("div",{className:Le.userInfo,children:[g.jsx("label",{htmlFor:"email",children:"Email"}),g.jsxs("div",{className:Le.editInfo,children:[g.jsx("input",{id:"email",placeholder:"example@gmail.com",className:G.email&&Le.invalid,ref:v,type:"email",value:y,onChange:Y=>p(Y.target.value),disabled:!B}),g.jsx("button",{onClick:()=>{w(!0),L(y)},children:!B&&g.jsx("img",{src:fi,alt:"editBtn",loading:"lazy"})}),B&&g.jsxs("div",{className:Le.changesBtns,children:[g.jsx("button",{onClick:()=>J({email:y},"email"),children:g.jsx("img",{src:Hc,alt:"editBtn",loading:"lazy"})}),g.jsx("button",{onClick:()=>{w(!1),p(E)},children:g.jsx("img",{src:Ir,alt:"discardBtn",loading:"lazy"})})]})]}),G.email&&g.jsxs("p",{className:Le.errorMsg,children:["*",G.email,"*"]})]}),g.jsxs("div",{className:Le.userInfo,children:[g.jsx("label",{style:{marginBottom:"5px"},htmlFor:"password",children:"Password"}),g.jsx("button",{onClick:()=>X(!0),className:Le.changePassBtn,children:"Change Password"})]})]})]}),q&&g.jsx(io,{isChangingPassword:q,currentUser:o,setCurrentUser:u,setIsChangingPassword:X,page:c}),g.jsxs("div",{className:Le.settings,children:[g.jsx("div",{children:"Notifications"}),g.jsx("div",{children:"Report A Bug"}),g.jsx("div",{onClick:ue,children:"Log out"})]})]})]})}function ny({currentUser:i,setCurrentUser:o}){const[u,c]=O.useState("all"),[s,d]=O.useState(""),[m,y]=O.useState(!1),[p,h]=O.useState(!0),[v,C]=O.useState("notes"),[M,B]=O.useState(!1),[w,E]=O.useState(window.innerWidth>768);function L(q){C(q)}return g.jsxs("div",{className:`${ch.bodyContainer} ${p?ch.sidebarOpen:""}`,children:[g.jsx(bv,{isOpen:p,setIsOpen:h,search:s,setSearch:d,isMobile:w}),g.jsx(av,{isMobile:w,setIsMobile:E,currentUser:i,setInNote:y,view:u,setView:c,isOpen:p,setIsOpen:h,changePage:L,page:v}),v==="notes"&&g.jsx(Ex,{currentUser:i,inNote:m,setInNote:y,view:u,search:s,isOpen:p,page:v,isDeleting:M,setIsDeleting:B}),v==="ledger"&&g.jsx(Hx,{currentUser:i,isOpen:p,search:s,page:v,isDeleting:M,setIsDeleting:B}),v==="profile"&&g.jsx(ty,{isOpen:p,currentUser:i,setCurrentUser:o,page:v})]})}const ay="_bodyContainer_15h0d_8",ly="_container_15h0d_23",iy="_logo_15h0d_38",ry="_pinContainer_15h0d_65",oy="_pin_15h0d_65",uy="_unlockBtn_15h0d_87",cy="_errorMsg_15h0d_105",sy="_invalid_15h0d_111",Zn={bodyContainer:ay,container:ly,logo:iy,pinContainer:ry,pin:oy,unlockBtn:uy,errorMsg:cy,invalid:sy};function fy({currentUser:i}){const[o,u]=O.useState({}),[c,s]=O.useState("");O.useEffect(()=>{const y=setTimeout(()=>{u({})},3e3);return()=>clearTimeout(y)},[o]);const d=da();function m(){const y=al({pin:c});if(Object.keys(y).length>0){u(y);return}c===i.pin?d("/Lock-Ledger/"):u({pin:"Invalid PIN"})}return g.jsx("div",{className:Zn.bodyContainer,children:g.jsx("form",{onSubmit:y=>{y.preventDefault(),m()},children:g.jsxs("div",{className:Zn.container,children:[g.jsx("img",{className:Zn.logo,src:lo,alt:"LockLedgerLogo",loading:"lazy"}),g.jsx("h1",{children:"Enter your PIN to Conitnue"}),g.jsxs("div",{className:Zn.pinContainer,children:[g.jsx("label",{htmlFor:"pin",children:"PIN"}),g.jsx("input",{onChange:y=>s(y.target.value),placeholder:"PIN",id:"pin",type:"number",className:`${Zn.pin} ${o.pin&&Zn.invalid}`}),o.pin&&g.jsxs("p",{className:Zn.errorMsg,children:["*",o.pin,"*"]})]}),g.jsx("button",{type:"submit",className:Zn.unlockBtn,children:"Unlock"})]})})})}function dy({currentUser:i}){return i?g.jsx(p1,{}):g.jsx(m1,{to:"/Lock-Ledger/login"})}function hy(){const[i,o]=O.useState(()=>Tg("currentUser")||0),u=da();return O.useEffect(()=>{i&&u("/Lock-Ledger/Pin")},[]),g.jsxs(v1,{children:[g.jsxs(el,{element:g.jsx(dy,{currentUser:i}),children:[g.jsx(el,{exact:!0,path:"/Lock-ledger/Pin",element:g.jsx(fy,{currentUser:i})}),g.jsx(el,{path:"/Lock-Ledger/",element:g.jsx(ny,{currentUser:i,setCurrentUser:o})})]}),g.jsx(el,{path:"/Lock-Ledger/login",element:g.jsx(Dg,{currentUser:i,setCurrentUser:o})}),g.jsx(el,{path:"/Lock-Ledger/signup",element:g.jsx(Gg,{currentUser:i,setCurrentUser:o})})]})}Op.createRoot(document.getElementById("root")).render(g.jsx(O.StrictMode,{children:g.jsx(Q1,{children:g.jsx(hy,{})})}));"serviceWorker"in navigator&&window.addEventListener("load",()=>{navigator.serviceWorker.register("./service-worker.js").then(i=>console.log("Service Worker registered:",i)).catch(i=>console.log("Service Worker registration failed:",i))});
