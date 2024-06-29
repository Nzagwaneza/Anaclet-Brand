document.addEventListener("DOMContentLoaded", () => {
  let articleDetailViews = document.querySelectorAll(".art-viewingBtn");
  let articleViewGround = document.getElementById("art-view-section");

  if (!articleViewGround) {
    console.error("Element with id 'art-view-section' not found.");
    return;
  }

  articleDetailViews.forEach((articleDetailView, index) => {
    articleDetailView.addEventListener("click", (e) => {
      e.preventDefault();

      // Ensure articleViewGround is displayed
      articleViewGround.style.display = "block";
      console.log(
        `Article view section display style: ${articleViewGround.style.display}`
      );

      // Adding scroll effect to the article view page.
      articleViewGround.scrollIntoView({ behavior: "smooth" });
      console.log("button is pressed to read the article");

      let BlogsTitleView = document.querySelector("#blog-title-view");
      let authorNameView = document.getElementsByTagName("author")[0];
      let topicPicView = document.getElementsByClassName("view-topic-pic")[0];
      let paragraphs = document.getElementsByClassName("view-combined-par")[0];
      let AllArticles = JSON.parse(localStorage.getItem("Articles")) || {};
      const sortingKeys = Object.keys(AllArticles).sort((a, b) => b - a);

      if (sortingKeys.length === 0) {
        console.error("No articles available.");
        return;
      }

      let key = sortingKeys[index]; // Assuming the index corresponds to the sorted article key
      if (!AllArticles.hasOwnProperty(key)) {
        console.error(`Article with key ${key} does not exist.`);
        return;
      } else {
        let article = AllArticles[key];
        BlogsTitleView.innerHTML = article.title;
        authorNameView.innerHTML = article.author;
        topicPicView.src = article.images[1];
        paragraphs.innerText = article.text;
        let articleFooter = document.createElement("div");
        articleFooter.className = "view-art-bottom";
        articleFooter.innerHTML = `
          <a href="#" id="share" onclick="shareOnSocialMedia()">Share <i class="fa-solid fa-square-share-nodes"></i></a>
          <a href="#" id="like" onclick="incrementLike()">Like <i class="fa-solid fa-thumbs-up"> 0</i></a>
          <form class="view-contact-form">
            <a href="#" class="comment">Leave your Comment...</a>
            <div class="form-Message">
              <textarea
                class="message"
                name="message"
                cols="30"
                rows="3"
                placeholder="Write your message here">
              </textarea>
            </div>
            <button type="submit" class="view-submitBtn">Send</button>
          </form>
        `;

        let existingFooter = document.querySelector(".view-art-bottom");
        if (existingFooter) {
          existingFooter.remove();
        }
        articleViewGround.insertAdjacentElement("beforeend", articleFooter);
      }
    });
  });
});

//  FIXME:adding scroll effects to te header

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
    }, 0);
    toSkills.style.display = "none";
    mainHome.style.display = "block";
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
    }, 0);
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
    // e.preventDefault();
    setTimeout(() => {
      toSkills.scrollIntoView({ behavior: "smooth" });
    }, 0);
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
    }, 0);
    toSkills.style.display = "none";
    toAbout.style.display = "none";
    toArticles.style.display = "block";
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
    }, 0);
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
