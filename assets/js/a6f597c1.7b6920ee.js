"use strict";(self.webpackChunkdwcj_documentation=self.webpackChunkdwcj_documentation||[]).push([[7909],{49567:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"advanced/browser-console","title":"Browser Console","description":"Using the browser\'s console to print valuable program information is an integral part of the development process. The BrowserConsole utility class comes with a slew of features to enhance logging capabilities.","source":"@site/docs/advanced/browser-console.md","sourceDirName":"advanced","slug":"/advanced/browser-console","permalink":"/docs/advanced/browser-console","draft":false,"unlisted":false,"editUrl":"https://github.com/webforj/webforj-docs/tree/website/docs/advanced/browser-console.md","tags":[],"version":"current","sidebarPosition":15,"frontMatter":{"sidebar_position":15,"title":"Browser Console"},"sidebar":"documentationSidebar","previous":{"title":"Advanced Topics","permalink":"/docs/advanced/overview"},"next":{"title":"Web Storage","permalink":"/docs/advanced/web-storage"}}');var n=t(74848),s=t(28453),l=(t(5943),t(33235));const a={sidebar_position:15,title:"Browser Console"},i=void 0,c={},d=[{value:"Instance",id:"instance",level:2},{value:"Styling",id:"styling",level:2},{value:"Background color",id:"background-color",level:3},{value:"Text color",id:"text-color",level:3},{value:"Font size",id:"font-size",level:3},{value:"Font style",id:"font-style",level:3},{value:"Text transformation",id:"text-transformation",level:3},{value:"Font weight",id:"font-weight",level:3},{value:"Mixing styles",id:"mixing-styles",level:2}];function h(e){const o={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(o.p,{children:["Using the browser's console to print valuable program information is an integral part of the development process. The ",(0,n.jsx)(l.A,{type:"foundation",location:"com/webforj/BrowserConsole",code:"true",children:"BrowserConsole"})," utility class comes with a slew of features to enhance logging capabilities."]}),"\n",(0,n.jsx)(o.h2,{id:"instance",children:"Instance"}),"\n",(0,n.jsxs)(o.p,{children:["Get an instance of ",(0,n.jsx)(o.code,{children:"BrowserConsole"})," using the ",(0,n.jsx)(o.code,{children:"App.console()"})," method. Print any ",(0,n.jsx)(o.code,{children:"Object"})," desired as one of the five log types: log, info, warn, error, or debug."]}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-java",children:'import static com.webforj.App.console;\n// Types\nconsole().log("Log message");\nconsole().info("Info message");\nconsole().warn("Warn message");\nconsole().error("Error message");\nconsole().debug("Debug message");\n'})}),"\n",(0,n.jsx)(o.h2,{id:"styling",children:"Styling"}),"\n",(0,n.jsxs)(o.p,{children:["Use the builder methods to set the appearance of the log message. Each builder has options to change a specific property. It's also possible to ",(0,n.jsx)(o.a,{href:"#mixing-styles",children:"mix multiple styles"}),".\nOnce a console message prints, any styling applied won't carry over to subsequent messages unless ",(0,n.jsx)(o.em,{children:"explicitly"})," redefined."]}),"\n",(0,n.jsxs)(o.ul,{children:["\n",(0,n.jsx)(o.li,{children:(0,n.jsx)(o.a,{href:"#background-color",children:(0,n.jsx)(o.code,{children:"background()"})})}),"\n",(0,n.jsx)(o.li,{children:(0,n.jsx)(o.a,{href:"#text-color",children:(0,n.jsx)(o.code,{children:"color()"})})}),"\n",(0,n.jsx)(o.li,{children:(0,n.jsx)(o.a,{href:"#font-size",children:(0,n.jsx)(o.code,{children:"size()"})})}),"\n",(0,n.jsx)(o.li,{children:(0,n.jsx)(o.a,{href:"#font-style",children:(0,n.jsx)(o.code,{children:"style()"})})}),"\n",(0,n.jsx)(o.li,{children:(0,n.jsx)(o.a,{href:"#text-transformation",children:(0,n.jsx)(o.code,{children:"transform()"})})}),"\n",(0,n.jsx)(o.li,{children:(0,n.jsx)(o.a,{href:"#font-weight",children:(0,n.jsx)(o.code,{children:"weight()"})})}),"\n"]}),"\n",(0,n.jsx)(o.admonition,{type:"tip",children:(0,n.jsxs)(o.p,{children:["Use the ",(0,n.jsx)(o.code,{children:"setStyle"})," method to change the properties of the ",(0,n.jsx)(o.code,{children:"BrowserConsole"})," log not specified by the builders."]})}),"\n",(0,n.jsx)(o.h3,{id:"background-color",children:"Background color"}),"\n",(0,n.jsxs)(o.p,{children:["Set the background color with the ",(0,n.jsx)(o.code,{children:"background()"})," method, which returns the ",(0,n.jsx)(l.A,{type:"foundation",location:"com/webforj/BrowserConsole.BackgroundColorBuilder",code:"true",children:"BackgroundColorBuilder"}),".\nUse methods named by color, like ",(0,n.jsx)(o.code,{children:"blue()"}),", or choose a specific value with ",(0,n.jsx)(o.code,{children:"colored(String color)"}),"."]}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-java",children:'// Background Examples\nconsole().background().blue().log("Blue background");\nconsole().background().colored("#031f8f").log("Custom blue background");\n'})}),"\n",(0,n.jsx)(o.h3,{id:"text-color",children:"Text color"}),"\n",(0,n.jsxs)(o.p,{children:["Set the text color with the ",(0,n.jsx)(o.code,{children:"color()"})," method, which returns the ",(0,n.jsx)(l.A,{type:"foundation",location:"com/webforj/BrowserConsole.ColorBuilder",code:"true",children:"ColorBuilder"}),".\nUse methods named by color, like ",(0,n.jsx)(o.code,{children:"red()"}),", or choose a specific value with ",(0,n.jsx)(o.code,{children:"colored(String color)"}),"."]}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-java",children:'// Color Examples\nconsole().background().red().log("Red text");\nconsole().color().colored("#becad2").log("Custom light bluish-gray text");\n'})}),"\n",(0,n.jsx)(o.h3,{id:"font-size",children:"Font size"}),"\n",(0,n.jsxs)(o.p,{children:["Set the font size with the ",(0,n.jsx)(o.code,{children:"size()"})," method, which returns the ",(0,n.jsx)(l.A,{type:"foundation",location:"com/webforj/BrowserConsole.FontSizeBuilder",code:"true",children:"FontSizeBuilder"}),".\nUse methods named by a size, like ",(0,n.jsx)(o.code,{children:"small()"}),", or choose a specific value with ",(0,n.jsx)(o.code,{children:"from(String value)"}),"."]}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-java",children:'//Size Examples\nconsole().size().small().log("Small font");\nconsole().size().from("30px").log("30px font");\n'})}),"\n",(0,n.jsx)(o.admonition,{type:"tip",children:(0,n.jsxs)(o.p,{children:["The ",(0,n.jsx)(o.code,{children:"from(String value)"})," method can take other font size values, such as rem and vw."]})}),"\n",(0,n.jsx)(o.h3,{id:"font-style",children:"Font style"}),"\n",(0,n.jsxs)(o.p,{children:["Set the font style with the ",(0,n.jsx)(o.code,{children:"style()"})," method, which returns the ",(0,n.jsx)(l.A,{type:"foundation",location:"com/webforj/BrowserConsole.FontStyleBuilder",code:"true",children:"FontStyleBuilder"}),".\nFor example, use the ",(0,n.jsx)(o.code,{children:"italic()"})," method to make the console log italicized."]}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-java",children:'// Style Examples\nconsole().style().italic().log("Italic font");\nconsole().style().normal().log("Normal font");\n'})}),"\n",(0,n.jsx)(o.h3,{id:"text-transformation",children:"Text transformation"}),"\n",(0,n.jsxs)(o.p,{children:["Control the capitalization of the characters in a message with the ",(0,n.jsx)(o.code,{children:"transform()"})," method, which returns the ",(0,n.jsx)(l.A,{type:"foundation",location:"com/webforj/BrowserConsole.TextTransformBuilder",code:"true",children:"TextTransformBuilder"}),".\nFor example, use the ",(0,n.jsx)(o.code,{children:"capitalize()"})," method to transform the first letter of each word to uppercase."]}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-java",children:'// Transform Examples\n// Capitalize Text Transformation\nconsole().transform().capitalize().log("Capitalize text transformation");\n// UPPERCASE TEXT TRANSFORMATION \nconsole().transform().uppercase().log("Uppercase text transformation");\n'})}),"\n",(0,n.jsx)(o.h3,{id:"font-weight",children:"Font weight"}),"\n",(0,n.jsxs)(o.p,{children:["Set how thick the text is with the ",(0,n.jsx)(o.code,{children:"weight()"})," method, which returns the ",(0,n.jsx)(l.A,{type:"foundation",location:"com/webforj/BrowserConsole.FontWeightBuilder",code:"true",children:"FontWeightBuilder"}),".\nFor example, use the ",(0,n.jsx)(o.code,{children:"ligther()"})," method to make the font lighter than normal."]}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-java",children:'// Weight Examples\nconsole().weight().bold().log("Bold font");\nconsole().weight().lighter().log("Lighter font");\n'})}),"\n",(0,n.jsx)(o.h2,{id:"mixing-styles",children:"Mixing styles"}),"\n",(0,n.jsx)(o.p,{children:"It's possible to mix and match methods for a custom logging display."}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-java",children:'// A variety of options for custom logging display\nconsole()\n    .weight().bolder()\n    .size().larger()\n    .color().gray()\n    .style().italic()\n    .transform().uppercase()\n    .background().blue()\n    .warn("Mixing styles");\n'})})]})}function u(e={}){const{wrapper:o}={...(0,s.R)(),...e.components};return o?(0,n.jsx)(o,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},37785:(e,o,t)=>{var r=t(24994);o.A=void 0;var n=r(t(42032)),s=t(74848),l=(0,n.default)((0,s.jsx)("path",{d:"m19 1-5 5v11l5-4.5V1zM1 6v14.65c0 .25.25.5.5.5.1 0 .15-.05.25-.05C3.1 20.45 5.05 20 6.5 20c1.95 0 4.05.4 5.5 1.5V6c-1.45-1.1-3.55-1.5-5.5-1.5S2.45 4.9 1 6zm22 13.5V6c-.6-.45-1.25-.75-2-1v13.5c-1.1-.35-2.3-.5-3.5-.5-1.7 0-4.15.65-5.5 1.5v2c1.35-.85 3.8-1.5 5.5-1.5 1.65 0 3.35.3 4.75 1.05.1.05.15.05.25.05.25 0 .5-.25.5-.5v-1.1z"}),"AutoStories");o.A=l},5943:(e,o,t)=>{t.d(o,{h:()=>x,A:()=>b});var r=t(96540),n=t(17437),s=t(5556),l=t.n(s),a=t(11470),i=t(19365),c=t(41622),d=t(61302);const h=t.p+"assets/images/expand-ba3f00f73da43d91e5b17663c4a7d108.png",u="data:image/png;base64,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",A="data:image/png;base64,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";var m=t(95293),g=t(52706),p=t(2445);function f(e){let{collapse:o,setCollapse:t}=e;f.propTypes={collapse:l().bool.isRequired,setCollapse:l().func.isRequired};const r=n.AH`
    display: flex;
    justify-content: end;
    align-items: flex-end;
    background-color: transparent;
    margin-bottom: -10px;
  `,s=n.AH`
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
  `,a=n.AH`
    filter: invert(var(--inversion-percentage));
  `;return(0,p.Y)("div",{css:r,children:(0,p.Y)("button",{css:s,onClick:()=>{t(!o)},children:o?(0,p.Y)("img",{alt:"collapse_button",css:a,src:h,className:"icon-tabler-arrow-bar-up"}):(0,p.Y)("img",{css:a,src:u,className:"icon-tabler-arrow-bar-down"})})})}function x(e){let{url:o}=e;const t=n.AH`
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
  `,r=n.AH`
    filter: invert(var(--inversion-percentage));
    ::before {
      mix-blend-mode: lighten;
      opacity: 0.5;
    }
  `;return(0,p.Y)("button",{css:t,onClick:()=>{window.open(o,"_blank")},children:(0,p.Y)("img",{css:r,src:A})})}function b(e){let{path:o,javaC:t,javaE:s,urls:h,cssURL:u,javaHighlight:A,height:w,frame:v,tabs:j}=e;b.propTypes={path:l().string.isRequired,javaC:l().string,javaE:l().string,urls:l().arrayOf(l().string),cssURL:l().string,javaHighlight:l().string,height:l().string,frame:l().string,tabs:l().arrayOf(l().string)};const[y,B]=(0,r.useState)(""),[k,D]=(0,r.useState)(""),[S,C]=(0,r.useState)({}),[F,Y]=(0,r.useState)(""),[E,H]=(0,r.useState)(!(!t||!s)),[z,L]=(0,r.useState)(!1),[M,N]=(0,r.useState)({}),[O,G]=(0,r.useState)(!1),[T,J]=(0,r.useState)(0),[X,W]=(0,r.useState)(0),[R,P]=(0,r.useState)(25),[V,Z]=(0,r.useState)(25),[U,I]=(0,r.useState)(0),[K,q]=(0,r.useState)(!1),Q=(0,r.useRef)(null),$=(0,r.useRef)(null);function _(e,o,t){return(0,p.Y)(d.A,{css:o,className:"codeDemoBlock",language:"java",showLineNumbers:!0,metastring:t,children:e.code})}(0,r.useEffect)((()=>{s&&fetch(s).then((e=>e.text())).then((e=>{D(e);const o=new URL(s).pathname.split("/"),t=o[o.length-1];N((e=>({...e,javaFile:t})))})),t&&fetch(t).then((e=>e.text())).then((e=>{B(e)})),u&&fetch(u).then((e=>e.text())).then((e=>{Y(e);const o=new URL(u).pathname.split("/"),t=o[o.length-1];N((e=>({...e,cssFile:t})))})),h&&h.forEach((function(e){const o=new URL(e),t=o.pathname.split("/"),r=t[t.length-1];fetch(e).then((e=>e.text())).then((e=>{!function(e,o){C((t=>({...t,[e]:{fileName:e,code:o}})))}(r,e)}))})),I(Q.current?Q.current.offsetWidth:0)}),[]);const ee=()=>{G(!1)},oe=e=>{if(O){const o=e.clientX-T;X+o>U/3&&(Q.current.style.width=`${X+o}px`,$.current.style.right=(R-o<25?25:R-o)+"px",Z(R-o<25?25:R-o))}},te=n.AH`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-bottom: 16px;
    background-color: var(--dwc-surface-1);
  `,re=n.AH`
    width: 100%;
    border: 1px solid var(--ifm-toc-border-color);
    border-right: none;
    background-color: transparent;
    display: flex;
    position: relative;
  `,ne=n.AH`
    min-height: 100px;
    height: 100%;
    width: 100%;
    height: ${w||"100%"};
    pointer-events: ${O?"none":"auto"};
  `,se=n.AH`
    display: flex;
    justify-content: flex-end;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
    ${z&&"opacity: 1;"};
    margin: 10px 0 0 0;
    position: absolute;
    right: 25px;
  `,le=n.AH`
    display: flex;
    align-items: center;
    cursor: ew-resize;
    border-left: 1px solid var(--ifm-toc-border-color);
    border-right: 1px solid var(--ifm-toc-border-color);
    background-color: var(--dwc-surface-3);
  `,ae=n.AH`
    box-shadow: none;
    background-color: var(--dwc-surface-3);
    margin: 0px;
    padding: 0px;
    border: ${"hidden"==v?"none":"1px solid var(--ifm-toc-border-color)"};
    border-top: none;
    border-radius: 0px;
    position: relative;

    div {
      border-color: var(--ifm-toc-border-color);
      padding: 2px 0px 0px 0px;
      margin: 0px;
    }

    > div:first-of-type {
      border: ${"hidden"==v?"1px solid var(--ifm-toc-border-color)":"none"};
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
  `,ie=n.AH`
    li[aria-selected="true"] {
      border-color: var(--ifm-color-primary);
    }

    .tabs__item {
      padding: 5px 20px -2px 20px;
      border-radius: 0px;
    }
  `,ce=n.AH`
    border-radius: 0px;
    box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 4px 0px inset;
  `;return(0,p.FD)("div",{css:te,onMouseUp:ee,onMouseLeave:ee,onMouseMove:oe,children:["hidden"!=v?(0,p.FD)("div",{onMouseEnter:()=>{L(!0)},onMouseLeave:()=>L(!1),css:re,children:[(0,p.Y)("iframe",{onMouseUp:ee,loading:"lazy",src:o+"&__theme__="+(0,m.G)().colorMode,css:ne,ref:Q,onMouseMove:oe}),(0,p.Y)("div",{css:se,ref:$,children:(0,p.Y)(x,{url:o})}),(0,p.Y)("div",{css:le,onMouseDown:e=>{e.preventDefault(),G(!0),J(e.clientX),W(Q.current?Q.current.offsetWidth:0),P(V)},children:(0,p.Y)(g.A,{})})]}):null,(0,p.FD)(c.A,{css:ae,summary:(0,p.Y)("summary",{onClick:()=>q(!K),children:K?"Hide Code":"Show Code"}),children:[t&&s?(0,p.Y)(f,{collapse:E,setCollapse:H}):null,u?(0,p.FD)(a.A,{css:ie,children:[(0,p.Y)(i.A,{value:j?j[0]:"Java",label:j?j[0]:M.javaFile,default:!0,children:(0,p.Y)(d.A,{css:ce,className:"codeDemoBlock",language:"java",showLineNumbers:!0,metastring:A,children:E?y:k})}),Object.keys(S).map(((e,o)=>(0,p.Y)(i.A,{value:e,label:e,children:_(S[e],ce,A)},"tab"+o))),(0,p.Y)(i.A,{value:j?j[1]:"CSS",label:j?j[1]:M.cssFile,children:(0,p.Y)(d.A,{css:ce,className:"codeDemoBlock",language:"css",showLineNumbers:!0,children:F})})]}):(0,p.FD)(a.A,{css:ie,children:[(0,p.Y)(i.A,{value:j?j[0]:"Java",label:j?j[0]:M.javaFile,default:!0,children:(0,p.Y)(d.A,{css:ce,className:"codeDemoBlock",language:"java",showLineNumbers:!0,metastring:A,children:E?y:k})}),Object.keys(S).map(((e,o)=>(0,p.Y)(i.A,{value:e,label:e,children:_(S[e],ce,A)},"tab"+o)))]})]})]})}},33235:(e,o,t)=>{t.d(o,{A:()=>c});var r=t(96540),n=t(17437),s=t(90276),l=t(50526),a=t(37785),i=t(2445);function c(e){let{type:o,location:t,top:c,children:d,code:h,suffix:u}=e;const[A,m]=(0,r.useState)(""),[g,p]=(0,r.useState)(!1);(0,r.useEffect)((()=>{document.querySelectorAll(".doc-chip").length>0?p(!0):p(!1)}),[]),(0,r.useEffect)((()=>{!async function(){const e=u||"",r="webforj_latest_version",n=localStorage.getItem(r),s=localStorage.getItem(`${r}_timestamp`);if(n&&s&&Date.now()-s<864e5){m(`https://javadoc.io/doc/com.webforj/webforj-${o}/${n}/${t}.html${e}`)}else try{const n=await fetch("https://api.github.com/repos/webforj/webforj/releases/latest");if(!n.ok)throw new Error(`GitHub API error: ${n.statusText}`);const s=(await n.json()).tag_name;console.log(s),localStorage.setItem(r,s),localStorage.setItem(`${r}_timestamp`,Date.now()),m(`https://javadoc.io/doc/com.webforj/webforj-${o}/${s}/${t}.html${e}`)}catch(l){console.error("Failed to fetch the latest version:",l),m(`https://javadoc.io/doc/com.webforj/webforj-${o}/latest/${t}.html${e}`)}}()}),[o,t,u]);const f=n.AH`
    ${e=>e&&n.AH`
        margin-bottom: 1em;
        margin-left: 0.5em;
        float: right;
        @media (max-width: 500px) {
          margin-bottom: 1em;
          float: none;
          margin-left: -0.25em;
        }
      `}
  `,x=n.AH`
    width: 100%;
    margin-bottom: 1em;
    display: flex;
    flex-direction: row-reverse;
  `,b=n.AH`
    background-color: var(--javadoclink-bg);
    color: var(--javadoclink-color);
    padding: 0 0 0 5px;
    :hover {
      background-color: var(--javadoclink-hover-bg);
      color: var(--javadoclink-hover-color);
    }
  `;return(0,i.FD)(i.FK,{children:["true"===c&&g&&(0,i.Y)(s.A,{title:"JavaDoc",arrow:!0,css:f,children:(0,i.Y)(l.A,{css:b,label:"Java API",component:"a",href:A,icon:(0,i.Y)(a.A,{}),clickable:!0,color:"primary",target:"_blank"})}),"true"===c&&!g&&(0,i.Y)("div",{css:x,children:(0,i.Y)(s.A,{title:"JavaDoc",arrow:!0,children:(0,i.Y)(l.A,{css:b,label:"Java API",component:"a",href:A,icon:(0,i.Y)(a.A,{}),clickable:!0,color:"primary",target:"_blank"})})}),"true"!==c&&!h&&(0,i.Y)("a",{href:A,target:"_blank",children:d}),"true"!==c&&h&&(0,i.Y)("code",{children:(0,i.Y)("a",{href:A,target:"_blank",children:d})})]})}},16999:(e,o,t)=>{t.d(o,{A:()=>s});t(96540);var r=t(14718),n=t(74848);function s(e){return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(r.A,{...e})})}}}]);