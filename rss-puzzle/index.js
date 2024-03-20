(()=>{"use strict";var e={131:(e,t,n)=>{n.d(t,{A:()=>c});var o=n(601),r=n.n(o),i=n(314),l=n.n(i)()(r());l.push([e.id,"*{box-sizing:border-box}.main{position:relative;height:100vh;overflow:hidden}.puzzle-container{margin:20px auto;display:block;width:700px;height:500px;background-position:center;background-size:cover}.row-container-collecting{display:flex}.collecting-field{flex-grow:1}.collecting-field_active{background-color:aqua;border:1px solid #000}.collecting-container{margin:0 auto;display:block;width:700px;height:500px;background-color:rgba(128,128,128,.5)}.row-container{display:flex}.puzzle-piece{border:1px solid #000;color:#000;background-color:rgba(128,128,128,.5);font-size:14px;display:flex;justify-content:center;align-items:center}.word{background-color:#ff0;width:100%;height:100%}.word_open{background-color:rgba(255,255,0,0);text-shadow:0 0 5px #ff0;width:auto;height:auto}.puzzle-piece_hide{background-color:rgba(128,128,128,.5)}.puzzle_false{border:5px solid red}.row-container-collecting_active_complete{border:5px solid green}.puzzle_disable{pointer-events:none}.translation-field{height:50px;display:flex;justify-content:center;align-items:center}.info-after-round{position:absolute;width:100vw;height:100vh;background-color:#fff}.info-block-wrapper{display:flex;flex-direction:column;justify-content:center;align-items:center;gap:30px}.button-container{display:flex;justify-content:space-around}.input-container{margin:0 auto;width:400px;display:flex;flex-direction:column;justify-content:center;align-items:center;gap:10px}.greetings-wrapper{width:400px;margin:100px auto;display:flex;flex-direction:column;justify-content:center;align-items:center;gap:40px}.say-hi{text-align:center}",""]);const c=l},314:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",o=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),o&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),o&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,o,r,i){"string"==typeof e&&(e=[[null,e,void 0]]);var l={};if(o)for(var c=0;c<this.length;c++){var a=this[c][0];null!=a&&(l[a]=!0)}for(var d=0;d<e.length;d++){var u=[].concat(e[d]);o&&l[u[0]]||(void 0!==i&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=i),n&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=n):u[2]=n),r&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=r):u[4]="".concat(r)),t.push(u))}},t}},601:e=>{e.exports=function(e){return e[1]}},990:(e,t,n)=>{n.r(t),n.d(t,{default:()=>y});var o=n(72),r=n.n(o),i=n(825),l=n.n(i),c=n(659),a=n.n(c),d=n(56),u=n.n(d),s=n(540),f=n.n(s),p=n(113),h=n.n(p),m=n(131),v={};v.styleTagTransform=h(),v.setAttributes=u(),v.insert=a().bind(null,"head"),v.domAPI=l(),v.insertStyleElement=f(),r()(m.A,v);const y=m.A&&m.A.locals?m.A.locals:void 0},72:e=>{var t=[];function n(e){for(var n=-1,o=0;o<t.length;o++)if(t[o].identifier===e){n=o;break}return n}function o(e,o){for(var i={},l=[],c=0;c<e.length;c++){var a=e[c],d=o.base?a[0]+o.base:a[0],u=i[d]||0,s="".concat(d," ").concat(u);i[d]=u+1;var f=n(s),p={css:a[1],media:a[2],sourceMap:a[3],supports:a[4],layer:a[5]};if(-1!==f)t[f].references++,t[f].updater(p);else{var h=r(p,o);o.byIndex=c,t.splice(c,0,{identifier:s,updater:h,references:1})}l.push(s)}return l}function r(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,r){var i=o(e=e||[],r=r||{});return function(e){e=e||[];for(var l=0;l<i.length;l++){var c=n(i[l]);t[c].references--}for(var a=o(e,r),d=0;d<i.length;d++){var u=n(i[d]);0===t[u].references&&(t[u].updater(),t.splice(u,1))}i=a}}},659:e=>{var t={};e.exports=function(e,n){var o=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},540:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},56:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,r&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(o,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},113:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},799:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=class{constructor({tag:e="div",className:t="",text:n=""},...o){this.node=document.createElement(e),this.node.className=t,this.node.textContent=n,this.children=[],this.appendChildren(o)}appendChildren(e){e.forEach((e=>{this.append(e)}))}getNode(){return this.node}setTextContent(e){this.node.textContent=e}setInnerText(e){this.node.innerText=e}setAttribute(e,t){this.node.setAttribute(e,t)}removeAttribute(e){this.node.removeAttribute(e)}toggleClass(e){this.node.classList.toggle(e)}addListener(e,t,n=!1){this.node.addEventListener(e,t,n)}removeNode(){this.node.parentNode&&this.node.parentNode.removeChild(this.node)}destroy(){this.children.forEach((e=>{e.destroy()})),this.node.remove()}setBackgroundImage(e){this.node.style.backgroundImage=`url(${e})`}setStyle(e,t){this.node.style.setProperty(e,t)}getChildren(){return this.children}addClass(e){this.node.classList.add(e)}append(e){this.children.push(e),this.node.append(e.getNode())}}},954:function(e,t,n){var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.main=t.img=t.div=void 0;const r=o(n(799));t.div=(e,...t)=>new r.default({tag:"div",className:e},...t),t.img=({src:e="",alt:t="",className:n=""})=>new r.default({tag:"img",className:n,src:e,alt:t}),t.main=(e,...t)=>new r.default({tag:"main",className:e},...t)},156:function(e,t,n){var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),n(990),(0,o(n(217)).default)()},245:function(e,t,n){var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const r=n(954),i=o(n(494)),l=o(n(594)),c=o(n(545)),a=o(n(588));t.default=function(){const e=(0,r.main)("main"),t=document.createElement("select"),n=document.createElement("select"),o=document.createElement("button"),d=document.createElement("button"),u=document.createElement("button"),s=document.createElement("div");t.classList.add("selector-lvl"),n.classList.add("select-round"),o.classList.add("button-hint-img"),d.classList.add("button-hint-translation"),u.classList.add("button-log-out"),s.classList.add("button-container"),o.textContent="Show background: off",d.textContent="Show translate: off",u.textContent="Logout";const{body:f}=document;f.appendChild(e.getNode()),f.prepend(u),f.prepend(d),f.prepend(o),f.prepend(n),f.prepend(t),(0,a.default)(),(0,c.default)(),(0,i.default)(),(0,l.default)()}},217:function(e,t,n){var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const r=o(n(320)),i=o(n(700));t.default=function(){null!==localStorage.getItem("IamBigBobby_name")&&null!==localStorage.getItem("IamBigBobby_surname")?(0,r.default)():(0,i.default)()}},221:function(e,t,n){var o=this&&this.__createBinding||(Object.create?function(e,t,n,o){void 0===o&&(o=n);var r=Object.getOwnPropertyDescriptor(t,n);r&&!("get"in r?!t.__esModule:r.writable||r.configurable)||(r={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,o,r)}:function(e,t,n,o){void 0===o&&(o=n),e[o]=t[n]}),r=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&o(t,e,n);return r(t,e),t};Object.defineProperty(t,"__esModule",{value:!0});const l=i(n(879));t.default=function(e){const t=document.querySelector(".auto-complete");t&&t.addEventListener("click",(()=>{const t=document.querySelectorAll(".collecting-field_active"),n=document.querySelector(".row-container_active");n&&t.forEach((e=>{if(e.querySelector(".puzzle-piece")){const t=e.querySelector(".puzzle-piece");t&&n.appendChild(t)}}));const o=e[l.step],r=document.querySelector(".row-container_active"),i=null==r?void 0:r.querySelectorAll(".puzzle-piece"),c=document.querySelectorAll(".collecting-field_active");null==i||i.forEach((e=>{o.forEach(((t,n)=>{if(t===e.textContent){const t=c[n];for(t.appendChild(e.cloneNode(!0));t.children.length>1;)t.firstChild&&t.parentNode&&t.removeChild(t.firstChild)}}))})),Array.from((null==r?void 0:r.children)||[]).forEach((e=>{e.parentNode&&e.parentNode.removeChild(e)}));const a=document.querySelector(".translation-field");a&&(a.textContent="");const d=document.querySelector(".button-hint-translation"),u=document.querySelector(".button-hint-img");d&&(d.textContent="Show translate: off"),u&&(u.textContent="Show background: off"),(0,l.default)(e)}))}},879:function(e,t,n){var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.nextStep=t.setStep=t.step=void 0;const r=o(n(581));t.step=0,t.default=function(e){let n=0;const o=document.querySelectorAll(".collecting-field_active"),i=document.querySelector(".check-button"),l=e[t.step].length;if(o.forEach((e=>{e.querySelector(".puzzle-piece")&&(n+=1)})),l===n)return i.disabled=!1,void i.addEventListener("click",(()=>{const n=document.querySelector(".row-container-collecting_active");if(null!==n){const o=n.querySelectorAll(".puzzle-piece"),l=e[t.step];let c=!0;if("check"===i.textContent){o.forEach((e=>{e.classList.remove("puzzle_false")}));const e=[];o.forEach((t=>{var n;const o=null===(n=t.textContent)||void 0===n?void 0:n.toString();void 0!==o&&e.push(o)}));for(let t=0;t<l.length;t+=1)e[t]!==l[t]&&o[t].classList.add("puzzle_false");for(let t=0;t<l.length;t+=1)e[t]!==l[t]&&(c=!1);if(c){n.classList.add("row-container-collecting_active_complete"),i.disabled=!0,Array.from(document.querySelectorAll(".collecting-field_active")).forEach((e=>{const t=e.querySelector(".word");null!==t&&t.classList.add("word_open")}));const e=document.querySelector(".continue-button");e.disabled=!1,e.style.display="block",i.style.display="none",e.addEventListener("click",r.default)}}}}));i.disabled=!0},t.setStep=function(e){t.step=e},t.nextStep=function(){t.step+=1}},383:function(e,t,n){var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const r=o(n(879));t.default=function(e){const t=document.querySelector(".puzzle-container"),n=document.querySelector(".collecting-container");null==t||t.addEventListener("click",(t=>{var n;const o=t.target.closest(".puzzle-piece");if(o){const t=document.querySelectorAll(".collecting-field_active");for(let e=t.length-1;e>=0;e-=1){const r=t[e];r.querySelector(".puzzle-piece")||(null===(n=o.parentNode)||void 0===n||n.removeChild(o),r.appendChild(o))}(0,r.default)(e)}})),null==n||n.addEventListener("click",(t=>{var n;const o=t.target,i=document.querySelector(".row-container_active"),l=o.closest(".puzzle-piece");l&&(null===(n=l.parentNode)||void 0===n||n.removeChild(l),null==i||i.appendChild(l),(0,r.default)(e))}))}},581:function(e,t,n){var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const r=n(879),i=o(n(922)),l=o(n(787));t.default=function(){const e=document.querySelector(".continue-button"),t=document.querySelector(".check-button");let n=document.querySelector(".row-container-collecting_active");if(!n)return void(0,i.default)();const o=document.querySelectorAll(".collecting-field_active"),c=n.querySelectorAll(".puzzle-piece");n.classList.remove("row-container-collecting_active_complete"),c.forEach((e=>{e.classList.add("puzzle_disable")})),o.forEach((e=>{e.classList.remove("collecting-field_active")}));const a=n.nextSibling;if(null===a)return void(0,i.default)();n.classList.remove("row-container-collecting_active"),a.classList.add("row-container-collecting_active"),Array.from(a.children).forEach((e=>{e.classList.add("collecting-field_active")})),(0,r.nextStep)(),e.disabled=!0,e.style.display="none",t.style.display="block";const d=document.querySelector(".translation-field");d&&(d.textContent="");const u=document.querySelector(".button-hint-translation");u&&(u.textContent="Show translate: off");const s=document.querySelector(".button-hint-img");s&&(s.textContent="Show background: off"),(0,l.default)(r.step)}},368:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0});const o=n(954);t.default=class{constructor(e,t=".collecting-container",n=10){this.rows=n,this.cols=e,this.container=document.querySelector(t)}setupCollectingField(){if(!this.container)throw Error;const e=this.container.offsetWidth,t=this.container.offsetHeight;for(let n=0;n<this.rows;n+=1){const r=0===n?(0,o.div)("row-container-collecting row-container-collecting_active"):(0,o.div)("row-container-collecting");this.container.appendChild(r.getNode());for(let i=0;i<this.cols[n].length;i+=1){const i=0===n?(0,o.div)("collecting-field collecting-field_active"):(0,o.div)("collecting-field"),l=e/this.cols[n].length,c=t/this.rows;i.setStyle("width",`${l}px`),i.setStyle("height",`${c}px`),r.appendChildren([i])}}}}},22:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0});const o=n(954);t.default=function(){const e=(0,o.div)("puzzle-container"),t=(0,o.div)("collecting-container"),n=document.querySelector("main"),r=document.createElement("button"),i=document.createElement("button"),l=document.createElement("button"),c=document.createElement("div"),a=document.createElement("div");n&&(r.classList.add("check-button"),r.disabled=!0,i.classList.add("continue-button"),i.style.display="none",i.disabled=!0,l.classList.add("auto-complete"),c.classList.add("translation-field"),a.classList.add("button-container"),r.textContent="check",i.textContent="continue",l.textContent="auto-complete",n.appendChild(c),n.appendChild(t.getNode()),n.appendChild(a),n.appendChild(e.getNode()),a.appendChild(i),a.appendChild(r),a.appendChild(l))}},320:function(e,t,n){var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const r=o(n(487)),i=o(n(570));t.default=function(){const e=localStorage.getItem("IamBigBobby_name"),t=localStorage.getItem("IamBigBobby_surname"),{body:n}=document,o=document.createElement("div");o.classList.add("greetings-wrapper"),n.appendChild(o);const l=document.querySelector(".greetings-wrapper");if(l){const n=document.createElement("div");n.classList.add("say-hi"),n.innerHTML=`Hello ${e} ${t}! This is RSS-PUZZLE!<br>It's created by Denis Svetleishii RS-2023q4.<br>In this game you have to solve a puzzle made up of sentences in English and paintings by great artists at the same time!<br>Enjoy!`,l.appendChild(n);const o=document.createElement("button");o.classList.add("start-play"),o.textContent="Start",l.appendChild(o),o.addEventListener("click",(()=>{(0,r.default)(),(0,i.default)()}))}}},700:function(e,t,n){var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const r=o(n(974)),i=o(n(71));t.default=function(){const{body:e}=document,t=document.createElement("div");t.classList.add("input-container"),e.appendChild(t);const n=document.createElement("div");n.classList.add("greetings"),n.textContent="Greetings!",t.appendChild(n);const o=document.createElement("input");o.classList.add("name-input"),o.type="text",o.style.display="block",o.placeholder="First Name",o.required=!0,t.appendChild(o);const l=document.createElement("input");l.classList.add("surname-input"),l.type="text",l.style.display="block",l.placeholder="Surname",l.required=!0,t.appendChild(l);const c=document.createElement("button");c.classList.add("log-in-button"),c.textContent="Login",c.style.display="block",c.disabled=!0,t.appendChild(c),(0,i.default)(),(0,r.default)()}},28:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0});const o=n(954);t.default=class{constructor(e,t,n=".puzzle-container",o=10){this.rows=o,this.cols=e,this.container=document.querySelector(n),this.img=t}setupPuzzle(){const e=this.container.offsetWidth,t=this.container.offsetHeight;for(let n=0;n<this.rows;n+=1){const r=(0,o.div)("row-container");this.container.appendChild(r.getNode()),0===n&&r.addClass("row-container_active"),0!==n&&r.setStyle("display","none");for(let i=0;i<this.cols[n].length;i+=1){const l=(0,o.div)("puzzle-piece"),c=this.cols[n][i],a=e/this.cols[n].length,d=t/this.rows;l.setStyle("background-image",`url(https://raw.githubusercontent.com/rolling-scopes-school/rss-puzzle-data/main/images/${this.img})`);const u=-a*i,s=-d*n;l.setStyle("background-position",`${u}px ${s}px`),l.setStyle("width",`${a}px`),l.setStyle("height",`${d}px`);const f=(0,o.div)("word");f.setInnerText(`${c}`),l.appendChildren([f]),r.appendChildren([l])}const i=Array.from(r.getChildren()).slice();for(let e=i.length-1;e>0;e-=1){const t=Math.floor(Math.random()*(e+1)),n=i[e];i[e]=i[t],i[t]=n}r.appendChildren(i)}}}},170:function(e,t,n){var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const r=o(n(221)),i=n(879),l=o(n(383)),c=o(n(368)),a=o(n(22)),d=o(n(28)),u=o(n(97)),s=n(766),f=o(n(457));t.default=function(e,t){(0,a.default)(),(0,i.setStep)(0);const n=document.querySelector(".button-hint-translation"),o=document.querySelector(".button-hint-img");n&&(n.textContent="Show translate: off"),o&&(o.textContent="Show background: off");const p=new s.GetCurrentData(e,t);Promise.all([p.getImg(),p.getTextExample(),p.getRoundsCount()]).then((([e,t,n])=>{new d.default(t,e).setupPuzzle(),new c.default(t).setupCollectingField(),(0,l.default)(t),(0,u.default)(t),(0,r.default)(t),(0,f.default)(n)}))}},487:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){const{body:e}=document;for(;e.firstChild;)e.removeChild(e.firstChild)}},922:function(e,t,n){var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const r=o(n(937));t.default=function(){const e=document.createElement("div");e.classList.add("info-after-round");const t=document.querySelector(".main");t&&(t.prepend(e),(0,r.default)())}},494:function(e,t,n){var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.currentDifficulty=void 0;const r=n(766),i=o(n(457));function l(e){const{selectedIndex:n}=e.target;t.currentDifficulty=n+1;const o=new r.GetCurrentData(t.currentDifficulty);Promise.all([o.getRoundsCount()]).then((([e])=>{(0,i.default)(e)}))}t.currentDifficulty=1,t.default=function(){const e=document.querySelector(".selector-lvl");if(e instanceof HTMLSelectElement){const t=["Difficulty 1","Difficulty 2","Difficulty 3","Difficulty 4","Difficulty 5","Difficulty 6"];for(let n=0;n<t.length;n+=1){const o=document.createElement("option");o.textContent=t[n],e.appendChild(o)}e.addEventListener("change",l)}}},97:function(e,t,n){var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const r=o(n(879));t.default=function(e){const t=document.querySelectorAll(".puzzle-piece");let n=null;t.forEach((e=>{e.setAttribute("draggable","true"),e.addEventListener("drag",(e=>function(e){n=e.currentTarget}(e)))})),document.querySelectorAll(".collecting-field").forEach((t=>{t.addEventListener("drop",(t=>function(t){var o,i,l,c,a;if(t.preventDefault(),n){const d=t.target;if(d.classList.contains("puzzle-piece")){const e=n.parentNode;if(e===d.parentNode)return;null===(o=n.parentNode)||void 0===o||o.removeChild(n),null===(i=d.parentNode)||void 0===i||i.appendChild(n),null===(l=d.parentNode)||void 0===l||l.removeChild(d),e.appendChild(d)}else if(d.classList.contains("word")){const e=n.parentNode,t=d.parentNode,o=t.parentNode;null===(c=n.parentNode)||void 0===c||c.removeChild(n),o.appendChild(n),o.removeChild(t),e.appendChild(t)}else d.classList.contains("collecting-field_active")&&(null===(a=n.parentNode)||void 0===a||a.removeChild(n),d.appendChild(n),(0,r.default)(e))}}(t))),t.addEventListener("dragover",(e=>function(e){e.preventDefault()}(e)))}))}},570:function(e,t,n){var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const r=o(n(245)),i=o(n(22)),l=o(n(170));t.default=function(){(0,r.default)(),(0,i.default)(),(0,l.default)(1,0)}},766:function(e,t){var n=this&&this.__awaiter||function(e,t,n,o){return new(n||(n=Promise))((function(r,i){function l(e){try{a(o.next(e))}catch(e){i(e)}}function c(e){try{a(o.throw(e))}catch(e){i(e)}}function a(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(l,c)}a((o=o.apply(e,t||[])).next())}))};function o(e){return n(this,void 0,void 0,(function*(){const t=yield fetch(e);return yield t.json()}))}Object.defineProperty(t,"__esModule",{value:!0}),t.GetCurrentData=t.getLvlData=void 0,t.getLvlData=o,t.GetCurrentData=class{constructor(e,t=1){this.difficulty=e,this.round=t}fetchData(){return n(this,void 0,void 0,(function*(){this.lvlData=yield o(`https://raw.githubusercontent.com/rolling-scopes-school/rss-puzzle-data/main/data/wordCollectionLevel${this.difficulty}.json`)}))}getLvlData(){return n(this,void 0,void 0,(function*(){return yield this.fetchData(),this.lvlData}))}getTextExample(){return n(this,void 0,void 0,(function*(){yield this.fetchData();const e=this.lvlData.rounds[this.round].words.length,t=[];for(let n=0;n<e;n+=1){const e=this.lvlData.rounds[this.round].words[n].textExample.split(" ");t.push(e)}return t}))}getRoundsCount(){return n(this,void 0,void 0,(function*(){return yield this.fetchData(),this.lvlData.rounds.length}))}getImg(){return n(this,void 0,void 0,(function*(){return yield this.fetchData(),this.lvlData.rounds[this.round].levelData.imageSrc}))}getTranslation(e){return n(this,void 0,void 0,(function*(){return yield this.fetchData(),this.lvlData.rounds[this.round].words[e].textExampleTranslate}))}getAuthor(){return n(this,void 0,void 0,(function*(){return yield this.fetchData(),this.lvlData.rounds[this.round].levelData.author}))}getYear(){return n(this,void 0,void 0,(function*(){return yield this.fetchData(),this.lvlData.rounds[this.round].levelData.year}))}getName(){return n(this,void 0,void 0,(function*(){return yield this.fetchData(),this.lvlData.rounds[this.round].levelData.name}))}}},594:function(e,t,n){var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const r=o(n(700)),i=o(n(487));t.default=function(){const e=document.querySelector(".button-log-out");e&&e.addEventListener("click",(()=>{localStorage.removeItem("IamBigBobby_name"),localStorage.removeItem("IamBigBobby_surname"),(0,i.default)(),(0,r.default)()}))}},787:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){const t=document.querySelectorAll(".row-container"),n=document.querySelector(".row-container_active"),o=n?n.nextElementSibling:null;n&&o&&(n.classList.remove("row-container_active"),o.classList.add("row-container_active"),t.forEach(((t,n)=>{t.style.display=n===e?"flex":"none"})))}},959:function(e,t,n){var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const r=o(n(170)),i=n(494),l=n(457);t.default=function(){const e=document.querySelector(".next-round-button");e&&e.addEventListener("click",(()=>{const e=document.querySelector(".main");if(e){for(;e.firstChild;)e.removeChild(e.firstChild);(0,l.makeNextRoundStep)(),(0,r.default)(i.currentDifficulty,l.currentRound);const t=document.querySelector(".select-round").options;for(let e=0;e<t.length;e+=1){const n=t[e];e===l.currentRound?n.selected=!0:n.selected=!1}}}))}},457:function(e,t,n){var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.makeNextRoundStep=t.selectedIndex=t.currentRound=void 0;const r=o(n(170)),i=n(494);function l(e){const{selectedIndex:n}=e.target;t.currentRound=n;const o=document.querySelector("main");if(o){for(;o.firstChild;)o.removeChild(o.firstChild);(0,r.default)(i.currentDifficulty,t.currentRound)}}t.currentRound=0,t.default=function(e){const n=document.querySelector(".select-round");for(t.selectedIndex=n.selectedIndex;n.firstChild;)n.removeChild(n.firstChild);for(let o=0;o<e;o+=1){const e=document.createElement("option");e.textContent=`Round ${o+1}`,o===t.selectedIndex&&e.setAttribute("selected","selected"),n.appendChild(e)}n.addEventListener("change",l)},t.makeNextRoundStep=function(){t.currentRound+=1}},974:function(e,t,n){var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const r=o(n(320)),i=o(n(487));t.default=function(){const e=document.querySelector(".log-in-button"),t=document.querySelector(".name-input"),n=document.querySelector(".surname-input");e&&e.addEventListener("click",(()=>{localStorage.setItem("IamBigBobby_name",t.value),localStorage.setItem("IamBigBobby_surname",n.value),(0,i.default)(),(0,r.default)()}))}},937:function(e,t,n){var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const r=n(494),i=n(766),l=o(n(959)),c=n(457);t.default=function(){const e=document.querySelector(".info-after-round");if(e){const t=document.createElement("div");t.classList.add("info-block-wrapper"),e.prepend(t);const n=new i.GetCurrentData(r.currentDifficulty,c.currentRound);Promise.all([n.getImg(),n.getAuthor(),n.getYear(),n.getName()]).then((([e,t,n,o])=>{const r=document.querySelector(".info-block-wrapper");if(r){const i=document.createElement("img");i.classList.add("img-result"),i.src=`https://raw.githubusercontent.com/rolling-scopes-school/rss-puzzle-data/main/images/${e}`,i.style.display="block",i.style.width="500px",i.style.height="auto";const c=document.createElement("div");c.classList.add("about-result"),c.textContent=`name:${o} autor:${t} year:${n}`;const a=document.createElement("button");a.classList.add("next-round-button"),a.style.display="block",a.textContent="Next round",r.prepend(a),r.prepend(c),r.prepend(i),(0,l.default)()}}))}}},545:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){const e=document.querySelector(".button-hint-img");e&&e.addEventListener("click",(()=>{const t=document.querySelector(".row-container-collecting_active"),n=document.querySelector(".row-container_active");if(t&&n){const o=Array.from(t.children),r=Array.from(n.children);o.length>0&&r.length>0&&("Show background: off"===e.textContent?(o.forEach((e=>{const t=e.querySelector(".word");t&&t.classList.add("word_open")})),r.forEach((e=>{const t=e.querySelector(".word");t&&t.classList.add("word_open")})),e.textContent="Show background: on"):"Show background: on"===e.textContent&&(o.forEach((e=>{const t=e.querySelector(".word");t&&t.classList.remove("word_open")})),r.forEach((e=>{const t=e.querySelector(".word");t&&t.classList.remove("word_open")})),e.textContent="Show background: off"))}}))}},588:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0});const o=n(879),r=n(494),i=n(766),l=n(457);t.default=function(){const e=document.querySelector(".button-hint-translation");e&&e.addEventListener("click",(()=>{const t=document.querySelector(".translation-field");"Show translate: off"===e.textContent?(new i.GetCurrentData(r.currentDifficulty,l.currentRound).getTranslation(o.step).then((e=>{t&&(t.textContent=e)})),e.textContent="Show translate: on"):"Show translate: on"===e.textContent&&(t&&(t.textContent=""),e.textContent="Show translate: off")}))}},71:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){const e=document.querySelector(".name-input"),t=document.querySelector(".surname-input"),n=document.querySelector(".log-in-button");function o(){""!==e.value.trim()&&""!==t.value.trim()?n.removeAttribute("disabled"):n.setAttribute("disabled","disabled")}e.addEventListener("input",o),t.addEventListener("input",o)}}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var i=t[o]={id:o,exports:{}};return e[o].call(i.exports,i,i.exports,n),i.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.nc=void 0,n(156)})();