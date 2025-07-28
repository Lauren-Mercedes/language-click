/**
 * Global declaration of the speech synthesis API.
 * Converts text to speech.
 * Used to read out the questions when clicked.
 */
const synth = window.speechSynthesis;


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
 *  Instructions Pop Up function
 * Is linked via an onclick in the instructions button 
 */

function showInstructions() {
  let popUp = document.getElementById("popup");
  popUp.style.display = "block";
  // overlay is displayed for pop up contrast
  let overlay = document.getElementById("overlay");
  overlay.style.display = "block";
}
/**
 * Instructions close down function
 * Is linked via an onclick in the close button
 */
function hideInstructions() {
  let popUp = document.getElementById("popup");
  popUp.style.display = "none";
  // overlay is hidden for main screen interaction
  let overlay = document.getElementById("overlay");
  overlay.style.display = "none";
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
  spanish.addQuestion("Como Estas?", "How Are You?", ["How Are You?", "Where Is It?", "Are You Coming?"]);
  spanish.addQuestion("Discuple", "Excuse Me", ["Excuse Me", "Sorry", "Bless You"]);
  spanish.addQuestion("Por Favor", "Please", ["Please", "Thank You", "You're Welcome"]);
  spanish.addQuestion("De Nada", "You're Welcome", ["You're Welcome", "It's Not Here", "I Don't Know"]);
  spanish.addQuestion("No Entiendo", "I Don't Understand", ["I Don't Understand", "No Thank You", "Not A Problem"]);
  spanish.addQuestion("Donde esta...?", "Where is...", ["Where is...", "What is...", "How is..."]);
  spanish.addQuestion("Lo Siento", "I'm Sorry", ["I'm Sorry", "Excuse Me", "I'm Lost"]);
  // italian questions
  let italian = new questionSet("italian");
  italian.addQuestion("Ciao", "Good-Bye", ["Sorry", "Good-Bye", "Tomorrow"]);
  italian.addQuestion("Grazie", "Thank You", ["You're Welcome", "Good", "Thank You"]);
  italian.addQuestion("Salve", "Hello", ["Hello", "Cheers", "Health"]);
  italian.addQuestion("Come va?", "How Are You?", ["How Are You?", "Where Is It?", "Are You Coming?"])
  italian.addQuestion("Mi Scusi", "Excuse Me", ["Excuse Me", "Sorry", "Bless You"]);
  italian.addQuestion("Per Favore", "Please", ["Please", "Thank You", "You're Welcome"]);
  italian.addQuestion("Prego", "You're Welcome", ["You're Welcome", "It's Not Here", "I Don't Know"]);
  italian.addQuestion("No Capisco", "I Don't Understand", ["I Don't Understand", "No Thank You", "Not A Problem"]);
  italian.addQuestion("Dov'e...?", "Where is...", ["Where is...", "What is...", "How is..."]);
  italian.addQuestion("Mi Dispiace", "I'm Sorry", ["I'm Sorry", "Excuse Me", "I'm Lost"]);
  // french questions
  let french = new questionSet("french");
  french.addQuestion("Au Revoir", "Good-Bye", ["Sorry", "Good-Bye", "Tomorrow"]);
  french.addQuestion("Merci", "Thank You", ["You're Welcome", "Good", "Thank You"]);
  french.addQuestion("Bonjour", "Hello", ["Hello", "Cheers", "Health"]);
  french.addQuestion("Comment vas-tu?", "How Are You?", ["How Are You?", "Where Is It?", "Are You Coming?"])
  french.addQuestion("Excusez-Moi", "Excuse Me", ["Excuse Me", "Sorry", "Bless You"]);
  french.addQuestion("S'il Vous Plait", "Please", ["Please", "Thank You", "You're Welcome"]);
  french.addQuestion("De Rien", "You're Welcome", ["You're Welcome", "It's Not Here", "I Don't Know"]);
  french.addQuestion("Je Ne Comprends Pas", "I Don't Understand", ["I Don't Understand", "No Thank You", "Not A Problem"]);
  french.addQuestion("Ou Est...?", "Where is...", ["Where is...", "What is...", "How is..."]);
  french.addQuestion("Je Suis Desole", "I'm Sorry", ["I'm Sorry", "Excuse Me", "I'm Lost"]);
  /**
   * Selection of question set from the language picked by the player
   * Each langauge button has a data-language attribute that stores the language value
   * Each button is targeted with an event listener 
   * The language is retrieved from the clicked button via the data-language attribute
   * The language is then stored in local storage
   */
document.querySelectorAll('.language').forEach(button => {
  button.addEventListener('click', function() {
    const languageValue = this.getAttribute('data-language');
    localStorage.setItem('language', languageValue);
    });
  });

  /**
   * Determination of question set based on the language stored in local storage
   * The language is retrieved from local storage
   * The chosen question set is assigned based on the language
   */
 const language = localStorage.getItem('language');

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

// Choose question set function called.
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
  let next = document.getElementById("next");
  let retry = document.getElementById("retry");
  next.style.display = "none";
  retry.style.display = "none";
  // Run the question function
  question();
}
/**
 * If there are no questions left in the list the end of game pop up displays
 * end percentage function is called to calculate the percentage of correct answers
 * else:
 * Function fills question button with chosen question
 * Function gets the correct answer and answer options associated with the chosen question
 * Function fills the answer buttons
 * Also called when retry clicked if incorrect answer is given for player to try again.
 */
function question() {
  let questions = chosenQuestionSet.getQuestions();
  if (questions.length == parseInt(0)) {
    // overlay is displayed for pop up contrast
    let overlay = document.getElementById("overlay");
    overlay.style.display = "block";
    // end pop up is displayed
    let endPopUp = document.getElementById("end");
    endPopUp.style.display = "block";
    endPercent();
  }
  else {
    // Get question button
    let questionButton = document.getElementById("question-button");
    // Replace the text on the button with the chosen question
    questionButton.innerHTML = chosenQuestion.getQuestion();
    // Get answer buttons
    let answerBoxes = document.getElementsByClassName("answer-button");
    // loop through each button and apply settings
    for (const a of answerBoxes) {
      // change the answer buttons back to the original colour when next question is generated.
      a.style.backgroundColor = "#67aeff";
      // enable button presses
      a.disabled = false;
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
}
// run the choose question function
chooseQuestion();
/**
 * Function to read out the question when the question button is clicked
 * Uses the speech synthesis API to convert text to speech
 * Matches the voice to the language 
 * Is linked via an onclick in the question button element within questions.html
 */
function speak() {
  let questionButton = document.getElementById("question-button");
  let content = questionButton.innerText;
  let utterance = new SpeechSynthesisUtterance(content);
  // set the voice to match the language of the question set selected
        const voice = chosenQuestionSet.getLanguage()
  switch (voice) {
    // select spanish
    case "spanish":
      utteranceVoice="es-ES";
      break;
    // select italian
    case "italian":
      utteranceVoice="it-IT";
      break;
    // select franch
    case "french":
     utteranceVoice= "fr-FR";
      break;
  }
  // set the language of the utterance
  utterance.lang = utteranceVoice;
  // speak the question
  speechSynthesis.speak(utterance);
}

/**
 * Function to check if the answer is correct or incorrect
 * Includes response if answer is correct
 * Includes response if answer is incorrect
 * Is linked via an onclick in the answer button elements within questions.html
 */
function check(answerButton) {
  let next = document.getElementById("next");
  let retry = document.getElementById("retry");
  /**
   * if correct answer given:
   * hide retry button (applies if question has been reset after incorrect answer)
   * turn button green
   * display next button
   * increase correct counter
   * remove the question from the question set to prevent repeat questions.
   */
  if (answerButton.innerText == chosenQuestion.correct) {
    retry.style.display = "none";
    answerButton.style.backgroundColor = "green";
    next.style.display = "block";
    correctCounter();
    // list of questions
    let questions = chosenQuestionSet.getQuestions();
    // splice the current question from the list.
    questions.splice(questions.indexOf(chosenQuestion), 1);
  }
  /**
   * if incorrect answer given:
   * turn button red
   * display retry button
   */
  else {
    answerButton.style.backgroundColor = "red";
    retry.style.display = "block";
  }
  /**
   * disable answer buttons after first guess is selected
   * prevents multiple buttons being pressed before next or retry
   * disable removed on retry or next selection
   */
  // get answer buttons
  let answerBoxes = document.getElementsByClassName("answer-button");
  // loop through each button and apply settings
  for (const a of answerBoxes) {
    // disable the buttons
    a.disabled = true;
  };
  // increase when answer is selected either correct or incorrect
  questionCounter();

}

/**
 * Functions to increment correct counter
 * Correct answer counter called under check function in if statement as part of the actions if a question is answered correctly
 */
function correctCounter() {
  let startCount = parseInt(document.getElementById("correct-count").innerText);
  document.getElementById("correct-count").innerText = ++startCount;
}
/**
 * Functions to increment question counter
 * Question counter called whenever a question is answered correct or incorrect.
 */
function questionCounter() {
  let startCount = parseInt(document.getElementById("question-count").innerText);
  document.getElementById("question-count").innerText = ++startCount;
}
/**
 * Function to calculate the percentage of correct answers
 * Called at the end of the game when the end pop up is displayed
 * Displays the percentage in the end pop up
 */
function endPercent() {
  // get the correct count and question count
  let correctCount = parseInt(document.getElementById("correct-count").innerText);
  let questionCount = parseInt(document.getElementById("question-count").innerText);
  // calculate the percentage of correct answers
  let percent = (correctCount / questionCount) * 100;
  // round to nearest whole number
  percent = Math.round(percent);
  // display the percentage in the end pop up
  document.getElementById("percent").innerText = percent + "%";
}

