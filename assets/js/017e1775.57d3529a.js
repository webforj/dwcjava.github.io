"use strict";(self.webpackChunkdwcj_documentation=self.webpackChunkdwcj_documentation||[]).push([[6929],{5162:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(7294),r=a(6010);const o="tabItem_Ymn6";function l(e){let{children:t,hidden:a,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,l),hidden:a},t)}},4866:(e,t,a)=>{a.d(t,{Z:()=>k});var n=a(7462),r=a(7294),o=a(6010),l=a(2466),i=a(6775),s=a(1980),c=a(7392),d=a(12);function u(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function p(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??u(a);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:a}=e;const n=(0,i.k6)(),o=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(n.location.search);t.set(o,e),n.replace({...n.location,search:t.toString()})}),[o,n])]}function v(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,o=p(e),[l,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[s,c]=h({queryString:a,groupId:n}),[u,v]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,o]=(0,d.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:n}),w=(()=>{const e=s??u;return m({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{w&&i(w)}),[w]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),c(e),v(e)}),[c,v,o]),tabValues:o}}var w=a(2389);const b="tabList__CuJ",g="tabItem_LNqP";function f(e){let{className:t,block:a,selectedValue:i,selectValue:s,tabValues:c}=e;const d=[],{blockElementScrollPositionUntilNextRender:u}=(0,l.o5)(),p=e=>{const t=e.currentTarget,a=d.indexOf(t),n=c[a].value;n!==i&&(u(t),s(n))},m=e=>{var t;let a=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const t=d.indexOf(e.currentTarget)+1;a=d[t]??d[0];break}case"ArrowLeft":{const t=d.indexOf(e.currentTarget)-1;a=d[t]??d[d.length-1];break}}null==(t=a)||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},t)},c.map((e=>{let{value:t,label:a,attributes:l}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>d.push(e),onKeyDown:m,onClick:p},l,{className:(0,o.Z)("tabs__item",g,null==l?void 0:l.className,{"tabs__item--active":i===t})}),a??t)})))}function y(e){let{lazy:t,children:a,selectedValue:n}=e;if(a=Array.isArray(a)?a:[a],t){const e=a.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function A(e){const t=v(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",b)},r.createElement(f,(0,n.Z)({},e,t)),r.createElement(y,(0,n.Z)({},e,t)))}function k(e){const t=(0,w.Z)();return r.createElement(A,(0,n.Z)({key:String(t)},e))}},6521:(e,t,a)=>{a.d(t,{Z:()=>r});a(7294);var n=a(917);function r(e){let{url:t,mobile:a}=e;const r=n.iv`
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 4rem 0;
        width: 100%;
    `,o=n.iv`
        position: relative;
        width : 100%;
        max-width: ${"true"==a?"375px":"100%"};
        height: ${"true"==a?"700px":"600px"};
        border-radius: 32px;
        overflow: hidden;
        box-shadow: 0 0 0 10px black, 0 3px 22px black;
        outline: thin solid black;
    `,l=n.iv`
        width: 100%;
        height: 100%;
        background: var(--bbj-surface-3);
    `;return(0,n.tZ)("div",{css:r},(0,n.tZ)("div",{css:o},(0,n.tZ)("iframe",{src:t,css:l,loading:"lazy"})))}},6957:(e,t,a)=>{a.d(t,{Z:()=>p});var n=a(7294),r=a(917),o=a(4866),l=a(5162),i=a(4673),s=a(8488);const c=a.p+"assets/images/expand-ba3f00f73da43d91e5b17663c4a7d108.png";function d(e){let{collapse:t,setCollapse:a}=e;const n=r.iv`
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
  `;return(0,r.tZ)("div",{css:n},(0,r.tZ)("button",{css:o,onClick:()=>{a(!t)}},t?(0,r.tZ)("img",{css:l,src:c,className:"icon-tabler-arrow-bar-up"}):(0,r.tZ)("img",{css:l,src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPAAAADwCAYAAAA+VemSAAAABmJLR0QA/wD/AP+gvaeTAAAG/ElEQVR4nO3dTW7bRhgG4Ddu4bTHa72Ir+UbNKskm/YgvYJhGF61B2gcIEDdRSVAMGxLIueHQz4PMBtDGeoj9EIfxWEmAQAAAAAAAAAAAAAAAAAAAAAAACjnMsl1ks9JbpN8343b3d+ud68BFuYqyUOSpyPjYfdaYAEuktzkeHCfj5vdvwU6mhLewxADnVxlenj3QzsNHVwmucv8AN8ned/2rQPXmR/e/fjQ+L1TiB8xxvVLwbl+LTgXcIIS7fN+3DV+7xTyrvcbYLLHJD8Vmutbkp8LzUVDAjyup8Lz+SwMyDUwDEyAYWACDAMTYBiYAMPABBgGJsAwMAGGgQkwDEyAYWACDAMTYBiYAMPABBgGJsAwMAGGgQkwDEyAYWACDAMT4Dq2tkvg1uplxVrtEljqv5Tdj6nsisgqtN4lsHeA7YrIqszZJfBjzv9Q9wzwxe49Tz2WXRFZlBK7BJ4b4l4Bnhve/dBOswildgl8SvIpyY8nHrdHgC+S/FboePexKyILUHKXwHNC3DrAJcO7H3ZFpLsvKR+mU9rplgEu1TY/H1+OHBeqK7lL4DkhbhXgWuF9il0RWYDH1PlwP+XtdrpFgGu0zYfj8ZXjQjNfU+8D/laIawe4dnifkvzz+mmFNmq10IfjpXa6ZoBrts2HQwtNdzV+xDolxLUC3Cq8T/EjFgtQ+jbSW+Owna4R4BZt8+FwG4nuSi7kOCfEpedtHd77WMjBQpRYSnnOqNHitmqb98NSShZlzsMMWxseZmBxWv74M/KY8uQVNNH6OnK08SnJD1NPLrQgxMLL4IRYeBmcEAsvg9t6iIWX4W01xMLLamwtxMLL6mzlPrH7vKzW2r+JffOyemsNsfCyGWsLsfCyOWsJsfCyWaOHWHjZvFFDLLywM9otJreK4JlRQiy88Iqlh1h44YilXhO75oUTLS3EwgtnWko7rW2GiXqHWHhhpl4hFl4opPU1sWteKKzVN7FvXqikdoiFFyqr1U5rm6GR0iEWXmisVDutbYZO5oZYeKGzi0zb2vQmwguLcZXkIceD+xCba8MiXSa5TvI5yW2S77txu/vb9e41AAAAAAAAAAAAwCK9tBTw1MX5S1oyqA51bM6pi/FPHb0W7atDHZsy9XG4U0erx+bUoY5NqnmSD0+2OtQxYh2LdpX6J3k/arY96lDH5lwmuUu7E32f5L061DFIHYt3nXYneT8+qEMdg9Rxkp4X4b90OOavFeZUx3TqGFjLNmc/7tShjkHqOMm7XgdO8pjkp8bH/Jbk58JzqmM6dczUs4V+6nDMfyvMqY7p1DFTzwD/1eGYf1eYUx3TqWOmngH+cyXHVMeyjrmWOk7SM8B/dDjm7xXmVMd06hjYWm64q0Mdm1zIkaxnyZs61LFZa1l0rg51bNJaHvtShzo2bS0PXqtDHZu1lv/6RB3qAAAAAAAAAAAAAJp7acmgpYAwgFMX7VuMDwsy9bE5j8NBZxdJPmb6o3EfI8TQxdzwCjF0cpHkt5R7SP1Tkh9bFgBbVTq8QgyNlGqbtdPQWO3wCjFUUqtt1k5DZa3DK8RQSKu2WTsNhfUOrxDDRL3aZu00zLS08AoxnGgpbbN2Gs609PAKMbxilPAKMTyz1GveY8M1MZs3aniFmM0bPbxCzGatJbxCzOasLbxCzGasNbxCzOqNdqto6nCLidVZ+zevb2JWa2vhFWJWY6vhFWKGt/XwCjHDEl4hZlDCK8QMSniFmEFt5T7v3OE+MYs0ZYvPrY6biecYqrhK+2+xEeZ8a9hknEW4THKXdh/8T0l+qDBv6+v3+yTvzz7bUNh12oc3FeZO2of4wzknGmr4kjYf9uc//tQIcNL2x7gvJ55jqKZF+/zSL7e1Apy0C/Hd0bMLlT2m7of8sG0+VDPASZt2+vH10wptfE378KbCsV5SO8T/vHJcaKZWC31swUOLACd122ktNN3V+BHrlNVKrQKc1AuxH7HorvRtpLfa5kMtA5zUaafdRqK7kgs5Tg1vCh3vnAAnZUN8Hws5WIgSSynPXeTfI8BJuXbaUkoWZc7DDFOe0OkV4GR+iD3MwOJcZFqIbzLt8bqeAU7a1wtNXCV5yPEP8kPmtZG9A7zXql5o5jL//zr9Ocltku+7cbv72/XuNXMsJcBJm3p5wbveb4DJ5obuOZ+FAbkWgYEJMAxMgGFgAgwDE2AYmADDwAQYBibAMDABhoEJMAxMgGFgAgwDE2AYmADDwAQYBibAMDABhoEJMAxMgGFgAjyukltzfi04Fw0J8Lj+KjjX3wXnoiEBHtefC52LhgR4XH8UnOv3gnMBJyi1K+J97BIIXZTYFdF2J9DRnF0R7RIIndklEFbALoEwOLsEAgAAAAAAAAAAAAAAAAAAAAAAAE39B2tV13Hdy+hQAAAAAElFTkSuQmCC",className:"icon-tabler-arrow-bar-down"})))}function u(e){let{url:t}=e;const a=r.iv`
      position: relative;
      cursor: pointer;
      z-index: 10;
      height: 35px;
      width: 35px;
      border: none;
      background-color: none;
      justify-self: flex-end;
      /* margin-right: 5px; */
      margin-top: -5px;
      margin-bottom: -20px;
      background-color: transparent;

      
    `,n=r.iv`
      filter: invert(var(--inversion-percentage));
      ::before{
        mix-blend-mode: lighten; /* The blend mode determines how the overlay interacts with the image */
        opacity: 0.5;
      }
    `;return(0,r.tZ)("button",{css:a,onClick:()=>{window.open(t,"_blank")}},(0,r.tZ)("img",{css:n,src:"data:image/png;base64,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"}))}function p(e){let{path:t,javaC:a,javaE:c,cssURL:p,javaHighlight:m,height:h,frame:v}=e;const[w,b]=(0,n.useState)(""),[g,f]=(0,n.useState)(""),[y,A]=(0,n.useState)(""),[k,E]=(0,n.useState)(!0),[D,x]=(0,n.useState)(!1),C=r.iv`
		display: flex;
    flex-direction: column;
    background-color: var(--code-display-color);
		width: 100%;
    margin-bottom: 16px;
    padding: ${"hidden"==v?"0 15px 0 15px;":"10px 15px 0 15px;"};
    
    `,T=r.iv`
    min-height: 100px;
    height: 100%;
    width: 100%;
    height: ${h};
  `,N=r.iv`
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

  `,Z=r.iv`
  width: 100%;
  `,S=r.iv`
  display: flex;
  justify-content: flex-end;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
    ${D&&"opacity: 1;"};
    
  `;return c&&fetch(c).then((e=>e.text())).then((e=>{f(e)})),a&&fetch(a).then((e=>e.text())).then((e=>{b(e)})),p&&fetch(p).then((e=>e.text())).then((e=>{A(e)})),(0,r.tZ)("div",{css:C},"hidden"!=v?(0,r.tZ)("div",{onMouseEnter:()=>{x(!0)},onMouseLeave:()=>x(!1),css:Z},(0,r.tZ)("div",{css:S},(0,r.tZ)(u,{url:t})),(0,r.tZ)("iframe",{loading:"lazy",src:t,css:T})):null,(0,r.tZ)(i.Z,{css:N,summary:(0,r.tZ)("summary",null,"Show Code")},a&&c?(0,r.tZ)(d,{collapse:k,setCollapse:E}):null,p?(0,r.tZ)(o.Z,null,(0,r.tZ)(l.Z,{value:"Java",label:"Java",default:!0},(0,r.tZ)(s.Z,{className:"codeDemoBlock",language:"java",showLineNumbers:!0,metastring:m},k?w:g)),(0,r.tZ)(l.Z,{value:"CSS",label:"CSS"},(0,r.tZ)(s.Z,{className:"codeDemoBlock",language:"css",showLineNumbers:!0},y))):(0,r.tZ)(o.Z,null,(0,r.tZ)(l.Z,{value:"Java",label:"Java",default:!0},(0,r.tZ)(s.Z,{className:"codeDemoBlock",language:"java",showLineNumbers:!0,metastring:m},k?w:g)))))}},3273:(e,t,a)=>{a.d(t,{Z:()=>u});var n=a(7294),r=a(917),o=a(8745),l=a(8385),i=a(6770);let s=null,c=null;const d={getLatestTag:async function(){return s&&c&&Date.now()-c<36e5?s:async function(){try{const e=await fetch("https://api.github.com/repos/DwcJava/engine/tags"),t=await e.json();return s=t[0].name,c=Date.now(),s}catch(e){return console.error("Error fetching latest tag:",e),null}}()}};function u(e){let{type:t,location:a,top:s,children:c,code:u,suffix:p}=e;const[m,h]=(0,n.useState)("");(0,n.useEffect)((()=>{(async()=>{try{let e=await d.getLatestTag();p||(p=""),e||(e="23.01"),h("https://javadoc.io/static/org.dwcj/dwcj-"+t+"/"+e+"/"+a+".html"+p)}catch(e){console.error("Error fetching latest release:",e)}})()}),[]);const v=r.iv`
    display: inline;

    ${s&&r.iv`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    margin-top: -33px;
    margin-bottom: 25px;
    `}
  `,w=r.iv`
  background-color: #0063CC;
  :hover{
    color: white;
  }
  `;return(0,r.tZ)(n.Fragment,null,"true"===s&&(0,r.tZ)("div",{css:v},(0,r.tZ)(o.Z,{title:"JavaDoc",arrow:!0},(0,r.tZ)(l.Z,{css:w,label:"Java API",component:"a",href:m,icon:(0,r.tZ)(i.Z,null),clickable:!0,color:"primary",target:"_blank"}))),"true"!==s&&!u&&(0,r.tZ)("div",{css:v},(0,r.tZ)("a",{href:m,target:"_blank"},c)),"true"!==s&&u&&(0,r.tZ)("div",{css:v},(0,r.tZ)("code",null,(0,r.tZ)("a",{href:m,target:"_blank"},c))))}},7796:(e,t,a)=>{a.d(t,{Z:()=>r});var n=a(7294);function r(e){var t,a,r,o;const[l,i]=(0,n.useState)(null);if((0,n.useEffect)((()=>{fetch("https://basishub.github.io/basis-next/bbj-components.json").then((e=>e.json())).then((t=>{const a=t.components.find((t=>t.tag===e.tag));i(a),console.log(e.exclusions)}))}),[]),!l)return n.createElement("div",null,"Loading...");const s=null==(t=l.docsTags)?void 0:t.filter((e=>"part"===e.name)),c=null==(a=l.slots)?void 0:a.map((e=>({name:e.name,desc:e.docs}))),d=null==(r=l.styles)?void 0:r.map((e=>({name:e.name,description:e.docs}))),u=null==(o=l.props)?void 0:o.map((e=>({display:e.reflectToAttr,attr:e.attr,desc:e.docs,type:e.type})));return n.createElement(n.Fragment,null,"parts"==e.table&&n.createElement(n.Fragment,null,n.createElement("table",{className:"custom--table"},n.createElement("thead",null,n.createElement("tr",{key:"header"},n.createElement("th",null,"Part"),n.createElement("th",null,"Description"))),n.createElement("tbody",null,null==s?void 0:s.map((t=>{var a;const[r,o]=t.text.split(" - ");return!(null!=(a=e.exclusions)&&a.includes(r))&&n.createElement("tr",{key:t.id},n.createElement("td",null,n.createElement("code",null,r)),n.createElement("td",null,o))}))))),"slots"==e.table&&n.createElement(n.Fragment,null,n.createElement("table",{className:"custom--table"},n.createElement("thead",null,n.createElement("tr",{key:"header"},n.createElement("th",null,"Slot"),n.createElement("th",null,"Description"))),n.createElement("tbody",null,null==c?void 0:c.map((t=>{var a;return!(null!=(a=e.exclusions)&&a.includes(t.name))&&""!=t.name&&n.createElement("tr",{key:t.name},n.createElement("td",null,n.createElement("code",null,t.name)),n.createElement("td",null,t.desc))}))))),"properties"==e.table&&n.createElement(n.Fragment,null,n.createElement("table",{className:"custom--table"},n.createElement("thead",null,n.createElement("tr",{key:"header"},n.createElement("th",null,"Name"),n.createElement("th",null,"Description"))),n.createElement("tbody",null,null==d?void 0:d.map((t=>{var a;return!(null!=(a=e.exclusions)&&a.includes(t.name))&&n.createElement("tr",{key:t.name},n.createElement("td",null,n.createElement("code",null,t.name)),n.createElement("td",null,t.description))}))))),"reflects"==e.table&&n.createElement(n.Fragment,null,n.createElement("table",{className:"custom--table"},n.createElement("thead",null,n.createElement("tr",{key:"header"},n.createElement("th",null,"Attribute"),n.createElement("th",null,"Description"),n.createElement("th",null,"Type"))),n.createElement("tbody",null,null==u?void 0:u.map((t=>{var a;return null!=t.attr&&"&#x2714;"==t.display&&!(null!=(a=e.exclusions)&&a.includes(t.attr))&&n.createElement("tr",{key:t.attr},n.createElement("td",null,n.createElement("code",null,t.attr)),n.createElement("td",null,t.desc),n.createElement("td",null,t.type))}))))),"properties"!=e.table&&"parts"!=e.table&&"slots"!=e.table&&"reflects"!=e.table&&n.createElement(n.Fragment,null,n.createElement("h4",null,"Shadow Parts"),n.createElement("table",{className:"custom--table"},n.createElement("thead",null,n.createElement("tr",{key:"header"},n.createElement("th",null,"Part"),n.createElement("th",null,"Description"))),n.createElement("tbody",null,null==s?void 0:s.map((e=>{const[t,a]=e.text.split(" - ");return n.createElement("tr",{key:e.id},n.createElement("td",null,n.createElement("code",null,t)),n.createElement("td",null,a))})))),n.createElement("h4",null,"CSS Properties"),n.createElement("table",{className:"custom--table"},n.createElement("thead",null,n.createElement("tr",{key:"header"},n.createElement("th",null,"Name"),n.createElement("th",null,"Description"))),n.createElement("tbody",null,null==d?void 0:d.map((e=>n.createElement("tr",{key:e.name},n.createElement("td",null,n.createElement("code",null,e.name)),n.createElement("td",null,e.description)))))),n.createElement("h4",null,"Reflected Attributes"),n.createElement("table",{className:"custom--table"},n.createElement("thead",null,n.createElement("tr",{key:"header"},n.createElement("th",null,"Attribute"),n.createElement("th",null,"Description"),n.createElement("th",null,"Type"))),n.createElement("tbody",null,null==u?void 0:u.map((e=>null!=e.attr&&"&#x2714;"==e.display&&n.createElement("tr",{key:e.attr},n.createElement("td",null,n.createElement("code",null,e.attr)),n.createElement("td",null,e.desc),n.createElement("td",null,e.type))))))))}},1415:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(7294),r=a(8397);function o(e){return n.createElement(n.Fragment,null,n.createElement(r.Z,e))}},7714:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>d,default:()=>v,frontMatter:()=>c,metadata:()=>u,toc:()=>m});var n=a(7462),r=(a(7294),a(3905)),o=a(6957),l=a(7796),i=a(6521),s=a(3273);const c={sidebar_position:26,title:"Drawer"},d=void 0,u={unversionedId:"components/drawer",id:"components/drawer",title:"Drawer",description:"The drawer is a container that slides into the viewport to expose additional options and information. Multiple drawers can be created in an application, and they will be stacked above each other.",source:"@site/docs/components/drawer.md",sourceDirName:"components",slug:"/components/drawer",permalink:"/docs/components/drawer",draft:!1,editUrl:"https://github.com/DwcJava/dwcjava.github.io/tree/website/docs/components/drawer.md",tags:[],version:"current",sidebarPosition:26,frontMatter:{sidebar_position:26,title:"Drawer"},sidebar:"tutorialSidebar",previous:{title:"Dialog",permalink:"/docs/components/dialog"},next:{title:"Field",permalink:"/docs/components/fields/"}},p={},m=[{value:"Constructors",id:"constructors",level:3},{value:"Autofocus",id:"autofocus",level:3},{value:"Label",id:"label",level:3},{value:"Size",id:"size",level:3},{value:"Max Size",id:"max-size",level:3},{value:"Placement",id:"placement",level:3},{value:"Events",id:"events",level:2},{value:"Drawer Open",id:"drawer-open",level:3},{value:"Drawer Close",id:"drawer-close",level:3},{value:"Toggling a Drawer Open or Closed",id:"toggling-a-drawer-open-or-closed",level:3},{value:"Removing an Event",id:"removing-an-event",level:3},{value:"Example Usage",id:"example-usage",level:2},{value:"Parts and CSS Properties",id:"parts-and-css-properties",level:2}],h={toc:m};function v(e){let{components:t,...c}=e;return(0,r.kt)("wrapper",(0,n.Z)({},h,c,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(s.Z,{type:"engine",location:"org/dwcj/component/drawer/Drawer",top:"true",mdxType:"JavadocLink"}),(0,r.kt)("p",null,"The drawer is a container that slides into the viewport to expose additional options and information. Multiple drawers can be created in an application, and they will be stacked above each other."),(0,r.kt)("h3",{id:"constructors"},"Constructors"),(0,r.kt)("p",null,"The Drawer component contains a single default constructor which will create a new instance of the Drawer class."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"Drawer newDrawer = new Drawer()\n")),(0,r.kt)(o.Z,{path:"https://hot.bbx.kitchen/webapp/controlsamples?class=componentdemos.drawerdemos.DrawerDemo",javaC:"https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/java/componentdemos/drawerdemos/DrawerDemo.java",height:"600px",mdxType:"ComponentDemo"}),(0,r.kt)("p",null,"Various properties exist that allow for the customization of various attributes of the Drawer component. Below are those properties with examples for their modification."),(0,r.kt)("h3",{id:"autofocus"},"Autofocus"),(0,r.kt)("p",null,"The Auto-Focus property is designed to enhance accessibility and usability by automatically focusing on the first item within a drawer when it is opened. This feature eliminates the need for users to manually navigate to the desired item, saving time and effort."),(0,r.kt)("p",null,"When the drawer is triggered to open, either through an event, by default or any other interaction, the user's focus is directed to the first item within the drawer. This first item could be a button, a link, a menu option, or any other focusable element."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"By automatically focusing on the first item, the developer ensures that users can immediately engage with the most relevant or frequently used option without having to tab or scroll through the entire drawer. This behavior streamlines the user experience and promotes efficient navigation within the UI.")),(0,r.kt)("p",null,"This property can also be particularly beneficial for individuals who rely on keyboard navigation or assistive technologies such as screen readers. It provides a clear starting point within the drawer and allows users to access the desired functionality without unnecessary manual input."),(0,r.kt)(o.Z,{path:"https://hot.bbx.kitchen/webapp/controlsamples?class=componentdemos.drawerdemos.DrawerAutoFocus",javaC:"https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/java/componentdemos/drawerdemos/DrawerAutoFocus.java",height:"600px",mdxType:"ComponentDemo"}),(0,r.kt)("h3",{id:"label"},"Label"),(0,r.kt)("p",null,"The Drawer Label property is a feature designed to enhance accessibility and provide descriptive context for a drawer within a user interface. This property allows developers to assign a label to a drawer, primarily for accessibility purposes, ensuring that screen readers and other assistive technologies can accurately convey the drawer's purpose and content to users."),(0,r.kt)("p",null,"When the Drawer Label property is utilized, the assigned label becomes an integral part of the drawer's accessibility infrastructure. It enables users who rely on assistive technologies to understand the drawer's function and navigate through the interface more effectively."),(0,r.kt)("p",null,"By providing a label for the drawer, developers ensure that screen readers announce the purpose of the drawer to visually impaired users. This information empowers individuals to make informed decisions about interacting with the drawer, as they can understand its content and relevance within the broader user interface."),(0,r.kt)("p",null,"The Label property can be customized to suit the specific context and design requirements of the application. Developers have the flexibility to provide concise and descriptive labels that accurately represent the drawer's content or functionality."),(0,r.kt)("h3",{id:"size"},"Size"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"size")," property of the Drawer component enables developers to control and specify the dimensions of the drawer within the user interface. This property allows for fine-tuning the size of the drawer, ensuring it aligns with the desired layout and design requirements."),(0,r.kt)("p",null,"When utilizing the ",(0,r.kt)("inlineCode",{parentName:"p"},"size")," property, developers have the flexibility to define the width and height of the drawer based on their specific needs. Unlike the ",(0,r.kt)("inlineCode",{parentName:"p"},"maxSize")," property, which sets a maximum limit, the ",(0,r.kt)("inlineCode",{parentName:"p"},"size")," property provides explicit control over the actual size of the drawer."),(0,r.kt)("p",null,"Developers can customize the ",(0,r.kt)("inlineCode",{parentName:"p"},"size")," property based on the available screen real estate, the amount of content to be displayed, and the overall design aesthetic. This level of control allows for creating visually balanced and functional interfaces."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"size")," property can be defined using various units such as pixels, percentages, or other appropriate CSS measurement values. This versatility ensures that the drawer's size can be adjusted precisely to fit different screen sizes, resolutions, and device types."),(0,r.kt)("p",null,"By utilizing the ",(0,r.kt)("inlineCode",{parentName:"p"},"size")," property effectively, developers can create responsive interfaces that adapt to different viewports and screen orientations. For instance, a smaller size can be chosen for mobile devices to optimize space utilization, while larger sizes can be used for desktop displays to take advantage of the available screen area."),(0,r.kt)("h3",{id:"max-size"},"Max Size"),(0,r.kt)("p",null,"The Drawer max size property is a versatile feature designed to control the maximum width or height of a drawer within a user interface, based on the specified placement. This property allows developers to define the maximum size of the drawer, ensuring optimal presentation and layout while accommodating varying screen sizes and device resolutions."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"To set the size of the drawer, modify the ",(0,r.kt)("inlineCode",{parentName:"p"},"size")," property - ",(0,r.kt)("inlineCode",{parentName:"p"},"maxSize")," is used to ensure a drawer never grows larger than a certain value.")),(0,r.kt)("p",null,"When utilizing the Drawer max size property, developers can set a maximum size value expressed as pixels, percentages, or other appropriate CSS measurement values. This value represents the maximum width when the drawer is placed on the left or right side of the interface or the maximum height when placed on the top or bottom."),(0,r.kt)("p",null,"By defining a maximum size for the drawer, developers maintain control over its dimensions and prevent it from becoming excessively wide or tall, which could hinder the overall user experience. The CSS measurement approach allows for responsiveness, adapting the size of the drawer dynamically in relation to the available screen space."),(0,r.kt)("p",null,"The Drawer's max size property is particularly beneficial when dealing with responsive and adaptive designs. It ensures that the drawer remains visually pleasing and functional across different devices, screen orientations, and viewports."),(0,r.kt)("p",null,"When the drawer's content exceeds the defined maximum size, developers can implement appropriate techniques to handle overflow, such as scrolling within the drawer or utilizing additional UI patterns like tabs or accordions. This helps maintain a clean and organized interface while accommodating larger amounts of content."),(0,r.kt)(o.Z,{path:"https://hot.bbx.kitchen/webapp/controlsamples?class=componentdemos.drawerdemos.DrawerSize",javaC:"https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/java/componentdemos/drawerdemos/DrawerSize.java",height:"600px",mdxType:"ComponentDemo"}),(0,r.kt)("h3",{id:"placement"},"Placement"),(0,r.kt)("p",null,"The placement property of the Drawer UI Component allows developers to specify the position and alignment of the drawer within the viewport. This property offers a range of enum values that provide flexibility in determining where the drawer appears in relation to the main content."),(0,r.kt)("p",null,"The available enum values for the placement property are as follows:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"TOP"),": This value places the drawer at the top of the viewport, allowing it to occupy the uppermost region.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"TOP_CENTER"),": With this value, the drawer is positioned at the center of the top portion of the viewport. It is aligned horizontally in the middle, creating a balanced layout.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"BOTTOM"),": When using this value, the drawer is situated at the bottom of the viewport, appearing below the main content.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"BOTTOM_CENTER"),": This value centers the drawer horizontally at the bottom of the viewport. It provides a visually balanced composition.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"LEFT"),": Selecting this value causes the drawer to be positioned on the left side of the viewport, adjacent to the main content.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"RIGHT"),": By using this value, the drawer is placed on the right side of the viewport, maintaining a close proximity to the main content"))),(0,r.kt)("p",null,"The placement property allows developers to choose the most appropriate position for the drawer based on the specific design and user experience requirements. The enum values offer a variety of placement options to accommodate different interface layouts and visual hierarchies."),(0,r.kt)("p",null,"By leveraging the placement property, developers can create intuitive and efficient user interfaces. For example, placing the drawer on the left or right side allows for quick access to additional functionalities or navigation options, while top or bottom placements are well-suited for contextual information or supplementary content."),(0,r.kt)(o.Z,{path:"https://hot.bbx.kitchen/webapp/controlsamples?class=componentdemos.drawerdemos.DrawerPlacement",javaC:"https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/java/componentdemos/drawerdemos/DrawerPlacement.java",height:"600px",mdxType:"ComponentDemo"}),(0,r.kt)("h2",{id:"events"},"Events"),(0,r.kt)("p",null,"There are two supported events that can be used with the Drawer component, open and close events. These events are essential components of the Drawer component, providing developers with the means to respond and react to the opening and closing actions of the drawer within the user interface."),(0,r.kt)("h3",{id:"drawer-open"},"Drawer Open"),(0,r.kt)("p",null,"Use the ",(0,r.kt)("inlineCode",{parentName:"p"},"addOpenListener()")," method to add an open event to your Drawer component."),(0,r.kt)("p",null,"The Drawer Open Event is triggered when the drawer is initiated to open, either through user interaction or programmatically. This event allows developers to execute specific actions, animations, or updates that should occur when the drawer becomes visible and accessible to the user. To add an open event listener, use the appropriate method:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"myDrawer.addOpenListener( e -> {\n  //Executed when the event fires\n});\n")),(0,r.kt)("p",null,"By leveraging the Drawer Open Event, developers can synchronize the opening of the drawer with other UI elements, trigger transitions or animations, and update the interface to reflect the change in state. This event can also be used to initiate fetching data, loading content, or any other necessary operations related to the appearance of the drawer."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"onOpen() method is similarly available for use, and simple calls the addOpenListener()")," method.")),(0,r.kt)("h3",{id:"drawer-close"},"Drawer Close"),(0,r.kt)("p",null,"Use the ",(0,r.kt)("inlineCode",{parentName:"p"},"addCloseListener()")," method to add an open event to your Drawer component."),(0,r.kt)("p",null,"The Drawer Close Event is triggered when the drawer is initiated to close. This event provides developers with the opportunity to perform actions or updates that should take place when the drawer is no longer visible or accessible to the user. To add a close event listener, use the appropriate method:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"myDrawer.addCloseListener( e -> {\n  //Executed when the event fires\n});\n")),(0,r.kt)("p",null,"With the Drawer Close Event, developers can synchronize the closing of the drawer with other UI elements, initiate animations or transitions, and update the interface to reflect the change in state. Additionally, this event can be utilized to save user preferences, persist data, or perform any cleanup operations associated with the closure of the drawer."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"onClose()")," method is similarly available for use, and simple calls the ",(0,r.kt)("inlineCode",{parentName:"p"},"addOpenListener()")," method.")),(0,r.kt)("h3",{id:"toggling-a-drawer-open-or-closed"},"Toggling a Drawer Open or Closed"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"toggle()")," method allows developers to control the opening and closing behavior of the drawer based on a boolean value. This function provides a programmatic way to toggle the visibility of the drawer. This can be shorthanded by using the ",(0,r.kt)("inlineCode",{parentName:"p"},"open()")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"close()")," methods, which call the ",(0,r.kt)("inlineCode",{parentName:"p"},"toggle()")," method with the appropriate boolean argument."),(0,r.kt)("h3",{id:"removing-an-event"},"Removing an Event"),(0,r.kt)("p",null,"To remove either an open or close event from the Drawer, simply use the appropriate remove event listener method."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"myDrawer.removeOpenListener(listener);\n")),(0,r.kt)("h2",{id:"example-usage"},"Example Usage"),(0,r.kt)("p",null,'The Drawer component can be used in many different situations, such as by providing a navigation menu that can be toggled, a panel that displays supplementary or contexual information, or to optimize usage on a mobile device. The following example will show a mobile application that uses the DWCJ\'s AppLayout component, and displays a "Welcome Popup" drawer at the bottom when first loaded. Additionally, a navigational Drawer component can be toggled in the application by clicking on the hamburger menu.'),(0,r.kt)(i.Z,{url:"https://hot.bbx.kitchen/webapp/controlsamples?class=componentdemos.drawerdemos.DrawerWelcome",mobile:"true",mdxType:"AppLayoutViewer"}),(0,r.kt)(o.Z,{frame:"hidden",javaC:"https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/java/componentdemos/drawerdemos/DrawerWelcome.java",cssURL:"https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/resources/css/drawerstyles/drawer_welcome.css",mdxType:"ComponentDemo"}),(0,r.kt)("h2",{id:"parts-and-css-properties"},"Parts and CSS Properties"),(0,r.kt)(l.Z,{tag:a(5731).dy,mdxType:"TableBuilder"}))}v.isMDXComponent=!0},5731:e=>{e.exports=JSON.parse('{"LN":"bbj-app-layout","zx":"bbj-button","Kx":"bbj-cedit","XZ":"bbj-checkbox","gN":"bbj-editbox","iR":"bbj-slider","wb":"bbj-list","Z":"bbj-list-button","Ct":"bbj-list-edit","ko":"bbj-progressbar","EU":"bbj-radio","dy":"bbj-drawer","Vq":"bbj-dialog","JO":"bbj-icon"}')}}]);