---
title: Phase 1 - Data Familiarization
displayOrder: 1
tags: [ "Analysis"]
date: 2026-05-13
description: Familiarize yourself with the data and ground the AI tool on your research documents. AI to summarize existing research and assess what is represented and what is not in the data.
---
## Overview
- **Objective:** Familiarize yourself with the data and ground the AI tool on your research documents.
- **AI usage:** Use AI to summarize existing research and assess what is represented and what is not in the data.

## Suggested Workflow:
1. Inventory data by using AI to:
2. Transcribe interviews.
    2. Summarize each interview session.
    3. Summarize desk research.
3. Revise transcripts and summaries
4. Use AI to generate a list of data limitations.
5. If you have notes from sessions, you can also use AI to compare your notes with generated summaries.
6. Revise all AI outputs.


## Examples of tools:
### Dovetail
- Transcribe interview sessions
- Provides automatic summaries
- You can also use its chat feature to request a summary of data in a given structure.
    
### Copilot
- Copilot is best for summarizing decks, PDFs, and Word documents from your desk research.
- If preferred, you can use Copilot to summarize transcripts, but include constraints in your prompts to ensure rigor.

## Suggested prompts

<h3 id="summarization"> Summarization</h4>

Provide AI with transcripts and/or desk research artifacts, and consider using a version of this prompt. Have it look at the artifacts individually first. 

You may need slight edits depending on the tool you use. For example, the best way to generate a custom summary in Dovetail is to summarize sessions one by one: simply open the chat feature for the data you’d like to summarize.

```
Read only the documents I've provided.

Do NOT summarize across documents.  
Do NOT infer insights or implications.  
DO NOT use external knowledge.

For each individual document, create a summary that contains:  

- Background: Provide a few bullet points describing this participant, including {relevant properties}  
	
- If available, answers to each of these questions:  
	- {project-specific information}
	
- For each claim in the summary, extract verbatim quotes (exact wording) as evidence  


Rules:  
If there is not enough evidence to answer the question, explicitly write: "Not enough evidence to answer this question."  
When providing quotes, only use direct quotes (no paraphrasing).  
If no exact quote exists as evidence for a claim, explicitly write: "No direct quote."  
Provide a time-stamp for each quote.  
Keep quotes document-specific and clearly labeled (e.g., "P1", "P2"). 
Do not edit, shorten, or clean up the quotes in any way.
```
<h3 id="boundry-check">Boundary check</h3>

Once you’ve revised AI’s outputs, ask AI to describe what’s represented across. I recommend doing this in a separate chat so the LLM does not get confused by context.
```
Consider this document your evidence set.
  
Confirm the boundaries of the evidence set.

List:

- What is represented in this document?

- Describe the user group(s) represented?

- What, if any, user groups may be missing?

- What questions can this data answer?

- What is explicitly NOT  represented?

- How well are each of these research questions answered?
	- {questions}
```

<h3 id="notes-comparison">Notes comparison</h3>

If you have notes from your sessions, you can use this prompt to compare them. I like to take notes on a spreadsheet, whith one column for observations and one column for each participant. On the participant columns I add a "1" for each observation made and a "0" for no measure. I typically indicate the meaning of the "0" and "1" within the spreadsheet.

```
This spreadsheet captures researcher notes for the same intrviews discussed above.

List:
- Where do notes contradict summaries?
- Where do notes agree with the summaries?
- What, if any, new information do these notes provide?

Rules:
Do NOT consider external knowledge
Label uncertainty clearly.
```