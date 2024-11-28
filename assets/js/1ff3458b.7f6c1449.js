"use strict";(self.webpackChunkdwcj_documentation=self.webpackChunkdwcj_documentation||[]).push([[6128],{8810:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>c});const i=JSON.parse('{"id":"components/table/table_sorting","title":"Sorting","description":"Sorting enables users to organize data within a column in a specific order, enhancing data readability and analysis. This is useful when users need to quickly find the highest or lowest values in a particular column.","source":"@site/docs/components/table/table_sorting.md","sourceDirName":"components/table","slug":"/components/table/sorting","permalink":"/docs/components/table/sorting","draft":false,"unlisted":false,"editUrl":"https://github.com/webforj/webforj-docs/tree/website/docs/components/table/table_sorting.md","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"sidebar_position":3,"title":"Sorting","slug":"sorting"},"sidebar":"documentationSidebar","previous":{"title":"Selection","permalink":"/docs/components/table/selection"},"next":{"title":"Rendering","permalink":"/docs/components/table/rendering"}}');var o=t(4848),s=t(8453);const r={sidebar_position:3,title:"Sorting",slug:"sorting"},a=void 0,l={},c=[{value:"Sort direction",id:"sort-direction",level:2},{value:"Client vs. server-side sorting",id:"client-vs-server-side-sorting",level:2},{value:"Client sorting",id:"client-sorting",level:3},{value:"Server sorting",id:"server-sorting",level:3},{value:"Comparators",id:"comparators",level:4}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components},{ComponentDemo:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ComponentDemo",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:"Sorting enables users to organize data within a column in a specific order, enhancing data readability and analysis. This is useful when users need to quickly find the highest or lowest values in a particular column."}),"\n",(0,o.jsx)(t,{path:"https://demo.webforj.com/webapp/controlsamples/tablesorting?",javaE:"https://raw.githubusercontent.com/webforj/webforj-docs-samples/refs/heads/main/src/main/java/com/webforj/samples/views/table/TableSortingView.java",urls:["https://raw.githubusercontent.com/webforj/webforj-docs-samples/refs/heads/main/src/main/java/com/webforj/samples/views/table/MusicRecord.java","https://raw.githubusercontent.com/webforj/webforj-docs-samples/refs/heads/main/src/main/java/com/webforj/samples/views/table/Service.java"],height:"600px"}),"\n",(0,o.jsxs)(n.p,{children:["By default, a column will not be set as sortable. To change this, you can use the ",(0,o.jsx)(n.code,{children:"setSortable(boolean sortable)"})," method."]}),"\n",(0,o.jsx)(n.h2,{id:"sort-direction",children:"Sort direction"}),"\n",(0,o.jsx)(n.p,{children:"There are three available settings for the direction in which a column can be sorted:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"SortDirection.ASC"}),": Sorts the column in ascending order."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"SortDirection.DESC"}),": Sorts the column in descending order."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"SortDirection.NONE"}),": No sorting applied to the column."]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"When a column has sorting enabled, you will see a set of vertical arrow indicators appear at the top of the set column. These arrows allow the user to toggle between the different sorting directions."}),"\n",(0,o.jsxs)(n.p,{children:["When ascending order is selected, a ",(0,o.jsx)(n.code,{children:"^"})," will be displayed, whereas descending order will display a ",(0,o.jsx)(n.code,{children:"v"}),"."]}),"\n",(0,o.jsx)(n.h2,{id:"client-vs-server-side-sorting",children:"Client vs. server-side sorting"}),"\n",(0,o.jsxs)(n.p,{children:["Sorting of data plays can be broadly categorized into two main approaches: ",(0,o.jsx)(n.strong,{children:"Client Sorting"})," and ",(0,o.jsx)(n.strong,{children:"Server Sorting"}),"."]}),"\n",(0,o.jsx)(n.h3,{id:"client-sorting",children:"Client sorting"}),"\n",(0,o.jsx)(n.p,{children:"Client sorting involves arranging and displaying data directly within the user interface of the client application. It's the sorting users interact with when they click on column headers, influencing the visual representation of data on the screen."}),"\n",(0,o.jsxs)(n.p,{children:["The developer has no direct control over client-side sorting, but rather is determined by the column ",(0,o.jsx)(n.a,{href:"#",children:(0,o.jsx)(n.code,{children:"Type"})})," provided in Java. The following types are currently supported:"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"TEXT"}),"\n",(0,o.jsx)(n.li,{children:"NUMBER"}),"\n",(0,o.jsx)(n.li,{children:"BOOLEAN"}),"\n",(0,o.jsx)(n.li,{children:"DATE"}),"\n",(0,o.jsx)(n.li,{children:"DATETIME"}),"\n",(0,o.jsx)(n.li,{children:"TIME"}),"\n"]}),"\n",(0,o.jsx)(n.admonition,{type:"info",children:(0,o.jsx)(n.p,{children:"Client sorting does not work when only a portion of the data is available in the client."})}),"\n",(0,o.jsx)(n.h3,{id:"server-sorting",children:"Server sorting"}),"\n",(0,o.jsx)(n.p,{children:"In contrast to client-side sorting, server sorting entails arranging and organizing data on the server before transmitting it to the client. This approach is particularly beneficial when dealing with large datasets that might be impractical to transfer entirely to the client."}),"\n",(0,o.jsx)(n.p,{children:"Developers have more control over the logic of server sorting. This allows for the implementation of complex sorting algorithms and optimizations, making it suitable for scenarios with extensive data. This then ensures that the client receives pre-sorted data, minimizing the need for extensive client-side processing."}),"\n",(0,o.jsx)(n.admonition,{type:"info",children:(0,o.jsxs)(n.p,{children:["Server sorting is a performance-oriented strategy for dealing with datasets that exceed the capabilities of efficient client-side processing, and is the default method used by the ",(0,o.jsx)(n.code,{children:"Table"}),"."]})}),"\n",(0,o.jsx)(n.h4,{id:"comparators",children:"Comparators"}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"Column"})," component allows developers to use Java ",(0,o.jsx)(n.code,{children:"Comparators"})," for dynamic and custom sorting. A ",(0,o.jsx)(n.code,{children:"Comparator"})," is a mechanism used to order two objects of the same class, even if that class is user-defined. This functionality provides developers with the flexibility to customize how data is sorted, providing higher control over the default sorting behavior based on natural ordering."]}),"\n",(0,o.jsxs)(n.p,{children:["To leverage ",(0,o.jsx)(n.code,{children:"Comparator"})," sorting in a ",(0,o.jsx)(n.code,{children:"Column"}),", you can use the ",(0,o.jsx)(n.code,{children:"setComparator()"})," method. This method allows you to define a custom ",(0,o.jsx)(n.code,{children:"Comparator"})," function that dictates the sorting logic."]}),"\n",(0,o.jsx)(t,{path:"https://demo.webforj.com/webapp/controlsamples/tablecolumncomparator?",javaE:"https://raw.githubusercontent.com/webforj/webforj-docs-samples/refs/heads/main/src/main/java/com/webforj/samples/views/table/TableColumnComparatorView.java",urls:["https://raw.githubusercontent.com/webforj/webforj-docs-samples/refs/heads/main/src/main/java/com/webforj/samples/views/table/MusicRecord.java","https://raw.githubusercontent.com/webforj/webforj-docs-samples/refs/heads/main/src/main/java/com/webforj/samples/views/table/Service.java"],height:"600px"}),"\n",(0,o.jsxs)(n.p,{children:["In the above example, there is a specifies a custom comparator function which takes two elements (a and b), and defines the sorting order based on the parsed integer values of the ",(0,o.jsx)(n.code,{children:"Number"})," attribute."]}),"\n",(0,o.jsx)(n.p,{children:"Using Comparators for column sorting is particularly useful when handling non-numeric values. They are also useful for implementing complex sorting algorithms."}),"\n",(0,o.jsx)(n.admonition,{type:"info",children:(0,o.jsxs)(n.p,{children:["By default, the ",(0,o.jsx)(n.code,{children:"Table"})," uses server side sorting, and sorts non-primitive values using the ",(0,o.jsx)(n.code,{children:"toString()"})," method of Object, converting them to their string values and then sorting them."]})})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>a});var i=t(6540);const o={},s=i.createContext(o);function r(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);