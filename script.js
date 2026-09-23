var hourlyWage = prompt("What is the hourly wage? (ex. 25.50)");

var hoursWorkedWeek = prompt("How many hours are worked in a week? (ex. 40)");

console.log(
  `Weekly pay before taxes is $${(hourlyWage * hoursWorkedWeek).toFixed(2)}.`
);
