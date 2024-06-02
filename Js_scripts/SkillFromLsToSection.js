document.addEventListener("DOMContentLoaded", () => {
  renderSkillsToSkillSection();
});

function renderSkillsToSkillSection() {
  const skillsContainer = document.querySelector("#skills-container"); //container in my skills section.

  skillsContainer.innerHTML = "";

  const AllSkills = JSON.parse(localStorage.getItem("AllSkills")) || {};

  const sortedKeys = Object.keys(AllSkills).sort((a, b) => b - a);

  skillsDisplayZone = document.querySelector(".dash-skills-lowerside");

  sortedKeys.forEach((key) => {
    const skills = AllSkills[key];
    const skillSectionElement = document.createElement("div");
    skillSectionElement.className = "dash-skill-item";
    skillSectionElement.innerHTML = `
      <strong> ${skills.skills} <br /></strong>
      <div class="My_icons">
        <img class="skills-image" src="${skills.image}" alt="Image for skills" />
      </div>
      `;
    skillsContainer.appendChild(skillSectionElement);
  });
  // Attach the function to the window object to make it globally accessible
  window.renderSkillsToSkillSection = renderSkillsToSkillSection;
}

function deleteSkills(key) {
  const AllSkills = JSON.parse(localStorage.getItem("AllSkills")) || {};
  if (!AllSkills.hasOwnProperty(key)) {
    console.error(`Skills with key ${key} does not exist.`);
    return;
  }
  delete AllSkills[key];
  updateSkillsLocalStorage(AllSkills);
  renderSkills();
  renderSkillsToSkillSection();
}

function updateSkillsLocalStorage(allSkills) {
  localStorage.setItem("AllSkills", JSON.stringify(allSkills));
}
