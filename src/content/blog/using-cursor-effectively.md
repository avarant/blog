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

### 1.1 Enable models and settings

Enable Gemini 2.5 Pro in your Cursor Settngs.
See list of models supported models [here](https://docs.cursor.com/models).
See [guide](https://x.com/ericzakariasson/status/1922434149568430304) on when to use which models.

<!-- Enable *Full folder contents* under Cursor Settings → Features. -->

### 1.2 Add documentation & rules

*  Open **Settings → Docs → + Add** and paste the public URL of any library/SDK you frequently use.  Cursor will automatically index the docs and surface them during chat.
*  Under **Settings → Rules** you can define project-wide guidelines (coding standards, ESLint rules, architectural constraints, etc.).  These rules can be referenced manually, injected into every prompt or can be injected based on file type.

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

* **Be specific** – instead of *"create a new lambda function"*, write *"create a new python3.12 lambda function using terraform. put the terraform code in the infra/ directory. see existing lambda @infra/lambda1.tf. put the python code in the lambda_functions/ directory."*.
* **Give context** – ensure relevant files are open in your editor so the model sees the full picture. Alternatively, you can copy-paste snippets or use features that explicitly add file content to the chat context if available in your Cursor version.
* **Iterate** – refine the prompt as needed, it doesn't always do exactly what you want on the first try.

## 4. Modes

There are multiple ways to use Cursor.

1. Chat: chat ui. open via Cmd + I (on mac)
2. Tab: superpowered autocomplete. When you're editing a file Cursor will suggest a line completion (often multi-line and context-aware). If you press `tab` it will move your cursor to the next line to edit.
3. Inline: select a piece of text and press Cmd + K (on mac)

There are currently 3 modes available in the Chat UI.

| Mode | When to use |
|------|-------------|
| **Ask** | Quick questions, discussions, code explanations. |
| **Edit** | Refactor or rewrite files with diff preview (no terminal commands). |
| **Agent** | Multi-step tasks (e.g. *"migrate project to Astro v5"*).  The agent will plan, execute edits, run commands and create new files as needed. |

## 5. Organising Work with PRD.md & TASKS.md

The way I like to work larger tasks and start new projects is to create a project requirements document (`PRD.md`) and a tasks document (`TASKS.md`).

- `PRD.md`: defines the high level requirements of the project. provides useful context
- `TASKS.md`: checklist of small tasks that Cursor can complete

I generally start crafting a `PRD.md` by discussing the project with a powerful model such as `o3`. Once the project requirements are defined I ask the model to split the requirements into small tasks that an AI coding assistant can handle.

Once I have both files I @ both in the Cursor Chat and ask it to complete each task and check off each task after completing it. Cursor will execute sequentially and iterate until it's completed all tasks. Note you may need to accept commands and click resume (Cursor stops running after 25 tool calls by default).

## 6. Markdown tools: Mermaid & Marp

* [Mermaid](https://mermaid.js.org/) – create flow charts and diagrams using Markdown. Github supports mermaid in markdown files, just use ```mermaid.
* [Marp slide decks](https://marp.app/) – create slide decks using Markdown

## 7. MCP (Model Context Protocol)

MCPs are tools to extend the capabilities of your coding assistant.

Some MCPs I use:

- [Github](https://github.com/github/github-mcp-server): lets coding assistant create pull requests, read issues
- [Playwright](https://github.com/microsoft/playwright-mcp): lets coding assistant control your browser

Once you configure your `mcp.json` (see the official SDK for setup guidance), you can instruct your agent to perform actions like creating PRs or, if you're running a local web server, navigating to `localhost:8000` using the Playwright MCP.

It is also fairly straightforward to setup your own local MCP server. See the official [MCP Python SDK](https://github.com/modelcontextprotocol/python-sdk).

*Warning:* be careful when downloading and running MCPs off the internet. Review what you're downloading. Use official MCPs when available.

### 8. Tips

- Use *Git* to track/save changes and allow easy rollback.
- In Cursor Chat use the restore checkpoint button to revert changes as needed.
- Be mindful of context. Models have varying but limited context windows. Try to keep your conversations short. Otherwise the model will eventually forget things.

## 9. Sample Workflow (Putting it all together)

1. **Create PRD:** `PRD.md` → outline feature requirements.
2. **Generate task list:** *"Convert PRD into TASKS.md checklist"*.
3. **Run Agent:** switch to *Agent* mode → *"Implement tasks"*.
4. **Write tests:** highlight changed files → `/tests`.
5. **Review in blog:** ask Cursor to open a Playwright browser → navigate to local dev server → visually review the changes and capture a screenshot for documentation if needed.

## 10. Afterthought

One particularly powerful concept is what I call a "closed-loop" workflow. If you can define your task in a way such that the coding assistant can verify its work — through automated tests, MCP tool use, curl requests, or other checks — it significantly boosts productivity. This self-checking capability allows the assistant to iterate and complete complex tasks with minimal human intervention, effectively closing the loop on the development cycle.
