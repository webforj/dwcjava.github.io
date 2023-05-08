"use strict";(self.webpackChunkdwcj_documentation=self.webpackChunkdwcj_documentation||[]).push([[5049],{5162:(e,t,a)=>{a.d(t,{Z:()=>s});var o=a(7294),n=a(6010);const l="tabItem_Ymn6";function s(e){let{children:t,hidden:a,className:s}=e;return o.createElement("div",{role:"tabpanel",className:(0,n.Z)(l,s),hidden:a},t)}},4866:(e,t,a)=>{a.d(t,{Z:()=>k});var o=a(7462),n=a(7294),l=a(6010),s=a(2466),r=a(6775),c=a(1980),i=a(7392),u=a(12);function m(e){return function(e){return n.Children.map(e,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:a,attributes:o,default:n}}=e;return{value:t,label:a,attributes:o,default:n}}))}function b(e){const{values:t,children:a}=e;return(0,n.useMemo)((()=>{const e=t??m(a);return function(e){const t=(0,i.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function d(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:a}=e;const o=(0,r.k6)(),l=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,c._X)(l),(0,n.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(o.location.search);t.set(l,e),o.replace({...o.location,search:t.toString()})}),[l,o])]}function h(e){const{defaultValue:t,queryString:a=!1,groupId:o}=e,l=b(e),[s,r]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const o=a.find((e=>e.default))??a[0];if(!o)throw new Error("Unexpected error: 0 tabValues");return o.value}({defaultValue:t,tabValues:l}))),[c,i]=p({queryString:a,groupId:o}),[m,h]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[o,l]=(0,u.Nk)(a);return[o,(0,n.useCallback)((e=>{a&&l.set(e)}),[a,l])]}({groupId:o}),x=(()=>{const e=c??m;return d({value:e,tabValues:l})?e:null})();(0,n.useLayoutEffect)((()=>{x&&r(x)}),[x]);return{selectedValue:s,selectValue:(0,n.useCallback)((e=>{if(!d({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);r(e),i(e),h(e)}),[i,h,l]),tabValues:l}}var x=a(2389);const v="tabList__CuJ",A="tabItem_LNqP";function g(e){let{className:t,block:a,selectedValue:r,selectValue:c,tabValues:i}=e;const u=[],{blockElementScrollPositionUntilNextRender:m}=(0,s.o5)(),b=e=>{const t=e.currentTarget,a=u.indexOf(t),o=i[a].value;o!==r&&(m(t),c(o))},d=e=>{var t;let a=null;switch(e.key){case"Enter":b(e);break;case"ArrowRight":{const t=u.indexOf(e.currentTarget)+1;a=u[t]??u[0];break}case"ArrowLeft":{const t=u.indexOf(e.currentTarget)-1;a=u[t]??u[u.length-1];break}}null==(t=a)||t.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},t)},i.map((e=>{let{value:t,label:a,attributes:s}=e;return n.createElement("li",(0,o.Z)({role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,key:t,ref:e=>u.push(e),onKeyDown:d,onClick:b},s,{className:(0,l.Z)("tabs__item",A,null==s?void 0:s.className,{"tabs__item--active":r===t})}),a??t)})))}function f(e){let{lazy:t,children:a,selectedValue:o}=e;if(a=Array.isArray(a)?a:[a],t){const e=a.find((e=>e.props.value===o));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==o}))))}function w(e){const t=h(e);return n.createElement("div",{className:(0,l.Z)("tabs-container",v)},n.createElement(g,(0,o.Z)({},e,t)),n.createElement(f,(0,o.Z)({},e,t)))}function k(e){const t=(0,x.Z)();return n.createElement(w,(0,o.Z)({key:String(t)},e))}},2395:(e,t,a)=>{a.d(t,{Z:()=>m});var o=a(7294),n=a(2863),l=a(4866),s=a(5162),r=a(4673),c=a(8488);const i=a.p+"assets/images/expand-ba3f00f73da43d91e5b17663c4a7d108.png";function u(e){let{collapse:t,setCollapse:a}=e;const o=n.iv`
    display: flex;
    justify-content: end;
    margin-bottom: -30px;
    background-color: transparent;
    `,l=n.iv`
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
  
  `,s=n.iv`
      filter: invert(var(--inversion-percentage));
  `;return(0,n.tZ)("div",{css:o},(0,n.tZ)("button",{css:l,onClick:()=>{a(!t)}},t?(0,n.tZ)("img",{css:s,src:i,className:"icon-tabler-arrow-bar-up"}):(0,n.tZ)("img",{css:s,src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPAAAADwCAYAAAA+VemSAAAABmJLR0QA/wD/AP+gvaeTAAAG/ElEQVR4nO3dTW7bRhgG4Ddu4bTHa72Ir+UbNKskm/YgvYJhGF61B2gcIEDdRSVAMGxLIueHQz4PMBtDGeoj9EIfxWEmAQAAAAAAAAAAAAAAAAAAAAAAACjnMsl1ks9JbpN8343b3d+ud68BFuYqyUOSpyPjYfdaYAEuktzkeHCfj5vdvwU6mhLewxADnVxlenj3QzsNHVwmucv8AN8ned/2rQPXmR/e/fjQ+L1TiB8xxvVLwbl+LTgXcIIS7fN+3DV+7xTyrvcbYLLHJD8Vmutbkp8LzUVDAjyup8Lz+SwMyDUwDEyAYWACDAMTYBiYAMPABBgGJsAwMAGGgQkwDEyAYWACDAMTYBiYAMPABBgGJsAwMAGGgQkwDEyAYWACDAMT4Dq2tkvg1uplxVrtEljqv5Tdj6nsisgqtN4lsHeA7YrIqszZJfBjzv9Q9wzwxe49Tz2WXRFZlBK7BJ4b4l4Bnhve/dBOswildgl8SvIpyY8nHrdHgC+S/FboePexKyILUHKXwHNC3DrAJcO7H3ZFpLsvKR+mU9rplgEu1TY/H1+OHBeqK7lL4DkhbhXgWuF9il0RWYDH1PlwP+XtdrpFgGu0zYfj8ZXjQjNfU+8D/laIawe4dnifkvzz+mmFNmq10IfjpXa6ZoBrts2HQwtNdzV+xDolxLUC3Cq8T/EjFgtQ+jbSW+Owna4R4BZt8+FwG4nuSi7kOCfEpedtHd77WMjBQpRYSnnOqNHitmqb98NSShZlzsMMWxseZmBxWv74M/KY8uQVNNH6OnK08SnJD1NPLrQgxMLL4IRYeBmcEAsvg9t6iIWX4W01xMLLamwtxMLL6mzlPrH7vKzW2r+JffOyemsNsfCyGWsLsfCyOWsJsfCyWaOHWHjZvFFDLLywM9otJreK4JlRQiy88Iqlh1h44YilXhO75oUTLS3EwgtnWko7rW2GiXqHWHhhpl4hFl4opPU1sWteKKzVN7FvXqikdoiFFyqr1U5rm6GR0iEWXmisVDutbYZO5oZYeKGzi0zb2vQmwguLcZXkIceD+xCba8MiXSa5TvI5yW2S77txu/vb9e41AAAAAAAAAAAAwCK9tBTw1MX5S1oyqA51bM6pi/FPHb0W7atDHZsy9XG4U0erx+bUoY5NqnmSD0+2OtQxYh2LdpX6J3k/arY96lDH5lwmuUu7E32f5L061DFIHYt3nXYneT8+qEMdg9Rxkp4X4b90OOavFeZUx3TqGFjLNmc/7tShjkHqOMm7XgdO8pjkp8bH/Jbk58JzqmM6dczUs4V+6nDMfyvMqY7p1DFTzwD/1eGYf1eYUx3TqWOmngH+cyXHVMeyjrmWOk7SM8B/dDjm7xXmVMd06hjYWm64q0Mdm1zIkaxnyZs61LFZa1l0rg51bNJaHvtShzo2bS0PXqtDHZu1lv/6RB3qAAAAAAAAAAAAAJp7acmgpYAwgFMX7VuMDwsy9bE5j8NBZxdJPmb6o3EfI8TQxdzwCjF0cpHkt5R7SP1Tkh9bFgBbVTq8QgyNlGqbtdPQWO3wCjFUUqtt1k5DZa3DK8RQSKu2WTsNhfUOrxDDRL3aZu00zLS08AoxnGgpbbN2Gs609PAKMbxilPAKMTyz1GveY8M1MZs3aniFmM0bPbxCzGatJbxCzOasLbxCzGasNbxCzOqNdqto6nCLidVZ+zevb2JWa2vhFWJWY6vhFWKGt/XwCjHDEl4hZlDCK8QMSniFmEFt5T7v3OE+MYs0ZYvPrY6biecYqrhK+2+xEeZ8a9hknEW4THKXdh/8T0l+qDBv6+v3+yTvzz7bUNh12oc3FeZO2of4wzknGmr4kjYf9uc//tQIcNL2x7gvJ55jqKZF+/zSL7e1Apy0C/Hd0bMLlT2m7of8sG0+VDPASZt2+vH10wptfE378KbCsV5SO8T/vHJcaKZWC31swUOLACd122ktNN3V+BHrlNVKrQKc1AuxH7HorvRtpLfa5kMtA5zUaafdRqK7kgs5Tg1vCh3vnAAnZUN8Hws5WIgSSynPXeTfI8BJuXbaUkoWZc7DDFOe0OkV4GR+iD3MwOJcZFqIbzLt8bqeAU7a1wtNXCV5yPEP8kPmtZG9A7zXql5o5jL//zr9Ocltku+7cbv72/XuNXMsJcBJm3p5wbveb4DJ5obuOZ+FAbkWgYEJMAxMgGFgAgwDE2AYmADDwAQYBibAMDABhoEJMAxMgGFgAgwDE2AYmADDwAQYBibAMDABhoEJMAxMgGFgAjyukltzfi04Fw0J8Lj+KjjX3wXnoiEBHtefC52LhgR4XH8UnOv3gnMBJyi1K+J97BIIXZTYFdF2J9DRnF0R7RIIndklEFbALoEwOLsEAgAAAAAAAAAAAAAAAAAAAAAAAE39B2tV13Hdy+hQAAAAAElFTkSuQmCC",className:"icon-tabler-arrow-bar-down"})))}function m(e){let{path:t,javaC:a,javaE:i,cssURL:m,javaHighlight:b,height:d}=e;const[p,h]=(0,o.useState)(""),[x,v]=(0,o.useState)(""),[A,g]=(0,o.useState)(""),[f,w]=(0,o.useState)(!0),k=n.iv`
		display: flex;
    flex-direction: column;
    padding: 10px 15px 0 15px;
    background-color: var(--code-display-color);
		width: 100%;
    margin-bottom: 16px;
    
    `,E=n.iv`
    min-height: 100px;
    height: 100%;
    height: ${d};
  `,y=n.iv`
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

  `;return i&&fetch(i).then((e=>e.text())).then((e=>{v(e)})),a&&fetch(a).then((e=>e.text())).then((e=>{h(e)})),m&&fetch(m).then((e=>e.text())).then((e=>{g(e)})),(0,n.tZ)("div",{css:k},(0,n.tZ)("iframe",{loading:"lazy",src:t,css:E}),(0,n.tZ)(r.Z,{css:y,summary:(0,n.tZ)("summary",null,"Show Code")},a&&i?(0,n.tZ)(u,{collapse:f,setCollapse:w}):null,m?(0,n.tZ)(l.Z,null,(0,n.tZ)(s.Z,{value:"Java",label:"Java",default:!0},(0,n.tZ)(c.Z,{className:"codeDemoBlock",language:"java",showLineNumbers:!0,metastring:b},f?p:x)),(0,n.tZ)(s.Z,{value:"CSS",label:"CSS"},(0,n.tZ)(c.Z,{className:"codeDemoBlock",language:"css",showLineNumbers:!0},A))):(0,n.tZ)(l.Z,null,(0,n.tZ)(s.Z,{value:"Java",label:"Java",default:!0},(0,n.tZ)(c.Z,{className:"codeDemoBlock",language:"java",showLineNumbers:!0,metastring:b},f?p:x)))))}},7796:(e,t,a)=>{a.d(t,{Z:()=>n});var o=a(7294);function n(e){var t,a;const[n,l]=(0,o.useState)(null);if((0,o.useEffect)((()=>{fetch("https://basishub.github.io/basis-next/bbj-components.json").then((e=>e.json())).then((t=>{const a=t.components.find((t=>t.tag===e.tag));l(a)}))}),[]),!n)return o.createElement("div",null,"Loading...");const s=null==(t=n.docsTags)?void 0:t.filter((e=>"part"===e.name)),r=null==(a=n.styles)?void 0:a.map((e=>({name:e.name,description:e.docs})));return o.createElement(o.Fragment,null,o.createElement("h4",null,"Shadow Parts"),o.createElement("table",{className:"custom--table"},o.createElement("thead",null,o.createElement("tr",null,o.createElement("th",null,"Part"),o.createElement("th",null,"Description"))),o.createElement("tbody",null,null==s?void 0:s.map((e=>{const[t,a]=e.text.split(" - ");return o.createElement("tr",{key:e.id},o.createElement("td",null,t),o.createElement("td",null,a))})))),o.createElement("h4",null,"CSS Properties"),o.createElement("table",{className:"custom--table"},o.createElement("thead",null,o.createElement("tr",null,o.createElement("th",null,"Name"),o.createElement("th",null,"Description"))),o.createElement("tbody",null,null==r?void 0:r.map((e=>o.createElement("tr",{key:e.name},o.createElement("td",null,e.name),o.createElement("td",null,e.description)))))))}},1415:(e,t,a)=>{a.d(t,{Z:()=>l});var o=a(7294),n=a(8397);function l(e){return o.createElement(o.Fragment,null,o.createElement(n.Z,e))}},8302:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>m});var o=a(7462),n=(a(7294),a(3905)),l=a(2395),s=a(7796);const r={sidebar_position:23,title:"Combo box"},c=void 0,i={unversionedId:"components/combo-box",id:"components/combo-box",title:"Combo box",description:"API:&nbsp;",source:"@site/docs/components/combo-box.md",sourceDirName:"components",slug:"/components/combo-box",permalink:"/docs/components/combo-box",draft:!1,editUrl:"https://github.com/DwcJava/dwcjava.github.io/tree/website/docs/components/combo-box.md",tags:[],version:"current",sidebarPosition:23,frontMatter:{sidebar_position:23,title:"Combo box"},sidebar:"tutorialSidebar",previous:{title:"Choice Box",permalink:"/docs/components/choice-box"},next:{title:"Dialog",permalink:"/docs/components/dialog"}},u={},m=[{value:"Menu Placement",id:"menu-placement",level:3},{value:"Label",id:"label",level:3},{value:"Placeholder",id:"placeholder",level:3},{value:"Expanses",id:"expanses",level:3}],b={toc:m};function d(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},b,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("div",{style:{width:"100%",display:"flex",justifyContent:"flex-end",marginBottom:"-50px"}},(0,n.kt)("p",{style:{color:"gray"}},"API:\xa0"),(0,n.kt)("b",null,(0,n.kt)("a",{href:"https://javadoc.io/static/org.dwcj/dwcj-engine/0.15.0/org/dwcj/controls/textcombobox/TextComboBox.html",style:{justifySelf:"flex-end"}}," Java "))),(0,n.kt)("h3",{id:"menu-placement"},"Menu Placement"),(0,n.kt)("p",null,"The combo box can be configured to open the menu in various positions relative to the position of the component itself."),(0,n.kt)(l.Z,{path:"https://hot.bbx.kitchen/webapp/controlsamples?class=control_demos.textcomboboxdemos.TextComboBoxPlacement",javaE:"https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/java/control_demos/textcomboboxdemos/TextComboBoxPlacement.java",javaC:"https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/code_snippets/textcombobox/Placement.txt",cssURL:"https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/resources/css/textcomboboxstyles/placement_styles.css",javaHighlight:"{24,29,33,38}",height:"350px",mdxType:"ComponentDemo"}),(0,n.kt)("br",null),(0,n.kt)("h3",{id:"label"},"Label"),(0,n.kt)("p",null,"The combo box component can be easily labeled without the needing to create an extra label component using the ",(0,n.kt)("inlineCode",{parentName:"p"},"setAttribute()")," method and passing the desired label as a string, as shown below: ",(0,n.kt)("br",null)),(0,n.kt)(l.Z,{path:"https://hot.bbx.kitchen/webapp/controlsamples?class=control_demos.textcomboboxdemos.TextComboBoxLabel",javaE:"https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/java/control_demos/textcomboboxdemos/TextComboBoxLabel.java",javaC:"https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/code_snippets/textcombobox/Label.txt",cssURL:"https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/resources/css/textcomboboxstyles/text_combo_styles.css",javaHighlight:"{24}",height:"200px",mdxType:"ComponentDemo"}),(0,n.kt)("br",null),(0,n.kt)("h3",{id:"placeholder"},"Placeholder"),(0,n.kt)("p",null,"It is also possible to set placeholder text within the component to better help users understand what type of input is expected. Similar to a label, this can be accomplished using the ",(0,n.kt)("inlineCode",{parentName:"p"},"setAttribute()")," method: ",(0,n.kt)("br",null)),(0,n.kt)(l.Z,{path:"https://hot.bbx.kitchen/webapp/controlsamples?class=control_demos.textcomboboxdemos.TextComboBoxPlaceholder",javaE:"https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/java/control_demos/textcomboboxdemos/TextComboBoxPlaceholder.java",javaC:"https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/code_snippets/textcombobox/Placeholder.txt",cssURL:"https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/resources/css/textcomboboxstyles/text_combo_styles.css",javaHighlight:"{24}",height:"200px",mdxType:"ComponentDemo"}),(0,n.kt)("br",null),(0,n.kt)("h3",{id:"expanses"},"Expanses"),(0,n.kt)("p",null,"DWCJ's combo box comes with 5 expanses for quick styling without the use of CSS. Expanses are supported by use of a built-in enum class.\nBelow are the various expanses supported for the text box component: ",(0,n.kt)("br",null)),(0,n.kt)(l.Z,{path:"https://hot.bbx.kitchen/webapp/controlsamples?class=control_demos.textcomboboxdemos.TextComboBoxExpanses",javaE:"https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/java/control_demos/textcomboboxdemos/TextComboBoxExpanses.java",javaC:"https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/code_snippets/textcombobox/Expanses.txt",cssURL:"https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/resources/css/textcomboboxstyles/expanse_styles.css",javaHighlight:"{24,27,30,33,36}",height:"350px",mdxType:"ComponentDemo"}),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Combo Box Expanses"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("ul",null,(0,n.kt)("li",null,(0,n.kt)("inlineCode",{parentName:"td"},"ComboBox.Expanse.XSMALL")),(0,n.kt)("li",null,(0,n.kt)("inlineCode",{parentName:"td"},"ComboBox.Expanse.SMALL")),(0,n.kt)("li",null,(0,n.kt)("inlineCode",{parentName:"td"},"ComboBox.Expanse.MEDIUM")),(0,n.kt)("li",null,(0,n.kt)("inlineCode",{parentName:"td"},"ComboBox.Expanse.LARGE")),(0,n.kt)("li",null,(0,n.kt)("inlineCode",{parentName:"td"},"ComboBox.Expanse.XLARGE"))))))),(0,n.kt)(s.Z,{tag:a(5731).Ct,mdxType:"TableBuilder"}))}d.isMDXComponent=!0},5731:e=>{e.exports=JSON.parse('{"zx":"bbj-button","Kx":"bbj-cedit","XZ":"bbj-checkbox","gN":"bbj-editbox","iR":"bbj-slider","nv":"bbj-inpute","Ki":"bbj-inputn","wb":"bbj-list","Z":"bbj-list-button","Ct":"bbj-list-edit","ko":"bbj-progressbar","Vq":"bbj-dialog"}')}}]);