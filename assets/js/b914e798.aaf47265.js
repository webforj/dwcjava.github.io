"use strict";(self.webpackChunkdwcj_documentation=self.webpackChunkdwcj_documentation||[]).push([[3150],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var r=a.createContext({}),p=function(e){var t=a.useContext(r),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(r.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,r=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),h=p(n),m=o,u=h["".concat(r,".").concat(m)]||h[m]||d[m]||s;return n?a.createElement(u,l(l({ref:t},c),{},{components:n})):a.createElement(u,l({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,l=new Array(s);l[0]=h;var i={};for(var r in t)hasOwnProperty.call(t,r)&&(i[r]=t[r]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var p=2;p<s;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},3309:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>l,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>p});var a=n(7462),o=(n(7294),n(3905));const s={sidebar_position:1,displayed_sidebar:"documentationSidebar"},l="Getting Started",i={unversionedId:"styling/getting_started",id:"styling/getting_started",title:"Getting Started",description:"Application Theme",source:"@site/docs/styling/getting_started.md",sourceDirName:"styling",slug:"/styling/getting_started",permalink:"/docs/styling/getting_started",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,displayed_sidebar:"documentationSidebar"},sidebar:"documentationSidebar",previous:{title:"Styling",permalink:"/docs/category/styling"},next:{title:"Annotations",permalink:"/docs/category/annotations"}},r={},p=[{value:"Application Theme",id:"application-theme",level:2},{value:"Default Themes",id:"default-themes",level:3},{value:"System Theme",id:"system-theme",level:3},{value:"Using Custom CSS",id:"using-custom-css",level:2},{value:"Using the <code>setStyle()</code> method",id:"using-the-setstyle-method",level:3},{value:"Using the <code>App</code> class&#39;s methods",id:"using-the-app-classs-methods",level:3},{value:"Using annotations",id:"using-annotations",level:3},{value:"Java Text Block Styling",id:"java-text-block-styling",level:3},{value:"Control Theme and Expanse",id:"control-theme-and-expanse",level:2}],c={toc:p};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"getting-started"},"Getting Started"),(0,o.kt)("h2",{id:"application-theme"},"Application Theme"),(0,o.kt)("p",null,"The DWCJ ships three themes by default, as well as with the ability to create your own, custom theme. The default themes are light, dark and dark-pure. "),(0,o.kt)("h3",{id:"default-themes"},"Default Themes"),(0,o.kt)("p",null,"To change the theme of your application, you can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"@AppTheme")," annotation. When using this annotation, the theme name should be one of the following: ",(0,o.kt)("inlineCode",{parentName:"p"},"system"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"light"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"dark"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"dark-pure")," or the name of a custom theme."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'@AppTheme("dark-pure")\n')),(0,o.kt)("h3",{id:"system-theme"},"System Theme"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"system")," theme option allows for a theme to be set based on the operating system user preferences. Operating systems that support a dark mode or dark theme typically have an option to activate it somewhere in the settings. "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"On Windows 10:"),' The theme option can be found within the "Colors" section under "Choose your Color". For a more detailed guide, see ',(0,o.kt)("a",{parentName:"p",href:"https://blogs.windows.com/windowsexperience/2016/08/08/windows-10-tip-personalize-your-pc-by-enabling-the-dark-theme/"},"this resource."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"On macOS:"),' In the "System Preferences" section under "General", there are options to change the appearance. For more details, see ',(0,o.kt)("a",{parentName:"p",href:"https://support.apple.com/en-us/HT208976"},"this resource."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"On iOS:"),' Change the "Appearance" selection within the "Display & Brightness" option in the settings menu.')),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"On Android:"),' Toggle the "Dark Theme" switch under the "Display" option within the settings menu'))),(0,o.kt)("p",null,"If the system's themes have been customized and your application is set to use the system theme, it will be necessary to inform your application of the customized theme names. To do this, use the ",(0,o.kt)("inlineCode",{parentName:"p"},"@AppLightTheme")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"@AppDarkTheme")," annotations:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'@AppLightTheme("my-light-theme")\n@AppDarkTheme("my-dark-theme")\n')),(0,o.kt)("h2",{id:"using-custom-css"},"Using Custom CSS"),(0,o.kt)("p",null,"Styling your DWCJ application can be accomplished in various ways, which include:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Using the ",(0,o.kt)("inlineCode",{parentName:"p"},"setStyle()")," method on various elements in the DWCJ API")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Using ",(0,o.kt)("inlineCode",{parentName:"p"},"App")," class API methods to apply a stylesheet for your class")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Using annotations"))),(0,o.kt)("h3",{id:"using-the-setstyle-method"},"Using the ",(0,o.kt)("inlineCode",{parentName:"h3"},"setStyle()")," method"),(0,o.kt)("p",null,"DWCJ core controls will have access to the ",(0,o.kt)("inlineCode",{parentName:"p"},"setStyle()")," method, which takes two strings: the desired style attribute to be changed, and the desired value. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'Button exampleButton = new Button();\nexampleButton.setStyle("width","50px");\n')),(0,o.kt)("h3",{id:"using-the-app-classs-methods"},"Using the ",(0,o.kt)("inlineCode",{parentName:"h3"},"App")," class's methods"),(0,o.kt)("p",null,"The DWCJ's App class contains functionality to allow stylesheets to be applied to the application: ",(0,o.kt)("inlineCode",{parentName:"p"},"addStyleSheet()")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"addInlineStyleSheet()"),"."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"addStyleSheet()")," method will inject an external style sheet from a URL into a page, such as stylesheets hosted on CDNs. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'App.addStyleSheet("https://www.w3schools.com/w3css/4/w3.css")\n')),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"addInlineStyleSheet()")," method is used when a developer wants to include a local stylesheet. When this method is chosen, it is required to use the ",(0,o.kt)("inlineCode",{parentName:"p"},"Assets.contentOf()")," method to resolve the path to the stylesheet. By default, the resources directory of a project will be used. For example, a file called ",(0,o.kt)("inlineCode",{parentName:"p"},"styles.css")," located in ",(0,o.kt)("inlineCode",{parentName:"p"},"src/resources/css")," would by loaded by the following code:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'App.addInlineStyleSheet(Assets.contentOf("css/styles.css"));\n')),(0,o.kt)("h3",{id:"using-annotations"},"Using annotations"),(0,o.kt)("p",null,"Similar to the App class's methods, the DWCJ contains annotations which allow for the use of external and local stylesheets as well. "),(0,o.kt)("p",null,"To annotate the injection of an external CSS file, use the ",(0,o.kt)("inlineCode",{parentName:"p"},"@StyleSheet()")," annotation."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'@StyleSheet(url = "https://www.w3schools.com/w3css/4/w3.css")\n')),(0,o.kt)("p",null,"It is also possible to apply local stylesheets with annotations. Use the ",(0,o.kt)("inlineCode",{parentName:"p"},"@InlineStyleSheet()")," annotation to include an external file. As with the App's API method, the root directory used by this annotation will be the resources directory of a project. Ensure to add the ",(0,o.kt)("inlineCode",{parentName:"p"},"local = true")," parameter in the annotation for a local stylesheet. A file called ",(0,o.kt)("inlineCode",{parentName:"p"},"styles.css")," located in ",(0,o.kt)("inlineCode",{parentName:"p"},"src/resources/css")," would by loaded by the following code:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'@InlineStyleSheet(value = "css/style.css", local = true)\n')),(0,o.kt)("h3",{id:"java-text-block-styling"},"Java Text Block Styling"),(0,o.kt)("p",null,"It is also possible to use Java Text Blocks to create chunks of CSS that can be applied via HTML class attribute to the class itself. This styling can be applied with either the App API method or using annotations. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'@InlineStyleSheet(value = /* css */ """\n   .panel{\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        gap: 1rem;\n        padding: 2rem;\n        height: inherit;\n   } \n""")\n\npublic class Demo extends App{\n    @Override\n    public void run() throws DwcException{\n        AppPanel panel = new AppPanel();\n        panel.addClassName("panel");\n    }\n}\n')),(0,o.kt)("p",null,"If you're using VS code, an extension that provides syntax highlighting ",(0,o.kt)("a",{parentName:"p",href:"https://marketplace.visualstudio.com/items?itemName=BEU.vscode-java-html"},"can be found here"),":"),(0,o.kt)("img",{src:"https://github.com/DwcJava/vscode-java-html/raw/HEAD/docs/demo.png"}),(0,o.kt)("h2",{id:"control-theme-and-expanse"},"Control Theme and Expanse"),(0,o.kt)("p",null,"Many core DWCJ controls come packaged with various Themes and Expanses for easy styling. More about the specific control Themes and Expanses can be found in the ",(0,o.kt)("a",{parentName:"p",href:"/docs/category/dwcj-controls"},"DWCJ Controls")," section."))}d.isMDXComponent=!0}}]);