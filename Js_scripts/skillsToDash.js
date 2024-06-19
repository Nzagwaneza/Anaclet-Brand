document.addEventListener("DOMContentLoaded", () => {
  renderSkillsToSkillSection();
});

// const allSkills = document.body.querySelector("#dash-add-skills");
allSkills.addEventListener("click", renderSkills);

function renderSkills() {
  const dashSkillsContainer = document.querySelector(".skills-container"); //container in dashboard

  if (!dashSkillsContainer) {
    console.error("No container found with the class 'dashSkillsContainer'");
    return;
  }

  dashSkillsContainer.innerHTML = "";

  const AllSkills = JSON.parse(localStorage.getItem("AllSkills")) || {};

  const sortedKeys = Object.keys(AllSkills).sort((a, b) => b - a);

  skillsDisplayZone = document.querySelector(".dash-skills-lowerside");

  sortedKeys.forEach((key) => {
    const skills = AllSkills[key];
    const skillElement = document.createElement("div");
    skillElement.className = "dash-skill-item";
    skillElement.innerHTML = `
      <strong> ${skills.skills} <br /></strong>
      <div class="My_icons">
        <img class="skills-image" src="${skills.image}" alt="Image for skills" />
      </div>
      <div class="modification-option">
        <button class="dash-skills-edit-btn" onclick="editSkills('${key}')" data-key="${key}">Edit</button>
        <button class="dash-delete-skills" onclick="deleteSkills('${key}')">Delete</button>
      </div>
    `;
    dashSkillsContainer.appendChild(skillElement);

    // this append the list of all skills to the skills displaying area
    // found on lower side of dashboard
    skillsDisplayZone.innerHTML = "";
    skillsDisplayZone.appendChild(dashSkillsContainer);
  });
  // Attach the function to the window object to make it globally accessible
  window.renderSkills = renderSkills;
}
