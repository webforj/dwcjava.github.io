"use strict";(self.webpackChunkdwcj_documentation=self.webpackChunkdwcj_documentation||[]).push([[2178],{5162:(e,t,a)=>{a.d(t,{Z:()=>s});var n=a(7294),o=a(6010);const l="tabItem_Ymn6";function s(e){let{children:t,hidden:a,className:s}=e;return n.createElement("div",{role:"tabpanel",className:(0,o.Z)(l,s),hidden:a},t)}},4866:(e,t,a)=>{a.d(t,{Z:()=>w});var n=a(7462),o=a(7294),l=a(6010),s=a(2466),r=a(6775),i=a(1980),c=a(7392),u=a(12);function d(e){return function(e){return o.Children.map(e,(e=>{if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:o}}=e;return{value:t,label:a,attributes:n,default:o}}))}function m(e){const{values:t,children:a}=e;return(0,o.useMemo)((()=>{const e=t??d(a);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function p(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:a}=e;const n=(0,r.k6)(),l=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,i._X)(l),(0,o.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(n.location.search);t.set(l,e),n.replace({...n.location,search:t.toString()})}),[l,n])]}function h(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,l=m(e),[s,r]=(0,o.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:l}))),[i,c]=b({queryString:a,groupId:n}),[d,h]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,l]=(0,u.Nk)(a);return[n,(0,o.useCallback)((e=>{a&&l.set(e)}),[a,l])]}({groupId:n}),x=(()=>{const e=i??d;return p({value:e,tabValues:l})?e:null})();(0,o.useLayoutEffect)((()=>{x&&r(x)}),[x]);return{selectedValue:s,selectValue:(0,o.useCallback)((e=>{if(!p({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);r(e),c(e),h(e)}),[c,h,l]),tabValues:l}}var x=a(2389);const A="tabList__CuJ",g="tabItem_LNqP";function v(e){let{className:t,block:a,selectedValue:r,selectValue:i,tabValues:c}=e;const u=[],{blockElementScrollPositionUntilNextRender:d}=(0,s.o5)(),m=e=>{const t=e.currentTarget,a=u.indexOf(t),n=c[a].value;n!==r&&(d(t),i(n))},p=e=>{var t;let a=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const t=u.indexOf(e.currentTarget)+1;a=u[t]??u[0];break}case"ArrowLeft":{const t=u.indexOf(e.currentTarget)-1;a=u[t]??u[u.length-1];break}}null==(t=a)||t.focus()};return o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},t)},c.map((e=>{let{value:t,label:a,attributes:s}=e;return o.createElement("li",(0,n.Z)({role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,key:t,ref:e=>u.push(e),onKeyDown:p,onClick:m},s,{className:(0,l.Z)("tabs__item",g,null==s?void 0:s.className,{"tabs__item--active":r===t})}),a??t)})))}function f(e){let{lazy:t,children:a,selectedValue:n}=e;if(a=Array.isArray(a)?a:[a],t){const e=a.find((e=>e.props.value===n));return e?(0,o.cloneElement)(e,{className:"margin-top--md"}):null}return o.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function k(e){const t=h(e);return o.createElement("div",{className:(0,l.Z)("tabs-container",A)},o.createElement(v,(0,n.Z)({},e,t)),o.createElement(f,(0,n.Z)({},e,t)))}function w(e){const t=(0,x.Z)();return o.createElement(k,(0,n.Z)({key:String(t)},e))}},2395:(e,t,a)=>{a.d(t,{Z:()=>d});var n=a(7294),o=a(2863),l=a(4866),s=a(5162),r=a(4673),i=a(8488);const c=a.p+"assets/images/expand-ba3f00f73da43d91e5b17663c4a7d108.png";function u(e){let{collapse:t,setCollapse:a}=e;const n=o.iv`
    /* transition: all var(--ifm-transition-fast) ease; */
    display: flex;
    justify-content: end;
    /* margin-bottom: -85px; */
    margin-bottom: -30px;
    background-color: transparent;
    `,l=o.iv`
    position: relative;
    cursor: pointer;
    z-index: 10;
    height: 35px;
    width: 35px;
    border: none;
    background-color: none;
    justify-self: flex-end;
    /* margin-right: 83px; */
    margin-right: 5px;
    margin-bottom: -50px;
    background-color: transparent;
  
  `;return(0,o.tZ)("div",{css:n},(0,o.tZ)("button",{css:l,onClick:()=>{a(!t)}},t?(0,o.tZ)("img",{src:"data:image/png;base64,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",className:"icon-tabler-arrow-bar-up"}):(0,o.tZ)("img",{src:c,className:"icon-tabler-arrow-bar-up"})))}function d(e){let{path:t,javaC:a,javaE:c,cssURL:d,javaHighlight:m,height:p,collapsedJ:b}=e;const[h,x]=(0,n.useState)(""),[A,g]=(0,n.useState)(""),[v,f]=(0,n.useState)(""),[k,w]=(0,n.useState)(!0);console.log(b);const y=o.iv`
		display: flex;
    flex-direction: column;
    padding: 10px 15px 0 15px;
    background-color: var(--code-display-color);
		width: 100%;
    margin-bottom: 16px;
    
    `,D=o.iv`
    min-height: 100px;
    height: 100%;
    height: ${p};
  `,E=o.iv`
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

  `;return c&&fetch(c).then((e=>e.text())).then((e=>{g(e)})),a&&fetch(a).then((e=>e.text())).then((e=>{x(e)})),d&&fetch(d).then((e=>e.text())).then((e=>{f(e)})),(0,o.tZ)("div",{css:y},(0,o.tZ)("iframe",{loading:"lazy",src:t,css:D}),(0,o.tZ)(r.Z,{css:E,summary:(0,o.tZ)("summary",null,"Show Code")},a&&c?(0,o.tZ)(u,{collapse:k,setCollapse:w}):null,d?(0,o.tZ)(l.Z,null,(0,o.tZ)(s.Z,{value:"Java",label:"Java",default:!0},(0,o.tZ)(i.Z,{className:"codeDemoBlock",language:"java",showLineNumbers:!0,metastring:m},k?b:A)),(0,o.tZ)(s.Z,{value:"CSS",label:"CSS"},(0,o.tZ)(i.Z,{className:"codeDemoBlock",language:"css",showLineNumbers:!0},v))):(0,o.tZ)(l.Z,null,(0,o.tZ)(s.Z,{value:"Java",label:"Java",default:!0},(0,o.tZ)(i.Z,{className:"codeDemoBlock",language:"java",showLineNumbers:!0,metastring:m},k?b:A)))))}},1415:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(7294),o=a(8397);function l(e){return n.createElement(n.Fragment,null,n.createElement(o.Z,e))}},3747:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>m,frontMatter:()=>s,metadata:()=>i,toc:()=>u});var n=a(7462),o=(a(7294),a(3905)),l=a(2395);const s={sidebar_position:150,title:"Text Box"},r=void 0,i={unversionedId:"controls/text-box",id:"controls/text-box",title:"Text Box",description:"API:&nbsp;",source:"@site/docs/controls/text-box.md",sourceDirName:"controls",slug:"/controls/text-box",permalink:"/docs/controls/text-box",draft:!1,editUrl:"https://github.com/DwcJava/dwcjava.github.io/tree/website/docs/controls/text-box.md",tags:[],version:"current",sidebarPosition:150,frontMatter:{sidebar_position:150,title:"Text Box"},sidebar:"tutorialSidebar",previous:{title:"Text Area",permalink:"/docs/controls/text-area"},next:{title:"Text Combo Box",permalink:"/docs/controls/text-combo-box"}},c={},u=[{value:"Labeling",id:"labeling",level:3},{value:"Placeholder",id:"placeholder",level:3},{value:"Spellcheck",id:"spellcheck",level:3},{value:"Expanses",id:"expanses",level:3}],d={toc:u};function m(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("div",{style:{width:"100%",display:"flex",justifyContent:"flex-end",marginBottom:"-50px"}},(0,o.kt)("p",{style:{color:"gray"}},"API:\xa0"),(0,o.kt)("b",null,(0,o.kt)("a",{href:"https://javadoc.io/static/org.dwcj/dwcj-engine/0.15.0/org/dwcj/controls/textbox/TextBox.html",style:{justifySelf:"flex-end"}}," Java "))),(0,o.kt)("h3",{id:"labeling"},"Labeling"),(0,o.kt)("p",null,"The text box control can be easily labeled without the needing to create an extra label control using the ",(0,o.kt)("inlineCode",{parentName:"p"},"setAttribute()")," method and passing the desired label as a string, as shown below: ",(0,o.kt)("br",null)),(0,o.kt)(l.Z,{path:"https://hot.bbx.kitchen/webapp/controlsamples?class=control_demos.textboxdemos.TextBoxLabel",javaE:"https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/java/control_demos/textboxdemos/TextBoxLabel.java",cssURL:"https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/resources/css/textboxstyles/text_box_styles.css",javaHighlight:"{16}",height:"125px",mdxType:"ComponentDemo"}),(0,o.kt)("br",null),(0,o.kt)("h3",{id:"placeholder"},"Placeholder"),(0,o.kt)("p",null,"It is also possible to set placeholder text within the control to better help users understand what type of input is expected. Similar to a label, this can be accomplished using the ",(0,o.kt)("inlineCode",{parentName:"p"},"setAttribute()")," method: ",(0,o.kt)("br",null)),(0,o.kt)(l.Z,{path:"https://hot.bbx.kitchen/webapp/controlsamples?class=control_demos.textboxdemos.TextBoxPlaceholder",javaE:"https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/java/control_demos/textboxdemos/TextBoxPlaceholder.java",cssURL:"https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/resources/css/textboxstyles/text_box_styles.css",javaHighlight:"{16}",height:"125px",mdxType:"ComponentDemo"}),(0,o.kt)("br",null),(0,o.kt)("h3",{id:"spellcheck"},"Spellcheck"),(0,o.kt)("p",null,"The text box can also be configured with spellchecking to help the user improve their input. Use the ",(0,o.kt)("inlineCode",{parentName:"p"},"setAttribute()")," method to do this:"),(0,o.kt)(l.Z,{path:"https://hot.bbx.kitchen/webapp/controlsamples?class=control_demos.textboxdemos.TextBoxSpellcheck",javaE:"https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/java/control_demos/textboxdemos/TextBoxSpellcheck.java",cssURL:"https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/resources/css/textboxstyles/text_box_styles.css",javaHighlight:"{16}",height:"125px",mdxType:"ComponentDemo"}),(0,o.kt)("br",null),(0,o.kt)("h3",{id:"expanses"},"Expanses"),(0,o.kt)("p",null,"DWCJ's text box comes with 5 expanses for quick styling without the use of CSS. Expanses are supported by use of a built-in enum class.\nBelow are the various expanses supported for the text box control: ",(0,o.kt)("br",null)),(0,o.kt)(l.Z,{path:"https://hot.bbx.kitchen/webapp/controlsamples?class=control_demos.textboxdemos.TextBoxExpanses",javaE:"https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/java/control_demos/textboxdemos/TextBoxExpanses.java",cssURL:"https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/resources/css/textboxstyles/text_box_styles.css",javaHighlight:"{16,19,22,25,28}",height:"125px",mdxType:"ComponentDemo"}),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Text Box Expanses"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("ul",null,(0,o.kt)("li",null,(0,o.kt)("inlineCode",{parentName:"td"},"TextBox.Expanse.XSMALL")),(0,o.kt)("li",null,(0,o.kt)("inlineCode",{parentName:"td"},"TextBox.Expanse.SMALL")),(0,o.kt)("li",null,(0,o.kt)("inlineCode",{parentName:"td"},"TextBox.Expanse.MEDIUM")),(0,o.kt)("li",null,(0,o.kt)("inlineCode",{parentName:"td"},"TextBox.Expanse.LARGE")),(0,o.kt)("li",null,(0,o.kt)("inlineCode",{parentName:"td"},"TextBox.Expanse.XLARGE"))))))))}m.isMDXComponent=!0}}]);