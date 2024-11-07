---
title: Toolbar
---

<DocChip chip="shadow" />
<DocChip chip="name" label="dwc-toolbar" />
<JavadocLink type="foundation" location="com/webforj/component/layout/toolbar/Toolbar" top='true'/>

Toolbars are a fundamental part of modern web apps, offering users quick access to core actions and navigation elements. Toolbars are well-suited for managing page controls and housing key functionalities like search and notifications.
The `Toolbar` is a horizontal container component that can hold a set of action buttons, icons, or other controls, typically used for performing tasks related to the current context.

:::note
For sectioned content, like a document viewer, consider using the [`TabbedPane`](./tabbed-pane.md) class.
:::

## Using the `Toolbar`

The `Toolbar` saves time by providing a consistent layout for components that you would need to have quick access for in an applicaton.
To add components into a `Toolbar`, you'll first need to determine which slot the components should go into.

### Toolbar slots

The Toolbar has four different slots that content can be organized into. To add components, use the `addToStart()`, `addToTitle()`, `addToContent()`, and `addToEnd()` methods respecitvely.

- **Start**: This is the slot on the left most side of the toolbar. You could add a home button using an `IconButton`, or add an `AppDrawerToggle` if your app has a `Drawer`.

- **Title**: This slot comes after the `start` slot. This slot could be used for your app's name or a company logo.

- **Content**: This slot takes up the majority of the `Toolbar`. For usability and efficeny, the components inside the `content` slot are aligned center.
  This slot is for attention seeking actions, such as site navigation or a search bar.s

- **End**: The right most slot can be used for additonal options that won't have as much interaction as the actions inside the content.
  Some examples for actions in the `end` slot include profile settings, help button, or a link to additional resources.

<AppLayoutViewer 
path='https://demo.webforj.com/webapp/controlsamples/toolbarslots?' mobile='false'
javaE='https://raw.githubusercontent.com/webforj/webforj-docs-samples/refs/heads/main/src/main/java/com/webforj/samples/views/toolbar/ToolbarSlots.java'
height='400px'
/>

### Compact mode

Removing the vertical whitespace of a `Toolbar` allows you to have more space on the screen for other elements.
That's why webforJ has the `setCompact()`, allowing you to have more vertical space on the screen.
Using this method can allow you to add multiple toolbars in your app for multi row options.
The compact mode can also let you add compartmentalized components, as shown in the following sample with a `ProgressBar`:

<AppLayoutViewer path='https://demo.webforj.com/webapp/controlsamples/toolbarcompact?' mobile='false'
javaE='https://raw.githubusercontent.com/webforj/webforj-docs-samples/refs/heads/main/src/main/java/com/webforj/samples/views/toolbar/ToolbarCompact.java'
/>

## Inside an `AppLayout`

An ideal spot for a `Toolbar` is inside the header or the footer of an `AppLayout`. You can use multiple toolbars to acheive the look and feel you desire for your app.

<AppLayoutViewer
path='https://demo.webforj.com/webapp/controlsamples/toolbarmobileapp?' mobile='true'
javaE='https://raw.githubusercontent.com/webforj/webforj-docs-samples/refs/heads/main/src/main/java/com/webforj/samples/views/toolbar/ToolbarMobileAppView.java'
cssURL='https://raw.githubusercontent.com/webforj/ControlSamples/main/src/main/resources/css/toolbar/toolbarMobile.css'
/>

:::tip
To control the visibility of a toolbar when an user scrolls, see [Sticky toolbars](./app-layout#sticky-toolbars).
:::

## Best practices
1. **Mobile User**: Have toolbar actions at the bottom of the screen for mobile users, as it's more reachable when users are using their thumbs.
2. **Limit the Amount of Actions**: Too many actions in one place can overwhelm a user, so only include the most important actions.
3. **Group Related Actions**: Organize components in logical groups based on function. For instance, all text formatting tools together or navigation tools together.

## Styling

### Toolbar themes
`Toolbar` components come with <JavadocLink type="foundation" location="com/webforj/component/Theme">7 discrete themes </JavadocLink> built in for quick styling without the use of CSS. These themes are pre-defined styles that can be applied to a toolbar to change its appearance and visual presentation. They offer a quick and consistent way to customize the look of `Toolbar` within an app.

  - **Danger**
  - **Default**
  - **Primary**
  - **Success**
  - **Warning**
  - **Gray**
  - **Info**