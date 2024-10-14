"use strict";(self.webpackChunkdwcj_documentation=self.webpackChunkdwcj_documentation||[]).push([[9155],{9117:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>s,default:()=>l,frontMatter:()=>i,metadata:()=>h,toc:()=>d});var o=n(4848),r=n(8453);const i={sidebar_position:2,displayed_sidebar:"documentationSidebar",title:"Themes"},s=void 0,h={id:"styling/themes",title:"Themes",description:"webforJ ships three themes by default, as well as with the ability to create your own, custom theme. The default themes are light theme, which is the default with a light background, dark which has a dark background tinted with the primary color and dark-pure which has a pure dark background (gray tones, not fully black).",source:"@site/docs/styling/themes.md",sourceDirName:"styling",slug:"/styling/themes",permalink:"/docs/styling/themes",draft:!1,unlisted:!1,editUrl:"https://github.com/webforj/webforj-docs/tree/website/docs/styling/themes.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,displayed_sidebar:"documentationSidebar",title:"Themes"},sidebar:"documentationSidebar",previous:{title:"Getting Started",permalink:"/docs/styling/getting-started"},next:{title:"Advanced Topics",permalink:"/docs/advanced/overview"}},a={},d=[{value:"Overriding Themes",id:"overriding-themes",level:3},{value:"Creating Custom Themes",id:"creating-custom-themes",level:3},{value:"Using the Themer",id:"using-the-themer",level:3}];function c(e){const t={a:"a",admonition:"admonition",code:"code",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.p,{children:"webforJ ships three themes by default, as well as with the ability to create your own, custom theme. The default themes are light theme, which is the default with a light background, dark which has a dark background tinted with the primary color and dark-pure which has a pure dark background (gray tones, not fully black)."}),"\n",(0,o.jsxs)(t.p,{children:["To change the theme of your application, you can use the ",(0,o.jsx)(t.code,{children:"@AppTheme"})," annotation or the ",(0,o.jsx)(t.code,{children:"App.setTheme()"})," method. When using this annotation, the theme name should be one of the following: ",(0,o.jsx)(t.code,{children:"system"}),", ",(0,o.jsx)(t.code,{children:"light"}),", ",(0,o.jsx)(t.code,{children:"dark"}),", ",(0,o.jsx)(t.code,{children:"dark-pure"})," or the name of a custom theme."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-java",children:'@AppTheme("dark-pure")\n//or\nApp.setTheme("dark-pure");\n'})}),"\n",(0,o.jsx)(t.admonition,{type:"info",children:(0,o.jsxs)(t.p,{children:["Using the API's ",(0,o.jsx)(t.code,{children:"App.setTheme()"})," results in runtime theme assignment - for users wishing to enable the ability to change themes dynamically while the program is run, the API's ",(0,o.jsx)(t.code,{children:"App.setTheme()"})," method will be the proper tool."]})}),"\n",(0,o.jsx)(t.h3,{id:"overriding-themes",children:"Overriding Themes"}),"\n",(0,o.jsxs)(t.p,{children:["It is possible to override the light theme of your application by overriding the CSS Properties defined in ",(0,o.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/:root",children:(0,o.jsx)(t.code,{children:":root"})}),"."]}),"\n",(0,o.jsx)(t.admonition,{type:"note",children:(0,o.jsxs)(t.p,{children:["The ",(0,o.jsx)(t.code,{children:":root"})," CSS pseudo-class matches the root element of a tree representing the document. In HTML, ",(0,o.jsx)(t.code,{children:":root"})," represents the element and is identical to the selector html, except that its specificity is higher."]})}),"\n",(0,o.jsx)(t.p,{children:"An example of this behavior would be as follows:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-css",children:":root {\n  --dwc-color-primary-h: 215;\n  --dwc-color-primary-s: 100%;\n  --dwc-color-primary-c: 50;\n  --dwc-font-size: var(--dwc-font-size-m);\n}\n"})}),"\n",(0,o.jsxs)(t.p,{children:["To override the ",(0,o.jsx)(t.code,{children:"dark"})," or ",(0,o.jsx)(t.code,{children:"dark-pure"})," theme, you should define your variables using the ",(0,o.jsx)(t.code,{children:"html[data-app-theme='dark']"})," and ",(0,o.jsx)(t.code,{children:"html[data-app-theme='dark-pure']"})," rules respectively. For example:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-css",children:"html[data-app-theme='dark'] {\n  --dwc-color-primary-s: 9%;\n  --dwc-color-white: hsl(210, 17%, 82%);\n}\n"})}),"\n",(0,o.jsx)(t.h3,{id:"creating-custom-themes",children:"Creating Custom Themes"}),"\n",(0,o.jsx)(t.p,{children:"In addition to the themes that come with webforJ, it is also possible to create your own application themes. Themes can co-exist in the same application, allowing you to switch between themes dynamically."}),"\n",(0,o.jsxs)(t.p,{children:["New themes should be defined in ",(0,o.jsx)(t.code,{children:"html[data-app-theme='THEME_NAME']"})," in your application stylesheet:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-css",children:"html[data-app-theme='new-theme'] {\n  --dwc-color-primary-h: 280;\n  --dwc-color-primary-s: 100%;\n  --dwc-color-primary-c: 60;\n}\n"})}),"\n",(0,o.jsx)(t.h3,{id:"using-the-themer",children:"Using the Themer"}),"\n",(0,o.jsxs)(t.p,{children:["The ",(0,o.jsx)(t.a,{href:"https://demo.webforj.com/webapp/DWCThemer",children:"Themer tool"})," allows you to modify the various palettes and colors supported by webforJ to either override an existing theme, or creating your own."]}),"\n",(0,o.jsx)(t.p,{children:'To do this, open the tool, and modify the various color, typography, spacing and other options to your preferred values. Once this has been done, export the theme by clicking the "Export" button at the top left of the screen.'}),"\n",(0,o.jsxs)(t.p,{children:["This will open a dialog with various options which will allow you to change the name of the generated ",(0,o.jsx)(t.code,{children:".css"})," file, give the theme a name, etc."]}),"\n",(0,o.jsxs)(t.p,{children:["In particular, note the ",(0,o.jsx)(t.strong,{children:'"Output Format"'})," section - this section allows the user to decide whether to override the current theme, or generate a new one that can be switched to dynamically. If the ",(0,o.jsx)(t.strong,{children:'"root"'})," option is chosen, the corresponding CSS that is generated will apply to the ",(0,o.jsx)(t.code,{children:":root"})," CSS pseudo-class and override existing theme rules. Selecting ",(0,o.jsx)(t.strong,{children:"named_html"})," will instead create a new theme in the ",(0,o.jsx)(t.code,{children:"html[data-app-theme='YOUR-THEME']"})," format."]})]})}function l(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>h});var o=n(6540);const r={},i=o.createContext(r);function s(e){const t=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function h(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),o.createElement(i.Provider,{value:t},e.children)}}}]);