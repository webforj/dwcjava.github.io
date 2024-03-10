---
sidebar_position: 1
title: ChoiceBox
slug: choicebox
---

import ComponentDemo from '@site/src/components/DocsTools/ComponentDemo';
import AppLayoutViewer from '@site/src/components/DocsTools/AppLayoutViewer';
import TableBuilder from '@site/src/components/DocsTools/TableBuilder';
import JavadocLink from '@site/src/components/DocsTools/JavadocLink';
import DocChip from '@site/src/components/DocsTools/DocChip';

<DocChip tooltipText="This component will render with a shadow DOM, an API built into the browser that facilitates encapsulation." label="Shadow" component="a" href="../../glossary#shadow-dom" target="_blank" clickable={true} iconName="shadow" />

<DocChip tooltipText="The name of the web component that will render in the DOM." label="dwc-choicebox" href="https://basishub.github.io/basis-next/#/web-components/dwc-choicebox" clickable={false} iconName='code'/>

<JavadocLink type="engine" location="org/dwcj/component/list/ChoiceBox" top='true'/>

The `ChoiceBox` component is a user interface element designed to present users with a list of options or choices. Users can select a single option from this list, typically by clicking the `ChoiceBox`, which triggers the display of a dropdown list containing available choices. Users can also interact with the `ChoiceBox` with the arrow keys. When a user makes a selection, the chosen option is then displayed in the `ChoiceBox` button. 

<!-- <AppLayoutViewer url='https://demo.webforj.com/webapp/controlsamples?class=componentdemos.choiceboxdemos.ChoiceBoxDemo' mobile='false'/>
<ComponentDemo
frame="hidden"
javaE='https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/java/componentdemos/choiceboxdemos/ChoiceBoxDemo.java'
cssURL='https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/resources/css/applayoutstyles/applayout_styles.css'
/> -->

## Usages
`ChoiceBox` components are used for various purposes, such as selecting items from a menu, choosing from a list of categories, or picking options from predefined sets. They provide an organized and visually pleasing way for users to make selections, particularly when there are multiple options available. Common usages include:

1. **User Selection of Options**: The primary purpose of a `ChoiceBox` is to allow users to select a single option from a list. This is valuable in applications that require users to make choices, such as:
  >- Selecting items from a list
  >- Choosing from a list of categories
  >- Picking options from predefined sets

2. **Form Inputs**: When designing forms that require users to input specific options, the `ChoiceBox` simplifies the selection process. Whether it's selecting a country, state, or any other option from a predefined list, the `ChoiceBox` streamlines the input process.

3. **Filtering and Sorting**: `ChoiceBox` can be employed for filtering and sorting tasks in applications. Users can choose filter criteria or sorting preferences from a list, facilitating the organization and navigation of data.

4. **Configuration and Settings**: When your application includes settings or configuration options, the `ChoiceBox` provides an intuitive way for users to adjust preferences. Users can pick settings from a list, making it easy to tailor the application to their needs.

:::tip
The `ChoiceBox` is intended for use when a preset number of options are available, and custom options should not be allowed or included. If allowing users to enter custom values is desired, use a [`ComboBox`](./combo-box.md) instead
:::

## Constructors

1. <JavadocLink type="engine" location="org/dwcj/component/list/ChoiceBox" code='true' suffix='#<init>()'>ChoiceBox()</JavadocLink>: Constructs a new `ChoiceBox` without a label.
2. <JavadocLink type="engine" location="org/dwcj/component/list/ChoiceBox" code='true' suffix='#<init>(java.lang.String)'>ChoiceBox(String label)</JavadocLink>: Constructs a new `ChoiceBox` with the specified label.
3. <JavadocLink type="engine" location="org/dwcj/component/list/ChoiceBox" code='true' suffix='#<init>(java.lang.String,org.dwcj.component.event.ComponentEventListener)'>ChoiceBox(String label, ComponentEventListener< ListSelectEvent> selectListener)</JavadocLink>: Constructs a new `ChoiceBox` with the given label and a listener to handle item selection events.

## Dropdown Type

Using the <JavadocLink type="engine" location="org/dwcj/component/list/DwcSelectDropdown" code='true' suffix='#setDropdownType(java.lang.String)'>setDropdownType()</JavadocLink> method will assign a value to the `type` attribute of a `ChoiceBox`, and a corresponding value for the `data-dropdown-for` attribute in the dropdown of the `ChoiceBox`. This is helpful for styling, as the dropdown is taken out of its current position in the DOM and relocated to the end of the page body when opened.

<!-- ![example type](../_images/choicebox/type.png)
![example type](../_images/choicebox/type_zoomed.png) -->

This detachment creates a situation where directly targeting the
dropdown using CSS or shadow part selectors from the parent component becomes challenging, unless you make use of the dropdown type attribute.

In the demo below, the Dropdown type is set and used in the CSS file to select the dropdown and change the background color.

<ComponentDemo 
path='https://demo.webforj.com/webapp/controlsamples?class=componentdemos.choiceboxdemos.ChoiceBoxDropdownType' 
javaE='https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/java/componentdemos/choiceboxdemos/ChoiceBoxDropdownType.java'
javaC='https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/code_snippets/choicebox/DropdownType.txt'
cssURL='https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/resources/css/comboboxstyles/dropdown_styles.css'
height='250px'
/>

## Max Row Count

By default, the number of rows displayed in the dropdown of a `ChoiceBox` will be increased to fit the content. However, using the <JavadocLink type="engine" location="org/dwcj/component/list/DwcSelectDropdown" code='true' suffix='#setMaxRowCount(int)'>setMaxRowCount()</JavadocLink> method allows for control over how many items are displayed. 

:::caution
Using a number that is less than or equal to 0 will result in unsetting this property.
:::

<ComponentDemo 
path='https://demo.webforj.com/webapp/controlsamples?class=componentdemos.choiceboxdemos.ChoiceBoxMaxRowDemo' 
javaE='https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/java/componentdemos/choiceboxdemos/ChoiceBoxMaxRowDemo.java'
javaC='https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/code_snippets/choicebox/MaxRow.txt'
height='250px'
/>

## Opening Dimensions

The `ChoiceBox` component has methods that allow manipulation of the dropdown dimensions. The **maximum height** and **minimum width** of the dropdown can be set using the <JavadocLink type="engine" location="org/dwcj/component/list/DwcSelectDropdown" code='true' suffix='#setOpenHeight(int)'>setOpenHeight()</JavadocLink> and <JavadocLink type="engine" location="org/dwcj/component/list/DwcSelectDropdown" code='true' suffix='#setOpenWidth(int)'>setOpenWidth()</JavadocLink> methods, respectively. 

:::tip
Passing a `String` value to either of these methods will allow for [any valid CSS unit](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Values_and_units) to be applied, such as pixels, viewport dimensions, or other valid rules. Passing an `int` will set the value passed in pixels.
:::

## Events

The `ChoiceBox` class provides methods to add and remove event listeners for the following events, as well as events common to all list components:

| Events | Description |
|:-:|-|
|<JavadocLink type="engine" location="org/dwcj/component/list/event/ListOpenEvent"  code="true">ListOpenEvent</JavadocLink>|An event which is fired when a list dropdown is opened.|
|<JavadocLink type="engine" location="org/dwcj/component/list/event/ListCloseEvent"  code="true">ListCloseEvent</JavadocLink>|An event which is fired when a list dropdown is closed.|
|<JavadocLink type="engine" location="org/dwcj/component/list/event/ListClickEvent"  code="true">ListClickEvent</JavadocLink>|This event is triggered when the user clicks an item from a List-based component.|

:::tip
For a list of additional events supported by the `ChoiceBox`, see [this section](./lists.md#shared-events) which outlines shared events amongst list components.
:::
<!-- 
### Adding Events

To add an event listener, use one of the following patterns:

```java
choiceBox.addOpenListener(e -> {
  //Executed when the event fires
});

//OR

choiceBox.addOpenListener(new ComponentEventListener<ListOpenEvent>() {
  @Override
  public void onComponentEvent(ComponentEvent e){
    //Executed when the event fires
  }
});

//OR

choiceBox.addOpenListener(this::listOpenMethod);
```

Additional syntactic sugar methods, or aliases, have been added to allow for alternative addition of events by using the `on` prefix followed by the event, such as:

```java
choiceBox.onOpen(e -> {
  //Executed when the event fires
});
```

### Removing Events

To remove an event listener, use the appropriate method:

```java
choiceBox.removeOpenListener(listener);
```

:::tip
When adding an event listener, a `ListenerRegistration` object will be returned. This can be used, among other things, to remove the event later on.
::: -->

## Styling
<!-- 
### Expanses
There are five `ChoiceBox` expanses that are supported which allow for quick styling without using CSS. Expanses are supported by use of a built-in enum class. <br/>

<ComponentDemo 
path='https://demo.webforj.com/webapp/controlsamples?class=componentdemos.choiceboxdemos.ComboboxExpanseDemo' 
javaE='https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/java/componentdemos/choiceboxdemos/ComboboxExpanseDemo.java'
javaC='https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/code_snippets/combobox/Expanse.txt'
cssURL='https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/resources/css/comboboxstyles/expanse_styles.css' 
height="150px"
/>

### Themes

The `ChoiceBox` component comes with 14 themes built in for quick styling without the use of CSS. Theming is supported by use of a built-in enum class.

<ComponentDemo 
path='https://demo.webforj.com/webapp/controlsamples?class=componentdemos.choiceboxdemos.ComboboxThemeDemo' 
javaE='https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/java/componentdemos/choiceboxdemos/ComboboxThemeDemo.java'
cssURL='https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/resources/css/comboboxstyles/theme_styles.css' 
height="170px"
/> -->

### Shadow Parts

These are the various parts of the [shadow DOM](../../glossary#shadow-dom) for the `ChoiceBox` component, which will be required when styling via CSS is desired.

<TableBuilder tag={require('@site/docs/components/_dwc_control_map.json').ChoiceBox} table='parts' exclusions='' />

### CSS Properties

These are the various CSS properties that are used in the component, with a short description of their use.

<TableBuilder tag={require('@site/docs/components/_dwc_control_map.json').ChoiceBox} exclusions='' table='properties'/>

### Reflected Attributes

The reflected attributes of a component will be shown as attributes in the rendered HTML element for the component in the DOM. This means that styling can be applied using these attributes.

<TableBuilder tag={require('@site/docs/components/_dwc_control_map.json').ChoiceBox} table="reflects" exclusions=''/>

### Dependencies

This component relies on the following components - see the related article for more detailed styling information:

<TableBuilder tag='dwc-choicebox' table="dependencies"/>

## Best Practices 

To ensure an optimal user experience when using the `ChoiceBox` component, consider the following best practices:

1. **Clear and Limited Options**: Keep the list of choices concise where possible, and relevant to the user's task. A `ChoiceBox` is ideal for presenting a clear list of options.

2. **User-Friendly Labels**: Ensure that the displayed labels for each option are user-friendly and self-explanatory. Make sure users can easily understand the purpose of each choice.

3. **Default Selection**: Set a default selection when the ChoiceBox is initially displayed. This ensures a pre-selected option, reducing the number of interactions required to make a choice.

4. **ChoiceBox vs. Other List Components**: A `ChoiceBox` should be used over other List components in the following situations:

  >- Multiple Selection is not needed or required, and all items do not need to be displayed at once.
  >- A selection of predefined choices is desired, preventing users from entering custom or unexpected data.