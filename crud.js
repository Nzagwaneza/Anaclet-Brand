// TODO: Crud for messages.

let NameOfSenderInput = document.getElementById("ft-sender's-name");
let NameOfSenderText = NameOfSenderInput.value.trim();
let EmailOfSenderInput = document.getElementById("ft-sender's-email");
let EmailOfSenderText = EmailOfSenderInput.value.trim();
let MessageOfSenderInput = document.getElementById("ft-message-to-admin");
let MessageOfSenderText = MessageOfSenderInput.value.trim();

let SubmitMessageBtn = document.getElementById("ft-submit-message");
let displayAllMessagesBtn = document.getElementById("dash-all-messages");

let AllMessages = JSON.parse(localStorage.getItem("Messages")) || {};

document.addEventListener("DOMContentLoaded", (event) => {
  renderMessages();
});

displayAllMessagesBtn.addEventListener("click", renderMessages);

function addMessage() {
  const NameOfSenderText = NameOfSenderInput.value.trim();
  const EmailOfSenderText = EmailOfSenderInput.value.trim();
  const MessageOfSenderText = MessageOfSenderInput.value.trim();

  if (
    NameOfSenderText === "" ||
    EmailOfSenderText === "" ||
    MessageOfSenderText === ""
  ) {
    alert("Please fill in the form correctly");
    return;
  }

  const messageId = new Date().getTime().toString();

  const message = {
    name: NameOfSenderText,
    email: EmailOfSenderText,
    text: MessageOfSenderText,
  };

  // Add the message to AllMessages object
  AllMessages[messageId] = message;

  NameOfSenderInput.value = "";
  EmailOfSenderInput.value = "";
  MessageOfSenderInput.value = "";
  updateLocalStorage();
  renderMessages();
}

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
        <button class="dash-reply-btn">Reply</button>
        <button class="dash-delete-message" onclick="deleteMessage('${key}')">Delete</button>
      </div>
    </div>
    `;
    messagesContainer.appendChild(messageElement);
  });
}

function deleteMessage(key) {
  if (!AllMessages.hasOwnProperty(key)) {
    console.error(`Message with key ${key} does not exist.`);
    return;
  }
  delete AllMessages[key];
  updateLocalStorage();
  renderMessages();
}

function updateLocalStorage() {
  localStorage.setItem("AllMessages", JSON.stringify(AllMessages));
}
