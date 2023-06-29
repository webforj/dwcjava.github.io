"use strict";(self.webpackChunkdwcj_documentation=self.webpackChunkdwcj_documentation||[]).push([[3317],{3021:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>r,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var a=n(7462),l=(n(7294),n(3905));const i={sidebar_position:2},o="Local Installation",s={unversionedId:"installation/local_install",id:"installation/local_install",title:"Local Installation",description:"This section of the documentation will cover the steps required only for",source:"@site/docs/installation/local_install.md",sourceDirName:"installation",slug:"/installation/local_install",permalink:"/docs/installation/local_install",draft:!1,editUrl:"https://github.com/DwcJava/dwcjava.github.io/tree/website/docs/installation/local_install.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Cloud Installation",permalink:"/docs/installation/cloud_user"},next:{title:"Getting Started",permalink:"/docs/category/getting-started-1"}},r={},d=[{value:"1) Java and Maven Download and Configuration",id:"1-java-and-maven-download-and-configuration",level:2},{value:"Java",id:"java",level:3},{value:"Maven",id:"maven",level:3},{value:"2) BBj Download and Installation",id:"2-bbj-download-and-installation",level:2},{value:"3) Install and Configure the DWCJ Plugin",id:"3-install-and-configure-the-dwcj-plugin",level:2},{value:"4) Clone the Repository",id:"4-clone-the-repository",level:2}],p={toc:d};function c(t){let{components:e,...i}=t;return(0,l.kt)("wrapper",(0,a.Z)({},p,i,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"local-installation"},"Local Installation"),(0,l.kt)("p",null,"This section of the documentation will cover the steps required only for\nusers who wish to use the DWCJ for web and/or application development with a local\nBBJ instance on their machine. This installation will not allow users to contribute\nto the DWCJ implementation code itself."),(0,l.kt)("br",null),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},"This walkthrough will cover installation on a Windows system - installation\nsteps may vary for Mac/Linux OS devices.")),(0,l.kt)("br",null),(0,l.kt)("p",null,"Installation will be broken down into the following steps:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Java and Maven download and configuration"),(0,l.kt)("li",{parentName:"ol"},"BBj download and installation"),(0,l.kt)("li",{parentName:"ol"},"Using the BBj Plugin Manager to create your application"),(0,l.kt)("li",{parentName:"ol"},"Launching your application")),(0,l.kt)("h2",{id:"1-java-and-maven-download-and-configuration"},"1) Java and Maven Download and Configuration"),(0,l.kt)("p",null,"In order to use the DWCJ, you must first have Java and Maven installed and properly configured. If you already\nhave Java and Maven downloaded, please skip to ",(0,l.kt)("a",{parentName:"p",href:"#section2"},(0,l.kt)("strong",{parentName:"a"},"Step 2")),". If you also have\nBBj installed on your system, please skip to ",(0,l.kt)("a",{parentName:"p",href:"#section3"},(0,l.kt)("strong",{parentName:"a"},"Step 3")),"."),(0,l.kt)("h3",{id:"java"},"Java"),(0,l.kt)("p",null,"Java ",(0,l.kt)("strong",{parentName:"p"},"OpenJDK17")," can be found ",(0,l.kt)("a",{parentName:"p",href:"https://adoptium.net/temurin/releases/"},"by following this link"),". It is recommended\nto allow the installation to handle setting the JAVA_HOME variable during installation, where applicable."),(0,l.kt)("h3",{id:"maven"},"Maven"),(0,l.kt)("p",null,"Maven should also be downloaded, and can be found ",(0,l.kt)("a",{parentName:"p",href:"https://maven.apache.org/download.cgi"},"at this link"),". It is\nrecommended to configure your system environment variables with Maven - a guide for installation and configuration\nfor Windows users can be found ",(0,l.kt)("a",{parentName:"p",href:"https://phoenixnap.com/kb/install-maven-windows"},"here"),"."),(0,l.kt)("a",{name:"section2"}),(0,l.kt)("h2",{id:"2-bbj-download-and-installation"},"2) BBj Download and Installation"),(0,l.kt)("b",null,"While following this step, be sure to install BBj version 22.14 or newer "),(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=Ovk8kznQfGs&ab_channel=BBxCluesbyBASISEurope"},"This video")," can help with the installation of BBj if you need assistance with setup."),(0,l.kt)("p",null,"Once BBj has been installed, it is also necessary to install the needed dependencies from the BBj library. This is done by navigating to the ",(0,l.kt)("inlineCode",{parentName:"p"},"lib")," directory inside your bbx folder, and\nrunning the following commands:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"mvn install:install-file -Dfile=BBjStartup.jar -DgroupId=com.basis.lib -DartifactId=BBjStartup -Dversion=23.01 -Dpackaging=jar\nmvn install:install-file -Dfile=BBj.jar -DgroupId=com.basis.lib -DartifactId=BBj -Dversion=23.01 -Dpackaging=jar\nmvn install:install-file -Dfile=BBjUtil.jar -DgroupId=com.basis.lib -DartifactId=BBjUtil -Dversion=23.01 -Dpackaging=jar\n")),(0,l.kt)("a",{name:"section3"}),(0,l.kt)("h2",{id:"3-install-and-configure-the-dwcj-plugin"},"3) Install and Configure the DWCJ Plugin"),(0,l.kt)("p",null,'Once BBj has been installed, we can access the Plugin Manager in order to install tools needed to configure the DWCJ. To start, type "Plugin Manager" into the start menu or Finder. '),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Plugin manager start location",src:n(2617).Z,width:"203",height:"620"})),(0,l.kt)("p",null,'After the plugin manager has been opened, navigate to the "Available Plugins" tab towards the top.'),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Plugin manager start location",src:n(3846).Z,width:"985",height:"392"})),(0,l.kt)("p",null,'On this page, select the DWCJ entry, and click "Install".'),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Plugin manager start location",src:n(8155).Z,width:"707",height:"381"})),(0,l.kt)("p",null,'Once this has been done, you should be able to switch back to the "Installed Plugins" tab, and see the DWCJ entry listed there.'),(0,l.kt)("p",null,"Now that the plugin has been installed, navigate to the ",(0,l.kt)("inlineCode",{parentName:"p"},"bin")," directory within your ",(0,l.kt)("inlineCode",{parentName:"p"},"bbx")," folder and run the following command:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bbj"},"./bbj -tIO DWCJ/cli.bbj - enable_remote_install\n")),(0,l.kt)("h2",{id:"4-clone-the-repository"},"4) Clone the Repository"),(0,l.kt)("p",null,'Once BBj and the required DWCJ plugin are installed and configured, we can clone the "Hello World" repository from the DWCJ Github page. This project comes with the necessary tools to run your first DWCJ program!'),(0,l.kt)("p",null,"To begin, navigate to the ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/DwcJava/HelloWorldJava"},"HelloWorldJava repository")," and clone the project to your machine."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Plugin manager start location",src:n(6818).Z,width:"929",height:"395"})),(0,l.kt)("p",null,"Once the project is cloned onto your machine, you can open it with your preferred IDE. Within your IDE, navigate to the pom.xml file that comes with the project. Within this file are various tags that can be modified to install your application to your own desired specifications. A detailed guide for these tags can ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/DwcJava/dwcj-install-maven-plugin"},"be found at this link"),"."),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"For first time users, it is recommended to use the default settings and avoid changing the pom.xml that comes with the project.")),(0,l.kt)("p",null,"Proceed to open the folder in your preferred terminal, and run the following command:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"mvn install\n")),(0,l.kt)("p",null,"This will run the installation plugin which will do the work of setting your project up for you."),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},"If the above command does not work, check to make sure that your environment variables have been sufficiently edited to run Maven globally.")),(0,l.kt)("p",null,"Once this process has been completed, you should be able to navigate top the following URL and see your program running:"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"http://localhost:8888/webapp/hworld")))}c.isMDXComponent=!0},2617:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/i1-882007605a4349fbb4a22e1584c00b80.png"},3846:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/i2-d68bb0947a7298c06c7eeb2bc0a0d89a.png"},8155:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/i3-9d0e1322d852cc2ae5faa9911891bc97.png"},6818:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/i5-c69a1899472ae43f1985ea417da52c03.png"}}]);