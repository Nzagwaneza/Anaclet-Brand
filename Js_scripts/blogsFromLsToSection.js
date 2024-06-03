document.addEventListener("DOMContentLoaded", () => {
  function blogsToSection() {
    console.log("trying to add blogs to their section");
    let mainBlogsSection =
      document.getElementsByClassName("articles-container")[0];
    mainBlogsSection.innerHTML = "";

    let AllArticles = JSON.parse(localStorage.getItem("Articles")) || {};
    const sortedKeys = Object.keys(AllArticles).sort((a, b) => b - a);
    sortedKeys.forEach((key) => {
      const timestamp = parseInt(key);
      const date = new Date(timestamp);
      const day = date.getDate();
      const month = date.getMonth() + 1; // Months are zero-indexed in JavaScript
      const year = date.getFullYear();
      const sectionArticle = AllArticles[key];
      const articleSectionElement = document.createElement("div");
      articleSectionElement.className = "for-every-article";
      articleSectionElement.innerHTML = `
            <span id="title">${sectionArticle.title}</span>
            <div class="art-leftside">
            <div class="art-topic-related-pic">
                <img id="art-main-pic" src="${sectionArticle.images[1]}" alt="" />
            </div>
            <div class="art-Right">
                <img
                    class="art-pic-for-auth"
                    id="art-pic-for-auth"
                    src="${sectionArticle.images[0]}"
                    alt="Author's Picture"
                />
                <div class="art-description">
                    <span id="art-name-of-author"
                        ><strong>Author's name:</strong> ${sectionArticle.author}</span>
                    <span id="uploadDate"><strong>Uploaded on</strong> ${day}/${month}/${year}</span>
                </div>
            </div>
            </div>
                <button class="art-viewingBtn">View</button>
            </div>
          `;

      mainBlogsSection.appendChild(articleSectionElement);
    });
  }
  blogsToSection();
});
