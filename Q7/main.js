var winner = false;
var loser = false;
var div = document.getElementById('result');
var clickyArea = document.getElementById('clickable');
var mathrand = Math.random() * (3000 - 1000) + 1000;
var button = document.getElementById('button');
    button.style.display = "";  
    button.innerHTML = "<h1>!! CLICK HERE TO START !!</h1>"; 

var totalGameButtons = Math.round(Math.random() * (10 - 1) + 1);
var totalButtsClicked = 0;
var buttonsArray = [];

var bootton = document.getElementById('reload')
bootton.style.display = 'none';
bootton.innerHTML = "<h2>So much fun right? Start again?</h2>";

result.innerHTML = "<h1>Random Timer Will Activate After You Click Start Button!!</h1> <br> <h2> Round and Round it goes, 1 - 3 seconds but no one really knows...<br><br>Once it stops you have to click ALL of the buttons!!!</h2>"


function reloadButton() {
    bootton.style.display = "";
    bootton.addEventListener('click', () => { window.location.reload() });
}


function checkForLoser() {
    if (winner) return;
    loser = true;
    result.innerHTML = "<h1>You Leh-ooooo-ooooo-ooooo-ooooo-oooose</h1>";   
    reloadButton();   
    }
    
function checkForWinner() {
    winner = true;
    result.innerHTML = "<h1>You are today's Winner, Winner, Chicken Dinner - HOORAH!!!</h1>";
    reloadButton();   
    }
        

    function gameStarted() {
        button.style.display = "none";
        result.innerHTML = "<h1>GO GO GO GO GO GO!!!</h1><br><h1>GO GO GO GO GO GO!!!</h1><br><h1>GO GO GO GO GO GO!!!</h1><br>";
        
        function clickableButtons() {
        
            var gamebutton = document.createElement('button');
                gamebutton.style.display = " ";
                gamebutton.style.position = "absolute"
                gamebutton.style.left = (100 + Math.random() * 400) + 'px';
                gamebutton.style.top = (100 + Math.random() * 400) + 'px';
                gamebutton.innerHTML = "<h3>Click Me HURRY!!</h3>";
                
                gamebutton.addEventListener('click', event => { event.stopPropagation();
                totalButtsClicked++;
                gamebutton.style.display = "none";
                
                if (totalButtsClicked == totalGameButtons) { checkForWinner(); }
            })
            
            buttonsArray.push(gamebutton);
            clickable.appendChild(gamebutton);
        }
        
            for (var i = 0; i < totalGameButtons; i++) {
                clickableButtons();
        }

        buttonsArray.forEach(gamebutton => { gamebutton.style.display = " "; });

        clickyArea.addEventListener('click', () => { checkForLoser() });

    


        // clickyArea.addEventListener('keypress', (event) => {
        // if (event.charCode == 32) { checkForWinner() };
        // }) 
        
    setTimeout(checkForLoser, 1000 + 400 * totalGameButtons);

    }      

button.addEventListener('click', () => {
    setTimeout(gameStarted, mathrand)
    });

