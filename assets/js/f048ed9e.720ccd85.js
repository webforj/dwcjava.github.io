"use strict";(self.webpackChunkdwcj_documentation=self.webpackChunkdwcj_documentation||[]).push([[2544],{73482:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>c,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>l});const r=JSON.parse('{"id":"introduction/getting-started","title":"Getting Started","description":"This article outlines the steps to scaffold a new webforJ app using the webforJ archetypes. This archetypes provide a pre-configured project structure and starter code to quickly get a project up and running.","source":"@site/docs/introduction/getting-started.md","sourceDirName":"introduction","slug":"/introduction/getting-started","permalink":"/docs/introduction/getting-started","draft":false,"unlisted":false,"editUrl":"https://github.com/webforj/webforj-docs/tree/website/docs/introduction/getting-started.md","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"Getting Started","sidebar_position":2},"sidebar":"documentationSidebar","previous":{"title":"Prerequisites","permalink":"/docs/introduction/prerequisites"},"next":{"title":"App Basics","permalink":"/docs/introduction/basics"}}');var s=n(74848),o=n(28453);n(3514);const i={title:"Getting Started",sidebar_position:2},c=void 0,a={},l=[{value:"Using the <code>hello-world</code> archetype",id:"using-the-hello-world-archetype",level:2},{value:"Run the app",id:"run-the-app",level:3}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"This article outlines the steps to scaffold a new webforJ app using the webforJ archetypes. This archetypes provide a pre-configured project structure and starter code to quickly get a project up and running."}),"\n",(0,s.jsx)(t.admonition,{title:"Prerequisites",type:"tip",children:(0,s.jsxs)(t.p,{children:["Before you begin, ensure you have read about the necessary ",(0,s.jsx)(t.a,{href:"./prerequisites",children:"prerequisites"})," for setting up and using webforJ."]})}),"\n","\n",(0,s.jsxs)(t.h2,{id:"using-the-hello-world-archetype",children:["Using the ",(0,s.jsx)(t.code,{children:"hello-world"})," archetype"]}),"\n",(0,s.jsxs)(t.p,{children:["To create and scaffold a new ",(0,s.jsx)(t.code,{children:"hello-world"})," project, follow these steps:"]}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Navigate to the proper directory"}),":\nOpen a terminal and move to the folder where you want to create your new project."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsxs)(t.strong,{children:["Run the ",(0,s.jsx)(t.code,{children:"archetype:generate"})," command"]}),":\nUse the Maven command below, and customize the ",(0,s.jsx)(t.code,{children:"groupId"}),", ",(0,s.jsx)(t.code,{children:"artifactId"}),", and ",(0,s.jsx)(t.code,{children:"version"})," as needed for your project."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"mvn -B archetype:generate \\\n-DarchetypeGroupId=com.webforj \\\n-DarchetypeArtifactId=webforj-archetype-hello-world \\\n-DgroupId=org.example \\\n-DarchetypeVersion=LATEST \\\n-DartifactId=my-hello-world-app \\\n-Dversion=1.0-SNAPSHOT\n"})}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Argument"}),(0,s.jsx)(t.th,{children:"Explanation"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"archetypeGroupId"})}),(0,s.jsxs)(t.td,{children:["The group ID of the archetype is ",(0,s.jsx)(t.code,{children:"com.webforj"})," for webforJ archetypes."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"archetypeArtifactId"})}),(0,s.jsx)(t.td,{children:"Specifies the name of the archetype to use."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"archetypeVersion"})}),(0,s.jsx)(t.td,{children:"Specifies the version of the archetype to use. This ensures that the generated project is compatible with a specific archetype version. Using LATEST selects the most recent version available."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"groupId"})}),(0,s.jsxs)(t.td,{children:["Represents the namespace for the generated project. Typically structured like a Java package, such as ",(0,s.jsx)(t.code,{children:"org.example"})," and is used to uniquely identify your organization or project domain."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"artifactId"})}),(0,s.jsx)(t.td,{children:"Specifies the name of the generated project. This will be the name of the resulting artifact and the project folder."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"version"})}),(0,s.jsxs)(t.td,{children:["Defines the version of the generated project. A common convention is MAJOR.MINOR-SNAPSHOT, like ",(0,s.jsx)(t.code,{children:"1.0-SNAPSHOT"}),", where SNAPSHOT denotes that the project is still in development."]})]})]})]}),"\n",(0,s.jsx)(t.p,{children:"After running the command, Maven will generate the project files necessary to run the project."}),"\n",(0,s.jsx)(t.h3,{id:"run-the-app",children:"Run the app"}),"\n",(0,s.jsx)(t.p,{children:"Navigate into the newly created directory, and run the following command from the project\u2019s root directory:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"mvn jetty:run\n"})}),"\n",(0,s.jsxs)(t.p,{children:["This command uses the Jetty maven plugin to start a Jetty server. Once the server is running, open your browser and go to ",(0,s.jsx)(t.a,{href:"http://localhost:8080",children:"http://localhost:8080"})," to view the app."]}),"\n",(0,s.jsx)(t.admonition,{title:"Licensing and watermark",type:"info",children:(0,s.jsxs)(t.p,{children:["For information on the licensing and the watermark present in unlicensed projects, see ",(0,s.jsx)(t.a,{href:"../configuration/licensing-and-watermark",children:"this article"}),"."]})})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},3514:(e,t,n)=>{n.d(t,{A:()=>g});n(96540);var r=n(18215),s=n(26972),o=n(28774),i=n(53465),c=n(16654),a=n(21312),l=n(51107);const d={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var h=n(74848);function u(e){let{href:t,children:n}=e;return(0,h.jsx)(o.A,{href:t,className:(0,r.A)("card padding--lg",d.cardContainer),children:n})}function p(e){let{href:t,icon:n,title:s,description:o}=e;return(0,h.jsxs)(u,{href:t,children:[(0,h.jsxs)(l.A,{as:"h2",className:(0,r.A)("text--truncate",d.cardTitle),title:s,children:[n," ",s]}),o&&(0,h.jsx)("p",{className:(0,r.A)("text--truncate",d.cardDescription),title:o,children:o})]})}function f(e){let{item:t}=e;const n=(0,s.Nr)(t),r=function(){const{selectMessage:e}=(0,i.W)();return t=>e(t,(0,a.T)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return n?(0,h.jsx)(p,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??r(t.items.length)}):null}function m(e){let{item:t}=e;const n=(0,c.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",r=(0,s.cC)(t.docId??void 0);return(0,h.jsx)(p,{href:t.href,icon:n,title:t.label,description:t.description??r?.description})}function j(e){let{item:t}=e;switch(t.type){case"link":return(0,h.jsx)(m,{item:t});case"category":return(0,h.jsx)(f,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function x(e){let{className:t}=e;const n=(0,s.$S)();return(0,h.jsx)(g,{items:n.items,className:t})}function g(e){const{items:t,className:n}=e;if(!t)return(0,h.jsx)(x,{...e});const o=(0,s.d1)(t);return(0,h.jsx)("section",{className:(0,r.A)("row",n),children:o.map(((e,t)=>(0,h.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,h.jsx)(j,{item:e})},t)))})}},53465:(e,t,n)=>{n.d(t,{W:()=>l});var r=n(96540),s=n(44586);const o=["zero","one","two","few","many","other"];function i(e){return o.filter((t=>e.includes(t)))}const c={locale:"en",pluralForms:i(["one","other"]),select:e=>1===e?"one":"other"};function a(){const{i18n:{currentLocale:e}}=(0,s.A)();return(0,r.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:i(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),c}}),[e])}function l(){const e=a();return{selectMessage:(t,n)=>function(e,t,n){const r=e.split("|");if(1===r.length)return r[0];r.length>n.pluralForms.length&&console.error(`For locale=${n.locale}, a maximum of ${n.pluralForms.length} plural forms are expected (${n.pluralForms.join(",")}), but the message contains ${r.length}: ${e}`);const s=n.select(t),o=n.pluralForms.indexOf(s);return r[Math.min(o,r.length-1)]}(n,t,e)}}},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>c});var r=n(96540);const s={},o=r.createContext(s);function i(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);