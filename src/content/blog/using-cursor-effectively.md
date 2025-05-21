---
title: "Using Cursor Effectively: Tips, Tricks & Workflow Guide"
description: "A hands-on guide on using Cursor effectively"
publicationDate: 2025-05-21
updatedDate: 2025-05-21
readingTime: 6 # minutes, approximate
slug: using-cursor-effectively
tags: ["cursor", "ai", "productivity", "workflow"]
---

## 1. Initial Setup & Profile Configuration

### 1.1 Enable models

Enable Gemini 2.5 Pro in your Cursor Settngs.
See list of models supported models [here](https://docs.cursor.com/models).
See [guide](https://x.com/ericzakariasson/status/1922434149568430304) on when to use which models.

### 1.2 Add documentation & rules

*  Open **Settings → Docs → + Add** and paste the public URL of any library/SDK you frequently use.  Cursor will automatically index the docs and surface them during chat.
*  Under **Settings → Rules** you can define project-wide guidelines (coding standards, ESLint rules, architectural constraints, etc.).  These rules are injected into every prompt so you don't have to repeat yourself.

## 2. Built-in Tools & Commands

### 2.1 Built-in tools

Cursor has built-in tools that it utilizes when you ask it something. See list [here](https://docs.cursor.com/chat/tools).

- `Read file`: read contents of a file in your codebase. (750 lines in max mode, 250 lines in regular mode)
- `List directory`: list files in a directory
- `Codebase`: semantic search on your codebase.
- `Grep`: `ctrl + f` your codebase using grep
- `Search files`: find files using fuzzy search
- `Web`: search web. you can trigger a web search `@Web`
- `Fetch rules`: retrieve list of rules
- `Edit`: edit file
- `Run`: run terminal command

### 2.2 Slash commands

Cursor chat understands **slash (/)** and **@** commands:

| Command | What it does |
|---------|--------------|
| `/` | See available commands. |
| `/explain` | Explain highlighted code in plain English. |
| `/tests` | Generate unit tests for the current file. |
| `/fix` | Attempt to automatically fix the selected code block. |
| `@Web` | Trigger a live web search inside chat. |
| `@Docs` | See available documentation built into Cursor. |

## 3. Prompt Crafting 101

* **Be specific** – instead of *"optimize this function"*, write *"optimize this O(n²) loop for large arrays (> 10 k) while keeping memory < 50 MB"*.
* **Give context** – open relevant files and use `/add open files to context` so the model sees the full picture.
* **Iterate** – refine the prompt, don't expect perfection on the first pass.

## 4. Modes

There are currently 3 modes available in the Chat UI.

| Mode | When to use |
|------|-------------|
| **Ask** | Quick questions, code explanations, one-off commands. |
| **Edit** | Refactor a region or entire file with diff preview. |
| **Agent** | Multi-step tasks (e.g. *"migrate project to Astro v5"*).  The agent will plan, execute edits, and run tests in the background. |

Additionally, there is the Tab model (superpowered autocomplete). When you're editing a file Cursor will suggest a line completion. If you press `tab` it will move your cursor to the next line to edit.

## 5. Organising Work with PRD.md & TASKS.md

Large features start with a lightweight `PRD.md` (problem, goals, non-goals).  I then break work into a checklist in `TASKS.md`.  Cursor's agent can read these docs and execute the tasks sequentially – fantastic for repetitive migrations.

## 6. Markdown tools: Mermaid & Marp

* [Mermaid](https://mermaid.js.org/) – create flow charts and diagrams using Markdown
* [Marp slide decks](https://marp.app/) – create slide decks using Markdown

## 7. MCP (Model Context Protocol)

MCPs are tools to extend the capabilities of your coding assistant.

Some MCPs I use:

- [Github](https://github.com/github/github-mcp-server): lets Cursor create pull requests, read issues
- [Playwright](https://github.com/microsoft/playwright-mcp): lets Cursor control your browser

Once you configure your `mcp.json` just tell your agent to create PRs or navigate to `localhost:8000`.

Warning: be careful when downloading and running MCPs off the internet. Review what you're downloading. Use official MCPs when available.

### 8. Tips

- Use Git to track/save changes and allow easy rollback
- In Cursor Chat use the restore checkpoint button to revert changes
- Be mindful of context. Models have varying but limited context windows. Try to keep your conversations short. Otherwise the model will eventually forget.

## 9. Sample Workflow (Putting it all together)

1. **Create PRD:** `/new file PRD.md` → outline feature requirements.
2. **Generate task list:** *"Convert PRD into TASKS.md checklist"*.
3. **Run Agent:** switch to *Agent* mode → *"Implement tasks"*.
4. **Write tests:** highlight changed files → `/tests`.
5. **Review in blog:** ask Cursor to open a Playwright browser → navigate to local dev server → capture screenshot.
