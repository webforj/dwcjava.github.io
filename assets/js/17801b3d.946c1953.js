"use strict";(self.webpackChunkdwcj_documentation=self.webpackChunkdwcj_documentation||[]).push([[8440],{6811:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>l,contentTitle:()=>a,default:()=>g,frontMatter:()=>n,metadata:()=>c,toc:()=>d});var o=t(5893),r=t(1151),i=t(3273);const n={sidebar_position:30,title:"Web Storage"},a=void 0,c={id:"advanced_topics/web-storage",title:"Web Storage",description:"Overview",source:"@site/docs/advanced_topics/web-storage.md",sourceDirName:"advanced_topics",slug:"/advanced_topics/web-storage",permalink:"/docs/advanced_topics/web-storage",draft:!1,unlisted:!1,editUrl:"https://github.com/webforj/webforj-docs/tree/website/docs/advanced_topics/web-storage.md",tags:[],version:"current",sidebarPosition:30,frontMatter:{sidebar_position:30,title:"Web Storage"},sidebar:"documentationSidebar",previous:{title:"Advanced Topics",permalink:"/docs/category/advanced-topics"},next:{title:"Architecture",permalink:"/docs/category/architecture"}},l={},d=[{value:"Overview",id:"overview",level:2},{value:"Summary of differences",id:"summary-of-differences",level:3},{value:"Using web storage",id:"using-web-storage",level:3},{value:"Cookies",id:"cookies",level:2},{value:"Key features:",id:"key-features",level:3},{value:"Using cookies",id:"using-cookies",level:3},{value:"Use cases",id:"use-cases",level:3},{value:"Session storage",id:"session-storage",level:2},{value:"Key features",id:"key-features-1",level:3},{value:"Using session storage in webforJ",id:"using-session-storage-in-webforj",level:3},{value:"Use cases",id:"use-cases-1",level:3},{value:"Local storage",id:"local-storage",level:2},{value:"Key features",id:"key-features-2",level:3},{value:"Using local storage in webforj",id:"using-local-storage-in-webforj",level:3},{value:"Use cases",id:"use-cases-2",level:3}];function h(e){const s={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(s.h2,{id:"overview",children:"Overview"}),"\n",(0,o.jsxs)(s.p,{children:[(0,o.jsx)(s.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API",children:"Web storage"})," is a fundamental concept in web development that allows websites to store data on the client side. This enables web applications to save state, preferences, and other information locally on the user's browser. Web storage provides a way to persist data across page reloads and browser sessions, reducing the need for repeated server requests and enabling offline capabilities."]}),"\n",(0,o.jsxs)(s.p,{children:["webforJ supports three mechanisms for storing client data: ",(0,o.jsx)(s.a,{href:"#cookies",children:(0,o.jsx)(s.strong,{children:"Cookies"})}),", ",(0,o.jsx)(s.a,{href:"#session-storage",children:(0,o.jsx)(s.strong,{children:"Session Storage"})}),", and ",(0,o.jsx)(s.a,{href:"#local-storage",children:(0,o.jsx)(s.strong,{children:"Local Storage"})}),"."]}),"\n",(0,o.jsx)(s.admonition,{title:"Web Storage in Developer Tools",type:"tip",children:(0,o.jsx)(s.p,{children:"You can see current cookie, local storage and session storage key-value pairs in your browser's developer tools."})}),"\n",(0,o.jsx)(s.h3,{id:"summary-of-differences",children:"Summary of differences"}),"\n",(0,o.jsxs)(s.table,{children:[(0,o.jsx)(s.thead,{children:(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.th,{children:"Feature"}),(0,o.jsx)(s.th,{children:"Cookies"}),(0,o.jsx)(s.th,{children:"Session Storage"}),(0,o.jsx)(s.th,{children:"Local Storage"})]})}),(0,o.jsxs)(s.tbody,{children:[(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:(0,o.jsx)(s.strong,{children:"Persistence"})}),(0,o.jsx)(s.td,{children:"Configurable expiration date"}),(0,o.jsx)(s.td,{children:"Duration of the page session"}),(0,o.jsx)(s.td,{children:"Persistent until explicitly deleted"})]}),(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:(0,o.jsx)(s.strong,{children:"Storage Size"})}),(0,o.jsxs)(s.td,{children:[(0,o.jsx)(s.a,{href:"https://en.wikipedia.org/wiki/HTTP_cookie#Implementation",children:"4 KB"})," per cookie"]}),(0,o.jsxs)(s.td,{children:["Around ",(0,o.jsx)(s.a,{href:"https://en.wikipedia.org/wiki/Web_storage#Storage_size",children:"5-10"})," MB"]}),(0,o.jsxs)(s.td,{children:["Around ",(0,o.jsx)(s.a,{href:"https://en.wikipedia.org/wiki/Web_storage#Storage_size",children:"5-10"})," MB"]})]}),(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:(0,o.jsx)(s.strong,{children:"Use Cases"})}),(0,o.jsx)(s.td,{children:"User authentication, preferences, tracking"}),(0,o.jsx)(s.td,{children:"Temporary data, form data"}),(0,o.jsx)(s.td,{children:"Persistent settings, user preferences"})]}),(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:(0,o.jsx)(s.strong,{children:"Security"})}),(0,o.jsx)(s.td,{children:"Vulnerable to XSS, can be secured with flags"}),(0,o.jsx)(s.td,{children:"Cleared on session end, less risk"}),(0,o.jsx)(s.td,{children:"Accessible via JavaScript, potential risk"})]})]})]}),"\n",(0,o.jsx)(s.h3,{id:"using-web-storage",children:"Using web storage"}),"\n",(0,o.jsxs)(s.p,{children:["The ",(0,o.jsx)(i.Z,{type:"foundation",location:"com/webforj/webstorage/CookieStorage",code:"true",children:"CookieStorage"}),", ",(0,o.jsx)(i.Z,{type:"foundation",location:"com/webforj/webstorage/SessionStorage",code:"true",children:"SessionStorage"}),", and ",(0,o.jsx)(i.Z,{type:"foundation",location:"com/webforj/webstorage/LocalStorage",code:"true",children:"LocalStorage"})," classes in webforJ all extend the abstract ",(0,o.jsx)(i.Z,{type:"foundation",location:"com/webforj/webstorage/WebStorage",code:"true",children:"WebStorage"})," class. To obtain the appropriate object, use the static methods ",(0,o.jsx)(s.code,{children:"CookieStorage.getCurrent()"}),",  ",(0,o.jsx)(s.code,{children:"SessionStorage.getCurrent()"}),", or ",(0,o.jsx)(s.code,{children:"LocalStorage.getCurrent()"}),". To add, get, and remove key-value pairs, use the ",(0,o.jsx)(s.code,{children:"add(key, value)"}),", ",(0,o.jsx)(s.code,{children:"get(key)"}),", and ",(0,o.jsx)(s.code,{children:"remove(key)"})," methods."]}),"\n",(0,o.jsx)(s.h2,{id:"cookies",children:"Cookies"}),"\n",(0,o.jsxs)(s.p,{children:[(0,o.jsx)(s.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies",children:"Cookies"})," are small pieces of data stored on the client side and sent to the server with each HTTP request. They are often used to remember user sessions, preferences, and authentication information. In addition to the key-value pairs, cookies may also have attributes. To set attributes for cookies, use ",(0,o.jsx)(s.code,{children:"add(key, value, attributes)"}),"."]}),"\n",(0,o.jsx)(s.h3,{id:"key-features",children:"Key features:"}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsx)(s.li,{children:"Can store data across different domains"}),"\n",(0,o.jsx)(s.li,{children:"Support expiration dates"}),"\n",(0,o.jsx)(s.li,{children:"Small storage size, typically restricted to 4 KB"}),"\n",(0,o.jsx)(s.li,{children:"Sent with every HTTP request"}),"\n",(0,o.jsx)(s.li,{children:"Can have attributes"}),"\n"]}),"\n",(0,o.jsx)(s.admonition,{title:"Cookie Expiration",type:"info",children:(0,o.jsxs)(s.p,{children:["By default, cookies in webforJ expire after 30 days. You can change this with the ",(0,o.jsx)(s.code,{children:"max-age"})," or ",(0,o.jsx)(s.code,{children:"expires"})," attributes."]})}),"\n",(0,o.jsx)(s.h3,{id:"using-cookies",children:"Using cookies"}),"\n",(0,o.jsxs)(s.p,{children:["The following code snippet demonstrates the use of the ",(0,o.jsx)(i.Z,{type:"foundation",location:"com/webforj/webstorage/CookieStorage",code:"true",children:"CookieStorage"})," object."]}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-java",children:'// Access cookie storage\nCookieStorage cookieStorage = CookieStorage.getCurrent();\n\n// Add a new cookie or update an existing cookie\ncookieStorage.add("username", "JohnDoe", "Max-Age=3600; Secure; HttpOnly");\n\n// Access a cookie with a given key\nString username = cookieStorage.get("username");\n\n// Remove a cookie with a given key\ncookieStorage.remove("username");\n'})}),"\n",(0,o.jsx)(s.admonition,{title:"Cookie Security",type:"info",children:(0,o.jsxs)(s.p,{children:["Certain cookie attributes, such as ",(0,o.jsx)(s.code,{children:"Secure"})," and ",(0,o.jsx)(s.code,{children:"SameSite=None"}),", require a secure context using HTTPS. These attributes ensure that cookies are only sent over secure connections, protecting them from being intercepted. For more information, see the ",(0,o.jsx)(s.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies#security",children:"MDN documentation on cookie security"}),"."]})}),"\n",(0,o.jsx)(s.h3,{id:"use-cases",children:"Use cases"}),"\n",(0,o.jsx)(s.p,{children:"The following use cases are well-suited for utilization of cookies:"}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.strong,{children:"User Authentication"}),": Store session tokens to keep users logged in."]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.strong,{children:"Preferences"}),": Save user preferences, such as theme settings or language."]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.strong,{children:"Tracking"}),": Collect information about user behavior for analytics."]}),"\n"]}),"\n",(0,o.jsx)(s.h2,{id:"session-storage",children:"Session storage"}),"\n",(0,o.jsx)(s.p,{children:"Session storage stores data for the duration of a page session. The data is accessible only within the same session and is cleared when the page or tab is closed. However, the data persists for reloads and restores. Session storage is best for storing temporary data during a single page session and maintaining state across different pages in the same session."}),"\n",(0,o.jsx)(s.h3,{id:"key-features-1",children:"Key features"}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsx)(s.li,{children:"Data isn't sent with every HTTP request"}),"\n",(0,o.jsx)(s.li,{children:"Larger storage size than cookies"}),"\n",(0,o.jsx)(s.li,{children:"Data is cleared when the page or tab is closed"}),"\n",(0,o.jsx)(s.li,{children:"Data isn't shared across tabs"}),"\n"]}),"\n",(0,o.jsx)(s.h3,{id:"using-session-storage-in-webforj",children:"Using session storage in webforJ"}),"\n",(0,o.jsxs)(s.p,{children:["The following code snippet demonstrates the use of the ",(0,o.jsx)(i.Z,{type:"foundation",location:"com/webforj/webstorage/SessionStorage",code:"true",children:"SessionStorage"})," object."]}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-java",children:'// Access session storage\nSessionStorage sessionStorage = SessionStorage.getCurrent();\n\n// Add a new or update an existing session storage pair\nsessionStorage.add("currentPage", "3");\n\n// Access a session storage pair with a given key\nString currentPage = sessionStorage.get("currentPage");\n\n// Remove a session storage pair with a given key\nsessionStorage.remove("currentPage");\n'})}),"\n",(0,o.jsx)(s.h3,{id:"use-cases-1",children:"Use cases"}),"\n",(0,o.jsx)(s.p,{children:"The following use cases are well-suited for utilization of session storage:"}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.strong,{children:"Temporary Data Storage"}),": Store data that only needs to persist while the user is on a particular page or session."]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.strong,{children:"Form Data"}),": Temporarily save form data for use within the session."]}),"\n"]}),"\n",(0,o.jsx)(s.h2,{id:"local-storage",children:"Local storage"}),"\n",(0,o.jsx)(s.p,{children:"Local storage stores data with no expiration date. It persists even after the browser is closed, and can be accessed whenever the user revisits the website. Local storage is best for storing user preferences or settings, caching data to improve performance, and saving app state across sessions."}),"\n",(0,o.jsx)(s.h3,{id:"key-features-2",children:"Key features"}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsx)(s.li,{children:"Data persists across sessions"}),"\n",(0,o.jsx)(s.li,{children:"Data isn't sent with every HTTP request."}),"\n",(0,o.jsx)(s.li,{children:"Larger storage size than cookies"}),"\n",(0,o.jsx)(s.li,{children:"Not suitable for sensitive data"}),"\n",(0,o.jsx)(s.li,{children:"You must manage data yourself, since the browser never automatically deletes it"}),"\n"]}),"\n",(0,o.jsx)(s.h3,{id:"using-local-storage-in-webforj",children:"Using local storage in webforj"}),"\n",(0,o.jsxs)(s.p,{children:["The following code snippet demonstrates the use of the ",(0,o.jsx)(i.Z,{type:"foundation",location:"com/webforj/webstorage/LocalStorage",code:"true",children:"LocalStorage"})," object."]}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-java",children:'// Access local storage\nLocalStorage localStorage = LocalStorage.getCurrent();\n\n// Add a new or update an existing local storage pair\nlocalStorage.add("theme", "dark");\n\n// Access a local storage pair with a given key\nString theme = localStorage.get("theme");\n\n// Remove a local storage pair with a given key\nlocalStorage.remove("theme");\n'})}),"\n",(0,o.jsx)(s.h3,{id:"use-cases-2",children:"Use cases"}),"\n",(0,o.jsx)(s.p,{children:"The following use cases are well-suited for utilization of local storage:"}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.strong,{children:"Persistent Data"}),": Store data that should be available across multiple sessions."]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.strong,{children:"Preferences"}),": Save user settings and preferences that persist over time."]}),"\n"]})]})}function g(e={}){const{wrapper:s}={...(0,r.a)(),...e.components};return s?(0,o.jsx)(s,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},6031:(e,s,t)=>{var o=t(4836);s.Z=void 0;var r=o(t(4938)),i=t(5893),n=(0,r.default)((0,i.jsx)("path",{d:"m19 1-5 5v11l5-4.5V1zM1 6v14.65c0 .25.25.5.5.5.1 0 .15-.05.25-.05C3.1 20.45 5.05 20 6.5 20c1.95 0 4.05.4 5.5 1.5V6c-1.45-1.1-3.55-1.5-5.5-1.5S2.45 4.9 1 6zm22 13.5V6c-.6-.45-1.25-.75-2-1v13.5c-1.1-.35-2.3-.5-3.5-.5-1.7 0-4.15.65-5.5 1.5v2c1.35-.85 3.8-1.5 5.5-1.5 1.65 0 3.35.3 4.75 1.05.1.05.15.05.25.05.25 0 .5-.25.5-.5v-1.1z"}),"AutoStories");s.Z=n},3273:(e,s,t)=>{t.d(s,{Z:()=>l});var o=t(7294),r=t(917),i=t(9112),n=t(8385),a=t(6031);var c=t(5944);function l(e){let{type:s,location:t,top:l,children:d,code:h,suffix:g}=e;const[u,j]=(0,o.useState)("");(0,o.useEffect)((()=>{g||(g=""),j("https://javadoc.io/doc/com.webforj/webforj-"+s+"/latest/"+t+".html"+g)}),[]);const p=r.iv`
    display: inline;

    ${l&&r.iv`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    margin-top: -33px;
    margin-bottom: 25px;
    `}
  `,x=r.iv`
  background-color: #0063CC;
  padding: 0 0 0 5px;
  :hover{
    color: white;
  }
  `;return(0,c.BX)(c.HY,{children:["true"===l&&(0,c.tZ)("div",{css:p,children:(0,c.tZ)(i.Z,{title:"JavaDoc",arrow:!0,children:(0,c.tZ)(n.Z,{css:x,label:"Java API",component:"a",href:u,icon:(0,c.tZ)(a.Z,{}),clickable:!0,color:"primary",target:"_blank"})})}),"true"!==l&&!h&&(0,c.tZ)("div",{css:p,children:(0,c.tZ)("a",{href:u,target:"_blank",children:d})}),"true"!==l&&h&&(0,c.tZ)("div",{css:p,children:(0,c.tZ)("code",{children:(0,c.tZ)("a",{href:u,target:"_blank",children:d})})})]})}}}]);