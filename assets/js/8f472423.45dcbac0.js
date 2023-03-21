"use strict";(self.webpackChunkdwcj_documentation=self.webpackChunkdwcj_documentation||[]).push([[7701],{5162:(e,n,t)=>{t.d(n,{Z:()=>i});var o=t(7294),a=t(6010);const l="tabItem_Ymn6";function i(e){let{children:n,hidden:t,className:i}=e;return o.createElement("div",{role:"tabpanel",className:(0,a.Z)(l,i),hidden:t},n)}},4866:(e,n,t)=>{t.d(n,{Z:()=>C});var o=t(7462),a=t(7294),l=t(6010),i=t(2466),r=t(6775),s=t(1980),d=t(7392),c=t(12);function u(e){return function(e){return a.Children.map(e,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:n,label:t,attributes:o,default:a}}=e;return{value:n,label:t,attributes:o,default:a}}))}function p(e){const{values:n,children:t}=e;return(0,a.useMemo)((()=>{const e=n??u(t);return function(e){const n=(0,d.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function g(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function h(e){let{queryString:n=!1,groupId:t}=e;const o=(0,r.k6)(),l=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,s._X)(l),(0,a.useCallback)((e=>{if(!l)return;const n=new URLSearchParams(o.location.search);n.set(l,e),o.replace({...o.location,search:n.toString()})}),[l,o])]}function m(e){const{defaultValue:n,queryString:t=!1,groupId:o}=e,l=p(e),[i,r]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!g({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const o=t.find((e=>e.default))??t[0];if(!o)throw new Error("Unexpected error: 0 tabValues");return o.value}({defaultValue:n,tabValues:l}))),[s,d]=h({queryString:t,groupId:o}),[u,m]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[o,l]=(0,c.Nk)(t);return[o,(0,a.useCallback)((e=>{t&&l.set(e)}),[t,l])]}({groupId:o}),b=(()=>{const e=s??u;return g({value:e,tabValues:l})?e:null})();(0,a.useLayoutEffect)((()=>{b&&r(b)}),[b]);return{selectedValue:i,selectValue:(0,a.useCallback)((e=>{if(!g({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);r(e),d(e),m(e)}),[d,m,l]),tabValues:l}}var b=t(2389);const w="tabList__CuJ",v="tabItem_LNqP";function f(e){let{className:n,block:t,selectedValue:r,selectValue:s,tabValues:d}=e;const c=[],{blockElementScrollPositionUntilNextRender:u}=(0,i.o5)(),p=e=>{const n=e.currentTarget,t=c.indexOf(n),o=d[t].value;o!==r&&(u(n),s(o))},g=e=>{var n;let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}null==(n=t)||n.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":t},n)},d.map((e=>{let{value:n,label:t,attributes:i}=e;return a.createElement("li",(0,o.Z)({role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,key:n,ref:e=>c.push(e),onKeyDown:g,onClick:p},i,{className:(0,l.Z)("tabs__item",v,null==i?void 0:i.className,{"tabs__item--active":r===n})}),t??n)})))}function k(e){let{lazy:n,children:t,selectedValue:o}=e;if(t=Array.isArray(t)?t:[t],n){const e=t.find((e=>e.props.value===o));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},t.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==o}))))}function y(e){const n=m(e);return a.createElement("div",{className:(0,l.Z)("tabs-container",w)},a.createElement(f,(0,o.Z)({},e,n)),a.createElement(k,(0,o.Z)({},e,n)))}function C(e){const n=(0,b.Z)();return a.createElement(y,(0,o.Z)({key:String(n)},e))}},9469:(e,n,t)=>{t.d(n,{Z:()=>d});var o=t(7294),a=t(2863),l=t(4866),i=t(5162),r=t(4673),s=t(8488);function d(e){let{path:n,javaC:t,javaE:d,cssURL:c,javaHighlight:u,height:p}=e;const[g,h]=(0,o.useState)(""),[m,b]=(0,o.useState)(""),[w,v]=(0,o.useState)(""),[f,k]=(0,o.useState)(!0),y=a.iv`
		display: flex;
    flex-direction: column;
    padding: 10px 15px 0 15px;
    background-color: var(--code-display-color);
		width: 100%;
    margin-bottom: 16px;
    
    `,C=a.iv`
    min-height: 100px;
    height: 100%;
    height: ${p};
  `,x=a.iv`
    border: none;
    box-shadow: none;
    background-color: var(--code-display-color);
    margin-bottom: 0px;
    padding: 10px;

    summary{
      display: flex;
      width: 100%;
      justify-content: center;
      margin: 0;
      font-weight: bold;
      ::before{
        left: auto;
        margin-left: -100px;
      }
    }

  `;return d&&fetch(d).then((e=>e.text())).then((e=>{b(e)})),t&&fetch(t).then((e=>e.text())).then((e=>{h(e)})),c&&fetch(c).then((e=>e.text())).then((e=>{v(e)})),(0,a.tZ)("div",{css:y},(0,a.tZ)("iframe",{loading:"lazy",src:n,css:C}),(0,a.tZ)(r.Z,{css:x,summary:(0,a.tZ)("summary",null,"Show Code")},c?(0,a.tZ)(l.Z,null,(0,a.tZ)(i.Z,{value:"Java",label:"Java",default:!0},(0,a.tZ)(s.Z,{className:"codeDemoBlock",language:"java",showLineNumbers:!0,metastring:u},f?m:g)),(0,a.tZ)(i.Z,{value:"CSS",label:"CSS"},(0,a.tZ)(s.Z,{className:"codeDemoBlock",language:"css",showLineNumbers:!0},w))):(0,a.tZ)(l.Z,null,(0,a.tZ)(i.Z,{value:"Java",label:"Java",default:!0},(0,a.tZ)(s.Z,{className:"codeDemoBlock",language:"java",showLineNumbers:!0,metastring:u},f?m:g)))))}},1415:(e,n,t)=>{t.d(n,{Z:()=>l});var o=t(7294),a=t(8397);function l(e){return o.createElement(o.Fragment,null,o.createElement(a.Z,e))}},1694:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>r,toc:()=>d});var o=t(7462),a=(t(7294),t(3905));t(9469);const l={sidebar_position:25,title:"Dialog"},i=void 0,r={unversionedId:"controls/dialog",id:"controls/dialog",title:"Dialog",description:"API:&nbsp;",source:"@site/docs/controls/dialog.md",sourceDirName:"controls",slug:"/controls/dialog",permalink:"/docs/controls/dialog",draft:!1,tags:[],version:"current",sidebarPosition:25,frontMatter:{sidebar_position:25,title:"Dialog"},sidebar:"tutorialSidebar",previous:{title:"Combo Box",permalink:"/docs/controls/combo-box"},next:{title:"Label",permalink:"/docs/controls/label"}},s={},d=[{value:"Backdrop and Blur",id:"backdrop-and-blur",level:3},{value:"Closing the Dialog",id:"closing-the-dialog",level:3},{value:"Auto-Focus",id:"auto-focus",level:3},{value:"Draggable",id:"draggable",level:2},{value:"Snap to Edge",id:"snap-to-edge",level:3},{value:"Positioning",id:"positioning",level:2},{value:"Vertical Alignment",id:"vertical-alignment",level:3},{value:"Full Screen and Breakpoints",id:"full-screen-and-breakpoints",level:3}],c={toc:d};function u(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,o.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("div",{style:{width:"100%",display:"flex",justifyContent:"flex-end"}},(0,a.kt)("p",{style:{color:"gray"}},"API:\xa0"),(0,a.kt)("b",null,(0,a.kt)("a",{href:"https://javadoc.io/static/org.dwcj/dwcj-engine/0.15.0/org/dwcj/controls/dialog/Dialog.html",style:{justifySelf:"flex-end"}}," Java "))),(0,a.kt)("p",null,"The DWCJ's dialog component is built to allow a developer to quickly and easily display a dialog on their application, for instances such as a login menu or information box."),(0,a.kt)("p",null,"The component is built with three sections, each of which are ",(0,a.kt)("inlineCode",{parentName:"p"},"Div")," components: the header, the content, and the footer."),(0,a.kt)("p",null,"To show the dialog, call the ",(0,a.kt)("inlineCode",{parentName:"p"},"show()")," method on the object itself. This "),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Show Code"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'  import org.dwcj.App;\n  import org.dwcj.controls.dialog.Dialog;\n  import org.dwcj.controls.label.Label;\n  import org.dwcj.controls.panels.AppPanel;\n  import org.dwcj.exceptions.DwcException;\n\n  public class DialogSections extends App {\n  @Override\n  public void run() throws DwcException {\n    AppPanel p = new AppPanel();\n    Dialog dialog = new Dialog();\n    p.add(dialog);\n\n    dialog.getHeader().add(new Label("Header"));\n    dialog.getContent().add(new Label("Content"));\n    dialog.getFooter().add(new Label("Footer"));\n\n    dialog.setCloseable(false);\n    dialog.show();\n  }\n}\n'))),(0,a.kt)("h3",{id:"backdrop-and-blur"},"Backdrop and Blur"),(0,a.kt)("p",null,"By enabling the backdrop attribute of the DWCJ's dialog component, a backdrop will be displayed behind the dialog. Additionally, when enabled, the dialog's blurred attribute will blur the backdrop of the dialog."),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Show Code"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'import org.dwcj.App;\nimport org.dwcj.annotations.InlineStyleSheet;\nimport org.dwcj.controls.button.Button;\nimport org.dwcj.controls.button.events.ButtonClickEvent;\nimport org.dwcj.controls.dialog.Dialog;\nimport org.dwcj.controls.label.Label;\nimport org.dwcj.controls.panels.AppPanel;\nimport org.dwcj.exceptions.DwcException;\n\n@InlineStyleSheet(id = "login-form", value = "" +\n  ".loginForm {" +\n  "   background-color: #263238;" +\n  "   background-image: url(https://images.pling.com/img/00/00/59/97/06/1588511/1c58fba17fc4c48cd52cf17dd3f36556396e73e34a3d37e5aec6098ccdb01f3d1867.jpg);"\n  +\n  "   background-size: 100% 100%;" +\n  "   background-repeat: no-repeat;" +\n  "}")\npublic class DialogBackdropBlur extends App {\n  Dialog dialog;\n\n  @Override\n  public void run() throws DwcException {\n    AppPanel p = new AppPanel();\n    dialog = new Dialog();\n    p.add(dialog);\n    dialog.addClassName("loginForm");\n\n    dialog.getHeader().add(new Label("Header"));\n    dialog.getContent().add(new Button("Toggle Background Blur")\n      .onClick(this::buttonClick))\n      .setStyle("display","flex")\n      .setStyle("justify-content", "center");\n    dialog.getFooter().add(new Label("Footer"));\n    \n    dialog.setCloseable(false);\n    dialog.show();\n  }\n\n  private void buttonClick(ButtonClickEvent ev) {\n    dialog.setBlurred(!dialog.isBlurred());\n  }\n}\n'))),(0,a.kt)("h3",{id:"closing-the-dialog"},"Closing the Dialog"),(0,a.kt)("p",null,"The dialog supports multiple cancellation methods for closure of the control: hitting the ",(0,a.kt)("inlineCode",{parentName:"p"},"ESC")," key, clicking outside of the dialog, or using the ",(0,a.kt)("inlineCode",{parentName:"p"},"hide()")," method. The first two properties are customizable via their respective methods:\n",(0,a.kt)("inlineCode",{parentName:"p"},"setCancelOnEscKey()")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"setCancelOnOutsideClick()"),". The ",(0,a.kt)("inlineCode",{parentName:"p"},"hide()")," method allows for the dialog to be closed programmatically, such as by clicking a button on the dialog, for example after saving data. A method to quickly enable or disable users' ability to close the dialog, ",(0,a.kt)("inlineCode",{parentName:"p"},"setClosable()")," will prevent or allow both escape and click closure of the dialog."),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Show Code"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'import org.dwcj.App;\nimport org.dwcj.controls.button.Button;\nimport org.dwcj.controls.button.events.ButtonClickEvent;\nimport org.dwcj.controls.dialog.Dialog;\nimport org.dwcj.controls.label.Label;\nimport org.dwcj.controls.panels.AppPanel;\nimport org.dwcj.exceptions.DwcException;\n\npublic class DialogClose extends App {\n\n  Dialog dialog;\n\n  @Override\n  public void run() throws DwcException {\n    AppPanel p = new AppPanel();\n    dialog = new Dialog();\n    p.add(dialog,\n      new Button("Show Dialog")\n        .onClick(this::openDialog)\n        .setStyle("margin", "50px"));\n\n    dialog.getHeader().add(new Label("Header"));\n    dialog.getContent().add(new Button("Close Dialog").onClick(this::closeDialog));\n    dialog.getFooter().add(new Label("Footer"));\n    dialog.setCancelOnEscKey(true);\n    dialog.show();\n  }\n\n  private void closeDialog(ButtonClickEvent ev) {\n    dialog.hide();\n  }\n\n  private void openDialog(ButtonClickEvent ev) {\n    dialog.show();\n  }\n}\n'))),(0,a.kt)("h3",{id:"auto-focus"},"Auto-Focus"),(0,a.kt)("p",null,"When enabled, auto-focus will automatically give focus to the first element within the dialog that can be focused. This is useful in helping to direct the attention of users, and is customizable via the ",(0,a.kt)("inlineCode",{parentName:"p"},"setAutoFocus()")," method."),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Show Code"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'import org.dwcj.App;\nimport org.dwcj.controls.dialog.Dialog;\nimport org.dwcj.controls.label.Label;\nimport org.dwcj.controls.panels.AppPanel;\nimport org.dwcj.controls.textbox.TextBox;\nimport org.dwcj.exceptions.DwcException;\n\npublic class DialogAutoFocus extends App {\n  @Override\n  public void run() throws DwcException {\n    AppPanel p = new AppPanel();\n    Dialog dialog = new Dialog();\n    p.add(dialog);\n\n    dialog.getHeader().add(new Label("Auto Focus"));\n    dialog.getContent().add(new TextBox().setAttribute("label", "This Box is Auto Focused"));\n    \n    dialog.show();\n    dialog.setAutoFocus(true);\n  }\n}\n'))),(0,a.kt)("h2",{id:"draggable"},"Draggable"),(0,a.kt)("p",null,"The dialog has built in functionality to be draggable, allowing the user to relocate the dialog window by clicking and dragging. The position of the dialog can be manipulated from any of the fields within it: the header, content or footer."),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Show Code"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'import org.dwcj.App;\nimport org.dwcj.controls.dialog.Dialog;\nimport org.dwcj.controls.label.Label;\nimport org.dwcj.controls.panels.AppPanel;\nimport org.dwcj.exceptions.DwcException;\n\npublic class DialogDraggable extends App {\n  @Override\n  public void run() throws DwcException {\n    AppPanel p = new AppPanel();\n    Dialog dialog = new Dialog();\n    p.add(dialog);\n\n    dialog.getHeader().add(new Label("Header"));\n    dialog.getContent().add(new Label("This dialog will snap to the sides when dragged within 100px of the edge of the display"));\n    dialog.getFooter().add(new Label("Footer"));\n    dialog.show();\n\n    dialog.setSnapToEdge(true);\n    dialog.setSnapThreshold(100);\n  }\n}\n'))),(0,a.kt)("h3",{id:"snap-to-edge"},"Snap to Edge"),(0,a.kt)("p",null,"It is also possible to calibrate this behavior to snap to the edge of the screen, meaning the dialog will automatically align itself with the edge of the display when released from its drag and drop date. Snapping can be changed via the ",(0,a.kt)("inlineCode",{parentName:"p"},"setSnapToEdge()")," method. The ",(0,a.kt)("inlineCode",{parentName:"p"},"setSnapThreshold()")," takes a number of pixels, which will set how far the dialog should be from the sides of the screen before it will automatically snap to the edges.  "),(0,a.kt)("h2",{id:"positioning"},"Positioning"),(0,a.kt)("p",null,"The dialog's position can be manipulated using the built-in ",(0,a.kt)("inlineCode",{parentName:"p"},"setPosx()")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"setPosy()")," methods. These methods take a string argument which can represent any applicable CSS unit of length, such as pixels or view height/width. A list of these measurements ",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Values_and_units#numbers_lengths_and_percentages"},"can be found at this link"),"."),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Show Code"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'import org.dwcj.App;\nimport org.dwcj.controls.button.Button;\nimport org.dwcj.controls.button.events.ButtonClickEvent;\nimport org.dwcj.controls.dialog.Dialog;\nimport org.dwcj.controls.label.Label;\nimport org.dwcj.controls.numericbox.NumericBox;\nimport org.dwcj.controls.panels.AppPanel;\nimport org.dwcj.exceptions.DwcException;\n\npublic class DialogPositioning extends App {\n\n  NumericBox xPos, yPos;\n  Dialog dialog;\n\n  @Override\n  public void run() throws DwcException {\n    AppPanel p = new AppPanel();\n    dialog = new Dialog();\n    xPos = new NumericBox();\n    yPos = new NumericBox();\n    p.add(dialog);\n\n    dialog.getHeader().add(new Label("Header"));\n    dialog.getContent()\n        .add(new Label("X Pixels:"), xPos, new Label("Y Pixels:"), yPos, new Button("Set Dialog Position").onClick(this::setPosition))\n        .setStyle("display", "flex")\n        .setStyle("justify-content", "space-around");\n\n    dialog.setAutoFocus(true);\n    dialog.show();\n    dialog.setCloseable(false);\n  }\n\n  private void setPosition(ButtonClickEvent ev) {\n    dialog.setPosx(xPos.getValue().toString() + "px");\n    dialog.setPosy(yPos.getValue().toString() + "px");\n  }\n}\n'))),(0,a.kt)("h3",{id:"vertical-alignment"},"Vertical Alignment"),(0,a.kt)("p",null,"In addition to manual assignment of a dialog's X and Y position, it is possible to use the dialog's built-in enum class to align the dialog. There are three possible values, ",(0,a.kt)("inlineCode",{parentName:"p"},"TOP"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"CENTER")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"BOTTOM"),", each of which can be used with the ",(0,a.kt)("inlineCode",{parentName:"p"},"setAlignment()")," method. "),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Show Code"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'import org.dwcj.App;\nimport org.dwcj.controls.button.Button;\nimport org.dwcj.controls.button.events.ButtonClickEvent;\nimport org.dwcj.controls.dialog.Dialog;\nimport org.dwcj.controls.label.Label;\nimport org.dwcj.controls.panels.AppPanel;\nimport org.dwcj.exceptions.DwcException;\n\npublic class DialogAlignments extends App {\n  Button alignTop;\n  Button alignMid;\n  Button alignBtm;\n  Dialog dialog;\n\n  @Override\n  public void run() throws DwcException {\n    AppPanel p = new AppPanel();\n    dialog = new Dialog();\n    p.add(dialog);\n\n    alignTop = new Button("Align to Top").onClick(this::topAlign);\n    alignMid = new Button("Align to Center").onClick(this::midAlign);\n    alignBtm = new Button("Align to Bottom").onClick(this::btmAlign);\n\n    dialog.getHeader().add(new Label("Alignments"));\n    dialog.getContent().add(alignTop, alignMid, alignBtm)\n      .setStyle("display","flex")\n      .setStyle("justify-content", "space-around");\n\n    dialog.show();\n    dialog.setCloseable(false);\n  }\n\n  private void topAlign(ButtonClickEvent ev){\n    dialog.setAlignment(Dialog.Alignment.TOP);\n  }\n  private void midAlign(ButtonClickEvent ev){\n    dialog.setAlignment(Dialog.Alignment.CENTER);\n  }\n  private void btmAlign(ButtonClickEvent ev){\n    dialog.setAlignment(Dialog.Alignment.BOTTOM);\n  }\n}\n'))),(0,a.kt)("h3",{id:"full-screen-and-breakpoints"},"Full Screen and Breakpoints"),(0,a.kt)("p",null,"The dialog can be set to enter full screen mode. When full screen is enabled, the dialog cannot be moved or positioned. This mode can be manipulated with the breakpoint attribute of the dialog. The breakpoint is a media query which controls when the dialog will automatically flip to full screen mode. When the query matches, the dialog changes to full screen - otherwise it is positioned."))}u.isMDXComponent=!0}}]);