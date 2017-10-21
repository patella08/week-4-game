$(document).ready(function() {

    crystals =  ["assets/images/crystal(blue).png","assets/images/crystal(pink).png", "assets/images/crystal(purple).png", "assets/images/crystal(yellow).png"]

        var counter = 0;
        var wins = 0;
        var losses = 0;
        $("#win").text(wins);
        $("#loss").text(losses);
        
        newCrystals();
        newGame();
    
        function newCrystals () {
            var numbers = []
                while(numbers.length < 4){
                  var randomNumber = Math.ceil(Math.random()*12)
                  var found = false;
                  for (i = 0; i < numbers.length; i++){
                    if (numbers[i] === randomNumber){
                        found = true; break
                    }
                  }
                  if(!found)numbers[numbers.length]=randomNumber;
                }		
    
            for (i = 0; i < numbers.length; i++) {
                var imageCrystal = $("<img>");
                imageCrystal.attr("data-num", numbers[i]);
                imageCrystal.attr("src", crystals[i]);
                imageCrystal.attr("alt", "crystals");
                imageCrystal.addClass("crystalImage")
                $("#crystals").append(imageCrystal);
            }
        }
    
        function newGame() {
    
            counter = 0;
            $("#yourScore").text(counter);
    
            function randomIntFromInterval(min,max){
                   return Math.floor(Math.random()*(max-min+1)+min);
                }
    
            var numberGuess = randomIntFromInterval(19,120);
    
            $(".value").text(numberGuess);
    
    
            $(".crystalImage").on("click", function(){
                counter = counter + parseInt($(this).data("num"));
               
                $("#yourScore").text(counter);
    
                if (counter == numberGuess){
                  $("#status").text("You won!!!!");
                  wins ++;
                  $("#win").text(wins);
                  $("#crystals").empty();
                  newCrystals();
                  newGame();
                    
                } else if ( counter > numberGuess){
                    $("#status").text("Sorry, You lost! Try Again!!")
                    losses ++;
                    $("#loss").text(losses);
                    $("#crystals").empty();
                    newCrystals();
                    newGame();
                }
            });
        }
    
    });