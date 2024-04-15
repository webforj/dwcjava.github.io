"use strict";(self.webpackChunkdwcj_documentation=self.webpackChunkdwcj_documentation||[]).push([[1817],{1554:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>m,frontMatter:()=>a,metadata:()=>c,toc:()=>h});var o=t(5893),s=t(1151),i=t(6957),r=t(3273);const a={sidebar_position:3,title:"Elements",slug:"element"},l=void 0,c={id:"ui/element",title:"Elements",description:"webforJ developers have the option of choosing not only from the rich library of components provided, but also integrating components from elsewhere. To facilitate this, the Element component can be used to simplify the integration of anything from simple HTML elements, to more complex custom web components.",source:"@site/docs/ui/element.md",sourceDirName:"ui",slug:"/ui/element",permalink:"/docs/ui/element",draft:!1,unlisted:!1,editUrl:"https://github.com/webforj/webforj-docs/tree/website/docs/ui/element.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Elements",slug:"element"},sidebar:"documentationSidebar",previous:{title:"Composite Components",permalink:"/docs/ui/composite"},next:{title:"Element Composite",permalink:"/docs/ui/element_composite"}},d={},h=[{value:"Creating a Web Element",id:"creating-a-web-element",level:2},{value:"Adding Events",id:"adding-events",level:2},{value:"Component Interaction",id:"component-interaction",level:2},{value:"Adding Child Components",id:"adding-child-components",level:3},{value:"Removing Components",id:"removing-components",level:3},{value:"Accessing Components",id:"accessing-components",level:3},{value:"Calling JavaScript Functions",id:"calling-javascript-functions",level:2},{value:"Passing Parameters",id:"passing-parameters",level:3},{value:"Executing JavaScript",id:"executing-javascript",level:2}];function u(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r.Z,{type:"foundation",location:"com/webforj/component/element/Element",top:"true"}),"\n",(0,o.jsxs)(n.p,{children:["webforJ developers have the option of choosing not only from the rich library of components provided, but also integrating components from elsewhere. To facilitate this, the ",(0,o.jsx)(n.code,{children:"Element"})," component can be used to simplify the integration of anything from simple HTML elements, to more complex custom web components."]}),"\n",(0,o.jsx)(n.admonition,{type:"important",children:(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"Element"})," component cannot be extended, and is not the base component for all components within webforJ. To read more about webforJ's component hierarchy, read ",(0,o.jsx)(n.a,{href:"/docs/architecture/controls-components",children:"this article"}),"."]})}),"\n",(0,o.jsx)(n.h2,{id:"creating-a-web-element",children:"Creating a Web Element"}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"Element"})," component has three constructors provided to quickly and efficiently create web elements in your webforJ program."]}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"Element()"})," : This parameterless constructor will create a ",(0,o.jsx)(n.code,{children:"Div"})," element that can be added to your application."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"Element(String node)"}),": This constructor takes a single ",(0,o.jsx)(n.code,{children:"String"})," argument. This argument should be the name of the HTML node you want to create, which will then create that desired element that can be added to your application."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"Element(String node, String html)"}),": Using this constructor allows you to specify the desired node name, as well as include HTML content to be included in the element."]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["The below example will create an HTML ",(0,o.jsx)(n.code,{children:"<input>"})," tag and give it some styling:"]}),"\n",(0,o.jsx)(i.Z,{path:"https://demo.webforj.com/webapp/controlsamples?class=demos.webcomponents.element.InputDemo",javaE:"https://raw.githubusercontent.com/webforj/ControlSamples/main/src/main/java/demos/webcomponents/element/InputDemo.java"}),"\n",(0,o.jsx)(n.h2,{id:"adding-events",children:"Adding Events"}),"\n",(0,o.jsxs)(n.p,{children:["In order to utilize events that may come with your element, you can use the ",(0,o.jsx)(n.code,{children:"Element"})," component's ",(0,o.jsx)(n.code,{children:"addEventListener"})," methods. Adding an event requires at least the type/name of the event the component expects, and a listener to be added to the event."]}),"\n",(0,o.jsxs)(n.p,{children:["There are also additional options to further customize events by using the ",(0,o.jsx)(n.a,{href:"#",children:"Event Options"})," configurations."]}),"\n",(0,o.jsx)(i.Z,{path:"https://demo.webforj.com/webapp/controlsamples?class=demos.webcomponents.element.InputEvent",javaE:"https://raw.githubusercontent.com/webforj/ControlSamples/main/src/main/java/demos/webcomponents/element/InputEvent.java",height:"175px"}),"\n",(0,o.jsx)(n.h2,{id:"component-interaction",children:"Component Interaction"}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"Element"})," component acts like a container for other components. It's provides a way to organize and retrieve information for child components, and offers a clear set of functions to add or remove these child components as needed."]}),"\n",(0,o.jsx)(n.h3,{id:"adding-child-components",children:"Adding Child Components"}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"Element"})," component supports the composition of child components. Developers can organize and manage complex UI structures by adding components as children to the ",(0,o.jsx)(n.code,{children:"Element"}),". Three methods exist to set content within the an ",(0,o.jsx)(n.code,{children:"Element"}),":"]}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:(0,o.jsx)(n.code,{children:"add(Component... components)"})}),": This method will allow one or multiple components to be added to an optional ",(0,o.jsx)(n.code,{children:"String"})," which designates a specified slot when used with a Web Component. Omitting the slot will add the component between the HTML tags."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:(0,o.jsx)(n.code,{children:"setHtml(String html)"})}),": This method take the ",(0,o.jsx)(n.code,{children:"String"})," passed to the method and inject it as HTML within the component. Depending on the ",(0,o.jsx)(n.code,{children:"Element"}),", this may be rendered in different ways."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:(0,o.jsx)(n.code,{children:"setText(String text)"})}),": This method behaves similarly to the ",(0,o.jsx)(n.code,{children:"setHtml()"})," method, but injects literal text into the ",(0,o.jsx)(n.code,{children:"Element"}),"."]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(i.Z,{path:"https://demo.webforj.com/webapp/controlsamples?class=demos.webcomponents.element.InputText",javaE:"https://raw.githubusercontent.com/webforj/ControlSamples/main/src/main/java/demos/webcomponents/element/InputText.java",height:"175px"}),"\n",(0,o.jsx)(n.admonition,{type:"tip",children:(0,o.jsxs)(n.p,{children:["Calling ",(0,o.jsx)(n.code,{children:"setHtml()"})," or ",(0,o.jsx)(n.code,{children:"setText()"})," will replace content currently contained between the element's opening and closing tags."]})}),"\n",(0,o.jsx)(n.h3,{id:"removing-components",children:"Removing Components"}),"\n",(0,o.jsxs)(n.p,{children:["In addition to adding components to an ",(0,o.jsx)(n.code,{children:"Element"}),", the following methods are implemented for removal of various child components:"]}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:(0,o.jsx)(n.code,{children:"remove(Component... components)"})}),": This method takes one or more components and will remove them as child components."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:(0,o.jsx)(n.code,{children:"removeAll()"})}),": This method will remove all child components from the ",(0,o.jsx)(n.code,{children:"Element"}),"."]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"accessing-components",children:"Accessing Components"}),"\n",(0,o.jsxs)(n.p,{children:["To access the various child components present within an ",(0,o.jsx)(n.code,{children:"Element"}),", or information regarding these components, the following methods are available:"]}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:(0,o.jsx)(n.code,{children:"getComponents()"})}),": This method returns a Java ",(0,o.jsx)(n.code,{children:"List"})," of all children of the ",(0,o.jsx)(n.code,{children:"Element"}),"."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:(0,o.jsx)(n.code,{children:"getComponents(String id)"})}),": This method is similar to the method above, but will take the server-side ID of a specific component and return it when found."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:(0,o.jsx)(n.code,{children:"getComponentCount()"})}),": Returns the number of child components present within the ",(0,o.jsx)(n.code,{children:"Element"}),"."]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"calling-javascript-functions",children:"Calling JavaScript Functions"}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"Element"})," component provides two API methods which allow for JavaScript functions to be called on HTML elements."]}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:(0,o.jsx)(n.code,{children:"callJsFunction(String functionName, Object... arguments)"})}),": This method takes a function name as a string, and optionally takes one or more Objects as parameters for the function. This method is executed synchronously, meaning that the ",(0,o.jsx)(n.strong,{children:"executing thread is blocked"})," until the JS method returns, and results in a round trip. The results of the function are returned as an ",(0,o.jsx)(n.code,{children:"Object"}),", which can be casted and used in Java."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:(0,o.jsx)(n.code,{children:"callJsFunctionAsync(String functionName, Object... arguments)"})}),": As with the previous method, a function name and optional arguments for the function can be passed. This method executes asynchronously and ",(0,o.jsx)(n.strong,{children:"does not block the executing thread"}),". It returns a ",(0,o.jsx)(n.a,{href:"#",children:(0,o.jsx)(n.code,{children:"PendingResult"})}),", which allows for further interaction with the function and its payload."]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"passing-parameters",children:"Passing Parameters"}),"\n",(0,o.jsx)(n.p,{children:"Arguments that are passed to these methods which are used in the execution of JS functions are serialized as a JSON array. There are two notable arguments types that are handled as follows:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"this"}),": Using the ",(0,o.jsx)(n.code,{children:"this"})," keyword will give the method a reference to the client-side version of the invoking component."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"Component"}),": Any Java component instances passed into one of the JsFunction methods will be replaced with the client-side version of the component."]}),"\n"]}),"\n",(0,o.jsx)(n.admonition,{type:"info",children:(0,o.jsxs)(n.p,{children:["Both synchronous and asynchronous function calling will wait to call a method until the ",(0,o.jsx)(n.code,{children:"Element"})," has been added to the DOM before executing a function, but ",(0,o.jsx)(n.code,{children:"callJsFunction()"})," will not wait for any ",(0,o.jsx)(n.code,{children:"component"})," arguments to attach, which can result in failure. Conversely, invoking ",(0,o.jsx)(n.code,{children:"callJsFunctionAsync()"})," may never complete if a component argument is never attached."]})}),"\n",(0,o.jsxs)(n.p,{children:["In the demo below, an event is added to an HTML ",(0,o.jsx)(n.code,{children:"Button"}),". This event is then fired programmatically by calling the ",(0,o.jsx)(n.code,{children:"callJsFunctionAsync()"})," method. The resulting ",(0,o.jsx)(n.a,{href:"#",children:(0,o.jsx)(n.code,{children:"PendingResult"})})," is then used to create another message box once the asynchronous function has been completed."]}),"\n",(0,o.jsx)(i.Z,{path:"https://demo.webforj.com/webapp/controlsamples?class=demos.webcomponents.element.InputFunction",javaE:"https://raw.githubusercontent.com/webforj/ControlSamples/main/src/main/java/demos/webcomponents/element/InputFunction.java",height:"175px"}),"\n",(0,o.jsx)(n.h2,{id:"executing-javascript",children:"Executing JavaScript"}),"\n",(0,o.jsxs)(n.p,{children:["In addition to executing JavaScript from the application level, it is also possible to execute JavaScript from the ",(0,o.jsx)(n.code,{children:"Element"})," level as well. Performing this execution at the ",(0,o.jsx)(n.code,{children:"Element"})," level allows the context of the HTML element to be included in the execution. This is a powerful tool that acts as a developer's conduit to interactive capabilities with client-side environments."]}),"\n",(0,o.jsx)(n.p,{children:"Similar to function execution, executing JavaScript can be done with synchronously or asynchronously with the following methods:"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:(0,o.jsx)(n.code,{children:"executeJs(String script)"})}),": This method takes ",(0,o.jsx)(n.code,{children:"String"}),", which will be executed as JavaScript code in the client. This script is executed synchronously, meaning that the ",(0,o.jsx)(n.strong,{children:"executing thread is blocked"})," until the JS execution returns and results in a round trip. The results of the function are returned as an ",(0,o.jsx)(n.code,{children:"Object"}),", which can be casted and used in Java."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:(0,o.jsx)(n.code,{children:"executeJsAsync(String script)"})}),": As with the previous method, a passed ",(0,o.jsx)(n.code,{children:"String"})," parameter will be executed as JavaScript code on the client. This method executes asynchronously and ",(0,o.jsx)(n.strong,{children:"does not block the executing thread"}),". It returns a ",(0,o.jsx)(n.a,{href:"#",children:(0,o.jsx)(n.code,{children:"PendingResult"})}),", which allows for further interaction with the function and its payload."]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.admonition,{type:"tip",children:(0,o.jsxs)(n.p,{children:["These methods have access to the ",(0,o.jsx)(n.code,{children:"component"})," keyword, which gives the JavaScript code access to the client-side instance of the component executing the JavaScript."]})})]})}function m(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}},6031:(e,n,t)=>{var o=t(4836);n.Z=void 0;var s=o(t(4938)),i=t(5893),r=(0,s.default)((0,i.jsx)("path",{d:"m19 1-5 5v11l5-4.5V1zM1 6v14.65c0 .25.25.5.5.5.1 0 .15-.05.25-.05C3.1 20.45 5.05 20 6.5 20c1.95 0 4.05.4 5.5 1.5V6c-1.45-1.1-3.55-1.5-5.5-1.5S2.45 4.9 1 6zm22 13.5V6c-.6-.45-1.25-.75-2-1v13.5c-1.1-.35-2.3-.5-3.5-.5-1.7 0-4.15.65-5.5 1.5v2c1.35-.85 3.8-1.5 5.5-1.5 1.65 0 3.35.3 4.75 1.05.1.05.15.05.25.05.25 0 .5-.25.5-.5v-1.1z"}),"AutoStories");n.Z=r},2610:(e,n,t)=>{var o=t(4836);n.Z=void 0;var s=o(t(4938)),i=t(5893),r=(0,s.default)((0,i.jsx)("path",{d:"M11 18c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zm-2-8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 4c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"DragIndicator");n.Z=r},5162:(e,n,t)=>{t.d(n,{Z:()=>r});t(7294);var o=t(6010);const s={tabItem:"tabItem_Ymn6"};var i=t(5893);function r(e){let{children:n,hidden:t,className:r}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,o.Z)(s.tabItem,r),hidden:t,children:n})}},4866:(e,n,t)=>{t.d(n,{Z:()=>w});var o=t(7294),s=t(6010),i=t(2466),r=t(6550),a=t(469),l=t(1980),c=t(7392),d=t(12);function h(e){return o.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,o.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:n,children:t}=e;return(0,o.useMemo)((()=>{const e=n??function(e){return h(e).map((e=>{let{props:{value:n,label:t,attributes:o,default:s}}=e;return{value:n,label:t,attributes:o,default:s}}))}(t);return function(e){const n=(0,c.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function m(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:t}=e;const s=(0,r.k6)(),i=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l._X)(i),(0,o.useCallback)((e=>{if(!i)return;const n=new URLSearchParams(s.location.search);n.set(i,e),s.replace({...s.location,search:n.toString()})}),[i,s])]}function g(e){const{defaultValue:n,queryString:t=!1,groupId:s}=e,i=u(e),[r,l]=(0,o.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const o=t.find((e=>e.default))??t[0];if(!o)throw new Error("Unexpected error: 0 tabValues");return o.value}({defaultValue:n,tabValues:i}))),[c,h]=p({queryString:t,groupId:s}),[g,x]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[s,i]=(0,d.Nk)(t);return[s,(0,o.useCallback)((e=>{t&&i.set(e)}),[t,i])]}({groupId:s}),b=(()=>{const e=c??g;return m({value:e,tabValues:i})?e:null})();(0,a.Z)((()=>{b&&l(b)}),[b]);return{selectedValue:r,selectValue:(0,o.useCallback)((e=>{if(!m({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);l(e),h(e),x(e)}),[h,x,i]),tabValues:i}}var x=t(2389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=t(5893);function f(e){let{className:n,block:t,selectedValue:o,selectValue:r,tabValues:a}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.o5)(),d=e=>{const n=e.currentTarget,t=l.indexOf(n),s=a[t].value;s!==o&&(c(n),r(s))},h=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;n=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;n=l[t]??l[l.length-1];break}}n?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":t},n),children:a.map((e=>{let{value:n,label:t,attributes:i}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:o===n?0:-1,"aria-selected":o===n,ref:e=>l.push(e),onKeyDown:h,onClick:d,...i,className:(0,s.Z)("tabs__item",b.tabItem,i?.className,{"tabs__item--active":o===n}),children:t??n},n)}))})}function A(e){let{lazy:n,children:t,selectedValue:s}=e;const i=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===s));return e?(0,o.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,o.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function j(e){const n=g(e);return(0,v.jsxs)("div",{className:(0,s.Z)("tabs-container",b.tabList),children:[(0,v.jsx)(f,{...e,...n}),(0,v.jsx)(A,{...e,...n})]})}function w(e){const n=(0,x.Z)();return(0,v.jsx)(j,{...e,children:h(e.children)},String(n))}},6957:(e,n,t)=>{t.d(n,{Z:()=>f});var o=t(7294),s=t(917),i=t(5697),r=t.n(i),a=t(4866),l=t(5162),c=t(4673),d=t(1750);const h=t.p+"assets/images/expand-ba3f00f73da43d91e5b17663c4a7d108.png",u="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPAAAADwCAYAAAA+VemSAAAABmJLR0QA/wD/AP+gvaeTAAAG/ElEQVR4nO3dTW7bRhgG4Ddu4bTHa72Ir+UbNKskm/YgvYJhGF61B2gcIEDdRSVAMGxLIueHQz4PMBtDGeoj9EIfxWEmAQAAAAAAAAAAAAAAAAAAAAAAACjnMsl1ks9JbpN8343b3d+ud68BFuYqyUOSpyPjYfdaYAEuktzkeHCfj5vdvwU6mhLewxADnVxlenj3QzsNHVwmucv8AN8ned/2rQPXmR/e/fjQ+L1TiB8xxvVLwbl+LTgXcIIS7fN+3DV+7xTyrvcbYLLHJD8Vmutbkp8LzUVDAjyup8Lz+SwMyDUwDEyAYWACDAMTYBiYAMPABBgGJsAwMAGGgQkwDEyAYWACDAMTYBiYAMPABBgGJsAwMAGGgQkwDEyAYWACDAMT4Dq2tkvg1uplxVrtEljqv5Tdj6nsisgqtN4lsHeA7YrIqszZJfBjzv9Q9wzwxe49Tz2WXRFZlBK7BJ4b4l4Bnhve/dBOswildgl8SvIpyY8nHrdHgC+S/FboePexKyILUHKXwHNC3DrAJcO7H3ZFpLsvKR+mU9rplgEu1TY/H1+OHBeqK7lL4DkhbhXgWuF9il0RWYDH1PlwP+XtdrpFgGu0zYfj8ZXjQjNfU+8D/laIawe4dnifkvzz+mmFNmq10IfjpXa6ZoBrts2HQwtNdzV+xDolxLUC3Cq8T/EjFgtQ+jbSW+Owna4R4BZt8+FwG4nuSi7kOCfEpedtHd77WMjBQpRYSnnOqNHitmqb98NSShZlzsMMWxseZmBxWv74M/KY8uQVNNH6OnK08SnJD1NPLrQgxMLL4IRYeBmcEAsvg9t6iIWX4W01xMLLamwtxMLL6mzlPrH7vKzW2r+JffOyemsNsfCyGWsLsfCyOWsJsfCyWaOHWHjZvFFDLLywM9otJreK4JlRQiy88Iqlh1h44YilXhO75oUTLS3EwgtnWko7rW2GiXqHWHhhpl4hFl4opPU1sWteKKzVN7FvXqikdoiFFyqr1U5rm6GR0iEWXmisVDutbYZO5oZYeKGzi0zb2vQmwguLcZXkIceD+xCba8MiXSa5TvI5yW2S77txu/vb9e41AAAAAAAAAAAAwCK9tBTw1MX5S1oyqA51bM6pi/FPHb0W7atDHZsy9XG4U0erx+bUoY5NqnmSD0+2OtQxYh2LdpX6J3k/arY96lDH5lwmuUu7E32f5L061DFIHYt3nXYneT8+qEMdg9Rxkp4X4b90OOavFeZUx3TqGFjLNmc/7tShjkHqOMm7XgdO8pjkp8bH/Jbk58JzqmM6dczUs4V+6nDMfyvMqY7p1DFTzwD/1eGYf1eYUx3TqWOmngH+cyXHVMeyjrmWOk7SM8B/dDjm7xXmVMd06hjYWm64q0Mdm1zIkaxnyZs61LFZa1l0rg51bNJaHvtShzo2bS0PXqtDHZu1lv/6RB3qAAAAAAAAAAAAAJp7acmgpYAwgFMX7VuMDwsy9bE5j8NBZxdJPmb6o3EfI8TQxdzwCjF0cpHkt5R7SP1Tkh9bFgBbVTq8QgyNlGqbtdPQWO3wCjFUUqtt1k5DZa3DK8RQSKu2WTsNhfUOrxDDRL3aZu00zLS08AoxnGgpbbN2Gs609PAKMbxilPAKMTyz1GveY8M1MZs3aniFmM0bPbxCzGatJbxCzOasLbxCzGasNbxCzOqNdqto6nCLidVZ+zevb2JWa2vhFWJWY6vhFWKGt/XwCjHDEl4hZlDCK8QMSniFmEFt5T7v3OE+MYs0ZYvPrY6biecYqrhK+2+xEeZ8a9hknEW4THKXdh/8T0l+qDBv6+v3+yTvzz7bUNh12oc3FeZO2of4wzknGmr4kjYf9uc//tQIcNL2x7gvJ55jqKZF+/zSL7e1Apy0C/Hd0bMLlT2m7of8sG0+VDPASZt2+vH10wptfE378KbCsV5SO8T/vHJcaKZWC31swUOLACd122ktNN3V+BHrlNVKrQKc1AuxH7HorvRtpLfa5kMtA5zUaafdRqK7kgs5Tg1vCh3vnAAnZUN8Hws5WIgSSynPXeTfI8BJuXbaUkoWZc7DDFOe0OkV4GR+iD3MwOJcZFqIbzLt8bqeAU7a1wtNXCV5yPEP8kPmtZG9A7zXql5o5jL//zr9Ocltku+7cbv72/XuNXMsJcBJm3p5wbveb4DJ5obuOZ+FAbkWgYEJMAxMgGFgAgwDE2AYmADDwAQYBibAMDABhoEJMAxMgGFgAgwDE2AYmADDwAQYBibAMDABhoEJMAxMgGFgAjyukltzfi04Fw0J8Lj+KjjX3wXnoiEBHtefC52LhgR4XH8UnOv3gnMBJyi1K+J97BIIXZTYFdF2J9DRnF0R7RIIndklEFbALoEwOLsEAgAAAAAAAAAAAAAAAAAAAAAAAE39B2tV13Hdy+hQAAAAAElFTkSuQmCC",m="data:image/png;base64,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";var p=t(2949),g=t(2610),x=t(5944);function b(e){let{collapse:n,setCollapse:t}=e;b.propTypes={collapse:r().bool.isRequired,setCollapse:r().func.isRequired};const o=s.iv`
    display: flex;
    justify-content: end;
    align-items: flex-end;
    background-color: transparent;
    margin-bottom: -10px;
  `,i=s.iv`
    cursor: pointer;
    z-index: 10;
    height: 35px;
    width: 35px;
    border: none;
    background-color: none;
    justify-self: flex-end;
    background-color: transparent;
    margin-right: 5px;
    margin-bottom: -50px !important;
  `,a=s.iv`
    filter: invert(var(--inversion-percentage));
  `;return(0,x.tZ)("div",{css:o,children:(0,x.tZ)("button",{css:i,onClick:()=>{t(!n)},children:n?(0,x.tZ)("img",{alt:"collapse_button",css:a,src:h,className:"icon-tabler-arrow-bar-up"}):(0,x.tZ)("img",{css:a,src:u,className:"icon-tabler-arrow-bar-down"})})})}function v(e){let{url:n}=e;const t=s.iv`
    position: relative;
    cursor: pointer;
    z-index: 10;
    height: 35px;
    width: 35px;
    border: none;
    justify-self: flex-end;
    margin-top: -5px;
    margin-bottom: -20px;
    background-color: transparent;
    margin-right: 12px;
  `,o=s.iv`
    filter: invert(var(--inversion-percentage));
    ::before {
      mix-blend-mode: lighten;
      opacity: 0.5;
    }
  `;return(0,x.tZ)("button",{css:t,onClick:()=>{window.open(n,"_blank")},children:(0,x.tZ)("img",{css:o,src:m})})}function f(e){let{path:n,javaC:t,javaE:i,urls:h,cssURL:u,javaHighlight:m,height:A,frame:j,tabs:w}=e;f.propTypes={path:r().string.isRequired,javaC:r().string,javaE:r().string,urls:r().arrayOf(r().string),cssURL:r().string,javaHighlight:r().string,height:r().string,frame:r().string,tabs:r().arrayOf(r().string)};const[y,S]=(0,o.useState)(""),[E,Z]=(0,o.useState)(""),[C,k]=(0,o.useState)({}),[D,B]=(0,o.useState)(""),[T,J]=(0,o.useState)(!(!t||!i)),[L,M]=(0,o.useState)(!1),[H,O]=(0,o.useState)({}),[F,z]=(0,o.useState)(!1),[N,I]=(0,o.useState)(0),[V,X]=(0,o.useState)(0),[G,Y]=(0,o.useState)(25),[P,R]=(0,o.useState)(25),[W,q]=(0,o.useState)(0),[U,K]=(0,o.useState)(!1),Q=(0,o.useRef)(null),_=(0,o.useRef)(null);function $(e,n,t){return(0,x.tZ)(d.Z,{css:n,className:"codeDemoBlock",language:"java",showLineNumbers:!0,metastring:t,children:e.code})}(0,o.useEffect)((()=>{i&&fetch(i).then((e=>e.text())).then((e=>{Z(e);const n=new URL(i).pathname.split("/"),t=n[n.length-1];O((e=>({...e,javaFile:t})))})),t&&fetch(t).then((e=>e.text())).then((e=>{S(e)})),u&&fetch(u).then((e=>e.text())).then((e=>{B(e);const n=new URL(u).pathname.split("/"),t=n[n.length-1];O((e=>({...e,cssFile:t})))})),h&&h.forEach((function(e){const n=new URL(e),t=n.pathname.split("/"),o=t[t.length-1];fetch(e).then((e=>e.text())).then((e=>{!function(e,n){k((t=>({...t,[e]:{fileName:e,code:n}})))}(o,e)}))})),q(Q.current?Q.current.offsetWidth:0)}),[]);const ee=()=>{z(!1)},ne=e=>{if(F){const n=e.clientX-N;V+n>W/3&&(Q.current.style.width=`${V+n}px`,_.current.style.right=(G-n<25?25:G-n)+"px",R(G-n<25?25:G-n))}},te=s.iv`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-bottom: 16px;
    background-color: var(--code-display-color-background);
  `,oe=s.iv`
    width: 100%;
    border: 1px solid var(--ifm-toc-border-color);
    border-right: none;
    background-color: transparent;
    display: flex;
    position: relative;
  `,se=s.iv`
    min-height: 100px;
    height: 100%;
    width: 100%;
    height: ${A||"100%"};
    pointer-events: ${F?"none":"auto"};
  `,ie=s.iv`
    display: flex;
    justify-content: flex-end;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
    ${L&&"opacity: 1;"};
    margin: 10px 0 0 0;
    position: absolute;
    right: 25px;
  `,re=s.iv`
    display: flex;
    align-items: center;
    cursor: ew-resize;
    border-left: 1px solid var(--ifm-toc-border-color);
    border-right: 1px solid var(--ifm-toc-border-color);
    background-color: var(--ifm-background-color);
  `,ae=s.iv`
    box-shadow: none;
    background-color: var(--ifm-background-color);
    margin: 0px;
    padding: 0px;
    border: ${"hidden"==j?"none":"1px solid var(--ifm-toc-border-color)"};
    border-top: none;
    border-radius: 0px;
    position: relative;

    div {
      border-color: var(--ifm-toc-border-color);
      padding: 2px 0px 0px 0px;
      margin: 0px;
    }

    > div:first-of-type {
      border: ${"hidden"==j?"1px solid var(--ifm-toc-border-color)":"none"};
      border-top: none;
    }

    summary {
      display: flex;
      width: 100%;
      justify-content: center;
      margin: 10px 0;
      font-weight: bold;
      ::before {
        left: auto;
        margin-left: -100px;
        --docusaurus-details-decoration-color: var(--ifm-color-primary);
      }
    }
    .margin-top--md {
      margin-top: 0px !important;
    }
    ul {
      margin: -4px 0px !important;
    }
  `,le=s.iv`
    li[aria-selected="true"] {
      border-color: var(--ifm-color-primary);
    }

    .tabs__item {
      padding: 5px 20px -2px 20px;
      border-radius: 0px;
    }
  `,ce=s.iv`
    border-radius: 0px;
    box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 4px 0px inset;
  `;return(0,x.BX)("div",{css:te,onMouseUp:ee,onMouseLeave:ee,onMouseMove:ne,children:["hidden"!=j?(0,x.BX)("div",{onMouseEnter:()=>{M(!0)},onMouseLeave:()=>M(!1),css:oe,children:[(0,x.tZ)("iframe",{onMouseUp:ee,loading:"lazy",src:n+"&__theme__="+(0,p.I)().colorMode,css:se,ref:Q,onMouseMove:ne}),(0,x.tZ)("div",{css:ie,ref:_,children:(0,x.tZ)(v,{url:n})}),(0,x.tZ)("div",{css:re,onMouseDown:e=>{e.preventDefault(),z(!0),I(e.clientX),X(Q.current?Q.current.offsetWidth:0),Y(P)},children:(0,x.tZ)(g.Z,{})})]}):null,(0,x.BX)(c.Z,{css:ae,summary:(0,x.tZ)("summary",{onClick:()=>K(!U),children:U?"Hide Code":"Show Code"}),children:[t&&i?(0,x.tZ)(b,{collapse:T,setCollapse:J}):null,u?(0,x.BX)(a.Z,{css:le,children:[(0,x.tZ)(l.Z,{value:w?w[0]:"Java",label:w?w[0]:H.javaFile,default:!0,children:(0,x.tZ)(d.Z,{css:ce,className:"codeDemoBlock",language:"java",showLineNumbers:!0,metastring:m,children:T?y:E})}),Object.keys(C).map(((e,n)=>(0,x.tZ)(l.Z,{value:e,label:e,children:$(C[e],ce,m)},"tab"+n))),(0,x.tZ)(l.Z,{value:w?w[1]:"CSS",label:w?w[1]:H.cssFile,children:(0,x.tZ)(d.Z,{css:ce,className:"codeDemoBlock",language:"css",showLineNumbers:!0,children:D})})]}):(0,x.BX)(a.Z,{css:le,children:[(0,x.tZ)(l.Z,{value:w?w[0]:"Java",label:w?w[0]:H.javaFile,default:!0,children:(0,x.tZ)(d.Z,{css:ce,className:"codeDemoBlock",language:"java",showLineNumbers:!0,metastring:m,children:T?y:E})}),Object.keys(C).map(((e,n)=>(0,x.tZ)(l.Z,{value:e,label:e,children:$(C[e],ce,m)},"tab"+n)))]})]})]})}},3273:(e,n,t)=>{t.d(n,{Z:()=>c});var o=t(7294),s=t(917),i=t(8230),r=t(4387),a=t(6031);var l=t(5944);function c(e){let{type:n,location:t,top:c,children:d,code:h,suffix:u}=e;const[m,p]=(0,o.useState)("");(0,o.useEffect)((()=>{u||(u=""),p("https://javadoc.io/doc/com.webforj/webforj-"+n+"/latest/"+t+".html"+u)}),[]);const g=s.iv`
    display: inline;

    ${c&&s.iv`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    margin-top: -33px;
    margin-bottom: 25px;
    `}
  `,x=s.iv`
  background-color: #0063CC;
  padding: 0 0 0 5px;
  :hover{
    color: white;
  }
  `;return(0,l.BX)(l.HY,{children:["true"===c&&(0,l.tZ)("div",{css:g,children:(0,l.tZ)(i.Z,{title:"JavaDoc",arrow:!0,children:(0,l.tZ)(r.Z,{css:x,label:"Java API",component:"a",href:m,icon:(0,l.tZ)(a.Z,{}),clickable:!0,color:"primary",target:"_blank"})})}),"true"!==c&&!h&&(0,l.tZ)("div",{css:g,children:(0,l.tZ)("a",{href:m,target:"_blank",children:d})}),"true"!==c&&h&&(0,l.tZ)("div",{css:g,children:(0,l.tZ)("code",{children:(0,l.tZ)("a",{href:m,target:"_blank",children:d})})})]})}},1415:(e,n,t)=>{t.d(n,{Z:()=>i});t(7294);var o=t(8397),s=t(5893);function i(e){return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(o.Z,{...e})})}}}]);