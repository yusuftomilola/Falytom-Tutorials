const hint =
  "Password must be at least 8 characters long and include a number.";

const passwordField = document.getElementById("passwordField");
const passwordHint = document.getElementById("passwordHint");

passwordField.addEventListener("mouseover", () => {
  passwordHint.textContent = hint;
  passwordHint.style.display = "block";
});

passwordField.addEventListener("mouseout", () => {
  passwordHint.style.display = "none";
});
