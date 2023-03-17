"use strict";(self.webpackChunkdwcj_documentation=self.webpackChunkdwcj_documentation||[]).push([[7701],{5162:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(7294),o=a(6010);const l="tabItem_Ymn6";function i(e){let{children:t,hidden:a,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,o.Z)(l,i),hidden:a},t)}},4866:(e,t,a)=>{a.d(t,{Z:()=>C});var n=a(7462),o=a(7294),l=a(6010),i=a(2466),r=a(6775),s=a(1980),u=a(7392),d=a(12);function c(e){return function(e){return o.Children.map(e,(e=>{if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:o}}=e;return{value:t,label:a,attributes:n,default:o}}))}function h(e){const{values:t,children:a}=e;return(0,o.useMemo)((()=>{const e=t??c(a);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function p(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:a}=e;const n=(0,r.k6)(),l=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s._X)(l),(0,o.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(n.location.search);t.set(l,e),n.replace({...n.location,search:t.toString()})}),[l,n])]}function g(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,l=h(e),[i,r]=(0,o.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:l}))),[s,u]=m({queryString:a,groupId:n}),[c,g]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,l]=(0,d.Nk)(a);return[n,(0,o.useCallback)((e=>{a&&l.set(e)}),[a,l])]}({groupId:n}),b=(()=>{const e=s??c;return p({value:e,tabValues:l})?e:null})();(0,o.useLayoutEffect)((()=>{b&&r(b)}),[b]);return{selectedValue:i,selectValue:(0,o.useCallback)((e=>{if(!p({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);r(e),u(e),g(e)}),[u,g,l]),tabValues:l}}var b=a(2389);const f="tabList__CuJ",v="tabItem_LNqP";function k(e){let{className:t,block:a,selectedValue:r,selectValue:s,tabValues:u}=e;const d=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.o5)(),h=e=>{const t=e.currentTarget,a=d.indexOf(t),n=u[a].value;n!==r&&(c(t),s(n))},p=e=>{var t;let a=null;switch(e.key){case"Enter":h(e);break;case"ArrowRight":{const t=d.indexOf(e.currentTarget)+1;a=d[t]??d[0];break}case"ArrowLeft":{const t=d.indexOf(e.currentTarget)-1;a=d[t]??d[d.length-1];break}}null==(t=a)||t.focus()};return o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},t)},u.map((e=>{let{value:t,label:a,attributes:i}=e;return o.createElement("li",(0,n.Z)({role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,key:t,ref:e=>d.push(e),onKeyDown:p,onClick:h},i,{className:(0,l.Z)("tabs__item",v,null==i?void 0:i.className,{"tabs__item--active":r===t})}),a??t)})))}function w(e){let{lazy:t,children:a,selectedValue:n}=e;if(a=Array.isArray(a)?a:[a],t){const e=a.find((e=>e.props.value===n));return e?(0,o.cloneElement)(e,{className:"margin-top--md"}):null}return o.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function y(e){const t=g(e);return o.createElement("div",{className:(0,l.Z)("tabs-container",f)},o.createElement(k,(0,n.Z)({},e,t)),o.createElement(w,(0,n.Z)({},e,t)))}function C(e){const t=(0,b.Z)();return o.createElement(y,(0,n.Z)({key:String(t)},e))}},9469:(e,t,a)=>{a.d(t,{Z:()=>u});var n=a(7294),o=a(2863),l=a(4866),i=a(5162),r=a(4673),s=a(8488);function u(e){let{path:t,javaC:a,javaE:u,cssURL:d,javaHighlight:c,height:h}=e;const[p,m]=(0,n.useState)(""),[g,b]=(0,n.useState)(""),[f,v]=(0,n.useState)(""),[k,w]=(0,n.useState)(!0),y=o.iv`
		display: flex;
    flex-direction: column;
    padding: 10px 15px 0 15px;
    background-color: var(--code-display-color);
		width: 100%;
    margin-bottom: 16px;
    
    `,C=o.iv`
    min-height: 100px;
    height: 100%;
    height: ${h};
  `,x=o.iv`
    border: none;
    box-shadow: none;
    background-color: var(--code-display-color);
    margin-bottom: 0px;
    padding: 10px;

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

  `;return u&&fetch(u).then((e=>e.text())).then((e=>{b(e)})),a&&fetch(a).then((e=>e.text())).then((e=>{m(e)})),d&&fetch(d).then((e=>e.text())).then((e=>{v(e)})),(0,o.tZ)("div",{css:y},(0,o.tZ)("iframe",{loading:"lazy",src:t,css:C}),(0,o.tZ)(r.Z,{css:x,summary:(0,o.tZ)("summary",null,"Show Code")},d?(0,o.tZ)(l.Z,null,(0,o.tZ)(i.Z,{value:"Java",label:"Java",default:!0},(0,o.tZ)(s.Z,{className:"codeDemoBlock",language:"java",showLineNumbers:!0,metastring:c},k?g:p)),(0,o.tZ)(i.Z,{value:"CSS",label:"CSS"},(0,o.tZ)(s.Z,{className:"codeDemoBlock",language:"css",showLineNumbers:!0},f))):(0,o.tZ)(l.Z,null,(0,o.tZ)(i.Z,{value:"Java",label:"Java",default:!0},(0,o.tZ)(s.Z,{className:"codeDemoBlock",language:"java",showLineNumbers:!0,metastring:c},k?g:p)))))}},1415:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(7294),o=a(8397);function l(e){return n.createElement(n.Fragment,null,n.createElement(o.Z,e))}},1694:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var n=a(7462),o=(a(7294),a(3905)),l=a(9469);const i={sidebar_position:25,title:"Dialog"},r=void 0,s={unversionedId:"controls/dialog",id:"controls/dialog",title:"Dialog",description:"API:&nbsp;",source:"@site/docs/controls/dialog.md",sourceDirName:"controls",slug:"/controls/dialog",permalink:"/docs/controls/dialog",draft:!1,tags:[],version:"current",sidebarPosition:25,frontMatter:{sidebar_position:25,title:"Dialog"},sidebar:"tutorialSidebar",previous:{title:"Combo Box",permalink:"/docs/controls/combo-box"},next:{title:"Label",permalink:"/docs/controls/label"}},u={},d=[{value:"Backdrop and Blur",id:"backdrop-and-blur",level:3},{value:"Closing the Dialog",id:"closing-the-dialog",level:3},{value:"Auto-Focus",id:"auto-focus",level:3},{value:"Draggable",id:"draggable",level:2},{value:"Snap to Edge",id:"snap-to-edge",level:3},{value:"Positioning",id:"positioning",level:2},{value:"Vertical Alignment",id:"vertical-alignment",level:3},{value:"Full Screen and Breakpoints",id:"full-screen-and-breakpoints",level:3}],c={toc:d};function h(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("div",{style:{width:"100%",display:"flex",justifyContent:"flex-end"}},(0,o.kt)("p",{style:{color:"gray"}},"API:\xa0"),(0,o.kt)("b",null,(0,o.kt)("a",{href:"https://javadoc.io/static/org.dwcj/dwcj-engine/0.15.0/org/dwcj/controls/dialog/Dialog.html",style:{justifySelf:"flex-end"}}," Java "))),(0,o.kt)("p",null,"The DWCJ's dialog component is built to allow a developer to quickly and easily display a dialog on their application, for instances such as a login menu or information box."),(0,o.kt)("p",null,"The component is built with three sections, each of which are ",(0,o.kt)("inlineCode",{parentName:"p"},"Div")," components: the header, the content, and the footer."),(0,o.kt)("p",null,"To show the dialog, call the ",(0,o.kt)("inlineCode",{parentName:"p"},"show()")," method on the object itself. This "),(0,o.kt)(l.Z,{path:"/demos/dialog-demos/sections.html",showCSS:"true",javaE:"https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/java/control_demos/listboxdemos/ListboxLabel.java",javaHighlight:"{47-50}",height:"225px",mdxType:"ComponentDemo"}),(0,o.kt)("h3",{id:"backdrop-and-blur"},"Backdrop and Blur"),(0,o.kt)("p",null,"By enabling the backdrop attribute of the DWCJ's dialog component, a backdrop will be displayed behind the dialog. Additionally, when enabled, the dialog's blurred attribute will blur the backdrop of the dialog."),(0,o.kt)(l.Z,{path:"/demos/dialog-demos/backdrop_blur.html",showCSS:"true",javaE:"https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/java/control_demos/listboxdemos/ListboxLabel.java",javaHighlight:"{47-50}",height:"225px",mdxType:"ComponentDemo"}),(0,o.kt)("h3",{id:"closing-the-dialog"},"Closing the Dialog"),(0,o.kt)("p",null,"The dialog supports multiple cancellation methods for closure of the control: hitting the ",(0,o.kt)("inlineCode",{parentName:"p"},"ESC")," key, clicking outside of the dialog, or using the ",(0,o.kt)("inlineCode",{parentName:"p"},"hide()")," method. The first two properties are customizable via their respective methods:\n",(0,o.kt)("inlineCode",{parentName:"p"},"setCancelOnEscKey()")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"setCancelOnOutsideClick()"),". The ",(0,o.kt)("inlineCode",{parentName:"p"},"hide()")," method allows for the dialog to be closed programmatically, such as by clicking a button on the dialog, for example after saving data. A method to quickly enable or disable users' ability to close the dialog, ",(0,o.kt)("inlineCode",{parentName:"p"},"setClosable()")," will prevent or allow both escape and click closure of the dialog."),(0,o.kt)("h3",{id:"auto-focus"},"Auto-Focus"),(0,o.kt)("p",null,"When enabled, auto-focus will automatically give focus to the first element within the dialog that can be focused. This is useful in helping to direct the attention of users, and is customizable via the ",(0,o.kt)("inlineCode",{parentName:"p"},"setAutoFocus()")," method."),(0,o.kt)("h2",{id:"draggable"},"Draggable"),(0,o.kt)("p",null,"The dialog has built in functionality to be draggable, allowing the user to relocate the dialog window by clicking and dragging. The position of the dialog can be manipulated from any of the fields within it: the header, content or footer."),(0,o.kt)("h3",{id:"snap-to-edge"},"Snap to Edge"),(0,o.kt)("p",null,"It is also possible to calibrate this behavior to snap to the edge of the screen, meaning the dialog will automatically align itself with the edge of the display when released from its drag and drop date. Snapping can be changed via the ",(0,o.kt)("inlineCode",{parentName:"p"},"setSnapToEdge()")," method. The ",(0,o.kt)("inlineCode",{parentName:"p"},"setSnapThreshold()")," takes a number of pixels, which will set how far the dialog should be from the sides of the screen before it will automatically snap to the edges.  "),(0,o.kt)("h2",{id:"positioning"},"Positioning"),(0,o.kt)("p",null,"The dialog's position can be manipulated using the built-in ",(0,o.kt)("inlineCode",{parentName:"p"},"setPosx()")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"setPosy()")," methods. These methods take a string argument which can represent any applicable CSS unit of length, such as pixels or view height/width. A list of these measurements ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Values_and_units#numbers_lengths_and_percentages"},"can be found at this link"),"."),(0,o.kt)("h3",{id:"vertical-alignment"},"Vertical Alignment"),(0,o.kt)("p",null,"In addition to manual assignment of a dialog's X and Y position, it is possible to use the dialog's built-in enum class to align the dialog. There are three possible values, ",(0,o.kt)("inlineCode",{parentName:"p"},"TOP"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"CENTER")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"BOTTOM"),", each of which can be used with the ",(0,o.kt)("inlineCode",{parentName:"p"},"setAlignment()")," method. "),(0,o.kt)("h3",{id:"full-screen-and-breakpoints"},"Full Screen and Breakpoints"),(0,o.kt)("p",null,"The dialog can be set to enter full screen mode. When full screen is enabled, the dialog cannot be moved or positioned. This mode can be manipulated with the breakpoint attribute of the dialog. The breakpoint is a media query which controls when the dialog will automatically flip to full screen mode. When the query matches, the dialog changes to full screen - otherwise it is positioned."))}h.isMDXComponent=!0}}]);