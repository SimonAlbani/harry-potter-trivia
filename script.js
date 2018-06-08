(function() {
  const myQuestions = [
    {
      question: "Which house does Harry Potter belong to?",
      answers: {
        a: "Gryffindor",
        b: "Slytherin",
        c: "Hufflepuff",
        d: "Ravenclaw"
      },
      correctAnswer: "a"
    },
    {
      question: "What is the name of Harry`s owl?",
      answers: {
        a: "Dobby",
        b: "Winky",
        c: "Hedwig",
        d: "Scabbers"
      },
      correctAnswer: "c"
    },
    {
      question: "What is the symbol of Slytherin house?",
      answers: {
        a: "A lion",
        b: "A badger",
        c: "An eagle",
        d: "A snake"
      },
      correctAnswer: "d"
    },
    {
      question: "What is the name of Voldemort's snake?",
      answers: {
        a: "Nagini",
        b: "Slithers",
        c: "Ekans",
        d: "Snape"
      },
      correctAnswer: "a"
    },
    {
      question: "Who is the headmaster of Hogwarts?",
      answers: {
        a: "Nearly Headless Nick",
        b: "Peeves",
        c: "Hagrid",
        d: "Dumbledore"
      },
      correctAnswer: "d"
    },
    {
      question: "What is the symbol of Gryffindor house?",
      answers: {
        a: "A lion",
        b: "A badger",
        c: "An eagle",
        d: "A snake"
      },
      correctAnswer: "a"
    },
    {
      question: "What did Dumbledore leave Ron in his will?",
      answers: {
        a: "His house",
        b: "A car",
        c: "A deluminator",
        d: "A Nimbus 2000"
      },
      correctAnswer: "c"
    },
    {
      question: "What is the symbol of Hufflepuff house?",
      answers: {
        a: "A lion",
        b: "A badger",
        c: "An eagle",
        d: "A snake"
      },
      correctAnswer: "b"
    },
    {
      question: "Master has given Dobby a ______, Dobby is free!",
      answers: {
        a: "sock",
        b: "shirt",
        c: "wand",
        d: "glove"
      },
      correctAnswer: "a"
    },
    {
      question: "what is the symbol of Ravenclaw house?",
      answers: {
        a: "A lion",
        b: "A badger",
        c: "An eagle",
        d: "A snake"
      },
      correctAnswer: "c"
    }
  ];
  let background = document.querySelector("#background");
  function dobby() {
    document.querySelector(".dobby").play();
    background.setAttribute("class", "dobby");
  }
  let dobbyButton = document.querySelector("#dobby");
  dobbyButton.addEventListener("click", dobby);

  function gryffindor() {
    document.querySelector(".gryffindor").play();
    background.setAttribute("class", "gryffindor");
  }
  let gryffindorButton = document.querySelector("#gryffindor");
  gryffindorButton.addEventListener("click", gryffindor);

  function hufflepuff() {
    document.querySelector(".hufflepuff").play();
    background.setAttribute("class", "hufflepuff");
  }
  let hufflepuffButton = document.querySelector("#hufflepuff");
  hufflepuffButton.addEventListener("click", hufflepuff);

  function slytherin() {
    document.querySelector(".slytherin").play();
    background.setAttribute("class", "slytherin");
  }
  let slytherinButton = document.querySelector("#slytherin");
  slytherinButton.addEventListener("click", slytherin);

  function ravenclaw() {
    document.querySelector(".ravenclaw").play();
    background.setAttribute("class", "ravenclaw");
  }
  let ravenclawButton = document.querySelector("#ravenclaw");
  ravenclawButton.addEventListener("click", ravenclaw);

  function hogwarts() {
    document.querySelector(".hogwarts").play();
    background.setAttribute("class", "background");
  }
  let hogwartsButton = document.querySelector("#hogwarts");
  hogwartsButton.addEventListener("click", hogwarts);

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

  function showResults() {
    const answerContainers = triviaContainer.querySelectorAll(".answers");
    let numCorrect = 0;
    document.querySelector("#mischief").play();
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
    resultsContainer.innerHTML = `${numCorrect} out of ${
      myQuestions.length
    } correct`;
    if (numCorrect >= 8) {
      background.setAttribute("class", "win");
      resultsContainer.style.backgroundColor = "rgba(42, 133, 57, .75)";
    } else {
      background.setAttribute("class", "loose");
      resultsContainer.style.backgroundColor = "rgba(190, 16, 16, .75)";
    }
  }

  function showSlide(n) {
    slides[currentSlide].classList.remove("active-slide");
    slides[n].classList.add("active-slide");
    currentSlide = n;

    if (currentSlide === 0) {
      previousButton.style.display = "none";
    } else {
      previousButton.style.display = "inline-block";
    }

    if (currentSlide === slides.length - 1) {
      nextButton.style.display = "none";
      submitButton.style.display = "inline-block";
    } else {
      nextButton.style.display = "inline-block";
      submitButton.style.display = "none";
    }
  }

  function showNextSlide() {
    showSlide(currentSlide + 1);
  }

  function showPreviousSlide() {
    showSlide(currentSlide - 1);
  }

  const triviaContainer = document.getElementById("trivia");
  const resultsContainer = document.getElementById("results");
  const submitButton = document.getElementById("submit");
  const previousButton = document.getElementById("previous");
  const nextButton = document.getElementById("next");
  const slides = document.querySelectorAll(".slide");
  const lumosButton = document.querySelector("#lumos");
  let currentSlide = 0;
  
  buildTrivia();
  showSlide(0);

  function lumos() {
    setTimeout(function() {
      lumosButton.style.display = "none";
      document.querySelector("#begin").setAttribute("id", "appear");
    }, 2500);
  }
  function music() {
    document.querySelector("#lumosMaxima").play();
  }

  submitButton.addEventListener("click", showResults);
  previousButton.addEventListener("click", showPreviousSlide);
  nextButton.addEventListener("click", showNextSlide);
  lumosButton.addEventListener("click", lumos);
  lumosButton.addEventListener("click", music);
})();
