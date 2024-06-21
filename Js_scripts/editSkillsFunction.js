// Ensure the editSkills function is defined globally
window.editSkills = function (key) {
  console.log("We are trying to edit SKILLS with key:", key);
  let AllSkills = JSON.parse(localStorage.getItem("AllSkills")) || {};
  let skills = AllSkills[key];
  if (!skills) {
    console.error("Skills not found for key:", key);
    return;
  }

  // Create a form to edit the skills
  const originForm = document.getElementById("dash-top-input");
  if (!originForm) {
    console.error("Origin form element not found");
    return;
  }

  const editForm = document.createElement("div");
  editForm.id = "edit-form";
  editForm.innerHTML = `
        <input type="text" id="name-of-skills-edit" placeholder="Enter the acquired skills" value="${skills.skills}">
        <label for="skills-describing-image">Upload the Picture</label>
        <input type="file" id="skills-describing-image-edit" class="skills-describing-picture" accept="image/*">
        <div>
          <button id="save-skills-edit">Save</button>
          <button id="cancel-edition">Cancel</button>
        </div>
      `;

  originForm.insertAdjacentElement("afterend", editForm);
  originForm.style.display = "none";

  document.getElementById("save-skills-edit").addEventListener("click", () => {
    let updatedSkillsInput = document.getElementById("name-of-skills-edit");
    let updatedSkillsImage = document.getElementById(
      "skills-describing-image-edit"
    ).files[0];

    skills.skills = updatedSkillsInput.value;

    if (updatedSkillsImage) {
      const readerForSkillsImg = new FileReader();
      readerForSkillsImg.onload = (e) => {
        skills.image = e.target.result;
        AllSkills[key] = skills;
        localStorage.setItem("AllSkills", JSON.stringify(AllSkills));
        document.getElementById("edit-form").remove();
        console.log("Skills updated with new image");
      };
      readerForSkillsImg.readAsDataURL(updatedSkillsImage);
    } else {
      AllSkills[key] = skills;
      localStorage.setItem("AllSkills", JSON.stringify(AllSkills));
      document.getElementById("edit-form").remove();
      console.log("Skills updated without new image");
    }
  });

  document.getElementById("cancel-edition").addEventListener("click", () => {
    document.getElementById("edit-form").remove();
    originForm.style.display = "";
  });
};

// Event listener for DOMContentLoaded
document.addEventListener("DOMContentLoaded", () => {
  let BtnSkillsEdit = document.querySelectorAll(".dash-skills-edit-btn");

  // Loop through all edit buttons and attach event listeners
  for (const Btn of BtnSkillsEdit) {
    Btn.addEventListener("click", (event) => {
      console.log("btn clicked");
      const key = event.target.getAttribute("data-key");
      editSkills(key); // Call editSkills when the button is clicked
    });
  }
});
