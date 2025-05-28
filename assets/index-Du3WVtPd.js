import{doc as lo,setDoc as Ec,getDoc as Ac}from"https://www.gstatic.com/firebasejs/11.6.1/firebase-firestore.js";import"https://www.gstatic.com/firebasejs/11.6.1/firebase-auth.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function n(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(r){if(r.ep)return;r.ep=!0;const a=n(r);fetch(r.href,a)}})();const Cc=()=>{};var ar={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uo=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let r=t.charCodeAt(s);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},Sc=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const r=t[n++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const a=t[n++];e[s++]=String.fromCharCode((r&31)<<6|a&63)}else if(r>239&&r<365){const a=t[n++],l=t[n++],d=t[n++],h=((r&7)<<18|(a&63)<<12|(l&63)<<6|d&63)-65536;e[s++]=String.fromCharCode(55296+(h>>10)),e[s++]=String.fromCharCode(56320+(h&1023))}else{const a=t[n++],l=t[n++];e[s++]=String.fromCharCode((r&15)<<12|(a&63)<<6|l&63)}}return e.join("")},ho={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<t.length;r+=3){const a=t[r],l=r+1<t.length,d=l?t[r+1]:0,h=r+2<t.length,w=h?t[r+2]:0,A=a>>2,E=(a&3)<<4|d>>4;let T=(d&15)<<2|w>>6,P=w&63;h||(P=64,l||(T=64)),s.push(n[A],n[E],n[T],n[P])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(uo(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Sc(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<t.length;){const a=n[t.charAt(r++)],d=r<t.length?n[t.charAt(r)]:0;++r;const w=r<t.length?n[t.charAt(r)]:64;++r;const E=r<t.length?n[t.charAt(r)]:64;if(++r,a==null||d==null||w==null||E==null)throw new kc;const T=a<<2|d>>4;if(s.push(T),w!==64){const P=d<<4&240|w>>2;if(s.push(P),E!==64){const S=w<<6&192|E;s.push(S)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class kc extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Pc=function(t){const e=uo(t);return ho.encodeByteArray(e,!0)},In=function(t){return Pc(t).replace(/\./g,"")},fo=function(t){try{return ho.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Rc(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Lc=()=>Rc().__FIREBASE_DEFAULTS__,Oc=()=>{if(typeof process>"u"||typeof ar>"u")return;const t=ar.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},xc=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&fo(t[1]);return e&&JSON.parse(e)},ji=()=>{try{return Cc()||Lc()||Oc()||xc()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},po=t=>{var e,n;return(n=(e=ji())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Dc=t=>{const e=po(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},go=()=>{var t;return(t=ji())===null||t===void 0?void 0:t.config},mo=t=>{var e;return(e=ji())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nc{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function xn(t){return t.endsWith(".cloudworkstations.dev")}async function yo(t){return(await fetch(t,{credentials:"include"})).ok}/**
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
 */function Mc(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",r=t.iat||0,a=t.sub||t.user_id;if(!a)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const l=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:r,exp:r+3600,auth_time:r,sub:a,user_id:a,firebase:{sign_in_provider:"custom",identities:{}}},t);return[In(JSON.stringify(n)),In(JSON.stringify(l)),""].join(".")}const Mt={};function Uc(){const t={prod:[],emulator:[]};for(const e of Object.keys(Mt))Mt[e]?t.emulator.push(e):t.prod.push(e);return t}function Bc(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let cr=!1;function vo(t,e){if(typeof window>"u"||typeof document>"u"||!xn(window.location.host)||Mt[t]===e||Mt[t]||cr)return;Mt[t]=e;function n(T){return`__firebase__banner__${T}`}const s="__firebase__banner",a=Uc().prod.length>0;function l(){const T=document.getElementById(s);T&&T.remove()}function d(T){T.style.display="flex",T.style.background="#7faaf0",T.style.position="fixed",T.style.bottom="5px",T.style.left="5px",T.style.padding=".5em",T.style.borderRadius="5px",T.style.alignItems="center"}function h(T,P){T.setAttribute("width","24"),T.setAttribute("id",P),T.setAttribute("height","24"),T.setAttribute("viewBox","0 0 24 24"),T.setAttribute("fill","none"),T.style.marginLeft="-6px"}function w(){const T=document.createElement("span");return T.style.cursor="pointer",T.style.marginLeft="16px",T.style.fontSize="24px",T.innerHTML=" &times;",T.onclick=()=>{cr=!0,l()},T}function A(T,P){T.setAttribute("id",P),T.innerText="Learn more",T.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",T.setAttribute("target","__blank"),T.style.paddingLeft="5px",T.style.textDecoration="underline"}function E(){const T=Bc(s),P=n("text"),S=document.getElementById(P)||document.createElement("span"),L=n("learnmore"),k=document.getElementById(L)||document.createElement("a"),$=n("preprendIcon"),O=document.getElementById($)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(T.created){const x=T.element;d(x),A(k,L);const j=w();h(O,$),x.append(O,S,k,j),document.body.appendChild(x)}a?(S.innerText="Preview backend disconnected.",O.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(O.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,S.innerText="Preview backend running in this workspace."),S.setAttribute("id",P)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",E):E()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function te(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Fc(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(te())}function Hc(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function wo(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function jc(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function $c(){const t=te();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Io(){try{return typeof indexedDB=="object"}catch{return!1}}function bo(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var a;e(((a=r.error)===null||a===void 0?void 0:a.message)||"")}}catch(n){e(n)}})}function Vc(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qc="FirebaseError";class pe extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=qc,Object.setPrototypeOf(this,pe.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ze.prototype.create)}}class Ze{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},r=`${this.service}/${e}`,a=this.errors[e],l=a?zc(a,s):"Error",d=`${this.serviceName}: ${l} (${r}).`;return new pe(r,d,s)}}function zc(t,e){return t.replace(Wc,(n,s)=>{const r=e[s];return r!=null?String(r):`<${s}?>`})}const Wc=/\{\$([^}]+)}/g;function Gc(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function He(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const r of n){if(!s.includes(r))return!1;const a=t[r],l=e[r];if(lr(a)&&lr(l)){if(!He(a,l))return!1}else if(a!==l)return!1}for(const r of s)if(!n.includes(r))return!1;return!0}function lr(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qt(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(r=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function Dt(t){const e={};return t.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[r,a]=s.split("=");e[decodeURIComponent(r)]=decodeURIComponent(a)}}),e}function Nt(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function Kc(t,e){const n=new Jc(t,e);return n.subscribe.bind(n)}class Jc{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let r;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");Yc(e,["next","error","complete"])?r=e:r={next:e,error:n,complete:s},r.next===void 0&&(r.next=fi),r.error===void 0&&(r.error=fi),r.complete===void 0&&(r.complete=fi);const a=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),a}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Yc(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function fi(){}/**
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
 */const Xc=1e3,Zc=2,Qc=4*60*60*1e3,el=.5;function ur(t,e=Xc,n=Zc){const s=e*Math.pow(n,t),r=Math.round(el*s*(Math.random()-.5)*2);return Math.min(Qc,s+r)}/**
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
 */function ce(t){return t&&t._delegate?t._delegate:t}class he{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Ge="[DEFAULT]";/**
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
 */class tl{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new Nc;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(a){if(r)return null;throw a}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(il(e))try{this.getOrInitializeService({instanceIdentifier:Ge})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const a=this.getOrInitializeService({instanceIdentifier:r});s.resolve(a)}catch{}}}}clearInstance(e=Ge){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ge){return this.instances.has(e)}getOptions(e=Ge){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[a,l]of this.instancesDeferred.entries()){const d=this.normalizeInstanceIdentifier(a);s===d&&l.resolve(r)}return r}onInit(e,n){var s;const r=this.normalizeInstanceIdentifier(n),a=(s=this.onInitCallbacks.get(r))!==null&&s!==void 0?s:new Set;a.add(e),this.onInitCallbacks.set(r,a);const l=this.instances.get(r);return l&&e(l,r),()=>{a.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const r of s)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:nl(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Ge){return this.component?this.component.multipleInstances?e:Ge:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function nl(t){return t===Ge?void 0:t}function il(t){return t.instantiationMode==="EAGER"}/**
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
 */class sl{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new tl(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var M;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(M||(M={}));const rl={debug:M.DEBUG,verbose:M.VERBOSE,info:M.INFO,warn:M.WARN,error:M.ERROR,silent:M.SILENT},ol=M.INFO,al={[M.DEBUG]:"log",[M.VERBOSE]:"log",[M.INFO]:"info",[M.WARN]:"warn",[M.ERROR]:"error"},cl=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),r=al[e];if(r)console[r](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Dn{constructor(e){this.name=e,this._logLevel=ol,this._logHandler=cl,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in M))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?rl[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,M.DEBUG,...e),this._logHandler(this,M.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,M.VERBOSE,...e),this._logHandler(this,M.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,M.INFO,...e),this._logHandler(this,M.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,M.WARN,...e),this._logHandler(this,M.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,M.ERROR,...e),this._logHandler(this,M.ERROR,...e)}}const ll=(t,e)=>e.some(n=>t instanceof n);let dr,hr;function ul(){return dr||(dr=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function dl(){return hr||(hr=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const _o=new WeakMap,Si=new WeakMap,To=new WeakMap,pi=new WeakMap,$i=new WeakMap;function hl(t){const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("success",a),t.removeEventListener("error",l)},a=()=>{n(Be(t.result)),r()},l=()=>{s(t.error),r()};t.addEventListener("success",a),t.addEventListener("error",l)});return e.then(n=>{n instanceof IDBCursor&&_o.set(n,t)}).catch(()=>{}),$i.set(e,t),e}function fl(t){if(Si.has(t))return;const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("complete",a),t.removeEventListener("error",l),t.removeEventListener("abort",l)},a=()=>{n(),r()},l=()=>{s(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",a),t.addEventListener("error",l),t.addEventListener("abort",l)});Si.set(t,e)}let ki={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Si.get(t);if(e==="objectStoreNames")return t.objectStoreNames||To.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Be(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function pl(t){ki=t(ki)}function gl(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(gi(this),e,...n);return To.set(s,e.sort?e.sort():[e]),Be(s)}:dl().includes(t)?function(...e){return t.apply(gi(this),e),Be(_o.get(this))}:function(...e){return Be(t.apply(gi(this),e))}}function ml(t){return typeof t=="function"?gl(t):(t instanceof IDBTransaction&&fl(t),ll(t,ul())?new Proxy(t,ki):t)}function Be(t){if(t instanceof IDBRequest)return hl(t);if(pi.has(t))return pi.get(t);const e=ml(t);return e!==t&&(pi.set(t,e),$i.set(e,t)),e}const gi=t=>$i.get(t);function Eo(t,e,{blocked:n,upgrade:s,blocking:r,terminated:a}={}){const l=indexedDB.open(t,e),d=Be(l);return s&&l.addEventListener("upgradeneeded",h=>{s(Be(l.result),h.oldVersion,h.newVersion,Be(l.transaction),h)}),n&&l.addEventListener("blocked",h=>n(h.oldVersion,h.newVersion,h)),d.then(h=>{a&&h.addEventListener("close",()=>a()),r&&h.addEventListener("versionchange",w=>r(w.oldVersion,w.newVersion,w))}).catch(()=>{}),d}const yl=["get","getKey","getAll","getAllKeys","count"],vl=["put","add","delete","clear"],mi=new Map;function fr(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(mi.get(e))return mi.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,r=vl.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(r||yl.includes(n)))return;const a=async function(l,...d){const h=this.transaction(l,r?"readwrite":"readonly");let w=h.store;return s&&(w=w.index(d.shift())),(await Promise.all([w[n](...d),r&&h.done]))[0]};return mi.set(e,a),a}pl(t=>({...t,get:(e,n,s)=>fr(e,n)||t.get(e,n,s),has:(e,n)=>!!fr(e,n)||t.has(e,n)}));/**
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
 */class wl{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Il(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function Il(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Pi="@firebase/app",pr="0.13.0";/**
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
 */const Ae=new Dn("@firebase/app"),bl="@firebase/app-compat",_l="@firebase/analytics-compat",Tl="@firebase/analytics",El="@firebase/app-check-compat",Al="@firebase/app-check",Cl="@firebase/auth",Sl="@firebase/auth-compat",kl="@firebase/database",Pl="@firebase/data-connect",Rl="@firebase/database-compat",Ll="@firebase/functions",Ol="@firebase/functions-compat",xl="@firebase/installations",Dl="@firebase/installations-compat",Nl="@firebase/messaging",Ml="@firebase/messaging-compat",Ul="@firebase/performance",Bl="@firebase/performance-compat",Fl="@firebase/remote-config",Hl="@firebase/remote-config-compat",jl="@firebase/storage",$l="@firebase/storage-compat",Vl="@firebase/firestore",ql="@firebase/ai",zl="@firebase/firestore-compat",Wl="firebase",Gl="11.8.0";/**
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
 */const Ri="[DEFAULT]",Kl={[Pi]:"fire-core",[bl]:"fire-core-compat",[Tl]:"fire-analytics",[_l]:"fire-analytics-compat",[Al]:"fire-app-check",[El]:"fire-app-check-compat",[Cl]:"fire-auth",[Sl]:"fire-auth-compat",[kl]:"fire-rtdb",[Pl]:"fire-data-connect",[Rl]:"fire-rtdb-compat",[Ll]:"fire-fn",[Ol]:"fire-fn-compat",[xl]:"fire-iid",[Dl]:"fire-iid-compat",[Nl]:"fire-fcm",[Ml]:"fire-fcm-compat",[Ul]:"fire-perf",[Bl]:"fire-perf-compat",[Fl]:"fire-rc",[Hl]:"fire-rc-compat",[jl]:"fire-gcs",[$l]:"fire-gcs-compat",[Vl]:"fire-fst",[zl]:"fire-fst-compat",[ql]:"fire-vertex","fire-js":"fire-js",[Wl]:"fire-js-all"};/**
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
 */const bn=new Map,Jl=new Map,Li=new Map;function gr(t,e){try{t.container.addComponent(e)}catch(n){Ae.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function we(t){const e=t.name;if(Li.has(e))return Ae.debug(`There were multiple attempts to register component ${e}.`),!1;Li.set(e,t);for(const n of bn.values())gr(n,t);for(const n of Jl.values())gr(n,t);return!0}function Qe(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function se(t){return t==null?!1:t.settings!==void 0}/**
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
 */const Yl={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Fe=new Ze("app","Firebase",Yl);/**
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
 */class Xl{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new he("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Fe.create("app-deleted",{appName:this._name})}}/**
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
 */const ft=Gl;function Ao(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Ri,automaticDataCollectionEnabled:!0},e),r=s.name;if(typeof r!="string"||!r)throw Fe.create("bad-app-name",{appName:String(r)});if(n||(n=go()),!n)throw Fe.create("no-options");const a=bn.get(r);if(a){if(He(n,a.options)&&He(s,a.config))return a;throw Fe.create("duplicate-app",{appName:r})}const l=new sl(r);for(const h of Li.values())l.addComponent(h);const d=new Xl(n,s,l);return bn.set(r,d),d}function Vi(t=Ri){const e=bn.get(t);if(!e&&t===Ri&&go())return Ao();if(!e)throw Fe.create("no-app",{appName:t});return e}function ae(t,e,n){var s;let r=(s=Kl[t])!==null&&s!==void 0?s:t;n&&(r+=`-${n}`);const a=r.match(/\s|\//),l=e.match(/\s|\//);if(a||l){const d=[`Unable to register library "${r}" with version "${e}":`];a&&d.push(`library name "${r}" contains illegal characters (whitespace or "/")`),a&&l&&d.push("and"),l&&d.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ae.warn(d.join(" "));return}we(new he(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const Zl="firebase-heartbeat-database",Ql=1,$t="firebase-heartbeat-store";let yi=null;function Co(){return yi||(yi=Eo(Zl,Ql,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore($t)}catch(n){console.warn(n)}}}}).catch(t=>{throw Fe.create("idb-open",{originalErrorMessage:t.message})})),yi}async function eu(t){try{const n=(await Co()).transaction($t),s=await n.objectStore($t).get(So(t));return await n.done,s}catch(e){if(e instanceof pe)Ae.warn(e.message);else{const n=Fe.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ae.warn(n.message)}}}async function mr(t,e){try{const s=(await Co()).transaction($t,"readwrite");await s.objectStore($t).put(e,So(t)),await s.done}catch(n){if(n instanceof pe)Ae.warn(n.message);else{const s=Fe.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Ae.warn(s.message)}}}function So(t){return`${t.name}!${t.options.appId}`}/**
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
 */const tu=1024,nu=30;class iu{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new ru(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,n;try{const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),a=yr();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===a||this._heartbeatsCache.heartbeats.some(l=>l.date===a))return;if(this._heartbeatsCache.heartbeats.push({date:a,agent:r}),this._heartbeatsCache.heartbeats.length>nu){const l=ou(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(l,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){Ae.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=yr(),{heartbeatsToSend:s,unsentEntries:r}=su(this._heartbeatsCache.heartbeats),a=In(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),a}catch(n){return Ae.warn(n),""}}}function yr(){return new Date().toISOString().substring(0,10)}function su(t,e=tu){const n=[];let s=t.slice();for(const r of t){const a=n.find(l=>l.agent===r.agent);if(a){if(a.dates.push(r.date),vr(n)>e){a.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),vr(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class ru{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Io()?bo().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await eu(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return mr(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return mr(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function vr(t){return In(JSON.stringify({version:2,heartbeats:t})).length}function ou(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let s=1;s<t.length;s++)t[s].date<n&&(n=t[s].date,e=s);return e}/**
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
 */function au(t){we(new he("platform-logger",e=>new wl(e),"PRIVATE")),we(new he("heartbeat",e=>new iu(e),"PRIVATE")),ae(Pi,pr,t),ae(Pi,pr,"esm2017"),ae("fire-js","")}au("");var cu="firebase",lu="11.8.1";/**
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
 */ae(cu,lu,"app");const ko="@firebase/installations",qi="0.6.17";/**
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
 */const Po=1e4,Ro=`w:${qi}`,Lo="FIS_v2",uu="https://firebaseinstallations.googleapis.com/v1",du=60*60*1e3,hu="installations",fu="Installations";/**
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
 */const pu={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Je=new Ze(hu,fu,pu);function Oo(t){return t instanceof pe&&t.code.includes("request-failed")}/**
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
 */function xo({projectId:t}){return`${uu}/projects/${t}/installations`}function Do(t){return{token:t.token,requestStatus:2,expiresIn:mu(t.expiresIn),creationTime:Date.now()}}async function No(t,e){const s=(await e.json()).error;return Je.create("request-failed",{requestName:t,serverCode:s.code,serverMessage:s.message,serverStatus:s.status})}function Mo({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function gu(t,{refreshToken:e}){const n=Mo(t);return n.append("Authorization",yu(e)),n}async function Uo(t){const e=await t();return e.status>=500&&e.status<600?t():e}function mu(t){return Number(t.replace("s","000"))}function yu(t){return`${Lo} ${t}`}/**
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
 */async function vu({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const s=xo(t),r=Mo(t),a=e.getImmediate({optional:!0});if(a){const w=await a.getHeartbeatsHeader();w&&r.append("x-firebase-client",w)}const l={fid:n,authVersion:Lo,appId:t.appId,sdkVersion:Ro},d={method:"POST",headers:r,body:JSON.stringify(l)},h=await Uo(()=>fetch(s,d));if(h.ok){const w=await h.json();return{fid:w.fid||n,registrationStatus:2,refreshToken:w.refreshToken,authToken:Do(w.authToken)}}else throw await No("Create Installation",h)}/**
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
 */function Bo(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */function wu(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const Iu=/^[cdef][\w-]{21}$/,Oi="";function bu(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=_u(t);return Iu.test(n)?n:Oi}catch{return Oi}}function _u(t){return wu(t).substr(0,22)}/**
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
 */function Nn(t){return`${t.appName}!${t.appId}`}/**
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
 */const Fo=new Map;function Ho(t,e){const n=Nn(t);jo(n,e),Tu(n,e)}function jo(t,e){const n=Fo.get(t);if(n)for(const s of n)s(e)}function Tu(t,e){const n=Eu();n&&n.postMessage({key:t,fid:e}),Au()}let Ke=null;function Eu(){return!Ke&&"BroadcastChannel"in self&&(Ke=new BroadcastChannel("[Firebase] FID Change"),Ke.onmessage=t=>{jo(t.data.key,t.data.fid)}),Ke}function Au(){Fo.size===0&&Ke&&(Ke.close(),Ke=null)}/**
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
 */const Cu="firebase-installations-database",Su=1,Ye="firebase-installations-store";let vi=null;function zi(){return vi||(vi=Eo(Cu,Su,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Ye)}}})),vi}async function _n(t,e){const n=Nn(t),r=(await zi()).transaction(Ye,"readwrite"),a=r.objectStore(Ye),l=await a.get(n);return await a.put(e,n),await r.done,(!l||l.fid!==e.fid)&&Ho(t,e.fid),e}async function $o(t){const e=Nn(t),s=(await zi()).transaction(Ye,"readwrite");await s.objectStore(Ye).delete(e),await s.done}async function Mn(t,e){const n=Nn(t),r=(await zi()).transaction(Ye,"readwrite"),a=r.objectStore(Ye),l=await a.get(n),d=e(l);return d===void 0?await a.delete(n):await a.put(d,n),await r.done,d&&(!l||l.fid!==d.fid)&&Ho(t,d.fid),d}/**
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
 */async function Wi(t){let e;const n=await Mn(t.appConfig,s=>{const r=ku(s),a=Pu(t,r);return e=a.registrationPromise,a.installationEntry});return n.fid===Oi?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function ku(t){const e=t||{fid:bu(),registrationStatus:0};return Vo(e)}function Pu(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const r=Promise.reject(Je.create("app-offline"));return{installationEntry:e,registrationPromise:r}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},s=Ru(t,n);return{installationEntry:n,registrationPromise:s}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:Lu(t)}:{installationEntry:e}}async function Ru(t,e){try{const n=await vu(t,e);return _n(t.appConfig,n)}catch(n){throw Oo(n)&&n.customData.serverCode===409?await $o(t.appConfig):await _n(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function Lu(t){let e=await wr(t.appConfig);for(;e.registrationStatus===1;)await Bo(100),e=await wr(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:s}=await Wi(t);return s||n}return e}function wr(t){return Mn(t,e=>{if(!e)throw Je.create("installation-not-found");return Vo(e)})}function Vo(t){return Ou(t)?{fid:t.fid,registrationStatus:0}:t}function Ou(t){return t.registrationStatus===1&&t.registrationTime+Po<Date.now()}/**
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
 */async function xu({appConfig:t,heartbeatServiceProvider:e},n){const s=Du(t,n),r=gu(t,n),a=e.getImmediate({optional:!0});if(a){const w=await a.getHeartbeatsHeader();w&&r.append("x-firebase-client",w)}const l={installation:{sdkVersion:Ro,appId:t.appId}},d={method:"POST",headers:r,body:JSON.stringify(l)},h=await Uo(()=>fetch(s,d));if(h.ok){const w=await h.json();return Do(w)}else throw await No("Generate Auth Token",h)}function Du(t,{fid:e}){return`${xo(t)}/${e}/authTokens:generate`}/**
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
 */async function Gi(t,e=!1){let n;const s=await Mn(t.appConfig,a=>{if(!qo(a))throw Je.create("not-registered");const l=a.authToken;if(!e&&Uu(l))return a;if(l.requestStatus===1)return n=Nu(t,e),a;{if(!navigator.onLine)throw Je.create("app-offline");const d=Fu(a);return n=Mu(t,d),d}});return n?await n:s.authToken}async function Nu(t,e){let n=await Ir(t.appConfig);for(;n.authToken.requestStatus===1;)await Bo(100),n=await Ir(t.appConfig);const s=n.authToken;return s.requestStatus===0?Gi(t,e):s}function Ir(t){return Mn(t,e=>{if(!qo(e))throw Je.create("not-registered");const n=e.authToken;return Hu(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function Mu(t,e){try{const n=await xu(t,e),s=Object.assign(Object.assign({},e),{authToken:n});return await _n(t.appConfig,s),n}catch(n){if(Oo(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await $o(t.appConfig);else{const s=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await _n(t.appConfig,s)}throw n}}function qo(t){return t!==void 0&&t.registrationStatus===2}function Uu(t){return t.requestStatus===2&&!Bu(t)}function Bu(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+du}function Fu(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function Hu(t){return t.requestStatus===1&&t.requestTime+Po<Date.now()}/**
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
 */async function ju(t){const e=t,{installationEntry:n,registrationPromise:s}=await Wi(e);return s?s.catch(console.error):Gi(e).catch(console.error),n.fid}/**
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
 */async function $u(t,e=!1){const n=t;return await Vu(n),(await Gi(n,e)).token}async function Vu(t){const{registrationPromise:e}=await Wi(t);e&&await e}/**
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
 */function qu(t){if(!t||!t.options)throw wi("App Configuration");if(!t.name)throw wi("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw wi(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function wi(t){return Je.create("missing-app-config-values",{valueName:t})}/**
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
 */const zo="installations",zu="installations-internal",Wu=t=>{const e=t.getProvider("app").getImmediate(),n=qu(e),s=Qe(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:s,_delete:()=>Promise.resolve()}},Gu=t=>{const e=t.getProvider("app").getImmediate(),n=Qe(e,zo).getImmediate();return{getId:()=>ju(n),getToken:r=>$u(n,r)}};function Ku(){we(new he(zo,Wu,"PUBLIC")),we(new he(zu,Gu,"PRIVATE"))}Ku();ae(ko,qi);ae(ko,qi,"esm2017");/**
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
 */const Tn="analytics",Ju="firebase_id",Yu="origin",Xu=60*1e3,Zu="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Ki="https://www.googletagmanager.com/gtag/js";/**
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
 */const ne=new Dn("@firebase/analytics");/**
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
 */const Qu={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},re=new Ze("analytics","Analytics",Qu);/**
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
 */function ed(t){if(!t.startsWith(Ki)){const e=re.create("invalid-gtag-resource",{gtagURL:t});return ne.warn(e.message),""}return t}function Wo(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function td(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function nd(t,e){const n=td("firebase-js-sdk-policy",{createScriptURL:ed}),s=document.createElement("script"),r=`${Ki}?l=${t}&id=${e}`;s.src=n?n==null?void 0:n.createScriptURL(r):r,s.async=!0,document.head.appendChild(s)}function id(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function sd(t,e,n,s,r,a){const l=s[r];try{if(l)await e[l];else{const h=(await Wo(n)).find(w=>w.measurementId===r);h&&await e[h.appId]}}catch(d){ne.error(d)}t("config",r,a)}async function rd(t,e,n,s,r){try{let a=[];if(r&&r.send_to){let l=r.send_to;Array.isArray(l)||(l=[l]);const d=await Wo(n);for(const h of l){const w=d.find(E=>E.measurementId===h),A=w&&e[w.appId];if(A)a.push(A);else{a=[];break}}}a.length===0&&(a=Object.values(e)),await Promise.all(a),t("event",s,r||{})}catch(a){ne.error(a)}}function od(t,e,n,s){async function r(a,...l){try{if(a==="event"){const[d,h]=l;await rd(t,e,n,d,h)}else if(a==="config"){const[d,h]=l;await sd(t,e,n,s,d,h)}else if(a==="consent"){const[d,h]=l;t("consent",d,h)}else if(a==="get"){const[d,h,w]=l;t("get",d,h,w)}else if(a==="set"){const[d]=l;t("set",d)}else t(a,...l)}catch(d){ne.error(d)}}return r}function ad(t,e,n,s,r){let a=function(...l){window[s].push(arguments)};return window[r]&&typeof window[r]=="function"&&(a=window[r]),window[r]=od(a,t,e,n),{gtagCore:a,wrappedGtag:window[r]}}function cd(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(Ki)&&n.src.includes(t))return n;return null}/**
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
 */const ld=30,ud=1e3;class dd{constructor(e={},n=ud){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const Go=new dd;function hd(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function fd(t){var e;const{appId:n,apiKey:s}=t,r={method:"GET",headers:hd(s)},a=Zu.replace("{app-id}",n),l=await fetch(a,r);if(l.status!==200&&l.status!==304){let d="";try{const h=await l.json();!((e=h.error)===null||e===void 0)&&e.message&&(d=h.error.message)}catch{}throw re.create("config-fetch-failed",{httpStatus:l.status,responseMessage:d})}return l.json()}async function pd(t,e=Go,n){const{appId:s,apiKey:r,measurementId:a}=t.options;if(!s)throw re.create("no-app-id");if(!r){if(a)return{measurementId:a,appId:s};throw re.create("no-api-key")}const l=e.getThrottleMetadata(s)||{backoffCount:0,throttleEndTimeMillis:Date.now()},d=new yd;return setTimeout(async()=>{d.abort()},Xu),Ko({appId:s,apiKey:r,measurementId:a},l,d,e)}async function Ko(t,{throttleEndTimeMillis:e,backoffCount:n},s,r=Go){var a;const{appId:l,measurementId:d}=t;try{await gd(s,e)}catch(h){if(d)return ne.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${d} provided in the "measurementId" field in the local Firebase config. [${h==null?void 0:h.message}]`),{appId:l,measurementId:d};throw h}try{const h=await fd(t);return r.deleteThrottleMetadata(l),h}catch(h){const w=h;if(!md(w)){if(r.deleteThrottleMetadata(l),d)return ne.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${d} provided in the "measurementId" field in the local Firebase config. [${w==null?void 0:w.message}]`),{appId:l,measurementId:d};throw h}const A=Number((a=w==null?void 0:w.customData)===null||a===void 0?void 0:a.httpStatus)===503?ur(n,r.intervalMillis,ld):ur(n,r.intervalMillis),E={throttleEndTimeMillis:Date.now()+A,backoffCount:n+1};return r.setThrottleMetadata(l,E),ne.debug(`Calling attemptFetch again in ${A} millis`),Ko(t,E,s,r)}}function gd(t,e){return new Promise((n,s)=>{const r=Math.max(e-Date.now(),0),a=setTimeout(n,r);t.addEventListener(()=>{clearTimeout(a),s(re.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function md(t){if(!(t instanceof pe)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class yd{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function vd(t,e,n,s,r){if(r&&r.global){t("event",n,s);return}else{const a=await e,l=Object.assign(Object.assign({},s),{send_to:a});t("event",n,l)}}/**
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
 */async function wd(){if(Io())try{await bo()}catch(t){return ne.warn(re.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return ne.warn(re.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function Id(t,e,n,s,r,a,l){var d;const h=pd(t);h.then(P=>{n[P.measurementId]=P.appId,t.options.measurementId&&P.measurementId!==t.options.measurementId&&ne.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${P.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(P=>ne.error(P)),e.push(h);const w=wd().then(P=>{if(P)return s.getId()}),[A,E]=await Promise.all([h,w]);cd(a)||nd(a,A.measurementId),r("js",new Date);const T=(d=l==null?void 0:l.config)!==null&&d!==void 0?d:{};return T[Yu]="firebase",T.update=!0,E!=null&&(T[Ju]=E),r("config",A.measurementId,T),A.measurementId}/**
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
 */class bd{constructor(e){this.app=e}_delete(){return delete Ut[this.app.options.appId],Promise.resolve()}}let Ut={},br=[];const _r={};let Ii="dataLayer",_d="gtag",Tr,Jo,Er=!1;function Td(){const t=[];if(wo()&&t.push("This is a browser extension environment."),Vc()||t.push("Cookies are not available."),t.length>0){const e=t.map((s,r)=>`(${r+1}) ${s}`).join(" "),n=re.create("invalid-analytics-context",{errorInfo:e});ne.warn(n.message)}}function Ed(t,e,n){Td();const s=t.options.appId;if(!s)throw re.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)ne.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw re.create("no-api-key");if(Ut[s]!=null)throw re.create("already-exists",{id:s});if(!Er){id(Ii);const{wrappedGtag:a,gtagCore:l}=ad(Ut,br,_r,Ii,_d);Jo=a,Tr=l,Er=!0}return Ut[s]=Id(t,br,_r,e,Tr,Ii,n),new bd(t)}function Ad(t=Vi()){t=ce(t);const e=Qe(t,Tn);return e.isInitialized()?e.getImmediate():Cd(t)}function Cd(t,e={}){const n=Qe(t,Tn);if(n.isInitialized()){const r=n.getImmediate();if(He(e,n.getOptions()))return r;throw re.create("already-initialized")}return n.initialize({options:e})}function Sd(t,e,n,s){t=ce(t),vd(Jo,Ut[t.app.options.appId],e,n,s).catch(r=>ne.error(r))}const Ar="@firebase/analytics",Cr="0.10.16";function kd(){we(new he(Tn,(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("installations-internal").getImmediate();return Ed(s,r,n)},"PUBLIC")),we(new he("analytics-internal",t,"PRIVATE")),ae(Ar,Cr),ae(Ar,Cr,"esm2017");function t(e){try{const n=e.getProvider(Tn).getImmediate();return{logEvent:(s,r,a)=>Sd(n,s,r,a)}}catch(n){throw re.create("interop-component-reg-failed",{reason:n})}}}kd();function Ji(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,s=Object.getOwnPropertySymbols(t);r<s.length;r++)e.indexOf(s[r])<0&&Object.prototype.propertyIsEnumerable.call(t,s[r])&&(n[s[r]]=t[s[r]]);return n}function Yo(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Pd=Yo,Xo=new Ze("auth","Firebase",Yo());/**
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
 */const En=new Dn("@firebase/auth");function Rd(t,...e){En.logLevel<=M.WARN&&En.warn(`Auth (${ft}): ${t}`,...e)}function mn(t,...e){En.logLevel<=M.ERROR&&En.error(`Auth (${ft}): ${t}`,...e)}/**
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
 */function fe(t,...e){throw Yi(t,...e)}function ge(t,...e){return Yi(t,...e)}function Zo(t,e,n){const s=Object.assign(Object.assign({},Pd()),{[e]:n});return new Ze("auth","Firebase",s).create(e,{appName:t.name})}function me(t){return Zo(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Yi(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return Xo.create(t,...e)}function R(t,e,...n){if(!t)throw Yi(e,...n)}function Te(t){const e="INTERNAL ASSERTION FAILED: "+t;throw mn(e),new Error(e)}function Ce(t,e){t||Te(e)}/**
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
 */function xi(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Ld(){return Sr()==="http:"||Sr()==="https:"}function Sr(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function Od(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Ld()||wo()||"connection"in navigator)?navigator.onLine:!0}function xd(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class zt{constructor(e,n){this.shortDelay=e,this.longDelay=n,Ce(n>e,"Short delay should be less than long delay!"),this.isMobile=Fc()||jc()}get(){return Od()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Xi(t,e){Ce(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class Qo{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Te("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Te("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Te("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Dd={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const Nd=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],Md=new zt(3e4,6e4);function Se(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function ke(t,e,n,s,r={}){return ea(t,r,async()=>{let a={},l={};s&&(e==="GET"?l=s:a={body:JSON.stringify(s)});const d=qt(Object.assign({key:t.config.apiKey},l)).slice(1),h=await t._getAdditionalHeaders();h["Content-Type"]="application/json",t.languageCode&&(h["X-Firebase-Locale"]=t.languageCode);const w=Object.assign({method:e,headers:h},a);return Hc()||(w.referrerPolicy="no-referrer"),t.emulatorConfig&&xn(t.emulatorConfig.host)&&(w.credentials="include"),Qo.fetch()(await ta(t,t.config.apiHost,n,d),w)})}async function ea(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},Dd),e);try{const r=new Bd(t),a=await Promise.race([n(),r.promise]);r.clearNetworkTimeout();const l=await a.json();if("needConfirmation"in l)throw hn(t,"account-exists-with-different-credential",l);if(a.ok&&!("errorMessage"in l))return l;{const d=a.ok?l.errorMessage:l.error.message,[h,w]=d.split(" : ");if(h==="FEDERATED_USER_ID_ALREADY_LINKED")throw hn(t,"credential-already-in-use",l);if(h==="EMAIL_EXISTS")throw hn(t,"email-already-in-use",l);if(h==="USER_DISABLED")throw hn(t,"user-disabled",l);const A=s[h]||h.toLowerCase().replace(/[_\s]+/g,"-");if(w)throw Zo(t,A,w);fe(t,A)}}catch(r){if(r instanceof pe)throw r;fe(t,"network-request-failed",{message:String(r)})}}async function pt(t,e,n,s,r={}){const a=await ke(t,e,n,s,r);return"mfaPendingCredential"in a&&fe(t,"multi-factor-auth-required",{_serverResponse:a}),a}async function ta(t,e,n,s){const r=`${e}${n}?${s}`,a=t,l=a.config.emulator?Xi(t.config,r):`${t.config.apiScheme}://${r}`;return Nd.includes(n)&&(await a._persistenceManagerAvailable,a._getPersistenceType()==="COOKIE")?a._getPersistence()._getFinalTarget(l).toString():l}function Ud(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Bd{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(ge(this.auth,"network-request-failed")),Md.get())})}}function hn(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const r=ge(t,e,s);return r.customData._tokenResponse=n,r}function kr(t){return t!==void 0&&t.enterprise!==void 0}class Fd{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return Ud(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function Hd(t,e){return ke(t,"GET","/v2/recaptchaConfig",Se(t,e))}/**
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
 */async function jd(t,e){return ke(t,"POST","/v1/accounts:delete",e)}async function An(t,e){return ke(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Bt(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function $d(t,e=!1){const n=ce(t),s=await n.getIdToken(e),r=Zi(s);R(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const a=typeof r.firebase=="object"?r.firebase:void 0,l=a==null?void 0:a.sign_in_provider;return{claims:r,token:s,authTime:Bt(bi(r.auth_time)),issuedAtTime:Bt(bi(r.iat)),expirationTime:Bt(bi(r.exp)),signInProvider:l||null,signInSecondFactor:(a==null?void 0:a.sign_in_second_factor)||null}}function bi(t){return Number(t)*1e3}function Zi(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return mn("JWT malformed, contained fewer than 3 sections"),null;try{const r=fo(n);return r?JSON.parse(r):(mn("Failed to decode base64 JWT payload"),null)}catch(r){return mn("Caught error parsing JWT payload as JSON",r==null?void 0:r.toString()),null}}function Pr(t){const e=Zi(t);return R(e,"internal-error"),R(typeof e.exp<"u","internal-error"),R(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function dt(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof pe&&Vd(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function Vd({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class qd{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const r=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Di{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Bt(this.lastLoginAt),this.creationTime=Bt(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Cn(t){var e;const n=t.auth,s=await t.getIdToken(),r=await dt(t,An(n,{idToken:s}));R(r==null?void 0:r.users.length,n,"internal-error");const a=r.users[0];t._notifyReloadListener(a);const l=!((e=a.providerUserInfo)===null||e===void 0)&&e.length?na(a.providerUserInfo):[],d=Wd(t.providerData,l),h=t.isAnonymous,w=!(t.email&&a.passwordHash)&&!(d!=null&&d.length),A=h?w:!1,E={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:d,metadata:new Di(a.createdAt,a.lastLoginAt),isAnonymous:A};Object.assign(t,E)}async function zd(t){const e=ce(t);await Cn(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Wd(t,e){return[...t.filter(s=>!e.some(r=>r.providerId===s.providerId)),...e]}function na(t){return t.map(e=>{var{providerId:n}=e,s=Ji(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
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
 */async function Gd(t,e){const n=await ea(t,{},async()=>{const s=qt({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:a}=t.config,l=await ta(t,r,"/v1/token",`key=${a}`),d=await t._getAdditionalHeaders();return d["Content-Type"]="application/x-www-form-urlencoded",Qo.fetch()(l,{method:"POST",headers:d,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function Kd(t,e){return ke(t,"POST","/v2/accounts:revokeToken",Se(t,e))}/**
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
 */class at{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){R(e.idToken,"internal-error"),R(typeof e.idToken<"u","internal-error"),R(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Pr(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){R(e.length!==0,"internal-error");const n=Pr(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(R(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:r,expiresIn:a}=await Gd(e,n);this.updateTokensAndExpiration(s,r,Number(a))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:r,expirationTime:a}=n,l=new at;return s&&(R(typeof s=="string","internal-error",{appName:e}),l.refreshToken=s),r&&(R(typeof r=="string","internal-error",{appName:e}),l.accessToken=r),a&&(R(typeof a=="number","internal-error",{appName:e}),l.expirationTime=a),l}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new at,this.toJSON())}_performRefresh(){return Te("not implemented")}}/**
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
 */function xe(t,e){R(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class ue{constructor(e){var{uid:n,auth:s,stsTokenManager:r}=e,a=Ji(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new qd(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=a.displayName||null,this.email=a.email||null,this.emailVerified=a.emailVerified||!1,this.phoneNumber=a.phoneNumber||null,this.photoURL=a.photoURL||null,this.isAnonymous=a.isAnonymous||!1,this.tenantId=a.tenantId||null,this.providerData=a.providerData?[...a.providerData]:[],this.metadata=new Di(a.createdAt||void 0,a.lastLoginAt||void 0)}async getIdToken(e){const n=await dt(this,this.stsTokenManager.getToken(this.auth,e));return R(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return $d(this,e)}reload(){return zd(this)}_assign(e){this!==e&&(R(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new ue(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){R(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await Cn(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(se(this.auth.app))return Promise.reject(me(this.auth));const e=await this.getIdToken();return await dt(this,jd(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,r,a,l,d,h,w,A;const E=(s=n.displayName)!==null&&s!==void 0?s:void 0,T=(r=n.email)!==null&&r!==void 0?r:void 0,P=(a=n.phoneNumber)!==null&&a!==void 0?a:void 0,S=(l=n.photoURL)!==null&&l!==void 0?l:void 0,L=(d=n.tenantId)!==null&&d!==void 0?d:void 0,k=(h=n._redirectEventId)!==null&&h!==void 0?h:void 0,$=(w=n.createdAt)!==null&&w!==void 0?w:void 0,O=(A=n.lastLoginAt)!==null&&A!==void 0?A:void 0,{uid:x,emailVerified:j,isAnonymous:ie,providerData:z,stsTokenManager:v}=n;R(x&&v,e,"internal-error");const f=at.fromJSON(this.name,v);R(typeof x=="string",e,"internal-error"),xe(E,e.name),xe(T,e.name),R(typeof j=="boolean",e,"internal-error"),R(typeof ie=="boolean",e,"internal-error"),xe(P,e.name),xe(S,e.name),xe(L,e.name),xe(k,e.name),xe($,e.name),xe(O,e.name);const g=new ue({uid:x,auth:e,email:T,emailVerified:j,displayName:E,isAnonymous:ie,photoURL:S,phoneNumber:P,tenantId:L,stsTokenManager:f,createdAt:$,lastLoginAt:O});return z&&Array.isArray(z)&&(g.providerData=z.map(m=>Object.assign({},m))),k&&(g._redirectEventId=k),g}static async _fromIdTokenResponse(e,n,s=!1){const r=new at;r.updateFromServerResponse(n);const a=new ue({uid:n.localId,auth:e,stsTokenManager:r,isAnonymous:s});return await Cn(a),a}static async _fromGetAccountInfoResponse(e,n,s){const r=n.users[0];R(r.localId!==void 0,"internal-error");const a=r.providerUserInfo!==void 0?na(r.providerUserInfo):[],l=!(r.email&&r.passwordHash)&&!(a!=null&&a.length),d=new at;d.updateFromIdToken(s);const h=new ue({uid:r.localId,auth:e,stsTokenManager:d,isAnonymous:l}),w={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new Di(r.createdAt,r.lastLoginAt),isAnonymous:!(r.email&&r.passwordHash)&&!(a!=null&&a.length)};return Object.assign(h,w),h}}/**
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
 */const Rr=new Map;function Ee(t){Ce(t instanceof Function,"Expected a class definition");let e=Rr.get(t);return e?(Ce(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Rr.set(t,e),e)}/**
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
 */class ia{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}ia.type="NONE";const Lr=ia;/**
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
 */function yn(t,e,n){return`firebase:${t}:${e}:${n}`}class ct{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:r,name:a}=this.auth;this.fullUserKey=yn(this.userKey,r.apiKey,a),this.fullPersistenceKey=yn("persistence",r.apiKey,a),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await An(this.auth,{idToken:e}).catch(()=>{});return n?ue._fromGetAccountInfoResponse(this.auth,n,e):null}return ue._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new ct(Ee(Lr),e,s);const r=(await Promise.all(n.map(async w=>{if(await w._isAvailable())return w}))).filter(w=>w);let a=r[0]||Ee(Lr);const l=yn(s,e.config.apiKey,e.name);let d=null;for(const w of n)try{const A=await w._get(l);if(A){let E;if(typeof A=="string"){const T=await An(e,{idToken:A}).catch(()=>{});if(!T)break;E=await ue._fromGetAccountInfoResponse(e,T,A)}else E=ue._fromJSON(e,A);w!==a&&(d=E),a=w;break}}catch{}const h=r.filter(w=>w._shouldAllowMigration);return!a._shouldAllowMigration||!h.length?new ct(a,e,s):(a=h[0],d&&await a._set(l,d.toJSON()),await Promise.all(n.map(async w=>{if(w!==a)try{await w._remove(l)}catch{}})),new ct(a,e,s))}}/**
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
 */function Or(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(aa(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(sa(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(la(e))return"Blackberry";if(ua(e))return"Webos";if(ra(e))return"Safari";if((e.includes("chrome/")||oa(e))&&!e.includes("edge/"))return"Chrome";if(ca(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function sa(t=te()){return/firefox\//i.test(t)}function ra(t=te()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function oa(t=te()){return/crios\//i.test(t)}function aa(t=te()){return/iemobile/i.test(t)}function ca(t=te()){return/android/i.test(t)}function la(t=te()){return/blackberry/i.test(t)}function ua(t=te()){return/webos/i.test(t)}function Qi(t=te()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Jd(t=te()){var e;return Qi(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Yd(){return $c()&&document.documentMode===10}function da(t=te()){return Qi(t)||ca(t)||ua(t)||la(t)||/windows phone/i.test(t)||aa(t)}/**
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
 */function ha(t,e=[]){let n;switch(t){case"Browser":n=Or(te());break;case"Worker":n=`${Or(te())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ft}/${s}`}/**
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
 */class Xd{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=a=>new Promise((l,d)=>{try{const h=e(a);l(h)}catch(h){d(h)}});s.onAbort=n,this.queue.push(s);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const r of n)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */async function Zd(t,e={}){return ke(t,"GET","/v2/passwordPolicy",Se(t,e))}/**
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
 */const Qd=6;class eh{constructor(e){var n,s,r,a;const l=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=l.minPasswordLength)!==null&&n!==void 0?n:Qd,l.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=l.maxPasswordLength),l.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=l.containsLowercaseCharacter),l.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=l.containsUppercaseCharacter),l.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=l.containsNumericCharacter),l.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=l.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(r=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&r!==void 0?r:"",this.forceUpgradeOnSignin=(a=e.forceUpgradeOnSignin)!==null&&a!==void 0?a:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,s,r,a,l,d;const h={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,h),this.validatePasswordCharacterOptions(e,h),h.isValid&&(h.isValid=(n=h.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),h.isValid&&(h.isValid=(s=h.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),h.isValid&&(h.isValid=(r=h.containsLowercaseLetter)!==null&&r!==void 0?r:!0),h.isValid&&(h.isValid=(a=h.containsUppercaseLetter)!==null&&a!==void 0?a:!0),h.isValid&&(h.isValid=(l=h.containsNumericCharacter)!==null&&l!==void 0?l:!0),h.isValid&&(h.isValid=(d=h.containsNonAlphanumericCharacter)!==null&&d!==void 0?d:!0),h}validatePasswordLengthOptions(e,n){const s=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;s&&(n.meetsMinPasswordLength=e.length>=s),r&&(n.meetsMaxPasswordLength=e.length<=r)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let s;for(let r=0;r<e.length;r++)s=e.charAt(r),this.updatePasswordCharacterOptionsStatuses(n,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,n,s,r,a){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=a))}}/**
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
 */class th{constructor(e,n,s,r){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new xr(this),this.idTokenSubscription=new xr(this),this.beforeStateQueue=new Xd(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Xo,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion,this._persistenceManagerAvailable=new Promise(a=>this._resolvePersistenceManagerAvailable=a)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Ee(n)),this._initializationPromise=this.queue(async()=>{var s,r,a;if(!this._deleted&&(this.persistenceManager=await ct.create(this,e),(s=this._resolvePersistenceManagerAvailable)===null||s===void 0||s.call(this),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((a=this.currentUser)===null||a===void 0?void 0:a.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await An(this,{idToken:e}),s=await ue._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(s)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(se(this.app)){const l=this.app.settings.authIdToken;return l?new Promise(d=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(l).then(d,d))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let r=s,a=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const l=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,d=r==null?void 0:r._redirectEventId,h=await this.tryRedirectSignIn(e);(!l||l===d)&&(h!=null&&h.user)&&(r=h.user,a=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(a)try{await this.beforeStateQueue.runMiddleware(r)}catch(l){r=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(l))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return R(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Cn(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=xd()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(se(this.app))return Promise.reject(me(this));const n=e?ce(e):null;return n&&R(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&R(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return se(this.app)?Promise.reject(me(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return se(this.app)?Promise.reject(me(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Ee(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Zd(this),n=new eh(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Ze("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(s.tenantId=this.tenantId),await Kd(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Ee(e)||this._popupRedirectResolver;R(n,this,"argument-error"),this.redirectPersistenceManager=await ct.create(this,[Ee(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,r){if(this._deleted)return()=>{};const a=typeof n=="function"?n:n.next.bind(n);let l=!1;const d=this._isInitialized?Promise.resolve():this._initializationPromise;if(R(d,this,"internal-error"),d.then(()=>{l||a(this.currentUser)}),typeof n=="function"){const h=e.addObserver(n,s,r);return()=>{l=!0,h()}}else{const h=e.addObserver(n);return()=>{l=!0,h()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return R(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=ha(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(n["X-Firebase-Client"]=s);const r=await this._getAppCheckToken();return r&&(n["X-Firebase-AppCheck"]=r),n}async _getAppCheckToken(){var e;if(se(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&Rd(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function $e(t){return ce(t)}class xr{constructor(e){this.auth=e,this.observer=null,this.addObserver=Kc(n=>this.observer=n)}get next(){return R(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Un={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function nh(t){Un=t}function fa(t){return Un.loadJS(t)}function ih(){return Un.recaptchaEnterpriseScript}function sh(){return Un.gapiScript}function rh(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class oh{constructor(){this.enterprise=new ah}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class ah{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const ch="recaptcha-enterprise",pa="NO_RECAPTCHA";class lh{constructor(e){this.type=ch,this.auth=$e(e)}async verify(e="verify",n=!1){async function s(a){if(!n){if(a.tenantId==null&&a._agentRecaptchaConfig!=null)return a._agentRecaptchaConfig.siteKey;if(a.tenantId!=null&&a._tenantRecaptchaConfigs[a.tenantId]!==void 0)return a._tenantRecaptchaConfigs[a.tenantId].siteKey}return new Promise(async(l,d)=>{Hd(a,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(h=>{if(h.recaptchaKey===void 0)d(new Error("recaptcha Enterprise site key undefined"));else{const w=new Fd(h);return a.tenantId==null?a._agentRecaptchaConfig=w:a._tenantRecaptchaConfigs[a.tenantId]=w,l(w.siteKey)}}).catch(h=>{d(h)})})}function r(a,l,d){const h=window.grecaptcha;kr(h)?h.enterprise.ready(()=>{h.enterprise.execute(a,{action:e}).then(w=>{l(w)}).catch(()=>{l(pa)})}):d(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new oh().execute("siteKey",{action:"verify"}):new Promise((a,l)=>{s(this.auth).then(d=>{if(!n&&kr(window.grecaptcha))r(d,a,l);else{if(typeof window>"u"){l(new Error("RecaptchaVerifier is only supported in browser"));return}let h=ih();h.length!==0&&(h+=d),fa(h).then(()=>{r(d,a,l)}).catch(w=>{l(w)})}}).catch(d=>{l(d)})})}}async function Dr(t,e,n,s=!1,r=!1){const a=new lh(t);let l;if(r)l=pa;else try{l=await a.verify(n)}catch{l=await a.verify(n,!0)}const d=Object.assign({},e);if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in d){const h=d.phoneEnrollmentInfo.phoneNumber,w=d.phoneEnrollmentInfo.recaptchaToken;Object.assign(d,{phoneEnrollmentInfo:{phoneNumber:h,recaptchaToken:w,captchaResponse:l,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in d){const h=d.phoneSignInInfo.recaptchaToken;Object.assign(d,{phoneSignInInfo:{recaptchaToken:h,captchaResponse:l,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return d}return s?Object.assign(d,{captchaResp:l}):Object.assign(d,{captchaResponse:l}),Object.assign(d,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(d,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),d}async function Ni(t,e,n,s,r){var a;if(!((a=t._getRecaptchaConfig())===null||a===void 0)&&a.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const l=await Dr(t,e,n,n==="getOobCode");return s(t,l)}else return s(t,e).catch(async l=>{if(l.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const d=await Dr(t,e,n,n==="getOobCode");return s(t,d)}else return Promise.reject(l)})}/**
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
 */function uh(t,e){const n=Qe(t,"auth");if(n.isInitialized()){const r=n.getImmediate(),a=n.getOptions();if(He(a,e??{}))return r;fe(r,"already-initialized")}return n.initialize({options:e})}function dh(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(Ee);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function hh(t,e,n){const s=$e(t);R(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const r=!1,a=ga(e),{host:l,port:d}=fh(e),h=d===null?"":`:${d}`,w={url:`${a}//${l}${h}/`},A=Object.freeze({host:l,port:d,protocol:a.replace(":",""),options:Object.freeze({disableWarnings:r})});if(!s._canInitEmulator){R(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),R(He(w,s.config.emulator)&&He(A,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=w,s.emulatorConfig=A,s.settings.appVerificationDisabledForTesting=!0,xn(l)?(yo(`${a}//${l}${h}`),vo("Auth",!0)):ph()}function ga(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function fh(t){const e=ga(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(s);if(r){const a=r[1];return{host:a,port:Nr(s.substr(a.length+1))}}else{const[a,l]=s.split(":");return{host:a,port:Nr(l)}}}function Nr(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function ph(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class es{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Te("not implemented")}_getIdTokenResponse(e){return Te("not implemented")}_linkToIdToken(e,n){return Te("not implemented")}_getReauthenticationResolver(e){return Te("not implemented")}}async function gh(t,e){return ke(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function mh(t,e){return pt(t,"POST","/v1/accounts:signInWithPassword",Se(t,e))}/**
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
 */async function yh(t,e){return pt(t,"POST","/v1/accounts:signInWithEmailLink",Se(t,e))}async function vh(t,e){return pt(t,"POST","/v1/accounts:signInWithEmailLink",Se(t,e))}/**
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
 */class Vt extends es{constructor(e,n,s,r=null){super("password",s),this._email=e,this._password=n,this._tenantId=r}static _fromEmailAndPassword(e,n){return new Vt(e,n,"password")}static _fromEmailAndCode(e,n,s=null){return new Vt(e,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ni(e,n,"signInWithPassword",mh);case"emailLink":return yh(e,{email:this._email,oobCode:this._password});default:fe(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const s={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ni(e,s,"signUpPassword",gh);case"emailLink":return vh(e,{idToken:n,email:this._email,oobCode:this._password});default:fe(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function lt(t,e){return pt(t,"POST","/v1/accounts:signInWithIdp",Se(t,e))}/**
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
 */const wh="http://localhost";class Xe extends es{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Xe(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):fe("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:r}=n,a=Ji(n,["providerId","signInMethod"]);if(!s||!r)return null;const l=new Xe(s,r);return l.idToken=a.idToken||void 0,l.accessToken=a.accessToken||void 0,l.secret=a.secret,l.nonce=a.nonce,l.pendingToken=a.pendingToken||null,l}_getIdTokenResponse(e){const n=this.buildRequest();return lt(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,lt(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,lt(e,n)}buildRequest(){const e={requestUri:wh,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=qt(n)}return e}}/**
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
 */function Ih(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function bh(t){const e=Dt(Nt(t)).link,n=e?Dt(Nt(e)).deep_link_id:null,s=Dt(Nt(t)).deep_link_id;return(s?Dt(Nt(s)).link:null)||s||n||e||t}class ts{constructor(e){var n,s,r,a,l,d;const h=Dt(Nt(e)),w=(n=h.apiKey)!==null&&n!==void 0?n:null,A=(s=h.oobCode)!==null&&s!==void 0?s:null,E=Ih((r=h.mode)!==null&&r!==void 0?r:null);R(w&&A&&E,"argument-error"),this.apiKey=w,this.operation=E,this.code=A,this.continueUrl=(a=h.continueUrl)!==null&&a!==void 0?a:null,this.languageCode=(l=h.lang)!==null&&l!==void 0?l:null,this.tenantId=(d=h.tenantId)!==null&&d!==void 0?d:null}static parseLink(e){const n=bh(e);try{return new ts(n)}catch{return null}}}/**
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
 */class gt{constructor(){this.providerId=gt.PROVIDER_ID}static credential(e,n){return Vt._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const s=ts.parseLink(n);return R(s,"argument-error"),Vt._fromEmailAndCode(e,s.code,s.tenantId)}}gt.PROVIDER_ID="password";gt.EMAIL_PASSWORD_SIGN_IN_METHOD="password";gt.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class ma{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Wt extends ma{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class De extends Wt{constructor(){super("facebook.com")}static credential(e){return Xe._fromParams({providerId:De.PROVIDER_ID,signInMethod:De.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return De.credentialFromTaggedObject(e)}static credentialFromError(e){return De.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return De.credential(e.oauthAccessToken)}catch{return null}}}De.FACEBOOK_SIGN_IN_METHOD="facebook.com";De.PROVIDER_ID="facebook.com";/**
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
 */class Ne extends Wt{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Xe._fromParams({providerId:Ne.PROVIDER_ID,signInMethod:Ne.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Ne.credentialFromTaggedObject(e)}static credentialFromError(e){return Ne.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return Ne.credential(n,s)}catch{return null}}}Ne.GOOGLE_SIGN_IN_METHOD="google.com";Ne.PROVIDER_ID="google.com";/**
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
 */class Me extends Wt{constructor(){super("github.com")}static credential(e){return Xe._fromParams({providerId:Me.PROVIDER_ID,signInMethod:Me.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Me.credentialFromTaggedObject(e)}static credentialFromError(e){return Me.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Me.credential(e.oauthAccessToken)}catch{return null}}}Me.GITHUB_SIGN_IN_METHOD="github.com";Me.PROVIDER_ID="github.com";/**
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
 */class Ue extends Wt{constructor(){super("twitter.com")}static credential(e,n){return Xe._fromParams({providerId:Ue.PROVIDER_ID,signInMethod:Ue.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Ue.credentialFromTaggedObject(e)}static credentialFromError(e){return Ue.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return Ue.credential(n,s)}catch{return null}}}Ue.TWITTER_SIGN_IN_METHOD="twitter.com";Ue.PROVIDER_ID="twitter.com";/**
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
 */async function _h(t,e){return pt(t,"POST","/v1/accounts:signUp",Se(t,e))}/**
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
 */class je{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,r=!1){const a=await ue._fromIdTokenResponse(e,s,r),l=Mr(s);return new je({user:a,providerId:l,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const r=Mr(s);return new je({user:e,providerId:r,_tokenResponse:s,operationType:n})}}function Mr(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Sn extends pe{constructor(e,n,s,r){var a;super(n.code,n.message),this.operationType=s,this.user=r,Object.setPrototypeOf(this,Sn.prototype),this.customData={appName:e.name,tenantId:(a=e.tenantId)!==null&&a!==void 0?a:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,r){return new Sn(e,n,s,r)}}function ya(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(a=>{throw a.code==="auth/multi-factor-auth-required"?Sn._fromErrorAndOperation(t,a,e,s):a})}async function Th(t,e,n=!1){const s=await dt(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return je._forOperation(t,"link",s)}/**
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
 */async function Eh(t,e,n=!1){const{auth:s}=t;if(se(s.app))return Promise.reject(me(s));const r="reauthenticate";try{const a=await dt(t,ya(s,r,e,t),n);R(a.idToken,s,"internal-error");const l=Zi(a.idToken);R(l,s,"internal-error");const{sub:d}=l;return R(t.uid===d,s,"user-mismatch"),je._forOperation(t,r,a)}catch(a){throw(a==null?void 0:a.code)==="auth/user-not-found"&&fe(s,"user-mismatch"),a}}/**
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
 */async function va(t,e,n=!1){if(se(t.app))return Promise.reject(me(t));const s="signIn",r=await ya(t,s,e),a=await je._fromIdTokenResponse(t,s,r);return n||await t._updateCurrentUser(a.user),a}async function Ah(t,e){return va($e(t),e)}/**
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
 */async function Ch(t,e){return pt(t,"POST","/v1/accounts:signInWithCustomToken",Se(t,e))}/**
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
 */async function Sh(t,e){if(se(t.app))return Promise.reject(me(t));const n=$e(t),s=await Ch(n,{token:e,returnSecureToken:!0}),r=await je._fromIdTokenResponse(n,"signIn",s);return await n._updateCurrentUser(r.user),r}/**
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
 */async function wa(t){const e=$e(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function kh(t,e,n){if(se(t.app))return Promise.reject(me(t));const s=$e(t),l=await Ni(s,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",_h).catch(h=>{throw h.code==="auth/password-does-not-meet-requirements"&&wa(t),h}),d=await je._fromIdTokenResponse(s,"signIn",l);return await s._updateCurrentUser(d.user),d}function Ph(t,e,n){return se(t.app)?Promise.reject(me(t)):Ah(ce(t),gt.credential(e,n)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&wa(t),s})}/**
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
 */async function Rh(t,e){return ke(t,"POST","/v1/accounts:update",e)}/**
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
 */async function Lh(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const s=ce(t),a={idToken:await s.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},l=await dt(s,Rh(s.auth,a));s.displayName=l.displayName||null,s.photoURL=l.photoUrl||null;const d=s.providerData.find(({providerId:h})=>h==="password");d&&(d.displayName=s.displayName,d.photoURL=s.photoURL),await s._updateTokensIfNecessary(l)}function Oh(t,e,n,s){return ce(t).onIdTokenChanged(e,n,s)}function xh(t,e,n){return ce(t).beforeAuthStateChanged(e,n)}function Dh(t,e,n,s){return ce(t).onAuthStateChanged(e,n,s)}function Nh(t){return ce(t).signOut()}const kn="__sak";/**
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
 */class Ia{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(kn,"1"),this.storage.removeItem(kn),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const Mh=1e3,Uh=10;class ba extends Ia{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=da(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),r=this.localCache[n];s!==r&&e(n,r,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((l,d,h)=>{this.notifyListeners(l,h)});return}const s=e.key;n?this.detachListener():this.stopPolling();const r=()=>{const l=this.storage.getItem(s);!n&&this.localCache[s]===l||this.notifyListeners(s,l)},a=this.storage.getItem(s);Yd()&&a!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,Uh):r()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},Mh)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}ba.type="LOCAL";const Bh=ba;/**
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
 */class _a extends Ia{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}_a.type="SESSION";const Ta=_a;/**
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
 */function Fh(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Bn{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(r=>r.isListeningto(e));if(n)return n;const s=new Bn(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:r,data:a}=n.data,l=this.handlersMap[r];if(!(l!=null&&l.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:r});const d=Array.from(l).map(async w=>w(n.origin,a)),h=await Fh(d);n.ports[0].postMessage({status:"done",eventId:s,eventType:r,response:h})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Bn.receivers=[];/**
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
 */function ns(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class Hh{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let a,l;return new Promise((d,h)=>{const w=ns("",20);r.port1.start();const A=setTimeout(()=>{h(new Error("unsupported_event"))},s);l={messageChannel:r,onMessage(E){const T=E;if(T.data.eventId===w)switch(T.data.status){case"ack":clearTimeout(A),a=setTimeout(()=>{h(new Error("timeout"))},3e3);break;case"done":clearTimeout(a),d(T.data.response);break;default:clearTimeout(A),clearTimeout(a),h(new Error("invalid_response"));break}}},this.handlers.add(l),r.port1.addEventListener("message",l.onMessage),this.target.postMessage({eventType:e,eventId:w,data:n},[r.port2])}).finally(()=>{l&&this.removeMessageHandler(l)})}}/**
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
 */function ye(){return window}function jh(t){ye().location.href=t}/**
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
 */function Ea(){return typeof ye().WorkerGlobalScope<"u"&&typeof ye().importScripts=="function"}async function $h(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Vh(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function qh(){return Ea()?self:null}/**
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
 */const Aa="firebaseLocalStorageDb",zh=1,Pn="firebaseLocalStorage",Ca="fbase_key";class Gt{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Fn(t,e){return t.transaction([Pn],e?"readwrite":"readonly").objectStore(Pn)}function Wh(){const t=indexedDB.deleteDatabase(Aa);return new Gt(t).toPromise()}function Mi(){const t=indexedDB.open(Aa,zh);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(Pn,{keyPath:Ca})}catch(r){n(r)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(Pn)?e(s):(s.close(),await Wh(),e(await Mi()))})})}async function Ur(t,e,n){const s=Fn(t,!0).put({[Ca]:e,value:n});return new Gt(s).toPromise()}async function Gh(t,e){const n=Fn(t,!1).get(e),s=await new Gt(n).toPromise();return s===void 0?null:s.value}function Br(t,e){const n=Fn(t,!0).delete(e);return new Gt(n).toPromise()}const Kh=800,Jh=3;class Sa{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Mi(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>Jh)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Ea()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Bn._getInstance(qh()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await $h(),!this.activeServiceWorker)return;this.sender=new Hh(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Vh()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Mi();return await Ur(e,kn,"1"),await Br(e,kn),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>Ur(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>Gh(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Br(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const a=Fn(r,!1).getAll();return new Gt(a).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;if(e.length!==0)for(const{fbase_key:r,value:a}of e)s.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(a)&&(this.notifyListeners(r,a),n.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!s.has(r)&&(this.notifyListeners(r,null),n.push(r));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Kh)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Sa.type="LOCAL";const Yh=Sa;new zt(3e4,6e4);/**
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
 */function Xh(t,e){return e?Ee(e):(R(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class is extends es{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return lt(e,this._buildIdpRequest())}_linkToIdToken(e,n){return lt(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return lt(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Zh(t){return va(t.auth,new is(t),t.bypassAuthState)}function Qh(t){const{auth:e,user:n}=t;return R(n,e,"internal-error"),Eh(n,new is(t),t.bypassAuthState)}async function ef(t){const{auth:e,user:n}=t;return R(n,e,"internal-error"),Th(n,new is(t),t.bypassAuthState)}/**
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
 */class ka{constructor(e,n,s,r,a=!1){this.auth=e,this.resolver=s,this.user=r,this.bypassAuthState=a,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:r,tenantId:a,error:l,type:d}=e;if(l){this.reject(l);return}const h={auth:this.auth,requestUri:n,sessionId:s,tenantId:a||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(d)(h))}catch(w){this.reject(w)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Zh;case"linkViaPopup":case"linkViaRedirect":return ef;case"reauthViaPopup":case"reauthViaRedirect":return Qh;default:fe(this.auth,"internal-error")}}resolve(e){Ce(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Ce(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const tf=new zt(2e3,1e4);class ot extends ka{constructor(e,n,s,r,a){super(e,n,r,a),this.provider=s,this.authWindow=null,this.pollId=null,ot.currentPopupAction&&ot.currentPopupAction.cancel(),ot.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return R(e,this.auth,"internal-error"),e}async onExecution(){Ce(this.filter.length===1,"Popup operations only handle one event");const e=ns();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(ge(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(ge(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ot.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ge(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,tf.get())};e()}}ot.currentPopupAction=null;/**
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
 */const nf="pendingRedirect",vn=new Map;class sf extends ka{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=vn.get(this.auth._key());if(!e){try{const s=await rf(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}vn.set(this.auth._key(),e)}return this.bypassAuthState||vn.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function rf(t,e){const n=cf(e),s=af(t);if(!await s._isAvailable())return!1;const r=await s._get(n)==="true";return await s._remove(n),r}function of(t,e){vn.set(t._key(),e)}function af(t){return Ee(t._redirectPersistence)}function cf(t){return yn(nf,t.config.apiKey,t.name)}async function lf(t,e,n=!1){if(se(t.app))return Promise.reject(me(t));const s=$e(t),r=Xh(s,e),l=await new sf(s,r,n).execute();return l&&!n&&(delete l.user._redirectEventId,await s._persistUserIfCurrent(l.user),await s._setRedirectUser(null,e)),l}/**
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
 */const uf=10*60*1e3;class df{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!hf(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!Pa(e)){const r=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(ge(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=uf&&this.cachedEventUids.clear(),this.cachedEventUids.has(Fr(e))}saveEventToCache(e){this.cachedEventUids.add(Fr(e)),this.lastProcessedEventTime=Date.now()}}function Fr(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Pa({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function hf(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Pa(t);default:return!1}}/**
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
 */async function ff(t,e={}){return ke(t,"GET","/v1/projects",e)}/**
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
 */const pf=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,gf=/^https?/;async function mf(t){if(t.config.emulator)return;const{authorizedDomains:e}=await ff(t);for(const n of e)try{if(yf(n))return}catch{}fe(t,"unauthorized-domain")}function yf(t){const e=xi(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const l=new URL(t);return l.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&l.hostname===s}if(!gf.test(n))return!1;if(pf.test(t))return s===t;const r=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(s)}/**
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
 */const vf=new zt(3e4,6e4);function Hr(){const t=ye().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function wf(t){return new Promise((e,n)=>{var s,r,a;function l(){Hr(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Hr(),n(ge(t,"network-request-failed"))},timeout:vf.get()})}if(!((r=(s=ye().gapi)===null||s===void 0?void 0:s.iframes)===null||r===void 0)&&r.Iframe)e(gapi.iframes.getContext());else if(!((a=ye().gapi)===null||a===void 0)&&a.load)l();else{const d=rh("iframefcb");return ye()[d]=()=>{gapi.load?l():n(ge(t,"network-request-failed"))},fa(`${sh()}?onload=${d}`).catch(h=>n(h))}}).catch(e=>{throw wn=null,e})}let wn=null;function If(t){return wn=wn||wf(t),wn}/**
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
 */const bf=new zt(5e3,15e3),_f="__/auth/iframe",Tf="emulator/auth/iframe",Ef={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Af=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Cf(t){const e=t.config;R(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Xi(e,Tf):`https://${t.config.authDomain}/${_f}`,s={apiKey:e.apiKey,appName:t.name,v:ft},r=Af.get(t.config.apiHost);r&&(s.eid=r);const a=t._getFrameworks();return a.length&&(s.fw=a.join(",")),`${n}?${qt(s).slice(1)}`}async function Sf(t){const e=await If(t),n=ye().gapi;return R(n,t,"internal-error"),e.open({where:document.body,url:Cf(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Ef,dontclear:!0},s=>new Promise(async(r,a)=>{await s.restyle({setHideOnLeave:!1});const l=ge(t,"network-request-failed"),d=ye().setTimeout(()=>{a(l)},bf.get());function h(){ye().clearTimeout(d),r(s)}s.ping(h).then(h,()=>{a(l)})}))}/**
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
 */const kf={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Pf=500,Rf=600,Lf="_blank",Of="http://localhost";class jr{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function xf(t,e,n,s=Pf,r=Rf){const a=Math.max((window.screen.availHeight-r)/2,0).toString(),l=Math.max((window.screen.availWidth-s)/2,0).toString();let d="";const h=Object.assign(Object.assign({},kf),{width:s.toString(),height:r.toString(),top:a,left:l}),w=te().toLowerCase();n&&(d=oa(w)?Lf:n),sa(w)&&(e=e||Of,h.scrollbars="yes");const A=Object.entries(h).reduce((T,[P,S])=>`${T}${P}=${S},`,"");if(Jd(w)&&d!=="_self")return Df(e||"",d),new jr(null);const E=window.open(e||"",d,A);R(E,t,"popup-blocked");try{E.focus()}catch{}return new jr(E)}function Df(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const Nf="__/auth/handler",Mf="emulator/auth/handler",Uf=encodeURIComponent("fac");async function $r(t,e,n,s,r,a){R(t.config.authDomain,t,"auth-domain-config-required"),R(t.config.apiKey,t,"invalid-api-key");const l={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:ft,eventId:r};if(e instanceof ma){e.setDefaultLanguage(t.languageCode),l.providerId=e.providerId||"",Gc(e.getCustomParameters())||(l.customParameters=JSON.stringify(e.getCustomParameters()));for(const[A,E]of Object.entries({}))l[A]=E}if(e instanceof Wt){const A=e.getScopes().filter(E=>E!=="");A.length>0&&(l.scopes=A.join(","))}t.tenantId&&(l.tid=t.tenantId);const d=l;for(const A of Object.keys(d))d[A]===void 0&&delete d[A];const h=await t._getAppCheckToken(),w=h?`#${Uf}=${encodeURIComponent(h)}`:"";return`${Bf(t)}?${qt(d).slice(1)}${w}`}function Bf({config:t}){return t.emulator?Xi(t,Mf):`https://${t.authDomain}/${Nf}`}/**
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
 */const _i="webStorageSupport";class Ff{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Ta,this._completeRedirectFn=lf,this._overrideRedirectResult=of}async _openPopup(e,n,s,r){var a;Ce((a=this.eventManagers[e._key()])===null||a===void 0?void 0:a.manager,"_initialize() not called before _openPopup()");const l=await $r(e,n,s,xi(),r);return xf(e,l,ns())}async _openRedirect(e,n,s,r){await this._originValidation(e);const a=await $r(e,n,s,xi(),r);return jh(a),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:r,promise:a}=this.eventManagers[n];return r?Promise.resolve(r):(Ce(a,"If manager is not set, promise should be"),a)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await Sf(e),s=new df(e);return n.register("authEvent",r=>(R(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:s.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(_i,{type:_i},r=>{var a;const l=(a=r==null?void 0:r[0])===null||a===void 0?void 0:a[_i];l!==void 0&&n(!!l),fe(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=mf(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return da()||ra()||Qi()}}const Hf=Ff;var Vr="@firebase/auth",qr="1.10.6";/**
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
 */class jf{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){R(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function $f(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Vf(t){we(new he("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),a=e.getProvider("app-check-internal"),{apiKey:l,authDomain:d}=s.options;R(l&&!l.includes(":"),"invalid-api-key",{appName:s.name});const h={apiKey:l,authDomain:d,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:ha(t)},w=new th(s,r,a,h);return dh(w,n),w},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),we(new he("auth-internal",e=>{const n=$e(e.getProvider("auth").getImmediate());return(s=>new jf(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),ae(Vr,qr,$f(t)),ae(Vr,qr,"esm2017")}/**
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
 */const qf=5*60,zf=mo("authIdTokenMaxAge")||qf;let zr=null;const Wf=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>zf)return;const r=n==null?void 0:n.token;zr!==r&&(zr=r,await fetch(t,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function Gf(t=Vi()){const e=Qe(t,"auth");if(e.isInitialized())return e.getImmediate();const n=uh(t,{popupRedirectResolver:Hf,persistence:[Yh,Bh,Ta]}),s=mo("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const a=new URL(s,location.origin);if(location.origin===a.origin){const l=Wf(a.toString());xh(n,l,()=>l(n.currentUser)),Oh(n,d=>l(d))}}const r=po("auth");return r&&hh(n,`http://${r}`),n}function Kf(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}nh({loadJS(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=r=>{const a=ge("internal-error");a.customData=r,n(a)},s.type="text/javascript",s.charset="UTF-8",Kf().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Vf("Browser");var Wr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ra;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(v,f){function g(){}g.prototype=f.prototype,v.D=f.prototype,v.prototype=new g,v.prototype.constructor=v,v.C=function(m,y,b){for(var p=Array(arguments.length-2),Ie=2;Ie<arguments.length;Ie++)p[Ie-2]=arguments[Ie];return f.prototype[y].apply(m,p)}}function n(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(s,n),s.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function r(v,f,g){g||(g=0);var m=Array(16);if(typeof f=="string")for(var y=0;16>y;++y)m[y]=f.charCodeAt(g++)|f.charCodeAt(g++)<<8|f.charCodeAt(g++)<<16|f.charCodeAt(g++)<<24;else for(y=0;16>y;++y)m[y]=f[g++]|f[g++]<<8|f[g++]<<16|f[g++]<<24;f=v.g[0],g=v.g[1],y=v.g[2];var b=v.g[3],p=f+(b^g&(y^b))+m[0]+3614090360&4294967295;f=g+(p<<7&4294967295|p>>>25),p=b+(y^f&(g^y))+m[1]+3905402710&4294967295,b=f+(p<<12&4294967295|p>>>20),p=y+(g^b&(f^g))+m[2]+606105819&4294967295,y=b+(p<<17&4294967295|p>>>15),p=g+(f^y&(b^f))+m[3]+3250441966&4294967295,g=y+(p<<22&4294967295|p>>>10),p=f+(b^g&(y^b))+m[4]+4118548399&4294967295,f=g+(p<<7&4294967295|p>>>25),p=b+(y^f&(g^y))+m[5]+1200080426&4294967295,b=f+(p<<12&4294967295|p>>>20),p=y+(g^b&(f^g))+m[6]+2821735955&4294967295,y=b+(p<<17&4294967295|p>>>15),p=g+(f^y&(b^f))+m[7]+4249261313&4294967295,g=y+(p<<22&4294967295|p>>>10),p=f+(b^g&(y^b))+m[8]+1770035416&4294967295,f=g+(p<<7&4294967295|p>>>25),p=b+(y^f&(g^y))+m[9]+2336552879&4294967295,b=f+(p<<12&4294967295|p>>>20),p=y+(g^b&(f^g))+m[10]+4294925233&4294967295,y=b+(p<<17&4294967295|p>>>15),p=g+(f^y&(b^f))+m[11]+2304563134&4294967295,g=y+(p<<22&4294967295|p>>>10),p=f+(b^g&(y^b))+m[12]+1804603682&4294967295,f=g+(p<<7&4294967295|p>>>25),p=b+(y^f&(g^y))+m[13]+4254626195&4294967295,b=f+(p<<12&4294967295|p>>>20),p=y+(g^b&(f^g))+m[14]+2792965006&4294967295,y=b+(p<<17&4294967295|p>>>15),p=g+(f^y&(b^f))+m[15]+1236535329&4294967295,g=y+(p<<22&4294967295|p>>>10),p=f+(y^b&(g^y))+m[1]+4129170786&4294967295,f=g+(p<<5&4294967295|p>>>27),p=b+(g^y&(f^g))+m[6]+3225465664&4294967295,b=f+(p<<9&4294967295|p>>>23),p=y+(f^g&(b^f))+m[11]+643717713&4294967295,y=b+(p<<14&4294967295|p>>>18),p=g+(b^f&(y^b))+m[0]+3921069994&4294967295,g=y+(p<<20&4294967295|p>>>12),p=f+(y^b&(g^y))+m[5]+3593408605&4294967295,f=g+(p<<5&4294967295|p>>>27),p=b+(g^y&(f^g))+m[10]+38016083&4294967295,b=f+(p<<9&4294967295|p>>>23),p=y+(f^g&(b^f))+m[15]+3634488961&4294967295,y=b+(p<<14&4294967295|p>>>18),p=g+(b^f&(y^b))+m[4]+3889429448&4294967295,g=y+(p<<20&4294967295|p>>>12),p=f+(y^b&(g^y))+m[9]+568446438&4294967295,f=g+(p<<5&4294967295|p>>>27),p=b+(g^y&(f^g))+m[14]+3275163606&4294967295,b=f+(p<<9&4294967295|p>>>23),p=y+(f^g&(b^f))+m[3]+4107603335&4294967295,y=b+(p<<14&4294967295|p>>>18),p=g+(b^f&(y^b))+m[8]+1163531501&4294967295,g=y+(p<<20&4294967295|p>>>12),p=f+(y^b&(g^y))+m[13]+2850285829&4294967295,f=g+(p<<5&4294967295|p>>>27),p=b+(g^y&(f^g))+m[2]+4243563512&4294967295,b=f+(p<<9&4294967295|p>>>23),p=y+(f^g&(b^f))+m[7]+1735328473&4294967295,y=b+(p<<14&4294967295|p>>>18),p=g+(b^f&(y^b))+m[12]+2368359562&4294967295,g=y+(p<<20&4294967295|p>>>12),p=f+(g^y^b)+m[5]+4294588738&4294967295,f=g+(p<<4&4294967295|p>>>28),p=b+(f^g^y)+m[8]+2272392833&4294967295,b=f+(p<<11&4294967295|p>>>21),p=y+(b^f^g)+m[11]+1839030562&4294967295,y=b+(p<<16&4294967295|p>>>16),p=g+(y^b^f)+m[14]+4259657740&4294967295,g=y+(p<<23&4294967295|p>>>9),p=f+(g^y^b)+m[1]+2763975236&4294967295,f=g+(p<<4&4294967295|p>>>28),p=b+(f^g^y)+m[4]+1272893353&4294967295,b=f+(p<<11&4294967295|p>>>21),p=y+(b^f^g)+m[7]+4139469664&4294967295,y=b+(p<<16&4294967295|p>>>16),p=g+(y^b^f)+m[10]+3200236656&4294967295,g=y+(p<<23&4294967295|p>>>9),p=f+(g^y^b)+m[13]+681279174&4294967295,f=g+(p<<4&4294967295|p>>>28),p=b+(f^g^y)+m[0]+3936430074&4294967295,b=f+(p<<11&4294967295|p>>>21),p=y+(b^f^g)+m[3]+3572445317&4294967295,y=b+(p<<16&4294967295|p>>>16),p=g+(y^b^f)+m[6]+76029189&4294967295,g=y+(p<<23&4294967295|p>>>9),p=f+(g^y^b)+m[9]+3654602809&4294967295,f=g+(p<<4&4294967295|p>>>28),p=b+(f^g^y)+m[12]+3873151461&4294967295,b=f+(p<<11&4294967295|p>>>21),p=y+(b^f^g)+m[15]+530742520&4294967295,y=b+(p<<16&4294967295|p>>>16),p=g+(y^b^f)+m[2]+3299628645&4294967295,g=y+(p<<23&4294967295|p>>>9),p=f+(y^(g|~b))+m[0]+4096336452&4294967295,f=g+(p<<6&4294967295|p>>>26),p=b+(g^(f|~y))+m[7]+1126891415&4294967295,b=f+(p<<10&4294967295|p>>>22),p=y+(f^(b|~g))+m[14]+2878612391&4294967295,y=b+(p<<15&4294967295|p>>>17),p=g+(b^(y|~f))+m[5]+4237533241&4294967295,g=y+(p<<21&4294967295|p>>>11),p=f+(y^(g|~b))+m[12]+1700485571&4294967295,f=g+(p<<6&4294967295|p>>>26),p=b+(g^(f|~y))+m[3]+2399980690&4294967295,b=f+(p<<10&4294967295|p>>>22),p=y+(f^(b|~g))+m[10]+4293915773&4294967295,y=b+(p<<15&4294967295|p>>>17),p=g+(b^(y|~f))+m[1]+2240044497&4294967295,g=y+(p<<21&4294967295|p>>>11),p=f+(y^(g|~b))+m[8]+1873313359&4294967295,f=g+(p<<6&4294967295|p>>>26),p=b+(g^(f|~y))+m[15]+4264355552&4294967295,b=f+(p<<10&4294967295|p>>>22),p=y+(f^(b|~g))+m[6]+2734768916&4294967295,y=b+(p<<15&4294967295|p>>>17),p=g+(b^(y|~f))+m[13]+1309151649&4294967295,g=y+(p<<21&4294967295|p>>>11),p=f+(y^(g|~b))+m[4]+4149444226&4294967295,f=g+(p<<6&4294967295|p>>>26),p=b+(g^(f|~y))+m[11]+3174756917&4294967295,b=f+(p<<10&4294967295|p>>>22),p=y+(f^(b|~g))+m[2]+718787259&4294967295,y=b+(p<<15&4294967295|p>>>17),p=g+(b^(y|~f))+m[9]+3951481745&4294967295,v.g[0]=v.g[0]+f&4294967295,v.g[1]=v.g[1]+(y+(p<<21&4294967295|p>>>11))&4294967295,v.g[2]=v.g[2]+y&4294967295,v.g[3]=v.g[3]+b&4294967295}s.prototype.u=function(v,f){f===void 0&&(f=v.length);for(var g=f-this.blockSize,m=this.B,y=this.h,b=0;b<f;){if(y==0)for(;b<=g;)r(this,v,b),b+=this.blockSize;if(typeof v=="string"){for(;b<f;)if(m[y++]=v.charCodeAt(b++),y==this.blockSize){r(this,m),y=0;break}}else for(;b<f;)if(m[y++]=v[b++],y==this.blockSize){r(this,m),y=0;break}}this.h=y,this.o+=f},s.prototype.v=function(){var v=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);v[0]=128;for(var f=1;f<v.length-8;++f)v[f]=0;var g=8*this.o;for(f=v.length-8;f<v.length;++f)v[f]=g&255,g/=256;for(this.u(v),v=Array(16),f=g=0;4>f;++f)for(var m=0;32>m;m+=8)v[g++]=this.g[f]>>>m&255;return v};function a(v,f){var g=d;return Object.prototype.hasOwnProperty.call(g,v)?g[v]:g[v]=f(v)}function l(v,f){this.h=f;for(var g=[],m=!0,y=v.length-1;0<=y;y--){var b=v[y]|0;m&&b==f||(g[y]=b,m=!1)}this.g=g}var d={};function h(v){return-128<=v&&128>v?a(v,function(f){return new l([f|0],0>f?-1:0)}):new l([v|0],0>v?-1:0)}function w(v){if(isNaN(v)||!isFinite(v))return E;if(0>v)return k(w(-v));for(var f=[],g=1,m=0;v>=g;m++)f[m]=v/g|0,g*=4294967296;return new l(f,0)}function A(v,f){if(v.length==0)throw Error("number format error: empty string");if(f=f||10,2>f||36<f)throw Error("radix out of range: "+f);if(v.charAt(0)=="-")return k(A(v.substring(1),f));if(0<=v.indexOf("-"))throw Error('number format error: interior "-" character');for(var g=w(Math.pow(f,8)),m=E,y=0;y<v.length;y+=8){var b=Math.min(8,v.length-y),p=parseInt(v.substring(y,y+b),f);8>b?(b=w(Math.pow(f,b)),m=m.j(b).add(w(p))):(m=m.j(g),m=m.add(w(p)))}return m}var E=h(0),T=h(1),P=h(16777216);t=l.prototype,t.m=function(){if(L(this))return-k(this).m();for(var v=0,f=1,g=0;g<this.g.length;g++){var m=this.i(g);v+=(0<=m?m:4294967296+m)*f,f*=4294967296}return v},t.toString=function(v){if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(S(this))return"0";if(L(this))return"-"+k(this).toString(v);for(var f=w(Math.pow(v,6)),g=this,m="";;){var y=j(g,f).g;g=$(g,y.j(f));var b=((0<g.g.length?g.g[0]:g.h)>>>0).toString(v);if(g=y,S(g))return b+m;for(;6>b.length;)b="0"+b;m=b+m}},t.i=function(v){return 0>v?0:v<this.g.length?this.g[v]:this.h};function S(v){if(v.h!=0)return!1;for(var f=0;f<v.g.length;f++)if(v.g[f]!=0)return!1;return!0}function L(v){return v.h==-1}t.l=function(v){return v=$(this,v),L(v)?-1:S(v)?0:1};function k(v){for(var f=v.g.length,g=[],m=0;m<f;m++)g[m]=~v.g[m];return new l(g,~v.h).add(T)}t.abs=function(){return L(this)?k(this):this},t.add=function(v){for(var f=Math.max(this.g.length,v.g.length),g=[],m=0,y=0;y<=f;y++){var b=m+(this.i(y)&65535)+(v.i(y)&65535),p=(b>>>16)+(this.i(y)>>>16)+(v.i(y)>>>16);m=p>>>16,b&=65535,p&=65535,g[y]=p<<16|b}return new l(g,g[g.length-1]&-2147483648?-1:0)};function $(v,f){return v.add(k(f))}t.j=function(v){if(S(this)||S(v))return E;if(L(this))return L(v)?k(this).j(k(v)):k(k(this).j(v));if(L(v))return k(this.j(k(v)));if(0>this.l(P)&&0>v.l(P))return w(this.m()*v.m());for(var f=this.g.length+v.g.length,g=[],m=0;m<2*f;m++)g[m]=0;for(m=0;m<this.g.length;m++)for(var y=0;y<v.g.length;y++){var b=this.i(m)>>>16,p=this.i(m)&65535,Ie=v.i(y)>>>16,mt=v.i(y)&65535;g[2*m+2*y]+=p*mt,O(g,2*m+2*y),g[2*m+2*y+1]+=b*mt,O(g,2*m+2*y+1),g[2*m+2*y+1]+=p*Ie,O(g,2*m+2*y+1),g[2*m+2*y+2]+=b*Ie,O(g,2*m+2*y+2)}for(m=0;m<f;m++)g[m]=g[2*m+1]<<16|g[2*m];for(m=f;m<2*f;m++)g[m]=0;return new l(g,0)};function O(v,f){for(;(v[f]&65535)!=v[f];)v[f+1]+=v[f]>>>16,v[f]&=65535,f++}function x(v,f){this.g=v,this.h=f}function j(v,f){if(S(f))throw Error("division by zero");if(S(v))return new x(E,E);if(L(v))return f=j(k(v),f),new x(k(f.g),k(f.h));if(L(f))return f=j(v,k(f)),new x(k(f.g),f.h);if(30<v.g.length){if(L(v)||L(f))throw Error("slowDivide_ only works with positive integers.");for(var g=T,m=f;0>=m.l(v);)g=ie(g),m=ie(m);var y=z(g,1),b=z(m,1);for(m=z(m,2),g=z(g,2);!S(m);){var p=b.add(m);0>=p.l(v)&&(y=y.add(g),b=p),m=z(m,1),g=z(g,1)}return f=$(v,y.j(f)),new x(y,f)}for(y=E;0<=v.l(f);){for(g=Math.max(1,Math.floor(v.m()/f.m())),m=Math.ceil(Math.log(g)/Math.LN2),m=48>=m?1:Math.pow(2,m-48),b=w(g),p=b.j(f);L(p)||0<p.l(v);)g-=m,b=w(g),p=b.j(f);S(b)&&(b=T),y=y.add(b),v=$(v,p)}return new x(y,v)}t.A=function(v){return j(this,v).h},t.and=function(v){for(var f=Math.max(this.g.length,v.g.length),g=[],m=0;m<f;m++)g[m]=this.i(m)&v.i(m);return new l(g,this.h&v.h)},t.or=function(v){for(var f=Math.max(this.g.length,v.g.length),g=[],m=0;m<f;m++)g[m]=this.i(m)|v.i(m);return new l(g,this.h|v.h)},t.xor=function(v){for(var f=Math.max(this.g.length,v.g.length),g=[],m=0;m<f;m++)g[m]=this.i(m)^v.i(m);return new l(g,this.h^v.h)};function ie(v){for(var f=v.g.length+1,g=[],m=0;m<f;m++)g[m]=v.i(m)<<1|v.i(m-1)>>>31;return new l(g,v.h)}function z(v,f){var g=f>>5;f%=32;for(var m=v.g.length-g,y=[],b=0;b<m;b++)y[b]=0<f?v.i(b+g)>>>f|v.i(b+g+1)<<32-f:v.i(b+g);return new l(y,v.h)}s.prototype.digest=s.prototype.v,s.prototype.reset=s.prototype.s,s.prototype.update=s.prototype.u,l.prototype.add=l.prototype.add,l.prototype.multiply=l.prototype.j,l.prototype.modulo=l.prototype.A,l.prototype.compare=l.prototype.l,l.prototype.toNumber=l.prototype.m,l.prototype.toString=l.prototype.toString,l.prototype.getBits=l.prototype.i,l.fromNumber=w,l.fromString=A,Ra=l}).apply(typeof Wr<"u"?Wr:typeof self<"u"?self:typeof window<"u"?window:{});var fn=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(i,o,c){return i==Array.prototype||i==Object.prototype||(i[o]=c.value),i};function n(i){i=[typeof globalThis=="object"&&globalThis,i,typeof window=="object"&&window,typeof self=="object"&&self,typeof fn=="object"&&fn];for(var o=0;o<i.length;++o){var c=i[o];if(c&&c.Math==Math)return c}throw Error("Cannot find global object")}var s=n(this);function r(i,o){if(o)e:{var c=s;i=i.split(".");for(var u=0;u<i.length-1;u++){var I=i[u];if(!(I in c))break e;c=c[I]}i=i[i.length-1],u=c[i],o=o(u),o!=u&&o!=null&&e(c,i,{configurable:!0,writable:!0,value:o})}}function a(i,o){i instanceof String&&(i+="");var c=0,u=!1,I={next:function(){if(!u&&c<i.length){var _=c++;return{value:o(_,i[_]),done:!1}}return u=!0,{done:!0,value:void 0}}};return I[Symbol.iterator]=function(){return I},I}r("Array.prototype.values",function(i){return i||function(){return a(this,function(o,c){return c})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var l=l||{},d=this||self;function h(i){var o=typeof i;return o=o!="object"?o:i?Array.isArray(i)?"array":o:"null",o=="array"||o=="object"&&typeof i.length=="number"}function w(i){var o=typeof i;return o=="object"&&i!=null||o=="function"}function A(i,o,c){return i.call.apply(i.bind,arguments)}function E(i,o,c){if(!i)throw Error();if(2<arguments.length){var u=Array.prototype.slice.call(arguments,2);return function(){var I=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(I,u),i.apply(o,I)}}return function(){return i.apply(o,arguments)}}function T(i,o,c){return T=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?A:E,T.apply(null,arguments)}function P(i,o){var c=Array.prototype.slice.call(arguments,1);return function(){var u=c.slice();return u.push.apply(u,arguments),i.apply(this,u)}}function S(i,o){function c(){}c.prototype=o.prototype,i.aa=o.prototype,i.prototype=new c,i.prototype.constructor=i,i.Qb=function(u,I,_){for(var C=Array(arguments.length-2),U=2;U<arguments.length;U++)C[U-2]=arguments[U];return o.prototype[I].apply(u,C)}}function L(i){const o=i.length;if(0<o){const c=Array(o);for(let u=0;u<o;u++)c[u]=i[u];return c}return[]}function k(i,o){for(let c=1;c<arguments.length;c++){const u=arguments[c];if(h(u)){const I=i.length||0,_=u.length||0;i.length=I+_;for(let C=0;C<_;C++)i[I+C]=u[C]}else i.push(u)}}class ${constructor(o,c){this.i=o,this.j=c,this.h=0,this.g=null}get(){let o;return 0<this.h?(this.h--,o=this.g,this.g=o.next,o.next=null):o=this.i(),o}}function O(i){return/^[\s\xa0]*$/.test(i)}function x(){var i=d.navigator;return i&&(i=i.userAgent)?i:""}function j(i){return j[" "](i),i}j[" "]=function(){};var ie=x().indexOf("Gecko")!=-1&&!(x().toLowerCase().indexOf("webkit")!=-1&&x().indexOf("Edge")==-1)&&!(x().indexOf("Trident")!=-1||x().indexOf("MSIE")!=-1)&&x().indexOf("Edge")==-1;function z(i,o,c){for(const u in i)o.call(c,i[u],u,i)}function v(i,o){for(const c in i)o.call(void 0,i[c],c,i)}function f(i){const o={};for(const c in i)o[c]=i[c];return o}const g="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function m(i,o){let c,u;for(let I=1;I<arguments.length;I++){u=arguments[I];for(c in u)i[c]=u[c];for(let _=0;_<g.length;_++)c=g[_],Object.prototype.hasOwnProperty.call(u,c)&&(i[c]=u[c])}}function y(i){var o=1;i=i.split(":");const c=[];for(;0<o&&i.length;)c.push(i.shift()),o--;return i.length&&c.push(i.join(":")),c}function b(i){d.setTimeout(()=>{throw i},0)}function p(){var i=jn;let o=null;return i.g&&(o=i.g,i.g=i.g.next,i.g||(i.h=null),o.next=null),o}class Ie{constructor(){this.h=this.g=null}add(o,c){const u=mt.get();u.set(o,c),this.h?this.h.next=u:this.g=u,this.h=u}}var mt=new $(()=>new ja,i=>i.reset());class ja{constructor(){this.next=this.g=this.h=null}set(o,c){this.h=o,this.g=c,this.next=null}reset(){this.next=this.g=this.h=null}}let yt,vt=!1,jn=new Ie,ls=()=>{const i=d.Promise.resolve(void 0);yt=()=>{i.then($a)}};var $a=()=>{for(var i;i=p();){try{i.h.call(i.g)}catch(c){b(c)}var o=mt;o.j(i),100>o.h&&(o.h++,i.next=o.g,o.g=i)}vt=!1};function Pe(){this.s=this.s,this.C=this.C}Pe.prototype.s=!1,Pe.prototype.ma=function(){this.s||(this.s=!0,this.N())},Pe.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function G(i,o){this.type=i,this.g=this.target=o,this.defaultPrevented=!1}G.prototype.h=function(){this.defaultPrevented=!0};var Va=function(){if(!d.addEventListener||!Object.defineProperty)return!1;var i=!1,o=Object.defineProperty({},"passive",{get:function(){i=!0}});try{const c=()=>{};d.addEventListener("test",c,o),d.removeEventListener("test",c,o)}catch{}return i}();function wt(i,o){if(G.call(this,i?i.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,i){var c=this.type=i.type,u=i.changedTouches&&i.changedTouches.length?i.changedTouches[0]:null;if(this.target=i.target||i.srcElement,this.g=o,o=i.relatedTarget){if(ie){e:{try{j(o.nodeName);var I=!0;break e}catch{}I=!1}I||(o=null)}}else c=="mouseover"?o=i.fromElement:c=="mouseout"&&(o=i.toElement);this.relatedTarget=o,u?(this.clientX=u.clientX!==void 0?u.clientX:u.pageX,this.clientY=u.clientY!==void 0?u.clientY:u.pageY,this.screenX=u.screenX||0,this.screenY=u.screenY||0):(this.clientX=i.clientX!==void 0?i.clientX:i.pageX,this.clientY=i.clientY!==void 0?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0),this.button=i.button,this.key=i.key||"",this.ctrlKey=i.ctrlKey,this.altKey=i.altKey,this.shiftKey=i.shiftKey,this.metaKey=i.metaKey,this.pointerId=i.pointerId||0,this.pointerType=typeof i.pointerType=="string"?i.pointerType:qa[i.pointerType]||"",this.state=i.state,this.i=i,i.defaultPrevented&&wt.aa.h.call(this)}}S(wt,G);var qa={2:"touch",3:"pen",4:"mouse"};wt.prototype.h=function(){wt.aa.h.call(this);var i=this.i;i.preventDefault?i.preventDefault():i.returnValue=!1};var Jt="closure_listenable_"+(1e6*Math.random()|0),za=0;function Wa(i,o,c,u,I){this.listener=i,this.proxy=null,this.src=o,this.type=c,this.capture=!!u,this.ha=I,this.key=++za,this.da=this.fa=!1}function Yt(i){i.da=!0,i.listener=null,i.proxy=null,i.src=null,i.ha=null}function Xt(i){this.src=i,this.g={},this.h=0}Xt.prototype.add=function(i,o,c,u,I){var _=i.toString();i=this.g[_],i||(i=this.g[_]=[],this.h++);var C=Vn(i,o,u,I);return-1<C?(o=i[C],c||(o.fa=!1)):(o=new Wa(o,this.src,_,!!u,I),o.fa=c,i.push(o)),o};function $n(i,o){var c=o.type;if(c in i.g){var u=i.g[c],I=Array.prototype.indexOf.call(u,o,void 0),_;(_=0<=I)&&Array.prototype.splice.call(u,I,1),_&&(Yt(o),i.g[c].length==0&&(delete i.g[c],i.h--))}}function Vn(i,o,c,u){for(var I=0;I<i.length;++I){var _=i[I];if(!_.da&&_.listener==o&&_.capture==!!c&&_.ha==u)return I}return-1}var qn="closure_lm_"+(1e6*Math.random()|0),zn={};function us(i,o,c,u,I){if(Array.isArray(o)){for(var _=0;_<o.length;_++)us(i,o[_],c,u,I);return null}return c=fs(c),i&&i[Jt]?i.K(o,c,w(u)?!!u.capture:!1,I):Ga(i,o,c,!1,u,I)}function Ga(i,o,c,u,I,_){if(!o)throw Error("Invalid event type");var C=w(I)?!!I.capture:!!I,U=Gn(i);if(U||(i[qn]=U=new Xt(i)),c=U.add(o,c,u,C,_),c.proxy)return c;if(u=Ka(),c.proxy=u,u.src=i,u.listener=c,i.addEventListener)Va||(I=C),I===void 0&&(I=!1),i.addEventListener(o.toString(),u,I);else if(i.attachEvent)i.attachEvent(hs(o.toString()),u);else if(i.addListener&&i.removeListener)i.addListener(u);else throw Error("addEventListener and attachEvent are unavailable.");return c}function Ka(){function i(c){return o.call(i.src,i.listener,c)}const o=Ja;return i}function ds(i,o,c,u,I){if(Array.isArray(o))for(var _=0;_<o.length;_++)ds(i,o[_],c,u,I);else u=w(u)?!!u.capture:!!u,c=fs(c),i&&i[Jt]?(i=i.i,o=String(o).toString(),o in i.g&&(_=i.g[o],c=Vn(_,c,u,I),-1<c&&(Yt(_[c]),Array.prototype.splice.call(_,c,1),_.length==0&&(delete i.g[o],i.h--)))):i&&(i=Gn(i))&&(o=i.g[o.toString()],i=-1,o&&(i=Vn(o,c,u,I)),(c=-1<i?o[i]:null)&&Wn(c))}function Wn(i){if(typeof i!="number"&&i&&!i.da){var o=i.src;if(o&&o[Jt])$n(o.i,i);else{var c=i.type,u=i.proxy;o.removeEventListener?o.removeEventListener(c,u,i.capture):o.detachEvent?o.detachEvent(hs(c),u):o.addListener&&o.removeListener&&o.removeListener(u),(c=Gn(o))?($n(c,i),c.h==0&&(c.src=null,o[qn]=null)):Yt(i)}}}function hs(i){return i in zn?zn[i]:zn[i]="on"+i}function Ja(i,o){if(i.da)i=!0;else{o=new wt(o,this);var c=i.listener,u=i.ha||i.src;i.fa&&Wn(i),i=c.call(u,o)}return i}function Gn(i){return i=i[qn],i instanceof Xt?i:null}var Kn="__closure_events_fn_"+(1e9*Math.random()>>>0);function fs(i){return typeof i=="function"?i:(i[Kn]||(i[Kn]=function(o){return i.handleEvent(o)}),i[Kn])}function K(){Pe.call(this),this.i=new Xt(this),this.M=this,this.F=null}S(K,Pe),K.prototype[Jt]=!0,K.prototype.removeEventListener=function(i,o,c,u){ds(this,i,o,c,u)};function Z(i,o){var c,u=i.F;if(u)for(c=[];u;u=u.F)c.push(u);if(i=i.M,u=o.type||o,typeof o=="string")o=new G(o,i);else if(o instanceof G)o.target=o.target||i;else{var I=o;o=new G(u,i),m(o,I)}if(I=!0,c)for(var _=c.length-1;0<=_;_--){var C=o.g=c[_];I=Zt(C,u,!0,o)&&I}if(C=o.g=i,I=Zt(C,u,!0,o)&&I,I=Zt(C,u,!1,o)&&I,c)for(_=0;_<c.length;_++)C=o.g=c[_],I=Zt(C,u,!1,o)&&I}K.prototype.N=function(){if(K.aa.N.call(this),this.i){var i=this.i,o;for(o in i.g){for(var c=i.g[o],u=0;u<c.length;u++)Yt(c[u]);delete i.g[o],i.h--}}this.F=null},K.prototype.K=function(i,o,c,u){return this.i.add(String(i),o,!1,c,u)},K.prototype.L=function(i,o,c,u){return this.i.add(String(i),o,!0,c,u)};function Zt(i,o,c,u){if(o=i.i.g[String(o)],!o)return!0;o=o.concat();for(var I=!0,_=0;_<o.length;++_){var C=o[_];if(C&&!C.da&&C.capture==c){var U=C.listener,W=C.ha||C.src;C.fa&&$n(i.i,C),I=U.call(W,u)!==!1&&I}}return I&&!u.defaultPrevented}function ps(i,o,c){if(typeof i=="function")c&&(i=T(i,c));else if(i&&typeof i.handleEvent=="function")i=T(i.handleEvent,i);else throw Error("Invalid listener argument");return 2147483647<Number(o)?-1:d.setTimeout(i,o||0)}function gs(i){i.g=ps(()=>{i.g=null,i.i&&(i.i=!1,gs(i))},i.l);const o=i.h;i.h=null,i.m.apply(null,o)}class Ya extends Pe{constructor(o,c){super(),this.m=o,this.l=c,this.h=null,this.i=!1,this.g=null}j(o){this.h=arguments,this.g?this.i=!0:gs(this)}N(){super.N(),this.g&&(d.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function It(i){Pe.call(this),this.h=i,this.g={}}S(It,Pe);var ms=[];function ys(i){z(i.g,function(o,c){this.g.hasOwnProperty(c)&&Wn(o)},i),i.g={}}It.prototype.N=function(){It.aa.N.call(this),ys(this)},It.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Jn=d.JSON.stringify,Xa=d.JSON.parse,Za=class{stringify(i){return d.JSON.stringify(i,void 0)}parse(i){return d.JSON.parse(i,void 0)}};function Yn(){}Yn.prototype.h=null;function vs(i){return i.h||(i.h=i.i())}function Qa(){}var bt={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Xn(){G.call(this,"d")}S(Xn,G);function Zn(){G.call(this,"c")}S(Zn,G);var et={},ws=null;function Qn(){return ws=ws||new K}et.La="serverreachability";function Is(i){G.call(this,et.La,i)}S(Is,G);function _t(i){const o=Qn();Z(o,new Is(o))}et.STAT_EVENT="statevent";function bs(i,o){G.call(this,et.STAT_EVENT,i),this.stat=o}S(bs,G);function Q(i){const o=Qn();Z(o,new bs(o,i))}et.Ma="timingevent";function _s(i,o){G.call(this,et.Ma,i),this.size=o}S(_s,G);function Tt(i,o){if(typeof i!="function")throw Error("Fn must not be null and must be a function");return d.setTimeout(function(){i()},o)}function Et(){this.g=!0}Et.prototype.xa=function(){this.g=!1};function ec(i,o,c,u,I,_){i.info(function(){if(i.g)if(_)for(var C="",U=_.split("&"),W=0;W<U.length;W++){var N=U[W].split("=");if(1<N.length){var J=N[0];N=N[1];var Y=J.split("_");C=2<=Y.length&&Y[1]=="type"?C+(J+"="+N+"&"):C+(J+"=redacted&")}}else C=null;else C=_;return"XMLHTTP REQ ("+u+") [attempt "+I+"]: "+o+`
`+c+`
`+C})}function tc(i,o,c,u,I,_,C){i.info(function(){return"XMLHTTP RESP ("+u+") [ attempt "+I+"]: "+o+`
`+c+`
`+_+" "+C})}function tt(i,o,c,u){i.info(function(){return"XMLHTTP TEXT ("+o+"): "+ic(i,c)+(u?" "+u:"")})}function nc(i,o){i.info(function(){return"TIMEOUT: "+o})}Et.prototype.info=function(){};function ic(i,o){if(!i.g)return o;if(!o)return null;try{var c=JSON.parse(o);if(c){for(i=0;i<c.length;i++)if(Array.isArray(c[i])){var u=c[i];if(!(2>u.length)){var I=u[1];if(Array.isArray(I)&&!(1>I.length)){var _=I[0];if(_!="noop"&&_!="stop"&&_!="close")for(var C=1;C<I.length;C++)I[C]=""}}}}return Jn(c)}catch{return o}}var ei={NO_ERROR:0,TIMEOUT:8},sc={},ti;function Qt(){}S(Qt,Yn),Qt.prototype.g=function(){return new XMLHttpRequest},Qt.prototype.i=function(){return{}},ti=new Qt;function Re(i,o,c,u){this.j=i,this.i=o,this.l=c,this.R=u||1,this.U=new It(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Ts}function Ts(){this.i=null,this.g="",this.h=!1}var Es={},ni={};function ii(i,o,c){i.L=1,i.v=sn(be(o)),i.m=c,i.P=!0,As(i,null)}function As(i,o){i.F=Date.now(),en(i),i.A=be(i.v);var c=i.A,u=i.R;Array.isArray(u)||(u=[String(u)]),Fs(c.i,"t",u),i.C=0,c=i.j.J,i.h=new Ts,i.g=ir(i.j,c?o:null,!i.m),0<i.O&&(i.M=new Ya(T(i.Y,i,i.g),i.O)),o=i.U,c=i.g,u=i.ca;var I="readystatechange";Array.isArray(I)||(I&&(ms[0]=I.toString()),I=ms);for(var _=0;_<I.length;_++){var C=us(c,I[_],u||o.handleEvent,!1,o.h||o);if(!C)break;o.g[C.key]=C}o=i.H?f(i.H):{},i.m?(i.u||(i.u="POST"),o["Content-Type"]="application/x-www-form-urlencoded",i.g.ea(i.A,i.u,i.m,o)):(i.u="GET",i.g.ea(i.A,i.u,null,o)),_t(),ec(i.i,i.u,i.A,i.l,i.R,i.m)}Re.prototype.ca=function(i){i=i.target;const o=this.M;o&&_e(i)==3?o.j():this.Y(i)},Re.prototype.Y=function(i){try{if(i==this.g)e:{const Y=_e(this.g);var o=this.g.Ba();const st=this.g.Z();if(!(3>Y)&&(Y!=3||this.g&&(this.h.h||this.g.oa()||Ws(this.g)))){this.J||Y!=4||o==7||(o==8||0>=st?_t(3):_t(2)),si(this);var c=this.g.Z();this.X=c;t:if(Cs(this)){var u=Ws(this.g);i="";var I=u.length,_=_e(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Ve(this),At(this);var C="";break t}this.h.i=new d.TextDecoder}for(o=0;o<I;o++)this.h.h=!0,i+=this.h.i.decode(u[o],{stream:!(_&&o==I-1)});u.length=0,this.h.g+=i,this.C=0,C=this.h.g}else C=this.g.oa();if(this.o=c==200,tc(this.i,this.u,this.A,this.l,this.R,Y,c),this.o){if(this.T&&!this.K){t:{if(this.g){var U,W=this.g;if((U=W.g?W.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!O(U)){var N=U;break t}}N=null}if(c=N)tt(this.i,this.l,c,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,ri(this,c);else{this.o=!1,this.s=3,Q(12),Ve(this),At(this);break e}}if(this.P){c=!0;let le;for(;!this.J&&this.C<C.length;)if(le=rc(this,C),le==ni){Y==4&&(this.s=4,Q(14),c=!1),tt(this.i,this.l,null,"[Incomplete Response]");break}else if(le==Es){this.s=4,Q(15),tt(this.i,this.l,C,"[Invalid Chunk]"),c=!1;break}else tt(this.i,this.l,le,null),ri(this,le);if(Cs(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Y!=4||C.length!=0||this.h.h||(this.s=1,Q(16),c=!1),this.o=this.o&&c,!c)tt(this.i,this.l,C,"[Invalid Chunked Response]"),Ve(this),At(this);else if(0<C.length&&!this.W){this.W=!0;var J=this.j;J.g==this&&J.ba&&!J.M&&(J.j.info("Great, no buffering proxy detected. Bytes received: "+C.length),di(J),J.M=!0,Q(11))}}else tt(this.i,this.l,C,null),ri(this,C);Y==4&&Ve(this),this.o&&!this.J&&(Y==4?Qs(this.j,this):(this.o=!1,en(this)))}else _c(this.g),c==400&&0<C.indexOf("Unknown SID")?(this.s=3,Q(12)):(this.s=0,Q(13)),Ve(this),At(this)}}}catch{}finally{}};function Cs(i){return i.g?i.u=="GET"&&i.L!=2&&i.j.Ca:!1}function rc(i,o){var c=i.C,u=o.indexOf(`
`,c);return u==-1?ni:(c=Number(o.substring(c,u)),isNaN(c)?Es:(u+=1,u+c>o.length?ni:(o=o.slice(u,u+c),i.C=u+c,o)))}Re.prototype.cancel=function(){this.J=!0,Ve(this)};function en(i){i.S=Date.now()+i.I,Ss(i,i.I)}function Ss(i,o){if(i.B!=null)throw Error("WatchDog timer not null");i.B=Tt(T(i.ba,i),o)}function si(i){i.B&&(d.clearTimeout(i.B),i.B=null)}Re.prototype.ba=function(){this.B=null;const i=Date.now();0<=i-this.S?(nc(this.i,this.A),this.L!=2&&(_t(),Q(17)),Ve(this),this.s=2,At(this)):Ss(this,this.S-i)};function At(i){i.j.G==0||i.J||Qs(i.j,i)}function Ve(i){si(i);var o=i.M;o&&typeof o.ma=="function"&&o.ma(),i.M=null,ys(i.U),i.g&&(o=i.g,i.g=null,o.abort(),o.ma())}function ri(i,o){try{var c=i.j;if(c.G!=0&&(c.g==i||oi(c.h,i))){if(!i.K&&oi(c.h,i)&&c.G==3){try{var u=c.Da.g.parse(o)}catch{u=null}if(Array.isArray(u)&&u.length==3){var I=u;if(I[0]==0){e:if(!c.u){if(c.g)if(c.g.F+3e3<i.F)un(c),cn(c);else break e;ui(c),Q(18)}}else c.za=I[1],0<c.za-c.T&&37500>I[2]&&c.F&&c.v==0&&!c.C&&(c.C=Tt(T(c.Za,c),6e3));if(1>=Rs(c.h)&&c.ca){try{c.ca()}catch{}c.ca=void 0}}else ze(c,11)}else if((i.K||c.g==i)&&un(c),!O(o))for(I=c.Da.g.parse(o),o=0;o<I.length;o++){let N=I[o];if(c.T=N[0],N=N[1],c.G==2)if(N[0]=="c"){c.K=N[1],c.ia=N[2];const J=N[3];J!=null&&(c.la=J,c.j.info("VER="+c.la));const Y=N[4];Y!=null&&(c.Aa=Y,c.j.info("SVER="+c.Aa));const st=N[5];st!=null&&typeof st=="number"&&0<st&&(u=1.5*st,c.L=u,c.j.info("backChannelRequestTimeoutMs_="+u)),u=c;const le=i.g;if(le){const dn=le.g?le.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(dn){var _=u.h;_.g||dn.indexOf("spdy")==-1&&dn.indexOf("quic")==-1&&dn.indexOf("h2")==-1||(_.j=_.l,_.g=new Set,_.h&&(ai(_,_.h),_.h=null))}if(u.D){const hi=le.g?le.g.getResponseHeader("X-HTTP-Session-Id"):null;hi&&(u.ya=hi,B(u.I,u.D,hi))}}c.G=3,c.l&&c.l.ua(),c.ba&&(c.R=Date.now()-i.F,c.j.info("Handshake RTT: "+c.R+"ms")),u=c;var C=i;if(u.qa=nr(u,u.J?u.ia:null,u.W),C.K){Ls(u.h,C);var U=C,W=u.L;W&&(U.I=W),U.B&&(si(U),en(U)),u.g=C}else Xs(u);0<c.i.length&&ln(c)}else N[0]!="stop"&&N[0]!="close"||ze(c,7);else c.G==3&&(N[0]=="stop"||N[0]=="close"?N[0]=="stop"?ze(c,7):li(c):N[0]!="noop"&&c.l&&c.l.ta(N),c.v=0)}}_t(4)}catch{}}var oc=class{constructor(i,o){this.g=i,this.map=o}};function ks(i){this.l=i||10,d.PerformanceNavigationTiming?(i=d.performance.getEntriesByType("navigation"),i=0<i.length&&(i[0].nextHopProtocol=="hq"||i[0].nextHopProtocol=="h2")):i=!!(d.chrome&&d.chrome.loadTimes&&d.chrome.loadTimes()&&d.chrome.loadTimes().wasFetchedViaSpdy),this.j=i?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Ps(i){return i.h?!0:i.g?i.g.size>=i.j:!1}function Rs(i){return i.h?1:i.g?i.g.size:0}function oi(i,o){return i.h?i.h==o:i.g?i.g.has(o):!1}function ai(i,o){i.g?i.g.add(o):i.h=o}function Ls(i,o){i.h&&i.h==o?i.h=null:i.g&&i.g.has(o)&&i.g.delete(o)}ks.prototype.cancel=function(){if(this.i=Os(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const i of this.g.values())i.cancel();this.g.clear()}};function Os(i){if(i.h!=null)return i.i.concat(i.h.D);if(i.g!=null&&i.g.size!==0){let o=i.i;for(const c of i.g.values())o=o.concat(c.D);return o}return L(i.i)}function ac(i){if(i.V&&typeof i.V=="function")return i.V();if(typeof Map<"u"&&i instanceof Map||typeof Set<"u"&&i instanceof Set)return Array.from(i.values());if(typeof i=="string")return i.split("");if(h(i)){for(var o=[],c=i.length,u=0;u<c;u++)o.push(i[u]);return o}o=[],c=0;for(u in i)o[c++]=i[u];return o}function cc(i){if(i.na&&typeof i.na=="function")return i.na();if(!i.V||typeof i.V!="function"){if(typeof Map<"u"&&i instanceof Map)return Array.from(i.keys());if(!(typeof Set<"u"&&i instanceof Set)){if(h(i)||typeof i=="string"){var o=[];i=i.length;for(var c=0;c<i;c++)o.push(c);return o}o=[],c=0;for(const u in i)o[c++]=u;return o}}}function xs(i,o){if(i.forEach&&typeof i.forEach=="function")i.forEach(o,void 0);else if(h(i)||typeof i=="string")Array.prototype.forEach.call(i,o,void 0);else for(var c=cc(i),u=ac(i),I=u.length,_=0;_<I;_++)o.call(void 0,u[_],c&&c[_],i)}var Ds=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function lc(i,o){if(i){i=i.split("&");for(var c=0;c<i.length;c++){var u=i[c].indexOf("="),I=null;if(0<=u){var _=i[c].substring(0,u);I=i[c].substring(u+1)}else _=i[c];o(_,I?decodeURIComponent(I.replace(/\+/g," ")):"")}}}function qe(i){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,i instanceof qe){this.h=i.h,tn(this,i.j),this.o=i.o,this.g=i.g,nn(this,i.s),this.l=i.l;var o=i.i,c=new kt;c.i=o.i,o.g&&(c.g=new Map(o.g),c.h=o.h),Ns(this,c),this.m=i.m}else i&&(o=String(i).match(Ds))?(this.h=!1,tn(this,o[1]||"",!0),this.o=Ct(o[2]||""),this.g=Ct(o[3]||"",!0),nn(this,o[4]),this.l=Ct(o[5]||"",!0),Ns(this,o[6]||"",!0),this.m=Ct(o[7]||"")):(this.h=!1,this.i=new kt(null,this.h))}qe.prototype.toString=function(){var i=[],o=this.j;o&&i.push(St(o,Ms,!0),":");var c=this.g;return(c||o=="file")&&(i.push("//"),(o=this.o)&&i.push(St(o,Ms,!0),"@"),i.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c=this.s,c!=null&&i.push(":",String(c))),(c=this.l)&&(this.g&&c.charAt(0)!="/"&&i.push("/"),i.push(St(c,c.charAt(0)=="/"?hc:dc,!0))),(c=this.i.toString())&&i.push("?",c),(c=this.m)&&i.push("#",St(c,pc)),i.join("")};function be(i){return new qe(i)}function tn(i,o,c){i.j=c?Ct(o,!0):o,i.j&&(i.j=i.j.replace(/:$/,""))}function nn(i,o){if(o){if(o=Number(o),isNaN(o)||0>o)throw Error("Bad port number "+o);i.s=o}else i.s=null}function Ns(i,o,c){o instanceof kt?(i.i=o,gc(i.i,i.h)):(c||(o=St(o,fc)),i.i=new kt(o,i.h))}function B(i,o,c){i.i.set(o,c)}function sn(i){return B(i,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),i}function Ct(i,o){return i?o?decodeURI(i.replace(/%25/g,"%2525")):decodeURIComponent(i):""}function St(i,o,c){return typeof i=="string"?(i=encodeURI(i).replace(o,uc),c&&(i=i.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),i):null}function uc(i){return i=i.charCodeAt(0),"%"+(i>>4&15).toString(16)+(i&15).toString(16)}var Ms=/[#\/\?@]/g,dc=/[#\?:]/g,hc=/[#\?]/g,fc=/[#\?@]/g,pc=/#/g;function kt(i,o){this.h=this.g=null,this.i=i||null,this.j=!!o}function Le(i){i.g||(i.g=new Map,i.h=0,i.i&&lc(i.i,function(o,c){i.add(decodeURIComponent(o.replace(/\+/g," ")),c)}))}t=kt.prototype,t.add=function(i,o){Le(this),this.i=null,i=nt(this,i);var c=this.g.get(i);return c||this.g.set(i,c=[]),c.push(o),this.h+=1,this};function Us(i,o){Le(i),o=nt(i,o),i.g.has(o)&&(i.i=null,i.h-=i.g.get(o).length,i.g.delete(o))}function Bs(i,o){return Le(i),o=nt(i,o),i.g.has(o)}t.forEach=function(i,o){Le(this),this.g.forEach(function(c,u){c.forEach(function(I){i.call(o,I,u,this)},this)},this)},t.na=function(){Le(this);const i=Array.from(this.g.values()),o=Array.from(this.g.keys()),c=[];for(let u=0;u<o.length;u++){const I=i[u];for(let _=0;_<I.length;_++)c.push(o[u])}return c},t.V=function(i){Le(this);let o=[];if(typeof i=="string")Bs(this,i)&&(o=o.concat(this.g.get(nt(this,i))));else{i=Array.from(this.g.values());for(let c=0;c<i.length;c++)o=o.concat(i[c])}return o},t.set=function(i,o){return Le(this),this.i=null,i=nt(this,i),Bs(this,i)&&(this.h-=this.g.get(i).length),this.g.set(i,[o]),this.h+=1,this},t.get=function(i,o){return i?(i=this.V(i),0<i.length?String(i[0]):o):o};function Fs(i,o,c){Us(i,o),0<c.length&&(i.i=null,i.g.set(nt(i,o),L(c)),i.h+=c.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const i=[],o=Array.from(this.g.keys());for(var c=0;c<o.length;c++){var u=o[c];const _=encodeURIComponent(String(u)),C=this.V(u);for(u=0;u<C.length;u++){var I=_;C[u]!==""&&(I+="="+encodeURIComponent(String(C[u]))),i.push(I)}}return this.i=i.join("&")};function nt(i,o){return o=String(o),i.j&&(o=o.toLowerCase()),o}function gc(i,o){o&&!i.j&&(Le(i),i.i=null,i.g.forEach(function(c,u){var I=u.toLowerCase();u!=I&&(Us(this,u),Fs(this,I,c))},i)),i.j=o}function mc(i,o){const c=new Et;if(d.Image){const u=new Image;u.onload=P(Oe,c,"TestLoadImage: loaded",!0,o,u),u.onerror=P(Oe,c,"TestLoadImage: error",!1,o,u),u.onabort=P(Oe,c,"TestLoadImage: abort",!1,o,u),u.ontimeout=P(Oe,c,"TestLoadImage: timeout",!1,o,u),d.setTimeout(function(){u.ontimeout&&u.ontimeout()},1e4),u.src=i}else o(!1)}function yc(i,o){const c=new Et,u=new AbortController,I=setTimeout(()=>{u.abort(),Oe(c,"TestPingServer: timeout",!1,o)},1e4);fetch(i,{signal:u.signal}).then(_=>{clearTimeout(I),_.ok?Oe(c,"TestPingServer: ok",!0,o):Oe(c,"TestPingServer: server error",!1,o)}).catch(()=>{clearTimeout(I),Oe(c,"TestPingServer: error",!1,o)})}function Oe(i,o,c,u,I){try{I&&(I.onload=null,I.onerror=null,I.onabort=null,I.ontimeout=null),u(c)}catch{}}function vc(){this.g=new Za}function wc(i,o,c){const u=c||"";try{xs(i,function(I,_){let C=I;w(I)&&(C=Jn(I)),o.push(u+_+"="+encodeURIComponent(C))})}catch(I){throw o.push(u+"type="+encodeURIComponent("_badmap")),I}}function rn(i){this.l=i.Ub||null,this.j=i.eb||!1}S(rn,Yn),rn.prototype.g=function(){return new on(this.l,this.j)},rn.prototype.i=function(i){return function(){return i}}({});function on(i,o){K.call(this),this.D=i,this.o=o,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}S(on,K),t=on.prototype,t.open=function(i,o){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=i,this.A=o,this.readyState=1,Rt(this)},t.send=function(i){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const o={headers:this.u,method:this.B,credentials:this.m,cache:void 0};i&&(o.body=i),(this.D||d).fetch(new Request(this.A,o)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Pt(this)),this.readyState=0},t.Sa=function(i){if(this.g&&(this.l=i,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=i.headers,this.readyState=2,Rt(this)),this.g&&(this.readyState=3,Rt(this),this.g)))if(this.responseType==="arraybuffer")i.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof d.ReadableStream<"u"&&"body"in i){if(this.j=i.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Hs(this)}else i.text().then(this.Ra.bind(this),this.ga.bind(this))};function Hs(i){i.j.read().then(i.Pa.bind(i)).catch(i.ga.bind(i))}t.Pa=function(i){if(this.g){if(this.o&&i.value)this.response.push(i.value);else if(!this.o){var o=i.value?i.value:new Uint8Array(0);(o=this.v.decode(o,{stream:!i.done}))&&(this.response=this.responseText+=o)}i.done?Pt(this):Rt(this),this.readyState==3&&Hs(this)}},t.Ra=function(i){this.g&&(this.response=this.responseText=i,Pt(this))},t.Qa=function(i){this.g&&(this.response=i,Pt(this))},t.ga=function(){this.g&&Pt(this)};function Pt(i){i.readyState=4,i.l=null,i.j=null,i.v=null,Rt(i)}t.setRequestHeader=function(i,o){this.u.append(i,o)},t.getResponseHeader=function(i){return this.h&&this.h.get(i.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const i=[],o=this.h.entries();for(var c=o.next();!c.done;)c=c.value,i.push(c[0]+": "+c[1]),c=o.next();return i.join(`\r
`)};function Rt(i){i.onreadystatechange&&i.onreadystatechange.call(i)}Object.defineProperty(on.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(i){this.m=i?"include":"same-origin"}});function js(i){let o="";return z(i,function(c,u){o+=u,o+=":",o+=c,o+=`\r
`}),o}function ci(i,o,c){e:{for(u in c){var u=!1;break e}u=!0}u||(c=js(c),typeof i=="string"?c!=null&&encodeURIComponent(String(c)):B(i,o,c))}function F(i){K.call(this),this.headers=new Map,this.o=i||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}S(F,K);var Ic=/^https?$/i,bc=["POST","PUT"];t=F.prototype,t.Ha=function(i){this.J=i},t.ea=function(i,o,c,u){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+i);o=o?o.toUpperCase():"GET",this.D=i,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():ti.g(),this.v=this.o?vs(this.o):vs(ti),this.g.onreadystatechange=T(this.Ea,this);try{this.B=!0,this.g.open(o,String(i),!0),this.B=!1}catch(_){$s(this,_);return}if(i=c||"",c=new Map(this.headers),u)if(Object.getPrototypeOf(u)===Object.prototype)for(var I in u)c.set(I,u[I]);else if(typeof u.keys=="function"&&typeof u.get=="function")for(const _ of u.keys())c.set(_,u.get(_));else throw Error("Unknown input type for opt_headers: "+String(u));u=Array.from(c.keys()).find(_=>_.toLowerCase()=="content-type"),I=d.FormData&&i instanceof d.FormData,!(0<=Array.prototype.indexOf.call(bc,o,void 0))||u||I||c.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[_,C]of c)this.g.setRequestHeader(_,C);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{zs(this),this.u=!0,this.g.send(i),this.u=!1}catch(_){$s(this,_)}};function $s(i,o){i.h=!1,i.g&&(i.j=!0,i.g.abort(),i.j=!1),i.l=o,i.m=5,Vs(i),an(i)}function Vs(i){i.A||(i.A=!0,Z(i,"complete"),Z(i,"error"))}t.abort=function(i){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=i||7,Z(this,"complete"),Z(this,"abort"),an(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),an(this,!0)),F.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?qs(this):this.bb())},t.bb=function(){qs(this)};function qs(i){if(i.h&&typeof l<"u"&&(!i.v[1]||_e(i)!=4||i.Z()!=2)){if(i.u&&_e(i)==4)ps(i.Ea,0,i);else if(Z(i,"readystatechange"),_e(i)==4){i.h=!1;try{const C=i.Z();e:switch(C){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var o=!0;break e;default:o=!1}var c;if(!(c=o)){var u;if(u=C===0){var I=String(i.D).match(Ds)[1]||null;!I&&d.self&&d.self.location&&(I=d.self.location.protocol.slice(0,-1)),u=!Ic.test(I?I.toLowerCase():"")}c=u}if(c)Z(i,"complete"),Z(i,"success");else{i.m=6;try{var _=2<_e(i)?i.g.statusText:""}catch{_=""}i.l=_+" ["+i.Z()+"]",Vs(i)}}finally{an(i)}}}}function an(i,o){if(i.g){zs(i);const c=i.g,u=i.v[0]?()=>{}:null;i.g=null,i.v=null,o||Z(i,"ready");try{c.onreadystatechange=u}catch{}}}function zs(i){i.I&&(d.clearTimeout(i.I),i.I=null)}t.isActive=function(){return!!this.g};function _e(i){return i.g?i.g.readyState:0}t.Z=function(){try{return 2<_e(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(i){if(this.g){var o=this.g.responseText;return i&&o.indexOf(i)==0&&(o=o.substring(i.length)),Xa(o)}};function Ws(i){try{if(!i.g)return null;if("response"in i.g)return i.g.response;switch(i.H){case"":case"text":return i.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in i.g)return i.g.mozResponseArrayBuffer}return null}catch{return null}}function _c(i){const o={};i=(i.g&&2<=_e(i)&&i.g.getAllResponseHeaders()||"").split(`\r
`);for(let u=0;u<i.length;u++){if(O(i[u]))continue;var c=y(i[u]);const I=c[0];if(c=c[1],typeof c!="string")continue;c=c.trim();const _=o[I]||[];o[I]=_,_.push(c)}v(o,function(u){return u.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Lt(i,o,c){return c&&c.internalChannelParams&&c.internalChannelParams[i]||o}function Gs(i){this.Aa=0,this.i=[],this.j=new Et,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Lt("failFast",!1,i),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Lt("baseRetryDelayMs",5e3,i),this.cb=Lt("retryDelaySeedMs",1e4,i),this.Wa=Lt("forwardChannelMaxRetries",2,i),this.wa=Lt("forwardChannelRequestTimeoutMs",2e4,i),this.pa=i&&i.xmlHttpFactory||void 0,this.Xa=i&&i.Tb||void 0,this.Ca=i&&i.useFetchStreams||!1,this.L=void 0,this.J=i&&i.supportsCrossDomainXhr||!1,this.K="",this.h=new ks(i&&i.concurrentRequestLimit),this.Da=new vc,this.P=i&&i.fastHandshake||!1,this.O=i&&i.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=i&&i.Rb||!1,i&&i.xa&&this.j.xa(),i&&i.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&i&&i.detectBufferingProxy||!1,this.ja=void 0,i&&i.longPollingTimeout&&0<i.longPollingTimeout&&(this.ja=i.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Gs.prototype,t.la=8,t.G=1,t.connect=function(i,o,c,u){Q(0),this.W=i,this.H=o||{},c&&u!==void 0&&(this.H.OSID=c,this.H.OAID=u),this.F=this.X,this.I=nr(this,null,this.W),ln(this)};function li(i){if(Ks(i),i.G==3){var o=i.U++,c=be(i.I);if(B(c,"SID",i.K),B(c,"RID",o),B(c,"TYPE","terminate"),Ot(i,c),o=new Re(i,i.j,o),o.L=2,o.v=sn(be(c)),c=!1,d.navigator&&d.navigator.sendBeacon)try{c=d.navigator.sendBeacon(o.v.toString(),"")}catch{}!c&&d.Image&&(new Image().src=o.v,c=!0),c||(o.g=ir(o.j,null),o.g.ea(o.v)),o.F=Date.now(),en(o)}tr(i)}function cn(i){i.g&&(di(i),i.g.cancel(),i.g=null)}function Ks(i){cn(i),i.u&&(d.clearTimeout(i.u),i.u=null),un(i),i.h.cancel(),i.s&&(typeof i.s=="number"&&d.clearTimeout(i.s),i.s=null)}function ln(i){if(!Ps(i.h)&&!i.s){i.s=!0;var o=i.Ga;yt||ls(),vt||(yt(),vt=!0),jn.add(o,i),i.B=0}}function Tc(i,o){return Rs(i.h)>=i.h.j-(i.s?1:0)?!1:i.s?(i.i=o.D.concat(i.i),!0):i.G==1||i.G==2||i.B>=(i.Va?0:i.Wa)?!1:(i.s=Tt(T(i.Ga,i,o),er(i,i.B)),i.B++,!0)}t.Ga=function(i){if(this.s)if(this.s=null,this.G==1){if(!i){this.U=Math.floor(1e5*Math.random()),i=this.U++;const I=new Re(this,this.j,i);let _=this.o;if(this.S&&(_?(_=f(_),m(_,this.S)):_=this.S),this.m!==null||this.O||(I.H=_,_=null),this.P)e:{for(var o=0,c=0;c<this.i.length;c++){t:{var u=this.i[c];if("__data__"in u.map&&(u=u.map.__data__,typeof u=="string")){u=u.length;break t}u=void 0}if(u===void 0)break;if(o+=u,4096<o){o=c;break e}if(o===4096||c===this.i.length-1){o=c+1;break e}}o=1e3}else o=1e3;o=Ys(this,I,o),c=be(this.I),B(c,"RID",i),B(c,"CVER",22),this.D&&B(c,"X-HTTP-Session-Id",this.D),Ot(this,c),_&&(this.O?o="headers="+encodeURIComponent(String(js(_)))+"&"+o:this.m&&ci(c,this.m,_)),ai(this.h,I),this.Ua&&B(c,"TYPE","init"),this.P?(B(c,"$req",o),B(c,"SID","null"),I.T=!0,ii(I,c,null)):ii(I,c,o),this.G=2}}else this.G==3&&(i?Js(this,i):this.i.length==0||Ps(this.h)||Js(this))};function Js(i,o){var c;o?c=o.l:c=i.U++;const u=be(i.I);B(u,"SID",i.K),B(u,"RID",c),B(u,"AID",i.T),Ot(i,u),i.m&&i.o&&ci(u,i.m,i.o),c=new Re(i,i.j,c,i.B+1),i.m===null&&(c.H=i.o),o&&(i.i=o.D.concat(i.i)),o=Ys(i,c,1e3),c.I=Math.round(.5*i.wa)+Math.round(.5*i.wa*Math.random()),ai(i.h,c),ii(c,u,o)}function Ot(i,o){i.H&&z(i.H,function(c,u){B(o,u,c)}),i.l&&xs({},function(c,u){B(o,u,c)})}function Ys(i,o,c){c=Math.min(i.i.length,c);var u=i.l?T(i.l.Na,i.l,i):null;e:{var I=i.i;let _=-1;for(;;){const C=["count="+c];_==-1?0<c?(_=I[0].g,C.push("ofs="+_)):_=0:C.push("ofs="+_);let U=!0;for(let W=0;W<c;W++){let N=I[W].g;const J=I[W].map;if(N-=_,0>N)_=Math.max(0,I[W].g-100),U=!1;else try{wc(J,C,"req"+N+"_")}catch{u&&u(J)}}if(U){u=C.join("&");break e}}}return i=i.i.splice(0,c),o.D=i,u}function Xs(i){if(!i.g&&!i.u){i.Y=1;var o=i.Fa;yt||ls(),vt||(yt(),vt=!0),jn.add(o,i),i.v=0}}function ui(i){return i.g||i.u||3<=i.v?!1:(i.Y++,i.u=Tt(T(i.Fa,i),er(i,i.v)),i.v++,!0)}t.Fa=function(){if(this.u=null,Zs(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var i=2*this.R;this.j.info("BP detection timer enabled: "+i),this.A=Tt(T(this.ab,this),i)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Q(10),cn(this),Zs(this))};function di(i){i.A!=null&&(d.clearTimeout(i.A),i.A=null)}function Zs(i){i.g=new Re(i,i.j,"rpc",i.Y),i.m===null&&(i.g.H=i.o),i.g.O=0;var o=be(i.qa);B(o,"RID","rpc"),B(o,"SID",i.K),B(o,"AID",i.T),B(o,"CI",i.F?"0":"1"),!i.F&&i.ja&&B(o,"TO",i.ja),B(o,"TYPE","xmlhttp"),Ot(i,o),i.m&&i.o&&ci(o,i.m,i.o),i.L&&(i.g.I=i.L);var c=i.g;i=i.ia,c.L=1,c.v=sn(be(o)),c.m=null,c.P=!0,As(c,i)}t.Za=function(){this.C!=null&&(this.C=null,cn(this),ui(this),Q(19))};function un(i){i.C!=null&&(d.clearTimeout(i.C),i.C=null)}function Qs(i,o){var c=null;if(i.g==o){un(i),di(i),i.g=null;var u=2}else if(oi(i.h,o))c=o.D,Ls(i.h,o),u=1;else return;if(i.G!=0){if(o.o)if(u==1){c=o.m?o.m.length:0,o=Date.now()-o.F;var I=i.B;u=Qn(),Z(u,new _s(u,c)),ln(i)}else Xs(i);else if(I=o.s,I==3||I==0&&0<o.X||!(u==1&&Tc(i,o)||u==2&&ui(i)))switch(c&&0<c.length&&(o=i.h,o.i=o.i.concat(c)),I){case 1:ze(i,5);break;case 4:ze(i,10);break;case 3:ze(i,6);break;default:ze(i,2)}}}function er(i,o){let c=i.Ta+Math.floor(Math.random()*i.cb);return i.isActive()||(c*=2),c*o}function ze(i,o){if(i.j.info("Error code "+o),o==2){var c=T(i.fb,i),u=i.Xa;const I=!u;u=new qe(u||"//www.google.com/images/cleardot.gif"),d.location&&d.location.protocol=="http"||tn(u,"https"),sn(u),I?mc(u.toString(),c):yc(u.toString(),c)}else Q(2);i.G=0,i.l&&i.l.sa(o),tr(i),Ks(i)}t.fb=function(i){i?(this.j.info("Successfully pinged google.com"),Q(2)):(this.j.info("Failed to ping google.com"),Q(1))};function tr(i){if(i.G=0,i.ka=[],i.l){const o=Os(i.h);(o.length!=0||i.i.length!=0)&&(k(i.ka,o),k(i.ka,i.i),i.h.i.length=0,L(i.i),i.i.length=0),i.l.ra()}}function nr(i,o,c){var u=c instanceof qe?be(c):new qe(c);if(u.g!="")o&&(u.g=o+"."+u.g),nn(u,u.s);else{var I=d.location;u=I.protocol,o=o?o+"."+I.hostname:I.hostname,I=+I.port;var _=new qe(null);u&&tn(_,u),o&&(_.g=o),I&&nn(_,I),c&&(_.l=c),u=_}return c=i.D,o=i.ya,c&&o&&B(u,c,o),B(u,"VER",i.la),Ot(i,u),u}function ir(i,o,c){if(o&&!i.J)throw Error("Can't create secondary domain capable XhrIo object.");return o=i.Ca&&!i.pa?new F(new rn({eb:c})):new F(i.pa),o.Ha(i.J),o}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function sr(){}t=sr.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function oe(i,o){K.call(this),this.g=new Gs(o),this.l=i,this.h=o&&o.messageUrlParams||null,i=o&&o.messageHeaders||null,o&&o.clientProtocolHeaderRequired&&(i?i["X-Client-Protocol"]="webchannel":i={"X-Client-Protocol":"webchannel"}),this.g.o=i,i=o&&o.initMessageHeaders||null,o&&o.messageContentType&&(i?i["X-WebChannel-Content-Type"]=o.messageContentType:i={"X-WebChannel-Content-Type":o.messageContentType}),o&&o.va&&(i?i["X-WebChannel-Client-Profile"]=o.va:i={"X-WebChannel-Client-Profile":o.va}),this.g.S=i,(i=o&&o.Sb)&&!O(i)&&(this.g.m=i),this.v=o&&o.supportsCrossDomainXhr||!1,this.u=o&&o.sendRawJson||!1,(o=o&&o.httpSessionIdParam)&&!O(o)&&(this.g.D=o,i=this.h,i!==null&&o in i&&(i=this.h,o in i&&delete i[o])),this.j=new it(this)}S(oe,K),oe.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},oe.prototype.close=function(){li(this.g)},oe.prototype.o=function(i){var o=this.g;if(typeof i=="string"){var c={};c.__data__=i,i=c}else this.u&&(c={},c.__data__=Jn(i),i=c);o.i.push(new oc(o.Ya++,i)),o.G==3&&ln(o)},oe.prototype.N=function(){this.g.l=null,delete this.j,li(this.g),delete this.g,oe.aa.N.call(this)};function rr(i){Xn.call(this),i.__headers__&&(this.headers=i.__headers__,this.statusCode=i.__status__,delete i.__headers__,delete i.__status__);var o=i.__sm__;if(o){e:{for(const c in o){i=c;break e}i=void 0}(this.i=i)&&(i=this.i,o=o!==null&&i in o?o[i]:void 0),this.data=o}else this.data=i}S(rr,Xn);function or(){Zn.call(this),this.status=1}S(or,Zn);function it(i){this.g=i}S(it,sr),it.prototype.ua=function(){Z(this.g,"a")},it.prototype.ta=function(i){Z(this.g,new rr(i))},it.prototype.sa=function(i){Z(this.g,new or)},it.prototype.ra=function(){Z(this.g,"b")},oe.prototype.send=oe.prototype.o,oe.prototype.open=oe.prototype.m,oe.prototype.close=oe.prototype.close,ei.NO_ERROR=0,ei.TIMEOUT=8,ei.HTTP_ERROR=6,sc.COMPLETE="complete",Qa.EventType=bt,bt.OPEN="a",bt.CLOSE="b",bt.ERROR="c",bt.MESSAGE="d",K.prototype.listen=K.prototype.K,F.prototype.listenOnce=F.prototype.L,F.prototype.getLastError=F.prototype.Ka,F.prototype.getLastErrorCode=F.prototype.Ba,F.prototype.getStatus=F.prototype.Z,F.prototype.getResponseJson=F.prototype.Oa,F.prototype.getResponseText=F.prototype.oa,F.prototype.send=F.prototype.ea,F.prototype.setWithCredentials=F.prototype.Ha}).apply(typeof fn<"u"?fn:typeof self<"u"?self:typeof window<"u"?window:{});const Gr="@firebase/firestore",Kr="4.7.16";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ee{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ee.UNAUTHENTICATED=new ee(null),ee.GOOGLE_CREDENTIALS=new ee("google-credentials-uid"),ee.FIRST_PARTY=new ee("first-party-uid"),ee.MOCK_USER=new ee("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Kt="11.8.1";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ht=new Dn("@firebase/firestore");function de(t,...e){if(ht.logLevel<=M.DEBUG){const n=e.map(ss);ht.debug(`Firestore (${Kt}): ${t}`,...n)}}function La(t,...e){if(ht.logLevel<=M.ERROR){const n=e.map(ss);ht.error(`Firestore (${Kt}): ${t}`,...n)}}function Jf(t,...e){if(ht.logLevel<=M.WARN){const n=e.map(ss);ht.warn(`Firestore (${Kt}): ${t}`,...n)}}function ss(t){if(typeof t=="string")return t;try{/**
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
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oa(t,e,n){let s="Unexpected state";typeof e=="string"?s=e:n=e,xa(t,s,n)}function xa(t,e,n){let s=`FIRESTORE (${Kt}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{s+=" CONTEXT: "+JSON.stringify(n)}catch{s+=" CONTEXT: "+n}throw La(s),new Error(s)}function Ft(t,e,n,s){let r="Unexpected state";typeof n=="string"?r=n:s=n,t||xa(e,r,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V={CANCELLED:"cancelled",INVALID_ARGUMENT:"invalid-argument",FAILED_PRECONDITION:"failed-precondition"};class q extends pe{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ht{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Da{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Yf{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(ee.UNAUTHENTICATED))}shutdown(){}}class Xf{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class Zf{constructor(e){this.t=e,this.currentUser=ee.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Ft(this.o===void 0,42304);let s=this.i;const r=h=>this.i!==s?(s=this.i,n(h)):Promise.resolve();let a=new Ht;this.o=()=>{this.i++,this.currentUser=this.u(),a.resolve(),a=new Ht,e.enqueueRetryable(()=>r(this.currentUser))};const l=()=>{const h=a;e.enqueueRetryable(async()=>{await h.promise,await r(this.currentUser)})},d=h=>{de("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=h,this.o&&(this.auth.addAuthTokenListener(this.o),l())};this.t.onInit(h=>d(h)),setTimeout(()=>{if(!this.auth){const h=this.t.getImmediate({optional:!0});h?d(h):(de("FirebaseAuthCredentialsProvider","Auth not yet detected"),a.resolve(),a=new Ht)}},0),l()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(de("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(Ft(typeof s.accessToken=="string",31837,{l:s}),new Da(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Ft(e===null||typeof e=="string",2055,{h:e}),new ee(e)}}class Qf{constructor(e,n,s){this.P=e,this.T=n,this.I=s,this.type="FirstParty",this.user=ee.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class ep{constructor(e,n,s){this.P=e,this.T=n,this.I=s}getToken(){return Promise.resolve(new Qf(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(ee.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Jr{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class tp{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,se(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){Ft(this.o===void 0,3512);const s=a=>{a.error!=null&&de("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${a.error.message}`);const l=a.token!==this.m;return this.m=a.token,de("FirebaseAppCheckTokenProvider",`Received ${l?"new":"existing"} token.`),l?n(a.token):Promise.resolve()};this.o=a=>{e.enqueueRetryable(()=>s(a))};const r=a=>{de("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=a,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(a=>r(a)),setTimeout(()=>{if(!this.appCheck){const a=this.V.getImmediate({optional:!0});a?r(a):de("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new Jr(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Ft(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new Jr(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}function Yr(t,e){return t<e?-1:t>e?1:0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xr=-62135596800,Zr=1e6;class jt{static now(){return jt.fromMillis(Date.now())}static fromDate(e){return jt.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor((e-1e3*n)*Zr);return new jt(n,s)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new q(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new q(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<Xr)throw new q(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new q(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Zr}_compareTo(e){return this.seconds===e.seconds?Yr(this.nanoseconds,e.nanoseconds):Yr(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds-Xr;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}function np(t){return t.name==="IndexedDbTransactionError"}const Ui="(default)";class Rn{constructor(e,n){this.projectId=e,this.database=n||Ui}static empty(){return new Rn("","")}get isDefaultDatabase(){return this.database===Ui}isEqual(e){return e instanceof Rn&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Qr,D;(D=Qr||(Qr={}))[D.OK=0]="OK",D[D.CANCELLED=1]="CANCELLED",D[D.UNKNOWN=2]="UNKNOWN",D[D.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",D[D.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",D[D.NOT_FOUND=5]="NOT_FOUND",D[D.ALREADY_EXISTS=6]="ALREADY_EXISTS",D[D.PERMISSION_DENIED=7]="PERMISSION_DENIED",D[D.UNAUTHENTICATED=16]="UNAUTHENTICATED",D[D.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",D[D.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",D[D.ABORTED=10]="ABORTED",D[D.OUT_OF_RANGE=11]="OUT_OF_RANGE",D[D.UNIMPLEMENTED=12]="UNIMPLEMENTED",D[D.INTERNAL=13]="INTERNAL",D[D.UNAVAILABLE=14]="UNAVAILABLE",D[D.DATA_LOSS=15]="DATA_LOSS";/**
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
 */new Ra([4294967295,4294967295],0);/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ip=41943040;/**
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
 */const sp=1048576;function Ti(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rp{constructor(e,n,s=1e3,r=1.5,a=6e4){this.xi=e,this.timerId=n,this.I_=s,this.E_=r,this.d_=a,this.A_=0,this.R_=null,this.V_=Date.now(),this.reset()}reset(){this.A_=0}m_(){this.A_=this.d_}f_(e){this.cancel();const n=Math.floor(this.A_+this.g_()),s=Math.max(0,Date.now()-this.V_),r=Math.max(0,n-s);r>0&&de("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.A_} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.R_=this.xi.enqueueAfterDelay(this.timerId,r,()=>(this.V_=Date.now(),e())),this.A_*=this.E_,this.A_<this.I_&&(this.A_=this.I_),this.A_>this.d_&&(this.A_=this.d_)}p_(){this.R_!==null&&(this.R_.skipDelay(),this.R_=null)}cancel(){this.R_!==null&&(this.R_.cancel(),this.R_=null)}g_(){return(Math.random()-.5)*this.A_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rs{constructor(e,n,s,r,a){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=r,this.removalCallback=a,this.deferred=new Ht,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(l=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,s,r,a){const l=Date.now()+s,d=new rs(e,n,l,r,a);return d.start(s),d}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new q(V.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}var eo,to;(to=eo||(eo={})).Ca="default",to.Cache="cache";/**
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
 */function op(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const no=new Map;function ap(t,e,n,s){if(e===!0&&s===!0)throw new q(V.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function cp(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(s){return s.constructor?s.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Oa(12329,{type:typeof t})}function lp(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new q(V.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=cp(t);throw new q(V.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */const Na="firestore.googleapis.com",io=!0;class so{constructor(e){var n,s;if(e.host===void 0){if(e.ssl!==void 0)throw new q(V.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Na,this.ssl=io}else this.host=e.host,this.ssl=(n=e.ssl)!==null&&n!==void 0?n:io;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=ip;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<sp)throw new q(V.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}ap("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=op((s=e.experimentalLongPollingOptions)!==null&&s!==void 0?s:{}),function(a){if(a.timeoutSeconds!==void 0){if(isNaN(a.timeoutSeconds))throw new q(V.INVALID_ARGUMENT,`invalid long polling timeout: ${a.timeoutSeconds} (must not be NaN)`);if(a.timeoutSeconds<5)throw new q(V.INVALID_ARGUMENT,`invalid long polling timeout: ${a.timeoutSeconds} (minimum allowed value is 5)`);if(a.timeoutSeconds>30)throw new q(V.INVALID_ARGUMENT,`invalid long polling timeout: ${a.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(s,r){return s.timeoutSeconds===r.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Ma{constructor(e,n,s,r){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new so({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new q(V.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new q(V.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new so(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(s){if(!s)return new Yf;switch(s.type){case"firstParty":return new ep(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new q(V.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const s=no.get(n);s&&(de("ComponentProvider","Removing Datastore"),no.delete(n),s.terminate())}(this),Promise.resolve()}}function up(t,e,n,s={}){var r;t=lp(t,Ma);const a=xn(e),l=t._getSettings(),d=Object.assign(Object.assign({},l),{emulatorOptions:t._getEmulatorOptions()}),h=`${e}:${n}`;a&&(yo(`https://${h}`),vo("Firestore",!0)),l.host!==Na&&l.host!==h&&Jf("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const w=Object.assign(Object.assign({},l),{host:h,ssl:a,emulatorOptions:s});if(!He(w,d)&&(t._setSettings(w),s.mockUserToken)){let A,E;if(typeof s.mockUserToken=="string")A=s.mockUserToken,E=ee.MOCK_USER;else{A=Mc(s.mockUserToken,(r=t._app)===null||r===void 0?void 0:r.options.projectId);const T=s.mockUserToken.sub||s.mockUserToken.user_id;if(!T)throw new q(V.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");E=new ee(T)}t._authCredentials=new Xf(new Da(A,E))}}/**
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
 */const ro="AsyncQueue";class oo{constructor(e=Promise.resolve()){this.zu=[],this.ju=!1,this.Hu=[],this.Ju=null,this.Yu=!1,this.Zu=!1,this.Xu=[],this.C_=new rp(this,"async_queue_retry"),this.ec=()=>{const s=Ti();s&&de(ro,"Visibility state changed to "+s.visibilityState),this.C_.p_()},this.tc=e;const n=Ti();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.ec)}get isShuttingDown(){return this.ju}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.nc(),this.rc(e)}enterRestrictedMode(e){if(!this.ju){this.ju=!0,this.Zu=e||!1;const n=Ti();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.ec)}}enqueue(e){if(this.nc(),this.ju)return new Promise(()=>{});const n=new Ht;return this.rc(()=>this.ju&&this.Zu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.zu.push(e),this.sc()))}async sc(){if(this.zu.length!==0){try{await this.zu[0](),this.zu.shift(),this.C_.reset()}catch(e){if(!np(e))throw e;de(ro,"Operation failed with retryable error: "+e)}this.zu.length>0&&this.C_.f_(()=>this.sc())}}rc(e){const n=this.tc.then(()=>(this.Yu=!0,e().catch(s=>{throw this.Ju=s,this.Yu=!1,La("INTERNAL UNHANDLED ERROR: ",ao(s)),s}).then(s=>(this.Yu=!1,s))));return this.tc=n,n}enqueueAfterDelay(e,n,s){this.nc(),this.Xu.indexOf(e)>-1&&(n=0);const r=rs.createAndSchedule(this,e,n,s,a=>this.oc(a));return this.Hu.push(r),r}nc(){this.Ju&&Oa(47125,{_c:ao(this.Ju)})}verifyOperationInProgress(){}async ac(){let e;do e=this.tc,await e;while(e!==this.tc)}uc(e){for(const n of this.Hu)if(n.timerId===e)return!0;return!1}cc(e){return this.ac().then(()=>{this.Hu.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.Hu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.ac()})}lc(e){this.Xu.push(e)}oc(e){const n=this.Hu.indexOf(e);this.Hu.splice(n,1)}}function ao(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}class dp extends Ma{constructor(e,n,s,r){super(e,n,s,r),this.type="firestore",this._queue=new oo,this._persistenceKey=(r==null?void 0:r.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new oo(e),this._firestoreClient=void 0,await e}}}function hp(t,e){const n=typeof t=="object"?t:Vi(),s=typeof t=="string"?t:Ui,r=Qe(n,"firestore").getImmediate({identifier:s});if(!r._initialized){const a=Dc("firestore");a&&up(r,...a)}return r}(function(e,n=!0){(function(r){Kt=r})(ft),we(new he("firestore",(s,{instanceIdentifier:r,options:a})=>{const l=s.getProvider("app").getImmediate(),d=new dp(new Zf(s.getProvider("auth-internal")),new tp(l,s.getProvider("app-check-internal")),function(w,A){if(!Object.prototype.hasOwnProperty.apply(w.options,["projectId"]))throw new q(V.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Rn(w.options.projectId,A)}(l,r),l);return a=Object.assign({useFetchStreams:n},a),d._setSettings(a),d},"PUBLIC").setMultipleInstances(!0)),ae(Gr,Kr,e),ae(Gr,Kr,"esm2017")})();const fp={apiKey:"AIzaSyCOrGrejZ1wWDnmUjGF62pYHYddJ4DGUXE",authDomain:"ethicalbadgeapp.firebaseapp.com",projectId:"ethicalbadgeapp",storageBucket:"ethicalbadgeapp.firebasestorage.app",messagingSenderId:"73453178206",appId:"1:73453178206:web:c5e32acdf519899cb493cf",measurementId:"G-04NG6ESJNV"},os=Ao(fp);Ad(os);const Bi=Gf(os),Ua=hp(os),Ba="1:73453178206:web:c5e32acdf519899cb493cf";let H={name:"Officer",email:null,uid:null,tcolePID:"123456",currentUnit:{start:"Sept 1, 2023",end:"Aug 31, 2025",requiredHours:40},completedHours:0,manuallyLoggedTrainings:[]};function ve(){return{...H}}function Ln(t){H={...H,...t}}async function pp(t,e){if(!e){console.warn("loadUserDataFromFirestore: No userId provided.");return}const n=lo(t,`artifacts/${Ba}/users/${e}/profile`,"data");try{const s=await Ac(n);if(s.exists()){const r=s.data();H.name=r.name||H.name,H.email=r.email||H.email,H.tcolePID=r.tcolePID||H.tcolePID,H.manuallyLoggedTrainings=r.manuallyLoggedTrainings||[],H.currentUnit=r.currentUnit||H.currentUnit,H.completedHours=0,H.manuallyLoggedTrainings.forEach(a=>{typeof a.hours=="number"&&(H.completedHours+=a.hours)}),console.log("User data loaded from Firestore into officerDataStore:",H)}else console.log("No user profile data found in Firestore for UID:",e,". Using defaults or creating new.")}catch(s){console.error("Error loading user data from Firestore:",s)}}async function gp(t,e,n){if(!e){console.warn("saveUserDataToFirestore: No userId provided.");return}const s=lo(t,`artifacts/${Ba}/users/${e}/profile`,"data");try{await Ec(s,n,{merge:!0}),console.log("User data saved to Firestore for UID:",e),H={...H,...n},n.manuallyLoggedTrainings&&(H.completedHours=0,H.manuallyLoggedTrainings.forEach(r=>{typeof r.hours=="number"&&(H.completedHours+=r.hours)}))}catch(r){console.error("Error saving user data to Firestore:",r)}}function X(t){return t.replace(/[&<>'"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"})[e])}function mp(t){const e=document.getElementById(t);e&&(e.classList.remove("modal-inactive"),e.classList.add("modal-active"))}function pn(t){const e=document.getElementById(t);e&&(e.classList.remove("modal-active"),e.classList.add("modal-inactive"))}function as(t){if(!t)return;t.disabled=!0;let e=t.querySelector(".loading-spinner");e||(e=document.createElement("span"),e.className="loading-spinner ml-2",e.innerHTML='<svg class="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path></svg>',t.appendChild(e)),e.style.display="inline-block"}function cs(t){if(!t)return;t.disabled=!1;const e=t.querySelector(".loading-spinner");e&&(e.style.display="none")}function Hn(){document.querySelectorAll(".expandable-card").forEach(t=>{const e=t.querySelector("button"),n=t.querySelector(".expandable-content");e&&n&&e.addEventListener("click",()=>{const s=e.getAttribute("aria-expanded")==="true";e.setAttribute("aria-expanded",!s),n.classList.toggle("card-collapsed"),n.classList.toggle("card-expanded")})})}let Ei=null;function yp(t,e,n,s,r){const a=document.getElementById("officerNamePlaceholder"),l=document.getElementById("tcoleUnitDates"),d=document.getElementById("completedHours"),h=document.getElementById("requiredHours"),w=document.getElementById("legalUpdatesFeed"),A=document.getElementById("dilemmaOfTheWeekText"),E=document.getElementById("dilemmaOptions"),T=document.getElementById("analyzeDilemmaButton"),P=document.getElementById("dilemmaAiAnalysisContainer"),S=document.getElementById("dilemmaAiAnalysisContent");document.getElementById("dilemmaAiLoading");const L=document.getElementById("tcoleProgressChart");a&&(a.textContent=X(t.name)),l&&(l.textContent=`${X(t.currentUnit.start)} - ${X(t.currentUnit.end)}`),vp(t,L,d,h),w&&(w.innerHTML="",e.slice(0,4).forEach(k=>{const $=`
                <div class="p-3.5 bg-white rounded-lg shadow border border-slate-200 hover:shadow-lg transition-shadow duration-200 cursor-pointer" role="article" tabindex="0" aria-labelledby="update-title-${k.date.replace(/\s+/g,"-")}" 
                     onclick="window.openUpdateModal(this)" 
                     data-fulltext="${X(k.fullText||k.summary)}" 
                     data-title="${X(k.title)}">
                    <span class="text-xs font-semibold ${k.category==="Legislation"?"text-green-700 bg-green-100":k.category==="AG Opinion"?"text-purple-700 bg-purple-100":k.category==="Case Law"?"text-red-700 bg-red-100":"text-sky-700 bg-sky-100"} px-2 py-0.5 rounded-full">${X(k.category)}</span>
                    <h4 id="update-title-${k.date.replace(/\s+/g,"-")}" class="font-medium text-slate-800 text-sm mt-1.5 mb-0.5">${X(k.title)}</h4>
                    <p class="text-xs text-slate-500 mb-1">${X(k.date)}</p>
                    <p class="text-xs text-slate-600 leading-relaxed">${X(k.summary.substring(0,120))}...</p>
                </div>`;w.innerHTML+=$})),A&&(A.textContent=n.text),E&&(E.innerHTML="",n.options.forEach(k=>{E.innerHTML+=`<li class="pb-0.5">${X(k)}</li>`})),T&&T.addEventListener("click",async()=>{as(T),S&&(S.innerHTML=""),P&&P.classList.remove("hidden");const k=`You are an AI assistant for Texas Law Enforcement Officers. Analyze the following ethical dilemma and provide concise discussion points, key ethical considerations, potential frameworks or questions an officer might ask themselves, and broader implications of choices. Dilemma: "${n.text}" Options provided were: ${n.options.join(", ")}. Focus on practical advice and Texas context where applicable. Format your response with clear headings for each section (e.g., Key Ethical Principles, Potential Considerations, Broader Implications). Use bullet points for lists.`,$=await s(k);S&&(S.innerHTML=$),cs(T)})}function vp(t,e,n,s){if(!e||!n||!s)return;const r=t.completedHours||0,a=t.currentUnit.requiredHours||40;n.textContent=r,s.textContent=a,Ei&&Ei.destroy(),Ei=new Chart(e.getContext("2d"),{type:"doughnut",data:{labels:["Completed Hours","Remaining Hours"],datasets:[{label:"TCOLE Hours",data:[r,Math.max(0,a-r)],backgroundColor:["#2563eb","#e5e7eb"],borderColor:["#ffffff","#ffffff"],borderWidth:3,hoverOffset:4}]},options:{responsive:!0,maintainAspectRatio:!1,cutout:"75%",plugins:{legend:{display:!1},tooltip:{enabled:!0,callbacks:{label:function(l){return`${l.label}: ${l.raw} hours`}}}}}})}let Fa=[];function wp(t,e,n,s){const r=document.getElementById("tcoleHubUnitDates"),a=document.getElementById("tcoleHubRequiredHours"),l=document.getElementById("logTcoleTrainingButton"),d=document.getElementById("tcoleCourseName"),h=document.getElementById("tcoleCourseHours");Fa=JSON.parse(JSON.stringify(e)),r&&(r.textContent=`${s(t.currentUnit.start)} - ${s(t.currentUnit.end)}`),a&&(a.textContent=t.currentUnit.requiredHours),Fi(t),Hi(t,n,s),l&&d&&h&&l.addEventListener("click",async()=>{const w=d.value.trim(),A=parseInt(h.value.trim());if(w&&!isNaN(A)&&A>0){const E={id:`custom-${Date.now()}`,name:w,hours:A,dateLogged:new Date().toISOString()},T=ve(),P=[...T.manuallyLoggedTrainings,E],S=T.completedHours+A;Ln({manuallyLoggedTrainings:P,completedHours:S}),await n(E),Fi(ve()),Hi(ve(),n,s),d.value="",h.value="";const L=document.createElement("p");L.textContent="Training logged successfully!",L.className="text-green-600 text-xs mt-2",l.insertAdjacentElement("afterend",L),setTimeout(()=>L.remove(),3e3)}else alert("Please enter a valid course name and hours.")})}function Fi(t){const e=document.getElementById("tcoleHubLoggedHours"),n=document.getElementById("tcoleHubProgressBar"),s=document.getElementById("completedHours"),r=document.getElementById("tcoleProgressChart"),a=t.completedHours||0,l=t.currentUnit.requiredHours||40;if(e&&(e.textContent=a),n){const d=l>0?a/l*100:0,h=Math.min(100,Math.round(d));n.style.width=`${h}%`,n.textContent=`${h}%`,n.setAttribute("aria-valuenow",String(h))}if(s&&(s.textContent=a),document.getElementById("requiredHours")&&(document.getElementById("requiredHours").textContent=l),r){let d=Chart.getChart("tcoleProgressChart");d&&d.destroy(),new Chart(r.getContext("2d"),{type:"doughnut",data:{labels:["Completed Hours","Remaining Hours"],datasets:[{label:"TCOLE Hours",data:[a,Math.max(0,l-a)],backgroundColor:["#2563eb","#e5e7eb"],borderColor:["#ffffff","#ffffff"],borderWidth:3,hoverOffset:4}]},options:{responsive:!0,maintainAspectRatio:!1,cutout:"75%",plugins:{legend:{display:!1},tooltip:{enabled:!0,callbacks:{label:h=>`${h.label}: ${h.raw} hours`}}}}})}}function Hi(t,e,n){const s=document.getElementById("tcoleMandatesList");s&&(s.innerHTML="",Fa.forEach(r=>{const a=t.manuallyLoggedTrainings.some(w=>w.id===r.id),l=a?"Completed (Logged)":"Pending",d=a?"text-green-600 bg-green-100 border-green-300":"text-amber-600 bg-amber-50 border-amber-300",h=`
            <div class="p-4 border border-slate-200 rounded-lg bg-slate-50">
                <div class="flex justify-between items-start sm:items-center flex-col sm:flex-row">
                    <h4 class="font-semibold text-blue-700 text-base mb-1 sm:mb-0">${n(r.name)}</h4>
                    <span class="text-xs font-medium ${d} px-2.5 py-1 rounded-full border">${n(l)}</span>
                </div>
                <p class="text-xs text-slate-500 mt-1">Cycle: ${n(r.cycle)} | Hours: ${r.hours}</p>
                <p class="text-sm text-slate-600 mt-1.5 leading-relaxed">${n(r.details)}</p>
                ${a?"":`<button data-mandate-id="${r.id}" data-mandate-hours="${r.hours}" data-mandate-name="${n(r.name)}" class="mark-tcole-complete-btn mt-3 px-4 py-1.5 bg-sky-500 text-white text-xs font-medium rounded-md hover:bg-sky-600 transition-colors">Mark as Completed</button>`}
            </div>`;s.innerHTML+=h}),Ip(e,n))}function Ip(t,e){document.querySelectorAll(".mark-tcole-complete-btn").forEach(n=>{n.dataset.listenerAttached!=="true"&&(n.dataset.listenerAttached="true",n.addEventListener("click",async function(){const s=this.dataset.mandateId,r=parseInt(this.dataset.mandateHours),a=this.dataset.mandateName,l=ve();if(!l.manuallyLoggedTrainings.some(d=>d.id===s)){const d={id:s,hours:r,name:a,dateLogged:new Date().toISOString()},h=[...l.manuallyLoggedTrainings,d],w=l.completedHours+r;Ln({manuallyLoggedTrainings:h,completedHours:w}),await t(d),Fi(ve()),Hi(ve(),t,e)}}))})}const Ai=document.querySelectorAll(".nav-item"),xt=document.querySelectorAll(".content-section"),ut=document.getElementById("mobileMenuButton");document.getElementById("mobileMenu");ut==null||ut.querySelector(".menu-icon-open");ut==null||ut.querySelector(".menu-icon-close");const On=document.querySelector("header");document.getElementById("logoutButton");document.getElementById("mobileLogoutButton");const gn=document.getElementById("headerOfficerName");function bp(){if(!xt||xt.length===0||!Ai||Ai.length===0)return;let t="home",e=1/0;const n=On?On.offsetHeight+20:100;if(xt.forEach(s=>{const r=s.getBoundingClientRect(),a=Math.abs(r.top-n),l=r.top<window.innerHeight-r.height/2&&r.bottom>n+r.height/2;if(r.top<=n&&r.bottom>=n){t=s.id,e=0;return}l&&a<e&&(e=a,t=s.id)}),window.innerHeight+window.scrollY>=document.body.offsetHeight-50){const s=xt[xt.length-1];s&&(t=s.id)}Ai.forEach(s=>{s.classList.remove("nav-link-active","font-semibold"),s.closest("#mobileMenu")||(s.classList.add("text-blue-100"),s.classList.remove("text-white")),s.getAttribute("href")===`#${t}`&&(s.classList.add("nav-link-active","font-semibold"),s.closest("#mobileMenu")||(s.classList.add("text-white"),s.classList.remove("text-blue-100")))})}function Ha(t,e=null){const n=document.getElementById(t);if(n){const s=On?On.offsetHeight:80,a=n.getBoundingClientRect().top+window.pageYOffset-s;window.scrollTo({top:a,behavior:"smooth"}),e&&setTimeout(()=>{const l=e.toLowerCase().replace(/\./g,"-").replace(/\s+/g,"-"),d=document.getElementById(l),h=document.getElementById(e),w=d||h;if(w){const A=w.closest(".expandable-card");if(A){const E=A.querySelector("button"),T=E.nextElementSibling;T&&T.classList.contains("card-collapsed")&&E.click(),A.classList.add("ring-2","ring-amber-400","ring-offset-2","ring-offset-white","transition-all","duration-300"),setTimeout(()=>{A.scrollIntoView({behavior:"smooth",block:"center"})},500),setTimeout(()=>A.classList.remove("ring-2","ring-amber-400","ring-offset-2","ring-offset-white"),3500)}else w.classList.add("ring-2","ring-amber-400","ring-offset-2","ring-offset-white","transition-all","duration-300"),w.scrollIntoView({behavior:"smooth",block:"center"}),setTimeout(()=>w.classList.remove("ring-2","ring-amber-400","ring-offset-2","ring-offset-white"),3500)}},750)}else console.warn(`Section with ID '${t}' not found.`)}function _p(t){gn&&(t&&t!=="Officer"?(gn.textContent=`Officer ${t.split(" ").pop()}`,gn.classList.remove("hidden")):gn.classList.add("hidden"))}function Tp(t,e,n,s,r){const a=document.getElementById("loginOverlay"),l=document.querySelector("header"),d=document.querySelector("main"),h=document.getElementById("loginName"),w=document.getElementById("loginEmail"),A=document.getElementById("loginPassword"),E=document.getElementById("authMessage"),T=document.getElementById("registerButton"),P=document.getElementById("loginButton"),S=document.getElementById("logoutButton"),L=document.getElementById("mobileLogoutButton"),k=document.getElementById("headerOfficerName");Dh(t,async O=>{if(O){const x=ve();x.uid=O.uid,x.email=O.email,x.name=O.displayName||(h&&h.value.trim()?h.value.trim():"Officer"),Ln(x),a&&a.classList.add("hidden"),l&&l.classList.remove("hidden"),d&&d.classList.remove("hidden"),k&&(k.textContent=`Officer ${x.name.split(" ").pop()}`,k.classList.remove("hidden")),await pp(e,O.uid),r(),console.log("User logged in:",O.email,"UID:",O.uid)}else{const x=ve();x.uid=null,x.email=null,x.name="Officer",x.completedHours=0,x.manuallyLoggedTrainings=[],Ln(x),a&&a.classList.remove("hidden"),l&&l.classList.add("hidden"),d&&d.classList.add("hidden"),k&&k.classList.add("hidden"),E&&(E.textContent=""),w&&(w.value=""),A&&(A.value=""),h&&(h.value=""),console.log("User logged out."),a&&(a.style.display="flex")}}),(async()=>{try{const O=typeof __initial_auth_token<"u"?__initial_auth_token:null;O?(console.log("Attempting to sign in with custom token..."),await Sh(t,O)):(console.log("No initial auth token. User needs to login/register."),a&&(a.style.display="flex"))}catch(O){console.error("Error during initial auth:",O),a&&(a.style.display="flex")}})(),T&&T.addEventListener("click",async()=>{const O=w.value,x=A.value,j=h.value.trim();if(!O||!x||!j){E&&(E.textContent="Please fill in all fields.",E.className="form-message error");return}if(x.length<6){E&&(E.textContent="Password should be at least 6 characters.",E.className="form-message error");return}E&&(E.textContent="Registering..."),E.className="form-message";try{const ie=await kh(t,O,x);await Lh(ie.user,{displayName:j});const z=ve();await gp(e,ie.user.uid,{name:j,email:O,tcolePID:z.tcolePID,manuallyLoggedTrainings:[],currentUnit:z.currentUnit,createdAt:jt.now()}),E&&(E.textContent="Registration successful! Logging in...",E.className="form-message success")}catch(ie){console.error("Registration error:",ie),E&&(E.textContent=`Registration failed: ${ie.message}`,E.className="form-message error")}}),P&&P.addEventListener("click",async()=>{const O=w.value,x=A.value;if(!O||!x){E&&(E.textContent="Please enter email and password.",E.className="form-message error");return}E&&(E.textContent="Logging in..."),E.className="form-message";try{await Ph(t,O,x),E&&(E.textContent="")}catch(j){console.error("Login error:",j),E&&(E.textContent=`Login failed: ${j.message}`,E.className="form-message error")}});function $(){Nh(t).catch(O=>console.error("Logout error:",O))}S&&S.addEventListener("click",$),L&&L.addEventListener("click",$)}async function Ci(t){var a;const n={contents:[{role:"user",parts:[{text:t}]}]},r="https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=";try{const l=await fetch(r,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});if(!l.ok){const h=await l.json();return console.error("Gemini API Error:",h),`Error: ${((a=h.error)==null?void 0:a.message)||l.statusText}. Please check console for details.`}const d=await l.json();if(d.candidates&&d.candidates.length>0&&d.candidates[0].content&&d.candidates[0].content.parts&&d.candidates[0].content.parts.length>0){let h=d.candidates[0].content.parts[0].text;return h=h.replace(/\*\*(.*?)\*\*/g,"<strong>$1</strong>"),h=h.replace(/\*(.*?)\*/g,"<em>$1</em>"),h=h.replace(/^- (.*?)(\n|$)/gm,"<li>$1</li>"),h=h.replace(/(<ul>\s*)?(<li>.*?<\/li>)+(\s*<\/ul>)?/gs,(w,A,E,T)=>A&&T?w:"<ul>"+w.replace(/<\/?ul>/g,"")+"</ul>"),h=h.replace(/\n/g,"<br>"),h}else return console.error("Gemini API Response Error: No valid content found",d),"AI analysis could not be retrieved at this time."}catch(l){return console.error("Fetch Error calling Gemini API:",l),"An error occurred while contacting the AI service. Please try again later."}}const Ep=[{date:"May 15, 2025",title:"New Legislation on Body Camera Footage Retention (TX HB 1234)",summary:"HB 1234 modifies requirements for body-worn camera footage retention periods for specific incident types. Agencies must update policies by Oct 1, 2025.",category:"Legislation",fullText:"House Bill 1234, passed during the 89th Texas Legislature, introduces significant changes to the Texas Occupations Code regarding the retention of body-worn camera (BWC) footage. Key provisions include extended retention periods for footage related to incidents involving use of force resulting in serious bodily injury (now 5 years, previously 90 days if no complaint filed), incidents subject to internal affairs investigations (duration of investigation plus 2 years), and footage used in criminal proceedings (until final adjudication and appeals). Agencies are mandated to update their local BWC policies to reflect these changes by October 1, 2025. This legislation aims to enhance transparency and accountability."},{date:"Apr 28, 2025",title:"AG Opinion on Use of Force Reporting (KP-0567)",summary:"Clarifies reporting timelines for certain use of force incidents involving serious bodily injury under new TCOLE rules.",category:"AG Opinion",fullText:"Attorney General Opinion KP-0567 addresses ambiguities in TCOLE Rule §218.5 concerning the reporting of use of force incidents. The opinion clarifies that the 72-hour reporting window for incidents resulting in serious bodily injury begins from the moment the agency's administration becomes aware of the SBI, not necessarily from the time of the incident itself, particularly if the severity was not immediately apparent. It also reiterates that 'serious bodily injury' should be interpreted consistent with its definition in the Texas Penal Code. Law enforcement agencies should review their use of force reporting protocols to ensure alignment with this clarification."},{date:"Mar 10, 2025",title:"Case Law Update: Smith v. Texas DPS - Search & Seizure",summary:"Recent appellate court ruling impacts vehicle searches based on olfactory evidence. Review implications for probable cause.",category:"Case Law",fullText:"In Smith v. Texas Department of Public Safety (Tex. App.—Austin, 2025), the Third Court of Appeals issued a ruling that may affect how officers establish probable cause for vehicle searches based solely on the odor of marijuana, especially in light of Texas's hemp laws. The court emphasized that the odor of marijuana, while still a factor, may require additional corroborating evidence to establish probable cause for a search, given the legal similarities in odor between marijuana and hemp. Officers should be mindful of this evolving standard and ensure thorough articulation of all factors contributing to probable cause in their reports. Training on distinguishing factors, if any, and articulation of 'odor plus' factors is recommended."},{date:"Feb 01, 2025",title:"TCOLE Rule Change: Mandated IDD Training Hours Increased",summary:"TCOLE has increased the minimum required hours for Intellectual and Developmental Disabilities (IDD) training in the next cycle.",category:"TCOLE Rule",fullText:"Effective for the training cycle beginning September 1, 2025, TCOLE Rule §217.11 has been amended to increase the minimum required hours for Intellectual and Developmental Disabilities (IDD) training (Course #4204 or equivalent) from 4 hours to 8 hours for all peace officers. This change reflects a legislative mandate aimed at improving officer interactions with individuals with IDD. The updated curriculum requirements will emphasize practical de-escalation techniques, communication strategies, and community resources. Agencies should plan their training schedules accordingly to meet this new requirement."}],Ap={},Cp=[{id:"tmd1",name:"Legislative Update (#3188)",cycle:"2-year",status:"Pending",details:"Covers changes in state laws, use of force, de-escalation. Essential for staying current with evolving legal standards and best practices in Texas law enforcement.",hours:4},{id:"tmd2",name:"Crisis Intervention Training (CIT) (#1850)",cycle:"4-year",status:"Pending",details:"Focuses on effective interaction with persons experiencing mental health crises. Emphasizes de-escalation techniques and community mental health resources. Crucial for modern policing.",hours:40},{id:"tmd3",name:"ALERRT Level 1 (#3311)",cycle:"One-time by 8/31/27, then 16hrs/2yrs",status:"Pending",details:"Advanced Law Enforcement Rapid Response Training for active shooter events. Level 1 provides foundational tactical skills for immediate response. Ongoing ALERRT training is also required.",hours:16},{id:"tmd4",name:"Finding Wellness – Building a Healthier Life (#4202)",cycle:"2-year",status:"Pending",details:"Addresses officer mental and physical well-being, focusing on stress management, resilience, and resources for a healthier lifestyle in a demanding profession.",hours:4},{id:"tmd5",name:"Intellectual & Developmental Disabilities (IDD) Training (#4204)",cycle:"New Mandate (8hrs)",status:"Pending",details:"Provides officers with knowledge and skills to effectively identify, interact with, and de-escalate situations involving individuals with IDD. Recently increased to 8 hours.",hours:8}],Sp=[{name:"Integrity (Texas LEO Standard)",summary:"Absolute honesty, adherence to moral principles, and incorruptibility.",details:"In Texas, LEOs are held to a high standard of integrity. This includes truthful testimony, accurate reporting (e.g., offense reports, use of force documentation), rejecting gratuities that could imply influence, and upholding the Law Enforcement Code of Ethics. Any compromise of integrity erodes public trust and departmental credibility. It means doing the right thing, even when no one is watching, and being a role model of ethical conduct."},{name:"Fairness & Impartiality (Constitutional Policing)",summary:"Equitable treatment under the law, free from bias or prejudice.",details:"Texas officers must enforce laws impartially, respecting the constitutional rights of all persons. Decisions (e.g., traffic stops, arrests, investigations) must be based on facts and law, not on race, ethnicity, gender, religion, sexual orientation, socioeconomic status, or other protected characteristics. This aligns with principles of procedural justice, ensuring that all individuals are treated with dignity and respect by law enforcement, fostering community trust and cooperation."},{name:"Respect for Dignity (Community Interaction)",summary:"Valuing the inherent worth and rights of every individual.",details:"Treating all individuals – victims, witnesses, suspects, and community members – with dignity and respect is crucial, even in confrontational situations. This includes professional demeanor, active listening, empathy, and avoiding derogatory language or actions. It's a cornerstone of de-escalation, effective communication, and positive community relations in diverse Texas communities. Respectful interaction builds bridges and enhances legitimacy."},{name:"Courage (Moral & Physical)",summary:"Bravery to act rightly, ethically, and protect others, despite risks.",details:"Physical courage is often required in dangerous calls and volatile situations. Moral courage is equally important: upholding ethical standards, intervening if a fellow officer acts improperly (Duty to Intervene), reporting misconduct, and making tough decisions aligned with law and policy, even under pressure, scrutiny, or when unpopular. It's about standing for what's right."},{name:"Service & Duty (Public Trust)",summary:"Selfless commitment to public safety and community well-being.",details:"The primary duty of a Texas LEO is to serve the community and protect the public. This involves a commitment to problem-solving, proactive policing where appropriate, and a focus on positive outcomes beyond just enforcement. It's about safeguarding the peace, order, and rights of all people within Texas communities, and being a responsible steward of the public trust."},{name:"Accountability (Transparency & Responsibility)",summary:"Answerability for actions, decisions, and use of authority.",details:"Texas LEOs are accountable to their agency, the community, and the law. This includes thorough and accurate documentation (reports, BWC footage), adherence to body-worn camera policies, cooperation with internal and external reviews, and taking responsibility for mistakes. Transparency in actions and decision-making processes builds trust and reinforces the legitimacy of law enforcement."}],kp=[{id:"cs1",title:"The Questionable Traffic Stop (Texas Racial Profiling Law)",summary:"An officer makes a traffic stop based on a vague suspicion in an area with a history of profiling complaints.",detailsRaw:"Officer Rodriguez is patrolling a neighborhood in a large Texas city that has previously faced scrutiny for racial profiling allegations. She observes a vehicle with out-of-state plates driving slowly through a residential area late at night. The driver is a young minority male. Officer Rodriguez initiates a traffic stop, citing 'suspicious behavior' as the primary reason, although no specific traffic violation was observed. During the stop, she asks for consent to search the vehicle, which is denied. No contraband is found.",discussionPointsHTML:"<strong>Discussion Points:</strong><ul><li>Applicability of Texas Code of Criminal Procedure Art. 2.131-2.138 (Prohibition on Racial Profiling).</li><li>Legal standard for reasonable suspicion for a traffic stop versus a mere hunch or generalized suspicion.</li><li>Impact of prior agency history or community perceptions of profiling in that area.</li><li>Ethical considerations of discretionary stops and potential for implicit bias.</li><li>Proper documentation requirements under TCOLE rules and agency policy for traffic stops, including data related to racial profiling.</li><li>Best practices for articulating grounds for a stop.</li></ul>"},{id:"cs2",title:"Off-Duty Social Media Post (First Amendment & Agency Policy)",summary:"An officer's controversial social media post about a local political issue draws public criticism.",detailsRaw:"Deputy Miller, employed by a Texas County Sheriff's Office, posts a strongly worded, critical comment on his personal Facebook page regarding a contentious local ordinance being debated by the County Commissioners. His profile identifies him as a Deputy, and he occasionally posts pictures in uniform. Several community members see the post and complain to the Sheriff, stating it shows bias and unprofessionalism that could affect his on-duty performance.",discussionPointsHTML:"<strong>Discussion Points:</strong><ul><li>Balancing an officer's First Amendment rights with the agency's legitimate interest in maintaining public trust and an image of impartiality.</li><li>Review of specific agency social media policy regarding off-duty conduct and identification as an agency employee.</li><li>Potential for the post to be considered 'conduct unbecoming an officer' or to undermine public confidence in the officer or agency.</li><li>Impact on the officer's perceived ability to perform duties fairly and impartially towards all community members.</li><li>Legal precedents regarding public employee speech (e.g., Pickering v. Board of Education, Garcetti v. Ceballos).</li></ul>"},{id:"cs3",title:"Use of Force Reporting Discrepancy (Texas Penal Code Sec. 9.51)",summary:"A use of force incident occurs, and a junior officer notices a discrepancy between their observation and a senior officer's report.",detailsRaw:"During an arrest of a resistant subject, Officer Chen (a junior officer) observes her Field Training Officer, Officer Davis, use a knee strike that Chen felt was unnecessary and occurred after the subject was already substantially controlled and complying. In Officer Davis's subsequent use of force report, the knee strike is described as occurring earlier in the encounter, when the subject was more actively resisting. Officer Chen knows that accurate reporting is critical under Texas Penal Code Sec. 9.51 (Justification of Force by Peace Officer) and departmental policy regarding truthfulness and use of force documentation.",discussionPointsHTML:"<strong>Discussion Points:</strong><ul><li>Ethical duty of truthfulness in all official reports and testimony.</li><li>Officer Chen's 'Duty to Intervene' or report misconduct if she believes excessive force was used or the report is falsified.</li><li>Navigating the chain of command versus ethical obligations when a senior officer is involved.</li><li>Potential legal and departmental consequences of inaccurate or falsified use of force reporting for all officers involved.</li><li>Protections for whistleblowers within the agency or under state law.</li><li>Importance of Body-Worn Camera footage in verifying accounts of use of force incidents.</li></ul>"}],rt="https://statutes.capitol.texas.gov/",Pp=[{id:"pc3103",category:"Penal Code",title:"Sec. 31.03. THEFT.",summary:"Defines theft as unlawfully appropriating property with intent to deprive the owner. Details various levels of offenses based on the value of the property.",link:rt+"PE/htm/PE.31.htm#31.03",keywords:"theft, appropriation, property, consent, stolen, value, offense level"},{id:"pc4904",category:"Penal Code",title:"Sec. 49.04. DRIVING WHILE INTOXICATED.",summary:"Defines DWI as operating a motor vehicle in a public place while intoxicated. Specifies offense levels, including enhancements for open container or high BAC.",link:rt+"PE/htm/PE.49.htm#49.04",keywords:"dwi, driving while intoxicated, motor vehicle, public place, alcohol, drugs, bac, open container"},{id:"ccp1401",category:"Code of Criminal Procedure",title:"Art. 14.01. OFFENSE WITHIN VIEW.",summary:"Authorizes a peace officer or any person to arrest an offender without a warrant for an offense committed in their presence or view, if it's a felony or breach of the peace. Peace officers can arrest for any offense in their presence/view.",link:rt+"CR/htm/CR.14.htm#14.01",keywords:"arrest, warrantless arrest, presence, view, felony, public peace, misdemeanor"},{id:"ccp2132",category:"Code of Criminal Procedure",title:"Art. 2.132. LAW ENFORCEMENT POLICY ON RACIAL PROFILING.",summary:"Mandates that all Texas law enforcement agencies adopt a detailed written policy on racial profiling, including definitions, prohibitions, complaint processes, and data collection requirements for motor vehicle stops.",link:rt+"CR/htm/CR.2.htm#2.132",keywords:"racial profiling, policy, motor vehicle stop, complaint process, data collection, reporting"},{id:"tc545351",category:"Transportation Code",title:"Sec. 545.351. MAXIMUM SPEED REQUIREMENT.",summary:"Prohibits driving at a speed greater than reasonable and prudent. Requires operators to control speed to avoid collisions and to reduce speed for specific hazards or conditions.",link:rt+"TN/htm/TN.545.htm#545.351",keywords:"speeding, maximum speed, reasonable, prudent, due care, reduced speed, hazard"},{id:"fc261101",category:"Family Code",title:"Sec. 261.101. PERSONS REQUIRED TO REPORT; TIME TO REPORT (Child Abuse/Neglect).",summary:"Mandates any person with cause to believe a child is being abused or neglected to report immediately. Professionals must report within 48 hours of first suspicion. This duty applies regardless of privileged communication.",link:rt+"FA/htm/FA.261.htm#261.101",keywords:"child abuse, neglect, report, professional, mandatory reporter, immediate report, 48 hours"}],Rp=[{id:"scenarioTX1",title:"The Anonymous Tip (Texas Stop & Frisk)",description:"You receive an anonymous tip detailing a person matching a specific description is selling narcotics at a known high-crime park in your Texas city. The tip provides the person's clothing and location within the park but no predictive information about future actions. Upon arrival, you see a person matching the description exactly, but they are merely standing and talking on a cell phone. What is your best course of action under Texas law (re: Florida v. J.L. and its application in Texas)?",choices:[{text:"Immediately detain and frisk the individual based on the detailed anonymous tip.",outcome:"incorrect",feedback:"Incorrect (10 pts). Under Florida v. J.L. (and its interpretation in Texas), an anonymous tip lacking predictive information about illicit activity and merely describing a subject is generally insufficient for reasonable suspicion to stop and frisk. More corroboration is needed.",points:10},{text:"Conduct consensual observation, attempt to engage in a casual encounter to gather more information, or observe for any independent criminal activity before deciding to detain.",outcome:"correct",feedback:"Correct! (30 pts) This approach respects constitutional limits. An anonymous tip alone, without indicia of reliability or predictive information, often isn't enough for a stop. Further observation or a consensual encounter is a better initial step to develop reasonable suspicion if it exists.",points:30},{text:"Ignore the tip completely as anonymous tips are unreliable.",outcome:"neutral",feedback:"Neutral (15 pts). While caution is warranted, completely ignoring a tip about potential drug sales in a high-crime area might be a missed opportunity for lawful observation and potential intervention if further grounds develop. The key is *how* you act on it.",points:15}]},{id:"scenarioTX2",title:"Body Cam Activation (Texas Occupations Code §1701.655)",description:"You are responding to a 'check welfare' call at a residence in Texas. Upon arrival, a person answers the door and seems agitated but there's no immediate sign of a crime. When should your body-worn camera ideally be activated according to Texas Occupations Code §1701.655 and common agency policy?",choices:[{text:"Only if an offense is clearly occurring or an arrest is made.",outcome:"incorrect",feedback:"Incorrect (10 pts). Texas law and most policies require activation during *any* law enforcement-related encounter with the public, including investigative detentions and responses to calls for service, not just when an offense is obvious.",points:10},{text:"Prior to arriving at the scene, or as soon as safely possible upon initiating contact, to capture the entire interaction.",outcome:"correct",feedback:"Correct! (30 pts) Best practice and often policy is to activate the BWC *before* making contact or as soon as safely possible upon initiating an investigative or enforcement encounter. This ensures the entire interaction is captured.",points:30},{text:"After you determine a crime has been committed to save battery/storage.",outcome:"incorrect",feedback:"Incorrect (5 pts). Waiting until a crime is confirmed is too late and defeats the purpose of capturing the events leading up to that determination, which is crucial for transparency and evidence.",points:5}]}],Lp=[{id:"sfst-guide",title:"Standardized Field Sobriety Tests (SFST) Quick Reference (Texas)",content:"<h4>Key Phases:</h4><ol class='list-decimal list-inside ml-4 mb-2'><li>Vehicle in Motion Observations</li><li>Personal Contact & Interview</li><li>Pre-Arrest Screening (SFSTs)</li></ol><h4>SFST Battery (NHTSA Approved):</h4><ul class='list-disc list-inside ml-4 space-y-1'><li><strong>Horizontal Gaze Nystagmus (HGN):</strong> 6 clues total (3 per eye). Check for: Lack of smooth pursuit, Distinct & sustained nystagmus at maximum deviation, Onset of nystagmus prior to 45 degrees. Remember vertical nystagmus for other substances.</li><li><strong>Walk and Turn (WAT):</strong> 8 clues total. Instructions stage: Cannot keep balance, Starts too soon. Walking stage: Stops while walking, Misses heel-to-toe, Steps off line, Uses arms to balance, Improper turn, Incorrect number of steps. (9 heel-to-toe steps out, turn, 9 back).</li><li><strong>One Leg Stand (OLS):</strong> 4 clues total. Sways while balancing, Uses arms to balance, Hops, Puts foot down. (Hold for 30 seconds).</li></ul><p class='mt-2'><strong>Note:</strong> Administer per NHTSA guidelines. Document all observations meticulously. Consider totality of circumstances for PC. Ensure safe location.</p>",category:"DWI Investigation"},{id:"miranda-guide",title:"Miranda Warning (Texas - English/Spanish)",content:"<h4>English (Standard):</h4><p class='mb-2'>You have the right to remain silent. Anything you say can and will be used against you in a court of law. You have the right to an attorney. If you cannot afford an attorney, one will be appointed for you, prior to any questioning if you wish. You can decide at any time to exercise these rights and not answer any questions or make any statements.</p><p class='font-semibold'>Waiver (Ask both):</p><ol class='list-decimal list-inside ml-4'><li>Do you understand each of these rights I have explained to you?</li><li>Having these rights in mind, do you wish to talk to us now?</li></ol><hr class='my-3'><h4>Español (Ejemplo - Verify with certified translation):</h4><p class='mb-2'>Usted tiene el derecho de permanecer callado. Cualquier cosa que diga puede y será usada en su contra en un tribunal de justicia. Usted tiene el derecho a un abogado. Si no puede pagar un abogado, se le asignará uno antes de cualquier interrogatorio, si así lo desea. Usted puede decidir en cualquier momento ejercer estos derechos y no contestar ninguna pregunta ni hacer ninguna declaración.</p><p class='font-semibold'>Renuncia (Pregunte ambos):</p><ol class='list-decimal list-inside ml-4'><li>¿Entiende cada uno de estos derechos que le he explicado?</li><li>Teniendo estos derechos en mente, ¿desea hablar con nosotros ahora?</li></ol><p class='mt-2 text-xs'><strong>Important:</strong> Ensure suspect understands. If language barrier, use certified translator. Document waiver clearly.</p>",category:"Custodial Interrogation"},{id:"uof-guide",title:"Use of Force Considerations (Texas Penal Code Ch. 9)",content:"<h4>Key Principles (Based on Graham v. Connor & TX Law):</h4><ul class='list-disc list-inside ml-4 mb-2 space-y-1'><li><strong>Objective Reasonableness:</strong> Judged from the perspective of a reasonable officer on the scene, not with 20/20 hindsight.</li><li><strong>Totality of Circumstances:</strong> All facts known to the officer at the time.</li><li><strong>Graham Factors:</strong><ol class='list-alpha list-inside ml-6'><li>Severity of the crime at issue.</li><li>Whether the suspect poses an immediate threat to the safety of officers or others.</li><li>Whether the suspect is actively resisting arrest or attempting to evade arrest by flight.</li></ol></li></ul><h4>Texas Penal Code Chapter 9 (Justification Excluding Criminal Responsibility):</h4><ul class='list-disc list-inside ml-4 space-y-1'><li><strong>Sec. 9.51 (Arrest and Search):</strong> Authorizes force, including deadly force in specific circumstances, to make or assist in making an arrest or search, or to prevent escape after arrest, if the officer reasonably believes the arrest or search is lawful and reasonably believes the force is immediately necessary.</li><li><strong>De-escalation:</strong> When possible and appropriate without compromising safety, officers should use de-escalation techniques.</li></ul><p class='mt-2'><strong>Documentation:</strong> Thoroughly document all use of force incidents, articulating the specific facts justifying the level of force used. Adhere to agency policy and BWC activation requirements.</p>",category:"Response to Resistance"}],Op=[{id:"wr1",title:"Recognizing Signs of Burnout & Cumulative Stress",summary:"Learn to identify early indicators of burnout and cumulative stress in yourself and peers.",details:"Burnout and cumulative stress in law enforcement are serious concerns. Manifestations can include: <ul><li><strong>Emotional:</strong> Chronic exhaustion, cynicism, detachment, loss of enjoyment, irritability, anxiety, depression.</li><li><strong>Physical:</strong> Fatigue, sleep disturbances, headaches, digestive issues, changes in appetite/weight, increased susceptibility to illness.</li><li><strong>Behavioral:</strong> Social withdrawal, increased alcohol/substance use, risk-taking behavior, difficulty concentrating, decreased job performance, strained relationships.</li></ul>Recognizing these signs early is crucial for seeking help. Pay attention to persistent changes in your baseline. If you notice these in yourself or a colleague, it's important to talk about it and explore support options. Early intervention is key.",keywords:"burnout, stress, exhaustion, cynicism, cumulative stress, ptsd"},{id:"wr2",title:"Mindfulness & Tactical Stress Reduction Techniques",summary:"Simple, practical exercises to manage acute and chronic stress and improve focus.",details:"Mindfulness involves paying attention to the present moment without judgment. Even short practices can help reduce stress and improve situational awareness. Try: <ul><li><strong>Tactical/Combat Breathing (Box Breathing):</strong> Inhale slowly for 4 counts, hold for 4 counts, exhale slowly for 4 counts, hold for 4 counts. Repeat for several minutes. This can be done discreetly to regulate your nervous system during stressful encounters.</li><li><strong>Grounding Techniques:</strong> If feeling overwhelmed, focus on your senses: Name 5 things you can see, 4 things you can touch, 3 things you can hear, 2 things you can smell, 1 thing you can taste. This helps bring you to the present.</li><li><strong>Mindful Observation:</strong> Briefly focus on a non-threatening detail in your environment (e.g., texture of your steering wheel, a specific sound) to anchor yourself.</li></ul> Consistent practice, even for a few minutes daily, can build resilience.",keywords:"mindfulness, breathing, stress reduction, focus, tactical breathing, grounding"},{id:"wr3",title:"Accessing Peer Support & Mental Health Resources in Texas",summary:"Information on connecting with confidential peer support programs and professional mental health services.",details:"Many Texas agencies and law enforcement associations offer robust peer support programs. These programs provide confidential assistance from fellow officers who understand the unique stressors of the job. Examples include programs through TMPA, CLEAT, local agency initiatives (e.g., Austin PD, Dallas PD, Harris County SO have programs), and the Bill Blackwood LEMIT. <br><br>Additionally, specialized mental health professionals cater to first responders. Organizations like the National Alliance on Mental Illness (NAMI) Texas can also provide resources. Don't hesitate to reach out. Your agency likely has an Employee Assistance Program (EAP). Seeking help is a sign of strength. <br><br><strong>Key Texas Resources (Examples):</strong><ul><li>Your agency's Peer Support Team / EAP</li><li>Texas Law Enforcement Peer Network (TXLEPN - through LEMIT)</li><li>Bluebonnet CISM Team (Central Texas)</li><li>Local chapters of NAMI or Mental Health America</li></ul>Check your agency's resources or state-level LEO association websites for local peer support contacts and vetted mental health providers.",keywords:"peer support, mental health, help, resources, eap, therapy, counseling, tcole wellness"}],xp=[{name:"Texas Commission on Law Enforcement (TCOLE)",url:"https://www.tcole.texas.gov/",description:"Official TCOLE website for rules, forms, and licensing information."},{name:"Texas Municipal Police Association (TMPA)",url:"https://www.tmpa.org/",description:"Advocacy, legal services, and resources for Texas municipal police."},{name:"Combined Law Enforcement Associations of Texas (CLEAT)",url:"https://cleat.org/",description:"Largest police labor organization in Texas, offering legal and support services."},{name:"Bill Blackwood Law Enforcement Management Institute of Texas (LEMIT)",url:"https://www.lemitonline.org/",description:"Provides leadership and management training for Texas law enforcement, including peer support resources."},{name:"Texas Police Chiefs Association (TPCA)",url:"https://www.texaspolicechiefs.org/",description:"Professional development and advocacy for Texas police chiefs."},{name:"National Alliance on Mental Illness (NAMI) Texas",url:"https://namitexas.org/",description:"Support, education, and advocacy for individuals and families affected by mental illness."},{name:"FBI National Academy Associates - Texas Chapter",url:"https://fbinaatexas.org/",description:"Professional association for graduates of the FBI National Academy."}];let We=null;function Dp(t,e,n,s){const r=document.getElementById("principlesContainer"),a=document.getElementById("caseStudiesContainer"),l=document.getElementById("caseStudyModal"),d=document.getElementById("modalTitle"),h=document.getElementById("modalBody"),w=document.getElementById("closeModalButton"),A=document.getElementById("closeModalButtonFooter"),E=document.getElementById("analyzeCaseStudyButton"),T=document.getElementById("caseStudyAiAnalysisContainer"),P=document.getElementById("caseStudyAiAnalysisContent");document.getElementById("caseStudyAiButtonSpinner"),r&&(r.innerHTML="",t.forEach(S=>{const L=`
                <div class="expandable-card border border-slate-300 rounded-xl shadow-sm overflow-hidden">
                    <button class="w-full text-left p-4 sm:p-5 bg-slate-100 hover:bg-slate-200 focus-visible:bg-slate-200 rounded-t-xl focus:outline-none flex justify-between items-center transition-colors duration-200" aria-expanded="false">
                        <div>
                            <span class="font-semibold text-md sm:text-lg text-blue-700">${s(S.name)}</span>
                            <p class="text-sm font-normal text-slate-500 mt-0.5">${s(S.summary)}</p>
                        </div>
                        <span class="arrow-icon text-blue-700 text-2xl transform" aria-hidden="true">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5"><path fill-rule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" /></svg>
                        </span>
                    </button>
                    <div class="expandable-content px-4 sm:px-5 border-t border-slate-300 card-collapsed text-slate-700 bg-white rounded-b-xl">
                        <p class="py-4 text-sm sm:text-base leading-relaxed">${S.details.replace(/\n/g,"<br>")}</p>
                    </div>
                </div>`;r.innerHTML+=L})),a&&l&&d&&h&&E&&(a.innerHTML="",e.forEach(S=>{const L=`
                <button data-id="${S.id}" class="case-study-item block w-full h-full text-left p-4 sm:p-5 bg-slate-100 hover:bg-slate-200 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white flex flex-col justify-between" aria-label="View details for case study: ${s(S.title)}">
                    <div>
                        <h4 class="font-semibold text-md sm:text-lg text-blue-700 mb-1.5">${s(S.title)}</h4>
                        <p class="text-sm text-slate-600 leading-relaxed">${s(S.summary)}</p>
                    </div>
                    <span class="text-xs text-blue-500 mt-3 inline-block font-medium">View Details &raquo;</span>
                </button>`;a.innerHTML+=L}),document.querySelectorAll(".case-study-item").forEach(S=>{S.addEventListener("click",()=>{const L=S.dataset.id;We=e.find(k=>k.id===L),We&&Np(We,l,d,h,T,P,s)})}),E.addEventListener("click",async()=>{if(!We)return;as(E);const S=document.getElementById("caseStudyAiLoading");P&&(P.innerHTML=""),T&&T.classList.remove("hidden"),S&&S.classList.remove("hidden");const L=`You are an AI assistant for Texas Law Enforcement Officers. Analyze the following case study and provide a concise analysis. Focus on identifying key ethical principles involved, potential courses of action and their ethical implications, and any relevant Texas legal considerations or best practices. Case Study Title: "${We.title}". Case Details: "${We.detailsRaw}". Original Discussion Points: "${We.discussionPointsHTML.replace(/<[^>]+>/g," ")}". Provide your analysis in a structured way using Markdown for headings (e.g., ### Heading), bold, italics, and bullet points.`,k=await n(L);P&&(P.innerHTML=k),S&&S.classList.add("hidden"),cs(E),E.innerHTML='<span class="mr-2">✨</span>Analyze with AI'})),w&&w.addEventListener("click",()=>pn(l)),A&&A.addEventListener("click",()=>pn(l)),l&&l.addEventListener("click",S=>{S.target===l&&pn(l)}),document.addEventListener("keydown",S=>{S.key==="Escape"&&l&&l.classList.contains("modal-active")&&pn(l)}),Hn()}function Np(t,e,n,s,r,a,l){if(!t||!e||!n||!s)return;n.innerHTML=l(t.title),s.innerHTML=`<div class="prose prose-sm sm:prose-base max-w-none">${t.detailsRaw.replace(/\n/g,"<br><br>")}<br><br>${t.discussionPointsHTML}</div>`;const d=e.querySelector("#modalAiAnalysisSection");d&&d.classList.remove("hidden"),r&&r.classList.add("hidden"),a&&(a.innerHTML=""),mp(e)}function Mp(t,e){const n=document.getElementById("texasLawContainer"),s=document.getElementById("lawSearchInput");function r(a=""){if(!n)return;n.innerHTML="";const l=a.toLowerCase().trim(),d=t.filter(h=>h.title.toLowerCase().includes(l)||h.summary&&h.summary.toLowerCase().includes(l)||h.keywords&&h.keywords.toLowerCase().includes(l)||h.id.toLowerCase().includes(l));if(d.length===0){n.innerHTML='<p class="text-slate-500 p-4 text-center">No Texas statutes match your search criteria.</p>';return}d.forEach(h=>{const w=`content-law-${h.id}`,A=`
                <div id="${h.id.toLowerCase().replace(/\./g,"-")}" class="expandable-card border border-slate-300 rounded-xl shadow-sm overflow-hidden">
                    <button class="w-full text-left p-4 sm:p-5 bg-slate-100 hover:bg-slate-200 focus-visible:bg-slate-200 rounded-t-xl focus:outline-none flex justify-between items-center transition-colors duration-200" aria-expanded="false" aria-controls="${w}">
                       <div>
                            <span class="font-semibold text-blue-700">${e(h.title)}</span>
                            <span class="text-xs text-slate-500 ml-2">(${e(h.category)})</span>
                       </div>
                        <span class="arrow-icon text-blue-700 text-2xl transform" aria-hidden="true">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5"><path fill-rule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" /></svg>
                        </span>
                    </button>
                    <div id="${w}" class="expandable-content px-4 sm:px-5 border-t border-slate-300 card-collapsed text-slate-700 bg-white rounded-b-xl">
                        <p class="py-2 text-sm text-slate-600 leading-relaxed">${e(h.summary)}</p>
                        <a href="${e(h.link)}" target="_blank" rel="noopener noreferrer" class="inline-block mt-2 mb-3 px-3 py-1.5 bg-sky-600 text-white text-xs font-medium rounded-md hover:bg-sky-700 transition-colors shadow-sm hover:shadow">
                            View Full Statute (statutes.capitol.texas.gov) 
                            <span class="ml-1" aria-hidden="true">↗</span>
                        </a>
                        ${h.content?`<h5 class="text-xs font-semibold text-slate-500 mt-3 mb-1">Key Excerpt:</h5><pre class="py-2 whitespace-pre-wrap text-xs sm:text-sm leading-relaxed bg-slate-50 p-3 rounded-md border border-slate-200">${e(h.content)}</pre>`:""}
                    </div>
                </div>`;n.innerHTML+=A}),Hn()}s&&s.addEventListener("input",a=>r(a.target.value)),r()}let co=0;function Up(t,e,n,s){const r=document.getElementById("interactiveScenariosContainer"),a=document.getElementById("scenarioScore"),l=document.getElementById("fieldGuidesContainer"),d=document.getElementById("generateAiScenarioButton"),h=document.getElementById("aiGeneratedScenarioContainer"),w=document.getElementById("aiGeneratedScenarioContent"),A=document.getElementById("aiScenarioLoading");r&&a&&(r.innerHTML="",t.forEach(E=>{let T="";E.choices.forEach(S=>{T+=`<button data-points="${S.points}" data-feedback="${s(S.feedback)}" class="scenario-choice block w-full md:w-auto md:inline-block mt-2 md:mt-0 md:mr-2 px-5 py-2.5 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-50 transition-all duration-200 shadow-md hover:shadow-lg">${s(S.text)}</button>`});const P=`
                <div class="scenario p-5 sm:p-6 border border-slate-300 rounded-xl bg-slate-50 shadow-lg" id="scenario-${E.id}" role="region" aria-labelledby="scenario-title-${E.id}">
                    <h4 id="scenario-title-${E.id}" class="text-lg sm:text-xl font-semibold text-blue-800 mb-3">${s(E.title)}</h4>
                    <p class="text-slate-600 mb-4 text-sm leading-relaxed">${s(E.description)}</p>
                    <div class="choices mb-4 space-y-2 sm:space-y-0 sm:space-x-2"> ${T} </div>
                    <div class="feedback-area hidden mt-3" role="alert"></div>
                </div>`;r.innerHTML+=P}),document.querySelectorAll(".scenario-choice").forEach(E=>{E.addEventListener("click",function(){const T=parseInt(this.dataset.points),P=this.dataset.feedback,S=this.closest(".scenario").querySelector(".feedback-area");co+=T,a.textContent=co;let L="feedback-neutral";T>20?L="feedback-correct":T<=10&&(L="feedback-incorrect"),S.innerHTML=`<div class="${L} scenario-feedback text-sm"><p class="font-semibold mb-1">Feedback (+${T} pts):</p><p>${P}</p></div>`,S.classList.remove("hidden"),this.closest(".choices").querySelectorAll("button").forEach(k=>{k.disabled=!0,k.classList.add("opacity-60","cursor-not-allowed")}),this.classList.remove("opacity-60","cursor-not-allowed"),this.classList.add("ring-2","ring-amber-400","ring-offset-2","ring-offset-slate-50")})})),d&&d.addEventListener("click",async()=>{as(d),w&&(w.innerHTML=""),h&&h.classList.remove("hidden"),A&&A.classList.remove("hidden");const T=await n("You are an AI assistant for Texas Law Enforcement Officers. Generate a new, concise ethical scenario relevant to daily patrol duties in Texas. The scenario should present a clear ethical challenge. After the scenario description, provide 3-4 plausible but distinct courses of action an officer might consider (without indicating which is 'correct'). Finally, provide a brief 'AI Ethical Considerations' section discussing the key ethical principles at play in the scenario you generated. Keep the scenario and choices brief and to the point. Format your response using Markdown for headings (e.g., ### Scenario), bold, italics, and bullet points for choices and considerations.");w&&(w.innerHTML=T),A&&A.classList.add("hidden"),cs(d),d.innerHTML='<span class="mr-2 text-base">✨</span>Generate New AI Scenario'}),l&&(l.innerHTML="",e.forEach(E=>{const T=`content-guide-${E.id}`,P=`
                <div id="${E.id.toLowerCase().replace(/\s+/g,"-")}" class="expandable-card border border-slate-300 rounded-xl shadow-sm overflow-hidden">
                    <button class="w-full text-left p-4 sm:p-5 bg-slate-100 hover:bg-slate-200 focus-visible:bg-slate-200 rounded-t-xl focus:outline-none flex justify-between items-center transition-colors duration-200" aria-expanded="false" aria-controls="${T}">
                        <span class="font-semibold text-blue-700">${s(E.title)} <span class="text-xs text-slate-500">(${s(E.category)})</span></span>
                        <span class="arrow-icon text-blue-700 text-2xl transform" aria-hidden="true">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5"><path fill-rule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" /></svg>
                        </span>
                    </button>
                    <div id="${T}" class="expandable-content px-4 sm:px-5 border-t border-slate-300 card-collapsed text-slate-700 bg-white rounded-b-xl">
                        <div class="py-4 text-sm sm:text-base leading-relaxed prose prose-sm sm:prose-base max-w-none">${E.content}</div>
                    </div>
                </div>`;l.innerHTML+=P})),Hn()}function Bp(t,e){const n=document.getElementById("wellnessResourcesContainer");n&&(n.innerHTML="",t.forEach(s=>{const r=`content-wellness-${s.id}`,a=`
                <div class="expandable-card border border-slate-300 rounded-xl shadow-sm overflow-hidden">
                    <button class="w-full text-left p-4 sm:p-5 bg-slate-100 hover:bg-slate-200 focus-visible:bg-slate-200 rounded-t-xl focus:outline-none flex justify-between items-center transition-colors duration-200" aria-expanded="false" aria-controls="${r}">
                         <div>
                            <span class="font-semibold text-md sm:text-lg text-blue-700">${e(s.title)}</span>
                            <p class="text-sm font-normal text-slate-500 mt-0.5">${e(s.summary)}</p>
                        </div>
                        <span class="arrow-icon text-blue-700 text-2xl transform" aria-hidden="true">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5"><path fill-rule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" /></svg>
                        </span>
                    </button>
                    <div id="${r}" class="expandable-content px-4 sm:px-5 border-t border-slate-300 card-collapsed text-slate-700 bg-white rounded-b-xl">
                        <div class="py-4 text-sm sm:text-base leading-relaxed prose prose-sm sm:prose-base max-w-none">${s.details.replace(/\n/g,"<br>")}</div>
                    </div>
                </div>`;n.innerHTML+=a}),Hn())}function Fp(t,e){const n=document.getElementById("externalResourcesList");n&&(n.innerHTML="",t.forEach(s=>{const r=`
                <li class="p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors duration-200 border border-slate-200 shadow-sm hover:shadow-md">
                    <a href="${e(s.url)}" target="_blank" rel="noopener noreferrer" class="font-semibold text-blue-600 hover:text-blue-800 hover:underline focus:outline-none focus-visible:ring-1 focus-visible:ring-amber-500 focus-visible:ring-offset-1 focus-visible:ring-offset-slate-50 rounded-sm">
                        ${e(s.name)} 
                        <span class="text-xs text-slate-400 font-normal inline-block ml-1" aria-hidden="true">↗</span>
                    </a>
                    <p class="text-xs text-slate-500 mt-1 leading-relaxed">${e(s.description)}</p>
                </li>`;n.innerHTML+=r})),document.querySelectorAll(".agency-portal-link").forEach(s=>{s.addEventListener("click",r=>{r.preventDefault(),alert("Agency Administration Portal link clicked. This feature would be part of a separate administrative interface.")})})}async function Hp(){try{console.log("loadInitialAppData called. Current Firebase user:",Bi.currentUser);const t=ve();document.getElementById("currentYear")&&(document.getElementById("currentYear").textContent=new Date().getFullYear()),yp(t,Ep,Ap,Ci,Ha),wp(t,Cp,Ua,X),Dp(Sp,kp,Ci,X),Mp(Pp,X),Up(Rp,Lp,Ci,X),Bp(Op,X),Fp(xp,X),_p(t.name),Bi.currentUser&&bp()}catch(t){alert("An error occurred while loading your data. Please try again or contact support."),console.error("Error in loadInitialAppData:",t)}}document.addEventListener("DOMContentLoaded",()=>{Tp(Bi,Ua,async t=>{console.log("Main.js: User logged in, loading app data..."),await Hp()},()=>{console.log("Main.js: User logged out.")},async()=>{console.log("Main.js: App is ready after initial auth and data load.")}),window.navigateToSection=Ha,window.openUpdateModal=t=>{const e=document.getElementById("caseStudyModal"),n=document.getElementById("modalTitle"),s=document.getElementById("modalBody"),r=document.getElementById("closeModalButton"),a=e.querySelector("#modalAiAnalysisSection"),l=t.dataset.fulltext,d=t.dataset.title;e&&n&&s&&(n.innerHTML=d,s.innerHTML=`<div class="prose prose-sm sm:prose-base max-w-none">${l.replace(/\n/g,"<br><br>")}</div>`,e.classList.remove("modal-inactive"),e.classList.add("modal-active"),r&&r.focus(),a&&a.classList.add("hidden"))}});
