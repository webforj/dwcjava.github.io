"use strict";(self.webpackChunkdwcj_documentation=self.webpackChunkdwcj_documentation||[]).push([[1489],{13157:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>r,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>t,toc:()=>l});const t=JSON.parse('{"id":"introduction/tutorial/validating-and-binding-data","title":"Validating and Binding Data","description":"Data binding is a mechanism that connects the UI components of your app directly with the underlying data model, enabling automatic synchronization of values between the two. This eliminates the need for repetitive getter and setter calls, reducing development time and improving code reliability.","source":"@site/docs/introduction/tutorial/validating-and-binding-data.md","sourceDirName":"introduction/tutorial","slug":"/introduction/tutorial/validating-and-binding-data","permalink":"/docs/introduction/tutorial/validating-and-binding-data","draft":false,"unlisted":false,"editUrl":"https://github.com/webforj/webforj-docs/tree/website/docs/introduction/tutorial/validating-and-binding-data.md","tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"title":"Validating and Binding Data","sidebar_position":5},"sidebar":"documentationSidebar","previous":{"title":"Scaling with Routing and Composites","permalink":"/docs/introduction/tutorial/scaling-with-routing-and-composites"},"next":{"title":"Routing","permalink":"/docs/routing/overview"}}');var a=n(74848),d=n(28453);const s={title:"Validating and Binding Data",sidebar_position:5},o=void 0,r={},l=[{value:"Binding the fields",id:"binding-the-fields",level:3},{value:"Data binding with <code>onDidEnter()</code>",id:"data-binding-with-ondidenter",level:3},{value:"Validating data",id:"validating-data",level:2},{value:"Defining validation rules",id:"defining-validation-rules",level:3},{value:"Adding and editing entries with validation",id:"adding-and-editing-entries-with-validation",level:3}];function c(e){const i={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,d.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(i.p,{children:"Data binding is a mechanism that connects the UI components of your app directly with the underlying data model, enabling automatic synchronization of values between the two. This eliminates the need for repetitive getter and setter calls, reducing development time and improving code reliability."}),"\n",(0,a.jsx)(i.p,{children:"Validation, in this context, ensures that the data entered into the form adheres to predefined rules, such as being non-empty or following a specific format. By combining data binding with validation, you can streamline the user experience while maintaining data integrity without writing extensive manual checks."}),"\n",(0,a.jsxs)(i.p,{children:["For more information on data binding reference ",(0,a.jsx)(i.a,{href:"../../data-binding/overview",children:"this article."})]}),"\n",(0,a.jsx)(i.p,{children:(0,a.jsx)(i.img,{alt:"Data binding and validation screenshot",src:n(51437).A+"",width:"892",height:"372"})}),"\n",(0,a.jsx)(i.h3,{id:"binding-the-fields",children:"Binding the fields"}),"\n",(0,a.jsxs)(i.p,{children:["The data binding setup begins with initializing a ",(0,a.jsx)(i.code,{children:"BindingContext"})," for the ",(0,a.jsx)(i.code,{children:"Customer"})," model. The ",(0,a.jsx)(i.code,{children:"BindingContext"})," links the model properties to the form fields, enabling automatic data synchronization. This is set up in the ",(0,a.jsx)(i.code,{children:"FormView"})," constructor."]}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{className:"language-java",metastring:'title="FormView.java"',children:"BindingContext<Customer> context;\ncontext = BindingContext.of(this, Customer.class, true);\n"})}),"\n",(0,a.jsxs)(i.p,{children:[(0,a.jsx)(i.code,{children:"BindingContext.of(this, Customer.class, true)"})," initializes the binding context for the ",(0,a.jsx)(i.code,{children:"Customer"})," class. The third parameter, ",(0,a.jsx)(i.code,{children:"true"}),", enables ",(0,a.jsx)(i.a,{href:"https://beanvalidation.org/",children:"jakarta validation"}),"."]}),"\n",(0,a.jsxs)(i.admonition,{type:"info",children:[(0,a.jsxs)(i.p,{children:["This implementation uses auto-binding as described in the ",(0,a.jsx)(i.a,{href:"../../data-binding/automatic-binding",children:"Data Binding Article"}),". This works if the fields in the data model ",(0,a.jsx)(i.code,{children:"Customer"})," are named the same as the corresponding fields in the ",(0,a.jsx)(i.code,{children:"FormView"}),"."]}),(0,a.jsxs)(i.p,{children:["Should the fields not be named the same you can add the ",(0,a.jsx)(i.code,{children:"UseProperty"})," annotation in the form over the field you want to bind so they know which data fields to refer to."]})]}),"\n",(0,a.jsxs)(i.h3,{id:"data-binding-with-ondidenter",children:["Data binding with ",(0,a.jsx)(i.code,{children:"onDidEnter()"})]}),"\n",(0,a.jsxs)(i.p,{children:["The ",(0,a.jsx)(i.code,{children:"onDidEnter"})," method leverages the data binding setup to streamline the process of populating the form fields. Instead of manually setting values for each field, the data is now synchronized automatically with the ",(0,a.jsx)(i.code,{children:"BindingContext"}),"."]}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{className:"language-java",metastring:"{7}",children:'@Override\n  public void onDidEnter(DidEnterEvent event, ParametersBag parameters) {\n    parameters.get("id").ifPresent(id -> {\n      customer = Service.getCurrent().getCustomerByKey(UUID.fromString(id));\n      customerId = id;\n    });\n    context.read(customer);\n  }\n'})}),"\n",(0,a.jsxs)(i.p,{children:["The ",(0,a.jsx)(i.code,{children:"context.read"})," method in webforJ's data binding system synchronizes the fields of a UI component with the values from a data model. It's used in this case to populate form fields with data from an existing model, ensuring the UI reflects the current state of the data."]}),"\n",(0,a.jsx)(i.h2,{id:"validating-data",children:"Validating data"}),"\n",(0,a.jsx)(i.p,{children:"Validation ensures that the data entered into the form adheres to specified rules, improving data quality and preventing invalid submissions. With data binding, validation no longer needs to be manually implemented but instead simply configured, allowing real-time feedback on user inputs."}),"\n",(0,a.jsx)(i.h3,{id:"defining-validation-rules",children:"Defining validation rules"}),"\n",(0,a.jsxs)(i.p,{children:["Using ",(0,a.jsx)(i.a,{href:"https://beanvalidation.org",children:"Jakarta"})," and regular expressions, you can enforce a multitude of rules on a field. Often used examples would be ensuring the field\nisn't empty or null, or follows a certain pattern.\nThrough annotations in the customer class you can give jakarta validation parameters to the field."]}),"\n",(0,a.jsx)(i.admonition,{type:"info",children:(0,a.jsxs)(i.p,{children:["More details regarding the setup of the validation is available ",(0,a.jsx)(i.a,{href:"/docs/data-binding/validation/jakarta-validation#installation",children:"here"}),"."]})}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{className:"language-java",children:'  @NotEmpty(message = "Name cannot be empty")\n  @Pattern(regexp = "[a-zA-Z]*", message = "Invalid characters")\n  private String firstName = "";\n'})}),"\n",(0,a.jsxs)(i.p,{children:["The ",(0,a.jsx)(i.code,{children:"onValidate"})," method is then added to control the ",(0,a.jsx)(i.code,{children:"Submit"})," button's state based on the validity of the form fields. This ensures that only valid data can be submitted."]}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{className:"language-java",metastring:'title="FormView.java"',children:"context.onValidate(e -> submit.setEnabled(e.isValid()));\n"})}),"\n",(0,a.jsxs)(i.p,{children:[(0,a.jsx)(i.code,{children:"e.isValid()"})," returns true if all fields are valid, and false if not. This means that the ",(0,a.jsx)(i.code,{children:"Submit"})," button is enabled as long as all fields are valid. Otherwise, it remains turned off, preventing submission until corrections are made."]}),"\n",(0,a.jsx)(i.h3,{id:"adding-and-editing-entries-with-validation",children:"Adding and editing entries with validation"}),"\n",(0,a.jsxs)(i.p,{children:["The ",(0,a.jsx)(i.code,{children:"submitCustomer()"})," method now validates data using the ",(0,a.jsx)(i.code,{children:"BindingContext"})," before performing add or edit operations. This approach eliminates the need for manual validation checks, leveraging the context's built-in mechanisms to ensure that only valid data is processed."]}),"\n",(0,a.jsxs)(i.ul,{children:["\n",(0,a.jsxs)(i.li,{children:[(0,a.jsx)(i.strong,{children:"Add Mode"}),": If no ",(0,a.jsx)(i.code,{children:"id"})," is provided, the form is in add mode. The validated data is written to the ",(0,a.jsx)(i.code,{children:"Customer"})," model and added to the repository via ",(0,a.jsx)(i.code,{children:"Service.getCurrent().addCustomer(customer)"}),"."]}),"\n",(0,a.jsxs)(i.li,{children:[(0,a.jsx)(i.strong,{children:"Edit Mode"}),": If an ",(0,a.jsx)(i.code,{children:"id"})," is present, the method retrieves the corresponding customer data, updates it with validated inputs, and commits the changes to the repository."]}),"\n"]}),"\n",(0,a.jsxs)(i.p,{children:["Calling ",(0,a.jsx)(i.code,{children:"context.write(customer)"})," will return an instance of a ",(0,a.jsx)(i.code,{children:"ValidationResult"}),". This class indicates whether or not the validation was successful, and stores any messages associated with this result."]}),"\n",(0,a.jsxs)(i.p,{children:["This code ensures that all changes are validated and automatically applied to the model before being adding a new or editing an existing ",(0,a.jsx)(i.code,{children:"Customer"}),"."]}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{className:"language-java",metastring:'title="FormView.java"',children:"private void submitCustomer() {\n  ValidationResult results = context.write(customer);\n  if (results.isValid()) {\n    if (customerId.isEmpty()) {\n      Service.getCurrent().addCustomer(customer);\n    }\n    Router.getCurrent().navigate(DemoView.class);\n  }\n}\n"})}),"\n",(0,a.jsx)(i.p,{children:"By completing this step, the app now supports data binding and validation, ensuring that form inputs are synchronized with the model and adhere to predefined rules."})]})}function h(e={}){const{wrapper:i}={...(0,d.R)(),...e.components};return i?(0,a.jsx)(i,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},51437:(e,i,n)=>{n.d(i,{A:()=>t});const t=n.p+"assets/images/step4-9041dacef7f4ea063eaee7dddbd5a740.png"},28453:(e,i,n)=>{n.d(i,{R:()=>s,x:()=>o});var t=n(96540);const a={},d=t.createContext(a);function s(e){const i=t.useContext(d);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function o(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),t.createElement(d.Provider,{value:i},e.children)}}}]);