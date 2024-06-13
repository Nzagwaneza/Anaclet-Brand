let addBlogs = document.body.querySelector(".dash-add-art");
let modifyBlogs = document.body.querySelector(".dash-modify-art");
let allUsers = document.body.querySelector("#dash-all-users");
let allBlogs = document.body.querySelector("#dash-all-blogs");
let allMessages = document.body.querySelector("#dash-all-messages");
let allSkills = document.body.querySelector("#dash-add-skills");
let statistics = document.getElementById("statistics");
let dashGeneralDisplayArea = document.body.querySelector(
  ".dash-container-modification-area"
);

function displayAllUsers() {
  allUsers.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent default behavior

    dashGeneralDisplayArea.innerHTML = `
    <div class="dash-display-zone">
      <div class="dash-listing-title">List of all users</div>
      <div class="dash-for-every-user">
        <div class="user-to-change">
            <div>
            <strong>Username: </strong><user>ndizihiwe.Eric@gmail.com</user>
            </div>
            <div><strong>Role: </strong><role>admin</role></div>
        </div>
        <div class="modification-option">
            <button class="dash-change-role-btn">Change</button>
            <button class="dash-delete-message">Delete</button>
        </div>
      </div>
    </div>       
        `;
  });
}
displayAllUsers();

function displayAllBlogs(event) {
  dashGeneralDisplayArea.innerHTML = `
    <div class="dash-listing-title">
        List of all Blogs
    </div>
    <div class="all-blogs-list">
      <div class="dash-for-every-single-blog">
        <div class="dash-title-blog">
          <span class="title-blog-to-edit">
              Coding is no longer that hard
          </span>
        </div>
        <div class="modification-option">
          <button class="dash-moddy-btn" id="dash-edit-blog">
          Edit
          </button>
          <button  class="dash-delete-message">
          Delete
          </button>
        </div>
      </div>
    </div>
          `;
}
displayAllBlogs();
allBlogs.addEventListener("click", function (event) {
  event.preventDefault();
  displayAllBlogs(event);
});

displayAllBlogs();
modifyBlogs.addEventListener("click", function (event) {
  event.preventDefault();
  displayAllBlogs(event);
});

function displayAllMessages() {
  allMessages.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent default behavior

    dashGeneralDisplayArea.innerHTML = `

    <div class="dash-listing-title">List of all Messages</div>
    <div class="dash-display-zone">
      <div class="dash-for-every-message">
      <div class="message-to-edit">
        <p id="sender-names">
          <strong>Names: </strong><sender>Ndizihiwe</sender>
        </p>
        <p id="sender-email">
          <strong>Email: </strong><sender>ndizihiwe.Eric@gmail.com</sender>
        </p>
        <message>
          <span>
            <strong> Message: </strong>
          </span>
            Hey dude you are so funny and all yours are fantastic all over the world .  Big up!
        </message>
        </div>
        <div class="modification-option-for-message">
          <button class="dash-reply-btn">
              Reply
          </button>
          <button  class="dash-delete-message">
            Delete
          </button>
        </div>
      </div>
    </div>
     
        `;
  });
}
displayAllMessages();

function displayAllSkills() {
  allSkills.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent default behavior

    dashGeneralDisplayArea.innerHTML = `
    <div class="dash-listing-title">Skills management zone</div>
    <div id="dash-top-input">
      <input
        type="text"
        id="dash-name-of-skills"
        placeholder="Enter the acquired skills"
      />
      <label for="skills-describing-image">Upload the Picture</label>
      <input type="file" class="skills-describing-picture" accept="image/*" />
      <div id="dash-skills-error"> </div>
      <div class="dash-add-skills">
      <button type="submit" onclick="addSkills()" class="dash-add-skills-btn">
          Add skills
        </button>
      </div>
    </div>
    <div class="dash-skills-lowerside" class="dash-display-zone">
      <div class="skills-container">
        <div class="dash-skill-item">
          <strong>Programming language <br /></strong>
          <div class="My_icons">
              <i class="fa-brands fa-js"></i>
              <i class="fa-brands fa-python"></i>
          </div>
          <div class="modification-option">
              <button class="dash-moddy-btn">Edit</button>
              <button class="dash-delete-skills">Delete</button>
          </div>
        </div>
        <div class="dash-skill-item">
          <strong>Software development tools <br /></strong>
          <div class="My_icons">
              <i class="fa-brands fa-python"></i>
          </div>
          <div class="modification-option">
              <button class="dash-moddy-btn">Edit</button>
              <button class="dash-delete-skills">Delete</button>
          </div>
        </div>
        <div class="dash-skill-item">
          <strong>Web development <br /></strong>
          <div class="My_icons">
              <i class="fa-brands fa-python"></i>
              <i class="fa-brands fa-js"></i>
              <i class="fa-brands fa-html5"></i>
          </div>
          <div class="modification-option">
              <button class="dash-moddy-btn">Edit</button>
              <button class="dash-delete-skills">Delete</button>
          </div>
        </div>
        <div class="dash-skill-item">
          <strong>Designing and development tools<br /></strong>
          <div class="My_icons">
                  <i class="fa-brands fa-python"></i>
                  <i class="fa-brands fa-js"></i>
                  <i class="fa-brands fa-html5"></i>
          </div>
          <div class="modification-option">
              <button class="dash-moddy-btn">Edit</button>
              <button class="dash-delete-skills">Delete</button>
          </div>
        </div>
      </div>
    </div>
        `;
  });
}
displayAllSkills();

document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll(".menu-link");

  links.forEach(function (link) {
    link.addEventListener("click", function (event) {
      const currentActive = document.querySelector(".active");
      if (currentActive) {
        currentActive.classList.remove("active");
        currentActive.classList.remove("thunder-effect");
      }
      this.classList.add("active");
      this.classList.add("thunder-effect");
      setTimeout(function () {
        window.location.href = link.getAttribute("href");
      }, 30); // Adjust the delay to match the thunder effect duration
      event.preventDefault(); // Prevents the default behavior after applying the classes
    });
  });
});

function addingBlog() {
  addBlogs.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent default behavior

    dashGeneralDisplayArea.innerHTML = `
    <div id="topInputs">
      <input type="text" id="textTitle" placeholder="Enter the title" />
      <input
        type="text"
        id="Author-name"
        placeholder="Enter the name of Author"
      />
      <label for="profilePicture">Upload Profile Picture</label>
      <input type="file" id="profilePicture" accept="image/*" />
      <br />
      <label for="mainPicture">Upload a Picture</label>
      <input type="file" id="mainPicture" accept="image/*" />
    </div>
    <div class="dash-real-art-input">
      <div id="bottomText">
        <textarea
          name=""
          id="dash-real-article-text"
          placeholder="Write the Article"
        ></textarea>
      </div>
    </div>
    <div id="dash-blogs-error"></div>  
    <div>
      <button id="dash-submit-Blog-Btn" onclick="addBlogsToLs()">
        <i class="fas fa-paper-plane"></i> Submit
      </button>
    </div>     
    `;
  });
}
addingBlog();

//TODO: #adding EventListener to the buttons or links from Dashboard

allBlogs.addEventListener("click", () => {
  displayAllBlogs();
  renderBlogsToDash();
});

modifyBlogs.addEventListener("click", () => {
  displayAllBlogs();
  renderBlogsToDash();
});

statistics.addEventListener("click", (e) => {
  e.preventDefault();
  dashGeneralDisplayArea.innerHTML = `

    <div class="dash-listing-title"> Statistics</div>
    <p class="stat-welcome">Welcome to the Statistics Section: Here is the summarized info for this brand.</p>
    <div class="dash-display-zone" id="count">
      <div class="count">
        <span class="count-title">Uploaded Blogs</span>
        <div class="number-of-count" id="count-blogs">14</div>
      </div>
      <div class="count">
        <span class="count-title">Number of Users</span>
        <div class="number-of-count" id="count-users">14</div>
      </div>
      <div class="count">
        <span class="count-title">All skills</span>
        <div class="number-of-count" id="count-skills">14</div>
      </div>
      <div class="count">
        <span class="count-title">Messages</span>
        <div class="number-of-count" id="count-messages">14</div>
      </div>
      <div class="count">
        <span class="count-title">Subscribers</span>
        <div class="number-of-count" id="count-subscribers">14</div>
      </div>
    </div>
     
        `;
});
