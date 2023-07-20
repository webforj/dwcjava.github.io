"use strict";(self.webpackChunkdwcj_documentation=self.webpackChunkdwcj_documentation||[]).push([[9666],{3273:(t,e,n)=>{n.d(e,{Z:()=>c});var a=n(7294),o=n(2863);let i=null,s=null;const r={getLatestTag:async function(){return i&&s&&Date.now()-s<36e5?i:async function(){try{const t=await fetch("https://api.github.com/repos/DwcJava/engine/tags"),e=await t.json();return i=e[0].name,s=Date.now(),i}catch(t){return console.error("Error fetching latest tag:",t),null}}()}};function c(t){let{type:e,location:n,top:i,children:s,code:c,suffix:l}=t;const[d,u]=(0,a.useState)("");(0,a.useEffect)((()=>{(async()=>{try{const t=await r.getLatestTag();l||(l=""),u("https://javadoc.io/static/org.dwcj/dwcj-"+e+"/"+t+"/"+n+".html"+l)}catch(t){console.error("Error fetching latest release:",t)}})(),console.log(i)}),[]);const p=o.iv`
    display: inline;

    ${i&&o.iv`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    `}
  `,v=o.iv`
    color: gray;
  `;return(0,o.tZ)(a.Fragment,null,"true"===i&&(0,o.tZ)("div",{css:p},(0,o.tZ)("p",{css:v},"API:\xa0"),(0,o.tZ)("b",null,(0,o.tZ)("a",{href:d,target:"_blank"},"Java"))),"true"!==i&&!c&&(0,o.tZ)("div",{css:p},(0,o.tZ)("a",{href:d,target:"_blank"},s)),"true"!==i&&c&&(0,o.tZ)("div",{css:p},(0,o.tZ)("code",null,(0,o.tZ)("a",{href:d,target:"_blank"},s))))}},4622:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var a=n(7462),o=(n(7294),n(3905)),i=n(3273);const s={sidebar_position:0,title:"FocusEvent",sidebar_class_name:"sidebar--item__hidden",slug:"FocusEvent"},r=void 0,c={unversionedId:"components/events/focus-event",id:"components/events/focus-event",title:"FocusEvent",description:"An event that is triggered when an element gains focus, opposite of a blur event. It occurs when the user interacts with an element, typically by clicking inside an input field or navigating to it using the keyboard's tab key, causing the element to become active and ready to receive user input.",source:"@site/docs/components/events/focus-event.md",sourceDirName:"components/events",slug:"/components/events/FocusEvent",permalink:"/docs/components/events/FocusEvent",draft:!1,editUrl:"https://github.com/DwcJava/dwcjava.github.io/tree/website/docs/components/events/focus-event.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{sidebar_position:0,title:"FocusEvent",sidebar_class_name:"sidebar--item__hidden",slug:"FocusEvent"},sidebar:"tutorialSidebar",previous:{title:"ButtonClickEvent",permalink:"/docs/components/events/ButtonClickEvent"},next:{title:"MouseEnterEvent",permalink:"/docs/components/events/MouseEnterEvent"}},l={},d=[{value:"Event Payload",id:"event-payload",level:2}],u={toc:d};function p(t){let{components:e,...n}=t;return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)(i.Z,{type:"engine",location:"org/dwcj/component/event/FocusEvent",top:"true",mdxType:"JavadocLink"}),(0,o.kt)("p",null,"An event that is triggered when an element gains focus, opposite of a blur event. It occurs when the user interacts with an element, typically by clicking inside an input field or navigating to it using the keyboard's tab key, causing the element to become active and ready to receive user input."),(0,o.kt)("h2",{id:"event-payload"},"Event Payload"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"center"},"Events"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("inlineCode",{parentName:"td"},"text")),(0,o.kt)("td",{parentName:"tr",align:null},"A string containing the text of the component when it loses focus.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("inlineCode",{parentName:"td"},"client-validation-valid")),(0,o.kt)("td",{parentName:"tr",align:null},"A boolean value indicating whether a focus change is permanent or temporary.")))))}p.isMDXComponent=!0}}]);