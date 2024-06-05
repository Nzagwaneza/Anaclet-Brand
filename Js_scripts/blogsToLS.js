function addBlogsToLs() {
  console.log("We are trying to add a blogs to local storage");
  let AllArticles = JSON.parse(localStorage.getItem("Articles")) || {};
  let articleTitleInput = document.getElementById("textTitle");
  let articleTitle = articleTitleInput.value.trim();
  let articleAuthorInput = document.getElementById("Author-name");
  let articleAuthor = articleAuthorInput.value.trim();
  let authorPicForBlog = document.querySelector("#profilePicture");
  let authorPicForBlogFile = authorPicForBlog.files[0];
  let descPicForBlog = document.querySelector("#mainPicture");
  let descPicForBlogFile = descPicForBlog.files[0];
  let realTextInput = document.getElementById("dash-real-article-text");
  let realText = realTextInput.value;
  let blogsError = document.getElementById("dash-blogs-error");

  if (!blogsError) {
    console.error("No element found with id 'dash-blogs-error'");
    return;
  }

  if (
    articleTitle === "" ||
    articleAuthor === "" ||
    !authorPicForBlogFile ||
    !descPicForBlogFile ||
    realText === ""
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
      text: realText,
    };

    const articleId = new Date().getTime().toString();

    AllArticles[articleId] = article;
    blogsError.className = "success";
    blogsError.innerHTML = `Blog added successfully. Thanks!`;
    articleTitleInput.value = "";
    articleAuthorInput.value = "";
    authorPicForBlog.value = "";
    descPicForBlog.value = "";
    realTextInput.value = "";
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
