class Question {
  constructor(question, options, answer) {
    this.question = question
    this.options = options
    this.answer = answer
  }
}

Question.prototype.isCorrect = function isCorrect(option) {
  return this.answer == option
}

let questions = [
  new Question(
    'Javascript is an _______ language?',
    ['Object Oriented', 'Object-Based', 'Procedural', 'None of the above'],
    'Object Oriented'
  ),
  new Question(
    'Which of the following keywords is used to define a variable in Javascript?',
    ['var', 'let', 'const', 'all of the above'],
    'all of the above'
  ),
  new Question(
    'Which of the following methods is used to access HTML elements using Javascript?',
    ['getElementByID()', 'getElementByClassName()', 'Both A and B', 'None'],
    'Both A and B'
  ),
  new Question(
    'How can a datatype be declared to be a constant type?',
    ['const', 'let', 'var', 'constant'],
    'const'
  ),
  new Question(
    'Javascript is a',
    ['Framework', 'Program', 'Programming Language', 'None'],
    'Programming Language'
  ),
]

function Quiz(questions) {
  this.score = 0
  this.questions = questions
  this.questNumber = 0
}

Quiz.prototype.isEnded = function isEnded() {
  return quiz.questNumber == questions.length
}

Quiz.prototype.getQuestionByIndex = function getQuestionByIndex() {
  return this.questions[quiz.questNumber]
}

Quiz.prototype.checkAnswer = function checkAnswer(option) {
  if (quiz.getQuestionByIndex().isCorrect(option)) {
    this.score++
  }
}

let quiz = new Quiz(questions)

function loadQuestions() {
  if (quiz.isEnded()) {
    showScores()
  } else {
    let questionTitle = document.getElementById('question')
    questionTitle.innerHTML = quiz.getQuestionByIndex().question
    let options = quiz.getQuestionByIndex().options

    for (let i = 0; i < 4; i++) {
      let optBtn = document.getElementById('choice' + i)
      optBtn.innerHTML = options[i]
      handleOptionsClicked('btn' + i, options[i])
    }

    showProgress()
  }
}

loadQuestions()

function showScores() {
  let result = '<h1>Result</h1>'
  result +=
    '<h2 id="score">Your score is  ' +
    quiz.score +
    '. and mark percentage is   ' +
    (quiz.score / questions.length) * 100 +
    '%</h2>'

  let quizElem = document.getElementById('quiz')
  quizElem.innerHTML = result
}

function handleOptionsClicked(btnNumber, option) {
  let btn = document.getElementById(btnNumber)
  btn.onclick = function () {
    quiz.checkAnswer(option)
    quiz.questNumber++
    loadQuestions()
  }
}

function showProgress() {
  let curr = quiz.questNumber + 1
  let element = document.getElementById('progress')
  element.innerHTML = `Question ${curr} of ${quiz.questions.length}`
}
