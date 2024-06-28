// let displayAllUsersBtn = document.getElementById("dash-all-users");
// displayAllUsersBtn.addEventListener("click", renderUsers);
// const AllUsers = JSON.parse(localStorage.getItem("Users")) || {};

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

  const UserListingTitle = document.createElement("div");
  UserListingTitle.className = "dash-listing-title";
  UserListingTitle.innerHTML = "List of all Users";
  usersContainer.appendChild(UserListingTitle);
  const sortedKeys = Object.keys(AllUsers).sort((a, b) => b - a);

  if (sortedKeys.length === 0) {
    const noUserElement = document.createElement("div");
    noUserElement.className = "dash-empty-display";
    noUserElement.innerText = "No user yet Signed-up";
    usersContainer.appendChild(noUserElement);
  } else {
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
          <button class="dash-delete-user"  data-key="${key}">Delete</button>
      </div>
       `;
      usersContainer.appendChild(userElement);
    });
  }

  document.querySelectorAll(".dash-delete-user").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const key = e.target.getAttribute("data-key");
      showDeletePopupForUser(key);
    });
  });
}
