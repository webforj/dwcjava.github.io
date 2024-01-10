"use strict";(self.webpackChunkdwcj_documentation=self.webpackChunkdwcj_documentation||[]).push([[2565],{61:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var a=n(5893),s=n(1151),r=n(6957),o=n(3273);const i={sidebar_position:50,title:"Label"},l=void 0,c={id:"components/label",title:"Label",description:"The Label class is used to create a label object which shows static text.",source:"@site/docs/components/label.md",sourceDirName:"components",slug:"/components/label",permalink:"/docs/components/label",draft:!1,unlisted:!1,editUrl:"https://github.com/DwcJava/dwcjava.github.io/tree/website/docs/components/label.md",tags:[],version:"current",sidebarPosition:50,frontMatter:{sidebar_position:50,title:"Label"},sidebar:"documentationSidebar",previous:{title:"TimeField",permalink:"/docs/components/fields/timefield"},next:{title:"Lists",permalink:"/docs/components/list-components/lists"}},d={},u=[{value:"Usages",id:"usages",level:2},{value:"Constructors",id:"constructors",level:2},{value:"HTML Injection",id:"html-injection",level:2},{value:"Line Wrapping",id:"line-wrapping",level:2},{value:"Alignment",id:"alignment",level:2},{value:"Events",id:"events",level:2},{value:"Adding Events",id:"adding-events",level:3},{value:"Removing Events",id:"removing-events",level:3},{value:"Example",id:"example",level:2}];function h(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(o.Z,{type:"engine",location:"org/dwcj/component/label/Label",top:"true"}),"\n",(0,a.jsxs)(t.p,{children:["The ",(0,a.jsx)(t.code,{children:"Label"})," class is used to create a label object which shows static text."]}),"\n",(0,a.jsx)(t.h2,{id:"usages",children:"Usages"}),"\n",(0,a.jsx)(t.p,{children:"The Label component is a static text UI component that is commonly used in applications to display descriptive or informational text. It serves as a visual element that provides context, identifies UI elements, or presents information to the user. The Label component is highly versatile and can be used in various scenarios throughout an application. Some common usages of the Label component include:"}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"Form Labels"}),": Labels are frequently used alongside form fields to describe the purpose or expected input for a particular field. They improve usability and accessibility by providing clear instructions or hints to users. For example, you can use Labels in registration forms, contact forms, or search forms to identify input fields like name, email, address, or search query."]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"Data Display"}),": Labels are useful for displaying static information or labeling data elements in different sections of an application. They can be used to present user profiles, product details, or any other information that needs proper identification or description."]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"Navigation"}),": Labels can be employed in navigation menus, sidebars, or tabs to indicate the purpose or destination of a particular navigation item. They help users understand the function of each navigation option and improve the overall user experience."]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"Headers and Section Titles"}),": Labels can be used as section titles or headers to organize content and provide clear delineation between different sections or blocks of information. They enhance the readability and structure of the user interface."]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"constructors",children:"Constructors"}),"\n",(0,a.jsxs)(t.p,{children:["The ",(0,a.jsx)(t.code,{children:"Label"})," class has three constructors:"]}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"Label()"}),": Creates an empty label."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"Label(String text)"}),": Creates a label with the specified text."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"Label(String text, boolean wrap)"}),": Creates a label with the specified text and sets whether or not the text should be wrapped. More detail about line wrapping can be found ",(0,a.jsx)(t.a,{href:"#line-wrapping",children:"here."})]}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:"Here's an example of how to create a Label object using each constructor:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-java",children:'// Creates an empty label.\r\nLabel emptyLabel = new Label();\r\n\r\n// Creates a label with the specified text.\r\nLabel textLabel = new Label("Hello, world!");\r\n\r\n// Creates a label with the specified text and sets whether or not the text should be wrapped.\r\nLabel wrappedLabel = new Label("Lorem ipsum dolor sit amet, consectetur adipiscing elit.", true);\r\n\n'})}),"\n",(0,a.jsx)(t.h2,{id:"html-injection",children:"HTML Injection"}),"\n",(0,a.jsx)(t.p,{children:"In addition to using the label as static text, it can also be used as an HTML tag within your code. Simply set the label's content to the desired HTML tag with the various attributes, class names, etc, and the label will be replaced with the desired HTML element."}),"\n",(0,a.jsx)(r.Z,{path:"https://eu.bbx.kitchen/webapp/controlsamples?class=componentdemos.labeldemos.LabelDemo",javaE:"https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/java/componentdemos/labeldemos/LabelDemo.java",javaC:"https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/code_snippets/label/Demo.txt",cssURL:"https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/resources/css/labelstyles/text_styles.css",javaHighlight:"{16-18}",height:"250px"}),"\n",(0,a.jsx)(t.h2,{id:"line-wrapping",children:"Line Wrapping"}),"\n",(0,a.jsxs)(t.p,{children:["The line wrap method for a ",(0,a.jsx)(t.code,{children:"Label"})," component sets whether or not the component automatically wraps the text within the label onto multiple lines when it exceeds the available width, ensuring that the entire text is visible without overflowing the container. Setting this value to false will truncate any text that falls out of the component's bounds. This helps manipulate readability and truncation of longer text content within the label. The default value for lineWrap is ",(0,a.jsx)(t.code,{children:"true"}),"."]}),"\n",(0,a.jsx)(r.Z,{path:"https://eu.bbx.kitchen/webapp/controlsamples?class=componentdemos.labeldemos.LabelLineWrap",javaE:"https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/java/componentdemos/labeldemos/LabelLineWrap.java",cssURL:"https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/resources/css/labelstyles/wrap_styles.css",javaHighlight:"{16-18}",height:"250px"}),"\n",(0,a.jsx)("br",{}),"\n",(0,a.jsx)(t.h2,{id:"alignment",children:"Alignment"}),"\n",(0,a.jsxs)(t.p,{children:["The ",(0,a.jsx)(t.code,{children:"Label"})," class implements the TextAlignable interface, which allows you to set the text alignment of the label. The possible alignment values are Alignment.LEFT, Alignment.MIDDLE, and Alignment.RIGHT. To set the alignment, use the setTextAlignment method:"]}),"\n",(0,a.jsx)(r.Z,{path:"https://eu.bbx.kitchen/webapp/controlsamples?class=componentdemos.labeldemos.LabelAlignment",javaE:"https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/java/componentdemos/labeldemos/LabelAlignment.java",javaC:"https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/code_snippets/label/Alignment.txt",cssURL:"https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/resources/css/labelstyles/alignment_styles.css",height:"450px"}),"\n",(0,a.jsx)(t.h2,{id:"events",children:"Events"}),"\n",(0,a.jsxs)(t.p,{children:["The ",(0,a.jsx)(t.code,{children:"Label"})," class provides methods to add and remove event listeners for the following events:"]}),"\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{style:{textAlign:"center"},children:"Events"}),(0,a.jsx)(t.th,{children:"Description"})]})}),(0,a.jsxs)(t.tbody,{children:[(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{style:{textAlign:"center"},children:(0,a.jsx)(o.Z,{type:"engine",location:"org/dwcj/component/event/MouseEnterEvent",code:"true",children:"MouseEnterEvent"})}),(0,a.jsx)(t.td,{children:"An event that is triggered when the mouse cursor enters the boundaries of a component."})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{style:{textAlign:"center"},children:(0,a.jsx)(o.Z,{type:"engine",location:"org/dwcj/component/event/MouseExitEvent",code:"true",children:"MouseExitEvent"})}),(0,a.jsx)(t.td,{children:"An event that is triggered when the mouse cursor exits the boundaries of a component."})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{style:{textAlign:"center"},children:(0,a.jsx)(o.Z,{type:"engine",location:"org/dwcj/component/event/RightMouseDownEvent",code:"true",children:"RightMouseDownEvent"})}),(0,a.jsx)(t.td,{children:"An event that is triggered when the user presses the right mouse button while the cursor is over a component."})]})]})]}),"\n",(0,a.jsx)(t.h3,{id:"adding-events",children:"Adding Events"}),"\n",(0,a.jsx)(t.p,{children:"To add an event listener, use the appropriate method:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-java",children:"myLabel.addMouseEnterListener( e -> {\r\n  //Executed when the event fires\r\n});\n"})}),"\n",(0,a.jsxs)(t.p,{children:["Additional syntactic sugar methods, or aliases, have been added to allow for alternative addition of events by using the ",(0,a.jsx)(t.code,{children:"on"})," prefix followed by the event, such as:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-java",children:"myLabel.onMouseEnter( e -> {\r\n    //Executed when the event fires\r\n});\n"})}),"\n",(0,a.jsx)(t.admonition,{type:"tip",children:(0,a.jsx)(t.p,{children:"Using the event payload that comes with various events to attain information reduces the number of round trips made when instead querying the component for the required information."})}),"\n",(0,a.jsx)(t.h3,{id:"removing-events",children:"Removing Events"}),"\n",(0,a.jsx)(t.p,{children:"To remove an event listener, use the appropriate method:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-java",children:"myLabel.removeMouseEnterListener(listener);\n"})}),"\n",(0,a.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,a.jsxs)(t.p,{children:["Here is an example of how to use the ",(0,a.jsx)(t.code,{children:"Label"})," class to create a simple UI component which allows the user to hover over the text to change the message:"]}),"\n",(0,a.jsx)(r.Z,{path:"https://eu.bbx.kitchen/webapp/controlsamples?class=componentdemos.labeldemos.LabelSample",javaE:"https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/java/componentdemos/labeldemos/LabelSample.java",javaC:"https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/code_snippets/label/Sample.txt",cssURL:"https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/resources/css/labelstyles/text_styles.css",javaHighlight:"{43-45}"}),"\n",(0,a.jsx)("br",{})]})}function p(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},6031:(e,t,n)=>{var a=n(4836);t.Z=void 0;var s=a(n(4938)),r=n(5893),o=(0,s.default)((0,r.jsx)("path",{d:"m19 1-5 5v11l5-4.5V1zM1 6v14.65c0 .25.25.5.5.5.1 0 .15-.05.25-.05C3.1 20.45 5.05 20 6.5 20c1.95 0 4.05.4 5.5 1.5V6c-1.45-1.1-3.55-1.5-5.5-1.5S2.45 4.9 1 6zm22 13.5V6c-.6-.45-1.25-.75-2-1v13.5c-1.1-.35-2.3-.5-3.5-.5-1.7 0-4.15.65-5.5 1.5v2c1.35-.85 3.8-1.5 5.5-1.5 1.65 0 3.35.3 4.75 1.05.1.05.15.05.25.05.25 0 .5-.25.5-.5v-1.1z"}),"AutoStories");t.Z=o},2610:(e,t,n)=>{var a=n(4836);t.Z=void 0;var s=a(n(4938)),r=n(5893),o=(0,s.default)((0,r.jsx)("path",{d:"M11 18c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zm-2-8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 4c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"DragIndicator");t.Z=o},5162:(e,t,n)=>{n.d(t,{Z:()=>o});n(7294);var a=n(6010);const s={tabItem:"tabItem_Ymn6"};var r=n(5893);function o(e){let{children:t,hidden:n,className:o}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,a.Z)(s.tabItem,o),hidden:n,children:t})}},4866:(e,t,n)=>{n.d(t,{Z:()=>j});var a=n(7294),s=n(6010),r=n(2466),o=n(6550),i=n(469),l=n(1980),c=n(7392),d=n(12);function u(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??function(e){return u(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:s}}=e;return{value:t,label:n,attributes:a,default:s}}))}(n);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const s=(0,o.k6)(),r=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l._X)(r),(0,a.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(s.location.search);t.set(r,e),s.replace({...s.location,search:t.toString()})}),[r,s])]}function b(e){const{defaultValue:t,queryString:n=!1,groupId:s}=e,r=h(e),[o,l]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:r}))),[c,u]=m({queryString:n,groupId:s}),[b,v]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[s,r]=(0,d.Nk)(n);return[s,(0,a.useCallback)((e=>{n&&r.set(e)}),[n,r])]}({groupId:s}),g=(()=>{const e=c??b;return p({value:e,tabValues:r})?e:null})();(0,i.Z)((()=>{g&&l(g)}),[g]);return{selectedValue:o,selectValue:(0,a.useCallback)((e=>{if(!p({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),v(e)}),[u,v,r]),tabValues:r}}var v=n(2389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var A=n(5893);function x(e){let{className:t,block:n,selectedValue:a,selectValue:o,tabValues:i}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,r.o5)(),d=e=>{const t=e.currentTarget,n=l.indexOf(t),s=i[n].value;s!==a&&(c(t),o(s))},u=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;t=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;t=l[n]??l[l.length-1];break}}t?.focus()};return(0,A.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":n},t),children:i.map((e=>{let{value:t,label:n,attributes:r}=e;return(0,A.jsx)("li",{role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:e=>l.push(e),onKeyDown:u,onClick:d,...r,className:(0,s.Z)("tabs__item",g.tabItem,r?.className,{"tabs__item--active":a===t}),children:n??t},t)}))})}function f(e){let{lazy:t,children:n,selectedValue:s}=e;const r=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=r.find((e=>e.props.value===s));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,A.jsx)("div",{className:"margin-top--md",children:r.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function w(e){const t=b(e);return(0,A.jsxs)("div",{className:(0,s.Z)("tabs-container",g.tabList),children:[(0,A.jsx)(x,{...e,...t}),(0,A.jsx)(f,{...e,...t})]})}function j(e){const t=(0,v.Z)();return(0,A.jsx)(w,{...e,children:u(e.children)},String(t))}},6957:(e,t,n)=>{n.d(t,{Z:()=>v});var a=n(7294),s=n(917),r=n(4866),o=n(5162),i=n(4673),l=n(1750);const c="data:image/png;base64,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",d=n.p+"assets/images/expand-ba3f00f73da43d91e5b17663c4a7d108.png",u="data:image/png;base64,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";var h=n(2610),p=n(5944);function m(e){let{collapse:t,setCollapse:n}=e;const a=s.iv`
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
  `,o=s.iv`
      filter: invert(var(--inversion-percentage));
  `;return(0,p.tZ)("div",{css:a,children:(0,p.tZ)("button",{css:r,onClick:()=>{n(!t)},children:t?(0,p.tZ)("img",{css:o,src:d,className:"icon-tabler-arrow-bar-up"}):(0,p.tZ)("img",{css:o,src:c,className:"icon-tabler-arrow-bar-down"})})})}function b(e){let{url:t}=e;const n=s.iv`
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

      
    `,a=s.iv`
      /* filter: invert(var(--inversion-percentage)); */ //UNCOMMENT WHEN DMEOS CHANGE COLOR
      ::before{
        mix-blend-mode: lighten; /* The blend mode determines how the overlay interacts with the image */
        opacity: 0.5;
      }
    `;return(0,p.tZ)("button",{css:n,onClick:()=>{window.open(t,"_blank")},children:(0,p.tZ)("img",{css:a,src:u})})}function v(e){let{path:t,javaC:n,javaE:c,cssURL:d,javaHighlight:u,height:v,frame:g,tabs:A}=e;const[x,f]=(0,a.useState)(""),[w,j]=(0,a.useState)(""),[y,L]=(0,a.useState)(""),[D,E]=(0,a.useState)(!(!n||!c)),[Z,S]=(0,a.useState)(!1),[C,B]=(0,a.useState)({}),[k,M]=(0,a.useState)(!1),[T,H]=(0,a.useState)(0),[N,J]=(0,a.useState)(0),[V,z]=(0,a.useState)(25),[F,O]=(0,a.useState)(25),[X,G]=(0,a.useState)(0),[Y,I]=(0,a.useState)(!1),W=(0,a.useRef)(null),R=(0,a.useRef)(null);(0,a.useEffect)((()=>{c&&fetch(c).then((e=>e.text())).then((e=>{j(e);const t=new URL(c).pathname.split("/"),n=t[t.length-1];B((e=>({...e,javaFile:n})))})),n&&fetch(n).then((e=>e.text())).then((e=>{f(e)})),d&&fetch(d).then((e=>e.text())).then((e=>{L(e);const t=new URL(d).pathname.split("/"),n=t[t.length-1];B((e=>({...e,cssFile:n})))})),G(W.current?W.current.offsetWidth:0)}),[]);const U=()=>{M(!1)},q=e=>{if(k){const t=e.clientX-T;N+t>X/3&&(W.current.style.width=`${N+t}px`,R.current.style.right=(V-t<25?25:V-t)+"px",O(V-t<25?25:V-t))}},P=s.iv`
		display: flex;
    flex-direction: column;
		width: 100%;
    margin-bottom: 16px;
    /* padding: ${"hidden"==g?"0 15px 0 15px;":"7px 15px 0 15px;"}; */
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
    height: ${v||"100%"};
    pointer-events: ${k?"none":"auto"};
  `,_=s.iv`
    display: flex;
    justify-content: flex-end;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
    ${Z&&"opacity: 1;"};
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
    border: ${"hidden"==g?"none":"1px solid var(--ifm-toc-border-color)"};
    border-top: none;
    border-radius: 0px;
    position: relative;

    div{
      /* border: none; */
      border-color: var(--ifm-toc-border-color);
      padding: 2px 0px 0px 0px;
      margin: 0px;
    }

    > div:first-of-type{
      border: ${"hidden"==g?"1px solid var(--ifm-toc-border-color)":"none"};
      border-top: none;
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
  `,ne=s.iv`
    border-radius: 0px;
    box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 4px 0px inset;
  `;return(0,p.BX)("div",{css:P,onMouseUp:U,onMouseLeave:U,onMouseMove:q,children:["hidden"!=g?(0,p.BX)("div",{onMouseEnter:()=>{S(!0)},onMouseLeave:()=>S(!1),css:K,children:[(0,p.tZ)("iframe",{onMouseUp:U,loading:"lazy",src:t,css:Q,ref:W,onMouseMove:q}),(0,p.tZ)("div",{css:_,ref:R,children:(0,p.tZ)(b,{url:t})}),(0,p.tZ)("div",{css:$,onMouseDown:e=>{e.preventDefault(),M(!0),H(e.clientX),J(W.current?W.current.offsetWidth:0),z(F)},children:(0,p.tZ)(h.Z,{})})]}):null,(0,p.BX)(i.Z,{css:ee,summary:(0,p.tZ)("summary",{onClick:()=>I(!Y),children:Y?"Hide Code":"Show Code"}),children:[n&&c?(0,p.tZ)(m,{collapse:D,setCollapse:E}):null,d?(0,p.BX)(r.Z,{css:te,children:[(0,p.tZ)(o.Z,{value:A?A[0]:"Java",label:A?A[0]:C.javaFile,default:!0,children:(0,p.tZ)(l.Z,{css:ne,className:"codeDemoBlock",language:"java",showLineNumbers:!0,metastring:u,children:D?x:w})}),(0,p.tZ)(o.Z,{value:A?A[1]:"CSS",label:A?A[1]:C.cssFile,children:(0,p.tZ)(l.Z,{css:ne,className:"codeDemoBlock",language:"css",showLineNumbers:!0,children:y})})]}):(0,p.tZ)(r.Z,{css:te,children:(0,p.tZ)(o.Z,{value:A?A[0]:"Java",label:A?A[0]:C.javaFile,default:!0,children:(0,p.tZ)(l.Z,{css:ne,className:"codeDemoBlock",language:"java",showLineNumbers:!0,metastring:u,children:D?x:w})})})]})]})}},3273:(e,t,n)=>{n.d(t,{Z:()=>c});var a=n(7294),s=n(917),r=n(8230),o=n(4387),i=n(6031);var l=n(5944);function c(e){let{type:t,location:n,top:c,children:d,code:u,suffix:h}=e;const[p,m]=(0,a.useState)("");(0,a.useEffect)((()=>{h||(h=""),m("https://javadoc.io/doc/org.dwcj/dwcj-"+t+"/latest/"+n+".html"+h)}),[]);const b=s.iv`
    display: inline;

    ${c&&s.iv`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    margin-top: -33px;
    margin-bottom: 25px;
    `}
  `,v=s.iv`
  background-color: #0063CC;
  padding: 0 0 0 5px;
  :hover{
    color: white;
  }
  `;return(0,l.BX)(l.HY,{children:["true"===c&&(0,l.tZ)("div",{css:b,children:(0,l.tZ)(r.Z,{title:"JavaDoc",arrow:!0,children:(0,l.tZ)(o.Z,{css:v,label:"Java API",component:"a",href:p,icon:(0,l.tZ)(i.Z,{}),clickable:!0,color:"primary",target:"_blank"})})}),"true"!==c&&!u&&(0,l.tZ)("div",{css:b,children:(0,l.tZ)("a",{href:p,target:"_blank",children:d})}),"true"!==c&&u&&(0,l.tZ)("div",{css:b,children:(0,l.tZ)("code",{children:(0,l.tZ)("a",{href:p,target:"_blank",children:d})})})]})}},1415:(e,t,n)=>{n.d(t,{Z:()=>r});n(7294);var a=n(8397),s=n(5893);function r(e){return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(a.Z,{...e})})}}}]);