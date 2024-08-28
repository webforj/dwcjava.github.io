"use strict";(self.webpackChunkdwcj_documentation=self.webpackChunkdwcj_documentation||[]).push([[3701],{2570:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>d,default:()=>m,frontMatter:()=>c,metadata:()=>h,toc:()=>p});var n=a(5893),o=a(1151),i=a(6957),s=(a(4904),a(7796)),r=a(3273),l=a(2665);const c={title:"Navigator"},d=void 0,h={id:"components/navigator",title:"Navigator",description:"The Navigator component is a customizable pagination component designed to navigate through data sets, supporting multiple layouts. You can configure it to display various navigation controls such as first, last, next, and previous buttons, along with page numbers or a quick jump field depending on the layout setting.",source:"@site/docs/components/navigator.md",sourceDirName:"components",slug:"/components/navigator",permalink:"/docs/components/navigator",draft:!1,unlisted:!1,editUrl:"https://github.com/webforj/webforj-docs/tree/website/docs/components/navigator.md",tags:[],version:"current",frontMatter:{title:"Navigator"},sidebar:"documentationSidebar",previous:{title:"Login",permalink:"/docs/components/login"},next:{title:"ProgressBar",permalink:"/docs/components/progressbar"}},u={},p=[{value:"Binding to repositories",id:"binding-to-repositories",level:2},{value:"Pagination",id:"pagination",level:2},{value:"Items",id:"items",level:3},{value:"Maximum pages",id:"maximum-pages",level:3},{value:"Page size",id:"page-size",level:3},{value:"Customizing buttons, text and tooltips",id:"customizing-buttons-text-and-tooltips",level:2},{value:"Buttons and component text",id:"buttons-and-component-text",level:3},{value:"Tooltip text",id:"tooltip-text",level:3},{value:"Layouts",id:"layouts",level:2},{value:"1. None layout",id:"1-none-layout",level:4},{value:"2. Numbered layout",id:"2-numbered-layout",level:4},{value:"3. Preview layout",id:"3-preview-layout",level:4},{value:"4. Quick jump layout",id:"4-quick-jump-layout",level:4},{value:"Styling",id:"styling",level:2},{value:"Shadow parts",id:"shadow-parts",level:3},{value:"CSS properties",id:"css-properties",level:3},{value:"Reflected attributes",id:"reflected-attributes",level:3},{value:"Dependencies",id:"dependencies",level:3},{value:"Best practices",id:"best-practices",level:2}];function g(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(l.Z,{tooltipText:"This component will render with a shadow DOM, an API built into the browser that facilitates encapsulation.",label:"Shadow",component:"a",href:"../glossary#shadow-dom",target:"_blank",clickable:!0,iconName:"shadow"}),"\n",(0,n.jsx)(l.Z,{tooltipText:"The name of the web component that will render in the DOM.",label:"dwc-navigator",href:"https://dwc.style/docs/#/web-components/dwc-navigator",clickable:!1,iconName:"code"}),"\n",(0,n.jsx)(r.Z,{type:"foundation",location:"com/webforj/component/navigator/Navigator",top:"true"}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"Navigator"})," component is a customizable pagination component designed to navigate through data sets, supporting multiple layouts. You can configure it to display various navigation controls such as first, last, next, and previous buttons, along with page numbers or a quick jump field depending on the layout setting."]}),"\n",(0,n.jsxs)(t.p,{children:["It supports automatic disabling of navigation buttons based on the current page and total items, and offers customization options for text and tooltips for different parts of the navigator. Additionally, you can bind it to a ",(0,n.jsx)(t.code,{children:"Paginator"})," instance to manage the data set's pagination logic and reflect changes in the navigation controls."]}),"\n",(0,n.jsx)(t.h2,{id:"binding-to-repositories",children:"Binding to repositories"}),"\n",(0,n.jsxs)(t.p,{children:["Often, a ",(0,n.jsx)(t.code,{children:"Navigator"})," component displays information found in a bound ",(0,n.jsx)(t.code,{children:"Repository"}),". This binding enables the ",(0,n.jsx)(t.code,{children:"Navigator"})," to automatically paginate data managed by the repository and refresh other bindable components, such as tables, based on the navigated data."]}),"\n",(0,n.jsxs)(t.p,{children:["To do this, simply pass the desired ",(0,n.jsx)(t.code,{children:"Repository"})," object to an applicable ",(0,n.jsx)(t.code,{children:"Navigator"})," object's constructor:"]}),"\n",(0,n.jsx)(i.Z,{path:"https://demo.webforj.com/webapp/controlsamples/NavigatorTable?",javaE:"https://raw.githubusercontent.com/webforj/ControlSamples/main/src/main/java/componentdemos/navigatordemos/NavigatorTable.java",height:"475px"}),"\n",(0,n.jsxs)(t.p,{children:["This example creates the ",(0,n.jsx)(t.code,{children:"Navigator"})," and ",(0,n.jsx)(t.a,{href:"./table/",children:(0,n.jsx)(t.code,{children:"Table"})})," with the same ",(0,n.jsx)(t.code,{children:"Repository"})," instance. This means that when navigating to a new page with the ",(0,n.jsx)(t.code,{children:"Navigator"}),", the ",(0,n.jsx)(t.a,{href:"./table/",children:(0,n.jsx)(t.code,{children:"Table"})})," recognizes this change and rerenders."]}),"\n",(0,n.jsx)(t.h2,{id:"pagination",children:"Pagination"}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"Navigator"})," component is closely linked with the ",(0,n.jsx)(t.code,{children:"Paginator"})," model class, calculates pagination metadata such as total number of pages, start/end indices of items on the current page, and an array of page numbers for navigation."]}),"\n",(0,n.jsxs)(t.p,{children:["While not overtly necessary, utilizing the ",(0,n.jsx)(t.code,{children:"Paginator"})," enables the logic behind navigation. When integrating with a ",(0,n.jsx)(t.code,{children:"Paginator"}),", the navigator responds to any changes within the ",(0,n.jsx)(t.code,{children:"Paginator"}),". ",(0,n.jsx)(t.code,{children:"Navigator"})," objects have access to a built-in ",(0,n.jsx)(t.code,{children:"Paginator"})," through use of the ",(0,n.jsx)(t.code,{children:"getPaginator()"})," method. It can also accept a ",(0,n.jsx)(t.code,{children:"Paginator"})," instance via the ",(0,n.jsx)(t.code,{children:"setPaginator()"})," method, or utilization of one of the applicable constructors."]}),"\n",(0,n.jsx)(t.p,{children:"This section includes practical code snippets to illustrate how this integration works in practice."}),"\n",(0,n.jsx)(t.h3,{id:"items",children:"Items"}),"\n",(0,n.jsxs)(t.p,{children:['The term "items" denotes the individual paginated elements or data entries. These could be records, entries, or any discrete units within a dataset. You can set the total number of items using the ',(0,n.jsx)(t.code,{children:"setTotalItems()"})," method."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-java",children:"navigator.getPaginator().setTotalItems(totalItems);\n"})}),"\n",(0,n.jsx)(t.admonition,{type:"info",children:(0,n.jsxs)(t.p,{children:["A repository associated with the ",(0,n.jsx)(t.code,{children:"Paginator"})," instance has the total number of items directly managed by the repository and can't be directly set."]})}),"\n",(0,n.jsx)(t.h3,{id:"maximum-pages",children:"Maximum pages"}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"setMax()"})," method allows you to define the maximum number of page links to display in the pagination navigation. This is particularly useful when dealing with a large number of pages, as it controls the number of page links visible to the user at any given time."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-java",children:"navigator.getPaginator().setMax(maxPages);\n"})}),"\n",(0,n.jsx)(i.Z,{path:"https://demo.webforj.com/webapp/controlsamples/NavigatorPages?",javaE:"https://raw.githubusercontent.com/webforj/ControlSamples/main/src/main/java/componentdemos/navigatordemos/NavigatorPages.java",height:"125px"}),"\n",(0,n.jsxs)(t.p,{children:["This program shows a maximum of five pages on the ",(0,n.jsx)(t.code,{children:"Navigator"})," at one time by using the ",(0,n.jsx)(t.code,{children:"getPaginator()"})," method to retrieve the ",(0,n.jsx)(t.code,{children:"Paginator"})," associated with the ",(0,n.jsx)(t.code,{children:"Navigator"})," object, and then using the ",(0,n.jsx)(t.code,{children:"setMax()"})," method to specify a desired number of maximum pages displayed."]}),"\n",(0,n.jsx)(t.h3,{id:"page-size",children:"Page size"}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"setSize()"})," method allows you to specify the number of items to display on each page of the pagination. When you call this method and provide a new page size, it adjusts the pagination accordingly."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-java",children:"navigator.getPaginator().setSize(pageSize);\n"})}),"\n",(0,n.jsx)(t.h2,{id:"customizing-buttons-text-and-tooltips",children:"Customizing buttons, text and tooltips"}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"Navigator"})," component provides extensive customization options for buttons, text, and tooltips. To change the displayed text on the ",(0,n.jsx)(t.code,{children:"Navigator"})," component, use the ",(0,n.jsx)(t.code,{children:"setText()"})," method. This method takes text, as well as the desired ",(0,n.jsx)(t.code,{children:"Part"})," of the ",(0,n.jsx)(t.code,{children:"Navigator"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["In the following example, the ",(0,n.jsx)(t.code,{children:"setText()"})," method displays a numeric value to the user. Clicking the buttons fires the ",(0,n.jsx)(t.code,{children:"onChange"})," method of the ",(0,n.jsx)(t.code,{children:"Navigator"}),", which comes with a ",(0,n.jsx)(t.code,{children:"Direction"})," value the clicked button."]}),"\n",(0,n.jsx)(i.Z,{path:"https://demo.webforj.com/webapp/controlsamples/NavigatorBasic?",javaE:"https://raw.githubusercontent.com/webforj/ControlSamples/main/src/main/java/componentdemos/navigatordemos/NavigatorBasic.java",height:"100px"}),"\n",(0,n.jsx)(t.h3,{id:"buttons-and-component-text",children:"Buttons and component text"}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"setText()"})," method evaluates the text parameter as a JavaScript expression using following parameters:"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"page"})," - the current page number"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"current"})," - the currently selected page number"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"x"})," - an alias for the current page"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"startIndex"})," - The start index of the current page."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"endIndex"})," - The end index of the current page."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"totalItems"})," - The total number of items."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"startPage"})," - The start page number."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"endPage"})," - The end page number."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"component"})," - The Navigator client component."]}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["For example, to set the text of the last page button in a ",(0,n.jsx)(t.code,{children:"Navigator"}),' with 10 pages to "Go to page 10", use the following code snippet:']}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-java",children:"navigator.setText(\"'Go to page ' + endPage\", Navigator.Part.LAST_BUTTON);\n"})}),"\n",(0,n.jsx)(t.h3,{id:"tooltip-text",children:"Tooltip text"}),"\n",(0,n.jsxs)(t.p,{children:["You can customize tooltips for various parts of the ",(0,n.jsx)(t.code,{children:"Navigator"})," component using the ",(0,n.jsx)(t.code,{children:"setTooltipText()"})," method. Tooltips provide helpful hints to users when they hover over navigation elements."]}),"\n",(0,n.jsx)(t.admonition,{type:"info",children:(0,n.jsxs)(t.p,{children:["Tooltip text doesn't evaluate to Javascript, unlike the text used by the ",(0,n.jsx)(t.code,{children:"setText()"})," method"]})}),"\n",(0,n.jsxs)(t.p,{children:["For example, to set the tooltip text of the last page button in a ",(0,n.jsx)(t.code,{children:"Navigator"}),' to "Go to the last page", use the following code snippet:']}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-java",children:'navigator.setTooltipText("Go to the last page", Navigator.Part.LAST_BUTTON);\n'})}),"\n",(0,n.jsx)(t.h2,{id:"layouts",children:"Layouts"}),"\n",(0,n.jsxs)(t.p,{children:["Various layout options exist for the ",(0,n.jsx)(t.code,{children:"Navigator"})," component  to provide flexibility in displaying pagination controls. To access these layouts, use the ",(0,n.jsx)(t.code,{children:"Navigator.Layout"})," enum's values. The options are as follows:"]}),"\n",(0,n.jsx)(i.Z,{path:"https://demo.webforj.com/webapp/controlsamples/NavigatorLayout?",javaE:"https://raw.githubusercontent.com/webforj/ControlSamples/main/src/main/java/componentdemos/navigatordemos/NavigatorLayout.java",height:"200px"}),"\n",(0,n.jsx)(t.h4,{id:"1-none-layout",children:"1. None layout"}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"NONE"})," layout renders no text within the ",(0,n.jsx)(t.code,{children:"Navigator"}),", displaying only the navigation buttons without a default textual display. To activate this layout, use:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-java",children:"navigator.setLayout(Navigator.Layout.NONE);\n"})}),"\n",(0,n.jsx)(t.h4,{id:"2-numbered-layout",children:"2. Numbered layout"}),"\n",(0,n.jsxs)(t.p,{children:["The numbered layout displays numbered chips corresponding to each page within the display area of the ",(0,n.jsx)(t.code,{children:"Navigator"}),". Using this layout is ideal for scenarios where users prefer direct navigation to specific pages. To activate this layout, use:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-java",children:"navigator.setLayout(Navigator.Layout.PAGES);\n"})}),"\n",(0,n.jsx)(t.h4,{id:"3-preview-layout",children:"3. Preview layout"}),"\n",(0,n.jsx)(t.p,{children:"The preview layout shows the current page number and the total number of pages, and is suitable for compact pagination interfaces with limited space."}),"\n",(0,n.jsx)(t.admonition,{type:"info",children:(0,n.jsxs)(t.p,{children:["Preview is the default ",(0,n.jsx)(t.code,{children:"Navigator"})," layout."]})}),"\n",(0,n.jsx)(t.p,{children:"To activate this layout, use:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-java",children:"navigator.setLayout(Navigator.Layout.PREVIEW);\n"})}),"\n",(0,n.jsx)(t.h4,{id:"4-quick-jump-layout",children:"4. Quick jump layout"}),"\n",(0,n.jsxs)(t.p,{children:["The quick-jump layout provides a ",(0,n.jsx)(t.a,{href:"/docs/components/fields/numberfield",children:"NumberField"})," for users to enter a page number for quick navigation. This is useful when users need to navigate to a specific page quickly, especially for large datasets To activate this layout, use:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-java",children:"navigator.setLayout(Navigator.Layout.QUICK_JUMP);\n"})}),"\n",(0,n.jsx)(t.h2,{id:"styling",children:"Styling"}),"\n",(0,n.jsx)(t.h3,{id:"shadow-parts",children:"Shadow parts"}),"\n",(0,n.jsxs)(t.p,{children:["These are the various parts of the ",(0,n.jsx)(t.a,{href:"../glossary#shadow-dom",children:"shadow DOM"})," for the component, necessary for styling via CSS."]}),"\n",(0,n.jsx)(s.Z,{tag:a(7099).C3,table:"parts"}),"\n",(0,n.jsx)(t.h3,{id:"css-properties",children:"CSS properties"}),"\n",(0,n.jsx)(t.p,{children:"Here are the different CSS properties used in the component, along with a brief explanation of their purpose."}),"\n",(0,n.jsx)(s.Z,{tag:a(7099).C3,table:"properties"}),"\n",(0,n.jsx)(t.h3,{id:"reflected-attributes",children:"Reflected attributes"}),"\n",(0,n.jsx)(t.p,{children:"The component's reflected attributes appear as attributes in the rendered HTML element within the DOM, allowing for styling based on these attributes."}),"\n",(0,n.jsx)(s.Z,{tag:a(7099).C3,table:"reflects"}),"\n",(0,n.jsx)(t.h3,{id:"dependencies",children:"Dependencies"}),"\n",(0,n.jsx)(t.p,{children:"This component relies on the following components - see the related article for more detailed styling information:"}),"\n",(0,n.jsx)(s.Z,{tag:"dwc-navigator",table:"dependencies"}),"\n",(0,n.jsx)(t.h2,{id:"best-practices",children:"Best practices"}),"\n",(0,n.jsxs)(t.p,{children:["To ensure an optimal user experience when using the ",(0,n.jsx)(t.code,{children:"Navigator"})," component, consider the following best practices:"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Understand dataset"}),": Before integrating a ",(0,n.jsx)(t.code,{children:"Navigator"})," component into your app, thoroughly understand the data browsing requirements of your users. Consider factors such as the size of the dataset, typical user interactions, and preferred navigation patterns."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Choose appropriate layout"}),": Select a layout for the ",(0,n.jsx)(t.code,{children:"Navigator"})," component that aligns with the user experience goals and available screen real estate."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Customize text and tooltips"}),": Customize the text and tooltips of the ",(0,n.jsx)(t.code,{children:"Navigator"})," component to match the language and terminology used in your app. Provide descriptive labels and helpful hints to assist users in navigating the dataset effectively."]}),"\n"]}),"\n"]})]})}function m(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(g,{...e})}):g(e)}},6031:(e,t,a)=>{var n=a(4836);t.Z=void 0;var o=n(a(4938)),i=a(5893),s=(0,o.default)((0,i.jsx)("path",{d:"m19 1-5 5v11l5-4.5V1zM1 6v14.65c0 .25.25.5.5.5.1 0 .15-.05.25-.05C3.1 20.45 5.05 20 6.5 20c1.95 0 4.05.4 5.5 1.5V6c-1.45-1.1-3.55-1.5-5.5-1.5S2.45 4.9 1 6zm22 13.5V6c-.6-.45-1.25-.75-2-1v13.5c-1.1-.35-2.3-.5-3.5-.5-1.7 0-4.15.65-5.5 1.5v2c1.35-.85 3.8-1.5 5.5-1.5 1.65 0 3.35.3 4.75 1.05.1.05.15.05.25.05.25 0 .5-.25.5-.5v-1.1z"}),"AutoStories");t.Z=s},2610:(e,t,a)=>{var n=a(4836);t.Z=void 0;var o=n(a(4938)),i=a(5893),s=(0,o.default)((0,i.jsx)("path",{d:"M11 18c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zm-2-8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 4c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"DragIndicator");t.Z=s},5162:(e,t,a)=>{a.d(t,{Z:()=>s});a(7294);var n=a(6010);const o={tabItem:"tabItem_Ymn6"};var i=a(5893);function s(e){let{children:t,hidden:a,className:s}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,n.Z)(o.tabItem,s),hidden:a,children:t})}},4866:(e,t,a)=>{a.d(t,{Z:()=>w});var n=a(7294),o=a(6010),i=a(2466),s=a(6550),r=a(469),l=a(1980),c=a(7392),d=a(12);function h(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:t,children:a}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return h(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:o}}=e;return{value:t,label:a,attributes:n,default:o}}))}(a);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function p(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function g(e){let{queryString:t=!1,groupId:a}=e;const o=(0,s.k6)(),i=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,l._X)(i),(0,n.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(o.location.search);t.set(i,e),o.replace({...o.location,search:t.toString()})}),[i,o])]}function m(e){const{defaultValue:t,queryString:a=!1,groupId:o}=e,i=u(e),[s,l]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:i}))),[c,h]=g({queryString:a,groupId:o}),[m,v]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[o,i]=(0,d.Nk)(a);return[o,(0,n.useCallback)((e=>{a&&i.set(e)}),[a,i])]}({groupId:o}),x=(()=>{const e=c??m;return p({value:e,tabValues:i})?e:null})();(0,r.Z)((()=>{x&&l(x)}),[x]);return{selectedValue:s,selectValue:(0,n.useCallback)((e=>{if(!p({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);l(e),h(e),v(e)}),[h,v,i]),tabValues:i}}var v=a(2389);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=a(5893);function f(e){let{className:t,block:a,selectedValue:n,selectValue:s,tabValues:r}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.o5)(),d=e=>{const t=e.currentTarget,a=l.indexOf(t),o=r[a].value;o!==n&&(c(t),s(o))},h=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const a=l.indexOf(e.currentTarget)+1;t=l[a]??l[0];break}case"ArrowLeft":{const a=l.indexOf(e.currentTarget)-1;t=l[a]??l[l.length-1];break}}t?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},t),children:r.map((e=>{let{value:t,label:a,attributes:i}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>l.push(e),onKeyDown:h,onClick:d,...i,className:(0,o.Z)("tabs__item",x.tabItem,i?.className,{"tabs__item--active":n===t}),children:a??t},t)}))})}function j(e){let{lazy:t,children:a,selectedValue:o}=e;const i=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===o));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:i.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==o})))})}function A(e){const t=m(e);return(0,b.jsxs)("div",{className:(0,o.Z)("tabs-container",x.tabList),children:[(0,b.jsx)(f,{...e,...t}),(0,b.jsx)(j,{...e,...t})]})}function w(e){const t=(0,v.Z)();return(0,b.jsx)(A,{...e,children:h(e.children)},String(t))}},6957:(e,t,a)=>{a.d(t,{Z:()=>f});var n=a(7294),o=a(917),i=a(5697),s=a.n(i),r=a(4866),l=a(5162),c=a(4673),d=a(1750);const h=a.p+"assets/images/expand-ba3f00f73da43d91e5b17663c4a7d108.png",u="data:image/png;base64,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",p="data:image/png;base64,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";var g=a(2949),m=a(2610),v=a(5944);function x(e){let{collapse:t,setCollapse:a}=e;x.propTypes={collapse:s().bool.isRequired,setCollapse:s().func.isRequired};const n=o.iv`
    display: flex;
    justify-content: end;
    align-items: flex-end;
    background-color: transparent;
    margin-bottom: -10px;
  `,i=o.iv`
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
  `,r=o.iv`
    filter: invert(var(--inversion-percentage));
  `;return(0,v.tZ)("div",{css:n,children:(0,v.tZ)("button",{css:i,onClick:()=>{a(!t)},children:t?(0,v.tZ)("img",{alt:"collapse_button",css:r,src:h,className:"icon-tabler-arrow-bar-up"}):(0,v.tZ)("img",{css:r,src:u,className:"icon-tabler-arrow-bar-down"})})})}function b(e){let{url:t}=e;const a=o.iv`
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
  `,n=o.iv`
    filter: invert(var(--inversion-percentage));
    ::before {
      mix-blend-mode: lighten;
      opacity: 0.5;
    }
  `;return(0,v.tZ)("button",{css:a,onClick:()=>{window.open(t,"_blank")},children:(0,v.tZ)("img",{css:n,src:p})})}function f(e){let{path:t,javaC:a,javaE:i,urls:h,cssURL:u,javaHighlight:p,height:j,frame:A,tabs:w}=e;f.propTypes={path:s().string.isRequired,javaC:s().string,javaE:s().string,urls:s().arrayOf(s().string),cssURL:s().string,javaHighlight:s().string,height:s().string,frame:s().string,tabs:s().arrayOf(s().string)};const[y,N]=(0,n.useState)(""),[Z,T]=(0,n.useState)(""),[k,B]=(0,n.useState)({}),[S,D]=(0,n.useState)(""),[C,L]=(0,n.useState)(!(!a||!i)),[E,z]=(0,n.useState)(!1),[P,M]=(0,n.useState)({}),[O,V]=(0,n.useState)(!1),[H,X]=(0,n.useState)(0),[F,G]=(0,n.useState)(0),[I,J]=(0,n.useState)(25),[Y,q]=(0,n.useState)(25),[R,W]=(0,n.useState)(0),[U,K]=(0,n.useState)(!1),Q=(0,n.useRef)(null),_=(0,n.useRef)(null);function $(e,t,a){return(0,v.tZ)(d.Z,{css:t,className:"codeDemoBlock",language:"java",showLineNumbers:!0,metastring:a,children:e.code})}(0,n.useEffect)((()=>{i&&fetch(i).then((e=>e.text())).then((e=>{T(e);const t=new URL(i).pathname.split("/"),a=t[t.length-1];M((e=>({...e,javaFile:a})))})),a&&fetch(a).then((e=>e.text())).then((e=>{N(e)})),u&&fetch(u).then((e=>e.text())).then((e=>{D(e);const t=new URL(u).pathname.split("/"),a=t[t.length-1];M((e=>({...e,cssFile:a})))})),h&&h.forEach((function(e){const t=new URL(e),a=t.pathname.split("/"),n=a[a.length-1];fetch(e).then((e=>e.text())).then((e=>{!function(e,t){B((a=>({...a,[e]:{fileName:e,code:t}})))}(n,e)}))})),W(Q.current?Q.current.offsetWidth:0)}),[]);const ee=()=>{V(!1)},te=e=>{if(O){const t=e.clientX-H;F+t>R/3&&(Q.current.style.width=`${F+t}px`,_.current.style.right=(I-t<25?25:I-t)+"px",q(I-t<25?25:I-t))}},ae=o.iv`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-bottom: 16px;
    background-color: var(--code-display-color-background);
  `,ne=o.iv`
    width: 100%;
    border: 1px solid var(--ifm-toc-border-color);
    border-right: none;
    background-color: transparent;
    display: flex;
    position: relative;
  `,oe=o.iv`
    min-height: 100px;
    height: 100%;
    width: 100%;
    height: ${j||"100%"};
    pointer-events: ${O?"none":"auto"};
  `,ie=o.iv`
    display: flex;
    justify-content: flex-end;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
    ${E&&"opacity: 1;"};
    margin: 10px 0 0 0;
    position: absolute;
    right: 25px;
  `,se=o.iv`
    display: flex;
    align-items: center;
    cursor: ew-resize;
    border-left: 1px solid var(--ifm-toc-border-color);
    border-right: 1px solid var(--ifm-toc-border-color);
    background-color: var(--ifm-background-color);
  `,re=o.iv`
    box-shadow: none;
    background-color: var(--ifm-background-color);
    margin: 0px;
    padding: 0px;
    border: ${"hidden"==A?"none":"1px solid var(--ifm-toc-border-color)"};
    border-top: none;
    border-radius: 0px;
    position: relative;

    div {
      border-color: var(--ifm-toc-border-color);
      padding: 2px 0px 0px 0px;
      margin: 0px;
    }

    > div:first-of-type {
      border: ${"hidden"==A?"1px solid var(--ifm-toc-border-color)":"none"};
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
  `,le=o.iv`
    li[aria-selected="true"] {
      border-color: var(--ifm-color-primary);
    }

    .tabs__item {
      padding: 5px 20px -2px 20px;
      border-radius: 0px;
    }
  `,ce=o.iv`
    border-radius: 0px;
    box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 4px 0px inset;
  `;return(0,v.BX)("div",{css:ae,onMouseUp:ee,onMouseLeave:ee,onMouseMove:te,children:["hidden"!=A?(0,v.BX)("div",{onMouseEnter:()=>{z(!0)},onMouseLeave:()=>z(!1),css:ne,children:[(0,v.tZ)("iframe",{onMouseUp:ee,loading:"lazy",src:t+"&__theme__="+(0,g.I)().colorMode,css:oe,ref:Q,onMouseMove:te}),(0,v.tZ)("div",{css:ie,ref:_,children:(0,v.tZ)(b,{url:t})}),(0,v.tZ)("div",{css:se,onMouseDown:e=>{e.preventDefault(),V(!0),X(e.clientX),G(Q.current?Q.current.offsetWidth:0),J(Y)},children:(0,v.tZ)(m.Z,{})})]}):null,(0,v.BX)(c.Z,{css:re,summary:(0,v.tZ)("summary",{onClick:()=>K(!U),children:U?"Hide Code":"Show Code"}),children:[a&&i?(0,v.tZ)(x,{collapse:C,setCollapse:L}):null,u?(0,v.BX)(r.Z,{css:le,children:[(0,v.tZ)(l.Z,{value:w?w[0]:"Java",label:w?w[0]:P.javaFile,default:!0,children:(0,v.tZ)(d.Z,{css:ce,className:"codeDemoBlock",language:"java",showLineNumbers:!0,metastring:p,children:C?y:Z})}),Object.keys(k).map(((e,t)=>(0,v.tZ)(l.Z,{value:e,label:e,children:$(k[e],ce,p)},"tab"+t))),(0,v.tZ)(l.Z,{value:w?w[1]:"CSS",label:w?w[1]:P.cssFile,children:(0,v.tZ)(d.Z,{css:ce,className:"codeDemoBlock",language:"css",showLineNumbers:!0,children:S})})]}):(0,v.BX)(r.Z,{css:le,children:[(0,v.tZ)(l.Z,{value:w?w[0]:"Java",label:w?w[0]:P.javaFile,default:!0,children:(0,v.tZ)(d.Z,{css:ce,className:"codeDemoBlock",language:"java",showLineNumbers:!0,metastring:p,children:C?y:Z})}),Object.keys(k).map(((e,t)=>(0,v.tZ)(l.Z,{value:e,label:e,children:$(k[e],ce,p)},"tab"+t)))]})]})]})}},4904:(e,t,a)=>{a(7294),a(3273)},3273:(e,t,a)=>{a.d(t,{Z:()=>c});var n=a(7294),o=a(917),i=a(9112),s=a(8385),r=a(6031);var l=a(5944);function c(e){let{type:t,location:a,top:c,children:d,code:h,suffix:u}=e;const[p,g]=(0,n.useState)("");(0,n.useEffect)((()=>{u||(u=""),g("https://javadoc.io/doc/com.webforj/webforj-"+t+"/latest/"+a+".html"+u)}),[]);const m=o.iv`
    display: inline;

    ${c&&o.iv`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    margin-top: -33px;
    margin-bottom: 25px;
    `}
  `,v=o.iv`
  background-color: #0063CC;
  padding: 0 0 0 5px;
  :hover{
    color: white;
  }
  `;return(0,l.BX)(l.HY,{children:["true"===c&&(0,l.tZ)("div",{css:m,children:(0,l.tZ)(i.Z,{title:"JavaDoc",arrow:!0,children:(0,l.tZ)(s.Z,{css:v,label:"Java API",component:"a",href:p,icon:(0,l.tZ)(r.Z,{}),clickable:!0,color:"primary",target:"_blank"})})}),"true"!==c&&!h&&(0,l.tZ)("div",{css:m,children:(0,l.tZ)("a",{href:p,target:"_blank",children:d})}),"true"!==c&&h&&(0,l.tZ)("div",{css:m,children:(0,l.tZ)("code",{children:(0,l.tZ)("a",{href:p,target:"_blank",children:d})})})]})}},1415:(e,t,a)=>{a.d(t,{Z:()=>i});a(7294);var n=a(8397),o=a(5893);function i(e){return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(n.Z,{...e})})}},7099:e=>{e.exports=JSON.parse('{"LN":"dwc-app-layout","zx":"dwc-button","XZ":"dwc-checkbox","gN":"dwc-field","iR":"dwc-slider","wb":"dwc-listbox","Z":"dwc-choicebox","Ct":"dwc-combobox","C3":"dwc-navigator","ko":"dwc-progressbar","EU":"dwc-radio","ib":"dwc-tabbed-pane","dy":"dwc-drawer","Vq":"dwc-dialog","JO":"dwc-icon","qX":"dwc-splitter","m3":"dwc-login"}')}}]);