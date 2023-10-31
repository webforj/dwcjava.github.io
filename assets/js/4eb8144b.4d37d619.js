"use strict";(self.webpackChunkdwcj_documentation=self.webpackChunkdwcj_documentation||[]).push([[2498],{6214:(e,t,n)=>{var a=n(4836);t.Z=void 0;var o=a(n(4938)),l=n(5893),r=(0,o.default)((0,l.jsx)("path",{d:"M9.4 16.6 4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0 4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"}),"Code");t.Z=r},5464:(e,t,n)=>{var a=n(4836);t.Z=void 0;var o=a(n(4938)),l=n(5893),r=(0,o.default)([(0,l.jsx)("circle",{cx:"9",cy:"12",r:"8"},"0"),(0,l.jsx)("path",{d:"M17 4.26v2.09c2.33.82 4 3.04 4 5.65s-1.67 4.83-4 5.65v2.09c3.45-.89 6-4.01 6-7.74s-2.55-6.85-6-7.74z"},"1")],"FiberSmartRecord");t.Z=r},5162:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(7294),o=n(6010);const l="tabItem_Ymn6";function r(e){let{children:t,hidden:n,className:r}=e;return a.createElement("div",{role:"tabpanel",className:(0,o.Z)(l,r),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>x});var a=n(7462),o=n(7294),l=n(6010),r=n(2466),s=n(6775),i=n(1980),c=n(7392),p=n(12);function m(e){return function(e){return o.Children.map(e,(e=>{if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:o}}=e;return{value:t,label:n,attributes:a,default:o}}))}function d(e){const{values:t,children:n}=e;return(0,o.useMemo)((()=>{const e=t??m(n);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function u(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:n}=e;const a=(0,s.k6)(),l=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,i._X)(l),(0,o.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(a.location.search);t.set(l,e),a.replace({...a.location,search:t.toString()})}),[l,a])]}function b(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,l=d(e),[r,s]=(0,o.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!u({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:l}))),[i,c]=h({queryString:n,groupId:a}),[m,b]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,l]=(0,p.Nk)(n);return[a,(0,o.useCallback)((e=>{n&&l.set(e)}),[n,l])]}({groupId:a}),g=(()=>{const e=i??m;return u({value:e,tabValues:l})?e:null})();(0,o.useLayoutEffect)((()=>{g&&s(g)}),[g]);return{selectedValue:r,selectValue:(0,o.useCallback)((e=>{if(!u({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);s(e),c(e),b(e)}),[c,b,l]),tabValues:l}}var g=n(2389);const v="tabList__CuJ",k="tabItem_LNqP";function w(e){let{className:t,block:n,selectedValue:s,selectValue:i,tabValues:c}=e;const p=[],{blockElementScrollPositionUntilNextRender:m}=(0,r.o5)(),d=e=>{const t=e.currentTarget,n=p.indexOf(t),a=c[n].value;a!==s&&(m(t),i(a))},u=e=>{var t;let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=p.indexOf(e.currentTarget)+1;n=p[t]??p[0];break}case"ArrowLeft":{const t=p.indexOf(e.currentTarget)-1;n=p[t]??p[p.length-1];break}}null==(t=n)||t.focus()};return o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},t)},c.map((e=>{let{value:t,label:n,attributes:r}=e;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>p.push(e),onKeyDown:u,onClick:d},r,{className:(0,l.Z)("tabs__item",k,null==r?void 0:r.className,{"tabs__item--active":s===t})}),n??t)})))}function A(e){let{lazy:t,children:n,selectedValue:a}=e;if(n=Array.isArray(n)?n:[n],t){const e=n.find((e=>e.props.value===a));return e?(0,o.cloneElement)(e,{className:"margin-top--md"}):null}return o.createElement("div",{className:"margin-top--md"},n.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function f(e){const t=b(e);return o.createElement("div",{className:(0,l.Z)("tabs-container",v)},o.createElement(w,(0,a.Z)({},e,t)),o.createElement(A,(0,a.Z)({},e,t)))}function x(e){const t=(0,g.Z)();return o.createElement(f,(0,a.Z)({key:String(t)},e))}},6957:(e,t,n)=>{n.d(t,{Z:()=>u});var a=n(7294),o=n(917),l=n(4866),r=n(5162),s=n(4673),i=n(8488);const c=n.p+"assets/images/expand-ba3f00f73da43d91e5b17663c4a7d108.png";var p=n(2949);function m(e){let{collapse:t,setCollapse:n}=e;const a=o.iv`
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
    background-color: transparent;  
  `,r=o.iv`
      filter: invert(var(--inversion-percentage));
  `;return(0,o.tZ)("div",{css:a},(0,o.tZ)("button",{css:l,onClick:()=>{n(!t)}},t?(0,o.tZ)("img",{css:r,src:c,className:"icon-tabler-arrow-bar-up"}):(0,o.tZ)("img",{css:r,src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPAAAADwCAYAAAA+VemSAAAABmJLR0QA/wD/AP+gvaeTAAAG/ElEQVR4nO3dTW7bRhgG4Ddu4bTHa72Ir+UbNKskm/YgvYJhGF61B2gcIEDdRSVAMGxLIueHQz4PMBtDGeoj9EIfxWEmAQAAAAAAAAAAAAAAAAAAAAAAACjnMsl1ks9JbpN8343b3d+ud68BFuYqyUOSpyPjYfdaYAEuktzkeHCfj5vdvwU6mhLewxADnVxlenj3QzsNHVwmucv8AN8ned/2rQPXmR/e/fjQ+L1TiB8xxvVLwbl+LTgXcIIS7fN+3DV+7xTyrvcbYLLHJD8Vmutbkp8LzUVDAjyup8Lz+SwMyDUwDEyAYWACDAMTYBiYAMPABBgGJsAwMAGGgQkwDEyAYWACDAMTYBiYAMPABBgGJsAwMAGGgQkwDEyAYWACDAMT4Dq2tkvg1uplxVrtEljqv5Tdj6nsisgqtN4lsHeA7YrIqszZJfBjzv9Q9wzwxe49Tz2WXRFZlBK7BJ4b4l4Bnhve/dBOswildgl8SvIpyY8nHrdHgC+S/FboePexKyILUHKXwHNC3DrAJcO7H3ZFpLsvKR+mU9rplgEu1TY/H1+OHBeqK7lL4DkhbhXgWuF9il0RWYDH1PlwP+XtdrpFgGu0zYfj8ZXjQjNfU+8D/laIawe4dnifkvzz+mmFNmq10IfjpXa6ZoBrts2HQwtNdzV+xDolxLUC3Cq8T/EjFgtQ+jbSW+Owna4R4BZt8+FwG4nuSi7kOCfEpedtHd77WMjBQpRYSnnOqNHitmqb98NSShZlzsMMWxseZmBxWv74M/KY8uQVNNH6OnK08SnJD1NPLrQgxMLL4IRYeBmcEAsvg9t6iIWX4W01xMLLamwtxMLL6mzlPrH7vKzW2r+JffOyemsNsfCyGWsLsfCyOWsJsfCyWaOHWHjZvFFDLLywM9otJreK4JlRQiy88Iqlh1h44YilXhO75oUTLS3EwgtnWko7rW2GiXqHWHhhpl4hFl4opPU1sWteKKzVN7FvXqikdoiFFyqr1U5rm6GR0iEWXmisVDutbYZO5oZYeKGzi0zb2vQmwguLcZXkIceD+xCba8MiXSa5TvI5yW2S77txu/vb9e41AAAAAAAAAAAAwCK9tBTw1MX5S1oyqA51bM6pi/FPHb0W7atDHZsy9XG4U0erx+bUoY5NqnmSD0+2OtQxYh2LdpX6J3k/arY96lDH5lwmuUu7E32f5L061DFIHYt3nXYneT8+qEMdg9Rxkp4X4b90OOavFeZUx3TqGFjLNmc/7tShjkHqOMm7XgdO8pjkp8bH/Jbk58JzqmM6dczUs4V+6nDMfyvMqY7p1DFTzwD/1eGYf1eYUx3TqWOmngH+cyXHVMeyjrmWOk7SM8B/dDjm7xXmVMd06hjYWm64q0Mdm1zIkaxnyZs61LFZa1l0rg51bNJaHvtShzo2bS0PXqtDHZu1lv/6RB3qAAAAAAAAAAAAAJp7acmgpYAwgFMX7VuMDwsy9bE5j8NBZxdJPmb6o3EfI8TQxdzwCjF0cpHkt5R7SP1Tkh9bFgBbVTq8QgyNlGqbtdPQWO3wCjFUUqtt1k5DZa3DK8RQSKu2WTsNhfUOrxDDRL3aZu00zLS08AoxnGgpbbN2Gs609PAKMbxilPAKMTyz1GveY8M1MZs3aniFmM0bPbxCzGatJbxCzOasLbxCzGasNbxCzOqNdqto6nCLidVZ+zevb2JWa2vhFWJWY6vhFWKGt/XwCjHDEl4hZlDCK8QMSniFmEFt5T7v3OE+MYs0ZYvPrY6biecYqrhK+2+xEeZ8a9hknEW4THKXdh/8T0l+qDBv6+v3+yTvzz7bUNh12oc3FeZO2of4wzknGmr4kjYf9uc//tQIcNL2x7gvJ55jqKZF+/zSL7e1Apy0C/Hd0bMLlT2m7of8sG0+VDPASZt2+vH10wptfE378KbCsV5SO8T/vHJcaKZWC31swUOLACd122ktNN3V+BHrlNVKrQKc1AuxH7HorvRtpLfa5kMtA5zUaafdRqK7kgs5Tg1vCh3vnAAnZUN8Hws5WIgSSynPXeTfI8BJuXbaUkoWZc7DDFOe0OkV4GR+iD3MwOJcZFqIbzLt8bqeAU7a1wtNXCV5yPEP8kPmtZG9A7zXql5o5jL//zr9Ocltku+7cbv72/XuNXMsJcBJm3p5wbveb4DJ5obuOZ+FAbkWgYEJMAxMgGFgAgwDE2AYmADDwAQYBibAMDABhoEJMAxMgGFgAgwDE2AYmADDwAQYBibAMDABhoEJMAxMgGFgAjyukltzfi04Fw0J8Lj+KjjX3wXnoiEBHtefC52LhgR4XH8UnOv3gnMBJyi1K+J97BIIXZTYFdF2J9DRnF0R7RIIndklEFbALoEwOLsEAgAAAAAAAAAAAAAAAAAAAAAAAE39B2tV13Hdy+hQAAAAAElFTkSuQmCC",className:"icon-tabler-arrow-bar-down"})))}function d(e){let{url:t}=e;const n=o.iv`
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

      
    `,a=o.iv`
      filter: invert(var(--inversion-percentage));
      ::before{
        mix-blend-mode: lighten; /* The blend mode determines how the overlay interacts with the image */
        opacity: 0.5;
      }
    `;return(0,o.tZ)("button",{css:n,onClick:()=>{window.open(t,"_blank")}},(0,o.tZ)("img",{css:a,src:"data:image/png;base64,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"}))}function u(e){let{path:t,javaC:n,javaE:c,cssURL:u,javaHighlight:h,height:b,frame:g,tabs:v}=e;const[k,w]=(0,a.useState)(""),[A,f]=(0,a.useState)(""),[x,y]=(0,a.useState)(""),[C,E]=(0,a.useState)(!(!n||!c)),[N,B]=(0,a.useState)(!1),[D,Z]=(0,a.useState)({});(0,a.useEffect)((()=>{c&&fetch(c).then((e=>e.text())).then((e=>{f(e);const t=new URL(c).pathname.split("/"),n=t[t.length-1];Z((e=>({...e,javaFile:n})))})),n&&fetch(n).then((e=>e.text())).then((e=>{w(e)})),u&&fetch(u).then((e=>e.text())).then((e=>{y(e);const t=new URL(u).pathname.split("/"),n=t[t.length-1];Z((e=>({...e,cssFile:n})))}))}),[]);const S=o.iv`
		display: flex;
    flex-direction: column;
    background-color: var(--code-display-color);
		width: 100%;
    margin-bottom: 16px;
    padding: ${"hidden"==g?"0 15px 0 15px;":"7px 15px 0 15px;"};
    box-shadow: var(--ifm-global-shadow-lw);
    `,T=o.iv`
    min-height: 100px;
    height: 100%;
    width: 100%;
    height: ${b};
  `,L=o.iv`
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

  `,O=o.iv`
  width: 100%;
  `,j=o.iv`
  display: flex;
  justify-content: flex-end;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
    ${N&&"opacity: 1;"};
    
  `;return(0,o.tZ)("div",{css:S},"hidden"!=g?(0,o.tZ)("div",{onMouseEnter:()=>{B(!0)},onMouseLeave:()=>B(!1),css:O},(0,o.tZ)("div",{css:j},(0,o.tZ)(d,{url:t})),(0,o.tZ)("iframe",{loading:"lazy",src:t+"&theme="+("dark"===(0,p.I)().colorMode?"dark":"light"),css:T})):null,(0,o.tZ)(s.Z,{css:L,summary:(0,o.tZ)("summary",null,"Show Code")},n&&c?(0,o.tZ)(m,{collapse:C,setCollapse:E}):null,u?(0,o.tZ)(l.Z,null,(0,o.tZ)(r.Z,{value:v?v[0]:"Java",label:v?v[0]:D.javaFile,default:!0},(0,o.tZ)(i.Z,{className:"codeDemoBlock",language:"java",showLineNumbers:!0,metastring:h},C?k:A)),(0,o.tZ)(r.Z,{value:v?v[1]:"CSS",label:v?v[1]:D.cssFile},(0,o.tZ)(i.Z,{className:"codeDemoBlock",language:"css",showLineNumbers:!0},x))):(0,o.tZ)(l.Z,null,(0,o.tZ)(r.Z,{value:v?v[0]:"Java",label:v?v[0]:D.javaFile,default:!0},(0,o.tZ)(i.Z,{className:"codeDemoBlock",language:"java",showLineNumbers:!0,metastring:h},C?k:A)))))}},2665:(e,t,n)=>{n.d(t,{Z:()=>c});n(7294);var a=n(917),o=n(8230),l=n(4387),r=n(5464),s=n(6214),i=n(6770);function c(e){let{label:t,href:n,clickable:c,iconName:p,tooltipText:m,color:d}=e;const u=a.iv`
    margin-right: 10px;
    padding-left: 5px;
    background-color: var(--chip-background);
    color: var(--chip-text);

    :hover{
      color: inherit;
      background-color: var(--chip-background-hover);
    }
  `,h=a.iv`
      color: var(--chip-icon-color) !important;
  `;let b;return b="scoped"===p?(0,a.tZ)(Biotech,{css:h}):"shadow"===p?(0,a.tZ)(r.Z,{css:h}):"code"===p?(0,a.tZ)(s.Z,{css:h}):(0,a.tZ)(i.Z,{css:h}),(0,a.tZ)(o.Z,{title:m,arrow:!0,css:u},(0,a.tZ)(l.Z,{label:t,component:"a",href:c?n:null,icon:b,clickable:c,color:d,target:"_blank"}))}},7796:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(7294);function o(e){var t,n,o,l;const[r,s]=(0,a.useState)(null);if((0,a.useEffect)((()=>{fetch("https://basishub.github.io/basis-next/bbj-components.json").then((e=>e.json())).then((t=>{const n=t.components.find((t=>t.tag===e.tag));s(n)}))}),[]),!r)return a.createElement("div",null,"Loading...");const i=null==(t=r.docsTags)?void 0:t.filter((e=>"part"===e.name)),c=null==(n=r.slots)?void 0:n.map((e=>({name:e.name,desc:e.docs}))),p=null==(o=r.styles)?void 0:o.map((e=>({name:e.name,description:e.docs}))),m=null==(l=r.props)?void 0:l.map((e=>({display:e.reflectToAttr,attr:e.attr,desc:e.docs,type:e.type})));return a.createElement(a.Fragment,null,"parts"==e.table&&a.createElement(a.Fragment,null,a.createElement("table",{className:"custom--table"},a.createElement("thead",null,a.createElement("tr",{key:"header"},a.createElement("th",null,"Part"),a.createElement("th",null,"Description"))),a.createElement("tbody",null,null==i?void 0:i.map((t=>{var n;const[o,l]=t.text.split(" - ");return!(null!=(n=e.exclusions)&&n.includes(o))&&a.createElement("tr",{key:t.id},a.createElement("td",null,a.createElement("code",null,o)),a.createElement("td",null,l))}))))),"slots"==e.table&&a.createElement(a.Fragment,null,a.createElement("table",{className:"custom--table"},a.createElement("thead",null,a.createElement("tr",{key:"header"},a.createElement("th",null,"Slot"),a.createElement("th",null,"Description"))),a.createElement("tbody",null,null==c?void 0:c.map((t=>{var n;return!(null!=(n=e.exclusions)&&n.includes(t.name))&&""!=t.name&&a.createElement("tr",{key:t.name},a.createElement("td",null,a.createElement("code",null,t.name)),a.createElement("td",null,t.desc))}))))),"properties"==e.table&&a.createElement(a.Fragment,null,a.createElement("table",{className:"custom--table"},a.createElement("thead",null,a.createElement("tr",{key:"header"},a.createElement("th",null,"Name"),a.createElement("th",null,"Description"))),a.createElement("tbody",null,null==p?void 0:p.map((t=>{var n;return!(null!=(n=e.exclusions)&&n.includes(t.name))&&a.createElement("tr",{key:t.name},a.createElement("td",null,a.createElement("code",null,t.name)),a.createElement("td",null,t.description))}))))),"reflects"==e.table&&a.createElement(a.Fragment,null,a.createElement("table",{className:"custom--table"},a.createElement("thead",null,a.createElement("tr",{key:"header"},a.createElement("th",null,"Attribute"),a.createElement("th",null,"Description"),a.createElement("th",null,"Type"))),a.createElement("tbody",null,null==m?void 0:m.map((t=>{var n;return null!=t.attr&&0==t.display&&!(null!=(n=e.exclusions)&&n.includes(t.attr))&&a.createElement("tr",{key:t.attr},a.createElement("td",null,a.createElement("code",null,t.attr)),a.createElement("td",null,t.desc),a.createElement("td",null,t.type))}))))),"properties"!=e.table&&"parts"!=e.table&&"slots"!=e.table&&"reflects"!=e.table&&a.createElement(a.Fragment,null,a.createElement("h4",null,"Shadow Parts"),a.createElement("table",{className:"custom--table"},a.createElement("thead",null,a.createElement("tr",{key:"header"},a.createElement("th",null,"Part"),a.createElement("th",null,"Description"))),a.createElement("tbody",null,null==i?void 0:i.map((e=>{const[t,n]=e.text.split(" - ");return a.createElement("tr",{key:e.id},a.createElement("td",null,a.createElement("code",null,t)),a.createElement("td",null,n))})))),a.createElement("h4",null,"CSS Properties"),a.createElement("table",{className:"custom--table"},a.createElement("thead",null,a.createElement("tr",{key:"header"},a.createElement("th",null,"Name"),a.createElement("th",null,"Description"))),a.createElement("tbody",null,null==p?void 0:p.map((e=>a.createElement("tr",{key:e.name},a.createElement("td",null,a.createElement("code",null,e.name)),a.createElement("td",null,e.description)))))),a.createElement("h4",null,"Reflected Attributes"),a.createElement("table",{className:"custom--table"},a.createElement("thead",null,a.createElement("tr",{key:"header"},a.createElement("th",null,"Attribute"),a.createElement("th",null,"Description"),a.createElement("th",null,"Type"))),a.createElement("tbody",null,null==m?void 0:m.map((t=>{var n;return null!=t.attr&&0==t.display&&!(null!=(n=e.exclusions)&&n.includes(t.attr))&&a.createElement("tr",{key:t.attr},a.createElement("td",null,a.createElement("code",null,t.attr)),a.createElement("td",null,t.desc),a.createElement("td",null,t.type))}))))))}},1415:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(7294),o=n(8397);function l(e){return a.createElement(a.Fragment,null,a.createElement(o.Z,e))}},20:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>p,default:()=>b,frontMatter:()=>c,metadata:()=>m,toc:()=>u});var a=n(7462),o=(n(7294),n(3905)),l=n(6957),r=n(7796),s=n(3273),i=n(2665);const c={sidebar_position:1,title:"ChoiceBox",slug:"choicebox"},p=void 0,m={unversionedId:"components/list-components/choice-box",id:"components/list-components/choice-box",title:"ChoiceBox",description:"The ChoiceBox component is a user interface element designed to present users with a list of options or choices. Users can select a single option from this list, typically by clicking the ChoiceBox, which triggers the display of a dropdown list containing available choices. Users can also interact with the ChoiceBox with the arrow keys. When a user makes a selection, the chosen option is then displayed in the ChoiceBox.",source:"@site/docs/components/list-components/choice-box.md",sourceDirName:"components/list-components",slug:"/components/list-components/choicebox",permalink:"/docs/components/list-components/choicebox",draft:!1,editUrl:"https://github.com/DwcJava/dwcjava.github.io/tree/website/docs/components/list-components/choice-box.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"ChoiceBox",slug:"choicebox"},sidebar:"tutorialSidebar",previous:{title:"Lists",permalink:"/docs/components/list-components/lists"},next:{title:"ComboBox",permalink:"/docs/components/list-components/combobox"}},d={},u=[{value:"Usages",id:"usages",level:2},{value:"Constructors",id:"constructors",level:2},{value:"Dropdown Type",id:"dropdown-type",level:2},{value:"Max Row Count",id:"max-row-count",level:2},{value:"Opening Dimensions",id:"opening-dimensions",level:2},{value:"Events",id:"events",level:2},{value:"Adding Events",id:"adding-events",level:3},{value:"Removing Events",id:"removing-events",level:3},{value:"Styling",id:"styling",level:2},{value:"Expanses",id:"expanses",level:3},{value:"Themes",id:"themes",level:3},{value:"Shadow Parts",id:"shadow-parts",level:3},{value:"CSS Properties",id:"css-properties",level:3},{value:"Reflected Attributes",id:"reflected-attributes",level:3},{value:"Best Practices",id:"best-practices",level:2}],h={toc:u};function b(e){let{components:t,...c}=e;return(0,o.kt)("wrapper",(0,a.Z)({},h,c,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(i.Z,{tooltipText:"This component will render with a shadow DOM, an API built into the browser that facilitates encapsulation.",label:"Shadow",component:"a",href:"../../glossary#shadow-dom",target:"_blank",clickable:!0,iconName:"shadow",mdxType:"DocChip"}),(0,o.kt)(i.Z,{tooltipText:"The name of the web component that will render in the DOM.",label:"bbj-list-button",href:"https://basishub.github.io/basis-next/#/web-components/bbj-list-button",clickable:!1,iconName:"code",mdxType:"DocChip"}),(0,o.kt)(s.Z,{type:"engine",location:"org/dwcj/component/button/Button",top:"true",mdxType:"JavadocLink"}),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"ChoiceBox")," component is a user interface element designed to present users with a list of options or choices. Users can select a single option from this list, typically by clicking the ",(0,o.kt)("inlineCode",{parentName:"p"},"ChoiceBox"),", which triggers the display of a dropdown list containing available choices. Users can also interact with the ",(0,o.kt)("inlineCode",{parentName:"p"},"ChoiceBox")," with the arrow keys. When a user makes a selection, the chosen option is then displayed in the ",(0,o.kt)("inlineCode",{parentName:"p"},"ChoiceBox"),". "),(0,o.kt)(l.Z,{path:"https://hot.bbx.kitchen/webapp/controlsamples?class=componentdemos.comboboxdemos.ChoiceBoxDemo",javaE:"https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/java/componentdemos/comboboxdemos/ChoiceBoxDemo.java",cssURL:"https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/resources/css/comboboxstyles/demo_styles.css",height:"250px",mdxType:"ComponentDemo"}),(0,o.kt)("h2",{id:"usages"},"Usages"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"ChoiceBox")," components are used for various purposes, such as selecting items from a menu, choosing from a list of categories, or picking options from predefined sets. They provide an organized and visually pleasing way for users to make selections, particularly when there are multiple options available. Common usages include:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"User Selection of Options"),": The primary purpose of a ",(0,o.kt)("inlineCode",{parentName:"p"},"ChoiceBox")," is to allow users to select a single option from a list. This is valuable in applications that require users to make choices, such as:"),(0,o.kt)("blockquote",{parentName:"li"},(0,o.kt)("ul",{parentName:"blockquote"},(0,o.kt)("li",{parentName:"ul"},"Selecting items from a list"),(0,o.kt)("li",{parentName:"ul"},"Choosing from a list of categories"),(0,o.kt)("li",{parentName:"ul"},"Picking options from predefined sets")))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Form Inputs"),": When designing forms that require users to input specific options, the ",(0,o.kt)("inlineCode",{parentName:"p"},"ChoiceBox")," simplifies the selection process. Whether it's selecting a country, state, or any other option from a predefined list, the ",(0,o.kt)("inlineCode",{parentName:"p"},"ChoiceBox")," streamlines the input process.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Filtering and Sorting"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"ChoiceBox")," can be employed for filtering and sorting tasks in applications. Users can choose filter criteria or sorting preferences from a list, facilitating the organization and navigation of data.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Configuration and Settings"),": When your application includes settings or configuration options, the ",(0,o.kt)("inlineCode",{parentName:"p"},"ChoiceBox")," provides an intuitive way for users to adjust preferences. Users can pick settings from a list, making it easy to tailor the application to their needs."))),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"The ",(0,o.kt)("inlineCode",{parentName:"p"},"ChoiceBox")," is intended for use when a preset number of options are available, and custom options should not be allowed or included. If allowing users to enter custom values is desired, use a ",(0,o.kt)("a",{parentName:"p",href:"/docs/components/list-components/combobox"},(0,o.kt)("inlineCode",{parentName:"a"},"ComboBox"))," instead")),(0,o.kt)("h2",{id:"constructors"},"Constructors"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"ChoiceBox()")),": Constructs a new ",(0,o.kt)("inlineCode",{parentName:"li"},"ChoiceBox")," without a label."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"ChoiceBox(String label)")),": Constructs a new ",(0,o.kt)("inlineCode",{parentName:"li"},"ChoiceBox")," with the specified label."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"ChoiceBox(String label, ComponentEventListener<ListSelectEvent> selectListener)")),": Constructs a new ",(0,o.kt)("inlineCode",{parentName:"li"},"ChoiceBox")," with the given label and a listener to handle item selection events.")),(0,o.kt)("h2",{id:"dropdown-type"},"Dropdown Type"),(0,o.kt)("p",null,"Using the ",(0,o.kt)("inlineCode",{parentName:"p"},"setDropdownType()")," method will assign a value to the ",(0,o.kt)("inlineCode",{parentName:"p"},"type")," attribute of a ",(0,o.kt)("inlineCode",{parentName:"p"},"ChoiceBox"),", and a corresponding value for the ",(0,o.kt)("inlineCode",{parentName:"p"},"data-dropdown-for")," attribute in the dropdown of the ",(0,o.kt)("inlineCode",{parentName:"p"},"ChoiceBox"),". This is helpful for styling, as the dropdown is taken out of its current position in the DOM and relocated to the end of the page body when opened."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"example type",src:n(6569).Z,width:"995",height:"86"}),"\n",(0,o.kt)("img",{alt:"example type",src:n(2134).Z,width:"436",height:"85"})),(0,o.kt)("p",null,"This detachment creates a situation where directly targeting the\ndropdown using CSS or shadow part selectors from the parent component becomes challenging, unless you make use of the dropdown type attribute."),(0,o.kt)("h2",{id:"max-row-count"},"Max Row Count"),(0,o.kt)("p",null,"By default, the number of rows displayed in the dropdown of a ",(0,o.kt)("inlineCode",{parentName:"p"},"ChoiceBox")," will be increased to fit the content. However, using the ",(0,o.kt)("inlineCode",{parentName:"p"},"setMaxRowCount()")," method allows for control over how many items are displayed."),(0,o.kt)(l.Z,{path:"https://hot.bbx.kitchen/webapp/controlsamples?class=componentdemos.comboboxdemos.ChoiceBoxMaxRowDemo",javaE:"https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/java/componentdemos/comboboxdemos/ChoiceBoxMaxRowDemo.java",cssURL:"https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/resources/css/comboboxstyles/demo_styles.css",height:"250px",mdxType:"ComponentDemo"}),(0,o.kt)("h2",{id:"opening-dimensions"},"Opening Dimensions"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"ChoiceBox")," component has methods that allow manipulation of the dropdown dimensions. The ",(0,o.kt)("strong",{parentName:"p"},"maximum height")," and ",(0,o.kt)("strong",{parentName:"p"},"minimum width")," of the dropdown can be set using the ",(0,o.kt)("inlineCode",{parentName:"p"},"setOpenHeight()")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"setOpenWidth()")," methods, respectively. "),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Passing a ",(0,o.kt)("inlineCode",{parentName:"p"},"String")," value to either of these methods will allow for any valid CSS styling property to be applied, such as pixels, viewport dimensions, or other valid rules. Passing an ",(0,o.kt)("inlineCode",{parentName:"p"},"int")," will set the value passed in pixels.")),(0,o.kt)("h2",{id:"events"},"Events"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"ChoiceBox")," class provides methods to add and remove event listeners for the following events, as well as events common to all list components:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"center"},"Events"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("a",{parentName:"td",href:"../events/OpenEvent"},(0,o.kt)("inlineCode",{parentName:"a"},"OpenEvent"))),(0,o.kt)("td",{parentName:"tr",align:null},"An event that is triggered when a component loses focus.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("a",{parentName:"td",href:"../events/CloseEvent"},(0,o.kt)("inlineCode",{parentName:"a"},"CloseEvent"))),(0,o.kt)("td",{parentName:"tr",align:null},"An event that is triggered when a component gains focus, opposite of a blur event.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("a",{parentName:"td",href:"../events/ListClickEvent"},(0,o.kt)("inlineCode",{parentName:"a"},"ListClickEvent"))),(0,o.kt)("td",{parentName:"tr",align:null},"An event that is triggered when the mouse cursor enters the boundaries of a component.")))),(0,o.kt)("admonition",{title:"Notice",type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"For a list of additional events supported by the ",(0,o.kt)("inlineCode",{parentName:"p"},"ChoiceBox"),", see ",(0,o.kt)("a",{parentName:"p",href:"/docs/components/list-components/lists#shared-events"},"this section")," which outlines shared events amongst list components.")),(0,o.kt)("h3",{id:"adding-events"},"Adding Events"),(0,o.kt)("p",null,"To add an event listener, use one of the following patterns:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"choiceBox.addOpenListener(e -> {\n  //Executed when the event fires\n});\n\n//OR\n\nchoiceBox.addOpenListener(new ListOpenListener() {\n  @Override\n  public void onComponentEvent(PropertyChangeEvent e){\n    //Executed when the event fires\n  }\n});\n\n//OR\n\nchoiceBox.addOpenListener(this::listOpenMethod);\n")),(0,o.kt)("p",null,"Additional syntactic sugar methods, or aliases, have been added to allow for alternative addition of events by using the ",(0,o.kt)("inlineCode",{parentName:"p"},"on")," prefix followed by the event, such as:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"choiceBox.onOpen(e -> {\n  //Executed when the event fires\n});\n")),(0,o.kt)("h3",{id:"removing-events"},"Removing Events"),(0,o.kt)("p",null,"To remove an event listener, use the appropriate method:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"choiceBox.removeOpenListener(listener);\n")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"When adding an event listener, a ",(0,o.kt)("inlineCode",{parentName:"p"},"ListenerRegistration")," object will be returned. This can be used, among other things, to remove the event later on.")),(0,o.kt)("h2",{id:"styling"},"Styling"),(0,o.kt)("h3",{id:"expanses"},"Expanses"),(0,o.kt)("p",null,"There are five ",(0,o.kt)("inlineCode",{parentName:"p"},"ChoiceBox")," expanses that are supported in the DWCJ which allow for quick styling without using CSS. Expanses are supported by use of a built-in enum class. ",(0,o.kt)("br",null)),(0,o.kt)(l.Z,{path:"https://hot.bbx.kitchen/webapp/controlsamples?class=componentdemos.comboboxdemos.ComboboxExpanseDemo",javaE:"https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/java/componentdemos/comboboxdemos/ComboboxExpanseDemo.java",javaC:"https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/code_snippets/combobox/Expanse.txt",cssURL:"https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/resources/css/comboboxstyles/expanse_styles.css",height:"150px",mdxType:"ComponentDemo"}),(0,o.kt)("h3",{id:"themes"},"Themes"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"ChoiceBox")," component comes with 14 themes built in for quick styling without the use of CSS. Theming is supported by use of a built-in enum class."),(0,o.kt)(l.Z,{path:"https://hot.bbx.kitchen/webapp/controlsamples?class=componentdemos.comboboxdemos.ComboboxThemeDemo",javaE:"https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/java/componentdemos/comboboxdemos/ComboboxThemeDemo.java",javaC:"https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/code_snippets/combobox/Theme.txt",cssURL:"https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/resources/css/comboboxstyles/theme_styles.css",height:"170px",mdxType:"ComponentDemo"}),(0,o.kt)("h3",{id:"shadow-parts"},"Shadow Parts"),(0,o.kt)("p",null,"These are the various parts of the ",(0,o.kt)("a",{parentName:"p",href:"../../glossary#shadow-dom"},"shadow DOM")," for the ",(0,o.kt)("inlineCode",{parentName:"p"},"ChoiceBox")," component, which will be required when styling via CSS is desired."),(0,o.kt)(r.Z,{tag:n(5731).Z,table:"parts",exclusions:"",mdxType:"TableBuilder"}),(0,o.kt)("h3",{id:"css-properties"},"CSS Properties"),(0,o.kt)("p",null,"These are the various CSS properties that are used in the component, with a short description of their use."),(0,o.kt)(r.Z,{tag:n(5731).Z,exclusions:"",table:"properties",mdxType:"TableBuilder"}),(0,o.kt)("h3",{id:"reflected-attributes"},"Reflected Attributes"),(0,o.kt)("p",null,"The reflected attributes of a component will be shown as attributes in the rendered HTML element for the component in the DOM. This means that styling can be applied using these attributes."),(0,o.kt)(r.Z,{tag:n(5731).Z,table:"reflects",exclusions:"",mdxType:"TableBuilder"}),(0,o.kt)("h2",{id:"best-practices"},"Best Practices"),(0,o.kt)("p",null,"To ensure an optimal user experience when using the ",(0,o.kt)("inlineCode",{parentName:"p"},"ChoiceBox")," component, consider the following best practices:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Clear and Limited Options"),": Keep the list of choices concise where possible, and relevant to the user's task. A ",(0,o.kt)("inlineCode",{parentName:"p"},"ChoiceBox")," is ideal for presenting a clear list of options.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"User-Friendly Labels"),": Ensure that the displayed labels for each option are user-friendly and self-explanatory. Make sure users can easily understand the purpose of each choice.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Default Selection"),": Set a default selection when the ChoiceBox is initially displayed. This ensures a pre-selected option, reducing the number of interactions required to make a choice.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"ChoiceBox vs. Other List Components"),": A ",(0,o.kt)("inlineCode",{parentName:"p"},"ChoiceBox")," should be used over other List components in the following situations:"),(0,o.kt)("blockquote",{parentName:"li"},(0,o.kt)("ul",{parentName:"blockquote"},(0,o.kt)("li",{parentName:"ul"},"Multiple Selection is not needed or required, and all items do not need to be displayed at once."),(0,o.kt)("li",{parentName:"ul"},"A selection of predefined choices is desired, preventing users from entering custom or unexpected data."))))))}b.isMDXComponent=!0},6569:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/type-83d87c1e759c714c4816a2ea2f03be51.png"},2134:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/type_zoomed-6a20e6b09a761ba1478821a96bc3c7b1.png"},5731:e=>{e.exports=JSON.parse('{"LN":"bbj-app-layout","zx":"bbj-button","Kx":"bbj-cedit","XZ":"bbj-checkbox","gN":"bbj-editbox","iR":"bbj-slider","wb":"bbj-list","Z":"bbj-list-button","Ct":"bbj-list-edit","ko":"bbj-progressbar","EU":"bbj-radio","dy":"bbj-drawer","Vq":"bbj-dialog","JO":"bbj-icon"}')}}]);