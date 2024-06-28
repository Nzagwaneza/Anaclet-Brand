let displayAllUsersBtn = document.getElementById("dash-all-users");
displayAllUsersBtn.addEventListener("click", renderUsers);
const AllUsers = JSON.parse(localStorage.getItem("Users")) || {};
const verySortedKeys = Object.keys(AllUsers).sort((a, b) => b - a);

function showDeletePopupForUser(key) {
  const popup = document.getElementById("popup");
  popup.classList.add("activated");

  document.getElementById("confirmAlert").addEventListener("click", (e) => {
    e.preventDefault();

    // this is a collection of codes designed to delete the user
    if (!AllUsers.hasOwnProperty(key)) {
      console.error(`User with key ${key} does not exist.`);
      return;
    }
    delete AllUsers[key];
    updateUserLocalStorage();
    document.getElementById("popup").classList.remove("activated");
    renderUsers();
    popup.classList.remove("activated");
  });
  document.getElementById("StopDefault").onclick = () =>
    popup.classList.remove("activated");
}

function updateUserLocalStorage() {
  localStorage.setItem("Users", JSON.stringify(AllUsers));
}

function changeRole(key) {
  const user = AllUsers[key];
  const popup2 = document.getElementById("popup2");
  const yesBtn2 = document.getElementById("confirmAlert2");
  const noBtn2 = document.getElementById("StopDefault2");

  popup2.classList.add("activated");

  const confirmChange = () => {
    popup2.classList.remove("activated");
    user.role = user.role === "user" ? "admin" : "user";
    updateUserLocalStorage();
    renderUsers();
    yesBtn2.removeEventListener("click", confirmChange);
  };

  const cancelChange = (e) => {
    e.preventDefault();
    popup2.classList.remove("activated");
    noBtn2.removeEventListener("click", cancelChange);
  };

  yesBtn2.addEventListener("click", confirmChange);
  noBtn2.addEventListener("click", cancelChange);
}
