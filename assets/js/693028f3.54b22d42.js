"use strict";(self.webpackChunkdwcj_documentation=self.webpackChunkdwcj_documentation||[]).push([[3779],{3273:(t,e,n)=>{n.d(e,{Z:()=>l});var a=n(7294),o=n(2863);let i=null,s=null;const r={getLatestTag:async function(){return i&&s&&Date.now()-s<36e5?i:async function(){try{const t=await fetch("https://api.github.com/repos/DwcJava/engine/tags"),e=await t.json();return i=e[0].name,s=Date.now(),i}catch(t){return console.error("Error fetching latest tag:",t),null}}()}};function l(t){let{type:e,location:n,top:i,children:s,code:l,suffix:c}=t;const[u,d]=(0,a.useState)("");(0,a.useEffect)((()=>{(async()=>{try{const t=await r.getLatestTag();c||(c=""),d("https://javadoc.io/static/org.dwcj/dwcj-"+e+"/"+t+"/"+n+".html"+c)}catch(t){console.error("Error fetching latest release:",t)}})(),console.log(i)}),[]);const p=o.iv`
    display: inline;

    ${i&&o.iv`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    `}
  `,m=o.iv`
    color: gray;
  `;return(0,o.tZ)(a.Fragment,null,"true"===i&&(0,o.tZ)("div",{css:p},(0,o.tZ)("p",{css:m},"API:\xa0"),(0,o.tZ)("b",null,(0,o.tZ)("a",{href:u,target:"_blank"},"Java"))),"true"!==i&&!l&&(0,o.tZ)("div",{css:p},(0,o.tZ)("a",{href:u,target:"_blank"},s)),"true"!==i&&l&&(0,o.tZ)("div",{css:p},(0,o.tZ)("code",null,(0,o.tZ)("a",{href:u,target:"_blank"},s))))}},5061:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>r,default:()=>p,frontMatter:()=>s,metadata:()=>l,toc:()=>u});var a=n(7462),o=(n(7294),n(3905)),i=n(3273);const s={sidebar_position:0,title:"BlurEvent",sidebar_class_name:"sidebar--item__hidden",slug:"BlurEvent"},r=void 0,l={unversionedId:"components/events/blur-event",id:"components/events/blur-event",title:"BlurEvent",description:"An event that is triggered when an element loses focus. It occurs when the user interacts with an element, such as clicking inside an input field, and then moves the focus away from that element, typically by clicking outside of it or tabbing to another element on the page. This event is useful when you want to detect when a user moves away from a particular element on a web page, such as an input field or a button.",source:"@site/docs/components/events/blur-event.md",sourceDirName:"components/events",slug:"/components/events/BlurEvent",permalink:"/docs/components/events/BlurEvent",draft:!1,editUrl:"https://github.com/DwcJava/dwcjava.github.io/tree/website/docs/components/events/blur-event.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{sidebar_position:0,title:"BlurEvent",sidebar_class_name:"sidebar--item__hidden",slug:"BlurEvent"},sidebar:"tutorialSidebar",previous:{title:"Events",permalink:"/docs/category/events-1"},next:{title:"ButtonClickEvent",permalink:"/docs/components/events/ButtonClickEvent"}},c={},u=[{value:"Event Payload",id:"event-payload",level:2}],d={toc:u};function p(t){let{components:e,...n}=t;return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)(i.Z,{type:"engine",location:"org/dwcj/component/event/BlurEvent",top:"true",mdxType:"JavadocLink"}),(0,o.kt)("p",null,"An event that is triggered when an element loses focus. It occurs when the user interacts with an element, such as clicking inside an input field, and then moves the focus away from that element, typically by clicking outside of it or tabbing to another element on the page. This event is useful when you want to detect when a user moves away from a particular element on a web page, such as an input field or a button."),(0,o.kt)("h2",{id:"event-payload"},"Event Payload"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"center"},"Events"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("inlineCode",{parentName:"td"},"text")),(0,o.kt)("td",{parentName:"tr",align:null},"A string containing the text of the component when it loses focus.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("inlineCode",{parentName:"td"},"client-validation-valid")),(0,o.kt)("td",{parentName:"tr",align:null},"A boolean value indicating the result of running the client validation function, if any, when this component lost focus.")))))}p.isMDXComponent=!0}}]);