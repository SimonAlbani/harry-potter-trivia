(function() {
  //this function grabs the questions and displays them
  function buildTrivia() {
    const output = [];
    myQuestions.forEach((currentQuestion, questionNumber) => {
      const answers = [];
      for (letter in currentQuestion.answers) {
        answers.push(
          `<label>
             <input type="radio" id="answers" name="question${questionNumber}" value="${letter}">
              ${letter} :
              ${currentQuestion.answers[letter]}
           </label>`
        );
      }
      output.push(
        `<div class="slide">
           <div class="question"> ${currentQuestion.question} </div>
           <div class="answers"> ${answers.join("")} </div>
         </div>`
      );
    });
    triviaContainer.innerHTML = output.join("");
  }

  //checks each question, if the user has selected the correct answer and then adds points if correct
  function showResults() {
    const answerContainers = triviaContainer.querySelectorAll(".answers");
    let numCorrect = 0;
    $("#mischief")[0].play();
    myQuestions.forEach((currentQuestion, questionNumber) => {
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      if (userAnswer === currentQuestion.correctAnswer) {
        numCorrect++;
        answerContainers[questionNumber].style.backgroundColor =
          "rgba(42, 133, 57, .75)";
      } else {
        answerContainers[questionNumber].style.backgroundColor =
          "rgba(190, 16, 16, .75)";
      }
    });
    checkWinner(numCorrect);
  }

  //checks to see if the user has gotten 8 or more points and displays if passed or not
  function checkWinner(numCorrect) {
    resultsContainer.innerHTML = `${numCorrect} out of ${
      myQuestions.length
    } correct`;
    if (numCorrect >= 8) {
      background.attr("class", "win");
      resultsContainer.style.backgroundColor = "rgba(42, 133, 57, .75)";
    } else {
      background.attr("class", "loose");
      resultsContainer.style.backgroundColor = "rgba(190, 16, 16, .75)";
    }
  }

  //adds/removes classes to  though slides and hides/displays previous question button
  function showSlide(n) {
    slides[currentSlide].classList.remove("active-slide");
    slides[n].classList.add("active-slide");
    currentSlide = n;

    if (currentSlide === 0) {
      $("#previous").css("display", "none");
    } else {
      $("#previous").css("display", "inline-block");
    }
    nextButton();
  }

  //shows/hides next and submit buttons
  function nextButton() {
    if (currentSlide === slides.length - 1) {
      $("#next").css("display", "none");
      $("#submit").css("display", "inline-block");
    } else {
      $("#next").css("display", "inline-block");
      $("#submit").css("display", "none");
    }
  }

  //runs the showSlide function to go to the next slide
  function showNextSlide() {
    showSlide(currentSlide + 1);
  }

  //runs the showSlide function to go to the previous slide
  function showPreviousSlide() {
    showSlide(currentSlide - 1);
  }

  //variables for trivia and results
  const triviaContainer = document.getElementById("trivia");
  const resultsContainer = document.getElementById("results");

  //calling the function
  buildTrivia();

  //variables for the slide functions
  const slides = document.querySelectorAll(".slide");
  let currentSlide = 0;

  //calling the function
  showSlide(0);

  //event listeners
  $("#submit").on("click", showResults);
  $("#previous").on("click", showPreviousSlide);
  $("#next").on("click", showNextSlide);
  $("#lumos").on("click", lumos);
  $("#lumos").on("click", music);
  $("#dobby").on("click", dobby);
  $("#gryffindor").on("click", gryffindor);
  $("#hufflepuff").on("click", hufflepuff);
  $("#slytherin").on("click", slytherin);
  $("#ravenclaw").on("click", ravenclaw);
  $("#hogwarts").on("click", hogwarts);
})();
