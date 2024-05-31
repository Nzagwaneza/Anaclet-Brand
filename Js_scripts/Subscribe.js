document.addEventListener("DOMContentLoaded", function () {
  var modalsSubscribe = document.querySelectorAll(".modalsubscribe");
  var closeButtonsSubscribe = document.querySelectorAll(".closesubscribe");
  var emailInputs = document.querySelectorAll(".email");
  var emailErrors = document.querySelectorAll(".emailError");
  var submitSubscribeButtons = document.querySelectorAll(".submitSubscribe");
  var openSubscribeLinks = document.querySelectorAll(".openSubscribe");

  function openModal(modal) {
    modal.style.display = "flex";
    resetForm(modal);
  }

  function closeModal(modal) {
    modal.style.display = "none";
  }

  function resetForm(modal) {
    var emailInput = modal.querySelector(".email");
    var emailError = modal.querySelector(".emailError");
    emailInput.value = "";
    emailError.textContent = "";
    emailError.className = "emailError error";
  }

  openSubscribeLinks.forEach((link, index) => {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      openModal(modalsSubscribe[index]);
    });
  });

  closeButtonsSubscribe.forEach((button, index) => {
    button.addEventListener("click", function () {
      closeModal(modalsSubscribe[index]);
    });
  });

  submitSubscribeButtons.forEach((button, index) => {
    button.addEventListener("click", function () {
      var emailInput = emailInputs[index];
      var emailError = emailErrors[index];
      emailError.textContent = "";
      if (!isValidEmail(emailInput.value)) {
        displayMessage(
          "Please enter a valid email address",
          "error",
          emailError
        );
        return;
      }

      displayMessage("Subscription successful!", "success", emailError);
      emailInput.value = ""; // Reset the email input field
    });
  });

  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function displayMessage(message, type, emailError) {
    emailError.textContent = message;
    emailError.className =
      type === "error" ? "emailError error" : "emailError success";
  }
});
