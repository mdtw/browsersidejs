var winner = false;
var loser = false;
var div = document.getElementById('result');
var clickyArea = document.getElementById('clickable');
// var clickyArea2 = document.getElementById('clickable');
var mathrand = Math.random() * (3000 - 1000) + 1000;
var button = document.getElementById('button');
button.style.display = "";  
button.innerHTML = "<h1>!! CLICK HERE TO START !!</h1>"; 

var booton = document.getElementById('reload')
booton.style.display = 'none';
booton.innerHTML = "<h2>So much fun right? Start again?</h2>";

result.innerHTML = "<h1>Random Timer Will Activate After You Click Start Button!!</h1> <br> <h2> Round and Round it goes, 1 - 3 seconds but no one really knows...<br><br>Once it stops you have 0.5seconds to mouse click or depress the space bar!!!</h2>";



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
        
    function reloadButton() {
        booton.style.display = "";
        booton.addEventListener('click', () => { window.location.reload() });
    }

    function gameStarted() {
        button.style.display = "none";
        result.innerHTML = "<h1>GO GO GO GO GO GO!!!</h1><br><h1>GO GO GO GO GO GO!!!</h1><br><h1>GO GO GO GO GO GO!!!</h1><br>";

        clickyArea.addEventListener('click', () => { checkForWinner() });

        clickyArea.addEventListener('keypress', (event) => {
        if (event.charCode == 32) { checkForWinner() };
        }) 
        
    setTimeout(checkForLoser, 500);

    }      

button.addEventListener('click', () => {
    setTimeout(gameStarted, mathrand)
    });

