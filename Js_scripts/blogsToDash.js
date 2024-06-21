allBlogs.addEventListener("click", function (event) {
  event.preventDefault();
  let AllArticles = JSON.parse(localStorage.getItem("Articles")) || {};

  function renderBlogsToDash() {
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
            <button class="dash-moddy-btn dash-edit-blog" data-key="${key}">
              Edit
            </button>
            <button  class="dash-delete-blog" data-key="${key}">
              Delete
            </button>
          </div>
        `;
      blogContainer.appendChild(blogElement);
    });

    // Add event listeners to the delete buttons after they are rendered
    document.querySelectorAll(".dash-delete-blog").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        const key = e.target.getAttribute("data-key");
        showDeletePopup(key);
      });
    });
  }

  function showDeletePopup(key) {
    const popup = document.getElementById("popup");
    const yesBtn = document.getElementById("confirmAlert");
    const noBtn = document.getElementById("StopDefault");

    popup.classList.add("activated");

    const confirmDelete = () => {
      deleteBlog(key);
      popup.classList.remove("activated");
      yesBtn.removeEventListener("click", confirmDelete);
    };

    const cancelDelete = () => {
      popup.classList.remove("activated");
      noBtn.removeEventListener("click", cancelDelete);
    };

    yesBtn.addEventListener("click", confirmDelete);
    noBtn.addEventListener("click", cancelDelete);
  }

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

  renderBlogsToDash();
  window.renderBlogsToDash = renderBlogsToDash;
});

let AllArticles = JSON.parse(localStorage.getItem("Articles")) || {};

function renderBlogsToDash() {
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
              <button class="dash-moddy-btn dash-edit-blog" data-key="${key}">
                Edit
              </button>
              <button  class="dash-delete-blog" data-key="${key}">
                Delete
              </button>
            </div>
          `;
    blogContainer.appendChild(blogElement);
  });

  // Add event listeners to the delete buttons after they are rendered
  document.querySelectorAll(".dash-delete-blog").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const key = e.target.getAttribute("data-key");
      showDeletePopup(key);
    });
  });
}

function showDeletePopup(key) {
  const popup = document.getElementById("popup");
  const yesBtn = document.getElementById("confirmAlert");
  const noBtn = document.getElementById("StopDefault");

  popup.classList.add("activated");

  const confirmDelete = () => {
    deleteBlog(key);
    popup.classList.remove("activated");
    yesBtn.removeEventListener("click", confirmDelete);
  };

  const cancelDelete = () => {
    popup.classList.remove("activated");
    noBtn.removeEventListener("click", cancelDelete);
  };

  yesBtn.addEventListener("click", confirmDelete);
  noBtn.addEventListener("click", cancelDelete);
}

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

renderBlogsToDash();
window.renderBlogsToDash = renderBlogsToDash;
