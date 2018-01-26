var winner = false;
var loser = false;
var div = document.getElementById('result');
var clickyArea = document.getElementById('clickable');
var mathrand = Math.random() * (3000 - 1000) + 1000;
var button = document.getElementById('button');
button.style.display = 'none';
button.style.left = (150 + Math.random() * 400) + 'px';
button.style.top = (150 + Math.random() * 400) + 'px';  

result.innerHTML = "<h1>Random Timer Active!!</h1><br><h2>Round and Round it goes...<br><br>Once it stops you have</h2><h1>1.5seconds</h1><h2>to click ONLY the button!!!</h2>";


function checkForLoser() {
    button.style.display = 'none';
    if (winner) return;
    loser = true;
    result.innerHTML = "<h1>You Leh-ooooo-ooooo-ooooo-ooooo-oooose</h1>";          
    }
    
function checkForWinner() {
    winner = true;
    result.innerHTML = "<h1>You are today's Winner, Winner, Chicken Dinner - HOORAH!!!</h1>";     
    }
        
    function gameStarted() {
    result.innerHTML = "<h1>GO GO GO GO GO GO!!!</h1><br><h1>GO GO GO GO GO GO!!!</h1><br><h1>GO GO GO GO GO GO!!!</h1><br>";
    button.style.display = "";  
    button.innerHTML = "<h1>CLICCKKKKKKKYYYYY HERE!!!!!!</h1>"; 
    
    // result.appendChild(button);

    clickyArea.addEventListener('click', () => { checkForLoser() });
    button.addEventListener('click', () => { checkForWinner() } );    
    
    setTimeout(checkForLoser, 1500);

    }      

setTimeout(gameStarted, mathrand);

