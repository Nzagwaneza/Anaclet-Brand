let allUsers = document.body.querySelector("#dash-all-users");
let allBlogs = document.body.querySelector("#dash-all-blogs");
let allMessages = document.body.querySelector("#dash-all-messages");
let allSkills = document.body.querySelector("#dash-add-skills");
let dashGeneralDisplayArea = document.body.querySelector(
  ".dash-container-modification-area"
);
// let dashDisplaySkills = document.body.querySelector(
//   ".dash-container-modify-skills"
// );

function displayAllUsers() {
  allUsers.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent default behavior

    dashGeneralDisplayArea.innerHTML = `
    <div>
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
        <div class="dash-for-every-user">
            <div class="user-to-change">
                <div><strong>Username: </strong><user>anaclet Nzg</user></div>
                <div><strong>Role: </strong><role>user</role></div>
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

function displayAllBlogs() {
  allBlogs.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent default behavior

    dashGeneralDisplayArea.innerHTML = `
    <div class="dash-listing-title">
        List of all Blogs
    </div>
    <div class="all-blogs-list">
        <div class="dash-for-every-message">
            <div class="title-blog-to-edit">
                <span>
                    Mastering Figma designing
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
  });
}
displayAllBlogs();

function displayAllMessages() {
  allMessages.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent default behavior

    dashGeneralDisplayArea.innerHTML = `

    <div class="dash-listing-title">List of all Messages</div>
    <div>
      <div class="dash-for-every-message">
          <div class="message-to-edit">
              <p>
                <strong>Sender: </strong><sender>ndizihiwe.Eric@gmail.com</sender>
              </p>
              <message>
                <span>
                  <strong> Message: </strong>
                </span>
                  Hey dude you are so funny and all yours are fantastic all over the world . keep
                  doing great coz you are really special creature. i repeat again you are so special
                  that your blogs and motivations are building my future. Big up!
              </message>
          </div>
          <div class="modification-option">
              <button class="dash-reply-btn">
                Reply
              </button>
              <button  class="dash-delete-message">
              Delete
              </button>
          </div>
      </div>
      <div class="dash-for-every-message">
        <div class="message-to-edit">
            <p>
              <strong>Sender: </strong><sender>anzagwaneza@gmail.com</sender>
            </p>
            <message>
              <span>
                <strong> Message: </strong>
              </span>
                Hey dude you are so fanny and all yours are fantastic . keep
                doing great coz you are really special creature
            </message>
        </div>
        <div class="modification-option">
            <button class="dash-reply-btn">
              Reply
            </button>
            <button  class="dash-delete-message">
            Delete
            </button>
        </div>
      </div>
      <div class="dash-for-every-message">
        <div class="message-to-edit">
            <p>
              <strong>Sender: </strong><sender>anzagwaneza@gmail.com</sender>
            </p>
            <message>
              <span>
                <strong> Message: </strong>
              </span>
                Hey dude you are so fanny and all yours are fantastic . keep
                doing great coz you are really special creature
            </message>
        </div>
        <div class="modification-option">
            <button class="dash-reply-btn">
              Reply
            </button>
            <button  class="dash-delete-message">
            Delete
            </button>
        </div>
      </div>
      <div class="dash-for-every-message">
        <div class="message-to-edit">
            <p>
              <strong>Sender: </strong><sender>anzagwaneza@gmail.com</sender>
            </p>
            <message>
              <span>
                <strong> Message: </strong>
              </span>
                Hey dude you are so fanny and all yours are fantastic . keep
                doing great coz you are really special creature
            </message>
        </div>
        <div class="modification-option">
            <button class="dash-reply-btn">
              Reply
            </button>
            <button  class="dash-delete-message">
            Delete
            </button>
        </div>
      </div>
      <div class="dash-for-every-message">
        <div class="message-to-edit">
            <p>
              <strong>Sender: </strong><sender>anzagwaneza@gmail.com</sender>
            </p>
            <message>
              <span>
                <strong> Message: </strong>
              </span>
                Hey dude you are so fanny and all yours are fantastic . keep
                doing great coz you are really special creature
            </message>
        </div>
        <div class="modification-option">
            <button class="dash-reply-btn">
              Reply
            </button>
            <button  class="dash-delete-message">
            Delete
            </button>
        </div>
      </div>
      <div class="dash-for-every-message">
        <div class="message-to-edit">
            <p>
              <strong>Sender: </strong><sender>anzagwaneza@gmail.com</sender>
            </p>
            <message>
              <span>
                <strong> Message: </strong>
              </span>
                Hey dude you are so fanny and all yours are fantastic . keep
                doing great coz you are really special creature
            </message>
        </div>
        <div class="modification-option">
            <button class="dash-reply-btn">
              Reply
            </button>
            <button  class="dash-delete-message">
            Delete
            </button>
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
      <input type="file" id="profilePicture" accept="image/*" />
        <div class="dash-add-skills">
            <button type="submit" class="dash-add-skills-btn">
            Add skills
            </button>
        </div>
    </div>
    <div class="dash-skills-lowerside">
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
        `;
  });
}
displayAllSkills();
