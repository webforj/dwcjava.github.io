"use strict";(self.webpackChunkdwcj_documentation=self.webpackChunkdwcj_documentation||[]).push([[3923],{3839:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var t=i(4848),r=i(8453);const o={title:"Terminate and Error Actions"},a=void 0,s={id:"advanced/terminate-and-error-actions",title:"Terminate and Error Actions",description:"When developing applications with the webforJ, it's essential to define how your app behaves when it terminates or encounters an error. The framework provides mechanisms to customize these behaviors through terminate and error actions.",source:"@site/docs/advanced/terminate-and-error-actions.md",sourceDirName:"advanced",slug:"/advanced/terminate-and-error-actions",permalink:"/docs/advanced/terminate-and-error-actions",draft:!1,unlisted:!1,editUrl:"https://github.com/webforj/webforj-docs/tree/website/docs/advanced/terminate-and-error-actions.md",tags:[],version:"current",frontMatter:{title:"Terminate and Error Actions"},sidebar:"documentationSidebar",previous:{title:"Interval",permalink:"/docs/advanced/interval"},next:{title:"Architecture",permalink:"/docs/category/architecture"}},c={},d=[{value:"Overview",id:"overview",level:2},{value:"Default behavior",id:"default-behavior",level:2},{value:"Customizing actions",id:"customizing-actions",level:2},{value:"Setting a custom message action",id:"setting-a-custom-message-action",level:3},{value:"Setting a redirect action",id:"setting-a-redirect-action",level:3},{value:"Terminating the app",id:"terminating-the-app",level:2},{value:"Hooks for termination",id:"hooks-for-termination",level:2},{value:"Custom termination page",id:"custom-termination-page",level:3}];function l(e){const n={admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["When developing applications with the webforJ, it's essential to define how your app behaves when it terminates or encounters an error. The framework provides mechanisms to customize these behaviors through ",(0,t.jsx)(n.code,{children:"terminate"})," and ",(0,t.jsx)(n.code,{children:"error"})," actions."]}),"\n",(0,t.jsxs)(n.p,{children:["This article explains how to configure ",(0,t.jsx)(n.code,{children:"terminate"})," and ",(0,t.jsx)(n.code,{children:"error"})," actions in your app, the default behaviors, and how to customize them to fit your needs."]}),"\n",(0,t.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"App"})," class allows you to define actions that execute when the app terminates normally or when it encounters an error. These actions are instances of the ",(0,t.jsx)(n.code,{children:"AppCloseAction"})," interface and can be set using:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"setTerminateAction(AppCloseAction action)"}),": Sets the action to execute upon normal termination."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"setErrorAction(AppCloseAction action)"}),": Sets the action to execute when an error occurs."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Available implementations of ",(0,t.jsx)(n.code,{children:"AppCloseAction"})," include:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"DefaultAction"}),": Clears the browser and displays a localized message prompting the user to reload the app."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"NoneAction"}),": Performs no action, effectively resetting any previously set action."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"MessageAction"}),": Displays a custom link message."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"RedirectAction"}),": Redirects the user to a specified URL."]}),"\n"]}),"\n",(0,t.jsx)(n.admonition,{title:"Distinguishing Termination Actions from Error Actions in webforJ",type:"info",children:(0,t.jsx)(n.p,{children:"webforJ doesn't treat termination due to a thrown or unhandled exception as an error action, but rather as a termination action because the app shuts down normally. An error action occurs when the app receives a termination signal due to an external error, such as when the browser can't connect to the server running the app."})}),"\n",(0,t.jsx)(n.h2,{id:"default-behavior",children:"Default behavior"}),"\n",(0,t.jsxs)(n.p,{children:["In webforJ version ",(0,t.jsx)(n.code,{children:"24.11"})," and earlier, the app defaults to using ",(0,t.jsx)(n.code,{children:"DefaultAction"})," for both termination and error events. This means that when the app terminates or encounters an error, the browser displays a message prompting the user to reload the app."]}),"\n",(0,t.jsxs)(n.p,{children:["Starting from version ",(0,t.jsx)(n.code,{children:"24.12"}),", webforJ defaults to ",(0,t.jsx)(n.code,{children:"NoneAction"})," for both termination and error events. This change means that no action is taken when the app terminates or an error occurs, allowing webforJ to delegate error handling to an appropriate ",(0,t.jsx)(n.code,{children:"ErrorHandler"})," if one is configured, or to fall back on its generic error handling mechanisms. By using ",(0,t.jsx)(n.code,{children:"NoneAction"}),", the app avoids disrupting the default error handling flow, enabling you to define custom error handlers or rely on webforJ\u2019s built-in error management."]}),"\n",(0,t.jsx)(n.h2,{id:"customizing-actions",children:"Customizing actions"}),"\n",(0,t.jsxs)(n.p,{children:["To change the default behavior, use the ",(0,t.jsx)(n.code,{children:"setTerminateAction()"})," and ",(0,t.jsx)(n.code,{children:"setErrorAction()"})," methods in your ",(0,t.jsx)(n.code,{children:"App"})," subclass."]}),"\n",(0,t.jsx)(n.h3,{id:"setting-a-custom-message-action",children:"Setting a custom message action"}),"\n",(0,t.jsx)(n.p,{children:"If you want to display a custom message upon normal termination:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:'public class MyApp extends App {\n\n  @Override\n  public void run() throws WebforjException {\n    // Set a custom message action\n    setTerminateAction(new MessageAction(\n        "Thank you for using our application!. Click to reload"\n    ));\n  }\n}\n'})}),"\n",(0,t.jsx)(n.h3,{id:"setting-a-redirect-action",children:"Setting a redirect action"}),"\n",(0,t.jsx)(n.p,{children:"To redirect the user to a specific URL upon normal termination:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:'public class MyApp extends App {\n\n  @Override\n  public void run() throws WebforjException {\n    // Set a redirect action on error\n    setTerminateAction(new RedirectAction(\n        "https://example.com/error"\n    ));\n  }\n}\n'})}),"\n",(0,t.jsx)(n.h2,{id:"terminating-the-app",children:"Terminating the app"}),"\n",(0,t.jsxs)(n.p,{children:["You can programmatically terminate your app by calling the ",(0,t.jsx)(n.code,{children:"terminate()"})," method:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:"public class MyApp extends App {\n\n  @Override\n  public void run() throws WebforjException {\n    // Terminate the application under certain conditions\n    if (someCondition) {\n      terminate();\n    }\n  }\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Upon calling ",(0,t.jsx)(n.code,{children:"terminate()"}),", the action defined by ",(0,t.jsx)(n.code,{children:"setTerminateAction()"})," executes."]}),"\n",(0,t.jsx)(n.h2,{id:"hooks-for-termination",children:"Hooks for termination"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"App"})," class provides hook methods to perform actions before and after termination:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"onWillTerminate()"}),": Called before termination."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"onDidTerminate()"}),": Called after termination."]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:"public class MyApp extends App {\n\n  @Override\n  protected void onWillTerminate() {\n    // Perform cleanup tasks\n  }\n\n  @Override\n  protected void onDidTerminate() {\n    // Actions after termination\n  }\n}\n"})}),"\n",(0,t.jsx)(n.h3,{id:"custom-termination-page",children:"Custom termination page"}),"\n",(0,t.jsxs)(n.p,{children:["In some cases, you might want to display a custom termination page when your app ends, providing users with a personalized message or additional resources. This can be achieved by overriding the ",(0,t.jsx)(n.code,{children:"onDidTerminate()"})," method in your ",(0,t.jsx)(n.code,{children:"App"})," subclass and injecting custom HTML into the page."]}),"\n",(0,t.jsx)(n.p,{children:"Here's an example of how to create a custom termination page:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:'public class WebforjHelloWorld extends App {\n\n  @Override\n  public void run() throws WebforjException {\n    setTerminateAction(new NoneAction());\n    terminate();\n  }\n\n  @Override\n  protected void onDidTerminate() {\n    String html = """\n    <div style="display: flex; justify-content: center; align-items: center; height: 100vh; flex-direction: column;">\n        <h1>Thank you for using webforJ</h1>\n        <p>For more information, visit <a href="https://webforj.com">webforj.com</a></p>\n    </div>\n    """;\n\n    Page.getCurrent().executeJsVoidAsync(\n        String.format("document.body.innerHTML = `%s`", html)\n    );\n  }\n}\n'})})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}}}]);