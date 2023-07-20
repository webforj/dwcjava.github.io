"use strict";(self.webpackChunkdwcj_documentation=self.webpackChunkdwcj_documentation||[]).push([[6328],{5162:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(7294),l=n(6010);const o="tabItem_Ymn6";function r(e){let{children:t,hidden:n,className:r}=e;return a.createElement("div",{role:"tabpanel",className:(0,l.Z)(o,r),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>f});var a=n(7462),l=n(7294),o=n(6010),r=n(2466),s=n(6775),c=n(1980),i=n(7392),u=n(12);function m(e){return function(e){return l.Children.map(e,(e=>{if((0,l.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:l}}=e;return{value:t,label:n,attributes:a,default:l}}))}function d(e){const{values:t,children:n}=e;return(0,l.useMemo)((()=>{const e=t??m(n);return function(e){const t=(0,i.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:n}=e;const a=(0,s.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,c._X)(o),(0,l.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function h(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,o=d(e),[r,s]=(0,l.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[c,i]=b({queryString:n,groupId:a}),[m,h]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,u.Nk)(n);return[a,(0,l.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:a}),g=(()=>{const e=c??m;return p({value:e,tabValues:o})?e:null})();(0,l.useLayoutEffect)((()=>{g&&s(g)}),[g]);return{selectedValue:r,selectValue:(0,l.useCallback)((e=>{if(!p({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);s(e),i(e),h(e)}),[i,h,o]),tabValues:o}}var g=n(2389);const x="tabList__CuJ",A="tabItem_LNqP";function v(e){let{className:t,block:n,selectedValue:s,selectValue:c,tabValues:i}=e;const u=[],{blockElementScrollPositionUntilNextRender:m}=(0,r.o5)(),d=e=>{const t=e.currentTarget,n=u.indexOf(t),a=i[n].value;a!==s&&(m(t),c(a))},p=e=>{var t;let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=u.indexOf(e.currentTarget)+1;n=u[t]??u[0];break}case"ArrowLeft":{const t=u.indexOf(e.currentTarget)-1;n=u[t]??u[u.length-1];break}}null==(t=n)||t.focus()};return l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},i.map((e=>{let{value:t,label:n,attributes:r}=e;return l.createElement("li",(0,a.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>u.push(e),onKeyDown:p,onClick:d},r,{className:(0,o.Z)("tabs__item",A,null==r?void 0:r.className,{"tabs__item--active":s===t})}),n??t)})))}function k(e){let{lazy:t,children:n,selectedValue:a}=e;if(n=Array.isArray(n)?n:[n],t){const e=n.find((e=>e.props.value===a));return e?(0,l.cloneElement)(e,{className:"margin-top--md"}):null}return l.createElement("div",{className:"margin-top--md"},n.map(((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function E(e){const t=h(e);return l.createElement("div",{className:(0,o.Z)("tabs-container",x)},l.createElement(v,(0,a.Z)({},e,t)),l.createElement(k,(0,a.Z)({},e,t)))}function f(e){const t=(0,g.Z)();return l.createElement(E,(0,a.Z)({key:String(t)},e))}},2395:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(7294),l=n(2863),o=n(4866),r=n(5162),s=n(4673),c=n(8488);const i=n.p+"assets/images/expand-ba3f00f73da43d91e5b17663c4a7d108.png";function u(e){let{collapse:t,setCollapse:n}=e;const a=l.iv`
    display: flex;
    justify-content: end;
    margin-bottom: -30px;
    background-color: transparent;
    `,o=l.iv`
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
  
  `,r=l.iv`
      filter: invert(var(--inversion-percentage));
  `;return(0,l.tZ)("div",{css:a},(0,l.tZ)("button",{css:o,onClick:()=>{n(!t)}},t?(0,l.tZ)("img",{css:r,src:i,className:"icon-tabler-arrow-bar-up"}):(0,l.tZ)("img",{css:r,src:"data:image/png;base64,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",className:"icon-tabler-arrow-bar-down"})))}function m(e){let{path:t,javaC:n,javaE:i,cssURL:m,javaHighlight:d,height:p,frame:b}=e;const[h,g]=(0,a.useState)(""),[x,A]=(0,a.useState)(""),[v,k]=(0,a.useState)(""),[E,f]=(0,a.useState)(!0),w=l.iv`
		display: flex;
    flex-direction: column;
    /* padding: 10px 15px 0 15px; */
    background-color: var(--code-display-color);
		width: 100%;
    margin-bottom: 16px;
    padding: ${"hidden"==b?"0 15px 0 15px;":"10px 15px 0 15px;"};
    
    `,y=l.iv`
    min-height: 100px;
    height: 100%;
    height: ${p};
  `,C=l.iv`
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

  `;return i&&fetch(i).then((e=>e.text())).then((e=>{A(e)})),n&&fetch(n).then((e=>e.text())).then((e=>{g(e)})),m&&fetch(m).then((e=>e.text())).then((e=>{k(e)})),(0,l.tZ)("div",{css:w},"hidden"!=b?(0,l.tZ)("iframe",{loading:"lazy",src:t,css:y}):null,(0,l.tZ)(s.Z,{css:C,summary:(0,l.tZ)("summary",null,"Show Code")},n&&i?(0,l.tZ)(u,{collapse:E,setCollapse:f}):null,m?(0,l.tZ)(o.Z,null,(0,l.tZ)(r.Z,{value:"Java",label:"Java",default:!0},(0,l.tZ)(c.Z,{className:"codeDemoBlock",language:"java",showLineNumbers:!0,metastring:d},E?h:x)),(0,l.tZ)(r.Z,{value:"CSS",label:"CSS"},(0,l.tZ)(c.Z,{className:"codeDemoBlock",language:"css",showLineNumbers:!0},v))):(0,l.tZ)(o.Z,null,(0,l.tZ)(r.Z,{value:"Java",label:"Java",default:!0},(0,l.tZ)(c.Z,{className:"codeDemoBlock",language:"java",showLineNumbers:!0,metastring:d},E?h:x)))))}},3273:(e,t,n)=>{n.d(t,{Z:()=>c});var a=n(7294),l=n(2863);let o=null,r=null;const s={getLatestTag:async function(){return o&&r&&Date.now()-r<36e5?o:async function(){try{const e=await fetch("https://api.github.com/repos/DwcJava/engine/tags"),t=await e.json();return o=t[0].name,r=Date.now(),o}catch(e){return console.error("Error fetching latest tag:",e),null}}()}};function c(e){let{type:t,location:n,top:o,children:r,code:c,suffix:i}=e;const[u,m]=(0,a.useState)("");(0,a.useEffect)((()=>{(async()=>{try{const e=await s.getLatestTag();i||(i=""),m("https://javadoc.io/static/org.dwcj/dwcj-"+t+"/"+e+"/"+n+".html"+i)}catch(e){console.error("Error fetching latest release:",e)}})(),console.log(o)}),[]);const d=l.iv`
    display: inline;

    ${o&&l.iv`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    `}
  `,p=l.iv`
    color: gray;
  `;return(0,l.tZ)(a.Fragment,null,"true"===o&&(0,l.tZ)("div",{css:d},(0,l.tZ)("p",{css:p},"API:\xa0"),(0,l.tZ)("b",null,(0,l.tZ)("a",{href:u,target:"_blank"},"Java"))),"true"!==o&&!c&&(0,l.tZ)("div",{css:d},(0,l.tZ)("a",{href:u,target:"_blank"},r)),"true"!==o&&c&&(0,l.tZ)("div",{css:d},(0,l.tZ)("code",null,(0,l.tZ)("a",{href:u,target:"_blank"},r))))}},7796:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(7294);function l(e){var t,n,l;const[o,r]=(0,a.useState)(null);if((0,a.useEffect)((()=>{fetch("https://basishub.github.io/basis-next/bbj-components.json").then((e=>e.json())).then((t=>{const n=t.components.find((t=>t.tag===e.tag));r(n)}))}),[]),!o)return a.createElement("div",null,"Loading...");const s=null==(t=o.docsTags)?void 0:t.filter((e=>"part"===e.name)),c=null==(n=o.styles)?void 0:n.map((e=>({name:e.name,description:e.docs}))),i=null==(l=o.props)?void 0:l.map((e=>({display:e.reflectToAttr,attr:e.attr,desc:e.docs,type:e.type})));return a.createElement(a.Fragment,null,"parts"==e.table&&a.createElement(a.Fragment,null,a.createElement("table",{className:"custom--table"},a.createElement("thead",null,a.createElement("tr",{key:"header"},a.createElement("th",null,"Part"),a.createElement("th",null,"Description"))),a.createElement("tbody",null,null==s?void 0:s.map((e=>{const[t,n]=e.text.split(" - ");return a.createElement("tr",{key:e.id},a.createElement("td",null,a.createElement("code",null,t)),a.createElement("td",null,n))}))))),"properties"==e.table&&a.createElement(a.Fragment,null,a.createElement("table",{className:"custom--table"},a.createElement("thead",null,a.createElement("tr",{key:"header"},a.createElement("th",null,"Name"),a.createElement("th",null,"Description"))),a.createElement("tbody",null,null==c?void 0:c.map((e=>a.createElement("tr",{key:e.name},a.createElement("td",null,a.createElement("code",null,e.name)),a.createElement("td",null,e.description))))))),"reflects"==e.table&&a.createElement(a.Fragment,null,a.createElement("table",{className:"custom--table"},a.createElement("thead",null,a.createElement("tr",{key:"header"},a.createElement("th",null,"Attribute"),a.createElement("th",null,"Description"),a.createElement("th",null,"Type"))),a.createElement("tbody",null,null==i?void 0:i.map((e=>null!=e.attr&&"&#x2714;"==e.display&&a.createElement("tr",{key:e.attr},a.createElement("td",null,a.createElement("code",null,e.attr)),a.createElement("td",null,e.desc),a.createElement("td",null,e.type))))))),"properties"!=e.table&&"parts"!=e.table&&"reflects"!=e.table&&a.createElement(a.Fragment,null,a.createElement("h4",null,"Shadow Parts"),a.createElement("table",{className:"custom--table"},a.createElement("thead",null,a.createElement("tr",{key:"header"},a.createElement("th",null,"Part"),a.createElement("th",null,"Description"))),a.createElement("tbody",null,null==s?void 0:s.map((e=>{const[t,n]=e.text.split(" - ");return a.createElement("tr",{key:e.id},a.createElement("td",null,a.createElement("code",null,t)),a.createElement("td",null,n))})))),a.createElement("h4",null,"CSS Properties"),a.createElement("table",{className:"custom--table"},a.createElement("thead",null,a.createElement("tr",{key:"header"},a.createElement("th",null,"Name"),a.createElement("th",null,"Description"))),a.createElement("tbody",null,null==c?void 0:c.map((e=>a.createElement("tr",{key:e.name},a.createElement("td",null,a.createElement("code",null,e.name)),a.createElement("td",null,e.description)))))),a.createElement("h4",null,"Reflected Attributes"),a.createElement("table",{className:"custom--table"},a.createElement("thead",null,a.createElement("tr",{key:"header"},a.createElement("th",null,"Attribute"),a.createElement("th",null,"Description"),a.createElement("th",null,"Type"))),a.createElement("tbody",null,null==i?void 0:i.map((e=>null!=e.attr&&"&#x2714;"==e.display&&a.createElement("tr",{key:e.attr},a.createElement("td",null,a.createElement("code",null,e.attr)),a.createElement("td",null,e.desc),a.createElement("td",null,e.type))))))))}},1415:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(7294),l=n(8397);function o(e){return a.createElement(a.Fragment,null,a.createElement(l.Z,e))}},5952:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>i,default:()=>b,frontMatter:()=>c,metadata:()=>u,toc:()=>d});var a=n(7462),l=(n(7294),n(3905)),o=n(2395),r=n(7796),s=n(3273);const c={sidebar_position:20,title:"ChoiceBox"},i=void 0,u={unversionedId:"components/choice-box",id:"components/choice-box",title:"ChoiceBox",description:"Labeling",source:"@site/docs/components/choice-box.md",sourceDirName:"components",slug:"/components/choice-box",permalink:"/docs/components/choice-box",draft:!1,editUrl:"https://github.com/DwcJava/dwcjava.github.io/tree/website/docs/components/choice-box.md",tags:[],version:"current",sidebarPosition:20,frontMatter:{sidebar_position:20,title:"ChoiceBox"},sidebar:"tutorialSidebar",previous:{title:"Checkbox",permalink:"/docs/components/styles/checkbox"},next:{title:"ComboBox",permalink:"/docs/components/combo-box"}},m={},d=[{value:"Labeling",id:"labeling",level:3},{value:"Themes",id:"themes",level:3},{value:"Expanses",id:"expanses",level:3},{value:"Parts and CSS Properties",id:"parts-and-css-properties",level:2}],p={toc:d};function b(e){let{components:t,...c}=e;return(0,l.kt)("wrapper",(0,a.Z)({},p,c,{components:t,mdxType:"MDXLayout"}),(0,l.kt)(s.Z,{type:"engine",location:"org/dwcj/component/choicebox/ChoiceBox",top:"true",mdxType:"JavadocLink"}),(0,l.kt)("h3",{id:"labeling"},"Labeling"),(0,l.kt)("p",null,"Labels can be easily added above the component without the need to create a separate Label component above the component. Use the ",(0,l.kt)("inlineCode",{parentName:"p"},"setAttribute()")," function to create a label. The attribute to be changed is ",(0,l.kt)("inlineCode",{parentName:"p"},"label"),", and the value should be the desired label text."),(0,l.kt)(o.Z,{path:"https://hot.bbx.kitchen/webapp/controlsamples?class=component_demos.comboboxdemos.ComboboxLabelDemo",javaE:"https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/java/component_demos/comboboxdemos/ComboboxLabelDemo.java",javaC:"https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/code_snippets/combobox/Label.txt",cssURL:"https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/resources/css/comboboxstyles/label_styles.css",javaHighlight:"{33}",height:"170px",mdxType:"ComponentDemo"}),(0,l.kt)("br",null),(0,l.kt)("h3",{id:"themes"},"Themes"),(0,l.kt)("p",null,"DWCJ Choice Box components come with 14 themes built in for quick styling without the use of CSS. Theming is supported by use of a built-in enum class.\nShown below are example boxes with each of the supported Themes applied: ",(0,l.kt)("br",null)),(0,l.kt)(o.Z,{path:"https://hot.bbx.kitchen/webapp/controlsamples?class=component_demos.comboboxdemos.ComboboxThemeDemo",javaE:"https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/java/component_demos/comboboxdemos/ComboboxThemeDemo.java",javaC:"https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/code_snippets/combobox/Theme.txt",cssURL:"https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/resources/css/comboboxstyles/theme_styles.css",height:"170px",mdxType:"ComponentDemo"}),(0,l.kt)("br",null),(0,l.kt)("p",null,"Listed below are the current supported theme options for the combo box component:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Choice Box Themes"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("ul",null,(0,l.kt)("li",null,(0,l.kt)("inlineCode",{parentName:"td"},"ChoiceBox.Theme.DEFAULT")),(0,l.kt)("li",null,(0,l.kt)("inlineCode",{parentName:"td"},"ChoiceBox.Theme.DANGER")),(0,l.kt)("li",null,(0,l.kt)("inlineCode",{parentName:"td"},"ChoiceBox.Theme.GRAY")),(0,l.kt)("li",null,(0,l.kt)("inlineCode",{parentName:"td"},"ChoiceBox.Theme.INFO")),(0,l.kt)("li",null,(0,l.kt)("inlineCode",{parentName:"td"},"ChoiceBox.Theme.PRIMARY")),(0,l.kt)("li",null,(0,l.kt)("inlineCode",{parentName:"td"},"ChoiceBox.Theme.SUCCESS")),(0,l.kt)("li",null,(0,l.kt)("inlineCode",{parentName:"td"},"ChoiceBox.Theme.WARNING")),(0,l.kt)("li",null,(0,l.kt)("inlineCode",{parentName:"td"},"ChoiceBox.Theme.OUTLINED_DEFAULT")),(0,l.kt)("li",null,(0,l.kt)("inlineCode",{parentName:"td"},"ChoiceBox.Theme.OUTLINED_DANGER")),(0,l.kt)("li",null,(0,l.kt)("inlineCode",{parentName:"td"},"ChoiceBox.Theme.OUTLINED_GRAY")),(0,l.kt)("li",null,(0,l.kt)("inlineCode",{parentName:"td"},"ChoiceBox.Theme.OUTLINED_INFO")),(0,l.kt)("li",null,(0,l.kt)("inlineCode",{parentName:"td"},"ChoiceBox.Theme.OUTLINED_PRIMARY")),(0,l.kt)("li",null,(0,l.kt)("inlineCode",{parentName:"td"},"ChoiceBox.Theme.OUTLINED_SUCCESS")),(0,l.kt)("li",null,(0,l.kt)("inlineCode",{parentName:"td"},"ChoiceBox.Theme.OUTLINED_WARNING"))))))),(0,l.kt)("br",null),(0,l.kt)("h3",{id:"expanses"},"Expanses"),(0,l.kt)("p",null,"There are five Choice Box expanses that are supported in the DWCJ which allow for quick styling without using CSS. Expanses are supported by use of a built-in enum class.\nBelow are the various expanses supported this component: ",(0,l.kt)("br",null)),(0,l.kt)(o.Z,{path:"https://hot.bbx.kitchen/webapp/controlsamples?class=component_demos.comboboxdemos.ComboboxExpanseDemo",javaE:"https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/java/component_demos/comboboxdemos/ComboboxExpanseDemo.java",javaC:"https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/code_snippets/combobox/Expanse.txt",cssURL:"https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/resources/css/comboboxstyles/expanse_styles.css",javaHighlight:"{21,25,29,33,37}",height:"150px",mdxType:"ComponentDemo"}),(0,l.kt)("br",null),"Listed below are the current supported expanse options for the choice box component:",(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"ChoiceBox Expanses"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("ul",null,(0,l.kt)("li",null,(0,l.kt)("inlineCode",{parentName:"td"},"ChoiceBox.Expanse.XSMALL")),(0,l.kt)("li",null,(0,l.kt)("inlineCode",{parentName:"td"},"ChoiceBox.Expanse.SMALL")),(0,l.kt)("li",null,(0,l.kt)("inlineCode",{parentName:"td"},"ChoiceBox.Expanse.MEDIUM")),(0,l.kt)("li",null,(0,l.kt)("inlineCode",{parentName:"td"},"ChoiceBox.Expanse.LARGE")),(0,l.kt)("li",null,(0,l.kt)("inlineCode",{parentName:"td"},"ChoiceBox.Expanse.XLARGE"))))))),(0,l.kt)("h2",{id:"parts-and-css-properties"},"Parts and CSS Properties"),(0,l.kt)(r.Z,{tag:n(5731).Z,mdxType:"TableBuilder"}))}b.isMDXComponent=!0},5731:e=>{e.exports=JSON.parse('{"LN":"bbj-app-layout","zx":"bbj-button","Kx":"bbj-cedit","XZ":"bbj-checkbox","gN":"bbj-editbox","iR":"bbj-slider","wb":"bbj-list","Z":"bbj-list-button","Ct":"bbj-list-edit","ko":"bbj-progressbar","EU":"bbj-radio","dy":"bbj-drawer","Vq":"bbj-dialog"}')}}]);