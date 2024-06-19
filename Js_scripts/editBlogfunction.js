// TODO: FUNCTION FOR MODIFY/EDIT THE SKILLS

document.addEventListener("DOMContentLoaded", () => {
  let BtnBlogEdit = document.querySelectorAll(".dash-edit-blog");

  function editBlog(key) {
    console.log("We are trying to edit blogs");
    let AllArticles = JSON.parse(localStorage.getItem("Articles")) || {};
    let article = AllArticles[key];
    if (!article) {
      console.error("Article not found");
      return;
    }

    // Create a form to edit the article
    const editForm = document.createElement("div");
    editForm.id = "edit-form";
    editForm.innerHTML = `
        <div id="topInputs">
          <input type="text" id="textTitle" placeholder="Enter the title" value="${article.title}" />
          <input type="text" id="Author-name" placeholder="Enter the name of Author" value="${article.author}" />
          <label class="my-label" for="profilePicture">Upload Profile Picture</label>
          <input type="file" id="profilePicture" accept="image/*" />
          <br />
          <label class="my-label" for="mainPicture">Upload a Picture</label>
          <input type="file" id="mainPicture" accept="image/*" />
        </div>
        <div class="dash-real-art-input">
          <div id="bottomText">
            <textarea id="dash-real-article-text" placeholder="Write the Article">${article.text}</textarea>
          </div>
        </div>
        <div id="dash-blogs-error"></div>  
        <div>
          <button id="save-edit">Save</button>
          <button id="cancel-edit">Cancel</button>
        </div>
    `;
    document.body.querySelector(".dash-listing-title").appendChild(editForm);
    document.getElementById("save-edit").addEventListener("click", () => {
      let updatedTitle = document.getElementById("textTitle").value;
      let updatedAuthor = document.getElementById("Author-name").value;
      let updatedText = document.getElementById("dash-real-article-text").value;

      article.title = updatedTitle;
      article.author = updatedAuthor;
      article.text = updatedText;

      AllArticles[key] = article;
      localStorage.setItem("Articles", JSON.stringify(AllArticles));
      document.getElementById("edit-form").remove();
      console.log("Article updated", AllArticles);
      // Optionally, you can re-render the articles here
    });

    document.getElementById("cancel-edit").addEventListener("click", () => {
      document.getElementById("edit-form").remove();
    });
  }

  for (const Btn of BtnBlogEdit) {
    Btn.addEventListener("click", (event) => {
      console.log("btn clicked");
      const key = event.target.getAttribute("data-key");
      editBlog(key);
    });
  }
});
