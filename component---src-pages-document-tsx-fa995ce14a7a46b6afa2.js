"use strict";(self.webpackChunkpower_reader=self.webpackChunkpower_reader||[]).push([[40],{4033:function(e,n,t){t.d(n,{A:function(){return a}});var r=t(6540),o=t(1195);function a(e){const n=(0,o.I)({...e});return r.createElement("button",Object.assign({},e,{className:`${n.button} ${e.className}`}))}},9479:function(e,n,t){t.d(n,{A:function(){return i}});var r=t(4506),o=t(6540),a=t(2593);function i(e){void 0===e&&(e={});const n=e.initialState?Object.keys(e.initialState).map((n=>({id:n,value:e.initialState[n]}))):[],{0:t,1:i}=(0,o.useState)(n);const{initialState:c,...u}=e;return o.createElement(a.j.Provider,{value:function(e,n){const o=t.find((n=>{let{id:t}=n;return t===e}));o?o.value=n:t.push({id:e,value:n}),i((0,r.A)(t))}},o.createElement(a.v.Provider,{value:t},o.createElement("form",Object.assign({},u,{onSubmit:async function(n){if(n.preventDefault(),e.onSubmit){const n=t.reduce(((e,n)=>(e[n.id]=n.value,e)),{});await e.onSubmit(n),i([])}}}))))}},8127:function(e,n,t){t.d(n,{A:function(){return c},v:function(){return a}});var r=t(6540),o=t(8057);let a=function(e){return e.H1="h1",e.H2="h2",e.H3="h3",e.H4="h4",e.H5="h5",e.H6="h6",e.P="p",e}({});const i=(0,o.MA)({heading:{color:"#ffffff",fontSize:48,margin:[48,0]}});function c(e){const n=i(),t=(null==e?void 0:e.tag)||a.P;return r.createElement(t,Object.assign({},e,{className:n.heading}))}},3893:function(e,n,t){t.d(n,{A:function(){return c},C:function(){return u}});var r=t(6540),o=t(8057),a=t(2593);const i=(0,o.MA)({label:{color:"#ffffff",display:"block",margin:[0,0,8]},input:{background:0,border:{color:"#ffffff33",width:[0,0,2,0]},color:"#ffffff",display:"block",fontSize:16,margin:[0,0,32],maxWidth:640,padding:4,transition:"border-color 150ms ease-in-out",width:"100%","&:hover":{border:{color:"#ffffff77"}},"&:active, &:focus":{border:{color:"#ffffffaa"},outline:"none"}}});function c(e){var n;const t=i(),o=(0,r.useContext)(a.v),c=(0,r.useContext)(a.j);if(!e.name)throw new Error("Name is required for an input");const u=(null===(n=o.find((n=>{let{id:t}=n;return t===e.name})))||void 0===n?void 0:n.value)||"";return r.createElement(r.Fragment,null,r.createElement("label",{className:t.label,htmlFor:e.name},e.label,":"),r.createElement("input",Object.assign({},e,{className:`${t.input} ${e.className}`,value:u,onInput:n=>c(e.name,n.currentTarget.value)})))}function u(e){const n=i();if(!e.name)throw new Error("Name is required for an input");return r.createElement(r.Fragment,null,r.createElement("label",{className:n.label,htmlFor:e.name},e.label,":"),r.createElement("input",Object.assign({},e,{className:`${n.input} ${e.className}`})))}},4017:function(e,n,t){t.d(n,{A:function(){return i}});var r=t(6540),o=t(4794),a=t(1195);function i(e){const n=(0,a.I)({...e}),{variant:t,...i}=e;return r.createElement(o.Link,Object.assign({},i,{className:`${n.button} ${e.className}`}),e.children)}},9178:function(e,n,t){t.d(n,{A:function(){return d}});var r=t(6540),o=t(4794),a=t(8057),i=t(1489),c=t(7848);const u=(0,a.MA)({footer:{display:"flex",justifyContent:"center",padding:16},link:{color:"#ffffff",margin:[0,16],opacity:.5,transition:"opacity 200ms ease-in-out","&:hover, &:focus":{opacity:1},"& > svg":{verticalAlign:"middle"}}});function f(e){const n=u({...e});return r.createElement("footer",{className:n.footer},r.createElement(o.Link,{className:n.link,to:c.B.About},"About"),r.createElement("a",{className:n.link,href:"https://github.com/nickheal/power-reader",target:"_blank"},"Open source ",r.createElement(i.HaR,null)))}const l=(0,a.MA)({main:{minHeight:768,padding:[32,64]}});function s(e){const n=l();return r.createElement("main",Object.assign({},e,{className:n.main}))}function d(e){return r.createElement(r.Fragment,null,r.createElement(s,null,e.children),r.createElement(f,null))}},1195:function(e,n,t){t.d(n,{I:function(){return a},K:function(){return o}});var r=t(8057);let o=function(e){return e.Primary="primary",e.Secondary="secondary",e.Tertiary="tertiary",e}({});const a=(0,r.MA)({button:{background:e=>e.variant===o.Primary?"linear-gradient(125deg, #3a52ffee, #33346dee)":"#ffffff22",backdropFilter:"blur(2px)",border:0,borderRadius:4,boxShadow:"3px 3px 5px #00000011",color:e=>e.variant===o.Primary?"#ffffff":e.variant===o.Secondary?"#333333":e.variant===o.Tertiary?"#ffffff":void 0,cursor:"pointer",display:"inline-block",fontFamily:"Helvetica, Arial, sans-serif",fontSize:e=>e.variant===o.Tertiary?24:16,margin:0,marginRight:e=>e.variant===o.Tertiary?16:0,padding:[10,12],textDecoration:"none",transition:"box-shadow 300ms cubic-bezier(0.34, 1.56, 0.64, 1), transform 300ms cubic-bezier(0.34, 1.56, 0.64, 1)","&:hover, &:focus":{boxShadow:"3px 3px 7px #00000010",transform:"scale(1.01)"},"& > svg":{display:"block"}}})},2593:function(e,n,t){t.d(n,{j:function(){return a},v:function(){return o}});var r=t(6540);const o=(0,r.createContext)([]),a=(0,r.createContext)((()=>{}))},7062:function(e,n,t){t.r(n),t.d(n,{default:function(){return E}});var r=t(4506),o=t(6540),a=t(4794),i=t(3829),c=t(5241),u=t(7848),f=t(4181),l=t(4033),s=t(1195),d=t(9479),m=t(8127),p=t(3893),v=t(4017),g=t(9178),b=t(8057),y=t(2593);const h=(0,b.MA)({label:{color:"#ffffff",display:"block",margin:[0,0,8]},input:{backdropFilter:"blur(2px)",background:"#ffffff0a",border:{color:"#ffffff33",width:[0,0,2,0]},color:"#ffffff",display:"block",fontSize:16,fontFamily:"Helvetica, Arial, sans-serif",height:580,margin:[0,0,32],maxWidth:640,padding:8,resize:"none",transition:"border-color 150ms ease-in-out",width:"100%","&:hover":{border:{color:"#ffffff77"}},"&:active, &:focus":{border:{color:"#ffffffaa"},outline:"none"}}});function w(e){var n;const t=h(),r=(0,o.useContext)(y.v),a=(0,o.useContext)(y.j);if(!e.name)throw new Error("Name is required for an input");const i=(null===(n=r.find((n=>{let{id:t}=n;return t===e.name})))||void 0===n?void 0:n.value)||"";return o.createElement(o.Fragment,null,o.createElement("label",{className:t.label,htmlFor:e.name},e.label,":"),o.createElement("textarea",Object.assign({},e,{className:`${t.input} ${e.className}`,value:i,onInput:n=>a(e.name,n.currentTarget.value)})))}function E(){const[e,n]=(0,c.Ir)(),t=(0,f.YE)(e);return o.createElement(g.A,null,o.createElement(d.A,{initialState:t?{name:t.name,content:t.content}:null,onSubmit:function(o){var c;const f={id:null!==(c=null==t?void 0:t.id)&&void 0!==c?c:(0,i.A)(),name:o.name.trim(),content:o.content.trim(),readerPosition:0};if(t){const o=(0,r.A)(e.documents);o[o.indexOf(t)]=f,n({...e,documents:o})}else n({...e,documents:[].concat((0,r.A)(e.documents),[f])});(0,a.navigate)(u.B.Dashboard)}},o.createElement(m.A,{tag:m.v.H1},t?"Edit document":"New document"),o.createElement(p.A,{label:"Name",name:"name",required:!0}),o.createElement(w,{label:"Content",name:"content",type:"textarea",required:!0}),o.createElement(l.A,{variant:s.K.Tertiary},t?"Save":"Create"),o.createElement(v.A,{to:u.B.Dashboard,variant:s.K.Tertiary},"Cancel")))}},5241:function(e,n,t){t.d(n,{Dm:function(){return l},Ir:function(){return s},Kt:function(){return f},kg:function(){return d}});var r=t(7444),o=t(4794),a=t(7848),i=t(3829),c=t(599);const{persistAtom:u}=(0,c.x)();let f=function(e){return e[e.Line=0]="Line",e[e.Word=1]="Word",e}({});const l=(0,r.eU)({key:"user",default:d({firstName:""}),effects_UNSTABLE:[u]}),s=()=>{const e=(0,r.L4)(l),[n,t]=e;return"undefined"==typeof window||n.firstName||(0,o.navigate)(a.B.Introduction),[{...d({firstName:n.firstName}),...n},t]};function d(e){let{firstName:n}=e;return{documents:[],firstName:n,id:(0,i.A)(),mode:f.Line,readSpeed:60}}},4181:function(e,n,t){t.d(n,{SW:function(){return i},Sw:function(){return u},YE:function(){return f},dm:function(){return l},kq:function(){return o},q5:function(){return c}});var r=t(4506);const o=2;function a(e,n){for(let t=n;t>=0;t--){const o=0===t;if(!e[t])return[e.trim()];if(o)return[e.substring(0,n).trim()].concat((0,r.A)(a(e.substring(n),n)));if(" "===e[t])return[e.substring(0,t).trim()].concat((0,r.A)(a(e.substring(t),n)))}return[]}function i(e,n){return void 0===n&&(n=60),a(e,n)}function c(e){return e.split(/\s/)}function u(e,n){let t=0;for(let r=0;r<e.length;r++){t+=e[r].length+1;if(t>=n){const o=t-(e[r].length+1),a=t-o,i=n-o;return console.log(t,n),{activeLines:[e[r-1]||" ",e[r],e[r+1]||" "],lineProgress:i/a*100}}}throw new Error("Couldn't find reading position in document")}function f(e){if("undefined"!=typeof window){const n=window.location.search,t=new URLSearchParams(n);return e.documents.find((e=>e.id===t.get("id")))}return null}function l(e){if("undefined"!=typeof window){const n=window.location.search,t=new URLSearchParams(n),r=JSON.parse(t.get("ids"));return e.documents.filter((e=>r.includes(e.id)))}return null}},599:function(e,n){n.x=void 0;n.x=(e={})=>{if("undefined"==typeof window)return{persistAtom:()=>{}};const{key:n="recoil-persist",storage:t=localStorage,converter:r=JSON}=e,o=(e,n,t,r)=>{r?delete n[t]:n[t]=e,c(n)},a=()=>{const e=t.getItem(n);return null==e?{}:"string"==typeof e?i(e):"function"==typeof e.then?e.then(i):{}},i=e=>{if(void 0===e)return{};try{return r.parse(e)}catch(n){return console.error(n),{}}},c=e=>{try{"function"==typeof t.mergeItem?t.mergeItem(n,r.stringify(e)):t.setItem(n,r.stringify(e))}catch(o){console.error(o)}};return{persistAtom:({onSet:e,node:n,trigger:t,setSelf:r})=>{if("get"===t){const e=a();"function"==typeof e.then&&e.then((e=>{e.hasOwnProperty(n.key)&&r(e[n.key])})),e.hasOwnProperty(n.key)&&r(e[n.key])}e((async(e,t,r)=>{const i=a();"function"==typeof i.then?i.then((t=>o(e,t,n.key,r))):o(e,i,n.key,r)}))}}}},3829:function(e,n,t){t.d(n,{A:function(){return l}});var r,o={randomUUID:"undefined"!=typeof crypto&&crypto.randomUUID&&crypto.randomUUID.bind(crypto)},a=new Uint8Array(16);function i(){if(!r&&!(r="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return r(a)}for(var c=[],u=0;u<256;++u)c.push((u+256).toString(16).slice(1));function f(e,n=0){return(c[e[n+0]]+c[e[n+1]]+c[e[n+2]]+c[e[n+3]]+"-"+c[e[n+4]]+c[e[n+5]]+"-"+c[e[n+6]]+c[e[n+7]]+"-"+c[e[n+8]]+c[e[n+9]]+"-"+c[e[n+10]]+c[e[n+11]]+c[e[n+12]]+c[e[n+13]]+c[e[n+14]]+c[e[n+15]]).toLowerCase()}var l=function(e,n,t){if(o.randomUUID&&!n&&!e)return o.randomUUID();var r=(e=e||{}).random||(e.rng||i)();if(r[6]=15&r[6]|64,r[8]=63&r[8]|128,n){t=t||0;for(var a=0;a<16;++a)n[t+a]=r[a];return n}return f(r)}}}]);
//# sourceMappingURL=component---src-pages-document-tsx-fa995ce14a7a46b6afa2.js.map