"use strict";(self.webpackChunkdwcj_documentation=self.webpackChunkdwcj_documentation||[]).push([[9243],{4074:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>p,frontMatter:()=>l,metadata:()=>d,toc:()=>m});var r=n(5893),i=n(1151),a=n(9469),s=(n(7796),n(3273)),o=n(2665);const l={sidebar_position:4,title:"NumberField",slug:"numberfield"},c=void 0,d={id:"components/fields/number-field",title:"NumberField",description:"The DateTimeField class is a Field component, and as such shares all of the commonalities belonging to a Field. Please refer to the Field documentation page for an overview of Field properties, events, and other important information.",source:"@site/docs/components/fields/number-field.md",sourceDirName:"components/fields",slug:"/components/fields/numberfield",permalink:"/docs/components/fields/numberfield",draft:!1,unlisted:!1,editUrl:"https://github.com/webforj/webforj-docs/tree/website/docs/components/fields/number-field.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"NumberField",slug:"numberfield"},sidebar:"documentationSidebar",previous:{title:"DateTimeField",permalink:"/docs/components/fields/datetimefield"},next:{title:"PasswordField",permalink:"/docs/components/fields/passwordfield"}},u={},m=[{value:"Usages",id:"usages",level:3},{value:"Constructors",id:"constructors",level:3},{value:"Maximum and Minimum",id:"maximum-and-minimum",level:3},{value:"Granularity",id:"granularity",level:3},{value:"Placeholder Text",id:"placeholder-text",level:3},{value:"Best Practices",id:"best-practices",level:3}];function h(e){const t={a:"a",admonition:"admonition",code:"code",h3:"h3",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",ol:"ol",p:"p",strong:"strong",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o.Z,{tooltipText:"This component will render with a shadow DOM, an API built into the browser that facilitates encapsulation.",label:"Shadow",component:"a",href:"../../glossary#shadow-dom",target:"_blank",clickable:!0,iconName:"shadow"}),"\n",(0,r.jsx)(o.Z,{tooltipText:"The name of the web component that will render in the DOM.",label:"dwc-field",clickable:!1,iconName:"code"}),"\n",(0,r.jsx)(s.Z,{type:"engine",location:"org/dwcj/component/field/NumberField",top:"true"}),"\n",(0,r.jsxs)(t.admonition,{type:"success",children:[(0,r.jsx)(t.mdxAdmonitionTitle,{children:(0,r.jsx)(t.strong,{children:"Important"})}),(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.code,{children:"DateTimeField"})," class is a Field component, and as such shares all of the commonalities belonging to a Field. Please refer to the ",(0,r.jsx)(t.strong,{children:(0,r.jsx)(t.a,{href:"/docs/components/fields",children:"Field documentation page"})})," for an overview of Field properties, events, and other important information."]})]}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.code,{children:"NumberField"})," component can be used to accept numerical input from the user. It ensures that only valid numeric values are entered and provides a convenient interface for inputting numbers."]}),"\n",(0,r.jsx)(a.Z,{path:"https://demo.webforj.com/webapp/controlsamples?class=componentdemos.fielddemos.NumberFieldDemo",javaE:"https://raw.githubusercontent.com/webforj/ControlSamples/main/src/main/java/componentdemos/fielddemos/NumberFieldDemo.java",javaC:"",cssURL:"https://raw.githubusercontent.com/webforj/ControlSamples/main/src/main/resources/css/fieldstyles/date_field_styles.css"}),"\n",(0,r.jsx)(t.h3,{id:"usages",children:"Usages"}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.code,{children:"NumberField"})," is best used in scenarios where capturing or manipulating numerical data is crucial to the user interface or application functionality. Here are some examples of when to use the ",(0,r.jsx)(t.code,{children:"NumberField"}),":"]}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Numeric Input Forms"}),": When designing forms that require numeric inputs, using a ",(0,r.jsx)(t.code,{children:"NumberField"})," simplifies the input process for users. This is particularly useful for applications that collect user data or require numerical values."]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Data Analysis and Calculations"}),": A ",(0,r.jsx)(t.code,{children:"NumberField"})," will be particularly valuable in applications that involve data analysis, calculations, or mathematical operations. They enable users to input or manipulate numeric values accurately."]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Financial and Budgeting Applications"}),": Applications that involve financial calculations, budgeting, or tracking expenses often require precise numeric inputs. A ",(0,r.jsx)(t.code,{children:"NumberField"})," ensures accurate entry of financial figures."]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Measurement and Unit Conversion"}),": In applications that deal with measurements or unit conversions, the ",(0,r.jsx)(t.code,{children:"NumberField"})," is ideal for inputting numerical values with units such as length, weight, or volume."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(t.h3,{id:"constructors",children:"Constructors"}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.code,{children:"NumberField"})," class has three constructors:"]}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"NumberField(String label, Double value)"}),": Creates a ",(0,r.jsx)(t.code,{children:"NumberField"})," with a given label and value."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"NumberField(String label)"}),": Creates a ",(0,r.jsx)(t.code,{children:"NumberField"})," with a given label but with no pre-populated datetime."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"NumberField()"}),": Creates a ",(0,r.jsx)(t.code,{children:"NumberField"})," without any provided information."]}),"\n"]}),"\n",(0,r.jsx)(t.h3,{id:"maximum-and-minimum",children:"Maximum and Minimum"}),"\n",(0,r.jsxs)(t.p,{children:["You can use the ",(0,r.jsx)(t.code,{children:"setMax()"})," and ",(0,r.jsx)(t.code,{children:"setMin()"})," methods to specify the acceptable time range. If the value entered into the component is outside of the specified value, the component fails constraint validation. Also, if there is already a maximum or minimum set, the value given to the other method must be lower or higher respectively."]}),"\n",(0,r.jsx)(t.h3,{id:"granularity",children:"Granularity"}),"\n",(0,r.jsxs)(t.p,{children:["You can use the ",(0,r.jsx)(t.code,{children:"setStep"})," method to specify the granularity that the value must adhere to when using arrow keys to modify the value. This will increment or decrement the component's value by a certain step each time. This does not apply when a user enters a value directly, but only when interacting with the ",(0,r.jsx)(t.code,{children:"NumberField"})," using the arrow keys."]}),"\n",(0,r.jsx)(t.h3,{id:"placeholder-text",children:"Placeholder Text"}),"\n",(0,r.jsxs)(t.p,{children:["You can set placeholder text for the ",(0,r.jsx)(t.code,{children:"NumberField"})," using the ",(0,r.jsx)(t.code,{children:"setPlaceholder"})," method. The placeholder text is displayed when the field is empty, helping to prompt the user to enter appropriate input into the ",(0,r.jsx)(t.code,{children:"NumberField"}),"."]}),"\n",(0,r.jsx)(t.admonition,{type:"tip",children:(0,r.jsx)(t.p,{children:"If the numeric input relates to a specific unit of measurement or has a particular context, provide clear labeling or additional information to guide users and ensure accurate input."})}),"\n",(0,r.jsx)(t.h3,{id:"best-practices",children:"Best Practices"}),"\n",(0,r.jsxs)(t.p,{children:["To ensure a seamless integration and optimal user experience, consider the following best practices when using the ",(0,r.jsx)(t.code,{children:"NumberField"}),":"]}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Consider Accessibility"}),": Utilize the NumberField component with accessibility in mind, adhering to accessibility standards such as proper labeling, keyboard navigation support, and compatibility with assistive technologies. Ensure that users with disabilities can interact with the NumberField effectively."]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Utilize Increment/Decrement Buttons"}),": If appropriate for your application, consider utilizing increment and decrement buttons with the NumberField. This allows users to adjust the numeric value by a specific increment or decrement with a single click."]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Handle Minimum and Maximum Values"}),": If your application requires limiting the numeric input range, incorporate validation and visual cues to indicate the acceptable minimum and maximum values. Prevent users from entering values outside the defined range."]}),"\n"]}),"\n"]})]})}function p(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},6031:(e,t,n)=>{var r=n(4836);t.Z=void 0;var i=r(n(4938)),a=n(5893),s=(0,i.default)((0,a.jsx)("path",{d:"m19 1-5 5v11l5-4.5V1zM1 6v14.65c0 .25.25.5.5.5.1 0 .15-.05.25-.05C3.1 20.45 5.05 20 6.5 20c1.95 0 4.05.4 5.5 1.5V6c-1.45-1.1-3.55-1.5-5.5-1.5S2.45 4.9 1 6zm22 13.5V6c-.6-.45-1.25-.75-2-1v13.5c-1.1-.35-2.3-.5-3.5-.5-1.7 0-4.15.65-5.5 1.5v2c1.35-.85 3.8-1.5 5.5-1.5 1.65 0 3.35.3 4.75 1.05.1.05.15.05.25.05.25 0 .5-.25.5-.5v-1.1z"}),"AutoStories");t.Z=s},2610:(e,t,n)=>{var r=n(4836);t.Z=void 0;var i=r(n(4938)),a=n(5893),s=(0,i.default)((0,a.jsx)("path",{d:"M11 18c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zm-2-8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 4c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"DragIndicator");t.Z=s},5162:(e,t,n)=>{n.d(t,{Z:()=>s});n(7294);var r=n(6010);const i={tabItem:"tabItem_Ymn6"};var a=n(5893);function s(e){let{children:t,hidden:n,className:s}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,r.Z)(i.tabItem,s),hidden:n,children:t})}},4866:(e,t,n)=>{n.d(t,{Z:()=>j});var r=n(7294),i=n(6010),a=n(2466),s=n(6550),o=n(469),l=n(1980),c=n(7392),d=n(12);function u(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function m(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return u(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:i}}=e;return{value:t,label:n,attributes:r,default:i}}))}(n);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function h(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:n}=e;const i=(0,s.k6)(),a=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l._X)(a),(0,r.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(i.location.search);t.set(a,e),i.replace({...i.location,search:t.toString()})}),[a,i])]}function b(e){const{defaultValue:t,queryString:n=!1,groupId:i}=e,a=m(e),[s,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:a}))),[c,u]=p({queryString:n,groupId:i}),[b,A]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[i,a]=(0,d.Nk)(n);return[i,(0,r.useCallback)((e=>{n&&a.set(e)}),[n,a])]}({groupId:i}),f=(()=>{const e=c??b;return h({value:e,tabValues:a})?e:null})();(0,o.Z)((()=>{f&&l(f)}),[f]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!h({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),A(e)}),[u,A,a]),tabValues:a}}var A=n(2389);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=n(5893);function g(e){let{className:t,block:n,selectedValue:r,selectValue:s,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,a.o5)(),d=e=>{const t=e.currentTarget,n=l.indexOf(t),i=o[n].value;i!==r&&(c(t),s(i))},u=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;t=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;t=l[n]??l[l.length-1];break}}t?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},t),children:o.map((e=>{let{value:t,label:n,attributes:a}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>l.push(e),onKeyDown:u,onClick:d,...a,className:(0,i.Z)("tabs__item",f.tabItem,a?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function x(e){let{lazy:t,children:n,selectedValue:i}=e;const a=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=a.find((e=>e.props.value===i));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:a.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==i})))})}function w(e){const t=b(e);return(0,v.jsxs)("div",{className:(0,i.Z)("tabs-container",f.tabList),children:[(0,v.jsx)(g,{...e,...t}),(0,v.jsx)(x,{...e,...t})]})}function j(e){const t=(0,A.Z)();return(0,v.jsx)(w,{...e,children:u(e.children)},String(t))}},9469:(e,t,n)=>{n.d(t,{Z:()=>f});var r=n(7294),i=n(917),a=n(4866),s=n(5162),o=n(4673),l=n(1750),c=n(1974),d=n(7762),u=n(2143),m=n(2949),h=n(2610),p=n(5944);function b(e){let{collapse:t,setCollapse:n}=e;const r=i.iv`
    display: flex;
    justify-content: end;
    align-items: flex-end;
    background-color: transparent;
    margin-bottom: -10px;
  `,a=i.iv`
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
  `,s=i.iv`
    filter: invert(var(--inversion-percentage));
  `;return(0,p.tZ)("div",{css:r,children:(0,p.tZ)("button",{css:a,onClick:()=>{n(!t)},children:t?(0,p.tZ)("img",{css:s,src:d.Z,className:"icon-tabler-arrow-bar-up"}):(0,p.tZ)("img",{css:s,src:c.Z,className:"icon-tabler-arrow-bar-down"})})})}function A(e){let{url:t}=e;const n=i.iv`
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
  `,r=i.iv`
    filter: invert(var(--inversion-percentage));
    ::before {
      mix-blend-mode: lighten;
      opacity: 0.5;
    }
  `;return(0,p.tZ)("button",{css:n,onClick:()=>{window.open(t,"_blank")},children:(0,p.tZ)("img",{css:r,src:u.Z})})}function f(e){let{path:t,javaC:n,javaE:c,cssURL:d,javaHighlight:u,height:f,frame:v,tabs:g}=e;const[x,w]=(0,r.useState)(""),[j,y]=(0,r.useState)(""),[D,Z]=(0,r.useState)(""),[B,F]=(0,r.useState)(!(!n||!c)),[k,N]=(0,r.useState)(!1),[S,C]=(0,r.useState)({}),[E,M]=(0,r.useState)(!1),[L,T]=(0,r.useState)(0),[z,V]=(0,r.useState)(0),[H,O]=(0,r.useState)(25),[X,G]=(0,r.useState)(25),[Y,I]=(0,r.useState)(0),[J,P]=(0,r.useState)(!1),W=(0,r.useRef)(null),q=(0,r.useRef)(null);(0,r.useEffect)((()=>{c&&fetch(c).then((e=>e.text())).then((e=>{y(e);const t=new URL(c).pathname.split("/"),n=t[t.length-1];C((e=>({...e,javaFile:n})))})),n&&fetch(n).then((e=>e.text())).then((e=>{w(e)})),d&&fetch(d).then((e=>e.text())).then((e=>{Z(e);const t=new URL(d).pathname.split("/"),n=t[t.length-1];C((e=>({...e,cssFile:n})))})),I(W.current?W.current.offsetWidth:0)}),[]);const U=()=>{M(!1)},R=e=>{if(E){const t=e.clientX-L;z+t>Y/3&&(W.current.style.width=`${z+t}px`,q.current.style.right=(H-t<25?25:H-t)+"px",G(H-t<25?25:H-t))}},K=i.iv`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-bottom: 16px;
    /* padding: ${"hidden"==v?"0 15px 0 15px;":"7px 15px 0 15px;"}; */
    /* box-shadow: var(--ifm-global-shadow-lw); */
    background-color: var(--code-display-color-background);
  `,Q=i.iv`
    width: 100%;
    /* padding: 1em; */
    border: 1px solid var(--ifm-toc-border-color);
    border-right: none;
    background-color: transparent;
    display: flex;
    position: relative;
  `,_=i.iv`
    min-height: 100px;
    height: 100%;
    width: 100%;
    height: ${f||"100%"};
    pointer-events: ${E?"none":"auto"};
  `,$=i.iv`
    display: flex;
    justify-content: flex-end;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
    ${k&&"opacity: 1;"};
    margin: 10px 0 0 0;
    position: absolute;
    right: 25px;
  `,ee=i.iv`
    display: flex;
    align-items: center;
    cursor: ew-resize;
    border-left: 1px solid var(--ifm-toc-border-color);
    border-right: 1px solid var(--ifm-toc-border-color);
    background-color: var(--ifm-background-color);
  `,te=i.iv`
    box-shadow: none;
    background-color: var(--ifm-background-color);
    margin: 0px;
    padding: 0px;
    border: ${"hidden"==v?"none":"1px solid var(--ifm-toc-border-color)"};
    border-top: none;
    border-radius: 0px;
    position: relative;

    div {
      /* border: none; */
      border-color: var(--ifm-toc-border-color);
      padding: 2px 0px 0px 0px;
      margin: 0px;
    }

    > div:first-of-type {
      border: ${"hidden"==v?"1px solid var(--ifm-toc-border-color)":"none"};
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
  `,ne=i.iv`
    /* :first-child{
      margin-left: 1em;
    } */
    li[aria-selected="true"] {
      border-color: var(--ifm-color-primary);
    }

    .tabs__item {
      padding: 5px 20px -2px 20px;
      border-radius: 0px;
    }
  `,re=i.iv`
    border-radius: 0px;
    box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 4px 0px inset;
  `;return(0,p.BX)("div",{css:K,onMouseUp:U,onMouseLeave:U,onMouseMove:R,children:["hidden"!=v?(0,p.BX)("div",{onMouseEnter:()=>{N(!0)},onMouseLeave:()=>N(!1),css:Q,children:[(0,p.tZ)("iframe",{onMouseUp:U,loading:"lazy",src:t+"&__theme__="+(0,m.I)().colorMode,css:_,ref:W,onMouseMove:R}),(0,p.tZ)("div",{css:$,ref:q,children:(0,p.tZ)(A,{url:t})}),(0,p.tZ)("div",{css:ee,onMouseDown:e=>{e.preventDefault(),M(!0),T(e.clientX),V(W.current?W.current.offsetWidth:0),O(X)},children:(0,p.tZ)(h.Z,{})})]}):null,(0,p.BX)(o.Z,{css:te,summary:(0,p.tZ)("summary",{onClick:()=>P(!J),children:J?"Hide Code":"Show Code"}),children:[n&&c?(0,p.tZ)(b,{collapse:B,setCollapse:F}):null,d?(0,p.BX)(a.Z,{css:ne,children:[(0,p.tZ)(s.Z,{value:g?g[0]:"Java",label:g?g[0]:S.javaFile,default:!0,children:(0,p.tZ)(l.Z,{css:re,className:"codeDemoBlock",language:"java",showLineNumbers:!0,metastring:u,children:B?x:j})}),(0,p.tZ)(s.Z,{value:g?g[1]:"CSS",label:g?g[1]:S.cssFile,children:(0,p.tZ)(l.Z,{css:re,className:"codeDemoBlock",language:"css",showLineNumbers:!0,children:D})})]}):(0,p.tZ)(a.Z,{css:ne,children:(0,p.tZ)(s.Z,{value:g?g[0]:"Java",label:g?g[0]:S.javaFile,default:!0,children:(0,p.tZ)(l.Z,{css:re,className:"codeDemoBlock",language:"java",showLineNumbers:!0,metastring:u,children:B?x:j})})})]})]})}},3273:(e,t,n)=>{n.d(t,{Z:()=>c});var r=n(7294),i=n(917),a=n(8230),s=n(4387),o=n(6031);var l=n(5944);function c(e){let{type:t,location:n,top:c,children:d,code:u,suffix:m}=e;const[h,p]=(0,r.useState)("");(0,r.useEffect)((()=>{m||(m=""),p("https://javadoc.io/doc/org.dwcj/dwcj-"+t+"/latest/"+n+".html"+m)}),[]);const b=i.iv`
    display: inline;

    ${c&&i.iv`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    margin-top: -33px;
    margin-bottom: 25px;
    `}
  `,A=i.iv`
  background-color: #0063CC;
  padding: 0 0 0 5px;
  :hover{
    color: white;
  }
  `;return(0,l.BX)(l.HY,{children:["true"===c&&(0,l.tZ)("div",{css:b,children:(0,l.tZ)(a.Z,{title:"JavaDoc",arrow:!0,children:(0,l.tZ)(s.Z,{css:A,label:"Java API",component:"a",href:h,icon:(0,l.tZ)(o.Z,{}),clickable:!0,color:"primary",target:"_blank"})})}),"true"!==c&&!u&&(0,l.tZ)("div",{css:b,children:(0,l.tZ)("a",{href:h,target:"_blank",children:d})}),"true"!==c&&u&&(0,l.tZ)("div",{css:b,children:(0,l.tZ)("code",{children:(0,l.tZ)("a",{href:h,target:"_blank",children:d})})})]})}},1415:(e,t,n)=>{n.d(t,{Z:()=>a});n(7294);var r=n(8397),i=n(5893);function a(e){return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(r.Z,{...e})})}},7762:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/expand-ba3f00f73da43d91e5b17663c4a7d108.png"},1974:(e,t,n)=>{n.d(t,{Z:()=>r});const r="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPAAAADwCAYAAAA+VemSAAAABmJLR0QA/wD/AP+gvaeTAAAG/ElEQVR4nO3dTW7bRhgG4Ddu4bTHa72Ir+UbNKskm/YgvYJhGF61B2gcIEDdRSVAMGxLIueHQz4PMBtDGeoj9EIfxWEmAQAAAAAAAAAAAAAAAAAAAAAAACjnMsl1ks9JbpN8343b3d+ud68BFuYqyUOSpyPjYfdaYAEuktzkeHCfj5vdvwU6mhLewxADnVxlenj3QzsNHVwmucv8AN8ned/2rQPXmR/e/fjQ+L1TiB8xxvVLwbl+LTgXcIIS7fN+3DV+7xTyrvcbYLLHJD8Vmutbkp8LzUVDAjyup8Lz+SwMyDUwDEyAYWACDAMTYBiYAMPABBgGJsAwMAGGgQkwDEyAYWACDAMTYBiYAMPABBgGJsAwMAGGgQkwDEyAYWACDAMT4Dq2tkvg1uplxVrtEljqv5Tdj6nsisgqtN4lsHeA7YrIqszZJfBjzv9Q9wzwxe49Tz2WXRFZlBK7BJ4b4l4Bnhve/dBOswildgl8SvIpyY8nHrdHgC+S/FboePexKyILUHKXwHNC3DrAJcO7H3ZFpLsvKR+mU9rplgEu1TY/H1+OHBeqK7lL4DkhbhXgWuF9il0RWYDH1PlwP+XtdrpFgGu0zYfj8ZXjQjNfU+8D/laIawe4dnifkvzz+mmFNmq10IfjpXa6ZoBrts2HQwtNdzV+xDolxLUC3Cq8T/EjFgtQ+jbSW+Owna4R4BZt8+FwG4nuSi7kOCfEpedtHd77WMjBQpRYSnnOqNHitmqb98NSShZlzsMMWxseZmBxWv74M/KY8uQVNNH6OnK08SnJD1NPLrQgxMLL4IRYeBmcEAsvg9t6iIWX4W01xMLLamwtxMLL6mzlPrH7vKzW2r+JffOyemsNsfCyGWsLsfCyOWsJsfCyWaOHWHjZvFFDLLywM9otJreK4JlRQiy88Iqlh1h44YilXhO75oUTLS3EwgtnWko7rW2GiXqHWHhhpl4hFl4opPU1sWteKKzVN7FvXqikdoiFFyqr1U5rm6GR0iEWXmisVDutbYZO5oZYeKGzi0zb2vQmwguLcZXkIceD+xCba8MiXSa5TvI5yW2S77txu/vb9e41AAAAAAAAAAAAwCK9tBTw1MX5S1oyqA51bM6pi/FPHb0W7atDHZsy9XG4U0erx+bUoY5NqnmSD0+2OtQxYh2LdpX6J3k/arY96lDH5lwmuUu7E32f5L061DFIHYt3nXYneT8+qEMdg9Rxkp4X4b90OOavFeZUx3TqGFjLNmc/7tShjkHqOMm7XgdO8pjkp8bH/Jbk58JzqmM6dczUs4V+6nDMfyvMqY7p1DFTzwD/1eGYf1eYUx3TqWOmngH+cyXHVMeyjrmWOk7SM8B/dDjm7xXmVMd06hjYWm64q0Mdm1zIkaxnyZs61LFZa1l0rg51bNJaHvtShzo2bS0PXqtDHZu1lv/6RB3qAAAAAAAAAAAAAJp7acmgpYAwgFMX7VuMDwsy9bE5j8NBZxdJPmb6o3EfI8TQxdzwCjF0cpHkt5R7SP1Tkh9bFgBbVTq8QgyNlGqbtdPQWO3wCjFUUqtt1k5DZa3DK8RQSKu2WTsNhfUOrxDDRL3aZu00zLS08AoxnGgpbbN2Gs609PAKMbxilPAKMTyz1GveY8M1MZs3aniFmM0bPbxCzGatJbxCzOasLbxCzGasNbxCzOqNdqto6nCLidVZ+zevb2JWa2vhFWJWY6vhFWKGt/XwCjHDEl4hZlDCK8QMSniFmEFt5T7v3OE+MYs0ZYvPrY6biecYqrhK+2+xEeZ8a9hknEW4THKXdh/8T0l+qDBv6+v3+yTvzz7bUNh12oc3FeZO2of4wzknGmr4kjYf9uc//tQIcNL2x7gvJ55jqKZF+/zSL7e1Apy0C/Hd0bMLlT2m7of8sG0+VDPASZt2+vH10wptfE378KbCsV5SO8T/vHJcaKZWC31swUOLACd122ktNN3V+BHrlNVKrQKc1AuxH7HorvRtpLfa5kMtA5zUaafdRqK7kgs5Tg1vCh3vnAAnZUN8Hws5WIgSSynPXeTfI8BJuXbaUkoWZc7DDFOe0OkV4GR+iD3MwOJcZFqIbzLt8bqeAU7a1wtNXCV5yPEP8kPmtZG9A7zXql5o5jL//zr9Ocltku+7cbv72/XuNXMsJcBJm3p5wbveb4DJ5obuOZ+FAbkWgYEJMAxMgGFgAgwDE2AYmADDwAQYBibAMDABhoEJMAxMgGFgAgwDE2AYmADDwAQYBibAMDABhoEJMAxMgGFgAjyukltzfi04Fw0J8Lj+KjjX3wXnoiEBHtefC52LhgR4XH8UnOv3gnMBJyi1K+J97BIIXZTYFdF2J9DRnF0R7RIIndklEFbALoEwOLsEAgAAAAAAAAAAAAAAAAAAAAAAAE39B2tV13Hdy+hQAAAAAElFTkSuQmCC"},2143:(e,t,n)=>{n.d(t,{Z:()=>r});const r="data:image/png;base64,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"}}]);