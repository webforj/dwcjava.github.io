"use strict";(self.webpackChunkdwcj_documentation=self.webpackChunkdwcj_documentation||[]).push([[9625],{2581:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"configuration/deploy-reload/maven-jetty-plugin","title":"Maven Jetty plugin","description":"The Maven Jetty plugin is a popular tool that allows developers to run Java web apps within an embedded Jetty server directly from their Maven projects.","source":"@site/docs/configuration/deploy-reload/maven-jetty-plugin.md","sourceDirName":"configuration/deploy-reload","slug":"/configuration/deploy-reload/maven-jetty-plugin","permalink":"/docs/configuration/deploy-reload/maven-jetty-plugin","draft":false,"unlisted":false,"editUrl":"https://github.com/webforj/webforj-docs/tree/website/docs/configuration/deploy-reload/maven-jetty-plugin.md","tags":[],"version":"current","frontMatter":{"title":"Maven Jetty plugin"},"sidebar":"documentationSidebar","previous":{"title":"JRebel","permalink":"/docs/configuration/deploy-reload/jrebel"},"next":{"title":"Running with BBjServices","permalink":"/docs/configuration/bbj-installation/overview"}}');var i=t(4848),r=t(8453);const o={title:"Maven Jetty plugin"},l=void 0,a={},d=[{value:"Jetty configurations",id:"jetty-configurations",level:2},{value:"webforJ configurations",id:"webforj-configurations",level:2},{value:"Usage considerations",id:"usage-considerations",level:2}];function c(e){const n={code:"code",h2:"h2",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"The Maven Jetty plugin is a popular tool that allows developers to run Java web apps within an embedded Jetty server directly from their Maven projects."}),"\n",(0,i.jsx)(n.p,{children:"The Jetty Plugin launches an embedded Jetty server that monitors your app\u2019s files, including Java classes and resources, for changes. When it detects updates, it automatically redeploys the app, which speeds up development by eliminating manual build and deployment steps."}),"\n",(0,i.jsx)(n.h2,{id:"jetty-configurations",children:"Jetty configurations"}),"\n",(0,i.jsx)(n.p,{children:"Here are some essential configurations for fine-tuning the plugin\u2019s hot deployment and server interaction settings:"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Property"}),(0,i.jsx)(n.th,{children:"Description"}),(0,i.jsx)(n.th,{children:"Default"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"scan"})})}),(0,i.jsxs)(n.td,{children:["Configures how often the Jetty server scans for file changes in the ",(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"pom.xml"})}),". The skeleton project sets this to ",(0,i.jsx)(n.code,{children:"2"})," seconds. Increasing this interval can reduce CPU load but may delay changes being reflected in the app."]}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"1"})})]})})]}),"\n",(0,i.jsx)(n.h2,{id:"webforj-configurations",children:"webforJ configurations"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Property"}),(0,i.jsx)(n.th,{children:"Description"}),(0,i.jsx)(n.th,{children:"Default"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"webforj.reloadOnServerError"})})}),(0,i.jsx)(n.td,{children:"When using hot redeploy, the whole WAR file is swapped. If the client sends a request while the server is restarting, an error occurs. This setting allows the client to attempt a page reload, assuming the server will be back online shortly. Only applies to development environments and only handles errors specific to hot redeployment."}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"on"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"webforj.clientHeartbeatRate"})})}),(0,i.jsx)(n.td,{children:"Sets the interval for client pings to query server availability. This keeps the client-server communication open. For development, use shorter intervals for faster error detection. In production, set this to at least 50 seconds to avoid excessive requests."}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"50s"})})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"usage-considerations",children:"Usage considerations"}),"\n",(0,i.jsx)(n.p,{children:"While the Jetty Plugin is highly effective for development, it has a few potential limitations:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Memory and CPU usage"}),": Frequent file scanning, set by low ",(0,i.jsx)(n.code,{children:"scan"})," values in the ",(0,i.jsx)(n.code,{children:"pom.xml"}),", can increase resource consumption, especially on large projects. Increasing the interval may reduce load but also slows down redeployment."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Limited production use"}),": The Jetty Plugin is designed for development, not for production environments. It lacks the performance optimization and security configurations required for production, making it better suited to local testing."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Session management"}),": During hot redeployment, user sessions may not be preserved, especially when large structural changes occur in the code. This can disrupt tests involving user session data, requiring manual session management or workaround configurations for development."]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>l});var s=t(6540);const i={},r=s.createContext(i);function o(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);