"use strict";(self.webpackChunkdwcj_documentation=self.webpackChunkdwcj_documentation||[]).push([[5219],{75487:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>c});const r=JSON.parse('{"id":"advanced/interval","title":"Interval","description":"The Interval class represents a timer that triggers an event with a fixed time delay between each triggering.","source":"@site/docs/advanced/interval.md","sourceDirName":"advanced","slug":"/advanced/interval","permalink":"/docs/advanced/interval","draft":false,"unlisted":false,"editUrl":"https://github.com/webforj/webforj-docs/tree/website/docs/advanced/interval.md","tags":[],"version":"current","sidebarPosition":45,"frontMatter":{"sidebar_position":45,"title":"Interval"},"sidebar":"documentationSidebar","previous":{"title":"Web Storage","permalink":"/docs/advanced/web-storage"},"next":{"title":"Browser History","permalink":"/docs/advanced/browser-history"}}');var a=n(74848),i=n(28453),s=(n(5943),n(33235));const o={sidebar_position:45,title:"Interval"},l=void 0,d={},c=[{value:"Usages",id:"usages",level:2},{value:"Managing <code>Interval</code> states: starting, stopping, and restart",id:"managing-interval-states-starting-stopping-and-restart",level:2},{value:"Adjusting the <code>Interval</code> delay",id:"adjusting-the-interval-delay",level:2},{value:"Adding listeners",id:"adding-listeners",level:2}];function A(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(t.p,{children:["The ",(0,a.jsx)(s.A,{type:"foundation",location:"com/webforj/Interval",code:"true",children:"Interval"})," class represents a timer that triggers an ",(0,a.jsx)(t.a,{href:"../building-ui/events",children:"event"})," with a fixed time delay between each triggering."]}),"\n",(0,a.jsxs)(t.p,{children:["The ",(0,a.jsx)(t.code,{children:"Interval"})," class provides a straightforward way to trigger events after a specified delay. It's possible to start, stop, and restart an ",(0,a.jsx)(t.code,{children:"Interval"})," as needed. Additionally, Intervals can support multiple listeners for the elapsed event.\nOptimized for the webforJ framework, it offers better performance compared to the standard Java timer or the Swing timer."]}),"\n",(0,a.jsx)(t.h2,{id:"usages",children:"Usages"}),"\n",(0,a.jsxs)(t.p,{children:["The ",(0,a.jsx)(t.code,{children:"Interval"})," class triggers event(s) at a fixed time delay. Leveraging Intervals creatively, you can enhance user interaction and engagement on your website while keeping the experience dynamic and interesting.:"]}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"Check for Inactivity"}),": Display a ",(0,a.jsx)(t.a,{href:"../components/dialog",children:(0,a.jsx)(t.code,{children:"Dialog"})})," component if there hasn't been any interaction on a form within a given time."]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"Featured Content"}),": Rotate through featured articles, products, or promotions on your homepage on each Interval. This keeps the content dynamic and engaging."]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"Live Data"}),": Refresh data on your app, such as stock prices, news feeds, or weather updates, on each Interval to keep the data current."]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(t.h2,{id:"managing-interval-states-starting-stopping-and-restart",children:["Managing ",(0,a.jsx)(t.code,{children:"Interval"})," states: starting, stopping, and restart"]}),"\n",(0,a.jsxs)(t.p,{children:["An Interval requires manual activation; use the ",(0,a.jsx)(t.code,{children:"start()"})," method to initiate it. To stop an Interval, use the ",(0,a.jsx)(t.code,{children:"stop()"})," method. The ",(0,a.jsx)(t.code,{children:"restart()"})," method can be used to restart the Interval."]}),"\n",(0,a.jsxs)(t.h2,{id:"adjusting-the-interval-delay",children:["Adjusting the ",(0,a.jsx)(t.code,{children:"Interval"})," delay"]}),"\n",(0,a.jsxs)(t.p,{children:["To modify the delay of an Interval, use the ",(0,a.jsx)(t.code,{children:"setDelay(float delay)"})," method. The new delay value is applied after the Interval is either stopped or restarted."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-java",children:"//Changing the Delay\nInterval.setDelay(2f);\nInterval.restart();\n"})}),"\n",(0,a.jsx)(t.admonition,{type:"tip",children:(0,a.jsx)(t.p,{children:"The delay can be fractional seconds to millisecond in resolution, but a very small timeout value causes a flood of events faster than the program can respond to them."})}),"\n",(0,a.jsx)(t.h2,{id:"adding-listeners",children:"Adding listeners"}),"\n",(0,a.jsxs)(t.p,{children:["You can attach additional listeners to an Interval using the ",(0,a.jsx)(t.code,{children:"addElapsedListener(EventListener\\<Interval.ElapsedEvent\\> listener)"})," method. Once a listener is added, it automatically triggers on the next interval if the Interval is already running."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-java",children:"// Adding Listeners\nfloat dealy = 2f;\n\nEventListener<Interval.ElapsedEvent> firstListener = (e -> {\n// Executable code\n});\n\nInterval interval = new Interval(delay, firstListener);\n\nEventListener<Interval.ElapsedEvent> secondListener = (e -> {\n// Executable code\n});\n\ninterval.addElapsedListener(secondListener);\n"})})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(A,{...e})}):A(e)}},37785:(e,t,n)=>{var r=n(24994);t.A=void 0;var a=r(n(42032)),i=n(74848),s=(0,a.default)((0,i.jsx)("path",{d:"m19 1-5 5v11l5-4.5V1zM1 6v14.65c0 .25.25.5.5.5.1 0 .15-.05.25-.05C3.1 20.45 5.05 20 6.5 20c1.95 0 4.05.4 5.5 1.5V6c-1.45-1.1-3.55-1.5-5.5-1.5S2.45 4.9 1 6zm22 13.5V6c-.6-.45-1.25-.75-2-1v13.5c-1.1-.35-2.3-.5-3.5-.5-1.7 0-4.15.65-5.5 1.5v2c1.35-.85 3.8-1.5 5.5-1.5 1.65 0 3.35.3 4.75 1.05.1.05.15.05.25.05.25 0 .5-.25.5-.5v-1.1z"}),"AutoStories");t.A=s},5943:(e,t,n)=>{n.d(t,{h:()=>b,A:()=>f});var r=n(96540),a=n(17437),i=n(5556),s=n.n(i),o=n(11470),l=n(19365),d=n(41622),c=n(61302);const A=n.p+"assets/images/expand-ba3f00f73da43d91e5b17663c4a7d108.png",h="data:image/png;base64,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",u="data:image/png;base64,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";var g=n(95293),p=n(52706),v=n(2445);function m(e){let{collapse:t,setCollapse:n}=e;m.propTypes={collapse:s().bool.isRequired,setCollapse:s().func.isRequired};const r=a.AH`
    display: flex;
    justify-content: end;
    align-items: flex-end;
    background-color: transparent;
    margin-bottom: -10px;
  `,i=a.AH`
    cursor: pointer;
    z-index: 10;
    height: 35px;
    width: 35px;
    border: none;
    background-color: none;
    justify-self: flex-end;
    background-color: transparent;
    margin-right: 5px;
    margin-bottom: -50px !important;
  `,o=a.AH`
    filter: invert(var(--inversion-percentage));
  `;return(0,v.Y)("div",{css:r,children:(0,v.Y)("button",{css:i,onClick:()=>{n(!t)},children:t?(0,v.Y)("img",{alt:"collapse_button",css:o,src:A,className:"icon-tabler-arrow-bar-up"}):(0,v.Y)("img",{css:o,src:h,className:"icon-tabler-arrow-bar-down"})})})}function b(e){let{url:t}=e;const n=a.AH`
    position: relative;
    cursor: pointer;
    z-index: 10;
    height: 35px;
    width: 35px;
    border: none;
    justify-self: flex-end;
    margin-top: -5px;
    margin-bottom: -20px;
    background-color: transparent;
    margin-right: 12px;
  `,r=a.AH`
    filter: invert(var(--inversion-percentage));
    ::before {
      mix-blend-mode: lighten;
      opacity: 0.5;
    }
  `;return(0,v.Y)("button",{css:n,onClick:()=>{window.open(t,"_blank")},children:(0,v.Y)("img",{css:r,src:u})})}function f(e){let{path:t,javaC:n,javaE:i,urls:A,cssURL:h,javaHighlight:u,height:x,frame:w,tabs:y}=e;f.propTypes={path:s().string.isRequired,javaC:s().string,javaE:s().string,urls:s().arrayOf(s().string),cssURL:s().string,javaHighlight:s().string,height:s().string,frame:s().string,tabs:s().arrayOf(s().string)};const[D,j]=(0,r.useState)(""),[B,k]=(0,r.useState)(""),[Y,E]=(0,r.useState)({}),[L,S]=(0,r.useState)(""),[H,C]=(0,r.useState)(!(!n||!i)),[F,M]=(0,r.useState)(!1),[O,I]=(0,r.useState)({}),[J,G]=(0,r.useState)(!1),[z,N]=(0,r.useState)(0),[X,T]=(0,r.useState)(0),[V,W]=(0,r.useState)(25),[Z,R]=(0,r.useState)(25),[P,U]=(0,r.useState)(0),[K,q]=(0,r.useState)(!1),Q=(0,r.useRef)(null),_=(0,r.useRef)(null);function $(e,t,n){return(0,v.Y)(c.A,{css:t,className:"codeDemoBlock",language:"java",showLineNumbers:!0,metastring:n,children:e.code})}(0,r.useEffect)((()=>{i&&fetch(i).then((e=>e.text())).then((e=>{k(e);const t=new URL(i).pathname.split("/"),n=t[t.length-1];I((e=>({...e,javaFile:n})))})),n&&fetch(n).then((e=>e.text())).then((e=>{j(e)})),h&&fetch(h).then((e=>e.text())).then((e=>{S(e);const t=new URL(h).pathname.split("/"),n=t[t.length-1];I((e=>({...e,cssFile:n})))})),A&&A.forEach((function(e){const t=new URL(e),n=t.pathname.split("/"),r=n[n.length-1];fetch(e).then((e=>e.text())).then((e=>{!function(e,t){E((n=>({...n,[e]:{fileName:e,code:t}})))}(r,e)}))})),U(Q.current?Q.current.offsetWidth:0)}),[]);const ee=()=>{G(!1)},te=e=>{if(J){const t=e.clientX-z;X+t>P/3&&(Q.current.style.width=`${X+t}px`,_.current.style.right=(V-t<25?25:V-t)+"px",R(V-t<25?25:V-t))}},ne=a.AH`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-bottom: 16px;
    background-color: var(--dwc-surface-1);
  `,re=a.AH`
    width: 100%;
    border: 1px solid var(--ifm-toc-border-color);
    border-right: none;
    background-color: transparent;
    display: flex;
    position: relative;
  `,ae=a.AH`
    min-height: 100px;
    height: 100%;
    width: 100%;
    height: ${x||"100%"};
    pointer-events: ${J?"none":"auto"};
  `,ie=a.AH`
    display: flex;
    justify-content: flex-end;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
    ${F&&"opacity: 1;"};
    margin: 10px 0 0 0;
    position: absolute;
    right: 25px;
  `,se=a.AH`
    display: flex;
    align-items: center;
    cursor: ew-resize;
    border-left: 1px solid var(--ifm-toc-border-color);
    border-right: 1px solid var(--ifm-toc-border-color);
    background-color: var(--dwc-surface-3);
  `,oe=a.AH`
    box-shadow: none;
    background-color: var(--dwc-surface-3);
    margin: 0px;
    padding: 0px;
    border: ${"hidden"==w?"none":"1px solid var(--ifm-toc-border-color)"};
    border-top: none;
    border-radius: 0px;
    position: relative;

    div {
      border-color: var(--ifm-toc-border-color);
      padding: 2px 0px 0px 0px;
      margin: 0px;
    }

    > div:first-of-type {
      border: ${"hidden"==w?"1px solid var(--ifm-toc-border-color)":"none"};
      border-top: none;
    }

    summary {
      display: flex;
      width: 100%;
      justify-content: center;
      margin: 10px 0;
      font-weight: bold;
      ::before {
        left: auto;
        margin-left: -100px;
        --docusaurus-details-decoration-color: var(--ifm-color-primary);
      }
    }
    .margin-top--md {
      margin-top: 0px !important;
    }
    ul {
      margin: -4px 0px !important;
    }
  `,le=a.AH`
    li[aria-selected="true"] {
      border-color: var(--ifm-color-primary);
    }

    .tabs__item {
      padding: 5px 20px -2px 20px;
      border-radius: 0px;
    }
  `,de=a.AH`
    border-radius: 0px;
    box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 4px 0px inset;
  `;return(0,v.FD)("div",{css:ne,onMouseUp:ee,onMouseLeave:ee,onMouseMove:te,children:["hidden"!=w?(0,v.FD)("div",{onMouseEnter:()=>{M(!0)},onMouseLeave:()=>M(!1),css:re,children:[(0,v.Y)("iframe",{onMouseUp:ee,loading:"lazy",src:t+"&__theme__="+(0,g.G)().colorMode,css:ae,ref:Q,onMouseMove:te}),(0,v.Y)("div",{css:ie,ref:_,children:(0,v.Y)(b,{url:t})}),(0,v.Y)("div",{css:se,onMouseDown:e=>{e.preventDefault(),G(!0),N(e.clientX),T(Q.current?Q.current.offsetWidth:0),W(Z)},children:(0,v.Y)(p.A,{})})]}):null,(0,v.FD)(d.A,{css:oe,summary:(0,v.Y)("summary",{onClick:()=>q(!K),children:K?"Hide Code":"Show Code"}),children:[n&&i?(0,v.Y)(m,{collapse:H,setCollapse:C}):null,h?(0,v.FD)(o.A,{css:le,children:[(0,v.Y)(l.A,{value:y?y[0]:"Java",label:y?y[0]:O.javaFile,default:!0,children:(0,v.Y)(c.A,{css:de,className:"codeDemoBlock",language:"java",showLineNumbers:!0,metastring:u,children:H?D:B})}),Object.keys(Y).map(((e,t)=>(0,v.Y)(l.A,{value:e,label:e,children:$(Y[e],de,u)},"tab"+t))),(0,v.Y)(l.A,{value:y?y[1]:"CSS",label:y?y[1]:O.cssFile,children:(0,v.Y)(c.A,{css:de,className:"codeDemoBlock",language:"css",showLineNumbers:!0,children:L})})]}):(0,v.FD)(o.A,{css:le,children:[(0,v.Y)(l.A,{value:y?y[0]:"Java",label:y?y[0]:O.javaFile,default:!0,children:(0,v.Y)(c.A,{css:de,className:"codeDemoBlock",language:"java",showLineNumbers:!0,metastring:u,children:H?D:B})}),Object.keys(Y).map(((e,t)=>(0,v.Y)(l.A,{value:e,label:e,children:$(Y[e],de,u)},"tab"+t)))]})]})]})}},33235:(e,t,n)=>{n.d(t,{A:()=>d});var r=n(96540),a=n(17437),i=n(90276),s=n(50526),o=n(37785),l=n(2445);function d(e){let{type:t,location:n,top:d,children:c,code:A,suffix:h}=e;const[u,g]=(0,r.useState)(""),[p,v]=(0,r.useState)(!1);(0,r.useEffect)((()=>{document.querySelectorAll(".doc-chip").length>0?v(!0):v(!1)}),[]),(0,r.useEffect)((()=>{h||(h=""),g("https://javadoc.io/doc/com.webforj/webforj-"+t+"/latest/"+n+".html"+h)}),[]);const m=a.AH`
    ${e=>e&&a.AH`
    margin-bottom: 1em;
    margin-left: 0.5em;
    float: right;
    @media (max-width: 500px){
    margin-bottom: 1em;
    float: none;
    margin-left: -.25em;
    }
    `}
  `,b=a.AH`
    width: 100%;
    margin-bottom: 1em;
    display: flex;
    flex-direction: row-reverse;
  `,f=a.AH`
    background-color: var(--javadoclink-bg);
    color: var(--javadoclink-color);
    padding: 0 0 0 5px;
    :hover {
      background-color: var(--javadoclink-hover-bg);
      color: var(--javadoclink-hover-color);
    } 
  `;return(0,l.FD)(l.FK,{children:["true"===d&&p&&(0,l.Y)(i.A,{title:"JavaDoc",arrow:!0,css:m,children:(0,l.Y)(s.A,{css:f,label:"Java API",component:"a",href:u,icon:(0,l.Y)(o.A,{}),clickable:!0,color:"primary",target:"_blank"})}),"true"===d&&!p&&(0,l.Y)("div",{css:b,children:(0,l.Y)(i.A,{title:"JavaDoc",arrow:!0,children:(0,l.Y)(s.A,{css:f,label:"Java API",component:"a",href:u,icon:(0,l.Y)(o.A,{}),clickable:!0,color:"primary",target:"_blank"})})}),"true"!==d&&!A&&(0,l.Y)("a",{href:u,target:"_blank",children:c}),"true"!==d&&A&&(0,l.Y)("code",{children:(0,l.Y)("a",{href:u,target:"_blank",children:c})})]})}},16999:(e,t,n)=>{n.d(t,{A:()=>i});n(96540);var r=n(14718),a=n(74848);function i(e){return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(r.A,{...e})})}}}]);