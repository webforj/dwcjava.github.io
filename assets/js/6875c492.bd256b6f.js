"use strict";(self.webpackChunkdwcj_documentation=self.webpackChunkdwcj_documentation||[]).push([[4813,8401],{47713:(e,t,n)=>{n.d(t,{A:()=>s});n(96540);var i=n(21312),r=n(39022),o=n(74848);function s(e){const{metadata:t}=e,{previousPage:n,nextPage:s}=t;return(0,o.jsxs)("nav",{className:"pagination-nav","aria-label":(0,i.T)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"}),children:[n&&(0,o.jsx)(r.A,{permalink:n,title:(0,o.jsx)(i.A,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)",children:"Newer entries"})}),s&&(0,o.jsx)(r.A,{permalink:s,title:(0,o.jsx)(i.A,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)",children:"Older entries"}),isNext:!0})]})}},33892:(e,t,n)=>{n.d(t,{A:()=>s});n(96540);var i=n(44096),r=n(31240),o=n(74848);function s(e){let{items:t,component:n=r.A}=e;return(0,o.jsx)(o.Fragment,{children:t.map((e=>{let{content:t}=e;return(0,o.jsx)(i.in,{content:t,children:(0,o.jsx)(n,{children:(0,o.jsx)(t,{})})},t.metadata.permalink)}))})}},11086:(e,t,n)=>{n.r(t),n.d(t,{default:()=>f});n(96540);var i=n(18215),r=n(21312),o=n(45500),s=n(17559),a=n(53465),c=n(74848);function l(){const{selectMessage:e}=(0,a.W)();return t=>e(t,(0,r.T)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One post|{count} posts"},{count:t}))}function d(e){const t=l();return(0,r.T)({id:"theme.blog.tagTitle",description:"The title of the page for a blog tag",message:'{nPosts} tagged with "{tagName}"'},{nPosts:t(e.count),tagName:e.label})}var h=n(28774),p=n(28027),m=n(47713),u=n(41463),A=n(33892),g=n(32234),v=n(51107);function b(e){let{tag:t}=e;const n=d(t);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(o.be,{title:n,description:t.description}),(0,c.jsx)(u.A,{tag:"blog_tags_posts"})]})}function x(e){let{tag:t,items:n,sidebar:i,listMetadata:o}=e;const s=d(t);return(0,c.jsxs)(p.A,{sidebar:i,children:[t.unlisted&&(0,c.jsx)(g.A,{}),(0,c.jsxs)("header",{className:"margin-bottom--xl",children:[(0,c.jsx)(v.A,{as:"h1",children:s}),t.description&&(0,c.jsx)("p",{children:t.description}),(0,c.jsx)(h.A,{href:t.allTagsPath,children:(0,c.jsx)(r.A,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page",children:"View All Tags"})})]}),(0,c.jsx)(A.A,{items:n}),(0,c.jsx)(m.A,{metadata:o})]})}function f(e){return(0,c.jsxs)(o.e3,{className:(0,i.A)(s.G.wrapper.blogPages,s.G.page.blogTagPostListPage),children:[(0,c.jsx)(b,{...e}),(0,c.jsx)(x,{...e})]})}},32234:(e,t,n)=>{n.d(t,{A:()=>l});n(96540);var i=n(18215),r=n(44084),o=n(17559),s=n(27293),a=n(74848);function c(e){let{className:t}=e;return(0,a.jsx)(s.A,{type:"caution",title:(0,a.jsx)(r.Rc,{}),className:(0,i.A)(t,o.G.common.unlistedBanner),children:(0,a.jsx)(r.Uh,{})})}function l(e){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r.AE,{}),(0,a.jsx)(c,{...e})]})}},44084:(e,t,n)=>{n.d(t,{AE:()=>c,Rc:()=>s,TT:()=>d,Uh:()=>a,Yh:()=>l});n(96540);var i=n(21312),r=n(5260),o=n(74848);function s(){return(0,o.jsx)(i.A,{id:"theme.contentVisibility.unlistedBanner.title",description:"The unlisted content banner title",children:"Unlisted page"})}function a(){return(0,o.jsx)(i.A,{id:"theme.contentVisibility.unlistedBanner.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function c(){return(0,o.jsx)(r.A,{children:(0,o.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}function l(){return(0,o.jsx)(i.A,{id:"theme.contentVisibility.draftBanner.title",description:"The draft content banner title",children:"Draft page"})}function d(){return(0,o.jsx)(i.A,{id:"theme.contentVisibility.draftBanner.message",description:"The draft content banner message",children:"This page is a draft. It will only be visible in dev and be excluded from the production build."})}},53152:(e,t,n)=>{n.d(t,{A:()=>s});n(96540);var i=n(17437),r=n(28774),o=n(2445);function s(e){let{imagePath:t,title:n,description:s,link:a}=e;const c=i.AH`
    display: flex;
    flex-direction: column;
    width: 300px;
    margin-top: 15px;
    padding: 20px;
    border: 1px solid var(--ifm-color-emphasis-200);
    transition: all var(--ifm-transition-fast) ease;
    transition-property: border,box-shadow;
    border-radius: var(--ifm-card-border-radius);
    text-decoration: none;
    color: var(--ifm-font-color-base);    
    
    &:hover{
      border: 1px var(--ifm-color-primary) solid;
      .bar{
        background-color: var(--ifm-color-primary);
      }
      text-decoration: none;
      color: var(--ifm-font-color-base);
    } 
  `,l=i.AH`
    width: 250px;
    height: 150px;
    object-fit: contain;
    margin: 0 0 5px -3px;
  `,d=i.AH`
      height: 1px;
      background-color: lightgray;
      margin: 5px 0 15px 0;
      transition: all var(--ifm-transition-fast) ease;
      transition-property: background-color,box-shadow;
    `,h=i.AH`
    h5{
      font-size: 1em;
    }
    p{
      font-size: .9em;
      margin: 0px !important;
    }
  `;return(0,o.FD)(r.A,{to:a,css:c,children:[(0,o.Y)("div",{css:{display:"flex",justifyContent:"center"},children:(0,o.Y)("img",{src:t.default,css:l})}),(0,o.Y)("div",{css:d,className:"bar"}),(0,o.FD)("div",{css:h,children:[(0,o.Y)("h5",{children:n}),(0,o.Y)("p",{children:s})]})]})}},5943:(e,t,n)=>{n.d(t,{h:()=>b,A:()=>x});var i=n(96540),r=n(17437),o=n(5556),s=n.n(o),a=n(11470),c=n(19365),l=n(41622),d=n(61302);const h=n.p+"assets/images/expand-ba3f00f73da43d91e5b17663c4a7d108.png",p="data:image/png;base64,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",m="data:image/png;base64,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";var u=n(95293),A=n(52706),g=n(2445);function v(e){let{collapse:t,setCollapse:n}=e;v.propTypes={collapse:s().bool.isRequired,setCollapse:s().func.isRequired};const i=r.AH`
    display: flex;
    justify-content: end;
    align-items: flex-end;
    background-color: transparent;
    margin-bottom: -10px;
  `,o=r.AH`
    cursor: pointer;
    z-index: 10;
    height: 35px;
    width: 35px;
    border: none;
    background-color: none;
    justify-self: flex-end;
    background-color: transparent;
    margin-right: 5px;
    margin-bottom: -50px !important;
  `,a=r.AH`
    filter: invert(var(--inversion-percentage));
  `;return(0,g.Y)("div",{css:i,children:(0,g.Y)("button",{css:o,onClick:()=>{n(!t)},children:t?(0,g.Y)("img",{alt:"collapse_button",css:a,src:h,className:"icon-tabler-arrow-bar-up"}):(0,g.Y)("img",{css:a,src:p,className:"icon-tabler-arrow-bar-down"})})})}function b(e){let{url:t}=e;const n=r.AH`
    position: relative;
    cursor: pointer;
    z-index: 10;
    height: 35px;
    width: 35px;
    border: none;
    justify-self: flex-end;
    margin-top: -5px;
    margin-bottom: -20px;
    background-color: transparent;
    margin-right: 12px;
  `,i=r.AH`
    filter: invert(var(--inversion-percentage));
    ::before {
      mix-blend-mode: lighten;
      opacity: 0.5;
    }
  `;return(0,g.Y)("button",{css:n,onClick:()=>{window.open(t,"_blank")},children:(0,g.Y)("img",{css:i,src:m})})}function x(e){let{path:t,javaC:n,javaE:o,urls:h,cssURL:p,javaHighlight:m,height:f,frame:w,tabs:j}=e;x.propTypes={path:s().string.isRequired,javaC:s().string,javaE:s().string,urls:s().arrayOf(s().string),cssURL:s().string,javaHighlight:s().string,height:s().string,frame:s().string,tabs:s().arrayOf(s().string)};const[k,y]=(0,i.useState)(""),[D,E]=(0,i.useState)(""),[Y,B]=(0,i.useState)({}),[C,L]=(0,i.useState)(""),[S,M]=(0,i.useState)(!(!n||!o)),[H,F]=(0,i.useState)(!1),[N,T]=(0,i.useState)({}),[O,G]=(0,i.useState)(!1),[P,z]=(0,i.useState)(0),[J,X]=(0,i.useState)(0),[R,V]=(0,i.useState)(25),[U,W]=(0,i.useState)(25),[Z,K]=(0,i.useState)(0),[q,I]=(0,i.useState)(!1),Q=(0,i.useRef)(null),_=(0,i.useRef)(null);function $(e,t,n){return(0,g.Y)(d.A,{css:t,className:"codeDemoBlock",language:"java",showLineNumbers:!0,metastring:n,children:e.code})}(0,i.useEffect)((()=>{o&&fetch(o).then((e=>e.text())).then((e=>{E(e);const t=new URL(o).pathname.split("/"),n=t[t.length-1];T((e=>({...e,javaFile:n})))})),n&&fetch(n).then((e=>e.text())).then((e=>{y(e)})),p&&fetch(p).then((e=>e.text())).then((e=>{L(e);const t=new URL(p).pathname.split("/"),n=t[t.length-1];T((e=>({...e,cssFile:n})))})),h&&h.forEach((function(e){const t=new URL(e),n=t.pathname.split("/"),i=n[n.length-1];fetch(e).then((e=>e.text())).then((e=>{!function(e,t){B((n=>({...n,[e]:{fileName:e,code:t}})))}(i,e)}))})),K(Q.current?Q.current.offsetWidth:0)}),[]);const ee=()=>{G(!1)},te=e=>{if(O){const t=e.clientX-P;J+t>Z/3&&(Q.current.style.width=`${J+t}px`,_.current.style.right=(R-t<25?25:R-t)+"px",W(R-t<25?25:R-t))}},ne=r.AH`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-bottom: 16px;
    background-color: var(--dwc-surface-1);
  `,ie=r.AH`
    width: 100%;
    border: 1px solid var(--ifm-toc-border-color);
    border-right: none;
    background-color: transparent;
    display: flex;
    position: relative;
  `,re=r.AH`
    min-height: 100px;
    height: 100%;
    width: 100%;
    height: ${f||"100%"};
    pointer-events: ${O?"none":"auto"};
  `,oe=r.AH`
    display: flex;
    justify-content: flex-end;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
    ${H&&"opacity: 1;"};
    margin: 10px 0 0 0;
    position: absolute;
    right: 25px;
  `,se=r.AH`
    display: flex;
    align-items: center;
    cursor: ew-resize;
    border-left: 1px solid var(--ifm-toc-border-color);
    border-right: 1px solid var(--ifm-toc-border-color);
    background-color: var(--dwc-surface-3);
  `,ae=r.AH`
    box-shadow: none;
    background-color: var(--dwc-surface-3);
    margin: 0px;
    padding: 0px;
    border: ${"hidden"==w?"none":"1px solid var(--ifm-toc-border-color)"};
    border-top: none;
    border-radius: 0px;
    position: relative;

    div {
      border-color: var(--ifm-toc-border-color);
      padding: 2px 0px 0px 0px;
      margin: 0px;
    }

    > div:first-of-type {
      border: ${"hidden"==w?"1px solid var(--ifm-toc-border-color)":"none"};
      border-top: none;
    }

    summary {
      display: flex;
      width: 100%;
      justify-content: center;
      margin: 10px 0;
      font-weight: bold;
      ::before {
        left: auto;
        margin-left: -100px;
        --docusaurus-details-decoration-color: var(--ifm-color-primary);
      }
    }
    .margin-top--md {
      margin-top: 0px !important;
    }
    ul {
      margin: -4px 0px !important;
    }
  `,ce=r.AH`
    li[aria-selected="true"] {
      border-color: var(--ifm-color-primary);
    }

    .tabs__item {
      padding: 5px 20px -2px 20px;
      border-radius: 0px;
    }
  `,le=r.AH`
    border-radius: 0px;
    box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 4px 0px inset;
  `;return(0,g.FD)("div",{css:ne,onMouseUp:ee,onMouseLeave:ee,onMouseMove:te,children:["hidden"!=w?(0,g.FD)("div",{onMouseEnter:()=>{F(!0)},onMouseLeave:()=>F(!1),css:ie,children:[(0,g.Y)("iframe",{onMouseUp:ee,loading:"lazy",src:t+"&__theme__="+(0,u.G)().colorMode,css:re,ref:Q,onMouseMove:te}),(0,g.Y)("div",{css:oe,ref:_,children:(0,g.Y)(b,{url:t})}),(0,g.Y)("div",{css:se,onMouseDown:e=>{e.preventDefault(),G(!0),z(e.clientX),X(Q.current?Q.current.offsetWidth:0),V(U)},children:(0,g.Y)(A.A,{})})]}):null,(0,g.FD)(l.A,{css:ae,summary:(0,g.Y)("summary",{onClick:()=>I(!q),children:q?"Hide Code":"Show Code"}),children:[n&&o?(0,g.Y)(v,{collapse:S,setCollapse:M}):null,p?(0,g.FD)(a.A,{css:ce,children:[(0,g.Y)(c.A,{value:j?j[0]:"Java",label:j?j[0]:N.javaFile,default:!0,children:(0,g.Y)(d.A,{css:le,className:"codeDemoBlock",language:"java",showLineNumbers:!0,metastring:m,children:S?k:D})}),Object.keys(Y).map(((e,t)=>(0,g.Y)(c.A,{value:e,label:e,children:$(Y[e],le,m)},"tab"+t))),(0,g.Y)(c.A,{value:j?j[1]:"CSS",label:j?j[1]:N.cssFile,children:(0,g.Y)(d.A,{css:le,className:"codeDemoBlock",language:"css",showLineNumbers:!0,children:C})})]}):(0,g.FD)(a.A,{css:ce,children:[(0,g.Y)(c.A,{value:j?j[0]:"Java",label:j?j[0]:N.javaFile,default:!0,children:(0,g.Y)(d.A,{css:le,className:"codeDemoBlock",language:"java",showLineNumbers:!0,metastring:m,children:S?k:D})}),Object.keys(Y).map(((e,t)=>(0,g.Y)(c.A,{value:e,label:e,children:$(Y[e],le,m)},"tab"+t)))]})]})]})}},65529:(e,t,n)=>{n.d(t,{A:()=>h});n(96540);var i=n(17437),r=n(90276),o=n(50526),s=n(44863),a=n(14303),c=n(64680),l=n(78144),d=n(2445);function h(e){let{chip:t,label:n,href:h,clickable:p,iconName:m,tooltipText:u,color:A}=e;const g=i.AH`
    margin-right: 0.5em;
    margin-bottom: 1em;
    background-color: var(--chip-background);
    color: var(--chip-text);

    :hover{
      color: inherit;
      background-color: var(--chip-background-hover);
    }
  `,v=i.AH`
      color: var(--chip-icon-color) !important;
  `;let b;return"shadow"===t?(u="This component renders with a shadow DOM, an API built into the browser that facilitates encapsulation.",p=!0,h="https://documentation.webforj.com/docs/glossary#shadow-dom",n="Shadow",m="shadow"):"name"===t?(u="The name of this web component as it appears in the DOM.",p=!1,m="code"):"scoped"==t&&(u="This component uses scoped components, an alternative approach to the shadow DOM, a browser API that enables encapsulation. These components scope their styles to avoid leaks or conflicts instead of relying on the native shadow DOM.",p=!1,n="Scoped",m="scoped"),b="shadow"===m?(0,d.Y)(a.A,{css:v}):"code"===m?(0,d.Y)(c.A,{css:v}):"scoped"===m?(0,d.Y)(s.A,{css:v}):(0,d.Y)(l.A,{css:v}),(0,d.Y)(r.A,{title:u,arrow:!0,css:g,children:(0,d.Y)(o.A,{className:`doc-chip ${t.className||""}`,label:n,component:"a",href:p?h:null,icon:b,clickable:p,color:A,target:"_blank"})})}},33235:(e,t,n)=>{n.d(t,{A:()=>l});var i=n(96540),r=n(17437),o=n(90276),s=n(50526),a=n(37785),c=n(2445);function l(e){let{type:t,location:n,top:l,children:d,code:h,suffix:p}=e;const[m,u]=(0,i.useState)(""),[A,g]=(0,i.useState)(!1);(0,i.useEffect)((()=>{document.querySelectorAll(".doc-chip").length>0?g(!0):g(!1)}),[]),(0,i.useEffect)((()=>{p||(p=""),u("https://javadoc.io/doc/com.webforj/webforj-"+t+"/latest/"+n+".html"+p)}),[]);const v=r.AH`
    ${e=>e&&r.AH`
    margin-bottom: 1em;
    margin-left: 0.5em;
    float: right;
    @media (max-width: 500px){
    margin-bottom: 1em;
    float: none;
    margin-left: -.25em;
    }
    `}
  `,b=r.AH`
    width: 100%;
    margin-bottom: 1em;
    display: flex;
    flex-direction: row-reverse;
  `,x=r.AH`
    background-color: var(--javadoclink-bg);
    color: var(--javadoclink-color);
    padding: 0 0 0 5px;
    :hover {
      background-color: var(--javadoclink-hover-bg);
      color: var(--javadoclink-hover-color);
    } 
  `;return(0,c.FD)(c.FK,{children:["true"===l&&A&&(0,c.Y)(o.A,{title:"JavaDoc",arrow:!0,css:v,children:(0,c.Y)(s.A,{css:x,label:"Java API",component:"a",href:m,icon:(0,c.Y)(a.A,{}),clickable:!0,color:"primary",target:"_blank"})}),"true"===l&&!A&&(0,c.Y)("div",{css:b,children:(0,c.Y)(o.A,{title:"JavaDoc",arrow:!0,children:(0,c.Y)(s.A,{css:x,label:"Java API",component:"a",href:m,icon:(0,c.Y)(a.A,{}),clickable:!0,color:"primary",target:"_blank"})})}),"true"!==l&&!h&&(0,c.Y)("a",{href:m,target:"_blank",children:d}),"true"!==l&&h&&(0,c.Y)("code",{children:(0,c.Y)("a",{href:m,target:"_blank",children:d})})]})}},41530:(e,t,n)=>{n.d(t,{A:()=>s});var i=n(96540),r=n(28774),o=n(74848);function s(e){const[t,n]=(0,i.useState)(null);if((0,i.useEffect)((()=>{fetch("https://dwc.style/docs/dwc-components.json").then((e=>e.json())).then((t=>{const i=t.components.find((t=>t.tag===e.tag));n(i)}))}),[]),!t)return(0,o.jsx)("div",{children:"Loading..."});const s=t.docsTags?.filter((e=>"part"===e.name)),a=t.slots?.map((e=>({name:e.name,desc:e.docs}))),c=t.styles?.map((e=>({name:e.name,description:e.docs}))),l=t.props?.map((e=>({display:e.reflectToAttr,attr:e.attr,desc:e.docs,type:e.type}))),d=t?.dependencies||[];return(0,o.jsxs)(o.Fragment,{children:["parts"==e.table&&(0,o.jsxs)("table",{className:"custom--table",children:[(0,o.jsx)("thead",{children:(0,o.jsxs)("tr",{children:[(0,o.jsx)("th",{children:"Part"}),(0,o.jsx)("th",{children:"Description"})]},"header")}),(0,o.jsx)("tbody",{children:s?.map((t=>{const[n,i]=t.text.split(" - ");return!e.exclusions?.includes(n)&&(0,o.jsxs)("tr",{children:[(0,o.jsx)("td",{children:(0,o.jsx)("code",{children:n})}),(0,o.jsx)("td",{children:i})]},t.id)}))})]}),"slots"==e.table&&(0,o.jsxs)("table",{className:"custom--table",children:[(0,o.jsx)("thead",{children:(0,o.jsxs)("tr",{children:[(0,o.jsx)("th",{children:"Slot"}),(0,o.jsx)("th",{children:"Description"})]},"header")}),(0,o.jsx)("tbody",{children:a?.map((t=>!e.exclusions?.includes(t.name)&&""!=t.name&&(0,o.jsxs)("tr",{children:[(0,o.jsx)("td",{children:(0,o.jsx)("code",{children:t.name})}),(0,o.jsx)("td",{children:t.desc})]},t.name)))})]}),"properties"==e.table&&(0,o.jsxs)("table",{className:"custom--table",children:[(0,o.jsx)("thead",{children:(0,o.jsxs)("tr",{children:[(0,o.jsx)("th",{children:"Name"}),(0,o.jsx)("th",{children:"Description"})]},"header")}),(0,o.jsx)("tbody",{children:c?.map((t=>!e.exclusions?.includes(t.name)&&(0,o.jsxs)("tr",{children:[(0,o.jsx)("td",{children:(0,o.jsx)("code",{children:t.name})}),(0,o.jsx)("td",{children:t.description})]},t.name)))})]}),"reflects"==e.table&&(0,o.jsxs)("table",{className:"custom--table",children:[(0,o.jsx)("thead",{children:(0,o.jsxs)("tr",{children:[(0,o.jsx)("th",{children:"Attribute"}),(0,o.jsx)("th",{children:"Description"}),(0,o.jsx)("th",{children:"Type"})]},"header")}),(0,o.jsx)("tbody",{children:l?.map((t=>null!=t.attr&&1==t.display&&!e.exclusions?.includes(t.attr)&&(0,o.jsxs)("tr",{children:[(0,o.jsx)("td",{children:(0,o.jsx)("code",{children:t.attr})}),(0,o.jsx)("td",{children:t.desc}),(0,o.jsx)("td",{children:t.type})]},t.attr)))})]}),"dependencies"==e.table&&(0,o.jsx)("ul",{children:d.map(((e,t)=>(0,o.jsx)("li",{children:(0,o.jsx)(r.A,{to:"/docs/client-components/"+e.replace("dwc-","").charAt(0).toUpperCase()+e.slice(5),children:e},t)})))}),"properties"!=e.table&&"parts"!=e.table&&"slots"!=e.table&&"reflects"!=e.table&&"dependencies"!=e.table&&(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("h4",{children:"Shadow Parts"}),(0,o.jsxs)("table",{className:"custom--table",children:[(0,o.jsx)("thead",{children:(0,o.jsxs)("tr",{children:[(0,o.jsx)("th",{children:"Part"}),(0,o.jsx)("th",{children:"Description"})]},"header")}),(0,o.jsx)("tbody",{children:s?.map((e=>{const[t,n]=e.text.split(" - ");return(0,o.jsxs)("tr",{children:[(0,o.jsx)("td",{children:(0,o.jsx)("code",{children:t})}),(0,o.jsx)("td",{children:n})]},e.id)}))})]}),(0,o.jsx)("h4",{children:"CSS Properties"}),(0,o.jsxs)("table",{className:"custom--table",children:[(0,o.jsx)("thead",{children:(0,o.jsxs)("tr",{children:[(0,o.jsx)("th",{children:"Name"}),(0,o.jsx)("th",{children:"Description"})]},"header")}),(0,o.jsx)("tbody",{children:c?.map((e=>(0,o.jsxs)("tr",{children:[(0,o.jsx)("td",{children:(0,o.jsx)("code",{children:e.name})}),(0,o.jsx)("td",{children:e.description})]},e.name)))})]}),(0,o.jsx)("h4",{children:"Reflected Attributes"}),(0,o.jsxs)("table",{className:"custom--table",children:[(0,o.jsx)("thead",{children:(0,o.jsxs)("tr",{children:[(0,o.jsx)("th",{children:"Attribute"}),(0,o.jsx)("th",{children:"Description"}),(0,o.jsx)("th",{children:"Type"})]},"header")}),(0,o.jsx)("tbody",{children:l?.map((t=>null!=t.attr&&0==t.display&&!e.exclusions?.includes(t.attr)&&(0,o.jsxs)("tr",{children:[(0,o.jsx)("td",{children:(0,o.jsx)("code",{children:t.attr})}),(0,o.jsx)("td",{children:t.desc}),(0,o.jsx)("td",{children:t.type})]},t.attr)))})]})]})]})}},16999:(e,t,n)=>{n.d(t,{A:()=>o});n(96540);var i=n(14718),r=n(74848);function o(e){return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(i.A,{...e})})}},2356:(e,t,n)=>{n.d(t,{A:()=>g});var i=n(96540),r=n(64678),o=n(17437),s=n(95293),a=n(5943),c=n(2445);var l=n(53152),d=n(65529),h=n(33235);var p=n(27293);var m=n(41530),u=(n(11470),n(19365),n(28774));var A=n(3514);const g={...r.A,AppLayoutViewer:function(e){let{path:t,mobile:n,javaE:r,cssURL:l}=e;const[d,h]=(0,i.useState)(!1),p=o.AH`
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 4rem 0;
        /* width: 110%; */
        /* margin-left: -5%; */
    `,m=o.AH`
        position: relative;
        width : 100%;
        max-width: ${"true"==n?"375px":"100%"};
        height: ${"true"==n?"700px":"600px"};
        border-radius: 32px;
        overflow: hidden;
        box-shadow: 0 0 0 10px black, 0 3px 22px black;
        outline: thin solid black;
    `,u=o.AH`
        width: 100%;
        height: 100%;
        background: var(--dwc-surface-3);
    `,A=o.AH`
      display: flex;
      justify-content: flex-end;
      opacity: 0;
      transition: opacity 0.3s ease-in-out;
      ${d&&"opacity: 1;"};
      margin: 10px 0 0 0;
      position: absolute;
      top: 10px;
      right: 5px;
    `;return(0,c.FD)("div",{css:p,children:[(0,c.FD)("div",{css:m,onMouseEnter:()=>h(!0),onMouseLeave:()=>h(!1),children:[(0,c.Y)("div",{css:A,children:(0,a.h)({url:t})}),(0,c.Y)("iframe",{src:t+"&__theme__="+(0,s.G)().colorMode,css:u,loading:"lazy"})]}),(0,c.Y)("br",{}),(0,c.Y)(a.A,{frame:"hidden",javaE:r,cssURL:l})]})},ComponentCard:l.A,ComponentDemo:a.A,DocCardList:A.A,DocChip:d.A,EventTable:function(e){let{base:t,events:n}=e;const i=o.AH`
    text-align: center;
  `;return(0,c.FD)("table",{children:[(0,c.Y)("thead",{children:(0,c.FD)("tr",{children:[(0,c.Y)("th",{children:"Event"}),(0,c.Y)("th",{children:"Description"})]})}),t&&Object.entries({blur:{name:"BlurEvent",description:"An event that is triggered when a component loses focus.",link:"com/webforj/component/event/BlurEvent"},focus:{name:"FocusEvent",description:"An event that is triggered when a component gains focus, opposite of a blur event.",link:"com/webforj/component/event/FocusEvent"},mouseEnter:{name:"MouseEnterEvent",description:"An event that is triggered when the mouse cursor enters the boundaries of a component.",link:"com/webforj/component/event/MouseEnterEvent"},mouseExit:{name:"MouseExitEvent",description:"An event that is triggered when the mouse cursor exits the boundaries of a component.",link:"com/webforj/component/event/MouseExitEvent"},rightMouseDown:{name:"RightMouseDownEvent",description:"An event that is triggered when the user presses the right mouse button while the cursor is over a component.",link:"com/webforj/component/event/RightMouseDownEvent"}}).map((e=>{let[t,n]=e;return(0,c.FD)("tr",{children:[(0,c.Y)("td",{css:i,children:(0,c.Y)(h.A,{type:"foundation",location:n.link,code:"true",children:n.name})}),(0,c.Y)("td",{children:n.description})]},t)})),n&&Object.entries({buttonClick:{name:"ButtonClickEvent",description:"An event that is triggered when a user interacts with a button by clicking or tapping on it.",link:"com/webforj/component/button/event/ButtonClickEvent"},check:{name:"CheckEvent",description:"An event that is triggered when the state of a component changes and becomes checked. It occurs when the user interacts with a checkbox element by clicking or tapping on it, causing the checkbox to transition from an unchecked state to a checked state.",link:"com/webforj/component/event/CheckEvent"},uncheck:{name:"UncheckEvent",description:"An event that is triggered when the state of a component changes and becomes unchecked.",link:"com/webforj/component/event/UncheckEvent"},toggle:{name:"ToggleEvent",description:'A ToggleEvent fires a CheckBox or a similar UI element changes its state between "on" and "off" or "active" and "inactive."',link:"com/webforj/component/event/UncheckEvent"},dialogOpen:{name:"DialogOpenEvent",description:"An event that is fired when the Dialog is opened.",link:"com/webforj/component/dialog/event/DialogOpenEvent"},dialogClose:{name:"DialogCloseEvent",description:"An event that is fired when the Dialog is closed.",link:"com/webforj/component/dialog/event/DialogCloseEvent"},drawerOpen:{name:"DrawerOpenEvent",description:"An event that is fired when the Drawer is opened.",link:"com/webforj/component/drawer/event/DrawerOpenEvent"},drawerClose:{name:"DrawerCloseEvent",description:"An event that is fired when the Drawer is closed.",link:"com/webforj/component/drawer/event/DrawerCloseEvent"},keypress:{name:"KeypressEvent",description:'An event that is triggered when one of "special keys" is pressed while the component has focus. These keys have specific codes, allowing for conditional logic to be implemented based on the key pressed.',link:"com/webforj/component/event/KeypressEvent"},modify:{name:"ModifyEvent",description:"An event that is triggered when an is changed or modified. It typically occurs any time a user changes an aspect of the component, such as each time a letter is input or removed from an input component.",link:"com/webforj/component/event/ModifyEvent"},listSelect:{name:"ListSelectEvent",description:"An event which is fired when the user selects an item from a list.",link:"com/webforj/component/list/event/ListSelectEvent"},listOpen:{name:"ListOpenEvent",description:"An event which is fired when a list dropdown is opened.",link:"com/webforj/component/list/event/ListOpenEvent"},listClose:{name:"ListCloseEvent",description:"An event which is fired when a list dropdown is closed.",link:"com/webforj/component/list/event/ListCloseEvent"},listClick:{name:"ListClickEvent",description:"This event is triggered when the user clicks an item from a List-based component.",link:"com/webforj/component/list/event/ListClickEvent"},navigatorChange:{name:"NavigatorChangeEvent",description:"This event is fired when the navigator direction is changed.",link:"com/webforj/component/navigator/event/NavigatorChangeEvent"},navigatorMoveFirst:{name:"NavigatorMoveFirstEvent",description:"This event is fired when the user has navigated to the first page.",link:"com/webforj/component/navigator/event/NavigatorMoveFirstEvent"},navigatorMoveLast:{name:"NavigatorMoveLastEvent",description:"This event is fired when the user has navigated to the last page.",link:"com/webforj/component/navigator/event/NavigatorMoveLastEvent"},navigatorMoveNext:{name:"NavigatorMoveNextEvent",description:"This event is fired when the user has navigated to the next page.",link:"com/webforj/component/navigator/event/NavigatorMoveNextEvent"},navigatorMovePrevious:{name:"NavigatorMovePreviousEvent",description:"This event is fired when the user has navigated to the previous page.",link:"com/webforj/component/navigator/event/NavigatorMovePreviousEvent"}}).filter((e=>{let[t]=e;return n.includes(t)})).map((e=>{let[t,n]=e;return(0,c.FD)("tr",{children:[(0,c.Y)("td",{css:i,children:(0,c.Y)(h.A,{type:"foundation",location:n.link,code:"true",children:n.name})}),(0,c.Y)("td",{children:n.description})]},t)}))]})},JavadocLink:h.A,ParentLink:function(e){let{parent:t,url:n="./"}=e;const r="This class",[o,s]=(0,i.useState)(r);return(0,i.useEffect)((()=>{const e=document.querySelector("h1");e&&s(e.textContent)}),[]),(0,c.Y)("div",{children:(0,c.Y)(p.A,{type:"info",title:"Inheritance",children:(0,c.FD)("p",{children:[o!==r?(0,c.Y)("code",{children:o}):o," is a ",t," component, and inherits its features and behaviors. For an overview of ",t," properties, events, and other important information, please refer to the ",(0,c.FD)("a",{href:n,children:[t," documentation"]}),"."]})})})},TableBuilder:m.A,TabSwitcher:function(e){let{component:t}=e;o.AH`
    /* font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif; */
    font-weight: unset;
  `;const[n,r]=(0,i.useState)("");return(0,c.FD)("div",{children:[(0,c.Y)(u.A,{to:"/docs/components/"+t,children:"Test1"}),(0,c.Y)(u.A,{to:"/docs/components/styles/"+t,children:"Test2"})]})}}}}]);