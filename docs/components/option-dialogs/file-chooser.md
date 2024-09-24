---
sidebar_position: 5
title: File Chooser
---

<!-- vale off -->
import ComponentDemo from '@site/src/components/DocsTools/ComponentDemo';
import TableBuilder from '@site/src/components/DocsTools/TableBuilder';
import JavadocLink from '@site/src/components/DocsTools/JavadocLink';
import DocChip from '@site/src/components/DocsTools/DocChip';

# File Chooser Dialog
<!-- vale on -->

<DocChip tooltipText="This component will render with a shadow DOM, an API built into the browser that facilitates encapsulation." label="Shadow" target="_blank" clickable={false} iconName='shadow' />

<DocChip tooltipText="The name of the web component that will render in the DOM." label="dwc-dialog" clickable={false} iconName='code'/>

<JavadocLink type="foundation" location="com/webforj/component/optiondialog/FileChooserDialog" top='true'/>

<ComponentBasics />

`FileChooserDialog` is a modal dialog designed to allow the user to select a file or a directory from the server file system. The dialog blocks app execution until the user makes a selection or closes the dialog.

```java
OptionDialog.showFileChooserDialog("Select a file");
```

## Usages

The `FileChooserDialog` provides a way to select files or directories from the file system, enabling users to choose directories for saving data, or perform file operations.

## Constructors

The `FileChooserDialog` can be initiated through the `OptionDialog` factory class using one of the various `showFileChooserDialog` methods to configure its attributes and display the dialog directly. For more control over the configurations, the dialog can also be created using one of its several constructors.

<ComponentDemo 
path='https://demo.webforj.com/webapp/controlsamples?class=componentdemos.optiondialog.filechooser.FileChooserDialogBasic' 
javaE='https://raw.githubusercontent.com/webforj/ControlSamples/main/src/main/java/componentdemos/optiondialog/filechooser/FileChooserDialogBasic.java'
height = '600px'
/>

## Result

The `FileChooserDialog` returns the selected file or directory as a string. If the user closes the dialog without making a selection, the result will be `null`.

:::important
The resulting string will be returned from the `show()` method, or the equivalent `OptionDialog` method as shown below. 
:::

```java showLineNumbers
String result = OptionDialog.showFileChooserDialog(
    "Select a file", "/home/user", FileChooserDialog.SelectionMode.FILES);

if (result != null) {
    OptionDialog.showMessageDialog("You selected: " + result, "Selection Made", "OK");
} else {
    OptionDialog.showMessageDialog("No selection made", "Selection Canceled", "OK");
}
```

## Selection mode

The `FileChooserDialog` supports different selection modes, allowing you to tailor the selection method to your specific needs:

1. **FILES**: Allows the selection of files only.
2. **DIRECTORIES**: Allows the selection of directories only.
3. **FILES_AND_DIRECTORIES**: Allows the selection of both files and directories.

## Initial path

The `FileChooserDialog` allows you to specify an initial path that the dialog will open to when displayed. This can provide users with a starting point for their file selection.

```java showLineNumbers
FileChooserDialog dialog = new FileChooserDialog("Select a file", "/home/user");
String result = dialog.show();
```

## Restriction

You can restrict the dialog to a specific directory, preventing users from navigating outside of it using the `setRestricted(boolean restricted)` method.

```java showLineNumbers
FileChooserDialog dialog = new FileChooserDialog("Select a file", "/home/user");
dialog.setRestricted(true);
dialog.show();
```

## Filters

When the seletion mode is `FILES`, The `FileChooserDialog` allows you to set filters to limit the types of files that listed. You can configure filters using the `setFilters(List<FileChooserFilter> filters)` method.

<ComponentDemo 
path='https://demo.webforj.com/webapp/controlsamples?class=componentdemos.optiondialog.filechooser.FileChooserDialogFilters' 
javaE='https://raw.githubusercontent.com/webforj/ControlSamples/main/src/main/java/componentdemos/optiondialog/filechooser/FileChooserDialogFilters.java'
height = '600px'
/>

### Custom filters

You can allow users to add custom filters by enabling the custom filters feature using the `setCustomFilters(boolean customFilters)` method.
Custom filters will be saved in the browser's local storage by default and restored when the dialog is shown again.

```java showLineNumbers
FileChooserDialog dialog = new FileChooserDialog("Select a file", "/home/user");
dialog.setCustomFilters(true);
String result = dialog.show();
```

## Internationalization (i18n)

The titles, descriptions, labels, and messages within the component are fully customizable using the `FileChooserI18n` class. This flexibility allows you to tailor the dialog interface to meet specific localization requirements or personalization preferences.

```java showLineNumbers
FileChooserDialog dialog = new FileChooserDialog("Wählen Sie eine Datei aus", "/Users/habof/bbx");
FileChooserI18n i18n = new FileChooserI18n();
i18n.setChoose("Wählen");
i18n.setCancel("Stornieren");
dialog.setI18n(i18n);
```

## Best practices

1. **Clear and Concise Prompts**: Ensure the prompt message clearly explains what the user is being asked to select.
2. **Appropriate Selection Modes**: Choose selection modes that match the required user action to ensure accurate and relevant selections.
3. **Logical Initial Paths**: Set initial paths that provide users with a useful starting point for their selection.
4. **Restrict Directory Navigation**: Restrict the dialog to a specific directory when necessary to prevent users from navigating to unauthorized areas.

## Styling

### Shadow parts

These are the various parts of the [shadow DOM](../../glossary#shadow-dom) for the component, which will be required when styling via CSS is desired.

<TableBuilder tag={require('@site/docs/components/\_dwc_control_map.json').Dialog} table='parts'/>

### Reflected attributes

The reflected attributes of a component will be shown as attributes in the rendered HTML element for the component in the DOM. This means that styling can be applied using these attributes.

<TableBuilder tag={require('@site/docs/components/\_dwc_control_map.json').Dialog} table="reflects" />