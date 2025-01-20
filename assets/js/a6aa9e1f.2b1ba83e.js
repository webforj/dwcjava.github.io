"use strict";(self.webpackChunkdwcj_documentation=self.webpackChunkdwcj_documentation||[]).push([[7643,8401],{35124:(e,t,n)=>{n.r(t),n.d(t,{default:()=>v});n(96540);var r=n(18215),o=n(44586),i=n(45500),s=n(17559),a=n(28027),c=n(47713),l=n(41463),d=n(33892),h=n(5260),m=n(44096),p=n(74848);function u(e){const t=(0,m.kJ)(e);return(0,p.jsx)(h.A,{children:(0,p.jsx)("script",{type:"application/ld+json",children:JSON.stringify(t)})})}function A(e){const{metadata:t}=e,{siteConfig:{title:n}}=(0,o.A)(),{blogDescription:r,blogTitle:s,permalink:a}=t,c="/"===a?n:s;return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(i.be,{title:c,description:r}),(0,p.jsx)(l.A,{tag:"blog_posts_list"})]})}function g(e){const{metadata:t,items:n,sidebar:r}=e;return(0,p.jsxs)(a.A,{sidebar:r,children:[(0,p.jsx)(d.A,{items:n}),(0,p.jsx)(c.A,{metadata:t})]})}function v(e){return(0,p.jsxs)(i.e3,{className:(0,r.A)(s.G.wrapper.blogPages,s.G.page.blogListPage),children:[(0,p.jsx)(A,{...e}),(0,p.jsx)(u,{...e}),(0,p.jsx)(g,{...e})]})}},47713:(e,t,n)=>{n.d(t,{A:()=>s});n(96540);var r=n(21312),o=n(39022),i=n(74848);function s(e){const{metadata:t}=e,{previousPage:n,nextPage:s}=t;return(0,i.jsxs)("nav",{className:"pagination-nav","aria-label":(0,r.T)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"}),children:[n&&(0,i.jsx)(o.A,{permalink:n,title:(0,i.jsx)(r.A,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)",children:"Newer entries"})}),s&&(0,i.jsx)(o.A,{permalink:s,title:(0,i.jsx)(r.A,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)",children:"Older entries"}),isNext:!0})]})}},82907:(e,t,n)=>{n.d(t,{A:()=>L});n(96540);var r=n(18215),o=n(44096),i=n(74848);function s(e){let{children:t,className:n}=e;return(0,i.jsx)("article",{className:n,children:t})}var a=n(28774);const c={title:"title_f1Hy"};function l(e){let{className:t}=e;const{metadata:n,isBlogPostPage:s}=(0,o.e7)(),{permalink:l,title:d}=n,h=s?"h1":"h2";return(0,i.jsx)(h,{className:(0,r.A)(c.title,t),children:s?d:(0,i.jsx)(a.A,{to:l,children:d})})}var d=n(21312),h=n(53465),m=n(36266);const p={container:"container_mt6G"};function u(e){let{readingTime:t}=e;const n=function(){const{selectMessage:e}=(0,h.W)();return t=>{const n=Math.ceil(t);return e(n,(0,d.T)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:n}))}}();return(0,i.jsx)(i.Fragment,{children:n(t)})}function A(e){let{date:t,formattedDate:n}=e;return(0,i.jsx)("time",{dateTime:t,children:n})}function g(){return(0,i.jsx)(i.Fragment,{children:" \xb7 "})}function v(e){let{className:t}=e;const{metadata:n}=(0,o.e7)(),{date:s,readingTime:a}=n,c=(0,m.i)({day:"numeric",month:"long",year:"numeric",timeZone:"UTC"});return(0,i.jsxs)("div",{className:(0,r.A)(p.container,"margin-vert--md",t),children:[(0,i.jsx)(A,{date:s,formattedDate:(l=s,c.format(new Date(l)))}),void 0!==a&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(g,{}),(0,i.jsx)(u,{readingTime:a})]})]});var l}var b=n(56913);const f={authorCol:"authorCol_Hf19",imageOnlyAuthorRow:"imageOnlyAuthorRow_pa_O",imageOnlyAuthorCol:"imageOnlyAuthorCol_G86a"};function x(e){let{className:t}=e;const{metadata:{authors:n},assets:s}=(0,o.e7)();if(0===n.length)return null;const a=n.every((e=>{let{name:t}=e;return!t})),c=1===n.length;return(0,i.jsx)("div",{className:(0,r.A)("margin-top--md margin-bottom--sm",a?f.imageOnlyAuthorRow:"row",t),children:n.map(((e,t)=>(0,i.jsx)("div",{className:(0,r.A)(!a&&(c?"col col--12":"col col--6"),a?f.imageOnlyAuthorCol:f.authorCol),children:(0,i.jsx)(b.A,{author:{...e,imageURL:s.authorsImageUrls[t]??e.imageURL}})},t)))})}function w(){return(0,i.jsxs)("header",{children:[(0,i.jsx)(l,{}),(0,i.jsx)(v,{}),(0,i.jsx)(x,{})]})}var j=n(70440),k=n(77910);function y(e){let{children:t,className:n}=e;const{isBlogPostPage:s}=(0,o.e7)();return(0,i.jsx)("div",{id:s?j.LU:void 0,className:(0,r.A)("markdown",n),children:(0,i.jsx)(k.A,{children:t})})}var D=n(17559),E=n(4336),Y=n(62053);function C(){return(0,i.jsx)("b",{children:(0,i.jsx)(d.A,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts",children:"Read more"})})}function B(e){const{blogPostTitle:t,...n}=e;return(0,i.jsx)(a.A,{"aria-label":(0,d.T)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:t}),...n,children:(0,i.jsx)(C,{})})}function N(){const{metadata:e,isBlogPostPage:t}=(0,o.e7)(),{tags:n,title:s,editUrl:a,hasTruncateMarker:c,lastUpdatedBy:l,lastUpdatedAt:d}=e,h=!t&&c,m=n.length>0;if(!(m||h||a))return null;if(t){const e=!!(a||d||l);return(0,i.jsxs)("footer",{className:"docusaurus-mt-lg",children:[m&&(0,i.jsx)("div",{className:(0,r.A)("row","margin-top--sm",D.G.blog.blogFooterEditMetaRow),children:(0,i.jsx)("div",{className:"col",children:(0,i.jsx)(Y.A,{tags:n})})}),e&&(0,i.jsx)(E.A,{className:(0,r.A)("margin-top--sm",D.G.blog.blogFooterEditMetaRow),editUrl:a,lastUpdatedAt:d,lastUpdatedBy:l})]})}return(0,i.jsxs)("footer",{className:"row docusaurus-mt-lg",children:[m&&(0,i.jsx)("div",{className:(0,r.A)("col",{"col--9":h}),children:(0,i.jsx)(Y.A,{tags:n})}),h&&(0,i.jsx)("div",{className:(0,r.A)("col text--right",{"col--3":m}),children:(0,i.jsx)(B,{blogPostTitle:s,to:e.permalink})})]})}function L(e){let{children:t,className:n}=e;const a=function(){const{isBlogPostPage:e}=(0,o.e7)();return e?void 0:"margin-bottom--xl"}();return(0,i.jsxs)(s,{className:(0,r.A)(a,n),children:[(0,i.jsx)(w,{}),(0,i.jsx)(y,{children:t}),(0,i.jsx)(N,{})]})}},33892:(e,t,n)=>{n.d(t,{A:()=>s});n(96540);var r=n(44096),o=n(82907),i=n(74848);function s(e){let{items:t,component:n=o.A}=e;return(0,i.jsx)(i.Fragment,{children:t.map((e=>{let{content:t}=e;return(0,i.jsx)(r.in,{content:t,children:(0,i.jsx)(n,{children:(0,i.jsx)(t,{})})},t.metadata.permalink)}))})}},53152:(e,t,n)=>{n.d(t,{A:()=>s});n(96540);var r=n(17437),o=n(28774),i=n(2445);function s(e){let{imagePath:t,title:n,description:s,link:a}=e;const c=r.AH`
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
  `,l=r.AH`
    width: 250px;
    height: 150px;
    object-fit: contain;
    margin: 0 0 5px -3px;
  `,d=r.AH`
      height: 1px;
      background-color: lightgray;
      margin: 5px 0 15px 0;
      transition: all var(--ifm-transition-fast) ease;
      transition-property: background-color,box-shadow;
    `,h=r.AH`
    h5{
      font-size: 1em;
    }
    p{
      font-size: .9em;
      margin: 0px !important;
    }
  `;return(0,i.FD)(o.A,{to:a,css:c,children:[(0,i.Y)("div",{css:{display:"flex",justifyContent:"center"},children:(0,i.Y)("img",{src:t.default,css:l})}),(0,i.Y)("div",{css:d,className:"bar"}),(0,i.FD)("div",{css:h,children:[(0,i.Y)("h5",{children:n}),(0,i.Y)("p",{children:s})]})]})}},5943:(e,t,n)=>{n.d(t,{h:()=>b,A:()=>f});var r=n(96540),o=n(17437),i=n(5556),s=n.n(i),a=n(11470),c=n(19365),l=n(41622),d=n(61302);const h=n.p+"assets/images/expand-ba3f00f73da43d91e5b17663c4a7d108.png",m="data:image/png;base64,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",p="data:image/png;base64,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";var u=n(95293),A=n(52706),g=n(2445);function v(e){let{collapse:t,setCollapse:n}=e;v.propTypes={collapse:s().bool.isRequired,setCollapse:s().func.isRequired};const r=o.AH`
    display: flex;
    justify-content: end;
    align-items: flex-end;
    background-color: transparent;
    margin-bottom: -10px;
  `,i=o.AH`
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
  `,a=o.AH`
    filter: invert(var(--inversion-percentage));
  `;return(0,g.Y)("div",{css:r,children:(0,g.Y)("button",{css:i,onClick:()=>{n(!t)},children:t?(0,g.Y)("img",{alt:"collapse_button",css:a,src:h,className:"icon-tabler-arrow-bar-up"}):(0,g.Y)("img",{css:a,src:m,className:"icon-tabler-arrow-bar-down"})})})}function b(e){let{url:t}=e;const n=o.AH`
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
  `,r=o.AH`
    filter: invert(var(--inversion-percentage));
    ::before {
      mix-blend-mode: lighten;
      opacity: 0.5;
    }
  `;return(0,g.Y)("button",{css:n,onClick:()=>{window.open(t,"_blank")},children:(0,g.Y)("img",{css:r,src:p})})}function f(e){let{path:t,javaC:n,javaE:i,urls:h,cssURL:m,javaHighlight:p,height:x,frame:w,tabs:j}=e;f.propTypes={path:s().string.isRequired,javaC:s().string,javaE:s().string,urls:s().arrayOf(s().string),cssURL:s().string,javaHighlight:s().string,height:s().string,frame:s().string,tabs:s().arrayOf(s().string)};const[k,y]=(0,r.useState)(""),[D,E]=(0,r.useState)(""),[Y,C]=(0,r.useState)({}),[B,N]=(0,r.useState)(""),[L,S]=(0,r.useState)(!(!n||!i)),[M,F]=(0,r.useState)(!1),[H,O]=(0,r.useState)({}),[T,P]=(0,r.useState)(!1),[G,J]=(0,r.useState)(0),[z,R]=(0,r.useState)(0),[X,U]=(0,r.useState)(25),[Z,W]=(0,r.useState)(25),[V,I]=(0,r.useState)(0),[K,q]=(0,r.useState)(!1),Q=(0,r.useRef)(null),_=(0,r.useRef)(null);function $(e,t,n){return(0,g.Y)(d.A,{css:t,className:"codeDemoBlock",language:"java",showLineNumbers:!0,metastring:n,children:e.code})}(0,r.useEffect)((()=>{i&&fetch(i).then((e=>e.text())).then((e=>{E(e);const t=new URL(i).pathname.split("/"),n=t[t.length-1];O((e=>({...e,javaFile:n})))})),n&&fetch(n).then((e=>e.text())).then((e=>{y(e)})),m&&fetch(m).then((e=>e.text())).then((e=>{N(e);const t=new URL(m).pathname.split("/"),n=t[t.length-1];O((e=>({...e,cssFile:n})))})),h&&h.forEach((function(e){const t=new URL(e),n=t.pathname.split("/"),r=n[n.length-1];fetch(e).then((e=>e.text())).then((e=>{!function(e,t){C((n=>({...n,[e]:{fileName:e,code:t}})))}(r,e)}))})),I(Q.current?Q.current.offsetWidth:0)}),[]);const ee=()=>{P(!1)},te=e=>{if(T){const t=e.clientX-G;z+t>V/3&&(Q.current.style.width=`${z+t}px`,_.current.style.right=(X-t<25?25:X-t)+"px",W(X-t<25?25:X-t))}},ne=o.AH`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-bottom: 16px;
    background-color: var(--dwc-surface-1);
  `,re=o.AH`
    width: 100%;
    border: 1px solid var(--ifm-toc-border-color);
    border-right: none;
    background-color: transparent;
    display: flex;
    position: relative;
  `,oe=o.AH`
    min-height: 100px;
    height: 100%;
    width: 100%;
    height: ${x||"100%"};
    pointer-events: ${T?"none":"auto"};
  `,ie=o.AH`
    display: flex;
    justify-content: flex-end;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
    ${M&&"opacity: 1;"};
    margin: 10px 0 0 0;
    position: absolute;
    right: 25px;
  `,se=o.AH`
    display: flex;
    align-items: center;
    cursor: ew-resize;
    border-left: 1px solid var(--ifm-toc-border-color);
    border-right: 1px solid var(--ifm-toc-border-color);
    background-color: var(--dwc-surface-3);
  `,ae=o.AH`
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
  `,ce=o.AH`
    li[aria-selected="true"] {
      border-color: var(--ifm-color-primary);
    }

    .tabs__item {
      padding: 5px 20px -2px 20px;
      border-radius: 0px;
    }
  `,le=o.AH`
    border-radius: 0px;
    box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 4px 0px inset;
  `;return(0,g.FD)("div",{css:ne,onMouseUp:ee,onMouseLeave:ee,onMouseMove:te,children:["hidden"!=w?(0,g.FD)("div",{onMouseEnter:()=>{F(!0)},onMouseLeave:()=>F(!1),css:re,children:[(0,g.Y)("iframe",{onMouseUp:ee,loading:"lazy",src:t+"&__theme__="+(0,u.G)().colorMode,css:oe,ref:Q,onMouseMove:te}),(0,g.Y)("div",{css:ie,ref:_,children:(0,g.Y)(b,{url:t})}),(0,g.Y)("div",{css:se,onMouseDown:e=>{e.preventDefault(),P(!0),J(e.clientX),R(Q.current?Q.current.offsetWidth:0),U(Z)},children:(0,g.Y)(A.A,{})})]}):null,(0,g.FD)(l.A,{css:ae,summary:(0,g.Y)("summary",{onClick:()=>q(!K),children:K?"Hide Code":"Show Code"}),children:[n&&i?(0,g.Y)(v,{collapse:L,setCollapse:S}):null,m?(0,g.FD)(a.A,{css:ce,children:[(0,g.Y)(c.A,{value:j?j[0]:"Java",label:j?j[0]:H.javaFile,default:!0,children:(0,g.Y)(d.A,{css:le,className:"codeDemoBlock",language:"java",showLineNumbers:!0,metastring:p,children:L?k:D})}),Object.keys(Y).map(((e,t)=>(0,g.Y)(c.A,{value:e,label:e,children:$(Y[e],le,p)},"tab"+t))),(0,g.Y)(c.A,{value:j?j[1]:"CSS",label:j?j[1]:H.cssFile,children:(0,g.Y)(d.A,{css:le,className:"codeDemoBlock",language:"css",showLineNumbers:!0,children:B})})]}):(0,g.FD)(a.A,{css:ce,children:[(0,g.Y)(c.A,{value:j?j[0]:"Java",label:j?j[0]:H.javaFile,default:!0,children:(0,g.Y)(d.A,{css:le,className:"codeDemoBlock",language:"java",showLineNumbers:!0,metastring:p,children:L?k:D})}),Object.keys(Y).map(((e,t)=>(0,g.Y)(c.A,{value:e,label:e,children:$(Y[e],le,p)},"tab"+t)))]})]})]})}},65529:(e,t,n)=>{n.d(t,{A:()=>h});n(96540);var r=n(17437),o=n(90276),i=n(50526),s=n(44863),a=n(14303),c=n(64680),l=n(78144),d=n(2445);function h(e){let{chip:t,label:n,href:h,exclude:m,iconName:p,tooltipText:u,color:A}=e;const g=r.AH`
    margin-right: 0.5em;
    margin-bottom: 1em;
    background-color: var(--chip-background);
    color: var(--chip-text);

    :hover{
      color: inherit;
      background-color: var(--chip-background-hover);
    }
  `,v=r.AH`
      color: var(--chip-icon-color) !important;
  `;let b;if("shadow"===t)u="This component renders with a shadow DOM, an API built into the browser that facilitates encapsulation.",h="https://documentation.webforj.com/docs/glossary#shadow-dom",n="Shadow",p="shadow";else if("name"===t){if(u="The name of this web component as it appears in the DOM.",!m){const e="https://docs.webforj.com/docs/client-components/",t=n.replace("dwc-","");h=e.concat(t)}p="code"}else"scoped"==t&&(u="This component uses scoped components, an alternative approach to the shadow DOM, a browser API that enables encapsulation. These components scope their styles to avoid leaks or conflicts instead of relying on the native shadow DOM.",m="true",n="Scoped",p="scoped");return b="shadow"===p?(0,d.Y)(a.A,{css:v}):"code"===p?(0,d.Y)(c.A,{css:v}):"scoped"===p?(0,d.Y)(s.A,{css:v}):(0,d.Y)(l.A,{css:v}),(0,d.Y)(o.A,{title:u,arrow:!0,css:g,children:(0,d.Y)(i.A,{className:`doc-chip ${t.className||""}`,label:n,component:"a",href:m?null:h,icon:b,clickable:!m,color:A,target:"_blank"})})}},33235:(e,t,n)=>{n.d(t,{A:()=>l});var r=n(96540),o=n(17437),i=n(90276),s=n(50526),a=n(37785),c=n(2445);function l(e){let{type:t,location:n,top:l,children:d,code:h,suffix:m}=e;const[p,u]=(0,r.useState)(""),[A,g]=(0,r.useState)(!1);(0,r.useEffect)((()=>{document.querySelectorAll(".doc-chip").length>0?g(!0):g(!1)}),[]),(0,r.useEffect)((()=>{!async function(){const e=m||"",r="webforj_latest_version",o=localStorage.getItem(r),i=localStorage.getItem(`${r}_timestamp`);if(o&&i&&Date.now()-i<864e5){u(`https://javadoc.io/doc/com.webforj/webforj-${t}/${o}/${n}.html${e}`)}else try{const o=await fetch("https://api.github.com/repos/webforj/webforj/releases/latest");if(!o.ok)throw new Error(`GitHub API error: ${o.statusText}`);const i=(await o.json()).tag_name;console.log(i),localStorage.setItem(r,i),localStorage.setItem(`${r}_timestamp`,Date.now()),u(`https://javadoc.io/doc/com.webforj/webforj-${t}/${i}/${n}.html${e}`)}catch(s){console.error("Failed to fetch the latest version:",s),u(`https://javadoc.io/doc/com.webforj/webforj-${t}/latest/${n}.html${e}`)}}()}),[t,n,m]);const v=o.AH`
    ${e=>e&&o.AH`
        margin-bottom: 1em;
        margin-left: 0.5em;
        float: right;
        @media (max-width: 500px) {
          margin-bottom: 1em;
          float: none;
          margin-left: -0.25em;
        }
      `}
  `,b=o.AH`
    width: 100%;
    margin-bottom: 1em;
    display: flex;
    flex-direction: row-reverse;
  `,f=o.AH`
    background-color: var(--javadoclink-bg);
    color: var(--javadoclink-color);
    padding: 0 0 0 5px;
    :hover {
      background-color: var(--javadoclink-hover-bg);
      color: var(--javadoclink-hover-color);
    }
  `;return(0,c.FD)(c.FK,{children:["true"===l&&A&&(0,c.Y)(i.A,{title:"JavaDoc",arrow:!0,css:v,children:(0,c.Y)(s.A,{css:f,label:"Java API",component:"a",href:p,icon:(0,c.Y)(a.A,{}),clickable:!0,color:"primary",target:"_blank"})}),"true"===l&&!A&&(0,c.Y)("div",{css:b,children:(0,c.Y)(i.A,{title:"JavaDoc",arrow:!0,children:(0,c.Y)(s.A,{css:f,label:"Java API",component:"a",href:p,icon:(0,c.Y)(a.A,{}),clickable:!0,color:"primary",target:"_blank"})})}),"true"!==l&&!h&&(0,c.Y)("a",{href:p,target:"_blank",children:d}),"true"!==l&&h&&(0,c.Y)("code",{children:(0,c.Y)("a",{href:p,target:"_blank",children:d})})]})}},41530:(e,t,n)=>{n.d(t,{A:()=>s});var r=n(96540),o=n(28774),i=n(74848);function s(e){const[t,n]=(0,r.useState)(null);if((0,r.useEffect)((()=>{fetch("https://dwc.style/docs/dwc-components.json").then((e=>e.json())).then((t=>{const r=t.components.find((t=>t.tag===e.tag));n(r)}))}),[]),!t)return(0,i.jsx)("div",{children:"Loading..."});const s=t.docsTags?.filter((e=>"part"===e.name)),a=t.slots?.map((e=>({name:e.name,desc:e.docs}))),c=t.styles?.map((e=>({name:e.name,description:e.docs}))),l=t.props?.map((e=>({display:e.reflectToAttr,attr:e.attr,desc:e.docs,type:e.type}))),d=t?.dependencies||[];return(0,i.jsxs)(i.Fragment,{children:["parts"==e.table&&(0,i.jsxs)("table",{className:"custom--table",children:[(0,i.jsx)("thead",{children:(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{children:"Part"}),(0,i.jsx)("th",{children:"Description"})]},"header")}),(0,i.jsx)("tbody",{children:s?.map((t=>{const[n,r]=t.text.split(" - ");return!e.exclusions?.includes(n)&&(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:n})}),(0,i.jsx)("td",{children:r})]},t.id)}))})]}),"slots"==e.table&&(0,i.jsxs)("table",{className:"custom--table",children:[(0,i.jsx)("thead",{children:(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{children:"Slot"}),(0,i.jsx)("th",{children:"Description"})]},"header")}),(0,i.jsx)("tbody",{children:a?.map((t=>!e.exclusions?.includes(t.name)&&""!=t.name&&(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:t.name})}),(0,i.jsx)("td",{children:t.desc})]},t.name)))})]}),"properties"==e.table&&(0,i.jsxs)("table",{className:"custom--table",children:[(0,i.jsx)("thead",{children:(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{children:"Name"}),(0,i.jsx)("th",{children:"Description"})]},"header")}),(0,i.jsx)("tbody",{children:c?.map((t=>!e.exclusions?.includes(t.name)&&(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:t.name})}),(0,i.jsx)("td",{children:t.description})]},t.name)))})]}),"reflects"==e.table&&(0,i.jsxs)("table",{className:"custom--table",children:[(0,i.jsx)("thead",{children:(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{children:"Attribute"}),(0,i.jsx)("th",{children:"Description"}),(0,i.jsx)("th",{children:"Type"})]},"header")}),(0,i.jsx)("tbody",{children:l?.map((t=>null!=t.attr&&1==t.display&&!e.exclusions?.includes(t.attr)&&(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:t.attr})}),(0,i.jsx)("td",{children:t.desc}),(0,i.jsx)("td",{children:t.type})]},t.attr)))})]}),"dependencies"==e.table&&(0,i.jsx)("ul",{children:d.map(((e,t)=>(0,i.jsx)("li",{children:(0,i.jsx)(o.A,{to:"/docs/client-components/"+e.replace("dwc-","").charAt(0).toUpperCase()+e.slice(5),children:e},t)})))}),"properties"!=e.table&&"parts"!=e.table&&"slots"!=e.table&&"reflects"!=e.table&&"dependencies"!=e.table&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("h4",{children:"Shadow Parts"}),(0,i.jsxs)("table",{className:"custom--table",children:[(0,i.jsx)("thead",{children:(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{children:"Part"}),(0,i.jsx)("th",{children:"Description"})]},"header")}),(0,i.jsx)("tbody",{children:s?.map((e=>{const[t,n]=e.text.split(" - ");return(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:t})}),(0,i.jsx)("td",{children:n})]},e.id)}))})]}),(0,i.jsx)("h4",{children:"CSS Properties"}),(0,i.jsxs)("table",{className:"custom--table",children:[(0,i.jsx)("thead",{children:(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{children:"Name"}),(0,i.jsx)("th",{children:"Description"})]},"header")}),(0,i.jsx)("tbody",{children:c?.map((e=>(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:e.name})}),(0,i.jsx)("td",{children:e.description})]},e.name)))})]}),(0,i.jsx)("h4",{children:"Reflected Attributes"}),(0,i.jsxs)("table",{className:"custom--table",children:[(0,i.jsx)("thead",{children:(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{children:"Attribute"}),(0,i.jsx)("th",{children:"Description"}),(0,i.jsx)("th",{children:"Type"})]},"header")}),(0,i.jsx)("tbody",{children:l?.map((t=>null!=t.attr&&0==t.display&&!e.exclusions?.includes(t.attr)&&(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:t.attr})}),(0,i.jsx)("td",{children:t.desc}),(0,i.jsx)("td",{children:t.type})]},t.attr)))})]})]})]})}},16999:(e,t,n)=>{n.d(t,{A:()=>i});n(96540);var r=n(14718),o=n(74848);function i(e){return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(r.A,{...e})})}},2356:(e,t,n)=>{n.d(t,{A:()=>g});var r=n(96540),o=n(64678),i=n(17437),s=n(95293),a=n(5943),c=n(2445);var l=n(53152),d=n(65529),h=n(33235);var m=n(27293);var p=n(41530),u=(n(11470),n(19365),n(28774));var A=n(3514);const g={...o.A,AppLayoutViewer:function(e){let{path:t,mobile:n,javaE:o,cssURL:l}=e;const[d,h]=(0,r.useState)(!1),m=i.AH`
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 4rem 0;
        /* width: 110%; */
        /* margin-left: -5%; */
    `,p=i.AH`
        position: relative;
        width : 100%;
        max-width: ${"true"==n?"375px":"100%"};
        height: ${"true"==n?"700px":"600px"};
        border-radius: 32px;
        overflow: hidden;
        box-shadow: 0 0 0 10px black, 0 3px 22px black;
        outline: thin solid black;
    `,u=i.AH`
        width: 100%;
        height: 100%;
        background: var(--dwc-surface-3);
    `,A=i.AH`
      display: flex;
      justify-content: flex-end;
      opacity: 0;
      transition: opacity 0.3s ease-in-out;
      ${d&&"opacity: 1;"};
      margin: 10px 0 0 0;
      position: absolute;
      top: 10px;
      right: 5px;
    `;return(0,c.FD)("div",{css:m,children:[(0,c.FD)("div",{css:p,onMouseEnter:()=>h(!0),onMouseLeave:()=>h(!1),children:[(0,c.Y)("div",{css:A,children:(0,a.h)({url:t})}),(0,c.Y)("iframe",{src:t+"&__theme__="+(0,s.G)().colorMode,css:u,loading:"lazy"})]}),(0,c.Y)("br",{}),(0,c.Y)(a.A,{frame:"hidden",javaE:o,cssURL:l})]})},ComponentCard:l.A,ComponentDemo:a.A,DocCardList:A.A,DocChip:d.A,EventTable:function(e){let{base:t,events:n}=e;const r=i.AH`
    text-align: center;
  `;return(0,c.FD)("table",{children:[(0,c.Y)("thead",{children:(0,c.FD)("tr",{children:[(0,c.Y)("th",{children:"Event"}),(0,c.Y)("th",{children:"Description"})]})}),t&&Object.entries({blur:{name:"BlurEvent",description:"An event that is triggered when a component loses focus.",link:"com/webforj/component/event/BlurEvent"},focus:{name:"FocusEvent",description:"An event that is triggered when a component gains focus, opposite of a blur event.",link:"com/webforj/component/event/FocusEvent"},mouseEnter:{name:"MouseEnterEvent",description:"An event that is triggered when the mouse cursor enters the boundaries of a component.",link:"com/webforj/component/event/MouseEnterEvent"},mouseExit:{name:"MouseExitEvent",description:"An event that is triggered when the mouse cursor exits the boundaries of a component.",link:"com/webforj/component/event/MouseExitEvent"},rightMouseDown:{name:"RightMouseDownEvent",description:"An event that is triggered when the user presses the right mouse button while the cursor is over a component.",link:"com/webforj/component/event/RightMouseDownEvent"}}).map((e=>{let[t,n]=e;return(0,c.FD)("tr",{children:[(0,c.Y)("td",{css:r,children:(0,c.Y)(h.A,{type:"foundation",location:n.link,code:"true",children:n.name})}),(0,c.Y)("td",{children:n.description})]},t)})),n&&Object.entries({buttonClick:{name:"ButtonClickEvent",description:"An event that is triggered when a user interacts with a button by clicking or tapping on it.",link:"com/webforj/component/button/event/ButtonClickEvent"},check:{name:"CheckEvent",description:"An event that is triggered when the state of a component changes and becomes checked. It occurs when the user interacts with a checkbox element by clicking or tapping on it, causing the checkbox to transition from an unchecked state to a checked state.",link:"com/webforj/component/event/CheckEvent"},uncheck:{name:"UncheckEvent",description:"An event that is triggered when the state of a component changes and becomes unchecked.",link:"com/webforj/component/event/UncheckEvent"},toggle:{name:"ToggleEvent",description:'A ToggleEvent fires a CheckBox or a similar UI element changes its state between "on" and "off" or "active" and "inactive."',link:"com/webforj/component/event/UncheckEvent"},dialogOpen:{name:"DialogOpenEvent",description:"An event that is fired when the Dialog is opened.",link:"com/webforj/component/dialog/event/DialogOpenEvent"},dialogClose:{name:"DialogCloseEvent",description:"An event that is fired when the Dialog is closed.",link:"com/webforj/component/dialog/event/DialogCloseEvent"},drawerOpen:{name:"DrawerOpenEvent",description:"An event that is fired when the Drawer is opened.",link:"com/webforj/component/drawer/event/DrawerOpenEvent"},drawerClose:{name:"DrawerCloseEvent",description:"An event that is fired when the Drawer is closed.",link:"com/webforj/component/drawer/event/DrawerCloseEvent"},keypress:{name:"KeypressEvent",description:'An event that is triggered when one of "special keys" is pressed while the component has focus. These keys have specific codes, allowing for conditional logic to be implemented based on the key pressed.',link:"com/webforj/component/event/KeypressEvent"},modify:{name:"ModifyEvent",description:"An event that is triggered when an is changed or modified. It typically occurs any time a user changes an aspect of the component, such as each time a letter is input or removed from an input component.",link:"com/webforj/component/event/ModifyEvent"},listSelect:{name:"ListSelectEvent",description:"An event which is fired when the user selects an item from a list.",link:"com/webforj/component/list/event/ListSelectEvent"},listOpen:{name:"ListOpenEvent",description:"An event which is fired when a list dropdown is opened.",link:"com/webforj/component/list/event/ListOpenEvent"},listClose:{name:"ListCloseEvent",description:"An event which is fired when a list dropdown is closed.",link:"com/webforj/component/list/event/ListCloseEvent"},listClick:{name:"ListClickEvent",description:"This event is triggered when the user clicks an item from a List-based component.",link:"com/webforj/component/list/event/ListClickEvent"},navigatorChange:{name:"NavigatorChangeEvent",description:"This event is fired when the navigator direction is changed.",link:"com/webforj/component/navigator/event/NavigatorChangeEvent"},navigatorMoveFirst:{name:"NavigatorMoveFirstEvent",description:"This event is fired when the user has navigated to the first page.",link:"com/webforj/component/navigator/event/NavigatorMoveFirstEvent"},navigatorMoveLast:{name:"NavigatorMoveLastEvent",description:"This event is fired when the user has navigated to the last page.",link:"com/webforj/component/navigator/event/NavigatorMoveLastEvent"},navigatorMoveNext:{name:"NavigatorMoveNextEvent",description:"This event is fired when the user has navigated to the next page.",link:"com/webforj/component/navigator/event/NavigatorMoveNextEvent"},navigatorMovePrevious:{name:"NavigatorMovePreviousEvent",description:"This event is fired when the user has navigated to the previous page.",link:"com/webforj/component/navigator/event/NavigatorMovePreviousEvent"}}).filter((e=>{let[t]=e;return n.includes(t)})).map((e=>{let[t,n]=e;return(0,c.FD)("tr",{children:[(0,c.Y)("td",{css:r,children:(0,c.Y)(h.A,{type:"foundation",location:n.link,code:"true",children:n.name})}),(0,c.Y)("td",{children:n.description})]},t)}))]})},JavadocLink:h.A,ParentLink:function(e){let{parent:t,url:n="./"}=e;const o="This class",[i,s]=(0,r.useState)(o);return(0,r.useEffect)((()=>{const e=document.querySelector("h1");e&&s(e.textContent)}),[]),(0,c.Y)("div",{children:(0,c.Y)(m.A,{type:"info",title:"Inheritance",children:(0,c.FD)("p",{children:[i!==o?(0,c.Y)("code",{children:i}):i," is a ",t," component, and inherits its features and behaviors. For an overview of ",t," properties, events, and other important information, please refer to the ",(0,c.FD)("a",{href:n,children:[t," documentation"]}),"."]})})})},TableBuilder:p.A,TabSwitcher:function(e){let{component:t}=e;i.AH`
    /* font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif; */
    font-weight: unset;
  `;const[n,o]=(0,r.useState)("");return(0,c.FD)("div",{children:[(0,c.Y)(u.A,{to:"/docs/components/"+t,children:"Test1"}),(0,c.Y)(u.A,{to:"/docs/components/styles/"+t,children:"Test2"})]})}}}}]);