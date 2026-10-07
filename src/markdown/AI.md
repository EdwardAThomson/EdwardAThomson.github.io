---
title: Artificial Intelligence
description: Ed Thomson builds software with AI, from LLM-powered games and writing tools to developer tooling and prompt injection research.
---

I build software with AI. Most of what I make now starts as a spec I write and finishes as working code that an AI agent and I have built together, and a lot of it puts an LLM at the centre of the product itself: games with AI-driven stories, tools for writing long-form fiction, and an internal "company brain" that answers questions over a firm's data. I ship through [Octonion Software](https://octonion.io), and most of my projects are open source on [GitHub](https://github.com/EdwardAThomson). You can see the full list on my [Apps](/apps) page.

My background is in physics and information security (penetration testing, then governance, risk and compliance at Cisco), so I care about the parts of AI products that don't make the demo: permissions, guardrails, and what happens when someone feeds the model a malicious prompt.

## How I build with AI

I work with AI coding agents rather than autocomplete. The agent writes most of the code; my job is deciding what to build, writing it down clearly, and checking what comes back.

*   **Spec first:** Every project starts with written documents: requirements, design notes, an implementation plan. Clear documents are the single biggest factor in getting good results from an agent.
*   **Delegate the mechanics:** Boilerplate, tests, refactors, unfamiliar libraries and syntax all go to the agent.
*   **Own the decisions:** Architecture, trade-offs, and whether to accept, reject or rework a change stay with me. AI is an accelerator for *how* to build something; it shouldn't be the one deciding *what* to build.
*   **Verify everything:** The value of AI output is proportional to the scrutiny you give it. Nothing gets committed because it looks right.

I've also built tools for this way of working: [VantageTerm](https://github.com/EdwardAThomson/vantageterm), a desktop companion for Claude Code and other CLI agents with diffs for reviewing changes; [plimsoll](https://github.com/EdwardAThomson/plimsoll), an autonomous build loop that writes its own spec and checklist and only commits work that passes verification; and [LLM Remote Runner](https://github.com/EdwardAThomson/LLM-Remote-Runner), a secure web interface for running agent tasks remotely.

## Things I've built

### LLM Brain Demo
[LLM Brain Demo](https://github.com/EdwardAThomson/llm-brain-demo) is a working argument that a company "LLM brain" should be a router over governed tools, not one big vector database. It's a single chat interface over a synthetic company, combining text-to-SQL with hybrid document search, with permissions enforced by Postgres rather than by the prompt.

### RPG Loom
[RPG Loom](https://rpg-loom.octonion.io/) is a deterministic incremental RPG with quests, crafting and combat, where LLMs generate the narrative content. It supports multiple LLM providers. [GitHub](https://github.com/EdwardAThomson/RPG-Loom)

### DungeonGPT
[DungeonGPT](https://dungeongpt.xyz/) is an AI Dungeon Master for tabletop-style adventures, with character creation, party selection and conversational gameplay. It started as a [Python app](https://github.com/EdwardAThomson/DungeonGPT); the [JavaScript version](https://github.com/EdwardAThomson/DungeonGPT-JS) adds a map and is the one you can play.

### Writing tools
*   **[NovelWriter](https://github.com/EdwardAThomson/NovelWriter)** helps authors write novels with LLMs: generating lore, outlining the story, planning scenes and writing chapter prose. It began as my entry for [NaNoGenMo 2024](https://github.com/NaNoGenMo/2024/issues/31), where an early version produced a 52,000-word novel, *Echoes of Terra Nova*.
*   **[StoryDaemon](https://github.com/EdwardAThomson/StoryDaemon)** takes the idea further: an autonomous agent that plans, writes and evolves long-form fiction on its own.
*   **[LLM Creative Writing Analyzer](https://github.com/EdwardAThomson/LLM-Creative-Writing-Analyzer)** sends the same prompt to several models, many times over, to measure how consistent and how varied their writing is, including how often they reuse the same names.

## Prompt injection research

I've run a series of experiments on using an LLM as a safety classifier to catch prompt injection attacks. Two of my ideas made detection worse; the third made it better.

*   **[ScrambleGate](https://github.com/EdwardAThomson/Scramble-Gate):** Inspired by ASLR in computer security, it randomly samples and scrambles parts of a prompt before an LLM classifies it. Detection dropped once inputs were scrambled.
*   **Prompt expansion:** Making prompts more verbose, to see if that helped the classifier spot malicious intent. It made performance worse.
*   **Adversarial system prompts:** Telling the classifier to be suspicious and alert to abuse. This improved detection.

The [prompt injection testing tool](https://github.com/EdwardAThomson/prompt-injection-testing) now compares detectors side by side: LLM classifiers, regex patterns, BERT models, cheap LLM pre-filters and ScrambleGate.

## On AI and thinking

In June 2025 an MIT study ([Your Brain on ChatGPT](https://arxiv.org/abs/2506.08872)) was widely summarised as "AI makes you dumber". The headline missed some nuance buried on page 139 of 206:

> "Brain-only writers who later added ChatGPT actually showed enhanced posterior–prefrontal coupling (Session 4)."

In other words, learning first and automating second pays a cognitive dividend. AI isn't brain rot; it's a mirror. If you skip the heavy lifting, it happily keeps the bar low. Do the first reps yourself, then let AI boost your thinking rather than replace it.

## Get in touch

If you'd like something built with AI, or want to talk through an idea, the best way to reach me is [LinkedIn](https://www.linkedin.com/in/edward-thomson-phd-msc-080ba519/).
