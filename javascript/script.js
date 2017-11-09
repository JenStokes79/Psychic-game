
// Creates an array that lists out all of the options (Rock, Paper, or Scissors).
    var computerChoices = ["a", "b", "c", "d",
    						"e", "f", "g", "h",
    						"i", "j", "k", "l",
    						"m", "n", "o", "p",
    						"q", "r", "s", "t",
    						"u", "v", "w", "x",
    						"y", "z"];

    var countDown = 10; 
    var myScore = 0;  
    var start = computerChoices;    

    // This function is run whenever the user presses a key.
    document.onkeyup = function(event) {


      // Determines which key was pressed.
      var userGuess = event.key;

      // Randomly chooses a choice from the options array. This is the Computer's guess.
      var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
      console.log(computerGuess)

    
      // displays the key the user pressed (userGuess).
    	document.getElementById("docLetters").innerHTML = userGuess;
      if (userGuess == computerGuess) {
        alert("you win");
        userGuess ++;
        function start(){
          Program.restart();
        }
        }
        console.log(start)


    	//conditions


    	if (userGuess === computerGuess) {
       document.getElementById("docWin").innerHTML = +1

        }

    };