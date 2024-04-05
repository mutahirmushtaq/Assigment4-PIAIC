// Q no. 13 - check if given year is a leop year.

// Answer

let year = 2024;
if ((year % 4 === 0 && 100) || year % 400 === 0) {
  console.log(year + "is a leop year");
} else {
  console.log(year + "is not a leop yaer");
}
