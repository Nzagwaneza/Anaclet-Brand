document.addEventListener("DOMContentLoaded", () => {
  let articleDetailView = document.querySelectorAll(".art-viewingBtn");
  let articleViewGround = document.getElementById("art-view-section");

  articleDetailView.forEach((key) => {
    key.addEventListener("click", (e) => {
      e.preventDefault();
      articleViewGround.style.display = "block";
      //adding scroll effect to the article view page.
      articleViewGround.scrollIntoView({ behavior: "smooth" });
      setTimeout(() => {
        document.scrollBy({ top: -70, behavior: "smooth" });
      }, 400); // TODO: i can adjust the timeout accordingly #for Insane behaviors.

      console.log("button is pressed to read the article");

      let BlogsTitleView = document.querySelector("#blog-title-view");
      let authorNameView = document.getElementsByTagName("author")[0];
      let topicPicView = document.getElementsByClassName("view-topic-pic")[0];
      let paragraphs = document.getElementsByClassName("view-combined-par")[0];
      let AllArticles = JSON.parse(localStorage.getItem("Articles")) || {};

      for (let key in AllArticles) {
        let article = AllArticles[key];
        BlogsTitleView.innerHTML = article.title;
        authorNameView.innerHTML = article.author;
        topicPicView.src = article.images[1];
        paragraphs.innerText = article.text;
      }
    });
  });
});

//  FIXME:adding scroll effects to te header

// let menu = document.querySelector(".hm-menu");
// let Home = document.getElementById("scrollHome");
// let About = document.getElementById("scrollAbout");
// let Skills = document.getElementById("scrollSkills");
// let Articles = document.getElementById("scrollArticles");
// let Dash = document.getElementById("scrollDash");

// Home.addEventListener("click", (e) => {
//   e.preventDefault();
//   let toHome = document.getElementById("home");
//   toHome.scrollIntoView({ behavior: "smooth" });
// });

// About.addEventListener("click", (e) => {
//   e.preventDefault();
//   let toAbout = document.getElementById("about-me");
//   toAbout.scrollIntoView({ behavior: "smooth" });
// });

// Skills.addEventListener("click", (e) => {
//   e.preventDefault();
//   let toSkills = document.getElementById("skills");
//   toSkills.scrollIntoView({ behavior: "smooth" });
// });

// Articles.addEventListener("click", (e) => {
//   e.preventDefault();
//   menu.removeEventListener;
//   window.screenY(0);
//   let toArticles = document.getElementById("articles");
//   toArticles.scrollIntoView({ behavior: "smooth" });
// });

// Dash.addEventListener("click", (e) => {
//   e.preventDefault();
//   let toDash = document.getElementById("dashboard");
//   toDash.scrollIntoView({ behavior: "smooth" });
// });

document.addEventListener("DOMContentLoaded", (e) => {
  e.preventDefault();
  let Home = document.getElementById("scrollHome");
  let About = document.getElementById("scrollAbout");
  let Skills = document.getElementById("scrollSkills");
  let Articles = document.getElementById("scrollArticles");
  let Dash = document.getElementById("scrollDash");

  let toHome = document.getElementById("home");
  let mainHome = document.querySelector(".hm-main");
  let toAbout = document.getElementById("about-me");
  let aboutDetail = document.querySelector(".ab-detail");
  let toSkills = document.getElementById("skills");
  let toDash = document.getElementById("dashboard");
  let mainDash = document.querySelector(".dash-container");
  let toArticles = document.getElementById("articles");

  Home.addEventListener("click", (e) => {
    e.preventDefault();
    setTimeout(() => {
      toHome.scrollIntoView({ behavior: "smooth" });
    }, 100);
    toSkills.style.display = "none";
    mainHome.style.display = "contents";
    toAbout.style.display = "none";
    toArticles.style.display = "none";
    mainDash.style.display = "none";
    aboutDetail.style.display = "none";
    toDash.style.display = "none";
  });

  About.addEventListener("click", (e) => {
    e.preventDefault();
    setTimeout(() => {
      toAbout.scrollIntoView({ behavior: "smooth" });
    }, 100);
    toSkills.style.display = "none";
    toAbout.style.display = "none";
    toArticles.style.display = "none";
    mainHome.style.display = "none";
    aboutDetail.style.display = "flex";
    toAbout.style.display = "flex";
    mainDash.style.display = "none";
    toDash.style.display = "none";
  });

  Skills.addEventListener("click", (e) => {
    e.preventDefault();
    setTimeout(() => {
      toSkills.scrollIntoView({ behavior: "smooth" });
    }, 100);
    toSkills.style.display = "flex";
    toAbout.style.display = "none";
    toArticles.style.display = "none";
    mainHome.style.display = "none";
    aboutDetail.style.display = "none";
    mainDash.style.display = "none";
    aboutDetail.style.display = "none";
    toDash.style.display = "none";
  });

  Articles.addEventListener("click", (e) => {
    e.preventDefault();
    setTimeout(() => {
      toArticles.scrollIntoView({ behavior: "smooth" });
    }, 100);
    toSkills.style.display = "none";
    toAbout.style.display = "none";
    toArticles.style.display = "contents";
    mainHome.style.display = "none";
    aboutDetail.style.display = "none";
    toAbout.style.display = "none";
    mainDash.style.display = "none";
    toDash.style.display = "none";
  });

  Dash.addEventListener("click", (e) => {
    e.preventDefault();
    setTimeout(() => {
      toDash.scrollIntoView({ behavior: "smooth" });
    }, 100);
    toSkills.style.display = "none";
    toAbout.style.display = "none";
    toArticles.style.display = "none";
    mainHome.style.display = "none";
    aboutDetail.style.display = "none";
    mainDash.style.display = "flex";
    aboutDetail.style.display = "none";
    toDash.style.display = "flex";
  });
});
