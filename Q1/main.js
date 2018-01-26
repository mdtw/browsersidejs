var winner = false;
var div = document.getElementById('result');
var clickyArea = document.getElementById('clickable');

clickyArea.addEventListener('click', () => alert("You are today's Winner, Winner, Chicken Dinner - HOORAH!!!"),
        winner == true);

function checkForClicker() {
if (winner == false) {
    result.innerHTML = "<h3>You Loooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooose</h3>";
    }
};

setTimeout(checkForClicker, 1000);


         


 
    