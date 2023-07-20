"use strict";(self.webpackChunkdwcj_documentation=self.webpackChunkdwcj_documentation||[]).push([[9580],{5162:(e,t,a)=>{a.d(t,{Z:()=>o});var l=a(7294),n=a(6010);const r="tabItem_Ymn6";function o(e){let{children:t,hidden:a,className:o}=e;return l.createElement("div",{role:"tabpanel",className:(0,n.Z)(r,o),hidden:a},t)}},4866:(e,t,a)=>{a.d(t,{Z:()=>y});var l=a(7462),n=a(7294),r=a(6010),o=a(2466),i=a(6775),s=a(1980),c=a(7392),u=a(12);function d(e){return function(e){return n.Children.map(e,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:a,attributes:l,default:n}}=e;return{value:t,label:a,attributes:l,default:n}}))}function m(e){const{values:t,children:a}=e;return(0,n.useMemo)((()=>{const e=t??d(a);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function p(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:a}=e;const l=(0,i.k6)(),r=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s._X)(r),(0,n.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(l.location.search);t.set(r,e),l.replace({...l.location,search:t.toString()})}),[r,l])]}function f(e){const{defaultValue:t,queryString:a=!1,groupId:l}=e,r=m(e),[o,i]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const l=a.find((e=>e.default))??a[0];if(!l)throw new Error("Unexpected error: 0 tabValues");return l.value}({defaultValue:t,tabValues:r}))),[s,c]=h({queryString:a,groupId:l}),[d,f]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[l,r]=(0,u.Nk)(a);return[l,(0,n.useCallback)((e=>{a&&r.set(e)}),[a,r])]}({groupId:l}),b=(()=>{const e=s??d;return p({value:e,tabValues:r})?e:null})();(0,n.useLayoutEffect)((()=>{b&&i(b)}),[b]);return{selectedValue:o,selectValue:(0,n.useCallback)((e=>{if(!p({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);i(e),c(e),f(e)}),[c,f,r]),tabValues:r}}var b=a(2389);const g="tabList__CuJ",v="tabItem_LNqP";function A(e){let{className:t,block:a,selectedValue:i,selectValue:s,tabValues:c}=e;const u=[],{blockElementScrollPositionUntilNextRender:d}=(0,o.o5)(),m=e=>{const t=e.currentTarget,a=u.indexOf(t),l=c[a].value;l!==i&&(d(t),s(l))},p=e=>{var t;let a=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const t=u.indexOf(e.currentTarget)+1;a=u[t]??u[0];break}case"ArrowLeft":{const t=u.indexOf(e.currentTarget)-1;a=u[t]??u[u.length-1];break}}null==(t=a)||t.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":a},t)},c.map((e=>{let{value:t,label:a,attributes:o}=e;return n.createElement("li",(0,l.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>u.push(e),onKeyDown:p,onClick:m},o,{className:(0,r.Z)("tabs__item",v,null==o?void 0:o.className,{"tabs__item--active":i===t})}),a??t)})))}function k(e){let{lazy:t,children:a,selectedValue:l}=e;if(a=Array.isArray(a)?a:[a],t){const e=a.find((e=>e.props.value===l));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==l}))))}function E(e){const t=f(e);return n.createElement("div",{className:(0,r.Z)("tabs-container",g)},n.createElement(A,(0,l.Z)({},e,t)),n.createElement(k,(0,l.Z)({},e,t)))}function y(e){const t=(0,b.Z)();return n.createElement(E,(0,l.Z)({key:String(t)},e))}},2395:(e,t,a)=>{a.d(t,{Z:()=>d});var l=a(7294),n=a(2863),r=a(4866),o=a(5162),i=a(4673),s=a(8488);const c=a.p+"assets/images/expand-ba3f00f73da43d91e5b17663c4a7d108.png";function u(e){let{collapse:t,setCollapse:a}=e;const l=n.iv`
    display: flex;
    justify-content: end;
    margin-bottom: -30px;
    background-color: transparent;
    `,r=n.iv`
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
  
  `,o=n.iv`
      filter: invert(var(--inversion-percentage));
  `;return(0,n.tZ)("div",{css:l},(0,n.tZ)("button",{css:r,onClick:()=>{a(!t)}},t?(0,n.tZ)("img",{css:o,src:c,className:"icon-tabler-arrow-bar-up"}):(0,n.tZ)("img",{css:o,src:"data:image/png;base64,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",className:"icon-tabler-arrow-bar-down"})))}function d(e){let{path:t,javaC:a,javaE:c,cssURL:d,javaHighlight:m,height:p,frame:h}=e;const[f,b]=(0,l.useState)(""),[g,v]=(0,l.useState)(""),[A,k]=(0,l.useState)(""),[E,y]=(0,l.useState)(!0),w=n.iv`
		display: flex;
    flex-direction: column;
    /* padding: 10px 15px 0 15px; */
    background-color: var(--code-display-color);
		width: 100%;
    margin-bottom: 16px;
    padding: ${"hidden"==h?"0 15px 0 15px;":"10px 15px 0 15px;"};
    
    `,C=n.iv`
    min-height: 100px;
    height: 100%;
    height: ${p};
  `,N=n.iv`
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

  `;return c&&fetch(c).then((e=>e.text())).then((e=>{v(e)})),a&&fetch(a).then((e=>e.text())).then((e=>{b(e)})),d&&fetch(d).then((e=>e.text())).then((e=>{k(e)})),(0,n.tZ)("div",{css:w},"hidden"!=h?(0,n.tZ)("iframe",{loading:"lazy",src:t,css:C}):null,(0,n.tZ)(i.Z,{css:N,summary:(0,n.tZ)("summary",null,"Show Code")},a&&c?(0,n.tZ)(u,{collapse:E,setCollapse:y}):null,d?(0,n.tZ)(r.Z,null,(0,n.tZ)(o.Z,{value:"Java",label:"Java",default:!0},(0,n.tZ)(s.Z,{className:"codeDemoBlock",language:"java",showLineNumbers:!0,metastring:m},E?f:g)),(0,n.tZ)(o.Z,{value:"CSS",label:"CSS"},(0,n.tZ)(s.Z,{className:"codeDemoBlock",language:"css",showLineNumbers:!0},A))):(0,n.tZ)(r.Z,null,(0,n.tZ)(o.Z,{value:"Java",label:"Java",default:!0},(0,n.tZ)(s.Z,{className:"codeDemoBlock",language:"java",showLineNumbers:!0,metastring:m},E?f:g)))))}},3273:(e,t,a)=>{a.d(t,{Z:()=>s});var l=a(7294),n=a(2863);let r=null,o=null;const i={getLatestTag:async function(){return r&&o&&Date.now()-o<36e5?r:async function(){try{const e=await fetch("https://api.github.com/repos/DwcJava/engine/tags"),t=await e.json();return r=t[0].name,o=Date.now(),r}catch(e){return console.error("Error fetching latest tag:",e),null}}()}};function s(e){let{type:t,location:a,top:r,children:o,code:s,suffix:c}=e;const[u,d]=(0,l.useState)("");(0,l.useEffect)((()=>{(async()=>{try{const e=await i.getLatestTag();c||(c=""),d("https://javadoc.io/static/org.dwcj/dwcj-"+t+"/"+e+"/"+a+".html"+c)}catch(e){console.error("Error fetching latest release:",e)}})(),console.log(r)}),[]);const m=n.iv`
    display: inline;

    ${r&&n.iv`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    `}
  `,p=n.iv`
    color: gray;
  `;return(0,n.tZ)(l.Fragment,null,"true"===r&&(0,n.tZ)("div",{css:m},(0,n.tZ)("p",{css:p},"API:\xa0"),(0,n.tZ)("b",null,(0,n.tZ)("a",{href:u,target:"_blank"},"Java"))),"true"!==r&&!s&&(0,n.tZ)("div",{css:m},(0,n.tZ)("a",{href:u,target:"_blank"},o)),"true"!==r&&s&&(0,n.tZ)("div",{css:m},(0,n.tZ)("code",null,(0,n.tZ)("a",{href:u,target:"_blank"},o))))}},7796:(e,t,a)=>{a.d(t,{Z:()=>n});var l=a(7294);function n(e){var t,a,n;const[r,o]=(0,l.useState)(null);if((0,l.useEffect)((()=>{fetch("https://basishub.github.io/basis-next/bbj-components.json").then((e=>e.json())).then((t=>{const a=t.components.find((t=>t.tag===e.tag));o(a)}))}),[]),!r)return l.createElement("div",null,"Loading...");const i=null==(t=r.docsTags)?void 0:t.filter((e=>"part"===e.name)),s=null==(a=r.styles)?void 0:a.map((e=>({name:e.name,description:e.docs}))),c=null==(n=r.props)?void 0:n.map((e=>({display:e.reflectToAttr,attr:e.attr,desc:e.docs,type:e.type})));return l.createElement(l.Fragment,null,"parts"==e.table&&l.createElement(l.Fragment,null,l.createElement("table",{className:"custom--table"},l.createElement("thead",null,l.createElement("tr",{key:"header"},l.createElement("th",null,"Part"),l.createElement("th",null,"Description"))),l.createElement("tbody",null,null==i?void 0:i.map((e=>{const[t,a]=e.text.split(" - ");return l.createElement("tr",{key:e.id},l.createElement("td",null,l.createElement("code",null,t)),l.createElement("td",null,a))}))))),"properties"==e.table&&l.createElement(l.Fragment,null,l.createElement("table",{className:"custom--table"},l.createElement("thead",null,l.createElement("tr",{key:"header"},l.createElement("th",null,"Name"),l.createElement("th",null,"Description"))),l.createElement("tbody",null,null==s?void 0:s.map((e=>l.createElement("tr",{key:e.name},l.createElement("td",null,l.createElement("code",null,e.name)),l.createElement("td",null,e.description))))))),"reflects"==e.table&&l.createElement(l.Fragment,null,l.createElement("table",{className:"custom--table"},l.createElement("thead",null,l.createElement("tr",{key:"header"},l.createElement("th",null,"Attribute"),l.createElement("th",null,"Description"),l.createElement("th",null,"Type"))),l.createElement("tbody",null,null==c?void 0:c.map((e=>null!=e.attr&&"&#x2714;"==e.display&&l.createElement("tr",{key:e.attr},l.createElement("td",null,l.createElement("code",null,e.attr)),l.createElement("td",null,e.desc),l.createElement("td",null,e.type))))))),"properties"!=e.table&&"parts"!=e.table&&"reflects"!=e.table&&l.createElement(l.Fragment,null,l.createElement("h4",null,"Shadow Parts"),l.createElement("table",{className:"custom--table"},l.createElement("thead",null,l.createElement("tr",{key:"header"},l.createElement("th",null,"Part"),l.createElement("th",null,"Description"))),l.createElement("tbody",null,null==i?void 0:i.map((e=>{const[t,a]=e.text.split(" - ");return l.createElement("tr",{key:e.id},l.createElement("td",null,l.createElement("code",null,t)),l.createElement("td",null,a))})))),l.createElement("h4",null,"CSS Properties"),l.createElement("table",{className:"custom--table"},l.createElement("thead",null,l.createElement("tr",{key:"header"},l.createElement("th",null,"Name"),l.createElement("th",null,"Description"))),l.createElement("tbody",null,null==s?void 0:s.map((e=>l.createElement("tr",{key:e.name},l.createElement("td",null,l.createElement("code",null,e.name)),l.createElement("td",null,e.description)))))),l.createElement("h4",null,"Reflected Attributes"),l.createElement("table",{className:"custom--table"},l.createElement("thead",null,l.createElement("tr",{key:"header"},l.createElement("th",null,"Attribute"),l.createElement("th",null,"Description"),l.createElement("th",null,"Type"))),l.createElement("tbody",null,null==c?void 0:c.map((e=>null!=e.attr&&"&#x2714;"==e.display&&l.createElement("tr",{key:e.attr},l.createElement("td",null,l.createElement("code",null,e.attr)),l.createElement("td",null,e.desc),l.createElement("td",null,e.type))))))))}},1415:(e,t,a)=>{a.d(t,{Z:()=>r});var l=a(7294),n=a(8397);function r(e){return l.createElement(l.Fragment,null,l.createElement(n.Z,e))}},4588:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var l=a(7462),n=(a(7294),a(3905)),r=(a(2395),a(7796),a(3273));const o={sidebar_position:1,title:"ColorField",slug:"colorfield"},i=void 0,s={unversionedId:"components/fields/color-field",id:"components/fields/color-field",title:"ColorField",description:"The ColorField class is a Field component, and as such shares all of the commonalities belonging to a Field. Please refer to the Field documentation page for an overview of Field properties, events, and other important information.",source:"@site/docs/components/fields/color-field.md",sourceDirName:"components/fields",slug:"/components/fields/colorfield",permalink:"/docs/components/fields/colorfield",draft:!1,editUrl:"https://github.com/DwcJava/dwcjava.github.io/tree/website/docs/components/fields/color-field.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"ColorField",slug:"colorfield"},sidebar:"tutorialSidebar",previous:{title:"Field",permalink:"/docs/components/fields/"},next:{title:"DateField",permalink:"/docs/components/fields/datefield"}},c={},u=[{value:"Usages",id:"usages",level:3},{value:"Constructors",id:"constructors",level:3},{value:"Color Code Format",id:"color-code-format",level:3},{value:"Static Utilities",id:"static-utilities",level:3},{value:"Best Practices",id:"best-practices",level:3}],d={toc:u};function m(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,l.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)(r.Z,{type:"engine",location:"org/dwcj/component/field/ColorField",top:"true",mdxType:"JavadocLink"}),(0,n.kt)("admonition",{type:"success"},(0,n.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,n.kt)("strong",{parentName:"mdxAdmonitionTitle"},"Important")),(0,n.kt)("p",{parentName:"admonition"},"The ",(0,n.kt)("inlineCode",{parentName:"p"},"ColorField")," class is a Field component, and as such shares all of the commonalities belonging to a Field. Please refer to the ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("a",{parentName:"strong",href:"/docs/components/fields"},"Field documentation page"))," for an overview of Field properties, events, and other important information.")),(0,n.kt)("p",null,"The color field is a user interface component that allows users to select colors. It provides an intuitive and visually appealing way to choose colors for various purposes."),(0,n.kt)("h3",{id:"usages"},"Usages"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"ColorField")," is best used in scenarios where color selection is a crucial part of the user interface or application functionality. This section outlines the best practices and scenarios for using the color field component effectively."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Graphic Design and Image Editing Tools"),": Color fields are essential in applications that involve graphic design, image editing, or any task that requires selecting or modifying colors.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Theme Customization"),": If your application allows users to customize themes, using a color field enables them to choose colors for different UI elements, such as backgrounds, text, buttons, etc.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Data Visualization"),": Color fields are valuable in applications that involve data visualization, as they allow users to select colors for charts, graphs, heatmaps, and other visual representations.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Form Inputs"),": When designing forms that require color inputs, using a color field simplifies the color selection process for users."))),(0,n.kt)("h3",{id:"constructors"},"Constructors"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"ColorField")," class has four constructors:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("inlineCode",{parentName:"li"},"ColorField(String label, Color color)"),": Creates a ",(0,n.kt)("inlineCode",{parentName:"li"},"ColorField")," with a given label and color."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("inlineCode",{parentName:"li"},"ColorField(String label)"),": Creates a ",(0,n.kt)("inlineCode",{parentName:"li"},"ColorField")," with a given label but with no pre-populated color."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("inlineCode",{parentName:"li"},"ColorField(Color color)"),": Creates a ",(0,n.kt)("inlineCode",{parentName:"li"},"ColorField")," with a given color, but without a label."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("inlineCode",{parentName:"li"},"ColorField()"),": Creates a ",(0,n.kt)("inlineCode",{parentName:"li"},"ColorField")," without any provided information.")),(0,n.kt)("h3",{id:"color-code-format"},"Color Code Format"),(0,n.kt)("p",null,"Currently, the ",(0,n.kt)("inlineCode",{parentName:"p"},"ColorField")," supports ",(0,n.kt)("inlineCode",{parentName:"p"},"#RRGGBB")," hexadecimal format. Only simple colors (without alpha channel) are allowed in the picker interface. Additionally, the ",(0,n.kt)("inlineCode",{parentName:"p"},"ColorField")," comes along with a various methods that interact with the ",(0,n.kt)("inlineCode",{parentName:"p"},"java.awt.Color")," class to add flexibility."),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"The component's presentation may vary substantially from one browser and/or platform to another. It might be a simple textual field that automatically validates to ensure that the color information is entered in the proper format, a platform-standard color picker, or some kind of custom color picker window.")),(0,n.kt)("h3",{id:"static-utilities"},"Static Utilities"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"ColorField")," class also provides the following static utility methods:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"Color fromHex(String hex)"),": Convert a color string in hex format to a ",(0,n.kt)("inlineCode",{parentName:"p"},"Color")," object which can then be utilized with this class, or elsewhere.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"String toHex(Color color)"),": Convert the given value to the corresponding hex representation.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"boolean isValidHexColor(String hex)"),": Check if the given value is a valid 7 character hex color."))),(0,n.kt)("h3",{id:"best-practices"},"Best Practices"),(0,n.kt)("p",null,"To ensure an optimal user experience when using the ",(0,n.kt)("inlineCode",{parentName:"p"},"ColorField")," component, consider the following best practices:"),(0,n.kt)("p",null," ",(0,n.kt)("strong",{parentName:"p"},"Consider Contextual Assistance"),": Provide contextual assistance, such as tooltips or inline help, to guide users in understanding the purpose and usage of the color field component."))}m.isMDXComponent=!0}}]);