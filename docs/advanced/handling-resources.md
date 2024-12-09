---
title: Handling Resources
---

The `Page` class in webforJ provides the ability to manage resources dynamically in your app. With the provided methods, you can efficiently handle stylesheets, JavaScript files, and inline resources, ensuring that your app has access to various necessary resources. 

## Managing stylesheets

Stylesheets define the look and feel of your app, and the `Page` class provides multiple ways to include them. You can add external styles from a CDN, serve styles stored in your app's `ws://` directory, or even define inline CSS rules dynamically. These options give you control over the presentation layer of your app.

### External stylesheets

External stylesheets are often used to incorporate third-party libraries or shared styles hosted on a CDN. The `addStyleSheet()` method allows you to dynamically include these styles, ensuring your app has access to the latest versions or pre-tested designs.

```java
page.addStyleSheet("https://cdn.example.com/styles/main.css");
```

### Internal stylesheets

For stylesheets that are part of your app, you can use the `ws://` protocol to include them dynamically. The `ws://` protocol allows your app to serve resources from its static directory, making it easier to manage paths without hardcoding deployment-specific URLs.

```java
page.addStyleSheet("ws://styles/app-styles.css");
```

This method ensures that the app correctly resolves the path to the style sheet regardless of the environment. For example, during development, the `ws://` protocol serves files locally, while in production, it ensures they're fetched from the appropriate deployment location.
<!-- Hyyan, is this correct? -->

:::info Configuring the WS Directory
You can configure the base directory for `ws://` resources in your web server’s settings. By default, this is the `resources/static` folder in your project. Check your server configuration to ensure the path matches your project structure.
:::

### Adding inline stylesheets

Inline stylesheets are ideal for dynamically generated or one-off CSS rules. The `addInlineStyleSheet()` method allows you to inject CSS directly into the page, ensuring changes take effect immediately.

```java
page.addInlineStyleSheet(".container { padding: 20px; background-color: #f9f9f9; }");
```

:::tip Using inline stylesheets
Use inline stylesheets sparingly to maintain clean separation of content and styles.
:::
<!-- Is this good advice? -->

## Managing JavaScript resources

The `Page` class also allows you to include external JavaScript scripts, serve internal files using `ws://`, or inject inline JavaScript dynamically. This flexibility ensures you can adapt your app to different use cases and requirements.

### Adding external JavaScript files
To include JavaScript files hosted on CDNs or other external servers, use the `addJavaScript()` method.

```java
page.addJavaScript("https://cdn.example.com/scripts/library.js");
```

This method allows you to dynamically include scripts, ensuring the app loads only the resources it needs.

### Adding internal JavaScript files

Internal JavaScript files stored in your app's static directory can be included using the `ws://` protocol.

```java
page.addJavaScript("ws://scripts/app-scripts.js");
```

During development, the `ws://` protocol serves files locally, while in production, it ensures they're fetched from the appropriate deployment location.