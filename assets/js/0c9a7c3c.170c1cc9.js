"use strict";(self.webpackChunkdwcj_documentation=self.webpackChunkdwcj_documentation||[]).push([[8710],{4327:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"components/login","title":"Login","description":"The Login component is designed to provide a and user-friendly interface for authentication, allowing users to log in using a username and password. It supports various customizations to enhance user experience across different devices and locales.","source":"@site/docs/components/login.md","sourceDirName":"components","slug":"/components/login","permalink":"/docs/components/login","draft":false,"unlisted":false,"editUrl":"https://github.com/webforj/webforj-docs/tree/website/docs/components/login.md","tags":[],"version":"current","frontMatter":{"title":"Login"},"sidebar":"documentationSidebar","previous":{"title":"Loading","permalink":"/docs/components/loading"},"next":{"title":"Navigator","permalink":"/docs/components/navigator"}}');var i=t(4848),o=t(8453);const a={title:"Login"},r=void 0,l={},c=[{value:"Usages",id:"usages",level:2},{value:"Login submission",id:"login-submission",level:2},{value:"Internationalization (i18n)",id:"internationalization-i18n",level:2},{value:"Custom fields",id:"custom-fields",level:2},{value:"Cancel button",id:"cancel-button",level:2},{value:"Password managers",id:"password-managers",level:2},{value:"Styling",id:"styling",level:2},{value:"Shadow parts",id:"shadow-parts",level:3},{value:"Slots",id:"slots",level:3},{value:"Reflected attributes",id:"reflected-attributes",level:3}];function d(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,o.R)(),...e.components},{ComponentDemo:s,DocChip:a,JavadocLink:r,TableBuilder:l}=n;return s||p("ComponentDemo",!0),a||p("DocChip",!0),r||p("JavadocLink",!0),l||p("TableBuilder",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(a,{chip:"shadow"}),"\n",(0,i.jsx)(a,{chip:"name",label:"dwc-login"}),"\n",(0,i.jsx)(r,{type:"foundation",location:"com/webforj/component/login/Login",top:"true"}),"\n",(0,i.jsx)(n.p,{children:"The Login component is designed to provide a and user-friendly interface for authentication, allowing users to log in using a username and password. It supports various customizations to enhance user experience across different devices and locales."}),"\n",(0,i.jsx)(s,{path:"https://demo.webforj.com/webapp/controlsamples/loginbasic?",javaE:"https://raw.githubusercontent.com/webforj/webforj-docs-samples/refs/heads/main/src/main/java/com/webforj/samples/views/login/LoginBasicView.java",height:"450px"}),"\n",(0,i.jsx)(n.h2,{id:"usages",children:"Usages"}),"\n",(0,i.jsx)(n.p,{children:"The Login component provides a user-friendly login form interface within a dialog for entering authentication credentials. It enhances the user experience by offering:"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Clear input fields for username and password."}),"\n",(0,i.jsx)(n.li,{children:"Visibility toggle for password to verify input."}),"\n",(0,i.jsx)(n.li,{children:"Input validation feedback to prompt correct format before submission."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"login-submission",children:"Login submission"}),"\n",(0,i.jsxs)(n.p,{children:["When users enter their username and password, the login component validates these inputs as required fields. Once the validation passes, a form submission event is triggered, delivering the entered credentials. To prevent multiple submissions, the ",(0,i.jsx)(n.code,{children:"Signin"})," button is immediately disabled."]}),"\n",(0,i.jsxs)(n.p,{children:["The demo below illustrates a basic form submission process. If the username and password are both set to ",(0,i.jsx)(n.code,{children:'"admin"'})," respectively, the login dialog closes, and a logout button appears. If the credentials don't match, the default error message of the login form is displayed."]}),"\n",(0,i.jsx)(s,{path:"https://demo.webforj.com/webapp/controlsamples/loginsubmission?",javaE:"https://raw.githubusercontent.com/webforj/webforj-docs-samples/refs/heads/main/src/main/java/com/webforj/samples/views/login/LoginSubmissionView.java",height:"450px"}),"\n",(0,i.jsx)(n.admonition,{title:"Disabling the Signin Button",type:"info",children:(0,i.jsxs)(n.p,{children:["By default, the login form immediately disables the ",(0,i.jsx)(n.code,{children:"Signin"})," button once the component validates the login inputs as correct, to prevent multiple submissions. You can re-enable the ",(0,i.jsx)(n.code,{children:"Signin"})," button using the ",(0,i.jsx)(n.code,{children:"setEnabled(true)"})," method."]})}),"\n",(0,i.jsx)(n.admonition,{title:"Allowing Empty Passwords",type:"tip",children:(0,i.jsxs)(n.p,{children:["In certain scenarios, empty passwords may be permissible, allowing users to log in with just a username. The login dialog can be configured to accept empty passwords by setting ",(0,i.jsx)(n.code,{children:"setEmptyPassword(true)"}),"."]})}),"\n",(0,i.jsx)(n.h2,{id:"internationalization-i18n",children:"Internationalization (i18n)"}),"\n",(0,i.jsxs)(n.p,{children:["The titles, descriptions, labels, and messages within the login component are fully customizable using the ",(0,i.jsx)(n.code,{children:"LoginI18n"})," class. This flexibility allows you to tailor the login interface to meet specific localization requirements or personalization preferences."]}),"\n",(0,i.jsx)(n.p,{children:"The demo below illustrates how to provide a German translation for the login dialog, ensuring that all interface elements are adapted to the German language to enhance user experience for German-speaking users."}),"\n",(0,i.jsx)(s,{path:"https://demo.webforj.com/webapp/controlsamples/logininternationalization?",javaE:"https://raw.githubusercontent.com/webforj/webforj-docs-samples/refs/heads/main/src/main/java/com/webforj/samples/views/login/LoginInternationalizationView.java",height:"500px"}),"\n",(0,i.jsx)(n.h2,{id:"custom-fields",children:"Custom fields"}),"\n",(0,i.jsxs)(n.p,{children:["The login component includes ",(0,i.jsx)(n.a,{href:"#slots",children:"several slots"}),", which allow you to add extra fields if necessary. This feature provides more control over the information required for successful authentication."]}),"\n",(0,i.jsx)(n.p,{children:"In the example below, a Customer ID field is added to the login form. Users must provide a valid ID to complete authentication, enhancing security and ensuring that access is granted only after verifying all required credentials."}),"\n",(0,i.jsx)(s,{path:"https://demo.webforj.com/webapp/controlsamples/logincustomfields?",javaE:"https://raw.githubusercontent.com/webforj/webforj-docs-samples/refs/heads/main/src/main/java/com/webforj/samples/views/login/LoginCustomFieldsView.java",cssURL:"https://raw.githubusercontent.com/webforj/ControlSamples/main/src/main/resources/css/login/loginCustomFields.css",height:"700px"}),"\n",(0,i.jsx)(n.admonition,{title:"Submission Payload",type:"info",children:(0,i.jsx)(n.p,{children:"Note that the login component doesn't automatically recognize or include extra fields added to the form in its submission payload. This means developers must explicitly retrieve the value of any additional fields from the client side and handle it according to the app's requirements to complete the authentication process."})}),"\n",(0,i.jsx)(n.h2,{id:"cancel-button",children:"Cancel button"}),"\n",(0,i.jsxs)(n.p,{children:["In certain scenarios, it may be desirable to add a cancel button alongside the ",(0,i.jsx)(n.code,{children:"Signin"})," button. This feature is useful particularly when a user attempts to access a restricted area of the app and needs an option to cancel the action and return to their previous location. The login form includes a cancel button by default, but it's hidden from view."]}),"\n",(0,i.jsx)(n.p,{children:"To make the cancel button visible, you must provide a label for it - once labeled, it will appear on the screen. You can also listen to cancel events to respond appropriately to user actions, ensuring a smooth and user-friendly experience for navigating the app."}),"\n",(0,i.jsx)(s,{path:"https://demo.webforj.com/webapp/controlsamples/logincancelbutton?",javaE:"https://raw.githubusercontent.com/webforj/webforj-docs-samples/refs/heads/main/src/main/java/com/webforj/samples/views/login/LoginCancelButtonView.java",height:"450px"}),"\n",(0,i.jsx)(n.admonition,{title:"Hiding Elements",type:"tip",children:(0,i.jsx)(n.p,{children:"To hide an element from the login screen, simply set its label to an empty string. This approach is particularly useful for temporarily removing interface components without permanently altering the codebase."})}),"\n",(0,i.jsx)(n.h2,{id:"password-managers",children:"Password managers"}),"\n",(0,i.jsxs)(n.p,{children:["The login component is designed to be compatible with browser-based password managers, enhancing the user experience by simplifying the login process. For users of Chromium-based browsers, the component integrates seamlessly with the ",(0,i.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/PasswordCredential",children:(0,i.jsx)(n.code,{children:"PasswordCredential"})})," API. This integration enables several convenient features:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Auto-fill"}),": The browser may automatically fill out the username and password fields if the user has saved credentials for the site."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Credential Management"}),": After logging in, the browser can prompt the user to save new credentials, making future logins faster and easier."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Credential Selection"}),": If multiple credentials are saved, the browser can offer a choice to the user to select from one of the saved sets."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"styling",children:"Styling"}),"\n",(0,i.jsx)(n.h3,{id:"shadow-parts",children:"Shadow parts"}),"\n",(0,i.jsxs)(n.p,{children:["These are the various parts of the ",(0,i.jsx)(n.a,{href:"../glossary#shadow-dom",children:"shadow DOM"})," for the component, which will be required when styling via CSS is desired."]}),"\n",(0,i.jsx)(l,{tag:t(7813).az,table:"parts"}),"\n",(0,i.jsx)(n.h3,{id:"slots",children:"Slots"}),"\n",(0,i.jsxs)(n.p,{children:["Listed below are the slots available for utilization within the ",(0,i.jsx)(n.code,{children:"Login"})," component. These slots act as placeholders within the component that control where the children of a customized element should be inserted within the shadow tree."]}),"\n",(0,i.jsx)(l,{tag:t(7813).az,table:"slots"}),"\n",(0,i.jsx)(n.h3,{id:"reflected-attributes",children:"Reflected attributes"}),"\n",(0,i.jsx)(n.p,{children:"The reflected attributes of a component will be shown as attributes in the rendered HTML element for the component in the DOM. This means that styling can be applied using these attributes."}),"\n",(0,i.jsx)(l,{tag:t(7813).az,table:"reflects"})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}function p(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},8453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>r});var s=t(6540);const i={},o=s.createContext(i);function a(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(o.Provider,{value:n},e.children)}},7813:e=>{e.exports=JSON.parse('{"e7":"dwc-app-layout","$n":"dwc-button","Sc":"dwc-checkbox","D0":"dwc-field","Ap":"dwc-slider","qF":"dwc-listbox","tX":"dwc-choicebox","a3":"dwc-combobox","mD":"dwc-navigator","z2":"dwc-progressbar","a":"dwc-radio","TN":"dwc-tabbed-pane","_s":"dwc-drawer","lG":"dwc-dialog","In":"dwc-icon","O3":"dwc-splitter","az":"dwc-login","y$":"dwc-spinner","Rh":"dwc-loading","bJ":"dwc-loading","y8":"dwc-toast"}')}}]);