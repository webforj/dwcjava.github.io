---
sidebar_position: 2
title: ComboBox
slug: combobox
---

import ComponentDemo from '@site/src/components/DocsTools/ComponentDemo';
import TableBuilder from '@site/src/components/DocsTools/TableBuilder';
import JavadocLink from '@site/src/components/DocsTools/JavadocLink';
import DocChip from '@site/src/components/DocsTools/DocChip';

<DocChip tooltipText="This component will render with a shadow DOM, an API built into the browser that facilitates encapsulation." label="Shadow" component="a" href="../../glossary#shadow-dom" target="_blank" clickable={true} iconName="shadow" />

<DocChip tooltipText="The name of the web component that will render in the DOM." label="bbj-list-button" href="https://basishub.github.io/basis-next/#/web-components/bbj-list-button" clickable={false} iconName='code'/>

<JavadocLink type="engine" location="org/dwcj/component/button/Button" top='true'/>

The `ComboBox` component is a user interface element designed to present users with a list of options or choices, as well as a field for entering their own custom values. Users can select a single option from this list, typically by clicking the `ComboBox`, which triggers the display of a dropdown list containing available choices, or type in a custom value. Users can also interact with the `ComboBox` with the arrow keys. When a user makes a selection, the chosen option is then displayed in the `ComboBox`. 

<!-- <ComponentDemo 
path='https://eu.bbx.kitchen/webapp/controlsamples?class=componentdemos.comboboxdemos.ComboBoxDemo' 
javaE='https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/java/componentdemos/comboboxdemos/ComboBoxDemo.java'
cssURL='https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/resources/css/textcomboboxstyles/demo_styles.css'
height = '200px'
/> -->

## Usages

The ComboBox component is a versatile input element that combines the features of both a dropdown list and a text input field. It allows users to select items from a predefined list or enter custom values as needed. This section explores common usages of the ComboBox component in various scenarios:

1. **Product Search and Entry**: Use a ComboBox to implement a product search and entry feature. Users can either select a product from a predefined list or type in a custom product name. This is helpful for applications like e-commerce sites where products are vast and diverse.

2. **Tag Selection and Entry**: In applications involving content tagging, a ComboBox can serve as an excellent choice. Users can select from a list of existing tags or add custom tags by typing them. This is useful for organizing and categorizing content. Examples of such tags include:
    >- Project Labels: In a project management tool, users can select labels or tags (e.g., "Urgent," "In Progress," "Completed") to categorize tasks or projects, and they can create custom labels as needed.
    >- Recipe Ingredients:  In a cooking or recipe app, users can select ingredients from a list (e.g., "Tomatoes," "Onions," "Chicken") or add their own ingredients for custom recipes.
    >- Location Tags:  In a mapping or geotagging application, users can choose predefined location tags (e.g., "Beach," "City," "Park") or create custom tags to mark specific places on a map.

3. **Data Entry with Suggested Values**: In data entry forms, a ComboBox can be used to speed up input by providing a list of suggested values based on user input. This helps users enter data accurately and efficiently.

    :::tip
    The `ComboBox` should be used when users are allowed to enter custom values. If only preset values are desired, use a [`ChoiceBox`](./choice-box.md) instead.
    :::

## Constructors

1. <JavadocLink type="engine" location="org/dwcj/component/list/ComboBox" code='true' suffix='#<init>()'>ComboBox()</JavadocLink>: Constructs a new `ComboBox` without a label.
2. <JavadocLink type="engine" location="org/dwcj/component/list/ComboBox" code='true' suffix='#<init>(java.lang.String)'>ComboBox(String label)</JavadocLink>: Constructs a new `ComboBox` with the specified label.
3. <JavadocLink type="engine" location="org/dwcj/component/list/ComboBox" code='true' suffix='#<init>(java.lang.String,org.dwcj.component.event.ComponentEventListener)'>ComboBox(String label, ComponentEventListener< ListSelectEvent> selectListener)</JavadocLink>: Constructs a new `ComboBox` with the given label and a listener to handle item selection events.


## Custom Value

Changing the custom value property allows control over whether or not a user is able to change the value in the `ComboBox` component's input field. If `true`, which is the default, then a user can change the value. If set to `false`, the user won't be able to change the value. This can be set using the <JavadocLink type="engine" location="org/dwcj/component/list/ComboBox" code='true' suffix='#setAllowCustomValue(boolean)'>setAllowCustomValue()</JavadocLink> method.

<ComponentDemo 
path='https://eu.bbx.kitchen/webapp/controlsamples?class=componentdemos.comboboxdemos.ComboBoxCustomValue' 
javaE='https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/java/componentdemos/comboboxdemos/ComboBoxCustomValue.java'
javaC='https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/code_snippets/combobox/CustomValue.txt'
height = '200px'
/>

## Placeholder

A placeholder can be set for a `ComboBox` which will display in the text field of the component when it is empty to prompt users for the desired entry in the field. This can be done using the <JavadocLink type="engine" location="org/dwcj/component/list/ComboBox" code='true' suffix='#setPlaceholder(java.lang.String)'>setPlaceholder()</JavadocLink> method.

<ComponentDemo 
path='https://eu.bbx.kitchen/webapp/controlsamples?class=componentdemos.comboboxdemos.ComboBoxPlaceholder' 
javaE='https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/java/componentdemos/comboboxdemos/ComboBoxPlaceholder.java'
javaC='https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/code_snippets/combobox/Placeholder.txt'
height = '200px'
/>

## Dropdown Type

Using the <JavadocLink type="engine" location="org/dwcj/component/list/DwcSelectDropdown" code='true' suffix='#setDropdownType(java.lang.String)'>setDropdownType()</JavadocLink> method will assign a value to the `type` attribute of a `ComboBox`, and a corresponding value for the `data-dropdown-for` attribute in the dropdown of the `ComboBox`. This is helpful for styling, as the dropdown is taken out of its current position in the DOM and relocated to the end of the page body when opened.

This detachment creates a situation where directly targeting the
dropdown using CSS or shadow part selectors from the parent component becomes challenging, unless you make use of the dropdown type attribute.

In the demo below, the Dropdown type is set and used in the CSS file to select the dropdown and change the background color.

<ComponentDemo 
path='https://eu.bbx.kitchen/webapp/controlsamples?class=componentdemos.comboboxdemos.ComboBoxDropdownType' 
javaE='https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/java/componentdemos/comboboxdemos/ComboBoxDropdownType.java'
javaC='https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/code_snippets/combobox/DropdownType.txt'
cssURL='https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/resources/css/textcomboboxstyles/dropdown_styles.css'
height='250px'
/>

## Max Row Count

By default, the number of rows displayed in the dropdown of a `ComboBox` will be increased to fit the content. However, using the <JavadocLink type="engine" location="org/dwcj/component/list/DwcSelectDropdown" code='true' suffix='#setMaxRowCount(int)'>setMaxRowCount()</JavadocLink> method allows for control over how many items are displayed.

:::caution
Using a number that is less than or equal to 0 will result in unsetting this property.
:::

<ComponentDemo 
path='https://eu.bbx.kitchen/webapp/controlsamples?class=componentdemos.comboboxdemos.ComboBoxMaxRowDemo' 
javaE='https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/java/componentdemos/comboboxdemos/ComboBoxMaxRowDemo.java'
javaC='https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/code_snippets/combobox/MaxRow.txt'
height='250px'
/>

## Opening Dimensions

The `ComboBox` component has methods that allow manipulation of the dropdown dimensions. The **maximum height** and **minimum width** of the dropdown can be set using the <JavadocLink type="engine" location="org/dwcj/component/list/DwcSelectDropdown" code='true' suffix='#setOpenHeight(int)'>setOpenHeight()</JavadocLink> and <JavadocLink type="engine" location="org/dwcj/component/list/DwcSelectDropdown" code='true' suffix='#setOpenWidth(int)'>setOpenWidth()</JavadocLink> methods, respectively. 

:::tip
Passing a `String` value to either of these methods will allow for [any valid CSS unit](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Values_and_units) to be applied, such as pixels, viewport dimensions, or other valid rules. Passing an `int` will set the value passed in pixels.
:::

## Events

The `ComboBox` class provides methods to add and remove event listeners for the following events, as well as events common to all list components:

| Events | Description |
|:-:|-|
|<JavadocLink type="engine" location="org/dwcj/component/list/event/ListOpenEvent"  code="true">ListOpenEvent</JavadocLink>|An event which is fired when a list dropdown is opened.|
|<JavadocLink type="engine" location="org/dwcj/component/list/event/ListCloseEvent"  code="true">ListCloseEvent</JavadocLink>|An event which is fired when a list dropdown is closed.|
|<JavadocLink type="engine" location="org/dwcj/component/list/event/ListClickEvent"  code="true">ListClickEvent</JavadocLink>|This event is triggered when the user clicks an item from a List-based component.|
|<JavadocLink type="engine" location="org/dwcj/component/event/ModifyEvent"  code="true">ModifyEvent</JavadocLink>|An event that is fired when a component is edited or modified.|
|<JavadocLink type="engine" location="org/dwcj/component/event/KeypressEvent"  code="true">KeypressEvent</JavadocLink>|A Keypress event is fired when a user presses a specific key on the keyboard while an element has focus. This event is commonly used to capture and respond to user keyboard interactions. When a Keypress event is triggered,the key that was pressed can be determine using the key code, and a specific action or actions can be performed based on the user's input. For example, it can be used to validate user input in form fields, implement keyboard shortcuts, or trigger certain actions based on specific key combinations.|

:::tip
For a list of additional events supported by the `ComboBox`, see [this section](./lists.md#shared-events) which outlines shared events amongst list components.
:::
<!-- 
### Adding Events

To add an event listener, use one of the following patterns:

```java
comboBox.addKeypressEvent(e -> {
  //Executed when the event fires
});

//OR

comboBox.addKeypressEvent(new ComponentEventListener<KeypressEvent>() {
  @Override
  public void onComponentEvent(ComponentEvent e){
    //Executed when the event fires
  }
});

//OR

comboBox.addKeypressEvent(this::keypressMethod);
```

Additional syntactic sugar methods, or aliases, have been added to allow for alternative addition of events by using the `on` prefix followed by the event, such as:

```java
ComboBox.onOpen(e -> {
  //Executed when the event fires
});
```

### Removing Events

To remove an event listener, use the appropriate method:

```java
comboBox.removeKeypressEvent(listener);
```

:::tip
When adding an event listener, a `ListenerRegistration` object will be returned. This can be used, among other things, to remove the event later on.
::: -->

## Styling

<!-- ### Expanses -->

<!-- The `ComboBox` component comes with 5 expanses for quick styling without the use of CSS. Expanses are supported by use of a built-in enum class.

<ComponentDemo 
path='https://eu.bbx.kitchen/webapp/controlsamples?class=componentdemos.comboboxdemos.TextComboBoxExpanses' 
javaE='https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/java/componentdemos/comboboxdemos/TextComboBoxExpanses.java'
javaC='https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/code_snippets/textcombobox/Expanses.txt'
cssURL='https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/resources/css/textcomboboxstyles/expanse_styles.css' 
javaHighlight='{24,27,30,33,36}'
height = '350px'
/> -->

### Shadow Parts

These are the various parts of the [shadow DOM](../../glossary#shadow-dom) for the `ComboBox` component, which will be required when styling via CSS is desired.

<TableBuilder tag={require('@site/docs/components/_bbj_control_map.json').ComboBox} table='parts' exclusions='' />

### Reflected Attributes

The reflected attributes of a component will be shown as attributes in the rendered HTML element for the component in the DOM. This means that styling can be applied using these attributes.

<TableBuilder tag={require('@site/docs/components/_bbj_control_map.json').ComboBox} table="reflects" exclusions=''/>

### Dependencies

This component relies on the following components - see the related article for more detailed styling information:

<TableBuilder tag='bbj-list-edit' table="dependencies"/>

## Best Practices 

To ensure an optimal user experience when using the `ComboBox` component, consider the following best practices:

1. **Preload Common Values**: If there are common or frequently used items, preload them in the `ComboBox` list. This speeds up selection for commonly chosen items and encourages consistency.

2. **User-Friendly Labels**: Ensure that the displayed labels for each option are user-friendly and self-explanatory. Make sure users can easily understand the purpose of each choice.

3. **Validation**: Implement input validation to handle custom entries. Check for data accuracy and consistency. You may want to suggest corrections or confirmations for ambiguous entries.

4. **Default Selection**: Set a default selection, especially if there is a common or recommended choice. This enhances the user experience by reducing the need for extra clicks.

5. **ComboBox vs. Other List Components**: A `ComboBox` should be used over other List components in the following situations:

  >- Multiple Selection is not needed or required, and all items do not need to be displayed at once.
  >- A selection of predefined choices, ***as well as custom entry*** is desired, allowing users to enter custom or data or select predetermined, often commonly used items.