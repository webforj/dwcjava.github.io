"use strict";(self.webpackChunkdwcj_documentation=self.webpackChunkdwcj_documentation||[]).push([[2143],{8702:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>r,contentTitle:()=>l,default:()=>h,frontMatter:()=>a,metadata:()=>n,toc:()=>c});const n=JSON.parse('{"id":"components/dialog","title":"Dialog","description":"The webforJ dialog component is built to allow a developer to quickly and easily display a dialog on their application, for instances such as a login menu or information box.","source":"@site/docs/components/dialog.md","sourceDirName":"components","slug":"/components/dialog","permalink":"/docs/components/dialog","draft":false,"unlisted":false,"editUrl":"https://github.com/webforj/webforj-docs/tree/website/docs/components/dialog.md","tags":[],"version":"current","frontMatter":{"title":"Dialog"},"sidebar":"documentationSidebar","previous":{"title":"ColumnsLayout","permalink":"/docs/components/columns-layout"},"next":{"title":"Drawer","permalink":"/docs/components/drawer"}}');var s=t(4848),i=t(8453);const a={title:"Dialog"},l=void 0,r={},c=[{value:"Usages",id:"usages",level:2},{value:"Backdrop and blur",id:"backdrop-and-blur",level:2},{value:"Opening and closing the <code>Dialog</code>",id:"opening-and-closing-the-dialog",level:2},{value:"Auto-focus",id:"auto-focus",level:2},{value:"Draggable",id:"draggable",level:2},{value:"Snap to edge",id:"snap-to-edge",level:3},{value:"Positioning",id:"positioning",level:2},{value:"Vertical alignment",id:"vertical-alignment",level:3},{value:"Full screen and breakpoints",id:"full-screen-and-breakpoints",level:3},{value:"Styling",id:"styling",level:2},{value:"Themes",id:"themes",level:3},{value:"Shadow parts",id:"shadow-parts",level:3},{value:"Slots",id:"slots",level:3},{value:"CSS properties",id:"css-properties",level:3},{value:"Reflected attributes",id:"reflected-attributes",level:3}];function d(e){const o={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components},{ComponentDemo:n,DocChip:a,JavadocLink:l,TableBuilder:r}=o;return n||p("ComponentDemo",!0),a||p("DocChip",!0),l||p("JavadocLink",!0),r||p("TableBuilder",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(a,{chip:"shadow"}),"\n",(0,s.jsx)(a,{chip:"name",label:"dwc-dialog"}),"\n",(0,s.jsx)(l,{type:"dialog",location:"com/webforj/component/dialog/Dialog",top:"true"}),"\n",(0,s.jsx)(o.p,{children:"The webforJ dialog component is built to allow a developer to quickly and easily display a dialog on their application, for instances such as a login menu or information box."}),"\n",(0,s.jsxs)(o.p,{children:["The component is built with three sections, each of which are ",(0,s.jsx)(o.code,{children:"Panel"})," components: the ",(0,s.jsx)(o.strong,{children:"header"}),", the ",(0,s.jsx)(o.strong,{children:"content"}),", and the ",(0,s.jsx)(o.strong,{children:"footer"}),"."]}),"\n",(0,s.jsx)(n,{path:"https://demo.webforj.com/webapp/controlsamples/dialogsections?",javaE:"https://raw.githubusercontent.com/webforj/webforj-docs-samples/refs/heads/main/src/main/java/com/webforj/samples/views/dialog/DialogSectionsView.java",javaC:"https://raw.githubusercontent.com/webforj/ControlSamples/main/src/main/code_snippets/dialog/Sections.txt",height:"225px"}),"\n",(0,s.jsx)(o.h2,{id:"usages",children:"Usages"}),"\n",(0,s.jsxs)(o.ol,{children:["\n",(0,s.jsxs)(o.li,{children:[(0,s.jsx)(o.strong,{children:"User Feedback and Confirmation"}),": ",(0,s.jsx)(o.code,{children:"Dialog"})," components are often used to provide feedback or ask for user confirmation. They can display various important pieces of feedback to a user, such as:"]}),"\n"]}),"\n",(0,s.jsxs)(o.blockquote,{children:["\n",(0,s.jsxs)(o.ul,{children:["\n",(0,s.jsx)(o.li,{children:"Success messages"}),"\n",(0,s.jsx)(o.li,{children:"Error alerts"}),"\n",(0,s.jsx)(o.li,{children:"Confirmation submissions"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(o.ol,{start:"2",children:["\n",(0,s.jsxs)(o.li,{children:["\n",(0,s.jsxs)(o.p,{children:[(0,s.jsx)(o.strong,{children:"Form Input and Editing"}),": You can use dialogs to collect user input or allow them to edit information in a controlled and focused manner. For example, a dialog can pop up to edit user profile details or complete a multi-step form."]}),"\n"]}),"\n",(0,s.jsxs)(o.li,{children:["\n",(0,s.jsxs)(o.p,{children:[(0,s.jsx)(o.strong,{children:"Contextual Information"}),": Displaying additional contextual information or tooltips in a dialog can help users understand complex features or data. Dialogs can provide in-depth explanations, charts, or help documentation."]}),"\n"]}),"\n",(0,s.jsxs)(o.li,{children:["\n",(0,s.jsxs)(o.p,{children:[(0,s.jsx)(o.strong,{children:"Image and Media Previews"}),": When users need to view pieces of media, a ",(0,s.jsx)(o.code,{children:"Dialog"})," can be used to show larger previews or galleries, such as when interacting with:"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(o.blockquote,{children:["\n",(0,s.jsxs)(o.ul,{children:["\n",(0,s.jsx)(o.li,{children:"Images"}),"\n",(0,s.jsx)(o.li,{children:"Videos"}),"\n",(0,s.jsx)(o.li,{children:"Other media"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(o.h2,{id:"backdrop-and-blur",children:"Backdrop and blur"}),"\n",(0,s.jsxs)(o.p,{children:["By enabling the backdrop attribute of the webforJ ",(0,s.jsx)(o.code,{children:"Dialog"})," component, a backdrop will be displayed behind the ",(0,s.jsx)(o.code,{children:"Dialog"}),". Additionally, when enabled, the Dialog's blurred attribute will blur the backdrop of the ",(0,s.jsx)(o.code,{children:"Dialog"}),". Modifying these settings can help users by providing depths, visual hierarchy, and context, leading to more clear guidance for a user."]}),"\n",(0,s.jsx)(n,{path:"https://demo.webforj.com/webapp/controlsamples/dialogbackdropblur?",javaE:"https://raw.githubusercontent.com/webforj/webforj-docs-samples/refs/heads/main/src/main/java/com/webforj/samples/views/dialog/DialogBackdropBlurView.java",javaC:"https://raw.githubusercontent.com/webforj/ControlSamples/main/src/main/code_snippets/dialog/Blur.txt",height:"300px"}),"\n",(0,s.jsxs)(o.h2,{id:"opening-and-closing-the-dialog",children:["Opening and closing the ",(0,s.jsx)(o.code,{children:"Dialog"})]}),"\n",(0,s.jsxs)(o.p,{children:["After creating a new ",(0,s.jsx)(o.code,{children:"Dialog"})," object, use the ",(0,s.jsx)(o.code,{children:"show()"})," method to display the dialog."]}),"\n",(0,s.jsxs)(o.p,{children:["The ",(0,s.jsx)(o.code,{children:"Dialog"})," supports multiple cancellation methods for closure of the component: hitting the ",(0,s.jsx)(o.code,{children:"ESC"})," key, clicking outside of the ",(0,s.jsx)(o.code,{children:"Dialog"}),", or using the ",(0,s.jsx)(o.code,{children:"hide()"})," method. The first two properties are customizable via their respective methods:\r\n",(0,s.jsx)(o.code,{children:"setCancelOnEscKey()"})," and ",(0,s.jsx)(o.code,{children:"setCancelOnOutsideClick()"}),". The ",(0,s.jsx)(o.code,{children:"hide()"})," method allows for the ",(0,s.jsx)(o.code,{children:"Dialog"})," to be closed programmatically, such as by clicking a button on the ",(0,s.jsx)(o.code,{children:"Dialog"})," after saving data. A method to quickly enable or disable users' ability to close the ",(0,s.jsx)(o.code,{children:"Dialog"}),", ",(0,s.jsx)(o.code,{children:"setClosable()"})," will prevent or allow both escape and click closure of the ",(0,s.jsx)(o.code,{children:"Dialog"}),"."]}),"\n",(0,s.jsx)(n,{path:"https://demo.webforj.com/webapp/controlsamples/dialogclose?",javaE:"https://raw.githubusercontent.com/webforj/webforj-docs-samples/refs/heads/main/src/main/java/com/webforj/samples/views/dialog/DialogCloseView.java",javaC:"https://raw.githubusercontent.com/webforj/ControlSamples/main/src/main/code_snippets/dialog/Close.txt",height:"350px"}),"\n",(0,s.jsx)(o.h2,{id:"auto-focus",children:"Auto-focus"}),"\n",(0,s.jsxs)(o.p,{children:["When enabled, auto-focus will automatically give focus to the first element within the dialog that can be focused. This is useful in helping to direct the attention of users, and is customizable via the ",(0,s.jsx)(o.code,{children:"setAutoFocus()"})," method."]}),"\n",(0,s.jsx)(n,{path:"https://demo.webforj.com/webapp/controlsamples/dialogautofocus?",javaE:"https://raw.githubusercontent.com/webforj/webforj-docs-samples/refs/heads/main/src/main/java/com/webforj/samples/views/dialog/DialogAutoFocusView.java",javaC:"https://raw.githubusercontent.com/webforj/ControlSamples/main/src/main/code_snippets/dialog/AutoFocus.txt",height:"350px"}),"\n",(0,s.jsx)(o.h2,{id:"draggable",children:"Draggable"}),"\n",(0,s.jsxs)(o.p,{children:["The ",(0,s.jsx)(o.code,{children:"Dialog"})," has built in functionality to be draggable, allowing the user to relocate the ",(0,s.jsx)(o.code,{children:"Dialog"})," window by clicking and dragging. The position of the ",(0,s.jsx)(o.code,{children:"Dialog"})," can be manipulated from any of the fields within it: the header, content or footer."]}),"\n",(0,s.jsx)(o.h3,{id:"snap-to-edge",children:"Snap to edge"}),"\n",(0,s.jsxs)(o.p,{children:["It is also possible to calibrate this behavior to snap to the edge of the screen, meaning the ",(0,s.jsx)(o.code,{children:"Dialog"})," will automatically align itself with the edge of the display when released from its drag and drop date. Snapping can be changed via the ",(0,s.jsx)(o.code,{children:"setSnapToEdge()"})," method. The ",(0,s.jsx)(o.code,{children:"setSnapThreshold()"})," takes a number of pixels, which will set how far the ",(0,s.jsx)(o.code,{children:"Dialog"})," should be from the sides of the screen before it will automatically snap to the edges."]}),"\n",(0,s.jsx)(n,{path:"https://demo.webforj.com/webapp/controlsamples/dialogdraggable?",javaE:"https://raw.githubusercontent.com/webforj/webforj-docs-samples/refs/heads/main/src/main/java/com/webforj/samples/views/dialog/DialogDraggableView.java",javaC:"https://raw.githubusercontent.com/webforj/ControlSamples/main/src/main/code_snippets/dialog/Draggable.txt",height:"350px"}),"\n",(0,s.jsx)(o.h2,{id:"positioning",children:"Positioning"}),"\n",(0,s.jsxs)(o.p,{children:["The dialog's position can be manipulated using the built-in ",(0,s.jsx)(o.code,{children:"setPosx()"})," and ",(0,s.jsx)(o.code,{children:"setPosy()"})," methods. These methods take a string argument which can represent any applicable CSS unit of length, such as pixels or view height/width. A list of these measurements ",(0,s.jsx)(o.a,{href:"https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Values_and_units#numbers_lengths_and_percentages",children:"can be found at this link"}),"."]}),"\n",(0,s.jsx)(n,{path:"https://demo.webforj.com/webapp/controlsamples/dialogpositioning?",javaE:"https://raw.githubusercontent.com/webforj/webforj-docs-samples/refs/heads/main/src/main/java/com/webforj/samples/views/dialog/DialogPositioningView.java",javaC:"https://raw.githubusercontent.com/webforj/ControlSamples/main/src/main/code_snippets/dialog/Positioning.txt",height:"350px"}),"\n",(0,s.jsx)(o.h3,{id:"vertical-alignment",children:"Vertical alignment"}),"\n",(0,s.jsxs)(o.p,{children:["In addition to manual assignment of a dialog's X and Y position, it is possible to use the dialog's built-in enum class to align the ",(0,s.jsx)(o.code,{children:"Dialog"}),". There are three possible values, ",(0,s.jsx)(o.code,{children:"TOP"}),", ",(0,s.jsx)(o.code,{children:"CENTER"})," and ",(0,s.jsx)(o.code,{children:"BOTTOM"}),", each of which can be used with the ",(0,s.jsx)(o.code,{children:"setAlignment()"})," method."]}),"\n",(0,s.jsx)(n,{path:"https://demo.webforj.com/webapp/controlsamples/dialogalignments?",javaE:"https://raw.githubusercontent.com/webforj/webforj-docs-samples/refs/heads/main/src/main/java/com/webforj/samples/views/dialog/DialogAlignmentsView.java",javaC:"https://raw.githubusercontent.com/webforj/ControlSamples/main/src/main/code_snippets/dialog/Alignments.txt",height:"550px"}),"\n",(0,s.jsx)(o.h3,{id:"full-screen-and-breakpoints",children:"Full screen and breakpoints"}),"\n",(0,s.jsxs)(o.p,{children:["The ",(0,s.jsx)(o.code,{children:"Dialog"})," can be set to enter full screen mode. When full screen is enabled, the ",(0,s.jsx)(o.code,{children:"Dialog"})," cannot be moved or positioned. This mode can be manipulated with the breakpoint attribute of the ",(0,s.jsx)(o.code,{children:"Dialog"}),". The breakpoint is a media query which components when the ",(0,s.jsx)(o.code,{children:"Dialog"})," will automatically flip to full screen mode. When the query matches, the ",(0,s.jsx)(o.code,{children:"Dialog"})," changes to full screen - otherwise it is positioned."]}),"\n",(0,s.jsx)(o.h2,{id:"styling",children:"Styling"}),"\n",(0,s.jsx)(o.h3,{id:"themes",children:"Themes"}),"\n",(0,s.jsxs)(o.p,{children:[(0,s.jsx)(o.code,{children:"Dialog"})," components come with ",(0,s.jsx)(l,{type:"foundation",location:"com/webforj/component/dialog/Dialog.Theme.html",children:"7 discrete themes "})," built in for quick styling without the use of CSS. These themes are pre-defined styles that can be applied to buttons to change their appearance and visual presentation. They offer a quick and consistent way to customize the look of buttons throughout an application."]}),"\n",(0,s.jsx)(o.p,{children:"While there are many use cases for each of the various themes, some examples uses are:"}),"\n",(0,s.jsxs)(o.ul,{children:["\n",(0,s.jsxs)(o.li,{children:[(0,s.jsx)(o.strong,{children:"Danger"}),": Actions with severe consequences, such as clearing filled-out information, or permanently deleting an account/data is represents a good use case for dialogs with the Danger theme."]}),"\n",(0,s.jsxs)(o.li,{children:[(0,s.jsx)(o.strong,{children:"Default"}),": The default theme is appropriate for actions throughout an application that do not require special attention and that are generic, such as toggling a setting."]}),"\n",(0,s.jsxs)(o.li,{children:[(0,s.jsx)(o.strong,{children:"Primary"}),': This theme is appropriate as a main "call-to-action" on a page, such as signing up, saving changes, or continuing to another page.']}),"\n",(0,s.jsxs)(o.li,{children:[(0,s.jsx)(o.strong,{children:"Success"}),": Success themed dialogs are excellent for visualizing successful completion of an element in an application, such as the submission of a form or completion of a sign-up process. The success theme can by programmatically applied once a successful action has been completed."]}),"\n",(0,s.jsxs)(o.li,{children:[(0,s.jsx)(o.strong,{children:"Warning"}),": Warning dialogs are useful to indicate users they are about to perform a potentially risky action, such as when navigating away from a page with unsaved changes. These actions are often less impactful than those that would use the Danger theme."]}),"\n",(0,s.jsxs)(o.li,{children:[(0,s.jsx)(o.strong,{children:"Gray"}),": Good for subtle actions, such as minor settings or actions that are more supplementary to a page, and not part of the main functionality."]}),"\n",(0,s.jsxs)(o.li,{children:[(0,s.jsx)(o.strong,{children:"Info"}),": The Info theme is a good choice to provide clarifying, additional information to a user when pushed."]}),"\n"]}),"\n",(0,s.jsx)(n,{path:"https://demo.webforj.com/webapp/controlsamples/dialogthemes?",javaE:"https://raw.githubusercontent.com/webforj/webforj-docs-samples/refs/heads/main/src/main/java/com/webforj/samples/views/dialog/DialogThemesView.java",height:"500px"}),"\n",(0,s.jsx)(o.h3,{id:"shadow-parts",children:"Shadow parts"}),"\n",(0,s.jsxs)(o.p,{children:["These are the various parts of the ",(0,s.jsx)(o.a,{href:"../glossary#shadow-dom",children:"shadow DOM"})," for the component, which will be required when styling via CSS is desired."]}),"\n",(0,s.jsx)(r,{tag:t(7813).lG,table:"parts"}),"\n",(0,s.jsx)(o.h3,{id:"slots",children:"Slots"}),"\n",(0,s.jsxs)(o.p,{children:["Listed below are the slots available for utilization within the ",(0,s.jsx)(o.code,{children:"Button"})," component. These slots act as placeholders within the component that control where the children of a customized element should be inserted within the shadow tree."]}),"\n",(0,s.jsx)(r,{tag:t(7813).lG,table:"slots"}),"\n",(0,s.jsx)(o.h3,{id:"css-properties",children:"CSS properties"}),"\n",(0,s.jsx)(o.p,{children:"These are the various CSS properties that are used in the component, with a short description of their use."}),"\n",(0,s.jsx)(r,{tag:t(7813).lG,table:"properties"}),"\n",(0,s.jsx)(o.h3,{id:"reflected-attributes",children:"Reflected attributes"}),"\n",(0,s.jsx)(o.p,{children:"The reflected attributes of a component will be shown as attributes in the rendered HTML element for the component in the DOM. This means that styling can be applied using these attributes."}),"\n",(0,s.jsx)(r,{tag:t(7813).lG,table:"reflects"})]})}function h(e={}){const{wrapper:o}={...(0,i.R)(),...e.components};return o?(0,s.jsx)(o,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}function p(e,o){throw new Error("Expected "+(o?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},8453:(e,o,t)=>{t.d(o,{R:()=>a,x:()=>l});var n=t(6540);const s={},i=n.createContext(s);function a(e){const o=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function l(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),n.createElement(i.Provider,{value:o},e.children)}},7813:e=>{e.exports=JSON.parse('{"e7":"dwc-app-layout","$n":"dwc-button","Sc":"dwc-checkbox","D0":"dwc-field","Ap":"dwc-slider","qF":"dwc-listbox","tX":"dwc-choicebox","a3":"dwc-combobox","mD":"dwc-navigator","z2":"dwc-progressbar","a":"dwc-radio","TN":"dwc-tabbed-pane","_s":"dwc-drawer","lG":"dwc-dialog","In":"dwc-icon","O3":"dwc-splitter","az":"dwc-login","y$":"dwc-spinner","Rh":"dwc-loading","bJ":"dwc-loading","y8":"dwc-toast"}')}}]);