console.log("New");
const formEl = document.querySelector("form");
const passwordEl = document.querySelector("#password");

formEl.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(formEl);

  const formObj = Object.fromEntries(formData);

  console.log(formObj.firstname);
  console.log(formObj);

  const formStringfy = JSON.stringify(formObj);
  localStorage.setItem("form", formStringfy);
        window.location.href = "validate.html";

  // const passwordValidation = () => {
  //   let confirmedPassword;

  //   while (true) {
  //     confirmedPassword = prompt("Kindly, confirm your password");

  //     if (confirmedPassword === formObj.password) {
  //       alert("Password is correct! Redirecting...");
  //       break;
  //     } else {
  //       alert("Your password is incorrect, verify again!");
  //     }
  //   }
  // };

  // passwordValidation();
});
