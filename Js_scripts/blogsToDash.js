// this function is designed to add list of all blogs's titles to the
// dashboard modification area

let AllArticles = JSON.parse(localStorage.getItem("Articles")) || {};

document.addEventListener("DOMContentLoaded", () => {
  function renderBlogsToDash() {
    console.log(
      "this function is designed to add list of all blogs's titles to the dashboard modification area"
    );
    let blogContainer = document.querySelector(".all-blogs-list");
    blogContainer.innerHTML = "";

    const sorted = Object.keys(AllArticles).sort((a, b) => b - a);
    sorted.forEach((key) => {
      const article = AllArticles[key];
      const blogElement = document.createElement("div");
      blogElement.className = "dash-for-every-single-blog";
      blogElement.innerHTML = `
              <div class="dash-title-blog">
                  <span class="title-blog-to-edit">
                      ${article.title}
                  </span>
              </div>
              <div class="modification-option">
                  <button class="dash-moddy-btn" id="dash-edit-blog">
                      Edit
                  </button>
                  <button onclick="deleteBlog(${key})" class="dash-delete-message">
                      Delete
                  </button>
              </div>
        `;
      blogContainer.appendChild(blogElement);
    });
  }
  renderBlogsToDash();
  updateBlogsLocalStorage();
  window.renderBlogsToDash = renderBlogsToDash;
});

function deleteBlog(key) {
  if (!AllArticles.hasOwnProperty(key)) {
    console.error(`Blog with key ${key} does not exist.`);
    return;
  }
  delete AllArticles[key];
  updateBlogsLocalStorage();
  renderBlogsToDash();
}

function updateBlogsLocalStorage() {
  localStorage.setItem("Articles", JSON.stringify(AllArticles));
}
