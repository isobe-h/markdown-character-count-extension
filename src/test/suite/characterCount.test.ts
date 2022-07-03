import assert = require("assert");
import {
	countCharacters,
	countCharactersExcludeMarkdownSyntax,
} from "../../characterCount";

type MarkdownTestCases = {
	text: string;
	syntaxExcludedLength: number;
	length: number;
};

const markdownSyntaxes: MarkdownTestCases[] = [
	{ text: "![test](dss.png)", syntaxExcludedLength: 0, length: 16 }, // image
	{ text: "[test](dss.png)", syntaxExcludedLength: 4, length: 15 }, // link
	{ text: "# header1", syntaxExcludedLength: 7, length: 9 },
	{ text: "## header2", syntaxExcludedLength: 7, length: 10 },
	{
		text: `
* case1
* case2
`,
		syntaxExcludedLength: 10,
		length: 15,
	},
	{
		text: `
- case1
- case2
`,
		syntaxExcludedLength: 10,
		length: 15,
	},
	{
		text: `
- [ ] case1
- [x] case2
`,
		syntaxExcludedLength: 10,
		length: 23,
	},
	{
		text: `
1. one
2. two
`,
		syntaxExcludedLength: 6,
		length: 13,
	},
	{ text: "_italic_", syntaxExcludedLength: 6, length: 8 },
	{ text: "**bold**", syntaxExcludedLength: 4, length: 8 },
	{ text: "~~strikethrough~~", syntaxExcludedLength: 13, length: 17 },
	{
		text: `
> Lorem ipsum dolor sit amet, consectetur adipiscing elit,
sed do eiusmod tempor incididunt ut labore et dolore magna
aliqua.

`,
		syntaxExcludedLength: 0,
		length: 125,
	},
	{ text: "`console.log('error')`", syntaxExcludedLength: 20, length: 22 },
	{
		text: "```\
const add = (a, b) => a + b;\
console.log(add(1,2));\
```",
		syntaxExcludedLength: 0,
		length: 56,
	},
	{
		text: `
Column A | Column B | Column C
---------|----------|---------
A1 | B1 | C1
A2 | B2 | C2
A3 | B3 | C3
`,
		syntaxExcludedLength: 0,
		length: 100,
	},
	{
		text: `
## Following extension guidelines

* [Extension Guidelines](https://code.visualstudio.com/api/references/extension-guidelines)
`,
		syntaxExcludedLength: 50,
		length: 125,
	},
];

markdownSyntaxes.forEach(({ text, syntaxExcludedLength, length }) => {
	test(`should count as ${length} in ${text}, excluding markdown syntax.`, () => {
		assert.strictEqual(
			countCharactersExcludeMarkdownSyntax(text),
			syntaxExcludedLength
		);
	});
});
markdownSyntaxes.forEach(({ text, length }) => {
	test(`should count as ${length} in ${text}`, () => {
		assert.strictEqual(countCharacters(text), length);
	});
});
