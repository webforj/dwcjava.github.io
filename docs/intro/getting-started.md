---
title: Getting Started
hide_table_of_contents: true
sidebar_position: 2
---

Welcome to webforJ - this article outlines the steps to start a new project with webforJ quickly with the `skeleton-starter-hello-world` sample.

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

### Clone the `skeleton-starter-hello-world` repository:

The most basic template provided for webforJ users is the [`skeleton-starter-hello-world`](https://github.com/webforj/skeleton-starter-hello-world) project, which provides basic project structure and minimal code to get development started.

To clone this repository, open a terminal and use the following commands:

```bash
git clone https://github.com/webforj/skeleton-starter-hello-world.git
cd skeleton-starter-hello-world
```

:::tip Downloading the ZIP
It's also possible to download the `skeleton-starter-hello-world` project directly from GitHub if preferred.
:::

### Open your project in an IDE

Open the `skeleton-starter-hello-world` project in your IDE. This project comes with webforJ as a dependency already configured, so you’re ready to run it right away.

A more detailed explanation of the project's file structure and configuration options can be found in the [next article](./configuration).

### Ensure webforJ is a dependency

To include webforJ in your project, add the following dependency in your pom.xml file. This has already be done in the `skeleton-starter-hello-world` project:

```xml
<dependencies>
  <dependency>
    <groupId>com.webforj</groupId>
    <artifactId>webforj</artifactId>
    <version>${webforj.version}</version>
  </dependency>
</dependencies>
```

### Run the app

In the terminal, run the following command from the project’s root directory:

```bash
mvn jetty:run
```

This option uses the Jetty Maven Plugin, and can be configured further, or replaced with another web server. For a more in-depth explanation of the various configuration options available, see [this section](../config/overview).