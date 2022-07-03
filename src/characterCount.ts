import { TextEditor, workspace } from "vscode";

const markdownSyntaxes = {
	table: /.*\|.*/g,
	image: /!\[+(.*?)\](.+)/g,
	numberList: /[0-9]. /g,
	checkedList: /- \[(.*| )] +/g,
	list: /[-\*] +/g,
	citation: /> [\s\S]*?(^(\r\n|\n|\r)$)/gm,
	codeBlock: /```.*```/g,
	strikethrough: /~~/g,
	misc: /[*#`_]{1,} */g, // bold, italic, header, inline code
	link: /\](.*)/g,
	parenthesesBegin: /\[/g,
	enter: /(\r\n|\r|\n)/g,
};

export function countCharactersExcludeMarkdownSyntax(text: string): number {
	Object.values(markdownSyntaxes).forEach((syntax) => {
		text = text.replace(syntax, "");
	});
	return text.length;
}
export function countCharacters(text: string): number {
	// Parse out unwanted whitespace so the split is accurate
	text = text.replace(/(< ([^>]+)<)/g, "").replace(/\s+/g, " ");
	text = text.replace(/^\s\s*/, "").replace(/\s\s*$/, "");
	return text.length;
}
export function getNumberOfCharacters(editor?: TextEditor): number {
	if (!editor) {
		return 0;
	}
	const excludeMdSyntax = workspace
		.getConfiguration("markdownCharaCount")
		.get<boolean>("countMarkdownSyntaxesAsCharacter");
	const text = editor.document.getText();
	if (editor.document.languageId === "markdown" && excludeMdSyntax) {
		return countCharactersExcludeMarkdownSyntax(text);
	}
	return countCharacters(text);
}
