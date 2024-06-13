setTimeout(() => {
  let statisticsBtn = document.getElementById("statistics");
  statisticsBtn.addEventListener("click", () => {
    let AllArticles = JSON.parse(localStorage.getItem("Articles")) || {};
    let AllUsers = JSON.parse(localStorage.getItem("Users")) || {};
    let AllMessages = JSON.parse(localStorage.getItem("AllMessages")) || {};
    let AllSkills = JSON.parse(localStorage.getItem("AllSkills")) || {};
    let AllSubscribers = JSON.parse(localStorage.getItem("Subscribers")) || {};

    let blogsCount = document.getElementById("count-blogs");
    let usersCount = document.getElementById("count-users");
    let skillsCount = document.getElementById("count-skills");
    let subscribersCount = document.getElementById("count-subscribers");
    let messageCount = document.getElementById("count-messages");

    blogsCount.innerText = `${Object.keys(AllArticles).length}`;
    usersCount.innerText = `${Object.keys(AllUsers).length}`;
    skillsCount.innerText = `${Object.keys(AllSkills).length}`;
    messageCount.innerText = `${Object.keys(AllMessages).length}`;
    subscribersCount.innerText = `${Object.keys(AllSubscribers).length}`;
  });
}, 500);
