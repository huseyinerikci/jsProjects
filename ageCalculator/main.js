const userInput = document.getElementById("date");
//limiting the maximum value of a date input to today's date
userInput.max = new Date().toISOString().split("T")[0];

const calcBtn = document.getElementById("calc");
const result = document.getElementById("result");

function calculateAge() {
  let birthdate = new Date(userInput.value);

  let day1 = birthdate.getDate();
  let month1 = birthdate.getMonth() + 1;
  let year1 = birthdate.getFullYear();

  let today = new Date();

  let day2 = today.getDate();
  let month2 = today.getMonth() + 1;
  let year2 = today.getFullYear();

  let day, month, year;
  year = year2 - year1;

  if (month2 >= month1) {
    month = month2 - month1;
  } else {
    year--;
    month = 12 + month2 - month1;
  }

  if (day2 >= day1) {
    day = day2 - day1;
  } else {
    month--;
    day = getDaysInMonth(year1, month1) + day2 - day1;
  }
  if (month < 0) {
    month = 11;
    year--;
  }

  result.innerHTML = `You are <span>${year}</span> years, <span>${month}</span> months and <span>${day}</span> days old.`;
}

function getDaysInMonth(year, month) {
  return new Date(year, month, 0).getDate();
}

calcBtn.addEventListener("click", calculateAge);
