(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{457:function(n,t,e){"use strict";var i,a=function(){return void 0===i&&(i=Boolean(window&&document&&document.all&&!window.atob)),i},o=function(){var n={};return function(t){if(void 0===n[t]){var e=document.querySelector(t);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}n[t]=e}return n[t]}}(),r=[];function s(n){for(var t=-1,e=0;e<r.length;e++)if(r[e].identifier===n){t=e;break}return t}function l(n,t){for(var e={},i=[],a=0;a<n.length;a++){var o=n[a],l=t.base?o[0]+t.base:o[0],c=e[l]||0,f="".concat(l," ").concat(c);e[l]=c+1;var d=s(f),u={css:o[1],media:o[2],sourceMap:o[3]};-1!==d?(r[d].references++,r[d].updater(u)):r.push({identifier:f,updater:m(u,t),references:1}),i.push(f)}return i}function c(n){var t=document.createElement("style"),i=n.attributes||{};if(void 0===i.nonce){var a=e.nc;a&&(i.nonce=a)}if(Object.keys(i).forEach((function(n){t.setAttribute(n,i[n])})),"function"==typeof n.insert)n.insert(t);else{var r=o(n.insert||"head");if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}return t}var f,d=(f=[],function(n,t){return f[n]=t,f.filter(Boolean).join("\n")});function u(n,t,e,i){var a=e?"":i.media?"@media ".concat(i.media," {").concat(i.css,"}"):i.css;if(n.styleSheet)n.styleSheet.cssText=d(t,a);else{var o=document.createTextNode(a),r=n.childNodes;r[t]&&n.removeChild(r[t]),r.length?n.insertBefore(o,r[t]):n.appendChild(o)}}function h(n,t,e){var i=e.css,a=e.media,o=e.sourceMap;if(a?n.setAttribute("media",a):n.removeAttribute("media"),o&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),n.styleSheet)n.styleSheet.cssText=i;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(i))}}var p=null,b=0;function m(n,t){var e,i,a;if(t.singleton){var o=b++;e=p||(p=c(t)),i=u.bind(null,e,o,!1),a=u.bind(null,e,o,!0)}else e=c(t),i=h.bind(null,e,t),a=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)};return i(n),function(t){if(t){if(t.css===n.css&&t.media===n.media&&t.sourceMap===n.sourceMap)return;i(n=t)}else a()}}n.exports=function(n,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=a());var e=l(n=n||[],t);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var i=0;i<e.length;i++){var a=s(e[i]);r[a].references--}for(var o=l(n,t),c=0;c<e.length;c++){var f=s(e[c]);0===r[f].references&&(r[f].updater(),r.splice(f,1))}e=o}}}},458:function(n,t,e){"use strict";n.exports=function(n){var t=[];return t.toString=function(){return this.map((function(t){var e=n(t);return t[2]?"@media ".concat(t[2]," {").concat(e,"}"):e})).join("")},t.i=function(n,e,i){"string"==typeof n&&(n=[[null,n,""]]);var a={};if(i)for(var o=0;o<this.length;o++){var r=this[o][0];null!=r&&(a[r]=!0)}for(var s=0;s<n.length;s++){var l=[].concat(n[s]);i&&a[l[0]]||(e&&(l[2]?l[2]="".concat(e," and ").concat(l[2]):l[2]=e),t.push(l))}},t}},468:function(n,t,e){"use strict";var i=e(458),a=e.n(i)()((function(n){return n[1]}));a.push([n.i,".loader {\n    border: 6px solid #f3f3f3;\n    border-radius: 50%;\n    border-top: 6px solid #3498db;\n    width: 30px;\n    height: 30px;\n    -webkit-animation: spin 2s linear infinite;\n    animation: spin 2s linear infinite;\n    z-index: 100;\n    position: absolute;\n    top: 48%;\n    left: 48%;\n}\n\n\n/* Safari */\n\n@-webkit-keyframes spin {\n    0% {\n        -webkit-transform: rotate(0deg);\n    }\n    100% {\n        -webkit-transform: rotate(360deg);\n    }\n}\n\n@keyframes spin {\n    0% {\n        transform: rotate(0deg);\n    }\n    100% {\n        transform: rotate(360deg);\n    }\n}",""]),t.a=a},472:function(n,t,e){"use strict";var i=e(0),a=e.n(i),o=e(457),r=e.n(o),s=e(468),l={insert:"head",singleton:!1};r()(s.a,l),s.a.locals,t.a=function(){return a.a.createElement("div",{className:"loader"})}},478:function(n,t,e){n.exports=e.p+"a874accaf0bd51c56793fee87b7aa60b.png"},695:function(n,t,e){"use strict";var i=e(458),a=e.n(i)()((function(n){return n[1]}));a.push([n.i,"/* Extra small devices (phones, 600px and down) */\n\nvideo {\n    height: 50vh;\n    width: 50vw;\n}\n\n.start_scannerpopup_main {\n    position: absolute;\n    background-color: black;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    opacity: 50%;\n}\n\n.start_scannerpopup {\n    z-index: 130;\n    position: absolute;\n    bottom: 10%;\n    height: 70%;\n    width: 88%;\n    margin-top: -12%;\n    text-align: center;\n    z-index: 100;\n    background-color: aliceblue;\n    margin: 20px;\n    opacity: 200% !important;\n}\n\n.start_scannercamera {\n    object-fit: contain;\n    position: absolute;\n    left: 15%;\n    top: 12%;\n    display: block;\n}\n\n.start_scannertext {\n    font-family: 'Trebuchet MS', sans-serif;\n    font-size: 5.2vw;\n    font-weight: bold;\n    margin-top: 70%;\n    display: block;\n}\n\n.start_closemain {\n    z-index: 200;\n    position: absolute;\n    top: 12%;\n    right: 4%;\n    background-color: white;\n    border-radius: 30px;\n}\n\n.start_close {\n    z-index: 200;\n    width: 4vw;\n    height: 4vw;\n    object-fit: fill;\n    margin: 5px;\n    vertical-align: text-top;\n}\n\n.startbackimg {\n    position: absolute;\n    top: 0;\n    z-index: -50;\n    height: 100%;\n    width: 100%;\n}\n\n.startvideoplayer {\n    width: 100%;\n    position: absolute;\n    top: 16%;\n    object-fit: fill;\n}\n\n.startscanner {\n    display: flex;\n}\n\n.startscannertext {\n    font-family: 'Trebuchet MS', sans-serif;\n    font-size: 5.2vw;\n    position: absolute;\n    left: 15%;\n    bottom: 8%;\n    font-weight: bold;\n    width: 70%;\n    text-align: center;\n    max-height: 30%;\n}\n\n.starttext1 {\n    margin: 2%;\n}\n\n.startscanneriocn {\n    width: 20%;\n    height: 16%;\n    object-fit: contain;\n    position: absolute;\n    left: 40%;\n    bottom: 30%;\n}\n\n.starttext {\n    font-family: 'Trebuchet MS', sans-serif;\n    font-size: 3.2vh;\n    position: absolute;\n    left: 15%;\n    bottom: 5%;\n    font-weight: bold;\n    width: 70%;\n    text-align: center;\n    max-height: 30%;\n}\n\n@media(min-width:375px) {\n    .startvideoplayer {\n        width: 60%;\n        right: 20%;\n        position: absolute;\n        top: 16%;\n        object-fit: fill;\n    }\n}\n\n@media(min-width:450px) {\n    .startbackimg {\n        position: absolute;\n        top: 0;\n        z-index: -50;\n        height: 100%;\n        width: 100%;\n    }\n    .startvideoplayer {\n        width: 60%;\n        right: 20%;\n        position: absolute;\n        top: 16%;\n        object-fit: fill;\n    }\n    .startscanner {\n        display: flex;\n    }\n    .startscannertext {\n        font-family: 'Trebuchet MS', sans-serif;\n        font-size: 5.2vw;\n        position: absolute;\n        left: 15%;\n        bottom: 8%;\n        font-weight: bold;\n        width: 70%;\n        text-align: center;\n        max-height: 30%;\n    }\n    .starttext1 {\n        margin: 2%;\n    }\n    .startscanneriocn {\n        width: 20%;\n        height: 16%;\n        object-fit: contain;\n        position: absolute;\n        left: 40%;\n        bottom: 30%;\n    }\n    .starttext {\n        font-family: 'Trebuchet MS', sans-serif;\n        font-size: 3.2vh;\n        position: absolute;\n        left: 15%;\n        bottom: 5%;\n        font-weight: bold;\n        width: 70%;\n        text-align: center;\n        max-height: 30%;\n    }\n}\n\n@media(min-width:530px) {\n    .startvideoplayer {\n        width: 50%;\n        right: 25%;\n        position: absolute;\n        top: 16%;\n        object-fit: fill;\n    }\n}\n\n@media (min-width: 600px) {\n    .startbackimg {\n        position: absolute;\n        top: 0;\n        z-index: -50;\n        height: 100%;\n        width: 100%;\n    }\n    .startvideoplayer {\n        width: 40%;\n        right: 30%;\n        position: absolute;\n        top: 16%;\n        object-fit: fill;\n        margin-left: 30%;\n    }\n    .startscannercamera {\n        object-fit: contain;\n        position: absolute;\n        left: 17%;\n        bottom: 27%;\n    }\n    .starttext {\n        font-family: 'Trebuchet MS', sans-serif;\n        font-size: 3.2vw;\n        position: absolute;\n        left: 15%;\n        bottom: 0%;\n        font-weight: bold;\n        width: 70%;\n        text-align: center;\n        max-height: 30%;\n    }\n    .starttext1 {\n        margin: 2%;\n    }\n    .startscanneriocn {\n        width: 20%;\n        height: 16%;\n        object-fit: contain;\n        position: absolute;\n        left: 40%;\n        bottom: 30%;\n    }\n    .start_scannerpopup {\n        z-index: 130;\n        position: absolute;\n        bottom: 0%;\n        height: 85%;\n        width: 60%;\n        text-align: center;\n        z-index: 100;\n        background-color: aliceblue;\n        margin: 10px;\n        opacity: 200% !important;\n        right: 20%;\n    }\n    .start_scannercamera {\n        object-fit: contain;\n        position: absolute;\n        left: 15%;\n        top: 12%;\n        display: block;\n    }\n    .start_scannertext {\n        font-family: 'Trebuchet MS', sans-serif;\n        font-size: 3vw;\n        font-weight: bold;\n        margin-top: 80%;\n        display: block;\n    }\n    .start_closemain {\n        z-index: 200;\n        position: absolute;\n        top: 10%;\n        right: 20%;\n        background-color: white;\n        border-radius: 30px;\n    }\n    .start_close {\n        z-index: 200;\n        width: 2vw;\n        height: 2vw;\n        object-fit: fill;\n        margin: 5px;\n        vertical-align: text-top;\n    }\n}\n\n@media (min-width: 768px) {\n    .startbackimg {\n        position: absolute;\n        top: 0;\n        z-index: -50;\n        height: 100%;\n        width: 100%;\n    }\n    .startvideoplayer {\n        width: 40%;\n        right: 30%;\n        position: absolute;\n        top: 16%;\n        object-fit: fill;\n        margin-left: 30%;\n    }\n    .startscannercamera {\n        object-fit: contain;\n        position: absolute;\n        width: 28%;\n        left: 40%;\n        right: 40%;\n        bottom: 28%;\n    }\n    .startscannertext {\n        font-family: 'Trebuchet MS', sans-serif;\n        font-size: 3vw;\n        position: absolute;\n        left: 15%;\n        bottom: 0%;\n        font-weight: bold;\n        width: 70%;\n        text-align: center;\n        max-height: 30%;\n    }\n    .starttext1 {\n        margin: 2%;\n    }\n    .startscanneriocn {\n        width: 20%;\n        height: 16%;\n        object-fit: contain;\n        position: absolute;\n        left: 40%;\n        bottom: 30%;\n    }\n    .starttext {\n        font-family: 'Trebuchet MS', sans-serif;\n        font-size: 3.2vw;\n        position: absolute;\n        left: 15%;\n        bottom: 0%;\n        font-weight: bold;\n        width: 70%;\n        text-align: center;\n        max-height: 30%;\n    }\n    .start_scannerpopup {\n        z-index: 130;\n        position: absolute;\n        bottom: 0%;\n        height: 85%;\n        width: 50%;\n        text-align: center;\n        z-index: 100;\n        background-color: aliceblue;\n        margin: 10px;\n        opacity: 200% !important;\n        right: 25%;\n    }\n    .start_scannercamera {\n        object-fit: contain;\n        position: absolute;\n        left: 15%;\n        top: 12%;\n        display: block;\n    }\n    .start_scannertext {\n        font-family: 'Trebuchet MS', sans-serif;\n        font-size: 2.5vw;\n        font-weight: bold;\n        margin-top: 80%;\n        display: block;\n    }\n    .start_closemain {\n        z-index: 200;\n        position: absolute;\n        top: 10%;\n        right: 25%;\n        background-color: white;\n        border-radius: 30px;\n    }\n    .start_close {\n        z-index: 200;\n        width: 2vw;\n        height: 2vw;\n        object-fit: fill;\n        margin: 5px;\n        vertical-align: text-top;\n    }\n}\n\n@media (min-width: 850px) {\n    .startvideoplayer {\n        width: 35%;\n        right: 32%;\n        position: absolute;\n        top: 16%;\n        object-fit: fill;\n        margin-left: 30%;\n    }\n    .starttext {\n        font-family: 'Trebuchet MS', sans-serif;\n        font-size: 2.2vw;\n        position: absolute;\n        left: 15%;\n        bottom: 0%;\n        font-weight: bold;\n        width: 70%;\n        text-align: center;\n        max-height: 30%;\n    }\n}\n\n@media (min-width: 1024px) {\n    .startbackimg {\n        position: absolute;\n        object-fit: fill;\n        z-index: -50;\n        width: 100%;\n        height: 100%;\n    }\n    .startvideoplayer {\n        width: 20%;\n        right: 40%;\n        position: absolute;\n        top: 20%;\n        object-fit: fill;\n        margin-left: 30%;\n    }\n    .starttext {\n        font-family: 'Trebuchet MS', sans-serif;\n        font-size: 1.5vw;\n        position: absolute;\n        left: 15%;\n        bottom: 0%;\n        font-weight: bold;\n        width: 70%;\n        text-align: center;\n        max-height: 30%;\n    }\n    .startscannercamera {\n        object-fit: contain;\n        position: absolute;\n        width: 18%;\n        left: 43%;\n        right: 40%;\n        bottom: 28%;\n    }\n    .startscannertext {\n        font-family: 'Trebuchet MS', sans-serif;\n        font-size: 2vw;\n        position: absolute;\n        left: 15%;\n        bottom: 2%;\n        font-weight: bold;\n        width: 70%;\n        text-align: center;\n        max-height: 30%;\n    }\n    .starttext1 {\n        margin: 2%;\n    }\n    .startscanneriocn {\n        width: 20%;\n        height: 16%;\n        object-fit: contain;\n        position: absolute;\n        left: 40%;\n        bottom: 30%;\n    }\n    .start_scannerpopup {\n        z-index: 130;\n        position: absolute;\n        bottom: 0%;\n        height: 85%;\n        width: 30%;\n        text-align: center;\n        z-index: 100;\n        background-color: aliceblue;\n        margin: 10px;\n        opacity: 200% !important;\n        right: 36%;\n    }\n    .start_scannercamera {\n        object-fit: contain;\n        position: absolute;\n        left: 15%;\n        top: 12%;\n        display: block;\n    }\n    .start_scannertext {\n        font-family: 'Trebuchet MS', sans-serif;\n        font-size: 2vw;\n        font-weight: bold;\n        margin-top: 80%;\n        display: block;\n    }\n    .start_closemain {\n        z-index: 200;\n        position: absolute;\n        top: 12%;\n        right: 36%;\n        background-color: white;\n        border-radius: 30px;\n    }\n    .start_close {\n        z-index: 200;\n        width: 1vw;\n        height: 1vw;\n        object-fit: fill;\n        margin: 5px;\n        vertical-align: text-top;\n    }\n}",""]),t.a=a},696:function(n,t,e){n.exports=e.p+"08e9495eb4472545820f9c935c6057d3.jpg"},697:function(n,t,e){n.exports=e.p+"69392b7b786e1cc2f4db80622f63076d.png"},827:function(n,t,e){"use strict";e.r(t);var i=e(0),a=e.n(i),o=e(457),r=e.n(o),s=e(695),l={insert:"head",singleton:!1},c=(r()(s.a,l),s.a.locals,e(696)),f=e(697),d=e(555),u=e(511),h=e(478),p=e(14),b=e(472),m=e(465);function g(n,t){return function(n){if(Array.isArray(n))return n}(n)||function(n,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(n)))return;var e=[],i=!0,a=!1,o=void 0;try{for(var r,s=n[Symbol.iterator]();!(i=(r=s.next()).done)&&(e.push(r.value),!t||e.length!==t);i=!0);}catch(n){a=!0,o=n}finally{try{i||null==s.return||s.return()}finally{if(a)throw o}}return e}(n,t)||function(n,t){if(!n)return;if("string"==typeof n)return w(n,t);var e=Object.prototype.toString.call(n).slice(8,-1);"Object"===e&&n.constructor&&(e=n.constructor.name);if("Map"===e||"Set"===e)return Array.from(n);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return w(n,t)}(n,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function w(n,t){(null==t||t>n.length)&&(t=n.length);for(var e=0,i=new Array(t);e<t;e++)i[e]=n[e];return i}t.default=function(){var n=g(Object(i.useState)(!1),2),t=n[0],e=n[1],o=g(Object(i.useState)(!0),2),r=o[0],s=o[1],l=Object(p.g)();Object(i.useEffect)((function(){Object(m.a)(),setTimeout((function(){null===localStorage.getItem("ShownIntroscreen")?(localStorage.setItem("ShownIntroscreen","true"),s(!1)):l.replace("/TaskListScreen")}),1e3)}),[]);var w={height:.35*window.innerHeight,width:"100%",playerVars:{autoplay:1}};return a.a.createElement(a.a.Fragment,null,a.a.createElement("div",null,a.a.createElement("span",null,a.a.createElement("img",{className:"startbackimg",src:c})),r?a.a.createElement("div",{style:{width:"100vw",height:"100vh",position:"absolute",top:"0",zIndex:10,backgroundColor:"aliceblue"}},a.a.createElement(b.a,null)):null,a.a.createElement("div",{className:"startvideoplayer"},a.a.createElement(d.a,{videoId:"_DS7biR9DtY",opts:w,onReady:function(n){n.target.pauseVideo()}})),a.a.createElement("div",null,a.a.createElement("img",{onClick:function(){e(!0)},className:"startscanneriocn",src:f})),a.a.createElement("div",{className:"starttext"},a.a.createElement("div",{className:"starttext1"},"- Scan the QR code"),a.a.createElement("div",{className:"starttext1"},"- Watch the 2 min Video"),a.a.createElement("div",{className:"starttext1"},"- Have fun with the quiz"),a.a.createElement("div",{className:"starttext1"},"- Excel at the activity"))),t?a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:"start_scannerpopup_main"}),a.a.createElement("div",{className:"start_scannerpopup"},a.a.createElement("div",{className:"start_scannercamera"},a.a.createElement(u.a,{facingMode:"rear",onScan:function(n){null!==n&&(console.log(n),window.location.href=n,function(n){var t=n.split("/"),e=t[1].substr(0,4),i=t[2];console.log(e,i);var a=JSON.parse(String(localStorage.getItem("EventStatusData"))),o=[];null!==a&&a.forEach((function(n){n.eventType===e&&n.Level===i?(console.log(n),n.Status="UNLOCKED",o.push(n),console.log(n)):o.push(n)})),localStorage.setItem("EventStatusData",JSON.stringify(o))}(n))},style:{height:"50%",width:"83%",Option:"rear"},onError:function(n){console.log(n)}})),a.a.createElement("div",{className:"start_scannertext"},a.a.createElement("div",null,"Scan the QR code."),a.a.createElement("div",null,"Unlock the Task/Clues."))),a.a.createElement("div",{onClick:function(){e(!1)},className:"start_closemain"},a.a.createElement("img",{className:"start_close",src:h}))):null)}}}]);