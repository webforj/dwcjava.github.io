"use strict";(self.webpackChunkdwcj_documentation=self.webpackChunkdwcj_documentation||[]).push([[3074],{1172:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>h,contentTitle:()=>d,default:()=>b,frontMatter:()=>c,metadata:()=>u,toc:()=>m});var n=t(5893),s=t(1151),r=t(6957),i=t(7796),a=t(3273),l=t(2665);const c={sidebar_position:2,title:"ComboBox",slug:"combobox"},d=void 0,u={id:"components/list-components/combo-box",title:"ComboBox",description:"The ComboBox component is a user interface element designed to present users with a list of options or choices, as well as a field for entering their own custom values. Users can select a single option from this list, typically by clicking the ComboBox, which triggers the display of a dropdown list containing available choices, or type in a custom value. Users can also interact with the ComboBox with the arrow keys. When a user makes a selection, the chosen option is then displayed in the ComboBox.",source:"@site/docs/components/list-components/combo-box.md",sourceDirName:"components/list-components",slug:"/components/list-components/combobox",permalink:"/docs/components/list-components/combobox",draft:!1,unlisted:!1,editUrl:"https://github.com/webforj/webforj-docs/tree/website/docs/components/list-components/combo-box.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"ComboBox",slug:"combobox"},sidebar:"documentationSidebar",previous:{title:"ChoiceBox",permalink:"/docs/components/list-components/choicebox"},next:{title:"ListBox",permalink:"/docs/components/list-components/listbox"}},h={},m=[{value:"Usages",id:"usages",level:2},{value:"Constructors",id:"constructors",level:2},{value:"Custom Value",id:"custom-value",level:2},{value:"Placeholder",id:"placeholder",level:2},{value:"Dropdown Type",id:"dropdown-type",level:2},{value:"Max Row Count",id:"max-row-count",level:2},{value:"Opening Dimensions",id:"opening-dimensions",level:2},{value:"Styling",id:"styling",level:2},{value:"Shadow Parts",id:"shadow-parts",level:3},{value:"Reflected Attributes",id:"reflected-attributes",level:3},{value:"Dependencies",id:"dependencies",level:3},{value:"Best Practices",id:"best-practices",level:2}];function p(e){const o={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(l.Z,{tooltipText:"This component will render with a shadow DOM, an API built into the browser that facilitates encapsulation.",label:"Shadow",component:"a",href:"../../glossary#shadow-dom",target:"_blank",clickable:!0,iconName:"shadow"}),"\n",(0,n.jsx)(l.Z,{tooltipText:"The name of the web component that will render in the DOM.",label:"dwc-combobox",clickable:!1,iconName:"code"}),"\n",(0,n.jsx)(a.Z,{type:"foundation",location:"com/webforj/component/list/ComboBox",top:"true"}),"\n",(0,n.jsxs)(o.p,{children:["The ",(0,n.jsx)(o.code,{children:"ComboBox"})," component is a user interface element designed to present users with a list of options or choices, as well as a field for entering their own custom values. Users can select a single option from this list, typically by clicking the ",(0,n.jsx)(o.code,{children:"ComboBox"}),", which triggers the display of a dropdown list containing available choices, or type in a custom value. Users can also interact with the ",(0,n.jsx)(o.code,{children:"ComboBox"})," with the arrow keys. When a user makes a selection, the chosen option is then displayed in the ",(0,n.jsx)(o.code,{children:"ComboBox"}),"."]}),"\n",(0,n.jsx)(o.h2,{id:"usages",children:"Usages"}),"\n",(0,n.jsx)(o.p,{children:"The ComboBox component is a versatile input element that combines the features of both a dropdown list and a text input field. It allows users to select items from a predefined list or enter custom values as needed. This section explores common usages of the ComboBox component in various scenarios:"}),"\n",(0,n.jsxs)(o.ol,{children:["\n",(0,n.jsxs)(o.li,{children:["\n",(0,n.jsxs)(o.p,{children:[(0,n.jsx)(o.strong,{children:"Product Search and Entry"}),": Use a ComboBox to implement a product search and entry feature. Users can either select a product from a predefined list or type in a custom product name. This is helpful for applications like e-commerce sites where products are vast and diverse."]}),"\n"]}),"\n",(0,n.jsxs)(o.li,{children:["\n",(0,n.jsxs)(o.p,{children:[(0,n.jsx)(o.strong,{children:"Tag Selection and Entry"}),": In applications involving content tagging, a ComboBox can serve as an excellent choice. Users can select from a list of existing tags or add custom tags by typing them. This is useful for organizing and categorizing content. Examples of such tags include:"]}),"\n",(0,n.jsxs)(o.blockquote,{children:["\n",(0,n.jsxs)(o.ul,{children:["\n",(0,n.jsx)(o.li,{children:'Project Labels: In a project management tool, users can select labels or tags (e.g., "Urgent," "In Progress," "Completed") to categorize tasks or projects, and they can create custom labels as needed.'}),"\n",(0,n.jsx)(o.li,{children:'Recipe Ingredients:  In a cooking or recipe app, users can select ingredients from a list (e.g., "Tomatoes," "Onions," "Chicken") or add their own ingredients for custom recipes.'}),"\n",(0,n.jsx)(o.li,{children:'Location Tags:  In a mapping or geotagging application, users can choose predefined location tags (e.g., "Beach," "City," "Park") or create custom tags to mark specific places on a map.'}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(o.li,{children:["\n",(0,n.jsxs)(o.p,{children:[(0,n.jsx)(o.strong,{children:"Data Entry with Suggested Values"}),": In data entry forms, a ComboBox can be used to speed up input by providing a list of suggested values based on user input. This helps users enter data accurately and efficiently."]}),"\n",(0,n.jsx)(o.admonition,{type:"tip",children:(0,n.jsxs)(o.p,{children:["The ",(0,n.jsx)(o.code,{children:"ComboBox"})," should be used when users are allowed to enter custom values. If only preset values are desired, use a ",(0,n.jsx)(o.a,{href:"/docs/components/list-components/choicebox",children:(0,n.jsx)(o.code,{children:"ChoiceBox"})})," instead."]})}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(o.h2,{id:"constructors",children:"Constructors"}),"\n",(0,n.jsxs)(o.ol,{children:["\n",(0,n.jsxs)(o.li,{children:[(0,n.jsx)(a.Z,{type:"foundation",location:"com/webforj/component/list/ComboBox",code:"true",suffix:"#<init>()",children:"ComboBox()"}),": Constructs a new ",(0,n.jsx)(o.code,{children:"ComboBox"})," without a label."]}),"\n",(0,n.jsxs)(o.li,{children:[(0,n.jsx)(a.Z,{type:"foundation",location:"com/webforj/component/list/ComboBox",code:"true",suffix:"#<init>(java.lang.String)",children:"ComboBox(String label)"}),": Constructs a new ",(0,n.jsx)(o.code,{children:"ComboBox"})," with the specified label."]}),"\n",(0,n.jsxs)(o.li,{children:[(0,n.jsx)(a.Z,{type:"foundation",location:"com/webforj/component/list/ComboBox",code:"true",suffix:"#<init>(java.lang.String,org.dwcj.component.event.ComponentEventListener)",children:"ComboBox(String label, ComponentEventListener< ListSelectEvent> selectListener)"}),": Constructs a new ",(0,n.jsx)(o.code,{children:"ComboBox"})," with the given label and a listener to handle item selection events."]}),"\n"]}),"\n",(0,n.jsx)(o.h2,{id:"custom-value",children:"Custom Value"}),"\n",(0,n.jsxs)(o.p,{children:["Changing the custom value property allows control over whether or not a user is able to change the value in the ",(0,n.jsx)(o.code,{children:"ComboBox"})," component's input field. If ",(0,n.jsx)(o.code,{children:"true"}),", which is the default, then a user can change the value. If set to ",(0,n.jsx)(o.code,{children:"false"}),", the user won't be able to change the value. This can be set using the ",(0,n.jsx)(a.Z,{type:"foundation",location:"com/webforj/component/list/ComboBox",code:"true",suffix:"#setAllowCustomValue(boolean)",children:"setAllowCustomValue()"})," method."]}),"\n",(0,n.jsx)(r.Z,{path:"https://demo.webforj.com/webapp/controlsamples?class=componentdemos.comboboxdemos.ComboBoxCustomValue",javaE:"https://raw.githubusercontent.com/webforj/ControlSamples/main/src/main/java/componentdemos/comboboxdemos/ComboBoxCustomValue.java",javaC:"https://raw.githubusercontent.com/webforj/ControlSamples/main/src/main/code_snippets/combobox/CustomValue.txt",height:"200px"}),"\n",(0,n.jsx)(o.h2,{id:"placeholder",children:"Placeholder"}),"\n",(0,n.jsxs)(o.p,{children:["A placeholder can be set for a ",(0,n.jsx)(o.code,{children:"ComboBox"})," which will display in the text field of the component when it is empty to prompt users for the desired entry in the field. This can be done using the ",(0,n.jsx)(a.Z,{type:"foundation",location:"com/webforj/component/list/ComboBox",code:"true",suffix:"#setPlaceholder(java.lang.String)",children:"setPlaceholder()"})," method."]}),"\n",(0,n.jsx)(r.Z,{path:"https://demo.webforj.com/webapp/controlsamples?class=componentdemos.comboboxdemos.ComboBoxPlaceholder",javaE:"https://raw.githubusercontent.com/webforj/ControlSamples/main/src/main/java/componentdemos/comboboxdemos/ComboBoxPlaceholder.java",javaC:"https://raw.githubusercontent.com/webforj/ControlSamples/main/src/main/code_snippets/combobox/Placeholder.txt",height:"200px"}),"\n",(0,n.jsx)(o.h2,{id:"dropdown-type",children:"Dropdown Type"}),"\n",(0,n.jsxs)(o.p,{children:["Using the ",(0,n.jsx)(a.Z,{type:"foundation",location:"com/webforj/component/list/DwcSelectDropdown",code:"true",suffix:"#setDropdownType(java.lang.String)",children:"setDropdownType()"})," method will assign a value to the ",(0,n.jsx)(o.code,{children:"type"})," attribute of a ",(0,n.jsx)(o.code,{children:"ComboBox"}),", and a corresponding value for the ",(0,n.jsx)(o.code,{children:"data-dropdown-for"})," attribute in the dropdown of the ",(0,n.jsx)(o.code,{children:"ComboBox"}),". This is helpful for styling, as the dropdown is taken out of its current position in the DOM and relocated to the end of the page body when opened."]}),"\n",(0,n.jsx)(o.p,{children:"This detachment creates a situation where directly targeting the\r\ndropdown using CSS or shadow part selectors from the parent component becomes challenging, unless you make use of the dropdown type attribute."}),"\n",(0,n.jsx)(o.p,{children:"In the demo below, the Dropdown type is set and used in the CSS file to select the dropdown and change the background color."}),"\n",(0,n.jsx)(r.Z,{path:"https://demo.webforj.com/webapp/controlsamples?class=componentdemos.comboboxdemos.ComboBoxDropdownType",javaE:"https://raw.githubusercontent.com/webforj/ControlSamples/main/src/main/java/componentdemos/comboboxdemos/ComboBoxDropdownType.java",javaC:"https://raw.githubusercontent.com/webforj/ControlSamples/main/src/main/code_snippets/combobox/DropdownType.txt",cssURL:"https://raw.githubusercontent.com/webforj/ControlSamples/main/src/main/resources/css/textcomboboxstyles/dropdown_styles.css",height:"250px"}),"\n",(0,n.jsx)(o.h2,{id:"max-row-count",children:"Max Row Count"}),"\n",(0,n.jsxs)(o.p,{children:["By default, the number of rows displayed in the dropdown of a ",(0,n.jsx)(o.code,{children:"ComboBox"})," will be increased to fit the content. However, using the ",(0,n.jsx)(a.Z,{type:"foundation",location:"com/webforj/component/list/DwcSelectDropdown",code:"true",suffix:"#setMaxRowCount(int)",children:"setMaxRowCount()"})," method allows for control over how many items are displayed."]}),"\n",(0,n.jsx)(o.admonition,{type:"caution",children:(0,n.jsx)(o.p,{children:"Using a number that is less than or equal to 0 will result in unsetting this property."})}),"\n",(0,n.jsx)(r.Z,{path:"https://demo.webforj.com/webapp/controlsamples?class=componentdemos.comboboxdemos.ComboBoxMaxRowDemo",javaE:"https://raw.githubusercontent.com/webforj/ControlSamples/main/src/main/java/componentdemos/comboboxdemos/ComboBoxMaxRowDemo.java",javaC:"https://raw.githubusercontent.com/webforj/ControlSamples/main/src/main/code_snippets/combobox/MaxRow.txt",height:"250px"}),"\n",(0,n.jsx)(o.h2,{id:"opening-dimensions",children:"Opening Dimensions"}),"\n",(0,n.jsxs)(o.p,{children:["The ",(0,n.jsx)(o.code,{children:"ComboBox"})," component has methods that allow manipulation of the dropdown dimensions. The ",(0,n.jsx)(o.strong,{children:"maximum height"})," and ",(0,n.jsx)(o.strong,{children:"minimum width"})," of the dropdown can be set using the ",(0,n.jsx)(a.Z,{type:"foundation",location:"com/webforj/component/list/DwcSelectDropdown",code:"true",suffix:"#setOpenHeight(int)",children:"setOpenHeight()"})," and ",(0,n.jsx)(a.Z,{type:"foundation",location:"com/webforj/component/list/DwcSelectDropdown",code:"true",suffix:"#setOpenWidth(int)",children:"setOpenWidth()"})," methods, respectively."]}),"\n",(0,n.jsx)(o.admonition,{type:"tip",children:(0,n.jsxs)(o.p,{children:["Passing a ",(0,n.jsx)(o.code,{children:"String"})," value to either of these methods will allow for ",(0,n.jsx)(o.a,{href:"https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Values_and_units",children:"any valid CSS unit"})," to be applied, such as pixels, viewport dimensions, or other valid rules. Passing an ",(0,n.jsx)(o.code,{children:"int"})," will set the value passed in pixels."]})}),"\n",(0,n.jsx)(o.h2,{id:"styling",children:"Styling"}),"\n",(0,n.jsx)(o.h3,{id:"shadow-parts",children:"Shadow Parts"}),"\n",(0,n.jsxs)(o.p,{children:["These are the various parts of the ",(0,n.jsx)(o.a,{href:"../../glossary#shadow-dom",children:"shadow DOM"})," for the ",(0,n.jsx)(o.code,{children:"ComboBox"})," component, which will be required when styling via CSS is desired."]}),"\n",(0,n.jsx)(i.Z,{tag:t(7099).Ct,table:"parts",exclusions:""}),"\n",(0,n.jsx)(o.h3,{id:"reflected-attributes",children:"Reflected Attributes"}),"\n",(0,n.jsx)(o.p,{children:"The reflected attributes of a component will be shown as attributes in the rendered HTML element for the component in the DOM. This means that styling can be applied using these attributes."}),"\n",(0,n.jsx)(i.Z,{tag:t(7099).Ct,table:"reflects",exclusions:""}),"\n",(0,n.jsx)(o.h3,{id:"dependencies",children:"Dependencies"}),"\n",(0,n.jsx)(o.p,{children:"This component relies on the following components - see the related article for more detailed styling information:"}),"\n",(0,n.jsx)(i.Z,{tag:"dwc-list-edit",table:"dependencies"}),"\n",(0,n.jsx)(o.h2,{id:"best-practices",children:"Best Practices"}),"\n",(0,n.jsxs)(o.p,{children:["To ensure an optimal user experience when using the ",(0,n.jsx)(o.code,{children:"ComboBox"})," component, consider the following best practices:"]}),"\n",(0,n.jsxs)(o.ol,{children:["\n",(0,n.jsxs)(o.li,{children:["\n",(0,n.jsxs)(o.p,{children:[(0,n.jsx)(o.strong,{children:"Preload Common Values"}),": If there are common or frequently used items, preload them in the ",(0,n.jsx)(o.code,{children:"ComboBox"})," list. This speeds up selection for commonly chosen items and encourages consistency."]}),"\n"]}),"\n",(0,n.jsxs)(o.li,{children:["\n",(0,n.jsxs)(o.p,{children:[(0,n.jsx)(o.strong,{children:"User-Friendly Labels"}),": Ensure that the displayed labels for each option are user-friendly and self-explanatory. Make sure users can easily understand the purpose of each choice."]}),"\n"]}),"\n",(0,n.jsxs)(o.li,{children:["\n",(0,n.jsxs)(o.p,{children:[(0,n.jsx)(o.strong,{children:"Validation"}),": Implement input validation to handle custom entries. Check for data accuracy and consistency. You may want to suggest corrections or confirmations for ambiguous entries."]}),"\n"]}),"\n",(0,n.jsxs)(o.li,{children:["\n",(0,n.jsxs)(o.p,{children:[(0,n.jsx)(o.strong,{children:"Default Selection"}),": Set a default selection, especially if there is a common or recommended choice. This enhances the user experience by reducing the need for extra clicks."]}),"\n"]}),"\n",(0,n.jsxs)(o.li,{children:["\n",(0,n.jsxs)(o.p,{children:[(0,n.jsx)(o.strong,{children:"ComboBox vs. Other List Components"}),": A ",(0,n.jsx)(o.code,{children:"ComboBox"})," should be used over other List components in the following situations:"]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(o.blockquote,{children:["\n",(0,n.jsxs)(o.ul,{children:["\n",(0,n.jsx)(o.li,{children:"Multiple Selection is not needed or required, and all items do not need to be displayed at once."}),"\n",(0,n.jsxs)(o.li,{children:["A selection of predefined choices, ",(0,n.jsx)(o.em,{children:(0,n.jsx)(o.strong,{children:"as well as custom entry"})})," is desired, allowing users to enter custom or data or select predetermined, often commonly used items."]}),"\n"]}),"\n"]})]})}function b(e={}){const{wrapper:o}={...(0,s.a)(),...e.components};return o?(0,n.jsx)(o,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},6031:(e,o,t)=>{var n=t(4836);o.Z=void 0;var s=n(t(4938)),r=t(5893),i=(0,s.default)((0,r.jsx)("path",{d:"m19 1-5 5v11l5-4.5V1zM1 6v14.65c0 .25.25.5.5.5.1 0 .15-.05.25-.05C3.1 20.45 5.05 20 6.5 20c1.95 0 4.05.4 5.5 1.5V6c-1.45-1.1-3.55-1.5-5.5-1.5S2.45 4.9 1 6zm22 13.5V6c-.6-.45-1.25-.75-2-1v13.5c-1.1-.35-2.3-.5-3.5-.5-1.7 0-4.15.65-5.5 1.5v2c1.35-.85 3.8-1.5 5.5-1.5 1.65 0 3.35.3 4.75 1.05.1.05.15.05.25.05.25 0 .5-.25.5-.5v-1.1z"}),"AutoStories");o.Z=i},2610:(e,o,t)=>{var n=t(4836);o.Z=void 0;var s=n(t(4938)),r=t(5893),i=(0,s.default)((0,r.jsx)("path",{d:"M11 18c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zm-2-8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 4c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"DragIndicator");o.Z=i},5162:(e,o,t)=>{t.d(o,{Z:()=>i});t(7294);var n=t(6010);const s={tabItem:"tabItem_Ymn6"};var r=t(5893);function i(e){let{children:o,hidden:t,className:i}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,n.Z)(s.tabItem,i),hidden:t,children:o})}},4866:(e,o,t)=>{t.d(o,{Z:()=>j});var n=t(7294),s=t(6010),r=t(2466),i=t(6550),a=t(469),l=t(1980),c=t(7392),d=t(12);function u(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:o}=e;return!!o&&"object"==typeof o&&"value"in o}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:o,children:t}=e;return(0,n.useMemo)((()=>{const e=o??function(e){return u(e).map((e=>{let{props:{value:o,label:t,attributes:n,default:s}}=e;return{value:o,label:t,attributes:n,default:s}}))}(t);return function(e){const o=(0,c.l)(e,((e,o)=>e.value===o.value));if(o.length>0)throw new Error(`Docusaurus error: Duplicate values "${o.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[o,t])}function m(e){let{value:o,tabValues:t}=e;return t.some((e=>e.value===o))}function p(e){let{queryString:o=!1,groupId:t}=e;const s=(0,i.k6)(),r=function(e){let{queryString:o=!1,groupId:t}=e;if("string"==typeof o)return o;if(!1===o)return null;if(!0===o&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:o,groupId:t});return[(0,l._X)(r),(0,n.useCallback)((e=>{if(!r)return;const o=new URLSearchParams(s.location.search);o.set(r,e),s.replace({...s.location,search:o.toString()})}),[r,s])]}function b(e){const{defaultValue:o,queryString:t=!1,groupId:s}=e,r=h(e),[i,l]=(0,n.useState)((()=>function(e){let{defaultValue:o,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(o){if(!m({value:o,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${o}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return o}const n=t.find((e=>e.default))??t[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:o,tabValues:r}))),[c,u]=p({queryString:t,groupId:s}),[b,x]=function(e){let{groupId:o}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(o),[s,r]=(0,d.Nk)(t);return[s,(0,n.useCallback)((e=>{t&&r.set(e)}),[t,r])]}({groupId:s}),g=(()=>{const e=c??b;return m({value:e,tabValues:r})?e:null})();(0,a.Z)((()=>{g&&l(g)}),[g]);return{selectedValue:i,selectValue:(0,n.useCallback)((e=>{if(!m({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),x(e)}),[u,x,r]),tabValues:r}}var x=t(2389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=t(5893);function w(e){let{className:o,block:t,selectedValue:n,selectValue:i,tabValues:a}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,r.o5)(),d=e=>{const o=e.currentTarget,t=l.indexOf(o),s=a[t].value;s!==n&&(c(o),i(s))},u=e=>{let o=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;o=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;o=l[t]??l[l.length-1];break}}o?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":t},o),children:a.map((e=>{let{value:o,label:t,attributes:r}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:n===o?0:-1,"aria-selected":n===o,ref:e=>l.push(e),onKeyDown:u,onClick:d,...r,className:(0,s.Z)("tabs__item",g.tabItem,r?.className,{"tabs__item--active":n===o}),children:t??o},o)}))})}function v(e){let{lazy:o,children:t,selectedValue:s}=e;const r=(Array.isArray(t)?t:[t]).filter(Boolean);if(o){const e=r.find((e=>e.props.value===s));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:r.map(((e,o)=>(0,n.cloneElement)(e,{key:o,hidden:e.props.value!==s})))})}function A(e){const o=b(e);return(0,f.jsxs)("div",{className:(0,s.Z)("tabs-container",g.tabList),children:[(0,f.jsx)(w,{...e,...o}),(0,f.jsx)(v,{...e,...o})]})}function j(e){const o=(0,x.Z)();return(0,f.jsx)(A,{...e,children:u(e.children)},String(o))}},6957:(e,o,t)=>{t.d(o,{Z:()=>w});var n=t(7294),s=t(917),r=t(5697),i=t.n(r),a=t(4866),l=t(5162),c=t(4673),d=t(1750);const u=t.p+"assets/images/expand-ba3f00f73da43d91e5b17663c4a7d108.png",h="data:image/png;base64,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",m="data:image/png;base64,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";var p=t(2949),b=t(2610),x=t(5944);function g(e){let{collapse:o,setCollapse:t}=e;g.propTypes={collapse:i().bool.isRequired,setCollapse:i().func.isRequired};const n=s.iv`
    display: flex;
    justify-content: end;
    align-items: flex-end;
    background-color: transparent;
    margin-bottom: -10px;
  `,r=s.iv`
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
  `;return(0,x.tZ)("div",{css:n,children:(0,x.tZ)("button",{css:r,onClick:()=>{t(!o)},children:o?(0,x.tZ)("img",{alt:"collapse_button",css:a,src:u,className:"icon-tabler-arrow-bar-up"}):(0,x.tZ)("img",{css:a,src:h,className:"icon-tabler-arrow-bar-down"})})})}function f(e){let{url:o}=e;const t=s.iv`
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
  `,n=s.iv`
    filter: invert(var(--inversion-percentage));
    ::before {
      mix-blend-mode: lighten;
      opacity: 0.5;
    }
  `;return(0,x.tZ)("button",{css:t,onClick:()=>{window.open(o,"_blank")},children:(0,x.tZ)("img",{css:n,src:m})})}function w(e){let{path:o,javaC:t,javaE:r,urls:u,cssURL:h,javaHighlight:m,height:v,frame:A,tabs:j}=e;w.propTypes={path:i().string.isRequired,javaC:i().string,javaE:i().string,urls:i().arrayOf(i().string),cssURL:i().string,javaHighlight:i().string,height:i().string,frame:i().string,tabs:i().arrayOf(i().string)};const[y,C]=(0,n.useState)(""),[B,D]=(0,n.useState)(""),[S,Z]=(0,n.useState)({}),[k,E]=(0,n.useState)(""),[L,T]=(0,n.useState)(!(!t||!r)),[M,O]=(0,n.useState)(!1),[V,N]=(0,n.useState)({}),[z,H]=(0,n.useState)(!1),[X,P]=(0,n.useState)(0),[F,I]=(0,n.useState)(0),[G,J]=(0,n.useState)(25),[Y,R]=(0,n.useState)(25),[U,q]=(0,n.useState)(0),[W,K]=(0,n.useState)(!1),Q=(0,n.useRef)(null),_=(0,n.useRef)(null);function $(e,o,t){return(0,x.tZ)(d.Z,{css:o,className:"codeDemoBlock",language:"java",showLineNumbers:!0,metastring:t,children:e.code})}(0,n.useEffect)((()=>{r&&fetch(r).then((e=>e.text())).then((e=>{D(e);const o=new URL(r).pathname.split("/"),t=o[o.length-1];N((e=>({...e,javaFile:t})))})),t&&fetch(t).then((e=>e.text())).then((e=>{C(e)})),h&&fetch(h).then((e=>e.text())).then((e=>{E(e);const o=new URL(h).pathname.split("/"),t=o[o.length-1];N((e=>({...e,cssFile:t})))})),u&&u.forEach((function(e){const o=new URL(e),t=o.pathname.split("/"),n=t[t.length-1];fetch(e).then((e=>e.text())).then((e=>{!function(e,o){Z((t=>({...t,[e]:{fileName:e,code:o}})))}(n,e)}))})),q(Q.current?Q.current.offsetWidth:0)}),[]);const ee=()=>{H(!1)},oe=e=>{if(z){const o=e.clientX-X;F+o>U/3&&(Q.current.style.width=`${F+o}px`,_.current.style.right=(G-o<25?25:G-o)+"px",R(G-o<25?25:G-o))}},te=s.iv`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-bottom: 16px;
    background-color: var(--code-display-color-background);
  `,ne=s.iv`
    width: 100%;
    border: 1px solid var(--ifm-toc-border-color);
    border-right: none;
    background-color: transparent;
    display: flex;
    position: relative;
  `,se=s.iv`
    min-height: 100px;
    height: 100%;
    width: 100%;
    height: ${v||"100%"};
    pointer-events: ${z?"none":"auto"};
  `,re=s.iv`
    display: flex;
    justify-content: flex-end;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
    ${M&&"opacity: 1;"};
    margin: 10px 0 0 0;
    position: absolute;
    right: 25px;
  `,ie=s.iv`
    display: flex;
    align-items: center;
    cursor: ew-resize;
    border-left: 1px solid var(--ifm-toc-border-color);
    border-right: 1px solid var(--ifm-toc-border-color);
    background-color: var(--ifm-background-color);
  `,ae=s.iv`
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
  `,le=s.iv`
    li[aria-selected="true"] {
      border-color: var(--ifm-color-primary);
    }

    .tabs__item {
      padding: 5px 20px -2px 20px;
      border-radius: 0px;
    }
  `,ce=s.iv`
    border-radius: 0px;
    box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 4px 0px inset;
  `;return(0,x.BX)("div",{css:te,onMouseUp:ee,onMouseLeave:ee,onMouseMove:oe,children:["hidden"!=A?(0,x.BX)("div",{onMouseEnter:()=>{O(!0)},onMouseLeave:()=>O(!1),css:ne,children:[(0,x.tZ)("iframe",{onMouseUp:ee,loading:"lazy",src:o+"&__theme__="+(0,p.I)().colorMode,css:se,ref:Q,onMouseMove:oe}),(0,x.tZ)("div",{css:re,ref:_,children:(0,x.tZ)(f,{url:o})}),(0,x.tZ)("div",{css:ie,onMouseDown:e=>{e.preventDefault(),H(!0),P(e.clientX),I(Q.current?Q.current.offsetWidth:0),J(Y)},children:(0,x.tZ)(b.Z,{})})]}):null,(0,x.BX)(c.Z,{css:ae,summary:(0,x.tZ)("summary",{onClick:()=>K(!W),children:W?"Hide Code":"Show Code"}),children:[t&&r?(0,x.tZ)(g,{collapse:L,setCollapse:T}):null,h?(0,x.BX)(a.Z,{css:le,children:[(0,x.tZ)(l.Z,{value:j?j[0]:"Java",label:j?j[0]:V.javaFile,default:!0,children:(0,x.tZ)(d.Z,{css:ce,className:"codeDemoBlock",language:"java",showLineNumbers:!0,metastring:m,children:L?y:B})}),Object.keys(S).map(((e,o)=>(0,x.tZ)(l.Z,{value:e,label:e,children:$(S[e],ce,m)},"tab"+o))),(0,x.tZ)(l.Z,{value:j?j[1]:"CSS",label:j?j[1]:V.cssFile,children:(0,x.tZ)(d.Z,{css:ce,className:"codeDemoBlock",language:"css",showLineNumbers:!0,children:k})})]}):(0,x.BX)(a.Z,{css:le,children:[(0,x.tZ)(l.Z,{value:j?j[0]:"Java",label:j?j[0]:V.javaFile,default:!0,children:(0,x.tZ)(d.Z,{css:ce,className:"codeDemoBlock",language:"java",showLineNumbers:!0,metastring:m,children:L?y:B})}),Object.keys(S).map(((e,o)=>(0,x.tZ)(l.Z,{value:e,label:e,children:$(S[e],ce,m)},"tab"+o)))]})]})]})}},3273:(e,o,t)=>{t.d(o,{Z:()=>c});var n=t(7294),s=t(917),r=t(8230),i=t(4387),a=t(6031);var l=t(5944);function c(e){let{type:o,location:t,top:c,children:d,code:u,suffix:h}=e;const[m,p]=(0,n.useState)("");(0,n.useEffect)((()=>{h||(h=""),p("https://javadoc.io/doc/com.webforj/webforj-"+o+"/latest/"+t+".html"+h)}),[]);const b=s.iv`
    display: inline;

    ${c&&s.iv`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    margin-top: -33px;
    margin-bottom: 25px;
    `}
  `,x=s.iv`
  background-color: #0063CC;
  padding: 0 0 0 5px;
  :hover{
    color: white;
  }
  `;return(0,l.BX)(l.HY,{children:["true"===c&&(0,l.tZ)("div",{css:b,children:(0,l.tZ)(r.Z,{title:"JavaDoc",arrow:!0,children:(0,l.tZ)(i.Z,{css:x,label:"Java API",component:"a",href:m,icon:(0,l.tZ)(a.Z,{}),clickable:!0,color:"primary",target:"_blank"})})}),"true"!==c&&!u&&(0,l.tZ)("div",{css:b,children:(0,l.tZ)("a",{href:m,target:"_blank",children:d})}),"true"!==c&&u&&(0,l.tZ)("div",{css:b,children:(0,l.tZ)("code",{children:(0,l.tZ)("a",{href:m,target:"_blank",children:d})})})]})}},1415:(e,o,t)=>{t.d(o,{Z:()=>r});t(7294);var n=t(8397),s=t(5893);function r(e){return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(n.Z,{...e})})}},7099:e=>{e.exports=JSON.parse('{"LN":"dwc-app-layout","zx":"dwc-button","XZ":"dwc-checkbox","gN":"dwc-field","iR":"dwc-slider","wb":"dwc-listbox","Z":"dwc-choicebox","Ct":"dwc-combobox","C3":"dwc-navigator","ko":"dwc-progressbar","EU":"dwc-radio","ib":"dwc-tabbed-pane","dy":"dwc-drawer","Vq":"dwc-dialog","JO":"dwc-icon","qX":"dwc-splitter"}')}}]);