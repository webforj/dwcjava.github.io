---
sidebar_position: 2
title: ComboBox
slug: combobox
description: A component that combines a dropdown list with an editable text input, allowing users to either select an option from the list or enter a custom value.
---

<DocChip chip='shadow' />
<DocChip chip='name' label="dwc-combobox" />
<JavadocLink type="foundation" location="com/webforj/component/list/ComboBox" top='true'/>

<ParentLink parent="list" />

The `ComboBox` component is designed to offer users a list of options along with a field for entering custom values. This versatile input seamlessly combines the functionalities of a dropdown list and a text input field, allowing users to either select a single option from the dropdown or enter in their own value as needed.

You can include a `ComboBox` in your app for various purposes, such as for selecting a tag, picking an event location, or even conducting product searches on e-commerce sites. Essentially, the `ComboBox` lets you provide users with a set of predefined values while still allowing them to enter their own input when necessary.

:::tip
The `ComboBox` should be used when users are allowed to enter custom values. If only preset values are desired, use a [`ChoiceBox`](./choice-box.md). If you want to allow users to choose multiple selections, use a [`ListBox`](./list-box.md)
:::

## Custom value

Changing the custom value property allows control over whether or not a user is able to change the value in the `ComboBox` component's input field. If `true`, which is the default, then a user can change the value. If set to `false`, the user won't be able to change the value. This can be set using the <JavadocLink type="foundation" location="com/webforj/component/list/ComboBox" code='true' suffix='#setAllowCustomValue(boolean)'>setAllowCustomValue()</JavadocLink> method.

<ComponentDemo 
path='https://demo.webforj.com/webapp/controlsamples/comboboxcustomvalue?' 
javaE='https://raw.githubusercontent.com/webforj/webforj-docs-samples/refs/heads/main/src/main/java/com/webforj/samples/views/lists/combobox/ComboBoxCustomValueView.java'
height = '200px'
/>

## Placeholder

You can prompt users with a desired entry in a `ComboBox` by setting a placeholder in the text field of the component when it's empty. This can be done using the <JavadocLink type="foundation" location="com/webforj/component/list/ComboBox" code='true' suffix='#setPlaceholder(java.lang.String)'>setPlaceholder()</JavadocLink> method.

<ComponentDemo 
path='https://demo.webforj.com/webapp/controlsamples/comboboxplaceholder?' 
javaE='https://raw.githubusercontent.com/webforj/webforj-docs-samples/refs/heads/main/src/main/java/com/webforj/samples/views/lists/combobox/ComboBoxPlaceholderView.java'
height = '200px'
/>

## Dropdown type

Using the <JavadocLink type="foundation" location="com/webforj/component/list/DwcSelectDropdown" code='true' suffix='#setDropdownType(java.lang.String)'>setDropdownType()</JavadocLink> method will assign a value to the `type` attribute of a `ComboBox`, and a corresponding value for the `data-dropdown-for` attribute in the dropdown of the `ComboBox`. This is helpful for styling, as the dropdown is taken out of its current position in the DOM and relocated to the end of the page body when opened.

This detachment creates a situation where directly targeting the
dropdown using CSS or shadow part selectors from the parent component becomes challenging, unless you make use of the dropdown type attribute.

Here's an example of using a Dropdown type in CSS to animate choices while hovering over them:

<ComponentDemo 
path='https://demo.webforj.com/webapp/controlsamples/comboboxdropdowntype?' 
javaE='https://raw.githubusercontent.com/webforj/webforj-docs-samples/refs/heads/main/src/main/java/com/webforj/samples/views/lists/combobox/ComboBoxDropdownTypeView.java'
cssURL='https://raw.githubusercontent.com/webforj/ControlSamples/main/src/main/resources/css/lists/combobox/comboBoxDropDownType.css'
height='250px'
/>

## Max row count

By default, the number of rows displayed in the dropdown of a `ComboBox` will be increased to fit the content. However, using the <JavadocLink type="foundation" location="com/webforj/component/list/DwcSelectDropdown" code='true' suffix='#setMaxRowCount(int)'>setMaxRowCount()</JavadocLink> method allows for control over how many items are displayed.

:::tip
When a number less than or equal to zero is used, the number of rows will automatically adjust to accommodate the content.
:::

<ComponentDemo 
path='https://demo.webforj.com/webapp/controlsamples/comboboxmaxrow?' 
javaE='https://raw.githubusercontent.com/webforj/webforj-docs-samples/refs/heads/main/src/main/java/com/webforj/samples/views/lists/combobox/ComboBoxMaxRowView.java'
height='450px'
/>

## Opening and closing

The visibility of the options for a `ComboBox` can be programmatically controlled with the `open()` and `close()` methods.
These methods allow you to display the list of options for selection or hide it as needed, providing greater flexibility in managing the behavior of a `ComboBox`.

Additionally, webforJ has event listeners for when the `ComboBox` is closed and when it's opened, giving you more control to trigger specific actions.

```Java
//Focus or open the next component in a form
ComboBox university = new ComboBox("University");
ComboBox major = new ComboBox("Major");
Button submit = new Button("Submit");

//... Add lists of universities and majors

university.onClose( e ->{
  major.open();
});

major.onClose( e ->{
  submit.focus();
});
```

## Opening dimensions

The `ComboBox` component has methods that allow manipulation of the dropdown dimensions. The **maximum height** and **minimum width** of the dropdown can be set using the <JavadocLink type="foundation" location="com/webforj/component/list/DwcSelectDropdown" code='true' suffix='#setOpenHeight(int)'>setOpenHeight()</JavadocLink> and <JavadocLink type="foundation" location="com/webforj/component/list/DwcSelectDropdown" code='true' suffix='#setOpenWidth(int)'>setOpenWidth()</JavadocLink> methods, respectively. 

:::tip
Passing a `String` value to either of these methods will allow for [any valid CSS unit](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Values_and_units) to be applied, such as pixels, viewport dimensions, or other valid rules. Passing an `int` will set the value passed in pixels.
:::

## Highlighting

When working with a `ComboBox`, you can customize when the text is highlighted based on how the component gains focus. This feature can reduce input errors when users are completing forms and can improve the overall navigation experience. Change the highlighting behavior using the `setHighlightOnFocus()` method with on of the built-in `HasHighlightOnFocus.Behavior` enums:

- `ALL`
Contents of the component are always automatically highlighted when the component gets focus.
- `FOCUS`
Contents of the component are automatically highlighted when the component gets focus under program control.
- `FOCUS_OR_KEY`
Contents of the component are automatically highlighted when the component gets focus under program control or by tabbing into it.
- `FOCUS_OR_MOUSE`
Contents of the component are automatically highlighted when the component gets focus under program control or by clicking into it with the mouse.
- `KEY`
Contents of the component are automatically highlighted when the component gets focus by tabbing into it.
- `KEY_MOUSE`
Contents of the component are automatically highlighted when the component gets focus by tabbing into it or clicking into it with the mouse.
- `MOUSE`
Contents of the component are automatically highlighted when the component gets focus by clicking into it with the mouse.
- `NONE`
Contents of the component are never automatically highlighted when the component gets focus.

:::note
If content was highlighted upon losing focus, it will be highlighted again upon regaining focus, regardless of the set behavior.
:::

## Prefix and suffix

Slots provide flexible options for improving the capability of a `ComboBox`. You can have icons, labels, loading spinners, clear/reset capability, avatar/profile pictures, and other beneficial components nested within a `ComboBox` to further clarify intended meaning to users.
The `ComboBox` has two slots: the `prefix` and `suffix` slots. Use the `setPrefixComponent()` and `setSuffixComponent()` methods to insert various components before and after the options within a `ComboBox`.

```java
ComboBox comboBox = new ComboBox());
  comboBox.setPrefixComponent(TablerIcon.create("box"));
  comboBox.setSuffixComponent(TablerIcon.create("box"));
```

## Styling


### Shadow parts

These are the various parts of the [shadow DOM](../../glossary#shadow-dom) for the `ComboBox` component, which will be required when styling via CSS is desired.

<TableBuilder tag={require('@site/docs/components/_dwc_control_map.json').ComboBox} table='parts' exclusions='' />

### Reflected attributes

The reflected attributes of a component will be shown as attributes in the rendered HTML element for the component in the DOM. This means that styling can be applied using these attributes.

<TableBuilder tag={require('@site/docs/components/_dwc_control_map.json').ComboBox} table="reflects" exclusions=''/>

### Dependencies

This component relies on the following components - see the related article for more detailed styling information:

<TableBuilder tag='dwc-list-edit' table="dependencies"/>

## Best practices 

To ensure an optimal user experience when using the `ComboBox` component, consider the following best practices:

- **Preload Common Values**: If there are common or frequently used items, preload them in the `ComboBox` list. This speeds up selection for commonly chosen items and encourages consistency.

- **Clear Options**: Make the text for each `ListItem` clear and simple so users immediately understand their purpose.

- **Validation**: Implement input validation to handle custom entries. Check for data accuracy and consistency. You may want to suggest corrections or confirmations for ambiguous entries.

- **Default Selection**: Reduce the need for extra clicks by setting a default selection, especially if there is a common or recommended choice.