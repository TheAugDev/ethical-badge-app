(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();const Af=()=>{};var cc={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hl=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},Rf=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const i=n[t++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=n[t++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=n[t++],a=n[t++],c=n[t++],u=((i&7)<<18|(s&63)<<12|(a&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=n[t++],a=n[t++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|a&63)}}return e.join("")},zl={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){const s=n[i],a=i+1<n.length,c=a?n[i+1]:0,u=i+2<n.length,d=u?n[i+2]:0,p=s>>2,g=(s&3)<<4|c>>4;let v=(c&15)<<2|d>>6,R=d&63;u||(R=64,a||(v=64)),r.push(t[p],t[g],t[v],t[R])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Hl(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Rf(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){const s=t[n.charAt(i++)],c=i<n.length?t[n.charAt(i)]:0;++i;const d=i<n.length?t[n.charAt(i)]:64;++i;const g=i<n.length?t[n.charAt(i)]:64;if(++i,s==null||c==null||d==null||g==null)throw new Cf;const v=s<<2|c>>4;if(r.push(v),d!==64){const R=c<<4&240|d>>2;if(r.push(R),g!==64){const C=d<<6&192|g;r.push(C)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Cf extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Sf=function(n){const e=Hl(n);return zl.encodeByteArray(e,!0)},ii=function(n){return Sf(n).replace(/\./g,"")},Gl=function(n){try{return zl.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Pf(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const kf=()=>Pf().__FIREBASE_DEFAULTS__,Df=()=>{if(typeof process>"u"||typeof cc>"u")return;const n=cc.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},xf=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Gl(n[1]);return e&&JSON.parse(e)},Si=()=>{try{return Af()||kf()||Df()||xf()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Wl=n=>{var e,t;return(t=(e=Si())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},Nf=n=>{const e=Wl(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},Kl=()=>{var n;return(n=Si())===null||n===void 0?void 0:n.config},Ql=n=>{var e;return(e=Si())===null||e===void 0?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Of{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
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
 */function fr(n){return n.endsWith(".cloudworkstations.dev")}async function Yl(n){return(await fetch(n,{credentials:"include"})).ok}/**
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
 */function Lf(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",i=n.iat||0,s=n.sub||n.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},n);return[ii(JSON.stringify(t)),ii(JSON.stringify(a)),""].join(".")}const Yn={};function Vf(){const n={prod:[],emulator:[]};for(const e of Object.keys(Yn))Yn[e]?n.emulator.push(e):n.prod.push(e);return n}function Mf(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let lc=!1;function Jl(n,e){if(typeof window>"u"||typeof document>"u"||!fr(window.location.host)||Yn[n]===e||Yn[n]||lc)return;Yn[n]=e;function t(v){return`__firebase__banner__${v}`}const r="__firebase__banner",s=Vf().prod.length>0;function a(){const v=document.getElementById(r);v&&v.remove()}function c(v){v.style.display="flex",v.style.background="#7faaf0",v.style.position="fixed",v.style.bottom="5px",v.style.left="5px",v.style.padding=".5em",v.style.borderRadius="5px",v.style.alignItems="center"}function u(v,R){v.setAttribute("width","24"),v.setAttribute("id",R),v.setAttribute("height","24"),v.setAttribute("viewBox","0 0 24 24"),v.setAttribute("fill","none"),v.style.marginLeft="-6px"}function d(){const v=document.createElement("span");return v.style.cursor="pointer",v.style.marginLeft="16px",v.style.fontSize="24px",v.innerHTML=" &times;",v.onclick=()=>{lc=!0,a()},v}function p(v,R){v.setAttribute("id",R),v.innerText="Learn more",v.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",v.setAttribute("target","__blank"),v.style.paddingLeft="5px",v.style.textDecoration="underline"}function g(){const v=Mf(r),R=t("text"),C=document.getElementById(R)||document.createElement("span"),D=t("learnmore"),P=document.getElementById(D)||document.createElement("a"),j=t("preprendIcon"),O=document.getElementById(j)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(v.created){const L=v.element;c(L),p(P,D);const K=d();u(O,j),L.append(O,C,P,K),document.body.appendChild(L)}s?(C.innerText="Preview backend disconnected.",O.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
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
</defs>`,C.innerText="Preview backend running in this workspace."),C.setAttribute("id",R)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",g):g()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function we(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Uf(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(we())}function Ff(){var n;const e=(n=Si())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Bf(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Xl(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function $f(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function jf(){const n=we();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function qf(){return!Ff()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Zl(){try{return typeof indexedDB=="object"}catch{return!1}}function eu(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(t){e(t)}})}function Hf(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zf="FirebaseError";class Fe extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=zf,Object.setPrototypeOf(this,Fe.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ht.prototype.create)}}class Ht{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},i=`${this.service}/${e}`,s=this.errors[e],a=s?Gf(s,r):"Error",c=`${this.serviceName}: ${a} (${i}).`;return new Fe(i,c,r)}}function Gf(n,e){return n.replace(Wf,(t,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const Wf=/\{\$([^}]+)}/g;function Kf(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function wt(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const i of t){if(!r.includes(i))return!1;const s=n[i],a=e[i];if(uc(s)&&uc(a)){if(!wt(s,a))return!1}else if(s!==a)return!1}for(const i of r)if(!t.includes(i))return!1;return!0}function uc(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pr(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function zn(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Gn(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function Qf(n,e){const t=new Yf(n,e);return t.subscribe.bind(t)}class Yf{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let i;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");Jf(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:r},i.next===void 0&&(i.next=_s),i.error===void 0&&(i.error=_s),i.complete===void 0&&(i.complete=_s);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Jf(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function _s(){}/**
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
 */const Xf=1e3,Zf=2,ep=4*60*60*1e3,tp=.5;function hc(n,e=Xf,t=Zf){const r=e*Math.pow(t,n),i=Math.round(tp*r*(Math.random()-.5)*2);return Math.min(ep,r+i)}/**
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
 */function Ie(n){return n&&n._delegate?n._delegate:n}class Me{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Vt="[DEFAULT]";/**
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
 */class np{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new Of;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(ip(e))try{this.getOrInitializeService({instanceIdentifier:Vt})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Vt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Vt){return this.instances.has(e)}getOptions(e=Vt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[s,a]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(s);r===c&&a.resolve(i)}return i}onInit(e,t){var r;const i=this.normalizeInstanceIdentifier(t),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const a=this.instances.get(i);return a&&e(a,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const i of r)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:rp(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Vt){return this.component?this.component.multipleInstances?e:Vt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function rp(n){return n===Vt?void 0:n}function ip(n){return n.instantiationMode==="EAGER"}/**
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
 */class sp{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new np(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var H;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(H||(H={}));const op={debug:H.DEBUG,verbose:H.VERBOSE,info:H.INFO,warn:H.WARN,error:H.ERROR,silent:H.SILENT},ap=H.INFO,cp={[H.DEBUG]:"log",[H.VERBOSE]:"log",[H.INFO]:"info",[H.WARN]:"warn",[H.ERROR]:"error"},lp=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),i=cp[e];if(i)console[i](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Pi{constructor(e){this.name=e,this._logLevel=ap,this._logHandler=lp,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in H))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?op[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,H.DEBUG,...e),this._logHandler(this,H.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,H.VERBOSE,...e),this._logHandler(this,H.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,H.INFO,...e),this._logHandler(this,H.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,H.WARN,...e),this._logHandler(this,H.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,H.ERROR,...e),this._logHandler(this,H.ERROR,...e)}}const up=(n,e)=>e.some(t=>n instanceof t);let dc,fc;function hp(){return dc||(dc=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function dp(){return fc||(fc=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const tu=new WeakMap,Ls=new WeakMap,nu=new WeakMap,vs=new WeakMap,uo=new WeakMap;function fp(n){const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("success",s),n.removeEventListener("error",a)},s=()=>{t(_t(n.result)),i()},a=()=>{r(n.error),i()};n.addEventListener("success",s),n.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&tu.set(t,n)}).catch(()=>{}),uo.set(e,n),e}function pp(n){if(Ls.has(n))return;const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("complete",s),n.removeEventListener("error",a),n.removeEventListener("abort",a)},s=()=>{t(),i()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",s),n.addEventListener("error",a),n.addEventListener("abort",a)});Ls.set(n,e)}let Vs={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Ls.get(n);if(e==="objectStoreNames")return n.objectStoreNames||nu.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return _t(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function mp(n){Vs=n(Vs)}function gp(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(Ts(this),e,...t);return nu.set(r,e.sort?e.sort():[e]),_t(r)}:dp().includes(n)?function(...e){return n.apply(Ts(this),e),_t(tu.get(this))}:function(...e){return _t(n.apply(Ts(this),e))}}function yp(n){return typeof n=="function"?gp(n):(n instanceof IDBTransaction&&pp(n),up(n,hp())?new Proxy(n,Vs):n)}function _t(n){if(n instanceof IDBRequest)return fp(n);if(vs.has(n))return vs.get(n);const e=yp(n);return e!==n&&(vs.set(n,e),uo.set(e,n)),e}const Ts=n=>uo.get(n);function ru(n,e,{blocked:t,upgrade:r,blocking:i,terminated:s}={}){const a=indexedDB.open(n,e),c=_t(a);return r&&a.addEventListener("upgradeneeded",u=>{r(_t(a.result),u.oldVersion,u.newVersion,_t(a.transaction),u)}),t&&a.addEventListener("blocked",u=>t(u.oldVersion,u.newVersion,u)),c.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",d=>i(d.oldVersion,d.newVersion,d))}).catch(()=>{}),c}const _p=["get","getKey","getAll","getAllKeys","count"],vp=["put","add","delete","clear"],Es=new Map;function pc(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Es.get(e))return Es.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,i=vp.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(i||_p.includes(t)))return;const s=async function(a,...c){const u=this.transaction(a,i?"readwrite":"readonly");let d=u.store;return r&&(d=d.index(c.shift())),(await Promise.all([d[t](...c),i&&u.done]))[0]};return Es.set(e,s),s}mp(n=>({...n,get:(e,t,r)=>pc(e,t)||n.get(e,t,r),has:(e,t)=>!!pc(e,t)||n.has(e,t)}));/**
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
 */class Tp{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Ep(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function Ep(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ms="@firebase/app",mc="0.13.0";/**
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
 */const nt=new Pi("@firebase/app"),wp="@firebase/app-compat",Ip="@firebase/analytics-compat",bp="@firebase/analytics",Ap="@firebase/app-check-compat",Rp="@firebase/app-check",Cp="@firebase/auth",Sp="@firebase/auth-compat",Pp="@firebase/database",kp="@firebase/data-connect",Dp="@firebase/database-compat",xp="@firebase/functions",Np="@firebase/functions-compat",Op="@firebase/installations",Lp="@firebase/installations-compat",Vp="@firebase/messaging",Mp="@firebase/messaging-compat",Up="@firebase/performance",Fp="@firebase/performance-compat",Bp="@firebase/remote-config",$p="@firebase/remote-config-compat",jp="@firebase/storage",qp="@firebase/storage-compat",Hp="@firebase/firestore",zp="@firebase/ai",Gp="@firebase/firestore-compat",Wp="firebase",Kp="11.8.0";/**
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
 */const Us="[DEFAULT]",Qp={[Ms]:"fire-core",[wp]:"fire-core-compat",[bp]:"fire-analytics",[Ip]:"fire-analytics-compat",[Rp]:"fire-app-check",[Ap]:"fire-app-check-compat",[Cp]:"fire-auth",[Sp]:"fire-auth-compat",[Pp]:"fire-rtdb",[kp]:"fire-data-connect",[Dp]:"fire-rtdb-compat",[xp]:"fire-fn",[Np]:"fire-fn-compat",[Op]:"fire-iid",[Lp]:"fire-iid-compat",[Vp]:"fire-fcm",[Mp]:"fire-fcm-compat",[Up]:"fire-perf",[Fp]:"fire-perf-compat",[Bp]:"fire-rc",[$p]:"fire-rc-compat",[jp]:"fire-gcs",[qp]:"fire-gcs-compat",[Hp]:"fire-fst",[Gp]:"fire-fst-compat",[zp]:"fire-vertex","fire-js":"fire-js",[Wp]:"fire-js-all"};/**
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
 */const si=new Map,Yp=new Map,Fs=new Map;function gc(n,e){try{n.container.addComponent(e)}catch(t){nt.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function We(n){const e=n.name;if(Fs.has(e))return nt.debug(`There were multiple attempts to register component ${e}.`),!1;Fs.set(e,n);for(const t of si.values())gc(t,n);for(const t of Yp.values())gc(t,n);return!0}function zt(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Pe(n){return n==null?!1:n.settings!==void 0}/**
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
 */const Jp={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},vt=new Ht("app","Firebase",Jp);/**
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
 */class Xp{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Me("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw vt.create("app-deleted",{appName:this._name})}}/**
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
 */const Tn=Kp;function iu(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Us,automaticDataCollectionEnabled:!0},e),i=r.name;if(typeof i!="string"||!i)throw vt.create("bad-app-name",{appName:String(i)});if(t||(t=Kl()),!t)throw vt.create("no-options");const s=si.get(i);if(s){if(wt(t,s.options)&&wt(r,s.config))return s;throw vt.create("duplicate-app",{appName:i})}const a=new sp(i);for(const u of Fs.values())a.addComponent(u);const c=new Xp(t,r,a);return si.set(i,c),c}function ho(n=Us){const e=si.get(n);if(!e&&n===Us&&Kl())return iu();if(!e)throw vt.create("no-app",{appName:n});return e}function xe(n,e,t){var r;let i=(r=Qp[n])!==null&&r!==void 0?r:n;t&&(i+=`-${t}`);const s=i.match(/\s|\//),a=e.match(/\s|\//);if(s||a){const c=[`Unable to register library "${i}" with version "${e}":`];s&&c.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&a&&c.push("and"),a&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),nt.warn(c.join(" "));return}We(new Me(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const Zp="firebase-heartbeat-database",em=1,rr="firebase-heartbeat-store";let ws=null;function su(){return ws||(ws=ru(Zp,em,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(rr)}catch(t){console.warn(t)}}}}).catch(n=>{throw vt.create("idb-open",{originalErrorMessage:n.message})})),ws}async function tm(n){try{const t=(await su()).transaction(rr),r=await t.objectStore(rr).get(ou(n));return await t.done,r}catch(e){if(e instanceof Fe)nt.warn(e.message);else{const t=vt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});nt.warn(t.message)}}}async function yc(n,e){try{const r=(await su()).transaction(rr,"readwrite");await r.objectStore(rr).put(e,ou(n)),await r.done}catch(t){if(t instanceof Fe)nt.warn(t.message);else{const r=vt.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});nt.warn(r.message)}}}function ou(n){return`${n.name}!${n.options.appId}`}/**
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
 */const nm=1024,rm=30;class im{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new om(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=_c();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(a=>a.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats.length>rm){const a=am(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){nt.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=_c(),{heartbeatsToSend:r,unsentEntries:i}=sm(this._heartbeatsCache.heartbeats),s=ii(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(t){return nt.warn(t),""}}}function _c(){return new Date().toISOString().substring(0,10)}function sm(n,e=nm){const t=[];let r=n.slice();for(const i of n){const s=t.find(a=>a.agent===i.agent);if(s){if(s.dates.push(i.date),vc(t)>e){s.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),vc(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class om{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Zl()?eu().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await tm(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return yc(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return yc(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function vc(n){return ii(JSON.stringify({version:2,heartbeats:n})).length}function am(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let r=1;r<n.length;r++)n[r].date<t&&(t=n[r].date,e=r);return e}/**
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
 */function cm(n){We(new Me("platform-logger",e=>new Tp(e),"PRIVATE")),We(new Me("heartbeat",e=>new im(e),"PRIVATE")),xe(Ms,mc,n),xe(Ms,mc,"esm2017"),xe("fire-js","")}cm("");var lm="firebase",um="11.8.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */xe(lm,um,"app");const au="@firebase/installations",fo="0.6.17";/**
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
 */const cu=1e4,lu=`w:${fo}`,uu="FIS_v2",hm="https://firebaseinstallations.googleapis.com/v1",dm=60*60*1e3,fm="installations",pm="Installations";/**
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
 */const mm={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Ft=new Ht(fm,pm,mm);function hu(n){return n instanceof Fe&&n.code.includes("request-failed")}/**
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
 */function du({projectId:n}){return`${hm}/projects/${n}/installations`}function fu(n){return{token:n.token,requestStatus:2,expiresIn:ym(n.expiresIn),creationTime:Date.now()}}async function pu(n,e){const r=(await e.json()).error;return Ft.create("request-failed",{requestName:n,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function mu({apiKey:n}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n})}function gm(n,{refreshToken:e}){const t=mu(n);return t.append("Authorization",_m(e)),t}async function gu(n){const e=await n();return e.status>=500&&e.status<600?n():e}function ym(n){return Number(n.replace("s","000"))}function _m(n){return`${uu} ${n}`}/**
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
 */async function vm({appConfig:n,heartbeatServiceProvider:e},{fid:t}){const r=du(n),i=mu(n),s=e.getImmediate({optional:!0});if(s){const d=await s.getHeartbeatsHeader();d&&i.append("x-firebase-client",d)}const a={fid:t,authVersion:uu,appId:n.appId,sdkVersion:lu},c={method:"POST",headers:i,body:JSON.stringify(a)},u=await gu(()=>fetch(r,c));if(u.ok){const d=await u.json();return{fid:d.fid||t,registrationStatus:2,refreshToken:d.refreshToken,authToken:fu(d.authToken)}}else throw await pu("Create Installation",u)}/**
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
 */function yu(n){return new Promise(e=>{setTimeout(e,n)})}/**
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
 */function Tm(n){return btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const Em=/^[cdef][\w-]{21}$/,Bs="";function wm(){try{const n=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(n),n[0]=112+n[0]%16;const t=Im(n);return Em.test(t)?t:Bs}catch{return Bs}}function Im(n){return Tm(n).substr(0,22)}/**
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
 */function ki(n){return`${n.appName}!${n.appId}`}/**
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
 */const _u=new Map;function vu(n,e){const t=ki(n);Tu(t,e),bm(t,e)}function Tu(n,e){const t=_u.get(n);if(t)for(const r of t)r(e)}function bm(n,e){const t=Am();t&&t.postMessage({key:n,fid:e}),Rm()}let Mt=null;function Am(){return!Mt&&"BroadcastChannel"in self&&(Mt=new BroadcastChannel("[Firebase] FID Change"),Mt.onmessage=n=>{Tu(n.data.key,n.data.fid)}),Mt}function Rm(){_u.size===0&&Mt&&(Mt.close(),Mt=null)}/**
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
 */const Cm="firebase-installations-database",Sm=1,Bt="firebase-installations-store";let Is=null;function po(){return Is||(Is=ru(Cm,Sm,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(Bt)}}})),Is}async function oi(n,e){const t=ki(n),i=(await po()).transaction(Bt,"readwrite"),s=i.objectStore(Bt),a=await s.get(t);return await s.put(e,t),await i.done,(!a||a.fid!==e.fid)&&vu(n,e.fid),e}async function Eu(n){const e=ki(n),r=(await po()).transaction(Bt,"readwrite");await r.objectStore(Bt).delete(e),await r.done}async function Di(n,e){const t=ki(n),i=(await po()).transaction(Bt,"readwrite"),s=i.objectStore(Bt),a=await s.get(t),c=e(a);return c===void 0?await s.delete(t):await s.put(c,t),await i.done,c&&(!a||a.fid!==c.fid)&&vu(n,c.fid),c}/**
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
 */async function mo(n){let e;const t=await Di(n.appConfig,r=>{const i=Pm(r),s=km(n,i);return e=s.registrationPromise,s.installationEntry});return t.fid===Bs?{installationEntry:await e}:{installationEntry:t,registrationPromise:e}}function Pm(n){const e=n||{fid:wm(),registrationStatus:0};return wu(e)}function km(n,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(Ft.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const t={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=Dm(n,t);return{installationEntry:t,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:xm(n)}:{installationEntry:e}}async function Dm(n,e){try{const t=await vm(n,e);return oi(n.appConfig,t)}catch(t){throw hu(t)&&t.customData.serverCode===409?await Eu(n.appConfig):await oi(n.appConfig,{fid:e.fid,registrationStatus:0}),t}}async function xm(n){let e=await Tc(n.appConfig);for(;e.registrationStatus===1;)await yu(100),e=await Tc(n.appConfig);if(e.registrationStatus===0){const{installationEntry:t,registrationPromise:r}=await mo(n);return r||t}return e}function Tc(n){return Di(n,e=>{if(!e)throw Ft.create("installation-not-found");return wu(e)})}function wu(n){return Nm(n)?{fid:n.fid,registrationStatus:0}:n}function Nm(n){return n.registrationStatus===1&&n.registrationTime+cu<Date.now()}/**
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
 */async function Om({appConfig:n,heartbeatServiceProvider:e},t){const r=Lm(n,t),i=gm(n,t),s=e.getImmediate({optional:!0});if(s){const d=await s.getHeartbeatsHeader();d&&i.append("x-firebase-client",d)}const a={installation:{sdkVersion:lu,appId:n.appId}},c={method:"POST",headers:i,body:JSON.stringify(a)},u=await gu(()=>fetch(r,c));if(u.ok){const d=await u.json();return fu(d)}else throw await pu("Generate Auth Token",u)}function Lm(n,{fid:e}){return`${du(n)}/${e}/authTokens:generate`}/**
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
 */async function go(n,e=!1){let t;const r=await Di(n.appConfig,s=>{if(!Iu(s))throw Ft.create("not-registered");const a=s.authToken;if(!e&&Um(a))return s;if(a.requestStatus===1)return t=Vm(n,e),s;{if(!navigator.onLine)throw Ft.create("app-offline");const c=Bm(s);return t=Mm(n,c),c}});return t?await t:r.authToken}async function Vm(n,e){let t=await Ec(n.appConfig);for(;t.authToken.requestStatus===1;)await yu(100),t=await Ec(n.appConfig);const r=t.authToken;return r.requestStatus===0?go(n,e):r}function Ec(n){return Di(n,e=>{if(!Iu(e))throw Ft.create("not-registered");const t=e.authToken;return $m(t)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function Mm(n,e){try{const t=await Om(n,e),r=Object.assign(Object.assign({},e),{authToken:t});return await oi(n.appConfig,r),t}catch(t){if(hu(t)&&(t.customData.serverCode===401||t.customData.serverCode===404))await Eu(n.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await oi(n.appConfig,r)}throw t}}function Iu(n){return n!==void 0&&n.registrationStatus===2}function Um(n){return n.requestStatus===2&&!Fm(n)}function Fm(n){const e=Date.now();return e<n.creationTime||n.creationTime+n.expiresIn<e+dm}function Bm(n){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},n),{authToken:e})}function $m(n){return n.requestStatus===1&&n.requestTime+cu<Date.now()}/**
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
 */async function jm(n){const e=n,{installationEntry:t,registrationPromise:r}=await mo(e);return r?r.catch(console.error):go(e).catch(console.error),t.fid}/**
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
 */async function qm(n,e=!1){const t=n;return await Hm(t),(await go(t,e)).token}async function Hm(n){const{registrationPromise:e}=await mo(n);e&&await e}/**
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
 */function zm(n){if(!n||!n.options)throw bs("App Configuration");if(!n.name)throw bs("App Name");const e=["projectId","apiKey","appId"];for(const t of e)if(!n.options[t])throw bs(t);return{appName:n.name,projectId:n.options.projectId,apiKey:n.options.apiKey,appId:n.options.appId}}function bs(n){return Ft.create("missing-app-config-values",{valueName:n})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bu="installations",Gm="installations-internal",Wm=n=>{const e=n.getProvider("app").getImmediate(),t=zm(e),r=zt(e,"heartbeat");return{app:e,appConfig:t,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},Km=n=>{const e=n.getProvider("app").getImmediate(),t=zt(e,bu).getImmediate();return{getId:()=>jm(t),getToken:i=>qm(t,i)}};function Qm(){We(new Me(bu,Wm,"PUBLIC")),We(new Me(Gm,Km,"PRIVATE"))}Qm();xe(au,fo);xe(au,fo,"esm2017");/**
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
 */const ai="analytics",Ym="firebase_id",Jm="origin",Xm=60*1e3,Zm="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",yo="https://www.googletagmanager.com/gtag/js";/**
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
 */const Ce=new Pi("@firebase/analytics");/**
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
 */const eg={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},ke=new Ht("analytics","Analytics",eg);/**
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
 */function tg(n){if(!n.startsWith(yo)){const e=ke.create("invalid-gtag-resource",{gtagURL:n});return Ce.warn(e.message),""}return n}function Au(n){return Promise.all(n.map(e=>e.catch(t=>t)))}function ng(n,e){let t;return window.trustedTypes&&(t=window.trustedTypes.createPolicy(n,e)),t}function rg(n,e){const t=ng("firebase-js-sdk-policy",{createScriptURL:tg}),r=document.createElement("script"),i=`${yo}?l=${n}&id=${e}`;r.src=t?t==null?void 0:t.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function ig(n){let e=[];return Array.isArray(window[n])?e=window[n]:window[n]=e,e}async function sg(n,e,t,r,i,s){const a=r[i];try{if(a)await e[a];else{const u=(await Au(t)).find(d=>d.measurementId===i);u&&await e[u.appId]}}catch(c){Ce.error(c)}n("config",i,s)}async function og(n,e,t,r,i){try{let s=[];if(i&&i.send_to){let a=i.send_to;Array.isArray(a)||(a=[a]);const c=await Au(t);for(const u of a){const d=c.find(g=>g.measurementId===u),p=d&&e[d.appId];if(p)s.push(p);else{s=[];break}}}s.length===0&&(s=Object.values(e)),await Promise.all(s),n("event",r,i||{})}catch(s){Ce.error(s)}}function ag(n,e,t,r){async function i(s,...a){try{if(s==="event"){const[c,u]=a;await og(n,e,t,c,u)}else if(s==="config"){const[c,u]=a;await sg(n,e,t,r,c,u)}else if(s==="consent"){const[c,u]=a;n("consent",c,u)}else if(s==="get"){const[c,u,d]=a;n("get",c,u,d)}else if(s==="set"){const[c]=a;n("set",c)}else n(s,...a)}catch(c){Ce.error(c)}}return i}function cg(n,e,t,r,i){let s=function(...a){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(s=window[i]),window[i]=ag(s,n,e,t),{gtagCore:s,wrappedGtag:window[i]}}function lg(n){const e=window.document.getElementsByTagName("script");for(const t of Object.values(e))if(t.src&&t.src.includes(yo)&&t.src.includes(n))return t;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ug=30,hg=1e3;class dg{constructor(e={},t=hg){this.throttleMetadata=e,this.intervalMillis=t}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const Ru=new dg;function fg(n){return new Headers({Accept:"application/json","x-goog-api-key":n})}async function pg(n){var e;const{appId:t,apiKey:r}=n,i={method:"GET",headers:fg(r)},s=Zm.replace("{app-id}",t),a=await fetch(s,i);if(a.status!==200&&a.status!==304){let c="";try{const u=await a.json();!((e=u.error)===null||e===void 0)&&e.message&&(c=u.error.message)}catch{}throw ke.create("config-fetch-failed",{httpStatus:a.status,responseMessage:c})}return a.json()}async function mg(n,e=Ru,t){const{appId:r,apiKey:i,measurementId:s}=n.options;if(!r)throw ke.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw ke.create("no-api-key")}const a=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},c=new _g;return setTimeout(async()=>{c.abort()},Xm),Cu({appId:r,apiKey:i,measurementId:s},a,c,e)}async function Cu(n,{throttleEndTimeMillis:e,backoffCount:t},r,i=Ru){var s;const{appId:a,measurementId:c}=n;try{await gg(r,e)}catch(u){if(c)return Ce.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${c} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:a,measurementId:c};throw u}try{const u=await pg(n);return i.deleteThrottleMetadata(a),u}catch(u){const d=u;if(!yg(d)){if(i.deleteThrottleMetadata(a),c)return Ce.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${c} provided in the "measurementId" field in the local Firebase config. [${d==null?void 0:d.message}]`),{appId:a,measurementId:c};throw u}const p=Number((s=d==null?void 0:d.customData)===null||s===void 0?void 0:s.httpStatus)===503?hc(t,i.intervalMillis,ug):hc(t,i.intervalMillis),g={throttleEndTimeMillis:Date.now()+p,backoffCount:t+1};return i.setThrottleMetadata(a,g),Ce.debug(`Calling attemptFetch again in ${p} millis`),Cu(n,g,r,i)}}function gg(n,e){return new Promise((t,r)=>{const i=Math.max(e-Date.now(),0),s=setTimeout(t,i);n.addEventListener(()=>{clearTimeout(s),r(ke.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function yg(n){if(!(n instanceof Fe)||!n.customData)return!1;const e=Number(n.customData.httpStatus);return e===429||e===500||e===503||e===504}class _g{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function vg(n,e,t,r,i){if(i&&i.global){n("event",t,r);return}else{const s=await e,a=Object.assign(Object.assign({},r),{send_to:s});n("event",t,a)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Tg(){if(Zl())try{await eu()}catch(n){return Ce.warn(ke.create("indexeddb-unavailable",{errorInfo:n==null?void 0:n.toString()}).message),!1}else return Ce.warn(ke.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function Eg(n,e,t,r,i,s,a){var c;const u=mg(n);u.then(R=>{t[R.measurementId]=R.appId,n.options.measurementId&&R.measurementId!==n.options.measurementId&&Ce.warn(`The measurement ID in the local Firebase config (${n.options.measurementId}) does not match the measurement ID fetched from the server (${R.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(R=>Ce.error(R)),e.push(u);const d=Tg().then(R=>{if(R)return r.getId()}),[p,g]=await Promise.all([u,d]);lg(s)||rg(s,p.measurementId),i("js",new Date);const v=(c=a==null?void 0:a.config)!==null&&c!==void 0?c:{};return v[Jm]="firebase",v.update=!0,g!=null&&(v[Ym]=g),i("config",p.measurementId,v),p.measurementId}/**
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
 */class wg{constructor(e){this.app=e}_delete(){return delete Jn[this.app.options.appId],Promise.resolve()}}let Jn={},wc=[];const Ic={};let As="dataLayer",Ig="gtag",bc,Su,Ac=!1;function bg(){const n=[];if(Xl()&&n.push("This is a browser extension environment."),Hf()||n.push("Cookies are not available."),n.length>0){const e=n.map((r,i)=>`(${i+1}) ${r}`).join(" "),t=ke.create("invalid-analytics-context",{errorInfo:e});Ce.warn(t.message)}}function Ag(n,e,t){bg();const r=n.options.appId;if(!r)throw ke.create("no-app-id");if(!n.options.apiKey)if(n.options.measurementId)Ce.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${n.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw ke.create("no-api-key");if(Jn[r]!=null)throw ke.create("already-exists",{id:r});if(!Ac){ig(As);const{wrappedGtag:s,gtagCore:a}=cg(Jn,wc,Ic,As,Ig);Su=s,bc=a,Ac=!0}return Jn[r]=Eg(n,wc,Ic,e,bc,As,t),new wg(n)}function Rg(n=ho()){n=Ie(n);const e=zt(n,ai);return e.isInitialized()?e.getImmediate():Cg(n)}function Cg(n,e={}){const t=zt(n,ai);if(t.isInitialized()){const i=t.getImmediate();if(wt(e,t.getOptions()))return i;throw ke.create("already-initialized")}return t.initialize({options:e})}function Sg(n,e,t,r){n=Ie(n),vg(Su,Jn[n.app.options.appId],e,t,r).catch(i=>Ce.error(i))}const Rc="@firebase/analytics",Cc="0.10.16";function Pg(){We(new Me(ai,(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return Ag(r,i,t)},"PUBLIC")),We(new Me("analytics-internal",n,"PRIVATE")),xe(Rc,Cc),xe(Rc,Cc,"esm2017");function n(e){try{const t=e.getProvider(ai).getImmediate();return{logEvent:(r,i,s)=>Sg(t,r,i,s)}}catch(t){throw ke.create("interop-component-reg-failed",{reason:t})}}}Pg();function _o(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(n);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(n,r[i])&&(t[r[i]]=n[r[i]]);return t}function Pu(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const kg=Pu,ku=new Ht("auth","Firebase",Pu());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ci=new Pi("@firebase/auth");function Dg(n,...e){ci.logLevel<=H.WARN&&ci.warn(`Auth (${Tn}): ${n}`,...e)}function Qr(n,...e){ci.logLevel<=H.ERROR&&ci.error(`Auth (${Tn}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ue(n,...e){throw vo(n,...e)}function $e(n,...e){return vo(n,...e)}function Du(n,e,t){const r=Object.assign(Object.assign({},kg()),{[e]:t});return new Ht("auth","Firebase",r).create(e,{appName:n.name})}function je(n){return Du(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function vo(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return ku.create(n,...e)}function U(n,e,...t){if(!n)throw vo(e,...t)}function Ze(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Qr(e),new Error(e)}function rt(n,e){n||Ze(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $s(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function xg(){return Sc()==="http:"||Sc()==="https:"}function Sc(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ng(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(xg()||Xl()||"connection"in navigator)?navigator.onLine:!0}function Og(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mr{constructor(e,t){this.shortDelay=e,this.longDelay=t,rt(t>e,"Short delay should be less than long delay!"),this.isMobile=Uf()||$f()}get(){return Ng()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function To(n,e){rt(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xu{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Ze("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Ze("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Ze("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lg={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vg=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],Mg=new mr(3e4,6e4);function ot(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function at(n,e,t,r,i={}){return Nu(n,i,async()=>{let s={},a={};r&&(e==="GET"?a=r:s={body:JSON.stringify(r)});const c=pr(Object.assign({key:n.config.apiKey},a)).slice(1),u=await n._getAdditionalHeaders();u["Content-Type"]="application/json",n.languageCode&&(u["X-Firebase-Locale"]=n.languageCode);const d=Object.assign({method:e,headers:u},s);return Bf()||(d.referrerPolicy="no-referrer"),n.emulatorConfig&&fr(n.emulatorConfig.host)&&(d.credentials="include"),xu.fetch()(await Ou(n,n.config.apiHost,t,c),d)})}async function Nu(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},Lg),e);try{const i=new Fg(n),s=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();const a=await s.json();if("needConfirmation"in a)throw $r(n,"account-exists-with-different-credential",a);if(s.ok&&!("errorMessage"in a))return a;{const c=s.ok?a.errorMessage:a.error.message,[u,d]=c.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw $r(n,"credential-already-in-use",a);if(u==="EMAIL_EXISTS")throw $r(n,"email-already-in-use",a);if(u==="USER_DISABLED")throw $r(n,"user-disabled",a);const p=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw Du(n,p,d);Ue(n,p)}}catch(i){if(i instanceof Fe)throw i;Ue(n,"network-request-failed",{message:String(i)})}}async function En(n,e,t,r,i={}){const s=await at(n,e,t,r,i);return"mfaPendingCredential"in s&&Ue(n,"multi-factor-auth-required",{_serverResponse:s}),s}async function Ou(n,e,t,r){const i=`${e}${t}?${r}`,s=n,a=s.config.emulator?To(n.config,i):`${n.config.apiScheme}://${i}`;return Vg.includes(t)&&(await s._persistenceManagerAvailable,s._getPersistenceType()==="COOKIE")?s._getPersistence()._getFinalTarget(a).toString():a}function Ug(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Fg{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r($e(this.auth,"network-request-failed")),Mg.get())})}}function $r(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const i=$e(n,e,r);return i.customData._tokenResponse=t,i}function Pc(n){return n!==void 0&&n.enterprise!==void 0}class Bg{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return Ug(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function $g(n,e){return at(n,"GET","/v2/recaptchaConfig",ot(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jg(n,e){return at(n,"POST","/v1/accounts:delete",e)}async function li(n,e){return at(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xn(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function qg(n,e=!1){const t=Ie(n),r=await t.getIdToken(e),i=Eo(r);U(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,a=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Xn(Rs(i.auth_time)),issuedAtTime:Xn(Rs(i.iat)),expirationTime:Xn(Rs(i.exp)),signInProvider:a||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Rs(n){return Number(n)*1e3}function Eo(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return Qr("JWT malformed, contained fewer than 3 sections"),null;try{const i=Gl(t);return i?JSON.parse(i):(Qr("Failed to decode base64 JWT payload"),null)}catch(i){return Qr("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function kc(n){const e=Eo(n);return U(e,"internal-error"),U(typeof e.exp<"u","internal-error"),U(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dn(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof Fe&&Hg(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function Hg({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zg{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class js{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Xn(this.lastLoginAt),this.creationTime=Xn(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function ui(n){var e;const t=n.auth,r=await n.getIdToken(),i=await dn(n,li(t,{idToken:r}));U(i==null?void 0:i.users.length,t,"internal-error");const s=i.users[0];n._notifyReloadListener(s);const a=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?Lu(s.providerUserInfo):[],c=Wg(n.providerData,a),u=n.isAnonymous,d=!(n.email&&s.passwordHash)&&!(c!=null&&c.length),p=u?d:!1,g={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:c,metadata:new js(s.createdAt,s.lastLoginAt),isAnonymous:p};Object.assign(n,g)}async function Gg(n){const e=Ie(n);await ui(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Wg(n,e){return[...n.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function Lu(n){return n.map(e=>{var{providerId:t}=e,r=_o(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Kg(n,e){const t=await Nu(n,{},async()=>{const r=pr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=n.config,a=await Ou(n,i,"/v1/token",`key=${s}`),c=await n._getAdditionalHeaders();return c["Content-Type"]="application/x-www-form-urlencoded",xu.fetch()(a,{method:"POST",headers:c,body:r})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function Qg(n,e){return at(n,"POST","/v2/accounts:revokeToken",ot(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class an{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){U(e.idToken,"internal-error"),U(typeof e.idToken<"u","internal-error"),U(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):kc(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){U(e.length!==0,"internal-error");const t=kc(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(U(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:i,expiresIn:s}=await Kg(e,t);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:i,expirationTime:s}=t,a=new an;return r&&(U(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),i&&(U(typeof i=="string","internal-error",{appName:e}),a.accessToken=i),s&&(U(typeof s=="number","internal-error",{appName:e}),a.expirationTime=s),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new an,this.toJSON())}_performRefresh(){return Ze("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dt(n,e){U(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Le{constructor(e){var{uid:t,auth:r,stsTokenManager:i}=e,s=_o(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new zg(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new js(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await dn(this,this.stsTokenManager.getToken(this.auth,e));return U(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return qg(this,e)}reload(){return Gg(this)}_assign(e){this!==e&&(U(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Le(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){U(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await ui(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Pe(this.auth.app))return Promise.reject(je(this.auth));const e=await this.getIdToken();return await dn(this,jg(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,i,s,a,c,u,d,p;const g=(r=t.displayName)!==null&&r!==void 0?r:void 0,v=(i=t.email)!==null&&i!==void 0?i:void 0,R=(s=t.phoneNumber)!==null&&s!==void 0?s:void 0,C=(a=t.photoURL)!==null&&a!==void 0?a:void 0,D=(c=t.tenantId)!==null&&c!==void 0?c:void 0,P=(u=t._redirectEventId)!==null&&u!==void 0?u:void 0,j=(d=t.createdAt)!==null&&d!==void 0?d:void 0,O=(p=t.lastLoginAt)!==null&&p!==void 0?p:void 0,{uid:L,emailVerified:K,isAnonymous:ce,providerData:X,stsTokenManager:E}=t;U(L&&E,e,"internal-error");const m=an.fromJSON(this.name,E);U(typeof L=="string",e,"internal-error"),dt(g,e.name),dt(v,e.name),U(typeof K=="boolean",e,"internal-error"),U(typeof ce=="boolean",e,"internal-error"),dt(R,e.name),dt(C,e.name),dt(D,e.name),dt(P,e.name),dt(j,e.name),dt(O,e.name);const _=new Le({uid:L,auth:e,email:v,emailVerified:K,displayName:g,isAnonymous:ce,photoURL:C,phoneNumber:R,tenantId:D,stsTokenManager:m,createdAt:j,lastLoginAt:O});return X&&Array.isArray(X)&&(_.providerData=X.map(T=>Object.assign({},T))),P&&(_._redirectEventId=P),_}static async _fromIdTokenResponse(e,t,r=!1){const i=new an;i.updateFromServerResponse(t);const s=new Le({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await ui(s),s}static async _fromGetAccountInfoResponse(e,t,r){const i=t.users[0];U(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?Lu(i.providerUserInfo):[],a=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),c=new an;c.updateFromIdToken(r);const u=new Le({uid:i.localId,auth:e,stsTokenManager:c,isAnonymous:a}),d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new js(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,d),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dc=new Map;function et(n){rt(n instanceof Function,"Expected a class definition");let e=Dc.get(n);return e?(rt(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Dc.set(n,e),e)}/**
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
 */class Vu{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Vu.type="NONE";const xc=Vu;/**
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
 */function Yr(n,e,t){return`firebase:${n}:${e}:${t}`}class cn{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Yr(this.userKey,i.apiKey,s),this.fullPersistenceKey=Yr("persistence",i.apiKey,s),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await li(this.auth,{idToken:e}).catch(()=>{});return t?Le._fromGetAccountInfoResponse(this.auth,t,e):null}return Le._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new cn(et(xc),e,r);const i=(await Promise.all(t.map(async d=>{if(await d._isAvailable())return d}))).filter(d=>d);let s=i[0]||et(xc);const a=Yr(r,e.config.apiKey,e.name);let c=null;for(const d of t)try{const p=await d._get(a);if(p){let g;if(typeof p=="string"){const v=await li(e,{idToken:p}).catch(()=>{});if(!v)break;g=await Le._fromGetAccountInfoResponse(e,v,p)}else g=Le._fromJSON(e,p);d!==s&&(c=g),s=d;break}}catch{}const u=i.filter(d=>d._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new cn(s,e,r):(s=u[0],c&&await s._set(a,c.toJSON()),await Promise.all(t.map(async d=>{if(d!==s)try{await d._remove(a)}catch{}})),new cn(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nc(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Bu(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Mu(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(ju(e))return"Blackberry";if(qu(e))return"Webos";if(Uu(e))return"Safari";if((e.includes("chrome/")||Fu(e))&&!e.includes("edge/"))return"Chrome";if($u(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Mu(n=we()){return/firefox\//i.test(n)}function Uu(n=we()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Fu(n=we()){return/crios\//i.test(n)}function Bu(n=we()){return/iemobile/i.test(n)}function $u(n=we()){return/android/i.test(n)}function ju(n=we()){return/blackberry/i.test(n)}function qu(n=we()){return/webos/i.test(n)}function wo(n=we()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function Yg(n=we()){var e;return wo(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Jg(){return jf()&&document.documentMode===10}function Hu(n=we()){return wo(n)||$u(n)||qu(n)||ju(n)||/windows phone/i.test(n)||Bu(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zu(n,e=[]){let t;switch(n){case"Browser":t=Nc(we());break;case"Worker":t=`${Nc(we())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Tn}/${r}`}/**
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
 */class Xg{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=s=>new Promise((a,c)=>{try{const u=e(s);a(u)}catch(u){c(u)}});r.onAbort=t,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const i of t)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function Zg(n,e={}){return at(n,"GET","/v2/passwordPolicy",ot(n,e))}/**
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
 */const ey=6;class ty{constructor(e){var t,r,i,s;const a=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=a.minPasswordLength)!==null&&t!==void 0?t:ey,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,i,s,a,c;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(t=u.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(s=u.containsUppercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(a=u.containsNumericCharacter)!==null&&a!==void 0?a:!0),u.isValid&&(u.isValid=(c=u.containsNonAlphanumericCharacter)!==null&&c!==void 0?c:!0),u}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),i&&(t.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ny{constructor(e,t,r,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Oc(this),this.idTokenSubscription=new Oc(this),this.beforeStateQueue=new Xg(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=ku,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(s=>this._resolvePersistenceManagerAvailable=s)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=et(t)),this._initializationPromise=this.queue(async()=>{var r,i,s;if(!this._deleted&&(this.persistenceManager=await cn.create(this,e),(r=this._resolvePersistenceManagerAvailable)===null||r===void 0||r.call(this),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await li(this,{idToken:e}),r=await Le._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(Pe(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(c,c))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,c=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!a||a===c)&&(u!=null&&u.user)&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(a){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return U(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await ui(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Og()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Pe(this.app))return Promise.reject(je(this));const t=e?Ie(e):null;return t&&U(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&U(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Pe(this.app)?Promise.reject(je(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Pe(this.app)?Promise.reject(je(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(et(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Zg(this),t=new ty(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Ht("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await Qg(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&et(e)||this._popupRedirectResolver;U(t,this,"argument-error"),this.redirectPersistenceManager=await cn.create(this,[et(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,i){if(this._deleted)return()=>{};const s=typeof t=="function"?t:t.next.bind(t);let a=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(U(c,this,"internal-error"),c.then(()=>{a||s(this.currentUser)}),typeof t=="function"){const u=e.addObserver(t,r,i);return()=>{a=!0,u()}}else{const u=e.addObserver(t);return()=>{a=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return U(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=zu(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(t["X-Firebase-AppCheck"]=i),t}async _getAppCheckToken(){var e;if(Pe(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&Dg(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function kt(n){return Ie(n)}class Oc{constructor(e){this.auth=e,this.observer=null,this.addObserver=Qf(t=>this.observer=t)}get next(){return U(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let xi={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function ry(n){xi=n}function Gu(n){return xi.loadJS(n)}function iy(){return xi.recaptchaEnterpriseScript}function sy(){return xi.gapiScript}function oy(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class ay{constructor(){this.enterprise=new cy}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class cy{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const ly="recaptcha-enterprise",Wu="NO_RECAPTCHA";class uy{constructor(e){this.type=ly,this.auth=kt(e)}async verify(e="verify",t=!1){async function r(s){if(!t){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(a,c)=>{$g(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const d=new Bg(u);return s.tenantId==null?s._agentRecaptchaConfig=d:s._tenantRecaptchaConfigs[s.tenantId]=d,a(d.siteKey)}}).catch(u=>{c(u)})})}function i(s,a,c){const u=window.grecaptcha;Pc(u)?u.enterprise.ready(()=>{u.enterprise.execute(s,{action:e}).then(d=>{a(d)}).catch(()=>{a(Wu)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new ay().execute("siteKey",{action:"verify"}):new Promise((s,a)=>{r(this.auth).then(c=>{if(!t&&Pc(window.grecaptcha))i(c,s,a);else{if(typeof window>"u"){a(new Error("RecaptchaVerifier is only supported in browser"));return}let u=iy();u.length!==0&&(u+=c),Gu(u).then(()=>{i(c,s,a)}).catch(d=>{a(d)})}}).catch(c=>{a(c)})})}}async function Lc(n,e,t,r=!1,i=!1){const s=new uy(n);let a;if(i)a=Wu;else try{a=await s.verify(t)}catch{a=await s.verify(t,!0)}const c=Object.assign({},e);if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in c){const u=c.phoneEnrollmentInfo.phoneNumber,d=c.phoneEnrollmentInfo.recaptchaToken;Object.assign(c,{phoneEnrollmentInfo:{phoneNumber:u,recaptchaToken:d,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in c){const u=c.phoneSignInInfo.recaptchaToken;Object.assign(c,{phoneSignInInfo:{recaptchaToken:u,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return c}return r?Object.assign(c,{captchaResp:a}):Object.assign(c,{captchaResponse:a}),Object.assign(c,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(c,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),c}async function qs(n,e,t,r,i){var s;if(!((s=n._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const a=await Lc(n,e,t,t==="getOobCode");return r(n,a)}else return r(n,e).catch(async a=>{if(a.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const c=await Lc(n,e,t,t==="getOobCode");return r(n,c)}else return Promise.reject(a)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hy(n,e){const t=zt(n,"auth");if(t.isInitialized()){const i=t.getImmediate(),s=t.getOptions();if(wt(s,e??{}))return i;Ue(i,"already-initialized")}return t.initialize({options:e})}function dy(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(et);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function fy(n,e,t){const r=kt(n);U(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=Ku(e),{host:a,port:c}=py(e),u=c===null?"":`:${c}`,d={url:`${s}//${a}${u}/`},p=Object.freeze({host:a,port:c,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!r._canInitEmulator){U(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),U(wt(d,r.config.emulator)&&wt(p,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=d,r.emulatorConfig=p,r.settings.appVerificationDisabledForTesting=!0,fr(a)?(Yl(`${s}//${a}${u}`),Jl("Auth",!0)):my()}function Ku(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function py(n){const e=Ku(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Vc(r.substr(s.length+1))}}else{const[s,a]=r.split(":");return{host:s,port:Vc(a)}}}function Vc(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function my(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Io{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Ze("not implemented")}_getIdTokenResponse(e){return Ze("not implemented")}_linkToIdToken(e,t){return Ze("not implemented")}_getReauthenticationResolver(e){return Ze("not implemented")}}async function gy(n,e){return at(n,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yy(n,e){return En(n,"POST","/v1/accounts:signInWithPassword",ot(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _y(n,e){return En(n,"POST","/v1/accounts:signInWithEmailLink",ot(n,e))}async function vy(n,e){return En(n,"POST","/v1/accounts:signInWithEmailLink",ot(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ir extends Io{constructor(e,t,r,i=null){super("password",r),this._email=e,this._password=t,this._tenantId=i}static _fromEmailAndPassword(e,t){return new ir(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new ir(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return qs(e,t,"signInWithPassword",yy);case"emailLink":return _y(e,{email:this._email,oobCode:this._password});default:Ue(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return qs(e,r,"signUpPassword",gy);case"emailLink":return vy(e,{idToken:t,email:this._email,oobCode:this._password});default:Ue(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ln(n,e){return En(n,"POST","/v1/accounts:signInWithIdp",ot(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ty="http://localhost";class $t extends Io{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new $t(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Ue("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=t,s=_o(t,["providerId","signInMethod"]);if(!r||!i)return null;const a=new $t(r,i);return a.idToken=s.idToken||void 0,a.accessToken=s.accessToken||void 0,a.secret=s.secret,a.nonce=s.nonce,a.pendingToken=s.pendingToken||null,a}_getIdTokenResponse(e){const t=this.buildRequest();return ln(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,ln(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,ln(e,t)}buildRequest(){const e={requestUri:Ty,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=pr(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ey(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function wy(n){const e=zn(Gn(n)).link,t=e?zn(Gn(e)).deep_link_id:null,r=zn(Gn(n)).deep_link_id;return(r?zn(Gn(r)).link:null)||r||t||e||n}class bo{constructor(e){var t,r,i,s,a,c;const u=zn(Gn(e)),d=(t=u.apiKey)!==null&&t!==void 0?t:null,p=(r=u.oobCode)!==null&&r!==void 0?r:null,g=Ey((i=u.mode)!==null&&i!==void 0?i:null);U(d&&p&&g,"argument-error"),this.apiKey=d,this.operation=g,this.code=p,this.continueUrl=(s=u.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(a=u.lang)!==null&&a!==void 0?a:null,this.tenantId=(c=u.tenantId)!==null&&c!==void 0?c:null}static parseLink(e){const t=wy(e);try{return new bo(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wn{constructor(){this.providerId=wn.PROVIDER_ID}static credential(e,t){return ir._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=bo.parseLink(t);return U(r,"argument-error"),ir._fromEmailAndCode(e,r.code,r.tenantId)}}wn.PROVIDER_ID="password";wn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";wn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qu{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class gr extends Qu{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft extends gr{constructor(){super("facebook.com")}static credential(e){return $t._fromParams({providerId:ft.PROVIDER_ID,signInMethod:ft.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ft.credentialFromTaggedObject(e)}static credentialFromError(e){return ft.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ft.credential(e.oauthAccessToken)}catch{return null}}}ft.FACEBOOK_SIGN_IN_METHOD="facebook.com";ft.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pt extends gr{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return $t._fromParams({providerId:pt.PROVIDER_ID,signInMethod:pt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return pt.credentialFromTaggedObject(e)}static credentialFromError(e){return pt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return pt.credential(t,r)}catch{return null}}}pt.GOOGLE_SIGN_IN_METHOD="google.com";pt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt extends gr{constructor(){super("github.com")}static credential(e){return $t._fromParams({providerId:mt.PROVIDER_ID,signInMethod:mt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return mt.credentialFromTaggedObject(e)}static credentialFromError(e){return mt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return mt.credential(e.oauthAccessToken)}catch{return null}}}mt.GITHUB_SIGN_IN_METHOD="github.com";mt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt extends gr{constructor(){super("twitter.com")}static credential(e,t){return $t._fromParams({providerId:gt.PROVIDER_ID,signInMethod:gt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return gt.credentialFromTaggedObject(e)}static credentialFromError(e){return gt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return gt.credential(t,r)}catch{return null}}}gt.TWITTER_SIGN_IN_METHOD="twitter.com";gt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Iy(n,e){return En(n,"POST","/v1/accounts:signUp",ot(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,i=!1){const s=await Le._fromIdTokenResponse(e,r,i),a=Mc(r);return new It({user:s,providerId:a,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const i=Mc(r);return new It({user:e,providerId:i,_tokenResponse:r,operationType:t})}}function Mc(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hi extends Fe{constructor(e,t,r,i){var s;super(t.code,t.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,hi.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,i){return new hi(e,t,r,i)}}function Yu(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?hi._fromErrorAndOperation(n,s,e,r):s})}async function by(n,e,t=!1){const r=await dn(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return It._forOperation(n,"link",r)}/**
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
 */async function Ay(n,e,t=!1){const{auth:r}=n;if(Pe(r.app))return Promise.reject(je(r));const i="reauthenticate";try{const s=await dn(n,Yu(r,i,e,n),t);U(s.idToken,r,"internal-error");const a=Eo(s.idToken);U(a,r,"internal-error");const{sub:c}=a;return U(n.uid===c,r,"user-mismatch"),It._forOperation(n,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Ue(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ju(n,e,t=!1){if(Pe(n.app))return Promise.reject(je(n));const r="signIn",i=await Yu(n,r,e),s=await It._fromIdTokenResponse(n,r,i);return t||await n._updateCurrentUser(s.user),s}async function Ry(n,e){return Ju(kt(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Cy(n,e){return En(n,"POST","/v1/accounts:signInWithCustomToken",ot(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Sy(n,e){if(Pe(n.app))return Promise.reject(je(n));const t=kt(n),r=await Cy(t,{token:e,returnSecureToken:!0}),i=await It._fromIdTokenResponse(t,"signIn",r);return await t._updateCurrentUser(i.user),i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xu(n){const e=kt(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function Py(n,e,t){if(Pe(n.app))return Promise.reject(je(n));const r=kt(n),a=await qs(r,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Iy).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&Xu(n),u}),c=await It._fromIdTokenResponse(r,"signIn",a);return await r._updateCurrentUser(c.user),c}function ky(n,e,t){return Pe(n.app)?Promise.reject(je(n)):Ry(Ie(n),wn.credential(e,t)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Xu(n),r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Dy(n,e){return at(n,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xy(n,{displayName:e,photoURL:t}){if(e===void 0&&t===void 0)return;const r=Ie(n),s={idToken:await r.getIdToken(),displayName:e,photoUrl:t,returnSecureToken:!0},a=await dn(r,Dy(r.auth,s));r.displayName=a.displayName||null,r.photoURL=a.photoUrl||null;const c=r.providerData.find(({providerId:u})=>u==="password");c&&(c.displayName=r.displayName,c.photoURL=r.photoURL),await r._updateTokensIfNecessary(a)}function Ny(n,e,t,r){return Ie(n).onIdTokenChanged(e,t,r)}function Oy(n,e,t){return Ie(n).beforeAuthStateChanged(e,t)}function Ly(n,e,t,r){return Ie(n).onAuthStateChanged(e,t,r)}function Vy(n){return Ie(n).signOut()}const di="__sak";/**
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
 */class Zu{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(di,"1"),this.storage.removeItem(di),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const My=1e3,Uy=10;class eh extends Zu{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Hu(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),i=this.localCache[t];r!==i&&e(t,i,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((a,c,u)=>{this.notifyListeners(a,u)});return}const r=e.key;t?this.detachListener():this.stopPolling();const i=()=>{const a=this.storage.getItem(r);!t&&this.localCache[r]===a||this.notifyListeners(r,a)},s=this.storage.getItem(r);Jg()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,Uy):i()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},My)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}eh.type="LOCAL";const Fy=eh;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class th extends Zu{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}th.type="SESSION";const nh=th;/**
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
 */function By(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class Ni{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;const r=new Ni(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:i,data:s}=t.data,a=this.handlersMap[i];if(!(a!=null&&a.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const c=Array.from(a).map(async d=>d(t.origin,s)),u=await By(c);t.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ni.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ao(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class $y{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,a;return new Promise((c,u)=>{const d=Ao("",20);i.port1.start();const p=setTimeout(()=>{u(new Error("unsupported_event"))},r);a={messageChannel:i,onMessage(g){const v=g;if(v.data.eventId===d)switch(v.data.status){case"ack":clearTimeout(p),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),c(v.data.response);break;default:clearTimeout(p),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(a),i.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:d,data:t},[i.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qe(){return window}function jy(n){qe().location.href=n}/**
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
 */function rh(){return typeof qe().WorkerGlobalScope<"u"&&typeof qe().importScripts=="function"}async function qy(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Hy(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function zy(){return rh()?self:null}/**
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
 */const ih="firebaseLocalStorageDb",Gy=1,fi="firebaseLocalStorage",sh="fbase_key";class yr{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Oi(n,e){return n.transaction([fi],e?"readwrite":"readonly").objectStore(fi)}function Wy(){const n=indexedDB.deleteDatabase(ih);return new yr(n).toPromise()}function Hs(){const n=indexedDB.open(ih,Gy);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(fi,{keyPath:sh})}catch(i){t(i)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(fi)?e(r):(r.close(),await Wy(),e(await Hs()))})})}async function Uc(n,e,t){const r=Oi(n,!0).put({[sh]:e,value:t});return new yr(r).toPromise()}async function Ky(n,e){const t=Oi(n,!1).get(e),r=await new yr(t).toPromise();return r===void 0?null:r.value}function Fc(n,e){const t=Oi(n,!0).delete(e);return new yr(t).toPromise()}const Qy=800,Yy=3;class oh{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Hs(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>Yy)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return rh()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ni._getInstance(zy()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await qy(),!this.activeServiceWorker)return;this.sender=new $y(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Hy()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Hs();return await Uc(e,di,"1"),await Fc(e,di),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>Uc(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>Ky(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Fc(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Oi(i,!1).getAll();return new yr(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),t.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Qy)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}oh.type="LOCAL";const Jy=oh;new mr(3e4,6e4);/**
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
 */function Xy(n,e){return e?et(e):(U(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class Ro extends Io{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ln(e,this._buildIdpRequest())}_linkToIdToken(e,t){return ln(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return ln(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Zy(n){return Ju(n.auth,new Ro(n),n.bypassAuthState)}function e_(n){const{auth:e,user:t}=n;return U(t,e,"internal-error"),Ay(t,new Ro(n),n.bypassAuthState)}async function t_(n){const{auth:e,user:t}=n;return U(t,e,"internal-error"),by(t,new Ro(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ah{constructor(e,t,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:i,tenantId:s,error:a,type:c}=e;if(a){this.reject(a);return}const u={auth:this.auth,requestUri:t,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(u))}catch(d){this.reject(d)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Zy;case"linkViaPopup":case"linkViaRedirect":return t_;case"reauthViaPopup":case"reauthViaRedirect":return e_;default:Ue(this.auth,"internal-error")}}resolve(e){rt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){rt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const n_=new mr(2e3,1e4);class on extends ah{constructor(e,t,r,i,s){super(e,t,i,s),this.provider=r,this.authWindow=null,this.pollId=null,on.currentPopupAction&&on.currentPopupAction.cancel(),on.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return U(e,this.auth,"internal-error"),e}async onExecution(){rt(this.filter.length===1,"Popup operations only handle one event");const e=Ao();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject($e(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject($e(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,on.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject($e(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,n_.get())};e()}}on.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r_="pendingRedirect",Jr=new Map;class i_ extends ah{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=Jr.get(this.auth._key());if(!e){try{const r=await s_(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}Jr.set(this.auth._key(),e)}return this.bypassAuthState||Jr.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function s_(n,e){const t=c_(e),r=a_(n);if(!await r._isAvailable())return!1;const i=await r._get(t)==="true";return await r._remove(t),i}function o_(n,e){Jr.set(n._key(),e)}function a_(n){return et(n._redirectPersistence)}function c_(n){return Yr(r_,n.config.apiKey,n.name)}async function l_(n,e,t=!1){if(Pe(n.app))return Promise.reject(je(n));const r=kt(n),i=Xy(r,e),a=await new i_(r,i,t).execute();return a&&!t&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const u_=10*60*1e3;class h_{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!d_(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!ch(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError($e(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=u_&&this.cachedEventUids.clear(),this.cachedEventUids.has(Bc(e))}saveEventToCache(e){this.cachedEventUids.add(Bc(e)),this.lastProcessedEventTime=Date.now()}}function Bc(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function ch({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function d_(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return ch(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function f_(n,e={}){return at(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const p_=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,m_=/^https?/;async function g_(n){if(n.config.emulator)return;const{authorizedDomains:e}=await f_(n);for(const t of e)try{if(y_(t))return}catch{}Ue(n,"unauthorized-domain")}function y_(n){const e=$s(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const a=new URL(n);return a.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&a.hostname===r}if(!m_.test(t))return!1;if(p_.test(n))return r===n;const i=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const __=new mr(3e4,6e4);function $c(){const n=qe().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function v_(n){return new Promise((e,t)=>{var r,i,s;function a(){$c(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{$c(),t($e(n,"network-request-failed"))},timeout:__.get()})}if(!((i=(r=qe().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=qe().gapi)===null||s===void 0)&&s.load)a();else{const c=oy("iframefcb");return qe()[c]=()=>{gapi.load?a():t($e(n,"network-request-failed"))},Gu(`${sy()}?onload=${c}`).catch(u=>t(u))}}).catch(e=>{throw Xr=null,e})}let Xr=null;function T_(n){return Xr=Xr||v_(n),Xr}/**
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
 */const E_=new mr(5e3,15e3),w_="__/auth/iframe",I_="emulator/auth/iframe",b_={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},A_=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function R_(n){const e=n.config;U(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?To(e,I_):`https://${n.config.authDomain}/${w_}`,r={apiKey:e.apiKey,appName:n.name,v:Tn},i=A_.get(n.config.apiHost);i&&(r.eid=i);const s=n._getFrameworks();return s.length&&(r.fw=s.join(",")),`${t}?${pr(r).slice(1)}`}async function C_(n){const e=await T_(n),t=qe().gapi;return U(t,n,"internal-error"),e.open({where:document.body,url:R_(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:b_,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const a=$e(n,"network-request-failed"),c=qe().setTimeout(()=>{s(a)},E_.get());function u(){qe().clearTimeout(c),i(r)}r.ping(u).then(u,()=>{s(a)})}))}/**
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
 */const S_={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},P_=500,k_=600,D_="_blank",x_="http://localhost";class jc{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function N_(n,e,t,r=P_,i=k_){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const u=Object.assign(Object.assign({},S_),{width:r.toString(),height:i.toString(),top:s,left:a}),d=we().toLowerCase();t&&(c=Fu(d)?D_:t),Mu(d)&&(e=e||x_,u.scrollbars="yes");const p=Object.entries(u).reduce((v,[R,C])=>`${v}${R}=${C},`,"");if(Yg(d)&&c!=="_self")return O_(e||"",c),new jc(null);const g=window.open(e||"",c,p);U(g,n,"popup-blocked");try{g.focus()}catch{}return new jc(g)}function O_(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
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
 */const L_="__/auth/handler",V_="emulator/auth/handler",M_=encodeURIComponent("fac");async function qc(n,e,t,r,i,s){U(n.config.authDomain,n,"auth-domain-config-required"),U(n.config.apiKey,n,"invalid-api-key");const a={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:Tn,eventId:i};if(e instanceof Qu){e.setDefaultLanguage(n.languageCode),a.providerId=e.providerId||"",Kf(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[p,g]of Object.entries({}))a[p]=g}if(e instanceof gr){const p=e.getScopes().filter(g=>g!=="");p.length>0&&(a.scopes=p.join(","))}n.tenantId&&(a.tid=n.tenantId);const c=a;for(const p of Object.keys(c))c[p]===void 0&&delete c[p];const u=await n._getAppCheckToken(),d=u?`#${M_}=${encodeURIComponent(u)}`:"";return`${U_(n)}?${pr(c).slice(1)}${d}`}function U_({config:n}){return n.emulator?To(n,V_):`https://${n.authDomain}/${L_}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cs="webStorageSupport";class F_{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=nh,this._completeRedirectFn=l_,this._overrideRedirectResult=o_}async _openPopup(e,t,r,i){var s;rt((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const a=await qc(e,t,r,$s(),i);return N_(e,a,Ao())}async _openRedirect(e,t,r,i){await this._originValidation(e);const s=await qc(e,t,r,$s(),i);return jy(s),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:i,promise:s}=this.eventManagers[t];return i?Promise.resolve(i):(rt(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await C_(e),r=new h_(e);return t.register("authEvent",i=>(U(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Cs,{type:Cs},i=>{var s;const a=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Cs];a!==void 0&&t(!!a),Ue(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=g_(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Hu()||Uu()||wo()}}const B_=F_;var Hc="@firebase/auth",zc="1.10.6";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $_{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){U(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function j_(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function q_(n){We(new Me("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:a,authDomain:c}=r.options;U(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:a,authDomain:c,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:zu(n)},d=new ny(r,i,s,u);return dy(d,t),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),We(new Me("auth-internal",e=>{const t=kt(e.getProvider("auth").getImmediate());return(r=>new $_(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),xe(Hc,zc,j_(n)),xe(Hc,zc,"esm2017")}/**
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
 */const H_=5*60,z_=Ql("authIdTokenMaxAge")||H_;let Gc=null;const G_=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>z_)return;const i=t==null?void 0:t.token;Gc!==i&&(Gc=i,await fetch(n,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function W_(n=ho()){const e=zt(n,"auth");if(e.isInitialized())return e.getImmediate();const t=hy(n,{popupRedirectResolver:B_,persistence:[Jy,Fy,nh]}),r=Ql("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const a=G_(s.toString());Oy(t,a,()=>a(t.currentUser)),Ny(t,c=>a(c))}}const i=Wl("auth");return i&&fy(t,`http://${i}`),t}function K_(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}ry({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=i=>{const s=$e("internal-error");s.customData=i,t(s)},r.type="text/javascript",r.charset="UTF-8",K_().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});q_("Browser");var Wc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Tt,lh;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(E,m){function _(){}_.prototype=m.prototype,E.D=m.prototype,E.prototype=new _,E.prototype.constructor=E,E.C=function(T,w,b){for(var y=Array(arguments.length-2),Ye=2;Ye<arguments.length;Ye++)y[Ye-2]=arguments[Ye];return m.prototype[w].apply(T,y)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(E,m,_){_||(_=0);var T=Array(16);if(typeof m=="string")for(var w=0;16>w;++w)T[w]=m.charCodeAt(_++)|m.charCodeAt(_++)<<8|m.charCodeAt(_++)<<16|m.charCodeAt(_++)<<24;else for(w=0;16>w;++w)T[w]=m[_++]|m[_++]<<8|m[_++]<<16|m[_++]<<24;m=E.g[0],_=E.g[1],w=E.g[2];var b=E.g[3],y=m+(b^_&(w^b))+T[0]+3614090360&4294967295;m=_+(y<<7&4294967295|y>>>25),y=b+(w^m&(_^w))+T[1]+3905402710&4294967295,b=m+(y<<12&4294967295|y>>>20),y=w+(_^b&(m^_))+T[2]+606105819&4294967295,w=b+(y<<17&4294967295|y>>>15),y=_+(m^w&(b^m))+T[3]+3250441966&4294967295,_=w+(y<<22&4294967295|y>>>10),y=m+(b^_&(w^b))+T[4]+4118548399&4294967295,m=_+(y<<7&4294967295|y>>>25),y=b+(w^m&(_^w))+T[5]+1200080426&4294967295,b=m+(y<<12&4294967295|y>>>20),y=w+(_^b&(m^_))+T[6]+2821735955&4294967295,w=b+(y<<17&4294967295|y>>>15),y=_+(m^w&(b^m))+T[7]+4249261313&4294967295,_=w+(y<<22&4294967295|y>>>10),y=m+(b^_&(w^b))+T[8]+1770035416&4294967295,m=_+(y<<7&4294967295|y>>>25),y=b+(w^m&(_^w))+T[9]+2336552879&4294967295,b=m+(y<<12&4294967295|y>>>20),y=w+(_^b&(m^_))+T[10]+4294925233&4294967295,w=b+(y<<17&4294967295|y>>>15),y=_+(m^w&(b^m))+T[11]+2304563134&4294967295,_=w+(y<<22&4294967295|y>>>10),y=m+(b^_&(w^b))+T[12]+1804603682&4294967295,m=_+(y<<7&4294967295|y>>>25),y=b+(w^m&(_^w))+T[13]+4254626195&4294967295,b=m+(y<<12&4294967295|y>>>20),y=w+(_^b&(m^_))+T[14]+2792965006&4294967295,w=b+(y<<17&4294967295|y>>>15),y=_+(m^w&(b^m))+T[15]+1236535329&4294967295,_=w+(y<<22&4294967295|y>>>10),y=m+(w^b&(_^w))+T[1]+4129170786&4294967295,m=_+(y<<5&4294967295|y>>>27),y=b+(_^w&(m^_))+T[6]+3225465664&4294967295,b=m+(y<<9&4294967295|y>>>23),y=w+(m^_&(b^m))+T[11]+643717713&4294967295,w=b+(y<<14&4294967295|y>>>18),y=_+(b^m&(w^b))+T[0]+3921069994&4294967295,_=w+(y<<20&4294967295|y>>>12),y=m+(w^b&(_^w))+T[5]+3593408605&4294967295,m=_+(y<<5&4294967295|y>>>27),y=b+(_^w&(m^_))+T[10]+38016083&4294967295,b=m+(y<<9&4294967295|y>>>23),y=w+(m^_&(b^m))+T[15]+3634488961&4294967295,w=b+(y<<14&4294967295|y>>>18),y=_+(b^m&(w^b))+T[4]+3889429448&4294967295,_=w+(y<<20&4294967295|y>>>12),y=m+(w^b&(_^w))+T[9]+568446438&4294967295,m=_+(y<<5&4294967295|y>>>27),y=b+(_^w&(m^_))+T[14]+3275163606&4294967295,b=m+(y<<9&4294967295|y>>>23),y=w+(m^_&(b^m))+T[3]+4107603335&4294967295,w=b+(y<<14&4294967295|y>>>18),y=_+(b^m&(w^b))+T[8]+1163531501&4294967295,_=w+(y<<20&4294967295|y>>>12),y=m+(w^b&(_^w))+T[13]+2850285829&4294967295,m=_+(y<<5&4294967295|y>>>27),y=b+(_^w&(m^_))+T[2]+4243563512&4294967295,b=m+(y<<9&4294967295|y>>>23),y=w+(m^_&(b^m))+T[7]+1735328473&4294967295,w=b+(y<<14&4294967295|y>>>18),y=_+(b^m&(w^b))+T[12]+2368359562&4294967295,_=w+(y<<20&4294967295|y>>>12),y=m+(_^w^b)+T[5]+4294588738&4294967295,m=_+(y<<4&4294967295|y>>>28),y=b+(m^_^w)+T[8]+2272392833&4294967295,b=m+(y<<11&4294967295|y>>>21),y=w+(b^m^_)+T[11]+1839030562&4294967295,w=b+(y<<16&4294967295|y>>>16),y=_+(w^b^m)+T[14]+4259657740&4294967295,_=w+(y<<23&4294967295|y>>>9),y=m+(_^w^b)+T[1]+2763975236&4294967295,m=_+(y<<4&4294967295|y>>>28),y=b+(m^_^w)+T[4]+1272893353&4294967295,b=m+(y<<11&4294967295|y>>>21),y=w+(b^m^_)+T[7]+4139469664&4294967295,w=b+(y<<16&4294967295|y>>>16),y=_+(w^b^m)+T[10]+3200236656&4294967295,_=w+(y<<23&4294967295|y>>>9),y=m+(_^w^b)+T[13]+681279174&4294967295,m=_+(y<<4&4294967295|y>>>28),y=b+(m^_^w)+T[0]+3936430074&4294967295,b=m+(y<<11&4294967295|y>>>21),y=w+(b^m^_)+T[3]+3572445317&4294967295,w=b+(y<<16&4294967295|y>>>16),y=_+(w^b^m)+T[6]+76029189&4294967295,_=w+(y<<23&4294967295|y>>>9),y=m+(_^w^b)+T[9]+3654602809&4294967295,m=_+(y<<4&4294967295|y>>>28),y=b+(m^_^w)+T[12]+3873151461&4294967295,b=m+(y<<11&4294967295|y>>>21),y=w+(b^m^_)+T[15]+530742520&4294967295,w=b+(y<<16&4294967295|y>>>16),y=_+(w^b^m)+T[2]+3299628645&4294967295,_=w+(y<<23&4294967295|y>>>9),y=m+(w^(_|~b))+T[0]+4096336452&4294967295,m=_+(y<<6&4294967295|y>>>26),y=b+(_^(m|~w))+T[7]+1126891415&4294967295,b=m+(y<<10&4294967295|y>>>22),y=w+(m^(b|~_))+T[14]+2878612391&4294967295,w=b+(y<<15&4294967295|y>>>17),y=_+(b^(w|~m))+T[5]+4237533241&4294967295,_=w+(y<<21&4294967295|y>>>11),y=m+(w^(_|~b))+T[12]+1700485571&4294967295,m=_+(y<<6&4294967295|y>>>26),y=b+(_^(m|~w))+T[3]+2399980690&4294967295,b=m+(y<<10&4294967295|y>>>22),y=w+(m^(b|~_))+T[10]+4293915773&4294967295,w=b+(y<<15&4294967295|y>>>17),y=_+(b^(w|~m))+T[1]+2240044497&4294967295,_=w+(y<<21&4294967295|y>>>11),y=m+(w^(_|~b))+T[8]+1873313359&4294967295,m=_+(y<<6&4294967295|y>>>26),y=b+(_^(m|~w))+T[15]+4264355552&4294967295,b=m+(y<<10&4294967295|y>>>22),y=w+(m^(b|~_))+T[6]+2734768916&4294967295,w=b+(y<<15&4294967295|y>>>17),y=_+(b^(w|~m))+T[13]+1309151649&4294967295,_=w+(y<<21&4294967295|y>>>11),y=m+(w^(_|~b))+T[4]+4149444226&4294967295,m=_+(y<<6&4294967295|y>>>26),y=b+(_^(m|~w))+T[11]+3174756917&4294967295,b=m+(y<<10&4294967295|y>>>22),y=w+(m^(b|~_))+T[2]+718787259&4294967295,w=b+(y<<15&4294967295|y>>>17),y=_+(b^(w|~m))+T[9]+3951481745&4294967295,E.g[0]=E.g[0]+m&4294967295,E.g[1]=E.g[1]+(w+(y<<21&4294967295|y>>>11))&4294967295,E.g[2]=E.g[2]+w&4294967295,E.g[3]=E.g[3]+b&4294967295}r.prototype.u=function(E,m){m===void 0&&(m=E.length);for(var _=m-this.blockSize,T=this.B,w=this.h,b=0;b<m;){if(w==0)for(;b<=_;)i(this,E,b),b+=this.blockSize;if(typeof E=="string"){for(;b<m;)if(T[w++]=E.charCodeAt(b++),w==this.blockSize){i(this,T),w=0;break}}else for(;b<m;)if(T[w++]=E[b++],w==this.blockSize){i(this,T),w=0;break}}this.h=w,this.o+=m},r.prototype.v=function(){var E=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);E[0]=128;for(var m=1;m<E.length-8;++m)E[m]=0;var _=8*this.o;for(m=E.length-8;m<E.length;++m)E[m]=_&255,_/=256;for(this.u(E),E=Array(16),m=_=0;4>m;++m)for(var T=0;32>T;T+=8)E[_++]=this.g[m]>>>T&255;return E};function s(E,m){var _=c;return Object.prototype.hasOwnProperty.call(_,E)?_[E]:_[E]=m(E)}function a(E,m){this.h=m;for(var _=[],T=!0,w=E.length-1;0<=w;w--){var b=E[w]|0;T&&b==m||(_[w]=b,T=!1)}this.g=_}var c={};function u(E){return-128<=E&&128>E?s(E,function(m){return new a([m|0],0>m?-1:0)}):new a([E|0],0>E?-1:0)}function d(E){if(isNaN(E)||!isFinite(E))return g;if(0>E)return P(d(-E));for(var m=[],_=1,T=0;E>=_;T++)m[T]=E/_|0,_*=4294967296;return new a(m,0)}function p(E,m){if(E.length==0)throw Error("number format error: empty string");if(m=m||10,2>m||36<m)throw Error("radix out of range: "+m);if(E.charAt(0)=="-")return P(p(E.substring(1),m));if(0<=E.indexOf("-"))throw Error('number format error: interior "-" character');for(var _=d(Math.pow(m,8)),T=g,w=0;w<E.length;w+=8){var b=Math.min(8,E.length-w),y=parseInt(E.substring(w,w+b),m);8>b?(b=d(Math.pow(m,b)),T=T.j(b).add(d(y))):(T=T.j(_),T=T.add(d(y)))}return T}var g=u(0),v=u(1),R=u(16777216);n=a.prototype,n.m=function(){if(D(this))return-P(this).m();for(var E=0,m=1,_=0;_<this.g.length;_++){var T=this.i(_);E+=(0<=T?T:4294967296+T)*m,m*=4294967296}return E},n.toString=function(E){if(E=E||10,2>E||36<E)throw Error("radix out of range: "+E);if(C(this))return"0";if(D(this))return"-"+P(this).toString(E);for(var m=d(Math.pow(E,6)),_=this,T="";;){var w=K(_,m).g;_=j(_,w.j(m));var b=((0<_.g.length?_.g[0]:_.h)>>>0).toString(E);if(_=w,C(_))return b+T;for(;6>b.length;)b="0"+b;T=b+T}},n.i=function(E){return 0>E?0:E<this.g.length?this.g[E]:this.h};function C(E){if(E.h!=0)return!1;for(var m=0;m<E.g.length;m++)if(E.g[m]!=0)return!1;return!0}function D(E){return E.h==-1}n.l=function(E){return E=j(this,E),D(E)?-1:C(E)?0:1};function P(E){for(var m=E.g.length,_=[],T=0;T<m;T++)_[T]=~E.g[T];return new a(_,~E.h).add(v)}n.abs=function(){return D(this)?P(this):this},n.add=function(E){for(var m=Math.max(this.g.length,E.g.length),_=[],T=0,w=0;w<=m;w++){var b=T+(this.i(w)&65535)+(E.i(w)&65535),y=(b>>>16)+(this.i(w)>>>16)+(E.i(w)>>>16);T=y>>>16,b&=65535,y&=65535,_[w]=y<<16|b}return new a(_,_[_.length-1]&-2147483648?-1:0)};function j(E,m){return E.add(P(m))}n.j=function(E){if(C(this)||C(E))return g;if(D(this))return D(E)?P(this).j(P(E)):P(P(this).j(E));if(D(E))return P(this.j(P(E)));if(0>this.l(R)&&0>E.l(R))return d(this.m()*E.m());for(var m=this.g.length+E.g.length,_=[],T=0;T<2*m;T++)_[T]=0;for(T=0;T<this.g.length;T++)for(var w=0;w<E.g.length;w++){var b=this.i(T)>>>16,y=this.i(T)&65535,Ye=E.i(w)>>>16,Cn=E.i(w)&65535;_[2*T+2*w]+=y*Cn,O(_,2*T+2*w),_[2*T+2*w+1]+=b*Cn,O(_,2*T+2*w+1),_[2*T+2*w+1]+=y*Ye,O(_,2*T+2*w+1),_[2*T+2*w+2]+=b*Ye,O(_,2*T+2*w+2)}for(T=0;T<m;T++)_[T]=_[2*T+1]<<16|_[2*T];for(T=m;T<2*m;T++)_[T]=0;return new a(_,0)};function O(E,m){for(;(E[m]&65535)!=E[m];)E[m+1]+=E[m]>>>16,E[m]&=65535,m++}function L(E,m){this.g=E,this.h=m}function K(E,m){if(C(m))throw Error("division by zero");if(C(E))return new L(g,g);if(D(E))return m=K(P(E),m),new L(P(m.g),P(m.h));if(D(m))return m=K(E,P(m)),new L(P(m.g),m.h);if(30<E.g.length){if(D(E)||D(m))throw Error("slowDivide_ only works with positive integers.");for(var _=v,T=m;0>=T.l(E);)_=ce(_),T=ce(T);var w=X(_,1),b=X(T,1);for(T=X(T,2),_=X(_,2);!C(T);){var y=b.add(T);0>=y.l(E)&&(w=w.add(_),b=y),T=X(T,1),_=X(_,1)}return m=j(E,w.j(m)),new L(w,m)}for(w=g;0<=E.l(m);){for(_=Math.max(1,Math.floor(E.m()/m.m())),T=Math.ceil(Math.log(_)/Math.LN2),T=48>=T?1:Math.pow(2,T-48),b=d(_),y=b.j(m);D(y)||0<y.l(E);)_-=T,b=d(_),y=b.j(m);C(b)&&(b=v),w=w.add(b),E=j(E,y)}return new L(w,E)}n.A=function(E){return K(this,E).h},n.and=function(E){for(var m=Math.max(this.g.length,E.g.length),_=[],T=0;T<m;T++)_[T]=this.i(T)&E.i(T);return new a(_,this.h&E.h)},n.or=function(E){for(var m=Math.max(this.g.length,E.g.length),_=[],T=0;T<m;T++)_[T]=this.i(T)|E.i(T);return new a(_,this.h|E.h)},n.xor=function(E){for(var m=Math.max(this.g.length,E.g.length),_=[],T=0;T<m;T++)_[T]=this.i(T)^E.i(T);return new a(_,this.h^E.h)};function ce(E){for(var m=E.g.length+1,_=[],T=0;T<m;T++)_[T]=E.i(T)<<1|E.i(T-1)>>>31;return new a(_,E.h)}function X(E,m){var _=m>>5;m%=32;for(var T=E.g.length-_,w=[],b=0;b<T;b++)w[b]=0<m?E.i(b+_)>>>m|E.i(b+_+1)<<32-m:E.i(b+_);return new a(w,E.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,lh=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=d,a.fromString=p,Tt=a}).apply(typeof Wc<"u"?Wc:typeof self<"u"?self:typeof window<"u"?window:{});var jr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var uh,Wn,hh,Zr,zs,dh,fh,ph;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,l,h){return o==Array.prototype||o==Object.prototype||(o[l]=h.value),o};function t(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof jr=="object"&&jr];for(var l=0;l<o.length;++l){var h=o[l];if(h&&h.Math==Math)return h}throw Error("Cannot find global object")}var r=t(this);function i(o,l){if(l)e:{var h=r;o=o.split(".");for(var f=0;f<o.length-1;f++){var I=o[f];if(!(I in h))break e;h=h[I]}o=o[o.length-1],f=h[o],l=l(f),l!=f&&l!=null&&e(h,o,{configurable:!0,writable:!0,value:l})}}function s(o,l){o instanceof String&&(o+="");var h=0,f=!1,I={next:function(){if(!f&&h<o.length){var A=h++;return{value:l(A,o[A]),done:!1}}return f=!0,{done:!0,value:void 0}}};return I[Symbol.iterator]=function(){return I},I}i("Array.prototype.values",function(o){return o||function(){return s(this,function(l,h){return h})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},c=this||self;function u(o){var l=typeof o;return l=l!="object"?l:o?Array.isArray(o)?"array":l:"null",l=="array"||l=="object"&&typeof o.length=="number"}function d(o){var l=typeof o;return l=="object"&&o!=null||l=="function"}function p(o,l,h){return o.call.apply(o.bind,arguments)}function g(o,l,h){if(!o)throw Error();if(2<arguments.length){var f=Array.prototype.slice.call(arguments,2);return function(){var I=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(I,f),o.apply(l,I)}}return function(){return o.apply(l,arguments)}}function v(o,l,h){return v=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?p:g,v.apply(null,arguments)}function R(o,l){var h=Array.prototype.slice.call(arguments,1);return function(){var f=h.slice();return f.push.apply(f,arguments),o.apply(this,f)}}function C(o,l){function h(){}h.prototype=l.prototype,o.aa=l.prototype,o.prototype=new h,o.prototype.constructor=o,o.Qb=function(f,I,A){for(var x=Array(arguments.length-2),Y=2;Y<arguments.length;Y++)x[Y-2]=arguments[Y];return l.prototype[I].apply(f,x)}}function D(o){const l=o.length;if(0<l){const h=Array(l);for(let f=0;f<l;f++)h[f]=o[f];return h}return[]}function P(o,l){for(let h=1;h<arguments.length;h++){const f=arguments[h];if(u(f)){const I=o.length||0,A=f.length||0;o.length=I+A;for(let x=0;x<A;x++)o[I+x]=f[x]}else o.push(f)}}class j{constructor(l,h){this.i=l,this.j=h,this.h=0,this.g=null}get(){let l;return 0<this.h?(this.h--,l=this.g,this.g=l.next,l.next=null):l=this.i(),l}}function O(o){return/^[\s\xa0]*$/.test(o)}function L(){var o=c.navigator;return o&&(o=o.userAgent)?o:""}function K(o){return K[" "](o),o}K[" "]=function(){};var ce=L().indexOf("Gecko")!=-1&&!(L().toLowerCase().indexOf("webkit")!=-1&&L().indexOf("Edge")==-1)&&!(L().indexOf("Trident")!=-1||L().indexOf("MSIE")!=-1)&&L().indexOf("Edge")==-1;function X(o,l,h){for(const f in o)l.call(h,o[f],f,o)}function E(o,l){for(const h in o)l.call(void 0,o[h],h,o)}function m(o){const l={};for(const h in o)l[h]=o[h];return l}const _="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function T(o,l){let h,f;for(let I=1;I<arguments.length;I++){f=arguments[I];for(h in f)o[h]=f[h];for(let A=0;A<_.length;A++)h=_[A],Object.prototype.hasOwnProperty.call(f,h)&&(o[h]=f[h])}}function w(o){var l=1;o=o.split(":");const h=[];for(;0<l&&o.length;)h.push(o.shift()),l--;return o.length&&h.push(o.join(":")),h}function b(o){c.setTimeout(()=>{throw o},0)}function y(){var o=Ki;let l=null;return o.g&&(l=o.g,o.g=o.g.next,o.g||(o.h=null),l.next=null),l}class Ye{constructor(){this.h=this.g=null}add(l,h){const f=Cn.get();f.set(l,h),this.h?this.h.next=f:this.g=f,this.h=f}}var Cn=new j(()=>new qd,o=>o.reset());class qd{constructor(){this.next=this.g=this.h=null}set(l,h){this.h=l,this.g=h,this.next=null}reset(){this.next=this.g=this.h=null}}let Sn,Pn=!1,Ki=new Ye,ca=()=>{const o=c.Promise.resolve(void 0);Sn=()=>{o.then(Hd)}};var Hd=()=>{for(var o;o=y();){try{o.h.call(o.g)}catch(h){b(h)}var l=Cn;l.j(o),100>l.h&&(l.h++,o.next=l.g,l.g=o)}Pn=!1};function ct(){this.s=this.s,this.C=this.C}ct.prototype.s=!1,ct.prototype.ma=function(){this.s||(this.s=!0,this.N())},ct.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function pe(o,l){this.type=o,this.g=this.target=l,this.defaultPrevented=!1}pe.prototype.h=function(){this.defaultPrevented=!0};var zd=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var o=!1,l=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const h=()=>{};c.addEventListener("test",h,l),c.removeEventListener("test",h,l)}catch{}return o}();function kn(o,l){if(pe.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var h=this.type=o.type,f=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=l,l=o.relatedTarget){if(ce){e:{try{K(l.nodeName);var I=!0;break e}catch{}I=!1}I||(l=null)}}else h=="mouseover"?l=o.fromElement:h=="mouseout"&&(l=o.toElement);this.relatedTarget=l,f?(this.clientX=f.clientX!==void 0?f.clientX:f.pageX,this.clientY=f.clientY!==void 0?f.clientY:f.pageY,this.screenX=f.screenX||0,this.screenY=f.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:Gd[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&kn.aa.h.call(this)}}C(kn,pe);var Gd={2:"touch",3:"pen",4:"mouse"};kn.prototype.h=function(){kn.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var wr="closure_listenable_"+(1e6*Math.random()|0),Wd=0;function Kd(o,l,h,f,I){this.listener=o,this.proxy=null,this.src=l,this.type=h,this.capture=!!f,this.ha=I,this.key=++Wd,this.da=this.fa=!1}function Ir(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function br(o){this.src=o,this.g={},this.h=0}br.prototype.add=function(o,l,h,f,I){var A=o.toString();o=this.g[A],o||(o=this.g[A]=[],this.h++);var x=Yi(o,l,f,I);return-1<x?(l=o[x],h||(l.fa=!1)):(l=new Kd(l,this.src,A,!!f,I),l.fa=h,o.push(l)),l};function Qi(o,l){var h=l.type;if(h in o.g){var f=o.g[h],I=Array.prototype.indexOf.call(f,l,void 0),A;(A=0<=I)&&Array.prototype.splice.call(f,I,1),A&&(Ir(l),o.g[h].length==0&&(delete o.g[h],o.h--))}}function Yi(o,l,h,f){for(var I=0;I<o.length;++I){var A=o[I];if(!A.da&&A.listener==l&&A.capture==!!h&&A.ha==f)return I}return-1}var Ji="closure_lm_"+(1e6*Math.random()|0),Xi={};function la(o,l,h,f,I){if(Array.isArray(l)){for(var A=0;A<l.length;A++)la(o,l[A],h,f,I);return null}return h=da(h),o&&o[wr]?o.K(l,h,d(f)?!!f.capture:!1,I):Qd(o,l,h,!1,f,I)}function Qd(o,l,h,f,I,A){if(!l)throw Error("Invalid event type");var x=d(I)?!!I.capture:!!I,Y=es(o);if(Y||(o[Ji]=Y=new br(o)),h=Y.add(l,h,f,x,A),h.proxy)return h;if(f=Yd(),h.proxy=f,f.src=o,f.listener=h,o.addEventListener)zd||(I=x),I===void 0&&(I=!1),o.addEventListener(l.toString(),f,I);else if(o.attachEvent)o.attachEvent(ha(l.toString()),f);else if(o.addListener&&o.removeListener)o.addListener(f);else throw Error("addEventListener and attachEvent are unavailable.");return h}function Yd(){function o(h){return l.call(o.src,o.listener,h)}const l=Jd;return o}function ua(o,l,h,f,I){if(Array.isArray(l))for(var A=0;A<l.length;A++)ua(o,l[A],h,f,I);else f=d(f)?!!f.capture:!!f,h=da(h),o&&o[wr]?(o=o.i,l=String(l).toString(),l in o.g&&(A=o.g[l],h=Yi(A,h,f,I),-1<h&&(Ir(A[h]),Array.prototype.splice.call(A,h,1),A.length==0&&(delete o.g[l],o.h--)))):o&&(o=es(o))&&(l=o.g[l.toString()],o=-1,l&&(o=Yi(l,h,f,I)),(h=-1<o?l[o]:null)&&Zi(h))}function Zi(o){if(typeof o!="number"&&o&&!o.da){var l=o.src;if(l&&l[wr])Qi(l.i,o);else{var h=o.type,f=o.proxy;l.removeEventListener?l.removeEventListener(h,f,o.capture):l.detachEvent?l.detachEvent(ha(h),f):l.addListener&&l.removeListener&&l.removeListener(f),(h=es(l))?(Qi(h,o),h.h==0&&(h.src=null,l[Ji]=null)):Ir(o)}}}function ha(o){return o in Xi?Xi[o]:Xi[o]="on"+o}function Jd(o,l){if(o.da)o=!0;else{l=new kn(l,this);var h=o.listener,f=o.ha||o.src;o.fa&&Zi(o),o=h.call(f,l)}return o}function es(o){return o=o[Ji],o instanceof br?o:null}var ts="__closure_events_fn_"+(1e9*Math.random()>>>0);function da(o){return typeof o=="function"?o:(o[ts]||(o[ts]=function(l){return o.handleEvent(l)}),o[ts])}function me(){ct.call(this),this.i=new br(this),this.M=this,this.F=null}C(me,ct),me.prototype[wr]=!0,me.prototype.removeEventListener=function(o,l,h,f){ua(this,o,l,h,f)};function be(o,l){var h,f=o.F;if(f)for(h=[];f;f=f.F)h.push(f);if(o=o.M,f=l.type||l,typeof l=="string")l=new pe(l,o);else if(l instanceof pe)l.target=l.target||o;else{var I=l;l=new pe(f,o),T(l,I)}if(I=!0,h)for(var A=h.length-1;0<=A;A--){var x=l.g=h[A];I=Ar(x,f,!0,l)&&I}if(x=l.g=o,I=Ar(x,f,!0,l)&&I,I=Ar(x,f,!1,l)&&I,h)for(A=0;A<h.length;A++)x=l.g=h[A],I=Ar(x,f,!1,l)&&I}me.prototype.N=function(){if(me.aa.N.call(this),this.i){var o=this.i,l;for(l in o.g){for(var h=o.g[l],f=0;f<h.length;f++)Ir(h[f]);delete o.g[l],o.h--}}this.F=null},me.prototype.K=function(o,l,h,f){return this.i.add(String(o),l,!1,h,f)},me.prototype.L=function(o,l,h,f){return this.i.add(String(o),l,!0,h,f)};function Ar(o,l,h,f){if(l=o.i.g[String(l)],!l)return!0;l=l.concat();for(var I=!0,A=0;A<l.length;++A){var x=l[A];if(x&&!x.da&&x.capture==h){var Y=x.listener,ue=x.ha||x.src;x.fa&&Qi(o.i,x),I=Y.call(ue,f)!==!1&&I}}return I&&!f.defaultPrevented}function fa(o,l,h){if(typeof o=="function")h&&(o=v(o,h));else if(o&&typeof o.handleEvent=="function")o=v(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(l)?-1:c.setTimeout(o,l||0)}function pa(o){o.g=fa(()=>{o.g=null,o.i&&(o.i=!1,pa(o))},o.l);const l=o.h;o.h=null,o.m.apply(null,l)}class Xd extends ct{constructor(l,h){super(),this.m=l,this.l=h,this.h=null,this.i=!1,this.g=null}j(l){this.h=arguments,this.g?this.i=!0:pa(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Dn(o){ct.call(this),this.h=o,this.g={}}C(Dn,ct);var ma=[];function ga(o){X(o.g,function(l,h){this.g.hasOwnProperty(h)&&Zi(l)},o),o.g={}}Dn.prototype.N=function(){Dn.aa.N.call(this),ga(this)},Dn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ns=c.JSON.stringify,Zd=c.JSON.parse,ef=class{stringify(o){return c.JSON.stringify(o,void 0)}parse(o){return c.JSON.parse(o,void 0)}};function rs(){}rs.prototype.h=null;function ya(o){return o.h||(o.h=o.i())}function _a(){}var xn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function is(){pe.call(this,"d")}C(is,pe);function ss(){pe.call(this,"c")}C(ss,pe);var Dt={},va=null;function Rr(){return va=va||new me}Dt.La="serverreachability";function Ta(o){pe.call(this,Dt.La,o)}C(Ta,pe);function Nn(o){const l=Rr();be(l,new Ta(l))}Dt.STAT_EVENT="statevent";function Ea(o,l){pe.call(this,Dt.STAT_EVENT,o),this.stat=l}C(Ea,pe);function Ae(o){const l=Rr();be(l,new Ea(l,o))}Dt.Ma="timingevent";function wa(o,l){pe.call(this,Dt.Ma,o),this.size=l}C(wa,pe);function On(o,l){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){o()},l)}function Ln(){this.g=!0}Ln.prototype.xa=function(){this.g=!1};function tf(o,l,h,f,I,A){o.info(function(){if(o.g)if(A)for(var x="",Y=A.split("&"),ue=0;ue<Y.length;ue++){var W=Y[ue].split("=");if(1<W.length){var ge=W[0];W=W[1];var ye=ge.split("_");x=2<=ye.length&&ye[1]=="type"?x+(ge+"="+W+"&"):x+(ge+"=redacted&")}}else x=null;else x=A;return"XMLHTTP REQ ("+f+") [attempt "+I+"]: "+l+`
`+h+`
`+x})}function nf(o,l,h,f,I,A,x){o.info(function(){return"XMLHTTP RESP ("+f+") [ attempt "+I+"]: "+l+`
`+h+`
`+A+" "+x})}function Yt(o,l,h,f){o.info(function(){return"XMLHTTP TEXT ("+l+"): "+sf(o,h)+(f?" "+f:"")})}function rf(o,l){o.info(function(){return"TIMEOUT: "+l})}Ln.prototype.info=function(){};function sf(o,l){if(!o.g)return l;if(!l)return null;try{var h=JSON.parse(l);if(h){for(o=0;o<h.length;o++)if(Array.isArray(h[o])){var f=h[o];if(!(2>f.length)){var I=f[1];if(Array.isArray(I)&&!(1>I.length)){var A=I[0];if(A!="noop"&&A!="stop"&&A!="close")for(var x=1;x<I.length;x++)I[x]=""}}}}return ns(h)}catch{return l}}var Cr={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Ia={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},os;function Sr(){}C(Sr,rs),Sr.prototype.g=function(){return new XMLHttpRequest},Sr.prototype.i=function(){return{}},os=new Sr;function lt(o,l,h,f){this.j=o,this.i=l,this.l=h,this.R=f||1,this.U=new Dn(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new ba}function ba(){this.i=null,this.g="",this.h=!1}var Aa={},as={};function cs(o,l,h){o.L=1,o.v=xr(Je(l)),o.m=h,o.P=!0,Ra(o,null)}function Ra(o,l){o.F=Date.now(),Pr(o),o.A=Je(o.v);var h=o.A,f=o.R;Array.isArray(f)||(f=[String(f)]),Ba(h.i,"t",f),o.C=0,h=o.j.J,o.h=new ba,o.g=ic(o.j,h?l:null,!o.m),0<o.O&&(o.M=new Xd(v(o.Y,o,o.g),o.O)),l=o.U,h=o.g,f=o.ca;var I="readystatechange";Array.isArray(I)||(I&&(ma[0]=I.toString()),I=ma);for(var A=0;A<I.length;A++){var x=la(h,I[A],f||l.handleEvent,!1,l.h||l);if(!x)break;l.g[x.key]=x}l=o.H?m(o.H):{},o.m?(o.u||(o.u="POST"),l["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,l)):(o.u="GET",o.g.ea(o.A,o.u,null,l)),Nn(),tf(o.i,o.u,o.A,o.l,o.R,o.m)}lt.prototype.ca=function(o){o=o.target;const l=this.M;l&&Xe(o)==3?l.j():this.Y(o)},lt.prototype.Y=function(o){try{if(o==this.g)e:{const ye=Xe(this.g);var l=this.g.Ba();const Zt=this.g.Z();if(!(3>ye)&&(ye!=3||this.g&&(this.h.h||this.g.oa()||Wa(this.g)))){this.J||ye!=4||l==7||(l==8||0>=Zt?Nn(3):Nn(2)),ls(this);var h=this.g.Z();this.X=h;t:if(Ca(this)){var f=Wa(this.g);o="";var I=f.length,A=Xe(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){xt(this),Vn(this);var x="";break t}this.h.i=new c.TextDecoder}for(l=0;l<I;l++)this.h.h=!0,o+=this.h.i.decode(f[l],{stream:!(A&&l==I-1)});f.length=0,this.h.g+=o,this.C=0,x=this.h.g}else x=this.g.oa();if(this.o=h==200,nf(this.i,this.u,this.A,this.l,this.R,ye,h),this.o){if(this.T&&!this.K){t:{if(this.g){var Y,ue=this.g;if((Y=ue.g?ue.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!O(Y)){var W=Y;break t}}W=null}if(h=W)Yt(this.i,this.l,h,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,us(this,h);else{this.o=!1,this.s=3,Ae(12),xt(this),Vn(this);break e}}if(this.P){h=!0;let Oe;for(;!this.J&&this.C<x.length;)if(Oe=of(this,x),Oe==as){ye==4&&(this.s=4,Ae(14),h=!1),Yt(this.i,this.l,null,"[Incomplete Response]");break}else if(Oe==Aa){this.s=4,Ae(15),Yt(this.i,this.l,x,"[Invalid Chunk]"),h=!1;break}else Yt(this.i,this.l,Oe,null),us(this,Oe);if(Ca(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ye!=4||x.length!=0||this.h.h||(this.s=1,Ae(16),h=!1),this.o=this.o&&h,!h)Yt(this.i,this.l,x,"[Invalid Chunked Response]"),xt(this),Vn(this);else if(0<x.length&&!this.W){this.W=!0;var ge=this.j;ge.g==this&&ge.ba&&!ge.M&&(ge.j.info("Great, no buffering proxy detected. Bytes received: "+x.length),gs(ge),ge.M=!0,Ae(11))}}else Yt(this.i,this.l,x,null),us(this,x);ye==4&&xt(this),this.o&&!this.J&&(ye==4?ec(this.j,this):(this.o=!1,Pr(this)))}else If(this.g),h==400&&0<x.indexOf("Unknown SID")?(this.s=3,Ae(12)):(this.s=0,Ae(13)),xt(this),Vn(this)}}}catch{}finally{}};function Ca(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function of(o,l){var h=o.C,f=l.indexOf(`
`,h);return f==-1?as:(h=Number(l.substring(h,f)),isNaN(h)?Aa:(f+=1,f+h>l.length?as:(l=l.slice(f,f+h),o.C=f+h,l)))}lt.prototype.cancel=function(){this.J=!0,xt(this)};function Pr(o){o.S=Date.now()+o.I,Sa(o,o.I)}function Sa(o,l){if(o.B!=null)throw Error("WatchDog timer not null");o.B=On(v(o.ba,o),l)}function ls(o){o.B&&(c.clearTimeout(o.B),o.B=null)}lt.prototype.ba=function(){this.B=null;const o=Date.now();0<=o-this.S?(rf(this.i,this.A),this.L!=2&&(Nn(),Ae(17)),xt(this),this.s=2,Vn(this)):Sa(this,this.S-o)};function Vn(o){o.j.G==0||o.J||ec(o.j,o)}function xt(o){ls(o);var l=o.M;l&&typeof l.ma=="function"&&l.ma(),o.M=null,ga(o.U),o.g&&(l=o.g,o.g=null,l.abort(),l.ma())}function us(o,l){try{var h=o.j;if(h.G!=0&&(h.g==o||hs(h.h,o))){if(!o.K&&hs(h.h,o)&&h.G==3){try{var f=h.Da.g.parse(l)}catch{f=null}if(Array.isArray(f)&&f.length==3){var I=f;if(I[0]==0){e:if(!h.u){if(h.g)if(h.g.F+3e3<o.F)Ur(h),Vr(h);else break e;ms(h),Ae(18)}}else h.za=I[1],0<h.za-h.T&&37500>I[2]&&h.F&&h.v==0&&!h.C&&(h.C=On(v(h.Za,h),6e3));if(1>=Da(h.h)&&h.ca){try{h.ca()}catch{}h.ca=void 0}}else Ot(h,11)}else if((o.K||h.g==o)&&Ur(h),!O(l))for(I=h.Da.g.parse(l),l=0;l<I.length;l++){let W=I[l];if(h.T=W[0],W=W[1],h.G==2)if(W[0]=="c"){h.K=W[1],h.ia=W[2];const ge=W[3];ge!=null&&(h.la=ge,h.j.info("VER="+h.la));const ye=W[4];ye!=null&&(h.Aa=ye,h.j.info("SVER="+h.Aa));const Zt=W[5];Zt!=null&&typeof Zt=="number"&&0<Zt&&(f=1.5*Zt,h.L=f,h.j.info("backChannelRequestTimeoutMs_="+f)),f=h;const Oe=o.g;if(Oe){const Br=Oe.g?Oe.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Br){var A=f.h;A.g||Br.indexOf("spdy")==-1&&Br.indexOf("quic")==-1&&Br.indexOf("h2")==-1||(A.j=A.l,A.g=new Set,A.h&&(ds(A,A.h),A.h=null))}if(f.D){const ys=Oe.g?Oe.g.getResponseHeader("X-HTTP-Session-Id"):null;ys&&(f.ya=ys,J(f.I,f.D,ys))}}h.G=3,h.l&&h.l.ua(),h.ba&&(h.R=Date.now()-o.F,h.j.info("Handshake RTT: "+h.R+"ms")),f=h;var x=o;if(f.qa=rc(f,f.J?f.ia:null,f.W),x.K){xa(f.h,x);var Y=x,ue=f.L;ue&&(Y.I=ue),Y.B&&(ls(Y),Pr(Y)),f.g=x}else Xa(f);0<h.i.length&&Mr(h)}else W[0]!="stop"&&W[0]!="close"||Ot(h,7);else h.G==3&&(W[0]=="stop"||W[0]=="close"?W[0]=="stop"?Ot(h,7):ps(h):W[0]!="noop"&&h.l&&h.l.ta(W),h.v=0)}}Nn(4)}catch{}}var af=class{constructor(o,l){this.g=o,this.map=l}};function Pa(o){this.l=o||10,c.PerformanceNavigationTiming?(o=c.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function ka(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function Da(o){return o.h?1:o.g?o.g.size:0}function hs(o,l){return o.h?o.h==l:o.g?o.g.has(l):!1}function ds(o,l){o.g?o.g.add(l):o.h=l}function xa(o,l){o.h&&o.h==l?o.h=null:o.g&&o.g.has(l)&&o.g.delete(l)}Pa.prototype.cancel=function(){if(this.i=Na(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function Na(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let l=o.i;for(const h of o.g.values())l=l.concat(h.D);return l}return D(o.i)}function cf(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(u(o)){for(var l=[],h=o.length,f=0;f<h;f++)l.push(o[f]);return l}l=[],h=0;for(f in o)l[h++]=o[f];return l}function lf(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(u(o)||typeof o=="string"){var l=[];o=o.length;for(var h=0;h<o;h++)l.push(h);return l}l=[],h=0;for(const f in o)l[h++]=f;return l}}}function Oa(o,l){if(o.forEach&&typeof o.forEach=="function")o.forEach(l,void 0);else if(u(o)||typeof o=="string")Array.prototype.forEach.call(o,l,void 0);else for(var h=lf(o),f=cf(o),I=f.length,A=0;A<I;A++)l.call(void 0,f[A],h&&h[A],o)}var La=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function uf(o,l){if(o){o=o.split("&");for(var h=0;h<o.length;h++){var f=o[h].indexOf("="),I=null;if(0<=f){var A=o[h].substring(0,f);I=o[h].substring(f+1)}else A=o[h];l(A,I?decodeURIComponent(I.replace(/\+/g," ")):"")}}}function Nt(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof Nt){this.h=o.h,kr(this,o.j),this.o=o.o,this.g=o.g,Dr(this,o.s),this.l=o.l;var l=o.i,h=new Fn;h.i=l.i,l.g&&(h.g=new Map(l.g),h.h=l.h),Va(this,h),this.m=o.m}else o&&(l=String(o).match(La))?(this.h=!1,kr(this,l[1]||"",!0),this.o=Mn(l[2]||""),this.g=Mn(l[3]||"",!0),Dr(this,l[4]),this.l=Mn(l[5]||"",!0),Va(this,l[6]||"",!0),this.m=Mn(l[7]||"")):(this.h=!1,this.i=new Fn(null,this.h))}Nt.prototype.toString=function(){var o=[],l=this.j;l&&o.push(Un(l,Ma,!0),":");var h=this.g;return(h||l=="file")&&(o.push("//"),(l=this.o)&&o.push(Un(l,Ma,!0),"@"),o.push(encodeURIComponent(String(h)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h=this.s,h!=null&&o.push(":",String(h))),(h=this.l)&&(this.g&&h.charAt(0)!="/"&&o.push("/"),o.push(Un(h,h.charAt(0)=="/"?ff:df,!0))),(h=this.i.toString())&&o.push("?",h),(h=this.m)&&o.push("#",Un(h,mf)),o.join("")};function Je(o){return new Nt(o)}function kr(o,l,h){o.j=h?Mn(l,!0):l,o.j&&(o.j=o.j.replace(/:$/,""))}function Dr(o,l){if(l){if(l=Number(l),isNaN(l)||0>l)throw Error("Bad port number "+l);o.s=l}else o.s=null}function Va(o,l,h){l instanceof Fn?(o.i=l,gf(o.i,o.h)):(h||(l=Un(l,pf)),o.i=new Fn(l,o.h))}function J(o,l,h){o.i.set(l,h)}function xr(o){return J(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function Mn(o,l){return o?l?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function Un(o,l,h){return typeof o=="string"?(o=encodeURI(o).replace(l,hf),h&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function hf(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var Ma=/[#\/\?@]/g,df=/[#\?:]/g,ff=/[#\?]/g,pf=/[#\?@]/g,mf=/#/g;function Fn(o,l){this.h=this.g=null,this.i=o||null,this.j=!!l}function ut(o){o.g||(o.g=new Map,o.h=0,o.i&&uf(o.i,function(l,h){o.add(decodeURIComponent(l.replace(/\+/g," ")),h)}))}n=Fn.prototype,n.add=function(o,l){ut(this),this.i=null,o=Jt(this,o);var h=this.g.get(o);return h||this.g.set(o,h=[]),h.push(l),this.h+=1,this};function Ua(o,l){ut(o),l=Jt(o,l),o.g.has(l)&&(o.i=null,o.h-=o.g.get(l).length,o.g.delete(l))}function Fa(o,l){return ut(o),l=Jt(o,l),o.g.has(l)}n.forEach=function(o,l){ut(this),this.g.forEach(function(h,f){h.forEach(function(I){o.call(l,I,f,this)},this)},this)},n.na=function(){ut(this);const o=Array.from(this.g.values()),l=Array.from(this.g.keys()),h=[];for(let f=0;f<l.length;f++){const I=o[f];for(let A=0;A<I.length;A++)h.push(l[f])}return h},n.V=function(o){ut(this);let l=[];if(typeof o=="string")Fa(this,o)&&(l=l.concat(this.g.get(Jt(this,o))));else{o=Array.from(this.g.values());for(let h=0;h<o.length;h++)l=l.concat(o[h])}return l},n.set=function(o,l){return ut(this),this.i=null,o=Jt(this,o),Fa(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[l]),this.h+=1,this},n.get=function(o,l){return o?(o=this.V(o),0<o.length?String(o[0]):l):l};function Ba(o,l,h){Ua(o,l),0<h.length&&(o.i=null,o.g.set(Jt(o,l),D(h)),o.h+=h.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],l=Array.from(this.g.keys());for(var h=0;h<l.length;h++){var f=l[h];const A=encodeURIComponent(String(f)),x=this.V(f);for(f=0;f<x.length;f++){var I=A;x[f]!==""&&(I+="="+encodeURIComponent(String(x[f]))),o.push(I)}}return this.i=o.join("&")};function Jt(o,l){return l=String(l),o.j&&(l=l.toLowerCase()),l}function gf(o,l){l&&!o.j&&(ut(o),o.i=null,o.g.forEach(function(h,f){var I=f.toLowerCase();f!=I&&(Ua(this,f),Ba(this,I,h))},o)),o.j=l}function yf(o,l){const h=new Ln;if(c.Image){const f=new Image;f.onload=R(ht,h,"TestLoadImage: loaded",!0,l,f),f.onerror=R(ht,h,"TestLoadImage: error",!1,l,f),f.onabort=R(ht,h,"TestLoadImage: abort",!1,l,f),f.ontimeout=R(ht,h,"TestLoadImage: timeout",!1,l,f),c.setTimeout(function(){f.ontimeout&&f.ontimeout()},1e4),f.src=o}else l(!1)}function _f(o,l){const h=new Ln,f=new AbortController,I=setTimeout(()=>{f.abort(),ht(h,"TestPingServer: timeout",!1,l)},1e4);fetch(o,{signal:f.signal}).then(A=>{clearTimeout(I),A.ok?ht(h,"TestPingServer: ok",!0,l):ht(h,"TestPingServer: server error",!1,l)}).catch(()=>{clearTimeout(I),ht(h,"TestPingServer: error",!1,l)})}function ht(o,l,h,f,I){try{I&&(I.onload=null,I.onerror=null,I.onabort=null,I.ontimeout=null),f(h)}catch{}}function vf(){this.g=new ef}function Tf(o,l,h){const f=h||"";try{Oa(o,function(I,A){let x=I;d(I)&&(x=ns(I)),l.push(f+A+"="+encodeURIComponent(x))})}catch(I){throw l.push(f+"type="+encodeURIComponent("_badmap")),I}}function Nr(o){this.l=o.Ub||null,this.j=o.eb||!1}C(Nr,rs),Nr.prototype.g=function(){return new Or(this.l,this.j)},Nr.prototype.i=function(o){return function(){return o}}({});function Or(o,l){me.call(this),this.D=o,this.o=l,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}C(Or,me),n=Or.prototype,n.open=function(o,l){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=l,this.readyState=1,$n(this)},n.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const l={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(l.body=o),(this.D||c).fetch(new Request(this.A,l)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Bn(this)),this.readyState=0},n.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,$n(this)),this.g&&(this.readyState=3,$n(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;$a(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function $a(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}n.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var l=o.value?o.value:new Uint8Array(0);(l=this.v.decode(l,{stream:!o.done}))&&(this.response=this.responseText+=l)}o.done?Bn(this):$n(this),this.readyState==3&&$a(this)}},n.Ra=function(o){this.g&&(this.response=this.responseText=o,Bn(this))},n.Qa=function(o){this.g&&(this.response=o,Bn(this))},n.ga=function(){this.g&&Bn(this)};function Bn(o){o.readyState=4,o.l=null,o.j=null,o.v=null,$n(o)}n.setRequestHeader=function(o,l){this.u.append(o,l)},n.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],l=this.h.entries();for(var h=l.next();!h.done;)h=h.value,o.push(h[0]+": "+h[1]),h=l.next();return o.join(`\r
`)};function $n(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(Or.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function ja(o){let l="";return X(o,function(h,f){l+=f,l+=":",l+=h,l+=`\r
`}),l}function fs(o,l,h){e:{for(f in h){var f=!1;break e}f=!0}f||(h=ja(h),typeof o=="string"?h!=null&&encodeURIComponent(String(h)):J(o,l,h))}function ee(o){me.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}C(ee,me);var Ef=/^https?$/i,wf=["POST","PUT"];n=ee.prototype,n.Ha=function(o){this.J=o},n.ea=function(o,l,h,f){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);l=l?l.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():os.g(),this.v=this.o?ya(this.o):ya(os),this.g.onreadystatechange=v(this.Ea,this);try{this.B=!0,this.g.open(l,String(o),!0),this.B=!1}catch(A){qa(this,A);return}if(o=h||"",h=new Map(this.headers),f)if(Object.getPrototypeOf(f)===Object.prototype)for(var I in f)h.set(I,f[I]);else if(typeof f.keys=="function"&&typeof f.get=="function")for(const A of f.keys())h.set(A,f.get(A));else throw Error("Unknown input type for opt_headers: "+String(f));f=Array.from(h.keys()).find(A=>A.toLowerCase()=="content-type"),I=c.FormData&&o instanceof c.FormData,!(0<=Array.prototype.indexOf.call(wf,l,void 0))||f||I||h.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[A,x]of h)this.g.setRequestHeader(A,x);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Ga(this),this.u=!0,this.g.send(o),this.u=!1}catch(A){qa(this,A)}};function qa(o,l){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=l,o.m=5,Ha(o),Lr(o)}function Ha(o){o.A||(o.A=!0,be(o,"complete"),be(o,"error"))}n.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,be(this,"complete"),be(this,"abort"),Lr(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Lr(this,!0)),ee.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?za(this):this.bb())},n.bb=function(){za(this)};function za(o){if(o.h&&typeof a<"u"&&(!o.v[1]||Xe(o)!=4||o.Z()!=2)){if(o.u&&Xe(o)==4)fa(o.Ea,0,o);else if(be(o,"readystatechange"),Xe(o)==4){o.h=!1;try{const x=o.Z();e:switch(x){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var l=!0;break e;default:l=!1}var h;if(!(h=l)){var f;if(f=x===0){var I=String(o.D).match(La)[1]||null;!I&&c.self&&c.self.location&&(I=c.self.location.protocol.slice(0,-1)),f=!Ef.test(I?I.toLowerCase():"")}h=f}if(h)be(o,"complete"),be(o,"success");else{o.m=6;try{var A=2<Xe(o)?o.g.statusText:""}catch{A=""}o.l=A+" ["+o.Z()+"]",Ha(o)}}finally{Lr(o)}}}}function Lr(o,l){if(o.g){Ga(o);const h=o.g,f=o.v[0]?()=>{}:null;o.g=null,o.v=null,l||be(o,"ready");try{h.onreadystatechange=f}catch{}}}function Ga(o){o.I&&(c.clearTimeout(o.I),o.I=null)}n.isActive=function(){return!!this.g};function Xe(o){return o.g?o.g.readyState:0}n.Z=function(){try{return 2<Xe(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(o){if(this.g){var l=this.g.responseText;return o&&l.indexOf(o)==0&&(l=l.substring(o.length)),Zd(l)}};function Wa(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function If(o){const l={};o=(o.g&&2<=Xe(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let f=0;f<o.length;f++){if(O(o[f]))continue;var h=w(o[f]);const I=h[0];if(h=h[1],typeof h!="string")continue;h=h.trim();const A=l[I]||[];l[I]=A,A.push(h)}E(l,function(f){return f.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function jn(o,l,h){return h&&h.internalChannelParams&&h.internalChannelParams[o]||l}function Ka(o){this.Aa=0,this.i=[],this.j=new Ln,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=jn("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=jn("baseRetryDelayMs",5e3,o),this.cb=jn("retryDelaySeedMs",1e4,o),this.Wa=jn("forwardChannelMaxRetries",2,o),this.wa=jn("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new Pa(o&&o.concurrentRequestLimit),this.Da=new vf,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=Ka.prototype,n.la=8,n.G=1,n.connect=function(o,l,h,f){Ae(0),this.W=o,this.H=l||{},h&&f!==void 0&&(this.H.OSID=h,this.H.OAID=f),this.F=this.X,this.I=rc(this,null,this.W),Mr(this)};function ps(o){if(Qa(o),o.G==3){var l=o.U++,h=Je(o.I);if(J(h,"SID",o.K),J(h,"RID",l),J(h,"TYPE","terminate"),qn(o,h),l=new lt(o,o.j,l),l.L=2,l.v=xr(Je(h)),h=!1,c.navigator&&c.navigator.sendBeacon)try{h=c.navigator.sendBeacon(l.v.toString(),"")}catch{}!h&&c.Image&&(new Image().src=l.v,h=!0),h||(l.g=ic(l.j,null),l.g.ea(l.v)),l.F=Date.now(),Pr(l)}nc(o)}function Vr(o){o.g&&(gs(o),o.g.cancel(),o.g=null)}function Qa(o){Vr(o),o.u&&(c.clearTimeout(o.u),o.u=null),Ur(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&c.clearTimeout(o.s),o.s=null)}function Mr(o){if(!ka(o.h)&&!o.s){o.s=!0;var l=o.Ga;Sn||ca(),Pn||(Sn(),Pn=!0),Ki.add(l,o),o.B=0}}function bf(o,l){return Da(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=l.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=On(v(o.Ga,o,l),tc(o,o.B)),o.B++,!0)}n.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;const I=new lt(this,this.j,o);let A=this.o;if(this.S&&(A?(A=m(A),T(A,this.S)):A=this.S),this.m!==null||this.O||(I.H=A,A=null),this.P)e:{for(var l=0,h=0;h<this.i.length;h++){t:{var f=this.i[h];if("__data__"in f.map&&(f=f.map.__data__,typeof f=="string")){f=f.length;break t}f=void 0}if(f===void 0)break;if(l+=f,4096<l){l=h;break e}if(l===4096||h===this.i.length-1){l=h+1;break e}}l=1e3}else l=1e3;l=Ja(this,I,l),h=Je(this.I),J(h,"RID",o),J(h,"CVER",22),this.D&&J(h,"X-HTTP-Session-Id",this.D),qn(this,h),A&&(this.O?l="headers="+encodeURIComponent(String(ja(A)))+"&"+l:this.m&&fs(h,this.m,A)),ds(this.h,I),this.Ua&&J(h,"TYPE","init"),this.P?(J(h,"$req",l),J(h,"SID","null"),I.T=!0,cs(I,h,null)):cs(I,h,l),this.G=2}}else this.G==3&&(o?Ya(this,o):this.i.length==0||ka(this.h)||Ya(this))};function Ya(o,l){var h;l?h=l.l:h=o.U++;const f=Je(o.I);J(f,"SID",o.K),J(f,"RID",h),J(f,"AID",o.T),qn(o,f),o.m&&o.o&&fs(f,o.m,o.o),h=new lt(o,o.j,h,o.B+1),o.m===null&&(h.H=o.o),l&&(o.i=l.D.concat(o.i)),l=Ja(o,h,1e3),h.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),ds(o.h,h),cs(h,f,l)}function qn(o,l){o.H&&X(o.H,function(h,f){J(l,f,h)}),o.l&&Oa({},function(h,f){J(l,f,h)})}function Ja(o,l,h){h=Math.min(o.i.length,h);var f=o.l?v(o.l.Na,o.l,o):null;e:{var I=o.i;let A=-1;for(;;){const x=["count="+h];A==-1?0<h?(A=I[0].g,x.push("ofs="+A)):A=0:x.push("ofs="+A);let Y=!0;for(let ue=0;ue<h;ue++){let W=I[ue].g;const ge=I[ue].map;if(W-=A,0>W)A=Math.max(0,I[ue].g-100),Y=!1;else try{Tf(ge,x,"req"+W+"_")}catch{f&&f(ge)}}if(Y){f=x.join("&");break e}}}return o=o.i.splice(0,h),l.D=o,f}function Xa(o){if(!o.g&&!o.u){o.Y=1;var l=o.Fa;Sn||ca(),Pn||(Sn(),Pn=!0),Ki.add(l,o),o.v=0}}function ms(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=On(v(o.Fa,o),tc(o,o.v)),o.v++,!0)}n.Fa=function(){if(this.u=null,Za(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=On(v(this.ab,this),o)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Ae(10),Vr(this),Za(this))};function gs(o){o.A!=null&&(c.clearTimeout(o.A),o.A=null)}function Za(o){o.g=new lt(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var l=Je(o.qa);J(l,"RID","rpc"),J(l,"SID",o.K),J(l,"AID",o.T),J(l,"CI",o.F?"0":"1"),!o.F&&o.ja&&J(l,"TO",o.ja),J(l,"TYPE","xmlhttp"),qn(o,l),o.m&&o.o&&fs(l,o.m,o.o),o.L&&(o.g.I=o.L);var h=o.g;o=o.ia,h.L=1,h.v=xr(Je(l)),h.m=null,h.P=!0,Ra(h,o)}n.Za=function(){this.C!=null&&(this.C=null,Vr(this),ms(this),Ae(19))};function Ur(o){o.C!=null&&(c.clearTimeout(o.C),o.C=null)}function ec(o,l){var h=null;if(o.g==l){Ur(o),gs(o),o.g=null;var f=2}else if(hs(o.h,l))h=l.D,xa(o.h,l),f=1;else return;if(o.G!=0){if(l.o)if(f==1){h=l.m?l.m.length:0,l=Date.now()-l.F;var I=o.B;f=Rr(),be(f,new wa(f,h)),Mr(o)}else Xa(o);else if(I=l.s,I==3||I==0&&0<l.X||!(f==1&&bf(o,l)||f==2&&ms(o)))switch(h&&0<h.length&&(l=o.h,l.i=l.i.concat(h)),I){case 1:Ot(o,5);break;case 4:Ot(o,10);break;case 3:Ot(o,6);break;default:Ot(o,2)}}}function tc(o,l){let h=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(h*=2),h*l}function Ot(o,l){if(o.j.info("Error code "+l),l==2){var h=v(o.fb,o),f=o.Xa;const I=!f;f=new Nt(f||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||kr(f,"https"),xr(f),I?yf(f.toString(),h):_f(f.toString(),h)}else Ae(2);o.G=0,o.l&&o.l.sa(l),nc(o),Qa(o)}n.fb=function(o){o?(this.j.info("Successfully pinged google.com"),Ae(2)):(this.j.info("Failed to ping google.com"),Ae(1))};function nc(o){if(o.G=0,o.ka=[],o.l){const l=Na(o.h);(l.length!=0||o.i.length!=0)&&(P(o.ka,l),P(o.ka,o.i),o.h.i.length=0,D(o.i),o.i.length=0),o.l.ra()}}function rc(o,l,h){var f=h instanceof Nt?Je(h):new Nt(h);if(f.g!="")l&&(f.g=l+"."+f.g),Dr(f,f.s);else{var I=c.location;f=I.protocol,l=l?l+"."+I.hostname:I.hostname,I=+I.port;var A=new Nt(null);f&&kr(A,f),l&&(A.g=l),I&&Dr(A,I),h&&(A.l=h),f=A}return h=o.D,l=o.ya,h&&l&&J(f,h,l),J(f,"VER",o.la),qn(o,f),f}function ic(o,l,h){if(l&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return l=o.Ca&&!o.pa?new ee(new Nr({eb:h})):new ee(o.pa),l.Ha(o.J),l}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function sc(){}n=sc.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function Fr(){}Fr.prototype.g=function(o,l){return new Se(o,l)};function Se(o,l){me.call(this),this.g=new Ka(l),this.l=o,this.h=l&&l.messageUrlParams||null,o=l&&l.messageHeaders||null,l&&l.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=l&&l.initMessageHeaders||null,l&&l.messageContentType&&(o?o["X-WebChannel-Content-Type"]=l.messageContentType:o={"X-WebChannel-Content-Type":l.messageContentType}),l&&l.va&&(o?o["X-WebChannel-Client-Profile"]=l.va:o={"X-WebChannel-Client-Profile":l.va}),this.g.S=o,(o=l&&l.Sb)&&!O(o)&&(this.g.m=o),this.v=l&&l.supportsCrossDomainXhr||!1,this.u=l&&l.sendRawJson||!1,(l=l&&l.httpSessionIdParam)&&!O(l)&&(this.g.D=l,o=this.h,o!==null&&l in o&&(o=this.h,l in o&&delete o[l])),this.j=new Xt(this)}C(Se,me),Se.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Se.prototype.close=function(){ps(this.g)},Se.prototype.o=function(o){var l=this.g;if(typeof o=="string"){var h={};h.__data__=o,o=h}else this.u&&(h={},h.__data__=ns(o),o=h);l.i.push(new af(l.Ya++,o)),l.G==3&&Mr(l)},Se.prototype.N=function(){this.g.l=null,delete this.j,ps(this.g),delete this.g,Se.aa.N.call(this)};function oc(o){is.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var l=o.__sm__;if(l){e:{for(const h in l){o=h;break e}o=void 0}(this.i=o)&&(o=this.i,l=l!==null&&o in l?l[o]:void 0),this.data=l}else this.data=o}C(oc,is);function ac(){ss.call(this),this.status=1}C(ac,ss);function Xt(o){this.g=o}C(Xt,sc),Xt.prototype.ua=function(){be(this.g,"a")},Xt.prototype.ta=function(o){be(this.g,new oc(o))},Xt.prototype.sa=function(o){be(this.g,new ac)},Xt.prototype.ra=function(){be(this.g,"b")},Fr.prototype.createWebChannel=Fr.prototype.g,Se.prototype.send=Se.prototype.o,Se.prototype.open=Se.prototype.m,Se.prototype.close=Se.prototype.close,ph=function(){return new Fr},fh=function(){return Rr()},dh=Dt,zs={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Cr.NO_ERROR=0,Cr.TIMEOUT=8,Cr.HTTP_ERROR=6,Zr=Cr,Ia.COMPLETE="complete",hh=Ia,_a.EventType=xn,xn.OPEN="a",xn.CLOSE="b",xn.ERROR="c",xn.MESSAGE="d",me.prototype.listen=me.prototype.K,Wn=_a,ee.prototype.listenOnce=ee.prototype.L,ee.prototype.getLastError=ee.prototype.Ka,ee.prototype.getLastErrorCode=ee.prototype.Ba,ee.prototype.getStatus=ee.prototype.Z,ee.prototype.getResponseJson=ee.prototype.Oa,ee.prototype.getResponseText=ee.prototype.oa,ee.prototype.send=ee.prototype.ea,ee.prototype.setWithCredentials=ee.prototype.Ha,uh=ee}).apply(typeof jr<"u"?jr:typeof self<"u"?self:typeof window<"u"?window:{});const Kc="@firebase/firestore",Qc="4.7.16";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Te{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Te.UNAUTHENTICATED=new Te(null),Te.GOOGLE_CREDENTIALS=new Te("google-credentials-uid"),Te.FIRST_PARTY=new Te("first-party-uid"),Te.MOCK_USER=new Te("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let In="11.8.1";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jt=new Pi("@firebase/firestore");function tn(){return jt.logLevel}function N(n,...e){if(jt.logLevel<=H.DEBUG){const t=e.map(Co);jt.debug(`Firestore (${In}): ${n}`,...t)}}function it(n,...e){if(jt.logLevel<=H.ERROR){const t=e.map(Co);jt.error(`Firestore (${In}): ${n}`,...t)}}function fn(n,...e){if(jt.logLevel<=H.WARN){const t=e.map(Co);jt.warn(`Firestore (${In}): ${n}`,...t)}}function Co(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function F(n,e,t){let r="Unexpected state";typeof e=="string"?r=e:t=e,mh(n,r,t)}function mh(n,e,t){let r=`FIRESTORE (${In}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{r+=" CONTEXT: "+JSON.stringify(t)}catch{r+=" CONTEXT: "+t}throw it(r),new Error(r)}function Q(n,e,t,r){let i="Unexpected state";typeof t=="string"?i=t:r=t,n||mh(e,i,r)}function $(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class V extends Fe{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gh{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Q_{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Te.UNAUTHENTICATED))}shutdown(){}}class Y_{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class J_{constructor(e){this.t=e,this.currentUser=Te.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Q(this.o===void 0,42304);let r=this.i;const i=u=>this.i!==r?(r=this.i,t(u)):Promise.resolve();let s=new Et;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Et,e.enqueueRetryable(()=>i(this.currentUser))};const a=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},c=u=>{N("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(u=>c(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?c(u):(N("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Et)}},0),a()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(N("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Q(typeof r.accessToken=="string",31837,{l:r}),new gh(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Q(e===null||typeof e=="string",2055,{h:e}),new Te(e)}}class X_{constructor(e,t,r){this.P=e,this.T=t,this.I=r,this.type="FirstParty",this.user=Te.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class Z_{constructor(e,t,r){this.P=e,this.T=t,this.I=r}getToken(){return Promise.resolve(new X_(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable(()=>t(Te.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Yc{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class ev{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Pe(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){Q(this.o===void 0,3512);const r=s=>{s.error!=null&&N("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const a=s.token!==this.m;return this.m=s.token,N("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{N("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.V.getImmediate({optional:!0});s?i(s):N("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new Yc(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(Q(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new Yc(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tv(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
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
 */function yh(){return new TextEncoder}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _h{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const i=tv(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<t&&(r+=e.charAt(i[s]%62))}return r}}function q(n,e){return n<e?-1:n>e?1:0}function Gs(n,e){let t=0;for(;t<n.length&&t<e.length;){const r=n.codePointAt(t),i=e.codePointAt(t);if(r!==i){if(r<128&&i<128)return q(r,i);{const s=yh(),a=nv(s.encode(Jc(n,t)),s.encode(Jc(e,t)));return a!==0?a:q(r,i)}}t+=r>65535?2:1}return q(n.length,e.length)}function Jc(n,e){return n.codePointAt(e)>65535?n.substring(e,e+2):n.substring(e,e+1)}function nv(n,e){for(let t=0;t<n.length&&t<e.length;++t)if(n[t]!==e[t])return q(n[t],e[t]);return q(n.length,e.length)}function pn(n,e,t){return n.length===e.length&&n.every((r,i)=>t(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xc=-62135596800,Zc=1e6;class se{static now(){return se.fromMillis(Date.now())}static fromDate(e){return se.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor((e-1e3*t)*Zc);return new se(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new V(k.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new V(k.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<Xc)throw new V(k.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new V(k.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Zc}_compareTo(e){return this.seconds===e.seconds?q(this.nanoseconds,e.nanoseconds):q(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds-Xc;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B{static fromTimestamp(e){return new B(e)}static min(){return new B(new se(0,0))}static max(){return new B(new se(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const el="__name__";class Be{constructor(e,t,r){t===void 0?t=0:t>e.length&&F(637,{offset:t,range:e.length}),r===void 0?r=e.length-t:r>e.length-t&&F(1746,{length:r,range:e.length-t}),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return Be.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Be?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let i=0;i<r;i++){const s=Be.compareSegments(e.get(i),t.get(i));if(s!==0)return s}return q(e.length,t.length)}static compareSegments(e,t){const r=Be.isNumericId(e),i=Be.isNumericId(t);return r&&!i?-1:!r&&i?1:r&&i?Be.extractNumericId(e).compare(Be.extractNumericId(t)):Gs(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Tt.fromString(e.substring(4,e.length-2))}}class te extends Be{construct(e,t,r){return new te(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new V(k.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(i=>i.length>0))}return new te(t)}static emptyPath(){return new te([])}}const rv=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class de extends Be{construct(e,t,r){return new de(e,t,r)}static isValidIdentifier(e){return rv.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),de.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===el}static keyField(){return new de([el])}static fromServerFormat(e){const t=[];let r="",i=0;const s=()=>{if(r.length===0)throw new V(k.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let a=!1;for(;i<e.length;){const c=e[i];if(c==="\\"){if(i+1===e.length)throw new V(k.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new V(k.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else c==="`"?(a=!a,i++):c!=="."||a?(r+=c,i++):(s(),i++)}if(s(),a)throw new V(k.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new de(t)}static emptyPath(){return new de([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M{constructor(e){this.path=e}static fromPath(e){return new M(te.fromString(e))}static fromName(e){return new M(te.fromString(e).popFirst(5))}static empty(){return new M(te.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&te.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return te.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new M(new te(e.slice()))}}/**
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
 */const sr=-1;function iv(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,i=B.fromTimestamp(r===1e9?new se(t+1,0):new se(t,r));return new bt(i,M.empty(),e)}function sv(n){return new bt(n.readTime,n.key,sr)}class bt{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new bt(B.min(),M.empty(),sr)}static max(){return new bt(B.max(),M.empty(),sr)}}function ov(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=M.comparator(n.documentKey,e.documentKey),t!==0?t:q(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const av="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class cv{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bn(n){if(n.code!==k.FAILED_PRECONDITION||n.message!==av)throw n;N("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&F(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new S((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(t,s).next(r,i)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof S?t:S.resolve(t)}catch(t){return S.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):S.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):S.reject(t)}static resolve(e){return new S((t,r)=>{t(e)})}static reject(e){return new S((t,r)=>{r(e)})}static waitFor(e){return new S((t,r)=>{let i=0,s=0,a=!1;e.forEach(c=>{++i,c.next(()=>{++s,a&&s===i&&t()},u=>r(u))}),a=!0,s===i&&t()})}static or(e){let t=S.resolve(!1);for(const r of e)t=t.next(i=>i?S.resolve(i):r());return t}static forEach(e,t){const r=[];return e.forEach((i,s)=>{r.push(t.call(this,i,s))}),this.waitFor(r)}static mapArray(e,t){return new S((r,i)=>{const s=e.length,a=new Array(s);let c=0;for(let u=0;u<s;u++){const d=u;t(e[d]).next(p=>{a[d]=p,++c,c===s&&r(a)},p=>i(p))}})}static doWhile(e,t){return new S((r,i)=>{const s=()=>{e()===!0?t().next(()=>{s()},i):r()};s()})}}function lv(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function An(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class Li{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ue(r),this.ce=r=>t.writeSequenceNumber(r))}ue(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ce&&this.ce(e),e}}Li.le=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const So=-1;function Vi(n){return n==null}function pi(n){return n===0&&1/n==-1/0}function uv(n){return typeof n=="number"&&Number.isInteger(n)&&!pi(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vh="";function hv(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=tl(e)),e=dv(n.get(t),e);return tl(e)}function dv(n,e){let t=e;const r=n.length;for(let i=0;i<r;i++){const s=n.charAt(i);switch(s){case"\0":t+="";break;case vh:t+="";break;default:t+=s}}return t}function tl(n){return n+vh+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nl(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Gt(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function Th(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z{constructor(e,t){this.comparator=e,this.root=t||he.EMPTY}insert(e,t){return new Z(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,he.BLACK,null,null))}remove(e){return new Z(this.comparator,this.root.remove(e,this.comparator).copy(null,null,he.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return t+r.left.size;i<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new qr(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new qr(this.root,e,this.comparator,!1)}getReverseIterator(){return new qr(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new qr(this.root,e,this.comparator,!0)}}class qr{constructor(e,t,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=t?r(e.key,t):1,t&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class he{constructor(e,t,r,i,s){this.key=e,this.value=t,this.color=r??he.RED,this.left=i??he.EMPTY,this.right=s??he.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,i,s){return new he(e??this.key,t??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,t,r),null):s===0?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return he.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),t(e,i.key)===0){if(i.right.isEmpty())return he.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,he.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,he.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw F(43730,{key:this.key,value:this.value});if(this.right.isRed())throw F(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw F(27949);return e+(this.isRed()?0:1)}}he.EMPTY=null,he.RED=!0,he.BLACK=!1;he.EMPTY=new class{constructor(){this.size=0}get key(){throw F(57766)}get value(){throw F(16141)}get color(){throw F(16727)}get left(){throw F(29726)}get right(){throw F(36894)}copy(e,t,r,i,s){return this}insert(e,t,r){return new he(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ae{constructor(e){this.comparator=e,this.data=new Z(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new rl(this.data.getIterator())}getIteratorFrom(e){return new rl(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof ae)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const i=t.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new ae(this.comparator);return t.data=e,t}}class rl{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ve{constructor(e){this.fields=e,e.sort(de.comparator)}static empty(){return new Ve([])}unionWith(e){let t=new ae(de.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new Ve(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return pn(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
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
 */class Eh extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fe{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new Eh("Invalid base64 string: "+s):s}}(e);return new fe(t)}static fromUint8Array(e){const t=function(i){let s="";for(let a=0;a<i.length;++a)s+=String.fromCharCode(i[a]);return s}(e);return new fe(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let i=0;i<t.length;i++)r[i]=t.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return q(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}fe.EMPTY_BYTE_STRING=new fe("");const fv=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function At(n){if(Q(!!n,39018),typeof n=="string"){let e=0;const t=fv.exec(n);if(Q(!!t,46558,{timestamp:n}),t[1]){let i=t[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:re(n.seconds),nanos:re(n.nanos)}}function re(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Rt(n){return typeof n=="string"?fe.fromBase64String(n):fe.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wh="server_timestamp",Ih="__type__",bh="__previous_value__",Ah="__local_write_time__";function Po(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[Ih])===null||t===void 0?void 0:t.stringValue)===wh}function Mi(n){const e=n.mapValue.fields[bh];return Po(e)?Mi(e):e}function or(n){const e=At(n.mapValue.fields[Ah].timestampValue);return new se(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pv{constructor(e,t,r,i,s,a,c,u,d,p){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=a,this.autoDetectLongPolling=c,this.longPollingOptions=u,this.useFetchStreams=d,this.isUsingEmulator=p}}const mi="(default)";class ar{constructor(e,t){this.projectId=e,this.database=t||mi}static empty(){return new ar("","")}get isDefaultDatabase(){return this.database===mi}isEqual(e){return e instanceof ar&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rh="__type__",mv="__max__",Hr={mapValue:{}},Ch="__vector__",gi="value";function Ct(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Po(n)?4:yv(n)?9007199254740991:gv(n)?10:11:F(28295,{value:n})}function Ke(n,e){if(n===e)return!0;const t=Ct(n);if(t!==Ct(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return or(n).isEqual(or(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const a=At(i.timestampValue),c=At(s.timestampValue);return a.seconds===c.seconds&&a.nanos===c.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(i,s){return Rt(i.bytesValue).isEqual(Rt(s.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(i,s){return re(i.geoPointValue.latitude)===re(s.geoPointValue.latitude)&&re(i.geoPointValue.longitude)===re(s.geoPointValue.longitude)}(n,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return re(i.integerValue)===re(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const a=re(i.doubleValue),c=re(s.doubleValue);return a===c?pi(a)===pi(c):isNaN(a)&&isNaN(c)}return!1}(n,e);case 9:return pn(n.arrayValue.values||[],e.arrayValue.values||[],Ke);case 10:case 11:return function(i,s){const a=i.mapValue.fields||{},c=s.mapValue.fields||{};if(nl(a)!==nl(c))return!1;for(const u in a)if(a.hasOwnProperty(u)&&(c[u]===void 0||!Ke(a[u],c[u])))return!1;return!0}(n,e);default:return F(52216,{left:n})}}function cr(n,e){return(n.values||[]).find(t=>Ke(t,e))!==void 0}function mn(n,e){if(n===e)return 0;const t=Ct(n),r=Ct(e);if(t!==r)return q(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return q(n.booleanValue,e.booleanValue);case 2:return function(s,a){const c=re(s.integerValue||s.doubleValue),u=re(a.integerValue||a.doubleValue);return c<u?-1:c>u?1:c===u?0:isNaN(c)?isNaN(u)?0:-1:1}(n,e);case 3:return il(n.timestampValue,e.timestampValue);case 4:return il(or(n),or(e));case 5:return Gs(n.stringValue,e.stringValue);case 6:return function(s,a){const c=Rt(s),u=Rt(a);return c.compareTo(u)}(n.bytesValue,e.bytesValue);case 7:return function(s,a){const c=s.split("/"),u=a.split("/");for(let d=0;d<c.length&&d<u.length;d++){const p=q(c[d],u[d]);if(p!==0)return p}return q(c.length,u.length)}(n.referenceValue,e.referenceValue);case 8:return function(s,a){const c=q(re(s.latitude),re(a.latitude));return c!==0?c:q(re(s.longitude),re(a.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return sl(n.arrayValue,e.arrayValue);case 10:return function(s,a){var c,u,d,p;const g=s.fields||{},v=a.fields||{},R=(c=g[gi])===null||c===void 0?void 0:c.arrayValue,C=(u=v[gi])===null||u===void 0?void 0:u.arrayValue,D=q(((d=R==null?void 0:R.values)===null||d===void 0?void 0:d.length)||0,((p=C==null?void 0:C.values)===null||p===void 0?void 0:p.length)||0);return D!==0?D:sl(R,C)}(n.mapValue,e.mapValue);case 11:return function(s,a){if(s===Hr.mapValue&&a===Hr.mapValue)return 0;if(s===Hr.mapValue)return 1;if(a===Hr.mapValue)return-1;const c=s.fields||{},u=Object.keys(c),d=a.fields||{},p=Object.keys(d);u.sort(),p.sort();for(let g=0;g<u.length&&g<p.length;++g){const v=Gs(u[g],p[g]);if(v!==0)return v;const R=mn(c[u[g]],d[p[g]]);if(R!==0)return R}return q(u.length,p.length)}(n.mapValue,e.mapValue);default:throw F(23264,{Pe:t})}}function il(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return q(n,e);const t=At(n),r=At(e),i=q(t.seconds,r.seconds);return i!==0?i:q(t.nanos,r.nanos)}function sl(n,e){const t=n.values||[],r=e.values||[];for(let i=0;i<t.length&&i<r.length;++i){const s=mn(t[i],r[i]);if(s)return s}return q(t.length,r.length)}function gn(n){return Ws(n)}function Ws(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=At(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return Rt(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return M.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",i=!0;for(const s of t.values||[])i?i=!1:r+=",",r+=Ws(s);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let i="{",s=!0;for(const a of r)s?s=!1:i+=",",i+=`${a}:${Ws(t.fields[a])}`;return i+"}"}(n.mapValue):F(61005,{value:n})}function ei(n){switch(Ct(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Mi(n);return e?16+ei(e):16;case 5:return 2*n.stringValue.length;case 6:return Rt(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((i,s)=>i+ei(s),0)}(n.arrayValue);case 10:case 11:return function(r){let i=0;return Gt(r.fields,(s,a)=>{i+=s.length+ei(a)}),i}(n.mapValue);default:throw F(13486,{value:n})}}function Ks(n){return!!n&&"integerValue"in n}function ko(n){return!!n&&"arrayValue"in n}function ol(n){return!!n&&"nullValue"in n}function al(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function ti(n){return!!n&&"mapValue"in n}function gv(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[Rh])===null||t===void 0?void 0:t.stringValue)===Ch}function Zn(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return Gt(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=Zn(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Zn(n.arrayValue.values[t]);return e}return Object.assign({},n)}function yv(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===mv}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class De{constructor(e){this.value=e}static empty(){return new De({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!ti(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Zn(t)}setAll(e){let t=de.emptyPath(),r={},i=[];e.forEach((a,c)=>{if(!t.isImmediateParentOf(c)){const u=this.getFieldsMap(t);this.applyChanges(u,r,i),r={},i=[],t=c.popLast()}a?r[c.lastSegment()]=Zn(a):i.push(c.lastSegment())});const s=this.getFieldsMap(t);this.applyChanges(s,r,i)}delete(e){const t=this.field(e.popLast());ti(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Ke(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=t.mapValue.fields[e.get(r)];ti(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,r){Gt(t,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new De(Zn(this.value))}}function Sh(n){const e=[];return Gt(n.fields,(t,r)=>{const i=new de([t]);if(ti(r)){const s=Sh(r.mapValue).fields;if(s.length===0)e.push(i);else for(const a of s)e.push(i.child(a))}else e.push(i)}),new Ve(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ee{constructor(e,t,r,i,s,a,c){this.key=e,this.documentType=t,this.version=r,this.readTime=i,this.createTime=s,this.data=a,this.documentState=c}static newInvalidDocument(e){return new Ee(e,0,B.min(),B.min(),B.min(),De.empty(),0)}static newFoundDocument(e,t,r,i){return new Ee(e,1,t,B.min(),r,i,0)}static newNoDocument(e,t){return new Ee(e,2,t,B.min(),B.min(),De.empty(),0)}static newUnknownDocument(e,t){return new Ee(e,3,t,B.min(),B.min(),De.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(B.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=De.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=De.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=B.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ee&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ee(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class yi{constructor(e,t){this.position=e,this.inclusive=t}}function cl(n,e,t){let r=0;for(let i=0;i<n.position.length;i++){const s=e[i],a=n.position[i];if(s.field.isKeyField()?r=M.comparator(M.fromName(a.referenceValue),t.key):r=mn(a,t.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function ll(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!Ke(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class _i{constructor(e,t="asc"){this.field=e,this.dir=t}}function _v(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class Ph{}class oe extends Ph{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new Tv(e,t,r):t==="array-contains"?new Iv(e,r):t==="in"?new bv(e,r):t==="not-in"?new Av(e,r):t==="array-contains-any"?new Rv(e,r):new oe(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new Ev(e,r):new wv(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(mn(t,this.value)):t!==null&&Ct(this.value)===Ct(t)&&this.matchesComparison(mn(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return F(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Qe extends Ph{constructor(e,t){super(),this.filters=e,this.op=t,this.Te=null}static create(e,t){return new Qe(e,t)}matches(e){return kh(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.Te!==null||(this.Te=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.Te}getFilters(){return Object.assign([],this.filters)}}function kh(n){return n.op==="and"}function Dh(n){return vv(n)&&kh(n)}function vv(n){for(const e of n.filters)if(e instanceof Qe)return!1;return!0}function Qs(n){if(n instanceof oe)return n.field.canonicalString()+n.op.toString()+gn(n.value);if(Dh(n))return n.filters.map(e=>Qs(e)).join(",");{const e=n.filters.map(t=>Qs(t)).join(",");return`${n.op}(${e})`}}function xh(n,e){return n instanceof oe?function(r,i){return i instanceof oe&&r.op===i.op&&r.field.isEqual(i.field)&&Ke(r.value,i.value)}(n,e):n instanceof Qe?function(r,i){return i instanceof Qe&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,a,c)=>s&&xh(a,i.filters[c]),!0):!1}(n,e):void F(19439)}function Nh(n){return n instanceof oe?function(t){return`${t.field.canonicalString()} ${t.op} ${gn(t.value)}`}(n):n instanceof Qe?function(t){return t.op.toString()+" {"+t.getFilters().map(Nh).join(" ,")+"}"}(n):"Filter"}class Tv extends oe{constructor(e,t,r){super(e,t,r),this.key=M.fromName(r.referenceValue)}matches(e){const t=M.comparator(e.key,this.key);return this.matchesComparison(t)}}class Ev extends oe{constructor(e,t){super(e,"in",t),this.keys=Oh("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class wv extends oe{constructor(e,t){super(e,"not-in",t),this.keys=Oh("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function Oh(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>M.fromName(r.referenceValue))}class Iv extends oe{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return ko(t)&&cr(t.arrayValue,this.value)}}class bv extends oe{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&cr(this.value.arrayValue,t)}}class Av extends oe{constructor(e,t){super(e,"not-in",t)}matches(e){if(cr(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!cr(this.value.arrayValue,t)}}class Rv extends oe{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!ko(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>cr(this.value.arrayValue,r))}}/**
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
 */class Cv{constructor(e,t=null,r=[],i=[],s=null,a=null,c=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=a,this.endAt=c,this.Ie=null}}function ul(n,e=null,t=[],r=[],i=null,s=null,a=null){return new Cv(n,e,t,r,i,s,a)}function Do(n){const e=$(n);if(e.Ie===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>Qs(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Vi(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>gn(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>gn(r)).join(",")),e.Ie=t}return e.Ie}function xo(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!_v(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!xh(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!ll(n.startAt,e.startAt)&&ll(n.endAt,e.endAt)}function Ys(n){return M.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ui{constructor(e,t=null,r=[],i=[],s=null,a="F",c=null,u=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=a,this.startAt=c,this.endAt=u,this.Ee=null,this.de=null,this.Ae=null,this.startAt,this.endAt}}function Sv(n,e,t,r,i,s,a,c){return new Ui(n,e,t,r,i,s,a,c)}function No(n){return new Ui(n)}function hl(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Pv(n){return n.collectionGroup!==null}function er(n){const e=$(n);if(e.Ee===null){e.Ee=[];const t=new Set;for(const s of e.explicitOrderBy)e.Ee.push(s),t.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let c=new ae(de.comparator);return a.filters.forEach(u=>{u.getFlattenedFilters().forEach(d=>{d.isInequality()&&(c=c.add(d.field))})}),c})(e).forEach(s=>{t.has(s.canonicalString())||s.isKeyField()||e.Ee.push(new _i(s,r))}),t.has(de.keyField().canonicalString())||e.Ee.push(new _i(de.keyField(),r))}return e.Ee}function He(n){const e=$(n);return e.de||(e.de=kv(e,er(n))),e.de}function kv(n,e){if(n.limitType==="F")return ul(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new _i(i.field,s)});const t=n.endAt?new yi(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new yi(n.startAt.position,n.startAt.inclusive):null;return ul(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function Js(n,e,t){return new Ui(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Fi(n,e){return xo(He(n),He(e))&&n.limitType===e.limitType}function Lh(n){return`${Do(He(n))}|lt:${n.limitType}`}function nn(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(i=>Nh(i)).join(", ")}]`),Vi(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(i=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(i)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(i=>gn(i)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(i=>gn(i)).join(",")),`Target(${r})`}(He(n))}; limitType=${n.limitType})`}function Bi(n,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):M.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(n,e)&&function(r,i){for(const s of er(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(n,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(n,e)&&function(r,i){return!(r.startAt&&!function(a,c,u){const d=cl(a,c,u);return a.inclusive?d<=0:d<0}(r.startAt,er(r),i)||r.endAt&&!function(a,c,u){const d=cl(a,c,u);return a.inclusive?d>=0:d>0}(r.endAt,er(r),i))}(n,e)}function Dv(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Vh(n){return(e,t)=>{let r=!1;for(const i of er(n)){const s=xv(i,e,t);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function xv(n,e,t){const r=n.field.isKeyField()?M.comparator(e.key,t.key):function(s,a,c){const u=a.data.field(s),d=c.data.field(s);return u!==null&&d!==null?mn(u,d):F(42886)}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return F(19790,{direction:n.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wt{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,t]);i.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[t]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Gt(this.inner,(t,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return Th(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nv=new Z(M.comparator);function st(){return Nv}const Mh=new Z(M.comparator);function Kn(...n){let e=Mh;for(const t of n)e=e.insert(t.key,t);return e}function Uh(n){let e=Mh;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function Ut(){return tr()}function Fh(){return tr()}function tr(){return new Wt(n=>n.toString(),(n,e)=>n.isEqual(e))}const Ov=new Z(M.comparator),Lv=new ae(M.comparator);function z(...n){let e=Lv;for(const t of n)e=e.add(t);return e}const Vv=new ae(q);function Mv(){return Vv}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oo(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:pi(e)?"-0":e}}function Bh(n){return{integerValue:""+n}}function Uv(n,e){return uv(e)?Bh(e):Oo(n,e)}/**
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
 */class $i{constructor(){this._=void 0}}function Fv(n,e,t){return n instanceof vi?function(i,s){const a={fields:{[Ih]:{stringValue:wh},[Ah]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Po(s)&&(s=Mi(s)),s&&(a.fields[bh]=s),{mapValue:a}}(t,e):n instanceof lr?jh(n,e):n instanceof ur?qh(n,e):function(i,s){const a=$h(i,s),c=dl(a)+dl(i.Re);return Ks(a)&&Ks(i.Re)?Bh(c):Oo(i.serializer,c)}(n,e)}function Bv(n,e,t){return n instanceof lr?jh(n,e):n instanceof ur?qh(n,e):t}function $h(n,e){return n instanceof Ti?function(r){return Ks(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class vi extends $i{}class lr extends $i{constructor(e){super(),this.elements=e}}function jh(n,e){const t=Hh(e);for(const r of n.elements)t.some(i=>Ke(i,r))||t.push(r);return{arrayValue:{values:t}}}class ur extends $i{constructor(e){super(),this.elements=e}}function qh(n,e){let t=Hh(e);for(const r of n.elements)t=t.filter(i=>!Ke(i,r));return{arrayValue:{values:t}}}class Ti extends $i{constructor(e,t){super(),this.serializer=e,this.Re=t}}function dl(n){return re(n.integerValue||n.doubleValue)}function Hh(n){return ko(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function $v(n,e){return n.field.isEqual(e.field)&&function(r,i){return r instanceof lr&&i instanceof lr||r instanceof ur&&i instanceof ur?pn(r.elements,i.elements,Ke):r instanceof Ti&&i instanceof Ti?Ke(r.Re,i.Re):r instanceof vi&&i instanceof vi}(n.transform,e.transform)}class jv{constructor(e,t){this.version=e,this.transformResults=t}}class tt{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new tt}static exists(e){return new tt(void 0,e)}static updateTime(e){return new tt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ni(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class ji{}function zh(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Wh(n.key,tt.none()):new _r(n.key,n.data,tt.none());{const t=n.data,r=De.empty();let i=new ae(de.comparator);for(let s of e.fields)if(!i.has(s)){let a=t.field(s);a===null&&s.length>1&&(s=s.popLast(),a=t.field(s)),a===null?r.delete(s):r.set(s,a),i=i.add(s)}return new Kt(n.key,r,new Ve(i.toArray()),tt.none())}}function qv(n,e,t){n instanceof _r?function(i,s,a){const c=i.value.clone(),u=pl(i.fieldTransforms,s,a.transformResults);c.setAll(u),s.convertToFoundDocument(a.version,c).setHasCommittedMutations()}(n,e,t):n instanceof Kt?function(i,s,a){if(!ni(i.precondition,s))return void s.convertToUnknownDocument(a.version);const c=pl(i.fieldTransforms,s,a.transformResults),u=s.data;u.setAll(Gh(i)),u.setAll(c),s.convertToFoundDocument(a.version,u).setHasCommittedMutations()}(n,e,t):function(i,s,a){s.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,t)}function nr(n,e,t,r){return n instanceof _r?function(s,a,c,u){if(!ni(s.precondition,a))return c;const d=s.value.clone(),p=ml(s.fieldTransforms,u,a);return d.setAll(p),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),null}(n,e,t,r):n instanceof Kt?function(s,a,c,u){if(!ni(s.precondition,a))return c;const d=ml(s.fieldTransforms,u,a),p=a.data;return p.setAll(Gh(s)),p.setAll(d),a.convertToFoundDocument(a.version,p).setHasLocalMutations(),c===null?null:c.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(g=>g.field))}(n,e,t,r):function(s,a,c){return ni(s.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):c}(n,e,t)}function Hv(n,e){let t=null;for(const r of n.fieldTransforms){const i=e.data.field(r.field),s=$h(r.transform,i||null);s!=null&&(t===null&&(t=De.empty()),t.set(r.field,s))}return t||null}function fl(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&pn(r,i,(s,a)=>$v(s,a))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class _r extends ji{constructor(e,t,r,i=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Kt extends ji{constructor(e,t,r,i,s=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function Gh(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function pl(n,e,t){const r=new Map;Q(n.length===t.length,32656,{Ve:t.length,me:n.length});for(let i=0;i<t.length;i++){const s=n[i],a=s.transform,c=e.data.field(s.field);r.set(s.field,Bv(a,c,t[i]))}return r}function ml(n,e,t){const r=new Map;for(const i of n){const s=i.transform,a=t.data.field(i.field);r.set(i.field,Fv(s,a,e))}return r}class Wh extends ji{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class zv extends ji{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gv{constructor(e,t,r,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&qv(s,e,r[i])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=nr(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=nr(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=Fh();return this.mutations.forEach(i=>{const s=e.get(i.key),a=s.overlayedDocument;let c=this.applyToLocalView(a,s.mutatedFields);c=t.has(i.key)?null:c;const u=zh(a,c);u!==null&&r.set(i.key,u),a.isValidDocument()||a.convertToNoDocument(B.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),z())}isEqual(e){return this.batchId===e.batchId&&pn(this.mutations,e.mutations,(t,r)=>fl(t,r))&&pn(this.baseMutations,e.baseMutations,(t,r)=>fl(t,r))}}class Lo{constructor(e,t,r,i){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=i}static from(e,t,r){Q(e.mutations.length===r.length,58842,{fe:e.mutations.length,ge:r.length});let i=function(){return Ov}();const s=e.mutations;for(let a=0;a<s.length;a++)i=i.insert(s[a].key,r[a].version);return new Lo(e,t,r,i)}}/**
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
 */class Wv{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kv{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ie,G;function Qv(n){switch(n){case k.OK:return F(64938);case k.CANCELLED:case k.UNKNOWN:case k.DEADLINE_EXCEEDED:case k.RESOURCE_EXHAUSTED:case k.INTERNAL:case k.UNAVAILABLE:case k.UNAUTHENTICATED:return!1;case k.INVALID_ARGUMENT:case k.NOT_FOUND:case k.ALREADY_EXISTS:case k.PERMISSION_DENIED:case k.FAILED_PRECONDITION:case k.ABORTED:case k.OUT_OF_RANGE:case k.UNIMPLEMENTED:case k.DATA_LOSS:return!0;default:return F(15467,{code:n})}}function Kh(n){if(n===void 0)return it("GRPC error has no .code"),k.UNKNOWN;switch(n){case ie.OK:return k.OK;case ie.CANCELLED:return k.CANCELLED;case ie.UNKNOWN:return k.UNKNOWN;case ie.DEADLINE_EXCEEDED:return k.DEADLINE_EXCEEDED;case ie.RESOURCE_EXHAUSTED:return k.RESOURCE_EXHAUSTED;case ie.INTERNAL:return k.INTERNAL;case ie.UNAVAILABLE:return k.UNAVAILABLE;case ie.UNAUTHENTICATED:return k.UNAUTHENTICATED;case ie.INVALID_ARGUMENT:return k.INVALID_ARGUMENT;case ie.NOT_FOUND:return k.NOT_FOUND;case ie.ALREADY_EXISTS:return k.ALREADY_EXISTS;case ie.PERMISSION_DENIED:return k.PERMISSION_DENIED;case ie.FAILED_PRECONDITION:return k.FAILED_PRECONDITION;case ie.ABORTED:return k.ABORTED;case ie.OUT_OF_RANGE:return k.OUT_OF_RANGE;case ie.UNIMPLEMENTED:return k.UNIMPLEMENTED;case ie.DATA_LOSS:return k.DATA_LOSS;default:return F(39323,{code:n})}}(G=ie||(ie={}))[G.OK=0]="OK",G[G.CANCELLED=1]="CANCELLED",G[G.UNKNOWN=2]="UNKNOWN",G[G.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",G[G.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",G[G.NOT_FOUND=5]="NOT_FOUND",G[G.ALREADY_EXISTS=6]="ALREADY_EXISTS",G[G.PERMISSION_DENIED=7]="PERMISSION_DENIED",G[G.UNAUTHENTICATED=16]="UNAUTHENTICATED",G[G.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",G[G.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",G[G.ABORTED=10]="ABORTED",G[G.OUT_OF_RANGE=11]="OUT_OF_RANGE",G[G.UNIMPLEMENTED=12]="UNIMPLEMENTED",G[G.INTERNAL=13]="INTERNAL",G[G.UNAVAILABLE=14]="UNAVAILABLE",G[G.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const Yv=new Tt([4294967295,4294967295],0);function gl(n){const e=yh().encode(n),t=new lh;return t.update(e),new Uint8Array(t.digest())}function yl(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Tt([t,r],0),new Tt([i,s],0)]}class Vo{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new Qn(`Invalid padding: ${t}`);if(r<0)throw new Qn(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Qn(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new Qn(`Invalid padding when bitmap length is 0: ${t}`);this.pe=8*e.length-t,this.ye=Tt.fromNumber(this.pe)}we(e,t,r){let i=e.add(t.multiply(Tt.fromNumber(r)));return i.compare(Yv)===1&&(i=new Tt([i.getBits(0),i.getBits(1)],0)),i.modulo(this.ye).toNumber()}Se(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.pe===0)return!1;const t=gl(e),[r,i]=yl(t);for(let s=0;s<this.hashCount;s++){const a=this.we(r,i,s);if(!this.Se(a))return!1}return!0}static create(e,t,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),a=new Vo(s,i,t);return r.forEach(c=>a.insert(c)),a}insert(e){if(this.pe===0)return;const t=gl(e),[r,i]=yl(t);for(let s=0;s<this.hashCount;s++){const a=this.we(r,i,s);this.be(a)}}be(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class Qn extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qi{constructor(e,t,r,i,s){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const i=new Map;return i.set(e,vr.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new qi(B.min(),i,new Z(q),st(),z())}}class vr{constructor(e,t,r,i,s){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new vr(r,t,z(),z(),z())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ri{constructor(e,t,r,i){this.De=e,this.removedTargetIds=t,this.key=r,this.ve=i}}class Qh{constructor(e,t){this.targetId=e,this.Ce=t}}class Yh{constructor(e,t,r=fe.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=i}}class _l{constructor(){this.Fe=0,this.Me=vl(),this.xe=fe.EMPTY_BYTE_STRING,this.Oe=!1,this.Ne=!0}get current(){return this.Oe}get resumeToken(){return this.xe}get Be(){return this.Fe!==0}get Le(){return this.Ne}ke(e){e.approximateByteSize()>0&&(this.Ne=!0,this.xe=e)}qe(){let e=z(),t=z(),r=z();return this.Me.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:t=t.add(i);break;case 1:r=r.add(i);break;default:F(38017,{changeType:s})}}),new vr(this.xe,this.Oe,e,t,r)}Qe(){this.Ne=!1,this.Me=vl()}$e(e,t){this.Ne=!0,this.Me=this.Me.insert(e,t)}Ue(e){this.Ne=!0,this.Me=this.Me.remove(e)}Ke(){this.Fe+=1}We(){this.Fe-=1,Q(this.Fe>=0,3241,{Fe:this.Fe})}Ge(){this.Ne=!0,this.Oe=!0}}class Jv{constructor(e){this.ze=e,this.je=new Map,this.He=st(),this.Je=zr(),this.Ye=zr(),this.Ze=new Z(q)}Xe(e){for(const t of e.De)e.ve&&e.ve.isFoundDocument()?this.et(t,e.ve):this.tt(t,e.key,e.ve);for(const t of e.removedTargetIds)this.tt(t,e.key,e.ve)}nt(e){this.forEachTarget(e,t=>{const r=this.rt(t);switch(e.state){case 0:this.it(t)&&r.ke(e.resumeToken);break;case 1:r.We(),r.Be||r.Qe(),r.ke(e.resumeToken);break;case 2:r.We(),r.Be||this.removeTarget(t);break;case 3:this.it(t)&&(r.Ge(),r.ke(e.resumeToken));break;case 4:this.it(t)&&(this.st(t),r.ke(e.resumeToken));break;default:F(56790,{state:e.state})}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.je.forEach((r,i)=>{this.it(i)&&t(i)})}ot(e){const t=e.targetId,r=e.Ce.count,i=this._t(t);if(i){const s=i.target;if(Ys(s))if(r===0){const a=new M(s.path);this.tt(t,a,Ee.newNoDocument(a,B.min()))}else Q(r===1,20013,{expectedCount:r});else{const a=this.ut(t);if(a!==r){const c=this.ct(e),u=c?this.lt(c,e,a):1;if(u!==0){this.st(t);const d=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(t,d)}}}}}ct(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=t;let a,c;try{a=Rt(r).toUint8Array()}catch(u){if(u instanceof Eh)return fn("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{c=new Vo(a,i,s)}catch(u){return fn(u instanceof Qn?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return c.pe===0?null:c}lt(e,t,r){return t.Ce.count===r-this.Tt(e,t.targetId)?0:2}Tt(e,t){const r=this.ze.getRemoteKeysForTarget(t);let i=0;return r.forEach(s=>{const a=this.ze.Pt(),c=`projects/${a.projectId}/databases/${a.database}/documents/${s.path.canonicalString()}`;e.mightContain(c)||(this.tt(t,s,null),i++)}),i}It(e){const t=new Map;this.je.forEach((s,a)=>{const c=this._t(a);if(c){if(s.current&&Ys(c.target)){const u=new M(c.target.path);this.Et(u).has(a)||this.dt(a,u)||this.tt(a,u,Ee.newNoDocument(u,e))}s.Le&&(t.set(a,s.qe()),s.Qe())}});let r=z();this.Ye.forEach((s,a)=>{let c=!0;a.forEachWhile(u=>{const d=this._t(u);return!d||d.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(r=r.add(s))}),this.He.forEach((s,a)=>a.setReadTime(e));const i=new qi(e,t,this.Ze,this.He,r);return this.He=st(),this.Je=zr(),this.Ye=zr(),this.Ze=new Z(q),i}et(e,t){if(!this.it(e))return;const r=this.dt(e,t.key)?2:0;this.rt(e).$e(t.key,r),this.He=this.He.insert(t.key,t),this.Je=this.Je.insert(t.key,this.Et(t.key).add(e)),this.Ye=this.Ye.insert(t.key,this.At(t.key).add(e))}tt(e,t,r){if(!this.it(e))return;const i=this.rt(e);this.dt(e,t)?i.$e(t,1):i.Ue(t),this.Ye=this.Ye.insert(t,this.At(t).delete(e)),this.Ye=this.Ye.insert(t,this.At(t).add(e)),r&&(this.He=this.He.insert(t,r))}removeTarget(e){this.je.delete(e)}ut(e){const t=this.rt(e).qe();return this.ze.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ke(e){this.rt(e).Ke()}rt(e){let t=this.je.get(e);return t||(t=new _l,this.je.set(e,t)),t}At(e){let t=this.Ye.get(e);return t||(t=new ae(q),this.Ye=this.Ye.insert(e,t)),t}Et(e){let t=this.Je.get(e);return t||(t=new ae(q),this.Je=this.Je.insert(e,t)),t}it(e){const t=this._t(e)!==null;return t||N("WatchChangeAggregator","Detected inactive target",e),t}_t(e){const t=this.je.get(e);return t&&t.Be?null:this.ze.Rt(e)}st(e){this.je.set(e,new _l),this.ze.getRemoteKeysForTarget(e).forEach(t=>{this.tt(e,t,null)})}dt(e,t){return this.ze.getRemoteKeysForTarget(e).has(t)}}function zr(){return new Z(M.comparator)}function vl(){return new Z(M.comparator)}const Xv={asc:"ASCENDING",desc:"DESCENDING"},Zv={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},eT={and:"AND",or:"OR"};class tT{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Xs(n,e){return n.useProto3Json||Vi(e)?e:{value:e}}function Ei(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Jh(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function nT(n,e){return Ei(n,e.toTimestamp())}function ze(n){return Q(!!n,49232),B.fromTimestamp(function(t){const r=At(t);return new se(r.seconds,r.nanos)}(n))}function Mo(n,e){return Zs(n,e).canonicalString()}function Zs(n,e){const t=function(i){return new te(["projects",i.projectId,"databases",i.database])}(n).child("documents");return e===void 0?t:t.child(e)}function Xh(n){const e=te.fromString(n);return Q(rd(e),10190,{key:e.toString()}),e}function eo(n,e){return Mo(n.databaseId,e.path)}function Ss(n,e){const t=Xh(e);if(t.get(1)!==n.databaseId.projectId)throw new V(k.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new V(k.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new M(ed(t))}function Zh(n,e){return Mo(n.databaseId,e)}function rT(n){const e=Xh(n);return e.length===4?te.emptyPath():ed(e)}function to(n){return new te(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function ed(n){return Q(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function Tl(n,e,t){return{name:eo(n,e),fields:t.value.mapValue.fields}}function iT(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:F(39313,{state:d})}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(d,p){return d.useProto3Json?(Q(p===void 0||typeof p=="string",58123),fe.fromBase64String(p||"")):(Q(p===void 0||p instanceof Buffer||p instanceof Uint8Array,16193),fe.fromUint8Array(p||new Uint8Array))}(n,e.targetChange.resumeToken),a=e.targetChange.cause,c=a&&function(d){const p=d.code===void 0?k.UNKNOWN:Kh(d.code);return new V(p,d.message||"")}(a);t=new Yh(r,i,s,c||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Ss(n,r.document.name),s=ze(r.document.updateTime),a=r.document.createTime?ze(r.document.createTime):B.min(),c=new De({mapValue:{fields:r.document.fields}}),u=Ee.newFoundDocument(i,s,a,c),d=r.targetIds||[],p=r.removedTargetIds||[];t=new ri(d,p,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Ss(n,r.document),s=r.readTime?ze(r.readTime):B.min(),a=Ee.newNoDocument(i,s),c=r.removedTargetIds||[];t=new ri([],c,a.key,a)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Ss(n,r.document),s=r.removedTargetIds||[];t=new ri([],s,i,null)}else{if(!("filter"in e))return F(11601,{Vt:e});{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,a=new Kv(i,s),c=r.targetId;t=new Qh(c,a)}}return t}function sT(n,e){let t;if(e instanceof _r)t={update:Tl(n,e.key,e.value)};else if(e instanceof Wh)t={delete:eo(n,e.key)};else if(e instanceof Kt)t={update:Tl(n,e.key,e.data),updateMask:pT(e.fieldMask)};else{if(!(e instanceof zv))return F(16599,{ft:e.type});t={verify:eo(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(s,a){const c=a.transform;if(c instanceof vi)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof lr)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof ur)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof Ti)return{fieldPath:a.field.canonicalString(),increment:c.Re};throw F(20930,{transform:a.transform})}(0,r))),e.precondition.isNone||(t.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:nT(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:F(27497)}(n,e.precondition)),t}function oT(n,e){return n&&n.length>0?(Q(e!==void 0,14353),n.map(t=>function(i,s){let a=i.updateTime?ze(i.updateTime):ze(s);return a.isEqual(B.min())&&(a=ze(s)),new jv(a,i.transformResults||[])}(t,e))):[]}function aT(n,e){return{documents:[Zh(n,e.path)]}}function cT(n,e){const t={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=Zh(n,i);const s=function(d){if(d.length!==0)return nd(Qe.create(d,"and"))}(e.filters);s&&(t.structuredQuery.where=s);const a=function(d){if(d.length!==0)return d.map(p=>function(v){return{field:rn(v.field),direction:hT(v.dir)}}(p))}(e.orderBy);a&&(t.structuredQuery.orderBy=a);const c=Xs(n,e.limit);return c!==null&&(t.structuredQuery.limit=c),e.startAt&&(t.structuredQuery.startAt=function(d){return{before:d.inclusive,values:d.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(d){return{before:!d.inclusive,values:d.position}}(e.endAt)),{gt:t,parent:i}}function lT(n){let e=rT(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let i=null;if(r>0){Q(r===1,65062);const p=t.from[0];p.allDescendants?i=p.collectionId:e=e.child(p.collectionId)}let s=[];t.where&&(s=function(g){const v=td(g);return v instanceof Qe&&Dh(v)?v.getFilters():[v]}(t.where));let a=[];t.orderBy&&(a=function(g){return g.map(v=>function(C){return new _i(sn(C.field),function(P){switch(P){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(C.direction))}(v))}(t.orderBy));let c=null;t.limit&&(c=function(g){let v;return v=typeof g=="object"?g.value:g,Vi(v)?null:v}(t.limit));let u=null;t.startAt&&(u=function(g){const v=!!g.before,R=g.values||[];return new yi(R,v)}(t.startAt));let d=null;return t.endAt&&(d=function(g){const v=!g.before,R=g.values||[];return new yi(R,v)}(t.endAt)),Sv(e,i,a,s,c,"F",u,d)}function uT(n,e){const t=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return F(28987,{purpose:i})}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function td(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=sn(t.unaryFilter.field);return oe.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=sn(t.unaryFilter.field);return oe.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=sn(t.unaryFilter.field);return oe.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=sn(t.unaryFilter.field);return oe.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return F(61313);default:return F(60726)}}(n):n.fieldFilter!==void 0?function(t){return oe.create(sn(t.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return F(58110);default:return F(50506)}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return Qe.create(t.compositeFilter.filters.map(r=>td(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return F(1026)}}(t.compositeFilter.op))}(n):F(30097,{filter:n})}function hT(n){return Xv[n]}function dT(n){return Zv[n]}function fT(n){return eT[n]}function rn(n){return{fieldPath:n.canonicalString()}}function sn(n){return de.fromServerFormat(n.fieldPath)}function nd(n){return n instanceof oe?function(t){if(t.op==="=="){if(al(t.value))return{unaryFilter:{field:rn(t.field),op:"IS_NAN"}};if(ol(t.value))return{unaryFilter:{field:rn(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(al(t.value))return{unaryFilter:{field:rn(t.field),op:"IS_NOT_NAN"}};if(ol(t.value))return{unaryFilter:{field:rn(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:rn(t.field),op:dT(t.op),value:t.value}}}(n):n instanceof Qe?function(t){const r=t.getFilters().map(i=>nd(i));return r.length===1?r[0]:{compositeFilter:{op:fT(t.op),filters:r}}}(n):F(54877,{filter:n})}function pT(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function rd(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt{constructor(e,t,r,i,s=B.min(),a=B.min(),c=fe.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=c,this.expectedCount=u}withSequenceNumber(e){return new yt(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new yt(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new yt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new yt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mT{constructor(e){this.wt=e}}function gT(n){const e=lT({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Js(e,e.limit,"L"):e}/**
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
 */class yT{constructor(){this.Cn=new _T}addToCollectionParentIndex(e,t){return this.Cn.add(t),S.resolve()}getCollectionParents(e,t){return S.resolve(this.Cn.getEntries(t))}addFieldIndex(e,t){return S.resolve()}deleteFieldIndex(e,t){return S.resolve()}deleteAllFieldIndexes(e){return S.resolve()}createTargetIndexes(e,t){return S.resolve()}getDocumentsMatchingTarget(e,t){return S.resolve(null)}getIndexType(e,t){return S.resolve(0)}getFieldIndexes(e,t){return S.resolve([])}getNextCollectionGroupToUpdate(e){return S.resolve(null)}getMinOffset(e,t){return S.resolve(bt.min())}getMinOffsetFromCollectionGroup(e,t){return S.resolve(bt.min())}updateCollectionGroup(e,t,r){return S.resolve()}updateIndexEntries(e,t){return S.resolve()}}class _T{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t]||new ae(te.comparator),s=!i.has(r);return this.index[t]=i.add(r),s}has(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t];return i&&i.has(r)}getEntries(e){return(this.index[e]||new ae(te.comparator)).toArray()}}/**
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
 */const El={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},id=41943040;class Re{static withCacheSize(e){return new Re(e,Re.DEFAULT_COLLECTION_PERCENTILE,Re.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Re.DEFAULT_COLLECTION_PERCENTILE=10,Re.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Re.DEFAULT=new Re(id,Re.DEFAULT_COLLECTION_PERCENTILE,Re.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Re.DISABLED=new Re(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yn{constructor(e){this.ur=e}next(){return this.ur+=2,this.ur}static cr(){return new yn(0)}static lr(){return new yn(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wl="LruGarbageCollector",vT=1048576;function Il([n,e],[t,r]){const i=q(n,t);return i===0?q(e,r):i}class TT{constructor(e){this.Er=e,this.buffer=new ae(Il),this.dr=0}Ar(){return++this.dr}Rr(e){const t=[e,this.Ar()];if(this.buffer.size<this.Er)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();Il(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class ET{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Vr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.mr(6e4)}stop(){this.Vr&&(this.Vr.cancel(),this.Vr=null)}get started(){return this.Vr!==null}mr(e){N(wl,`Garbage collection scheduled in ${e}ms`),this.Vr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Vr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){An(t)?N(wl,"Ignoring IndexedDB error during garbage collection: ",t):await bn(t)}await this.mr(3e5)})}}class wT{constructor(e,t){this.gr=e,this.params=t}calculateTargetCount(e,t){return this.gr.pr(e).next(r=>Math.floor(t/100*r))}nthSequenceNumber(e,t){if(t===0)return S.resolve(Li.le);const r=new TT(t);return this.gr.forEachTarget(e,i=>r.Rr(i.sequenceNumber)).next(()=>this.gr.yr(e,i=>r.Rr(i))).next(()=>r.maxValue)}removeTargets(e,t,r){return this.gr.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.gr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(N("LruGarbageCollector","Garbage collection skipped; disabled"),S.resolve(El)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(N("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),El):this.wr(e,t))}getCacheSize(e){return this.gr.getCacheSize(e)}wr(e,t){let r,i,s,a,c,u,d;const p=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(g=>(g>this.params.maximumSequenceNumbersToCollect?(N("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${g}`),i=this.params.maximumSequenceNumbersToCollect):i=g,a=Date.now(),this.nthSequenceNumber(e,i))).next(g=>(r=g,c=Date.now(),this.removeTargets(e,r,t))).next(g=>(s=g,u=Date.now(),this.removeOrphanedDocuments(e,r))).next(g=>(d=Date.now(),tn()<=H.DEBUG&&N("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-p}ms
	Determined least recently used ${i} in `+(c-a)+`ms
	Removed ${s} targets in `+(u-c)+`ms
	Removed ${g} documents in `+(d-u)+`ms
Total Duration: ${d-p}ms`),S.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:g})))}}function IT(n,e){return new wT(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bT{constructor(){this.changes=new Wt(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Ee.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?S.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
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
 */class AT{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RT{constructor(e,t,r,i){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,t))).next(i=>(r!==null&&nr(r.mutation,i,Ve.empty(),se.now()),i))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,z()).next(()=>r))}getLocalViewOfDocuments(e,t,r=z()){const i=Ut();return this.populateOverlays(e,i,t).next(()=>this.computeViews(e,t,i,r).next(s=>{let a=Kn();return s.forEach((c,u)=>{a=a.insert(c,u.overlayedDocument)}),a}))}getOverlayedDocuments(e,t){const r=Ut();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,z()))}populateOverlays(e,t,r){const i=[];return r.forEach(s=>{t.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((a,c)=>{t.set(a,c)})})}computeViews(e,t,r,i){let s=st();const a=tr(),c=function(){return tr()}();return t.forEach((u,d)=>{const p=r.get(d.key);i.has(d.key)&&(p===void 0||p.mutation instanceof Kt)?s=s.insert(d.key,d):p!==void 0?(a.set(d.key,p.mutation.getFieldMask()),nr(p.mutation,d,p.mutation.getFieldMask(),se.now())):a.set(d.key,Ve.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((d,p)=>a.set(d,p)),t.forEach((d,p)=>{var g;return c.set(d,new AT(p,(g=a.get(d))!==null&&g!==void 0?g:null))}),c))}recalculateAndSaveOverlays(e,t){const r=tr();let i=new Z((a,c)=>a-c),s=z();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(a=>{for(const c of a)c.keys().forEach(u=>{const d=t.get(u);if(d===null)return;let p=r.get(u)||Ve.empty();p=c.applyToLocalView(d,p),r.set(u,p);const g=(i.get(c.batchId)||z()).add(u);i=i.insert(c.batchId,g)})}).next(()=>{const a=[],c=i.getReverseIterator();for(;c.hasNext();){const u=c.getNext(),d=u.key,p=u.value,g=Fh();p.forEach(v=>{if(!s.has(v)){const R=zh(t.get(v),r.get(v));R!==null&&g.set(v,R),s=s.add(v)}}),a.push(this.documentOverlayCache.saveOverlays(e,d,g))}return S.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,i){return function(a){return M.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Pv(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,i):this.getDocumentsMatchingCollectionQuery(e,t,r,i)}getNextDocuments(e,t,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,i).next(s=>{const a=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,i-s.size):S.resolve(Ut());let c=sr,u=s;return a.next(d=>S.forEach(d,(p,g)=>(c<g.largestBatchId&&(c=g.largestBatchId),s.get(p)?S.resolve():this.remoteDocumentCache.getEntry(e,p).next(v=>{u=u.insert(p,v)}))).next(()=>this.populateOverlays(e,d,s)).next(()=>this.computeViews(e,u,d,z())).next(p=>({batchId:c,changes:Uh(p)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new M(t)).next(r=>{let i=Kn();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,t,r,i){const s=t.collectionGroup;let a=Kn();return this.indexManager.getCollectionParents(e,s).next(c=>S.forEach(c,u=>{const d=function(g,v){return new Ui(v,null,g.explicitOrderBy.slice(),g.filters.slice(),g.limit,g.limitType,g.startAt,g.endAt)}(t,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,d,r,i).next(p=>{p.forEach((g,v)=>{a=a.insert(g,v)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,t,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(a=>(s=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,s,i))).next(a=>{s.forEach((u,d)=>{const p=d.getKey();a.get(p)===null&&(a=a.insert(p,Ee.newInvalidDocument(p)))});let c=Kn();return a.forEach((u,d)=>{const p=s.get(u);p!==void 0&&nr(p.mutation,d,Ve.empty(),se.now()),Bi(t,d)&&(c=c.insert(u,d))}),c})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CT{constructor(e){this.serializer=e,this.kr=new Map,this.qr=new Map}getBundleMetadata(e,t){return S.resolve(this.kr.get(t))}saveBundleMetadata(e,t){return this.kr.set(t.id,function(i){return{id:i.id,version:i.version,createTime:ze(i.createTime)}}(t)),S.resolve()}getNamedQuery(e,t){return S.resolve(this.qr.get(t))}saveNamedQuery(e,t){return this.qr.set(t.name,function(i){return{name:i.name,query:gT(i.bundledQuery),readTime:ze(i.readTime)}}(t)),S.resolve()}}/**
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
 */class ST{constructor(){this.overlays=new Z(M.comparator),this.Qr=new Map}getOverlay(e,t){return S.resolve(this.overlays.get(t))}getOverlays(e,t){const r=Ut();return S.forEach(t,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((i,s)=>{this.bt(e,t,s)}),S.resolve()}removeOverlaysForBatchId(e,t,r){const i=this.Qr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Qr.delete(r)),S.resolve()}getOverlaysForCollection(e,t,r){const i=Ut(),s=t.length+1,a=new M(t.child("")),c=this.overlays.getIteratorFrom(a);for(;c.hasNext();){const u=c.getNext().value,d=u.getKey();if(!t.isPrefixOf(d.path))break;d.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return S.resolve(i)}getOverlaysForCollectionGroup(e,t,r,i){let s=new Z((d,p)=>d-p);const a=this.overlays.getIterator();for(;a.hasNext();){const d=a.getNext().value;if(d.getKey().getCollectionGroup()===t&&d.largestBatchId>r){let p=s.get(d.largestBatchId);p===null&&(p=Ut(),s=s.insert(d.largestBatchId,p)),p.set(d.getKey(),d)}}const c=Ut(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((d,p)=>c.set(d,p)),!(c.size()>=i)););return S.resolve(c)}bt(e,t,r){const i=this.overlays.get(r.key);if(i!==null){const a=this.Qr.get(i.largestBatchId).delete(r.key);this.Qr.set(i.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new Wv(t,r));let s=this.Qr.get(t);s===void 0&&(s=z(),this.Qr.set(t,s)),this.Qr.set(t,s.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PT{constructor(){this.sessionToken=fe.EMPTY_BYTE_STRING}getSessionToken(e){return S.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,S.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uo{constructor(){this.$r=new ae(le.Ur),this.Kr=new ae(le.Wr)}isEmpty(){return this.$r.isEmpty()}addReference(e,t){const r=new le(e,t);this.$r=this.$r.add(r),this.Kr=this.Kr.add(r)}Gr(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.zr(new le(e,t))}jr(e,t){e.forEach(r=>this.removeReference(r,t))}Hr(e){const t=new M(new te([])),r=new le(t,e),i=new le(t,e+1),s=[];return this.Kr.forEachInRange([r,i],a=>{this.zr(a),s.push(a.key)}),s}Jr(){this.$r.forEach(e=>this.zr(e))}zr(e){this.$r=this.$r.delete(e),this.Kr=this.Kr.delete(e)}Yr(e){const t=new M(new te([])),r=new le(t,e),i=new le(t,e+1);let s=z();return this.Kr.forEachInRange([r,i],a=>{s=s.add(a.key)}),s}containsKey(e){const t=new le(e,0),r=this.$r.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class le{constructor(e,t){this.key=e,this.Zr=t}static Ur(e,t){return M.comparator(e.key,t.key)||q(e.Zr,t.Zr)}static Wr(e,t){return q(e.Zr,t.Zr)||M.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kT{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.nr=1,this.Xr=new ae(le.Ur)}checkEmpty(e){return S.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,i){const s=this.nr;this.nr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new Gv(s,t,r,i);this.mutationQueue.push(a);for(const c of i)this.Xr=this.Xr.add(new le(c.key,s)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return S.resolve(a)}lookupMutationBatch(e,t){return S.resolve(this.ei(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,i=this.ti(r),s=i<0?0:i;return S.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return S.resolve(this.mutationQueue.length===0?So:this.nr-1)}getAllMutationBatches(e){return S.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new le(t,0),i=new le(t,Number.POSITIVE_INFINITY),s=[];return this.Xr.forEachInRange([r,i],a=>{const c=this.ei(a.Zr);s.push(c)}),S.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new ae(q);return t.forEach(i=>{const s=new le(i,0),a=new le(i,Number.POSITIVE_INFINITY);this.Xr.forEachInRange([s,a],c=>{r=r.add(c.Zr)})}),S.resolve(this.ni(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,i=r.length+1;let s=r;M.isDocumentKey(s)||(s=s.child(""));const a=new le(new M(s),0);let c=new ae(q);return this.Xr.forEachWhile(u=>{const d=u.key.path;return!!r.isPrefixOf(d)&&(d.length===i&&(c=c.add(u.Zr)),!0)},a),S.resolve(this.ni(c))}ni(e){const t=[];return e.forEach(r=>{const i=this.ei(r);i!==null&&t.push(i)}),t}removeMutationBatch(e,t){Q(this.ri(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Xr;return S.forEach(t.mutations,i=>{const s=new le(i.key,t.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Xr=r})}sr(e){}containsKey(e,t){const r=new le(t,0),i=this.Xr.firstAfterOrEqual(r);return S.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,S.resolve()}ri(e,t){return this.ti(e)}ti(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}ei(e){const t=this.ti(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DT{constructor(e){this.ii=e,this.docs=function(){return new Z(M.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,i=this.docs.get(r),s=i?i.size:0,a=this.ii(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:a}),this.size+=a-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return S.resolve(r?r.document.mutableCopy():Ee.newInvalidDocument(t))}getEntries(e,t){let r=st();return t.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Ee.newInvalidDocument(i))}),S.resolve(r)}getDocumentsMatchingQuery(e,t,r,i){let s=st();const a=t.path,c=new M(a.child("__id-9223372036854775808__")),u=this.docs.getIteratorFrom(c);for(;u.hasNext();){const{key:d,value:{document:p}}=u.getNext();if(!a.isPrefixOf(d.path))break;d.path.length>a.length+1||ov(sv(p),r)<=0||(i.has(p.key)||Bi(t,p))&&(s=s.insert(p.key,p.mutableCopy()))}return S.resolve(s)}getAllFromCollectionGroup(e,t,r,i){F(9500)}si(e,t){return S.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new xT(this)}getSize(e){return S.resolve(this.size)}}class xT extends bT{constructor(e){super(),this.Br=e}applyChanges(e){const t=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?t.push(this.Br.addEntry(e,i)):this.Br.removeEntry(r)}),S.waitFor(t)}getFromCache(e,t){return this.Br.getEntry(e,t)}getAllFromCache(e,t){return this.Br.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NT{constructor(e){this.persistence=e,this.oi=new Wt(t=>Do(t),xo),this.lastRemoteSnapshotVersion=B.min(),this.highestTargetId=0,this._i=0,this.ai=new Uo,this.targetCount=0,this.ui=yn.cr()}forEachTarget(e,t){return this.oi.forEach((r,i)=>t(i)),S.resolve()}getLastRemoteSnapshotVersion(e){return S.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return S.resolve(this._i)}allocateTargetId(e){return this.highestTargetId=this.ui.next(),S.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this._i&&(this._i=t),S.resolve()}Tr(e){this.oi.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.ui=new yn(t),this.highestTargetId=t),e.sequenceNumber>this._i&&(this._i=e.sequenceNumber)}addTargetData(e,t){return this.Tr(t),this.targetCount+=1,S.resolve()}updateTargetData(e,t){return this.Tr(t),S.resolve()}removeTargetData(e,t){return this.oi.delete(t.target),this.ai.Hr(t.targetId),this.targetCount-=1,S.resolve()}removeTargets(e,t,r){let i=0;const s=[];return this.oi.forEach((a,c)=>{c.sequenceNumber<=t&&r.get(c.targetId)===null&&(this.oi.delete(a),s.push(this.removeMatchingKeysForTargetId(e,c.targetId)),i++)}),S.waitFor(s).next(()=>i)}getTargetCount(e){return S.resolve(this.targetCount)}getTargetData(e,t){const r=this.oi.get(t)||null;return S.resolve(r)}addMatchingKeys(e,t,r){return this.ai.Gr(t,r),S.resolve()}removeMatchingKeys(e,t,r){this.ai.jr(t,r);const i=this.persistence.referenceDelegate,s=[];return i&&t.forEach(a=>{s.push(i.markPotentiallyOrphaned(e,a))}),S.waitFor(s)}removeMatchingKeysForTargetId(e,t){return this.ai.Hr(t),S.resolve()}getMatchingKeysForTargetId(e,t){const r=this.ai.Yr(t);return S.resolve(r)}containsKey(e,t){return S.resolve(this.ai.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sd{constructor(e,t){this.ci={},this.overlays={},this.li=new Li(0),this.hi=!1,this.hi=!0,this.Pi=new PT,this.referenceDelegate=e(this),this.Ti=new NT(this),this.indexManager=new yT,this.remoteDocumentCache=function(i){return new DT(i)}(r=>this.referenceDelegate.Ii(r)),this.serializer=new mT(t),this.Ei=new CT(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.hi=!1,Promise.resolve()}get started(){return this.hi}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new ST,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.ci[e.toKey()];return r||(r=new kT(t,this.referenceDelegate),this.ci[e.toKey()]=r),r}getGlobalsCache(){return this.Pi}getTargetCache(){return this.Ti}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ei}runTransaction(e,t,r){N("MemoryPersistence","Starting transaction:",e);const i=new OT(this.li.next());return this.referenceDelegate.di(),r(i).next(s=>this.referenceDelegate.Ai(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Ri(e,t){return S.or(Object.values(this.ci).map(r=>()=>r.containsKey(e,t)))}}class OT extends cv{constructor(e){super(),this.currentSequenceNumber=e}}class Fo{constructor(e){this.persistence=e,this.Vi=new Uo,this.mi=null}static fi(e){return new Fo(e)}get gi(){if(this.mi)return this.mi;throw F(60996)}addReference(e,t,r){return this.Vi.addReference(r,t),this.gi.delete(r.toString()),S.resolve()}removeReference(e,t,r){return this.Vi.removeReference(r,t),this.gi.add(r.toString()),S.resolve()}markPotentiallyOrphaned(e,t){return this.gi.add(t.toString()),S.resolve()}removeTarget(e,t){this.Vi.Hr(t.targetId).forEach(i=>this.gi.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(i=>{i.forEach(s=>this.gi.add(s.toString()))}).next(()=>r.removeTargetData(e,t))}di(){this.mi=new Set}Ai(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return S.forEach(this.gi,r=>{const i=M.fromPath(r);return this.pi(e,i).next(s=>{s||t.removeEntry(i,B.min())})}).next(()=>(this.mi=null,t.apply(e)))}updateLimboDocument(e,t){return this.pi(e,t).next(r=>{r?this.gi.delete(t.toString()):this.gi.add(t.toString())})}Ii(e){return 0}pi(e,t){return S.or([()=>S.resolve(this.Vi.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ri(e,t)])}}class wi{constructor(e,t){this.persistence=e,this.yi=new Wt(r=>hv(r.path),(r,i)=>r.isEqual(i)),this.garbageCollector=IT(this,t)}static fi(e,t){return new wi(e,t)}di(){}Ai(e){return S.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}pr(e){const t=this.Sr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>t.next(i=>r+i))}Sr(e){let t=0;return this.yr(e,r=>{t++}).next(()=>t)}yr(e,t){return S.forEach(this.yi,(r,i)=>this.Dr(e,r,i).next(s=>s?S.resolve():t(i)))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0;const i=this.persistence.getRemoteDocumentCache(),s=i.newChangeBuffer();return i.si(e,a=>this.Dr(e,a,t).next(c=>{c||(r++,s.removeEntry(a,B.min()))})).next(()=>s.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,t){return this.yi.set(t,e.currentSequenceNumber),S.resolve()}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.yi.set(r,e.currentSequenceNumber),S.resolve()}removeReference(e,t,r){return this.yi.set(r,e.currentSequenceNumber),S.resolve()}updateLimboDocument(e,t){return this.yi.set(t,e.currentSequenceNumber),S.resolve()}Ii(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=ei(e.data.value)),t}Dr(e,t,r){return S.or([()=>this.persistence.Ri(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const i=this.yi.get(t);return S.resolve(i!==void 0&&i>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bo{constructor(e,t,r,i){this.targetId=e,this.fromCache=t,this.ds=r,this.As=i}static Rs(e,t){let r=z(),i=z();for(const s of t.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Bo(e,t.fromCache,r,i)}}/**
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
 */class LT{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class VT{constructor(){this.Vs=!1,this.fs=!1,this.gs=100,this.ps=function(){return qf()?8:lv(we())>0?6:4}()}initialize(e,t){this.ys=e,this.indexManager=t,this.Vs=!0}getDocumentsMatchingQuery(e,t,r,i){const s={result:null};return this.ws(e,t).next(a=>{s.result=a}).next(()=>{if(!s.result)return this.Ss(e,t,i,r).next(a=>{s.result=a})}).next(()=>{if(s.result)return;const a=new LT;return this.bs(e,t,a).next(c=>{if(s.result=c,this.fs)return this.Ds(e,t,a,c.size)})}).next(()=>s.result)}Ds(e,t,r,i){return r.documentReadCount<this.gs?(tn()<=H.DEBUG&&N("QueryEngine","SDK will not create cache indexes for query:",nn(t),"since it only creates cache indexes for collection contains","more than or equal to",this.gs,"documents"),S.resolve()):(tn()<=H.DEBUG&&N("QueryEngine","Query:",nn(t),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.ps*i?(tn()<=H.DEBUG&&N("QueryEngine","The SDK decides to create cache indexes for query:",nn(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,He(t))):S.resolve())}ws(e,t){if(hl(t))return S.resolve(null);let r=He(t);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(t.limit!==null&&i===1&&(t=Js(t,null,"F"),r=He(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const a=z(...s);return this.ys.getDocuments(e,a).next(c=>this.indexManager.getMinOffset(e,r).next(u=>{const d=this.vs(t,c);return this.Cs(t,d,a,u.readTime)?this.ws(e,Js(t,null,"F")):this.Fs(e,d,t,u)}))})))}Ss(e,t,r,i){return hl(t)||i.isEqual(B.min())?S.resolve(null):this.ys.getDocuments(e,r).next(s=>{const a=this.vs(t,s);return this.Cs(t,a,r,i)?S.resolve(null):(tn()<=H.DEBUG&&N("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),nn(t)),this.Fs(e,a,t,iv(i,sr)).next(c=>c))})}vs(e,t){let r=new ae(Vh(e));return t.forEach((i,s)=>{Bi(e,s)&&(r=r.add(s))}),r}Cs(e,t,r,i){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const s=e.limitType==="F"?t.last():t.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}bs(e,t,r){return tn()<=H.DEBUG&&N("QueryEngine","Using full collection scan to execute query:",nn(t)),this.ys.getDocumentsMatchingQuery(e,t,bt.min(),r)}Fs(e,t,r,i){return this.ys.getDocumentsMatchingQuery(e,r,i).next(s=>(t.forEach(a=>{s=s.insert(a.key,a)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $o="LocalStore",MT=3e8;class UT{constructor(e,t,r,i){this.persistence=e,this.Ms=t,this.serializer=i,this.xs=new Z(q),this.Os=new Wt(s=>Do(s),xo),this.Ns=new Map,this.Bs=e.getRemoteDocumentCache(),this.Ti=e.getTargetCache(),this.Ei=e.getBundleCache(),this.Ls(r)}Ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new RT(this.Bs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Bs.setIndexManager(this.indexManager),this.Ms.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.xs))}}function FT(n,e,t,r){return new UT(n,e,t,r)}async function od(n,e){const t=$(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let i;return t.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,t.Ls(e),t.mutationQueue.getAllMutationBatches(r))).next(s=>{const a=[],c=[];let u=z();for(const d of i){a.push(d.batchId);for(const p of d.mutations)u=u.add(p.key)}for(const d of s){c.push(d.batchId);for(const p of d.mutations)u=u.add(p.key)}return t.localDocuments.getDocuments(r,u).next(d=>({ks:d,removedBatchIds:a,addedBatchIds:c}))})})}function BT(n,e){const t=$(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=t.Bs.newChangeBuffer({trackRemovals:!0});return function(c,u,d,p){const g=d.batch,v=g.keys();let R=S.resolve();return v.forEach(C=>{R=R.next(()=>p.getEntry(u,C)).next(D=>{const P=d.docVersions.get(C);Q(P!==null,48541),D.version.compareTo(P)<0&&(g.applyToRemoteDocument(D,d),D.isValidDocument()&&(D.setReadTime(d.commitVersion),p.addEntry(D)))})}),R.next(()=>c.mutationQueue.removeMutationBatch(u,g))}(t,r,e,s).next(()=>s.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(c){let u=z();for(let d=0;d<c.mutationResults.length;++d)c.mutationResults[d].transformResults.length>0&&(u=u.add(c.batch.mutations[d].key));return u}(e))).next(()=>t.localDocuments.getDocuments(r,i))})}function ad(n){const e=$(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Ti.getLastRemoteSnapshotVersion(t))}function $T(n,e){const t=$(n),r=e.snapshotVersion;let i=t.xs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const a=t.Bs.newChangeBuffer({trackRemovals:!0});i=t.xs;const c=[];e.targetChanges.forEach((p,g)=>{const v=i.get(g);if(!v)return;c.push(t.Ti.removeMatchingKeys(s,p.removedDocuments,g).next(()=>t.Ti.addMatchingKeys(s,p.addedDocuments,g)));let R=v.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(g)!==null?R=R.withResumeToken(fe.EMPTY_BYTE_STRING,B.min()).withLastLimboFreeSnapshotVersion(B.min()):p.resumeToken.approximateByteSize()>0&&(R=R.withResumeToken(p.resumeToken,r)),i=i.insert(g,R),function(D,P,j){return D.resumeToken.approximateByteSize()===0||P.snapshotVersion.toMicroseconds()-D.snapshotVersion.toMicroseconds()>=MT?!0:j.addedDocuments.size+j.modifiedDocuments.size+j.removedDocuments.size>0}(v,R,p)&&c.push(t.Ti.updateTargetData(s,R))});let u=st(),d=z();if(e.documentUpdates.forEach(p=>{e.resolvedLimboDocuments.has(p)&&c.push(t.persistence.referenceDelegate.updateLimboDocument(s,p))}),c.push(jT(s,a,e.documentUpdates).next(p=>{u=p.qs,d=p.Qs})),!r.isEqual(B.min())){const p=t.Ti.getLastRemoteSnapshotVersion(s).next(g=>t.Ti.setTargetsMetadata(s,s.currentSequenceNumber,r));c.push(p)}return S.waitFor(c).next(()=>a.apply(s)).next(()=>t.localDocuments.getLocalViewOfDocuments(s,u,d)).next(()=>u)}).then(s=>(t.xs=i,s))}function jT(n,e,t){let r=z(),i=z();return t.forEach(s=>r=r.add(s)),e.getEntries(n,r).next(s=>{let a=st();return t.forEach((c,u)=>{const d=s.get(c);u.isFoundDocument()!==d.isFoundDocument()&&(i=i.add(c)),u.isNoDocument()&&u.version.isEqual(B.min())?(e.removeEntry(c,u.readTime),a=a.insert(c,u)):!d.isValidDocument()||u.version.compareTo(d.version)>0||u.version.compareTo(d.version)===0&&d.hasPendingWrites?(e.addEntry(u),a=a.insert(c,u)):N($o,"Ignoring outdated watch update for ",c,". Current version:",d.version," Watch version:",u.version)}),{qs:a,Qs:i}})}function qT(n,e){const t=$(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=So),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function HT(n,e){const t=$(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return t.Ti.getTargetData(r,e).next(s=>s?(i=s,S.resolve(i)):t.Ti.allocateTargetId(r).next(a=>(i=new yt(e,a,"TargetPurposeListen",r.currentSequenceNumber),t.Ti.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=t.xs.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(t.xs=t.xs.insert(r.targetId,r),t.Os.set(e,r.targetId)),r})}async function no(n,e,t){const r=$(n),i=r.xs.get(e),s=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",s,a=>r.persistence.referenceDelegate.removeTarget(a,i))}catch(a){if(!An(a))throw a;N($o,`Failed to update sequence numbers for target ${e}: ${a}`)}r.xs=r.xs.remove(e),r.Os.delete(i.target)}function bl(n,e,t){const r=$(n);let i=B.min(),s=z();return r.persistence.runTransaction("Execute query","readwrite",a=>function(u,d,p){const g=$(u),v=g.Os.get(p);return v!==void 0?S.resolve(g.xs.get(v)):g.Ti.getTargetData(d,p)}(r,a,He(e)).next(c=>{if(c)return i=c.lastLimboFreeSnapshotVersion,r.Ti.getMatchingKeysForTargetId(a,c.targetId).next(u=>{s=u})}).next(()=>r.Ms.getDocumentsMatchingQuery(a,e,t?i:B.min(),t?s:z())).next(c=>(zT(r,Dv(e),c),{documents:c,$s:s})))}function zT(n,e,t){let r=n.Ns.get(e)||B.min();t.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),n.Ns.set(e,r)}class Al{constructor(){this.activeTargetIds=Mv()}js(e){this.activeTargetIds=this.activeTargetIds.add(e)}Hs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}zs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class GT{constructor(){this.xo=new Al,this.Oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.xo.js(e),this.Oo[e]||"not-current"}updateQueryState(e,t,r){this.Oo[e]=t}removeLocalQueryTarget(e){this.xo.Hs(e)}isLocalQueryTarget(e){return this.xo.activeTargetIds.has(e)}clearQueryState(e){delete this.Oo[e]}getAllActiveQueryTargets(){return this.xo.activeTargetIds}isActiveQueryTarget(e){return this.xo.activeTargetIds.has(e)}start(){return this.xo=new Al,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class WT{No(e){}shutdown(){}}/**
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
 */const Rl="ConnectivityMonitor";class Cl{constructor(){this.Bo=()=>this.Lo(),this.ko=()=>this.qo(),this.Qo=[],this.$o()}No(e){this.Qo.push(e)}shutdown(){window.removeEventListener("online",this.Bo),window.removeEventListener("offline",this.ko)}$o(){window.addEventListener("online",this.Bo),window.addEventListener("offline",this.ko)}Lo(){N(Rl,"Network connectivity changed: AVAILABLE");for(const e of this.Qo)e(0)}qo(){N(Rl,"Network connectivity changed: UNAVAILABLE");for(const e of this.Qo)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Gr=null;function ro(){return Gr===null?Gr=function(){return 268435456+Math.round(2147483648*Math.random())}():Gr++,"0x"+Gr.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ps="RestConnection",KT={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class QT{get Uo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Ko=t+"://"+e.host,this.Wo=`projects/${r}/databases/${i}`,this.Go=this.databaseId.database===mi?`project_id=${r}`:`project_id=${r}&database_id=${i}`}zo(e,t,r,i,s){const a=ro(),c=this.jo(e,t.toUriEncodedString());N(Ps,`Sending RPC '${e}' ${a}:`,c,r);const u={"google-cloud-resource-prefix":this.Wo,"x-goog-request-params":this.Go};this.Ho(u,i,s);const{host:d}=new URL(c),p=fr(d);return this.Jo(e,c,u,r,p).then(g=>(N(Ps,`Received RPC '${e}' ${a}: `,g),g),g=>{throw fn(Ps,`RPC '${e}' ${a} failed with error: `,g,"url: ",c,"request:",r),g})}Yo(e,t,r,i,s,a){return this.zo(e,t,r,i,s)}Ho(e,t,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+In}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}jo(e,t){const r=KT[e];return`${this.Ko}/v1/${t}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YT{constructor(e){this.Zo=e.Zo,this.Xo=e.Xo}e_(e){this.t_=e}n_(e){this.r_=e}i_(e){this.s_=e}onMessage(e){this.o_=e}close(){this.Xo()}send(e){this.Zo(e)}__(){this.t_()}a_(){this.r_()}u_(e){this.s_(e)}c_(e){this.o_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _e="WebChannelConnection";class JT extends QT{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,t,r,i,s){const a=ro();return new Promise((c,u)=>{const d=new uh;d.setWithCredentials(!0),d.listenOnce(hh.COMPLETE,()=>{try{switch(d.getLastErrorCode()){case Zr.NO_ERROR:const g=d.getResponseJson();N(_e,`XHR for RPC '${e}' ${a} received:`,JSON.stringify(g)),c(g);break;case Zr.TIMEOUT:N(_e,`RPC '${e}' ${a} timed out`),u(new V(k.DEADLINE_EXCEEDED,"Request time out"));break;case Zr.HTTP_ERROR:const v=d.getStatus();if(N(_e,`RPC '${e}' ${a} failed with status:`,v,"response text:",d.getResponseText()),v>0){let R=d.getResponseJson();Array.isArray(R)&&(R=R[0]);const C=R==null?void 0:R.error;if(C&&C.status&&C.message){const D=function(j){const O=j.toLowerCase().replace(/_/g,"-");return Object.values(k).indexOf(O)>=0?O:k.UNKNOWN}(C.status);u(new V(D,C.message))}else u(new V(k.UNKNOWN,"Server responded with status "+d.getStatus()))}else u(new V(k.UNAVAILABLE,"Connection failed."));break;default:F(9055,{l_:e,streamId:a,h_:d.getLastErrorCode(),P_:d.getLastError()})}}finally{N(_e,`RPC '${e}' ${a} completed.`)}});const p=JSON.stringify(i);N(_e,`RPC '${e}' ${a} sending request:`,i),d.send(t,"POST",p,r,15)})}T_(e,t,r){const i=ro(),s=[this.Ko,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=ph(),c=fh(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(u.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(u.useFetchStreams=!0),this.Ho(u.initMessageHeaders,t,r),u.encodeInitMessageHeaders=!0;const p=s.join("");N(_e,`Creating RPC '${e}' stream ${i}: ${p}`,u);const g=a.createWebChannel(p,u);let v=!1,R=!1;const C=new YT({Zo:P=>{R?N(_e,`Not sending because RPC '${e}' stream ${i} is closed:`,P):(v||(N(_e,`Opening RPC '${e}' stream ${i} transport.`),g.open(),v=!0),N(_e,`RPC '${e}' stream ${i} sending:`,P),g.send(P))},Xo:()=>g.close()}),D=(P,j,O)=>{P.listen(j,L=>{try{O(L)}catch(K){setTimeout(()=>{throw K},0)}})};return D(g,Wn.EventType.OPEN,()=>{R||(N(_e,`RPC '${e}' stream ${i} transport opened.`),C.__())}),D(g,Wn.EventType.CLOSE,()=>{R||(R=!0,N(_e,`RPC '${e}' stream ${i} transport closed`),C.u_())}),D(g,Wn.EventType.ERROR,P=>{R||(R=!0,fn(_e,`RPC '${e}' stream ${i} transport errored. Name:`,P.name,"Message:",P.message),C.u_(new V(k.UNAVAILABLE,"The operation could not be completed")))}),D(g,Wn.EventType.MESSAGE,P=>{var j;if(!R){const O=P.data[0];Q(!!O,16349);const L=O,K=(L==null?void 0:L.error)||((j=L[0])===null||j===void 0?void 0:j.error);if(K){N(_e,`RPC '${e}' stream ${i} received error:`,K);const ce=K.status;let X=function(_){const T=ie[_];if(T!==void 0)return Kh(T)}(ce),E=K.message;X===void 0&&(X=k.INTERNAL,E="Unknown error status: "+ce+" with message "+K.message),R=!0,C.u_(new V(X,E)),g.close()}else N(_e,`RPC '${e}' stream ${i} received:`,O),C.c_(O)}}),D(c,dh.STAT_EVENT,P=>{P.stat===zs.PROXY?N(_e,`RPC '${e}' stream ${i} detected buffering proxy`):P.stat===zs.NOPROXY&&N(_e,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{C.a_()},0),C}}function ks(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hi(n){return new tT(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cd{constructor(e,t,r=1e3,i=1.5,s=6e4){this.xi=e,this.timerId=t,this.I_=r,this.E_=i,this.d_=s,this.A_=0,this.R_=null,this.V_=Date.now(),this.reset()}reset(){this.A_=0}m_(){this.A_=this.d_}f_(e){this.cancel();const t=Math.floor(this.A_+this.g_()),r=Math.max(0,Date.now()-this.V_),i=Math.max(0,t-r);i>0&&N("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.A_} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.R_=this.xi.enqueueAfterDelay(this.timerId,i,()=>(this.V_=Date.now(),e())),this.A_*=this.E_,this.A_<this.I_&&(this.A_=this.I_),this.A_>this.d_&&(this.A_=this.d_)}p_(){this.R_!==null&&(this.R_.skipDelay(),this.R_=null)}cancel(){this.R_!==null&&(this.R_.cancel(),this.R_=null)}g_(){return(Math.random()-.5)*this.A_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sl="PersistentStream";class ld{constructor(e,t,r,i,s,a,c,u){this.xi=e,this.y_=r,this.w_=i,this.connection=s,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=c,this.listener=u,this.state=0,this.S_=0,this.b_=null,this.D_=null,this.stream=null,this.v_=0,this.C_=new cd(e,t)}F_(){return this.state===1||this.state===5||this.M_()}M_(){return this.state===2||this.state===3}start(){this.v_=0,this.state!==4?this.auth():this.x_()}async stop(){this.F_()&&await this.close(0)}O_(){this.state=0,this.C_.reset()}N_(){this.M_()&&this.b_===null&&(this.b_=this.xi.enqueueAfterDelay(this.y_,6e4,()=>this.B_()))}L_(e){this.k_(),this.stream.send(e)}async B_(){if(this.M_())return this.close(0)}k_(){this.b_&&(this.b_.cancel(),this.b_=null)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}async close(e,t){this.k_(),this.q_(),this.C_.cancel(),this.S_++,e!==4?this.C_.reset():t&&t.code===k.RESOURCE_EXHAUSTED?(it(t.toString()),it("Using maximum backoff delay to prevent overloading the backend."),this.C_.m_()):t&&t.code===k.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Q_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.i_(t)}Q_(){}auth(){this.state=1;const e=this.U_(this.S_),t=this.S_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.S_===t&&this.K_(r,i)},r=>{e(()=>{const i=new V(k.UNKNOWN,"Fetching auth token failed: "+r.message);return this.W_(i)})})}K_(e,t){const r=this.U_(this.S_);this.stream=this.G_(e,t),this.stream.e_(()=>{r(()=>this.listener.e_())}),this.stream.n_(()=>{r(()=>(this.state=2,this.D_=this.xi.enqueueAfterDelay(this.w_,1e4,()=>(this.M_()&&(this.state=3),Promise.resolve())),this.listener.n_()))}),this.stream.i_(i=>{r(()=>this.W_(i))}),this.stream.onMessage(i=>{r(()=>++this.v_==1?this.z_(i):this.onNext(i))})}x_(){this.state=5,this.C_.f_(async()=>{this.state=0,this.start()})}W_(e){return N(Sl,`close with error: ${e}`),this.stream=null,this.close(4,e)}U_(e){return t=>{this.xi.enqueueAndForget(()=>this.S_===e?t():(N(Sl,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class XT extends ld{constructor(e,t,r,i,s,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,i,a),this.serializer=s}G_(e,t){return this.connection.T_("Listen",e,t)}z_(e){return this.onNext(e)}onNext(e){this.C_.reset();const t=iT(this.serializer,e),r=function(s){if(!("targetChange"in s))return B.min();const a=s.targetChange;return a.targetIds&&a.targetIds.length?B.min():a.readTime?ze(a.readTime):B.min()}(e);return this.listener.j_(t,r)}H_(e){const t={};t.database=to(this.serializer),t.addTarget=function(s,a){let c;const u=a.target;if(c=Ys(u)?{documents:aT(s,u)}:{query:cT(s,u).gt},c.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){c.resumeToken=Jh(s,a.resumeToken);const d=Xs(s,a.expectedCount);d!==null&&(c.expectedCount=d)}else if(a.snapshotVersion.compareTo(B.min())>0){c.readTime=Ei(s,a.snapshotVersion.toTimestamp());const d=Xs(s,a.expectedCount);d!==null&&(c.expectedCount=d)}return c}(this.serializer,e);const r=uT(this.serializer,e);r&&(t.labels=r),this.L_(t)}J_(e){const t={};t.database=to(this.serializer),t.removeTarget=e,this.L_(t)}}class ZT extends ld{constructor(e,t,r,i,s,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,i,a),this.serializer=s}get Y_(){return this.v_>0}start(){this.lastStreamToken=void 0,super.start()}Q_(){this.Y_&&this.Z_([])}G_(e,t){return this.connection.T_("Write",e,t)}z_(e){return Q(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Q(!e.writeResults||e.writeResults.length===0,55816),this.listener.X_()}onNext(e){Q(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.C_.reset();const t=oT(e.writeResults,e.commitTime),r=ze(e.commitTime);return this.listener.ea(r,t)}ta(){const e={};e.database=to(this.serializer),this.L_(e)}Z_(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>sT(this.serializer,r))};this.L_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eE{}class tE extends eE{constructor(e,t,r,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=i,this.na=!1}ra(){if(this.na)throw new V(k.FAILED_PRECONDITION,"The client has already been terminated.")}zo(e,t,r,i){return this.ra(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,a])=>this.connection.zo(e,Zs(t,r),i,s,a)).catch(s=>{throw s.name==="FirebaseError"?(s.code===k.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new V(k.UNKNOWN,s.toString())})}Yo(e,t,r,i,s){return this.ra(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,c])=>this.connection.Yo(e,Zs(t,r),i,a,c,s)).catch(a=>{throw a.name==="FirebaseError"?(a.code===k.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new V(k.UNKNOWN,a.toString())})}terminate(){this.na=!0,this.connection.terminate()}}class nE{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.ia=0,this.sa=null,this.oa=!0}_a(){this.ia===0&&(this.aa("Unknown"),this.sa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.sa=null,this.ua("Backend didn't respond within 10 seconds."),this.aa("Offline"),Promise.resolve())))}ca(e){this.state==="Online"?this.aa("Unknown"):(this.ia++,this.ia>=1&&(this.la(),this.ua(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.aa("Offline")))}set(e){this.la(),this.ia=0,e==="Online"&&(this.oa=!1),this.aa(e)}aa(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ua(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.oa?(it(t),this.oa=!1):N("OnlineStateTracker",t)}la(){this.sa!==null&&(this.sa.cancel(),this.sa=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qt="RemoteStore";class rE{constructor(e,t,r,i,s){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.ha=[],this.Pa=new Map,this.Ta=new Set,this.Ia=[],this.Ea=s,this.Ea.No(a=>{r.enqueueAndForget(async()=>{Qt(this)&&(N(qt,"Restarting streams for network reachability change."),await async function(u){const d=$(u);d.Ta.add(4),await Tr(d),d.da.set("Unknown"),d.Ta.delete(4),await zi(d)}(this))})}),this.da=new nE(r,i)}}async function zi(n){if(Qt(n))for(const e of n.Ia)await e(!0)}async function Tr(n){for(const e of n.Ia)await e(!1)}function ud(n,e){const t=$(n);t.Pa.has(e.targetId)||(t.Pa.set(e.targetId,e),zo(t)?Ho(t):Rn(t).M_()&&qo(t,e))}function jo(n,e){const t=$(n),r=Rn(t);t.Pa.delete(e),r.M_()&&hd(t,e),t.Pa.size===0&&(r.M_()?r.N_():Qt(t)&&t.da.set("Unknown"))}function qo(n,e){if(n.Aa.Ke(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(B.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Rn(n).H_(e)}function hd(n,e){n.Aa.Ke(e),Rn(n).J_(e)}function Ho(n){n.Aa=new Jv({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),Rt:e=>n.Pa.get(e)||null,Pt:()=>n.datastore.serializer.databaseId}),Rn(n).start(),n.da._a()}function zo(n){return Qt(n)&&!Rn(n).F_()&&n.Pa.size>0}function Qt(n){return $(n).Ta.size===0}function dd(n){n.Aa=void 0}async function iE(n){n.da.set("Online")}async function sE(n){n.Pa.forEach((e,t)=>{qo(n,e)})}async function oE(n,e){dd(n),zo(n)?(n.da.ca(e),Ho(n)):n.da.set("Unknown")}async function aE(n,e,t){if(n.da.set("Online"),e instanceof Yh&&e.state===2&&e.cause)try{await async function(i,s){const a=s.cause;for(const c of s.targetIds)i.Pa.has(c)&&(await i.remoteSyncer.rejectListen(c,a),i.Pa.delete(c),i.Aa.removeTarget(c))}(n,e)}catch(r){N(qt,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Ii(n,r)}else if(e instanceof ri?n.Aa.Xe(e):e instanceof Qh?n.Aa.ot(e):n.Aa.nt(e),!t.isEqual(B.min()))try{const r=await ad(n.localStore);t.compareTo(r)>=0&&await function(s,a){const c=s.Aa.It(a);return c.targetChanges.forEach((u,d)=>{if(u.resumeToken.approximateByteSize()>0){const p=s.Pa.get(d);p&&s.Pa.set(d,p.withResumeToken(u.resumeToken,a))}}),c.targetMismatches.forEach((u,d)=>{const p=s.Pa.get(u);if(!p)return;s.Pa.set(u,p.withResumeToken(fe.EMPTY_BYTE_STRING,p.snapshotVersion)),hd(s,u);const g=new yt(p.target,u,d,p.sequenceNumber);qo(s,g)}),s.remoteSyncer.applyRemoteEvent(c)}(n,t)}catch(r){N(qt,"Failed to raise snapshot:",r),await Ii(n,r)}}async function Ii(n,e,t){if(!An(e))throw e;n.Ta.add(1),await Tr(n),n.da.set("Offline"),t||(t=()=>ad(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{N(qt,"Retrying IndexedDB access"),await t(),n.Ta.delete(1),await zi(n)})}function fd(n,e){return e().catch(t=>Ii(n,t,e))}async function Gi(n){const e=$(n),t=St(e);let r=e.ha.length>0?e.ha[e.ha.length-1].batchId:So;for(;cE(e);)try{const i=await qT(e.localStore,r);if(i===null){e.ha.length===0&&t.N_();break}r=i.batchId,lE(e,i)}catch(i){await Ii(e,i)}pd(e)&&md(e)}function cE(n){return Qt(n)&&n.ha.length<10}function lE(n,e){n.ha.push(e);const t=St(n);t.M_()&&t.Y_&&t.Z_(e.mutations)}function pd(n){return Qt(n)&&!St(n).F_()&&n.ha.length>0}function md(n){St(n).start()}async function uE(n){St(n).ta()}async function hE(n){const e=St(n);for(const t of n.ha)e.Z_(t.mutations)}async function dE(n,e,t){const r=n.ha.shift(),i=Lo.from(r,e,t);await fd(n,()=>n.remoteSyncer.applySuccessfulWrite(i)),await Gi(n)}async function fE(n,e){e&&St(n).Y_&&await async function(r,i){if(function(a){return Qv(a)&&a!==k.ABORTED}(i.code)){const s=r.ha.shift();St(r).O_(),await fd(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Gi(r)}}(n,e),pd(n)&&md(n)}async function Pl(n,e){const t=$(n);t.asyncQueue.verifyOperationInProgress(),N(qt,"RemoteStore received new credentials");const r=Qt(t);t.Ta.add(3),await Tr(t),r&&t.da.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ta.delete(3),await zi(t)}async function pE(n,e){const t=$(n);e?(t.Ta.delete(2),await zi(t)):e||(t.Ta.add(2),await Tr(t),t.da.set("Unknown"))}function Rn(n){return n.Ra||(n.Ra=function(t,r,i){const s=$(t);return s.ra(),new XT(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(n.datastore,n.asyncQueue,{e_:iE.bind(null,n),n_:sE.bind(null,n),i_:oE.bind(null,n),j_:aE.bind(null,n)}),n.Ia.push(async e=>{e?(n.Ra.O_(),zo(n)?Ho(n):n.da.set("Unknown")):(await n.Ra.stop(),dd(n))})),n.Ra}function St(n){return n.Va||(n.Va=function(t,r,i){const s=$(t);return s.ra(),new ZT(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(n.datastore,n.asyncQueue,{e_:()=>Promise.resolve(),n_:uE.bind(null,n),i_:fE.bind(null,n),X_:hE.bind(null,n),ea:dE.bind(null,n)}),n.Ia.push(async e=>{e?(n.Va.O_(),await Gi(n)):(await n.Va.stop(),n.ha.length>0&&(N(qt,`Stopping write stream with ${n.ha.length} pending writes`),n.ha=[]))})),n.Va}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Go{constructor(e,t,r,i,s){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Et,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,i,s){const a=Date.now()+r,c=new Go(e,t,a,i,s);return c.start(r),c}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new V(k.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Wo(n,e){if(it("AsyncQueue",`${e}: ${n}`),An(n))return new V(k.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class un{static emptySet(e){return new un(e.comparator)}constructor(e){this.comparator=e?(t,r)=>e(t,r)||M.comparator(t.key,r.key):(t,r)=>M.comparator(t.key,r.key),this.keyedMap=Kn(),this.sortedSet=new Z(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof un)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const i=t.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new un;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kl{constructor(){this.ma=new Z(M.comparator)}track(e){const t=e.doc.key,r=this.ma.get(t);r?e.type!==0&&r.type===3?this.ma=this.ma.insert(t,e):e.type===3&&r.type!==1?this.ma=this.ma.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ma=this.ma.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ma=this.ma.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ma=this.ma.remove(t):e.type===1&&r.type===2?this.ma=this.ma.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ma=this.ma.insert(t,{type:2,doc:e.doc}):F(63341,{Vt:e,fa:r}):this.ma=this.ma.insert(t,e)}ga(){const e=[];return this.ma.inorderTraversal((t,r)=>{e.push(r)}),e}}class _n{constructor(e,t,r,i,s,a,c,u,d){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=a,this.syncStateChanged=c,this.excludesMetadataChanges=u,this.hasCachedResults=d}static fromInitialDocuments(e,t,r,i,s){const a=[];return t.forEach(c=>{a.push({type:0,doc:c})}),new _n(e,t,un.emptySet(t),a,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Fi(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let i=0;i<t.length;i++)if(t[i].type!==r[i].type||!t[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mE{constructor(){this.pa=void 0,this.ya=[]}wa(){return this.ya.some(e=>e.Sa())}}class gE{constructor(){this.queries=Dl(),this.onlineState="Unknown",this.ba=new Set}terminate(){(function(t,r){const i=$(t),s=i.queries;i.queries=Dl(),s.forEach((a,c)=>{for(const u of c.ya)u.onError(r)})})(this,new V(k.ABORTED,"Firestore shutting down"))}}function Dl(){return new Wt(n=>Lh(n),Fi)}async function yE(n,e){const t=$(n);let r=3;const i=e.query;let s=t.queries.get(i);s?!s.wa()&&e.Sa()&&(r=2):(s=new mE,r=e.Sa()?0:1);try{switch(r){case 0:s.pa=await t.onListen(i,!0);break;case 1:s.pa=await t.onListen(i,!1);break;case 2:await t.onFirstRemoteStoreListen(i)}}catch(a){const c=Wo(a,`Initialization of query '${nn(e.query)}' failed`);return void e.onError(c)}t.queries.set(i,s),s.ya.push(e),e.Da(t.onlineState),s.pa&&e.va(s.pa)&&Ko(t)}async function _E(n,e){const t=$(n),r=e.query;let i=3;const s=t.queries.get(r);if(s){const a=s.ya.indexOf(e);a>=0&&(s.ya.splice(a,1),s.ya.length===0?i=e.Sa()?0:1:!s.wa()&&e.Sa()&&(i=2))}switch(i){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function vE(n,e){const t=$(n);let r=!1;for(const i of e){const s=i.query,a=t.queries.get(s);if(a){for(const c of a.ya)c.va(i)&&(r=!0);a.pa=i}}r&&Ko(t)}function TE(n,e,t){const r=$(n),i=r.queries.get(e);if(i)for(const s of i.ya)s.onError(t);r.queries.delete(e)}function Ko(n){n.ba.forEach(e=>{e.next()})}var io,xl;(xl=io||(io={})).Ca="default",xl.Cache="cache";class EE{constructor(e,t,r){this.query=e,this.Fa=t,this.Ma=!1,this.xa=null,this.onlineState="Unknown",this.options=r||{}}va(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new _n(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Ma?this.Oa(e)&&(this.Fa.next(e),t=!0):this.Na(e,this.onlineState)&&(this.Ba(e),t=!0),this.xa=e,t}onError(e){this.Fa.error(e)}Da(e){this.onlineState=e;let t=!1;return this.xa&&!this.Ma&&this.Na(this.xa,e)&&(this.Ba(this.xa),t=!0),t}Na(e,t){if(!e.fromCache||!this.Sa())return!0;const r=t!=="Offline";return(!this.options.La||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Oa(e){if(e.docChanges.length>0)return!0;const t=this.xa&&this.xa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}Ba(e){e=_n.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Ma=!0,this.Fa.next(e)}Sa(){return this.options.source!==io.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gd{constructor(e){this.key=e}}class yd{constructor(e){this.key=e}}class wE{constructor(e,t){this.query=e,this.Ga=t,this.za=null,this.hasCachedResults=!1,this.current=!1,this.ja=z(),this.mutatedKeys=z(),this.Ha=Vh(e),this.Ja=new un(this.Ha)}get Ya(){return this.Ga}Za(e,t){const r=t?t.Xa:new kl,i=t?t.Ja:this.Ja;let s=t?t.mutatedKeys:this.mutatedKeys,a=i,c=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,d=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((p,g)=>{const v=i.get(p),R=Bi(this.query,g)?g:null,C=!!v&&this.mutatedKeys.has(v.key),D=!!R&&(R.hasLocalMutations||this.mutatedKeys.has(R.key)&&R.hasCommittedMutations);let P=!1;v&&R?v.data.isEqual(R.data)?C!==D&&(r.track({type:3,doc:R}),P=!0):this.eu(v,R)||(r.track({type:2,doc:R}),P=!0,(u&&this.Ha(R,u)>0||d&&this.Ha(R,d)<0)&&(c=!0)):!v&&R?(r.track({type:0,doc:R}),P=!0):v&&!R&&(r.track({type:1,doc:v}),P=!0,(u||d)&&(c=!0)),P&&(R?(a=a.add(R),s=D?s.add(p):s.delete(p)):(a=a.delete(p),s=s.delete(p)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const p=this.query.limitType==="F"?a.last():a.first();a=a.delete(p.key),s=s.delete(p.key),r.track({type:1,doc:p})}return{Ja:a,Xa:r,Cs:c,mutatedKeys:s}}eu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,i){const s=this.Ja;this.Ja=e.Ja,this.mutatedKeys=e.mutatedKeys;const a=e.Xa.ga();a.sort((p,g)=>function(R,C){const D=P=>{switch(P){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return F(20277,{Vt:P})}};return D(R)-D(C)}(p.type,g.type)||this.Ha(p.doc,g.doc)),this.tu(r),i=i!=null&&i;const c=t&&!i?this.nu():[],u=this.ja.size===0&&this.current&&!i?1:0,d=u!==this.za;return this.za=u,a.length!==0||d?{snapshot:new _n(this.query,e.Ja,s,a,e.mutatedKeys,u===0,d,!1,!!r&&r.resumeToken.approximateByteSize()>0),ru:c}:{ru:c}}Da(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ja:this.Ja,Xa:new kl,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{ru:[]}}iu(e){return!this.Ga.has(e)&&!!this.Ja.has(e)&&!this.Ja.get(e).hasLocalMutations}tu(e){e&&(e.addedDocuments.forEach(t=>this.Ga=this.Ga.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ga=this.Ga.delete(t)),this.current=e.current)}nu(){if(!this.current)return[];const e=this.ja;this.ja=z(),this.Ja.forEach(r=>{this.iu(r.key)&&(this.ja=this.ja.add(r.key))});const t=[];return e.forEach(r=>{this.ja.has(r)||t.push(new yd(r))}),this.ja.forEach(r=>{e.has(r)||t.push(new gd(r))}),t}su(e){this.Ga=e.$s,this.ja=z();const t=this.Za(e.documents);return this.applyChanges(t,!0)}ou(){return _n.fromInitialDocuments(this.query,this.Ja,this.mutatedKeys,this.za===0,this.hasCachedResults)}}const Qo="SyncEngine";class IE{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class bE{constructor(e){this.key=e,this._u=!1}}class AE{constructor(e,t,r,i,s,a){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=a,this.au={},this.uu=new Wt(c=>Lh(c),Fi),this.cu=new Map,this.lu=new Set,this.hu=new Z(M.comparator),this.Pu=new Map,this.Tu=new Uo,this.Iu={},this.Eu=new Map,this.du=yn.lr(),this.onlineState="Unknown",this.Au=void 0}get isPrimaryClient(){return this.Au===!0}}async function RE(n,e,t=!0){const r=Id(n);let i;const s=r.uu.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.ou()):i=await _d(r,e,t,!0),i}async function CE(n,e){const t=Id(n);await _d(t,e,!0,!1)}async function _d(n,e,t,r){const i=await HT(n.localStore,He(e)),s=i.targetId,a=n.sharedClientState.addLocalQueryTarget(s,t);let c;return r&&(c=await SE(n,e,s,a==="current",i.resumeToken)),n.isPrimaryClient&&t&&ud(n.remoteStore,i),c}async function SE(n,e,t,r,i){n.Ru=(g,v,R)=>async function(D,P,j,O){let L=P.view.Za(j);L.Cs&&(L=await bl(D.localStore,P.query,!1).then(({documents:E})=>P.view.Za(E,L)));const K=O&&O.targetChanges.get(P.targetId),ce=O&&O.targetMismatches.get(P.targetId)!=null,X=P.view.applyChanges(L,D.isPrimaryClient,K,ce);return Ol(D,P.targetId,X.ru),X.snapshot}(n,g,v,R);const s=await bl(n.localStore,e,!0),a=new wE(e,s.$s),c=a.Za(s.documents),u=vr.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",i),d=a.applyChanges(c,n.isPrimaryClient,u);Ol(n,t,d.ru);const p=new IE(e,t,a);return n.uu.set(e,p),n.cu.has(t)?n.cu.get(t).push(e):n.cu.set(t,[e]),d.snapshot}async function PE(n,e,t){const r=$(n),i=r.uu.get(e),s=r.cu.get(i.targetId);if(s.length>1)return r.cu.set(i.targetId,s.filter(a=>!Fi(a,e))),void r.uu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await no(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),t&&jo(r.remoteStore,i.targetId),so(r,i.targetId)}).catch(bn)):(so(r,i.targetId),await no(r.localStore,i.targetId,!0))}async function kE(n,e){const t=$(n),r=t.uu.get(e),i=t.cu.get(r.targetId);t.isPrimaryClient&&i.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),jo(t.remoteStore,r.targetId))}async function DE(n,e,t){const r=UE(n);try{const i=await function(a,c){const u=$(a),d=se.now(),p=c.reduce((R,C)=>R.add(C.key),z());let g,v;return u.persistence.runTransaction("Locally write mutations","readwrite",R=>{let C=st(),D=z();return u.Bs.getEntries(R,p).next(P=>{C=P,C.forEach((j,O)=>{O.isValidDocument()||(D=D.add(j))})}).next(()=>u.localDocuments.getOverlayedDocuments(R,C)).next(P=>{g=P;const j=[];for(const O of c){const L=Hv(O,g.get(O.key).overlayedDocument);L!=null&&j.push(new Kt(O.key,L,Sh(L.value.mapValue),tt.exists(!0)))}return u.mutationQueue.addMutationBatch(R,d,j,c)}).next(P=>{v=P;const j=P.applyToLocalDocumentSet(g,D);return u.documentOverlayCache.saveOverlays(R,P.batchId,j)})}).then(()=>({batchId:v.batchId,changes:Uh(g)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(a,c,u){let d=a.Iu[a.currentUser.toKey()];d||(d=new Z(q)),d=d.insert(c,u),a.Iu[a.currentUser.toKey()]=d}(r,i.batchId,t),await Er(r,i.changes),await Gi(r.remoteStore)}catch(i){const s=Wo(i,"Failed to persist write");t.reject(s)}}async function vd(n,e){const t=$(n);try{const r=await $T(t.localStore,e);e.targetChanges.forEach((i,s)=>{const a=t.Pu.get(s);a&&(Q(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1,22616),i.addedDocuments.size>0?a._u=!0:i.modifiedDocuments.size>0?Q(a._u,14607):i.removedDocuments.size>0&&(Q(a._u,42227),a._u=!1))}),await Er(t,r,e)}catch(r){await bn(r)}}function Nl(n,e,t){const r=$(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const i=[];r.uu.forEach((s,a)=>{const c=a.view.Da(e);c.snapshot&&i.push(c.snapshot)}),function(a,c){const u=$(a);u.onlineState=c;let d=!1;u.queries.forEach((p,g)=>{for(const v of g.ya)v.Da(c)&&(d=!0)}),d&&Ko(u)}(r.eventManager,e),i.length&&r.au.j_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function xE(n,e,t){const r=$(n);r.sharedClientState.updateQueryState(e,"rejected",t);const i=r.Pu.get(e),s=i&&i.key;if(s){let a=new Z(M.comparator);a=a.insert(s,Ee.newNoDocument(s,B.min()));const c=z().add(s),u=new qi(B.min(),new Map,new Z(q),a,c);await vd(r,u),r.hu=r.hu.remove(s),r.Pu.delete(e),Yo(r)}else await no(r.localStore,e,!1).then(()=>so(r,e,t)).catch(bn)}async function NE(n,e){const t=$(n),r=e.batch.batchId;try{const i=await BT(t.localStore,e);Ed(t,r,null),Td(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await Er(t,i)}catch(i){await bn(i)}}async function OE(n,e,t){const r=$(n);try{const i=await function(a,c){const u=$(a);return u.persistence.runTransaction("Reject batch","readwrite-primary",d=>{let p;return u.mutationQueue.lookupMutationBatch(d,c).next(g=>(Q(g!==null,37113),p=g.keys(),u.mutationQueue.removeMutationBatch(d,g))).next(()=>u.mutationQueue.performConsistencyCheck(d)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(d,p,c)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,p)).next(()=>u.localDocuments.getDocuments(d,p))})}(r.localStore,e);Ed(r,e,t),Td(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await Er(r,i)}catch(i){await bn(i)}}function Td(n,e){(n.Eu.get(e)||[]).forEach(t=>{t.resolve()}),n.Eu.delete(e)}function Ed(n,e,t){const r=$(n);let i=r.Iu[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(t?s.reject(t):s.resolve(),i=i.remove(e)),r.Iu[r.currentUser.toKey()]=i}}function so(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.cu.get(e))n.uu.delete(r),t&&n.au.Vu(r,t);n.cu.delete(e),n.isPrimaryClient&&n.Tu.Hr(e).forEach(r=>{n.Tu.containsKey(r)||wd(n,r)})}function wd(n,e){n.lu.delete(e.path.canonicalString());const t=n.hu.get(e);t!==null&&(jo(n.remoteStore,t),n.hu=n.hu.remove(e),n.Pu.delete(t),Yo(n))}function Ol(n,e,t){for(const r of t)r instanceof gd?(n.Tu.addReference(r.key,e),LE(n,r)):r instanceof yd?(N(Qo,"Document no longer in limbo: "+r.key),n.Tu.removeReference(r.key,e),n.Tu.containsKey(r.key)||wd(n,r.key)):F(19791,{mu:r})}function LE(n,e){const t=e.key,r=t.path.canonicalString();n.hu.get(t)||n.lu.has(r)||(N(Qo,"New document in limbo: "+t),n.lu.add(r),Yo(n))}function Yo(n){for(;n.lu.size>0&&n.hu.size<n.maxConcurrentLimboResolutions;){const e=n.lu.values().next().value;n.lu.delete(e);const t=new M(te.fromString(e)),r=n.du.next();n.Pu.set(r,new bE(t)),n.hu=n.hu.insert(t,r),ud(n.remoteStore,new yt(He(No(t.path)),r,"TargetPurposeLimboResolution",Li.le))}}async function Er(n,e,t){const r=$(n),i=[],s=[],a=[];r.uu.isEmpty()||(r.uu.forEach((c,u)=>{a.push(r.Ru(u,e,t).then(d=>{var p;if((d||t)&&r.isPrimaryClient){const g=d?!d.fromCache:(p=t==null?void 0:t.targetChanges.get(u.targetId))===null||p===void 0?void 0:p.current;r.sharedClientState.updateQueryState(u.targetId,g?"current":"not-current")}if(d){i.push(d);const g=Bo.Rs(u.targetId,d);s.push(g)}}))}),await Promise.all(a),r.au.j_(i),await async function(u,d){const p=$(u);try{await p.persistence.runTransaction("notifyLocalViewChanges","readwrite",g=>S.forEach(d,v=>S.forEach(v.ds,R=>p.persistence.referenceDelegate.addReference(g,v.targetId,R)).next(()=>S.forEach(v.As,R=>p.persistence.referenceDelegate.removeReference(g,v.targetId,R)))))}catch(g){if(!An(g))throw g;N($o,"Failed to update sequence numbers: "+g)}for(const g of d){const v=g.targetId;if(!g.fromCache){const R=p.xs.get(v),C=R.snapshotVersion,D=R.withLastLimboFreeSnapshotVersion(C);p.xs=p.xs.insert(v,D)}}}(r.localStore,s))}async function VE(n,e){const t=$(n);if(!t.currentUser.isEqual(e)){N(Qo,"User change. New user:",e.toKey());const r=await od(t.localStore,e);t.currentUser=e,function(s,a){s.Eu.forEach(c=>{c.forEach(u=>{u.reject(new V(k.CANCELLED,a))})}),s.Eu.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Er(t,r.ks)}}function ME(n,e){const t=$(n),r=t.Pu.get(e);if(r&&r._u)return z().add(r.key);{let i=z();const s=t.cu.get(e);if(!s)return i;for(const a of s){const c=t.uu.get(a);i=i.unionWith(c.view.Ya)}return i}}function Id(n){const e=$(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=vd.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=ME.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=xE.bind(null,e),e.au.j_=vE.bind(null,e.eventManager),e.au.Vu=TE.bind(null,e.eventManager),e}function UE(n){const e=$(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=NE.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=OE.bind(null,e),e}class bi{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Hi(e.databaseInfo.databaseId),this.sharedClientState=this.pu(e),this.persistence=this.yu(e),await this.persistence.start(),this.localStore=this.wu(e),this.gcScheduler=this.Su(e,this.localStore),this.indexBackfillerScheduler=this.bu(e,this.localStore)}Su(e,t){return null}bu(e,t){return null}wu(e){return FT(this.persistence,new VT,e.initialUser,this.serializer)}yu(e){return new sd(Fo.fi,this.serializer)}pu(e){return new GT}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}bi.provider={build:()=>new bi};class FE extends bi{constructor(e){super(),this.cacheSizeBytes=e}Su(e,t){Q(this.persistence.referenceDelegate instanceof wi,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new ET(r,e.asyncQueue,t)}yu(e){const t=this.cacheSizeBytes!==void 0?Re.withCacheSize(this.cacheSizeBytes):Re.DEFAULT;return new sd(r=>wi.fi(r,t),this.serializer)}}class oo{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Nl(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=VE.bind(null,this.syncEngine),await pE(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new gE}()}createDatastore(e){const t=Hi(e.databaseInfo.databaseId),r=function(s){return new JT(s)}(e.databaseInfo);return function(s,a,c,u){return new tE(s,a,c,u)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,i,s,a,c){return new rE(r,i,s,a,c)}(this.localStore,this.datastore,e.asyncQueue,t=>Nl(this.syncEngine,t,0),function(){return Cl.C()?new Cl:new WT}())}createSyncEngine(e,t){return function(i,s,a,c,u,d,p){const g=new AE(i,s,a,c,u,d);return p&&(g.Au=!0),g}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(i){const s=$(i);N(qt,"RemoteStore shutting down."),s.Ta.add(5),await Tr(s),s.Ea.shutdown(),s.da.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}oo.provider={build:()=>new oo};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BE{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.vu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.vu(this.observer.error,e):it("Uncaught Error in snapshot listener:",e.toString()))}Cu(){this.muted=!0}vu(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pt="FirestoreClient";class $E{constructor(e,t,r,i,s){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=i,this.user=Te.UNAUTHENTICATED,this.clientId=_h.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async a=>{N(Pt,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>(N(Pt,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Et;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=Wo(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Ds(n,e){n.asyncQueue.verifyOperationInProgress(),N(Pt,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async i=>{r.isEqual(i)||(await od(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function Ll(n,e){n.asyncQueue.verifyOperationInProgress();const t=await jE(n);N(Pt,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>Pl(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,i)=>Pl(e.remoteStore,i)),n._onlineComponents=e}async function jE(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){N(Pt,"Using user provided OfflineComponentProvider");try{await Ds(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(i){return i.name==="FirebaseError"?i.code===k.FAILED_PRECONDITION||i.code===k.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(t))throw t;fn("Error using user provided cache. Falling back to memory cache: "+t),await Ds(n,new bi)}}else N(Pt,"Using default OfflineComponentProvider"),await Ds(n,new FE(void 0));return n._offlineComponents}async function bd(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(N(Pt,"Using user provided OnlineComponentProvider"),await Ll(n,n._uninitializedComponentsProvider._online)):(N(Pt,"Using default OnlineComponentProvider"),await Ll(n,new oo))),n._onlineComponents}function qE(n){return bd(n).then(e=>e.syncEngine)}async function HE(n){const e=await bd(n),t=e.eventManager;return t.onListen=RE.bind(null,e.syncEngine),t.onUnlisten=PE.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=CE.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=kE.bind(null,e.syncEngine),t}function zE(n,e,t={}){const r=new Et;return n.asyncQueue.enqueueAndForget(async()=>function(s,a,c,u,d){const p=new BE({next:v=>{p.Cu(),a.enqueueAndForget(()=>_E(s,g));const R=v.docs.has(c);!R&&v.fromCache?d.reject(new V(k.UNAVAILABLE,"Failed to get document because the client is offline.")):R&&v.fromCache&&u&&u.source==="server"?d.reject(new V(k.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):d.resolve(v)},error:v=>d.reject(v)}),g=new EE(No(c.path),p,{includeMetadataChanges:!0,La:!0});return yE(s,g)}(await HE(n),n.asyncQueue,e,t,r)),r.promise}/**
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
 */function Ad(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vl=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GE(n,e,t){if(!t)throw new V(k.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function WE(n,e,t,r){if(e===!0&&r===!0)throw new V(k.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Ml(n){if(!M.isDocumentKey(n))throw new V(k.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Jo(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":F(12329,{type:typeof n})}function hr(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new V(k.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Jo(n);throw new V(k.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rd="firestore.googleapis.com",Ul=!0;class Fl{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new V(k.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Rd,this.ssl=Ul}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:Ul;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=id;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<vT)throw new V(k.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}WE("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Ad((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new V(k.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new V(k.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new V(k.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Xo{constructor(e,t,r,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Fl({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new V(k.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new V(k.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Fl(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Q_;switch(r.type){case"firstParty":return new Z_(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new V(k.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=Vl.get(t);r&&(N("ComponentProvider","Removing Datastore"),Vl.delete(t),r.terminate())}(this),Promise.resolve()}}function KE(n,e,t,r={}){var i;n=hr(n,Xo);const s=fr(e),a=n._getSettings(),c=Object.assign(Object.assign({},a),{emulatorOptions:n._getEmulatorOptions()}),u=`${e}:${t}`;s&&(Yl(`https://${u}`),Jl("Firestore",!0)),a.host!==Rd&&a.host!==u&&fn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const d=Object.assign(Object.assign({},a),{host:u,ssl:s,emulatorOptions:r});if(!wt(d,c)&&(n._setSettings(d),r.mockUserToken)){let p,g;if(typeof r.mockUserToken=="string")p=r.mockUserToken,g=Te.MOCK_USER;else{p=Lf(r.mockUserToken,(i=n._app)===null||i===void 0?void 0:i.options.projectId);const v=r.mockUserToken.sub||r.mockUserToken.user_id;if(!v)throw new V(k.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");g=new Te(v)}n._authCredentials=new Y_(new gh(p,g))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zo{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Zo(this.firestore,e,this._query)}}class Ne{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new dr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ne(this.firestore,e,this._key)}}class dr extends Zo{constructor(e,t,r){super(e,t,No(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ne(this.firestore,null,new M(e))}withConverter(e){return new dr(this.firestore,e,this._path)}}function Cd(n,e,...t){if(n=Ie(n),arguments.length===1&&(e=_h.newId()),GE("doc","path",e),n instanceof Xo){const r=te.fromString(e,...t);return Ml(r),new Ne(n,null,new M(r))}{if(!(n instanceof Ne||n instanceof dr))throw new V(k.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(te.fromString(e,...t));return Ml(r),new Ne(n.firestore,n instanceof dr?n.converter:null,new M(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bl="AsyncQueue";class $l{constructor(e=Promise.resolve()){this.zu=[],this.ju=!1,this.Hu=[],this.Ju=null,this.Yu=!1,this.Zu=!1,this.Xu=[],this.C_=new cd(this,"async_queue_retry"),this.ec=()=>{const r=ks();r&&N(Bl,"Visibility state changed to "+r.visibilityState),this.C_.p_()},this.tc=e;const t=ks();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.ec)}get isShuttingDown(){return this.ju}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.nc(),this.rc(e)}enterRestrictedMode(e){if(!this.ju){this.ju=!0,this.Zu=e||!1;const t=ks();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.ec)}}enqueue(e){if(this.nc(),this.ju)return new Promise(()=>{});const t=new Et;return this.rc(()=>this.ju&&this.Zu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.zu.push(e),this.sc()))}async sc(){if(this.zu.length!==0){try{await this.zu[0](),this.zu.shift(),this.C_.reset()}catch(e){if(!An(e))throw e;N(Bl,"Operation failed with retryable error: "+e)}this.zu.length>0&&this.C_.f_(()=>this.sc())}}rc(e){const t=this.tc.then(()=>(this.Yu=!0,e().catch(r=>{throw this.Ju=r,this.Yu=!1,it("INTERNAL UNHANDLED ERROR: ",jl(r)),r}).then(r=>(this.Yu=!1,r))));return this.tc=t,t}enqueueAfterDelay(e,t,r){this.nc(),this.Xu.indexOf(e)>-1&&(t=0);const i=Go.createAndSchedule(this,e,t,r,s=>this.oc(s));return this.Hu.push(i),i}nc(){this.Ju&&F(47125,{_c:jl(this.Ju)})}verifyOperationInProgress(){}async ac(){let e;do e=this.tc,await e;while(e!==this.tc)}uc(e){for(const t of this.Hu)if(t.timerId===e)return!0;return!1}cc(e){return this.ac().then(()=>{this.Hu.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.Hu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.ac()})}lc(e){this.Xu.push(e)}oc(e){const t=this.Hu.indexOf(e);this.Hu.splice(t,1)}}function jl(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}class ea extends Xo{constructor(e,t,r,i){super(e,t,r,i),this.type="firestore",this._queue=new $l,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new $l(e),this._firestoreClient=void 0,await e}}}function QE(n,e){const t=typeof n=="object"?n:ho(),r=typeof n=="string"?n:mi,i=zt(t,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=Nf("firestore");s&&KE(i,...s)}return i}function Sd(n){if(n._terminated)throw new V(k.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||YE(n),n._firestoreClient}function YE(n){var e,t,r;const i=n._freezeSettings(),s=function(c,u,d,p){return new pv(c,u,d,p.host,p.ssl,p.experimentalForceLongPolling,p.experimentalAutoDetectLongPolling,Ad(p.experimentalLongPollingOptions),p.useFetchStreams,p.isUsingEmulator)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,i);n._componentsProvider||!((t=i.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),n._firestoreClient=new $E(n._authCredentials,n._appCheckCredentials,n._queue,s,n._componentsProvider&&function(c){const u=c==null?void 0:c._online.build();return{_offline:c==null?void 0:c._offline.build(u),_online:u}}(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new vn(fe.fromBase64String(e))}catch(t){throw new V(k.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new vn(fe.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ta{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new V(k.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new de(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pd{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class na{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new V(k.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new V(k.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return q(this._lat,e._lat)||q(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ra{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JE=/^__.*__$/;class XE{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new Kt(e,this.data,this.fieldMask,t,this.fieldTransforms):new _r(e,this.data,t,this.fieldTransforms)}}function kd(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw F(40011,{hc:n})}}class ia{constructor(e,t,r,i,s,a){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.Pc(),this.fieldTransforms=s||[],this.fieldMask=a||[]}get path(){return this.settings.path}get hc(){return this.settings.hc}Tc(e){return new ia(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ic(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.Tc({path:r,Ec:!1});return i.dc(e),i}Ac(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.Tc({path:r,Ec:!1});return i.Pc(),i}Rc(e){return this.Tc({path:void 0,Ec:!0})}Vc(e){return Ai(e,this.settings.methodName,this.settings.mc||!1,this.path,this.settings.fc)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Pc(){if(this.path)for(let e=0;e<this.path.length;e++)this.dc(this.path.get(e))}dc(e){if(e.length===0)throw this.Vc("Document fields must not be empty");if(kd(this.hc)&&JE.test(e))throw this.Vc('Document fields cannot begin and end with "__"')}}class ZE{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||Hi(e)}gc(e,t,r,i=!1){return new ia({hc:e,methodName:t,fc:r,path:de.emptyPath(),Ec:!1,mc:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function ew(n){const e=n._freezeSettings(),t=Hi(n._databaseId);return new ZE(n._databaseId,!!e.ignoreUndefinedProperties,t)}function tw(n,e,t,r,i,s={}){const a=n.gc(s.merge||s.mergeFields?2:0,e,t,i);Od("Data must be an object, but it was:",a,r);const c=xd(r,a);let u,d;if(s.merge)u=new Ve(a.fieldMask),d=a.fieldTransforms;else if(s.mergeFields){const p=[];for(const g of s.mergeFields){const v=nw(e,g,t);if(!a.contains(v))throw new V(k.INVALID_ARGUMENT,`Field '${v}' is specified in your field mask but missing from your input data.`);iw(p,v)||p.push(v)}u=new Ve(p),d=a.fieldTransforms.filter(g=>u.covers(g.field))}else u=null,d=a.fieldTransforms;return new XE(new De(c),u,d)}function Dd(n,e){if(Nd(n=Ie(n)))return Od("Unsupported field value:",e,n),xd(n,e);if(n instanceof Pd)return function(r,i){if(!kd(i.hc))throw i.Vc(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Vc(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.Ec&&e.hc!==4)throw e.Vc("Nested arrays are not supported");return function(r,i){const s=[];let a=0;for(const c of r){let u=Dd(c,i.Rc(a));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),a++}return{arrayValue:{values:s}}}(n,e)}return function(r,i){if((r=Ie(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Uv(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=se.fromDate(r);return{timestampValue:Ei(i.serializer,s)}}if(r instanceof se){const s=new se(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Ei(i.serializer,s)}}if(r instanceof na)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof vn)return{bytesValue:Jh(i.serializer,r._byteString)};if(r instanceof Ne){const s=i.databaseId,a=r.firestore._databaseId;if(!a.isEqual(s))throw i.Vc(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Mo(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof ra)return function(a,c){return{mapValue:{fields:{[Rh]:{stringValue:Ch},[gi]:{arrayValue:{values:a.toArray().map(d=>{if(typeof d!="number")throw c.Vc("VectorValues must only contain numeric values.");return Oo(c.serializer,d)})}}}}}}(r,i);throw i.Vc(`Unsupported field value: ${Jo(r)}`)}(n,e)}function xd(n,e){const t={};return Th(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Gt(n,(r,i)=>{const s=Dd(i,e.Ic(r));s!=null&&(t[r]=s)}),{mapValue:{fields:t}}}function Nd(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof se||n instanceof na||n instanceof vn||n instanceof Ne||n instanceof Pd||n instanceof ra)}function Od(n,e,t){if(!Nd(t)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(t)){const r=Jo(t);throw r==="an object"?e.Vc(n+" a custom object"):e.Vc(n+" "+r)}}function nw(n,e,t){if((e=Ie(e))instanceof ta)return e._internalPath;if(typeof e=="string")return Ld(n,e);throw Ai("Field path arguments must be of type string or ",n,!1,void 0,t)}const rw=new RegExp("[~\\*/\\[\\]]");function Ld(n,e,t){if(e.search(rw)>=0)throw Ai(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new ta(...e.split("."))._internalPath}catch{throw Ai(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Ai(n,e,t,r,i){const s=r&&!r.isEmpty(),a=i!==void 0;let c=`Function ${e}() called with invalid data`;t&&(c+=" (via `toFirestore()`)"),c+=". ";let u="";return(s||a)&&(u+=" (found",s&&(u+=` in field ${r}`),a&&(u+=` in document ${i}`),u+=")"),new V(k.INVALID_ARGUMENT,c+n+u)}function iw(n,e){return n.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vd{constructor(e,t,r,i,s){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Ne(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new sw(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Md("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class sw extends Vd{data(){return super.data()}}function Md(n,e){return typeof e=="string"?Ld(n,e):e instanceof ta?e._internalPath:e._delegate._internalPath}class ow{convertValue(e,t="none"){switch(Ct(e)){case 0:return null;case 1:return e.booleanValue;case 2:return re(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Rt(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw F(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return Gt(e,(i,s)=>{r[i]=this.convertValue(s,t)}),r}convertVectorValue(e){var t,r,i;const s=(i=(r=(t=e.fields)===null||t===void 0?void 0:t[gi].arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(a=>re(a.doubleValue));return new ra(s)}convertGeoPoint(e){return new na(re(e.latitude),re(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=Mi(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(or(e));default:return null}}convertTimestamp(e){const t=At(e);return new se(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=te.fromString(e);Q(rd(r),9688,{name:e});const i=new ar(r.get(1),r.get(3)),s=new M(r.popFirst(5));return i.isEqual(t)||it(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aw(n,e,t){let r;return r=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cw{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Ud extends Vd{constructor(e,t,r,i,s,a){super(e,t,r,i,a),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new lw(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(Md("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}}class lw extends Ud{data(e={}){return super.data(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uw(n){n=hr(n,Ne);const e=hr(n.firestore,ea);return zE(Sd(e),n._key).then(t=>pw(e,n,t))}class hw extends ow{constructor(e){super(),this.firestore=e}convertBytes(e){return new vn(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Ne(this.firestore,null,t)}}function dw(n,e,t){n=hr(n,Ne);const r=hr(n.firestore,ea),i=aw(n.converter,e,t);return fw(r,[tw(ew(r),"setDoc",n._key,i,n.converter!==null,t).toMutation(n._key,tt.none())])}function fw(n,e){return function(r,i){const s=new Et;return r.asyncQueue.enqueueAndForget(async()=>DE(await qE(r),i,s)),s.promise}(Sd(n),e)}function pw(n,e,t){const r=t.docs.get(e._key),i=new hw(n);return new Ud(n,i,e._key,r,new cw(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){(function(i){In=i})(Tn),We(new Me("firestore",(r,{instanceIdentifier:i,options:s})=>{const a=r.getProvider("app").getImmediate(),c=new ea(new J_(r.getProvider("auth-internal")),new ev(a,r.getProvider("app-check-internal")),function(d,p){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new V(k.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ar(d.options.projectId,p)}(a,i),a);return s=Object.assign({useFetchStreams:t},s),c._setSettings(s),c},"PUBLIC").setMultipleInstances(!0)),xe(Kc,Qc,e),xe(Kc,Qc,"esm2017")})();const mw={apiKey:"AIzaSyCOrGrejZ1wWDnmUjGF62pYHYddJ4DGUXE",authDomain:"ethicalbadgeapp.firebaseapp.com",projectId:"ethicalbadgeapp",storageBucket:"ethicalbadgeapp.appspot.com",messagingSenderId:"73453178206",appId:"1:73453178206:web:c5e32acdf519899cb493cf",measurementId:"G-04NG6ESJNV"},sa=iu(mw);Rg(sa);const ao=W_(sa),Fd=QE(sa),Bd="1:73453178206:web:c5e32acdf519899cb493cf";let ne={name:"Officer",email:null,uid:null,tcolePID:"123456",currentUnit:{start:"Sept 1, 2023",end:"Aug 31, 2025",requiredHours:40},completedHours:0,manuallyLoggedTrainings:[]};function Ge(){return{...ne}}function Ri(n){ne={...ne,...n}}async function gw(n,e){if(!e){console.warn("loadUserDataFromFirestore: No userId provided.");return}const t=Cd(n,`artifacts/${Bd}/users/${e}/profile`,"data");try{const r=await uw(t);if(r.exists()){const i=r.data();ne.name=i.name||ne.name,ne.email=i.email||ne.email,ne.tcolePID=i.tcolePID||ne.tcolePID,ne.manuallyLoggedTrainings=i.manuallyLoggedTrainings||[],ne.currentUnit=i.currentUnit||ne.currentUnit,ne.completedHours=0,ne.manuallyLoggedTrainings.forEach(s=>{typeof s.hours=="number"&&(ne.completedHours+=s.hours)}),console.log("User data loaded from Firestore into officerDataStore:",ne)}else console.log("No user profile data found in Firestore for UID:",e,". Using defaults or creating new.")}catch(r){console.error("Error loading user data from Firestore:",r)}}async function yw(n,e,t){if(!e){console.warn("saveUserDataToFirestore: No userId provided.");return}const r=Cd(n,`artifacts/${Bd}/users/${e}/profile`,"data");try{await dw(r,t,{merge:!0}),console.log("User data saved to Firestore for UID:",e),ne={...ne,...t},t.manuallyLoggedTrainings&&(ne.completedHours=0,ne.manuallyLoggedTrainings.forEach(i=>{typeof i.hours=="number"&&(ne.completedHours+=i.hours)}))}catch(i){console.error("Error saving user data to Firestore:",i)}}function ve(n){return n.replace(/[&<>'"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"})[e])}function _w(n){const e=document.getElementById(n);e&&(e.classList.remove("modal-inactive"),e.classList.add("modal-active"))}function Wr(n){const e=document.getElementById(n);e&&(e.classList.remove("modal-active"),e.classList.add("modal-inactive"))}function oa(n){if(!n)return;n.disabled=!0;let e=n.querySelector(".loading-spinner");e||(e=document.createElement("span"),e.className="loading-spinner ml-2",e.innerHTML='<svg class="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path></svg>',n.appendChild(e)),e.style.display="inline-block"}function aa(n){if(!n)return;n.disabled=!1;const e=n.querySelector(".loading-spinner");e&&(e.style.display="none")}function Wi(){document.querySelectorAll(".expandable-card").forEach(n=>{const e=n.querySelector("button"),t=n.querySelector(".expandable-content");e&&t&&e.addEventListener("click",()=>{const r=e.getAttribute("aria-expanded")==="true";e.setAttribute("aria-expanded",!r),t.classList.toggle("card-collapsed"),t.classList.toggle("card-expanded")})})}let xs=null;function vw(n,e,t,r,i){const s=document.getElementById("officerNamePlaceholder"),a=document.getElementById("tcoleUnitDates"),c=document.getElementById("completedHours"),u=document.getElementById("requiredHours"),d=document.getElementById("legalUpdatesFeed"),p=document.getElementById("dilemmaOfTheWeekText"),g=document.getElementById("dilemmaOptions"),v=document.getElementById("analyzeDilemmaButton"),R=document.getElementById("dilemmaAiAnalysisContainer"),C=document.getElementById("dilemmaAiAnalysisContent");document.getElementById("dilemmaAiLoading");const D=document.getElementById("tcoleProgressChart");s&&(s.textContent=ve(n.name)),a&&(a.textContent=`${ve(n.currentUnit.start)} - ${ve(n.currentUnit.end)}`),Tw(n,D,c,u),d&&(d.innerHTML="",e.slice(0,4).forEach(P=>{const j=`
                <div class="p-3.5 bg-white rounded-lg shadow border border-slate-200 hover:shadow-lg transition-shadow duration-200 cursor-pointer" role="article" tabindex="0" aria-labelledby="update-title-${P.date.replace(/\s+/g,"-")}" 
                     onclick="window.openUpdateModal(this)" 
                     data-fulltext="${ve(P.fullText||P.summary)}" 
                     data-title="${ve(P.title)}">
                    <span class="text-xs font-semibold ${P.category==="Legislation"?"text-green-700 bg-green-100":P.category==="AG Opinion"?"text-purple-700 bg-purple-100":P.category==="Case Law"?"text-red-700 bg-red-100":"text-sky-700 bg-sky-100"} px-2 py-0.5 rounded-full">${ve(P.category)}</span>
                    <h4 id="update-title-${P.date.replace(/\s+/g,"-")}" class="font-medium text-slate-800 text-sm mt-1.5 mb-0.5">${ve(P.title)}</h4>
                    <p class="text-xs text-slate-500 mb-1">${ve(P.date)}</p>
                    <p class="text-xs text-slate-600 leading-relaxed">${ve(P.summary.substring(0,120))}...</p>
                </div>`;d.innerHTML+=j})),p&&(p.textContent=t.text),g&&(g.innerHTML="",t.options.forEach(P=>{g.innerHTML+=`<li class="pb-0.5">${ve(P)}</li>`})),v&&v.addEventListener("click",async()=>{oa(v),C&&(C.innerHTML=""),R&&R.classList.remove("hidden");const P=`You are an AI assistant for Texas Law Enforcement Officers. Analyze the following ethical dilemma and provide concise discussion points, key ethical considerations, potential frameworks or questions an officer might ask themselves, and broader implications of choices. Dilemma: "${t.text}" Options provided were: ${t.options.join(", ")}. Focus on practical advice and Texas context where applicable. Format your response with clear headings for each section (e.g., Key Ethical Principles, Potential Considerations, Broader Implications). Use bullet points for lists.`,j=await r(P);C&&(C.innerHTML=j),aa(v)})}function Tw(n,e,t,r){if(!e||!t||!r)return;const i=n.completedHours||0,s=n.currentUnit.requiredHours||40;t.textContent=i,r.textContent=s,xs&&xs.destroy(),xs=new Chart(e.getContext("2d"),{type:"doughnut",data:{labels:["Completed Hours","Remaining Hours"],datasets:[{label:"TCOLE Hours",data:[i,Math.max(0,s-i)],backgroundColor:["#2563eb","#e5e7eb"],borderColor:["#ffffff","#ffffff"],borderWidth:3,hoverOffset:4}]},options:{responsive:!0,maintainAspectRatio:!1,cutout:"75%",plugins:{legend:{display:!1},tooltip:{enabled:!0,callbacks:{label:function(a){return`${a.label}: ${a.raw} hours`}}}}}})}let $d=[];function Ew(n,e,t,r){const i=document.getElementById("tcoleHubUnitDates"),s=document.getElementById("tcoleHubRequiredHours"),a=document.getElementById("logTcoleTrainingButton"),c=document.getElementById("tcoleCourseName"),u=document.getElementById("tcoleCourseHours");$d=JSON.parse(JSON.stringify(e)),i&&(i.textContent=`${r(n.currentUnit.start)} - ${r(n.currentUnit.end)}`),s&&(s.textContent=n.currentUnit.requiredHours),co(n),lo(n,t,r),a&&c&&u&&a.addEventListener("click",async()=>{const d=c.value.trim(),p=parseInt(u.value.trim());if(d&&!isNaN(p)&&p>0){const g={id:`custom-${Date.now()}`,name:d,hours:p,dateLogged:new Date().toISOString()},v=Ge(),R=[...v.manuallyLoggedTrainings,g],C=v.completedHours+p;Ri({manuallyLoggedTrainings:R,completedHours:C}),await t(g),co(Ge()),lo(Ge(),t,r),c.value="",u.value="";const D=document.createElement("p");D.textContent="Training logged successfully!",D.className="text-green-600 text-xs mt-2",a.insertAdjacentElement("afterend",D),setTimeout(()=>D.remove(),3e3)}else alert("Please enter a valid course name and hours.")})}function co(n){const e=document.getElementById("tcoleHubLoggedHours"),t=document.getElementById("tcoleHubProgressBar"),r=document.getElementById("completedHours"),i=document.getElementById("tcoleProgressChart"),s=n.completedHours||0,a=n.currentUnit.requiredHours||40;if(e&&(e.textContent=s),t){const c=a>0?s/a*100:0,u=Math.min(100,Math.round(c));t.style.width=`${u}%`,t.textContent=`${u}%`,t.setAttribute("aria-valuenow",String(u))}if(r&&(r.textContent=s),document.getElementById("requiredHours")&&(document.getElementById("requiredHours").textContent=a),i){let c=Chart.getChart("tcoleProgressChart");c&&c.destroy(),new Chart(i.getContext("2d"),{type:"doughnut",data:{labels:["Completed Hours","Remaining Hours"],datasets:[{label:"TCOLE Hours",data:[s,Math.max(0,a-s)],backgroundColor:["#2563eb","#e5e7eb"],borderColor:["#ffffff","#ffffff"],borderWidth:3,hoverOffset:4}]},options:{responsive:!0,maintainAspectRatio:!1,cutout:"75%",plugins:{legend:{display:!1},tooltip:{enabled:!0,callbacks:{label:u=>`${u.label}: ${u.raw} hours`}}}}})}}function lo(n,e,t){const r=document.getElementById("tcoleMandatesList");r&&(r.innerHTML="",$d.forEach(i=>{const s=n.manuallyLoggedTrainings.some(d=>d.id===i.id),a=s?"Completed (Logged)":"Pending",c=s?"text-green-600 bg-green-100 border-green-300":"text-amber-600 bg-amber-50 border-amber-300",u=`
            <div class="p-4 border border-slate-200 rounded-lg bg-slate-50">
                <div class="flex justify-between items-start sm:items-center flex-col sm:flex-row">
                    <h4 class="font-semibold text-blue-700 text-base mb-1 sm:mb-0">${t(i.name)}</h4>
                    <span class="text-xs font-medium ${c} px-2.5 py-1 rounded-full border">${t(a)}</span>
                </div>
                <p class="text-xs text-slate-500 mt-1">Cycle: ${t(i.cycle)} | Hours: ${i.hours}</p>
                <p class="text-sm text-slate-600 mt-1.5 leading-relaxed">${t(i.details)}</p>
                ${s?"":`<button data-mandate-id="${i.id}" data-mandate-hours="${i.hours}" data-mandate-name="${t(i.name)}" class="mark-tcole-complete-btn mt-3 px-4 py-1.5 bg-sky-500 text-white text-xs font-medium rounded-md hover:bg-sky-600 transition-colors">Mark as Completed</button>`}
            </div>`;r.innerHTML+=u}),ww(e,t))}function ww(n,e){document.querySelectorAll(".mark-tcole-complete-btn").forEach(t=>{t.dataset.listenerAttached!=="true"&&(t.dataset.listenerAttached="true",t.addEventListener("click",async function(){const r=this.dataset.mandateId,i=parseInt(this.dataset.mandateHours),s=this.dataset.mandateName,a=Ge();if(!a.manuallyLoggedTrainings.some(c=>c.id===r)){const c={id:r,hours:i,name:s,dateLogged:new Date().toISOString()},u=[...a.manuallyLoggedTrainings,c],d=a.completedHours+i;Ri({manuallyLoggedTrainings:u,completedHours:d}),await n(c),co(Ge()),lo(Ge(),n,e)}}))})}const Ns=document.querySelectorAll(".nav-item"),Hn=document.querySelectorAll(".content-section"),hn=document.getElementById("mobileMenuButton");document.getElementById("mobileMenu");hn==null||hn.querySelector(".menu-icon-open");hn==null||hn.querySelector(".menu-icon-close");const Ci=document.querySelector("header");document.getElementById("logoutButton");document.getElementById("mobileLogoutButton");const Kr=document.getElementById("headerOfficerName");function Iw(){if(!Hn||Hn.length===0||!Ns||Ns.length===0)return;let n="home",e=1/0;const t=Ci?Ci.offsetHeight+20:100;if(Hn.forEach(r=>{const i=r.getBoundingClientRect(),s=Math.abs(i.top-t),a=i.top<window.innerHeight-i.height/2&&i.bottom>t+i.height/2;if(i.top<=t&&i.bottom>=t){n=r.id,e=0;return}a&&s<e&&(e=s,n=r.id)}),window.innerHeight+window.scrollY>=document.body.offsetHeight-50){const r=Hn[Hn.length-1];r&&(n=r.id)}Ns.forEach(r=>{r.classList.remove("nav-link-active","font-semibold"),r.closest("#mobileMenu")||(r.classList.add("text-blue-100"),r.classList.remove("text-white")),r.getAttribute("href")===`#${n}`&&(r.classList.add("nav-link-active","font-semibold"),r.closest("#mobileMenu")||(r.classList.add("text-white"),r.classList.remove("text-blue-100")))})}function jd(n,e=null){const t=document.getElementById(n);if(t){const r=Ci?Ci.offsetHeight:80,s=t.getBoundingClientRect().top+window.pageYOffset-r;window.scrollTo({top:s,behavior:"smooth"}),e&&setTimeout(()=>{const a=e.toLowerCase().replace(/\./g,"-").replace(/\s+/g,"-"),c=document.getElementById(a),u=document.getElementById(e),d=c||u;if(d){const p=d.closest(".expandable-card");if(p){const g=p.querySelector("button"),v=g.nextElementSibling;v&&v.classList.contains("card-collapsed")&&g.click(),p.classList.add("ring-2","ring-amber-400","ring-offset-2","ring-offset-white","transition-all","duration-300"),setTimeout(()=>{p.scrollIntoView({behavior:"smooth",block:"center"})},500),setTimeout(()=>p.classList.remove("ring-2","ring-amber-400","ring-offset-2","ring-offset-white"),3500)}else d.classList.add("ring-2","ring-amber-400","ring-offset-2","ring-offset-white","transition-all","duration-300"),d.scrollIntoView({behavior:"smooth",block:"center"}),setTimeout(()=>d.classList.remove("ring-2","ring-amber-400","ring-offset-2","ring-offset-white"),3500)}},750)}else console.warn(`Section with ID '${n}' not found.`)}function bw(n){Kr&&(n&&n!=="Officer"?(Kr.textContent=`Officer ${n.split(" ").pop()}`,Kr.classList.remove("hidden")):Kr.classList.add("hidden"))}function Aw(n,e,t,r,i){const s=document.getElementById("loginOverlay"),a=document.querySelector("header"),c=document.querySelector("main"),u=document.getElementById("loginEmail"),d=document.getElementById("loginPassword"),p=document.getElementById("authMessage"),g=document.getElementById("registerButton"),v=document.getElementById("loginButton"),R=document.getElementById("logoutButton"),C=document.getElementById("mobileLogoutButton"),D=document.getElementById("headerOfficerName"),P=document.getElementById("registerName");Ly(n,async O=>{if(O){const L=Ge();L.uid=O.uid,L.email=O.email,L.name=O.displayName||(P&&!P.classList.contains("hidden")&&P.value.trim()?P.value.trim():"Officer"),Ri(L),s&&(s.style.display="none",s.classList.add("hidden")),a&&a.classList.remove("hidden"),c&&c.classList.remove("hidden"),D&&(D.textContent=`Officer ${L.name.split(" ").pop()}`,D.classList.remove("hidden")),await gw(e,O.uid),i(),console.log("User logged in:",O.email,"UID:",O.uid)}else{const L=Ge();L.uid=null,L.email=null,L.name="Officer",L.completedHours=0,L.manuallyLoggedTrainings=[],Ri(L),s&&(s.style.display="flex",s.classList.remove("hidden")),a&&a.classList.add("hidden"),c&&c.classList.add("hidden"),D&&D.classList.add("hidden"),p&&(p.textContent=""),u&&(u.value=""),d&&(d.value=""),loginNameInput&&(loginNameInput.value=""),console.log("User logged out.")}}),(async()=>{try{const O=typeof __initial_auth_token<"u"?__initial_auth_token:null;O?(console.log("Attempting to sign in with custom token..."),await Sy(n,O)):(console.log("No initial auth token. User needs to login/register."),s&&(s.style.display="flex"))}catch(O){console.error("Error during initial auth:",O),s&&(s.style.display="flex")}})(),g&&g.addEventListener("click",async()=>{if(P.classList.contains("hidden")){P.classList.remove("hidden"),P.focus(),p&&(p.textContent="Please enter your full name to register.",p.className="form-message");return}const O=u.value,L=d.value,K=P.value.trim();if(!O||!L||!K){p&&(p.textContent="Please fill in all fields.",p.className="form-message error");return}if(L.length<6){p&&(p.textContent="Password should be at least 6 characters.",p.className="form-message error");return}p&&(p.textContent="Registering..."),p.className="form-message";try{const ce=await Py(n,O,L);await xy(ce.user,{displayName:K});const X=Ge();await yw(e,ce.user.uid,{name:K,email:O,tcolePID:X.tcolePID,manuallyLoggedTrainings:[],currentUnit:X.currentUnit,createdAt:se.now()}),p&&(p.textContent="Registration successful! Logging in...",p.className="form-message success")}catch(ce){console.error("Registration error:",ce),p&&(p.textContent=`Registration failed: ${ce.message}`,p.className="form-message error")}}),v&&v.addEventListener("click",async()=>{P.classList.contains("hidden")||P.classList.add("hidden");const O=u.value,L=d.value;if(!O||!L){p&&(p.textContent="Please enter email and password.",p.className="form-message error");return}p&&(p.textContent="Logging in..."),p.className="form-message";try{await ky(n,O,L),p&&(p.textContent="")}catch(K){console.error("Login error:",K),p&&(p.textContent=`Login failed: ${K.message}`,p.className="form-message error")}});function j(){Vy(n).catch(O=>console.error("Logout error:",O))}R&&R.addEventListener("click",j),C&&C.addEventListener("click",j)}async function Os(n){var s;const t={contents:[{role:"user",parts:[{text:n}]}]},i="https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=";try{const a=await fetch(i,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});if(!a.ok){const u=await a.json();return console.error("Gemini API Error:",u),`Error: ${((s=u.error)==null?void 0:s.message)||a.statusText}. Please check console for details.`}const c=await a.json();if(c.candidates&&c.candidates.length>0&&c.candidates[0].content&&c.candidates[0].content.parts&&c.candidates[0].content.parts.length>0){let u=c.candidates[0].content.parts[0].text;return u=u.replace(/\*\*(.*?)\*\*/g,"<strong>$1</strong>"),u=u.replace(/\*(.*?)\*/g,"<em>$1</em>"),u=u.replace(/^- (.*?)(\n|$)/gm,"<li>$1</li>"),u=u.replace(/(<ul>\s*)?(<li>.*?<\/li>)+(\s*<\/ul>)?/gs,(d,p,g,v)=>p&&v?d:"<ul>"+d.replace(/<\/?ul>/g,"")+"</ul>"),u=u.replace(/\n/g,"<br>"),u}else return console.error("Gemini API Response Error: No valid content found",c),"AI analysis could not be retrieved at this time."}catch(a){return console.error("Fetch Error calling Gemini API:",a),"An error occurred while contacting the AI service. Please try again later."}}const Rw=[{date:"May 15, 2025",title:"New Legislation on Body Camera Footage Retention (TX HB 1234)",summary:"HB 1234 modifies requirements for body-worn camera footage retention periods for specific incident types. Agencies must update policies by Oct 1, 2025.",category:"Legislation",fullText:"House Bill 1234, passed during the 89th Texas Legislature, introduces significant changes to the Texas Occupations Code regarding the retention of body-worn camera (BWC) footage. Key provisions include extended retention periods for footage related to incidents involving use of force resulting in serious bodily injury (now 5 years, previously 90 days if no complaint filed), incidents subject to internal affairs investigations (duration of investigation plus 2 years), and footage used in criminal proceedings (until final adjudication and appeals). Agencies are mandated to update their local BWC policies to reflect these changes by October 1, 2025. This legislation aims to enhance transparency and accountability."},{date:"Apr 28, 2025",title:"AG Opinion on Use of Force Reporting (KP-0567)",summary:"Clarifies reporting timelines for certain use of force incidents involving serious bodily injury under new TCOLE rules.",category:"AG Opinion",fullText:"Attorney General Opinion KP-0567 addresses ambiguities in TCOLE Rule §218.5 concerning the reporting of use of force incidents. The opinion clarifies that the 72-hour reporting window for incidents resulting in serious bodily injury begins from the moment the agency's administration becomes aware of the SBI, not necessarily from the time of the incident itself, particularly if the severity was not immediately apparent. It also reiterates that 'serious bodily injury' should be interpreted consistent with its definition in the Texas Penal Code. Law enforcement agencies should review their use of force reporting protocols to ensure alignment with this clarification."},{date:"Mar 10, 2025",title:"Case Law Update: Smith v. Texas DPS - Search & Seizure",summary:"Recent appellate court ruling impacts vehicle searches based on olfactory evidence. Review implications for probable cause.",category:"Case Law",fullText:"In Smith v. Texas Department of Public Safety (Tex. App.—Austin, 2025), the Third Court of Appeals issued a ruling that may affect how officers establish probable cause for vehicle searches based solely on the odor of marijuana, especially in light of Texas's hemp laws. The court emphasized that the odor of marijuana, while still a factor, may require additional corroborating evidence to establish probable cause for a search, given the legal similarities in odor between marijuana and hemp. Officers should be mindful of this evolving standard and ensure thorough articulation of all factors contributing to probable cause in their reports. Training on distinguishing factors, if any, and articulation of 'odor plus' factors is recommended."},{date:"Feb 01, 2025",title:"TCOLE Rule Change: Mandated IDD Training Hours Increased",summary:"TCOLE has increased the minimum required hours for Intellectual and Developmental Disabilities (IDD) training in the next cycle.",category:"TCOLE Rule",fullText:"Effective for the training cycle beginning September 1, 2025, TCOLE Rule §217.11 has been amended to increase the minimum required hours for Intellectual and Developmental Disabilities (IDD) training (Course #4204 or equivalent) from 4 hours to 8 hours for all peace officers. This change reflects a legislative mandate aimed at improving officer interactions with individuals with IDD. The updated curriculum requirements will emphasize practical de-escalation techniques, communication strategies, and community resources. Agencies should plan their training schedules accordingly to meet this new requirement."}],Cw={},Sw=[{id:"tmd1",name:"Legislative Update (#3188)",cycle:"2-year",status:"Pending",details:"Covers changes in state laws, use of force, de-escalation. Essential for staying current with evolving legal standards and best practices in Texas law enforcement.",hours:4},{id:"tmd2",name:"Crisis Intervention Training (CIT) (#1850)",cycle:"4-year",status:"Pending",details:"Focuses on effective interaction with persons experiencing mental health crises. Emphasizes de-escalation techniques and community mental health resources. Crucial for modern policing.",hours:40},{id:"tmd3",name:"ALERRT Level 1 (#3311)",cycle:"One-time by 8/31/27, then 16hrs/2yrs",status:"Pending",details:"Advanced Law Enforcement Rapid Response Training for active shooter events. Level 1 provides foundational tactical skills for immediate response. Ongoing ALERRT training is also required.",hours:16},{id:"tmd4",name:"Finding Wellness – Building a Healthier Life (#4202)",cycle:"2-year",status:"Pending",details:"Addresses officer mental and physical well-being, focusing on stress management, resilience, and resources for a healthier lifestyle in a demanding profession.",hours:4},{id:"tmd5",name:"Intellectual & Developmental Disabilities (IDD) Training (#4204)",cycle:"New Mandate (8hrs)",status:"Pending",details:"Provides officers with knowledge and skills to effectively identify, interact with, and de-escalate situations involving individuals with IDD. Recently increased to 8 hours.",hours:8}],Pw=[{name:"Integrity (Texas LEO Standard)",summary:"Absolute honesty, adherence to moral principles, and incorruptibility.",details:"In Texas, LEOs are held to a high standard of integrity. This includes truthful testimony, accurate reporting (e.g., offense reports, use of force documentation), rejecting gratuities that could imply influence, and upholding the Law Enforcement Code of Ethics. Any compromise of integrity erodes public trust and departmental credibility. It means doing the right thing, even when no one is watching, and being a role model of ethical conduct."},{name:"Fairness & Impartiality (Constitutional Policing)",summary:"Equitable treatment under the law, free from bias or prejudice.",details:"Texas officers must enforce laws impartially, respecting the constitutional rights of all persons. Decisions (e.g., traffic stops, arrests, investigations) must be based on facts and law, not on race, ethnicity, gender, religion, sexual orientation, socioeconomic status, or other protected characteristics. This aligns with principles of procedural justice, ensuring that all individuals are treated with dignity and respect by law enforcement, fostering community trust and cooperation."},{name:"Respect for Dignity (Community Interaction)",summary:"Valuing the inherent worth and rights of every individual.",details:"Treating all individuals – victims, witnesses, suspects, and community members – with dignity and respect is crucial, even in confrontational situations. This includes professional demeanor, active listening, empathy, and avoiding derogatory language or actions. It's a cornerstone of de-escalation, effective communication, and positive community relations in diverse Texas communities. Respectful interaction builds bridges and enhances legitimacy."},{name:"Courage (Moral & Physical)",summary:"Bravery to act rightly, ethically, and protect others, despite risks.",details:"Physical courage is often required in dangerous calls and volatile situations. Moral courage is equally important: upholding ethical standards, intervening if a fellow officer acts improperly (Duty to Intervene), reporting misconduct, and making tough decisions aligned with law and policy, even under pressure, scrutiny, or when unpopular. It's about standing for what's right."},{name:"Service & Duty (Public Trust)",summary:"Selfless commitment to public safety and community well-being.",details:"The primary duty of a Texas LEO is to serve the community and protect the public. This involves a commitment to problem-solving, proactive policing where appropriate, and a focus on positive outcomes beyond just enforcement. It's about safeguarding the peace, order, and rights of all people within Texas communities, and being a responsible steward of the public trust."},{name:"Accountability (Transparency & Responsibility)",summary:"Answerability for actions, decisions, and use of authority.",details:"Texas LEOs are accountable to their agency, the community, and the law. This includes thorough and accurate documentation (reports, BWC footage), adherence to body-worn camera policies, cooperation with internal and external reviews, and taking responsibility for mistakes. Transparency in actions and decision-making processes builds trust and reinforces the legitimacy of law enforcement."}],kw=[{id:"cs1",title:"The Questionable Traffic Stop (Texas Racial Profiling Law)",summary:"An officer makes a traffic stop based on a vague suspicion in an area with a history of profiling complaints.",detailsRaw:"Officer Rodriguez is patrolling a neighborhood in a large Texas city that has previously faced scrutiny for racial profiling allegations. She observes a vehicle with out-of-state plates driving slowly through a residential area late at night. The driver is a young minority male. Officer Rodriguez initiates a traffic stop, citing 'suspicious behavior' as the primary reason, although no specific traffic violation was observed. During the stop, she asks for consent to search the vehicle, which is denied. No contraband is found.",discussionPointsHTML:"<strong>Discussion Points:</strong><ul><li>Applicability of Texas Code of Criminal Procedure Art. 2.131-2.138 (Prohibition on Racial Profiling).</li><li>Legal standard for reasonable suspicion for a traffic stop versus a mere hunch or generalized suspicion.</li><li>Impact of prior agency history or community perceptions of profiling in that area.</li><li>Ethical considerations of discretionary stops and potential for implicit bias.</li><li>Proper documentation requirements under TCOLE rules and agency policy for traffic stops, including data related to racial profiling.</li><li>Best practices for articulating grounds for a stop.</li></ul>"},{id:"cs2",title:"Off-Duty Social Media Post (First Amendment & Agency Policy)",summary:"An officer's controversial social media post about a local political issue draws public criticism.",detailsRaw:"Deputy Miller, employed by a Texas County Sheriff's Office, posts a strongly worded, critical comment on his personal Facebook page regarding a contentious local ordinance being debated by the County Commissioners. His profile identifies him as a Deputy, and he occasionally posts pictures in uniform. Several community members see the post and complain to the Sheriff, stating it shows bias and unprofessionalism that could affect his on-duty performance.",discussionPointsHTML:"<strong>Discussion Points:</strong><ul><li>Balancing an officer's First Amendment rights with the agency's legitimate interest in maintaining public trust and an image of impartiality.</li><li>Review of specific agency social media policy regarding off-duty conduct and identification as an agency employee.</li><li>Potential for the post to be considered 'conduct unbecoming an officer' or to undermine public confidence in the officer or agency.</li><li>Impact on the officer's perceived ability to perform duties fairly and impartially towards all community members.</li><li>Legal precedents regarding public employee speech (e.g., Pickering v. Board of Education, Garcetti v. Ceballos).</li></ul>"},{id:"cs3",title:"Use of Force Reporting Discrepancy (Texas Penal Code Sec. 9.51)",summary:"A use of force incident occurs, and a junior officer notices a discrepancy between their observation and a senior officer's report.",detailsRaw:"During an arrest of a resistant subject, Officer Chen (a junior officer) observes her Field Training Officer, Officer Davis, use a knee strike that Chen felt was unnecessary and occurred after the subject was already substantially controlled and complying. In Officer Davis's subsequent use of force report, the knee strike is described as occurring earlier in the encounter, when the subject was more actively resisting. Officer Chen knows that accurate reporting is critical under Texas Penal Code Sec. 9.51 (Justification of Force by Peace Officer) and departmental policy regarding truthfulness and use of force documentation.",discussionPointsHTML:"<strong>Discussion Points:</strong><ul><li>Ethical duty of truthfulness in all official reports and testimony.</li><li>Officer Chen's 'Duty to Intervene' or report misconduct if she believes excessive force was used or the report is falsified.</li><li>Navigating the chain of command versus ethical obligations when a senior officer is involved.</li><li>Potential legal and departmental consequences of inaccurate or falsified use of force reporting for all officers involved.</li><li>Protections for whistleblowers within the agency or under state law.</li><li>Importance of Body-Worn Camera footage in verifying accounts of use of force incidents.</li></ul>"}],en="https://statutes.capitol.texas.gov/",Dw=[{id:"pc3103",category:"Penal Code",title:"Sec. 31.03. THEFT.",summary:"Defines theft as unlawfully appropriating property with intent to deprive the owner. Details various levels of offenses based on the value of the property.",link:en+"PE/htm/PE.31.htm#31.03",keywords:"theft, appropriation, property, consent, stolen, value, offense level"},{id:"pc4904",category:"Penal Code",title:"Sec. 49.04. DRIVING WHILE INTOXICATED.",summary:"Defines DWI as operating a motor vehicle in a public place while intoxicated. Specifies offense levels, including enhancements for open container or high BAC.",link:en+"PE/htm/PE.49.htm#49.04",keywords:"dwi, driving while intoxicated, motor vehicle, public place, alcohol, drugs, bac, open container"},{id:"ccp1401",category:"Code of Criminal Procedure",title:"Art. 14.01. OFFENSE WITHIN VIEW.",summary:"Authorizes a peace officer or any person to arrest an offender without a warrant for an offense committed in their presence or view, if it's a felony or breach of the peace. Peace officers can arrest for any offense in their presence/view.",link:en+"CR/htm/CR.14.htm#14.01",keywords:"arrest, warrantless arrest, presence, view, felony, public peace, misdemeanor"},{id:"ccp2132",category:"Code of Criminal Procedure",title:"Art. 2.132. LAW ENFORCEMENT POLICY ON RACIAL PROFILING.",summary:"Mandates that all Texas law enforcement agencies adopt a detailed written policy on racial profiling, including definitions, prohibitions, complaint processes, and data collection requirements for motor vehicle stops.",link:en+"CR/htm/CR.2.htm#2.132",keywords:"racial profiling, policy, motor vehicle stop, complaint process, data collection, reporting"},{id:"tc545351",category:"Transportation Code",title:"Sec. 545.351. MAXIMUM SPEED REQUIREMENT.",summary:"Prohibits driving at a speed greater than reasonable and prudent. Requires operators to control speed to avoid collisions and to reduce speed for specific hazards or conditions.",link:en+"TN/htm/TN.545.htm#545.351",keywords:"speeding, maximum speed, reasonable, prudent, due care, reduced speed, hazard"},{id:"fc261101",category:"Family Code",title:"Sec. 261.101. PERSONS REQUIRED TO REPORT; TIME TO REPORT (Child Abuse/Neglect).",summary:"Mandates any person with cause to believe a child is being abused or neglected to report immediately. Professionals must report within 48 hours of first suspicion. This duty applies regardless of privileged communication.",link:en+"FA/htm/FA.261.htm#261.101",keywords:"child abuse, neglect, report, professional, mandatory reporter, immediate report, 48 hours"}],xw=[{id:"scenarioTX1",title:"The Anonymous Tip (Texas Stop & Frisk)",description:"You receive an anonymous tip detailing a person matching a specific description is selling narcotics at a known high-crime park in your Texas city. The tip provides the person's clothing and location within the park but no predictive information about future actions. Upon arrival, you see a person matching the description exactly, but they are merely standing and talking on a cell phone. What is your best course of action under Texas law (re: Florida v. J.L. and its application in Texas)?",choices:[{text:"Immediately detain and frisk the individual based on the detailed anonymous tip.",outcome:"incorrect",feedback:"Incorrect (10 pts). Under Florida v. J.L. (and its interpretation in Texas), an anonymous tip lacking predictive information about illicit activity and merely describing a subject is generally insufficient for reasonable suspicion to stop and frisk. More corroboration is needed.",points:10},{text:"Conduct consensual observation, attempt to engage in a casual encounter to gather more information, or observe for any independent criminal activity before deciding to detain.",outcome:"correct",feedback:"Correct! (30 pts) This approach respects constitutional limits. An anonymous tip alone, without indicia of reliability or predictive information, often isn't enough for a stop. Further observation or a consensual encounter is a better initial step to develop reasonable suspicion if it exists.",points:30},{text:"Ignore the tip completely as anonymous tips are unreliable.",outcome:"neutral",feedback:"Neutral (15 pts). While caution is warranted, completely ignoring a tip about potential drug sales in a high-crime area might be a missed opportunity for lawful observation and potential intervention if further grounds develop. The key is *how* you act on it.",points:15}]},{id:"scenarioTX2",title:"Body Cam Activation (Texas Occupations Code §1701.655)",description:"You are responding to a 'check welfare' call at a residence in Texas. Upon arrival, a person answers the door and seems agitated but there's no immediate sign of a crime. When should your body-worn camera ideally be activated according to Texas Occupations Code §1701.655 and common agency policy?",choices:[{text:"Only if an offense is clearly occurring or an arrest is made.",outcome:"incorrect",feedback:"Incorrect (10 pts). Texas law and most policies require activation during *any* law enforcement-related encounter with the public, including investigative detentions and responses to calls for service, not just when an offense is obvious.",points:10},{text:"Prior to arriving at the scene, or as soon as safely possible upon initiating contact, to capture the entire interaction.",outcome:"correct",feedback:"Correct! (30 pts) Best practice and often policy is to activate the BWC *before* making contact or as soon as safely possible upon initiating an investigative or enforcement encounter. This ensures the entire interaction is captured.",points:30},{text:"After you determine a crime has been committed to save battery/storage.",outcome:"incorrect",feedback:"Incorrect (5 pts). Waiting until a crime is confirmed is too late and defeats the purpose of capturing the events leading up to that determination, which is crucial for transparency and evidence.",points:5}]}],Nw=[{id:"sfst-guide",title:"Standardized Field Sobriety Tests (SFST) Quick Reference (Texas)",content:"<h4>Key Phases:</h4><ol class='list-decimal list-inside ml-4 mb-2'><li>Vehicle in Motion Observations</li><li>Personal Contact & Interview</li><li>Pre-Arrest Screening (SFSTs)</li></ol><h4>SFST Battery (NHTSA Approved):</h4><ul class='list-disc list-inside ml-4 space-y-1'><li><strong>Horizontal Gaze Nystagmus (HGN):</strong> 6 clues total (3 per eye). Check for: Lack of smooth pursuit, Distinct & sustained nystagmus at maximum deviation, Onset of nystagmus prior to 45 degrees. Remember vertical nystagmus for other substances.</li><li><strong>Walk and Turn (WAT):</strong> 8 clues total. Instructions stage: Cannot keep balance, Starts too soon. Walking stage: Stops while walking, Misses heel-to-toe, Steps off line, Uses arms to balance, Improper turn, Incorrect number of steps. (9 heel-to-toe steps out, turn, 9 back).</li><li><strong>One Leg Stand (OLS):</strong> 4 clues total. Sways while balancing, Uses arms to balance, Hops, Puts foot down. (Hold for 30 seconds).</li></ul><p class='mt-2'><strong>Note:</strong> Administer per NHTSA guidelines. Document all observations meticulously. Consider totality of circumstances for PC. Ensure safe location.</p>",category:"DWI Investigation"},{id:"miranda-guide",title:"Miranda Warning (Texas - English/Spanish)",content:"<h4>English (Standard):</h4><p class='mb-2'>You have the right to remain silent. Anything you say can and will be used against you in a court of law. You have the right to an attorney. If you cannot afford an attorney, one will be appointed for you, prior to any questioning if you wish. You can decide at any time to exercise these rights and not answer any questions or make any statements.</p><p class='font-semibold'>Waiver (Ask both):</p><ol class='list-decimal list-inside ml-4'><li>Do you understand each of these rights I have explained to you?</li><li>Having these rights in mind, do you wish to talk to us now?</li></ol><hr class='my-3'><h4>Español (Ejemplo - Verify with certified translation):</h4><p class='mb-2'>Usted tiene el derecho de permanecer callado. Cualquier cosa que diga puede y será usada en su contra en un tribunal de justicia. Usted tiene el derecho a un abogado. Si no puede pagar un abogado, se le asignará uno antes de cualquier interrogatorio, si así lo desea. Usted puede decidir en cualquier momento ejercer estos derechos y no contestar ninguna pregunta ni hacer ninguna declaración.</p><p class='font-semibold'>Renuncia (Pregunte ambos):</p><ol class='list-decimal list-inside ml-4'><li>¿Entiende cada uno de estos derechos que le he explicado?</li><li>Teniendo estos derechos en mente, ¿desea hablar con nosotros ahora?</li></ol><p class='mt-2 text-xs'><strong>Important:</strong> Ensure suspect understands. If language barrier, use certified translator. Document waiver clearly.</p>",category:"Custodial Interrogation"},{id:"uof-guide",title:"Use of Force Considerations (Texas Penal Code Ch. 9)",content:"<h4>Key Principles (Based on Graham v. Connor & TX Law):</h4><ul class='list-disc list-inside ml-4 mb-2 space-y-1'><li><strong>Objective Reasonableness:</strong> Judged from the perspective of a reasonable officer on the scene, not with 20/20 hindsight.</li><li><strong>Totality of Circumstances:</strong> All facts known to the officer at the time.</li><li><strong>Graham Factors:</strong><ol class='list-alpha list-inside ml-6'><li>Severity of the crime at issue.</li><li>Whether the suspect poses an immediate threat to the safety of officers or others.</li><li>Whether the suspect is actively resisting arrest or attempting to evade arrest by flight.</li></ol></li></ul><h4>Texas Penal Code Chapter 9 (Justification Excluding Criminal Responsibility):</h4><ul class='list-disc list-inside ml-4 space-y-1'><li><strong>Sec. 9.51 (Arrest and Search):</strong> Authorizes force, including deadly force in specific circumstances, to make or assist in making an arrest or search, or to prevent escape after arrest, if the officer reasonably believes the arrest or search is lawful and reasonably believes the force is immediately necessary.</li><li><strong>De-escalation:</strong> When possible and appropriate without compromising safety, officers should use de-escalation techniques.</li></ul><p class='mt-2'><strong>Documentation:</strong> Thoroughly document all use of force incidents, articulating the specific facts justifying the level of force used. Adhere to agency policy and BWC activation requirements.</p>",category:"Response to Resistance"}],Ow=[{id:"wr1",title:"Recognizing Signs of Burnout & Cumulative Stress",summary:"Learn to identify early indicators of burnout and cumulative stress in yourself and peers.",details:"Burnout and cumulative stress in law enforcement are serious concerns. Manifestations can include: <ul><li><strong>Emotional:</strong> Chronic exhaustion, cynicism, detachment, loss of enjoyment, irritability, anxiety, depression.</li><li><strong>Physical:</strong> Fatigue, sleep disturbances, headaches, digestive issues, changes in appetite/weight, increased susceptibility to illness.</li><li><strong>Behavioral:</strong> Social withdrawal, increased alcohol/substance use, risk-taking behavior, difficulty concentrating, decreased job performance, strained relationships.</li></ul>Recognizing these signs early is crucial for seeking help. Pay attention to persistent changes in your baseline. If you notice these in yourself or a colleague, it's important to talk about it and explore support options. Early intervention is key.",keywords:"burnout, stress, exhaustion, cynicism, cumulative stress, ptsd"},{id:"wr2",title:"Mindfulness & Tactical Stress Reduction Techniques",summary:"Simple, practical exercises to manage acute and chronic stress and improve focus.",details:"Mindfulness involves paying attention to the present moment without judgment. Even short practices can help reduce stress and improve situational awareness. Try: <ul><li><strong>Tactical/Combat Breathing (Box Breathing):</strong> Inhale slowly for 4 counts, hold for 4 counts, exhale slowly for 4 counts, hold for 4 counts. Repeat for several minutes. This can be done discreetly to regulate your nervous system during stressful encounters.</li><li><strong>Grounding Techniques:</strong> If feeling overwhelmed, focus on your senses: Name 5 things you can see, 4 things you can touch, 3 things you can hear, 2 things you can smell, 1 thing you can taste. This helps bring you to the present.</li><li><strong>Mindful Observation:</strong> Briefly focus on a non-threatening detail in your environment (e.g., texture of your steering wheel, a specific sound) to anchor yourself.</li></ul> Consistent practice, even for a few minutes daily, can build resilience.",keywords:"mindfulness, breathing, stress reduction, focus, tactical breathing, grounding"},{id:"wr3",title:"Accessing Peer Support & Mental Health Resources in Texas",summary:"Information on connecting with confidential peer support programs and professional mental health services.",details:"Many Texas agencies and law enforcement associations offer robust peer support programs. These programs provide confidential assistance from fellow officers who understand the unique stressors of the job. Examples include programs through TMPA, CLEAT, local agency initiatives (e.g., Austin PD, Dallas PD, Harris County SO have programs), and the Bill Blackwood LEMIT. <br><br>Additionally, specialized mental health professionals cater to first responders. Organizations like the National Alliance on Mental Illness (NAMI) Texas can also provide resources. Don't hesitate to reach out. Your agency likely has an Employee Assistance Program (EAP). Seeking help is a sign of strength. <br><br><strong>Key Texas Resources (Examples):</strong><ul><li>Your agency's Peer Support Team / EAP</li><li>Texas Law Enforcement Peer Network (TXLEPN - through LEMIT)</li><li>Bluebonnet CISM Team (Central Texas)</li><li>Local chapters of NAMI or Mental Health America</li></ul>Check your agency's resources or state-level LEO association websites for local peer support contacts and vetted mental health providers.",keywords:"peer support, mental health, help, resources, eap, therapy, counseling, tcole wellness"}],Lw=[{name:"Texas Commission on Law Enforcement (TCOLE)",url:"https://www.tcole.texas.gov/",description:"Official TCOLE website for rules, forms, and licensing information."},{name:"Texas Municipal Police Association (TMPA)",url:"https://www.tmpa.org/",description:"Advocacy, legal services, and resources for Texas municipal police."},{name:"Combined Law Enforcement Associations of Texas (CLEAT)",url:"https://cleat.org/",description:"Largest police labor organization in Texas, offering legal and support services."},{name:"Bill Blackwood Law Enforcement Management Institute of Texas (LEMIT)",url:"https://www.lemitonline.org/",description:"Provides leadership and management training for Texas law enforcement, including peer support resources."},{name:"Texas Police Chiefs Association (TPCA)",url:"https://www.texaspolicechiefs.org/",description:"Professional development and advocacy for Texas police chiefs."},{name:"National Alliance on Mental Illness (NAMI) Texas",url:"https://namitexas.org/",description:"Support, education, and advocacy for individuals and families affected by mental illness."},{name:"FBI National Academy Associates - Texas Chapter",url:"https://fbinaatexas.org/",description:"Professional association for graduates of the FBI National Academy."}];let Lt=null;function Vw(n,e,t,r){const i=document.getElementById("principlesContainer"),s=document.getElementById("caseStudiesContainer"),a=document.getElementById("caseStudyModal"),c=document.getElementById("modalTitle"),u=document.getElementById("modalBody"),d=document.getElementById("closeModalButton"),p=document.getElementById("closeModalButtonFooter"),g=document.getElementById("analyzeCaseStudyButton"),v=document.getElementById("caseStudyAiAnalysisContainer"),R=document.getElementById("caseStudyAiAnalysisContent");document.getElementById("caseStudyAiButtonSpinner"),i&&(i.innerHTML="",n.forEach(C=>{const D=`
                <div class="expandable-card border border-slate-300 rounded-xl shadow-sm overflow-hidden">
                    <button class="w-full text-left p-4 sm:p-5 bg-slate-100 hover:bg-slate-200 focus-visible:bg-slate-200 rounded-t-xl focus:outline-none flex justify-between items-center transition-colors duration-200" aria-expanded="false">
                        <div>
                            <span class="font-semibold text-md sm:text-lg text-blue-700">${r(C.name)}</span>
                            <p class="text-sm font-normal text-slate-500 mt-0.5">${r(C.summary)}</p>
                        </div>
                        <span class="arrow-icon text-blue-700 text-2xl transform" aria-hidden="true">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5"><path fill-rule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" /></svg>
                        </span>
                    </button>
                    <div class="expandable-content px-4 sm:px-5 border-t border-slate-300 card-collapsed text-slate-700 bg-white rounded-b-xl">
                        <p class="py-4 text-sm sm:text-base leading-relaxed">${C.details.replace(/\n/g,"<br>")}</p>
                    </div>
                </div>`;i.innerHTML+=D})),s&&a&&c&&u&&g&&(s.innerHTML="",e.forEach(C=>{const D=`
                <button data-id="${C.id}" class="case-study-item block w-full h-full text-left p-4 sm:p-5 bg-slate-100 hover:bg-slate-200 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white flex flex-col justify-between" aria-label="View details for case study: ${r(C.title)}">
                    <div>
                        <h4 class="font-semibold text-md sm:text-lg text-blue-700 mb-1.5">${r(C.title)}</h4>
                        <p class="text-sm text-slate-600 leading-relaxed">${r(C.summary)}</p>
                    </div>
                    <span class="text-xs text-blue-500 mt-3 inline-block font-medium">View Details &raquo;</span>
                </button>`;s.innerHTML+=D}),document.querySelectorAll(".case-study-item").forEach(C=>{C.addEventListener("click",()=>{const D=C.dataset.id;Lt=e.find(P=>P.id===D),Lt&&Mw(Lt,a,c,u,v,R,r)})}),g.addEventListener("click",async()=>{if(!Lt)return;oa(g);const C=document.getElementById("caseStudyAiLoading");R&&(R.innerHTML=""),v&&v.classList.remove("hidden"),C&&C.classList.remove("hidden");const D=`You are an AI assistant for Texas Law Enforcement Officers. Analyze the following case study and provide a concise analysis. Focus on identifying key ethical principles involved, potential courses of action and their ethical implications, and any relevant Texas legal considerations or best practices. Case Study Title: "${Lt.title}". Case Details: "${Lt.detailsRaw}". Original Discussion Points: "${Lt.discussionPointsHTML.replace(/<[^>]+>/g," ")}". Provide your analysis in a structured way using Markdown for headings (e.g., ### Heading), bold, italics, and bullet points.`,P=await t(D);R&&(R.innerHTML=P),C&&C.classList.add("hidden"),aa(g),g.innerHTML='<span class="mr-2">✨</span>Analyze with AI'})),d&&d.addEventListener("click",()=>Wr(a)),p&&p.addEventListener("click",()=>Wr(a)),a&&a.addEventListener("click",C=>{C.target===a&&Wr(a)}),document.addEventListener("keydown",C=>{C.key==="Escape"&&a&&a.classList.contains("modal-active")&&Wr(a)}),Wi()}function Mw(n,e,t,r,i,s,a){if(!n||!e||!t||!r)return;t.innerHTML=a(n.title),r.innerHTML=`<div class="prose prose-sm sm:prose-base max-w-none">${n.detailsRaw.replace(/\n/g,"<br><br>")}<br><br>${n.discussionPointsHTML}</div>`;const c=e.querySelector("#modalAiAnalysisSection");c&&c.classList.remove("hidden"),i&&i.classList.add("hidden"),s&&(s.innerHTML=""),_w(e)}function Uw(n,e){const t=document.getElementById("texasLawContainer"),r=document.getElementById("lawSearchInput");function i(s=""){if(!t)return;t.innerHTML="";const a=s.toLowerCase().trim(),c=n.filter(u=>u.title.toLowerCase().includes(a)||u.summary&&u.summary.toLowerCase().includes(a)||u.keywords&&u.keywords.toLowerCase().includes(a)||u.id.toLowerCase().includes(a));if(c.length===0){t.innerHTML='<p class="text-slate-500 p-4 text-center">No Texas statutes match your search criteria.</p>';return}c.forEach(u=>{const d=`content-law-${u.id}`,p=`
                <div id="${u.id.toLowerCase().replace(/\./g,"-")}" class="expandable-card border border-slate-300 rounded-xl shadow-sm overflow-hidden">
                    <button class="w-full text-left p-4 sm:p-5 bg-slate-100 hover:bg-slate-200 focus-visible:bg-slate-200 rounded-t-xl focus:outline-none flex justify-between items-center transition-colors duration-200" aria-expanded="false" aria-controls="${d}">
                       <div>
                            <span class="font-semibold text-blue-700">${e(u.title)}</span>
                            <span class="text-xs text-slate-500 ml-2">(${e(u.category)})</span>
                       </div>
                        <span class="arrow-icon text-blue-700 text-2xl transform" aria-hidden="true">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5"><path fill-rule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" /></svg>
                        </span>
                    </button>
                    <div id="${d}" class="expandable-content px-4 sm:px-5 border-t border-slate-300 card-collapsed text-slate-700 bg-white rounded-b-xl">
                        <p class="py-2 text-sm text-slate-600 leading-relaxed">${e(u.summary)}</p>
                        <a href="${e(u.link)}" target="_blank" rel="noopener noreferrer" class="inline-block mt-2 mb-3 px-3 py-1.5 bg-sky-600 text-white text-xs font-medium rounded-md hover:bg-sky-700 transition-colors shadow-sm hover:shadow">
                            View Full Statute (statutes.capitol.texas.gov) 
                            <span class="ml-1" aria-hidden="true">↗</span>
                        </a>
                        ${u.content?`<h5 class="text-xs font-semibold text-slate-500 mt-3 mb-1">Key Excerpt:</h5><pre class="py-2 whitespace-pre-wrap text-xs sm:text-sm leading-relaxed bg-slate-50 p-3 rounded-md border border-slate-200">${e(u.content)}</pre>`:""}
                    </div>
                </div>`;t.innerHTML+=p}),Wi()}r&&r.addEventListener("input",s=>i(s.target.value)),i()}let ql=0;function Fw(n,e,t,r){const i=document.getElementById("interactiveScenariosContainer"),s=document.getElementById("scenarioScore"),a=document.getElementById("fieldGuidesContainer"),c=document.getElementById("generateAiScenarioButton"),u=document.getElementById("aiGeneratedScenarioContainer"),d=document.getElementById("aiGeneratedScenarioContent"),p=document.getElementById("aiScenarioLoading");i&&s&&(i.innerHTML="",n.forEach(g=>{let v="";g.choices.forEach(C=>{v+=`<button data-points="${C.points}" data-feedback="${r(C.feedback)}" class="scenario-choice block w-full md:w-auto md:inline-block mt-2 md:mt-0 md:mr-2 px-5 py-2.5 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-50 transition-all duration-200 shadow-md hover:shadow-lg">${r(C.text)}</button>`});const R=`
                <div class="scenario p-5 sm:p-6 border border-slate-300 rounded-xl bg-slate-50 shadow-lg" id="scenario-${g.id}" role="region" aria-labelledby="scenario-title-${g.id}">
                    <h4 id="scenario-title-${g.id}" class="text-lg sm:text-xl font-semibold text-blue-800 mb-3">${r(g.title)}</h4>
                    <p class="text-slate-600 mb-4 text-sm leading-relaxed">${r(g.description)}</p>
                    <div class="choices mb-4 space-y-2 sm:space-y-0 sm:space-x-2"> ${v} </div>
                    <div class="feedback-area hidden mt-3" role="alert"></div>
                </div>`;i.innerHTML+=R}),document.querySelectorAll(".scenario-choice").forEach(g=>{g.addEventListener("click",function(){const v=parseInt(this.dataset.points),R=this.dataset.feedback,C=this.closest(".scenario").querySelector(".feedback-area");ql+=v,s.textContent=ql;let D="feedback-neutral";v>20?D="feedback-correct":v<=10&&(D="feedback-incorrect"),C.innerHTML=`<div class="${D} scenario-feedback text-sm"><p class="font-semibold mb-1">Feedback (+${v} pts):</p><p>${R}</p></div>`,C.classList.remove("hidden"),this.closest(".choices").querySelectorAll("button").forEach(P=>{P.disabled=!0,P.classList.add("opacity-60","cursor-not-allowed")}),this.classList.remove("opacity-60","cursor-not-allowed"),this.classList.add("ring-2","ring-amber-400","ring-offset-2","ring-offset-slate-50")})})),c&&c.addEventListener("click",async()=>{oa(c),d&&(d.innerHTML=""),u&&u.classList.remove("hidden"),p&&p.classList.remove("hidden");const v=await t("You are an AI assistant for Texas Law Enforcement Officers. Generate a new, concise ethical scenario relevant to daily patrol duties in Texas. The scenario should present a clear ethical challenge. After the scenario description, provide 3-4 plausible but distinct courses of action an officer might consider (without indicating which is 'correct'). Finally, provide a brief 'AI Ethical Considerations' section discussing the key ethical principles at play in the scenario you generated. Keep the scenario and choices brief and to the point. Format your response using Markdown for headings (e.g., ### Scenario), bold, italics, and bullet points for choices and considerations.");d&&(d.innerHTML=v),p&&p.classList.add("hidden"),aa(c),c.innerHTML='<span class="mr-2 text-base">✨</span>Generate New AI Scenario'}),a&&(a.innerHTML="",e.forEach(g=>{const v=`content-guide-${g.id}`,R=`
                <div id="${g.id.toLowerCase().replace(/\s+/g,"-")}" class="expandable-card border border-slate-300 rounded-xl shadow-sm overflow-hidden">
                    <button class="w-full text-left p-4 sm:p-5 bg-slate-100 hover:bg-slate-200 focus-visible:bg-slate-200 rounded-t-xl focus:outline-none flex justify-between items-center transition-colors duration-200" aria-expanded="false" aria-controls="${v}">
                        <span class="font-semibold text-blue-700">${r(g.title)} <span class="text-xs text-slate-500">(${r(g.category)})</span></span>
                        <span class="arrow-icon text-blue-700 text-2xl transform" aria-hidden="true">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5"><path fill-rule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" /></svg>
                        </span>
                    </button>
                    <div id="${v}" class="expandable-content px-4 sm:px-5 border-t border-slate-300 card-collapsed text-slate-700 bg-white rounded-b-xl">
                        <div class="py-4 text-sm sm:text-base leading-relaxed prose prose-sm sm:prose-base max-w-none">${g.content}</div>
                    </div>
                </div>`;a.innerHTML+=R})),Wi()}function Bw(n,e){const t=document.getElementById("wellnessResourcesContainer");t&&(t.innerHTML="",n.forEach(r=>{const i=`content-wellness-${r.id}`,s=`
                <div class="expandable-card border border-slate-300 rounded-xl shadow-sm overflow-hidden">
                    <button class="w-full text-left p-4 sm:p-5 bg-slate-100 hover:bg-slate-200 focus-visible:bg-slate-200 rounded-t-xl focus:outline-none flex justify-between items-center transition-colors duration-200" aria-expanded="false" aria-controls="${i}">
                         <div>
                            <span class="font-semibold text-md sm:text-lg text-blue-700">${e(r.title)}</span>
                            <p class="text-sm font-normal text-slate-500 mt-0.5">${e(r.summary)}</p>
                        </div>
                        <span class="arrow-icon text-blue-700 text-2xl transform" aria-hidden="true">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5"><path fill-rule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" /></svg>
                        </span>
                    </button>
                    <div id="${i}" class="expandable-content px-4 sm:px-5 border-t border-slate-300 card-collapsed text-slate-700 bg-white rounded-b-xl">
                        <div class="py-4 text-sm sm:text-base leading-relaxed prose prose-sm sm:prose-base max-w-none">${r.details.replace(/\n/g,"<br>")}</div>
                    </div>
                </div>`;t.innerHTML+=s}),Wi())}function $w(n,e){const t=document.getElementById("externalResourcesList");t&&(t.innerHTML="",n.forEach(r=>{const i=`
                <li class="p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors duration-200 border border-slate-200 shadow-sm hover:shadow-md">
                    <a href="${e(r.url)}" target="_blank" rel="noopener noreferrer" class="font-semibold text-blue-600 hover:text-blue-800 hover:underline focus:outline-none focus-visible:ring-1 focus-visible:ring-amber-500 focus-visible:ring-offset-1 focus-visible:ring-offset-slate-50 rounded-sm">
                        ${e(r.name)} 
                        <span class="text-xs text-slate-400 font-normal inline-block ml-1" aria-hidden="true">↗</span>
                    </a>
                    <p class="text-xs text-slate-500 mt-1 leading-relaxed">${e(r.description)}</p>
                </li>`;t.innerHTML+=i})),document.querySelectorAll(".agency-portal-link").forEach(r=>{r.addEventListener("click",i=>{i.preventDefault(),alert("Agency Administration Portal link clicked. This feature would be part of a separate administrative interface.")})})}async function jw(){try{console.log("loadInitialAppData called. Current Firebase user:",ao.currentUser);const n=Ge();document.getElementById("currentYear")&&(document.getElementById("currentYear").textContent=new Date().getFullYear()),vw(n,Rw,Cw,Os,jd),Ew(n,Sw,Fd,ve),Vw(Pw,kw,Os,ve),Uw(Dw,ve),Fw(xw,Nw,Os,ve),Bw(Ow,ve),$w(Lw,ve),bw(n.name),ao.currentUser&&Iw()}catch(n){alert("An error occurred while loading your data. Please try again or contact support."),console.error("Error in loadInitialAppData:",n)}}document.addEventListener("DOMContentLoaded",()=>{Aw(ao,Fd,async n=>{console.log("Main.js: User logged in, loading app data..."),await jw()},()=>{console.log("Main.js: User logged out.")},async()=>{console.log("Main.js: App is ready after initial auth and data load.")}),window.navigateToSection=jd,window.openUpdateModal=n=>{const e=document.getElementById("caseStudyModal"),t=document.getElementById("modalTitle"),r=document.getElementById("modalBody"),i=document.getElementById("closeModalButton"),s=e.querySelector("#modalAiAnalysisSection"),a=n.dataset.fulltext,c=n.dataset.title;e&&t&&r&&(t.innerHTML=c,r.innerHTML=`<div class="prose prose-sm sm:prose-base max-w-none">${a.replace(/\n/g,"<br><br>")}</div>`,e.classList.remove("modal-inactive"),e.classList.add("modal-active"),i&&i.focus(),s&&s.classList.add("hidden"))}});
