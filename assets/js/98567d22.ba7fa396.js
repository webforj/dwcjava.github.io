"use strict";(self.webpackChunkdwcj_documentation=self.webpackChunkdwcj_documentation||[]).push([[1432],{963:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>A,default:()=>c,frontMatter:()=>d,metadata:()=>r,toc:()=>i});var o=n(5893),s=n(1151);n(7294);const d={sidebar_position:2,title:"Github Codespaces"},A="DWCJ in Github Codespaces",r={id:"installation/github_codespaces",title:"Github Codespaces",description:"The DWCJ's Hello World Repository has been configured to run in Github Codespaces. Codespaces is a cloud-based development environment, and allows you to develop and run DWCJ applications directly within your browser. To start developing with this tool, follow the steps below:",source:"@site/docs/installation/github_codespaces.md",sourceDirName:"installation",slug:"/installation/github_codespaces",permalink:"/docs/installation/github_codespaces",draft:!1,unlisted:!1,editUrl:"https://github.com/DwcJava/dwcjava.github.io/tree/website/docs/installation/github_codespaces.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Github Codespaces"},sidebar:"documentationSidebar",previous:{title:"Docker",permalink:"/docs/installation/docker_user"},next:{title:"Local Installation",permalink:"/docs/installation/local_install"}},a={},i=[{value:"1. Navigate to the HelloWorldJava Repository",id:"1-navigate-to-the-helloworldjava-repository",level:2},{value:"2. Running Your Program",id:"2-running-your-program",level:2}];function l(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",img:"img",p:"p",strong:"strong",...(0,s.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"dwcj-in-github-codespaces",children:"DWCJ in Github Codespaces"}),"\n",(0,o.jsxs)(t.p,{children:["The DWCJ's ",(0,o.jsx)(t.a,{href:"https://github.com/DwcJava/HelloWorldJava",children:"Hello World Repository"})," has been configured to run in Github Codespaces. Codespaces is a cloud-based development environment, and allows you to develop and run DWCJ applications directly within your browser. To start developing with this tool, follow the steps below:"]}),"\n",(0,o.jsx)(t.h2,{id:"1-navigate-to-the-helloworldjava-repository",children:"1. Navigate to the HelloWorldJava Repository"}),"\n",(0,o.jsxs)(t.p,{children:["To start, you'll need to go to the HelloWorldJava repository, which can be found ",(0,o.jsx)(t.a,{href:"https://github.com/DwcJava/HelloWorldJava",children:"at this link"}),". Once there, click on the green ",(0,o.jsx)(t.strong,{children:'"Use this template"'})," button, and then the ",(0,o.jsx)(t.strong,{children:'"Open in a codespace"'})," option."]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"Codespace buttons",src:n(8635).Z+"",width:"484",height:"125"})}),"\n",(0,o.jsx)(t.h2,{id:"2-running-your-program",children:"2. Running Your Program"}),"\n",(0,o.jsx)(t.p,{children:'After waiting for the codespace to load, you should see a browser version of VS Studio Code open with the "HelloWorldJava" sample program loaded. From here, you can run the sample program, or start developing!'}),"\n",(0,o.jsxs)(t.p,{children:["To compile a program, open the terminal in VS Code and run the ",(0,o.jsx)(t.code,{children:"mvn install"})," command."]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"Maven Install",src:n(7043).Z+"",width:"572",height:"135"})}),"\n",(0,o.jsxs)(t.p,{children:["If everything completes successfully, you should see the ",(0,o.jsx)(t.code,{children:"BUILD SUCCESS"})," message."]}),"\n",(0,o.jsx)(t.admonition,{title:"WARNING",type:"danger",children:(0,o.jsxs)(t.p,{children:["Make sure to use the ",(0,o.jsx)(t.code,{children:"mvn install"})," command instead of VS Code's built-in Maven interface for installing your program."]})}),"\n",(0,o.jsxs)(t.p,{children:["Once this has been done, you'll need to navigate to a specific web address to see your program. To do this, first click on the ",(0,o.jsx)(t.strong,{children:'"Ports"'})," tab at the bottom of VS Code. Here, you will see two ports, 8888 and one other, listed."]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"Forwarded Ports",src:n(129).Z+"",width:"1263",height:"104"})}),"\n",(0,o.jsxs)(t.p,{children:["Click on the small ",(0,o.jsx)(t.strong,{children:'"Open in Browser"'})," button, resembling a globe, in the ",(0,o.jsx)(t.strong,{children:'"Local Address"'})," section of the ",(0,o.jsx)(t.strong,{children:"Ports"})," tab, which will open a new tab in your browser."]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"Browser Button",src:n(6089).Z+"",width:"577",height:"127"})}),"\n",(0,o.jsxs)(t.p,{children:["When the browser tab is open, you'll want to add to the end of the URL to ensure that your application is run. First, add a ",(0,o.jsx)(t.code,{children:"/webapp"})," to the end of the web address, which will end in ",(0,o.jsx)(t.code,{children:"github.dev"}),". After that, add the correct app and class name (if applicable) to show the desired application. To see how to properly configure the URL, ",(0,o.jsx)(t.a,{href:"/docs/getting_started/configuration",children:"follow this guide"}),"."]}),"\n",(0,o.jsxs)(t.admonition,{title:"Tip",type:"success",children:[(0,o.jsxs)(t.p,{children:['If you want to run the default "Hello World" program, simple add ',(0,o.jsx)(t.code,{children:"/hworld"})," after the ",(0,o.jsx)(t.code,{children:"/webapp"})," in the URL:"]}),(0,o.jsx)("br",{}),(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"Modified URL",src:n(4967).Z+"",width:"600",height:"193"})})]}),"\n",(0,o.jsx)(t.p,{children:"Once this is done, you should see your application running in the browser, and can modify it in the VS Code instance running within codespaces!"})]})}function c(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},8635:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/1-d12dac7d9fdd38c8e02ddb6e70c335e7.png"},7043:(e,t,n)=>{n.d(t,{Z:()=>o});const o="data:image/png;base64,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"},129:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/3-b7e8e4d3024a7fae16e2b5dfd6fa329a.png"},6089:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/4-6e59bfa7c3d30886d507366a6d9d2d75.png"},4967:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/5-f0eb2810f35d53b6c2d9ba33b5a2a945.png"}}]);