---
sidebar_position: 5
title: Button
---

import ComponentDemo from '@site/src/components/DocsTools/ComponentDemo';
import TableBuilder from '@site/src/components/DocsTools/TableBuilder';
import JavadocLink from '@site/src/components/DocsTools/JavadocLink';
import DocChip from '@site/src/components/DocsTools/DocChip';
import FiberSmartRecordIcon from '@mui/icons-material/FiberSmartRecord';
import Chip from '@mui/material/Chip';

<DocChip tooltipText="This component will render with a shadow DOM, an API built into the browser that facilitates encapsulation." label="Shadow" component="a" href="../glossary#shadow-dom" target="_blank" clickable={true} iconName="shadow" />

<DocChip tooltipText="The name of the web component that will render in the DOM." label="bbj-button" href="https://basishub.github.io/basis-next/#/web-components/bbj-button" clickable={true} iconName='code'/>


<JavadocLink type="engine" location="org/dwcj/component/button/Button" top='true'/>

A `Button` component is a fundamental user interface element used in application development to create interactive elements that trigger actions or events when clicked or activated. It serves as a clickable element that users can interact with to perform various actions within an application or website. 

The primary purpose of the `Button` component is to provide a clear and intuitive call-to-action for users, guiding them to perform specific tasks such as submitting a form, navigating to another page, triggering a function, or initiating a process. Buttons are essential for enhancing user interactions, improving accessibility, and creating a more engaging user experience.

<ComponentDemo 
path='https://hot.bbx.kitchen/webapp/controlsamples?class=componentdemos.buttondemos.ButtonDemo' 
javaC='https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/java/componentdemos/buttondemos/ButtonDemo.java'
cssURL='https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/resources/css/buttonstyles/demo_styles.css'
height='300px'
/>

## Usages

The `Button` class is a versatile component that is commonly used in various situations where user interactions and actions need to be triggered. Here are some typical scenarios where you might need a button in your application:

1. **Form Submission**: Buttons are often used to submit form data. For example, in an application, you can use:

  > - A "Submit" button to send data to the server
  > - A "Clear" button to remove any information already present in the form

2. **User Actions**: Buttons are used to allow users to perform specific actions within the application. For instance, you can have a button labeled:

  > - "Delete" to initiate the deletion of a selected item
  > - "Save" to save changes made to a document or page.

3. **Confirmation Dialogs**: Buttons are often included in [`Dialog`](../components/dialog) components built for various purposes to provide options for users to confirm or cancel an action, or any other functionality that is built into the [`Dialog`](../components/dialog) you're using.

4. **Interaction Triggers**: Buttons can serve as triggers for interactions or events within the application. By clicking a button, users can initiate complex actions or trigger animations, refreshing content, or updating the display.

5. **Navigation**: Buttons can be used for navigation purposes, such as moving between different sections or pages within an application. Buttons for navigation could include:

  > - "Next" - Takes the user to the next page or section of the current application or page.
  > - "Previous" - Returns the user to the previous page of the application or section they're in.
  > - "Back" Returns the user to the first part of the application or page they're in.


## Constructors

The `Button` class has three constructors:

1. <JavadocLink type="engine" location="org/dwcj/component/button/Button" code='true' suffix='#<init>()'>Button()</JavadocLink>: Creates an empty <code>Button</code> without any text inside the component.
2. <JavadocLink type="engine" location="org/dwcj/component/button/Button" code='true' suffix='#<init>(java.lang.String)'>Button(String text)</JavadocLink>: Creates a <code>Button</code> with text inside the component.
3. `Button(String text, EventListener<ButtonClickEvent> onClickListener)` Creates a `Button` with text inside the component, and an <JavadocLink type="engine" location="org/dwcj/component/event/EventListener" code='true'>EventListener</JavadocLink> for a <JavadocLink type="engine" location="org/dwcj/component/button/event/ButtonClickEvent" code='true'>ButtonClickEvent</JavadocLink> which fires when a user clicks on the `Button`.

Here is an example of how to create a `Button` object:

```java
Button submit = new Button("Submit");
```

## Adding Icons to Buttons

In addition to, or instead of having text on a button, it is possible to add an icon to a button as well. To add these icons, set the button's text to have an `<html>` tag, with a `<bbj-icon>` tag inside with the name attribute set accordingly. In addition to an icon, include text to the left or right of the `<bbj-icon>` tag to include a label as well. Icons added to the left and/or right of the button should be done using the `prefix` and `suffix` slots.

To read more about customizing, configuring and styling icons, read [**this page**](../components/related-components/bbj-icon).

:::tip
Icons added in this way will automatically be configured to match the theme of the Button, but need to be manually configured if a different sized icon is desired when changing `Button` expanse.
:::

Below are examples of buttons with text to the left and right, as well as a button with only an icon:

<ComponentDemo 
path='https://hot.bbx.kitchen/webapp/controlsamples?class=componentdemos.buttondemos.ButtonIcon' 
javaE='https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/java/componentdemos/buttondemos/ButtonIcon.java'
javaC='https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/code_snippets/button/Icon.txt'
cssURL='https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/resources/css/buttonstyles/icon_styles.css' 
height="100px"
/>



## Disabling a Button

Button components, like many others, can be disabled to convey to a user that a certain action is not yet or is no longer available. A disabled button will decrease the opacity of the button, and is available for all button themes and expanses.

<ComponentDemo 
path='https://hot.bbx.kitchen/webapp/controlsamples?class=componentdemos.buttondemos.ButtonDisable' 
javaE='https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/java/componentdemos/buttondemos/ButtonDisable.java'
javaC='https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/code_snippets/button/Disable.txt'
cssURL='https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/resources/css/buttonstyles/disable_styles.css'
/>

<br />

Disabling a button can be done at any time in the code by using the <JavadocLink type="engine" location="org/dwcj/component/HasEnable" code='true'>setEnabled(boolean enabled)</JavadocLink> function. For added convenience, a button can also be disabled when clicked using the built-in <JavadocLink type="engine" location="org/dwcj/component/button/Button" code='true' suffix='#setDisableOnClick(java.lang.Boolean)'>setDisabledOnClick(boolean enabled)</JavadocLink> function.

In some applications, clicking a button triggers a long-running action. In most cases, the application might want to ensure that only a single click is processed.  This can be an issue in high-latency environments when the user clicks the button multiple times before the application has had a chance to start processing the resulting action. 

:::info
Disabling on click not only helps optimize the processing of actions, but also prevents the user from needing to implement this behavior on their own, as this method has been optimized to reduce round trip communications.
:::

<br />

## Events

The `Button` class provides methods to add and remove event listeners for the following events:

| Events | Description |
|:-:|-|
|[`BlurEvent`](../components/events/BlurEvent)|An event that is triggered when a component loses focus.|
|[`ButtonClickEvent`](../components/events/ButtonClickEvent)|An event that is triggered when a user interacts with a button by clicking or tapping on it. |
|[`FocusEvent`](../components/events/FocusEvent)|An event that is triggered when a component gains focus, opposite of a blur event. |
|[`MouseEnterEvent`](../components/events/MouseEnterEvent)|An event that is triggered when the mouse cursor enters the boundaries of a component. |
|[`MouseExitEvent`](../components/events/MouseExitEvent)|An event that is triggered when the mouse cursor exits the boundaries of a component. |
|[`RightMouseDownEvent`](../components/events/RightMouseDownEvent)|An event that is triggered when the user presses the right mouse button while the cursor is over a component.|

<br />

### Adding Events

To add an event listener, use the appropriate method:

```java
myButton.addClickListener(e -> {
  //Executed when the event fires
});
```

Additional syntactic sugar methods, or aliases, have been added to allow for alternative addition of events by using the `on` prefix followed by the event, such as:

```java
myButton.onClick(e -> {
    //Executed when the event fires
});
```



### Removing Events

To remove an event listener, use the appropriate method:

```java
myButton.removeClickListener(listener);
```

#### Sample

Below is a demonstration showing the addition of a [`ButtonClickEvent`](../components/events/ButtonClickEvent) to a `Button`. This `Button` also uses information coming with the event's payload to display information on the screen.

:::tip
Below is a simple demonstration using a [`ButtonClickEvent`](../components/events/ButtonClickEvent) - notice the event payload is used to attain information that is then utilized within the callback, which reduces the number of round trips made between the client and server. This is much more efficient than querying the component for the required information whenever data that is provided in the event payload is needed. [This page](../getting_started/architecture) explains this in greater detail.
:::

<ComponentDemo 
path='https://hot.bbx.kitchen/webapp/controlsamples?class=componentdemos.buttondemos.ButtonEvent' 
javaE='https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/java/componentdemos/buttondemos/ButtonEvent.java'
javaC='https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/code_snippets/button/Event.txt'
cssURL='https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/resources/css/buttonstyles/event_styles.css'
height='100px'
/>


## Styling

### Themes

`Button` components come with **<JavadocLink type="engine" location="org/dwcj/component/button/Button.Theme">14 discrete themes </JavadocLink>** built in for quick styling without the use of CSS. These themes are pre-defined styles that can be applied to buttons to change their appearance and visual presentation. They offer a quick and consistent way to customize the look of buttons throughout an application. 

While there are many use cases for each of the various themes, some examples uses are:

  - **Danger**: Actions with severe consequences, such as clearing filled-out information, or permanently deleting an account/data is represents a good use case for buttons with the Danger theme.
  - **Default**: The default theme is appropriate for actions throughout an application that do not require special attention and that are generic, such as toggling a setting.
  - **Primary**: This theme is appropriate as a main "call-to-action" on a page, such as signing up, saving changes, or continuing to another page.
  - **Success**: Success themed buttons are excellent for visualizing successful completion of an element in an application, such as the submission of a form or completion of a sign-up process. The success theme can by programmatically applied once a successful action has been completed.
  - **Warning**: Warning buttons are useful to indicate users they are about to perform a potentially risky action, such as when navigating away from a page with unsaved changes. These actions are often less impactful than those that would use the Danger theme.
  - **Gray**: Good for subtle actions, such as minor settings or actions that are more supplementary to a page, and not part of the main functionality.
  - **Info**: The Info theme is a good choice to provide clarifying, additional information to a user when pushed.

Shown below are example buttons with each of the supported Themes applied: <br/>

<ComponentDemo 
path='https://hot.bbx.kitchen/webapp/controlsamples?class=componentdemos.buttondemos.ButtonThemes' 
javaE='https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/java/componentdemos/buttondemos/ButtonThemes.java'
javaC='https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/code_snippets/button/Theme.txt'
cssURL='https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/resources/css/buttonstyles/theme_styles.css'
height='175px'
/>

### Expanses
There are five expanses that are supported which allow for quick styling without using CSS. This allows for manipulation of the Button's dimensions without having to explicitly set it using any styling. In addition to simplifying styling, it also helps create and maintain a uniformity in your application. The default `Button` expanse is `Expanse.MEDIUM`.

Different sizes are often appropriate for different uses:
  - **Larger** expanse values are suited to buttons which should grab attention, emphasize functionality or are integral to the core functionality of an application or page.
  - **Medium** expanse buttons, the default size, should be utilized as a "standard size", when a button's behavior is no more or less important than other similar components.
  - **Smaller** expanse values should be used for buttons that do not have integral behaviors in the application, and serve a more supplementary or utilitarian role, rather than play an important part in user interaction. This includes `Button` components being used only with icons for utilitarian purposes.

Below are the various expanses supported for the `Button` component: <br/>

<ComponentDemo 
path='https://hot.bbx.kitchen/webapp/controlsamples?class=componentdemos.buttondemos.ButtonExpanses' 
javaE='https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/java/componentdemos/buttondemos/ButtonExpanses.java'
javaC='https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/code_snippets/button/Expanses.txt'
cssURL='https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/resources/css/buttonstyles/expanse_styles.css'
height='75px'
/>

### Shadow Parts

These are the various parts of the shadow DOM for the component, which will be required when styling via CSS is desired.

<TableBuilder tag={require('@site/docs/components/_bbj_control_map.json').Button} table='parts' exclusions={require('@site/static/exclusions.json').button.parts} />

### CSS Properties

These are the various CSS properties that are used in the component, with a short description of their use.

<TableBuilder tag={require('@site/docs/components/_bbj_control_map.json').Button} exclusions={require('@site/static/exclusions.json').button.properties} table='properties'/>

### Reflected Attributes

The reflected attributes of a component will be shown as attributes in the rendered HTML element for the component in the DOM. This means that styling can be applied using these attributes.

<TableBuilder tag={require('@site/docs/components/_bbj_control_map.json').Button} table="reflects" exclusions={require('@site/static/exclusions.json').button.reflects}/>


## Best Practices 

To ensure an optimal user experience when using the `Button` component, consider the following best practices:

1. **Proper Text**: Use clear and concise text for text within your `Button` component to provide a clear indication of its purpose.

2. **Appropriate Visual Styling**: Consider the visual styling and theme of the `Button` to ensure consistency with your application's design. For example:
  > - A "Cancel" `Button` component should be styled with the appropriate theme or CSS styling to ensure users are sure they want to cancel an action
  > - A "Confirm" `Button` would have a different styling from a "Cancel" button, but would similarly stand out to ensure that users know this is a special action.

3. **Efficient Event Handling**: Handle `Button` events efficiently and provide appropriate feedback to users. Refer to [**this section**](./button/#adding-events) to review efficient event adding behaviors.

4. **Testing and Accessibility**: Test the Button's behavior in different scenarios, such as when it is disabled or receives focus, to ensure a smooth user experience.
Follow accessibility guidelines to make the `Button` usable for all users, including those who rely on assistive technologies.
