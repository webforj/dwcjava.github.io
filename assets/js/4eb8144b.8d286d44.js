"use strict";(self.webpackChunkdwcj_documentation=self.webpackChunkdwcj_documentation||[]).push([[2498],{8306:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>d,default:()=>b,frontMatter:()=>c,metadata:()=>h,toc:()=>p});var s=n(5893),o=n(1151),i=n(6957),r=n(7796),a=n(3273),l=n(2665);const c={sidebar_position:1,title:"ChoiceBox",slug:"choicebox"},d=void 0,h={id:"components/list-components/choice-box",title:"ChoiceBox",description:"The ChoiceBox component is a user interface element designed to present users with a list of options or choices. Users can select a single option from this list, typically by clicking the ChoiceBox, which triggers the display of a dropdown list containing available choices. Users can also interact with the ChoiceBox with the arrow keys. When a user makes a selection, the chosen option is then displayed in the ChoiceBox button.",source:"@site/docs/components/list-components/choice-box.md",sourceDirName:"components/list-components",slug:"/components/list-components/choicebox",permalink:"/docs/components/list-components/choicebox",draft:!1,unlisted:!1,editUrl:"https://github.com/DwcJava/dwcjava.github.io/tree/website/docs/components/list-components/choice-box.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"ChoiceBox",slug:"choicebox"},sidebar:"documentationSidebar",previous:{title:"Lists",permalink:"/docs/components/list-components/lists"},next:{title:"ComboBox",permalink:"/docs/components/list-components/combobox"}},u={},p=[{value:"Usages",id:"usages",level:2},{value:"Constructors",id:"constructors",level:2},{value:"Dropdown Type",id:"dropdown-type",level:2},{value:"Max Row Count",id:"max-row-count",level:2},{value:"Opening Dimensions",id:"opening-dimensions",level:2},{value:"Events",id:"events",level:2},{value:"Adding Events",id:"adding-events",level:3},{value:"Removing Events",id:"removing-events",level:3},{value:"Styling",id:"styling",level:2},{value:"Expanses",id:"expanses",level:3},{value:"Themes",id:"themes",level:3},{value:"Shadow Parts",id:"shadow-parts",level:3},{value:"CSS Properties",id:"css-properties",level:3},{value:"Reflected Attributes",id:"reflected-attributes",level:3},{value:"Dependencies",id:"dependencies",level:3},{value:"Best Practices",id:"best-practices",level:2}];function m(e){const t={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(l.Z,{tooltipText:"This component will render with a shadow DOM, an API built into the browser that facilitates encapsulation.",label:"Shadow",component:"a",href:"../../glossary#shadow-dom",target:"_blank",clickable:!0,iconName:"shadow"}),"\n",(0,s.jsx)(l.Z,{tooltipText:"The name of the web component that will render in the DOM.",label:"bbj-list-button",href:"https://basishub.github.io/basis-next/#/web-components/bbj-list-button",clickable:!1,iconName:"code"}),"\n",(0,s.jsx)(a.Z,{type:"engine",location:"org/dwcj/component/button/Button",top:"true"}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"ChoiceBox"})," component is a user interface element designed to present users with a list of options or choices. Users can select a single option from this list, typically by clicking the ",(0,s.jsx)(t.code,{children:"ChoiceBox"}),", which triggers the display of a dropdown list containing available choices. Users can also interact with the ",(0,s.jsx)(t.code,{children:"ChoiceBox"})," with the arrow keys. When a user makes a selection, the chosen option is then displayed in the ",(0,s.jsx)(t.code,{children:"ChoiceBox"})," button."]}),"\n",(0,s.jsx)(i.Z,{path:"https://hot.bbx.kitchen/webapp/controlsamples?class=componentdemos.comboboxdemos.ChoiceBoxDemo",javaE:"https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/java/componentdemos/comboboxdemos/ChoiceBoxDemo.java",cssURL:"https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/resources/css/comboboxstyles/demo_styles.css",height:"250px"}),"\n",(0,s.jsx)(t.h2,{id:"usages",children:"Usages"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"ChoiceBox"})," components are used for various purposes, such as selecting items from a menu, choosing from a list of categories, or picking options from predefined sets. They provide an organized and visually pleasing way for users to make selections, particularly when there are multiple options available. Common usages include:"]}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"User Selection of Options"}),": The primary purpose of a ",(0,s.jsx)(t.code,{children:"ChoiceBox"})," is to allow users to select a single option from a list. This is valuable in applications that require users to make choices, such as:"]}),"\n"]}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Selecting items from a list"}),"\n",(0,s.jsx)(t.li,{children:"Choosing from a list of categories"}),"\n",(0,s.jsx)(t.li,{children:"Picking options from predefined sets"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(t.ol,{start:"2",children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Form Inputs"}),": When designing forms that require users to input specific options, the ",(0,s.jsx)(t.code,{children:"ChoiceBox"})," simplifies the selection process. Whether it's selecting a country, state, or any other option from a predefined list, the ",(0,s.jsx)(t.code,{children:"ChoiceBox"})," streamlines the input process."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Filtering and Sorting"}),": ",(0,s.jsx)(t.code,{children:"ChoiceBox"})," can be employed for filtering and sorting tasks in applications. Users can choose filter criteria or sorting preferences from a list, facilitating the organization and navigation of data."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Configuration and Settings"}),": When your application includes settings or configuration options, the ",(0,s.jsx)(t.code,{children:"ChoiceBox"})," provides an intuitive way for users to adjust preferences. Users can pick settings from a list, making it easy to tailor the application to their needs."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.admonition,{type:"tip",children:(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"ChoiceBox"})," is intended for use when a preset number of options are available, and custom options should not be allowed or included. If allowing users to enter custom values is desired, use a ",(0,s.jsx)(t.a,{href:"/docs/components/list-components/combobox",children:(0,s.jsx)(t.code,{children:"ComboBox"})})," instead"]})}),"\n",(0,s.jsx)(t.h2,{id:"constructors",children:"Constructors"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.code,{children:"ChoiceBox()"})}),": Constructs a new ",(0,s.jsx)(t.code,{children:"ChoiceBox"})," without a label."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.code,{children:"ChoiceBox(String label)"})}),": Constructs a new ",(0,s.jsx)(t.code,{children:"ChoiceBox"})," with the specified label."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.code,{children:"ChoiceBox(String label, ComponentEventListener<ListSelectEvent> selectListener)"})}),": Constructs a new ",(0,s.jsx)(t.code,{children:"ChoiceBox"})," with the given label and a listener to handle item selection events."]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"dropdown-type",children:"Dropdown Type"}),"\n",(0,s.jsxs)(t.p,{children:["Using the ",(0,s.jsx)(t.code,{children:"setDropdownType()"})," method will assign a value to the ",(0,s.jsx)(t.code,{children:"type"})," attribute of a ",(0,s.jsx)(t.code,{children:"ChoiceBox"}),", and a corresponding value for the ",(0,s.jsx)(t.code,{children:"data-dropdown-for"})," attribute in the dropdown of the ",(0,s.jsx)(t.code,{children:"ChoiceBox"}),". This is helpful for styling, as the dropdown is taken out of its current position in the DOM and relocated to the end of the page body when opened."]}),"\n",(0,s.jsx)(t.p,{children:"This detachment creates a situation where directly targeting the\r\ndropdown using CSS or shadow part selectors from the parent component becomes challenging, unless you make use of the dropdown type attribute."}),"\n",(0,s.jsx)(t.p,{children:"In the demo below, the Dropdown type is set and used in the CSS file to select the dropdown and change the background color."}),"\n",(0,s.jsx)(i.Z,{path:"https://hot.bbx.kitchen/webapp/controlsamples?class=componentdemos.comboboxdemos.ChoiceBoxDropdownType",javaE:"https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/java/componentdemos/comboboxdemos/ChoiceBoxDropdownType.java",cssURL:"https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/resources/css/comboboxstyles/dropdown_styles.css",height:"100px"}),"\n",(0,s.jsx)(t.h2,{id:"max-row-count",children:"Max Row Count"}),"\n",(0,s.jsxs)(t.p,{children:["By default, the number of rows displayed in the dropdown of a ",(0,s.jsx)(t.code,{children:"ChoiceBox"})," will be increased to fit the content. However, using the ",(0,s.jsx)(t.code,{children:"setMaxRowCount()"})," method allows for control over how many items are displayed."]}),"\n",(0,s.jsx)(t.admonition,{type:"caution",children:(0,s.jsx)(t.p,{children:"Using a number that is less than or equal to 0 will result in unsetting this property."})}),"\n",(0,s.jsx)(i.Z,{path:"https://hot.bbx.kitchen/webapp/controlsamples?class=componentdemos.comboboxdemos.ChoiceBoxMaxRowDemo",javaE:"https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/java/componentdemos/comboboxdemos/ChoiceBoxMaxRowDemo.java",cssURL:"https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/resources/css/comboboxstyles/demo_styles.css",height:"250px"}),"\n",(0,s.jsx)(t.h2,{id:"opening-dimensions",children:"Opening Dimensions"}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"ChoiceBox"})," component has methods that allow manipulation of the dropdown dimensions. The ",(0,s.jsx)(t.strong,{children:"maximum height"})," and ",(0,s.jsx)(t.strong,{children:"minimum width"})," of the dropdown can be set using the ",(0,s.jsx)(t.code,{children:"setOpenHeight()"})," and ",(0,s.jsx)(t.code,{children:"setOpenWidth()"})," methods, respectively."]}),"\n",(0,s.jsx)(t.admonition,{type:"tip",children:(0,s.jsxs)(t.p,{children:["Passing a ",(0,s.jsx)(t.code,{children:"String"})," value to either of these methods will allow for ",(0,s.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Values_and_units",children:"any valid CSS unit"})," to be applied, such as pixels, viewport dimensions, or other valid rules. Passing an ",(0,s.jsx)(t.code,{children:"int"})," will set the value passed in pixels."]})}),"\n",(0,s.jsx)(t.h2,{id:"events",children:"Events"}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"ChoiceBox"})," class provides methods to add and remove event listeners for the following events, as well as events common to all list components:"]}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"Events"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:(0,s.jsx)(a.Z,{type:"engine",location:"org/dwcj/component/list/event/ListOpenEvent",code:"true",children:"ListOpenEvent"})}),(0,s.jsx)(t.td,{children:"An event which is fired when a list dropdown is opened."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:(0,s.jsx)(a.Z,{type:"engine",location:"org/dwcj/component/list/event/ListCloseEvent",code:"true",children:"ListCloseEvent"})}),(0,s.jsx)(t.td,{children:"An event which is fired when a list dropdown is closed."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:(0,s.jsx)(a.Z,{type:"engine",location:"org/dwcj/component/list/event/ListClickEvent",code:"true",children:"ListClickEvent"})}),(0,s.jsx)(t.td,{children:"This event is triggered when the user clicks an item from a List-based component."})]})]})]}),"\n",(0,s.jsx)(t.admonition,{title:"Notice",type:"caution",children:(0,s.jsxs)(t.p,{children:["For a list of additional events supported by the ",(0,s.jsx)(t.code,{children:"ChoiceBox"}),", see ",(0,s.jsx)(t.a,{href:"/docs/components/list-components/lists#shared-events",children:"this section"})," which outlines shared events amongst list components."]})}),"\n",(0,s.jsx)(t.h3,{id:"adding-events",children:"Adding Events"}),"\n",(0,s.jsx)(t.p,{children:"To add an event listener, use one of the following patterns:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-java",children:"choiceBox.addOpenListener(e -> {\r\n  //Executed when the event fires\r\n});\r\n\r\n//OR\r\n\r\nchoiceBox.addOpenListener(new ComponentEventListener<ListOpenEvent>() {\r\n  @Override\r\n  public void onComponentEvent(ComponentEvent e){\r\n    //Executed when the event fires\r\n  }\r\n});\r\n\r\n//OR\r\n\r\nchoiceBox.addOpenListener(this::listOpenMethod);\n"})}),"\n",(0,s.jsxs)(t.p,{children:["Additional syntactic sugar methods, or aliases, have been added to allow for alternative addition of events by using the ",(0,s.jsx)(t.code,{children:"on"})," prefix followed by the event, such as:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-java",children:"choiceBox.onOpen(e -> {\r\n  //Executed when the event fires\r\n});\n"})}),"\n",(0,s.jsx)(t.h3,{id:"removing-events",children:"Removing Events"}),"\n",(0,s.jsx)(t.p,{children:"To remove an event listener, use the appropriate method:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-java",children:"choiceBox.removeOpenListener(listener);\n"})}),"\n",(0,s.jsx)(t.admonition,{type:"tip",children:(0,s.jsxs)(t.p,{children:["When adding an event listener, a ",(0,s.jsx)(t.code,{children:"ListenerRegistration"})," object will be returned. This can be used, among other things, to remove the event later on."]})}),"\n",(0,s.jsx)(t.h2,{id:"styling",children:"Styling"}),"\n",(0,s.jsx)(t.h3,{id:"expanses",children:"Expanses"}),"\n",(0,s.jsxs)(t.p,{children:["There are five ",(0,s.jsx)(t.code,{children:"ChoiceBox"})," expanses that are supported which allow for quick styling without using CSS. Expanses are supported by use of a built-in enum class. ",(0,s.jsx)("br",{})]}),"\n",(0,s.jsx)(i.Z,{path:"https://hot.bbx.kitchen/webapp/controlsamples?class=componentdemos.comboboxdemos.ComboboxExpanseDemo",javaE:"https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/java/componentdemos/comboboxdemos/ComboboxExpanseDemo.java",javaC:"https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/code_snippets/combobox/Expanse.txt",cssURL:"https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/resources/css/comboboxstyles/expanse_styles.css",height:"150px"}),"\n",(0,s.jsx)(t.h3,{id:"themes",children:"Themes"}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"ChoiceBox"})," component comes with 14 themes built in for quick styling without the use of CSS. Theming is supported by use of a built-in enum class."]}),"\n",(0,s.jsx)(i.Z,{path:"https://hot.bbx.kitchen/webapp/controlsamples?class=componentdemos.comboboxdemos.ComboboxThemeDemo",javaE:"https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/java/componentdemos/comboboxdemos/ComboboxThemeDemo.java",cssURL:"https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/resources/css/comboboxstyles/theme_styles.css",height:"170px"}),"\n",(0,s.jsx)(t.h3,{id:"shadow-parts",children:"Shadow Parts"}),"\n",(0,s.jsxs)(t.p,{children:["These are the various parts of the ",(0,s.jsx)(t.a,{href:"../../glossary#shadow-dom",children:"shadow DOM"})," for the ",(0,s.jsx)(t.code,{children:"ChoiceBox"})," component, which will be required when styling via CSS is desired."]}),"\n",(0,s.jsx)(r.Z,{tag:n(5731).Z,table:"parts",exclusions:""}),"\n",(0,s.jsx)(t.h3,{id:"css-properties",children:"CSS Properties"}),"\n",(0,s.jsx)(t.p,{children:"These are the various CSS properties that are used in the component, with a short description of their use."}),"\n",(0,s.jsx)(r.Z,{tag:n(5731).Z,exclusions:"",table:"properties"}),"\n",(0,s.jsx)(t.h3,{id:"reflected-attributes",children:"Reflected Attributes"}),"\n",(0,s.jsx)(t.p,{children:"The reflected attributes of a component will be shown as attributes in the rendered HTML element for the component in the DOM. This means that styling can be applied using these attributes."}),"\n",(0,s.jsx)(r.Z,{tag:n(5731).Z,table:"reflects",exclusions:""}),"\n",(0,s.jsx)(t.h3,{id:"dependencies",children:"Dependencies"}),"\n",(0,s.jsx)(t.p,{children:"This component relies on the following components - see the related article for more detailed styling information:"}),"\n",(0,s.jsx)(r.Z,{tag:"bbj-list-button",table:"dependencies"}),"\n",(0,s.jsx)(t.h2,{id:"best-practices",children:"Best Practices"}),"\n",(0,s.jsxs)(t.p,{children:["To ensure an optimal user experience when using the ",(0,s.jsx)(t.code,{children:"ChoiceBox"})," component, consider the following best practices:"]}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Clear and Limited Options"}),": Keep the list of choices concise where possible, and relevant to the user's task. A ",(0,s.jsx)(t.code,{children:"ChoiceBox"})," is ideal for presenting a clear list of options."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"User-Friendly Labels"}),": Ensure that the displayed labels for each option are user-friendly and self-explanatory. Make sure users can easily understand the purpose of each choice."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Default Selection"}),": Set a default selection when the ChoiceBox is initially displayed. This ensures a pre-selected option, reducing the number of interactions required to make a choice."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"ChoiceBox vs. Other List Components"}),": A ",(0,s.jsx)(t.code,{children:"ChoiceBox"})," should be used over other List components in the following situations:"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Multiple Selection is not needed or required, and all items do not need to be displayed at once."}),"\n",(0,s.jsx)(t.li,{children:"A selection of predefined choices is desired, preventing users from entering custom or unexpected data."}),"\n"]}),"\n"]})]})}function b(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(m,{...e})}):m(e)}},5162:(e,t,n)=>{n.d(t,{Z:()=>r});n(7294);var s=n(6010);const o={tabItem:"tabItem_Ymn6"};var i=n(5893);function r(e){let{children:t,hidden:n,className:r}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,s.Z)(o.tabItem,r),hidden:n,children:t})}},4866:(e,t,n)=>{n.d(t,{Z:()=>j});var s=n(7294),o=n(6010),i=n(2466),r=n(6550),a=n(469),l=n(1980),c=n(7392),d=n(12);function h(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:t,children:n}=e;return(0,s.useMemo)((()=>{const e=t??function(e){return h(e).map((e=>{let{props:{value:t,label:n,attributes:s,default:o}}=e;return{value:t,label:n,attributes:s,default:o}}))}(n);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const o=(0,r.k6)(),i=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l._X)(i),(0,s.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(o.location.search);t.set(i,e),o.replace({...o.location,search:t.toString()})}),[i,o])]}function b(e){const{defaultValue:t,queryString:n=!1,groupId:o}=e,i=u(e),[r,l]=(0,s.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const s=n.find((e=>e.default))??n[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:t,tabValues:i}))),[c,h]=m({queryString:n,groupId:o}),[b,x]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[o,i]=(0,d.Nk)(n);return[o,(0,s.useCallback)((e=>{n&&i.set(e)}),[n,i])]}({groupId:o}),g=(()=>{const e=c??b;return p({value:e,tabValues:i})?e:null})();(0,a.Z)((()=>{g&&l(g)}),[g]);return{selectedValue:r,selectValue:(0,s.useCallback)((e=>{if(!p({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);l(e),h(e),x(e)}),[h,x,i]),tabValues:i}}var x=n(2389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=n(5893);function w(e){let{className:t,block:n,selectedValue:s,selectValue:r,tabValues:a}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.o5)(),d=e=>{const t=e.currentTarget,n=l.indexOf(t),o=a[n].value;o!==s&&(c(t),r(o))},h=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;t=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;t=l[n]??l[l.length-1];break}}t?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t),children:a.map((e=>{let{value:t,label:n,attributes:i}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,ref:e=>l.push(e),onKeyDown:h,onClick:d,...i,className:(0,o.Z)("tabs__item",g.tabItem,i?.className,{"tabs__item--active":s===t}),children:n??t},t)}))})}function f(e){let{lazy:t,children:n,selectedValue:o}=e;const i=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===o));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:i.map(((e,t)=>(0,s.cloneElement)(e,{key:t,hidden:e.props.value!==o})))})}function A(e){const t=b(e);return(0,v.jsxs)("div",{className:(0,o.Z)("tabs-container",g.tabList),children:[(0,v.jsx)(w,{...e,...t}),(0,v.jsx)(f,{...e,...t})]})}function j(e){const t=(0,x.Z)();return(0,v.jsx)(A,{...e,children:h(e.children)},String(t))}},6957:(e,t,n)=>{n.d(t,{Z:()=>x});var s=n(7294),o=n(917),i=n(4866),r=n(5162),a=n(4673),l=n(1750);const c="data:image/png;base64,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",d=n.p+"assets/images/expand-ba3f00f73da43d91e5b17663c4a7d108.png",h="data:image/png;base64,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";var u=n(2949),p=n(5944);function m(e){let{collapse:t,setCollapse:n}=e;const s=o.iv`
    display: flex;
    justify-content: end;
    margin-bottom: -30px;
    background-color: transparent;
    `,i=o.iv`
    position: relative;
    cursor: pointer;
    z-index: 10;
    height: 35px;
    width: 35px;
    border: none;
    background-color: none;
    justify-self: flex-end;
    margin-right: 5px;
    background-color: transparent;  
  `,r=o.iv`
      filter: invert(var(--inversion-percentage));
  `;return(0,p.tZ)("div",{css:s,children:(0,p.tZ)("button",{css:i,onClick:()=>{n(!t)},children:t?(0,p.tZ)("img",{css:r,src:d,className:"icon-tabler-arrow-bar-up"}):(0,p.tZ)("img",{css:r,src:c,className:"icon-tabler-arrow-bar-down"})})})}function b(e){let{url:t}=e;const n=o.iv`
      position: relative;
      cursor: pointer;
      z-index: 10;
      height: 35px;
      width: 35px;
      border: none;
      background-color: none;
      justify-self: flex-end;
      /* margin-right: 5px; */
      margin-top: -5px;
      margin-bottom: -20px;
      background-color: transparent;

      
    `,s=o.iv`
      filter: invert(var(--inversion-percentage));
      ::before{
        mix-blend-mode: lighten; /* The blend mode determines how the overlay interacts with the image */
        opacity: 0.5;
      }
    `;return(0,p.tZ)("button",{css:n,onClick:()=>{window.open(t,"_blank")},children:(0,p.tZ)("img",{css:s,src:h})})}function x(e){let{path:t,javaC:n,javaE:c,cssURL:d,javaHighlight:h,height:x,frame:g,tabs:v}=e;const[w,f]=(0,s.useState)(""),[A,j]=(0,s.useState)(""),[y,C]=(0,s.useState)(""),[B,D]=(0,s.useState)(!(!n||!c)),[k,S]=(0,s.useState)(!1),[Z,E]=(0,s.useState)({});(0,s.useEffect)((()=>{c&&fetch(c).then((e=>e.text())).then((e=>{j(e);const t=new URL(c).pathname.split("/"),n=t[t.length-1];E((e=>({...e,javaFile:n})))})),n&&fetch(n).then((e=>e.text())).then((e=>{f(e)})),d&&fetch(d).then((e=>e.text())).then((e=>{C(e);const t=new URL(d).pathname.split("/"),n=t[t.length-1];E((e=>({...e,cssFile:n})))}))}),[]);const L=o.iv`
		display: flex;
    flex-direction: column;
    background-color: var(--code-display-color);
		width: 100%;
    margin-bottom: 16px;
    padding: ${"hidden"==g?"0 15px 0 15px;":"7px 15px 0 15px;"};
    box-shadow: var(--ifm-global-shadow-lw);
    `,T=o.iv`
    min-height: 100px;
    height: 100%;
    width: 100%;
    height: ${x};
  `,O=o.iv`
    border: none;
    box-shadow: none;
    background-color: var(--code-display-color);
    margin-bottom: 0px;
    padding: 10px;

    .tabs{
      margin-top: 20px;
    }

    summary{
      display: flex;
      width: 100%;
      justify-content: center;
      margin: 0;
      font-weight: bold;
      ::before{
        left: auto;
        margin-left: -100px;
      }
    }

  `,N=o.iv`
  width: 100%;
  `,J=o.iv`
  display: flex;
  justify-content: flex-end;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
    ${k&&"opacity: 1;"};
    
  `;return(0,p.BX)("div",{css:L,children:["hidden"!=g?(0,p.BX)("div",{onMouseEnter:()=>{S(!0)},onMouseLeave:()=>S(!1),css:N,children:[(0,p.tZ)("div",{css:J,children:(0,p.tZ)(b,{url:t})}),(0,p.tZ)("iframe",{loading:"lazy",src:t+"&theme="+("dark"===(0,u.I)().colorMode?"dark":"light"),css:T})]}):null,(0,p.BX)(a.Z,{css:O,summary:(0,p.tZ)("summary",{children:"Show Code"}),children:[n&&c?(0,p.tZ)(m,{collapse:B,setCollapse:D}):null,d?(0,p.BX)(i.Z,{children:[(0,p.tZ)(r.Z,{value:v?v[0]:"Java",label:v?v[0]:Z.javaFile,default:!0,children:(0,p.tZ)(l.Z,{className:"codeDemoBlock",language:"java",showLineNumbers:!0,metastring:h,children:B?w:A})}),(0,p.tZ)(r.Z,{value:v?v[1]:"CSS",label:v?v[1]:Z.cssFile,children:(0,p.tZ)(l.Z,{className:"codeDemoBlock",language:"css",showLineNumbers:!0,children:y})})]}):(0,p.tZ)(i.Z,{children:(0,p.tZ)(r.Z,{value:v?v[0]:"Java",label:v?v[0]:Z.javaFile,default:!0,children:(0,p.tZ)(l.Z,{className:"codeDemoBlock",language:"java",showLineNumbers:!0,metastring:h,children:B?w:A})})})]})]})}},3273:(e,t,n)=>{n.d(t,{Z:()=>u});var s=n(7294),o=n(917),i=n(8230),r=n(4387),a=n(6770);let l=null,c=null;const d={getLatestTag:async function(){return l&&c&&Date.now()-c<36e5?l:async function(){try{const e=await fetch("https://api.github.com/repos/DwcJava/engine/tags"),t=await e.json();return l=t[0].name,c=Date.now(),l}catch(e){return console.error("Error fetching latest tag:",e),null}}()}};var h=n(5944);function u(e){let{type:t,location:n,top:l,children:c,code:u,suffix:p}=e;const[m,b]=(0,s.useState)("");(0,s.useEffect)((()=>{(async()=>{try{let e=await d.getLatestTag();p||(p=""),e||(e="23.04"),b("https://javadoc.io/doc/org.dwcj/dwcj-"+t+"/"+e+"/"+n+".html"+p)}catch(e){console.error("Error fetching latest release:",e)}})()}),[]);const x=o.iv`
    display: inline;

    ${l&&o.iv`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    margin-top: -33px;
    margin-bottom: 25px;
    `}
  `,g=o.iv`
  background-color: #0063CC;
  :hover{
    color: white;
  }
  `;return(0,h.BX)(h.HY,{children:["true"===l&&(0,h.tZ)("div",{css:x,children:(0,h.tZ)(i.Z,{title:"JavaDoc",arrow:!0,children:(0,h.tZ)(r.Z,{css:g,label:"Java API",component:"a",href:m,icon:(0,h.tZ)(a.Z,{}),clickable:!0,color:"primary",target:"_blank"})})}),"true"!==l&&!u&&(0,h.tZ)("div",{css:x,children:(0,h.tZ)("a",{href:m,target:"_blank",children:c})}),"true"!==l&&u&&(0,h.tZ)("div",{css:x,children:(0,h.tZ)("code",{children:(0,h.tZ)("a",{href:m,target:"_blank",children:c})})})]})}},1415:(e,t,n)=>{n.d(t,{Z:()=>i});n(7294);var s=n(8397),o=n(5893);function i(e){return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(s.Z,{...e})})}},5731:e=>{e.exports=JSON.parse('{"LN":"bbj-app-layout","zx":"bbj-button","Kx":"bbj-cedit","XZ":"bbj-checkbox","gN":"bbj-editbox","iR":"bbj-slider","wb":"bbj-list","Z":"bbj-list-button","Ct":"bbj-list-edit","ko":"bbj-progressbar","EU":"bbj-radio","dy":"bbj-drawer","Vq":"bbj-dialog","JO":"bbj-icon"}')}}]);