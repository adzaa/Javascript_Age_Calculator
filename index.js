const day = document.getElementById("day");
const month = document.getElementById("month");
const year = document.getElementById("year");

const input = document.querySelectorAll(".input-container input");
const inputLabel = document.querySelectorAll(".input-container label");

const errorElements = document.querySelectorAll(".error");

const currentYear = new Date().getFullYear();

const output = document.querySelectorAll(".output span");
console.log(output);

const button = document.getElementById("btn");

button.onclick = function () {
  let isValid = true;
  for (let i = 0; i < errorElements.length; i++) {
    if (input[i].value === "") {
      errorElements[i].style.display = "block";
      errorElements[i].innerHTML = "The field is required";
      input[i].style.border = "1px solid var(--light-red)";
      inputLabel[i].style.color = "var(--light-red)";
      isValid = false;
    } else {
      errorElements[i].style.display = "";
      input[i].style.border = "";
      inputLabel[i].style.color = "";
    }
  }

  if (isValid) {
    const monthValue = parseInt(month.value);
    const dayValue = parseInt(day.value);

    if (
      (monthValue === 4 ||
        monthValue === 6 ||
        monthValue === 9 ||
        monthValue === 11) &&
      dayValue > 30
    ) {
      errorElements[0].style.display = "block";
      errorElements[0].innerHTML = "Must be a valid day";
      input[0].style.border = "1px solid var(--light-red)";
      inputLabel[0].style.color = "var(--light-red)";
      isValid = false;
    } else if (monthValue === 2 && dayValue > 29) {
      errorElements[0].style.display = "block";
      errorElements[0].innerHTML = "Must be a valid day";
      input[0].style.border = "1px solid var(--light-red)";
      inputLabel[0].style.color = "var(--light-red)";
      isValid = false;
    } else if (dayValue > 31) {
      errorElements[0].style.display = "block";
      errorElements[0].innerHTML = "Must be a valid day";
      input[0].style.border = "1px solid var(--light-red)";
      inputLabel[0].style.color = "var(--light-red)";
      isValid = false;
    }
  }

  if (month.value === "") {
    errorElements[1].style.display = "block";
    errorElements[1].innerHTML = "The field is required";
    input[1].style.border = "1px solid var(--light-red)";
    inputLabel[1].style.color = "var(--light-red)";
    isValid = false;
  } else if (parseInt(month.value) > 12) {
    errorElements[1].style.display = "block";
    errorElements[1].innerHTML = "Must be a valid month";
    input[1].style.border = "1px solid var(--light-red)";
    inputLabel[1].style.color = "var(--light-red)";
    isValid = false;
  }
  if (year.value === "") {
    errorElements[2].style.display = "block";
    errorElements[2].innerHTML = "The field is required";
    input[2].style.border = "1px solid var(--light-red)";
    inputLabel[2].style.color = "var(--light-red)";
    isValid = false;
  } else if (parseInt(year.value) > currentYear) {
    errorElements[2].style.display = "block";
    errorElements[2].innerHTML = "Must be a valid year";
    input[2].style.border = "1px solid var(--light-red)";
    inputLabel[2].style.color = "var(--light-red)";
    isValid = false;
  }

  if (isValid) {
    const currentDate = new Date();
    const birthDate = new Date(year.value, month.value - 1, day.value);

    let age = currentDate.getFullYear() - birthDate.getFullYear();

    if (currentDate.getMonth() < birthDate.getMonth()) {
      age--;
    } else if (
      currentDate.getMonth() === birthDate.getMonth() &&
      currentDate.getDate() < birthDate.getDate()
    ) {
      age--;
    }

    let diffMonths = currentDate.getMonth() + 1 - (birthDate.getMonth() + 1);
    let diffDays = currentDate.getDate() - birthDate.getDate();
    if (diffDays < 0) {
      const daysInPrevMonth = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        0
      ).getDate();
      diffDays += daysInPrevMonth;
      diffMonths--;
    }
    if (diffMonths < 0) {
      diffMonths += 12;
    }

    output[0].innerHTML = age;
    output[1].innerHTML = diffMonths;
    output[2].innerHTML = diffDays;
  } else {
    output[0].innerHTML = "--";
    output[1].innerHTML = "--";
    output[2].innerHTML = "--";
  }
};
