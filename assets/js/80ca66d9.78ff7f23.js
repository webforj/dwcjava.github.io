"use strict";(self.webpackChunkdwcj_documentation=self.webpackChunkdwcj_documentation||[]).push([[710],{1930:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>a,metadata:()=>n,toc:()=>c});const n=JSON.parse('{"id":"components/splitter","title":"Splitter","description":"The Splitter component, designed to divide and resize content within your app, encapsulates two resizable components: the master and the detail components. A divider separates these components, allowing users to dynamically adjust each component\'s size according to their preferences.","source":"@site/docs/components/splitter.md","sourceDirName":"components","slug":"/components/splitter","permalink":"/docs/components/splitter","draft":false,"unlisted":false,"editUrl":"https://github.com/webforj/webforj-docs/tree/website/docs/components/splitter.md","tags":[],"version":"current","frontMatter":{"title":"Splitter"},"sidebar":"documentationSidebar","previous":{"title":"Spinner","permalink":"/docs/components/spinner"},"next":{"title":"TabbedPane","permalink":"/docs/components/tabbedpane"}}');var i=s(4848),o=s(8453);const a={title:"Splitter"},r=void 0,l={},c=[{value:"Min and max size",id:"min-and-max-size",level:2},{value:"Setting sizes",id:"setting-sizes",level:3},{value:"Orientation",id:"orientation",level:2},{value:"Relative position",id:"relative-position",level:2},{value:"Nesting",id:"nesting",level:2},{value:"Auto save",id:"auto-save",level:2},{value:"Cleaning the state",id:"cleaning-the-state",level:3},{value:"Styling",id:"styling",level:2},{value:"Shadow parts",id:"shadow-parts",level:3},{value:"Slots",id:"slots",level:3},{value:"Reflected attributes",id:"reflected-attributes",level:3},{value:"Dependencies",id:"dependencies",level:3},{value:"Best practices",id:"best-practices",level:2}];function d(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,o.R)(),...e.components},{ComponentDemo:n,DocChip:a,JavadocLink:r,TableBuilder:l}=t;return n||h("ComponentDemo",!0),a||h("DocChip",!0),r||h("JavadocLink",!0),l||h("TableBuilder",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(a,{chip:"shadow"}),"\n",(0,i.jsx)(a,{chip:"name",label:"dwc-splitter"}),"\n",(0,i.jsx)(r,{type:"foundation",location:"com/webforj/component/layout/splitter/Splitter",top:"true"}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.code,{children:"Splitter"})," component, designed to divide and resize content within your app, encapsulates two resizable components: the master and the detail components. A divider separates these components, allowing users to dynamically adjust each component's size according to their preferences."]}),"\n",(0,i.jsx)(n,{path:"https://demo.webforj.com/webapp/controlsamples/splitterbasic?",javaE:"https://raw.githubusercontent.com/webforj/webforj-docs-samples/refs/heads/main/src/main/java/com/webforj/samples/views/splitter/SplitterBasicView.java",urls:["https://raw.githubusercontent.com/webforj/ControlSamples/main/src/main/java/layout_demos/splitter/SplitterBox.java"],height:"300px"}),"\n",(0,i.jsx)(t.h2,{id:"min-and-max-size",children:"Min and max size"}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.code,{children:"Splitter"})," component provides methods to set minimum and maximum sizes for its panels, allowing you to control the resizing behavior of the components within the ",(0,i.jsx)(t.code,{children:"Splitter"}),". When users attempt to resize panels beyond the specified min or max sizes, the splitter component enforces these constraints, ensuring that panels remain within the defined boundaries."]}),"\n",(0,i.jsx)(t.h3,{id:"setting-sizes",children:"Setting sizes"}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.code,{children:"setMasterMinSize(String masterMinSize)"})," method specifies the minimum size for the master panel of the splitter. Likewise, the ",(0,i.jsx)(t.code,{children:"setMasterMaxSize(String masterMaxSize)"})," method specifies the maximum size for the master panel."]}),"\n",(0,i.jsx)(t.p,{children:"You can specify sizes using any valid CSS units, as shown below:"}),"\n",(0,i.jsx)(n,{path:"https://demo.webforj.com/webapp/controlsamples/splitterminmax?",javaE:"https://raw.githubusercontent.com/webforj/webforj-docs-samples/refs/heads/main/src/main/java/com/webforj/samples/views/splitter/SplitterMinMaxView.java",urls:["https://raw.githubusercontent.com/webforj/ControlSamples/main/src/main/java/layout_demos/splitter/SplitterBox.java"],height:"300px"}),"\n",(0,i.jsx)(t.h2,{id:"orientation",children:"Orientation"}),"\n",(0,i.jsxs)(t.p,{children:["You can configure orientation in the ",(0,i.jsx)(t.code,{children:"Splitter"})," component, allowing you to create layouts tailored to specific design requirements. By specifying the orientation, the component arranges panels horizontally or vertically, providing versatility in layout design."]}),"\n",(0,i.jsxs)(t.p,{children:["To configure the orientation, use the supported orientations Enum to specify whether the ",(0,i.jsx)(t.code,{children:"Splitter"})," should render horizontally or vertically:"]}),"\n",(0,i.jsx)(n,{path:"https://demo.webforj.com/webapp/controlsamples/splitterorientation?",javaE:"https://raw.githubusercontent.com/webforj/webforj-docs-samples/refs/heads/main/src/main/java/com/webforj/samples/views/splitter/SplitterOrientationView.java",urls:["https://raw.githubusercontent.com/webforj/ControlSamples/main/src/main/java/layout_demos/splitter/SplitterBox.java"],height:"300px"}),"\n",(0,i.jsx)(t.h2,{id:"relative-position",children:"Relative position"}),"\n",(0,i.jsxs)(t.p,{children:["To set the initial position of the divider bar in the ",(0,i.jsx)(t.code,{children:"Splitter"})," component, use ",(0,i.jsx)(t.code,{children:"setPositionRelative"}),". This method takes a numeric value from ",(0,i.jsx)(t.code,{children:"0"})," to ",(0,i.jsx)(t.code,{children:"100"})," representing the percentage of the given space in the ",(0,i.jsx)(t.code,{children:"Splitter"}),", and displays the divider at the given percentage of total width:"]}),"\n",(0,i.jsx)(n,{path:"https://demo.webforj.com/webapp/controlsamples/splitterposition?",javaE:"https://raw.githubusercontent.com/webforj/webforj-docs-samples/refs/heads/main/src/main/java/com/webforj/samples/views/splitter/SplitterPositionView.java",urls:["https://raw.githubusercontent.com/webforj/ControlSamples/main/src/main/java/layout_demos/splitter/SplitterBox.java"],height:"300px"}),"\n",(0,i.jsx)(t.h2,{id:"nesting",children:"Nesting"}),"\n",(0,i.jsx)(t.p,{children:"Splitter nesting allows you to create complex layouts with levels of resizable panels. It enables the creation of sophisticated user interfaces with granular control over the arrangement and resizing of content."}),"\n",(0,i.jsxs)(t.p,{children:["To nest Splitter components, instantiate new ",(0,i.jsx)(t.code,{children:"Splitter"})," instances and add them as children to existing ",(0,i.jsx)(t.code,{children:"Splitter"})," components. This hierarchical structure allows for the creation of multi-level layouts with flexible resizing capabilities. The program below demonstrates this:"]}),"\n",(0,i.jsx)(n,{path:"https://demo.webforj.com/webapp/controlsamples/splitternested?",javaE:"https://raw.githubusercontent.com/webforj/webforj-docs-samples/refs/heads/main/src/main/java/com/webforj/samples/views/splitter/SplitterNestedView.java",urls:["https://raw.githubusercontent.com/webforj/ControlSamples/main/src/main/java/layout_demos/splitter/SplitterBox.java"],height:"300px"}),"\n",(0,i.jsx)(t.h2,{id:"auto-save",children:"Auto save"}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.code,{children:"Splitter"})," component includes an AutoSave option, which saves the state of panel sizes to local storage to keep dimensions consistent between reloads."]}),"\n",(0,i.jsxs)(t.p,{children:["When you set the auto-save configuration, the ",(0,i.jsx)(t.code,{children:"Splitter"})," component automatically stores the state of panel sizes in the web browser's local storage. This ensures that the sizes users choose for panels persist across page reloads or browser sessions, reducing the need for manual adjustments."]}),"\n",(0,i.jsx)(t.h3,{id:"cleaning-the-state",children:"Cleaning the state"}),"\n",(0,i.jsxs)(t.p,{children:["To programmatically revert the ",(0,i.jsx)(t.code,{children:"Splitter"})," back to default settings and dimensions, call the ",(0,i.jsx)(t.code,{children:"cleanState()"})," method to remove any saved state data related to the ",(0,i.jsx)(t.code,{children:"Splitter"})," component from the local storage of the web browser."]}),"\n",(0,i.jsx)(n,{path:"https://demo.webforj.com/webapp/controlsamples/splitterautosave?",javaE:"https://raw.githubusercontent.com/webforj/webforj-docs-samples/refs/heads/main/src/main/java/com/webforj/samples/views/splitter/SplitterAutoSaveView.java",urls:["https://raw.githubusercontent.com/webforj/ControlSamples/main/src/main/java/layout_demos/splitter/SplitterBox.java"],height:"400px"}),"\n",(0,i.jsxs)(t.p,{children:["In the preceding demo, each Splitter instance activates the AutoSave feature by calling the ",(0,i.jsx)(t.code,{children:"setAutosave"})," method. This ensures that panel sizes are automatically saved to local storage. Thus, when reloading the browser, the sizes of these splitters remain the same."]}),"\n",(0,i.jsxs)(t.p,{children:['Clicking the "Clear State" button calls the ',(0,i.jsx)(t.code,{children:"cleanState()"})," method and refreshes the browser window to display the original dimensions."]}),"\n",(0,i.jsx)(t.h2,{id:"styling",children:"Styling"}),"\n",(0,i.jsx)(t.h3,{id:"shadow-parts",children:"Shadow parts"}),"\n",(0,i.jsxs)(t.p,{children:["These are the various parts of the ",(0,i.jsx)(t.a,{href:"../glossary#shadow-dom",children:"shadow DOM"})," for the component, necessary for styling via CSS."]}),"\n",(0,i.jsx)(l,{tag:s(7813).O3,table:"parts"}),"\n",(0,i.jsx)(t.h3,{id:"slots",children:"Slots"}),"\n",(0,i.jsxs)(t.p,{children:["These are the available slots within the ",(0,i.jsx)(t.code,{children:"Splitter"})," component. These slots serve as placeholders, guiding the insertion of customized element children into the shadow tree."]}),"\n",(0,i.jsx)(l,{tag:s(7813).O3,table:"slots"}),"\n",(0,i.jsx)(t.h3,{id:"reflected-attributes",children:"Reflected attributes"}),"\n",(0,i.jsx)(t.p,{children:"The component's reflected attributes appear as attributes in the rendered HTML element within the DOM, allowing for styling based on these attributes."}),"\n",(0,i.jsx)(l,{tag:s(7813).O3,table:"reflects",exclusions:s(1084).U.V}),"\n",(0,i.jsx)(t.h3,{id:"dependencies",children:"Dependencies"}),"\n",(0,i.jsx)(t.p,{children:"This component relies on the following components - see the related article for more detailed styling information:"}),"\n",(0,i.jsx)(l,{tag:"dwc-splitter",table:"dependencies"}),"\n",(0,i.jsx)(t.h2,{id:"best-practices",children:"Best practices"}),"\n",(0,i.jsxs)(t.p,{children:["To ensure an optimal user experience when using the ",(0,i.jsx)(t.code,{children:"Splitter"})," component, consider the following best practices:"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Adjust Based on Content"}),": When deciding on the orientation and initial sizes of panels, consider the content's priority. For example, in a layout with a navigation sidebar and a main content area, the sidebar should typically remain narrower with a set min size for clear navigation."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Strategic Nesting"}),": Nesting splitters can create versatile layouts but can complicate the UI and impact performance. Plan your nested layouts to ensure they're intuitive and enhance user experience."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Remember User Preferences"}),": Use the AutoSave feature to remember user adjustments across sessions, enhancing the user experience. Provide an option to allow users to reset to default settings."]}),"\n"]}),"\n"]})]})}function p(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}function h(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},8453:(e,t,s)=>{s.d(t,{R:()=>a,x:()=>r});var n=s(6540);const i={},o=n.createContext(i);function a(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),n.createElement(o.Provider,{value:t},e.children)}},7813:e=>{e.exports=JSON.parse('{"e7":"dwc-app-layout","$n":"dwc-button","Sc":"dwc-checkbox","D0":"dwc-field","Ap":"dwc-slider","qF":"dwc-listbox","tX":"dwc-choicebox","a3":"dwc-combobox","mD":"dwc-navigator","z2":"dwc-progressbar","a":"dwc-radio","TN":"dwc-tabbed-pane","_s":"dwc-drawer","lG":"dwc-dialog","In":"dwc-icon","O3":"dwc-splitter","az":"dwc-login","y$":"dwc-spinner","Rh":"dwc-loading","bJ":"dwc-loading","y8":"dwc-toast"}')},1084:e=>{e.exports=JSON.parse('{"x":{"rT":["dropdown","dropdown-icon","dropdown-separator"],"Q0":[],"qo":["--dwc-button-selected-background","--dwc-button-selected-color","--dwc-button-separator-color"],"Vt":["toggleable","selected"]},"U":{"V":["theme"]}}')}}]);