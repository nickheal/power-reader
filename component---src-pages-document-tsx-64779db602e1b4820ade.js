(self.webpackChunkpower_reader=self.webpackChunkpower_reader||[]).push([[849],{8926:function(n){function e(n,e,t,r,i,a,o){try{var u=n[a](o),f=u.value}catch(c){return void t(c)}u.done?e(f):Promise.resolve(f).then(r,i)}n.exports=function(n){return function(){var t=this,r=arguments;return new Promise((function(i,a){var o=n.apply(t,r);function u(n){e(o,i,a,u,f,"next",n)}function f(n){e(o,i,a,u,f,"throw",n)}u(void 0)}))}},n.exports.__esModule=!0,n.exports.default=n.exports},5584:function(n,e,t){"use strict";var r=t(7757),i=t(8926);e.J=void 0;e.J=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if("undefined"==typeof window)return{persistAtom:function(){}};var e=n.key,t=void 0===e?"recoil-persist":e,a=n.storage,o=void 0===a?localStorage:a,u=function(n){var e=n.onSet,t=n.node,a=n.trigger,o=n.setSelf;if("get"===a){var u=c();"function"==typeof u.then&&u.then((function(n){n.hasOwnProperty(t.key)&&o(n[t.key])})),u.hasOwnProperty(t.key)&&o(u[t.key])}e(function(){var n=i(r.mark((function n(e,i,a){var o;return r.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:"function"==typeof(o=c()).then?o.then((function(n){return f(e,n,t.key,a)})):f(e,o,t.key,a);case 2:case"end":return n.stop()}}),n)})));return function(e,t,r){return n.apply(this,arguments)}}())},f=function(n,e,t,r){r?delete e[t]:e[t]=n,l(e)},c=function(){var n=o.getItem(t);return null==n?{}:"string"==typeof n?s(n):"function"==typeof n.then?n.then(s):{}},s=function(n){if(void 0===n)return{};try{return JSON.parse(n)}catch(e){return console.error(e),{}}},l=function(n){try{"function"==typeof o.mergeItem?o.mergeItem(t,JSON.stringify(n)):o.setItem(t,JSON.stringify(n))}catch(e){console.error(e)}};return{persistAtom:u}}},9789:function(n,e,t){"use strict";var r;t.d(e,{Z:function(){return l}});var i=new Uint8Array(16);function a(){if(!r&&!(r="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return r(i)}var o=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;for(var u=function(n){return"string"==typeof n&&o.test(n)},f=[],c=0;c<256;++c)f.push((c+256).toString(16).substr(1));var s=function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,t=(f[n[e+0]]+f[n[e+1]]+f[n[e+2]]+f[n[e+3]]+"-"+f[n[e+4]]+f[n[e+5]]+"-"+f[n[e+6]]+f[n[e+7]]+"-"+f[n[e+8]]+f[n[e+9]]+"-"+f[n[e+10]]+f[n[e+11]]+f[n[e+12]]+f[n[e+13]]+f[n[e+14]]+f[n[e+15]]).toLowerCase();if(!u(t))throw TypeError("Stringified UUID is invalid");return t};var l=function(n,e,t){var r=(n=n||{}).random||(n.rng||a)();if(r[6]=15&r[6]|64,r[8]=63&r[8]|128,e){t=t||0;for(var i=0;i<16;++i)e[t+i]=r[i];return e}return s(r)}},3970:function(n,e,t){"use strict";t.d(e,{Z:function(){return a}});var r=t(7294),i=t(8878);function a(n){var e=(0,i.y)(Object.assign({},n));return r.createElement("button",Object.assign({},n,{className:e.button+" "+n.className}))}},1796:function(n,e,t){"use strict";t.d(e,{Z:function(){return l}});var r=t(3366),i=t(5861),a=t(2982),o=t(7757),u=t.n(o),f=t(7294),c=t(3441),s=["initialState"];function l(n){void 0===n&&(n={});var e=n.initialState?Object.keys(n.initialState).map((function(e){return{id:e,value:n.initialState[e]}})):[],t=(0,f.useState)(e),o=t[0],l=t[1];function d(){return(d=(0,i.Z)(u().mark((function e(t){var r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),!n.onSubmit){e.next=6;break}return r=o.reduce((function(n,e){return n[e.id]=e.value,n}),{}),e.next=5,n.onSubmit(r);case 5:l([]);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var m=n,v=(m.initialState,(0,r.Z)(m,s));return f.createElement(c.s.Provider,{value:function(n,e){var t=o.find((function(e){return e.id===n}));t?t.value=e:o.push({id:n,value:e}),l((0,a.Z)(o))}},f.createElement(c.L.Provider,{value:o},f.createElement("form",Object.assign({},v,{onSubmit:function(n){return d.apply(this,arguments)}}))))}},8368:function(n,e,t){"use strict";t.d(e,{V:function(){return r},Z:function(){return u}});var r,i=t(7294),a=t(1819);!function(n){n.H1="h1",n.H2="h2",n.H3="h3",n.H4="h4",n.H5="h5",n.H6="h6",n.P="p"}(r||(r={}));var o=(0,a.QM)({heading:{color:"#ffffff",fontSize:48,margin:[48,0]}});function u(n){var e=o(),t=(null==n?void 0:n.tag)||r.P;return i.createElement(t,Object.assign({},n,{className:e.heading}))}},9019:function(n,e,t){"use strict";t.d(e,{Z:function(){return u}});var r=t(7294),i=t(1819),a=t(3441),o=(0,i.QM)({label:{color:"#ffffff",display:"block",margin:[0,0,8]},input:{background:0,border:{color:"#ffffff33",width:[0,0,2,0]},color:"#ffffff",display:"block",fontSize:16,margin:[0,0,32],padding:4,transition:"border-color 150ms ease-in-out","&:hover":{border:{color:"#ffffff77"}},"&:active, &:focus":{border:{color:"#ffffffaa"},outline:"none"}}});function u(n){var e,t=o(),i=(0,r.useContext)(a.L),u=(0,r.useContext)(a.s);if(!n.name)throw new Error("Name is required for an input");var f=(null===(e=i.find((function(e){return e.id===n.name})))||void 0===e?void 0:e.value)||"";return r.createElement(r.Fragment,null,r.createElement("label",{className:t.label,htmlFor:n.name},n.label,":"),r.createElement("input",Object.assign({},n,{className:t.input+" "+n.className,value:f,onInput:function(e){return u(n.name,e.currentTarget.value)}})))}},3081:function(n,e,t){"use strict";t.d(e,{Z:function(){return f}});var r=t(3366),i=t(7294),a=t(1597),o=t(8878),u=["variant"];function f(n){var e=(0,o.y)(Object.assign({},n)),t=(n.variant,(0,r.Z)(n,u));return i.createElement(a.Link,Object.assign({},t,{className:e.button+" "+n.className}))}},5256:function(n,e,t){"use strict";t.d(e,{Z:function(){return a}});var r=t(7294),i=(0,t(1819).QM)({main:{padding:[0,64]}});function a(n){var e=i();return r.createElement("main",Object.assign({},n,{className:e.main}))}},8878:function(n,e,t){"use strict";t.d(e,{$:function(){return r},y:function(){return a}});var r,i=t(1819);!function(n){n.Primary="primary",n.Secondary="secondary",n.Tertiary="tertiary"}(r||(r={}));var a=(0,i.QM)({button:{background:function(n){return n.variant===r.Primary?"linear-gradient(125deg, #3a52ffee, #33346dee)":"#ffffff22"},backdropFilter:"blur(2px)",border:0,borderRadius:4,boxShadow:"3px 3px 5px #00000011",color:function(n){return n.variant===r.Primary?"#ffffff":n.variant===r.Secondary?"#333333":n.variant===r.Tertiary?"#ffffff":void 0},cursor:"pointer",display:"inline-block",fontFamily:"Helvetica, Arial, sans-serif",fontSize:function(n){return n.variant===r.Tertiary?24:16},margin:0,marginRight:function(n){return n.variant===r.Tertiary?16:0},padding:[10,12],textDecoration:"none",transition:"box-shadow 300ms cubic-bezier(0.34, 1.56, 0.64, 1), transform 300ms cubic-bezier(0.34, 1.56, 0.64, 1)","&:hover, &:focus":{boxShadow:"3px 3px 7px #00000010",transform:"scale(1.01)"},"& > svg":{display:"block"}}})},3441:function(n,e,t){"use strict";t.d(e,{L:function(){return i},s:function(){return a}});var r=t(7294),i=(0,r.createContext)([]),a=(0,r.createContext)((function(){}))},8298:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return x}});var r=t(2982),i=t(7294),a=t(1597),o=t(8525),u=t(9789),f=t(1316),c=t(9980),s=t(3815),l=t(3970),d=t(8878),m=t(1796),v=t(8368),p=t(9019),b=t(3081),g=t(5256),y=t(1819),h=t(3441),w=(0,y.QM)({label:{color:"#ffffff",display:"block",margin:[0,0,8]},input:{backdropFilter:"blur(2px)",background:"#ffffff0a",border:{color:"#ffffff33",width:[0,0,2,0]},color:"#ffffff",display:"block",fontSize:16,fontFamily:"Helvetica, Arial, sans-serif",height:580,margin:[0,0,32],maxWidth:640,padding:8,resize:"none",transition:"border-color 150ms ease-in-out",width:"100%","&:hover":{border:{color:"#ffffff77"}},"&:active, &:focus":{border:{color:"#ffffffaa"},outline:"none"}}});function S(n){var e,t=w(),r=(0,i.useContext)(h.L),a=(0,i.useContext)(h.s);if(!n.name)throw new Error("Name is required for an input");var o=(null===(e=r.find((function(e){return e.id===n.name})))||void 0===e?void 0:e.value)||"";return i.createElement(i.Fragment,null,i.createElement("label",{className:t.label,htmlFor:n.name},n.label,":"),i.createElement("textarea",Object.assign({},n,{className:t.input+" "+n.className,value:o,onInput:function(e){return a(n.name,e.currentTarget.value)}})))}function x(){var n=(0,o.FV)(f.K),e=n[0],t=n[1],y=(0,s.Me)(e);return i.createElement(g.Z,null,i.createElement(m.Z,{initialState:y?{name:y.name,content:y.content}:null,onSubmit:function(n){var i={id:(null==y?void 0:y.id)||(0,u.Z)(),name:n.name,content:n.content,readerPosition:0};if(y){var o=(0,r.Z)(e.documents);o[o.indexOf(y)]=i,t(Object.assign({},e,{documents:o}))}else t(Object.assign({},e,{documents:[].concat((0,r.Z)(e.documents),[i])}));(0,a.navigate)(c.Z.Dashboard)}},i.createElement(v.Z,{tag:v.V.H1},y?"Edit document":"New document"),i.createElement(p.Z,{label:"Name",name:"name",required:!0}),i.createElement(S,{label:"Content",name:"content",type:"textarea",required:!0}),i.createElement(l.Z,{variant:d.$.Tertiary},y?"Save":"Create"),i.createElement(b.Z,{to:c.Z.Dashboard,variant:d.$.Tertiary},"Cancel")))}},1316:function(n,e,t){"use strict";t.d(e,{K:function(){return o},r:function(){return u}});var r=t(8525),i=t(9789),a=(0,t(5584).J)().persistAtom,o=(0,r.cn)({key:"user",default:null,effects_UNSTABLE:[a]});function u(n){var e=n.firstName;return{id:(0,i.Z)(),firstName:e,documents:[]}}},3815:function(n,e,t){"use strict";t.d(e,{DY:function(){return o},JQ:function(){return u},ML:function(){return i},Me:function(){return f}});var r=t(2982),i=60;function a(n,e){for(var t=e;t>=0;t--){var i=0===t;if(!n[t])return[n.trim()];if(i)return[n.substring(0,e).trim()].concat((0,r.Z)(a(n.substring(e),e)));if(" "===n[t])return[n.substring(0,t).trim()].concat((0,r.Z)(a(n.substring(t),e)))}return[]}function o(n,e){return void 0===e&&(e=60),a(n,e)}function u(n,e){for(var t=0,r=0;r<n.length;r++){if((t+=n[r].length+1)>=e){var i=t-(n[r].length+1),a=t-i,o=e-i;return{activeLines:[n[r-1]||" ",n[r],n[r+1]||" "],lineProgress:o/a*100}}}throw new Error("Couldn't find reading position in document")}function f(n){if("undefined"!=typeof window){var e=window.location.search,t=new URLSearchParams(e);return n.documents.find((function(n){return n.id===t.get("id")}))}return null}},9980:function(n,e,t){"use strict";var r;t.d(e,{Z:function(){return r}}),function(n){n.Introduction="/introduction",n.Setup="/setup",n.Dashboard="/",n.CreateDocument="/document",n.EditDocument="/document?id={id}",n.Reader="/reader?id={id}"}(r||(r={}))}}]);
//# sourceMappingURL=component---src-pages-document-tsx-64779db602e1b4820ade.js.map