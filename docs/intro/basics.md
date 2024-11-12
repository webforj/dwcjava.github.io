---
title: App Basics
sidebar_position: 3
---

Once webforJ and its dependencies are set up in your project, you're ready to create the app structure. This article will walk through the key elements of a basic webforJ app, specifically focusing on the `Application` and `HomeView` classes, which are the foundational classes in the [`skeleton-starter-hello-world`](https://github.com/webforj/skeleton-starter-hello-world) project.

## Main app class: `Application.java`

The `Application` class serves as the entry point for your webforJ app, setting up essential configurations, themes, and routes. To start, notice the class's declaration and annotations. 

This class extends the core `App` class from webforJ, making it recognizable as a webforJ app. Various annotations configure the app's theme, title, and routing.

```java
@Routify(packages = "com.webforj.samples.views")
@AppTheme("dark")
@AppTitle("webforJ Hello World")
public class Application extends App {
}
```

- `@Routify`: Specifies that webforJ should scan the `com.webforj.samples.views package` for route components.
- `@AppTheme`: Sets the app theme, in this case, dark.
- `@AppTitle`: Defines the title displayed on the app's browser tab.
- `@StyleSheet`: Links an external CSS file, styles.css, allowing custom styling for the app.

The Application class doesn't contain any additional methods because the configurations are set through annotations, and webforJ handles the app initialization.

With `Application.java` set up, the app is now configured with a title, dark theme, and routes pointing to the views package. Next, an overview of the `HomeView` class gives insight into what is displayed when the app is run.

## Main view class: `HomeView.java`

The `HomeView` class defines a simple view component that serves as the homepage for the app. It displays a title, an image, a button that increments a counter, and a link to the docs.

### Class declaration and annotations

`HomeView` extends `Composite<FlexLayout>`, which allows it to act as a reusable component containing a [`FlexLayout`](../components/flex-layout) component. The [`@StyleSheet`](../styling/getting-started#using-annotations) annotation applies a CSS stylesheet, and [`@Route("/")`](../routing/overview) makes this the root route of the app.

```java
@StyleSheet("context://styles/styles.css")
@Route("/")
public class HomeView extends Composite<FlexLayout> {
```

### Component initialization

Inside the class, several UI elements are initialized and declared:

```java
private FlexLayout self = getBoundComponent();
private Img image = new Img("context://images/logo.svg");
private H1 title = new H1("Welcome to webforJ");
private Button counter = new Button("Count is 0");
private Anchor docs = new Anchor("https://documentation.webforj.com/", "Check out the docs to learn more");
private int count = 0;
```

- `self`: The main layout component using [`FlexLayout`](../components/flex-layout), configured as a container for the elements. This element uses the `getBoundComponent()` method to store the main `FlexLayout` the class contains.
- `image`: Displays an SVG logo.
- `title`: Shows a welcome message.
- `counter`: A button labeled `Count is 0`, which updates each time it's clicked.
- `docs`: A link to the webforJ documentation.

### Constructor and layout configuration

The constructor sets up the layout and component interactions:

```java
public HomeView() {
    self.addClassName("home-view");
    self.setDirection(FlexDirection.COLUMN)
        .setJustifyContent(FlexJustifyContent.CENTER)
        .setAlignment(FlexAlignment.CENTER)
        .setSpacing("3em")
        .setStyle("height", "100dvh");

    counter.setTheme(ButtonTheme.PRIMARY);
    counter.onClick(e -> counter.setText("Current Count: " + (++count)));

    self.add(image, title, counter, docs);
}
```

- Layout Settings: The [`FlexLayout`](../components/flex-layout) is configured to stack items vertically, using `FlexDirection.COLUMN`, center them using `FlexJustifyContent.CENTER and FlexAlignment.CENTER`, and add spacing by calling `setSpacing("3em")`.
- Button Action: The counter button uses a click event listener, `onClick`, to increment the count and update its label whenever it’s clicked.
- Component Addition: Finally, all elements are added to the layout via `self.add(image, title, counter, and docs)`.

## Styling the app

The `styles.css` file provides custom styling for your webforJ app. This CSS file is referenced in the HomeView class using the [`@StyleSheet`](../styling/getting-started#using-annotations) annotation, which allows the app to apply styles to components within the app.

This file is located in the `resources` directory of the project, and can be referenced using the context URL `context://styles/styles.css`. This enables webforJ to locate and apply the style sheet.