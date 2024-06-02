displayAllMessagesBtn.addEventListener("click", renderMessages);

function renderMessages() {
  const messagesContainers = document.getElementsByClassName(
    "dash-container-modification-area"
  );

  if (messagesContainers.length === 0) {
    console.error(
      "No container found with the class 'dash-container-modification-area'"
    );
    return;
  }

  // Assuming there's only one container with this class
  const messagesContainer = messagesContainers[0];
  messagesContainer.innerHTML = "";

  const AllMessages = JSON.parse(localStorage.getItem("AllMessages")) || {};

  const sortedKeys = Object.keys(AllMessages).sort((a, b) => b - a);

  //this  messageListingTitle add General Title
  const messageListingTitle = document.createElement("div");
  messageListingTitle.className = "dash-listing-title";

  messageListingTitle.innerHTML = `
    List of all Messages
  `;

  messagesContainer.appendChild(messageListingTitle);

  sortedKeys.forEach((key) => {
    const message = AllMessages[key];
    const messageElement = document.createElement("div");
    messageElement.className = "dash-for-every-message";
    messageElement.innerHTML = `
      <div class="message-to-edit">
        <p id="sender-names">
          <strong>Names: </strong><sender>${message.name}</sender>
        </p>
        <p id="sender-email">
          <strong>Email: </strong><sender>${message.email}</sender>
        </p>
        <message>
          <span>
            <strong>Message: </strong>
          </span>
          ${message.text}
        </message>
      </div>
      <div class="modification-option-for-message">
        <button class="dash-reply-btn" onclick="replyToEmail('${message.email}')">Reply</button>
        <button class="dash-delete-message" onclick="deleteMessage('${key}')">Delete</button>
      </div>
    </div>
    `;
    messagesContainer.appendChild(messageElement);
  });
  window.renderMessages = renderMessages;
}

function deleteMessage(key) {
  if (!AllMessages.hasOwnProperty(key)) {
    console.error(`Message with key ${key} does not exist.`);
    return;
  }
  delete AllMessages[key];
  updateMessageLocalStorage();
  renderMessages();
}

function updateMessageLocalStorage() {
  localStorage.setItem("AllMessages", JSON.stringify(AllMessages));
}

function replyToEmail(email) {
  window.location.href = `mailto:${email}`;
}
