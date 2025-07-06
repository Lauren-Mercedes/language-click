/**
 * Class that provides the blueprint of the question structure for use in adding questions.
 * Includes the question, the correct answer, and answer options.
 * Includes functions that allow the question, correct answer, and answer options to be called for use in other functions.
 */
class questionStructure{
// question structure
  constructor (question, correct, answers){
    this.question = question;
    this.correct = correct;
    this.answerSet = answers;
  }
// functions 
  getQuestion = () =>{
    return this.question;}

    getCorrect = () =>{
    return this.correct;}

    getAnswers = () =>{
    return this.answerSet;}
}

/**
 * Class that provides the blueprint of the question set.
 * For use in grouping questions by language and level.
 * Includes functions that allow the selected language and level to be called for use in other functions.
 * Includes a function to add questions to the question set using the question structure class.
 */
class questionSet{
// question set structure
  constructor (language, level){
    this.language = language;
    this.level = level;
    this.questions = [];
  }
// functions
    getLanguage = () =>{
    return this.language;}

    getLevel = () =>{
    return this.level;}

    getQuestions = () =>{
    return this.questions;}

    addQuestion = (question, correct,answers) =>{
      this.questions.push(new questionStructure(question,correct, answers));}
}

// Instructions Pop Up
// When instructions button is clicked show instructions
function showInstructions(){
  let popUp = document.getElementById("popup");
  popUp.style.display = "block";
}
//When close button is clicked hide instructions
function hideInstructions(){
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
function chooseQuestionSet () {
// spanish questions
      let spanish = new questionSet("Italian");
  spanish.addQuestion("Adios","Good-Bye",["Sorry", "Good-Bye", "Tomorrow"]);
  spanish.addQuestion("Gracias","Thank You",["You're Welcome", "Good", "Thank You"]);
  spanish.addQuestion("Hola","Hello",["Hello", "Cheers", "Health"]);
// unconditional selection for functional testing of the game
  chosenQuestionSet = spanish;
}
