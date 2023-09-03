(()=>{"use strict";var e={731:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.FORMAT_PLAIN=t.FORMAT_HTML=t.FORMATS=void 0;var n="html";t.FORMAT_HTML=n;var r="plain";t.FORMAT_PLAIN=r;var a=[n,r];t.FORMATS=a},670:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.LINE_ENDINGS=void 0,t.LINE_ENDINGS={POSIX:"\n",WIN32:"\r\n"}},3:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.SUPPORTED_PLATFORMS=void 0,t.SUPPORTED_PLATFORMS={DARWIN:"darwin",LINUX:"linux",WIN32:"win32"}},755:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.UNIT_WORDS=t.UNIT_WORD=t.UNIT_SENTENCES=t.UNIT_SENTENCE=t.UNIT_PARAGRAPHS=t.UNIT_PARAGRAPH=t.UNITS=void 0;var n="words";t.UNIT_WORDS=n;var r="word";t.UNIT_WORD=r;var a="sentences";t.UNIT_SENTENCES=a;var o="sentence";t.UNIT_SENTENCE=o;var s="paragraphs";t.UNIT_PARAGRAPHS=s;var i="paragraph";t.UNIT_PARAGRAPH=i;var c=[n,r,a,o,s,i];t.UNITS=c},749:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.WORDS=void 0,t.WORDS=["ad","adipisicing","aliqua","aliquip","amet","anim","aute","cillum","commodo","consectetur","consequat","culpa","cupidatat","deserunt","do","dolor","dolore","duis","ea","eiusmod","elit","enim","esse","est","et","eu","ex","excepteur","exercitation","fugiat","id","in","incididunt","ipsum","irure","labore","laboris","laborum","Lorem","magna","minim","mollit","nisi","non","nostrud","nulla","occaecat","officia","pariatur","proident","qui","quis","reprehenderit","sint","sit","sunt","tempor","ullamco","ut","velit","veniam","voluptate"]},380:(e,t,n)=>{Object.defineProperty(t,"Ap",{enumerable:!0,get:function(){return a.default}});n(731),n(755),n(749);var r,a=(r=n(935))&&r.__esModule?r:{default:r}},935:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,a=n(731),o=n(670),s=(r=n(140))&&r.__esModule?r:{default:r},i=n(270);function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var l=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:a.FORMAT_PLAIN,r=arguments.length>2?arguments[2]:void 0;if(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.format=n,this.suffix=r,function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n}(this,"generator",void 0),-1===a.FORMATS.indexOf(n.toLowerCase()))throw new Error("".concat(n," is an invalid format. Please use ").concat(a.FORMATS.join(" or "),"."));this.generator=new s.default(t)}var t,n;return t=e,(n=[{key:"getLineEnding",value:function(){return this.suffix?this.suffix:!(0,i.isReactNative)()&&(0,i.isNode)()&&(0,i.isWindows)()?o.LINE_ENDINGS.WIN32:o.LINE_ENDINGS.POSIX}},{key:"formatString",value:function(e){return this.format===a.FORMAT_HTML?"<p>".concat(e,"</p>"):e}},{key:"formatStrings",value:function(e){var t=this;return e.map((function(e){return t.formatString(e)}))}},{key:"generateWords",value:function(e){return this.formatString(this.generator.generateRandomWords(e))}},{key:"generateSentences",value:function(e){return this.formatString(this.generator.generateRandomParagraph(e))}},{key:"generateParagraphs",value:function(e){var t=this.generator.generateRandomParagraph.bind(this.generator);return this.formatStrings((0,i.makeArrayOfStrings)(e,t)).join(this.getLineEnding())}}])&&c(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}(),u=l;t.default=u},140:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(749),a=n(270);function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var i=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.sentencesPerParagraph,a=void 0===n?{max:7,min:3}:n,o=t.wordsPerSentence,i=void 0===o?{max:15,min:5}:o,c=t.random,l=(t.seed,t.words),u=void 0===l?r.WORDS:l;if(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),s(this,"sentencesPerParagraph",void 0),s(this,"wordsPerSentence",void 0),s(this,"random",void 0),s(this,"words",void 0),a.min>a.max)throw new Error("Minimum number of sentences per paragraph (".concat(a.min,") cannot exceed maximum (").concat(a.max,")."));if(i.min>i.max)throw new Error("Minimum number of words per sentence (".concat(i.min,") cannot exceed maximum (").concat(i.max,")."));this.sentencesPerParagraph=a,this.words=u,this.wordsPerSentence=i,this.random=c||Math.random}var t,n;return t=e,(n=[{key:"generateRandomInteger",value:function(e,t){return Math.floor(this.random()*(t-e+1)+e)}},{key:"generateRandomWords",value:function(e){var t=this,n=this.wordsPerSentence,r=n.min,o=n.max,s=e||this.generateRandomInteger(r,o);return(0,a.makeArrayOfLength)(s).reduce((function(e,n){return"".concat(t.pluckRandomWord()," ").concat(e)}),"").trim()}},{key:"generateRandomSentence",value:function(e){return"".concat((0,a.capitalize)(this.generateRandomWords(e)),".")}},{key:"generateRandomParagraph",value:function(e){var t=this,n=this.sentencesPerParagraph,r=n.min,o=n.max,s=e||this.generateRandomInteger(r,o);return(0,a.makeArrayOfLength)(s).reduce((function(e,n){return"".concat(t.generateRandomSentence()," ").concat(e)}),"").trim()}},{key:"pluckRandomWord",value:function(){var e=this.words.length-1,t=this.generateRandomInteger(0,e);return this.words[t]}}])&&o(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();t.default=i},569:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default=function(e){var t=e.trim();return t.charAt(0).toUpperCase()+t.slice(1)}},270:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"capitalize",{enumerable:!0,get:function(){return r.default}}),Object.defineProperty(t,"isNode",{enumerable:!0,get:function(){return a.default}}),Object.defineProperty(t,"isReactNative",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(t,"isWindows",{enumerable:!0,get:function(){return s.default}}),Object.defineProperty(t,"makeArrayOfLength",{enumerable:!0,get:function(){return i.default}}),Object.defineProperty(t,"makeArrayOfStrings",{enumerable:!0,get:function(){return c.default}});var r=l(n(569)),a=l(n(984)),o=l(n(97)),s=l(n(606)),i=l(n(318)),c=l(n(490));function l(e){return e&&e.__esModule?e:{default:e}}},984:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default=function(){return!!e.exports}},97:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default=function(){var e=!1;try{e="ReactNative"===navigator.product}catch(t){e=!1}return e}},606:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(3);t.default=function(){var e=!1;try{e=process.platform===r.SUPPORTED_PLATFORMS.WIN32}catch(t){e=!1}return e}},318:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return Array.apply(null,Array(e)).map((function(e,t){return t}))}},490:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,a=(r=n(318))&&r.__esModule?r:{default:r};t.default=function(e,t){return(0,a.default)(e).map((function(){return t()}))}}},t={};function n(r){var a=t[r];if(void 0!==a)return a.exports;var o=t[r]={exports:{}};return e[r](o,o.exports,n),o.exports}(()=>{const e='<svg xmlns="http://www.w3.org/2000/svg" height="1em" fill="currentColor" viewBox="0 0 448 512">\x3c!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --\x3e<path d="M135.2 17.7C140.6 6.8 151.7 0 163.8 0H284.2c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32h96l7.2-14.3zM32 128H416V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V128zm96 64c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16z"/></svg>',t='<svg xmlns="http://www.w3.org/2000/svg" height="1em" fill="currentColor" viewBox="0 0 512 512">\x3c!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --\x3e<path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM232 344V280H168c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V168c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H280v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z"/></svg>';function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}function a(e,t){if(t.length<e)throw new TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")}function o(e){a(1,arguments);var t=Object.prototype.toString.call(e);return e instanceof Date||"object"===r(e)&&"[object Date]"===t?new Date(e.getTime()):"number"==typeof e||"[object Number]"===t?new Date(e):("string"!=typeof e&&"[object String]"!==t||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn((new Error).stack)),new Date(NaN))}function s(e){a(1,arguments);var t=o(e);return t.setHours(0,0,0,0),t}function i(e){if(null===e||!0===e||!1===e)return NaN;var t=Number(e);return isNaN(t)?t:t<0?Math.ceil(t):Math.floor(t)}var c={};function l(){return c}function u(e,t){var n,r,s,c,u,d,m,f;a(1,arguments);var p=l(),g=i(null!==(n=null!==(r=null!==(s=null!==(c=null==t?void 0:t.weekStartsOn)&&void 0!==c?c:null==t||null===(u=t.locale)||void 0===u||null===(d=u.options)||void 0===d?void 0:d.weekStartsOn)&&void 0!==s?s:p.weekStartsOn)&&void 0!==r?r:null===(m=p.locale)||void 0===m||null===(f=m.options)||void 0===f?void 0:f.weekStartsOn)&&void 0!==n?n:0);if(!(g>=0&&g<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var h=o(e),v=h.getDay(),y=(v<g?7:0)+v-g;return h.setDate(h.getDate()-y),h.setHours(0,0,0,0),h}class d{constructor(){localStorage.getItem("lists")?this.lists=d.getListsFromStorage():this.lists={}}getListsNames(){return Object.keys(this.lists)}getAllTasks(){const e=[];return this.getListsNames().forEach((t=>{e.push(this.lists[t])})),e.flat()}getTodaysTasks(){const e=[];return this.getAllTasks().forEach((t=>{(function(e){return a(1,arguments),function(e,t){a(2,arguments);var n=s(e),r=s(t);return n.getTime()===r.getTime()}(e,Date.now())})(t.dueDate)&&e.push(t)})),e}getThisWeeksTasks(){const e=[];return this.getAllTasks().forEach((t=>{(function(e,t){return a(1,arguments),function(e,t,n){a(2,arguments);var r=u(e,n),o=u(t,n);return r.getTime()===o.getTime()}(e,Date.now(),t)})(t.dueDate)&&e.push(t)})),e}static sortByDate(e){return e.sort(((e,t)=>t.priorityAsNumber-e.priorityAsNumber)),e.sort(((e,t)=>e.dueDate-t.dueDate)),e}static sortByPriority(e){return e.sort(((e,t)=>e.dueDate-t.dueDate)),e.sort(((e,t)=>t.priorityAsNumber-e.priorityAsNumber)),e}static groupByPriority(e){const t={};return d.sortByPriority(e),e.forEach((e=>{Object.prototype.hasOwnProperty.call(t,e.priority)||(t[e.priority]=[]),t[e.priority].push(e)})),t}static groupByDate(e){const t={};return d.sortByDate(e),e.forEach((e=>{Object.prototype.hasOwnProperty.call(t,e.dueDate)||(t[e.dueDate]=[]),t[e.dueDate].push(e)})),t}static getListsFromStorage(){const e=localStorage.getItem("lists");return JSON.parse(e,((e,t)=>"dueDate"===e?new Date(t):t))}}const m=d;function f(){const e=localStorage.getItem("content");document.querySelectorAll(".nav-bar button").forEach((t=>{t.classList.remove("current-content"),t.dataset.content===e&&t.classList.add("current-content")}))}function p(e,t,n){let r,a;"Priority"===n?(r=`priority-${t.toLowerCase()}`,a=`${n}: ${t}`):"Date"===n&&(r="date-group",a=`${new Date(t).toDateString()}`);const o=`\n  <div class="task-group ${r}">\n    <h3 class="group-title">${a}</h3>\n    <div class="task-cards"></div>\n  </div>\n  `,s=(new DOMParser).parseFromString(o,"text/html").querySelector(".task-group"),i=s.querySelector(".task-cards");return e.forEach((e=>{const t=function(e){const t=`\n  <div class="task-card card-${e.priority.toLowerCase()}" data-id="${e.id}">\n    <div class=".task-title">Title: ${e.title}</div>\n    <div class=".task-dueDate">Due date: ${e.dueDate.toDateString()}</div>\n    <div class=".task-priority">Priority: ${e.priority}</div>\n    <div class=".task-list">List: ${e.list}</div>\n    <div class=".task-notes">Notes: ${e.notes}</div>\n  </div>\n  `;return(new DOMParser).parseFromString(t,"text/html").querySelector(".task-card")}(e);i.appendChild(t)})),s}function g(e,t){const n=t||localStorage.getItem("sortBy");let r;return"priority"===n?r=m.groupByPriority(e):"date"===n&&(r=m.groupByDate(e)),function(e,t){const n=[];if("priority"===t){const t=function(e){const t=Object.keys(e);return["High","Medium","Low","None"].filter((e=>t.includes(e)))}(e);t.forEach((t=>{const r=e[t];m.sortByDate(r);const a=p(r,t,"Priority");n.push(a)}))}else if("date"===t){const t=function(e){const t=Object.keys(e);return t.sort(((e,t)=>new Date(e)-new Date(t))),t}(e);t.forEach((t=>{const r=e[t];m.sortByPriority(r);const a=p(r,t,"Date");n.push(a)}))}return n}(r,n)}function h(){const n=localStorage.getItem("content"),r=new m;let a,o;switch(n){case"Scheduled":o=g(r.getAllTasks()),a=n;break;case"Today":o=g(r.getTodaysTasks(),"priority"),a=n;break;case"This Week":o=g(r.getThisWeeksTasks()),a=n;break;case"Lists":{const{lists:t}=r;o=function(t){const n=[];return Object.keys(t).forEach((r=>{const a=function(t,n){const r=function(e){const t={High:0,Medium:0,Low:0,None:0};return e.forEach((e=>{t[e.priority]+=1})),t}(n),a=`\n  <div class="list-card" data-content="${t}">\n    <div class="list-name">${t}</div>\n    <div class="list-tasks">Tasks: ${n.length}</div>\n    <ul class="list-details">\n      <li>High: ${r.High}</li>\n      <li>Medium: ${r.Medium}</li>\n      <li>Low: ${r.Low}</li>\n      <li>None: ${r.None}</li>\n    </ul>\n    <button class="delete-list-card" data-type="delete-list" data-list="${t}">${e}</button>\n  </div>\n  `;return(new DOMParser).parseFromString(a,"text/html").querySelector(".list-card")}(r,t[r]);n.push(a)})),n}(t),a=`${n}`;break}default:o=g(r.lists[n]),a=`List: ${n}`}const s=document.createElement("div");s.classList.add("main-content"),s.append(...o);const i=document.querySelector(".main");i.replaceChildren();const c=function(n){const r=localStorage.getItem("sortBy"),a=`\n  <button class="delete-list-btn" data-type="delete-list" data-list="${localStorage.getItem("content")}">${e}</button>\n  `,o=`\n  <select class="select-sort">\n      <option value="date" ${"date"===r?"selected":""}>date</option>\n      <option value="priority" ${"priority"===r?"selected":""}>priority</option>\n  </select>\n  `,s=`\n  <button class="add-task-btn" data-type="add-task">${t}New Task</button>\n  `,i=`\n  <button class="add-list-btn" data-type="add-list"><span>${t}</span>New List</button>\n  `,c=`\n  <div class="content-title-bar">\n    <h2 class="main-content-title">${n}</h2>\n    ${/^List:/.test(n)?a:""}\n    ${"Lists"===n?i:s}\n    ${"Today"===n||"Lists"===n?"":o}\n  </div>\n  `;return(new DOMParser).parseFromString(c,"text/html").querySelector(".content-title-bar")}(a);i.appendChild(c),i.appendChild(s),document.querySelector(".nav-bar").classList.contains("show")&&document.querySelector(".hamburger-btn").click()}function v(){!function(){const e=document.querySelector(".lists-menu");e.replaceChildren();const t=document.createElement("button");t.classList.add("lists-btn"),t.dataset.content="Lists",t.textContent="Lists:",e.appendChild(t),(new m).getListsNames().forEach((t=>{const n=`\n    <li>\n      <button class="nav-bar-btn" data-content="${t}">\n        ${t}\n      </button>\n    </li>\n    `,r=(new DOMParser).parseFromString(n,"text/html").querySelector("li");e.appendChild(r)}))}(),h(),f()}const y=new(n(380).Ap)({sentencesPerParagraph:{max:4,min:1},wordsPerSentence:{max:8,min:4}});class b{static LEVELS=["None","Low","Medium","High"];#e;constructor(){this.#e=Math.floor(Math.random()*b.LEVELS.length),this.level=b.LEVELS.at(this.#e),this.levelAsNumber=this.#e}}function w(e){const t=Math.floor(14*Math.random()),n=function(e,t){a(2,arguments);var n=o(e),r=i(t);return isNaN(r)?new Date(NaN):r?(n.setDate(n.getDate()+r),n):n}(function(){const e=new Date;return e.setHours(0,0,0),e}(),t),r=Math.floor(Math.random()*Date.now()),s=y.generateSentences(1),c=y.generateParagraphs(1),l=new b;return{list:e,title:s,notes:c,dueDate:n,id:r,priority:l.level,priorityAsNumber:l.levelAsNumber}}function S(e){const t=[],n=Math.floor(8*Math.random())+3;for(let r=0;r<n;r+=1)t.push(w(e));return t}document.body.appendChild((()=>{const e=document.createElement("div");return e.classList.add("app"),e.appendChild((()=>{const e=(new DOMParser).parseFromString('\n<header class="header">\n  <div class="top-bar">\n    <div class="hamburger-btn-wrapper">\n      <button class="hamburger-btn"><svg xmlns="http://www.w3.org/2000/svg" height="1em" fill="currentColor" viewBox="0 0 448 512">\x3c!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --\x3e<path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg></button>\n    </div>\n    <h1>Todo List</h1>\n    <div class="demo-btn-wrapper">\n      <button class="demo-btn">DEMO</button>\n    </div>\n  </div>\n  <div class="nav-bar-wrapper">\n    <nav class="nav-bar">\n      <menu class="main-menu">\n        <li><button class="nav-bar-btn" data-content="Scheduled">Scheduled</button></li>\n        <li><button class="nav-bar-btn" data-content="Today">Today</button></li>\n        <li><button class="nav-bar-btn" data-content="This Week">This Week</button></li>\n      </menu>\n      <menu class="lists-menu"></menu>\n      <button class="nav-bar-btn add-list-btn" data-type="add-list"><span><svg xmlns="http://www.w3.org/2000/svg" height="1em" fill="currentColor" viewBox="0 0 448 512">\x3c!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --\x3e<path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"/></svg></span>New List</button>\n    </nav>\n  </div>\n</header>\n',"text/html").querySelector(".header"),t=e.querySelector(".hamburger-btn"),n=e.querySelector(".nav-bar-wrapper"),r=e.querySelector(".nav-bar");return r.addEventListener("transitionrun",(()=>{r.classList.contains("show")&&n.classList.add("show")})),r.addEventListener("transitionend",(()=>{n.classList.contains("show")&&!r.classList.contains("show")&&(n.classList.remove("show"),n.classList.remove("bgc-fade"))})),e.addEventListener("click",(e=>{e.target!==t&&e.target!==n||(r.classList.toggle("show"),n.classList.toggle("bgc-fade"))})),r.addEventListener("click",(e=>{"BUTTON"===e.target.nodeName&&("add-list"===e.target.dataset.type?document.querySelector(".new-list-modal").showModal():(localStorage.setItem("content",e.target.dataset.content),h(),f()))})),e})()),e.appendChild((()=>{const e=document.createElement("main");return e.classList.add("main"),e.addEventListener("click",(e=>{if(e.target.classList.contains("list-card")){const{content:t}=e.target.dataset;document.querySelector(`.lists-menu [data-content="${t}"]`).click()}if("add-list"===e.target.dataset.type&&document.querySelector(".new-list-modal").showModal(),"delete-list"===e.target.dataset.type){const t=document.querySelector(".delete-list-modal"),n=t.querySelector(".list-to-delete");t.querySelector("form").dataset.list=e.target.dataset.list,n.textContent=e.target.dataset.list,t.showModal()}"add-task"===e.target.dataset.type&&console.log("launch add new task modal")})),e.addEventListener("input",(e=>{"SELECT"===e.target.nodeName&&(localStorage.setItem("sortBy",e.target.value),h())})),e})()),e.appendChild((()=>{const e=document.createElement("footer");return e.classList.add("footer"),e.textContent="Not finished yet",e})()),e})()),document.body.appendChild((()=>{const e=(new DOMParser).parseFromString('\n  <dialog class="new-list-modal">\n    <form class="new-list-form" method="dialog">\n      <div class="input-field">\n        <label for="new-list-name">New List Name:</label>\n        <input id="new-list-name" type="text">\n      </div>\n      <menu class="modal-menu">\n        <button class="modal-btn btn-cancel">Cancel</button>\n        <button class="modal-btn btn-create" type="button">Create</button>\n      </menu>\n    </form>\n  </dialog>\n  ',"text/html").querySelector(".new-list-modal"),t=e.querySelector("form"),n=t.querySelector("input"),r=t.querySelector(".btn-create");return e.addEventListener("click",(t=>{if(t.target===e&&e.close(),t.target===r){const t=n.value.trim();t&&!function(e){const t=new m;return Object.keys(t.lists).map((e=>e.toLowerCase())).includes(e.toLowerCase())}(t)&&(function(e){const t=new m;t.lists[e]=[],localStorage.setItem("lists",JSON.stringify(t.lists))}(t),localStorage.setItem("content",t),v(),e.close())}})),e.addEventListener("close",(()=>{n.value=""})),e})()),document.body.appendChild((()=>{const e=(new DOMParser).parseFromString('\n  <dialog class="delete-list-modal">\n    <form class="delete-list-form" method="dialog">\n      <div class="modal-prompt">\n      Are you sure you want to <b>delete</b> list <span class="list-to-delete"></span>?\n      </div>\n      <menu class="modal-menu">\n        <button class="modal-btn btn-no">NO</button>\n        <button class="modal-btn btn-yes" data-action="delete-list">YES</button>\n      </menu>\n    </form>\n  </dialog>\n  ',"text/html").querySelector(".delete-list-modal");return e.addEventListener("click",(t=>{if(t.target===e&&e.close(),"delete-list"===t.target.dataset.action){const{list:e}=t.target.form.dataset;!function(e){const t=new m;delete t.lists[e],localStorage.setItem("lists",JSON.stringify(t.lists))}(e),localStorage.setItem("content","Lists"),v()}})),e})()),localStorage.getItem("sortBy")||localStorage.setItem("sortBy","date"),localStorage.getItem("content")?localStorage.setItem("content","Today"):localStorage.setItem("content","Scheduled"),v(),document.querySelector(".demo-btn").addEventListener("click",(()=>{localStorage.setItem("lists",JSON.stringify(function(){const e={},t=Math.floor(3*Math.random())+3;for(let n=0;n<t;n+=1){const t=y.generateWords(1),n=t.at(0).toLocaleUpperCase()+t.slice(1);e[n]=S(n)}return e}())),localStorage.setItem("content","Today"),v()}))})()})();