"use strict";(self.webpackChunkdwcj_documentation=self.webpackChunkdwcj_documentation||[]).push([[5307],{53113:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>t,toc:()=>c});var t=o(97565),i=o(74848),a=o(28453);const s={title:"What's new in version 24.12?",description:"Get to know the features, fixes, and functionality new in webforJ version 24.12.",slug:"whats-new-v24.12",date:new Date("2024-10-14T00:00:00.000Z"),authors:"webforJ",tags:["webforJ","v24.12","release"],image:"https://documentation.webforj.com/release_blog/_images/social-cover-24.12.png",hide_table_of_contents:!1},r="24.12",l={authorsImageUrls:[void 0]},c=[{value:"Breaking changes \ud83d\udee0",id:"breaking-changes-",level:2},{value:"New features and enhancements \ud83c\udf89",id:"new-features-and-enhancements-",level:2},{value:"Routing support",id:"routing-support",level:3},{value:"<code>AppDrawerToggle</code> component",id:"appdrawertoggle-component",level:3},{value:"<code>Toolbar</code> component",id:"toolbar-component",level:3}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",img:"img",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",pre:"pre",strong:"strong",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"cover image",src:o(11731).A+"",width:"1200",height:"630"})}),"\n",(0,i.jsxs)(n.p,{children:["webforJ version ",(0,i.jsx)(n.code,{children:"24.12"})," is live and available for development. Learn more about what main features and fixes are included in this release."]}),"\n",(0,i.jsxs)(n.p,{children:["As always, see the ",(0,i.jsx)(n.a,{href:"https://github.com/webforj/webforj/releases/tag/24.12",children:"GitHub release overview"})," for a more comprehensive list of changes. Highlighted below are some of the most exciting changes:"]}),"\n",(0,i.jsx)(n.h2,{id:"breaking-changes-",children:"Breaking changes \ud83d\udee0"}),"\n",(0,i.jsxs)(n.p,{children:["With the introduction of the routing overhaul outlined below, it's now necessary to restrict webforJ projects to contain ",(0,i.jsxs)(n.strong,{children:["only one class extending ",(0,i.jsx)(n.code,{children:"App"})]}),". Read more below, and in the docs about the routing solution introduced in this release."]}),"\n",(0,i.jsx)(n.h2,{id:"new-features-and-enhancements-",children:"New features and enhancements \ud83c\udf89"}),"\n",(0,i.jsx)(n.p,{children:"The following new components, features, and enhancements to various existing behavior have been introduced in this release:"}),"\n",(0,i.jsx)(n.h3,{id:"routing-support",children:"Routing support"}),"\n",(0,i.jsxs)(n.p,{children:["Version ",(0,i.jsx)(n.code,{children:"24.12"})," introduces Routing in webforJ, a critical feature that significantly enhances navigation within your web apps. Routing allows you to define different paths/routes within your app, enabling users to navigate between different views or pages, access crucial information, or manipulate the page without refreshing the entire app."]}),"\n",(0,i.jsxs)(n.p,{children:["To start using routing in your project, include the ",(0,i.jsx)(n.code,{children:"Routify"})," annotation in the class extending the ",(0,i.jsx)(n.code,{children:"App"})," class:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:'@Routify(packages = "com.webforj.samples.views", debug = true)\n@AppTitle("webforJ Samples")\npublic class Application extends App {\n  @Override\n  public void run() throws WebforjException {\n    console().log("Test");\n  }\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["To register a ",(0,i.jsx)(n.code,{children:"Route"})," in webforJ, developers can manually specify the route type by setting ",(0,i.jsx)(n.code,{children:"Route.Type"})," in the ",(0,i.jsx)(n.code,{children:"@Route"})," annotation, or omit the type if classes end in ",(0,i.jsx)(n.code,{children:"View"})," or ",(0,i.jsx)(n.code,{children:"Layout"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:'@Route\n@FrameTitle("Example View")\npublic class ExampleClassView extends Composite<Div> {\n  //...\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["Routing in webforJ has many uses, and a ",(0,i.jsx)(n.a,{href:"../../docs/routing/overview",children:"more comprehensive overview"})," of these use cases, as well as the various features and capabilities available to developers."]}),"\n",(0,i.jsxs)(n.h3,{id:"appdrawertoggle-component",children:[(0,i.jsx)(n.code,{children:"AppDrawerToggle"})," component"]}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"AppDrawerToggle"})," component has been added in ",(0,i.jsx)(n.code,{children:"24.12"}),". This lightweight component has been included to allow developers to easily include a way to toggle the ",(0,i.jsx)(n.code,{children:"AppLayout"})," component's drawer section if it's desired within an app."]}),"\n",(0,i.jsxs)(n.p,{children:["Including this within your ",(0,i.jsx)(n.code,{children:"AppLayout"})," is simple - simply add the component to the layout, commonly done in the toolbar at the top, and the component will automatically take care of the toggling capability."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:"AppLayout layout = new AppLayout();\nlayout.addToHeader(new AppDrawerToggle());\n"})}),"\n",(0,i.jsxs)(n.h3,{id:"toolbar-component",children:[(0,i.jsx)(n.code,{children:"Toolbar"})," component"]}),"\n",(0,i.jsxs)(n.p,{children:["Another addition with this release is the ",(0,i.jsx)(n.code,{children:"Toolbar"})," component. ",(0,i.jsx)(n.code,{children:"Toolbars"})," are a fundamental part of modern web applications, offering users quick access to core actions and navigation elements. Whether it's for managing page controls or housing key functionalities like search and notifications, the ",(0,i.jsx)(n.code,{children:"Toolbar"})," is now available for webforJ projects."]}),"\n",(0,i.jsxs)(n.admonition,{type:"tip",children:[(0,i.jsxs)(n.mdxAdmonitionTitle,{children:["Using the ",(0,i.jsx)(n.code,{children:"Toolbar"})]}),(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"Toolbar"})," component is ideal for use within the ",(0,i.jsx)(n.a,{href:"../../docs/components/app-layout",children:(0,i.jsx)(n.code,{children:"AppLayout"})})," component."]})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:'Toolbar toolbar = new Toolbar();\ntoolbar.addToStart(new AppDrawerToggle());\ntoolbar.addToTitle(new H1("DWC App"));\ntoolbar.setTheme(Theme.PRIMARY);\n\nAppLayout layout = new AppLayout();\nlayout.addToHeader(toolbar);\n'})})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},11731:(e,n,o)=>{o.d(n,{A:()=>t});const t=o.p+"assets/images/24.12-133d292ae5e24e510600fd7fd7e96fcf.png"},28453:(e,n,o)=>{o.d(n,{R:()=>s,x:()=>r});var t=o(96540);const i={},a=t.createContext(i);function s(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),t.createElement(a.Provider,{value:n},e.children)}},97565:e=>{e.exports=JSON.parse('{"permalink":"/blog/whats-new-v24.12","source":"@site/blog/2024-10-11-webforj-v24.12/24.12.md","title":"What\'s new in version 24.12?","description":"Get to know the features, fixes, and functionality new in webforJ version 24.12.","date":"2024-10-14T00:00:00.000Z","tags":[{"inline":true,"label":"webforJ","permalink":"/blog/tags/webfor-j"},{"inline":true,"label":"v24.12","permalink":"/blog/tags/v-24-12"},{"inline":true,"label":"release","permalink":"/blog/tags/release"}],"readingTime":2.255,"hasTruncateMarker":true,"authors":[{"name":"webforJ Team","url":"https://github.com/webforj","title":"webforJ Development Team","imageURL":"/img/webforj_icon.svg","key":"webforJ","page":null}],"frontMatter":{"title":"What\'s new in version 24.12?","description":"Get to know the features, fixes, and functionality new in webforJ version 24.12.","slug":"whats-new-v24.12","date":"2024-10-14T00:00:00.000Z","authors":"webforJ","tags":["webforJ","v24.12","release"],"image":"https://documentation.webforj.com/release_blog/_images/social-cover-24.12.png","hide_table_of_contents":false},"unlisted":false,"prevItem":{"title":"What\'s new in version 24.20?","permalink":"/blog/whats-new-v24.20"},"nextItem":{"title":"What\'s new in version 24.11?","permalink":"/blog/whats-new-v24.11"}}')}}]);