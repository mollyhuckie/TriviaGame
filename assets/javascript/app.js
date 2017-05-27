
var questions = [{
    question: "What is the longest running tv show?",
    choices: ["Law & Order", "The Simpsons", "Friends", "Family Guy"],
    correctAnswer: 1,
    wrongAnswer: 0
  }, {
    question: "What is the phrase on the UFO poster in Fox Mulder's office in X-Files?",
    choices: ["The truth is out there", "Trust no one", "We are not alone", "I want to believe"],
    correctAnswer: 3
  }, {
    question: "What was the first animated series made for prime-time network television?",
    choices: ["The Simpsons", "South Park", "The Flintstones", "Scooby-Doo"],
    correctAnswer: 2
  }, {
    question: "What was the first network television show to use the F word?",
    choices: ["South Park", "Saturday Night Live", "Hell's Kitchen", "Louie"],
    correctAnswer: 1
  }, {
    question: "What is the name of Cartmans favorite stuffed animal?",
    choices: ["Clyde Frog", "Polly Prissypants", "Rumpertumskin", "Peter Panda"],
    correctAnswer: 0
  }, {
    question: "Which “Friends” star was the only one to kiss all of the other cast members during the course of the ten seasons?",
    choices: ["Monica", "Phoebe", "Joey", "Rachel"],
    correctAnswer: 3
  }, {
    question: "The creator of The Fairly Odd Parents also created?",
    choices: ["The Angry Beavers", "Danny Phantom", "Rocko's Modern Life", "The Adventures of Jimmy Neutron"],
    correctAnswer: 1
  }, {
    question: "What show has Adam West not been in?",
    choices: ["Fairly Odd Parents", "The Simpsons", "American Dad","Futurama"],
    correctAnswer: 2
  }];

$( document ).ready(function() {
    console.log( "ready!" );

  console.log(questions)

var choices = []; //Array containing user choices
var questionCounter;
  
  

  console.log(window); // The window object. Not important here, please take a look at it.

  // Click handler for the start button
  $('#start').on('click', function () {

    console.log("start button clicked");

    questionCounter = 0;

    //counter = 30

    $('#start').hide();

    //startTimer(30);

    createQuestionElement(questions); // invoking the function

    startTimer();

  });
  
  
  
  //timer

function startTimer() {
  var counter = 30;

var test = setInterval(function(){
  counter--;
  
  console.log(counter);
  
  if(counter <= 0){
    clearInterval(test);
  }
  
$("#timer").append(counter); // appending to the DOM

}, 1000);

}



  // Creates and returns the div that contains the questions and 
  // the answer selections
  // Storing the function inside memory
  // createQuestionElement function with a parameter named q
  function createQuestionElement(q) {

    var qElement = $('<div>').attr('id', 'question');

    console.log(q)


    for (var i = 0; i < q.length; i++) {
      el = $('<p>');
      el.append(q[i].question);

      $("#quiz").append(el); // appending to the DOM
      
    }
    
   var radioButtons = createRadios();
   $("#quiz").append(radioButtons);
    
  }


  
  // Creates a list of the answer choices as radio inputs
 function createRadios() {
    var radioList = $('<ul>');
    var item;
    var input = '';
    for (var i = 0; i < questions.length; i++) {
    	console.log(questions[i].choices);

      item = $('<li>');
      input = '<input type="radio" name="answer" value=' + i + ' />';
      input += questions[i];
      item.append(input);
      radioList.append(item);
    }
    return radioList; // making the function equal to radioList
    
  }

  
  
  // Reads the user selection and pushes the value to an array
  function choose() {
    selections[questionCounter] = +$('input[name="answer"]:checked').val();
  }
        
  // Computes score and returns a paragraph element to be displayed
  function displayScore() {
    var score = $('<p>',{id: 'question'});
    
    var numCorrect = 0;
    for (var i = 0; i < selections.length; i++) {
      if (selections[i] === questions[i].correctAnswer) {
        numCorrect++;
      }
    }

    var numIncorrect = 0;
    for (var i = 0; i < selections.length; i++) {
      if (selections[i] === questions[i].wrongAnswer) {
        numIncorrect++;
      }
    }
    
    score.append('Correct Answers:' + numCorrect);
    score.append('Incorrect Answers:' + numInorrect);
    
    
  }


});