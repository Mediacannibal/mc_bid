(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{465:function(n,e,t){n.exports=t.p+"529f2f9cbed9cc2fe9621242cd21c7d4.png"},472:function(n,e,t){n.exports=t.p+"486855111f7240cd5da98b5a63113571.jpg"},478:function(n,e,t){"use strict";var a=t(0),i=t.n(a),r=t(455),c=t.n(r),s=t(600),o={insert:"head",singleton:!1},l=(c()(s.a,o),s.a.locals,t(601)),m=t(500),h=t(499),d=t(465),g=t(602),f=t(603),p=t(764),x=t(765),u=t(766),w=t(767),b=t(768),v=t(769),_=t(472);function E(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(n)))return;var t=[],a=!0,i=!1,r=void 0;try{for(var c,s=n[Symbol.iterator]();!(a=(c=s.next()).done)&&(t.push(c.value),!e||t.length!==e);a=!0);}catch(n){i=!0,r=n}finally{try{a||null==s.return||s.return()}finally{if(i)throw r}}return t}(n,e)||function(n,e){if(!n)return;if("string"==typeof n)return N(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);"Object"===t&&n.constructor&&(t=n.constructor.name);if("Map"===t||"Set"===t)return Array.from(n);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return N(n,e)}(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function N(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,a=new Array(e);t<e;t++)a[t]=n[t];return a}e.a=function(){var n=E(Object(a.useState)(!1),2),e=n[0],t=n[1],r=E(Object(a.useState)(!1),2),c=r[0],s=r[1];return i.a.createElement(i.a.Fragment,null,e?i.a.createElement("div",{className:"share_popupfullscreen"},i.a.createElement("img",{className:"share_popupfullscreen",src:_}),i.a.createElement("div",{className:"share_logoposition_share"},i.a.createElement("img",{className:"share_logoicon_share",src:d})),c?i.a.createElement("div",{className:"share_mainwindow"},i.a.createElement("div",{className:"share_container"},i.a.createElement("div",{className:"share_TextTitle"},"SHARE")),i.a.createElement("div",{className:"share_fb"},i.a.createElement("div",{className:"fb1"},i.a.createElement(p.a,{url:"https://mediacannibal.github.io/eco-cs/#/"},i.a.createElement(x.a,{size:46,round:!0}))),i.a.createElement("div",{className:"fb2main"},i.a.createElement("div",{className:"fb2"},i.a.createElement(u.a,{className:"fbicon",url:"https://mediacannibal.github.io/eco-cs/#/"},i.a.createElement(w.a,{size:46,round:!0}))),i.a.createElement("div",{className:"fb2"},i.a.createElement(b.a,{className:"fbicon",url:"https://mediacannibal.github.io/eco-cs/#/"},i.a.createElement(v.a,{size:46,round:!0})))),i.a.createElement("div",{className:"fb3"},i.a.createElement("img",{onClick:function(){window.confirm("The text has been copied to clipboard whould you like to continue with instagram")&&(window.location.href="https://www.instagram.com/?hl=en",navigator.clipboard.writeText("https://mediacannibal.github.io/eco-cs/#/"))},className:"instaicon",src:f}))),i.a.createElement("div",{className:"share_container"},i.a.createElement("div",{className:"share_TextTitle"},"Enjoyed the game?"),i.a.createElement("div",{className:"share_TextTitle2"},"Let others know!"))):i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"share_listitem"},i.a.createElement("div",{className:"share_maingm1u"},i.a.createElement("img",{className:"share_gm1u",src:h}),i.a.createElement("img",{className:"share_tick1",src:m}))),i.a.createElement("div",{className:"share_listitem"},i.a.createElement("div",{className:"share_maingm1u"},i.a.createElement("img",{className:"share_gm1u",src:h}),i.a.createElement("img",{className:"share_tick1",src:m}))))):null,i.a.createElement("div",{className:"share_icons"},i.a.createElement("div",{className:"share_iconset",onClick:function(){t(!e||!c),s(!0)}},i.a.createElement("div",{className:"share_setimg"},i.a.createElement("img",{className:"share_icon",src:l})),i.a.createElement("div",{className:"share_iconText"},"SHARE")),i.a.createElement("div",{className:"share_iconset",onClick:function(){t(!(e&&!c)),s(!1)}},i.a.createElement("div",{className:"share_setimg"},i.a.createElement("img",{className:"share_icon",src:g})),i.a.createElement("div",{className:"share_iconText"},"SETTINGS"))))}},499:function(n,e,t){n.exports=t.p+"1573539b45374d066e5cebe36929ab79.png"},500:function(n,e,t){n.exports=t.p+"421fa2dada8602457090380595082ef2.png"},600:function(n,e,t){"use strict";var a=t(456),i=t.n(a)()((function(n){return n[1]}));i.push([n.i,".share_popupfullscreen {\n    width: 100%;\n    height: 100vh;\n    position: absolute;\n    top: 0;\n    left: 0;\n    z-index: 100;\n}\n\n.share_logoposition_share {\n    z-index: 120;\n    display: inline-flex;\n    width: 40%;\n}\n\n.share_logoicon_share {\n    z-index: 120;\n    width: 22vw;\n    height: 22vh;\n    object-fit: contain;\n    margin-top: 15%;\n    margin-left: 25%;\n}\n\n.share_mainwindow {\n    text-align: center;\n}\n\n.share_container {\n    z-index: 120;\n    font-family: 'Trebuchet MS', sans-serif;\n    font-size: 5.2vw;\n    font-weight: bold;\n    position: relative;\n    text-align: center;\n    margin-top: 5%;\n}\n\n.share_TextTitle {\n    z-index: 120;\n    display: block;\n    color: #01003c;\n    font-size: 3vh;\n    text-align: center;\n    font-weight: bold;\n}\n\n.share_TextTitle2 {\n    z-index: 120;\n    display: block;\n    color: #01003c;\n    font-size: 3vh;\n    text-align: center;\n    font-weight: bold;\n    margin-top: 10%;\n}\n\n.share_listitem {\n    z-index: 120;\n    display: block;\n}\n\n.share_maingm1u {\n    z-index: 120;\n    position: relative;\n}\n\n.share_gm1u {\n    z-index: 120;\n    width: 70%;\n    margin-top: 5%;\n}\n\n.share_tick1 {\n    z-index: 120;\n    width: 8%;\n    object-fit: contain;\n    position: absolute;\n    top: 18%;\n    right: 26%;\n}\n\n.share_icon {\n    text-align: center;\n    object-fit: contain;\n    width: 4vw;\n    height: 4vh;\n}\n\n.share_iconset {\n    text-align: center;\n    margin: 5px;\n}\n\n.share_iconText {\n    color: white;\n    font-size: 2.5vw;\n    text-align: center;\n}\n\n.share_fb {\n    padding: 6px;\n    position: relative;\n    z-index: 120;\n    margin-top: 15%;\n}\n\n.fb2main {\n    width: 100%;\n}\n\n.fb2 {\n    display: inline-block;\n    width: 35%;\n}\n\n.fbicon {\n    margin-left: 10%;\n    margin-top: 6%;\n}\n\n.instaicon {\n    width: 10vw;\n    height: 10vh;\n    object-fit: contain;\n}\n\n.share_TextTitle {\n    z-index: 120;\n    display: block;\n    color: #01003c;\n    font-size: 3vh;\n    text-align: center;\n    font-weight: bold;\n    text-decoration-line: underline;\n    text-decoration-color: #f7941d;\n    text-decoration-thickness: 4px;\n}\n\n.share_container {\n    z-index: 120;\n    font-family: 'Trebuchet MS', sans-serif;\n    font-size: 5.2vw;\n    font-weight: bold;\n    position: relative;\n    text-align: center;\n    margin-top: 5%;\n}\n\n.share_icons {\n    display: inline-flex;\n    float: right;\n    width: 30%;\n    padding-top: 5vh;\n    padding-left: 5%;\n    z-index: 130;\n    position: absolute;\n}\n\n/* \n@media(min-width:351px) {\n    .taskicons {\n        display: inline-flex;\n        float: right;\n        width: 20%;\n        margin-top: -20%;\n        margin-right: 10%;\n    }\n    .taskicon {\n        text-align: center;\n        object-fit: contain;\n        width: 4vw;\n        height: 4vh;\n    }\n    .taskiconset {\n        text-align: center;\n        margin: 5px;\n    }\n    .taskiconText {\n        color: white;\n        font-size: 2.5vw;\n        text-align: center;\n    }\n}\n\n@media(min-width:500px) {\n    .taskicons {\n        display: inline-flex;\n        float: right;\n        width: 20%;\n        margin-top: -15%;\n        margin-right: 5%;\n    }\n    .taskicon {\n        text-align: center;\n        object-fit: contain;\n        width: 4vw;\n        height: 4vh;\n    }\n    .taskiconset {\n        text-align: center;\n        margin: 5px;\n    }\n    .taskiconText {\n        color: white;\n        font-size: 2.5vw;\n        text-align: center;\n    }\n}\n\n@media(min-width:660px) {\n    .taskicons {\n        display: inline-flex;\n        float: right;\n        width: 20%;\n        margin-top: -10%;\n        margin-right: 0%;\n    }\n    .taskicon {\n        text-align: center;\n        object-fit: contain;\n        width: 4vw;\n        height: 4vh;\n    }\n    .taskiconset {\n        text-align: center;\n        margin: 5px;\n    }\n    .taskiconText {\n        color: white;\n        font-size: 2vw;\n        text-align: center;\n    }\n}\n\n@media(min-width:800px) {\n    .taskicons {\n        display: inline-flex;\n        float: right;\n        width: 20%;\n        margin-top: -10%;\n        margin-right: -5%;\n    }\n    .taskicon {\n        text-align: center;\n        object-fit: contain;\n        width: 4vw;\n        height: 4vh;\n    }\n    .taskiconset {\n        text-align: center;\n        margin: 5px;\n    }\n    .taskiconText {\n        color: white;\n        font-size: 1.5vw;\n        text-align: center;\n    }\n}\n\n@media(min-width:1024px) {\n    .taskicons {\n        display: inline-flex;\n        float: right;\n        width: 20%;\n        margin-top: -5%;\n        margin-right: -5%;\n    }\n    .taskicon {\n        text-align: center;\n        object-fit: contain;\n        width: 4vw;\n        height: 4vh;\n    }\n    .taskiconset {\n        text-align: center;\n        margin: 10px;\n    }\n    .taskiconText {\n        color: white;\n        font-size: 1vw;\n        text-align: center;\n    }\n} */",""]),e.a=i},601:function(n,e,t){n.exports=t.p+"1bf2872b69850617dc2fa66534a5ba7d.png"},602:function(n,e,t){n.exports=t.p+"d9ebc6e9a68f37640c0f75274ca41f1f.png"},603:function(n,e,t){n.exports=t.p+"8290266a5fb402a34b96f890bbdb2d60.png"}}]);