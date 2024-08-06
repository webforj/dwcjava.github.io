"use strict";(self.webpackChunkdwcj_documentation=self.webpackChunkdwcj_documentation||[]).push([[9757],{7605:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>d,toc:()=>c});var n=a(5893),i=a(1151),r=a(4866),o=a(5162);const l={sidebar_position:5,title:"Triggers"},s=void 0,d={id:"data-binding/validation/triggers",title:"Triggers",description:"By default, bindings automatically revalidate components when users modify their data, such as entering new text, checking a checkbox, or selecting a new option in a radio button. If you prefer to turn off automatic validations and only report them when writing to the data model, you can configure the binding to turn them off. This gives you control over when and how validations occur, allowing you to manage validations according to specific app needs or user interactions.",source:"@site/docs/data-binding/validation/triggers.md",sourceDirName:"data-binding/validation",slug:"/data-binding/validation/triggers",permalink:"/docs/data-binding/validation/triggers",draft:!1,unlisted:!1,editUrl:"https://github.com/webforj/webforj-docs/tree/website/docs/data-binding/validation/triggers.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,title:"Triggers"},sidebar:"documentationSidebar",previous:{title:"Context Results",permalink:"/docs/data-binding/validation/context-results"},next:{title:"Jakarta Validation",permalink:"/docs/data-binding/validation/jakarta-validation"}},u={},c=[{value:"Revalidation",id:"revalidation",level:2}];function h(e){const t={admonition:"admonition",code:"code",h2:"h2",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"By default, bindings automatically revalidate components when users modify their data, such as entering new text, checking a checkbox, or selecting a new option in a radio button. If you prefer to turn off automatic validations and only report them when writing to the data model, you can configure the binding to turn them off. This gives you control over when and how validations occur, allowing you to manage validations according to specific app needs or user interactions."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-java",children:'BindingContext<User> context = new BindingContext<>(User.class);\ncontext.bind(emailField, "email")\n    .useValidator(\n        Validator.from(new EmailValidator(), "Custom message for invalid email address"))\n    .autoValidate(false)\n    .add();\n'})}),"\n",(0,n.jsx)(t.p,{children:"It's also possible to turn of the auto-validations for the whole context."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-java",children:"BindingContext<User> context = new BindingContext<>(User.class);\ncontext.setAutoValidate(false);\n"})}),"\n",(0,n.jsxs)(t.admonition,{title:"Value Change Mode",type:"tip",children:[(0,n.jsxs)(t.p,{children:["Some components, like the field components, implement the ",(0,n.jsx)(t.code,{children:"ValueChangeModeAware"})," interface, which lets you control when the system reports a ",(0,n.jsx)(t.code,{children:"ValueChangeEvent"}),". For instance, you can set field components to report value changes only on blur. This configuration reduces the frequency of validations, optimizing performance and enhancing the user experience by focusing validations on moments when the user completes an input session, rather than during active typing."]}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-java",children:" emailField.setValueChangeMode(ValueChangeMode.ON_BLUR);\n"})})]}),"\n",(0,n.jsx)(t.h2,{id:"revalidation",children:"Revalidation"}),"\n",(0,n.jsx)(t.p,{children:"While validations typically trigger automatically during data writing, you can also invoke them manually to verify the state of data without attempting to write it to the model. This manual approach is particularly useful in scenarios where you want to enable or turn off features based on the validity of the form data without making an update."}),"\n",(0,n.jsx)(t.p,{children:"Consider a classic example of a Trip Date Chooser, where a user must select two dates: the start date and the end date of a trip. It's not valid to choose an end date that occurs before the start date, or a start date that occurs after the end date. You can resolve these dependencies by triggering validations manually:"}),"\n",(0,n.jsxs)(r.Z,{children:[(0,n.jsx)(o.Z,{value:"TripBooking",label:"TripBooking.java",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-java",metastring:"showLineNumbers",children:'public class TripBooking extends App {\n  DateTimeField startDateField = new DateTimeField("Start Date");\n  DateTimeField endDateField = new DateTimeField("End Date");\n  FlexLayout layout = FlexLayout.create(startDateField, endDateField).vertical().build().setStyle("margin", "20px auto")\n      .setMaxWidth("400px");\n\n  LocalDateTime startDate;\n  LocalDateTime endDate;\n\n  @Override\n  public void run() throws WebforjException {\n    BindingContext<Trip> context = new BindingContext<>(Trip.class);\n    context.bind(startDateField, "startDate")\n        .useValidator(Objects::nonNull, "Start date is required")\n        .useValidator(value -> endDate != null && value.isBefore(endDate),\n            "Start date must be before end date")\n        .add();\n\n    context.bind(endDateField, "endDate")\n        .useValidator(Objects::nonNull, "End date is required")\n        .useValidator(value -> startDate != null && value.isAfter(startDate),\n            "End date must be after start date")\n        .add();\n\n    startDateField.setValueChangeMode(ValueChangeMode.ON_BLUR);\n    startDateField.addValueChangeListener(event -> {\n      startDate = event.getValue();\n      context.getBinding("endDate").validate();\n    });\n\n    endDateField.setValueChangeMode(ValueChangeMode.ON_BLUR);\n    endDateField.addValueChangeListener(event -> {\n      endDate = event.getValue();\n      context.getBinding("startDate").validate();\n    });\n\n    Frame frame = new Frame();\n    frame.add(layout);\n  }\n}\n'})})}),(0,n.jsx)(o.Z,{value:"Trip",label:"Trip.java",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-java",metastring:"showLineNumbers",children:"public class Trip {\n  private LocalDateTime startDate;\n  private LocalDateTime endDate;\n\n  public LocalDateTime getStartDate() {\n    return startDate;\n  }\n\n  public void setStartDate(LocalDateTime startDate) {\n    this.startDate = startDate;\n  }\n\n  public LocalDateTime getEndDate() {\n    return endDate;\n  }\n\n  public void setEndDate(LocalDateTime endDate) {\n    this.endDate = endDate;\n  }\n}\n"})})})]})]})}function m(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},5162:(e,t,a)=>{a.d(t,{Z:()=>o});a(7294);var n=a(6010);const i={tabItem:"tabItem_Ymn6"};var r=a(5893);function o(e){let{children:t,hidden:a,className:o}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,n.Z)(i.tabItem,o),hidden:a,children:t})}},4866:(e,t,a)=>{a.d(t,{Z:()=>D});var n=a(7294),i=a(6010),r=a(2466),o=a(6550),l=a(469),s=a(1980),d=a(7392),u=a(12);function c(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:a}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return c(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:i}}=e;return{value:t,label:a,attributes:n,default:i}}))}(a);return function(e){const t=(0,d.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:a}=e;const i=(0,o.k6)(),r=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s._X)(r),(0,n.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(i.location.search);t.set(r,e),i.replace({...i.location,search:t.toString()})}),[r,i])]}function g(e){const{defaultValue:t,queryString:a=!1,groupId:i}=e,r=h(e),[o,s]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:r}))),[d,c]=p({queryString:a,groupId:i}),[g,f]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[i,r]=(0,u.Nk)(a);return[i,(0,n.useCallback)((e=>{a&&r.set(e)}),[a,r])]}({groupId:i}),b=(()=>{const e=d??g;return m({value:e,tabValues:r})?e:null})();(0,l.Z)((()=>{b&&s(b)}),[b]);return{selectedValue:o,selectValue:(0,n.useCallback)((e=>{if(!m({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);s(e),c(e),f(e)}),[c,f,r]),tabValues:r}}var f=a(2389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=a(5893);function x(e){let{className:t,block:a,selectedValue:n,selectValue:o,tabValues:l}=e;const s=[],{blockElementScrollPositionUntilNextRender:d}=(0,r.o5)(),u=e=>{const t=e.currentTarget,a=s.indexOf(t),i=l[a].value;i!==n&&(d(t),o(i))},c=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const a=s.indexOf(e.currentTarget)+1;t=s[a]??s[0];break}case"ArrowLeft":{const a=s.indexOf(e.currentTarget)-1;t=s[a]??s[s.length-1];break}}t?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":a},t),children:l.map((e=>{let{value:t,label:a,attributes:r}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>s.push(e),onKeyDown:c,onClick:u,...r,className:(0,i.Z)("tabs__item",b.tabItem,r?.className,{"tabs__item--active":n===t}),children:a??t},t)}))})}function w(e){let{lazy:t,children:a,selectedValue:i}=e;const r=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=r.find((e=>e.props.value===i));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:r.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==i})))})}function y(e){const t=g(e);return(0,v.jsxs)("div",{className:(0,i.Z)("tabs-container",b.tabList),children:[(0,v.jsx)(x,{...e,...t}),(0,v.jsx)(w,{...e,...t})]})}function D(e){const t=(0,f.Z)();return(0,v.jsx)(y,{...e,children:c(e.children)},String(t))}}}]);