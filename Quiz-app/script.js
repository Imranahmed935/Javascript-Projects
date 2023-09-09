const questions = [
  {
    question: "which is largest animal in the world?",
    answers: [
      { text: "shark", correct: "false" },
      { text: "blue whale", correct: "true" },
      { text: "Elephant", correct: "false" },
      { text: "Giraffe", correct: "false" },
    ],
  },
  {
    question: "what is the smallest country in the world?",
    answers: [
      { text: "vatican city", correct: "true" },
      { text: "Bhutan", correct: "false" },
      { text: "bangladesh", correct: "false" },
      { text: "india", correct: "false" },
    ],
  },
  {
    question: "which is largest desert in the world?",
    answers: [
      { text: "kalahari", correct: "false" },
      { text: "gobi", correct: "false" },
      { text: "sahara", correct: "true" },
      { text: "sundharban", correct: "false" },
    ],
  },
  {
    question: "which is smallest continent in the world?",
    answers: [
      { text: "australia", correct: "true" },
      { text: "asia", correct: "false" },
      { text: "india", correct: "false" },
      { text: "bangladesh", correct: "false" },
    ],
  },
];

const questionElement = document.getElementById("question");
const answerBtn = document.getElementById("answer-btn");
const NextBtn = document.getElementById("Next");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  resetState();
  currentQuestionIndex = 0;
  score = 0;
  NextBtn.innerHTML = "Next";
  showQuestion();
}

function showQuestion() {
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + "." + currentQuestion.question;

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerBtn.appendChild(button);
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
}
function resetState() {
  NextBtn.style.display = "none";
  while (answerBtn.firstChild) {
    answerBtn.removeChild(answerBtn.firstChild);
  }
}

function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  if (isCorrect) {
    selectedBtn.classList.add("correct");
    score++;
  } else {
    selectedBtn.classList.add("incorrect");
  }
  Array.from(answerBtn.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = "true";
  });
  NextBtn.style.display = "block";
}

function showScore() {
  questionElement.innerHTML = `Your Score: ${score} out of ${questions.length}`;
  NextBtn.innerHTML = "Play Again";
  NextBtn.style.display = "block";
}

function handleNextButton() {
  resetState();
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}

NextBtn.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length) {
    handleNextButton();
  } else {
    startQuiz();
  }
});
startQuiz();
