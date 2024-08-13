"use strict";(self.webpackChunkdwcj_documentation=self.webpackChunkdwcj_documentation||[]).push([[3870],{580:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>a,metadata:()=>i,toc:()=>d});var r=o(5893),n=o(1151),s=(o(6957),o(3273));const a={sidebar_position:15,title:"Browser Console"},l=void 0,i={id:"advanced_topics/browser-console",title:"Browser Console",description:"Using the browser's console to print valuable program information is an integral part of the development process. The BrowserConsole utility class comes with a slew of features to enhance logging capabilities.",source:"@site/docs/advanced_topics/browser-console.md",sourceDirName:"advanced_topics",slug:"/advanced_topics/browser-console",permalink:"/docs/advanced_topics/browser-console",draft:!1,unlisted:!1,editUrl:"https://github.com/webforj/webforj-docs/tree/website/docs/advanced_topics/browser-console.md",tags:[],version:"current",sidebarPosition:15,frontMatter:{sidebar_position:15,title:"Browser Console"},sidebar:"documentationSidebar",previous:{title:"Advanced Topics",permalink:"/docs/category/advanced-topics"},next:{title:"Web Storage",permalink:"/docs/advanced_topics/web-storage"}},c={},d=[{value:"Instance",id:"instance",level:2},{value:"Styling",id:"styling",level:2},{value:"Background Color",id:"background-color",level:3},{value:"Text Color",id:"text-color",level:3},{value:"Font Size",id:"font-size",level:3},{value:"Font Style",id:"font-style",level:3},{value:"Text Transformation",id:"text-transformation",level:3},{value:"Font Weight",id:"font-weight",level:3},{value:"Mixing Styles",id:"mixing-styles",level:2}];function u(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,n.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:["Using the browser's console to print valuable program information is an integral part of the development process. The ",(0,r.jsx)(s.Z,{type:"foundation",location:"com/webforj/BrowserConsole",code:"true",children:"BrowserConsole"})," utility class comes with a slew of features to enhance logging capabilities."]}),"\n",(0,r.jsx)(t.h2,{id:"instance",children:"Instance"}),"\n",(0,r.jsxs)(t.p,{children:["Get an instance of ",(0,r.jsx)(t.code,{children:"BrowserConsole"})," using the ",(0,r.jsx)(t.code,{children:"App.console()"})," method. Print any ",(0,r.jsx)(t.code,{children:"Object"})," desired as one of the five log types: log, info, warn, error, or debug."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-java",children:'import static com.webforj.App.console;\n// Types\nconsole().log("Log message");\nconsole().info("Info message");\nconsole().warn("Warn message");\nconsole().error("Error message");\nconsole().debug("Debug message");\n'})}),"\n",(0,r.jsx)(t.h2,{id:"styling",children:"Styling"}),"\n",(0,r.jsxs)(t.p,{children:["Use the builder methods to set the appearance of the log message. Each builder has options to change a specific property. It's also possible to ",(0,r.jsx)(t.a,{href:"#mixing-styles",children:"mix multiple styles"}),".\nOnce a console message prints, any styling applied won't carry over to subsequent messages unless ",(0,r.jsx)(t.em,{children:"explicitly"})," redefined."]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"#background-color",children:(0,r.jsx)(t.code,{children:"background()"})})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"#text-color",children:(0,r.jsx)(t.code,{children:"color()"})})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"#font-size",children:(0,r.jsx)(t.code,{children:"size()"})})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"#font-style",children:(0,r.jsx)(t.code,{children:"style()"})})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"#text-transformation",children:(0,r.jsx)(t.code,{children:"transform()"})})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"#font-weight",children:(0,r.jsx)(t.code,{children:"weight()"})})}),"\n"]}),"\n",(0,r.jsx)(t.admonition,{type:"tip",children:(0,r.jsxs)(t.p,{children:["Use the ",(0,r.jsx)(t.code,{children:"setStyle"})," method to change the properties of the ",(0,r.jsx)(t.code,{children:"BrowserConsole"})," log not specified by the builders."]})}),"\n",(0,r.jsx)(t.h3,{id:"background-color",children:"Background Color"}),"\n",(0,r.jsxs)(t.p,{children:["Set the background color with the ",(0,r.jsx)(t.code,{children:"background()"})," method, which returns the ",(0,r.jsx)(s.Z,{type:"foundation",location:"com/webforj/BrowserConsole.BackgroundColorBuilder",code:"true",children:"BackgroundColorBuilder"}),".\nUse methods named by color, like ",(0,r.jsx)(t.code,{children:"blue()"}),", or choose a specific value with ",(0,r.jsx)(t.code,{children:"colored(String color)"}),"."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-java",children:'// Background Examples\nconsole().background().blue().log("Blue background");\nconsole().background().colored("#031f8f").log("Custom blue background");\n'})}),"\n",(0,r.jsx)(t.h3,{id:"text-color",children:"Text Color"}),"\n",(0,r.jsxs)(t.p,{children:["Set the text color with the ",(0,r.jsx)(t.code,{children:"color()"})," method, which returns the ",(0,r.jsx)(s.Z,{type:"foundation",location:"com/webforj/BrowserConsole.ColorBuilder",code:"true",children:"ColorBuilder"}),".\nUse methods named by color, like ",(0,r.jsx)(t.code,{children:"red()"}),", or choose a specific value with ",(0,r.jsx)(t.code,{children:"colored(String color)"}),"."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-java",children:'// Color Examples\nconsole().background().red().log("Red text");\nconsole().color().colored("#becad2").log("Custom light bluish-gray text");\n'})}),"\n",(0,r.jsx)(t.h3,{id:"font-size",children:"Font Size"}),"\n",(0,r.jsxs)(t.p,{children:["Set the font size with the ",(0,r.jsx)(t.code,{children:"size()"})," method, which returns the ",(0,r.jsx)(s.Z,{type:"foundation",location:"com/webforj/BrowserConsole.FontSizeBuilder",code:"true",children:"FontSizeBuilder"}),".\nUse methods named by a size, like ",(0,r.jsx)(t.code,{children:"small()"}),", or choose a specific value with ",(0,r.jsx)(t.code,{children:"from(String value)"}),"."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-java",children:'//Size Examples\nconsole().size().small().log("Small font");\nconsole().size().from("30px").log("30px font");\n'})}),"\n",(0,r.jsx)(t.admonition,{type:"tip",children:(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.code,{children:"from(String value)"})," method can take other font size values, such as rem and vw."]})}),"\n",(0,r.jsx)(t.h3,{id:"font-style",children:"Font Style"}),"\n",(0,r.jsxs)(t.p,{children:["Set the font style with the ",(0,r.jsx)(t.code,{children:"style()"})," method, which returns the ",(0,r.jsx)(s.Z,{type:"foundation",location:"com/webforj/BrowserConsole.FontStyleBuilder",code:"true",children:"FontStyleBuilder"}),".\nFor example, use the ",(0,r.jsx)(t.code,{children:"italic()"})," method to make the console log italicized."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-java",children:'// Style Examples\nconsole().style().italic().log("Italic font");\nconsole().style().normal().log("Normal font");\n'})}),"\n",(0,r.jsx)(t.h3,{id:"text-transformation",children:"Text Transformation"}),"\n",(0,r.jsxs)(t.p,{children:["Control the capitalization of the characters in a message with the ",(0,r.jsx)(t.code,{children:"transform()"})," method, which returns the ",(0,r.jsx)(s.Z,{type:"foundation",location:"com/webforj/BrowserConsole.TextTransformBuilder",code:"true",children:"TextTransformBuilder"}),".\nFor example, use the ",(0,r.jsx)(t.code,{children:"capitalize()"})," method to transform the first letter of each word to uppercase."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-java",children:'// Transform Examples\n// Capitalize Text Transformation\nconsole().transform().capitalize().log("Capitalize text transformation");\n// UPPERCASE TEXT TRANSFORMATION \nconsole().transform().uppercase().log("Uppercase text transformation");\n'})}),"\n",(0,r.jsx)(t.h3,{id:"font-weight",children:"Font Weight"}),"\n",(0,r.jsxs)(t.p,{children:["Set how thick the text is with the ",(0,r.jsx)(t.code,{children:"weight()"})," method, which returns the ",(0,r.jsx)(s.Z,{type:"foundation",location:"com/webforj/BrowserConsole.FontWeightBuilder",code:"true",children:"FontWeightBuilder"}),".\nFor example, use the ",(0,r.jsx)(t.code,{children:"ligther()"})," method to make the font lighter than normal."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-java",children:'// Weight Examples\nconsole().weight().bold().log("Bold font");\nconsole().weight().lighter().log("Lighter font");\n'})}),"\n",(0,r.jsx)(t.h2,{id:"mixing-styles",children:"Mixing Styles"}),"\n",(0,r.jsx)(t.p,{children:"It's possible to mix and match methods for a custom logging display."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-java",children:'// A variety of options for custom logging display\nconsole()\n    .weight().bolder()\n    .size().larger()\n    .color().gray()\n    .style().italic()\n    .transform().uppercase()\n    .background().blue()\n    .warn("Mixing styles");\n'})})]})}function h(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},6031:(e,t,o)=>{var r=o(4836);t.Z=void 0;var n=r(o(4938)),s=o(5893),a=(0,n.default)((0,s.jsx)("path",{d:"m19 1-5 5v11l5-4.5V1zM1 6v14.65c0 .25.25.5.5.5.1 0 .15-.05.25-.05C3.1 20.45 5.05 20 6.5 20c1.95 0 4.05.4 5.5 1.5V6c-1.45-1.1-3.55-1.5-5.5-1.5S2.45 4.9 1 6zm22 13.5V6c-.6-.45-1.25-.75-2-1v13.5c-1.1-.35-2.3-.5-3.5-.5-1.7 0-4.15.65-5.5 1.5v2c1.35-.85 3.8-1.5 5.5-1.5 1.65 0 3.35.3 4.75 1.05.1.05.15.05.25.05.25 0 .5-.25.5-.5v-1.1z"}),"AutoStories");t.Z=a},2610:(e,t,o)=>{var r=o(4836);t.Z=void 0;var n=r(o(4938)),s=o(5893),a=(0,n.default)((0,s.jsx)("path",{d:"M11 18c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zm-2-8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 4c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"DragIndicator");t.Z=a},5162:(e,t,o)=>{o.d(t,{Z:()=>a});o(7294);var r=o(6010);const n={tabItem:"tabItem_Ymn6"};var s=o(5893);function a(e){let{children:t,hidden:o,className:a}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.Z)(n.tabItem,a),hidden:o,children:t})}},4866:(e,t,o)=>{o.d(t,{Z:()=>j});var r=o(7294),n=o(6010),s=o(2466),a=o(6550),l=o(469),i=o(1980),c=o(7392),d=o(12);function u(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:o}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return u(e).map((e=>{let{props:{value:t,label:o,attributes:r,default:n}}=e;return{value:t,label:o,attributes:r,default:n}}))}(o);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,o])}function m(e){let{value:t,tabValues:o}=e;return o.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:o}=e;const n=(0,a.k6)(),s=function(e){let{queryString:t=!1,groupId:o}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!o)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return o??null}({queryString:t,groupId:o});return[(0,i._X)(s),(0,r.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(n.location.search);t.set(s,e),n.replace({...n.location,search:t.toString()})}),[s,n])]}function g(e){const{defaultValue:t,queryString:o=!1,groupId:n}=e,s=h(e),[a,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:o}=e;if(0===o.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:o}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${o.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=o.find((e=>e.default))??o[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:s}))),[c,u]=p({queryString:o,groupId:n}),[g,f]=function(e){let{groupId:t}=e;const o=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,s]=(0,d.Nk)(o);return[n,(0,r.useCallback)((e=>{o&&s.set(e)}),[o,s])]}({groupId:n}),b=(()=>{const e=c??g;return m({value:e,tabValues:s})?e:null})();(0,l.Z)((()=>{b&&i(b)}),[b]);return{selectedValue:a,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),f(e)}),[u,f,s]),tabValues:s}}var f=o(2389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var A=o(5893);function x(e){let{className:t,block:o,selectedValue:r,selectValue:a,tabValues:l}=e;const i=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.o5)(),d=e=>{const t=e.currentTarget,o=i.indexOf(t),n=l[o].value;n!==r&&(c(t),a(n))},u=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const o=i.indexOf(e.currentTarget)+1;t=i[o]??i[0];break}case"ArrowLeft":{const o=i.indexOf(e.currentTarget)-1;t=i[o]??i[i.length-1];break}}t?.focus()};return(0,A.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.Z)("tabs",{"tabs--block":o},t),children:l.map((e=>{let{value:t,label:o,attributes:s}=e;return(0,A.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>i.push(e),onKeyDown:u,onClick:d,...s,className:(0,n.Z)("tabs__item",b.tabItem,s?.className,{"tabs__item--active":r===t}),children:o??t},t)}))})}function v(e){let{lazy:t,children:o,selectedValue:n}=e;const s=(Array.isArray(o)?o:[o]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,A.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n})))})}function w(e){const t=g(e);return(0,A.jsxs)("div",{className:(0,n.Z)("tabs-container",b.tabList),children:[(0,A.jsx)(x,{...e,...t}),(0,A.jsx)(v,{...e,...t})]})}function j(e){const t=(0,f.Z)();return(0,A.jsx)(w,{...e,children:u(e.children)},String(t))}},6957:(e,t,o)=>{o.d(t,{Z:()=>x});var r=o(7294),n=o(917),s=o(5697),a=o.n(s),l=o(4866),i=o(5162),c=o(4673),d=o(1750);const u=o.p+"assets/images/expand-ba3f00f73da43d91e5b17663c4a7d108.png",h="data:image/png;base64,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",m="data:image/png;base64,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";var p=o(2949),g=o(2610),f=o(5944);function b(e){let{collapse:t,setCollapse:o}=e;b.propTypes={collapse:a().bool.isRequired,setCollapse:a().func.isRequired};const r=n.iv`
    display: flex;
    justify-content: end;
    align-items: flex-end;
    background-color: transparent;
    margin-bottom: -10px;
  `,s=n.iv`
    cursor: pointer;
    z-index: 10;
    height: 35px;
    width: 35px;
    border: none;
    background-color: none;
    justify-self: flex-end;
    background-color: transparent;
    margin-right: 5px;
    margin-bottom: -50px !important;
  `,l=n.iv`
    filter: invert(var(--inversion-percentage));
  `;return(0,f.tZ)("div",{css:r,children:(0,f.tZ)("button",{css:s,onClick:()=>{o(!t)},children:t?(0,f.tZ)("img",{alt:"collapse_button",css:l,src:u,className:"icon-tabler-arrow-bar-up"}):(0,f.tZ)("img",{css:l,src:h,className:"icon-tabler-arrow-bar-down"})})})}function A(e){let{url:t}=e;const o=n.iv`
    position: relative;
    cursor: pointer;
    z-index: 10;
    height: 35px;
    width: 35px;
    border: none;
    justify-self: flex-end;
    margin-top: -5px;
    margin-bottom: -20px;
    background-color: transparent;
    margin-right: 12px;
  `,r=n.iv`
    filter: invert(var(--inversion-percentage));
    ::before {
      mix-blend-mode: lighten;
      opacity: 0.5;
    }
  `;return(0,f.tZ)("button",{css:o,onClick:()=>{window.open(t,"_blank")},children:(0,f.tZ)("img",{css:r,src:m})})}function x(e){let{path:t,javaC:o,javaE:s,urls:u,cssURL:h,javaHighlight:m,height:v,frame:w,tabs:j}=e;x.propTypes={path:a().string.isRequired,javaC:a().string,javaE:a().string,urls:a().arrayOf(a().string),cssURL:a().string,javaHighlight:a().string,height:a().string,frame:a().string,tabs:a().arrayOf(a().string)};const[y,B]=(0,r.useState)(""),[k,S]=(0,r.useState)(""),[Z,C]=(0,r.useState)({}),[D,E]=(0,r.useState)(""),[z,F]=(0,r.useState)(!(!o||!s)),[L,N]=(0,r.useState)(!1),[T,M]=(0,r.useState)({}),[O,V]=(0,r.useState)(!1),[X,H]=(0,r.useState)(0),[G,Y]=(0,r.useState)(0),[J,I]=(0,r.useState)(25),[W,R]=(0,r.useState)(25),[U,P]=(0,r.useState)(0),[q,K]=(0,r.useState)(!1),Q=(0,r.useRef)(null),_=(0,r.useRef)(null);function $(e,t,o){return(0,f.tZ)(d.Z,{css:t,className:"codeDemoBlock",language:"java",showLineNumbers:!0,metastring:o,children:e.code})}(0,r.useEffect)((()=>{s&&fetch(s).then((e=>e.text())).then((e=>{S(e);const t=new URL(s).pathname.split("/"),o=t[t.length-1];M((e=>({...e,javaFile:o})))})),o&&fetch(o).then((e=>e.text())).then((e=>{B(e)})),h&&fetch(h).then((e=>e.text())).then((e=>{E(e);const t=new URL(h).pathname.split("/"),o=t[t.length-1];M((e=>({...e,cssFile:o})))})),u&&u.forEach((function(e){const t=new URL(e),o=t.pathname.split("/"),r=o[o.length-1];fetch(e).then((e=>e.text())).then((e=>{!function(e,t){C((o=>({...o,[e]:{fileName:e,code:t}})))}(r,e)}))})),P(Q.current?Q.current.offsetWidth:0)}),[]);const ee=()=>{V(!1)},te=e=>{if(O){const t=e.clientX-X;G+t>U/3&&(Q.current.style.width=`${G+t}px`,_.current.style.right=(J-t<25?25:J-t)+"px",R(J-t<25?25:J-t))}},oe=n.iv`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-bottom: 16px;
    background-color: var(--code-display-color-background);
  `,re=n.iv`
    width: 100%;
    border: 1px solid var(--ifm-toc-border-color);
    border-right: none;
    background-color: transparent;
    display: flex;
    position: relative;
  `,ne=n.iv`
    min-height: 100px;
    height: 100%;
    width: 100%;
    height: ${v||"100%"};
    pointer-events: ${O?"none":"auto"};
  `,se=n.iv`
    display: flex;
    justify-content: flex-end;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
    ${L&&"opacity: 1;"};
    margin: 10px 0 0 0;
    position: absolute;
    right: 25px;
  `,ae=n.iv`
    display: flex;
    align-items: center;
    cursor: ew-resize;
    border-left: 1px solid var(--ifm-toc-border-color);
    border-right: 1px solid var(--ifm-toc-border-color);
    background-color: var(--ifm-background-color);
  `,le=n.iv`
    box-shadow: none;
    background-color: var(--ifm-background-color);
    margin: 0px;
    padding: 0px;
    border: ${"hidden"==w?"none":"1px solid var(--ifm-toc-border-color)"};
    border-top: none;
    border-radius: 0px;
    position: relative;

    div {
      border-color: var(--ifm-toc-border-color);
      padding: 2px 0px 0px 0px;
      margin: 0px;
    }

    > div:first-of-type {
      border: ${"hidden"==w?"1px solid var(--ifm-toc-border-color)":"none"};
      border-top: none;
    }

    summary {
      display: flex;
      width: 100%;
      justify-content: center;
      margin: 10px 0;
      font-weight: bold;
      ::before {
        left: auto;
        margin-left: -100px;
        --docusaurus-details-decoration-color: var(--ifm-color-primary);
      }
    }
    .margin-top--md {
      margin-top: 0px !important;
    }
    ul {
      margin: -4px 0px !important;
    }
  `,ie=n.iv`
    li[aria-selected="true"] {
      border-color: var(--ifm-color-primary);
    }

    .tabs__item {
      padding: 5px 20px -2px 20px;
      border-radius: 0px;
    }
  `,ce=n.iv`
    border-radius: 0px;
    box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 4px 0px inset;
  `;return(0,f.BX)("div",{css:oe,onMouseUp:ee,onMouseLeave:ee,onMouseMove:te,children:["hidden"!=w?(0,f.BX)("div",{onMouseEnter:()=>{N(!0)},onMouseLeave:()=>N(!1),css:re,children:[(0,f.tZ)("iframe",{onMouseUp:ee,loading:"lazy",src:t+"&__theme__="+(0,p.I)().colorMode,css:ne,ref:Q,onMouseMove:te}),(0,f.tZ)("div",{css:se,ref:_,children:(0,f.tZ)(A,{url:t})}),(0,f.tZ)("div",{css:ae,onMouseDown:e=>{e.preventDefault(),V(!0),H(e.clientX),Y(Q.current?Q.current.offsetWidth:0),I(W)},children:(0,f.tZ)(g.Z,{})})]}):null,(0,f.BX)(c.Z,{css:le,summary:(0,f.tZ)("summary",{onClick:()=>K(!q),children:q?"Hide Code":"Show Code"}),children:[o&&s?(0,f.tZ)(b,{collapse:z,setCollapse:F}):null,h?(0,f.BX)(l.Z,{css:ie,children:[(0,f.tZ)(i.Z,{value:j?j[0]:"Java",label:j?j[0]:T.javaFile,default:!0,children:(0,f.tZ)(d.Z,{css:ce,className:"codeDemoBlock",language:"java",showLineNumbers:!0,metastring:m,children:z?y:k})}),Object.keys(Z).map(((e,t)=>(0,f.tZ)(i.Z,{value:e,label:e,children:$(Z[e],ce,m)},"tab"+t))),(0,f.tZ)(i.Z,{value:j?j[1]:"CSS",label:j?j[1]:T.cssFile,children:(0,f.tZ)(d.Z,{css:ce,className:"codeDemoBlock",language:"css",showLineNumbers:!0,children:D})})]}):(0,f.BX)(l.Z,{css:ie,children:[(0,f.tZ)(i.Z,{value:j?j[0]:"Java",label:j?j[0]:T.javaFile,default:!0,children:(0,f.tZ)(d.Z,{css:ce,className:"codeDemoBlock",language:"java",showLineNumbers:!0,metastring:m,children:z?y:k})}),Object.keys(Z).map(((e,t)=>(0,f.tZ)(i.Z,{value:e,label:e,children:$(Z[e],ce,m)},"tab"+t)))]})]})]})}},3273:(e,t,o)=>{o.d(t,{Z:()=>c});var r=o(7294),n=o(917),s=o(9112),a=o(8385),l=o(6031);var i=o(5944);function c(e){let{type:t,location:o,top:c,children:d,code:u,suffix:h}=e;const[m,p]=(0,r.useState)("");(0,r.useEffect)((()=>{h||(h=""),p("https://javadoc.io/doc/com.webforj/webforj-"+t+"/latest/"+o+".html"+h)}),[]);const g=n.iv`
    display: inline;

    ${c&&n.iv`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    margin-top: -33px;
    margin-bottom: 25px;
    `}
  `,f=n.iv`
  background-color: #0063CC;
  padding: 0 0 0 5px;
  :hover{
    color: white;
  }
  `;return(0,i.BX)(i.HY,{children:["true"===c&&(0,i.tZ)("div",{css:g,children:(0,i.tZ)(s.Z,{title:"JavaDoc",arrow:!0,children:(0,i.tZ)(a.Z,{css:f,label:"Java API",component:"a",href:m,icon:(0,i.tZ)(l.Z,{}),clickable:!0,color:"primary",target:"_blank"})})}),"true"!==c&&!u&&(0,i.tZ)("div",{css:g,children:(0,i.tZ)("a",{href:m,target:"_blank",children:d})}),"true"!==c&&u&&(0,i.tZ)("div",{css:g,children:(0,i.tZ)("code",{children:(0,i.tZ)("a",{href:m,target:"_blank",children:d})})})]})}},1415:(e,t,o)=>{o.d(t,{Z:()=>s});o(7294);var r=o(8397),n=o(5893);function s(e){return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(r.Z,{...e})})}}}]);