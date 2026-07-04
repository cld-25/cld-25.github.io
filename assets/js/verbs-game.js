const verbDeck = [
  { infinitive: "prata", tense: "present", answer: "pratar", sentence: "Jag ____ med min vän varje kväll.", english: "I talk to my friend every evening." },
  { infinitive: "prata", tense: "past", answer: "pratade", sentence: "Jag ____ med min vän i går.", english: "I talked to my friend yesterday." },
  { infinitive: "prata", tense: "future", answer: "ska prata", sentence: "Jag ____ med min vän i morgon.", english: "I will talk to my friend tomorrow." },
  { infinitive: "prata", tense: "perfect", answer: "har pratat", sentence: "Jag ____ med min vän redan idag.", english: "I have already talked to my friend today." },
  { infinitive: "arbeta", tense: "present", answer: "arbetar", sentence: "Han ____ på kontoret varje dag.", english: "He works at the office every day." },
  { infinitive: "arbeta", tense: "past", answer: "arbetade", sentence: "Han ____ på kontoret i går.", english: "He worked at the office yesterday." },
  { infinitive: "arbeta", tense: "future", answer: "ska arbeta", sentence: "Han ____ på kontoret i morgon.", english: "He will work at the office tomorrow." },
  { infinitive: "arbeta", tense: "perfect", answer: "har arbetat", sentence: "Han ____ på kontoret hela veckan.", english: "He has worked at the office all week." },
  { infinitive: "läsa", tense: "present", answer: "läser", sentence: "Vi ____ en bok varje kväll.", english: "We read a book every evening." },
  { infinitive: "läsa", tense: "past", answer: "läste", sentence: "Vi ____ en bok i går kväll.", english: "We read a book yesterday evening." },
  { infinitive: "läsa", tense: "future", answer: "ska läsa", sentence: "Vi ____ en bok i morgon kväll.", english: "We will read a book tomorrow evening." },
  { infinitive: "läsa", tense: "perfect", answer: "har läst", sentence: "Vi ____ en bok redan idag.", english: "We have already read a book today." },
  { infinitive: "skriva", tense: "present", answer: "skriver", sentence: "Du ____ ett brev till din mor.", english: "You write a letter to your mother." },
  { infinitive: "skriva", tense: "past", answer: "skrev", sentence: "Du ____ ett brev till din mor i går.", english: "You wrote a letter to your mother yesterday." },
  { infinitive: "skriva", tense: "future", answer: "ska skriva", sentence: "Du ____ ett brev till din mor i morgon.", english: "You will write a letter to your mother tomorrow." },
  { infinitive: "skriva", tense: "perfect", answer: "har skrivit", sentence: "Du ____ ett brev till din mor redan idag.", english: "You have already written a letter to your mother today." },
  { infinitive: "dricka", tense: "present", answer: "dricker", sentence: "Barnen ____ mjölk till frukost.", english: "The children drink milk for breakfast." },
  { infinitive: "dricka", tense: "past", answer: "drack", sentence: "Barnen ____ mjölk till frukost i morse.", english: "The children drank milk for breakfast this morning." },
  { infinitive: "dricka", tense: "future", answer: "ska dricka", sentence: "Barnen ____ mjölk till frukost imorgon.", english: "The children will drink milk for breakfast tomorrow." },
  { infinitive: "dricka", tense: "perfect", answer: "har druckit", sentence: "Barnen ____ mjölk till frukost redan idag.", english: "The children have already drunk milk for breakfast today." },
  { infinitive: "äta", tense: "present", answer: "äter", sentence: "Hon ____ lunch klockan tolv.", english: "She eats lunch at twelve o’clock." },
  { infinitive: "äta", tense: "past", answer: "åt", sentence: "Hon ____ lunch klockan tolv i går.", english: "She ate lunch at twelve o’clock yesterday." },
  { infinitive: "äta", tense: "future", answer: "ska äta", sentence: "Hon ____ lunch klockan tolv imorgon.", english: "She will eat lunch at twelve o’clock tomorrow." },
  { infinitive: "äta", tense: "perfect", answer: "har ätit", sentence: "Hon ____ lunch klockan tolv redan idag.", english: "She has already eaten lunch at twelve o’clock today." },
  { infinitive: "sova", tense: "present", answer: "sover", sentence: "Jag ____ bra när det är tyst.", english: "I sleep well when it is quiet." },
  { infinitive: "sova", tense: "past", answer: "sov", sentence: "Jag ____ bra i går natt.", english: "I slept well last night." },
  { infinitive: "sova", tense: "future", answer: "ska sova", sentence: "Jag ____ bra i natt.", english: "I will sleep well tonight." },
  { infinitive: "sova", tense: "perfect", answer: "har sovit", sentence: "Jag ____ bra hela natten.", english: "I have slept well all night." },
  { infinitive: "gå", tense: "present", answer: "går", sentence: "Vi ____ till skolan varje morgon.", english: "We go to school every morning." },
  { infinitive: "gå", tense: "past", answer: "gick", sentence: "Vi ____ till skolan i morse.", english: "We went to school this morning." },
  { infinitive: "gå", tense: "future", answer: "ska gå", sentence: "Vi ____ till skolan imorgon.", english: "We will go to school tomorrow." },
  { infinitive: "gå", tense: "perfect", answer: "har gått", sentence: "Vi ____ till skolan redan idag.", english: "We have already gone to school today." },
  { infinitive: "köpa", tense: "present", answer: "köper", sentence: "De ____ frukt på torget.", english: "They buy fruit at the market." },
  { infinitive: "köpa", tense: "past", answer: "köpte", sentence: "De ____ frukt på torget i går.", english: "They bought fruit at the market yesterday." },
  { infinitive: "köpa", tense: "future", answer: "ska köpa", sentence: "De ____ frukt på torget imorgon.", english: "They will buy fruit at the market tomorrow." },
  { infinitive: "köpa", tense: "perfect", answer: "har köpt", sentence: "De ____ frukt på torget redan idag.", english: "They have already bought fruit at the market today." },
  { infinitive: "tala", tense: "present", answer: "talar", sentence: "Ni ____ svenska mycket väl.", english: "You speak Swedish very well." },
  { infinitive: "tala", tense: "past", answer: "talade", sentence: "Ni ____ svenska mycket väl i går.", english: "You spoke Swedish very well yesterday." },
  { infinitive: "tala", tense: "future", answer: "ska tala", sentence: "Ni ____ svenska mycket väl imorgon.", english: "You will speak Swedish very well tomorrow." },
  { infinitive: "tala", tense: "perfect", answer: "har talat", sentence: "Ni ____ svenska mycket väl redan idag.", english: "You have already spoken Swedish very well today." },
  { infinitive: "lyssna", tense: "present", answer: "lyssnar", sentence: "Jag ____ på musik när jag tränar.", english: "I listen to music when I work out." },
  { infinitive: "lyssna", tense: "past", answer: "lyssnade", sentence: "Jag ____ på musik när jag tränade.", english: "I listened to music when I worked out." },
  { infinitive: "lyssna", tense: "future", answer: "ska lyssna", sentence: "Jag ____ på musik när jag tränar imorgon.", english: "I will listen to music when I work out tomorrow." },
  { infinitive: "lyssna", tense: "perfect", answer: "har lyssnat", sentence: "Jag ____ på musik när jag har tränat.", english: "I have listened to music when I have worked out." },
  { infinitive: "träna", tense: "present", answer: "tränar", sentence: "Hon ____ tre gånger i veckan.", english: "She trains three times a week." },
  { infinitive: "träna", tense: "past", answer: "tränade", sentence: "Hon ____ tre gånger i veckan förra veckan.", english: "She trained three times a week last week." },
  { infinitive: "träna", tense: "future", answer: "ska träna", sentence: "Hon ____ tre gånger i veckan nästa vecka.", english: "She will train three times a week next week." },
  { infinitive: "träna", tense: "perfect", answer: "har tränat", sentence: "Hon ____ tre gånger i veckan redan denna vecka.", english: "She has already trained three times this week." },
  { infinitive: "jobba", tense: "present", answer: "jobbar", sentence: "Vi ____ tillsammans varje dag.", english: "We work together every day." },
  { infinitive: "jobba", tense: "past", answer: "jobbade", sentence: "Vi ____ tillsammans i går.", english: "We worked together yesterday." },
  { infinitive: "jobba", tense: "future", answer: "ska jobba", sentence: "Vi ____ tillsammans i morgon.", english: "We will work together tomorrow." },
  { infinitive: "jobba", tense: "perfect", answer: "har jobbat", sentence: "Vi ____ tillsammans hela veckan.", english: "We have worked together all week." },
  { infinitive: "bo", tense: "present", answer: "bor", sentence: "Familjen ____ i en liten lägenhet.", english: "The family lives in a small apartment." },
  { infinitive: "bo", tense: "past", answer: "bodde", sentence: "Familjen ____ i en liten lägenhet förra året.", english: "The family lived in a small apartment last year." },
  { infinitive: "bo", tense: "future", answer: "ska bo", sentence: "Familjen ____ i en liten lägenhet nästa år.", english: "The family will live in a small apartment next year." },
  { infinitive: "bo", tense: "perfect", answer: "har bott", sentence: "Familjen ____ i en liten lägenhet sedan 2022.", english: "The family has lived in a small apartment since 2022." },
  { infinitive: "stanna", tense: "present", answer: "stannar", sentence: "Bussen ____ här i fem minuter.", english: "The bus stops here for five minutes." },
  { infinitive: "stanna", tense: "past", answer: "stannade", sentence: "Bussen ____ här i fem minuter i går.", english: "The bus stopped here for five minutes yesterday." },
  { infinitive: "stanna", tense: "future", answer: "ska stanna", sentence: "Bussen ____ här i fem minuter imorgon.", english: "The bus will stop here for five minutes tomorrow." },
  { infinitive: "stanna", tense: "perfect", answer: "har stannat", sentence: "Bussen ____ här i fem minuter redan idag.", english: "The bus has already stopped here for five minutes today." },
  { infinitive: "leva", tense: "present", answer: "lever", sentence: "Mina morföräldrar ____ på landet.", english: "My grandparents live in the countryside." },
  { infinitive: "leva", tense: "past", answer: "levde", sentence: "Mina morföräldrar ____ på landet förut.", english: "My grandparents lived in the countryside before." },
  { infinitive: "leva", tense: "future", answer: "ska leva", sentence: "Mina morföräldrar ____ på landet nästa år.", english: "My grandparents will live in the countryside next year." },
  { infinitive: "leva", tense: "perfect", answer: "har levt", sentence: "Mina morföräldrar ____ på landet hela sitt liv.", english: "My grandparents have lived in the countryside all their lives." },
  { infinitive: "hålla", tense: "present", answer: "håller", sentence: "Jag ____ ett föredrag varje måndag.", english: "I give a lecture every Monday." },
  { infinitive: "hålla", tense: "past", answer: "höll", sentence: "Jag ____ ett föredrag i måndags.", english: "I gave a lecture on Monday." },
  { infinitive: "hålla", tense: "future", answer: "ska hålla", sentence: "Jag ____ ett föredrag nästa måndag.", english: "I will give a lecture next Monday." },
  { infinitive: "hålla", tense: "perfect", answer: "har hållit", sentence: "Jag ____ ett föredrag redan idag.", english: "I have already given a lecture today." },
  { infinitive: "tycka", tense: "present", answer: "tycker", sentence: "Han ____ om kaffe.", english: "He likes coffee." },
  { infinitive: "tycka", tense: "past", answer: "tyckte", sentence: "Han ____ om kaffe förut.", english: "He liked coffee before." },
  { infinitive: "tycka", tense: "future", answer: "ska tycka", sentence: "Han ____ om kaffe i morgon.", english: "He will like coffee tomorrow." },
  { infinitive: "tycka", tense: "perfect", answer: "har tyckt", sentence: "Han ____ om kaffe hela livet.", english: "He has liked coffee all his life." },
  { infinitive: "känna", tense: "present", answer: "känner", sentence: "Jag ____ mig trött efter jobbet.", english: "I feel tired after work." },
  { infinitive: "känna", tense: "past", answer: "kände", sentence: "Jag ____ mig trött efter jobbet i går.", english: "I felt tired after work yesterday." },
  { infinitive: "känna", tense: "future", answer: "ska känna", sentence: "Jag ____ mig trött efter jobbet imorgon.", english: "I will feel tired after work tomorrow." },
  { infinitive: "känna", tense: "perfect", answer: "har känt", sentence: "Jag ____ mig trött efter jobbet redan idag.", english: "I have already felt tired after work today." },
  { infinitive: "sälja", tense: "present", answer: "säljer", sentence: "Butiken ____ bröd varje morgon.", english: "The shop sells bread every morning." },
  { infinitive: "sälja", tense: "past", answer: "sålde", sentence: "Butiken ____ bröd i morse.", english: "The shop sold bread this morning." },
  { infinitive: "sälja", tense: "future", answer: "ska sälja", sentence: "Butiken ____ bröd imorgon.", english: "The shop will sell bread tomorrow." },
  { infinitive: "sälja", tense: "perfect", answer: "har sålt", sentence: "Butiken ____ bröd redan idag.", english: "The shop has already sold bread today." },
  { infinitive: "köra", tense: "present", answer: "kör", sentence: "Hon ____ bil till arbetet.", english: "She drives to work." },
  { infinitive: "köra", tense: "past", answer: "körde", sentence: "Hon ____ bil till arbetet i går.", english: "She drove to work yesterday." },
  { infinitive: "köra", tense: "future", answer: "ska köra", sentence: "Hon ____ bil till arbetet imorgon.", english: "She will drive to work tomorrow." },
  { infinitive: "köra", tense: "perfect", answer: "har kört", sentence: "Hon ____ bil till arbetet redan idag.", english: "She has already driven to work today." },
  { infinitive: "komma", tense: "present", answer: "kommer", sentence: "De ____ hem sent på kvällarna.", english: "They come home late in the evenings." },
  { infinitive: "komma", tense: "past", answer: "kom", sentence: "De ____ hem sent i går kväll.", english: "They came home late last night." },
  { infinitive: "komma", tense: "future", answer: "ska komma", sentence: "De ____ hem sent i kväll.", english: "They will come home late tonight." },
  { infinitive: "komma", tense: "perfect", answer: "har kommit", sentence: "De ____ hem sent redan idag.", english: "They have already come home late today." },
  { infinitive: "förstå", tense: "present", answer: "förstår", sentence: "Jag ____ din fråga mycket bra.", english: "I understand your question very well." },
  { infinitive: "förstå", tense: "past", answer: "förstod", sentence: "Jag ____ din fråga i går.", english: "I understood your question yesterday." },
  { infinitive: "förstå", tense: "future", answer: "ska förstå", sentence: "Jag ____ din fråga i morgon.", english: "I will understand your question tomorrow." },
  { infinitive: "förstå", tense: "perfect", answer: "har förstått", sentence: "Jag ____ din fråga redan idag.", english: "I have already understood your question today." },
  { infinitive: "börja", tense: "present", answer: "börjar", sentence: "Lektionen ____ klockan nio.", english: "The lesson starts at nine o’clock." },
  { infinitive: "börja", tense: "past", answer: "började", sentence: "Lektionen ____ klockan nio i morse.", english: "The lesson started at nine o’clock this morning." },
  { infinitive: "börja", tense: "future", answer: "ska börja", sentence: "Lektionen ____ klockan nio imorgon.", english: "The lesson will start at nine o’clock tomorrow." },
  { infinitive: "börja", tense: "perfect", answer: "har börjat", sentence: "Lektionen ____ klockan nio redan idag.", english: "The lesson has already started at nine o’clock today." },
  { infinitive: "vara", tense: "present", answer: "är", sentence: "Det ____ kallt ute idag.", english: "It is cold outside today." },
  { infinitive: "vara", tense: "past", answer: "var", sentence: "Det ____ kallt ute i går.", english: "It was cold outside yesterday." },
  { infinitive: "vara", tense: "future", answer: "ska vara", sentence: "Det ____ kallt ute imorgon.", english: "It will be cold outside tomorrow." },
  { infinitive: "vara", tense: "perfect", answer: "har varit", sentence: "Det ____ kallt ute hela dagen.", english: "It has been cold outside all day." },
];

const deck = [...verbDeck];
let currentIndex = 0;
let score = 0;
let currentItem = null;
let answered = false;

function shuffle(items) {
  const next = [...items];
  for (let i = next.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [next[i], next[j]] = [next[j], next[i]];
  }
  return next;
}

function renderQuestion() {
  const progress = document.getElementById('progress');
  const scoreEl = document.getElementById('score');
  const sentenceEl = document.getElementById('sentence');
  const feedbackEl = document.getElementById('feedback');
  const verbTargetEl = document.getElementById('verb-target');
  const tenseLabelEl = document.getElementById('tense-label');
  const englishEl = document.getElementById('english');

  if (currentIndex >= deck.length) {
    progress.textContent = 'You finished the first round.';
    sentenceEl.innerHTML = `You got ${score} out of ${deck.length} right.`;
    feedbackEl.textContent = 'Reload the page to start again.';
    feedbackEl.className = 'feedback';
    verbTargetEl.textContent = '';
    tenseLabelEl.textContent = '';
    englishEl.textContent = '';
    document.getElementById('check-btn').disabled = true;
    document.getElementById('next-btn').textContent = 'Play again';
    return;
  }

  currentItem = deck[currentIndex];
  progress.textContent = `Question ${currentIndex + 1} of ${deck.length}`;
  scoreEl.textContent = `Score: ${score}`;
  verbTargetEl.textContent = `Infinitive: ${currentItem.infinitive}`;
  tenseLabelEl.textContent = `Tense: ${currentItem.tense}`;
  englishEl.textContent = currentItem.english;
  sentenceEl.innerHTML = currentItem.sentence.replace('____', '<span class="blank"><input id="answer-input" class="answer-input" type="text" autocomplete="off" spellcheck="false" /></span>');
  feedbackEl.textContent = '';
  feedbackEl.className = 'feedback';
  answered = false;
  document.getElementById('check-btn').disabled = false;
  document.getElementById('next-btn').textContent = 'Skip';
  const answerInput = document.getElementById('answer-input');
  if (answerInput) {
    answerInput.focus();
  }
}

function checkAnswer() {
  const answerInput = document.getElementById('answer-input');
  const feedbackEl = document.getElementById('feedback');
  const guess = answerInput ? answerInput.value.trim().toLowerCase() : '';

  if (!guess) {
    feedbackEl.textContent = 'Type a form before checking.';
    feedbackEl.className = 'feedback warning';
    return;
  }

  if (guess === currentItem.answer) {
    score += 1;
    feedbackEl.textContent = `Correct. ${currentItem.answer} is the right form.`;
    feedbackEl.className = 'feedback correct';
  } else {
    feedbackEl.textContent = `Not quite. The correct form is ${currentItem.answer}.`;
    feedbackEl.className = 'feedback incorrect';
  }

  answered = true;
  document.getElementById('next-btn').textContent = 'Next';
}

function nextQuestion() {
  if (!answered && currentItem) {
    document.getElementById('feedback').textContent = `The answer was ${currentItem.answer}.`;
    document.getElementById('feedback').className = 'feedback incorrect';
  }

  currentIndex += 1;
  renderQuestion();
}

document.addEventListener('DOMContentLoaded', () => {
  const checkButton = document.getElementById('check-btn');
  const nextButton = document.getElementById('next-btn');

  if (!checkButton || !nextButton) {
    return;
  }

  const shuffledDeck = shuffle([...verbDeck]);
  deck.splice(0, deck.length, ...shuffledDeck);

  checkButton.addEventListener('click', checkAnswer);
  nextButton.addEventListener('click', nextQuestion);

  renderQuestion();
});
