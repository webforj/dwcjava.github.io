"use strict";(self.webpackChunkdwcj_documentation=self.webpackChunkdwcj_documentation||[]).push([[7911],{4419:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>a,toc:()=>p});const a=JSON.parse('{"id":"components/app-layout","title":"AppLayout","description":"The AppLayout is a comprehensive responsive layout component that provides a header, a footer, a drawer, and content section. The header and footer are fixed, the drawer slides in and out of the viewport, and the content is scrollable.","source":"@site/docs/components/app-layout.md","sourceDirName":"components","slug":"/components/app-layout","permalink":"/docs/components/app-layout","draft":false,"unlisted":false,"editUrl":"https://github.com/webforj/webforj-docs/tree/website/docs/components/app-layout.md","tags":[],"version":"current","frontMatter":{"title":"AppLayout"},"sidebar":"documentationSidebar","previous":{"title":"Interactivity","permalink":"/docs/components/table/Interactivity"},"next":{"title":"BusyIndicator","permalink":"/docs/components/busyindicator"}}');var s=o(4848),n=o(8453);const i={title:"AppLayout"},r=void 0,l={},p=[{value:"Features",id:"features",level:2},{value:"Overview",id:"overview",level:2},{value:"Full width navbar",id:"full-width-navbar",level:2},{value:"Multiple toolbars",id:"multiple-toolbars",level:2},{value:"Sticky toolbars",id:"sticky-toolbars",level:2},{value:"Mobile navigation layout",id:"mobile-navigation-layout",level:2},{value:"Drawer breakpoint",id:"drawer-breakpoint",level:2},{value:"Styling",id:"styling",level:2},{value:"Shadow parts",id:"shadow-parts",level:3},{value:"Slots",id:"slots",level:3},{value:"CSS properties",id:"css-properties",level:3},{value:"Reflected attributes",id:"reflected-attributes",level:3},{value:"Dependencies",id:"dependencies",level:3}];function c(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,n.R)(),...e.components},{AppLayoutViewer:a,DocChip:i,JavadocLink:r,TableBuilder:l}=t;return a||h("AppLayoutViewer",!0),i||h("DocChip",!0),r||h("JavadocLink",!0),l||h("TableBuilder",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i,{chip:"shadow"}),"\n",(0,s.jsx)(i,{chip:"name",label:"dwc-app-layout"}),"\n",(0,s.jsx)(r,{type:"applayout",location:"com/webforj/component/layout/applayout/AppLayout",top:"true"}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"AppLayout"})," is a comprehensive responsive layout component that provides a header, a footer, a drawer, and content section. The header and footer are fixed, the drawer slides in and out of the viewport, and the content is scrollable."]}),"\n",(0,s.jsx)(t.p,{children:"This component can be used to build common application layouts, such as a dashboard."}),"\n",(0,s.jsx)(t.h2,{id:"features",children:"Features"}),"\n",(0,s.jsx)(t.p,{children:"The webforJ App Layout is a component which allows for building common application layouts."}),"\n",(0,s.jsxs)("ul",{children:[(0,s.jsx)("li",{children:"Easy to use and customize"}),(0,s.jsx)("li",{children:"Responsive design"}),(0,s.jsx)("li",{children:"Multiple layout options"}),(0,s.jsx)("li",{children:"Works with webforJ Dark Mode"})]}),"\n",(0,s.jsx)(t.p,{children:"It provides a header, footer , drawer, and content section all built into a responsive component which can be easily customized to quickly build common application layouts such as a dashboard. The header and footer are fixed, the drawer slides in and out of the viewport, and the content is scrollable."}),"\n",(0,s.jsxs)(t.p,{children:["Each part of the layout is a ",(0,s.jsx)(t.code,{children:"Div"}),", which can contain any valid webforJ control. For best results, the application should include a viewport meta tag which contains viewport-fit=cover. The meta tag causes the viewport to be scaled to fill the device display."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-java",children:'@AppMeta(name = "viewport", content = "width=device-width, initial-scale=1.0, viewport-fit=cover, user-scalable=no")\n'})}),"\n",(0,s.jsx)(t.h2,{id:"overview",children:"Overview"}),"\n",(0,s.jsx)(t.p,{children:"The following code sample will result in an application with a collapsible sidebar that contains a logo and tabs for various content options and a header. The demo uses the dwc-icon-button web component to create a drawer toggle button. The button has the data-drawer-toggle attribute which instructs the DwcAppLayout to listen to click events coming from that component to toggle the drawer state."}),"\n",(0,s.jsx)(a,{path:"https://demo.webforj.com/webapp/controlsamples/applayout?",mobile:"false",javaE:"https://raw.githubusercontent.com/webforj/webforj-docs-samples/refs/heads/main/src/main/java/com/webforj/samples/views/applayout/AppLayoutView.java",cssURL:"https://raw.githubusercontent.com/webforj/ControlSamples/main/src/main/resources/css/applayout/applayout.css"}),"\n",(0,s.jsx)(t.h2,{id:"full-width-navbar",children:"Full width navbar"}),"\n",(0,s.jsx)(t.p,{children:"By default, the AppLayout renders the header and the footer in the off-screen mode. The off-screen mode means that the header and the footer position will be shifted to fit beside the opened drawer. Disabling this mode will cause the header and footer to take the full available space and shift the drawer top and bottom position to fit with the header and the footer."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-java",metastring:"showLineNumbers",children:"AppLayout myApp = new AppLayout();\n\nmyApp.setHeaderOffscreen(false);\nmyApp.setFooterOffscreen(false);\n"})}),"\n",(0,s.jsx)(a,{path:"https://demo.webforj.com/webapp/controlsamples/applayoutfullnavbar?",mobile:"false",javaE:"https://raw.githubusercontent.com/webforj/webforj-docs-samples/refs/heads/main/src/main/java/com/webforj/samples/views/applayout/AppLayoutFullNavbarView.java",cssURL:"https://raw.githubusercontent.com/webforj/ControlSamples/main/src/main/resources/css/applayout/applayout.css"}),"\n",(0,s.jsx)(t.h2,{id:"multiple-toolbars",children:"Multiple toolbars"}),"\n",(0,s.jsx)(t.p,{children:"The navbar has no limit to the number of toolbars you can add. A toolbar is only a Div. To add an additional toolbar, simply add a new Div to the existing header div of the AppLayout."}),"\n",(0,s.jsx)(t.p,{children:"The following demo shows how to use two toolbars, The first one houses the drawer's toggle button and the application's title. The second toolbar houses a secondary navigation menu."}),"\n",(0,s.jsx)(a,{path:"https://demo.webforj.com/webapp/controlsamples/applayoutmultipleheaders?",mobile:"false",javaE:"https://raw.githubusercontent.com/webforj/webforj-docs-samples/refs/heads/main/src/main/java/com/webforj/samples/views/applayout/AppLayoutMultipleHeadersView.java",cssURL:"https://raw.githubusercontent.com/webforj/ControlSamples/main/src/main/resources/css/applayout/applayout.css"}),"\n",(0,s.jsx)(t.h2,{id:"sticky-toolbars",children:"Sticky toolbars"}),"\n",(0,s.jsx)(t.p,{children:"A sticky toolbar is a toolbar that remains visible at the top of the page when the user scrolls down but the navbar height is collapsed to make more space available for the page's content. Usually this kind of toolbar contains a fixed navigation menu which is relevant to the current page."}),"\n",(0,s.jsxs)(t.p,{children:["It is possible to create a sticky toolbars using the CSS custom property ",(0,s.jsx)(t.code,{children:"--dwc-app-layout-header-collapse-height"})," and the ",(0,s.jsx)(t.code,{children:"AppLayout.setHeaderReveal()"})," option."]}),"\n",(0,s.jsxs)(t.p,{children:["When ",(0,s.jsx)(t.code,{children:"AppLayout.setHeaderReveal(true)"})," is set called, the header will be visible on first render, and then hidden when the user starts scrolling down. Once the user starts scrolling up again the header will be revealed."]}),"\n",(0,s.jsxs)(t.p,{children:["With the help of the CSS custom property ",(0,s.jsx)(t.code,{children:"--dwc-app-layout-header-collapse-height"})," it is possible to control how much of the header navbar will be hidden."]}),"\n",(0,s.jsx)(a,{path:"https://demo.webforj.com/webapp/controlsamples/applayoutstickytoolbar?",mobile:"false",javaE:"https://raw.githubusercontent.com/webforj/webforj-docs-samples/refs/heads/main/src/main/java/com/webforj/samples/views/applayout/AppLayoutStickyToolbarView.java",cssURL:"https://raw.githubusercontent.com/webforj/ControlSamples/main/src/main/resources/css/applayout/applayout.css"}),"\n",(0,s.jsx)(t.h2,{id:"mobile-navigation-layout",children:"Mobile navigation layout"}),"\n",(0,s.jsx)(t.p,{children:"The bottom navbar can be used to provide a different version of the navigation at the bottom of application. This type of navigation is specifically popular in mobile apps."}),"\n",(0,s.jsxs)(t.p,{children:["Notice how the drawer is hidden in the following demo. The AppLayout widget supports three drawer positions: ",(0,s.jsx)(t.code,{children:"DrawerPlacement.LEFT"}),", ",(0,s.jsx)(t.code,{children:"DrawerPlacement.RIGHT"}),", and ",(0,s.jsx)(t.code,{children:"DrawerPlacement.HIDDEN"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:["Same as ",(0,s.jsx)(t.code,{children:"AppLayout.setHeaderReveal()"}),", ",(0,s.jsx)(t.code,{children:"AppLayout.setFooterReveal()"})," is supported. When ",(0,s.jsx)(t.code,{children:"AppLayout.setFooterReveal(true)"})," is called, the footer will be visible at first render then hidden when the user starts scrolling up. Once the user starts scrolling down again the footer will be revealed."]}),"\n",(0,s.jsxs)(t.p,{children:["Be default, when the screen width is 800px or less , the drawer will be switched to popover mode. This is called the breakpoint. The popover mode means that the drawer will pop over the content area with an overlay. It is possible to configure the breakpoint by using the DwcAppLayout",":setDrawerBreakpoint"," method and the breakpoint must be a valid ",(0,s.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries",children:"media query"}),"."]}),"\n",(0,s.jsx)(a,{path:"https://demo.webforj.com/webapp/controlsamples/applayoutmobile?",mobile:"true",javaE:"https://raw.githubusercontent.com/webforj/webforj-docs-samples/refs/heads/main/src/main/java/com/webforj/samples/views/applayout/AppLayoutMobileView.java",cssURL:"https://raw.githubusercontent.com/webforj/ControlSamples/main/src/main/resources/css/applayout/applayoutMobile.css"}),"\n",(0,s.jsx)(t.h2,{id:"drawer-breakpoint",children:"Drawer breakpoint"}),"\n",(0,s.jsxs)(t.p,{children:["Be default, when the screen width is 800px or less , the drawer will be switched to popover mode. This is called the breakpoint. Popover mode means that the drawer will pop over the content area with an overlay. It is possible to configure the breakpoint by using the DwcAppLayout",":setDrawerBreakpoint"," method and the breakpoint must be a valid media query."]}),"\n",(0,s.jsx)(t.p,{children:"For instance, in the following sample. we configure the drawer breakpoint to be 500px or less."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-java",children:'AppLayout demo = new AppLayout();\ndemo.setDrawerBreakpoint("(max-width:500px)");\n'})}),"\n",(0,s.jsx)(a,{path:"https://demo.webforj.com/webapp/controlsamples/applayoutmobiledrawer?",mobile:"true",javaE:"https://raw.githubusercontent.com/webforj/webforj-docs-samples/refs/heads/main/src/main/java/com/webforj/samples/views/applayout/AppLayoutMobileDrawerView.java",cssURL:"https://raw.githubusercontent.com/webforj/ControlSamples/main/src/main/resources/css/applayout/applayoutMobile.css"}),"\n",(0,s.jsx)(t.h2,{id:"styling",children:"Styling"}),"\n",(0,s.jsx)(t.h3,{id:"shadow-parts",children:"Shadow parts"}),"\n",(0,s.jsxs)(t.p,{children:["These are the various parts of the ",(0,s.jsx)(t.a,{href:"../glossary#shadow-dom",children:"shadow DOM"})," for the component, which will be required when styling via CSS is desired."]}),"\n",(0,s.jsx)(l,{tag:o(7813).e7,table:"parts"}),"\n",(0,s.jsx)(t.h3,{id:"slots",children:"Slots"}),"\n",(0,s.jsxs)(t.p,{children:["Listed below are the slots available for utilization within the ",(0,s.jsx)(t.code,{children:"AppLayout"})," component. These slots act as placeholders within the component that control where the children of a customized element should be inserted within the shadow tree."]}),"\n",(0,s.jsx)(l,{tag:o(7813).e7,table:"slots"}),"\n",(0,s.jsx)(t.h3,{id:"css-properties",children:"CSS properties"}),"\n",(0,s.jsx)(t.p,{children:"These are the various CSS properties that are used in the component, with a short description of their use."}),"\n",(0,s.jsx)(l,{tag:o(7813).e7,table:"properties"}),"\n",(0,s.jsx)(t.h3,{id:"reflected-attributes",children:"Reflected attributes"}),"\n",(0,s.jsx)(t.p,{children:"The reflected attributes of a component will be shown as attributes in the rendered HTML element for the component in the DOM. This means that styling can be applied using these attributes."}),"\n",(0,s.jsx)(l,{tag:o(7813).e7,table:"reflects"}),"\n",(0,s.jsx)(t.h3,{id:"dependencies",children:"Dependencies"}),"\n",(0,s.jsx)(t.p,{children:"This component relies on the following components - see the related article for more detailed styling information:"}),"\n",(0,s.jsx)(l,{tag:"dwc-app-layout",table:"dependencies"})]})}function d(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}function h(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},8453:(e,t,o)=>{o.d(t,{R:()=>i,x:()=>r});var a=o(6540);const s={},n=a.createContext(s);function i(e){const t=a.useContext(n);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),a.createElement(n.Provider,{value:t},e.children)}},7813:e=>{e.exports=JSON.parse('{"e7":"dwc-app-layout","$n":"dwc-button","Sc":"dwc-checkbox","D0":"dwc-field","Ap":"dwc-slider","qF":"dwc-listbox","tX":"dwc-choicebox","a3":"dwc-combobox","mD":"dwc-navigator","z2":"dwc-progressbar","a":"dwc-radio","TN":"dwc-tabbed-pane","_s":"dwc-drawer","lG":"dwc-dialog","In":"dwc-icon","O3":"dwc-splitter","az":"dwc-login","y$":"dwc-spinner","Rh":"dwc-loading","bJ":"dwc-loading","y8":"dwc-toast"}')}}]);