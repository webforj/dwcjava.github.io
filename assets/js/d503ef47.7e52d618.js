"use strict";(self.webpackChunkdwcj_documentation=self.webpackChunkdwcj_documentation||[]).push([[7947],{69872:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>d,default:()=>h,frontMatter:()=>l,metadata:()=>r,toc:()=>c});const r=JSON.parse('{"id":"data-binding/validation/reporters","title":"Reporters","description":"Validation reporters are used for providing feedback about the validation process to the user interface. This feature is essential for informing users about the results of their input validation, particularly in complex forms or data-intensive applications.","source":"@site/docs/data-binding/validation/reporters.md","sourceDirName":"data-binding/validation","slug":"/data-binding/validation/reporters","permalink":"/docs/data-binding/validation/reporters","draft":false,"unlisted":false,"editUrl":"https://github.com/webforj/webforj-docs/tree/website/docs/data-binding/validation/reporters.md","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"sidebar_position":3,"title":"Reporters"},"sidebar":"documentationSidebar","previous":{"title":"Validators","permalink":"/docs/data-binding/validation/validators"},"next":{"title":"Context Results","permalink":"/docs/data-binding/validation/context-results"}}');var a=n(74848),i=n(28453),s=n(11470),o=n(19365);const l={sidebar_position:3,title:"Reporters"},d=void 0,u={},c=[{value:"What&#39;s a validation reporter?",id:"whats-a-validation-reporter",level:2},{value:"Configuring validation reporters",id:"configuring-validation-reporters",level:2}];function p(e){const t={admonition:"admonition",code:"code",h2:"h2",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.p,{children:"Validation reporters are used for providing feedback about the validation process to the user interface. This feature is essential for informing users about the results of their input validation, particularly in complex forms or data-intensive applications."}),"\n",(0,a.jsx)(t.h2,{id:"whats-a-validation-reporter",children:"What's a validation reporter?"}),"\n",(0,a.jsx)(t.p,{children:"A validation reporter is a component that processes and displays the outcomes of validations to users. It acts as a bridge between the validation logic and the user interface, ensuring that validation results are communicated effectively and clearly."}),"\n",(0,a.jsx)(t.admonition,{title:"Core Components Default Reporter",type:"tip",children:(0,a.jsxs)(t.p,{children:["webforJ includes the ",(0,a.jsx)(t.code,{children:"DefaultBindingReporter"}),", a default bindings reporter designed to work seamlessly with all core webforJ components. This built-in reporter automatically displays validation errors, eliminating the need for custom implementation in many cases. Depending on the component's configuration, the ",(0,a.jsx)(t.code,{children:"DefaultBindingReporter"})," displays validation errors directly as a popover or inline, right beneath the component. This feature simplifies the error reporting process significantly, ensuring clear and direct communication of validation errors, and enhances the user experience by providing immediate, context-sensitive feedback on input validation."]})}),"\n",(0,a.jsx)(t.h2,{id:"configuring-validation-reporters",children:"Configuring validation reporters"}),"\n",(0,a.jsx)(t.p,{children:"You can configure validation reporters within the binding context to customize how messages are presented. Typically, you would implement a validation reporter to aggregate validation results and then display them in a user-friendly manner, such as highlighting incorrect fields, displaying error messages, or updating status indicators."}),"\n",(0,a.jsx)(t.p,{children:"Here\u2019s an example of how to set up a validation reporter for a field"}),"\n",(0,a.jsxs)(s.A,{children:[(0,a.jsx)(o.A,{value:"UserRegistration",label:"UserRegistration.java",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-java",metastring:"showLineNumbers",children:'@InlineStyleSheet("context://styles.css")\npublic class UserRegistration extends App {\n  Div errors = new Div();\n  TextField emailField = new TextField("Email Address");\n\n  FlexLayout layout = FlexLayout.create(emailField, errors).vertical().build();\n\n  @Override\n  public void run() throws WebforjException {\n    errors.addClassName("error");\n    errors.setVisible(false);\n\n    layout.addClassName("form");\n\n    BindingContext<User> context = new BindingContext<>(User.class);\n    context.bind(emailField, "email")\n        .useValidator(\n            Validator.from(new EmailValidator(), "Custom message for invalid email address"))\n        .useReporter((validationResult, binding) -> {\n          errors.setVisible(!validationResult.isValid());\n\n          if (!validationResult.isValid()) {\n            errors.setText(validationResult.getMessages().stream().findFirst().orElse(""));\n          }\n        })\n        .add();\n\n    Frame frame = new Frame();\n    frame.add(layout);\n  }\n}\n'})})}),(0,a.jsx)(o.A,{value:"User",label:"User.java",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-java",metastring:"showLineNumbers",children:"public class User {\n  private String name;\n  private String email;\n  private String password;\n\n  public String getName() {\n    return name;\n  }\n\n  public void setName(String name) {\n    this.name = name;\n  }\n\n  public String getEmail() {\n    return email;\n  }\n\n  public void setEmail(String email) {\n    this.email = email;\n  }\n\n  public String getPassword() {\n    return password;\n  }\n  \n  public void setPassword(String password) {\n    this.password = password;\n  }\n}\n"})})}),(0,a.jsx)(o.A,{value:"styles",label:"styles.css",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-css",metastring:"showLineNumbers",children:".error {\n  border: 1px solid #f1aeb5;\n  border-radius: 5px;\n  background-color: #f8d7da;\n  color: #58151c;\n  padding: 5px;\n}\n\n.form {\n  margin: 20px auto;\n  max-width: 400px;\n}\n"})})})]}),"\n",(0,a.jsxs)(t.p,{children:["In the above code, the email binding incorporates a custom reporter that directly displays validation messages beneath the input field. This setup utilizes the ",(0,a.jsx)(t.code,{children:"useReporter"})," method, which configures how the binding handles and presents validation results. This method effectively links the validation logic to the user interface, ensuring that any validation issues are immediately visible to the user, enhancing the form's interactivity and user experience."]})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},19365:(e,t,n)=>{n.d(t,{A:()=>s});n(96540);var r=n(18215);const a={tabItem:"tabItem_Ymn6"};var i=n(74848);function s(e){let{children:t,hidden:n,className:s}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,r.A)(a.tabItem,s),hidden:n,children:t})}},11470:(e,t,n)=>{n.d(t,{A:()=>j});var r=n(96540),a=n(18215),i=n(23104),s=n(56347),o=n(205),l=n(57485),d=n(31682),u=n(70679);function c(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return c(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}(n);return function(e){const t=(0,d.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function h(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const a=(0,s.W6)(),i=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l.aZ)(i),(0,r.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(a.location.search);t.set(i,e),a.replace({...a.location,search:t.toString()})}),[i,a])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,i=p(e),[s,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:i}))),[d,c]=m({queryString:n,groupId:a}),[f,b]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,i]=(0,u.Dv)(n);return[a,(0,r.useCallback)((e=>{n&&i.set(e)}),[n,i])]}({groupId:a}),v=(()=>{const e=d??f;return h({value:e,tabValues:i})?e:null})();(0,o.A)((()=>{v&&l(v)}),[v]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!h({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);l(e),c(e),b(e)}),[c,b,i]),tabValues:i}}var b=n(92303);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=n(74848);function x(e){let{className:t,block:n,selectedValue:r,selectValue:s,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:d}=(0,i.a_)(),u=e=>{const t=e.currentTarget,n=l.indexOf(t),a=o[n].value;a!==r&&(d(t),s(a))},c=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;t=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;t=l[n]??l[l.length-1];break}}t?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":n},t),children:o.map((e=>{let{value:t,label:n,attributes:i}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>l.push(e),onKeyDown:c,onClick:u,...i,className:(0,a.A)("tabs__item",v.tabItem,i?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function y(e){let{lazy:t,children:n,selectedValue:i}=e;const s=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===i));return e?(0,r.cloneElement)(e,{className:(0,a.A)("margin-top--md",e.props.className)}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==i})))})}function w(e){const t=f(e);return(0,g.jsxs)("div",{className:(0,a.A)("tabs-container",v.tabList),children:[(0,g.jsx)(x,{...t,...e}),(0,g.jsx)(y,{...t,...e})]})}function j(e){const t=(0,b.A)();return(0,g.jsx)(w,{...e,children:c(e.children)},String(t))}},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>o});var r=n(96540);const a={},i=r.createContext(a);function s(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);