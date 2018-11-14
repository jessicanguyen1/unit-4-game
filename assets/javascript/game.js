// Global Variables

// Win Counter
var wins = 0;
// Lose Counter
var losses = 0;
// Gem array to push values into element
var gemArray = [];
var score = 0;

// Number for the js to plug into the .sum-number element
var sumNumValue = 0;

// Setting gems value after number generator
var yellowGemValue;
var blueGemValue;
var greenGemValue;
var redGemValue;

$(document).ready(function () {

    // Tracking variables
    var totalScore = $('.score');
    var totalWins = $('.wins');
    var totalLosses = $('.losses');

    // Number for the game start
    var sumNum = $('.sum-number');

    // Gem Elements
    var yellowGem = $(".gem-1");
    var blueGem = $(".gem-2");
    var greenGem = $(".gem-3");
    var redGem = $(".gem-4");


    // Create the sum number generator
    function sumGenerator() {
        var max = 120;
        var min = 19;
        sumNumValue = (Math.floor(Math.random() * (max - min + 1)) + min);
        sumNum.html(sumNumValue);
    }

    // Random Number Generator
    function randomNumberGenerator() {

        var min = 2;
        var max = 12;
        var randomArrayNumber;

        // Generate 4 random numbers in a loop and push into gemArray
        for (var i = 0; i < 4; i++) {

            randomArrayNumber = Math.floor(Math.random() * (max - min + 1)) + min;
            gemArray[i] = randomArrayNumber;

            // Setting gems value after number generator
            yellowGemValue = gemArray[0];
            blueGemValue = gemArray[1];
            greenGemValue = gemArray[2];
            redGemValue = gemArray[3];
        }

    }

    // Score Tracker Function
    function scoreTracker(gemValue) {
        // Updating score with any value that is passed when the function is called then gemValue will equal that

        if (score <= sumNumValue) {

            score += gemValue;
            totalScore.html(score);

            // After score is updated above, check one more time so I don't have to click a gem again
            if (score === sumNumValue) {
                wins++;
                totalScore.html(score);
                totalWins.html(wins);
                alert('You win!');
                gameOver();
            }

        } else if (score === sumNumValue) {
            wins++;
            totalScore.html(score);
            totalWins.html(wins);
            alert('You win!');
            gameOver();
        }
        else if (score > sumNumValue) {
            losses++;
            totalScore.html(score);
            totalLosses.html(losses);
            alert('You lose!');
            gameOver();
        }
    }



    // Call function
    sumGenerator();
    randomNumberGenerator();

    // Game Over Function
    function gameOver() {

        // Set variables back -- need to add var because the scope is not available to the the rest of the program
        totalScore.html(0);
        gemArray = [];
        score = 0;
        randomArrayNumber = 0;
        yellowGemValue = 0;
        redGemValue = 0;
        blueGemValue = 0;
        greenGemValue = 0;
        sumNumValue = 0;
        randomNumberGenerator();
        sumGenerator();

    }


    // Click Handlers

    yellowGem.click(function () {
        // Add random function
        console.log(yellowGemValue);
        scoreTracker(yellowGemValue);
    });
    blueGem.click(function () {
        // Add random function
        console.log(blueGemValue);
        scoreTracker(blueGemValue);
    });
    greenGem.click(function () {
        // Add random function
        console.log(greenGemValue);
        scoreTracker(greenGemValue);
    });
    redGem.click(function () {
        // Add random function
        console.log(redGemValue);
        scoreTracker(redGemValue);
    });
});









