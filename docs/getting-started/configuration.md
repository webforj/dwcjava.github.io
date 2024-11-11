---
sidebar_position: 2
displayed_sidebar: documentationSidebar
---

# Configuration

To successfully deploy and run a webforJ app, a few key configuration files are required: webforJ.conf, web.xml, and blsclient.conf. Each of these files controls different aspects of the application’s behavior, from entry points and debug settings to servlet mappings and cache controls.

## Configuring `webforJ.conf`

The `webforJ.conf` file is a core configuration file in webforJ, specifying app settings like entry points, debug mode, and client-server interaction. The file is written in [HOCON format](https://github.com/lightbend/config/blob/master/HOCON.md), and should be located in the `resources` directory.

### Example webforJ.conf File

```hocon
# This configuration file is in HOCON format:
# https://github.com/lightbend/config/blob/master/HOCON.md

webforj.entry = com.webforj.samples.Application
webforj.debug = true
webforj.reloadOnServerError = on
webforj.clientHeartbeatRate = 8s
```

### Configuration options

| Property                   | Explanation                                                                                                                                                                           | Default Value |
|----------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------|
| **`webforj.entry`**            | Specifies the main entry point class for the webforJ app. Set this to the fully qualified name of your main app class, such as `com.webforj.samples.Application`.    | N/A     |
| **`webforj.debug`**            | Enables debug mode when set to `true`, providing additional logging and detailed error messages. Useful for development but should be disabled in production.                         | `true`  |
| **`webforj.reloadOnServerError`** | If enabled, the client will attempt a single page reload if the server is temporarily inaccessible, like during hot redeployment with the Jetty Maven Plugin. This is intended for development environments and only applies when the app is temporarily unavailable during hot redeployment, not for other errors. | `on`    |
| **`webforj.clientHeartbeatRate`** | Sets the interval at which the client pings the server to verify connectivity. For development, set this to a short interval, like `8s`, to quickly detect server availability issues. For production, avoid values below `50s` to minimize server load. | `50s`   |

## Configuring `web.xml`

The web.xml file is an essential configuration file for Java web applications, and in webforJ, it defines important settings like the servlet configuration, URL patterns, welcome pages, and caching filters. This file should be located in the `WEB-INF` directory of your project’s deployment structure.

:::tip Example `web.xml`
For an example `web.xml` that can be used in projects, see [this file](#).
<!-- TODO UPDATE THE URL -->
:::

| Setting                                      | Explanation                                                                                                                                                                               | Default Value                |
|----------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------|
| **`<display-name>`**                         | Sets the display name for the web app, typically derived from the project name. This name appears in app servers' management consoles.                                     | `${project.name}`            |
| **`<servlet>` and `<servlet-mapping>`**      | Defines the `WebforjServlet`, the core servlet for handling webforJ requests. This servlet is mapped to all URLs (`/*`), making it the main entry point for web requests.                 | `WebforjServlet`             |
| **`<load-on-startup>`**                      | Specifies that `WebforjServlet` should be loaded when the app starts. Setting this to `1` ensures that the servlet loads immediately, which improves initial request handling.     | `1`                          |
| **`<welcome-file-list>`**                    | Defines the default page loaded when the app starts. Here, `app` is set as the welcome file, which will be displayed when navigating to the root URL of the app.           | `app`                        |
| **`<filter>` and `<filter-mapping>`**        | Configures the `WebforjCacheControlFilter` to control caching for JavaScript files. This filter prevents caching of `.js` files by setting specific HTTP headers, improving development flow. | `WebforjCacheControlFilter`  |


## Configuring `blsclient.conf`