"use strict";(self.webpackChunkdwcj_documentation=self.webpackChunkdwcj_documentation||[]).push([[5947],{15253:(e,i,o)=>{o.r(i),o.d(i,{assets:()=>r,contentTitle:()=>a,default:()=>h,frontMatter:()=>n,metadata:()=>l,toc:()=>d});const l=JSON.parse('{"id":"components/option-dialogs/file-upload","title":"File Upload","description":"A FileUploadDialog is a modal dialog designed to allow the user to upload files from their local file system. The dialog blocks app execution until the user selects files to upload or closes the dialog.","source":"@site/docs/components/option-dialogs/file-upload.md","sourceDirName":"components/option-dialogs","slug":"/components/option-dialogs/file-upload","permalink":"/docs/components/option-dialogs/file-upload","draft":false,"unlisted":false,"editUrl":"https://github.com/webforj/webforj-docs/tree/website/docs/components/option-dialogs/file-upload.md","tags":[],"version":"current","sidebarPosition":6,"frontMatter":{"sidebar_position":6,"title":"File Upload"},"sidebar":"documentationSidebar","previous":{"title":"File Chooser","permalink":"/docs/components/option-dialogs/file-chooser"},"next":{"title":"File Save","permalink":"/docs/components/option-dialogs/file-save"}}');var t=o(74848),s=o(28453);const n={sidebar_position:6,title:"File Upload"},a="File Upload Dialog",r={},d=[{value:"Usages",id:"usages",level:2},{value:"Result",id:"result",level:2},{value:"Moving uploaded files",id:"moving-uploaded-files",level:3},{value:"Filters",id:"filters",level:2},{value:"Max size",id:"max-size",level:2},{value:"Internationalization (i18n)",id:"internationalization-i18n",level:2},{value:"Best practices",id:"best-practices",level:2}];function c(e){const i={admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components},{ComponentDemo:o,DocChip:l,JavadocLink:n}=i;return o||p("ComponentDemo",!0),l||p("DocChip",!0),n||p("JavadocLink",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.header,{children:(0,t.jsx)(i.h1,{id:"file-upload-dialog",children:"File Upload Dialog"})}),"\n",(0,t.jsx)(l,{chip:"shadow"}),"\n",(0,t.jsx)(n,{type:"foundation",location:"com/webforj/component/optiondialog/FileUploadDialog",top:"true"}),"\n",(0,t.jsxs)(i.p,{children:["A ",(0,t.jsx)(i.code,{children:"FileUploadDialog"})," is a modal dialog designed to allow the user to upload files from their local file system. The dialog blocks app execution until the user selects files to upload or closes the dialog."]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-java",children:'UploadedFile result = OptionDialog.showFileUploadDialog("Upload a file");\n'})}),"\n",(0,t.jsx)(i.h2,{id:"usages",children:"Usages"}),"\n",(0,t.jsxs)(i.p,{children:["The ",(0,t.jsx)(i.code,{children:"FileUploadDialog"})," provides a way to select and upload files, enabling users to submit documents, images, or other file types required by the app."]}),"\n",(0,t.jsx)(i.h2,{id:"result",children:"Result"}),"\n",(0,t.jsxs)(i.p,{children:["The ",(0,t.jsx)(i.code,{children:"FileUploadDialog"})," returns an ",(0,t.jsx)(i.code,{children:"UploadedFile"})," object that contains information about the uploaded file, such as its name, size, and content. If the user closes the dialog without selecting a file, the result will be ",(0,t.jsx)(i.code,{children:"null"}),"."]}),"\n",(0,t.jsx)(i.admonition,{type:"important",children:(0,t.jsxs)(i.p,{children:["The resulting string will be returned from the ",(0,t.jsx)(i.code,{children:"show()"})," method, or the equivalent ",(0,t.jsx)(i.code,{children:"OptionDialog"})," method as shown below."]})}),"\n",(0,t.jsx)(o,{path:"https://demo.webforj.com/webapp/controlsamples/fileuploaddialogbasic?",javaE:"https://raw.githubusercontent.com/webforj/webforj-docs-samples/refs/heads/main/src/main/java/com/webforj/samples/views/optiondialog/fileupload/FileUploadDialogBasicView.java",height:"400px"}),"\n",(0,t.jsx)(i.h3,{id:"moving-uploaded-files",children:"Moving uploaded files"}),"\n",(0,t.jsxs)(i.p,{children:["By default, webforJ stores uploaded files in a temporary folder which is regularly cleaned. If you don't move file elsewhere, it'll be deleted. To move the file, use the ",(0,t.jsx)(i.code,{children:"move"})," method and specify the destination path."]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-java",metastring:"showLineNumbers",children:'UploadedFile uploadedFile = OptionDialog.showFileUploadDialog("Select a file to upload");\ntry {\n    File file = uploadedFile.move("my/full/path/" + uploadedFile.getSanitizedClientName());\n    // ... do something with the file\n} catch (IOException e) {\n    // handle the exception\n}\n'})}),"\n",(0,t.jsx)(i.admonition,{title:"Sanitized Client Name",type:"tip",children:(0,t.jsxs)(i.p,{children:["Use the ",(0,t.jsx)(i.code,{children:"getSanitizedClientName"})," method to obtain a sanitized version of the uploaded file's name. This method helps prevent security risks such as directory traversal attacks or invalid characters in file names, ensuring the integrity and security of your file storage system."]})}),"\n",(0,t.jsx)(i.h2,{id:"filters",children:"Filters"}),"\n",(0,t.jsxs)(i.p,{children:["The ",(0,t.jsx)(i.code,{children:"FileUploadDialog"})," allows you to set filters to limit the types of files that can be selected for upload. You can configure filters using the ",(0,t.jsx)(i.code,{children:"setFilters(List<FileChooserFilter> filters)"})," method."]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-java",metastring:"showLineNumbers",children:'FileUploadDialog dialog = new FileUploadDialog(\n    "Upload a file", \n    Arrays.asList(new FileChooserFilter("Text Files", "*.txt")));\nUploadedFile result = dialog.show();\n'})}),"\n",(0,t.jsx)(i.admonition,{title:"Filters Validation",type:"warning",children:(0,t.jsx)(i.p,{children:"The server won't validate the uploaded file against the filters. The filters are only applied in the UI to guide the user's selection. You must implement server-side validation to ensure that the uploaded files meet your app's requirements."})}),"\n",(0,t.jsx)(i.h2,{id:"max-size",children:"Max size"}),"\n",(0,t.jsxs)(i.p,{children:["It's possible to set the maximum file size for uploads to ensure that users don't upload files that are too large for your app to handle. This can be configured using the ",(0,t.jsx)(i.code,{children:"setMaxFileSize(long maxSize)"})," method, where maxSize is specified in bytes."]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-java",children:"dialog.setMaxFileSize(2 * 1024 * 1024); // Set max size to 2 MB\n"})}),"\n",(0,t.jsx)(i.h2,{id:"internationalization-i18n",children:"Internationalization (i18n)"}),"\n",(0,t.jsxs)(i.p,{children:["The titles, descriptions, labels, and messages within the component are fully customizable using the ",(0,t.jsx)(i.code,{children:"FileUploadI18n"})," class. This flexibility allows you to tailor the dialog interface to meet specific localization requirements or personalization preferences."]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-java",metastring:"showLineNumbers",children:'FileUploadDialog dialog = new FileUploadDialog("Datei hochladen");\nFileUploadI18n i18n = new FileUploadI18n();\ni18n.setUpload("Hochladen");\ni18n.setCancel("Stornieren");\ndialog.setI18n(i18n);\nUploadedFile result = dialog.show();\n'})}),"\n",(0,t.jsx)(i.h2,{id:"best-practices",children:"Best practices"}),"\n",(0,t.jsxs)(i.ol,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Clear and Concise Prompts"}),": Ensure the prompt message clearly explains what the user is being asked to upload."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Appropriate Filters"}),": Set file filters that match the required file types to ensure users upload relevant files."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Logical Initial Paths"}),": Set initial paths that provide users with a useful starting point for their file selection."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Restrict Directory Navigation"}),": Restrict the dialog to a specific directory when necessary to prevent users from navigating to unauthorized areas."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Consistent Theming"}),": Align the dialog and upload field themes with your app's design for a cohesive user experience."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Minimize Overuse"}),": Use file upload dialogs sparingly to avoid user frustration. Reserve them for actions requiring specific user file uploads."]}),"\n"]})]})}function h(e={}){const{wrapper:i}={...(0,s.R)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}function p(e,i){throw new Error("Expected "+(i?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},28453:(e,i,o)=>{o.d(i,{R:()=>n,x:()=>a});var l=o(96540);const t={},s=l.createContext(t);function n(e){const i=l.useContext(s);return l.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function a(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:n(e.components),l.createElement(s.Provider,{value:i},e.children)}}}]);