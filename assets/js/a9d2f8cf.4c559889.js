"use strict";(self.webpackChunkdwcj_documentation=self.webpackChunkdwcj_documentation||[]).push([[898],{49073:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>a,metadata:()=>i,toc:()=>r});const i=JSON.parse('{"id":"components/option-dialogs/message","title":"Message","description":"A MessageDialog is a modal dialog designed to display a message to the user with an OK button to dismiss the dialog. It blocks app execution until the user interacts with it or it closes due to a timeout.","source":"@site/docs/components/option-dialogs/message.md","sourceDirName":"components/option-dialogs","slug":"/components/option-dialogs/message","permalink":"/docs/components/option-dialogs/message","draft":false,"unlisted":false,"editUrl":"https://github.com/webforj/webforj-docs/tree/website/docs/components/option-dialogs/message.md","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_position":2,"title":"Message"},"sidebar":"documentationSidebar","previous":{"title":"Option Dialogs","permalink":"/docs/components/option-dialogs/"},"next":{"title":"Confirm","permalink":"/docs/components/option-dialogs/confirm"}}');var o=t(74848),n=t(28453);const a={sidebar_position:2,title:"Message"},l="Message Dialog",d={},r=[{value:"Usages",id:"usages",level:2},{value:"Message type",id:"message-type",level:2},{value:"Button text",id:"button-text",level:2},{value:"HTML processing",id:"html-processing",level:2},{value:"Timeout",id:"timeout",level:2},{value:"Best practices",id:"best-practices",level:2},{value:"Styling",id:"styling",level:2},{value:"Shadow parts",id:"shadow-parts",level:3},{value:"Reflected attributes",id:"reflected-attributes",level:3}];function c(e){const s={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,n.R)(),...e.components},{ComponentDemo:i,DocChip:a,JavadocLink:l,TableBuilder:d}=s;return i||g("ComponentDemo",!0),a||g("DocChip",!0),l||g("JavadocLink",!0),d||g("TableBuilder",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(s.header,{children:(0,o.jsx)(s.h1,{id:"message-dialog",children:"Message Dialog"})}),"\n",(0,o.jsx)(a,{chip:"shadow"}),"\n",(0,o.jsx)(a,{chip:"name",label:"dwc-dialog"}),"\n",(0,o.jsx)(l,{type:"foundation",location:"com/webforj/component/optiondialog/MessageDialog",top:"true"}),"\n",(0,o.jsxs)(s.p,{children:["A ",(0,o.jsx)(s.code,{children:"MessageDialog"})," is a modal dialog designed to display a message to the user with an ",(0,o.jsx)(s.code,{children:"OK"})," button to dismiss the dialog. It blocks app execution until the user interacts with it or it closes due to a timeout."]}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-java",children:'OptionDialog.showMessageDialog("Hello World!");\n'})}),"\n",(0,o.jsx)(s.h2,{id:"usages",children:"Usages"}),"\n",(0,o.jsx)(s.p,{children:"The Message Dialog provides a way to display informational alerts, such as notifications, updates, or simple messages that only require the user to acknowledge them without providing any input."}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-java",metastring:"showLineNumbers",children:'MessageDialog dialog = new MessageDialog(\n    "Hello World", "Hello World", MessageDialog.MessageType.INFO);\ndialog.setBlurred(true);\ndialog.setAlignment(MessageDialog.Alignment.TOP);\ndialog.show();\n'})}),"\n",(0,o.jsx)(s.h2,{id:"message-type",children:"Message type"}),"\n",(0,o.jsxs)(s.p,{children:["The ",(0,o.jsx)(s.code,{children:"MessageDialog"})," supports the following message types. When you configures a type, The dialog displays an icon beside the message, and the dialog's theme updates according to the webforJ design system rules."]}),"\n",(0,o.jsxs)(s.ol,{children:["\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.code,{children:"PLAIN"}),": Displays the message without an icon, using the default theme."]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.code,{children:"ERROR"}),": Displays an error icon next to the message with the error theme applied."]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.code,{children:"QUESTION"}),": Displays a question mark icon beside the message, using the primary theme."]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.code,{children:"WARNING"}),": Displays a warning icon next to the message with the warning theme applied."]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.code,{children:"INFO"}),": Displays an info icon beside the message, using the info theme."]}),"\n"]}),"\n",(0,o.jsxs)(s.p,{children:["In the following sample, The code configures a message dialog of type ",(0,o.jsx)(s.code,{children:"WARNING"}),". with a custom title and message."]}),"\n",(0,o.jsx)(i,{path:"https://demo.webforj.com/webapp/controlsamples/messagedialogtype?",javaE:"https://raw.githubusercontent.com/webforj/webforj-docs-samples/refs/heads/main/src/main/java/com/webforj/samples/views/optiondialog/message/MessageDialogTypeView.java",height:"350px"}),"\n",(0,o.jsx)(s.admonition,{title:"Dialog & Button Theme",type:"tip",children:(0,o.jsxs)(s.p,{children:["By default, the dialog's determines the theme based on the message type. You can customize the dialog's theme using the ",(0,o.jsx)(s.code,{children:"setTheme(Theme theme)"})," method and independently adjust the button theme with the ",(0,o.jsx)(s.code,{children:"setButtonTheme(ButtonTheme theme)"})," method to create different variations."]})}),"\n",(0,o.jsx)(s.h2,{id:"button-text",children:"Button text"}),"\n",(0,o.jsxs)(s.p,{children:["You can configure the dialog button's text using the ",(0,o.jsx)(s.code,{children:"setButtonText(String text)"}),"."]}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-java",children:'OptionDialog.showMessageDialog("Hello World!", "Title", "Got it");\n'})}),"\n",(0,o.jsx)(s.h2,{id:"html-processing",children:"HTML processing"}),"\n",(0,o.jsx)(s.p,{children:"By default, the message dialog processes and renders HTML content. You can turn off this feature by configuring it to display raw text instead."}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-java",metastring:"showLineNumbers",children:'MessageDialog dialog = new MessageDialog(\n    "<b>Hello World</b>", "Hello World", MessageDialog.MessageType.INFO);\ndialog.setRawText(true);\ndialog.show();\n'})}),"\n",(0,o.jsx)(s.h2,{id:"timeout",children:"Timeout"}),"\n",(0,o.jsxs)(s.p,{children:["The ",(0,o.jsx)(s.code,{children:"MessageDialog"})," allows you to set a timeout duration after which the dialog automatically closes. This feature is useful for non-critical notifications or information that doesn't require the user's immediate interaction."]}),"\n",(0,o.jsxs)(s.p,{children:["You can configure the timeout for the dialog using the ",(0,o.jsx)(s.code,{children:"setTimeout(int timeout)"})," method. The timeout duration is in seconds. If the specified time elapses without any user interaction, the dialog closes automatically."]}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-java",metastring:"showLineNumbers",children:'MessageDialog dialog = new MessageDialog("Hello World", "Title");\ndialog.setTimeout(2);\ndialog.show();\n'})}),"\n",(0,o.jsx)(s.h2,{id:"best-practices",children:"Best practices"}),"\n",(0,o.jsxs)(s.ol,{children:["\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.strong,{children:"Clear and Concise Messages"}),": Keep messages short and to the point and avoid technical jargon; use user-friendly language."]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.strong,{children:"Appropriate Message Types"}),":","\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsxs)(s.li,{children:["Use ",(0,o.jsx)(s.code,{children:"ERROR"})," for critical issues."]}),"\n",(0,o.jsxs)(s.li,{children:["Use ",(0,o.jsx)(s.code,{children:"WARNING"})," for cautionary notices."]}),"\n",(0,o.jsxs)(s.li,{children:["Use ",(0,o.jsx)(s.code,{children:"INFO"})," for general information."]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.strong,{children:"Consistent Theming"}),": Align dialog and button themes with your apps's design."]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.strong,{children:"Judicious Use of Timeout"}),": Set timeouts for non-critical notifications and ensure users have enough time to read the message."]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.strong,{children:"Avoid Overuse"}),": Use dialogs sparingly to prevent user frustration and reserve for important messages requiring user action or acknowledgment."]}),"\n"]}),"\n",(0,o.jsx)(s.h2,{id:"styling",children:"Styling"}),"\n",(0,o.jsx)(s.h3,{id:"shadow-parts",children:"Shadow parts"}),"\n",(0,o.jsxs)(s.p,{children:["These are the various parts of the ",(0,o.jsx)(s.a,{href:"../../glossary#shadow-dom",children:"shadow DOM"})," for the component, which will be required when styling via CSS is desired."]}),"\n",(0,o.jsx)(d,{tag:t(57813).lG,table:"parts"}),"\n",(0,o.jsx)(s.h3,{id:"reflected-attributes",children:"Reflected attributes"}),"\n",(0,o.jsx)(s.p,{children:"The reflected attributes of a component will be shown as attributes in the rendered HTML element for the component in the DOM. This means that styling can be applied using these attributes."}),"\n",(0,o.jsx)(d,{tag:t(57813).lG,table:"reflects"})]})}function h(e={}){const{wrapper:s}={...(0,n.R)(),...e.components};return s?(0,o.jsx)(s,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}function g(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},28453:(e,s,t)=>{t.d(s,{R:()=>a,x:()=>l});var i=t(96540);const o={},n=i.createContext(o);function a(e){const s=i.useContext(n);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),i.createElement(n.Provider,{value:s},e.children)}},57813:e=>{e.exports=JSON.parse('{"e7":"dwc-app-layout","$n":"dwc-button","Sc":"dwc-checkbox","D0":"dwc-field","Ap":"dwc-slider","qF":"dwc-listbox","tX":"dwc-choicebox","a3":"dwc-combobox","mD":"dwc-navigator","z2":"dwc-progressbar","a":"dwc-radio","TN":"dwc-tabbed-pane","_s":"dwc-drawer","lG":"dwc-dialog","In":"dwc-icon","O3":"dwc-splitter","az":"dwc-login","y$":"dwc-spinner","Rh":"dwc-loading","bJ":"dwc-loading","y8":"dwc-toast"}')}}]);