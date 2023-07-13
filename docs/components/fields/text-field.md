---
sidebar_position: 6
title: TextField
---

import ComponentDemo from '@site/src/components/DocsTools/ComponentDemo';
import TableBuilder from '@site/src/components/DocsTools/TableBuilder';
import JavadocLink from '@site/src/components/DocsTools/JavadocLink';

<JavadocLink type="engine" location="org/dwcj/component/field/TextField"/>

:::success **Important**
The `DateTimeField` class is a Field component, and as such shares all of the commonalities belonging to a Field. Please refer to the **[Field documentation page](/docs/components/fields)** for an overview of Field properties, events, and other important information.
:::

The `TextField` component allows users to enter and edit text in a single line. It can be configured to display a specific virtual keyboard, such as a numeric keypad, email input, telephone input, or URL input. The component also provides built-in validation to reject values that do not adhere to the specified type.

### Usages

The `TextField` is suitable for a wide range of scenarios where text input or editing is required. Here are some examples of when to use the `TextField`:

1. **Form Inputs**: A `TextField` is commonly used in forms for capturing user input, such as names, addresses, or comments. It is best to use a `TextField` in these applications when the input is generally short enough to fit on one line.

2. **Search Functionality**: `TextField` can be used to provide a search box, allowing users to input search queries.

3. **Text Editing**: A `TextField` is ideal for applications that require text editing or content creation, such as document editors, chat applications, or note-taking apps.

### Constructors

The `TextField` class has three constructors:

1. `TextField(Type type, String label, String value)`: Creates a `TextField` with a given applicable type, a label, and a value.
2. `TextField(Type type, String label)`: Creates a `TextField` with a given applicable type and label.
3. `TextField(String label, String value)`: Creates a `TextField` with a given label and a value.
4. `TextField(Type type)`: Creates a `TextField` with a given applicable type.
5. `TextField(String label)`: Creates a `TextField` with a given label.
6. `TextField()`: Creates a `TextField` without any provided information.

### Types

You can specify the type of the TextField using the `setType` method. Similarly, the type can be retrieved using the `getType` method, which will return an enum value.

- `Type.TEXT`: This is the default value for a `TextField`, and automatically removes line breaks from the input value

- `Type.EMAIL`: This configuration option is used for editing an email address. It has a relevant keyboard in supporting browsers and devices with dynamic keyboards.

- `Type.TEL`: This option is used for entering a telephone number. The field will display a telephone keypad in some devices with dynamic keypads.

- `Type.URL`: A field for entering a URL. It has a relevant keyboard in supporting browsers and devices with dynamic keyboards.

- `Type.SEARCH`: A single-line text field for entering search strings. Line-breaks are automatically removed from the input value.

### Placeholder Text

You can set placeholder text for the `TextField` using the `setPlaceholder` method. The placeholder text is displayed when the field is empty, helping to prompt the user to enter appropriate input into the `TextField`.

### Selected Text

It is possible to interact with the `TextField` class to retrieve a user's selected text, and to get information about the user's selection. You can retrieve the selected text in the `TextField` using the `getSelectedText` method. This behavior would commonly be used in conjunction with an event. Similarly, it is possible to retrieve the current selection range of the `TextField` using the `getSelectionRange` method. This returns a `SelectionRange` object representing the start and end indices of the selected text.

### Parts and CSS Properties

<TableBuilder tag={require('@site/docs/components/_bbj_control_map.json').Field} />

### Best Practices

The following section outlines some suggested best practices for utilization of the `TextField`.

1. **Provide Clear Labels and Instructions**: Label the `TextField` clearly to indicate the type of information users should enter. Consider providing additional instructional text or placeholder values to guide users and set expectations for the required input.

2. **Spell Checking and Auto-Complete**: When applicable, consider utilizing spellcheck and/or autocomplete functionality to the `TextField`. These features can help users input information faster and reduce errors by providing suggested values based on previous inputs or predefined options.

3. **Consider Accessibility**: Utilize the `TextField` component with accessibility in mind, adhering to accessibility standards such as proper labeling, keyboard navigation support, and compatibility with assistive technologies. Ensure that users with disabilities can interact with the `TextField` effectively.