const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = "form-control error";
  const small = formControl.querySelector("small");
  small.innerText = message;
}
function showSucess(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}
function checkEmail(input) {
  const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (re.test(input.value.trim())) {
    showSucess(input);
  } else {
    showError(input, `this is not a valid email`);
  }
}
function checkRequired(inputArray) {
  inputArray.forEach(function (input) {
    console.log(input.id);
    if (input.value === "") {
      showError(input, `${getFieldId(input)} is required`);
    } else {
      showSucess(input);
    }
  });
}
function checkLength(input, min, max) {
  if (input.value.length < min) {
    showError(input, `${getFieldId(input)}needs to be least ${min} characters`);
  } else if (input.value.length > max) {
    showError(input,`${getFieldId(input)}needs to be less than  ${max} characters`);
  } else {
    showSucess(input);
  }
}

function getFieldId(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}
function checkPasswordsMatch(input1, input2) {
  if (input1.value !== input2.value) {
    showError(input2, `password don't match`);
  }
}

form.addEventListener("submit", function (e) {
  e.preventDefault();

  checkRequired([username, email, password, password2]);
  checkLength(username, 3, 10);
  checkLength(password, 6, 30);
  checkEmail(email);
  checkPasswordsMatch(password, password2);
});

