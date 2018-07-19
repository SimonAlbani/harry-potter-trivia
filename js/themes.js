//variable to grab background element for the theme functions
let background = $("#background");

//theme function
function dobby() {
  $(".dobby")[0].play();
  background.attr("class", "dobby");
}

//theme function
function gryffindor() {
  $(".gryffindor")[0].play();
  background.attr("class", "gryffindor");
}

//theme function
function hufflepuff() {
  $(".hufflepuff")[0].play();
  background.attr("class", "hufflepuff");
}

//theme function
function slytherin() {
  $(".slytherin")[0].play();
  background.attr("class", "slytherin");
}

//theme function
function ravenclaw() {
  $(".ravenclaw")[0].play();
  background.attr("class", "ravenclaw");
}

//theme function
function hogwarts() {
  $(".hogwarts")[0].play();
  background.attr("class", "background");
}

//function for the beginning part of the app to hide button and display page
function lumos() {
  setTimeout(function() {
    $("#lumos").css("display", "none");
    $("#begin").attr("id", "appear");
  }, 2500);
}

//plays audio for the lumos function. created separetly due to timeout in lumos function
function music() {
  $("#lumosMaxima")[0].play();
}
