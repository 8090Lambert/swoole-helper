// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');
const execa = require('execa');

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
async function activate(context) {
	// First， local must have this extension with php
	let moduleReg = /swoole/;
	let currentModuleArray = await execa.shell('php -m')
	if (!moduleReg.test(currentModuleArray.stdout)) {
		let errMsg = 'Must have swoole extension in your Runtime environment!\nYou can visit "https://www.swoole.com/page/download" to download and install!'
		console.error(errMsg)
		vscode.window.showWarningMessage(errMsg)
		return 
	}

	const conf = vscode.workspace.getConfiguration('php')
	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	//console.log('Congratulations, your extension "vscode-swoole-helper" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with  registerCommand
	// The commandId parameter must match the command field in package.json
	// let disposable = vscode.commands.registerCommand('extension.helloWorld', function () {
	// 	// The code you place here will be executed every time your command is executed

	// 	// Display a message box to the user
	// 	vscode.window.showInformationMessage('Hello World!');
	// });
	let disposable = vscode.commands.registerCommand('extension.helloWorld', () => {

	});

	context.subscriptions.push(disposable);
}
exports.activate = activate;

// this method is called when your extension is deactivated
function deactivate() {}

module.exports = {
	activate,
	deactivate
}
