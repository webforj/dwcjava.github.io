"use strict";(self.webpackChunkdwcj_documentation=self.webpackChunkdwcj_documentation||[]).push([[6080],{20741:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>m,frontMatter:()=>s,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"id":"data-binding/validation/overview","title":"Validation","description":"Validations play a crucial role by enforcing business rules before the system updates data in the model or acts upon it. webforJ integrates validations directly into the data binding process, providing a seamless way to ensure data integrity as it flows between UI components and the backend.","source":"@site/docs/data-binding/validation/overview.md","sourceDirName":"data-binding/validation","slug":"/data-binding/validation/overview","permalink":"/docs/data-binding/validation/overview","draft":false,"unlisted":false,"editUrl":"https://github.com/webforj/webforj-docs/tree/website/docs/data-binding/validation/overview.md","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1,"title":"Validation"},"sidebar":"documentationSidebar","previous":{"title":"Bindings","permalink":"/docs/data-binding/bindings"},"next":{"title":"Validators","permalink":"/docs/data-binding/validation/validators"}}');var r=n(74848),o=n(28453),a=n(3514);const s={sidebar_position:1,title:"Validation"},c="Validation",l={},d=[];function u(e){const t={h1:"h1",header:"header",p:"p",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"validation",children:"Validation"})}),"\n",(0,r.jsx)(t.p,{children:"Validations play a crucial role by enforcing business rules before the system updates data in the model or acts upon it. webforJ integrates validations directly into the data binding process, providing a seamless way to ensure data integrity as it flows between UI components and the backend."}),"\n",(0,r.jsx)(t.h1,{id:"topics",children:"Topics"}),"\n",(0,r.jsx)(a.A,{className:"topics-section"})]})}function m(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},3514:(e,t,n)=>{n.d(t,{A:()=>v});n(96540);var i=n(18215),r=n(26972),o=n(28774),a=n(53465),s=n(16654),c=n(21312),l=n(51107);const d={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var u=n(74848);function m(e){let{href:t,children:n}=e;return(0,u.jsx)(o.A,{href:t,className:(0,i.A)("card padding--lg",d.cardContainer),children:n})}function p(e){let{href:t,icon:n,title:r,description:o}=e;return(0,u.jsxs)(m,{href:t,children:[(0,u.jsxs)(l.A,{as:"h2",className:(0,i.A)("text--truncate",d.cardTitle),title:r,children:[n," ",r]}),o&&(0,u.jsx)("p",{className:(0,i.A)("text--truncate",d.cardDescription),title:o,children:o})]})}function h(e){let{item:t}=e;const n=(0,r.Nr)(t),i=function(){const{selectMessage:e}=(0,a.W)();return t=>e(t,(0,c.T)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return n?(0,u.jsx)(p,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??i(t.items.length)}):null}function f(e){let{item:t}=e;const n=(0,s.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",i=(0,r.cC)(t.docId??void 0);return(0,u.jsx)(p,{href:t.href,icon:n,title:t.label,description:t.description??i?.description})}function g(e){let{item:t}=e;switch(t.type){case"link":return(0,u.jsx)(f,{item:t});case"category":return(0,u.jsx)(h,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function b(e){let{className:t}=e;const n=(0,r.$S)();return(0,u.jsx)(v,{items:n.items,className:t})}function v(e){const{items:t,className:n}=e;if(!t)return(0,u.jsx)(b,{...e});const o=(0,r.d1)(t);return(0,u.jsx)("section",{className:(0,i.A)("row",n),children:o.map(((e,t)=>(0,u.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,u.jsx)(g,{item:e})},t)))})}},53465:(e,t,n)=>{n.d(t,{W:()=>l});var i=n(96540),r=n(44586);const o=["zero","one","two","few","many","other"];function a(e){return o.filter((t=>e.includes(t)))}const s={locale:"en",pluralForms:a(["one","other"]),select:e=>1===e?"one":"other"};function c(){const{i18n:{currentLocale:e}}=(0,r.A)();return(0,i.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:a(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),s}}),[e])}function l(){const e=c();return{selectMessage:(t,n)=>function(e,t,n){const i=e.split("|");if(1===i.length)return i[0];i.length>n.pluralForms.length&&console.error(`For locale=${n.locale}, a maximum of ${n.pluralForms.length} plural forms are expected (${n.pluralForms.join(",")}), but the message contains ${i.length}: ${e}`);const r=n.select(t),o=n.pluralForms.indexOf(r);return i[Math.min(o,i.length-1)]}(n,t,e)}}},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>s});var i=n(96540);const r={},o=i.createContext(r);function a(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);