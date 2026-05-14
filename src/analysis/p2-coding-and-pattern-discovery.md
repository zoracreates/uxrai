---
title: Phase 2 - Coding and Pattern Disovery
displayOrder: 2
tags: [ "Analysis"]
date: 2026-05-05
description: Begin codifying your data to identify patterns across participants. Use AI for initial coding and for ideating possible code clusters.
---

## Overview
- **Objective:** Begin codifying your data to identify patterns across participants.
- **AI usage:** Use AI for initial coding and for ideating possible code clusters.

## Suggested Workflow
1. Ask AI to suggest significant quotes from participants.
2. If you used the <a href="../p1-data-familiarization#summarization">summarization</a> prompt, start by reviewing the quotes the AI provided as evidence in the summaries. These will likely be related to your research questions.
    - Some tools may have additional features for identifying areas of interest within a session. For example, Dovetail can suggest highlights.
3. Code or label each quote that you plan to use.
    - Use manual labeling where possible. AI-generated codes can be hit-or-miss, especially where sentiment is involved.
4. Group related quotes and modify codes as patterns emerge.
    - Generate your own data clusters first.
    - As a secondary step, consider feeding the AI your unclustered or semi-clustered data. Ask it to create its own clusters. This exercise might help you see the data in alternative ways.

## Examples of tools:
- **Dovetail** has features specifically for highlighting and clustering.
- **Copilot** can help with clustering, but using strict prompting is recommended to avoid additional interpretational biases at this step.

## Suggested prompts
<h3 id="suggest-clusters"> Suggest clusters</h3>

If you need to use a non-research-specific tool (e.g., Claude, ChatGPT, or Copilot) for clustering, you can provide the tool with a CSV file of transcript excerpts, labeled by participant ID and your initial codes.
```
Consider only the uploaded document. Do NOT use external knowledge.

Cluster related quotes together. Consider the quote and its assigned code as part of your clustering efforts.

For each cluster, provide:
 - A title
 - A list of related quotes
 
Rules:
Label each quote clearly by participant (i.e., if a quote comes from P1, say so. )
Use the quotes verbatim. Do NOT alter the quotes.
Do NOT explain your thinking.
Do NOT interpret causes or implications.
Do NOT propose solutions.
```