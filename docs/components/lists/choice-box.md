---
sidebar_position: 1
title: ChoiceBox
slug: choicebox
description: A component that provides a dropdown list of predefined options, allowing users to select one option from the list.
---

<DocChip chip='shadow' />
<DocChip chip='name' label="dwc-choicebox" />
<JavadocLink type="foundation" location="com/webforj/component/list/ChoiceBox" top='true'/>

<ParentLink parent="list" />

The `ChoiceBox` component simplifies form inputs, allows users to adjust preferences from a list of settings, and can be employed for filtering and sorting in apps. It provides an organized and visually pleasing way to make selections when multiple options are available.

The `ChoiceBox` component presents users with a list of options, allowing them to click to display a dropdown of available choices or use arrow keys when the component is in focus. When a user makes a selection, that option is displayed in the `ChoiceBox`.

:::tip
The `ChoiceBox` is designed to provide users with a convenient selection of preset options, ensuring a straightforward decision-making process. For instances where custom values are desired, use a [`ComboBox`](./combo-box.md). If you want to allow users to choose multiple selections, use a [`ListBox`](./list-box.md)
:::

## Dropdown type

Using the <JavadocLink type="foundation" location="com/webforj/component/list/DwcSelectDropdown" code='true' suffix='#setDropdownType(java.lang.String)'>setDropdownType()</JavadocLink> method will assign a value to the `type` attribute of a `ChoiceBox`, and a corresponding value for the `data-dropdown-for` attribute in the dropdown of the `ChoiceBox`. This is helpful for styling, as the dropdown is taken out of its current position in the DOM and relocated to the end of the page body when opened.

This detachment creates a situation where directly targeting the dropdown using CSS or shadow part selectors from the parent component becomes challenging, unless you make use of the dropdown type attribute.

Here's an example of using a Dropdown type in CSS to animate choices while hovering over them:

<ComponentDemo 
path='https://demo.webforj.com/webapp/controlsamples/choiceboxdropdowntype?' 
javaE='https://raw.githubusercontent.com/webforj/webforj-docs-samples/refs/heads/main/src/main/java/com/webforj/samples/views/lists/choicebox/ChoiceboxDropdownTypeView.java'
cssURL='https://raw.githubusercontent.com/webforj/ControlSamples/main/src/main/resources/css/lists/combobox/comboBoxDropDownType.css'
height='250px'
/>

## Max row count

By default, the number of rows displayed in the dropdown of a `ChoiceBox` will be increased to fit the content. However, using the <JavadocLink type="foundation" location="com/webforj/component/list/DwcSelectDropdown" code='true' suffix='#setMaxRowCount(int)'>setMaxRowCount()</JavadocLink> method allows for control over how many items are displayed. 

:::tip
When a number less than or equal to zero is used, the number of rows will automatically adjust to accommodate the content.
:::

<ComponentDemo 
path='https://demo.webforj.com/webapp/controlsamples/choiceboxmaxrow?' 
javaE='https://raw.githubusercontent.com/webforj/webforj-docs-samples/refs/heads/main/src/main/java/com/webforj/samples/views/lists/choicebox/ChoiceboxMaxRowView.java'
height='450px'
/>

## Opening and closing

The visibility of the options for a `ChoiceBox` can be programmatically controlled with the `open()` and `close()` methods.
These methods allow you to display the list of options for selection or hide it as needed, providing greater flexibility in managing the behavior of a `ChoiceBox`.

Additionally, webforJ has event listeners for when the `ChoiceBox` is closed and when it's opened, giving you more control to trigger specific actions.

```Java
//Focus or open the next component in a form
ChoiceBox university = new ChoiceBox("University");
ChoiceBox major = new ChoiceBox("Major");
Button submit = new Button("Submit");

//... Add lists of universities and majors

university.onClose( e ->{
  major.focus();
});

major.onClose( e ->{
  submit.focus();
});
```

## Opening dimensions

The `ChoiceBox` component has methods that allow manipulation of the dropdown dimensions. The **maximum height** and **minimum width** of the dropdown can be set using the <JavadocLink type="foundation" location="com/webforj/component/list/DwcSelectDropdown" code='true' suffix='#setOpenHeight(int)'>setOpenHeight()</JavadocLink> and <JavadocLink type="foundation" location="com/webforj/component/list/DwcSelectDropdown" code='true' suffix='#setOpenWidth(int)'>setOpenWidth()</JavadocLink> methods, respectively. 

:::tip
Passing a `String` value to either of these methods will allow for [any valid CSS unit](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Values_and_units) to be applied, such as pixels, viewport dimensions, or other valid rules. Passing an `int` will set the value passed in pixels.
:::

## Prefix and suffix

Slots provide flexible options for improving the capability of a `ChoiceBox`. You can have icons, labels, loading spinners, clear/reset capability, avatar/profile pictures, and other beneficial components nested within a `ChoiceBox` to further clarify intended meaning to users.
The `ChoiceBox` has two slots: the `prefix` and `suffix` slots. Use the `setPrefixComponent()` and `setSuffixComponent()` methods to insert various components before and after the displayed option within a `ChoiceBox`.

```java
ComboBox choiceBox = new ChoiceBox());
  choiceBox.setPrefixComponent(TablerIcon.create("box"));
  choiceBox.setSuffixComponent(TablerIcon.create("box"));
```

## Styling

### Shadow parts

These are the various parts of the [shadow DOM](../../glossary#shadow-dom) for the `ChoiceBox` component, which will be required when styling via CSS is desired.

<TableBuilder tag={require('@site/docs/components/_dwc_control_map.json').ChoiceBox} table='parts' exclusions='' />

### CSS properties

These are the various CSS properties that are used in the component, with a short description of their use.

<TableBuilder tag={require('@site/docs/components/_dwc_control_map.json').ChoiceBox} exclusions='' table='properties'/>

### Reflected attributes

The reflected attributes of a component will be shown as attributes in the rendered HTML element for the component in the DOM. This means that styling can be applied using these attributes.

<TableBuilder tag={require('@site/docs/components/_dwc_control_map.json').ChoiceBox} table="reflects" exclusions=''/>

### Dependencies

This component relies on the following components - see the related article for more detailed styling information:

<TableBuilder tag='dwc-choicebox' table="dependencies"/>

## Best practices 

To ensure an optimal user experience when using the `ChoiceBox` component, consider the following best practices:

- **Clear and Limited Options**: Keep the list of choices concise where possible, and relevant to the user's task. A `ChoiceBox` is ideal for presenting a clear list of options.

- **Clear Options**: Make the text for each `ListItem` clear and simple so users immediately understand their purpose.

- **Default Selection**: Set a default selection when the ChoiceBox is initially displayed. This ensures a pre-selected option, reducing the number of interactions required to make a choice.