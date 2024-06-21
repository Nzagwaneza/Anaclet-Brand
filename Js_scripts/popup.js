// const popup = document.getElementById("popup");
// const closeBtn = document.getElementById("closeBtn");
// const DeleteBtns = document.querySelectorAll(".dash-delete-message");
// let yesBtn = document.getElementById("confirmAlert");
// let noBtn = document.getElementById("StopDefault");

// DeleteBtns.forEach((Btn) => {
//   Btn.addEventListener("click", (e) => {
//     alert("are you sure?");
//     popup.classList.add("active");
//   });
// });

// yesBtn.addEventListener("click", (e) => {
//   popup.classList.remove("active");
// });

// noBtn.addEventListener("click", (e) => {
//   e.preventDefault();
//   popup.classList.remove("active");
// });

const popup = document.getElementById("popup");
const deleteBtns = document.querySelectorAll(".dash-delete-message");
const yesBtn = document.getElementById("confirmAlert");
const noBtn = document.getElementById("StopDefault");

deleteBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    popup.classList.add("active");
  });
});

yesBtn.addEventListener("click", () => {
  popup.classList.remove("active");
});

noBtn.addEventListener("click", (e) => {
  e.preventDefault();
  popup.classList.remove("active");
});
