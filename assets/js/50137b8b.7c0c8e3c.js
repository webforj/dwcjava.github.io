"use strict";(self.webpackChunkdwcj_documentation=self.webpackChunkdwcj_documentation||[]).push([[418],{4137:(t,e,n)=>{n.d(e,{Zo:()=>f,kt:()=>c});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var s=r.createContext({}),p=function(t){var e=r.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},f=function(t){var e=p(t.components);return r.createElement(s.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},A=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,s=t.parentName,f=l(t,["components","mdxType","originalType","parentName"]),A=p(n),c=a,b=A["".concat(s,".").concat(c)]||A[c]||u[c]||o;return n?r.createElement(b,i(i({ref:e},f),{},{components:n})):r.createElement(b,i({ref:e},f))}));function c(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,i=new Array(o);i[0]=A;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l.mdxType="string"==typeof t?t:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}A.displayName="MDXCreateElement"},7865:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=n(7462),a=(n(7294),n(4137));const o={sidebar_position:60},i="List Box",l={unversionedId:"controls/list-box",id:"controls/list-box",title:"List Box",description:"Labeling",source:"@site/docs/controls/list-box.md",sourceDirName:"controls",slug:"/controls/list-box",permalink:"/docs/controls/list-box",draft:!1,tags:[],version:"current",sidebarPosition:60,frontMatter:{sidebar_position:60},sidebar:"tutorialSidebar",previous:{title:"Label",permalink:"/docs/controls/label"},next:{title:"Numeric Box",permalink:"/docs/controls/numeric-box"}},s={},p=[{value:"Labeling",id:"labeling",level:3},{value:"Selection Options",id:"selection-options",level:3},{value:"Expanses",id:"expanses",level:3}],f={toc:p};function u(t){let{components:e,...o}=t;return(0,a.kt)("wrapper",(0,r.Z)({},f,o,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"list-box"},"List Box"),(0,a.kt)("h3",{id:"labeling"},"Labeling"),(0,a.kt)("p",null,"Labels can be easily added above the component without the need to create a separate Label component above the control. "),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Listbox labeling",src:n(1066).Z,width:"164",height:"163"})),(0,a.kt)("br",null),(0,a.kt)("p",null,"Use the ",(0,a.kt)("inlineCode",{parentName:"p"},"setAttribute()")," function to create a label. The attribute to be changed is ",(0,a.kt)("inlineCode",{parentName:"p"},"label"),", and the value should be the desired label text.  ",(0,a.kt)("br",null),(0,a.kt)("br",null)),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'import org.dwcj.controls.listbox.ListBox;\n\nListBox exampleListBox = new ListBox();      //Creates a new ListBox\nexampleListBox.setAttribute("label", "Example list box label!");     //Gives the list box a label with the provided text\n')),(0,a.kt)("h3",{id:"selection-options"},"Selection Options"),(0,a.kt)("p",null,"By default, the list box is configured to allow selection of a single item at a time. However, this can be easily configured with a built-in method which allows users to select multiple\nitems using the ",(0,a.kt)("inlineCode",{parentName:"p"},"Shift")," for contiguous entry selection and ",(0,a.kt)("inlineCode",{parentName:"p"},"Control")," (Windows) or ",(0,a.kt)("inlineCode",{parentName:"p"},"Command")," (Mac) for separate, multiple item selection. "),(0,a.kt)("br",null),(0,a.kt)("p",null,"Use the ",(0,a.kt)("inlineCode",{parentName:"p"},"setMultipleSelection()")," function to change this property. True will enable multiple selection, false disables it. ",(0,a.kt)("br",null),(0,a.kt)("br",null)),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"import org.dwcj.controls.listbox.ListBox;\n\nListBox exampleListBox = new ListBox();      //Creates a new ListBox\nexampleListBox.setMultipleSelection(true);     //Sets the multiple selection property\n")),(0,a.kt)("br",null),(0,a.kt)("h3",{id:"expanses"},"Expanses"),(0,a.kt)("p",null,"Below are the various expanses supported for the list box control: ",(0,a.kt)("br",null)),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Listbox expanses",src:n(5948).Z,width:"852",height:"227"})),(0,a.kt)("br",null),(0,a.kt)("p",null,"There are five list box expanses that are supported in the DWCJ which allow for quick styling without using CSS."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"List Box Expanses"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("ul",null,(0,a.kt)("li",null,(0,a.kt)("inlineCode",{parentName:"td"},"ListBox.Expanse.XSMALL")),(0,a.kt)("li",null,(0,a.kt)("inlineCode",{parentName:"td"},"ListBox.Expanse.SMALL")),(0,a.kt)("li",null,(0,a.kt)("inlineCode",{parentName:"td"},"ListBox.Expanse.MEDIUM")),(0,a.kt)("li",null,(0,a.kt)("inlineCode",{parentName:"td"},"ListBox.Expanse.LARGE")),(0,a.kt)("li",null,(0,a.kt)("inlineCode",{parentName:"td"},"ListBox.Expanse.XLARGE"))))))),(0,a.kt)("br",null),"Expanses are supported by use of a built-in enum class. To apply an expanse, execute code similar to the following: ",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"import org.dwcj.controls.listbox.ListBox;\n\nListBox exampleListBox = new ListBox();      //Creates a new ListBox\nexampleListBox.setExpanse(ListBox.Expanse.MEDIUM);     //Sets the list box's expanse to the medium size.\n")))}u.isMDXComponent=!0},5948:(t,e,n)=>{n.d(e,{Z:()=>r});const r=n.p+"assets/images/listbox_expanses-60ef9b257f3241673c7b047da07a3584.jpg"},1066:(t,e,n)=>{n.d(e,{Z:()=>r});const r="data:image/jpeg;base64,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"}}]);