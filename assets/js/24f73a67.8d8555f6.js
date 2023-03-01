"use strict";(self.webpackChunkdwcj_documentation=self.webpackChunkdwcj_documentation||[]).push([[5927],{4137:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>F});var n=o(7294);function A(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function r(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){A(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function a(e,t){if(null==e)return{};var o,n,A=function(e,t){if(null==e)return{};var o,n,A={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(A[o]=e[o]);return A}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(A[o]=e[o])}return A}var l=n.createContext({}),p=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):r(r({},t),e)),o},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},U={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var o=e.components,A=e.mdxType,i=e.originalType,l=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),b=p(o),F=A,s=b["".concat(l,".").concat(F)]||b[F]||U[F]||i;return o?n.createElement(s,r(r({ref:t},c),{},{components:o})):n.createElement(s,r({ref:t},c))}));function F(e,t){var o=arguments,A=t&&t.mdxType;if("string"==typeof e||A){var i=o.length,r=new Array(i);r[0]=b;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:A,r[1]=a;for(var p=2;p<i;p++)r[p]=o[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,o)}b.displayName="MDXCreateElement"},658:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>U,frontMatter:()=>i,metadata:()=>a,toc:()=>p});var n=o(7462),A=(o(7294),o(4137));const i={sidebar_position:10},r="Checkbox",a={unversionedId:"controls/checkbox",id:"controls/checkbox",title:"Checkbox",description:"Text",source:"@site/docs/controls/checkbox.md",sourceDirName:"controls",slug:"/controls/checkbox",permalink:"/docs/controls/checkbox",draft:!1,tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"Button",permalink:"/docs/controls/button"},next:{title:"Combo Box",permalink:"/docs/controls/combo-box"}},l={},p=[{value:"Text",id:"text",level:3},{value:"Horizontal Text Position",id:"horizontal-text-position",level:3},{value:"Expanses",id:"expanses",level:3}],c={toc:p};function U(e){let{components:t,...i}=e;return(0,A.kt)("wrapper",(0,n.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,A.kt)("h1",{id:"checkbox"},"Checkbox"),(0,A.kt)("h3",{id:"text"},"Text"),(0,A.kt)("p",null,"Check boxes can utilize the ",(0,A.kt)("inlineCode",{parentName:"p"},"setText(String foo)")," method, which will positioned near the check box according to the built-in ",(0,A.kt)("inlineCode",{parentName:"p"},"HorizontalTextPosition")," property which is detailed below. "),(0,A.kt)("br",null),(0,A.kt)("h3",{id:"horizontal-text-position"},"Horizontal Text Position"),(0,A.kt)("p",null,"DWCJ checkboxes have built-in functionality to set text to be displayed either to the right or left of the box. By default, the text will be displayed to the right of the control. Show below\nare the two settings: ",(0,A.kt)("br",null)),(0,A.kt)("p",null,(0,A.kt)("img",{alt:"Checkbox horizontal text",src:o(9432).Z,width:"179",height:"106"})),(0,A.kt)("br",null),"Listed below are the current supported theme options for the checkbox control:",(0,A.kt)("br",null),(0,A.kt)("br",null),(0,A.kt)("table",null,(0,A.kt)("thead",{parentName:"table"},(0,A.kt)("tr",{parentName:"thead"},(0,A.kt)("th",{parentName:"tr",align:null},"Checkbox Horizontal Text Positions"))),(0,A.kt)("tbody",{parentName:"table"},(0,A.kt)("tr",{parentName:"tbody"},(0,A.kt)("td",{parentName:"tr",align:null},(0,A.kt)("ul",null,(0,A.kt)("li",null,(0,A.kt)("inlineCode",{parentName:"td"},"CheckBox.HorizontalTextPosition.LEFT")),(0,A.kt)("li",null,(0,A.kt)("inlineCode",{parentName:"td"},"CheckBox.HorizontalTextPosition.RIGHT"))))))),(0,A.kt)("p",null,"Positioning of the horizontal text is supported by use of a built-in enum class. To set the position, execute code similar to the following: ",(0,A.kt)("br",null),(0,A.kt)("br",null)),(0,A.kt)("pre",null,(0,A.kt)("code",{parentName:"pre",className:"language-java"},'import org.dwcj.controls.checkbox.CheckBox;\n\nCheckBox exampleCheckBox = new CheckBox();      //Creates a new checkbox\nexampleCheckBox.setText("This is demonstration text");      //Sets the text to be displayed by the checkbox\nexampleCheckBox.setHorizontalTextPosition(CheckBox.HorizontalTextPosition.RIGHT);      //Sets the text\' position to be to the right\n')),(0,A.kt)("br",null),(0,A.kt)("h3",{id:"expanses"},"Expanses"),(0,A.kt)("p",null,"There are five checkbox expanses that are supported in the DWCJ which allow for quick styling without using CSS.\nBelow are the expanses supported for the checkbox control: ",(0,A.kt)("br",null)),(0,A.kt)("p",null,(0,A.kt)("img",{alt:"Checkbox expanses",src:o(1891).Z,width:"875",height:"40"})),(0,A.kt)("br",null),(0,A.kt)("p",null,"Listed below are the current supported expanse options for the checkbox control:"),(0,A.kt)("table",null,(0,A.kt)("thead",{parentName:"table"},(0,A.kt)("tr",{parentName:"thead"},(0,A.kt)("th",{parentName:"tr",align:null},"Checkbox Expanses"))),(0,A.kt)("tbody",{parentName:"table"},(0,A.kt)("tr",{parentName:"tbody"},(0,A.kt)("td",{parentName:"tr",align:null},(0,A.kt)("ul",null,(0,A.kt)("li",null,(0,A.kt)("inlineCode",{parentName:"td"},"CheckBox.Expanse.XSMALL")),(0,A.kt)("li",null,(0,A.kt)("inlineCode",{parentName:"td"},"CheckBox.Expanse.SMALL")),(0,A.kt)("li",null,(0,A.kt)("inlineCode",{parentName:"td"},"CheckBox.Expanse.MEDIUM")),(0,A.kt)("li",null,(0,A.kt)("inlineCode",{parentName:"td"},"CheckBox.Expanse.LARGE")),(0,A.kt)("li",null,(0,A.kt)("inlineCode",{parentName:"td"},"CheckBox.Expanse.XLARGE"))))))),(0,A.kt)("br",null),"Expanses are supported by use of a built-in enum class. To apply an expanse, execute code similar to the following: ",(0,A.kt)("br",null),(0,A.kt)("br",null),(0,A.kt)("pre",null,(0,A.kt)("code",{parentName:"pre",className:"language-java"},'import org.dwcj.controls.checkbox.CheckBox;\n\nCheckBox exampleCheckBox = new CheckBox();      //Creates a new checkbox\nexampleCheckBox.setText("This is demonstration text");      //Sets the text to be displayed by the checkbox\nexampleCheckBox.setExpanse(CheckBox.Expanse.MEDIUM);     //Sets the checkbox\'s expanse to the medium size.\n')))}U.isMDXComponent=!0},1891:(e,t,o)=>{o.d(t,{Z:()=>n});const n="data:image/jpeg;base64,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"},9432:(e,t,o)=>{o.d(t,{Z:()=>n});const n="data:image/jpeg;base64,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"}}]);