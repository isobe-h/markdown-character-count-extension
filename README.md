
![license](https://img.shields.io/github/license/isobe-h/markdown-character-count-extension?style=for-the-badge)
![CI](https://github.com/github/docs/actions/workflows/ci.yml/badge.svg)

# Markdown character count

This VS Code extension shows number of characters exclude Markdown syntaxes for web writing.

![gif](./images/markdown%20character%20count.gif)

Shows number of active file characters on statusbar after installing.

## Features

- :sparkles: Display number of characters in the active file to StatusBar.
- :sparkles: Count characters excluding Markdown syntax.
- :sparkles: Supports non-Markdown file.  

## Installation

`code --install-extension  isobe-h.markdown-character-count`

## Exclude Markdown Syntaxes

This extension exclude following Markdown syntaxes.

- table
- image
- number list
- checked list
- list
- code block
- strikethrough
- italic
- link
- parentheses
- enter
- misc(*,>,#,`,_)

## Example

This extension counts the following Markdown text as 17 characters.

```
# header1

- first
- second

```

## Options

### `Count markdown syntaxes as character`

Display number of characters other than Markdown
default: false

### `Show other than Markdown`

Exclude markdown syntaxes(e.g. '# hoge' count as 4 characters
default: true
