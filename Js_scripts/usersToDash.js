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
            <button class="dash-delete-user" data-key="${key}">Delete</button>
        </div> 
    `;
    usersContainer.appendChild(userElement);
  });
  window.renderUsers = renderUsers;
  document.querySelectorAll(".dash-delete-user").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const key = e.target.getAttribute("data-key");
      showDeletePopup(key);
    });
  });
}

function showDeletePopup(key) {
  const popup = document.getElementById("popup");
  popup.innerHTML = `
      <div class="pop-box">
          <span>Please confirm: Proceed with deletion?</span>
          <div>
            <button id="StopDefault">Return</button>
            <button id="confirmAlert">Yes</button>
          </div>
        </div>
  `;
  const yesBtn = document.getElementById("confirmAlert");
  const noBtn = document.getElementById("StopDefault");

  popup.classList.add("activated");

  const confirmDelete = () => {
    deleteUser(key);
    popup.classList.remove("activated");
    // FIXME: i have to add to check who is going to change user's role.
    yesBtn.removeEventListener("click", confirmDelete);
  };

  const cancelDelete = () => {
    popup.classList.remove("activated");
    noBtn.removeEventListener("click", cancelDelete);
  };

  yesBtn.addEventListener("click", confirmDelete);
  noBtn.addEventListener("click", cancelDelete);
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
  const popup = document.getElementById("popup");
  popup.innerHTML = `
    <div class="pop-box">
      <span>Who are you?</span>
      <input id="Username"  name="Username" type="text"placeholder="Enter your Username"/>
      <div>
        <button id="StopDefault">Return</button>
        <button id="confirmAlert">Change</button>
      </div>
    </div>
  `;
  const yesBtn = document.getElementById("confirmAlert");
  const noBtn = document.getElementById("StopDefault");

  popup.classList.add("activated");

  const confirmChange = () => {
    popup.classList.remove("activated");
    if (user.role === "user") {
      user.role = "admin";
      updateUserLocalStorage();
      renderUsers();
    } else {
      user.role = "user";
      updateUserLocalStorage();
      renderUsers();
    }
    yesBtn.removeEventListener("click", confirmChange);
  };

  const cancelChange = (e) => {
    e.preventDefault();
    popup.classList.remove("activated");
    noBtn.removeEventListener("click", cancelChange);
  };

  yesBtn.addEventListener("click", confirmChange);
  noBtn.addEventListener("click", cancelChange);
}
