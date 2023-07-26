"use strict";(self.webpackChunkdwcj_documentation=self.webpackChunkdwcj_documentation||[]).push([[4384],{3273:(t,e,n)=>{n.d(e,{Z:()=>p});var a=n(7294),o=n(917),s=n(8745),r=n(8385),i=n(6770);let l=null,c=null;const d={getLatestTag:async function(){return l&&c&&Date.now()-c<36e5?l:async function(){try{const t=await fetch("https://api.github.com/repos/DwcJava/engine/tags"),e=await t.json();return l=e[0].name,c=Date.now(),l}catch(t){return console.error("Error fetching latest tag:",t),null}}()}};function p(t){let{type:e,location:n,top:l,children:c,code:p,suffix:m}=t;const[v,u]=(0,a.useState)("");(0,a.useEffect)((()=>{(async()=>{try{let t=await d.getLatestTag();m||(m=""),t||(t="23.01"),u("https://javadoc.io/static/org.dwcj/dwcj-"+e+"/"+t+"/"+n+".html"+m)}catch(t){console.error("Error fetching latest release:",t)}})()}),[]);const h=o.iv`
    display: inline;

    ${l&&o.iv`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    margin-top: -33px;
    margin-bottom: 25px;
    `}
  `,b=o.iv`
  background-color: #0063CC;
  :hover{
    color: white;
  }
  `;return(0,o.tZ)(a.Fragment,null,"true"===l&&(0,o.tZ)("div",{css:h},(0,o.tZ)(s.Z,{title:"JavaDoc",arrow:!0},(0,o.tZ)(r.Z,{css:b,label:"Java API",component:"a",href:v,icon:(0,o.tZ)(i.Z,null),clickable:!0,color:"primary",target:"_blank"}))),"true"!==l&&!p&&(0,o.tZ)("div",{css:h},(0,o.tZ)("a",{href:v,target:"_blank"},c)),"true"!==l&&p&&(0,o.tZ)("div",{css:h},(0,o.tZ)("code",null,(0,o.tZ)("a",{href:v,target:"_blank"},c))))}},3984:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var a=n(7462),o=(n(7294),n(3905)),s=n(3273);const r={sidebar_position:0,title:"Event",sidebar_class_name:"sidebar--item__hidden",slug:"event"},i=void 0,l={unversionedId:"components/events/event",id:"components/events/event",title:"Event",description:"This class is the base class for all events fired by the components. It is extended by the other events implemented by various components, and can also be extended to create custom events.",source:"@site/docs/components/events/event.md",sourceDirName:"components/events",slug:"/components/events/event",permalink:"/docs/components/events/event",draft:!1,editUrl:"https://github.com/DwcJava/dwcjava.github.io/tree/website/docs/components/events/event.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{sidebar_position:0,title:"Event",sidebar_class_name:"sidebar--item__hidden",slug:"event"},sidebar:"tutorialSidebar",previous:{title:"ButtonClickEvent",permalink:"/docs/components/events/ButtonClickEvent"},next:{title:"FocusEvent",permalink:"/docs/components/events/FocusEvent"}},c={},d=[{value:"Event Payload",id:"event-payload",level:2}],p={toc:d};function m(t){let{components:e,...n}=t;return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)(s.Z,{type:"engine",location:"org/dwcj/component/event/Event",top:"true",mdxType:"JavadocLink"}),(0,o.kt)("p",null,"This class is the base class for all events fired by the components. It is extended by the other events implemented by various components, and can also be extended to create custom events."),(0,o.kt)("h2",{id:"event-payload"},"Event Payload"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"center"},"Events"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("inlineCode",{parentName:"td"},"getData()")),(0,o.kt)("td",{parentName:"tr",align:null},"Get the event map sent by the component.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("inlineCode",{parentName:"td"},"getEventMap()")),(0,o.kt)("td",{parentName:"tr",align:null},"Alias for the ",(0,o.kt)("inlineCode",{parentName:"td"},"getData()")," method above.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("inlineCode",{parentName:"td"},"getControl()")),(0,o.kt)("td",{parentName:"tr",align:null},"Gets the control.")))))}m.isMDXComponent=!0}}]);