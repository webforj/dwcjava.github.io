"use strict";(self.webpackChunkdwcj_documentation=self.webpackChunkdwcj_documentation||[]).push([[5894],{6042:e=>{e.exports=JSON.parse('{"blogPosts":[{"id":"whats-new-v24.11","metadata":{"permalink":"/blog/whats-new-v24.11","source":"@site/blog/2024-09-05-webforj-v24.11/24.11.md","title":"What\'s new in version 24.11?","description":"Get to know the features, fixes, and functionality new in webforJ version 24.11.","date":"2024-09-05T00:00:00.000Z","formattedDate":"September 5, 2024","tags":[{"label":"webforJ","permalink":"/blog/tags/webfor-j"},{"label":"v24.11","permalink":"/blog/tags/v-24-11"},{"label":"release","permalink":"/blog/tags/release"}],"readingTime":4.29,"hasTruncateMarker":true,"authors":[{"name":"webforJ Team","url":"https://github.com/webforj","image_url":"/img/webforj_icon.svg","imageURL":"/img/webforj_icon.svg"}],"frontMatter":{"title":"What\'s new in version 24.11?","description":"Get to know the features, fixes, and functionality new in webforJ version 24.11.","slug":"whats-new-v24.11","date":"2024-09-05T00:00:00.000Z","authors":[{"name":"webforJ Team","url":"https://github.com/webforj","image_url":"/img/webforj_icon.svg","imageURL":"/img/webforj_icon.svg"}],"tags":["webforJ","v24.11","release"],"image":"https://documentation.webforj.com/release_blog/_images/social-cover-24.11.png","hide_table_of_contents":false},"unlisted":false,"nextItem":{"title":"What\'s new in version 24.10?","permalink":"/blog/whats-new-24.10"}},"content":"![cover image](../../static/release_blog/_images/24.11.png)\\n\\nwebforJ version 24.11 is live and available for development. Learn more about what main features and fixes are included in this release.\\n\\n\x3c!-- truncate --\x3e\\n\\n# 24.11\\n\\nAs always, see the [GitHub release overview](https://github.com/webforj/webforj/releases/tag/24.11) for a more comprehensive list of changes. Highlighted below are some of the most exciting changes:\\n\\n## New features and enhancements \ud83c\udf89\\n\\nThe following new components, features, and enhancements to various existing behavior have been introduced in this release:\\n\\n### Using prefix and suffix slots\\n\\nIn order to streamline the use of many webforJ components, additional API methods have been added which allow utilization of prefix and suffix slots in various components. \\n\\nThese slots can be utilized in many different ways to best suit an app\'s behavior, such as adding icons, labels, loading spinners, clear/reset functionality, avatar/profile pictures, and many other useful behaviors.  \\n\\nThe following components have had API methods added to support this behavior:\\n\\n- [Button](../../docs/components/button)\\n- [ChoiceBox](../../docs/components/lists/choicebox)\\n- [ComboBox](../../docs/components/lists/combobox)\\n- [TabbedPane](../../docs/components/tabbedpane)\\n- [All Field Types](../../docs/components/fields)\\n\\nTo utilize these slots, getter and setter methods for prefix and suffix slots have been added. Below is an example for a [`Button`](../../docs/components/button):\\n\\n```java\\nFlexLayout layout = FlexLayout.create().horizontal().build()\\n   .setMargin(\\"var(--dwc-space-m)\\");\\n\\nButton contact = new Button(\\"Contact us\\", ButtonTheme.PRIMARY);\\ncontact.setPrefixComponent(FeatherIcon.MAIL.create());\\ncontact.onClick(e -> {\\n showMessageDialog(\\"Message has been sent!\\", \\"Sent Message\\");\\n});\\n\\nlayout.add(contact);\\n\\nFrame mainFrame = new Frame();\\nmainFrame.add(layout);\\n```\\n\\n\\n### Icon overhaul\\n\\nWith the addition of more fine-grained control over the slots of various components, the API of one of the most common use cases for slots has also been overhauled; icons now have a more streamlined and intuitive API for use within webforJ apps. \\n\\nUse the new `Icon` class to create an icon that can be added to a layout, or to a slot in a supporting component:\\n\\n```java\\nFlexLayout layout = FlexLayout.create().horizontal().build()\\n    .setMargin(\\"var(--dwc-space-m)\\");\\n    \\nFrame mainFrame = new Frame();\\n\\nIcon image = FeatherIcon.IMAGE.create();\\nIcon video = FeatherIcon.VIDEO.create();\\nIcon music = FeatherIcon.MUSIC.create();\\n\\nlayout.add(image, video, music);\\nmainFrame.add(layout);\\n```\\n\\n#### Icons across multiple collections\\n\\nThe new update allows developers to mix and match icons from different collections. With support for the icon libraries included by default with webforJ - [**Feather**](https://feathericons.com/), [**Tabler**](https://tabler.io/icons), and [**FontAwesome**](https://fontawesome.com/icons) - you can now select the perfect icon for your needs without being constrained to a single collection. This is especially useful for applications that require a variety of visual styles or specific icon designs.\\n\\nTo do this, use the factory methods provided to select the icon pool:\\n\\n```java\\nFlexLayout layout = FlexLayout.create().horizontal().build()\\n    .setMargin(\\"var(--dwc-space-m)\\");\\n\\nFrame mainFrame = new Frame();\\n\\nIcon image = FeatherIcon.IMAGE.create();\\nIcon video = TablerIcon.create(\\"video\\");\\nIcon music = FontAwesomeIcon.create(\\"music\\", FontAwesomeIcon.Variate.SOLID);\\n\\nlayout.add(image, video, music);\\nmainFrame.add(layout);\\n```\\n\\n#### Adding a custom icon pool\\n\\n Icon Pools, which allows developers to organize and manage icons more effectively. Icons can be stored in a centralized directory or a context path and accessed through a pool, simplifying the icon management process. You can create icon pools from directories using a full directory path, or a context path as shown below:\\n\\n ```java\\nIconPoolBuilder.fromDirectory(\\"app-pool\\", \\"context://icons\\");\\n\\n FlexLayout layout = FlexLayout.create().horizontal().build()\\n     .setMargin(\\"var(--dwc-space-m)\\");\\n\\n Frame mainFrame = new Frame();\\n\\n Icon bell = new Icon(\\"bell\\", \\"app-pool\\");\\n Icon dribbble = new Icon(\\"dribbble\\", \\"app-pool\\");\\n\\n layout.add(bell, dribbble);\\n mainFrame.add(layout);\\n ```\\n\\nFor developers looking for more integration of their custom icon pools, custom icon factories can now be created. This allows for defining reusable icon sets within an app, which makes creating your app more consistent and helps reduce maintenance across different components and modules.\\n\\n```java\\npublic enum AppPoolIcon implements IconFactory {\\n    BELL, DRIBBBLE;\\n\\n    public Icon create() {\\n        return new Icon(String.valueOf(this), this.getPool());\\n    }\\n\\n    @Override\\n    public String getPool() {\\n        return \\"app-pool\\";\\n    }\\n\\n    @Override\\n    public String toString() {\\n        return this.name().toLowerCase(Locale.ENGLISH).replace(\'_\', \'-\');\\n    }\\n}\\n```\\n#### Icon button\\n\\nFinally, the `IconButton` class has been added, and is ideal for actions that are best represented with just an icon, such as notifications or alerts.\\n\\n```java\\nFlexLayout layout = FlexLayout.create().horizontal().build().setMargin(\\"var(--dwc-space-m)\\");\\n\\nIconButton bell = new IconButton(FeatherIcon.BELL.create());\\nbell.onClick(e -> showMessageDialog(\\"You have a new message!\\", \\"Ding Dong!\\"));\\n\\nlayout.add(bell);\\n\\nFrame mainFrame = new Frame();\\nmainFrame.add(layout);\\n```\\n\\n### Void asynchronous JavaScript execution\\n\\nWith `24.11`, it\'s now possible to asynchronously call a specified JavaScript function or execute provided JavaScript code without returning a result to the server. This can be done on a specific [`Element`](../../docs/building-ui/element), or within the entire app by utilizing the `Page` instance. \\n\\n```java\\nFrame mainFrame = new Frame();\\n/* Executes async JS at the page level, independent of a specific element */\\nPage.getCurrent().executeJsVoidAsync(\\"{console.log(\'Printing information to the console\')}\\");\\n\\n/* Adds a click listener to the button which can be invoked programmatically */\\nElement button = new Element(\\"button\\", \\"Display User\\");\\nbutton.addEventListener(\\"click\\", e -> {App.console().log(\\"Button Clicked\\");});\\n\\n/* Will programmatically click the button */\\nbutton.callJsFunctionVoidAsync(\\"click\\");\\nmainFrame.add(button);\\n```\\n\\n### Using the `Page` for HTML event registration\\n\\nIn addition to using the `Page` class to execute JavaScript, support has been added to allow HTML events to be registered directly through the `Page` instance, without needing to use a specific [`Element`](../../docs/building-ui/element) as a bridge. This is particularly useful when an event should execute page-wide, broadening the scope of capability.\\n\\n```java\\nPageEventOptions pageEventOptions = new PageEventOptions();\\npageEventOptions.addData(\\"clientX\\", \\"event.clientX\\");\\npageEventOptions.addData(\\"clientY\\", \\"event.clientY\\");\\nListenerRegistration<PageEvent> r1 = Page.getCurrent().addEventListener(\\"click\\", e -> {\\n  int x = (int) e.getData().get(\\"clientX\\");\\n  int y = (int) e.getData().get(\\"clientY\\");\\n\\n  console().log(\\"x: \\" + x + \\", y: \\" + y);\\n}, pageEventOptions);\\n```"},{"id":"whats-new-24.10","metadata":{"permalink":"/blog/whats-new-24.10","source":"@site/blog/2024-07-23-webforj-v24.10/24.10.md","title":"What\'s new in version 24.10?","description":"Get to know the features, fixes, and functionality new in webforJ version 24.10.","date":"2024-07-23T00:00:00.000Z","formattedDate":"July 23, 2024","tags":[{"label":"webforJ","permalink":"/blog/tags/webfor-j"},{"label":"v24.10","permalink":"/blog/tags/v-24-10"},{"label":"release","permalink":"/blog/tags/release"}],"readingTime":5.185,"hasTruncateMarker":true,"authors":[{"name":"webforJ Team","url":"https://github.com/webforj","image_url":"/img/webforj_icon.svg","imageURL":"/img/webforj_icon.svg"}],"frontMatter":{"title":"What\'s new in version 24.10?","description":"Get to know the features, fixes, and functionality new in webforJ version 24.10.","slug":"whats-new-24.10","date":"2024-07-23T00:00:00.000Z","authors":[{"name":"webforJ Team","url":"https://github.com/webforj","image_url":"/img/webforj_icon.svg","imageURL":"/img/webforj_icon.svg"}],"tags":["webforJ","v24.10","release"],"image":"https://documentation.webforj.com/release_blog/_images/24.10-social.png","hide_table_of_contents":false},"unlisted":false,"prevItem":{"title":"What\'s new in version 24.11?","permalink":"/blog/whats-new-v24.11"},"nextItem":{"title":"Whats new in version 24.02?","permalink":"/blog/whats-new-24.02"}},"content":"import ComponentDemo from \'@site/src/components/DocsTools/ComponentDemo\';\\nimport terminalVideo from \'../../static/release_blog/terminal.mp4\';\\n\\n![cover image](../../static/release_blog/_images/24.10.png)\\n\\nwebforJ version 24.10 is live and available for development. Learn more about what main features and fixes are included in this release.\\n\\n\x3c!-- ![cover image](../static/img/webforJ-release-banner.png) --\x3e\\n\\n\x3c!-- truncate --\x3e\\n\\n# 24.10\\n\\nAs always, see the [GitHub release overview](https://github.com/webforj/webforj/releases/tag/24.10) for a more comprehensive list of changes.\\n\\n## New features and enhancements \ud83c\udf89\\n\\nThe following new components, features, and enhancements to various existing behavior have been introduced in this release:\\n\\n### `TextArea` and masked input component\\n\\n`24.10` brings the addition of several new components to the webforJ library. This release introduces various masked fields and decorators that utilize masked input, allowing for specific input patterns. The following components have been made available for development:\\n\\n- #### `MaskedDateField` & `MaskedDateFieldSpinner`\\n\\n  > These components allow users to input dates with a predefined format, with the spinner variant providing an intuitive way for users to increment or decrement date values. \\n\\n- #### `MaskedNumberField` & `MaskedNumberFieldSpinner`\\n\\n  > Designed for numerical input, these fields ensure that users can only enter valid numbers. The spinner variant adds convenience by allowing users to adjust the value using increment/decrement controls.\\n\\n- #### `MaskedTimeField` & `MaskedTimeFieldSpinner`\\n\\n  >These components handle time inputs, enforcing a standard time format. The spinner variant provides controls for easily adjusting time values.\\n\\n- #### `MaskedTextField` & `MaskedTextFieldSpinner`\\n\\n- #### `TextArea`\\n\\n  > A versatile, multi-line text input component ideal for larger text entries, such as comments or descriptions.\\n\\n\\n### `BusyIndicator`, `Loading` and `Spinner` components\\n\\nThe `Spinner` and `BusyIndicator` components have both been added in this release to the core webforJ components. The `Spinner` provides a simple, elegant way to display a loading animation, and can be used independently or as part of the `BusyIndicator` or `Loading` components.\\n\\nBuilding on the `Spinner`, the `BusyIndicator` is an app-level loading overlay that indicates when the app is busy or processing data. It blocks user interaction until the process is complete. This component displays both a `Spinner` and a textual description while the process is occurring. \\n\\n<ComponentDemo \\npath=\'https://demo.webforj.com/webapp/controlsamples/BusyIndicatorDemo?\' \\njavaE=\'https://raw.githubusercontent.com/webforj/ControlSamples/main/src/main/java/componentdemos/busyindicatordemos/BusyIndicatorDemo.java\'\\nheight = \'225px\'\\n/>\\n\\nThe `Loading` component uses the same client component, but allows the addition of children and can be attached to any parent component, making it scoped to its parent.\\n\\n### Terminal emulator\\n\\nThe webforJ `Terminal` component represents an exciting opportunity to emulate a terminal in a webforJ app. Based on `xterm.js`, this tool allows for interactions with a terminal while running within a webforJ app, blending command line features with modern web app capabilities. \\n\\n<video width=\\"100%\\" height=\\"300px\\" controls>\\n  <source src={terminalVideo} type=\\"video/mp4\\" />\\n</video>\\n\\n### Column layout\\n\\nThe `ColumnsLayout` component has come to webforJ in `24.10`, and is designed to offer a flexible and responsive layout solution in addition to the [FlexLayout](../../docs/components/flex_layouts) component. The `ColumnsLayout` easily facilitates two-dimensional layouts by providing columns rather than just rows. It dynamically adjusts the number of columns based on the width of the layout and utilizes breakpoints to determine how many columns should be displayed at different viewport widths to help with responsiveness.\\n\\n<ComponentDemo \\npath=\'https://demo.webforj.com/webapp/controlsamples/ColumnsLayoutDemo?\' \\njavaE=\'https://raw.githubusercontent.com/webforj/ControlSamples/main/src/main/java/componentdemos/columnslayoutdemos/ColumnsLayoutDemo.java\'\\nheight = \'300px\'\\n/>\\n\\nIn addition to dynamic column adjustments, `ColumnsLayout` supports customizable alignment and spacing options. The `ColumnsLayout` component is designed to be intuitive and easy to use. It includes built-in methods for setting column spans and positions, making it simple to create complex layouts with minimal effort.\\n\\nNext time you build a form, give this new component a try in your app!\\n\\n### Slider overhaul\\n\\nThe `Slider` component has received on overhaul in this release. The appearance and use case for the component remains the same, ensuring that your applications have the same look and feel as they did prior to the updated API overhaul.\\n\\nHowever, with this rework, a few of the methods have changed to better reflect modern standards. If you are using this component in your app, review the following methods to ensure you\'re using the updated API. An example of the various methods can be seen in the code demo below:\\n\\n<ComponentDemo \\npath=\'https://demo.webforj.com/webapp/controlsamples?class=componentdemos.sliderdemos.SliderDemo\' \\njavaE=\'https://raw.githubusercontent.com/webforj/ControlSamples/main/src/main/java/componentdemos/sliderdemos/SliderDemo.java\'\\nheight = \'150px\'\\n/>\\n\\n### Toast component\\n\\nAnother powerful component introduced in `24.10` is the `Toast` component, which offers a subtle notification system commonly used in modern applications to inform users about the completion of an operation, system messages, or other important updates.\\n\\nDevelopers can set the display duration, choose from various themes, and configure the position of the toast on the screen. The component supports multiple placements, and also allows for setting custom text and HTML content, giving developers the ability to style the messages as needed.\\n\\n<ComponentDemo \\npath=\'https://demo.webforj.com/webapp/controlsamples/ToastDemo?\' \\njavaE=\'https://raw.githubusercontent.com/webforj/ControlSamples/main/src/main/java/componentdemos/toastdemos/ToastDemo.java\'\\nheight = \'300px\'\\n/>\\n\\n### Debugging tooling\\n\\nLogging to the console has gotten much more powerful in `24.10`. A dedicated utility class can now be accessed statically through the `App` class to log styled messages to the browser console. \\n\\n```java\\n// Types\\nconsole().log(\\"Log message\\");\\nconsole().info(\\"Info message\\");\\nconsole().warn(\\"Warn message\\");\\nconsole().error(\\"Error message\\");\\nconsole().debug(\\"Debug message\\");\\n```\\n\\nA variety of builder-patterned methods are available for more fine-grained control over the appearance of messages in the console. These include font weight, style, size, text color, background color, and other configurations.\\n\\n```java\\n// A variety of options for custom logging display\\nconsole().weight().bolder().size().from(\\"30px\\").color().red().style().italic().transform()\\n    .uppercase().background().cyan().warn(\\"Mixing Styles\\");\\n\\n```\\n\\n## Breaking changes \ud83d\udee0\\n\\nWhen updating an existing project using an older version of webforJ, keep an eye out for the following breaking changes:\\n\\n### Console logging\\n\\nUsing the browser\'s console to get valuable program information printed is an integral part of the development process. Previously, the `App.consoleLog()` and `App.consoleError()` methods enabled this behavior. In `24.10`, these methods have been marked for deprecation. Going forward, use `BrowserConsole`, which comes with a slough of new features to enhance logging capabilities. The new equivalent method to print to the console is [`App.console().log()`](#debugging-tooling). \\n\\n### HTML container\\nThe `HtmlContainer` component is marked for deprecation in `24.10`. Going forward, use `Element` instead for custom content or use the `Iframe` component for embedding pages.\\n\\n### Rendering HTML in components\\n\\nSetting HTML text that\'s not specifically wrapped with `<html>` tags using the `setText` method is no longer possible. To set HTML, make sure to wrap your code with these tags to properly render the desired code.\\n\\n```java\\n// Valid\\nButton home = new Button(\\"\\"\\"\\n  <html>\\n    <dwc-icon name=\'home\'></dwc-icon>\\n  </html>\\n\\"\\"\\");\\n```\\n\\n```java\\n// Not Valid\\nButton home = new Button(\\"\\"\\"\\n    <dwc-icon name=\'home\'></dwc-icon>\\n\\"\\"\\");\\n```"},{"id":"whats-new-24.02","metadata":{"permalink":"/blog/whats-new-24.02","source":"@site/blog/2024-06-03-webforj-v24.02/24.02.md","title":"Whats new in version 24.02?","description":"Get to know the features, fixes and functionality new in webforJ version 24.02.","date":"2024-06-03T00:00:00.000Z","formattedDate":"June 3, 2024","tags":[{"label":"webforJ","permalink":"/blog/tags/webfor-j"},{"label":"v24.02","permalink":"/blog/tags/v-24-02"},{"label":"release","permalink":"/blog/tags/release"}],"readingTime":2.895,"hasTruncateMarker":true,"authors":[{"name":"webforJ Team","url":"https://github.com/webforj","image_url":"/img/webforj_icon.svg","imageURL":"/img/webforj_icon.svg"}],"frontMatter":{"title":"Whats new in version 24.02?","description":"Get to know the features, fixes and functionality new in webforJ version 24.02.","slug":"whats-new-24.02","date":"2024-06-03T00:00:00.000Z","authors":[{"name":"webforJ Team","url":"https://github.com/webforj","image_url":"/img/webforj_icon.svg","imageURL":"/img/webforj_icon.svg"}],"tags":["webforJ","v24.02","release"],"image":"https://documentation.webforj.com/release_blog/_images/24.02-social.png","hide_table_of_contents":false},"unlisted":false,"prevItem":{"title":"What\'s new in version 24.10?","permalink":"/blog/whats-new-24.10"},"nextItem":{"title":"Whats new in version 24.01?","permalink":"/blog/whats-new-24.01"}},"content":"import ComponentDemo from \'@site/src/components/DocsTools/ComponentDemo\';\\n\\n![cover image](../../static/release_blog/_images/24.02.png)\\n\\nwebforj version 24.02 is live and available for development. Learn more about what main features and fixes are included in this release.\\n\\n\x3c!-- ![cover image](../static/img/webforJ-release-banner.png) --\x3e\\n\\n\x3c!-- truncate --\x3e\\n\\n# 24.02\\n\\nAs always, see the [GitHub release overview](https://github.com/webforj/webforj/releases/tag/24.01) for a more comprehensive list of changes.\\n\\n## Option dialogs\\n\\n<ComponentDemo \\npath=\'https://demo.webforj.com/webapp/controlsamples?class=componentdemos.optiondialog.confirm.ConfirmDialogConstructor\' \\njavaE=\'https://raw.githubusercontent.com/webforj/ControlSamples/main/src/main/java/componentdemos/optiondialog/confirm/ConfirmDialogConstructor.java\'\\nheight = \'350px\'\\n/>\\n\\nWith 24.02, webforJ introduces a robust option dialog feature that allows applications to interact with users and gather input effectively. These dialogs are modal, meaning they halt app execution until the user provides input, ensuring critical messages are addressed before proceeding. These function similarly to `JOptionPane` in Swing, addressing the need for blocking dialogs in web applications.\\n\\nThere are multiple types of these dialogs:\\n\\n- **`Message`**: Display informative messages to users.\\n- **`Confirm`**: Request user confirmation for specific actions.\\n- **`Input`**: Gather textual input from users.\\n- **`File Chooser`**: Allow users to select files from their system.\\n- **`File Upload`**: Enable users to upload files directly.\\n\\nThe various dialog options are provided to help clarify and specify the type of interaction users should take throughout navigation of an app. \\n\\n## Progress bar overhaul\\n\\nThe `ProgressBar` in 24.02 has gotten a powerful, comprehensive overhaul. This component provides a visual representation of task progress, making it easy for users to monitor the completion status of ongoing tasks. The progress bar fills up as the task progresses, displaying the percentage of completion both visually and textually.\\n\\n<ComponentDemo \\npath=\'https://demo.webforj.com/webapp/controlsamples?class=componentdemos.progressbar.ProgressBarBasic\' \\njavaE=\'https://raw.githubusercontent.com/webforj/ControlSamples/main/src/main/java/componentdemos/progressbar/ProgressBarBasic.java\'\\nheight=\'150px\'\\n/>\\n\\nThe following key features are included in the `ProgressBar` out of the box:\\n\\n- **Configurable Values**: Supports setting and getting current, minimum, and maximum values to accurately represent task progress.\\n\\n- **Indeterminate Mode**: Allows for an indeterminate state to indicate ongoing tasks without a definite end.\\n\\n- **Text Visibility**: Options to display the percentage of completion or the raw value as text.\\n\\n- **Orientation Support**: The `ProgressBar` can be oriented either horizontally or vertically, providing flexibility in how it is displayed in your app.\\n\\n- **Styling Options**: Includes themes, animation, and striped designs for enhanced visual feedback.\\n\\nThe `ProgressBar` component is highly versatile and can be used to visualize the completion status of various tasks. It allows configuration of minimum and maximum values, making it adaptable to different use cases.\\n\\n## Interval\\n\\n`24.02` introduces `Interval` capability in webforJ, providing a mechanism similar to the Swing `Timer`, which offers a way to execute code at fixed time intervals. This feature is essential for tasks that need periodic execution, such as updating UI elements, performing background operations, or polling for data.\\n\\nIn the above `ProgressBar` the start, pause and restart features were all implemented via webforJ\'s `Interval` class. In addition to these functions, it also allows developers to specify a timeout value in seconds, supporting fractional seconds for precise timing. For tasks with unknown completion times, the `Interval` can be set to an indeterminate state, allowing it to keep running until explicitly stopped.\\n\\nTo create, start, stop, and then restart an interval, the following code can be executed:\\n\\n```java\\n// Create a new Interval with a delay of 2.5 seconds\\nInterval interval = new Interval(2.5f, event -> {\\n    System.out.println(\\"Interval elapsed!\\");\\n});\\n\\n// Start the interval\\ninterval.start();\\n\\n// Stop the interval\\ninterval.stop();\\n\\n// Restart the interval\\ninterval.restart();\\n```\\n\\nThe `Interval` helps manage periodic tasks - its ability to handle fixed time delays, support multiple event listeners, and provide robust performance makes it an essential feature for developers looking to implement timed events efficiently."},{"id":"whats-new-24.01","metadata":{"permalink":"/blog/whats-new-24.01","source":"@site/blog/2024-04-26-webforj-v24.01/24.01.md","title":"Whats new in version 24.01?","description":"Get to know the features, fixes and functionality new in webforJ version 24.01.","date":"2024-04-26T00:00:00.000Z","formattedDate":"April 26, 2024","tags":[{"label":"webforJ","permalink":"/blog/tags/webfor-j"},{"label":"v24.01","permalink":"/blog/tags/v-24-01"},{"label":"release","permalink":"/blog/tags/release"}],"readingTime":2.175,"hasTruncateMarker":true,"authors":[{"name":"webforJ Team","url":"https://github.com/webforj","image_url":"/img/webforj_icon.svg","imageURL":"/img/webforj_icon.svg"}],"frontMatter":{"title":"Whats new in version 24.01?","description":"Get to know the features, fixes and functionality new in webforJ version 24.01.","slug":"whats-new-24.01","date":"2024-04-26T00:00:00.000Z","authors":[{"name":"webforJ Team","url":"https://github.com/webforj","image_url":"/img/webforj_icon.svg","imageURL":"/img/webforj_icon.svg"}],"tags":["webforJ","v24.01","release"],"image":"https://documentation.webforj.com/release_blog/_images/24.01-social.png","hide_table_of_contents":false},"unlisted":false,"prevItem":{"title":"Whats new in version 24.02?","permalink":"/blog/whats-new-24.02"},"nextItem":{"title":"Whats new in version 24.00?","permalink":"/blog/whats-new-24.00"}},"content":"import ComponentDemo from \'@site/src/components/DocsTools/ComponentDemo\';\\n\\n![cover image](../../static/release_blog/_images/24.01.png)\\n\\nwebforj version `24.01` is live and available for development. Learn more about what main features and fixes are included in this release.\\n\\n\x3c!-- ![cover image](../static/img/webforJ-release-banner.png) --\x3e\\n\\n\x3c!-- truncate --\x3e\\n\\n# `24.01`\\n\\nAs always, see the [GitHub release overview](https://github.com/webforj/webforj/releases/tag/24.01) for a more comprehensive list of changes.\\n\\n## New data binding feature in webforJ\\n\\nwebforJ `24.01` introduces a robust data binding capability, smoothly connecting UI components with backend data models in Java applications. This integration ensures that any changes made in the UI are immediately reflected in the data model and vice versa. This feature greatly simplifies data management and reduces time to completion. Below are some of the key features:\\n\\n- **Bidirectional Binding**: Automatically synchronizes changes between the data model and the UI, ensuring that updates in one are mirrored in the other.\\n\\n- **Comprehensive Validation**: Provides robust validation options that can be customized, allowing developers to implement custom rules or leverage existing validation frameworks like Jakarta Validation to maintain data accuracy.\\n\\n- **Extensibility**: Easily extendable to support a wide range of UI components, data transformations, and complex validation needs.\\n\\n- **Annotation-Based Configuration**: Reduces the need for repetitive code by using annotations to declare bindings, making the process more straightforward and easier to maintain.\\n\\nFor most cases, webforJ\'s data binding between UI component and data model can be done automatically. For more complex cases, tools have been provided to make the binding seamless and straightforward.\\n\\nFunctionality such as transformation and validation further enhance the binding capabilities to further simplify UI interaction with the data layer. For more information on this feature, see the [documentation entry](../../docs/data-binding/getting-started).\\n\\n\\n## Login component\\n\\n<ComponentDemo \\npath=\'https://demo.webforj.com/webapp/controlsamples?class=componentdemos.login.LoginBasic\' \\njavaE=\'https://raw.githubusercontent.com/webforj/ControlSamples/main/src/main/java/componentdemos/login/LoginBasic.java\'\\nheight = \'450px\'\\n/>\\n\\nThe latest `Login` component in webforJ offers an intuitive and efficient interface for user authentication, enabling users to log in using their username and password. This component is highly customizable to enhance user experiences across various devices and locales.\\n\\nAll of the features you\'d expect from a `Login` component is included:\\n\\n- **Intuitive Interface**: Provides clear input fields for username and password, a toggle for password visibility, and validation feedback to ensure proper formatting before submission.\\n\\n- **Flexible and Extensible**: Easily extendable to include additional fields, such as Customer ID, and configurable to allow empty passwords if necessary.\\n\\n- **Localization Support**: Fully customizable titles, descriptions, labels, and messages through the LoginI18n class, allowing for precise localization and personalization.\\n\\nUsing the `Login` component can help shave off development time, and provides and attractive and powerful entry point into applications. For a more detailed overview on the `Login` components, take a look at the [docs entry here](../docs/components/login)."},{"id":"whats-new-24.00","metadata":{"permalink":"/blog/whats-new-24.00","source":"@site/blog/2024-04-08-webforj-v24.00/24.00.md","title":"Whats new in version 24.00?","description":"Get to know the features, fixes and functionality new in webforJ version 24.00.","date":"2024-04-08T00:00:00.000Z","formattedDate":"April 8, 2024","tags":[{"label":"webforJ","permalink":"/blog/tags/webfor-j"},{"label":"v24.00","permalink":"/blog/tags/v-24-00"},{"label":"release","permalink":"/blog/tags/release"}],"readingTime":2.14,"hasTruncateMarker":true,"authors":[{"name":"webforJ Team","url":"https://github.com/webforj","image_url":"/img/webforj_icon.svg","imageURL":"/img/webforj_icon.svg"}],"frontMatter":{"title":"Whats new in version 24.00?","description":"Get to know the features, fixes and functionality new in webforJ version 24.00.","slug":"whats-new-24.00","date":"2024-04-08T00:00:00.000Z","authors":[{"name":"webforJ Team","url":"https://github.com/webforj","image_url":"/img/webforj_icon.svg","imageURL":"/img/webforj_icon.svg"}],"tags":["webforJ","v24.00","release"],"image":"https://documentation.webforj.com/release_blog/_images/24.00-social.png","hide_table_of_contents":false},"unlisted":false,"prevItem":{"title":"Whats new in version 24.01?","permalink":"/blog/whats-new-24.01"}},"content":"import ComponentDemo from \'@site/src/components/DocsTools/ComponentDemo\';\\n\\n![cover image](../../static/release_blog/_images/24.00.png)\\n\\nwebforj version `24.00` is live and available for development. Learn more about what main features and fixes are included in this release.\\n\\n\x3c!-- ![cover image](../static/img/webforJ-release-banner.png) --\x3e\\n\\n\x3c!-- truncate --\x3e\\n\\n# `24.00`\\n\\n\\nSee the [GitHub release overview](https://github.com/webforj/webforj/releases/tag/24.00) for a more comprehensive list of changes.\\n\\n## Table component\\n\\nThis release introduces a new [`Table` component](https://documentation.webforj.com/docs/components/table), allowing developers access to a lightweight, fast and optimized way to display their data. \\n\\n<ComponentDemo \\npath=\'https://demo.webforj.com/webapp/controlsamples/DataTable?\' \\njavaE=\'https://raw.githubusercontent.com/webforj/ControlSamples/main/src/main/java/addondemos/tabledemos/DataTable.java\'\\nurls={[\'https://raw.githubusercontent.com/webforj/ControlSamples/main/src/main/java/addondemos/tabledemos/MusicRecord.java\', \\n\'https://raw.githubusercontent.com/webforj/ControlSamples/main/src/main/java/addondemos/tabledemos/Service.java\']}\\nheight=\'600px\'\\n/>\\n\\nThis table supports tons of modern features, some of which include:\\n\\n- [Filtering](../docs/components/table/filtering)\\n- [Editing](../docs/components/table/refreshing)\\n- [Sorting](../docs/components/table/sorting)\\n- [Lodash rendering](../docs/components/table/rendering)\\n\\nUsing the `Table` in your app is simple, and follows a few easy steps outlined in [this user guide article](https://documentation.webforj.com/docs/components/table#creating-a-table). \\n\\n## Navigator component\\n\\n<ComponentDemo \\npath=\'https://demo.webforj.com/webapp/controlsamples/NavigatorPages?\' \\njavaE=\'https://raw.githubusercontent.com/webforj/ControlSamples/main/src/main/java/componentdemos/navigatordemos/NavigatorPages.java\'\\nheight=\'125px\'\\n/>\\n\\nIn addition to the `Table` (and often in conjunction with), the new [`Navigator`](../docs/components/navigator) component is available to use in webforJ applications. Perfect for cases in which an app utilizes pagination, the customizable `Navigator` is the perfect pick to allow users to interact with implemented pagination.\\n\\nIt integrates nicely with the `Repository` class, an object of which can be passed in the constructor to take care of binding as soon as the Navigator object is constructed.\\n\\n```java\\nRepository<ItemRecord> repository = Service.getItemRecords();\\nNavigator nav = new Navigator(repository);\\n```\\n\\nThe `Navigator` can be customized with various settings that configure the text, tooltips, buttons, layouts, and other aspects of the component\'s appearance. To see a list of these settings, as well as their options, [review the docs](https://documentation.webforj.com/docs/components/navigator#customizing-buttons-text-and-tooltips) for more details. \\n\\n## Splitter component\\n\\n<ComponentDemo \\npath=\'https://demo.webforj.com/webapp/controlsamples/SplitterBasic?\' \\njavaE=\'https://raw.githubusercontent.com/webforj/ControlSamples/main/src/main/java/layout_demos/splitter/SplitterBasic.java\'\\nurls={[\'https://raw.githubusercontent.com/webforj/ControlSamples/main/src/main/java/layout_demos/splitter/SplitterBox.java\',]}\\nheight=\'300px\'\\n/>\\n\\nRounding out the newly introduced components is the `Splitter`, a tool that allows users to compartmentalize and dynamically resize your app. Whether dividing an entire page, or only a part of the app, the `Splitter` is a great tool with many uses within all types of modern apps.\\n\\nAmong the features included with this component is the ability to automatically save the layout configured by the user when an app is closed, so the splitter maintains its layout when the app is relaunched. Give it a try yourself over at [the docs article](https://documentation.webforj.com/docs/components/splitter#auto-save) which outlines this and many other features.\\n\\n## Package renaming\\n\\nVersion `24.00`, integrates the product\'s new official brand, webforJ, into the codebase. The previous alias, DWCJ, has been replaced within the framework\'s package structure. As a result, you need to update your import statements from org.dwcj to com.webforj when using webforJ. New code written shouldn\'t be affected by the change.\\n\\n```java\\n//For example:\\nimport com.webforj.App;\\nimport com.webforj.component.button.event.ButtonClickEvent;\\nimport com.webforj.component.field.TextField;\\nimport com.webforj.component.field.TextField.Type;\\n```"}]}')}}]);