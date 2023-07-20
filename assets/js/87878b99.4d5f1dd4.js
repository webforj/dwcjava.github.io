"use strict";(self.webpackChunkdwcj_documentation=self.webpackChunkdwcj_documentation||[]).push([[9047],{5162:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(7294),r=n(6010);const o="tabItem_Ymn6";function l(e){let{children:t,hidden:n,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,l),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>y});var a=n(7462),r=n(7294),o=n(6010),l=n(2466),s=n(6775),i=n(1980),c=n(7392),u=n(12);function m(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function d(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??m(n);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function h(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:n}=e;const a=(0,s.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,i._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function b(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,o=d(e),[l,s]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[i,c]=p({queryString:n,groupId:a}),[m,b]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,u.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:a}),k=(()=>{const e=i??m;return h({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{k&&s(k)}),[k]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!h({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);s(e),c(e),b(e)}),[c,b,o]),tabValues:o}}var k=n(2389);const g="tabList__CuJ",v="tabItem_LNqP";function f(e){let{className:t,block:n,selectedValue:s,selectValue:i,tabValues:c}=e;const u=[],{blockElementScrollPositionUntilNextRender:m}=(0,l.o5)(),d=e=>{const t=e.currentTarget,n=u.indexOf(t),a=c[n].value;a!==s&&(m(t),i(a))},h=e=>{var t;let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=u.indexOf(e.currentTarget)+1;n=u[t]??u[0];break}case"ArrowLeft":{const t=u.indexOf(e.currentTarget)-1;n=u[t]??u[u.length-1];break}}null==(t=n)||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},c.map((e=>{let{value:t,label:n,attributes:l}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>u.push(e),onKeyDown:h,onClick:d},l,{className:(0,o.Z)("tabs__item",v,null==l?void 0:l.className,{"tabs__item--active":s===t})}),n??t)})))}function x(e){let{lazy:t,children:n,selectedValue:a}=e;if(n=Array.isArray(n)?n:[n],t){const e=n.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},n.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function w(e){const t=b(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",g)},r.createElement(f,(0,a.Z)({},e,t)),r.createElement(x,(0,a.Z)({},e,t)))}function y(e){const t=(0,k.Z)();return r.createElement(w,(0,a.Z)({key:String(t)},e))}},2395:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(7294),r=n(2863),o=n(4866),l=n(5162),s=n(4673),i=n(8488);const c=n.p+"assets/images/expand-ba3f00f73da43d91e5b17663c4a7d108.png";function u(e){let{collapse:t,setCollapse:n}=e;const a=r.iv`
    display: flex;
    justify-content: end;
    margin-bottom: -30px;
    background-color: transparent;
    `,o=r.iv`
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
  
  `,l=r.iv`
      filter: invert(var(--inversion-percentage));
  `;return(0,r.tZ)("div",{css:a},(0,r.tZ)("button",{css:o,onClick:()=>{n(!t)}},t?(0,r.tZ)("img",{css:l,src:c,className:"icon-tabler-arrow-bar-up"}):(0,r.tZ)("img",{css:l,src:"data:image/png;base64,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",className:"icon-tabler-arrow-bar-down"})))}function m(e){let{path:t,javaC:n,javaE:c,cssURL:m,javaHighlight:d,height:h,frame:p}=e;const[b,k]=(0,a.useState)(""),[g,v]=(0,a.useState)(""),[f,x]=(0,a.useState)(""),[w,y]=(0,a.useState)(!0),A=r.iv`
		display: flex;
    flex-direction: column;
    /* padding: 10px 15px 0 15px; */
    background-color: var(--code-display-color);
		width: 100%;
    margin-bottom: 16px;
    padding: ${"hidden"==p?"0 15px 0 15px;":"10px 15px 0 15px;"};
    
    `,E=r.iv`
    min-height: 100px;
    height: 100%;
    height: ${h};
  `,C=r.iv`
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

  `;return c&&fetch(c).then((e=>e.text())).then((e=>{v(e)})),n&&fetch(n).then((e=>e.text())).then((e=>{k(e)})),m&&fetch(m).then((e=>e.text())).then((e=>{x(e)})),(0,r.tZ)("div",{css:A},"hidden"!=p?(0,r.tZ)("iframe",{loading:"lazy",src:t,css:E}):null,(0,r.tZ)(s.Z,{css:C,summary:(0,r.tZ)("summary",null,"Show Code")},n&&c?(0,r.tZ)(u,{collapse:w,setCollapse:y}):null,m?(0,r.tZ)(o.Z,null,(0,r.tZ)(l.Z,{value:"Java",label:"Java",default:!0},(0,r.tZ)(i.Z,{className:"codeDemoBlock",language:"java",showLineNumbers:!0,metastring:d},w?b:g)),(0,r.tZ)(l.Z,{value:"CSS",label:"CSS"},(0,r.tZ)(i.Z,{className:"codeDemoBlock",language:"css",showLineNumbers:!0},f))):(0,r.tZ)(o.Z,null,(0,r.tZ)(l.Z,{value:"Java",label:"Java",default:!0},(0,r.tZ)(i.Z,{className:"codeDemoBlock",language:"java",showLineNumbers:!0,metastring:d},w?b:g)))))}},3273:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(7294),r=n(2863);let o=null,l=null;const s={getLatestTag:async function(){return o&&l&&Date.now()-l<36e5?o:async function(){try{const e=await fetch("https://api.github.com/repos/DwcJava/engine/tags"),t=await e.json();return o=t[0].name,l=Date.now(),o}catch(e){return console.error("Error fetching latest tag:",e),null}}()}};function i(e){let{type:t,location:n,top:o,children:l,code:i,suffix:c}=e;const[u,m]=(0,a.useState)("");(0,a.useEffect)((()=>{(async()=>{try{const e=await s.getLatestTag();c||(c=""),m("https://javadoc.io/static/org.dwcj/dwcj-"+t+"/"+e+"/"+n+".html"+c)}catch(e){console.error("Error fetching latest release:",e)}})(),console.log(o)}),[]);const d=r.iv`
    display: inline;

    ${o&&r.iv`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    `}
  `,h=r.iv`
    color: gray;
  `;return(0,r.tZ)(a.Fragment,null,"true"===o&&(0,r.tZ)("div",{css:d},(0,r.tZ)("p",{css:h},"API:\xa0"),(0,r.tZ)("b",null,(0,r.tZ)("a",{href:u,target:"_blank"},"Java"))),"true"!==o&&!i&&(0,r.tZ)("div",{css:d},(0,r.tZ)("a",{href:u,target:"_blank"},l)),"true"!==o&&i&&(0,r.tZ)("div",{css:d},(0,r.tZ)("code",null,(0,r.tZ)("a",{href:u,target:"_blank"},l))))}},7796:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(7294);function r(e){var t,n,r;const[o,l]=(0,a.useState)(null);if((0,a.useEffect)((()=>{fetch("https://basishub.github.io/basis-next/bbj-components.json").then((e=>e.json())).then((t=>{const n=t.components.find((t=>t.tag===e.tag));l(n)}))}),[]),!o)return a.createElement("div",null,"Loading...");const s=null==(t=o.docsTags)?void 0:t.filter((e=>"part"===e.name)),i=null==(n=o.styles)?void 0:n.map((e=>({name:e.name,description:e.docs}))),c=null==(r=o.props)?void 0:r.map((e=>({display:e.reflectToAttr,attr:e.attr,desc:e.docs,type:e.type})));return a.createElement(a.Fragment,null,"parts"==e.table&&a.createElement(a.Fragment,null,a.createElement("table",{className:"custom--table"},a.createElement("thead",null,a.createElement("tr",{key:"header"},a.createElement("th",null,"Part"),a.createElement("th",null,"Description"))),a.createElement("tbody",null,null==s?void 0:s.map((e=>{const[t,n]=e.text.split(" - ");return a.createElement("tr",{key:e.id},a.createElement("td",null,a.createElement("code",null,t)),a.createElement("td",null,n))}))))),"properties"==e.table&&a.createElement(a.Fragment,null,a.createElement("table",{className:"custom--table"},a.createElement("thead",null,a.createElement("tr",{key:"header"},a.createElement("th",null,"Name"),a.createElement("th",null,"Description"))),a.createElement("tbody",null,null==i?void 0:i.map((e=>a.createElement("tr",{key:e.name},a.createElement("td",null,a.createElement("code",null,e.name)),a.createElement("td",null,e.description))))))),"reflects"==e.table&&a.createElement(a.Fragment,null,a.createElement("table",{className:"custom--table"},a.createElement("thead",null,a.createElement("tr",{key:"header"},a.createElement("th",null,"Attribute"),a.createElement("th",null,"Description"),a.createElement("th",null,"Type"))),a.createElement("tbody",null,null==c?void 0:c.map((e=>null!=e.attr&&"&#x2714;"==e.display&&a.createElement("tr",{key:e.attr},a.createElement("td",null,a.createElement("code",null,e.attr)),a.createElement("td",null,e.desc),a.createElement("td",null,e.type))))))),"properties"!=e.table&&"parts"!=e.table&&"reflects"!=e.table&&a.createElement(a.Fragment,null,a.createElement("h4",null,"Shadow Parts"),a.createElement("table",{className:"custom--table"},a.createElement("thead",null,a.createElement("tr",{key:"header"},a.createElement("th",null,"Part"),a.createElement("th",null,"Description"))),a.createElement("tbody",null,null==s?void 0:s.map((e=>{const[t,n]=e.text.split(" - ");return a.createElement("tr",{key:e.id},a.createElement("td",null,a.createElement("code",null,t)),a.createElement("td",null,n))})))),a.createElement("h4",null,"CSS Properties"),a.createElement("table",{className:"custom--table"},a.createElement("thead",null,a.createElement("tr",{key:"header"},a.createElement("th",null,"Name"),a.createElement("th",null,"Description"))),a.createElement("tbody",null,null==i?void 0:i.map((e=>a.createElement("tr",{key:e.name},a.createElement("td",null,a.createElement("code",null,e.name)),a.createElement("td",null,e.description)))))),a.createElement("h4",null,"Reflected Attributes"),a.createElement("table",{className:"custom--table"},a.createElement("thead",null,a.createElement("tr",{key:"header"},a.createElement("th",null,"Attribute"),a.createElement("th",null,"Description"),a.createElement("th",null,"Type"))),a.createElement("tbody",null,null==c?void 0:c.map((e=>null!=e.attr&&"&#x2714;"==e.display&&a.createElement("tr",{key:e.attr},a.createElement("td",null,a.createElement("code",null,e.attr)),a.createElement("td",null,e.desc),a.createElement("td",null,e.type))))))))}},1415:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(7294),r=n(8397);function o(e){return a.createElement(a.Fragment,null,a.createElement(r.Z,e))}},6951:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>c,default:()=>p,frontMatter:()=>i,metadata:()=>u,toc:()=>d});var a=n(7462),r=(n(7294),n(3905)),o=(n(4866),n(5162),n(2395)),l=n(7796),s=n(3273);const i={sidebar_position:10,title:"CheckBox"},c=void 0,u={unversionedId:"components/checkbox",id:"components/checkbox",title:"CheckBox",description:"The CheckBox class creates a component that can be selected or deselected, and which displays its state to the user. When clicked, a check mark appears inside the box, to indicate an affirmative choice (on). When clicked again, the check mark disappears, indicating a negative choice (off).",source:"@site/docs/components/checkbox.md",sourceDirName:"components",slug:"/components/checkbox",permalink:"/docs/components/checkbox",draft:!1,editUrl:"https://github.com/DwcJava/dwcjava.github.io/tree/website/docs/components/checkbox.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10,title:"CheckBox"},sidebar:"tutorialSidebar",previous:{title:"Button",permalink:"/docs/components/button"},next:{title:"Events",permalink:"/docs/category/events-1"}},m={},d=[{value:"Usages",id:"usages",level:2},{value:"Constructors",id:"constructors",level:2},{value:"Text and Positioning",id:"text-and-positioning",level:2},{value:"Indeterminism",id:"indeterminism",level:2},{value:"Events",id:"events",level:2},{value:"Styling",id:"styling",level:2},{value:"Expanses",id:"expanses",level:3},{value:"Shadow Parts",id:"shadow-parts",level:3},{value:"CSS Properties",id:"css-properties",level:3},{value:"Reflected Attributes",id:"reflected-attributes",level:3},{value:"Best Practices",id:"best-practices",level:2}],h={toc:d};function p(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,a.Z)({},h,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(s.Z,{type:"engine",location:"org/dwcj/component/checkbox/CheckBox",top:"true",mdxType:"JavadocLink"}),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"CheckBox")," class creates a component that can be selected or deselected, and which displays its state to the user. When clicked, a check mark appears inside the box, to indicate an affirmative choice (on). When clicked again, the check mark disappears, indicating a negative choice (off)."),(0,r.kt)("h2",{id:"usages"},"Usages"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"CheckBox")," is best used in scenarios where users need to make multiple selections from a list of options. Here are some examples of when to use the ",(0,r.kt)("inlineCode",{parentName:"p"},"CheckBox"),":"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Task or Feature Selection"),": Checkboxes are commonly used when users need to select multiple tasks or features to perform certain actions or configurations.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Preference Settings"),": Applications that involve preference or settings panels often use Checkboxes to allow users to choose multiple options from a set of choices. This is best for options which are not mutually exclusive.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Filtering or Sorting"),": A ",(0,r.kt)("inlineCode",{parentName:"p"},"CheckBox")," can be used in applications that require users to select multiple filters or categories, such as filtering search results or selecting multiple items for further actions."))),(0,r.kt)("h2",{id:"constructors"},"Constructors"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"CheckBox")," class has three constructors:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"CheckBox()"),": Creates an empty ",(0,r.kt)("inlineCode",{parentName:"li"},"CheckBox")," in the unchecked state."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"CheckBox(String text)"),": Creates a ",(0,r.kt)("inlineCode",{parentName:"li"},"CheckBox")," with an attached label in the unchecked state."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"CheckBox(String text, boolean checked)")," Creates a ",(0,r.kt)("inlineCode",{parentName:"li"},"CheckBox")," with an attached label in either the checked or unchecked state, based on the boolean passed (",(0,r.kt)("inlineCode",{parentName:"li"},"true")," for checked, ",(0,r.kt)("inlineCode",{parentName:"li"},"false")," for unchecked).")),(0,r.kt)("p",null,"Here is an example of how to create a ",(0,r.kt)("inlineCode",{parentName:"p"},"CheckBox")," object:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'CheckBox myCheckbox = new CheckBox("Checkbox Text");\n')),(0,r.kt)("h2",{id:"text-and-positioning"},"Text and Positioning"),(0,r.kt)("p",null,"Check boxes can utilize the ",(0,r.kt)("inlineCode",{parentName:"p"},"setText(String text)")," method, which will be positioned near the check box according to the built-in ",(0,r.kt)("inlineCode",{parentName:"p"},"Position"),". Checkboxes have built-in functionality to set text to be displayed either to the right or left of the box. By default, the text will be displayed to the right of the component. Positioning of the horizontal text is supported by use of the ",(0,r.kt)("inlineCode",{parentName:"p"},"HorizontalAlignment")," enum class. Show below are the two settings: ",(0,r.kt)("br",null)),(0,r.kt)(o.Z,{path:"https://hot.bbx.kitchen/webapp/controlsamples?class=component_demos.checkboxdemos.CheckboxHorizontalText",javaE:"https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/java/component_demos/checkboxdemos/CheckboxHorizontalText.java",javaC:"https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/code_snippets/checkbox/Horizontal.txt",cssURL:"https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/resources/css/checkboxstyles/text_styles.css",javaHighlight:"{18}",mdxType:"ComponentDemo"}),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"indeterminism"},"Indeterminism"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"CheckBox")," component supports indeterminism, which is a UI pattern commonly used in forms and lists to indicate that a group of checkboxes has a mixture of checked and unchecked states. This state is represented by a third visual state, typically displayed as a filled square or a dash inside the checkbox. There are a few common use cases associated with the indeterminate status:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Selecting multiple items: Indeterminism is useful when users need to select multiple items from a list or a set of options. It allows users to indicate that they want to select some, but not all, of the available choices.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Hierarchical data: Indeterminism can be employed in scenarios where there is a hierarchical relationship between CheckBoxes. For example, when selecting categories and subcategories, the indeterminate state can represent that some subcategories are selected while others are not, and the parent category is in the indeterminate state."))),(0,r.kt)(o.Z,{path:"https://hot.bbx.kitchen/webapp/controlsamples?class=component_demos.checkboxdemos.CheckboxIndeterminate",javaC:"https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/java/component_demos/checkboxdemos/CheckboxIndeterminate.java",cssURL:"https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/resources/css/checkboxstyles/text_styles.css",height:"225px",mdxType:"ComponentDemo"}),(0,r.kt)("h2",{id:"events"},"Events"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"CheckBox")," class provides methods to add and remove event listeners for the following events:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"Events"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"BlurEvent")),(0,r.kt)("td",{parentName:"tr",align:null},"An event that is triggered when an element loses focus. It occurs when the user interacts with an element, such as clicking inside an input field, and then moves the focus away from that element, typically by clicking outside of it or tabbing to another element on the page.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"FocusEvent")),(0,r.kt)("td",{parentName:"tr",align:null},"An event that is triggered when an element gains focus, opposite of a blur event. It occurs when the user interacts with an element, typically by clicking inside an input field or navigating to it using the keyboard's tab key, causing the element to become active and ready to receive user input.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"CheckedEvent")),(0,r.kt)("td",{parentName:"tr",align:null},"An event that is triggered when the state of a component changes and becomes checked. It occurs when the user interacts with a checkbox element by clicking or tapping on it, causing the checkbox to transition from an unchecked state to a checked state.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"UncheckedEvent")),(0,r.kt)("td",{parentName:"tr",align:null},"An event that is triggered when the state of a component changes and becomes unchecked. It occurs when the user interacts with a checkbox element by clicking or tapping on it, causing the checkbox to transition from an checked state to a unchecked state.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"ToggleEvent")),(0,r.kt)("td",{parentName:"tr",align:null},'A ToggleEvent fires a CheckBox or a similar UI element changes its state between "on" and "off" or "active" and "inactive." It represents the action of toggling a setting, feature, or state of an element such as a CheckBox or Radio Button.')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"MouseEnterEvent")),(0,r.kt)("td",{parentName:"tr",align:null},"An event that is triggered when the mouse cursor enters the boundaries of an element. It occurs when the user moves the mouse pointer over the specified element, indicating that the mouse has entered its area.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"MouseExitEvent")),(0,r.kt)("td",{parentName:"tr",align:null},"An event that is triggered when the mouse cursor exits the boundaries of an element. It occurs when the user moves the mouse pointer out of the boundaries of the specified element, indicating that the mouse has exited its area.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"RightMouseDownEvent")),(0,r.kt)("td",{parentName:"tr",align:null},"An event refers to an event that is triggered when the user presses the right mouse button while the cursor is over an element. It allows you to capture the specific action of the user's right mouse button being pressed down within the boundaries of the element.")))),(0,r.kt)("br",null),(0,r.kt)("p",null,"To add an event listener, use the appropriate method:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"myCheckBox.addCheckListener( e -> {\n  //Executed when the event fires\n});\n")),(0,r.kt)("p",null,"Additional syntactic sugar methods, or aliases, have been added to allow for alternative addition of events by using the ",(0,r.kt)("inlineCode",{parentName:"p"},"on")," prefix followed by the event, such as:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"myCheckBox.onCheck( e -> {\n    //Executed when the event fires\n});\n")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Using the event payload that comes with various events to attain information reduces the number of round trips made when instead querying the component for the required information. ")),(0,r.kt)("p",null,"To remove an event listener, use the appropriate method:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"myCheckBox.removeCheckListener(listener);\n")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"For a method to be removed via the appropriate removeListener method, the signature of the method must be saved. ")),(0,r.kt)(o.Z,{path:"https://hot.bbx.kitchen/webapp/controlsamples?class=component_demos.checkboxdemos.CheckboxEventDemo",javaC:"https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/java/component_demos/checkboxdemos/CheckboxEventDemo.java",cssURL:"https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/resources/css/checkboxstyles/text_styles.css",mdxType:"ComponentDemo"}),(0,r.kt)("h2",{id:"styling"},"Styling"),(0,r.kt)("h3",{id:"expanses"},"Expanses"),(0,r.kt)("p",null,"There are five ",(0,r.kt)("inlineCode",{parentName:"p"},"CheckBox")," expanses that are supported which allow for quick styling without using CSS.\nExpanses are supported by use of the ",(0,r.kt)("inlineCode",{parentName:"p"},"Expanse")," enum class. Below are the expanses supported for the checkbox component: ",(0,r.kt)("br",null)),(0,r.kt)(o.Z,{path:"https://hot.bbx.kitchen/webapp/controlsamples?class=component_demos.checkboxdemos.CheckboxExpanseDemo",javaE:"https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/java/component_demos/checkboxdemos/CheckboxExpanseDemo.java",javaC:"https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/code_snippets/checkbox/Expanse.txt",cssURL:"https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/resources/css/checkboxstyles/expanse_styles.css",javaHighlight:"{17,21,25,29,33}",mdxType:"ComponentDemo"}),(0,r.kt)("br",null),(0,r.kt)("h3",{id:"shadow-parts"},"Shadow Parts"),(0,r.kt)("p",null,"These are the various parts of the shadow DOM for the component, which will be required when styling via CSS is desired."),(0,r.kt)(l.Z,{tag:n(5731).XZ,table:"parts",mdxType:"TableBuilder"}),(0,r.kt)("h3",{id:"css-properties"},"CSS Properties"),(0,r.kt)("p",null,"These are the various CSS properties that are used in the component, with a short description of their use."),(0,r.kt)(l.Z,{tag:n(5731).XZ,table:"properties",mdxType:"TableBuilder"}),(0,r.kt)("h3",{id:"reflected-attributes"},"Reflected Attributes"),(0,r.kt)("p",null,"The reflected attributes of a component will be shown as attributes in the rendered HTML element for the component in the DOM. This means that styling can be applied using these attributes."),(0,r.kt)(l.Z,{tag:n(5731).XZ,table:"reflects",mdxType:"TableBuilder"}),(0,r.kt)("h2",{id:"best-practices"},"Best Practices"),(0,r.kt)("p",null,"To ensure an optimal user experience when using the ",(0,r.kt)("inlineCode",{parentName:"p"},"Checkbox")," component, consider the following best practices:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Clearly Label Options"),": Provide clear and concise labels for each ",(0,r.kt)("inlineCode",{parentName:"p"},"CheckBox")," option to accurately describe the choice. Labels should be easy to understand and distinguish from one another.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Group CheckBoxes"),": Group related Checkboxes together to indicate their association. This helps users understand that multiple options can be selected within a specific group.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Provide Default Selection"),": If applicable, consider providing a default selection for CheckBoxes to guide users when they first encounter the options. The default selection should align with the most common or preferred choice.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Indeterminism"),": If a parent ",(0,r.kt)("inlineCode",{parentName:"p"},"CheckBox")," component has multiple components belonging to it in a way in which some can be checked on and others checked off, use the indeterminate property to show that not all ",(0,r.kt)("inlineCode",{parentName:"p"},"CheckBox")," components are checked or unchecked."))))}p.isMDXComponent=!0},5731:e=>{e.exports=JSON.parse('{"LN":"bbj-app-layout","zx":"bbj-button","Kx":"bbj-cedit","XZ":"bbj-checkbox","gN":"bbj-editbox","iR":"bbj-slider","wb":"bbj-list","Z":"bbj-list-button","Ct":"bbj-list-edit","ko":"bbj-progressbar","EU":"bbj-radio","dy":"bbj-drawer","Vq":"bbj-dialog"}')}}]);