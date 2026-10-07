---
title: Research
description: What Ed Thomson has tested and learned while building with AI, from agent and model evaluations to multi-LLM document reviews and a revisited PhD thesis.
---

Building with AI raises questions that are worth answering properly: which agent harness actually works, how far a cheap model can be trusted, and whether several models checking each other catch more than one. These are the experiments and write-ups I've done to find out. Everything here is open on [GitHub](https://github.com/EdwardAThomson), and the things I've built are on my [Apps](/apps) and [AI](/AI) pages.

## Agents and models

*   **[Open-source agent reviews](https://github.com/EdwardAThomson/agent-reviews):** A code-level review of 23 open-source AI agents, from general-purpose assistants like OpenClaw and Hermes to coding agents like Aider, Cline and Codex CLI, and frameworks like LangGraph and CrewAI. Each is assessed at a specific commit on architecture, tools and security. Alongside it I'm running a harness comparison on 20 SWE-bench Lite tasks with the model held fixed, so the only thing that changes is the harness.
*   **[DungeonGPT evaluations](https://github.com/EdwardAThomson/DungeonGPT-JS):** An evaluation harness that scores models on labelled game turns. It showed small models read player intent well but make game decisions poorly, which is why the game engine makes the decisions and the model only narrates. More on the [AI page](/AI#dungeongpt).
*   **[Prompt injection experiments](https://github.com/EdwardAThomson/prompt-injection-testing):** A series of tests on LLMs as prompt injection classifiers, including [ScrambleGate](https://github.com/EdwardAThomson/Scramble-Gate). Scrambling and expanding prompts made detection worse; an adversarial system prompt made it better. More on the [AI page](/AI#prompt-injection-research).

## Multi-LLM reviews

A method I keep coming back to: have two or three models review the same document independently against a shared checklist, then reconcile their reviews to find where they agree, where they differ, and what all of them missed.

*   **[My PhD thesis, revisited](https://github.com/EdwardAThomson/wave-mechanics-lss):** My 2011 Glasgow thesis modelled dark matter as a wavefunction using the Schrödinger-Poisson equations. In 2026 I had Claude and GPT review it chapter by chapter, then rewrote the simulation code from scratch in modern C++ with Claude. The rewrite settled a question the thesis left open: the "messy" velocity fields weren't quantum interference but aliasing, so the fix was the opposite of what I'd proposed in 2011. Videos: [reviewing the thesis](https://www.youtube.com/watch?v=LpO6d4BPOio) and [rewriting the code](https://www.youtube.com/watch?v=J77JQkqD7NE).
*   **[Scotland's AI Strategy](https://github.com/EdwardAThomson/ai-scotland):** Claude, GPT and Gemini each reviewed every section of the Scottish Government's 2026-2031 AI strategy, producing 63 reviews. All three independently found that the strategy has no measurable targets and no budgets attached to its actions.
*   **[AI regulations](https://github.com/EdwardAThomson/AI-regulations):** The same method applied to national AI strategies and regulation across the EU, UK, USA, Singapore, Switzerland and the UAE, with cross-country comparisons.

## Mathematics

*   **[Large numbers](https://github.com/EdwardAThomson/mathematics):** How much does it cost, in pure logic, to name a huge number? I measured the specification cost behind number-naming systems like Rayo's function and verified the key results in the Lean 4 proof assistant, working with AI throughout.
