---
title: MaskedNumberField
---

<DocChip chip='shadow' />

<DocChip chip='name' label="dwc-masked-numberfield" />

<JavadocLink type="foundation" location="com/webforj/component/field/MaskedNumberField" top='true'/>

The `MaskedNumberField` component in webforJ provides a versatile and user-friendly solution for numeric input. It's ideal for apps requiring structured numeric input, such as financial systems, data entry forms, and measurement tools.


## Basics

The `MaskedNumberField` can be instantiated with or without parameters. You can define an initial value, label, or placeholder text.

This demo showcases a Tip Calculator using `MaskedNumberField` for user-friendly input. One field accepts a formatted bill amount, while the other captures a whole-number tip percentage:

<ComponentDemo 
path='https://demo.webforj.com/webapp/controlsamples/maskednumberfield?' 
javaE='https://raw.githubusercontent.com/webforj/webforj-docs-samples/refs/heads/main/src/main/java/com/webforj/samples/views/maskednumberfield/MaskedNumberFieldView.java'
height = '150px'
/>

## Supported masks

Masks determine how numbers are displayed and interpreted, ensuring consistent and user-friendly input. Each character in the mask has a specific role, allowing developers to design highly customized input fields tailored to their app's requirements.

| Character  | Description                                                                 |
|------------|-----------------------------------------------------------------------------|
| `0`        | Replaced by a digit, 0-9.                                                 |
| `#`        | Suppresses leading zeroes. Fills trailing zeroes or spaces.                |
| `,`        | Adds a grouping character, such as a comma for thousands.                     |
| `.`        | Represents the decimal point.                                              |
| `-`        | Adds a minus sign for negative numbers.                                    |
| `+`        | Adds a plus or minus sign depending on the value.                          |
| `$`        | Adds a dollar sign.                                                       |
| `(`, `)`   | Encloses negative numbers in parentheses.                                  |
| `CR`/`DR`  | Adds "CR" or "DR" for credit or debit representation.                      |
| `*`        | Adds an asterisk to the number.                                            |
| `B`        | Always becomes a space.                                                   |

## Group and decimal separators 

The `MaskedNumberField` provides flexibility for internationalization by supporting custom characters for grouping and decimal separators. These separators define how numbers are formatted for better readability. 

For example, the group separator is used to divide thousands, and the decimal separator indicates the fractional part of a number. 

```java 
field.setGroupCharacter(".");
field.setDecimalCharacter(",");
```

:::tip Default Separators
By default, the component applies characters based on the app's locale.
:::

## Negatable

By default, the `MaskedNumberField` allows negative values. When the negatable property is enabled, users can input numbers with a negative sign at the beginning. However, if negatable is disabled, any attempts to input a negative number are blocked, ensuring only positive values can be entered.

```java
MaskedNumberField field = new MaskedNumberField();
field.setNegateable(false); // Restricts input to positive numbers only
```

<ComponentDemo 
path='https://demo.webforj.com/webapp/controlsamples/maskednumnegatable?' 
javaE='https://raw.githubusercontent.com/webforj/webforj-docs-samples/refs/heads/main/src/main/java/com/webforj/samples/views/maskednumberfield/MaskedNumNegatableView.java'
height = '150px'
/>

## Min and max values

The `MaskedNumberField` allows you to define minimum and maximum values for numerical input, ensuring data integrity and preventing invalid entries.

The `setMin()` method specifies the smallest value the field will accept. If a user enters a value below this threshold, the input will be rejected or adjusted depending on the implementation.

```java
MaskedNumberField field = new MaskedNumberField();
field.setMin(10.0); // Sets the minimum value to 10
```

The `setMax()` method defines the largest acceptable value. Inputs exceeding this value are similarly restricted.

```java
MaskedNumberField field = new MaskedNumberField();
field.setMax(100.0); // Sets the maximum value to 100
```

<ComponentDemo 
path='https://demo.webforj.com/webapp/controlsamples/maskednumminmax?' 
javaE='https://raw.githubusercontent.com/webforj/webforj-docs-samples/refs/heads/main/src/main/java/com/webforj/samples/views/maskednumberfield/MaskedNumMinMaxView.java'
height = '100px'
/>

## Restoring value

The `MaskedNumberField` includes a `restoreValue()` method that allows you to programmatically reset the field’s value to its initial state. This feature is useful in scenarios where users might make unintentional changes or need to quickly revert to the original value for validation or comparison purposes.

To enable the restore feature, you must define the value to be restored using the `setRestoreValue()` method. This ensures that the field knows which value to revert to when the `restoreValue()` method is called.

```java
MaskedNumberField numberField = new MaskedNumberField("Enter Amount", 1500.00);
numberField.setRestoreValue(1500.00); // Sets the restore value
numberField.restoreValue(); // Reverts the field to the specified value
```
<ComponentDemo 
path='https://demo.webforj.com/webapp/controlsamples/maskednumrestore?' 
javaE='https://raw.githubusercontent.com/webforj/webforj-docs-samples/refs/heads/main/src/main/java/com/webforj/samples/views/maskednumberfield/MaskedNumRestoreView.java'
height = '150px'
/>

## `MaskedNumberFieldSpinner`

The `MaskedNumberFieldSpinner` extends the `MaskedNumberField` by introducing spinner controls, allowing users to adjust numeric values incrementally. This component is especially useful in scenarios where users need to modify values by predefined steps, such as adjusting quantities, setting times, or selecting numeric options.

<ComponentDemo 
path='https://demo.webforj.com/webapp/controlsamples/maskednumspinner?' 
javaE='https://raw.githubusercontent.com/webforj/webforj-docs-samples/refs/heads/main/src/main/java/com/webforj/samples/views/maskednumberfield/MaskedNumSpinnerView.java'
height = '100px'
/>