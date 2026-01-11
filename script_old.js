// KONFIGURACJA UŻYTKOWNIKÓW
const USERS = {
  marcel: {
    name: 'Marcel',
    pin: '052105',
    requiresPin: true
  },
  magda: {
    name: 'Magda',
    pin: '6265',
    requiresPin: true
  },
  gosc: {
    name: 'Gość',
    pin: null,
    requiresPin: false
  }
};

// STAŁE OCEN
const RATING = {
  AGAIN: 0,
  HARD: 1,
  GOOD: 2,
  EASY: 3
};

const RATING_NAMES = ['AGAIN', 'HARD', 'GOOD', 'EASY'];

// DANE FISZEK - 62 czasowniki
const flashcardsData = `beginnen\tzaczynać | Präteritum: begann | Partizip II: begonnen
bieten\toferować | Präteritum: bot | Partizip II: geboten
bitten\tprosić | Präteritum: bat | Partizip II: gebeten
bleiben\tzostać pozostać | Präteritum: blieb | Partizip II: geblieben sein
braten\tsmażyć | Präteritum: briet | Partizip II: gebraten | 3. os: brät
bringen\tprzynieść | Präteritum: brachte | Partizip II: gebracht
denken\tmyśleć | Präteritum: dachte | Partizip II: gedacht
empfehlen\tpolecać | Präteritum: empfahl | Partizip II: empfohlen | 3. os: empfiehlt
entscheiden\tdecydować | Präteritum: entschied | Partizip II: entschieden
essen\tjeść | Präteritum: aß | Partizip II: gegessen | 3. os: isst
fahren\tjechać, zawieźć | Präteritum: fuhr | Partizip II: gefahren sein haben | 3. os: fährt
fallen\tupadać | Präteritum: fiel | Partizip II: gefallen sein | 3. os: fällt
fangen\tłapać | Präteritum: fing | Partizip II: gefangen | 3. os: fängt
finden\tznaleźć | Präteritum: fand | Partizip II: gefunden
fliegen\tlatać | Präteritum: flog | Partizip II: geflogen sein haben
geben\tdawać | Präteritum: gab | Partizip II: gegeben | 3. os: gibt
gehen\tiść | Präteritum: ging | Partizip II: gegangen sein
geschehen\tdziać się, wydarzyć się | Präteritum: geschah | Partizip II: geschehen sein | 3. os: geschieht
gewinnen\twygrać, zyskać | Präteritum: gewann | Partizip II: gewonnen
haben\tmieć | Präteritum: hatte | Partizip II: gehabt | 3. os: hat
halten\ttrzymać | Präteritum: hielt | Partizip II: gehalten | 3. os: hält
hängen\twisieć | Präteritum: hing | Partizip II: gehangen
heißen\tnazywać się | Präteritum: hieß | Partizip II: geheißen
helfen\tpomagać | Präteritum: half | Partizip II: geholfen | 3. os: hilft
kennen\tznać | Präteritum: kannte | Partizip II: gekannt
kommen\tprzychodzić | Präteritum: kam | Partizip II: gekommen sein
(ein)laden\tładować | Präteritum: lud ein | Partizip II: (ein)geladen | 3. os: lädt ... (ein)
lassen\tpozwalać | Präteritum: ließ | Partizip II: gelassen | 3. os: lässt
laufen\tbiec | Präteritum: lief | Partizip II: gelaufen sein | 3. os: läuft
lesen\tczytać | Präteritum: las | Partizip II: gelesen | 3. os: liest
liegen\tleżeć | Präteritum: lag | Partizip II: gelegen
nehmen\tbrać, wziąć | Präteritum: nahm | Partizip II: genommen | 3. os: nimmt
rufen\twołać | Präteritum: rief | Partizip II: gerufen
schlafen\tspać | Präteritum: schlief | Partizip II: geschlafen | 3. os: schläft
schlagen\tbić, uderzać | Präteritum: schlug | Partizip II: geschlagen | 3. os: schlägt
schließen\tzamykać | Präteritum: schloss | Partizip II: geschlossen
schneiden\tciąć, kroić | Präteritum: schnitt | Partizip II: geschnitten
schreiben\tpisać | Präteritum: schrieb | Partizip II: geschrieben
schwimmen\tpływać | Präteritum: schwamm | Partizip II: geschwommen sein
sehen\twidzieć | Präteritum: sah | Partizip II: gesehen | 3. os: sieht
sein\tbyć | Präteritum: war | Partizip II: gewesen sein | 3. os: ist
singen\tśpiewać | Präteritum: sang | Partizip II: gesungen
sitzen\tsiedzieć | Präteritum: saß | Partizip II: gesessen
sprechen\tmówić | Präteritum: sprach | Partizip II: gesprochen | 3. os: spricht
stehen\tstać | Präteritum: stand | Partizip II: gestanden
steigen\twzrastać, wspinać się | Präteritum: stieg | Partizip II: gestiegen sein
sterben\tumierać | Präteritum: starb | Partizip II: gestorben sein | 3. os: stirbt
streiten\tkłócić się | Präteritum: stritt | Partizip II: gestritten
tragen\tnosić | Präteritum: trug | Partizip II: getragen | 3. os: trägt
treffen\tspotykać | Präteritum: traf | Partizip II: getroffen | 3. os: trifft
treiben\tuprawiać, napędzać | Präteritum: trieb | Partizip II: getrieben
trinken\tpić | Präteritum: trank | Partizip II: getrunken
tun\tczynić, robić | Präteritum: tat | Partizip II: getan | 3. os: tut
vergessen\tzapomnieć | Präteritum: vergaß | Partizip II: vergessen | 3. os: vergisst
verlieren\ttracić, gubić | Präteritum: verlor | Partizip II: verloren
wachsen\trosnąć | Präteritum: wuchs | Partizip II: gewachsen sein | 3. os: wächst
waschen\tmyć się, prać | Präteritum: wusch | Partizip II: gewaschen | 3. os: wäscht
werden\tstawać się, zostać | Präteritum: wurde | Partizip II: geworden sein | 3. os: wird
werfen\trzucać | Präteritum: warf | Partizip II: geworfen | 3. os: wirft
wissen\twiedzieć | Präteritum: wusste | Partizip II: gewusst | 3. os: weiß
ziehen\tciągnąć | Präteritum: zog | Partizip II: gezogen sein haben
zwingen\tzmuszać | Präteritum: zwang | Partizip II: gezwungen`;

// Parsowanie fiszek
const allCards = flashcardsData.trim().split('\n').map((line, idx) => {
  const [front, back] = line.split('\t');
  return { 
    id: idx,
    front: front.trim(), 
    back: back.trim()
  };
});

// STAN APLIKACJI
let currentUser = null;
let currentIndex = 0;
let isPermanentlyFlipped = false;
let isPreviewActive = false;
let selectedUser = null;
let flashcards = [];
let cardProgress = {};
let selectedSets = ['AGAIN'];
let currentScreen = 'login';

// WEB SPEECH API
const synth = window.speechSynthesis;
let germanVoice = null;
let polishVoice = null;

// ELEMENTY DOM
const loginScreen = document.getElementById('login-screen');
const setSelectionScreen = document.getElementById('set-selection-screen');
const appScreen = document.getElementById('app-screen');
const statsScreen = document.getElementById('stats-screen');
const pinModal = document.getElementById('pin-modal');
const pinInput = document.getElementById('pin-input');
const pinError = document.getElementById('pin-error');
const pinUsername = document.getElementById('pin-username');
const pinSubmit = document.getElementById('pin-submit');
const pinCancel = document.getElementById('pin-cancel');
const userButtons = document.querySelectorAll('.user-btn');
const currentUserName = document.getElementById('current-user-name');
const logoutBtn = document.getElementById('logout-btn');
const statsBtn = document.getElementById('stats-btn');
const backToLearningBtn = document.getElementById('back-to-learning-btn');
const startLearningBtn = document.getElementById('start-learning-btn');

const setCheckAgain = document.getElementById('set-again');
const setCheckHard = document.getElementById('set-hard');
const setCheckGood = document.getElementById('set-good');
const setCheckEasy = document.getElementById('set-easy');

const flashcard = document.getElementById('flashcard');
const frontText = document.getElementById('front-text');
const backText = document.getElementById('back-text');
const currentSpan = document.getElementById('current');
const totalSpan = document.getElementById('total');
const currentSetSpan = document.getElementById('current-set');
const flipBtn = document.getElementById('flip-btn');
const speakerFront = document.getElementById('speaker-front');
const speakerBack = document.getElementById('speaker-back');

const btnAgain = document.getElementById('btn-again');
const btnHard = document.getElementById('btn-hard');
const btnGood = document.getElementById('btn-good');
const btnEasy = document.getElementById('btn-easy');

const statAgain = document.getElementById('stat-again');
const statHard = document.getElementById('stat-hard');
const statGood = document.getElementById('stat-good');
const statEasy = document.getElementById('stat-easy');

// ===== DODANIE STYLÓW CSS DLA CZCIONEK =====
(function addCustomStyles() {
  const style = document.createElement('style');
  style.textContent = `
    /* Polski tekst na BACK - 2x większy */
    .flashcard-back .translation {
      font-size: clamp(2.2rem, 9vw, 3.6rem) !important;
      font-weight: 700 !important;
      color: #2d3436 !important;
      margin-bottom: 20px !important;
      line-height: 1.3 !important;
    }

    /* Niemiecki tekst na BACK - zmniejszony o 35% (0.65 = 100% - 35%) */
    .flashcard-back .german-verb {
      font-size: clamp(1.17rem, 4.875vw, 1.43rem) !important;
      font-weight: 500 !important;
      color: #636e72 !important;
      line-height: 1.5 !important;
    }
  `;
  document.head.appendChild(style);
})();

// ===== WEB SPEECH API - NAPRAWIONE =====

function loadVoices() {
  const voices = synth.getVoices();

  germanVoice = voices.find(v => v.lang === 'de-DE') ||
                voices.find(v => v.lang.startsWith('de-')) ||
                voices.find(v => v.lang === 'de');

  polishVoice = voices.find(v => v.lang === 'pl-PL') ||
                voices.find(v => v.lang.startsWith('pl-')) ||
                voices.find(v => v.lang === 'pl');

  console.log('German voice:', germanVoice ? germanVoice.name : 'NOT FOUND');
  console.log('Polish voice:', polishVoice ? polishVoice.name : 'NOT FOUND');
}

if (synth.getVoices().length > 0) {
  loadVoices();
} else {
  synth.addEventListener('voiceschanged', loadVoices);
}

function speak(text, lang = 'de') {
  if (!('speechSynthesis' in window)) return;

  synth.cancel();

  const utterance = new SpeechSynthesisUtterance(text);
  utterance.rate = 0.85;
  utterance.pitch = 1.0;

  if (lang === 'de') {
    utterance.lang = 'de-DE';
    if (germanVoice) {
      utterance.voice = germanVoice;
    }
  } else if (lang === 'pl') {
    utterance.lang = 'pl-PL';
    if (polishVoice) {
      utterance.voice = polishVoice;
    }
  }

  synth.speak(utterance);
}

// ===== FUNKCJE PARSOWANIA TEKSTU =====

function parseCard(text) {
  const result = {
    german: [],
    polish: []
  };

  if (text.includes('Präteritum:') || text.includes('Partizip II:') || text.includes('3. os:')) {
    const parts = text.split('|').map(p => p.trim());

    parts.forEach((part, idx) => {
      if (idx === 0) {
        result.polish.push(part);
      } else {
        if (part.startsWith('Präteritum:')) {
          const word = part.replace('Präteritum:', '').trim();
          result.german.push(word);
        } else if (part.startsWith('Partizip II:')) {
          const word = part.replace('Partizip II:', '').trim();
          result.german.push(word);
        } else if (part.startsWith('3. os:')) {
          const word = part.replace('3. os:', '').trim();
          result.german.push(word);
        }
      }
    });
  } else {
    result.polish.push(text);
  }

  return result;
}

speakerFront.addEventListener('click', function(e) {
  e.stopPropagation();
  const card = flashcards[currentIndex];
  speak(card.front, 'de');
});

speakerBack.addEventListener('click', function(e) {
  e.stopPropagation();
  const card = flashcards[currentIndex];
  const parsed = parseCard(card.back);

  if (parsed.polish.length > 0) {
    speak(parsed.polish.join(', '), 'pl');

    setTimeout(() => {
      if (parsed.german.length > 0) {
        speak(parsed.german.join(', '), 'de');
      }
    }, 1500);
  }
});

// ===== FUNKCJE ZARZĄDZANIA ZBIORAMI =====

function calculateCardSet(ratings) {
  if (ratings.length < 3) {
    return 'AGAIN';
  }

  const last3 = ratings.slice(-3);

  if (last3.every(r => r >= RATING.EASY)) {
    return 'EASY';
  }

  if (last3.every(r => r >= RATING.GOOD)) {
    return 'GOOD';
  }

  if (last3.every(r => r >= RATING.HARD)) {
    return 'HARD';
  }

  return 'AGAIN';
}

function rateCard(rating) {
  const card = flashcards[currentIndex];

  if (!cardProgress[card.id]) {
    cardProgress[card.id] = {
      ratings: [],
      currentSet: 'AGAIN'
    };
  }

  cardProgress[card.id].ratings.push(rating);

  const newSet = calculateCardSet(cardProgress[card.id].ratings);
  cardProgress[card.id].currentSet = newSet;

  saveUserProgress();

  if (currentIndex < flashcards.length - 1) {
    currentIndex++;
    showCard();
  } else {
    if (confirm('🎉 Gratulacje! Ukończyłeś wszystkie karty w tej sesji.\n\nCzy chcesz zobaczyć statystyki?')) {
      showStats();
    } else {
      showSetSelection();
    }
  }
}

// ===== SYSTEM LOGOWANIA =====

userButtons.forEach(btn => {
  btn.addEventListener('click', function() {
    const userId = this.dataset.user;
    selectedUser = userId;
    const user = USERS[userId];

    if (user.requiresPin) {
      pinUsername.textContent = user.name;
      pinInput.value = '';
      pinError.textContent = '';
      pinModal.classList.add('active');
      setTimeout(() => pinInput.focus(), 100);
    } else {
      login(userId);
    }
  });
});

pinSubmit.addEventListener('click', validatePin);
pinInput.addEventListener('keypress', function(e) {
  if (e.key === 'Enter') {
    validatePin();
  }
});

function validatePin() {
  const enteredPin = pinInput.value;
  const user = USERS[selectedUser];

  if (enteredPin === user.pin) {
    pinModal.classList.remove('active');
    login(selectedUser);
  } else {
    pinError.textContent = '❌ Nieprawidłowy kod PIN';
    pinInput.value = '';
    pinInput.style.borderColor = '#d63031';
    setTimeout(() => {
      pinInput.style.borderColor = '#667eea';
      pinError.textContent = '';
    }, 2000);
  }
}

pinCancel.addEventListener('click', function() {
  pinModal.classList.remove('active');
  selectedUser = null;
});

function login(userId) {
  currentUser = userId;
  currentUserName.textContent = USERS[userId].name;

  loadUserProgress();
  loadVoices();

  loginScreen.style.display = 'none';
  showSetSelection();
}

logoutBtn.addEventListener('click', function() {
  saveUserProgress();

  currentUser = null;
  currentIndex = 0;
  isPermanentlyFlipped = false;
  selectedSets = ['AGAIN'];

  appScreen.classList.remove('active');
  setSelectionScreen.classList.remove('active');
  statsScreen.classList.remove('active');
  loginScreen.style.display = 'flex';

  synth.cancel();
});

// ===== WYBÓR ZBIORÓW =====

function showSetSelection() {
  appScreen.classList.remove('active');
  statsScreen.classList.remove('active');
  setSelectionScreen.classList.add('active');

  updateSetCounts();
}

function updateSetCounts() {
  const counts = {
    AGAIN: 0,
    HARD: 0,
    GOOD: 0,
    EASY: 0
  };

  allCards.forEach(card => {
    const progress = cardProgress[card.id];
    const set = progress ? progress.currentSet : 'AGAIN';
    counts[set]++;
  });

  document.getElementById('count-again').textContent = counts.AGAIN;
  document.getElementById('count-hard').textContent = counts.HARD;
  document.getElementById('count-good').textContent = counts.GOOD;
  document.getElementById('count-easy').textContent = counts.EASY;
}

startLearningBtn.addEventListener('click', function() {
  selectedSets = ['AGAIN'];
  if (setCheckHard.checked) selectedSets.push('HARD');
  if (setCheckGood.checked) selectedSets.push('GOOD');
  if (setCheckEasy.checked) selectedSets.push('EASY');

  prepareCards();

  if (flashcards.length === 0) {
    alert('Brak kart w wybranych zbiorach!');
    return;
  }

  setSelectionScreen.classList.remove('active');
  appScreen.classList.add('active');

  currentIndex = 0;
  totalSpan.textContent = flashcards.length;
  showCard();
});

function prepareCards() {
  flashcards = allCards.filter(card => {
    const progress = cardProgress[card.id];
    const set = progress ? progress.currentSet : 'AGAIN';
    return selectedSets.includes(set);
  });

  for (let i = flashcards.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [flashcards[i], flashcards[j]] = [flashcards[j], flashcards[i]];
  }
}

// ===== STATYSTYKI =====

function showStats() {
  const counts = {
    AGAIN: 0,
    HARD: 0,
    GOOD: 0,
    EASY: 0
  };

  allCards.forEach(card => {
    const progress = cardProgress[card.id];
    const set = progress ? progress.currentSet : 'AGAIN';
    counts[set]++;
  });

  statAgain.textContent = `${counts.AGAIN} kart (${Math.round(counts.AGAIN / allCards.length * 100)}%)`;
  statHard.textContent = `${counts.HARD} kart (${Math.round(counts.HARD / allCards.length * 100)}%)`;
  statGood.textContent = `${counts.GOOD} kart (${Math.round(counts.GOOD / allCards.length * 100)}%)`;
  statEasy.textContent = `${counts.EASY} kart (${Math.round(counts.EASY / allCards.length * 100)}%)`;

  appScreen.classList.remove('active');
  setSelectionScreen.classList.remove('active');
  statsScreen.classList.add('active');
}

statsBtn.addEventListener('click', showStats);
backToLearningBtn.addEventListener('click', showSetSelection);

// ===== ZAPISYWANIE POSTĘPÓW =====

function saveUserProgress() {
  if (!currentUser) return;

  const progress = {
    cardProgress: cardProgress,
    timestamp: new Date().toISOString()
  };

  localStorage.setItem(`flashcards_progress_${currentUser}`, JSON.stringify(progress));
}

function loadUserProgress() {
  if (!currentUser) return;

  const saved = localStorage.getItem(`flashcards_progress_${currentUser}`);

  if (saved) {
    try {
      const progress = JSON.parse(saved);
      cardProgress = progress.cardProgress || {};
    } catch (e) {
      cardProgress = {};
    }
  } else {
    cardProgress = {};
  }
}

setInterval(() => {
  if (currentUser) {
    saveUserProgress();
  }
}, 10000);

window.addEventListener('beforeunload', () => {
  if (currentUser) {
    saveUserProgress();
  }
});

// ===== OBSŁUGA FISZKI =====

flipBtn.addEventListener('click', function(e) {
  isPermanentlyFlipped = !isPermanentlyFlipped;
  flashcard.classList.toggle('flipped');

  const card = flashcards[currentIndex];
  if (isPermanentlyFlipped) {
    const parsed = parseCard(card.back);
    if (parsed.polish.length > 0) {
      speak(parsed.polish.join(', '), 'pl');
      setTimeout(() => {
        if (parsed.german.length > 0) {
          speak(parsed.german.join(', '), 'de');
        }
      }, 1500);
    }
  } else {
    speak(card.front, 'de');
  }
});

btnAgain.addEventListener('click', () => rateCard(RATING.AGAIN));
btnHard.addEventListener('click', () => rateCard(RATING.HARD));
btnGood.addEventListener('click', () => rateCard(RATING.GOOD));
btnEasy.addEventListener('click', () => rateCard(RATING.EASY));

document.addEventListener('keydown', function(e) {
  if (!appScreen.classList.contains('active')) return;

  if (e.key === '1') rateCard(RATING.AGAIN);
  if (e.key === '2') rateCard(RATING.HARD);
  if (e.key === '3') rateCard(RATING.GOOD);
  if (e.key === '4') rateCard(RATING.EASY);

  if (e.key === ' ') {
    e.preventDefault();
    isPermanentlyFlipped = !isPermanentlyFlipped;
    flashcard.classList.toggle('flipped');

    const card = flashcards[currentIndex];
    if (isPermanentlyFlipped) {
      const parsed = parseCard(card.back);
      if (parsed.polish.length > 0) {
        speak(parsed.polish.join(', '), 'pl');
        setTimeout(() => {
          if (parsed.german.length > 0) {
            speak(parsed.german.join(', '), 'de');
          }
        }, 1500);
      }
    } else {
      speak(card.front, 'de');
    }
  }
});

// Preview fiszki
const flashcardInner = document.querySelector('.flashcard-inner');

flashcardInner.addEventListener('touchstart', function(e) {
  if (e.target.closest('.speaker-btn')) return;
  isPreviewActive = true;
  flashcard.classList.add('preview');
}, { passive: true });

flashcardInner.addEventListener('touchend', function() {
  if (isPreviewActive) {
    isPreviewActive = false;
    flashcard.classList.remove('preview');
  }
});

flashcardInner.addEventListener('mousedown', function(e) {
  if (e.target.closest('.speaker-btn')) return;
  isPreviewActive = true;
  flashcard.classList.add('preview');
});

flashcardInner.addEventListener('mouseup', function() {
  if (isPreviewActive) {
    isPreviewActive = false;
    flashcard.classList.remove('preview');
  }
});

flashcardInner.addEventListener('mouseleave', function() {
  if (isPreviewActive) {
    isPreviewActive = false;
    flashcard.classList.remove('preview');
  }
});

function showCard() {
  isPermanentlyFlipped = false;
  isPreviewActive = false;
  flashcard.classList.remove('flipped');
  flashcard.classList.remove('preview');

  const card = flashcards[currentIndex];
  const progress = cardProgress[card.id];
  const currentSet = progress ? progress.currentSet : 'AGAIN';

  frontText.textContent = card.front;
  backText.innerHTML = formatAnswer(card.back);

  currentSpan.textContent = currentIndex + 1;
  currentSetSpan.textContent = currentSet;

  const setColors = {
    AGAIN: '#d63031',
    HARD: '#e17055',
    GOOD: '#00b894',
    EASY: '#0984e3'
  };
  currentSetSpan.style.background = setColors[currentSet];

  setTimeout(() => {
    speak(card.front, 'de');
  }, 300);
}

function formatAnswer(text) {
  const hasGermanPattern = text.includes('Präteritum:') || text.includes('Partizip II:');

  if (hasGermanPattern) {
    const parts = text.split('|');
    const mainTranslation = parts[0].trim();
    const rest = parts.slice(1).join(' | ').trim();

    return `<span class="translation">${mainTranslation}</span><br><span class="german-verb">${rest}</span>`;
  }

  return `<span class="translation">${text}</span>`;
}

// Inicjalizacja
loginScreen.style.display = 'flex';