

$(document).ready(function () {

    // Tracking variables
    var totalScore = $('.score');
    var totalWins = $('.wins');
    var totalLosses = $('.losses');
    var score = 0;

    // Win Counter

    var wins = 0;

    // Lose Counter

    var losses = 0;

    // Gem Elements
    var yellowGem = $(".gem-1");
    var blueGem = $(".gem-2");
    var greenGem = $(".gem-3");
    var redGem = $(".gem-4");

    // Gem array
    var gemArray = [];

    // Random Number Generator
    function randomNumberGenerator() {

        var min = 2;
        var max = 12;
        var randomArrayNumber;

        // Generate 4 random numbers in a loop and push into gemArray
        for (var i = 0; i < 4; i++) {

            randomArrayNumber = Math.floor(Math.random() * (max - min + 1)) + min;
            gemArray[i] = randomArrayNumber;
        }
    }

    // Score Tracker Function
    function scoreTracker(gemValue) {
        // Updating score with any value that is passed when the function is called then gemValue will equal that

        if (score < 39) {
            score += gemValue;
            console.log(score);
            totalScore.html(score);
            if (score === 39) {
                alert('You win!');
            }
            if (score > 39) {
                alert('You lose!');
            }
        } else if (score === 39) {
            alert('You win!');
        }
        else {
            alert('You lose!');
        }
    }



    // Call function
    randomNumberGenerator();

    console.log(gemArray);

    // Setting gems value after number generator
    var yellowGemValue = gemArray[0];
    var blueGemValue = gemArray[1];
    var greenGemValue = gemArray[2];
    var redGemValue = gemArray[3];


    // Game Over Function



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









