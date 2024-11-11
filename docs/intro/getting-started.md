---
title: Getting Started
hide_table_of_contents: true
sidebar_position: 2
---

# Getting started with webforJ

Welcome to webforJ! This article outlines the steps to start a new project with webforJ quickly with the `webforj-hello-world` sample.

<Head>
  <style>{`
  .container {
    max-width: 65em !important;
  }
  `}</style>
</Head>

<!-- vale off -->
import DocCardList from '@theme/DocCardList';

<!-- vale on -->

### Clone the `hello-world` repository:

The most basic template provided for webforJ users is the [`webforJ-hello-world`](https://github.com/webforj/webforj-hello-world) project, which provides basic project structure and minimal code to get development started.

To clone this repository, open a terminal and use the following commands:

```bash
git clone https://github.com/webforj/webforj-hello-world.git
cd webforj-hello-world
```

:::tip Downloading the ZIP
It's also possible to download the `hello-world` project directly from GitHub if preferred.
:::

### Open your project in an IDE

Open the webforj-hello-world project in your IDE. This project comes with webforJ as a dependency already configured, so you’re ready to run it right away.

A more detailed explanation of the project's file structure and configuration options can be found in the [next article](./configuration).

### Ensure webforJ is a dependency

To include webforJ in your project, add the following dependency in your pom.xml file. This has already be done in the `hello-world` project:

```xml
<dependencies>
  <dependency>
    <groupId>com.webforj</groupId>
    <artifactId>webforj</artifactId>
    <version>latest_version</version>
  </dependency>
</dependencies>
```

### Run the app

In the terminal, run the following command from the project’s root directory:

```bash
mvn jetty:run
```

This option uses the Jetty Maven Plugin, and can be configured further, or replaced with another web server. The following articles in this section will outline the various configuration options available, as well as an overview of app creation and available templates.

<DocCardList className="topics-section" />