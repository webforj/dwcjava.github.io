"use strict";(self.webpackChunkdwcj_documentation=self.webpackChunkdwcj_documentation||[]).push([[815],{9201:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>r,contentTitle:()=>a,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var t=i(5893),s=i(1151);const o={sidebar_position:1,displayed_sidebar:"documentationSidebar"},a="Configuration",l={id:"getting_started/configuration",title:"Configuration",description:"Webforj can be configured using a project's POM file, and a plugin designed to make deploying an application easy. The following sections outline the various options that can be changed in order to achieve the desired result, both with an without the provided Webforj installation plugin.",source:"@site/docs/getting_started/configuration.md",sourceDirName:"getting_started",slug:"/getting_started/configuration",permalink:"/docs/getting_started/configuration",draft:!1,unlisted:!1,editUrl:"https://github.com/webforj/dwcjava.github.io/tree/website/docs/getting_started/configuration.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,displayed_sidebar:"documentationSidebar"},sidebar:"documentationSidebar",previous:{title:"Getting Started",permalink:"/docs/category/getting-started"},next:{title:"Creating an Application",permalink:"/docs/getting_started/creating_an_application"}},r={},d=[{value:"Using the Install Plugin",id:"using-the-install-plugin",level:2},{value:"Running a Specific Application",id:"running-a-specific-application",level:3},{value:"Without the Install Plugin",id:"without-the-install-plugin",level:2},{value:"Default Class",id:"default-class",level:3},{value:"Editing the BBj config file",id:"editing-the-bbj-config-file",level:4},{value:"Using the Enterprise Manager",id:"using-the-enterprise-manager",level:4},{value:"Debug Mode",id:"debug-mode",level:3}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"configuration",children:"Configuration"}),"\n",(0,t.jsx)(n.p,{children:"Webforj can be configured using a project's POM file, and a plugin designed to make deploying an application easy. The following sections outline the various options that can be changed in order to achieve the desired result, both with an without the provided Webforj installation plugin."}),"\n",(0,t.jsx)(n.h2,{id:"using-the-install-plugin",children:"Using the Install Plugin"}),"\n",(0,t.jsx)(n.admonition,{title:"Tip!",type:"success",children:(0,t.jsx)(n.p,{children:"For most users, especially those who have followed one of the installation guides on this site, this will be the best option."})}),"\n",(0,t.jsxs)(n.p,{children:["When using the installation plugin, the tags within the ",(0,t.jsx)(n.code,{children:"<configuration>"})," tag can be changed and will help configure your application. Editing the following lines in the default POM file that comes with the ",(0,t.jsx)(n.a,{href:"https://github.com/webforj/HelloWorldJava",children:(0,t.jsx)(n.code,{children:"HelloWorldJava"})})," starting repository will result in these changes:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-xml",metastring:"{13-16} showLineNumbers",children:"<plugin>\r\n    <groupId>com.webforj</groupId>\r\n    <artifactId>webforj-install-maven-plugin</artifactId>\r\n    <version>${webforj.version}</version>\r\n    <executions>\r\n        <execution>\r\n            <goals>\r\n                <goal>install</goal>\r\n            </goals>\r\n    </execution>\r\n    </executions>\r\n    <configuration>\r\n        <deployurl>http://localhost:8888/webforj-install</deployurl>\r\n        <classname>samples.HelloWorldApp</classname>\r\n        <publishname>hello-world</publishname>\r\n        <debug>true</debug>\r\n    </configuration>\r\n</plugin>\n"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"<deployurl>"})}),": This tag is the URL under which the Webforj endpoint for the project installation can be reached. For users running their application locally, a default port 8888 is used. For users running Docker, the port should be changed to the port that was entered when ",(0,t.jsx)(n.a,{href:"/docs/installation/docker_user#2-configuration",children:"configuring the Docker container"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"<classname>"})})," This tag should contain the name of package and class name of the application you wish to run. This is helpful for projects which may contain multiple classes that extend the ",(0,t.jsx)(n.code,{children:"App"})," class, and allows you to choose which program should run when the base URL is navigated to."]}),"\n",(0,t.jsxs)(n.ol,{start:"2",children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"<publishname>"})})," This tag specifies what name the program will take in the final URL. Generally, to run your program, you'll enter a URL similar to ",(0,t.jsx)(n.code,{children:"http://localhost:8888/webapp/<publishname>"}),", where the value within the ",(0,t.jsx)(n.code,{children:"<publishname>"})," tag is entered. When this is done, the class extending application specified in the ",(0,t.jsx)(n.code,{children:"<classname>"})," tag is run."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"<debug>"})})," The debug tag can be set to true or false, and will determine whether or not error messages thrown by your program will be displayed in the browser's console or not."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"running-a-specific-application",children:"Running a Specific Application"}),"\n",(0,t.jsx)(n.p,{children:"It is possible to specify which class that extends App within your project is displayed by modifying the URL in one of the following ways -"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"1. Modify the URL Path"})," - If your application is running on ",(0,t.jsx)(n.code,{children:"localhost:8888"}),", the publish name is ",(0,t.jsx)(n.code,{children:"MyProgram"})," and the Java class that extends the ",(0,t.jsx)(n.code,{children:"App"})," class you want to run is named ",(0,t.jsx)(n.code,{children:"MyApp"}),", the URL would look as follows:"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"http://localhost:8888/webapp/MyProgram/MyApp"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"2. Using Query Parameters"})," - The same result can be achieved using query parameters. Taking the same example, with ",(0,t.jsx)(n.code,{children:"localhost:8888"})," as the port, ",(0,t.jsx)(n.code,{children:"MyProgram"})," as the publish name and ",(0,t.jsx)(n.code,{children:"apps.MyApp"})," as the full name of the class to run, the URL would be:"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"http://localhost:8888/webapp/yourAppName?class=apps.MyApp"})}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsx)(n.p,{children:"When using the query parameter method, it is important to include the full name of the desired class, including package names."})}),"\n",(0,t.jsx)(n.h2,{id:"without-the-install-plugin",children:"Without the Install Plugin"}),"\n",(0,t.jsx)(n.admonition,{type:"warning",children:(0,t.jsx)(n.p,{children:"This is not the recommended method of configuring your application, and should be used only if needed."})}),"\n",(0,t.jsx)(n.h3,{id:"default-class",children:"Default Class"}),"\n",(0,t.jsxs)(n.p,{children:["It is possible to configure the Webforj to automatically load an application from the list of available applications that extend the ",(0,t.jsx)(n.code,{children:"App"})," class."]}),"\n",(0,t.jsx)(n.h4,{id:"editing-the-bbj-config-file",children:"Editing the BBj config file"}),"\n",(0,t.jsxs)(n.p,{children:["The second option is to open your config.bbx file, and set the classname within the file itself. This file is found in the cfg directory of your BBj installation, ",(0,t.jsx)(n.code,{children:"C:\\bbx\\cfg\\config.bbx"})," for example. To do so, add the following line and replace ",(0,t.jsx)("b",{children:"your.class.name.here"})," with the full classname as it appears on the list of classes:"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"SET DWCJCLASSNAME=your.class.name.here"})}),"\n",(0,t.jsx)(n.h4,{id:"using-the-enterprise-manager",children:"Using the Enterprise Manager"}),"\n",(0,t.jsx)(n.p,{children:"Finally, you can set the default class within the Enterprise Manager by adding the following line as a program argument within your Application:"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"class=your.class.name.here"})}),"\n",(0,t.jsxs)(n.p,{children:["Replace ",(0,t.jsx)("b",{children:"your.class.name.here"})," with the full class name of your App (implementing ",(0,t.jsx)(n.a,{href:"https://javadoc.io/doc/org.dwcj/dwcj-engine/latest/org/dwcj/App.html",children:"org.dwcj.engine.App"}),"), as it appears on the list of classes on the welcome page."]}),"\n",(0,t.jsx)(n.p,{children:"Once any of these options have been completed, the specified class will always load instead of displaying a list of available classes."}),"\n",(0,t.jsx)("br",{}),"\n",(0,t.jsx)(n.h3,{id:"debug-mode",children:"Debug Mode"}),"\n",(0,t.jsx)(n.p,{children:"It's also possible to run your application in debug mode, which will allow comprehensive error messages to be printed to the console."}),"\n",(0,t.jsxs)(n.p,{children:["The first option is to change the config.bbx file, found in the cfg directory of your BBj installation, ",(0,t.jsx)(n.code,{children:"C:\\bbx\\cfg\\config.bbx"})," for example. Add the line ",(0,t.jsx)(n.code,{children:"SET DEBUG=1"})," to the file and save your changes."]}),"\n",(0,t.jsx)(n.p,{children:"Additionally, in the Enterprise Manager, you can add the following as a program argument:"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"DEBUG"})}),"\n",(0,t.jsx)(n.p,{children:"Completing either of these will allow error messages to be printed to the browser console."})]})}function c(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}}}]);