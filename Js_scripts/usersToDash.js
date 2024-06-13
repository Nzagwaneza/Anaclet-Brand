let displayAllUsersBtn = document.getElementById("dash-all-users");
displayAllUsersBtn.addEventListener("click", renderUsers);
const AllUsers = JSON.parse(localStorage.getItem("Users")) || {};
const sortedKeys = Object.keys(AllUsers).sort((a, b) => b - a);

function renderUsers() {
  const usersContainers = document.getElementsByClassName(
    "dash-container-modification-area"
  );

  if (usersContainers.length === 0) {
    console.error(
      "No container found with the class 'dash-container-modification-area'"
    );
    return;
  }

  const usersContainer = usersContainers[0];
  usersContainer.innerHTML = "";

  //this  UserListingTitle add General Title
  const UserListingTitle = document.createElement("div");
  UserListingTitle.className = "dash-listing-title";

  UserListingTitle.innerHTML = `
    List of all Users
  `;

  usersContainer.appendChild(UserListingTitle);

  sortedKeys.forEach((key) => {
    const user = AllUsers[key];
    const userElement = document.createElement("div");
    userElement.className = "dash-for-every-user";
    userElement.innerHTML = `
        <div class="user-to-change">
            <div>
            <strong>Username: </strong><user>${user.username}</user>
            </div>
            <div><strong>Role: </strong><role>${user.role}</role></div>
        </div>
        <div class="modification-option">
            <button class="dash-change-role-btn" onclick="changeRole('${key}')">Change</button>
            <button class="dash-delete-user" onclick="deleteUser('${key}')">Delete</button>
        </div> 
    `;
    usersContainer.appendChild(userElement);
  });
  window.renderUsers = renderUsers;
}

function deleteUser(key) {
  if (!AllUsers.hasOwnProperty(key)) {
    console.error(`user with key ${key} does not exist.`);
    return;
  }
  delete AllUsers[key];
  updateUserLocalStorage();
  renderUsers();
}

function updateUserLocalStorage() {
  localStorage.setItem("Users", JSON.stringify(AllUsers));
  window.updateUserLocalStorage = updateUserLocalStorage;
}

function changeRole(key) {
  const user = AllUsers[key];

  if (user.role === "user") {
    user.role = "admin";
    renderUsers();
    const YourPassword = prompt("Enter the admin password to change the role:");
  } else {
    const enteredPassword = prompt(
      "Enter the admin password to change the role:"
    );
    user.role = "user";
    renderUsers();
  }
}
