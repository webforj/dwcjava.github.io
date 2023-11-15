---
sidebar_position: 3
title: ListBox
slug: listbox
---

import ComponentDemo from '@site/src/components/DocsTools/ComponentDemo';
import TableBuilder from '@site/src/components/DocsTools/TableBuilder';
import JavadocLink from '@site/src/components/DocsTools/JavadocLink';
import DocChip from '@site/src/components/DocsTools/DocChip';

<DocChip tooltipText="This component will render with a shadow DOM, an API built into the browser that facilitates encapsulation." label="Shadow" component="a" href="../../glossary#shadow-dom" target="_blank" clickable={true} iconName="shadow" />

<DocChip tooltipText="The name of the web component that will render in the DOM." label="bbj-list-box" href="https://basishub.github.io/basis-next/#/web-components/bbj-list-box" clickable={false} iconName='code'/>

<JavadocLink type="engine" location="org/dwcj/component/button/Button" top='true'/>

The `ListBox` component is a user interface element designed to display a scrollable list of objects and allows users to select single or multiple items from the list. Users can also interact with the `ListBox` with the arrow keys. 

<ComponentDemo 
path='https://hot.bbx.kitchen/webapp/controlsamples?class=componentdemos.listboxdemos.ListboxDemo' 
javaE='https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/java/componentdemos/listboxdemos/ListboxDemo.java'
cssURL='https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/resources/css/listboxstyles/listbox_demo.css' 
height = '250px'
/>

## Usages

1. **User Role Assignment**: In applications with user access control, administrators can use a `ListBox` to assign roles and permissions to users. Users are selected from a list, and the roles or permissions are assigned based on their selection. This ensures precise and controlled access to different features and data within the application.

2. **Project Task Assignment**: In project management software, `ListBox` components are useful for assigning tasks to team members. Users can select tasks from a list and assign them to different team members. This simplifies task delegation and ensures that responsibilities are clearly defined within the team.

3. **Multi-Category Filtering**: In a search application, users often need to filter search results based on multiple criteria. A `ListBox` can display various filter options, such as 
>- Product features
>- Price ranges
>- Brands. 

  Users can select items from each filter category, allowing them to refine search results and find exactly what they're looking for.

4. **Content Categorization**: In content management systems, `ListBox` components assist in categorizing articles, images, or files. Users can select one or more categories to associate with their content, making it easier to organize and search for content items in the system.

## Constructors

1. **`ListBox()`**: Constructs a new `ListBox` without a label.
2. **`ListBox(String label)`**: Constructs a new `ListBox` with the specified label.
3. **`ListBox(String label, ComponentEventListener<ListSelectEvent> selectListener)`**: Constructs a new `ListBox` with the given label and a listener to handle item selection events.

## Selection Options

By default, the list box is configured to allow selection of a single item at a time. However, this can be easily configured with a built-in method which allows users to select multiple items ***using the `Shift` key*** for contiguous entry selection and ***`Control` (Windows) or `Command` (Mac) key*** for separate, multiple item selection. Use the `setMultipleSelection()` function to change this property. True will enable multiple selection, false disables it. 

<ComponentDemo 
path='https://hot.bbx.kitchen/webapp/controlsamples?class=componentdemos.listboxdemos.ListboxMultipleSelection' 
javaE='https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/java/componentdemos/listboxdemos/ListboxMultipleSelection.java'
javaC='https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/code_snippets/listbox/MultipleSelection.txt'
cssURL='https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/resources/css/listboxstyles/multiple_selection.css'
height = '250px'
/>

## Events

The `ListBox` class provides methods to add and remove event listeners for the events common to all list components.

:::caution Notice
For a list of events supported by the `ListBox`, see [this section](./lists.md#shared-events) which outlines shared events amongst list components.
:::

### Adding Events

To add an event listener, use one of the following patterns:

```java
listBox.addSelectListener(e -> {
  //Executed when the event fires
});

//OR

listBox.addSelectListener(new ComponentEventListener<ListSelectEvent>() {
  @Override
  public void onComponentEvent(ComponentEvent e){
    //Executed when the event fires
  }
});

//OR

listBox.addSelectListener(this::propertyChangeMethod);
```

Additional syntactic sugar methods, or aliases, have been added to allow for alternative addition of events by using the `on` prefix followed by the event, such as:

```java
listBox.onSelect(e -> {
  //Executed when the event fires
});
```

### Removing Events

To remove an event listener, use the appropriate method:

```java
listBox.removeSelectListener(listener);
```

:::tip
When adding an event listener, a `ListenerRegistration` object will be returned. This can be used, among other things, to remove the event later on.
:::

## Styling

### Expanses
There are five `ListBox` expanses that are supported which allow for quick styling without using CSS. Expanses are supported by use of a built-in enum class. <br/>

<ComponentDemo 
path='https://hot.bbx.kitchen/webapp/controlsamples?class=componentdemos.listboxdemos.ListboxExpanses' 
javaE='https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/java/componentdemos/listboxdemos/ListboxExpanses.java'
javaC='https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/code_snippets/listbox/Expanses.txt'
cssURL='https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/resources/css/listboxstyles/expanse_styles.css' 
height = '300px'
/>

### Shadow Parts

These are the various parts of the [shadow DOM](../../glossary#shadow-dom) for the `ListBox` component, which will be required when styling via CSS is desired.

<TableBuilder tag={require('@site/docs/components/_bbj_control_map.json').ListBox} table='parts' exclusions='' />

### CSS Properties

These are the various CSS properties that are used in the component, with a short description of their use.

<TableBuilder tag={require('@site/docs/components/_bbj_control_map.json').ListBox} exclusions='' table='properties'/>

### Reflected Attributes

The reflected attributes of a component will be shown as attributes in the rendered HTML element for the component in the DOM. This means that styling can be applied using these attributes.

<TableBuilder tag={require('@site/docs/components/_bbj_control_map.json').ListBox} table="reflects" exclusions=''/>

### Dependencies

This component relies on the following components - see the related article for more detailed styling information:

<TableBuilder tag='bbj-list' table="dependencies"/>

## Best Practices 

To ensure an optimal user experience when using the `ChoiceBox` component, consider the following best practices:

1. **Prioritize Information Hierarchy**: When using a `ListBox`, ensure that the items are organized in a logical and hierarchical order. Place the most important and commonly used options at the top of the list. This makes it easier for users to find what they need without excessive scrolling.

2. **Limit List Length**: Avoid overwhelming users with an excessively long `ListBox`. If there are a large number of items to display, consider implementing pagination, search, or filtering options to help users locate items quickly. Alternatively, you can group items into categories to reduce list length.

3. **Clear and Descriptive Labels**: Provide clear and descriptive labels for each item in the `ListBox`. Users should be able to understand the purpose of each option without ambiguity. Use concise and meaningful item labels.

4. **Multi-Selection Feedback**: If your `ListBox` allows for multiple selections, provide visual or textual feedback indicating that multiple items can be selected from the list.

5. **Default Selection**: Consider setting a default selection for the `ListBox`, especially if one option is more commonly used than others. This can streamline the user experience by pre-selecting the most likely choice.