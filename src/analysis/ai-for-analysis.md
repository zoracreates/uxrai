---
title: AI for Analysis
tags: [ "Analysis"]
date: 2026-05-05
description: What is infrared photography? How I got started. And what you need to know to start.
feature: "2023-07/feature-01.jpg"
featureAlt: "Collage of two images. At the top left corner: A gray concrete bridge curves over a river, a deep gray-blue sky above. Bright cream-colored plants and trees frame the scene. At the bottom right corner: Hand holding a camera against a white wall, the shadow of a branch showing in the corner."
---

## Phase 2. Coding and pattern generation
### Overview
- **Objective:** Begin codifying your data to identify patterns across participants.
- **AI usage:** Use AI for initial coding and for ideating possible code clusters.

### Suggested Workflow
1. Ask AI to suggest significant quotes from participants.
2. If you used the `summarization` prompt, start by reviewing the quotes the AI provided as evidence in the summaries. These will likely be related to your research questions.
    2. Some tools may have additional features for identifying areas of interest within a session. For example, Dovetail can suggest highlights.
3. Code or label each quote that you plan to use.
4. 1. Use manual labeling where possible. AI-generated codes can be hit-or-miss, especially where sentiment is involved.
5. Group related quotes and modify codes as patterns emerge.
6. 1. Generate your own data clusters first.
    2. As a secondary step, consider feeding the AI your unclustered or semi-clustered data. Ask it to create its own clusters. This exercise might help you see the data in alternative ways.
#### Examples of tools:
- **Dovetail** has features specifically for highlighting and clustering.
- **Copilot** can help with clustering, but using strict prompting is recommended to avoid additional interpretational biases at this step.

#### Suggested prompts
##### Suggest clusters
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


### Phase 3. Interpretation and Themes Generation
#### Overview
- **Objective:** Assign meaning to your quote clusters by defining exactly what each contains—in other words, create themes.
- **AI usage:** Use AI to help you evaluate the strength behind your themes. You, the researcher, will have the final say. Your subject-matter expertise better positions you to understand business implications, and your human judgment is essential for understanding emotions and customer impact.
#### Suggested Workflow:
1. As you refine your clusters, give them more specific names.
2. Create a CSV with quotes, their theme, and their participant.
3. Use AI as a thought partner for identifying potential gaps in your thinking.
#### Examples of tools
- Dovetail:
	- Tag quotes by themes. Then export a CSV to upload into a second AI tool.
    - Also provides useful non-AI tools. For example, graphs give you a quick glance at the frequency of a particular theme.
- Copilot:
	- Upload a themes CSV and use prompts to assess which themes show the strongest evidence.
#### Suggested prompts
##### Strong vs Weak Signals
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

### Phase 4. Insight Generation and Review
#### Overview
- **Objective:** Articulate your findings or insights and determine if they require additional clarification.
- **AI usage:** Use AI to identify gaps in thinking.
#### Suggested Workflow:
1. Think through the implications of your themes and start crafting a table of insights. For each insight, provide a:
	- What? → Summarize your key observation(s) in one sentence.
    - So what? →  Describe the potential impact of the observation on the business and/or customer.
    - Now what? → Provide a recommendation or potential solution if the insight warrants one.
2. Start a new AI chat, and provide evidence first as context. You may, for example, provide your revised summaries and/or themes.
3. In the same chat, ask AI to identify the strengths and weaknesses of your insights.

#### Examples of tools:
- **Word** or **PowerPoint**
	- Start out low-tech. Creating a simple table with a summary of your insights.
- **Copilot** or **Dovetail** chat:
	- You can use either one or both to critique your insights.
    - **Dovetail** allows you to skip the context part. If you are opting to use Dovetail for this, the data and documents in your Dovetail project or folder will serve as evidence.
    - **Copilot**  is ideal when you want AI to look closely at a set of vetted data. You can upload the documents you consider important evidence, specifically, and ask it to use this data to evaluate your insights.

#### Suggested prompts:
##### Provide evidence
If you’re opting for something like Copilot, you can use the `Boundary check` prompt from Phase 1 to give your new chat the necessary context.
##### Insights critique:
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
