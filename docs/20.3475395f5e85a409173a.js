(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{457:function(n,t,e){"use strict";var o,i=function(){return void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o},a=function(){var n={};return function(t){if(void 0===n[t]){var e=document.querySelector(t);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}n[t]=e}return n[t]}}(),l=[];function r(n){for(var t=-1,e=0;e<l.length;e++)if(l[e].identifier===n){t=e;break}return t}function d(n,t){for(var e={},o=[],i=0;i<n.length;i++){var a=n[i],d=t.base?a[0]+t.base:a[0],s=e[d]||0,c="".concat(d," ").concat(s);e[d]=s+1;var p=r(c),m={css:a[1],media:a[2],sourceMap:a[3]};-1!==p?(l[p].references++,l[p].updater(m)):l.push({identifier:c,updater:h(m,t),references:1}),o.push(c)}return o}function s(n){var t=document.createElement("style"),o=n.attributes||{};if(void 0===o.nonce){var i=e.nc;i&&(o.nonce=i)}if(Object.keys(o).forEach((function(n){t.setAttribute(n,o[n])})),"function"==typeof n.insert)n.insert(t);else{var l=a(n.insert||"head");if(!l)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");l.appendChild(t)}return t}var c,p=(c=[],function(n,t){return c[n]=t,c.filter(Boolean).join("\n")});function m(n,t,e,o){var i=e?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(n.styleSheet)n.styleSheet.cssText=p(t,i);else{var a=document.createTextNode(i),l=n.childNodes;l[t]&&n.removeChild(l[t]),l.length?n.insertBefore(a,l[t]):n.appendChild(a)}}function f(n,t,e){var o=e.css,i=e.media,a=e.sourceMap;if(i?n.setAttribute("media",i):n.removeAttribute("media"),a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleSheet)n.styleSheet.cssText=o;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(o))}}var u=null,b=0;function h(n,t){var e,o,i;if(t.singleton){var a=b++;e=u||(u=s(t)),o=m.bind(null,e,a,!1),i=m.bind(null,e,a,!0)}else e=s(t),o=f.bind(null,e,t),i=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)};return o(n),function(t){if(t){if(t.css===n.css&&t.media===n.media&&t.sourceMap===n.sourceMap)return;o(n=t)}else i()}}n.exports=function(n,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=i());var e=d(n=n||[],t);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var o=0;o<e.length;o++){var i=r(e[o]);l[i].references--}for(var a=d(n,t),s=0;s<e.length;s++){var c=r(e[s]);0===l[c].references&&(l[c].updater(),l.splice(c,1))}e=a}}}},458:function(n,t,e){"use strict";n.exports=function(n){var t=[];return t.toString=function(){return this.map((function(t){var e=n(t);return t[2]?"@media ".concat(t[2]," {").concat(e,"}"):e})).join("")},t.i=function(n,e,o){"string"==typeof n&&(n=[[null,n,""]]);var i={};if(o)for(var a=0;a<this.length;a++){var l=this[a][0];null!=l&&(i[l]=!0)}for(var r=0;r<n.length;r++){var d=[].concat(n[r]);o&&i[d[0]]||(e&&(d[2]?d[2]="".concat(e," and ").concat(d[2]):d[2]=e),t.push(d))}},t}},637:function(n,t,e){n.exports=e.p+"c5283438113dd0a5f8477a5bc26c6949.png"},638:function(n,t,e){n.exports=e.p+"a16b7b56b0dc01a421721d0773ff4ee8.png"},639:function(n,t,e){n.exports=e.p+"58056be970b681bf61fdad6047852a1c.png"},640:function(n,t,e){n.exports=e.p+"cde202ea47da05e4cca8a781d850a3e1.png"},641:function(n,t,e){n.exports=e.p+"230fd218949ba6afc0b736e1f2c28bf7.png"},642:function(n,t,e){n.exports=e.p+"0a08f5d9f0c96f0e5d39a797cda2b886.png"},643:function(n,t,e){n.exports=e.p+"8bfa9c0dd4e8b71b50403c89029acd6d.png"},644:function(n,t,e){n.exports=e.p+"27005f49e2c40414e2f2644822284d94.png"},645:function(n,t,e){"use strict";var o=e(458),i=e.n(o)()((function(n){return n[1]}));i.push([n.i,"/* Extra small devices (phones, 600px and down) */\n\n@media (max-width: 600px) {\n    .load-containertop {\n        background-color: #00243a;\n        height: 30vh;\n        width: 100%;\n        display: flex;\n        margin-bottom: -2px;\n    }\n    .loadbackcolor {\n        background-color: #f1fdfd;\n    }\n    .loadrow1 {\n        position: relative;\n        display: block;\n        text-align: center;\n    }\n    .loadlogosmall {\n        z-index: 100;\n        height: 40%;\n        width: 40%;\n        left: 30%;\n        object-fit: contain;\n        display: inline-block;\n        position: absolute;\n        top: 42%;\n    }\n    .loadFunding {\n        position: relative;\n        width: 100%;\n        text-align: center;\n        font-weight: bold;\n        padding-top: 5%;\n        font-family: sans-serif;\n        font-size: 2.5vh;\n    }\n    .loadrow2 {\n        position: relative;\n        display: block;\n    }\n    .loadContent {\n        position: relative;\n        width: 100%;\n        text-align: center;\n        font-family: sans-serif;\n        font-weight: bold;\n        font-size: 2.5vh;\n    }\n    .loadsubrow {\n        position: relative;\n        display: block;\n        width: 100%;\n    }\n    .loadsubrowcolumn1 {\n        display: inline-block;\n        width: 48%;\n        text-align: center;\n    }\n    .loadsubrowcolumn2 {\n        display: inline-block;\n        width: 4%;\n        text-align: center;\n    }\n    .loadsubrowcolumn3 {\n        display: inline-block;\n        width: 48%;\n        text-align: center;\n        margin-bottom: 20px;\n    }\n    .loadrow3 {\n        position: relative;\n        display: block;\n    }\n    .loadDevelopment {\n        position: relative;\n        width: 100%;\n        text-align: center;\n        font-family: sans-serif;\n        font-weight: bold;\n        font-size: 2.5vh;\n    }\n    .loadrow4 {\n        position: relative;\n        display: block;\n    }\n    .loadbgmid {\n        width: 100%;\n    }\n    .loadmidlogo {\n        margin-top: 10px;\n        width: 55%;\n    }\n    .loadDULTlogo {\n        width: 40%;\n        object-fit: contain;\n        margin-top: 10px;\n    }\n    .loadBSFlogo {\n        width: 80%;\n    }\n    .loaddivideLine {\n        width: 10%;\n        height: 20%;\n    }\n    .loadSGlogo {\n        width: 60%;\n    }\n    .loadXarpieLabs {\n        width: 40%;\n        object-fit: contain;\n        margin-top: 10px;\n    }\n    .loadmediaCannibal {\n        width: 40%;\n        object-fit: contain;\n        margin-top: 10px;\n    }\n    .loadrow5 {\n        position: relative;\n        display: block;\n    }\n    .loadbgBelow {\n        width: 100%;\n        height: 15% !important;\n    }\n    .loadgameTxt {\n        position: absolute;\n        font-weight: bold;\n        font-family: 'system-ui';\n        font-size: 5vw;\n        top: -18%;\n        width: 100%;\n        text-align: center;\n    }\n    .loadMC {\n        width: 100%;\n        text-align: center;\n        position: absolute;\n        font-weight: bold;\n        font-family: 'system-ui';\n        font-size: 5vw;\n        color: brown;\n        top: 0%;\n    }\n}\n\n\n/* Small devices (portrait tablets and large phones, 600px and up) */\n\n@media (min-width: 600px) and (max-width:767px) {\n    .load-containertop {\n        background-color: #00243a;\n        height: 30vh;\n        width: 100%;\n        display: flex;\n        margin-bottom: -2px;\n    }\n    .loadbackcolor {\n        background-color: #f1fdfd;\n    }\n    .loadrow1 {\n        position: relative;\n        display: block;\n        text-align: center;\n    }\n    .loadlogosmall {\n        z-index: 100;\n        height: 40%;\n        width: 40%;\n        left: 30%;\n        object-fit: contain;\n        display: inline-block;\n        position: absolute;\n        top: 42%;\n    }\n    .loadFunding {\n        position: relative;\n        width: 100%;\n        text-align: center;\n        font-weight: bold;\n        padding-top: 5%;\n        font-family: sans-serif;\n        font-size: 2.5vh;\n    }\n    .loadrow2 {\n        position: relative;\n        display: block;\n    }\n    .loadContent {\n        position: relative;\n        width: 100%;\n        text-align: center;\n        font-family: sans-serif;\n        font-weight: bold;\n        font-size: 2.5vh;\n    }\n    .loadsubrow {\n        position: relative;\n        display: block;\n        width: 100%;\n    }\n    .loadsubrowcolumn1 {\n        display: inline-block;\n        width: 48%;\n        text-align: center;\n    }\n    .loadsubrowcolumn2 {\n        display: inline-block;\n        width: 4%;\n        text-align: center;\n    }\n    .loadsubrowcolumn3 {\n        display: inline-block;\n        width: 48%;\n        text-align: center;\n        margin-bottom: 20px;\n    }\n    .loadrow3 {\n        position: relative;\n        display: block;\n    }\n    .loadDevelopment {\n        position: relative;\n        width: 100%;\n        text-align: center;\n        font-family: sans-serif;\n        font-weight: bold;\n        font-size: 2.5vh;\n    }\n    .loadrow4 {\n        position: relative;\n        display: block;\n    }\n    .loadbgmid {\n        width: 100%;\n    }\n    .loadmidlogo {\n        margin-top: 10px;\n        width: 55%;\n    }\n    .loadDULTlogo {\n        width: 40%;\n        object-fit: contain;\n        margin-top: 10px;\n    }\n    .loadBSFlogo {\n        width: 80%;\n    }\n    .loaddivideLine {\n        width: 10%;\n        height: 20%;\n    }\n    .loadSGlogo {\n        width: 60%;\n    }\n    .loadXarpieLabs {\n        width: 40%;\n        object-fit: contain;\n        margin-top: 10px;\n    }\n    .loadmediaCannibal {\n        width: 40%;\n        object-fit: contain;\n        margin-top: 10px;\n    }\n    .loadrow5 {\n        position: relative;\n        display: block;\n    }\n    .loadbgBelow {\n        width: 100%;\n        height: 15% !important;\n    }\n    .loadgameTxt {\n        position: absolute;\n        font-weight: bold;\n        font-family: 'system-ui';\n        font-size: 5vw;\n        top: -18%;\n        width: 100%;\n        text-align: center;\n    }\n    .loadMC {\n        width: 100%;\n        text-align: center;\n        position: absolute;\n        font-weight: bold;\n        font-family: 'system-ui';\n        font-size: 5vw;\n        color: brown;\n        top: 0%;\n    }\n}\n\n\n/* Medium devices (landscape tablets, 1024px and up) */\n\n@media (min-width: 768px) and (max-width:1024px) {\n    .load-containertop {\n        background-color: #00243a;\n        height: 30vh;\n        width: 100%;\n        display: flex;\n        margin-bottom: -2px;\n    }\n    .loadbackcolor {\n        background-color: #f1fdfd;\n    }\n    .loadrow1 {\n        position: relative;\n        display: block;\n        text-align: center;\n    }\n    .loadlogosmall {\n        z-index: 100;\n        height: 40%;\n        width: 40%;\n        left: 30%;\n        object-fit: contain;\n        display: inline-block;\n        position: absolute;\n        top: 42%;\n    }\n    .loadFunding {\n        position: relative;\n        width: 100%;\n        text-align: center;\n        font-weight: bold;\n        padding-top: 5%;\n        font-family: sans-serif;\n        font-size: 2.5vh;\n    }\n    .loadrow2 {\n        position: relative;\n        display: block;\n    }\n    .loadContent {\n        position: relative;\n        width: 100%;\n        text-align: center;\n        font-family: sans-serif;\n        font-weight: bold;\n        font-size: 2.5vh;\n    }\n    .loadsubrow {\n        position: relative;\n        display: block;\n        width: 100%;\n    }\n    .loadsubrowcolumn1 {\n        display: inline-block;\n        width: 48%;\n        text-align: center;\n    }\n    .loadsubrowcolumn2 {\n        display: inline-block;\n        width: 4%;\n        text-align: center;\n    }\n    .loadsubrowcolumn3 {\n        display: inline-block;\n        width: 48%;\n        text-align: center;\n        margin-bottom: 20px;\n    }\n    .loadrow3 {\n        position: relative;\n        display: block;\n    }\n    .loadDevelopment {\n        position: relative;\n        width: 100%;\n        text-align: center;\n        font-family: sans-serif;\n        font-weight: bold;\n        font-size: 2.5vh;\n    }\n    .loadrow4 {\n        position: relative;\n        display: block;\n    }\n    .loadbgmid {\n        width: 100%;\n    }\n    .loadmidlogo {\n        margin-top: 10px;\n        width: 55%;\n    }\n    .loadDULTlogo {\n        width: 40%;\n        object-fit: contain;\n        margin-top: 10px;\n    }\n    .loadBSFlogo {\n        width: 80%;\n    }\n    .loaddivideLine {\n        width: 10%;\n        height: 20%;\n    }\n    .loadSGlogo {\n        width: 60%;\n    }\n    .loadXarpieLabs {\n        width: 40%;\n        object-fit: contain;\n        margin-top: 10px;\n    }\n    .loadmediaCannibal {\n        width: 40%;\n        object-fit: contain;\n        margin-top: 10px;\n    }\n    .loadrow5 {\n        position: relative;\n        display: block;\n    }\n    .loadbgBelow {\n        width: 100%;\n        height: 15% !important;\n    }\n    .loadgameTxt {\n        position: absolute;\n        font-weight: bold;\n        font-family: 'system-ui';\n        font-size: 5vw;\n        top: -18%;\n        width: 100%;\n        text-align: center;\n    }\n    .loadMC {\n        width: 100%;\n        text-align: center;\n        position: absolute;\n        font-weight: bold;\n        font-family: 'system-ui';\n        font-size: 5vw;\n        color: brown;\n        top: 0%;\n    }\n}\n\n\n/* Extra large devices (large laptops and desktops, 1024px and up)- */\n\n@media (min-width: 1024px) {\n    .load-containertop {\n        background-color: #00243a;\n        height: 30vh;\n        width: 100%;\n        display: flex;\n        margin-bottom: -2px;\n    }\n    .loadbackcolor {\n        background-color: #f1fdfd;\n    }\n    .loadrow1 {\n        position: relative;\n        display: block;\n        text-align: center;\n    }\n    .loadlogosmall {\n        z-index: 100;\n        height: 40%;\n        width: 40%;\n        left: 30%;\n        object-fit: contain;\n        display: inline-block;\n        position: absolute;\n        top: 42%;\n    }\n    .loadFunding {\n        position: relative;\n        width: 100%;\n        text-align: center;\n        font-weight: bold;\n        padding-top: 5%;\n        font-family: sans-serif;\n        font-size: 2.5vh;\n    }\n    .loadrow2 {\n        position: relative;\n        display: block;\n    }\n    .loadContent {\n        position: relative;\n        width: 100%;\n        text-align: center;\n        font-family: sans-serif;\n        font-weight: bold;\n        font-size: 2.5vh;\n    }\n    .loadsubrow {\n        position: relative;\n        display: block;\n        width: 100%;\n    }\n    .loadsubrowcolumn1 {\n        display: inline-block;\n        width: 48%;\n        text-align: center;\n    }\n    .loadsubrowcolumn2 {\n        display: inline-block;\n        width: 4%;\n        text-align: center;\n    }\n    .loadsubrowcolumn3 {\n        display: inline-block;\n        width: 48%;\n        text-align: center;\n        margin-bottom: 20px;\n    }\n    .loadrow3 {\n        position: relative;\n        display: block;\n    }\n    .loadDevelopment {\n        position: relative;\n        width: 100%;\n        text-align: center;\n        font-family: sans-serif;\n        font-weight: bold;\n        font-size: 2.5vh;\n    }\n    .loadrow4 {\n        position: relative;\n        display: block;\n    }\n    .loadbgmid {\n        width: 100%;\n    }\n    .loadmidlogo {\n        margin-top: 10px;\n        width: 55%;\n    }\n    .loadDULTlogo {\n        width: 40%;\n        object-fit: contain;\n        margin-top: 10px;\n    }\n    .loadBSFlogo {\n        width: 80%;\n    }\n    .loaddivideLine {\n        width: 10%;\n        height: 20%;\n    }\n    .loadSGlogo {\n        width: 60%;\n    }\n    .loadXarpieLabs {\n        width: 40%;\n        object-fit: contain;\n        margin-top: 10px;\n    }\n    .loadmediaCannibal {\n        width: 40%;\n        object-fit: contain;\n        margin-top: 10px;\n    }\n    .loadrow5 {\n        position: relative;\n        display: block;\n    }\n    .loadbgBelow {\n        width: 100%;\n        height: 15% !important;\n    }\n    .loadgameTxt {\n        position: absolute;\n        font-weight: bold;\n        font-family: 'system-ui';\n        font-size: 5vw;\n        top: -18%;\n        width: 100%;\n        text-align: center;\n    }\n    .loadMC {\n        width: 100%;\n        text-align: center;\n        position: absolute;\n        font-weight: bold;\n        font-family: 'system-ui';\n        font-size: 5vw;\n        color: brown;\n        top: 0%;\n    }\n}",""]),t.a=i},825:function(n,t,e){"use strict";e.r(t);var o=e(0),i=e.n(o),a=e(465),l=e(637),r=e(638),d=e(639),s=e(640),c=e(641),p=e(642),m=e(643),f=e(644),u=e(457),b=e.n(u),h=e(645),g={insert:"head",singleton:!1},w=(b()(h.a,g),h.a.locals,e(14)),v=e(466),y=e(469);function x(n,t){return function(n){if(Array.isArray(n))return n}(n)||function(n,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(n)))return;var e=[],o=!0,i=!1,a=void 0;try{for(var l,r=n[Symbol.iterator]();!(o=(l=r.next()).done)&&(e.push(l.value),!t||e.length!==t);o=!0);}catch(n){i=!0,a=n}finally{try{o||null==r.return||r.return()}finally{if(i)throw a}}return e}(n,t)||function(n,t){if(!n)return;if("string"==typeof n)return k(n,t);var e=Object.prototype.toString.call(n).slice(8,-1);"Object"===e&&n.constructor&&(e=n.constructor.name);if("Map"===e||"Set"===e)return Array.from(n);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return k(n,t)}(n,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function k(n,t){(null==t||t>n.length)&&(t=n.length);for(var e=0,o=new Array(t);e<t;e++)o[e]=n[e];return o}t.default=function(){var n=Object(w.g)(),t=x(Object(o.useState)(!0),2),e=t[0],u=t[1];return Object(o.useEffect)((function(){u(!1),setTimeout((function(){Object(y.a)(),null===localStorage.getItem("isFirsttime")?n.replace("/StartScreen"):n.replace("/TaskListScreen")}),5e3)}),[]),i.a.createElement(i.a.Fragment,null,e?i.a.createElement("div",{style:{width:"100vw",height:"100vh",position:"absolute",top:"0",zIndex:10,backgroundColor:"#00243a"}},i.a.createElement(v.a,null)):null,i.a.createElement("div",{onClick:function(){Object(y.a)(),null===localStorage.getItem("isFirsttime")?n.replace("/StartScreen"):n.replace("/TaskListScreen")}},i.a.createElement("div",{className:"loadrow1"},i.a.createElement("div",{className:"load-containertop"}),i.a.createElement("img",{className:"loadlogosmall",src:a})),i.a.createElement("div",{className:"loadbackcolor"},i.a.createElement("div",{className:"loadFunding"},i.a.createElement("u",null,"FUNDING")),i.a.createElement("div",{className:"loadrow2"},i.a.createElement("div",{className:"loadsubrowcolumn1"},i.a.createElement("img",{className:"loadmidlogo",src:l})),i.a.createElement("div",{className:"loadsubrowcolumn2"},i.a.createElement("img",{className:"loaddivideLine",src:s})),i.a.createElement("div",{className:"loadsubrowcolumn3"},i.a.createElement("img",{className:"loadDULTlogo",src:r}))),i.a.createElement("div",{className:"loadContent"},i.a.createElement("u",null,"CONTENT")),i.a.createElement("div",{className:"loadrow3"},i.a.createElement("div",{className:"loadsubrowcolumn1"},i.a.createElement("img",{className:"loadBSFlogo",src:d})),i.a.createElement("div",{className:"loadsubrowcolumn2"},i.a.createElement("img",{className:"loaddivideLine",src:s})),i.a.createElement("div",{className:"loadsubrowcolumn3"},i.a.createElement("img",{className:"loadSGlogo",src:c}))),i.a.createElement("div",{className:"loadDevelopment"},i.a.createElement("u",null,"GAME APP DEVELOPMENT")),i.a.createElement("div",{className:"loadrow4"},i.a.createElement("div",{className:"loadsubrowcolumn1"},i.a.createElement("img",{className:"loadXarpieLabs",src:m})),i.a.createElement("div",{className:"loadsubrowcolumn2"},i.a.createElement("img",{className:"loaddivideLine",src:s})),i.a.createElement("div",{className:"loadsubrowcolumn3"},i.a.createElement("img",{className:"loadmediaCannibal",src:f}))),i.a.createElement("div",{className:"loadrow5"},i.a.createElement("img",{className:"loadbgBelow",src:p})))))}}}]);