"use strict";(self.webpackChunkdwcj_documentation=self.webpackChunkdwcj_documentation||[]).push([[841],{85125:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>a,contentTitle:()=>c,default:()=>h,frontMatter:()=>l,metadata:()=>n,toc:()=>r});const n=JSON.parse('{"id":"components/table/table_selection","title":"Selection","description":"The Table component provides various selection capabilities. There are methods for selecting a single item, multiple items, or programmatically managing selections.","source":"@site/docs/components/table/table_selection.md","sourceDirName":"components/table","slug":"/components/table/selection","permalink":"/docs/components/table/selection","draft":false,"unlisted":false,"editUrl":"https://github.com/webforj/webforj-docs/tree/website/docs/components/table/table_selection.md","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_position":2,"title":"Selection","slug":"selection"},"sidebar":"documentationSidebar","previous":{"title":"Columns","permalink":"/docs/components/table/columns"},"next":{"title":"Sorting","permalink":"/docs/components/table/sorting"}}');var o=s(74848),i=s(28453);const l={sidebar_position:2,title:"Selection",slug:"selection"},c=void 0,a={},r=[{value:"Selection mode",id:"selection-mode",level:2},{value:"Selection event",id:"selection-event",level:2},{value:"Checkbox selection",id:"checkbox-selection",level:2},{value:"Programatic selection",id:"programatic-selection",level:2},{value:"Select by key",id:"select-by-key",level:3},{value:"Select by Index",id:"select-by-index",level:3},{value:"Selecting entire items",id:"selecting-entire-items",level:3}];function d(e){const t={admonition:"admonition",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components},{ComponentDemo:s}=t;return s||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ComponentDemo",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(t.p,{children:["The ",(0,o.jsx)(t.code,{children:"Table"})," component provides various selection capabilities. There are methods for selecting a single item, multiple items, or programmatically managing selections."]}),"\n",(0,o.jsx)(t.h2,{id:"selection-mode",children:"Selection mode"}),"\n",(0,o.jsx)(t.p,{children:"The selection mode in the table determines how items can be selected by the user. It provides options for configuring the behavior of item selection. The Table class provides a method to set the selection mode:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-java",children:"setSelectionMode(SelectionMode selectionMode)\n"})}),"\n",(0,o.jsx)(t.p,{children:"Available SelectionMode options include:"}),"\n",(0,o.jsxs)(t.blockquote,{children:["\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"SINGLE"})," - (single selection)"]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"MULTI"})," - (multiple selection)"]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"NONE"})," - (no selection)."]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(t.h2,{id:"selection-event",children:"Selection event"}),"\n",(0,o.jsxs)(t.p,{children:["The ",(0,o.jsx)(t.code,{children:"Table"})," component package emits several events related to row selection. These events capture  changes in the selection state of ",(0,o.jsx)(t.code,{children:"Table"})," rows. Below are the key selection events along with their descriptions:"]}),"\n",(0,o.jsxs)(t.blockquote,{children:["\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"TableItemSelectEvent"})," -  Emitted when a table item is selected."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"TableItemDeselectEvent"})," - Emitted when a table item is deselected."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"TableItemSelectionChange"})," - Emitted when the overall selection in the table changes, or when an additional selection is chosen."]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(t.admonition,{type:"info",children:(0,o.jsxs)(t.p,{children:["The ",(0,o.jsx)(t.code,{children:"TableItemSelectEvent"})," and ",(0,o.jsx)(t.code,{children:"TableItemDeselectEvent"})," are not triggered when multiple selection mode is active, and the selection is made via the header checkbox. In this case, the ",(0,o.jsx)(t.code,{children:"TableItemSelectionChange"})," should be used instead."]})}),"\n",(0,o.jsxs)(t.p,{children:["In the example below, a ",(0,o.jsx)(t.code,{children:"TableItemSelectEvent"})," event will be fired whenever a user selects a row. The event can be handled by adding a listener to the table using the ",(0,o.jsx)(t.code,{children:"onItemSelect()"})," method."]}),"\n",(0,o.jsx)(s,{path:"https://demo.webforj.com/webapp/controlsamples/tablesingleselection?",javaE:"https://raw.githubusercontent.com/webforj/webforj-docs-samples/refs/heads/main/src/main/java/com/webforj/samples/views/table/TableSingleSelectionView.java",urls:["https://raw.githubusercontent.com/webforj/webforj-docs-samples/refs/heads/main/src/main/java/com/webforj/samples/views/table/MusicRecord.java","https://raw.githubusercontent.com/webforj/webforj-docs-samples/refs/heads/main/src/main/java/com/webforj/samples/views/table/Service.java"],height:"600px"}),"\n",(0,o.jsx)(t.h2,{id:"checkbox-selection",children:"Checkbox selection"}),"\n",(0,o.jsxs)(t.p,{children:["Checkbox selection is enabled when the selection mode is ",(0,o.jsx)(t.code,{children:"MULTI"}),", and allows users to conveniently select one or more items using checkboxes associated with each row. This feature is particularly useful for scenarios where users need to perform bulk actions on selected items. The Table class provides methods to enable and customize checkbox selection."]}),"\n",(0,o.jsxs)(t.p,{children:["By using the ",(0,o.jsx)(t.code,{children:"setCheckboxSelection(boolean checkboxSelection)"})," method, checkboxes can be configured to be displayed next to each row, allowing users to select items. The program below shows multiple selection and checkbox selection enabled:"]}),"\n",(0,o.jsx)(s,{path:"https://demo.webforj.com/webapp/controlsamples/tablemultiselection?",javaE:"https://raw.githubusercontent.com/webforj/webforj-docs-samples/refs/heads/main/src/main/java/com/webforj/samples/views/table/TableMultiSelectionView.java",urls:["https://raw.githubusercontent.com/webforj/webforj-docs-samples/refs/heads/main/src/main/java/com/webforj/samples/views/table/MusicRecord.java","https://raw.githubusercontent.com/webforj/webforj-docs-samples/refs/heads/main/src/main/java/com/webforj/samples/views/table/Service.java"],height:"600px"}),"\n",(0,o.jsx)(t.h2,{id:"programatic-selection",children:"Programatic selection"}),"\n",(0,o.jsxs)(t.p,{children:["The ",(0,o.jsx)(t.code,{children:"Table"})," component provides programmatic selection methods, allowing you to manipulate selected items either by their keys or by the entire items."]}),"\n",(0,o.jsx)(t.h3,{id:"select-by-key",children:"Select by key"}),"\n",(0,o.jsxs)(t.p,{children:["The ",(0,o.jsx)(t.code,{children:"selectKey(Object... keys)"})," method enables you to programmatically select items using their keys. You can pass one or more keys to this method, and it will update the selection accordingly."]}),"\n",(0,o.jsx)(t.h3,{id:"select-by-index",children:"Select by Index"}),"\n",(0,o.jsxs)(t.p,{children:["Using the ",(0,o.jsx)(t.code,{children:"selectIndex(int... indices)"})," method allows you to pass one or more indices to the method and updates the selected items accordingly."]}),"\n",(0,o.jsx)(t.h3,{id:"selecting-entire-items",children:"Selecting entire items"}),"\n",(0,o.jsxs)(t.p,{children:["Finally, the ",(0,o.jsx)(t.code,{children:"select(T... items)"})," method allows you to programmatically select items by passing one or more items themselves to this method to update the selection accordingly."]})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},28453:(e,t,s)=>{s.d(t,{R:()=>l,x:()=>c});var n=s(96540);const o={},i=n.createContext(o);function l(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:l(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);