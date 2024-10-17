"use strict";(self.webpackChunkdwcj_documentation=self.webpackChunkdwcj_documentation||[]).push([[4675],{8290:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>r,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>d,toc:()=>l});var n=t(4848),s=t(8453);const a={sidebar_position:3,title:"DateTimeField",slug:"datetimefield"},o=void 0,d={id:"components/fields/date-time-field",title:"DateTimeField",description:"The DateTimeField class provides a user interface component that allows the user to enter both a date and a time, including the year, month, and day, as well as the time in hours and minutes. It offers the flexibility to validate the input or use a special date-time picker interface.",source:"@site/docs/components/fields/date-time-field.md",sourceDirName:"components/fields",slug:"/components/fields/datetimefield",permalink:"/docs/components/fields/datetimefield",draft:!1,unlisted:!1,editUrl:"https://github.com/webforj/webforj-docs/tree/website/docs/components/fields/date-time-field.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"DateTimeField",slug:"datetimefield"},sidebar:"documentationSidebar",previous:{title:"DateField",permalink:"/docs/components/fields/datefield"},next:{title:"NumberField",permalink:"/docs/components/fields/numberfield"}},r={},l=[{value:"Usages",id:"usages",level:3},{value:"Maximum and Minimum",id:"maximum-and-minimum",level:3},{value:"Display",id:"display",level:3},{value:"Static Utilities",id:"static-utilities",level:3},{value:"Best Practices",id:"best-practices",level:3}];function c(e){const i={admonition:"admonition",code:"code",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components},{ComponentDemo:t,DocChip:a,JavadocLink:o,ParentLink:d}=i;return t||m("ComponentDemo",!0),a||m("DocChip",!0),o||m("JavadocLink",!0),d||m("ParentLink",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a,{chip:"shadow"}),"\n",(0,n.jsx)(a,{chip:"name",label:"dwc-field"}),"\n",(0,n.jsx)(o,{type:"foundation",location:"com/webforj/component/field/DateTimeField",top:"true"}),"\n",(0,n.jsx)(d,{parent:"Field"}),"\n",(0,n.jsxs)(i.p,{children:["The ",(0,n.jsx)(i.code,{children:"DateTimeField"})," class provides a user interface component that allows the user to enter both a date and a time, including the year, month, and day, as well as the time in hours and minutes. It offers the flexibility to validate the input or use a special date-time picker interface."]}),"\n",(0,n.jsx)(t,{path:"https://demo.webforj.com/webapp/controlsamples/datetimefielddemo?",javaE:"https://raw.githubusercontent.com/webforj/webforj-docs-samples/refs/heads/main/src/main/java/com/webforj/samples/views/fields/datetimefield/DateTimeFieldDemoView.java",cssURL:"https://raw.githubusercontent.com/webforj/ControlSamples/main/src/main/resources/css/fields/datefield/dateFieldDemo.css"}),"\n",(0,n.jsx)(i.h3,{id:"usages",children:"Usages"}),"\n",(0,n.jsxs)(i.p,{children:["The ",(0,n.jsx)(i.code,{children:"DateTimeField"})," is best used in scenarios where capturing or displaying both date ",(0,n.jsx)(i.strong,{children:"and"})," time is essential to the user interface or application functionality. Here are some examples of when to use the ",(0,n.jsx)(i.code,{children:"DateTimeField"}),":"]}),"\n",(0,n.jsxs)(i.ol,{children:["\n",(0,n.jsxs)(i.li,{children:["\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.strong,{children:"Event Scheduling and Calendars"}),": If time of day is in important factor in applications that involve event scheduling, appointment booking, or managing calendars then a ",(0,n.jsx)(i.code,{children:"DateTimeField"})," is the proper component to use."]}),"\n"]}),"\n",(0,n.jsxs)(i.li,{children:["\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.strong,{children:"Form Inputs"}),": When designing forms that require date and time inputs, using a ",(0,n.jsx)(i.code,{children:"DateTimeField"})," simplifies the selection process for users. This is particularly useful for applications that collect user data or require scheduling with specific times."]}),"\n"]}),"\n",(0,n.jsxs)(i.li,{children:["\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.strong,{children:"Data Logging and Timestamps"}),": Applications that involve data logging or capturing timestamps require ",(0,n.jsx)(i.code,{children:"DateTimeFields"})," to record the date and time when events occur or when data is submitted."]}),"\n"]}),"\n",(0,n.jsxs)(i.li,{children:["\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.strong,{children:"Task Management and Deadlines"}),": ",(0,n.jsx)(i.code,{children:"DateTimeFields"})," are valuable in applications that involve task management or setting deadlines where both the date and time are relevant for accurate scheduling."]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(i.h3,{id:"maximum-and-minimum",children:"Maximum and Minimum"}),"\n",(0,n.jsxs)(i.p,{children:["You can use the ",(0,n.jsx)(i.code,{children:"setMax()"})," and ",(0,n.jsx)(i.code,{children:"setMin()"})," methods to specify the acceptable range of dates and times. If the value entered into the component is outside of the specified timestamp, the component fails constraint validation. Also, if there is already a maximum or minimum set, the value given to the other method must be lower or higher respectively."]}),"\n",(0,n.jsx)(i.h3,{id:"display",children:"Display"}),"\n",(0,n.jsxs)(i.p,{children:["The ",(0,n.jsx)(i.code,{children:"DateTimeField"})," will, by default, display its information within the UI element based on the locale the browser is configured to. For example, users with United States configurations will see the date displayed with the month preceding the day, whereas European users will see the day before the month. This does not inhibit manipulation of the ",(0,n.jsx)(i.code,{children:"LocalDateTime"})," object returned by methods from the class, however."]}),"\n",(0,n.jsx)(i.admonition,{type:"info",children:(0,n.jsxs)(i.p,{children:["When displaying time, the seconds will display by default. However, if the component is given a ",(0,n.jsx)(i.code,{children:"LocaleDateTime"})," object with the seconds set to 0, the seconds are then hidden from the display."]})}),"\n",(0,n.jsx)(i.h3,{id:"static-utilities",children:"Static Utilities"}),"\n",(0,n.jsx)(i.p,{children:"The DateTimeField class also provides the following static utility methods:"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:["\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.code,{children:"fromDateTime(String dateTimeAsString)"}),": Convert a date and time string in yyyy-MM-ddTHH:mm",":ss"," format to a LocalDateTime object which can then be utilized with this class, or elsewhere."]}),"\n"]}),"\n",(0,n.jsxs)(i.li,{children:["\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.code,{children:"toDateTime(LocalDateTime dateTime)"}),": Convert a LocalDateTime object to a date and time string in yyyy-MM-ddTHH:mm",":ss"," format."]}),"\n"]}),"\n",(0,n.jsxs)(i.li,{children:["\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.code,{children:"isValidDateTime(String dateTimeAsString)"}),": Checks to see if the given string is a valid yyyy-MM-ddTHH:mm",":ss"," date and time. This will return a boolean value true if so, false otherwise."]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(i.h3,{id:"best-practices",children:"Best Practices"}),"\n",(0,n.jsxs)(i.p,{children:["To ensure an optimal user experience when using the ",(0,n.jsx)(i.code,{children:"DateField"})," component, consider the following best practices:"]}),"\n",(0,n.jsxs)(i.ol,{children:["\n",(0,n.jsxs)(i.li,{children:["\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.strong,{children:"Consider Localized Date Display"}),": When displaying dates, consider localizing the date format and incorporating regional preferences. This enhances usability and ensures dates are presented in a familiar format to the user."]}),"\n"]}),"\n",(0,n.jsxs)(i.li,{children:["\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.strong,{children:"Include Timezone Considerations"}),": If your application deals with time-sensitive information across different time zones, consider incorporating timezone selection alongside the date field to ensure accurate date-time representation."]}),"\n"]}),"\n",(0,n.jsxs)(i.li,{children:["\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.strong,{children:"Consider Accessibility"}),": Utilize the ",(0,n.jsx)(i.code,{children:"DateField"})," with accessibility in mind. Ensure that it meets accessibility standards, such as providing proper labels, and being compatible with assistive technologies."]}),"\n"]}),"\n",(0,n.jsxs)(i.li,{children:["\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.strong,{children:"Auto-Populate Current Date"}),": Consider providing an option to auto-populate the current date as a default value in the date field, if appropriate for your application's use case."]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:i}={...(0,s.R)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}function m(e,i){throw new Error("Expected "+(i?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},8453:(e,i,t)=>{t.d(i,{R:()=>o,x:()=>d});var n=t(6540);const s={},a=n.createContext(s);function o(e){const i=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function d(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),n.createElement(a.Provider,{value:i},e.children)}}}]);