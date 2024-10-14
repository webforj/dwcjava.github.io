"use strict";(self.webpackChunkdwcj_documentation=self.webpackChunkdwcj_documentation||[]).push([[5863],{6005:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var r=n(4848),i=n(8453),c=n(3514);const o={title:"Architecture",hide_table_of_contents:!0},s=void 0,a={id:"architecture/overview",title:"Architecture",description:"{`",source:"@site/docs/architecture/overview.md",sourceDirName:"architecture",slug:"/architecture/overview",permalink:"/docs/architecture/overview",draft:!1,unlisted:!1,editUrl:"https://github.com/webforj/webforj-docs/tree/website/docs/architecture/overview.md",tags:[],version:"current",frontMatter:{title:"Architecture",hide_table_of_contents:!0},sidebar:"documentationSidebar",previous:{title:"Terminate and Error Actions",permalink:"/docs/advanced/terminate-and-error-actions"},next:{title:"Client/Server Interaction",permalink:"/docs/architecture/"}},d={},l=[];function u(e){const{Head:t}={...(0,i.R)(),...e.components};return t||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t,{children:(0,r.jsx)("style",{children:"\n  .container {\n    max-width: 65em !important;\n  }\n  "})}),"\n","\n","\n",(0,r.jsx)(c.A,{className:"topics-list"})]})}function m(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},3514:(e,t,n)=>{n.d(t,{A:()=>j});n(6540);var r=n(53),i=n(4142),c=n(5489),o=n(6654),s=n(1312),a=n(1107);const d={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var l=n(4848);function u(e){let{href:t,children:n}=e;return(0,l.jsx)(c.A,{href:t,className:(0,r.A)("card padding--lg",d.cardContainer),children:n})}function m(e){let{href:t,icon:n,title:i,description:c}=e;return(0,l.jsxs)(u,{href:t,children:[(0,l.jsxs)(a.A,{as:"h2",className:(0,r.A)("text--truncate",d.cardTitle),title:i,children:[n," ",i]}),c&&(0,l.jsx)("p",{className:(0,r.A)("text--truncate",d.cardDescription),title:c,children:c})]})}function h(e){let{item:t}=e;const n=(0,i.Nr)(t);return n?(0,l.jsx)(m,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,s.T)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function f(e){let{item:t}=e;const n=(0,o.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",r=(0,i.cC)(t.docId??void 0);return(0,l.jsx)(m,{href:t.href,icon:n,title:t.label,description:t.description??r?.description})}function p(e){let{item:t}=e;switch(t.type){case"link":return(0,l.jsx)(f,{item:t});case"category":return(0,l.jsx)(h,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function x(e){let{className:t}=e;const n=(0,i.$S)();return(0,l.jsx)(j,{items:n.items,className:t})}function j(e){const{items:t,className:n}=e;if(!t)return(0,l.jsx)(x,{...e});const c=(0,i.d1)(t);return(0,l.jsx)("section",{className:(0,r.A)("row",n),children:c.map(((e,t)=>(0,l.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,l.jsx)(p,{item:e})},t)))})}},8453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>s});var r=n(6540);const i={},c=r.createContext(i);function o(e){const t=r.useContext(c);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(c.Provider,{value:t},e.children)}}}]);