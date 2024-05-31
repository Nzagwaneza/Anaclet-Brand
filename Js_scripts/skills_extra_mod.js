// const allSkills = document.body.querySelector("#dash-add-skills");
allSkills.addEventListener("click", renderSkills);

function renderSkills() {
  console.log("renderSkills function is called");
  const skillsContainer = document.querySelector(".skills-container");

  if (!skillsContainer) {
    console.error("No container found with the class 'skills-container'");
    return;
  }

  skillsContainer.innerHTML = "";

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
        <button class="dash-moddy-btn">Edit</button>
        <button class="dash-delete-skills" onclick="deleteMessage('${key}')">Delete</button>
    </div>
    `;
    skillsContainer.appendChild(skillElement);

    // this append the list of all skills to the skills displaying area
    // found on lower side of dashboard
    skillsDisplayZone.innerHTML = "";
    skillsDisplayZone.appendChild(skillsContainer);
  });
}

function deleteMessage(key) {
  const AllSkills = JSON.parse(localStorage.getItem("AllSkills")) || {};
  if (!AllSkills.hasOwnProperty(key)) {
    console.error(`Skills with key ${key} does not exist.`);
    return;
  }
  delete AllSkills[key];
  updateSkillsLocalStorage(AllSkills);
  renderSkills();
}

function updateSkillsLocalStorage(allSkills) {
  localStorage.setItem("AllSkills", JSON.stringify(allSkills));
}
