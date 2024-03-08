var newNumber1 = parseInt(prompt("Enter a number:"));

if ((newNumber1)) {
    var newNumber2 = [];

    for (var i = 1; i <= 10; i++) {
        newNumber2 = console.log(newNumber1 * i);
    }

    console.log("You Type Correct Number", newNumber2);
} else {
    console.log("Invalid input");
}