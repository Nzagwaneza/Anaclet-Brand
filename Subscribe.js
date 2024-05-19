document.addEventListener("DOMContentLoaded", function () {
  var modalSubscribe = document.getElementById("myModalsubscribe");
  var closeButtonSubscribe = document.getElementById("closeModalsubscribe");
  var emailInput = document.getElementById("email");
  var emailError = document.getElementById("emailError");
  var submitSubscribeButton = document.getElementById("submitSubscribe");

  function openModal() {
    modalSubscribe.style.display = "flex";
    resetForm();
  }

  function closeModal() {
    modalSubscribe.style.display = "none";
  }

  // Function to reset the form and clear messages
  function resetForm() {
    emailInput.value = "";
    emailError.textContent = "";
    emailError.className = "";
  }

  // Close the modal when the close button is clicked
  closeButtonSubscribe.addEventListener("click", closeModal);

  window.addEventListener("click", function (event) {
    if (event.target == modalSubscribe) {
      closeModal();
    }
  });

  submitSubscribeButton.addEventListener("click", function () {
    emailError.textContent = "";
    if (!isValidEmail(emailInput.value)) {
      displayMessage("Please enter a valid email address", "error");
      return;
    }
    displayMessage("Subscription successful!", "success");
    emailInput.value = "";
  });

  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function displayMessage(message, type) {
    emailError.textContent = message;
    emailError.className = type; // Add a class to indicate message type
  }

  // Add event listener to the Subscribe link
  document
    .querySelector(".openSubscribe")
    .addEventListener("click", function (event) {
      event.preventDefault();
      openModal();
    });
});
