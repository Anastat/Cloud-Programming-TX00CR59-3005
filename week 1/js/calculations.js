function multiplyBy() {
    // check the input
    let num1 = document.getElementById("firstNumber").value;
    let num2 = document.getElementById("secondNumber").value;

    if (isNaN(num1) || isNaN(num2)) {
        window.alert("Please, enter a number")
    } else {
        document.getElementById("result").innerHTML = num1 * num2;
        console.log(num1 * num2);
    }

}

function divideBy() {
    // check the input
    let num1 = document.getElementById("firstNumber").value;
    let num2 = document.getElementById("secondNumber").value;

    if (isNaN(num1) || isNaN(num2)) {
        window.alert("Please, enter a number")
    } else if (num2 === 0) {
        window.alert("You can't divide by 0")
    } else {
        return document.getElementById("result").innerHTML = num1 / num2;
    }
}