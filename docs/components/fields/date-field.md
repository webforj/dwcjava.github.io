---
sidebar_position: 2
title: DateField
slug: datefield
---

import ComponentDemo from '@site/src/components/DocsTools/ComponentDemo';
import TableBuilder from '@site/src/components/DocsTools/TableBuilder';
import JavadocLink from '@site/src/components/DocsTools/JavadocLink';
import DocChip from '@site/src/components/DocsTools/DocChip';

<DocChip tooltipText="This component will render with a shadow DOM, an API built into the browser that facilitates encapsulation." label="Shadow" component="a" href="../../glossary#shadow-dom" target="_blank" clickable={true} iconName="shadow" />

<DocChip tooltipText="The name of the web component that will render in the DOM." label="dwc-field" href="https://basishub.github.io/basis-next/#/web-components/dwc-field" clickable={false} iconName='code'/>

<JavadocLink type="engine" location="org/dwcj/component/field/DateField" top='true'/>

:::success **Important**
The `DateField` class is a Field component, and as such shares all of the commonalities belonging to a Field. Please refer to the **[Field documentation page](/docs/components/fields)** for an overview of Field properties, events, and other important information.
:::

The `DateField` is a user interface component that allows users to input or select dates. It provides an intuitive and efficient way to handle date-related information in various applications. This section outlines the best practices for using the `DateField` component effectively.

<ComponentDemo 
path='https://eu.bbx.kitchen/webapp/controlsamples?class=componentdemos.fielddemos.DateFieldDemo' 
javaC=''
javaE='https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/java/componentdemos/fielddemos/DateFieldDemo.java'
cssURL='https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/resources/css/fieldstyles/date_field_styles.css'
/>

### Usages

The `DateField` is best used in scenarios where capturing or displaying dates is a crucial part of the user interface or application functionality. Here are some examples of when to use the date field

1. **Event Scheduling and Calendars**: Date fields are essential in applications that involve event scheduling, appointment booking, or managing calendars. They enable users to select specific dates accurately.

2. **Form Inputs**: When designing forms that require date inputs, using a date field simplifies the date selection process for users. This is particularly useful for applications that collect user data or require date-based inputs.

3. **Booking and Reservation Systems**: Applications that involve booking and reservation systems often require users to input specific dates. A date field simplifies the process and ensures accurate date selection.

4. **Task Management and Deadlines**: Date fields are valuable in applications that involve task management or setting deadlines. Users can easily specify due dates, start dates, or other time-sensitive information.

The `DateField` class provides a user interface component that allows the user to enter a date, including the year, month, and day. It offers the flexibility to validate the input or use a special date picker interface.

### Constructors

The `DateField` class has four constructors:

1. `DateField(String label, LocalDate date)`: Creates a `DateField` with a given label and date.
2. `DateField(String label)`: Creates a `DateField` with a given label but with no pre-populated date.
3. `DateField(LocalDate date)`: Creates a `DateField` with a given date, but without a label.
4. `DateField()`: Creates a `DateField` without any provided information.

### Maximum and Minimum

You can use the `setMax()` and `setMin()` methods to specify the acceptable range of dates. If the value entered into the component is outside of the specified value, the component fails constraint validation. Also, if there is already a maximum or minimum set, the value given to the other method must be lower or higher respectively.

### Display

The `DateField` will, by default, display its information within the UI element based on the locale the browser is configured to. For example, users with United States configurations will see the date displayed with the month preceding the day, whereas European users will see the day before the month. This does not inhibit manipulation of the `LocalDate` object returned by methods from the class, however.

### Static Utilities 

The `DateField` class also provides the following static utility methods:

- `fromDate(String dateAsString)`: Convert a date string in yyyy-MM-dd format to a LocalDate object which can then be utilized with this class, or elsewhere.

- `toDate(LocalDate date)`: Convert a LocalDate object to a date string in yyyy-MM-dd format.

- `isValidDate(String dateAsString)`: Checks to see if the given string is a valid yyyy-MM-dd date. This will return a boolean value true if so, false otherwise.

### Best Practices

To ensure an optimal user experience when using the `DateField` component, consider the following best practices:

1. **Consider Accessibility**: Ensure that your utilization of the `DateField` meets accessibility standards, using proper labels, and being compatible with assistive technologies.

2. **Auto-Populate Current Date**: Consider providing an option to auto-populate the current date as a default value in the date field, if appropriate for your application's use case.