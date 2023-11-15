"use strict";(self.webpackChunkdwcj_documentation=self.webpackChunkdwcj_documentation||[]).push([[3779],{8727:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var s=n(5893),i=n(1151),a=n(3273);const o={sidebar_position:0,title:"BlurEvent",sidebar_class_name:"sidebar--item__hidden",slug:"BlurEvent"},r=void 0,l={id:"components/events/blur-event",title:"BlurEvent",description:"An event that is triggered when an element loses focus. It occurs when the user interacts with an element, such as clicking inside an input field, and then moves the focus away from that element, typically by clicking outside of it or tabbing to another element on the page. This event is useful when you want to detect when a user moves away from a particular element on a web page, such as an input field or a button. This class also inherits methods from the base Event class.",source:"@site/docs/components/events/blur-event.md",sourceDirName:"components/events",slug:"/components/events/BlurEvent",permalink:"/docs/components/events/BlurEvent",draft:!1,unlisted:!1,editUrl:"https://github.com/DwcJava/dwcjava.github.io/tree/website/docs/components/events/blur-event.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{sidebar_position:0,title:"BlurEvent",sidebar_class_name:"sidebar--item__hidden",slug:"BlurEvent"},sidebar:"documentationSidebar",previous:{title:"Event",permalink:"/docs/components/events/event"},next:{title:"ButtonClickEvent",permalink:"/docs/components/events/ButtonClickEvent"}},c={},d=[{value:"Event Payload",id:"event-payload",level:2},{value:"See Also",id:"see-also",level:2}];function h(e){const t={a:"a",code:"code",h2:"h2",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(a.Z,{type:"engine",location:"org/dwcj/component/event/BlurEvent",top:"true"}),"\n",(0,s.jsxs)(t.p,{children:["An event that is triggered when an element loses focus. It occurs when the user interacts with an element, such as clicking inside an input field, and then moves the focus away from that element, typically by clicking outside of it or tabbing to another element on the page. This event is useful when you want to detect when a user moves away from a particular element on a web page, such as an input field or a button. This class also inherits methods from the base ",(0,s.jsx)(t.code,{children:"Event"})," class."]}),"\n",(0,s.jsx)(t.h2,{id:"event-payload",children:"Event Payload"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"Method"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:(0,s.jsx)(t.code,{children:"getText()"})}),(0,s.jsx)(t.td,{children:"Gets the text of the component."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:(0,s.jsx)(t.code,{children:"isClientValidationValid()"})}),(0,s.jsx)(t.td,{children:"Returns the result of the client validation function, if any, when the component loses focus."})]})]})]}),"\n",(0,s.jsx)(t.h2,{id:"see-also",children:"See Also"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"./event",children:"Event"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"./FocusEvent",children:"Focus Event"})}),"\n"]})]})}function u(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},3273:(e,t,n)=>{n.d(t,{Z:()=>u});var s=n(7294),i=n(917),a=n(8230),o=n(4387),r=n(6770);let l=null,c=null;const d={getLatestTag:async function(){return l&&c&&Date.now()-c<36e5?l:async function(){try{const e=await fetch("https://api.github.com/repos/DwcJava/engine/tags"),t=await e.json();return l=t[0].name,c=Date.now(),l}catch(e){return console.error("Error fetching latest tag:",e),null}}()}};var h=n(5944);function u(e){let{type:t,location:n,top:l,children:c,code:u,suffix:v}=e;const[m,p]=(0,s.useState)("");(0,s.useEffect)((()=>{(async()=>{try{let e=await d.getLatestTag();v||(v=""),e||(e="23.04"),p("https://javadoc.io/static/org.dwcj/dwcj-"+t+"/"+e+"/"+n+".html"+v)}catch(e){console.error("Error fetching latest release:",e)}})()}),[]);const f=i.iv`
    display: inline;

    ${l&&i.iv`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    margin-top: -33px;
    margin-bottom: 25px;
    `}
  `,g=i.iv`
  background-color: #0063CC;
  :hover{
    color: white;
  }
  `;return(0,h.BX)(h.HY,{children:["true"===l&&(0,h.tZ)("div",{css:f,children:(0,h.tZ)(a.Z,{title:"JavaDoc",arrow:!0,children:(0,h.tZ)(o.Z,{css:g,label:"Java API",component:"a",href:m,icon:(0,h.tZ)(r.Z,{}),clickable:!0,color:"primary",target:"_blank"})})}),"true"!==l&&!u&&(0,h.tZ)("div",{css:f,children:(0,h.tZ)("a",{href:m,target:"_blank",children:c})}),"true"!==l&&u&&(0,h.tZ)("div",{css:f,children:(0,h.tZ)("code",{children:(0,h.tZ)("a",{href:m,target:"_blank",children:c})})})]})}}}]);