"use strict";(self.webpackChunkdwcj_documentation=self.webpackChunkdwcj_documentation||[]).push([[7327],{16687:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>r,toc:()=>d});var r=n(25496),s=n(74848),i=n(28453),a=n(5943);const o={title:"Whats new in version 24.02?",description:"Get to know the features, fixes and functionality new in webforJ version 24.02.",slug:"whats-new-24.02",date:new Date("2024-06-03T00:00:00.000Z"),authors:[{name:"webforJ Team",url:"https://github.com/webforj",image_url:"/img/webforj_icon.svg"}],tags:["webforJ","v24.02","release"],image:"https://documentation.webforj.com/release_blog/_images/24.02-social.png",hide_table_of_contents:!1},l="24.02",c={authorsImageUrls:[void 0]},d=[{value:"Option dialogs",id:"option-dialogs",level:2},{value:"Progress bar overhaul",id:"progress-bar-overhaul",level:2},{value:"Interval",id:"interval",level:2}];function h(e){const t={a:"a",code:"code",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"cover image",src:n(39700).A+"",width:"1200",height:"630"})}),"\n",(0,s.jsx)(t.p,{children:"webforj version 24.02 is live and available for development. Learn more about what main features and fixes are included in this release."}),"\n",(0,s.jsxs)(t.p,{children:["As always, see the ",(0,s.jsx)(t.a,{href:"https://github.com/webforj/webforj/releases/tag/24.01",children:"GitHub release overview"})," for a more comprehensive list of changes."]}),"\n",(0,s.jsx)(t.h2,{id:"option-dialogs",children:"Option dialogs"}),"\n",(0,s.jsx)(a.A,{path:"https://demo.webforj.com/webapp/controlsamples/confirmdialogconstructor?",javaE:"https://raw.githubusercontent.com/webforj/webforj-docs-samples/refs/heads/main/src/main/java/com/webforj/samples/views/optiondialog/confirm/ConfirmDialogConstructorView.java",height:"350px"}),"\n",(0,s.jsxs)(t.p,{children:["With 24.02, webforJ introduces a robust option dialog feature that allows applications to interact with users and gather input effectively. These dialogs are modal, meaning they halt app execution until the user provides input, ensuring critical messages are addressed before proceeding. These function similarly to ",(0,s.jsx)(t.code,{children:"JOptionPane"})," in Swing, addressing the need for blocking dialogs in web applications."]}),"\n",(0,s.jsx)(t.p,{children:"There are multiple types of these dialogs:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.code,{children:"Message"})}),": Display informative messages to users."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.code,{children:"Confirm"})}),": Request user confirmation for specific actions."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.code,{children:"Input"})}),": Gather textual input from users."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.code,{children:"File Chooser"})}),": Allow users to select files from their system."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.code,{children:"File Upload"})}),": Enable users to upload files directly."]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"The various dialog options are provided to help clarify and specify the type of interaction users should take throughout navigation of an app."}),"\n",(0,s.jsx)(t.h2,{id:"progress-bar-overhaul",children:"Progress bar overhaul"}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"ProgressBar"})," in 24.02 has gotten a powerful, comprehensive overhaul. This component provides a visual representation of task progress, making it easy for users to monitor the completion status of ongoing tasks. The progress bar fills up as the task progresses, displaying the percentage of completion both visually and textually."]}),"\n",(0,s.jsx)(a.A,{path:"https://demo.webforj.com/webapp/controlsamples/progressbarbasic?",javaE:"https://raw.githubusercontent.com/webforj/webforj-docs-samples/refs/heads/main/src/main/java/com/webforj/samples/views/progressbar/ProgressBarBasicView.java",height:"150px"}),"\n",(0,s.jsxs)(t.p,{children:["The following key features are included in the ",(0,s.jsx)(t.code,{children:"ProgressBar"})," out of the box:"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Configurable Values"}),": Supports setting and getting current, minimum, and maximum values to accurately represent task progress."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Indeterminate Mode"}),": Allows for an indeterminate state to indicate ongoing tasks without a definite end."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Text Visibility"}),": Options to display the percentage of completion or the raw value as text."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Orientation Support"}),": The ",(0,s.jsx)(t.code,{children:"ProgressBar"})," can be oriented either horizontally or vertically, providing flexibility in how it is displayed in your app."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Styling Options"}),": Includes themes, animation, and striped designs for enhanced visual feedback."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"ProgressBar"})," component is highly versatile and can be used to visualize the completion status of various tasks. It allows configuration of minimum and maximum values, making it adaptable to different use cases."]}),"\n",(0,s.jsx)(t.h2,{id:"interval",children:"Interval"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"24.02"})," introduces ",(0,s.jsx)(t.code,{children:"Interval"})," capability in webforJ, providing a mechanism similar to the Swing ",(0,s.jsx)(t.code,{children:"Timer"}),", which offers a way to execute code at fixed time intervals. This feature is essential for tasks that need periodic execution, such as updating UI elements, performing background operations, or polling for data."]}),"\n",(0,s.jsxs)(t.p,{children:["In the above ",(0,s.jsx)(t.code,{children:"ProgressBar"})," the start, pause and restart features were all implemented via webforJ's ",(0,s.jsx)(t.code,{children:"Interval"})," class. In addition to these functions, it also allows developers to specify a timeout value in seconds, supporting fractional seconds for precise timing. For tasks with unknown completion times, the ",(0,s.jsx)(t.code,{children:"Interval"})," can be set to an indeterminate state, allowing it to keep running until explicitly stopped."]}),"\n",(0,s.jsx)(t.p,{children:"To create, start, stop, and then restart an interval, the following code can be executed:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-java",children:'// Create a new Interval with a delay of 2.5 seconds\nInterval interval = new Interval(2.5f, event -> {\n    System.out.println("Interval elapsed!");\n});\n\n// Start the interval\ninterval.start();\n\n// Stop the interval\ninterval.stop();\n\n// Restart the interval\ninterval.restart();\n'})}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"Interval"})," helps manage periodic tasks - its ability to handle fixed time delays, support multiple event listeners, and provide robust performance makes it an essential feature for developers looking to implement timed events efficiently."]})]})}function p(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},5943:(e,t,n)=>{n.d(t,{h:()=>b,A:()=>v});var r=n(96540),s=n(17437),i=n(5556),a=n.n(i),o=n(11470),l=n(19365),c=n(41622),d=n(61302);const h=n.p+"assets/images/expand-ba3f00f73da43d91e5b17663c4a7d108.png",p="data:image/png;base64,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",u="data:image/png;base64,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";var g=n(95293),A=n(52706),m=n(2445);function f(e){let{collapse:t,setCollapse:n}=e;f.propTypes={collapse:a().bool.isRequired,setCollapse:a().func.isRequired};const r=s.AH`
    display: flex;
    justify-content: end;
    align-items: flex-end;
    background-color: transparent;
    margin-bottom: -10px;
  `,i=s.AH`
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
  `,o=s.AH`
    filter: invert(var(--inversion-percentage));
  `;return(0,m.Y)("div",{css:r,children:(0,m.Y)("button",{css:i,onClick:()=>{n(!t)},children:t?(0,m.Y)("img",{alt:"collapse_button",css:o,src:h,className:"icon-tabler-arrow-bar-up"}):(0,m.Y)("img",{css:o,src:p,className:"icon-tabler-arrow-bar-down"})})})}function b(e){let{url:t}=e;const n=s.AH`
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
  `,r=s.AH`
    filter: invert(var(--inversion-percentage));
    ::before {
      mix-blend-mode: lighten;
      opacity: 0.5;
    }
  `;return(0,m.Y)("button",{css:n,onClick:()=>{window.open(t,"_blank")},children:(0,m.Y)("img",{css:r,src:u})})}function v(e){let{path:t,javaC:n,javaE:i,urls:h,cssURL:p,javaHighlight:u,height:w,frame:x,tabs:j}=e;v.propTypes={path:a().string.isRequired,javaC:a().string,javaE:a().string,urls:a().arrayOf(a().string),cssURL:a().string,javaHighlight:a().string,height:a().string,frame:a().string,tabs:a().arrayOf(a().string)};const[y,B]=(0,r.useState)(""),[D,k]=(0,r.useState)(""),[S,C]=(0,r.useState)({}),[H,Y]=(0,r.useState)(""),[L,E]=(0,r.useState)(!(!n||!i)),[F,O]=(0,r.useState)(!1),[J,M]=(0,r.useState)({}),[G,T]=(0,r.useState)(!1),[X,z]=(0,r.useState)(0),[N,W]=(0,r.useState)(0),[Z,P]=(0,r.useState)(25),[R,V]=(0,r.useState)(25),[I,U]=(0,r.useState)(0),[K,q]=(0,r.useState)(!1),Q=(0,r.useRef)(null),_=(0,r.useRef)(null);function $(e,t,n){return(0,m.Y)(d.A,{css:t,className:"codeDemoBlock",language:"java",showLineNumbers:!0,metastring:n,children:e.code})}(0,r.useEffect)((()=>{i&&fetch(i).then((e=>e.text())).then((e=>{k(e);const t=new URL(i).pathname.split("/"),n=t[t.length-1];M((e=>({...e,javaFile:n})))})),n&&fetch(n).then((e=>e.text())).then((e=>{B(e)})),p&&fetch(p).then((e=>e.text())).then((e=>{Y(e);const t=new URL(p).pathname.split("/"),n=t[t.length-1];M((e=>({...e,cssFile:n})))})),h&&h.forEach((function(e){const t=new URL(e),n=t.pathname.split("/"),r=n[n.length-1];fetch(e).then((e=>e.text())).then((e=>{!function(e,t){C((n=>({...n,[e]:{fileName:e,code:t}})))}(r,e)}))})),U(Q.current?Q.current.offsetWidth:0)}),[]);const ee=()=>{T(!1)},te=e=>{if(G){const t=e.clientX-X;N+t>I/3&&(Q.current.style.width=`${N+t}px`,_.current.style.right=(Z-t<25?25:Z-t)+"px",V(Z-t<25?25:Z-t))}},ne=s.AH`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-bottom: 16px;
    background-color: var(--dwc-surface-1);
  `,re=s.AH`
    width: 100%;
    border: 1px solid var(--ifm-toc-border-color);
    border-right: none;
    background-color: transparent;
    display: flex;
    position: relative;
  `,se=s.AH`
    min-height: 100px;
    height: 100%;
    width: 100%;
    height: ${w||"100%"};
    pointer-events: ${G?"none":"auto"};
  `,ie=s.AH`
    display: flex;
    justify-content: flex-end;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
    ${F&&"opacity: 1;"};
    margin: 10px 0 0 0;
    position: absolute;
    right: 25px;
  `,ae=s.AH`
    display: flex;
    align-items: center;
    cursor: ew-resize;
    border-left: 1px solid var(--ifm-toc-border-color);
    border-right: 1px solid var(--ifm-toc-border-color);
    background-color: var(--dwc-surface-3);
  `,oe=s.AH`
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
  `,le=s.AH`
    li[aria-selected="true"] {
      border-color: var(--ifm-color-primary);
    }

    .tabs__item {
      padding: 5px 20px -2px 20px;
      border-radius: 0px;
    }
  `,ce=s.AH`
    border-radius: 0px;
    box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 4px 0px inset;
  `;return(0,m.FD)("div",{css:ne,onMouseUp:ee,onMouseLeave:ee,onMouseMove:te,children:["hidden"!=x?(0,m.FD)("div",{onMouseEnter:()=>{O(!0)},onMouseLeave:()=>O(!1),css:re,children:[(0,m.Y)("iframe",{onMouseUp:ee,loading:"lazy",src:t+"&__theme__="+(0,g.G)().colorMode,css:se,ref:Q,onMouseMove:te}),(0,m.Y)("div",{css:ie,ref:_,children:(0,m.Y)(b,{url:t})}),(0,m.Y)("div",{css:ae,onMouseDown:e=>{e.preventDefault(),T(!0),z(e.clientX),W(Q.current?Q.current.offsetWidth:0),P(R)},children:(0,m.Y)(A.A,{})})]}):null,(0,m.FD)(c.A,{css:oe,summary:(0,m.Y)("summary",{onClick:()=>q(!K),children:K?"Hide Code":"Show Code"}),children:[n&&i?(0,m.Y)(f,{collapse:L,setCollapse:E}):null,p?(0,m.FD)(o.A,{css:le,children:[(0,m.Y)(l.A,{value:j?j[0]:"Java",label:j?j[0]:J.javaFile,default:!0,children:(0,m.Y)(d.A,{css:ce,className:"codeDemoBlock",language:"java",showLineNumbers:!0,metastring:u,children:L?y:D})}),Object.keys(S).map(((e,t)=>(0,m.Y)(l.A,{value:e,label:e,children:$(S[e],ce,u)},"tab"+t))),(0,m.Y)(l.A,{value:j?j[1]:"CSS",label:j?j[1]:J.cssFile,children:(0,m.Y)(d.A,{css:ce,className:"codeDemoBlock",language:"css",showLineNumbers:!0,children:H})})]}):(0,m.FD)(o.A,{css:le,children:[(0,m.Y)(l.A,{value:j?j[0]:"Java",label:j?j[0]:J.javaFile,default:!0,children:(0,m.Y)(d.A,{css:ce,className:"codeDemoBlock",language:"java",showLineNumbers:!0,metastring:u,children:L?y:D})}),Object.keys(S).map(((e,t)=>(0,m.Y)(l.A,{value:e,label:e,children:$(S[e],ce,u)},"tab"+t)))]})]})]})}},16999:(e,t,n)=>{n.d(t,{A:()=>i});n(96540);var r=n(14718),s=n(74848);function i(e){return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(r.A,{...e})})}},39700:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/24.02-d13a125f23cbe488e69d2f2b9ca91700.png"},25496:e=>{e.exports=JSON.parse('{"permalink":"/blog/whats-new-24.02","source":"@site/blog/2024-06-03-webforj-v24.02/24.02.md","title":"Whats new in version 24.02?","description":"Get to know the features, fixes and functionality new in webforJ version 24.02.","date":"2024-06-03T00:00:00.000Z","tags":[{"inline":true,"label":"webforJ","permalink":"/blog/tags/webfor-j"},{"inline":true,"label":"v24.02","permalink":"/blog/tags/v-24-02"},{"inline":true,"label":"release","permalink":"/blog/tags/release"}],"readingTime":2.895,"hasTruncateMarker":true,"authors":[{"name":"webforJ Team","url":"https://github.com/webforj","image_url":"/img/webforj_icon.svg","imageURL":"/img/webforj_icon.svg","socials":{},"key":null,"page":null}],"frontMatter":{"title":"Whats new in version 24.02?","description":"Get to know the features, fixes and functionality new in webforJ version 24.02.","slug":"whats-new-24.02","date":"2024-06-03T00:00:00.000Z","authors":[{"name":"webforJ Team","url":"https://github.com/webforj","image_url":"/img/webforj_icon.svg","imageURL":"/img/webforj_icon.svg"}],"tags":["webforJ","v24.02","release"],"image":"https://documentation.webforj.com/release_blog/_images/24.02-social.png","hide_table_of_contents":false},"unlisted":false,"prevItem":{"title":"What\'s new in version 24.10?","permalink":"/blog/whats-new-24.10"},"nextItem":{"title":"Whats new in version 24.01?","permalink":"/blog/whats-new-24.01"}}')}}]);