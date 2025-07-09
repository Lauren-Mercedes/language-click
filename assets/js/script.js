/**
 * Class that provides the blueprint of the question structure for use in adding questions.
 * Includes the question, the correct answer, and answer options.
 * Includes functions that allow the question, correct answer, and answer options to be called for use in other functions.
 */
class questionStructure {
  // question structure
  constructor(question, correct, answers) {
    this.question = question;
    this.correct = correct;
    this.answerSet = answers;
  }
  // functions 
  getQuestion = () => {
    return this.question;
  }

  getCorrect = () => {
    return this.correct;
  }

  getAnswers = () => {
    return this.answerSet;
  }
}

/**
 * Class that provides the blueprint of the question set.
 * For use in grouping questions by language and level.
 * Includes functions that allow the selected language and level to be called for use in other functions.
 * Includes a function to add questions to the question set using the question structure class.
 */
class questionSet {
  // question set structure
  constructor(language, level) {
    this.language = language;
    this.level = level;
    this.questions = [];
  }
  // functions
  getLanguage = () => {
    return this.language;
  }

  getLevel = () => {
    return this.level;
  }

  getQuestions = () => {
    return this.questions;
  }

  addQuestion = (question, correct, answers) => {
    this.questions.push(new questionStructure(question, correct, answers));
  }
}

/**
 *  Instructions Pop Up
 *  Includes pop up and close down functions
 * Is linked via an onclick in the instructions button and the close button
 */
// When instructions button is clicked show instructions
function showInstructions() {
  let popUp = document.getElementById("popup");
  popUp.style.display = "block";
}
//When close button is clicked hide instructions
function hideInstructions() {
  let popUp = document.getElementById("popup");
  popUp.style.display = "none";
}

/**
 * Declaration of the identifier assigned to the question set to be used.
 * chosenQuestionSet will take on the identity of the language and level the user has selected.
 * Declared globally for use in multiple functions.
 */
let chosenQuestionSet = new questionSet("");
/**
 * Function for choosing the question set.
 * Selects which questions to display based on the buttons the user clicks
 */
function chooseQuestionSet() {
  // spanish questions
  let spanish = new questionSet("spanish");
  spanish.addQuestion("Adios", "Good-Bye", ["Sorry", "Good-Bye", "Tomorrow"]);
  spanish.addQuestion("Gracias", "Thank You", ["You're Welcome", "Good", "Thank You"]);
  spanish.addQuestion("Hola", "Hello", ["Hello", "Cheers", "Health"]);
  // italian questions
  let italian = new questionSet("italian");
  italian.addQuestion("Ciao", "Good-Bye", ["Sorry", "Good-Bye", "Tomorrow"]);
  italian.addQuestion("Grazie", "Thank You", ["You're Welcome", "Good", "Thank You"]);
  italian.addQuestion("Salve", "Hello", ["Hello", "Cheers", "Health"]);
  // french questions
  let french = new questionSet("french");
  french.addQuestion("Au Revoir", "Good-Bye", ["Sorry", "Good-Bye", "Tomorrow"]);
  french.addQuestion("Merci", "Thank You", ["You're Welcome", "Good", "Thank You"]);
  french.addQuestion("Bonjour", "Hello", ["Hello", "Cheers", "Health"]);
  /**
   * Selection of question set from the language picked by the player
   * Pulled from the url query parameter
   * Selected language is added as a parameter to the questions url
   * url is searched for the language text which defines which question set is used in the switch case
   */
  const language = new URLSearchParams(window.location.search).get("language");
  switch (language) {
    // select spanish
    case "spanish":
      chosenQuestionSet = spanish;
      break;
    // select italian
    case "italian":
      chosenQuestionSet = italian;
      break;
    // select franch
    case "french":
      chosenQuestionSet = french;
      break;
  }
}

// Function called.
chooseQuestionSet()

/**
 * Declaration of the identifier assigned to the randomly selected question.
 * chosenQuestion will take on the identity of the randomly generated question.
 * Declared globally for use in multiple functions.
 */
let chosenQuestion = " "
/**
 * Function for generation of a random question from the selected question set.
 * Activated at the start of a game and when user clicks next button between questions
 */
function chooseQuestion() {
  // random index from the length of the questions in the chosen question set.
  let questionIndex = Math.floor(Math.random() * chosenQuestionSet.getQuestions().length);
  // turn the random index into the corresponding question from the chosen question set.
  chosenQuestion = chosenQuestionSet.getQuestions()[questionIndex];
  // hide next and retry button when a new question is displayed
  next.style.display = "none";
  retry.style.display= "none";
  // Run the question function
  question();
}
/**
 * Function fills question button with chosen question
 * Function gets the correct answer and answer options associated with the chosen question
 * Function fills the answer buttons
 */
function question() {
  // Get question button
  let questionButton = document.getElementById("question-button");
  // Replace the text on the button with the chosen question
  questionButton.innerHTML = chosenQuestion.getQuestion();
  // Get answer buttons
  let answerBoxes = document.getElementsByClassName("answer-button");
  // change the answer buttons back to the original colour when next question is generated.
  for (const a of answerBoxes) {
    a.style.backgroundColor = "#00aaff";
  }
  /**
   * Get answer content
   * Copy answer content to prevent removal of answer options from original array when splice method is used at the end of the loop.
   */
  let answers = chosenQuestion.getAnswers().slice();
  // for loop to fill the answer buttons with the answer content
  for (let i = 0; i < 3; i++) {
    // random index from the length of the answer options from the question set
    let answerIndex = Math.floor(Math.random() * answers.length);
    // Replace the text on the button with an answer option
    answerBoxes[i].innerHTML = answers[answerIndex];
    // remove the answer option used to prevent duplication
    answers.splice(answerIndex, 1);
  };
}
// run the choose question function
chooseQuestion();
/**
 * Function to check if the answer is correct or incorrect
 * Includes response if answer is correct
 * Includes response if answer is incorrect
 * Is linked via an onclick in the answer button elements within questions.html
 */
function check(answerButton) {
  /**
   * if correct answer given:
   * hide retry button (applies if question has been reset after incorrect answer)
   * turn button green
   * display next button
   * increase correct counter
   */
  if (answerButton.innerText == chosenQuestion.correct) {
    retry.style.display ="none";
    answerButton.style.backgroundColor = "green";
    next.style.display = "block";
    correctCounter();
  }
  /**
   * if incorrect answer given:
   * turn button red
   * display retry button
   */
  else {
    answerButton.style.backgroundColor = "red";
    retry.style.display ="block";
  }
}

/**
 * Function to increment counters
 * Correct answer counter called under check function in if statement as part of the actions if a question is answered correctly
 */
function correctCounter(){
  let startCount = parseInt(document.getElementById("correct-count").innerText);
  document.getElementById("correct-count").innerText = ++startCount;
}
