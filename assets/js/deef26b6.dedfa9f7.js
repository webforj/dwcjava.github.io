"use strict";(self.webpackChunkdwcj_documentation=self.webpackChunkdwcj_documentation||[]).push([[3467],{33597:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>c});const o=JSON.parse('{"id":"building-ui/events","title":"Events","description":"Components, whether custom or part of the framework, support event handling. You can add event listeners to capture various types of events, such as user interactions, changes in state, or other custom events. These event listeners can be used to trigger specific actions or behaviors in response to the events.","source":"@site/docs/building-ui/events.md","sourceDirName":"building-ui","slug":"/building-ui/events","permalink":"/docs/building-ui/events","draft":false,"unlisted":false,"editUrl":"https://github.com/webforj/webforj-docs/tree/website/docs/building-ui/events.md","tags":[],"version":"current","sidebarPosition":10,"frontMatter":{"sidebar_position":10,"title":"Events","slug":"events","draft":false},"sidebar":"documentationSidebar","previous":{"title":"Event Options","permalink":"/docs/building-ui/web-components/event-options"},"next":{"title":"Data Binding","permalink":"/docs/data-binding/overview"}}');var i=t(74848),s=t(28453);const r={sidebar_position:10,title:"Events",slug:"events",draft:!1},a=void 0,d={},c=[{value:"Adding events",id:"adding-events",level:2},{value:"Removing an event",id:"removing-an-event",level:2},{value:"Using event payload",id:"using-event-payload",level:2},{value:"Sample",id:"sample",level:3}];function l(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components},{ComponentDemo:t,JavadocLink:o}=n;return t||p("ComponentDemo",!0),o||p("JavadocLink",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(o,{type:"foundation",location:"com/webforj/component/event/Event",top:"true"}),"\n",(0,i.jsx)(n.p,{children:"Components, whether custom or part of the framework, support event handling. You can add event listeners to capture various types of events, such as user interactions, changes in state, or other custom events. These event listeners can be used to trigger specific actions or behaviors in response to the events."}),"\n",(0,i.jsx)(n.p,{children:"In the example below, an event is being added using each of the three supported methods: lambda expressions, anonymous classes, and method references."}),"\n",(0,i.jsx)(n.h2,{id:"adding-events",children:"Adding events"}),"\n",(0,i.jsx)(n.p,{children:"Adding an event listener is possible use one of the following patterns where:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"myComponent"})})," is the component to which you want to attach the event listener."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"addEventListener"})})," is replaced with the event-specific method."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"EventListener"})})," is replaced with the type of event being listened for."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:"myComponent.addEventListener(e -> {\r\n  //Executed when the event fires\r\n});\r\n\r\n//OR\r\n\r\nmyComponent.addEventListener(new ComponentEventListener<EventListener>() {\r\n  @Override\r\n  public void onComponentEvent(ComponentEvent e){\r\n    //Executed when the event fires\r\n  }\r\n});\r\n\r\n//OR\r\n\r\nmyComponent.addEventListener(this::eventMethod);\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Additional syntactic sugar methods, or aliases, have been added to allow for alternative addition of events by using the ",(0,i.jsx)(n.code,{children:"on"})," prefix followed by the event, such as:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:"myComponent.onEvent(e -> {\r\n  //Executed when the event fires\r\n});\n"})}),"\n",(0,i.jsx)(n.h2,{id:"removing-an-event",children:"Removing an event"}),"\n",(0,i.jsxs)(n.p,{children:["When adding an event listener, a ",(0,i.jsx)(n.code,{children:"ListenerRegistration"})," object will be returned. This can be used, among other things, to remove the event later on."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:"//Adding the event\r\nListenerRegistration listenerRegistration = myComponent.addEventListener(e -> {\r\n        //Executed when the event fires\r\n    });\r\n\r\n//Removing the event\r\nlistenerRegistration.remove();\n"})}),"\n",(0,i.jsx)(n.h2,{id:"using-event-payload",children:"Using event payload"}),"\n",(0,i.jsx)(n.p,{children:"It's important to note that events often come with a payload, which contains additional information related to the event. You can efficiently utilize this payload within the event handler to access relevant data without making unnecessary round trips between the client and server. By doing so, you can improve the performance of your application."}),"\n",(0,i.jsx)(n.p,{children:"The following code snippet queries the component to get information that, for our demonstration's purposes, is already included in the event payload, representing inefficient code:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:"myComponent.addEventListener(e -> {\r\n  // Access data from component\r\n  String componentText = e.getComponent().getText();\r\n\r\n  //OR if the component is accessible within the scope of the function\r\n  String componentText = myComponent.getText();\r\n\r\n  // Use the componentText to perform other actions.\r\n});\n"})}),"\n",(0,i.jsx)(n.p,{children:"Instead, utilizing the payload of the method, which for the sake of the example includes the text of the component, a roundtrip is avoided:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:"myComponent.addEventListener(e -> {\r\n  // Access data from the event payload\r\n  String componentText = e.getText();\r\n  \r\n  // Use the componentText to perform other actions.\r\n});\n"})}),"\n",(0,i.jsxs)(n.p,{children:["This approach minimizes the need to query the component for information, as the data is readily available in the event payload. By following this efficient event handling practice, you can enhance the performance and responsiveness of your components. For more information, you can refer to the documentation on ",(0,i.jsx)(n.a,{href:"/docs/architecture/",children:"architecture"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"sample",children:"Sample"}),"\n",(0,i.jsxs)(n.p,{children:["Below is a demonstration showing the addition of a ",(0,i.jsx)(o,{type:"foundation",location:"com/webforj/component/button/event/ButtonClickEvent",code:"true",children:"ButtonClickEvent"})," to a ",(0,i.jsx)(n.a,{href:"#",children:(0,i.jsx)(n.code,{children:"Button"})}),". This  ",(0,i.jsx)(n.a,{href:"#",children:(0,i.jsx)(n.code,{children:"Button"})})," also uses information coming with the event's payload to display information on the screen."]}),"\n",(0,i.jsx)(t,{path:"https://demo.webforj.com/webapp/controlsamples/buttonevent?",javaE:"https://raw.githubusercontent.com/webforj/webforj-docs-samples/refs/heads/main/src/main/java/com/webforj/samples/views/button/ButtonEventView.java",javaC:"https://raw.githubusercontent.com/webforj/ControlSamples/main/src/main/code_snippets/button/Event.txt",height:"100px"})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}function p(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>a});var o=t(96540);const i={},s=o.createContext(i);function r(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);