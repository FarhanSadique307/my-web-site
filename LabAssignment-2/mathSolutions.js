
function myFunction() {
    let a = parseFloat(document.getElementById("num1").value)
    let b = parseFloat(document.getElementById("num2").value)
    let c = parseFloat(document.getElementById("num3").value)

    let resultDisplay = document.getElementById("resultDisplay");

    // parseFloat(document.getElementById('answer').value=sum);
    let bPower =Math.pow(b,2);
    let fourAc =(4 * a * c);
    let squareResult=(bPower - fourAc);
    let squareRoot = Math.sqrt(squareResult);
    let nominator=(a * 2);

    if (isNaN (squareRoot) === true) {
        resultDisplay.innerHTML = "Impossible to display "
    }
    else{
        let result1 = (-b - squareRoot) / (nominator);
        let result2 = (-b + squareRoot) / (nominator);
        resultDisplay.innerHTML = "X =" + result1 + "X =" + result2;
    }
}