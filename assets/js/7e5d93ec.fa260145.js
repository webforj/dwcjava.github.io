"use strict";(self.webpackChunkdwcj_documentation=self.webpackChunkdwcj_documentation||[]).push([[3972],{95952:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>l,metadata:()=>i,toc:()=>a});const i=JSON.parse('{"id":"components/lists/list-box","title":"ListBox","description":"The ListBox component is a user interface element designed to display a scrollable list of objects and allows users to select single or multiple items from the list. Users can also interact with the ListBox with the arrow keys.","source":"@site/docs/components/lists/list-box.md","sourceDirName":"components/lists","slug":"/components/lists/listbox","permalink":"/docs/components/lists/listbox","draft":false,"unlisted":false,"editUrl":"https://github.com/webforj/webforj-docs/tree/website/docs/components/lists/list-box.md","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"sidebar_position":3,"title":"ListBox","slug":"listbox"},"sidebar":"documentationSidebar","previous":{"title":"ComboBox","permalink":"/docs/components/lists/combobox"},"next":{"title":"Option Dialogs","permalink":"/docs/components/option-dialogs/"}}');var n=t(74848),o=t(28453);const l={sidebar_position:3,title:"ListBox",slug:"listbox"},r=void 0,c={},a=[{value:"Usages",id:"usages",level:2},{value:"Selection Options",id:"selection-options",level:2},{value:"Styling",id:"styling",level:2},{value:"Shadow Parts",id:"shadow-parts",level:3},{value:"CSS Properties",id:"css-properties",level:3},{value:"Reflected Attributes",id:"reflected-attributes",level:3},{value:"Dependencies",id:"dependencies",level:3},{value:"Best Practices",id:"best-practices",level:2}];function d(e){const s={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,o.R)(),...e.components},{ComponentDemo:i,DocChip:l,JavadocLink:r,ParentLink:c,TableBuilder:a}=s;return i||p("ComponentDemo",!0),l||p("DocChip",!0),r||p("JavadocLink",!0),c||p("ParentLink",!0),a||p("TableBuilder",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(l,{chip:"shadow"}),"\n",(0,n.jsx)(l,{chip:"name",label:"dwc-listbox"}),"\n",(0,n.jsx)(r,{type:"foundation",location:"com/webforj/component/list/ListBox",top:"true"}),"\n",(0,n.jsx)(c,{parent:"List"}),"\n",(0,n.jsxs)(s.p,{children:["The ",(0,n.jsx)(s.code,{children:"ListBox"})," component is a user interface element designed to display a scrollable list of objects and allows users to select single or multiple items from the list. Users can also interact with the ",(0,n.jsx)(s.code,{children:"ListBox"})," with the arrow keys."]}),"\n",(0,n.jsx)(s.h2,{id:"usages",children:"Usages"}),"\n",(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"User Role Assignment"}),": In applications with user access control, administrators can use a ",(0,n.jsx)(s.code,{children:"ListBox"})," to assign roles and permissions to users. Users are selected from a list, and the roles or permissions are assigned based on their selection. This ensures precise and controlled access to different features and data within the application."]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"Project Task Assignment"}),": In project management software, ",(0,n.jsx)(s.code,{children:"ListBox"})," components are useful for assigning tasks to team members. Users can select tasks from a list and assign them to different team members. This simplifies task delegation and ensures that responsibilities are clearly defined within the team."]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"Multi-Category Filtering"}),": In a search application, users often need to filter search results based on multiple criteria. A ",(0,n.jsx)(s.code,{children:"ListBox"})," can display various filter options, such as"]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(s.blockquote,{children:["\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"Product features"}),"\n",(0,n.jsx)(s.li,{children:"Price ranges"}),"\n",(0,n.jsx)(s.li,{children:"Brands."}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:"Users can select items from each filter category, allowing them to refine search results and find exactly what they're looking for."}),"\n",(0,n.jsxs)(s.ol,{start:"4",children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Content Categorization"}),": In content management systems, ",(0,n.jsx)(s.code,{children:"ListBox"})," components assist in categorizing articles, images, or files. Users can select one or more categories to associate with their content, making it easier to organize and search for content items in the system."]}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"selection-options",children:"Selection Options"}),"\n",(0,n.jsxs)(s.p,{children:["By default, the list box is configured to allow selection of a single item at a time. However, this can be easily configured with a built-in method which allows users to select multiple items ",(0,n.jsx)(s.em,{children:(0,n.jsxs)(s.strong,{children:["using the ",(0,n.jsx)(s.code,{children:"Shift"})," key"]})})," for contiguous entry selection and ",(0,n.jsx)(s.em,{children:(0,n.jsxs)(s.strong,{children:[(0,n.jsx)(s.code,{children:"Control"})," (Windows) or ",(0,n.jsx)(s.code,{children:"Command"})," (Mac) key"]})})," for separate, multiple item selection. Use the ",(0,n.jsx)(r,{type:"foundation",location:"com/webforj/component/list/ListBox",code:"true",suffix:"#setSelectionMode(org.dwcj.component.list.MultipleSelectableList.SelectionMode)",children:"setSelectionMode()"})," function to change this property. True will enable multiple selection, false disables it."]}),"\n",(0,n.jsxs)(s.p,{children:["Additionally, the arrow keys can be used to navigate the ",(0,n.jsx)(s.code,{children:"ListBox"}),", and typing a letter key while the ",(0,n.jsx)(s.code,{children:"ListBox"})," has focus will select the option that begins with that letter, or cycle through the options beginning with that letter should multiple options exist."]}),"\n",(0,n.jsx)(i,{path:"https://demo.webforj.com/webapp/controlsamples/listboxmultipleselection?",javaE:"https://raw.githubusercontent.com/webforj/webforj-docs-samples/refs/heads/main/src/main/java/com/webforj/samples/views/lists/listbox/ListboxMultipleSelectionView.java",javaC:"https://raw.githubusercontent.com/webforj/ControlSamples/main/src/main/code_snippets/listbox/MultipleSelection.txt",height:"250px"}),"\n",(0,n.jsx)(s.h2,{id:"styling",children:"Styling"}),"\n",(0,n.jsx)(s.h3,{id:"shadow-parts",children:"Shadow Parts"}),"\n",(0,n.jsxs)(s.p,{children:["These are the various parts of the ",(0,n.jsx)(s.a,{href:"../../glossary#shadow-dom",children:"shadow DOM"})," for the ",(0,n.jsx)(s.code,{children:"ListBox"})," component, which will be required when styling via CSS is desired."]}),"\n",(0,n.jsx)(a,{tag:t(57813).qF,table:"parts",exclusions:""}),"\n",(0,n.jsx)(s.h3,{id:"css-properties",children:"CSS Properties"}),"\n",(0,n.jsx)(s.p,{children:"These are the various CSS properties that are used in the component, with a short description of their use."}),"\n",(0,n.jsx)(a,{tag:t(57813).qF,exclusions:"",table:"properties"}),"\n",(0,n.jsx)(s.h3,{id:"reflected-attributes",children:"Reflected Attributes"}),"\n",(0,n.jsx)(s.p,{children:"The reflected attributes of a component will be shown as attributes in the rendered HTML element for the component in the DOM. This means that styling can be applied using these attributes."}),"\n",(0,n.jsx)(a,{tag:t(57813).qF,table:"reflects",exclusions:""}),"\n",(0,n.jsx)(s.h3,{id:"dependencies",children:"Dependencies"}),"\n",(0,n.jsx)(s.p,{children:"This component relies on the following components - see the related article for more detailed styling information:"}),"\n",(0,n.jsx)(a,{tag:"dwc-listbox",table:"dependencies"}),"\n",(0,n.jsx)(s.h2,{id:"best-practices",children:"Best Practices"}),"\n",(0,n.jsxs)(s.p,{children:["To ensure an optimal user experience when using the ",(0,n.jsx)(s.code,{children:"ChoiceBox"})," component, consider the following best practices:"]}),"\n",(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"Prioritize Information Hierarchy"}),": When using a ",(0,n.jsx)(s.code,{children:"ListBox"}),", ensure that the items are organized in a logical and hierarchical order. Place the most important and commonly used options at the top of the list. This makes it easier for users to find what they need without excessive scrolling."]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"Limit List Length"}),": Avoid overwhelming users with an excessively long ",(0,n.jsx)(s.code,{children:"ListBox"}),". If there are a large number of items to display, consider implementing pagination, search, or filtering options to help users locate items quickly. Alternatively, you can group items into categories to reduce list length."]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"Clear and Descriptive Labels"}),": Provide clear and descriptive labels for each item in the ",(0,n.jsx)(s.code,{children:"ListBox"}),". Users should be able to understand the purpose of each option without ambiguity. Use concise and meaningful item labels."]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"Multi-Selection Feedback"}),": If your ",(0,n.jsx)(s.code,{children:"ListBox"})," allows for multiple selections, provide visual or textual feedback indicating that multiple items can be selected from the list."]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"Default Selection"}),": Consider setting a default selection for the ",(0,n.jsx)(s.code,{children:"ListBox"}),", especially if one option is more commonly used than others. This can streamline the user experience by pre-selecting the most likely choice."]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:s}={...(0,o.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}function p(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},28453:(e,s,t)=>{t.d(s,{R:()=>l,x:()=>r});var i=t(96540);const n={},o=i.createContext(n);function l(e){const s=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function r(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:l(e.components),i.createElement(o.Provider,{value:s},e.children)}},57813:e=>{e.exports=JSON.parse('{"e7":"dwc-app-layout","$n":"dwc-button","Sc":"dwc-checkbox","D0":"dwc-field","Ap":"dwc-slider","qF":"dwc-listbox","tX":"dwc-choicebox","a3":"dwc-combobox","mD":"dwc-navigator","z2":"dwc-progressbar","a":"dwc-radio","TN":"dwc-tabbed-pane","_s":"dwc-drawer","lG":"dwc-dialog","In":"dwc-icon","O3":"dwc-splitter","az":"dwc-login","y$":"dwc-spinner","Rh":"dwc-loading","bJ":"dwc-loading","y8":"dwc-toast"}')}}]);