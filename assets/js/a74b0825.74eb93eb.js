"use strict";(self.webpackChunkdwcj_documentation=self.webpackChunkdwcj_documentation||[]).push([[3317],{8650:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>l,default:()=>c,frontMatter:()=>a,metadata:()=>s,toc:()=>d});var i=t(5893),o=t(1151);const a={sidebar_position:3},l="Local Installation",s={id:"installation/local_install",title:"Local Installation",description:"This section of the documentation will cover the steps required only for users who wish to use webforJ for web and/or application development with a local BBj instance on their machine. This installation will not allow users to contribute to the webforJ foundation code itself.",source:"@site/docs/installation/local_install.md",sourceDirName:"installation",slug:"/installation/local_install",permalink:"/docs/installation/local_install",draft:!1,unlisted:!1,editUrl:"https://github.com/webforj/webforj-docs/tree/website/docs/installation/local_install.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"documentationSidebar",previous:{title:"Github Codespaces",permalink:"/docs/installation/github_codespaces"},next:{title:"Getting Started",permalink:"/docs/category/getting-started"}},r={},d=[{value:"1. Java and Maven Download and Configuration",id:"1-java-and-maven-download-and-configuration",level:2},{value:"Java",id:"java",level:3},{value:"Maven",id:"maven",level:3},{value:"2. BBj Download and Installation",id:"2-bbj-download-and-installation",level:2},{value:"3. Install and Configure the webforJ Plugin",id:"3-install-and-configure-the-webforj-plugin",level:2},{value:"4. Clone the Repository",id:"4-clone-the-repository",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"local-installation",children:"Local Installation"}),"\n",(0,i.jsx)(n.p,{children:"This section of the documentation will cover the steps required only for users who wish to use webforJ for web and/or application development with a local BBj instance on their machine. This installation will not allow users to contribute to the webforJ foundation code itself."}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsx)(n.p,{children:"This walkthrough will cover installation on a Windows system - installation\r\nsteps may vary for Mac/Linux OS devices."})}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsx)(n.p,{children:"Installation will be broken down into the following steps:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Java and Maven download and configuration"}),"\n",(0,i.jsx)(n.li,{children:"BBj download and installation"}),"\n",(0,i.jsx)(n.li,{children:"Using the BBj Plugin Manager to create your application"}),"\n",(0,i.jsx)(n.li,{children:"Launching your application"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"1-java-and-maven-download-and-configuration",children:"1. Java and Maven Download and Configuration"}),"\n",(0,i.jsxs)(n.p,{children:["In order to use webforJ, you must first have Java and Maven installed and properly configured. If you already\r\nhave Java and Maven downloaded, please skip to ",(0,i.jsx)(n.a,{href:"#section2",children:(0,i.jsx)(n.strong,{children:"Step 2"})}),". If you also have\r\nBBj installed on your system, please skip to ",(0,i.jsx)(n.a,{href:"#section3",children:(0,i.jsx)(n.strong,{children:"Step 3"})}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"java",children:"Java"}),"\n",(0,i.jsxs)(n.p,{children:["Java ",(0,i.jsx)(n.strong,{children:"OpenJDK17"})," can be found ",(0,i.jsx)(n.a,{href:"https://adoptium.net/temurin/releases/",children:"by following this link"}),". It is recommended\r\nto allow the installation to handle setting the JAVA_HOME variable during installation, where applicable."]}),"\n",(0,i.jsx)(n.h3,{id:"maven",children:"Maven"}),"\n",(0,i.jsxs)(n.p,{children:["Maven should also be downloaded, and can be found ",(0,i.jsx)(n.a,{href:"https://maven.apache.org/download.cgi",children:"at this link"}),". It is\r\nrecommended to configure your system environment variables with Maven - a guide for installation and configuration\r\nfor Windows users can be found ",(0,i.jsx)(n.a,{href:"https://phoenixnap.com/kb/install-maven-windows",children:"here"}),"."]}),"\n",(0,i.jsx)("a",{name:"section2"}),"\n",(0,i.jsx)(n.h2,{id:"2-bbj-download-and-installation",children:"2. BBj Download and Installation"}),"\n",(0,i.jsx)("b",{children:"While following this step, be sure that you install the BBj version that corresponds to the same webforJ version. "}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https://www.youtube.com/watch?v=Ovk8kznQfGs&ab_channel=BBxCluesbyBASISEurope",children:"This video"})," can help with the installation of BBj if you need assistance with setup. The installation section of the BASIS website can be found ",(0,i.jsx)(n.a,{href:"https://basis.cloud/download-product",children:"at this link"})]}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsx)(n.p,{children:'It is recommended to use the latest stable revision build of BBj, and to select "BBj" from the list of options, without "Barista" or "Addon".'})}),"\n",(0,i.jsx)("a",{name:"section3"}),"\n",(0,i.jsx)(n.h2,{id:"3-install-and-configure-the-webforj-plugin",children:"3. Install and Configure the webforJ Plugin"}),"\n",(0,i.jsx)(n.p,{children:'Once BBj has been installed, we can access the Plugin Manager in order to install tools needed to configure webforJ. To start, type "Plugin Manager" into the start menu or Finder.'}),"\n",(0,i.jsx)(n.p,{children:'After the plugin manager has been opened, navigate to the "Available Plugins" tab towards the top.'}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Plugin manager configuration",src:t(8869).Z+"#rounded-border",width:"860",height:"481"})}),"\n",(0,i.jsx)(n.p,{children:'Once in this section, check the "Show versions under development" checkbox'}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Plugin manager configuration",src:t(4248).Z+"#rounded-border",width:"860",height:"481"})}),"\n",(0,i.jsx)(n.p,{children:"The DWCJ entry should now be visible in the list of available plugins for download. Click on this entry in the list to select it."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Plugin manager configuration",src:t(1256).Z+"#rounded-border",width:"860",height:"482"})}),"\n",(0,i.jsx)(n.p,{children:'With the DWCJ entry selected, click the "Install" button'}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Plugin manager configuration",src:t(2971).Z+"#rounded-border",width:"860",height:"481"})}),"\n",(0,i.jsx)(n.p,{children:'Once the plugin has finished installing, click on the "Installed Plugins" tab at the top.'}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Plugin manager configuration",src:t(6653).Z+"#rounded-border",width:"860",height:"481"})}),"\n",(0,i.jsx)(n.p,{children:"This tab displays installed plugins, which should now include the DWCJ entry. Click on the entry within the list."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Plugin manager configuration",src:t(4091).Z+"#rounded-border",width:"860",height:"482"})}),"\n",(0,i.jsx)(n.p,{children:'With the DWCJ entry selected, click the "Configure" button'}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Plugin manager configuration",src:t(2698).Z+"#rounded-border",width:"860",height:"481"})}),"\n",(0,i.jsx)(n.p,{children:'On the window that opens, click the "Enable Maven Remote Install" button at the bottom left of the window.'}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Plugin manager configuration",src:t(9056).Z+"#rounded-border",width:"860",height:"481"})}),"\n",(0,i.jsxs)(n.admonition,{type:"tip",children:[(0,i.jsx)(n.mdxAdmonitionTitle,{}),(0,i.jsxs)(n.p,{children:["Alternatively, navigate to the ",(0,i.jsx)(n.code,{children:"bin"})," directory within your ",(0,i.jsx)(n.code,{children:"bbx"})," folder and run the following command:"]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bbj",children:"./bbj -tIO DWCJ/cli.bbj - enable_remote_install\n"})})]}),"\n",(0,i.jsx)(n.p,{children:'A dialog should display that remote installation has been enabled. Click "OK" to close this dialog.'}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Plugin manager configuration",src:t(5568).Z+"#rounded-border",width:"860",height:"481"})}),"\n",(0,i.jsx)(n.h2,{id:"4-clone-the-repository",children:"4. Clone the Repository"}),"\n",(0,i.jsx)(n.p,{children:'Once BBj and the required webforJ plugin are installed and configured, we can clone the "Hello World" repository from the webforJ Github page. This project comes with the necessary tools to run your first webforJ program!'}),"\n",(0,i.jsxs)(n.p,{children:["To begin, navigate to the ",(0,i.jsx)(n.a,{href:"https://github.com/webforj/HelloWorldJava",children:"HelloWorldJava repository"})," and clone the project to your machine."]}),"\n",(0,i.jsxs)(n.p,{children:["Click on the Code button\r\n",(0,i.jsx)(n.img,{alt:"Plugin manager configuration",src:t(2367).Z+"#rounded-border",width:"860",height:"481"})]}),"\n",(0,i.jsxs)(n.p,{children:["Copy the repository URL to your clipboard to clone\r\n",(0,i.jsx)(n.img,{alt:"Plugin manager configuration",src:t(6742).Z+"#rounded-border",width:"860",height:"481"})]}),"\n",(0,i.jsx)(n.p,{children:"Once the project is cloned onto your machine, you can open it with your preferred IDE. Within your IDE, navigate to the pom.xml file that comes with the project. Within this file are various tags that can be modified to install your application to your own desired specifications."}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsx)(n.p,{children:"For first time users, it is recommended to use the default settings and avoid changing the pom.xml that comes with the project."})}),"\n",(0,i.jsx)(n.p,{children:"Proceed to open the folder in your preferred terminal, and run the following command:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"mvn install\n"})}),"\n",(0,i.jsx)(n.p,{children:"This will run the installation plugin which will do the work of setting your project up for you."}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsx)(n.p,{children:"If the above command does not work, check to make sure that your environment variables have been sufficiently edited to run Maven globally."})}),"\n",(0,i.jsx)(n.p,{children:"Once this process has been completed, you should be able to navigate top the following URL and see your program running:"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"http://localhost:8888/webapp/hworld"})})]})}function c(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},2367:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/Step_10l-6b1d8de5c5e198f3d2a07965c21fe4f6.png"},6742:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/Step_11l-b2adbd829e5cfbf7a6fe4151fa77d430.png"},8869:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/Step_1l-19709ebee6ee276de5a69ad2237e9689.png"},4248:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/Step_2l-e518ff3d82518ffbc0bc340e5108e50a.png"},1256:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/Step_3l-2a98b33653c801b6a4f47d465a57c27a.png"},2971:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/Step_4l-f989081ea92dd5438981302c75d6c04c.png"},6653:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/Step_5l-2289a87f44b53093330c3d059ab747fd.png"},4091:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/Step_6l-b25ded1a62416d83913e6bf2d09f8246.png"},2698:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/Step_7l-1d0aad35b79c9bd28686df0ae84fe696.png"},9056:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/Step_8l-a142ee65db4906b3be6ae72e212b2d3b.png"},5568:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/Step_9l-f08efe278cdb8b589d090a62eb1033ec.png"}}]);