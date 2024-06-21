function addSkills() {
  let submitSkillsBtn = document.querySelector(".dash-add-skills-btn");
  let AllSkills = JSON.parse(localStorage.getItem("AllSkills")) || {};

  let nameOfSkillInput = document.getElementById("dash-name-of-skills");
  let nameOfSkillText = nameOfSkillInput.value.trim();
  let imgForSkillsInput = document.querySelector(".skills-describing-picture");
  let imgForSkillsFile = imgForSkillsInput.files[0];

  let skillsError = document.getElementById("dash-skills-error");

  if (!skillsError) {
    console.error("No element found with id 'dash-skills-error'");
    return;
  }

  if (nameOfSkillText === "" || !imgForSkillsFile) {
    skillsError.className = "fail";
    skillsError.innerHTML = `Please fill in this form correctly`;
    return;
  }

  const readerForSkillsImg = new FileReader();

  readerForSkillsImg.addEventListener("load", () => {
    const skills = {
      skills: nameOfSkillText,
      image: readerForSkillsImg.result,
    };

    const skillsId = new Date().getTime().toString();

    AllSkills[skillsId] = skills;
    skillsError.className = "success";
    skillsError.innerHTML = `Skills added successfully. Thanks!`;
    nameOfSkillInput.value = "";
    imgForSkillsInput.value = "";
    updateSkillsLocalStorage();
  });
  // Attach the function to the window object to make it globally accessible
  window.addSkills = addSkills;

  readerForSkillsImg.readAsDataURL(imgForSkillsFile);

  function updateSkillsLocalStorage() {
    localStorage.setItem("AllSkills", JSON.stringify(AllSkills));
  }

  if (submitSkillsBtn) {
    // submitSkillsBtn.removeEventListener("click", addSkills); // Remove any existing listener to prevent multiple attachments
    submitSkillsBtn.addEventListener("click", addSkills, renderBlogsToDash);
    updateSkillsLocalStorage();
    submitSkillsBtn.addEventListener("click", renderBlogsToDash); //FIXME:this code does not work.
  } else {
    console.error("Button with class 'dash-add-skills-btn' not found");
  }
}
