let displayAllSubscribersBtn = document.getElementById("dash-all-Subscribers");
const AllSubscribers = JSON.parse(localStorage.getItem("Subscribers")) || {};
const reversedKeys = Object.keys(AllSubscribers).sort((a, b) => b - a);

function renderSubscribers(e) {
  if (e) {
    e.preventDefault();
  }
  const subscribersContainers = document.getElementsByClassName(
    "dash-container-modification-area"
  );

  if (subscribersContainers.length === 0) {
    console.error(
      "No container found with the class 'dash-container-modification-area'"
    );
    return;
  }

  const subscribersContainer = subscribersContainers[0];
  subscribersContainer.innerHTML = "";

  //this  subscriberListingTitle add General Title
  const subscriberListingTitle = document.createElement("div");
  subscriberListingTitle.className = "dash-listing-title";

  subscriberListingTitle.innerHTML = `
    List of all Subscribers
  `;

  subscribersContainer.appendChild(subscriberListingTitle);

  reversedKeys.forEach((key) => {
    const subscriber = AllSubscribers[key];
    const subscriberElement = document.createElement("div");
    subscriberElement.className = "dash-for-every-user";
    subscriberElement.innerHTML = `
        <div class="user-to-change">
            <div>
            <strong>Email: </strong><user>${subscriber.email}</user>
            </div>
        </div>
        <div class="modification-option">
            <button class="dash-delete-user" onclick="deleteSubscriber('${key}')">Delete</button>
        </div> 
    `;
    subscribersContainer.appendChild(subscriberElement);
  });
}

function deleteSubscriber(key) {
  if (!AllSubscribers.hasOwnProperty(key)) {
    console.error(`subscriber with key ${key} does not exist.`);
    return;
  }
  delete AllSubscribers[key];
  updateSubscriberLocalStorage();
  renderSubscribers();
}

function updateSubscriberLocalStorage() {
  localStorage.setItem("Subscribers", JSON.stringify(AllSubscribers));
}

if (displayAllSubscribersBtn) {
  displayAllSubscribersBtn.addEventListener("click", renderSubscribers);
}
