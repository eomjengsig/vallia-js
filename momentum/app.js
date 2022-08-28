const age = parseInt(prompt("How old are you?"));

if (isNaN(age) || age < 0) {
  console.log("Only positive number,please.");
} else if (age < 18) {
  console.log("You are too young.");
} else if (age >= 18 && age <= 50) {
  console.log("You can drink.");
} else if (age === 100) {
  console.log("WoW!");
} else if (age > 50) {
  console.log("Stop drink.");
}

// if((a && b) || (c && d)) {} 이렇게도 가능
