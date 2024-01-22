import * as vscode from 'vscode';
import * as path from 'path';
import * as fs from 'fs';

export function activate(context: vscode.ExtensionContext) {
	let disposable = vscode.commands.registerCommand('babelworld.showStories', () => {
		const panel = vscode.window.createWebviewPanel(
			'babelStories',
			'Babel Stories',
			vscode.ViewColumn.One,
			{
				enableScripts: true,
			}
		);

		const scriptPathOnDisk = vscode.Uri.file(
			path.join(context.extensionPath, 'dist', 'bundle.js')
		);

		const scriptUri = panel.webview.asWebviewUri(scriptPathOnDisk);

		// Read babel.json
		let babelData = ''; // default value
		if (vscode.workspace.workspaceFolders) {
			const babelPath = path.join(vscode.workspace.workspaceFolders[0].uri.fsPath, 'babel.json');
			if (fs.existsSync(babelPath)) {
				babelData = fs.readFileSync(babelPath, 'utf8');
			} else {
				console.error('babel.json not found');
			}
		} else {
			// Handle the case where no workspace is opened
			console.error('No workspace opened');
		}
		
		panel.webview.html = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Babel Stories</title>
      </head>
      <body>
        <div id="root"></div>
        <script>
          window.babelData = ${babelData};
        </script>
        <script src="${scriptUri}"></script>
      </body>
      </html>`;
	});

	context.subscriptions.push(disposable);
}