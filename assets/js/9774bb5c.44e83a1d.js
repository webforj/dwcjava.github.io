"use strict";(self.webpackChunkdwcj_documentation=self.webpackChunkdwcj_documentation||[]).push([[8524],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),c=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=r,g=u["".concat(p,".").concat(m)]||u[m]||d[m]||i;return n?a.createElement(g,o(o({ref:t},s),{},{components:n})):a.createElement(g,o({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2907:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const i={sidebar_position:2,displayed_sidebar:"documentationSidebar"},o="Creating an Application",l={unversionedId:"getting_started/creating_an_application",id:"getting_started/creating_an_application",title:"Creating an Application",description:"Once the DWCJ and all applicable dependencies have been installed, it's time to start creating! If you followed the Users installation guide,",source:"@site/docs/getting_started/creating_an_application.md",sourceDirName:"getting_started",slug:"/getting_started/creating_an_application",permalink:"/docs/getting_started/creating_an_application",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,displayed_sidebar:"documentationSidebar"},sidebar:"documentationSidebar",previous:{title:"Getting Started",permalink:"/docs/category/getting-started"},next:{title:"Configuration",permalink:"/docs/getting_started/configuration"}},p={},c=[{value:"Create a New Java Class",id:"create-a-new-java-class",level:2}],s={toc:c};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"creating-an-application"},"Creating an Application"),(0,r.kt)("p",null,"Once the DWCJ and all applicable dependencies have been installed, it's time to start creating! If you followed the ",(0,r.kt)("a",{parentName:"p",href:"/docs/installation/users"},(0,r.kt)("strong",{parentName:"a"},"Users")),' installation guide,\na sample "Hello World" program should be included already. However, in this section,\na demonstration of how to create a new application from scratch will be provided.'),(0,r.kt)("h2",{id:"create-a-new-java-class"},"Create a New Java Class"),(0,r.kt)("p",null,"The first thing that will be required is the creation of a new Java class - do this by creating a file with the .java file extension in your IDE of choice. In this demo, we'll\ncreate a class called ",(0,r.kt)("strong",{parentName:"p"},"ExampleClass"),". "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"public class ExampleClass {\n    \n}\n\n")),(0,r.kt)("p",null,"In order for the DWCJ's engine to recognize that a new application is being created,\nthe class that is created will need to extend the ",(0,r.kt)("inlineCode",{parentName:"p"},"app")," class. "),(0,r.kt)("p",null,"Most IDEs will import this automatically, but the snippet below shows the import as well."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"import org.dwcj.App;\n\npublic class ExampleClass extends App{\n    \n}\n")),(0,r.kt)("p",null,"After this is complete, the ",(0,r.kt)("inlineCode",{parentName:"p"},"run()")," method will need to be overridden. This method is\nwhere the instructions for the execution of your application will be contained."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"import org.dwcj.App;\nimport org.dwcj.exceptions.DwcAppInitializeException;\n\npublic class ExampleClass extends App{\n\n    @Override\n    public void run() throws DwcAppInitializeException { \n\n    }\n}\n")),(0,r.kt)("p",null,"Finally, in most instances, within the ",(0,r.kt)("inlineCode",{parentName:"p"},"run()")," method or in another function called by\nthe run method, an ",(0,r.kt)("inlineCode",{parentName:"p"},"AppPanel")," will need to be created as a container for the contents\nof the application or webpage."),(0,r.kt)("p",null,"To this panel, you can add the various controls that come with the DWCJ, or custom\ncontrols and components, elements, etc. In the example below, the AppPanel will be created\nand a button will be added to the panel."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"import org.dwcj.App;\nimport org.dwcj.exceptions.DwcAppInitializeException;\nimport org.dwcj.controls.panels.AppPanel;\nimport org.dwcj.controls.button.Button;\n\npublic class ExampleClass extends App{\n\n    @Override\n    public void run() throws DwcAppInitializeException { \n        AppPanel panel = new AppPanel();\n        Button myButton = new Button();\n        panel.add(myButton);\n    }\n}\n")),(0,r.kt)("p",null,"Once this has been done, compile or package your program using Maven, and then navigate to\nthe appropriate URL. If done correctly, you should see the entry in your list of available\napplications."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"You can set the application's title, theme and meta tags by using annotations."),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-java"},'@AppTitle("My app title")\n@AppTheme("system")\n@AppMeta(name = "description", content = "My App")\n@AppMeta(name = "keywords", content = "My, App, Java")\n\npublic class HelloWorld extends App {\n//Implementation\n}\n'))))}d.isMDXComponent=!0}}]);