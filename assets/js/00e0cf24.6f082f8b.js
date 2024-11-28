"use strict";(self.webpackChunkdwcj_documentation=self.webpackChunkdwcj_documentation||[]).push([[8937],{8876:(e,o,i)=>{i.r(o),i.d(o,{assets:()=>a,contentTitle:()=>r,default:()=>h,frontMatter:()=>l,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"components/option-dialogs/file-chooser","title":"File Chooser","description":"FileChooserDialog is a modal dialog designed to allow the user to select a file or a directory from the server file system. The dialog blocks app execution until the user makes a selection or closes the dialog.","source":"@site/docs/components/option-dialogs/file-chooser.md","sourceDirName":"components/option-dialogs","slug":"/components/option-dialogs/file-chooser","permalink":"/docs/components/option-dialogs/file-chooser","draft":false,"unlisted":false,"editUrl":"https://github.com/webforj/webforj-docs/tree/website/docs/components/option-dialogs/file-chooser.md","tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"sidebar_position":5,"title":"File Chooser"},"sidebar":"documentationSidebar","previous":{"title":"Input","permalink":"/docs/components/option-dialogs/input"},"next":{"title":"File Upload","permalink":"/docs/components/option-dialogs/file-upload"}}');var t=i(4848),n=i(8453);const l={sidebar_position:5,title:"File Chooser"},r="File Chooser Dialog",a={},c=[{value:"Usages",id:"usages",level:2},{value:"Result",id:"result",level:2},{value:"Selection mode",id:"selection-mode",level:2},{value:"Initial path",id:"initial-path",level:2},{value:"Restriction",id:"restriction",level:2},{value:"Filters",id:"filters",level:2},{value:"Custom filters",id:"custom-filters",level:3},{value:"Internationalization (i18n)",id:"internationalization-i18n",level:2},{value:"Best practices",id:"best-practices",level:2},{value:"Styling",id:"styling",level:2},{value:"Shadow parts",id:"shadow-parts",level:3},{value:"Reflected attributes",id:"reflected-attributes",level:3}];function d(e){const o={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,n.R)(),...e.components},{ComponentDemo:s,DocChip:l,JavadocLink:r,TableBuilder:a}=o;return s||p("ComponentDemo",!0),l||p("DocChip",!0),r||p("JavadocLink",!0),a||p("TableBuilder",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.header,{children:(0,t.jsx)(o.h1,{id:"file-chooser-dialog",children:"File Chooser Dialog"})}),"\n",(0,t.jsx)(l,{chip:"shadow"}),"\n",(0,t.jsx)(l,{chip:"name",label:"dwc-dialog"}),"\n",(0,t.jsx)(r,{type:"foundation",location:"com/webforj/component/optiondialog/FileChooserDialog",top:"true"}),"\n",(0,t.jsxs)(o.p,{children:[(0,t.jsx)(o.code,{children:"FileChooserDialog"})," is a modal dialog designed to allow the user to select a file or a directory from the server file system. The dialog blocks app execution until the user makes a selection or closes the dialog."]}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-java",children:'OptionDialog.showFileChooserDialog("Select a file");\n'})}),"\n",(0,t.jsx)(o.h2,{id:"usages",children:"Usages"}),"\n",(0,t.jsxs)(o.p,{children:["The ",(0,t.jsx)(o.code,{children:"FileChooserDialog"})," provides a way to select files or directories from the file system, enabling users to choose directories for saving data, or perform file operations."]}),"\n",(0,t.jsx)(s,{path:"https://demo.webforj.com/webapp/controlsamples/filechooserdialogbasic?",javaE:"https://raw.githubusercontent.com/webforj/webforj-docs-samples/refs/heads/main/src/main/java/com/webforj/samples/views/optiondialog/filechooser/FileChooserDialogBasicView.java",height:"600px"}),"\n",(0,t.jsx)(o.h2,{id:"result",children:"Result"}),"\n",(0,t.jsxs)(o.p,{children:["The ",(0,t.jsx)(o.code,{children:"FileChooserDialog"})," returns the selected file or directory as a string. If the user closes the dialog without making a selection, the result will be ",(0,t.jsx)(o.code,{children:"null"}),"."]}),"\n",(0,t.jsx)(o.admonition,{type:"important",children:(0,t.jsxs)(o.p,{children:["The resulting string will be returned from the ",(0,t.jsx)(o.code,{children:"show()"})," method, or the equivalent ",(0,t.jsx)(o.code,{children:"OptionDialog"})," method as shown below."]})}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-java",metastring:"showLineNumbers",children:'String result = OptionDialog.showFileChooserDialog(\n    "Select a file", "/home/user", FileChooserDialog.SelectionMode.FILES);\n\nif (result != null) {\n    OptionDialog.showMessageDialog("You selected: " + result, "Selection Made", "OK");\n} else {\n    OptionDialog.showMessageDialog("No selection made", "Selection Canceled", "OK");\n}\n'})}),"\n",(0,t.jsx)(o.h2,{id:"selection-mode",children:"Selection mode"}),"\n",(0,t.jsxs)(o.p,{children:["The ",(0,t.jsx)(o.code,{children:"FileChooserDialog"})," supports different selection modes, allowing you to tailor the selection method to your specific needs:"]}),"\n",(0,t.jsxs)(o.ol,{children:["\n",(0,t.jsxs)(o.li,{children:[(0,t.jsx)(o.strong,{children:"FILES"}),": Allows the selection of files only."]}),"\n",(0,t.jsxs)(o.li,{children:[(0,t.jsx)(o.strong,{children:"DIRECTORIES"}),": Allows the selection of directories only."]}),"\n",(0,t.jsxs)(o.li,{children:[(0,t.jsx)(o.strong,{children:"FILES_AND_DIRECTORIES"}),": Allows the selection of both files and directories."]}),"\n"]}),"\n",(0,t.jsx)(o.h2,{id:"initial-path",children:"Initial path"}),"\n",(0,t.jsxs)(o.p,{children:["The ",(0,t.jsx)(o.code,{children:"FileChooserDialog"})," allows you to specify an initial path that the dialog will open to when displayed. This can provide users with a starting point for their file selection."]}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-java",metastring:"showLineNumbers",children:'FileChooserDialog dialog = new FileChooserDialog("Select a file", "/home/user");\nString result = dialog.show();\n'})}),"\n",(0,t.jsx)(o.h2,{id:"restriction",children:"Restriction"}),"\n",(0,t.jsxs)(o.p,{children:["You can restrict the dialog to a specific directory, preventing users from navigating outside of it using the ",(0,t.jsx)(o.code,{children:"setRestricted(boolean restricted)"})," method."]}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-java",metastring:"showLineNumbers",children:'FileChooserDialog dialog = new FileChooserDialog("Select a file", "/home/user");\ndialog.setRestricted(true);\ndialog.show();\n'})}),"\n",(0,t.jsx)(o.h2,{id:"filters",children:"Filters"}),"\n",(0,t.jsxs)(o.p,{children:["When the seletion mode is ",(0,t.jsx)(o.code,{children:"FILES"}),", The ",(0,t.jsx)(o.code,{children:"FileChooserDialog"})," allows you to set filters to limit the types of files that listed. You can configure filters using the ",(0,t.jsx)(o.code,{children:"setFilters(List<FileChooserFilter> filters)"})," method."]}),"\n",(0,t.jsx)(s,{path:"https://demo.webforj.com/webapp/controlsamples/filechooserdialogfilters?",javaE:"https://raw.githubusercontent.com/webforj/webforj-docs-samples/refs/heads/main/src/main/java/com/webforj/samples/views/optiondialog/filechooser/FileChooserDialogFiltersView.java",height:"600px"}),"\n",(0,t.jsx)(o.h3,{id:"custom-filters",children:"Custom filters"}),"\n",(0,t.jsxs)(o.p,{children:["You can allow users to add custom filters by enabling the custom filters feature using the ",(0,t.jsx)(o.code,{children:"setCustomFilters(boolean customFilters)"})," method.\nCustom filters will be saved in the browser's local storage by default and restored when the dialog is shown again."]}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-java",metastring:"showLineNumbers",children:'FileChooserDialog dialog = new FileChooserDialog("Select a file", "/home/user");\ndialog.setCustomFilters(true);\nString result = dialog.show();\n'})}),"\n",(0,t.jsx)(o.h2,{id:"internationalization-i18n",children:"Internationalization (i18n)"}),"\n",(0,t.jsxs)(o.p,{children:["The titles, descriptions, labels, and messages within the component are fully customizable using the ",(0,t.jsx)(o.code,{children:"FileChooserI18n"})," class. This flexibility allows you to tailor the dialog interface to meet specific localization requirements or personalization preferences."]}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-java",metastring:"showLineNumbers",children:'FileChooserDialog dialog = new FileChooserDialog("W\xe4hlen Sie eine Datei aus", "/Users/habof/bbx");\nFileChooserI18n i18n = new FileChooserI18n();\ni18n.setChoose("W\xe4hlen");\ni18n.setCancel("Stornieren");\ndialog.setI18n(i18n);\n'})}),"\n",(0,t.jsx)(o.h2,{id:"best-practices",children:"Best practices"}),"\n",(0,t.jsxs)(o.ol,{children:["\n",(0,t.jsxs)(o.li,{children:[(0,t.jsx)(o.strong,{children:"Clear and Concise Prompts"}),": Ensure the prompt message clearly explains what the user is being asked to select."]}),"\n",(0,t.jsxs)(o.li,{children:[(0,t.jsx)(o.strong,{children:"Appropriate Selection Modes"}),": Choose selection modes that match the required user action to ensure accurate and relevant selections."]}),"\n",(0,t.jsxs)(o.li,{children:[(0,t.jsx)(o.strong,{children:"Logical Initial Paths"}),": Set initial paths that provide users with a useful starting point for their selection."]}),"\n",(0,t.jsxs)(o.li,{children:[(0,t.jsx)(o.strong,{children:"Restrict Directory Navigation"}),": Restrict the dialog to a specific directory when necessary to prevent users from navigating to unauthorized areas."]}),"\n"]}),"\n",(0,t.jsx)(o.h2,{id:"styling",children:"Styling"}),"\n",(0,t.jsx)(o.h3,{id:"shadow-parts",children:"Shadow parts"}),"\n",(0,t.jsxs)(o.p,{children:["These are the various parts of the ",(0,t.jsx)(o.a,{href:"../../glossary#shadow-dom",children:"shadow DOM"})," for the component, which will be required when styling via CSS is desired."]}),"\n",(0,t.jsx)(a,{tag:i(7813).lG,table:"parts"}),"\n",(0,t.jsx)(o.h3,{id:"reflected-attributes",children:"Reflected attributes"}),"\n",(0,t.jsx)(o.p,{children:"The reflected attributes of a component will be shown as attributes in the rendered HTML element for the component in the DOM. This means that styling can be applied using these attributes."}),"\n",(0,t.jsx)(a,{tag:i(7813).lG,table:"reflects"})]})}function h(e={}){const{wrapper:o}={...(0,n.R)(),...e.components};return o?(0,t.jsx)(o,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}function p(e,o){throw new Error("Expected "+(o?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},8453:(e,o,i)=>{i.d(o,{R:()=>l,x:()=>r});var s=i(6540);const t={},n=s.createContext(t);function l(e){const o=s.useContext(n);return s.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function r(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),s.createElement(n.Provider,{value:o},e.children)}},7813:e=>{e.exports=JSON.parse('{"e7":"dwc-app-layout","$n":"dwc-button","Sc":"dwc-checkbox","D0":"dwc-field","Ap":"dwc-slider","qF":"dwc-listbox","tX":"dwc-choicebox","a3":"dwc-combobox","mD":"dwc-navigator","z2":"dwc-progressbar","a":"dwc-radio","TN":"dwc-tabbed-pane","_s":"dwc-drawer","lG":"dwc-dialog","In":"dwc-icon","O3":"dwc-splitter","az":"dwc-login","y$":"dwc-spinner","Rh":"dwc-loading","bJ":"dwc-loading","y8":"dwc-toast"}')}}]);