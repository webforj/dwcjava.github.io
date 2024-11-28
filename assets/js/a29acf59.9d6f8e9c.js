"use strict";(self.webpackChunkdwcj_documentation=self.webpackChunkdwcj_documentation||[]).push([[5505],{6395:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>l,default:()=>m,frontMatter:()=>c,metadata:()=>o,toc:()=>d});const o=JSON.parse('{"id":"configuration/bbj-installation/overview","title":"Running with BBjServices","description":"This section will only pertain to developers using BBjServices. For most developers, the information in this section won\'t be necessary for webforJ app development or deployment.","source":"@site/docs/configuration/bbj-installation/overview.md","sourceDirName":"configuration/bbj-installation","slug":"/configuration/bbj-installation/overview","permalink":"/docs/configuration/bbj-installation/overview","draft":false,"unlisted":false,"editUrl":"https://github.com/webforj/webforj-docs/tree/website/docs/configuration/bbj-installation/overview.md","tags":[],"version":"current","frontMatter":{"title":"Running with BBjServices","hide_table_of_contents":true},"sidebar":"documentationSidebar","previous":{"title":"Maven Jetty plugin","permalink":"/docs/configuration/deploy-reload/maven-jetty-plugin"},"next":{"title":"Docker","permalink":"/docs/configuration/bbj-installation/docker"}}');var i=n(4848),r=n(8453),s=n(3514);const c={title:"Running with BBjServices",hide_table_of_contents:!0},l=void 0,a={},d=[];function u(e){const t={admonition:"admonition",code:"code",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",...(0,r.R)(),...e.components},{Head:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.admonition,{type:"important",children:[(0,i.jsx)(t.mdxAdmonitionTitle,{}),(0,i.jsxs)(t.p,{children:["This section will only pertain to developers using ",(0,i.jsx)(t.code,{children:"BBjServices"}),". For most developers, the information in this section won't be necessary for webforJ app development or deployment."]})]}),"\n",(0,i.jsx)(n,{children:(0,i.jsx)("style",{children:"\n  .container {\n    max-width: 65em !important;\n  }\n  "})}),"\n","\n",(0,i.jsx)(s.A,{className:"topics-list"})]})}function m(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},3514:(e,t,n)=>{n.d(t,{A:()=>x});n(6540);var o=n(8215),i=n(6972),r=n(8774),s=n(5846),c=n(6654),l=n(1312),a=n(1107);const d={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var u=n(4848);function m(e){let{href:t,children:n}=e;return(0,u.jsx)(r.A,{href:t,className:(0,o.A)("card padding--lg",d.cardContainer),children:n})}function p(e){let{href:t,icon:n,title:i,description:r}=e;return(0,u.jsxs)(m,{href:t,children:[(0,u.jsxs)(a.A,{as:"h2",className:(0,o.A)("text--truncate",d.cardTitle),title:i,children:[n," ",i]}),r&&(0,u.jsx)("p",{className:(0,o.A)("text--truncate",d.cardDescription),title:r,children:r})]})}function f(e){let{item:t}=e;const n=(0,i.Nr)(t),o=function(){const{selectMessage:e}=(0,s.W)();return t=>e(t,(0,l.T)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return n?(0,u.jsx)(p,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??o(t.items.length)}):null}function h(e){let{item:t}=e;const n=(0,c.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",o=(0,i.cC)(t.docId??void 0);return(0,u.jsx)(p,{href:t.href,icon:n,title:t.label,description:t.description??o?.description})}function g(e){let{item:t}=e;switch(t.type){case"link":return(0,u.jsx)(h,{item:t});case"category":return(0,u.jsx)(f,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function j(e){let{className:t}=e;const n=(0,i.$S)();return(0,u.jsx)(x,{items:n.items,className:t})}function x(e){const{items:t,className:n}=e;if(!t)return(0,u.jsx)(j,{...e});const r=(0,i.d1)(t);return(0,u.jsx)("section",{className:(0,o.A)("row",n),children:r.map(((e,t)=>(0,u.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,u.jsx)(g,{item:e})},t)))})}},5846:(e,t,n)=>{n.d(t,{W:()=>a});var o=n(6540),i=n(4586);const r=["zero","one","two","few","many","other"];function s(e){return r.filter((t=>e.includes(t)))}const c={locale:"en",pluralForms:s(["one","other"]),select:e=>1===e?"one":"other"};function l(){const{i18n:{currentLocale:e}}=(0,i.A)();return(0,o.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:s(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),c}}),[e])}function a(){const e=l();return{selectMessage:(t,n)=>function(e,t,n){const o=e.split("|");if(1===o.length)return o[0];o.length>n.pluralForms.length&&console.error(`For locale=${n.locale}, a maximum of ${n.pluralForms.length} plural forms are expected (${n.pluralForms.join(",")}), but the message contains ${o.length}: ${e}`);const i=n.select(t),r=n.pluralForms.indexOf(i);return o[Math.min(r,o.length-1)]}(n,t,e)}}},8453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>c});var o=n(6540);const i={},r=o.createContext(i);function s(e){const t=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),o.createElement(r.Provider,{value:t},e.children)}}}]);