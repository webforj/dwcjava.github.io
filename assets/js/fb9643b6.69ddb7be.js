"use strict";(self.webpackChunkdwcj_documentation=self.webpackChunkdwcj_documentation||[]).push([[3205],{834:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>s,metadata:()=>r,toc:()=>l});var i=t(4848),o=t(8453);const s={sidebar_position:4,title:"Route Navigation"},a=void 0,r={id:"routing/route-navigation",title:"Route Navigation",description:"In webforJ, navigating between routes is the core mechanism for switching views and components based on user actions or URL changes. Navigation allows users to move seamlessly between different parts of the app without refreshing the page. This client-side navigation keeps the app responsive and smooth while preserving the app's state.",source:"@site/docs/routing/route-navigation.md",sourceDirName:"routing",slug:"/routing/route-navigation",permalink:"/docs/routing/route-navigation",draft:!1,unlisted:!1,editUrl:"https://github.com/webforj/webforj-docs/tree/website/docs/routing/route-navigation.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"Route Navigation"},sidebar:"documentationSidebar",previous:{title:"Defining Routes",permalink:"/docs/routing/defining-routes"},next:{title:"Route Patterns",permalink:"/docs/routing/route-patterns"}},c={},l=[{value:"Programmatic navigation",id:"programmatic-navigation",level:2},{value:"Navigation with parameters",id:"navigation-with-parameters",level:3},{value:"Created view instance",id:"created-view-instance",level:2},{value:"Navigation options",id:"navigation-options",level:2},{value:"Setting navigation options",id:"setting-navigation-options",level:3},{value:"Generating locations for views",id:"generating-locations-for-views",level:2}];function h(e){const n={a:"a",admonition:"admonition",br:"br",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"In webforJ, navigating between routes is the core mechanism for switching views and components based on user actions or URL changes. Navigation allows users to move seamlessly between different parts of the app without refreshing the page. This client-side navigation keeps the app responsive and smooth while preserving the app's state."}),"\n",(0,i.jsx)(n.h2,{id:"programmatic-navigation",children:"Programmatic navigation"}),"\n",(0,i.jsxs)(n.p,{children:["You can trigger navigation from anywhere in your app by using the ",(0,i.jsx)(n.code,{children:"Router"})," class. This allows dynamic changes in the displayed components based on events such as button clicks or other user interactions."]}),"\n",(0,i.jsx)(n.p,{children:"Here\u2019s an example of how to navigate to a specific route:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:'@Route(value = "dashboard")\npublic class DashboardView extends Composite<Div> {\n  // Component logic here\n}\n'})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:"// navigate to the view\nRouter.getCurrent().navigate(DashboardView.class);\n"})}),"\n",(0,i.jsxs)(n.p,{children:["In this example, navigating to ",(0,i.jsx)(n.code,{children:"DashboardView"})," component programmatically  causes the ",(0,i.jsx)(n.code,{children:"DashboardView"})," component to be rendered\nand the browser's URL to updated to ",(0,i.jsx)(n.code,{children:"/dashboard"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["It's also possible to navigate to the view by passing a new ",(0,i.jsx)(n.code,{children:"Location"})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:'Router.getCurrent().navigate(new Location("/dashboard"));\n'})}),"\n",(0,i.jsx)(n.admonition,{title:"Class vs. Location: Methods for View Routing",type:"tip",children:(0,i.jsxs)(n.p,{children:["When navigating between views, developers have two options: they can either pass the view or route class, allowing the router to automatically generate the URL and render the view, or pass the location directly. Both methods are valid, but ",(0,i.jsx)(n.strong,{children:"using the view class is the preferred approach"})," because it offers better flexibility for future changes. For instance, if you later decide to update the route, you only need to modify the ",(0,i.jsx)(n.code,{children:"@Route"})," annotation, without having to change any code that uses the view class for navigation."]})}),"\n",(0,i.jsx)(n.h3,{id:"navigation-with-parameters",children:"Navigation with parameters"}),"\n",(0,i.jsx)(n.p,{children:"When you need to pass parameters along with the route, webforJ allows you to embed parameters in the URL. Here\u2019s how you can navigate to a route with parameters:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:'@Route("user/:id")\npublic class UserProfileView extends Composite<Div> implements DidEnterObserver {\n  H1 title = new H1();\n\n  public UserProfileView() {\n    getBoundComponent().add(title);\n  }\n\n  public void setTile(String title) {\n    this.title.setText(title);\n  }\n\n  public String getTitle() {\n    return title.getText();\n  }\n\n  @Override\n  public void onDidEnter(DidEnterEvent event, ParametersBag parameters) {\n    String id = parameters.getAlpha("id").orElse("Unknown");\n    setTile(id);\n  }\n}\n'})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:'// navigate to view and pass the user id\nRouter.getCurrent().navigate(\n  UserProfileView.class,\n  ParametersBag.of("id=JohnDoe")\n);\n'})}),"\n",(0,i.jsxs)(n.p,{children:["This navigates to ",(0,i.jsx)(n.code,{children:"/user/JohnDoe"}),", where ",(0,i.jsx)(n.code,{children:"JohnDoe"})," might represent a user ID. The component for this route can then extract the parameter and use it accordingly."]}),"\n",(0,i.jsx)(n.h2,{id:"created-view-instance",children:"Created view instance"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"navigate"})," method accepts a Java ",(0,i.jsx)(n.code,{children:"Consumer"})," that's invoked once navigation is complete. The ",(0,i.jsx)(n.code,{children:"Consumer"})," receives the instance of the created view component, wrapped in a java ",(0,i.jsx)(n.code,{children:"Optional"}),", allowing the developer to interact with the view after a successful navigation."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:'Router.getCurrent().navigate(\n    UserProfileView.class,\n    ParametersBag.of("id=JohnDoe"), (component) -> {\n      component.ifPresent(view -> {\n        console().log("The new title is: " + view.getTitle());\n      });\n    });\n'})}),"\n",(0,i.jsx)(n.admonition,{title:"Null instances",type:"info",children:(0,i.jsxs)(n.p,{children:["The consumer receives a Java ",(0,i.jsx)(n.code,{children:"Optional"})," for the component because it might be ",(0,i.jsx)(n.code,{children:"null"}),", or not created for various reasons. For example, the component may not be rendered if the navigation observers veto the navigation and stop the process."]})}),"\n",(0,i.jsx)(n.h2,{id:"navigation-options",children:"Navigation options"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"NavigationOptions"})," class allows developers to fine-tune how navigation is handled within the app. By setting specific options, you can control the behavior of navigation, such as whether to update the browser's history, invoke lifecycle observers, or even fire navigation events."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:'NavigationOptions options = new NavigationOptions();\noptions.setUpdateHistory(false);\n\nRouter.getCurrent().navigate(\n  new Location("user/JohnDoe"), options);\n'})}),"\n",(0,i.jsx)(n.h3,{id:"setting-navigation-options",children:"Setting navigation options"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"NavigationOptions"})," class provides several methods for customizing navigation behavior. These include controlling how routes are handled, whether observers are notified, and how the browser's history is updated."]}),"\n",(0,i.jsxs)(n.p,{children:["Here are the main configuration options available within ",(0,i.jsx)(n.code,{children:"NavigationOptions"}),":"]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsxs)(n.strong,{children:["Navigation Type (",(0,i.jsx)(n.code,{children:"setNavigationType"}),")"]}),(0,i.jsx)(n.br,{}),"\n","This option defines whether the new route should be added to the browser's history or replace the current route."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"PUSH"})}),": Adds the new route to the history stack, preserving the current location."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"REPLACE"})}),": Replaces the current route in the history stack with the new location, preventing the back button from navigating to the previous route."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsxs)(n.strong,{children:["Fire Events (",(0,i.jsx)(n.code,{children:"setFireEvents"}),")"]}),(0,i.jsx)(n.br,{}),"\n","Determines whether navigation ",(0,i.jsx)(n.a,{href:"./navigation-lifecycle/navigation-events",children:"lifecycle events"})," should be fired during navigation. By default, this is set to ",(0,i.jsx)(n.code,{children:"true"}),", and events are fired. If set to ",(0,i.jsx)(n.code,{children:"false"}),", no events will be fired, which is useful for silent navigation."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsxs)(n.strong,{children:["Invoke Observers (",(0,i.jsx)(n.code,{children:"setInvokeObservers"}),")"]}),(0,i.jsx)(n.br,{}),"\n","This flag controls whether the navigation should trigger ",(0,i.jsx)(n.a,{href:"./navigation-lifecycle/observers",children:"observers"})," within the navigated components. Observers typically handle events like route entry or exit. Setting this to ",(0,i.jsx)(n.code,{children:"false"})," prevents observers from being invoked."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsxs)(n.strong,{children:["Update History (",(0,i.jsx)(n.code,{children:"setUpdateHistory"}),")"]}),(0,i.jsx)(n.br,{}),"\n","When set to ",(0,i.jsx)(n.code,{children:"false"}),", this option prevents the history location from being updated. This is useful when you want to change the view without affecting the browser\u2019s back or forward navigation. It only affects history management, not the component lifecycle or route handling."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsxs)(n.strong,{children:["State Object (",(0,i.jsx)(n.code,{children:"setState"}),")"]}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.a,{href:"./state-managmenet#saving-and-restoring-state-in-browser-history",children:"The state object"})," allows you to pass additional information when updating the browser\u2019s history. This object is stored in the browser's history state and can be used later for custom purposes, like saving the state of the app during navigation."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"generating-locations-for-views",children:"Generating locations for views"}),"\n",(0,i.jsx)(n.p,{children:"The router can generate the location for views based on the route pattern defined in the view. You can also provide additional parameters for dynamic and required segments in the URL. This can be useful when constructing links or sharing direct access points to specific views in the app."}),"\n",(0,i.jsxs)(n.p,{children:["Here\u2019s how to generate a ",(0,i.jsx)(n.code,{children:"Location"})," based on a view class and route parameters:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:'Class<UserProfileView> userProfileView = UserProfileView.class;\nParametersBag params = ParametersBag.of("id=JohnDoe");\n\nOptional<Location> location = Router.getCurrent().getLocation(userProfileView, params);\nconsole().log(location.get());\n'})}),"\n",(0,i.jsxs)(n.p,{children:["This generates a ",(0,i.jsx)(n.code,{children:"Location"})," object with the path ",(0,i.jsx)(n.code,{children:"/user/JohnDoe"}),", the complete URI as a string."]})]})}function d(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}}}]);