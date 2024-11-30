// Bu dizi, sınavda kullanılacak soruları ve her sorunun seçeneklerini içermektedir.
const questions = [
  {
    question: "Which is largest animal in the world?",
    answer: [
      { text: "Shark", correct: false },
      { text: "Blue whale", correct: true },
      { text: "Elephant", correct: false },
      { text: "Giraffe", correct: false },
    ],
  },
  {
    question: "Which animal is the fastest land animal?",
    answer: [
      { text: " Cheetah", correct: true },
      { text: "Lion", correct: false },
      { text: " Rabbit", correct: false },
      { text: "Giraffe", correct: false },
    ],
  },
  {
    question: "Which planet is the largest in our solar system?",
    answer: [
      { text: " Mars", correct: false },
      { text: "Venus", correct: false },
      { text: "Uranus", correct: false },
      { text: "Jupiter", correct: true },
    ],
  },
  {
    question: "What marks the 'birth' of a star?",
    answer: [
      { text: " Black hole", correct: false },
      { text: "Nebula", correct: true },
      { text: "Supernova", correct: false },
      { text: "Asteroid belt", correct: false },
    ],
  },
  {
    question: "What is the most spoken language in the world?",
    answer: [
      { text: " Spanish", correct: false },
      { text: "English", correct: false },
      { text: "Mandarin Chinese", correct: true },
      { text: "Arabic", correct: false },
    ],
  },
];
// HTML dosyasındaki öğeleri seçin
const questionEl = document.getElementById("question");
const answerBtns = document.getElementById("answer-buttons");
const nextBtn = document.getElementById("next-btn");

// global değişkenler
let questionIndex = 0;
let score = 0;

//Quiz Start Function
function startQuiz() {
  //reset quiz
  questionIndex = 0;
  score = 0;
  nextBtn.innerHTML = "Next";
  showQuestion();
}

//Soru Görüntüleme Fonksiyonu
function showQuestion() {
  // mevcut seçenekleri temizler işlevi
  resetState();
  //mevcut soruyu alır
  let currentQuestion = questions[questionIndex];
  let questionNo = questionIndex + 1;
  // Soru metni ekler
  questionEl.innerHTML = questionNo + ". " + currentQuestion.question;

  //Her seçenek için bir buton oluşturur ve seçenekleri ekler.
  currentQuestion.answer.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerBtns.appendChild(button);
    //Eğer şık doğruysa, butona data-correct özniteliği ekler.
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
}

function resetState() {
  nextBtn.style.display = "none";
  while (answerBtns.firstChild) {
    //tüm mevcut butonları kaldırır.
    answerBtns.removeChild(answerBtns.firstChild);
  }
}
//Kullanıcı bir şık seçtiğinde çalışacak fonksiyon
function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  //Şık doğruysa, buton correct sınıfı eklenir ve score artırılır.
  if (isCorrect) {
    selectedBtn.classList.add("correct");
    score++;
    //Eğer yanlışsa, butona incorrect sınıfı eklenir.
  } else {
    selectedBtn.classList.add("incorrect");
  }
  //nesneleri gerçek bir diziye dönüştürmek için kullanılır.Bu sayede, dizi metotlarını (örneğin, forEach, map, filter) kullanabilmemizi sağlar.
  Array.from(answerBtns.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    //Diğer tüm butonlar devre dışı bırakılır (disabled = true).
    button.disabled = true;
  });
  nextBtn.style.display = "block";
}

function handleNextButton() {
  questionIndex++;
  //Eğer tüm sorular bitmemişse, bir sonraki soruyu gösterir.
  if (questionIndex < questions.length) {
    showQuestion();
  } else {
    //Tüm sorular bitmişse, kullanıcıya puanını gösterir.
    showScore();
  }
}

function showScore() {
  //resetState() ile mevcut durumu sıfırlar
  resetState();
  //   Kullanıcının puanını ekrana yazdırır
  questionEl.innerHTML = `You scored ${score} out of ${questions.length}!`;
  // kullanıcı quiz'i yeniden başlatabilir
  nextBtn.innerHTML = "Play Again";
  nextBtn.style.display = "block";
}

nextBtn.addEventListener("click", () => {
  //Eğer kullanıcı tüm soruları cevapladıysa, quiz yeniden başlatılır
  if (questionIndex < questions.length) {
    handleNextButton();
    //yoksa bir sonraki soru gösterilir
  } else {
    startQuiz();
  }
});

startQuiz();
