window.onload = function () {
    let targetNumber = Math.floor(Math.random() * 10) + 1;
    let count = 1;


    function init() {
        document.getElementById("form").addEventListener("submit", (event) => {
            event.preventDefault();
            let value = document.getElementById("number").value
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
        console.log("The right number! You win!")
    }

    function showError() {
        console.log("Your guess is incorrect")
        count++;
        //console.log(count)
    }

    function showLoss() {
        console.log("Sorry, you lose...")
    }

    init();
}