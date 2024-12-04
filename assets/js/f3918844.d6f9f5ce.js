"use strict";(self.webpackChunkdwcj_documentation=self.webpackChunkdwcj_documentation||[]).push([[8604],{679:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>d,contentTitle:()=>a,default:()=>p,frontMatter:()=>t,metadata:()=>i,toc:()=>l});const i=JSON.parse('{"id":"components/fields/password-field","title":"PasswordField","description":"A single-line input component for securely entering and masking password data.","source":"@site/docs/components/fields/password-field.md","sourceDirName":"components/fields","slug":"/components/fields/passwordfield","permalink":"/docs/components/fields/passwordfield","draft":false,"unlisted":false,"editUrl":"https://github.com/webforj/webforj-docs/tree/website/docs/components/fields/password-field.md","tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"sidebar_position":5,"title":"PasswordField","slug":"passwordfield","description":"A single-line input component for securely entering and masking password data."},"sidebar":"documentationSidebar","previous":{"title":"NumberField","permalink":"/docs/components/fields/numberfield"},"next":{"title":"DateField","permalink":"/docs/components/fields/datefield"}}');var r=n(74848),o=n(28453);const t={sidebar_position:5,title:"PasswordField",slug:"passwordfield",description:"A single-line input component for securely entering and masking password data."},a=void 0,d={},l=[{value:"Usages",id:"usages",level:2},{value:"Password visibility",id:"password-visibility",level:2},{value:"Placeholder text",id:"placeholder-text",level:2},{value:"Best practices",id:"best-practices",level:2}];function c(e){const s={code:"code",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,o.R)(),...e.components},{ComponentDemo:n,DocChip:i,JavadocLink:t,ParentLink:a}=s;return n||h("ComponentDemo",!0),i||h("DocChip",!0),t||h("JavadocLink",!0),a||h("ParentLink",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i,{chip:"shadow"}),"\n",(0,r.jsx)(i,{chip:"name",label:"dwc-field"}),"\n",(0,r.jsx)(t,{type:"foundation",location:"com/webforj/component/field/PasswordField",top:"true"}),"\n",(0,r.jsx)(a,{parent:"Field"}),"\n",(0,r.jsxs)(s.p,{children:["The ",(0,r.jsx)(s.code,{children:"PasswordField"}),' component empowers users to enter their passwords confidently, ensuring security and privacy. It elegantly presents itself as a single-line text editor, where each character transforms into an obscured symbol, usually an asterisk ("*") or a dot ("\u2022"), depending on the user agent and operating system.']}),"\n",(0,r.jsx)(n,{path:"https://demo.webforj.com/webapp/controlsamples/passwordfield?",javaE:"https://raw.githubusercontent.com/webforj/webforj-docs-samples/refs/heads/main/src/main/java/com/webforj/samples/views/fields/passwordfield/PasswordFieldView.java"}),"\n",(0,r.jsx)(s.h2,{id:"usages",children:"Usages"}),"\n",(0,r.jsxs)(s.p,{children:["The ",(0,r.jsx)(s.code,{children:"PasswordField"})," is best used in scenarios where capturing or handling sensitive information, such as passwords or other confidential data, is essential to your app. Here are some examples of when to use the ",(0,r.jsx)(s.code,{children:"PasswordField"}),":"]}),"\n",(0,r.jsxs)(s.ol,{children:["\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"User Authentication and Registration"}),": Password fields are crucial in apps that involve user authentication or registration processes, where secure password input is required."]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"Secure Form Inputs"}),": When designing forms that require input of sensitive information, such as credit card details or personal identification numbers (PINs), using a ",(0,r.jsx)(s.code,{children:"PasswordField"})," ensures the secure entry of such data."]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"Account Management and Profile Settings"}),": Password fields are valuable in apps that involve account management or profile settings, allowing users to change or update their passwords securely."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(s.h2,{id:"password-visibility",children:"Password visibility"}),"\n",(0,r.jsxs)(s.p,{children:["Users can reveal the value of the ",(0,r.jsx)(s.code,{children:"PasswordField"})," by clicking on the reveal icon. This allows users to verify what they\u2019ve entered, or copy the information to their clipboard. However, for high-security environments, you can use ",(0,r.jsx)(s.code,{children:"setPasswordReveal()"})," to remove the reveal icon and prevent users from seeing the value. You can verify if a user can use the reveal icon to show the value with the ",(0,r.jsx)(s.code,{children:"isPasswordReveal()"})," method."]}),"\n",(0,r.jsx)(s.h2,{id:"placeholder-text",children:"Placeholder text"}),"\n",(0,r.jsxs)(s.p,{children:["You can set placeholder text for the ",(0,r.jsx)(s.code,{children:"PasswordField"})," using the ",(0,r.jsx)(s.code,{children:"setPlaceholder()"})," method. The placeholder text is displayed when the field is empty, helping to prompt the user to enter appropriate input into the ",(0,r.jsx)(s.code,{children:"PasswordField"}),"."]}),"\n",(0,r.jsx)(s.h2,{id:"best-practices",children:"Best practices"}),"\n",(0,r.jsxs)(s.p,{children:["As the ",(0,r.jsx)(s.code,{children:"PasswordField"})," component is often associated with sensitive information, consider the following best practices when using the ",(0,r.jsx)(s.code,{children:"PasswordField"}),":"]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"Provide Password Strength Feedback"}),": Incorporate password strength indicators or feedback mechanisms to help users create strong and secure passwords. Evaluate factors such as length, complexity, and a mix of uppercase and lowercase letters, numbers, and special characters."]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"Ensure Secure Password Storage"}),": Never store passwords in plain text. Instead, implement proper security measures to handle and store passwords securely in your app. Utilize industry-standard encryption algorithms for passwords and other sensitive data."]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"Password Confirmation"}),": Include an additional confirmation field when a user changes or creates a password. This measure helps minimize the likelihood of typos and ensures that users accurately enter their desired password."]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"Allow Password Reset"}),': If your app involves user accounts, provide an option for users to reset their password. This could be in the form of a "Forgot Password" feature that initiates a password recovery process.']}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"Accessibility"}),": Utilize the ",(0,r.jsx)(s.code,{children:"PasswordField"})," with accessibility in mind, ensuring it meets accessibility standards such as providing proper labels, and compatibility with assistive technologies."]}),"\n"]}),"\n"]})]})}function p(e={}){const{wrapper:s}={...(0,o.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}function h(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},28453:(e,s,n)=>{n.d(s,{R:()=>t,x:()=>a});var i=n(96540);const r={},o=i.createContext(r);function t(e){const s=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),i.createElement(o.Provider,{value:s},e.children)}}}]);