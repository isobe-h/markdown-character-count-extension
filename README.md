
![license](https://img.shields.io/github/license/isobe-h/markdown-character-count-extension?style=for-the-badge)

# Markdown character count

This VS Code extension shows number of characters exclude Markdown syntaxes for writing.

![gif](./images/demo.gif)

Display number of active file characters on statusbar after installing.

## Features

- Display number of characters in the active file to StatusBar.
- Count characters excluding Markdown syntax.
- Supports non-Markdown file.  

## Installation

`code --install-extension  isobe-h.markdown-character-count`

## Exclude Following Markdown Syntaxes

- bold
- checked list
- citation
- code block
- header
- hyperlink
- image
- inline code
- italic
- list
- number list
- parentheses
- strikethrough
- table

## Example

Counts the following Markdown text as 17 characters.

```
# header1

- first
- second

```

Counts as 0 characters.

```

![](hoge.png)

Column A | Column B | Column C
---------|----------|---------
 A1 | B1 | C1
 A2 | B2 | C2
 A3 | B3 | C3

```

## Options

### `Count markdown syntaxes as character`

Exclude markdown syntaxes(e.g. '# hoge' count as 4 characters
default: false

### `Display character counts for non-Markdown files`

Display character counts other than Markdown
default: true
