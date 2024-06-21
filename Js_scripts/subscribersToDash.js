document.addEventListener("DOMContentLoaded", () => {
  const displayAllSubscribersBtn = document.getElementById(
    "dash-all-Subscribers"
  );
  if (displayAllSubscribersBtn) {
    displayAllSubscribersBtn.addEventListener("click", renderSubscribers);
  }
});

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

  const AllSubscribers = JSON.parse(localStorage.getItem("Subscribers")) || {};
  const reversedKeys = Object.keys(AllSubscribers).sort((a, b) => b - a);

  // Add General Title
  const subscriberListingTitle = document.createElement("div");
  subscriberListingTitle.className = "dash-listing-title";
  subscriberListingTitle.innerHTML = `List of all Subscribers`;

  subscribersContainer.appendChild(subscriberListingTitle);

  reversedKeys.forEach((key) => {
    const subscriber = AllSubscribers[key];
    if (subscriber) {
      // Ensure subscriber is defined
      const subscriberElement = document.createElement("div");
      subscriberElement.className = "dash-for-every-user";
      subscriberElement.innerHTML = `
        <div class="user-to-change">
          <div>
            <strong>Email: </strong><user>${subscriber.email}</user>
          </div>
        </div>
        <div class="modification-option">
          <button class="dash-delete-user" data-key="${key}">Delete</button>
        </div>
      `;
      subscribersContainer.appendChild(subscriberElement);
    } else {
      console.error(`Subscriber with key ${key} is undefined.`);
    }
  });

  document.querySelectorAll(".dash-delete-user").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const key = e.target.getAttribute("data-key");
      showDeletePopup(key);
    });
  });
}

function showDeletePopup(key) {
  const popup = document.getElementById("popup");
  const yesBtn = document.getElementById("confirmAlert");
  const noBtn = document.getElementById("StopDefault");

  popup.classList.add("activated");

  const confirmDelete = () => {
    deleteSubscriber(key);
    popup.classList.remove("activated");
    yesBtn.removeEventListener("click", confirmDelete);
  };

  const cancelDelete = () => {
    popup.classList.remove("activated");
    noBtn.removeEventListener("click", cancelDelete);
  };

  yesBtn.addEventListener("click", confirmDelete);
  noBtn.addEventListener("click", cancelDelete);
}

function deleteSubscriber(key) {
  const AllSubscribers = JSON.parse(localStorage.getItem("Subscribers")) || {};
  if (!AllSubscribers.hasOwnProperty(key)) {
    return;
  }
  delete AllSubscribers[key];
  updateSubscriberLocalStorage(AllSubscribers);
  renderSubscribers();
}

function updateSubscriberLocalStorage(AllSubscribers) {
  localStorage.setItem("Subscribers", JSON.stringify(AllSubscribers));
}

function replyToEmail(email) {
  window.location.href = `mailto:${email}`;
}
