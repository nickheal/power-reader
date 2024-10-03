"use strict";(self.webpackChunkpower_reader=self.webpackChunkpower_reader||[]).push([[382],{1604:function(e,t,n){n.d(t,{A:function(){return p}});var o=n(6540),r=n(4794),i=n(8872),a=n(6634),s=n(1489),c=n(8057),l=n(7848),d=n(5241);const u=150,m={backdropFilter:"blur(2px)",background:"#ffffffee",border:0,borderRadius:8,boxShadow:"3px 3px 10px #00000011",color:"#333",cursor:"pointer",display:"inline-block",fontSize:28,margin:[0,8,4],padding:[8,10],verticalAlign:"middle","& svg":{display:"block"}},f=(0,c.MA)({button:{...m},buttonTransition:{"&-enter":{transform:"scale(0)"},"&-enter-active":{transform:"scale(1)",transition:`transform ${u}ms cubic-bezier(0.34, 1.56, 0.64, 1)`},"&-enter-done":{transform:"scale(1)"},"&-exit":{transform:"scale(1)"},"&-exit-active":{transform:"scale(0)",transition:`transform ${u}ms cubic-bezier(0.34, 1.56, 0.64, 1)`}},groupedButton:{...m,borderRight:"solid 2px #f7f7f7",marginLeft:0,marginRight:0,opacity:.4,position:"relative","&:first-of-type":{borderRadius:[8,0,0,8]},"&:last-of-type":{borderRadius:[0,8,8,0],borderRight:0}},groupedButtonActive:{opacity:1},groupedButtons:{display:"inline-block",margin:[0,8]}});function p(e){const t=f(),[n,c]=(0,d.Ir)();return o.createElement(o.Fragment,null,o.createElement(r.Link,{className:t.button,to:l.B.Dashboard},o.createElement(s.QPV,null)),o.createElement("button",{className:t.button,onClick:e.onRewind},o.createElement(s.Jj0,null)),o.createElement("button",{className:t.button,onClick:e.onPlayPause},o.createElement(i.A,null,o.createElement(a.A,{key:e.isPlaying?"true":"false",timeout:u,classNames:t.buttonTransition},e.isPlaying?o.createElement(s.GHw,null):o.createElement(s.aze,null)))),o.createElement("button",{className:t.button,onClick:e.onFastForward},o.createElement(s.F$q,null)),o.createElement("button",{className:t.button,onClick:e.onRestart},o.createElement(s.cO3,null)),o.createElement("div",{className:t.groupedButtons},o.createElement("button",{className:`${t.groupedButton}${n.mode===d.Kt.Line?` ${t.groupedButtonActive}`:""}`,onClick:function(){c({...n,mode:d.Kt.Line})}},"Line"),o.createElement("button",{className:`${t.groupedButton}${n.mode===d.Kt.Word?` ${t.groupedButtonActive}`:""}`,onClick:function(){c({...n,mode:d.Kt.Word})}},"Word")))}},6119:function(e,t,n){n.d(t,{A:function(){return c}});var o=n(6540),r=n(8057),i=n(4181),a=n(5892);const s=(0,r.MA)({readZone:{display:"flex",justifyContent:"center"},readZoneCentered:{border:0,borderLeft:"solid 2px #33333333",display:"inline-block",minWidth:728,padding:[16,32]},textLine:{fontSize:24,margin:[8,0],position:"relative","&::after":{backdropFilter:"blur(2px)",background:"#0000000f",bottom:0,boxShadow:"3px 3px 10px #00000011",content:'""',display:"block",left:0,height:"100%",position:"absolute",transform:e=>{let{lineProgress:t}=e;return`scaleX(${t/100})`},transformOrigin:"left",transition:"transform 20ms linear",width:"100%",zIndex:-1}},paraTextLine:{fontSize:24,margin:[8,0],opacity:.1}});function c(e){let{document:t,isPlaying:n,onComplete:r,speed:c}=e;const{content:l,readerPosition:d}=t,u=(0,i.SW)(l),{activeLines:m,lineProgress:f}=(0,i.Sw)(u,d);(0,a.L)(t,n,r,c);const p=s({lineProgress:f});return o.createElement("section",null,o.createElement("div",{className:p.readZone},o.createElement("div",{className:p.readZoneCentered},o.createElement("p",{className:p.paraTextLine},m[0]),o.createElement("p",{className:p.textLine},m[1]),o.createElement("p",{className:p.paraTextLine},m[2]))))}},5892:function(e,t,n){n.d(t,{L:function(){return a}});var o=n(4506),r=n(6540),i=n(5241);function a(e,t,n,a){const[s,c]=(0,i.Ir)();(0,r.useEffect)((()=>{if(!t||"undefined"==typeof window)return;e.readerPosition>=e.content.length&&n();const r=window.setTimeout((()=>{const t=(0,o.A)(s.documents),n=t.indexOf(t.find((t=>t.id===e.id)));t[n]={...t[n],readerPosition:t[n].readerPosition+1},c({...s,documents:t})}),1e3*a);return()=>window.clearTimeout(r)}),[e,t,s,c])}},9633:function(e,t,n){n.r(t),n.d(t,{default:function(){return g}});var o=n(4506),r=n(6540),i=n(4794),a=n(8057),s=n(7848),c=n(5241),l=n(4181),d=n(1604),u=n(6119),m=n(5892);const f=(0,a.MA)({readZone:{display:"flex",justifyContent:"center"},readZoneCentered:{border:0,borderLeft:"solid 2px #33333333",display:"inline-block",minWidth:300,padding:[16,32]},textLine:{fontSize:24,margin:[8,0],position:"relative"},paraTextLine:{fontSize:24,margin:[8,0],opacity:.1}});function p(e){let{document:t,isPlaying:n,onComplete:o,speed:i}=e;const{content:a,readerPosition:s}=t,c=(0,l.q5)(a),{activeLines:d}=(0,l.Sw)(c,s);(0,m.L)(t,n,o,i);const u=f();return r.createElement("section",null,r.createElement("div",{className:u.readZone},r.createElement("div",{className:u.readZoneCentered},r.createElement("p",{className:u.textLine},d[1]))))}const b=(0,a.MA)({"@global":{body:{background:"linear-gradient(125deg, #ffffff, #f0f0f0) !important"}},controlsContainer:{margin:[32,0,160],opacity:.1,padding:16,textAlign:"center",transition:"opacity 300ms ease-in-out","&:hover, &:focus":{opacity:1}}});function g(){const e=b(),[t,n]=(0,c.Ir)(),{0:a,1:m}=(0,r.useState)(!1),f=(0,l.YE)(t);if(!f)return console.error("Couldn't find document with this ID"),"undefined"!=typeof window&&(0,i.navigate)(s.B.Dashboard),r.createElement("main",null);function g(){m(!a)}const E=function(e){switch(e){case c.Kt.Line:return u.A;case c.Kt.Word:return p;default:throw new Error(`Reading mode "${e}" not recognised.`)}}(t.mode);return r.createElement("main",null,r.createElement("section",{className:e.controlsContainer},r.createElement("h1",null,f.name),r.createElement(d.A,{isPlaying:a,onRewind:function(){const e=(0,o.A)(t.documents);e[e.indexOf(f)]={...e[e.indexOf(f)],readerPosition:Math.max(f.readerPosition-100,0)},n({...t,documents:e})},onPlayPause:g,onFastForward:function(){const e=(0,o.A)(t.documents);e[e.indexOf(f)]={...e[e.indexOf(f)],readerPosition:Math.min(f.readerPosition+100,f.content.length)},n({...t,documents:e})},onRestart:function(){const e=(0,o.A)(t.documents);e[e.indexOf(f)]={...e[e.indexOf(f)],readerPosition:0},n({...t,documents:e})}})),r.createElement(E,{document:f,isPlaying:a,onComplete:g,speed:1/t.readSpeed}))}}}]);
//# sourceMappingURL=component---src-pages-reader-tsx-2da8f58a6ce1be738fde.js.map