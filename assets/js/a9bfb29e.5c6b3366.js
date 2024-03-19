"use strict";(self.webpackChunkdwcj_documentation=self.webpackChunkdwcj_documentation||[]).push([[5430],{7722:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>d,default:()=>b,frontMatter:()=>c,metadata:()=>u,toc:()=>h});var o=a(5893),r=a(1151),s=(a(4866),a(5162),a(6521)),n=a(9469),i=a(7796),l=a(3273);const c={sidebar_position:0,title:"AppLayout"},d=void 0,u={id:"layouts/app-layout",title:"AppLayout",description:"The AppLayout is a comprehensive responsive layout component that provides a header, a footer, a drawer, and content section. The header and footer are fixed, the drawer slides in and out of the viewport, and the content is scrollable.",source:"@site/docs/layouts/app-layout.md",sourceDirName:"layouts",slug:"/layouts/app-layout",permalink:"/docs/layouts/app-layout",draft:!1,unlisted:!1,editUrl:"https://github.com/webforj/webforj-docs/tree/website/docs/layouts/app-layout.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{sidebar_position:0,title:"AppLayout"},sidebar:"documentationSidebar",previous:{title:"Layouts",permalink:"/docs/category/layouts"},next:{title:"FlexLayout",permalink:"/docs/layouts/flex_layouts"}},p={},h=[{value:"Features",id:"features",level:3},{value:"Overview",id:"overview",level:3},{value:"Full-Width Navbars",id:"full-width-navbars",level:3},{value:"Multiple Toolbars",id:"multiple-toolbars",level:3},{value:"Sticky Toolbars",id:"sticky-toolbars",level:3},{value:"Mobile Navigation Layout",id:"mobile-navigation-layout",level:3},{value:"Drawer Breakpoint",id:"drawer-breakpoint",level:3},{value:"Styling",id:"styling",level:2},{value:"Shadow Parts",id:"shadow-parts",level:3},{value:"Slots",id:"slots",level:3},{value:"CSS Properties",id:"css-properties",level:3},{value:"Reflected Attributes",id:"reflected-attributes",level:3},{value:"Dependencies",id:"dependencies",level:3}];function m(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(l.Z,{type:"engine",location:"org/dwcj/component/layout/applayout/AppLayout",top:"true"}),"\n",(0,o.jsxs)(t.p,{children:["The ",(0,o.jsx)(t.code,{children:"AppLayout"})," is a comprehensive responsive layout component that provides a header, a footer, a drawer, and content section. The header and footer are fixed, the drawer slides in and out of the viewport, and the content is scrollable."]}),"\n",(0,o.jsx)(t.p,{children:"This component can be used to build common application layouts, such as a dashboard."}),"\n",(0,o.jsx)(t.h3,{id:"features",children:"Features"}),"\n",(0,o.jsx)(t.p,{children:"The Webforj App Layout is a component which allows for building common application layouts."}),"\n",(0,o.jsxs)("ul",{children:[(0,o.jsx)("li",{children:"Easy to use and customize"}),(0,o.jsx)("li",{children:"Responsive design"}),(0,o.jsx)("li",{children:"Multiple layout options"}),(0,o.jsx)("li",{children:"Works with Webforj Dark Mode"})]}),"\n",(0,o.jsx)(t.p,{children:"It provides a header, footer , drawer, and content section all built into a responsive component which can be easily customized to quickly build common application layouts such as a dashboard. The header and footer are fixed, the drawer slides in and out of the viewport, and the content is scrollable."}),"\n",(0,o.jsxs)(t.p,{children:["Each part of the layout is a ",(0,o.jsx)(t.code,{children:"Div"}),", which can contain any valid Webforj control. For best results, the application should include a viewport meta tag which contains viewport-fit=cover. The meta tag causes the viewport to be scaled to fill the device display."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-java",children:'@AppMeta(name = "viewport", content = "width=device-width, initial-scale=1.0, viewport-fit=cover, user-scalable=no")\n'})}),"\n",(0,o.jsx)(t.h3,{id:"overview",children:"Overview"}),"\n",(0,o.jsx)(t.p,{children:"The following code sample will result in an application with a collapsible sidebar that contains a logo and tabs for various content options and a header. The demo uses the dwc-icon-button web component to create a drawer toggle button. The button has the data-drawer-toggle attribute which instructs the DwcAppLayout to listen to click events coming from that component to toggle the drawer state."}),"\n",(0,o.jsx)(s.Z,{url:"https://demo.webforj.com/webapp/controlsamples?class=layout_demos.applayout.AppLayoutDemo",mobile:"false"}),"\n",(0,o.jsx)(n.Z,{frame:"hidden",javaE:"https://raw.githubusercontent.com/webforj/ControlSamples/main/src/main/java/layout_demos/applayout/AppLayoutDemo.java",cssURL:"https://raw.githubusercontent.com/webforj/ControlSamples/main/src/main/resources/css/applayoutstyles/applayout_styles.css"}),"\n",(0,o.jsx)(t.h3,{id:"full-width-navbars",children:"Full-Width Navbars"}),"\n",(0,o.jsx)(t.p,{children:"By default, the AppLayout renders the header and the footer in the off-screen mode. The off-screen mode means that the header and the footer position will be shifted to fit beside the opened drawer. Disabling this mode will cause the header and footer to take the full available space and shift the drawer top and bottom position to fit with the header and the footer."}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-java",metastring:"showLineNumbers",children:"AppLayout myApp = new AppLayout();\r\n\r\nmyApp.setHeaderOffscreen(false);\r\nmyApp.setFooterOffscreen(false);\n"})}),"\n",(0,o.jsx)(s.Z,{url:"https://demo.webforj.com/webapp/controlsamples?class=layout_demos.applayout.AppLayoutFullNavbar",mobile:"false"}),"\n",(0,o.jsx)(n.Z,{frame:"hidden",javaE:"https://raw.githubusercontent.com/webforj/ControlSamples/main/src/main/java/layout_demos/applayout/AppLayoutFullNavbar.java",cssURL:"https://raw.githubusercontent.com/webforj/ControlSamples/main/src/main/resources/css/applayoutstyles/applayout_styles.css"}),"\n",(0,o.jsx)(t.h3,{id:"multiple-toolbars",children:"Multiple Toolbars"}),"\n",(0,o.jsx)(t.p,{children:"The navbar has no limit to the number of toolbars you can add. A toolbar is only a Div. To add an additional toolbar, simply add a new Div to the existing header div of the AppLayout."}),"\n",(0,o.jsx)(t.p,{children:"The following demo shows how to use two toolbars, The first one houses the drawer's toggle button and the application's title. The second toolbar houses a secondary navigation menu."}),"\n",(0,o.jsx)(s.Z,{url:"https://demo.webforj.com/webapp/controlsamples?class=layout_demos.applayout.AppLayoutMultipleHeaders",mobile:"false"}),"\n",(0,o.jsx)(n.Z,{frame:"hidden",javaE:"https://raw.githubusercontent.com/webforj/ControlSamples/main/src/main/java/layout_demos/applayout/AppLayoutMultipleHeaders.java",cssURL:"https://raw.githubusercontent.com/webforj/ControlSamples/main/src/main/resources/css/applayoutstyles/applayout_styles.css"}),"\n",(0,o.jsx)(t.h3,{id:"sticky-toolbars",children:"Sticky Toolbars"}),"\n",(0,o.jsx)(t.p,{children:"A sticky toolbar is a toolbar that remains visible at the top of the page when the user scrolls down but the navbar height is collapsed to make more space available for the page's content. Usually this kind of toolbar contains a fixed navigation menu which is relevant to the current page."}),"\n",(0,o.jsxs)(t.p,{children:["It is possible to create a sticky toolbars using the CSS custom property ",(0,o.jsx)(t.code,{children:"--dwc-app-layout-header-collapse-height"})," and the ",(0,o.jsx)(t.code,{children:"AppLayout.setHeaderReveal()"})," option."]}),"\n",(0,o.jsxs)(t.p,{children:["When ",(0,o.jsx)(t.code,{children:"AppLayout.setHeaderReveal(true)"})," is set called, the header will be visible on first render, and then hidden when the user starts scrolling down. Once the user starts scrolling up again the header will be revealed."]}),"\n",(0,o.jsxs)(t.p,{children:["With the help of the CSS custom property ",(0,o.jsx)(t.code,{children:"--dwc-app-layout-header-collapse-height"})," it is possible to control how much of the header navbar will be hidden."]}),"\n",(0,o.jsx)(s.Z,{url:"https://demo.webforj.com/webapp/controlsamples?class=layout_demos.applayout.AppLayoutStickyToolbar",mobile:"false"}),"\n",(0,o.jsx)(n.Z,{frame:"hidden",javaE:"https://raw.githubusercontent.com/webforj/ControlSamples/main/src/main/java/layout_demos/applayout/AppLayoutStickyToolbar.java",cssURL:"https://raw.githubusercontent.com/webforj/ControlSamples/main/src/main/resources/css/applayoutstyles/applayout_sticky_styles.css"}),"\n",(0,o.jsx)(t.h3,{id:"mobile-navigation-layout",children:"Mobile Navigation Layout"}),"\n",(0,o.jsx)(t.p,{children:"The bottom navbar can be used to provide a different version of the navigation at the bottom of application. This type of navigation is specifically popular in mobile apps."}),"\n",(0,o.jsxs)(t.p,{children:["Notice how the drawer is hidden in the following demo. The AppLayout widget supports three drawer positions: ",(0,o.jsx)(t.code,{children:"DrawerPlacement.LEFT"}),", ",(0,o.jsx)(t.code,{children:"DrawerPlacement.RIGHT"}),", and ",(0,o.jsx)(t.code,{children:"DrawerPlacement.HIDDEN"}),"."]}),"\n",(0,o.jsxs)(t.p,{children:["Same as ",(0,o.jsx)(t.code,{children:"AppLayout.setHeaderReveal()"}),", ",(0,o.jsx)(t.code,{children:"AppLayout.setFooterReveal()"})," is supported. When ",(0,o.jsx)(t.code,{children:"AppLayout.setFooterReveal(true)"})," is called, the footer will be visible at first render then hidden when the user starts scrolling up. Once the user starts scrolling down again the footer will be revealed."]}),"\n",(0,o.jsxs)(t.p,{children:["Be default, when the screen width is 800px or less , the drawer will be switched to popover mode. This is called the breakpoint. The popover mode means that the drawer will pop over the content area with an overlay. It is possible to configure the breakpoint by using the DwcAppLayout",":setDrawerBreakpoint"," method and the breakpoint must be a valid ",(0,o.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries",children:"media query"}),"."]}),"\n",(0,o.jsx)(s.Z,{url:"https://demo.webforj.com/webapp/controlsamples?class=layout_demos.applayout.AppLayoutMobile",mobile:"true"}),"\n",(0,o.jsx)(n.Z,{frame:"hidden",javaE:"https://raw.githubusercontent.com/webforj/ControlSamples/main/src/main/java/layout_demos/applayout/AppLayoutMobile.java",cssURL:"https://raw.githubusercontent.com/webforj/ControlSamples/main/src/main/resources/css/applayoutstyles/applayout_mobile.css"}),"\n",(0,o.jsx)(t.h3,{id:"drawer-breakpoint",children:"Drawer Breakpoint"}),"\n",(0,o.jsxs)(t.p,{children:["Be default, when the screen width is 800px or less , the drawer will be switched to popover mode. This is called the breakpoint. Popover mode means that the drawer will pop over the content area with an overlay. It is possible to configure the breakpoint by using the DwcAppLayout",":setDrawerBreakpoint"," method and the breakpoint must be a valid media query."]}),"\n",(0,o.jsx)(t.p,{children:"For instance, in the following sample. we configure the drawer breakpoint to be 500px or less."}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-java",children:'AppLayout demo = new AppLayout();\r\ndemo.setDrawerBreakpoint("(max-width:500px)");\n'})}),"\n",(0,o.jsx)(s.Z,{url:"https://demo.webforj.com/webapp/controlsamples?class=layout_demos.applayout.AppLayoutMobileDrawer",mobile:"true"}),"\n",(0,o.jsx)(n.Z,{frame:"hidden",javaE:"https://raw.githubusercontent.com/webforj/ControlSamples/main/src/main/java/layout_demos/applayout/AppLayoutMobileDrawer.java",cssURL:"https://raw.githubusercontent.com/webforj/ControlSamples/main/src/main/resources/css/applayoutstyles/applayout_mobile.css"}),"\n",(0,o.jsx)(t.h2,{id:"styling",children:"Styling"}),"\n",(0,o.jsx)(t.h3,{id:"shadow-parts",children:"Shadow Parts"}),"\n",(0,o.jsxs)(t.p,{children:["These are the various parts of the ",(0,o.jsx)(t.a,{href:"../glossary#shadow-dom",children:"shadow DOM"})," for the component, which will be required when styling via CSS is desired."]}),"\n",(0,o.jsx)(i.Z,{tag:a(7099).LN,table:"parts"}),"\n",(0,o.jsx)(t.h3,{id:"slots",children:"Slots"}),"\n",(0,o.jsxs)(t.p,{children:["Listed below are the slots available for utilization within the ",(0,o.jsx)(t.code,{children:"AppLayout"})," component. These slots act as placeholders within the component that control where the children of a customized element should be inserted within the shadow tree."]}),"\n",(0,o.jsx)(i.Z,{tag:a(7099).LN,table:"slots"}),"\n",(0,o.jsx)(t.h3,{id:"css-properties",children:"CSS Properties"}),"\n",(0,o.jsx)(t.p,{children:"These are the various CSS properties that are used in the component, with a short description of their use."}),"\n",(0,o.jsx)(i.Z,{tag:a(7099).LN,table:"properties"}),"\n",(0,o.jsx)(t.h3,{id:"reflected-attributes",children:"Reflected Attributes"}),"\n",(0,o.jsx)(t.p,{children:"The reflected attributes of a component will be shown as attributes in the rendered HTML element for the component in the DOM. This means that styling can be applied using these attributes."}),"\n",(0,o.jsx)(i.Z,{tag:a(7099).LN,table:"reflects"}),"\n",(0,o.jsx)(t.h3,{id:"dependencies",children:"Dependencies"}),"\n",(0,o.jsx)(t.p,{children:"This component relies on the following components - see the related article for more detailed styling information:"}),"\n",(0,o.jsx)(i.Z,{tag:"dwc-app-layout",table:"dependencies"})]})}function b(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(m,{...e})}):m(e)}},6031:(e,t,a)=>{var o=a(4836);t.Z=void 0;var r=o(a(4938)),s=a(5893),n=(0,r.default)((0,s.jsx)("path",{d:"m19 1-5 5v11l5-4.5V1zM1 6v14.65c0 .25.25.5.5.5.1 0 .15-.05.25-.05C3.1 20.45 5.05 20 6.5 20c1.95 0 4.05.4 5.5 1.5V6c-1.45-1.1-3.55-1.5-5.5-1.5S2.45 4.9 1 6zm22 13.5V6c-.6-.45-1.25-.75-2-1v13.5c-1.1-.35-2.3-.5-3.5-.5-1.7 0-4.15.65-5.5 1.5v2c1.35-.85 3.8-1.5 5.5-1.5 1.65 0 3.35.3 4.75 1.05.1.05.15.05.25.05.25 0 .5-.25.5-.5v-1.1z"}),"AutoStories");t.Z=n},2610:(e,t,a)=>{var o=a(4836);t.Z=void 0;var r=o(a(4938)),s=a(5893),n=(0,r.default)((0,s.jsx)("path",{d:"M11 18c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zm-2-8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 4c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"DragIndicator");t.Z=n},5162:(e,t,a)=>{a.d(t,{Z:()=>n});a(7294);var o=a(6010);const r={tabItem:"tabItem_Ymn6"};var s=a(5893);function n(e){let{children:t,hidden:a,className:n}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,o.Z)(r.tabItem,n),hidden:a,children:t})}},4866:(e,t,a)=>{a.d(t,{Z:()=>x});var o=a(7294),r=a(6010),s=a(2466),n=a(6550),i=a(469),l=a(1980),c=a(7392),d=a(12);function u(e){return o.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,o.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:t,children:a}=e;return(0,o.useMemo)((()=>{const e=t??function(e){return u(e).map((e=>{let{props:{value:t,label:a,attributes:o,default:r}}=e;return{value:t,label:a,attributes:o,default:r}}))}(a);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function h(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:a}=e;const r=(0,n.k6)(),s=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,l._X)(s),(0,o.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(r.location.search);t.set(s,e),r.replace({...r.location,search:t.toString()})}),[s,r])]}function b(e){const{defaultValue:t,queryString:a=!1,groupId:r}=e,s=p(e),[n,l]=(0,o.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const o=a.find((e=>e.default))??a[0];if(!o)throw new Error("Unexpected error: 0 tabValues");return o.value}({defaultValue:t,tabValues:s}))),[c,u]=m({queryString:a,groupId:r}),[b,v]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,s]=(0,d.Nk)(a);return[r,(0,o.useCallback)((e=>{a&&s.set(e)}),[a,s])]}({groupId:r}),w=(()=>{const e=c??b;return h({value:e,tabValues:s})?e:null})();(0,i.Z)((()=>{w&&l(w)}),[w]);return{selectedValue:n,selectValue:(0,o.useCallback)((e=>{if(!h({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),v(e)}),[u,v,s]),tabValues:s}}var v=a(2389);const w={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=a(5893);function A(e){let{className:t,block:a,selectedValue:o,selectValue:n,tabValues:i}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.o5)(),d=e=>{const t=e.currentTarget,a=l.indexOf(t),r=i[a].value;r!==o&&(c(t),n(r))},u=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const a=l.indexOf(e.currentTarget)+1;t=l[a]??l[0];break}case"ArrowLeft":{const a=l.indexOf(e.currentTarget)-1;t=l[a]??l[l.length-1];break}}t?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":a},t),children:i.map((e=>{let{value:t,label:a,attributes:s}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,ref:e=>l.push(e),onKeyDown:u,onClick:d,...s,className:(0,r.Z)("tabs__item",w.tabItem,s?.className,{"tabs__item--active":o===t}),children:a??t},t)}))})}function g(e){let{lazy:t,children:a,selectedValue:r}=e;const s=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===r));return e?(0,o.cloneElement)(e,{className:"margin-top--md"}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==r})))})}function y(e){const t=b(e);return(0,f.jsxs)("div",{className:(0,r.Z)("tabs-container",w.tabList),children:[(0,f.jsx)(A,{...e,...t}),(0,f.jsx)(g,{...e,...t})]})}function x(e){const t=(0,v.Z)();return(0,f.jsx)(y,{...e,children:u(e.children)},String(t))}},6521:(e,t,a)=>{a.d(t,{Z:()=>n});a(7294);var o=a(917),r=a(2949),s=a(5944);function n(e){let{url:t,mobile:a}=e;const n=o.iv`
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 4rem 0;
        /* width: 110%; */
        margin-left: -5%;
    `,i=o.iv`
        position: relative;
        width : 100%;
        max-width: ${"true"==a?"375px":"100%"};
        height: ${"true"==a?"700px":"600px"};
        border-radius: 32px;
        overflow: hidden;
        box-shadow: 0 0 0 10px black, 0 3px 22px black;
        outline: thin solid black;
    `,l=o.iv`
        width: 100%;
        height: 100%;
        background: var(--dwc-surface-3);
    `;return(0,s.tZ)("div",{css:n,children:(0,s.tZ)("div",{css:i,children:(0,s.tZ)("iframe",{src:t+"&__theme__="+(0,r.I)().colorMode,css:l,loading:"lazy"})})})}},9469:(e,t,a)=>{a.d(t,{Z:()=>w});var o=a(7294),r=a(917),s=a(4866),n=a(5162),i=a(4673),l=a(1750),c=a(1974),d=a(7762),u=a(2143),p=a(2949),h=a(2610),m=a(5944);function b(e){let{collapse:t,setCollapse:a}=e;const o=r.iv`
    display: flex;
    justify-content: end;
    align-items: flex-end;
    background-color: transparent;
    margin-bottom: -10px;
  `,s=r.iv`
    /* position: absolute;
    right: 0; */
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
  `,n=r.iv`
    filter: invert(var(--inversion-percentage));
  `;return(0,m.tZ)("div",{css:o,children:(0,m.tZ)("button",{css:s,onClick:()=>{a(!t)},children:t?(0,m.tZ)("img",{css:n,src:d.Z,className:"icon-tabler-arrow-bar-up"}):(0,m.tZ)("img",{css:n,src:c.Z,className:"icon-tabler-arrow-bar-down"})})})}function v(e){let{url:t}=e;const a=r.iv`
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
  `,o=r.iv`
    filter: invert(var(--inversion-percentage));
    ::before {
      mix-blend-mode: lighten;
      opacity: 0.5;
    }
  `;return(0,m.tZ)("button",{css:a,onClick:()=>{window.open(t,"_blank")},children:(0,m.tZ)("img",{css:o,src:u.Z})})}function w(e){let{path:t,javaC:a,javaE:c,cssURL:d,javaHighlight:u,height:w,frame:f,tabs:A}=e;const[g,y]=(0,o.useState)(""),[x,j]=(0,o.useState)(""),[Z,D]=(0,o.useState)(""),[k,L]=(0,o.useState)(!(!a||!c)),[S,B]=(0,o.useState)(!1),[C,E]=(0,o.useState)({}),[T,M]=(0,o.useState)(!1),[N,F]=(0,o.useState)(0),[z,H]=(0,o.useState)(0),[O,V]=(0,o.useState)(25),[X,G]=(0,o.useState)(25),[J,Y]=(0,o.useState)(0),[R,W]=(0,o.useState)(!1),I=(0,o.useRef)(null),P=(0,o.useRef)(null);(0,o.useEffect)((()=>{c&&fetch(c).then((e=>e.text())).then((e=>{j(e);const t=new URL(c).pathname.split("/"),a=t[t.length-1];E((e=>({...e,javaFile:a})))})),a&&fetch(a).then((e=>e.text())).then((e=>{y(e)})),d&&fetch(d).then((e=>e.text())).then((e=>{D(e);const t=new URL(d).pathname.split("/"),a=t[t.length-1];E((e=>({...e,cssFile:a})))})),Y(I.current?I.current.offsetWidth:0)}),[]);const q=()=>{M(!1)},U=e=>{if(T){const t=e.clientX-N;z+t>J/3&&(I.current.style.width=`${z+t}px`,P.current.style.right=(O-t<25?25:O-t)+"px",G(O-t<25?25:O-t))}},K=r.iv`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-bottom: 16px;
    /* padding: ${"hidden"==f?"0 15px 0 15px;":"7px 15px 0 15px;"}; */
    /* box-shadow: var(--ifm-global-shadow-lw); */
    background-color: var(--code-display-color-background);
  `,Q=r.iv`
    width: 100%;
    /* padding: 1em; */
    border: 1px solid var(--ifm-toc-border-color);
    border-right: none;
    background-color: transparent;
    display: flex;
    position: relative;
  `,_=r.iv`
    min-height: 100px;
    height: 100%;
    width: 100%;
    height: ${w||"100%"};
    pointer-events: ${T?"none":"auto"};
  `,$=r.iv`
    display: flex;
    justify-content: flex-end;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
    ${S&&"opacity: 1;"};
    margin: 10px 0 0 0;
    position: absolute;
    right: 25px;
  `,ee=r.iv`
    display: flex;
    align-items: center;
    cursor: ew-resize;
    border-left: 1px solid var(--ifm-toc-border-color);
    border-right: 1px solid var(--ifm-toc-border-color);
    background-color: var(--ifm-background-color);
  `,te=r.iv`
    box-shadow: none;
    background-color: var(--ifm-background-color);
    margin: 0px;
    padding: 0px;
    border: ${"hidden"==f?"none":"1px solid var(--ifm-toc-border-color)"};
    border-top: none;
    border-radius: 0px;
    position: relative;

    div {
      /* border: none; */
      border-color: var(--ifm-toc-border-color);
      padding: 2px 0px 0px 0px;
      margin: 0px;
    }

    > div:first-of-type {
      border: ${"hidden"==f?"1px solid var(--ifm-toc-border-color)":"none"};
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
  `,ae=r.iv`
    /* :first-child{
      margin-left: 1em;
    } */
    li[aria-selected="true"] {
      border-color: var(--ifm-color-primary);
    }

    .tabs__item {
      padding: 5px 20px -2px 20px;
      border-radius: 0px;
    }
  `,oe=r.iv`
    border-radius: 0px;
    box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 4px 0px inset;
  `;return(0,m.BX)("div",{css:K,onMouseUp:q,onMouseLeave:q,onMouseMove:U,children:["hidden"!=f?(0,m.BX)("div",{onMouseEnter:()=>{B(!0)},onMouseLeave:()=>B(!1),css:Q,children:[(0,m.tZ)("iframe",{onMouseUp:q,loading:"lazy",src:t+"&__theme__="+(0,p.I)().colorMode,css:_,ref:I,onMouseMove:U}),(0,m.tZ)("div",{css:$,ref:P,children:(0,m.tZ)(v,{url:t})}),(0,m.tZ)("div",{css:ee,onMouseDown:e=>{e.preventDefault(),M(!0),F(e.clientX),H(I.current?I.current.offsetWidth:0),V(X)},children:(0,m.tZ)(h.Z,{})})]}):null,(0,m.BX)(i.Z,{css:te,summary:(0,m.tZ)("summary",{onClick:()=>W(!R),children:R?"Hide Code":"Show Code"}),children:[a&&c?(0,m.tZ)(b,{collapse:k,setCollapse:L}):null,d?(0,m.BX)(s.Z,{css:ae,children:[(0,m.tZ)(n.Z,{value:A?A[0]:"Java",label:A?A[0]:C.javaFile,default:!0,children:(0,m.tZ)(l.Z,{css:oe,className:"codeDemoBlock",language:"java",showLineNumbers:!0,metastring:u,children:k?g:x})}),(0,m.tZ)(n.Z,{value:A?A[1]:"CSS",label:A?A[1]:C.cssFile,children:(0,m.tZ)(l.Z,{css:oe,className:"codeDemoBlock",language:"css",showLineNumbers:!0,children:Z})})]}):(0,m.tZ)(s.Z,{css:ae,children:(0,m.tZ)(n.Z,{value:A?A[0]:"Java",label:A?A[0]:C.javaFile,default:!0,children:(0,m.tZ)(l.Z,{css:oe,className:"codeDemoBlock",language:"java",showLineNumbers:!0,metastring:u,children:k?g:x})})})]})]})}},3273:(e,t,a)=>{a.d(t,{Z:()=>c});var o=a(7294),r=a(917),s=a(8230),n=a(4387),i=a(6031);var l=a(5944);function c(e){let{type:t,location:a,top:c,children:d,code:u,suffix:p}=e;const[h,m]=(0,o.useState)("");(0,o.useEffect)((()=>{p||(p=""),m("https://javadoc.io/doc/org.dwcj/dwcj-"+t+"/latest/"+a+".html"+p)}),[]);const b=r.iv`
    display: inline;

    ${c&&r.iv`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    margin-top: -33px;
    margin-bottom: 25px;
    `}
  `,v=r.iv`
  background-color: #0063CC;
  padding: 0 0 0 5px;
  :hover{
    color: white;
  }
  `;return(0,l.BX)(l.HY,{children:["true"===c&&(0,l.tZ)("div",{css:b,children:(0,l.tZ)(s.Z,{title:"JavaDoc",arrow:!0,children:(0,l.tZ)(n.Z,{css:v,label:"Java API",component:"a",href:h,icon:(0,l.tZ)(i.Z,{}),clickable:!0,color:"primary",target:"_blank"})})}),"true"!==c&&!u&&(0,l.tZ)("div",{css:b,children:(0,l.tZ)("a",{href:h,target:"_blank",children:d})}),"true"!==c&&u&&(0,l.tZ)("div",{css:b,children:(0,l.tZ)("code",{children:(0,l.tZ)("a",{href:h,target:"_blank",children:d})})})]})}},1415:(e,t,a)=>{a.d(t,{Z:()=>s});a(7294);var o=a(8397),r=a(5893);function s(e){return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(o.Z,{...e})})}},7762:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/expand-ba3f00f73da43d91e5b17663c4a7d108.png"},1974:(e,t,a)=>{a.d(t,{Z:()=>o});const o="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPAAAADwCAYAAAA+VemSAAAABmJLR0QA/wD/AP+gvaeTAAAG/ElEQVR4nO3dTW7bRhgG4Ddu4bTHa72Ir+UbNKskm/YgvYJhGF61B2gcIEDdRSVAMGxLIueHQz4PMBtDGeoj9EIfxWEmAQAAAAAAAAAAAAAAAAAAAAAAACjnMsl1ks9JbpN8343b3d+ud68BFuYqyUOSpyPjYfdaYAEuktzkeHCfj5vdvwU6mhLewxADnVxlenj3QzsNHVwmucv8AN8ned/2rQPXmR/e/fjQ+L1TiB8xxvVLwbl+LTgXcIIS7fN+3DV+7xTyrvcbYLLHJD8Vmutbkp8LzUVDAjyup8Lz+SwMyDUwDEyAYWACDAMTYBiYAMPABBgGJsAwMAGGgQkwDEyAYWACDAMTYBiYAMPABBgGJsAwMAGGgQkwDEyAYWACDAMT4Dq2tkvg1uplxVrtEljqv5Tdj6nsisgqtN4lsHeA7YrIqszZJfBjzv9Q9wzwxe49Tz2WXRFZlBK7BJ4b4l4Bnhve/dBOswildgl8SvIpyY8nHrdHgC+S/FboePexKyILUHKXwHNC3DrAJcO7H3ZFpLsvKR+mU9rplgEu1TY/H1+OHBeqK7lL4DkhbhXgWuF9il0RWYDH1PlwP+XtdrpFgGu0zYfj8ZXjQjNfU+8D/laIawe4dnifkvzz+mmFNmq10IfjpXa6ZoBrts2HQwtNdzV+xDolxLUC3Cq8T/EjFgtQ+jbSW+Owna4R4BZt8+FwG4nuSi7kOCfEpedtHd77WMjBQpRYSnnOqNHitmqb98NSShZlzsMMWxseZmBxWv74M/KY8uQVNNH6OnK08SnJD1NPLrQgxMLL4IRYeBmcEAsvg9t6iIWX4W01xMLLamwtxMLL6mzlPrH7vKzW2r+JffOyemsNsfCyGWsLsfCyOWsJsfCyWaOHWHjZvFFDLLywM9otJreK4JlRQiy88Iqlh1h44YilXhO75oUTLS3EwgtnWko7rW2GiXqHWHhhpl4hFl4opPU1sWteKKzVN7FvXqikdoiFFyqr1U5rm6GR0iEWXmisVDutbYZO5oZYeKGzi0zb2vQmwguLcZXkIceD+xCba8MiXSa5TvI5yW2S77txu/vb9e41AAAAAAAAAAAAwCK9tBTw1MX5S1oyqA51bM6pi/FPHb0W7atDHZsy9XG4U0erx+bUoY5NqnmSD0+2OtQxYh2LdpX6J3k/arY96lDH5lwmuUu7E32f5L061DFIHYt3nXYneT8+qEMdg9Rxkp4X4b90OOavFeZUx3TqGFjLNmc/7tShjkHqOMm7XgdO8pjkp8bH/Jbk58JzqmM6dczUs4V+6nDMfyvMqY7p1DFTzwD/1eGYf1eYUx3TqWOmngH+cyXHVMeyjrmWOk7SM8B/dDjm7xXmVMd06hjYWm64q0Mdm1zIkaxnyZs61LFZa1l0rg51bNJaHvtShzo2bS0PXqtDHZu1lv/6RB3qAAAAAAAAAAAAAJp7acmgpYAwgFMX7VuMDwsy9bE5j8NBZxdJPmb6o3EfI8TQxdzwCjF0cpHkt5R7SP1Tkh9bFgBbVTq8QgyNlGqbtdPQWO3wCjFUUqtt1k5DZa3DK8RQSKu2WTsNhfUOrxDDRL3aZu00zLS08AoxnGgpbbN2Gs609PAKMbxilPAKMTyz1GveY8M1MZs3aniFmM0bPbxCzGatJbxCzOasLbxCzGasNbxCzOqNdqto6nCLidVZ+zevb2JWa2vhFWJWY6vhFWKGt/XwCjHDEl4hZlDCK8QMSniFmEFt5T7v3OE+MYs0ZYvPrY6biecYqrhK+2+xEeZ8a9hknEW4THKXdh/8T0l+qDBv6+v3+yTvzz7bUNh12oc3FeZO2of4wzknGmr4kjYf9uc//tQIcNL2x7gvJ55jqKZF+/zSL7e1Apy0C/Hd0bMLlT2m7of8sG0+VDPASZt2+vH10wptfE378KbCsV5SO8T/vHJcaKZWC31swUOLACd122ktNN3V+BHrlNVKrQKc1AuxH7HorvRtpLfa5kMtA5zUaafdRqK7kgs5Tg1vCh3vnAAnZUN8Hws5WIgSSynPXeTfI8BJuXbaUkoWZc7DDFOe0OkV4GR+iD3MwOJcZFqIbzLt8bqeAU7a1wtNXCV5yPEP8kPmtZG9A7zXql5o5jL//zr9Ocltku+7cbv72/XuNXMsJcBJm3p5wbveb4DJ5obuOZ+FAbkWgYEJMAxMgGFgAgwDE2AYmADDwAQYBibAMDABhoEJMAxMgGFgAgwDE2AYmADDwAQYBibAMDABhoEJMAxMgGFgAjyukltzfi04Fw0J8Lj+KjjX3wXnoiEBHtefC52LhgR4XH8UnOv3gnMBJyi1K+J97BIIXZTYFdF2J9DRnF0R7RIIndklEFbALoEwOLsEAgAAAAAAAAAAAAAAAAAAAAAAAE39B2tV13Hdy+hQAAAAAElFTkSuQmCC"},2143:(e,t,a)=>{a.d(t,{Z:()=>o});const o="data:image/png;base64,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"},7099:e=>{e.exports=JSON.parse('{"LN":"dwc-app-layout","zx":"dwc-button","XZ":"dwc-checkbox","gN":"dwc-field","iR":"dwc-slider","wb":"dwc-listbox","Z":"dwc-choicebox","Ct":"dwc-combobox","ko":"dwc-progressbar","EU":"dwc-radio","ib":"dwc-tabbed-pane","dy":"dwc-drawer","Vq":"dwc-dialog","JO":"dwc-icon","qX":"dwc-splitter"}')}}]);