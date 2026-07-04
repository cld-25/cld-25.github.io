---
layout: default
title: Swedish Verb Drill
---

# Swedish verb drill

This page is built for practice, not perfection. The goal is to learn how Swedish verb forms change across tense and how to notice the pattern instead of memorizing every form in isolation.

## The grammar behind the game

Swedish verbs are easier to manage when you learn them in four common layers.

### 1. Present tense
The present tense is usually the most basic form to learn first. Many regular verbs add -r or -ar to the infinitive.

- prata → pratar
- arbeta → arbetar
- läsa → läser

Some common verbs are irregular and must be learned as chunks.

- vara → är
- ha → har
- gå → går
- se → ser

### 2. Past tense
The simple past is very common in Swedish. Regular verbs often take -de or -te, while irregular verbs often have a special stem.

- prata → pratade
- jobba → jobbade
- läsa → läste
- gå → gick
- skriva → skrev

### 3. Future tense
Swedish often uses the word ska before the infinitive to make the future.

- ska prata
- ska gå
- ska läsa

That makes the future very regular once you recognize the infinitive.

### 4. Perfect tense
The perfect tense often uses har plus the supine, which is the form you often see in dictionaries as a past participle.

- har pratat
- har läst
- har bott
- har gått

The point of the game is not just to guess a word. It is to connect the infinitive, the tense, and the meaning.

## Practice

You will see the infinitive form, the tense, a sentence with a blank, and a small English reference. Type the correct Swedish form into the blank.

<div class="game-card">
  <p id="progress">Loading…</p>
  <p id="score">Score: 0</p>
  <p id="verb-target" class="verb-target"></p>
  <p id="tense-label" class="tense-label"></p>
  <div class="sentence" id="sentence"></div>
  <p id="english" class="english-reference"></p>
  <div class="game-buttons">
    <button id="check-btn" type="button">Check</button>
    <button id="next-btn" type="button">Skip</button>
  </div>
  <p id="feedback" class="feedback"></p>
</div>

<script src="{{ '/assets/js/verbs-game.js' | relative_url }}"></script>
