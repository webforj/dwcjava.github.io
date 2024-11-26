"use strict";(self.webpackChunkdwcj_documentation=self.webpackChunkdwcj_documentation||[]).push([[5863],{86264:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>m,frontMatter:()=>s,metadata:()=>n,toc:()=>u});const n=JSON.parse('{"id":"architecture/overview","title":"Architecture","description":"{`","source":"@site/docs/architecture/overview.md","sourceDirName":"architecture","slug":"/architecture/overview","permalink":"/docs/architecture/overview","draft":false,"unlisted":false,"editUrl":"https://github.com/webforj/webforj-docs/tree/website/docs/architecture/overview.md","tags":[],"version":"current","frontMatter":{"title":"Architecture","hide_table_of_contents":true},"sidebar":"documentationSidebar","previous":{"title":"Terminate and Error Actions","permalink":"/docs/advanced/terminate-and-error-actions"},"next":{"title":"Client/Server Interaction","permalink":"/docs/architecture/"}}');var o=r(74848),c=r(28453),i=r(3514);const s={title:"Architecture",hide_table_of_contents:!0},a=void 0,l={},u=[];function d(e){const{Head:t}={...(0,c.R)(),...e.components};return t||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t,{children:(0,o.jsx)("style",{children:"\n  .container {\n    max-width: 65em !important;\n  }\n  "})}),"\n","\n",(0,o.jsx)(i.A,{className:"topics-list"})]})}function m(e={}){const{wrapper:t}={...(0,c.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},3514:(e,t,r)=>{r.d(t,{A:()=>w});r(96540);var n=r(18215),o=r(26972),c=r(28774),i=r(53465),s=r(16654),a=r(21312),l=r(51107);const u={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var d=r(74848);function m(e){let{href:t,children:r}=e;return(0,d.jsx)(c.A,{href:t,className:(0,n.A)("card padding--lg",u.cardContainer),children:r})}function h(e){let{href:t,icon:r,title:o,description:c}=e;return(0,d.jsxs)(m,{href:t,children:[(0,d.jsxs)(l.A,{as:"h2",className:(0,n.A)("text--truncate",u.cardTitle),title:o,children:[r," ",o]}),c&&(0,d.jsx)("p",{className:(0,n.A)("text--truncate",u.cardDescription),title:c,children:c})]})}function f(e){let{item:t}=e;const r=(0,o.Nr)(t),n=function(){const{selectMessage:e}=(0,i.W)();return t=>e(t,(0,a.T)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return r?(0,d.jsx)(h,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??n(t.items.length)}):null}function p(e){let{item:t}=e;const r=(0,s.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",n=(0,o.cC)(t.docId??void 0);return(0,d.jsx)(h,{href:t.href,icon:r,title:t.label,description:t.description??n?.description})}function x(e){let{item:t}=e;switch(t.type){case"link":return(0,d.jsx)(p,{item:t});case"category":return(0,d.jsx)(f,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function g(e){let{className:t}=e;const r=(0,o.$S)();return(0,d.jsx)(w,{items:r.items,className:t})}function w(e){const{items:t,className:r}=e;if(!t)return(0,d.jsx)(g,{...e});const c=(0,o.d1)(t);return(0,d.jsx)("section",{className:(0,n.A)("row",r),children:c.map(((e,t)=>(0,d.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,d.jsx)(x,{item:e})},t)))})}},53465:(e,t,r)=>{r.d(t,{W:()=>l});var n=r(96540),o=r(44586);const c=["zero","one","two","few","many","other"];function i(e){return c.filter((t=>e.includes(t)))}const s={locale:"en",pluralForms:i(["one","other"]),select:e=>1===e?"one":"other"};function a(){const{i18n:{currentLocale:e}}=(0,o.A)();return(0,n.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:i(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),s}}),[e])}function l(){const e=a();return{selectMessage:(t,r)=>function(e,t,r){const n=e.split("|");if(1===n.length)return n[0];n.length>r.pluralForms.length&&console.error(`For locale=${r.locale}, a maximum of ${r.pluralForms.length} plural forms are expected (${r.pluralForms.join(",")}), but the message contains ${n.length}: ${e}`);const o=r.select(t),c=r.pluralForms.indexOf(o);return n[Math.min(c,n.length-1)]}(r,t,e)}}},28453:(e,t,r)=>{r.d(t,{R:()=>i,x:()=>s});var n=r(96540);const o={},c=n.createContext(o);function i(e){const t=n.useContext(c);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),n.createElement(c.Provider,{value:t},e.children)}}}]);