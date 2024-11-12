---
title: Getting Started
sidebar_position: 2
---

This article outlines the steps to start a new project with webforJ quickly with the `skeleton-starter-hello-world` sample.

<!-- vale off -->
import DocCardList from '@theme/DocCardList';

<!-- vale on -->

### Clone the skeleton starter repository

The most basic template provided for webforJ users is the [`skeleton-starter-hello-world`](https://github.com/webforj/skeleton-starter-hello-world) project, which provides basic project structure and minimal code to get development started.

To clone this repository, open a terminal and use the following commands:

```bash
git clone https://github.com/webforj/skeleton-starter-hello-world.git
cd skeleton-starter-hello-world
```

:::tip Downloading the ZIP
It's also possible to download the `skeleton-starter-hello-world` project directly from GitHub if preferred.
:::

### Import your project in an IDE

Import the starter project in your IDE. This project comes with webforJ as a dependency already configured, so you’re ready to run it right away.

### Run the app

In the terminal, run the following command from the project’s root directory:

```bash
mvn jetty:run
```

This command uses the Jetty maven plugin to start a Jetty server. Once the server is running, open your browser and go to [http://localhost:8080](http://localhost:8080) to view the app.