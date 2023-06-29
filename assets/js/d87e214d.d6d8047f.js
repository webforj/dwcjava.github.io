"use strict";(self.webpackChunkdwcj_documentation=self.webpackChunkdwcj_documentation||[]).push([[5049],{5162:(e,t,a)=>{a.d(t,{Z:()=>s});var n=a(7294),o=a(6010);const l="tabItem_Ymn6";function s(e){let{children:t,hidden:a,className:s}=e;return n.createElement("div",{role:"tabpanel",className:(0,o.Z)(l,s),hidden:a},t)}},4866:(e,t,a)=>{a.d(t,{Z:()=>k});var n=a(7462),o=a(7294),l=a(6010),s=a(2466),r=a(6775),c=a(1980),i=a(7392),u=a(12);function m(e){return function(e){return o.Children.map(e,(e=>{if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:o}}=e;return{value:t,label:a,attributes:n,default:o}}))}function b(e){const{values:t,children:a}=e;return(0,o.useMemo)((()=>{const e=t??m(a);return function(e){const t=(0,i.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function p(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function d(e){let{queryString:t=!1,groupId:a}=e;const n=(0,r.k6)(),l=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,c._X)(l),(0,o.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(n.location.search);t.set(l,e),n.replace({...n.location,search:t.toString()})}),[l,n])]}function h(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,l=b(e),[s,r]=(0,o.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:l}))),[c,i]=d({queryString:a,groupId:n}),[m,h]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,l]=(0,u.Nk)(a);return[n,(0,o.useCallback)((e=>{a&&l.set(e)}),[a,l])]}({groupId:n}),x=(()=>{const e=c??m;return p({value:e,tabValues:l})?e:null})();(0,o.useLayoutEffect)((()=>{x&&r(x)}),[x]);return{selectedValue:s,selectValue:(0,o.useCallback)((e=>{if(!p({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);r(e),i(e),h(e)}),[i,h,l]),tabValues:l}}var x=a(2389);const g="tabList__CuJ",v="tabItem_LNqP";function A(e){let{className:t,block:a,selectedValue:r,selectValue:c,tabValues:i}=e;const u=[],{blockElementScrollPositionUntilNextRender:m}=(0,s.o5)(),b=e=>{const t=e.currentTarget,a=u.indexOf(t),n=i[a].value;n!==r&&(m(t),c(n))},p=e=>{var t;let a=null;switch(e.key){case"Enter":b(e);break;case"ArrowRight":{const t=u.indexOf(e.currentTarget)+1;a=u[t]??u[0];break}case"ArrowLeft":{const t=u.indexOf(e.currentTarget)-1;a=u[t]??u[u.length-1];break}}null==(t=a)||t.focus()};return o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},t)},i.map((e=>{let{value:t,label:a,attributes:s}=e;return o.createElement("li",(0,n.Z)({role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,key:t,ref:e=>u.push(e),onKeyDown:p,onClick:b},s,{className:(0,l.Z)("tabs__item",v,null==s?void 0:s.className,{"tabs__item--active":r===t})}),a??t)})))}function f(e){let{lazy:t,children:a,selectedValue:n}=e;if(a=Array.isArray(a)?a:[a],t){const e=a.find((e=>e.props.value===n));return e?(0,o.cloneElement)(e,{className:"margin-top--md"}):null}return o.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function w(e){const t=h(e);return o.createElement("div",{className:(0,l.Z)("tabs-container",g)},o.createElement(A,(0,n.Z)({},e,t)),o.createElement(f,(0,n.Z)({},e,t)))}function k(e){const t=(0,x.Z)();return o.createElement(w,(0,n.Z)({key:String(t)},e))}},2395:(e,t,a)=>{a.d(t,{Z:()=>m});var n=a(7294),o=a(2863),l=a(4866),s=a(5162),r=a(4673),c=a(8488);const i=a.p+"assets/images/expand-ba3f00f73da43d91e5b17663c4a7d108.png";function u(e){let{collapse:t,setCollapse:a}=e;const n=o.iv`
    display: flex;
    justify-content: end;
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
    margin-right: 5px;
    margin-bottom: -50px;
    background-color: transparent;
  
  `,s=o.iv`
      filter: invert(var(--inversion-percentage));
  `;return(0,o.tZ)("div",{css:n},(0,o.tZ)("button",{css:l,onClick:()=>{a(!t)}},t?(0,o.tZ)("img",{css:s,src:i,className:"icon-tabler-arrow-bar-up"}):(0,o.tZ)("img",{css:s,src:"data:image/png;base64,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",className:"icon-tabler-arrow-bar-down"})))}function m(e){let{path:t,javaC:a,javaE:i,cssURL:m,javaHighlight:b,height:p,frame:d}=e;const[h,x]=(0,n.useState)(""),[g,v]=(0,n.useState)(""),[A,f]=(0,n.useState)(""),[w,k]=(0,n.useState)(!0),y=o.iv`
		display: flex;
    flex-direction: column;
    /* padding: 10px 15px 0 15px; */
    background-color: var(--code-display-color);
		width: 100%;
    margin-bottom: 16px;
    padding: ${"hidden"==d?"0 15px 0 15px;":"10px 15px 0 15px;"};
    
    `,E=o.iv`
    min-height: 100px;
    height: 100%;
    height: ${p};
  `,C=o.iv`
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

  `;return i&&fetch(i).then((e=>e.text())).then((e=>{v(e)})),a&&fetch(a).then((e=>e.text())).then((e=>{x(e)})),m&&fetch(m).then((e=>e.text())).then((e=>{f(e)})),(0,o.tZ)("div",{css:y},"hidden"!=d?(0,o.tZ)("iframe",{loading:"lazy",src:t,css:E}):null,(0,o.tZ)(r.Z,{css:C,summary:(0,o.tZ)("summary",null,"Show Code")},a&&i?(0,o.tZ)(u,{collapse:w,setCollapse:k}):null,m?(0,o.tZ)(l.Z,null,(0,o.tZ)(s.Z,{value:"Java",label:"Java",default:!0},(0,o.tZ)(c.Z,{className:"codeDemoBlock",language:"java",showLineNumbers:!0,metastring:b},w?h:g)),(0,o.tZ)(s.Z,{value:"CSS",label:"CSS"},(0,o.tZ)(c.Z,{className:"codeDemoBlock",language:"css",showLineNumbers:!0},A))):(0,o.tZ)(l.Z,null,(0,o.tZ)(s.Z,{value:"Java",label:"Java",default:!0},(0,o.tZ)(c.Z,{className:"codeDemoBlock",language:"java",showLineNumbers:!0,metastring:b},w?h:g)))))}},3273:(e,t,a)=>{a.d(t,{Z:()=>c});var n=a(7294),o=a(2863);let l=null,s=null;const r={getLatestTag:async function(){return l&&s&&Date.now()-s<36e5?l:async function(){try{const e=await fetch("https://api.github.com/repos/DwcJava/engine/tags"),t=await e.json();return l=t[0].name,s=Date.now(),l}catch(e){return console.error("Error fetching latest tag:",e),null}}()}};function c(e){let{type:t,location:a}=e;const[l,s]=(0,n.useState)("");(0,n.useEffect)((()=>{(async()=>{try{const e=await r.getLatestTag();s("https://javadoc.io/static/org.dwcj/dwcj-"+t+"/"+e+"/"+a+".html")}catch(e){console.error("Error fetching latest release:",e)}})()}),[]);const c=o.iv`
    width: 100%;
    display: flex;
    justify-content: flex-end;
  `,i=o.iv`
    color: gray;
  `;return(0,o.tZ)("div",{css:c},(0,o.tZ)("p",{css:i},"API:\xa0"),(0,o.tZ)("b",null,(0,o.tZ)("a",{href:l,target:"_blank"},"Java")))}},7796:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(7294);function o(e){var t,a;const[o,l]=(0,n.useState)(null);if((0,n.useEffect)((()=>{fetch("https://basishub.github.io/basis-next/bbj-components.json").then((e=>e.json())).then((t=>{const a=t.components.find((t=>t.tag===e.tag));l(a)}))}),[]),!o)return n.createElement("div",null,"Loading...");const s=null==(t=o.docsTags)?void 0:t.filter((e=>"part"===e.name)),r=null==(a=o.styles)?void 0:a.map((e=>({name:e.name,description:e.docs})));return n.createElement(n.Fragment,null,n.createElement("h4",null,"Shadow Parts"),n.createElement("table",{className:"custom--table"},n.createElement("thead",null,n.createElement("tr",null,n.createElement("th",null,"Part"),n.createElement("th",null,"Description"))),n.createElement("tbody",null,null==s?void 0:s.map((e=>{const[t,a]=e.text.split(" - ");return n.createElement("tr",{key:e.id},n.createElement("td",null,t),n.createElement("td",null,a))})))),n.createElement("h4",null,"CSS Properties"),n.createElement("table",{className:"custom--table"},n.createElement("thead",null,n.createElement("tr",null,n.createElement("th",null,"Name"),n.createElement("th",null,"Description"))),n.createElement("tbody",null,null==r?void 0:r.map((e=>n.createElement("tr",{key:e.name},n.createElement("td",null,e.name),n.createElement("td",null,e.description)))))))}},1415:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(7294),o=a(8397);function l(e){return n.createElement(n.Fragment,null,n.createElement(o.Z,e))}},8302:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>i,default:()=>d,frontMatter:()=>c,metadata:()=>u,toc:()=>b});var n=a(7462),o=(a(7294),a(3905)),l=a(2395),s=a(7796),r=a(3273);const c={sidebar_position:23,title:"Combo Box"},i=void 0,u={unversionedId:"components/combo-box",id:"components/combo-box",title:"Combo Box",description:"Menu Placement",source:"@site/docs/components/combo-box.md",sourceDirName:"components",slug:"/components/combo-box",permalink:"/docs/components/combo-box",draft:!1,editUrl:"https://github.com/DwcJava/dwcjava.github.io/tree/website/docs/components/combo-box.md",tags:[],version:"current",sidebarPosition:23,frontMatter:{sidebar_position:23,title:"Combo Box"},sidebar:"tutorialSidebar",previous:{title:"Choice Box",permalink:"/docs/components/choice-box"},next:{title:"Dialog",permalink:"/docs/components/dialog"}},m={},b=[{value:"Menu Placement",id:"menu-placement",level:3},{value:"Label",id:"label",level:3},{value:"Placeholder",id:"placeholder",level:3},{value:"Expanses",id:"expanses",level:3},{value:"Parts and CSS Properties",id:"parts-and-css-properties",level:2}],p={toc:b};function d(e){let{components:t,...c}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,c,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(r.Z,{type:"engine",location:"org/dwcj/component/combobox/ComboBox",mdxType:"JavadocLink"}),(0,o.kt)("h3",{id:"menu-placement"},"Menu Placement"),(0,o.kt)("p",null,"The combo box can be configured to open the menu in various positions relative to the position of the component itself."),(0,o.kt)(l.Z,{path:"https://hot.bbx.kitchen/webapp/controlsamples?class=control_demos.textcomboboxdemos.TextComboBoxPlacement",javaE:"https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/java/control_demos/textcomboboxdemos/TextComboBoxPlacement.java",javaC:"https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/code_snippets/textcombobox/Placement.txt",cssURL:"https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/resources/css/textcomboboxstyles/placement_styles.css",javaHighlight:"{24,29,33,38}",height:"350px",mdxType:"ComponentDemo"}),(0,o.kt)("br",null),(0,o.kt)("h3",{id:"label"},"Label"),(0,o.kt)("p",null,"The combo box component can be easily labeled without the needing to create an extra label component using the ",(0,o.kt)("inlineCode",{parentName:"p"},"setAttribute()")," method and passing the desired label as a string, as shown below: ",(0,o.kt)("br",null)),(0,o.kt)(l.Z,{path:"https://hot.bbx.kitchen/webapp/controlsamples?class=control_demos.textcomboboxdemos.TextComboBoxLabel",javaE:"https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/java/control_demos/textcomboboxdemos/TextComboBoxLabel.java",javaC:"https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/code_snippets/textcombobox/Label.txt",cssURL:"https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/resources/css/textcomboboxstyles/text_combo_styles.css",javaHighlight:"{24}",height:"200px",mdxType:"ComponentDemo"}),(0,o.kt)("br",null),(0,o.kt)("h3",{id:"placeholder"},"Placeholder"),(0,o.kt)("p",null,"It is also possible to set placeholder text within the component to better help users understand what type of input is expected. Similar to a label, this can be accomplished using the ",(0,o.kt)("inlineCode",{parentName:"p"},"setAttribute()")," method: ",(0,o.kt)("br",null)),(0,o.kt)(l.Z,{path:"https://hot.bbx.kitchen/webapp/controlsamples?class=control_demos.textcomboboxdemos.TextComboBoxPlaceholder",javaE:"https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/java/control_demos/textcomboboxdemos/TextComboBoxPlaceholder.java",javaC:"https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/code_snippets/textcombobox/Placeholder.txt",cssURL:"https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/resources/css/textcomboboxstyles/text_combo_styles.css",javaHighlight:"{24}",height:"200px",mdxType:"ComponentDemo"}),(0,o.kt)("br",null),(0,o.kt)("h3",{id:"expanses"},"Expanses"),(0,o.kt)("p",null,"DWCJ's combo box comes with 5 expanses for quick styling without the use of CSS. Expanses are supported by use of a built-in enum class.\nBelow are the various expanses supported for the text box component: ",(0,o.kt)("br",null)),(0,o.kt)(l.Z,{path:"https://hot.bbx.kitchen/webapp/controlsamples?class=control_demos.textcomboboxdemos.TextComboBoxExpanses",javaE:"https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/java/control_demos/textcomboboxdemos/TextComboBoxExpanses.java",javaC:"https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/code_snippets/textcombobox/Expanses.txt",cssURL:"https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/resources/css/textcomboboxstyles/expanse_styles.css",javaHighlight:"{24,27,30,33,36}",height:"350px",mdxType:"ComponentDemo"}),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Combo Box Expanses"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("ul",null,(0,o.kt)("li",null,(0,o.kt)("inlineCode",{parentName:"td"},"ComboBox.Expanse.XSMALL")),(0,o.kt)("li",null,(0,o.kt)("inlineCode",{parentName:"td"},"ComboBox.Expanse.SMALL")),(0,o.kt)("li",null,(0,o.kt)("inlineCode",{parentName:"td"},"ComboBox.Expanse.MEDIUM")),(0,o.kt)("li",null,(0,o.kt)("inlineCode",{parentName:"td"},"ComboBox.Expanse.LARGE")),(0,o.kt)("li",null,(0,o.kt)("inlineCode",{parentName:"td"},"ComboBox.Expanse.XLARGE"))))))),(0,o.kt)("h2",{id:"parts-and-css-properties"},"Parts and CSS Properties"),(0,o.kt)(s.Z,{tag:a(5731).Ct,mdxType:"TableBuilder"}))}d.isMDXComponent=!0},5731:e=>{e.exports=JSON.parse('{"LN":"bbj-app-layout","zx":"bbj-button","Kx":"bbj-cedit","XZ":"bbj-checkbox","gN":"bbj-editbox","iR":"bbj-slider","nv":"bbj-inpute","Ki":"bbj-inputn","wb":"bbj-list","Z":"bbj-list-button","Ct":"bbj-list-edit","ko":"bbj-progressbar","EU":"bbj-radio","dy":"bbj-drawer","Vq":"bbj-dialog"}')}}]);