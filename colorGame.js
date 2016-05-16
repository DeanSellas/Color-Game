//COLORS
var red = 0;
var green = 0;
var blue = 0;
var userRed = 0;
var userGreen = 0;
var userBlue = 0;
var redOffset = 0;
var greenOffset = 0;
var blueOffset = 0;

//LOGIC
var click = 0;
var score = 0;
var restart = false;

//CALCULATES SCORE
function calcScore() {

  //RED MATH
  if (userRed > red) {
    redOffset = (userRed - red) / 255;
    
    //LOSE POINTS
    if(redOffset > 0.3){
      redOffset = -redOffset;
    }
  }
  if (userRed == red) {
    redOffset = 1;
  }
  if (userRed < red) {
    redOffset = (red - userRed) / 255;
  }

  //GREEN MATH
  if (userGreen > green) {
    greenOffset = (userGreen - green) / 255;
    
    //LOSE POINTS
    if(greenOffset > 0.3){
      greenOffset = -greenOffset;
    }
  }
  if (userGreen == green) {
    greenOffset = 1;
  }
  if (userGreen < green) {
    greenOffset = (green - userGreen) / 255;
  }

  //BLUE MATH
  if (userBlue > blue) {
    blueOffset = (userBlue - blue) / 255;
    
    //LOSE POINTS
    if(blueOffset > 0.3){
      blueOffset = -blueOffset;
    }
  }
  if (userBlue == blue) {
    blueOffset = 1;
  }
  if (userBlue < blue) {
    blueOffset = (blue - userBlue) / 255;
  }

  console.log("redOffset: " + redOffset + "\ngreenOffset: " + greenOffset + "\nblueOffset: " + blueOffset);
  
  //AVERAGE SCORE
  score += Math.round((redOffset+greenOffset+blueOffset)/3 *100);
  console.log("score: "+score)

}

//RANGEBAR
function player() {

  //GETS VALUE OF RANGEBAR
  userRed = $('#red').val();
  userGreen = $('#green').val();
  userBlue = $('#blue').val();

  //SETS <P> TO PERCENTAGE OF COLOR
  $('#pred').text(Math.round(userRed / 255 * 100) + "%");
  $('#pgreen').text(Math.round(userGreen / 255 * 100) + "%");
  $('#pblue').text(Math.round(userBlue / 255 * 100) + "%");

  //SETS USER BOX'S BACKGROUND
  $("#userBox").css({
    "background-color": "rgb(" + userRed + "," + userGreen + "," + userBlue + ")"
  });

}

//LOGIC FOR BUTTON
function clicks() {

  //DISPLAYS SCORE
  if (restart === false) {
    $('#score').text("score: " + score);
  }

  click++;
  console.log("click: " + click);

  //END GAME
  if (click === 5) {
    $('#check').text("Restart");
    restart = true;
    click = -1;
  }

  //RESET SCORE
  if (click === 0) {
    score = 0;
    restart = false;
    $('#check').text("Check Color");
    $('#score').text("score: " + score);
  }
}

//COLOR OF GOAL BOX
function background() {
  if (restart === false) {

    //RANDOM COLOR
    red = Math.floor(Math.random() * 255);
    green = Math.floor(Math.random() * 255);
    blue = Math.floor(Math.random() * 255);

    console.log("red: " + red + "\ngreen: " + green + "\nblue: " + blue);

    //SETS GOAL BOX COLOR
    $("#goalBox").css({
      "background-color": "rgb(" + red + "," + green + "," + blue + ")"
    });
  }
}

//LOADS FIRST COLOR
window.onload = background;

//COLLECTS NUMBER OF VALUE BAR
document.addEventListener("mousemove", player);