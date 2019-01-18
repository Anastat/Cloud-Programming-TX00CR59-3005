window.onload = function () {
    let targetNumber = Math.floor(Math.random() * 10) + 1;
    let count = 1;


    function init() {


        document.getElementById("form").addEventListener("submit", (event) => {
            event.preventDefault();

            let value = document.getElementById("number").value;
            //console.log(value, targetNumber)
            check(value);
        })

    }

    function check(value) {
        if (value == targetNumber) showWin();
        else if (count == 5) showLoss();
        else showError();
    }

    function showWin() {
        document.getElementById("form").style.visibility = "hidden";
        document.getElementById("message").innerHTML = "The right number! You win!";
    }

    function showError() {
        document.getElementById("message").innerHTML = "Your guess is incorrect. Try again...";
        count++;
        document.getElementById("form").reset();
        //console.log(count)
    }

    function showLoss() {
        document.getElementById("form").style.visibility = "hidden";
        document.getElementById("message").innerHTML = "Sorry, you lose...";
    }

    init();
}