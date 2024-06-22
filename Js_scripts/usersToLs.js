document.addEventListener("DOMContentLoaded", () => {
  let AllUsers = JSON.parse(localStorage.getItem("Users")) || {};
  let usernameInput = document.getElementById("Username");
  let passwordInput = document.getElementById("Password");
  let confirmInput = document.getElementById("ConfirmPassword");
  let signMessage = document.querySelector("#sign-message");

  let SignBtn = document.querySelector(".signup");

  SignBtn.addEventListener("click", (e) => {
    e.preventDefault();

    if (
      passwordInput.value.trim() === "" ||
      passwordInput.value.trim() === "" ||
      confirmInput.value.trim() === ""
    ) {
      signMessage.innerHTML = `Please fill in this form correctly`;
      return;
    }

    if (passwordInput.value.trim().length < 8) {
      signMessage.innerHTML = `Password must be at least 8 chars.`;
      passwordInput.style.borderBottomColor = "red";
      confirmInput.style.borderBottomColor = "red";
      setTimeout(() => {
        passwordInput.style.borderBottomColor = "";
        confirmInput.style.borderBottomColor = "";
      }, 2500);

      return;
    }

    if (passwordInput.value.trim() !== confirmInput.value.trim()) {
      signMessage.innerHTML = `Password mismatching`;
      passwordInput.style.borderBottomColor = "red";
      confirmInput.style.borderBottomColor = "red";
      setTimeout(() => {
        passwordInput.style.borderBottomColor = "";
        confirmInput.style.borderBottomColor = "";
      }, 2500);
      return;
    } else {
      signMessage.style.color = "green";
      signMessage.innerHTML = `Account created successfully!`;
      signMessage.style.color = "";
    }

    const UserId = new Date().getTime().toString();
    const user = {
      username: usernameInput.value.trim(),
      password: passwordInput.value.trim(),
      role: "user",
    };

    AllUsers[UserId] = user;
    console.log("user created successfully!");

    function updateUserLocalStorage(e) {
      e.preventDefault();
      localStorage.setItem("Users", JSON.stringify(AllUsers));
      window.updateUserLocalStorage = updateUserLocalStorage;
    }
    updateUserLocalStorage(e);
    console.log("user created successfully!");
    setTimeout(() => {
      signMessage.style.color = "";
      window.location.href = "Login.html";
    }, 2000);
  });
});
