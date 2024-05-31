// TODO: Crud for messages.

let NameOfSenderInput = document.getElementById("ft-sender's-name");
let NameOfSenderText = NameOfSenderInput.value.trim();
let EmailOfSenderInput = document.getElementById("ft-sender's-email");
let EmailOfSenderText = EmailOfSenderInput.value.trim();
let MessageOfSenderInput = document.getElementById("ft-message-to-admin");
let MessageOfSenderText = MessageOfSenderInput.value.trim();

let SubmitMessageBtn = document.getElementById("ft-submit-message");
let displayAllMessagesBtn = document.getElementById("dash-all-messages");
//tracking "div" for errors while messaging
let MessageError = document.getElementById("dash-message-error");

let AllMessages = JSON.parse(localStorage.getItem("AllMessages")) || {};

function addMessage() {
  const NameOfSenderText = NameOfSenderInput.value.trim();
  const EmailOfSenderText = EmailOfSenderInput.value.trim();
  const MessageOfSenderText = MessageOfSenderInput.value.trim();

  if (
    NameOfSenderText === "" ||
    EmailOfSenderText === "" ||
    MessageOfSenderText === ""
  ) {
    MessageError.className = "fail";
    MessageError.innerHTML = `Please fill in the form correctly`;
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
  //successful message
  MessageError.className = "success";
  MessageError.innerHTML = `Message sent successfully.Thanks!`;

  NameOfSenderInput.value = "";
  EmailOfSenderInput.value = "";
  MessageOfSenderInput.value = "";
  updateMessageLocalStorage();
}

function updateMessageLocalStorage() {
  localStorage.setItem("AllMessages", JSON.stringify(AllMessages));
}
