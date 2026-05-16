---
title: Phase 3 - Interpretation and Themes Generation
displayOrder: 3
tags: [ "Analysis"]
date: 2026-05-05
description: Assign meaning to your quote clusters by defining exactly what each contains—in other words, create themes. Assign meaning to your quote clusters by defining exactly what each contains—in other words, create themes.
permalink: "analysis/{{ title | slugify }}/"
---
## Overview
- **Objective:** Assign meaning to your quote clusters by defining exactly what each contains—in other words, create themes.
- **AI usage:** Use AI to help you evaluate the strength behind your themes. You, the researcher, will have the final say. Your subject-matter expertise better positions you to understand business implications, and your human judgment is essential for understanding emotions and customer impact.

## Suggested Workflow:
1. As you refine your clusters, give them more specific names.
2. Create a CSV with quotes, their theme, and their participant.
3. Use AI as a thought partner for identifying potential gaps in your thinking.

## Examples of tools
### Dovetail
- Tag quotes by themes. Then export a CSV to upload into a second AI tool.
- Also provides useful non-AI tools. For example, graphs give you a quick glance at the frequency of a particular theme.
### Copilot
- Upload a themes CSV and use prompts to assess which themes show the strongest evidence.

## Suggested prompts

<h3 id="strong-vs-weak-signals">Strong vs Weak Signals</h3>

You can use AI to help you get a quick glance of what is well supported and what isn’t.
```
Consider the themes in this document.

For each theme, specify:
 - Which quotes are included in the theme?
 - Total number of quotes tagged with this theme
 - Total number of participants who mentioned this theme
 - Total number of times each individual participant mentions the theme
 - Areas of tension or contradiction, if any.
 - Areas of agreement, if any.
 - How well supported is the theme? Why?

Rules:
Label each quote clearly by participant (i.e., if a quote comes from P1, say so. )
Use the quotes verbatim. Do NOT alter the quotes.
Do NOT interpret causes or implications.
Do NOT propose solutions.
Label uncertainty clearly.
```