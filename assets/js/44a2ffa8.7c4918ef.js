"use strict";(self.webpackChunkdwcj_documentation=self.webpackChunkdwcj_documentation||[]).push([[8499],{1955:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var n=i(5893),s=i(1151),r=(i(6957),i(7796),i(3273)),a=i(2665);const o={sidebar_position:7,title:"TimeField",slug:"timefield"},l=void 0,c={id:"components/fields/time-field",title:"TimeField",description:"The TimeField class is a Field component, and as such shares all of the commonalities belonging to a Field. Please refer to the Field documentation page for an overview of Field properties, events, and other important information.",source:"@site/docs/components/fields/time-field.md",sourceDirName:"components/fields",slug:"/components/fields/timefield",permalink:"/docs/components/fields/timefield",draft:!1,unlisted:!1,editUrl:"https://github.com/DwcJava/dwcjava.github.io/tree/website/docs/components/fields/time-field.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7,title:"TimeField",slug:"timefield"},sidebar:"documentationSidebar",previous:{title:"TextField",permalink:"/docs/components/fields/textfield"},next:{title:"Label",permalink:"/docs/components/label"}},d={},u=[{value:"Usages",id:"usages",level:3},{value:"Constructors",id:"constructors",level:3},{value:"Maximum and Minimum",id:"maximum-and-minimum",level:3},{value:"Display",id:"display",level:3},{value:"Static Utilities",id:"static-utilities",level:3},{value:"Best Practices",id:"best-practices",level:3}];function h(e){const t={a:"a",admonition:"admonition",code:"code",h3:"h3",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.Z,{tooltipText:"This component will render with a shadow DOM, an API built into the browser that facilitates encapsulation.",label:"Shadow",component:"a",href:"../../glossary#shadow-dom",target:"_blank",clickable:!0,iconName:"shadow"}),"\n",(0,n.jsx)(a.Z,{tooltipText:"The name of the web component that will render in the DOM.",label:"bbj-editbox",href:"https://basishub.github.io/basis-next/#/web-components/bbj-editbox",clickable:!1,iconName:"code"}),"\n",(0,n.jsx)(r.Z,{type:"engine",location:"org/dwcj/component/field/TimeField",top:"true"}),"\n",(0,n.jsxs)(t.admonition,{type:"success",children:[(0,n.jsx)(t.mdxAdmonitionTitle,{children:(0,n.jsx)(t.strong,{children:"Important"})}),(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"TimeField"})," class is a Field component, and as such shares all of the commonalities belonging to a Field. Please refer to the ",(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.a,{href:"/docs/components/fields",children:"Field documentation page"})})," for an overview of Field properties, events, and other important information."]})]}),"\n",(0,n.jsx)(t.h3,{id:"usages",children:"Usages"}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"TimeField"})," is best used in scenarios where capturing or manipulating time values is crucial to the user interface or application functionality. Here are some examples of when to use the ",(0,n.jsx)(t.code,{children:"TimeField"}),":"]}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Event Scheduling and Calendars"}),": Time fields are essential in applications that involve event scheduling, appointment booking, or managing calendars where precise time selection is required."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Time Tracking and Logging"}),": Applications that involve time tracking, such as timesheet management or logging work hours, require Time fields to capture accurate time entries."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Reminders and Alarms"}),": If your application involves setting reminders or alarms that require specific times, using a ",(0,n.jsx)(t.code,{children:"TimeField"})," simplifies the input process for users."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Meeting or Event Invitations"}),": When designing applications that involve meeting or event invitations, a ",(0,n.jsx)(t.code,{children:"TimeField"})," enables users to specify event start times or deadlines accurately."]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"TimeField"})," class provides a user interface component that allows the user to enter both a time; hours, minutes, and optionally seconds. The value of the time field is always in 24-hour format that includes leading zeros: HH",":mm",", regardless of the field format, which is likely to be selected based on the user's locale (or by the user agent). If the time includes seconds, the format is always HH:mm",":ss"]}),"\n",(0,n.jsx)(t.h3,{id:"constructors",children:"Constructors"}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"TimeField"})," class has four constructors:"]}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"TimeField(String label, LocalTime time)"}),": Creates a ",(0,n.jsx)(t.code,{children:"TimeField"})," with a given label and time."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"TimeField(String label)"}),": Creates a ",(0,n.jsx)(t.code,{children:"TimeField"})," with a given label but with no pre-populated time."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"TimeField(LocalTime time)"}),": Creates a ",(0,n.jsx)(t.code,{children:"TimeField"})," with a given time, but without a label."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"TimeField()"}),": Creates a ",(0,n.jsx)(t.code,{children:"TimeField"})," without any provided information."]}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"maximum-and-minimum",children:"Maximum and Minimum"}),"\n",(0,n.jsxs)(t.p,{children:["You can use the ",(0,n.jsx)(t.code,{children:"setMax()"})," and ",(0,n.jsx)(t.code,{children:"setMin()"})," methods to specify the acceptable time range. If the value entered into the component is outside of the specified value, the component fails constraint validation. Also, if there is already a maximum or minimum set, the value given to the other method must be lower or higher respectively."]}),"\n",(0,n.jsx)(t.h3,{id:"display",children:"Display"}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"TimeField"})," will, by default, display its information within the UI element based on the locale the browser is configured to. For example, users with United States configurations will see the time displayed with A.M. and P.M. labels, whereas other locales would see the time in 24 hour format. This does not inhibit manipulation of the ",(0,n.jsx)(t.code,{children:"LocalTime"})," object returned by methods from the class, however."]}),"\n",(0,n.jsx)(t.admonition,{type:"info",children:(0,n.jsxs)(t.p,{children:["When displaying time, the seconds will display by default. However, if the component is given a ",(0,n.jsx)(t.code,{children:"LocaleTime"})," object with the seconds set to 0, the seconds are then hidden from the display."]})}),"\n",(0,n.jsx)(t.h3,{id:"static-utilities",children:"Static Utilities"}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"TimeField"})," class also provides the following static utility methods:"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"fromTime(String timeAsString)"}),": Convert a time string in HH:mm",":ss"," format to a LocalTime object which can then be utilized with this class, or elsewhere."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"toTime(LocalTime time)"}),": Convert a LocalTime to a time string in HH:mm",":ss"," format."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"isValidTime(String timeAsString)"}),": Check if the given string is a valid HH:mm",":ss"," time. This will return a boolean value true if so, false otherwise."]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"best-practices",children:"Best Practices"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Provide Clear Time Format Examples"}),": Clearly indicate the expected time format to users within or near the ",(0,n.jsx)(t.code,{children:"TimeField"}),". Use examples or placeholders to guide users in entering time correctly. Consider displaying the time format dynamically based on the user's locale if applicable."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Consider Accessibility"}),": Utilize the ",(0,n.jsx)(t.code,{children:"TimeField"})," component with accessibility in mind, ensuring it meets accessibility standards such as providing proper labels, sufficient color contrast, and compatibility with assistive technologies."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Include Clear Time Clearing Option"}),": Enable users to clear the selected time easily if needed, providing a way to reset the ",(0,n.jsx)(t.code,{children:"TimeField"})," to an empty state."]}),"\n"]}),"\n"]})]})}function m(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},6031:(e,t,i)=>{var n=i(4836);t.Z=void 0;var s=n(i(4938)),r=i(5893),a=(0,s.default)((0,r.jsx)("path",{d:"m19 1-5 5v11l5-4.5V1zM1 6v14.65c0 .25.25.5.5.5.1 0 .15-.05.25-.05C3.1 20.45 5.05 20 6.5 20c1.95 0 4.05.4 5.5 1.5V6c-1.45-1.1-3.55-1.5-5.5-1.5S2.45 4.9 1 6zm22 13.5V6c-.6-.45-1.25-.75-2-1v13.5c-1.1-.35-2.3-.5-3.5-.5-1.7 0-4.15.65-5.5 1.5v2c1.35-.85 3.8-1.5 5.5-1.5 1.65 0 3.35.3 4.75 1.05.1.05.15.05.25.05.25 0 .5-.25.5-.5v-1.1z"}),"AutoStories");t.Z=a},2610:(e,t,i)=>{var n=i(4836);t.Z=void 0;var s=n(i(4938)),r=i(5893),a=(0,s.default)((0,r.jsx)("path",{d:"M11 18c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zm-2-8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 4c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"DragIndicator");t.Z=a},5162:(e,t,i)=>{i.d(t,{Z:()=>a});i(7294);var n=i(6010);const s={tabItem:"tabItem_Ymn6"};var r=i(5893);function a(e){let{children:t,hidden:i,className:a}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,n.Z)(s.tabItem,a),hidden:i,children:t})}},4866:(e,t,i)=>{i.d(t,{Z:()=>j});var n=i(7294),s=i(6010),r=i(2466),a=i(6550),o=i(469),l=i(1980),c=i(7392),d=i(12);function u(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:i}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return u(e).map((e=>{let{props:{value:t,label:i,attributes:n,default:s}}=e;return{value:t,label:i,attributes:n,default:s}}))}(i);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,i])}function m(e){let{value:t,tabValues:i}=e;return i.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:i}=e;const s=(0,a.k6)(),r=function(e){let{queryString:t=!1,groupId:i}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!i)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return i??null}({queryString:t,groupId:i});return[(0,l._X)(r),(0,n.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(s.location.search);t.set(r,e),s.replace({...s.location,search:t.toString()})}),[r,s])]}function g(e){const{defaultValue:t,queryString:i=!1,groupId:s}=e,r=h(e),[a,l]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:i}=e;if(0===i.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:i}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${i.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=i.find((e=>e.default))??i[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:r}))),[c,u]=p({queryString:i,groupId:s}),[g,b]=function(e){let{groupId:t}=e;const i=function(e){return e?`docusaurus.tab.${e}`:null}(t),[s,r]=(0,d.Nk)(i);return[s,(0,n.useCallback)((e=>{i&&r.set(e)}),[i,r])]}({groupId:s}),A=(()=>{const e=c??g;return m({value:e,tabValues:r})?e:null})();(0,o.Z)((()=>{A&&l(A)}),[A]);return{selectedValue:a,selectValue:(0,n.useCallback)((e=>{if(!m({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),b(e)}),[u,b,r]),tabValues:r}}var b=i(2389);const A={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=i(5893);function f(e){let{className:t,block:i,selectedValue:n,selectValue:a,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,r.o5)(),d=e=>{const t=e.currentTarget,i=l.indexOf(t),s=o[i].value;s!==n&&(c(t),a(s))},u=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const i=l.indexOf(e.currentTarget)+1;t=l[i]??l[0];break}case"ArrowLeft":{const i=l.indexOf(e.currentTarget)-1;t=l[i]??l[l.length-1];break}}t?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":i},t),children:o.map((e=>{let{value:t,label:i,attributes:r}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>l.push(e),onKeyDown:u,onClick:d,...r,className:(0,s.Z)("tabs__item",A.tabItem,r?.className,{"tabs__item--active":n===t}),children:i??t},t)}))})}function x(e){let{lazy:t,children:i,selectedValue:s}=e;const r=(Array.isArray(i)?i:[i]).filter(Boolean);if(t){const e=r.find((e=>e.props.value===s));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:r.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function w(e){const t=g(e);return(0,v.jsxs)("div",{className:(0,s.Z)("tabs-container",A.tabList),children:[(0,v.jsx)(f,{...e,...t}),(0,v.jsx)(x,{...e,...t})]})}function j(e){const t=(0,b.Z)();return(0,v.jsx)(w,{...e,children:u(e.children)},String(t))}},6957:(e,t,i)=>{i.d(t,{Z:()=>b});var n=i(7294),s=i(917),r=i(4866),a=i(5162),o=i(4673),l=i(1750);const c="data:image/png;base64,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",d=i.p+"assets/images/expand-ba3f00f73da43d91e5b17663c4a7d108.png",u="data:image/png;base64,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";var h=i(2610),m=i(5944);function p(e){let{collapse:t,setCollapse:i}=e;const n=s.iv`
    display: flex;
    justify-content: end;
    align-items: flex-end;
    background-color: transparent;
    margin-bottom: -10px;
    `,r=s.iv`
    /* position: absolute;
    right: 0; */
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
  `,a=s.iv`
      filter: invert(var(--inversion-percentage));
  `;return(0,m.tZ)("div",{css:n,children:(0,m.tZ)("button",{css:r,onClick:()=>{i(!t)},children:t?(0,m.tZ)("img",{css:a,src:d,className:"icon-tabler-arrow-bar-up"}):(0,m.tZ)("img",{css:a,src:c,className:"icon-tabler-arrow-bar-down"})})})}function g(e){let{url:t}=e;const i=s.iv`
      position: relative;
      cursor: pointer;
      z-index: 10;
      height: 35px;
      width: 35px;
      border: none;
      background-color: none;
      justify-self: flex-end;
      margin-top: -5px;
      margin-bottom: -20px;
      background-color: transparent;

      
    `,n=s.iv`
      filter: invert(var(--inversion-percentage));
      ::before{
        mix-blend-mode: lighten; /* The blend mode determines how the overlay interacts with the image */
        opacity: 0.5;
      }
    `;return(0,m.tZ)("button",{css:i,onClick:()=>{window.open(t,"_blank")},children:(0,m.tZ)("img",{css:n,src:u})})}function b(e){let{path:t,javaC:i,javaE:c,cssURL:d,javaHighlight:u,height:b,frame:A,tabs:v}=e;const[f,x]=(0,n.useState)(""),[w,j]=(0,n.useState)(""),[y,D]=(0,n.useState)(""),[T,Z]=(0,n.useState)(!(!i||!c)),[B,k]=(0,n.useState)(!1),[S,F]=(0,n.useState)({}),[C,E]=(0,n.useState)(!1),[L,M]=(0,n.useState)(0),[H,z]=(0,n.useState)(0),[V,N]=(0,n.useState)(25),[O,X]=(0,n.useState)(25),[G,Y]=(0,n.useState)(0),[J,I]=(0,n.useState)(!1),P=(0,n.useRef)(null),W=(0,n.useRef)(null);(0,n.useEffect)((()=>{c&&fetch(c).then((e=>e.text())).then((e=>{j(e);const t=new URL(c).pathname.split("/"),i=t[t.length-1];F((e=>({...e,javaFile:i})))})),i&&fetch(i).then((e=>e.text())).then((e=>{x(e)})),d&&fetch(d).then((e=>e.text())).then((e=>{D(e);const t=new URL(d).pathname.split("/"),i=t[t.length-1];F((e=>({...e,cssFile:i})))})),Y(P.current.offsetWidth),console.log(G)}),[]);const U=()=>{E(!1),console.log("Stop Resizing")},q=e=>{if(C){const t=e.clientX-L;H+t>G/3&&(P.current.style.width=`${H+t}px`,W.current.style.right=(V-t<25?25:V-t)+"px",X(V-t<25?25:V-t))}},R=s.iv`
		display: flex;
    flex-direction: column;
		width: 100%;
    margin-bottom: 16px;
    /* padding: ${"hidden"==A?"0 15px 0 15px;":"7px 15px 0 15px;"}; */
    /* box-shadow: var(--ifm-global-shadow-lw); */
    background-color: var(--code-display-color-background);
    `,K=s.iv`
    width: 100%;
    /* padding: 1em; */
    border: 1px solid var(--ifm-toc-border-color);
    border-right: none;
    background-color: transparent;
    display: flex;
    position: relative;
  `,Q=s.iv`
    min-height: 100px;
    height: 100%;
    width: 100%;
    height: ${b||"100%"};
    pointer-events: none;
  `,_=s.iv`
    display: flex;
    justify-content: flex-end;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
    ${B&&"opacity: 1;"};
    margin: 10px 0 0 0;
    position: absolute;
    right: 25px;
  `,$=s.iv`
    display: flex;
    align-items: center;
    cursor: ew-resize;
    border-left: 1px solid var(--ifm-toc-border-color);
    border-right: 1px solid var(--ifm-toc-border-color);
    background-color: var(--ifm-background-color);
  `,ee=s.iv`
    box-shadow: none;
    background-color: var(--ifm-background-color);
    margin: 0px;
    padding: 0px;
    border: 1px solid var(--ifm-toc-border-color);
    border-top: none;
    border-radius: 0px;
    position: relative;

    div{
      /* border: none; */
      border-color: var(--ifm-toc-border-color);
      padding: 2px 0px 0px 0px;
      margin: 0px
    }

    summary{
      display: flex;
      width: 100%;
      justify-content: center;
      margin: 10px 0;
      font-weight: bold;
      ::before{
        left: auto;
        margin-left: -100px;
        --docusaurus-details-decoration-color: var(--ifm-color-primary)
      }
    }
    .margin-top--md{
      margin-top: 0px !important;
    }
    ul{
      margin: -4px 0px!important;
    }
    `,te=s.iv`
    /* :first-child{
      margin-left: 1em;
    } */
    li[aria-selected="true"]{
      border-color: var(--ifm-color-primary);
    }
    
    .tabs__item{
      padding: 5px 20px -2px 20px;
      border-radius: 0px;
    }
  `,ie=s.iv`
    border-radius: 0px;
    box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 4px 0px inset;
  `;return(0,m.BX)("div",{css:R,onMouseUp:U,onMouseLeave:U,onMouseMove:q,children:["hidden"!=A?(0,m.BX)("div",{onMouseEnter:()=>{k(!0)},onMouseLeave:()=>k(!1),css:K,children:[(0,m.tZ)("iframe",{onMouseUp:U,loading:"lazy",src:t,css:{...Q,pointerEvents:C?"none":"auto"},ref:P,onMouseMove:q}),(0,m.tZ)("div",{css:_,ref:W,children:(0,m.tZ)(g,{url:t})}),(0,m.tZ)("div",{css:$,onMouseDown:e=>{e.preventDefault(),E(!0),M(e.clientX),z(P.current.offsetWidth),N(O),console.log(W.current.right),console.log("Start Resizing")},children:(0,m.tZ)(h.Z,{})})]}):null,(0,m.BX)(o.Z,{css:ee,summary:(0,m.tZ)("summary",{onClick:()=>I(!J),children:J?"Hide Code":"Show Code"}),children:[i&&c?(0,m.tZ)(p,{collapse:T,setCollapse:Z}):null,d?(0,m.BX)(r.Z,{css:te,children:[(0,m.tZ)(a.Z,{value:v?v[0]:"Java",label:v?v[0]:S.javaFile,default:!0,children:(0,m.tZ)(l.Z,{css:ie,className:"codeDemoBlock",language:"java",showLineNumbers:!0,metastring:u,children:T?f:w})}),(0,m.tZ)(a.Z,{value:v?v[1]:"CSS",label:v?v[1]:S.cssFile,children:(0,m.tZ)(l.Z,{css:ie,className:"codeDemoBlock",language:"css",showLineNumbers:!0,children:y})})]}):(0,m.tZ)(r.Z,{css:te,children:(0,m.tZ)(a.Z,{value:v?v[0]:"Java",label:v?v[0]:S.javaFile,default:!0,children:(0,m.tZ)(l.Z,{css:ie,className:"codeDemoBlock",language:"java",showLineNumbers:!0,metastring:u,children:T?f:w})})})]})]})}},3273:(e,t,i)=>{i.d(t,{Z:()=>c});var n=i(7294),s=i(917),r=i(8230),a=i(4387),o=i(6031);var l=i(5944);function c(e){let{type:t,location:i,top:c,children:d,code:u,suffix:h}=e;const[m,p]=(0,n.useState)("");(0,n.useEffect)((()=>{h||(h=""),p("https://javadoc.io/doc/org.dwcj/dwcj-"+t+"/latest/"+i+".html"+h)}),[]);const g=s.iv`
    display: inline;

    ${c&&s.iv`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    margin-top: -33px;
    margin-bottom: 25px;
    `}
  `,b=s.iv`
  background-color: #0063CC;
  padding: 0 0 0 5px;
  :hover{
    color: white;
  }
  `;return(0,l.BX)(l.HY,{children:["true"===c&&(0,l.tZ)("div",{css:g,children:(0,l.tZ)(r.Z,{title:"JavaDoc",arrow:!0,children:(0,l.tZ)(a.Z,{css:b,label:"Java API",component:"a",href:m,icon:(0,l.tZ)(o.Z,{}),clickable:!0,color:"primary",target:"_blank"})})}),"true"!==c&&!u&&(0,l.tZ)("div",{css:g,children:(0,l.tZ)("a",{href:m,target:"_blank",children:d})}),"true"!==c&&u&&(0,l.tZ)("div",{css:g,children:(0,l.tZ)("code",{children:(0,l.tZ)("a",{href:m,target:"_blank",children:d})})})]})}},1415:(e,t,i)=>{i.d(t,{Z:()=>r});i(7294);var n=i(8397),s=i(5893);function r(e){return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(n.Z,{...e})})}}}]);