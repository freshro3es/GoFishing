import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {

	console.log('Congratulations, your extension "hellobias" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('hellobias.helloWorld', () => {
		vscode.window.showInformationMessage('Hello Bias!');
	});

	context.subscriptions.push(disposable);

	let fishingMessage = vscode.commands.registerCommand('hellobias.goFishing', () => {

		vscode.window.showInformationMessage('Упс: Сегодня не рыбный день...');
	});

	context.subscriptions.push(fishingMessage);
}

export function deactivate() {}
