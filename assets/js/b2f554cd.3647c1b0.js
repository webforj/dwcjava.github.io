"use strict";(self.webpackChunkdwcj_documentation=self.webpackChunkdwcj_documentation||[]).push([[1477],{10:e=>{e.exports=JSON.parse('{"blogPosts":[{"id":"whats-new-24.10","metadata":{"permalink":"/blog/whats-new-24.10","source":"@site/blog/2024-07-23-webforj-v24.10/24.10.md","title":"Whats new in version 24.10?","description":"Get to know the features, fixes and functionality new in webforJ version 24.10.","date":"2024-07-23T00:00:00.000Z","formattedDate":"July 23, 2024","tags":[{"label":"webforJ","permalink":"/blog/tags/webfor-j"},{"label":"v24.10","permalink":"/blog/tags/v-24-10"},{"label":"release","permalink":"/blog/tags/release"}],"readingTime":5.185,"hasTruncateMarker":true,"authors":[{"name":"webforJ Team","url":"https://github.com/webforj","image_url":"/img/webforj_icon.svg","imageURL":"/img/webforj_icon.svg"}],"frontMatter":{"title":"Whats new in version 24.10?","description":"Get to know the features, fixes and functionality new in webforJ version 24.10.","slug":"whats-new-24.10","date":"2024-07-23T00:00:00.000Z","authors":[{"name":"webforJ Team","url":"https://github.com/webforj","image_url":"/img/webforj_icon.svg","imageURL":"/img/webforj_icon.svg"}],"tags":["webforJ","v24.10","release"],"image":"https://webforj.com/wp-content/uploads/2024/04/cropped-Logo_webforJ_RGB_1-removebg-preview.png","hide_table_of_contents":false},"unlisted":false,"nextItem":{"title":"Whats new in version 24.02?","permalink":"/blog/whats-new-24.02"}},"content":"import ComponentDemo from \'@site/src/components/DocsTools/ComponentDemo\';\\r\\nimport terminalVideo from \'../../static/release_blog/terminal.mp4\'\\r\\n\\r\\nWebforj version 24.10 is live and available for development. Learn more about what main features and fixes are included in this release.\\r\\n\\r\\n\x3c!-- ![cover image](../static/img/webforJ-release-banner.png) --\x3e\\r\\n\\r\\n\x3c!-- truncate --\x3e\\r\\n\\r\\n# 24.10\\r\\n\\r\\nAs always, see the [GitHub release overview](https://github.com/webforj/webforj/releases/tag/24.10) for a more comprehensive list of changes.\\r\\n\\r\\n## New features and enhancements \ud83c\udf89\\r\\n\\r\\nThe following new components, features, and enhancements to various existing behavior has been introduced in this release:\\r\\n\\r\\n### `TextArea` and masked input component\\r\\n\\r\\n`24.10` brings the addition of several new components to the webforJ library. This release introduces various masked fields and decorators, and utilize masked input, allowing for specific input patterns. The following components have been made available for development:\\r\\n\\r\\n- #### `MaskedDateField` & `MaskedDateFieldSpinner`\\r\\n\\r\\n  > These components allow users to input dates with a predefined format, with the spinner variant providing an intuitive way for users to increment or decrement date values. \\r\\n\\r\\n- #### `MaskedNumberField` & `MaskedNumberFieldSpinner`\\r\\n\\r\\n  > Designed for numerical input, these fields ensure that users can only enter valid numbers. The spinner variant adds convenience by allowing users to adjust the value using increment/decrement controls.\\r\\n\\r\\n- #### `MaskedTimeField` & `MaskedTimeFieldSpinner`\\r\\n\\r\\n  >These components handle time inputs, enforcing a standard time format. The spinner variant provides controls for easily adjusting time values.\\r\\nMaskedTextField & MaskedTextFieldSpinner\\r\\n\\r\\n- #### `TextArea`\\r\\n\\r\\n  > A versatile, multi-line text input component ideal for larger text entries, such as comments or descriptions.\\r\\n\\r\\n\\r\\n### `BusyIndicator`, `Loading` and `Spinner` components\\r\\n\\r\\nThe `Spinner` and `BusyIndicator` components have both been added in this release to the core webforJ components. The `Spinner` provides a simple, elegant way to display a loading animation, and can be used independently or as part of the `BusyIndicator` or `Loading` components.\\r\\n\\r\\nBuilding on the `Spinner`, the `BusyIndicator` is an app-level loading overlay that indicates when the app is busy or processing data. It blocks user interaction until the process is complete. This component displays of both a `Spinner`, and a textual description while process is occurring. \\r\\n\\r\\n<ComponentDemo \\r\\npath=\'https://demo.webforj.com/webapp/controlsamples/BusyIndicatorDemo?\' \\r\\njavaE=\'https://raw.githubusercontent.com/webforj/ControlSamples/main/src/main/java/componentdemos/busyindicatordemos/BusyIndicatorDemo.java\'\\r\\nheight = \'225px\'\\r\\n/>\\r\\n\\r\\nThe `Loading` component uses the same client component, but allows the addition of children and can be attached to any parent component, making it scoped to its parent.\\r\\n\\r\\n### Terminal emulator\\r\\n\\r\\nThe webforJ `Terminal` component represents an exciting opportunity to emulate a terminal in a webforJ app. Based on `xterm.js`, this tool allows for interactions with a terminal while running within a webforJ app, blending command line features with modern web app capabilities. \\r\\n\\r\\n<video width=\\"100%\\" height=\\"300px\\" controls>\\r\\n  <source src={terminalVideo} type=\\"video/mp4\\" />\\r\\n</video>\\r\\n\\r\\n### Column layout\\r\\n\\r\\nThe `ColumnsLayout` component is coming to webforJ in `24.10`, and is designed to offer a flexible and responsive layout solution in addition to the [FlexLayout](../../docs/components/flex_layouts) component. The `ColumnsLayout` easily facilitates two dimensional layouts by providing columns rather than just rows. It dynamically adjusts the number of columns based on the width of the layout and utilizes breakpoints to determine how many columns should be displayed at different viewport widths to help with responsiveness.\\r\\n\\r\\n<ComponentDemo \\r\\npath=\'https://demo.webforj.com/webapp/controlsamples/ColumnsLayoutDemo?\' \\r\\njavaE=\'https://raw.githubusercontent.com/webforj/ControlSamples/main/src/main/java/componentdemos/columnslayoutdemos/ColumnsLayoutDemo.java\'\\r\\nheight = \'300px\'\\r\\n/>\\r\\n\\r\\nIn addition to dynamic column adjustments, `ColumnsLayout` supports customizable alignment and spacing options. The `ColumnsLayout` component is designed to be intuitive and easy to use. It includes built-in methods for setting column spans and positions, making it simple to create complex layouts with minimal effort.\\r\\n\\r\\n\\r\\nNext time you build a form, give this new component a try in your app.\\r\\n\\r\\n### Slider overhaul\\r\\n\\r\\nThe `Slider` component has received on overhaul in this release. The appearance and use case for the component has remained the same, ensuring that your applications have the same look and feel as they did prior to the updated API overhaul.\\r\\n\\r\\n\\r\\nHowever, with this rework, a few of the methods have been changed to better reflect modern standard. If you are using this component in your app, review the following methods to ensure you\'re using the updated API. An example of the various methods can be seen in the code demo below:\\r\\n\\r\\n<ComponentDemo \\r\\npath=\'https://demo.webforj.com/webapp/controlsamples?class=componentdemos.sliderdemos.SliderDemo\' \\r\\njavaE=\'https://raw.githubusercontent.com/webforj/ControlSamples/main/src/main/java/componentdemos/sliderdemos/SliderDemo.java\'\\r\\nheight = \'150px\'\\r\\n/>\\r\\n\\r\\n### Toast component\\r\\n\\r\\nAnother powerful component introduced in `24.10` is the `Toast` component, which offers a subtle notification system commonly used in modern applications to inform users about the completion of an operation, system messages, or other important updates.\\r\\n\\r\\nDevelopers can set the display duration, choose from various themes, and configure the position of the toast on the screen. The component supports multiple placements, and also allows for setting custom text and HTML content, giving developers the ability to style the messages as needed.\\r\\n\\r\\n<ComponentDemo \\r\\npath=\'https://demo.webforj.com/webapp/controlsamples/ToastDemo?\' \\r\\njavaE=\'https://raw.githubusercontent.com/webforj/ControlSamples/main/src/main/java/componentdemos/toastdemos/ToastDemo.java\'\\r\\nheight = \'300px\'\\r\\n/>\\r\\n\\r\\n### Debugging tooling\\r\\n\\r\\nLogging to the console has gotten much more powerful in `24.10`. A dedicated utility class can now be accessed statically through the `App` class to log styled messages to the browser console. \\r\\n\\r\\n```java\\r\\n// Types\\r\\nconsole().log(\\"Log message\\");\\r\\nconsole().info(\\"Info message\\");\\r\\nconsole().warn(\\"Warn message\\");\\r\\nconsole().error(\\"Error message\\");\\r\\nconsole().debug(\\"Debug message\\");\\r\\n```\\r\\n\\r\\nA variety of builder-patterned methods are available for more fine-grained control over the appearance of messages in the console. These include font weight, style, and size, text colors, background colors, and other configurations.\\r\\n\\r\\n```java\\r\\n// A variety of options for custom logging display\\r\\nconsole().weight().bolder().size().from(\\"30px\\").color().red().style().italic().transform()\\r\\n    .uppercase().background().cyan().warn(\\"Mixing Styles\\");\\r\\n\\r\\n```\\r\\n\\r\\n## Breaking changes \ud83d\udee0\\r\\n\\r\\nWhen updating an existing project using an older version of webforJ, keep an eye out for the following breaking changes:\\r\\n\\r\\n### Console logging\\r\\n\\r\\nUsing the browser\'s console to get valuable program information printed is an integral part of the development process. Previously, the `App.consoleLog()` and `App.consoleErr()` methods were what enabled this behavior. In `24.10`, these methods have been marked for deprecation. Going forward, use `BrowserConsole`, which comes with a slough of new features to enhance logging capabilities. The new equivalent method to print to the console is [`App.console().log()`](#debugging-tooling). \\r\\n\\r\\n### HTML container\\r\\nThe `HtmlContainer` component is for deprecation in `24.10`. Going forward, use `Element` instead for custom content or use `Iframe` component for embedding pages.\\r\\n\\r\\n### Rendering HTML in components\\r\\n\\r\\nSetting HTML text that\'s not specifically wrapped with `<html>` tags using the `setText` method is no longer possible. To set HTML, make sure to wrap your code with these tags to properly render the desired code.\\r\\n\\r\\n```java\\r\\n// Valid\\r\\nButton home = new Button(\\"\\"\\"\\r\\n  <html>\\r\\n    <dwc-icon name=\'home\'></dwc-icon>\\r\\n  </html>\\r\\n\\"\\"\\");\\r\\n```\\r\\n\\r\\n```java\\r\\n// Not Valid\\r\\nButton home = new Button(\\"\\"\\"\\r\\n    <dwc-icon name=\'home\'></dwc-icon>\\r\\n\\"\\"\\");\\r\\n```"},{"id":"whats-new-24.02","metadata":{"permalink":"/blog/whats-new-24.02","source":"@site/blog/2024-06-03-webforj-v24.02/24.02.md","title":"Whats new in version 24.02?","description":"Get to know the features, fixes and functionality new in webforJ version 24.02.","date":"2024-06-03T00:00:00.000Z","formattedDate":"June 3, 2024","tags":[{"label":"webforJ","permalink":"/blog/tags/webfor-j"},{"label":"v24.02","permalink":"/blog/tags/v-24-02"},{"label":"release","permalink":"/blog/tags/release"}],"readingTime":2.885,"hasTruncateMarker":true,"authors":[{"name":"webforJ Team","url":"https://github.com/webforj","image_url":"/img/webforj_icon.svg","imageURL":"/img/webforj_icon.svg"}],"frontMatter":{"title":"Whats new in version 24.02?","description":"Get to know the features, fixes and functionality new in webforJ version 24.02.","slug":"whats-new-24.02","date":"2024-06-03T00:00:00.000Z","authors":[{"name":"webforJ Team","url":"https://github.com/webforj","image_url":"/img/webforj_icon.svg","imageURL":"/img/webforj_icon.svg"}],"tags":["webforJ","v24.02","release"],"image":"https://webforj.com/wp-content/uploads/2024/04/cropped-Logo_webforJ_RGB_1-removebg-preview.png","hide_table_of_contents":false},"unlisted":false,"prevItem":{"title":"Whats new in version 24.10?","permalink":"/blog/whats-new-24.10"},"nextItem":{"title":"Whats new in version 24.01?","permalink":"/blog/whats-new-24.01"}},"content":"import ComponentDemo from \'@site/src/components/DocsTools/ComponentDemo\';\\r\\n\\r\\nWebforj version 24.02 is live and available for development. Learn more about what main features and fixes are included in this release.\\r\\n\\r\\n\x3c!-- ![cover image](../static/img/webforJ-release-banner.png) --\x3e\\r\\n\\r\\n\x3c!-- truncate --\x3e\\r\\n\\r\\n# 24.02\\r\\n\\r\\nAs always, see the [GitHub release overview](https://github.com/webforj/webforj/releases/tag/24.01) for a more comprehensive list of changes.\\r\\n\\r\\n## Option dialogs\\r\\n\\r\\n<ComponentDemo \\r\\npath=\'https://demo.webforj.com/webapp/controlsamples?class=componentdemos.optiondialog.confirm.ConfirmDialogConstructor\' \\r\\njavaE=\'https://raw.githubusercontent.com/webforj/ControlSamples/main/src/main/java/componentdemos/optiondialog/confirm/ConfirmDialogConstructor.java\'\\r\\nheight = \'350px\'\\r\\n/>\\r\\n\\r\\nWith 24.02, webforJ introduces a robust option dialog feature that allows applications to interact with users and gather input effectively. These dialogs are modal, meaning they halt app execution until the user provides input, ensuring critical messages are addressed before proceeding. These function similarly to `JOptionPane` in Swing, addressing the need for blocking dialogs in web applications.\\r\\n\\r\\nThere are multiple types of these dialogs:\\r\\n\\r\\n- **`Message`**: Display informative messages to users.\\r\\n- **`Confirm`**: Request user confirmation for specific actions.\\r\\n- **`Input`**: Gather textual input from users.\\r\\n- **`File Chooser`**: Allow users to select files from their system.\\r\\n- **`File Upload`**: Enable users to upload files directly.\\r\\n\\r\\nThe various dialog options are provided to help clarify and specify the type of interaction users should take throughout navigation of an app. \\r\\n\\r\\n## Progress bar overhaul\\r\\n\\r\\nThe `ProgressBar` in 24.02 has gotten a powerful, comprehensive overhaul. This component provides a visual representation of task progress, making it easy for users to monitor the completion status of ongoing tasks. The progress bar fills up as the task progresses, displaying the percentage of completion both visually and textually.\\r\\n\\r\\n<ComponentDemo \\r\\npath=\'https://demo.webforj.com/webapp/controlsamples?class=componentdemos.progressbar.ProgressBarBasic\' \\r\\njavaE=\'https://raw.githubusercontent.com/webforj/ControlSamples/main/src/main/java/componentdemos/progressbar/ProgressBarBasic.java\'\\r\\nheight=\'150px\'\\r\\n/>\\r\\n\\r\\nThe following key features are included in the `ProgressBar` out of the box:\\r\\n\\r\\n- **Configurable Values**: Supports setting and getting current, minimum, and maximum values to accurately represent task progress.\\r\\n\\r\\n- **Indeterminate Mode**: Allows for an indeterminate state to indicate ongoing tasks without a definite end.\\r\\n\\r\\n- **Text Visibility**: Options to display the percentage of completion or the raw value as text.\\r\\n\\r\\n- **Orientation Support**: The `ProgressBar` can be oriented either horizontally or vertically, providing flexibility in how it is displayed in your app.\\r\\n\\r\\n- **Styling Options**: Includes themes, animation, and striped designs for enhanced visual feedback.\\r\\n\\r\\nThe `ProgressBar` component is highly versatile and can be used to visualize the completion status of various tasks. It allows configuration of minimum and maximum values, making it adaptable to different use cases.\\r\\n\\r\\n## Interval\\r\\n\\r\\n`24.02` introduces `Interval` capability in webforJ, providing a mechanism similar to the Swing `Timer`, which offers a way to execute code at fixed time intervals. This feature is essential for tasks that need periodic execution, such as updating UI elements, performing background operations, or polling for data.\\r\\n\\r\\nIn the above `ProgressBar` the start, pause and restart features were all implemented via webforJ\'s `Interval` class. In addition to these functions, it also allows developers to specify a timeout value in seconds, supporting fractional seconds for precise timing. For tasks with unknown completion times, the `Interval` can be set to an indeterminate state, allowing it to keep running until explicitly stopped.\\r\\n\\r\\nTo create, start, stop, and then restart an interval, the following code can be executed:\\r\\n\\r\\n```java\\r\\n// Create a new Interval with a delay of 2.5 seconds\\r\\nInterval interval = new Interval(2.5f, event -> {\\r\\n    System.out.println(\\"Interval elapsed!\\");\\r\\n});\\r\\n\\r\\n// Start the interval\\r\\ninterval.start();\\r\\n\\r\\n// Stop the interval\\r\\ninterval.stop();\\r\\n\\r\\n// Restart the interval\\r\\ninterval.restart();\\r\\n```\\r\\n\\r\\nThe `Interval` helps manage periodic tasks - its ability to handle fixed time delays, support multiple event listeners, and provide robust performance makes it an essential feature for developers looking to implement timed events efficiently."},{"id":"whats-new-24.01","metadata":{"permalink":"/blog/whats-new-24.01","source":"@site/blog/2024-04-26-webforj-v24.01/24.01.md","title":"Whats new in version 24.01?","description":"Get to know the features, fixes and functionality new in webforJ version 24.01.","date":"2024-04-26T00:00:00.000Z","formattedDate":"April 26, 2024","tags":[{"label":"webforJ","permalink":"/blog/tags/webfor-j"},{"label":"v24.01","permalink":"/blog/tags/v-24-01"},{"label":"release","permalink":"/blog/tags/release"}],"readingTime":2.165,"hasTruncateMarker":true,"authors":[{"name":"webforJ Team","url":"https://github.com/webforj","image_url":"/img/webforj_icon.svg","imageURL":"/img/webforj_icon.svg"}],"frontMatter":{"title":"Whats new in version 24.01?","description":"Get to know the features, fixes and functionality new in webforJ version 24.01.","slug":"whats-new-24.01","date":"2024-04-26T00:00:00.000Z","authors":[{"name":"webforJ Team","url":"https://github.com/webforj","image_url":"/img/webforj_icon.svg","imageURL":"/img/webforj_icon.svg"}],"tags":["webforJ","v24.01","release"],"image":"https://webforj.com/wp-content/uploads/2024/04/cropped-Logo_webforJ_RGB_1-removebg-preview.png","hide_table_of_contents":false},"unlisted":false,"prevItem":{"title":"Whats new in version 24.02?","permalink":"/blog/whats-new-24.02"},"nextItem":{"title":"Whats new in version 24.00?","permalink":"/blog/whats-new-24.00"}},"content":"import ComponentDemo from \'@site/src/components/DocsTools/ComponentDemo\';\\r\\n\\r\\n\\r\\nWebforj version `24.01` is live and available for development. Learn more about what main features and fixes are included in this release.\\r\\n\\r\\n\x3c!-- ![cover image](../static/img/webforJ-release-banner.png) --\x3e\\r\\n\\r\\n\x3c!-- truncate --\x3e\\r\\n\\r\\n# `24.01`\\r\\n\\r\\nAs always, see the [GitHub release overview](https://github.com/webforj/webforj/releases/tag/24.01) for a more comprehensive list of changes.\\r\\n\\r\\n## New data binding feature in webforJ\\r\\n\\r\\nwebforJ `24.01` introduces a robust data binding capability, smoothly connecting UI components with backend data models in Java applications. This integration ensures that any changes made in the UI are immediately reflected in the data model and vice versa. This feature greatly simplifies data management and reduces time to completion. Below are some of the key features:\\r\\n\\r\\n- **Bidirectional Binding**: Automatically synchronizes changes between the data model and the UI, ensuring that updates in one are mirrored in the other.\\r\\n\\r\\n- **Comprehensive Validation**: Provides robust validation options that can be customized, allowing developers to implement custom rules or leverage existing validation frameworks like Jakarta Validation to maintain data accuracy.\\r\\n\\r\\n- **Extensibility**: Easily extendable to support a wide range of UI components, data transformations, and complex validation needs.\\r\\n\\r\\n- **Annotation-Based Configuration**: Reduces the need for repetitive code by using annotations to declare bindings, making the process more straightforward and easier to maintain.\\r\\n\\r\\nFor most cases, webforJ\'s data binding between UI component and data model can be done automatically. For more complex cases, tools have been provided to make the binding seamless and straightforward.\\r\\n\\r\\nFunctionality such as transformation and validation further enhance the binding capabilities to further simplify UI interaction with the data layer. For more information on this feature, see the [documentation entry](../docs/data-binding/home).\\r\\n\\r\\n\\r\\n## Login component\\r\\n\\r\\n<ComponentDemo \\r\\npath=\'https://demo.webforj.com/webapp/controlsamples?class=componentdemos.login.LoginBasic\' \\r\\njavaE=\'https://raw.githubusercontent.com/webforj/ControlSamples/main/src/main/java/componentdemos/login/LoginBasic.java\'\\r\\nheight = \'450px\'\\r\\n/>\\r\\n\\r\\nThe latest `Login` component in webforJ offers an intuitive and efficient interface for user authentication, enabling users to log in using their username and password. This component is highly customizable to enhance user experiences across various devices and locales.\\r\\n\\r\\nAll of the features you\'d expect from a `Login` component is included:\\r\\n\\r\\n- **Intuitive Interface**: Provides clear input fields for username and password, a toggle for password visibility, and validation feedback to ensure proper formatting before submission.\\r\\n\\r\\n- **Flexible and Extensible**: Easily extendable to include additional fields, such as Customer ID, and configurable to allow empty passwords if necessary.\\r\\n\\r\\n- **Localization Support**: Fully customizable titles, descriptions, labels, and messages through the LoginI18n class, allowing for precise localization and personalization.\\r\\n\\r\\nUsing the `Login` component can help shave off development time, and provides and attractive and powerful entry point into applications. For a more detailed overview on the `Login` components, take a look at the [docs entry here](../docs/components/login)."},{"id":"whats-new-24.00","metadata":{"permalink":"/blog/whats-new-24.00","source":"@site/blog/2024-04-08-webforj-v24.00/24.00.md","title":"Whats new in version 24.00?","description":"Get to know the features, fixes and functionality new in webforJ version 24.00.","date":"2024-04-08T00:00:00.000Z","formattedDate":"April 8, 2024","tags":[{"label":"webforJ","permalink":"/blog/tags/webfor-j"},{"label":"v24.00","permalink":"/blog/tags/v-24-00"},{"label":"release","permalink":"/blog/tags/release"}],"readingTime":2.13,"hasTruncateMarker":true,"authors":[{"name":"webforJ Team","url":"https://github.com/webforj","image_url":"/img/webforj_icon.svg","imageURL":"/img/webforj_icon.svg"}],"frontMatter":{"title":"Whats new in version 24.00?","description":"Get to know the features, fixes and functionality new in webforJ version 24.00.","slug":"whats-new-24.00","date":"2024-04-08T00:00:00.000Z","authors":[{"name":"webforJ Team","url":"https://github.com/webforj","image_url":"/img/webforj_icon.svg","imageURL":"/img/webforj_icon.svg"}],"tags":["webforJ","v24.00","release"],"image":"https://webforj.com/wp-content/uploads/2024/04/cropped-Logo_webforJ_RGB_1-removebg-preview.png","hide_table_of_contents":false},"unlisted":false,"prevItem":{"title":"Whats new in version 24.01?","permalink":"/blog/whats-new-24.01"}},"content":"import ComponentDemo from \'@site/src/components/DocsTools/ComponentDemo\';\\r\\n\\r\\nWebforj version `24.00` is live and available for development. Learn more about what main features and fixes are included in this release.\\r\\n\\r\\n\x3c!-- ![cover image](../static/img/webforJ-release-banner.png) --\x3e\\r\\n\\r\\n\x3c!-- truncate --\x3e\\r\\n\\r\\n# `24.00`\\r\\n\\r\\n\\r\\nSee the [GitHub release overview](https://github.com/webforj/webforj/releases/tag/24.00) for a more comprehensive list of changes.\\r\\n\\r\\n## Table component\\r\\n\\r\\nThis release introduces a new [`Table` component](https://documentation.webforj.com/docs/components/table), allowing developers access to a lightweight, fast and optimized way to display their data. \\r\\n\\r\\n<ComponentDemo \\r\\npath=\'https://demo.webforj.com/webapp/controlsamples/DataTable?\' \\r\\njavaE=\'https://raw.githubusercontent.com/webforj/ControlSamples/main/src/main/java/addondemos/tabledemos/DataTable.java\'\\r\\nurls={[\'https://raw.githubusercontent.com/webforj/ControlSamples/main/src/main/java/addondemos/tabledemos/MusicRecord.java\', \\r\\n\'https://raw.githubusercontent.com/webforj/ControlSamples/main/src/main/java/addondemos/tabledemos/Service.java\']}\\r\\nheight=\'600px\'\\r\\n/>\\r\\n\\r\\nThis table supports tons of modern features, some of which include:\\r\\n\\r\\n- [Filtering](../docs/components/table/filtering)\\r\\n- [Editing](../docs/components/table/refreshing)\\r\\n- [Sorting](../docs/components/table/sorting)\\r\\n- [Lodash rendering](../docs/components/table/rendering)\\r\\n\\r\\nUsing the `Table` in your app is simple, and follows a few easy steps outlined in [this user guide article](https://documentation.webforj.com/docs/components/table#creating-a-table). \\r\\n\\r\\n## Navigator component\\r\\n\\r\\n<ComponentDemo \\r\\npath=\'https://demo.webforj.com/webapp/controlsamples/NavigatorPages?\' \\r\\njavaE=\'https://raw.githubusercontent.com/webforj/ControlSamples/main/src/main/java/componentdemos/navigatordemos/NavigatorPages.java\'\\r\\nheight=\'125px\'\\r\\n/>\\r\\n\\r\\nIn addition to the `Table` (and often in conjunction with), the new [`Navigator`](../docs/components/navigator) component is available to use in webforJ applications. Perfect for cases in which an app utilizes pagination, the customizable `Navigator` is the perfect pick to allow users to interact with implemented pagination.\\r\\n\\r\\nIt integrates nicely with the `Repository` class, an object of which can be passed in the constructor to take care of binding as soon as the Navigator object is constructed.\\r\\n\\r\\n```java\\r\\nRepository<ItemRecord> repository = Service.getItemRecords();\\r\\nNavigator nav = new Navigator(repository);\\r\\n```\\r\\n\\r\\nThe `Navigator` can be customized with various settings that configure the text, tooltips, buttons, layouts, and other aspects of the component\'s appearance. To see a list of these settings, as well as their options, [review the docs](https://documentation.webforj.com/docs/components/navigator#customizing-buttons-text-and-tooltips) for more details. \\r\\n\\r\\n## Splitter component\\r\\n\\r\\n<ComponentDemo \\r\\npath=\'https://demo.webforj.com/webapp/controlsamples/SplitterBasic?\' \\r\\njavaE=\'https://raw.githubusercontent.com/webforj/ControlSamples/main/src/main/java/layout_demos/splitter/SplitterBasic.java\'\\r\\nurls={[\'https://raw.githubusercontent.com/webforj/ControlSamples/main/src/main/java/layout_demos/splitter/SplitterBox.java\',]}\\r\\nheight=\'300px\'\\r\\n/>\\r\\n\\r\\nRounding out the newly introduced components is the `Splitter`, a tool that allows users to compartmentalize and dynamically resize your app. Whether dividing an entire page, or only a part of the app, the `Splitter` is a great tool with many uses within all types of modern apps.\\r\\n\\r\\nAmong the features included with this component is the ability to automatically save the layout configured by the user when an app is closed, so the splitter maintains its layout when the app is relaunched. Give it a try yourself over at [the docs article](https://documentation.webforj.com/docs/components/splitter#auto-save) which outlines this and many other features.\\r\\n\\r\\n## Package renaming\\r\\n\\r\\nVersion `24.00`, integrates the product\'s new official brand, webforJ, into the codebase. The previous alias, DWCJ, has been replaced within the framework\'s package structure. As a result, you need to update your import statements from org.dwcj to com.webforj when using webforJ. New code written shouldn\'t be affected by the change.\\r\\n\\r\\n```java\\r\\n//For example:\\r\\nimport com.webforj.App;\\r\\nimport com.webforj.component.button.event.ButtonClickEvent;\\r\\nimport com.webforj.component.field.TextField;\\r\\nimport com.webforj.component.field.TextField.Type;\\r\\n```"}]}')}}]);