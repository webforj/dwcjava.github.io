---
title: Terminal
---

<DocChip chip="shadow" />

<DocChip chip="name" label="dwc-terminal" />

<JavadocLink type="appnav" location="com/webforj/component/appnav/AppNav" top='true'/> 

The `Terminal` component in webforJ provides a command-line interface within a web app, allowing users to interact with the app through typed commands. It’s ideal for apps that need command execution, debugging tools, or interactive text-based environments. With support for features like custom commands, command history, and user prompts, the `Terminal` component makes it easy to build a functional and interactive terminal experience. 

## Basics

To initialize a `Terminal` component in webforJ, simply create an instance of the Terminal class and configure any desired properties. At its most basic, the `Terminal` provides an interactive text area where users can enter commands and receive output. 

This example creates a basic `Terminal` component:

<ComponentDemo 
path='https://demo.webforj.com/webapp/controlsamples/terminal?'  
javaE='https://raw.githubusercontent.com/webforj/webforj-docs-samples/refs/heads/main/src/main/java/com/webforj/samples/views/terminal/TerminalView.java'
height='300px'
/>

## Writing text to the `Terminal`
The `Terminal`` component provides methods to display text in different ways:

- `write()`: Outputs text without a newline, which is useful for prompts or ongoing lines of text that should stay on the same line.
- `writeln()`: Outputs text followed by a newline, ideal for messages or commands that should appear on separate lines.

## Reading user input
To capture user input, use the `addDataListener()` method. This method listens for user keypresses and processes the entered text when the user presses Enter.

In this example, each time the user presses Enter, the `Terminal` captures the input, displays it back to the user, and shows a new prompt. This setup is essential for creating an interactive command interface.

```java
terminal.addDataListener(event -> {
    String input = event.getValue();
    terminal.writeln("You entered: " + input);
    terminal.write("$ "); // Displays a new prompt
});
```

## Command processing
The `Terminal` component allows you to define custom commands, enabling the creation of an interactive command-line environment. You can capture user commands, split them into arguments, and use a switch statement to process each command.

```java
private void processCommand(Terminal terminal, String command) {
    String[] args = command.trim().split(" ");
    String cmd = args[0];

    switch (cmd) {
        case "time":
            terminal.writeln("Current time: " + new java.util.Date());
            break;
        case "clear":
            terminal.clear();
            break;
        case "help":
            terminal.writeln("Supported commands:");
            terminal.writeln("  time - display current time");
            terminal.writeln("  clear - clear the terminal");
            terminal.writeln("  help - list available commands");
            break;
        default:
            terminal.writeln("Unknown command: " + cmd);
            break;
    }

    terminal.write("$ ");
}
```
In this setup, commands like time, clear, and help are predefined, and unrecognized commands are handled with an error message.

## Command history
The `Terminal` component supports command history navigation, allowing users to cycle through previous commands using the up and down arrow keys. This is achieved by storing commands in a commandHistory list and updating the input field based on the current history index.

### Storing commands
Each time a command is entered (by pressing Enter), it is added to the commandHistory list. The historyIndex is updated to the end of the list, allowing users to navigate back through previous commands.

```java
case "\r": // Enter Key
    terminal.write("\r\n");
    if (!commandBuffer.trim().isEmpty()) {
        commandHistory.add(commandBuffer);
        historyIndex = commandHistory.size();
    }
    processCommand(terminal, commandBuffer);
    commandBuffer = ""; // Reset command buffer for new input
    terminal.write("$ ");
    break;
```

:::info Tip
For a smoother user experience, ensure the command history does not store empty commands. You can add a check before saving to commandHistory to ensure that only meaningful commands are stored.
:::

### Navigating command history
Users can cycle through past commands with the arrow keys. Pressing the up arrow displays the previous command, while the down arrow shows the next command (or clears the input if no more history is available).

```java
// Up Arrow Key: Navigate to previous command in history
case "\u001b[A": // Up arrow key
    if (historyIndex > 0) {
        historyIndex--;
        replaceCommandBuffer(terminal, commandHistory.get(historyIndex));
    }
    break;

// Down Arrow Key: Navigate to next command in history
case "\u001b[B": // Down arrow key
    if (historyIndex < commandHistory.size() - 1) {
        historyIndex++;
        replaceCommandBuffer(terminal, commandHistory.get(historyIndex));
    } else if (historyIndex == commandHistory.size() - 1) {
        historyIndex++;
        replaceCommandBuffer(terminal, "");
    }
    break;
```
### Editing the current command
If the user presses Backspace, the `Terminal` component removes the last character from `commandBuffer` and updates the display. This allows users to modify the current command before submitting it.

```java
case "\u007F": // Backspace key
    if (commandBuffer.length() > 0) {
        commandBuffer = commandBuffer.substring(0, commandBuffer.length() - 1);
        terminal.write("\b \b"); // Visually remove character
    }
    break;
```
### Displaying printable characters
Finally, for any other printable character, it’s added to the commandBuffer and displayed in the `Terminal`.

```java
default:
    if (isPrintable) {
        commandBuffer += input;
        terminal.write(input);
    }
    break;
```

## Styling

### Auto-fit and custom sizing
For responsive design, you can use `setAutoFit(true)` to make the `Terminal` automatically fit its container, or `setSize(width, height)` to define custom dimensions.

```java
terminal.setAutoFit(true);  // Auto-fits the container
terminal.setSize("100vw", "100vh"); // Sets width and height
```

These options give you control over the `Terminal`’s layout and appearance, making it adaptable to different screen sizes or embedded contexts.

### Shadow parts

These are the various parts of the shadow DOM for the component, which will be required when styling via CSS is desired.

<TableBuilder tag={require('@site/docs/components/_dwc_control_map.json').Terminal} table="parts"/>


