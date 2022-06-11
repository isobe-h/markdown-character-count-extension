import assert = require("assert");
import * as path from "path";

// You can import and use all API from the 'vscode' module
// as well as import your extension to test it
import * as vscode from "vscode";
import { countCharacters, countCharactersExcludeMarkdownSyntax } from "../../characterCount";

test("Count active file character", async () => {
	let doc = await vscode.workspace.openTextDocument(
		path.join(__dirname, "..", "..", "..", "vsc-extension-quickstart.md")
	);
	assert.strictEqual(doc.languageId, "markdown");
	assert.strictEqual(countCharacters(doc.getText()), 2689);
});
test("Count active file character correctly", async () => {
	let doc = await vscode.workspace.openTextDocument(
		path.join(__dirname, "..", "..", "..", "vsc-extension-quickstart.md")
	);
	assert.strictEqual(doc.languageId, "markdown");
	assert.strictEqual(countCharactersExcludeMarkdownSyntax(doc.getText()), 2245);
});
