---
title: Artificial Intelligence
description: Ed Thomson's insights and experiences in Artificial Intelligence
---

AI is a fascinating area of technology. It's been developing at an incredible pace that many of us didn't expect. While many people working in tech will have known about it for many years, it wasn't really until ChatGPT came online that things really took off. The topic elicits a lot of hate and other contentious views, but amidst the hype and the hate I do think there is something real and valuable in the technology.

I've been having a lot of fun playing with AI and taking on fun coding tasks. It isn't pure "vibe coding", but rather AI-assisted coding. Learning syntax seems redundant when I can outsource that to a machine that's superior at this task than I am.

I believe that those who hate AI do not adequately understand the technology. Allow me to demonstrate: in June 2025, a [study](https://arxiv.org/abs/2506.08872) was making the rounds that supposedly proves: AI = "Everyone will get dumber." Almost all of the comments I've seen amount to "omg so true 100%". Hugely ironic that people complaining that "AI will make you dumber" display zero critical thought when criticizing AI.

While there is truth in the article, there is some nuance buried deep in the report on page 139 (out of 206):

> "Brain-only writers who later added ChatGPT actually showed enhanced posterior–prefrontal coupling (Session 4)."

In other words: Learning first, automation second = cognitive dividend.

AI isn't brain rot; it's a mirror. If you skip the heavy lifting, it happily keeps the bar low. Sweat through the first reps yourself then let AI boost, not replace, your cognition.

## Guiding Principles
My philosophy on using AI can be broken down into a few key principles:

*   **1. Augment, Don't Replace:** AI should be a partner that handles the tedious work (like syntax and boilerplate), freeing up human cognition for higher-level creative and strategic thinking.
*   **2. Critical Engagement is Non-Negotiable:** The value of AI is directly proportional to the critical thought you apply to its output. It's a tool for enhancement, not a replacement for thinking: if you skip the heavy lifting, it happily keeps the bar low.
*   **3. Build in the Open:** The best way to understand and demystify AI is to build with it and share the results. This is why my projects are open source.

## My meta Workflow for working with AI
I use AI as an active pair programmer. My primary tool is **Cursor**, which allows me to have a tight feedback loop with an AI that has full context of my codebase.

*   **Delegate:** Repetitive tasks, writing boilerplate code, generating unit tests, and explaining unfamiliar libraries or codebases.
*   **Command:** High-level architecture, creative problem-solving, and the final decision on whether to accept, reject, or modify any code suggestion. Creating documents that contain project requirements, design thinking, etc are essential.
*   **Recognize its Limits:** AI is not a strategic thinker. It can't tell you *what* to build, but it's an unparalleled accelerator for *how* to build it once you have a clear vision.


## My AI-powered projects
To put my philosophy into practice, I've created several applications with AI-assistance that also use AI to perform some central task.

I have a few things that I've worked on, but are not yet at a sufficient quality to publish. I also have a cryptocurrency price analysis app, but my work there is on-going.

### NovelWriter
[NovelWriter](https://github.com/edthomson/NovelWriter) is a comprehensive Python application designed to assist authors in writing novels and short stories across multiple genres by leveraging Large Language Models (LLMs). It provides a GUI-based interface built with Tkinter for managing novel parameters, generating universe lore, outlining story structure, planning scenes, and writing chapter prose. The code is fully open source and on GitHub.

*[Screenshot of the NovelWriter GUI would go here]*

The original version was created as part of NaNoGenMo 2024 ([completed](https://github.com/NaNoGenMo/2024/issues/31)). The first version of the code was pushed to a different repo as I lost access to my GitHub account (fixed!), please find the [original repo here](https://github.com/edthomson/NovelWriter). That code was not fully automated, but it did generate a 52,000-word novel (Echoes of Terra Nova).


### LLM Creative Writing Tester
A tool for testing and analyzing creative writing capabilities of various Large Language Models (LLMs). This tool allows you to test multiple LLMs with the same creative writing prompt to analyze and compare their responses.

Advanced similarity analysis between responses:
* Text-based similarity (exact matches)
* Semantic similarity (meaning-based comparison)
* Named entity detection and comparison
* Name component analysis (detects when name parts like surnames appear across different texts)
* Text structure analysis (paragraphs, sentences, and words metrics)

Find on [LLM Creative Writing Tester GitHub](https://github.com/EdwardAThomson/LLM-Creative-Writing-Analyzer).


### DungeonGPT
[DungeonGPT](https://github.com/EdwardAThomson/DungeonGPT) is an interactive, AI-powered Dungeon Master tool designed to guide players through customized adventures in a tabletop role-playing game. The application features dynamic character creation, party selection, game settings customization, and conversational gameplay, all powered by GPT4o.

The code is fully open sourced and on GitHub. The code is written in Python, although I also wrote a version of the app in JS: [DungeonGPT-JS](https://github.com/EdwardAThomson/DungeonGPT-JS). This latter version has a little bit more functionality as I added a simple map.


### Prompt Injection
I worked on a couple of research that explored prompt injection attacks on LLMs. I was primarily interested in how to use an LLM as a safey classifier for defending against prompt injection attacks. My first two ideas made performance; however, asking the LLM to be suspicious of prompts improved performance.

**ScrambleGate**
The intention was a stochastic pre-execution gate: before a prompt is sent to the main model, ScrambleGate randomly samples and scrambles parts of the input, then sends them to an LLM for safety classification.
[ScrambleGate on GitHub](https://github.com/EdwardAThomson/Scramble-Gate).

The idea was inspired by ASLR (Address Space Layout Randomization) in computer security: scrambling the input before "execution".

However, this was not a successful attempt at defending against prompt injection attacks. The detection rate decreases upon being scrambled. Note that the system prompt in this code did not ask the LLM to be suspicious.

**Prompt Expansion**
A simple tool that analyzes how prompt expansion and adversarial system prompts affect safety classification by LLMs. The initial idea was to make prompts more verbose and see if this helped an LLM spot malicious intent; however, this made performance worse.

**Adversarial System Prompts**
That lead me to try asking the LLM to be more suspicious: this involved adding a system prompt to the LLM that instructed it to be more suspicious and alert to potential abuse.

[Code on GitHub](https://github.com/EdwardAThomson/prompt-injection-testing)


## What's Next?
My journey with AI is ongoing. I'm currently exploring the potential of LLMs for creative writing, gaming, price analysis and so on. My goal is to continue pushing the boundaries of what's possible when human creativity is augmented by machine intelligence.


