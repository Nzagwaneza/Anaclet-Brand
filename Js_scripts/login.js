let usernameInput = document.getElementById("Username");
let passwordInput = document.getElementById("Password");
let loginMessage = document.querySelector("#login-message");
let loginBtn = document.getElementById("loginButton");

const AllUsers = JSON.parse(localStorage.getItem("Users")) || {};

document.addEventListener("DOMContentLoaded", () => {
  loginBtn.addEventListener("click", (e) => {
    e.preventDefault();

    const enteredUsername = usernameInput.value.trim();
    const enteredPassword = passwordInput.value.trim();

    let userFound = false;
    for (const key in AllUsers) {
      const user = AllUsers[key];
      if (user.username === enteredUsername) {
        userFound = true;
        if (user.password === enteredPassword) {
          loginMessage.innerText = "Login successful";
          loginMessage.className = "success";
          usernameInput === "";
          passwordInput === "";

          setTimeout(() => {
            window.location.href = "index.html";
          }, 1000);

          return;
        } else {
          loginMessage.innerText = "Incorrect Password";
          loginMessage.className = "error";
          passwordInput.style.borderBottomColor = "red";
          setTimeout(() => {
            passwordInput.style.borderBottomColor = "";
          }, 2500);
          return;
        }
      }
    }

    if (!userFound) {
      loginMessage.innerText = "Incorrect Username";
      loginMessage.className = "error";
      usernameInput.style.borderBottomColor = "red";
      setTimeout(() => {
        usernameInput.style.borderBottomColor = "";
      }, 2500);
    }
  });
});

function forUsersOnly() {
  if (user.password === "admin") {
    let toDash = document.getElementById("dashboard");
    let mainDash = document.querySelector(".dash-container");
    mainDash.style.display = "none";
    toDash.style.display = "none";
  }
}
