"use strict";(self.webpackChunkdwcj_documentation=self.webpackChunkdwcj_documentation||[]).push([[5565],{5162:(e,t,a)=>{a.d(t,{Z:()=>r});var n=a(7294),l=a(6010);const s="tabItem_Ymn6";function r(e){let{children:t,hidden:a,className:r}=e;return n.createElement("div",{role:"tabpanel",className:(0,l.Z)(s,r),hidden:a},t)}},4866:(e,t,a)=>{a.d(t,{Z:()=>S});var n=a(7462),l=a(7294),s=a(6010),r=a(2466),o=a(6775),i=a(1980),c=a(7392),u=a(12);function d(e){return function(e){return l.Children.map(e,(e=>{if((0,l.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:l}}=e;return{value:t,label:a,attributes:n,default:l}}))}function m(e){const{values:t,children:a}=e;return(0,l.useMemo)((()=>{const e=t??d(a);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function h(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:a}=e;const n=(0,o.k6)(),s=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,i._X)(s),(0,l.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(n.location.search);t.set(s,e),n.replace({...n.location,search:t.toString()})}),[s,n])]}function b(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,s=m(e),[r,o]=(0,l.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:s}))),[i,c]=p({queryString:a,groupId:n}),[d,b]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,s]=(0,u.Nk)(a);return[n,(0,l.useCallback)((e=>{a&&s.set(e)}),[a,s])]}({groupId:n}),v=(()=>{const e=i??d;return h({value:e,tabValues:s})?e:null})();(0,l.useLayoutEffect)((()=>{v&&o(v)}),[v]);return{selectedValue:r,selectValue:(0,l.useCallback)((e=>{if(!h({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);o(e),c(e),b(e)}),[c,b,s]),tabValues:s}}var v=a(2389);const g="tabList__CuJ",k="tabItem_LNqP";function f(e){let{className:t,block:a,selectedValue:o,selectValue:i,tabValues:c}=e;const u=[],{blockElementScrollPositionUntilNextRender:d}=(0,r.o5)(),m=e=>{const t=e.currentTarget,a=u.indexOf(t),n=c[a].value;n!==o&&(d(t),i(n))},h=e=>{var t;let a=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const t=u.indexOf(e.currentTarget)+1;a=u[t]??u[0];break}case"ArrowLeft":{const t=u.indexOf(e.currentTarget)-1;a=u[t]??u[u.length-1];break}}null==(t=a)||t.focus()};return l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":a},t)},c.map((e=>{let{value:t,label:a,attributes:r}=e;return l.createElement("li",(0,n.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>u.push(e),onKeyDown:h,onClick:m},r,{className:(0,s.Z)("tabs__item",k,null==r?void 0:r.className,{"tabs__item--active":o===t})}),a??t)})))}function w(e){let{lazy:t,children:a,selectedValue:n}=e;if(a=Array.isArray(a)?a:[a],t){const e=a.find((e=>e.props.value===n));return e?(0,l.cloneElement)(e,{className:"margin-top--md"}):null}return l.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function y(e){const t=b(e);return l.createElement("div",{className:(0,s.Z)("tabs-container",g)},l.createElement(f,(0,n.Z)({},e,t)),l.createElement(w,(0,n.Z)({},e,t)))}function S(e){const t=(0,v.Z)();return l.createElement(y,(0,n.Z)({key:String(t)},e))}},9469:(e,t,a)=>{a.d(t,{Z:()=>c});var n=a(7294),l=a(2863),s=a(4866),r=a(5162),o=a(4673),i=a(8488);function c(e){let{path:t,javaC:a,javaE:c,cssURL:u,javaHighlight:d,height:m}=e;const[h,p]=(0,n.useState)(""),[b,v]=(0,n.useState)(""),[g,k]=(0,n.useState)(""),[f,w]=(0,n.useState)(!0),y=l.iv`
		display: flex;
    flex-direction: column;
    padding: 10px 15px 0 15px;
    background-color: var(--code-display-color);
		width: 100%;
    margin-bottom: 16px;
    
    `,S=l.iv`
    min-height: 100px;
    height: 100%;
    height: ${m};
  `,x=l.iv`
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

  `;return c&&fetch(c).then((e=>e.text())).then((e=>{v(e)})),a&&fetch(a).then((e=>e.text())).then((e=>{p(e)})),u&&fetch(u).then((e=>e.text())).then((e=>{k(e)})),(0,l.tZ)("div",{css:y},(0,l.tZ)("iframe",{loading:"lazy",src:t,css:S}),(0,l.tZ)(o.Z,{css:x,summary:(0,l.tZ)("summary",null,"Show Code")},u?(0,l.tZ)(s.Z,null,(0,l.tZ)(r.Z,{value:"Java",label:"Java",default:!0},(0,l.tZ)(i.Z,{className:"codeDemoBlock",language:"java",showLineNumbers:!0,metastring:d},f?b:h)),(0,l.tZ)(r.Z,{value:"CSS",label:"CSS"},(0,l.tZ)(i.Z,{className:"codeDemoBlock",language:"css",showLineNumbers:!0},g))):(0,l.tZ)(s.Z,null,(0,l.tZ)(r.Z,{value:"Java",label:"Java",default:!0},(0,l.tZ)(i.Z,{className:"codeDemoBlock",language:"java",showLineNumbers:!0,metastring:d},f?b:h)))))}},1415:(e,t,a)=>{a.d(t,{Z:()=>s});var n=a(7294),l=a(8397);function s(e){return n.createElement(n.Fragment,null,n.createElement(l.Z,e))}},7467:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>i,toc:()=>u});var n=a(7462),l=(a(7294),a(3905)),s=a(9469);const r={sidebar_position:110,title:"Slider"},o=void 0,i={unversionedId:"controls/slider",id:"controls/slider",title:"Slider",description:"API:&nbsp;",source:"@site/docs/controls/slider.md",sourceDirName:"controls",slug:"/controls/slider",permalink:"/docs/controls/slider",draft:!1,editUrl:"https://github.com/DwcJava/dwcjava.github.io/tree/website/docs/controls/slider.md",tags:[],version:"current",sidebarPosition:110,frontMatter:{sidebar_position:110,title:"Slider"},sidebar:"tutorialSidebar",previous:{title:"Progress Bar",permalink:"/docs/controls/progress-bar"},next:{title:"String Edit Box",permalink:"/docs/controls/string-edit-box"}},c={},u=[{value:"Upper and Lower Limit",id:"upper-and-lower-limit",level:3},{value:"Ticks and Labeling",id:"ticks-and-labeling",level:3},{value:"Orientation and Inversion",id:"orientation-and-inversion",level:3},{value:"Themes",id:"themes",level:3}],d={toc:u};function m(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("div",{style:{width:"100%",display:"flex",justifyContent:"flex-end",marginBottom:"-50px"}},(0,l.kt)("p",{style:{color:"gray"}},"API:\xa0"),(0,l.kt)("b",null,(0,l.kt)("a",{href:"https://javadoc.io/static/org.dwcj/dwcj-engine/0.15.0/org/dwcj/controls/slider/Slider.html",style:{justifySelf:"flex-end"}}," Java "))),(0,l.kt)("h3",{id:"upper-and-lower-limit"},"Upper and Lower Limit"),(0,l.kt)("p",null,"Use the ",(0,l.kt)("inlineCode",{parentName:"p"},"setMinimum()")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"setMaximum()")," methods to determine the upper and lower bound of the slider. Each interval on the slider has a distance of 1, meaning that a slider with maximum 10 and minimum of 0 will have 10 intervals on the slider, whereas a maximum of 100 and minimum of 0 will have 100 intervals. These intervals will evenly distribute on the slider, depending on the height and width dimensions that it has been given by the developer. "),(0,l.kt)(s.Z,{path:"https://hot.bbx.kitchen/webapp/controlsamples?class=control_demos.sliderdemos.SliderMaxMinDemo",javaE:"https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/java/control_demos/sliderdemos/SliderMaxMinDemo.java",cssURL:"https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/resources/css/sliderstyles/minmax_styles.css",javaHighlight:"{17,21}",height:"225px",mdxType:"ComponentDemo"}),(0,l.kt)("br",null),(0,l.kt)("h3",{id:"ticks-and-labeling"},"Ticks and Labeling"),(0,l.kt)("p",null,"Slider controls can be customized to show ticks, or spaces bounded by lines to represent distances. Major ticks will be larger and more noticeable than minor ticks, and both can be configured to appear at the desired intervals. It is also possible to set the slider to snap to the tick values using the ",(0,l.kt)("inlineCode",{parentName:"p"},"setSnapToTicks()")," method."),(0,l.kt)(s.Z,{path:"https://hot.bbx.kitchen/webapp/controlsamples?class=control_demos.sliderdemos.SliderLabelDemo",javaE:"https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/java/control_demos/sliderdemos/SliderLabelDemo.java",cssURL:"https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/resources/css/sliderstyles/label_styles.css",javaHighlight:"{62-78}",height:"325px",mdxType:"ComponentDemo"}),(0,l.kt)("br",null),(0,l.kt)("p",null,"It is also possible to set labels on a slider. These labs may or may not correspond with ticks that have been set. To set the labels, simply create a map with key value pairs, where the keys are the integer values to be labeled, and the values are the desired label string. "),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},"If tick snapping is enabled, the slider will only snap to ticked spaces specifically. If a non-ticked value has a label, it will not be snapped to by the slider.")),(0,l.kt)("br",null),(0,l.kt)(s.Z,{path:"https://hot.bbx.kitchen/webapp/controlsamples?class=control_demos.sliderdemos.SliderTickDemo",javaE:"https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/java/control_demos/sliderdemos/SliderTickDemo.java",cssURL:"https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/resources/css/sliderstyles/tick_styles.css",javaHighlight:"{24-31}",height:"225px",mdxType:"ComponentDemo"}),(0,l.kt)("br",null),(0,l.kt)("h3",{id:"orientation-and-inversion"},"Orientation and Inversion"),(0,l.kt)("p",null,"Sliders can be oriented either horizontally or vertically by using the ",(0,l.kt)("inlineCode",{parentName:"p"},"setOrientation()")," method."),(0,l.kt)(s.Z,{path:"https://hot.bbx.kitchen/webapp/controlsamples?class=control_demos.sliderdemos.SliderOrientationDemo",javaE:"https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/java/control_demos/sliderdemos/SliderOrientationDemo.java",cssURL:"https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/resources/css/sliderstyles/orientation_styles.css",javaHighlight:"{37}",height:"400px",mdxType:"ComponentDemo"}),(0,l.kt)("br",null),(0,l.kt)("p",null,"It is also possible to invert a slider. By default, the minimum value of a vertical slider is at the bottom and the maximum value is at the top. For a horizontal slider, the minimum value is to the left and the maximum value is to the right. The orientation reverses for inverted sliders."),(0,l.kt)(s.Z,{path:"https://hot.bbx.kitchen/webapp/controlsamples?class=control_demos.sliderdemos.SliderInversionDemo",javaE:"https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/java/control_demos/sliderdemos/SliderInversionDemo.java",cssURL:"https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/resources/css/sliderstyles/inversion_styles.css",javaHighlight:"{42}",height:"200px",mdxType:"ComponentDemo"}),(0,l.kt)("br",null),(0,l.kt)("h3",{id:"themes"},"Themes"),(0,l.kt)("p",null,"The slider control comes with 6 themes built in for quick styling without the use of CSS. Theming is supported by use of a built-in enum class.\nShown below are sliders with each of the supported Themes applied: ",(0,l.kt)("br",null)),(0,l.kt)(s.Z,{path:"https://hot.bbx.kitchen/webapp/controlsamples?class=control_demos.sliderdemos.SliderThemesDemo",javaE:"https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/java/control_demos/sliderdemos/SliderThemesDemo.java",cssURL:"https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/resources/css/sliderstyles/theme_styles.css",javaHighlight:"{20,25,30,35,40,45}",height:"620px",mdxType:"ComponentDemo"}),(0,l.kt)("br",null),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Slider Themes"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("ul",null,(0,l.kt)("li",null,(0,l.kt)("inlineCode",{parentName:"td"},"Slider.Theme.DEFAULT")),(0,l.kt)("li",null,(0,l.kt)("inlineCode",{parentName:"td"},"Slider.Theme.DANGER")),(0,l.kt)("li",null,(0,l.kt)("inlineCode",{parentName:"td"},"Slider.Theme.GRAY")),(0,l.kt)("li",null,(0,l.kt)("inlineCode",{parentName:"td"},"Slider.Theme.INFO")),(0,l.kt)("li",null,(0,l.kt)("inlineCode",{parentName:"td"},"Slider.Theme.SUCCESS")),(0,l.kt)("li",null,(0,l.kt)("inlineCode",{parentName:"td"},"Slider.Theme.WARNING"))))))))}m.isMDXComponent=!0}}]);