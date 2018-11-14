

$(document).ready(function () {

    // Tracking variables
    var totalScore = $('.score');
    var totalWins = $('.wins');
    var totalLosses = $('.losses');
    var score = 0;
    var sumNum = $('.sum-number');
    var sumNumValue = 0;

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
        }
    }

    // Score Tracker Function
    function scoreTracker(gemValue) {
        // Updating score with any value that is passed when the function is called then gemValue will equal that

        if (score < sumNumValue) {
            score += gemValue;
            // console.log(score);
            totalScore.html(score);

            // if (score === sumNumValue) {
            //     alert('You win!');
            //     wins++;
            //     console.log(wins);
            //     totalWins.html(wins);
            //     gameOver();
            // }
            // if (score > sumNumValue) {
            //     alert('You lose!');
            //     losses++;
            //     totalLosses.html(losses);
            //     gameOver();
            // }
        } else if (score === sumNumValue) {
            wins++;
            totalWins.html(wins);
            alert('You win!');
            gameOver();
        }
        else {
            losses++;
            console.log(losses);
            totalLosses.html(losses);
            alert('You lose!');
            gameOver();
        }
    }



    // Call function
    sumGenerator();
    randomNumberGenerator();

    console.log(gemArray);

    // Setting gems value after number generator
    var yellowGemValue = gemArray[0];
    var blueGemValue = gemArray[1];
    var greenGemValue = gemArray[2];
    var redGemValue = gemArray[3];


    // Game Over Function
    function gameOver() {
        totalScore.html(0);
        gemArray = [];
        score = 0;
        randomArrayNumber = 0;
        yellowGemValue = 0;
        redGemValue = 0;
        blueGemValue = 0;
        greenGemValue = 0;
        sumNumValue = 0;
        sumGenerator();
        randomNumberGenerator();

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









