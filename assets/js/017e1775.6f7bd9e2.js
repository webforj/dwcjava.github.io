"use strict";(self.webpackChunkdwcj_documentation=self.webpackChunkdwcj_documentation||[]).push([[4614],{6838:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var i=n(4848),s=n(8453);const r={title:"Drawer"},o=void 0,a={id:"components/drawer",title:"Drawer",description:"The drawer is a container that slides into the viewport to expose additional options and information. Multiple drawers can be created in an application, and they will be stacked above each other.",source:"@site/docs/components/drawer.md",sourceDirName:"components",slug:"/components/drawer",permalink:"/docs/components/drawer",draft:!1,unlisted:!1,editUrl:"https://github.com/webforj/webforj-docs/tree/website/docs/components/drawer.md",tags:[],version:"current",frontMatter:{title:"Drawer"},sidebar:"documentationSidebar",previous:{title:"Dialog",permalink:"/docs/components/dialog"},next:{title:"FlexLayout",permalink:"/docs/components/flex-layout"}},c={},l=[{value:"Usages",id:"usages",level:2},{value:"Customization",id:"customization",level:2},{value:"Autofocus",id:"autofocus",level:2},{value:"Label",id:"label",level:2},{value:"Placement",id:"placement",level:2},{value:"Styling",id:"styling",level:2},{value:"Shadow parts",id:"shadow-parts",level:3},{value:"CSS properties",id:"css-properties",level:3},{value:"Reflected attributes",id:"reflected-attributes",level:3},{value:"Dependencies",id:"dependencies",level:3},{value:"Best practices",id:"best-practices",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components},{AppLayoutViewer:r,ComponentDemo:o,DocChip:a,JavadocLink:c,TableBuilder:l}=t;return r||p("AppLayoutViewer",!0),o||p("ComponentDemo",!0),a||p("DocChip",!0),c||p("JavadocLink",!0),l||p("TableBuilder",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(a,{chip:"shadow"}),"\n",(0,i.jsx)(a,{chip:"name",label:"dwc-drawer"}),"\n",(0,i.jsx)(c,{type:"drawer",location:"com/webforj/component/drawer/Drawer",top:"true"}),"\n",(0,i.jsx)(t.p,{children:"The drawer is a container that slides into the viewport to expose additional options and information. Multiple drawers can be created in an application, and they will be stacked above each other."}),"\n",(0,i.jsx)(t.p,{children:'The Drawer component can be used in many different situations, such as by providing a navigation menu that can be toggled, a panel that displays supplementary or contextual information, or to optimize usage on a mobile device. The following example will show a mobile application that uses the webforJ AppLayout component, and displays a "Welcome Popup" drawer at the bottom when first loaded. Additionally, a navigational Drawer component can be toggled in the application by clicking on the hamburger menu.'}),"\n",(0,i.jsx)(r,{path:"https://demo.webforj.com/webapp/controlsamples/drawerwelcome?",mobile:"true",javaE:"https://raw.githubusercontent.com/webforj/webforj-docs-samples/refs/heads/main/src/main/java/com/webforj/samples/views/drawer/DrawerWelcomeView.java",cssURL:"https://raw.githubusercontent.com/webforj/ControlSamples/main/src/main/resources/css/drawer/drawerWelcome.css"}),"\n",(0,i.jsx)(t.h2,{id:"usages",children:"Usages"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Navigation Menu"}),": One common usage of a drawer component is as a navigation menu. It provides a space-efficient way to display links to various sections or pages of your application, especially in mobile or responsive layouts. Users can open and close the drawer to access navigation options without cluttering the main content area."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Filter and Sidebar"}),": A drawer can be used as a filter or sidebar in applications that display a list of items. Users can expand the drawer to reveal filter options, sort controls, or additional information related to the list items. This keeps the main content focused on the list while providing advanced features in an accessible way."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"User Profile or Settings"}),": You can use a drawer to show user profile information or application settings. This keeps such information easily accessible but hidden when not needed, maintaining a clean and uncluttered interface. Users can open the drawer to update their profiles or adjust settings."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Notifications"}),": For applications with notifications or alerts, a drawer can slide in to display new messages or updates. Users can quickly check and dismiss notifications without leaving their current view."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(o,{path:"https://demo.webforj.com/webapp/controlsamples/drawerdemo?",javaE:"https://raw.githubusercontent.com/webforj/webforj-docs-samples/refs/heads/main/src/main/java/com/webforj/samples/views/drawer/DrawerDemoView.java",height:"600px"}),"\n",(0,i.jsx)(t.h2,{id:"customization",children:"Customization"}),"\n",(0,i.jsx)(t.p,{children:"Various properties exist that allow for the customization of various attributes of the Drawer component. This section outlines those properties with examples for their modification."}),"\n",(0,i.jsx)(t.h2,{id:"autofocus",children:"Autofocus"}),"\n",(0,i.jsx)(t.p,{children:"The Auto-Focus property is designed to enhance accessibility and usability by automatically focusing on the first item within a drawer when it is opened. This feature eliminates the need for users to manually navigate to the desired item, saving time and effort."}),"\n",(0,i.jsx)(t.p,{children:"When the drawer is triggered to open, either through an event, by default or any other interaction, the user's focus is directed to the first item within the drawer. This first item could be a button, a link, a menu option, or any other focusable element."}),"\n",(0,i.jsx)(t.admonition,{type:"tip",children:(0,i.jsx)(t.p,{children:"By automatically focusing on the first item, the developer ensures that users can immediately engage with the most relevant or frequently used option without having to tab or scroll through the entire drawer. This behavior streamlines the user experience and promotes efficient navigation within the UI."})}),"\n",(0,i.jsx)(t.p,{children:"This property can also be particularly beneficial for individuals who rely on keyboard navigation or assistive technologies such as screen readers. It provides a clear starting point within the drawer and allows users to access the desired functionality without unnecessary manual input."}),"\n",(0,i.jsx)(o,{path:"https://demo.webforj.com/webapp/controlsamples/drawerautofocus?",javaE:"https://raw.githubusercontent.com/webforj/webforj-docs-samples/refs/heads/main/src/main/java/com/webforj/samples/views/drawer/DrawerAutoFocusView.java",height:"600px"}),"\n",(0,i.jsx)(t.h2,{id:"label",children:"Label"}),"\n",(0,i.jsx)(t.p,{children:"The Drawer Label property is a feature designed to enhance accessibility and provide descriptive context for a drawer within a user interface. This property allows developers to assign a label to a drawer, primarily for accessibility purposes, ensuring that screen readers and other assistive technologies can accurately convey the drawer's purpose and content to users."}),"\n",(0,i.jsx)(t.p,{children:"When the Drawer Label property is utilized, the assigned label becomes an integral part of the drawer's accessibility infrastructure. It enables users who rely on assistive technologies to understand the drawer's function and navigate through the interface more effectively."}),"\n",(0,i.jsx)(t.p,{children:"By providing a label for the drawer, developers ensure that screen readers announce the purpose of the drawer to visually impaired users. This information empowers individuals to make informed decisions about interacting with the drawer, as they can understand its content and relevance within the broader user interface."}),"\n",(0,i.jsx)(t.p,{children:"The Label property can be customized to suit the specific context and design requirements of the application. Developers have the flexibility to provide concise and descriptive labels that accurately represent the drawer's content or functionality."}),"\n",(0,i.jsx)(t.h2,{id:"placement",children:"Placement"}),"\n",(0,i.jsx)(t.p,{children:"The placement property of the Drawer UI Component allows developers to specify the position and alignment of the drawer within the viewport. This property offers a range of enum values that provide flexibility in determining where the drawer appears in relation to the main content."}),"\n",(0,i.jsx)(t.p,{children:"The available enum values for the placement property are as follows:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"TOP"}),": This value places the drawer at the top of the viewport, allowing it to occupy the uppermost region."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"TOP_CENTER"}),": With this value, the drawer is positioned at the center of the top portion of the viewport. It is aligned horizontally in the middle, creating a balanced layout."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"BOTTOM"}),": When using this value, the drawer is situated at the bottom of the viewport, appearing below the main content."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"BOTTOM_CENTER"}),": This value centers the drawer horizontally at the bottom of the viewport. It provides a visually balanced composition."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"LEFT"}),": Selecting this value causes the drawer to be positioned on the left side of the viewport, adjacent to the main content."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"RIGHT"}),": By using this value, the drawer is placed on the right side of the viewport, maintaining a close proximity to the main content"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"The placement property allows developers to choose the most appropriate position for the drawer based on the specific design and user experience requirements. The enum values offer a variety of placement options to accommodate different interface layouts and visual hierarchies."}),"\n",(0,i.jsx)(t.p,{children:"By leveraging the placement property, developers can create intuitive and efficient user interfaces. For example, placing the drawer on the left or right side allows for quick access to additional functionalities or navigation options, while top or bottom placements are well-suited for contextual information or supplementary content."}),"\n",(0,i.jsx)(o,{path:"https://demo.webforj.com/webapp/controlsamples/drawerplacement?",javaE:"https://raw.githubusercontent.com/webforj/webforj-docs-samples/refs/heads/main/src/main/java/com/webforj/samples/views/drawer/DrawerPlacementView.java",height:"600px"}),"\n",(0,i.jsx)(t.h2,{id:"styling",children:"Styling"}),"\n",(0,i.jsx)(t.h3,{id:"shadow-parts",children:"Shadow parts"}),"\n",(0,i.jsxs)(t.p,{children:["These are the various parts of the ",(0,i.jsx)(t.a,{href:"../glossary#shadow-dom",children:"shadow DOM"})," for the component, which will be required when styling via CSS is desired."]}),"\n",(0,i.jsx)(l,{tag:n(7813)._s,table:"parts"}),"\n",(0,i.jsx)(t.h3,{id:"css-properties",children:"CSS properties"}),"\n",(0,i.jsx)(t.p,{children:"These are the various CSS properties that are used in the component, with a short description of their use."}),"\n",(0,i.jsx)(l,{tag:n(7813)._s,table:"properties"}),"\n",(0,i.jsx)(t.h3,{id:"reflected-attributes",children:"Reflected attributes"}),"\n",(0,i.jsx)(t.p,{children:"The reflected attributes of a component will be shown as attributes in the rendered HTML element for the component in the DOM. This means that styling can be applied using these attributes."}),"\n",(0,i.jsx)(l,{tag:n(7813)._s,table:"reflects"}),"\n",(0,i.jsx)(t.h3,{id:"dependencies",children:"Dependencies"}),"\n",(0,i.jsx)(t.p,{children:"This component relies on the following components - see the related article for more detailed styling information:"}),"\n",(0,i.jsx)(l,{tag:"dwc-drawer",table:"dependencies"}),"\n",(0,i.jsx)(t.h2,{id:"best-practices",children:"Best practices"}),"\n",(0,i.jsxs)(t.p,{children:["To ensure an optimal user experience when using the ",(0,i.jsx)(t.code,{children:"Drawer"})," component, consider the following best practices:"]}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Placement"}),": Decide whether the drawer should slide in from the left, right, top, or bottom, based on your application's layout and user experience considerations. Consider user preferences and design conventions."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Accessibility"}),": Pay special attention to accessibility. Ensure that users can open and close the drawer using keyboard controls and that screen readers can announce its presence and state. Provide ARIA roles and labels as necessary."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Swipe Gestures"}),": On touch-enabled devices, support swipe gestures for opening and closing the drawer. This is an intuitive way for users to interact with it."]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}function p(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},8453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>a});var i=n(6540);const s={},r=i.createContext(s);function o(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(r.Provider,{value:t},e.children)}},7813:e=>{e.exports=JSON.parse('{"e7":"dwc-app-layout","$n":"dwc-button","Sc":"dwc-checkbox","D0":"dwc-field","Ap":"dwc-slider","qF":"dwc-listbox","tX":"dwc-choicebox","a3":"dwc-combobox","mD":"dwc-navigator","z2":"dwc-progressbar","a":"dwc-radio","TN":"dwc-tabbed-pane","_s":"dwc-drawer","lG":"dwc-dialog","In":"dwc-icon","O3":"dwc-splitter","az":"dwc-login","y$":"dwc-spinner","Rh":"dwc-loading","bJ":"dwc-loading","y8":"dwc-toast"}')}}]);