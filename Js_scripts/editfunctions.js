let BtnBlogEdit = document.querySelectorAll(".dash-edit-blog");
console.log;

function editBlog() {
  console.log("We are trying to edit blogs");
  let AllArticles = JSON.parse(localStorage.getItem("Articles")) || {};
}

editBlog();

for (const Btn of BtnBlogEdit) {
  Btn.addEventListener("click", () => {
    console.log("btn clicked");
  });
}
