---
title: Phase 4 - Insight Synthesis and Review
displayOrder: 4
tags: [ "Analysis"]
date: 2026-05-13
description: Articulate findings or insights and determine if they require additional clarification. Use AI to identify gaps in thinking.
permalink: "analysis/{{ title | slugify }}/"
---

## Overview
- **Objective:** Articulate your findings or insights and determine if they require additional clarification.
- **AI usage:** Use AI to identify gaps in thinking.

## Suggested Workflow:
1. Think through the implications of your themes and start crafting a table of insights. For each insight, provide a:
	- What? → Summarize your key observation(s) in one sentence.
    - So what? →  Describe the potential impact of the observation on the business and/or customer.
    - Now what? → Provide a recommendation or potential solution if the insight warrants one.
2. Start a new AI chat, and provide evidence first as context. You may, for example, provide your revised summaries and/or themes.
3. In the same chat, ask AI to identify the strengths and weaknesses of your insights.
4. You can also request AI to list quotes related to your insights.

## Examples of tools:
### Word** or PowerPoint
Start out low-tech. Creating a simple table with a summary of your insights.
### Copilot or Dovetail chat:
You can use either one or both to critique your insights.
- **Dovetail** allows you to skip the context part. If you are opting to use Dovetail for this, the data and documents in your Dovetail project or folder will serve as evidence.
- **Copilot**  is ideal when you want AI to look closely at a set of vetted data. You can upload the documents you consider important evidence, specifically, and ask it to use this data to evaluate your insights.

## Suggested prompts:

### Provide evidence
If you’re opting for something like Copilot, you can use the [boundary check](../../analysis/phase-1-data-familiarization/index.html#boundry-check) prompt from Phase 1 to give your new chat the necessary context.

<h3 id="insights-critique"> Insights critique</h3>

Once your tool has the evidence it needs to consider, you can use it to help you evaluate the strength of your insights.
```
Critique the insights in the attached document.

For each:
 - Is it grounded in evidence?
 - Is it too broad or vague?
 - Is it an insight or just a behavior description?

Suggest revisions where needed. 
Your only evidence should be the documents submitted at the start of this chat.
Do NOT use external knowledge. 
```

<h3 id="evidence-tracing">Evidence Tracing</h3>

If you need to pull evidence for each of your insights, you can use the following prompt.
```
For each insight on the attached document, provide:
- A list of quotes that supports the insight
- A list of observations that support the insights

Rules:
Label each quote clearly by participant (i.e., if a quote comes from P1, say so. )
Use the quotes verbatim. Do NOT alter the quotes.
If the provided documents do not contain related quotes specify "No quotes found"
Your only evidence should be the documents submitted at the start of this chat.
Do NOT use external knowledge. 
```
