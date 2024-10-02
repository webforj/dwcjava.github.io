"use strict";(self.webpackChunkdwcj_documentation=self.webpackChunkdwcj_documentation||[]).push([[8710],{4218:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>d,default:()=>b,frontMatter:()=>c,metadata:()=>h,toc:()=>p});var s=n(4848),r=n(8453),a=n(5943),i=n(1530),o=n(1803),l=n(5529);const c={title:"Login"},d=void 0,h={id:"components/login",title:"Login",description:"The Login component is designed to provide a and user-friendly interface for authentication, allowing users to log in using a username and password. It supports various customizations to enhance user experience across different devices and locales.",source:"@site/docs/components/login.md",sourceDirName:"components",slug:"/components/login",permalink:"/docs/components/login",draft:!1,unlisted:!1,editUrl:"https://github.com/webforj/webforj-docs/tree/website/docs/components/login.md",tags:[],version:"current",frontMatter:{title:"Login"},sidebar:"documentationSidebar",previous:{title:"Google Charts",permalink:"/docs/components/google_charts"},next:{title:"Navigator",permalink:"/docs/components/navigator"}},u={},p=[{value:"Usages",id:"usages",level:2},{value:"Constructors",id:"constructors",level:2},{value:"Login submission",id:"login-submission",level:2},{value:"Internationalization (i18n)",id:"internationalization-i18n",level:2},{value:"Custom fields",id:"custom-fields",level:2},{value:"Cancel button",id:"cancel-button",level:2},{value:"Password managers",id:"password-managers",level:2},{value:"Styling",id:"styling",level:2},{value:"Shadow parts",id:"shadow-parts",level:3},{value:"Slots",id:"slots",level:3},{value:"Reflected attributes",id:"reflected-attributes",level:3}];function m(e){const t={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(l.A,{tooltipText:"This component will render with a shadow DOM, an API built into the browser that facilitates encapsulation.",label:"Shadow",target:"_blank",clickable:!1,iconName:"shadow"}),"\n",(0,s.jsx)(l.A,{tooltipText:"The name of the web component that will render in the DOM.",label:"dwc-login",clickable:!1,iconName:"code"}),"\n",(0,s.jsx)(o.A,{type:"foundation",location:"com/webforj/component/login/Login",top:"true"}),"\n",(0,s.jsx)(t.p,{children:"The Login component is designed to provide a and user-friendly interface for authentication, allowing users to log in using a username and password. It supports various customizations to enhance user experience across different devices and locales."}),"\n",(0,s.jsx)(a.A,{path:"https://demo.webforj.com/webapp/controlsamples/loginbasic?",javaE:"https://raw.githubusercontent.com/webforj/webforj-docs-samples/refs/heads/main/src/main/java/com/webforj/samples/views/login/LoginBasicView.java",height:"450px"}),"\n",(0,s.jsx)(t.h2,{id:"usages",children:"Usages"}),"\n",(0,s.jsx)(t.p,{children:"The Login component provides a user-friendly login form interface within a dialog for entering authentication credentials. It enhances the user experience by offering:"}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Clear input fields for username and password."}),"\n",(0,s.jsx)(t.li,{children:"Visibility toggle for password to verify input."}),"\n",(0,s.jsx)(t.li,{children:"Input validation feedback to prompt correct format before submission."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"constructors",children:"Constructors"}),"\n",(0,s.jsxs)(t.p,{children:["You can construct the ",(0,s.jsx)(t.code,{children:"Login"})," component using the default ",(0,s.jsx)(t.code,{children:"Login()"})," constructor. Once the component has been instantiated, call the ",(0,s.jsx)(t.code,{children:"open()"})," method on the component itself to display the login dialog."]}),"\n",(0,s.jsx)(t.h2,{id:"login-submission",children:"Login submission"}),"\n",(0,s.jsxs)(t.p,{children:["When users enter their username and password, the login component validates these inputs as required fields. Once the validation passes, a form submission event is triggered, delivering the entered credentials. To prevent multiple submissions, the ",(0,s.jsx)(t.code,{children:"Signin"})," button is immediately disabled."]}),"\n",(0,s.jsxs)(t.p,{children:["The demo below illustrates a basic form submission process. If the username and password are both set to ",(0,s.jsx)(t.code,{children:'"admin"'})," respectively, the login dialog closes, and a logout button appears. If the credentials don't match, the default error message of the login form is displayed."]}),"\n",(0,s.jsx)(a.A,{path:"https://demo.webforj.com/webapp/controlsamples/loginsubmission?",javaE:"https://raw.githubusercontent.com/webforj/webforj-docs-samples/refs/heads/main/src/main/java/com/webforj/samples/views/login/LoginSubmissionView.java",height:"450px"}),"\n",(0,s.jsx)(t.admonition,{title:"Disabling the Signin Button",type:"info",children:(0,s.jsxs)(t.p,{children:["By default, the login form immediately disables the ",(0,s.jsx)(t.code,{children:"Signin"})," button once the component validates the login inputs as correct, to prevent multiple submissions. You can re-enable the ",(0,s.jsx)(t.code,{children:"Signin"})," button using the ",(0,s.jsx)(t.code,{children:"setEnabled(true)"})," method."]})}),"\n",(0,s.jsx)(t.admonition,{title:"Allowing Empty Passwords",type:"tip",children:(0,s.jsxs)(t.p,{children:["In certain scenarios, empty passwords may be permissible, allowing users to log in with just a username. The login dialog can be configured to accept empty passwords by setting ",(0,s.jsx)(t.code,{children:"setEmptyPassword(true)"}),"."]})}),"\n",(0,s.jsx)(t.h2,{id:"internationalization-i18n",children:"Internationalization (i18n)"}),"\n",(0,s.jsxs)(t.p,{children:["The titles, descriptions, labels, and messages within the login component are fully customizable using the ",(0,s.jsx)(t.code,{children:"LoginI18n"})," class. This flexibility allows you to tailor the login interface to meet specific localization requirements or personalization preferences."]}),"\n",(0,s.jsx)(t.p,{children:"The demo below illustrates how to provide a German translation for the login dialog, ensuring that all interface elements are adapted to the German language to enhance user experience for German-speaking users."}),"\n",(0,s.jsx)(a.A,{path:"https://demo.webforj.com/webapp/controlsamples/logininternationalization?",javaE:"https://raw.githubusercontent.com/webforj/webforj-docs-samples/refs/heads/main/src/main/java/com/webforj/samples/views/login/LoginInternationalizationView.java",height:"500px"}),"\n",(0,s.jsx)(t.h2,{id:"custom-fields",children:"Custom fields"}),"\n",(0,s.jsxs)(t.p,{children:["The login component includes ",(0,s.jsx)(t.a,{href:"#slots",children:"several slots"}),", which allow you to add extra fields if necessary. This feature provides more control over the information required for successful authentication."]}),"\n",(0,s.jsx)(t.p,{children:"In the example below, a Customer ID field is added to the login form. Users must provide a valid ID to complete authentication, enhancing security and ensuring that access is granted only after verifying all required credentials."}),"\n",(0,s.jsx)(a.A,{path:"https://demo.webforj.com/webapp/controlsamples/logincustomfields?",javaE:"https://raw.githubusercontent.com/webforj/webforj-docs-samples/refs/heads/main/src/main/java/com/webforj/samples/views/login/LoginCustomFieldsView.java",cssURL:"https://raw.githubusercontent.com/webforj/ControlSamples/main/src/main/resources/css/login/LoginCustomFields/style.css",height:"700px"}),"\n",(0,s.jsx)(t.admonition,{title:"Submission Payload",type:"info",children:(0,s.jsx)(t.p,{children:"Note that the login component doesn't automatically recognize or include extra fields added to the form in its submission payload. This means developers must explicitly retrieve the value of any additional fields from the client side and handle it according to the app's requirements to complete the authentication process."})}),"\n",(0,s.jsx)(t.h2,{id:"cancel-button",children:"Cancel button"}),"\n",(0,s.jsxs)(t.p,{children:["In certain scenarios, it may be desirable to add a cancel button alongside the ",(0,s.jsx)(t.code,{children:"Signin"})," button. This feature is useful particularly when a user attempts to access a restricted area of the app and needs an option to cancel the action and return to their previous location. The login form includes a cancel button by default, but it's hidden from view."]}),"\n",(0,s.jsx)(t.p,{children:"To make the cancel button visible, you must provide a label for it - once labeled, it will appear on the screen. You can also listen to cancel events to respond appropriately to user actions, ensuring a smooth and user-friendly experience for navigating the app."}),"\n",(0,s.jsx)(a.A,{path:"https://demo.webforj.com/webapp/controlsamples/logincancelbutton?",javaE:"https://raw.githubusercontent.com/webforj/webforj-docs-samples/refs/heads/main/src/main/java/com/webforj/samples/views/login/LoginCancelButtonView.java",height:"450px"}),"\n",(0,s.jsx)(t.admonition,{title:"Hiding Elements",type:"tip",children:(0,s.jsx)(t.p,{children:"To hide an element from the login screen, simply set its label to an empty string. This approach is particularly useful for temporarily removing interface components without permanently altering the codebase."})}),"\n",(0,s.jsx)(t.h2,{id:"password-managers",children:"Password managers"}),"\n",(0,s.jsxs)(t.p,{children:["The login component is designed to be compatible with browser-based password managers, enhancing the user experience by simplifying the login process. For users of Chromium-based browsers, the component integrates seamlessly with the ",(0,s.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/PasswordCredential",children:(0,s.jsx)(t.code,{children:"PasswordCredential"})})," API. This integration enables several convenient features:"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Auto-fill"}),": The browser may automatically fill out the username and password fields if the user has saved credentials for the site."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Credential Management"}),": After logging in, the browser can prompt the user to save new credentials, making future logins faster and easier."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Credential Selection"}),": If multiple credentials are saved, the browser can offer a choice to the user to select from one of the saved sets."]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"styling",children:"Styling"}),"\n",(0,s.jsx)(t.h3,{id:"shadow-parts",children:"Shadow parts"}),"\n",(0,s.jsxs)(t.p,{children:["These are the various parts of the ",(0,s.jsx)(t.a,{href:"../glossary#shadow-dom",children:"shadow DOM"})," for the component, which will be required when styling via CSS is desired."]}),"\n",(0,s.jsx)(i.A,{tag:n(7813).az,table:"parts"}),"\n",(0,s.jsx)(t.h3,{id:"slots",children:"Slots"}),"\n",(0,s.jsxs)(t.p,{children:["Listed below are the slots available for utilization within the ",(0,s.jsx)(t.code,{children:"Login"})," component. These slots act as placeholders within the component that control where the children of a customized element should be inserted within the shadow tree."]}),"\n",(0,s.jsx)(i.A,{tag:n(7813).az,table:"slots"}),"\n",(0,s.jsx)(t.h3,{id:"reflected-attributes",children:"Reflected attributes"}),"\n",(0,s.jsx)(t.p,{children:"The reflected attributes of a component will be shown as attributes in the rendered HTML element for the component in the DOM. This means that styling can be applied using these attributes."}),"\n",(0,s.jsx)(i.A,{tag:n(7813).az,table:"reflects"})]})}function b(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(m,{...e})}):m(e)}},7785:(e,t,n)=>{var s=n(4994);t.A=void 0;var r=s(n(2032)),a=n(4848),i=(0,r.default)((0,a.jsx)("path",{d:"m19 1-5 5v11l5-4.5V1zM1 6v14.65c0 .25.25.5.5.5.1 0 .15-.05.25-.05C3.1 20.45 5.05 20 6.5 20c1.95 0 4.05.4 5.5 1.5V6c-1.45-1.1-3.55-1.5-5.5-1.5S2.45 4.9 1 6zm22 13.5V6c-.6-.45-1.25-.75-2-1v13.5c-1.1-.35-2.3-.5-3.5-.5-1.7 0-4.15.65-5.5 1.5v2c1.35-.85 3.8-1.5 5.5-1.5 1.65 0 3.35.3 4.75 1.05.1.05.15.05.25.05.25 0 .5-.25.5-.5v-1.1z"}),"AutoStories");t.A=i},4863:(e,t,n)=>{var s=n(4994);t.A=void 0;var r=s(n(2032)),a=n(4848),i=(0,r.default)([(0,a.jsx)("path",{d:"M7 19c-1.1 0-2 .9-2 2h14c0-1.1-.9-2-2-2h-4v-2h3c1.1 0 2-.9 2-2h-8c-1.66 0-3-1.34-3-3 0-1.09.59-2.04 1.46-2.56C8.17 9.03 8 8.54 8 8c0-.21.04-.42.09-.62C6.28 8.13 5 9.92 5 12c0 2.76 2.24 5 5 5v2H7z"},"0"),(0,a.jsx)("path",{d:"M10.56 5.51C11.91 5.54 13 6.64 13 8c0 .75-.33 1.41-.85 1.87l.59 1.62.94-.34.34.94 1.88-.68-.34-.94.94-.34-2.74-7.53-.94.34-.34-.94-1.88.68.34.94-.94.35.56 1.54z"},"1"),(0,a.jsx)("circle",{cx:"10.5",cy:"8",r:"1.5"},"2")],"Biotech");t.A=i},4680:(e,t,n)=>{var s=n(4994);t.A=void 0;var r=s(n(2032)),a=n(4848),i=(0,r.default)((0,a.jsx)("path",{d:"M9.4 16.6 4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0 4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"}),"Code");t.A=i},2706:(e,t,n)=>{var s=n(4994);t.A=void 0;var r=s(n(2032)),a=n(4848),i=(0,r.default)((0,a.jsx)("path",{d:"M11 18c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zm-2-8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 4c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"DragIndicator");t.A=i},4303:(e,t,n)=>{var s=n(4994);t.A=void 0;var r=s(n(2032)),a=n(4848),i=(0,r.default)([(0,a.jsx)("circle",{cx:"9",cy:"12",r:"8"},"0"),(0,a.jsx)("path",{d:"M17 4.26v2.09c2.33.82 4 3.04 4 5.65s-1.67 4.83-4 5.65v2.09c3.45-.89 6-4.01 6-7.74s-2.55-6.85-6-7.74z"},"1")],"FiberSmartRecord");t.A=i},8144:(e,t,n)=>{var s=n(4994);t.A=void 0;var r=s(n(2032)),a=n(4848),i=(0,r.default)((0,a.jsx)("path",{d:"m2.53 19.65 1.34.56v-9.03l-2.43 5.86c-.41 1.02.08 2.19 1.09 2.61zm19.5-3.7L17.07 3.98c-.31-.75-1.04-1.21-1.81-1.23-.26 0-.53.04-.79.15L7.1 5.95c-.75.31-1.21 1.03-1.23 1.8-.01.27.04.54.15.8l4.96 11.97c.31.76 1.05 1.22 1.83 1.23.26 0 .52-.05.77-.15l7.36-3.05c1.02-.42 1.51-1.59 1.09-2.6zM7.88 8.75c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-2 11c0 1.1.9 2 2 2h1.45l-3.45-8.34v6.34z"}),"Style");t.A=i},9365:(e,t,n)=>{n.d(t,{A:()=>i});n(6540);var s=n(53);const r={tabItem:"tabItem_Ymn6"};var a=n(4848);function i(e){let{children:t,hidden:n,className:i}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,s.A)(r.tabItem,i),hidden:n,children:t})}},1470:(e,t,n)=>{n.d(t,{A:()=>j});var s=n(6540),r=n(53),a=n(3104),i=n(6347),o=n(205),l=n(7485),c=n(1682),d=n(9466);function h(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:t,children:n}=e;return(0,s.useMemo)((()=>{const e=t??function(e){return h(e).map((e=>{let{props:{value:t,label:n,attributes:s,default:r}}=e;return{value:t,label:n,attributes:s,default:r}}))}(n);return function(e){const t=(0,c.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const r=(0,i.W6)(),a=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l.aZ)(a),(0,s.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(r.location.search);t.set(a,e),r.replace({...r.location,search:t.toString()})}),[a,r])]}function b(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,a=u(e),[i,l]=(0,s.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const s=n.find((e=>e.default))??n[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:t,tabValues:a}))),[c,h]=m({queryString:n,groupId:r}),[b,g]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,a]=(0,d.Dv)(n);return[r,(0,s.useCallback)((e=>{n&&a.set(e)}),[n,a])]}({groupId:r}),A=(()=>{const e=c??b;return p({value:e,tabValues:a})?e:null})();(0,o.A)((()=>{A&&l(A)}),[A]);return{selectedValue:i,selectValue:(0,s.useCallback)((e=>{if(!p({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);l(e),h(e),g(e)}),[h,g,a]),tabValues:a}}var g=n(2303);const A={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=n(4848);function x(e){let{className:t,block:n,selectedValue:s,selectValue:i,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,a.a_)(),d=e=>{const t=e.currentTarget,n=l.indexOf(t),r=o[n].value;r!==s&&(c(t),i(r))},h=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;t=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;t=l[n]??l[l.length-1];break}}t?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":n},t),children:o.map((e=>{let{value:t,label:n,attributes:a}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,ref:e=>l.push(e),onKeyDown:h,onClick:d,...a,className:(0,r.A)("tabs__item",A.tabItem,a?.className,{"tabs__item--active":s===t}),children:n??t},t)}))})}function v(e){let{lazy:t,children:n,selectedValue:r}=e;const a=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=a.find((e=>e.props.value===r));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:a.map(((e,t)=>(0,s.cloneElement)(e,{key:t,hidden:e.props.value!==r})))})}function w(e){const t=b(e);return(0,f.jsxs)("div",{className:(0,r.A)("tabs-container",A.tabList),children:[(0,f.jsx)(x,{...e,...t}),(0,f.jsx)(v,{...e,...t})]})}function j(e){const t=(0,g.A)();return(0,f.jsx)(w,{...e,children:h(e.children)},String(t))}},5943:(e,t,n)=>{n.d(t,{A:()=>x});var s=n(6540),r=n(7437),a=n(5556),i=n.n(a),o=n(1470),l=n(9365),c=n(1622),d=n(1302);const h=n.p+"assets/images/expand-ba3f00f73da43d91e5b17663c4a7d108.png",u="data:image/png;base64,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",p="data:image/png;base64,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";var m=n(5293),b=n(2706),g=n(2445);function A(e){let{collapse:t,setCollapse:n}=e;A.propTypes={collapse:i().bool.isRequired,setCollapse:i().func.isRequired};const s=r.AH`
    display: flex;
    justify-content: end;
    align-items: flex-end;
    background-color: transparent;
    margin-bottom: -10px;
  `,a=r.AH`
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
  `,o=r.AH`
    filter: invert(var(--inversion-percentage));
  `;return(0,g.Y)("div",{css:s,children:(0,g.Y)("button",{css:a,onClick:()=>{n(!t)},children:t?(0,g.Y)("img",{alt:"collapse_button",css:o,src:h,className:"icon-tabler-arrow-bar-up"}):(0,g.Y)("img",{css:o,src:u,className:"icon-tabler-arrow-bar-down"})})})}function f(e){let{url:t}=e;const n=r.AH`
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
  `,s=r.AH`
    filter: invert(var(--inversion-percentage));
    ::before {
      mix-blend-mode: lighten;
      opacity: 0.5;
    }
  `;return(0,g.Y)("button",{css:n,onClick:()=>{window.open(t,"_blank")},children:(0,g.Y)("img",{css:s,src:p})})}function x(e){let{path:t,javaC:n,javaE:a,urls:h,cssURL:u,javaHighlight:p,height:v,frame:w,tabs:j}=e;x.propTypes={path:i().string.isRequired,javaC:i().string,javaE:i().string,urls:i().arrayOf(i().string),cssURL:i().string,javaHighlight:i().string,height:i().string,frame:i().string,tabs:i().arrayOf(i().string)};const[y,D]=(0,s.useState)(""),[S,k]=(0,s.useState)(""),[C,B]=(0,s.useState)({}),[L,Y]=(0,s.useState)(""),[z,E]=(0,s.useState)(!(!n||!a)),[T,H]=(0,s.useState)(!1),[N,M]=(0,s.useState)({}),[F,O]=(0,s.useState)(!1),[V,I]=(0,s.useState)(0),[G,X]=(0,s.useState)(0),[P,J]=(0,s.useState)(25),[q,R]=(0,s.useState)(25),[W,Z]=(0,s.useState)(0),[U,K]=(0,s.useState)(!1),Q=(0,s.useRef)(null),_=(0,s.useRef)(null);function $(e,t,n){return(0,g.Y)(d.A,{css:t,className:"codeDemoBlock",language:"java",showLineNumbers:!0,metastring:n,children:e.code})}(0,s.useEffect)((()=>{a&&fetch(a).then((e=>e.text())).then((e=>{k(e);const t=new URL(a).pathname.split("/"),n=t[t.length-1];M((e=>({...e,javaFile:n})))})),n&&fetch(n).then((e=>e.text())).then((e=>{D(e)})),u&&fetch(u).then((e=>e.text())).then((e=>{Y(e);const t=new URL(u).pathname.split("/"),n=t[t.length-1];M((e=>({...e,cssFile:n})))})),h&&h.forEach((function(e){const t=new URL(e),n=t.pathname.split("/"),s=n[n.length-1];fetch(e).then((e=>e.text())).then((e=>{!function(e,t){B((n=>({...n,[e]:{fileName:e,code:t}})))}(s,e)}))})),Z(Q.current?Q.current.offsetWidth:0)}),[]);const ee=()=>{O(!1)},te=e=>{if(F){const t=e.clientX-V;G+t>W/3&&(Q.current.style.width=`${G+t}px`,_.current.style.right=(P-t<25?25:P-t)+"px",R(P-t<25?25:P-t))}},ne=r.AH`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-bottom: 16px;
    background-color: var(--code-display-color-background);
  `,se=r.AH`
    width: 100%;
    border: 1px solid var(--ifm-toc-border-color);
    border-right: none;
    background-color: transparent;
    display: flex;
    position: relative;
  `,re=r.AH`
    min-height: 100px;
    height: 100%;
    width: 100%;
    height: ${v||"100%"};
    pointer-events: ${F?"none":"auto"};
  `,ae=r.AH`
    display: flex;
    justify-content: flex-end;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
    ${T&&"opacity: 1;"};
    margin: 10px 0 0 0;
    position: absolute;
    right: 25px;
  `,ie=r.AH`
    display: flex;
    align-items: center;
    cursor: ew-resize;
    border-left: 1px solid var(--ifm-toc-border-color);
    border-right: 1px solid var(--ifm-toc-border-color);
    background-color: var(--ifm-background-color);
  `,oe=r.AH`
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
  `,le=r.AH`
    li[aria-selected="true"] {
      border-color: var(--ifm-color-primary);
    }

    .tabs__item {
      padding: 5px 20px -2px 20px;
      border-radius: 0px;
    }
  `,ce=r.AH`
    border-radius: 0px;
    box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 4px 0px inset;
  `;return(0,g.FD)("div",{css:ne,onMouseUp:ee,onMouseLeave:ee,onMouseMove:te,children:["hidden"!=w?(0,g.FD)("div",{onMouseEnter:()=>{H(!0)},onMouseLeave:()=>H(!1),css:se,children:[(0,g.Y)("iframe",{onMouseUp:ee,loading:"lazy",src:t+"&__theme__="+(0,m.G)().colorMode,css:re,ref:Q,onMouseMove:te}),(0,g.Y)("div",{css:ae,ref:_,children:(0,g.Y)(f,{url:t})}),(0,g.Y)("div",{css:ie,onMouseDown:e=>{e.preventDefault(),O(!0),I(e.clientX),X(Q.current?Q.current.offsetWidth:0),J(q)},children:(0,g.Y)(b.A,{})})]}):null,(0,g.FD)(c.A,{css:oe,summary:(0,g.Y)("summary",{onClick:()=>K(!U),children:U?"Hide Code":"Show Code"}),children:[n&&a?(0,g.Y)(A,{collapse:z,setCollapse:E}):null,u?(0,g.FD)(o.A,{css:le,children:[(0,g.Y)(l.A,{value:j?j[0]:"Java",label:j?j[0]:N.javaFile,default:!0,children:(0,g.Y)(d.A,{css:ce,className:"codeDemoBlock",language:"java",showLineNumbers:!0,metastring:p,children:z?y:S})}),Object.keys(C).map(((e,t)=>(0,g.Y)(l.A,{value:e,label:e,children:$(C[e],ce,p)},"tab"+t))),(0,g.Y)(l.A,{value:j?j[1]:"CSS",label:j?j[1]:N.cssFile,children:(0,g.Y)(d.A,{css:ce,className:"codeDemoBlock",language:"css",showLineNumbers:!0,children:L})})]}):(0,g.FD)(o.A,{css:le,children:[(0,g.Y)(l.A,{value:j?j[0]:"Java",label:j?j[0]:N.javaFile,default:!0,children:(0,g.Y)(d.A,{css:ce,className:"codeDemoBlock",language:"java",showLineNumbers:!0,metastring:p,children:z?y:S})}),Object.keys(C).map(((e,t)=>(0,g.Y)(l.A,{value:e,label:e,children:$(C[e],ce,p)},"tab"+t)))]})]})]})}},5529:(e,t,n)=>{n.d(t,{A:()=>h});n(6540);var s=n(7437),r=n(276),a=n(526),i=n(4863),o=n(4303),l=n(4680),c=n(8144),d=n(2445);function h(e){let{label:t,href:n,clickable:h,iconName:u,tooltipText:p,color:m}=e;const b=s.AH`
    margin-right: 10px;
    padding-left: 5px;
    background-color: var(--chip-background);
    color: var(--chip-text);

    :hover{
      color: inherit;
      background-color: var(--chip-background-hover);
    }
  `,g=s.AH`
      color: var(--chip-icon-color) !important;
  `;let A;return A="scoped"===u?(0,d.Y)(i.A,{css:g}):"shadow"===u?(0,d.Y)(o.A,{css:g}):"code"===u?(0,d.Y)(l.A,{css:g}):(0,d.Y)(c.A,{css:g}),(0,d.Y)(r.A,{title:p,arrow:!0,css:b,children:(0,d.Y)(a.A,{label:t,component:"a",href:h?n:null,icon:A,clickable:h,color:m,target:"_blank"})})}},1803:(e,t,n)=>{n.d(t,{A:()=>c});var s=n(6540),r=n(7437),a=n(276),i=n(526),o=n(7785);var l=n(2445);function c(e){let{type:t,location:n,top:c,children:d,code:h,suffix:u}=e;const[p,m]=(0,s.useState)("");(0,s.useEffect)((()=>{u||(u=""),m("https://javadoc.io/doc/com.webforj/webforj-"+t+"/latest/"+n+".html"+u)}),[]);const b=r.AH`
    display: inline;

    ${c&&r.AH`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    margin-top: -33px;
    margin-bottom: 25px;
    `}
  `,g=r.AH`
  background-color: #0063CC;
  padding: 0 0 0 5px;
  :hover{
    color: white;
  }
  `;return(0,l.FD)(l.FK,{children:["true"===c&&(0,l.Y)("div",{css:b,children:(0,l.Y)(a.A,{title:"JavaDoc",arrow:!0,children:(0,l.Y)(i.A,{css:g,label:"Java API",component:"a",href:p,icon:(0,l.Y)(o.A,{}),clickable:!0,color:"primary",target:"_blank"})})}),"true"!==c&&!h&&(0,l.Y)("div",{css:b,children:(0,l.Y)("a",{href:p,target:"_blank",children:d})}),"true"!==c&&h&&(0,l.Y)("div",{css:b,children:(0,l.Y)("code",{children:(0,l.Y)("a",{href:p,target:"_blank",children:d})})})]})}},1530:(e,t,n)=>{n.d(t,{A:()=>i});var s=n(6540),r=n(5489),a=n(4848);function i(e){const[t,n]=(0,s.useState)(null);if((0,s.useEffect)((()=>{fetch("https://dwc.style/docs/dwc-components.json").then((e=>e.json())).then((t=>{const s=t.components.find((t=>t.tag===e.tag));n(s)}))}),[]),!t)return(0,a.jsx)("div",{children:"Loading..."});const i=t.docsTags?.filter((e=>"part"===e.name)),o=t.slots?.map((e=>({name:e.name,desc:e.docs}))),l=t.styles?.map((e=>({name:e.name,description:e.docs}))),c=t.props?.map((e=>({display:e.reflectToAttr,attr:e.attr,desc:e.docs,type:e.type}))),d=t?.dependencies||[];return(0,a.jsxs)(a.Fragment,{children:["parts"==e.table&&(0,a.jsxs)("table",{className:"custom--table",children:[(0,a.jsx)("thead",{children:(0,a.jsxs)("tr",{children:[(0,a.jsx)("th",{children:"Part"}),(0,a.jsx)("th",{children:"Description"})]},"header")}),(0,a.jsx)("tbody",{children:i?.map((t=>{const[n,s]=t.text.split(" - ");return!e.exclusions?.includes(n)&&(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)("code",{children:n})}),(0,a.jsx)("td",{children:s})]},t.id)}))})]}),"slots"==e.table&&(0,a.jsxs)("table",{className:"custom--table",children:[(0,a.jsx)("thead",{children:(0,a.jsxs)("tr",{children:[(0,a.jsx)("th",{children:"Slot"}),(0,a.jsx)("th",{children:"Description"})]},"header")}),(0,a.jsx)("tbody",{children:o?.map((t=>!e.exclusions?.includes(t.name)&&""!=t.name&&(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)("code",{children:t.name})}),(0,a.jsx)("td",{children:t.desc})]},t.name)))})]}),"properties"==e.table&&(0,a.jsxs)("table",{className:"custom--table",children:[(0,a.jsx)("thead",{children:(0,a.jsxs)("tr",{children:[(0,a.jsx)("th",{children:"Name"}),(0,a.jsx)("th",{children:"Description"})]},"header")}),(0,a.jsx)("tbody",{children:l?.map((t=>!e.exclusions?.includes(t.name)&&(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)("code",{children:t.name})}),(0,a.jsx)("td",{children:t.description})]},t.name)))})]}),"reflects"==e.table&&(0,a.jsxs)("table",{className:"custom--table",children:[(0,a.jsx)("thead",{children:(0,a.jsxs)("tr",{children:[(0,a.jsx)("th",{children:"Attribute"}),(0,a.jsx)("th",{children:"Description"}),(0,a.jsx)("th",{children:"Type"})]},"header")}),(0,a.jsx)("tbody",{children:c?.map((t=>null!=t.attr&&1==t.display&&!e.exclusions?.includes(t.attr)&&(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)("code",{children:t.attr})}),(0,a.jsx)("td",{children:t.desc}),(0,a.jsx)("td",{children:t.type})]},t.attr)))})]}),"dependencies"==e.table&&(0,a.jsx)("ul",{children:d.map(((e,t)=>(0,a.jsx)("li",{children:(0,a.jsx)(r.A,{to:"/docs/client-components/"+e.replace("dwc-","").charAt(0).toUpperCase()+e.slice(5),children:e},t)})))}),"properties"!=e.table&&"parts"!=e.table&&"slots"!=e.table&&"reflects"!=e.table&&"dependencies"!=e.table&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("h4",{children:"Shadow Parts"}),(0,a.jsxs)("table",{className:"custom--table",children:[(0,a.jsx)("thead",{children:(0,a.jsxs)("tr",{children:[(0,a.jsx)("th",{children:"Part"}),(0,a.jsx)("th",{children:"Description"})]},"header")}),(0,a.jsx)("tbody",{children:i?.map((e=>{const[t,n]=e.text.split(" - ");return(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)("code",{children:t})}),(0,a.jsx)("td",{children:n})]},e.id)}))})]}),(0,a.jsx)("h4",{children:"CSS Properties"}),(0,a.jsxs)("table",{className:"custom--table",children:[(0,a.jsx)("thead",{children:(0,a.jsxs)("tr",{children:[(0,a.jsx)("th",{children:"Name"}),(0,a.jsx)("th",{children:"Description"})]},"header")}),(0,a.jsx)("tbody",{children:l?.map((e=>(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)("code",{children:e.name})}),(0,a.jsx)("td",{children:e.description})]},e.name)))})]}),(0,a.jsx)("h4",{children:"Reflected Attributes"}),(0,a.jsxs)("table",{className:"custom--table",children:[(0,a.jsx)("thead",{children:(0,a.jsxs)("tr",{children:[(0,a.jsx)("th",{children:"Attribute"}),(0,a.jsx)("th",{children:"Description"}),(0,a.jsx)("th",{children:"Type"})]},"header")}),(0,a.jsx)("tbody",{children:c?.map((t=>null!=t.attr&&0==t.display&&!e.exclusions?.includes(t.attr)&&(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)("code",{children:t.attr})}),(0,a.jsx)("td",{children:t.desc}),(0,a.jsx)("td",{children:t.type})]},t.attr)))})]})]})]})}},6999:(e,t,n)=>{n.d(t,{A:()=>a});n(6540);var s=n(4718),r=n(4848);function a(e){return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(s.A,{...e})})}},7813:e=>{e.exports=JSON.parse('{"e7":"dwc-app-layout","$n":"dwc-button","Sc":"dwc-checkbox","D0":"dwc-field","Ap":"dwc-slider","qF":"dwc-listbox","tX":"dwc-choicebox","a3":"dwc-combobox","mD":"dwc-navigator","z2":"dwc-progressbar","a":"dwc-radio","TN":"dwc-tabbed-pane","_s":"dwc-drawer","lG":"dwc-dialog","In":"dwc-icon","O3":"dwc-splitter","az":"dwc-login"}')}}]);