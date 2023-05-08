"use strict";(self.webpackChunkdwcj_documentation=self.webpackChunkdwcj_documentation||[]).push([[2565],{5162:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(7294),l=a(6010);const r="tabItem_Ymn6";function o(e){let{children:t,hidden:a,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,l.Z)(r,o),hidden:a},t)}},4866:(e,t,a)=>{a.d(t,{Z:()=>x});var n=a(7462),l=a(7294),r=a(6010),o=a(2466),s=a(6775),i=a(1980),u=a(7392),c=a(12);function m(e){return function(e){return l.Children.map(e,(e=>{if((0,l.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:l}}=e;return{value:t,label:a,attributes:n,default:l}}))}function d(e){const{values:t,children:a}=e;return(0,l.useMemo)((()=>{const e=t??m(a);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function p(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:a}=e;const n=(0,s.k6)(),r=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,i._X)(r),(0,l.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(n.location.search);t.set(r,e),n.replace({...n.location,search:t.toString()})}),[r,n])]}function h(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,r=d(e),[o,s]=(0,l.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:r}))),[i,u]=b({queryString:a,groupId:n}),[m,h]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,r]=(0,c.Nk)(a);return[n,(0,l.useCallback)((e=>{a&&r.set(e)}),[a,r])]}({groupId:n}),v=(()=>{const e=i??m;return p({value:e,tabValues:r})?e:null})();(0,l.useLayoutEffect)((()=>{v&&s(v)}),[v]);return{selectedValue:o,selectValue:(0,l.useCallback)((e=>{if(!p({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);s(e),u(e),h(e)}),[u,h,r]),tabValues:r}}var v=a(2389);const g="tabList__CuJ",A="tabItem_LNqP";function w(e){let{className:t,block:a,selectedValue:s,selectValue:i,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:m}=(0,o.o5)(),d=e=>{const t=e.currentTarget,a=c.indexOf(t),n=u[a].value;n!==s&&(m(t),i(n))},p=e=>{var t;let a=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;a=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;a=c[t]??c[c.length-1];break}}null==(t=a)||t.focus()};return l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":a},t)},u.map((e=>{let{value:t,label:a,attributes:o}=e;return l.createElement("li",(0,n.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>c.push(e),onKeyDown:p,onClick:d},o,{className:(0,r.Z)("tabs__item",A,null==o?void 0:o.className,{"tabs__item--active":s===t})}),a??t)})))}function f(e){let{lazy:t,children:a,selectedValue:n}=e;if(a=Array.isArray(a)?a:[a],t){const e=a.find((e=>e.props.value===n));return e?(0,l.cloneElement)(e,{className:"margin-top--md"}):null}return l.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function k(e){const t=h(e);return l.createElement("div",{className:(0,r.Z)("tabs-container",g)},l.createElement(w,(0,n.Z)({},e,t)),l.createElement(f,(0,n.Z)({},e,t)))}function x(e){const t=(0,v.Z)();return l.createElement(k,(0,n.Z)({key:String(t)},e))}},2395:(e,t,a)=>{a.d(t,{Z:()=>m});var n=a(7294),l=a(2863),r=a(4866),o=a(5162),s=a(4673),i=a(8488);const u=a.p+"assets/images/expand-ba3f00f73da43d91e5b17663c4a7d108.png";function c(e){let{collapse:t,setCollapse:a}=e;const n=l.iv`
    display: flex;
    justify-content: end;
    margin-bottom: -30px;
    background-color: transparent;
    `,r=l.iv`
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
  
  `,o=l.iv`
      filter: invert(var(--inversion-percentage));
  `;return(0,l.tZ)("div",{css:n},(0,l.tZ)("button",{css:r,onClick:()=>{a(!t)}},t?(0,l.tZ)("img",{css:o,src:u,className:"icon-tabler-arrow-bar-up"}):(0,l.tZ)("img",{css:o,src:"data:image/png;base64,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",className:"icon-tabler-arrow-bar-down"})))}function m(e){let{path:t,javaC:a,javaE:u,cssURL:m,javaHighlight:d,height:p}=e;const[b,h]=(0,n.useState)(""),[v,g]=(0,n.useState)(""),[A,w]=(0,n.useState)(""),[f,k]=(0,n.useState)(!0),x=l.iv`
		display: flex;
    flex-direction: column;
    padding: 10px 15px 0 15px;
    background-color: var(--code-display-color);
		width: 100%;
    margin-bottom: 16px;
    
    `,L=l.iv`
    min-height: 100px;
    height: 100%;
    height: ${p};
  `,y=l.iv`
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

  `;return u&&fetch(u).then((e=>e.text())).then((e=>{g(e)})),a&&fetch(a).then((e=>e.text())).then((e=>{h(e)})),m&&fetch(m).then((e=>e.text())).then((e=>{w(e)})),(0,l.tZ)("div",{css:x},(0,l.tZ)("iframe",{loading:"lazy",src:t,css:L}),(0,l.tZ)(s.Z,{css:y,summary:(0,l.tZ)("summary",null,"Show Code")},a&&u?(0,l.tZ)(c,{collapse:f,setCollapse:k}):null,m?(0,l.tZ)(r.Z,null,(0,l.tZ)(o.Z,{value:"Java",label:"Java",default:!0},(0,l.tZ)(i.Z,{className:"codeDemoBlock",language:"java",showLineNumbers:!0,metastring:d},f?b:v)),(0,l.tZ)(o.Z,{value:"CSS",label:"CSS"},(0,l.tZ)(i.Z,{className:"codeDemoBlock",language:"css",showLineNumbers:!0},A))):(0,l.tZ)(r.Z,null,(0,l.tZ)(o.Z,{value:"Java",label:"Java",default:!0},(0,l.tZ)(i.Z,{className:"codeDemoBlock",language:"java",showLineNumbers:!0,metastring:d},f?b:v)))))}},1415:(e,t,a)=>{a.d(t,{Z:()=>r});var n=a(7294),l=a(8397);function r(e){return n.createElement(n.Fragment,null,n.createElement(l.Z,e))}},689:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=a(7462),l=(a(7294),a(3905)),r=a(2395);const o={sidebar_position:50,title:"Label"},s=void 0,i={unversionedId:"components/label",id:"components/label",title:"Label",description:"API:&nbsp;",source:"@site/docs/components/label.md",sourceDirName:"components",slug:"/components/label",permalink:"/docs/components/label",draft:!1,editUrl:"https://github.com/DwcJava/dwcjava.github.io/tree/website/docs/components/label.md",tags:[],version:"current",sidebarPosition:50,frontMatter:{sidebar_position:50,title:"Label"},sidebar:"tutorialSidebar",previous:{title:"Field",permalink:"/docs/components/field"},next:{title:"Layouts",permalink:"/docs/category/layouts-1"}},u={},c=[{value:"Constructors",id:"constructors",level:2},{value:"Properties",id:"properties",level:2},{value:"HTML Injection",id:"html-injection",level:3},{value:"Line Wrapping",id:"line-wrapping",level:3},{value:"Alignment",id:"alignment",level:3},{value:"Events",id:"events",level:2},{value:"Example",id:"example",level:2}],m={toc:c};function d(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("div",{style:{width:"100%",display:"flex",justifyContent:"flex-end"}},(0,l.kt)("p",{style:{color:"gray"}},"API:\xa0"),(0,l.kt)("b",null,(0,l.kt)("a",{href:"https://javadoc.io/static/org.dwcj/dwcj-engine/0.15.0/org/dwcj/controls/label/Label.html",style:{justifySelf:"flex-end"}}," Java "))),(0,l.kt)("p",null,"The Label class is a Java class in the org.dwcj.component.label package. It is used to create a label object. Here's an example of how to create a Label object:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'Label myLabel = new Label("Hello, world!");\n')),(0,l.kt)("h2",{id:"constructors"},"Constructors"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"Label")," class has three constructors:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"Label()"),": Creates an empty label."),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"Label(String text)"),": Creates a label with the specified text."),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"Label(String text, boolean wrap)"),": Creates a label with the specified text and sets whether or not the text should be wrapped.")),(0,l.kt)("p",null,"Here's an example of how to create a Label object using each constructor:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'// Creates an empty label.\nLabel emptyLabel = new Label();\n\n// Creates a label with the specified text.\nLabel textLabel = new Label("Hello, world!");\n\n// Creates a label with the specified text and sets whether or not the text should be wrapped.\nLabel wrappedLabel = new Label("Lorem ipsum dolor sit amet, consectetur adipiscing elit.", true);\n\n')),(0,l.kt)("h2",{id:"properties"},"Properties"),(0,l.kt)("p",null,"The label's text can be set either at creation using the parameterized constructor, or by utilizing the inherited ",(0,l.kt)("inlineCode",{parentName:"p"},"setText()")," method. "),(0,l.kt)("h3",{id:"html-injection"},"HTML Injection"),(0,l.kt)("p",null,"In addition to using the label as static text, it can also be used as an HTML tag within your code. Simply set the label's text to the desired HTML tag with the various attributes, class names, etc, and\nthe label will be replaced with the desired HTML element."),(0,l.kt)(r.Z,{path:"https://hot.bbx.kitchen/webapp/controlsamples?class=control_demos.labeldemos.LabelDemo",javaE:"https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/java/control_demos/labeldemos/LabelDemo.java",javaC:"https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/code_snippets/label/Demo.txt",cssURL:"https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/resources/css/labelstyles/text_styles.css",javaHighlight:"{16-18}",height:"250px",mdxType:"ComponentDemo"}),(0,l.kt)("h3",{id:"line-wrapping"},"Line Wrapping"),(0,l.kt)("p",null,"To set whether or not the text should be wrapped, use the setWrap method:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"myLabel.setWrap(false);\n")),(0,l.kt)("br",null),(0,l.kt)("h3",{id:"alignment"},"Alignment"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"Label")," class implements the TextAlignable interface, which allows you to set the text alignment of the label. The possible alignment values are Alignment.LEFT, Alignment.MIDDLE, and Alignment.RIGHT. To set the alignment, use the setTextAlignment method:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"myLabel.setTextAlignment(Alignment.MIDDLE);\n")),(0,l.kt)("h2",{id:"events"},"Events"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"Label")," class provides methods to add and remove event listeners for the following events:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"MouseEnterEvent")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"MouseExitEvent")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"RightMouseDownEvent"))),(0,l.kt)("p",null,"To add an event listener, use the appropriate method:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"myLabel.addMouseEnterListener( e -> {\n  //Executed when the event fires\n});\n")),(0,l.kt)("p",null,"Additional syntactic sugar methods, or aliases, have been added to allow for alternative addition of events by using the ",(0,l.kt)("inlineCode",{parentName:"p"},"on")," prefix followed by the event, such as:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"myLabel.onMouseEnter( e -> {\n    //Executed when the event fires\n});\n")),(0,l.kt)("p",null,"To remove an event listener, use the appropriate method:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"myLabel.removeMouseEnterListener(listener);\n")),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},"For a method to be removed via the appropriate removeListener method, the signature of the method must be saved. ")),(0,l.kt)("h2",{id:"example"},"Example"),(0,l.kt)("p",null,"Here is an example of how to use the ",(0,l.kt)("inlineCode",{parentName:"p"},"Label")," class to create a simple UI component which allows the user to hover over the text to change the message:"),(0,l.kt)(r.Z,{path:"https://hot.bbx.kitchen/webapp/controlsamples?class=control_demos.labeldemos.LabelSample",javaE:"https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/java/control_demos/labeldemos/LabelSample.java",javaC:"https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/code_snippets/label/Sample.txt",cssURL:"https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/resources/css/labelstyles/text_styles.css",javaHighlight:"{43-45}",mdxType:"ComponentDemo"}),(0,l.kt)("br",null))}d.isMDXComponent=!0}}]);