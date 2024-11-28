"use strict";(self.webpackChunkdwcj_documentation=self.webpackChunkdwcj_documentation||[]).push([[2239],{3330:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>t,toc:()=>c});const t=JSON.parse('{"id":"routing/navigation-lifecycle/observers","title":"Lifecycle Observers","description":"Observers allow components to react to lifecycle events by implementing interfaces for specific stages. This pattern ensures a clean separation of concerns and simplifies handling navigation logic.","source":"@site/docs/routing/navigation-lifecycle/observers.md","sourceDirName":"routing/navigation-lifecycle","slug":"/routing/navigation-lifecycle/observers","permalink":"/docs/routing/navigation-lifecycle/observers","draft":false,"unlisted":false,"editUrl":"https://github.com/webforj/webforj-docs/tree/website/docs/routing/navigation-lifecycle/observers.md","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_position":2,"title":"Lifecycle Observers"},"sidebar":"documentationSidebar","previous":{"title":"Navigation Lifecycle","permalink":"/docs/routing/navigation-lifecycle/overview"},"next":{"title":"Navigation Blocking","permalink":"/docs/routing/navigation-lifecycle/navigation-blocking"}}');var a=i(4848),r=i(8453);const s={sidebar_position:2,title:"Lifecycle Observers"},o=void 0,l={},c=[{value:"Available observers",id:"available-observers",level:2},{value:"Example: authentication with <code>WillEnterObserver</code>",id:"example-authentication-with-willenterobserver",level:2},{value:"Example: fetching data on route entry with <code>DidEnterObserver</code>",id:"example-fetching-data-on-route-entry-with-didenterobserver",level:2},{value:"Example: Handling unsaved changes with <code>WillLeaveObserver</code>",id:"example-handling-unsaved-changes-with-willleaveobserver",level:2},{value:"Example: Cleanup with <code>DidLeaveObserver</code>",id:"example-cleanup-with-didleaveobserver",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:"Observers allow components to react to lifecycle events by implementing interfaces for specific stages. This pattern ensures a clean separation of concerns and simplifies handling navigation logic."}),"\n",(0,a.jsx)(n.h2,{id:"available-observers",children:"Available observers"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:(0,a.jsx)(n.code,{children:"WillEnterObserver"})}),": Allows you to handle tasks before a route is entered, such as fetching necessary data or blocking navigation."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:(0,a.jsx)(n.code,{children:"DidEnterObserver"})}),": Ideal for handling actions after the component has been attached, such as rendering data or triggering animations."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:(0,a.jsx)(n.code,{children:"WillLeaveObserver"})}),": Provides a way to manage logic before a user leaves a route, such as checking for unsaved changes."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:(0,a.jsx)(n.code,{children:"DidLeaveObserver"})}),": Used for cleanup actions or other tasks that should run after a component is detached from the DOM."]}),"\n"]}),"\n",(0,a.jsxs)(n.h2,{id:"example-authentication-with-willenterobserver",children:["Example: authentication with ",(0,a.jsx)(n.code,{children:"WillEnterObserver"})]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:'@Route(value = "dashboard")\npublic class DashboardView extends Composite<Div> implements WillEnterObserver {\n\n  @Override\n  public void onWillEnter(WillEnterEvent event, ParametersBag parameters) {\n    boolean isAuthenticated = authService.isAuthenticated();\n    event.veto(!isAuthenticated);\n\n    if (!isAuthenticated) {\n      event.getRouter().navigate(LoginView.class);\n    }\n  }\n}\n'})}),"\n",(0,a.jsxs)(n.p,{children:["Here, ",(0,a.jsx)(n.code,{children:"onWillEnter"})," checks if the user is authenticated. If not, the navigation is vetoed, preventing the navigation from being complete and redirecting to the login page instead."]}),"\n",(0,a.jsx)(n.admonition,{title:"Example of Authenticated Routes - Not Production-Ready",type:"warning",children:(0,a.jsxs)(n.p,{children:["This previous is just an example of how to use authenticated routes.\nThis ",(0,a.jsx)(n.strong,{children:"Isn't"})," an example how you'd write a production-level authentication system.\nYou'll need to take the concepts and patterns used in this example and adapt then to work with your authentication flow/system for your app."]})}),"\n",(0,a.jsxs)(n.h2,{id:"example-fetching-data-on-route-entry-with-didenterobserver",children:["Example: fetching data on route entry with ",(0,a.jsx)(n.code,{children:"DidEnterObserver"})]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:'@Route(value = "profile")\npublic class ProfileView extends Composite<Div> implements DidEnterObserver {\n\n  @Override\n  public void onDidEnter(DidEnterEvent event, ParametersBag parameters) {\n    String userId = parameters.get("userId").orElseThrow();\n    UserService.fetchProfile(userId).thenAccept(\n        profile -> updateProfileUI(profile));\n  }\n\n  private void updateProfileUI(Profile profile) {\n    // Code to update the UI with profile data\n  }\n}\n'})}),"\n",(0,a.jsxs)(n.p,{children:["This example demonstrates using ",(0,a.jsx)(n.code,{children:"DidEnterObserver"})," to fetch and display profile data once the component is attached to the DOM."]}),"\n",(0,a.jsxs)(n.h2,{id:"example-handling-unsaved-changes-with-willleaveobserver",children:["Example: Handling unsaved changes with ",(0,a.jsx)(n.code,{children:"WillLeaveObserver"})]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:'@Route(value = "edit-profile")\npublic class EditProfileView extends Composite<Div> implements WillLeaveObserver {\n  private boolean hasUnsavedChanges = false;\n\n  public EditProfileView() {\n    // Logic to detect unsaved changes\n  }\n\n  @Override\n  public void onWillLeave(WillLeaveEvent event, ParametersBag parameters) {\n    event.veto(hasUnsavedChanges);\n\n    if(hasUnsavedChanges) {\n      ConfirmDialog.Result result = showConfirmDialog(\n          "There are unsaved changes. Do you want to discard or save them?",\n          "Unsaved Changes",\n          ConfirmDialog.OptionType.OK_CANCEL,\n          ConfirmDialog.MessageType.WARNING);\n    }\n  }\n}\n'})}),"\n",(0,a.jsxs)(n.p,{children:["In this example, ",(0,a.jsx)(n.code,{children:"onWillLeave"})," prompts the user with a confirmation dialog if there are unsaved changes, vetoing the navigation if the user chooses to stay."]}),"\n",(0,a.jsx)(n.admonition,{title:"Navigation Blocking and Veto Handling",type:"info",children:(0,a.jsxs)(n.p,{children:["For more information about blocking navigation, see ",(0,a.jsx)(n.a,{href:"./navigation-blocking",children:"Navigation Blocking and Veto Handling"})]})}),"\n",(0,a.jsxs)(n.h2,{id:"example-cleanup-with-didleaveobserver",children:["Example: Cleanup with ",(0,a.jsx)(n.code,{children:"DidLeaveObserver"})]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:'@Route(value = "notifications")\npublic class NotificationsView extends Composite<Div> implements DidLeaveObserver {\n\n  @Override\n  public void onDidLeave(DidLeaveEvent event, ParametersBag parameters) {\n    NotificationService.clearActiveNotifications();\n  }\n}\n'})}),"\n",(0,a.jsxs)(n.p,{children:["This example clears notifications after the user leaves the ",(0,a.jsx)(n.code,{children:"NotificationsView"}),", using the ",(0,a.jsx)(n.code,{children:"DidLeaveObserver"})," for cleanup."]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>s,x:()=>o});var t=i(6540);const a={},r=t.createContext(a);function s(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);