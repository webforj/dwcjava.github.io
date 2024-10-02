---
sidebar_position: 6
title: File Upload
---

<!-- vale off -->
import ComponentDemo from '@site/src/components/DocsTools/ComponentDemo';
import TableBuilder from '@site/src/components/DocsTools/TableBuilder';
import JavadocLink from '@site/src/components/DocsTools/JavadocLink';
import DocChip from '@site/src/components/DocsTools/DocChip';

# File Upload Dialog
<!-- vale on -->

<DocChip tooltipText="This component will render with a shadow DOM, an API built into the browser that facilitates encapsulation." label="Shadow" target="_blank" clickable={false} iconName='shadow' />

<DocChip tooltipText="The name of the web component that will render in the DOM." label="dwc-dialog" clickable={false} iconName='code'/>

<JavadocLink type="foundation" location="com/webforj/component/optiondialog/FileUploadDialog" top='true'/>

A `FileUploadDialog` is a modal dialog designed to allow the user to upload files from their local file system. The dialog blocks app execution until the user selects files to upload or closes the dialog.

```java
UploadedFile result = OptionDialog.showFileUploadDialog("Upload a file");
```

## Usages

The `FileUploadDialog` provides a way to select and upload files, enabling users to submit documents, images, or other file types required by the app.

## Constructors

The `FileUploadDialog` can be initiated through the `OptionDialog` factory class using one of the various `showFileUploadDialog` methods to configure its attributes and display the dialog directly. For more control over the configurations, the dialog can also be created using one of its several constructors.

## Result

The `FileUploadDialog` returns an `UploadedFile` object that contains information about the uploaded file, such as its name, size, and content. If the user closes the dialog without selecting a file, the result will be `null`.

:::important
The resulting string will be returned from the `show()` method, or the equivalent `OptionDialog` method as shown below. 
:::

<ComponentDemo 
path='https://demo.webforj.com/webapp/controlsamples/fileuploaddialogbasic?' 
javaE='https://raw.githubusercontent.com/webforj/webforj-docs-samples/refs/heads/main/src/main/java/com/webforj/samples/views/optiondialog/fileupload/FileUploadDialogBasicView.java'
height = '400px'
/>

### Moving uploaded files

By default, webforJ stores uploaded files in a temporary folder which is regularly cleaned. If you don't move file elsewhere, it'll be deleted. To move the file, use the `move` method and specify the destination path.

```java showLineNumbers
UploadedFile uploadedFile = OptionDialog.showFileUploadDialog("Select a file to upload");
try {
    File file = uploadedFile.move("my/full/path/" + uploadedFile.getSanitizedClientName());
    // ... do something with the file
} catch (IOException e) {
    // handle the exception
}
```
:::tip Sanitized Client Name
Use the `getSanitizedClientName` method to obtain a sanitized version of the uploaded file's name. This method helps prevent security risks such as directory traversal attacks or invalid characters in file names, ensuring the integrity and security of your file storage system.
:::

## Filters

The `FileUploadDialog` allows you to set filters to limit the types of files that can be selected for upload. You can configure filters using the `setFilters(List<FileChooserFilter> filters)` method.

```java showLineNumbers
FileUploadDialog dialog = new FileUploadDialog(
    "Upload a file", 
    Arrays.asList(new FileChooserFilter("Text Files", "*.txt")));
UploadedFile result = dialog.show();
```

:::warning Filters Validation
The server won't validate the uploaded file against the filters. The filters are only applied in the UI to guide the user's selection. You must implement server-side validation to ensure that the uploaded files meet your app's requirements.
:::

## Max size

It's possible to set the maximum file size for uploads to ensure that users don't upload files that are too large for your app to handle. This can be configured using the `setMaxFileSize(long maxSize)` method, where maxSize is specified in bytes.

```java
dialog.setMaxFileSize(2 * 1024 * 1024); // Set max size to 2 MB
```

## Internationalization (i18n)

The titles, descriptions, labels, and messages within the component are fully customizable using the `FileUploadI18n` class. This flexibility allows you to tailor the dialog interface to meet specific localization requirements or personalization preferences.

```java showLineNumbers
FileUploadDialog dialog = new FileUploadDialog("Datei hochladen");
FileUploadI18n i18n = new FileUploadI18n();
i18n.setUpload("Hochladen");
i18n.setCancel("Stornieren");
dialog.setI18n(i18n);
UploadedFile result = dialog.show();
```

## Best practices

1. **Clear and Concise Prompts**: Ensure the prompt message clearly explains what the user is being asked to upload.
2. **Appropriate Filters**: Set file filters that match the required file types to ensure users upload relevant files.
3. **Logical Initial Paths**: Set initial paths that provide users with a useful starting point for their file selection.
4. **Restrict Directory Navigation**: Restrict the dialog to a specific directory when necessary to prevent users from navigating to unauthorized areas.
5. **Consistent Theming**: Align the dialog and upload field themes with your app's design for a cohesive user experience.
6. **Minimize Overuse**: Use file upload dialogs sparingly to avoid user frustration. Reserve them for actions requiring specific user file uploads.

## Styling

### Shadow Parts

These are the various parts of the [shadow DOM](../../glossary#shadow-dom) for the component, which will be required when styling via CSS is desired.

<TableBuilder tag={require('@site/docs/components/\_dwc_control_map.json').Dialog} table='parts'/>

### Reflected Attributes

The reflected attributes of a component will be shown as attributes in the rendered HTML element for the component in the DOM. This means that styling can be applied using these attributes.

<TableBuilder tag={require('@site/docs/components/\_dwc_control_map.json').Dialog} table="reflects" />