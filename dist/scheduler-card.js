!function(e){"use strict";
/*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */function t(e,t,i,s){var a,o=arguments.length,n=o<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,s);else for(var r=e.length-1;r>=0;r--)(a=e[r])&&(n=(o<3?a(n):o>3?a(t,i,n):a(t,i))||n);return o>3&&n&&Object.defineProperty(t,i,n),n
/**
     * @license
     * Copyright 2019 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */}const i=window,s=i.ShadowRoot&&(void 0===i.ShadyCSS||i.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,a=Symbol(),o=new WeakMap;class n{constructor(e,t,i){if(this._$cssResult$=!0,i!==a)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(s&&void 0===e){const i=void 0!==t&&1===t.length;i&&(e=o.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&o.set(t,e))}return e}toString(){return this.cssText}}const r=(e,...t)=>{const i=1===e.length?e[0]:t.reduce((t,i,s)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+e[s+1],e[0]);return new n(i,e,a)},l=(e,t)=>{s?e.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):t.forEach(t=>{const s=document.createElement("style"),a=i.litNonce;void 0!==a&&s.setAttribute("nonce",a),s.textContent=t.cssText,e.appendChild(s)})},c=s?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return(e=>new n("string"==typeof e?e:e+"",void 0,a))(t)})(e):e
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */;var d;const u=window,h=u.trustedTypes,m=h?h.emptyScript:"",p=u.reactiveElementPolyfillSupport,_={toAttribute(e,t){switch(t){case Boolean:e=e?m:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let i=e;switch(t){case Boolean:i=null!==e;break;case Number:i=null===e?null:Number(e);break;case Object:case Array:try{i=JSON.parse(e)}catch(e){i=null}}return i}},v=(e,t)=>t!==e&&(t==t||e==e),g={attribute:!0,type:String,converter:_,reflect:!1,hasChanged:v};class f extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(e){var t;this.finalize(),(null!==(t=this.h)&&void 0!==t?t:this.h=[]).push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach((t,i)=>{const s=this._$Ep(i,t);void 0!==s&&(this._$Ev.set(s,i),e.push(s))}),e}static createProperty(e,t=g){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){const i="symbol"==typeof e?Symbol():"__"+e,s=this.getPropertyDescriptor(e,i,t);void 0!==s&&Object.defineProperty(this.prototype,e,s)}}static getPropertyDescriptor(e,t,i){return{get(){return this[t]},set(s){const a=this[e];this[t]=s,this.requestUpdate(e,a,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||g}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),void 0!==e.h&&(this.h=[...e.h]),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const e=this.properties,t=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const i of t)this.createProperty(i,e[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const e of i)t.unshift(c(e))}else void 0!==e&&t.push(c(e));return t}static _$Ep(e,t){const i=t.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof e?e.toLowerCase():void 0}u(){var e;this._$E_=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(e=this.constructor.h)||void 0===e||e.forEach(e=>e(this))}addController(e){var t,i;(null!==(t=this._$ES)&&void 0!==t?t:this._$ES=[]).push(e),void 0!==this.renderRoot&&this.isConnected&&(null===(i=e.hostConnected)||void 0===i||i.call(e))}removeController(e){var t;null===(t=this._$ES)||void 0===t||t.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((e,t)=>{this.hasOwnProperty(t)&&(this._$Ei.set(t,this[t]),delete this[t])})}createRenderRoot(){var e;const t=null!==(e=this.shadowRoot)&&void 0!==e?e:this.attachShadow(this.constructor.shadowRootOptions);return l(t,this.constructor.elementStyles),t}connectedCallback(){var e;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(e=this._$ES)||void 0===e||e.forEach(e=>{var t;return null===(t=e.hostConnected)||void 0===t?void 0:t.call(e)})}enableUpdating(e){}disconnectedCallback(){var e;null===(e=this._$ES)||void 0===e||e.forEach(e=>{var t;return null===(t=e.hostDisconnected)||void 0===t?void 0:t.call(e)})}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$EO(e,t,i=g){var s;const a=this.constructor._$Ep(e,i);if(void 0!==a&&!0===i.reflect){const o=(void 0!==(null===(s=i.converter)||void 0===s?void 0:s.toAttribute)?i.converter:_).toAttribute(t,i.type);this._$El=e,null==o?this.removeAttribute(a):this.setAttribute(a,o),this._$El=null}}_$AK(e,t){var i;const s=this.constructor,a=s._$Ev.get(e);if(void 0!==a&&this._$El!==a){const e=s.getPropertyOptions(a),o="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==(null===(i=e.converter)||void 0===i?void 0:i.fromAttribute)?e.converter:_;this._$El=a,this[a]=o.fromAttribute(t,e.type),this._$El=null}}requestUpdate(e,t,i){let s=!0;void 0!==e&&(((i=i||this.constructor.getPropertyOptions(e)).hasChanged||v)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),!0===i.reflect&&this._$El!==e&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(e,i))):s=!1),!this.isUpdatePending&&s&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((e,t)=>this[t]=e),this._$Ei=void 0);let t=!1;const i=this._$AL;try{t=this.shouldUpdate(i),t?(this.willUpdate(i),null===(e=this._$ES)||void 0===e||e.forEach(e=>{var t;return null===(t=e.hostUpdate)||void 0===t?void 0:t.call(e)}),this.update(i)):this._$Ek()}catch(e){throw t=!1,this._$Ek(),e}t&&this._$AE(i)}willUpdate(e){}_$AE(e){var t;null===(t=this._$ES)||void 0===t||t.forEach(e=>{var t;return null===(t=e.hostUpdated)||void 0===t?void 0:t.call(e)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){void 0!==this._$EC&&(this._$EC.forEach((e,t)=>this._$EO(t,this[t],e)),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}}
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
var y;f.finalized=!0,f.elementProperties=new Map,f.elementStyles=[],f.shadowRootOptions={mode:"open"},null==p||p({ReactiveElement:f}),(null!==(d=u.reactiveElementVersions)&&void 0!==d?d:u.reactiveElementVersions=[]).push("1.4.2");const b=window,k=b.trustedTypes,w=k?k.createPolicy("lit-html",{createHTML:e=>e}):void 0,x=`lit$${(Math.random()+"").slice(9)}$`,$="?"+x,j=`<${$}>`,O=document,z=(e="")=>O.createComment(e),S=e=>null===e||"object"!=typeof e&&"function"!=typeof e,E=Array.isArray,C=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,A=/-->/g,M=/>/g,D=RegExp(">|[ \t\n\f\r](?:([^\\s\"'>=/]+)([ \t\n\f\r]*=[ \t\n\f\r]*(?:[^ \t\n\f\r\"'`<>=]|(\"|')|))|$)","g"),T=/'/g,N=/"/g,L=/^(?:script|style|textarea|title)$/i,I=(e=>(t,...i)=>({_$litType$:e,strings:t,values:i}))(1),P=Symbol.for("lit-noChange"),q=Symbol.for("lit-nothing"),R=new WeakMap,V=O.createTreeWalker(O,129,null,!1),U=(e,t)=>{const i=e.length-1,s=[];let a,o=2===t?"<svg>":"",n=C;for(let t=0;t<i;t++){const i=e[t];let r,l,c=-1,d=0;for(;d<i.length&&(n.lastIndex=d,l=n.exec(i),null!==l);)d=n.lastIndex,n===C?"!--"===l[1]?n=A:void 0!==l[1]?n=M:void 0!==l[2]?(L.test(l[2])&&(a=RegExp("</"+l[2],"g")),n=D):void 0!==l[3]&&(n=D):n===D?">"===l[0]?(n=null!=a?a:C,c=-1):void 0===l[1]?c=-2:(c=n.lastIndex-l[2].length,r=l[1],n=void 0===l[3]?D:'"'===l[3]?N:T):n===N||n===T?n=D:n===A||n===M?n=C:(n=D,a=void 0);const u=n===D&&e[t+1].startsWith("/>")?" ":"";o+=n===C?i+j:c>=0?(s.push(r),i.slice(0,c)+"$lit$"+i.slice(c)+x+u):i+x+(-2===c?(s.push(void 0),t):u)}const r=o+(e[i]||"<?>")+(2===t?"</svg>":"");if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return[void 0!==w?w.createHTML(r):r,s]};class H{constructor({strings:e,_$litType$:t},i){let s;this.parts=[];let a=0,o=0;const n=e.length-1,r=this.parts,[l,c]=U(e,t);if(this.el=H.createElement(l,i),V.currentNode=this.el.content,2===t){const e=this.el.content,t=e.firstChild;t.remove(),e.append(...t.childNodes)}for(;null!==(s=V.nextNode())&&r.length<n;){if(1===s.nodeType){if(s.hasAttributes()){const e=[];for(const t of s.getAttributeNames())if(t.endsWith("$lit$")||t.startsWith(x)){const i=c[o++];if(e.push(t),void 0!==i){const e=s.getAttribute(i.toLowerCase()+"$lit$").split(x),t=/([.?@])?(.*)/.exec(i);r.push({type:1,index:a,name:t[2],strings:e,ctor:"."===t[1]?G:"?"===t[1]?K:"@"===t[1]?J:W})}else r.push({type:6,index:a})}for(const t of e)s.removeAttribute(t)}if(L.test(s.tagName)){const e=s.textContent.split(x),t=e.length-1;if(t>0){s.textContent=k?k.emptyScript:"";for(let i=0;i<t;i++)s.append(e[i],z()),V.nextNode(),r.push({type:2,index:++a});s.append(e[t],z())}}}else if(8===s.nodeType)if(s.data===$)r.push({type:2,index:a});else{let e=-1;for(;-1!==(e=s.data.indexOf(x,e+1));)r.push({type:7,index:a}),e+=x.length-1}a++}}static createElement(e,t){const i=O.createElement("template");return i.innerHTML=e,i}}function F(e,t,i=e,s){var a,o,n,r;if(t===P)return t;let l=void 0!==s?null===(a=i._$Co)||void 0===a?void 0:a[s]:i._$Cl;const c=S(t)?void 0:t._$litDirective$;return(null==l?void 0:l.constructor)!==c&&(null===(o=null==l?void 0:l._$AO)||void 0===o||o.call(l,!1),void 0===c?l=void 0:(l=new c(e),l._$AT(e,i,s)),void 0!==s?(null!==(n=(r=i)._$Co)&&void 0!==n?n:r._$Co=[])[s]=l:i._$Cl=l),void 0!==l&&(t=F(e,l._$AS(e,t.values),l,s)),t}class B{constructor(e,t){this.u=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}v(e){var t;const{el:{content:i},parts:s}=this._$AD,a=(null!==(t=null==e?void 0:e.creationScope)&&void 0!==t?t:O).importNode(i,!0);V.currentNode=a;let o=V.nextNode(),n=0,r=0,l=s[0];for(;void 0!==l;){if(n===l.index){let t;2===l.type?t=new Y(o,o.nextSibling,this,e):1===l.type?t=new l.ctor(o,l.name,l.strings,this,e):6===l.type&&(t=new X(o,this,e)),this.u.push(t),l=s[++r]}n!==(null==l?void 0:l.index)&&(o=V.nextNode(),n++)}return a}p(e){let t=0;for(const i of this.u)void 0!==i&&(void 0!==i.strings?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}}class Y{constructor(e,t,i,s){var a;this.type=2,this._$AH=q,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=s,this._$Cm=null===(a=null==s?void 0:s.isConnected)||void 0===a||a}get _$AU(){var e,t;return null!==(t=null===(e=this._$AM)||void 0===e?void 0:e._$AU)&&void 0!==t?t:this._$Cm}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===e.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=F(this,e,t),S(e)?e===q||null==e||""===e?(this._$AH!==q&&this._$AR(),this._$AH=q):e!==this._$AH&&e!==P&&this.g(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):(e=>E(e)||"function"==typeof(null==e?void 0:e[Symbol.iterator]))(e)?this.k(e):this.g(e)}O(e,t=this._$AB){return this._$AA.parentNode.insertBefore(e,t)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}g(e){this._$AH!==q&&S(this._$AH)?this._$AA.nextSibling.data=e:this.T(O.createTextNode(e)),this._$AH=e}$(e){var t;const{values:i,_$litType$:s}=e,a="number"==typeof s?this._$AC(e):(void 0===s.el&&(s.el=H.createElement(s.h,this.options)),s);if((null===(t=this._$AH)||void 0===t?void 0:t._$AD)===a)this._$AH.p(i);else{const e=new B(a,this),t=e.v(this.options);e.p(i),this.T(t),this._$AH=e}}_$AC(e){let t=R.get(e.strings);return void 0===t&&R.set(e.strings,t=new H(e)),t}k(e){E(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,s=0;for(const a of e)s===t.length?t.push(i=new Y(this.O(z()),this.O(z()),this,this.options)):i=t[s],i._$AI(a),s++;s<t.length&&(this._$AR(i&&i._$AB.nextSibling,s),t.length=s)}_$AR(e=this._$AA.nextSibling,t){var i;for(null===(i=this._$AP)||void 0===i||i.call(this,!1,!0,t);e&&e!==this._$AB;){const t=e.nextSibling;e.remove(),e=t}}setConnected(e){var t;void 0===this._$AM&&(this._$Cm=e,null===(t=this._$AP)||void 0===t||t.call(this,e))}}class W{constructor(e,t,i,s,a){this.type=1,this._$AH=q,this._$AN=void 0,this.element=e,this.name=t,this._$AM=s,this.options=a,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=q}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,i,s){const a=this.strings;let o=!1;if(void 0===a)e=F(this,e,t,0),o=!S(e)||e!==this._$AH&&e!==P,o&&(this._$AH=e);else{const s=e;let n,r;for(e=a[0],n=0;n<a.length-1;n++)r=F(this,s[i+n],t,n),r===P&&(r=this._$AH[n]),o||(o=!S(r)||r!==this._$AH[n]),r===q?e=q:e!==q&&(e+=(null!=r?r:"")+a[n+1]),this._$AH[n]=r}o&&!s&&this.j(e)}j(e){e===q?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=e?e:"")}}class G extends W{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===q?void 0:e}}const Z=k?k.emptyScript:"";class K extends W{constructor(){super(...arguments),this.type=4}j(e){e&&e!==q?this.element.setAttribute(this.name,Z):this.element.removeAttribute(this.name)}}class J extends W{constructor(e,t,i,s,a){super(e,t,i,s,a),this.type=5}_$AI(e,t=this){var i;if((e=null!==(i=F(this,e,t,0))&&void 0!==i?i:q)===P)return;const s=this._$AH,a=e===q&&s!==q||e.capture!==s.capture||e.once!==s.once||e.passive!==s.passive,o=e!==q&&(s===q||a);a&&this.element.removeEventListener(this.name,this,s),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,i;"function"==typeof this._$AH?this._$AH.call(null!==(i=null===(t=this.options)||void 0===t?void 0:t.host)&&void 0!==i?i:this.element,e):this._$AH.handleEvent(e)}}class X{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){F(this,e)}}const Q=b.litHtmlPolyfillSupport;null==Q||Q(H,Y),(null!==(y=b.litHtmlVersions)&&void 0!==y?y:b.litHtmlVersions=[]).push("2.4.0");
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
var ee,te;class ie extends f{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,t;const i=super.createRenderRoot();return null!==(e=(t=this.renderOptions).renderBefore)&&void 0!==e||(t.renderBefore=i.firstChild),i}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=((e,t,i)=>{var s,a;const o=null!==(s=null==i?void 0:i.renderBefore)&&void 0!==s?s:t;let n=o._$litPart$;if(void 0===n){const e=null!==(a=null==i?void 0:i.renderBefore)&&void 0!==a?a:null;o._$litPart$=n=new Y(t.insertBefore(z(),e),e,void 0,null!=i?i:{})}return n._$AI(e),n})(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),null===(e=this._$Do)||void 0===e||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),null===(e=this._$Do)||void 0===e||e.setConnected(!1)}render(){return P}}ie.finalized=!0,ie._$litElement$=!0,null===(ee=globalThis.litElementHydrateSupport)||void 0===ee||ee.call(globalThis,{LitElement:ie});const se=globalThis.litElementPolyfillSupport;null==se||se({LitElement:ie}),(null!==(te=globalThis.litElementVersions)&&void 0!==te?te:globalThis.litElementVersions=[]).push("3.2.2");
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
const ae=e=>t=>"function"==typeof t?((e,t)=>(customElements.define(e,t),t))(e,t):((e,t)=>{const{kind:i,elements:s}=t;return{kind:i,elements:s,finisher(t){customElements.define(e,t)}}})(e,t)
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */,oe=(e,t)=>"method"===t.kind&&t.descriptor&&!("value"in t.descriptor)?{...t,finisher(i){i.createProperty(t.key,e)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){"function"==typeof t.initializer&&(this[t.key]=t.initializer.call(this))},finisher(i){i.createProperty(t.key,e)}};function ne(e){return(t,i)=>void 0!==i?((e,t,i)=>{t.constructor.createProperty(i,e)})(e,t,i):oe(e,t)
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */}function re(e){return ne({...e,state:!0})}
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */const le=({finisher:e,descriptor:t})=>(i,s)=>{var a;if(void 0===s){const s=null!==(a=i.originalKey)&&void 0!==a?a:i.key,o=null!=t?{kind:"method",placement:"prototype",key:s,descriptor:t(i.key)}:{...i,key:s};return null!=e&&(o.finisher=function(t){e(t,s)}),o}{const a=i.constructor;void 0!==t&&Object.defineProperty(i,s,t(s)),null==e||e(a,s)}}
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */;
/**
     * @license
     * Copyright 2021 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
var ce;null===(ce=window.HTMLSlotElement)||void 0===ce||ce.prototype.assignedElements;var de=/d{1,4}|M{1,4}|YY(?:YY)?|S{1,3}|Do|ZZ|Z|([HhMsDm])\1?|[aA]|"[^"]*"|'[^']*'/g,ue="[^\\s]+",he=/\[([^]*?)\]/gm;function me(e,t){for(var i=[],s=0,a=e.length;s<a;s++)i.push(e[s].substr(0,t));return i}var pe=function(e){return function(t,i){var s=i[e].map((function(e){return e.toLowerCase()})).indexOf(t.toLowerCase());return s>-1?s:null}};function _e(e){for(var t=[],i=1;i<arguments.length;i++)t[i-1]=arguments[i];for(var s=0,a=t;s<a.length;s++){var o=a[s];for(var n in o)e[n]=o[n]}return e}var ve=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],ge=["January","February","March","April","May","June","July","August","September","October","November","December"],fe=me(ge,3),ye={dayNamesShort:me(ve,3),dayNames:ve,monthNamesShort:fe,monthNames:ge,amPm:["am","pm"],DoFn:function(e){return e+["th","st","nd","rd"][e%10>3?0:(e-e%10!=10?1:0)*e%10]}},be=_e({},ye),ke=function(e,t){for(void 0===t&&(t=2),e=String(e);e.length<t;)e="0"+e;return e},we={D:function(e){return String(e.getDate())},DD:function(e){return ke(e.getDate())},Do:function(e,t){return t.DoFn(e.getDate())},d:function(e){return String(e.getDay())},dd:function(e){return ke(e.getDay())},ddd:function(e,t){return t.dayNamesShort[e.getDay()]},dddd:function(e,t){return t.dayNames[e.getDay()]},M:function(e){return String(e.getMonth()+1)},MM:function(e){return ke(e.getMonth()+1)},MMM:function(e,t){return t.monthNamesShort[e.getMonth()]},MMMM:function(e,t){return t.monthNames[e.getMonth()]},YY:function(e){return ke(String(e.getFullYear()),4).substr(2)},YYYY:function(e){return ke(e.getFullYear(),4)},h:function(e){return String(e.getHours()%12||12)},hh:function(e){return ke(e.getHours()%12||12)},H:function(e){return String(e.getHours())},HH:function(e){return ke(e.getHours())},m:function(e){return String(e.getMinutes())},mm:function(e){return ke(e.getMinutes())},s:function(e){return String(e.getSeconds())},ss:function(e){return ke(e.getSeconds())},S:function(e){return String(Math.round(e.getMilliseconds()/100))},SS:function(e){return ke(Math.round(e.getMilliseconds()/10),2)},SSS:function(e){return ke(e.getMilliseconds(),3)},a:function(e,t){return e.getHours()<12?t.amPm[0]:t.amPm[1]},A:function(e,t){return e.getHours()<12?t.amPm[0].toUpperCase():t.amPm[1].toUpperCase()},ZZ:function(e){var t=e.getTimezoneOffset();return(t>0?"-":"+")+ke(100*Math.floor(Math.abs(t)/60)+Math.abs(t)%60,4)},Z:function(e){var t=e.getTimezoneOffset();return(t>0?"-":"+")+ke(Math.floor(Math.abs(t)/60),2)+":"+ke(Math.abs(t)%60,2)}},xe=function(e){return+e-1},$e=[null,"\\d\\d?"],je=[null,ue],Oe=["isPm",ue,function(e,t){var i=e.toLowerCase();return i===t.amPm[0]?0:i===t.amPm[1]?1:null}],ze=["timezoneOffset","[^\\s]*?[\\+\\-]\\d\\d:?\\d\\d|[^\\s]*?Z?",function(e){var t=(e+"").match(/([+-]|\d\d)/gi);if(t){var i=60*+t[1]+parseInt(t[2],10);return"+"===t[0]?i:-i}return 0}],Se=(pe("monthNamesShort"),pe("monthNames"),{default:"ddd MMM DD YYYY HH:mm:ss",shortDate:"M/D/YY",mediumDate:"MMM D, YYYY",longDate:"MMMM D, YYYY",fullDate:"dddd, MMMM D, YYYY",isoDate:"YYYY-MM-DD",isoDateTime:"YYYY-MM-DDTHH:mm:ssZ",shortTime:"HH:mm",mediumTime:"HH:mm:ss",longTime:"HH:mm:ss.SSS"}),Ee=function(e,t,i){if(void 0===t&&(t=Se.default),void 0===i&&(i={}),"number"==typeof e&&(e=new Date(e)),"[object Date]"!==Object.prototype.toString.call(e)||isNaN(e.getTime()))throw new Error("Invalid Date pass to format");var s=[];t=(t=Se[t]||t).replace(he,(function(e,t){return s.push(t),"@@@"}));var a=_e(_e({},be),i);return(t=t.replace(de,(function(t){return we[t](e,a)}))).replace(/@@@/g,(function(){return s.shift()}))};var Ce,Ae,Me=Ee;(function(){try{(new Date).toLocaleDateString("i")}catch(e){return"RangeError"===e.name}})(),function(){try{(new Date).toLocaleString("i")}catch(e){return"RangeError"===e.name}}(),function(){try{(new Date).toLocaleTimeString("i")}catch(e){return"RangeError"===e.name}}();function De(e){return e.substr(0,e.indexOf("."))}function Te(e){return e.substr(e.indexOf(".")+1)}!function(e){e.language="language",e.system="system",e.comma_decimal="comma_decimal",e.decimal_comma="decimal_comma",e.space_comma="space_comma",e.none="none"}(Ce||(Ce={})),function(e){e.language="language",e.system="system",e.am_pm="12",e.twenty_four="24"}(Ae||(Ae={}));var Ne=function(e,t,i,s){s=s||{},i=null==i?{}:i;var a=new Event(t,{bubbles:void 0===s.bubbles||s.bubbles,cancelable:Boolean(s.cancelable),composed:void 0===s.composed||s.composed});return a.detail=i,e.dispatchEvent(a),a},Le={alert:"hass:alert",automation:"hass:playlist-play",calendar:"hass:calendar",camera:"hass:video",climate:"hass:thermostat",configurator:"hass:settings",conversation:"hass:text-to-speech",device_tracker:"hass:account",fan:"hass:fan",group:"hass:google-circles-communities",history_graph:"hass:chart-line",homeassistant:"hass:home-assistant",homekit:"hass:home-automation",image_processing:"hass:image-filter-frames",input_boolean:"hass:drawing",input_datetime:"hass:calendar-clock",input_number:"hass:ray-vertex",input_select:"hass:format-list-bulleted",input_text:"hass:textbox",light:"hass:lightbulb",mailbox:"hass:mailbox",notify:"hass:comment-alert",person:"hass:account",plant:"hass:flower",proximity:"hass:apple-safari",remote:"hass:remote",scene:"hass:google-pages",script:"hass:file-document",sensor:"hass:eye",simple_alarm:"hass:bell",sun:"hass:white-balance-sunny",switch:"hass:flash",timer:"hass:timer",updater:"hass:cloud-upload",vacuum:"hass:robot-vacuum",water_heater:"hass:thermometer",weblink:"hass:open-in-new"};function Ie(e,t){if(e in Le)return Le[e];switch(e){case"alarm_control_panel":switch(t){case"armed_home":return"hass:bell-plus";case"armed_night":return"hass:bell-sleep";case"disarmed":return"hass:bell-outline";case"triggered":return"hass:bell-ring";default:return"hass:bell"}case"binary_sensor":return t&&"off"===t?"hass:radiobox-blank":"hass:checkbox-marked-circle";case"cover":return"closed"===t?"hass:window-closed":"hass:window-open";case"lock":return t&&"unlocked"===t?"hass:lock-open":"hass:lock";case"media_player":return t&&"off"!==t&&"idle"!==t?"hass:cast-connected":"hass:cast";case"zwave":switch(t){case"dead":return"hass:emoticon-dead";case"sleeping":return"hass:sleep";case"initializing":return"hass:timer-sand";default:return"hass:z-wave"}default:return console.warn("Unable to find icon for domain "+e+" ("+t+")"),"hass:bookmark"}}var Pe,qe,Re,Ve,Ue,He,Fe,Be={humidity:"hass:water-percent",illuminance:"hass:brightness-5",temperature:"hass:thermometer",pressure:"hass:gauge",power:"hass:flash",signal_strength:"hass:wifi"},Ye={binary_sensor:function(e){var t=e.state&&"off"===e.state;switch(e.attributes.device_class){case"battery":return t?"hass:battery":"hass:battery-outline";case"cold":return t?"hass:thermometer":"hass:snowflake";case"connectivity":return t?"hass:server-network-off":"hass:server-network";case"door":return t?"hass:door-closed":"hass:door-open";case"garage_door":return t?"hass:garage":"hass:garage-open";case"gas":case"power":case"problem":case"safety":case"smoke":return t?"hass:shield-check":"hass:alert";case"heat":return t?"hass:thermometer":"hass:fire";case"light":return t?"hass:brightness-5":"hass:brightness-7";case"lock":return t?"hass:lock":"hass:lock-open";case"moisture":return t?"hass:water-off":"hass:water";case"motion":return t?"hass:walk":"hass:run";case"occupancy":return t?"hass:home-outline":"hass:home";case"opening":return t?"hass:square":"hass:square-outline";case"plug":return t?"hass:power-plug-off":"hass:power-plug";case"presence":return t?"hass:home-outline":"hass:home";case"sound":return t?"hass:music-note-off":"hass:music-note";case"vibration":return t?"hass:crop-portrait":"hass:vibrate";case"window":return t?"hass:window-closed":"hass:window-open";default:return t?"hass:radiobox-blank":"hass:checkbox-marked-circle"}},cover:function(e){var t="closed"!==e.state;switch(e.attributes.device_class){case"garage":return t?"hass:garage-open":"hass:garage";case"door":return t?"hass:door-open":"hass:door-closed";case"shutter":return t?"hass:window-shutter-open":"hass:window-shutter";case"blind":return t?"hass:blinds-open":"hass:blinds";case"window":return t?"hass:window-open":"hass:window-closed";default:return Ie("cover",e.state)}},sensor:function(e){var t=e.attributes.device_class;if(t&&t in Be)return Be[t];if("battery"===t){var i=Number(e.state);if(isNaN(i))return"hass:battery-unknown";var s=10*Math.round(i/10);return s>=100?"hass:battery":s<=0?"hass:battery-alert":"hass:battery-"+s}var a=e.attributes.unit_of_measurement;return"°C"===a||"°F"===a?"hass:thermometer":Ie("sensor")},input_datetime:function(e){return e.attributes.has_date?e.attributes.has_time?Ie("input_datetime"):"hass:calendar":"hass:clock"}},We=function(e){if(!e)return"hass:bookmark";if(e.attributes.icon)return e.attributes.icon;var t=De(e.entity_id);return t in Ye?Ye[t](e):Ie(t,e.state)};!function(e){e.Repeat="repeat",e.Pause="pause",e.Single="single"}(Pe||(Pe={})),function(e){e.Level="LEVEL",e.List="LIST",e.Text="TEXT"}(qe||(qe={})),function(e){e.Equal="is",e.Unequal="not",e.Below="below",e.Above="above"}(Re||(Re={})),function(e){e.Any="or",e.All="and"}(Ve||(Ve={})),function(e){e.Sunrise="sunrise",e.Sunset="sunset"}(Ue||(Ue={})),function(e){e.Daily="DAILY",e.Workday="WORKDAY",e.Weekend="WEEKEND",e.Custom="CUSTOM"}(He||(He={})),function(e){e.ItemCreated="scheduler_item_created",e.ItemUpdated="scheduler_item_updated",e.ItemRemoved="scheduler_item_removed",e.TimerFinished="scheduler_timer_finished",e.TimerUpdated="scheduler_timer_updated"}(Fe||(Fe={}));var Ge;!function(e){e.Overview="OVERVIEW",e.NewSchedule="NEW_SCHEDULE",e.TimePicker="TIME_PICKER",e.TimeScheme="TIME_SCHEME",e.Options="OPTIONS"}(Ge||(Ge={}));const Ze={type:"scheduler-card",discover_existing:!0,standard_configuration:!0,include:[],exclude:[],groups:[],customize:{},title:!0,time_step:10,show_header_toggle:!1,display_options:{primary_info:"default",secondary_info:["relative-time","additional-tasks"],icon:"action"},tags:[],sort_by:["relative-time","state"]};function Ke(e,t){if(e.match(/^([0-9:]+)$/)){const t=e.split(":").map(Number);return 3600*t[0]+60*t[1]+(t[2]||0)}const i=Qe(e);if(i){const e=t.states["sun.sun"],s=Ke(e.attributes.next_rising,t),a=Ke(e.attributes.next_setting,t);let o="sunrise"==i.event?s:a;return o="+"==i.sign?o+Ke(i.offset,t):o-Ke(i.offset,t),o}const s=new Date(e);return 3600*s.getHours()+60*s.getMinutes()+s.getSeconds()}function Je(e){const t=Math.floor(e/3600);e-=3600*t;const i=Math.floor(e/60);e-=60*i;const s=Math.round(e);return String(t%24).padStart(2,"0")+":"+String(i).padStart(2,"0")+":"+String(s).padStart(2,"0")}function Xe(e,t,i={wrapAround:!0}){let s=e>=0?Math.floor(e/3600):Math.ceil(e/3600),a=Math.floor((e-3600*s)/60);a%t!=0&&(a=Math.round(a/t)*t),a>=60?(s++,a-=60):a<0&&(s--,a+=60),i.wrapAround&&(s>=24?s-=24:s<0&&(s+=24));const o=3600*s+60*a;if(i.maxHours){if(o>3600*i.maxHours)return 3600*i.maxHours;if(o<3600*-i.maxHours)return 3600*-i.maxHours}return o}function Qe(e){const t=e.match(/^([a-z]+)([\+|-]{1})([0-9:]+)$/);return!!t&&{event:t[1],sign:t[2],offset:t[3]}}function et(e,t){return e?Object.entries(e).filter(([e])=>t.includes(e)).reduce((e,[t,i])=>Object.assign(e,{[t]:i}),{}):{}}const tt=(e,...t)=>{const i={};let s;for(s in e)t.includes(s)||(i[s]=e[s]);return i};function it(e){return e.every(e=>!Array.isArray(e))?e.slice():e.reduce((e,t)=>e.concat(Array.isArray(t)?it(t):t),[])}function st(e){let t=[];return e.forEach(e=>{t.find(t=>"object"==typeof e?ot(t,e):t===e)||t.push(e)}),t}function at(e){return null!=e}function ot(...e){if(!e.length)return!1;const t=e[0];return e.every(e=>t&&e&&"object"==typeof t&&"object"==typeof e?Object.keys(t).length===Object.keys(e).length&&Object.keys(t).reduce((i,s)=>i&&ot(t[s],e[s]),!0):t===e)}function nt(e,t){const i=e=>"object"==typeof e?void 0!==e.name?String(e.name).trim().toLowerCase():JSON.stringify(e):String(e).trim().toLowerCase();return i(e)<i(t)?-1:1}function rt(e){return e.charAt(0).toUpperCase()+e.slice(1)}function lt(e){return"string"!=typeof e&&(e=String(e)),rt(e.replace(/_/g," "))}function ct(e){if(e)return"string"!=typeof e&&(e=String(e)),e.match(/^[a-z]+:[a-z0-9-]+$/i)?e:"mdi:"+e}function dt(e,t){(e=(e=e.map(e=>Object(Object.assign(Object.assign({},e),{start:Ke(e.start,t)<0?"00:00:00":e.start,stop:Ke(e.stop,t)>86400?"00:00:00":e.stop})))).map(e=>{const i=Ke(e.stop,t)-Ke(e.start,t);return i<0?0==Ke(e.stop,t)?Object.assign(Object.assign({},e),{stop:Je(Ke(e.stop,t)+86400)}):Object.assign(Object.assign({},e),{start:e.stop,stop:e.start}):i<60?Object.assign(Object.assign({},e),{start:e.start,stop:Je(Ke(e.start,t)+60)}):e})).sort((e,i)=>Ke(e.start,t)>Ke(i.start,t)?1:Ke(e.start,t)<Ke(i.start,t)?-1:Ke(e.stop,t)>Ke(i.stop,t)?1:-1);let i="00:00:00",s=e.length;for(let a=0;a<s;a++){const o=e[a];Ke(o.start,t)>Ke(i,t)?(e.splice(a,0,Object.assign(Object.assign({},o),{start:i,stop:o.start,actions:[]})),s++,a++):Ke(o.start,t)<Ke(i,t)&&(e=Object.assign(e,{[a]:Object.assign(Object.assign({},o),{start:i})})),i=o.stop}return Ke(i,t)<86400&&Ke(i,t)>0&&e.push(Object.assign(Object.assign({},e[0]),{start:i,stop:Je(86400),actions:[]})),e}const ut=e=>e.locale||{language:e.language,number_format:Ce.system};function ht(e){return Array.isArray(e)?e:null!=e?[e]:[]}function mt(e){const t=[];let i=[];const s=e=>{e&&t.push(i.length?`in ${i.join("->")}: ${e}`:e)},a=(e,t)=>e.hasOwnProperty(t),o=(e,t)=>Array.isArray(t)?t.some(t=>o(e,t)):"array"==t?Array.isArray(e):"object"==t?typeof e===t&&null!==e:typeof e===t,n=(e,t,i)=>{if(a(e,t)){o(e[t],i)||s(`'${t}' must be of type ${i}`)}else s(`missing required property '${t}'`)},r=(e,t,i)=>{if(!a(e,t))return;o(e[t],i)||s(`'${t}' must be of type ${i}`)},l=(e,t,i)=>{let n=!0;return a(e,t)&&o(e[t],"array")?e[t].some(e=>!o(e,i))&&(s(`'${t}' must be an array with items of type ${i}`),n=!1):n=!1,n};if(r(e,"discover_existing","boolean"),r(e,"standard_configuration","boolean"),r(e,"title",["boolean","string"]),r(e,"time_step","number"),r(e,"show_header_toggle","boolean"),r(e,"show_add_button","boolean"),r(e,"sort_by",["string","array"]),r(e,"include","array"),l(e,"include","string"),r(e,"exclude","array"),l(e,"exclude","string"),r(e,"display_options","object"),a(e,"display_options")&&(i.push("display_options"),r(e.display_options,"primary_info",["string","array"]),r(e.display_options,"secondary_info",["string","array"]),r(e.display_options,"icon","string"),l(e.display_options,"primary_info","string"),l(e.display_options,"secondary_info","string")),i=[],r(e,"groups","array"),a(e,"groups")&&o(e.groups,"array")&&(i.push("groups"),e.groups.forEach((e,t)=>{i=["groups",t],n(e,"name","string"),r(e,"icon","string"),n(e,"include","array"),r(e,"exclude","array"),l(e,"include","string"),l(e,"exclude","string")})),i=[],r(e,"customize","object"),a(e,"customize")&&o(e.customize,"object")&&Object.keys(e.customize).forEach(t=>{if(i=["customize"],o(t,"string")||s(t+" is not allowed"),n(e.customize,t,"object"),a(e.customize,t)&&o(e.customize[t],"object")){i.push(t);const c=e.customize[t];r(c,"name","string"),r(c,"icon","string"),r(c,"actions","array"),l(c,"actions","object")&&c.actions.forEach((e,c)=>{i=["customize",t,c],(e=>{const t=i;r(e,"name","string"),r(e,"icon","string"),n(e,"service","string"),r(e,"service_data","object"),l(e,"service_data","string"),a(e,"service_data")&&o(e.service_data,"object")&&Object.keys(e.service_data).some(e=>!o(e,"string"))&&s("service_data items must have string as index type"),r(e,"variables","object"),a(e,"variables")&&o(e.variables,"object")&&Object.keys(e.variables).forEach(c=>{if(i=t.concat(t,["variables"]),o(c,"string")||s(c+" is not allowed"),n(e.variables,c,"object"),a(e.variables,c)&&o(e.variables[c],"object")){i.push(c);const s=e.variables[c];l(s,"options","object")?s.options.forEach((e,s)=>{i=t.concat(t,["variables",c,"options",s]),n(e,"value","string"),r(e,"name","string"),r(e,"icon","string")}):void 0!==s.min||void 0!==s.max?(r(s,"min","number"),r(s,"max","number"),r(s,"step","number"),r(s,"scale_factor","number"),r(s,"optional","boolean"),r(s,"unit","string")):r(s,"multiline","boolean")}})})(e)}),r(c,"states",["object","array"]),a(c,"states")&&o(c.states,"array")?l(c,"states","string"):a(c,"states")&&o(c.states,"object")&&(n(c.states,"min","number"),n(c.states,"max","number"),r(c.states,"step","number"),r(c.states,"scale_factor","number"),r(c.states,"unit","string"))}}),r(e,"tags",["string","array"]),r(e,"exclude_tags",["string","array"]),t.length)throw new Error(`Invalid configuration provided (${t.length} error${t.length>1?"s":""}): ${t.join(", ")}.`)}
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */const pt=2;
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
class _t extends class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,i){this._$Ct=e,this._$AM=t,this._$Ci=i}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}{constructor(e){if(super(e),this.it=q,e.type!==pt)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===q||null==e)return this._t=void 0,this.it=e;if(e===P)return e;if("string"!=typeof e)throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this._t;this.it=e;const t=[e];return t.raw=t,this._t={_$litType$:this.constructor.resultType,strings:t,values:[]}}}_t.directiveName="unsafeHTML",_t.resultType=1;const vt=(e=>(...t)=>({_$litDirective$:e,values:t}))(_t);var gt={generic:{parameter_to_value:"{parameter} na {value}",action_with_parameter:"{action} s {parameter}"},climate:{set_temperature:"nastavit teplotu[ na {temperature}]",set_temperature_hvac_mode_heat:"topení[ na {temperature}]",set_temperature_hvac_mode_cool:"chlazení[ na {temperature}]",set_temperature_hvac_mode_heat_cool:"regulate[ to {target_temp_low} - {target_temp_high}]",set_hvac_mode:"nastavit režim[ na {hvac_mode}]",set_preset_mode:"nastavit předvolbu[ {preset_mode}]",set_fan_mode:"set fan mode[ to {fan_mode}]"},cover:{close_cover:"zavřít",open_cover:"otevřít",set_cover_position:"nastavit polohu[ na {position}]",set_cover_tilt_position:"set tilt position[ to {tilt_position}]"},fan:{set_speed:"nastavit rychlost[ na {speed}]",set_direction:"nastavit směr[ na {direction}]",oscillate:"nastavit oscilaci[ na {oscillate}]"},humidifier:{set_humidity:"nastavit vlhkost[ na {humidity}]",set_mode:"nastavit režim[ na {mode}]"},input_number:{set_value:"nastavit hodnotu[ na {value}]"},input_select:{select_option:"vybrat možnost[ {option}]"},select:{select_option:"vybrat možnost[ {option}]"},light:{turn_on:"zapnout[ na {brightness} jas]"},media_player:{select_source:"vybrat zdroj[ {source}]"},notify:{notify:"send notification"},script:{script:"spustit"},vacuum:{start_pause:"start / pauza"},water_heater:{set_operation_mode:"nastavit režim[ na {operation_mode}]",set_away_mode:"vypnout režim"}},ft={alarm_control_panel:"poplašný ovládací panel",binary_sensor:"binary sensors",climate:"klima",cover:"rolety",fan:"ventilátory",group:"skupiny",humidifier:"zvlhčovače",input_boolean:"input boolean",input_number:"input number",input_select:"input select",light:"světla",lock:"zámky",media_player:"média přehrávače",notify:"notification",switch:"spínače",vacuum:"vysavače",water_heater:"ohřívače vody"},yt={components:{date:{day_types_short:{daily:"denně",workdays:"pracovní dny",weekend:"víkendy"},day_types_long:{daily:"každý den",workdays:"v pracovní dny",weekend:"o víkendu"},days:"dnů",tomorrow:"zítra",repeated_days:"každý {days}",repeated_days_except:"každý den kromě {excludedDays}",days_range:"od {startDay} do {endDay}",next_week_day:"příští {weekday}"},time:{absolute:"od {time}",interval:"od {startTime} do {endTime}",at_midnight:"od půlnoc",at_noon:"od poledne",at_sun_event:"na {sunEvent}"}},dialog:{enable_schedule:{title:"Dokončete úpravy",description:"Plán, který byl změněn, je aktuálně zakázán, měl by být povolen?"},confirm_delete:{title:"Odebrat entitu?",description:"Opravdu chcete tuto entitu odebrat?"}},panel:{common:{title:"Plánovač"},overview:{no_entries:"Nejsou žádné položky k zobrazení",backend_error:"Could not connect with the scheduler component. It needs to be installed as integration before this card can be used.",excluded_items:"{number} vyloučeno {if number is 1} položka {else} položek",hide_excluded:"skrýt vyloučené položky",additional_tasks:"{number} a více {if number is 1} úkol {else} úkolů"},entity_picker:{no_groups_defined:"Nejsou definovány žádné skupiny",no_group_selected:"Nejprve vyberte skupinu",no_entities_for_group:"V této skupině nejsou žádné entity",no_entity_selected:"Nejprve vyberte entitu",no_actions_for_entity:"Pro tuto entitu neexistují žádné akce",make_scheme:"vytvořit schéma",multiple:"Multiple"},time_picker:{no_timeslot_selected:"Nejprve vyberte časový úsek",time_scheme:"Schéma",time_input_mode:"Time control mode"},conditions:{equal_to:"je",unequal_to:"není",all:"Vše",any:"žádný",no_conditions_defined:"Nejsou definovány žádné podmínky",track_conditions:"Re-evaluate when conditions change"},options:{repeat_type:"chování po spuštění",period:"období"}}},bt={services:gt,domains:ft,ui:yt},kt=Object.freeze({__proto__:null,services:gt,domains:ft,ui:yt,default:bt}),wt={generic:{parameter_to_value:"{parameter} auf {value}",action_with_parameter:"{action} mit {parameter}"},climate:{set_temperature:"Temperatur einstellen[ auf {temperature}]",set_temperature_hvac_mode_heat:"heizen[ auf {temperature}]",set_temperature_hvac_mode_cool:"kühlen[ auf {temperature}]",set_temperature_hvac_mode_heat_cool:"regulieren[ auf {target_temp_low} - {target_temp_high}]",set_hvac_mode:"Modus setzen[ auf {hvac_mode}]",set_preset_mode:"Voreinstellung setzen[ auf {preset_mode}]",set_fan_mode:"set fan mode[ to {fan_mode}]"},cover:{close_cover:"schließen",open_cover:"öffnen",set_cover_position:"Position setzen[ auf {position}]",set_cover_tilt_position:"Tilt Position setzen[ auf {tilt_position}]"},fan:{set_speed:"Geschwindigkeit speed[ auf {speed}]",set_direction:"Richtung setzen[ auf {direction}]",oscillate:"Oszillation setzen[ auf {oscillate}]"},humidifier:{set_humidity:"Luftfeuchtigkeit setzen[ auf {humidity}]",set_mode:"Modus setzen[ auf {mode}]"},input_number:{set_value:"Wert setzen[ auf {value}]"},input_select:{select_option:"Option[ {option}] auswählen"},select:{select_option:"Option[ {option}] auswählen"},light:{turn_on:"anschalten[ mit {brightness} Helligkeit]"},media_player:{select_source:"Quelle[ {source}] auswählen"},notify:{notify:"Nachricht senden"},script:{script:"ausführen"},vacuum:{start_pause:"Start / Pause"},water_heater:{set_operation_mode:"Modus setzen[ auf {operation_mode}]",set_away_mode:"Abwesenheitsmodus setzen"}},xt={alarm_control_panel:"Alarmzentrale",binary_sensor:"binary sensors",climate:"Heizung",cover:"Beschattung",fan:"Lüfter",group:"Gruppen",humidifier:"Befeuchter",input_boolean:"input boolean",input_number:"input number",input_select:"input select",light:"Licht",lock:"Schlösser",media_player:"Medienplayer",notify:"notification",switch:"Schalter",vacuum:"Staubsauger",water_heater:"Boiler"},$t={components:{date:{day_types_short:{daily:"täglich",workdays:"Werktags",weekend:"Wochenende"},day_types_long:{daily:"Jeden Tag",workdays:"An Werktagen",weekend:"Am Wochenende"},days:"Tage",tomorrow:"morgen",repeated_days:"jeden {days}",repeated_days_except:"täglich außer {excludedDays}",days_range:"von {startDay} bis {endDay}",next_week_day:"nächsten {weekday}"},time:{absolute:"um {time}",interval:"von {startTime} bis {endTime}",at_midnight:"um Mitternacht",at_noon:"um Mittag",at_sun_event:"beim {sunEvent}"}},dialog:{enable_schedule:{title:"Modifikationen beenden",description:"Der geänderte Zeitplan ist derzeit deaktiviert, sollte er aktiviert werden?"},confirm_delete:{title:"Entität entfernen?",description:"Bist du dir sicher, dass du diese Entität löschen möchtest?"}},panel:{common:{title:"Zeitplaner"},overview:{no_entries:"Es gibt keine Einträge, die angezeigt werden können",backend_error:"Es konnte keine Verbindung mit der Schedulerkomponente hergestellt werden. Es muss als Integration installiert werden, bevor diese Karte verwendet werden kann.",excluded_items:"{number}{if number is 1} ausgeschlossener Eintrag {else} ausgeschlossene Einträge",hide_excluded:"Verstecke ausgeschlossene Einträge",additional_tasks:"{number} weitere {if number is 1} Aufgabe {else} Aufgaben"},entity_picker:{no_groups_defined:"Es gibt keine Gruppe",no_group_selected:"Wähle zuerst eine Gruppe aus",no_entities_for_group:"Es gibt keine Entities in dieser Gruppe",no_entity_selected:"Wähle zuerst eine Entity aus",no_actions_for_entity:"Es gibt keine Aktionen für diese Entity",make_scheme:"Erstelle Zeitplan",multiple:"mehrere"},time_picker:{no_timeslot_selected:"Wähle zuerst ein Zeitfenster aus",time_scheme:"Zeitplan",time_input_mode:"Time control mode"},conditions:{equal_to:"ist",unequal_to:"ist nicht",all:"alle",any:"eine",no_conditions_defined:"Es sind keine Bedingungen definiert",track_conditions:"Erneut prüfen wenn sich die Zustände ändern"},options:{repeat_type:"Verhalten nach Abschluß",period:"Zeitraum"}}},jt={services:wt,domains:xt,ui:$t},Ot=Object.freeze({__proto__:null,services:wt,domains:xt,ui:$t,default:jt}),zt={generic:{parameter_to_value:"{parameter} to {value}",action_with_parameter:"{action} with {parameter}"},climate:{set_temperature:"set temperature[ to {temperature}]",set_temperature_hvac_mode_heat:"heat[ to {temperature}]",set_temperature_hvac_mode_cool:"cool[ to {temperature}]",set_temperature_hvac_mode_heat_cool:"regulate[ to {target_temp_low} - {target_temp_high}]",set_hvac_mode:"set mode[ to {hvac_mode}]",set_preset_mode:"set preset[ to {preset_mode}]",set_fan_mode:"set fan mode[ to {fan_mode}]"},cover:{close_cover:"close",open_cover:"open",set_cover_position:"set position[ to {position}]",set_cover_tilt_position:"set tilt position[ to {tilt_position}]"},fan:{set_speed:"set speed[ to {speed}]",set_direction:"set direction[ to {direction}]",oscillate:"set oscillation[ to {oscillate}]"},humidifier:{set_humidity:"set humidity[ to {humidity}]",set_mode:"set mode[ to {mode}]"},input_number:{set_value:"set value[ to {value}]"},input_select:{select_option:"select option[ {option}]"},select:{select_option:"select option[ {option}]"},light:{turn_on:"turn on[ with {brightness} brightness]"},media_player:{select_source:"select source[ {source}]"},notify:{notify:"send notification"},script:{script:"execute"},vacuum:{start_pause:"start / pause"},water_heater:{set_operation_mode:"set mode[ to {operation_mode}]",set_away_mode:"set away mode"}},St={alarm_control_panel:"alarm control panel",binary_sensor:"binary sensors",climate:"climate",cover:"covers",fan:"fans",group:"entity groups",humidifier:"humidifiers",input_boolean:"input boolean",input_number:"input number",input_select:"input select",light:"lights",lock:"locks",media_player:"media players",notify:"notification",switch:"switches",vacuum:"vacuums",water_heater:"water heaters"},Et={components:{date:{day_types_short:{daily:"daily",workdays:"workdays",weekend:"weekend"},day_types_long:{daily:"every day",workdays:"on workdays",weekend:"in the weekend"},days:"days",tomorrow:"tomorrow",repeated_days:"every {days}",repeated_days_except:"every day except {excludedDays}",days_range:"from {startDay} to {endDay}",next_week_day:"next {weekday}"},time:{absolute:"at {time}",interval:"from {startTime} to {endTime}",at_midnight:"at midnight",at_noon:"at noon",at_sun_event:"at {sunEvent}"}},dialog:{enable_schedule:{title:"Complete modifications",description:"The schedule you have changed is currently disabled, do you want to enable it?"},confirm_delete:{title:"Remove entity?",description:"Are you sure you want to remove this entity?"}},panel:{common:{title:"Scheduler"},overview:{no_entries:"There are no items to show",backend_error:"Could not connect with the scheduler component. It needs to be installed as integration before this card can be used.",excluded_items:"{number} excluded {if number is 1} item {else} items",hide_excluded:"hide excluded items",additional_tasks:"{number} more {if number is 1} task {else} tasks"},entity_picker:{no_groups_defined:"There are no groups defined",no_group_selected:"Select a group first",no_entities_for_group:"There are no entities in this group",no_entity_selected:"Select an entity first",no_actions_for_entity:"There are no actions for this entity",make_scheme:"make scheme",multiple:"Multiple"},time_picker:{no_timeslot_selected:"Select a timeslot first",time_scheme:"Scheme",time_input_mode:"Time control mode"},conditions:{equal_to:"is",unequal_to:"is not",all:"all",any:"any",no_conditions_defined:"There are no conditions defined",track_conditions:"Re-evaluate when conditions change"},options:{repeat_type:"behaviour after completion",period:"period"},card_editor:{tabs:{entities:"Entities",other:"Other"},fields:{title:{heading:"Title of the card",options:{standard:"standard",hidden:"hidden",custom:"custom"},custom_title:"Custom title"},discover_existing:{heading:"Show all schedules",description:"This sets the 'discover existing' parameter. Previously created schedules will be automatically added to the card. "},time_step:{heading:"Time step",description:"Resolution (in minutes) for creating schedules"},sort_by:{heading:"Sorting options",description:"Order in which the schedules appear in the card",options:{relative_time:"Time remaining until next action",title:"Displayed title of the schedule",state:"Show active schedules on top"}},display_format_primary:{heading:"Displayed primary info",description:"Configure which label is used for schedules in the overview",options:{default:"Schedule name",entity_action:"Summary of task"}},display_format_secondary:{heading:"Displayed secondary info",description:"Configure what additional properties are visible in the overview",options:{relative_time:"Time remaining until next action",time:"Configured time for next action",days:"Repeated days of the week",additional_tasks:"Number of additional tasks"}},show_header_toggle:{heading:"Show header toggle",description:"Show toggle switch at the top of the card for enabling/enabling all entities"},tags:{heading:"Tags",description:"Use tags to divide schedules between multiple cards"},entities:{heading:"Included entities",description:"Select the entities that you want to control using the scheduler. You can click on a group to open it. Note that some entities (such as sensors) can only be used for conditions, not for actions.",included_number:"{number}/{total} selected"}}}}},Ct={services:zt,domains:St,ui:Et},At=Object.freeze({__proto__:null,services:zt,domains:St,ui:Et,default:Ct}),Mt={generic:{parameter_to_value:"{parameter} a {value}",action_with_parameter:"{action} con {parameter}"},climate:{set_temperature:"establecer temperatura[ a {temperature}]",set_temperature_hvac_mode_heat:"calefacción[ a {temperature}]",set_temperature_hvac_mode_cool:"frío[ a {temperature}]",set_temperature_hvac_mode_heat_cool:"regular[ entre {target_temp_low} - {target_temp_high}]",set_hvac_mode:"establecer modo[ a {hvac_mode}]",set_preset_mode:"establecer preajuste[ {preset_mode}]",set_fan_mode:"set fan mode[ to {fan_mode}]"},cover:{close_cover:"cerrado",open_cover:"abierto",set_cover_position:"establecer posición[ a {position}]",set_cover_tilt_position:"establecer inclinación[ a {tilt_position}]"},fan:{set_speed:"establecer velocidad [ a {speed}]",set_direction:"establecer dirección[ a {direction}]",oscillate:"establecer oscilación[ a {oscillate}]"},humidifier:{set_humidity:"establecer humedad[ a {humidity}]",set_mode:"establecer modo[ a {mode}]"},input_number:{set_value:"establecer valor[ a {value}]"},input_select:{select_option:"seleccionar opción[ {option}]"},select:{select_option:"seleccionar opción[ {option}]"},light:{turn_on:"encender[ con brillo en {brightness}]"},media_player:{select_source:"seleccionar fuente[ {source}]"},notify:{notify:"enviar notificación"},script:{script:"ejecutar"},vacuum:{start_pause:"iniciar / pausar"},water_heater:{set_operation_mode:"establecer modo[ a {operation_mode}]",set_away_mode:"establecer modo fuera de casa"}},Dt={alarm_control_panel:"panel de control de alarma",binary_sensor:"binary sensors",climate:"climatización",cover:"cortinas",fan:"ventiladores",group:"grupos",humidifier:"humidificadores",input_boolean:"input boolean",input_number:"input number",input_select:"input select",light:"luces",lock:"cerraduras",media_player:"reproductores",notify:"notification",switch:"interruptores",vacuum:"aspiradores",water_heater:"calentador de agua"},Tt={components:{date:{day_types_short:{daily:"a diario",workdays:"días hábiles",weekend:"fin de semana"},day_types_long:{daily:"todos los días",workdays:"en días hábiles",weekend:"en el fin de semana"},days:"días",tomorrow:"mañana",repeated_days:"cada {days}",repeated_days_except:"cada dia excepto {excludedDays}",days_range:"de {startDay} a {endDay}",next_week_day:"próximo {weekday}"},time:{absolute:"a las {time}",interval:"desde las {startTime} a las {endTime}",at_midnight:"a la medianoche",at_noon:"a la mediodía",at_sun_event:"a la {sunEvent}"}},dialog:{enable_schedule:{title:"Completa las modificaciones",description:"El horario que se ha cambiado está actualmente deshabilitado, ¿debería habilitarse?"},confirm_delete:{title:"¿Eliminar entidad?",description:"¿Estás seguro de que deseas eliminar esta entidad?"}},panel:{common:{title:"Programador"},overview:{no_entries:"No hay ningún elemento que mostrar",backend_error:"Fallo de conexión con Scheduler component. Debe ser installado como integración antes de poder usar este panel.",excluded_items:"{number} {if number is 1} elemento excluido {else} elementos excluidos",hide_excluded:"ocultar elementos excluidos",additional_tasks:"{number} {if number is 1} tarea adicional {else} tareas adicionales"},entity_picker:{no_groups_defined:"No hay ningún grupo definido",no_group_selected:"selecciona un grupo primero",no_entities_for_group:"no hay ninguna entidad en este grupo",no_entity_selected:"selecciona una entidad primero",no_actions_for_entity:"no hay acciones para esta entidad",make_scheme:"crear planificación",multiple:"Múltiple"},time_picker:{no_timeslot_selected:"selecciona un bloque de tiempo primero",time_scheme:"Planificación",time_input_mode:"Time control mode"},conditions:{equal_to:"igual a",unequal_to:"desigual a",all:"todos",any:"cualquiera",no_conditions_defined:"no hay ninguna condición definida",track_conditions:"Re-evaluate when conditions change"},options:{repeat_type:"acción después de la finalización",period:"período"}}},Nt={services:Mt,domains:Dt,ui:Tt},Lt=Object.freeze({__proto__:null,services:Mt,domains:Dt,ui:Tt,default:Nt}),It={generic:{parameter_to_value:"{parameter} {value} jaoks",action_with_parameter:"{action} väärtusega {parameter}"},climate:{set_temperature:"vali temperatuur [{temperature}]",set_temperature_hvac_mode_heat:"küte[ @ {temperature}]",set_temperature_hvac_mode_cool:"jahutus [ @ {temperature}]",set_temperature_hvac_mode_heat_cool:"regulate[ to {target_temp_low} - {target_temp_high}]",set_hvac_mode:"vali režiim [{hvac_mode}]",set_preset_mode:"eelseade[ {preset_mode}]",set_fan_mode:"set fan mode[ to {fan_mode}]"},cover:{close_cover:"sulge",open_cover:"ava",set_cover_position:"sea asendisse[{position}]",set_cover_tilt_position:"sea ribide kalle [ asendisse {tilt_position}]"},fan:{set_speed:"vali kiirus[ @ {speed}]",set_direction:"vali suund[ @ {direction}]",oscillate:"vali hajutus[ @ {oscillate}]"},humidifier:{set_humidity:"sea niiskus[ {humidity}]",set_mode:"vali režiim [{mode}]"},input_number:{set_value:"vali väärtus[ {value}]"},input_select:{select_option:"valik[ {option}]"},select:{select_option:"valik[ {option}]"},light:{turn_on:"lülita sisse[ heledusega {brightness}]"},media_player:{select_source:"vali sisend[ {source}]"},notify:{notify:"send notification"},script:{script:"käivita"},vacuum:{start_pause:"alusta/ootele"},water_heater:{set_operation_mode:"vali režiim [{operation_mode}]",set_away_mode:"kodust ära"}},Pt={alarm_control_panel:"valvepaneel",binary_sensor:"binary sensors",climate:"kliimaseade",cover:"aknakatted",fan:"ventilaatorid",group:"grupid",humidifier:"niisutajad",input_boolean:"tõeväärtus",input_number:"numbriline valik",input_select:"valikmenüü",light:"valgustid",lock:"lukud",media_player:"meediamängijad",notify:"notification",switch:"lülitid",vacuum:"tolmuimejad",water_heater:"veeboilerid"},qt={components:{date:{day_types_short:{daily:"iga päev",workdays:"tööpäevadel",weekend:"nädalavahetusel"},day_types_long:{daily:"iga päev",workdays:"tööpäevadel",weekend:"nädalavahetusel"},days:"päeva",tomorrow:"homme",repeated_days:"iga {days} järel",repeated_days_except:"iga päev aga mitte {excludedDays}",days_range:"{startDay} kuni {endDay}",next_week_day:"järgmisel {weekday}"},time:{absolute:"{time}",interval:"{startTime} kuni {endTime}",at_midnight:"keskööl",at_noon:"keskpäeval",at_sun_event:"{sunEvent}"}},dialog:{enable_schedule:{title:"Viige muudatused lõpule",description:"Muudetud ajakava on praegu keelatud, kas see peaks olema lubatud?"},confirm_delete:{title:"Kas eemaldan olemi?",description:"Oled kindel, et soovid selle olemi eemaldada?"}},panel:{common:{title:"Ajastaja"},overview:{no_entries:"Ajastused puuduvad",backend_error:"Ajastaja sidumine puudub. Sidumine tuleb luua enne selle kaardi kasutamist.",excluded_items:"välja on jäetud {number}  {if number is 1} ajastus {else} ajastust",hide_excluded:"peida välja jäetud ajastused",additional_tasks:"veel {number} {if number is 1} ajastus {else} ajastust"},entity_picker:{no_groups_defined:"Gruppe pole valitud",no_group_selected:"Vali alustuseks grupid",no_entities_for_group:"Selles grupis puuduvad olemid",no_entity_selected:"Vali alustuseks olem",no_actions_for_entity:"Selle olemi jaoks pole tegevusi",make_scheme:"loo skeem",multiple:"Mitu"},time_picker:{no_timeslot_selected:"Alustuseks vali ajavahemik",time_scheme:"Kkeem",time_input_mode:"Time control mode"},conditions:{equal_to:"võrdub",unequal_to:"ei võrdu",all:"kõik",any:"iga",no_conditions_defined:"Tingimusi pole määratud",track_conditions:"Re-evaluate when conditions change"},options:{repeat_type:"toiming peale käivitumist",period:"periood"}}},Rt={services:It,domains:Pt,ui:qt},Vt=Object.freeze({__proto__:null,services:It,domains:Pt,ui:qt,default:Rt}),Ut={generic:{parameter_to_value:"{parameter} {value}",action_with_parameter:"{action} {parameter}"},climate:{set_temperature:"aseta lämpötilaksi[ {temperature}]",set_temperature_hvac_mode_heat:"lämmitä[ {temperature} asteeseen]",set_temperature_hvac_mode_cool:"jäähdytä[ {temperature} asteeseen]",set_temperature_hvac_mode_heat_cool:"pidä lämpötila välillä[ {target_temp_low} - {target_temp_high}]",set_hvac_mode:"aseta tilaksi[ {hvac_mode}]",set_preset_mode:"aseta esivalinta[ {preset_mode}]",set_fan_mode:"aseta tuuletus[ {fan_mode}]"},cover:{close_cover:"sulje",open_cover:"avaa",set_cover_position:"aseta sijainniksi[ {position}]",set_cover_tilt_position:"aseta kallistus[ {tilt_position}]"},fan:{set_speed:"aseta nopeus[ {speed}]",set_direction:"asenta suunta[ {direction}]",oscillate:"aseta pyörimisnopeus[ {oscillate}]"},humidifier:{set_humidity:"aseta kosteus[ {humidity}]",set_mode:"aseta tilaksi {mode}"},input_number:{set_value:"aseta arvo {value}"},input_select:{select_option:"valitse[ {option}]"},select:{select_option:"valitse[ {option}]"},light:{turn_on:"kytke päälle[ {brightness} kirkkaudella]"},media_player:{select_source:"valitse lähteeksi[ {source}]"},notify:{notify:"lähetä ilmoitus"},script:{script:"suorita"},vacuum:{start_pause:"aloita / keskeytä"},water_heater:{set_operation_mode:"aseta tilaksi[ {operation_mode}]",set_away_mode:"aseta poissa-tila"}},Ht={alarm_control_panel:"hälytyspaneeli",binary_sensor:"binary sensor",climate:"ilmastointi",cover:"kaihdin/tallin ovi",fan:"tuuletin",group:"ryhmä",humidifier:"ilmankosteuttimet",input_boolean:"input boolean",input_number:"input number",input_select:"input select",light:"valaisin",lock:"lukko",media_player:"mediatoistin",notify:"ilmoitus",switch:"kytkin",vacuum:"imuri",water_heater:"vedenlämmitin"},Ft={components:{date:{day_types_short:{daily:"päivittäin",workdays:"työpäivisin",weekend:"viikonloppuisin"},day_types_long:{daily:"päivittäin",workdays:"työpäivisin",weekend:"viikonloppuisin"},days:"päivää",tomorrow:"huomenna",repeated_days:"joka {days}",repeated_days_except:"joka päivä paitsi {excludedDays}",days_range:"{startDay} {endDay}",next_week_day:"seuraava {weekday}"},time:{absolute:"{time}",interval:"{startTime} - {endTime}",at_midnight:"keskiyöllä",at_noon:"keskipäivällä",at_sun_event:"{sunEvent}"}},dialog:{enable_schedule:{title:"Suorita muutokset loppuun",description:"Muutettu aikataulu on tällä hetkellä poissa käytöstä, pitäisikö se ottaa käyttöön?"},confirm_delete:{title:"Poistetaanko kohde?",description:"Haluatko varmasti poistaa tämän kohteen?"}},panel:{common:{title:"Ajastin"},overview:{no_entries:"Ei näytettäviä kohteita",backend_error:"Ei voitu yhdistää scheduler komponenttiin. Kortin käyttäminen vaatii scheduler integraation asentamisen.",excluded_items:"{number} {if number is 1} poissuljettu kohde {else} poissuljettua kohdetta",hide_excluded:"piilota poissuljetut kohteet",additional_tasks:"{number} {if number is 1} tehtävä {else} tehtävää"},entity_picker:{no_groups_defined:"Ryhmiä ei ole luotu",no_group_selected:"Valitse ryhmä ensin",no_entities_for_group:"Ryhmässä ei ole kohteita",no_entity_selected:"Valitse kohde ensin",no_actions_for_entity:"Kohteelle ei ole toimintoja",make_scheme:"luo aikataulu",multiple:"Monta kohdetta"},time_picker:{no_timeslot_selected:"Valitse aikaikkuna ensin",time_scheme:"Aikataulu",time_input_mode:"Ajastustapa"},conditions:{equal_to:"yhtä kuin",unequal_to:"ei yhtä kuin",all:"kaikki",any:"mikä tahansa",no_conditions_defined:"Ehtoja ei ole määritetty",track_conditions:"Uudelleentarkista kun ehdot muuttuvat"},options:{repeat_type:"toiminta tapahtuman jälkeen",period:"ajanjakso"},card_editor:{tabs:{entities:"Kohteet",other:"Muu"},fields:{title:{heading:"Kortin otsikko",options:{standard:"normaali",hidden:"piilotettu",custom:"muokattu"},custom_title:"Muokattu otsikko"},discover_existing:{heading:"Näytä kaikki ajoitukset",description:"Tämä kytkee käyttöön 'näytä olemassa olevat -attribuutin'. Aiemmin luodut ajastukset lisätään automaattisesti korttiin. "},time_step:{heading:"Ajastusvälit",description:"Ajastusväli minuutteina ajastusten luontiin"},sort_by:{heading:"Lajitteluasetukset",description:"Järjestys miten ajastukset näkyvät kortissa",options:{relative_time:"Aikaa jäljellä seuraavaan toimintoon",title:"Ajastuksen otsikko",state:"Aktiiviset ajastukset ylhäällä"}},display_format_primary:{heading:"Ensisijainen tieto",description:"Valitse mitä näytetään yhteenvedossa",options:{default:"Ajastuksen nimi",entity_action:"Ajastuksen yhteenveto"}},display_format_secondary:{heading:"Toissijainen tieto",description:"Valitse mitkä lisätiedot näkyvät yhteenvedossa",options:{relative_time:"Aikaa jäljellä seuraavaan toimintoon",time:"Seuraavalle toiminnolle määritetty aika",days:"Toistuvat viikonpäivät",additional_tasks:"Lisätoimintojen määrä"}},show_header_toggle:{heading:"Näytä otsikkokytkin",description:"Näytä kytkin kortin yläreunassa usean ajastuksen päälle/pois kytkemiseen"},tags:{heading:"Tunniste",description:"Käytä tunnisteita ajastusten jakamiseen korttien välillä"},entities:{heading:"Ajastettavat kohteet",description:"Valitse kohteet, joille haluat luoda ajastuksia. Voit klikata ryhmään laajentaaksesi sen. Huom: joitain kohteita voi käyttää vain ehtoina (esim. sensorit), ei toimintoihin",included_number:"{number} / {total} valittu"}}}}},Bt={services:Ut,domains:Ht,ui:Ft},Yt=Object.freeze({__proto__:null,services:Ut,domains:Ht,ui:Ft,default:Bt}),Wt={generic:{parameter_to_value:"{parameter} vers {value}",action_with_parameter:"{action} avec {parameter}"},climate:{set_temperature:"ajuster la température[ à {temperature}]",set_temperature_hvac_mode_heat:"chauffe[ à {temperature}]",set_temperature_hvac_mode_cool:"refroidit[ à {temperature}]",set_temperature_hvac_mode_heat_cool:"régler[ à {target_temp_low} - {target_temp_high}]",set_hvac_mode:"ajuster le mode[ à {hvac_mode}]",set_preset_mode:"choisir le pré-réglage[ {preset_mode}]",set_fan_mode:"ajuster le mode de ventilation[ à {fan_mode}]"},cover:{close_cover:"fermer",open_cover:"ouvrir",set_cover_position:"ajuster la position[ à {position}]",set_cover_tilt_position:"régler les volets[ à {tilt_position}]"},fan:{set_speed:"ajuster la vitesse[ à {speed}]",set_direction:"ajuster l'orientation[ vers {direction}]",oscillate:"ajuster l'oscillation[ à {oscillate}]"},humidifier:{set_humidity:"ajuster l'humidité[ à {humidity}]",set_mode:"ajuster le mode[ à {mode}]"},input_number:{set_value:"ajuster la valeur[ à {value}]"},input_select:{select_option:"choisir l'option[ {option}]"},select:{select_option:"choisir l'option[ {option}]"},light:{turn_on:"allumer[ avec une luminosité de {brightness}]"},media_player:{select_source:"choisir la source[ {source}]"},notify:{notify:"envoyer une notification"},script:{script:"exécuter"},vacuum:{start_pause:"démarrer / pause"},water_heater:{set_operation_mode:"ajuster le mode[ à {operation_mode}]",set_away_mode:"choisir le mode absent"}},Gt={alarm_control_panel:"panneau de contrôle de l'alarme",binary_sensor:"capteurs binaires",climate:"thermostat",cover:"volet",fan:"ventilateur",group:"groupe",humidifier:"humidificateur",input_boolean:"entrée booléenne",input_number:"entrée numérique",input_select:"entrée de sélection",light:"lumière",lock:"serrure",media_player:"lecteur multimédia",notify:"notification",switch:"interrupteur",vacuum:"aspirateur",water_heater:"chauffe eau"},Zt={components:{date:{day_types_short:{daily:"quotidien",workdays:"jours de travail",weekend:"weekend"},day_types_long:{daily:"chaque jour",workdays:"en semaine",weekend:"le weekend"},days:"jours",tomorrow:"demain",repeated_days:"chaque {days}",repeated_days_except:"chaque jour sauf {excludedDays}",days_range:"de {startDay} à {endDay}",next_week_day:"{weekday} prochain"},time:{absolute:"à {time}",interval:"de {startTime} à {endTime}",at_midnight:"à minuit",at_noon:"à midi",at_sun_event:"au {sunEvent}"}},dialog:{enable_schedule:{title:"Compléter les modifs",description:"Le planning qui a été modifié est actuellement désactivé, doit-il être activé ?"},confirm_delete:{title:"Supprimer l'entité ?",description:"Voulez-vous vraiment supprimer cette entité ?"}},panel:{common:{title:"Planificateur"},overview:{no_entries:"il n'y a pas d'entrée à montrer",backend_error:"Impossible de se connecter au composant du planificateur. Elle doit être installée en tant qu'intégration avant que cette carte puisse être utilisée.",excluded_items:"{number} {if number is 1}entrée exclue{else}entrées exclues",hide_excluded:"cacher les entrées exclues",additional_tasks:"{number} {if number is 1}tâche à venir{else}tâches à venir"},entity_picker:{no_groups_defined:"Aucun groupe défini",no_group_selected:"Choisir un groupe en premier",no_entities_for_group:"Il n'y a pas d'entité dans ce groupe",no_entity_selected:"Choisir une entité en premier",no_actions_for_entity:"Il n'y a pas d'action pour cette entité",make_scheme:"créer un schéma",multiple:"Multiple"},time_picker:{no_timeslot_selected:"Choisir d'abord une plage horaire",time_scheme:"Schéma",time_input_mode:"contrôle temporel"},conditions:{equal_to:"égal à",unequal_to:"pas égal à",all:"tous",any:"tout",no_conditions_defined:"Il n'y a pas de condition définie",track_conditions:"Ré-évaluer lorsque la condition change"},options:{repeat_type:"comportement après l'achèvement",period:"période"}}},Kt={services:Wt,domains:Gt,ui:Zt},Jt=Object.freeze({__proto__:null,services:Wt,domains:Gt,ui:Zt,default:Kt}),Xt={generic:{parameter_to_value:"{parameter} ל {value}",action_with_parameter:"{action} עם {parameter}"},climate:{set_temperature:"קבע טמפרטורה[ ל {temperature}]",set_temperature_hvac_mode_heat:"חימום[ ל {temperature}]",set_temperature_hvac_mode_cool:"קירור[ ל {temperature}]",set_temperature_hvac_mode_heat_cool:"regulate[ to {target_temp_low} - {target_temp_high}]",set_hvac_mode:"קבע מצב עבודה[ ל {hvac_mode}]",set_preset_mode:"קבע הגדרה[ ל {preset_mode}]",set_fan_mode:"set fan mode[ to {fan_mode}]"},cover:{close_cover:"סגירה",open_cover:"פתיחה",set_cover_position:"קבע מיקום[ ל {position}]",set_cover_tilt_position:"קבע הטיה[ ל {tilt_position}]"},fan:{set_speed:"קבע מהירות[ ל {speed}]",set_direction:"קבע כיוון[ ל {direction}]",oscillate:"קבע תנודה[ ל {oscillate}]"},humidifier:{set_humidity:"קבע לחות[ ל {humidity}]",set_mode:"קבע מצב עבודה[ ל {mode}]"},input_number:{set_value:"קבע ערך[ ל {value}]"},input_select:{select_option:"בחר אפשרות[ {option}]"},select:{select_option:"בחר אפשרות[ {option}]"},light:{turn_on:"הדלקה[ בעוצמה של {brightness}]"},media_player:{select_source:"select source[ {source}]"},notify:{notify:"send notification"},script:{script:"בצע"},vacuum:{start_pause:"התחל / הפסק"},water_heater:{set_operation_mode:"קבע מצב עבודה[ ל {operation_mode}]",set_away_mode:"קבע מצב מוץ לבית"}},Qt={alarm_control_panel:"בקרת אזעקה",binary_sensor:"binary sensors",climate:"מזג אוויר",cover:"תריסים",fan:"מאווררים",group:"קבוצות יישויות",humidifier:"מכשירי אדים",input_boolean:"כניסה בוליאנית",input_number:"כניסה מספרית",input_select:"בחירת כניסה",light:"תאורה",lock:"מנעולים",media_player:"נגני מדיה",notify:"notification",switch:"מפסקים",vacuum:"שואבי אבק",water_heater:"מחממי מים"},ei={components:{date:{day_types_short:{daily:"כל יום",workdays:"ימי חול",weekend:"סוף שבוע"},day_types_long:{daily:"כל יום",workdays:"בימי חול",weekend:"בסוף השבוע"},days:"ימים",tomorrow:"מחר",repeated_days:"בכל {days}",repeated_days_except:"בכל יום פרט ל  {excludedDays}",days_range:"מ- {startDay} ועד- {endDay}",next_week_day:"הבא {weekday}"},time:{absolute:"בשעה {time}",interval:"משעה {startTime} עד שעה {endTime}",at_midnight:"בחצות הלילה",at_noon:"בחצות היום",at_sun_event:"ב {sunEvent}"}},dialog:{enable_schedule:{title:"השלם את השינויים",description:"לוח הזמנים ששונה מושבת כעת, האם צריך להפעיל אותו?"},confirm_delete:{title:"להסיר את הישות?",description:"האם בוודאות ברצונך להסיר ישות זו?"}},panel:{common:{title:"לוח זמנים"},overview:{no_entries:"אין פריטים להצגה",backend_error:"אין אפשרות להתחבר לרכיב התזמונים. נדרש להתקין את הרכיב באינטגרציה לפני השימוש בכרטיס.",excluded_items:"{number} לא נכלל {if number is 1} פריט {else} פריטים",hide_excluded:"הסתר פריטים לא כלולים",additional_tasks:"{number} נוסף {if number is 1} משימה {else} משימות"},entity_picker:{no_groups_defined:"לא הוגדרו קבוצות",no_group_selected:"בחר קבוצה תחילה",no_entities_for_group:"אין יישויות בקבוצה זו",no_entity_selected:"תחילה בחר יישות",no_actions_for_entity:"אין פעולות עבור יישות זאת",make_scheme:"בנה סכימה",multiple:"מספר יישויות"},time_picker:{no_timeslot_selected:"בחר משבצת זמן קודם",time_scheme:"סכימה",time_input_mode:"Time control mode"},conditions:{equal_to:"שווה ל",unequal_to:"שונה מ",all:"כל התנאים",any:"אחד מהתנאים",no_conditions_defined:"לא הוגדרו תנאים",track_conditions:"Re-evaluate when conditions change"},options:{repeat_type:"התנהגות לאחר הפעלה",period:"פרק זמן"}}},ti={services:Xt,domains:Qt,ui:ei},ii=Object.freeze({__proto__:null,services:Xt,domains:Qt,ui:ei,default:ti}),si={generic:{parameter_to_value:"{parameter} to {value}",action_with_parameter:"{action} with {parameter}"},climate:{set_temperature:"hőmérséklet[ to {temperature}]",set_temperature_hvac_mode_heat:"hőmérséklet[ to {temperature}]",set_temperature_hvac_mode_cool:"hőmérséklet[ to {temperature}]",set_temperature_hvac_mode_heat_cool:"regulate[ to {target_temp_low} - {target_temp_high}]",set_hvac_mode:"mód beállítása[ to {hvac_mode}]",set_preset_mode:"preset beállítása[ {preset_mode}]",set_fan_mode:"set fan mode[ to {fan_mode}]"},cover:{close_cover:"zárás",open_cover:"nyitás",set_cover_position:"változtass pozíciót[ to {position}]",set_cover_tilt_position:"set tilt position[ to {tilt_position}]"},fan:{set_speed:"set speed[ to {speed}]",set_direction:"set direction[ to {direction}]",oscillate:"set oscillation[ to {oscillate}]"},humidifier:{set_humidity:"set humidity[ to {humidity}]",set_mode:"mód beállítása[ to {mode}]"},input_number:{set_value:"érték beállítása[ to {value}]"},input_select:{select_option:"opció kiválasztása[ {option}]"},select:{select_option:"opció kiválasztása[ {option}]"},light:{turn_on:"bekapcsolás[ with {brightness} brightness]"},media_player:{select_source:"forrás kiválasztása[ {source}]"},notify:{notify:"send notification"},script:{script:"kezdés"},vacuum:{start_pause:"start / pause"},water_heater:{set_operation_mode:"mód beállítása[ to {operation_mode}]",set_away_mode:"set away mode"}},ai={alarm_control_panel:"alarm control panel",binary_sensor:"binary sensors",climate:"termosztát",cover:"redőny",fan:"ventilátor",group:"csoportok",humidifier:"humifiers",input_boolean:"logikai bemenet",input_number:"szám bemenet",input_select:"legördülő bemenet",light:"lámpa",lock:"locks",media_player:"lejátszó",notify:"notification",switch:"kapcsoló",vacuum:"pórszívó",water_heater:"water heaters"},oi={components:{date:{day_types_short:{daily:"minden nap",workdays:"munkanapokon",weekend:"hétvégén"},day_types_long:{daily:"minden nap",workdays:"munkanapokon",weekend:"hétvégén"},days:"Napokon",tomorrow:"tomorrow",repeated_days:"every {days}",repeated_days_except:"every day except {excludedDays}",days_range:"from {startDay} to {endDay}",next_week_day:"következő {weekday}"},time:{absolute:"{time}-kor",interval:"{startTime} - {endTime}",at_midnight:"éjfélkor",at_noon:"délben",at_sun_event:"{sunEvent}kor"}},dialog:{enable_schedule:{title:"Végezze el a módosításokat",description:"A módosított ütemezés jelenleg le van tiltva, engedélyezni kell?"},confirm_delete:{title:"Biztos benne, hogy eltávolítja az entitást?",description:"Biztos benne, hogy el szeretné távolítani ezt az entitást?"}},panel:{common:{title:"Időzítések"},overview:{no_entries:"Nincs megjeleníthető elem",backend_error:"Could not connect with the scheduler component. It needs to be installed as integration before this card can be used.",excluded_items:"{number} excluded {if number is 1} item {else} items",hide_excluded:"hide excluded items",additional_tasks:"még {number} feladat"},entity_picker:{no_groups_defined:"Nincsenek deffiniált csoportok",no_group_selected:"Előbb egy csoportot szükséges választani",no_entities_for_group:"Ebben a csoportban nem találhatók entitások",no_entity_selected:"Előbb egy entitást szükséges választani",no_actions_for_entity:"Ehhez az entitáshoz nem tartoznak műveletek",make_scheme:"make scheme",multiple:"Multiple"},time_picker:{no_timeslot_selected:"Select a timeslot first",time_scheme:"Scheme",time_input_mode:"Time control mode"},conditions:{equal_to:"is",unequal_to:"is not",all:"all",any:"any",no_conditions_defined:"There are no conditions defined",track_conditions:"Re-evaluate when conditions change"},options:{repeat_type:"behaviour after triggering",period:"időszak"}}},ni={services:si,domains:ai,ui:oi},ri=Object.freeze({__proto__:null,services:si,domains:ai,ui:oi,default:ni}),li={generic:{parameter_to_value:"{parameter} a {value}",action_with_parameter:"{action} con {parameter}"},climate:{set_temperature:"imposta temperatura[ a {temperature}]",set_temperature_hvac_mode_heat:"riscaldamento[ a {temperature}]",set_temperature_hvac_mode_cool:"raffrescamento[ a {temperature}]",set_temperature_hvac_mode_heat_cool:"regola[ a {target_temp_low} - {target_temp_high}]",set_hvac_mode:"imposta modalità[ a {hvac_mode}]",set_preset_mode:"imposta programmazione[ {preset_mode}]",set_fan_mode:"set fan mode[ to {fan_mode}]"},cover:{close_cover:"chiuso",open_cover:"aperto",set_cover_position:"imposta posizione[ su {position}]",set_cover_tilt_position:"imposta inclinazione[ su {tilt_position}]"},fan:{set_speed:"imposta velocità[ a {speed}]",set_direction:"imposta direzione[ a {direction}]",oscillate:"imposta oscillazione[ a {oscillate}]"},humidifier:{set_humidity:"imposta umidità[ a {humidity}]",set_mode:"imposta modalità[ a {mode}]"},input_number:{set_value:"imposta valore[ a {value}]"},input_select:{select_option:"seleziona opzione[ {option}]"},select:{select_option:"seleziona opzione[ {option}]"},light:{turn_on:"accendi[ con il {brightness} di luminosità]"},media_player:{select_source:"seleziona sorgente[ {source}]"},notify:{notify:"invia notifica"},script:{script:"esegui"},vacuum:{start_pause:"avvia / pausa"},water_heater:{set_operation_mode:"imposta modalità[ a {operation_mode}]",set_away_mode:"imposta fuori casa"}},ci={alarm_control_panel:"pannello di controllo allarme",binary_sensor:"binary sensors",climate:"clima",cover:"serrande",fan:"ventole",group:"gruppi",humidifier:"umidificatori",input_boolean:"input booleani",input_number:"input numerici",input_select:"input select",light:"luci",lock:"lucchetti",media_player:"media player",notify:"notification",switch:"interruttori",vacuum:"aspirapolveri",water_heater:"scaldabagno"},di={components:{date:{day_types_short:{daily:"giornaliero",workdays:"giorni lavorativi",weekend:"weekend"},day_types_long:{daily:"ogni giorno",workdays:"nei giorni lavorativi",weekend:"nel weekend"},days:"giorni",tomorrow:"domani",repeated_days:"ogni {days}",repeated_days_except:"ogni giorno tranne {excludedDays}",days_range:"{if startDay is domenica} dalla domenica {else} dal {startDay} {if endDay is domenica} alla domenica {else} al {endDay}",next_week_day:"prossimo {weekday}"},time:{absolute:"alle {time}",interval:"dalle {startTime} alle {endTime}",at_midnight:"a mezzanotte",at_noon:"a mezzogiorno",at_sun_event:"al {sunEvent}"}},dialog:{enable_schedule:{title:"Completa le modifiche",description:"La pianificazione modificata è attualmente disabilitata, dovrebbe essere abilitata?"},confirm_delete:{title:"Vuoi rimuovere l'entità?",description:"Sei sicuro di voler rimuovere questa entità?"}},panel:{common:{title:"Schedulatore"},overview:{no_entries:"Non ci sono oggetti da visualizzare",backend_error:"Impossibile connettersi con il componente scheduler. Deve essere installato come integrazione prima di poter utilizzare questa card.",excluded_items:"{number} {if number is 1} oggetto escluso {else} oggetti esclusi",hide_excluded:"Nascondi oggetti esclusi",additional_tasks:"{number} attività in più"},entity_picker:{no_groups_defined:"Non ci sono gruppi definiti",no_group_selected:"Seleziona prima un gruppo",no_entities_for_group:"Non ci sono entità in questo gruppo",no_entity_selected:"Seleziona prima un'entità",no_actions_for_entity:"Non ci sono azioni per questa entità",make_scheme:"crea schema",multiple:"Multiple"},time_picker:{no_timeslot_selected:"Seleziona prima una fascia oraria",time_scheme:"Schema",time_input_mode:"Time control mode"},conditions:{equal_to:"uguale",unequal_to:"non uguale",all:"tutte",any:"qualunque",no_conditions_defined:"Non ci sono condizioni definite",track_conditions:"Re-evaluate when conditions change"},options:{repeat_type:"comportamento dopo il completamento",period:"periodo"}}},ui={services:li,domains:ci,ui:di},hi=Object.freeze({__proto__:null,services:li,domains:ci,ui:di,default:ui}),mi={generic:{parameter_to_value:"{parameter} naar {value}",action_with_parameter:"{action} met {parameter}"},climate:{set_temperature:"temperatuur instellen[ naar {temperature}]",set_temperature_hvac_mode_heat:"verwarmen[ naar {temperature}]",set_temperature_hvac_mode_cool:"koelen[ naar {temperature}]",set_temperature_hvac_mode_heat_cool:"reguleren[ naar {target_temp_low} - {target_temp_high}]",set_hvac_mode:"modus aanpassen[ naar {hvac_mode}]",set_preset_mode:"programma[ {preset_mode}] instellen",set_fan_mode:"ventilatiemodus aanpassen[ naar {fan_mode}]"},cover:{close_cover:"sluiten",open_cover:"openen",set_cover_position:"positie instellen[ naar {position}]",set_cover_tilt_position:"hellingshoek instellen[ naar {tilt_position}]"},fan:{set_speed:"snelheid instellen[ op {speed}]",set_direction:"richting instellen[ naar {direction}]",oscillate:"zet oscillatie[ naar {oscillate}]"},humidifier:{set_humidity:"luchtvochtigheid instellen [ op {humidity}]",set_mode:"modus aanpassen[ naar {mode}]"},input_number:{set_value:"waarde aanpassen[ naar {value}]"},input_select:{select_option:"selecteer optie[ {option}]"},select:{select_option:"selecteer optie[ {option}]"},light:{turn_on:"inschakelen[ met {brightness} helderheid]"},media_player:{select_source:"kies ingang[ {source}]"},notify:{notify:"notificatie sturen"},script:{script:"uitvoeren"},vacuum:{start_pause:"start / pauzeer"},water_heater:{set_operation_mode:"modus aanpassen[ naar {operation_mode}]",set_away_mode:"stel afwezigheidsmode in"}},pi={alarm_control_panel:"alarmsystemen",binary_sensor:"binaire sensoren",climate:"verwarming",cover:"zonwering",fan:"ventilatie",group:"groepen",humidifier:"luchtbevochtigers",input_boolean:"input_boolean",input_number:"input_number",input_select:"input_select",select:"select",light:"verlichting",lock:"sloten",media_player:"mediaspelers",notify:"notificatie",switch:"schakelaars",vacuum:"stofzuigers",water_heater:"waterverwarming"},_i={components:{date:{day_types_short:{daily:"dagelijks",workdays:"werkdagen",weekend:"weekend"},day_types_long:{daily:"iedere dag",workdays:"doordeweeks",weekend:"in het weekend"},days:"dagen",tomorrow:"morgen",repeated_days:"elke {days}",repeated_days_except:"elke dag behalve {excludedDays}",days_range:"van {startDay} tot {endDay}",next_week_day:"volgende week {weekday}"},time:{absolute:"om {time}",interval:"van {startTime} tot {endTime}",at_midnight:"om middernacht",at_noon:"om 12:00",at_sun_event:"bij {sunEvent}"}},dialog:{enable_schedule:{title:"Wijzigingen voltooid",description:"Deze planning is momenteel gedeactiveerd. Dient deze te worden ingeschakeld?"},confirm_delete:{title:"Entiteit verwijderen?",description:"Weet je zeker dat je dit item wilt verwijderen?"}},panel:{common:{title:"Tijdplanner"},overview:{no_entries:"Er zijn geen items aangemaakt",backend_error:"Er kon geen verbinding worden gemaakt met het Scheduler component. Deze moet als integratie zijn geinstalleerd voordat deze kaart gebruikt kan worden.",excluded_items:"{number} uitgesloten {if number is 1} item {else} items",hide_excluded:"verberg uitgesloten items",additional_tasks:"{number} overige {if number is 1} taak {else} taken"},entity_picker:{no_group_selected:"Selecteer eerst een groep",no_entity_selected:"Selecteer eerst een entiteit",no_groups_defined:"Er zijn geen groepen gedefinieerd",no_entities_for_group:"Deze groep heeft geen entiteiten",no_actions_for_entity:"Deze entiteit heeft geen acties",make_scheme:"maak schema",multiple:"Meerdere"},time_picker:{no_timeslot_selected:"Kies eerst een tijdsslot",time_scheme:"Schema",time_input_mode:"Invoermodus voor tijd"},conditions:{equal_to:"is",unequal_to:"is niet",all:"en",any:"of",no_conditions_defined:"Er zijn geen voorwaarden gedefinieerd",track_conditions:"Herevalueer wanneer condities veranderen"},options:{repeat_type:"gedrag na voltooiing",period:"periode"}}},vi={services:mi,domains:pi,ui:_i},gi=Object.freeze({__proto__:null,services:mi,domains:pi,ui:_i,default:vi}),fi={generic:{parameter_to_value:"{parameter} til {value}",action_with_parameter:"{action} med {parameter}"},climate:{set_temperature:"sett temperatur[ til {temperature}]",set_temperature_hvac_mode_heat:"sett temperatur[ til {temperature}]",set_temperature_hvac_mode_cool:"sett temperatur[ til {temperature}]",set_temperature_hvac_mode_heat_cool:"reguler[ til {target_temp_low} - {target_temp_high}]",set_hvac_mode:"sett modus[ til {hvac_mode}]",set_preset_mode:"sett forhåndsvalg[ {preset_mode}]",set_fan_mode:"set fan mode[ to {fan_mode}]"},cover:{close_cover:"lukk",open_cover:"åpne",set_cover_position:"sett posisjon[ til {position}]",set_cover_tilt_position:"sett vippestilling[ til {tilt_position}]"},fan:{set_speed:"sett hastighet[ til {speed}]",set_direction:"sett retning[ til {direction}]",oscillate:"sett svingning[ til {oscillate}]"},humidifier:{set_humidity:"sett luftfuktighet[ til {humidity}]",set_mode:"sett modus[ til {mode}]"},input_number:{set_value:"sett verdi[ til {value}]"},input_select:{select_option:"velg[ {option}]"},select:{select_option:"velg[ {option}]"},light:{turn_on:"slå på[ med {brightness} lysstyrke]"},media_player:{select_source:"velg kilde[ {source}]"},notify:{notify:"send notifikasjon"},script:{script:"utfør"},vacuum:{start_pause:"start / pause"},water_heater:{set_operation_mode:"sett modus[ til {operation_mode}]",set_away_mode:"sett bortemodus"}},yi={alarm_control_panel:"alarmpanel",binary_sensor:"binary sensors",climate:"klima",cover:"solskjerming",fan:"vifter",group:"grupper",humidifier:"luftfuktere",input_boolean:"input boolsk",input_number:"input nummer",input_select:"input valg",light:"lys",lock:"låser",media_player:"mediaspillere",notify:"notification",switch:"brytere",vacuum:"støvsugere",water_heater:"varmtvannsberedere"},bi={components:{date:{day_types_short:{daily:"hver dag",workdays:"ukedager",weekend:"helg"},day_types_long:{daily:"hver dag",workdays:"ukedager",weekend:"helg"},days:"Dager",tomorrow:"imorgen",repeated_days:"hver {days}",repeated_days_except:"hver dag unntatt {excludedDays}",days_range:"fra {startDay} til {endDay}",next_week_day:"neste {weekday}"},time:{absolute:"kl. {time}",interval:"fra {startTime} til {endTime}",at_midnight:"ved midnatt",at_noon:"kl. 12.00",at_sun_event:"ved {sunEvent}"}},dialog:{enable_schedule:{title:"Fullfør endringene",description:"Tidsplanen som er endret er for øyeblikket deaktivert, bør den være aktivert?"},confirm_delete:{title:"Vil du fjerne entiteten?",description:"Er du sikker på at du vil fjerne denne entiteten?"}},panel:{common:{title:"Tidsplan"},overview:{no_entries:"Det er ingen definerte tidsplaner å vise",backend_error:"Kunne ikke koble til tidsplankomponenten. Den må installeres som en integrasjon før dette kortet kan benyttes.",excluded_items:"{number} ekskludert {if number is 1} element {else} elementer",hide_excluded:"skjul ekskluderte elementer",additional_tasks:"{number} flere {if number is 1} oppgaver {else} oppgaver"},entity_picker:{no_groups_defined:"Ingen grupper definert",no_group_selected:"Velg en gruppe først",no_entities_for_group:"Det finnes ingen entiteter i denne gruppen",no_entity_selected:"Velg en entitet først",no_actions_for_entity:"Det finnes ingen handlinger for denne entiteten",make_scheme:"lag tidsplan",multiple:"Flere"},time_picker:{no_timeslot_selected:"Velg tidsluke først",time_scheme:"Tidsplan",time_input_mode:"Time control mode"},conditions:{equal_to:"er",unequal_to:"er ikke",all:"alle",any:"any",no_conditions_defined:"Ingen vilkår definert",track_conditions:"Re-evaluate when conditions change"},options:{repeat_type:"oppførsel etter fullføring",period:"periode"}}},ki={services:fi,domains:yi,ui:bi},wi=Object.freeze({__proto__:null,services:fi,domains:yi,ui:bi,default:ki}),xi={generic:{parameter_to_value:"{parameter} na {value}",action_with_parameter:"{action} z {parameter}"},climate:{set_temperature:"ustaw temperaturę[ na {temperature}]",set_temperature_hvac_mode_heat:"grzej[ do {temperature}]",set_temperature_hvac_mode_cool:"chłodź[ do {temperature}]",set_temperature_hvac_mode_heat_cool:"regulate[ to {target_temp_low} - {target_temp_high}]",set_hvac_mode:"ustaw tryb[ na {hvac_mode}]",set_preset_mode:"ustaw preset[ {preset_mode}]",set_fan_mode:"set fan mode[ to {fan_mode}]"},cover:{close_cover:"zamknij",open_cover:"otwórz",set_cover_position:"ustaw pozycję[ na {position}]",set_cover_tilt_position:"ustaw pozycję lameli[ na {tilt_position}]"},fan:{set_speed:"ustaw prędkość[ na {speed}]",set_direction:"ustaw kierunek[ na {direction}]",oscillate:"ustaw oscylacje[ na {oscillate}]"},humidifier:{set_humidity:"ustaw wilgotność[ na {humidity}]",set_mode:"ustaw tryb[ na {mode}]"},input_number:{set_value:"ustaw wartość[ na {value}]"},input_select:{select_option:"wybierz opcję[ {option}]"},select:{select_option:"wybierz opcję[ {option}]"},light:{turn_on:"zapal[ z jasnością {brightness}]"},media_player:{select_source:"wybierz źródło[ {source}]"},notify:{notify:"send notification"},script:{script:"wykonaj"},vacuum:{start_pause:"start / pauza"},water_heater:{set_operation_mode:"ustaw tryb[ na {operation_mode}]",set_away_mode:"ustaw tryb nieobecności"}},$i={alarm_control_panel:"panel kontrolny alarmu",binary_sensor:"binary sensors",climate:"klimatyzacja",cover:"rolety",fan:"wentylatory",group:"grupy",humidifier:"nawilżacze",input_boolean:"wejście logiczne",input_number:"wejście liczbowe",input_select:"wybór wejścia",light:"światła",lock:"zamki",media_player:"odtwarzacze",notify:"notification",switch:"przełączniki",vacuum:"odkurzacze",water_heater:"podgrzewacze wody"},ji={components:{date:{day_types_short:{daily:"codziennie",workdays:"robocze",weekend:"weekendy"},day_types_long:{daily:"codziennie",workdays:"w dni robocze",weekend:"podczas weekendu"},days:"dni",tomorrow:"jutro",repeated_days:"co {days} dni",repeated_days_except:"coddziennie z wyjątkiem {excludedDays}",days_range:"od {startDay} do {endDay}",next_week_day:"następna {weekday}"},time:{absolute:"o {time}",interval:"od {startTime} do {endTime}",at_midnight:"o północ",at_noon:"o południe",at_sun_event:"o {sunEvent}"}},dialog:{enable_schedule:{title:"Zakończ modyfikacje",description:"Zmieniony harmonogram jest obecnie wyłączony, czy powinien być włączony?"},confirm_delete:{title:"Usunąć encję?",description:"Czy na pewno chcesz usunąć tę encję?"}},panel:{common:{title:"Harmonogram"},overview:{no_entries:"Nie ma elementów do pokazania",backend_error:"Could not connect with the scheduler component. It needs to be installed as integration before this card can be used.",excluded_items:"{number} wykluczona {if number is 1} pozycja {else} pozycje",hide_excluded:"ukryj wykluczone pozycje",additional_tasks:"{number} dodatkowe {if number is 1} zadanie {else} zadań(nia)"},entity_picker:{no_groups_defined:"Nie ma zdefiniowanych grup",no_group_selected:"Najpierw wybierz grupę",no_entities_for_group:"Nie ma encji w tej grupie",no_entity_selected:"Najpierw wybierz encję",no_actions_for_entity:"Nie ma akcji dla tej encji",make_scheme:"stwórz schemat",multiple:"Multiple"},time_picker:{no_timeslot_selected:"Najpierw wybierz przedział czasowy",time_scheme:"Schemat",time_input_mode:"Time control mode"},conditions:{equal_to:"jest równe ",unequal_to:"nie jest równe",all:"wszystkie",any:"dowolny",no_conditions_defined:"Nie ma zdefiniowanych warunków",track_conditions:"Re-evaluate when conditions change"},options:{repeat_type:"zachowanie po zakończeniu",period:"okres"}}},Oi={services:xi,domains:$i,ui:ji},zi=Object.freeze({__proto__:null,services:xi,domains:$i,ui:ji,default:Oi}),Si={generic:{parameter_to_value:"{parameter} para {value}",action_with_parameter:"{action} com {parameter}"},climate:{set_temperature:"definir temperatura[ para {temperature}]",set_temperature_hvac_mode_heat:"aquecimento[ para {temperature}]",set_temperature_hvac_mode_cool:"arrefecimento[ para {temperature}]",set_temperature_hvac_mode_heat_cool:"regulate[ to {target_temp_low} - {target_temp_high}]",set_hvac_mode:"definir modo[ para {hvac_mode}]",set_preset_mode:"definir predefinição[ {preset_mode}]",set_fan_mode:"set fan mode[ to {fan_mode}]"},cover:{close_cover:"fechar",open_cover:"abrir",set_cover_position:"definir posição[ para {position}]",set_cover_tilt_position:"set tilt position[ to {tilt_position}]"},fan:{set_speed:"definir velocidade[ para {speed}]",set_direction:"definir direção[ para {direction}]",oscillate:"definir oscilação[ para {oscillate}]"},humidifier:{set_humidity:"definir humidade[ para {humidity}]",set_mode:"definir modo[ para {mode}]"},input_number:{set_value:"definir valor[ para {value}]"},input_select:{select_option:"selecionar opção[ {option}]"},select:{select_option:"selecionar opção[ {option}]"},light:{turn_on:"ligar[ com {brightness} brightness]"},media_player:{select_source:"selecionar origem[ {source}]"},notify:{notify:"send notification"},script:{script:"executar"},vacuum:{start_pause:"iniciar / pausar"},water_heater:{set_operation_mode:"definir modo[ para {operation_mode}]",set_away_mode:"definir modo ausente"}},Ei={alarm_control_panel:"painel de controlo de alarme",binary_sensor:"binary sensors",climate:"ambiente",cover:"estores",fan:"ventiladores",group:"grupos",humidifier:"humidificadores",input_boolean:"campo booleano",input_number:"campo numérico",input_select:"campo de opção",light:"iluminação",lock:"fechaduras",media_player:"reprodutores de mídia",notify:"notification",switch:"interruptores",vacuum:"aspiradores",water_heater:"aquecedores hidráulicos"},Ci={components:{date:{day_types_short:{daily:"todos",workdays:"semana de trabalho",weekend:"fim-de-semana"},day_types_long:{daily:"todos os dias",workdays:"em dias de semana",weekend:"no fim-de-semana"},days:"dias",tomorrow:"amanhã",repeated_days:"a cada {days}",repeated_days_except:"a cada dia exceto {excludedDays}",days_range:"até {startDay} até {endDay}",next_week_day:"próximo {weekday}"},time:{absolute:"Às {time}",interval:"das {startTime} às {endTime}",at_midnight:"ao meia-noite",at_noon:"ao meio-dia",at_sun_event:"ao {sunEvent}"}},dialog:{enable_schedule:{title:"Conclua as modificações",description:"A programação que foi alterada está atualmente desabilitada, deveria ser habilitada?"},confirm_delete:{title:"Remover a entidade?",description:"Tem a certeza que deseja remover esta entidade?"}},panel:{common:{title:"Agenda"},overview:{no_entries:"Não existem itens a mostrar",backend_error:"Could not connect with the scheduler component. It needs to be installed as integration before this card can be used.",excluded_items:"{number}{if number is 1} item excluído {else} itens excluídos",hide_excluded:"ocultar itens excluídos",additional_tasks:"Mais {number} {if number is 1} tarefa {else} tarefas"},entity_picker:{no_groups_defined:"Não existem grupos definidos",no_group_selected:"Selecione um grupo primeiro",no_entities_for_group:"Não existem entidades neste grupo",no_entity_selected:"Selecione uma entidade primeiro",no_actions_for_entity:"Não existem ações para esta entidade",make_scheme:"criar esquema",multiple:"Multiple"},time_picker:{no_timeslot_selected:"É necessário selecionar um período horário para escolher uma ação",time_scheme:"Esquema",time_input_mode:"Time control mode"},conditions:{equal_to:"é",unequal_to:"não é",all:"todos(as)",any:"qualquer",no_conditions_defined:"Não existem condições definidas",track_conditions:"Re-evaluate when conditions change"},options:{repeat_type:"comportamento após a conclusão",period:"período"}}},Ai={services:Si,domains:Ei,ui:Ci},Mi=Object.freeze({__proto__:null,services:Si,domains:Ei,ui:Ci,default:Ai}),Di={generic:{parameter_to_value:"{parameter} para {value}",action_with_parameter:"{action} com {parameter}"},climate:{set_temperature:"definir temperatura[ para {temperature}]",set_temperature_hvac_mode_heat:"aquecimento[ para {temperature}]",set_temperature_hvac_mode_cool:"arrefecimento[ para {temperature}]",set_temperature_hvac_mode_heat_cool:"regulate[ para {target_temp_low} - {target_temp_high}]",set_hvac_mode:"definir modo[ para {hvac_mode}]",set_preset_mode:"definir predefinição[ {preset_mode}]",set_fan_mode:"definir modo do ventilador[ para {fan_mode}]"},cover:{close_cover:"fechar",open_cover:"abrir",set_cover_position:"definir posição[ para {position}]",set_cover_tilt_position:"definir a posição de inclinação[ para {tilt_position}]"},fan:{set_speed:"definir velocidade[ para {speed}]",set_direction:"definir direção[ para {direction}]",oscillate:"definir oscilação[ para {oscillate}]"},humidifier:{set_humidity:"definir humidade[ para {humidity}]",set_mode:"definir modo[ para {mode}]"},input_number:{set_value:"definir valor[ para {value}]"},input_select:{select_option:"selecionar opção[ {option}]"},select:{select_option:"selecionar opção[ {option}]"},light:{turn_on:"ligar[ com {brightness} brightness]"},media_player:{select_source:"selecionar origem[ {source}]"},notify:{notify:"enviar notificação"},script:{script:"executar"},vacuum:{start_pause:"iniciar / pausar"},water_heater:{set_operation_mode:"definir modo[ para {operation_mode}]",set_away_mode:"definir modo ausente"}},Ti={alarm_control_panel:"painel de alarme",binary_sensor:"sensores binários",climate:"ambiente",cover:"persiana",fan:"ventiladores",group:"grupos",humidifier:"humidificadores",input_boolean:"campo booleano",input_number:"campo numérico",input_select:"campo de opção",light:"iluminação",lock:"fechaduras",media_player:"reprodutores de mídia",notify:"notificar",switch:"interruptores",vacuum:"aspiradores",water_heater:"aquecedores hidráulicos"},Ni={components:{date:{day_types_short:{daily:"diário",workdays:"semana de trabalho",weekend:"fim-de-semana"},day_types_long:{daily:"todos os dias",workdays:"em dias de semana",weekend:"no fim-de-semana"},days:"dias",tomorrow:"amanhã",repeated_days:"a cada {days}",repeated_days_except:"a cada dia exceto {excludedDays}",days_range:"de {startDay} até {endDay}",next_week_day:"próximo {weekday}"},time:{absolute:"à {time}",interval:"das {startTime} às {endTime}",at_midnight:"ao meia-noite",at_noon:"ao meio-dia",at_sun_event:"ao {sunEvent}"}},dialog:{enable_schedule:{title:"Conclua as modificações",description:"A programação que foi alterada está atualmente desabilitada, deveria ser habilitada?"},confirm_delete:{title:"Remover entidade?",description:"Tem certeza de que deseja remover esta entidade?"}},panel:{common:{title:"Agenda"},overview:{no_entries:"Não existem itens para mostrar",backend_error:"Não foi possível conectar com o componente agendador. Ele precisa ser instalado como integração antes que este cartão possa ser usado.",excluded_items:"{number}{if number is 1} item excluído {else} itens excluídos",hide_excluded:"ocultar itens excluídos",additional_tasks:"Mais {number} {if number is 1} tarefa {else} tarefas"},entity_picker:{no_groups_defined:"Não existem grupos definidos",no_group_selected:"Selecione um grupo primeiro",no_entities_for_group:"Não existem entidades neste grupo",no_entity_selected:"Selecione uma entidade primeiro",no_actions_for_entity:"Não existem ações para esta entidade",make_scheme:"criar esquema",multiple:"Múltiplo"},time_picker:{no_timeslot_selected:"Selecionar um período horário primeiro",time_scheme:"Esquema",time_input_mode:"Modo de controle do tempo"},conditions:{equal_to:"é",unequal_to:"não é",all:"todos(as)",any:"qualquer um",no_conditions_defined:"Não existem condições definidas",track_conditions:"Reavaliar quando as condições mudarem"},options:{repeat_type:"comportamento após a conclusão",period:"período"}}},Li={services:Di,domains:Ti,ui:Ni},Ii=Object.freeze({__proto__:null,services:Di,domains:Ti,ui:Ni,default:Li}),Pi={generic:{parameter_to_value:"{parameter} la {value}",action_with_parameter:"{action} cu {parameter}"},climate:{set_temperature:"setare temperatură[ la {temperature}]",set_temperature_hvac_mode_heat:"încălzire[ la {temperature}]",set_temperature_hvac_mode_cool:"răcire[ la {temperature}]",set_temperature_hvac_mode_heat_cool:"regulate[ to {target_temp_low} - {target_temp_high}]",set_hvac_mode:"setare mod[ la {hvac_mode}]",set_preset_mode:"setare preset[ {preset_mode}]",set_fan_mode:"set fan mode[ to {fan_mode}]"},cover:{close_cover:"închidere",open_cover:"deschidere",set_cover_position:"setare poziție[ la {position}]",set_cover_tilt_position:"set tilt position[ to {tilt_position}]"},fan:{set_speed:"setare viteză[ la {speed}]",set_direction:"setare direcție[ la {direction}]",oscillate:"setare oscilare[ la {oscillate}]"},humidifier:{set_humidity:"setare umiditate[ la {humidity}]",set_mode:"setare mod[ la {mode}]"},input_number:{set_value:"setare valoare[ la {value}]"},input_select:{select_option:"selectare opțiune[ {option}]"},select:{select_option:"selectare opțiune[ {option}]"},light:{turn_on:"pornire[ cu luminozitate {brightness}]"},media_player:{select_source:"selectare sursă[ {source}]"},notify:{notify:"send notification"},script:{script:"executare"},vacuum:{start_pause:"start / pauză"},water_heater:{set_operation_mode:"setare mod[ la {operation_mode}]",set_away_mode:"setare mod plecat"}},qi={alarm_control_panel:"panou control alarmă",binary_sensor:"binary sensors",climate:"climat",cover:"jaluzele",fan:"ventilatoare",group:"grupuri",humidifier:"umidificatoare",input_boolean:"input boolean",input_number:"input număr",input_select:"input selecție",light:"lumini",lock:"încuietori",media_player:"media playere",notify:"notification",switch:"întrerupătoare",vacuum:"aspiratoare",water_heater:"încălzitoare apă"},Ri={components:{date:{day_types_short:{daily:"zilnic",workdays:"zile lucrătoare",weekend:"sfârșit de săptămână"},day_types_long:{daily:"zilnic",workdays:"în timpul săptămânii",weekend:"la sfârșit de săptămână"},days:"zile",tomorrow:"mâine",repeated_days:"la fiecare {days} zile",repeated_days_except:"zilnic cu excepția {excludedDays}",days_range:"din {startDay} până în {endDay}",next_week_day:"{weekday} viitoare"},time:{absolute:"la {time}",interval:"de la {startTime} până la {endTime}",at_midnight:"la miezul nopții",at_noon:"la amiază",at_sun_event:"la {sunEvent}"}},dialog:{enable_schedule:{title:"Completați modificările",description:"Programul care a fost modificat este momentan dezactivat, ar trebui activat?"},confirm_delete:{title:"Ștergeți entitatea?",description:"Sigur doriți să eliminați această entitate?"}},panel:{common:{title:"Planificator"},overview:{no_entries:"Nu există elemente de afișat",backend_error:"Could not connect with the scheduler component. It needs to be installed as integration before this card can be used.",excluded_items:"{if number is 1}un element exclus {else}{number} elemente excluse",hide_excluded:"ascunde elementele excluse",additional_tasks:"{if number is 1}o sarcină suplimentară {else}{number} sarcini suplimentare"},entity_picker:{no_groups_defined:"Nu există grupuri definite",no_group_selected:"Prima dată selectați un grup",no_entities_for_group:"Nu există entități definite în acest grup",no_entity_selected:"Prima dată selectați o entitate",no_actions_for_entity:"Nu există acțiuni pentru această entitate",make_scheme:"creare schemă",multiple:"Multiple"},time_picker:{no_timeslot_selected:"Prima dată selectați un interval orar",time_scheme:"Schemă",time_input_mode:"Time control mode"},conditions:{equal_to:"este",unequal_to:"nu este",all:"tot",any:"oricare",no_conditions_defined:"Nu există condiții definite",track_conditions:"Re-evaluate when conditions change"},options:{repeat_type:"comportament după declanșare",period:"perioadă"}}},Vi={services:Pi,domains:qi,ui:Ri},Ui=Object.freeze({__proto__:null,services:Pi,domains:qi,ui:Ri,default:Vi}),Hi={generic:{parameter_to_value:"{parameter} к {value}",action_with_parameter:"{action} с {parameter}"},climate:{set_temperature:"установить температуру[ {temperature}]",set_temperature_hvac_mode_heat:"обогрев[ {temperature}]",set_temperature_hvac_mode_cool:"охлаждение[ {temperature}]",set_temperature_hvac_mode_heat_cool:"регулировать[ в пределах {target_temp_low} - {target_temp_high}]",set_hvac_mode:"установить режим[ {hvac_mode}]",set_preset_mode:"выбрать набор настроек[ {preset_mode}]",set_fan_mode:"set fan mode[ to {fan_mode}]"},cover:{close_cover:"закрыть",open_cover:"открыть",set_cover_position:"установить позицию[ {position}]",set_cover_tilt_position:"установить наклон[ {tilt_position}]"},fan:{set_speed:"установить скорость[ {speed}]",set_direction:"установить направление[ {direction}]",oscillate:"установить колебание[ {oscillate}]"},humidifier:{set_humidity:"установить влажность[ {humidity}]",set_mode:"установить режим[ {mode}]"},input_number:{set_value:"установить значение[ в {value}]"},input_select:{select_option:"установить опцию[ {option}]"},select:{select_option:"установить опцию[ {option}]"},light:{turn_on:"включить[ с {brightness} яркостью]"},media_player:{select_source:"выбрать источник[ {source}]"},notify:{notify:"послать сообщение"},script:{script:"запустить"},vacuum:{start_pause:"старт / пауза"},water_heater:{set_operation_mode:"установить режим[ {operation_mode}]",set_away_mode:"установить режим вне дома"}},Fi={alarm_control_panel:"панель управления сигнализацией",binary_sensor:"binary sensors",climate:"климат",cover:"жалюзи",fan:"вентиляторы",group:"группы",humidifier:"увлажнители",input_boolean:"логические",input_number:"числовые",input_select:"списки",light:"освещение",lock:"замки",media_player:"медиа-плееры",notify:"notification",switch:"розетки",vacuum:"пылесосы",water_heater:"подогреватели воды"},Bi={components:{date:{day_types_short:{daily:"ежедневно",workdays:"рабочие дни",weekend:"выходные"},day_types_long:{daily:"каждый день",workdays:"по рабочим дням",weekend:"в выходные"},days:"дни",tomorrow:"завтра",repeated_days:"каждый {days}",repeated_days_except:"каждый день кроме {excludedDays}",days_range:"с {startDay} до {endDay}",next_week_day:"в следующую {weekday}"},time:{absolute:"в {time}",interval:"с {startTime} до {endTime}",at_midnight:"в полночь",at_noon:"в полдень",at_sun_event:"в {sunEvent}"}},dialog:{enable_schedule:{title:"Завершите модификации",description:"Расписание, которое было изменено, в настоящее время отключено, следует ли его включить?"},confirm_delete:{title:"Удалить объект?",description:"Вы уверены, что хотите удалить этот объект?"}},panel:{common:{title:"Планировщик"},overview:{no_entries:"Отсутствуют элементы",backend_error:"Нет соединенияс scheduler component. Scheduler component должен быть установлен до применения этой карты.",excluded_items:"{number} исключено {if number is 1} элемент {else} элементов",hide_excluded:"скрыть исключенные элементы",additional_tasks:"{number} больше {if number is 1} задача {else} задач"},entity_picker:{no_groups_defined:"Не определены группы",no_group_selected:"Выберите группу",no_entities_for_group:"Отсутствуют элементы в группе",no_entity_selected:"Выберите элемент",no_actions_for_entity:"Нет действий для этого элемента",make_scheme:"создать схему",multiple:"Множественный"},time_picker:{no_timeslot_selected:"Выберите временной слот",time_scheme:"Cхему",time_input_mode:"Time control mode"},conditions:{equal_to:"равно",unequal_to:"не равно",all:"все",any:"любое",no_conditions_defined:"Не определены условия",track_conditions:"Re-evaluate when conditions change"},options:{repeat_type:"поведение после срабатывания",period:"период"}}},Yi={services:Hi,domains:Fi,ui:Bi},Wi=Object.freeze({__proto__:null,services:Hi,domains:Fi,ui:Bi,default:Yi}),Gi={generic:{parameter_to_value:"{parameter} na {value}",action_with_parameter:"{action} s {parameter}"},climate:{set_temperature:"nastaviť teplotu[ na {temperature}]",set_temperature_hvac_mode_heat:"vykurovanie[ na {temperature}]",set_temperature_hvac_mode_cool:"chladenie[ na {temperature}]",set_temperature_hvac_mode_heat_cool:"regulate[ to {target_temp_low} - {target_temp_high}]",set_hvac_mode:"nastaviť režim[ na {hvac_mode}]",set_preset_mode:"nastaviť predvoľbu[ {preset_mode}]",set_fan_mode:"set fan mode[ to {fan_mode}]"},cover:{close_cover:"zatvoriť",open_cover:"otvoriť",set_cover_position:"nastaviť polohu[ na {position}]",set_cover_tilt_position:"nastaviť naklonenie[ na {tilt_position}]"},fan:{set_speed:"nastaviť rýchlosť[ na {speed}]",set_direction:"nastaviť smer[ na {direction}]",oscillate:"nastaviť osciláciu[ na {oscillate}]"},humidifier:{set_humidity:"nastaviť vlhkosť[ na {humidity}]",set_mode:"nastaviť režim[ na {mode}]"},input_number:{set_value:"nastaviť hodnotu[ na {value}]"},input_select:{select_option:"vybrať možnosť[ {option}]"},select:{select_option:"vybrať možnosť[ {option}]"},light:{turn_on:"zapnúť[ na {brightness} jas]"},media_player:{select_source:"vybrať zdroj[ {source}]"},notify:{notify:"send notification"},script:{script:"spustiť"},vacuum:{start_pause:"štart / pauza"},water_heater:{set_operation_mode:"nastaviť režim[ na {operation_mode}]",set_away_mode:"nastaviť mód neprítomný"}},Zi={alarm_control_panel:"ovládací panel alarmu",binary_sensor:"binary sensors",climate:"klimatizácia",cover:"rolety",fan:"ventilátory",group:"skupiny",humidifier:"zvlhčovače",input_boolean:"input boolean",input_number:"input number",input_select:"input select",light:"svetlá",lock:"zámky",media_player:"mediálne prehrávače",notify:"notification",switch:"vypínače",vacuum:"vysávače",water_heater:"ohrievače vody"},Ki={components:{date:{day_types_short:{daily:"denne",workdays:"pracovné dni",weekend:"víkend"},day_types_long:{daily:"každý deň",workdays:"cez pracovné dni",weekend:"cez víkend"},days:"dni",tomorrow:"zajtra",repeated_days:"každý {days}",repeated_days_except:"každý deň okrem {excludedDays}",days_range:"od {startDay} do {endDay}",next_week_day:"budúcu {weekday}"},time:{absolute:"od {time}",interval:"od {startTime} do {endTime}",at_midnight:"od polnoci",at_noon:"od obeda",at_sun_event:"na {sunEvent}"}},dialog:{enable_schedule:{title:"Dokončite úpravy",description:"Plán, ktorý sa zmenil, je momentálne zakázaný, mal by byť povolený?"},confirm_delete:{title:"Odstrániť entitu?",description:"Naozaj chcete odstrániť túto entitu?"}},panel:{common:{title:"Plánovač"},overview:{no_entries:"Žiadne položky k zobrazeniu",backend_error:"Nepodarilo sa pripojiť k Scheduler Component. Musí byť nainštalovaný ako integrácia pred použitím tejto karty.",excluded_items:"Vylúčené položky: {number}",hide_excluded:"skryť vylúčené položky",additional_tasks:"Ďalšie úlohy: {number}"},entity_picker:{no_groups_defined:"Nie sú definované žiadne skupiny",no_group_selected:"Najprv vyberte skupinu",no_entities_for_group:"V tejto skupine nie sú žiadne entity",no_entity_selected:"Najprv vyberte entitu",no_actions_for_entity:"Pre túto entitu neexistujú žiadne akcie",make_scheme:"vytvoriť schému",multiple:"Viacero"},time_picker:{no_timeslot_selected:"Najprv vyberte časový úsek",time_scheme:"Schému",time_input_mode:"Time control mode"},conditions:{equal_to:"je",unequal_to:"nie je",all:"Všetko",any:"žiadny",no_conditions_defined:"Nie sú definované žiadne podmienky",track_conditions:"Re-evaluate when conditions change"},options:{repeat_type:"správanie sa po spustení",period:"obdobie"}}},Ji={services:Gi,domains:Zi,ui:Ki},Xi={generic:{parameter_to_value:"{parameter} v {value}",action_with_parameter:"{action} z {parameter}"},climate:{set_temperature:"nastavi temperaturo[ na {temperature}]",set_temperature_hvac_mode_heat:"ogrej[ na {temperature}]",set_temperature_hvac_mode_cool:"ohladi[ na {temperature}]",set_temperature_hvac_mode_heat_cool:"reguliraj[ na {target_temp_low} - {target_temp_high}]",set_hvac_mode:"nastavi način[ na {hvac_mode}]",set_preset_mode:"nastavi preset[ na {preset_mode}]",set_fan_mode:"nastavi ventilator[ na {fan_mode}]"},cover:{close_cover:"zapri",open_cover:"odpri",set_cover_position:"nastavi pozicijo[ na {position}]",set_cover_tilt_position:"nastavi naklon[ na {tilt_position}]"},fan:{set_speed:"nastavi hitrost[ na {speed}]",set_direction:"nastavi smer[ na {direction}]",oscillate:"nastavi obračanje[ na {oscillate}]"},humidifier:{set_humidity:"nastavi vlažnost[ na {humidity}]",set_mode:"nastavi način[ na {mode}]"},input_number:{set_value:"nastavi vrednost[ na {value}]"},input_select:{select_option:"izberi možnost[ {option}]"},select:{select_option:"izberi možnost[ {option}]"},light:{turn_on:"vključi[ z {brightness} brightness]"},media_player:{select_source:"Izberi vir[ {source}]"},notify:{notify:"pošlji sporočilo"},script:{script:"izvedi"},vacuum:{start_pause:"zaženi / ustavi"},water_heater:{set_operation_mode:"nastavi način[ na {operation_mode}]",set_away_mode:"nastavi način odsoten"}},Qi={alarm_control_panel:"kontrolna plošča alarma",binary_sensor:"binarni sensorji",climate:"klime",cover:"rolete",fan:"ventilatorji",group:"skupine entitet",humidifier:"vlažilniki",input_boolean:"input boolean",input_number:"input number",input_select:"input select",light:"luči",lock:"ključavnice",media_player:"medijsi predvajalniki",notify:"obvestila",switch:"stikala",vacuum:"sesalniki",water_heater:"grelniki vode"},es={components:{date:{day_types_short:{daily:"dnevno",workdays:"delovniki",weekend:"vikend"},day_types_long:{daily:"vsak dan",workdays:"ob delovnikih",weekend:"ob vikendih"},days:"dni",tomorrow:"jutri",repeated_days:"vsakih {days}",repeated_days_except:"vsak dan razen {excludedDays}",days_range:"od {startDay} do {endDay}",next_week_day:"naslednji {weekday}"},time:{absolute:"ob {time}",interval:"od {startTime} do {endTime}",at_midnight:"opolnoči",at_noon:"opoldne",at_sun_event:"ob {sunEvent}"}},dialog:{enable_schedule:{title:"Zaključi spremembe",description:"Urnik, katerega ste spremenili je trenutno izključen, ali ga želite omogočiti?"},confirm_delete:{title:"Ali želite odstraniti entiteto?",description:"Ali ste prepričani, da želite odstraniti to entiteto?"}},panel:{common:{title:"Urnik"},overview:{no_entries:"Ni vpisov za prikaz",backend_error:"Ni povezave s komponento urnika. Komponenta mora biti nameščena kot integracija, preden lahko uporabite to kartico.",excluded_items:"{number}{if number is 1} izločen predmet {else} izločenih predmetov",hide_excluded:"skrij izločene predmete",additional_tasks:"še {number}{if number is 1} opravilo {else} opravil"},entity_picker:{no_groups_defined:"Ni definiranih skupin",no_group_selected:"Najprej izberite skupino",no_entities_for_group:"V tej skupini ni entitet",no_entity_selected:"Najprej izberite entiteto",no_actions_for_entity:"Za to entiteto ni akcij",make_scheme:"izdelaj shemo",multiple:"Večkratno"},time_picker:{no_timeslot_selected:"Najprej izberi časovni okvir",time_scheme:"Shema",time_input_mode:"Način časovnega nadzora"},conditions:{equal_to:"je enako",unequal_to:"ni enako",all:"vse",any:"karkoli",no_conditions_defined:"Ni definiranih pogojev",track_conditions:"Ponovno preglej ko se pogoji spremenijo"},options:{repeat_type:"obnašanje, ko končaš",period:"perioda"},card_editor:{tabs:{entities:"Entitete",other:"Ostalo"},fields:{title:{heading:"Ime kartice",options:{standard:"standardno",hidden:"skrito",custom:"po meri"},custom_title:"Ime po želji"},discover_existing:{heading:"Prikaži vse urnike",description:"Tole nastavi parameter 'discover existing'. Prej kreirani urniki bodo samodejno dodani v kartico. "},time_step:{heading:"Časovni korak",description:"Ločljivost (v minutah) za kreiranje urnikov"},sort_by:{heading:"Možnosti sortiranja",description:"Zaporedje, po katerem se prikažejo urniki na kartici",options:{relative_time:"Preostali čas do naslednje akcije",title:"Prikazano ime urnika",state:"Prikaži aktivne urnike na vrhu"}},display_format_primary:{heading:"Prikazane primarne informacije",description:"Nastavite, kaj se prikazuje v pregledu urnikov",options:{default:"Ime urnika",entity_action:"Povzetek operacije"}},display_format_secondary:{heading:"Prikazane sekundarne informacije",description:"Nastavite, katere dodatne informacije želite imeti prikazane v pregledu",options:{relative_time:"Preostali čas do naslednje akcije",time:"Nastavljen čas za naslednjo akcijo",days:"Katere dni/kdaj se sproži akcija",additional_tasks:"Število dodatnih opravil"}},show_header_toggle:{heading:"Prikaži glavo",description:"Na vrhu prikaže stikalo, s katerim lahko omogočite/izključite vse entitete naenkrat"},tags:{heading:"Tag-i",description:"Uporabite tag-e za ločevanje urnikov med več karticami"},entities:{heading:"Vključene entitete",description:"Izberite entitete, katere želike krmiliti s tem urnikom. Lahko kliknete na skupino, da jo odprete. Vedite, da lahko nekatere entitete (npr. senzorje) uporabite samo v pogojih, ne pa za akcije.",included_number:"{number}/{total} izbranih"}}}}},ts={services:Xi,domains:Qi,ui:es},is={generic:{parameter_to_value:"{parameter} до {value}",action_with_parameter:"{action} з {parameter}"},climate:{set_temperature:"встановити температуру[ to {temperature}]",set_temperature_hvac_mode_heat:"нагрів[ to {temperature}]",set_temperature_hvac_mode_cool:"охолодження[ to {temperature}]",set_temperature_hvac_mode_heat_cool:"regulate[ to {target_temp_low} - {target_temp_high}]",set_hvac_mode:"встановити режим[ to {hvac_mode}]",set_preset_mode:"вибрати пресет[ to {preset_mode}]",set_fan_mode:"set fan mode[ to {fan_mode}]"},cover:{close_cover:"закрити",open_cover:"відкрити",set_cover_position:"встановити позицію[ to {position}]",set_cover_tilt_position:"set tilt position[ to {tilt_position}]"},fan:{set_speed:"встановити швидкість[ to {speed}]",set_direction:"встановити напрямок[ to {direction}]",oscillate:"встановити коливання[ to {oscillate}]"},humidifier:{set_humidity:"встановити вологість[ to {humidity}]",set_mode:"встановити режим[ to {mode}]"},input_number:{set_value:"встановити значення[ to {value}]"},input_select:{select_option:"встановити опцію[ {option}]"},select:{select_option:"встановити опцію[ {option}]"},light:{turn_on:"увімкнути[ з {brightness} якскравістю]"},media_player:{select_source:"вибрати джерело[ {source}]"},notify:{notify:"send notification"},script:{script:"виконати"},vacuum:{start_pause:"старт / пауза"},water_heater:{set_operation_mode:"встановити режим[ to {operation_mode}]",set_away_mode:"встановити режим Не вдома"}},ss={alarm_control_panel:"панель керування сигналізацією",binary_sensor:"binary sensors",climate:"клімат",cover:"жалюзі",fan:"вентилятори",group:"групи",humidifier:"зволожувачі",input_boolean:"логічні",input_number:"числові",input_select:"списки",light:"освітлення",lock:"замки",media_player:"медіаплеєри",notify:"notification",switch:"вимикачі",vacuum:"пилососи",water_heater:"водонагрівачі"},as={components:{date:{day_types_short:{daily:"щоденно",workdays:"робочі дні",weekend:"вихідні"},day_types_long:{daily:"кожного дня",workdays:"в робочі дні",weekend:"по вихідних"},days:"дні",tomorrow:"завтра",repeated_days:"кожні {days}",repeated_days_except:"кожного дня окрім {excludedDays}",days_range:"з {startDay} до {endDay}",next_week_day:"наступної {weekday}"},time:{absolute:"о {time}",interval:"з {startTime} до {endTime}",at_midnight:"опівночі",at_noon:"опівдні",at_sun_event:"о {sunEvent}"}},dialog:{enable_schedule:{title:"Завершіть зміни",description:"Розклад, який було змінено, наразі вимкнено, чи потрібно його ввімкнути?"},confirm_delete:{title:"Видалити сутність?",description:"Ви дійсно бажаєте видалити цю сутність?"}},panel:{common:{title:"Планувальник"},overview:{no_entries:"Елементи відсутні",backend_error:"Не вдалося підключитися до компонента планувальника. Перш ніж використовувати цю карту, її потрібно встановити як інтеграцію.",excluded_items:"{number} виключено {if number is 1} елемент {else} елементів",hide_excluded:"сховати виключені елементи",additional_tasks:"{number} більше {if number is 1} завдання {else} завдань"},entity_picker:{no_groups_defined:"Немає визначених груп",no_group_selected:"Спершу виберіть групу",no_entities_for_group:"В даній групі відсутні елементи",no_entity_selected:"Спершу виберіть елемент",no_actions_for_entity:"Немає дій для цього елемента",make_scheme:"створити схему",multiple:"Декілька"},time_picker:{no_timeslot_selected:"Спершу виберіть часовий проміжок",time_scheme:"Cхему",time_input_mode:"Time control mode"},conditions:{equal_to:"дорівнює",unequal_to:"не рівне",all:"всі",any:"будь-яке",no_conditions_defined:"Не визначені умови",track_conditions:"Re-evaluate when conditions change"},options:{repeat_type:"поведінка після спрацювання",period:"період"}}},os={services:is,domains:ss,ui:as},ns={generic:{parameter_to_value:"{parameter} 至 {value}",action_with_parameter:"{action} 使用 {parameter}"},climate:{set_temperature:"设定温度[ 至 {temperature}]",set_temperature_hvac_mode_heat:"制热模式[ 至 {temperature}]",set_temperature_hvac_mode_cool:"制冷模式[ 至 {temperature}]",set_temperature_hvac_mode_heat_cool:"调节[ 至 {target_temp_low} - {target_temp_high}]",set_hvac_mode:"设定模式[ 为 {hvac_mode}]",set_preset_mode:"设定预设模式[ 为 {preset_mode}]",set_fan_mode:"set fan mode[ to {fan_mode}]"},cover:{close_cover:"关闭",open_cover:"打开",set_cover_position:"设定位置[ 至 {position}]",set_cover_tilt_position:"设定倾斜位置[ 至 {tilt_position}]"},fan:{set_speed:"设定风速[ 至 {speed}]",set_direction:"设定方向[ 至 {direction}]",oscillate:"设置摇摆[ 至 {oscillate}]"},humidifier:{set_humidity:"设定湿度[ 至 {humidity}]",set_mode:"设定模式[ 为 {mode}]"},input_number:{set_value:"设定数值[ 至 {value}]"},input_select:{select_option:"选择选项[ {option}]"},select:{select_option:"选择选项[ {option}]"},light:{turn_on:"打开[ 并设定亮度为 {brightness}]"},media_player:{select_source:"选择播放源[ {source}]"},notify:{notify:"发送通知"},script:{script:"执行"},vacuum:{start_pause:"开始 / 暂停"},water_heater:{set_operation_mode:"设定模式[ 为 {operation_mode}]",set_away_mode:"设定离开模式"}},rs={alarm_control_panel:"警戒控制面板",binary_sensor:"binary sensors",climate:"空调/地暖",cover:"窗帘",fan:"风扇/空气净化器",group:"实体组",humidifier:"空气加湿器",input_boolean:"输入二元选择器",input_number:"输入数值",input_select:"输入选择",light:"灯具",lock:"门锁",media_player:"媒体播放器",notify:"notification",switch:"开关",vacuum:"扫地机/吸尘器",water_heater:"热水器"},ls={components:{date:{day_types_short:{daily:"每日",workdays:"工作日",weekend:"周末"},day_types_long:{daily:"每一天",workdays:"在工作日",weekend:"在周末"},days:"天",tomorrow:"明天",repeated_days:"每 {days}",repeated_days_except:"每天，除了 {excludedDays}",days_range:"从 {startDay} 至 {endDay}",next_week_day:"下{weekday}"},time:{absolute:"在 {time}",interval:"从 {startTime} 至 {endTime}",at_midnight:"在午夜",at_noon:"在正午",at_sun_event:"在 {sunEvent}"}},dialog:{enable_schedule:{title:"完成修改",description:"已更改的计划当前已禁用，是否应该启用？"},confirm_delete:{title:"是否删除实体？",description:"您确定要删除此实体吗？"}},panel:{common:{title:"计划任务"},overview:{no_entries:"无事项",backend_error:"计划任务组件关联失败。本卡片使用前，需先安装计划任务组件和集成.",excluded_items:"{number} 除外 {if number is 1} 事项 {else} 事项",hide_excluded:"隐藏除外事项",additional_tasks:"{number} 更多 {if number is 1} 任务 {else} 任务"},entity_picker:{no_groups_defined:"未添加需执行计划任务的群组",no_group_selected:"请选择群组",no_entities_for_group:"群组不含实体",no_entity_selected:"请选择实体",no_actions_for_entity:"该实体不含可执行的动作",make_scheme:"制定计划",multiple:"多选"},time_picker:{no_timeslot_selected:"请选择时间段",time_scheme:"议程",time_input_mode:"Time control mode"},conditions:{equal_to:"是",unequal_to:"非",all:"全部",any:"任一",no_conditions_defined:"未定义条件",track_conditions:"Re-evaluate when conditions change"},options:{repeat_type:"触发后的行为",period:"时期"}}},cs={services:ns,domains:rs,ui:ls};const ds={cs:kt,de:Ot,en:At,es:Lt,et:Vt,es_419:Lt,fi:Yt,fr:Jt,he:ii,hu:ri,it:hi,nb:wi,nl:gi,nn:wi,no:wi,pl:zi,pt:Mi,"pt-BR":Ii,ro:Ui,sk:Object.freeze({__proto__:null,services:Gi,domains:Zi,ui:Ki,default:Ji}),sl:Object.freeze({__proto__:null,services:Xi,domains:Qi,ui:es,default:ts}),ru:Wi,uk:Object.freeze({__proto__:null,services:is,domains:ss,ui:as,default:os}),"zh-Hans":Object.freeze({__proto__:null,services:ns,domains:rs,ui:ls,default:cs})};function us(e,t,i="",s=""){let a;try{if("test"==t.language)return"TRANSLATED";a=e.split(".").reduce((e,t)=>e[t],ds[t.language]),a||(a=e.split(".").reduce((e,t)=>e[t],ds.en))}catch(t){try{a=e.split(".").reduce((e,t)=>e[t],ds.en)}catch(e){a=""}}if(""!==i&&""!==s&&a){Array.isArray(i)||(i=[i]),Array.isArray(s)||(s=[s]);for(let e=0;e<i.length;e++){a=a.replace(String(i[e]),String(s[e]));const t=a.match(/\{if ([a-z]+) is ([^\}]+)\}\ ?([^\{]+)\ ?\{else\}\ ?([^\{]+)/i);if(t&&String(i[e]).replace(/[\{\}']+/g,"")==t[1]){a=String(s[e])==t[2]?a.replace(t[0],t[3]):a.replace(t[0],t[4])}}}return a}const hs=r`
    .card-header {
      display: flex;
      justify-content: space-between;
    }
    .card-header .name {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      display: flex;
    }
    .card-header ha-switch {
      padding: 5px;
    }
    .card-header ha-icon-button {
        position: absolute;
        right: 6px;
        top: 6px;
    }
    .card-content {
      flex: 1;
    }
    .card-content > *:first-child {
      margin-top: 0;
    }
    .card-content > *:last-child {
      margin-bottom: 0;
    }
    div.text-field, div.secondary {
      color: var(--secondary-text-color);
    }
    .disabled {
      color: var(--disabled-text-color);
    }
    div.header {
      color: var(--secondary-text-color);
      text-transform: uppercase;
      font-weight: 500;
      font-size: 12px;
      margin: 20px 0px 0px 0px;
      display: flex;
      flex-direction: row;
    }
    div.header .switch {
      text-transform: none;
      font-weight: normal;
      font-size: 14px;
      display: flex;
      flex-grow: 1;
      justify-content: flex-end;
    }
    div.header ha-switch {
      display: flex;
      align-self: center;
      margin: 0px 8px;
      line-height: 24px;
    }
    mwc-button {
      margin: 2px 0px;
    }
    mwc-button.active {
      background: var(--primary-color);
      --mdc-theme-primary: var(--text-primary-color);
      border-radius: 4px;
    }      
    mwc-button ha-icon {
      margin-right: 11px;
    }
    mwc-button.warning {
      --mdc-theme-primary: var(--error-color);
    }
    div.checkbox-container {
      display: grid;
      grid-template-columns: max-content 1fr max-content;
      grid-template-rows: min-content;
      grid-template-areas: "checkbox slider value";
      grid-gap: 0px 10px;
    }
    div.checkbox-container div.checkbox {
      grid-area: checkbox;
      display: flex;
      align-items: center;x
    }
    div.checkbox-container div.slider {
      grid-area: slider;
      display: flex;
      align-items: center;
    }
    div.checkbox-container div.value {
      grid-area: value;
      min-width: 40px;
      display: flex;
      align-items: center;
    }
    a {
      color: var(--primary-color);
    }
    a:visited {
      color: var(--accent-color);
    }
  `,ms=e=>{class i extends e{connectedCallback(){super.connectedCallback(),this.__checkSubscribed()}disconnectedCallback(){if(super.disconnectedCallback(),this.__unsubs){for(;this.__unsubs.length;){const e=this.__unsubs.pop();e instanceof Promise?e.then(e=>e()):e()}this.__unsubs=void 0}}updated(e){super.updated(e),e.has("hass")&&this.__checkSubscribed()}hassSubscribe(){return[]}__checkSubscribed(){void 0===this.__unsubs&&this.isConnected&&void 0!==this.hass&&(this.__unsubs=this.hassSubscribe())}}return t([ne({attribute:!1})],i.prototype,"hass",void 0),i},ps=e=>e.callWS({type:"scheduler"}),_s=(e,t)=>e.callWS({type:"scheduler/item",schedule_id:t}),vs=e=>e.callWS({type:"scheduler/tags"});function gs(e,t){const i=I`
    <b>Something went wrong!</b><br />
    ${e.body.message}<br /><br />
    ${e.error}<br /><br />
    Please <a href="https://github.com/nielsfaber/scheduler-card/issues">report</a> the bug.
  `;Ne(t,"show-dialog",{dialogTag:"dialog-error",dialogImport:()=>Promise.resolve().then((function(){return lo})),dialogParams:{error:i}})}function fs(e,t){let i=!1;if(e.match(/^[a-z0-9_\.]+$/))i=!e.includes(".")&&t.includes(".")?e==De(t):e==t;else try{if(e.startsWith("/")&&e.endsWith("/")||-1!==e.indexOf("*")){e.startsWith("/")||(e=`/^${e=e.replace(/\./g,".").replace(/\*/g,".*")}$/`);i=new RegExp(e.slice(1,-1)).test(t)}}catch(e){}return i}function ys(e,t){var i;const s=(e,t)=>((t.include||[]).some(t=>fs(t,e))||Object.keys(t.customize||{}).some(t=>fs(t,e)))&&!(t.exclude||[]).some(t=>fs(t,e));return(null===(i=t.groups)||void 0===i?void 0:i.some(t=>s(e,t)))||s(e,t)}const bs={alarm_control_panel:"mdi:alarm-light-outline",automation:"mdi:playlist-play",binary_sensor:"mdi:radiobox-blank",button:"mdi:gesture-tap-button",calendar:"mdi:calendar",camera:"mdi:camera",climate:"mdi:home-thermometer-outline",cover:"mdi:window-shutter",device_tracker:"mdi:account",fan:"mdi:fan",group:"mdi:google-circles-communities",humidifier:"mdi:air-humidifier",input_boolean:"mdi:drawing",input_number:"mdi:ray-vertex",input_select:"mdi:format-list-bulleted",select:"mdi:format-list-bulleted",input_text:"mdi:textbox",light:"mdi:lightbulb-outline",lock:"mdi:lock-open-outline",media_player:"mdi:cast-connected",number:"mdi:ray-vertex",notify:"mdi:message-text-outline",person:"mdi:account-outline",proximity:"mdi:map-marker-distance",remote:"mdi:remote",scene:"mdi:palette-outline",script:"mdi:file-document",sensor:"mdi:eye",sun:"mdi:white-balance-sunny",switch:"mdi:flash",timer:"mdi:timer",vacuum:"mdi:robot-vacuum",water_heater:"mdi:water-boiler"},ks=(e,t)=>{const i=De(e),s=t.states[e];switch(i){case"binary_sensor":return(e=>e&&We(Object.assign(Object.assign({},e),{state:"off"}))||"mdi:radiobox-blank")(s);case"cover":return((e,t)=>{const i="closed"==t;switch(e.attributes.device_class){case"garage":return i?"mdi:garage":"mdi:garage-open";case"door":return i?"mdi:door-closed":"mdi:door-open";case"blind":return i?"mdi:blinds":"mdi:blinds-open";case"window":return i?"mdi:window-closed":"mdi:window-open";default:return i?"mdi:window-shutter":"mdi:window-shutter-open"}})(s);case"sensor":return(e=>{var t;switch(e.attributes.device_class||""){case"humidity":return"mdi:water-percent";case"illuminance":return"mdi:brightness-5";case"temperature":return"mdi:thermometer";case"power":return"mdi:flash";case"pressure":return"mdi:gauge";case"signal_strength":return"mdi:wifi";default:return(null===(t=e.attributes.unit_of_measurement)||void 0===t?void 0:t.includes("°"))?"mdi:thermometer":"mdi:eye"}})(s);default:return i in bs?bs[i]:"mdi:folder-outline"}};function ws(e,t,i=!1){const s=(e,t)=>Object.keys(t.variables||{}).includes(e)&&t.variables[e].type==qe.Level&&t.variables[e].optional;if(e.service!==t.service)return!1;const a=Object.keys(e.service_data||{}),o=Object.keys(e.variables||{}),n=Object.keys(t.service_data||{}),r=Object.keys(t.variables||{}),l=[...new Set([...a,...o])],c=[...new Set([...n,...r])];return[...new Set([...l,...c])].every(d=>{if(!l.includes(d))return s(d,t);if(!c.includes(d))return s(d,e);if(a.filter(e=>!o.includes(e)).includes(d)&&n.filter(e=>!r.includes(e)).includes(d))return ot(e.service_data[d],t.service_data[d]);if(o.includes(d)&&r.includes(d))return!0;if(!i)return!1;const u=a.includes(d)?e.service_data[d]:t.service_data[d],h=o.includes(d)?e.variables[d]:t.variables[d];return h.type===qe.List?h.options.some(e=>e.value===u):h.type===qe.Level?!isNaN(u):h.type==qe.Text})}const xs=(e,t,i)=>{if("number"==typeof t)return t;if(!at(e)||!at(e.attributes[t]))return i;const s=e.attributes[t];return"number"==typeof s?s:i},$s=(e,t,i=[])=>{if(!at(e)||!at(e.attributes[t]))return i;const s=e.attributes[t];return Array.isArray(s)?s.map(e=>String(e)):i},js=(e,t,i="")=>{if(!at(e)||!at(e.attributes[t]))return i;const s=e.attributes[t];return"string"==typeof s?s:i},Os=(e,t,i)=>{const s="template"in e&&at(e.template)?Object.assign(Object.assign({},tt(e,"template")),e.template(t,i)):Object.assign({},e);return"options"in s?zs(s,t):"min"in s&&"max"in s?Ss(s,t):s},zs=(e,t)=>{if("string"==typeof e.options){return{options:$s(t,e.options).map(e=>Object({value:e}))}}return Array.isArray(e.options)?{options:e.options.map(e=>Object({value:e}))}:{options:Object.entries(e.options).map(([e,t])=>Object(Object.assign({value:e},t)))}},Ss=(e,t)=>{let i=et(e,["unit","optional","scale_factor"]);return at(e.min)&&(i=Object.assign(Object.assign({},i),{min:xs(t,e.min)})),at(e.max)&&(i=Object.assign(Object.assign({},i),{max:xs(t,e.max)})),at(e.step)&&(i=Object.assign(Object.assign({},i),{step:xs(t,e.step)})),at(e.unit)&&"unit_of_measurement"==e.unit&&(i=Object.assign(Object.assign({},i),{unit:js(t,e.unit,"")})),i};function Es(...e){const t=e.map(e=>e.min).filter(at),i=e.map(e=>e.max).filter(at),s=e.map(e=>e.step).filter(at),a=st(e.map(e=>e.scale_factor).filter(at)),o=e.map(e=>e.optional).filter(at),n=e.map(e=>e.unit).filter(at),r=e.map(e=>e.name).filter(at),l=s.length?Math.max(...s):1,c=e=>(e=Math.round(e/l)*l,parseFloat(e.toPrecision(12)));return{type:qe.Level,min:c(t.length?Math.min(...t):0),max:c(i.length?Math.max(...i):255),step:l,scale_factor:1==a.length?a[0]:1,optional:o.length&&o.every(e=>e)||!1,unit:n.length?n.reduce((e,t)=>t):"",name:r.length?r.reduce((e,t)=>t):void 0}}function Cs(e,t){let i=Number(e);return isNaN(i)?"":(1!=t.scale_factor&&(i/=t.scale_factor,i=Math.round(i/t.step)*t.step,i=parseFloat(i.toPrecision(12)),i>t.max?i=t.max:i<t.min&&(i=t.min)),`${i}${t.unit}`)}const As=e=>{if(!e)return 0;switch(De(e.entity_id)){case"light":return(e=>{if(!e||!Array.isArray(e))return 0;let t=e.map(e=>{switch(e){case"brightness":case"color_temp":case"hs":case"xy":case"rgb":case"rgbw":case"rgbww":return 1;case"unknown":case"onoff":case"white":default:return 0}});return t=st(t),t.reduce((e,t)=>e|t,0)})(e.attributes.supported_color_modes);default:return e.attributes.supported_features||0}},Ms=(e,t)=>{const i=t.config.unit_system.temperature,s=i.includes("F");return Es({min:xs(e,"min_temp",s?45:7),max:xs(e,"max_temp",s?95:35),step:xs(e,"target_temp_step",s?1:.1),unit:i})},Ds={alarm_control_panel:{alarm_disarm:{},alarm_arm_home:{supported_feature:1},alarm_arm_away:{supported_feature:2},alarm_arm_night:{supported_feature:4},alarm_arm_custom_bypass:{supported_feature:16}},automation:{turn_on:{},turn_off:{},trigger:{}},button:{press:{}},climate:{turn_off:{condition:e=>!$s(e,"hvac_modes").includes("off")},_turn_off:{service:"set_hvac_mode",service_data:{hvac_mode:"off"},condition:e=>$s(e,"hvac_modes").includes("off")},set_temperature:{variables:{temperature:{}},supported_feature:1,condition:e=>!["heat","cool","heat_cool"].some(t=>$s(e,"hvac_modes").includes(t))},heat:{service:"set_temperature",service_data:{hvac_mode:"heat"},variables:{temperature:{template:Ms}},condition:e=>$s(e,"hvac_modes").includes("heat")},cool:{service:"set_temperature",service_data:{hvac_mode:"cool"},variables:{temperature:{template:Ms}},condition:e=>$s(e,"hvac_modes").includes("cool")},regulate:{service:"set_temperature",service_data:{hvac_mode:"heat_cool"},variables:{target_temp_low:{template:Ms},target_temp_high:{template:Ms}},condition:e=>$s(e,"hvac_modes").includes("heat_cool")},set_mode:{service:"set_hvac_mode",variables:{hvac_mode:{template:e=>{xs(e,"supported_features");let t=$s(e,"hvac_modes");return t=t.filter(e=>!["heat","cool","heat_cool","off"].includes(e)),{options:t}}}}},set_preset:{service:"set_preset_mode",variables:{preset_mode:{options:"preset_modes"}},supported_feature:16},set_fan_mode:{service:"set_fan_mode",variables:{fan_mode:{options:"fan_modes"}}}},cover:{close:{service:"close_cover",supported_feature:2},open:{service:"open_cover",supported_feature:1},set_position:{service:"set_cover_position",variables:{position:{min:0,max:100,step:1,unit:"%"}},supported_feature:4},set_tilt_position:{service:"set_cover_tilt_position",variables:{tilt_position:{min:0,max:100,step:1,unit:"%"}},supported_feature:128}},fan:{turn_on:{},turn_off:{},set_percentage:{service:"set_percentage",variables:{percentage:{min:0,max:100,step:1,unit:"%"}},supported_feature:1},set_oscillation:{service:"oscillate",variables:{oscillating:{options:["True","False"]}},supported_feature:2},set_direction:{variables:{direction:{options:["forward","reverse"]}},supported_feature:4},set_preset:{service:"set_preset_mode",variables:{preset_mode:{options:"preset_modes"}},supported_feature:8}},humidifier:{turn_on:{},turn_off:{},set_humidity:{variables:{humidity:{min:"min_humidity",max:"max_humidity",step:1,unit:"%"}}},set_mode:{variables:{mode:{options:"available_modes"}},supported_feature:1}},input_boolean:{turn_on:{},turn_off:{}},input_number:{set_value:{variables:{value:{min:"min",max:"max",step:"step",unit:"unit_of_measurement"}}}},input_select:{select_option:{variables:{option:{options:"options"}}}},light:{turn_on:{condition:e=>0==As(e)},_turn_on:{variables:{brightness:{min:0,max:100,step:1,unit:"%",scale_factor:2.55,optional:!0}},condition:e=>0!=As(e)},turn_off:{}},lock:{lock:{},unlock:{}},media_player:{turn_on:{supported_feature:128},turn_off:{supported_feature:256},select_source:{variables:{source:{options:"source_list"}},supported_feature:2048}},notify:{"{entity_id}":{variables:{title:{},message:{multiline:!0}}}},number:{set_value:{variables:{value:{min:"min",max:"max",step:"step"}}}},scene:{turn_on:{}},script:{turn_on:{},turn_off:{},"{entity_id}":{}},select:{select_option:{variables:{option:{options:"options"}}}},switch:{turn_on:{},turn_off:{}},vacuum:{turn_on:{supported_feature:1},start:{supported_feature:8192},play_pause:{supported_feature:4}},water_heater:{set_temperature:{variables:{temperature:{template:Ms}}},set_mode:{service:"set_operation_mode",variables:{operation_mode:{options:"operation_list"}},supported_feature:2},set_away_mode:{variables:{away_mode:{options:["on","off"]}},supported_feature:4}}};function Ts(...e){const t=e[0].options.map(e=>e.value).filter(t=>e.map(e=>e.options).every(e=>e.map(e=>e.value).includes(t))).map(t=>{const i=e.map(e=>e.options.find(e=>e.value==t)).filter(at).map(e=>e.name).filter(at),s=e.map(e=>e.options.find(e=>e.value==t)).filter(at).map(e=>e.icon).filter(at);return{value:t,name:i.length?i.reduce((e,t)=>t):void 0,icon:s.length?s.reduce((e,t)=>t):void 0}}),i=e.map(e=>e.name).filter(at);return{type:qe.List,name:i.length?i.reduce((e,t)=>t):void 0,options:t}}function Ns(e,t){const i=t.options.find(t=>t.value==e);return i?i.name||i.value:""}function Ls(...e){const t=e.map(e=>e.name).filter(at);return{type:qe.Text,name:t.length?t.reduce((e,t)=>t):void 0,multiline:e.some(e=>e.multiline)}}const Is={alarm_control_panel:{alarm_disarm:"ui.card.alarm_control_panel.disarm",alarm_arm_home:"ui.card.alarm_control_panel.arm_home",alarm_arm_away:"ui.card.alarm_control_panel.arm_away",alarm_arm_night:"ui.card.alarm_control_panel.arm_night",alarm_arm_custom_bypass:"ui.card.alarm_control_panel.arm_custom_bypass"},automation:{turn_on:"ui.card.vacuum.actions.turn_on",turn_off:"ui.card.vacuum.actions.turn_off",trigger:"ui.card.script.run"},button:{press:"ui.card.button.press"},climate:{turn_off:"ui.card.vacuum.actions.turn_off",heat:"services.climate.set_temperature_hvac_mode_heat",cool:"services.climate.set_temperature_hvac_mode_cool",regulate:"services.climate.set_temperature_hvac_mode_heat_cool",set_temperature:"services.climate.set_temperature",set_mode:"services.climate.set_hvac_mode",set_preset:"services.climate.set_preset_mode",set_fan_mode:"services.climate.set_fan_mode"},cover:{close:"services.cover.close_cover",open:"services.cover.open_cover",set_position:"services.cover.set_cover_position",set_tilt:"services.cover.set_cover_tilt_position"},fan:{turn_on:"ui.card.vacuum.actions.turn_on",turn_off:"ui.card.vacuum.actions.turn_off",set_speed:"services.fan.set_speed",set_oscillation:"services.fan.oscillate",set_direction:"services.fan.set_direction",set_preset:"services.climate.set_preset_mode"},humidifier:{turn_on:"ui.card.vacuum.actions.turn_on",turn_off:"ui.card.vacuum.actions.turn_off",set_humidity:"services.humidifier.set_humidity",set_mode:"services.humidifier.set_mode"},input_boolean:{turn_on:"ui.card.vacuum.actions.turn_on",turn_off:"ui.card.vacuum.actions.turn_off"},input_number:{set_value:"services.input_number.set_value"},input_select:{select_option:"services.input_select.select_option"},light:{turn_on:"ui.card.vacuum.actions.turn_on",turn_off:"ui.card.vacuum.actions.turn_off"},lock:{lock:"ui.card.lock.lock",unlock:"ui.card.lock.unlock"},media_player:{turn_on:"ui.card.vacuum.actions.turn_on",turn_off:"ui.card.vacuum.actions.turn_off",select_source:"services.media_player.select_source"},notify:{"{entity_id}":"services.notify.notify"},number:{set_value:"services.input_number.set_value"},scene:{turn_on:"ui.card.vacuum.actions.turn_on"},script:{turn_on:"ui.card.vacuum.actions.turn_on",turn_off:"ui.card.vacuum.actions.turn_off","{entity_id}":"services.script.script"},select:{select_option:"services.input_select.select_option"},switch:{turn_on:"ui.card.vacuum.actions.turn_on",turn_off:"ui.card.vacuum.actions.turn_off"},vacuum:{turn_on:"ui.card.vacuum.actions.turn_on",start:"ui.card.vacuum.start_cleaning",play_pause:"services.vacuum.start_pause"},water_heater:{set_temperature:"services.climate.set_temperature",set_mode:"services.water_heater.set_operation_mode",set_away_mode:"services.water_heater.set_away_mode"}},Ps=(e,t,i)=>{if(e in Is&&t in Is[e]){let s=Is[e][t];return s instanceof Function&&(s=s(t)),s.startsWith("services")?us(s,ut(i)):i.localize(s)}return t},qs=(e,t)=>{const i="close"==e;switch(null==t?void 0:t.attributes.device_class){case"garage":return i?"mdi:garage":"mdi:garage-open";case"door":return i?"mdi:door-closed":"mdi:door-open";case"blind":return i?"mdi:blinds":"mdi:blinds-open";case"window":return i?"mdi:window-closed":"mdi:window-open";default:return i?"mdi:window-shutter":"mdi:window-shutter-open"}},Rs={alarm_control_panel:{alarm_disarm:"mdi:lock-open-variant-outline",alarm_arm_home:"mdi:home-outline",alarm_arm_away:"mdi:exit-run",alarm_arm_night:"mdi:power-sleep",alarm_arm_custom_bypass:"mdi:shield-lock-outline"},automation:{turn_on:"mdi:power",turn_off:"mdi:power-off",trigger:"mdi:play"},button:{press:"mdi:gesture-tap-button"},climate:{turn_off:"mdi:power-off",heat:"mdi:fire",cool:"mdi:snowflake",regulate:"mdi:thermometer",set_temperature:"mdi:thermometer",set_mode:"mdi:cog-transfer-outline",set_preset:"mdi:cloud-download-outline",set_fan_mode:"mdi:fan"},cover:{close:qs,open:qs,set_position:"mdi:ray-vertex",set_tilt_position:"mdi:valve"},fan:{turn_on:"mdi:power",turn_off:"mdi:power-off",set_percentage:"mdi:weather-windy",set_oscillation:"mdi:arrow-left-right",set_direction:"mdi:cog-clockwise",set_preset_mode:"mdi:cloud-download-outline"},humidifier:{turn_on:"mdi:power",turn_off:"mdi:power-off",set_humidity:"mdi:water-percent",set_mode:"mdi:cog-transfer-outline"},input_boolean:{turn_on:"mdi:flash",turn_off:"mdi:flash-off"},input_number:{set_value:"mdi:counter"},input_select:{select_option:"mdi:counter"},light:{turn_on:"mdi:lightbulb",turn_off:"mdi:lightbulb-off"},lock:{lock:"mdi:lock-outline",unlock:"mdi:lock-open-variant-outline"},media_player:{turn_on:"mdi:power",turn_off:"mdi:power-off",select_source:"mdi:music-box-multiple-outline"},notify:{"{entity_id}":"mdi:message-alert"},number:{set_value:"mdi:counter"},scene:{turn_on:"mdi:play"},script:{turn_on:"mdi:flash",turn_off:"mdi:flash-off","{entity_id}":"mdi:play"},select:{select_option:"mdi:counter"},switch:{turn_on:"mdi:flash",turn_off:"mdi:flash-off"},vacuum:{turn_on:"mdi:power",start:"mdi:play-circle-outline",play_pause:"mdi:play-circule-outline"},water_heater:{set_temperature:"mdi:thermometer",set_mode:"mdi:cog-transfer-outline",set_away_mode:"mdi:car-traction-control"}},Vs=(e,t,i)=>{if(e in Rs&&t in Rs[e]){let s=Rs[e][t];return s instanceof Function&&(s=s(t,i)),s}return"flash"},Us={climate:{temperature:"ui.card.weather.attributes.temperature",target_temp_low:"ui.panel.lovelace.editor.card.generic.minimum",target_temp_high:"ui.panel.lovelace.editor.card.generic.maximum",hvac_mode:"ui.card.climate.operation",preset_mode:"ui.card.climate.preset_mode",fan_mode:"ui.card.climate.fan_mode"},cover:{position:"ui.card.cover.position",tilt_position:"ui.card.cover.tilt_position"},fan:{percentage:"ui.card.fan.speed",oscillating:"ui.card.fan.oscillate",direction:"ui.card.fan.direction",preset_mode:"ui.card.fan.preset_mode"},humidifier:{humidity:"ui.card.humidifier.humidity",mode:"ui.card.humidifier.mode"},input_number:{value:"ui.panel.config.helpers.types.input_number"},input_select:{option:"ui.components.dialogs.input_select.options"},light:{brightness:"ui.card.light.brightness"},media_player:{source:"ui.card.media_player.source"},notify:{title:"ui.panel.config.automation.editor.actions.type.device_id.extra_fields.title",message:"ui.panel.config.automation.editor.actions.type.device_id.extra_fields.message"},number:{value:"ui.panel.config.helpers.types.input_number"},select:{option:"ui.components.dialogs.input_select.options"},water_heater:{temperature:"ui.card.weather.attributes.temperature",operation_mode:"ui.card.water_heater.operation",away_mode:"ui.card.water_heater.away_mode"}},Hs=(e,t,i)=>e in Us&&t in Us[e]?i.localize(Us[e][t]):t,Fs={climate:{hvac_mode:{off:"component.climate.state._.off",heat:"component.climate.state._.heat",cool:"component.climate.state._.cool",heat_cool:"component.climate.state._.heat_cool",dry:"component.climate.state._.dry",fan_only:"component.climate.state._.fan_only"},preset_mode:{activity:"state_attributes.climate.preset_mode.activity",away:"state_attributes.climate.preset_mode.away",boost:"state_attributes.climate.preset_mode.boost",comfort:"state_attributes.climate.preset_mode.comfort",eco:"state_attributes.climate.preset_mode.eco",home:"state_attributes.climate.preset_mode.home",none:"state_attributes.climate.preset_mode.none",sleep:"state_attributes.climate.preset_mode.sleep"}},fan:{direction:{forward:"ui.card.fan.forward",reverse:"ui.card.fan.reverse"},oscillating:{True:"state.default.on",False:"state.default.off"}},humidifier:{mode:{auto:"state_attributes.humidifier.mode.auto",away:"state_attributes.humidifier.mode.away",baby:"state_attributes.humidifier.mode.baby",boost:"state_attributes.humidifier.mode.boost",comfort:"state_attributes.humidifier.mode.comfort",eco:"state_attributes.humidifier.mode.eco",home:"state_attributes.humidifier.mode.home",normal:"state_attributes.humidifier.mode.normal",sleep:"state_attributes.humidifier.mode.sleep"}},water_heater:{operation_mode:{off:"component.water_heater.state._.off",eco:"component.water_heater.state._.eco",electric:"component.water_heater.state._.electric",gas:"component.water_heater.state._.gas",heat_pump:"component.water_heater.state._.heat_pump",high_demand:"component.water_heater.state._.high_demand",performance:"component.water_heater.state._.performance"},away_mode:{on:"state.default.on",off:"state.default.off"}}},Bs=(e,t,i,s)=>e in Fs&&t in Fs[e]&&i in Fs[e][t]?s.localize(Fs[e][t][i]):i,Ys={climate:{hvac_mode:{off:"mdi:power-off",heat:"mdi:fire",cool:"mdi:snowflake",heat_cool:"mdi:thermometer",auto:"mdi:autorenew",dry:"mdi:water-percent",fan_only:"mdi:fan"},preset_mode:{activity:"mdi:account-alert-outline",away:"mdi:car-traction-control",boost:"mdi:rocket-launch-outline",comfort:"mdi:car-seat-cooler",eco:"mdi:leaf",home:"mdi:home-outline",none:"mdi:cancel",sleep:"mdi:sleep"}},fan:{direction:{forward:"mdi:autorenew",reverse:"mdi:sync"},oscillating:{True:"mdi:toggle-switch-outline",False:"mdi:toggle-switch-off-outline"}},humidifier:{mode:{auto:"mdi:autorenew",away:"mdi:car-traction-control",baby:"mdi:baby-bottle-outline",boost:"mdi:rocket-launch-outline",comfort:"mdi:car-seat-cooler",eco:"mdi:leaf",home:"mdi:home-outline",normal:"mdi:account-outline",sleep:"mdi:sleep"}},water_heater:{operation_mode:{off:"mdi:power-off",eco:"mdi:leaf",electric:"mdi:lightning-bolt",gas:"mdi:fire",heat_pump:"mdi:hvac",high_demand:"mdi:water-plus-outline",performance:"mdi:rocket-launch-outline"},away_mode:{on:"mdi:toggle-switch-outline",off:"mdi:toggle-switch-off-outline"}}},Ws=(e,t,i)=>{if(e in Ys&&t in Ys[e]&&i in Ys[e][t])return Ys[e][t][i]};function Gs(e){if(Object.keys(e||{}).length)return Object.entries(e).map(([e,t])=>"options"in t?[e,Ts(t)]:"min"in t||"max"in t?[e,Es(t)]:[e,Ls(t)]).reduce((e,[t,i])=>i?Object.assign(e,{[t]:i}):e,{})}function Zs(...e){const t=st(e.map(e=>e.type).filter(at));return t.length?t.length>1?void 0:t[0]==qe.Level?Es(...e):t[0]==qe.List?Ts(...e):Ls(...e):(e=Object.values(Gs(Object.assign({},...e))),Zs(...e))}function Ks(e){if(1==e.length)return e[0];let t=e[0].filter(t=>e.slice(1).every(e=>e.some(e=>ws(t,e))));return t=t.map(t=>{const i=Object.entries(t.variables||{}).map(([i,s])=>{const a=e.map(e=>e.find(e=>ws(e,t)));if(!a.every(e=>e&&e.variables&&i in e.variables))return[i,void 0];const o=a.map(e=>e.variables[i]);return o.every(e=>s.type==e.type)?[i,Zs(...o)]:[i,void 0]}).reduce((e,[t,i])=>i?Object.assign(e,{[t]:i}):e,{});if(!Object.values(i).find(e=>e.type==qe.List&&!e.options.length))return t=Object.assign(Object.assign({},t),{variables:i})}).filter(at),t}const Js=(e,t,i=!0)=>{const s=De(e);if("group"==s){const s=t.states[e],a=$s(s,"entity_id");if(!a.length)return[];const o=a.map(e=>Js(e,t,i));return function(e,t,i){const s=t&&t.attributes.entity_id&&Array.isArray(t.attributes.entity_id)?t.attributes.entity_id:[];return i=i.map((t,i)=>{const a=e.states[s[i]],o=As(a);return t=t.filter(e=>!e.supported_feature||e.supported_feature&o).map(e=>tt(e,"supported_feature"))}),[...new Set(s.map(e=>De(e)))].length>1&&(i=i.map(e=>e.map(e=>"turn_on"==Te(e.service)||"turn_off"==Te(e.service)?Object.assign(Object.assign({},e),{service:"homeassistant."+Te(e.service),icon:"turn_on"==Te(e.service)?"flash":"flash-off"}):e))),i.length?Ks(i):[]}(t,s,o)}return Object.keys(Ds).includes(s)?Object.entries(Ds[s]).map(([s,a])=>Xs(s,a,e,t,i)).filter(at):[]},Xs=(e,t,i,s,a)=>{const o=De(i),n=s.states[i];if(t.condition&&!t.condition(n))return;e.startsWith("_")&&(e=e=e.substring(1));let r={name:"",icon:"flash",service:t.service?`${o}.${t.service}`:`${o}.${e}`,service_data:t.service_data};if(t.supported_feature){const e=t.supported_feature instanceof Function?t.supported_feature(n):t.supported_feature;r=Object.assign(Object.assign({},r),{supported_feature:e})}if(r=Object.assign(Object.assign({},r),{name:Ps(o,e,s),icon:Vs(o,e,n)}),Object.keys(t.variables||{}).forEach(e=>{r=Object.assign(Object.assign({},r),{variables:Object.assign(Object.assign({},r.variables),{[e]:Qs(o,e,t.variables[e],n,s,a)})})}),Object.values(r.variables||{}).some(e=>e.type==qe.List&&!e.options.length))return;const l=r.service.match(/^[a-z_]+\.(\{entity_id\})$/);return l&&(r=Object.assign(Object.assign({},r),{service:r.service.replace(l[1],Te(i))})),r},Qs=(e,t,i,s,a,o)=>{let n=Os(i,s,a);if(n=Object.assign(Object.assign({},n),{name:Hs(e,t,a)}),"options"in n&&at(n.options)){let i=[...n.options];if(!o){const s=((e,t)=>e in Fs&&t in Fs[e]?Object.keys(Fs[e][t]):[])(e,t).filter(e=>!i.map(e=>e.value).includes(e));i=[...i,...s.map(e=>Object({value:e}))]}return i=i.map(i=>Object.assign(i,{name:i.name?i.name:Bs(e,t,i.value,a),icon:i.icon?i.icon:Ws(e,t,i.value)})),n=Object.assign(Object.assign({},n),{options:i}),Ts(n)}return"min"in n&&at(n.min)&&"max"in n&&at(n.max)?Es(n):Ls(n)},ea=/\{([^\}]+)\}/,ta=/\[([^\]]+)\]/;function ia(e){let t=e.name;t||(t=lt(Te(e.service)));const i=(t,s=0)=>{const a=ea.exec(t);if(!a)return t;const o=a[1];if(!Object.keys(e.service_data||{}).includes(o))return t.replace(a[0],"");let n;return n=Object.keys(e.variables||{}).includes(o)?e.variables[o].type==qe.Level?Cs(e.service_data[o],e.variables[o]):e.variables[o].type==qe.List?Ns(e.service_data[o],e.variables[o]):function(e,t){return String(e)}(e.service_data[o],e.variables[o]):e.service_data[o],t=t.replace(a[0],n),s>=100?t:i(t)},s=(t,a=0)=>{const o=ta.exec(t);if(!o)return t;const n=o[1].match(ea)[1];return t=Object.keys(e.service_data||{}).includes(n)?t.replace(o[0],i(o[1])):t.replace(o[0],""),a>=100?t:s(t)};return t=s(t),t=i(t),t||""}function sa(e,t,i){if(Array.isArray(e)){return Ks(e.map(e=>sa(e,t,i)))}const s=t.states[e];let a=i.standard_configuration?Js(e,t):[];const o=it(Object.entries(i.customize).filter(([t])=>fs(t,e)).sort((e,t)=>t[0].length-e[0].length).map(([,e])=>e.exclude_actions).filter(at));o.length&&(a=a.filter(e=>!o.some(t=>{return(i=ia(e),i.replace(/_/g," ").trim().toLowerCase()).includes(t);var i})));const n=it(Object.entries(i.customize).filter(([t])=>fs(t,e)).sort((e,t)=>t[0].length-e[0].length).map(([,e])=>e.actions).filter(at));n.length&&n.forEach(s=>{De(s.service).length||(s=Object.assign(Object.assign({},s),{service:De(e)+"."+Te(s.service)})),s.service_data&&(s=Object.assign(Object.assign({},s),{service_data:tt(s.service_data,"entity_id")}));let o=a.findIndex(e=>ws(e,s));if(o<0){const n=(i.standard_configuration?Js(e,t,!1):[]).find(e=>ws(e,s));n&&(a=[...a,n],o=a.length-1)}if(o>=0){if(Object.assign(a,{[o]:Object.assign(Object.assign({},a[o]),tt(s,"variables"))}),Object.keys(s.variables||{}).length){let e=a[o].variables||{};e=Object.entries(e).map(([e,t])=>Object.keys(s.variables).includes(e)?[e,Object.assign(Object.assign({},t),s.variables[e])]:[e,s.variables[e]]).reduce((e,[t,i])=>i?Object.assign(e,{[t]:i}):e,{});const t=Object.keys(s.variables).filter(t=>!Object.keys(e).includes(t));e=Object.assign(Object.assign({},e),Gs(et(s.variables,t))),Object.assign(a,{[o]:Object.assign(Object.assign({},a[o]),{variables:e})})}}else s=Object.assign(Object.assign({},s),{variables:Gs(s.variables)}),a.push(s)});const r=As(s);return a=a.filter(e=>!e.supported_feature||e.supported_feature&r),a=a.map(e=>(Object.keys(e.variables||{}).length&&Object.keys(e.variables).forEach(t=>{e.variables[t].type==qe.List&&1==e.variables[t].options.length&&(e=Object.assign(Object.assign({},e),{service_data:Object.assign(Object.assign({},e.service_data),{[t]:e.variables[t].options[0].value}),variables:tt(e.variables,t)}))}),e)),a}function aa(e,t){const i=e.entity_id||e.service,s=e.service,a=e.service_data||{},o=Object.keys(a);let n=Js(i,t,!1),r=n.filter(t=>ws(e,t,!0));if(1==r.length?n=r:(n=n.filter(e=>e.service==s),n=n.filter(e=>Object.keys(e.service_data||{}).every(e=>o.includes(e)))),n.length>1&&n.sort((e,t)=>{const i=Object.entries(e.service_data||{}).map(([e,t])=>e in a?a[e]==t?1:-1:0).reduce((e,t)=>e+t,0),s=Object.entries(t.service_data||{}).map(([e,t])=>e in a?a[e]==t?1:-1:0).reduce((e,t)=>e+t,0);if(i>s)return-1;if(i<s)return 1;const n=st([...Object.keys(e.service_data||{}),...Object.keys(e.variables||{})]),r=st([...Object.keys(t.service_data||{}),...Object.keys(t.variables||{})]),l=o.filter(e=>n.includes(e)).length,c=o.filter(e=>r.includes(e)).length;if(l>c)return-1;if(l<c)return 1;const d=n.filter(e=>!o.includes(e)).length,u=r.filter(e=>!o.includes(e)).length;return d>u?1:d<u?-1:0}),n.length){let e=Object.assign({},n[0].variables||{});return Object.entries(a).forEach(([t,i])=>{Object.keys(e||{}).includes(t)&&e[t].type==qe.List&&(e=Object.assign(Object.assign({},e),{[t]:e[t].options.some(e=>e.value==i)?e[t]:Object.assign(Object.assign({},e[t]),{options:[...e[t].options,{value:i}]})}))}),Object.assign(Object.assign({},n[0]),{service_data:Object.assign(Object.assign({},n[0].service_data||{}),a),variables:e})}return{service:s,service_data:e.service_data}}function oa(e,t,i){const s=e in t.states?t.states[e]:void 0;let a={id:e,name:s?s.attributes.friendly_name||Te(e):"(unknown entity)",icon:s?s.attributes.icon:"help-circle-outline"};if(!s&&"notify"==De(e)){let i=Te(e),s=ks(e,t);if(i.includes("mobile_app_")&&(i=i.split("mobile_app_").pop(),"device_tracker."+i in t.states)){i=t.states["device_tracker."+i].attributes.friendly_name||i,s="hass:cellphone-text"}a=Object.assign(Object.assign({},a),{name:i,icon:s})}if(void 0!==i.standard_configuration&&!i.standard_configuration||a.icon?a.icon||(a=Object.assign(Object.assign({},a),{icon:"folder-outline"})):a=Object.assign(Object.assign({},a),{icon:ks(e,t)}),i.customize){Object.entries(i.customize).filter(([e])=>fs(e,a.id)).sort((e,t)=>t[0].length-e[0].length).map(([,e])=>e).forEach(e=>{a=Object.assign(Object.assign({},a),et(e,["name","icon"]))})}return a}const na=["sunday","monday","tuesday","wednesday","thursday","friday","saturday"],ra=(e,t,i)=>{if("object"!=typeof e){let t=new Date(2017,1,26);t.setDate(t.getDate()+e),e=t}if((()=>{try{(new Date).toLocaleDateString("i")}catch(e){return"RangeError"===e.name}return!1})())return e.toLocaleDateString(t.language,{weekday:i?"short":"long"});{const t=e.getDay();return i?na[t].substr(0,3):na[t]}};function la(e){return e.includes("daily")?He.Daily:e.includes("workday")?He.Workday:e.includes("weekend")?He.Weekend:He.Custom}var ca;!function(e){e.language="language",e.system="system",e.am_pm="12",e.twenty_four="24"}(ca||(ca={}));const da=e=>{if(e.time_format===ca.language||e.time_format===ca.system){const t=e.time_format===ca.language?e.language:void 0,i=(new Date).toLocaleString(t);return i.includes("AM")||i.includes("PM")}return e.time_format===ca.am_pm};function ua(e,t,i){return i===ca.am_pm||!i&&t.time_format===ca.am_pm?Ee(e,"h:mm A"):i===ca.twenty_four||!i&&t.time_format===ca.twenty_four?Ee(e,"shortTime"):(()=>{try{(new Date).toLocaleTimeString("i")}catch(e){return"RangeError"===e.name}return!1})()?e.toLocaleTimeString(t.language,{hour:"numeric",minute:"2-digit",hour12:da(t)}):da(t)?ua(e,t,ca.am_pm):ua(e,t,ca.twenty_four)}function ha(e){let t=new Date;const i=(e||"").match(/^([0-9]{4})-([0-9]{2})-([0-9]{2})/);null!==i&&t.setFullYear(Number(i[1]),Number(i[2])-1,Number(i[3]));const s=(e||"").match(/([0-9]{2}):([0-9]{2})(:([0-9]{2}))?$/);return null!==s&&t.setHours(Number(s[1]),Number(s[2]),s.length>4?Number(s[4]):t.getSeconds()),t}const ma=(e,t,i)=>ht(t.display_options&&t.display_options.primary_info?t.display_options.primary_info:"{entity}: {action}").map(s=>va(s,e,t,i)),pa=(e,t,i)=>ht(t.display_options&&t.display_options.secondary_info?t.display_options.secondary_info:["relative-time","additional-tasks"]).map(s=>va(s,e,t,i)),_a=(e,t,i)=>{if(t.display_options&&t.display_options.icon&&"entity"==t.display_options.icon){const s=fa(e,t,i);return 1==st(s.map(e=>e.icon)).length?s[0].icon:ks(s[0].id,i)}return ga(e,t,i).icon},va=(e,t,i,s)=>{switch(e){case"default":return va("name",t,i,s)||`${va("entity",t,i,s)}: ${va("action",t,i,s)}`;case"name":return t.name||"";case"relative-time":return"<my-relative-time></my-relative-time>";case"additional-tasks":return t.timeslots.length>1?"+"+us("ui.panel.overview.additional_tasks",ut(s),"{number}",String(t.timeslots.length-1)):"";case"time":return rt(((e,t)=>{const i=e=>{const i=Qe(e);if(!i)return e;const s=i.event==Ue.Sunrise?"de"==ut(t).language?t.localize("ui.panel.config.automation.editor.conditions.type.sun.sunrise"):t.localize("ui.panel.config.automation.editor.conditions.type.sun.sunrise").toLowerCase():"de"==ut(t).language?t.localize("ui.panel.config.automation.editor.conditions.type.sun.sunset"):t.localize("ui.panel.config.automation.editor.conditions.type.sun.sunset").toLowerCase();if(Math.abs(Ke(i.offset,t))<300)return us("ui.components.time.at_sun_event",ut(t),"{sunEvent}",s);const a="-"==i.sign?t.localize("ui.panel.config.automation.editor.conditions.type.sun.before").replace(/[^a-z]/gi,"").toLowerCase():t.localize("ui.panel.config.automation.editor.conditions.type.sun.after").replace(/[^a-z]/gi,"").toLowerCase();return`${ua(ha(i.offset),ut(t),Ae.twenty_four)} ${a} ${s}`};if(e.stop){const s=Qe(e.start)?i(e.start):ua(ha(e.start),ut(t)),a=Qe(e.stop)?i(e.stop):ua(ha(e.stop),ut(t));return us("ui.components.time.interval",ut(t),["{startTime}","{endTime}"],[s,a])}{const s=e.start;if(Qe(s))return i(s);{const e=ha(s);return us("ui.components.time.absolute",ut(t),"{time}",ua(e,ut(t)))}}})(t.timeslots[t.next_entries[0]],s));case"days":return rt(((e,t)=>{if(!t)return"";switch(la(e)){case He.Daily:return us("ui.components.date.day_types_long.daily",ut(t));case He.Workday:return us("ui.components.date.day_types_long.workdays",ut(t));case He.Weekend:return us("ui.components.date.day_types_long.weekend",ut(t));case He.Custom:const i=e.map(e=>{switch(e){case"mon":return 1;case"tue":return 2;case"wed":return 3;case"thu":return 4;case"fri":return 5;case"sat":return 6;case"sun":return 7;default:return}}).filter(e=>e),s=function(e){const t=[];for(let i=0;i<e.length-1;i++){let s=i+1;for(;e[s]-e[s-1]==1;)s++;t.push(s-i)}return t}(i),a=Math.max(...s);if(6==i.length){const e=[1,2,3,4,5,6,7].filter(e=>!i.includes(e));return us("ui.components.date.repeated_days_except",ut(t),"{excludedDays}",ra(e.pop(),ut(t)))}const o=i.map(e=>ra(e,ut(t)));if(i.length>=3&&a>=3){const e=s.reduce((e,t,i)=>t==a?i:e,0);o.splice(e,a,us("ui.components.date.days_range",ut(t),["{startDay}","{endDay}"],[o[e],o[e+a-1]]))}const n=o.length>1?`${o.slice(0,-1).join(", ")} ${t.localize("ui.common.and")} ${o.pop()}`:""+o.pop();return us("ui.components.date.repeated_days",ut(t),"{days}",n);default:return""}})(t.weekdays,s));case"entity":const a=fa(t,i,s),o=st(a.map(e=>De(e.id)));return 1==a.length?rt(lt(a[0].name||"")):1==o.length?`${a.length}x ${us("domains."+o[0],ut(s))||o[0]}`:a.length+"x entities";case"action":return rt(ia(ga(t,i,s)));case"tags":return(t.tags||[]).map(e=>`<tag>${e}</tag>`).join("");default:const n=/\{([^\}]+)\}/;let r;for(;r=n.exec(e);)e=e.replace(r[0],String(va(String(r[1]),t,i,s)));return e}},ga=(e,t,i)=>{const s=e.timeslots[e.next_entries[0]],a=sa(s.actions[0].entity_id||s.actions[0].service,i,t).filter(e=>ws(e,s.actions[0],!0)).reduce((e,t)=>t,void 0);return a?Object.assign(Object.assign({},a),{service_data:Object.assign(Object.assign({},a.service_data),Object.entries(s.actions[0].service_data||{}).filter(([e])=>Object.keys(a.variables||{}).includes(e)).reduce((e,[t,i])=>Object.assign(e,{[t]:i}),{}))}):aa(s.actions[0],i)},fa=(e,t,i)=>st(e.timeslots[e.next_entries[0]].actions.map(e=>e.entity_id||e.service)).map(e=>oa(e,i,t));function ya(e,t,i){const s=e.getFullYear()==(new Date).getFullYear(),a=()=>{try{(new Date).toLocaleDateString("i")}catch(e){return"RangeError"===e.name}return!1};return i?Ee(e,"isoDate"):s?a()?new Intl.DateTimeFormat(t.language,{month:"long",day:"numeric"}).format(e):Ee(e,"MMMM D"):a()?new Intl.DateTimeFormat(t.language,{year:"numeric",month:"long",day:"numeric"}).format(e):Ee(e,"MMMM D, YYYY")}var ba=window&&window.__assign||function(){return(ba=Object.assign||function(e){for(var t,i=1,s=arguments.length;i<s;i++)for(var a in t=arguments[i])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)};var ka={second:45,minute:45,hour:22,day:5};let wa=class extends ie{constructor(){super(...arguments),this.updateInterval=60,this.timer=0}startRefreshTimer(e){clearInterval(this.timer),this.timer=window.setInterval(()=>{this.requestUpdate()},1e3*e),this.updateInterval=e}set hass(e){this._hass=e,this.startRefreshTimer(this.updateInterval)}relativeTime(e){if(!this._hass)return"";const t=new Date;let i=(t.getTime()-e.getTime())/1e3;const s=i>=0?"past":"future";i=Math.abs(i);const a=Math.round(i);if("future"==s&&a>0){if(i/3600>=6){const i=t.setHours(0,0,0,0),s=Math.floor((e.valueOf()-i.valueOf())/864e5);let a="";s>14?a=ya(e,ut(this._hass)):s>7?a=us("ui.components.date.next_week_day",ut(this._hass),"{weekday}",ra(e,ut(this._hass))):1==s?a=us("ui.components.date.tomorrow",ut(this._hass)):s>0&&(a=ra(e,ut(this._hass)));let o=us("ui.components.time.absolute",ut(this._hass),"{time}",ua(e,ut(this._hass)));return 12==e.getHours()&&0==e.getMinutes()?o=us("ui.components.time.at_noon",ut(this._hass)):0==e.getHours()&&0==e.getMinutes()&&(o=us("ui.components.time.at_midnight",ut(this._hass))),String(a+" "+o).trim()}if(Math.round(i/60)>60&&Math.round(i/60)<120){const e=Math.round(i/60-60),t=this._hass.localize("ui.common.and");return`${new Intl.RelativeTimeFormat(ut(this._hass).language,{numeric:"auto"}).format(1,"hour")} ${t} ${Intl.NumberFormat(ut(this._hass).language,{style:"unit",unit:"minute",unitDisplay:"long"}).format(e)}`}if(Math.round(i)>60&&Math.round(i)<120){const e=Math.round(i-60),t=this._hass.localize("ui.common.and");return`${new Intl.RelativeTimeFormat(ut(this._hass).language,{numeric:"auto"}).format(1,"minute")} ${t} ${Intl.NumberFormat(ut(this._hass).language,{style:"unit",unit:"second",unitDisplay:"long"}).format(e)}`}}const o=function(e,t,i){void 0===t&&(t=Date.now()),void 0===i&&(i={});var s=ba(ba({},ka),i||{}),a=(+e-+t)/1e3;if(Math.abs(a)<s.second)return{value:Math.round(a),unit:"second"};var o=a/60;if(Math.abs(o)<s.minute)return{value:Math.round(o),unit:"minute"};var n=a/3600;if(Math.abs(n)<s.hour)return{value:Math.round(n),unit:"hour"};var r=a/86400;if(Math.abs(r)<s.day)return{value:Math.round(r),unit:"day"};var l=new Date(e),c=new Date(t),d=l.getFullYear()-c.getFullYear();if(Math.round(Math.abs(d))>0)return{value:Math.round(d),unit:"year"};var u=12*d+l.getMonth()-c.getMonth();if(Math.round(Math.abs(u))>0)return{value:Math.round(u),unit:"month"};var h=a/604800;return{value:Math.round(h),unit:"week"}}(e);return new Intl.RelativeTimeFormat(ut(this._hass).language,{numeric:"auto"}).format(o.value,o.unit)}render(){if(!this._hass||!this.datetime)return I``;const e=new Date,t=Math.round((this.datetime.valueOf()-e.valueOf())/1e3);let i=60;return Math.abs(t)<=150&&(i=Math.max(Math.ceil(Math.abs(t))/10,2)),this.updateInterval!=i&&this.startRefreshTimer(i),I`
      ${rt(this.relativeTime(this.datetime))}
    `}};t([ne()],wa.prototype,"_hass",void 0),t([ne()],wa.prototype,"datetime",void 0),wa=t([ae("my-relative-time")],wa);const xa=e=>new Date(e.timestamps[e.next_entries[0]]).valueOf(),$a=(e,t)=>{var i,s;if(!e.timeslots.every(e=>e.actions.every(e=>ys(e.entity_id||e.service,t))))return!1;let a=!0;const o=ht(t.tags);o.length&&(a=!1,((e.tags||[]).some(e=>o.includes(e))||o.includes("none")&&!(null===(i=e.tags)||void 0===i?void 0:i.length)||o.includes("enabled")&&e.enabled||o.includes("disabled")&&!e.enabled)&&(a=!0));const n=ht(t.exclude_tags);return n.length&&a&&((e.tags||[]).some(e=>n.includes(e))||n.includes("none")&&!(null===(s=e.tags)||void 0===s?void 0:s.length)||n.includes("enabled")&&e.enabled||n.includes("disabled")&&!e.enabled)&&(a=!1),a},ja=(e,t)=>!!t.discover_existing||!!e&&$a(e,t),Oa=(e,t,i)=>({primaryInfo:ma(e,t,i),secondaryInfo:pa(e,t,i),icon:_a(e,t,i)});let za=class extends(ms(ie)){constructor(){super(...arguments),this.showDiscovered=!1,this.scheduleDisplayInfo={},this.connectionError=!1}hassSubscribe(){return this.loadSchedules(),[this.hass.connection.subscribeMessage(e=>this.updateScheduleItem(e),{type:"scheduler_updated"})]}async updateScheduleItem(e){_s(this.hass,e.schedule_id).then(t=>{var i;const s=null===(i=this.schedules)||void 0===i?void 0:i.find(t=>t.schedule_id==e.schedule_id);let a=[...this.schedules||[]];this.scheduleDisplayInfo=Object.assign(Object.assign({},this.scheduleDisplayInfo),{[t.schedule_id]:Oa(t,this.config,this.hass)}),t&&ja(t,this.config)?a=s?xa(s)==xa(t)?a.map(e=>e.schedule_id==t.schedule_id?t:e):this.sortSchedules(a.map(e=>e.schedule_id==t.schedule_id?t:e)):this.sortSchedules([...a,t]):s&&(a=a.filter(t=>t.schedule_id!=e.schedule_id)),this.schedules=[...a]})}async loadSchedules(){ps(this.hass).then(e=>{const t=e.filter(e=>ja(e,this.config));let i={};Object.keys(t).forEach(e=>{try{i=Object.assign(Object.assign({},i),{[t[e].schedule_id]:Oa(t[e],this.config,this.hass)})}catch(e){}}),this.scheduleDisplayInfo=i,this.schedules=this.sortSchedules(t)}).catch(e=>{this.schedules=[],this.connectionError=!0})}shouldUpdate(e){const t=e.get("hass"),i=e.get("config");return t&&1==e.size&&this.schedules?this.schedules.some(e=>JSON.stringify(t.states[e.entity_id])!==JSON.stringify(this.hass.states[e.entity_id])):(i&&this.config&&(i.discover_existing!==this.config.discover_existing||i.tags!==this.config.tags)&&(async()=>{await this.loadSchedules()})(),!0)}render(){return this.hass&&this.config&&this.schedules?I`
      <ha-card>
        <div class="card-header">
          <div class="name">
            ${this.config.title?"string"==typeof this.config.title?this.config.title:us("ui.panel.common.title",ut(this.hass)):""}
          </div>
          ${this.schedules.length&&this.config.show_header_toggle?I`
                <ha-switch ?checked=${this.computeHeaderToggleState()} @change=${this.toggleDisableAll}> </ha-switch>
              `:""}
        </div>
        <div class="card-content">
          ${this.renderRows()}
        </div>
        ${!1!==this.config.show_add_button?I`
              <div class="card-actions">
                <mwc-button @click=${this.newItemClick} ?disabled=${this.connectionError}
                  >${this.hass.localize("ui.components.area-picker.add_dialog.add")}
                </mwc-button>
              </div>
            `:""}
      </ha-card>
    `:I``}renderRows(){if(!this.config||!this.hass||!this.schedules)return I``;if(this.connectionError)return I`
        <div>
          <hui-warning>
            ${us("ui.panel.overview.backend_error",ut(this.hass))}
          </hui-warning>
        </div>
      `;if(!Object.keys(this.schedules).length)return I`
        <div>
          ${us("ui.panel.overview.no_entries",ut(this.hass))}
        </div>
      `;const e=this.schedules.filter(e=>$a(e,this.config)),t=this.schedules.filter(e=>!$a(e,this.config));return I`
      ${e.map(e=>this.renderScheduleRow(e))}
      ${Object.keys(t).length?this.showDiscovered?I`
              ${t.map(e=>this.renderScheduleRow(e))}
              <div>
                <button
                  class="show-more"
                  @click=${()=>{this.showDiscovered=!1}}
                >
                  ${rt(us("ui.panel.overview.hide_excluded",ut(this.hass)))}
                </button>
              </div>
            `:I`
              <div>
                <button
                  class="show-more"
                  @click=${()=>{this.showDiscovered=!0}}
                >
                  +
                  ${us("ui.panel.overview.excluded_items",ut(this.hass),"{number}",t.length)}
                </button>
              </div>
            `:""}
    `}renderScheduleRow(e){var t,i,s;if(!this.hass)return I``;if(!e||!e.next_entries.length||!Object.keys(this.scheduleDisplayInfo).includes(e.schedule_id))return"NOT_RUNNING"!==this.hass.config.state?I`
            <hui-warning>
              Defective schedule entity: ${e.entity_id}
            </hui-warning>
          `:I`
            <hui-warning>
              ${this.hass.localize("ui.panel.lovelace.warning.starting")}
            </hui-warning>
          `;const a=this.scheduleDisplayInfo[e.schedule_id],o=(null===(t=this.hass.states[e.entity_id])||void 0===t?void 0:t.state)||"";return I`
      <div class="schedule-row ${["on","triggered"].includes(o)?"":"disabled"}">
        <ha-icon
          icon="${ct(a.icon)}"
          @click=${t=>Ne(t.target,"hass-more-info",{entityId:e.entity_id})}
        ></ha-icon>
        <div class="info" @click=${()=>this.editItemClick(e.schedule_id)}>
          ${this.renderDisplayItems(e,a.primaryInfo)}
          <div class="secondary">
            ${this.renderDisplayItems(e,a.secondaryInfo)}
          </div>
        </div>
        <ha-switch
          ?checked=${["on","triggered"].includes((null===(i=this.hass.states[e.entity_id])||void 0===i?void 0:i.state)||"")}
          ?disabled=${"completed"==(null===(s=this.hass.states[e.entity_id])||void 0===s?void 0:s.state)}
          @click=${t=>this.toggleDisabled(t,e.entity_id)}
        >
        </ha-switch>
      </div>
    `}renderDisplayItems(e,t){const i=t=>{const i=t.split("<my-relative-time></my-relative-time>");if(i.length>1)return I`
          ${i[0]?vt(i[0]):""}
          <my-relative-time .hass=${this.hass} .datetime=${new Date(e.timestamps[e.next_entries[0]])}>
          </my-relative-time>
          ${i[1]?vt(i[1]):""}
        `;const s=t.split(/(<tag>[^<]*<\/tag>)/g);return s.length>1?s.filter(e=>e.length).map(e=>{const t=e.match(/<tag>([^<]*)<\/tag>/g);return t?vt(`<span class="filter-tag">${t[0]}</span>`):e}):vt(t)};return t.filter(at).map(e=>I`
          ${i(e)}<br />
        `)}sortSchedules(e){var t;const i=ht(null===(t=this.config)||void 0===t?void 0:t.sort_by);if(i.includes("relative-time")&&(e=(e=>{const t=[...e];return t.sort((e,t)=>{const i=xa(e),s=xa(t),a=(new Date).valueOf(),o=i<a&&s<a;return null!==i&&null!==s?i<a&&s>=a?1:i>=a&&s<a?-1:i>s?o?-1:1:i<s?o?1:-1:e.entity_id<t.entity_id?1:-1:null!==s?1:null!==i?-1:e.entity_id<t.entity_id?1:-1}),t})(e)),i.includes("title")&&(e=((e,t)=>{const i=[...e];return i.sort((e,i)=>{if(!t[e.schedule_id])return t[i.schedule_id]?1:-1;return nt(t[e.schedule_id].primaryInfo.join(""),t[i.schedule_id].primaryInfo.join(""))}),i})(e,this.scheduleDisplayInfo)),i.includes("state")){const t=i.includes("relative-time");e=((e,t,i)=>{const s=[...e];return s.sort((e,s)=>{var a,o;const n=null===(a=t.states[e.entity_id])||void 0===a?void 0:a.state,r=null===(o=t.states[s.entity_id])||void 0===o?void 0:o.state,l=["on","triggered"].includes(n),c=["on","triggered"].includes(r);if(l&&!c)return-1;if(!l&&c)return 1;if(i){if("off"!=n&&"off"==r)return 1;if("off"==n&&"off"!=r)return-1}return 0}),s})(e,this.hass,t)}return e}toggleDisabled(e,t){if(!this.hass||!t)return;e.stopPropagation();const i=!e.target.checked;this.hass.callService("switch",i?"turn_on":"turn_off",{entity_id:t})}toggleDisableAll(e){if(!this.hass||!this.schedules)return;const t=e.target.checked;this.schedules.filter(e=>this.showDiscovered?ja(e,this.config):$a(e,this.config)).forEach(e=>{this.hass.callService("switch",t?"turn_on":"turn_off",{entity_id:e.entity_id})})}computeHeaderToggleState(){if(!this.schedules)return!1;return this.schedules.filter(e=>this.showDiscovered?ja(e,this.config):$a(e,this.config)).some(e=>{var t;return["on","triggered"].includes((null===(t=this.hass.states[e.entity_id])||void 0===t?void 0:t.state)||"")})}editItemClick(e){const t=new CustomEvent("editClick",{detail:e});this.dispatchEvent(t)}newItemClick(){const e=new CustomEvent("newClick");this.dispatchEvent(e)}};za.styles=r`
    ${hs}
    hui-warning {
      padding: 10px 0px;
    }

    button.show-more {
      color: var(--primary-color);
      text-align: left;
      cursor: pointer;
      background: none;
      border-width: initial;
      border-style: none;
      border-color: initial;
      border-image: initial;
      font: inherit;
    }
    button.show-more:focus {
      outline: none;
      text-decoration: underline;
    }

    div.schedule-row {
      display: flex;
      align-items: center;
      flex-direction: row;
      cursor: pointer;
      margin: 20px 0px;
    }
    div.schedule-row .info {
      margin-left: 16px;
      flex: 1 0 60px;
    }
    div.schedule-row .info,
    div.schedule-row .info > * {
      color: var(--primary-text-color);
      transition: color 0.2s ease-in-out;
    }
    div.schedule-row .secondary {
      display: block;
      color: var(--secondary-text-color);
      transition: color 0.2s ease-in-out;
    }
    div.schedule-row ha-icon {
      flex: 0 0 40px;
      color: var(--state-icon-color);
      transition: color 0.2s ease-in-out;
    }
    div.schedule-row ha-switch {
      padding: 13px 5px;
    }
    div.schedule-row hui-warning {
      flex: 1 0 40px;
    }
    div.schedule-row span.filter-tag {
      background: rgba(var(--rgb-primary-color), 0.54);
      color: var(--primary-text-color);
      height: 24px;
      border-radius: 12px;
      font-size: 12px;
      font-weight: 500;
      line-height: 18px;
      padding: 0px 10px;
      display: inline-flex;
      align-items: center;
      box-sizing: border-box;
      margin: 4px 2px 0px 2px;
      transition: color 0.2s ease-in-out, background 0.2s ease-in-out;
    }
    div.schedule-row.disabled {
      --primary-text-color: var(--disabled-text-color);
      --secondary-text-color: var(--disabled-text-color);
      --state-icon-color: var(--disabled-text-color);
    }
    div.schedule-row span.filter-tag {
      background: rgba(var(--rgb-primary-color), 0.3);
    }
  `,t([ne()],za.prototype,"config",void 0),t([ne()],za.prototype,"showDiscovered",void 0),t([ne()],za.prototype,"schedules",void 0),za=t([ae("scheduler-entities-card")],za);var Sa="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z",Ea="M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z";const Ca={alarm_control_panel:"domains.alarm_control_panel",automation:"ui.dialogs.quick-bar.commands.navigation.automation",binary_sensor:"domains.binary_sensor",calendar:"panel.calendar",climate:"domains.climate",cover:"domains.cover",fan:"domains.fan",group:"domains.group",humidifier:"domains.humidifier",input_boolean:"domains.input_boolean",input_number:"domains.input_number",input_select:"domains.input_select",light:"domains.light",lock:"domains.lock",media_player:"domains.media_player",notify:"domains.notify",person:"ui.dialogs.quick-bar.commands.navigation.person",scene:"ui.dialogs.quick-bar.commands.navigation.scene",script:"ui.dialogs.quick-bar.commands.navigation.script",sensor:"ui.panel.config.devices.entities.sensor",sun:"ui.panel.config.automation.editor.conditions.type.sun.label",switch:"domains.switch",vacuum:"domains.vacuum",water_heater:"domains.water_heater"},Aa=(e,t)=>{if(e in Ca){const i=Ca[e],s=i.startsWith("domains")?us(i,ut(t)):t.localize(i);if(s)return s}return e};function Ma(e,t,i){let s=[];t.groups&&t.groups.forEach(t=>{e.find(e=>ys(e,t))&&(s=[...s,{name:t.name,icon:t.icon||"folder-outline",entities:e.filter(e=>ys(e,t))}])});const a=e.filter(e=>!s.some(t=>t.entities.includes(e)));return a.map(De).filter((e,t,i)=>i.indexOf(e)===t).forEach(e=>{s=[...s,{name:Aa(e,i),icon:(void 0===t.standard_configuration||t.standard_configuration)&&e in bs?bs[e]:"folder-outline",entities:a.filter(t=>ys(t,{include:[e],exclude:[]}))}]}),s}const Da={options:["on","off"]},Ta={alarm_control_panel:{template:e=>{let t=["disarmed","triggered"];const i=xs(e,"supported_features")||0;return 2&i&&(t=[...t,"armed_away"]),1&i&&(t=[...t,"armed_home"]),4&i&&(t=[...t,"armed_night"]),16&i&&(t=[...t,"armed_custom_bypass"]),{options:t}}},binary_sensor:Da,climate:{options:"hvac_modes"},calendar:Da,cover:{options:["open","closed"]},device_tracker:{options:["home","not_home"]},fan:Da,humidifier:Da,input_boolean:Da,input_number:{min:"min",max:"max",unit:"unit_of_measurement",step:"step"},input_select:{options:"options"},light:Da,lock:{options:["locked","unlocked"]},number:{min:"min",max:"max",step:"step"},person:{template:(e,t)=>{const i=Object.keys(t.states).filter(e=>"zone"==De(e)).map(Te);return{options:[...new Set(["home","not_home",...i])]}}},proximity:{unit:"unit_of_measurement"},select:{options:"options"},sensor:{template:e=>e&&!isNaN(Number(e.state))?"%"==js(e,"unit_of_measurement")?{min:0,max:100,unit:"%",step:1}:{unit:"unit_of_measurement"}:{}},sun:{options:["below_horizon","above_horizon"]},switch:Da,water_heater:{options:"operation_list"}},Na=(e,t)=>We(Object.assign(Object.assign({},e),{state:t})),La=(e,t)=>{const i="closed"==t;switch(e.attributes.device_class){case"garage":return i?"mdi:garage":"mdi:garage-open";case"door":return i?"mdi:door-closed":"mdi:door-open";case"blind":return i?"mdi:blinds":"mdi:blinds-open";case"window":return i?"mdi:window-closed":"mdi:window-open";default:return i?"mdi:window-shutter":"mdi:window-shutter-open"}},Ia={alarm_control_panel:{disarmed:"mdi:lock-open-variant-outline",armed_away:"mdi:exit-run",armed_home:"mdi:home-outline",armed_night:"mdi:power-sleep",triggered:"mdi:alarm-light-outline"},binary_sensor:{on:Na,off:Na},calendar:{on:"mdi:flash",off:"mdi:flash-off"},climate:{off:"mdi:power-off",heat:"mdi:fire",cool:"mdi:snowflake",heat_cool:"mdi:thermometer",auto:"mdi:autorenew",dry:"mdi:water-percent",fan_only:"mdi:fan"},cover:{closed:La,open:La},device_tracker:{home:"mdi:home-outline",not_home:"mdi:exit-run"},fan:{on:"mdi:power",off:"mdi:power-off"},humidifier:{on:"mdi:power",off:"mdi:power-off"},input_boolean:{on:"mdi:flash",off:"mdi:flash-off"},light:{on:"mdi:lightbulb",off:"mdi:lightbulb-off"},lock:{unlocked:"mdi:lock-outline",locked:"mdi:lock-open-variant-outline"},person:(e,t,i)=>{const s={home:"mdi:home-outline",not_home:"mdi:exit-run"};return Object.keys(i.states).filter(e=>"zone"==De(e)).forEach(e=>{const t=Te(e),a=i.states[e].attributes.icon;a&&(s[t]=a)}),t in s?s[t]:"mdi:flash"},sensor:{unit:"attributes.unit_of_measurement"},sun:{below_horizon:"mdi:weather-sunny-off",above_horizon:"mdi:weather-sunny"},switch:{on:"mdi:flash",off:"mdi:flash-off"}},Pa=(e,t,i,s)=>{const a=De(e.entity_id);if(t||(t=e.state),a in Ia){if(t in Ia[a]){const s=Ia[a][t];return"string"==typeof s?s:s(e,t,i)}if("function"==typeof Ia[a])return Ia[a](e,t,i)}return s||"folder-outline"};function qa(e,t){const i=De(e),s=t.states[e];if(!s)return null;if("group"==i){const i=t.states[e],s=$s(i,"entity_id");if(!s.length)return null;const o=s.map(e=>qa(e,t));return o.every(at)?(a=o).length&&a.every(e=>e.type==a[0].type)?a[0].type==qe.List?Ts(...a):a[0].type==qe.Level?Es(...a):null:null:null}var a;if(!Object.keys(Ta).includes(i))return null;let o=Os(Ta[i],s,t);if("options"in o&&at(o.options)){let e=[...o.options];return e=e.map(e=>Object.assign(e,{icon:e.icon?e.icon:Pa(s,e.value,t,"flash"),name:e.name?e.name:Ra(s,e.value,t)})),o=Object.assign(Object.assign({},o),{options:e}),e.length?Ts(o):null}return"min"in o&&at(o.min)&&"max"in o&&at(o.max)?Es(o):Ls(o)}const Ra=(e,t,i)=>{const s=De(e.entity_id);return e.attributes.device_class&&i.localize(`component.${s}.state.${e.attributes.device_class}.${t}`)||i.localize(`component.${s}.state._.${t}`)||t};function Va(e,t,i){let s=i.standard_configuration?qa(e,t):null;const a=Object.entries(i.customize).filter(([t])=>fs(t,e)).sort((e,t)=>t[0].length-e[0].length).map(([,e])=>e.states).filter(at);return a.length&&a.forEach(e=>{s=Array.isArray(e)?Ts({options:e.map(e=>Object({value:e}))}):Es(e)}),s}function Ua(e,t,i={filterActions:!0,filterStates:!1}){let s=Object.keys(e.states).filter(e=>ys(e,t));return"notify"in e.services&&(s=[...s,...Object.keys(e.services.notify).map(e=>"notify."+e).filter(e=>ys(e,t))]),i.filterActions&&i.filterStates?s=s.filter(i=>sa(i,e,t).length||Va(i,e,t)):i.filterActions?s=s.filter(i=>sa(i,e,t).length):i.filterStates&&(s=s.filter(i=>Va(i,e,t))),s}function Ha(e,t){return e.id||e.value||t}let Fa=class extends ie{constructor(){super(...arguments),this.items=[],this.value=null}render(){return this.items.length?this.items.map((e,t)=>this.renderButton(e,t)):I`
        <div class="text-field">
          <slot></slot>
        </div>
      `}renderButton(e,t){const i=Array.isArray(this.value)?this.value:[this.value],s=Ha(e,t);return I`
      <mwc-button
        class="${i.includes(s)?"active":""}"
        ?disabled=${e.disabled}
        @click=${()=>this.selectItem(s)}
      >
        ${e.icon?I`
              <ha-icon icon="${ct(e.icon)}" class="padded-right"></ha-icon>
            `:""}
        ${lt(function(e){var t;return(null===(t=e.name)||void 0===t?void 0:t.trim())||e.value||e.id||""}(e))}
      </mwc-button>
    `}selectItem(e){if(Array.isArray(this.value))if(this.multiple){let t=Array.isArray(this.value)?[...this.value]:[];if(t.includes(e)){if(void 0!==this.min&&t.length<=this.min)return;t=t.filter(t=>t!=e)}else t.push(e);this.value=t}else this.value=this.value.includes(e)?[]:Array(e);else if(e==this.value){if(!this.optional)return;this.value=null}else this.value=e;const t=Array.isArray(this.value)?this.value.map(e=>this.items.find((t,i)=>Ha(t,i)==e)):null!==this.value?this.items.find((e,t)=>Ha(e,t)==this.value):null,i=new CustomEvent("change",{detail:t});this.dispatchEvent(i)}};Fa.styles=hs,t([ne({type:Array})],Fa.prototype,"items",void 0),t([ne()],Fa.prototype,"value",void 0),t([ne({type:Number})],Fa.prototype,"min",void 0),t([ne({type:Boolean})],Fa.prototype,"optional",void 0),t([ne({type:Boolean})],Fa.prototype,"multiple",void 0),Fa=t([ae("button-group")],Fa);let Ba=class extends ie{constructor(){super(...arguments),this.selectedEntities=[],this.multipleEntity=!1,this.scheduleEntities=[],this.timeSchemeSelected=!1}async firstUpdated(){if(this.scheduleEntities=(await ps(this.hass)).map(e=>e.entity_id),this.entities&&this.entities.length){const e=this.getGroups().find(e=>e.entities.find(e=>e==this.entities[0].id));if(!e)return;this.selectedGroup=e,this.selectedEntities=[...this.entities.map(e=>e.id)],this.multipleEntity=this.selectedEntities.length>1}if(this.schedule)if(this.schedule.timeslots.every(e=>e.stop))this.timeSchemeSelected=!0;else{const e=st(it(this.schedule.timeslots.map(e=>e.actions))),t=this.getActionsForEntity().filter(t=>e.some(e=>ws(e,t,!0)));1==t.length&&(this.selectedAction=t[0])}}getGroups(){if(!this.hass||!this.config)return[];const e=Ma(Ua(this.hass,this.config).filter(e=>"switch"!==De(e)||!this.scheduleEntities.includes(e)),this.config,this.hass);return e.sort(nt),e}getEntitiesForGroup(){if(!this.selectedGroup||!this.hass||!this.config)return[];const e=this.selectedGroup.entities.map(e=>oa(e,this.hass,this.config));return e.sort(nt),e}getActionsForEntity(){if(!this.hass||!this.config||!this.selectedEntities.length)return[];const e=sa(this.selectedEntities,this.hass,this.config).map(e=>Object.assign(e,{name:ia(e)}));return e.sort(nt),e}render(){if(!this.hass||!this.config)return I``;const e=this.getGroups();1!=e.length||ot(this.selectedGroup,e[0])||this.selectGroup(e[0]);const t=this.getEntitiesForGroup();1==t.length&&this.selectedEntities[0]!==t[0].id&&this.selectEntity(t[0].id);const i=this.getActionsForEntity();return I`
      <ha-card>
        <div class="card-header">
          <div class="name">
            ${this.config.title?"string"==typeof this.config.title?this.config.title:us("ui.panel.common.title",ut(this.hass)):""}
          </div>
          <ha-icon-button .path=${Sa} @click=${this.cancelClick}> </ha-icon-button>
        </div>
        <div class="card-content">
          <div class="header">${this.hass.localize("ui.panel.config.users.editor.group")}</div>
          <button-group
            .items=${e}
            .value=${e.findIndex(e=>ot(e,this.selectedGroup))}
            @change=${e=>this.selectGroup(e.detail)}
          >
            ${us("ui.panel.entity_picker.no_groups_defined",ut(this.hass))}
          </button-group>

          <div class="header">
            ${this.hass.localize("ui.components.entity.entity-picker.entity")}
            ${t.length>1?I`
                  <div class="switch">
                    <ha-switch
                      ?checked=${this.multipleEntity}
                      @change=${e=>{this.multipleEntity=e.target.checked}}
                    >
                    </ha-switch>
                    ${us("ui.panel.entity_picker.multiple",ut(this.hass))}
                  </div>
                `:""}
          </div>
          <button-group
            .items=${t}
            .value=${this.selectedEntities}
            @change=${e=>this.selectEntity(e.target.value)}
            ?multiple=${this.multipleEntity}
            ?optional=${!0}
          >
            ${this.selectedGroup?us("ui.panel.entity_picker.no_entities_for_group",ut(this.hass)):us("ui.panel.entity_picker.no_group_selected",ut(this.hass))}
          </button-group>

          <div class="header">
            ${this.hass.localize("ui.panel.config.automation.editor.actions.type.device_id.action")}
          </div>
          <button-group
            .items=${i}
            .value=${i.findIndex(e=>ot(e,this.selectedAction))}
            @change=${e=>this.selectAction(e.detail)}
          >
            ${this.selectedEntities.length?us("ui.panel.entity_picker.no_actions_for_entity",ut(this.hass)):us("ui.panel.entity_picker.no_entity_selected",ut(this.hass))}
          </button-group>
          ${this.makeSchemeButton(i)}
        </div>
        <div class="card-actions">
          <mwc-button @click=${this.nextClick} ?disabled=${!this.selectedAction&&!this.timeSchemeSelected}
            >${this.hass.localize("ui.common.next")}</mwc-button
          >
        </div>
      </ha-card>
    `}makeSchemeButton(e){return e.length&&this.hass?I`
      <div class="header">${this.hass.localize("ui.panel.config.automation.editor.conditions.type.or.label")}</div>
      <div class="option-list">
        <mwc-button
          class="${this.timeSchemeSelected?" active":""}"
          @click=${()=>this.selectTimeScheme()}>
          <ha-icon icon="${ct("chart-timeline")}" class="padded-right"></ha-icon>
          ${us("ui.panel.entity_picker.make_scheme",ut(this.hass))}
        </mwc-button>
      </div>
    </div>
    `:I``}selectGroup(e){this.selectedGroup=e,this.selectedEntities=[],this.selectedAction=void 0}selectEntity(e){if(this.selectedEntities=Array.isArray(e)?e:[e],this.selectedAction){const e=this.getActionsForEntity();this.selectedAction=e.find(e=>ws(e,this.selectedAction))}else this.selectedAction=void 0}selectAction(e){this.selectedAction=e,this.timeSchemeSelected=!1}selectTimeScheme(){this.selectedAction=null,this.timeSchemeSelected=!0}cancelClick(){const e=new CustomEvent("cancelClick");this.dispatchEvent(e)}nextClick(){const e=new CustomEvent("nextClick",{detail:{entities:this.selectedEntities,action:this.selectedAction,timeSchemeSelected:this.timeSchemeSelected}});this.dispatchEvent(e)}};Ba.styles=hs,t([ne()],Ba.prototype,"hass",void 0),t([ne()],Ba.prototype,"config",void 0),t([ne()],Ba.prototype,"selectedGroup",void 0),t([ne()],Ba.prototype,"selectedEntities",void 0),t([ne()],Ba.prototype,"selectedAction",void 0),t([ne()],Ba.prototype,"entities",void 0),t([ne()],Ba.prototype,"schedule",void 0),t([ne()],Ba.prototype,"multipleEntity",void 0),t([ne()],Ba.prototype,"scheduleEntities",void 0),t([ne()],Ba.prototype,"timeSchemeSelected",void 0),Ba=t([ae("scheduler-editor-card")],Ba);let Ya=class extends ie{constructor(){super(...arguments),this.stepSize=10,this.relativeMode=!1,this.event=Ue.Sunrise,this.maxOffset=2}get time(){return this._time>=0?this._time:Math.abs(this._time)}set time(e){const t=Xe(e,this.stepSize,{wrapAround:!this.relativeMode,maxHours:this.relativeMode?this.maxOffset:void 0}),i=t!=this._time&&at(this._time);this._time=t,i&&this.updateValue()}firstUpdated(){const e=Qe(this.value);e?(this.relativeMode=!0,this.event=e.event==Ue.Sunrise?Ue.Sunrise:Ue.Sunset,this.time="+"==e.sign?Ke(e.offset,this.hass):-Ke(e.offset,this.hass)):this.time=Ke(this.value,this.hass)}updateValue(){if(this.relativeMode){const e=this._time>=0?"+":"-",t=Je(this.time);this.value=`${this.event}${e}${t}`}else this.value=Je(this.time);const e=new CustomEvent("change");this.dispatchEvent(e)}getTimeParts(){const e=(this.relativeMode?Je(this.time):ua(ha(Je(this.time)),ut(this.hass))).split(/:|\ /);return e[0]=String(Number(e[0])),e}render(){const e=this.getTimeParts();return I`
      <div class="time-picker">
        <div class="hours-up">
          <mwc-button @click=${()=>this.time=this._time+3600}>
            <ha-icon icon="mdi:chevron-up"></ha-icon>
          </mwc-button>
        </div>
        <div class="hours">
          <ha-textfield
            type="number"
            inputmode="numeric"
            .value=${e[0]}
            no-spinner
            outlined
            @input=${t=>this._hoursChanged(t,e.length>2)}
            @focus=${this._onFocus}
            @blur=${t=>this._handleHoursInput(t,e)}
          >
          </ha-textfield>
        </div>
        <div class="hours-down">
          <mwc-button @click=${()=>this.time=this._time-3600}>
            <ha-icon icon="mdi:chevron-down"></ha-icon>
          </mwc-button>
        </div>
        <div class="separator">:</div>
        <div class="minutes-up">
          <mwc-button @click=${()=>this.time=this._time+60*this.stepSize}>
            <ha-icon icon="mdi:chevron-up"></ha-icon>
          </mwc-button>
        </div>
        <div class="minutes">
          <ha-textfield
            type="number"
            inputmode="numeric"
            .value=${e[1]}
            no-spinner
            outlined
            @input=${this._minutesChanged}
            @focus=${this._onFocus}
            @blur=${t=>this._handleMinutesInput(t,e)}
          >
          </ha-textfield>
        </div>
        <div class="minutes-down">
          <mwc-button @click=${()=>this.time=this._time-60*this.stepSize}>
            <ha-icon icon="mdi:chevron-down"></ha-icon>
          </mwc-button>
        </div>
        ${this.relativeMode?I`
              <div class="suffix">
                <mwc-button @click=${this.toggleBeforeAfter}>
                  ${this.getBeforeAfter()}
                </mwc-button>
                <mwc-button @click=${this.toggleSunriseSunset}>
                  <ha-icon icon="mdi:${this.event==Ue.Sunrise?"weather-sunny":"weather-night"}"></ha-icon>
                </mwc-button>
              </div>
            `:e.length>2?I`
              <div class="suffix">
                <mwc-button @click=${this.toggleAmPm}>
                  ${e[2]}
                </mwc-button>
              </div>
            `:""}
        <div class="options">
          ${this.getSunModeToggle()}
        </div>
      </div>
    `}getSunModeToggle(){return this.hass&&this.hass.states["sun.sun"]?I`
      <mwc-button @click="${this.toggleMode}" class="${this.relativeMode?"active":""}">
        <ha-icon icon="mdi:theme-light-dark"></ha-icon>
      </mwc-button>
    `:I``}getBeforeAfter(){return this.hass?this._time<0?this.hass.localize("ui.panel.config.automation.editor.conditions.type.sun.before").trim():this.hass.localize("ui.panel.config.automation.editor.conditions.type.sun.after").trim():""}toggleAmPm(){this.time=this._time+43200}toggleBeforeAfter(){this.time=-this._time,this.updateValue()}toggleSunriseSunset(){this.event=this.event==Ue.Sunrise?Ue.Sunset:Ue.Sunrise,this.updateValue()}toggleMode(){if(!this.hass)return;this.relativeMode=!this.relativeMode;const e=this.hass.states["sun.sun"],t=Ke(e.attributes.next_rising,this.hass),i=Ke(e.attributes.next_setting,this.hass);if(this.relativeMode){this.event=Math.abs(this._time-t)<Math.abs(this._time-i)?Ue.Sunrise:Ue.Sunset;let e=this.event==Ue.Sunrise?this._time-t:this._time-i;e>7200?e=7200:e<-7200&&(e=-7200),this.time=e}else this.time=this.event==Ue.Sunrise?this._time+t:this._time+i}_hoursChanged(e,t=!1){const i=e.target,s=i.value;let a=Number(s);const o=this.relativeMode?0:t?1:0,n=this.relativeMode?this.maxOffset:t?12:23;let r=!0;s.length>2&&(r=!1,a=Number(s.substring(0,2))),a<0&&(r=!1,a=-a),a<o&&(r=!1,a=o),a>n&&(r=!1,a=n),r||(i.value=String(a),i.blur())}_minutesChanged(e){const t=e.target,i=t.value;let s=Number(i),a=!0;i.length>2&&(a=!1,s=Number(i.substring(0,2))),s<0&&(a=!1,s=-s),s>59&&(a=!1,s=59),s%this.stepSize!=0&&(s=Math.round(s/this.stepSize)*this.stepSize),a||(t.value=String(s).padStart(2,"0"),t.blur())}_onFocus(e){e.target.value=""}_handleHoursInput(e,t){const i=e.target;let s=Number(i.value);if(!i.value.length)return void(i.value=t[0]);t.length>2&&12==s&&(s=0),t.length>2&&"PM"==t[2]&&(s+=12);const a=Number(t[1]);this.time=this._time>=0?3600*s+60*a:-(3600*s+60*a),i.value=this.getTimeParts()[0]}_handleMinutesInput(e,t){const i=e.target;let s=Number(i.value);if(!i.value.length)return void(i.value=t[1]);s%this.stepSize!=0&&(s=Math.round(s/this.stepSize)*this.stepSize);let a=Number(t[0]);t.length>2&&12==a&&(a=0),t.length>2&&"PM"==t[2]&&(a+=12),this.time=this._time>=0?3600*a+60*s:-(3600*a+60*s),i.value=this.getTimeParts()[1]}};Ya.styles=r`
    div.time-picker {
      display: grid;
      grid-template-columns: min-content min-content min-content 1fr min-content;
      grid-template-rows: min-content min-content min-content;
      grid-template-areas:
        'hours-up   .         minutes-up   suffix options'
        'hours      separator minutes      suffix options'
        'hours-down .         minutes-down suffix options';
      grid-gap: 4px 0px;
      align-items: center;
      direction: ltr;
    }

    div.hours-up {
      grid-area: hours-up;
    }
    div.hours {
      grid-area: hours;
    }
    div.hours-down {
      grid-area: hours-down;
    }
    div.separator {
      grid-area: separator;
    }
    div.minutes-up {
      grid-area: minutes-up;
    }
    div.minutes {
      grid-area: minutes;
    }
    div.minutes-down {
      grid-area: minutes-down;
    }
    div.suffix {
      grid-area: suffix;
      flex-grow: 1;
    }
    div.options {
      grid-area: options;
    }

    div.hours-up,
    div.hours-down,
    div.minutes-up,
    div.minutes-down {
      --mdc-icon-size: 42px;
    }

    div.hours,
    div.minutes {
      font-size: 42px;
      text-align: center;
    }

    div.separator {
      font-size: 36px;
    }

    div.suffix mwc-button {
      --mdc-typography-button-font-size: 16px;
      --mdc-icon-size: 32px;
    }

    mwc-button.active {
      background: var(--primary-color);
      --mdc-theme-primary: var(--text-primary-color);
      border-radius: 4px;
    }

    ha-textfield {
      text-align: center;
      --text-field-text-align: center;
      --text-field-padding: 0 4px;
      --mdc-typography-subtitle1-font-size: 42px;
      --mdc-text-field-outlined-idle-border-color: var(--card-background-color);
      --mdc-text-field-outlined-hover-border-color: var(--card-background-color);
    }
  `,t([ne()],Ya.prototype,"hass",void 0),t([ne({type:Number})],Ya.prototype,"stepSize",void 0),t([ne()],Ya.prototype,"relativeMode",void 0),t([ne()],Ya.prototype,"event",void 0),t([ne()],Ya.prototype,"_time",void 0),Ya=t([ae("time-picker")],Ya);const Wa=(e,t,i,s={})=>{if(Qe(e))return e;const a=Ke(e,i),o=i.states["sun.sun"],n=Ke(o.attributes.next_rising,i),r=Ke(o.attributes.next_setting,i);t||(t=Math.abs(a-n)<Math.abs(a-r)?Ue.Sunrise:Ue.Sunset);let l=a-(t==Ue.Sunrise?Ke(o.attributes.next_rising,i):Ke(o.attributes.next_setting,i));return s.stepSize&&(l=Xe(l,s.stepSize,{maxHours:2})),`${t}${l>0?"+":"-"}${Je(Math.abs(l))}`};let Ga=class extends ie{constructor(){super(),this.slots=[],this.actions=[],this.stepSize=10,this.isDragging=!1,this.currentTime=0,this.rangeMin=0,this.rangeMax=86400,this.activeSlot=null,this.activeMarker=null,this.previousSlot=null,this.timer=0,this.timeout=0,this.zoomFactor=1,this.handleResize=this.handleResize.bind(this)}handleResize(e){clearTimeout(this.timeout),this.timeout=window.setTimeout(()=>{this.requestUpdate()},50)}firstUpdated(){window.addEventListener("resize",this.handleResize)}disconnectedCallback(){window.removeEventListener("resize",this.handleResize),clearInterval(this.timer),clearTimeout(this.timeout),super.disconnectedCallback&&super.disconnectedCallback()}render(){if(!this.hass)return I``;const e=parseFloat(getComputedStyle(this).getPropertyValue("width")),t=86400/(this.rangeMax-this.rangeMin)*e,i=-this.rangeMin/(this.rangeMax-this.rangeMin)*e;return I`
      <div class="outer">
        <div
          class="wrapper ${this.isDragging?"":"selectable"}"
          style="width: ${t.toFixed(2)}px; margin-left: ${i.toFixed(2)}px"
        >
          ${this.renderSlots()}
        </div>
      </div>
      <div class="outer">
        <div class="time-wrapper" style="width: ${t.toFixed(2)}px; margin-left: ${i.toFixed(2)}px">
          ${this.renderTimes()}
        </div>
      </div>
      <mwc-button @click=${this._addSlot} ?disabled=${null===this.activeSlot||this.slots.length>=24}>
        <ha-icon icon="mdi:plus-circle-outline" class="padded-right"></ha-icon>
        ${this.hass.localize("ui.dialogs.helper_settings.input_select.add")}
      </mwc-button>
      <mwc-button @click=${this._removeSlot} ?disabled=${null===this.activeSlot||this.slots.length<=2}>
        <ha-icon icon="mdi:minus-circle-outline" class="padded-right"></ha-icon>
        ${this.hass.localize("ui.common.delete")}
      </mwc-button>
    `}renderSlots(){const e=parseFloat(getComputedStyle(this).getPropertyValue("width")),t=86400/(this.rangeMax-this.rangeMin)*e;let i=-this.rangeMin/(this.rangeMax-this.rangeMin)*e;return this.slots.map((s,a)=>{const o=((Ke(s.stop,this.hass)||86400)-Ke(s.start,this.hass))/86400,n=this.computeActionDisplay(s)||"",r=5*(n||"").length+10,l=i<0&&i+o*t>0?5-i:15,c=i+o*t>e&&i<e?o*t-(e-i)+5:15,d=o*t-l-c;return i+=o*t,I`
        <div
          class="slot${this.activeSlot==a&&null===this.activeMarker?" active":""} ${o*t<2?"noborder":""}"
          style="width: ${Math.floor(1e4*o)/100}%"
          @click=${this._selectSlot}
          slot="${a}"
        >
          ${a>0&&(this.activeSlot===a||this.activeSlot===a-1)?I`
                <div class="handle">
                  <div class="button-holder">
                    <ha-icon-button
                      .path=${"M18.17,12L15,8.83L16.41,7.41L21,12L16.41,16.58L15,15.17L18.17,12M5.83,12L9,15.17L7.59,16.59L3,12L7.59,7.42L9,8.83L5.83,12Z"}
                      @mousedown=${this._handleTouchStart}
                      @touchstart=${this._handleTouchStart}
                    >
                    </ha-icon-button>
                  </div>
                </div>
              `:""}
          ${a>0?this.renderTooltip(a):""}

          <span style="margin-left: ${l.toFixed(2)}px; margin-right: ${c.toFixed(2)}px">
            ${n&&(d>r/3||d>50)&&d>30?n:""}
          </span>
        </div>
      `})}renderTooltip(e){const t=Qe(this.slots[e].start);return I`
      <div class="tooltip-container center">
        <div class="tooltip ${this.activeMarker==e?"active":""}" @click=${this._selectMarker}>
          ${t?I`
                <ha-icon icon="mdi:${"sunrise"==t.event?"weather-sunny":"weather-night"}"></ha-icon>
                ${t.sign} ${ua(ha(t.offset),ut(this.hass),ca.twenty_four)}
              `:ua(ha(this.slots[e].start),ut(this.hass))}
        </div>
      </div>
    `}renderTimes(){this._updateTooltips();const e=parseFloat(getComputedStyle(this).getPropertyValue("width")),t=[1,2,3,4,6,8,12],i=da(ut(this.hass))?55:40;let s=Math.ceil(24/(e/i));for(;!t.includes(s);)s++;return[0,...Array.from(Array(24/s-1).keys()).map(e=>(e+1)*s),24].map(e=>{const t=0==e||24==e,i=t?s/48*100:s/24*100;return I`
        <div style="width: ${Math.floor(100*i)/100}%" class="${t?"":"time"}">
          ${t?"":ua(ha(Je(3600*e)),ut(this.hass))}
        </div>
      `})}computeActionDisplay(e){if(this.hass)return e.actions?st(e.actions.map(e=>{const t=this.actions.find(t=>ws(t,e,!0));return t?t.variables&&Object.keys(t.variables).some(t=>e.service_data&&t in e.service_data)?Object.entries(t.variables).filter(([t])=>e.service_data&&t in e.service_data).map(([t,i])=>{const s=e.service_data[t];if(i.type==qe.Level)return i=i,Cs(Number(s),i);if(i.type==qe.List){const e=(i=i).options.find(e=>e.value==s);return lt(e&&e.name?e.name:String(s))}return""}).join(", "):lt(t.name||us("services."+e.service,ut(this.hass))||e.service):"???"})).join(", "):""}_handleTouchStart(e){const t=parseFloat(getComputedStyle(this).getPropertyValue("width")),i=86400/(this.rangeMax-this.rangeMin)*t,s=-(-this.rangeMin/(this.rangeMax-this.rangeMin)*t)/i*86400,a=e.target;let o=a;for(;!o.classList.contains("slot");)o=o.parentElement;const n=o,r=n.previousElementSibling,l=Number(r.getAttribute("slot")),c=l>0?Ke(this.slots[l].start,this.hass)+60*this.stepSize:0,d=l<this.slots.length-2?(Ke(this.slots[l+1].stop,this.hass)||86400)-60*this.stepSize:86400;this.isDragging=!0;const u=n.parentElement.parentElement.getBoundingClientRect();let h=e=>{let a;a="undefined"!=typeof TouchEvent&&e instanceof TouchEvent?e.changedTouches[0].pageX:e.pageX;let o=a-u.left;o>t-10&&(o=t-10),o<10&&(o=10);let n=Math.round(o/i*86400+s);n<c&&(n=c),n>d&&(n=d),this.currentTime=n;const r=Qe(this.slots[l].stop);let h;r?h=Wa(Je(n),r.event,this.hass,{stepSize:this.stepSize}):(n=Math.round(n)>=86400?86400:Xe(n,this.stepSize),h=Je(n)),h!=this.slots[l].stop&&(this.slots=Object.assign(this.slots,{[l]:Object.assign(Object.assign({},this.slots[l]),{stop:h}),[l+1]:Object.assign(Object.assign({},this.slots[l+1]),{start:h})}),this.requestUpdate())};const m=()=>{window.removeEventListener("mousemove",h),window.removeEventListener("touchmove",h),window.removeEventListener("mouseup",m),window.removeEventListener("touchend",m),window.removeEventListener("blur",m),h=()=>{},setTimeout(()=>{this.isDragging=!1},100),a.blur();const e=new CustomEvent("update",{detail:{entries:this.slots}});this.dispatchEvent(e)};window.addEventListener("mouseup",m),window.addEventListener("touchend",m),window.addEventListener("blur",m),window.addEventListener("mousemove",h),window.addEventListener("touchmove",h)}_selectSlot(e){if(this.isDragging)return;let t=e.target;"span"==t.tagName.toLowerCase()&&(t=t.parentElement),t.classList.contains("handle")&&(t=t.parentElement);const i=Number(t.getAttribute("slot"));this.activeSlot==i&&null===this.activeMarker?(this.activeSlot=null,this.previousSlot=null):(this.previousSlot=this.activeSlot,this.activeSlot=i),this.activeMarker=null,this._updateZoom();const s=new CustomEvent("update",{detail:{entry:this.activeSlot}});this.dispatchEvent(s)}_calculateZoom(){const e=Number(this.activeSlot);let t=Ke(this.slots[e].start,this.hass),i=Ke(this.slots[e].stop,this.hass)||86400;t-=(i-t)/3,i+=(i-t)/3,(i-t)/86400*parseFloat(getComputedStyle(this).getPropertyValue("width"))>=100?(t=0,i=86400):(t<0&&(i-=t),i>86400&&(t-=i-86400)),this.rangeMin=t>0?t:0,this.rangeMax=i<86400?i:86400,clearInterval(this.timer),clearTimeout(this.timeout),this.timer=window.setInterval(()=>{this._updateTooltips()},50),this.timeout=window.setTimeout(()=>{clearInterval(this.timer),this._updateTooltips()},230)}_addSlot(){if(null===this.activeSlot)return;const e=this.slots[this.activeSlot],t=Ke(e.start,this.hass);let i=Ke(e.stop,this.hass);i<t&&(i+=86400);const s=Xe(t+(i-t)/2,this.stepSize);this.slots=[...this.slots.slice(0,this.activeSlot),Object.assign(Object.assign({},this.slots[this.activeSlot]),{stop:Je(s)}),Object.assign(Object.assign({},this.slots[this.activeSlot]),{start:Je(s),stop:Je(i),actions:[]}),...this.slots.slice(this.activeSlot+1)],this._updateZoom();const a=new CustomEvent("update",{detail:{entries:this.slots}});this.dispatchEvent(a)}_removeSlot(){if(null===this.activeSlot)return;const e=this.activeSlot==this.slots.length-1?this.activeSlot-1:this.activeSlot;this.slots=[...this.slots.slice(0,e),Object.assign(Object.assign({},this.slots[e+1]),{start:this.slots[e].start,stop:this.slots[e+1].stop}),...this.slots.slice(e+2)],this.activeSlot==this.slots.length&&this.activeSlot--,this._updateZoom();const t=new CustomEvent("update",{detail:{entries:this.slots}});this.dispatchEvent(t)}_updateTooltips(){var e;const t=parseFloat(getComputedStyle(this).getPropertyValue("width")),i=null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelectorAll(".tooltip"),s=e=>{const t=e.offsetWidth,i=e.parentElement.offsetLeft+e.offsetLeft-15;return e.parentElement.classList.contains("left")?[i+t/2,i+3*t/2]:e.parentElement.classList.contains("right")?[i-t/2,i+t/2]:[i,i+t]};null==i||i.forEach((e,a)=>{const o=e.parentElement,n=o.classList.contains("visible"),r=Number(o.parentElement.getAttribute("slot"));if(r!=this.activeSlot&&r-1!=this.activeSlot)n&&o.classList.remove("visible");else{const l=e.parentElement.offsetLeft;if(l<0||l>t+15)n&&o.classList.remove("visible");else{n||o.classList.add("visible");const l=o.offsetWidth,c=o.classList.contains("center");let d=s(e)[0],u=t-s(e)[1];if(a>0&&r-1==this.activeSlot)d-=s(i[a-1])[1];else if(a+1<i.length&&r==this.activeSlot){const e=s(i[a+1])[0];u-=e<0?0:t-e}d<u?d<0?c&&u>l/2&&(o.classList.add("right"),o.classList.remove("center"),o.classList.remove("left")):(o.classList.add("center"),o.classList.remove("right"),o.classList.remove("left")):u<0?c&&d>l/2&&(o.classList.add("left"),o.classList.remove("center"),o.classList.remove("right")):(o.classList.add("center"),o.classList.remove("left"),o.classList.remove("right"))}}})}_updateZoom(){clearInterval(this.timer),clearTimeout(this.timeout),this.timer=window.setInterval(()=>{this._updateTooltips()},50),this.timeout=window.setTimeout(()=>{clearInterval(this.timer),this._updateTooltips()},230)}_selectMarker(e,t=!0){e.stopImmediatePropagation();let i=e.target;for(;!i.classList.contains("slot");)i=i.parentElement;const s=Number(i.getAttribute("slot"));t&&this.activeMarker===s?this.activeMarker=null:this.activeMarker=t?s:null;const a=new CustomEvent("update",{detail:{entry:this.activeSlot,marker:this.activeMarker}});this.dispatchEvent(a),this._updateTooltips()}static get styles(){return r`
      :host {
        display: block;
        max-width: 100%;
        overflow: hidden;
      }
      div.outer {
        width: 100%;
        overflow-x: hidden;
        overflow-y: hidden;
        border-radius: 5px;
      }
      div.wrapper,
      div.time-wrapper {
        white-space: nowrap;
        transition: width 0.2s cubic-bezier(0.17, 0.67, 0.83, 0.67), margin 0.2s cubic-bezier(0.17, 0.67, 0.83, 0.67);
      }
      .slot {
        float: left;
        background: rgba(var(--rgb-primary-color), 0.7);
        height: 60px;
        cursor: pointer;
        box-sizing: border-box;
        transition: background 0.1s cubic-bezier(0.17, 0.67, 0.83, 0.67);
      }
      .wrapper.selectable .slot:hover {
        background: rgba(var(--rgb-primary-color), 0.85);
      }
      .slot:not(:first-child) {
        border-left: 1px solid var(--card-background-color);
      }
      .slot:not(:last-child) {
        border-right: 1px solid var(--card-background-color);
      }
      .slot.active {
        background: rgba(var(--rgb-accent-color), 0.7);
      }
      .slot.noborder {
        border: none;
      }
      .wrapper.selectable .slot.active:hover {
        background: rgba(var(--rgb-accent-color), 0.85);
      }
      div.time-wrapper div {
        float: left;
        display: flex;
        position: relative;
        height: 25px;
        line-height: 25px;
        font-size: 12px;
        text-align: center;
        align-content: center;
        align-items: center;
        justify-content: center;
      }
      div.time-wrapper div.time:before {
        content: ' ';
        background: var(--disabled-text-color);
        position: absolute;
        left: 0px;
        top: 0px;
        width: 1px;
        height: 5px;
        margin-left: 50%;
        margin-top: 0px;
      }
      .slot span {
        font-size: 14px;
        color: var(--text-primary-color);
        height: 100%;
        display: flex;
        align-content: center;
        align-items: center;
        justify-content: center;
        transition: margin 0.2s cubic-bezier(0.17, 0.67, 0.83, 0.67);
        word-break: break-all;
        white-space: normal;
        overflow: hidden;
        line-height: 1em;
      }
      div.handle {
        display: flex;
        height: 100%;
        width: 36px;
        margin-left: -19px;
        margin-bottom: -60px;
        align-content: center;
        align-items: center;
        justify-content: center;
      }
      div.button-holder {
        background: var(--card-background-color);
        border-radius: 50%;
        width: 24px;
        height: 24px;
        display: flex;
        visibility: hidden;
        animation: 0.2s fadeIn;
        animation-fill-mode: forwards;
      }
      ha-icon-button {
        --mdc-icon-button-size: 36px;
        margin-top: -6px;
        margin-left: -6px;
      }
      @keyframes fadeIn {
        99% {
          visibility: hidden;
        }
        100% {
          visibility: visible;
        }
      }
      div.tooltip-container {
        position: absolute;
        margin-top: -28px;
        margin-left: -40px;
        width: 80px;
        height: 26px;
        display: flex;
        text-align: center;
        display: none;
      }
      div.tooltip-container.visible {
        display: block;
      }
      div.tooltip-container.left {
        margin-left: -80px;
        text-align: right;
      }
      div.tooltip-container.right {
        margin-left: 0px;
        text-align: left;
      }
      div.tooltip {
        display: inline-flex;
        margin: 0px auto;
        border-radius: 5px;
        color: var(--text-primary-color);
        font-size: 1em;
        padding: 0px 5px;
        text-align: center;
        line-height: 26px;
        z-index: 1;
        transition: all 0.1s ease-in;
        transform-origin: center bottom;
        --tooltip-color: var(--primary-color);
        background: var(--tooltip-color);
      }
      div.tooltip.active {
        --tooltip-color: rgba(var(--rgb-accent-color), 0.7);
      }
      div.tooltip-container.left div.tooltip {
        transform-origin: right bottom;
      }
      div.tooltip-container.right div.tooltip {
        transform-origin: left bottom;
      }
      div.tooltip-container.center div.tooltip:before {
        content: ' ';
        width: 0px;
        height: 0px;
        border-left: 6px solid transparent;
        border-right: 6px solid transparent;
        border-top: 10px solid var(--tooltip-color);
        position: absolute;
        margin-top: 25px;
        margin-left: calc(50% - 6px);
        top: 0px;
        left: 0px;
      }
      div.tooltip-container.left div.tooltip:before {
        content: ' ';
        border-top: 10px solid transparent;
        border-bottom: 10px solid transparent;
        border-right: 8px solid var(--tooltip-color);
        opacity: 1;
        position: absolute;
        margin-top: 15px;
        margin-left: calc(100% - 8px);
        left: 0px;
        top: 0px;
        width: 0px;
        height: 0px;
      }
      div.tooltip-container.right div.tooltip:before {
        content: ' ';
        border-top: 10px solid transparent;
        border-bottom: 10px solid transparent;
        border-left: 8px solid var(--tooltip-color);
        opacity: 1;
        position: absolute;
        margin-top: 15px;
        margin-left: 0px;
        left: 0px;
        top: 0px;
        width: 0px;
        height: 0px;
      }
      div.tooltip ha-icon {
        --mdc-icon-size: 20px;
      }
      mwc-button ha-icon {
        margin-right: 11px;
      }
    `}};t([ne()],Ga.prototype,"hass",void 0),t([ne({type:Array})],Ga.prototype,"slots",void 0),t([ne({type:Array})],Ga.prototype,"actions",void 0),t([ne({type:Number})],Ga.prototype,"stepSize",void 0),t([ne()],Ga.prototype,"rangeMin",void 0),t([ne()],Ga.prototype,"rangeMax",void 0),t([ne()],Ga.prototype,"activeSlot",void 0),t([ne()],Ga.prototype,"activeMarker",void 0),t([function(e){return le({finisher:(t,i)=>{Object.assign(t.prototype[i],e)}})}
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */({passive:!0})],Ga.prototype,"_handleTouchStart",null),Ga=t([ae("timeslot-editor")],Ga);const Za=async()=>{if(customElements.get("ha-checkbox")&&customElements.get("ha-slider")&&customElements.get("ha-combo-box"))return;await customElements.whenDefined("partial-panel-resolver");const e=document.createElement("partial-panel-resolver");e.hass={panels:[{url_path:"tmp",component_name:"config"}]},e._updateRoutes(),await e.routerOptions.routes.tmp.load(),await customElements.whenDefined("ha-panel-config");const t=document.createElement("ha-panel-config");await t.routerOptions.routes.automation.load()};let Ka=class extends ie{constructor(){super(...arguments),this.min=0,this.max=255,this.step=1,this.scaleFactor=1,this.unit="",this.optional=!1,this.disabled=!1,this._displayedValue=0}set value(e){e=isNaN(e)?this.min:this._roundedValue(e/this.scaleFactor),this._displayedValue=e}firstUpdated(){(async()=>{await Za()})(),this.disabled&&!this.optional&&(this.disabled=!1,this.requestUpdate())}render(){return I`
      <div class="checkbox-container">
        <div class="checkbox">
          ${this.getCheckbox()}
        </div>
        <div class="slider">
          ${this.getSlider()}
        </div>
        <div class="value${this.disabled?" disabled":""}">
          ${this._displayedValue}${this.unit}
        </div>
      </div>
    `}getSlider(){return this.disabled?I`
        <ha-slider
          pin
          min=${this.min}
          max=${this.max}
          step=${this.step}
          value=${this._displayedValue}
          disabled
        ></ha-slider>
      `:I`
        <ha-slider
          pin
          min=${this.min}
          max=${this.max}
          step=${this.step}
          value=${this._displayedValue}
          @change=${this._updateValue}
        ></ha-slider>
      `}getCheckbox(){return this.optional?I`
      <ha-checkbox @change=${this.toggleChecked} ?checked=${!this.disabled}></ha-checkbox>
    `:I``}toggleChecked(e){const t=e.target.checked;this.disabled=!t;const i=this.disabled?null:this._scaledValue(this._displayedValue);Ne(this,"value-changed",{value:i})}_updateValue(e){let t=Number(e.target.value);this._displayedValue=t,t=this._scaledValue(this._displayedValue),Ne(this,"value-changed",{value:t})}_roundedValue(e){return e=Math.round(e/this.step)*this.step,(e=parseFloat(e.toPrecision(12)))>this.max?e=this.max:e<this.min&&(e=this.min),e}_scaledValue(e){return e=this._roundedValue(e),e*=this.scaleFactor,e=parseFloat(e.toFixed(2))}};Ka.styles=r`
    ${hs} :host {
      width: 100%;
    }
    ha-slider {
      width: 100%;
    }
  `,t([ne({type:Number})],Ka.prototype,"min",void 0),t([ne({type:Number})],Ka.prototype,"max",void 0),t([ne({type:Number})],Ka.prototype,"step",void 0),t([ne({type:Number})],Ka.prototype,"value",null),t([ne({type:Number})],Ka.prototype,"scaleFactor",void 0),t([ne({type:String})],Ka.prototype,"unit",void 0),t([ne({type:Boolean})],Ka.prototype,"optional",void 0),t([ne({type:Boolean})],Ka.prototype,"disabled",void 0),t([ne({type:Number})],Ka.prototype,"_displayedValue",void 0),Ka=t([ae("variable-slider")],Ka);let Ja=class extends ie{firstUpdated(){var e;null!==this.value&&void 0!==this.value||(null===(e=this.variable)||void 0===e?void 0:e.type)!=qe.Level||this.variable.optional||this.levelVariableUpdated(this.variable.min)}render(){return this.variable?this.variable.type==qe.Level?this.renderLevelVariable():this.variable.type==qe.List?this.renderListVariable():this.variable.type==qe.Text?this.renderTextVariable():I``:I``}levelVariableUpdated(e){const t="number"==typeof e?e:Number(e.detail.value);this.value=t,Ne(this,"value-changed",{value:t})}renderLevelVariable(){const e=this.variable,t=Number(this.value);return I`
      <variable-slider
        min=${e.min}
        max=${e.max}
        step=${e.step}
        scaleFactor=${e.scale_factor}
        value=${t}
        .unit=${e.unit}
        ?optional=${e.optional}
        ?disabled=${isNaN(t)}
        @value-changed=${this.levelVariableUpdated}
      >
      </variable-slider>
    `}listVariableUpdated(e){const t="string"==typeof e?e:String(e.target.value);this.value=t,Ne(this,"value-changed",{value:t})}renderListVariable(){const e=this.variable.options,t=String(this.value)||null;return 1==e.length&&t!=e[0].value&&this.listVariableUpdated(e[0].value),I`
      <button-group .items=${e} value=${t} @change=${this.listVariableUpdated}> </button-group>
    `}renderTextVariable(){const e=this.variable,t=this.value;return I`
      <ha-textfield .value=${t||""} @input=${this.listVariableUpdated} .label=${e.name}> </ha-textfield>
    `}};Ja.styles=r`
    ha-textfield {
      width: 100%;
    }
  `,t([ne()],Ja.prototype,"variable",void 0),t([ne()],Ja.prototype,"value",void 0),Ja=t([ae("scheduler-variable-picker")],Ja);let Xa=class extends ie{async showDialog(e){this._params=e,await this.updateComplete}async closeDialog(){this._params&&this._params.cancel(),this._params=void 0}render(){return this._params?I`
      <ha-dialog open .heading=${!0} @closed=${this.closeDialog} @close-dialog=${this.closeDialog}>
        <div slot="heading">
          <ha-header-bar>
            <ha-icon-button slot="navigationIcon" dialogAction="cancel" .path=${Sa}> </ha-icon-button>
            <span slot="title">
              ${us("ui.dialog.confirm_delete.title",ut(this.hass))}
            </span>
          </ha-header-bar>
        </div>
        <div class="wrapper">
          ${us("ui.dialog.confirm_delete.description",ut(this.hass))}
        </div>

        <mwc-button slot="primaryAction" @click=${this.cancelClick} dialogAction="close">
          ${this.hass.localize("ui.dialogs.generic.cancel")}
        </mwc-button>
        <mwc-button slot="secondaryAction" style="float: left" @click=${this.confirmClick} dialogAction="close">
          ${this.hass.localize("ui.dialogs.generic.ok")}
        </mwc-button>
      </ha-dialog>
    `:I``}confirmClick(){this._params.confirm()}cancelClick(){this._params.cancel()}static get styles(){return r`
      div.wrapper {
        color: var(--primary-text-color);
      }
    `}};t([ne({attribute:!1})],Xa.prototype,"hass",void 0),t([re()],Xa.prototype,"_params",void 0),Xa=t([ae("dialog-delete-confirm")],Xa);var Qa=Object.freeze({__proto__:null,get DialogDeleteConfirm(){return Xa}});const eo=(e,t)=>{let i={entity_id:e,service:t.service,service_data:Object.assign({},t.service_data)};return Object.entries(t.variables||{}).forEach(([e,t])=>{Object.keys(i.service_data||{}).includes(e)||(t.type==qe.Level?(t=t,i=Object.assign(Object.assign({},i),{service_data:t.optional?tt(i.service_data||{},e):Object.assign(Object.assign({},i.service_data),{[e]:parseFloat((t.min*t.scale_factor).toPrecision(12))||0})})):t.type==qe.List?(t=t,i=Object.assign(Object.assign({},i),{service_data:Object.assign(Object.assign({},i.service_data),{[e]:t.options.length?t.options[0].value:void 0})})):t.type==qe.Text&&(t=t,i=Object.assign(Object.assign({},i),{service_data:Object.assign(Object.assign({},i.service_data),{[e]:""})})))}),i};let to=class extends ie{constructor(){super(...arguments),this.activeEntry=null,this.activeMarker=null,this.timeslots=!1,this.editItem=!1}firstUpdated(){if(!this.actions||!this.hass)return;this.timeslots||(this.activeEntry=0);const e=this.actions.map(e=>{const t=Object.assign(Object.assign({},e),{service_data:tt(e.service_data||{},...Object.keys(e.variables||{}))});return Object.assign(e,{name:ia(t)})});e.sort(nt),this.actions=e}render(){return this.hass&&this.config&&this.entities&&this.actions?I`
      <ha-card>
        <div class="card-header">
          <div class="name">
            ${this.config.title?"string"==typeof this.config.title?this.config.title:us("ui.panel.common.title",ut(this.hass)):""}
          </div>
          <ha-icon-button .path=${Sa} @click=${this.cancelClick}> </ha-icon-button>
        </div>
        <div class="card-content">
          <div class="header">
            ${this.hass.localize("ui.panel.config.automation.editor.actions.type.device_id.action")}
          </div>
          ${this.renderSummary()}
          ${this.timeslots?I`
                ${this.renderDays()}
                <div class="header">${us("ui.panel.time_picker.time_scheme",ut(this.hass))}</div>

                <timeslot-editor
                  .hass=${this.hass}
                  .actions=${this.actions}
                  .slots=${this.schedule.timeslots}
                  stepSize=${this.config.time_step||10}
                  @update=${this.handlePlannerUpdate}
                >
                </timeslot-editor>

                ${this.renderMarkerOptions()} ${this.renderActions()} ${this.getVariableEditor()}
              `:I`
                ${this.getVariableEditor()} ${this.renderDays()}
                <div class="header">${this.hass.localize("ui.dialogs.helper_settings.input_datetime.time")}</div>
                <time-picker
                  .hass=${this.hass}
                  .value=${this.schedule.timeslots[0].start}
                  stepSize=${this.config.time_step||10}
                  @change=${e=>this.updateActiveEntry({start:e.target.value})}
                >
                </time-picker>
              `}
        </div>
        <div class="card-actions">
          <mwc-button
            @click=${this.saveClick}
            ?disabled=${!this.schedule.timeslots.filter(e=>e.actions.length).length}
          >
            ${this.hass.localize("ui.common.save")}
          </mwc-button>
          ${this.editItem?I`
                <mwc-button class="warning" @click=${this.deleteClick}
                  >${this.hass.localize("ui.common.delete")}</mwc-button
                >
              `:""}
          <mwc-button @click="${this.optionsClick}" style="float: right"
            >${this.hass.localize("ui.dialogs.helper_settings.input_select.options")}</mwc-button
          >
        </div>
      </ha-card>
    `:I``}renderSummary(){return this.entities&&this.actions?I`
      <div class="summary">
        <div class="summary-entity" @click=${this.editActionClick}>
          ${this.entities.map(e=>I`
              <div>
                <ha-icon icon="${ct(e.icon)}"> </ha-icon>
                ${rt(lt(e.name||this.hass.states[e.id].attributes.friendly_name||Te(e.id)))}
              </div>
            `)}
        </div>
        <div class="summary-arrow">
          <ha-icon icon="mdi:arrow-right"> </ha-icon>
        </div>
        <div class="summary-action" @click=${this.editActionClick}>
          ${this.timeslots?I`
                <div>
                  <ha-icon icon="${ct("chart-timeline")}"> </ha-icon>
                  ${rt(us("ui.panel.entity_picker.make_scheme",ut(this.hass)))}
                </div>
              `:I`
                <div>
                  <ha-icon icon="${ct(this.actions[0].icon||"flash")}"> </ha-icon>
                  ${rt(this.actions[0].name||Te(this.actions[0].service))}
                </div>
              `}
        </div>
      </div>
    `:I``}renderDays(){if(!this.hass)return I``;let e=Array.from(Array(7).keys());const t=function(e){const t=e.match(/^([a-z]{2,3})(?:-([a-z]{3})(?=$|-))?(?:-([a-z]{4})(?=$|-))?(?:-([a-z]{2}|\d{3})(?=$|-))?/i),i=t[1],s=t[4],a="AEAFBHDJDZEGIQIRJOKWLYOMQASDSY".match(/../g),o="AGARASAUBDBRBSBTBWBZCACNCODMDOETGTGUHKHNIDILINJMJPKEKHKRLAMHMMMOMTMXMZNINPPAPEPHPKPRPTPYSASGSVTHTTTWUMUSVEVIWSYEZAZW".match(/../g),n="amasbndzengnguhehiidjajvkmknkolomhmlmrmtmyneomorpapssdsmsnsutatethtnurzhzu".match(/../g);return s?o.includes(s)?"sun":a.includes(s)?"sat":"mon":n.includes(i)?"sun":["ar","arq","arz","fa"].includes(i)?"sat":"mon"}(this.hass.language),i=e.length-na.findIndex(e=>e.substr(0,3)==t);e=[...e.slice(-i),...e.slice(0,-i)];const s=e.map(e=>Object({value:na[e].substr(0,3),name:ra(e,ut(this.hass),!0)})),a=[{value:He.Daily,name:us("ui.components.date.day_types_short.daily",ut(this.hass))},{value:He.Workday,name:us("ui.components.date.day_types_short.workdays",ut(this.hass))},{value:He.Weekend,name:us("ui.components.date.day_types_short.weekend",ut(this.hass))},{value:He.Custom,name:this.hass.localize("ui.panel.config.automation.editor.actions.type.choose.label")}];return I`
      <div class="header">${us("ui.components.date.days",ut(this.hass))}</div>
      <button-group .items=${a} value=${la(this.schedule.weekdays)} @change=${this.selectDays}>
      </button-group>
      ${la(this.schedule.weekdays)==He.Custom?I`
            <div>
              <button-group
                .items=${s}
                .value=${this.schedule.weekdays}
                min="1"
                multiple
                @change=${this.selectDays}
              >
              </button-group>
            </div>
          `:""}
    `}renderActions(){var e;if(!this.hass||null!==this.activeMarker)return;const t=null!==this.activeEntry&&this.schedule.timeslots[this.activeEntry].actions.length?this.schedule.timeslots[this.activeEntry].actions[0]:null;return I`
      <div class="header">${this.hass.localize("ui.panel.config.automation.editor.actions.type.device_id.action")}</div>
      <button-group
        .items=${null!==this.activeEntry?this.actions:[]}
        .value=${null!==t?null===(e=this.actions)||void 0===e?void 0:e.findIndex(e=>ws(e,t,!0)):null}
        optional="true"
        @change=${this.selectAction}
      >
        ${us("ui.panel.time_picker.no_timeslot_selected",ut(this.hass))}
      </button-group>
    `}renderMarkerOptions(){if(!this.hass||!this.config||null===this.activeMarker)return;const e=this.schedule.timeslots[this.activeMarker].start,t=Qe(e),i=Ke(e,this.hass)-Ke("sunrise+00:00",this.hass),s=Ke(e,this.hass)-Ke("sunset+00:00",this.hass),a=[{value:"time",name:this.hass.localize("ui.panel.config.automation.editor.triggers.type.time.at"),icon:"mdi:clock-outline"},{value:Ue.Sunrise,name:this.hass.localize("ui.panel.config.automation.editor.conditions.type.sun.sunrise"),icon:"mdi:weather-sunny",disabled:Math.abs(i)>7200},{value:Ue.Sunset,name:this.hass.localize("ui.panel.config.automation.editor.conditions.type.sun.sunset"),icon:"mdi:weather-night",disabled:Math.abs(s)>7200}];return I`
      <div class="header">${us("ui.panel.time_picker.time_input_mode",ut(this.hass))}</div>
      <button-group .items=${a} .value=${t?t.event:"time"} @change=${this.updateMarkerSetting}>
      </button-group>
    `}updateMarkerSetting(e){const t=e.target.value,i=this.schedule.timeslots[this.activeMarker].start,s="time"==t?((e,t,i={})=>{const s=Qe(e);if(!s)return e;const a=t.states["sun.sun"],o="sunrise"==s.event?Ke(a.attributes.next_rising,t):Ke(a.attributes.next_setting,t);let n="+"==s.sign?o+Ke(s.offset,t):o-Ke(s.offset,t);return i.stepSize&&(n=Xe(n,i.stepSize)),Je(n)})(i,this.hass,{stepSize:this.config.time_step}):Wa(i,t,this.hass,{stepSize:this.config.time_step});let a=[...this.schedule.timeslots];a=Object.assign(a,{[this.activeMarker-1]:Object.assign(Object.assign({},this.schedule.timeslots[this.activeMarker-1]),{stop:s}),[this.activeMarker]:Object.assign(Object.assign({},this.schedule.timeslots[this.activeMarker]),{start:s})}),this.schedule=Object.assign(Object.assign({},this.schedule),{timeslots:[...a]})}updateActiveEntry(e){null!==this.activeEntry&&(this.schedule=Object.assign(Object.assign({},this.schedule),{timeslots:Object.assign([...this.schedule.timeslots],{[this.activeEntry]:Object.assign(Object.assign({},this.schedule.timeslots[this.activeEntry]),e)})}))}updateActiveEntryAction(e,t){null!==this.activeEntry&&(e&&"service"in e?this.updateActiveEntry({actions:Object.assign([...this.schedule.timeslots[this.activeEntry].actions],{[t]:Object.assign(Object.assign({},this.schedule.timeslots[this.activeEntry].actions[t]),e)})}):e?Object.entries(e).forEach(([e,i])=>{let s=[...this.schedule.timeslots[this.activeEntry].actions],a="object"==typeof i&&e in this.schedule.timeslots[this.activeEntry].actions[t]?Object.assign(Object.assign({},s[t][e]),i):i;const o=Object.keys(a).filter(e=>null===a[e]);o.length&&(a=tt(a,...o)),s=Object.assign(s,{[t]:Object.assign(Object.assign({},s[t]),{[e]:a})}),this.updateActiveEntry({actions:s})}):this.updateActiveEntry({actions:[...this.schedule.timeslots[this.activeEntry].actions].filter((e,i)=>i!=t)}))}handlePlannerUpdate(e){if(e.detail.hasOwnProperty("entries")){const t=e.detail.entries;t.length<this.schedule.timeslots.length&&this.activeEntry==this.schedule.timeslots.length-1&&(this.activeEntry=this.schedule.timeslots.length-2),this.schedule=Object.assign(Object.assign({},this.schedule),{timeslots:[...t]})}else e.detail.hasOwnProperty("entry")&&(this.activeMarker=null,this.activeEntry=null!==e.detail.entry?Number(e.detail.entry):null);e.detail.hasOwnProperty("marker")&&(this.activeEntry=null,this.activeMarker=null!==e.detail.marker?Number(e.detail.marker):null)}selectAction(e){if(!this.actions||null===this.activeEntry)return;const t=e.detail;t?this.entities.map(e=>e.id).forEach((e,i)=>{this.updateActiveEntryAction(eo(e,t),i)}):this.entities.forEach((e,t)=>{this.updateActiveEntryAction(null,t)})}getVariableEditor(){if(null===this.activeEntry||!this.actions)return I``;const e=[];return this.schedule.timeslots[this.activeEntry].actions.forEach(t=>{t=tt(t,"entity_id"),this.actions.find(e=>ws(e,t,!0)&&Object.keys(e.variables||{}).length)&&(e.some(e=>ot(e,t))||e.push(t))}),e.map(e=>Object.entries(this.actions.find(t=>ws(t,e,!0)).variables).map(([t,i])=>I`
            <div class="header">
              ${i.name||lt(t)}
            </div>
            <scheduler-variable-picker
              .variable=${i}
              .value=${e.service_data?e.service_data[t]:null}
              @value-changed=${e=>this.entities.forEach((i,s)=>{this.updateActiveEntryAction({service_data:{[t]:e.detail.value}},s)})}
            >
              ${this.hass.localize("ui.dialogs.helper_settings.input_select.no_options")}
            </scheduler-variable-picker>
          `))}selectDays(e){const t=e.target.value;let i=this.schedule.weekdays;if(Object.values(He).includes(t))switch(t){case He.Daily:i=["daily"];break;case He.Workday:i=["workday"];break;case He.Weekend:i=["weekend"];break;case He.Custom:i=[]}else i=t;this.schedule=Object.assign(Object.assign({},this.schedule),{weekdays:i})}cancelClick(){const e=new CustomEvent("cancelClick");this.dispatchEvent(e)}saveClick(){const e=new CustomEvent("saveClick",{detail:this.schedule});this.dispatchEvent(e)}optionsClick(){const e=new CustomEvent("optionsClick",{detail:this.schedule});this.dispatchEvent(e)}editActionClick(){const e=new CustomEvent("editActionClick",{detail:this.schedule});this.dispatchEvent(e)}async deleteClick(e){const t=e.target;if(await new Promise(e=>{Ne(t,"show-dialog",{dialogTag:"dialog-delete-confirm",dialogImport:()=>Promise.resolve().then((function(){return Qa})),dialogParams:{cancel:()=>{e(!1)},confirm:()=>{e(!0)}}})})){const e=new CustomEvent("deleteClick");this.dispatchEvent(e)}}};to.styles=r`
    ${hs}
    div.summary {
      display: grid;
      grid-template-columns: 1fr max-content 1fr;
      grid-template-areas: 'entity arrow action';
      grid-auto-flow: column;
      grid-gap: 5px;
    }

    div.summary-entity {
      grid-area: entity;
    }
    div.summary-action {
      grid-area: action;
    }
    div.summary-arrow {
      grid-area: arrow;
      color: var(--secondary-text-color);
      display: flex;
      justify-content: center;
      align-items: center;
    }
    div.summary-entity,
    div.summary-action {
      color: var(--dark-primary-color);
      padding: 5px;
      font-size: 14px;
      font-weight: 500;
      --mdc-icon-size: 20px;
      position: relative;
      display: flex;
      flex-direction: column;
      cursor: pointer;
      background: rgba(var(--rgb-primary-color), 0.15);
      border-radius: 4px;
      align-items: center;
    }
    div.summary-entity div,
    div.summary-action div {
      display: flex;
      flex-grow: 1;
      margin: 5px;
      width: 100%;
      align-items: center;
    }
    div.summary-entity ha-icon,
    div.summary-action ha-icon {
      display: flex;
      flex: 0 0 30px;
    }
  `,t([ne()],to.prototype,"hass",void 0),t([ne()],to.prototype,"config",void 0),t([ne()],to.prototype,"schedule",void 0),t([ne()],to.prototype,"actions",void 0),t([ne()],to.prototype,"entities",void 0),t([ne()],to.prototype,"activeEntry",void 0),t([ne()],to.prototype,"activeMarker",void 0),t([ne({type:Boolean})],to.prototype,"timeslots",void 0),t([ne({type:Boolean})],to.prototype,"editItem",void 0),to=t([ae("scheduler-timepicker-card")],to);let io=class extends ie{constructor(){super(...arguments),this.label="",this.items=[],this.clearable=!1,this.icons=!1,this.disabled=!1,this.allowCustomValue=!1,this.invalid=!1}disconnectedCallback(){super.disconnectedCallback(),this._overlayMutationObserver&&(this._overlayMutationObserver.disconnect(),this._overlayMutationObserver=void 0)}open(){this.updateComplete.then(()=>{var e,t;null===(t=null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector("vaadin-combo-box-light"))||void 0===t||t.open()})}focus(){this.updateComplete.then(()=>{var e,t,i;null===(i=null===(t=null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector("vaadin-combo-box-light"))||void 0===t?void 0:t.inputElement)||void 0===i||i.focus()})}shouldUpdate(e){if(e.get("items"))if(ot(this.items,e.get("items"))){if(1==e.size)return!1}else this.firstUpdated();return!0}firstUpdated(){(async()=>{await Za()})(),this._comboBox.items=this.items}render(){return I`
      <vaadin-combo-box-light
        item-value-path="value"
        item-id-path="value"
        item-label-path="name"
        .value=${this._value}
        .renderer=${this.rowRenderer}
        .allowCustomValue=${this.allowCustomValue}
        ?disabled=${this.disabled}
        @opened-changed=${this._openedChanged}
        @value-changed=${this._valueChanged}
      >
        <ha-textfield
          .label=${this.label}
          class="input"
          autocapitalize="none"
          autocomplete="off"
          autocorrect="off"
          spellcheck="false"
          ?disabled=${this.disabled}
          ?invalid=${this.invalid}
        >
          ${at(this._value)&&this.items.find(e=>e.value==this._value)?I`
                ${this.icons?I`
                      <ha-icon slot="prefix" icon="${this.items.find(e=>e.value==this._value).icon}"> </ha-icon>
                    `:""}
                ${this.clearable?I`
                      <ha-icon-button slot="suffix" class="clear-button" @click=${this._clearValue} .path=${Sa}>
                      </ha-icon-button>
                    `:""}
              `:""}
        </ha-textfield>
        <ha-svg-icon
          class="toggle-button ${this.items.length?"":"disabled"}"
          .path=${this._opened&&this.items.length?"M7,15L12,10L17,15H7Z":"M7,10L12,15L17,10H7Z"}
          @click=${this._toggleOpen}
        ></ha-svg-icon>
      </vaadin-combo-box-light>
    `}rowRenderer(e,t,i){e.firstElementChild||(e.innerHTML='\n        <mwc-list-item>\n          <span class="name"><span>\n        </mwc-list-item>\n      '),e.querySelector(".name").textContent=i.item.name}_clearValue(e){e.stopPropagation(),this._setValue("")}get _value(){return at(this.value)?this.value:""}_toggleOpen(e){var t,i,s,a,o,n;this.items.length?this._opened?(null===(s=null===(i=null===(t=this.shadowRoot)||void 0===t?void 0:t.querySelector("vaadin-combo-box-light"))||void 0===i?void 0:i.inputElement)||void 0===s||s.blur(),e.stopPropagation()):null===(n=null===(o=null===(a=this.shadowRoot)||void 0===a?void 0:a.querySelector("vaadin-combo-box-light"))||void 0===o?void 0:o.inputElement)||void 0===n||n.focus():e.stopPropagation()}_openedChanged(e){if(this._opened=e.detail.value,this._opened&&"MutationObserver"in window&&!this._overlayMutationObserver){const e=document.querySelector("vaadin-combo-box-overlay");if(!e)return;this._overlayMutationObserver=new MutationObserver(t=>{t.forEach(t=>{var i;"attributes"===t.type&&"inert"===t.attributeName&&!0===e.inert?(e.inert=!1,null===(i=this._overlayMutationObserver)||void 0===i||i.disconnect(),this._overlayMutationObserver=void 0):"childList"===t.type&&t.removedNodes.forEach(e=>{var t;"VAADIN-COMBO-BOX-OVERLAY"===e.nodeName&&(null===(t=this._overlayMutationObserver)||void 0===t||t.disconnect(),this._overlayMutationObserver=void 0)})})}),this._overlayMutationObserver.observe(e,{attributes:!0}),this._overlayMutationObserver.observe(document.body,{childList:!0})}}_valueChanged(e){const t=e.detail.value;t!==this._value&&this._setValue(t)}_setValue(e){this.value=e,setTimeout(()=>{Ne(this,"value-changed",{value:e})},0)}static get styles(){return r`
      :host {
        display: block;
        width: 100%;
      }
      vaadin-combo-box-light {
        position: relative;
      }
      ha-textfield {
        width: 100%;
      }
      ha-textfield > ha-icon-button {
        --mdc-icon-button-size: 24px;
        padding: 2px;
        color: var(--secondary-text-color);
      }
      ha-svg-icon {
        color: var(--input-dropdown-icon-color);
        position: absolute;
        cursor: pointer;
      }
      ha-svg-icon.disabled {
        cursor: default;
        color: var(--disabled-text-color);
      }
      .toggle-button {
        right: 12px;
        top: -10px;
      }
      :host([opened]) .toggle-button {
        color: var(--primary-color);
      }
    `}};t([ne()],io.prototype,"label",void 0),t([ne()],io.prototype,"value",void 0),t([ne()],io.prototype,"items",void 0),t([ne()],io.prototype,"clearable",void 0),t([ne()],io.prototype,"icons",void 0),t([ne({type:Boolean})],io.prototype,"disabled",void 0),t([re()],io.prototype,"_opened",void 0),t([ne({attribute:"allow-custom-value",type:Boolean})],io.prototype,"allowCustomValue",void 0),t([ne({type:Boolean})],io.prototype,"invalid",void 0),t([function(e,t){return le({descriptor:i=>{const s={get(){var t,i;return null!==(i=null===(t=this.renderRoot)||void 0===t?void 0:t.querySelector(e))&&void 0!==i?i:null},enumerable:!0,configurable:!0};if(t){const t="symbol"==typeof i?Symbol():"__"+i;s.get=function(){var i,s;return void 0===this[t]&&(this[t]=null!==(s=null===(i=this.renderRoot)||void 0===i?void 0:i.querySelector(e))&&void 0!==s?s:null),this[t]}}return s}})}("vaadin-combo-box-light",!0)],io.prototype,"_comboBox",void 0),io=t([ae("scheduler-select")],io);let so=class extends ie{constructor(){super(...arguments),this.items=[],this.value=[],this.label="",this.invalid=!1}shouldUpdate(e){return e.get("items")&&(ot(this.items,e.get("items"))||this.firstUpdated()),!0}firstUpdated(){this.value.some(e=>!this.items.map(e=>e.value).includes(e))&&(this.value=this.value.filter(e=>this.items.map(e=>e.value).includes(e)),Ne(this,"value-changed",{value:this.value}))}render(){return I`
      <div class="chip-set">
        ${this.value.length?this.value.map(e=>this.items.find(t=>t.value==e)).filter(at).map(e=>I`
          <div class="chip">
            <span class="label">
              ${e.name}
            </span>            
            <ha-icon class="button" icon="mdi:close" @click=${()=>this._removeClick(e.value)}>
            </ha-icon>
            </mwc-icon-button>
          </div>
        `):""}
      </div>

      <scheduler-select
        .items=${this.items.filter(e=>!this.value.includes(e.value))}
        label=${this.label}
        .icons=${!1}
        .allowCustomValue=${!0}
        @value-changed=${this._addClick}
        ?invalid=${this.invalid&&this.value.length!=this.items.length}
      >
      </scheduler-select>
    `}_removeClick(e){this.value=this.value.filter(t=>t!==e),Ne(this,"value-changed",{value:this.value})}_addClick(e){e.stopPropagation();const t=e.target,i=t.value;this.value.includes(i)||(this.value=[...this.value,i]),t.value="",Ne(this,"value-changed",{value:[...this.value]})}static get styles(){return r`
      div.chip-set {
        margin: 0px -4px;
      }
      div.chip {
        height: 32px;
        border-radius: 16px;
        border: 2px solid rgba(var(--rgb-primary-color), 0.54);
        line-height: 1.25rem;
        font-size: 0.875rem;
        font-weight: 400;
        padding: 0px 12px;
        display: inline-flex;
        align-items: center;
        box-sizing: border-box;
        margin: 4px;
      }
      .icon {
        vertical-align: middle;
        outline: none;
        display: flex;
        align-items: center;
        border-radius: 50%;
        padding: 6px;
        color: rgba(0, 0, 0, 0.54);
        background: rgb(168, 232, 251);
        --mdc-icon-size: 20px;
        margin-left: -14px !important;
      }
      .label {
        margin: 0px 4px;
      }
      .button {
        cursor: pointer;
        background: var(--secondary-text-color);
        border-radius: 50%;
        --mdc-icon-size: 14px;
        color: var(--card-background-color);
        width: 16px;
        height: 16px;
        padding: 1px;
        box-sizing: border-box;
        display: inline-flex;
        align-items: center;
        margin-right: -6px !important;
      }
    `}};t([ne()],so.prototype,"items",void 0),t([ne({type:Array})],so.prototype,"value",void 0),t([ne()],so.prototype,"label",void 0),t([ne({type:Boolean})],so.prototype,"invalid",void 0),so=t([ae("scheduler-selector")],so);const ao=(e,t)=>{let i={};return(null==t?void 0:t.length)&&!t.includes(Re.Above)||(i=Object.assign(Object.assign({},i),{[Re.Above]:{value:Re.Above,name:e.localize("ui.panel.config.automation.editor.triggers.type.numeric_state.above"),icon:"mdi:greater-than"}})),(null==t?void 0:t.length)&&!t.includes(Re.Below)||(i=Object.assign(Object.assign({},i),{[Re.Below]:{value:Re.Below,name:e.localize("ui.panel.config.automation.editor.triggers.type.numeric_state.below"),icon:"mdi:less-than"}})),(null==t?void 0:t.length)&&!t.includes(Re.Equal)||(i=Object.assign(Object.assign({},i),{[Re.Equal]:{value:Re.Equal,name:us("ui.panel.conditions.equal_to",ut(e)),icon:"mdi:equal"}})),(null==t?void 0:t.length)&&!t.includes(Re.Unequal)||(i=Object.assign(Object.assign({},i),{[Re.Unequal]:{value:Re.Unequal,name:us("ui.panel.conditions.unequal_to",ut(e)),icon:"mdi:not-equal-variant"}})),i};let oo=class extends ie{constructor(){super(...arguments),this.addCondition=!1,this.tags=[],this.startDate="",this.endDate=""}async firstUpdated(){var e,t,i;if(null===(e=this.config)||void 0===e?void 0:e.tags){(async()=>{await Za()})();const e=(await vs(this.hass)).map(e=>e.name),t=ht(this.config.tags);this.tags=[...e,...t.filter(t=>!e.includes(t)&&!["none","disabled","enabled"].includes(t))]}(await window.loadCardHelpers()).importMoreInfoControl("input_datetime"),this.startDate=(null===(t=this.schedule)||void 0===t?void 0:t.start_date)||ya(new Date,ut(this.hass),!0),this.endDate=(null===(i=this.schedule)||void 0===i?void 0:i.end_date)||ya(new Date,ut(this.hass),!0)}render(){var e,t;if(!this.hass||!this.config||!this.schedule)return I``;let i=[{name:this.hass.localize("ui.panel.config.automation.editor.actions.type.repeat.label"),value:Pe.Repeat,icon:"refresh"},{name:this.hass.localize("ui.dialogs.more_info_control.vacuum.stop"),value:Pe.Pause,icon:"stop"},{name:this.hass.localize("ui.common.delete"),value:Pe.Single,icon:"trash-can-outline"}];return at(this.schedule.start_date)&&(i=i.filter(e=>e.value!=Pe.Repeat)),I`
      <ha-card>
        <div class="card-header">
          <div class="name">
            ${this.config.title?"string"==typeof this.config.title?this.config.title:us("ui.panel.common.title",ut(this.hass)):""}
          </div>
          <ha-icon-button .path=${Sa} @click=${this.cancelClick}> </ha-icon-button>
        </div>
        <div class="card-content">
          ${this.addCondition?this.renderAddCondition():I`
                <div class="header">
                  ${this.hass.localize("ui.panel.config.automation.editor.actions.type.choose.conditions")}
                  ${!this.schedule.timeslots[0].conditions||this.schedule.timeslots[0].conditions.length<2?"":I`
                        <div class="switch">
                          ${us("ui.panel.conditions.any",ut(this.hass))}
                          <ha-switch
                            style="margin: 0px 10px"
                            @change=${this.conditionTypeSwitchClick}
                            ?checked=${this.schedule.timeslots[0].condition_type==Ve.All}
                          ></ha-switch>
                          ${us("ui.panel.conditions.all",ut(this.hass))}
                        </div>
                      `}
                </div>
                ${this.renderConditions()}

                <div class="condition-options">
                  <div style="flex: 1">
                    <mwc-button @click=${this.addConditionClick}>
                      <ha-icon icon="mdi:plus-circle-outline" class="padded-right"></ha-icon>
                      ${this.hass.localize("ui.dialogs.helper_settings.input_select.add")}
                    </mwc-button>
                  </div>
                  <div class="track-conditions">
                    ${this.schedule.timeslots[0].stop&&this.schedule.timeslots[0].conditions&&this.schedule.timeslots[0].conditions.length>0?I`
                          <ha-checkbox
                            id="track_conditions"
                            ?checked=${this.schedule.timeslots[0].track_conditions}
                            @change=${this.trackConditionsClick}
                          ></ha-checkbox>
                          <span
                            @click=${()=>this.shadowRoot.querySelector("#track_conditions").click()}
                          >
                            ${us("ui.panel.conditions.track_conditions",ut(this.hass))}
                          </span>
                        `:""}
                  </div>
                </div>

                <div class="header">${us("ui.panel.options.period",ut(this.hass))}</div>
                <div class="checkbox-container">
                  <div class="checkbox">
                    <ha-checkbox ?checked=${at(this.schedule.start_date)} @change=${this.toggleEnableDateRange}>
                    </ha-checkbox>
                  </div>
                  <div class="slider date-range">
                    <div>
                      <span>
                        ${lt((null===(e=us("ui.components.date.days_range",ut(this.hass)).split("{").shift())||void 0===e?void 0:e.trim())||"")}
                      </span>
                      <ha-date-input
                        .locale=${this.hass.locale}
                        value=${this.startDate}
                        .label=${this.hass.localize("ui.components.date-range-picker.start_date")}
                        @value-changed=${this._setStartDate}
                        ?disabled=${!at(this.schedule.start_date)}
                      >
                      </ha-date-input>
                    </div>

                    <div>
                      <span>
                        ${lt((null===(t=us("ui.components.date.days_range",ut(this.hass)).split("}")[1].split("{").shift())||void 0===t?void 0:t.trim())||"")}
                      </span>
                      <ha-date-input
                        .locale=${this.hass.locale}
                        value=${this.endDate}
                        .label=${this.hass.localize("ui.components.date-range-picker.end_date")}
                        @value-changed=${this._setEndDate}
                        ?disabled=${!at(this.schedule.start_date)}
                      >
                      </ha-date-input>
                    </div>
                  </div>
                </div>

                <div class="header">${this.hass.localize("ui.components.area-picker.add_dialog.name")}</div>
                <ha-textfield
                  value=${this.schedule.name||""}
                  placeholder=${this.schedule.name?"":this.hass.localize("ui.components.area-picker.add_dialog.name")}
                  @input=${this.updateName}
                ></ha-textfield>

                ${this.config.tags?I`
                      <div class="header">${this.hass.localize("ui.panel.config.tag.caption")}</div>
                      <scheduler-selector
                        .items=${this.getTagOptions()}
                        .value=${this.schedule.tags||[]}
                        @value-changed=${this.updateTags}
                        label=${this.hass.localize("ui.panel.config.tag.add_tag")}
                      >
                      </scheduler-selector>
                    `:""}

                <div class="header">${us("ui.panel.options.repeat_type",ut(this.hass))}</div>
                <button-group
                  .items=${i}
                  value="${this.schedule.repeat_type}"
                  @change=${this.updateRepeatType}
                >
                </button-group>
              `}
        </div>
        <div class="card-actions">
          ${this.addCondition?I`
                <mwc-button
                  @click=${this.confirmConditionClick}
                  ?disabled=${!this.selectedEntity||!this.conditionMatchType||!at(this.conditionValue)||"string"==typeof this.conditionValue&&!this.conditionValue.trim().length}
                  >${this.hass.localize("ui.common.save")}</mwc-button
                >
                ${void 0!==this.editItem?I`
                      <mwc-button class="warning" @click=${this.deleteConditionClick}
                        >${this.hass.localize("ui.common.delete")}</mwc-button
                      >
                    `:""}
                <mwc-button @click=${this.cancelConditionClick} style="float: right"
                  >${this.hass.localize("ui.common.cancel")}</mwc-button
                >
              `:I`
                <mwc-button
                  @click=${this.saveClick}
                  ?disabled=${!this.schedule.timeslots.filter(e=>e.actions.length).length}
                >
                  ${this.hass.localize("ui.common.save")}
                </mwc-button>
                <mwc-button @click=${this.backClick} style="float: right"
                  >${this.hass.localize("ui.common.back")}</mwc-button
                >
              `}
        </div>
      </ha-card>
    `}renderAddCondition(){if(!this.addCondition||!this.hass||!this.config)return I``;if(this.selectedEntity){const e=this.selectedEntity,t=Va(e.id,this.hass,this.config);let i;if((null==t?void 0:t.type)==qe.Level)i=[Re.Above,Re.Below];else if((null==t?void 0:t.type)==qe.List)i=[Re.Equal,Re.Unequal];else{const t=e.id in this.hass.states?this.hass.states[e.id].state:null;i=!t||["unavailable","unknown"].includes(t)?[Re.Equal,Re.Unequal,Re.Above,Re.Below]:isNaN(Number(t))?[Re.Equal,Re.Unequal]:[Re.Above,Re.Below]}const s=ao(this.hass,i);return I`
        <div class="header">${this.hass.localize("ui.components.entity.entity-picker.entity")}</div>
        <div style="display: flex; flex-direction: row; align-items: center">
          <mwc-button class="active" disabled style="--mdc-button-disabled-ink-color: var(--text-primary-color)">
            <ha-icon icon="${ct(e.icon||"folder-outline")}"></ha-icon>
            ${lt(e.name)}
          </mwc-button>
          <ha-icon-button
            .path=${Ea}
            style="margin-left: 10px"
            @click=${()=>{this.selectedEntity=void 0}}
          >
          </ha-icon-button>
        </div>

        <div class="header">
          ${this.hass.localize("ui.panel.config.automation.editor.conditions.type.device.condition")}
        </div>
        <button-group
          .items=${Object.values(s)}
          value=${this.conditionMatchType}
          @change=${e=>this.conditionMatchType=e.target.value}
        >
        </button-group>

        <div class="header">${this.hass.localize("ui.panel.config.automation.editor.conditions.type.state.label")}</div>
        <scheduler-variable-picker
          .variable=${t}
          .value=${this.conditionValue}
          @value-changed=${e=>this.conditionValue=e.detail.value}
        >
        </scheduler-variable-picker>
      `}{const e=Ma(Ua(this.hass,this.config,{filterActions:!1,filterStates:!0}),this.config,this.hass);e.sort((e,t)=>e.name.trim().toLowerCase()<t.name.trim().toLowerCase()?-1:1);let t=[];return this.selectedGroup&&(t=e.find(e=>ot(e,this.selectedGroup)).entities.map(e=>oa(e,this.hass,this.config)),t.sort((e,t)=>e.name.trim().toLowerCase()<t.name.trim().toLowerCase()?-1:1)),I`
        <div class="header">${this.hass.localize("ui.panel.config.users.editor.group")}</div>

        <button-group
          .items=${e}
          .value=${e.findIndex(e=>ot(e,this.selectedGroup))}
          @change=${this.selectGroup}
        >
          ${us("ui.panel.entity_picker.no_groups_defined",ut(this.hass))}
        </button-group>

        <div class="header">${this.hass.localize("ui.components.entity.entity-picker.entity")}</div>
        <button-group
          .items=${t}
          .value=${t.findIndex(e=>ot(e,this.selectedEntity))}
          @change=${this.selectEntity}
        >
          ${this.selectedGroup?us("ui.panel.entity_picker.no_entities_for_group",ut(this.hass)):us("ui.panel.entity_picker.no_group_selected",ut(this.hass))}
        </button-group>
      `}}selectGroup(e){this.selectedGroup=e.detail,this.selectedEntity=void 0}selectEntity(e){this.selectedEntity=e.detail,this.conditionMatchType=void 0,this.conditionValue=void 0}renderConditions(){if(!this.hass||!this.schedule)return I``;const e=this.schedule.timeslots[0].conditions||[];return e.length?e.map((e,t)=>{const i=oa(e.entity_id,this.hass,this.config),s=Va(e.entity_id,this.hass,this.config);return I`
        <div class="summary">
          <ha-icon icon="${i.icon||"folder-outline"}"></ha-icon>
          <span>
            ${lt(i.name)} ${ao(this.hass)[e.match_type].name.toLowerCase()}
            ${s?s.type==qe.List?Ns(e.value,s):s.type==qe.Level?Cs(e.value,s):e.value:""}
          </span>
          <ha-icon-button
            .path=${Ea}
            @click=${()=>{this.editConditionClick(t)}}
          >
          </ha-icon-button>
        </div>
      `}):I`
        <div class="text-field">${us("ui.panel.conditions.no_conditions_defined",ut(this.hass))}</div>
      `}addConditionClick(){this.addCondition=!0,this.selectedEntity=void 0,this.selectedGroup=void 0}confirmConditionClick(){var e;if(!(this.selectedEntity&&this.config&&this.hass&&this.schedule&&this.conditionMatchType&&at(this.conditionValue)))return;const t={entity_id:this.selectedEntity.id,match_type:this.conditionMatchType,value:this.conditionValue,attribute:"state"},i=(null===(e=this.schedule.timeslots[0].conditions)||void 0===e?void 0:e.length)?[...this.schedule.timeslots[0].conditions]:[],s=this.schedule.timeslots[0].condition_type?this.schedule.timeslots[0].condition_type:Ve.Any;void 0===this.editItem?i.push(t):i.splice(this.editItem,1,t),this.schedule=Object.assign(Object.assign({},this.schedule),{timeslots:this.schedule.timeslots.map(e=>Object.assign(e,{conditions:i,condition_type:s}))}),this.addCondition=!1,this.editItem=void 0}cancelConditionClick(){this.addCondition=!1,this.editItem=void 0}editConditionClick(e){if(!(this.schedule&&this.schedule.timeslots[0].conditions&&this.hass&&this.config))return;const t=this.schedule.timeslots[0].conditions[e];if(!t)return;this.editItem=e;const i=Ma(Ua(this.hass,this.config,{filterActions:!1,filterStates:!0}),this.config,this.hass);this.selectedGroup=i.find(e=>e.entities.includes(t.entity_id)),this.selectedEntity=oa(t.entity_id,this.hass,this.config),this.conditionMatchType=t.match_type,this.conditionValue=t.value,this.addCondition=!0}deleteConditionClick(){var e;if(!this.config||!this.hass||!this.schedule||void 0===this.editItem)return;const t=(null===(e=this.schedule.timeslots[0].conditions)||void 0===e?void 0:e.length)?[...this.schedule.timeslots[0].conditions]:[];t.splice(this.editItem,1),this.schedule=Object.assign(Object.assign({},this.schedule),{timeslots:this.schedule.timeslots.map(e=>Object.assign(e,{conditions:t}))}),this.addCondition=!1,this.editItem=void 0}conditionTypeSwitchClick(e){if(!this.schedule)return;const t=e.target.checked?Ve.All:Ve.Any;this.schedule=Object.assign(Object.assign({},this.schedule),{timeslots:this.schedule.timeslots.map(e=>Object.assign(e,{condition_type:t}))})}trackConditionsClick(e){if(!this.schedule)return;const t=e.target.checked;this.schedule=Object.assign(Object.assign({},this.schedule),{timeslots:this.schedule.timeslots.map(e=>Object(Object.assign(Object.assign({},e),{track_conditions:t})))})}_setStartDate(e){const t=String(e.detail.value);if(!t)return;ha(t)>ha(this.endDate)&&(this.schedule=Object.assign(Object.assign({},this.schedule),{end_date:t}),this.endDate=t),this.schedule=Object.assign(Object.assign({},this.schedule),{start_date:t}),this.startDate=t}_setEndDate(e){const t=String(e.detail.value);if(!t)return;ha(this.startDate)>ha(t)&&(this.schedule=Object.assign(Object.assign({},this.schedule),{start_date:t}),this.startDate=t),this.schedule=Object.assign(Object.assign({},this.schedule),{end_date:t}),this.endDate=t}toggleEnableDateRange(e){const t=e.target.checked;this.shadowRoot.querySelectorAll("ha-date-input");this.schedule=Object.assign(Object.assign({},this.schedule),{start_date:t?this.startDate:void 0,end_date:t?this.endDate:void 0,repeat_type:t?this.schedule.repeat_type==Pe.Repeat?Pe.Pause:this.schedule.repeat_type:this.schedule.repeat_type==Pe.Pause?Pe.Repeat:this.schedule.repeat_type})}updateName(e){const t=e.target.value;this.schedule=Object.assign(Object.assign({},this.schedule),{name:t})}updateRepeatType(e){const t=e.target.value;this.schedule=Object.assign(Object.assign({},this.schedule),{repeat_type:t})}getTagOptions(){var e;let t=[...this.tags];return(null===(e=this.schedule)||void 0===e?void 0:e.tags.length)&&(t=[...t,...this.schedule.tags.filter(e=>!t.includes(e))]),t.sort(nt),t.map(e=>Object({name:e,value:e}))}updateTags(e){let t=e.target.value;t=t.map(e=>e.trim()),t=t.filter(e=>!["none","disabled","enabled"].includes(e)),t.sort(nt),this.schedule=Object.assign(Object.assign({},this.schedule),{tags:t})}cancelClick(){if(this.addCondition)this.addCondition=!this.addCondition;else{const e=new CustomEvent("cancelClick");this.dispatchEvent(e)}}saveClick(){const e=new CustomEvent("saveClick",{detail:this.schedule});this.dispatchEvent(e)}backClick(){const e=new CustomEvent("backClick",{detail:this.schedule});this.dispatchEvent(e)}};oo.styles=r`
    ${hs}
    div.summary {
      display: flex;
      flex-direction: row;
      align-items: center;
      padding: 4px 0px;
      background: rgba(var(--rgb-primary-color), 0.15);
      color: var(--dark-primary-color);
      border-radius: 8px;
      margin: 2px 0px;
      font-size: 14px;
      font-weight: 500;
    }
    div.summary ha-icon {
      flex: 0 0 48px;
      justify-content: center;
      display: flex;
    }
    div.summary span {
      flex: 1 0 60px;
      display: flex;
    }
    div.summary ha-icon-button {
      margin: -8px 0px;
    }
    div.date-range {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
    }
    div.date-range div {
      display: flex;
      flex-shrink: 0;
      flex-grow: 1;
      flex-basis: 160px;
      align-items: center;
    }
    div.date-range div span {
      display: inline-flex;
      padding: 0px 10px;
    }
    div.date-range div:first-child span {
      padding-left: 0px;
    }
    div.condition-options {
      display: flex;
      flex-direction: row;
      margin-top: 10px;
    }
    div.track-conditions {
      display: flex;
      flex-direction: row;
      text-align: right;
      align-items: center;
      max-width: 50%;
    }
    div.track-conditions span {
      text-align: left;
    }
    ha-textfield {
      width: 100%;
    }
  `,t([ne()],oo.prototype,"hass",void 0),t([ne()],oo.prototype,"config",void 0),t([ne()],oo.prototype,"schedule",void 0),t([ne()],oo.prototype,"selectedGroup",void 0),t([ne()],oo.prototype,"selectedEntity",void 0),t([ne()],oo.prototype,"conditionMatchType",void 0),t([ne()],oo.prototype,"conditionValue",void 0),t([ne()],oo.prototype,"editItem",void 0),t([ne()],oo.prototype,"addCondition",void 0),t([ne()],oo.prototype,"tags",void 0),t([re()],oo.prototype,"startDate",void 0),t([re()],oo.prototype,"endDate",void 0),oo=t([ae("scheduler-options-card")],oo);let no=class extends ie{constructor(){super(...arguments),this.scheduleEntities=[],this._cardTab=!1,this.selectedDomain=""}setConfig(e){this._config=e}async firstUpdated(){await Za(),this.scheduleEntities=(await ps(this.hass)).map(e=>e.entity_id);const e=(await vs(this.hass)).map(e=>e.name);e.sort(nt),this.tagOptions=e}render(){return this.hass&&this._config?I`
      <mwc-tab-bar .activeIndex=${this._cardTab?1:0} @MDCTabBar:activated=${this._selectTab}>
        <mwc-tab .label=${us("ui.panel.card_editor.tabs.entities",ut(this.hass))}></mwc-tab>
        <mwc-tab .label=${us("ui.panel.card_editor.tabs.other",ut(this.hass))}></mwc-tab>
      </mwc-tab-bar>

      <div class="card-config">
        ${this._cardTab?I`
              <div class="header">${us("ui.panel.card_editor.fields.title.heading",ut(this.hass))}</div>
              <button-group
                .items=${[{name:us("ui.panel.card_editor.fields.title.options.standard",ut(this.hass)),value:"standard"},{name:us("ui.panel.card_editor.fields.title.options.hidden",ut(this.hass)),value:"hidden"},{name:us("ui.panel.card_editor.fields.title.options.custom",ut(this.hass)),value:"custom"}]}
                value=${this.getTitleOption()}
                @change=${e=>this._setTitleFormatOption(e.target.value)}
              >
              </button-group>
              ${"string"==typeof this._config.title?I`
                    <ha-textfield
                      label=${us("ui.panel.card_editor.fields.title.custom_title",ut(this.hass))}
                      .value=${this._config.title}
                      @input=${e=>{this._updateConfig({title:String(e.target.value)})}}
                    ></ha-textfield>
                  `:""}

              <div class="header">
                ${us("ui.panel.card_editor.fields.discover_existing.heading",ut(this.hass))}
              </div>
              <div class="text-field">
                ${us("ui.panel.card_editor.fields.discover_existing.description",ut(this.hass))}
              </div>
              <ha-switch
                ?checked=${!1!==this._config.discover_existing}
                @change=${e=>{this._updateConfig({discover_existing:e.target.checked})}}
              >
              </ha-switch>

              <div class="header">
                ${us("ui.panel.card_editor.fields.time_step.heading",ut(this.hass))}
              </div>
              <div class="text-field">
                ${us("ui.panel.card_editor.fields.time_step.description",ut(this.hass))}
              </div>
              <variable-slider
                min="1"
                max="30"
                step="1"
                value=${this._config.time_step||10}
                unit=" min"
                ?optional=${!1}
                ?disabled=${!1}
                @value-changed=${e=>{this._updateConfig({time_step:Number(e.detail.value)})}}
              >
              </variable-slider>

              <div class="header">
                ${us("ui.panel.card_editor.fields.sort_by.heading",ut(this.hass))}
              </div>
              <div class="text-field">
                ${us("ui.panel.card_editor.fields.sort_by.description",ut(this.hass))}
              </div>

              <div>
                <ha-formfield
                  label=${us("ui.panel.card_editor.fields.sort_by.options.relative_time",ut(this.hass))}
                >
                  <ha-radio
                    name="sort_by"
                    ?checked=${ht(this._config.sort_by||Ze.sort_by).includes("relative-time")}
                    value="relative-time"
                    @change=${this._setSortBy}
                  ></ha-radio>
                </ha-formfield>
                <ha-formfield
                  label=${us("ui.panel.card_editor.fields.sort_by.options.title",ut(this.hass))}
                >
                  <ha-radio
                    name="sort_by"
                    ?checked=${ht(this._config.sort_by||Ze.sort_by).includes("title")}
                    value="title"
                    @change=${this._setSortBy}
                  ></ha-radio>
                </ha-formfield>
              </div>

              <div>
                <ha-formfield
                  label=${us("ui.panel.card_editor.fields.sort_by.options.state",ut(this.hass))}
                >
                  <ha-checkbox
                    ?checked=${ht(this._config.sort_by||Ze.sort_by).includes("state")}
                    value="state"
                    @change=${this._setSortBy}
                  ></ha-checkbox>
                </ha-formfield>
              </div>

              <div class="header">
                ${us("ui.panel.card_editor.fields.display_format_primary.heading",ut(this.hass))}
              </div>
              <div class="text-field">
                ${us("ui.panel.card_editor.fields.display_format_primary.description",ut(this.hass))}
              </div>

              <ha-formfield
                label=${us("ui.panel.card_editor.fields.display_format_primary.options.default",ut(this.hass))}
              >
                <ha-radio
                  name="primary_info"
                  ?checked=${"default"==(this._config.display_options||Ze.display_options).primary_info}
                  value="default"
                  @change=${this._setDisplayOptionsPrimary}
                ></ha-radio>
              </ha-formfield>
              <ha-formfield
                label=${us("ui.panel.card_editor.fields.display_format_primary.options.entity_action",ut(this.hass))}
              >
                <ha-radio
                  name="primary_info"
                  ?checked=${"{entity}: {action}"==(this._config.display_options||Ze.display_options).primary_info}
                  value="{entity}: {action}"
                  @change=${this._setDisplayOptionsPrimary}
                ></ha-radio>
              </ha-formfield>

              <div class="header">
                ${us("ui.panel.card_editor.fields.display_format_secondary.heading",ut(this.hass))}
              </div>
              <div class="text-field">
                ${us("ui.panel.card_editor.fields.display_format_secondary.description",ut(this.hass))}
              </div>

              <ha-formfield
                label=${us("ui.panel.card_editor.fields.display_format_secondary.options.relative_time",ut(this.hass))}
              >
                <ha-checkbox
                  ?checked=${ht((this._config.display_options||Ze.display_options).secondary_info).includes("relative-time")}
                  value="relative-time"
                  @change=${this._setDisplayOptionsSecondary}
                ></ha-checkbox>
              </ha-formfield>

              <ha-formfield
                label=${us("ui.panel.card_editor.fields.display_format_secondary.options.time",ut(this.hass))}
              >
                <ha-checkbox
                  ?checked=${ht((this._config.display_options||Ze.display_options).secondary_info).includes("time")}
                  value="time"
                  @change=${this._setDisplayOptionsSecondary}
                ></ha-checkbox>
              </ha-formfield>

              <ha-formfield
                label=${us("ui.panel.card_editor.fields.display_format_secondary.options.days",ut(this.hass))}
              >
                <ha-checkbox
                  ?checked=${ht((this._config.display_options||Ze.display_options).secondary_info).includes("days-tasks")}
                  value="days"
                  @change=${this._setDisplayOptionsSecondary}
                ></ha-checkbox>
              </ha-formfield>

              <ha-formfield
                label=${us("ui.panel.card_editor.fields.display_format_secondary.options.additional_tasks",ut(this.hass))}
              >
                <ha-checkbox
                  ?checked=${ht((this._config.display_options||Ze.display_options).secondary_info).includes("additional-tasks")}
                  value="additional-tasks"
                  @change=${this._setDisplayOptionsSecondary}
                ></ha-checkbox>
              </ha-formfield>

              <div class="header">
                ${us("ui.panel.card_editor.fields.show_header_toggle.heading",ut(this.hass))}
              </div>
              <div class="text-field">
                ${us("ui.panel.card_editor.fields.show_header_toggle.description",ut(this.hass))}
              </div>
              <ha-switch
                ?checked=${this._config.show_header_toggle}
                @change=${e=>{this._updateConfig({show_header_toggle:e.target.checked})}}
              >
              </ha-switch>

              ${void 0!==this.tagOptions?I`
                    <div class="header">
                      ${us("ui.panel.card_editor.fields.tags.heading",ut(this.hass))}
                    </div>
                    <div class="text-field">
                      ${us("ui.panel.card_editor.fields.tags.description",ut(this.hass))}
                    </div>
                    <scheduler-selector
                      .items=${this.getTagOptions()}
                      .value=${ht(this._config.tags)}
                      @value-changed=${this.updateTags}
                      label=${this.hass.localize("ui.panel.config.tag.add_tag")}
                    >
                    </scheduler-selector>
                  `:""}
            `:I`
              <div class="header">
                ${us("ui.panel.card_editor.fields.entities.heading",ut(this.hass))}
              </div>
              <div class="text-field">
                ${us("ui.panel.card_editor.fields.entities.description",ut(this.hass))}
              </div>
              ${this.getDomainSwitches()}
            `}
      </div>
    `:I``}_selectTab(e){this._cardTab=1===e.detail.index}_updateConfig(e){this._config&&(this._config=Object.assign(Object.assign({},this._config),e),Ne(this,"config-changed",{config:this._config}))}_setTitleFormatOption(e){var t;this.hass&&("standard"==e?this._updateConfig({title:!0}):"hidden"==e?this._updateConfig({title:!1}):this._updateConfig({title:"string"==typeof(null===(t=this._config)||void 0===t?void 0:t.title)?this._config.title:us("ui.panel.common.title",ut(this.hass))}))}getTitleOption(){return this.hass&&this._config?"string"==typeof this._config.title?"custom":this._config.title?"standard":"hidden":""}updateTags(e){if(!this._config||!this.hass)return;let t=e.target.value;t=t.map(e=>e.trim()),t.sort(nt),this._updateConfig({tags:t})}getTagOptions(){if(!this._config||!this.hass)return[];let e=this.tagOptions||[];if(this._config.tags){const t=ht(this._config.tags);e=[...e,...t.filter(t=>!e.includes(t))]}return e.map(e=>Object({name:e,value:e}))}_setSortBy(e){var t;const i=e.target.checked,s=e.target.value;let a=ht((null===(t=this._config)||void 0===t?void 0:t.sort_by)||Ze.sort_by);"state"!=s&&i&&(a=a.filter(e=>"state"==e)),!a.includes(s)&&i&&(a=[...a,s]),a.includes(s)&&!i&&(a=a.filter(e=>e!=s)),this._updateConfig({sort_by:a})}_setDisplayOptionsPrimary(e){var t;const i=e.target.value,s=Object.assign(Object.assign({},(null===(t=this._config)||void 0===t?void 0:t.display_options)||Ze.display_options),{primary_info:i});this._updateConfig({display_options:s})}_setDisplayOptionsSecondary(e){var t;const i=e.target.value,s=e.target.checked;let a=Object.assign({},(null===(t=this._config)||void 0===t?void 0:t.display_options)||Ze.display_options),o=ht(a.secondary_info||[]);o=s?Array.from(new Set([...o,i])):o.filter(e=>e!==i),o.sort((e,t)=>{const i={"relative-time":1,time:o.includes("relative-time")?3:2,days:o.includes("relative-time")?2:3,"additional-tasks":4},s=Object.keys(i).includes(e)?i[e]:5,a=Object.keys(i).includes(t)?i[t]:5;return s>a?1:s<a?-1:0}),a=Object.assign(Object.assign({},a),{secondary_info:[...o]}),this._updateConfig({display_options:a})}getDomainSwitches(){if(!this._config||!this.hass)return;const e=Ua(this.hass,Object.assign(Object.assign({},Ze),{include:["*"]}),{filterActions:!0,filterStates:!0}).filter(e=>"switch"!==De(e)||!this.scheduleEntities.includes(e)).map(e=>oa(e,this.hass,{include:["*"]})).filter(e=>qa(e.id,this.hass)||sa(e.id,this.hass,Ze)),t=e.map(e=>De(e.id)).filter((e,t,i)=>i.indexOf(e)===t);return t.sort((e,t)=>e.trim().toLowerCase()<t.trim().toLowerCase()?-1:1),t.map(t=>{var i;const s=e.filter(e=>De(e.id)==t).length,a=e.filter(e=>De(e.id)==t),o=a.filter(e=>ys(e.id,this._config)).length;return s?I`
        <div class="row" @click=${()=>this.toggleShowDomain(t)}>
          <ha-icon icon="${ct(bs[t])}"> </ha-icon>

          <div class="info">
            ${t}
            <div class="secondary">
              ${us("ui.panel.card_editor.fields.entities.included_number",ut(this.hass),["{number}","{total}"],[o,s])}
            </div>
          </div>
          <ha-switch
            @click=${e=>e.stopPropagation()}
            @change=${e=>this.toggleSelectEntity(t,e.target.checked)}
            ?checked=${ys(t,this._config)}
            ?disabled=${ys(t,{groups:null===(i=this._config)||void 0===i?void 0:i.groups})}
          >
          </ha-switch>
        </div>
        ${this.selectedDomain==t?I`
              <div class="divider"></div>
              ${a.map(e=>{var i,s;return I`
                  <div class="row" @click=${()=>this.toggleSelectEntity(e.id)}>
                    <ha-icon icon="${e.icon}"></ha-icon>
                    <div class="info">
                      ${e.name}
                      <div class="secondary">
                        ${e.id}
                      </div>
                    </div>
                    <ha-switch
                      ?checked=${ys(e.id,this._config)}
                      ?disabled=${ys(e.id,{groups:null===(i=this._config)||void 0===i?void 0:i.groups})||ys(t,{groups:null===(s=this._config)||void 0===s?void 0:s.groups})}
                    ></ha-switch>
                  </div>
                `})}
              <div class="divider"></div>
            `:""}
      `:""})}toggleShowDomain(e){this._config&&this.hass&&(this.selectedDomain!=e?this.selectedDomain=e:this.selectedDomain="")}toggleSelectEntity(e,t){if(!this._config||!this.hass)return;const i=ys(e,this._config);void 0===t&&(t=!i);const s=De(e);let a=[...this._config.include||[]],o=[...this._config.exclude||[]];if(!i&&t)o.includes(e)&&(o=o.filter(t=>t!=e)),a.includes(e)||(a=[...a,e]);else{if(!i||t)return;(s&&a.includes(s)||ys(e,{customize:this._config.customize})||s&&ys(s,{customize:this._config.customize}))&&(o=[...o,e]),a.includes(e)&&(a=a.filter(t=>t!=e))}a.sort(nt),o.sort(nt),this._updateConfig({include:a,exclude:o})}static get styles(){return r`
      ${hs}
      div.row {
        display: flex;
        align-items: center;
        flex-direction: row;
        cursor: pointer;
        margin: 10px 0px;
      }
      div.divider {
        height: 1px;
        background: var(--divider-color);
      }
      .info {
        margin-left: 16px;
        flex: 1 0 60px;
      }
      .info,
      .info > * {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .secondary {
        display: block;
        color: var(--secondary-text-color);
      }
      div.row ha-icon {
        padding: 8px;
        color: var(--state-icon-color);
      }
      div.row state-badge {
        flex: 0 0 40px;
      }
      div.row ha-switch {
        padding: 13px 5px;
      }
      ha-textfield {
        width: 100%;
      }
    `}};t([ne()],no.prototype,"hass",void 0),t([ne()],no.prototype,"_config",void 0),t([ne()],no.prototype,"scheduleEntities",void 0),t([ne()],no.prototype,"tagOptions",void 0),t([re()],no.prototype,"_cardTab",void 0),t([ne()],no.prototype,"selectedDomain",void 0),no=t([ae("scheduler-card-editor")],no);let ro=class extends ie{async showDialog(e){this._params=e,await this.updateComplete}async closeDialog(){this._params=void 0}render(){return this._params?I`
      <ha-dialog open .heading=${!0} @closed=${this.closeDialog} @close-dialog=${this.closeDialog}>
        <div slot="heading">
          <ha-header-bar>
            <ha-icon-button slot="navigationIcon" dialogAction="cancel" .path=${Sa}> </ha-icon-button>
            <span slot="title">
              ${this.hass.localize("state_badge.default.error")}
            </span>
          </ha-header-bar>
        </div>
        <div class="wrapper">
          ${this._params.error||""}
        </div>

        <mwc-button slot="primaryAction" style="float: left" @click=${this.closeDialog} dialogAction="close">
          ${this.hass.localize("ui.dialogs.generic.ok")}
        </mwc-button>
      </ha-dialog>
    `:I``}static get styles(){return r`
      div.wrapper {
        color: var(--primary-text-color);
      }
    `}};t([ne({attribute:!1})],ro.prototype,"hass",void 0),t([re()],ro.prototype,"_params",void 0),ro=t([ae("dialog-error")],ro);var lo=Object.freeze({__proto__:null,get DialogError(){return ro}});let co=class extends ie{async showDialog(e){this._params=e,await this.updateComplete}async closeDialog(){this._params&&this._params.cancel(),this._params=void 0}render(){return this._params?I`
      <ha-dialog open .heading=${!0} @closed=${this.closeDialog} @close-dialog=${this.closeDialog}>
        <div slot="heading">
          <ha-header-bar>
            <ha-icon-button slot="navigationIcon" dialogAction="cancel" .path=${Sa}> </ha-icon-button>
            <span slot="title">
              Defective entity
            </span>
          </ha-header-bar>
        </div>
        <div class="wrapper">
          This schedule is defective and cannot be edited with the card. Consider to delete the item and recreate it. If
          the problem persists, please report the issue on GitHub.
        </div>

        <mwc-button slot="primaryAction" @click=${this.cancelClick} dialogAction="close">
          ${this.hass.localize("ui.dialogs.generic.cancel")}
        </mwc-button>
        <mwc-button
          slot="secondaryAction"
          style="float: left; --mdc-theme-primary: var(--error-color)"
          @click=${this.confirmClick}
          dialogAction="close"
        >
          ${this.hass.localize("ui.common.delete")}
        </mwc-button>
      </ha-dialog>
    `:I``}confirmClick(){this._params.confirm()}cancelClick(){this._params.cancel()}static get styles(){return r`
      div.wrapper {
        color: var(--primary-text-color);
      }
    `}};t([ne({attribute:!1})],co.prototype,"hass",void 0),t([re()],co.prototype,"_params",void 0),co=t([ae("dialog-delete-defective")],co);var uo=Object.freeze({__proto__:null,get DialogDeleteDefective(){return co}});let ho=class extends ie{async showDialog(e){this._params=e,await this.updateComplete}async closeDialog(){this._params&&this._params.cancel(),this._params=void 0}render(){return this._params?I`
      <ha-dialog open .heading=${!0} @closed=${this.closeDialog} @close-dialog=${this.closeDialog}>
        <div slot="heading">
          <ha-header-bar>
            <ha-icon-button slot="navigationIcon" dialogAction="cancel" .path=${Sa}> </ha-icon-button>
            <span slot="title">
              ${us("ui.dialog.enable_schedule.title",ut(this.hass))}
            </span>
          </ha-header-bar>
        </div>
        <div class="wrapper">
          ${us("ui.dialog.enable_schedule.description",ut(this.hass))}
        </div>

        <mwc-button slot="primaryAction" @click=${this.cancelClick} dialogAction="close">
          ${this.hass.localize("ui.common.no")}
        </mwc-button>
        <mwc-button slot="secondaryAction" style="float: left" @click=${this.confirmClick} dialogAction="close">
          ${this.hass.localize("ui.common.yes")}
        </mwc-button>
      </ha-dialog>
    `:I``}confirmClick(){this._params.confirm()}cancelClick(){this._params.cancel()}static get styles(){return r`
      div.wrapper {
        color: var(--primary-text-color);
      }
    `}};t([ne({attribute:!1})],ho.prototype,"hass",void 0),t([re()],ho.prototype,"_params",void 0),ho=t([ae("dialog-enable-item")],ho);var mo=Object.freeze({__proto__:null,get DialogEnableItem(){return ho}});const po=(e,t,i,s)=>{if(!e)return null;const a=aa(e,s);let o=i.find(e=>ws(e,a,!0));if(!o)return null;let n=t.map(e=>eo(e,o));return n=Object.keys(o.variables||{}).filter(t=>Object.keys(e.service_data||{}).includes(t)).reduce((t,i)=>{if(!t)return t;switch(o.variables[i].type){case qe.Level:const s=o.variables[i];let a=Number(e.service_data[i]);return a/=s.scale_factor,a=Math.round(a/s.step)*s.step,a=parseFloat(a.toPrecision(12)),a>s.max?a=s.max:a<s.min&&(a=s.min),a*=s.scale_factor,a=parseFloat(a.toFixed(2)),t.map(e=>Object.assign(e,{service_data:Object.assign(Object.assign({},e.service_data),{[i]:a})}));case qe.List:return o.variables[i].options.some(t=>t.value==e.service_data[i])?t.map(t=>Object.assign(t,{service_data:Object.assign(Object.assign({},t.service_data),{[i]:e.service_data[i]})})):null;case qe.Text:return t.map(t=>Object.assign(t,{service_data:Object.assign(Object.assign({},t.service_data),{[i]:e.service_data[i]})}));default:return t}},n),n};window.customCards=window.customCards||[],window.customCards.push({type:"scheduler-card",name:"Scheduler Card",description:"Card to manage schedule entities made with scheduler-component."}),console.info("%c  SCHEDULER-CARD  \n%c  Version: "+"v2.3.9".padEnd(7," "),"color: orange; font-weight: bold; background: black","color: white; font-weight: bold; background: dimgray"),e.SchedulerCard=class extends ie{constructor(){super(...arguments),this._view=Ge.Overview,this.actions=[],this.translationsLoaded=!1,this.editItem=null}static getConfigElement(){return document.createElement("scheduler-card-editor")}set hass(e){this._hass=e}firstUpdated(){const e=this._hass;if(e.localize("ui.panel.config.automation.editor.actions.type.device_id.action"))this.translationsLoaded=!0;else{document.querySelector("home-assistant")._loadFragmentTranslations(e.language,"config").then(()=>{this._hass.localize})}}shouldUpdate(e){const t=e.get("_hass");return!t||1!=e.size||(t.localize("ui.panel.config.automation.editor.actions.type.device_id.action")?this._view==Ge.Overview:(this.translationsLoaded=!0,!0))}setConfig(e){mt(e);const t=Object.assign(Object.assign({},Ze),e);this._config=t}getCardSize(){return 9}render(){return this._hass&&this._config&&this.translationsLoaded?this._view==Ge.Overview?I`
        <scheduler-entities-card
          .hass=${this._hass}
          .config=${this._config}
          @editClick=${this._editItemClick}
          @newClick=${this._addItemClick}
        >
        </scheduler-entities-card>
      `:this._view==Ge.NewSchedule?I`
        <scheduler-editor-card
          .hass=${this._hass}
          .config=${this._config}
          .entities=${this.entities}
          .schedule=${this.schedule}
          @nextClick=${this._confirmItemClick}
          @cancelClick=${this._cancelEditClick}
        >
        </scheduler-editor-card>
      `:this._view==Ge.TimePicker||this._view==Ge.TimeScheme?I`
        <scheduler-timepicker-card
          .hass=${this._hass}
          .config=${this._config}
          .schedule=${this.schedule}
          .entities=${this.entities}
          .actions=${this.actions}
          ?timeslots=${this._view==Ge.TimeScheme}
          ?editItem=${null!==this.editItem}
          @cancelClick=${this._cancelEditClick}
          @saveClick=${this._saveItemClick}
          @optionsClick=${this._gotoOptionsClick}
          @deleteClick=${this._deleteItemClick}
          @editActionClick=${this._editActionClick}
        >
        </scheduler-timepicker-card>
      `:this._view==Ge.Options?I`
      <scheduler-options-card
        .hass=${this._hass}
        .config=${this._config}
        .schedule=${this.schedule}
        @cancelClick=${this._cancelEditClick}
        @saveClick=${this._saveItemClick}
        @backClick=${this._optionsBackClick}
      >
      </scheduler-timescheme-card>
    `:I``:I``}_addItemClick(){this._view=Ge.NewSchedule,this.editItem=null,this.entities=[],this.actions=[],this.schedule=void 0}_cancelEditClick(){this._view=Ge.Overview,this.editItem=null}_confirmItemClick(e){if(!this._hass||!this._config)return;const t=e.detail.entities;this.entities=t.map(e=>oa(e,this._hass,this._config));const i=Boolean(e.detail.timeSchemeSelected),s=e.detail.action,a=this.schedule,o=1==ht(this._config.tags).length?ht(this._config.tags).slice(0,1):[];if(i){this.actions=sa(t,this._hass,this._config);const e=[{start:"00:00:00",stop:"08:00:00",actions:[]},{start:"08:00:00",stop:"16:00:00",actions:[]},{start:"16:00:00",stop:"00:00:00",actions:[]}];if(a){const i=a.timeslots.map(e=>e.actions[0]).map(e=>po(e,t,this.actions,this._hass));this.schedule=Object.assign(Object.assign({},a),{timeslots:a.timeslots.length>1&&a.timeslots.every(e=>e.stop)?a.timeslots.map((e,t)=>Object.assign(e,{actions:i[t]||[]})):e})}else this.schedule={weekdays:["daily"],timeslots:e,repeat_type:Pe.Repeat,tags:o};this._view=Ge.TimeScheme}else{this.actions=[s];let e=Ke(ua(new Date,ut(this._hass),ca.twenty_four),this._hass);e=Xe(e,this._config.time_step,{wrapAround:!0});const i={start:Je(e),actions:t.map(e=>eo(e,this.actions[0]))};this.schedule=a?Object.assign(Object.assign({},a),{timeslots:1!=a.timeslots.length||a.timeslots[0].stop?[i]:[Object.assign(Object.assign({},a.timeslots[0]),{actions:po(a.timeslots[0].actions[0],t,this.actions,this._hass)||i.actions})]}):{weekdays:["daily"],timeslots:[i],repeat_type:Pe.Repeat,tags:o},this._view=Ge.TimePicker}}_editActionClick(e){this.schedule=e.detail,this._view=Ge.NewSchedule}async _saveItemClick(e){if(!this._hass)return;let t=e.detail;if(t=Object.assign(Object.assign({},t),{timeslots:t.timeslots.map(e=>{var t;return e.actions&&e.actions.length?(e.actions.some(e=>!e.entity_id||"notify"==De(e.entity_id||""))&&(e=Object.assign(Object.assign({},e),{actions:e.actions.map(e=>e.entity_id&&"notify"!=De(e.entity_id||"")?e:tt(e,"entity_id"))})),e.stop||(e=tt(e,"stop")),(null===(t=e.conditions)||void 0===t?void 0:t.length)||(e=tt(e,"conditions","condition_type")),e):null}).filter(at)}),this.editItem){const e=await _s(this._hass,this.editItem);if(ot(tt(t,"timeslots"),tt(et(e,Object.keys(t)),"timeslots"))&&t.timeslots.length==e.timeslots.length&&t.timeslots.every((t,i)=>ot(t,e.timeslots[i])))this.editItem=null,this._view=Ge.Overview;else{if(!e.enabled){await new Promise(e=>{Ne(this,"show-dialog",{dialogTag:"dialog-enable-item",dialogImport:()=>Promise.resolve().then((function(){return mo})),dialogParams:{cancel:()=>{e(!1)},confirm:()=>{e(!0)}}})})&&this._hass.callService("switch","turn_on",{entity_id:e.entity_id})}(function(e){return!!e&&null!==e.match(/^Schedule\ #[a-f0-9]{6}/)})(t.name)&&(t=Object.assign(Object.assign({},t),{name:""})),(i=this._hass,s=Object.assign(Object.assign({},t),{schedule_id:this.editItem}),i.callApi("POST","scheduler/edit",s)).catch(e=>gs(e,this)).then(()=>{this.editItem=null,this._view=Ge.Overview})}}else((e,t)=>e.callApi("POST","scheduler/add",t))(this._hass,t).catch(e=>gs(e,this)).then(()=>{this._view=Ge.Overview});var i,s}_deleteItemClick(){if(!this.editItem||!this._hass)return;const e=this.editItem;var t,i;(t=this._hass,i=e,t.callApi("POST","scheduler/remove",{schedule_id:i})).catch(e=>gs(e,this)).then(()=>{this.editItem=null,this._view=Ge.Overview})}async _editItemClick(e){if(!this._hass||!this._config)return;const t=await _s(this._hass,e.detail);if(!t)return;const i=st(it(t.timeslots.map(e=>e.actions.map(e=>e.entity_id||e.service))));this.entities=i.map(e=>oa(e,this._hass,this._config));let s=sa(i,this._hass,this._config);const a=st(it(t.timeslots.map(e=>e.actions)));let o=a.filter(e=>!s.some(t=>ws(t,e,!0)));if(o.length&&st(o).forEach(e=>s.push(aa(e,this._hass))),this.actions=s,this.schedule={weekdays:t.weekdays,timeslots:t.timeslots,repeat_type:t.repeat_type,name:t.name,tags:t.tags||[],start_date:t.start_date,end_date:t.end_date},this.editItem=t.schedule_id,this.entities.length&&this.schedule.timeslots.length)this.schedule.timeslots.every(e=>e.stop)?(this.schedule=Object.assign(Object.assign({},this.schedule),{timeslots:dt(this.schedule.timeslots,this._hass)}),this.actions.length?this._view=Ge.TimeScheme:gs({error:"",body:{message:`Could not compute actions for the schedule #${e.detail}.`}},this)):(this.actions=this.actions.filter(e=>a.find(t=>ws(e,t,!0))).reduce((e,t)=>[t],[]),this.actions.length?this._view=Ge.TimePicker:gs({error:"",body:{message:`Could not compute actions for schedule #${e.detail}.`}},this));else{await new Promise(e=>{Ne(this,"show-dialog",{dialogTag:"dialog-delete-defective",dialogImport:()=>Promise.resolve().then((function(){return uo})),dialogParams:{cancel:()=>{e(!1)},confirm:()=>{e(!0)}}})})?this._deleteItemClick():this._cancelEditClick()}}_gotoOptionsClick(e){this.schedule=e.detail,this._view=Ge.Options}_optionsBackClick(e){this.schedule=e.detail,this.schedule.timeslots.every(e=>e.stop)?this._view=Ge.TimeScheme:this._view=Ge.TimePicker}},t([ne()],e.SchedulerCard.prototype,"_config",void 0),t([ne()],e.SchedulerCard.prototype,"_hass",void 0),t([ne()],e.SchedulerCard.prototype,"_view",void 0),t([ne()],e.SchedulerCard.prototype,"entities",void 0),t([ne()],e.SchedulerCard.prototype,"actions",void 0),t([ne()],e.SchedulerCard.prototype,"schedule",void 0),t([ne()],e.SchedulerCard.prototype,"translationsLoaded",void 0),e.SchedulerCard=t([ae("scheduler-card")],e.SchedulerCard)}({});
