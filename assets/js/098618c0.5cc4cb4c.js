"use strict";(self.webpackChunkdwcj_documentation=self.webpackChunkdwcj_documentation||[]).push([[5758],{3976:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>c,metadata:()=>n,toc:()=>u});const n=JSON.parse('{"id":"routing/route-hierarchy/overview","title":"overview","description":"Routes are organized into a hierarchical tree structure that enables developers to define layouts, manage views, and dynamically render components across various parts of the app.","source":"@site/docs/routing/route-hierarchy/overview.md","sourceDirName":"routing/route-hierarchy","slug":"/routing/route-hierarchy/overview","permalink":"/docs/routing/route-hierarchy/overview","draft":false,"unlisted":false,"editUrl":"https://github.com/webforj/webforj-docs/tree/website/docs/routing/route-hierarchy/overview.md","tags":[],"version":"current","frontMatter":{},"sidebar":"documentationSidebar","previous":{"title":"Navigation Events","permalink":"/docs/routing/navigation-lifecycle/navigation-events"},"next":{"title":"Route Types","permalink":"/docs/routing/route-hierarchy/route-types"}}');var o=r(4848),s=r(8453),i=r(3514);const c={},a="Route hierarchy",l={},u=[{value:"Topics",id:"topics",level:2}];function d(e){const t={h1:"h1",h2:"h2",header:"header",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.header,{children:(0,o.jsx)(t.h1,{id:"route-hierarchy",children:"Route hierarchy"})}),"\n",(0,o.jsx)(t.p,{children:"Routes are organized into a hierarchical tree structure that enables developers to define layouts, manage views, and dynamically render components across various parts of the app."}),"\n",(0,o.jsx)(t.p,{children:"The key concepts you\u2019ll encounter when building a webforJ routable app include:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"Route Hierarchy"}),": Organizes routes into parent-child structures for modular UI development."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"Route Types"}),": Routes are categorized as either ",(0,o.jsx)(t.strong,{children:"View Routes"})," or ",(0,o.jsx)(t.strong,{children:"Layout Routes"}),", each serving a different purpose."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"Nested Routes"}),": Routes can be nested within each other, allowing parent components to render child components in designated outlets."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"Outlets"}),": Components where child views are dynamically injected into parent layouts."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"Layouts"}),": Special routes that wrap child components without contributing to the URL, providing shared UI elements such as headers, footers, or sidebars."]}),"\n"]}),"\n",(0,o.jsx)(t.h2,{id:"topics",children:"Topics"}),"\n",(0,o.jsx)(i.A,{className:"topics-section"})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},3514:(e,t,r)=>{r.d(t,{A:()=>j});r(6540);var n=r(8215),o=r(6972),s=r(8774),i=r(5846),c=r(6654),a=r(1312),l=r(1107);const u={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var d=r(4848);function h(e){let{href:t,children:r}=e;return(0,d.jsx)(s.A,{href:t,className:(0,n.A)("card padding--lg",u.cardContainer),children:r})}function p(e){let{href:t,icon:r,title:o,description:s}=e;return(0,d.jsxs)(h,{href:t,children:[(0,d.jsxs)(l.A,{as:"h2",className:(0,n.A)("text--truncate",u.cardTitle),title:o,children:[r," ",o]}),s&&(0,d.jsx)("p",{className:(0,n.A)("text--truncate",u.cardDescription),title:s,children:s})]})}function m(e){let{item:t}=e;const r=(0,o.Nr)(t),n=function(){const{selectMessage:e}=(0,i.W)();return t=>e(t,(0,a.T)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return r?(0,d.jsx)(p,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??n(t.items.length)}):null}function f(e){let{item:t}=e;const r=(0,c.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",n=(0,o.cC)(t.docId??void 0);return(0,d.jsx)(p,{href:t.href,icon:r,title:t.label,description:t.description??n?.description})}function g(e){let{item:t}=e;switch(t.type){case"link":return(0,d.jsx)(f,{item:t});case"category":return(0,d.jsx)(m,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function x(e){let{className:t}=e;const r=(0,o.$S)();return(0,d.jsx)(j,{items:r.items,className:t})}function j(e){const{items:t,className:r}=e;if(!t)return(0,d.jsx)(x,{...e});const s=(0,o.d1)(t);return(0,d.jsx)("section",{className:(0,n.A)("row",r),children:s.map(((e,t)=>(0,d.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,d.jsx)(g,{item:e})},t)))})}},5846:(e,t,r)=>{r.d(t,{W:()=>l});var n=r(6540),o=r(4586);const s=["zero","one","two","few","many","other"];function i(e){return s.filter((t=>e.includes(t)))}const c={locale:"en",pluralForms:i(["one","other"]),select:e=>1===e?"one":"other"};function a(){const{i18n:{currentLocale:e}}=(0,o.A)();return(0,n.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:i(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),c}}),[e])}function l(){const e=a();return{selectMessage:(t,r)=>function(e,t,r){const n=e.split("|");if(1===n.length)return n[0];n.length>r.pluralForms.length&&console.error(`For locale=${r.locale}, a maximum of ${r.pluralForms.length} plural forms are expected (${r.pluralForms.join(",")}), but the message contains ${n.length}: ${e}`);const o=r.select(t),s=r.pluralForms.indexOf(o);return n[Math.min(s,n.length-1)]}(r,t,e)}}},8453:(e,t,r)=>{r.d(t,{R:()=>i,x:()=>c});var n=r(6540);const o={},s=n.createContext(o);function i(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);