---
title: Toolbar
---

<DocChip chip="shadow" />
<DocChip chip="name" label="dwc-toolbar" />
<JavadocLink type="foundation" location="com/webforj/component/layout/toolbar/Toolbar" top='true'/>
<!-- Add Chips -->

Toolbars are a fundamental part of modern web applications, offering users quick access to core actions and navigation elements. Whether it's for managing page controls or housing key functionalities like search and notifications, the `Toolbar` component is available for your webforJ projects.
The `Toolbar` is a horizontal container component that can hold a set of action buttons, icons, or other controls, typically used for performing tasks related to the current context.

:::note
For sectioned content, like a document viewer, consider using the [`TabbedPane`](./tabbed-pane.md) class.
:::

## Using the `Toolbar`

The `Toolbar` saves you time by providing a consistent layout for components that you would need to have quick access for in an applicaton.
An ideal spot for using a toolbar is inside the header of an `AppLayout` component.
To add components into a `Toolbar`, you'll first need to determine which slot the components should go into.

<!-- Include this snippet as an actual demo -->
```Java
Toolbar toolbar = new Toolbar();
toolbar.addToStart(new AppDrawerToggle());
toolbar.addToTitle(new H1("webforJ App"));
toolbar.setTheme(Theme.PRIMARY);

AppLayout layout = new AppLayout();
layout.addToHeader(toolbar);
```

:::tip
`AppDrawerToggle` and `IconButton` are great components to add into a `Toolbar`.
:::

## Toolbar slots

To establish a hierarchy bewteen different components inside a `Toolbar` , the content within is ogranized between four different slots.
To add components inside a `Toolbar` slot, use the `addToStart()`, `addToTitle()`, `addToContent()`, and `addToEnd()` methods respecitvely.

- **Start**: This is the slot on the left most side of the toolbar. If you're using the `Toolbar` in an `AppLayout`, consider adding an `AppDrawerToggle` component in this slot.

- **Title**: This slot comes after the `start` slot. This slot could be used for your application's name or a company logo.

- **Content**: This slot takes up the majority of the `Toolbar`. For usability and efficeny, the components inside the `content` slot are aligned center.
  This slot is for attention seeking actions, such as site navigation or a search bar.

- **End**: The right most slot can be used for additonal options that won't have as much interaction as the actions inside the content.
  Some examples for actions in the `end` slot include profile settings, help button, or a link to additional resources.

<!-- Demo having four components with the name of the slots -->

## Compact mode
Removing the vertical whitespace of a `Toolbar` allows you to have more space on the screen for other elements.
That's why webforJ has the `setCompact()`, allowing you to have more vertical space on your application.
Usin this method can even allow you to add multiple toolbars in one section of your app for multi row options.

<!-- Potential demo with compact mode as a toggle -->

## Best practices
1. **Mobile User**: Add the toolbar to the bottom of the screen for mobile users, as it's more reachable when users are using their thumbs.
2. **Limit the Amount of Actions**: Too many actions in one place can overwhelm a user, so only include the most important actions.
3. **Group Related Actions**: Organize components in logical groups based on function. For instance, all text formatting tools together or navigation tools together.

## Styling

### Toolbar themes
`Toolbar` components come with <JavadocLink type="foundation" location="com/webforj/component/Theme">7 discrete themes </JavadocLink> built in for quick styling without the use of CSS. These themes are pre-defined styles that can be applied to a toolbar to change its appearance and visual presentation. They offer a quick and consistent way to customize the look of `Toolbar` within an application.

  - **Danger**
  - **Default**
  - **Primary**
  - **Success**
  - **Warning**
  - **Gray**
  - **Info**