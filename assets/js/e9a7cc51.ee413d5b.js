"use strict";(self.webpackChunkdwcj_documentation=self.webpackChunkdwcj_documentation||[]).push([[8741],{3742:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var o=n(70117),a=n(74848),r=n(28453),s=n(5943);const i={title:"Whats new in version 24.00?",description:"Get to know the features, fixes and functionality new in webforJ version 24.00.",slug:"whats-new-24.00",date:new Date("2024-04-08T00:00:00.000Z"),authors:"webforJ",tags:["webforJ","v24.00","release"],image:"https://documentation.webforj.com/release_blog/_images/24.00-social.png",hide_table_of_contents:!1},l="24.00",c={authorsImageUrls:[void 0]},d=[{value:"Table component",id:"table-component",level:2},{value:"Navigator component",id:"navigator-component",level:2},{value:"Splitter component",id:"splitter-component",level:2},{value:"Package renaming",id:"package-renaming",level:2}];function p(e){const t={a:"a",code:"code",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"cover image",src:n(93414).A+"",width:"1200",height:"630"})}),"\n",(0,a.jsxs)(t.p,{children:["webforj version ",(0,a.jsx)(t.code,{children:"24.00"})," is live and available for development. Learn more about what main features and fixes are included in this release."]}),"\n",(0,a.jsxs)(t.p,{children:["See the ",(0,a.jsx)(t.a,{href:"https://github.com/webforj/webforj/releases/tag/24.00",children:"GitHub release overview"})," for a more comprehensive list of changes."]}),"\n",(0,a.jsx)(t.h2,{id:"table-component",children:"Table component"}),"\n",(0,a.jsxs)(t.p,{children:["This release introduces a new ",(0,a.jsxs)(t.a,{href:"https://documentation.webforj.com/docs/components/table",children:[(0,a.jsx)(t.code,{children:"Table"})," component"]}),", allowing developers access to a lightweight, fast and optimized way to display their data."]}),"\n",(0,a.jsx)(s.A,{path:"https://demo.webforj.com/webapp/controlsamples/datatable?",javaE:"https://raw.githubusercontent.com/webforj/webforj-docs-samples/refs/heads/main/src/main/java/com/webforj/samples/views/table/DataTableView.java",urls:["https://raw.githubusercontent.com/webforj/webforj-docs-samples/refs/heads/main/src/main/java/com/webforj/samples/views/table/MusicRecord.java","https://raw.githubusercontent.com/webforj/webforj-docs-samples/refs/heads/main/src/main/java/com/webforj/samples/views/table/Service.java"],height:"600px"}),"\n",(0,a.jsx)(t.p,{children:"This table supports tons of modern features, some of which include:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"../docs/components/table/filtering",children:"Filtering"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"../docs/components/table/refreshing",children:"Editing"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"../docs/components/table/sorting",children:"Sorting"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"../docs/components/table/rendering",children:"Lodash rendering"})}),"\n"]}),"\n",(0,a.jsxs)(t.p,{children:["Using the ",(0,a.jsx)(t.code,{children:"Table"})," in your app is simple, and follows a few easy steps outlined in ",(0,a.jsx)(t.a,{href:"https://documentation.webforj.com/docs/components/table#creating-a-table",children:"this user guide article"}),"."]}),"\n",(0,a.jsx)(t.h2,{id:"navigator-component",children:"Navigator component"}),"\n",(0,a.jsx)(s.A,{path:"https://demo.webforj.com/webapp/controlsamples/navigatorpages?",javaE:"https://raw.githubusercontent.com/webforj/webforj-docs-samples/refs/heads/main/src/main/java/com/webforj/samples/views/navigator/NavigatorPagesView.java",height:"125px"}),"\n",(0,a.jsxs)(t.p,{children:["In addition to the ",(0,a.jsx)(t.code,{children:"Table"})," (and often in conjunction with), the new ",(0,a.jsx)(t.a,{href:"../docs/components/navigator",children:(0,a.jsx)(t.code,{children:"Navigator"})})," component is available to use in webforJ applications. Perfect for cases in which an app utilizes pagination, the customizable ",(0,a.jsx)(t.code,{children:"Navigator"})," is the perfect pick to allow users to interact with implemented pagination."]}),"\n",(0,a.jsxs)(t.p,{children:["It integrates nicely with the ",(0,a.jsx)(t.code,{children:"Repository"})," class, an object of which can be passed in the constructor to take care of binding as soon as the Navigator object is constructed."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-java",children:"Repository<ItemRecord> repository = Service.getItemRecords();\nNavigator nav = new Navigator(repository);\n"})}),"\n",(0,a.jsxs)(t.p,{children:["The ",(0,a.jsx)(t.code,{children:"Navigator"})," can be customized with various settings that configure the text, tooltips, buttons, layouts, and other aspects of the component's appearance. To see a list of these settings, as well as their options, ",(0,a.jsx)(t.a,{href:"https://documentation.webforj.com/docs/components/navigator#customizing-buttons-text-and-tooltips",children:"review the docs"})," for more details."]}),"\n",(0,a.jsx)(t.h2,{id:"splitter-component",children:"Splitter component"}),"\n",(0,a.jsx)(s.A,{path:"https://demo.webforj.com/webapp/controlsamples/splitterbasic?",javaE:"https://raw.githubusercontent.com/webforj/webforj-docs-samples/refs/heads/main/src/main/java/com/webforj/samples/views/splitter/SplitterBasicView.java",urls:["https://raw.githubusercontent.com/webforj/webforj-docs-samples/refs/heads/main/src/main/java/com/webforj/samples/components/SplitterBox.java"],height:"300px"}),"\n",(0,a.jsxs)(t.p,{children:["Rounding out the newly introduced components is the ",(0,a.jsx)(t.code,{children:"Splitter"}),", a tool that allows users to compartmentalize and dynamically resize your app. Whether dividing an entire page, or only a part of the app, the ",(0,a.jsx)(t.code,{children:"Splitter"})," is a great tool with many uses within all types of modern apps."]}),"\n",(0,a.jsxs)(t.p,{children:["Among the features included with this component is the ability to automatically save the layout configured by the user when an app is closed, so the splitter maintains its layout when the app is relaunched. Give it a try yourself over at ",(0,a.jsx)(t.a,{href:"https://documentation.webforj.com/docs/components/splitter#auto-save",children:"the docs article"})," which outlines this and many other features."]}),"\n",(0,a.jsx)(t.h2,{id:"package-renaming",children:"Package renaming"}),"\n",(0,a.jsxs)(t.p,{children:["Version ",(0,a.jsx)(t.code,{children:"24.00"}),", integrates the product's new official brand, webforJ, into the codebase. The previous alias, DWCJ, has been replaced within the framework's package structure. As a result, you need to update your import statements from org.dwcj to com.webforj when using webforJ. New code written shouldn't be affected by the change."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-java",children:"//For example:\nimport com.webforj.App;\nimport com.webforj.component.button.event.ButtonClickEvent;\nimport com.webforj.component.field.TextField;\nimport com.webforj.component.field.TextField.Type;\n"})})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},5943:(e,t,n)=>{n.d(t,{h:()=>w,A:()=>f});var o=n(96540),a=n(17437),r=n(5556),s=n.n(r),i=n(11470),l=n(19365),c=n(41622),d=n(61302);const p=n.p+"assets/images/expand-ba3f00f73da43d91e5b17663c4a7d108.png",h="data:image/png;base64,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",m="data:image/png;base64,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";var A=n(95293),u=n(52706),b=n(2445);function g(e){let{collapse:t,setCollapse:n}=e;g.propTypes={collapse:s().bool.isRequired,setCollapse:s().func.isRequired};const o=a.AH`
    display: flex;
    justify-content: end;
    align-items: flex-end;
    background-color: transparent;
    margin-bottom: -10px;
  `,r=a.AH`
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
  `,i=a.AH`
    filter: invert(var(--inversion-percentage));
  `;return(0,b.Y)("div",{css:o,children:(0,b.Y)("button",{css:r,onClick:()=>{n(!t)},children:t?(0,b.Y)("img",{alt:"collapse_button",css:i,src:p,className:"icon-tabler-arrow-bar-up"}):(0,b.Y)("img",{css:i,src:h,className:"icon-tabler-arrow-bar-down"})})})}function w(e){let{url:t}=e;const n=a.AH`
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
  `,o=a.AH`
    filter: invert(var(--inversion-percentage));
    ::before {
      mix-blend-mode: lighten;
      opacity: 0.5;
    }
  `;return(0,b.Y)("button",{css:n,onClick:()=>{window.open(t,"_blank")},children:(0,b.Y)("img",{css:o,src:m})})}function f(e){let{path:t,javaC:n,javaE:r,urls:p,cssURL:h,javaHighlight:m,height:v,frame:x,tabs:j}=e;f.propTypes={path:s().string.isRequired,javaC:s().string,javaE:s().string,urls:s().arrayOf(s().string),cssURL:s().string,javaHighlight:s().string,height:s().string,frame:s().string,tabs:s().arrayOf(s().string)};const[y,D]=(0,o.useState)(""),[B,k]=(0,o.useState)(""),[S,H]=(0,o.useState)({}),[Y,C]=(0,o.useState)(""),[L,E]=(0,o.useState)(!(!n||!r)),[F,J]=(0,o.useState)(!1),[N,M]=(0,o.useState)({}),[G,O]=(0,o.useState)(!1),[z,T]=(0,o.useState)(0),[X,W]=(0,o.useState)(0),[R,Z]=(0,o.useState)(25),[V,P]=(0,o.useState)(25),[U,K]=(0,o.useState)(0),[q,I]=(0,o.useState)(!1),Q=(0,o.useRef)(null),_=(0,o.useRef)(null);function $(e,t,n){return(0,b.Y)(d.A,{css:t,className:"codeDemoBlock",language:"java",showLineNumbers:!0,metastring:n,children:e.code})}(0,o.useEffect)((()=>{r&&fetch(r).then((e=>e.text())).then((e=>{k(e);const t=new URL(r).pathname.split("/"),n=t[t.length-1];M((e=>({...e,javaFile:n})))})),n&&fetch(n).then((e=>e.text())).then((e=>{D(e)})),h&&fetch(h).then((e=>e.text())).then((e=>{C(e);const t=new URL(h).pathname.split("/"),n=t[t.length-1];M((e=>({...e,cssFile:n})))})),p&&p.forEach((function(e){const t=new URL(e),n=t.pathname.split("/"),o=n[n.length-1];fetch(e).then((e=>e.text())).then((e=>{!function(e,t){H((n=>({...n,[e]:{fileName:e,code:t}})))}(o,e)}))})),K(Q.current?Q.current.offsetWidth:0)}),[]);const ee=()=>{O(!1)},te=e=>{if(G){const t=e.clientX-z;X+t>U/3&&(Q.current.style.width=`${X+t}px`,_.current.style.right=(R-t<25?25:R-t)+"px",P(R-t<25?25:R-t))}},ne=a.AH`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-bottom: 16px;
    background-color: var(--dwc-surface-1);
  `,oe=a.AH`
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
    height: ${v||"100%"};
    pointer-events: ${G?"none":"auto"};
  `,re=a.AH`
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
  `,ie=a.AH`
    box-shadow: none;
    background-color: var(--dwc-surface-3);
    margin: 0px;
    padding: 0px;
    border: ${"hidden"==x?"none":"1px solid var(--ifm-toc-border-color)"};
    border-top: none;
    border-radius: 0px;
    position: relative;

    div {
      border-color: var(--ifm-toc-border-color);
      padding: 2px 0px 0px 0px;
      margin: 0px;
    }

    > div:first-of-type {
      border: ${"hidden"==x?"1px solid var(--ifm-toc-border-color)":"none"};
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
  `,ce=a.AH`
    border-radius: 0px;
    box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 4px 0px inset;
  `;return(0,b.FD)("div",{css:ne,onMouseUp:ee,onMouseLeave:ee,onMouseMove:te,children:["hidden"!=x?(0,b.FD)("div",{onMouseEnter:()=>{J(!0)},onMouseLeave:()=>J(!1),css:oe,children:[(0,b.Y)("iframe",{onMouseUp:ee,loading:"lazy",src:t+"&__theme__="+(0,A.G)().colorMode,css:ae,ref:Q,onMouseMove:te}),(0,b.Y)("div",{css:re,ref:_,children:(0,b.Y)(w,{url:t})}),(0,b.Y)("div",{css:se,onMouseDown:e=>{e.preventDefault(),O(!0),T(e.clientX),W(Q.current?Q.current.offsetWidth:0),Z(V)},children:(0,b.Y)(u.A,{})})]}):null,(0,b.FD)(c.A,{css:ie,summary:(0,b.Y)("summary",{onClick:()=>I(!q),children:q?"Hide Code":"Show Code"}),children:[n&&r?(0,b.Y)(g,{collapse:L,setCollapse:E}):null,h?(0,b.FD)(i.A,{css:le,children:[(0,b.Y)(l.A,{value:j?j[0]:"Java",label:j?j[0]:N.javaFile,default:!0,children:(0,b.Y)(d.A,{css:ce,className:"codeDemoBlock",language:"java",showLineNumbers:!0,metastring:m,children:L?y:B})}),Object.keys(S).map(((e,t)=>(0,b.Y)(l.A,{value:e,label:e,children:$(S[e],ce,m)},"tab"+t))),(0,b.Y)(l.A,{value:j?j[1]:"CSS",label:j?j[1]:N.cssFile,children:(0,b.Y)(d.A,{css:ce,className:"codeDemoBlock",language:"css",showLineNumbers:!0,children:Y})})]}):(0,b.FD)(i.A,{css:le,children:[(0,b.Y)(l.A,{value:j?j[0]:"Java",label:j?j[0]:N.javaFile,default:!0,children:(0,b.Y)(d.A,{css:ce,className:"codeDemoBlock",language:"java",showLineNumbers:!0,metastring:m,children:L?y:B})}),Object.keys(S).map(((e,t)=>(0,b.Y)(l.A,{value:e,label:e,children:$(S[e],ce,m)},"tab"+t)))]})]})]})}},16999:(e,t,n)=>{n.d(t,{A:()=>r});n(96540);var o=n(14718),a=n(74848);function r(e){return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(o.A,{...e})})}},93414:(e,t,n)=>{n.d(t,{A:()=>o});const o=n.p+"assets/images/24.00-6276bd6dfe642e375fac78b946e5b579.png"},70117:e=>{e.exports=JSON.parse('{"permalink":"/blog/whats-new-24.00","source":"@site/blog/2024-04-08-webforj-v24.00/24.00.md","title":"Whats new in version 24.00?","description":"Get to know the features, fixes and functionality new in webforJ version 24.00.","date":"2024-04-08T00:00:00.000Z","tags":[{"inline":true,"label":"webforJ","permalink":"/blog/tags/webfor-j"},{"inline":true,"label":"v24.00","permalink":"/blog/tags/v-24-00"},{"inline":true,"label":"release","permalink":"/blog/tags/release"}],"readingTime":2.14,"hasTruncateMarker":true,"authors":[{"name":"webforJ Team","url":"https://github.com/webforj","title":"webforJ Development Team","imageURL":"/img/webforj_icon.svg","key":"webforJ","page":null}],"frontMatter":{"title":"Whats new in version 24.00?","description":"Get to know the features, fixes and functionality new in webforJ version 24.00.","slug":"whats-new-24.00","date":"2024-04-08T00:00:00.000Z","authors":"webforJ","tags":["webforJ","v24.00","release"],"image":"https://documentation.webforj.com/release_blog/_images/24.00-social.png","hide_table_of_contents":false},"unlisted":false,"prevItem":{"title":"Whats new in version 24.01?","permalink":"/blog/whats-new-24.01"}}')}}]);