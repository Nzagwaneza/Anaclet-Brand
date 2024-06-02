function addBlogsToLs() {
  console.log("We are trying to add a blogs to local storage");
  let AllArticles = JSON.parse(localStorage.getItem("Articles")) || {};
  let articleTitle = document.getElementById("textTitle").value.trim();
  let articleAuthor = document.getElementById("Author-name").value.trim();
  let authorPicForBlog = document.querySelector("#profilePicture");
  let authorPicForBlogFile = authorPicForBlog.files[0];
  let descPicForBlog = document.querySelector("#mainPicture");
  let descPicForBlogFile = descPicForBlog.files[0];
  let blogsError = document.getElementById("dash-blogs-error");

  if (!blogsError) {
    console.error("No element found with id 'dash-blogs-error'");
    return;
  }

  if (
    articleTitle === "" ||
    articleAuthor === "" ||
    !authorPicForBlogFile ||
    !descPicForBlogFile
  ) {
    blogsError.className = "fail";
    blogsError.innerHTML = `Please fill in this form correctly`;
    return;
  }

  const authorImage = new FileReader();
  const descImage = new FileReader();

  authorImage.addEventListener("load", () => {
    const article = {
      title: articleTitle,
      author: articleAuthor,
      images: [authorImage.result, descImage.result],
    };

    const articleId = new Date().getTime().toString();

    AllArticles[articleId] = article;
    blogsError.className = "success";
    blogsError.innerHTML = `Blog added successfully. Thanks!`;
    articleTitle = "";
    articleAuthor = "";
    authorPicForBlog.value = "";
    descPicForBlog.value = "";
    updateArticlesLocalStorage();
  });

  descImage.addEventListener("load", () => {
    authorImage.readAsDataURL(authorPicForBlogFile);
  });

  descImage.readAsDataURL(descPicForBlogFile);

  function updateArticlesLocalStorage() {
    localStorage.setItem("Articles", JSON.stringify(AllArticles));
  }
  window.addBlogsToLs = addBlogsToLs;
}
