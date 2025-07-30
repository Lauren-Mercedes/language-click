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
 * tries to run the chooseQuestionSet function
 * If it fails, it will catch the error and display an error message.
 */
try{
/**
 * Function for choosing the question set.
 * Selects which questions to display based on the buttons the user clicks
 */
function chooseQuestionSet() {
  // spanish questions
  // beginner questions
  let spanishB = new questionSet("spanishB");
  spanishB.addQuestion("Adios", "Good-Bye", ["Sorry", "Good-Bye", "Tomorrow"]);
  spanishB.addQuestion("Gracias", "Thank You", ["You're Welcome", "Good", "Thank You"]);
  spanishB.addQuestion("Hola", "Hello", ["Hello", "Cheers", "Health"]);
  spanishB.addQuestion("Como Estas?", "How Are You?", ["How Are You?", "Where Is It?", "Are You Coming?"]);
  spanishB.addQuestion("Discuple", "Excuse Me", ["Excuse Me", "Sorry", "Bless You"]);
  spanishB.addQuestion("Por Favor", "Please", ["Please", "Thank You", "You're Welcome"]);
  spanishB.addQuestion("De Nada", "You're Welcome", ["You're Welcome", "It's Not Here", "I Don't Know"]);
  spanishB.addQuestion("No Entiendo", "I Don't Understand", ["I Don't Understand", "No Thank You", "Not A Problem"]);
  spanishB.addQuestion("Donde esta...?", "Where is...", ["Where is...", "What is...", "How is..."]);
  spanishB.addQuestion("Lo Siento", "I'm Sorry", ["I'm Sorry", "Excuse Me", "I'm Lost"]);
  // intermediate questions
  let spanishI = new questionSet("spanishI");
  spanishI.addQuestion("Solo Estoy Navegando", "I'm Just Browsing", ["I'm Just Browsing", "I'm Looking For", "I'm Not Interested"]);
  spanishI.addQuestion("No Me Gusta", "I Don't Like It", ["I Don't Like It", "It's Not For Me", "I Don't Want It"]);
  spanishI.addQuestion("Cuanto Cuesta?", "How Much Is It?", ["How Much Is It?", "Where Is It?", "What Is It?"]);
  spanishI.addQuestion("Lo Tengo Todo", "I Have Everything", ["I Have Everything", "I Don't Have It", "It's Not Here"]);
  spanishI.addQuestion("¿Podrías hablar más despacio?", "Could You Speak Slower?", ["Could You Speak Slower?", "Could You Repeat That?", "Could You Explain?"]);
  spanishI.addQuestion("¿Podrías ayudarme?", "Could You Help Me?", ["Could You Help Me?", "Could You Show Me?", "Could You Tell Me?"]);
  spanishI.addQuestion("¿Dónde está el baño?", "Where Is The Bathroom?", ["Where Is The Bathroom?", "Where Is The Restaurant?", "Where Is The Hotel?"]);
  spanishI.addQuestion("¿Cómo se dice...?", "How Do You Say...?", ["How Do You Say...?", "How Far is ...?", "What Is ...?"]);
  spanishI.addQuestion("¿Qué hora es?", "What Time Is It?", ["What Time Is It?", "What Day Is It?", "What Month Is It?"]);
  spanishI.addQuestion("¿Necesitas ayuda?", "Do You Need Help?", ["Do You Need Help?", "Can You Help Them?", "Are You Okay?"]);
  //advanced questions
  let spanishA = new questionSet("spanishA");
  spanishA.addQuestion("¿Puedes recomendarme un buen restaurante?", "Can You Recommend A Good Restaurant?", ["Can You Recommend A Good Restaurant?", "Can You Suggest Something?", "Can You Help Me?"]);
  spanishA.addQuestion("¿Cómo puedo llegar a la estación de tren?", "How Can I Get To The Train Station?", ["How Can I Get To The Train Station?", "Where Is The Train Coming From?", "What Time Is The Train?"]);
  spanishA.addQuestion("¿Tienes alguna recomendación para visitar?", "Do You Have Any Recommendations For Visiting?", ["Do You Have Any Recommendations For Visiting?", "What Do You Suggest?", "Where Should I Go?"]);
  spanishA.addQuestion("¿Cómo puedo mejorar mi pronunciación en español?", "How Can I Improve My Spanish Pronunciation?", ["How Can I Improve My Spanish Pronunciation?", "What Is The Pronounciation of That in Spanish?", "Have I Pronounced That Correctly?"]);
  spanishA.addQuestion("¿Puedes recomendarme un libro en español?", "Can You Recommend A Book In Spanish?", ["Can You Recommend A Book In Spanish?", "What Is Your Favourite Book?", "What Do You Read?"]);
  spanishA.addQuestion("¿Es este un buen lugar para vivir?", "Is This A Good Place To Live?", ["Is This A Good Place To Live?", "What Is The Cost Of Living?", "Is It Safe To Live Here?"]);
  spanishA.addQuestion("¿Cómo puedo aprender más sobre la cultura española?", "How Can I Learn More About Spanish Culture?", ["How Can I Learn More About Spanish Culture?", "What Are The Best Cultural Experiences To Have Here?", "Where Can I Find Tourist Information?"]);
 spanishA.addQuestion("¿Tienes un cargador de teléfono?", "Do You Have A Phone Charger?", ["Do You Have A Phone Charger?", "Have You Seen My Charger?", "Where Can I Buy A Charger?"]);
spanishA.addQuestion("¿Cuándo cierra la tienda?", "When Does The Store Close?", ["When Does The Store Close?", "What Are The Store Hours?", "Is It Open Late?"]);
   spanishA.addQuestion("¿Dónde está el hospital más cercano?", "Where Is The Nearest Hospital?", ["Where Is The Nearest Hospital?", "Is That A Hospital?", "What Is The Hospital Address?"]);
  // italian questions
  //beginner questions
  let italianB = new questionSet("italianB");
  italianB.addQuestion("Ciao", "Good-Bye", ["Sorry", "Good-Bye", "Tomorrow"]);
  italianB.addQuestion("Grazie", "Thank You", ["You're Welcome", "Good", "Thank You"]);
  italianB.addQuestion("Buongiorno", "Hello", ["Hello", "Cheers", "Health"]);
  italianB.addQuestion("Come va?", "How Are You?", ["How Are You?", "Where Is It?", "Are You Coming?"])
  italianB.addQuestion("Mi Scusi", "Excuse Me", ["Excuse Me", "Sorry", "Bless You"]);
  italianB.addQuestion("Per Favore", "Please", ["Please", "Thank You", "You're Welcome"]);
  italianB.addQuestion("Di Niente", "You're Welcome", ["You're Welcome", "It's Not Here", "I Don't Know"]);
  italianB.addQuestion("No Capisco", "I Don't Understand", ["I Don't Understand", "No Thank You", "Not A Problem"]);
  italianB.addQuestion("Dov'e...?", "Where is...", ["Where is...", "What is...", "How is..."]);
  italianB.addQuestion("Mi Dispiace", "I'm Sorry", ["I'm Sorry", "Excuse Me", "I'm Lost"]);
  // intermediate questions
  let italianI = new questionSet("italianI");
  italianI.addQuestion("Sto Solo Guardando", "I'm Just Browsing", ["I'm Just Browsing", "I'm Looking For", "I'm Not Interested"]);
  italianI.addQuestion("Non Mi Piace", "I Don't Like It", ["I Don't Like It", "It's Not For Me", "I Don't Want It"]);
  italianI.addQuestion("Quanto Costa?", "How Much Is It?", ["How Much Is It?", "Where Is It?", "What Is It?"]);
  italianI.addQuestion("Ho Tutto", "I Have Everything", ["I Have Everything", "I Don't Have It", "It's Not Here"]);
  italianI.addQuestion("Puoi Parlare Più Piano?", "Could You Speak Slower?", ["Could You Speak Slower?", "Could You Repeat That?", "Could You Explain?"]);
  italianI.addQuestion("Mi Puo Aiutare?", "Could You Help Me?", ["Could You Help Me?", "Could You Show Me?", "Could You Tell Me?"]);
  italianI.addQuestion("Dove Si Trova Il Bagno?", "Where Is The Bathroom?", ["Where Is The Bathroom?", "Where Is The Restaurant?", "Where Is The Hotel?"]);
  italianI.addQuestion("Come Si Dice...?", "How Do You Say...?", ["How Do You Say...?", "What Far is ...", "What Is ...?"]);
  italianI.addQuestion("Che Ore Sono?", "What Time Is It?", ["What Time Is It?", "What Day Is It?", "What Month Is It?"]);
  italianI.addQuestion("Hai Bisogno Di Aiuto?", "Do You Need Help?", ["Do You Need Help?", "Can You Help Them?", "Are You Okay?"]);
  // advanced questions
  let italianA = new questionSet("italianA");
  italianA.addQuestion("Puoi Consigliarmi Un Buon Ristorante?", "Can You Recommend A Good Restaurant?", ["Can You Recommend A Good Restaurant?", "Can You Suggest Something?", "Can You Help Me?"]);
  italianA.addQuestion("Come Posso Arrivare Alla Stazione Dei Treni?", "How Can I Get To The Train Station?", ["How Can I Get To The Train Station?", "Where Is The Train Coming From?", "What Time Is The Train?"]);
  italianA.addQuestion("Hai Qualche Consiglio Da Visitare?", "Do You Have Any Recommendations For Visiting?", ["Do You Have Any Recommendations For Visiting?", "What Do You Suggest?", "Where Should I Go?"]);
  italianA.addQuestion("Come Posso Migliorare La Mia Pronuncia In Italiano?", "How Can I Improve My Italian Pronunciation?", ["How Can I Improve My Italian Pronunciation?", "What Is The Pronounciation of That in Italian?", "Have I Pronounced That Correctly?"]);
  italianA.addQuestion("Puoi Consigliarmi Un Libro In Italiano?", "Can You Recommend A Book In Italian?", ["Can You Recommend A Book In Italian?", "What Is Your Favourite Book?", "What Do You Read?"]);
  italianA.addQuestion("È Un Buon Posto Dove Vivere?", "Is This A Good Place To Live?", ["Is This A Good Place To Live?", "What Is The Cost Of Living?", "Is It Safe To Live Here?"]);
  italianA.addQuestion("Come Posso Imparare Di Più Sulla Cultura Italiana?", "How Can I Learn More About Italian Culture?", ["How Can I Learn More About Italian Culture?", "What Are The Best Cultural Experiences To Have Here?", "Where Can I Find Tourist Information?"]);
  italianA.addQuestion("Hai Un Caricabatterie Per Il Telefono?", "Do You Have A Phone Charger?", ["Do You Have A Phone Charger?", "Have You Seen My Charger?", "Where Can I Buy A Charger?"]);
  italianA.addQuestion("Quando Chiude Il Negozio?", "When Does The Store Close?", ["When Does The Store Close?", "What Are The Store Hours?", "Is It Open Late?"]);
  italianA.addQuestion("Dove Si Trova L'ospedale Più Vicino?", "Where Is The Nearest Hospital?", ["Where Is The Nearest Hospital?", "Is That A Hospital?", "What Is The Hospital Address?"]);
  // french questions
  // beginner questions
  let frenchB = new questionSet("frenchB");
  frenchB.addQuestion("Au Revoir", "Good-Bye", ["Sorry", "Good-Bye", "Tomorrow"]);
  frenchB.addQuestion("Merci", "Thank You", ["You're Welcome", "Good", "Thank You"]);
  frenchB.addQuestion("Bonjour", "Hello", ["Hello", "Cheers", "Health"]);
  frenchB.addQuestion("Comment vas-tu?", "How Are You?", ["How Are You?", "Where Is It?", "Are You Coming?"])
  frenchB.addQuestion("Excusez-Moi", "Excuse Me", ["Excuse Me", "Sorry", "Bless You"]);
  frenchB.addQuestion("S'il Vous Plait", "Please", ["Please", "Thank You", "You're Welcome"]);
  frenchB.addQuestion("De Rien", "You're Welcome", ["You're Welcome", "It's Not Here", "I Don't Know"]);
  frenchB.addQuestion("Je Ne Comprends Pas", "I Don't Understand", ["I Don't Understand", "No Thank You", "Not A Problem"]);
  frenchB.addQuestion("Ou Est...?", "Where is...", ["Where is...", "What is...", "How is..."]);
  frenchB.addQuestion("Je Suis Desole", "I'm Sorry", ["I'm Sorry", "Excuse Me", "I'm Lost"]);
  // intermediate questions
  let frenchI = new questionSet("frenchI");
  frenchI.addQuestion("Je Regarde Seulement", "I'm Just Browsing", ["I'm Just Browsing", "I'm Looking For", "I'm Not Interested"]);
  frenchI.addQuestion("Je N'aime Pas", "I Don't Like It", ["I Don't Like It", "It's Not For Me", "I Don't Want It"]);
  frenchI.addQuestion("Combien Ca Coute?", "How Much Is It?", ["How Much Is It?", "Where Is It?", "What Is It?"]);
  frenchI.addQuestion("J'ai Tout", "I Have Everything", ["I Have Everything", "I Don't Have It", "It's Not Here"]);
  frenchI.addQuestion("Pouvez-Vous Parler Plus Lentement?", "Could You Speak Slower?", ["Could You Speak Slower?", "Could You Repeat That?", "Could You Explain?"]);
  frenchI.addQuestion("Pouvez-Vous M'aider?", "Could You Help Me?", ["Could You Help Me?", "Could You Show Me?", "Could You Tell Me?"]);
  frenchI.addQuestion("Ou Sont Les Toilettes?", "Where Is The Bathroom?", ["Where Is The Bathroom?", "Where Is The Restaurant?", "Where Is The Hotel?"]);
  frenchI.addQuestion("Comment Dit-On...?", "How Do You Say...?", ["How Do You Say...?", "How far is...?", "What Is ...?"]);
  frenchI.addQuestion("Quelle Heure Est-Il?", "What Time Is It?", ["What Time Is It?", "What Day Is It?", "What Month Is It?"]);
  frenchI.addQuestion("Avez-Vous Besoin D'aide?", "Do You Need Help?", ["Do You Need Help?", "Can You Them?", "Are You Okay?"]);
  // advanced questions
  let frenchA = new questionSet("frenchA");
  frenchA.addQuestion("Pouvez-Vous Me Recommander Un Bon Restaurant?", "Can You Recommend A Good Restaurant?", ["Can You Recommend A Good Restaurant?", "Can You Suggest Something?", "Can You Help Me?"]);
  frenchA.addQuestion("Comment Puis-Je Me Rendre A La Gare?", "How Can I Get To The Train Station?", ["How Can I Get To The Train Station?", "Where Is The Train Coming From?", "What Time Is The Train?"]);
  frenchA.addQuestion("Avez-Vous Des Recommandations Pour Visiter?", "Do You Have Any Recommendations For Visiting?", ["Do You Have Any Recommendations For Visiting?", "What Do You Suggest?", "Where Should I Go?"]);
  frenchA.addQuestion("Comment Puis-Je Améliorer Ma Prononciation En Français?", "How Can I Improve My French Pronunciation?", ["How Can I Improve My French Pronunciation?", "What Is The Pronounciation of That in French?", "Have I Pronounced That Correctly?"]);
  frenchA.addQuestion("Pouvez-Vous Me Recommander Un Livre En Français?", "Can You Recommend A Book In French?", ["Can You Recommend A Book In French?", "What Is Your Favourite Book?", "What Do You Read?"]);
  frenchA.addQuestion("Est-Ce Un Bon Endroit Pour Vivre?", "Is This A Good Place To Live?", ["Is This A Good Place To Live?", "What Is The Cost Of Living?", "Is It Safe To Live Here?"]);
  frenchA.addQuestion("Comment Puis-Je En Savoir Plus Sur La Culture Française?", "How Can I Learn More About French Culture?", ["How Can I Learn More About French Culture?", "What Are The Best Cultural Experiences To Have Here?", "Where Can I Find Tourist Information?"]);
  frenchA.addQuestion("Avez-Vous Un Chargeur De Téléphone?", "Do You Have A Phone Charger?", ["Do You Have A Phone Charger?", "Have You Seen My Charger?", "Where Can I Buy A Charger?"]); 
  frenchA.addQuestion("Quand Ferme Le Magasin?", "When Does The Store Close?", ["When Does The Store Close?", "What Are The Store Hours?", "Is It Open Late?"]);  
  frenchA.addQuestion("Ou Se Trouve L'hôpital Le Plus Proche?", "Where Is The Nearest Hospital?", ["Where Is The Nearest Hospital?", "Is That A Hospital?", "What Is The Hospital Address?"]); 

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
   * Selection of question set from the level picked by the player
   * Each level button has a data-level attribute that stores the level value
   * Each button is targeted with an event listener 
   * The levele is retrieved from the clicked button via the data-level attribute
   * The level is then stored in local storage
   */
  document.querySelectorAll('.level').forEach(button => {
  button.addEventListener('click', function() {
    const levelValue = this.getAttribute('data-level');
    localStorage.setItem('level', levelValue);
  });
});

  /**
   * Determination of question set based on the language and level stored in local storage
   * The language and level are retrieved from local storage
   * The chosen question set is assigned based on the language and level selected
   */
const language = localStorage.getItem('language');
const level = localStorage.getItem('level');
  switch (language + level) {
    // select spanish beginner
    case "spanish" + "beginner":
      chosenQuestionSet = spanishB;
      break;
      // select spanish intermediate
    case "spanish" + "intermediate":
      chosenQuestionSet = spanishI;
      break;
      // select spanish advanced
    case "spanish" + "advanced":
      chosenQuestionSet = spanishA;
      break;
    // select italian beginner
    case "italian" + "beginner":
      chosenQuestionSet = italianB;
      break;
      // select italian intermediate
    case "italian" + "intermediate":
      chosenQuestionSet = italianI;
      break;  
      // select italian advanced
    case "italian" + "advanced":
      chosenQuestionSet = italianA;
      break;
    // select french beginner
    case "french" + "beginner":
      chosenQuestionSet = frenchB;
      break;
      // select french intermediate
    case "french" + "intermediate":  
      chosenQuestionSet = frenchI;
      break;
      // select french advanced
    case "french" + "advanced":
      chosenQuestionSet = frenchA;
      break;
  }
}

// Choose question set function called.
chooseQuestionSet()
}
catch (error) {
  // hide end of game pop up - displayed if no questions left
  let endPopUp = document.getElementById("end");
  endPopUp.style.display = "none";
  // Display error message if question set selection fails
  let errorMessage = document.getElementById("error");
  let questionSetError = ("Error with question set selection: " + error + " Please try again");
  errorMessage.innerText = questionSetError;
  errorMessage.style.display = "block";
}
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
 * If tried and failed to generate audio an error will display
 */
function speak() {
  let errorMessage = document.getElementById("error");
    try {
  let questionButton = document.getElementById("question-button");
  let content = questionButton.innerText;
  let utterance = new SpeechSynthesisUtterance(content);
  // set the voice to match the language of the question set selected
  let voice = localStorage.getItem('language');
  // set the voice to match the language of the question set selected
  switch (voice) {
    // select spanish
    case "spanish":
      utterance.lang="es-ES";
      break;
    // select italian
    case "italian":
      utterance.lang="it-IT";
      break;
    // select french
    case "french":
     utterance.lang= "fr-FR";
      break;
    // default to english
    default:
      // display error message if language not supported
      let languageError = "Language not supported, defaulting to English";
      errorMessage.innerText = languageError;
      errorMessage.style.display = "block";
      break;
  }
  // speak the question
  speechSynthesis.speak(utterance);
}
 // error handling 
  catch (error) {
    // display error message if speech synthesis fails
  let audioError = ("Error with speech generation audio: " + error);
  errorMessage.innerText = audioError;
  errorMessage.style.display = "block";
  }
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

