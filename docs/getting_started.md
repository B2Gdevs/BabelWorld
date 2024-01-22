# Getting Started with Your VS Code Extension

After creating your VS Code extension using Yeoman (yo), you can follow these steps to get started:

### 1. Understand Your Project Structure

Your project contains several important files:

- package.json: This is the manifest file where you declare your extension and command.
- src/extension.ts: This is the main file where you will provide the implementation of your command.
- README.md: This is the file where you describe your extension, its features, requirements, settings, and more.

### 2. Run Your Extension

To run your extension, press F5. This will open a new window with your extension loaded. You can run your command from the command palette by pressing Ctrl+Shift+P (or Cmd+Shift+P on Mac) and typing Hello World.

### 3. Debug Your Extension

You can set breakpoints in your code inside src/extension.ts to debug your extension. You can find output from your extension in the debug console.

### 4. Make Changes

You can relaunch the extension from the debug toolbar after changing code in src/extension.ts. You can also reload the VS Code window with your extension to load your changes.

### 5. Explore the API

You can open the full set of the VS Code API when you open the file node_modules/@types/vscode/index.d.ts.

### 6. Run Tests

Open the debug viewlet (Ctrl+Shift+D or Cmd+Shift+D on Mac) and from the launch configuration dropdown pick Extension Tests. Press F5 to run the tests in a new window with your extension loaded.

### 7. Update README

Update the README.md file to provide a detailed description of your extension, its features, requirements, settings, and more. This is the first file users will see when they visit your extension's page on the VS Code marketplace.

### 8. Publish Your Extension

Once you're ready, you can publish your extension on the VS Code extension marketplace.

### 9. Follow Best Practices

Ensure that you've read through the extension guidelines and follow the best practices for creating your extension.
