import {
	StatusBarItem,
	StatusBarAlignment,
	ExtensionContext,
	window,
	workspace,
} from "vscode";
import { getNumberOfCharacters } from "./characterCount";

let myStatusBarItem: StatusBarItem;
export function activate({ subscriptions }: ExtensionContext) {
	// create a new status bar item that we can now manage
	myStatusBarItem = window.createStatusBarItem(StatusBarAlignment.Left, 100);
	subscriptions.push(myStatusBarItem);

	// register some listener that make sure the status bar
	// item always up-to-date
	subscriptions.push(window.onDidChangeActiveTextEditor(updateStatusBarItem));
	subscriptions.push(
		window.onDidChangeTextEditorSelection(updateStatusBarItem)
	);
	// update status bar item once at start
	updateStatusBarItem();
}

function updateStatusBarItem(): void {
	const showOther = workspace
		.getConfiguration("markdown character count")
		.get<boolean>("Show other than Markdown");
	const editor = window.activeTextEditor;
	if (!editor || (!showOther && editor.document.languageId !== "markdown")) {
		myStatusBarItem.hide();
		return;
	}
	myStatusBarItem.show();
	const n = getNumberOfCharacters(editor);
	if (n > 0) {
		myStatusBarItem.text = `$(pencil) ${n} Characters`;
	}
}
