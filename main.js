// First question
while (true) {
  let userInput = prompt("Enter your age:");

  if (userInput === null || isNaN(userInput)) {
    alert("Invalid input. Please enter a valid age.");
    continue;
  }

  let age = parseInt(userInput);
  if (age < 0 || age == undefined) {
    alert("Invalid input. Please enter a positive age.");
    continue;
  }

  if (age >= 1 && age <= 10) {
    alert("Child");
  } else if (age >= 11 && age <= 18) {
    alert("Teenager");
  } else if (age >= 19 && age <= 50) {
    alert("Grown up");
  } else {
    alert("Old");
  }

  let tryAgain = confirm("Do you want to enter another age?");

  if (!tryAgain) {
    break;
  }
}
// --------------------------------------------------------------------------
// Second question
let userInput = prompt("Enter a string:");
let vowelCount = 0;

if (userInput === null) {
  alert("Invalid input. Please enter a valid string.");
} else {
  let lowercasedString = userInput.toLowerCase();

  for (let char of lowercasedString) {
    if (
      char === "a" ||
      char === "e" ||
      char === "o" ||
      char === "u" ||
      char === "i"
    ) {
      vowelCount++;
    }
  }

  alert(`The number of vowels in the string is: ${vowelCount}`);
}
//  --------------------------------------------------------------------------
// Third question
function convertHour(hour) {
  if (hour < 0 || hour > 23) {
    return "Invalid hour";
  }

  if (hour === 0) {
    return "12AM";
  } else if (hour >= 1 && hour <= 11) {
    return `${hour}AM`;
  } else if (hour === 12) {
    return "12PM";
  } else {
    return `${hour - 12}PM`;
  }
}

let inputHour = prompt("Enter the hour in 24-hour format:");

if (inputHour === null || isNaN(inputHour)) {
  alert("Invalid value. Please enter a valid value.");
} else {
  let hour = parseInt(inputHour);
  let result = convertHour(hour);

  if (result === "Invalid hour") {
    alert("Invalid value. Please enter a value between 0 and 23.");
  } else {
    alert(`Converted hour is: ${result}`);
  }
}
