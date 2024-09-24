"use strict";(self.webpackChunkdwcj_documentation=self.webpackChunkdwcj_documentation||[]).push([[9985],{6739:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>p,frontMatter:()=>r,metadata:()=>d,toc:()=>l});var o=t(4848),i=t(8453),s=t(1803);const r={sidebar_position:1,title:"Component Basics",slug:"basics",draft:!1},c=void 0,d={id:"building-ui/component-basics",title:"Component Basics",description:"Components are fundamental building blocks that can be added to a window, providing user interface functionality and custom behavior. In webforJ, the Component class serves as the foundation for all components within the engine.",source:"@site/docs/building-ui/component-basics.md",sourceDirName:"building-ui",slug:"/building-ui/basics",permalink:"/docs/building-ui/basics",draft:!1,unlisted:!1,editUrl:"https://github.com/webforj/webforj-docs/tree/website/docs/building-ui/component-basics.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Component Basics",slug:"basics",draft:!1},sidebar:"documentationSidebar",previous:{title:"Building UIs",permalink:"/docs/category/building-uis"},next:{title:"Composite Components",permalink:"/docs/building-ui/composite-components"}},a={},l=[{value:"Lifecycle Management",id:"lifecycle-management",level:2},{value:"Create and Destroy Hooks",id:"create-and-destroy-hooks",level:3},{value:"<code>onCreate()</code>",id:"oncreate",level:4},{value:"<code>onDestroy()</code>",id:"ondestroy",level:4},{value:"Asynchronous Attachment",id:"asynchronous-attachment",level:3},{value:"Observers",id:"observers",level:3},{value:"Component Properties",id:"component-properties",level:2},{value:"Component Identifiers",id:"component-identifiers",level:3},{value:"Server-Side Component ID",id:"server-side-component-id",level:4},{value:"Client-Side Component ID",id:"client-side-component-id",level:4},{value:"User Data",id:"user-data",level:3}];function h(e){const n={admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(s.A,{type:"foundation",location:"com/webforj/component/Component",top:"true"}),"\n",(0,o.jsxs)(n.p,{children:["Components are fundamental building blocks that can be added to a window, providing user interface functionality and custom behavior. In webforJ, the ",(0,o.jsx)(n.code,{children:"Component"})," class serves as the foundation for all components within the engine."]}),"\n",(0,o.jsx)(n.h2,{id:"lifecycle-management",children:"Lifecycle Management"}),"\n",(0,o.jsx)(n.p,{children:"Understanding the component lifecycle is essential for creating, managing, and utilizing components effectively. The following two lifecycle states have methods to manipulate their behavior. These methods should not explicitly be called by the user."}),"\n",(0,o.jsx)(n.h3,{id:"create-and-destroy-hooks",children:"Create and Destroy Hooks"}),"\n",(0,o.jsxs)(n.p,{children:["All classes that extend the ",(0,o.jsx)(n.code,{children:"Component"})," class are responsible for implementing the functionality to be executed when the ",(0,o.jsx)(n.code,{children:"Component"})," is created, and when it is destroyed. This is done by overriding the ",(0,o.jsx)(n.code,{children:"onCreate()"})," and ",(0,o.jsx)(n.code,{children:"onDestroy()"})," methods, respectively."]}),"\n",(0,o.jsx)(n.h4,{id:"oncreate",children:(0,o.jsx)(n.code,{children:"onCreate()"})}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"onCreate()"})," method called when the component is added to a window. Creating components involves setting up their initial state and functionality. This is where you define what the component should do when it's first created. Whether it's initializing variables, setting up event listeners, or performing any other setup, the ",(0,o.jsx)(n.code,{children:"onCreate()"})," method is your entry point for customizing component behavior."]}),"\n",(0,o.jsx)(n.p,{children:"This hook receives a window instance which allows for the addition of components contained within the component."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-java",children:"@Override\r\nprotected void onCreate(Window window) {\r\n  TextField text = new TextField();\r\n  Button btn = new Button();\r\n\r\n  window.add(text, add);\r\n}\n"})}),"\n",(0,o.jsx)(n.admonition,{type:"tip",children:(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"onCreate()"})," method is where the component and any constituents should be added to the window."]})}),"\n",(0,o.jsx)(n.h4,{id:"ondestroy",children:(0,o.jsx)(n.code,{children:"onDestroy()"})}),"\n",(0,o.jsxs)(n.p,{children:["Destroying components is an essential part of managing resources and ensuring proper cleanup. Destroying a component is necessary when it's no longer needed or when you want to release resources associated with it. It allows a developer to perform cleanup tasks, such as stopping timers, releasing memory, or detaching event listeners. It also allows the ",(0,o.jsx)(n.code,{children:"destroy()"})," method to be called on any constituent components."]}),"\n",(0,o.jsx)(n.admonition,{type:"tip",children:(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"onDestroy()"})," method is responsible for calling the ",(0,o.jsx)(n.code,{children:"destroy()"})," method on any constituent components. Otherwise, these components will still exist in the DOM, but will not be reachable via the API."]})}),"\n",(0,o.jsx)(n.h3,{id:"asynchronous-attachment",children:"Asynchronous Attachment"}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"whenAttached()"})," method allows for functionality to be executed after a component has been added to a window. This method returns a ",(0,o.jsx)(n.code,{children:"PendingResult"}),", which allows for additional specified behavior to execute asynchronously once the component is attached in the DOM."]}),"\n",(0,o.jsx)(n.admonition,{type:"tip",children:(0,o.jsxs)(n.p,{children:["Unlike the previous three methods, ",(0,o.jsx)(n.code,{children:"whenAttached()"})," is meant to be explicitly called by the user."]})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-java",children:'public class Demo extends App {\r\n  @Override\r\n  public void run() throws webforJException {\r\n    Frame window = new Frame();\r\n\r\n    Button button = new Button(); \r\n\r\n    /* Explicit call to whenAttached() which will display a \r\n    message box when the button is attached to the Frame.*/\r\n    button.whenAttached().thenAccept( e -> msgbox("I\'m attached!")); \r\n  \r\n    // onCreate() method is called\r\n    window.add(button); \r\n  }\r\n}\n'})}),"\n",(0,o.jsx)(n.h3,{id:"observers",children:"Observers"}),"\n",(0,o.jsxs)(n.p,{children:["Observers play a vital role in keeping track of component lifecycle events. Observers can be added and removed using the ",(0,o.jsx)(n.code,{children:"addLifecycleObserver()"})," and ",(0,o.jsx)(n.code,{children:"removeLifecycleObserver()"})," methods, and  receive notifications about events such as creation and destruction of components."]}),"\n",(0,o.jsx)(n.p,{children:"By adding observers, you can take action when a component is created, or destroyed. This is particularly useful for implementing custom logic or handling specific scenarios based on component events."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-java",children:"Button button = new Button();\r\nbutton.addLifecycleObserver((button, lifecycleEvent) -> {\r\n  if (lifecycleEvent == ComponentLifecycleObserver.LifecycleEvent.DESTROY) {\r\n    //implemented logic to execute when the Button is destroyed\r\n  }\r\n});\n"})}),"\n",(0,o.jsx)(n.h2,{id:"component-properties",children:"Component Properties"}),"\n",(0,o.jsx)(n.h3,{id:"component-identifiers",children:"Component Identifiers"}),"\n",(0,o.jsx)(n.p,{children:"Component IDs serve as unique identifiers for components, allowing you to interact with them and manage their state effectively."}),"\n",(0,o.jsx)(n.h4,{id:"server-side-component-id",children:"Server-Side Component ID"}),"\n",(0,o.jsxs)(n.p,{children:["Every component created from the ",(0,o.jsx)(n.code,{children:"Component"})," class is assigned a server-side identifier automatically. Server-side IDs are essential for internal tracking and identification of components within the framework. You can retrieve the server-side component ID using the ",(0,o.jsx)(n.code,{children:"getComponentId()"})," method."]}),"\n",(0,o.jsx)(n.p,{children:"This can be helpful in many situations where having a unique, server-size identifier is necessary, such as querying for a specific component within a container."}),"\n",(0,o.jsx)(n.h4,{id:"client-side-component-id",children:"Client-Side Component ID"}),"\n",(0,o.jsxs)(n.p,{children:["Client-Side IDs allow for the user to obtain the client representation of the server component created in Java. All provided webforJ components have an implementation of this ID provided. If you want to obtain access to and use the client-side component, you can execute ",(0,o.jsx)(n.code,{children:"object.get()"})," with the client ID to obtain the desired client component."]}),"\n",(0,o.jsx)(n.admonition,{type:"important",children:(0,o.jsxs)(n.p,{children:["This ID is ",(0,o.jsx)(n.strong,{children:"not"})," the ID attribute of the element in the DOM."]})}),"\n",(0,o.jsxs)(n.p,{children:["In the below sample, an ",(0,o.jsx)(n.code,{children:"onClick"})," event is added to a button, which is then fired by calling the method on the client component after it is obtained using get ",(0,o.jsx)(n.code,{children:"object.get()"})," method."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-java",children:'@Override\r\npublic void run() throws webforJException {\r\n  Frame frame = new Frame();\r\n  Button btn = new Button("Click me");\r\n  btn.onClick(e -> {\r\n    msgbox("clicked");\r\n  });\r\n\r\n  btn.whenAttached().thenAccept(e -> {\r\n    getPage().executeJs("objects.get(\'" + btn.getClientComponentId() + "\').click()");\r\n  });\r\n  frame.add(btn);\r\n}\n'})}),"\n",(0,o.jsx)(n.h3,{id:"user-data",children:"User Data"}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"Component"})," class allows you to include additional information within the component using the ",(0,o.jsx)(n.code,{children:"setUserData()"})," method. This information is accessible only on the server side of the component via the ",(0,o.jsx)(n.code,{children:"getUserData()"})," method, and is not sent to the client."]}),"\n",(0,o.jsx)(n.p,{children:"This is quite useful when there is information that should be included with a component, and when that information should be accessible without making a trip to the client to retrieve it."})]})}function p(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},7785:(e,n,t)=>{var o=t(4994);n.A=void 0;var i=o(t(2032)),s=t(4848),r=(0,i.default)((0,s.jsx)("path",{d:"m19 1-5 5v11l5-4.5V1zM1 6v14.65c0 .25.25.5.5.5.1 0 .15-.05.25-.05C3.1 20.45 5.05 20 6.5 20c1.95 0 4.05.4 5.5 1.5V6c-1.45-1.1-3.55-1.5-5.5-1.5S2.45 4.9 1 6zm22 13.5V6c-.6-.45-1.25-.75-2-1v13.5c-1.1-.35-2.3-.5-3.5-.5-1.7 0-4.15.65-5.5 1.5v2c1.35-.85 3.8-1.5 5.5-1.5 1.65 0 3.35.3 4.75 1.05.1.05.15.05.25.05.25 0 .5-.25.5-.5v-1.1z"}),"AutoStories");n.A=r},1803:(e,n,t)=>{t.d(n,{A:()=>a});var o=t(6540),i=t(7437),s=t(276),r=t(526),c=t(7785);var d=t(2445);function a(e){let{type:n,location:t,top:a,children:l,code:h,suffix:p}=e;const[m,u]=(0,o.useState)("");(0,o.useEffect)((()=>{p||(p=""),u("https://javadoc.io/doc/com.webforj/webforj-"+n+"/latest/"+t+".html"+p)}),[]);const f=i.AH`
    display: inline;

    ${a&&i.AH`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    margin-top: -33px;
    margin-bottom: 25px;
    `}
  `,v=i.AH`
  background-color: #0063CC;
  padding: 0 0 0 5px;
  :hover{
    color: white;
  }
  `;return(0,d.FD)(d.FK,{children:["true"===a&&(0,d.Y)("div",{css:f,children:(0,d.Y)(s.A,{title:"JavaDoc",arrow:!0,children:(0,d.Y)(r.A,{css:v,label:"Java API",component:"a",href:m,icon:(0,d.Y)(c.A,{}),clickable:!0,color:"primary",target:"_blank"})})}),"true"!==a&&!h&&(0,d.Y)("div",{css:f,children:(0,d.Y)("a",{href:m,target:"_blank",children:l})}),"true"!==a&&h&&(0,d.Y)("div",{css:f,children:(0,d.Y)("code",{children:(0,d.Y)("a",{href:m,target:"_blank",children:l})})})]})}}}]);