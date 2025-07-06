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

