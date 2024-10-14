"use strict";(self.webpackChunkdwcj_documentation=self.webpackChunkdwcj_documentation||[]).push([[5829],{1051:(e,r,i)=>{i.r(r),i.d(r,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>s,metadata:()=>o,toc:()=>d});var t=i(4848),n=i(8453);const s={sidebar_position:11,title:"Routes Registration"},a=void 0,o={id:"routing/routes-registration",title:"Routes Registration",description:"In addition to registering routes using the @Route annotations, it's possible to dynamically register, update, or remove routes at runtime based on app logic, user roles, or other conditions. This flexibility enables you to manage navigation more dynamically, rather than statically defining routes at compile time.",source:"@site/docs/routing/routes-registration.md",sourceDirName:"routing",slug:"/routing/routes-registration",permalink:"/docs/routing/routes-registration",draft:!1,unlisted:!1,editUrl:"https://github.com/webforj/webforj-docs/tree/website/docs/routing/routes-registration.md",tags:[],version:"current",sidebarPosition:11,frontMatter:{sidebar_position:11,title:"Routes Registration"},sidebar:"documentationSidebar",previous:{title:"Navigational Frame Titles",permalink:"/docs/routing/navigational-frame-titles"},next:{title:"Building UI",permalink:"/docs/building-ui/overview"}},l={},d=[{value:"Registering routes dynamically",id:"registering-routes-dynamically",level:2},{value:"Example: Registering a dynamic route",id:"example-registering-a-dynamic-route",level:3},{value:"Conditional route registration",id:"conditional-route-registration",level:2},{value:"Example: Conditional registration based on user role",id:"example-conditional-registration-based-on-user-role",level:3},{value:"Removing routes",id:"removing-routes",level:2},{value:"Example: Removing a registered route",id:"example-removing-a-registered-route",level:3},{value:"Registering Routes at app startup",id:"registering-routes-at-app-startup",level:2},{value:"Example: Registering routes during app startup",id:"example-registering-routes-during-app-startup",level:3},{value:"Registering <code>@Route</code> annotated components dynamically",id:"registering-route-annotated-components-dynamically",level:2},{value:"Example: Registering an <code>@Route</code> annotated component",id:"example-registering-an-route-annotated-component",level:3},{value:"Registering routes from an entire package",id:"registering-routes-from-an-entire-package",level:2},{value:"Example: Registering all routes from a package",id:"example-registering-all-routes-from-a-package",level:3},{value:"Retrieving registered routes",id:"retrieving-registered-routes",level:2},{value:"Example: Retrieving and displaying all registered routes",id:"example-retrieving-and-displaying-all-registered-routes",level:3},{value:"Managing route aliases dynamically",id:"managing-route-aliases-dynamically",level:2},{value:"Example: Registering route aliases dynamically",id:"example-registering-route-aliases-dynamically",level:3}];function g(e){const r={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,n.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r.p,{children:["In addition to ",(0,t.jsxs)(r.a,{href:"./defining-routes",children:["registering routes using the ",(0,t.jsx)(r.code,{children:"@Route"})," annotations"]}),", it's possible to dynamically register, update, or remove routes at runtime based on app logic, user roles, or other conditions. This flexibility enables you to manage navigation more dynamically, rather than statically defining routes at compile time."]}),"\n",(0,t.jsx)(r.h2,{id:"registering-routes-dynamically",children:"Registering routes dynamically"}),"\n",(0,t.jsxs)(r.p,{children:["You can register a route dynamically using the ",(0,t.jsx)(r.code,{children:"RouteRegistry"})," class, which is accessible via the ",(0,t.jsx)(r.code,{children:"Router"}),". This allows you to add new routes during runtime, enabling flexible navigation."]}),"\n",(0,t.jsx)(r.h3,{id:"example-registering-a-dynamic-route",children:"Example: Registering a dynamic route"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-java",children:'Router router = Router.getCurrent();\nRouteRegistry registry = router.getRegistry();\n\n// Register the settings route dynamically\nregistry.register("/settings", SettingsView.class);\n\n// Navigate to the settings view\nrouter.navigate(SettingsView.class);\n'})}),"\n",(0,t.jsxs)(r.p,{children:["In this example, the ",(0,t.jsx)(r.code,{children:"/settings"})," route is dynamically registered, and the app navigates to the newly registered view."]}),"\n",(0,t.jsx)(r.h2,{id:"conditional-route-registration",children:"Conditional route registration"}),"\n",(0,t.jsx)(r.p,{children:"Often, routes need to be added or removed based on specific conditions such as user roles or the app's state. With dynamic routing, you can register or unregister routes conditionally at runtime."}),"\n",(0,t.jsx)(r.h3,{id:"example-conditional-registration-based-on-user-role",children:"Example: Conditional registration based on user role"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-java",children:'Router router = Router.getCurrent();\nRouteRegistry registry = router.getRegistry();\n\n// Check user role and register appropriate routes\nif (user.hasRole("editor")) {\n    registry.register("/editor/dashboard", EditorDashboardView.class);\n} else if (user.hasRole("viewer")) {\n    registry.register("/viewer/dashboard", ViewerDashboardView.class);\n}\n\n// Navigate to the appropriate dashboard\nif (user.hasRole("editor")) {\n    router.navigate(EditorDashboardView.class);\n} else if (user.hasRole("viewer")) {\n    router.navigate(ViewerDashboardView.class);\n}\n'})}),"\n",(0,t.jsx)(r.p,{children:"In this example:"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:["The ",(0,t.jsx)(r.code,{children:"/editor/dashboard"})," or ",(0,t.jsx)(r.code,{children:"/viewer/dashboard"})," route is dynamically registered based on the user's role."]}),"\n",(0,t.jsx)(r.li,{children:"The app navigates to the appropriate dashboard based on the user's access rights."}),"\n"]}),"\n",(0,t.jsx)(r.h2,{id:"removing-routes",children:"Removing routes"}),"\n",(0,t.jsx)(r.p,{children:"Just as routes can be added dynamically, they can also be removed at runtime when they're no longer needed, or when the app\u2019s context changes."}),"\n",(0,t.jsx)(r.h3,{id:"example-removing-a-registered-route",children:"Example: Removing a registered route"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-java",children:'Router router = Router.getCurrent();\nRouteRegistry registry = router.getRegistry();\n\n// Remove the route for the settings view\nregistry.unregister("/settings");\n\n// Optionally, remove by component class\nregistry.unregister(SettingsView.class);\n'})}),"\n",(0,t.jsxs)(r.p,{children:["In this example, the ",(0,t.jsx)(r.code,{children:"/settings"})," route is removed dynamically when it's no longer required."]}),"\n",(0,t.jsx)(r.h2,{id:"registering-routes-at-app-startup",children:"Registering Routes at app startup"}),"\n",(0,t.jsx)(r.p,{children:"You can register dynamic routes during app initialization, allowing certain views to be available based on the environment or configuration at startup."}),"\n",(0,t.jsx)(r.h3,{id:"example-registering-routes-during-app-startup",children:"Example: Registering routes during app startup"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-java",children:'@Routify\npublic class Application extends App {\n\n  @Override\n  protected void onWillRun() {\n    // Register a debug view only in development mode\n    if (Environment.getCurrent().isDebug()) {\n      Router router = Router.getCurrent();\n      RouteRegistry registry = router.getRegistry();\n\n      registry.register("/debug", DebugView.class);\n    }\n  }\n}\n'})}),"\n",(0,t.jsx)(r.p,{children:"In this example:"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:["A ",(0,t.jsx)(r.code,{children:"DebugView"})," is dynamically registered during app startup, but only if the app is running in development mode."]}),"\n"]}),"\n",(0,t.jsxs)(r.h2,{id:"registering-route-annotated-components-dynamically",children:["Registering ",(0,t.jsx)(r.code,{children:"@Route"})," annotated components dynamically"]}),"\n",(0,t.jsxs)(r.p,{children:["In addition to manually defining routes, it's possible to dynamically register components already annotated with ",(0,t.jsx)(r.code,{children:"@Route"}),". This is useful when you want to leverage pre-annotated classes but register them dynamically based on app logic."]}),"\n",(0,t.jsxs)(r.h3,{id:"example-registering-an-route-annotated-component",children:["Example: Registering an ",(0,t.jsx)(r.code,{children:"@Route"})," annotated component"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-java",children:'@Route("profile")\npublic class ProfileView extends Composite<Div> {\n    // Profile view logic\n}\n\nRouter router = Router.getCurrent();\nRouteRegistry registry = router.getRegistry();\n\n// Dynamically register the ProfileView with its @Route annotation\nregistry.register(ProfileView.class);\n\n// Navigate to the ProfileView\nrouter.navigate(ProfileView.class);\n'})}),"\n",(0,t.jsx)(r.p,{children:"In this example:"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:["The ",(0,t.jsx)(r.code,{children:"ProfileView"})," class is annotated with ",(0,t.jsx)(r.code,{children:'@Route("profile")'}),"."]}),"\n",(0,t.jsxs)(r.li,{children:["The route is dynamically registered at runtime using ",(0,t.jsx)(r.code,{children:"registry.register(ProfileView.class)"}),"."]}),"\n"]}),"\n",(0,t.jsx)(r.h2,{id:"registering-routes-from-an-entire-package",children:"Registering routes from an entire package"}),"\n",(0,t.jsxs)(r.p,{children:["If your app has a large number of routes organized within a package, you can register all ",(0,t.jsx)(r.code,{children:"@Route"}),"-annotated components from the package dynamically."]}),"\n",(0,t.jsx)(r.h3,{id:"example-registering-all-routes-from-a-package",children:"Example: Registering all routes from a package"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-java",children:'Router router = Router.getCurrent();\nRouteRegistry registry = router.getRegistry();\n\n// Register all routes within the "com.myapp.admin" package\nRouteRegistry.ofPackage(new String[] { "com.myapp.admin" }, registry);\n'})}),"\n",(0,t.jsx)(r.p,{children:"In this example:"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:["The ",(0,t.jsx)(r.code,{children:"ofPackage"})," method scans the ",(0,t.jsx)(r.code,{children:"com.myapp.admin"})," package and registers all classes annotated with ",(0,t.jsx)(r.code,{children:"@Route"}),"."]}),"\n",(0,t.jsx)(r.li,{children:"This is particularly useful for large applications with numerous routes organized by packages."}),"\n"]}),"\n",(0,t.jsx)(r.h2,{id:"retrieving-registered-routes",children:"Retrieving registered routes"}),"\n",(0,t.jsxs)(r.p,{children:["To retrieve a list of all dynamically registered routes, use the ",(0,t.jsx)(r.code,{children:"RouteRegistry"})," class. This is useful when you need to programmatically manage or display available routes."]}),"\n",(0,t.jsx)(r.h3,{id:"example-retrieving-and-displaying-all-registered-routes",children:"Example: Retrieving and displaying all registered routes"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-java",children:'Router router = Router.getCurrent();\nRouteRegistry registry = router.getRegistry();\n\nList<RouteEntry> routes = registry.getAvailableRouteEntires();\nroutes.forEach(route -> console().log("Path: " + route.getPath()));\n'})}),"\n",(0,t.jsx)(r.p,{children:"In this example, the app retrieves all currently registered routes and prints their paths."}),"\n",(0,t.jsx)(r.h2,{id:"managing-route-aliases-dynamically",children:"Managing route aliases dynamically"}),"\n",(0,t.jsx)(r.p,{children:"webforJ allows you to register multiple aliases for a single view. This means users can access the same view using different URL paths."}),"\n",(0,t.jsx)(r.h3,{id:"example-registering-route-aliases-dynamically",children:"Example: Registering route aliases dynamically"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-java",children:'Router router = Router.getCurrent();\nRouteRegistry registry = router.getRegistry();\n\n// Register a primary route\nregistry.register("/contact", ContactView.class);\n\n// Register aliases for the contact view\nregistry.register("/support", ContactView.class);\nregistry.register("/help", ContactView.class);\n'})}),"\n",(0,t.jsxs)(r.p,{children:["In this example, the ",(0,t.jsx)(r.code,{children:"ContactView"})," is accessible via three different paths: ",(0,t.jsx)(r.code,{children:"/contact"}),", ",(0,t.jsx)(r.code,{children:"/support"}),", and ",(0,t.jsx)(r.code,{children:"/help"}),"."]})]})}function u(e={}){const{wrapper:r}={...(0,n.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(g,{...e})}):g(e)}},8453:(e,r,i)=>{i.d(r,{R:()=>a,x:()=>o});var t=i(6540);const n={},s=t.createContext(n);function a(e){const r=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),t.createElement(s.Provider,{value:r},e.children)}}}]);