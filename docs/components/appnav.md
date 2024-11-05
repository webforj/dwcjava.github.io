---
title: AppNav
---

<DocChip chip="shadow" />

<DocChip chip="name" label="dwc-app-nav" />

<DocChip chip="name" label="dwc-app-nav-item" />

<JavadocLink type="appnav" location="com/webforj/component/appnav/AppNav" top='true'/> 

The `AppNav` component in webforJ serves as a structured navigation container, designed to organize and display a list of navigation items within an app. This component is particularly useful for creating sidebars or menus, where users can click to navigate between different sections of an app. 

## Basics

Each link or menu item in the navigation is represented by an `AppNavItem` which allows you to set a navigation path, add custom text, and include optional icons or other components as prefixes or suffixes. 

To create a basic AppNav structure, you initialize the AppNav component and then add individual AppNavItem objects to represent the navigation links. 

<ComponentDemo 
path='https://demo.webforj.com/webapp/controlsamples/appnavbasics?'  
javaE='https://raw.githubusercontent.com/webforj/webforj-docs-samples/refs/heads/main/src/main/java/com/webforj/samples/views/appnav/AppNavBasicsView.java'
height='200px'
/>

## Configuring paths and routing

The `AppNav` component's navigation feature relies on each `AppNavItem` being configured with a specific path or route, which enables it to link to different sections or views within an app. 

### Defining paths

Each `AppNavItem` requires a path or route that specifies where the navigation item will take users. This can be configured in two main ways:

- **Direct Path**: You can assign a direct URL or path to an `AppNavItem`. This is helpful for static routes or URLs.

```java
AppNavItem profileItem = new AppNavItem("Profile", "/profile");
appNav.addItem(profileItem);
```

- **Registered View Class**: Alternatively, if you have views registered with your app’s router, you can pass a class reference for the view. This approach provides flexibility, as it allows navigation to specific views without hardcoding URLs. The router automatically resolves the view’s path based on the registered configuration.

```java
AppNavItem settingsItem = new AppNavItem("Settings", SettingsView.class);
appNav.addItem(settingsItem);
```

:::caution Using registered view class
If the router isn't initialized or the view isn’t registered, attempting to set the path with a view class will throw an exception. 
:::

### Adding query parameters

For scenarios requiring more specific navigation, such as directing users to particular sections of a page, you can add query parameters to an `AppNavItem`. The `setQueryParameters()` method accepts a `ParametersBag` object, allowing you to define multiple key-value pairs. 

```java
ParametersBag params = new ParametersBag();
params.add("section", "overview");
profileItem.setQueryParameters(params);
```
For more details on retrieving query parameters in different views, refer to the [Retrieving query parameters](../routing/query-parameters) section.  


## Hierarchical navigation

The `AppNav` component supports hierarchical navigation, which is essential for building complex navigation structures with nested items. Each `AppNavItem` can contain sub-items, creating a structured menu with multiple layers.

To create a hierarchical structure, add sub-items to any `AppNavItem`. These sub-items appear as expandable sections within the parent item:

<ComponentDemo 
path='https://demo.webforj.com/webapp/controlsamples/appnavhierarchy?'  
javaE='https://raw.githubusercontent.com/webforj/webforj-docs-samples/refs/heads/main/src/main/java/com/webforj/samples/views/appnav/AppNavHierarchyView.java'
height='200px'
/>

## `AppNavLocationChangedEvent`

The `AppNav` component provides a way to react to navigation changes through event listeners. By using the `onLocationChanged()` method, you can execute code each time a user selects an `AppNavItem` and navigates within the app.

Here is how you can implement an event listener to respond to navigation actions within `AppNav`.

```java
appNav.onLocationChanged(event -> {
    System.out.println("User navigated to: " + event.getLocation().getPath());
});
```

## Setting navigation targets

The `AppNavItem` component provides the `setTarget()` method, which allows you to control the behavior of each navigation item when it's clicked. By default, items open in the current browsing context, but you can customize this with the `NavigationTarget` options:

- **SELF (Default)**: Opens in the current browsing context.
- **BLANK**: Opens the item in a new tab (or new window, based on browser settings).
- **PARENT**: Opens in the parent browsing context. If there’s no parent, it behaves like SELF.
- **TOP**: Opens in the top-level browsing context. If there’s no higher-level context, it also behaves like SELF.

```java
AppNavItem dashboardItem = new AppNavItem("Dashboard", "/dashboard");
dashboardItem.setTarget(AppNavItem.NavigationTarget.SELF); // Opens in the current view

AppNavItem helpItem = new AppNavItem("Help", "https://support.example.com");
helpItem.setTarget(AppNavItem.NavigationTarget.BLANK); // Opens in a new tab

AppNavItem parentItem = new AppNavItem("Parent View", "/parent");
parentItem.setTarget(AppNavItem.NavigationTarget.PARENT); // Opens in the parent context

AppNavItem topItem = new AppNavItem("Top View", "/top");
topItem.setTarget(AppNavItem.NavigationTarget.TOP); // Opens in the top-level context
```


## Automatic group expansion
With `setAutoOpen()`, the `AppNav` component will automatically expand groups of items when the user navigates. This behavior is helpful for hierarchical menus where you want to expose sub-items dynamically.

```java
appNav.setAutoOpen(true); // Automatically opens selected groups
```
## Styling

### Shadow Parts

These are the various parts of the [shadow DOM](../glossary#shadow-dom) for the `AppNavItem` component, which will be required when styling via CSS is desired.

<TableBuilder tag={require('@site/docs/components/_dwc_control_map.json').AppNavItem} table='parts' exclusions=''/>


### Reflected Attributes

The reflected attributes of a `AppNavItem` component will be shown as attributes in the rendered HTML element for the component in the DOM. This means that styling can be applied using these attributes.

<TableBuilder tag={require('@site/docs/components/_dwc_control_map.json').AppNavItem} table="reflects" />
