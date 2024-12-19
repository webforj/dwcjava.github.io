---
sidebar_position: 3
title: ListBox
slug: listbox
description: A component that displays a scrollable list of options, allowing users to select one or more items from the list.
---

<DocChip chip='shadow' />
<DocChip chip='name' label="dwc-listbox" />
<JavadocLink type="foundation" location="com/webforj/component/list/ListBox" top='true'/>

<ParentLink parent="list" />

The `ListBox` component presents the user with a list of items, allowing them to select one or multiple options. Its versatility allows for various applications across different environments. For instance, admins can utilize this component to assign roles and permissions, project managers can assign multiple tasks to a team member, and consumers on e-commerce sites can use a `ListBox` to filter their search by selecting category options.

## Selection options

You can use the <JavadocLink type="foundation" location="com/webforj/component/list/ListBox" code='true' suffix='#setSelectionMode(com.webforj.component.list.MultipleSelectableList.SelectionMode)'>setSelectionMode()</JavadocLink> method to choose whether your `ListBox` can have multiple selections. By default, a `ListBox` is designed for a single selection, while the <JavadocLink type="foundation" location="com/webforj/component/list/MultipleSelectableList.SelectionMode" code='true' suffix='#MULTIPLE'>MULTIPLE</JavadocLink> selection mode allows users to select multiple options. Users can select a range of options by holding the <kbd>Shift</kbd> key or select individual options by holding the <kbd>Ctrl</kbd> key on Windows or the <kbd>Cmd</kbd> key on Mac.

Additionally, when the `ListBox` is in focus, users can use the arrow keys on their keyboard to navigate through options and select one by pressing <kbd>Enter</kbd>.

<ComponentDemo 
path='https://demo.webforj.com/webapp/controlsamples/listboxmultipleselection?' 
javaE='https://raw.githubusercontent.com/webforj/webforj-docs-samples/refs/heads/main/src/main/java/com/webforj/samples/views/lists/listbox/ListboxMultipleSelectionView.java'
javaC='https://raw.githubusercontent.com/webforj/ControlSamples/main/src/main/code_snippets/listbox/MultipleSelection.txt'
height = '250px'
/>

## Styling

### Shadow parts

These are the various parts of the [shadow DOM](../../glossary#shadow-dom) for the `ListBox` component, which will be required when styling via CSS is desired.

<TableBuilder tag={require('@site/docs/components/_dwc_control_map.json').ListBox} table='parts' exclusions='' />

### CSS properties

These are the various CSS properties that are used in the component, with a short description of their use.

<TableBuilder tag={require('@site/docs/components/_dwc_control_map.json').ListBox} exclusions='' table='properties'/>

### Reflected attributes

The reflected attributes of a component will be shown as attributes in the rendered HTML element for the component in the DOM. This means that styling can be applied using these attributes.

<TableBuilder tag={require('@site/docs/components/_dwc_control_map.json').ListBox} table="reflects" exclusions=''/>

### Dependencies

This component relies on the following components - see the related article for more detailed styling information:

<TableBuilder tag='dwc-listbox' table="dependencies"/>

## Best practices 

To ensure an optimal user experience when using the `ListBox` component, consider the following best practices:

- **Prioritize Information Hierarchy**: Organize items in a logical and hierarchical order. Place the most important and commonly used options at the top of the list. This makes it easier for users to find what they need without excessive scrolling.

- **Limit List Length**: Avoid overwhelming users with an excessively long `ListBox`. If there are a large number of items to display, consider implementing pagination, search, or filtering options to help users locate items quickly. Alternatively, you can group items into categories to reduce list length.

- **Clear Options**: Make the text for each `ListItem` clear and simple so users immediately understand their purpose.

- **Multi-Selection Feedback**: If your `ListBox` allows for multiple selections, provide visual or textual feedback indicating that multiple items can be selected from the list.

- **Default Selection**: Consider setting a default selection for the `ListBox`, especially if one option is more commonly used than others. This can streamline the user experience by pre-selecting the most likely choice.

- **Select All**: Reduce the amount of clicks a user has to do by including a "select all" option.