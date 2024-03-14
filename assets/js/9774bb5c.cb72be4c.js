"use strict";(self.webpackChunkdwcj_documentation=self.webpackChunkdwcj_documentation||[]).push([[8524],{6822:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var a=t(5893),i=t(1151);const o={sidebar_position:2,displayed_sidebar:"documentationSidebar"},r="Creating an Application",c={id:"getting_started/creating_an_application",title:"Creating an Application",description:'Once Webforj and all applicable dependencies have been installed and the POM configuration has been completed, it\'s time to start creating! If you followed the installation guide, a sample "Hello World" program should be included already. However, in this section, a demonstration of how to create a new application from scratch will be provided.',source:"@site/docs/getting_started/creating_an_application.md",sourceDirName:"getting_started",slug:"/getting_started/creating_an_application",permalink:"/docs/getting_started/creating_an_application",draft:!1,unlisted:!1,editUrl:"https://github.com/webforj/dwcjava.github.io/tree/website/docs/getting_started/creating_an_application.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,displayed_sidebar:"documentationSidebar"},sidebar:"documentationSidebar",previous:{title:"Configuration",permalink:"/docs/getting_started/configuration"},next:{title:"Hello World",permalink:"/docs/getting_started/Templates/hello_world"}},s={},l=[{value:"Start a new Application",id:"start-a-new-application",level:2},{value:"Create a Java Class",id:"create-a-java-class",level:3},{value:"Extend the <code>App</code> class",id:"extend-the-app-class",level:3},{value:"Override the <code>run()</code> method",id:"override-the-run-method",level:3},{value:"Create the main <code>Frame</code>",id:"create-the-main-frame",level:3},{value:"Customizing your Application",id:"customizing-your-application",level:2},{value:"App Data",id:"app-data",level:3}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"creating-an-application",children:"Creating an Application"}),"\n",(0,a.jsxs)(n.p,{children:['Once Webforj and all applicable dependencies have been installed and the POM configuration has been completed, it\'s time to start creating! If you followed the installation guide, a sample "Hello World" program should be included already. However, in this section, a demonstration of how to create ',(0,a.jsx)(n.strong,{children:"a new application from scratch"})," will be provided."]}),"\n",(0,a.jsx)(n.admonition,{type:"tip",children:(0,a.jsxs)(n.p,{children:["Using the ",(0,a.jsx)(n.a,{href:"/docs/getting_started/Templates/hello_world",children:"HelloWorldJava"})," program will help expedite the creation of a simple application."]})}),"\n",(0,a.jsx)(n.h2,{id:"start-a-new-application",children:"Start a new Application"}),"\n",(0,a.jsx)(n.p,{children:"Should you decide to create an application from scratch, a few integral steps must be followed in order to get the Webforj application up and running."}),"\n",(0,a.jsx)(n.h3,{id:"create-a-java-class",children:"Create a Java Class"}),"\n",(0,a.jsxs)(n.p,{children:["The first thing that will be required is the creation of a new Java class - do this by creating a file with the .java file extension in your IDE of choice. In this demo, we'll\r\ncreate a class called ",(0,a.jsx)(n.strong,{children:"MyApplication"}),"."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:"public class MyApplication {\r\n    \r\n}\r\n\n"})}),"\n",(0,a.jsxs)(n.h3,{id:"extend-the-app-class",children:["Extend the ",(0,a.jsx)(n.code,{children:"App"})," class"]}),"\n",(0,a.jsxs)(n.p,{children:["In order for Webforj to recognize that a new application is being created, the class that is created will need to extend the ",(0,a.jsx)(n.code,{children:"App"})," class."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:"import com.webforj.App;\r\n\r\npublic class MyApplication extends App{\r\n    \r\n}\n"})}),"\n",(0,a.jsxs)(n.h3,{id:"override-the-run-method",children:["Override the ",(0,a.jsx)(n.code,{children:"run()"})," method"]}),"\n",(0,a.jsxs)(n.p,{children:["After this is complete, the ",(0,a.jsx)(n.code,{children:"run()"})," method must be overridden. This method is where the instructions for the execution of your application will be contained."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:"import com.webforj.App;\r\nimport com.webforj.exceptions.WebforjException;\r\n\r\npublic class MyApplication extends App{\r\n\r\n    @Override\r\n    public void run() throws WebforjException { \r\n\r\n    }\r\n}\n"})}),"\n",(0,a.jsxs)(n.h3,{id:"create-the-main-frame",children:["Create the main ",(0,a.jsx)(n.code,{children:"Frame"})]}),"\n",(0,a.jsxs)(n.p,{children:["Finally, in most instances, within the ",(0,a.jsx)(n.code,{children:"run()"})," method or in another function called by the run method, a  ",(0,a.jsx)(n.code,{children:"Frame"})," will need to be created as a main container for the contents of the application."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:"import com.webforj.App;\r\nimport com.webforj.exceptions.WebforjException;\r\nimport com.webforj.component.window.Frame;\r\n\r\npublic class MyApplication extends App{\r\n\r\n    @Override\r\n    public void run() throws WebforjException { \r\n        Frame mainFrame = new Frame();\r\n    }\r\n}\n"})}),"\n",(0,a.jsx)(n.h2,{id:"customizing-your-application",children:"Customizing your Application"}),"\n",(0,a.jsxs)(n.p,{children:["You can then add various components that come with Webforj, or custom components, elements, etc to the ",(0,a.jsx)(n.code,{children:"Frame"}),". In the example below, the ",(0,a.jsx)(n.code,{children:"Frame"})," will be created and a button will be added to the panel."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:'import com.webforj.App;\r\nimport com.webforj.exceptions.WebforjException;\r\nimport com.webforj.component.window.Frame;\r\nimport com.webforj.component.button.Button;\r\n\r\npublic class ExampleClass extends App{\r\n    \r\n    Button myButton = new Button("My Button");\r\n\r\n    @Override\r\n    public void run() throws WebforjException { \r\n        Frame mainFrame = new Frame();\r\n        mainFrame.add(myButton);\r\n    }\r\n}\n'})}),"\n",(0,a.jsxs)(n.p,{children:["Once this has been done, you can use the ",(0,a.jsx)(n.a,{href:"/docs/getting_started/configuration",children:"installation plugin"})," to compile and deploy your application."]}),"\n",(0,a.jsx)(n.admonition,{type:"tip",children:(0,a.jsxs)(n.p,{children:["Visit ",(0,a.jsx)(n.a,{href:"../components/home",children:"this section"})," to see the various components that can be used in Webforj. To see how to ",(0,a.jsx)(n.a,{href:"../ui/home",children:"create your own components"}),", see this section. You can also explore the ",(0,a.jsx)(n.a,{href:"../category/layouts",children:"layouts"})," designed to help quickly and efficiently create new apps."]})}),"\n",(0,a.jsx)(n.h3,{id:"app-data",children:"App Data"}),"\n",(0,a.jsx)(n.p,{children:"You can set the application's title, theme and meta tags by using annotations."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:'@AppTitle("My app title")\r\n@AppTheme("system")\r\n@AppMeta(name = "description", content = "My App")\r\n@AppMeta(name = "keywords", content = "My, App, Java")\r\n\r\npublic class HelloWorld extends App {\r\n//Implementation\r\n}\n'})})]})}function p(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}}}]);