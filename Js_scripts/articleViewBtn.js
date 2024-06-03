document.addEventListener("DOMContentLoaded", () => {
  let articleDetailView = document.querySelectorAll(".art-viewingBtn");
  let articleViewGround = document.getElementById("art-view-section");

  articleDetailView.forEach((key) => {
    key.addEventListener("click", (e) => {
      e.preventDefault();
      articleViewGround.style.display = "block";
      articleViewGround.scrollIntoView({ behavior: "smooth" });
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
        paragraphs.innerHTML = article.text;
      }
    });
  });
});
