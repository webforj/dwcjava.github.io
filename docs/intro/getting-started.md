---
title: Getting Started
sidebar_position: 2
---

This article outlines the steps to scaffold a new webforJ app using the webforj archetypes. This archetypes provide a pre-configured project structure and starter code to quickly get a project up and running.

<!-- vale off -->
import DocCardList from '@theme/DocCardList';

<!-- vale on -->


## Using the `hello-world` archetype

To create and scaffold a new `hello-world` project, follow these steps:

1) **Navigate to the proper directory**:
Open a terminal and move to the folder where you want to create your new project.

2) **Run the `archetype:generate` command**:
Use the Maven command below, and customize the `groupId`, `artifactId`, and `version` as needed for your project.

```bash
mvn -B archetype:generate \
-DarchetypeGroupId=com.webforj \
-DarchetypeArtifactId=webforj-archetype-hello-world \
-DgroupId=org.example \
-DartifactId=my-hello-world-app \
-Dversion=1.0-SNAPSHOT
```

After running the command, Maven will generate the project files necessary to run the project.

### Run the app

Navigate into the newly created directory, and run the following command from the project’s root directory:

```bash
mvn jetty:run
```

This command uses the Jetty maven plugin to start a Jetty server. Once the server is running, open your browser and go to [http://localhost:8080](http://localhost:8080) to view the app.

:::info Licensing and watermark
For information on the licensing and the watermark present in unlicensed projects, see [this article](../configuration/licensing-and-watermark).
:::