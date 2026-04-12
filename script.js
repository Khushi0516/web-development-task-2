// 1. Color Change Button
function changeColor() {
    let button = document.getElementById("colorBtn");

    if (button.style.backgroundColor === "red") {
        button.style.backgroundColor = "#4a6cf7";
        button.innerText = "Click to Change Color";
    } else {
        button.style.backgroundColor = "red";
        button.innerText = "Color Changed!";
    }
}

// 2. Time-Based Greeting
function showGreeting() {
    let hour = new Date().getHours();
    let message = "";
    let greetingText = document.getElementById("greetingText");

    if (hour < 12) {
        message = "Good Morning Dear! ☀️";
    } else if (hour < 17) {
        message = "Good Afternoon Dear! 🌤️";
    } else if (hour < 21) {
        message = "Good Evening Dear! 🌇";
    } else {
        message = "Good Night Dear! 🌙";
    }

    alert(message);
    greetingText.innerText = message;
}

// 3. Smart Calculator
function calculate(operator) {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let result = document.getElementById("result");

    if (isNaN(num1) || isNaN(num2)) {
        result.innerText = "Result: Please enter valid numbers!";
        return;
    }

    let answer;

    switch (operator) {
        case '+':
            answer = num1 + num2;
            break;
        case '-':
            answer = num1 - num2;
            break;
        case '*':
            answer = num1 * num2;
            break;
        case '/':
            if (num2 === 0) {
                result.innerText = "Result: Cannot divide by zero!";
                return;
            }
            answer = num1 / num2;
            break;
        default:
            result.innerText = "Result: Invalid operation!";
            return;
    }

    result.innerText = "Result: " + answer;
}

// 4. Clear Calculator
function clearCalculator() {
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
    document.getElementById("result").innerText = "Result: ";
}